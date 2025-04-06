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
    "2xDZSpEWXbuD53BNMraQJfBodi23AGBu8intcsM8GWEfVGCEkFPfrhxC2YnHhS5Mzs6BhNN6XD9ZHTZ7h2sE82MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48z6bfXQs1GecJosiq5Fw5tEjXjZR51HbSYGxSfacRe9RH6ATMgvTaq48wADBecENPm5CkqaVR9cFbZMDiR9GJzG",
  "key1": "5dn6sJvC2H6Gsu9XNyt89Ct2vAy9nzoTzbgWLAE3DxosBsXVExcz27ReBUzPdjCEp5VFLiZ8JMj8kA7DtFGeRFJ3",
  "key2": "4mZiGyaaCFHAYnzJuZU8wRk9SS8QnhtNZz1ED9rqj6EKVVLeAG6QN5xdY5rG6n2YG7huiVhusCnB88q22Nm9Hg8",
  "key3": "5Skse2g6PKmJfmh71TRdUJENn9Zk2Ur3S4zNz8ARnV2L4QTbXcQQQJ8eDWfa2UVmzAf7PSdjEVvzU9L1o6HfNzUy",
  "key4": "4nBR9kaXJwS3KMhMQe83yNAHCALfiKokqK8gQZVwgjBD8EEmwk5HtYebRmdCwQxNgztBTZtNX1S5apFn7scxzkAs",
  "key5": "5rg2SMJniqrSJcJ7uZ1XGwqGKT6mLARgZ3vw77WwLk1Ef9E8Qw9nuUVBFiRjWLeqsonUgeWfMhUSFa797CTaG6dx",
  "key6": "T9THp6873yS3to7jaKQR6ceWVixMER3PnXP88FUXyJwpjam2Pbay8FUuNu1KDwPRBCqTsbEhnAuPnUH1JeQVgHM",
  "key7": "4kihFCQuWTuLC25q5Xqr32akCrUWg5fuihy6P3thrdcAMsn8C2zUPuw82nebaBG1Ys3Vcr4AfpWBNe1x5EocuKdL",
  "key8": "2zP7LrrkcvHqcdNqWN5dxv8Hnmwn2RZR8Tcd1haugTAvEHqcB58b3dy6DG8BWVRrYWh8dD3QR2tqnpAJBarVpezc",
  "key9": "3QpakCyWUxZGuw4dpG7xjghpd1ecxZadPwMpZWVvgCvLkMUfmPri3Z1oxfL4eeWekT2cCWVk4SLGGZbSApBqtSps",
  "key10": "4R2e26cYaYtbXoAf5hcoUrZQ4DejD59qX78xQr85TYq73YehUx5nP6DXoDe3MkXo98bzCuoAB4BAnBFA84xQSs3v",
  "key11": "4HhK1geh4F3sLqjbm8rGPG4bevvkEoTAyt6PjNKtLnoKCnSfM8yabT3NM2zVQ1ajTYi7orxxn4hJE5mtaQvLzFbb",
  "key12": "2kbiXRpyKR5uvosGHpjiC9dGuqaZxYhu7kG1cd12vb6NnGYiPNyhTs39hxiejsffVie2avSUrjwnYcz3KDFCfDSE",
  "key13": "3RL5RxHp9ZieVdqEWp6Gf1JmL3LspXfuhv6QvB7HuLFg4m8FaazGwJW3KYZDnDMHa9hFNf2yHbRPcgLMpB1vxucN",
  "key14": "5qn8NDn5zEHvmFmM1mK5qDDncMVfBMEYvcoqoUiNoathgaiKhdVMW7UhGyCVFNVyiSp7jVLzCz4NFLsYLSVbiSjt",
  "key15": "5ewNJofJ5d5anfKSSHEUC5CxC2aBccuTZUogSdHpSHGtfXE23HYHHoHerWVMgBrqr9ADvj3SPJtUWDJ2JpDxyL3U",
  "key16": "3urGdx625pb9qLM3T1Hr8x9f1qo4zQTmRerJaNXMfspk7q6QbMUotzbNoEfYXft3E3q9CSYtpukGDpiBfnHvm27J",
  "key17": "2zvR94CBnuU4UEi2oD8TQnraNSHBQSWtemgAWmkfMUPTvyjmn2Yz9STuyr1ZCVMEfxtDNpedyipeJmHb9rGBZA1s",
  "key18": "43DHt7GrbRg1TfrSpbQt4e3Jdu5MMqxeD9XWZ2Qa3cV5ha3aLQA6UvU4mCkQRTaqDEcD5tkyDTCNSg2tnY7bYPa",
  "key19": "5F5pD43TbycKufh6oY7SmCc6Z3dvAFYsCEnjbmq3M5uGRQqnpeKivoC8zVo7FPVmjSu4tP1rZdRHdPgK9DSREBTY",
  "key20": "2EmJkvsoaLudPrhvyT9DZpNdTrvBPkJsZNT1BbTqyMNAkbcmNoL85afXyUqQrnM53Rco6g2RtqRn1iHqCu4doeJq",
  "key21": "3sQR9CAaAdakxnzJ19qgu9xQR8grd4VpghQECs5R1cuCu8ECx5ti68eVxQKWLMEN2gHTpujDVV4NXv28nQeoAGjx",
  "key22": "4oLjhPHvte18tYDKTASB4WcqPPTTgqGckC8ynczA5pw6y4Xc8ZBd2UrcAxYZZpvWU6vLv9dGk6rPfZ41rrkVwBc7",
  "key23": "2pKqKKbsJpMfr5qVmQba1BkrG59weriEauhcqN4CdUWLv44zoC66HgueAzqEyuxinQKyYGER632TpJDKXhrmfCsa",
  "key24": "2Lce4RpivaewLnFCGSFwWf93KwvEUW7ofbaD7JZPckrqkPxNLBHMiLeKoA5PJFNso29nXYDda4PhjAoL4mjmqYVa",
  "key25": "xsVtxScT6wi9tNLZjHRUXZvd8nu6PmaqUqbQ5E8JxZ4T3atM8mhMCA4TCrG7RNkxVcFt3BvD1Tv6XWfw5ivjMv7",
  "key26": "5HZkCGQJdfND9zAYgRUufC3VRHMYXY7jTLgcjqx7hiuRBaR5ymqTHFD4gEwHDgPKEPC8dNoufmFxA9AJXtYxxkZQ",
  "key27": "67VHkM71vUjUCQXKJLNDgnHx4GgX8viXuJe8xgKddCpG7yDWcnwqyenhhufcZZq11iMSTZbVZrzgASjfvmny5fWB",
  "key28": "AfJ2WfwWEeuf3ERbx2sj6eRk8s6frLeKHg9PFoerK5dsZnNrvvjgGFoGmnG6cHqy1FqULgbKeQL9m9j6ADCvnhY",
  "key29": "4Xdt4xXGrkUwTSa3R9j5amKA33M781LcjmpYp1jnbAcirw6j1RQfeJhuPB8NSMjcKE5LYQHnjcPjBUTGsSaywq9b",
  "key30": "2WchXqKCCEU3WQdfYKte19GZV65E7Sd4xkVsdQWH4vxfvoHfgaxVpcdNWTwSUz76J1GyXJiRG5NHi8Yko4XPeb1h",
  "key31": "35xLiqJxS8g395ZU7DhB6vwBQKx9ttxBifF6SVx3kanhV8st3cNpC591wA72DvJYDXsJVJLjmVJ3hgCzBqtf64j4",
  "key32": "Gq5nHexabdCShhR634rsYaULfFKtbLfxi7WVoswUg4dxKViuMCgFgSrd1xMvmVsER1drNry2ZfTATT7VoQE6GEf",
  "key33": "4xT9zpyEfF8YWoCZiPwkNzDC3DfxtgMqEhQX2UPax7X9FzFiSVdTVg7g1ARFmFy28pCngD9mD7FDZ49XLdSBxEvu",
  "key34": "2ABDL6T82UdjBx7dC4y5FfLhwJ8VpTEhkpzsrBmjgb6MQuXEiLvfJ5GGNT755mttEsMy7sxZtarS5GRPBMbQwSTQ"
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
