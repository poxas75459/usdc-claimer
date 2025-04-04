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
    "5ttxw827nzyMsYL3AM3B2pv2K45vmcqPcQYj4XhkGwm8tGod8rWDRVpeqJD3JaqzKa1dfucRxu4KtAXxkHgyWu4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zA2DMJQQbDsrzTiCGjQKrTwT8aYZzXAHj8ShykacqDSCzBr7ji9cogB4nNMpMfB6sHugVqCoCdGjfpUTb9SwVvH",
  "key1": "4YH9hJhXg93sN9VZRfrpjgC2u8X7bFtuXbYTBfrrBoirpxbLA5V9bzuGWaTXuAQFHADC7zVcSznBKDnTCk57xTGr",
  "key2": "4GrEvNhtGCAQQKBXkEE9Z6HWMaeuauqhX53xpkMxTCF7tN7QZXYpgE4KwTkR9t3N4Lb5QBKd42yqEDGsTVb2kG1x",
  "key3": "4aqYf6iSuA22UEyVHzjfPYVTkkXLwwiRfYsbfuPQyzwsD2naA2E2shRUNKvGYjUQVeconD1T2zri1KdVvcFeYwWr",
  "key4": "458ikktDji39Q2wNiofFmpYohHrg1Mntyyyke2A9SAyhJPHAirj9pEvXkZb6DEUEdfsdMVLZ1z76pFjdp1aEfQox",
  "key5": "LB6faAkipyi75V6Esg6FuDYCcRjZeSPn5EwRjymv1saR5VVyKmK6wzHv8waKsardkMg2BSo72iei7sQkTQTHW4T",
  "key6": "4k6syhuC9jgp6b5YZQ1E1UWfBjKqoabXanv5x3jPfSEcqxqxk7mSNuvqs4UF1CUsoFKgixj38wf2EP56dTqE97Eu",
  "key7": "4eHt6LUm6Bc5P6AssDQtTNnox8b5iWDb4snxDTkckXL4ssWwYkkuHm5mGxrUtKSXvyKzXNJZm16Pmme1RpArQksw",
  "key8": "3A4N9WUyKC8CF1RoCqjZuVPK6fL1hkeYFadobLTPp4oyvDGCxgDYEDvhkF6sJXJ7eGk7VFPk41BAYi9sE6u7pDUx",
  "key9": "3eB4N5VttraghEUEgN3EXAxSwaTVuLS5shzVubD7Dh4AbgWQhMERcTGGdDPrq7JdNL3v5GqrZW9BxoSpQDJQnPK9",
  "key10": "22kcavYS873SuHSxjr2uXtRS7bPXtyLv6qxVHkkiAZ1DeaYiGaB2omALYknp9emxKJLztgkmcyocxpLkJRDyX1Vp",
  "key11": "hKDVBipmM6wgtjKG1GBxKiaSmLdHLTgyBR2hasQ1wkMhSdCBZQ3khRjfDwnKZDpWCRNmAraY2yXG1sPLp7HyKUk",
  "key12": "3w5rEmqtugqJPPMQR93QSxvS4i5ZYC1H4ybVVM6yuPe44my8kFRemgq5UsodVsWxiGJnvPxWTyyVKgfX2Pqt98ys",
  "key13": "3kDmPjJpS8Jyk3sU1W2qmwyTEqvBsNRqNMfvDBJm4e9jYm1RyAiGStxyMcY6ijovGuGuCZNswhGbEVymkKxXCQMM",
  "key14": "3yuButu4EcLLJhv3CfzvCxQPSZhpkzRZMNHvhTpmwjyPLL6QHD69ANcp8ewt395m2qDNxRtfHHj9LbQTzLPRTspL",
  "key15": "q3h6k7iMGdB5cMWZrt423r2JxvAj47w5KWpAxYM1YTqmZKzPBnSCZH4NvZPSEqW879nKBhJ9SsEb7AWftNaEEi3",
  "key16": "562Ujt7GhpGa69CYKEF2EtU84wZMbKsn84Lf134VgmdgPJRq4ptcW5h1WWBdWpr9RJ3uTGPdNNf14aPME9hkiVh7",
  "key17": "4PjVdy2dWjLwd2xAWvwnwYhwsCcZKBCFKGrnX7QXFpr2rGSfVLB8k8GN6e1F1jUgNvpvJJDfBSVNUbAZKkieiLEZ",
  "key18": "2JxBzUo7YiuSw3HBcQZy1fzaVZWQCbR7cWM3xjczXtoUJYsbdfY8m49dQ71uS7jux52dEM2zDBackyUMY2jmVS5i",
  "key19": "5aVK7wz7Bkzdv6JprN9F64dJnSSirUoP1pYAH2vUPjxYEHXxaJzwYTTkyk8jXa1HSPnyErpCoSfBa6reiQQqwWc3",
  "key20": "4ur6hxrsyvaMCBAx8xd3JzufwUo8mGZWXwZY6hF4os9Dco9t8125fjoajJTEpy9naz9MuVTRSGr7TBQDARYWUGZF",
  "key21": "5sqrKt2GsCqwTyyevLQGD2RAUbMxZBKEd2X53qXNuC5q5skSdHAMRFGRyHakKQ4GxjsywxU113kL6wWcB1vZ3ErV",
  "key22": "3tYvaL3BVPa5Xbc1o2td5C2tLLmvVK65oRV4cmNLSk1rp5hCKn24Uhqmz3HjGQ6jf1JizFowPyvXLymfc37K8SD6",
  "key23": "3VaviLC6cN67fV4xd8SzJi9LvjyWeNwcEMwdLSwRHQqCVLRR6NsbNjTS5LgfahUzmiATY9hqiVd7RuAZfTxZmxrs",
  "key24": "4Ah8C8eNqaoh1NW1FxZoz9oifdeGJGuUvgYcXJhpC46Fd9m7whdthkjTMMsMvJh2A2R53BtXJUFMAKvpKaGU6MjY",
  "key25": "3Vri9FCUQyQ4uDDfLMbyk6iDVBEPxWjGL59T1XQ7WoPmV2EEXccHUizsVqhLTa74t9m8f2rcCtVWNGprexRq2fF7",
  "key26": "34gEEf5X93hsw9AR3LoNDQgbVy8Que42tpkFDruoTXJUVugpCFPSoNdTbAt1pYXPSs4tq5v68FHv2AnfnCCBzF7h",
  "key27": "3TcXS56emKHz3b8MrXFH1UgecAf6bqtaDNCtcBsfiDUyaTNBC25pwfA4yM9BkTxFQyHjwEnLewMc4UHcLdt2Vtnw",
  "key28": "55GATivQWRZu11QsPFN4F5z4JLj831D7vYNKXTKtZ2s9gnt3Lf2MxVwoR2CJ83TKygHsAQomJPPVDf36coDy7Pwp",
  "key29": "5gpLSerihAbbYw545PWEpR1ztPxjRzEzhw2vB5pqKmDovMNqK9g1U3pPhQsp3CR5vyGn2P91k8Sy4VKVXnjNtFzm",
  "key30": "5ofE53H5zSV2rSCJjUgnEV7S9BASo9rv5fQXvhXF9mgJcv91sPyzZgt67eeLHAiDZFK62SCfpZHXR4qUsJ7DRAjm",
  "key31": "2JQ1t7g9L3L1TFs9FPTHWoyYJN6V9XbydtUYTt32SUWUGdAJPySknRWw7FsSJkqFxvKhua7TVAsze3X7Su3fz8wG",
  "key32": "2zEZ3uCkAsngaRPyTPRf22dmJ3yqwz3YWKmweK9Fm24uCEqtQW6aQrieyxM5KBboSnp8ri4G54kLX2NK4f5xzaUg",
  "key33": "3EitpuSi7PvAeTUtsMrMxuB1ByeBnx5ZDDUwEj6KxCrDtKWPmnkLGp6iTewkHQz1SoJ6odMgWVHvzMDoZHGQoyTi",
  "key34": "51KBAa6U2GFVWBDbWtbBYTr5iywhvVkzxGVYSffM6mUzogy9UegTXWPkd61V445cfBVqkzzKhLav6yvGskyoBnpV",
  "key35": "4b4sUzC1B744EAj7RT455atV2QQKRNQamCEeBhZwHu3wW5nPyRrKLZ5yMc435ujKE51Zx4wgDBWSWdvQv6iv9Cms",
  "key36": "ACBDbqQKcY7n6GQV1bmA5MdoiX5N166Ets65CGmjbuTSVuvPrqeG94F6LzH21ACs7x4UAZCRK59nwq1A55JzsqR",
  "key37": "5p5AEDBJ8fAmRELSExm7TH3zjwJY9WfDmthM47oaKKySJw9SrWbHSUGeZyy1PccCYr712wisrRdyMWxwntKZBojK",
  "key38": "2sZiMeM6DUWQQm3ycVyva66ZsqZ7VjSdpeweYZEkCVPDscBGXgA4eJzJauZZyFKfWCFsmPLkkbcpmYrJHgrmRy7H",
  "key39": "34XyEzVLPNiiqihAr1So3cxanu3AitRM557RmzbjPNgJqMQHj3EMHAVtHhKkD1uKBtGU1pbGZGodN4ZyPeHPvQjn",
  "key40": "8bZCynyqFsvMsCE8ePD3sAUiYiyR4JLMmScBdLUG4E4y6DA2j9sLaqzDTCxrQgCHaxESip76Ws7Yz3qyELP6Gkj",
  "key41": "2kxi5UD8wPverzQgVdzp1qwgJ8zJkmbvKGEZ1cUiCytpqbdrvZ2DHDAmC5zZTjz9r5KYCABM1osHsBkRgyvMXzz2",
  "key42": "3Mo2gCSJzSN9xWGtoHC1BXx5n7R9Y2nKzUFsMPXiE3CNRqG4TtUfxE5rChP7vwsyweEWQDQ1YHm9vKQbJQ79KEUL",
  "key43": "491zfwzb734ziCYWAwEMUCh2dZfBJEZnKigTgcEWFb26J9CLXxrWHN6LerAbXbEVG6qZjqBiD5KQJd4MastUrfrn",
  "key44": "3U8DYv6dgZvsU8XRSioXwUL5aJoKn8WQmsPw9EQUZTd8y4goJRmy4NsZmq49Hy8nryW7XnJCgHrfmbFnhhk7BV2o",
  "key45": "363zXd9aY9XhCGbX2h7f84Tz8suHF1iJm6ycQTMLYSbRmNPzYk9SuJbhRG7kcgZigsQ2CKRPWBWyuskLUVsjRzmV",
  "key46": "2Mbt6z1H4w5TgTjNmQ1CHcUsAg8K3fx5cY617uFkdhUPk9fWE2kopLHUb5WzSvkVBVzdzWMuxEDkvLJ6hskqurD4",
  "key47": "2oczvUYSBZGKJdtJXpHsatKiaghAsSWyMnjNGKNLiwE2BrPmZbapw1aZgGYgTdnhd6qjxJg19ekkX2NZuckqxCgz",
  "key48": "4pWn7WWW152G3hBM7A5mkxhTVyVAtPmPmcYwsx3GHGMumiSPdskGcmet84dgPbiJkom3k47w95vUcDNsvguRUWaq"
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
