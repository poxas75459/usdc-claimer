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
    "MJCQKjpRGPg3EVKaqU8BH5fZK5VCmrGgqbMiZtPdqTvhN6V4wwoFe4dQ9ebm1PQF9i2hmPvKGpr8BWqD9xdQK6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CXJMhjUEuwDKkPYfyjcuCYnBFEAmvfuKnFv4WeCe6e7FWgym3y6Cpamiy9b5ieZk2KpTPY1qFxJQDddQiAwqSL1",
  "key1": "66yFcdgApGTPkS9admJytbAb46kRXafxcV8cTFcaRCjcZh2aLbMyCzov5PbprYbHnXiehPd5bqkushbc2okQL5WP",
  "key2": "JZz8tN18bj4WkZNGnugnE8Hwn13HpheihYZtqTehJiLwgg5Ncft3rguZBtDrNrzL7LyNFDBt2g8HogCZUtxADYK",
  "key3": "oBCgWy3JFr47gFqUXHqMosAMR2NjMjHQFCUE2sp4WFGdrmdNXJDYYTAThQJtYxJGkiuvbaGQrt27EkHh94AM6w4",
  "key4": "5mZ6r77vy357oKXwcPma5Szc6pagFCtVjKCvVL99N98PuVWFDV6WJsF5BsdfPQYQaSHgkefHdyWZZJ1GtUc8Fj8K",
  "key5": "3Bx2KanbWsdVCMNStLiYCkWHjpW9YqWZyWbHcQ6c7rzeccmJ8YRGa4Er77Usyqw2y755BwDEThoLZDKXbmRh9BTh",
  "key6": "22GVpNPTv2MExa2AE8uA2MurhzwiYf1MG1Hxdzvtao1fDAaT9oYNBeDkmSeQxtLKiGmi8zCRdmPPnCTXFBnNDV6h",
  "key7": "38BCcTV6aG5BbTfbz2YE21SdFsVrmrkYDQJ7vPz6a8LFqjx8gLqcP3A13tiMqSqij7G9xA25rvvgwon2EeWkRmoH",
  "key8": "MKx4Hrd1Bg139Vhy5S3StsZBi8J8hRfVmEvPW9bLG8TapxYwVsefzPjEX2fQmSvCrnASKQKaPReM8dcUjmiE7Rc",
  "key9": "3XkYZdi8cfqDwCxC43vo6ZBf473MVgAokwpbNaFeyegqJbtDJRvYrTEsw7if6EU8DZJgxU4NCyJA4ze5LNq3MwRx",
  "key10": "4UFTpEvjfyquxGW5NhxdY2tVQGdFp7wtRmhzEcXaRETU4c1u2wzyUCSEn2t1aySuTEBRodeaLcDvbEpnyXpuV2a8",
  "key11": "4SF2nRzQC9bsNxENxkkvw4RDJCR5go86e9J3fGLuaZ4u16HaQoQnqp44iHfBcDDAkx1oR52kr18hhLDm7f7pbEiR",
  "key12": "4gD9w4mmR1LNBNgTnjtRu2Y8F1TbvuJEa5rMsiwguqmCbNjoUw2nv4TjhbhcUXjrm4YPZs5VXJa8aVrEstj5tGwr",
  "key13": "5TJ8s8Da3HbYP5qb1B2Az5LGGXZaDd3YP9AVystyrD2aLAyJDYLhYCPcCSLE4WV6DDoQDqGwmw3at25PJRbTFgHt",
  "key14": "62jL4AJBe7PbLdi16X9bku9CzDwG8Tw86ijc8HwMFCZnHgJLuoLByQWofeUH1CfndiDfBoYizELbE6MHxM7DG35b",
  "key15": "51EEqtMhFhJnx1oeV8DB2SPJqxTo9qtxdY491qU6xTSWzYLZG4EjKG4xHamiHk4UHipZ597FjDx2P3R1nnoZd72R",
  "key16": "2u787cAroBCrwHbKiHiS17mrQkrQX5WXrkTJBuSmcSut2kCrdgUyakSvtc4y5an62zzJ43Jh3hvsyYh8c3k4GBhy",
  "key17": "23VqAdp8qhmkXhvrbNMUxPhxxsNaoNCNvxby5wtfbJT9EPUCPWxTUHfdfa9pnFknKtZF178zp66XYLy3RQT5wwtG",
  "key18": "5bLZGkkPQVX2reusc5rBAvtUQkeXULtuBBaXC8pQ4aQbEjKK3F2Co9pWG6v5V1C53H3z9As72y8XfHvDjg15ok9D",
  "key19": "pLZfQCb5KsAG5oufR1P1TT6ZU5716nWxu7G8v3xf3UdhUPAAiTJBUDK6ukpQAzS5udhPPWaFiw8G6weCbraHDsd",
  "key20": "63vipWU5e2tBSWritnyxDFAr1mDr6r42m4T5wCSeGMwDR7kDBhkjd3PcMdxuAhWXJb1mQMbxhnLGg89kZCqc8yW",
  "key21": "5MwSg2TTEBJGGPYtcL2JTTXtPknUwR3uPBRobYLA2TT1YtjK9k9g8RLLff3NDg9cXUq5eHKgXs1RH7zkXkvgYmon",
  "key22": "45gNnJUJMCAaSb3Li3NWus2v5y279dmo9GZcYAJbFCWaEBDSRufjGumxAe3PUpwW177mgLg95vavjDfRpGPEVsjq",
  "key23": "4hJo8ixoJBPhPjLTs6tmwzX54cdLHgazb213jsK4BTTTT9KkN2Y7QyNYz2rAkMYVHaHnuZJ8iTKt3XY2SytXBqNa",
  "key24": "3DjEC4Ch6CnWP9AzUtk8Dj84MgJwxE846SHZbd3nCNCokpTnbBb4A2L1PaxWLdzu3exf85ynoEjoVTRFbzU6wbec",
  "key25": "3sbXpyPGNgX1F7CpYcZZoDQNGbQZS9HFHmHDeiDUqGvEcM1XtGr78buNdk9j8HfAFTfXkHL4UhGuYAYq8pYe9Vbt"
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
