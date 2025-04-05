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
    "5VVQ2Tnxfd4QmYkDP3iESf3RUkCgLMpHJwAJtQT5VaKV1Umg5AC2aniEkDgYGwcAXWQHRmhG4D6sS3i6P7j4yWcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37hKDT4p2Z9VzEJdh23CpcYZ9qzMf3CPArTQYmxkxh2Hbpyg2HJ841x4jyfpVCp5PUUAD6jeagAVybKDqmjHE97e",
  "key1": "4oneM6RPpaGofHZy9pbEonqHaynu1z9kFrdpQSqdosLA9ooCMBD6s1GirtCkcKMyWsEKC6tgsN17gAXFpBuA9Ei7",
  "key2": "2ouYoVcZ5ECGgTR3ECFdmBoaQcYWjqHAK9C1Pi3Vatu9mpqJqGNjsSNmdCqpeZeJvyXgezHpL16dzDhDjVDG1bse",
  "key3": "36AQGMTbhD2oZYmxFKPxhA55pd9wk3hvxHiLciPMtKHiY9AekqCbRhURcPujZ5ASxtQEM7hHzn6rQBuhenNCB2V5",
  "key4": "4o9uuddu7EtNNT7ULVxWxh1axMCuWDi944sQAtqQV6BSaaveyv2fsNHPDSEx8oixa6Kbj8D9xw3JWYtmw3nQuvrB",
  "key5": "5HA9eriL6VQST6joMPkHPXtakhgF9SrYFo9DC63Dq41WSjQsyDdqepLs4KBhTaMXvyr4CzeDGZMKqGRkCofjLm6S",
  "key6": "3vtSb8cqBQSzW2A5hmE4mQ99VUWppLyuQGpBcQRn69RetLu2JZtFT9hBpDtRJ5io4ZAesuc7MKshpfWDNkze1y7R",
  "key7": "3XGMtqEHDRPRdDSyTYQNgcZZ8U2YLzALiBm1LwVVB9dRriSchxJBoucSCSGwJwU3Z2Yu2uzRf94LaeShVPeTCaWE",
  "key8": "2JdniDhHW9UyXUnnx9bpHo779aAKUGW2exobABQuRz6FGFZDALw2LnNSdPFgEyi1sjLdnCXJ3jaCS7c3tzws6Vps",
  "key9": "4wMqz69JUfK5PZycHqKyp72KtCYdG6g1ZPn1NPvxP3G6nbyUxagnqS6tAzVVYNPKWtxicYo5MCeeCP7LWcvfUxQf",
  "key10": "4m7kGGEVanCw1u8FLvR7hrBcAHtw5mnXGiRowCLJfQxFwMrpdpxsYDYhgAJLbipKZELc2BFd38L1SmcP3Pj5tJMu",
  "key11": "jySkWVCMBD6UUkXk4ZPSXjUmwJk4n2yD5CyJrum4EoNpDNGkvq6dsBWdhahFQVktFLQ6GsGvyKAQXEPhz9ad16W",
  "key12": "2EKSn4Gj9PdGruzAstoyaRYa6M1PjotDvH51tzrt3PqyRpuYHGxNBeGxdakApDUgKpzKRfA2gJRfb8ESxeRePGzb",
  "key13": "4oFjdzTD9vifASCo8Hcyt8dLQcMecSvqcAQkxYxpGo7TutEC3pLyNi5HmspK2AwEKs94tShmNPoTmnEWEEEwhEp1",
  "key14": "5zdRXV84mu2FpMw58n9Ce8sLN3gqpAXZ5sSPV7FtimFDWQN4DwYVBubszjzEeYEBrZBw7znBBPJ5DHCeS8dg1e35",
  "key15": "2MEgCc15iphY5jCTQz1g86Z4LZRi81C1yCUK2KNGJAB9vEsvDfsyjDg5MnXzn3A5kdTqPUBTmr3ujnaGxMhouLmY",
  "key16": "44Qjuu3E9rwsGoDxo5L3Yqh8quCrvQGXrvKnZ2dFAwvRQFW8qzfsNEHNs9yDXAGougK4gYxo5Eq89td4NH4DjRcP",
  "key17": "3p92Fhns2bqUHmWHRNvBSRtmzeCRdT1FgHy2ZnbdEPHLr3bWr4WK3BZAfNnFoPUCsiUKU3fKdwndG6X77XXNYngH",
  "key18": "2PDYWKdKfUZNye5EbV3VsjfsAGuvUcdu5sTiniPFGJVKHhCCp9b1z8mBYGsrjW9GkoWTsNUQ5uCCNiTTgDm5HCr4",
  "key19": "Wi47hRUsonyxyp2JS1iDmm5DSV5b7GoCYnJnSd5HPKFVfSzEZQNfE5v134QWu6MVitQ7a6bzvouetm4pfxnT2eo",
  "key20": "26B4CKvErsV5tuRMrQSYuQ8dty3nB2CeVdjPVs16iQqWmu6Qi2bN87gZUT6gp8Xfy3rK2iMs3CFpQs5wQQjoarbC",
  "key21": "4o5kah2CLc4uEjt1Rs18aKz3R7PgRJRkpqiJM6N4dG9MCQqqQgLSjTweLcZwuJQaKNpcgGQhCy1vacqaPLGGTiv4",
  "key22": "2G3JNNSoybb6tZrPXg26zJRL6tH2hHduAXWxSQ5MQZXnBcPBZ5m1bKPntvXscNwqvCJUKUMsTGNRHmBpva8U9Uz3",
  "key23": "4rup8tX14K77x8LLEw5nYFZfyu7dMpafA2X6JaXvhLFDJESu9C6kdhYojs3e8ucRrgxBjp9hjreguxow8PZ4uJmV",
  "key24": "4ecCpPyWcTSf3sSYEYe1KuEU47ADuNHAgdqksuux1XgrbjiRWm2PCkGpYPAmRccbuCk54fewjhT8mCCautfGm9dJ",
  "key25": "53vC1CNwJ7qkrErmhHBMLHV2z4ZyA2LRfZ91xEerv1LKh1tCy4qbp7jJZYepoV1edWhLnVq8xPhK5hPqECDkPuZc",
  "key26": "3aeJUJw9LHyHVKxtNjej6ga6FN8RczjJy24hdQNvqo46DWdQgFSssWtB1v1Gmd6jazXdKoSRZSxZG5w7j4V6Lo6K",
  "key27": "2mTaFowUh5oqixEzDPeVtiBKwCw3Za8vUSwt7mWwhQoV5QeccURxd44jTers6CLww5eAxatvzYiPupeofJPArhgJ",
  "key28": "5ZkgDS3ru59X3oXDHoPFJAxqBYNe4cq4oMaS5Fr89KKVjVkNYFpinMeGvGw8wRA61XMbaoizrQYd7cvwVGakscnt",
  "key29": "5ephZLQuK8MCfbUEaCB5tpuRNxoNBvuo1ZiopvnVfTifRsPxC8Hi9MYHCWohtxzESUyNn2BbVJwyj2AUG4iVBh2r",
  "key30": "3Ge6Qb7yRiCjWCH4wYqA5hZgqnuEPwEVRdNFcVoLQ7ywvfvNgF4FjmjWjw7kFaAEQRNyuyCfDfCrkPMnXmfjnmHM",
  "key31": "9gRzPHLXtFsVYa6pZGYhdPvakCfe1BYteBjHR6USpbyH7YPps2JULyFHCyc8JDuwZvc3tTney3zUJjijhFaYveW",
  "key32": "LiXxkURYFuA89Dwy1MiVoYvZHQaCtR1pZzexX33cp9bWhBfJKjRpC5eC31g8Z24NbVFT6fxgrrgvR7QwMZgX821",
  "key33": "2N4TafbnRwvDhQexPYCSUrpjKkfBztPBDHi5mHzEBZd3UDE1dfdo1LY9cArMtFd3DeoJa7qhrWq3kKPH1S4NhNE2",
  "key34": "3PtmCUWjEtX5kss9zPKneeyVAXG3vKA4uBXZcpnGBRVJfuGBKQcrdhLEeUoD6jGWrfnpwhtU11VPagHerkYeJQpc",
  "key35": "23dnjGkpUne4Fv54gqxXENcjjaBodGB8rJuFWGG7BDdkQ72hRcgX2N3nYc9mmDeJ461tceV4avp53EjrMfsw5qw6",
  "key36": "65APDdV4obrBntDEXjJKyqjkbRra9HoxfZH11myLMHF9XKUu29KvNf3tFZcx2EpRQ9EhctxQbVd8DfVfwq9ZzksR",
  "key37": "2eZ86aJdEZ77iyiKUhM3iqJ6jheN7S8iDUtNThKmnc2LUB1BYaMGFqfGCZcyb2SDHTznnb9jZD9pSuqojCV9CvM4",
  "key38": "38NmnXJ4N8oToq3h5v9YAU4ANXY8JXYuLUoRYZ935tK6TCCMB5b9mzYisgWhsceyd9JrTU4DZTEyGEE5fZ8KN6vc",
  "key39": "62u7VdJkx9uq4cgsRSo2Ej34iWxNLDeoNKEbTtgpHawHyvz9YFGfnpVRZvt61HBwTVfcGa2VJN1fpgnAnKShog6X"
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
