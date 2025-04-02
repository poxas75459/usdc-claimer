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
    "61taUdt27XrqWAEwLM49phE3S836wfPo3MBAmcG6PKEvMzmk3RH25PVzMzjMwHPgDQ4nV3nnT4aKeaWipJPAr9vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hL31utiXyjssyKRE3VBsDVMsvccqUsTfm56Ch3tkrs5djpyRHdKdvfYzcDULjzDRDbXQqf764fLzWvAH1ktRxA4",
  "key1": "4NNpiULtK22tVjuUauJrSDKsugy3YZQ78GYx1Tdw3thAFD6cMCFFMYWSSGnCLJhe3QRXE5h4i7QfKBfpiDW38Uhu",
  "key2": "52dPjJT8BHjFUDW4QiyPfPT8WWKbpWShY5z7jp92bYjPd3BejDFto1tjoFEuzkRRrXJ72v7xv5q82NbW37JoVp9Q",
  "key3": "5UqTmJoaLwSYzeRvJrVYPsLZqtNU2mLAPYvK5eSTk5cU7JX1Vw9eVK6n6BqEPyr6xJUbotsj8aFD1CVCkoBxVfZM",
  "key4": "3Sre5JxtrfG6nqs5ktqS5ukV1HbwjpWNJDzqyeecNVgg4vhb4wTSasjkKAMUfM9s1z3SMC5WKAHyAqtQHNAa499h",
  "key5": "eMrNg3dBZjohHcChq8fCmuYfLkFUo9JdxrbJp5n5vCaefLiM6vhb5C6r5gs2qqgb8FQ7LTxnBiLNUv5ScB1PPhB",
  "key6": "22DmDx46uT3kdmAb5MsZ3wTHa4UYFwWuKTwWVzTbNAYS3YeAezzFC3Fzh8yWkNrrxMKaYGyZ4G1GdHQNwS9bhobP",
  "key7": "5ZyfptupjepYQW51BJYRTptTWVA5zPAXwVqKvShkGREDNKTLYh4NoJcvjDsw6UxuyTjHDWZp4H1EFuDz6Un4uhNS",
  "key8": "2tBkXF4APtukUCsN8L3GGTDuRUSFForMGhxpBEW14F1dbpzMBYpV5N6JAE8KnvtuaF92191qynzQqsqtrFFSxga5",
  "key9": "377hTbX7PHCHo2QWFTQuXzk2HRMqfX9xYJvf1JopadXb5saSkRu61AxZN8qbuKgjwycG2YaPv4NtdGTmDBqgbwv3",
  "key10": "cM2tSTX8HTAqHTTJXPsuQBJrXELMJEVmqhdnhM8Jxd3sqpwTCMcJoKuztYeUocWeQX1PXLv4g35jZwPqvLZdEL8",
  "key11": "27NeQUFrsefQQjCCcWdJt39zTaghLA4sVmopog9z5c5TbNXkFKnHbio5JiuiJ7Hnrx2c1J3vEBkV6TeyZpoh52CP",
  "key12": "8QoMzgEsJhLkCnbg6t4w8QAkEPeTUAXbAkWM6T5ZH2HBAxGGc4UF9hThiG497NsFuHy3EqLGrBkXsACq7zSQTK4",
  "key13": "3KAjB55EafrqRLyyesDHyazNNyVvz4e1PmtdVDM2AtxrHeLxmUHJvE4MA8J2Mc4C9eqqBvsd6JHbmHuwSuARM8d7",
  "key14": "397VszQNN7zPzgHriZeFDd1Tr8fHg1DvVtQ1W9VdrmgG2PGBGvi4P2EdD4PTuk1korq8TvDBsU8ZBJKfDopMiK1f",
  "key15": "3cbtvxLmdQ8cgf6LtrPn1JgYvgmicgKntsA9k4YJAbJdcUKFkCETxnKbP87HJiT36RiEru9KtPWqPdmBxxgCiArX",
  "key16": "5DafEz4tyABA9xh2YoQjjWuepdDSrT3WNC5b3TYCX2Mg1gnr58Ttmgji9JcYRVZK1u6gymptLDKyYhpd7dh59NCT",
  "key17": "4Jymg3pjHDhLHBytRzK6HC1yc7nUAF2es5XqyQ2uBG8VWW5k7yxdeGk7hE8YsMqvmJpLb4pEsC8tGhzayVGEPN5L",
  "key18": "5KXUAGZj3CCYcVSQVbyn3SEeFrKfHdWWgvcnhxkntGXgebJRnZGmfwrEk4tpz274Zb3ubYepm2TLAAzqDeP19So",
  "key19": "3ofWAV8ApugN2pBUeB4dPQrwc1Z2GtsVRz513SLWVnXgPLx8qQB46N3hLFDW62LNDfyFDSmDDPsb3ec7t5MQQUYB",
  "key20": "5h4bVVKcc6bnh3Zf8hsk58DYM9sJCepSGazh65XUQKZtkq46B7qzBTmXsCEjNDZT3dCD1wZGaLKewUm9BrBGXZc8",
  "key21": "2RbmoTf5qQEwFSgcJBDky5Jg9WtNZBJ9qvvadoaM5FpeGA8Q6eVnAbHLd8xXGxVXHYCsLTtHag6nxUrhvFGGwpFd",
  "key22": "3wFqs95ojvQgNnrTaCgkVs6wy4SBJu8SshKk4DVdyqZb26oddKKCfWWmJZG2NUi92ct74PNh3gqf2WspmBNYSS9c",
  "key23": "rjDrnK1cPMtwWXP3cDT2P56JuDVXzupzAfX35Zicfaco7Py2zUAp7XfGZvTCXi58pDekmGNnhEqJm8RPhC8uNgJ",
  "key24": "45DXRLGjppQrThEd4PRqMHxmhH6bHPiF1PSAJhfx5FHM66hZ8Ez3aGBeGwrJVvnwZWYBMDJLide7gZySfvRmJDG",
  "key25": "23vCChDT93jwH1ySURY4YFn6TGRTwCueQ55xDDiuTV13gae1qt2ZmKdonPx6Umm1y6S1Tg2WNb13njCtWFQn5jRr",
  "key26": "3n6XBJ6zVAKDJXRAN827PPihzdrdw9eWQc918ksRKYqzdCG2mccSHz9oXQN9fZBjRFNB8hdwvrnQV1BAd85xVeEd",
  "key27": "4uH3sCTbpgxpzKZcDvSRfKoJ1gpYoPq6SrM5hYVAEd3MBGALSBNmuR42jbHmK8xKEeWNc5JubqiBBzNv6mNYayxc",
  "key28": "3Ts8D1dhrLCkT6CQjg3ubr1a2seuTuGaxShWZwaYqUeGnoKJasWdzfQzoqpYTjNBsC84Jcb9cC26bQYxwcYMRFEa",
  "key29": "5EYvNajv7mwcisZmY7XwSPxAZpJXMUbPXri3Zt2f7NZdrgPfUoPUoB5RbHxNKCCD5WUBLi5rwvyC19KtWUbgv1Rf",
  "key30": "4Ns6Tr6TGkpAPqGg8QVu5SJa8oN6wmPAxwKtZiToETdghqLbkkxCuPLCqTGZkQPMmxMmfFa56qBdPx5WW6nUURbQ",
  "key31": "Y3ioUEo7k2or1phYApHdW31ygC8eS56DLoupBugcWseLFN3d16tFKwLUDbaPQNwbAhwqk5PqQsWyMt26n64XhYY",
  "key32": "3LYAHTvrVSkfgGwsRh85Sp6vQ7peismUartaiNjnbYA9a81PEdCKvXFMw3m3dar2L2zkYZaeyNW2SDXkc5yPcXzg",
  "key33": "5ymKj1cmpmFk9SamMgf2sB9CmCMCJwG9dsNa3NANugHkMT837tpKUgxneSbUQYM8UqtExUGqBhgeJbhsieKsy88x",
  "key34": "5whZ7Ju3MRwG3XpopVSehyCY5MpstZpMuQoU4W8sXNtoYDD7C3i46MqeUsRwEfeXF7LV4zhVdw5dWN6Woj72wyX",
  "key35": "66PRDvDVG4Amx4JNWwi5sEiZv3XYxDQDFuo9FnhJPBsRxd3ywLJtyvhVaTpshTRNen4u4BHJwj9mz6G7CsxGMFXJ",
  "key36": "57WohPpA4c2ytGhRPCYsZKPkGrzfj1YNwMqLhKf1d7anryEZshrNkrTTyPdred5fmoUqBrryXEJddnQ265FfqL2b",
  "key37": "2ZnffUeUaDfUNkQN4Cs6f6pWnMZ3ikaFVpb7BM7AhBRjaSsN7y37axSmHCoyu7JnrmyuZU74TpjyTFfQkkMftAia",
  "key38": "3qwgn37LKtsDpkUHKSBF2WoJsiPAetWoSgktnQC5gZypUk7iZBHjvjj89Up6W2LWKVjgUidPLNSLPvvAXRguNkhG",
  "key39": "3NcemuRhGscahpgunYw5Azy8Ycu1UkTvYsKj4sLwk7kctsMyk5ygBNLbRjqJZV7umRjNKap94YwaV9EWz5PuF9xY",
  "key40": "4PUyMuBv9jSXGq7M5gp2qE7NECTj85oFRL8M6RYo6YQyK524Fh2oQzbUiASwwJVuYPakj4xuCoTrVLdxbLk3Y3v1",
  "key41": "3eCb45eKbNxEgsEviqwf4Y6uqsqWtrLgbYFpoRuofrzH7nkJmFfqybWbsrWUHDBbS1NHkYnuaCJbMSyMxhJgwQDo",
  "key42": "3fMnUpaLaMhkT9de4jHDajvzN4FzAfnpwzbGCa6GN4AdydRRjHqPx9otYRP7PR4Qvra84y4MS4THUyqDPVhtfK1Z",
  "key43": "4qvu63Sp4wHJMpBhiQdB1EWsYrhrTBADEKrxFEpNPx9aP7ctUYS4kHgP459wviE86dN5uuvTBCg1p6ZnnZ5MXuyY",
  "key44": "5NjDv9UPxxMqn8RWXNfSSu17aMBbL4JpsEwafR4XbU2WmLfaFPRFt8vUovm3JMzuL1A7YtyczcWyK58H2JFXjw6t",
  "key45": "2FumTVD3ZTuePcGjtCxEkaEPKRpL4RYU8tycrbxY9BB7P1ELvZnbMXURgmdFSxH6oWGaySxQTBwoFKC5QURhiiyB",
  "key46": "jk4zAM8YZFgnJ8Z7kg2NLExDRTGMi4dT7haA219q8oy59XWUPCsN422bXUacQLemzFfWzp4XF2CtKdEB1hBKrbb",
  "key47": "3P9AnuXLYPhHR6YKYLNigr8eNGbc1bw5rg6vDckv52pJpGKqzpNJ84KqMx9chN7gFhrRDp1NckyDzZ4TFnzK9u8d"
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
