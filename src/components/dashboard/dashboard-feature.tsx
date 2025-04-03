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
    "fh6uWUSnfpZXQiBLVf2CVvKx4SSNe5UE5fLX5ThHrVek39MDNMwAxmi9ChqM1X7mKzjifDEL1GEmAk3JaLAFhNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3FeHZNioaNrqiR3EDP5LaEGVkf4FVUJEwEhVbHhHTrZSU1wyhhxmDaS39ntiTNLCQUNoiGWyuZJnSe9kwPgKsq",
  "key1": "DT5Mdv1EDuLxEMcpy4p6f7xu2VrUGBrrrK6qCRUtPFuVFtPU2YhcjJTts6YbonfvoR1zpxDnYL1e5THLpkJQUuc",
  "key2": "31scKPLzbuJS3tgkruNFyCZ4cHdNy9NMpU3Y1DyBiruZ6kosz5yBjN3eYuNAXQn5mpgjLHupVQGMBryDTtFRtq3Y",
  "key3": "3BdtBwwh1B9ETxYK1GjxWBM63GykecHWTngUa383VYB6YRaGR56JxbyLDEThYhSFALvSbNS2PzLGz5s3gNf8r62S",
  "key4": "2qw92GKB4a343X1oyRa6mk1L3qQQ4QYwmxh3qk6wPpzPw5cPTJpfgKdcqR3hbpvyspErAFBa8m7ZEaPsNzw3Cfo",
  "key5": "1ravACbB1drdntDpEQMaCtaF3bFCyJtCAHpeGACLvDAgNUUngnzihTgrvW2Bv57LporPTCeBpU9E7w8ZV1P8kmm",
  "key6": "3hGisM8UYWecfhHtWnKrntTrtSC1AsuBQuyuecZVPQywnUYgU13Kf7n8HkKroZqVmSKTtkv2bh3wxjkpQQTKG1aC",
  "key7": "tMsvoVb2UhpVBLMPUcsWFXDURXFoDTdfWchD281FUwNLj9QuHdrAkmwQ5BpAFEj1SRdvyH6WHbK1W4qiukNRXTB",
  "key8": "2Ny3jQ9wbHueznZHSC6yZ1BxeBHQfLxSYinAMzm2XDZaUazPh8AAby8ZEBfY6hJjy3bGZALkETWkexqk4AV1vTn4",
  "key9": "318MBGx8P6baqxgxSj9G9e8LzMmfeM2RBvvWKveVqg6QY1VqVCQVtTVC7cMXqEH7pQMsU61UbwNDwRMzvRJFWHq3",
  "key10": "4se8Xnhhtu1PPMS4QkGzAzvfEdKuyJn2VryijT6bam8NKLDAacvvEXpDEx5TaXHtvABDidxghot1LVwQj4UZMbr9",
  "key11": "517qiLzrfcEPLjvnXKEj4ssFpJrtAVLBZtZ4TjEuvxmC7AuLxkQDs5ZqtTy6YAZCWDrtAJ2PnQNtvqrRQwo1NmpV",
  "key12": "2HgMbq5xX9JDTgXywJDikGRah5dBcSfVUxjuxwiwdgv4TQSehyE1CBQz3JNBaC5UQyCZzNHXX2y6Pdb5pfTDwgvh",
  "key13": "3zxrwadmsqkiDB1bbGXoZdT6PC8EuQGBNLPxdWkdSZaFLgnTAWKEu3fyy9vjhNdYU68kS9WdD6T5erDMF3hcFZ3y",
  "key14": "2S6LBUdK8uttNuduojUBaeLYP715sw2e1WZ5VMdkdkF4A6jQNzyCgURwgLL3HBntZjyg2UynegoJgpsjAPvcbZhf",
  "key15": "2FS3ZbFcze7ubcBw1gtZzn7rqFYZJRKYJwcshmLzCTGbkVD3NWBgxis6fCkZx67rbQAaZeoRePQWxFv915Zp5bSX",
  "key16": "5PZhGv4hJy3LA98TwkgT5xqcBwj3PDpWj2AttuWC6xdfiCBnJgYnUhhStimAfH4z9D69jECuF2VEznyRmbb6Dp7i",
  "key17": "5Tm9YLrFisv5sKT4TWkdKnRKcttcBJBgSeArdKTurKisBvkCyaXv9k8ye7GcWBECi2FY5e5yxBovusyewrJ8YKaS",
  "key18": "RwzgFJ1rFzJRoS6wxw5hWMo3vPBYR6XEPumeFdvnfLXgfQxAsLWJatW2iaTVV64DVCpn8CEzGZiWQtrnA9DdHyJ",
  "key19": "3zov8Hs5VyGmPFFXTBRcxEcsvEjSQaKCMapYKFN6QoVCaQH9NRoySfEwSr8VZuroQGMM3wybNinLgeTePJR4YCDf",
  "key20": "5sQYaG6TSFdfu4uHK9QkCFPBm14tim1fNUNCJRuYoNsMsn2DwKNNM5SxUjKp94RLWkjveLqGdwoihj2oWqhW4vgp",
  "key21": "3Lhw3rZRSBnzKwocS3Dpns9cuQNfrDMAyZ47h1XM2jJfW6n2s67V85nk9PBZYLg1HqfriU3jGiHcgxXMHXHHq99W",
  "key22": "2WGJrkFEjpZTL6HC8eEjNk4BFLov5xGtFGAarzDLLdMF19BUdhsU26h2j4rqWvtfyhV5tHLhjz9UT6R5WgP8PkVT",
  "key23": "4HHXQRSNihopVhQhLuTFfYiHkY7Y892N51Vp5etBfeNSxeuwBDrKG7VufvvPUGGz6SB4NDegKb3dJwK1GeZPBEg4",
  "key24": "3nC4p3CjYJHhiSjsWj7uUFuQXBpYDq9kv63xFVhdjKcgEmUsNsYNhnKkPnYDgKzRXXiGGmxpAEdmMnmsuDUgZN6w",
  "key25": "2MUCiGszoJe4NbkWGurDh9Pt1fHDiVbNVbA8ASg7Q78XmZFp7F2PwCB9h3Z3QPNyKVqVeeSnbfdaXHgcXZjek9Y6",
  "key26": "2D7wktGtKN7vefxkTA3T6x7NZNaU1tQkieUfLvtyiSwU23trj6YxZgq3XnRVYL4HGrHytXHjjmYebxFdUq4FPDND",
  "key27": "4HNwpcGG33a8w6JqnzWKnMhxYqs2Af9NLE1cH3KExwVmqvkxTm4a1s7JdrmJ85SjudxzscNMvRKMCtoXZecSWMqF",
  "key28": "5K1oaNtV4KMpve6CVZ4vvXexJj2BTaos27qSr2fRw21G5SZ7S5EoNoQjpWUkYqcKJSvrwtcp1F9s6RenhsjkwXQU",
  "key29": "4ASM8nzf2vtmRQuhNVWzt5FuHnr1WdSdpKrsDuJiRQKyTAZr1AEApKGLAXaXNP1WGskwvvB5xXojWGfCcC7r95fA",
  "key30": "5gmSbCpW19st8d6M1pRcxZbHS5LMJcbsjTnCW11Jf8DMHpahWXsuMzRRcUNQbgiZgucpJQ2oGytReGy492j22nqN",
  "key31": "2mCqnreP3KUZhKtXfLG3sGh4WvRkCDX8CqC5QC8hMvCZW59GQLvTbJtrDc74SnFE1jMCfRPDkEVnBxJk1RCz1Vvu",
  "key32": "6oqCTs3yNGgbyw1B6Bd99KVn8ZrEUvxvNrbZvm5LYSRX7Hem1RUKVMaaD391Xuc6XNF9UGrNCnzuWmqA21LF1iR",
  "key33": "J8XqRNUWZ2WKpyNi5dqpbcQbegFCJ9agZHHzzCitNdSeWhMz4ESAU5iUvpPAv9F8TPMyd8SDH93E7neCpqwXx9K",
  "key34": "LEsdsmY6NcPhjnXbGCi4T4wvXRCEtoDTL2WxzqerBTtDgLLfmYs6XdErYqEf4LmsYGk5zzN9H4oim7iGyy97NLb",
  "key35": "PvARa6KDjzVe8gF3M6w5KGsnxUvFEz5eauVe16yyDfjsLKGDvpMbZTkLjKLLvejyZrNYesuNZpR2evz5qjZxp2i",
  "key36": "5ysRaKDzmQXfTfE8ENeVuc98rpQp8TUGRZRgzvh91DMdgcfh9XYLQAFosDcnLje7338oB9qrRKpUCjjXSnaXM1nY",
  "key37": "gCUD856S5MbR9U4wAdYe5XFz1UNJrCbWvQtCKviJBZ7bPJvVUVmDZZksXBTJ9VPuDayiKFiJirRxWZxoUDdvsBd",
  "key38": "CVPayBHD66nTmQ9pBD8NcotpmAipjAF797PrZWhBZ1syCu6H9sykK5RQGdyBjot5sNmG2zGDP6KZudeFZARQz6U",
  "key39": "2aUBUNKU3gXHLDhfEUmhi9Ss7eJBURfQLdNWiRWpu7Px8gT3D2iK8R7HU9eCy5UsAnMVejpMrThVnvF4eYXzc5g5",
  "key40": "4BfeJALyanii62ytoVtPn8vxrrXdTRkMktpjVGjmuQ5Ux1R1TvvUzfXUwBZs31L87G3aPJJ7MMyewiXpeVBbGSvc",
  "key41": "dsuWrKL8fBi9b5daNQvquo1rMUVV6Mei7LuauiwPcVGn1m2tibWR3cfDoFtXhUMu3422CYBseKnZcd4MPoqttVh",
  "key42": "5Kh8odo7b51XrhsfPvjmxaaksfKnhSJSp62KuBxjRGPUQ9Bg5SFr547QJHSZ86Sx1vBmP7vZkCVBZBqc1p7oHqyf",
  "key43": "4sp8E2pVmvUxbGrw5o7zLATrEg9k53fYgaXDzKNo9vgHyvwVRfBvmV5YuLTzwMCVb4rpqjRCUZq5sdmr7j9JgCZ8",
  "key44": "41wHFrQ8sncnq8MeGY3xYAubGTtGpuLTFs3VtNz2b8Nrz1XU8a7g37upvfWmWq3io49mKGkpmWaBconz6Rdu5Eut",
  "key45": "5TwaqCAmQN4gQFVqtMpCo2q3meZfLDnmsJoydi1C2cS2TyAaBxbmqaD2dhxC1vNYG7o8cHRML4JHP9hSQD8Y1T4W",
  "key46": "3JfF2rFcGbn8Uu7ttMZ2c4WLbfdyc27zQfzC8NTex8xMUQQYbN2iFECHLp8h7Xu14EUmjUHQNRUnDW2K7MZXiAML",
  "key47": "3RB7LQWdQLEvQGv1fqF95u9yp7KB4EsSf2Bm8YkbBWP4zg8mSMNwDBpTUQsXfXVFSpqL8ZQakTxhRp8hPv7r1mdg",
  "key48": "2GhTRUkqa5yJArEkU9FYKQpiLg6g4BvHEBC8yA6R6MZEVYJqLRDrrkaUvC4E3wuxL8JTP92CyKg2V3ofowFmR8rd",
  "key49": "4fvzPejzauZHKB8KkVyfuUKUvBSgTtmwSp8jkGWAWcGURdKNwFrGnkyuM4eSGiL8eUr4K2K1p5nnYexiGRCDwbxm"
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
