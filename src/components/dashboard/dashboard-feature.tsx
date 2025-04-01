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
    "4GA384V5HpUkXCuxkb6F9VynFTTqd2aPYVmNqjBnS7ijGRiCuD5ZhcrKfMDJ5tgtfLVFj5KEVjTynUogopMZ9kip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzTLPNtsUdMRcAXiqLafnbxEsPnfYkCQBpDzNhQx6oHDWY4Ac53U52qJSxAkBAm4LpmDgWVr8q4sickUE6XqJCt",
  "key1": "E1as4NLidPEysp1dBNWksAF3QveuMv7k89tEbWtG3VJ57JRHiCNG4x127akK8KMPbj3z9N4L86uSFS9YVE1k4b6",
  "key2": "4TuJzHvBQarsHXgCcWMi3BjbeqJs7WR492G2mQgroRXebTxvkquhRXPrC8LEpdbc3kF5VSubzQBTLbmBYSPNUNoW",
  "key3": "5YaJRgiJxAbXwpLAf1Uj6rRnkW4VJTw3j5u1xqtyChRE4ZxCo7r4pPL5n6QCzb4FMgizTqNUGdBF4D91NrSQD8Uh",
  "key4": "2rqHsnyh4b5LzhkDyxQ3a6YMDE2Su5xGnswAfgKxYMNRPqoH3F1EsX1Mf7ditLLQDoz6AvjSZ5fBawkfdg46r5sm",
  "key5": "DjWCjHCuAaaWyiLzQrNA8bYJ2qmA4XKDf2nJvbocTkqTgDjKU9dVuyPqC7kvGXMicM8JuyTNBEHVytacFSzsi9Y",
  "key6": "3XBPcC48mcdpDyAGgECe9Mu6ZoYrKuv3rtXXKkHkdxLdJFMQduzNBeyUHtxuboLS9EiQ2Bjq8ndhV333qbiZC2EP",
  "key7": "3eyhXLKsKMP43YvcQtfFSrZtDvKaiq23BiqM3s3m78xjtyJdHPsTpN9WbvccvDvQREHhjPTTeX16C2nBbBaRn1C9",
  "key8": "3fiCz9Lxw4v6b21Dh5XpDMPCB6ydMu2on1CcCa7C4EEp2LyWzi1Jpjt6CFBwGf1k4Bp7gzCj38iSFB1L1SvXXERp",
  "key9": "5pAz9bvT8AJVpf9FdVincxGrYwxPQeMgeefx8jzJWH8YyAeVJTLMuwd99YtkrJxSUDAvc3Yz9xVt5dGgKXq3gr84",
  "key10": "55BnAie7XaNUX1mordwKvVfg7izUexKEu2acT28Ke4gVtoDUhvwdL5uH7Hn5B3AoHGpsHXTPuDsLNa3R3t5P8Ues",
  "key11": "2LVPKV6EKhdCJH9JZR1uz8jzM2EX4dNPefyAWEXRuX8Rx9SpYAjo3nXFMsHdf6AMnQC89TcB8LC9UvAMqmMEZbZS",
  "key12": "218dbqVojCUb8V4bwUUAZweaJWSH2JMyT4opkrTEBWKg9sN7iGDhAuTm11AMEvf1a237SeSR8jfKVwqwZ9epjwyV",
  "key13": "2YBQzfnRVyxmejj4kr4gMpsbTwhkmgJXXLXxkMTruW9xjZFfjukVXPkVM32me9VypxmBAAuUi6WR9NdyxtVQrizn",
  "key14": "4JmaNXG9Wytr33Kjb9nZRxPpiQeSnUAvGXLEghJnPR4sbgtTytnja6RyTC7tddjWnPboEkVRsmFSEid4d7AM4Mmt",
  "key15": "48yEfFDe6GS4pp5W11FrE8NmQ8oBarxtvwnDLiyE84SQvBi4UBk8jgfKqUy7bKKfymYjiDNbpA93hBGuHqmL4mcK",
  "key16": "2w9S6SeB6zVaau4bzrwHeA3YwhmMHZYC1CHnAqXbNg3CP95Tm1URzLaJbGZd4w2htFW86dBMVt3ZZfeeqZfEjeGL",
  "key17": "ZVkRCgh7iiqDfQR1QuukwrnTX7TkUh1844chuuT1p6UBrNtui24MZQK4GDHNWJH5TZSjpfzS4R7Zx2FExjv83mP",
  "key18": "2mSLrhvhr61Hf8o8vsikekdDnf2xfMtfonm7VFjiQsEkdCjtX7GV8dPkQUqEA7h1NtF5e78danbjMxFCdYvWFkxN",
  "key19": "4hnpy1gdawXL6VSVineKSfaqHkn3jj33hF8PczVKfZwigjfG1Ubf95F72bbdgS5MXQWkvabHmxK7epW2wyViaxPu",
  "key20": "2jYHNBbBYwdNdo7qHVxD77U92iqynNJz4Ln6QAUi7Sdcjk2pnkaTUnskrSsjbqRVLW1iaXboYHrQoKZeitKhvGsq",
  "key21": "3DHsn6aWM2Szqm1YkcpHbWUc77VTBVMTthF9mjSFoQhwXs2uzCqA6hkxGMKEsGtDKMN8zNVsDZpDXHWceMQqhkvv",
  "key22": "2qMGAjpRyrCsaipHPu6d8AAQpcKcbA4bFeohVaSpfeiGuJAhvWFhMSMD2YceeXyGqu36B7DietGhgW6C1rFVLuX",
  "key23": "jreYF4VsQfFiVsiK5hvguii9xzQVq5T1jnBt2pYnjfvCiJbTMqv1SEGtoiJDLbt7oAqZ3fTDa2yec2qrYefy2Ka",
  "key24": "2tVQSktRVAQooQAjkLaiHYAB9tdwzHW4XjUfuHbUgVG7pMQTmAdsh5g56tYEzN3yikSnoaZM7QJtAjTLvHC4Zgts",
  "key25": "EVvQeEDoVZpcW1qwh4mKiHbpCNwt4GJPFJVdbLLX2pkmjdm7wbdmKisFSYzxbafxhqmG2N9MdHijBWb95fDKa42",
  "key26": "4TAu3VYz4fg5cJX3noMQMGq1nTqcukojnLYWENPmz3iYGHphhv56Kf8S1q3JeY76DkkrcYx9tTVBgJdWdxKkuCPh",
  "key27": "4VPEiJ181vXMthyppPFJbth367HVf36Rk8kiwfHYeKRZfE4Na4hRB9usJRmxC3h8ytt6b4XhnnRCvo2d2GbX3zea",
  "key28": "RncyLoNPcU3P9mKKy7dEmmuYDLFBWhJi5g8w8caZP9fUD7b9M8c5eZUbR32oH6abByKSRFFFSMULTNHYu8cxmFd",
  "key29": "3yXLuujMT7EoPhRUCDBmuUL8JBMmipXjQcfvGhEqVJZGStCtUYeTmy2HRrwg9siN7ht9sKB9SkJWtoTfAYuDT2Cs",
  "key30": "2aGBKxbo5zbUb61UjumxdY6jGqG7SrvzrckbSC4wqQerfbwnd56uy44RM6BSzEfCAgqYxDKNsDkveDhsazB7zbVT",
  "key31": "274AAysdHBtWnXBTUP6T3nDKDVgRDVgRL8SULuB66dj9A38esXJsdRmpiZYfArXcNMTszhyrHJUyN4Wkdan4J1BD",
  "key32": "3EUdaQ8KhSEEsaWwXvdbuhryPy4b6Z4H5oum28o6u4YJiBu4gjZEXFFnVeJZt7zDuFYjmm8mvXw5X3xHRj4VXa4E",
  "key33": "3mXnAthrcHS7PkMxhGkmHtrGmzsa6oMoNu4ajL3MbAhe2c7RUuUbjaBJ75z7jPA6XXcBeHqkoKDGSw95KBQjn1ka",
  "key34": "kukoqZmzPu47FWUS6Xx1sA3aFEHoMwYZvQPX7CzuzYD43GRwWsUhHyZmf9xqyt6fizhbSRRVhXXSgTP1GoaznSV",
  "key35": "2Q2ZHgTuYEZKuLofHLLhaW3RNukCPRVJ4wnVQYY2pb84BLvkTk57YE2QdX45jg4i7Bn3kn3CY2ECP57AZfF4ZA5S",
  "key36": "3wtDKHLQt8zwscGuWLsUCK2wprKi9nw1ehcDR8cY1C6mSwQzHqrMwBFYm13ksfr1DrqA2ewKhbUFstHiMwwfDhJN",
  "key37": "9jm9SL3c1791f81LFVzW7TzknJM1LFMVmc51wtiBf2dsmbDTQ8CPg4UZQaqEgCfdHS73q8PLGR8fL2GTNTpGn5o",
  "key38": "5znZjAF4JFSKDdCYQD2DJxVqFbzE26geD6xCHDDiAU3vPwp2Pp2SUVNDzpa9vzGm5SrqVqWpGaY1vUzYJdsXxfsU",
  "key39": "3mrkFoGyLsRfkGJvyazregmb8bmtP2C2k68z4EoRZUzzNo7SxejhHYDBzXauP3646xbjgT6UTZhqeCnqUT25rZfZ",
  "key40": "5xAyoVy4DPiScbcDL2ai7PdwRe34UJs38RAvbcNZ9Q9f7j8g1zgDhSjU7ATaGBaAVA3t4Zfq6yLiysYKBkDr6JnM",
  "key41": "42KMfenrz5br2yBxgS8RpfLwoU1DoS6gTpS7k5b521kcXLx8yyRUxV3ZVCGpk46Pb1a6gxQVxmuTUKLwoweYX2SU",
  "key42": "35jaiubUXDd4gHTuU1qm2cmNqZsWzNioujG93rknaWpsWcDWgFghmvrpsjzkSubCKgtqNoLFLkj3uBfq5KAWLVWc",
  "key43": "2LjgdFv6ByNrGaDhUHS2RDcFt5zS3fydPswQJhn7eb39KDYjrT8nsBnseUMPeo1SWMwaAMkadcxgMcSdfQg9d242",
  "key44": "Un2oxhLJeNRTvGF1q8q3L8uDcXdaBbWcChJ2UQSM1jcaJecc2v2GrAGPq7YgTY2QAD5xj7ZdB4EqvUPCqSvUcQR",
  "key45": "34Lg3YaeouDrDQHY2sBasBg4AjCfhAZ5mdUcDDAsz7ghUPVZK8HNirsbSiRyNfChKa18YWgaZWkBtNhxcmB7JAuY",
  "key46": "56AWsNq8MGv2pntJYX2VhFiWEMVuZWZhF5M4myohbo57A545jfUgsff5B69tTUj35nqPQD6aUAuXHtvo24Un31YQ"
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
