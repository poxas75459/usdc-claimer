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
    "3aDSZGpTAM1QNxWeXSCgbewGjR449vfTattcNfsNicEbrCDoBqnB6pyJdDrnccjH6i2UssoD1bkdfEbtX3kPgpkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ShvZ89REm2vb7S9oSPP54HQ54PuqDihiSqaWmTsjxF8KgVJ6BeD5xS3VZXRULumQFZ4kksem7cw9wpEiqFHnCk8",
  "key1": "5MkFbnPgUm6YbE2PfTycbnF14XvsZLWZJmXUBHu6b1hT3axitAHtccMMxhV1214RPFpX1WjzGJUXvSQy2nPFK9T1",
  "key2": "3WGJAUBMnzqG6sX7Nim114h6S1nkMYBE3R4MwXf8hqYR8YBM5UQvnE6ALXQWhxd72vEUCexzHqFxCWheDUSSvyvD",
  "key3": "LjPfSxzAk9xXzA93cuZh8pB66m9ju9UDX1b5w5kVUinMvfdKfmjZ5VBnBJUiWMnfzgBj7MHG9VZ3Wxr8UoUxqrT",
  "key4": "3qZPYHdJGrxK5ecooNvyrgMzYQezjrrRHR4vpuE5eHFeeJzZibFft4tv5YCHbbTTKoaztc9hr3cyHYHAkm96UWHE",
  "key5": "4kEzejQwsm7tdLSNVuPUXtUbktyFRveMMAtftCNbPa3wdxdqDcVbyuQxDdNoLcYaPs1foeuR9MfCuvHeVsqrWVwt",
  "key6": "2x81LjaWRA2cRTntA5kLHH4ARtVFXz9sRdPy3umq2d4xdACrDvVT7dQrve4As1duqayBzK1LNqPyBd6YV8oL5a55",
  "key7": "45H5w1EkKHhfgfnLsyMVGQLdNK6dLFGXmfHgecH1bpZrrjMnEwyM4FxJLqHJC7b4csUHnszdZzRbGPA5setHcwZa",
  "key8": "5W6ZTq7fvkLNEDJnpm7Tbrx5gPm8BRDd8pDprzoY2PYK886LBJ6GWmASb24RrzsspgswPaPjFaW9tQgopBgEZ9Za",
  "key9": "XXrTTB7PLEcHgYBwuMPsD2TiufY1zv32bRqrkGu1Z4mB8twLhDPXsYE5WC1kVXsEudGv8tREx5EPTwPQNrXXugR",
  "key10": "NxKCPCnxxSmnu8uBS4d3mU9PJZqmRoAJLsV7ZcpcrNBHGXE1jPKaQiQWeqrC9MepETXzBLKNty2eMyMSQkK6VKp",
  "key11": "29myvnGrsuwSwuitCSnLUkDaqPdQTTooGU1VC8AREdoA8NM43st9Y1QbizkiKAYVaMSSsLgfyGYbF3o8ae7uMJza",
  "key12": "2EHiQYAQDzcGcMmWTooo2Kf9AXNnRoF9n8EokHfdCTYRyvH8RNyTzige5wM8tDE21nXTUQPM3Ji7SA1BffJpK6PT",
  "key13": "2unU6dz1QAPfMGgfFNAkTCL41GkJs8XBTR66TwRLbubDunXxoTcqNrKqPAp7GNMPk1fsjr8yukLJqsfj75Ee2xTa",
  "key14": "5gupRjVq5a4tAx91jyheEPngXfCNFr4oLXvYHvCdSUVJYkLPib3XU4w6KDUuNHERJ4ZkeUp9sJN9QaKaWTPc7Zk1",
  "key15": "eEyFzkdX3a2G23YSGEdZUnrXpWZ4rqzMtE8Qr3uYoEUh752Dq79YaWcznfAcBPYa4gTQNp7sT3euN6QpV7qKeKo",
  "key16": "3ohpWHbx4iD9MRMRTfKtpWBfNNdoPGo12avWHxQCgrhKvhGqnNqeHBCwdoRCQfrkYZkGVXjGR4tRP4B17jTLvYY1",
  "key17": "54ZfYsezx86c1THJKQ2NteUoEyi47m7QJ32X3D6bBu23uoAH8oZ9t9Aw9FgdV42Sb5nZ9RRr4d1B4NZxxoEyvWs2",
  "key18": "5pWMa5aaSj6xNWX49EE1K1NTqAp5sXWFkHgX2N3CPKfua9k41FVaTNFXA1QoxGqV4AZb1ratVfJ8KvveQGdJGCEt",
  "key19": "TQG4Em9ctVaU41M7Ux2Ba2JHtDq92KQjmNB7fchxBids9DwPfFonk8PgXCnJ7JJEGd4Hrs4462DnUnGT5ZAeAH9",
  "key20": "2QBKfwzjeT1PMFtysjNwzAA7bfBFaFTYjmLzf21ewwZauw94gc3Q2gKCUZnYa66kNHGfPNueiz51xfn227fHViFc",
  "key21": "2eHLWmPfRCFZbMquwY8YNNN6wgBiYQjMTpZqZ34nXv7UBL5ziHpKCZtw1afqNW9CeBnTLS7WikVJjoqJV1fg73Zk",
  "key22": "5PkdAQwNuKa8ATKNqYNiA8TcCx4ntbzY7eqqmfLjgtsRUWSaftyqapyhP9WkfnCST8gdpUtQq6FG6jdm8DjHPkJw",
  "key23": "46bAXJk5m5w4N3pz19DEE8usSWanRDPbJ6232ZqH2Vr3Rc8qB7osqpZobEPYEknxKykyVwxRWfYqPSLtCmVKPmp4",
  "key24": "2FnfqH8Zf9MAXAPrwWKfJ2RyLsGy6A7fVuxS6dcFPnK5Mx4hSVfpWo1f8PuZcfiJV4Lksfs2f8vkJqrbjCefHRJZ",
  "key25": "32wtfKUcSsWHsYz5gpZwLuFzgP7TtU3twWs1NNY1F8tfkodkrC7kw1VsuE4qE1b4hmm2PeVTYnxjXP5W4d86gQag",
  "key26": "2Z3cTwPjbhPqCMujJNHg5ysn7G5fjEGi8fpJxUdpSpfAMyrX6eRY6gsHQuAwrY7J6U4xTTrUx7nnDnNGNDWS9WBb",
  "key27": "5HU7Bqmv8aSsXWuwK2mBCQkegiELNqDihYsyLSNYzURKT1RKtfyEyokpqVtGPWXA3diXuURg7GHpmA8viiDSorQM",
  "key28": "dPUtcsQeWJ7NFexf472HN2KArctfmE77QpERUArQz8Vj2JFXuVFyseHQRcGiqF3cWppsFg2EdDWmswcEvT9xkLs",
  "key29": "4kwTqBPAVgsMzHrZFRakzfMKbppPwhBcC66t7kCvgmiGutHfXkeftNwyAEJW2FWKgXNYgwyNKwAjbWvE2h1anFz2",
  "key30": "3wPjoWrvSsNqP5tVshurBaQwF1WJ1uLrBd9RPyWdUD9rdVTNdgo21gbsXePAfyU9cAN8hWmtmy1Fca1JmHixEFFX",
  "key31": "5QRL1G7vCAPVCaHKXR9MPzT6REkbFH5PiF7L6qELJZzevzJGisuZNYwpbxNF53w3LYW9E9aMZYZ19rVZPdoT62G7",
  "key32": "3M71GDBE7cAAsmy4Ze73ByYDdzFWM1jNHKVgRUFstQNV8XqJtjo6bK3vjq4JKNGb6SeUr5VtiGEfXTvoeqL1xNxR",
  "key33": "5HbmxQ8Q68bRXgENxF16negFRugvNAHguNzn6yRj92z4HKUmTM5AWDKLJJRZuyD3KtyVkkgAC7VXvGi4uxAiXYH2",
  "key34": "2MS8uc981YD3RZuv9RBfAF8AZSwukJPGWZ8GPAxGoyMVomYJjFmkc9hERWkPrsfnBqtrALi5bJohowsG7fkke5kZ",
  "key35": "66BtYQPY6DVfnQijH16Kt2N3cjxc5urcErXLqu2AYsjh9xRzxiigtkHjiyTnp8AYMpay1cJ65sLidSpZsyybHs3t",
  "key36": "2g2J5PXDKCti8hkdWbZpM8BPMsxRAmLrsA5ntfTQP54bStqEvYBQXRRJvezNmwPsMyy1uqYjAsVVQvtvaXG6Fzcu",
  "key37": "2Nv2vQhFrKgYnVNos1NuntZGiCUD3CXeDxa6qY999L1TX8xno58ay7ez9qgAAJMeQqoWQnW6SJK8s7mp1zAHmU5S",
  "key38": "3ZbnFUZJtwErJWMj1UZqi5zrWx6tWiEbeM8oaW2jhqLmFS3vkgWYb8jsU4fgoxvcSd4vV298oWTSm94keVHAwsY",
  "key39": "2Ky6B6pTD8oZkN92Q3xaKc5vddJyZGjiNnrVo62Ktj2BFQWWUGMu8dM8a3YVdkXWZQ42GAMMhdiF1PsrKW8B5REe",
  "key40": "tuQ8zqNdcQvUTwPuNXBKgQrtx43ZQ7v5CYvxTDoWkcothVVBSwdo8sD8rqmhhamgPK4tGjVvFCvMC8rFo7MuhV2",
  "key41": "5HaKeweWDwU6S5Rxheig79E1T3sfHTC9Gr3zUNxam4FtSTs4iLGwrnVD5quSzuCcFRS29eEv9XzR9vbxrJSjiwk8",
  "key42": "4ig6UcvfcrqYAJzVpUXtY6fhyCCT3D7c3ruvp8itY3cLeppkRot2dsuNphX3GQMN6oAhbcdQJSrd2XojSXjXHNXK",
  "key43": "5Aehmw343PYmgRENEByX9ixAXUCGBUGJFPGJ1wQUNsYbEyEGkgPqEXVagohahedZ1MA4ssvrKYgLj3PCRFMVjQ2H",
  "key44": "4aQrakjjAGgSQVRdSyvzx45GQebBkT4QUwzDbyTLSyCGCwFP5QrrgAr8MhWTjzrA6e11Cyu7qfVGndZm64WAUGt3",
  "key45": "rRykpxP5Z2cRo1tBR7SEtqeXpYG3QWpMEg57KQF6pinYbQgYZRewGqcPwsAYPpewDRajKCVxLAwAzVaaw2CZFqt",
  "key46": "2Gu8sMVkFDV4N7sQdEcxWEDwh8Np5X8bUz3dqn9Qxc6ajAe8AmRSakG44vP9BGsWxNSodzy58ZrRqShi9M43U997",
  "key47": "jqNEXd2F55engiUM31Jv1cU3859Gb6unnJdg3kWzDkwUN8J4ahgh471zMaNB1i9pYy1nozM5D9x8Y6j3QiE1YaR"
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
