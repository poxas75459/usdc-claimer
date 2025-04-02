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
    "5hD3TcGS6377vd71kWi5zoAUjquNuZWMgywQcCLnj3Z8oeDk8pUs9NrYKv3iiBmdaniUPYihVvKE5TKUnshc5TKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tcTzSEPpabz7icveNoM839W6PRuhqHZ5LHtbN5YTGUA573HfBUQEKMZdoH2esri78gr3MgNF9XdXFparZrXRpsY",
  "key1": "5sPUCfYbKuK6AQxgwtrKnxi4i1tSWSFQiMvXPFEZ8DkzQKPDYdy4ebn2MBGadsverG8MRa4nz3gAYppB5hPfqfdw",
  "key2": "4VG5ZSzGW8PZns1H8NZXUE16j7JABFnxFCnSuXb2H223AvGnwGaMrW7bvkGBqkyepdGnN8tqNWdwhk4B6hXgvYry",
  "key3": "5bn5MZBrnZmGjxe1c7DHqsdrT6dJiKrc547RCJXdoJi5jXDHSqW4WxFjwe8JjKfqTWBVmgHioeNNqFNrMZyy2CUT",
  "key4": "34vuBxMphw9L4MuBkEKRwUf6U229ZAGMjyhzxiNpNn2YFW7uGpvpigJj7iH7SSG24qw9Q37L5L6UnbViZS3tiFVH",
  "key5": "5XXoqw8ydxM4EMAcAJNF82dXCasfGrhR6PLYWLQTTZRx4GkjoXWB5sMDajnfoTChgu9DfRKGPnuAGBGeAFsWRA4x",
  "key6": "38HpeLfEfPZu59C9RUTTgJSZVkPL7KnpQAWpt9zJTaKkLe4WTpYACtgFem1CUfQcitM57BUAeY8geqgWNA9gHoE",
  "key7": "5REBx5GVUZ2cBbPseUaW8YzPcuFMZzWzQHprjygp5zh1DadmNwu8dJiXJYaKUuCXM8T3U5gkmFhgDYJq2U4KCPX",
  "key8": "5ajc14Y1TkCKYNzoRqmtxHqFmjh4T3MBosKT1taKa8wspaypjhFuxyFXgdGAoWHPzBTTT2zsg8xKsD3hK6JR8EZp",
  "key9": "5gNtg9aNBYwFB5FLJy9cMm6Jv3VbtaJsj9WJm4XwDx4kur4ZSbEnwp9WnpJYX8pHnsiiDprjJGdjDYT8ZGY1mRFE",
  "key10": "3uDDoJdrwiKd2okh9dMN3b2j5vwzM8e1h5ND8dvx2jwoWA6G8Hx7hqgghu3te8vvTvDrSXmEFHKC46zQwguJVRYT",
  "key11": "2s7hNk6EnqH3Ej92VZN2PZSj9H94Vk6QJedk9s1ccUuLhbSMqxvpwCn9m8EBtgV6ijDr1Gjdc8Py82Lxn87dQDS5",
  "key12": "55D6cdcjPxu4cfvVa38Sbc5T8rNTHPLNrhqxWA5sca1CPqU916kLgEPpqQKH3ukhUETtVx7gNsECX2EwBHYqz37a",
  "key13": "3CBLW8kKiunn3AHYMEK8BEAkyDpMcBDwvUY5Pir2bVWq6V7gsWPySXvoyB1uaWHwy4bWdHhwAHzcHxW7Lx4Ut2Xg",
  "key14": "2dJkMdMbeYcEaLX2ugvLVmXFeb3nk2eBBXrscfx1vo73Um8te7wmpt9sR86GwW3SVLVFSpCi2TWZoZfCfxYDeXhj",
  "key15": "8pbXFYFno9ZQqKuL29i6L8iRQaRpQnDoyTB6VTotRjRCi5MdtieAbMppd36jm7Rr9J1N2seNFTKRFQnrdYgjBZJ",
  "key16": "3v5WZyYoh1cj9TrUCFVPbJJn1ptfUrq6BUPqgz8SeGpNJEDAPy1uVPMf8953pm6aVuba64t4xp53YrfJCJRZBHJf",
  "key17": "4ZzU2heTZyXEK5gPhJFSPSuUdcRv56c3dhaCNeodPRsEPbWaMWjfGQ47xLAcBhMxTnKyf6R8QPN4tY3nvtBD3BDJ",
  "key18": "66tm7F4J8joiWMsXE5tUizFRUXChqxp1DbDasXnHHs7AgLJtNEm85ovcFZiKNAK368yui8nwds5oi7mLom7BFpqT",
  "key19": "4hWPmULdDxU9mcdprgWyZveZxj3Aa62su23pkg1w5teNdy7EoDVzYNsjqvVgNVzawj8591SWQDGyDgPkRpCbxE5s",
  "key20": "4SGSFY39LWiFB9SzsgDGmtvWrjMNrfChARGhF3R5xTJj8YKycE51qDSE8oXgzPyjNe23CvmQ9Jn4ix9QG2g8t5xa",
  "key21": "5UF17BNxDhpwjgJHaiK1jVgpibetyqL7kidfp8BpeP27mu3PpNqVg9Gn7aEHg4xEfxu2cy71iH1xzTbyx8E95uTu",
  "key22": "5hJadmbPAU6rxs6KjRUsXrnetfs9BweAkn6ighM1pmFBwptTaeFABubFLEruKh5uvuEby47ChacuL75nW4dEb7oY",
  "key23": "4z7eBGFaVMj6adGYg5tobkMF7EPgaCEJYCsGLDH7yULKcC31tZRyWL2tm2rttUAxr6Rch6BpdKvbL2BR9HDisMac",
  "key24": "UqvVg5VwRopi6NRQB2zvGnC9ZkhEb5rCtnrQSe4miPzkpxBc8CeBDT5m8x7SZ3SSGuYdG4nXdyPP1gssqFYCra1",
  "key25": "3dpodTurgVAMB5B9Hj58P4AroziMcc2rjd1VbgEBVGKBk5dCRRuyb7w46nTKFwHYmAvGtZTDaWhH5UckqVWFQ7di",
  "key26": "2isgTHVKJbEVgxxLBVtt1xzJETjttwaBWAv7XeZ4atCWMMWuLQ3Y5Mt5JeqE7N4SxevUSSBTGMmXCy8geGXMmE8w",
  "key27": "xfp9asfq5cAEbzzmm8mvbyBqTRqUSC1UqVWMfs6pvjhyZ8Q4kUbJhatgFeay172KjqkQEPnaFQ9RNThfMQYTGSP",
  "key28": "4ieBLCWPigLC4hKrEdcb82y2kYpb4X9UGPwxbNbCM5yMUMzqDdRcdzFhPewSfq1ZoSFM5UueERnDKexTUvNXgytf",
  "key29": "5qukpefoFZAqjAS46qaQKQNhsJ14Jqpebp8C4LjL49YZbMAV2yAC25qzpEor4JTkmtnfy7gq5pUJZ51ok8pmcxuS",
  "key30": "3aEyzetQan2ToJT5PJJQuhY7KiRXWjC3kQARMBB9WbTtp4aUYWcnx1hod5tS9vmbR1jfaiHVVrYBK88jEpGmbN9v",
  "key31": "DqwGy7dtAySFoxDQgcnFnAnouPkCxMK4wyMePXFgCbLu7dk8iMBGD742HfkLYfschxKYaQBYY9SKwDr8yAcLnoh",
  "key32": "4N6EpchbWx6e12SPM8FZyQVF2fN63KfkRhqzuCxrukcV1ksF6HqbnWaYmb7Xykxhmyd5gzBJkB4DqFRCGZzBEqs6",
  "key33": "3bNTDn3ER1ScYJmmY5KaGREacR8MdnGY3PdA7NQrVU1s24pYczfSutuAnvfWsWaBxUqrdrdaLkTYVafauVsKJw3K",
  "key34": "5ZXiffgPmQh96sF8DZCz211EmrWxKiwbir7bgMJC6ahpG49HrCUZgpMXfAMF74xsnPp5gnhkhjiRGpWwWPnXCDJh",
  "key35": "5vv62wvvPcocNpJvT4SNFxNqdrVdJzmGgyWsUUp4dJKVr42ft653FHf3EE7i8QetDshqHTpbhMrU3wiVdikCk5No",
  "key36": "4BWtNtP2ajpdzWipseyqRcTtzgRmCLat3Jy1TwMnJRypg5ueJqXD4wEESRLF371yPAuALEynS3kSssJ9yvFHDR2Q",
  "key37": "5v5VVtFnAnUYeEc8evHqGWL4X9sAsHMMF8419JqmPr2DoW7wFQW3N5p7Lvez84v7jfaTQkiMXZYpb7G57r4ENtq7",
  "key38": "2kktqagFgN8iXa7JbmUe3KMCbjeDmBzeyDNkRcBAF67ogDSbG4NheddwxjmxE28YBdt5Cg4FFSL61jpqBQs9QBsf",
  "key39": "TBEuALMWL81gWjYLKhjxwgu3W553J749D5gUCE8b4jaTyFaKcDGG8cWewSZQKTySMiUySgThVP2Nh59z4RADyhh",
  "key40": "5FFbpd4tYJYRCK199bAfspmWrbBvdWuCzbU1aHvyPtTib1f1PFiDUBLmheQZt3869s9WqqQmpy54TGF7ZJkvfayz",
  "key41": "2aRwaNXGAcXwLutpfk8WmHRhLmvpf1CPgRjhCNvbpzYbjuPyZkrWyDButGKkXnT3Lfe2HjwrgfsdaJxPvwM77neG",
  "key42": "5XGm8w1m5DWFhynmCywibRJE2xig2dHNiaHX8xQV1rk7bgcYzsjWqQce9ARfERYop5nYsXTSXQrVBFm5z2k1MnsY",
  "key43": "4YzUU9vBBSJgbxnEFwHtprsvShQX1cfqH37V9hxzkgcZ8PEPznQ5e48yX5j1qenN6ua94KfZr61uRCa3FdTWqrv6",
  "key44": "2L83LzU4ffzX5y5fiwJYzVsAMJUNVVk1VfHk4ZvYLThmeuarK4FAv5EyFJJQtqf19D8BnZWCf5hmLVV3q1HfhxLx",
  "key45": "5grJefsabThpVqSdXcmRukZAHesy2ec6b5AMSt3414Y5sby1fPnYgVF8t3qAzAjyryqGV7M3tcU8fncq9xNjznby",
  "key46": "4G9rPbamaTv4P5MVqdSGarS7jrNmQQ4pCNopotxPYA7vk29KdcUeA2eMSX4nsEkoLtphB7RgBME268rFgRF7mrQR",
  "key47": "j4BxCS7ndxGeDzSn98J15hfgjNdP5hTQZuAgoianTY7JAe3mxYdL6k6Roctat1Vv2y7r1Hs4Mp3jpxPf4zrghEk"
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
