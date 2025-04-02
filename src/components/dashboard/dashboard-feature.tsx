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
    "2VUEyMqE8ifAtvXDSyazMgY9MuEELy1dZJCvnu7cojLJFTg78WGf1srSAteYtwrqgEjj1HjNYj9YNLP9H3qm2DDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApRvQuu89DEGXhrxF5woxKn5K1dVoVkufWMFYUAqMWycoRNnbMLmwARZ5qPDzj6SVHgVMUtfxVFFDGwUhearCMU",
  "key1": "48WeiWx2ran5shVZLPktcT2ERKZL1vhbzwt9XSGfzoP9CSWa92GJFEX3ZajYRYbCJK2qf1g2FWDbBHvbcUz9RJYW",
  "key2": "5m5uBAwmACz4suJtRoymXfRtSYEjf1U9sTYDyjhGwdgNi5RZTqiPvnqbaKRt6Xjh2Pb72eDzQ6jN6yWXE2t92ZNj",
  "key3": "5qf2tLptaPxehVeEScZvScjXMW8eS9v5GzivX6J51Rk2cciKvLAnPsdyKGKT8KuYFNK3jszkyeNgFPJVdYW6FwSf",
  "key4": "4S9zV2xw4FFPVPMAtkrC4voopWXTeSp4qLsUgkq97RUTVoq8zV6Pr2UfRs6afgzzjf2gRBKAnP7EG4HD9bQP6WCh",
  "key5": "2nidS2HPduYhPmj4zDgwgiahcWx4WfqZZz4r4K7Zmi4sbnSdxnmvkHcX3CNpMzsHM3kCLFwvtsJGMUgAVYSafY7C",
  "key6": "24vDQq2ekkDxdUL2knLXyVRDsuVV5W1MCXhqjHRqrBZXKvREJdw2HLH2y3wAjmKJZtNkeSsTVUrgiHMFbFNvcnEq",
  "key7": "vmdvCSEpD513YX1eEbTQkFFHeT7zWvgi8JWQbyvET6gBsinJDWk1xNBtrvMqjwALwjeVkF5cVdV54e2dnybYyVQ",
  "key8": "2nFPCbSoFfbj18exe8zsGqZtvz3AYMm5C7CShqGPX5s4UXomhA7TtHL78nUtim7ZkUZ6oJm6SuHjNVt8S3HyCbh3",
  "key9": "5sg86ZMHqqHAHBspNd4mWVy5upsUWgBanJ9EFFBV54EV85Fgo4HX6fTSpHvn6CRw57LCrQA1PvdEVsbEeGXVzFeL",
  "key10": "5pxiimBts4o9uiCxanDJTVCDSR3uMXwcRJWYSxeLFFxFcVf57aNW21ViFyjA7LQ2a5XYsYwm3fXrcAYyok585FRF",
  "key11": "3UiitJLMGNZfqX4cGyn8AWaRcHW9SiuZTUxmQKiFViH6k3RYh8PCBSJgEzkm6nK2rePGuQKdT4qCX1khFgg3s31X",
  "key12": "61h2JX3SSuLu6hQ4nYmaiuHcqJLydPwmFviBULvMKQtkByskpCeXBP5isBhKbYnNo3yZbzsNK6jJG2CCCK5MUvuW",
  "key13": "2CcmzdxoSZTaUAKEpSCBrBstQWPsN6DtejaRRpJuyAxpRf544QazwTJFpCJkTCvX7DnQjaWXS5quNBp5ZZQBJkYj",
  "key14": "2CptVni4e1cAJhG5vFBg2nxVAdgo6kjYJvfCyn91wZEPHUmAhzh96yHv6s6EEZ7Lo8khTNYtKhpF4WU8AMh4F6eM",
  "key15": "4R63uscNcXdvCAPDRF173W85id5awHZphuVFu4jN4bGYTt2APFc2p6BKrZJJVist5JEm4ULvp3okiqGbfWyP1yZB",
  "key16": "Sy2XsZxyvBJWVorXuAR1ggLNeSpMXXbiSxdEyCbTEw1Xg3fp3YwEpbRtorpx3RqFPskJ1QCVpZaLMBaNgVxLezV",
  "key17": "3M4iJtd5mteBCMWJNgjv9SsbVRw9x7WZfMTF2uVupeaemvQQHn57MmtAE13xECTHxXLfvYXTYjvvv2LateMFWuSc",
  "key18": "NNWatmp5ZghjAykEPKDz2j79mJzBkd5Rrtffvkzff8JBSLbUYJmfqAv4s2e3ntLSbqAEpdBuuJTx2r36McBCazD",
  "key19": "2qKrd5ySDMDLHpJaeSTG5wjrirP2JKARXfJwTMkZbXNcUSqAFnFfKfpum65Ah1MNPgo3Fh1fc9UauWa72TdfRrYr",
  "key20": "5dhC1ABe6bZnAJ4EwLYBizTv3HVNbVH5kh564oC2eqvPkfCdMpb3SW4dGB7vPLE2dobWrHYgaZrBe7XyHnPBb7Ke",
  "key21": "UfNrZzDgzsRQF23udseMjb6j8cfoTAhcELz1Je4oBHgrBGV7SktPj2sLVZGxVg1wcBkxnH2KEGmTeWBw9RH89eF",
  "key22": "4Y7vuhTxwMfZS39TgmvjmHB8RZetNqVRzZM3RaMsC2uTieDYHzmSVrmSPPTscQaNeeGdMz9mSxrfToCApVxxfzBr",
  "key23": "63WrwyXvzbKERDLuZwwx2RszsuCnaZ6omtMQXwZys2n9UyzGSr9MKfeTccrcPspY3vtyJ6DgqXy3bCpJRUEqhite",
  "key24": "583SrZ4kF6pRxN9YnA9ytZH57X5DiGjuq2sikGgGw3a2ZRYAD63AazoroPT1gq6S6kft6C7ruLkkqQgVQPMMQPSq",
  "key25": "5dLqKND9aYhqVMiR2ZjZqkbu43LSM5rhs2myWnZPGUwVArb8QKHSBjS2ZRNHnmhb4yTxJZPpFhMJsk2WjJDXEBwb",
  "key26": "3mzhxmk2oMk97WhMbzTwpuFXQYRKTkbLLcgxiBMiJbLyeUVQbjqRj69TyEHBffFiRMoiZZNV9t6xuGY651Hq8svQ",
  "key27": "5zFEBTckVPLNKBeGEzkjMt96RxP67pxnCwMmhcaUCa4wuS5BpnJu7wHw52vzuJuMwsV4mxkhKenkeqedCaCxtvM",
  "key28": "5Db7ZFM8EBiATjkxBsQPSnkt5MPbzNo6sDC8GRDMe4N2ddJJJNcm1T28MTg1bhrXRigys5yKREei8EkpXNhZPhb9",
  "key29": "vkCGhkJniYheQGJ4cHhbpCSvuorfWZ68PdmK1xWo11iEpA9TPV3fLbpnDmxWC3sVt26jMhUoEJ3iG94AyCZzYcZ"
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
