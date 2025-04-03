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
    "d4jhNnAc52bfUEYiDgXn4vdPijegS735SrdjbDZWrKUUP4ADJAsJTyRi84ph62BYwosDr8vkVAVNvrL1iniN75m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g843ss53Ks2PNjrURQEmWws6hku7M2SP2e2715vsC9XTcmTtRjg38q578hdVEP116jxumoTVKEAmi3ybRvoJjQ3",
  "key1": "42h7va8XDuRG1ihQs7iV622frpYy5b14qhntefyL6hh2bNCjJYqquyDndZDDXZvBZ3t8DaWxotoNL9DDgYL9wygt",
  "key2": "4UcHamuFgrotbWJsd9wyJoHG5kJpMCQUertqzHpwco4WfbukzDmr2yZ3gNz7NHnSpZNTecJdM1nvct6ZHi3ULm1N",
  "key3": "2nNvpEfytLsvv6DqTZpFgsRVG8TqDYc2FpvkbnHP66Z6VEKKHN6mAAXybWkPTa9UEDuyp4Fvmbu3GqVYUq4tuqh3",
  "key4": "2RWpyeSQnFBGabBugEKZzeWzieq629fViZGPBjtG4GU2zF6cUhZSvuzvGmmEkdjTAVxdYaBGHt9je8CThZmq2xAf",
  "key5": "ZFHVN5qj8T7YpxBc5tUFGZ11pZEcWsgg8Kb4XHrfSNyndKo5PRoU31YA2A92fNx7U3dzBHT7koiGFZRRRnp2jtL",
  "key6": "2iUUJKuujJM6MR2NfyLiibhWDZB5LzSp6yjZybeVs4h5QNGe71VbKkW2efmVWzg7Bpz4K1mTypKWoifYeFNkTQjy",
  "key7": "2gpA46dUhdexBKMriHivgBc7qLQFsowxTCuDMnvw6y1MvUoht7V2BxZtcuWqqaxGCJmsE5ZurthSotxmZXLacouG",
  "key8": "9YwJcrTHLZmDkbDpBAiktZ5a6Wm1cVseTG2GZ4CUvn59nPjyGgeYTs9MYbdUbYF6KFMdHBSBF7oQQ5HaWyYa9oQ",
  "key9": "3oL8d6TgNJhxGUSHcpJBNNftkDYzBYScFZxS9RxpVR8NJJwuWfekPiSaKGhdYYUt4eTYz99LdSW35Q3pgG3mJ7TX",
  "key10": "FgPrB1UxJERh1ypHPcWhwxABuYdUb5ZiLXT5KwXC6nMcuPa1Zp4wnE8p2yZQBLak6gaFT1vNLGW9AVjhmPH4i8h",
  "key11": "64Z1FcxGFjPdWu5YYP4TRZvbk4Ktafu33N37wLJm4567L7yWZnbJa64E85ixqGzX7RwjWfM8sf4hL9pcBzqP5CP3",
  "key12": "3ntm8CdgLti4UEe5XBzwxMR3nEtevBhQVG5gbraHxMC9wqJqmddrhBphW1Lf5GS4yD77pjWCp1Xo8E3UxRWd7w9s",
  "key13": "3v9AKVx1Y85UjYKn1gambi8u1vi8mfJpLWjnBNmsSvvRKGvU7QksC3TcKDo9eKSGaHc8KugMkDuXmFvDdeTkmPKG",
  "key14": "FSNg7UMmwW5KyW6Y1PJYaHBJg7mu147U2poSj1DQEKfG2jzXMYHufoAuXiREctb1nEB1ZAviGteVK6bX5wfok6K",
  "key15": "21Abn43ioyBJsLgr1xD6DcZkfwoMsLKEppWofb8ecJAXVHsm63qiQXdshMyKZWgqAdC9gDNRkREUtUHBpYJoiWCD",
  "key16": "DRSij6ZtsRAVuiqEhnEdfTHzpMjAZNqTKLgewhADiNPZpAUByoFXTXomHyCwNyvgiBaBZGV7EDubgy2oz9R67Ti",
  "key17": "5gzpfbJcJTQq83s6iaegXhptaezk5jS8eVf8CWzzwaKtmsBv7LKxTwuwvRnmmPfysk5o2zrLB4LoVm26s6UaRAxr",
  "key18": "4x3irZCJoJe3QcPPUWiVjDYGpRuCjmSGxwh2g1Bn7xXpaDiPdSYgBjwSfxfx83V9g8V6sz9HcvUC4DD1WL3AkMgL",
  "key19": "koUrSLiqWoFABmrFLAaJx74aphRnCs8rftQxPGCb9VbSvxMzrzdL7j25T5Bc6GP5Fm9MbAFH9UdbZzhVQCXMXCs",
  "key20": "49aC5K92NG2chRrysnKpADJZPGAWFsVgjjqiCYMwPL9undwc1r3wBQfSnwej3eJd1pYhiHbn5jK4bGUVigskaLRf",
  "key21": "238x4H2PtQzxMmwqLCQyhFY2ygRkgovER9M7zMkAjAVebhBGWKiasbT3R9f4uBW4YR2my5gDJmM7C56MnRjvJmGs",
  "key22": "5E5TJxpd8fbzXDHBtyGvUJhyu28QzR5xYorSSbFVtxCq7a2mLNoQMzonu4c2533r4oLP42nEXKzWVYdT7yyjHhb9",
  "key23": "2toSLYAnF2GNaF55dC8Tn75FPVAb24rrt8Lerdnp1VgcFp8YJAPLgwjkar8nsQMvHYMwACMZUPizrPC4sqJWGsuE",
  "key24": "3ftWD7ugfLq5jj8roZ3h7AoeSt4E3ndGRpt6PfNoSni9uMW5xjLu4QGT65QuCRhuNPuCo7QQn9thcF8eRUS1rPRr",
  "key25": "ZkuneutFcPaWQBtRCsP4MmBf5Q1ZFCKsWPeLPEyWRTZ1JcTgKMoePSQ1diR3pT3fizUxFEsLG99BCpzsojMudPL",
  "key26": "5vyPYvd84VnS9LzMSBBoHpF92LFVXMn7uEs2uDcLXoAgLnos3CCmisHVAkSHmD5gXMd7d7LCoYGYxEkxjj6vaPGY",
  "key27": "cUvcU7U1vVoM7gn3DjfTXPEsBJqXk2Xh2Yvey8dQzyDqUeQhyD9GJNP1j8Zczdfqzx56YqhJbGbXuovnvrFF3nb",
  "key28": "3X3291WPDRJzqs7GCDqb1KsqRc3vk8Wd2Rv6Ue3R52fEAvUcUPgfzk8M2YZUSbJoYyYRaDsq28UM6ioT4y7e3JRx"
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
