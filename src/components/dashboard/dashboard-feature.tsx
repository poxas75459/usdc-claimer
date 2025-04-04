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
    "3e89tk1TJMMgMFLViZKtbFKaVpKkbUEkEHcPdkoQgWvd8v7pAnPwZuwWrc6VnGrFArDUrnZ4jcrBnthQAXNSASWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28k6Bkoc88q5CFz8ShrjdddPLQB1UGNQMwEyqykUoCjELDbED2M22rwS6prhTG3QHCaHGGZ9Y76PdmmDSisnmHQV",
  "key1": "2r5KhSWJ7DeNhbqnKDjZ3q2mTZkd1zd9JUN2frTb7JxUKWGS4nXECAPy3HLRhx5BA4YmJ3pvYrH5BDEh8CajXc6v",
  "key2": "2Lp9UVa3a8dfth9E4vajY7rqwt2tKet5FaRe7p2Japz8zNGVarv1Cjbq5WSgZXQ2shebBFd3Lj3Y6STarDSFtChE",
  "key3": "sEUs2btrcCPXoauYKnjppAoRcaKtgqRUFYj4PxdyaQTK5s6xBeGyvMc2Z6UgW8eJh3NtDLK32wqeG51f8funvzB",
  "key4": "48SDpaAyxwTZdE3eRLAaKgPBshuX1XeHtGLqouXcH52tVWDfStbfTT9UtBYjwNjQfkW1LrsX5212XeGeZQp44X5E",
  "key5": "2q9qVrxJKDFZMJtJgRj3Kt7vQM6Wh8fcFDaiFvjD6HEkqfVzDjUi8X8Mo6uLMVMoeExjUZhqC5657Td4Zk1TV7Hq",
  "key6": "5wS2vEzHtanKDdXjJ2XgjUwdKfDyfDTnKkUxS1Yef95qi9GZLFJ63TFkVh97qKVjeV66234N6QWufJteV3TH3pVg",
  "key7": "3SfZNjq7NWqFX5knuhu1fYq7rnK5VmGqKw8SJygracvU9JfAHCvSPXFG9dL4Tr38WXcb2rni28hJo7HbAsR1RwG2",
  "key8": "eYZ1qHxKy99ajBq4rmHm4mNH9yDLHyocey9b4B9A5fd6ScxwFvd66mQny5eDsmxkvrosHJb96fY9d37ngPVfvEa",
  "key9": "3aMCLSVJGsJxTkpQMWtVdntLf8WTZDrUVuL37cCBSpaxnkJnh1yVormZcH76n5wvfVf3GvEwuPE4j7dGC4iEimxh",
  "key10": "4xA1CNNHs6e8Jhu8EcGtGtdiTUbxgbcoRq9bznMYzFjqZMuhwXMti6mZdfkvHz7DnCKoxMH8Fpex3D3CTrLuzCMM",
  "key11": "ZZUxH1ubdFaHPNG8nvENJhtxrp2BNaFxtZyQ5tsV81aoB7aBBhWNtQrNoad9nPmWu771Ap9rnk3PZjW2LtCsp4L",
  "key12": "5yxqD1X4vvgDAEK826kbVwoPTw1nGPaiqkWTsnA7ggpjwUzy3F7MZ4tji9ietBktv2AMQj9CoiSoYoCmYUCWTbXj",
  "key13": "2BbuvLPArHvifhGfkx4b5VARch8r5e9sTbsynP4bGKgmBVZettQLYFHFTrRgFwKQ1bqUgUu98HccYfKA4twVwgQP",
  "key14": "42RVFTQjV3GESTifoJYg6N55qc6LC1Vu3JrYKwXNmwhPotAkGXznmpuhpyop5okBzqahd7qSVrTXghzmFpRSAxfh",
  "key15": "5hMRZxf5rZNzqYGHMW1Tgc5LfeVZDUy2iVCeXSHBCKZL6438YPaYPycZoT4FVvpHfJrwyNWkJouEqn5zeV4pvxyW",
  "key16": "4itEEeRSwryoXCxQrB1YbVjg4ZnejDW7hAoB2b7HDuSMx89ETe4jrtbGC6uPt8HxRn1EsJH6m8GY8hziG8NFZqFt",
  "key17": "4rdSotNfiX8jzhNeW8sX1D63aTjeZPzckyo5LsjPEjcDbqdotoKUqy94V4rufjhynVTkqZXg9macFXzomsuo9JqM",
  "key18": "37NcGWSnneFLPymHm3gHSw5mgbfDsqij9E61gBA3QzTPyjQNr8sDZLiZRHnxMmfH6rXEXpSefF9p1nSnPYDvKoXv",
  "key19": "3cYvYJX4eP2pVRpZqCSTSUdAhjHh5pzb8e1rk9bhJwG3GpbVvkDi5qpQJrPrwnox5vgT6Ka3hRYbea7EhdLuo48k",
  "key20": "2fhcuRfXn8wQxKyG5nizGKMYuChVUGoy88GEh2XMPzV6bybk7oFPEaWLQSVsrWmFmapyZpKZcoAg3YPxP4ZBGAVy",
  "key21": "h7ogTE9WKAmoKWfQVFtnjNDFwJndWrfRydc6zy5DH4rWihC6epDJYHdME17djAjQM1nfPbFrpeT9GQRnETjaqon",
  "key22": "5etFefxkj1F1CRLzokzzXViLmTkVcSarC5EibVKUP7GXAFQupVxs4spo4YNKkxWNF354xTHLEaR2dnhueCp4rLA9",
  "key23": "3z5LLftnETLi3R2UbqKvAyV2j14wNqmBHHK2VwYsPSxndVsNHzzYja2xEUwSvae5LVA5L1yAq6L598eMZkrU8wxC",
  "key24": "5KcYUixQwm9TtG98Arh7s8o8BTKZFPyHX4XrZDhQ9ffxedKa5cAg7FKQ7NDByFPitsrB66YYTP9hDc2w1gNzytBz"
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
