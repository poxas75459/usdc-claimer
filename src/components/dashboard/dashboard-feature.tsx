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
    "4J1ZNw9u7vb9hafN3vJMcVR8aNDAExoZvGZkknS5QpxUBF9mNEjX7f9DJqnpAXRC2YPqHPhgqTdgfHmWJk3dhCC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23muz23PBQiLyEy1sbS1pfyZ9v625aWDu7Q6LTZ1o3BhPJQGotFhZQhHtwKmRPz5xfeLpwybA6XEtMWxYRYkkcYw",
  "key1": "5meUmMqUwjLjXRYhBa3o2f15LEv7GUbXhYf85kX4YWCgeAfU3MVSbKfjGKyxZYLtyu5SVWeo2PbKj5xW9qUCSFeA",
  "key2": "4uEP5YYgbXyRX2vzgyf9bzZUXd3W6Qbrnw5YgrCzi74EDhnD9ffWTrjN5iG74qPeKaTA447KaMEWcmWQDytPJi7D",
  "key3": "4d8rr45wsccYbJ8hWAwXrmUzuXgiBBwjRhSvcVcHQNYUSfyHKQA96mzEwRMYDve4Tz2wiaiQcH6h3Myr8KGMaSkU",
  "key4": "28H6DXWK1B66EKuH5fL7ekErWGCjrgzrB7KuAFhRPfAx66BryxQoLzUdqvCZ4zmGK9ePG7qbeGNv68AjEtmMaxyU",
  "key5": "5jL5bACRJNiTEMULL7CFVfDqQDMTuPoGZcfw8ix9hm2h3uU3tNv1WjkWeqi2nSD3sjGHCa4inBbWoXSmScHudgT1",
  "key6": "4D64XLFQtqQevY8uxvuYninikGUrnAFTUBqmo4W1brL7YV93CyRi8W4kkpUYCtAiXzDorpeQrnyS2H1e3QLxgLU7",
  "key7": "2Co65DcJqK8sZ5bmFYXqY2fXGH32UJ6FPEx111ih4x9in4qxaoskep8SbCy2QLAq6fZtLuBjecqenjXpZLJE8RZo",
  "key8": "FkJ79Qo7CiggMzpkQvBVjpSY47ujFktu853Kyn6w27Chkxv1zNRtb2uNJD1qVLgXdgtr3bSp93tjjUY4dWCHzCe",
  "key9": "4CqQRrj7SjQjHV7vjKkX8ThKjBCR3yeBUSCJjpsR8LmnedbJoRBaF7gVj89tGeaoyQ1yHRk1VXxRtZx8A8ZFkbYr",
  "key10": "4wjY2RkUdy497NZwoNx7YSuE5tqc7mDfgZsoUcEimBSCVtqH6FmiPMvNcL9aFzmnyyf1Qb4dkd6d6MXRej4hvJMj",
  "key11": "56fCr4GaYPVVZPRAU1Djj6em12aUfQ9fWtuJAyME3tioxxLDB4pr7W1SYyAc58JUg7GWGe7bRuDTrjRmR7khhV8q",
  "key12": "qG6SdHDUk8TKGDsdWdu5Doh3Wmq5LKLXBGfkjjspNbpVycfbaAGkGoXN4oNXBu6xdavijdHknt2XCyrsAFTKeGn",
  "key13": "43FT7wYvio9NLRyFAUuziueJfbEtxHmkVvUHxmJ6rgwJXeRijSV3qJvxuGfC6sy2EP16ozstmUySCenWUJwH9LDA",
  "key14": "4B3M2xXZc6zeDiDfLqqhdxckjpf3XfjJXpmHC87LASuxE8kfCbN5jFJHvJUSc6K9dAp45ctJumD9tkgZja7pEUZc",
  "key15": "3egiDHuBjvGAUcAuYSKQ7yH9uWs1g6k72EDeRAobkXS6BzdACPExnK1iSD6TQhuxkAUYrNtPhJxu3dfWSENCMzAS",
  "key16": "HwqfRpneNjQ2kZrxahBK7YFJ9Wuc6U3Q92yoy4WeMuQ76KCTF4aJoCULs5NJw5qWpgWzbnEsNDDbo8CLU6mVe1z",
  "key17": "23YqQBVSUgf16extWUpmmA4ir865jyk8bxX6uibMo4AKqv4JKntFKjtUmmdmCCdBQnpGFYE9Wo2XUBQXEktjZP89",
  "key18": "5gmfDLFGGyzGg2FXizgQ95f4Yc7vDcbej5pmT9ioqJkAuGkdDJdw8HGzX4kv45zG4WHY32NzgEmtcJAEwFZL3RSF",
  "key19": "4SL245AxhT6JN4HvmPNo2AfnajJqUtcf57rjSZ97hEASNfkX4JmSeReXRvxZjeWEaMZK32pdAZrrusCZY8VouL4Q",
  "key20": "4xaEDpfvoBE6ZY4uDRnSaqSWbrzPqjLn4WE2XibL8T9od6QBLfwoA6XmgdtWPHNEBueyyYEb3VW99QvhpArfi5RG",
  "key21": "fMFmEiQ5HQ54JEHj3v1at8kKSKf574bMYdJsd11oonKci5aHRQ9ULxhQiSigVBu3dx9juxqjRNDaFFJmwiXdREw",
  "key22": "2Y6Aq5aGoeJSykZHdmU2ip4ykG5kJ4bSDFXoZR2JMh1ry2QUwkVsfdJbfPSy3AeNPyAxPiEBy8W3vQVFze5gEE3N",
  "key23": "2APPePiJSmtMVUJe6j4WxJp47ay7JJ7uqhiwZPdXmQAsBr5XRG6KtgSrwGQLsHBrJpfCTi3NGiLiugYkLxemgG7L",
  "key24": "4uqCgxquvkUSqeWFwS5n138XNMyh8E15bzAgm5hdvNGUGHTaMTTqiHwwKFAmsqoZ2JugYruyNLsDvgSo1D13KDAM",
  "key25": "3o8dtYoYCX5ybMTUxbNmofnC4k5iveRyD7QpVpz2GbVY1F9h3kKk2UD3AEBLkyuT64RKgffu4W5tKx1P3FPGDUv9",
  "key26": "21SkiLSRoLejGkY1z7YKzhegvh1Py9ETypR7Jgj8EcWgpfEXs1jG3iK9XRDQmSDG8vMA7cnbn5M31cx2jjaYR3WU"
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
