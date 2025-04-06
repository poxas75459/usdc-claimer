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
    "3nqQfayrpcKFdqx6RY7STfjU53ZFLwH27jzRHAJmp2pa6LL29hA5KGckfu3WPAsSDk29MN8G8KkiMX75ced6PoM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "shvFEQ91a7VCuuDnmgmbPH9XeHDA8B1vv9sY9HsP5d7hJMmyZPynxP9hkH5ZWoTjYt7mg5AgPTcKaP88cgQMxPv",
  "key1": "4wPCQynYQ1sEtvcKqj87mdZLGZb4rVtTSTbPoqdPHsXkLjzByq6D727CXCtKSJEaE8Z4zVbi5AXfG9x8kBv7xZyC",
  "key2": "5NqnGCaRugRNhKx5GneiWnMioeaSty4p16j3rB37nZB7SoJjZanZKycEWmNYVdAxExMAExyGbCnzoswyeFBmnUkb",
  "key3": "2czhYBv4FGzdb6kEnhuDEzhrGvjTFsvtQjCTExYcxC4tXydkkegF7Ebs55BGYEgV5mXVHECRkWGZFtnMu1N9YYQA",
  "key4": "4oQXLzgfUSLkw14NkqqvYrCWFtc1xXZ8YmpzxDKmU2WyfKvf7HK3qnFL5QNYJkftiByxrGfEzAQDCbKD3pDXEVeU",
  "key5": "5rFRKN1mNWnve8oWfWjmAuYjGApYcjdh5W1xhHGDSWyg5QrEqyK8wngLSovkpu8xbzdU6ie6E1f7kFGpy61xrWrd",
  "key6": "aiT1naW2GmawZ8VWGJDBA1dXoZqVR32fxe3ai3K4tGJWJT5WycLTqL5ubLyLJWD5PFYR7jz3GFnbk1d6RQnJgqj",
  "key7": "2j54c6mmcbYdr7PJiMtu5sbYz2S4r5SajS8MedSsSMpD2UaFLeZDfLrJeiBZX3ysrhfxLdQB7xDT2RszTcsjKtM8",
  "key8": "26hijETANPoDXSYamMAxJYatYG7hXxVpu9UuK9rYzPADtnHpjHx3H3NGEr2YN48Zpvat6JqjQFUEyqXPfBu2tLD1",
  "key9": "2F2Z43hrbt32fyvh2nNf6RZSeESSGAb1XcMbN6tMUCgC3JTGXtED6RQkMR2jyrpWWK9GfkQtyV19PgHLzwZnUszx",
  "key10": "5Y1Dh771RaBLgR6655K7uP2oYwdDUsjE5PbBmuMKDeob8M3RHYep28QE2bpVTBj5zv97CZqucuTpaQ5L6WfswttK",
  "key11": "4FXC7WGHDCsAekN2xxTxkzRn89wkQbPhphCGU48qigitMu4LFCq5mQHrA3ifkyka2ZmYDT5PnysFVBDpipxKXgRC",
  "key12": "4cYLoZjkYE2e4zGmMxoHpKxWxeEP7E9aTF7Wh1kigt8xvjbjSgL1gyDxhDfYjaf1nCqS5RAUaX8GrnEZa8eERyZB",
  "key13": "4aZhvzFJoPvSBGK98XbfdyFrZg2YctUprqZmX6iwxnyAZC1u2pMvJHAe4z65rsEXLsRdt2iM2KERopGJyprdXZEb",
  "key14": "4ZttgaU4k4E6eYBGWWqTC6rXEDJJ1ZLQwuuu53zrAw7LMZvh6Y3GGGEdiYPD9CDjUNSDTXnbGXNMv1TaSXw1kD6g",
  "key15": "MYFRecFUPK3tvFNFzFkNQJHei93ijQrfNWrSbngf2FeMpM2yy8Dt9DyeuvTUVTdFQqEwuz2gs3hAr4uvmhgWwyp",
  "key16": "MsduoEEfk89snrE61SX2PnPefPcrA2GiiEWmqEBA2K8NdjAKYcyHpBheTtTtBbTJpgubaafpiGtQPeQFkqTXCvf",
  "key17": "5mgRoYBAPa8KXpdPB7JfWyBaFPmaTN8rEJYYFFmKnuYaxr31vpjdEfiEpdjdFanKSBQ7qUVNQ3coRCPtxowqjjUo",
  "key18": "4b4tw7uQofaVJk7ktdeT1hrcrJBrUrYVLCoxn2TmqX5a3P4pTaEfFhsmQqqQBAcLRU54q5g8NQgoGSRBBvqiFLDq",
  "key19": "63DbEGmMLLw7evZrdvhnHP9j4CbjhkNeS8gcvrmtjsvsFUR9ztrB8kkLtQ38VtWZusFxzjoQhaxef9sprwXk6mfh",
  "key20": "44kwV86V9Bd48xU9k1BZ559mADiVsHdHe6EJ4PqGLK46TBCsqEGjtYCrND5sAjgXgYu6USVp9PcvgbwXuXDuHidR",
  "key21": "4ki2pr8DGGX76PZGpTg8KmHDQrjTnFJqQdu35qhw9gzUeBENZe96p6PGjZ5Dy6S6ESePfTvDBrwYLBfCvrcxhBdy",
  "key22": "5t9v2y31iehTtrKSz1SrvPK1kMx3BPugSjd3eo9MU1ZJyW8kueFJ7RjtccMKnQ1A1NGgfQMd8mfCxibrANXhma6z",
  "key23": "4pcNFKAz5WXPrWR9ZL6Cfb2ToRAAWPCdXg8kQi6ZwbZfJtyDJ15VREEXQJxniJUxTgaFhXCvtqmKuXp6VdyyhyhZ",
  "key24": "4K6g5XctDfWSKDMJE55YFoULBe1b2DCzitK8xjUB1PAQYPgQr7GxrL99XZhf1cesnap5PSPYjXfJRup2P1TxDUZn",
  "key25": "5rJuj3obMCdUNARb3dSMTFuXFYfCaSVbEu5ufVrsJ74jzxbedQwfG1T81aTh2Xj6CH1DzD1UZBhJDkG1p329M16y",
  "key26": "4VVq7iRjQKNmVrXW7Pj8SWu95vJFfFRzFrou7MR75tA9rmY9RGbqzSKPdyAVzmWCXLtv1szpUzgHGVywzthxEnxa",
  "key27": "Wc9e14irCMJv4dJ9fr9oC1ncQtLGyLfQK58X9DQy5f5u3JiGBy5jFbRGPHe4MyacGdRhzjmYVBJdXnFNaf7XF5j",
  "key28": "5EVpMtZ1SEgnQcHnp4zcZizBy1W41SLoh5EYMjojhBitCAW1GGZqzAfqLXP7SABn8veerg57U7xSFwA22tou8wVg"
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
