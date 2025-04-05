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
    "31ZQw6h5cCwRyo38EoekwwebN3XEtvxkjbgn38v2VX27n99VX5fxwC1LMpAjrvo16TBHVduPf4whKJdji7j5mCNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6LaebsWVF18yMy8zQXYFx7vizTytmwBiQvRdazkDUm7SUcNZdddVaDSPh9HVTEtzqpF6kF9MbcPj5K94btJDAz",
  "key1": "3b2HmcgyiBGZa8wFwNJAxdXwQHkw5nZ5oVWZ3qZ5bugzanNgwq8TWmqf7Z691ybCTzTSFDjgP2rBWonXfm5E5gqt",
  "key2": "4iHgzihtVRrsZgfsAgbmKDLysWXD4yRqbCKSiE3eoWiGjdd6JWiqAeTCYumEUWN6cfYWsiwFq3rreCstzaZcMMDB",
  "key3": "1264Rm2MvTrJ3Y8fUJxQqosQS7hYZK29hSp5K9K7ZJwo8kvfg1eE3A7DewmwGwMbJsGD8yFuxFbRKp85iuLaWDHR",
  "key4": "4Mz5WZLperW1X1rJXqfTFGN1aLek1sELhFCT2GBSomQsMPGaSVzvcszA6uEkjFufb7Jd8PoG4fYatjikG5CJrNzY",
  "key5": "2dymT6PS2FfcyzvsQLXK4XVAGoQ8Frs6DUqcCR16vp73JQJS2NStAYm9RGRYnkba7Jc85VRhvrSmXmJ21UrFMatr",
  "key6": "4R6jtRt9p1vcQJLhaDXeyiXQPH6svAMX4GLm2uyuMGpeSbaKjh8hBiGjXb24tUUWX4UqF5AhH39KWV5QE9EMMrG4",
  "key7": "5erw5Cknhzcv5erfFfDHpJb6f5THSjdfWJjVEBtq3iyFMs97ckHY7eNHZZJFpHaCEbPchbXRMpEenbdECxau3CN1",
  "key8": "4fdJ71YJz4mjGsRKw42EmNhkSnYfLMUUDNLYgaAK2DABnpVvzns2Pa74RwemN7j6jTBsZHMcvXmsGP6V3fyV24yt",
  "key9": "4nKTwRn3pPpdWzouDgtqXBvPKzrhkq2zz5DX33uBhfdVh5EM8ndEkRtwD3VibAZxCH7NYjnMuFfGdQsg83eMtT85",
  "key10": "4jKhBPGq9Cs9mDSNwFLykv23KPAv5MyLgLZUmsX5bZhDu6y4mTFgrH4GuJq4hGPoPqU55AchRudyi15ryNMmBjNy",
  "key11": "532NFtCQQXquTyP1ziHuJaLoZkGUYJgtHzkM5Hsp6YPz1Tzzo78YUqrFqDRSKPuwTuFkbtbkWUsM8ASHMKiw3ERL",
  "key12": "2dSd2Km9VKGBGLiPWiewyCUGpov4z3qTMxaYuiXY67GUzHh4r2Sv4ZCWSUazQaLQEXwk6gaZpnZuUyV59pACXVcu",
  "key13": "2TG9K33sJnmEgBCmjSZLfjy65tgXeMF9QCQyUjnpk8Qevoqj9Yaqv8kYSGS1ZeNpuUJZqQncHBiSv4NkoZ7QZEZ8",
  "key14": "4mRhjcLpfZuPXbD38B5HnqUUxTKkWwfq7Z1Yc7XNYBGoY8LQjgu1Z4i1kS96VfqmjmvsvrywjYugu7JKirJLX22M",
  "key15": "YTJUi238NH7z1eMTEXN5i9Jnu5m2qU1NmYPNKi84eNRGiKXrrpgCfkxGXoEXhYiP3qe6KLGXNm6iWkE2TmjJKSr",
  "key16": "64Ef2x56VpNcxi5cCGzJL41BTkZhdWQJqKuCcdgAAm7noesbAfnSRxRxqAKjYPPxYdzZGysAe8VSnc9pJzBqChcu",
  "key17": "NFyJBJQ6woZtYq2vEHcBNQApZwKWaBrepp4CTX2skL7QPz1o89Fuxj8rJYaHWoPuWQhNMbP24z7teTxfXAhQ8Q9",
  "key18": "443PkB1aB5kYxVGvqeftAzucWh5e54giC8ZnWQF1YxaaTeU9qHKkvAcXdwdvntE5DZCHCFWE5hdsmgtePm1UuJN9",
  "key19": "3SSY8ujmMJFGUPNThAL6h2N5hD47gsfoGvugqoujVgeV5nxg7vtQHfqHsuwAwS9VLA31kgNs5aqJk4Kc8udZeu8N",
  "key20": "46sHCteGkHsi6QUpxEaVivXRRvi8WCV26uPFFzY4MkKWNF22UWRqt1MtUF4Kgd83v47yHD3hQjeJTtkYiAmAb9ft",
  "key21": "3fm6FCGkXiM2Neeb3ZciqdgY8S5gtm5YojgaFqBgSfCYU6i2T2A3NmQpuks2Mzytiv2bK3iiMBF4fKFTQ1W8oq9V",
  "key22": "3jxKYvbLmAfNo7H6oUGS2hENPWVkJ2afsr7qpGVQEfCfx8stU4GZfNW4QN3JMfHEionPfYZK6hYRUhwKSFERewuW",
  "key23": "5cFXgsR5LefuUbkD9DUA1G8RjoamTrc27c4anZDzg7HkCB6LdVMwDXGDXiUqtoDC98EYSFaMTZARqP6o3Fvz8ywf",
  "key24": "4bGD5Q9YnSsoYXKiH3aRaTX7YmXArV8kmXTWafTktD88kDyWsvaRJDcFN626MTFC7NfUhXn7aDS9WG2hqDNMX8dQ",
  "key25": "4dPF2DH6C7eZLfgcH6gzMyyoq4ghDaVWFD7oxeDgzwiVFeiULfAeQD2HrPEfpWwYi1zUpX5V9gdNLth3VssH6fg",
  "key26": "5cYdj5UzJf5hamxUpt4B8HVWsUuFpFdQoq29gRJ5oXgGy8RGV7Sp26dQnwAwEQmWTg7F3jMv8ytqi1xWK9HatZPE",
  "key27": "3bN7FcJTj2vpxdj9Ah21hgpq7kZQVeaoumVN3T4T4EfCgDDoxa7e3uF8NiQVLdBayJY7GrNrC6x5itaYZ2tD8PQH",
  "key28": "j5KAuqtAgkZMhPn5Lpv42JBoC2fDMqpNtwUfbZjgQ8bsQuf99AaevvR1JfCKzmf45MKDBgbTSMB7Gpw6e7DxKM2",
  "key29": "47eWYfGfL5abkx4oUZF6pdMtCRuNvFRGD8umicnyVs29y94sE3Ukz9uEtENWMCB97Nq2ofJCPXtykhF9g5BsYVEh",
  "key30": "2AmN4G4RKhqCxkigwahwUtuWyKtEuCiyzFCfD53UgejLpAeDe4TjzVi2UmsPKGBqWWq4ujDKkb2nu3aHLaEPL5SF",
  "key31": "2od5pq3Li7vj7u3L8yeoarpyrYpYVBhLJy9vVaVFww5AYtWm7rQnUEeZHzJx4pv2NgXUFeuJaMPTJ2k5ok1betPJ",
  "key32": "5owLokb1wGPvKFDWgX4eHo6gVqHnGQRDpjyBTTGnG2Bx2XCKdiXuxWgU6PDiiydbC4pUHzrHuYTAVvactu5zWMHa",
  "key33": "3YKKzYbuMJnugoYtCvkw6zdm5v6JLYd7P7W3LeJQFfAUpPnHpxvbPsp66Kihs8EX8Bf7nkU7kBFDG8mZgFkphuvK",
  "key34": "3tkvoJc7Yo8yXugXMxcpSVKcTmkdi7iiaiF6iTre8HaAUs4s6GR3WQsfGkRGjeAnbLgfqjPDHwVYGvtgCw1RH6mV",
  "key35": "wL5HWxtpG9ssb4j8ouyz79dW5nkKWTTKgDJnngv6Mp7cjJyTd4BP2JmwaWNfF3Rwe62J2jCsqZAmQVibCf54jsB",
  "key36": "SfVs2yiNvjAAHEEFk6vrQ2jg9sRG4KQEWZz5FEtQWPWMojHwaYUQ3zXD341X2f2MPhKK3VwGx8wKoq7fAsBGmhD",
  "key37": "2RQLGF5DcvjipDGSEKs2V4HJRwvqneUTeC7bob8jcKhsXirpecq1KVy1cwBw2SVXoXKcxLsLiCisekJvs2pocejy",
  "key38": "4Ta1j3w9rwsJ9oXXDQ9LHwBX2PAgKiTQTuHxQiQAwbGqv6LrhfHvyQNjMZ6Yc4rtQaLeuJDDectdWayJ6HLEKZZL",
  "key39": "36SpmzvpqLR115JXnZUCt89pAZpwfGTFAtdzRaMzHR85nchagaGBTGH3H12viQawWCa7gD2S2tKhwBi728UUXF3R",
  "key40": "1nxg5rshpzPfirLBSEzTnLburdSTJmtqehKz8dDsfK64a8axd6FqzE3aBJa8go53tz6qqKzd157Ye2kzfosJ4ST",
  "key41": "2C8Zk6Z1vkeRegpqRGVCYBRLJDkdD3bCEUjE59eDvQ6uh3fY7V6LEnkC4YV7jJzh6hfFBe9fDjTpWDkWLrZziYZJ",
  "key42": "5CApvnPqRThqEKeFaEX7hRcb7RXuDGzQyiaYB9oBbvMbTVvyeu6fRtEU53Ke5NXTDxYqZWKzFnt4yxuQmcbWBSna",
  "key43": "46q7qFYHoiyVDCG3o4YqAD7nm2CDEzJNsaokkqxnhviZksE6FFAxCaGqaM7D6JvMC64iHcvDQ5wL913g4sH1v8rz",
  "key44": "4nS4NNYzGBJF8SU1A7rFmjgV7L1AarAAScku7hRjcwGiFL8FbDQYHh7G5GWf7vNM8VndjJ96qfUPauwPAz9xh6Bf",
  "key45": "4gG2z5EUssfNvNoqi4QmNZRr22cMxmBK3iRWCqmXE9uuCNW86fX6h4pHWaxUQFk5RyAWXT6uVLgdFZDYbPqkUPCE",
  "key46": "2R4aoMK6ucorLAU3ANVss2f8HnnKqHoBupumgHjeeMhWcibPf4zUcgfwfGpdLmsKbjid1CZyEwN5BkrPYqKHj8Zm",
  "key47": "558htsodHBjKA6hVWz6nqVLLrtopEDQkSjbngQ8CsSB9vDsSwGs6Pb8A3Y5gjT7NVtUDz1TVRkMwrnKRGz7xPHz8",
  "key48": "26U73BZ7W5GovtrzXkmtmfaP4dgATHRmCU9U933ULoxVGQN6ppC75pMXVfzg4tYuoRDeAVvJRxkS7mC657dnokvp",
  "key49": "39hy5hgCj3p8nrfxEwHr4ADAzWqFfbBWVqt8AMPP12W6ouxuX7VVFogipVQ8Wn1ZDuGNGhY4m168nNWFWjL6B9PG"
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
