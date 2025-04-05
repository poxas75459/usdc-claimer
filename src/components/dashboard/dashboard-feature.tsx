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
    "5g538bEExK5Yn5CJGfc2DJFYM7QKBeSSeTM28akie9H6JHMZdajguy7ZZyLqkGeRbPXaqA2KmVshPpGTwix8A1Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4huNCP3CbXofUPcWzNRfgx9Zpg6vVCqso75bw2R4W8AbmTsfYKidXYqfwDPzC94eVEeZ2BFhdMcoNiqQVgm44s",
  "key1": "4TLm4GSPrvKvyz8PYFPRsPkKZPD75PK82wfDVbeWopiuRHUbs97TkXgD5tpZpUYhnoDyVvbLgrkh8kk4NA6wywFX",
  "key2": "32xVQrn4xRqY2gosKLNq9vajtg1zqtZRjVrmSvj22bkyBwejocGgupbk4BpoDHMxPgJP7MTfrLG6VupwPku74GZJ",
  "key3": "3wvu5hSYs9NbTvhEtp5Qbhp9v4ruTrPKDmaZZqXqxhF2TKgNouAeBjXqSgHAw2eXsLtcHiBZrnWLSwC76XU99wD4",
  "key4": "1wRX82QMhKu9K5bkuuiJibVwgE3fxP3WTa5vcQjr9tzPjSHcQAcv7U6cK7QXhZbMaVxeEquZYUQjSvfmJ3WvXsw",
  "key5": "2TZmzyMtscVhDV2exVH5sDjPyrGmxF49U827RWGDmzLkbxnfc97yGKvK7sgg6aCt6NXNZ7Mw25QsbzuT3oUQVqDB",
  "key6": "wDctAXLBJM8fP5msRZ9YtaFUpQCvhJmH1wqup97K8KE7zuHz61Sj4oXDaaZZTRiSC4gBgPpzYBVddufkSuPaKxM",
  "key7": "4B52V3udCUgU5ENeb97pNc53vDxfuFXCQNucaKpvKJ4fTjWd8x2KLNDDpizAVGNZJ2kfqRjBLFA57TLQcuKTPFok",
  "key8": "2U98ye22V5psx984dny1PQ2jvXXszq8peCHJRDaBVsVPPPNFSydfhWgtVFw6VQCtSDWx1v66UJsY7uBEWBgKE6Ww",
  "key9": "4hGEB4RwokYaDEzKVGzRkdA88ksyc2cktJvYekDecQH6EpDrhmgvGZcaH7Savk2XBZihYDvfJuA275cXTjfFQKkn",
  "key10": "2qxaJKHd9wTBLouUXvia1QFyDG2YUZS1v2GxzrsGkUkSnMVm6tYh6CHzGfZxZnSLwveuizePcjDFjVN3n3uMu15X",
  "key11": "2usG7WNazMD4X9xKUjJX7NVZtL89Hi7rnBMtM9uhvhz6cSS4FU36YdhquQT6esxUpgmerteFGW42e3ayJXPDu5Qn",
  "key12": "3PLqYjeE3JHz5phxMgm6CiVzJJMQhraigCfh7EpAA5ELKAT8cMdwzwUCLqPESctsxCN1K8c4q4QtMrANoefbSZDm",
  "key13": "3saC6GXKV541XR2j26WKiHg1NLyZzpVMU4n7WUPZ2jaTusiRB8USKrf1eHa3mckyTPACNSkh2YzEHXq3eg4iDbpf",
  "key14": "2STzZhJvM8PtsTCPZhczymG5EHVWqdbqbv7ckV8faRSLYA3thiY9Bh1sPDzT8RbMCY7PCnkbGL8FSvKaR9UYLisA",
  "key15": "4etHkYDdX6z9g7yJmCGmLmrHNPLu34HTkY46Q7mKqtnVxLZDzQdYzT3hLpHMDGCNhBA7iC8VKRdw7ey21xYaY5o1",
  "key16": "4jV1ib778DfZMTREWtjKJrcXzzVoUKtG6fdJwGQc23xxCxTxuycyRKT7hbqtzUpyp3TVv4F9kbbeNawZWq6bWtKC",
  "key17": "u1LKGzGYwGGKJvmDVDwA2vXyhySerw9Rq284QarGeEAHg2uKdsQeJkkxVPjpyPLQX8Bnxwho2NSPM3eeseHMknA",
  "key18": "hCuzcLAD5SVPTkALMgUt8CL5YJViZ89f5y7bm5E8Z2a1nLf39BdacUwrb1oNGqUDcdquqHUvYHSg4zpeojEf8n3",
  "key19": "uSgGxWcZuo99b1iBPtE9ygAUPoCpkpDdemZjukckvGv9TpaWsDjHsgPx5eerBogYSytGzXWjh1DkmHsoTdTgCxv",
  "key20": "4Juwdd5Pqt9uvgFVFxHbAjUrYJUiJSg9efKk1fSrNXmCcbV6JAKdzEsnyJaybFdRJFzJpLcQSLYuULTzBMnCftfZ",
  "key21": "3pcXqoL4AFcLJpnq5FsKD99DkoRE1pTSyN7xW94bKn8T3fuCBuh92b2a6eMUzXrqDoEdWS7wHr5hA6p1Bwsj5VMR",
  "key22": "4pi5AEB1cZ5tnqwii75BWU259bJkYsmi6bhAFWVC4GG1LtaPVHH4PtYdGUiSwxHoGqMD3AoY8cbUj8fvM2CLHdmq",
  "key23": "5A8GkazqLFzEDhepyaeQKLCH1tNimrhqVye1ccUJoDmbbTyMoPS4nbcHtZyuJ2f7Mw7Mk8iLUdKMFrFhV5PDKrPC",
  "key24": "m8SfUJmNZbUcb5aeL3eJJ2nC2o11xqDGVBtH6BeNDNJiJ4capEhNHXUewth5d1Kidroez7oQQ9xQtQQuEohMAQm",
  "key25": "3JPAL7xNLezXZ3DKPxvqDA81HFXXktcouAwpvbtWEZqVf3tdvtn4tntWv1G8ZB3ZZrbcPXL3uE5gHsmrQ1U3BUiZ",
  "key26": "2KQqqHE6n3fEk9Tiybg5G1RzE5X3vBDinuCP9PfNMzisn1RJLQSGbr169ipUETgRGito6FaFgbVBNLVxnhDvRFuC",
  "key27": "5auAgh4hd9qAWxiTda1QEhd5b9pteGKdrwCyCoBwEC4eLpJF3CoxW2yqiHuhEvgEfbe2QLyqJW9E3RxLjkUdxDrR",
  "key28": "USFAbS2KgPLsdJ6duW6e11BZpZw4kgvSKFUWsY4XAPXZivuGvLjEkAFtA8zCCW7fePqfa1AwZzbcy72tu9kxoER",
  "key29": "LydN8Bc2MbwumBQ19bdDVKsfthar8PutpKy9zKLLyzVZJN1ZWtc1vzDgUD8AxtE4VHwLQ3Vfor28K5Yh9oA88xn",
  "key30": "d8u7EqqnyU2ij8Rq11P3KHCvuf4sxXh8XW1gD7Luo3jVXCmv5eqhATXkCrwCV617Cn9M28NC2vDy6BhZ4xb9a4i",
  "key31": "4sBpGJ4esjV62TNhdcXXASr5qbGvQYW1F19V1hL5Drk3HUbfvn3CrJ4mhUnZa7FiHhYhWTS3ADZMuThLoEKzVQ3k",
  "key32": "3p5jtvgFvHqpMgiKnD6YdHNQvT4jiBRadrxcQctE4LHv9C9YAMBn4bMf8uJfSXvRYFqt2RzmH8mhQPbJV4eVMpzZ",
  "key33": "cdoyRcaEeBeKARpm8WnhcNdf1xF6ftoE8Lm5hDYNMCrvwNUX1FK6kKaCp8Jn913tUspqQnQcKd4PKJzq9ZLfgfc",
  "key34": "2pgDCaYgXXmc3YVwdbsMbx3H72YNRSNUkPkQnqPaL7uCcJmgaf28SDsNU41MNa3u5wqPTRxRwWecL4AwS7HunkBg"
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
