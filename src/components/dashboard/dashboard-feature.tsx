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
    "5S5MJZxLz55e2v7KZ8MJ2FuUL4Qm2kTuz7PXoj8DYm7seAC9KtEKe4HoKB4UgYiuQzss8tQa2zVh1qw5MKJ5CwPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wuWxBSaqQidA6j5GP3kshQSazxrfyKfRen74eXMwtskuwSvfH4KxrWGKX8BTaRnrF5iHNeahsVsa7fNapVyKiTb",
  "key1": "5mdA4BFaLXvTxxgbZE1FZiXv4Xt1jAUzbQm471ro6Sp6GQgB5KEJy7TMX9NTdwNNRn6gBHFL7qjP8zPMoTQzMB9V",
  "key2": "37pkwLpscsULevL3FxicuXgauwfKZrQYBVFi5HEXxqsVAfTNuifrkzrky9yBuqLkaSuNVcur9H1ZbMTSK6qvHWHg",
  "key3": "3J2mxPzd8YdtQqz2rv27gJ1Yhb6bE6Aby5KKXSWYT7QHKWPh5CtkaRgYKLAoNdUbBA6XLzFFCEvjnv6P8ynYqT3",
  "key4": "569ZUJjjNbN6GaFQZUePX2WxkSzKTnYjWYjuenbM8VWDn6q8sQwyYvu6uYxrGMN9gFnjA5xNJhg4iofLvqjQXvSS",
  "key5": "3sgXYW3gjG69uxCaVjcE8rvCtfoXxv34vmm4adEr6Mp7DWu85nrHfCqQeoML7WpskgvQ7JsumWcoaxegFdXstpbV",
  "key6": "eB6BARn5FVgMCKcRYgXmUScbztNdnm471NvkK25285WpPfwcWprR6fbToWt3TdvSMtyBwhihSWm8WB4ZNZrnsV9",
  "key7": "2j49Vdth8CkCrJTPvDCwPk4DzHGRPH8vfb3tEW7auxv3dXJe48XnvYP2W3GbSDZgA6zKHddcZCfi1mEfEvX5fHJ",
  "key8": "xYgLyNXLgd26gRR5FqtmSk2Tc4HDMF2obrufbADGqmdtpyS7maF4v2d6vEr1jTk48k5g6pQLxvioj4zQ1jDvS1m",
  "key9": "59G1gdimDWNBDh1gASj8Zc3gArzB2BgHCk7y2y1wfy9KuAxtKb9sLiJ3gWRqnvTQ5xmJ8FLTmJjaDA1yCoNqwq7X",
  "key10": "4s9UmLv6RivrrxGTVkAfayJdxzgiJ7hLLcHBkPezhC64E8qPyK9UzmLMmyvCUYecPcMtqVb1y8zwwSTvb5S8smf",
  "key11": "4hDapEs45CBK8afaA7Qiqr1LfSpiWwH6WBc6X1EPWphLfKpyFswWitxTYYLjDsg2TgSHey5dqHK3d4da3sPWPfyn",
  "key12": "twfLpirAb58djdp51GvudGqjA4hwFix5W74BCERFe7Y28nGAB9MUheqQEX98KKxq7C1XYCpAJTeGwctUWZrsbJj",
  "key13": "3LwfuRncogr4FvGq8XawUbzE3eC4rq1QQrAeHRMsSAr6WvhqmNKHtD7ceTfnzBgeksxbRv1JS6D5ncKdVBAajN5z",
  "key14": "2z74njNG9kuoq1hYt4XMJxWRiAycQuzYFDtf75dYkYNwjdE7D4bFkC9muNPgRvxUPEgAfe7gQFhBaVcBn48PCzNj",
  "key15": "53St85FNxkcRiVGCVhzFEsv6QC3FcibWUCZFXEjWfMQfWivaeCyV3YXTxDwYfZy84T1k6U2HGsKRU9hBFhQSZGcd",
  "key16": "42GzHuVQByzxpLKqVKwRrpg8Tqj1yozaEZhNBd7tbbN28rbaTES1pzjWgwt44LNyZxdxAa3BFMMBWPpSp1guGc34",
  "key17": "2qZWaj8WVBjekjciF5sbNxGEFLErWvhn1hAqTzjUzZNYuoXcYYH8RnQ41YDzCjKYJFcttKuMTwab3PB8re4SqaSN",
  "key18": "2YFaPsuyUKQBC5ZvGVpwFHZp8zPX475jcsd3hPiE9hUyEnrUKqQkc5RYAq8vuffMFtjALEnU6anke6ZZCbjCmA9G",
  "key19": "2SHUr1CVcHie3Gijx9GsJ7AeCd36t4MAn3kc3yc5TiX2xM6qAAj8ZNhQysrcG4a2xTDJgYrEHuYMcyK4swDsvWVq",
  "key20": "5RA1gcFyFbkuDnEcCHs63KzNRTa2JXcA9rGb6NbZhnuBhsLU3MUkR6vBjvjA4o4K89kEZtmMSVGUw36z8HwfiXqh",
  "key21": "oJeKDuY6f16DkAm6HsFnShk3ufbzXM2no5WPd2bP3FAkZP9ywQYtvjgjvnvdFvSMBwhzHY85DKqrfkuTRygvjtd",
  "key22": "Ykf35ED4AiFwz2gAWahs3nAdRYSZUiH7RKrXKaqZ7psa6cPvdQfhMua3hGyPgnW1UaHfVNo6sytcABn7enY52Ye",
  "key23": "5v2krK19pDegE2rZK6AYkz73Y24Zk7jLL62rchX1tgwymgtsBiYFj5RH63ifTiqnrcoZb7iX1iGhHeJhNKJcd8u9",
  "key24": "2hQ27BZ4S9raxqV9uDsFBNHe2yQpFS3CysszQH6ZXyD9ex6hwe9whNRX4Tw57poDrzU4PgvrToKCFsQpgnVxSsnk",
  "key25": "QYs9DqHAXK8zYszSy4PjbziBYyHh7xRHPhxRqUfQr3frsfgyW25wpqsfjvoqp2Fb6DyE1vVhbPb9XvYWPD8pGri",
  "key26": "4Npv7eq9XJMhGH5zGbFstMa6rZhd6qNURSxeuenTAwcLyASrULobSawdWFFXkAKdpbnbRaei3AREp6wdtkTkKSZq",
  "key27": "5v3g4KfdvembREAyiGaNTrDn557qTFee6Jz3MyZx9gyxgxn6Q1CsUWvTnVQDVvHhNTW1Hhx3JM3XF3yUcs3doiFF",
  "key28": "c1NYc1LvxbC6BnrgThGN8yYd571Puoo5uKbcebFUGFN9XZ9g95nNEMYHjDtS8wuXFjn8qVoTrUqoofKgAZmF3i1",
  "key29": "27Ye9VEf1BKqnMV82AbHCJVm1kbGmoTqXqVaqQxapEhLVEMjDiA1rwNSgRBAZadzpZ55HsXutNazCSwtzuvhyJT1",
  "key30": "2vn7r9prfNeZjnkvEvKA1mvCLoCkG9Ex86xkNFCcCt1DCuvYaL34d3NgyTX6PyXtTwGgmyCn8igfxsJhTW8GVSMr",
  "key31": "2YypbMbn71eLrWLsYTCnbn36rKnCNjZuGYcmvRs7bzDhHScX5CSqG621nJVAL5k3ok2gdTvyqybkiaXdCi38VduH",
  "key32": "32PxYhdo13q4ueto3wq8RTWJHJv3Kp1E9686MzexEKpMZ6rFGn7np9BwDUiPLo4aceWpQdVKiSTTbT7x5Qb6QeLt",
  "key33": "EiVBf1vL6SyZ4HzvWAKPzwYNLrHTJcRnXKAp7SAQ2UDmNj5Qdq4XfWCWwKzPucdf9CRVb5PvZkabrU1cVSRH4Tb",
  "key34": "oBWheVixYSV6AB8pbHXLFCw4tfs2ZNELeCAirjxKhE8ERZ4ZYcWughQGYeqxh78cJ9uPc1R65EDwsqVPQSMrgN9",
  "key35": "27aQ9DcNkiUifCg7SBevSG986k7pHpm3FxDzmuz5o4qR27ZD9GBxqLYKn1Pg5UFh62xQCWfGabXwMmSFwNzdpPU1",
  "key36": "E2USs9pFUqZkbxYJSsfynLUfUN5PM41hyt51zJxmpUKfUjtLgE8ESTnes9kjQahsk6WUFPb7TbfMgEDLU5YiPao",
  "key37": "34hoRSXA9wVCFgE9vedL9TVvnBTXfZzJ4imwFUtHwcDkMCPFYa4Tr3UXwPPUo3x6w4wQ3h3hkoX7XU7uYiVW7wL2",
  "key38": "5wTEEuCwZWU6dwNyQ3xKvySxWGP5dMTc89jGmRyzMsZ1PaVAtEedQ8Kb4RmZNDTJKWTQbMGxZrbWua52U5N4j8ju",
  "key39": "jaS9Vv4H5QRDip3Nm6buXX6dGPxKFEsLRCjbdXdCMxyEwGC5jbcxdVqS7Skyu9QgqbKT8NW3eWbQMXJCaLarXYN",
  "key40": "3u58DTd5ZKTF5T5FEhLvQXmQG8HNdnpLPcDWR7H5nuAUeYCaMeW3nCrEkBZBBM3yJvMqZGkAwyLWD96gzkXvUQvN",
  "key41": "4p62G35jAWY5JLwZMzDXGYBJ3j3YWAYSwrhRo9yvKpR8mDTGhBSTBfsyxkFWh6uG3iXEoMvcVEAyBLDrt4Ti14cx",
  "key42": "kBPCL7gfVhoUSAFesMLuUNp7oGc83iKRWADmxTG2HPn7zpHph3yHvRyap4kXQZng94tBfGsEL2neJAmcSDARFGL",
  "key43": "wJAdRPabXq8Tjq4x5dF3SKrSDNntjQr7GDEydVQU6fBgssVM62US6yEMYaQJXQb6W327NPRAVz1waEJX9jzNECg"
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
