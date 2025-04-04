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
    "NFCMZwsetr4SxJvESXwkAxpPb4drGb11qJtcZHHZ3ULsZeMzwoTVmuae6CDaW5QGEx3mSQ9GjMSWFJKbf3af5KJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDcdJACnEvPEUKx5Y3gwYwRyXhafiWnfKoqYEDRUqX4swFXLdryRo83TJk1C3oyWnJEBFbmD3eSq2cZg6ygX1qn",
  "key1": "3qxdwhsR7PgReQR3gZ4m1TVJYhW6MYfUdxhjBBzNWZwGr194xEooc1jxSmUpRibT9Q2iA2vH6R1gkBmaGGPH3mVW",
  "key2": "mq6fzLbr1Hrb2xjge2uFSrVGv2Af8mQXGhEjhgHx6MbYxJ7gK8Exq2isCpWEmeQykRwo5odTBZXnytjVbieG4fG",
  "key3": "2c196Nhb9ZLBYfSRuVcEcp1mPqsPCzpX5PGUze2DLR3Eua7rUXqD7oJBgoHEk2aAU3tMzs9nskNU3CVvPdD8cd3H",
  "key4": "4PDVvu3YQNmBUvgYydmrAbzUsEbTqEuCEUJMLYmrwLAtZT7jtZ69qBqbrEggYTn5vpvEeBZaasVb9vAVgzR5pu6Z",
  "key5": "3EsisjZ3uEwVmCwPYKeuAQ8T2q3wV1PhUm5ZVDBQYkasfsRgnmQFv3rKuxekEJwYMB1McwwTSfAJhFNWpDFDaHuk",
  "key6": "QrgVsznzi1F5XNfexHw82bFr6CyT9PssJ8xKFXtinte3yCvEg3jdCnHyLJa4hM4sTu4v3A3z8Ut8cp7GuHzSaxy",
  "key7": "pMA4FN5HNcxPzUaAVqU2ozgkuJmQEradvDNyUVcaodoDwndLzbKEUkRR9ucp8rAYoQwsrPTCi3aT2WPrJksNbFt",
  "key8": "3jsgF9Ycfeu8CW8E1Afh7WuA66HaNcnuetdSmJKkMKtR2Sb13eMZtJxJ7PrKhtcCwhjw7xowuH64yXagjyKjtRsJ",
  "key9": "23MFnkvmhsU3U1CXoJdUe5aMG48CwqcH4fCmfyCo2Cefch2bHt2ZQsqq3J8P8FQhtYqNmQ1ZhbNE5PRBjA53MobU",
  "key10": "5DVuzGdDsZXRe8D9WSsM4CihqymgecjCbfvciEXSJ2t1q9n26ZW2vqwqm1xJyTwmByBDsf76izYnXFTk8cYiuqw2",
  "key11": "5EdHdyr2SfpfoncFXgTbfhc8DLHErYACD64E6vB2pBkCp9vKx5aHusMaiBL9d5TC17AgNfQB72cwYvzfjmAbseAP",
  "key12": "ckoM55hv6Lyzn9Hc2f8cNUDYJM9AYRESbYrXxjV7EtjAeRQSfhbyJgz8b2s2ntNNesp4CzqYXup38NQAArJJAuZ",
  "key13": "RmYzuuBWnSgUjSMy96Y2vVFdQc9SDUQSpsDk9xfhJCp53Skn8fSGWs7q6huYhxm9BsJkRL9NKbZ4LurjCEViBHa",
  "key14": "4eVEWQB84JyPBhK995XjeNoB6q2G48LK8P7kWcjppLRm46xKqPyzNv8LfKXL9EoZHrcywhwMgydHm8LwHBe11TtP",
  "key15": "3STuqu6dfCBoQQFUQSNrkRiucrTMptg6g6PZHxDnvULP6ubjXRJfSe2nNtMbNM3y9FiwkYkcJaCLbAzuBvcYUXRw",
  "key16": "rdERmeWuxLA76JCu4w86fqiSFY7cXBMPNSuUaFDQFbxUL56t7USGb4VidowBNtfnaA1uZiYY6zvB27G3XS9cnhM",
  "key17": "33w6d4wFX6Cxbq9KBjUvVHLxfCHUYY5xM2hLeBMoyxLC1oN76ysvsiXXmX4BND9W55EX6VyM5Hx3a1THi8LnL8SL",
  "key18": "2LyVj1oUfSywLFvtSk4aWi1K7cYSjRt77U5mhBrfwVQkPikUgSj6QMPZJqHY7vvVcJzyTCfGpczpXrfSCt3r4Sjw",
  "key19": "ZTQPE1WZefYkDrMSHRrhQPaEA7QoKwaehY8sTgJHfDTfPzePvPhX5nvVL4kWeymLNfijPvdAKDYT71WQ88knaxL",
  "key20": "dTLroSxHZroeN44z1Dq56axMAToatGair5qirLAm9aAe2kwFd1DgfNrWesbVNjbDCvNy88FbzMHeumiosW2NBP9",
  "key21": "3QuSN15NgJnfrZcZP3b3LUwGRHb9ntVYno5RkFF8QB7Sg5uaCF5SPirnK9gW44gDEsVUEsMVZGje6tP3Uw6KSbzi",
  "key22": "4U8vxG6H5p6R1AenXkQ9w8UF92zitjwSFRHvXXXNyWQJfmKtUsLdgPbC6KrADYUWuhyYY6txPRFCbetwtmK6f5My",
  "key23": "2F1MaJFp8V7iwJqYnjKaM81FB3kKtZv99WNcYfhGixV1wXuFTiGSxThDkEXyFJ58EK41D97zBgPt2cwVeg1JNkzd",
  "key24": "5cSYpTEcDvDYwegT8hWn1ayrC2b6tBE2UhCBeeMLD691zqJG9SEJrpy4PrYY4XbXXcSB2yKtQJvqNAN3wqVVxgHe",
  "key25": "3siffjgy2cNoQD3cuKRtD4fPBHZt4jwr62FVenPBJ2S6XU9mp9oo2UnW34voNK29vaVcYwpbEAgjAcKBG9ENgGUm",
  "key26": "4mMKvNy4Xn7tnLL8KgxqJgtiobwptEicr8MmtsX2x3UdqegFH7sCiWwMaDbDYEG9NRpsJN4QiWADCAZG2dczhm3c",
  "key27": "2WeLtnwikMmxbm5x3RwaxPbxF37yUUcknoN3Upbf9cSnQ7P1H2M4dgjUEjYTJTQ22ttuKA12fN38AvJakscD7hbh",
  "key28": "5NUVoBihGyanuMToHQSCHEnPmD8yoafovF6ahh1MwBW4U6uG2HAJi5y8Xx3ZX2cAt88WvRvCoTwAK3ZvonRMT5pu",
  "key29": "4t96kfimUXqRGnY7d5RHp7w2EMuUKewReNH6wNGTpL4T4GNnNDnXxjr4dBCuyUGF7semr3BDGN9PVNdkTQ66ppAt",
  "key30": "2GQ9DCXDSvahMRUd3ZcEn5TRR1f9UkEVJXEFC9LHytUmrZb69h94RRML35RanyA28XEN5wuPVMVNoz7RvXC4wFi8",
  "key31": "5EdzfCAohRCUUiVXrXB2igTjTgsX163hzxv5KaXK2ye9qz4AfxGAZqXV8puvWtUL3XDwjpSVs3b7rNsf4nMn9JHA",
  "key32": "2rwPPWxRw7xRbeTYJHgAbrzAgUeva8x1zEXhNQs6X115fT57gnauY716NMXBWifmGHW4712WACaiSzWZXbWxHJWt",
  "key33": "4S8qPTFbHSKc1s42kr2Rt3RoXhvbu194HRiQeNxBeVZqaBGdiRbfoEmbUzXBkc4rd4ySGVGbKkta5NTmAW5iGrMu",
  "key34": "4nR2zGrASZRfGMXMrsJo1dzgNvz9PUxPJ7uk5v2sS1vLLEtgyNrbCSEzxTVgnRv5JmtgC8Du1pbwph3u37skzr5g",
  "key35": "22dk2HphdJxwfSkC1xiVvm7cv77RvP6NcxHJQFrZYvqVS5o3isrxh6PHkQsbfH9jGYdd4Re5venXGRYeHieEkMPr",
  "key36": "2d2CXwyCXXDmDmhJjD3HX8aWATsEw5eXuDfaEFbAiRRcBSFnL9PSGcxXhqZS24mH8R6L2KHRYMUgXhY5aYRfJ7kS",
  "key37": "qCMbb1iSh5q9u3VXpPNJ3WZKoY29caagU5Sftp1Z3RzV8X7DSdMMoFw8t4Brh328CRKpQWFbhbY16keaugWWDsZ",
  "key38": "2dpgXzu3WrizQM9u3opi1K3gwcnxcE8z1SyK7w5Y3JLKu4rw1xr3UQQdEmhBM8w45XnWWUbSM4SkJAf5hJ4W1zEY",
  "key39": "2a8HkRHJohg1WY8D9UMwM8x82TRdh791JsEnqvwUKKgEvdydTXXh9mcirEGmvQkg7Ptq1iUEEPhmqVkQhLaufiM8",
  "key40": "341gqmt6HEBf9p5yKU6TKnpjwmxeZT1uNSwsRAQLK87yUSn76Ypnm7sQa6wJDJYWBBbEQVaCXtfs22oef8rnwigm",
  "key41": "9misHfmRaquGyW9VqaeoGMWfgPDNKCZGvuL3NxAXGCRTJ3HYZ1zDRTLQNHiQuKJQxvHju9xeiVAi5MaV8SHgwZP",
  "key42": "5qX9nqMycBbv1iG9LB9BENzgdj5cWaw94ddaQma6HgPCYy6MuMJ5UMsRR3jAcYSDx36uXaNYH7VXu41iapgvDDgJ",
  "key43": "5jJ17H6dBMbfXk28rTabfv3mNS9i3knkgivyXWc69YVEp9tcfjb1h1sV8GMvPXRpbqkXPcnyrLwZi7TouR2jGgXm",
  "key44": "5cwdowR92KH311NPCYgCGoAuaFVWok9WoGETWiw2d89Qj8bVpuFoDBLpC21QrgToxS33jajTputx9ym5X3645fAr",
  "key45": "r9vweCeZUusnXoC76i5eVMoiCyfHrePbhyc9HPi8MArZevnLMauFKDwCFEPSeU8jcs4ugfHj6gxrz4HuDQFaMwd",
  "key46": "3ju1ayNzgfEc5jonpesSUhBX1fd8bQ64EaQydSs6nVFjvHSRWpCxMphtrkL5L8fVWHqmZbKnrZvfjSkfF92wjGWX",
  "key47": "s9RWxC8y9qgJ7aqMUcjPTP6Bu3mzyG35j4c1G7vtTBJ2pkBbuzDNLmCX4pT422JXcTTv35syTVWVvC76hqaRXAu",
  "key48": "5chZkKCmjUWVE1WdEVtbxs58fZX6rnYoVAMuq6scWkrhog3TbaA1vi2g93GswEvYYLpPaqgZAzVc6Gef7KrPLWCp",
  "key49": "2XspJj2pZ2aLibPMDgSfCb848k11P1UzbTgoSboP52rE4FkfdhkVkJ1GrVSZULF4d3Z23DBeE9MZ2rswMJN4ifjj"
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
