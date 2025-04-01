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
    "LV1LBw8HN2eQW2u7BjvbFbngtQxEtkPC39esZcU7KNc4LRQ81wR4FvsyEFbvtxxGFxythQR1uLQZGnfJUAZyG28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viE2F9SakfSwQJFRXwbsDQztP8LKeakPgEaYyRcBvpNiuL8NLDv3jWxGZkExLcKT2wmRy2jWYZoQxiXsa1wQYDm",
  "key1": "126XJ6dKCphfLf14qRjqBe3MdsGHD1CHeBCxrEbVN7v6KmR9V7tN4if1yvvrMhPVqVsKgfE3uUM1MiebBgahZSWo",
  "key2": "4K41RtPKx67DrcqqT1cVLXqgg4rp3FibHdsUJ98rjrZrwSA8N6eZqMaWfwBLTvhUcxcucrfgE3zmKC62KDxMo4RJ",
  "key3": "52qqRFzjU6HkxWRyXE16KBk8F7VuLMA62AEuTD3D94mVD9C13ipd6yuGzUC5FcKHkaERsAtNSU1gDMWSoffYC5Sf",
  "key4": "2DZv1zdDYcCnE8KMLyacnL47y5bMh3fhSLeyWLQbVM4XcjvVjvcxgspy3RpD3ZFChBq9uAV72uWnP5Toq5xtbZhi",
  "key5": "2VKLsUWuXH3zhubw7XSe5mgsbAVg2ttiNH866wiBtMMUpR9mtuyeAeqnMJZF14wySsTdxbk1xWauRLcSPuiosFLT",
  "key6": "2RHi2yj82ZiM2P7D58m1yZY3vTRXQ3ZxHKDNhiW2APNPhFRZTqN1zjKn9DTkgDtMkPZwhgTavM9L6uDWf7V7cAzU",
  "key7": "5gSUx4y6JEEZvSA2aypvy5YTJ6jxcA91vAWK5uvooX9oFZxeYafzRPtzAVbWBk4PV7J5qZZX4wNaZtmrqzefXWoC",
  "key8": "45Rbd23H7RYiK37qbQ75dncqVUo9x6FTAshVcWLKuX3KkiQu88eKTAhdiU4GBXZJLYEZgNpiCUsmZdew1AEu9RPz",
  "key9": "3ZyMi7T8TBSEAeKacm2Jx59mkaNYUFk8dU6dLtXq4Ea2YnJiQMr9wg2SagEBYtn2uiJRaND55FZR3P2cgA9RyVBc",
  "key10": "2781pD1JfZP5RCmUQg3Ww5Tkne3vbEVfrpBmt7JV9XDtigpmgtT1MgmNrPW9Y3dFp1yHYtowUbG1VdriQ51zKmAo",
  "key11": "2pwvYwiWWvLrkUJ2d8DSmDfASFAYH1PpsvCiW3QvbXDEDN9a8uPmLafCzL7DAx94SQsRstrvykDNUJNZbWVK33FN",
  "key12": "2aQJQGawXY1AT62WrLFzdca5abKuNDoYCP8hxqo3tX4tyiWu3mXWrhh8USYMCV7h2d8VLBkhxRnRdDCnAc5qs2mV",
  "key13": "2HUSW3BoXv81CJUmjAAHGT1aDmEm6d3NMrMBJS51xfMwm9yLP8DydY6tCVsG7HXbNjXizfj1Tuhkvedsr9ES3xdQ",
  "key14": "UKNyNkT2cq4HebosNfpanExYvCWMtqwo6QAw7iuWdcMRWkJuYgSvi9p3S85UF4TXW5tHHJRN4daWod5sSekzB64",
  "key15": "hpSKowjSYZnCM8tFTkg7jhxCrcXJTE5pGEPDJ7Z9uxZawYZrniiS76KmtNHh4EfggmJ8zaqZkAtdNcCLv59U7Fe",
  "key16": "5HikqfSEzhi6B3KhJ8ixfVmeTt3Qz5Pe2AGKwUVBy4wMHCnUbSfyh9iKNT1drM2NgjMPK6AWyXkWGWbR8AHJrUBx",
  "key17": "3qCnixmDNszbbvkx2PTmr6WJuqoyu8Chek2UmMwsyYMdnak6QdP6pHZztH3R1qEc8yYbFVUTTKAvak9UgMPjU1Nd",
  "key18": "46BWu7NhdkxWMcM2uVZYZzamx3HgqpeTh6oj3o37SwnkjP7hjPr9ZRdTbdJ2rD9oKgx4Erbi5kWvYMoKyMsqcsfG",
  "key19": "4EdygqBmjpo4bcodLZFtnaJ3nM3eFuwXhXuabjqgHmuHQjjKR7WL12nhT8vW43rhXn6gACsSWiX3W5Dtkgqpcodf",
  "key20": "5L4Fm8KbFFAWabnNqWpKkbRP8cHJa2LxQtzTZd264u5J98vdVV5qHfNVnirdBpGSEfQoottgufjWaBL8rLJDEi5A",
  "key21": "4ja41A2VQ7RVJi21C1KtsEYwrjrhgsdqEPbzdJ66ZzNyrXDxejkfGBySPcrykkKhRVzAnLepdixZ6cTwVwFDaZ4m",
  "key22": "38WypsqEZm1rwR8RbQSWdsgWMwZgVjUuDzVL2fXmaxoh3acvEZiE8ui4f2VTHN4vEWc9s73KMDSZ7K5eGvr52QhD",
  "key23": "Q4VNcykcWHGsCBq9D5ct8WgAGg3YjS9kYhQ4YScgDiCEEUFCT3RiyKuR8s9eZ67sAG5sLBgkfv1hAN86pWQuP4t",
  "key24": "5CGsMx5CyM7uYhSA6L4mP2YGFr7g65piTQNnoMBCXbLRNnAmA63bU6mKXXPzvmTz1q5eZvHkWSVg6mDsUpxKbEFb",
  "key25": "c4A9wSwVsPPkcitvXPEaorJMGrSAY7xL2DQ4czGaBFAR5DVbWJAD81Z81bAn4FqfeTZrmDYTG36yJQWpUy9RsrW",
  "key26": "2aDPQxs5z1LAckgk7j65CMVxEeMpBV8K7LUse5SBqTTz2CmGDVJBj12xyWHY5ASxmBzpFVNhLRnAqnoBqzaBycj2",
  "key27": "2B1DqLfnEqqFTsSXMrUqvc9pTDiMvUudUWdc8hUG1sCPuZAxosDznAYUab4TYkkrynMLW22VLJ4H5iUp62aSdNK4",
  "key28": "BUzrZuvWW1A9Xnp4BeMTzftxKq75pyPFCxcKnAithEK5xSLYykhtYuEoQShMDxUVdH1N9PEfC6zjDAdyeeWteQL",
  "key29": "63Vk5MgbXdWxHX6GDR6XSNe7rL1kHWLWiGmEnDeCqDivg3Ts4MpmeYDbaqMHjmG3gR32WTZtho7X2L1PNGRE3Gur",
  "key30": "aX5NAjoBY2zb4VhQ2vok186VvytUonEd8rmigMrAbgFLpTnNJKbkZBB1h2zB8RcbNRyutsa3XAmuqYPzeYAvX13",
  "key31": "4ThfEpnD2dPVkMA1j4uG5HoU1DxsWsBUhzpjpo3akjSNQNzHHbnkesEEcrRtnvSS1ut84hKfkD4N86j2o9g8qpHn",
  "key32": "3Vphvj6SuFumTMcLsnkSA5emkexccM8V9nbsos7YNqpfjLP2g7qLHm1ehoaRqaTvfjGooXYnqTWYg4FGu6oVrcqA",
  "key33": "4FbJ7SXWP8VWgbtS1SzFNyF9Ky6qBsxwdmU5RKjqmHUZW7xsVtVV3rTApEAw5TcYxseQzfhJyxDCuKny3t3MNuyV",
  "key34": "57U8GvzsfX21N3YTtKQdXZ9HSTDYk7ftECdCR9bimuKapCnLMw3U5AR9TsSQDL2TiZiqVLiEPJEJqQLedRgounnW",
  "key35": "4mquMRcgZEQ4mS5r7PLzzyJUwFhUrwSdsKr8pfSDnfUbakZLbQnQ3xvnUT6vqP8hryL419q88Da3XeC6BMHRhpzg",
  "key36": "2sfkyBN2hR212dwNr6oFWk1MyFeyNeiWCR9rMt7QQQ7ntf4JoMamqcn5DrsuShXccQNYocv7nTKy6gisLWvHropv",
  "key37": "4dTC5DqonD54DfTLegY6aKxZnToaPuJCrPgvoqWPXqcdExB7qmZFwtSeFPw6A7N67XKGr1rEVqa46uCz9XCNC4g",
  "key38": "5JQkVU1n1t9aNaXNJSXapj1FgQcEY3vySBm4dxhJuTUczWYgXu8KVhy8xWrE2UE5VtVzSnhJnArdLrqCd4fmMeUZ",
  "key39": "SaW5zpRC9Lwo1UBmjUebWSkSTJD5UCFawRd6M2VSDC6zSBBzJrxze3x2expgiHj4uHEzeSCa8ZRqzyWBQH55Pbm",
  "key40": "3zWPujWZ6moVQJN4f69HpieDzUr5sKoktzg6bZbvsrPWMXjMKm3yd3UfdMfUEXSGwyttaj3QSgSxmaTbj885UMxX",
  "key41": "kfVbx3ATe4Jdpbiu1TcSCyZsfyw2NznRiRyxeQSsvmVmqtD2dygpcpZhrvR3qTnPGpyNCBHRbvdrLuyw3QjScuh",
  "key42": "4eeA6J9YTxKbq5V4WBTRTDG5bpfQHwuNufcDxYBsctGtsJD7vtDpJVFSP8Lc6dciS9KicfdTBPuFNgeQmu9j3eue",
  "key43": "4j4mA5DLe8VwTyHuqDJgbNoJPid354kk7mX9raYdiS2RE76mPsXgB5fsfpCJtzuRD6eqgdqwZ8ABn22GN3qMpmnf",
  "key44": "2yWyKntTZ6XWwoxNsB6XQSAEifomVPECejhUfDUQfqHxmXiSjHkB56EvjxwDtNaaRK235dnr2kNHNQEghzAN6SXP",
  "key45": "5KebL26ohshwSoWTNBe4K99az46mp7nUjuaZWEJ7N6itc2hNAPjBuKNotX3tRGQK6WoRz1sqcbVQnrtvxL7GBXim",
  "key46": "oTYmXkSoLCAgywMo9Dwx7nTCPk4Z1csAwoyKvhkwrXKYTjbsXnhU1EbPxzo9eFMrXAMqSFiHSVfYKyAM9xd27YQ",
  "key47": "4hcfBTcnvSoZnXhZxSXAyCG3YFK5ZRar2C3jBiMDmNkpLSMvFP5KjB7BVXhLy6knFPKH2Fta9zXpQQP35PhsJGum",
  "key48": "2mQ9BT81b8LARRGey4FLuyaJ384ac1hfKWhSNwAnhbeK6ukpQ8eb7jmP1aVAaxG5wFYTjsEvWmAfx2DaoKpyMFgv",
  "key49": "esu3z9sVUJDbkjzHm8WQ9cnb1sJLxV7hoJt6Z7vWx4a4hMksST98M22eUtbTizdmPTM7Nn4waMMXyqWnrQmram5"
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
