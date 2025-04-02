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
    "ufTRKiWe3dy6wzWMwquc6XTJ77huCC9io65z2i1gSqPvr1xikacBpekFF6H8PJ8R5hcxaiveaKZWEZCF8kUwnP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vtcgs2bqRJNq5JpEjYjBkoeeCqBoYvHagA8oCwnYXJG67z6yCAMJAtdos81yuHPLoV2HuVWgfqL36bVMW8m1nEG",
  "key1": "67AxYzUFdxZMrDKWH5Tmjdijrxh8sNJym3RVByvVERzM3HHNDuJ7VWS3nKiKSLbtCc1Fitao1hE4QwyipHJUYaCF",
  "key2": "YHuoeF3GeB3Fe2NqDoB4VgpyHvqHZjeHyS9MVCp8iy8p3AtgVh8wJhcTaeywuswXkd7Si4oKi4u7TYHuKoU7BPY",
  "key3": "4J5e9Z2Q1mEv5dyC2Ao4tbz52dG7kZtr5Wg57gFqb4JmoY2MBx35gmPQXN2Xf8kCPckvu5qkH1g9hho5saWmJeUW",
  "key4": "4yirDhSVR8uHrRUjxU4zLZhSmszr2CrB6u4rUwmxUpmRe5ZwcwWhkztwTJe6Ugsk8pHsXyuGQVWRMs3r8mkY17Gf",
  "key5": "5UmkTBxohLDx83MiCpX5xN5xPxeN1vT8v6UxCGQB1Xz15jmNRCcS3h1rxRdA66zUEfqxctK3BHcY2SDrDAj9mzBP",
  "key6": "dKan2ctxp1XKxHBWBZHDbwS5rpkDMZ1RXbP4ZNPqQaj6nZPqA6FWcE7FXKKofKCXBFWdfUqASZQoc736mvRKCws",
  "key7": "VUd332CxcFNUCXU8mAUBPnaLETR8y3h3MQfD1q86VcVu3AwXXbBfbAbuDCEzrL3TSKiYsMPQrGabP9QbDarTmEu",
  "key8": "23QhgKkAKo42DzkqexQLtV2m12Ve3uwwSCxJoGB9BAzRTAsMioW8uikbbiFsaa8CvKPd6QyJFmNzYijGrjkx8Z48",
  "key9": "3qLzbdQVdmeLV6qzevukyyCr1KncJtfkKkeu6rTq8Ghk5rSp6seZN6MaoY47Xi9SHdJVYGx7GbiWi8hCzx8Hasws",
  "key10": "4eZceH7aJgRucgKhhQKjkyH5svJxGU6iw79RUrmQiyubA6JdakuMx1KC69451GYcVLSKAkrt4P1uwVufGtp9DrbB",
  "key11": "NS8x4jbWbKs2XRMksWu6SawxnbqiLK4HoLg71n7WeepQkoH6bgLNJbVNu42yCMrayBmSXb6RoyX16TqAJwbuZhG",
  "key12": "4AUnAbDHfGWH12YJhdPjmK3rkyuhFcbwx88zJaGfurythQmu2AWaZtnotGiFKM7g4FtLrTNUhZey55vERvoRw6qu",
  "key13": "5iCjgFedhhwaM93y5wR5qQf1FX1dK4NGvmJXe5GF1JNQeCdvMhu3mX3RBat6rJvTtAx483NoR9MhBNvwXHnxaBLQ",
  "key14": "2Zrhw1RZ44BijPgKcv56Sb8grNHxFuWwhzRbBXJkvWaAtnjEtbdWPwXJkGXHz3NTbL1cMhojHS6ksyS4mAfc8NrA",
  "key15": "2Y88C4j9QqV38oCgSyX1uJjWNxugAP1L4ZBuydMcYsyDnmbH8jvmkXjURD6tZ7gBRDKB7No3ybEhKyCrQBaAiBy",
  "key16": "3qGU3DKeNreM3tqYVWAC4jG4nFnGiQCR1TuF4ub9NyVPfb58jx1VAZV4fqs94GVPEfyRfgWTBuH5V633Fq4Xn4aV",
  "key17": "3smp3PHRoJNbKDRTCgEQkV4JfHpScFdSij9hfmj31zd5Ze81B2bEH9YuZj3iDkyeXZBCZiXYLtAXSHbFgchs4ZtT",
  "key18": "3NpbtjwwyzbNkUubdbGZ3CmoTtP66fxbnCKETC4Szj5nQGzELzvNuwAt6qJNe7K5GthaBcdMUGLi2mYkU9mUZ9bH",
  "key19": "3W8yh6HYNwkJoBCHC7cftAuiptfAV395dUE9BAKFn261kxiaHRR7Rh3MHsXaK1iouKRaT9jTJyMqSeE9ghwAhydt",
  "key20": "4gqSsDtqKLme8TMpJWJZ78zKd1SN9ZnvgEsrs6s3krvaB4pXm6mNhHbaZXquMChxdK9Wf6eZukjsCswuUW4HfKNH",
  "key21": "61DhDGfrb8GbHznGhBoDGfPDWn6Sd83JRb9HBFvYHNW7tnaHhJHTrP8zdAVJRm2YUBkVjYtXDWReQ3jJAouMgcyz",
  "key22": "3p3t9CnErcJoHUM84uXtof4FvWhebsVCjR42VZBCdQTXJuoixXxgqsxPjJo31aFLBKQ8Uwc92F5cBxRSc8ABXhQ8",
  "key23": "5CdJN7QyqPmo1Yj5QD7yVnraQ734dgL6vVYLmtTrvPF5ZCCzSY7gifG9ED86hkM85HP4MYtxZ7MDbdTPN7XaFcY3",
  "key24": "4z5UWGtBz6HJ66KHPUQGf3mJZnxnZV3pM9UQwfNiffmuqa1dHJ5JqxGWFGZ12Dc5L9TESBvgP2EFSUcY45KJT9Nk",
  "key25": "Z4t33WdSsP3vkugFH1HSKb2Uu7Z4kTmAEzEW2N6hDgNBkxJ8mwaX8B4fqq8eMg59Gu9vgYT65Vp5TMj9xbKLb7c",
  "key26": "2FhC2FSQmwfMR93P45UY7d6D2UqmE8VZgQXQCeox2GjQ7vhm22tPCLJNKmwmqBLoA95H34hrnB1WqirSPN21yyuq",
  "key27": "kjddLgiagWLDb5arwq42Hbzas3PZ7eUkn7y8nto95ompmm1tMgn5yBTGUrZccGSckvtVwhSJQ2c8MjZCw5Bgb5K",
  "key28": "32i8ZC7jzYRXDjpBL93cykHGtWFTZShuBJ3D3BKgLYftYvhizvfbMEDep3F8enuHac5jYLstV5ULHVdaaSZV59Rb",
  "key29": "2w3P89R8eEQkKXBpaFjuR2x1WcqaExnywxftThKQpjBeZxKLzMrrvy9UZgByc2gXTZitYCJqmoXdSKB9L8dd8oUr",
  "key30": "2hBg8rbqwsXo1NoSpME5SoK9B6viw7CaH2j22biPXrWD6EgeXw56dbUQyGiudSnfWhtaSBzdGWGG66n9HTtVECD1",
  "key31": "4X7Az9iabGwWqPn3dL2t2hssscs7WCxND8K68RDo5esMJBzdbJN6o3hDcKr9q4dfD7QAEm5pUEV9vh6jNhkyRQGs",
  "key32": "58HZNSftRXd5k9xXQQqnkjAHtbvuUpPob1dGaNK1GgV8Qk635cXWMhDsCzkzoEzLTvhxuJT4Zqg3a5Tc4W3XFPvn",
  "key33": "38RjKgFTRQ7XfiJahD1web2G5mngRxcjtvtVuXvDb5gjJuWrtE17419BkXTJ3S1rsY14ixTTh1t175ECXocvjCsC",
  "key34": "2MYT4ZBmze3nRDZwsMrd4NoofFtEYTBipCEAjSiaS7oFyHi7iYQX3H9FEKiVzGbCH4jUsp2LUmXZrdfJQAfMt96P",
  "key35": "uJCDh9ZABix6hyUQAVuFGWjFVJws5v6HLGtPiTY62rJaseFNBxc2EpDQr7rHGhv1qRWjrPEWQDXRLZGBHqvdtwC"
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
