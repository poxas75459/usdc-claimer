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
    "5AdDTR8tjm2bpKpG783AoVbfh8TnSqAPHLoeUjkrYGAfX3Mu8D5DBAzydn8Aj2qgKvBg5YbPZtkd81z9WzbE4GoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUvWXjVpENZuKTW9SYsa4TDY4vzhDMtinHGXvEEMwQLp7ijKRro1gGSGGXHKvXjrkV9AzDrK7zhrvahrRBpqzkf",
  "key1": "5c2exTRWHMkkS7MvsUttez1ES5ofw6X6y6ke91TDU2a2huAbRMajJSLmeMAiGVQx4ZqQP7AKMDeq1cTrQXwQbw88",
  "key2": "2hMjrUgxx5HdRzcexbMZwe2XwUEWLToySWuMtQKCgDurXSxLS8h8N1XRYNs1zeh14LuAPrVbSJ7ZhyAxj5pR9su9",
  "key3": "kut6zj5gkCnLDZgDKQt5g8brGGZQ1deNyfZTJ7SZtprzDdus4zuGwELJeM1rmFmVTFvqXTd9Hy28rXvcJizmzAH",
  "key4": "5LtaN4RyDGum1HQxna6oAZW5BzvS1wTM54GjkvLqk6r5q7q2eNQVMWSWFMNJw8K7z1eqsi6y3gkxxNQzAMC9rPxm",
  "key5": "4qycXwMhPAsD22PBKmBHwXu4sEpcA7ei5jaHVJPVEnGmnWbi519H51CM3VKYehcMDZZNkbid86oEHbjLn1XYQt3p",
  "key6": "jbGVCwTVt4kJ52N4zep6GRnQynyyHUzcsnEZsvcuhPajYKFiXpXvbp6gGhUQiduJBYePegUc8EahN6th3PUNCw1",
  "key7": "SMFLUShC1xfHEc1SW6CZRsP15ve3hvSnj6sPnnGKUZMr8YcMAGpqaxcseit1oQ3dUgi45XcYVsXTaHezBgcyskC",
  "key8": "1RCnHXkTiWiCUrZKgpuY3uatd8FnUYVeHsm2WrYF1thPSPSiaawf6mEdKqx6bv9qw5fMLdJzfb1vRCz3XiuCA4y",
  "key9": "PFQHPueh7QdCnFiVWA3raqcmAuHre1TRbmQy3S1MTAJsSpFcDEqwBCnqyqMTraZfa8CDWG6a4xPgs5e9fNtqRWZ",
  "key10": "31pcejD4XLrjfZdVvXAuuATh5FwNh692MEBr4V1RMtSM27pSZVFENWduPJtPBY5YyNo34AbT8gHJzJdJqUYZ8n6q",
  "key11": "4ApKqhj4hzqvteL7D7vCH3oypBT2gzb2TENMC7iFrEG3QTQqT68142d7pS4AJxFecLgE8Tg7ByWrDZ9LJZcZmcci",
  "key12": "4frbtiZuL6xw2fYXM8v5aYbjto7iNZfVTpZrD9wUEnGPdknvknydzXxFLuxhQr9XgMSUF5E7mUixop4zV6jFQ71S",
  "key13": "257dBwWtSq4HmckrbSd71E8kMMFhuK1cYYS8BnMHNhNccdb2akXcpDw39cjjXNFPfAqQawE9sSoKXsR5NojNrpGT",
  "key14": "3wRp2ydPmV5Nrd87qqb8QpwAqqzuhciShxqGthsdWAUQdz7TtkBYUMTMiDN6nNtq9Exodi9fadKZ5TvPFsZKYHiW",
  "key15": "LQERXefdL4bsDvB8whrYQuWotoz7Lzu7bWurfkQmzWxZu7wMiBGwwCPeoDs5QS7SBp14qTfDM6Jf9FKxvQPj1qQ",
  "key16": "dXM7hGC3sj2xYVXvPZXStE6p6FpLjem3kXTpUtXeDJrsunCv97bmvNBuoDMPsoiqtmtzm18xYMcL6MShPnQiDtH",
  "key17": "PHuAZc1QFdbfrciWPTpiMi8B4M6kDSrGkJYSdypL8dum4Vj3Gt6DUpf9QqGpiix1qb3FzefrbeJSb76SxPh5vqD",
  "key18": "3oX8uz3dx2qUM3fogAME1upwZEvGLT3AcmwFTiPc6TwCBrqbyJpkJGSCtz6xvF4DBSnuAKxxddozhS38H5mgKpFj",
  "key19": "3XNVc53yTbmMyTyVoHMCrDXzwndTSTLsSBb6s275ijCEEqNBA4BheqUSzEHzzg1NXEZBkhfMdzc6DsAbj6Hc992M",
  "key20": "31sLhki59ckP2FMFxAwFhQfcxMRy4S8hgURng335EWkEivB1xy3dzBTQKZ2bqE7rr1wL9R8NJE9pyyNAQqib6VkP",
  "key21": "5VFVNDKEVqkbbGRFSRPon4AMXZyeTNEuRuXaUaAvtLbSeTAHunkkquPtxWzxESDjhEws1RTUPY9jjojUKoFC5863",
  "key22": "2AbChDfAkKWzC3qQM93JGhTzG3fPgew5pppcWgyiNNyrumRRYJ21uMkatVcag63iHbpa8QoSzx2buWvrjjSDnoNq",
  "key23": "5GeNqFhrs62VWZKdufjqzXQDzJ1HjMmLXa122vZZBcgRogFsucYvq62FFDTG1RvrCjRuvD6PVKxdMpwuk712TajZ",
  "key24": "3dnFw1RzktHosciSYn6yHXMrTwLrpdgTVhqkZz9Wz6Fo1EmMSAD1k9TfPBhCaQe59n8iuzi8Feh4JBw4jPzKL4ry",
  "key25": "5zQ4dD4jgdjHionUTwzkPx8VpFJ8RMzRZHNVQ8TLiyRs5KEDZV9Zib3xCb1Y9R5fxNrpBKs4YnNadM9TzUMwTvvM",
  "key26": "4MNDDzVv2bjBwHzooZRybBDQgkbAfjEPgM5znpqr6GiTM3gYiZRmQCisdaSd5achzLAd5hHhehou4AKQYnESxC7k",
  "key27": "5YpzH7zUXim2Qeq5F9BD7seXfcUyD1yba8rqzgd4t1xg47twww88UWhzo4J7r7yWujkBaeSBuQsGxkzWPvnBKF61"
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
