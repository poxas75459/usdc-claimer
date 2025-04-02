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
    "44BzdTbpJBwf9Jzt142gWKXtxTqdPNKxLp1peUwdBMdHHoTVSAGx5wCJW7uU3NUW6fKXTxKCBKudbt6aqT9fPHYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v4fSrQcDohrcLku5pheNDCMyn9J31EvLHxy29WrmvZnKdecAjsXeMiuKGB3tw8yWG5o6oLvD91yvPWAjpK4pM3t",
  "key1": "2LW7E4nocM73MtR8qT68HpstdCrLjkZ1gjj5ojfFindXp7x13pQfZLQbDVoNv2xdhKzLTm5NLRxpvoDzm2SF9y2u",
  "key2": "5joCGkG6e6q66k7KjGkpAk5TMU3RBCvc1fyZK1g12mj1HVtA5uno6MRjRpq9c4TWkbY7GTFJ8egxSYSmEmXrVvzB",
  "key3": "5DaEFeXv8H1PEFGK9GyFrxeVgYax257h2G4V7EWMCYiFnoDEmLKg6nQH72zHYi3RRPJazuBWPUuWXQRmkyUanHyJ",
  "key4": "4tD2zDPtvTazUgUvBm8WNoqtNQjfZWo9JWgEoXYZgkyzyocGthsEFbsn3KD5CeRTvqqD77be8EfAaSW8dDUdGjKH",
  "key5": "3e4Mbv3zEt7DG5HedY7teRmJzg9eT4X9MB7vtWQ3iRUCtVZ5PpS8WuLgvm4mGqMopTuHf3bGyFkyPVbeKVfBx9zZ",
  "key6": "4amXruUxaMXWzA9YvAYvznrTkKcTNcEqpKXMcMvBKmPCzBiyY38AvoWiV9PT8kuLWsFzcq1kQhkHHsMxzsLEavyU",
  "key7": "QwZCdGyuLU2yTCPexkC2MfW7PoHTCb5SvLxfFWEGByJ8KjiNTxmEb5iPmD3vPkQ6NDwzw86MJtMHe9TLDFHHoWz",
  "key8": "vCJH42pekebeSzwg7e2HeMZfvnPo7ddsGjt1s2FV1uaXmRTiwXGp5gnPBpcuXHFwD1ogCE4hNjEeakT2746rvv4",
  "key9": "4KHawD1V15Xi6JaUu3HSmuYuv3WcevHVWomL3KFrD3NoW54sk8C17di4qXrgUoGbLBXFuZuLFtf5Q2TBQfETDqAZ",
  "key10": "31cw49vE8uDxsG6eVtdp3DsR9qiaZuvpqmixrywkWqs4GFHs1opcVa14trQ16VPMH3DN4L7Ds827f4oX88vE5YQT",
  "key11": "mas41swDPaprwtVpLmdozcDpKEA5MrvNsmZkowZYn9JKPKsczcn86WKvsJ3fSFhnGTgS4QY2RBZtEhEJTweUq92",
  "key12": "3YaHAmkqJyLtZsRwgqLcM1ajFAA3cWN5DHPpm3Hb7EEPKD1SJgNJ78FKD87BqRT9u7QwmVSig7f2roHNABFBgZJb",
  "key13": "P2VKTicQGASeXP3a4WP5SepLow4cqT43ppHgxMPjvPSxa4FCUjpMcco127A6VqnbVUet7eGE2NXY89YfNM29n8F",
  "key14": "44cEnvSokEfM4jDDK2dc3meoZ7NgguJtcxVnwE5J2DxwA9eUpGpQshapz5Am9ytQpNZmTH7gnAbzHkLrjC7Z8AZu",
  "key15": "vBQCGQTbc8Si3hyyzQHfU3xVnzJedwcwMX3jNnDJ9fByspGc7PjxR6vVY6QF59AeHArhqfYFdxGnGJzMQRiTdjh",
  "key16": "4R6t5DsbyN5BcDEYjXx8iVpf4Ct2LWNywszgiz5chFqC1LaAvrh6tVBoWpQGnk1FrT2nFhwT4eyLdbFVqsw4qPbH",
  "key17": "5KAMFM2XvqVT8m4cePgEfTAq9z6rwnv8J9YCk4kvueBWRmp76rtByUxYoZd7988CoYc4ANtbJbmjiXodiHewCXWi",
  "key18": "5sWrjRpGYT9FBkmTr5cQx6aKVnfsTWLsV87mCj4CxFX34BMZGSBYYjDKAQxwpkbBQXDSoUcAUhiPFJCNfhRwNwXT",
  "key19": "XjccBNg74gS51fTsgCJsJtEZUtQAG4TqzFKhNndDiE3Xf8DSJknjWKo69JEAEk4ikHpCMdEBkw7wctb8hZqHwx4",
  "key20": "3PriGGDgFYREiPmb1gXBpU4YsqMtoiPqqKwjD4LnHytCPedqeDZSMfuWn6kJGHzNev1sFqTosz1sVAn32q33VmLv",
  "key21": "4GoUkuUit9q4J1sSsfrN37xHEhAqmhofBw2RudjunisMDxFLUUppifvw7vaVpVYQHGCqTp2FouJwyD9kUHHvhNkn",
  "key22": "2sbJ4e88f1dFqmrN32M828ojQ12zAaV3xdNTXHXfSSBRqLYvpyN13w37tSjMaygapG1bjBUQSG8r3kbhD7RF2F1h",
  "key23": "4iz2CAQPMtJzyfX7pD4wNfkkDh9XvmvEiXtte9tvCNzGD9H6cLmx2cCvboWgs3xVJEhjxA18LYgxS8ThvqxGk58",
  "key24": "3WFZB4Kv77FiGWG26cSQcGpsirVzgCpdMfx8sFpVZjqwEFo8sfBi9BrYnGpqJpoV4WSjufns8skmU6ynSth9Mb8C",
  "key25": "5Jud2ufuBdj8ghEXTTPjq98nxaAvjAkg3pqwQtR2mnhHwmZP2t6Tz2sZc9yWANcKzFzWAz8XYL3AgEgjsuYCptHn",
  "key26": "3gnb72wVDy8NGXhH9mu8yAxUJDNdHSnwQRZmq1cRXi37Mq6GH6jeVmaCRr2yzD4Nhd4E3VxMiZiaw1EKzwHFe7Ac",
  "key27": "2MepMEEN5ofowUqiSk6JvbHtudEnj7p2etSdjewgtTKYGDkNg95spx9AbcpC6ooN4cJj3g8qixp9Ms2RoykPzW7Y",
  "key28": "fMk7YmuPx6FaKBYdvcyZFZoSZQR1qvPuaLasL3dfFzbLGWMUfcBhtK5Cm7d4tErUtQNHTymC6xoBwdmeGUE3shz",
  "key29": "4q2QjVVemSqbbZHCCGAxpq2ZqRBnMCWt16Zkn8ro3y2QzuVwQ1kM3ujLtHHJGgePJx8zMqW6Ta5GWTWq4FgBi2eH",
  "key30": "2VdMzTRihfWYUDWqrzUwjih8ss45KyzJfgKzumbbCpAMtREmtFdUZ9B7dn9abe1844GiiZbaChpUe4WEZv7odc1F",
  "key31": "5GmAKAUHUGvT8iNayPtgwYiRBNYcQGUv1hamVDqbXSmGo1wCL3oWjt54WH3V4zVat4uGvFwpu1SP6zZ8Ty9YVJ1Q",
  "key32": "2494ieWegkRbXZpgKQo1rhb2PLQ5XHRjtErpqjiZ3qb7LNVL7WDVgFXuf6bfbRS13PqXyqvZMFmfmaQp1Uc5MQz4",
  "key33": "4rrLocvEcKaJchkBzDaGsUfjiearVsPXwesUy2mvD9iNGVyaU784UDSrShCcDQaqex6qJbU4c5rojrvam2ir27Lj",
  "key34": "3xnHzaF816kWbuNxUCMUjs5bs2jK4qPZ5pvfSAVkZKEcHhtuK9Zez65rUQXxfxDQmWnvx5bxDvsL4Sf9Wf3kwexx",
  "key35": "2joM3WQMEbGoMVcfx6UD3vwFvewuXz2BanLFjWhQZHQpJZmYK9eFVFUx4kpheDkdYGkMEo3BYaDwpDA7WJc2wcQo",
  "key36": "5fLZQogjuNwdzwcEgseiyvCEje7gh7xSuSYeDeT2sPcyh1doBTNN6hmLP5s6nvfaVFbiVbu5gZGujWEpHNLrKcqH",
  "key37": "2c3Ssc4s5y9RHaSpRbspFhcNKJHG9GwxtJZYmSxMjsw5tNhAvwby5gq59Lz5PzNpD6tA9bN6ivVpp7FGErMsbAgJ",
  "key38": "5ggX62jDRkVbaq5sgbV9Ffex74uMPAMqjmYfFZNuBt23DetvZ8zD5bFTmLUuSAUUSCbSYwW7EBmzHx3YUFw9TYxC",
  "key39": "3WqdEarkb31vRUDADx6orxX3yVMPyxjJKrNzZHNpAvLXoTC9oysCLAxySAi4hwYDaot58gZ4b4qhY6SfWszpWivL",
  "key40": "3169YqF8Q5Lr25KLLnTKSME7h8kQpPF5FBv1GDRW1nEm9zv55CjEKgHrC2bXt7CPy5ujHQbqhQdT4Qqki3CemoHy",
  "key41": "4xK9fHsPrY7XECtAGvy6UgzmEC4RzFXrqcQ8Bef6AeyBNL5aGdRebSzjXVNWwE2eg4F3NvLEbg11dmPnjcG5Wwrj",
  "key42": "3HhRh2FJfuzvyDmiNGjVUVk73KVwvbNy3ZSSzTkm5s6b1xgF6AWjbkVAbW6t33d15VzpJzwrEzvuJ5Lj54jL5nfU",
  "key43": "5a9NTWGsSNMiYAdAjyYbshG8SQnJZijZJH6ouyz8dbF4Twor32pF5CuFhr2FHWmro8DxFGnqMtXztKKK8umWCpqW",
  "key44": "2pWbEgAQttcor1DwxKH8tZMKnuPtpzdkPgjtedt7GYHJXM4DJqamW7nREuHyWm4t47dAY5foADc55WKvhHC3n9EG",
  "key45": "41ErcLLu5nWm5g3EyD9PcHxP3FecfRhC55bok3PrmhmZdacGTXLMjJzAxCezMzRxeqGAV612SJ68euiF5hsT4vYz",
  "key46": "4wmfWAT7WPkdkYNF3U82DoMtAsYXZGAXCdDVdKxZMGY15QVF1cagkqKnEDaEV9PbNg9jGsUErs5JdpMainwxEQ2i",
  "key47": "hDfCqst3Gqr4yM5WPcnNqZ4ors6eznpyj37W59gFf1TC4rjLXesvL2UJ15iTzCKXDAKMF3BPrS5zfXuaUod56Cd"
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
