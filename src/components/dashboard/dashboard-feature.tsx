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
    "56pbiRp96CpT92hzyYgWatpEK4SV7Urn7JzZKELXCv6TAMqFB3vUu6CzGxMctA6VYaBH7dR1VvtPa1kPebiTmdoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KzxgmcXAfSx4qjNPd7mu7pDUHnq4qS76p9A4YuT3X5qzU4RnYh2mPWg5fZ8dXzeY1QiZYVqJzAoXxtePjBRJJmK",
  "key1": "3pDDHWqUH2u8ysWy8snZZBywJuezGuywEuEGpRNTgd5GXmPLTPsyRZvm3ZkWeWxQxQZ5fAikues6R4iWwYvNjgga",
  "key2": "43vxuxmUgdheTuVg4z9DPEoMtYVB37PfpR9Qu6vpEpK6KeAvjNxXrhqeMxgiCLrZ4gcm5JYSvT4zuKqvdoVxxC9H",
  "key3": "VxQ997SJ2YXEzx2267w7FWbPJSxribGvybb6xUZ7jo5ex8xMFqQfDgGz3d8zBpoK8vqs6ZXJLQSYUzKJ7bdLUaf",
  "key4": "26v2udiYBBFJtXpTyFQmPEoVBWqVKh72FbgMrZPJifRfZG5nmXeneXyFVN8TKyVdd7Rr3KC216hrDH7DkXz7NYQL",
  "key5": "2DHQwfSs6k3gaPNMYPJTsP2Mx5usDY8t1shiLj9RreywcpDLhMPQ7cZw2WW91ASEsEaYTS316Lc2Gw4pibC2vGxj",
  "key6": "2TVduVFdfJpbUButut6m824mujyTxpCdBbZeRryhdhXV2VWntfHQ52UJc4He2p5VqX57DzJWSMsHt5nF762bmSVw",
  "key7": "5nR7KoaaprQo5CvaoeUjgyC7hwn8aogCmokERpsamah2CJHyjxLqZkMvxNpT7k6Cjw3NcdfrweTP1ZHZDCeKq6Py",
  "key8": "4UimSoe1YdZQETxoqdpXEYscptsyWwd3VqU199s72B2FMT8dqctcUcQx8BXNQUesGhfvc9P3vQdNQEqafsFCv9Tj",
  "key9": "5BcxR8KXQL4GqaWKxENeyJfGbhoCGS54xrNUdZFDy1s38V9AVa7Rwfyz2Yg7HwcoDyTMUCyHza5j4SR5kLrNa2Hq",
  "key10": "5tTbUDHs6akRcKyGD5FcZMSykoPZjGVApfq2cQNcsQ9ZZ81Y1ep6RsXURer7P2dVjWCzhrHAEnxsA9t2tPRVMVtP",
  "key11": "4Xp6q6hxPX62aJpvRhPHJAV5rZGhJug6qPjCAyNNmoW4sZKKXhfnzSiYLwLC5JEJdmvapa2wd34aTNGuj7m2ztnG",
  "key12": "2RcMzhyGRuViz7SLayTg98n3CivJYABcpdbM52PGS1tP6HvmSxikhQ7mAoCkBk7CYvJjUZprMSBpQ8feHgK8Eyzo",
  "key13": "3HbZ3Bc28Jx23s9EPX9ZcVTEd4SjR7CF3PKFiw4sxFrq4wgPp52wQ6nJwVHJRMdqfNunQWSzzQrWiCypRjihqRU7",
  "key14": "5Td3rFeVDxrc6aiRnSKsNRXibTL3MkCPdCBFxRw9Paq199Pbz8iAk2FhGozxVBHDi4YUNA4sXF2SaVud7BdtWECD",
  "key15": "5knb6unjW6HaWmJVnvfxeBCyq8xhwN3WFEMhzVjiuHVLBVbG437rX39oEj3cAigUYKPrD9HFMef4gmmPMd8tQL9D",
  "key16": "4KsoWx3rX7gki9QmifoUYu38e1pwzsrQSjNQVRyJCP3rCDiedPXxuo5x61mpb3or2VhoxQajXnqNkXxKye6sE62A",
  "key17": "2zJ44YcUxWpHjn3NcsRGapG3Auk2Nhe9sxmSoGZ9Qirhpd9MT261f33xpXNVh7WNZ5vwbuys9rzTXUioaoYfwGbP",
  "key18": "3LzdS8eVQfcKcZgFsiYvc7bZzXwYcyukrJQ5k22fJEQudZZDngXuqgPXyA67ugV5fKQSpmVUKA4AKSovookUrUqF",
  "key19": "2PvxhGjUojDxH37Pz6KpX2Ns9UZ7DkPmGdN1gyBLDRGCCiSew1wdYxawbYVu1hoMuyuVXAX4B9jCCDM5eiKLZLwr",
  "key20": "2TwZqpHrRfuM3wqLv64RRbKCK8A8QAJdSRPTgL4uJsbSvZfCgMCGf24oWksVQKZ8MhDmnQPaeToBHMUXDj2dcbKk",
  "key21": "5BAERMQhzFfv9sDkjQ8pDkt9NZhYHDrgQHbXRncEbskbk2bcWHWnYkoQJbCi76hHjkNzBVKAJEQsmYLsJcC3krjo",
  "key22": "4xSTxBJnvAtABZRqH1VajKhFdSFD2iSUa8Uzti8MqSwwqD4bbhR9ZdWxwZssRfw6FyqbZL65yraH5wVrg8emhFte",
  "key23": "z9AHaqgXpM8o3i8VmxP2YfaqKRh39CvHwHHQL8MJb2UTseLe4ERfSXzgP2LPx64PJoevB7UVwBTqb67h49P6sJi",
  "key24": "4qtxmAka3hYtQZQfXtbLp4UU4k67iKhCKgXVPZbtNo5teviVXKisY8GQrXiLPXo68WL2pALp44aRdbqC6CZfB1Vb",
  "key25": "2s5yyoh9v4Pk8YsE7CHXb3R5GjwLvvTNGugf31gEhvsVpogbWvzKCZMDU93jcrPCcemCX6UKxxZScL5PvCh2i6Cz",
  "key26": "3NJ5PkdvKUfoFNhKcPBkJ3nb5dUB9bSWSx4SQsdEumkFrPG3d9qLygcPjwjFAtbnKNxZJUYUczgLT2wpdW11CMPQ",
  "key27": "3wpp1PseekZPmJkAY52eEh8FfoEUJAXXE5LLkqEQd551mpNreekzj1dzkRb7pVyKdtHk2DitZEJopBWrWncmUyTA",
  "key28": "rGDy1bWnZmRg6bmeFJu4g2cFmiRRYN191iB4odKM7bLi9gz6JGJH73xujfYPxXc811y9uZHdUeL9zTnu1ENhS86",
  "key29": "4WkDZ9uscpZHcULJmGSq9dnekq2rXd8LHQwyLN8fTpqcQRkRKWWcrjUDiDE276F4hPKvcZ6eLfJRyaW53NeEGQBn",
  "key30": "5X3p46qoW5qxzXLs1t6M8UpdvVjAEYw36Wg1rduveMKi1k3i4jUJoGAPfXKsnbJ13GdfsyRmm226sUubCqsLUNhK",
  "key31": "2XYpu88RX3qCSLYioKjN6u7GXR8HDof2tqyX9pwn8vdbkrxA7ZQr6VoZveQ7xTcfDtenVqkPYdgCXww84e3Q49vt",
  "key32": "2z3sfiJ6cNg4soYDTq1Jew68q2cmkEFeUA6vcWTH3imb2M17bujuhzxJ8nrF1x8cHmLZjGn6FhzwCfmTkRU9m3fQ",
  "key33": "PJmh9nDXmMCSXFq9VjgV8rpHei8qcQEY6t85pdCPs6FaA5CrhWb3VzGLVUy3YtBizgbkmeJxijctnaMGwgVK5fN"
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
