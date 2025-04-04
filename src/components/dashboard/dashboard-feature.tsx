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
    "DDsCtX9redZBbwySBKktAU5tBbpTa39amUhmHb1nVj1yAFE4GZYz7pvz9HvBgzJ4AgLFDDmHUZYeu31XsjZvZC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FtKdp85uaCQXUTBPLb3YkvKVAqxDK9B1zn9wUsmRcx7QzC3RRBHKVPntEZ7ddeUykW4uzZcoQkcD4JpvynrsxAd",
  "key1": "4p3m9cyRMaHWLLBqbxXkHfbos2xBZrpsq5ucrocnyCL8CxzBwgy3Yih8Bd5qJhUveiMn7QWUfgGMCkaWLLhpiEW2",
  "key2": "5PgD4NBcVCtiTNPguM6YadCxArp9fteHizdbJn8VPzQMGYoj9b8ZzoRYWVbemAeB435grPQRdYrhrmWKkZop2NgR",
  "key3": "jBM993KWWDuFonxBVFKH7FJVLn4HihcU3BnB5j5CHb8skZqYChFNuyEx1sTddQJVrVXidRsnArC9c7LXnhWnKe3",
  "key4": "39LTzgXKuwZffajSqL4kCmxQ4vNu7vVAqwcikjgmFS2MBWQqPaptwFxou3tuuZc2EaTNqvT96FpejxS9A3Za6Hgy",
  "key5": "4cV7wbxcNB5hDVQPBKn3k6CbDx9Z2v7weJBzXdTvs9jnjqCQsXcWXcD7WoGdScphrDLohy5HLTpW5uYCGXvffZuX",
  "key6": "rBVuyFvNe9JG6iyw6oMjAgBMwgCmaVjVA4j7SHuki6bcGWxrtjuTipx46rb2e4RiMZ9BgcKRzLLcvFLvDvQRfCU",
  "key7": "4VyDiK1L9t77cycMUu9EdiBtPhkKGKBQm2VzQgWYXsjNeLQMJCdadNovo3iRiBj7wMeLqwXHs2LW3s5tpkEsEYVw",
  "key8": "3qdrp9Mht9ME5YgeJtAeWGnHzcDKuZ6TMg8ewXtFvBPjScCRMhv8EB4NAeHUMcokqedftYUhux3wqbPTGMLAxnr1",
  "key9": "5QjDPenEro3p1WrutqVJmVL8ysSzLmKbrMpNgqiVj1Bu8t6Q621itosJXdunAXg8VeouW4hE2jRVDEWUJjQTekdd",
  "key10": "2gXkqdaVyjbEP9RF2iVGpkpBVi7DECvh51ckwqtx44PAbHZrzZ6HQDBmELog1s8hB7XUbSSd6AxrY5pzWetzoT8C",
  "key11": "3fW7aAiCZJJvPnVfWDubFxk7Y9tgh1r2UoiTZAq2y7B8iQ9w5UxAXxexn5gmw2as9fN5qtNHVJ2EWSSq6Epdbh5t",
  "key12": "4xqBBsHyNZuxWn9KNDoq5WDHGxKh7bwripnXoZ8rDwnP4DCniLT7i8zVAskupur6sH8zcmuyt9scSwoFfSLaPRmw",
  "key13": "34bwEPQn6ot1hBdupafGHud9JFvcTPuCEA2pixtsW4V9t87iJzCDMM2ttEMHcXWdq5fX3YT6gW5tdEaYmL8J8Tmg",
  "key14": "2nAm1fgjn2u5CnLYENs5BdktkcxW8y9sEgPPXGVBuNZXtQ1DvWqiAZ4MBvzSQPNhnDb5gRHXE8uLo7shw7eBRxau",
  "key15": "3rbErQoNGemJdkG5hj2vFsMZbtxz6EYqu6F3jFe7iPV3Fcka6gyNGiL91tRTn4vcMTYR7Fyb7P5gqi1pQy8hSZFT",
  "key16": "5K5Dwvutsdoo6wQFhBzN992qm8d3MuEYZh5TD3VdUgZbiWQ3y831oep3ZntkMQqPrTArJGL9LVx765c8tXzBnd6t",
  "key17": "3s4mGz7fPtocsGwXzTPPvWmrTbPiiYr7VZtD4c9d9LrRUnKdJbGxyofpysfKpDrH2e6Vr1qti7HM1bqogFSGab5a",
  "key18": "gS7g5qmYxcohMHk5FChTPD5gELNqKYyAxQX18zjMYe9VV4pj3WxrVG32WwdWLD9f3sw88qSEntq9gAP2nqoZZe8",
  "key19": "5HFrEfYkHGV2vW9CMc76nvhmZLKtnEGbwjPLX98LZ3hrXfm51JC8dpyWY2sNvvHp9KGYM1Ag4vaATWDfymugM67S",
  "key20": "44rfhyKsgJ6aCH5oxgwjQ8UiYiExRpiJkevibBxr92bj3jXKKPYf8nVK1M1U3Dn1dxJM7WjSJs2ACYCKSZNQhUva",
  "key21": "57jrvRa6VUgJ2shYXmq1MD1wTHGXCVRUfj6XkxoxQHXcJGwawyr3of3TpqQaT6JmBAUfgJ7TDNPMPY8SJX8tiNuC",
  "key22": "2DzdJqNJYDqf6pgyLQprpoekTN9BhqBkBxYdbwxdRmsNBv7gyzmPbXyTqi8RKKRG1ePebmsETm1ybip77Hwy5oAA",
  "key23": "2i6NHCAhT2pRVMJawcLpfjd3CuCho7oEetmQGcfHtKyG3LJCHkMfP6kYyRTJkodWDxb2mnQc3bbBrnST8AxKz4VU",
  "key24": "3ff1rLcEp3LANfVbZQz43L8gqpFpo5kzJ657wgLtjnMWYBJqRNzctY1x7R1dRpPaks36BmezRBbSUcn6tBTxFF48",
  "key25": "58edCoZ4mV8EBaMdSnQ5d6AxdYXHjnSZaF3e6qr229TRhMbcVC7ag7YgciZoP9piQc5AcJyUaYwSRQPnUbzVHkLb",
  "key26": "3SsLm3n3ZQL35qM2yvuct8JNh4KMM8JPMtHk2VFsita2XE4EBdTQyJ4uWaN4yFjMNj9SKN3nSjfsrkFWkjD52hET",
  "key27": "5EjG8hvURc4vjVUD24P7qDH2oCesbcmWaJa7jmDm8CFPGrfKx7NKeduxwQbHYLwfWMxpTQGVLFwfA4WVabRuhobd",
  "key28": "4AiYsKw3u1vqEwKR5pkJDVi4j8WagWZe2Upb3WnBrLadR3rAnFL8f5hCnSWqTTFU4d8cqPhvH1wo6KB5bs1N8SVi"
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
