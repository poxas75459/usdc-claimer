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
    "2co8Xd1nPTkDvZGBk2YjFTpFSURQ5BeWqL8KrCJBzS1cikmcJrJrD7Y1j5ddQUarknDsRDDVRdBhbAHXaWy2s7Nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22oFGdJt7AwQddeRR4SCSLeocdRfYhHxfEWsX8HPW9CsZSSxTy34hNUx17BHa7AcWAFyAnVTEGiRshFAufW6we3T",
  "key1": "3CPeLFJbHX7Ce28LvFArxtYMrfDWnrsuwoHP5xPyRCxRD5fTkowDY8c25bWWEzgQftahesDQ5wVPDPbt7KftWpj",
  "key2": "2yRiUNfCZ4zXxP1fR7oUTcgLjBahQd9RHfPVhrFwxDvpVW9qgoFdtTosRfYiihVxfteQAxttHqLpetKjNzPVbSRt",
  "key3": "p4iQ7wRgtMkLv45EbCsLhXUDk1T9K83Hnjf3mLxduEYv4bQ63qTMHNhnJR4ZnKFkhg79Egjo3CBhbjRpuR7xg6L",
  "key4": "gztuBrdPHRpGKrv7omKuJtzCAu5yMQJXGGFkGJQwjB7tu1nbMxWahTCw7smoKGZUvWzDKgoPkwFzsuGAXQzgjAf",
  "key5": "2Q4M2W5u4PD4qQJDMwZkdF938i2HF6CnRef5NkvPfNQzY4MT5x48yTBJ9HAjLozyh1Ejv9H5euB52MeAJE4pzDcn",
  "key6": "2w6xb4VY6mKK4sgdsof9TVNHoDDzFQZ2hKPxaaT1ZkiEE2r7oZth5NWpbZ2psH3aJfScetrRCcHSCQ2TLcpCcVue",
  "key7": "5MNNo1qZqAsAeGgjN4T49mQfSKvaNgKmKmub1W8qpcGEvMVkDuZxh94aaP7arVgJ2tK3rgsLaFjxXKvCeHy1VeWA",
  "key8": "3sLGDFrvZnC8HGqun9HLPPEK18vm3yf3fuYaB4TD7Rb9AwAWeSBjzaaYXM7hgfHo4GoN7c8QC2WmxaVHgmit7wVL",
  "key9": "z54meaGnQGgs1z7s2N96X6d5xA899Q7W7ym1ryivPMz8nkLgmj9XgUdaQQio7iY9EcFhbgJaCPCG38HbFVeygft",
  "key10": "5v6SRstSppATZAbaVYYEpq5rUjqkYnDihSMQFu5iYe7rj5fuAvNfW4eHMAjoZUunN7dF1dASJP5bXHrAzB3huwBB",
  "key11": "5X2RyAKLNECZPxBf3F8n3iPhy23d8TzCgu9tC2vtCB1w4UAiMLvuz4FtEpLrfKzzqUBWFFqbDHNSNd3QAjjjXpJd",
  "key12": "2KNNvhvNVjcoQDnXNv2xXya2mcwU7vDYcgbrtysrspdVXF8AgUwjENJdtCuHz9CMmBhcs6xGFjh3Ri1eb4Fnrgkm",
  "key13": "3xbuaNt4x8frQQRhKP8VdHbPCWiepSH2fYT2XEpTMoRBXoirC7wk7wjBw8zGAPifZSowbJpXS2pS3cG8oQLRq1Ry",
  "key14": "3hQDn8U2Vs5co7SWwfZiNAib3fkB8f76t5p1T5X1KvPpmK5DuJUw8Rmeghv62XK9raUZSfZPpg9QUWmSJtAC5iWY",
  "key15": "3Ktp7ezxukhhJUJYA3ho4eBAuxKKHWTfnAQTHAnjGBaBPKZAxRrNoxriyhiQro3vCAxKRt9kv2SUUAFPVCWXJu3",
  "key16": "YD5EahyVTqhZ4ew12bZxy6BaWCy27MvRBeCdc2zGhBcno62gofMyLG6zNikfd8Vsomvkah2h9ftZg2dUrCQLfFS",
  "key17": "3M8KcGQqkzFNyn3MiQ7WRawCK7vTD1kSuDeTxqF3zdZsH27iCtvGpCSzkGtytAiyi48hrF7stjTyniLuuBitmZEx",
  "key18": "3Wj57thnsLuAJFHQbFWfWxLxVWcXw6FeQz2iVCcvMAuNoZ1PMvcvz3G7C8gtebbr3uhcUDtYxLZfqLdw7GVLkne7",
  "key19": "5cD7KBochr46XCpRyiGjBPiSedDNMKbKcZ5GTUqJySG2H3rXRsozcMN7SbM6Z8n2m5WC4uBSfUHBynBiJA57jpCL",
  "key20": "61MxrAr2Bqvi4wjsDRFkyUTATMMjCmXtp5gYaud7J9KytHh6NF3YwH5tHrr68sDh3smfWWp6QXdBaqrDPndg6vAB",
  "key21": "34s38D6crvSWMh3tsWSTLF8fiV1eWm4vQZs8hn9M9nA5poYSUSqWLDzViFTcyCUZAGWD4B5ApoVwSivVdnShHxdb",
  "key22": "59vPQbbYg9vrCHW2R1uxDvuSYKXpC23cMW2FeQWwMFbgs42i5LBwt5jwiRu7d4J8GCRNXWH98GN3HMYmsPsPpyCD",
  "key23": "25UjGn6Pk8YJ4dw6fdCPPc7bSPMFiBC7gEhPWqkZS9MZ8udiotcAqonqAPw88Pk8CsHiHaBdeZmvpiaGjvgFh8Va",
  "key24": "AyBgFSBDJXa3Ld6hhNkPaNJvtYGGdane9YVSBe84SmRACkV1UJs1TwnzNdjK5JMXs4HGBVhmr4U4JBX21iCgJ1g",
  "key25": "5sHuq3VwykRcMM9oSJaWoaA5KUpQfEQawtQya3yGYEx6KZLbCvLTmQNuaRoMT5JgD1uJ18ELUXHsGbULpb4Y8FBH",
  "key26": "3yEx1XYw9yWLKADRjAeqvGZzX19fZgZ99dLK47PqnQtzBCT1cLJU3tbcsyXT2nYiFhk2FcDh5c3LNayksS7JoQFb",
  "key27": "24v6AynUCM7k6aNo1gstwUFYEyvq5THvxoyHFaaHDQTWALNz7pgUiS6gzczHgN2Q7Uh7wPKmGTkgPeyGATjM9m1M",
  "key28": "3TRf759Bj1gq5Z7pqwGibo5s1NUQFiAStUCduh1jkStUhg9CYXfWviDMpp9oz8fG4UVC74ZLdUkiBQEV8635T6Lw",
  "key29": "5Xf4tWNYuyDn5C7b6t5vHgS1RvFdBav3ZTUp5vCbmBCRW7EXqZzqSCA3twFEaTmSdxCnbEDEkFJ36NoBgziDNske",
  "key30": "5kuGVJ54CBVocK5xjBrRNdW6RWbAUBR8TpyyWdqMsw42QfrW9PBnxmfqhVm22cCfYC7pnNBBY2ZiCyVCNPxL6mrp",
  "key31": "5cbeSsBd4SJbmEocheEYx7M8Jnyzapnir2myMaxrMowZcLFFqWo7tFrbXw7fkShyRKj1ep99H1c2jWYHrLXXaZSp",
  "key32": "5d7r8NhwemutiYxc87vWT8PB8FSTemMEpSL5KHzjJBw9BEG1qM6oqPe1MZFUQUsN8MxkoZhAoxnpuJbPv1rqCLKz",
  "key33": "5M5XEUXyX284DGNJHkcRPiq4yGb4eXrZdMdLLESA8N8Zf8JHoUW8hsanrMxL17HJbF1HUUi6V5JxR2mvtvcQYSkH",
  "key34": "mMe5yGSDNvpLYA5VSjcXrxVz7RVYKmAmcGPdQfSDp5zGErFtxPUikq3cHbZCdeERHHt4bmvAj7CVz2gAYDAKDRz",
  "key35": "4dUtvv4wG28yfCZEZSuH5YDn1Fuf5sLDfNZWxbob2Pq8jM7kGszbHTt6Gdz6zmn4zmbQTe9AMEEc7ELva9pS4Kje",
  "key36": "4xCByYYroc9rogGSUw6kkYUucMheE8TNM6imcxdGivEKtnm65dcky5XUH5zFek8NAhGN6rT7QdtiPNEFQRvNTm8J",
  "key37": "2gVRuNBK9ARWJZwzRcWwStNBvEUsRjwF1vH9ov1ntDF6Xkdtiw4dLyfRxmxQpP79VhhrL8PuBpC1kSmcN2HvpPMc",
  "key38": "45EBZFeLSzVqnc25rCsJZmW6WPvCdG4XJtemepSsuzk3CpMKgyN2kAC4x6VwopjFbzfZGr1SrTT8oNgPrZZUV3SR"
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
