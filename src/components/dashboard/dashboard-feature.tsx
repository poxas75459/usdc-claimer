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
    "5wd6yNGakvZ32iRLg76agWeKyxU9zZgnBfSJ8Dm4AgU4BvbTy494jPNARcgToz5QoFCc9HedH4mhTQy83XX1Jf1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WNNtDcSdGwA958PCsVLg4FeVFqggr5Ezdx2cQEdK566VnL18xsjRk9YTwtTYVyHsuNuugZpNF4JAqmns56KjRMR",
  "key1": "2tawjdh7smfsiJhZ6xJ67ZbvPf9FMwPbQrtGdgKsA27VkSMYAWLinKJ35xnwXUGDd5CUQPEXANm2e3beWkhGGkxe",
  "key2": "2Lu3oEJHyqzvvFLeYz6ZipuAWamfte8yCSG2Ee6VqnArrqruY1pjrvH3iHqDtL2nTsAMVssG5Y7f4sGnmDgK4Zw7",
  "key3": "qJkEfBpPW4qv8Si9ajEi38LZMmZyKbyTmbGWVaGnFaBT2uUSXZ7C1M4xCPCKCWnKyTk9o2eXLB3h8YGPvFvLAdr",
  "key4": "216vMBZYboBA5FmtNeaGHkdFW6VVMEuwQA2Weubam1gyZrYXCpHRe4vkM5TtC5js7aq4qaPZYtZ8X8M81HoAsyUu",
  "key5": "5PNEqQyVzPWiWHrMLitofaqbFf6NyCyADsKefwigLb5qMW8ZkCWCTb8k4ScAGF8A5JWGB1ts9E9wuwyEnk98d8tM",
  "key6": "W5mrQwjift4iosWVEaVGtMqBjQwuS2tK5raewXCKef3LbKx9r9QxjS2K67oLPvE497upGJNgCgixeooW5p6Wtn2",
  "key7": "3jsuaEXMTBadfmqYA7ALz8DRprbnnY1kCwLewK3NznQ67sEqBXMCG9nShywNj5FsXB7aWFWY7mSZHJRBt8GrnZhR",
  "key8": "3g7KDBEXSxV3nHQthy1KgHPSR7uyPfCmmxxJdh6RcnUJuLr4BXSV5jLZxDigYXDk67uc5EZtFAHesp853gXCyUb5",
  "key9": "3HUtrvYUjDZTHNKk2grZVfFTBsuRDVJmza7vpntEik6H1zVWn8r9ogdUEGHDJ8g6fkRd2pdJiYeULmvn1pxpKAAs",
  "key10": "4XY1ZrLoYn8QEXRRWbMgJFo6SZQtas2dqBa5e1dqBxmXmuXeWH2fSbV4gPCL8exPCevMh4coDvpSHU8Rdbsnanin",
  "key11": "4EEM9zqBzCB5Y5tBeFiME2sy8nFd6KsAkDPMGwkvjNedTWo4NVaP2hR2KveVteRDBCayCyaMdiQHZ4MdDHhVdk3J",
  "key12": "WQvPsoiduW7pNcgWUfCgnoK3JHhhBeuSJ2M2eCkUAEXuWtjoW3PztQ9ZRDJAeUVNXXhbFUNHWTdDxDhvE54koyg",
  "key13": "47KDH6niVt6itpYLLJH8Jkt7QYL9YMHdiQEpjComic8zRXjZyBQs4yJrhmNRCwakGRM4TZTaqNvNYVsUSu95djDq",
  "key14": "28GypZMUQ3PramEMjo4nFbieMAuehL9Pcw3xc9fWvEMyeGFWnEqhq5bWxBa1ac1Md3Z2BjPHJqRiCY5sBT17ZKye",
  "key15": "9NjDtxqSeTsi8qjgb1GPR7uhSXvnNEXxviTVTm5cz54iUtf71htVXY49RRX4RcWYaX9Uj55Xb9YevVpAR3ehp3P",
  "key16": "4hMBJ2rzXQ3dwgX7bgmDNh48TSv1TnUqqEMkkxzzFDkF6QdVjsdSkbExsXsMu8S2BdPjaz2LSBJ73jy1EyY7m25N",
  "key17": "2xBqKegdNDdZfRGaMJXjLE6mfLPxWLWanR6K3VkSHVwzK7aJqL7xXpiCxjtKGLCuSfDAbXb3Y2x5mB2PRsV1XPsu",
  "key18": "2UWevdStESyeWdWR1xACSix8xjjf6h4dsovKrB4LfYe6ywMbDBWHZ9LEBacEapbXQPsCMYXjCWz21fDS9kaoC9an",
  "key19": "5857dyaptiypGpGhb1DB7kiit44Xy5n7M9tbGckGTN4zktPA27V43AWr7af7xd29kFDUafesZti2gAWtSXBdbjeh",
  "key20": "5mqRuz6pyV1JsfHgCkdtBpi6JDXYVaW4YKKKiLnbKcnEu46Nix8Jhjo1ekBAm3gLcEPW8V15yhvfkq5Hz9xSL3bC",
  "key21": "4jTzp8Pv5KRWPaCGBMwT6774pZbqVzfwoR3Sww1GR6mxou4YJdAdHNRkJaH2eBdAL3box7RNjLMYrN9dXbgQbRFo",
  "key22": "zjf2Hn3S5vouHKVMX8agBreJvqd94nP8wy4mfDpvXeYmb6GRE4xG7g2Ewd51KJtVryMUiuLWR6KZbP4m2ugrvT2",
  "key23": "4eHvg2WNWnWqd4dgSJpsiCDEL3T1CU43TQUoVfMWTZQ4yShVNiDKtg355jJ5advGvxzQ1KwwZ8ZrJiGpVtriUie3",
  "key24": "3dFjyAP2XNKEyW5wU3Zg6dipwztWTnkZuGar6msedY9VSTajWPkzkFuBawFLvwLjujsMK9ccLQRXU1YssAHpfWL5",
  "key25": "3bCzsCL6UqnNCUXSdLzDbERaBTr8VKH8YqeXrVyEeTyT8dYjaRtCmtcgurQapMeXcQ3k3LrHZkH3NWjvbduFeiLj",
  "key26": "6Jo1CPDr1y6SmXwHRAqZQMhn9cvqXL5zFBJaoW6m87nLrWWU5YLuRgbDsUQ4wdzW6XLY3Co4d7R5WF11zW2Yphb",
  "key27": "3N16hrxkUAN8EzrvRAAEbrBLbjastuvfaWRnViEQdDgzzg68r7uq2d8AwqWdzCShmLVKHGTHgdTkLrSC2EvfuC4X",
  "key28": "2rgjjLiFGNYiFCCdiiEkhfw7RVoFCZVX3pHWQ3c4monyWVECHA57nBfXB1YvcX64UJkPr1J3FyNjeiY46RxdrAWi",
  "key29": "2dteFXS9F5oJabj49Nuz5te5SRRPaxADUZWDxiVW1VGNCrAN342zB6oUM1WYPC3TUHoJhujdXEEmGQjBoYrrZTMX",
  "key30": "4HMNESrw56AZpNUsbhj2zXvBvRr9SX6KPMaULx41Bk9c1zZWt43sLo4Nuf2VbBN16KzHVjACkqoNGfz4dHsd935q",
  "key31": "Kzid9GY9tomC1yAp7oDTuZdffndhLopJav36wknZU6dZgsj2YdDaP66HPLFvq73pbLiDGD2W8MhCyUmdpYTaQ7j",
  "key32": "445iB9Qa72cPzHaWEQwpzvL7FKjVomwnFHi3hn8LatdNLzJnr98rMfB1qW4X8UJ3U2idYqACCpNhmPhVpTb29JE3",
  "key33": "cNqrYjtcTymC6swbMDTh1jrVBoeXtnvYzvQ1LRnGUkAMtAtjJwRWMnGUBgZh8cqMCePQTqvsQ4BBcW5Cq9jyHwN",
  "key34": "3BqRFcWrNToeKE4YnTtjWy5qa77s9B1EJyYWwPehKM4ygGptDQmTEbpLtNn4QbtyRB7LdA6rgBppwsW13pmCwKDp",
  "key35": "5Ui8Jb3Q8kqrT1eEGxmzd7S64PSR2GFQX7pHL6kUL9ofzNQfay95ecb7DzyZByvRiHx3p7827tJmnv6jKDrGw85Z",
  "key36": "4oaWsmDpw9KDnN1jK4YXt3TCqwehj8GjZjjYi53snySPsPJAgXStGQ1zYVF7hKFEX2MUEPNPCsniwyjB6VXMviyM",
  "key37": "2Zs48VYbY9US4YwJxGN7e9aQ2wfaELKoee6KZc6vrGNrptj2xWWPVDV3hzzosK2skR7vGZcRk8vQfxR79CWFhxQw",
  "key38": "5w95MSe3roiNi5gHyfUpVX6H8uDgw8yazmroxGbe9rHibzJCDxbyvzJi6VF4e1FxSwaMGwaxcVpCtDeCnQSZPoFx",
  "key39": "5dfTwARTAFFB1NF3r7maRXNMbWye7v26rQopug46fhDdYWcaQbJTPWjmYpX8Y3QuPPTvZUgg8nKW9jn2bnJjP4uo",
  "key40": "2JTDBVYFaDE5aBz1i1b2niFyJ7TqfBWqx6L6KRvdwdgZ9p4nQndnkuf1XvsY3GKEcmycF6pERWV2aZSvwfr3p9T8",
  "key41": "54cftLSR2tUXMXkha8cErcFGhjim73jXcmURiTXLYErFvKXtrMF8o2pEnGGRaeMTxVV5qKdJUKx6FjFPz8paBUeN",
  "key42": "2vXM8NV8Gb6jw4EDwDw4cbRyESFsGcGrtMBxmoA3WYhT8Mxo7uk4LbDks9BWgrBVLDr8KvTbheW5rRHo4vvQQzBC",
  "key43": "369FnqhP8RUnXJtek3J96nMig8bRU4mp1oEuQcKoHUBqKDa67vSazDVCEWqsiUZrhtjFY4sWAvzCQiy83p6j8gct"
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
