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
    "3dkdWYEvfDDhMSBthDnVDHvg3YhduRYwkfdC5nFsMay31ygAhda1YsMz8y8prakka2Fip8qCX8j6sSsqrd5BsK7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5A5VmFfHKpupPX8S7dTCXcyGvykXFAecbza9eEoRW66tyeaiaaJGXWMhJJyvbK5vm6ARPWt7F5ZxEdyarWhSXj",
  "key1": "2qJHWkysse4i5ARBFS5jof4DANtcQc6ZKzrTeKa4N2t2eqYL7mAFCcJYVDRQvAEqDPSUZ3ehoPRy9AGhmYZ9uxVB",
  "key2": "5zwczTVsMFNQkJr85vVgqCnq7TaUAB7CoLVMA4eRPrwAiELHMuFsAjrBwp5x6eK175VSpAhVEu6puNfGyeHrBMDo",
  "key3": "Nk3kCXFmweNUjj8YXsnrMor7Wsou4xmpM3X8Mzi23bffra7HJNQWv65945esjMJi7drfdvrXHuXvoyEA7BTeT5v",
  "key4": "24Z8xKMCfzXjPPZBUV82jbpewhkH2sjMQrJyw9yeiaVg5a9ViVQZnYjrUnrZEbF7Kd7J8xyVpiERxuo2eZ1q2ZZK",
  "key5": "498vTUViyyFhrNBefdjK8QGMJHWLrXfJZCAaKc64n3F8FTYnjB4JwBuT7ioNdYd7MkQeHVF6aTbVKyju4hzY6apF",
  "key6": "4koeiE1pKouxahuxcESi4BfeovEDQQ4mfGinxKe5i81kL15JFcvLRCKZZxfwhYWVEDuHihZzvCpBeTamGd6VBY2f",
  "key7": "5a4PYiHiN4HdXZN36Kj7XNnfJoXdhgUYeKYYkMDzBjnBMcCHcm3GzLQnQmWURu21SC6d21oTVvZE7fvgzRirnWCn",
  "key8": "45rhvzkpfA2HWKx9NbwYFhQKu71H2VBPLcf8UgJrdSpMT4PZQHVebg65u4Umn4Xkq8XptYMmzzPhR2Txh7FmT1uK",
  "key9": "2gwmsuPgB4LiBBhCiN91EQpwTXyF37SYFSioCrhitYgusV6Pn5suj6jvFrDSWtFRpX6Yr4iJeRz5FKzuLDXck6mN",
  "key10": "3jDcTh8JhJ8Q7yztzsKdXedNthpPrCUiYm4bYaz27tRuLnm7ubi4VavgGMYiHRouWhkY57XWcg25mQKKbTaz5yQd",
  "key11": "4WPERP4HRyfWhEBoyE68zcvUxK4mPTqsr2dry7ffpqDauhoiLtzH8H1WB4dvFtYERANidHuhR5uPdTtXZ7o224hE",
  "key12": "2qjshnNtTRqExuFCJac6qLLhmLY8sgJkXV1xQZaMjm4xZxkBpqcHCny5rZZ9daPhwvrh2GRxkC1TaCvzor8VHQwM",
  "key13": "jt8BrmjFYsLW1A5NMxwEQANcaos2adMWkfU2yNjVf4jjqgwZ4URNUztmXFiFVMi2ZCqL3puNqn8zY8qtDbdTqm5",
  "key14": "2ce27L4QSqDQn6LdAHpC7cvc3ahHQuM6ASQbae3mnhLXhuxFdaEcS8RddJv6poep6RUfANFescDDzSkwo2PNszF8",
  "key15": "5yLPacMZbWHtEU3oNCu9cmyqmzFqmZzvM8C7sZpLkBAjxLtgZqow9bV57k2sD5BtaoGFftaBUd7w5S3UQ9cXutdV",
  "key16": "4M5pnV4mLRnAzBzkXFNuZBBuruv8jFHHeBHFrRaNiygGAD62urZZuFUfQscdZxKccx6cPyVsWUBWUoKt1PV1aStn",
  "key17": "3vgeE2xzPVu7hqJrkZwUZDs2mY2bWsoEhn9UN4UDkjCQwtjwQYTtwW9Zqg5TBUZSyhnEbhhh4YxvrSg8FCeEyzoL",
  "key18": "2yyo42YhhH9zmFd5N6Jf8QNjq7KTLdBhw43UfYC4h179zidaxJ3ZwdMYgYuFc9EPiGnB6cyZxRfBWNLgkmQqYa4G",
  "key19": "CwX3GMhBzZ9zmkdPN5ySELVbbUDHDKtEyJSLVQCqASS6qkxTiJdcFuzjgUr9KuTx8AV3z5BwJM8BdF6rn4NoshC",
  "key20": "6641Fb1ZiKQso4v1HinrqeRGMmSFkGduzWQSM1CUFLviR7YQZGZ8FBP1weKYRw1JZqHX6jHUMHwodbyp6CNyadmj",
  "key21": "3bt4tMmnjaueMU41oC2EvhurZv2bGKnGfPyPbkcXCQrLS7EF7p8TVkAzjuyHKg816A1LtUS6Bbh4xi8oE5woiVr",
  "key22": "27XjMQ5W4xBWiVDzhHa6pggj3kijEAtWmxaYp3KqCspagx4juUJUEkyTJin1nQ3KvYnFUHiNpzwFXfGdxxonSnd2",
  "key23": "29Ggz8pAmmFUZNfLJNR9KHBN9kuCTcoZDZbzCK15uQZmRnTRcjSFkwzHvUHbwfqBy1EFtDFNLcHbi5qNHScFEudx",
  "key24": "2NzAmX3L1xWn7SP498hQZdGe6VeqMXbyQ8jzuXTLAVsEqD5raXjK1DVqKQ6gf9cbF11iD8yzK4Zr5d71nGzzbxQ6",
  "key25": "5yT9yvSk6tvnf9GgMtAQx6PQuNruEeBiSLvCYtuhJHhnopiddc3czVnMyHUHNBLpRHMWyh2ot3sMh7xYWyd1jSGT",
  "key26": "65SYAhBuidBMAMh6emob1pv3br7z7ziAcdoeUEAiXfSaS4oEe7G5A93g6KsNDqeZAnwKmoC4nBc8c2J4aPS7RuAG",
  "key27": "577ebVSJ6rkeDzhdwefmYxdRxjHhzMTW86hjvSra5tQadNtHHMmJ4GxrutVCD9KPLVvk2DR7RhfbWaLkfJNjZoYq",
  "key28": "4yBFUC5Pd421xWz6eSSN7ra19UMDFMHzTwfURhfoi8F5fL2HNegVGuAQD1CqefrTE2V4MBXQvLM8Eb2VMMe2e7se",
  "key29": "2NGAnyHyaHsrsmD8TkGiJnpbQjeJqxPY8XbC3f9b6tassmA7knF5szxxWCSmhzukDRbe6KXBrk7cnyYa6zE8iUeE",
  "key30": "2dt9tsn2bEuEKFwJTNGBYnPeGdmoPY3ZXdhrjdb35Yk6ttCufB8Q9TngTjERrw9KnxUPmwYKzTjL7yNxB4XCeLeu",
  "key31": "46rEmNTBGgv1kqcC3dFDdCLEcopyR2kU9gGSoGAhQHvt4N3dDw1pRbMqiHwzfKx4hb9FwvK4HMZ35VGvgR8GtTBr",
  "key32": "4MkfmEhQgnbTvVnWKhzhjT71386zPQRiHPFkMwBqApZtnGUhx6ZDo2BEEv3UPE8vcaNNTEvaPrxJh4vRPEDWgEzb",
  "key33": "1xsWrsWCdvwX3n1AS4wEADEZFQKi4TDoZvqRJQYixWD8gS1BaacDSUYvAPK3ESr6WQ5EMNKQMAzdeSD5FiKSSHX",
  "key34": "5Z2nLNseh8fZLZDt6yvyJV6GhKqYNc8zw2JTph2TjgkYrxaeubJfaCy7FSvqnnDZLtq8GeyKt8zc8DB25cBEPBeh",
  "key35": "2yowf8piyysMw72YmENGMhwnT1pCXHdQrdzxxfw9h9wyFZJLUcxaY4h9gaLoHBVRg4Pr8qv7fsbXusZNSrkAxEmz",
  "key36": "2tZLPpuUTBNrKpqR3MwaNgJ1pnVnRT4aHFuLKZLhds9rErEXrb4NRk3g7ifPKg7T8bJGYMbAJ7CBdaQd827mJwPY",
  "key37": "5eAHVZeF3wyrarNJjRbn1JQ6D9Tqa7poczvPtUv7yoYCsC6QMgxcLkkGMEUJFp4jH7HQeEDs2VXWMUpKToxWaAXL",
  "key38": "5thtYAeKUKPPMadGJFynWRkUAjMHE8PzMEDt6tbV45HW1GHkmF85FGyZmSJnMEF4YdjwNEt7veKiLdKfjevPuefG",
  "key39": "5ZJfaY21yFAD9k1JL1ZkpJAdMECrfZYUJSmnCja3wa8bBmKurfUkKSkoN7QbX7rBtSNNXsGWEeqEufF5LkYBwaog",
  "key40": "2dMKVTBbegCN4aSi123aCi8W6NQgM4WxE2vD8ctdaPphiUQUTRHsFMPffRqoUuHXiS38fv1Dv5yanz3R84V3XfdA",
  "key41": "4PE3R6du2hEvysW4xqpWZfSyNXo4cQjp93xT7v916ZzaqpxxA1AXEbFhMtVzqaEW3mugU9QCfXYoJ7cBwJrf8MDV",
  "key42": "4L2h2Dt4jHzM99RHFSoG13YcWDxSr86M1ZgMMfSKGa94FmRb4uUmL5DLpmfEoNydCTd1RCLhvNqDwrp3kAbsETNE"
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
