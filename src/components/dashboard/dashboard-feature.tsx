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
    "37TzLbtfJgzQk3Sj3kxce6r3GYez7YQkWHd5eLXNjDTeATFC8qq2MLAyS6Y7YN6TSzpbMyhhX5LBScFh28tCqVUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqYu3uNECttzzKBNPVMo2Mafuiyt1S4A4y9qWVdjCNwQ5r4LYwjBfDNCU6fc2RsDwb6fQ8bMUCC5HqFwvWq6Kzt",
  "key1": "5J1hMxU4vtUsU6tZfrKAkcV9wkSqMoQXmoCfj4zfvvRx5GUNLMUcMirXG66kC89ksgpWRn4KQjqNubQX6Nf238tc",
  "key2": "3BveM7pSSg29NjuBDqgyVY1afGdfiRjRBgH4uyrbF6ECAFUiyag72VHHLox28fjMSP8GRJTjbfqcJEQ1EjVssGCt",
  "key3": "BoXvqNF8ccmVYpX9kRWDt6utuWc7DfqGUoaFj982GjG72XFXa5V6wjUnGn3pwzM6h4BHMS4okLhK8d1Gh57SMDp",
  "key4": "2T55omVhhC4gxMQogK65R7uhBoAaRQUqBNBWJgzLe8ovSjnSVyTVd3t6ry6r9AWDUzgoRXLdLP3xzEB2MSsuwNQE",
  "key5": "5WGFyZ1CMsUctRVByPxL7fnBqZnx9YprXSYKyMf9RSFzCa8cfxmEwA6TCEinbzcPTqYNdwZxhwa98St7ST7bczP8",
  "key6": "4JKUm2viTDAuQEhmUE5kY3hcMPWZ1BRXLTEw768ct3HQvoYPe2WGFL9VPzL3L9Am89xHJh8HpEAfKJscYRQfUCuN",
  "key7": "5kzrmRPprnJtwkaXoXFGwBVft1gnQQ1AB7sMGsSiUkDfvxxzFiVp2R6FGKL5usN7kFp8m3ZYsY1QQ4yjKNXqK74N",
  "key8": "5AZ97cx75VaDbtDfjbWWxWZZwEBHf5G8dWDJmA5hAtT8VxpezRg2Ppbhaf9qYfj7zSBwSaNNnqwZv8TSBHL4efJU",
  "key9": "4gcj2BsJBnL9d2pH2HjHKNuz2JzWMQBKnMnbV8fh3w9AhA87hhLM84QQSJTLYPyKRyWU8TVAi2gAtaC9dr2Mhm7U",
  "key10": "5fK5osWXxisxDoy3eavxHznN7aDmXTHuWLuYirsrA1CAynfmTJo43BWiVoaXMH4ykYEuqpuBExDiMGNNutHi8yHA",
  "key11": "3Ye8ADyEVyCz88p37HN3cp86GokRqZmsg82MyMgqWspm9Lh9b4xZR1mX5Wf4hY9RDfe17wwTTQLvD1Rnm8BGcq5w",
  "key12": "34qk6mSD7ZxZGwdcSrtBHDjiaMQauDGwfFWVEG1DW7Z8NiCK8NNiUJR9WubU29WLfdZccUbKriS4TQSEwLKzCQGD",
  "key13": "4sWxHjvYUZ3y7SzKeEgQPiY1A2urrFHNCVZjZJB5aGSVZmEyjhUQqHZgGwQA133PWBYX1ZFGTyJcxPmg7FuhdY6Y",
  "key14": "52a3xN67wGrSnrLr7JhQUpsuJVmbcLq6LeqU4HvuiTXTSvPpnKSf2wbB7JDJYgCeTezjNacD2DQy1HjpnbKZfbyN",
  "key15": "45mHxAr96XfYCyPeH1oV9BVihE4m5jmmMhfMzFqHhqFQ1YosH4ToTLdak32QsHcx84rsLjzqATDzFEqTVNDbbPsN",
  "key16": "2gDp1MfNvwXDyGn6U3Qdsrf5QPjJRoknsfkzGM781hXBxhp4CGjCTbnV7XL2DphPSmLWGqyXYSHjtzx2LE7LL1H3",
  "key17": "4Z1g1QcZHGoMj7JkTEMXygTQWG4Yr3xMmdSSR9uGmnB4buBbDmDRVSqpErPo1bfGFqVGNn1nrNYqszjLoDZPGKw4",
  "key18": "Tz11ttbuUms7nRjub6WBqu8qC2hfibUgt5cnns2HqAXPNHFTyYbmpL3xk46XpBkFm7ADNYQ2gWvBM6QpkaV8Gua",
  "key19": "4m9NRWyHCpMK4J25dpfXtEnFeMx6Fa14JDB6Ky8zfan3wMQGXUGdQ85QTnKypw8Ryr2uYthd1pZ3NXnV7vFEKvGv",
  "key20": "2xJCJfRkPWCu9uYDtH5Uqhs91KS6BzPehcLJYFWRYWi93Jb5VKcSqWgUho2MtZ58TnTyzdJoQLuXWonNKDVLsZwR",
  "key21": "343Kb98xcbZPKZzZMGHZfykar1yopDsRpViqd62ehGBcRdrpRUs58aKg136DQdq5JwgpGSD2FbZV3evBA7myv9Ys",
  "key22": "2RPaEMX4eMWgR6UhLmZ3dmLCkrAXGc54MZrirLRv2CYqMBAgRzUrhS1yYFzZHTQKtDEhK7p6qFb75smhevkrTXR4",
  "key23": "5LEtWuXAHVgWMzf27NAMBxfQw4VGX86mZkphKmFycQoKjAMeK8oiXEUqwvmraXQ2MNx1RHLkHq2hn3Y36grGcatV",
  "key24": "5RbPRLcyyrfWtTxeRNyBiefsVKSuS9Ax82TsUmSt2qV6tm7Bb4HSTAADVoAXGy5J7ECtqRnqizxCob29XYbHkjaa",
  "key25": "e71yRmqRxvuRYnKUaCdDFTUuFYLEzT2ud9Y9BATyYHBiBqiaWf45s6oFBxwsU3YfvLAEDj9YBJ19hceRoH6KuKv",
  "key26": "2pRQhduSQD7o2sPW4P2okBJtMXZizjS67FZsifXdjqo5UXSJbvTMwLQaPdC5ZJt9K81GbtyV6mYkwnQZr1T9T59C",
  "key27": "3bpEDG6qj61PXjkfhTUFkv5zs6jH5WtwrLn5ue9DVFZcJL6n2cf8bjyS6go7VyX5ZNnmHrXqezatD5mL8v6scpGL",
  "key28": "5nVg5v6gbpzRZ5X6iCz8qWF2D7gUuScYajURsN1ANKiyT9MejBEgS5hDGvJ84wTbdAGSsQSJFTkhyt4CChG2VZ6S",
  "key29": "4cY6SoHbnQCRzCkBL8qDzXf6wpYijuZY5Z1BkUPzHTpTq53TcnihG9Toi98qDdMQe1kt1r5GQKSgE7UPaX8WgVwQ",
  "key30": "KsDFcUX7o8UG9h5XDTcx8rAUEuUPSqvyD9TYj3AppyHtGaFKWnpq5Y2NjTHoHaJqVajei3evawzgKsBwkbmzCUE",
  "key31": "3Ntt8pt6mWjTVeagcbH8SMrx31kfxhCqpyfiz7d73LZfeVXvgJ3sKaZcZ9aTtHfWpqWgyh44xHijXBYRqjcS51zv",
  "key32": "PEDqxc5v5WFg6Bao7YzwYQE2bP19PABk3V2qBeR1LCgtv8rEC3ojdQaa9AnKYrhWxvabbTwoL5PU7K1cjxwDhwd",
  "key33": "5vRmAjRaV93HGM3RDSyta9Ceb6Bk9yt3hiRZQfgSSkjCju8tkW5y6MePwKXsj3a9dD1SHMA7w3QVjUi51WPtL73B",
  "key34": "5QEXk3YRWNxquQh5n4RzwwprVbsfXYE4UsaZa2CBzmxiYA5a4sa4SaCauGJ2DeZBx13fUYfUku9a1ZGzayGqh8Zt",
  "key35": "2KXnSNeNVCUyW9FPk5RWwLmLDKAzPPRKFae8VWWXt92usd331aXSz7jNNF1zvdP9RBdpnfXJmEH7LWDEcP5tR9A7",
  "key36": "5uiwfo2WuPyeHJUixnFDbyAi7Mkm8WQgSfXH6jSu1KHiHBRZLWh8arx1NLEkKYpqTsdRGpvH9LPpAB2gsNih12dp",
  "key37": "PYTYMfoQv98GzipX2Y38MMFkJztunZ6nuqvx3cvBP6yqQPwDtqT38H7pBxQ5KkxrjkK5f1NJDJQdyiMc4i7kdK6",
  "key38": "N1ruLecsVkTJ7Pue4iD3XHU4cbQdbTkWgmQYBisb6w8SMZdGFvWf4aQ7NoPw3SLcrcvht8EiBSUu3LSQfU4rjEQ",
  "key39": "8WyPnscshUyuH7X2xhSXZZRUf6XRgVNXsXxwH99NNrrXWunGMmtVKEmnjxbzqofjNZbwwzqB6jKespARaFagbh6",
  "key40": "2JpxvkH8i37gji6hCQmaB14KFjAcSFhqeEjTTaFBV5ARAXUuqfVvBgy1MwvfF55yNGLWFurtyDyVVFNffRzRbi1e",
  "key41": "3y7Qqw85JrUXFNMmew42Fe4hdaZdytygkrBVQP82zBrApzahquZ8oVKtgrwaBc9Qah2CTd6f7k36xXEVQmLisKjQ"
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
