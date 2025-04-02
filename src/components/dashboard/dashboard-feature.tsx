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
    "4rTWjzjXtqqWSFbvr8jhHVuqimmuFnAzFiPzY2qR9Dvxn9X9A6WqxUYpQPmkbKx8RL6dd6fqaErZRFbgwndY8MeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51owiLA4FzuYbwLajwC9wmXueqh5xf53oFGKDjtecYLXg6RP2nH1RBu8KzRprPoSVe9g6faAfeDez4HoLrfs3LUw",
  "key1": "39it5uBqL16L9YKBUQuYjE6WQ7b3h1Vr8zvZXoigDw2cNceJ3X9ixDjujuNJdbx2VsF3NAns3e9DpQpJgXjDT3LE",
  "key2": "4Gz7hRTvXiugvN584MDU2jTs1S2WhSPgdww1gj2rPYhZdhiPCaMFfQgMdxwZp1gM59oGkJ3QBQgiWLRDs7VPa9v",
  "key3": "YPk2QqHBpiMatetbDvUCptuZNTupychgWXrWRTkTs31P9Ej7TaVWKMDmdHZvuCb9zX49spdaJs156uGM4y9AcpE",
  "key4": "2v9iyTgspaEoUcEH1mPzv1Hok62w6ChhHnKZbzAfLACoHDmkgQiRkjTu2h5AY7omELxfJ5GtMab1JUHNTBUE8xT8",
  "key5": "5AxEMdA9GwdhWHsm5otLLTEswBwjcpFddcBchWFfpTAL1Ve4zdBetwrWP2Pw6f9nEbafc2sKZn9AsgtF33tYo79g",
  "key6": "2vuKwQKE36HKz2WQb59GPzcqyvxPwVsr9r7pAoDT5aH3rH4hQikjz2Jc7eDgjG2S18ajYKgcRKFGwtMyP81ceYVM",
  "key7": "3hmdsAKMvs6wWj9BwWuNLv8ujPnYFBmoVhNLhbNnNWub3z6Uz6znZhYENnD5dFEevcJSyREBRmH4RAzFxs4Hu2Sf",
  "key8": "51fMPsjeibZWvuhk7FPetxrVXGS99o5tcyBCf96Ri6TGf8Kpcm9qeTuUQKZTKC9AeXrWuwaYdrqT4RdEeuFDwWkd",
  "key9": "26f55BfuhJebJVygDaV5Rqg3UKdt1u8YuviqpemZJv8DEiKJYSza5z79zGqooanxjjq38xWEYTHEZ6SaKRJYTv46",
  "key10": "2EWoQuF56Vas7hiekxGG2vgzFafWayRGwKrvH7xh7Vo4ecVQbcZPWWaR5vYV6yWTSV2tDpcnf6oAK1aB8WCRD5A4",
  "key11": "49L6mr6KGdCNzvwPgHotCmrgtRVo5FXP2T5S6jYZDhZ7EEXJ2fDrKEzUrcuZKRD4F1YfasE1Jasu3mGdXzRBzAzX",
  "key12": "2KsYUDj8gskZ7iJ1BMfnshcKscbsyU2YeCUhsi8AKXjRSo9B8sAye26AiUZzayBpY5S41hvqhogdVWckpjMDwCZ1",
  "key13": "3Tq78t3WhSq31Q46rjq5gzMcSypNoi2yLY1pkiNawmSPo23KkndxFwjJB5XhzqEtdxmYcfErMpjGEv7CeVqcppNz",
  "key14": "fZJw47NwFNU8rP6nKkhbsqwvacszCeSbfNpsQjPYwM7aUzjXpr41vhjuMws9w1En5HU65KgGFcrGtHTFE1ZK8dh",
  "key15": "3fMJPwXgokKv98E4RWKdcABgsC7xV9BLPHsesqnpvCkhuQtBT234tpvoYASH6LBByD5nSM5DruhRMUMGSpRBg1s4",
  "key16": "2jLe2bvk6oqMN714UnH4gbAjojGwwpVNCbmymnSM6tsfcDgEfgwCEQnkt7e2ZPK1DTUpWSuBBvzKnuxCTQY8DyXA",
  "key17": "DEzXevuk8ZV23hVBMQ4mRGmE9asS6xCeyLswzbxH8Lcv9hnM85xLSqFCbN36APxGeEjs1C52J2tt5FxjdMVhm36",
  "key18": "3Po4PNPvgLLxp9YZ1VNxhzcoXTyDPWPYz53XCNJJMsNZzXsqHgGh8Pw6YgmgesFyoFMoWjRMs8bYaC1LmjLQBoqZ",
  "key19": "51PexiiFwjtJtnDojGZSTHFjSFqXpBH1nptFBt526PuuHGq57YvzQTsAL6EhqEuhsEipoP9W28fSwwLAzh59CinL",
  "key20": "3xjjQoYAwgQyTeXfHLNjkgRfTYptAPsEyjp5M6W6zgMRRdn6ire3bZw9reYvNkJJVMirYC63hEXnfMq8g9QJ27wW",
  "key21": "rFcxKaNqu6jnqzXTxATLSE7joVq8vJyXNsWLa14TPtP7DNVAQcH67SUQnsKdfV7QyjL1b6cyZRK3kNasUkWyu15",
  "key22": "3iE6duspyNeTh7kDfnnTaYq41YZ3PofrDKLhSHjUewKCPAibZpZWf8jYzdmFpPU617YRt4k5fY8yiisUt8CYZ3Mp",
  "key23": "4Zqx4xNtQim4MWMh2JzeM49t4crZcVj3kQMUpP6hiA9NXbvGvLzS1bdm6qE72QpXdNiUzcGaUD5PVBgeabBQ67N6",
  "key24": "4FFq9CG7DYyxiH1ZvbYnBD91j66XBHJRxffJ9n2LTBuubsY9XxhSkqb1YHmY1dSL6yryAd838tPowZHby5vE2Mwa",
  "key25": "4QFee8dEMqKBiomWF4uWo77n7PXHLQXZWccatT68gXaut4you4DCpJN7dWYmMxYkcAV8BA4V87maV4TpXp33f3T6",
  "key26": "cg45y7qx6KndPzW3U9nDQZKdMyzJiN1kT9dVX1SnjT6XNjFgmcbHgQQTewJyfYcgfeZbCv64Tuic3FWviRXtZxJ",
  "key27": "2LxD86Q3vmH8Pyr7sX6D6g5WByLKySghYq1EAfGJbCcizpDWLY3xhi1KXArh3G5tsHDuZVpXA54DTJwdVrQFGwXN",
  "key28": "54zbvbjc45EXDa35CmfriHgTQRsFWVMeqCya18DXq1P7g1XcaN53kC6p1wk5afCnkMSriykPdMNPcNE9MkcBDgaL",
  "key29": "56XAJRj8PGNbKE9YAza8FPqYniZHL84xpAQoXwz7uBbvd1ky4QKYXhiXxQYRqZSFiRexN3dwSsoAyuu72ECQgVGM",
  "key30": "5M9MMz1a1w1noRqrAz7R7P1NoHi1u6QAjcL3AukzPVHWve2HcgVVGeLceqjrhxwqmbCQAs7KFv71fM497KNotshm",
  "key31": "3kTxQmn8Cg3c5SS4X4DyNSz8ddgFT7JsYnT7xWRVosf5coA2z3jTZLMKEZMXs4LjHHziKUfyspURmhC98ArUDWMp",
  "key32": "64JyYiMhKoU3T7tixpx2nSxzwiT7S9a4BeDT4pXHFSnsPqrVoTrBYctnLPYNNhHpXebgnWyNHCWms2Zxujywbny6"
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
