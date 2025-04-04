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
    "4tsa5rr7H5GrvBoy6o222VozDFiWaSKoQvTh29YMp1ZGWvhUBheKtJJQMWmWXXtjufdfcndobExDNoEa2Bxp9N8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axWG5NrXogahuXwevoCqeJi5nHfNSssKATCnt17DgJujFtV4wp1Vskqf77qYuSuvcWGLbuYbpbUpdA2JyBS8Fvw",
  "key1": "sEkquCUvcMcsPC65KrvofQYYt6dFPh6odFQsTJPSS6d6fG5ouqLnmProF63iDUU3ZAasUCVWBUuqfFLkfptxx38",
  "key2": "4yjy5oqzUFmwynFEUUpNTu1jzFRtfYaiAq3Qvo9wy7Tkifgha31pxhm88QWeQFTXFZF1AvebhrfyKGExLs1c8kHR",
  "key3": "4d5qcePKfMC7FxYG86v9QEeRMpjobY2Y6BPPW7cUrfSNKqypNsWrqD6g55EPK2r35iX4KvZmDd3J1TxhJE8wWQtf",
  "key4": "2scFfvdMkRnsBb1sHQjXWcGCDaY5HnG8WDJmn6f5a3phvwDg3FCNNfEidUD2SWfeviX1uzR7bTv18ph3P7YBwn1G",
  "key5": "jHLwVmf2pZhcnh29qGgyZjN6iTMSceMN8DuS12u5cw1ZpNR9YqLD9ToPsoSWHzs1ficAa6DdXjCNN6s7dUNqLk9",
  "key6": "iKSRXtX9fcEJwQidYJxQV69tJWmMtT9bfHYRggaXKVcmXLQM2Q6atdCN49TyNL53s6hDaxqa9zLoT7NzKoi5ehX",
  "key7": "2RJZum1cQiBFFprYXmZDKRQwa9W7EEgVQsuuNos9qk13FKpAofngJpwDRuN9dNKyPQ3mq3jSAPTKRk5Rui6JPvrb",
  "key8": "67JApGFaKv5DAGQgKNfVXjfzZHTAbxNgnfiZoLDTntGsgfv87RMVtBE53hFtxS1L99LxdrodRbZURZCHBpuFvoXu",
  "key9": "fPjVuiAr5aN4SzbNkGcRwfHweYncQhakmb9kurs83Y9iX7VTeTHnRzSEL2KoaXx9XyrN1JLsWPpCgB2aCbrGGhH",
  "key10": "2BEE3eJ6Bo8VS5G7y9Ysjp7fmGNkGCiiCx5Es7M7Ah3eoGtpZPwkneCXf2rMZeUpRaKFk3e5qaotE2Qa3E3pJGh7",
  "key11": "3M3rfx4PbbJLp2Hw7NwzeesWR6tDyfgwV9e8E4Ykf6Xw8cVM1LXSyz8R6h7bSeVS8kB6EbSPjdXPoPmfTZUYvDVb",
  "key12": "3SiuXeNfW9Bf7VSmNhZUtdWJUHk3PaaXQQbTBjWKpKUrmhC9HVZ4yuUh3ZSmyhhASprnSze53yScoyoaPtguf6wU",
  "key13": "Xi3g5kdS4NULrxQ5iEi5bsBjP5kG4GoLnBdUA3KhZBzxQ7AB4gWNarSRhyNUGShfK1V1rad7rKLaKHzm4Dw7DD3",
  "key14": "3862ak8fjsXLci23RiVbCSf3whrm8AfbUy1qLWiyudz3i4fCgfRhBnXLZhCBrzL59rwWHhDbrFZVWexz6CCwjS3b",
  "key15": "5ZPdQK7UzpX3sZvrpLoatgGnahnjBfrGoVBaJxcgwyxn2v8hS2qie91NL52pkgDPsPPjQAsvDc8FPXGkHbttbCrn",
  "key16": "4g5wkJPmSgUK9rPw33g5m3FnXfXxT6HMjFe166sQ8CPPPHxSrExBDDjRGXep3Tz4rWCcFKkmi5WnFMuFWXwQSeLA",
  "key17": "5ngfgUzsX9dDmgBbUYroMkrFyak6WR3cmznC4KKn6v6DgSGWQ91D5kwjFw5boxYcKAcwU7YCUjrtC4J2xJy66Zzd",
  "key18": "3MRxbyxvHwxNgmm5XJgWtXVU5e9c4AnEgGHvuoPrtxoZUGehNhZB7GZXsZXriLTM611E8m7HUQo7esdR8gVAi18f",
  "key19": "2L8me6iPbfHRuqvpbR2DMXC1d8tXti2n2CrFT4YDp9iygRegsXZ9kGGwXwtwX1KcmZL7EnU33tfhMre81sjbTUSn",
  "key20": "5XSSwFQtR7bobSirYuk7GQmxC78WDDDp695Han6Kt5AcjjcRE8zGWWuxv985tEV4sDRsxqjRwQALJQh44G3NBai1",
  "key21": "j5vqRFfZwc13TTCghhCd8MizDnsTSP6chhoUKKkz8v5nJViqF9REhpkcrknYUhL3gJBKATytFMH6hRjre6tybQ3",
  "key22": "4jTyu3XgZwqiyMPiroHiurDXDpwTTZLArtHQRAgn4x9LqqDTbVpb1D55UQoJtxHK1wrBTs3fjhq4S8CtWy53Secu",
  "key23": "1SKSzgUD6PrjHKBV8cmjdWEcjQDria9Au623h7C7YmHEvK4jjrRmwyzu4etSyjg4yg3Uj7UghFd8ShH7Zddtyh5",
  "key24": "GaYU5i9VVxYjQXTcduDH5UZVEFS4CGunknwBrh5cSxUbjnsRxraP1gMEe1Kin7eTUckF83ipzLQJi173DuD2xPZ",
  "key25": "J5mKsTp2ubG47mrCY5wGuiyh67WmefMB59bmfaT9WvcP377a7M2jLnmXHrzPk8XMF587gW5BbS6qwnCckTThEMX",
  "key26": "4VFR5Q4wF79mVPQxHcLqJNSQvS1mU2KEkVSLaEBXP4m46AYrVt3BhcY8QFqnETXfH9Jh7euWJoXqDDXGZSZg1r45",
  "key27": "4E86zCdoEgojaurn2uchGU9teJMbBZXK92QyeYHbhSjJKxoDbiNCi18i7tKv9JNqavJHhyeBwMbee7CVPeJKvBBC",
  "key28": "4tFqYDvqmEjzB6rMw1Mzre5L6EbZ3z97yBxu5bv9KVRxmf437Ydf6P9rHjVx7bYzMnefTTFfX9my2GwdKJ8vVwup",
  "key29": "KTzEQtrch76bLS1px6NwLpauubKFoUZbiaT5uZB9A9sQDfg8197PvhV9azcd4WUqbDeEDXFwkDwM2VmwGj1QTkY",
  "key30": "4HTnLi9etFK2FSJVdA9CU9aTX5zdQZVqqGJtHLdKQhsyZN8fS2xdF9WoSEXJsao9kSG1ysykGyPNabqR7ZtRDfUn",
  "key31": "3nbVT7nMFALoWaxEQh6MKWxAjr6heNVq8CdLXXY8aBPN1iA6NBHxLDsN8V7XAFg8PRYpnPxnR6N9rkEbhSzrAGvn",
  "key32": "xFT9K4XkPVg82W1eP2L664UHoVxdSgQm6JtmFEYCex7XN2yz8yBwkt4RnRgCvuKPkjni2xwH3728MQDsxeAUgdq",
  "key33": "3KBSQzeh59khBCg2QV2xj7kVGJoyuNZdy9Cx89NFHBUZQstn4SVX4qFNFHUGfZqvVrkHkmtbHgRRqMMVhFoiTpuq",
  "key34": "2aumDc2N61WpLwyjb94h6MPfDtJcEnUF8a1FxETw1GMayRdLr7WLw45Ai5aJNVyRau4yz67eAiAo6e5FUC7mEkM7",
  "key35": "rb86Y9TWGsKnGfy7M5xifMM18U37Nkgg4g3tyeoh799dWGSmo1KT9B2dHTzZWweRjhV2vbJS1ijzu9Fkc7VX7AP",
  "key36": "4518cB85bn7XJvnT9iCoZ4TwPFswTorZddHPNyR4vob3zLgAmK97tbnc5cZ14U6tuTHZaFnM6fwMA1edohzwNNUb",
  "key37": "27oTAKziVcw2Wm41Gw6yu7roLyeuzD5mqHEdNKYALMsPACV2c9trYNDmcjgdHkk9Ey7CoNzwKegEHuzT9hYSXjgu",
  "key38": "672aCthVwb1ihBqucnJCfQcZd3heh1cnc1z5BQ84fj62T9Z6WiCKgqmC7aAjZzxc15zfkkNydXLBzT91NUAMeTrD",
  "key39": "66Mn2aaWYbfQXEEsUKez9DnMojvz62pbZXchPrjMz6vXv1R6PHTvj58MgaMj2fLGmRvtFcHStcxBvaGWQN8Sno6Z"
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
