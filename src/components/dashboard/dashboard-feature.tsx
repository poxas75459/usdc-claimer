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
    "2MbDnzaLt65qbqZ8XVZcJcmaGsrXnbGpxDPrAbbP5QkSM2kGRqhQNCGN1oKS1u3PeSGS9sB2mAFvF3xxeWxaVC15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHW2frraLkUZa8HLGSyiaemEZR6ZgtiNocFFznL5ab2ucwV7pzjZMwG58k56HBX5YnogTBCC733neGtTx5Dwi5y",
  "key1": "3pZvCd3DwwuEbkTRP961aGYoWWHgdeu1zHA9NrGukw5P26jQ4D3Wx9vMPGd9o7iYXf3Nfxp5DsJfDhFng2q4s84t",
  "key2": "48f7aj6x6F2YVa7WcQ9PBi36EGX5WU92TvwfX4QbRWJPBDCxr7bsCKu9NEsoTW6Uh9nCbPZxtc9Yykm4fgWZxV7M",
  "key3": "3SUjsnKizZzM23gs29k2Q2pjrsNvq4KVAbftXfy79xGYzKg2hC6Mqjr4mVXwnyob1hPvPHT68JKwJgsdfHx4MNH6",
  "key4": "55xYnNvCt4YvpVmZfDfABaZDx1hcxQaDUYRQ69jqR8Bmh67MSorC7nhncJUS3ZQuCx7NaoquG4bPdfzbKsZFFJ4j",
  "key5": "4mf77mpp2d2aNYBNpXVsZdUc1op5htVRkKWSNhGuJgJg6inPfdbvJgqXHa84NX19Mvygc7bDyBMzZsiCNEHWizrD",
  "key6": "5JZxaUznPysbcxv8Z79miYvP3p3JUb4uUBFcTeGCTT4aUkzfDFn3fVebHiPgAVHZ6Dt8V71xQH2knHtK55JWFVV2",
  "key7": "47zU2PDDY1McANCME6KRxqmsP9f9R376FiZ7zDhtBJjoTA8VAbEohR544j4gqP8NZrrXkGh7RT483UAtToE95mGS",
  "key8": "4ccvwMdnf9vtAnRNbmkjKDZYrEor7RLF4B9n2niLNpEhvBj3yDx4sZPjHc7rAd1HgnYiPTBUmR9BjHrUn82DvE7A",
  "key9": "smNYKtk7LJeumqhSJ6VoFGFjba4s7ypkeStniAXMcLPaJdiHzQu4XDHUrPGzzdhPtHWe6LDPk8pRxCTjUaGTMod",
  "key10": "4bm2FYgPoecHpWDtPBHsbDWzqUFNSPgkJG76UE8XBruaHPwJo8bAnyPB1Ke6eKTBzad8k8x3wNhSVNwF7ycaZL2X",
  "key11": "2ZkTufmkU5z9WRgYH8fH9MJ2GiKdk1AtxWvngQxDsUBtrZXthhekoatBw2KJWpM4VXtibRpnjt4hNa1LHnVgEDoR",
  "key12": "44kTq5JfGPi1k9fzF12GnLCqd4Q4BLk1kdTLF8MEZJS3VB7SLEHZPsaMP1ixhTgt7BW2uAHfBAPnqx4sZVWhsfNf",
  "key13": "4sUunB6bv82z3ioYXkg92q5Kxx4u7NqxRnpVrBRC5wQHcAmdrVLVB6NU6XtPkugVNqcfLRmNLY2DW27snymaE5xD",
  "key14": "2YApxx4qfhcn8PzyAyaQqVZB4P12DakDTtehf4McSM7AeFYve8UPmGLGqSB7mhsnQVJKZ8ALb276e9kZBtBnK3oH",
  "key15": "63RGwxUkGxoWix73i7VRqfMnGZGrySF6h487uvBPTpwGcmFMZQmHoy3f3o5fqz8PbaTKcGDQzrvVq1TMc9BBtzk5",
  "key16": "61oPggPEm7BbPSvEfxknAqR2ViuRShaZkwwyGpmsdmX74urGuQeCuwPbezV1rzrXVxrbhjaxtgzbpqyrNpK7FZvw",
  "key17": "5vPWCNQzdNH5EytjWhPXZi7SwLLzLa32R24Qcw4snphAQBWwLycqouehcJMD5EvAFf6Dtxf1Xoad8jJ4Rg1a7tS9",
  "key18": "4zbnwdNDitGzEjHtcVfRGmrB38xyrEEgBfV2iHYcyZKFZmq95goe4aU2QRKjUQvsd6VTodNwjPDvZx1u5boEM6jx",
  "key19": "P5scHrBqBaLEsizRfH5g7bKMzkmYm26PPriTMjegB9sFYcZVnjBNbW6dtyFo1jr1NdhqTv2oLwq8hU2R3sUxaJP",
  "key20": "5KKNs6rGsK6g2STxUdJMiwGbknyKpE4cBx7Qz7Mby8sQ7naAbfd7cUV2uAwFzUTEbXaviRATpGmbe2449dfnQHeg",
  "key21": "32fRph87wybLrTpAL2x8tdAennUMq9TZZpWYh6FkfJf44cAcggR9TTqXgewQrdzmJeLHcrzjG6PwVc1pCxife963",
  "key22": "4qwgx2oxdSmtDess2ReN8wHSAPkVcXGFcAhganTArprqozGacxWuF2sVAm8EifrqSRMARWvjM8PtQiHBp9Tp2zfG",
  "key23": "5wKAHbFWgaGZ9dSssNjjdkK1bNNdF6u6DggpKQbYxk2KC5sNCx9qXSfBCH2gDYp8Ybm3LbVkzRCJhGCm7YQPK8J1",
  "key24": "5QcbC1YXMonmBhknVHeKEPwxUx7pmZT7oMCSyDgqffKZvwWCnRAYj68MSC37NU7LA19pGi1EPoymMazNFKvuHGLt",
  "key25": "3cE6gngRiKzDs15Foo3B1d9MkhJf4amKSNSo3SMXjqmxbCC7uyDmKboRknc6Q7hkYQ41uzxbbHzyNAN67UiTw9TQ",
  "key26": "2g81ErhGJY9Q6H4A7mVfp8B6AKaFkyS76ZoA7rEPnoD9XbBiZZAPSuySmLZt9FVFuBejmQ79SdsSq81ZrdJAL3wr",
  "key27": "3Z3VdAq7sRhzVq1ZQ7dbjHoaFKjeNdn3fDxxmjQhyqnsbWFchfQMg35ijgCcp4uU5QEkbRcjbrHtmMQx4B8CkzdA",
  "key28": "4Kjm8KYdYMFBm52YuZn1PVTkPBf55y3sdpwqqLVAnya5vU9YfDZ72EbSNqWxur9W6gtgRLtDuNW2VP2m1HJGNSGv",
  "key29": "51y1oKGiVibq1GyGJBjmCgKK3AGmqWX1KhKgBzYCRmJh3jsnNrg3SMApZ6LosxC9aYABjUwP5U9Nah9SFzSqLJxS",
  "key30": "2S13jhv9ZqhEpaVVR5BArgNQwfHQisTmT6ETSuEb534XQ6Qp2FJGV3jxRxkQSDHyLMvUgrMKVv5bugBjnXJZ5qhV",
  "key31": "3EVB4JRBpdkPhwMFVvfxLXTaFRdVSLhKda56cLTrCEuRS6e6oErnT2bh4HEw9YRKYYMo75Y8GPZeFPd4CNL7uUiz",
  "key32": "5MdsT4enTe4cZdsXM6XXnm2mRA8Yf3APPyKMkTqCt3L6Vked8Hne7ZEt2o891tdfpsnDNYYXhbNjzqSYukQfVnwk",
  "key33": "2izxwBf7JQ7t23o7MfNt2wWjQiGQAtAsKwjcmZWQvpA2Lwkw4xz9K73P18PWiEgac2s9YtjfTzvHUfQpa7W3RRtX",
  "key34": "4QmrvHzta6in4dK4e2LosbLBwg2F65MuvUBSyKftifBbz8XybQvoht44mdWZ4mdgCFfsE9exXKtoSz3jFvp6yZ95",
  "key35": "34MmxpEYbXu1yDkD832kKzRayANbgrRwLHUPkop7Moo7GwLtEuZf1BbTicRxtEHxpecquoUcFhTf7MQwLP7Ni8oU",
  "key36": "22aT28c4kqYMqDBSJ5T3P1ZCBpHVuSQhKysacpCfx9wamiGzdUxpbvHRPuQ91m3P6fSHLipPoiyTVc8UU564p742",
  "key37": "4w6XsWUpZQeSZTr8WKyzKDUT7ezyDzmjgjshw9BqUSWmQgsgWr8Y66XPFHNVw8Ec6j4GA4X3bf6N95mYGQYrajFG",
  "key38": "5mWztbiXiRmjbpBBrMzn7p8vmNuyeDeGRvDfqSLy4RdTMdHPb4zZ3zaZLjL7vxWSDmRNkDLBHjeqQo7mFALR9fNf"
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
