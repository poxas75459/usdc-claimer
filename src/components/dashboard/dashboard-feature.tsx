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
    "5hVWLYepCWhMRwwqaCznk18f9nRwqLTuosc8Adm3FrpdL2fAfmgaoquzy1UoFWP6Wq13q9gUTk1XydpaVdDH7xcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g8gZVjTJDsZ9SuQm9AVj5BRGha2cjdBU3qvzbffXVcx2wBEv2LXuG9DCe9W3AYfRGUg3DaDBobMahJFJUUKa9kD",
  "key1": "2v8BE6yKTRFHJRcrVHA8jktZhMehATPcLvH7W7jEPjVG9RgzAexnTsy8CrXsD96fJZXW6udJP1cUKqPAkwNbqR8A",
  "key2": "7ky1964LYshGt7a8gpsbMTVfZFp2ZcaZ5yxvEqRcfh775X2dB14MUwugttNhs29pR9wLVT1EL67yUKrvKGNv3EZ",
  "key3": "3wen7Psa5tk6ZWNNzi2WyoD6kAmQ9rZWzmV1XVW3hUi41ii2TrWbi3C4TDHzEJiDDsFuYsJERL7oM6coiDM7BTw9",
  "key4": "2zdBnYTPL1cEs1f19UnMNnXCSpK7onnV6Y9Yn9V9v6Sdf66RBtUnDvRGMVd99xyDTjTHjRyVN3jiSXUBQ6T5jodJ",
  "key5": "2fSe2w7dbmnRQmw7fNXLYaw4MVDsAZifi4k5XdKkjWEPp3vQRdronZb3CpFTPYAi6knS8X7sxsA1vNP9LUPeEBvy",
  "key6": "5PDWHpg3GMP4ifiBwSa7E7UsfqA3T6THGbdSmq9utYufWKEEqs98RrkcBboXXjK56XQL8URbiRnnhZZwp43WmA5G",
  "key7": "1nC8VpPGYbC2fNUM53vv8rn6DZHk7RA2Psys8QASPLyezT7FAm6CLn8qdfqfn6fcXqprtzt9ZjQCUgWCbCYG7mE",
  "key8": "3FRd489vZcDNZq2m7RnMSXr81owLEopGbbYHy3m3U6qUdzejFP9miUtTKV3juSdhXmekuoiVmSvtbys1W93tFXPU",
  "key9": "3FCVRWjMoJ2FJnsNPALKg5ZiJN53DHHxJgN4w5nwRXnVQvA1t6vqJPBecfRyMg4hnao6bVKS57VYXAextF7BFJcc",
  "key10": "3xhW9MJRjDfsAcEWQ7PVibJDWuV2rgqNAjVnhUNNBUcTbAY7eySTha8Bqb1ZuYrXJDvBALbewF12U6XJfEqZcGoK",
  "key11": "3FooA6Yjo7Py5ATkSaA59RYgJxW3ScG84p9W4hPuz2ZAYgxEJibFe43MW8i2BDX2aQKjtCRdDxtR2ZFVvPL8Dt2b",
  "key12": "2EHunCRPqXD4fZViqF61SeX692nufY3MYi6i2CD3H5QefotF1R8Z7iiM1WYH9K8EWYx7iwLnYirfeFospxxAJU55",
  "key13": "5P2yhF2KLkYGbnWuBKZdPgRkUx61q2fUuBQnCmvrsWSbk8nLvS8RnsPoiFMCTooN4GJZxYpiRs3ppfZam26Fsps6",
  "key14": "4RJXktMLfm4TqHyF4YDc3fCyWKSUrSmnTFYptuJugejMQrSZVR5qV9pBWYvVHgTPRY1ceoWYnoi86mSGavWj9tQU",
  "key15": "2RkHs76p7ZxpWy8FXkQWjgHYwLf8WMHeU1RzVyLkeX7obyNZcipXzF8dnzSsBmFM4TVTBG7S89EtV7HamiFErrQ2",
  "key16": "5jUJcq9yGeR3Fiin7Gv77cQk7xwHoLAuLz3PJzKQRXPmCq8G5KYgTeprWtEpCqZQRy145yhmwsYq7MLa21nGQEHt",
  "key17": "xj84zy6AbHcwjhFr6xdUt8DCJwe4xTSNobnvCMZNHiKnjzbPQuAGu6q6bqQJtAX4iuRCyjH6b65qhgJea3aLLpW",
  "key18": "5sUjkF8K4sqTodiaUy42PgjyE1eCW23fj5GGsL4TV8VdTdZj6L5JcBwefKUX1ccdFPpAVNqu5Sb9J87oeoAvsrv2",
  "key19": "4Msymc2sQ88yArq6Q88g1qWCVi91oX6Sv4pv1gz37KAobbBPq5o9jqbUmEhh7Pbq1uUZtCkSAna6AKFUk8KkdkQL",
  "key20": "QoHkCw1Nf8Wwnw4QRmqWXRWnwiM66VQDdEbx9YYUfc7b4TFNrH82XZ2jQSdrCPo2DGnHmZdFbLotitnCTLCARqR",
  "key21": "3cHJioektxFa6kCMP4v8v4XsoM2PesttRijL46oHDm8fAA23nvBjLuf3KfVdtxM7LCN99JFygy1miTvtH9KZybMc",
  "key22": "5abtVYULwFxd5pSwERWa17X9NSW7ASTVbMXhMVYYcRoCyzrmGbtxqdvgApGT184UyV64ZD3wnmrqi5VvA7wvSb2w",
  "key23": "UGDizxaCKdqBsJZJthVZajuYfyPUsMf3Pozui32KZNTg3M38TYG3YPUMntKSzRkBBdrUAbWJuJMA9yAJcUQdRqu",
  "key24": "iN3NxFGzDKHnAJNKRpFkWnbjacPDipLJyo6sGHamASukVLKvByBuTfiY8s4quHwRfZCe1YeWb1ScwnixTYkJsh1",
  "key25": "23cgQKWTydzpyR8vRTngzTFFYK6A3UUjp43P4gvzAariN1dSabYxuaWag9R4GpmffnAaFfbJm1ZacCzwqWgMmnGz",
  "key26": "NUrYLkpgZsSV2ufk3qFuhhBdJTmzKPRo2TJuzb2bNvPUkP25mQwHMSRM26NXDhNSoL1ZWW5KSdvazZq9WBUCpt6"
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
