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
    "FV6dCEkBwEcHhReDjGzsnQaYtzXiTZatNcdJ5MnjqhJ6Hmi4paAH9UGkhmhh9TDj89JkmkP4qBkg6VPAaNraH9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XY29ZtTqQHYD3urdopmohbSmtQdYeDAxRf9cQVmnDCt3z6hTQKWLKDLjH5kECHURipTu93KLrza4uAzktE3BUt2",
  "key1": "3FB5TfbQPuCCnZ3J6fAT78x6HRrDLa25qxezZhZkg5oo9vnfRqMBrk8LaRFTpy6TBpGahVBZnsbDu6pgMgXxqL9V",
  "key2": "4mCzWp61iBcUgR6DXrinjxibffdHAwqGGrAJiXv4Bu5cNhxCssbGvY4V9863dfHmbA8hRZtetxoLhZKdth3iy4xC",
  "key3": "2tNtqHZkeKqC6hkDfNPSATRHffo4JAtPs2SSsXYavCsDsCWDNnVyze3wKNUYadoHNoV7wxwPurqbiBvkemCgPxdc",
  "key4": "2DxiA3udC5uKAxc58ZWQcUAA4oPFPKYioFJogmtStMjqhJJggtbwBhrsXpQhCCZ7ttj3QJFU7eBByTqzReiMnxaf",
  "key5": "32dxTUbbhvGvEnjrjztJR86X1YJ3fTUnnvU2A6EMBty2RxNi6WS74VDQSF2fDFAujLAo831KZSRucWA2cHCT7nKX",
  "key6": "2uRbV2dzRv2ZeDvDCLgsskxcHqQ3osNGF5rbRA7B4rPYMgnfoLnwf4YZpJMQkwhA1ont1amDLiSKFEcJ4YoFidcj",
  "key7": "4bkd2zobWwuGRWCZJbiHUuLQo8zd4quBiGCLHcYVGYGMd6JH6JKSr4ba6EADD4bWYNysUS2PzKEAqtWvpMCkTqYp",
  "key8": "5Y8qBdLBW2rcvX9jv7ZXkDAgjtRBRLuBSQ3rKvkUh1RTLqFQqtULXGa1akQwFJtQNKdgvPUkGMXtXzEEnwU6ce6N",
  "key9": "2CgjriWUE5bZC2BVKW83Z2oVBXMk6twpmgRUP1SBc3US1mqw8tnkzwrSUyoYF47uNKbuwihuzeduTCFMXEjjb8mH",
  "key10": "4JYYxMh7Ywy8ojGVfjRvdXUMD1AyYxmqNpnVPGYZhFKoSFPYBZSqEgwuWjoPFFvDu8HijMCPQ7MZyDhu7a9RZAsv",
  "key11": "4gsQWfS4f3EbM1st4U9Jy28D7JZ6ziwxNuJrZN51RYfe4rzZjgKvgq62uApuk8TFYTwTsTM37EA6GA2qZQg8UDmE",
  "key12": "yLtogKaMFusUp6CWRaTRxwVcS6LM7T7RNGtSm5hQT3Z1E8LVrP4Pxihxh4VNdNHQZeN2NMCsFQ1W7pu7jhngFMm",
  "key13": "4MmHucnQmoL4WaNfCSQQ7stiHUV8qwkzHwT74pjVggqSNVa1UvhPWkxbXdYj3TG8enqQXuEsnGrrnzSJce2uebqc",
  "key14": "czCd1dYvrqaTSX2hvgqtD1NGc6kWiHmJn29RkUZtgF2evweQx6hw6rXbwkW9CrLtfHP6BnNYrmqp2BK2KVqmFiL",
  "key15": "28KSkR2Xwo9UVQ4ALx9HDMbtYGLLaYT9zyJMNmFoQQDTbKdx6xNKC11aT3fB9nqBMVJ8qWZUnjumfhVaxEruFuV8",
  "key16": "5WyybU5EcKHPDsnbK7FuD6dzQfs7Ffnxz4213C4VYUeDvoMKpR5m7c79zvFQ9am1WbMgT177sEv2fsgCXLi6iJRB",
  "key17": "qccsJaNn4so31siFf8Q4Lb7AeByQzrHbGSzFxc9AXcuALPmLdt73Mc38HsQzT2zZYqvTaGEnFT21tU6SMyUnQMq",
  "key18": "J2uwWKb5AcjssdAi3UrMoVQWuFSnMN6mCe51Z95ypgSRAM5kRP4gDZfj6gtSfuvLBHRhvjXYnSqnnUzzmThBRX6",
  "key19": "35a7N2zDbifrdHrJybdg1d7GxWGPWX15rdPeik9npdNEFiefYbzsxDUJeA2cGPxPV8tonyCFmaoQ8mRaTqgdnqkr",
  "key20": "567svHkzMpBcM1Z6snABzdyKAfNnaSwZRt4pYbmRUBjkm9ygzs2oHhn2QJKmTGBHumUAyEDEZBF7yPF8uzEMkatW",
  "key21": "4VnjUgRvSEAtQHeEwnQKPVQY8zhDnoYqNACUPHUUURbzX8sYTBXKrrNgB2TJ99UTD1CQHk2Ezoz8ZyfkMQKon8qR",
  "key22": "3n58xPeGopxuTorEPo4T9ZxAfykGJRjhWNY3NKZWczhh9LSuLsefHp5cKbnTjRLnVUdEwZc8mBWrN5BzUxukpVxS",
  "key23": "vpd9HeHKNAKQCrkjw4wSVGWWyp2sjyNEcUq4GPb81VFSnMhpvjjnFfNTpsUWzCipZHR66nqG7K9cXxt4zUt97DJ",
  "key24": "54D5zjdgJ3y8LPXZNLBTD5kVV3kijeA9sudEwMQHU2FNTHZmysyNP4VWn9Z7jdo3y57picZGQMJjmSH43X9oAxrc",
  "key25": "4SNMbu1sTjr3QdENL1VMXB6izrBDuNHhjxMqcx6zGuN7CKX4Ah9YVUJyGFsb8razZNicLyHP4yWbuDytEWmj6rCu",
  "key26": "4TV7KiKWnVLYm8y6vcaLgFPkWgmxhQcTZhvCccGpL6bmwNRHgcbEPwNhgZmJy7HKtQUFjTThF75M6sTdWju76ofR",
  "key27": "5dgVEhQyzrBkr9AMsJR5FZwezUu5Z66aZUjYAh975ksoiKmvzEfaLNUedHw7jyW4WEyZyLo2bPDGGGgekbBXSvQy",
  "key28": "4vPezfjLbZL8nJP9ctrZDoKCqfMQC1pjFVqqpnX2Mz79bhtzSzE4VjwZ6gVhEeUHXCDwbNnTBQG6Guj4pXhgA6Km",
  "key29": "3HKgb6iSrSTxE1VbQTCWqtQCgEmrgQ5e6FhtAKyzstQfZfseecyvYFPxUG8dCB6TewttVjYuWFXdnTwnoRKs1Eo6",
  "key30": "3RFWfsKn7Rm9rktChuYJM7zv6c7qwDy9gB9nE9BdkmFtf689TrPBfgjTx3moV4qZP4bj4EHyqDHaeoi7Kf1vcoGw",
  "key31": "5N7hWeMBhX1s3Poia5SPvNXDHfkE3WpFNyxmzVybKrcbZ4KCgkUDEVCXVWvA4GVWUvHQTcpD7xS6eLt5pSdLmqcE",
  "key32": "5NAYtpP1rgrDuwS4PdBJbnyaWw4N3Rc7E4gX93eQyhRSRo61YeRarb87sssmcWvGhrMRU4gKhkQieEFsRyRGQqcH"
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
