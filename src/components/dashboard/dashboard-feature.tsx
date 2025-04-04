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
    "5nGQ8qbBFw3o9vTdopmmqDyQvCXokwiBLg5nfDV7YBUMq2FgK7pEiWgXKFRSfzoJtbYUptpfyZnj2KPBqReTTGqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7RoryTUT2LUSgBCM4PVuZpoQqkveHERx1sWMhFC5aq7gmAScpQg3CShV9Ynzgw7nsxWBocVFcDyHkbQR2k2xce",
  "key1": "2XxTfgHNipPaqdkysUB2gMezD3RgLhHDaT9LL28vkwwyFhxUiJy7de6fDGGGZNao95z94LKkhk329jzmTJGDyDNT",
  "key2": "pmAvN9kx8aLgSUd9Jihn5RE1S9j6VDa1iqTxEGFhSdDMwWLvKrSjkyXqQtCMqMqeHr3NK7icMxkGwpxU3VcTnyY",
  "key3": "2y7BTnR5wSDjAFyDDvvTR97MESrBdMCxZHTz9uyHeh4Fw1vruzqjRVvtZJSqzjhgp4FZ9hBsut3WxCGsCVEnLcno",
  "key4": "6w2AzmTSoim42c9xS3n36r6rgayq2fYMnTExdo4mQkrXPQWLNKmpgM9UxjUk1bnFuFUszDWPbBYfksCevScSR8a",
  "key5": "5SgDBFoCzWoskSr6B2HhSocM9EQGbK4oEj7St4viJkCdrnAijiPmXc5Lc9mqYokqf8yLZJA3jrzTaSNrfgm5jETw",
  "key6": "4idHtTpQQwS7yFGEPWDauDqW6cQaw6DgfXS48KABK6vuVPGDvTv1wpZZ26sN1f7gNyzQiG4Bv4j4xmjuRRwZwgc3",
  "key7": "5jSpMwd3C6kbDhJ9yphMHvGfA3zAQfbwBTZCB8uYRstfLHFHtCYGBUfCwpc7hYqzpFaY8tBMmvFHvEXhZwyhUEpZ",
  "key8": "GfGGaLYVYCaMEyXPXQo4Lpc8wpAsYZi7kfqzm6LPqr8bZ4CE7gxwaLSrsEM6g6LDrqvAdKEdfhD1Qvgad9odW5z",
  "key9": "3QuoWLUKPd2CKo75UxtN6mmsEEry15trsMLWyes6Mvkwhu9giQqtFgMnwKHQamosDCY8ntTbU7YeFxVowRYPq7Ug",
  "key10": "3HyerrgipTvAtbd71dwF9u9MX1f66DVDwWhmFhv3gqo1ophua2TpqKiAme8cLJmXj8N6xAnPEUY4hXAEmjNs1QoU",
  "key11": "4oitsHEq4EGhmsoPThnuZEwU2hQy9synrAerTyyoMBah75V1T3vaD6P3Cvmi4yg7RA9fgd4fmNaGBS5UVoYEyKFL",
  "key12": "52gH4VH8wMjCkZH9JE1FyLJf772n5CUyHxLBKVWcUaosdxPbV5vVqZSD89c1kj41npdryVMmsWds5YrnQAtaDreL",
  "key13": "5QQA3ERgXWpHAfWdXwi8C425GYuuL8XXpfmp3jjb6dCUB7Tf9G6nBF6jzkK8uwLhwhJezZ9Zx2agRJehN4RmNufx",
  "key14": "2q8WUKYhXB57yJF3P125fZheS9rSpkoipwPQKGpACnk1oJTbpn2nFKZXDyNfVVZeH8wvETgAq7m8kYjPoCdknwgw",
  "key15": "wfUs5AASB2hvFyeeSSuz74woiDF352Gv8WiHz1Gzn5p6APS35teQW2VYPV1y4Hvg49hiZGkjFmjYm2ESTS58EY6",
  "key16": "657tJkengiomNrbG27fWKsbvtiF5xmsjq2ZYNhzq949HL4W7J3EtskDwBmj8wypNFN3Bg5ewdDPE9pG5684Yhmhr",
  "key17": "3Mz9tsghvDAoZwShTwKHsEq7NYxx2kjMtswXZZtZKhK3FRhmhwkguR4jYeLG1tLpYEa2eD5nxWPgjNab2AzuForD",
  "key18": "5VyB1vrzTwkL94b1jJUoxYKcKzfN7dmRUjYVazxx8giA1BNjwjsBebYeCFqkw91nGGdmSoWFXGUe4Euz3H47yCGn",
  "key19": "yBpkBTf4yJFykLYaZMzULauD4EDKVdbp6UfdFs9jTCgHMiLMxu5Uf3jdKuZVEkK1axFqRWkReY8zZjETi4Tyerb",
  "key20": "5ZgR2ARd5rLG8WQFmm11i3qL1BZR8NLiJY5PXGsUWUHcYqWSvgaq62XBWu7JfDXsyQK4wnwJ6dWu26eLdnFbXAj6",
  "key21": "5KUnscEDV2W2u6Go92yN9RwJGsn6eCvecM3m27zaG7Awu1RL6ZL4Lnic8KsZnW5RUyvxKTkbXngFiDHi7egesxXX",
  "key22": "fPs1BzoiA5xqQz5RkK5PGpKnf6bPCKce3KTtiFcJfALb4o8xVsZDD4aUu1FCu7dhoan2ujwfmCWSdMg4vM7LPB2",
  "key23": "3ti2E15ipqeeBg31ye3JWZqcet6pyLY8f2wUwyDLNfAf9PrB6Bw3KNnqKReFzZdRoZP6sL3mdgkUMUvPttBdqWYM",
  "key24": "2naZHbyqTwENfkum9hJs69tZ8YXEvZaYVR25Q8g5o97Umg8LQ2w4szFEKRVCcwxwQgRfEQ3Y8Fw613Ad9Yb35ukG",
  "key25": "4CdAXgrBUC5A9m9xYUuG2odkzWFTqiqFiKqCapwVBVkFSfhSQe8Tmr47JWyjz5oELXfJMN7b5wvxQGatoBGfQNPV",
  "key26": "uFjf1x6Cpn2VmcM3mRxS15Chnfq5UCuW3T7J6AvPSa5SLVogzL5SL3tEcwyuM1Y34ek771MpbeSbLdqF77Sy5ta",
  "key27": "5JuygY3ZS4eYiYfJegv5EdsdktXd8RgGBW9NkisBdjzirYhgo5q5QH7rsjYB2g5u263EcJLrDnCjMgy4zAbHTRXe",
  "key28": "61UuYjgLuSsNGbmEWogBmoGpZQCdPRZu8Vn7tsbGSDG6BXaTMB9BzAMBah4q8WpYBtPwYjHC3vdwHxZ2AcX8R747",
  "key29": "4oTpdS95ubLCtvYQzNMsFGcHeYouL5NxJAQVqXZWZmK2juWRRtKjFd9JmsFZaeAzRLsaayayyR67ETeqc8CaFcrc",
  "key30": "2oAxcSLvJXcDvK6Luf5B6AU9Ep4cBdQE2H3JU4jsTaFQArGxqKJeVEzFkJbqgTZRNsJSxWYnQSKTuZRXNqTZjtCc",
  "key31": "5xt8ZkqsrPpoUCsb9vv4fqJEH9ArdXWiovaVxdzXsq5oUCvcvLgwNSzp5eWKaNxSPdeVhYBKQWxQSbPFgAbtiC4L",
  "key32": "2a2EbseEAG9tuLYZ8F8V7ovNzYd3VLXvcSJmZ4qm9VthCK2pNzk2USxhxtiC5K5Vwgzn2moAgKrvjL17EVA9AfRt",
  "key33": "2YSSHp6Q9vbPq2sZktB2JXT5SYJ5mEdnsNfLxXbYzZw7RW93jxj7FMEvqgAq15ugAzt9ofjqGbWhguU4gQ7LmEEy",
  "key34": "5A5rsnr2iaAsFeLPej1hFWSrgvurajadYBK3pocmQhjXMDdmPBhAB3kSDzSH8NKvWtxb5T8kRp8VzwmTWAnQhTCd",
  "key35": "3zPwwEJZqkbxq4JGfAuxMFRTXBtZ9djhhgsDHDGHUoA4rMo2W8drNnkNJfpxLP73fnVQqUzbpm8aJ2rFSD7J14Xz",
  "key36": "5VPr42LTkHK7ZWwFCjQHPJd8P4XGRauA9x7aKsLYrm1AreGjEbB9Q4jA33WmBgMTLWjbG6UgXXfJJAiFeiQftn3Y",
  "key37": "bqtGFRcK7mnqBsCWoHZtXcjGt1zbQ9j1b55YZNwNzBW3JwsV1vnrmpAYRensAXmvi2g99NVzvcjLgHxbwBJjvrY",
  "key38": "2B5jvEmpS9X4Xz8q58gvEhVYb14eWFyzv28346DDH6RpMqbR4tvEJG79MyYDtdnMyghYCbPLkj7wF4XVg5xTEaRg",
  "key39": "5DSp71AP2wg2jHFLFNcAeDA6BwAVQPVCFW1iZbY3Qkru5mGjxGTbutM3rTq823ezsfZ5Hx376NwjPCPP49dLbY3v",
  "key40": "j8fLa2kL2jFhNBHzTmDgCXndwHLcTZwrhEtHiWAeiQ7izcfg3W1EnqoX7LuVsbEDskHMKHhtCq6pc8HCpiVyCXJ",
  "key41": "2pvYY3EfL2tgk22PDwqibBgDX2B7QQDiguew23vVkLZ9FaxHcpits2fLYqfQzhHnkJy7S83ZFQ2xdyjLVjWUV3mC",
  "key42": "4ctZapGCEefWRHnsGQVN6vbEC3NS4Rb9jyZP5wHjWFvD1h6a77gGJJAfHiLBHfGQRBYyAL73L5td8AZN3YdCZcZ1",
  "key43": "3gU8yz7JggNxfeBHTozvYDDFz1Sg2tqYoh6JyRbeXTzQyg6XCiSMeT26Yt2ZR9Z4BgMmPn5EDuyZgXJWruy5iH61",
  "key44": "3EZubtPMfYEC4vrqj6u3XRpNdLnohvYDMMJ4SFySipEXqt5Q3iaEUmNJRr6fKxdAECG6LGsDJhoY1sVxRvAyfmRW",
  "key45": "5AnD3eEXsWuJr1f7XgwHNKQA9DHjXduUdYzktHJsGHdGmAhmDfJsiggaJTr95Fqo5mdCNKZXD2SpFW3Y6xbsvkf9",
  "key46": "4qTPzHy5qR6zzRXjb7SNPM5vYQXLcCgWs9wk9s2dfj1nfuwgr8mQ7kWpg8d1tQP4LhreYR6QTqRup1kCiffiCCaD",
  "key47": "3mPqd4RZ4TGhLQ1dzP6J81SSpFe6Hbddcaz5maUuTPecDCdrqXLHwx9K5tGPcaeCDcjAZy95NE38Lm8pw8paF8Lk",
  "key48": "4oMZNP5RbiggcFTRrSMN3hPjREkdc2Hvje5YvcFYfDDkHUMz5LgG3epi3kRNyTrCNijmUeMruCfMb7JcyGGoYujW"
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
