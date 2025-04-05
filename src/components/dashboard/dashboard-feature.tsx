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
    "2sGinitYyxtnaWPr1rrhK8EbYLMUWNRXXYfQZumbWCbLjzdwsNBGs7NyraDRkLXSMCh3eiQfJcQiRfzPGQ1pA7mU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55fsXcmpG6EWkAJ4u6Cd6NB1HM229ahNxHRBg1rt3f5qaVisqgYEqNY75riATEw7K6pWGdegrGuThQ8b2xL8S7i",
  "key1": "5Pk6Hb8TG4X4R2mZmfDavAtAfoAvN3APwsMGAws9D8zVtLz6AWPx8SiRVm8gdckhw1zguAKTnAhS6FqLymLxkXC4",
  "key2": "U94wU2XcEqBiEEWMKdUNzYi3uPwe2MioftBsDjCCCPKWzvKpcD8YuYE6r4VcPD2oYSoxBip5Xsohd3xzkobn5fv",
  "key3": "2easJqhAi7ua3hyrLqWMaZSQFbrf6rXH2oRRjtrDZbdzs8ieYX5vP9jvjHPaTEZhpHcCaxHHRwqwQ6CWatub8TZb",
  "key4": "2GRU89QQ3zz7pFeK5jfq42Qg5JBnCmBT56NBfHxCBBw6Ty8PZc3eKFKni3JZQbAtigYYTi5VSMg4BsPvXk62uDZT",
  "key5": "5H1sDv7F8cUtUr16MySs54r7pcqDNfduCu4sjqUy8SfBqiCY1i56TKkGJXvx7eQBaAvyHDNdDniaw9m2M5FU94cu",
  "key6": "31sqk2M4vLuSRYBCTtfCrAVL9hYbZER5rHmV49ezoLSsQ6Ysm2Uv3sHvzRemHmcQxS5WDqVchpzmi8ifkmdVSm8L",
  "key7": "2ggMYBDrcF5HtHMvZMJUJs2tqL6waDSB6Ey4MSpr1i2BMCcqz26QEp7PpdumigqWHouDaynkvHkohAsMR7JnnXmU",
  "key8": "2pJoeKpAoC1GprxjSuX5c9VggEKq5KkZ1RLRPM5gCqhXoWGpaA4XfXXfvKDtaeBjZvJupqA54KSsswtPcaJgx1T9",
  "key9": "DcqX5x6Kpwrmdh3XNLkV5iyyyXPYjBJ7SofA1nqQa2dXACT5EEpPXbeNGaDEhC7DYFxSmcx4B2UMjmPo95fcpao",
  "key10": "4MVapvNxxuNtWWR6ujUTxviRkC9ooUKG4LsUy5rYUhDT1oo3z9pmaxMfch23vriTKuDVUB5iXR3KQts6Cfq5f6Pr",
  "key11": "348JPMW8vpUozQcg9LGUFahsynZu6i6Wvo5CoKB8sYFpaZzS7UeSsaQFV2uP4vTrBDiWHYJHz9FSSWw2GsbGrzuZ",
  "key12": "3X7fYkktJjBdMRmvNKcG11EAZGzS1DdGHfoHbWuEKtVshUJSTSmpDTF3CT56v5GRXbGo9vxfBD9kgHCNW4PB3j5T",
  "key13": "3q5sdd6xFJfymJ9H4Q5Qh3SrHgAjCgLoTmDrSUVUhjq1UzPCjMp8h9q2S6D9hrjE9th4A5fYVJbB1wKsZGaJ1HU9",
  "key14": "4vchm2BNTVEASTCAj6ViYuehy2i7n5CMD6GixD581tYqEZSbq7FEdZZYtPJLKUbssAG7MVxp4f4xwDKA47J6MK8Y",
  "key15": "cyXaWNY1Ss4b8PMzYd3PTazubj89MBE8gDxQLRHwH3TjKr3UKjH4Q4MMcmtuguBg4UwE1uFAjWamyNnt1o6YG6Y",
  "key16": "4xKwg4HJqpx4mykZz9HPYwnvzq1ArbisiiEzJydUCgo1BrGuok2EwJCUGGKDeTJyPCQ1uazRBfpHyHRgNUXBJc8V",
  "key17": "2wnwGTqT7Gs8WgvHKczmNpkphGbxt2aNuPcWcDMSp6uu9nu6L3VerXMvrFKjWL7cZBANRCaEVu5QCHpKaL67DMzk",
  "key18": "4obZd2GyfV4ZuYN2UYxhjzp2jGfGJh1HCfboZA7gA2PmPZ5z5kBmK9XHMN2rSoBJ9ZbCVdfEapkJyp6fsgCoWGMj",
  "key19": "JFD8sm77DLud83anowAckusmNMppSnMKEhbCW8ZF8mnm9djXYaro1ihTkVzSEEfFL41pR5Uxf78HpT3fc2e92Ci",
  "key20": "5tfASS2nKcMLjXTr6j2fWuAEeXHdHPoBH3k92ekZR61V1LBkgwrGNQBnP8qpEjVmrL4Uo842gkqw89VPF9oXeMMg",
  "key21": "23iATPgRRgaUHR6wTx8qvUC3svxJoaRkrDRfKSyRvFZwZRXsnKkPnrYTMVryvuaMdU8FA9N2NwPqBHcQb7iAXpEH",
  "key22": "4mxHDTf9zdDRU6vLeNuUQSKndVB5pLLMsibRVchk6FQJgzdFTnnfMVhtSeUUj3HjgSEdRsKwyidCzQ6iVLwFNB4H",
  "key23": "26JiQvTUGmLBwrhpcMT3KuLcwppCAC9tQhNsBwbTkmn6Rwso4yB2wQrtrZhXxMpUmtdcZU91Wi6LZdvXDyrgfHz5",
  "key24": "2kAwfrq7qQfnMiQDs9xbr2nQU3CygRCntiteUwbWG3tj7nS5MYUukv5RyPNGKywA7oiVxo8dSzi21AnSRAqX8Uzs",
  "key25": "Ek21uFiGh7f2Ypjh1SdqivpJ6rmzSoe2xb3VWsdqSg93HWbWmALSdYbyNatPqpPNRMGYum2SB1XmUCheRPkWath",
  "key26": "LGadqd2BgXWDJ8tHpxUApa98AE7y9K7G6211LeH2FofcwGvBTZvkVq3wVhWneTc8VE8oRX8uomMLYy26xqRy4FR",
  "key27": "5opN3uq8zhbkf9S4rp5RePweA1bK1UXHxXXEKoaWHFR5m6Rb6JKTaGb7YjBNCQYjdqoAutyapoKf9Q1rDu4R6mbz",
  "key28": "5VmPzEhQuDBMR9ohXEgy8KXM9JQhYeehLSJXmUinhP7fZRczFJFQSwxjv6VDrTeuQDH3qDVHPeJT9HXTCGTiTgUJ",
  "key29": "3MdSCoZDn38YHFVD1uLFo86Vi6Squ9CaPYE8zJNggETvA5g7VUR3DVbZUejr7HG6qKBEchqybgHv1pbmArJ7AyXs",
  "key30": "3oqCuzTD8xrJBib4N1U7WxpZk7Zd7JJFZECJjLFhAZv8mBniM2TkxViRgNabTETwMtsXdgzw8683mTxmDJyKq5Ua",
  "key31": "kiyqqWT8pxtpqxWPxhosR7ewqgmx8aPTDPwVLubXh6amAso4SRy3BoCyRpMptj1QYV5t6iQmQdjnrd9Q5CuxCtQ",
  "key32": "4KQ8PRZMfXCxjQmuMdi8hUqYtxWDEkh3oatNVyC3BKbyZHFnZDKnU6aLMsnCr1Zk2hQLTgN1xKpdA2Dex6oakLMg",
  "key33": "56pDdPSSkLsTqVLVKLRk29LiWgHytr1L54XVU9tZEsNZ9PaCrpJtGGDEQjCd27T4xkxTe4NzXjvEDoXmJ4DKtZZ2",
  "key34": "4cmYDRgvqRg3vHRuVnnksTqNSWciApuqj1jH2iNLM3FsZGZidPvWH3w23gjs1bY5pRRXv6AobCGEW4pF6H73jEg1",
  "key35": "3WbAcwF1x99tPSvfLG82A1qvMqJ6yNr3z6NXipgWYupHhjSSmBzFWsD6M14U4hmAnPCmhAY1oxaHwcerqNnQm5Fz",
  "key36": "5HGdAVFGHgi3pghbxqPd8gYEyzV9zrbgNEhGKdzp76x3KAtjqhx9EkUUFoGEWmz4r5R1vCQm9vPoesbrVcwkqxYd",
  "key37": "2KScaX5Xf1R5WMzS4qCXAs15sJHzr1XdQwELwm53cgaADZKb9HbtSgme2TygBLuF28PZCJHD7xu7NGkjkbZPj28y",
  "key38": "5GMFH94PtkjCqS9Q9tMXcraHF3nMMTBfmEJuTs7zMaT45iJMJ1LxqdVRoAyjk2TVVFXx8YauAtvYBLhwU2M3aGiv",
  "key39": "5ihggmDNSwJ9cVpLzr5KbZsSVnhjuopUNTpLM3UQr23Pk1YoKmEq7J8H9775ogAKU7eTCUEEPnEh9aBafGRu3LpP",
  "key40": "3o2dQnMjcmgQaJUKMbXDHXJJZxRDXopLYkJab64NKk2JpKbqp5y4on3ouU3hs9yYLQ6CewEY7XYyHkeDMwyN2b64",
  "key41": "3pDiDUsih6UEyo2Hbnf23b7sgPrMggc4n8UYh1EktB3f16sMwt9YF3wj9u7MnDsFL7dY7VQV6FdZpiFBXZB8GYAU",
  "key42": "4zzALyaZksEtsWBN7tZGFyyuGNMLQgdmEcKK1y4gZrWY1j5WfsensxJJ21asfrLcV7RynHgPEHMypT9fEBWSqYsg",
  "key43": "5KstCSH1jZ7eJZrKNYvsDtpFhrt3YjybjGc3fB4Kgm3BWJNbBFfGMeKL72LbMPLnxX8LLfCQ4E9kiLUMZShU74hm",
  "key44": "2do4igKkKU3PjzZCp6iPsnK2EnBPTYJxPB6UxWefHEGWXKriVz5h6Qqb699AUg9kazGQUwQheYh35amkwia22w8e"
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
