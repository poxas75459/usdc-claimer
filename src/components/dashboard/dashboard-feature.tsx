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
    "4RoWS9ozaftosYDqB55sSPha2StKXCXroQJS7Gx9Wx6KKbCvErqZu9irJ2XcSSvs2zjvBCakYRgZ9uHu5Aip37PR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWDv1MFiqkDKShjxpEGPXtdLSpEEcdMoxqCtSQwtW9u2ya3efiprDzPugBgzsaa8vLeGzT8PsSkdsGhqb1KNHV1",
  "key1": "we6bBtRgp2enDKxXvYKE5cdh6W7ZZKNjXQnzhXjT6TZ4BNEK5uA4FfLemQuNajt8cGiGUWu4K9Zf13oLQTxUmm9",
  "key2": "8k7XSUuBo2XLWtsjBt3qBoJbWLQ7nSLsE7XKvQoQR1TdiqrkKbEtMZsuxFdh4Dy1GNEZHgU31ZzKPaLUAee5UA5",
  "key3": "2WdT8oeaHiPoJt6KdAefDDFaqKp483QuosrDnFMMY6grFTw8JaUPcysgPL5r91eGRHbhQoKuEkK6VLcCR2hXVw4L",
  "key4": "22o68JM3SmwNfcv4sF6VfUz98PaR2QY3ygqxY3gFrPRMrpQjAX9oJs3YPZwjow6TiMPWCyCk5NeY6YYT6sdHrFHx",
  "key5": "4bpZ3EQ1dDp7LbWRAbvvuwRpY4gTzbNE7B1aGb9TbFrnT2j36fomrL5jk1qdHNC7gYqPbjs6bJABbEqX4eVMKjri",
  "key6": "5ZWSLtBhKM4dxjozhDWoEv14yNNx8wJZPrqrWE8pU5y5abFpMzie27dgNk3kuSyDeyDhbGACY8RbhS91YHoLi2vp",
  "key7": "5Dgh6ysig7pFeUQr9EuKmGHUtV8scRN72yUpXnwpL7Kty7Edy91MmrVaSNzLsFg7NGdhAQf5kmecam8uYuMFN7rL",
  "key8": "3mWsmkLPt23buQzZ1jk6oiac5nCMcWuEN7FtHvyjhZ8woRe5WUKJQcuYR15Jz46w95DdHJ4yPhNAUQ6Z5QhJW1dz",
  "key9": "5RBtpBcPXJ5ToofBXo1CpJ2AdwS2WDpNYtghzAMny2A6FucUQG7CkQaEUTi8513UZcgzfgA3pT8a8vFXwgFpRZnH",
  "key10": "5xYMN96carB8vUvEk5v5RXzvV8Z1CpCTq3phhbKE2hpvSL7omCoSZ6upEX2vdDrXsWpsyscQeZLG5MZt9AwdgeJh",
  "key11": "24KiyHLP25tg48ZLGM4eyuKuHn2vYJSQtywFB8cbx9MRrCRwGk4J6tkBCnf73cr4WdeU6Cowgg7xjhP91yTwVtVr",
  "key12": "4Rn3z5orFEvFHMUcC5VB76ew8SkH7XphxvtLaTkmkTcG7c11brPTQeyXr65rYbHANfJ7GV3taXN86k3iJzEHUHF8",
  "key13": "5BrvPnUZtejx834B4DopoiwUXiptAZqXPdoYsZc6hSUaS6CxoM9oGwRLEpJcrgm4th6aXR1tLVH6MH2Gk9ZAgp9C",
  "key14": "4Q2VjcDmPwUEKX3rxeWmPugsGUBN78EMoaVobLCeGGjhxbBAe9esJc6Rwv6tfTLx2B83spmkt1ot6YtssScxebaW",
  "key15": "512GUTxM2WTQ5nemZzZtnrvxZEudszAyXd6D4ah4eKPdMsAoKmqgc8CJyzjYZbFpNpdcnWEmLXqzeMzWBE5Q58K4",
  "key16": "2cTKmA9TVDjEtCQHPZjWGDcjqkF7jAbBFiPcVP5wXPkoxroG1RiyV9xdAuD1XXyei9BbaVtGE6aPiPVFRtTxshK1",
  "key17": "4qmbqzh1K87wHNZ4peEuMXL2tndE7JPsAP2KPwgq5SL2tSZwNTnMr9wP9voabT3QNhnXz4Td5D2VL8Fs5bWn2faq",
  "key18": "5bSZ7DeC6pamFUQvfStvrv4pY3C8aMyzLj7Z8PkR48JU3KhbHjaJHmyrjCzaojrcTs3pyGCJ9Dcx9rGnjjpT7Ayi",
  "key19": "53HX6yFuUmSWAeVrhhovBVCeDpzddKbMPKbz5bMmXwrKRsjzPTSLg96p5e5498AQXjLnxv3qWaTymqmaRRKf2o2p",
  "key20": "5xwX5Dp9vFz6uRypXVk9ygL6eWrFFWRseKa6Um3XWvx24JUvGY8oND6d8rpwzagRBjywaQzNKLZdELRHsaJsea2n",
  "key21": "EoZgCoGUZY9hJJ8aR1TsnsktXfELq66LKmtKSM9GuPZ7tJRTK7Vw5Ptzvc6EGpdXVCD9ygSHrDMVSbdBGHbNDT8",
  "key22": "3vVejXXWvigTQTj21S7zvD34eWzEM2XJPYJ1uW2fuTJXs7xRbP5rLoDr9YSizRCzwpZ5HJanqs3BsxvptuWnhPhB",
  "key23": "RWKUYc5uUSGfZyXCds2FuASn2jBfhD1t76hP8dmY8qD334th79rJnhQCsDv11ECXa1hinktRmKmEHRk3wAaTj9p",
  "key24": "uqhtPiJP9vRi6faHZwLjNbNa2V17EfL5Nhb6LRmRR1sJ5BEfMm8hmJkU6f6DP4BBjwEpBD5iQPzesZJLs9o76xS",
  "key25": "q1uJMHVki1J6UvCViS3XpikATUmbjVQ9PbXa7HZfsph9pMPuEuLgVughrcNphDG2VyBNYQLwUdzbZdYLQ4EG4Pc",
  "key26": "35hkna9wMWgg4Fy2Pbf6j9NhQMtY2aQg9gs2cWnKiwhfPpG4SfT7Q7g1WSNdp39myEkZaaTbdb4xvNxJjXGGkvTT"
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
