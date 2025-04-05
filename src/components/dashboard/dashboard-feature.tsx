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
    "v4agpaDcCRG8aZ5Nxrob7URfJHeM3R6bSMAwhMQhGpgJ5rTTwofBzEfEpkaEN36QxYDoHjHvg3ffytMtRiznUW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCUCyAKpkW2qNPpvBxp2B2X6QrQmKwVDoKEs6G8n8u7wRPsnX6ZRoPKfGRdKSgNkviRcYX6UAJjG81EfQRLhsfj",
  "key1": "4N1nyZkpP1Cjd3qjjSjp4unkpSkiXkXQNHbJsi9PqmdaukSvrdtQNenb4ZryzMu8UdFB1h1RBSKRT4MVUX3m3ZCR",
  "key2": "2oA3j45Lk76g4W5a69YAhj6SHTWR5omz2gmcpQ8NgUVR2bqZZ4bfVwf1S4HTVGF82HUWQzFMft1JS73JrdsEFGKV",
  "key3": "42vgciju6oEDsWWDSdixhupdQF7BFddH6bZRPg6Tk5ksQyMCKegBAcPfQHictWuXihqenzjcLoxfCUNbQPsTVQxE",
  "key4": "27Qy2EUmwAP7DKx8dqZ1mTHXVVCvLcXRThr9sq6GyKfunDcYWEtf74kMVZaW3sso3UMLPmuF2oERqFNcSsg4qjd6",
  "key5": "5pEVBAxC2J1b2PoVafUkt6s3fp4JuLx1B5Nu7mX3j7iNDv1p4zkU36qwp6pkecvPL2GKsqYX91Wx2RNqx6AYGVVR",
  "key6": "5g6KaTYYbn39H7mmVJePqp37iYsFDLQenmtiFT6nwR48nCR8QocgGxycjQNftrMi8L7oahohhL96ZSBv5Aqk8CNp",
  "key7": "3FBMuhzjm3GtkfoesxTbHzebEp8RGPtbh17pTHp79U8YCFqNt1Ff5YiPSuYMLr4U1stLC1crD66kvoDLvikaiHJm",
  "key8": "4FRJRQxaqpT5Zg9xn3BM39if4ayiWZfr2sEUhen9yQcXtkEw2UQojFfMyweFuqo1iEoqUiHGfEASY5iPu5YgQSKN",
  "key9": "31Y4WSvsGpocfNNWvSEreW5nGosDCj6u4n8h3G2DfftyXRrno5Fg1M4PwA7ELkJDpayCpwbD2gHk1m2MVQSCge8e",
  "key10": "36LhMBuB9w8DSWGsHaRHwEwFkhmWpF1TZcAYTFLRPPazp7EyjEd6Lm6uZCGJ2LatcxNbW9xnLSKNGh3X7vmvAvZB",
  "key11": "22HVPZsLWumd8DUxxDzqQGWf134RFGUL4VprG54GXmNjfQtii9GWPKMbEKKo8hBmthPZLiHqxSDRrKAyN8t7g5zU",
  "key12": "5NPC5p2xuZwxQTBdWfELp8ipxqGgdedK7vRj5U2Cvy267YkAdYrhyLpccDnMf1szFkkWsgVeftmo32tvTEkbQPmh",
  "key13": "3BFy4gnTpmadMa7CfG2kujociK4UqWSeTG6X95hJfPVf8PoHMzvynqrhWRTemwNZSLkjk5gPL62k6CsZx6pXaFjc",
  "key14": "5FVyYihUWQYcugzStx52ciJraxpmW2e9A9HhxN1V97D9PkwfCSFcaxBK9rQXDDhLMzPRuXG6k8bkL9Rp2oaBSPmQ",
  "key15": "qneBwZhhzu9ju6CmPE7RvpVYpXxEauhGzZ6wXESMgFiugwuy1SfTqnXJkhPmxctyVs9fPeud8yQqRx8J2C9kNaS",
  "key16": "3LteJe5YioQfK8CuEP8M8fQHd2fppnU4e3YqN7rwEZZSdwBAmGTZYkhTmSZiETdWPCPueKqF1ck4yjgjj1vMKsDZ",
  "key17": "5YQHPmRSrLdrATeSUBGPmBtE3UiaLu2X6BCbm5GrRBXX9AyHikUccS6WPKjcWd34pzgo9rXvVe4wXDfJ9tr5aJM2",
  "key18": "2SMf7BHDUtXAtYTod2CLBCAEnXzzp7jhN7yEjYejZXZpsZsfwUufzLABx5cHJSb7NRszNUnfd4fjBsPbNFSw2Za4",
  "key19": "5TngAgtwUd9xY1sz8WxzyPKCmKtBj1LH5zz3h4Thfdc9QCqXXotzzyFauHGcmaLEqHDymstUNMe55PMzXAeFmJWK",
  "key20": "NkRKvjAhGxJU4gJuiHC24WiGxUMP1Mh7BbdiKLfbMEdLC9oiBKNCVToQbBwhNLKq4M5gx5e1aLyfrCZ7FDqp4CL",
  "key21": "4sJ4SGtNE41Dqvw4f4Cuo5rzgXWcFS2NCirtoGh8GEs1Phc6qfvjXYiNUGSPE8FVrkdEyi35FUeWUh4BXmozFXoH",
  "key22": "3LDB3KgoBDGuvEcAThQWBgRiZxZPR3QrxMXUzrBESB6xZe51ns4sLnMnw6P3ifx2ziLVytuTqHQ1oinB5kfg4B9x",
  "key23": "XcwptJsygvPH4C3hmdcdnnN1d899JVE3agziiHqqBCwKDzohcFXCbEJ2Hye5JHYmQ84JmvKri6MTDsExQDpiAGP",
  "key24": "4Lo55jCcqHb133r1nj1G6D8Y13FgXYZYPAnJnoJ912R3Cd6RZtQhpSahomsoVUofps5zSj5sgbM1WBJqL5noaaas",
  "key25": "zQYsS8LaAZX1DohjfgpUhhWtEczcJ5CK9PccVKKRgsvH23nHVn956wKJJ3Xoxc9D81WhjiDaFGnSxbVL1A4p3iJ",
  "key26": "oAwmXvWtTzeX6RkXjKr7jzab9KRjHUM2goaqAYFkNDvNTjQh5siJxsba23B7hHha4g1KRuWYcfXjdDUq6qdS2G1",
  "key27": "21RqfFRMNR5TnsksB2QkuA1YBVNCUBjUGa3xhZXA35zUzx7CdxaYd2rYjnfuSyZ8gMo4wms2scSSNRbugbDCeVPQ",
  "key28": "4Kz6259XouMnWF3VoreffWuqvpP26KMtgHhFgsr1zLkDWxoYnYCbPk65BfEUnsANvTX3no4Ay6RqzEwKixkJj8GQ",
  "key29": "2kpojgmrYyn2RiuHnGmEUyywARRvogZZ21do5CccZZHQBMtuNL69j1f2xhsMs1RQh75UzTNV5jS2SnU7YTik3fjJ",
  "key30": "4zKfdA7BJifsZfuVVa3BJURF3YaVxjoSXFkZC8tz31u3ys341A4j4TV3kzZYTgRdo7WCuoMr9zgDZtCeF7WZNMQ8",
  "key31": "xMfTGqNfb4iyBeZkWo5kpccKyJn5VPPxA8iPNhkxo8r9PLv5HEyvuaV9KSUk46vdp9CUzzJJGTVmASP5xGzfqgf",
  "key32": "3FXWKRDoAz5j6TdB3jzWCGbNuz3p1bNYkVsbTnG2jcPKgGxncoXGEBc9VEYbmzVnSb9VFUM6A13WndBWiPNRU9sP",
  "key33": "2mQk3hGhEywJJyXWos14U5G9mhnTYKMmhSBw8di2UNZYp46fqe4KTxXNkvFhTWowmk4WH1UHgm9YKh8FhdirpgUC",
  "key34": "2cR3EDCrRtkbSSTDprxaaMcsnxR6Z92LDZrh2kkwPFZSxccY32A5zbQGyWHrk85QK4Jwm7hWqorZbVxRxkV1GVNN",
  "key35": "Vn1ZVqHBPWngLKcFr5QY4yeuZsVFBhmFrEHs1brDBZwsbp2PDdvX2sE21i9fo4ExcWnJDM4aDpqzYP85sPR9MdV",
  "key36": "nKuPi8fxi6Mopz3iPurPvGufG32M8TSLNS4GmBjthhoasWg8FPLDDMMmXF4TTi478BTXzwidGoh4e7jcyNfqWSk",
  "key37": "3fGB5X1KD6n6WLr7zHaaWzurvSC1essjfx6kmPvXnidSHLfdg1RZqVfKZUfvYFDym5r4oKE76iT8jeG48hsib7YX",
  "key38": "4iTZdEzED9BX3FLso6koejXFWqBC3vXLKBPVWNFHWsc2nyhu9pSsgNPagijtdp6wHmGUGhjN3uGv3WhESCFsrNuq",
  "key39": "4xbiTbjUuWvBvkXbfXn1qVvMT1PpW7eLRNN9FNVBBvx5PK3HMDc5iGviupVnu4R6bw1afzQ8Y58S98bDgs9kQzbV",
  "key40": "5t6wPYHRVsvdtP2sM3M6GeNQf4yqyvxewnmc2HDkKLvQwHrCbpkFmPYgDE8m52Aa7k2qGgqTv6WJwp3oetTKLGKL",
  "key41": "5Q2jmxpeeJQXWWpW8he8Z166eWMnu8okFU1MLHHTLkhd9QoMTA5ngAyB2HHLzJcQA2Ksi8zpgbaKuAMqLeGQXx63",
  "key42": "ASExhifLkvafuxMby9uGE2DjEP8c6DfMXbcQwbpoR3mC9UAH2uY851m7BpvtDsrjAfK3mrJY3DvuXD37Hgp7gAG"
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
