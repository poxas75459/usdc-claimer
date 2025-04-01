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
    "3nLDg1X3gvoZEbvcTSRtvgaXnZVreCPxKG9iB7E4iBYRWJ8WMshAups8BYQp4sfhV8zxhVb7WKpFPgiLe6gYfQNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Dhr4zVjWuiHCY5FH2qTjDPofDwXgTwEY54rND6xfG6rUbt8uagJLvQ7oVnC3jUqGuNuctQmLajs5WUzToTBuqR",
  "key1": "4wWPx8LQkHVFj1ituhAhCbTEsFMUoZ18FGukrJS38AbvhrCAUstqMvPgxtNhFdBCmeMvhAKLUWK1dd2cJV2mmzUs",
  "key2": "5LNQm46tPt9SvgguPtPx3oXZ8boGqo7vKrng6oDq6azciWvq7ydN15LjAvkh6FLsMBj5PXVvqChyCePSiiV3Movh",
  "key3": "5fUZhQg9fG28i1TPLYdZkR96YhxbQ8yqFNb47wMaZmLQaq2qth9ofkwVEL8S3N3fC86kY7WfzDDc3Hcc5CeJrNSJ",
  "key4": "3YxnsyL9SKu7YoY9FuddhucKJgvdqThxa87Co1PQd4yf4Wd11dPNkC661oCH5Zy3fJz8BesoHKkza3tw3gKQuQjX",
  "key5": "5gNn5C6BZ5FpyuTCt9Myx4o5NuySkNqNSQY83PWxtT1Q4QTbCczRD8HQm62NhrmentDz3bVfAzymacFUZcPCA4dB",
  "key6": "2WDVDp9PUMer7MgPm68vW23XbHC3AJeZnovY468wU9eQx68wWW5xwFVqkxhNLYQkPWhmswaK7znSMR2WmhrXErPD",
  "key7": "3icfMtHrqyXeT78dw8ooVW4itZ1HqysRNGNgvd5bHoYsPVuBRaycU1z5tsmezJe1wBDzNGnDHhJ4LRo1TXbDaPEc",
  "key8": "4fVTyGzVNg5MdvYaC6o2cGzd3ueCyv6uqJtwNEFk17D8CjY4b1wEx4rdKqDvUZBp1V4BPnGVaxh6KVeDezkwECH",
  "key9": "3g64n6hmwy3Vcs3gWUz7eCgCdyLpUwXMqHmvv26PT5ZbEawSycnPy2gEJ5mE33vbgnquHAJEniveDCPKmBzYwKu2",
  "key10": "2A9rTuGXb2r3DyDNoXauXhataQZnD59yJqfB3PNqjzm9ARBS2LfuKakM2smV1Qskp8jvhJfgntaepJbCudHiC8XY",
  "key11": "2ud7TyGxtush9oNHy2SkmQijpEu3AxHzd3d6XsDhLj6nXJkXS1RHnBsfSQdxbinzJgsprdHxbg5VCeH8nJ72peoc",
  "key12": "3S88zqJ44T5ymfaeEVbscqZu3fdpAezzi12WLM4eicg9gXvbbathD1Lf3ULybWbWcFDJdWfije4EydVfG9dHKxuU",
  "key13": "56Uqhx57d7ZsVkeYAADS4qK8JRxsMEKZSiRLRHWacJR5xpaVsSG9p5KejAehXXB7ZLtdMJMWpbTRziFnnFzaAhEH",
  "key14": "nGew3dEQSHpgmLkeDbPV3LSQs5h7LPtr9RGbz2BLDBWaEeQsNi4huizJmvfXkFrWqA2ziSLcQExB79XHPixBksZ",
  "key15": "459cKM5rcQkhrBp3tAY7caHz4PgZQ4agZzU1MQb2offg5onRbzC247RysntU7Voe7tLUqQV4VH3JuaiLDufkuPKD",
  "key16": "4v7PaL8tqLik1FigTE562w9QLNkn4y6kgxkyGa8KaDgojB56MmBVgxdfUKdyjMZAJVqazkWwpdFdPA6aLFcQjyGC",
  "key17": "2W5xiy5PVsRHy6nMe4NuDNf5Xy5PD5r1qmGJkNKHiQVMUw64ZJNGyoEeTWQou24C6b1LpXoQvRSbsieyMX6rGUqy",
  "key18": "3aN5Xwf92BQW8NxoJnSySDwocbq23hV3JV3JkjFtGHsHmoBfRw1x5GCiKLc4q4vJoEZv5Dx9hoVZvX9H3pHZoJvg",
  "key19": "67HmSS36uJS3aceeKUnuTiT3bthNVthxnZUCRTiFMnSffPhLo4zNjHdQyvYNT1s7cjuk3qKiZy8iFphnDDzN4iJJ",
  "key20": "2vayPKDPNHci3hn9jinJ9EF9m6NDcpK7k6Ap4RGmQaFQC8R5sXcjoFan8VXioM6ogfR2qwrmfeH3MExUpq8tCkiy",
  "key21": "ML6vXLmPaWvYwGJ3oGBYfBhyonNo4vhkWcstxfCSWBWUeHipKX5cLnXewbUtpEu6cHuQTrXxhgaJXiTtmEAsyMV",
  "key22": "4dSryysnB8AKHysj26tdhks7ytfeKwmsbAdKsNzRrKZ26Se9eq8GWXxL2wxvqZpzstxMmA8criak4uqBTiThkQJQ",
  "key23": "5gUWu16u7w5KKCkH4oWF8t9sHyAQ12JM4DEv5kgvbfbaDRH7qD3o4KVAqy87Zb1oM1hMSZZrzQQ4psqDoWBMeTba",
  "key24": "qXfHZDoqtsJn5aCnKLRaasyHeWRHrodA7KvgTRLeDTLyFfSsynv9wCDGqWNZTxvhTQcv2QPWadaudEQysqg4qhW",
  "key25": "5GU4BJjtuGDiJndjFiQ7L1U1vYFsFGvdwjKnVDsKYKX4cNFmCidq13tk16tyxgSBBiSwmMnZ6yMF5roS6hv7rtZo",
  "key26": "52NaZFufx77eQdtzaQ4aBfRmXpFL2qyiXVkhPTLnnbdhNFg3JT21ebgXNC12srBpBH7BrS34XwcTTYo3bWdkRotD",
  "key27": "3Ujs6btjdCrJpuZFN4QNXK1Q6ibL5sQ4txYuGSB8L4cH9YBHGqjN67wAUN63GtxFP5GusWHsMUougd4M4Efs2rDR",
  "key28": "4TgRUebRfM5C8NR2NNVkGNrAM6FwBygajsocMqEANGj3AvziSqKGrmXqovwfTRi6kcmPVPyqv1pU9umDpmffY8my",
  "key29": "3SpwJ6trU28BxjQdt7pRK6MSWMCxabmFBrf2Jd7gQsirErcjSUuNGFV6sCUiumQy3kEP3q73ouoBxcQNfiD1LAm7",
  "key30": "4hm7Ah5Jq4koj2BCd9bin3ZudLEnKf7T2ZiUX7XWoeQbpNA35Kr4wmcuRRSDYsAAQayPTXS3S25ggUW2SNraa2Wm",
  "key31": "4SUUKbyJj2ixpPo5g1nd2sM91HL8iqQBfYWpdPaJ8ECn3zCvGJkYRsnze6YREPMCzsErZhD5wUXG7qxdHFR9jnX9",
  "key32": "5mVzzAeXnyZ83S91J6ntvET5d2WsN1tP6ZB2CyRQSZeXyfj6FQBrnr2cWg8PoEiF2DYCUsQUULpc1oNNeR9Pd4U3",
  "key33": "4kwYRvp8Hw1ZqVKPVYoUrcLsQ3KrDE2c9tcf6ws6Jq2PcgkqKY27rXQYNZJGSxoHBggXkb7wZV4cY6vWBt36i2oG",
  "key34": "RVTABGh4dp9KSeuSfk3TpXaBiSMjTZ9eo8Z2CdMGrfjNKeEpRp64C8LTZPXemF5kNYZqxpK81ry9nAiVzNZQduF",
  "key35": "3BCevBjy3r4mheUrwaZ3cMjzdnBvpUiMnzYABc7Y9tD7vjmFjzg7YfBD1ygPQsr6MvRmz63DmwGhawL1Ln8QA5rY",
  "key36": "5VhXt8NsaZhs4z3kzXGTeJ1PpeKi3pTcknT6iMgPaeGe1B9dVsfSGaktiV4bVVu4ZQoaQ6ezmMsFPdgrpgn2sUGn",
  "key37": "2EGhvFvvmdpBgWD8a5B9FTM2oVF8G8oN61ZkKawmbchdrx2GKDaeCpFLmnPefRJZquhFoL6n8LEEEVFveWxDRGx8",
  "key38": "4j4SbUs3jSRUatfJ7YA36CsHSnYXU2iz42woBDPrdkfWpLW93jzXeEDJZzTpfty1vkrjyAFEAmEhCbqVxfrmvsoh",
  "key39": "5vUdPjRXUn1VcRHxhVmfgp4AFHbYXdNAtBWhmeiVTkLpnc9qN17hFSNqh4XgNHpYngG1CSPLmTkLW4Z1G17VwR5N",
  "key40": "5VoNR9AcLnY7fmy9xgDaZL1skzzSamQKRKB9nEyBNwWb282Pasu8p9NyEMQgd7u7GV7nJSSLHPE2uJ8cxJCK9DHn",
  "key41": "2ntgydDnbJ2N4zyXgBYgvdZwnWzJ3CfPmen2GU8UUrCbaFysWbFxhn82bvGTum7TPJKqWt4sepyWio85oQs3ti9q",
  "key42": "4qvB8RV2qYRR67GLCwGR4ULm9RodEQAU2qta93HPzLg5dVYihcRKuiBhTkJFSnA92yusK97kzgX83NZFhXR9a9Rp",
  "key43": "42uPXeUvFoQjWkV6EZbHvMzAKDeohn2UDZEGr9kci7TPzqfyBXAekwVo9fm5QGwvrZr9ozB3JASm2WPG6k6iG67A",
  "key44": "5YbZcFckfrVfuAvcdL52XwbXUTzH9JFJEpNGPL8r22eXVKpQb9E5e7sxziJZaijNvHAKLNv4gA421uRz2cb5i1tv",
  "key45": "3DMYRK6NDr5duhSbhqbkkRxYJZj6CyF1WYyiHoXEErtraLLPmyZrHykNQGeyuiARVT9ffu4TnngTzyFLYE5nouco",
  "key46": "aLX1n5D2vDjdbxxch88u5YW7NPSs8wU6TSTv21jATp7kHU58XKs7KVX2SRQ4TBZdtbBUzS24CwfE5VBAjrYQS7V",
  "key47": "28JNyLzRNTHrJo5qVk9Xmy5bbWdx3X24FMLyQH8QMUzDJqta1gmrm8JCGQY6ByzVHgMpbephoWSKuoMyTvaxJaJs",
  "key48": "3jad5BVDj12u2ac2TTX5aGjGvs1vNNaXra85EMCpr35UGLtWoNBfFweZhMXkacKJJog6nk4FhRXibswik5D2Crq2"
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
