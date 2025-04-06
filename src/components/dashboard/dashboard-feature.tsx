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
    "2wsihTy8q1tZUYsgoHYUy1gM4rgNdPc7MSE5q7XHHxUHsXnPtTDpoSCfwdzQCiaKNuZLFdA46FxWZcueQtnLoxt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVFHgerCAqsFJRGtqnWLQpzNqozmywxe5eZZoyjiSGRzT5PCCqvENrJx2UxXgJ1gRq4L9sL6GbkuuPze4yF6BWW",
  "key1": "XUeLNXaXUnJ4kMd3cKpA5w997RzhstTeRoneAqCNaUcKMaJtghkvGYFYi7prGyBwq8mrf1Whx2g2Wezz1QtAqJ4",
  "key2": "3CRJZaSwxt92CnKSX98QFsxm1ue79fptSCP7L8XViq3KRmtUfM6XFPvu5PTejfkoFzQE9L2xqN1YPJGi8imyPY3u",
  "key3": "21Vv1ALcJQC4qd2Thdz1bZua8booBBJt89fDCzWX8f1XT9pF51ua5tzysLHN3FWA5rXEn6JywcJJ81E5YtmgZRgd",
  "key4": "28NxRdi8YuB789UgJKFgZgoAmNW2NT56qN195Gza1oPVcZNYVRK66Dt79JMEhfMLGwMx9ct1QekTyvryXXueD5nd",
  "key5": "2V8Q7E78wDsZeo6NeVgV4tyd3sFTPQ1c41fhNUuQeiLVTeEfDHLvzSbNsnD7n4uZjPms8VwMNZkKrufsHX3U4ZLi",
  "key6": "y1mSCA1wJeTngqrxJAvKePLmAmwvwfGHHtmnUfxLfEyXCWW1HjXQVzAGS5YpRSrbveht3mVpERaB7GcJ9Y9MFNf",
  "key7": "4HYc5fG876e2FMqSNqmUpLQ91FrZdbECrdy2qubGJayzy7aKqcy49G8Tt4onD3GoEASLMsc3bY9dKfpm5RRnLWbT",
  "key8": "53gZvvzrEX7LGLBFAJPHHTz5243t1onD6Q84bZLvZz37CTZ4fRJDhL5YYNXNfqmxcXtJZKG58Ese7PvrQoP7FBH1",
  "key9": "3heMWwsjp1tpaLcnFuEn9eh7tgsfPS8ioS9NSR5ufepW8vJnvaA2df1mUh4AKpCE8QTNQ1kid2Hf4vaagvwaU1xC",
  "key10": "TMZ4kmtQUU2uhEAwwNqJwbynXrqWDQZFyjJCf6kS5kgd72t5GaiFARyP4KsufKHjj9itFm4EsTcmRTnSQyHUWLE",
  "key11": "3xdpidYNL889WAKehaDf6vhLLWyve8S5mmfRXi2hHHEp7ZJE4eNncAg7rgvV7fiLfG6h6hXWoRJwUyz3TwjpJesa",
  "key12": "4Xm8tQut8tPNqsBgLp3ovWzZZX5Cabj2kSfnAFWErqTcobuSdudb69N8dwmnMYaFLsehWrsVzTRMR9QRDRf6YZC4",
  "key13": "4WmJ3t8HQARH2yRxyRSacacTMTAiQqP6ohNPAxRxm4KBV2Yx9em1tQdWMZUsqtPNaGtMUP99YAjzM9fggr4HDEeX",
  "key14": "2LoqEpqmNc6CvJ9AqnjpX4P1ChsUYa3cgAGoxGARuERnWbHoLBotghDerE3wxcuP2xf2Chz86MoMSKQEnxywRdZS",
  "key15": "5UXCveEwmRRFkbg4KYr1htojB8vjiL1XBVgwTnM66ro5JHWpozCeGvN58ds7aBmg8kWCYWqBg58W9d67PQnemXr1",
  "key16": "4W69W1oDwnnQmLksWAom3wYbE2rCADgSM9X1JJnrBCWXGu3a4YJiMQ5gMLsqzrh6Dkz5srterQF8sj77pkt8y4xJ",
  "key17": "3sg3TrLnW8eypeJXX7XLjq2mx47tWoXeES9hKRL571ozf8Jf4Z7r9XJddXb5b66C3c95s7QC7Qj1FncsNjbMEr34",
  "key18": "3P3UtvUkPphpxEoxa9PJ4yP1Ye9Z4nLeGLtrBAJ6aYjoYaBdNouL5QrUMbBURrVd3sx3KrVNQhJF3DkpuNe1zC7y",
  "key19": "4bbc2ca9xmmRJpqRF9bsx8qLmBPmFuLbW84DYik2rbDe45wEXTGSqoqfqjqWnu7gjmaM6boJnwnvq735t8LHkBhR",
  "key20": "4YWWoTR8exUc7azqsJEVjzxDkp3ABAsjJGFMC9zozgUzAthVV4gWvNSkSXZMFKgGoqBXayh7wWYBov1xj2Me1GE5",
  "key21": "42834sLbbwEHTNS7Zhymu4T4ocG6QgZGZC8BvoFroR9WLA5CSzVsQ9wYKMsH57nzjpguxNLAfi5ZdhRmLoeaFfWL",
  "key22": "4Zs9MFmsAgjt7GkHWw2QqYjmnj4J9QrkiHPkHTmjVmJryrbK6842D5PSnuY3o6yikeHXh8X5F72FbXdXQ7vNEgRw",
  "key23": "3NRpBP1STesLWQhqZ3UGzyttMz1xxwT947QYttCdcqML8YPfTd5KPACfogNfdb5wZD5Fcf96MKvAPpMSjYAyLrPD",
  "key24": "omy5zn8Lck5zMSxoJS66c7KgFjAd8DwvoRaFQExVsuRTj6UE8YdvE5EpprtcH5ihJDPu79xwEmeGMQxFHwM4JkQ",
  "key25": "3GPSm1V6j95zZdFJFTy6a2riHMt1iweJ4XbuUFBvPFf9nBaQoMUcJLjpE9VrDmbQqfgti1423ZQ3FzFRhQVkH1h6",
  "key26": "4eazoGdgfq8yQQZbPzZqN425UQ7neHnch35pjGEbuMedmrYG9JS5nUCjT3yGzRzgUY2SY6KZrXHpYeKGq4UtFSgZ",
  "key27": "7DZkuYLRdbeYze1nCCn9KJViYZyEicbvyCkg9y8omAwMQvtYTxRYegyJ5bApfs3RzD3jWNh1vLoVJoZUv2zuWX5",
  "key28": "2F6wK6d95T2Po6nHN8aTJx9zYXek6nnUTjLptn8XHNNuX1ybVyUF4PBf8R7bDJqRhb4oQe87Nm6NwNzffCfa7zUK",
  "key29": "3hdxzsWz2FrWuEWyGGvCxwtZ4nNL9eF6Kt9bzgG6ewDBXELPozeA6WFCsRwB9SfYTRmhFquEJarith6ZsB1iJ2fn",
  "key30": "4UV2RoprqLbVwoLKuoRCmWgsnhtzbL11RtsFQnGc1HdyWkcUaGQbfxLAFXH7PpKU22XwaRQWFt5zP78qz3FbpGtD",
  "key31": "5GUJfS1YVhSs3VZRoCtLaN1cYVo2Zg2RqVaf8A8XY4QZve9pCponDcy7CymgeLrfvScfe4gkGJjwVEf3oefW9arn",
  "key32": "4oDhuDfzL5dRgiyfpnBPsV5qz12GoAoW49HrE7Tkwb2NHZ6MdpkDEZDoBgKRzn829Co7KRm4eavLTQicSMji2tTi",
  "key33": "3BRjGz8hZ2GkgwxKaM9u4NdQHsxXuAoEQwhHuuvudcGU4QBkAWbiMsMjPPQZ3Mt9zKArAbuyHKKCRdLchCg6fMvu",
  "key34": "3Z5878JsykoAhrfyM39gSmZBz7rjf8Y2bSax5fF8CDsLvsaNy5RHjeU6jnwdgzQ4mnzYwfwuXLnt3nXYbakve4Yo",
  "key35": "5cJ3Bw9WwwzAyFFeWbN6H5UX7eSJhzQk8x2EK2uouoQk3Aerm2vxYAGZiGyrpCytoyYewQmDHbRYa7J6sxFfK4Ak",
  "key36": "5L2qmuPuT34eP4YUbFVMn7gtjxfzfzJB4H2eLkKrUQanzeGh3xoj3zeBhiPRx9AAGRHv9PZ8u4RGgYLWjmaBS85Z",
  "key37": "6NGVVn5GRoNSULHocRyTWZesHwhR97knGWBySW71zFsz4gVGVMPj9DSm74CtgkMZuq6VMoe6xVBn5N7wbbYtg4W",
  "key38": "3hri7qLXfdFxMU5on61wGzsNbpfxvTGrXWNRnZ2PSE13ubezwKWRNYMK2Dp8oYzKErvYmrGPm1yiV1S45XKNihgF",
  "key39": "3C6cJRqT6HWdPBJFuxfDuogw4kQvHcmHNRJPhtmQpBRXSvTyNFQrfbwaNN3ZkGhx1WX6nda57qtvAi97L9eMKTVa",
  "key40": "5ZViw71A1a8jBmNXbamouFeGUDFDSES6LoGS4vgyN4cPeW9fiVV35wNczVY9vu8xGxs516QeWFDcQ1NQSreH5N6W"
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
