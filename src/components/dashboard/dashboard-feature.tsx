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
    "5CKeQ6EfMXpACQRQU6LzNnHCsoGJRNLcsMizP9Bg6gWfksE8hGtsJb1nTK8EPUhNjarUK5eafu4qR7o26duzzwR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nUMe2TwKB5VLECPRTxBE2BuKYLdFfYkf9aoHHCcJwa4aEyyS3s8mCn8nr1NCfVPuHYnZBK8JrJdKg4gmZiCd9dj",
  "key1": "5JFi8Jnw42x99ESFHRscyKoumBTDeK5mD3a6LSFKvwBgbig1JoPmcYGrpXoXBnKBpQ5QvPcMKrt2ps1nTs46DS3Z",
  "key2": "66wZJjcg7maAEd2bjTmMkS7Vb9Gd1iSjXSLHMwrS1CinQYVjRuVbsprgGWXqxWWbV65MDFCvMM2SA7eEP3q2zP15",
  "key3": "wc1Yzn38eay3d2kyjzRHGS2uMUrLhNnH99GjpCYGptP5v4p7ubxneeW8FpN1HRacTkikzKSZhAhqzcrjjztdtcm",
  "key4": "5o28eNQndfxPq2ND9A3hP8zR9odGj111e82FCDkRtN7i5FZcD4ZdYKR3rz2QasMyJMbhJzc3YTwtergjCeWzawrt",
  "key5": "4nhVGH5JQVE7DFC4gBeJQc8b5s1SPtCVnEDtbwg27E7xmmGtxufzUeD3M5osDJBJk4V974UgepGxyXsVjUigCaKa",
  "key6": "424NKLrdsMYE53ppdiRDCSdAHhhWDae11KTeRRTXZdsfu7RzRtSd758xbgx61CckeEELttEQGcxu1jYxoRfn42vb",
  "key7": "64ZrjVdE2AjnoeDNY7MU27pfJdkPTwSrDhiCZu7mUV85atPLrvo9sNF2E5QZPGUv4rLPTwhfgNHp1QgU3uJDX5S",
  "key8": "5Fbr2heeW9ivbPZMwe8jKGyYKCGjeVFkcoeoutx21aWAWe7mrAcsALdouHNWM38oHxCsekf4psW4WYGk4kgj3E8z",
  "key9": "LSy9vaqqqRsCQws7oYJJjE2LtiouZbSGiK4Mqiqbid4neZXsEZhU4HDCX8DHgQGRP2XvUcn15gcjSi4dFfR2Jpm",
  "key10": "5jsaY5jZig1BGmwais2EzsrBwnmSsAHX3x82hEPzF439xkSdmiyVGoFqrx1xKg6VsuWbgMqkX9e9bqJDoE6XpqmF",
  "key11": "4rHP2a7Wegy5hKYz6Um1v4szggdBD71NqH8t6LEvAQPQtmAfvFd6C7GtSKhvR2LobRrtFvj1aKdG5zKUHBV9Ky4p",
  "key12": "42oMsd7dgJmbm3zEj4qvPwJdzB6PSdoog25cLAtTisRrwdoBpTasQoXxSJJXMZnw5Qq78hMDmbErC8x5qguQyEFa",
  "key13": "pcNmce4G3PNfpxcpqRZxnY9PEz3m453MrBb3FgMtZEDdC9kLA7y76uxYXouy4DA5AuQ3WHLnt2dXbQAskvXTwjn",
  "key14": "4t9VJ3rLBLDvuzcK3zqRp1Qtjk5HRgGZAZo34vE8QbQubYF3jgHFpkZAgiLhEQsfJ8ZFRyRVCoyDTzfrcLYcK5X6",
  "key15": "5qSAdbHEsiY6KmJyRhSqs6dML7V9f3uWTfwvPp29QbqmCjbHMGppc82RGpGsHm6JWw5PmUpgLJ5zmHohiEu8pBKr",
  "key16": "5VQYQMvKW17ETdeJn2k1AoqGH5S6gGWCtrMRs1LQPFUGvUsYXRyv54iuC8oNP4mpLedYVgH2n9zEjJrkKG4jPefF",
  "key17": "5cWBBHZ5SozsGqmCCjt8XJ6A49z1XLXkPAspkYmjxfoQjEzzX8EL3xACnwKSzwrJULoD5yqEdxFKhwGBCQfSxSPn",
  "key18": "4aqH2viMR93TD7mnuJxxLiizxiqGAKNVV6A9LnSpSC7HirkuyHisuLwx5Y75EhyQ4PEQtdDnBHXRrEyeJJ86YRKM",
  "key19": "F3miuyUUMj4LsmUd9PQRAQX625Zro4ERajwrsuoLh2FGjiZS3a4apnsQBgYQT1wjmHePcphWEvLUQHpYenf4REx",
  "key20": "2CwiqYN3SbK5Nm93pmbTsiT7kxxUNR6Yw3uFxTvqEhTa4jpz3dMfjVVRc8aFi9xaKHBGj9sM5cZXbTVAuDL5CpQC",
  "key21": "4739ED6MQJvjM8EQLPAEkZpBXERTv2LmUW4fag4hoow3oQSKRMREiZtsXLPb5hEBUpQpGKSBND1tc13qZ9sWGRCC",
  "key22": "RdB2QA37h1XvPmsEp8h9syaZttKXy8rxWZZnzN5DwUNmgWFfZqzZyh7LX8NdPMeds8M8TURGVjDPYtLwync1dh1",
  "key23": "2FvQWFWQzBBuf9x4STE47owRgjmkvf8z35hDTZZbNfW4TxntBzQ2QNp77QgV6UggXqCMWYyo5EbB6NqUncQDTqdv",
  "key24": "4iaiK9hXWhgTgZ9JHyyTSZivH4GxgArNXLBKUcBrKuf8koZn4qGxiPkRLYViXHGNhEbG3xoMiVook9Y6gYFiv7SP",
  "key25": "66H5S7DtrgaLwzC8MvYdPwTDMUxZcnsZCTe7fPtPUQATeyDURicbFzytMnwPz17e9xJ6j9heMDbFWUWayEkJ6MiX",
  "key26": "65Lm6pKk8yyTJcw4oAbP7muEyHTwrydcJnJrzZu3gm2poJPXVdXo61rdJacyGMBfS7unSorCzDgi2nDSecmjznQP",
  "key27": "342YKnPGJPTSgA79rWqGkEa24C2akASunkKeebKX9cBJ9SaircJVWuUjBf7D9tjk7qKPv9op2iGwvcEejPSjN9gk",
  "key28": "5XzmyWhqMMKBCvJD5GYC2enLjZiNf5c1Vv37wgfXd2d1kA3PUCNaED1JUKzX6ugYFvmk32kgq9DraZL7T7gL1BSA",
  "key29": "4hEDXenVPMExCBzESMKMrEkE4w5wUHuoUQ2K4gCj4mUxjyosTRnP74UREbWXaoLvhxGgVjpXzR27VePUaPD2Hw6H",
  "key30": "3CL16vTYABgCanZz7Ft3Gu7TqifrmypfE1bnDy4AFDqzcHQ45RF4byhwvZYfhLTveLfNHNG8a37ehu5Ek2GStuNt",
  "key31": "2GxMRFJPSyQJEn5TLBPDc6NtGg9bj8SDcpbGjAXyfQk8fQ7EqpARHFscvrt57K68u2TxY9PYozLmijY6k4DjtFL6",
  "key32": "4hADgqtF37mddfawJopF2ovG1XrBRRS7kt82qTn3nKNaCvuUT37B1TLtbrX667axW3WEw1Eqpta5NahaGiKCwWHG",
  "key33": "4PYrX11v5CZG1T4FmDsxWrc9mbKH5whUh2u47gkkNwCqTShDM7gcwtdZ1GS2DgYXDBHT8etLvyrnssDzEPxsZTND",
  "key34": "2rHtfVGuHyJ6cmmfnKMfxWa6XNRo2yqExpDYhvRCwr9knUjC1KgzRyZo1SMBi1oiHDJEEw3TEFZQ9jFJyqk16dL3",
  "key35": "4gMhroRWe6kqtqzWjyNC4BvVo835Yxo3ibg2VwvfUpfoqaUaVRqPQK73hb1HFyJHyirka8GwTJ5k4mQvqd7XHW6a",
  "key36": "3o1C7tHKongwU1hDuvbVauHNnwmmm5KqZiVJVLgdePu7BNrAK4nVHzAHQb8NXGuBAGev4rPduGHZBk8jLS9gAied",
  "key37": "35SFJV5qN8xg4qLQ8yb45LQqGM4w57ZF8uW8UxXMzQuYuBWfNBzfnrYP1deDBebH4ktBx1YG4iwmYSnp6gbWjkYC",
  "key38": "3UdaR1FXS6191F8JQUMskxdUqdccQdYGocpTy4f5513mRWinswut4CDXJtQyCviZnwQvK3CgwSzyjEfSLJ3t7JtJ",
  "key39": "4wR8mLm5vrERY2up58YKqapZWVYRC14aZrmHnjSTxF2XRhvDqT9PbtpUJbAkaq29dgAKo8dt5US3C7qeLsffkcNr",
  "key40": "3ofr8kukBCiDBd1rUySSMLwV1Gmhs5FcuEs3ysiFLQqbGa5NbpEUDhCDyRea78UYc1hUHWEwPAvAqr4Vyp6ek6ZL",
  "key41": "4PfRQA8gTjjV1PgjzycCNk43Ya34L3YSm7HtvJVD2ma8dWR2wVuD5ZX1bvKLaTqS1mQ2dTKZh1y1aV8xKmFmr7WM",
  "key42": "5HSF6n7BQ9MHTR9YZPb642Dwcey8MoGQXkhqgfoCK3Kz3XUuMybWEAdB7GAg3h6acfwHgseB25J7v2yEMJfYhE7j",
  "key43": "4Tx1ncSb8GfPNPceKPsRt3yqmZcXUspZ6vkAYt8cUmy3jQyDe3xJpfDXCc1tGCRkmmkYa6GQEGUCNeJcozTXwayY",
  "key44": "5t9nPy8y5r8VpCiuJJ7mr1k3mBNGriPsvQ2fXs5dFJSzNEJM3s7hHjzqn7zkffnzxaBCf5bdqFuDCRQuJyBXNwHu",
  "key45": "2X9RxmFgU8BDi1keGgBbfTD6ch4CXoSz1bGoPr5ZWUcorxwSKhScB951KpUEuY25pvo3gKnHX5n1F3bu5PLeL5oU",
  "key46": "DGEwTLFkzV4GfjEChW8S5KRQehjgcimxApLZ7SzuT4QXRCnuyZ91dpQHnX3AAF9EhKMzkitq9UHfEebUEePbN6b",
  "key47": "5VdLqrL2jKYmLSpvac6HkhDqSiQf6R6gnDV3RPvGMnupTTbmf7eBMnQ5dQt5KGs5z9wfFwYudvdV5Uu4WEsfcUNx",
  "key48": "JhmPPN9tFVkYKTmGfKpgAugyjEw23uUENFofK5UrEnRbRGw5USq5PfsUVbWZk2cFerHXVCqBBizZiNSFu9QEC9x",
  "key49": "4DhaS1vNmpcKDbcGNCiQTdkkzSSZz6FZxuYzyVcAC36DTyuoVBkyhtKo2p57ARX4VTzvUUiZp62S5pQ3pvygr2s6"
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
