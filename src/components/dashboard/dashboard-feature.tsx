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
    "8y98PSsVTwnSPDPnrGenUuuQ6ha5QDbutR2dYBg7fZTwosv24JEBQ2do3fb8f4SPMeH5hrtogP7kKGiQnm4hgMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSQ3edQaR2L511vweLFeyJH252jYyL4RitbpvaxURtnCjggzbc1eWhs6cCbV1Mod98mS1NUjiLdeDfnirQvsSGX",
  "key1": "5DvDacxrK6sJhsNTSFpYcYXbh4zPXFv3CiE15ExQiBgtYrHbNY1nRhyT93xGTb2T4rP91cPnMcufh8pddmEEVRhG",
  "key2": "41SCsirYKL8LGoGwaYTbqknp4nXSshT5upaQmSNP97RmEbuNGbhzZE6ojYPPrLs5ez8ijD95QQTqmB75ZiuAbSgg",
  "key3": "2XeRUbnsbiikH1BFmdJKFvA1EYSjMSDmDwvch21mCD9FmQCkWKWW9bi1r5qhRsAP8jYjUL9FTQKCXJsCt5u7dFi",
  "key4": "5SXGYwZRH6WMgw39QpF9bKmWvkwFuyDjWAYXTLf3hWKgR71RpvCorFDaF5M8xsui78Jtkphq79CLvgeC46eQPzU7",
  "key5": "4hAnNocZFn3UGwwEDYCjgVa8BrVxpE3a4GaWoBa6p2XRVfMyTqDUacGXV9vfT9GNMxiWtDeX5DPptGx9inxiJ3LB",
  "key6": "nHZfw1jVb6QGsEWzSjsLXtWVj7nBJecTNayCXzaKqmL1Y4WuAQgedKW2JDJuHXEryJKEcEhAG6kGMGGxxCpPjWu",
  "key7": "3tyMzDUB2tnNhjrA7Nfg4r5bq218yH8rG6w2KzPnG1TnZvjsHu3mbwX9vFtCfWD2jU7Fi5cmPRVQQXk8gGBaiFp9",
  "key8": "3ssqoHuoQZ4oiav8a23HmjnRzgHmVzn4NeKGXGpmSnRikR2PKpn4manzmFvogfW9o2Uc3vNW4NJ2FrMtfDyemMQ",
  "key9": "3pJZFoMWMNoqBkZxgSAxhTxKNhUnh1f1gkYMqLNJhttJPrjYSXnjWX89SUsrX2kr53wiRE97XgzfEPrWwN86eFhK",
  "key10": "5coXGjxz2oGnGbkwJv8CpYkTnLs7aqxpkLqq8sES9bA9aS8C3nNvQ8icT1n8HyJB3dpLrCX6r1JyzhaSa3zuHqfZ",
  "key11": "3FzoyNRxh3XDeqxk9CWJK8M33aQjnvQtxFzHmJrkfW2coGcnugDGp92wu125N1dxE88Nudo6EmdcmjEvUbDyFT6Y",
  "key12": "4yJbKWvbeED4Y9No6tb4V1uMhKNbAS8GY7hg6GTRn4faZ9cNvR5fcsWprfZds9LAhZrNmoEex6P4YmMnXk6wq91R",
  "key13": "41GKL1CeuceAHpcQBdxZS1Y5tSy2BVgFnLLbc4pT2vEwTmaJMGyPzqZ38zk2Sot3uV6NMtzNabo72pRMCJKVxpRF",
  "key14": "351Z1bvuJzYQwsrb94txf3vBGU4ozDbyX2kfKUxJgM5BiZbh2xsk2dQwvmMDUbTaBzpd9YNvm4Ya66fiFPcePmNi",
  "key15": "BJkV72Uox1ARJP9UtsnhRDYoXBef6d86sGzzCgoKS4GMXN8fjJEx2tnvPMjAseHhtKPr4L1sqFRhph5bZtV2SW6",
  "key16": "2DTVUDFpG3YAgBpJU9thhGSxWBJWdJsMU3iw7hKzFc2s7SzbAeMvLKnKPqc73Ez4cEg2bwprrPryZAv22ozYiYN6",
  "key17": "2P1BWyb47Uf9eCYv7nmKd6rQqeSi38kRCp973W816zigwC43A5MZCHR1Bx3bkS9HoZ5k3v6WVEjsCdjYGnzjD55W",
  "key18": "3GczqLc1WoQteiAJ9ttXiW3Dw7dgfDjCd2qsxZaRETnbAv7UWL5oJJ4c9xhXceg92zgFohS8gkXVbdFqsfPENfSw",
  "key19": "5FTFqBGUiBmpinPLb9VM2Bxf44LtZf2FrWBGBEWay4EZ9RzxJfEmy6YqwMBtC9gvTX4ntAxcqSjuU5eRXWWZZgN3",
  "key20": "5yfLHqG6WkxfnrRn1GwTTw8JM8rCoW93CgWXi4Vo8xVmrBoeCZFy8NPaoAmdEWf7VNLm6Wy17SU8DMrAbAe87SFC",
  "key21": "3kLQD4UGs1n92ywFiGZxtLzrMZKr6ozDDGgmbdnpVyKF8NDkvTwZPhnxc1W3QqoNSWJ9XEVeK2uUyCJVvzWTXJ66",
  "key22": "2Zzt6mi23koy9edmKPJC8xvtmDtrCGuKZ7xpxzqefbERLWQdy86X7FR5nH73LWMjF8SHvfL89VxGy5kEwXJUgc4Z",
  "key23": "4HeuhovtsCWoeeYS9YFMuTfGK9zqEQeKHDFZ8oqVVQQjxqd2pQn1L18aWVzV8ivtwwW3MFTCVshS9xfKAXbs67nk",
  "key24": "4uc6AxHf7Z3q3TYBwGcgLQXEAUbCFm6e9ymzMiret458oofQwhxzzUo9bFJy8McqEZ9C1PDhtfx6q42FTgL6adv1",
  "key25": "2rXWaVXr4D8AeQrhYVPXFM3ZVsrpJKTbk88q7KQM5FnD2MCcFF3kePpGrwcQrQTpDVUosHvbStowJoJXQWfJyQ3y",
  "key26": "55sZnJps1ahAqWws611yeLLjFJbxt5swcAmvQGo9h5DzmBvbJjncGpWUWDNBZH13YgE4MthxmyKWS1HPskWJrcmb",
  "key27": "2M2gNFzifQNiYtJT2TYzBKbGcSa7ey7J9Sh4JBNzSxsHYoeSn6XsPKMxyVaYy9NLWhmvrAZgTjNx7btpJyNS74Qn",
  "key28": "3J7vBBYHEFqPGCcz8sY4RxmGN47fBAjff8LCARUvcy4SD6wakuLQQoUwBRKtEVAeTWkERRXVtYPuAKaLWae9W6Vm",
  "key29": "3a7M9tH5gkWxZ73LiH77b4JuZxoToJmN6LwxUpWMwu2Ac2hnRgLVpjtzi8UHDJaGWHsbY4XJATug14Y51fDvUCJm",
  "key30": "21J4Ed7rRnwy6Td7zAiW7Xh8BkGwJYMkYtZC7qGdf4YLqea6PpfAAvayyjikX6iMSHtVWzoFYGAx5F7X1MCBjKci",
  "key31": "5PHgefAzRdMC3cBZgAax8GPJiQYEsdNsCsyrTMGdzoWqWFvXS1e6W9qzMQ6zdVh3epjT454eMXdfPiBffhGzU7q9",
  "key32": "4f2MPMNtZ2ksFk4Umujbp2QSE6dWjkQ3BHHbhZzF23iveZUQ9trdPeWytJueYmLeA5kEt5uCoV5Kno4Mkv8XuQrp",
  "key33": "5Gz4qdG2CVruwCxUKQH5UYF8YuuohTDbz7ckuXN8nXDKhv4Md4Axn6zmZP2Bp7s8QaHSNnNZoPQRMGdLaq2AwMFS",
  "key34": "41fsdbmN19tPSNr1ndc8UmWtkXgJSTZRhPxwJDdivsycr4CpPa8rPawpyBB5hJNNrGBRJnXXXM17MNeorfV2dz5Z",
  "key35": "ne9D8jaBuzsJch4brH5ENZW4nkQhPKPzeWwfY25B3UyhdHKgmhjMGGiK32q2chh3oq6v1y4ekAZS5zPTYvkbGEr",
  "key36": "3CkN2kpPCLkPetSPfjbRSxyXfkjvHYsRuSELUtfo31c76vvfCRpYp3d57RHQfMoYHWHKCoWFmuzT6Xd3XQ3pqBaU",
  "key37": "29BfZX4McaJUH66UzP8BfcmMiseNqeqnhvCwRSR9RZYRzR7oKm9vrE5c6jjMqf8uYXn59YvzNFsncB7V9GpTPNnD",
  "key38": "5VdjR4hAvM7kKXiYgyCxWTmLnXY2tuBP3ZgaYrVtezr9FqSPG78bvgfzEbrpz1gVhy1uwzMrWHZRjSjEqbiDgcuD",
  "key39": "mEopvAQfshxYSmqussFu3PGv52NSoufUwf61DRj3UMJxzmSrhJomgFd8AkaeMXZH6PmcaEQsLRp4sLSNcWYxxGb",
  "key40": "2RWUvGUn1uwTcqLBDjT6w8h5wibZL9r1BaiitZ6T8YyenUAnzhuLvEyJhn92G3wdme2uvBRNgeWdFPWzSENV5smr",
  "key41": "2hRsKuS1HMQiVzUMDxbAJQqmgAybZ2PRgFMJV41Sh6rdhdxse9qQJ5rcvxEjPHY4AUG4QqgtjLL5yCnTKqLXkb8g"
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
