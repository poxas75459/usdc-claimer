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
    "4wFZzwLLEfPeGH3ir1zKtzvViUhS9g8Urs4mbFpRKqJdEEJFK7iUoqKBCH6zRm3VSPRzAYdb5BFqVKj8VRrERE3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57yQEZB1SUK6k2WGgdwTSL8TBPoSWidcsJs7vBRar7hTi5itzTEEeV9phbWtr8wEcoBHiXB43fCR73BYug9RFxjH",
  "key1": "HpBDxV9fgsCFS1joZaagYkrdsjbiRg73JSXKp9BRNfGXsaVj41aHpZrSPk65fdfvMjt6BPZQNfcN3cnRq43N4U7",
  "key2": "4XoCoqwLTHxv6cVwm78qUhWYANRC63FPD7wqxKv64o6kxkfUxMZ6NhJUFPB9X8tNrkob3KKR9MxqsENGia7Nxb6N",
  "key3": "1T8i9H23g98CkkiJbT7pwpYbH7R9GhLyozteAw3rytg1AdT8PFBWxicUvQCkgmNbn4F4VJyuVxZXNhvZnkiUiYo",
  "key4": "HJt2d3s27nMSr4CJ7gvcTTo1D3fxeh8WqXUxEtEAqG75W5bnVrLyySCw4HHajFSTnxPee7ZgQvz1W5sHr8TPq5a",
  "key5": "5hMbe7tHcNGzbxy3ppZV1gx9bMovjR4eYCH7jsJ1a1MyMoFvVPzGjM528Dn2jTGh4FJQefAyFxyo4n4MmJtoS9Bu",
  "key6": "3P14EiQAz1B1kxHPh8JrREigVoRotkCjWBk9H57jGtFbd44MAr2qLsCTXqkLDoHE88hfottn9LsShqLJPUUVxBkW",
  "key7": "54podTRBtQgqf9XueuTSv6u8h8YAPYHg8QQBuHQu9Q2JN6AvDTfLKe5HLCqnAijYpHMDZb1JEwMezDi8HqxSbAkW",
  "key8": "2FM8Bmqtz7Z77LhjiwU63c54gS1FUmSQxEpj7DVakPMx51D9PTb8XY56BvPLytCHsvEXUbTM8xbz3JxE3jGPmSAu",
  "key9": "BfeSFVA6t5gk8aXzaezqjJEwyyzBWCiD7jHW4kdBpvqqkCLYFSkrDXigUAJ1setNJssbYTg7HND5NWR6RPjPCvf",
  "key10": "4Gu3Eg6pbgtofD3MG6wXq4cBzdir2tnpadMzFtu72VdBFUgoR6axPGCRBiK3QNbsNsNftACf1Jn9tmdK5Q63u9QS",
  "key11": "5fNyQhMCEgLK5raYvEH2kfqpp5kZ9fh1zpxY5kgb7kftGV3wE2Kn2UPP9AFQCjhi72woVhHbBs5AESRAAeyE7Huo",
  "key12": "3LaaX1wjEHgsVvfm6XJYkmmSgN5w7t6LecqK25ceE3duWLtCMmjzRhrc3MAvD2atCPMe42CpZGZc8zmpK2rdzNec",
  "key13": "3vUgkdLa8hgWUK4BBxbKiJ1HR2Bxkoofjg9rx6yWddc939J17omypHoE1eoW1N17DAgt9wDg1hRheN5AdB7Qd47q",
  "key14": "2JgULefsUeQaPdyEfnEy9DSzvvgFoGVPAasnJH3fEeRKNooTEiUxbB7MfS9DobMF1RQNxCm2MWxLkDZL8XyjyveV",
  "key15": "BbwzJubogLRUh1bieUB5LAhRtEy4ccKDBqQPBzacehqohMSMi2F7aUoiP7JKUNnfxGvFSC5Ub5ek3Tq3wBDZwJ1",
  "key16": "4FG9HUVVRpbV5koCBxpusQXZzJWPzLv99Mzwws6tdSeVRxtMPD97MbLg86mF3ihMo3TxsrvKiDqcWjkPWefuW3yT",
  "key17": "24dYH62F8q55LdQgaDfwjHFRsNW8e1c6bd7pGzKtu8jE1kjXf4bmkiFwUhXezTt1NMA6QToK1HGxX5hFFb2DhpDL",
  "key18": "5ximbm6oh74pvfPMvktH8786iNm8HSbzvLAtcpst377Qv6vPyZgXjGkuCGdDyRzqTBCisFxWiyyXn5EUrtzEdPCs",
  "key19": "4JSYzBuRptofMXsLk66nKF12RxGn1X5DEswTxsDDLrtswDywMNmLgsja1mJPEmiXYTnkCdEXse53krL8ZPsSLFzT",
  "key20": "2XaZWjdurUkAUQJAonrxbovfehZAPrcQcBwj9YvosYshPajZFRYLapNhdxP4JSXtZvtwJt2YnxqSXC6Q3ghvNZyD",
  "key21": "2fV4LASfdET4M87Skg5US3bgZaAu1jxAFfrXgbqkxCb1h6eH6mGZzU9rDvuG3XceUN7Z5Gq8hcHQBLPjszZS6D6q",
  "key22": "5ryVUgWExCyWKmf7r6QiomxcLNLrUuDLUxJC8ueojb9L14WrgmccN1QVjEvfUYPdjJLcbJskHBrtBer9JBX5DVMr",
  "key23": "4vdQipAxojMTkuemLm5tX685t1AxQTt3JVZQs6nJ8GQZCvyqZaByKMcNABudKXFRhsa5grCPVFnPgbRTLz35ruGY",
  "key24": "61AuqtWiN89VJM8VLjbsy1iGJA16DUF2qWMJ1abQ9XxZ1YfWTSFXnEXG2kUtyrHCbD5t3WNSv9dFUQti7rG6bxwK",
  "key25": "2PdbhsScdhXwMFC3huwMtGbNgMoS81epAu2wkb9cniHNrhx5QfnxSj19oYKfiaeNYAbuDJKabffjtTQL4xEo7UsE",
  "key26": "2mGV71wgoPWsyzheSMQC78CGQui9W3rtoRFS3vmkZpeLcbcw7HEfw9DznZ8YchcVoTKkZkvzQZ8EV3xZdDAx3GBr"
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
