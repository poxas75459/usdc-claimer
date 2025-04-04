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
    "5zHmKKBdkabUAf4PHRumizT1dZsWKMUWkHponZqeb9iQ6xzVDEpACaAazyFUtqHiqR44eMAd4Ay9WEejQCv4dAtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61TcMW2bPkZ4qJGc2T5XpYugQZVU7WuDqbdH13aFHwqVSisb4w5v6HSvhKpSpHV7RkTwUPKJdYdyaKPU7rwtDgLC",
  "key1": "5hWJPSxYDXb4tkmwxxf7pCGRescjmMKEdyPodxwtgtr1MnFYkXAbugRhQmGLBLvPVgHuRst81uqnAVFGg5BCpk6F",
  "key2": "2sVxyniTw58umpEiapFd8DyHegjEP5Skdoq89R1wzXAwjV3e4YmuyokpXC6dQGbUntUp8YbbPUVcoXTReGddgsMM",
  "key3": "2Z5iznTrKVevo3q83USPCLqXP2kBSKAz62i842MMgnTYZgnwm6qqAgzUbMHptFF4kEJ3YpkqhRVmAoW6aMH7xac4",
  "key4": "4X1B3YuSzG11j6iQYGRvjN5V1iJLnvSzMvG8VqQGnyjCZwkU5U4ZE11XmE2P5jhuFfuTJYAFf3h5aWFxcu727Q9R",
  "key5": "3tiikAo5Tz663GUcskuvUhXkWiBT8Fyc6xihS3WzQtxcx9PnA1SrHZUvHGwbDVk6PkLLLzsepLXLA3hTkoaUxXQo",
  "key6": "4MCCBewVuq3HTcQLkCdkb8cBfzZ76aCeJV1dAd5CufBrgPPjDSE9szeqHJHWebc1SdKtvhFyj2Nh8pTAzvKk5mio",
  "key7": "4F1GmivDqC889iS2xYZKpd3jSRyQBHTs1jiPoE8jXp1zyLHvPEkWQoQ4t1zxgmWxVWP1GVArbhY7omCpyiFvnuVd",
  "key8": "4twSzoeAt5puXoHCwCgR4gJmtg59pjqJbjt6ygCxQj84YdkQrMQ3yoLQ9hDEHMu6sdn1GAz7aV2HbUHSirJeNC97",
  "key9": "4qJkgWRNyKWrWWkGmpPLmVLdYj5S7J26efUSfVcysjNS3iJRTEfHrHqcHdkq2g7NYttaoDhmwUqTShHm3QbFQsQT",
  "key10": "c8nhZ6M6cpLkJJoDK2c5ViYgTB2ieKWG7krJ3JWvJPiuU9skwZvYJfYhYVvytw1VoBXAUZZGmccr85FjE9jtaYz",
  "key11": "ikZ46suc1GbKaZxe3rpzApnJ1tkkbRscc41AxRWRXpb8E9V7at2eLnuRKHCKMYt1TAkG7ogguN77y2tVMGHYMJ9",
  "key12": "3reCbkfWhsswmB2K43EQXGqCjoUR27tc4RCmMu7pEmsYLy6n9bnFXRrP5Gp4JUM8BcqwSEppQBoBtG2WcWiWuUMs",
  "key13": "3KzjpbQ4LKrg9iezHXRDLckfhAgRpt4U4mXnQh6Q8FJQKfFfPyDVUsq6gSN2y1kynZDdEmVgL22wzZ2CF7Jwgr5e",
  "key14": "2kz9w1WgXzLipiiSyHZyeNpr12PDPbLuymQoEj4SXSf9ja5TuCDGCQYd2bGKVUs2GwDEsj6vWzaELNHFYv78hkxL",
  "key15": "3ZkQ1kDa3MbEyNSmNWb9gkg6Kk34xzdpczxULNSk6FbBaNPhc7kzU2evGspXAjxoTcRTrkSSGw8VfhygdadwnGa5",
  "key16": "5Aa1D8V9XcPA97zkM4T9rJsHnAQSEt9w67vhr5Viu1VsXx9ssbsy9PjdqZEDRRJ3Ycvdi9gikjq4W5nr8d76P1RY",
  "key17": "4Uz7LHt4NgjLvLasDeQc5dpUsaAJd83EF1okMQkrQG8at6LQQ2qhdPTgG8J642J9rSXEEb9atwb4gmY8NbafoKAX",
  "key18": "5UnkSDGgu1dP7qPd7eFxQf8RbJvXcJoUJcjZ86May9UV8A7pSgq7MAYFkGiLzprFcBQz2QPrvjXsqTLZcHqRz4eE",
  "key19": "5uV8ZDZj9cuXij6K1hvgU9RTvmSNsHJ1topB7nj8Y1b1nPumSspUexLtvTmLNbMLR7trpihTY3Fh1FUworLJ2FZx",
  "key20": "55sTEiVTog8y3XWPtrV2XAYfLDv2BNAkFaLd36JFEooxwUm2GkEfcyCmLfy5vyoMXHb7wZK3JzbLPkrLBVwAt5zj",
  "key21": "4xFjQkdzKgaqKTcYdLvW3hJv5YWuLnnxqSWKmh6wqJSwKSSoQaKsswoGj3T9XNYAijwyKxJjCqVnMjHHv6Ynvaih",
  "key22": "5jwPUV827WSZAg5kas7G2CdrSpPofKDN9LcRXv85S2oNJh8dMcgaUfpWHBX6hUQsHXNhyNtpSbLxNe8GmGmyMNyB",
  "key23": "3Jy2GYTM3WM2WEMg7SUPWZ8HB6cXjp5jqb1fDopKYwqC4rTAQ2TsfuWRPgszyTqjzuo68LCaoesGjtCGG9mzxb2K",
  "key24": "48NPXriixbCfa3QMemJjZJdeTEs41PfH6BfHYfb2fYNfSS8vCsnqtL61TEzRQ4ue64oC23AHDZqKctLL36h6fR4m",
  "key25": "38rk8W5gZhbNf7W3kBvDomQwJXSwe4E8mBnrfESZJUAvHo5RRaJBoamVsUN2S2Bi6KmRv6sGAuowR5W9SE3JWmH5",
  "key26": "APjpfXumuAzMM4KtMhpHBTJYAwYEpyRniVACe6UNcfFmUp5hkFsspFb4bv31gMe8zYAc5FZsFNSAqMisQtELebN"
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
