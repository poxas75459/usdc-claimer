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
    "5c1i1fCaw4Z8TKmb5fvkHkiETQqRSvrMWnmmZCm1z5b965uqsW8Mvkderhj1bP6ADidr7oKEbknuntYMJ1ijqAvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zGY6PUG8nREQzp96koM7EnSnwvRbfKjhZ3pKP5uFT9yLGaY5gcKSB95NvbDeMTRVfyPs5XF3DjNmtuL5DGBY3RR",
  "key1": "3nWLmgrxpUf9EfGVB5hnK357Vhtw1t92dGJBGH3J2SJYFrz8zJaRHNeBZyxZrZpTWH38sDXCbbt9EWMWTaB1zxgi",
  "key2": "5j7HHkYSg4cqUhrgwDArdschDqTbh2vQ43GhfB5cWCox45Gk5YLJsR2dG3sx9dzjUCFpQxMq7rSd7tq7FTKc9Dqs",
  "key3": "2Fy9caSrZn9RrkzVHbEdTSMDZPRuT8DBYnp94L2oTH8ANwQxQieVD2VSGsD86f4xSBRnE8qgKbr5VSNKH58Pw2mu",
  "key4": "2bxkBHSGezhwMzwTS46aohYUEcdwNuU9HvEAV6CJKk9gNkCiJkmzsXj42wmLLrTWFLQ2XikeDJDrWLzdxQ1wd1t4",
  "key5": "4JNzdnH6AsdbfMNfNjfBmh2mVS6bNKMKd3jdJLJ1EDhzSbW7oGKft5isUdQoVMyezbB4KvXVCBy9Wa4MyX83hmDp",
  "key6": "2XgQmyLT5tMT4heqhMskSuTgpvtdHnf7aE6AkfXQrm24KTPbEPSir1FSTsuQNHTiQNdEjDUG3hGxRt441dEkC1vi",
  "key7": "2xRmRm9hH9nCeH58zrGZ63GnzFgYdWEEFZHVwTGrEP1s73duivdv3YhBFTj8DPGcJUkyje1wso1p6HCunF5dRhnE",
  "key8": "5GAAxfScuYv8FRWCFeUavPHzTyDiQDy2X5ouNyHW6unwY9oAf3caqJLzwkUB85WDb3P4vStzc9f5gDuQnc54kJmV",
  "key9": "3fVyPRnGwva11sF2VXficur3rMWKMuY7nNS61SNP8cEm2XyNKBaS52641tJEuW3rWxG6bnGn3RHP2WeEGLuW9k71",
  "key10": "4hNZQEGVjKerGE5DHDsLWrjU8gR5wEbSQ4qsbgnqszyQ1Ue8Q334wpzXUYWkAUtSixmpzYVCuqxJcQuykRAHFoBc",
  "key11": "3RE5yWod8Rcy57915H1pXx6pNe9xiZBVwS8HdWS5tV57dCxsZ84yQANhwn8cfC1QFaUXB7Frk8ayCzWRX1nmkhf6",
  "key12": "5Lq59mU8pXDLgrAikypURu6moxc3getnmgSgDq9zVZGmhqBcBHAGFbtacVCLbJoyswktsj59G672c5uKjCh7RB9t",
  "key13": "3MqFcTe46diYfKd8xyK8o4YL5H1wi3awhPy6v9WJEFB28j4HYRVhSDoti3Jp1gEgCKAKTQQt3rnxm32a4rqJVNsz",
  "key14": "4p2Ud9WHUc9GPtHvtSXDs7oEuK9jGakgQFGZKYeGU5TKBN9aDd8K2xNScTFDiLZWcGDMFfyGgNxVDjXEFuwRPd7y",
  "key15": "4CQvfzCkUfvnCjFdunWXy7NnnBP1NsAY68QfPes5FPCUZ4Jwarh4RWcYwLt6bcvPsgafRLcccYtPdHWsiSYAv2RG",
  "key16": "4JVr8vDK9r8SMJqBDxex9Rq5bg2qiwWHgdTWMPC5zvGwMZBpJ6sYy6prK648EuoCCp2L7v4ApwNBp34WvdHgZXzH",
  "key17": "4QwUfDFfVamWn6aHQyFxnw6DZCkCEL2GxEEbvxrhSjjQ7ZXTp9NjoqkKrZg4xNdhYvoDB72asoyDKJmxJL3JuwAu",
  "key18": "4XYYRJZE8c28TU1dYih3UU8J9gZnWdHt3twuVAUBMPyP7YXZS2yqM4BSA98VHSu9myY8HcrbhgcZta1CLnFUbyxH",
  "key19": "2ievqRuMvah3bTLioNY6bB9ge5o8Dvh7mTEGCZZau17r2dpLP4P1Wgiw3KET4CmBvt8k1wSPnACkog7dvXq9WPU1",
  "key20": "3qztJjVu5vnCuXyttj1zrMMUvz6x5hL8tnpoPmSXyBSSWAjX4ppgRfZAAEPWsHurx2nmgdcWV4qc5ViNZUvYtaK3",
  "key21": "2dVL5T7KZZZ4Db98t6LDYLriQyMTCpLQwgttTUZsrqKoeRhz5ncCMahBNbNCSkoqJS9kHPc8KMh7UMwqmd12r1Sb",
  "key22": "2W2pQ4UjBiPZJtMn1ibzxUnnnnJh4zHvnHgq1yvCGyi5p31j1WWH5PFsr9stsPQJF5GJSzCFfUSawsk2N2kj5kAB",
  "key23": "2zofKhnhRrxfYgRX6fc29W3uSLfbinzBcEmbnTxuXADKgBidx98jmPyd2Uy5VmVNtPn4GQWPYd2tBTDuYz35wEvM",
  "key24": "3zPUUpWD4QNjuYq9kD2XgCaiuJyheeYuSmVgE6SuToKdCACe9YgXaSA8v1a5f5Ph2n7s4SG3uZPHMcoukx3ruDTA",
  "key25": "kC13cS9Scpw1akhdBZcDCasjgDYN4q1ifESWy5DQnBPjNVHKfRsDCCgd92TCgEqZLET78EDVJJBuFoFAgTjk7vP",
  "key26": "N4H1mDWKWY2q9GpJBsCs87NhPeaE7Jh7MznCq9nZsB9iFza3kouU8fAfKkf262DgwgBVEi8C6tx7RjiH8uXG3Yq",
  "key27": "2FSZU8pJEptKHvSjorwkH1oFMt5YJTkaUSJjWxNTnm6tay6hCnYL87WsHHxawtXx7BBe7NnmLNWdQ3kPqwNyDf2Y",
  "key28": "3Nf62kgq9XTTSpP1tnyoGfSBgPKd1HS28RzwAv5vgWqYqvmUPbmd9iquCAemLLuf8AonvjrUFpBLUmqf1g7pQo6Z",
  "key29": "5bttDPKohUGDGY7quYFkwKghtmtxQApSkBFLGqJ8UbwiVX5vRoHnGToNVCzt5daZQNv8MzC9qaW2rbe44SUa2EAB",
  "key30": "2MQQfb5NcW5FFqNfngx2hCrf1U97ET4VchCGQYHkJtnaxRJzPbyqWkT2A8GYdKeBV1Lj4CxPE2RrqAvt4dUodZMc",
  "key31": "2JJfg5ZGX66sddZ4P82GmFRtA8QycAdv9mpu1b7rRDjaipnTf9fPLMn6eEys3usFNYWFwcDjMmVS6VUarm39FRcd",
  "key32": "2ziHY2YZbhpEJLvGr7cEhhDc8gQoobJXfYp5uvgC1im8Q7ZZp4Rkj3DPNU2vUGFyeYAZ39665qYSz1wd4sMhrwzk",
  "key33": "3XVfWhqPe4WL99w31wsALrze9gTeED3apyb9tQ9uY5TQn2V7uMWauMGDqXkX9nzLMnnnj2oNfuC1rVnperaZbzci",
  "key34": "5PecsDLM7u8RAToUTm9w1xy4fLukF86an1q2oNZVk4K5nCsSvRthcMNxAEZC9g5kqdppCWTuEEncNF7qNiQ8j3Hn",
  "key35": "3x7xQWSHGgwYKHmyChScHooPeiRaeJyNxjNRjpPD9LXQXaSfzPH8LexUF55g8Gj1aLpphYnLHxRCWnHZtommYmRg",
  "key36": "3rHJshax4wJ49abj8bPHr59438Qp8qqgjQnWdzPwFr1WGJJVttw9moGHhL9YzbFF3oK9voam4KQfEnHPs7D4omgf",
  "key37": "29rTTbfBhVX4WtXFYv7hKcpmDqaEBXqrCA4hepVqbSwXHSRAN6kWgiQ1uCrxxMPwX94sZfwUUcJLjRFa7hk1uRvq",
  "key38": "KfGEH7vDn119Q9EDevggC2Ntu6EHAzk83g2sS48x1AyhSsBgnu7xypKBDYHPh3VNJJzAckiZAreKT6ZYrHtBn9D",
  "key39": "2crhmaNGPzsSzcK8r3oB1fGCi75Smw8iXE5QuFinYLRdzkWD8kH2anjPbCWUnHwYWRXu913Nzu8YLMqcbM5oEygq",
  "key40": "22uhPHR7VZjcQTcx8vtZ8Z1wRbwkyEPU6fULn6cmyMEt8T15e2bhqgVwc7dnUVJkzZRvW1tUgz5oPwt5Rxbj4EK2",
  "key41": "2Bv15RXo1qDoQG9GMoxYZ9eKve9jixzS6oeAk5kRJU9PaLrqHV6F9FAx4ozEeG2LevzA4SAnGkANcVBAB3NEvYPe",
  "key42": "3uVBNpmf8sRhh9WDXPSAzJ5QatfyztuwRJE6kkBYeJnha8n8pdGe2bftarV7XdWS9Ujai6HcSrJVmCuHw5dkQ7GD",
  "key43": "5Y1RNWpLvRMa9k2sLBd2xsqC9mKJYesgDRQCMwvGrVv3oGJhi7fEq2g5JFbz63aWwmofxcgin3nj5cAjC9Zu87Be",
  "key44": "C9G6Z8ibwNpVkG1bXHgpVQYgdjnpa6bjhrPLEyb7F4NmrSxdKbGHou5ZwLcFCLCypRWjA5oL4Le9xZG2dyR2zjz",
  "key45": "3kMia5bwAyF24sSsXGjW72nSoVMSaKU3JBuyB2EZxuyLs3vvuFQncRwajktT8YXDGycDEax2VY8QEe5MgwciXY8j",
  "key46": "31y9C3Gjdz24JUDJVHLFxUmxQpJ3GRxeRvxvwWtvmVTPqPNDA43x2sU8Gd3LzeC3XcdKfVLWZpdbgdFJkY5yPKez",
  "key47": "GVyZgw7UA2he215GYYJSqGzkQarYuNLEJfebEohHMWvEbwqDhsBzBG8BbCY1AXweu3dE4PXwsgUi8tR6m82xVWR"
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
