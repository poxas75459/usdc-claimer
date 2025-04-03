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
    "5E1JX6DedQoHhtoqr4eFQQt779QiEn6Z8Pm9PRetrU1WAVXGHtTBwRyVc4UzZuZBMo4njDtvE2tJCkcuJHHXorPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPFXWcpySMEqhqnLtSnqGzR6GzyXASmY81co57ho79dAiKtWUXwaycZnhRtmK5erXY6tnmaQqhjHsJe4pxmL1cq",
  "key1": "s8NbbATXxeGron9U7sVen4HKW6vNhSM2pD7ZCusDB3bLLgedCPFyF5o2Gh4KDE43zLRuJTfvvJ6TAMjDpecKqYR",
  "key2": "3TzL8WJUzmFE3kCGmXJ35vNkpNpb3tSKuK8MB4tPQjctNqS34qPnjUnJBbAKnC6P2TapGTSgkEjS4e1UdkC4VUu7",
  "key3": "4Mnkp3EmYN3S8tgErsAGUHT927noTSXj5Hj4ocF69vcHbMEN9ZTbY8e26eYKUCDXDDKMJ9f7kjMhsTHXjzeSNgRe",
  "key4": "2RUUhqoEw1yi7FRQN1jVh1dp6wirCqPwXnFe7okwENEBp48or57sBF6tAKJdmpgwm6nEKMsJh7Ek5B5boyCgFwZq",
  "key5": "2Dmm3ksewkQeVRwjyosei93c7K49shvNgpCaG3wgVCNiX56oaQg8AeTnDQGYCpVLfq5LfT5ctR91UmwbHSsrcEc2",
  "key6": "4NFgcq3aEeTwUsMSYRZJoUdyUkDinynuq4LSYmpWo1aRnFYYnQ1JEYGBFv5j1nAetptN6wuo79WaavzRczZ3YHCq",
  "key7": "a8TG7NgYPdSyvd61CUA9GbSoh6pN5Y4T8oRrREVpZaeFEpaUEFmzXXt9Z64bkgVeGcsRURatp8j3qL5a9rV2Q2y",
  "key8": "4o6F8ZfKZVX6jnxP3CtwynzpFk3wRtAbR2Rg4TjU8Rmqqbk9LaGY2z6jQ9WfJhbMfRhpmcEVq2q2cBp71JyJ4ZmW",
  "key9": "5gzMCjZ25sHFgXHMM2yrR1jMmZhT91RnmwRKisf1dQCNrNPGpQrz6mvj46e5XomgYdYNxNE13TVBZH7ib1R3dUMq",
  "key10": "985UZioxBg7BpbBedqvV9DosLrfa1hBx5txJaia4getTZXmLYPQbhANYawGPKDujubV9QdXxbMS4fASXAz4fSUU",
  "key11": "MwbvkUyuPMwnY36CagxDGU4nZCjCPLNxvjhQidgzTF4CJTzBZbBWRLVp7LrqBcbUFAxLMkHjw26t2ZmxkqKgSZ3",
  "key12": "2PVSUCp2Fcm3qLP82qHipCqgvsv1msFq4riZfbRctUTATEWnQwZPWSQYr3Pr4BSsBHpNBGyZ11sJfDTcEBn5Z8Zs",
  "key13": "2veTdK24XjDPzE4LzK6rpeSBP9axFnBaBKmRvPuL6ACu27dg1q2SAseRizKsrabJdx5Rx2pd81GiJhQfoaQF2e52",
  "key14": "4exZz3VUfESfXziCyKJo5HM1WDfqNjxMUTxU9CXjqEgcarCynd1CNH3igseqiG69wX98iEL3q5TfkLQGWgTWZDmG",
  "key15": "3AzXWAyZzXmXBeaynPkGt6n3q53t4YHqe57fbU1r4ZhmTVAri6BQryEnoXWckWQrLZAjaFgJaZy45KHswXyh8zH3",
  "key16": "3dphWTngygtH3bRbT6BdP7F2CGjLpPPZQHRoffLpXxd6smYE12cu5W4BpxrJh5tmvux3VrTKS1t2DhivkUcNgYQW",
  "key17": "2h5Am5JXsaSRRHvat5ABqbHszSkNczk8frrFqNKwWBASxg7qjtwZ3bg5w7zbrttzvoPb3W9URkG5LZubRT3S1Vpc",
  "key18": "5t76RKRubfEBjysED8puvhS3QMenUEgksmy4ZmS4hybVcBN3MPE7fGa2XjHi5XJb5nQcryqdSmyMQYauLS75A9da",
  "key19": "2fcFtAox1FB1eMxe4WGuKaf5N364ngU1LzxVxGq5FHtM2gN7Xp4qgwA1GkKXBCkpZCbvGnsbfXqGyykUcDTvdMax",
  "key20": "5bj8RNZmu2fduKKH8ExSunN9ZQFPShkG3woK6p7MCAWf2oLKaqz8cuXSJV8w1SVcKrzWZ5oKGD5L52MZkDMpeCKV",
  "key21": "d1vV1oeLYbGBxSbrez1Nfe35anSKKz7qpnMDgWehYxcuq8DZ5qEd7fAjqVTWDVqwYmWP1VgaxLaiuPXHu7WU8vY",
  "key22": "4dxJL4F21xWqYJwY8jZvYa8cVa5kuLbwgrKRtgogZJgGgk7gmYyrdPaL2Dznd9og29VTwNqGBmx4Z7TZFXLXZ2kp",
  "key23": "3FbkVzpJqaGp825C9V8MRuHd8pY47piqagNXucMysawJHsVvHBmyuN2bmcTpKR69MZ7cu3BHFr742rTZEyRKQVtL",
  "key24": "55VAXWMaCjtMXQxFAVTSDahygrdFWiKAsGkfd535GDwk4BcEpoH4z447p4JE57K3BSeQqpzd7GW8VLwUec994kq8",
  "key25": "3C8oinLpewLPPKSmCYZCWUh9nLT9MkGh7t9MRff3aEmA879FCj5rdZEsWbHpEMYAwQXRJ2R8Pynh5FUa6CjbB9V8",
  "key26": "5RKe5BByKxhc8zQozxuthEt7xrUEtVfcTfmeuA5QuLWS4XBJ4t18gVNSSXCxLStwEWBqzwVLcjqasiBrSuwsopnt",
  "key27": "5ii4By9WbKGCeNg5t8saovafu3JWDaHEBUowcm2ousURG1XYJ61aoEx1bDtyWhS7LsofyxKhkapvqCqGgRAswAh9",
  "key28": "45ooNwmc7ePWR9YJm2Z5R1PKoCAm8iByKoPWpu236UcKndw7VixeaCCWvgrYjX7yjn9yFZiSmMRKSvc4rC3HTfv9",
  "key29": "2EiZJMR78YY16R44A28Xkn2eV5p8dM1L6jq53HcLChmjTnimM1Wveg81gnrdqYXessM2YntowDbVrm9XVJPBeCcT",
  "key30": "2yFRMTj7SK4fQCfoddBAfQJrRW2GPAtLYdE4ZzPwLhPyz9KWk6YJefqRqZgojT29SahKnYozErF9wT4rFYYhht8A",
  "key31": "21ysN4gtncrrqY2cFshW5agXUdwKM9wrsw3S5qh2gZG1cdWuN4dWpTJj9BDhVVjFoSjveNPKeGoRaM24BxT7xWVH",
  "key32": "4gBTU6zdvyb6QSwM9Q9GveRSGhXoAeyCntN7S62aoXurEDAguVqsBa2XjqqRxYSFnLJp2rwLzse38iYyriqpJafV",
  "key33": "4897vW9k6Tc496BueDxTEtaZUbDJ3Xyk6r1vzA7w4zPfWkbXbZHvJSqqK41sHCc7r42HibaNS6UxhShUZ6Xhzf6E",
  "key34": "2EV1vJhhLK6b9CXrp3xGmbaBHbfFfr4mjqi2R9FEs99iCKiBqLP1Du8LwRA1NBB8tUfZYh691QP7SCr6NucvxmYX",
  "key35": "2BwBQGQ4HuBvdvnoBjr5g1iby6fx7kjhUqNWyrT57FLfonnAXE7gk49qpb4zvHLHbCip474xpkeDS3WAM1gpmgeL",
  "key36": "2T68juNQWSoLHGLqe7oUb6x8gLvKezFv4tzrm83F1KraeB6jHdbSa4bXKNQc89UTEhj99HB1Sj9epkEoUi7pa57T",
  "key37": "2jwVBuCveYRqK1CGmo3VTCxWMzQhSEMwpryYoZdBgwaZrzGBaiypjbaVSH1D3AihNcU6TA3vHLPvbgDeYxJinFJk",
  "key38": "2sVsmQADs4wEi87KTkbmPDVaDPjFG9fiac1Fm7Qh8C4V7N5S1nNZQ5LYf9vDJFc6bGNN4aPqrS8uxL6UHJouUPX",
  "key39": "4zzfKd6fPaXcWnrD7EmmibtbjqYEqcZsc2djzu9KH9JuUBbTtTGsFAwmqU3NQ1zysHP4JueVpLBAAgV6ZGU8WELi",
  "key40": "5FTCs3XgmGexZ7jpg1gXYXvCYTvCJxmQLBteJrwZua5u2dawwMxhQmRtZoQoqzmy6vnirUeawM6AAfigE1yz6zwy",
  "key41": "3JcpdXkndNhnJa3LZCQTo1Bu76KbtckZSzvaDa5RbfzCEgkqj4S5KNpKLhD2S2Wa7uh8YLV6yApn53kkNXPMEnRo",
  "key42": "jKP433mv66KUcjEEjS9LVg8E53pg2Kpf9gzDD2Rc45WMchf2ucPdb1z9EnbcuuGYxatv5P8ho4gqRU37W8VPJ6T",
  "key43": "265G1MJQ5EKNvbuHnkA873NrP2z7A1HCmqxDu8tFtXS5Rucz4QbgbP5CkwYVieaVgzr9EQ99NJpxsnVEP4CFPCvW",
  "key44": "5efxZfcZh4Lp5v78ELN35fi9cWBMXYdBUabnxDAQLXG9pnBegbDPdkcTpCrdxwaXdWG9trAn8sH6GTqWVCHytC9x",
  "key45": "2KXeF2biSxhkXkCUzTQ5fMzp7UzWPXd74UUc2doEAHsGtgvJvT6E4dGUTrU6Dbn54J6mtxHCYK15FCzcUJGSRtFk",
  "key46": "2KCxyRKX6aY3G6k2uMiiRqCjXsCXokSgFxjW8Sz3VYw4SS1cA7H1nKc4HvqVgRY4PfKqBJiGmKPh8xKXJQw5aQe2"
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
