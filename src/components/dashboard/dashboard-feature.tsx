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
    "5hFYwDbKwex3MV1RFvKQVMNRhVTMzvUisH9ENyfRmt5p2BpdUh5BA5agj7fnVtjKv41oqDZMXefwvwdMkJkf2TRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4VYMCs9GEab4EWCd67UZFGHyKSzzmvmWUCFjkvQJrC3KL5WZScWiYwTUjqg2evE4Rg1dVyJoAVZbFvPxzjvdwf",
  "key1": "2NkhUa5VD4J9bZ7q8ZofHXLzPUXvRKTESQnDTR1HuPqnqGKhJJwKgyANGFXrRmTa4Rco7qHMWQoTXzWowN3jBmKc",
  "key2": "3urZm2SHkTAnNCdo9m1jNQ9Rr55XmQqWRc1DSdncU89DBVt24PgD5kpPqNZzXFnCsSmFh2WDAkHKc3DBLGQu6hPV",
  "key3": "5ZiAsZuAYK3BSnsAEqoUeRFmT71grtXkQxGPRMGpvLCUADyct2as3U9p6S7EWN9u6R7rUq3L6NB65fjKsdtjTaD5",
  "key4": "2qg2sLuBkyHoTK3JRpRahoB7wwmyAqmtXCrhdoEVWoLXGCtmakvRpU41QscReDFvA5Uv9p1ZTRsZENkisUcurBtW",
  "key5": "5XnUN5FHjCT4khTofwKEQuGBDpbWF1we82Gjqd3RxM8Z7mp5iScmQuKoCwGbDeUYfEgskebnq3TKLqkDLC5VTFtJ",
  "key6": "2gYqujfSE7QjVXinuJLox6ZyQ99MPt26fowt6XuKF38U3N3htrqDZquSxpQY8onpZ9TwjnUUgM8ox2b6jUyvUkbe",
  "key7": "2ZYqaoReexvJzFBhyFJbp4MQW5YxpERW2Gt2sjsndyxLoKQ43Pib876reiTw7JgU5hig6mnU2MzyAq9ZKJ1HAmKJ",
  "key8": "hiPvHko9vKHhqUqocuwtriWV4zhuBn9hHeVDDbmwsqmRNV4ChC8Tyjhj4PZGwcqJArUGaDq2B7Qf4seGXjorkPr",
  "key9": "3Fc1819fCpbca3bKNZYqmGyfcZhwPUB4R2MvHaDpbEpbHZPHfS3auLu4uhJQ6TR6acyqtk88m5fkqPVgQDJj36zb",
  "key10": "58SPoRvepAtxw7ySrmTgL28u7p7DV5WiPP2vyf5DajaySvE5a8fcDe6yvnTqTBMhNSkhm37hHQvQ9aqLtTLYgdsn",
  "key11": "5J5Bnjt6uxGtJruoWxdwbUptPnKooAW9SwRPAu9mPVVSS2ewSpwL5GVwdcpfCuBTyR8TTd6tPftUTmAjvcGtbc6u",
  "key12": "2LnMC4ChBSmWR1LizJ3tSnkn4uUHcZ45U9cGEtxxDHHjHdx6gMS8PHWNWuffAsmVxNftvZPreZGRYnQgabHwx4T1",
  "key13": "5daLppryHPA7XFJaHdPehpZhJVX4TQ3L1GA9YGXNxAieQbMG7f1s1KbMDoST9AxYaTVHrMqufCLDHLJB5heqsmcA",
  "key14": "rFYRUQy3QMutyRynejmFGh6FvrKZdMoFZmrVu3LRETtffXwEGfwoRcS7iPBmpmU4He2HNa6BMKcrk7EmEiuqWTU",
  "key15": "25vwPiBHqmL46VQ3Jymkc1WS7Q4oAMciNoekKMcBqzwPCTxQ3nx4S2cEeW4KddWusJqPRUbRmdzqvaFuqYjvAuPb",
  "key16": "znwBKyLTX1nb9emK2jGD9h2rhPT4qrXk6D57wjPctd2EXMobqx1PwDNMStBAe1NKQyi5t1BTBooXFWaN8KPUtz4",
  "key17": "2KQQP9kZYYwm8J45hzU5sQpyLDew1jm5utNWLrT963is3uxZtwqDmynZJV8mhSvNESrvNZRaqBjr2nFiZSPyC35z",
  "key18": "4z3dw2vuct3JUjVc47pGM7Ua7LAgECKkRoiiWCKC5QN7DPs4LMqJ77uyUYBkFX2LwPK9JCWStoEZyXXhZrcBNe9j",
  "key19": "3gznChbcNtf5bnESpQKiQ6AmUW6ZhskWRUxq5Jr7StiJ2gbDSxo2pWXhpZUUp7PBFSQ6GkLhrp9E5K5PX1u1UBy2",
  "key20": "4fyRyzk2854vtmqchijnfb5QHXNuskRsQX72k2VUE9p6Q5ERsdvY9CMYJNAaULHMhNEpxfvEWB7Z8quccX9hn6nq",
  "key21": "4dbmrLeBYCfjXmQWUpgQ9GPpW5ZqUPuBck8TcETmzGfUEManSHSCvJKUQVb7f6UK9gH8a9FNkown87iBKCctpDd6",
  "key22": "4kzzkPJNuPobsWNwLwVRPDD5mjnjEpCzjHLkgcEbZsqwnGxpQzvCG6cNL5a1rSx4te29uYcw8E362QiPTJiPAUen",
  "key23": "5ddYutwtri8SSUh8zCfdGGR3jNHBRzxYeWakmuNkh9BzeExh6iuKzzukR57PTagnZCF2CNEFVrGKJ7pbAFaoGdS8",
  "key24": "4Rmj7mNyyzi8JiNcvC1gXMzjTwrN4hrds63GmosPnL1fQemv6493ZS54VCKPVLrf5cnx93trdsGG31VmzstH8uC7",
  "key25": "5FuLpw4vJs3pzixWXP4LCdbKigGfAAX611effEKetJozHgJCPuZxcfTaXZRA9m4bBAganhRjA5bcrf4fZkDPbb4",
  "key26": "3XycWPCSMmLB2MnxPyK6ujuLGm4LwoEsNy19AfGWTt19y3citugehRz5Zrf43LoaaED1X6MHFmN463EJibBFyYUS",
  "key27": "2hQYCtth96dF5hh2ai6DFHsooNHokYHW9ZdKwjMWY9FwbTPLGYscPAgNPL4KGM1KjZdwYRMDqnn2FwzXdKCdjKN8",
  "key28": "2xviRm4oRd8DTcCXG6t2jZDpoug2bxivjmp5qybf2dwgn9teNvNYKQTyxch2sji8PSCpvkqcFL3PyEJ1XgfmUJRT",
  "key29": "3GfjSWmtHfSzUCMiSaB7XPujVUqLFnFAF3LLCj2vhKav72q8RxAzrCL2P5j8cbtsMSdcKHUQYV4Qgwb7HgMpbFU1",
  "key30": "2NQhp3reGPYm7ydyjdNbzQyrnkpoMvkb3kg67Y8XdtsKgrJVHkX6TP62MaqaqA4r7wVFWbUEsZwKVtP1faeK3MA7",
  "key31": "RsNPkDMYpnhe4eYxr2JB6KDykWWcDFENQQVW4BHzWJFWnXrrzeMzPhgH8PuRoePZhjjMc1UiM7qddYtCjmbV9c9"
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
