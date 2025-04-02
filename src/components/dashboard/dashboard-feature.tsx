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
    "5HcnZPuLGcKNuGpfhsUWpN4gDzf5iuFxuu22Mq5sbBVKpuexvDKqm2e7ADSFZXeshTRWdbrpjNMnJFGQyaAHemLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yzuWKZcFrAhYWpoBnGQaMUoQoZ2ohu2zCcBvVVAKDArmr2Q4gscnp62bJ6fMP2QTP8VyYeR8NvcZqYgFacBy4G",
  "key1": "bzhcvjaQFbWqDbSmGXGgxRFD6z8qhKGXqCfrQWinwq93UUx9Ht3BbKWtcoutcNvPthKjYUqiyUmUsi9nEizDysE",
  "key2": "3B32nUHQmUTkFAqgmKKrAVPWw5TTwG85udXN37B1gkAH2hHcfSHhybH24QRp9ABK9tWaTmMoJASqGXExYwUfGuXA",
  "key3": "wTFgcsXNNoouif6iEpUoyTu7JLJStPBY4FdsMU6Us1aWXabAQRBoDseEwYUcZjYizNkskuCHxCSFF9WoHZHy3Eh",
  "key4": "5MaAHm3KvvxViZDmCqVv4AjP3uCLTX9aqReRgJL5YomS5TbTdmKnRhuTVQwAw7kxrtZAAYvra6kr3t4fWCixHEHs",
  "key5": "kGFbYz9yCUg62coAfjwhFNRgpaB5myHWHYUv8MgFoyDx3iJc7RsHDv2oXYfj9KrHSyYYPj3Ync2CbMRxeCYHVDT",
  "key6": "5qCPQSQFyQARPL89ECFNZyNDJyL9icow9rjwUo7p4Ev4x9cU9Lig1CeDLYCAH7R7Pn4fbkZepp5g9Rvpz7gHA5rD",
  "key7": "4C7pomBrk5MjtL1yqE7GXBmq9UNoCyZH3GaT5UrLhif23BcpJwcZgRNUKDdeYMAcdijJUMFfx62tiPmhvAv9aLrs",
  "key8": "3X9KkfWjmGtNeAN1uGUqRmm2XpShiwQwSP7NxVaZqt3wXy49hrVZX8iSTvijEc59FDRq7jX98yWHjftrePrT2jcz",
  "key9": "3VUgn1cteJY7w44rk4XbjV6ox3pZQMW9SkHTNJvRysefNsjRq2rQFMkycJPQJPWvzau3uGD5xh321QLWxrxxF2Q5",
  "key10": "2s9rzZAX6NkfKs1SvPAuxGKBhtNdQvbp8W3vc6q83EQ5C65b8f5rMfXt95bVdbzemzanS9SgBkPRXjBHVmEnWdv7",
  "key11": "3py3nS3Lyd6zGS4irhqhmgJxDJt7pjK7GVaQEjLMN9EiasSchmW7ihrZfejLDxSxqf9UJWiFe5S2hpi4ntGuPz2H",
  "key12": "4RThPzgk24mwv3mjMemLiHb6w8ftw4VnBRkmYAQukwJPYfiTi7SYusmEJdwsUMLF6NP8KMbfrBZxE8zf8f2WpytZ",
  "key13": "3KXLy5ju7Qxv3FAA5UYRoxpQwT9ACuXpLVb6WcQ7bandtXQW7i5WavwmkKSM436HXi3f2Lo1weTUqXKQ8Rs5EV4X",
  "key14": "2PAfABHStMqrYdzVccPckBZqgd7knvdFduUHMGEuCP7VfM5RfgybDkUfvo4xDEnyih8HQA9uiXpLjsKgXFCgjEDv",
  "key15": "32yMSqQZGrAE2nifLye9p7hdadM2xnpFkhuMuQT3L6qCEqXNXeX4xHW69v6z3hfsVZmrFGDxadBcMnR8Pcz18s6G",
  "key16": "DgAH1wqv1eMEVy84sLxPJBcbyUf3b1Dms81uBQ36j8aqhwSBaoKSz24ByC2Gck5AhpWk1hpcDKTozt5QVGsjodK",
  "key17": "639PyRkErvfYc7XnqUNAX3q94j2FzvcyVz91nzTXi6ekJ6wvS6bzGcUag1fwQAfAkoPZxCKaAitq3c6kn3Rx8TjU",
  "key18": "2HiLN6Xfy6UR6xZ53AqagoZhe54qfU7fX3v9HY6gdeHpPVGMgHy8FfCb7QLGQMHhoFw5WvBoDoiodrxWn8gpAYuD",
  "key19": "2Pk4tJur3osXNhh4jAoUPskBBueTtMiHD8k3JCHi7tE9CdMaTC3VoPPAJnXdGLzejyKGrC6ERQkMrTvP7zLJtPR6",
  "key20": "51fzinS37U511Q891Se8fUGkqGBYJMR7KG3KZzwUVFzRaPbxQstDGzsETqcqLrPioUWxSPq7E9QR4SArte55CSnj",
  "key21": "uE5zu2Ux5ahbVoLspG9EkJ5Do7eYw4bjcncy13znynxW2uMFtN5saM7GqZ793xSaScTbsh39575Y6RpH9oKnoQR",
  "key22": "51KsoThWzyDubtNg1ycoAf6AZD9JjswuLMBoW8T6bEA39A6C2r7W2zECkoS1Si3bfepmvW7YHNGi6CgXdPHSsVqZ",
  "key23": "3pZfzDCdMvwtiDGwMkGHp3p8Q1RJMLgr9Ed7nstdFaKVGss8wa1b22J9wgyaLPhk1RkrwKPANJoNebxHw2YBWxDn",
  "key24": "3zikzX73m2CYsGYe42GrxLrkpNKNZJeUhhnLrnkS4uoqJEKgLCY46kjrQmJSfg2gdq4k3bE2rcUnJTsZ9Rf3PHAo",
  "key25": "47R37VgY6G2gcyyb5X8Zj6avGvQai3fGrHnfdKgUBwxVisCKBUHYEautH5RGEd8zLwPLW7qff3pGWSmn22cTgbyT",
  "key26": "4FjXJxApX1kxv3emtdUoHMYeHCjENAG1fPoCugEhhLNFPBzNseKK7MG3eghjYeh9f8DuksjK5ZWizEzF3touRvEy",
  "key27": "5jGPbZUJBydfGsFGERr2LHHtfteEC7BY6aaLG2Vq5iR56of8rSrZgiyH5WYSBP65pH2khR82SdpENR3ZQjefBGYr",
  "key28": "TuoDnGyMzkJZJAeQRhpCYNBf5miYnaw8BTUiuaEoXZPuBVqyQLwEiseBETEVHFr7aDuSiTqKnCLgeUhCd7EqD8y",
  "key29": "Ywfod2zFVHaXrCsNN6Ph3X4NDxrGb5y4pL44WrxTCvddQjE6DydFq1T9FZk1SQAuRDHSLLY4TmqGSPiwWzAUvs5",
  "key30": "2EDe8YHxwtkz6siyrYRionL8AunJrnDejxGi18Yu4YJBGhAtoCZ8Q29eGwdbwdFvcCThG6njh2cfyDWgsyupPpKs",
  "key31": "pJoqpAW7G7YRzJEb3fF679LGnLeZ5b3ik9Sp55BroV7MnYJSo31buaxZyoRA28jRChWZqdREJCFB26g4ugzfdne",
  "key32": "3sLLJjPbnK4AmDZGEicLXTjHTE3uNQPdDPv8u8H574yL6orTGdaxNWgHJizoQZFyZ1PtNSsSj3TTjH2LQrR4THLj",
  "key33": "5nxETxQFxy3czwA3SpDE2rJTZkbirdsfvwy54VdTBvBZGf5GYretWX6C1Zk8XJ3HmuA3VLFQ75Lj6Xe4ZhE9HVUo",
  "key34": "jqYZJnagPYFJcCHikYTLiZ5dckarjmv238FyezY7eDRTchWJ11SuBsiZmCovNfasixiZT8STgdu8zXWP8UtLRQh",
  "key35": "5y8bYbKAAc6H5qCjkQSdyK7qUKbMiKjnkosyJ9awDGpN9RBjyh2HwrQJGNDdyFGHfVwcCL6ReGs9axYkKAxQbEgK",
  "key36": "5jeqnszWj46hxG2F1NwRwz8aTasiqR1MeAoAtZvPL4wcsb9hGRoEWkzJNjDHxmXPhJ6AmUCg6h7kxg8nzNsrKYxa",
  "key37": "5CSLT19hPzRZbsxx8zPrPpNSDbNVV1qFjsDJB11sam8Pn5J9Jq95Kf3tX7ntq9j5HTEr2GYA4y64aDiPwCqwtPT2",
  "key38": "4ejFfhEFByUs7pw4em2rUasP6eSLbbjHfixsPnGNFcqT9wpCXRY5LhUdf1UMGXiJXohNoqCFWwJzK2ZyoTHTUPVf",
  "key39": "3JHScFStBBAAABxF73GwQUiFvzHQPVB6bSDPwDEh3oxG33FbGra1UbRwWhLxrL6ZHVJZbFHmuwoZjx84tCot5vEp",
  "key40": "5RzY3o5MiDAT19tv7W1mR7E8xkj42mReMK8dU4cZrAfjRvTThRXJ1T7DYkZS1Nr6LpdQfjGYWBjQ5LgtpTvc3zdL",
  "key41": "kozEVjbbaMwYSabpA8sy5d4UV2eaHdDjTwYRPTJ2zxfUAr84kNr57W2j55s2auJK4HXAgG48T2uMTvtTh1mg2Fo"
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
