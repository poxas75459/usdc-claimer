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
    "28dmdBNSZGdBz5acmA3qGSQKajw9aMHu9MvkRDzD46g4dAxXLvrCoPDCj1NbZ2dVGVgFrr1PogWt4qv8oi1kP68e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCuqmazhTTjxoMzdzVDUBRH4n1csjujZXoDsn3aJjuvvZsjZdheCqAHxkR9PjP16FpXDcJKQaU17D8xdDQCU879",
  "key1": "4TPRmL8xogV783tZBHFuoykb5SDxJok1yHH5cY3tyqGUdP7NpfpfvjoQKnT9n319PJrS2imXou7HwbhLgQEV5Kp2",
  "key2": "57822MksmDe8L5HzXgwVsYPHtdsez22ReiRdDsVnaiXMRtMoRQbdLfK2mDqnPT1vEAhj93tNcSqFGuEBdXgUAuGB",
  "key3": "4UdHXWWtte1j5strbvvcCnTK5pdZx3Prt4a9nTovPL41bLS4jvu8F6oqfLgYkrobRjh9MxTvpWs3ruc2qRY1TroJ",
  "key4": "45mgX7g7EdSwAZmhfAifrse94juewX8omwM3qfA51S4QfTkM8B7t4xiZKTYcKXB5tAtpukJ13KjK3WANVhRYibm5",
  "key5": "212iVmp8repX2QYfsmmxZ6EnSsq7CXW4kzhgdxt4PjegvEAqanPzi6rcKTCV1V7VTQDknuRy1o8wcPc2VBwcyonp",
  "key6": "3ErqPf883TsLgMNvWvVXU55meAiBQZz4kKt7LRbgfAqWmxNt395gsT1FRwRCADG6gTVY6hPHNNP9xWSu73JW5DBd",
  "key7": "5MCehMce8cHDtFkgv2aYgXtcE7VLdLzjUw5zdy3WuK46kpGNsdwjC6bunUK6WbkMfSSfGKjK6JqGKA4XwWL49EaZ",
  "key8": "65eiXPSemE398u1jHhEJ9ctXcpNLhKpECXazomqdVAoPa4HGVaF2LLRm8ub6EaW9wsynFkpLveyVa7uZPhmgQgDT",
  "key9": "3chkB1CMbmsYq3HdFgYP8tX5Z73E63AdkEmYVkp5p7au8ak2qJymGuj7GewJSHqzmrMhcxpwM1tfrHrvtuKLhiW3",
  "key10": "2Wb5pQnQxA3P9LT3XDjzz3m9Z9kP3RtdAudVzJqn3iwcAvwE5fAjeQwm2M85xshUSvFEcCf2zXMcwqg7FPNgPxC",
  "key11": "38MoNjceu2NTi8WhvJSn7koVRrHYzg2jtiKMcFkx2YsQr697QR1RHkeFnyEjCfuF5nzcGYu1BSrcCaNj2HWhuTgA",
  "key12": "4GGcQN9hDDtysKBp6zjzZC6N3f6sc6CTaYLzE2GpbQi7f7jb6wzRrhmCLvXUSb52b9obi7sxqzVmXQoYhpRBhTd8",
  "key13": "5yjEhqTroWYxo8KEyGAz3KWH8gtUw6ndZqdfF55kQ9JAmYJucYeAfQUUTC3fKTnAXqe8VQSNbR5Ywn1WJzz6VuF",
  "key14": "3R79Z4akPd6dRqwhsTySVKJasPsuH5x3xPkwBjCsENNRg73rCs3W4gtwCxsoki4r9P7yhXceyVw9QcqfqFDp4cbd",
  "key15": "2JWYDzyEk3tMQmoVv9bDhY2j3VW6JJhW9FsD6VagCtB8En8fT9qzoBpQqBtte6rJMHFgvjWazNiXhWRvQN5rsj6s",
  "key16": "657AfqxQjTScJWbRpEmW21E9ymZ3HqjR7GDFnkc3rQopzH26iMxEe4FTLVewivB6zTSTtkTkqsuRajb2FQqj9H1p",
  "key17": "423D3rAkp4qfrHv1iyX8hXpQpdUr2RneEYa4qssc4FcR9FKy1bDcQ7asWTEPzvx1F7Z2UWMy2Lh6s79kLVFxw6f1",
  "key18": "SFzpVxLdCPRRkGMFvm6e5xmUpvhtvnYHRHscZkjyRvtWEueCXqRpiw97HrFeEkonpp7BWEbdLS1mmjM5uoAXtrU",
  "key19": "43ZUmBxLvnizeAjR5q2SZqYdydAQJ5dCxnrtzeXHi9fze1BReu5r96Mg3jBjmc5cwegsmSUpi1FdZPLKtd9N7Na9",
  "key20": "5PG7CvEvBu58iCgcM6YGnpmDTUv1R8otAEkdzfD6bakftXd1gWXnAg4S1eiSk7nWYMg2qMGgBeZSUmh1d2bCAnh2",
  "key21": "y8kAcYhHE76NJz8L6LRkKn6BZDW1TrSkEgPiLSsrFcH4xWLeHgpX2tDagU1EWckwAe157u1QWwYK3o1H1LdLrmG",
  "key22": "GbModc1DY6nd2sd8Lm2GSsbJvCthBvdchuHWjm9xHD1HzzJoejzy9XkhaYKgcc6shiChqvqxoh79vP3GmMNavN7",
  "key23": "4waEzPNHthzxgD7Rhjim17KcCFvsjd5JXFyXGfsDzoZPqauqLnajEtgmwHMFMurRYLv4Gsog23SWES7Rgz31ri4S",
  "key24": "4asxCQ7BeYTTqCmiBnFDrxoVqYQHLyvbdKRAJAFrGgudyaBYCT6iPjf9FWbk9JmXVA23fLdPJ86biq6JVg3U95hL",
  "key25": "4J5iPw8cfDsAH6mQrojhkvorMENvk4mvjUy9pmr7hgPoXr18EJbgZYbgovjZkzeseospCXTdExebaNgdj55Y63bW",
  "key26": "Bt6zmSceJKFA6tA8nzGV5WAS7PN96ZSxkgdzDTrXgqndHn9XoCyYxjRfUFSt5B94ACrrDo9EsrwMRjXrY6wsU8n",
  "key27": "2Gk1cbVo9z72HzrTJC2fBhhUqd7GH9req6MeGrezsfbCyonmbUDD6CBFvpFARpweWvNKTAy3M9Tf7vMH24tUJc9Q",
  "key28": "5fy32TChUSj5rRfWFz6HrrX1ixByqVLxZADY7AZ3z36ECYdPbwZEbBbgbG3zPXwtSoxx3sAjAYqhahxA7TiJMy8f",
  "key29": "SX6cxRpMcckgNwUs5W3cd1GaWXoe2t9fMw9ggA622ZiUqZbcA64H7j2w7F8BvTEhPt1GQuxDjA5u5JXZHoYuw8n",
  "key30": "2V5FZtzUo6WgxeN2XdTig97yRphm1m4rmtGK5rtUSC8ctmnydmkfoRZL7TJrhc4aXqAGw42HkMtJGyMm5gUvfniK",
  "key31": "3MMp1Bv4R5tSNBS2djCTgwjyL46qaAL28Q1WGaWTjMtDHXT3C5NxGi5Qatk26iRgav9oPm4XTQmNXeYZfxuEy4fy",
  "key32": "4nba5qtRVWHFkAepPPuYisgpKiNuoyKeE1wtzi9NhPtTcN9DE4vBWBvfUGK5H8Wwh4QGSXDpWgpsw6kM9C4N4Cga",
  "key33": "3TZQeTB7kdEEx4rTFq9EkjD3wmhrr53vraBD8PHaP8NVentLB6U3GzMWBAwU2vbcMV8zQcxeAMshGPo3oaeaV1RG"
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
