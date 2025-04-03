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
    "TFptMujjH44hmsLBb7VvwdAFi4U6deKtdaR4ukxNXnaTPQ6GR1TGfW8UdJm7kDesou4etaaM4qRBA8Up7G6ZqyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8TTTJ7cuNZQkzyoghwR9922Ur2zgAA4JyC2tAbEeGTVRwDgDSCiMDxSyrQZGHrvZdmaNQn7zFm5Mj4YCcGEjPC",
  "key1": "3mD5cy4bzgeqzSTY67oqfSbgjPwjqrLcqA8cXoDpPCgzntizmqwon79fZUExjjpSZMMhvKnzCHnyH4yVh4BGXdBs",
  "key2": "4aayKoAhmuytJy7omQijG3n2VNxjnA5iHsgxd5y1UXjYR7CxFxfo52BofKkQBN9m6fjLkhAAzYdon7FzWhmmSFFN",
  "key3": "CfLA2NbnexkUShMkZgTFbvBSuAb7PVji2MqPHwRS13RRVDTn1WXSqLfSAmaWaXJ2qFtAYCMQxm9pi5BptZSZRx9",
  "key4": "4igmTT6ES6CV4RAT6Ji6HZyagcyr4ckEnvAZ8wNc8Y6Q4vkShtUV7NFxBQBFRkCfH39Uab4tkWEdZWwwKPfBbp3C",
  "key5": "4oP87kDfqRA4fgsphAwaJmDKxugjTGXMYaVBQsjigHfkiL5YyJv1CKoWgwUHfrdXcMAqFj8m9xJCYXhpJQWi7gkJ",
  "key6": "5WfAE2BvWH5DVhL9pm3gkx5Gdzc2FvMRvUtyeWRoidnxFkENFKQYdz6gPrhz64tmKHaaLcnsRGKDCbPP7EZTDFMi",
  "key7": "4kaR7wUrpThDR6XE5VNpGud331KU3NzqevpqDhAtE6RVoAFnnGXSsLbhKXcDRxfbfNj2YV2yQcpB7QVNDyJVxKGp",
  "key8": "4TDttmirSNF9S86WtByuUWrQnPq5BQmQfwWvDsDGkpwjqXTGsQedk2eBeRxFPQex7QDA6cTAQgYgCpdmb5uYBNVD",
  "key9": "28CARpw2bk4B9nGoeQevKH6hTYjG2QiLUzfCyzPKy6xTziuvtePAjGB3u2fYWRcTQijCmZQKNwefiKo8Dfq52bVa",
  "key10": "5w2g2778MLg2DbfCnMNQ3NBWLshH7JcnA6Z1M5yjQdY3YW95GnnT8zjhYcMtFCLoTFJJRth7m5EuM75mDFm48ooK",
  "key11": "3WCvjhRa1QqtggyerW35b3nKev24pHYEU2KFSNqbqSNoEHwzosMKfqAMJACHKfYPRnXdCPXy1HvCbA19U96VhjUP",
  "key12": "2ReCc7KBeJKFWYibPYspvZb4ZDiXanYTJrbsEjRcMob7e8k9iJQrytP5vxTZmEPsr1ybjVq3LKzhrSdju7MuHxj5",
  "key13": "h72pVzWE2upM2Dd9oqNbXbhfKm4VMuP3ZPF2eAWTnoUiceu2xymX6YjZHkXqg9AWRzmenqoiX3xNzc9PJrZe1ZX",
  "key14": "3yGJCdGdJ7p4gnFacN1WmetgdJd18jJUcneD7257gCEGmSPnTusd2AnVNQ1Tt4Dcet6AHpmX9TtsyNFN7u3dTXrD",
  "key15": "54eCxAEthvxvUdpnZSLY7bbqWEcK6fteHaNS9TD5Xg4H2piJVpUQ6itUrmE1yN6TUKrYfmcCeA8ykoBUKHy4uRxG",
  "key16": "44dGnyHywCaCoEEuUXdgspZk3X64mdqCj7TmMY8sYUshbMBHjRQCNqHADLzAVim73ywLvEeAGkoVpSQhs7k5Sg4U",
  "key17": "3evg1yoebY5q9K1mgnxVPm1QEvdnYKgpgwm3dhS9jSPxUTw5ztSdesntoZSVaxeqJrprmoy1L1cbMvYsrakjDPQW",
  "key18": "2SFD1WGS7wGCZBqzzQR9SKsGPsfuYWjKJpBKL91Xt3iQkN4XTfW8z4mHHjgyY7xFYac84B2HATEhE4jC3KTW1pL2",
  "key19": "3eSsnsH3dkTDJpBhPTwq81VRFYvmAoeXKcz31UVDrBoW6PndRTdY2he2TW6BU4dbu9TjuEW58AMt4xpGuXUaeiwW",
  "key20": "3fTt53S2XENzyJfAdmtYoS4ECavLmq8RouSgEj8mmZQUDrMusDP9xesd6VBULY4WpKVWqNZGWfcVopszJrL1DtMY",
  "key21": "LsdYz6DuDxNrfSBEcJpg9KmPJgkgWLrsKrwkArvkQrsuAXWQTnXHSwNwM9DgKbEy7oZP4QdRi7NN2mPLLR98V6B",
  "key22": "8XokpixnGWmed5mu37nbEykSxcZHcy6kVwSg1vGjs6ZAKSBfZ5g48Uep81gBMCUtAm9JqMEKEGTRm51wo9boW8L",
  "key23": "LVPiz4vkgtPrWoRV28x2aNeEZU8xzqxzYADqGb3L1m97A4dh1pjHyaNhFHMUgAXoiBncyaQe1LQii6rr6RLAab2",
  "key24": "3kET17CkNhxUatBAraP1wHjCFeTHUdnPsSoq7sQbBKqT7MZk4QSpT123vviAELTmCt9BrKxca9ryqm5BJhf1uMDr",
  "key25": "4aGWZS692ARYGwzLXJyZ8FAqE4q5jNenNRv3GJFgKeYBFmLDHXD1pKN2zzvkgwFkuKxZA4Gh9gC4BPmyBWL9FCYN",
  "key26": "5th8guBukmEC7vyeBifK8rKr7hpQfiPQHK2fXooN6UL15GXzCanpa43GdPGg3cfoogpm4kFDV9bqHYB259nMukz9",
  "key27": "64pMPSYCLpkrqdZkfYTCYGWB6AMv9sVPBMgQGYxAs3ajHh7FvjmBwVsXnfgyyExq3g9BoAxopH9G9EcL7H45KJiJ",
  "key28": "2Wa1GQDPc9yasWTkdedYpGG5TWwaQVB3vS1K2geejnyAiQ1Xs1957tW2eV5phzXzvErcMddhejUy9nXJMxG7fMKY",
  "key29": "61HwqBazVb4YU3iW8umRv6y9dEQF7fpnHQjyqtJRLb17RsktNuZuPzZALfBtsbhdnnV2JNDByFtcLLCZscwCpXKu",
  "key30": "2YqQ4PTtVU6C42nJWJxQwacUPrTQ1ELjmLVJzrL9VhSLbBZx7ioJnKimPpjMTQKbaDjeCqJPkBp3W3eASY6QdbD3",
  "key31": "3sGZ8q4GxsZqf7gg6kr3paFEVt7iWjVfiwVdZDpb9KRxSA461YhqxGwWFFqQtprXnmAvPdPxdW1i6s5CJka7bNto",
  "key32": "46izrEw1KDndaDHvdTYV7w7uxyPAzwrKffKfCvRGeGf3LpY8m5dgksZ81DjUz8zDv8Wjeqk8t4Wg3USniyjr11r8",
  "key33": "3PgR8gkJ9AxF2LeDmrMfcNjhwNgVxmhHgQJ4zrkqhzaS5RAk3p7xGe6BMEapqhmDLgLvbiGjA5qxX6Ksf4dFh3wM",
  "key34": "3ubEW9hNcZtFniaeuHvNEKkCYdseNtRnngNmmG5H6CshWnJNyxZtcto1KuuDqFP3a7P8fvFahxcBq8JWVMb8VpdL",
  "key35": "26zKBxxRRQXgwmhR5TPHSZinEACStXEHsc8e6U27L82J3gQvdz8SavPLgzXWkNj4sd22oRQFUyeqgpGzBtZMJ6dQ",
  "key36": "4HiZvZnqHZbeEqQUeSL8uoEf817tcp598jtRD9pKX9aMp2Skaez9GiB7RJ8qd9H91focP2x8VpaFZtaeAZXSoGte",
  "key37": "3J7PBYXF4P6wzi56j7CuYMSojeTs1fsAhobRLVUkEGyxW6LQFYXfLJzyM8gvPtgZBHAh4CAVNBSVjGKgAudicah8",
  "key38": "44nxZ3D1jxeWSZp939JSvbRv64ZrU8Gdmatc8gtGsiK9tqk4fehh1Wan93FXNadRTebK1nFQxEBaAB6K5xvE7tW",
  "key39": "XP6J8tdrz7dgyd5Lpq8rbU7ERh3NmjtrFpT9v3F7KuRRzZsaEhDuDd3VjxSvcQhnQcMoisnGgsYfasrVMNiSKaZ",
  "key40": "56QKKQ9CSvaCxx6mLAJCmUHgPPxkZLmPqH5XckhwjmSzRVXcNChTTqSvcG9m1MjFLLTkkJBdc4ogseyvA247pKvx",
  "key41": "QwQgn6faV4yZgEMVnouspte8ePoLQUj6VTHyVd8BqzCDNXptUTdtuujGjByJPQkumyqXCeZMs6qr1sd1Zyg5mf2",
  "key42": "2qgEBGKSaGTkBAHu7TVPVTfbtkxZLmVBxhtwThv9KuRf47WGCssZFuMbLDP3hvjwApK6d1ozQPdfZ9ubskaMHLt5",
  "key43": "jxgete6Unfi7PNf8RqLFGikj1TRrXfiYSXLFwB6n1SCRA7LUxNePNn1zqmScHgM4aCimYjgdWhHhGHtW1xvCuSN",
  "key44": "5i34encLcug1cLw1xAzVRFGpYeaDpWsWqFdxTc96TuQgFsWarkVNLR93u1DdQBL5REGFQVpNrq4fhzVrrjBXJGR6"
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
