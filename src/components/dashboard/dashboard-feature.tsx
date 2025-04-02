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
    "5zWXvN1ZC8RbgL1nrnj34npdAaRe6aUETBTaBLfkuCptWK7y9AkrAKzV6PsMEmGEArzp6cvh4hr8dQXyiNeEEfps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2HiM5khWjevS2zsZm7DCkcKJtHU3KU4MVnGzjEtcJp11n9e21yQq9V3eQ4BMhMxUfkyV8p2QuYQEzvwtoUvZhE",
  "key1": "5Xz3a1B3HHiK1DsnhkoeDqyBdhtLahrSaVg6FSGmNFFxeN2rNYfvFq2HUrJppMuqeprwqcXwrsz2x7GeEMg755xi",
  "key2": "4kpqkFr1FrrMiotpjz3WR41e2UfJubmggBor5XsKsByqk22W4RXkHaar9hHTv58TafVUi35CnsEGYi4sgoMGbp1d",
  "key3": "2hrSYzbV5s3UZPxQ3QU5iTVZNGLpLhea8U3UBCf6gYYDMgzEqjqJSGq7qwDMJi9ZHAChtEePEhurH3Bb8YZNJi5t",
  "key4": "44s7XWVrq47UszwaU4ho6sTbu9zhdnsU3E1L9xfBHPAf6tZSfuB8iimXnrdhtFAswnAKR7JVQyupdcToz6VVomqa",
  "key5": "5TNWmvQh3GK7d4r2EhQsapjRZj7P2cMfQAcScYJWsFzYDxfKA2MREG9vkV2N3s8nKiRR3tiEo4UBdL15kRAxcrnc",
  "key6": "4n2xKDtm79pLZd6msySyEcBrgRvtG9N8LTweeGe4sPeRdz6e8rSUdiNdVbGAiAcjTXYcqwoDJzNt9smhsegGpcg1",
  "key7": "2nw1UChLft6XtQWvAUnQ1yFDADmyhTsxa8EecUkc5FoxEn16KYZJybD7TQo2dw27N9dFVcqYyFxWgggTKwfTgmGf",
  "key8": "5M61cNSJ5rH9gTXpAhpZ6K51YxACMFoW9ShoWQwZCVdeYjr5ruUkTGdw68gcgk7QAK25Y4w3E14Bro54so5CShAc",
  "key9": "4qvqiuNW63gxGD3vdbMy2cfXrnAnDrwHXgVDEMTsuUdg8xuoDGf2ociUKDd66GkaXXJdbGeX3RQ1emBETVRWkzi5",
  "key10": "52PiVwzmJHSw8fmxCqdipogx9CJXaix2kVSqs5M3rQQN3az58wCDQXuEHtS4MCY1iRayAPv8d2kDLsQ4HB3aYtDz",
  "key11": "29R1DhPEqdjxCJhhQMocvLWRrtQeCC8DrAuFS2SCQG9HnEVobnzwaKsvxisQcp6dBrZjrA1WBuc8hM5KY38Cvbhu",
  "key12": "3jvsp7WcVVMvhXKGfN7pUCBuetmLhq4YNKk1CAAkAgEtS2kCsiM6MxFmd2DkG4NQsGspW3wZKTsk1aNabE8hgTh8",
  "key13": "3hE2NcXHJjYfpfWnajCvs6Lp4k26bkTJMrvtUBVAwV59BdWzzxmr4r2oALo5sqgab25Wqmh8NgNPfDAMM5aT1tJK",
  "key14": "2WqbCd4dBaRboGohwmkTLncN9voVxz8Sb5NDyHJmCFmPZX92iR3AkWabfVhcPrDiury3FivXbHeRABppJjPReUw9",
  "key15": "DcxR4xAkBAZW3qqYxsMtYWorytih8whouMwHsDeCzqrg57oWuJs8pY5jzUEnyUk3oHx6nZxZ5ff35RKJEjThYJK",
  "key16": "DEXXqB2DKCqdXLfDAF1dCXmWM41UchwYbtKEz7gNqLx64epRaEx3ZXiitrJ8kwsrPwPUM6WsPSt7gc4vUkpiRnN",
  "key17": "4KkBq2xX9QrJf3RSEAh5ziVcMzjJgPJDUJoQ8WsFYmG5XydLFPfPiGA2P1XehhrDvqEbn7b1wg3pYSKz1kUq4Wu8",
  "key18": "SyXiNJT4rpk7tbmi4WhyEVCCTTLgBv8kGjp9TJ7NNthtzfTXL6H4k5PUM565mzYvEGdKrWvJazijVhMdX93CDMi",
  "key19": "2Rj1gn6xVTsFFv2ECr4HJVN7jhGVL867EKr9ebyziyjpRBq38WwE4TTjm12UiNU1d37apnhprC9DdiK6yJQtz3F5",
  "key20": "2NPFrhbhHbQ126JiCrQ1yCwNzmW7TXrC7RrSKUstYzTqWdFdgFA9A7BPDN4eQGF3YEbyunSPuduoFkGG3N6p1tHz",
  "key21": "H8mFr1jA7iM238XoZQ6stC5RxcMkXSzTnyULwUTYcbMBUw8cZ8ypmXF2AxLUpN2LWT5wBzzQZp73B58E5LUTXBj",
  "key22": "49PTD6QjA4V7VPWU2tJbTxGvK5uSaYGnXZ72W5TssiZ3d3YxYEgQeqzH1NU2GKGxyQfPzLkcAou3274DpY6PqGYN",
  "key23": "5bwZKS4ARUcp2j4vofNa1Z9VCco4GBATJCTwdHLCFet68KurdmHdoPX5QdJGWP5xupLzcAtrGJnvQfwQU7NfSz4m",
  "key24": "3q99LDoZgbAMMGkSRh1sHvPNf3g4DKC7Lm9BxZP9ZRJiETokbsu68xqyHrtwcQToKxCoRHPLd1jM5XpxUDNzCBcz",
  "key25": "iH6KW6VtpdGoZLQAek2Kge797p3di3GYvS6maZ28dR1WXMWJLpurBGHWM4QeA1EiBbB2VA8CLLNKU5eV4r2dK3r",
  "key26": "2RXx39vZms7dCouUmMKnVgiYQG8jo9kcEL9xkRtrE4HnR5DyTrthdYoLG65RB4yikjZ5NhYtphG6jQmHh6hESXNh",
  "key27": "2mxLCFbqN9J3XKh3WxaZZKLwphrD6Rbhk4h1284ujzrxwLDidefWGo5FHVfCkU5buQDDLiEN38619BYYSGar9J3T",
  "key28": "3NJiTZW8mEW7DoxFAqKrv3mgWckEfuijyDabCJwqMwnpqPn52WhFvHsKmrsg755vgA8yxhDNbLhAfQwxZ22Uq44B",
  "key29": "24rkwjPFzRpgtzNsXthz3fch6LdZqWPxcNXpQHVeRuHXKaKqus1TfvBoBW6vM8HcefLKvBjHBXSWe2nxYPnKdj66",
  "key30": "5bFkyT4MmqCHx8JNqyjyFc1vb7ccSMJ9qQ2AAaP4bPBqJXQFJarQKB5DSNG36deN2pfh7fWS5nZ8xRhhZo5fAqXE",
  "key31": "3xivXENPyFjkhcCAY9oExodp8DLLrWPbSF6t4ED3zGPowfASLG5mzR6oK2sJkDvX2WFZjvX5uYDh25fphsniH6Ua",
  "key32": "2Z8DiDBQv2GoDCSbWwWbaXZuXJbQMrMaWrjhw8EkwEYMDFdPtCmLSFGeDD1J8mv71Ppi859eujvn59nWLWrWKuKm",
  "key33": "45Grm2YNfqyA6vCmzeZo4eMwe6FQHF7otDt7cWcNajeruLNsQX8LkSr9ZjC8YRXJTEhP6UB5q2E6igB1iMnAJj2B",
  "key34": "2a9ZAL3zLzz1gFqWQdavZNFRumEJSVvBzS2RjNhhKPCbPXaTJmEnRPFdzrRJMnwkhVSgWFFKvLRfkVXQtf37E71N",
  "key35": "MPnRcSP2PVniG2bqzWYci7zyPEXGgkpqBQFQbZwqbRAvC2dH457HcDETQjjxwAKQMMKdeB9UVKNehGvw9J81jec",
  "key36": "5mkZRCHnJPuRc2NsFFZem8pPGPVNRgbsT2pjmMZ2uDhaXMq1ftkYUBeq7Ss7VfsRCEkeePAqtFMSwcmV7K2ozbhd",
  "key37": "3ce8YmpPvszsguYxVGFtQ7x4x2aqVaosMbS2mrjvcmPUYUKDeVhHinhAfhxGr3rgbMCqn1nFaatbmMPvTPTo1ZhL",
  "key38": "4CqbdHKXcWMFzmsEVt4J4o9hXKGnS8FwjoRYg2LRDgeMqGghAuCKkPCnH3QTa1PKvZ8WaZbQuGwN7DRZXsbx66zT",
  "key39": "4xALkbduBqtkk2YkT9R9UvPGFuBNABNzSdmLxLSQNPpajiRJA7hrDas1V2DSax7s6GxhswHqFP5M15vWxzcKKiDA",
  "key40": "3d1VvGD9mbLdpfnMJPbYasZfazqU9beroC9TYi4hb5GvdJHj81Xt5CHY7B4RoLhoAmRww9iX6QfwnxFLCdra2PZs",
  "key41": "3mrtDRJpLYKfJ9JgTN5CV5MaomDnnfXU3WVffBBHX5rBrHefHArRNRWD5UCC8M9KNS4Q58LRKq3GTrTjhWMsJqA2",
  "key42": "7fN2YwDSjovLQzejiiExYtiKBtMy6zGHqHVaQU2b55HQHJYwxXavpQ71PydkcEd4dEP1DgkYxLCKRmPjq8SKHvM",
  "key43": "4kMsGkpTPJc5k6WU8Pft1F3PfvA8yveLoobARWT1dGg9AWin1qqTwMGKrEtFQffK3xonBTcWEWkdxRv2qc9hsaWC"
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
