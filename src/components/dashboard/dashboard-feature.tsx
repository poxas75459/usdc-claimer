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
    "4swaMJTqW3Ep2nk3dUre2hk7DVrj83ywjfxPPTe3H5NtK82FSs9f24Ry3jpZWUaTCTGtkyBNhnngddLSpAQ2faSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVLP8PQqRUuWSUJdfnLEuQd7ETWieLa3v9Tme12U8fmWHjnBxzmRCXkhayeXr6Br45ACDkfmSChAxqQTiZZPLkZ",
  "key1": "2grVCNrFeM94Mq9AquUVj3k8MnKoVe1QY3Z82dcu75oeQBbM7zAedovZRmH7D9JJ1mLRiYbuChvETJ92G3tcXXcy",
  "key2": "4BTX8NQ4tmhFLSwxf2dtmVV57KTPD6tVFc3tkffShCFKHCviMVFVRLrp7QQjewDYZp7QunLfLBaaBzPN76kGtvpT",
  "key3": "4e38QLhEiughzPjRXfFWQWKFiNt1jNpqSaurmQw4Y4gZ3siuynv7NdoUo3jHtzp747aeW3F15iKdEq7Bc5c9AU3u",
  "key4": "2o99fbNSUmpJhsszvnFLePRbUAMMfQgExUGx6F87GS2tSYyvpPnf2RLqo2FjANVEFJXYxtDZ39mxDy5WvZdvfGZR",
  "key5": "7QHtMAj2pFM3PAEBmZtftsezYt6spam9wch6P2LsxHytCUqwxmMUGxyx4SADY4buxBFunhrwnYAfwuR7EBowJFL",
  "key6": "L2JgokfL9tw5CrXt4uLbc26ZMwHsxoPwCkuxHmQ32Fyf6GSQ1cMAW9qa8UCuhszaMDB5H2PUzr6mWu2cWWSYCjL",
  "key7": "PMKADEvRGyQhbCR1DaMhBejC22F1vAHkWR98rNRAxCKugYrSNLBVuLpMYMNZG87XaQdKt181ZZg1w77tYRUBnKM",
  "key8": "2Z3YWPcnDP4Wfu1PSSDpqKfCWCFhjp3ugLvWxYfaQoPrYV4zX2gBvEu6uU55L1HBfq4QKK1ewJGXonoHheaoqcnk",
  "key9": "2if53qN5NtJY2e1KokcG6Y8UAhNY2YghpFQbQVrzbdYS9YQqHbVw4kT4ugPq7hjH2P18HHMcAzgU4BcLYnKrbXJF",
  "key10": "4ociLwk34CB3FEXzV3EHR1bB3zGCsvTb71EpddC8TC9SGL6zRQMdMuDrtD4nv3HyEzE8G8iC46dm7xWSKTd7XZPR",
  "key11": "medEKjJqsaH6bSm3FDoAqmRumcUZRBbHsXgrX5SpAEajR7ZHQ6aesLeKUFr8fMyFU16Yi4fTAz35ww1R75uMM1V",
  "key12": "4kvaoS84CX1jJ6BKPrvf5b726f2fnxJ3PUXy58vzsFhk4DMaXhA73ciELqifNW6ns97GdYAGBBvHqNBYJFmgegQA",
  "key13": "5T1EroekmhrUcJhpy6guuSB9xpkDe2fhLNbZkU5HUJfZ6HirPbQCLX8wXgdbSUXQFndTwv1zU9CskVZ499XfZpXY",
  "key14": "3Z7EknK4E7kRfkuJg3zgnr2SguAtKQrG1EcwzcZYcKgfWmo2wVBnCtgXmrB2b19m8J5AmVV6bbK3w6SQFKcUtT8e",
  "key15": "35QFv8bAwWwdThbLtNhJ3yR2t3yHgBBe4d5QMMUYmbrVopLFG8uTZGrLQi5JaaMhK5n6qz9ddBg8PydaZx2zx7sr",
  "key16": "5LXNcPBmnHVoewHVUBtD1qCenwdWasScEETuUASD2YBFMWzaorTrsyH3yYZHxmfxPcXsLv7ekYYAPoPxnXmdeZUU",
  "key17": "jNRnERHep4nb3jjVWvzxd1m4NEo41VuxHVYuX8ntab8ruWfP8b6A1JFG6HhTJPG7Uw1W7hGYUvu38DTtCwiFyLk",
  "key18": "8EB2wfHXcVcnFVahEHG9zBYHKjPzfne337gPLUiiHeNTSHgnqTBhmXon4iAfm3umks2KpReBSxciJz3ZfRNWPsh",
  "key19": "1rrGWdh4PutHLKiLqkcmBL1wUp7gM882PiSdEU9auTyx6ngSmswxAFwtHeJW9BmgMHER1Z66Te4wbHkc5CpU9Zj",
  "key20": "2GfNaZ3D9g1WLqfV3YQALAH2nUXGGUtkUDmKXZiUi9ZjjeweDEazeHQ8N2fC2rkP5ZAEiLPUWrV9rrijictpD6Nw",
  "key21": "3pDJk7Yfr8SmwnzMcSmH53RuknXWQduFQNux4er3TX3KsAeLMdq3vPe9uBGTuHACoqvUNN5dTBAv38d7vgr7pUwH",
  "key22": "c4qHpjKgosrhUaNqUfkVpPpM2AtgkodVojPZmnE4b7fcvuwotT7YSjAxiVJGQiUv8iKK1TA9gxThBhKwPcX7XpX",
  "key23": "3LzGuS9GghWtSCNmo5187jHbwchYffH1CaabfuiNWW29oKhC2wxfWqRXoGpZucrK8u3kRdzdrEea94hSksp3E5pp",
  "key24": "5X2db4FLuBzFCRPC7KJSpt57AnPu4VNzemWfBmtav6TfEKor1PhEmjEkKEcP2MvrzBbpG4JQh1Sf4CxBCYiDmBH6",
  "key25": "5wMNZWR711QyihWyZaD31z17bhS1CY3UtBL9K7CWhfX5amA4n7ya8pN9sW7uoCcb3i3gotSmUP5MQdQNyxhspVXH",
  "key26": "5Mu1HURB8UL4skScDDqu7S8Qqu9jf2xRNudWHh3HS8iFSBA4DfpiyWajyCQ6dYMmAQEWdyRfJJ2Pxt7UN9Xk3BYF",
  "key27": "37rqF3kaogrz2TkCLtwXGGALNCB393pyEiN6nhTveAm7YrZH3MsWARS8MRMuokQek8G6FHQVaJe2ZnmMypc2VTCQ",
  "key28": "9K3W7tFtJp4KU7skdtkSXAXSRqtErVk9pByseYSiej1tiw3zAF3d821qWpB8HBddYKsX84ZgAwWdgMB3gKX1yrj",
  "key29": "P1s9wG1U4QMDvBTrj7L49JLLR9ZaKPG4aaZtBAmt2qqVo35UXaRcgCMkh9QLooC8rr6SFTZgjPJafqwF6sxikFJ",
  "key30": "3h7L5Ngh6zPM7LeyYjvRM4wPs4FcT8rHJYxB8VtoJRVn7KEzMHsuaqHD52QutVkP4tti6cJmz1qoym1DkaV4ARA7",
  "key31": "5XLLR9TDa5ibCJVNxdGXLj73qKPAtJHx9KLyGQES3n1NLz1FZvL27g64XkrAyVxPkdTej3y9aih9A79uB4bRsEcU",
  "key32": "52J6GTgbUHooYYSRWa11daT21gSqXdFTE5iACZ22UkqoyU3k4rdd85fEdcyUW4fPZEkneYjEvSg7HeeZcUixpoH4",
  "key33": "uGT8pvDxytCD8B7godN9dQ1dsBdgMzpK61Y1TkPYs5wcMeCmrqaeB9dWZkYDuSkTxyaDXFyYHg5mfkiEcoWgUGJ",
  "key34": "4FJKxhk3JEKX7yqQtows5vZcYb9VypcXnFm73YRZyrSZWAmcJSabeyzr8aE1W5Ehd6Q6neCjokYVssVhgRaFmYZj",
  "key35": "52YWXh2knm8gkpAsUDw61wER4Md8KotcPTEcP7RFGtyLJCuHBDovr1JsQpx5zRmHSvBW7FckRWw89UegdpMyTrbW",
  "key36": "3xUn2DHYe4vnUDPtvk8sMFJRR5WJWSjRU5NwEDEwDpC5cSsp53ox7WUzbDw2wTvBbqRUZcKds1hh1fke9YTTctYv",
  "key37": "4A7AeE2iJKjGoZgjhJqVwoQNFq48aUhvdku6AuKXKKPzmjtVDXDxmei9wUHLTVwLVtWhnyHS3jKhPGoqgFcTTmbp",
  "key38": "64NVTakLoCKLrVgpNhRSp8Tu6BmjqubSZd1kAhiPr9J77AEQpDAWxvfZVC1XmbzgsDAznuZxxyfjPysfN83mi5AD",
  "key39": "kL2wDMg8QAwiLE96mZFUkVvggVMHwfXG5iDMaR86YaXLq8rXu1etPHJmmjTAE7CyRfkkUE5JTwxLKq4HQWa4kpr",
  "key40": "4rQXrznFACrjXu8KjMJw3ZsC1mivUNvXNyXh8ZNmmX5GjLtihLQKpgMV7Bd8a848ZpczbNiqH7H3fXnDzeyz5Jek",
  "key41": "4arj7jrBKXtqGQhhKjrWg4X8kFrKHN5JP3yUmjothu6EBrrYRqDRAoVH6hC2p8YvJgYKMKH8fGnPFM4vAVN8dJ3P",
  "key42": "3BAR3CJ5cQyhk7NFXkhfDus399t9szrKmFXKX4xVBsUBT6AaTzTasXBS3U9p8b8j7z9D74SD1bopALBaujGdXVRu",
  "key43": "2kaaqfwWFcZ6x5bMwPoe33r5ukJXjGgUSbDm6PuPeUVGgXfuBsmjjjumBXB1qNoGHSXThGWE2V8EoE1Lq7EB93Uh",
  "key44": "4TWGVrStXUTsVbfM2uNT1BmtTdrDNK6NmjwL4NEedSUDv1knbuqcfcgdWNZo2Gwckbz1qpFDapyh6nemsJUdTcoM",
  "key45": "j1rr6h4advxPXxdiuqk2EzpH7setLAVe7At8v3e9wcjrTMX1mK269CnHU4nQPVhqhcEQSYiKBdSgpP9HdDxssWc",
  "key46": "4btjZw7PpZDQgaTduvaKtgPWTQVSZDncBvrsCzzZD1WndXAMz64S5MGqtV97xpe6kY23LxEimqq7hScVPYoLMQwt",
  "key47": "4Rd3eGGAK6r3BUS1wGpbmfMtXKWpPGngeVTLBmMjV1uKSwnt4SDv5V6ppXgSZ3mLet5t174XC8VXcjkZMCQJjRgF"
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
