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
    "2eyRhBjx3Aed6DukWWc1GsAhTigN29MYmN96gogbtQYsABfsXJgXDBRTBYxx7T5K3AuxLr76YaB5wueshkzUMYdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPsNxHEQvdR1qzuJTcDGrrjASk3xjJxw7Mk17sq95wv2YMxuNTurj8gTcpu1YZ5YtiYLBJ1qhKzbsK1Ay9VaDPZ",
  "key1": "2RCoDyH6xwc4mNevwz1mFT7Z3HmwZ6QACfkzkRBb3zKepLoqA6JiWDyPyiCJZDG26yB8TADzn7vB1jKQ61NsqjNy",
  "key2": "ivNcYfGe5mPzU9gaf3h2afsbWwZfpKBG65EqPKjuVDwYvTML4hiQ6CNdJ2ijirW5xhgVyQEdK9mtMW67NzrnqBN",
  "key3": "4kbWVLLYsAzVRthALbnHv4YVJN2pa7uLqh5dByrqqj6SqdDf3rP6WwVuUY3JUDK62m3BUGhLTyJ9LQa8RX6Pq3eJ",
  "key4": "Qa6h9JSEHtb8TstHag7ZEqXF1A1FwRtHZfWLG6vRipjDq1Dhi8o9H6pREVTHRrwZviY1tug239R1hzKLiJcLPaA",
  "key5": "Dy6t1CBmvEC1EVVpdJJXuYyZXHtEWvCQf8N1Jp7BNeTb3GfK2ySak6fe1aXfoHnDveLhtVartE4ZGb1dRF82rKb",
  "key6": "4UhcMdWkEd8Yn6mPhEvMuF8u35R5btSFCerawMfjdynss5w2pDcS9nJUwek9U1b4EPbzsBTK7sVkZxq7adXadKNo",
  "key7": "2tH3aVkDFdahDHxWkwc8gufnAuHWE4Z5mAbaQCzFaWBwqSey8F9Pm17imvdHTHrpb8DECEkwL5nn6xbAMQ4dQv7C",
  "key8": "65wUzZUy84LNK24HJKYq1Hvce1YvzKSNqHFkVQ7gnPJyUbgsHVEnLDjTbShTRiktCvNcAf8Wcnp2zDhui33tJvmr",
  "key9": "2gPwYAcUZzRpCegXVeh2eh6Pr6PvxuDLBxhHFdopWk1tSsfLUvWgHg5eBtzRDDexUW11HenrTTaKLNgujLq6VpTK",
  "key10": "3inipzMneQsvGHQnJKmqWEBHMQthuBp1yahXeya4bprXZvupEabr6coTmAcjDH2qVL3tUVheF4wXU9bprMvkN85P",
  "key11": "vmWUcjqGtvSgudoLhBUtdC7rQeKAq3DspjW1pXgkKMxBij8gKwgNAsCpRTuZtoNyMgBBom33QA8bw7pUMeYK6Do",
  "key12": "4U8BTroXEgSWPaJE9fLmYWwYWkBEi9yiB8Nm2S1PxEcgNKQKKnBnG4GpQyS2qu1mhvMPREt9whkWRbazWMBdRmdw",
  "key13": "5DftqAu7ZbbDb3LmV3M6erqMC7NL4RCYea2vvEZXLrJHC4hvnQTQ8nCyDhnASNGE71AACnUJP6dgGkn9okjVPiG6",
  "key14": "5yj7asa8gRDgu9GvWNCUxVnUxzATRZU9zt8DYSZkRk4nSXDSrN2RnHiVgd8dXK3RLXYuxDLjkjnHJUQVYphfuXkV",
  "key15": "NajctjSon9wtHJig6vXtSy9UGvgZDLMnh6eSN2z87gSwYVudwF3xNTwht2oaLgTEua7xrqKRpSGohRYBsBt9Nyb",
  "key16": "3z9cTwH9XYeLUXHjieyWhE2FvQQbuUaQQQ5ypthp4WYgdFC4iAsHctRj8CPozfT6VmpfKDvNik4Bewq96495HA9a",
  "key17": "4UGhyRM5Q144ne9s2zLrdSUm1ZRoX2r5W66tkVKBurqpq5khkwHZw6mFqmcu8MXTUAGnD1fe7eArX87we4Ce4DSa",
  "key18": "bTvSyDjj2kxr6cY6Sge3nmYdDfNYsHcjuoX18kKXnR21tRKxkYaEhUfFmAmAihZUcy1eajdfDqwDfL6MooRypLS",
  "key19": "3hV3RoWRA67HVwkxcSmLgu9q6k4Zg8EtGThV6S6fWFmZvXtSX7nGJJdmZsJ3jesjtoKTjs8MMNjoCkb3ZzRzb1Gh",
  "key20": "2PRsifBUQ4m7Qm1QJC6d9GADHvH9tGgiDfbWm3HT7uMFZnxBFMZLgBdv2erccVKGy6B2UdzDadajfRsVXKqHR7EG",
  "key21": "2Smh9eNFeyJArN57jzo2GiUHNw658zQBFADzjTzX75PV8HN6REZGo9jmicVFjPXf9rmMskFCqrJNJjD7dD3XQNJ9",
  "key22": "LrWyJ4nqhorukkJcdjow2qd7y1rw5kus3N5EuDQf5CpbvovXv1ReGCCmXDmVP6eJdzKYQoU8VzPmFmZZRdqw5MS",
  "key23": "3sktxBM5GrTtA8RfbHKB7rDzen5SnecAyEdcviatLXtGxajn1Tt7NNnjvLWAMUVUadg8mgS9Qh9uP69hX7sDLsaM",
  "key24": "4dSTCTNYeR1myzWSS8rn3trogpEVe3Ruscuzy7cZQMaNZPbjxYtHRZd4qRGoo7b9QCk9GNYJE4PrwPfo9KHCG4sW",
  "key25": "3KCtNWnCPAXBQD7WWJ8UhhNyCwz3thV4i9UN2S6vg7zcM8cXD96bNGYvKFEGXXwwrtQgXgh25FFTG8fdu3NCPNYa",
  "key26": "35iKaLoxrF2XKTu9cfifhUiYc28zbNU2DLZzay5pFyjL8jageMEzUDZTZ3NFUfqeP3iVGtnZ6fERr4tNRhwmd4yx",
  "key27": "9GRfx864auLGJfFAsdBYBUzXxJzciy376UZeKtzAW8A37wQ5uNw7QF12ggUAkaUkMNHNXgRAtZYxv3XGwD5XaPd",
  "key28": "4TrgK5iPYSDqCnAUnnAoaBLZYg9Q9YMJskEiFEP5eemY1DpuvSfjH9mmUKNYvY1qHRhSV2ptxAG5BrCLiPRR9Wyv",
  "key29": "3fpuTJpnAVsjvffNXbgQhWk8NkVxiriWhZyRUtGAVRihuqdm8fuycHNUUAFpjB3pfeFJwVy2YGgQPQbUunBAmySr",
  "key30": "3ktnCukfF4PRTxq1M8EEbMW7uuHEGgsRQVLJXiAKpNqkYHj2CjDesrkBZWtZyghgaCBfqe3e7BYe4SoYLvheDwDj",
  "key31": "3Fi7MmvicDTkw9WtHrk8u5mY8y3zNb5d3HWETCPhF8dJSzEd7qdXCYiP7JtpvHhpK2BqKTFMgJzkDn3r8YxvyWna",
  "key32": "g9xR5R25euf6LYdukcNx4Kmi7Ynwb6NnVw85FZeKHbF1WxYRfvdhikayUFtaS6zeg64RSJ3tBhPD6rJBQkG77hp",
  "key33": "64YgKrHRswe4nvmZcXCzxS79K1MYXgFbxcRatCvkgfKEDy6mJZSZG1R1KyGvmDWaB3VqWPmpX7DH1P62spfY3Gym",
  "key34": "5q3xFCv3FnX2Fif6RFpLDGapCLXYVRujJnKUQ3VBY4ZSnmrBVqeNxskbsppkw7mkN8FuB9L9GnXu3CgsFB9izSXJ",
  "key35": "4AzCbgGoFaan1Hw5FLuVWffQ9THnFDBqzknaKmsKUaWgbKhn5dR1JAKqVCfCFsLCzGPAZ7mYHqXEZktGRGw5UYSj",
  "key36": "5ih6Ag7J3BG7gERxuMXCWqj2do6B1xgN4CskQWeGFmzjFntf8KFSjN3dwAY6mq12j9aoX2Yx3oJYGivrMeTrwRFa",
  "key37": "65XMMSvjh39TcnfQeevxDgVg25Mm4KrnLcGwE4PwqpsBvUZQvFVVMtca3KkcviP25A8QMEAGs9azHL8n2poWWeRL",
  "key38": "2ptfv3N39HtcAMkpEDaVXQMfeVVLnfJGimqTdowikEXZ4XB3MeZKdmaqW2EKfT2wNZEj2YH8Y6kFb2pYotVCc8fC",
  "key39": "5Zo52v1XojyYYdPtCXcvEdQgsNoi6PSqDVZVwFhjjLapvBgmdF29yxYPLCgZuXrzteJadUt87SvHBXqHr78onKSx",
  "key40": "jNh2AQVDCsHztmujVQzrZgjt1otNcEgCqTwpn6Fbd8qDNyGevbfYQKiAJzQZ2oXJkdKwJQAfqZ1Y21kGPhyT94p",
  "key41": "4w9rWruSKK8bL7T5drXZMXjgbJLkTr9Dbj5ALkugNgfrDUijhvxUbTtbBWmUZH6pVmc9SXR6jZMywLPVabYFCXwQ",
  "key42": "3oWZFeC8erW111sKiJe9sd3zGv98s9FikDtmcpVAu8gjwjNYqxN8HjwtWPntaompN1gPNssh2YzL17wBNETiJSCd",
  "key43": "3wM3dZ8UPbXpLkiD5EFgxbtR1WxW5Vnwyb7kTi2yyEdarudyNqTqQNmZ9TC1ebProj2zKaHU7fHDiT3KYq2Qq9jR"
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
