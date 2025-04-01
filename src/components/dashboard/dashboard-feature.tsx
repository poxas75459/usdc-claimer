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
    "541S7nmiAgECKcAcy68F9hPqKFCgbdSSXP6ZW1NPvJpv48WLQZeZNqdXwW96wck15SmaSZeR8eD5JhKufpokvBhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YSKp9DGZwVkJMnHfEK66Lju6JdEKKXcV1D6bPupjt3Mv2hKwwpsWGJwppHYiu1G8PDwuXKjWUnyBfHCJqbLgNVc",
  "key1": "64wp5hcW7nqUEFtKV2g4Ybiam8seG6KfRpLherkihW7rEqATEBmzPRnXdbupBJi3GKbezPYqTsqp4zKYNns3ac1r",
  "key2": "66zPWLpFQCgHE1B7vK5TjxP5FttmQd9AVUWG8y8w8NY35Bey234B7PUPHQQk3HEoe71yHG8mf68DfsaVsecAwmLu",
  "key3": "AMRSPEYJPSBq1cy43QDQPEExvUAvTmVxr38RFdmDwtPvFYNqE4wrR4F9oWfKX9wBdnGZwxxg47GKfJHGeJxaHFM",
  "key4": "214z3H8M4vGnCNa6j9ZfuWhz9gNLcBAQo452SjMgGF6NEhbqnNbqmGiepQoxB13jbYCAAJpMvxCWgzZuJMcDYU4k",
  "key5": "31pqppSZLuUryUiz72gCen2W1JEtxxmHXwUP6Rp36fPsEpMvMxQJgmvovRt1LnvqEhvH7Dg6YmtFB61qz7Zat14c",
  "key6": "46WuYMKC1LPUJL6doSquBr6ArHZBgFCzLo2UXrZRNKhLqqm3vsznp9Y3jixMPSEdgqKKT8dJrmZ7q7sNTk4PeLq6",
  "key7": "Ns1juyKY3pF5ECCteDp72tYcKJNU3wq511HLK8Xq2CudhDommLKzyDnaiQq5wxF9gNLs4ChHKEbsWMA39zpb39V",
  "key8": "2q8KEKhDVfuiXHPWiQPjHWfaLoWiVpymh2mPHDH98N9jHXJrYENWEEAfMjQEsVHSHphGQ9jquXGooEubu1KDaYCw",
  "key9": "5A9WjqLMgYpcvFLF12r5NZYYiLoVX96u3oZBRtG6um2oM3z7Gzf7eb2pgdJsptJhrCQefxrZGbdxMe6s7rj8cdH8",
  "key10": "3HPFPvr1nC4HrFzdpG3pPBV7nJChPLSwzcRCYQ9FCRToSi76eHG55rDgmPToU8UgXQ8vYxhB2buqfYomgfWnT1Xv",
  "key11": "4eJvA18cYNaLTcHba5Jk8ix563VHpiEfWvHda3GWXXJoWprauFN79rpvQqYTtTwbMhTDTHc8yD87M2EPPwrMD1dy",
  "key12": "4UqnLnA4H5AGqtXV67fKDTDoyMAbYsyDDd66FpoAma8aD5QoE1pf355LuffrMxdpkaDftwz5kzB5cVXXVg2ZEcYF",
  "key13": "5wGTw33ceQCwYaB4FhcKecEWcL9DTypkeZ3jgiQEeo3W9KKz3objYs4RLSV7btoFPn5x5fyXLWbJUQ2C4Sun8aX8",
  "key14": "2ADomTWTCFH47AQTDs34sgFCFehPNiRq7tHj1PgnGkWy278Cz5x1QkTaqxSfKfrDnVHdUXf5stKzWTucwzW7KbV3",
  "key15": "3aBRu3radL6ghzWxwK4zm3ozak6pjuDXMwUEfcBi14Utj228NnJex2QGJXt4KT7Rb2RvJvcP5ugXyy5rr9r6UWWq",
  "key16": "65UU4UxJ4EJNZxhZQqB3xAZ6nmPTh381pZfxLrpAUh3pujsCoyTVXhC9XF2vdoeJkcJDxRq1fDF2fxQf4mjvfPTV",
  "key17": "5gNW5E6Fm2KpVeZ4TAMozvTLRR6JPpV5Hxt7d5dK9Q7Hn89gA34EEoXpQ4JYWaZd42k8LmMTXdsr54kG3EFNaWcM",
  "key18": "5TRa2Lh1rRcrj54aVNQ6oc56J2ZdBx9moCEds8faNwm6AEGyGGaDC4CXrUzkSFfpWDZQhjahFL8UuW5Hez4aXXTx",
  "key19": "4C8iTbkUMTQSqz3gJpUwQYjPCdCNWiWSsAtwn2J6Q2gzmaZnCBuUPk2YSEAxHwLufF6v8Yh8b6wFWao8iisPy4TY",
  "key20": "4VCHntoRoj2MTyHLr11aDqSv8PGVH7xtMutx1BE7udfMRa6iEpimaKw1gJcpGiUt73eD7wNdQmjjBQhnUGoQG79e",
  "key21": "2JAKzCzm1KvCaVaXXwTQQDVDyLwLdRukhiMgM2ybiUgHzNCPutyiEyC1tHx7GGwKoCdXJw29cv3ijijNCoGq3c7Z",
  "key22": "HeSrrfLAv2rQj4obAzWqMHNiCGQ8bH28nFcZ9WWdqShsRCYV3FgQ95uhiPZknMTU7bsJRwJj59BNcVsUbwU4UWp",
  "key23": "4gMkue5wxhds2GMd8jGgvs1mysPP2zkmrnvTUeeSuP9KTauNuvUEwjPTWnC8dXkxJAcJrgEAixxEqr4UEpsL1kKw",
  "key24": "1eKDfFfrXJuMiG1bo3Q427A1Udxnf14fzUETbDCjS1jM71V4iZTwtW3JGwYH8qW7cSH5j79KHm8vnw7ssrdidHW",
  "key25": "3pQjDVSCS6MqfnS5SYAVXqGQCLacf22rYmLja9Jh8DskchRx8JHoZfrREKZNcEzMoseZCvrd1SL4zd2DYepnWMMZ",
  "key26": "dT8vfsJ1qofa5sybi7yQ2RRfP8zriCtqJRvNynvJXS8PRsjX4V35EiMyYyyZtgwAbwaaHmwHggw76KH83jks2y3",
  "key27": "5KGQnJTQd12z9QciJ3pqXFF8i6pW59SWXaPjVADEvgQiXK5JGmFn7EAiTNC75YPJdP5VF6crTEiKmQwjKJRKDmfJ",
  "key28": "5nXcTgtB4vrd916w5HD45aufKUoyegUMiMenxr9ZkAsz5pSjWXzqtfrrNKEthjoSMhS8iEad8sJnmVPJsbvXVeHY",
  "key29": "2WduHbQYbDrfdkvM9EdXPL6UgHPXRnMGQA4hzxQK3xBsDS6iACxep2BNRQu4HXeC3KN7bYmbYAmAtevpX4PehT1h",
  "key30": "bmww6XNt9hmABxZgkqBTSmsFkZcV7t1FK91tbPat6JvQoViyg4mamjEpxncNE2VazTpPDe1TuFPbrJBYeVPdgW7",
  "key31": "2LEUpS5mYy11taBLx9MdH6wAiYWecdo2woadcbmXoyfXQywpCFL4sYFf8varYWjGkZNR8YVdF4zVN9qceN9Thbub",
  "key32": "3v8wXGAPA3QkrsksP96FxV7DhAyd14CD2uAoGd3BTwecBkMEWHu8UijZJEAAptBBxRVEQWBtAk962UcKBVW3L5pv",
  "key33": "BikYZWjktX4rgf1djgeDQzvoAmkQkzmA4RK7AnXn7i9p4UfEkXjhKprMYk2bHmyzmV85xGQse1MBrQQrFHgAoS4"
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
