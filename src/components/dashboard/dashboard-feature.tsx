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
    "35FQoge2Gbzsfhb6y5R1M3BeFNo8j2gMExB9UAVCMieDRLf8XvK4EHu2jFiYTnDGHHqsanqisjhMjxa1RwdJ91kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ff96gAJHc75xri1iod43TitCKUNNMV3PtzpEoKamphHxiXzhvuRRrr93nAveJdVKpNZuCSWcKtc8wt9RHyPxpW3",
  "key1": "2Dp1BfkpqzubxrnUoLdz9ipNWj9JmGqEBn1FdrjXoML1HHeU2SQSF69gBPCrXvpU4AES8x4gDCstHsqRFwHSq5RQ",
  "key2": "45eCzW9HWzKW1j5BZJtzJMKiZtYrQtMy9S9923DxsHiE3EtZsUUPbSCbBTSNxMYgPQRMMMnGULcdmQrFWgVxybKv",
  "key3": "28LnD2cr5dRn8RtK2RgRWYGbkqNgW2jXHWo3cg9Jn1ttpFUF6hkJvmpBmQVLwHH7orD9RVVYinrnr9krq3bbmsuS",
  "key4": "4TNFBaVgwsxak3BbhUycGoWcmziQDw6coJPVF9MDv4KL5R6P6bDwHSgMZoou5zQqUFBeq8uuTA5DUtwy57AUvi3",
  "key5": "66AdnLiccphAttqq5XdyKFASQdmDBe35FcWZ2e6QVZTvm8gaWFD4r8aTxBmVJGKuKWyn5etaveKP9MbChw2YYmab",
  "key6": "2VeUsxLWzNPKDufS9jY5EU385TTuFetGD8RhNZc6i9dH8oyZUvEnSCqnTZnRqjMZY5QoSP3GErkVF7FQRm4V2BhM",
  "key7": "4j4mSLf45yvz7jFTwKDRQH3FTPsKJ6jw4cgGgrpb1GtVtUa3tFotwNd72ERxTymvXBGEiPdCsXuHh7YkMFwp1Ri8",
  "key8": "hJT8VabctHfHHaKNzcbsD3gM9xUW93kEiHX8T3oZ5k4seTLFskpB8xawGcFZjMyDS27NNAJDTQcXGNU3DZSMh9v",
  "key9": "3c2WqV1gnTVddG2FvDGmW3u2ZsWxL1VFg1UEQNCvQhH2WYfWGofY1iW6MfrppXmLfCdouYD1RuGvEgMFnkWx5Vu8",
  "key10": "bBYYp85TBpDeu7wiSr7FNJN7Fftp2Pv78Fn6NWXWMogVJgD7AYYFSMvHGNBHTudnfhczUjPh7WiW3NFQLknqjFj",
  "key11": "5nzPgo3iaDoSB4rJjKAG55jqSTSCq8A1pnRXwX1hGFas4g9GWwjoWyZsGosUFySS8cNgffqsr6QPfsqHVY9dBEiV",
  "key12": "5zNJi4dPEthRZMYJha58uDZnfpQfQcQJaeDqpLw6yHnpJ3Xt6oH7thMkthk1jSwB1NWG2ZJ41vBCFWTwZUF97x8c",
  "key13": "2eogDbXKZgh1TrvxgoHRhvnQWLYrp3CprNZHKfoy5FMx3EB8SDjETJoJQcYc36yyR8h99GVf76jk9QgC7yM4ZnJK",
  "key14": "2kJh7y2Q3kPc7TXaGECcWT7DgxPxKFBa3GFajodwH9s6hvjCs2g1kRDoCxFtmN5HJmeKMXhgKhzrNCWrS8Wgpkaz",
  "key15": "5VbyJdacXYMyfJUqdt6ixqN8JMjbXqox6Ddu4vGnLNE9MKGoJCyLsPKm3XenkW4DyfzdAwnSS6qUr6DkHnMNZqbQ",
  "key16": "2ejaXy98WyMz7ZzuWi8nEkWBtjaADLyTpAhTrKAn2Bz9qBdCGwTZhURGbiwMPMtAU9afj3QYdMfDs6NP5Z3e2hhb",
  "key17": "5Z953rGYTaUWX3kpcmVRqUmZf5dWsWbHX3BSkNzYCVtGSy3ZvyPDJEZJsrpvQCSyHqRW8R3cq3YVhr2xkaW7zGhw",
  "key18": "BG6YGvrc7eQQduZpFCTk8AwkM4W3mU8tWxjxKR8T6Yx2RAsd46PEauGNG3onFsLnpZcmUU6Cv6TZv7p9uPua89P",
  "key19": "3L7XYzFDfxwSGsJ7U3B4whM2bV1LzHTZmRTDPfwZ3ydQ7XcNM47AY3Y7p16z7yitnKFhud6TTX9YS1ivcvWYsAYn",
  "key20": "2L3CCVkBFXBBWs7B869GRju1ee71Yp4jLMZ9pm9EWNPsLwuxqGkTK6qTUfnHrDReHgoWr1HdTh9VigQfeC5bWmvw",
  "key21": "2f6d8R7iiYvmem9QqzLg684faTWqfWiRwEp9RE6ZpYfA2TW7m9peH1wx4SQKL644YojDbJfZo4W1xRUm5NvC9rmJ",
  "key22": "642v87hMS6bHpDTuryJ6kqrGDdGEHR1FK8BuL8KV6456BkPSj5VV4zpkvBjkkfdffBsSyFRfZPGFp4Vogkb7Q6eP",
  "key23": "oFi99DB93psmxvMnietj89ivX4g4ksafRZNTJwRoJp5c8TzSmdUb1TURcTXzSVgEkJC4ZfU2A9whW6DZ9dbcu8e",
  "key24": "39XeoXbTFshZT1EB8oX82UjsV8wMV6dYQiWJtoyGV6gGbJhZFPjhAa26FiubqrFhECBHH7JJHu2t3oy3JhpDz2BP",
  "key25": "4EMTSt5Ao6tjKEkrJLM92FPa6orcUfkHsh4Jkm3ybNkLeBeS1xjUQTNR5734wni1NU95Kp4yRCS42Wyr16DFLquw",
  "key26": "2wzPht2uLcR8ELog1mUBr2wXDT5chboknkcnesi8FRX36XPBKDWS57N2pdK5CyerjJcEFhdzdTVVR9ipJQJdKn3T",
  "key27": "542kPwwz2cU7q2HkRoE3dnf9DXjn5bswS1qh8N8YUiGNqczN3pkv8VfsSk5rFRHEouBkQVNGfXaS8enaxVsifbJ3",
  "key28": "4dhD4EyYVHhkaS4f71PNDczNzjAPs4khkHc3zBWNt71tpAM9ponDkZZReR2YFnV9aNUzqVQUgm6mCVtPmtxSap9w",
  "key29": "2XCZPeZEpxFLeXznchvM148haNxJ2f4pPLUWACeRDrRW6JnCyergK3DaARtSjc1RcjR8mWcYcLMMV7Cx7EVpnr1g"
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
