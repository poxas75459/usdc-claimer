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
    "2mevZLuML6EUvzKKtkxCBrine81MK4W9vRugABL6tEPScS7LN85fHbYDNRRsdx9BNcNXcykBRwqBPn3VasMuZ7mV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHFzYWPbMLsX37PZBSCyNvewr6axxZC8AeeWoxuqJ6Qq7F2hcakzHDHY44sEnXzQHSHvZaPrXWtnJwuFVave3cZ",
  "key1": "5jDNqjGxogjZ9ARPNbnfNVmboKHtHkAT1G1U7F4kEv4EzAHFbAemt7Y7LHuUPDJhL5dAxq68LmvpZM43Jf53imgF",
  "key2": "ET3hFAHkrE6oGiaCjJSwjktnBkL7mhgCTsGUBWfL1WaD71DUCficnqS216JcaVRhvfCekhCRrQG8wjb3x8XuACZ",
  "key3": "4G5fNXpzNyPm52CZo62vsLEhrBxF9p5BmEqNAf4mhwBpMMYzJwpGSL4QcTWkRD8cy8gQ26Xu24Je6hi6to4UUi5D",
  "key4": "3Kx7geXF7QDmpMK1aWQof7zXXZAfJckDaSpuk4tP18CLJTA22hJnAQpLUsojP8o8nhgVS9dEqod2jQ8ZfkonwA5C",
  "key5": "2CAjESHvEMBBcBcD67zAeS5zYqhwUPT1WP2u99XB5dmhmFCjpdds6Jn6UhHcHjikbU8YhUym3sm72CC8CcU4okqC",
  "key6": "5DvEzYBB2frdCqHbb6fx92qFrkmMvN92a7W3gXdYPVC8oRdKzfrdyYx7LVQ9tP2KHirQ81HKG7oydos371EiAPVR",
  "key7": "3PgnyUSCceEEEFEhkj9ibWMwDNKaS9ZsvnNLZRvXPBmxA3kYSYGxt6B5R34XVGm7nT56o94uJaN48zyhBySMjAuk",
  "key8": "23qzh3Lfn1ugYShhCfcffu9ULvWU22kNwnMbsTfmLZzRMz2UT8wC9mK5gHAjVcVddUWbG1N8HPgcCpYhSTBTpNbG",
  "key9": "5VS8JeoYFC5SWjoDKeikBGpY1R2CVWXRYL3MNUyVGUe1gKv6V9R1KrmYPQg8KPdHvQQsRaPkTdtz9RxeUzNq9ctp",
  "key10": "66D5xq2kxw6jJxS1NCstV9gmvzPfdEmw4V9gAixa4wzNKgQCdehAf2D3m2nZevFP2qo7imcetuNSrJuRxU5mkmrb",
  "key11": "5gxmNJjr31Tb6zZXkLhRE1HcK7fvVr3RgBWBSVi16csmyt9t7ZyBHkXv1NdjHp1SBmrcp6ybCGipkpCbErkMGUdc",
  "key12": "531NMz8Ec8MpFQPSPm9TVpL5n45WQvK7Xq4TTTzmgMpC19x5DY5FJ1APsW7pNkU3mkU3NcG3kWFFXvXVgXJ8VW9r",
  "key13": "5er2Thn6FsFWbVYrFhqFo6LXCRM5u3mNEWydJnrvCp8KaAxtiP7RJ9mANScJp5AzPrfo3EoQphHQiHe3v4wbuTiW",
  "key14": "54hprEM6MEWDHJiTEiTqTKJg5anycCk3kms6zV1grqgcWkYe4GY9q82X9PgYsEQFwkacwNw23tPpHuUJf48UfK3W",
  "key15": "tEED7f9hvuozQoNmr8tugrN3LUYQynvPr3S2MYkKy15dMzGqBiZAjCeqxMZgZN7Gis4PeSBigoMDpWUpnhqFhGe",
  "key16": "2djoiqtZqWwuHtyLEimuPX5PQ5rEJ2TVvyhVsFdB5gSiVnbt3nRTsL6BgwKFtASty7z1ZzveW7GyHZnttQAQgYki",
  "key17": "2txpvCPCroDttaFVo2LkZGGhuVCHf3DEsAXVQrwQ4jxTnXVBRe9mNywyo1zGwKWVbSDHE8Dpy7FzENspJRaHPetJ",
  "key18": "55fmvL79agzPPdAiH9sb4UBFhRMviVUKCUCiVJtn3t1GuVG4vHAfwgE94ZZbqdw8Wz2Gu6doNDmt7HBvZhwR5JKt",
  "key19": "2taJSrPcdJenUMJpiWxsbTayzTXyiC35SD3bSnshiWYGENFskacNnFndujiuzZbzd7YbUMKHs34uZXc9DLWeZjHU",
  "key20": "64mhXahxxU4CdAfUzpiZr6xABHocXdRBAjdinmkjVJ1YV6suj7sGbomc1xEqSSkhamdxgHDEW8ctykgKWXGPCdTk",
  "key21": "31F8NQJgbjZ4UKdrZ69KY2GmHa1L5GjeJWpZJrNvyw35SdVPmz56DMKbooBrs8ifh1R13grkF81H9npnai4WunJk",
  "key22": "4K1QScYQF5fyfyVoHZyBw9to3hpyeNnaVpTZPbSyJGCXKnUztmRkaBrXgXjyF6caZFtNbpv58eFisenotqR4JKAm",
  "key23": "5W3HpJwYEGVU1AEbVwEhaNz6TEtZivKekBrHV3QngGAVcwCApM43npQ8t8YroMXA4VPE3S7BRR2mXB9nkpePR7e8",
  "key24": "ixbAZfNX1yKTYJn4wCd7MD1xUrNs3xtmnXjTcfAGTQs3tP4GZwvjJoThcAauk2By3mAfJoCZwP4ZvHikrEd2XS7",
  "key25": "35zEnfqjtDF3QokEHRvP1hysFP4Jj2mFo2MVYbzgwvwfSKtZtxXa89E1nyE7spBF2iVxRwh6DEhLfVGiukDssLd4",
  "key26": "63mYFmeTtfLuTBcynWAc3Kt8bKCUivWPga4FiifwieYCUjjhMJZGQCqNEU2xV3UVv5WPtVdAC3KE9vSzs9xxs1Gj",
  "key27": "48XRTSC8N6zBPWiKnrQsD4YgboSnDaJwS7ndSqYDuXmt2FVuxpWPmtT9zHnbbZxzS4apBVW5pfKU6m9t8nrFqm9r",
  "key28": "3strZpEfEkbzj3vid5grmzDxGomeFF6EjAgjMYh1wBGtLoLQvNW2YzFJUP3QRyYSGDRSpwq3nGzPQt1HnGBs46VA",
  "key29": "3MCLTzpYhqKSbVBPKJtphKLTa2e4xH4jGVqHizhKxL6Rz3ZMUhJ4zHECAc68KKzE2FTMSmd2HGWM97oEKcP81ZDz",
  "key30": "35LtmeNzGT5wmYwUBcotrHnVY7VxweUEQq2apB6bWDTueN2a6q3sgiFZKcUbP8sa4hjPCQETsE5vxaxWdszPM5nZ",
  "key31": "3YryFajWtj1fBVLEciDdCvK5jMk14jAsAFsLhE5DkWsNLFCBhTBQa69zgEN1pfwgLeKskNJ8CXJrkeXR1eS3LTiB",
  "key32": "63CMUwNZ4PJMEG3pTQAeAjTo9YceDoVfXVeb3gkLVi6rhrCoy3NdHCtgVrk9de9dF5KMXA3aHG79r6xhnCevfNRu",
  "key33": "2hnWWLxhMYmV7pG6uUykoaVvX3eC57TgLzhm28D3WcF2eVUU1Fk65p1vsV3ak62bSgc7hSrYs1J6dbkt5D9XG6jh",
  "key34": "58zs3pwQXNdZzSWRvgZYo1xDo75Ho2Z9fxNasEnmDkZ1bpsB5Q8L3mNnwqsnMsgMJseEF7u1aaMm6kJ9hky7U2JZ",
  "key35": "62Y7pd8ziVxCQdaDsrCTUCBdNXiULETEHvaTtZCTd1BBtANgwX39o5kBQPgkLuKoXd9c2Um4ZAF3FhWyJEJMAZeD",
  "key36": "3LPske7g5SPWS228ETTJ3aRJwJ7XPDV6exs4EhjMtgbKCbmSG1ogpsMsoQBPpzmx99L6KoopQ5h6reqmdEXFSwYu",
  "key37": "2xKnzmtYcHzGzLf7J5NBjSbVupsxgcK5dXK4tN3syjX6bLMSce6JfVdAFsEfzPYVWaBGsHAGmwYNz4CJLfU4KkFz",
  "key38": "55LvVosuirV7s8NvNiVbKnA4teQipkEeiMgAuFX1diTPNmV2hcVQzXLW5Bt6tbyaJSBQ1zFxNdve5QJWkiZYEnyf",
  "key39": "2YJwNv7DgWdeutnPDZtsbsXBaj8PihgQKCUJoo7NMu6WzNSkA4LiTAJiTosxLq65wrfEbRrmAyoVL4Sy9w69oMH6",
  "key40": "2W8xmGuDL2yKVjvfn4r63VsESDyYYet2r9v6ckjaWjDRssC8bbxJprRLbWnLFCt3CREz8V7ajmGZDDthfZ4kMW4R",
  "key41": "W5nVfTMWGXiFhwaeLDuVNCVJepiz2qgzkXNuTk9mMjidipUxZJAia3Ag4VTD3gvF9RtwG8njNSCL1DBV1kjEpkV",
  "key42": "4ey8ZqKM14pMeZyCCdzjBneX3knMD7MorSzURnYsCDuMNzvX5eMo93eFWpSqVL3QgGcgkGtZBFoHXRDya21rkXjU"
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
