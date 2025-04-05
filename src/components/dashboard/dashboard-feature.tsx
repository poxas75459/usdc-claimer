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
    "4xZVb4So7R5BpSTKhNF1C5Dkgt2VGnUh7LNzYagvWgfVH5NyRYNpeymBVvPFVVCW1g5NfkgB27Qz34Z6pn8puj9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o42wh1XYkg8VZx6T3HHzKGS4ppHjXVcfaC5Vd64QCerw9jd5zJAN9KoSh4BnHe5gbZefJo3MHTWSZj2bjiLGjEe",
  "key1": "4wXP4GRz3QpGwPdbdHfkhu65u5hkw8PvRDyrxn8UYVUt6w7vfjbkcTiTKrTTzGgjcTiRJ3Z1dVfcrAwhw6jYNJfR",
  "key2": "TdqKvCVDSqCRiVMY5KdMjAXL6oVVwfb8k5fAkG9pQyKeAMmtgzUvPDH2q4PQkufFNVyGXp1L9Gz47SiwREworYQ",
  "key3": "Q947X21xiWQYV8XKG55Xxf6BDZTfqeqh87cocATypUbJ3dDS8xgZ5AY5VcrX2RpJDaXJDtGQYBsKjx5yz3jqYTD",
  "key4": "2EZTPU6pPPSjSSW39nwtBaZEFTbj2z6LCgDoW4XaeCRk91Dx9ERqMKUmUSTPo7Ny8tLGqc4wtyijejyxDiZAtupT",
  "key5": "28ALCoFhmnbucnmLvm6yYMWDzgHEM47bswWHSpGq5r53L85ngffpZ3zyfWe9G1WpZtr67QGbzzdTA5UnCPDtdyfV",
  "key6": "2eu6tzzFr8fdUzhdpgtn6sdLTZTHHhyWDBE3DXfMMxLHuhWsZJzqu962ZbfyS1ofQkcR2Zb3GndSkhLdJFpPdvVV",
  "key7": "R9mYJytMxcHdTbFiSaE47T6Vc6pmLiq9T8F9BmEwWAh3hZs2z4yf3eYrLkbNLFLM3qfMgLCp4bSDzFmoC9txoXH",
  "key8": "3zRUppHxdUfNwhCKos1DmtUtr3Ui9YkEQ37YyyayXJyGgvhPNvbwkwpARKrjmnpFAUuqDrZ9ePsEGzbL8bNuwBwv",
  "key9": "2reFxGEANM1FGNCEnBS2LSDiNCSgYuJevsfnLkMhKXxnJAu9nccGtkykmnPjH4YbdUHbWyBenyTNpvJXcULpEsLC",
  "key10": "5bmwDgt1ohaqMGJwBhFGcMYBP3WR6WmcVJrGF2a1WSZqoRm3qZAU1iMtNP5GYpE8fRHAXvcv7ZqrneTJWpFhMjYL",
  "key11": "3mAhA2XTKmde1aBh1oyjM2b8zWQgbv36sBv1EhvYtauXTTgNREiVxAM6eH9AcU88arw6wsHuekpAcCWmUNkVbiFX",
  "key12": "Liy3KB73vB3rYbyDLTjXpvkBc6RusPZZ53zz8HVVngszcRZ489eNfk8YBfZyQKsy6EvuMhRiYEAKKTpCm7mbgW7",
  "key13": "5hdrKpxa8zijAf1HbaJ6RonMgXatXRTghXrTuBYBTVQrwRQnfFrkRhfMqSwxe547WAZa2RbNKmTM4d1jwxWKCoLD",
  "key14": "2tTQewpU3kMt7rGh3MfRQpTMCGuGtPjPk83eBCuAy6MeLK3AyKN4tFFvsZ2zn8BfKUSkU6ykzHBR1ciREr3Gvip",
  "key15": "4Mp9H31kM9vg1UT2TDjXLW31hPr1DGW2YziwsVTVmRwB38rv4p69gn3ddRndiR5HfMRg9TM1QgHhtR9D6Ycj7DhL",
  "key16": "2QxVP42Jiogby3P72pWSxtY62oNiySt7RvGntVXa38cMks2Y7j29w3xhmCaW9LLoywjauLaXw9Ec46H3USRVDoo7",
  "key17": "3xmyUppxhmMQ13374s24Tt71PDddbF7jfqAK5hBcfA76SsudNjfX7hBsVdAksRcN7GSiSRXsNPav7MJR1ozvS1Zr",
  "key18": "tVUtCG86czGWpEaJENkEKHY7p1aDKrcDnYPSxE1jCFKVSHKXMmg9jwVfS4mZgdhE2tZPM1N2nd98ttNsh13Xyrd",
  "key19": "5N9EvMVkRD7QJ3dXPW4zTcsNAMBEAyVHxt3Ce9V6EmkFvhBG4whJnnDdeQ4HRYrViToZ8doTqpxigWdA4RhmC9nd",
  "key20": "3T4z2xZTe3JsGbsSUoXPZdLaX9SNcXgH4fxSoX96ZPnRm7CcXnyp5wAEimdtGnw2FoaGm9VC1nQJEgzKQVjZ4b69",
  "key21": "wTgvx54qFjsUM3FtxRYkuWc4LaoX5BPqxjV3TK9kVg4NBiZzGur8To6ZARXR7tLm9PG6fshpESTqFgoLsSCo3FH",
  "key22": "36J4Srr2HU3XYKVtt39sbyG351LLWt22nc6M1G21MtuzgVkjVx9N5gLvCc9jtuk9UyUZHU3a5ywDkD8B3bRdfkNb",
  "key23": "5syMosm9ZH6CWvK4fjEoRcKuZQuy7FzqKS2pwS6y3gnUM9p5WBVvJq6soMtZC8Z4oh5ER9PWCRoojjQUNgDweGPR",
  "key24": "22AZbSbJ5J2LmHTBYet3iUWfz6MoQXXJx7Q6vCRZuKJr7JGjqx6byiyHxzm5yrSTuYXMpo7hDtXTNyxuLFLDMqw9",
  "key25": "5Cmsck5FxocgYGnvKYPVPtSS6rgMNaiJyFsL19qrJkeQyTrFgH6cjLjyhEPEjnWFxUQkrJRer6ie1dHk2buF4JGd",
  "key26": "2NSVZWEXaM1gLHPyfk3DPR6r3hmPHhQWSrFrCk1baHqiLsekaSMsVMaRkVKj7AixozWQ8jf3ga2t1xWgRrcammh3",
  "key27": "5qGjAqc4bTkHZifgnYokbisvBfBZLpPrxrEyek5uvF5eyrATo8dq7NDGsjZL4ouCQefM7kuwf6feyM8EUXvScuRA",
  "key28": "2B2kDVFT87A3k8hQeg1DiZR4WMEbRtJQQr9XonXkRmATALVjeDcyL9Akq3S8StX4hrHpd6U9M7wEZGbMERVRLsGR",
  "key29": "iAtTj3ze53MqrtLeGKQ4YxhLVSCWpMVpzsgU1YWzdmEL59jmc5YLKKP9qWU3eqjiooyhDGY7t3BW1pin96zkATB",
  "key30": "5pFhumzhzPNLXNw5SqUxRBtHMxK9xNJJAwGCQpUxkvbNeNSqR63sEcdq9mWGvzz5ruRHeAUeBPhbVZC649K3nRJY",
  "key31": "s2AzKQcRpt8Zvsm4PzTDWmAAvRYNXjvDrmVLpD7dxxxkf6sFKmHf8C2Wa2N7L2zuTqDNaG3DdadZWv1xBrPy1CF",
  "key32": "2tiuKKLMkYsGmh1wG1Z6XyihLimqXKHkTGo2YjciGUdjEAqWzTaCLTfFKTJVfj7o3kN7KPFb9jqYtSxkvRSzUeZe"
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
