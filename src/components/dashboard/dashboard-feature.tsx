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
    "3yX2x7L56LefNLbNhpSayT8ATPo8VxrWLPJqP1TtVULQkggX59G7PTScSXhGLEDdbNbRoB9wog8dRkteTnYpsdTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43juKwPVw6TnhZR6tmqwPNH3RzNNbYbQL1nPgEvZ7rCViNdRMr5h5JF8XJBRDSqN5cLNAHCzBKBnasLAb53dsa3h",
  "key1": "2zjhmqM4WnbdLaBp2Lhjn7RL6vYQ3PoGQkDZxVRu5FpVeDr52Lzfy9VhjGCh4Q3WxDeqEmMewVgh7v8822T1weN4",
  "key2": "5V7tBtf8B9xe8QnQyCBsEskDhQSnJ7YYU9uF3i81eAXKnZn3qY6JBiUY3Ukwxb8CoUVevHPxPKcFUJyh369bbQUz",
  "key3": "41LeocW41g2Mbey9JW6JpRhByQjRpQfWKWCQzFxS9KkecFMTwRfK4D5TDSESCTMRnUjuiV9ELvCFM2VNHJ75bjV3",
  "key4": "2UaxN27LbNjmL3MqA595aCmZSL43BkGakRYfLu3uznjGvzsHkvQt7SdNyZpUD8G9qSLR4Da13fMCQ2YEu6JEsn9h",
  "key5": "2HfMKrdB22MHAH2Lno1fwordyNhn3okVKfnvhePHdxBVduVhfxkSqWkiDeXpJ7WmSi3ZPj2mERLGqKeU8FqxsyDY",
  "key6": "2xRwxC5mSUAu3BmebJUQhhAEsZ5sJ9oEKZizjCVdhKvRR9rBDpTeJviAVuuHms6QASvxjX7R1rwCy7aMPeQoe3a5",
  "key7": "2N9X61YdEjCkCparyWynrDhiEL35PQgHiZtEy79hE8nH2Y3x8LtUtbcbn5ghFG95mtutaAVc11sjLrGH4vu33Nac",
  "key8": "52AJCQ4R3TBYaAZEP5GbRUctoEU9v1aBMNJcxfNxrHKXQ1QzBgvzA9ecDK6MWhGmCUTLHEdugLVW9eQN17kMJrXX",
  "key9": "4eQ9fiEVZ4EjDJnTst8itbjCcLXtG6JvNWr7prdJ2phtFQZqP9pYGwAit4DrjKR5mB4K4BHZMd2ppKadfJUXuMAc",
  "key10": "3pzQy5Sr3y3SuedxceciQwwavJDWe2G142EmtV2zD4wxWfDpc7amJyuTD4MHz7R6UohM5TuLkJd8ZXbvR9xQyF46",
  "key11": "2CBj5J5Yp4cnb2W8UCGJDBa7Ro9ZNLLH861dn8GifveX5LX5JHdaNsbQUaib9Q57pm9sNEkAropVv7xbZyaF2emW",
  "key12": "3ooHMUdQVSNUrQCT29kG5xRPE2YGqyAU4RHmH5TpNZGknYn9GCpJ3q78WJpZVECemzeg6wtJkMKWrP6qSrMJ7amc",
  "key13": "5fovoC1KtAdGxLX6BG2EJ6UKc8MjKb9JaSmsN1jBWvcfaHM3cK9tjH9JF9YuV4biyezQjP1nwzCHWfVvDUpm9y3R",
  "key14": "Rj1DHYP6mJBdSgwPi3azbsPp8XzEuWiN5rKG5tQWziLSEHZbqVFoaM1fwpg8qFhPYRdaY9vu92hLWZ8BX6FXBSR",
  "key15": "4bwj96KKXGu1MQLBK4iWx9jrdm26EuyCMuFGZdFDyV9ztCmvbxDxgPHcGfr4eaNyAL5snCPeFVQCRMKmHCmRVjcx",
  "key16": "Sp72vzzrGmZSQbLbE1RZ9KfQjCNhEAdc2DxMKQm1w5fuCxHPDN7QdCDn6MDznPJzYq687yVDQXV2Aa6eWMVVS5P",
  "key17": "hCgNoCtR3aYxMQxr6jQk2PzgxRufe2gGscmeUs5nNhmrK9khbozb8RiPpzXXMkTyB3wD5rNqtaZyYKt4A63h6m9",
  "key18": "2hmo3z9jJ2Fs8kVhQBpYTUSRkCQWTPd5w1aax23kWijLqEaypNcNb1ciFMF1NNsFkdaqtW2VbdVfYNMZJJFhEbXc",
  "key19": "XQpeCczFKsuehensg444pv9gdhdjkGeF6e1eFQCYPWHfhHYwbejY5xz1ZzSevfce5ED8MrAM7DXhvJNSXJ57KWx",
  "key20": "4uQptq998tCmLYKp4ApbFzD1yVipCcconVSJ6CY44vqy8ZjPNT5yHY1ZEpxaKjMJH2m3Q6caGgYLpKtT3zUpvKA4",
  "key21": "2A3oMbBkb1gWgpMxcdwhcg5PwwUPyHTxeWjhWC8Xw3YuQTLUcBGnfZDcpr9gG2Lypm2XSbobgwMfAKVxqpqgnjqr",
  "key22": "UET84wUidVuAcoEMQWaFpu8Sh6oeAxzii4F74kt2oWkjuZSqk55FRH9LP58LgbXyMsQzEobPdLnPXkv9ife3qNE",
  "key23": "5mse3c9EbCdNtF8RUgSn3fzXeYZEiaWdCJS1ZoT8QKDWoWXQj1zt3dKJXW11KvqLD7g4Ga7cG2Hc7NBQSEhgK37k",
  "key24": "2XS3JmE57gBrdKhzUhnCXyrRNc6ZmipWeM8HSxgfbj177WimkZBnrHLNddSrRyPTcbwMGCsyccbM2QkAjrz85aCf",
  "key25": "2QBWsWXTA6iqtkL97J78qycS2MjMxPc9iTGsexdBZTRt3Yd9BiGUbJyisCYMR4sz3D1jMGXZgYZVBpUj7KuBaB7R",
  "key26": "4oifr3VN3wrorXtNFxJ7PwvpxyWrHexK5D1yDRmUcrS26fpsXFWzZrKNKj6tB8B5qthXmiPZR7bsgaXfEcih8opY",
  "key27": "3qPEwGo4HWBtooSTx77yMXvNkMqTkP8xdE1Dz3TRzHQ9w1oygRxWjDzMs2VqbvW6kMxrKBQM7qaYSnQzidicxYL9",
  "key28": "Lhi4Bcmq1ziCd7rC4VkfRrxFGNpNYPz3boCcbGE4pyYX95G8DHbGpkcQR2oCtpgBhbJKNXwaJAjGNJAd416AfmC",
  "key29": "2HrEU7Mjf5FWUhKhnjK5RpfGxyKyTTYgerx6E9viC6sdeXokXgUVE7nAmfA8k6KeMgSvD17TYVY2F5ZnHpt83PXu",
  "key30": "58iaqM1GNFA65Es7818sMiizGTkNLevuev7rEYUDYAvqEUtBk7d58tYHpPE6hXYpx2dT9zdnHix31VcgfJpPT68V",
  "key31": "3bR7e2BsuGHANTWkdAY3APSgDucRFnRH1L45gQvVsaPF8aC84r43c3ReVsQagvidtXMB1qp6WuRMGJNgicnfCAwt",
  "key32": "5bm2hdim9uwuutmPNuBcUAaWpGSpsKFKChTFR94b6a7aquWn1bdY4y7rCswHW2vx2PnV6DfvBtZugE71hBZh9uS2",
  "key33": "5rHHF4mLwVXVa9KacagGxSNspxtbwQ2JGacu95yQRi8Hp46tCwrfK58PAJXDT9eVJuEAS5LMjDoRzoWyvVXywfw6",
  "key34": "377xWpWjuFKP54Ma1YT9FawotFUosd5yS9XzfxcAbbAZi9RRXqREu2JjDYdAa5kuGHmFbPz6kx5w9pikiZ5f8dP7",
  "key35": "3DhZ5V2ZCVsgtpvJG6zC3N8miQyKmsSBYvahzk7yyFJuRiE1dUBvx2VZ9tXnMfX9WfRWZAYav5w5xCEaLLdfnGXd",
  "key36": "4h78A3SXHseRVsQt3m9ThUqp6fUXdtvuk8gXuxJ8GkLDC4KotnPKa4WatC4LDUBiv7HX79ofEvQxCcvcnjBrfKp3",
  "key37": "5iTdbdTnm1wKjAqY7npcp2oVHQAeKLugofwDnviJ93LP1JnaiDfCX1riCtaHT4azAhrCVWgFYuJmh22gMk2Rspyo",
  "key38": "2n17B53cmfKpJ4PAmKzt9e4fYXfPuag4yx7dH5v1oba2c8CDKQdFL1uwF1dMSwhuFfhFmee6Xav5Jx4wnKB5Zorq",
  "key39": "34WxULQbiz1UXLQXa4o7xEMmd8PQFotNrXdF6nt5oegNgMqcnpdNgn9nLdoWLBkqSQEUxwvyGkYqN15jSh8X89dZ",
  "key40": "42uZwE2KeXZnQuTQK7itzoUo3DB9N2Ln7GwP775UDKsEVXJqvDt8TXXd15F3aMiru642xaC3hSGp1wjzM9Spwjgj",
  "key41": "3eCeAiBWNMP5yRxnvh9C82Xf5hzw7NRnJr6aGDKpTCCruE46bisf5u8fDnGHoWRVUDwwkbrjWtdXtmLAJU3jCTS3",
  "key42": "5wK1i8p9UyKrKc2hTcYHRgXrkKz1TTzYQKWmxES43b5Lcxz9RYnzfc4mQcxKZT2GALQ4rYHdaG2cPwWvw7wpu71s",
  "key43": "5YB3Vv4XZWc69FEzWPyjNZvXbVpjt5sb8SVaAbQBw4sh9ACsa7cReYUN6nD8rsoUdwR1gvpeab3BNVPWavdgm5h3",
  "key44": "3FcSbLSgfwGCBizVD3gzbS5TQmZCUYzXU2iw3Rya4NqzaHCzoeFJYLiGAEuCU99vWEYKNhmqRqMmpj6Egc8mntd4",
  "key45": "5sqjkPrT1BAS1cKGWsDxyLw4YWLzpwgyMCxekstGE1ZTNjNeEnpGmC2qtiyEEfhaAuTbrD1rnLCZqex7MLRQSUUf",
  "key46": "5hVi3VGj6aYoP4fmUFyZZAGgYBhCHZEgyhuGUaAodJSytGr34hmZQxgC7FovHjVN6BL5pRGbxudqneYAyB8btZED",
  "key47": "128ycRBLjz3UDAP45Dyax5k6KpDRHMpHCnzUhpAQmurpibMyyw1fuVoTXuMPQSYYRCFYUWx9zssprgaSZkqWvKn7",
  "key48": "56xceqty93SNTj5paw7TkiaPBYPcGggJCZ24V3GkTMgqyim2BDcR77GDdEcByMMgRSEVm1JEV99NujjpmWjQfTN6"
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
