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
    "8Nh8JwAUWsu7PY8LfpkbEpLUjEvBPyF6uhiv2i47tYkEoPLueCarGoV2hTrjS3Vr1NDytCXbK6kVP7CLxede6kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61KiUFN6eu6pPh1TEP2eMZUR4PCoqWyZWY71QbUAG6ULwo2dwnQdD1YDgCmHbWtZgdppCezfscspjanAMUeKjDXm",
  "key1": "vikPbE7yV6ZS7zgPfQ4gjQxafA5QmvMpgE1CEJHJm7qAsPfyrU17ahJdMz4KHJWfQYgDTqh4NBg7FrdrCXjTQDf",
  "key2": "4MX2eabN9oPV7VbvDBdabxd7XyTYE2yCK7qKL3nYvbGwcXiyDxwcN1NNfE6FLKUVXvy7bCeki881ohJa92CvY3qR",
  "key3": "3ceoSrpumeTyAh86feRYgPkjRfLVtyaUVbHiGtxyEhh5TCGitk7xjawXHhTbiGgbv68ZpoSK8ZvQUcecabYuaL4g",
  "key4": "5rKKshFA6JLEWp4omsiHkhgQ8SKdGDAKQeYx3v1wtSuxz2X4oYn2deByMBUcJNg27CxxDMRiDtJrmEzQHYgP1eov",
  "key5": "2BFM1jbF6vZ5Hh62uTY2tUyvxu2dfjDk3TwDuE7Nv6Bc8XuNEFnFgiVKfdjDJ2DXAxGkuZxRyE9FYJU6V8eUHUU9",
  "key6": "rGHkGfUmoAu9ciU9u4unDrMU3BCwMvjKQoxNbAJLrDVp6xXpUHuKqaNHoFDQsGq9RSvKsp5jXgNZ63K7R646Mfh",
  "key7": "T8Lx23draZVfCGAXgS8cZZakP4L3CXXVLmet9m9YSbcYrSs4WX3wgRKoyCLPfMwVzyVNWmn48VKVjweuviKohEH",
  "key8": "8KgTWQD1iciSychcAaVqu6nuFW7gexrnsYpkVWNxSqNgicBEh6233PQZzLvtvqAVwDEASza3FKxmLXVJnfBenPB",
  "key9": "2buyZhYzwWCTkSgMXJCAahmBxgEsmBYWc9T3eMXhesUvFrkmtEeQ3Eg8qySZxrmh8uhRNRfNuebEiNKCVFDTLrYT",
  "key10": "t5KvJprR4FNhRitZP6bqhUexDWQVMCCSXthHZM1KDt5RD8PCLQGnpcQTzoLmsdDHbEP13X2bk9qWEutiX5cgama",
  "key11": "zPg12c9WcEmQVA7damh5EMpF8Ex1TeRkbMAgeqUqmNebyypAVTsqmQW1BTJoEpUdvKYY4UbnUgkZyGRYyTNG13S",
  "key12": "3U9y5p9LTJfng8L7yhEP6Epgr3KssRniEyciyVFFtBKTWRWJGAePnZRziKzhoTqrzmr7aCHU1rMzko1rupoju3T8",
  "key13": "2NgmdLboemSLWGXFR4U44rjd5RGePZFxunjAHFqNykksir2KABFELJAKsXoB53vZVGHtdvXeVJh45Xs2zn3Pumg1",
  "key14": "3FhWeP2LxvC1oo6WePRdmVbkWDAeUK1GMFuiFeZVrNYKQ23L38AVgZJzqYnrBNmYb4kJ7M3A5syu4f2A82M6ndG",
  "key15": "4pPCuRyMxFksYgHR6fmHxyWQy9RmnvN4tBEduxPDg1iNuiwyRHg3p8GKLnPvviGV68Bse72iPx1S1g4QCiUZ4361",
  "key16": "2Z7HTqZGe3Kn61a71vcWy59FFzLgemP62zXMLtzeCjm2ou61Y9wJzxwin2yU2SHd1wKgkaDaizPfuWAsEZ3fENdc",
  "key17": "4eezxcXosoxaqUa5NPtviu5szGpRMyMR4BmqG7v4vdf1Wx2QKqN6jxqBXtpXJDazoiLyzU4tdQKeFjzfngonaxwb",
  "key18": "4piWEUnjeampCikYsjvPmDdnEiN45U9A2GKRTFs7xgMeVsyv3NeV2PxSB82UddU8oYL393yHMxXUJBtcBy2MNHXz",
  "key19": "388PZRvmRubQM8wLiV9EmjMmBEXWXB4QWMdmWCTCDhWskyHWUW2yT1jc2NAZeYWAn7xsTewa2yR7sY3qcWakgxcS",
  "key20": "5WDPd5BpdkVtunnhvcJVZmzLGqt9JwV9D38x6Kv7MHt1CQ1Bmjq5gknsxcyzbK41hJrRsEN6FT5mPHFk2XF93JCD",
  "key21": "4CEuXtr7zLWop1WiXpHPBg7ARqc4iYoVarizuqQ69zfqm8Ng2w9apneB3ys61gmFJqTRa7btxy2pPRSMHXNfgofc",
  "key22": "4MXHEKQBgCM3uCTN7BUDzWvxSkT7GoZBo3qx4ZrN43SX5trwWMA4urzQPdLgSXJkXeNCG2mYC7y129QuzH8ysqxX",
  "key23": "4DxyogswJJEWessLDcQbsbS5ns34VdLkSDpKqH2cz8f7XjtKDQhfTsh845diURA4gn6YXdWNGYnAYQH3jMa7yMHU",
  "key24": "4BrtptuX7nLjePWKY5HoHNJGWQx7ympkSETHHKocWWykg4b8QTVUqx1WyY1aaSxwx2fFKyeJG6k6PC5aBfbMj8XN",
  "key25": "4kC1YFFyuZYtMVaLz9yjVgw3UvZ9PejUsF1mqExKfCQHizcVJqeh8yysW4MTsEW5yS2bAo65RqKEhfo46z4ZScLd",
  "key26": "5JN7NL9cYn9Ud2XKSH3rm4cjpX5FUZRnmTudL81AHiZojL3M9Asi3UbkmhYexumU5dNf4ZB5iHfcxNckwBVubMYd",
  "key27": "dn5Kf1mERgwoMpnL48yv6jtCS9dKrUqHNyXVKmkqFAvXgpLPkVzNxwcB9XkV4B91AyziTdyRnRN4FyxPcNDtVE9",
  "key28": "3ZedGCdHrHcgpLXKqN7qSy7h7EXFrS9kJWcPjx4qyd693kRSvfypGdhYXhuRox5VECMWRKWqYXcwW9bazc4yBANk",
  "key29": "4qD8yts6QNNRqWKMspdzpv1P41LiW9JXmYJ8MsJNHKGKJ5XYCKHdDXoGXAX4jEiGXxUAxuh5Z4JkJNcAg6ebSEwG",
  "key30": "4ySfntLx3h8CRh29DNTspBNfZHK2QL8L5bt3oM15WXwBL7nPqLFfotrSYfUREjfKqcEygHozM78EqHpx9jJDsS3j",
  "key31": "3wUdvepLeKcZvMkqMMH9PkR4tpj5oHcWSWNeptZbeKE2neBAEGnRo2bTCxw5UzyuhP31VMZUbz1qnYtQKWcqTaUM",
  "key32": "4rS5TF5iKqNHy6vpnZYM8s7uK3qy3kvdQpwXmaGijVR5NdrGDuq9DnZYXEWZknNqMFRHmACxqLE7Bsdq6mayntJc"
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
