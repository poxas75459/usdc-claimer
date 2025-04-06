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
    "42hdB8QV74h8gGXZC1dMMa8gyUi7gnBYna35vRuAZabGhTkpb69bP23LgRJU644K57ihwUMqFv1ipT5YEx4nyrK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwPKRJyH1s8zjNUc5FjcrU3m9vyCEeMobh3zjJsmVEA4kHZRn4MuD8DbyaNpgrLABBHzJ9gcxy8eNVeP8Qhsyy4",
  "key1": "4NafGaZVJu1hP84PPQeU5J3yZ8kCNmAr1kumQLkbvhUgqzCnJV6N6eRt95pUAg8xNubaS94ykN7jMgF2dpcesRmf",
  "key2": "3vMgiJ29Gy4M5Z13S8W1iZBHE91PmQPbfycSchuvXFaSGbCkdu2v4GFLcx66cjuftvPNHD1PQVjETxkkeY2t5mZB",
  "key3": "5WwdWXDjM2ZUrSUGb8cppdkWYspJDQ5gFTQxS5MsjcAzQVScF8aqdFkF6VdwLoMP1RexKKHtUf6ckA6p5GYXes14",
  "key4": "4rqSH9BuLqjNMW3KdVB86UszJoSYydgkwrTmnuZBMva6hQ7rQA18YgKEyMXGwTQXf44fhvP1gJLjnfXPm85JC3YS",
  "key5": "3Um8oUyddKCpa7UkhzZu9kanUQPMkNjp33hgkEUpUbW6RxpyutZ7atzCRxZYjL4Q5Ap27puM8WEoBF8uKRF9Q9sv",
  "key6": "2yxu2jcPGbkPBXjvQu2nxjdN1Yi3d4dN9V79je947Wu7WzCYZYLdscA5b9F6T7g9eS5Wshpuf3DD74qy46a2cooN",
  "key7": "4AvfCkLWb276qv4XQUcB4wtxViBEpxNmfkchoaQNwfuoUWx1hkLhvfGpWwH9jTgcw7xn6LERi9pRyjtfNGuJRnfz",
  "key8": "5Yb37XXLKSukD4gPWotRdP3TwBMqk9VsVyHxcZu5pDYzF9FzUtF9pqGJQTyMxV45YE2Sz3i8tGACsK3tdJgppjT9",
  "key9": "446ih5tsqQBovXvE36zgwj4gz92FZ5wFzikcuyv8MJF9gn8emRsKRzkqbRDHZcDtrVwUs4ghFCLCFLWrJSEUtyKp",
  "key10": "2EAvvxdjHoPBgs9X8xpUjKGKF5K3j9k8bX3S32iiJShKDerzFN5dTLPyZnQXJ9sY73TLnCH6dCDmyLK9JKxEJ1QY",
  "key11": "2izwqe8VkSWTshKPgVrzkyxYuerbp99egfgL7yUh42NJzjntUmAHQjkpZwNRHn2YQxeddq7Mjanxamtwfusgq2zs",
  "key12": "2NEpGWjRgy2o7C6DpBXQPJ44UYYXMC1MxPL77NYSs98fBUFxEYVb1J7HsRgzTpXzZFk3h5wk2RhNvdAmjDmYALtv",
  "key13": "4EBUzyM2qc4qwzUK5Z2QUjzDbxwPZtKUnNdY42LUtxefEPathcR7NY67gZx8yj4UNKSdDLUU17nhWi7aMAPog9QE",
  "key14": "UKwXaRDjZF8U3uvVRY6m8pfwVoYrZ61Dc4fF1i9oQC9eZvN3Hj5DB7arCS7DwuawvSySeBbng45D7E8o2AMtYDi",
  "key15": "3pnvoCh3Q2Q228KtQGMgw3xJXWBVRjvNpsZXb7W6e4k8M3NTErunUcnSdmWcaEMSvqNA7mSVJ4FAc9Gq7vWt1zzz",
  "key16": "kB9xDqPsYtrJrsa6FgXJxqCew4ZG15A9t9ZeTaQYo5pGZqXA3s8LLCgDtkzS4g63CPD7f2ugdQ34uJzbTryeviZ",
  "key17": "2WnQcqVRnhMjUuxdmUGtrRf87BqfmgmfivenSXtrfdyuyCxutBayK4i4DrH7oE1GLc4vkRcNki5qGXp13BpQ6nKn",
  "key18": "4H8LHeSpCuKebhFWkijXTs28KkG7ERnPpGW44JsAGGzHQwE5ZBTTPQ7wNfZLP7RjgsSpconoDpaEc5TZMRiHTGgG",
  "key19": "2PF7DPDPULczV6oQ3yCPu9PGruc1QWvmo1t9VvbEVa8trKSn1MYbkXhL31eL4iMx4w8cAVDQqpWYyBf4toGn6U1Q",
  "key20": "mELNcKWECocvoexMx3jJbsk66aKdGujkiAhujNbQL56v66VYSmFSshQgQnfo1d2xpDH5Xq3oKwKruVntqrA6guV",
  "key21": "5ymnhWVtdua73V8PF2Y7HSggbg44oYpBJTfV8xJAuuDmUUtw7LNMJWPeGQxr4C34P59cgVV51W3ruzsgKeafkXjy",
  "key22": "3PPtKNus2hSJEdxMPi2NoYumrqiH6jeVptUnn9kugekB1Qub3Q5rYwBE3qgWBjfkFCc2r1uvQJdhJcpsvdSEnUKF",
  "key23": "3Uftt4hjtijGzZimqPCweQK4Pr9Lz7e2tCG56U3LJQGE4AJ7JJiKVeZA32xnDrzPJQuBYUWvx9qwHnZRNcoTWR3P",
  "key24": "66QsuAEpJDUVLtFZkczu88CoGrbAmAUSFKJ9b85rChfVg2qGLBMNUPNpfT9AtmcTu4XGGWFWiUqaSosYs814zeFS",
  "key25": "2TnTecME4VpGuWH3iLLPQsXohCwE43CeTumufZjTX6TBXmAqxiXus5BQmHAXi4HXfmyyyixrefGHYxkX8Ncb3C3J",
  "key26": "4t1iAoCne5uT9CNcVG3Bw6r9fTvUqzL746Sk78D6taYyyDwXNjRMvxV5ozLYg5eThsjXNiHEGVpQHwdero3Cqfy",
  "key27": "5sWW8A9sfUBRkKMaRQU1xZkEXDu36XXPmAJGYLnzcD2m8Jw7TAX1n3agGRUPV26CtRYuDuKDJPjsn7JJwArcjToj",
  "key28": "5txcRd8xhkjj8sDdfx5x943C8bNrFkXBAC5uioayiLLaiHG9TZ53XxQNAdkt7UXX42Lt29DGoT73i5Ai6QTxg67T",
  "key29": "oJFzuGgEyeAuYKnSc43TNHh5dbXAV9bFH8Ezm49SveyGGLQttEDUrFua4eKPhooK8WGTGcVX9313J1eLmamu3Y9",
  "key30": "3mv2wsvcQAjczqdATYbvsXDni91LKsQSrA8p39PYaNYS7gQVaQaw9f1sDC2hxGjviXqSMaZkCPNehxTYWKuG7JNj",
  "key31": "2qJhpC9yv5efe1RatvkLwzqCsPHEsiw9QetvxDBvaaHmLapUUPbf8SGey85ZXrrz2VjZw7pZ6LesgVYrMe2vbu4q",
  "key32": "5T9Pn4Q5rzRt86qYuhvaL3Y8PeCd5YRuSGNhjJvbMLmRscDoVRA6ieKCavyn2FcCdctVNH68XoqP5yPLdY4C2YDq",
  "key33": "39MUYXNTqGab9akLNwWXYm8nrB2rr7RxvKn6Wf3Sh7ZmAyvTdAmSLEWXEmTiaT1LU6Dd6dpQJuVXSFGVyM9DewYf",
  "key34": "3d9Kyb4wxfwKHjrGb3hNgpDAQ6GhARcQQsJCFt3Y6xCZaqUVMJVAbzZBAg92CpgvtReV3rY71Tgy2BEvRen9YbDr",
  "key35": "4nz3g5sw5dvPReTUpkH1SHKV3LbSVwybTAWbhsc2qbeL5XP1zMohfC5yXqV1tdh7oF4UMJ7uMdumeTuXXfFruzS8",
  "key36": "2XbU8EHUj7vFAkRkD1Q7F6hLuCVjmzzFEsL227JMwms1JtaDbyuJbbFGAVorTpJNGhFGoXoSojQjAWcwXSe3pK73",
  "key37": "5gnkD6X4FDmuDCxPZ7MRpq7Q4duJBur9NTtEe93UimCQ4dMQoSYtcz3VXi9R9gBEt3pYVoxowfUpRLqM6g1W58xN",
  "key38": "BXxaEmPsQufNhnDUCHxXgAWjiCosDtLsa7fuvyhswQ4apDQjnHh7LJQzkpMvoVQRZTrF5j55NZhYJvFBa45xVs5",
  "key39": "3wpSa8MR7FZKNUne4tR3qK8GyzmgDoCSc9AyDnSLcPojJPkN4tt6n265xdk2d9y1SjdkwAUCapuNjdsF7xoFLFud",
  "key40": "5fRkjTVR2vsNe9mcDJ3t4HhJwh546uCTe3sBU5yFVPRXzajx4x9i7TD3xqSkMsgDr7LPayvwn9Ctf7a4Q9sFMc5H",
  "key41": "hLN2iBirtBXq27X8h1GU1cbkhXgoX6d7vwcq4dE55BdTbHq5Ncku55F9apSDa2kT5Tuof89Vy24B8bizoqx8G3n",
  "key42": "5wRmvVgDT2pLaDW2umHnkDAyhmG8EKji7ugaqDqprCHdKxekQjNZ7J32CELZLSY6V7yphQy1i5d1eLneSxzmBhXa",
  "key43": "2M5Z52hFbCaSAMs5HfXdRzytESw7rksXfGCXtLz1jPGprC5NdnQfnSBAADMpPDr8Q7AqZUxbTrHowUWh6Sgh1aA",
  "key44": "bV6QiBjDMQqdAJEhuu1tNZYwUpGV3EE9uyQPRHK7mQcs2LEGGLgLgRYmVarZ8oMpqfmVRUNz44B6tq2Q6CgduLb",
  "key45": "2wxuGJ1NBaudgWdAzsCmTbdQRBPexFkvNYATwskCkxnfYVtAHfAPySEDora2p4g9mL9H7ewiD2vMBNCAFpuBXLpx"
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
