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
    "Qc95NQubMfzXYTv3V5hstaxVxLdL6nwaLqpmiRe6RrwuPCToZmFRMnsbb7JHMfA8MmmoPEkA5mcZxteZdUoJ4Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nw47MHJ8pfMNgw3XpHmxkduxbsvaxk7TsxykuJf4D14TZyzmRhCJ4bRhH7AistuQh8C1eVYzY373dEF1ynYYz18",
  "key1": "4vwCz9humuZ4AHYb2dWN8wj6QsBhwjk9ogJmA2g92XtcVnbTZLhXh5ucM69oxqEYqSE2QQttyd8iJyR3t8j3PAHP",
  "key2": "uVw76psosWE1fsFmYN8BFHQ9kbY7Npt347EdpyEctoGkEWQ3QG3Scp123SVESfkFS9vp8i4NoUDAoENy4TtBvPo",
  "key3": "4rK9hbmzUvstEjHwKY15rV1q8zYEeWUwKSpZwKKt7WvvJkwsPAMaExXvP37Ys5RqhD2T5gcaP99GH5Naptm3k6xQ",
  "key4": "2bhQ34REjmBFJPAZcMEru41QUgmje11v5NnjNpDJZHhHdwvrP8o185QNjGEURpo4iUtwkduFaa9eZqUNXpAbvsY3",
  "key5": "BcHAZag9SyBKieJ6RyYWhW9UQEiM1mugjdXZCLDUBhX5MUGVV4mMaDgj2Yam8f4TMPrQjY2iiu27U9tmN9QoMHC",
  "key6": "4f2aeQaLGFEWATCjnm3urZkU85fh5aXzRBwcBDuA41vFFV9ucfdGXZ7wNEhXFE7bkcUq9enoB8wJruZMQ5cvLuv9",
  "key7": "3Ge9BvuwyHZCfYp9nTRJ87eNcKssGfRZSqwxHQwMHrjUnuMAdYc8FM6EtrLnj8G2Pa56PGaEh8GJkaFS18C6hJEv",
  "key8": "2tLxm479NwMHfCC1U2iGKpv1vRwZN2Fn2H4QcswfCJa8ZScbZS6amDgipZ4V8TK57GmxTD3YUBsyCuHavftpCD9G",
  "key9": "39mM7Hr4Sxwt1VMr1zV6iGFHJutbWr6jHUndT9JuwoGqaVaui5JN3uSCnFw9LYchmVy4iQmfbpWJZA9V5QQQJXnP",
  "key10": "3iYvEcMwQExbHbTxxej3aFtYSbQe7GDTqJPE8EFp4M9mmaF2FacxPw5vm7Nch2n97ZdmxG2JU3wjruHSjr7aCGMx",
  "key11": "36jrGnNFmtSoxXtEdEBa89X2sddwGqqCxreLb69J6h49ZZrRsvjQFCKpC7FQghBH1jYpZAT7cWirrT5FCNb7G4T7",
  "key12": "24NRVNaziDuqAu6kAXQ2wh69izqBsTHEBbNeXN5cNySJkUTZSEcCdaUG1fRmPRJd38s68v63KtKteFsKTQL5VCmg",
  "key13": "48YW1apdYcq6UEQZZDiEv2DXW4memg7P5urRyZAYQk7CV9BRsVdVVnEMmcas43Qo1QA4mJeXwEYeZWypVqzTmwRS",
  "key14": "3t59JUvzTCuPy5EQ7ZahEEC2Pt7463ymxka6gDDq1EFVTcYM1HJXuBGXsWrzKhGHkgfGM9FeAGZZef7r4qep6aUy",
  "key15": "3vqMiHqMyLHB6mdBCjd14VyvdLc36dJSsSLoJ4Npv9R9zd5wrRYFGdtAdCWN1tJhRo1QKyPpB52sznC2W2GCsQfW",
  "key16": "4RTCgAF59cDNJoGRwqCutS6PCUmNh92NzBaJfLXaZ719LRV88rHEn4xAgHzK8Y64GpU6ggE44EW6Dpd7HNyJ7uGN",
  "key17": "3wNwNzxhMurjBP6CRuB5TzqMrERFmGsTwGixV1JyBkjZyvAUkFUCKJJ6eiyCVF2PNSZFMT7AJDQxVCVT83PbQTBZ",
  "key18": "5XPbaGaqTP9rhkiK6Bj5q9qmw13JgV45yQiNPq1j54AdbhMaC1zuCHUUrFcmvMZT287ytjDnQknTmHz1GweCStH",
  "key19": "4ZvuDjSEtc67KW6rGoepvrzjz5cbZGjP7uSuB3ZnPieP2iKQQAtTLGcowBsm3ixR4bHPTowbQqWbVRh5EUPwuTfA",
  "key20": "3fAn6NBu6tj91AfN4P8n2ZPR4jjLUj6jpbpg1UDtGFXBWYN2dpWjcJueYt6QFPFFCRtLdsxks9fN3sTTKMmTNLFh",
  "key21": "2dHZFy2TSwtyzR3pHmQvyJMSSZroju4JpbHw2pYe3kMrTTeN8cHy4hprS9XEHQrZD4FAY893ur37baAEKJ6tRB86",
  "key22": "3bGZpzf9DiPkDrnSzc2VKu27ALQR1U9jshT2Jq9x1sncuXgeyxjUZaRUzsB1osPoSD7RBhSNx5bRV9X61H7wQxtp",
  "key23": "32kzAoRDTjVX3VCA8QiGPWMg3iCS8pyrZRcVA6Mchptu7aB6NkPD1dTWsXrrvvXTDQLNrQTZzxr3wJpH7qYGDJRF",
  "key24": "2bjZwMGpHJUbLK5NRMGrWHAQscaD4tH5zeiKoNxZBrmqTnfX7mRpHjnREGQ7J2mzEVnbGUqMkZeBSty9iviGRkGq",
  "key25": "4GkCQ5gj5g2Mj68bkvEBA1nkmX4uXqtTTsL9YkooZ4NJvxhh6s2tjrZvhrSxepDgxoKGMLvK7MUQ5wiqVJc7gFU1",
  "key26": "2qdjuwMoHUTAnpMxYVktMezvCGytEXLe9eYv1aMXoTVhRYgwp96cHRcY4p167GmwfrikPLQPGsZLnATbqa6yi9pw",
  "key27": "4cu4KTpMTbhqgrStvdBU7UfavENG2jd6TZLM5z6MnC5K2VUs1ZZ7ZEsHD4qCLS3ycoen1ADtwqE3kpVXmmVeVvh7",
  "key28": "3TrE4U2UvRAJ6PkksjKkAcsV3MHA4kwj2DY6DnC5rRoVSWt6TLMPyirKLW1smrNKdfbiWkCpoLgEL7rK2eGvcPPR",
  "key29": "62dwUs6CMexXDR3wB64Ar6s98vMnba4Wf2gvqxAtd5ubBRTE9FCgxF6XYbugpQ1N49cm9pKyscHvmcMxmAquvf6D",
  "key30": "42TH1rrM9nqLSkP8UvHh2z8BU6V3kK7VFAfkWiL84aLbjMyrDV2mL2LxHpA4rWnFrPRbnj3YtfnLBNTSfnuMNwEx",
  "key31": "BET5bAnT94HFyor7C1EBb7VAxZSpXztXuFFLhFXmczgyKLCBTUggKucweyv7g9P8E91aQAERSft3Ap8sA9vjvk7",
  "key32": "ztFX3nsbJKMgbtYzeTqZ4268w535Brt2FQMXiZJ8sZSKvdJbQrCPvRznEkGZvi4PS1tDjR1AkVSJtUm38jv3DdH",
  "key33": "2XKZfXEsa6hyGCZC1SRDSXp14sNzoHHVGe6nYhzez9zVghAaFB4Cm7ZZ7NSa2AP6s7j9P8hQ7VhSPrxSiVuEfDLp",
  "key34": "5zvUtSDuwq7VuVYC7ogpijqR9M5tzsAZPqhtv8FnyDvjgzREpruxuvJoj4ELtFiNU8VTSQkqaCXnSAygTw1SuPgx",
  "key35": "5rryomjPCYmdmiPqayUQs7nGtTTEKdAgEas2id3cY7NxsWW2hDEdZer5MSBQeABFjm6uZBmenFAUy5TnoHo41mxX",
  "key36": "2nAk4qhga8AbeijrnWp25UruDVc17f4jvec21XXZJAHnBSqSNoSndYC4Q6r4QHbk4g5dxE6euyYFbVAmwesYUYxX",
  "key37": "3PR3S8jRmAf2UwvSxgm8SMyEdoXq1gMAq7Z8dtUbvCLXDeUFndxBTYJkpvX8uvLS8izu46TEbDSK9djBC3VEhEHc",
  "key38": "gWmZfEFZYsKjePB7G2QH8qazymX7FigWMLqws6SzcWmpr4UZJ58hbaGG4q5mpAodL49VyLkbhRbJBM6HyCRgyEN",
  "key39": "A5HcsH3F5WkLi8eYdWJQtFSTeXdRqpiAZtPBgEFozoRj2sQs4CkcLGAdDNdT2dYLRHkB1p8BSvmunnw1AiXbKrU",
  "key40": "3L993fBcGDkueoN9bWo6T3qV9Bz5LWENrER2VXnjAnA3chGd2q7zbsvApWGXchr3T6TkSTFMFiTuKpLb5nP1cmaX",
  "key41": "39oD711YwCkb79fN7CdVQ3FZqcm64qG9MLyCpfHH5HCZfR661DyZDYWwoLmd5fpspHgF2bFoyb4j8gRBfVF9T57g",
  "key42": "3AKfxgt53YpX4b7QUJNWh6uTQ8p9X8cgvEn9qJXf14LVYDPTo6zqebM7WWJa4qQwH6zXcWsHedAzAMXB7K8ZStgf",
  "key43": "4V6JPPWwd8GrqRCFPtYPz6hQvX2W4KzyvL28byQKFtS4jb8iknNwTL7DZrnPQC9JJNxQ73z2DCNyXtTFNYkZ8VxL",
  "key44": "2mXRD2PKaXqtHLLxdCuuKPm8Lh4GXHtbtJJN7qJ7ZkkrGVwA4A1gX32mL9gT6VqoCnL2zHvuX8pFe2q8813QSBuK",
  "key45": "3iiihxSRVNNGpyyUuj2TuH3Q1nmo5GXAx7tiyE2d8FVARM998rutbby2fhvVuSiRkjd8yLvfiikpWo55EMyyo8mM",
  "key46": "3jHJbNYKaW1akKTfAxgtdNibHVCnGrdsBHCqHe1j1SEB2C19nFa3vzfkzm9vLXLbsyDRcYJY9m13YTRKEWqgkrFP",
  "key47": "dvp37zZBYE8TxkToQbdYcgX1hLcNApxJcdRFXz9damH6fzg3hRW9KMnHWTbEdugWVsNzA8MSpigxhN3veJwgJ19",
  "key48": "21f2wwyrcDYHEpAy6FzhUdYUNbfmTU8DFFd1Ym5uARHUpobV1h7huWVzW9s8dAWWJs3vhc887mXg943eKzN7ujsz",
  "key49": "3b4suvo1ozBZ8xzbHJEwi7WgKhuuxzmsA9JDhz8dqPcABvbxvJD3PwFQP7wLtetDeVwQfPk1THVzL5kaesZbRiqf"
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
