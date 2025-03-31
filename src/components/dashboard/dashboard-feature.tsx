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
    "21W1rEzh7DtcYPLyiB4ALm7yuy52dzk8LVVRXAZsr1FKz1upHPxaUv4PTn9fNqMbJNEtKDtpegAsJzDupoUC555L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "452Y5dk2DYmt4cuNb33kxRR8j8Tb7pFYoyfBcbRm924WNh6bqjDnJbq3wgPzAMg3AGBt5mTbPwqFkJregq4AYasP",
  "key1": "2QiY6wTRP22hefrF5u5sRSgjkCpnhkuwaSGZzzBpihNoyVxsb4dXRVgeR4QRXJimT86Us3ymcRtEAQhSmYya8x9u",
  "key2": "4ut9yK2tJWbNLF2idhEJ42Fxyek5jdhtKu3y4BpLcxvvPXEEkKgZ6QWAsEo68Lny72whRkJucLoUXkQDSd8bgRgL",
  "key3": "o3Qv73JgYj7jq2RBSojMtd3KoSyna5gNz69cq25A1LzoCaeqFKABj64crJouj9QLxKKqGYS8XmUDhz3jAGBudAT",
  "key4": "2t7y27rZEJeCKGT1FqqJ3m7VN1diZe1GPHihWCjdKqDR5bLUXBBi9VcG8aiTnGYmwuXffG4xzVt1jaNCy4gCWRZQ",
  "key5": "LAJpTWt5e7WS3xH78aWVLPbqxFaNmA6xdNb6EPVEvQNREp53uY7HR5oNkQZ2eb56UbsktwP5Zh4iSzDgp6LHRnt",
  "key6": "42KAvA1WchNFtchJdBbH28pCUwGCrBMQK1m55qCVYhe9dwmvimECtEu2RxhRtSyPYVCUJYLb7yc6Pwnd8JSdn174",
  "key7": "3YZVwMhn7NjEJLmKYWG74kZBe4fM963tKxkbmGyJy4NZywUBpLMcYTGaobxgX9EtadhyHgt4Jx46RfsXR2P8zYhW",
  "key8": "3HsBuAZF6HsLap7KE2MpN4x1MHjZ4Br46KNcBoeVVSsCqjTd2Pqu7cQtQtzE5ZGAZidADou5JayjGyPigdp5cbRN",
  "key9": "d4DETpGJk9KzrTPQLK9ews3HtBqwMxZ4z8jN1fqjJ8fwL2u8BpRpBkMghmbeRz5kd4gM4cZD4KnYWuYnPXtRBQM",
  "key10": "3habgewDRbRpRMMXxXDQhmrE3iKDHEEPmZZ4R4gc9C8WtfULzoa35Ny13vp6tJynryrgZLvV3D6N5xcPFjRo6so8",
  "key11": "2xbCj5ZMG6vHJhUn8DYCjzRaD6ggHvS6VKttwQGXVaQPcEzf1sevU3DWyFcawXxSfLEWkxkgejB7GLYjyjHR7vth",
  "key12": "5GJbn5quvTvesjnk8og3PhJg1h4KHiRD5gSDTa8J615cjWUsR8ddZC45mXP7MQtn9KBR7RwD8QbLeLWgqiEyYkVm",
  "key13": "GWyP2ouZe72WZ18jwc7y9QtoR7irQmr1r1nTcrivknusxgX8TK6RiaSXeGkEc9mddGYH6p81A8E7kByjKo2ZNWL",
  "key14": "5wCAk1uCAAvecVMV1b5NZcCNyGFHqyAZsrskR5NSa9cV3uG65JxHnKN9YgU9FGc2BVPPgU6h7FyHvA2i9rgbooeq",
  "key15": "KBxnvjRD1pNutRnxre95MpoKySPB9TPfSRZc1zGnhhvDzUsmFSm8BoBiyQKWozVMWQ8htqubXxizs86NNBBc8cY",
  "key16": "3N5uWGAdonpK7g17CWv6uxBsz2qDGAfsi2J8G8WFs9PLCuKHu5FV6HKLiuWbmkidZzXtFpP9joD6k6ifmJrAVgwy",
  "key17": "2GLe7anmZWKEmLWvVoHcd4Z2Jg5gcq2qGPvjXGjHoQL8RR2GiVh2LP3BWphQy8rQTpCGsBv6cWHzx5JA9B5EKZsm",
  "key18": "4YSGXTffASfoWbZwqRbroA78TgfxqVWdmH3i87y41rtqJqgakhLNoRuL5UD9YdqAubs4KukF2mvgidzDrQjUkYPT",
  "key19": "3tx2deHX7TfFjjzbUf6PNSnWnhQruZNV6Rbf5EPKeKJ1GxAJqKftQFwdch3HxxNQw26FXcKmizSY4Yz2oF1yvyAS",
  "key20": "dFhyJz2KP2JKzpodf9utdkCNin5LTaPDn1atA47fwKPWzaaa7Ytrsc1Nivy5rSbewkxQTqtXMZ7H1fRXmpjZ5oy",
  "key21": "61PoF26JKSqUbqaYAu6n4WyZRwgF5BvQHrx9RY2ZjRZ5ecURuAtju2Fa3KnLyUfdfVaU7AyfnwooXLxeYm8j5jms",
  "key22": "3ytZZbiS9qnQvtiKaSZzhuYZ1Pdm2RWfbhcDsZ13JdHLGisqvhDCTrrLSNk3Ce96eEj9MWSkxCxhi5tMATJ9kThf",
  "key23": "5MhDUUNhNa5YcptBjnMsphGQLLJcTkYG4pLPPPmk71SdZ38UxUAstoh8VKaEnTtFrzUVFmcQgKEZTiSmajmqZCb4",
  "key24": "4SB8dxJi9T4P96KPi7MzMiwMfUBZ7JBYAqunDMygfjqAoYRmtxWHLzrv6K9fXjuLCxoFUZxbHuuUqdKTTPRtX8LH",
  "key25": "5QcJ9m2YsiBJqPzY3FhAAq4xsPrnAFcnbkXQr1cXYGK3Mkc3frVQhX1NG9rv7rW217WeYJinpdSEyURsBqHBHrs3",
  "key26": "4VEGczjbBdshB82zC9AzjVZpiDhGv8RpqThavyvaKjn52MzVuFVSuJ8btVjL9azUCuTEsAPVzXRTC9RQnt98GUhQ",
  "key27": "36Z5GDvZ3CZNt86yZHExim4s1iSvUVZDmrRwGF5ohmCWUJ48zvU8dupqxcayEw23Wkomk4RZEqKtqkpPkkm9adaP",
  "key28": "2BApsSiZ8MFyzP2KsPVWc8BBxepjaPdnGaF23BPzVoDbVNFSusMQXKy1kgzxNiHuxMUykdGFbfgFHGJVzP4Fwp2g",
  "key29": "2HHWkbgmHkffnMkeFi6548UhNhXiiRjYEu5MYf1BrwzH82veQ7yQMu116gfarS1UUUqTwqpu5Tc1twvKKSKStshM",
  "key30": "4s2f1tp89e1CisUmdRfXHhRbQYeqpvrtwwHfSiKP1sP2RWqXpHU88AiPrftHG86kD5snngvLSS222s3bqGNfiN71",
  "key31": "3JQmpqwt26kQzZY24HxGejApdfNQ1mq3MjvfknoHcsgrvr1TLwQAwWo4GtxERYnhGVNduKp1S4PZwoVxMrJkaY2U",
  "key32": "3qbMZxY38sZ3fg9UFpsgudQH8hodL3n6adsdF1e9n4gvitWazRSZMzj4LBi7S7iXSTy8rFEnzrMDdDCV3kvyyYjy",
  "key33": "4HVKQg8PJp4KHE2go5D6Cb8qTrqtnJmqw5LANEnMMCv2HR6UteZjNgq9UQ1sWvaKp9J7KuCMUuHEAvMwyC7EHscT",
  "key34": "3AkaVDpHfzBUyDJ5F5Wx57RsTw5QbTA2tg6WHS4DM8SS3u11Yn45vj4crRvh2AsemKmr7LEb8d5SE3NheFBWVPg7",
  "key35": "sRpKGMDJAUotSKLUVTnNZUTyvq3CsdukiY3vMfFPLfHuJZj5qeS6ufUzz7GbSnNL3ECGdoJbdTugnn4RcGHUNMU",
  "key36": "52eV9UK66UzqLV2zo1xGqLgmCdDKmknEiDrFkJtkh1fGnRMk61E2t7p11847MR497MpFux9HqTB2PjyMeHQD2tRK",
  "key37": "4iAuJr7fTmaEaLHZABYhuCqtDzV83XWhozTAhK18LmKhB8fHSwWuYaV8ZC6c2YcDMoXKqoXDAphhVXmfnn6LGxwj",
  "key38": "nAHF2x8JxNkwJb4pEAMGDq7qwM9WnynEBjav1utPRSeexyvgt3MLtb3owsUKeQ4UrNP5yKk82JD8MtPnD2FpepW",
  "key39": "5iBDFhZc57nRWGkhXaZEmEnkFiByV9qGWmsNd8q4D2dFBHShcYRd8prMwmNPF3SBAByuX9ffKATrUejwUN8xrAz3",
  "key40": "3rQRWrGZbAYbcizAXnWbhDkBboXLTCXr7yijdgZB9Sxa551t4MHJcTsvpCN4ogssqQ8X32zf6f8FD2GuryxqTeb5"
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
