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
    "oVyvpAFvEBhc4h3tuQehsKraPzmojVgrSxwG7g2zUGoPPN5jyPYGJE3ckjFtFhthQ5s98fZx7s2NPnRxjn2AkoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yghsLZA8QqrEFfp9GqDVrEXS4dfvhizGSnLpkmttQVjAVuAsg9MPgvQuqeNbK2cyW1pSzbCntu5XjZrCgpmnt41",
  "key1": "31cJ8c7B3qqmoaCpC6hM3v9YArkY4ysgdVsK3oGHQ4U7sHbLKzrPYiPufe3t3Wj1CqDFp6DFVK5FWiXsX2nA6geG",
  "key2": "G6xgGeRu3SffsbL1ptFF9meskx8tVD8bviqjiM31ty1PJSpVbQ7tbes5uisaw3rAe7AQaT41eU8LNNDyuC9CE2q",
  "key3": "5eaeftDimCbnqvgT9UUyzaPwqR3PqRsT27o3QrePeg659b42SM4PQ22VTqQkdVxuxqaHwjGbEo7pUnBLMwhNvZ5e",
  "key4": "iXj76vvreU4c5hzS53ViC6wK4BdbXHgTynqYioJravsYmJe7uXakmygunkNkpuHKuBMz7ixRkM34MMmDmiMwSGF",
  "key5": "5bWtZERisKau5N5n2p6d7mEcuEsnDfGVQ5Nrx9vSZyeBHyA9LRCMM9429Ji6dBrmYbXCZ72YgEfvo1x9ZguwnVye",
  "key6": "33KPKH7xbdK4hwZXN3eVvek1Sq9wq3W5zYBZN3jZk9H9fjS7bFxqx58bSKemCEPBa75cwyPT5da9hTFHpDuc3non",
  "key7": "3jsEUyDZRVPMPJg9gNUoNFEXmmJUtD9qq1fw87EUoUxcUMo6egpJL6obrPQ8taUeME8tpNRvYJ485ssXMXJE7AQz",
  "key8": "26EYMbpY7YX5WdVgkHnBoiroKtgHZ42rJZfTPdZh31QG3M7nYEyvdZWH7Xetpwm94AuqRzos9yuskAeZUbfMNRT6",
  "key9": "E3kpb9kuFCGo7bFwEk8MBEJdVAs1nqZVvEXq3Cn353WdFHaSZtAAhf86ZqnqVKuJ1cWqa65sgi1Awha2hbUcsQN",
  "key10": "4NdNpWgXCHxnGThRqJQwMLvzUuobqY4AqTfvQ6Jk3w79PZX7hCPHRWwghhtbkBcYgqgU7CbNsSKVAbmp24tPqpFC",
  "key11": "4Nw9qxWhhwQXRdh2YKw3GbTXcmCJ6U63thjuoEdpZec9LK5bbCywAC4cNVM3S4H9iJQcjoM8A7hzxDWs34kkQx2q",
  "key12": "29vWcqJLvDTqmpe7gJHezXxDyyRQR53iSo5h9BYxDwTffMuZWVYDW37U9B6BsaCuwoUhZDtdKDe5AVP8JFbakYMQ",
  "key13": "27EuPfrQepzrZywvL4VpEWLeFD7TFpomgo8Z9ruMEdecZBD37D62W1ppP7NTe5iF8rE9RGpMAqfyadebsijDHVRa",
  "key14": "3UGQ5xdemFkHLaBjUCErGtbK4cMBttLn1G2yvKEA2w5W2HqSfFj22EKLgwpzSE1QyctU9VksH1my7T7XKU9QykoS",
  "key15": "2SU6uPKhkog8MuKLN9SqcAKiFkShwaKZEQBTtbc15DKhwPoiDspoN3X58iUEjYgVsEdJSGvT1HDCKW5J2A49QwD5",
  "key16": "5QshACwMgLvqQdon3JooMheriDDcyoxpVoEs3MphjKv5ugGDVuJQCNh7i7oZiyFAZcF4n5copkVv1cHoo6P7NwLf",
  "key17": "tpjdJk75TaifEGHEj7Liez2eHTjHaxowh29ABBh7KA6YnTrH7CyoFUMKQgACYgJ8TNuL3TULsbThjy3wJdsQEHd",
  "key18": "3vbrwcAN6fH5k5nktbnEcWmCFqX1PmZL8x7S5zo28zWwro4H8NPuKHfFpCCL4ZE8sVTMBBj1fqnFRK9qe3u84Eir",
  "key19": "2gJafLEv7io412zVzoQWR44MQ2mFEqewN24cTcDnrX1T4CFtAn4amGTDs5CRSKoDip3QJ7HhfizzWMf8RsL1THRo",
  "key20": "5C2yen8pi46nfnWcZ97e9M2qnHosCsKHWCExmQtcBW8LoZm3siuHUpRVw2eMjxR76smgDxC8kUSEUVkkEaDx77AD",
  "key21": "4umYvCEegjwZL5nmXCxze3ukqHEvTHBa9N5R33vs3GDZcx2ygA6iZDVEViR4TxC5JxCtrEHnX5feb6EtiWyaGcqD",
  "key22": "8koAupCXemQ5JKPmvUx1bMe1xfeQy5pUpBPRwooSASdY5NZ7TSjezU4MCkXzbJ7Wo9fz8FMd1DXNX1RtnUSPsNs",
  "key23": "5fvZvD1seLRB4wAfUwLLiNdTNHAFF3qNpa4q39WwaKRv4ndaNFqrew3Y1BuuzJ3rpraesQdLk1riGZtGKQbgbTJp",
  "key24": "4BkpnyFiYFZbKjn7V3CHgS3emi7LWp1gfBqnWPcvScfz17YvKSLmbAJAyQR67zzVs9p4Laa6UVt5QPFhBuBmS3AW",
  "key25": "5WbH4qwmvPR5pPMsv9xQ6oNHHnQQ1GYpfAdY3nvsYByyKKVN45KYjA4QjciUXsy8Gzfb7jHeA53hB74wkZRjftVm",
  "key26": "5hxt8FiLMk7eWwASNkJj3xVTpneN4Meb1USeYMKmzwwzckdEhDx7531tRVfBT5PR8BfEmJxejL3wfrrL1Q1zuwkp",
  "key27": "674P95uzL6eQeuxs3cmqaydQn9iVwERm1Ly9CWxpV4FUEUyH3vGEXbs4AW6PcMR6fE9jdjhFGpeytw8KSisUEZLu",
  "key28": "5zhUVBd24UEhpTCPAu4P9r5brcfy5HtcQQUPHDNz9zVDMPr9RDUgW3rm2PykWNMeBS1hpBsGg8f1AGKU7NDBKYHk",
  "key29": "3JaoJdpLDWzpDQcqUk5RCqbfEk4sjhhGoWuq5kgJbeVEAU3hz3qLgXQjULbwzW837PQhSHZdkFWUr3NBLC35iHKs",
  "key30": "4NRLJwtdhGidA1t5krmxhEPrE4Pjx7u1vN2ojK1DCoRZFpPLBFvcrug69nyQWHjStz9PCH9mtpgWJNNUQUjgNmxc",
  "key31": "2YowL3AB4DB7dzcDxoVKvQpzdfbQPonmeoEqoxdFVB2Mz5LGtBViXgN88woue7WBEy9DjdUoPNasLPFCV3NtxmrR",
  "key32": "2D6SJ2EHTGNpJBdy59Mk53XWwhsrbruke2enquEXpW62XEE1Kx6grxhVUGWyf29hYYBtAo6CqCXF7m9T71jnSJjL",
  "key33": "4jkMBBWFrJjsfhFejeAHSHYd5RnvLEkbs2CJeb1FFvkfzXAvCZr7ebXZgyvyRXqa9FHBUYy9NjyCLm7JFjisfawr",
  "key34": "tTu8mLQC1R9PQbAYGKuVKE4YBAhPonQXXJ2nrT9xYXCxX8YLZTdPp94xxxjy7VmP1xfV97FdC4rvwqEeXoJsewq",
  "key35": "4nsgrJ12kqEJ9LvKm9YJudZWK1ohDcUk7Nn8Dw3uwHViNBPeXdeok4gKBc7ehf2tyB7tHnuEpGiTaeyF9QPcC6LZ",
  "key36": "57rNz2BK2jzLRXfDJtC7T9Dwb48QqfKLq4cmm92x3JrwXcWvHPm2wAdo9n4xjHBMFc59gLy9qjZUC6M4s4Aavp9Q",
  "key37": "3BcFSazUru2HgVmWC3HehQmL6JAboy4ukdzDM1x12q661xbAq9M14XeDDEvdencQhBaev8Yxg2GCnEjrELsveZrY",
  "key38": "57kQNk3YTTNxubJKUDqanJRtdL5BJb6kGp7YBwqfW5iV85dzw3wvtVBLRwr8v2yThw33mCvk8SHer9HgPbk7j8qr",
  "key39": "iEcMoxdF9rRyBR2J8cnH7xWr34fxRcAyphdLy1RPJbWxbjyK7DSyZoBvFjG9QRHM5kd2RmvTPDq2BkKxZYQc2bh",
  "key40": "3wapdHvidKBPJmX36f8SW2ooLmBQNMdE6oYfxhzS6ztG8VXQNGeZpVd8V1oJNVe2VddPBB7afkZbsgXAAUq4C4mj",
  "key41": "33Y5EYDarWXTi3zGYtgygcaRbVG11Jpvcbvhfm39ZaZhdPGpeFAbzvR6de6vMSvZ5PVWKpj4sceZ7tf7FMoSa969",
  "key42": "4XhYLu3QEDcVUkUpS1zCUBKDNVRYvB84WxmyMbYr8cGLBrQ77yKy2CpmVmsNZCaxp624bvx2xf5W6LDjAKhhNceX",
  "key43": "51k6y8WqyuzGdyemijxAMna6N5Bu2ipFbyPHxXvcQsVsBYViXH2AUyTQy6K7dvFGHpJ4VkV1fNxeEL5NCxCiWRit",
  "key44": "5gAiV42wsbTYVaorwpCwpUjHzadCGWS6uwYhvTGHr4eJTxcRrVvP7rsxP7eXK1SxRNxj8k4Mj28msgEjAscXoyYs"
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
