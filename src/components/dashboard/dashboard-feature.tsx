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
    "Qj2rN7bfooyAQGhgmyc34JtR996Q1DYVdJ8wqAPNwaMmrfU1oyeCo8ULSpdSu62Gayrmzhq9FUYRysx8pmFovJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARjqjSfVewtLnq76XaFea5NzQ1qj43a2uTn6Xoz9PvWUw3cALHzS16bkNHFyHFHGw9UEgcSAQySVf24SDgZTMMC",
  "key1": "4VkKZ59AikUz3YLSSaY1jiN7GbqPWEBuL7sBhmpkf9VyE8Emw2cEhWaj2aHKBdWk9H4REMWW1kZRAPNhoDEQPJz2",
  "key2": "5JsvrGvcH9p7P17dgg7o5WaxiWTWgbq4mpwXUXEz1zAmshZZpaZJPh98AiSEtxDWahMxycq59agTkWFWxmWYPcDj",
  "key3": "FZTbBR24qeUGnFtjux4eamFS6tvZKWwjkBQhd7mxVwex6GpQtnc5mh1R1oFQs3AZyKAmiAFEAxN3DjWaTwQPkSD",
  "key4": "3A89E9dt57sTugsoqugrRS9HD4BQGrzqBRBhXt9V1yzzsskoZcaEP5J9XCHp2wHnKTviMBjD6SdesDdnsCL8YVLL",
  "key5": "3UeJGvSLBmzSRXPwxdhhNbV5JV2BHrAExebS9TAEw2mUMqUvuyVLNsAe5QcHfq9N9xoh78riNGhumLwtREuAvW9E",
  "key6": "62qwDJAwn5ugVwCfp6SMKnH49AKbdT7qNYfcWH6CbUJyBVSUUcKoLiKvZwCwNJmsVWk7uHL2YyW2dVdzpz5HUZ8H",
  "key7": "EnXkEceQAHuL2Nd28758xKmH5qZZVskSDU7ZrQTWTBrThenTkGH2DSSHHToxDu4u9p6sSYCJQeHrJC5JrSAVKx7",
  "key8": "3AAB61PobufATzpkbbNmpwiwpNcFg2RDK66QM7uYhyJsY5yBJcVEWhEFwyLhNXpzAD8gjAjj56ijjoQ68ypbj29G",
  "key9": "4jYb46oZZS9SAs9Wtzg7UfNEXq9k3FQsR31muD1KVrZMqeoShkUyaoUHB2N7MxFV3KjTx1VLNNBVxbWZbu2N2Li6",
  "key10": "5JwijA5AEggxpunt93q4RmWeifdmDaB7p48bGHaK6dFtXtbj7Nn3tzpyg2yAbg7rTdyiBqv91EnaZYMQZ3o2xYmx",
  "key11": "2CxmNUj3F2S8CxWffXRsrUDTyvWmxdQS79Cn7xmH2hkXppUr9aEhkSdV9KGsXPGgL6CVNNY9xAJ3wVfK8M5rJAtm",
  "key12": "2FFta3hBRi6KqNJbGfHXACn85CTkTvHsyHHPfG6ejEtmPBqTKET2kAJBgXhQE9XRzURQRX6CVhAnNZGvoZjG3cZi",
  "key13": "5zopogAkHFvMuGSkkhiuLAE7XCRipFTNcJZmi1UtqmpHqDYywPmgTeKvdZ23GVcrFqHPVbSkvieYsuxGBGMPUHMt",
  "key14": "2MYTjGvy7wsrpqNmtxJQPRu7E1yBghPWNCz4ZPqKrxog6z7XKuVqt2knpDvnCdBBbLcpc2k6ejWG5EYrDHCDQAei",
  "key15": "CYqyKG8xqyhGmX2ETt2mG8xBaiMwMNThko9yE3TiiQx2ZbAwqnTJBLxbjsxuUSqrXvQpKixHR2CDZJFuGBfpoBN",
  "key16": "3Uxq5ZLEUCc49qfScDHhW8kqw3YH6Gup9hg5UsKiPBYedTA4DSbWF6R68og8ajWcqTgTBjhFN833i357RmwT4K4Y",
  "key17": "SNctB8Mdqyq4zRf2nDcwiS8buAfPvZoEzCjHpq9dHjbuQWWqF9Lyaj9JRD1aD9PKW7mTzJ6GL2sbusEF699Hb9b",
  "key18": "3UX7Mi3hSh6Po9bBpmqTC7xNpvdcEGA5j3FGmq7k6eCsqZPKgVHm4Ayrs4zi4jFvBCE6hEK4KKFCuLzxzWuL2U8z",
  "key19": "3Q86Mq58uQd1yJc92f9QactMbWXHS2sBWKB48mLkN7M164ozupV3LTYevK7FnedHFfJhbSiiXMxe1ZyyS8KsHk7b",
  "key20": "3h46HiS68G352nuqZUJ7E4TGgQyF46YJFergfNcuKuJkHn3TkzyHdrpsrsXYSFVJETCaZZVmGw8HwPLRFw1WbA6g",
  "key21": "2PSBptt6Jxr53PscWhiFLeRQkeasewfqFeWonGXBchab3TSQNJHzx377qywavkRbdWKnro1opsC45nxncxgnWHPq",
  "key22": "5bX2HfphajwBwTcE29VruFnxFW2cFcunUAvHeeuycyrj6eTSyzCbxdUncL9nB2zkakAMzzFLWUpFJcZZrA8ywtk8",
  "key23": "3ppM3z3oqE5m1m8Uam41gMG4JwUpcB4zAqFTwiU3AfHUE4PdAycjAU3Aft8rtpAtZREkykEfYZUnb7xFQfupN8Tw",
  "key24": "5XAP82XGBhAb4rE5C1MpBmnDaa2nZxPv6Kp7vxBvPAcR1kGMLKxV1b2qNrBYcA8bReZhkMpyfT8ZXiGeEri7hLct",
  "key25": "3ocuwziRNNJu8HG83b5wXa4pk2pjkCA2QKvtyfVP2cpf2kqDkfPJ7QHbLoCiVmu11z3o9itCkiqf6PqC3MpTujjW",
  "key26": "3cVAjr6J9Fbk5ubWrxCzVARrQoF2vZKRvdLFo2Z5pyReGvdTu7F11yQqsiwX3hmbdn1ijMHwhcc51b6uga3kcLvU",
  "key27": "4fju6vj8gcdnQK6hJbp5K5PeQtvavirBymNsR95J33hPqrNwdBSnQXHZZxSXSzdTFN88dWea9YCEASwY5qVLMfpY",
  "key28": "4W1aorohbTaznRiVTfQH5SyKoXAX9vXYquyyFY7x6q4XZe5tq2AyiAjVNNdmpijjYK5zHu44jU5b1mwLyXAERRq6",
  "key29": "5njEQpm98neHm5wNL4bzUi9qsMSgDymxGHYDcprZPov4Em7cxe2gqK67WAx9oKRexdL5sNmXZD7uDbpR9J6HmqDf",
  "key30": "5GVbCYjBnXAK4Dg3TPyXvhrTJfacVRFmbdsW58sB161ov1rk2xUGWJDtbPntjboDQChWybb7ddxGmsTMs66PcvPB",
  "key31": "Qzov7YUH1PwUHc25cVxwikKgteWSLotg2umim9aXXrXQpFR4Pq3q5XTdbnx8TTNUtQcCPGRaj47MrbkuxLhFB2A",
  "key32": "Lwvv9wAzsURXY95RMma6cygrferat5bsLy3p8QsULetGKCdVdDrFXfRaiYfLs5Z2XEJWdt9dW23vm4Fnyi7x4ye",
  "key33": "3UrUvSTAZsBsMH6uEsNdDiU592c9EnLYEVnXxgf4obobWob6TFxi5CggUSoy5KTY9BfYQHsjGkE2KrCNPGCjoHG7",
  "key34": "3wT61AQzF2WD7NQkHGvXCGEd9nGqGtskp1AG7J34hrPorPd73VMj9L3GvLxT8BhNN8pT1RrB3uUuzyV6eWXwmmSf",
  "key35": "67E7xjNPybw1yKFNV4j49f7XrUnCL4t3ShPqvXAapTwpAo4vXAUTHUH6HnhxLyzbg2yZCMHSsjeEGnAeEaQmrQEa",
  "key36": "ePTWHT6atER3wEfgBbd3pjgjKobyWAqSoidGKcV6gTdBhGTra4WuckArmekhJ2GEgz2YGDH8bJiXTbLkYo4BHXx",
  "key37": "DvR4oXvP5Ufi9oXDkkRyizdJzp238XRaGvHrs1dWc6BpTiuByM8VbGRrAMvvztymza7APCxDvZLJ2L4vXkcqqgu",
  "key38": "2jQqPCkkXhxADJxftVvmZvZytwgjcMtCej8Md66FTKYcfi6QRTEMMF5ydquNpaGhHNxHw9bVh54cZjoCrS8USWbP",
  "key39": "4bu1k68bLSWorGkSJhMbnLEsufKJiUiHP39msGV7ZmyDWXcGNaVHEkLVb7XUQxqqRFEYYpAthkbuNRKSbPpbskiq",
  "key40": "297Bce58JsCHzagTMNeNyP8J2BbzQSpSMdas1vyzYnBxbXbM8Djs8TXLsejmFb9NRmWysbYjg1F2qAnSfVGRGms5",
  "key41": "3QaezEKF6ipupTQZ7MveJmmpTrNEMBkP27G2ic4DtC2cF1MY98pQNkyHibFDx13ZBR2s9RGCKk9cy8UJQNwuZitH",
  "key42": "biVQoHoryti6cMx5CWsp7mwpfnjddR8sGmWKEUorijSKiF5uCPvkjMgKP4YVu5KdtKPY7MTEaWJA3qFe7eUZiGA",
  "key43": "4AP6k8UfDFRu7gdf5aTtgtE79XBH4AjsAY8uPBjPNBTSxov7bm8WvWf8TxjoANC69Vo5tcN7Xr4bXY1BPmawBN7c",
  "key44": "256ckky6hWZ2hGkMBiDVWxuE2bYqvRBXwVTUhcMfa6RpNA239hZ1khkfG2Gk3VjMj3irHBqJc5BTLDV6HAiW3F55",
  "key45": "5EvLZRqGPDHVQTDse1GUJ3tFSevBzQGwcfTQ3PoermLEsN6aKrV11eV4GqQ6BSHDLQrfsofhubXHqU1NSTCVanCa",
  "key46": "32gAFVU9ZThNPZ1PszbbBxxVKqMssJjuifhs321GQ6xRYHbREthg57skx35HHdHRz8W8Ft4EajF4U9oaBkgQ5ajc",
  "key47": "3dw5KedJuBqKcyCTvmHucGbRBdQvwf6rqLZqXRLhWDsUByESfST76oNiYPwaUss7uGFAuKztktoS6vydz6Su6KFn",
  "key48": "2X12dHsGn4RYKjybVnrsocxYnjStxqPSZvKcQ9CpW2UJzyS4AYJMu1GtVnhvjeuLs89DuhFeW6TYGAVB8oSuVjL5"
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
