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
    "4xx8UGXFLXorAv7Q5Z4Xm4x91wiPF2Up5YbCxckZ4176U2ppGPKLK1MT2EU7ECFfebNXsFioAL9P3YMcymUW1Wez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipvtuQmQC2vn4j1afwMynM2i8uXxkGspns4NoFR7MTrsaQu8Z4J5nZo75SDWGWyDuZj946XfwjfVLbAm5ub5HTR",
  "key1": "4VjxCKM3xMceLnKBoRU6ytGZSZw2a1BiWXSETQaFGiSRq2PK4PTTsUNZn9foAMR3nv6qUjc3vcrvDiEMTG5HzaQ2",
  "key2": "2mDSUiS5Huu15yrUjYxi7PMyDqGj9uefjF2nEpVUkFyP249GYcS24FfzHvvrT9nrUxQ5JN7os5Xv6biL42aU4tpm",
  "key3": "DVqxS2MTFZYXEvhPw9PZ2etSRZzapbbk18iGPB4k4zgHHWMzSvTfiLzUs3Ef1LPWh5NNqA58DreNTUwYcsuT4DZ",
  "key4": "nKnB4w2ez5hWC75G8azHnA7Aa9QChMmyH5jtx9V2ykDu8fdey4K5n6QV9oMcH5To22FKhcSzWpPn2qJAx1kb6Vo",
  "key5": "3rTLfCJJizSbDFPRwHsihwpJJWsRo8ay3XsuE6s1RDF3aZf1h11zM9TmmQZfoQeMpdrXYwKcQx7vPMdWJgJF1tXa",
  "key6": "3DqDVVJMXXm2sGMDPPjWt4WjxHv1cYtCMA7QnwDnfqj2rkR14UDmq4AERvxnNFg2zZeMizGuaotLgV7BhBM836a2",
  "key7": "4kEWBDsS3hzc9B94gBuyYRHtLW3iX7QTHRvmx2JAGZQVArNrWaN9VmdckK64cE7535R2tc3jaxFFYphsEs3RAv7",
  "key8": "Fm9wMVfodbPwVYZNde1JcKjt9T29fKeumxVt8V5PMwjuYGa9v9ReszcizYhfwrrWhmpiztx7rAP66VctToX3Vse",
  "key9": "2hVbmQCpHWAFCG7Am9VYaoLgdUc52Dg1hs32ooh6vsN69vvodAczA2Npsc1BEPDLNCuPK5nW5iFzxxVKDq4mzqa3",
  "key10": "4tG13VbuDwCiMi4uSDwUf6s1XY4i4wem8bQFkeRxQTB8L6fLyBtbFa7mZkjhNdLmk9XQvnNbq3L3gmompTrp47zH",
  "key11": "5Bouyrmacfcoif6vCepW8rFSVXR7fwKf3z1aoUGug2KJ49ZDodiCmjQXdkohVANtd5HLYu2rk3Kb3fuLWXTDnEHs",
  "key12": "5rFQUeR7AsPCaJL6FdfucfnqpaHF8AZEctiTP5XxDTVySvJUY96jZnaaHPgJBrZtgSXTRBuDTUmxFDduP8bt6ke3",
  "key13": "3YkMceyLyokG98kmKbCYsT3LjbP5coSVDtxjKFAFF7Gx5RRo77xFj4Sa1kfBVdaeBuByKaNgVgTdwn5Buh6aBUHi",
  "key14": "348WbBZP14SYtRP4MYXdpv2W9maqC7dQFC55g8Zd294ZfbCVEugV6t66afoF4oDmMyi7q32Pc1jz1rLHUjqYMeiY",
  "key15": "5XZCFHQQMkR5NfHujUiiXn11BCvrcSk4tZCryZaQBXtGJKPkr3vne5k683hMxTgT5TWwM4898vNFmu2kyTRftiNx",
  "key16": "4scSSrBR9HSTJVEXvty9bKQYTHygX1ymjZQyk46F7f5xopV43va59MZnzzxvXsajuG2BFEHgMNie5bhv6UnEwoeX",
  "key17": "3N7WrtvQgtWTMyL6ghLL28SVmbQnW56dAamDkdPe4JRpeBRnwqS4sGcv4wJ4nyEyvpvrvVxJMT3HRbKHDMU9EK5S",
  "key18": "26w5LSbnMYvbTnpHYDJxqYUf1UkuGN9ZfkCLppmNUfaHwxfBkC13z9hhBGEBBPBjR4RvHd3moeFwLNMgs6gwbSrF",
  "key19": "byZcCiMsx5mqe1MpdnKhBfkRz2XXgGtjss9MTM4WoaRHg8VtGn4w1wBu6frPPeYBBuqkYudUSZmZNzazFXdwaiW",
  "key20": "CM6z2QwdPVAxnM6VgyhZhopFLAY5dpunBqiHtc89jEQu6nPmqdBtS1FjHEp91EiJtQyYWAdFKLKWjejcgrE4Cq8",
  "key21": "2XnLthDq8EuTxQDwg5P1beUX8aPPkJSXt8Teitd7keLUEWhzHpLWi8dJdvghHWjvtkbc9F1rQ6t1R8eSi2wF3z2N",
  "key22": "ctyJaxn6QoxsfqUDpZ4w6gwTbXreM5MGTDca5Gd6JVU54xSrqpPDnJQhouFexwSuTaBm8qA8WtyfmQVbx1EARmy",
  "key23": "3tqwb4w53yKzNvwyJoNkqr48Bdt4xNnWAazaL7gn6yMoaVWskgygyXxjw8Dbyp3CoNW5yyA9qSHRjfbkcwseCJRJ",
  "key24": "eJPiBRpWemVNiNMNY48bLkY9H3MptSCahbDKtdiEK6R98KiL6Nxk6gjVS9d3MivcF4xzeU6CiL9u6HkmLXRGLEn",
  "key25": "Xsk9qgVuBgtns9hUR7T1JfPa95injEDYG7gBNNdHxfQopKtJRsbCrK3pB1aQnZrAMjAXo6r7F7CUiGarenFedeB",
  "key26": "3PZuVKCKZFbpKhKsn2tBNMWmP7Pt6d8bXRhPgCfYtYEiYLCM1BL5mPAvV8o9Z3ASBzE6j9wAD4FDmZ22WCKLwiUe",
  "key27": "3LcddGP5jMPq759ZMk9Brug88o63cWhwpLdy3TQydg3VdbfBP9SCtaNh3dAtQz5k7vegxJUoSQiCLpXYuXSBqXRB",
  "key28": "2enEhQcqWLAebDU3CBzTMkBfEcPGsqcMVYUyCriptkkq74SBexKmx8XZXbmfAmnan9ER7JyKGDjY8Q8nLT4zJbYt",
  "key29": "3ci71v8pCZE35jNJ17ehiDf8TGddPq9sZvgtrUwFiHaosP2VF5UC6XfdFzVeAXrUtJ224ULuWierRWQKM8KgHz3u",
  "key30": "Y3o2SjmPWL8jZJmDwdeKx8BC45Kmut8GEoFf32X6V4fg1FrxFP1eg1BtKAng2z23goRFmzPTA6pcbpcZU6eV6gy",
  "key31": "5RyEyxZSYYwdzuBXv5SutvRyFFXxbjJVhQoqDeX5KyDoAC5Q1kpMtbVXke5cgcy9aBjVVsHcGwVLo38C6ey4qvCE",
  "key32": "28A5QUmbt9v3cVze2RWUQxEPkXx36YrtqeisAEhFtsNmz5eMawygkYN82auFP7nSVEAgTg3GPMh5gc35SvVGtHaQ",
  "key33": "5xZtjLEddNde8orw97g6KbBSrQgJE69Ez8hLkicuWbdcphRZ3YNrmBpSTMKByYk4okFDLF2A5XYUqgQJB1sXTYLg",
  "key34": "5TPMKdr7KfHTZFDmpcW5JjjaHyhYER12kdoM4shU7qiaxHWks4Rk66uBUrTrNGgvBCL4H2Yexv4UHcRekaH5jsZp",
  "key35": "67477sKC242FfGarvixwQnubDbU8rhG3ZyoZFxg9geBeSeYW45pTPvhVRnJY4ZETGF5NeyJtZ5KKgqtpiVh6gVPB",
  "key36": "2sxNLFvSUvtoeVJD8sL7XvcELYfswzo5P77SY5GRJxFGUfFaRTmTqFd3D2KSBSpGqFV917ntYHrAkurKvayTVvx4",
  "key37": "5NkVSaLubKotTBtMB153VFoGS4MwaUj4EhTsY6QyRHdzAn5eUgRJigoo63J7LFswXhscNBjQja9RBvHjHMTYegYt"
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
