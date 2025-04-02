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
    "3a7AqMuGAx4w2PkysvmgEibBgFWkZAvqUGAh2KwnA859wxFLAnkD8DXjgwz26RBVWrLuFf8EHSrXJMHUDvXimf4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RVWJJSHW7bLT9ufix5si1ufJt4vk56Qn9fWtN3sKoThV79gc4ULKLPAq4n7dShHiskFQx7TDHmrSU1eMK8MUW4c",
  "key1": "2ykKDJ5QJWC53X3pbAAKkJKFQrbvRW9KqSMBpaQNbR91cP7M2acgC8iioVrK8mYvcEZDyU2xTvzwPTr93v9s4E8F",
  "key2": "4hCF5tuskXYKN76mrbPR1FHjoExuwj6cVp7Y2Su5hFkJy11sGFDgi6CayfXw5HPjgY1isvbuRqs6WznAZ6FZEcuN",
  "key3": "5i8smJBAwhpjDVrmmSvWw67ZaxyoEyqV9iqJB3nrSikKotE82GbpQioxgm1JfG24XRicbfRDeo9NUo9o7dJ9DStw",
  "key4": "5duqW6RwjHGu2WxmUbQfCEcxpaY6AmBUCic7ZS6FUdtYhBWdN7A8sE81btXFWbyw22ofLjWhTpzJdCAYrD3NuiVC",
  "key5": "4Fv9sRTweerKDViLGDeJJVzW1LeoZikEZwMa7NCtuxumuGzxCqqnBAceG4Rc8aXstYKtQ8FCaCmCH7LcXQkHEufN",
  "key6": "3affBdY5uvSbkhxXNc3WH2CtUmWMA4bqMDtP1aBt5qfWVSFGhyPbjr3mWHRuUCprsXmUWn8NBRqvnkkrpiaYWW3S",
  "key7": "5oy3VwEtWoRAyzoUucCs4P5PuZe3iP3xUptx74uA1Pm1YxW3H66UPSFe7kGzniVYRjwASpuu8yPLVUkVBZXFkeDL",
  "key8": "35kRiKgd51xJ8dgXocwo1sejXNeMd6zKMbVoyxpoHahusYUoSdoUdn1MAHPLjCFaPhcJ55D7PXy8Q2qwRYAZo7iZ",
  "key9": "auwZB7HmpagjiX9sdybhidhbe6pudY9q3KyXYkT8Sg9CByiqhor68aWwRYyvmuKmSQjGMa4dx4kiMESFELKR4Pd",
  "key10": "4WFmyq8ih3FoFyoNSVV7ARa9J3axnycVMc8X38hGEXCUud7Pivj4htN8hkELg34o25JXDR2Jenoee68A36DfFvkM",
  "key11": "23FrGHxdyjsxZhsJvS95d93kvjsPtiS1biATucJStDiSVPM99UQRAbe2izQzMPqMHs3zcdqTAAXwqQUer2x15kTM",
  "key12": "5peqUkykNuijYrgoHCC6jPUmBXnF32Nw61sfqQk2MNTsG8qQqveRRSLhgU1WR1J8SSUbdLG7GAVjMvi6GyZYKD73",
  "key13": "3TPLCZbNdqw4h7HFQLFp8aYaVN23xAsZMGtMitG3xNzBtQ4swZwUmpMakyJ9N6QiGWsHx6PwN7YUnkGPTVMqRkZk",
  "key14": "4jmGxwTDM2U3k9oW5i7TfJhkvd9is2VdmXKGq76zSg8BkDR9CqjuehJNXeARAoV9MHUdXhHszXvcZXKz2N9qKnrm",
  "key15": "2re5feU5RcLqW1wM1xhXwQ2ykqTFS4zmbFWoqyA9oWYvas8fD7BFPYhxwuSRWKJQp9Q5MYKcrxKJJjU38TnKKf8v",
  "key16": "5V4n19X1rCRQ82QogR4ZdG5xMuwMTEEWJTwErKxvjqBMajFe7SQrSQ8JNrgWez9mxSksnQjvra7d3AoTQnwARdWS",
  "key17": "4LnnkjPyQnwhAAvMwByyPWTFf5iyxx3tXVa6AMLKRT9Ss4xwoW5HTSVoNyMPmj11BWBodoXL1mVfy3XD2tDSFw2B",
  "key18": "4TpqYR9bE4XPQBzS6e8FkcE2SZ5tmEsBmTrcVzqVU23edZfoR731d3MPozLSn2LHiR9AqU9mT9unJtreE3EmwWwz",
  "key19": "MJtk4jiFUDGkAf4cxDcY4qZxFWCmM3f1uGhvKmeK2m2czpk8EW1mPed2j6jA4RT925gLAQXMQYptJA9UGpKKEgA",
  "key20": "3ML8PMYQ1byr6tTraz8oY3WjTo3BUQVAehZZRw7HEQ3wMx4UVKwtNzJLV7CQmnYrMP589uqDEYm5NV2QjgCCZ3gk",
  "key21": "g1fuUtwCQ6a7sd2RGDL4ey199rPXgJik6afSmqjUdAPMUgrBLP6Tkyu7z6PAVCPLsuDWY8iUVHqjNWQ4FEjbDBZ",
  "key22": "489UU3TJzDoifMEzjaepNgpw5137Axo3d8LbwwpsYKw7Q6DgCTgb3UXU4RWJgszqy6sVvYqgATNy8Q8tTdcCXh4g",
  "key23": "4ZPPZFzaotbD5UtE5ZroDHpE1E9TRMRq2pYLw5x78zsznsjy7edfY1R6z4Qcsvex17hmiDuBzuzaub8fPw2R7qCC",
  "key24": "5fCnp8SVB9nH9pwDWFf7e7z97c7ujT83SPFUThnqW1hVBP8tVnQ8hVv1198VP7JaLPcD5KBkDAuPGG3iRAxvQNva",
  "key25": "2DBZ5ppcXKr5jGDYREeDeNmuo9Rx6MVXoQUd9fdwpfVXG25m3Ck5kZ2i8nsX4ViED3cukbCtiKDAwmCVZXLsaXv4",
  "key26": "4w6mmzLJLKAVw2aXtyNq84TeafXNMYBiEMJPbcVYUYM9ryDaKZuXwVeLY8TYAfKvuYNRtzbffHxYSwSgXpC8aJWL",
  "key27": "3BU9BZksGh6Nih7MREn23uyuRA3JdoS8buV1fqcDdwyG9wn2DFHQ2YkXw78MemoVt3ujn5gXr6cQ2pY2iuefb3t4",
  "key28": "4fRwQbuKtbwTw75sqkt9xf8SKpURA5hwf5AjA5X2YWZH2aTxR7WMeNLi4DbCuuTXNYKguVPdqSEjWfSCJ1D5yKzp",
  "key29": "2zkSwxkYffRDDJEHzFpsouS3TaD9SyHDLVNXjFXo8xHnPMHGvfMQ4PoGKpDRSEG2fYtnfgnpbFGZRrPn3NEk1s83",
  "key30": "2AnrwSPjG75HdSVWHr1wK1nm4xbCkSexsTB5c4bzFhGet4vNt78LzBTPkGmHcDSABjTk4j2ZYpEcaZrvZwqGTqo3",
  "key31": "4v3SvRMXKtXnrXGpxawL2jyBj6LE5FrywtDPtYwfWVm9qThA2K2zDYQ8THZZocAYXkm4twQuVXe4sJJLqw8GJ1Kk"
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
