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
    "2HMb3pcTir1SQBHDCbVA6SRRKCGqY1efVmg9Poi2NNpFuAVrSrHLTZ1hqSreXBDw3KWjrAn8CcuesKw3xuxXUYKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GvVDjvD3DVPnG9GoGxXhZdESjhYKuWDz3AziMs5d3NxA4pL4NeSwC4CREorFasbBDnYFHbWXWKkg3aBDBGmpgm",
  "key1": "nsBSAVfA4hhiYJFDgkcjmo2ZkETDdEcZxUp7xx2hNTTuzvL1sa3RNopaLET1SVy3Q8CoMP4TZjApk5fFs6kcKcy",
  "key2": "31DDouS5eaK36SJyeFL2ouc6rxbicEH5drtkDuJff4d8nZ6LZSjxEYHNcoBczPSi9y3sbWKgEvPUgdUjEb2dR2SK",
  "key3": "292qHSKPkSFHnFycuwVmtHnNT1jDgzcxPwDX61WCmnTKwFjiPbN8S9Mmry811i2uqmbfihm7sQxUUR4RXHN7bEWT",
  "key4": "48juUCmivQs3CQcK47gzWV9GxStW9prmGv3dcF32hmoTxZTJUxE4eqcEpXtWu7PBjVYuMR6dPUsKvHVvCvznHpwA",
  "key5": "3ziNopKyYVwDsYggTQ4WKCFbRZ8ZRfCqLYQ7MywA7G3aRUFUPzQu9CD66ZTRSzmHiQtmeqdfXBCMDjACgBa9zdFc",
  "key6": "46G8km8QoJkq2fYmPYcgrfHXDSHfR9rrNYFyacVH4Jk5VEs83ULV4xrT6jsPP5rPpSuSX4k1D2Geh89UqPkJVWyf",
  "key7": "46skQvohid9Fmuhs61KwxTL7G1wfvyw9zgNAg1KF1yNJPMcV6jeBykybh5zYoN43AxZkrBFkeRULeDajjAfFCG8W",
  "key8": "2AAu8r34L411YRu21oURDPQbvDQ51aWxE1J2p6cvUWJk3EHd1tUkUyo8WF8tmSuYES4UGFAyKouCmHH6CcTdGpY8",
  "key9": "2XkkarEDZerdRtc89pQaCyWJHu7tB42aFpVqtkZbVcA8NDkyXr9yqRgGc7uWWpBjYbU2fpakeeRxwkjNByNkfBZD",
  "key10": "rciHJ14S1RPpppbvWPSoMhixJ79sxVrror9YaAnqWAWuZbu9sp7iHH1wBJnjiUEzSxRCE9CenbgR2FZnEWpqHZQ",
  "key11": "4S7NRxBjhwrstRtJTya4SW3QR61rb6MqfSStqJzhD9TQCpcz3GkGvjqPjupJwmemo8Afgq8QPkeqq59gdhmSATZu",
  "key12": "5oZZ7seuVzWGvFHSUDmJ2eW6LYbG6YdB6Soj7s5wmszXWDTLEC7Px6w26eNNXFQKnTAFTUtb6u4En8boC4xwMiSW",
  "key13": "4X5oBHwSShYpegmQAi9CHmsm3UEinfy1fejySBFrHtpi3Nd7iSrhmc4zZumab3RFApcVvbYVTXMvGFYkBC6Hu61B",
  "key14": "3Z6c4PRRdy1E5w6SPhqvP4qkGUSPavJbRuHaKc71bb6Qt1PgiMS4UHciVWqZjUXTFZTvAaJzdXtvwQv1AZkBpZFX",
  "key15": "3za3p4gNMqDQMcXJEzLmkuUXAv9DDW45tuqhfSbJg9DcyqhVZfu1ioDhosNheFXpQz8an24YcfjxJ9JCfvhmCfjZ",
  "key16": "2iuJGRFWD1j2aY7wac83KjUaBNV1fzVn5qmAJrPxUwGGTgNSiJE9bevT3cFUnrfESzukyDUyheCXqvN5qn6spLQA",
  "key17": "2XLcd15WheLYvnrR49dSX7uZxoZDdqSjB1whTrPJ34zdtCksDgBgMMwghjr6778b9jyjsDUWobgZmjLMGa9WpNeR",
  "key18": "W9cmGd39QiiZGJZhFnjyPxSfY1reCjhdMGeXPhhQFYPCobwj1QwTj3mLBs9wJXADGbaMhEJMgXQ6pxxyRWNTq6w",
  "key19": "5ouJkKv2cKnBvco8yXcNdyMJnVefRroPKHY76nymmPwJr2yXg9u28qAbkSciKJyLAfEAY8pvhYwm42A3n2PY5mim",
  "key20": "3qUgy7ukDo4Vv4HD7mJJ6TUZ4XSooiZkFfRmdS83naP5FG4ekR8J5tZWYpyoNXttQ1EjtViYdXiuqTnW964P8tKu",
  "key21": "5jJYNKuzWhbQPTama5y1HcDwcWq41pLGY2rfxP8PrE5naRDirtPomRQvjBVJbS4xcv7nYiBso5pFMEHjuacnLCFL",
  "key22": "4b65ENn5ZSGLc6XtKFucgwaggLpaC8HZKfp1j8bY1iZ4wafsbgppjbUxZkPXtt1fpoEBhd94UsV8J3v57oYu3wxp",
  "key23": "36VqpTSETVhQxUxSQb9CUaMsHHeZXAjHoUGn1PU8VMFXuVcXw97K9PBNkWBkv28nhd2z91JBjoKrnZps8WXcTPaW",
  "key24": "5vMNRNJDQdT8Lp5jnw3htaVUgSkDfypPbRvUf3o2wCDZjkEG7sbVtHP4MHkRC6dMsVYEouk3X6PzyB7GCbaWpZw",
  "key25": "4rHpL5UW8mrMWPjQK9se8PmiCEcBPtyRWZTB9LsxcJgVXyM8CWH5S2ACYPeZb7EDrftsLiaFYdnJyNhDp8JJfGNi",
  "key26": "4jEjYeSnQsLb5Rtzgmm5ZKAZZbDkHieTK4G81bcpxPbE516LxgUaD68ogEKtGikYZrDQkDjVJwMxTVM1m3QBEfzG",
  "key27": "35ahvb4DNSE2tvLscaC6t3KgukAf9XzHRUxc5oazdJ9vaGkUeCrT9ZLz67Cza8PQegaQ29sU6aX2pnhpDRYuBcWB",
  "key28": "5tHq4AhqwgGKywatUK1hLQGJanoEsfcNKKZfMWNYx2sdTKqhjg37S6MZvs2irKWAhQG8bWpxWVsY1zQf3Bu8GEbj",
  "key29": "4Fj1TRPcxiQdBJtCMMdEcSutx3KTLMrXJVjPA2YwC2tvRvuSbzaKsTaY7Sncgup9wsND1fE79hd1VoNaZJW3bg4g",
  "key30": "3SCh1VXKJwgCERsZcMCLf1arLxFGzA7aUABaNwjdy2mB48YmfNVYg2aUDrDJsRBMbh4pSTeANBeDPsH7yGikcopy",
  "key31": "qMwhtkZ9YPKxPvqSWvrWjiMc8ybfzHN9Lt6THzjmc5jzWhePNQ3cvi3FCAt2sdRr3XdXLPiFC1kTS3pfNGX1WKT",
  "key32": "2wGVyCQDiFVCp3ghqWB4RWG985TjiE5GWZ7dmnuy42DmQfA4GLCfA8aeWBRF6vrfHuwjnx9bW6ErTiZ9xPUW6UFq",
  "key33": "4ue8cpm7W9Q24qXW4Q9Ltif25SJGw3qNBMJvJQATk4fvVxUVruCwWFgt7x3a6F2QAsmZqNciNmXfY8b2wDiTEMaF",
  "key34": "3HfrLxp22uATzgzjoSanvN8KD4JF1t2w1GBf1wvtmWaddJkygKxXg3aE9ih9a75991kdr58mF9R1qLmUAPvSFBfA",
  "key35": "ien6ZrysJGwVg9NuERB9h569aqjfhDTVHFCycCSKuQjBqNiE6zTwprW5qMvRpJDdWUCSV4v3nA3xfTmeC2nrwuh",
  "key36": "3x9bCAdzJuK53yvdUA6DrW7tFArn6F5TaKiFFPjLbF8HvjKhbZKP4DNuT4tTCbyvyjL28cA6zJbXqUUeMStPNmPN",
  "key37": "4PaDv2Wwvr4J7Tn2kvaANXy7GYRB6GNBtDacm27nnPVMyJwxrLpxDXZHGGViEi5gVGMRTPFYDbLxaLzMwXJAgoRk",
  "key38": "4BsihZSYFrTzCcrR2HgiY6wrTc1P7aLqqunV5gP1FJ4N9kfw7HQGrevKNScKriTLi7K45sZmzq9CT2SRkjWQRDtS",
  "key39": "5icSxKFckErtHZXWkkZgzGmNuftMrJ9wB5yiqjPaRwC3ZyRReqEZyjATMrLR8R7S3sNm46D3vdpa76x46jkkjNt2",
  "key40": "3qMG3JpY8ryrVVdP1G8TeEbZ8XKejtgLJ8EmwYFgoRqYSWLw1y1kbKj8gMxVMyWMe4BF4Au6EvDMsY9w9EPXuw72",
  "key41": "4dw85CJoGzHCeK78Q7TRo9sPL22WqsQ8kcMtouKq3tvqKT18pcBu43rBREzZATrj9Er5kTGfG9U4acgZghaKupv2",
  "key42": "rY2NR5f2ugmPvVYHr7UqKUrRwnmhoNTLAdmazfa3Vf6h1SztBKp8KKiinc4bPTbNxTzYuTE7rfAcy2ZFzGtComW"
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
