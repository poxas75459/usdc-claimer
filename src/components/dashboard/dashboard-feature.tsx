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
    "2sRTiXpZwamNAHk2Fzinbjrvn1WxJEhvdcp8X5iUp8sKEK3fQRUy7U5aYUPvVcKYrhjJ6uWXMFmyaScGojQvQ8Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55fhnveUbftLSjqf5a15fuVj3cUSFziWTV2J6m2JyfQ6Prca5CuD3bvdtQ8LW6LZcD5BoDs71JZHzusDZGeAaQLE",
  "key1": "32wUFaEdhrTMtfuvkkiLGtiN6vF2sNoqZmtRE93EeJGLGm3XC6kxg49qH3dEP84pZxBZspd45zhmkGfYuucYhGfB",
  "key2": "XDCExKWL6KbPih3tPG8jkNExopCfiVg6yHrthqj1EvCzRWTehoeXCMM7aJTiUjLrpAr4ZNhmyKg6mVGM8DkEXTZ",
  "key3": "4jK8DNbTL1eVtqU76ruYpWoeNakkx8HGJgoTVxMC489ckUi3mRjJjeiPbffL3YhHnSrNbixkXME7MszXBsup82r4",
  "key4": "52XMcPEsPTT89uJ6kKzc68nrp8bbhyfMUmBsserMm2bR2dz8xugfNHWSRdTvJbePc2rXUQhp4scgJQRhkJHiqSmb",
  "key5": "4Z9XbtTmYFT6v9Y5ctgHVSduRbws5tp6tgvYqJ16NvDiSn34C2c9xGNHXonT3vQ3MGjK7R4RsdMARvhyZZK24s5g",
  "key6": "vGgpDQc5LkDJsnc9n4wMYRaxuo4WkvVsx5RNEWBLFeAUqAi1VsTtcThY6NjqTQ7trCHReAoYT4Y3od9vUxcGKSJ",
  "key7": "teXtBm8b89NbFu8iUWByAcrmgDWecuV1jAMpgThJCzpGyPvWh2AX8mX6gq38UkivEshrJvDKN8D9EEyter2Q9Np",
  "key8": "2SpMKTgbYmAQTtQ7zFCE51GhutvJRU337xbkoPWtKygAAA1pCJyAqhkmjfiirS4jzWimQcJrurqU9s4bViESJbQ8",
  "key9": "5Pt8fCeQYAcwShbewVYgbsq1MpKKG5mJVthDYmpGyqnJeMcmKXqfsmZ3ywwf8NwbFdNNyxPj6jr5DN8nST8wJ9Lc",
  "key10": "aVQSi2Apor5s1AWZa8RiNUni6rQtVCpWpj4UGrDUUyhpMFwfi5U5JQZSBqLefagoL7zVdYyAAgKfWEkaybmXwiH",
  "key11": "2p5Bn7XNMYFA99GEUpjX2xB4Pu4uipjjp5Goh7yJ6iRdEUbr8HXGYmMJTAitdqQYK7WiF1pG4NDGxfT4bwJWQ2bF",
  "key12": "9RjNMzzCuheZJPbyJHRoLoGLfdu1LLj5KTKcuGmW6RBhy937q86tmykjT6Lv1zZhTsJ3ACdfYTMizoSRiKqVAiY",
  "key13": "25kJSjR86j1m1XYPkcU1SfbJ3VZjNbndbWKEbrsiCg5FTPeTb7bnj6CM8Wjrn3h7jBdunKnAaTjANiezDivoxxfc",
  "key14": "grWHnGGUPWwE739KSWE2vgvsXhFTcbmJAy1CfKnGo4JBEwFb6HEKb3r8A2CGQ3amJAU2n3E3GvTkGa7tCwwrgeu",
  "key15": "5s11r1FPQJYYCBmVgaCK7W2aENb4DYofXt2HQM6BkGWiGPiY7eRv3w6yWtt2XuQcRi7WEg97t2kKqQKCFmPp3Xex",
  "key16": "3sjWsGUBCdM7svXrLfe3mqSEP93CjheYUcxigAMRWhKkxNKJZRGdCcszKwaQtRv9aQCtEwTwZPiPafjSHKd4XEqF",
  "key17": "3jGtqTnmqj2kpMuVMkgimm7a5opcoWNrpPT4ppPeLubVTFzReZkyBNzf1d6EfyAwFJPz8sRouvZsZ7YTia9fDscY",
  "key18": "3mWMc1qV35aagS1e68PAk1TR2Q4JsPC3VgYnFoPpVq3tvEWLHy58S4tZvtdad4LfwExSsZao4QXmqHwnStQRrnZW",
  "key19": "5yGHgV6pcwYF2rikC8BfMoQftNpjEZGoB5DjEdQbft9VC3BD9uwhEz8BPtJ5okVnn1WPum12pTKkfKHS4dyVZio5",
  "key20": "pfqQGK7tGTHu4AkyjcPWVzLVAd4g2jAA58A26ttLefuJztdJj5jNnXaWZfUyZGp8WRErKEC9a29kzZffxfwBDwx",
  "key21": "4VoGyvM37AoYgfETeCzShML6CUu1k2CKtsBxc7gKrktfM2mGpSm21fDDjGRoq3hXwF95sXkUJJ2u9DEb7MtHWRdo",
  "key22": "545Jffy3vXSzDF3sMTJwoRssH9KqnjfBhw5gqHTVm6tnWa977YwDk94NFtEZQsR4qVgSBEnjAczk1vuEcQz9a869",
  "key23": "1vqVHRBy42mPauDfXnCEFsUKYzbCudUyaoDiX7M4z8F6yC6JUHyp3K88tJXDPqgHXH7u1vZ7NvLBYtEZbyqiK9q",
  "key24": "2Asw1477Axjt1XXz9jcSBZPUcDDFy3WS4MPQRiTz5vddbQ5a4WYoJoR72KLudPq1rTy2aHzQFgaSECkcWcaMZKJ6",
  "key25": "gW5WiHH57SF6Z6kuxpWZbREBSbEeJwnnsX2s5pRnyXXFpkESmumK8tQxBewGG9faotJaznmSaGut2H3a7g4Kh7x",
  "key26": "2u1eJL3QYFWP7UDYTAg5oS9GpWijA1PwU1ViwsGP3UoBetsDQjV1F7AuT2JRNwrdyJkvSSe4jChi16sxZAEkLsWw",
  "key27": "3YPxHMYm4qhapFrZmKHLdC61xppo1EgJAqNLwDFpGXr7AjMtbCLhqrfaSsBs7U3j3qEpVweXzc2kGN4nYMHboBdJ",
  "key28": "3Xnis4YRL7JufBDdQumGQWpcCbK9BHdCk3VAnt37cssEX48H87dvfY2HnXCGj3nDmDyqr5kzbPPvnnbF2zK5UohR",
  "key29": "bNwvEYstg5JXciLT7WBzs9K9wT71pr3yPe7FNBYZ35cjmSbT3LToCYVZ65bNTPeTW81kc9qTYzENqt5DVe9irFn",
  "key30": "4Bfwcvv4y7kEfkHF7rSkqvmHLhu7SWNj5gsLSZsVcjM6qnFZWdGp3mDPf4DFZG4eDy183VJLpqGJKDVDYJMFC6Bs"
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
