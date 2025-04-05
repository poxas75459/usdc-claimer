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
    "34Tf8nQoCk4LhFntPVZ2kHTciHgPvcoJQuo8VrHTfLp65BjsuUFpxWFJfkxMzo9cyRoumh7zS31WUBZb1tCZykf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLoyHQa7nVnbVxMRTUpNyqfYmTfhH1VAWfFzPnbCzXumvpqnhW6NUzdjSeVuoHXa87xWDg68ueEqTyT3LgaDhFk",
  "key1": "9CZkrNegVdpLhdxbpjjoYQzKZW2bmFhMJU5qLRikhQo1GwZjZqkmPHynuXsEqwHn7rNJm2w9WDwY6dG6A6iWEhn",
  "key2": "2vi31yY7t7sLGfJBNF8kmPHydrpkfzkkKxmE24Eb8R9fafrWha7MxhUFbAePBQXsEVRyyNHU37ojP9SvPQ9F1Ub4",
  "key3": "5DEjSZ8v8EuapHh4Y2E8MwMSPeUbkpjq2C6PaSujDRY2JoqhtnGM1dMjV8sLXRJN4ULCUke1gFF5m7EDMetFBXs3",
  "key4": "5DG5UhtvdYK4tiib87Co2dUhJqCqG7xn3vNNEU54wws5CcfhV7NVYN978EXyuqkxg4rumdmx8K3jcKqykDYUMgNA",
  "key5": "3DMXyeyXMtZipq3bQX1P6qzodTkGPrLm1y59F5N65tPbhN3GQCrPwaPsugcZZN3PMSD1TuLAWprLsQj5NMCub7aL",
  "key6": "4dPvp7i1h5JwQYgkTWxkd3UTzLw9YaBWpMSuXf9snDvxvAtzZy62iG6LzbrVRaw9pVJNeXERPqLphQnmb7Moidjk",
  "key7": "pj77SF2KAszcYtgsUAYSWPAX62sPXxvCFJzUf1o5aWGL34x9AjgUaGUyW39hqQbJ7TnkUozuaHMAHTUT83U79Ac",
  "key8": "4LBKeJvpQjrhu73cCH5dzZPws9A2niMNbDovySZqKRYyfHKFHf25Vx1BDuw98c83bKbWTYSP3V16S1Ryu3jBigf4",
  "key9": "4rz2zg6j5FFAei6gCZzfzWZXoY1izru3C354BxvtVE2STdDaWHNgx8ANPE356UDbPVk7eAvA2gpe1q2hiVF5LsBX",
  "key10": "zcrz9pqxUEUPxzxTYyEbz7dKT5hbsdPuqdym46LLxpumZFWfvmRQT8ncEC2CFRds5oJKwiezkXxxANdTzn6YuR8",
  "key11": "5fQkxyJRrxPStxRmJZLx4GQtWYcVacxoar3z6xuce4AuVaKmpxVz8vu5iDgNKP4WEwxpA7MxHLqgJgcWgf7uC8Wf",
  "key12": "41Qp6emcy7rNGUqYtpwXyefTCseMyqH2WdngumpxELRE2u42P7aDbPhE2fHXbFdaRrixHaZ3ZgLNJsvW2poeAiNq",
  "key13": "Aj1VCYg74cotg4NinNm38e2FiygwDCUtDwZnn1bQZMwPEyhHnCDZvar2VaJLtV4NeZ1z5XWNMhEax6nbAT18yoG",
  "key14": "58XqrdVC8tqvCqin1HZjmoA7DSRrRMzga6a4yXhdb5n5sG7TEjaD7Mnyvh4Tp17sFVvDuXfFZyqu8hdnxhkz1322",
  "key15": "2PcJTwS1i6EWtaFsknxkpyzMTCTCeLrH7eqx4c5dfsiRTnMvDSbco7pF3zrDVeB81GDmhEh2w8Vi9NvHnnBd5Yxk",
  "key16": "44LuSdub5UnmTvPpGZcojUiyk5cm3JLM5zqWrwpZgeJcvF5u8cJndtB18vWew11ac3UwnY1pD6vwM9kyBfvUjd1h",
  "key17": "5y1VBX84kzNECPPCnuq1RuLg4hfYhFE2EaJtCNCRWgCfXQHXtd7Yvq1AxGBzTY93ZCjRvPgJDt8G4SCdxzm57m1C",
  "key18": "2hk4a85E4vXPSF8FqjFyPzQzUwyq3tMb4GWpBtZmTXtd4o4UfyvqSg1r6uBEWba7iXgHhywFeWWmgifmWmDtzuYy",
  "key19": "E6MmLUcXGLFtJvbT2RepT5WWPifmPcTFxzvBrXgYb8mBGmrVTs7ewpmZVjNoM8RqdfGSGhCQiQqADy1rSf2y1vT",
  "key20": "2awnUBC32BeXuKGjWd1Cf4nSwHDTCj5Los5DHfBoxwpkQ5QR2nsKXBRtKvS7dVcTA6RqoMty7b4AJ2n8whJTrec",
  "key21": "2ihxWjFds1KVCrJV1gMEUu4LJ5Vcf87r2Jq8MQjPgUXHXhyr7uBCqVCmRrzaXGZQc8yp7HiZj8iab8QZiFvPErBg",
  "key22": "3kTZkVPgWt9AdYZDiNDPonCCKiBdsxvzkHMKdQTfXwKDC9oLsTZksh3MhAHQM1CpyNR2fAFq9aUdYAjxHGf8Pdkr",
  "key23": "5tUvZ4mMCoLC1iY7wF6oKpbQrHW6Jf7TmZraydcvd1EWNboihghN5AHbjuY62dooQWe5qzi1bbsct7SUys98FerP",
  "key24": "2zgMLjzG2JXHsQjMLPwasJRRDQFtirTM3tzv89MsYndk7WYdtD1pJ1k4wBbhriBmTd5aAoPeEE4qWFtdUNsbKZNR",
  "key25": "75aHgcqzHaifFqQHYcCBYjApcLQykP5fMR39PC28LBRhQCswTTg76XRXxhUSg21TZACN4EKf8SiysNbWkub5ZyP",
  "key26": "4TgbGvQazfHz92Gsjt4v1QGVtYX4qNXQfGuHtD8HtqXmq6K9rE2jJYGyrKQbyjLe5X7MbywVDYXYPM2Jzf3Mfm5m"
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
