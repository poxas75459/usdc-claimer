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
    "2rLooQhpSKh8tyw9sMCvCHdX1yHF21kiUKo5CMmpEPp7aYCr1ooJ4wDygjCwiQRsy5vfNFAuVo7wVGPMeJgvANjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qCxTFZNVWau36KSSmVCntYoGzgAWxE2PG7ihenj9ikR13bs278p5oaX5w8BZVGpz9R9XUFf3RAFBJ4J4ttt8Q54",
  "key1": "4ba11LgQ7zFmqfsHjKdGtUd4dCwXPbdgo9dgq1snCeNwctWNwEdN3tNgGQm8gAXBYZCFBmKLxx3i7qbiPQDLdtxA",
  "key2": "2xut9A8v99QedZxiiYSBLwdRUTrnYng96k793h1XUGFjV3cRw73qPRn7v6fb94AsaWw21AXmMizkajVg3nc9hBQg",
  "key3": "gUhB1BAKddi3fyfJv28GiRhFbF4bSGkoyQ33jua23NpTDrhqTDz6XWtaNxQdG5n8vgynxZzbfg77xQgNfs9uVUC",
  "key4": "4WfFDLB7bK2sxE6oW9h3UEcDP4hvxCgb3vJYHjrkfDhHmhbrsuiPSFdaruCreitCBTwKuyT9SC5tuUdsNLe4pJfh",
  "key5": "49KxWMABTadDYTKwMx5sJ26gigg1zNwCKLuBrfBG17CyZkD2DxV4vqykWE4K6E8BG1Jxytt9YgtoHrJoBVMNz77X",
  "key6": "asrN7pryyTYzwXW8frXXzs3M23DE33VcYbNK1msZRyxdpyimFnairkBPrjUhpDQj71VJqUTBNtVRShquS6RYEhB",
  "key7": "4LCHv4NWFukeYkmR26EgFLpyP4C18spKmoqhYM6okkfK9Krq9XZkTWrQHoAL79nHrSnu3QS7a1mN1wB6nkHh6UzH",
  "key8": "3Xac5AaEsQHgLBBHqkXEYKVEXsZ4f1VJ3TR3tpZqXYdvbmWMDR8ZQbXHcHQkXDzDMpHdqdQDMqPGehxsSwvcXsXq",
  "key9": "4ArSGpqeZF2JWEWaiSy5xSheUKsvehrTMoogq6y2q5xjnXuPGMjL9KM9yGAMRcL7uqYevYHJkmkR3ykHo53LNZnE",
  "key10": "4d1FyQqzQBZS1Fh5o2fs3Hj8dkuSDThgGx36AiudhWM9hkJw5JgTi4Xb4weBU6hqrecA3XR1mhuXSjThy3X7ibxZ",
  "key11": "2jYSk58MC7UJYX9EhGJUs7BLfcCURTiMfVbRiv9sHByeU5QfipsfpPDFWaCN2cz2BEACxCZgyY9joceoAYNnBosW",
  "key12": "3Zc1G8j58xRuUN896hFsPMGvKAo1argUWsq2tLzYCagiKUco8aGUXQftEdDzRSBKv1kamksBeRqLvgsMTQPtTs4T",
  "key13": "2SuLimi4CLc9wwsiQhLcGZK5MVbfxcHnhFytPUk6a7pjkh7PXWRuiTmDnsNwchvhr8vKVJaKxojwpKTP21jbhzoK",
  "key14": "2CjRf5S9VoS62vPjv5neQUAden2kZPXoQFuCAAajHbnWyLrVgCFobgptZkLBuo2SaNDY3o5uX9dajgGBWWyy48P7",
  "key15": "3FnCKDKN7WxD6xvxnaMiFSshzHqyBrcRUtq4HDEu2sWRDU3eKDqDZo2pQLPFzhyhXhN2tPcQ2U5MK5KyoGh7gCMe",
  "key16": "4to7Avd2gtUdU3QGQbuwQUNpxtnRvcksHgB2pdb1SaFgijkJ7xXbphwRgG7tsAbpRLTSm9z9Mg2TK6JpAqyw6jcE",
  "key17": "37TGXv7Uq6S5ib1C5ChRuRRCub3v7hEEt5uUu6cpCYzy1KFwZZDU3yRfJ2DXodzPKf6Ms6QKWbLV9YLvbM9CCCwx",
  "key18": "3sBXSiBbzDPRSjbTsCD2ZaYtowuBPR6MhQvuRaFQTxrRjnrG8uQZdqsCAnp9bFdzEvmBTJR8tuR2TTifuGSgg3BC",
  "key19": "41RNDvUSexQCGYG2R6QLEg5kUNshTMKqToJDpNgLJ9m4uhZQd6GRasyakQmpHkyHuk3czHiby29GqH5jPVUMrgHp",
  "key20": "4HwZRYvi4fxshG6fzsvC1Z2qNvGkXN7BorG998oqrG7PbiCUEqYFpLtCaPFA9jNMV32oPQs9MvFcQyxakvVTrXtT",
  "key21": "5bNWPcwbtHSub9S2rRYk5buQsHDL52nCMVoUVJAZR6oJCzPc24m6VYyKMJcAAUVkjUU1GgcujR8myyufxj4GiEkD",
  "key22": "3ai4ou2aqDUtJsPDha7k7aCCDWea23BmNZX7vZ48Yez1ehJrAmadkNr6t7JoBPNqmNeSALFVCqoc8iDBhasigJtx",
  "key23": "r2RYbJw5qkazE1TqV5H3M4KLusWiqRQE9rBXkQ9zw9pPMbLR4YYNMvAV6aQDgkKFtX8wvj31YVtrX3AbTnfK1UK",
  "key24": "64CztC7it1hBvhNUdWA4Bmkt8QoWrKJ8KXq1VJZ3dNGdTKQBzQL4UVrQkCAr6UhGAkQ72oXxs2V6kpy8JojZbaEF",
  "key25": "oxwuF7YeWCFN4Kt4WJwRToLmctty38b6GV37FWQqWNQ3gfewS5bivgKvGRkbdAtiwWwA3tHVNKoYfPNevwBhnJk",
  "key26": "LcfJK1ZquvGU1FeoDM2vaacQcdSAheuaEqLqRThyyXJdqAWKTDsvXxuFnAXJTAKXf9s2AoYLoRDXgYxovkJWWKr",
  "key27": "4WyEkgtx34Eo4qhsE2ifqBBDDvCcFTR9NGnp1tWDcoVeUitF6tkuoizqrGRyrYco4qG4e7yeKHQuV6jDJos8FR6",
  "key28": "5Tnhr6CEx6ybCn3Woj1UMoCTYj6ZVn2nZRGwBGmamsSeXd6BX8HX3sGXaAJPB8mkEg2RxLtAJrJAfWUTt65UGe54",
  "key29": "4VNwJKmtTbXWJcxSYktiTTviPWZvxczYNUFZ6QA2ie6pZtjFmckqPnNh47euEVhgUQQDm8ZdEKACYQsA3Q7CeMVG",
  "key30": "3nyAPJ4Avyz2ahZWqGU2DUmeXXyXYVbV98ZNrGtMo8fQevCkAKHRqJu6iBYLnR21TYXxPo6NGvVwPkjTRMMihYaL",
  "key31": "3ZjFX1YGeDEayzYWcC381N4B7dey2kV9oBVRbrnmmqPuhjt1qaeC9k4FPi29NycBCbyZG3WeNsbZBmPvBPBtJnXn",
  "key32": "3KpMdXEQHmd7kuEgMYqeYn6g2f737NU7taYSJC8yJW7AebcFDam9ciSxQpDASnywJSAjrzgnEpW6VtWuNkG3wCZJ",
  "key33": "9mG5EAXZRh2etob9ztPHANpGGzgdQETSkTRbar9FU6Uv19uZhfqdmSfmp5u3fu6MZA253c1ebZnJhLbTjKvGmiP",
  "key34": "5pgZxmR6BNCtiQEarQXE1J1ZTShTFn9j7MiRd3zoWCTTyMyK4SYeRWoqRZKJaYhYGX3ktDwsZYQL2eYmEP2q14PF",
  "key35": "28pU9Af2bZjheH5fsgEsu23vuhrncX3MjuuAMEdGeE13BrSp77RYD8mtfBQ9ecCcfgSRffAZ6B1VTGoyLx5B3JpL",
  "key36": "4FY4K9p6fgVfcJUtqgEmDqjpQNQ2MgEMzTtGu8iRWr8yTpdRGHEtmNUxCiFhAeBxgwzHKaAHE1GAUEGmNUx2nbZm",
  "key37": "Ddd8EumZvjQU1zyxji1ry92sm9F4S738Pt7UQLzPSjaD2soAFVhzyGN5RDgrgTntCU9K7heKn9b74fJrHBPpsLH",
  "key38": "EvDp99yfU4bMECMUY3njmjDQQHaiRjaAPGKCgi4t61jxnGkxShCuM1Wh3tsaABUtErPVsFcMWcbnZxX6fAuR8hS",
  "key39": "42vY4BbKUGqagg8c8LofMm9fhwWdHw4AUf4ugakgKZieu1es6K4sxcTqsYYSbPjnqct95n2qVgSEkjYFREhCpkij",
  "key40": "5xDJmYPa6KzRjRhHB11MjP1prdwQCV3jKw5PcUFYtzKpw9sA7d6jVdmrEAJ3xfJz4Tc8S7AkmrHAAZNxAbq6wiji",
  "key41": "5LoThmHK8ACEMs7jBfgdpas6CUiQjvidUhmNWcLttL8bMUaqJ7zuXhaSvY7p19DEgP7PLU2fr1E37U9W3jKod5rs",
  "key42": "2yRLktoTZgmxM9VpDyGcnXewMbfQSkPNvS7DJvHPmeW8UZUzeuYVv2W3EPnQWHB1Rq1pZWQw3GsKGddQtQ442tuF",
  "key43": "3AmSCWT9oi3fYiHeqKvvMFegKWibN2dzPQMBqrMLALbm4GKfjDhJ8pk9ARqoURevAteyKRBZ63RB4N8bMukssRho",
  "key44": "5scMx6rgdA8FtoRMqzRdsqzLr5yohNmP8EuhupKsFkCZwt2y4EmmD4pV79BERCMsvrZqhhWpx16YKUemJxCsFfMB",
  "key45": "4KaNZCyFSTDpfyXcwVYCudf3wJfvtyKN65zEKVn4SpB61hRQzs28anJHPTKv4Eh8kKY2sQUpYwnaWC81jk7rDsFZ",
  "key46": "5n1pZpnoWSDyKYuaywi6J5oNJbLQNk5GtWnKjt5doHdmtZiiz3MrBMLYgs7iw6LNmHnpAgaUZKoVuj8RCCjuVS95"
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
