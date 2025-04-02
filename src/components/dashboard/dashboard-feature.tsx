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
    "5UuhqBQp7guTVq1PNiGYyoeSVPhPHVjkzDTabWLmUEyzp5XL3JcWYrDLhoVsrvzkUHHxCiH2UtdmfaL8dy4FheUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ravWKVZDAbW4k94EhYvs4oh92bFk2Arqe385T5kGyNieSPDgxa6gvLdwpUK9MnCqcraBQtEWcoemXpQ4gxpA2qH",
  "key1": "4pnxkGi1p8DvTXpi4FsGMvzkqxvYtw2TRbPivXSCVFxJ6NogVLwkYTcSiwjCTzmdV9mFob4pC7jk1APCutamTVAw",
  "key2": "4GPTb5QBqsjChUHTupTqNRncfiArtqEpYMS4Uw5eezoN7gp2pF9tVV4WLds9WaZW9mx1c4MYwzo3GKz4Hp2NKwS3",
  "key3": "TJeRmKV96vnceAW68YkcfkGQck8eFY5T7PetTmjCrGfWamSLggdRr2veQmYnR4Yk5mtLeCepS8VYXujVeEBKuSZ",
  "key4": "3onbE8dLir5u8Vty3BMjNDVmELNWqRvcP33YUqjMJAyffYDAqvDt13DkJR8k6h5PCoimRsciNUNt1ji1zDG5XzQf",
  "key5": "4go8rS7M81fuPtG5Kxaqdrf5re14yNu7tVzmFELq3KVrSUhTn3XPJBfWDVBhh7WvAPxpYEc8YMgspm3fuNV4iZVg",
  "key6": "3Z3nPrBwENTAJ2yXGFfPQe1Xg2dUxePzoQ6hCFP5TvxnHAQ5yuuEWFzpcQWUXAhzcw4bYUrzGY4wU6pABVZVmrjY",
  "key7": "xhVYEEFvPT3MWVSYThF5LCQoDj7FmEEQCzSxYjTt7ag5tbXMRfkGpRsU183GrdsMVqtzPFX4pRFZNgayD27kuyN",
  "key8": "26cGpKr4KNmCLRTLnCi6efxRK3Z7EMR4cTtivHfoNTMPxSoqBokzpjtMZ42eyavQdrUGJ7pfmDmYZUjpFybNSc95",
  "key9": "RTsgmgCVTJSsgvcojTJS2ij9nKdQr5LD9ZS4fcx22Ac8P9H7w9oqmtbzfbCd4DakS2PpAVLJBTjN2zapYrHciYw",
  "key10": "3S8wATkuSSDTnFuKr7YSznKYG3fMU4R69i2spM9VkFgASQCQepc9LPFJrXZyv46nrZCArT4tfkTAT91Hn52r7Moo",
  "key11": "2PVmyNtKjAi7LSaGGAqjaNLgX4EecGyBo8z48ZP1JR1ZRRnm4mF4u2MYKuDx8v9KFXfqPBg7Z18ajFeTLYRhusEQ",
  "key12": "3DRoiKfnD7tnxhPCcWH7TuXCcesUFhFFSzJu34s5ehYfPo2TjG53LShTJDJzcKr3DQR5CSWeFf3BgpwHraNNr594",
  "key13": "2HS4Sd69yfy2jc8cBHm5X2yLV2aYhYEcTjnBHHPwyn3hsJamV6XFHsN2H1xrLkDGhg4LE6KyDwfsQxRG1ZpfU36b",
  "key14": "2RTaEDg3oQh5iKjVR5GxfniH9U3ocXyatnFpqZZhF9D9TpwyBcLbu9oBQjLnui3QVUS4g7AgrwAnvZDZGt3aNxbz",
  "key15": "5HH6ZbYfwzhPVi6SpDXtiwNyWNbyfU38Fg7NJWmmb44ufHLPsW6py3LxXv5HMEfyGPqXTjh5FcB2y9vvYQw1pnnW",
  "key16": "5WMdV84svnddkd6BVuaiAoUB7rjhVQEnQLpRzUp7F6UV1tA63hosMC2UQDgto91MTZGojt9YeMspyE9E4GgicNR9",
  "key17": "54SH9dkJbxGwzxJ2TrmCYYmDpQf7kFM8UJr46Yxf9geVdLZ9q32Vy1kow9LqhTcJb1kXJHC74ByYVMzr3atkiQaR",
  "key18": "5NCBYmSHSrKmkM8H1zEtfAvuo8x58ReTJuokQs2z9T6GdmaiLnnj8dk1w1j7xqwAm9SrQeBjzB9t8Gw3PmSk6rTc",
  "key19": "4XrJUkmrMkDW2ezm3TQyzcUcG9qn3WYSeHxRNur7hvoinbMwGRcUT5mHtjfdHAuvdBA9nUuNvDEhrgJZ7BSryRsn",
  "key20": "37LXjj8z2YSt86d2t35LR1ahoexpCHQNsgM9ksU1GK3dhtq1TGkywXfx4k1SaMrQJDjD6C8dJPtC818CoBkAEUrW",
  "key21": "3ZPct5owaKJTp4HTRXUoVLYsTjJNfvp21bvMN67xkmwFgUPWdVT3Mp1kirkqKqXeFA3rWuqRAVqxyMr4Wo8ZjQMN",
  "key22": "3CDu974a8LFkpFPdpJ8rBNZfuqy2y7VqxjPAczczEGth48BevXhymUKSM2tmGprtrAaEsaijXa2WVXCphh4zzxKu",
  "key23": "4YdEBBbGhHRKX2kjacpShnU3hpEhYFUFvXYdjqynXmWnw483uofcPP67HJMci9NBgjPRPV4xt2KqVCVeZumXvUVd",
  "key24": "2z7VzFS2xtZ5vyX9oqiLirb4NhGJsoKMFMXWzevEJ6S37WCgvbAEQsDaoQhLH5MSwAeYdqAD15WJULZZBg7e825t",
  "key25": "5Qhz5NGP79bXi7kN6KD5WVMxCVA5EXw7JtiqSdB597RBQNAspFFhpjXaqprN2AoqoR6JzrwV2KmBWSPcJZ4Q2SHr",
  "key26": "4o2gM5zjfYcyBtsowYE3LLkNRyFLbcSenutroj8LuQ3h321SGAsHjLu44tLKgoJLV7PDfuqTpeVLAn4gr1icaAcN",
  "key27": "5NCULHTU4JQNjdNSNHBimqLitLG13fRpFmdfzKo6owU3hx1UKAPLnPN9vjiLxK73dYzBHUCiKh9WM4EvZGvAkw6L",
  "key28": "5kncP3awAfxa9JpVAq5wJhzHdQhuBmK3sKArn5KNaDgVrjAekaiXBVv6fnjB79WR8qUhXERWS4WxBcNarauGsduo",
  "key29": "u2tHU2CyakoG5prqV5cSrWMZYtL4MBSeNvENnppCBrZ7fxQuM89RUD3zLrgCxN16ZgZM9fmuhPw3vL7Y9LiNLrp",
  "key30": "51Kfc1TnS97K6MgXuxynk5jRZpYCS8Kkuth9DoknG5B5Cus5kqSVSj3zTnPHDZ3gH23RYh68cePrW8gz7MzK6tnN",
  "key31": "4U59jQJYnKGFN4TbyGuWihzxkHkmC89RxAZ9yCTD54viXxcEPWnq4HDfdTw5QyMZc9h4D5eCMEqaWqVu2kYUEnW9",
  "key32": "5jYYYfrVmAidxrE2iGyxELEgW8Aw4YSXFHtkbHym3ArtSbuRDaRXbpkeBucJkUyuDsfPWZdy3KspDNMU3WGV7nmg",
  "key33": "3pzmYy3v4UCRZcoQzTUBLBjpo4x1S3RrvKfWMEBxK5vWaYjtsSshdSN23Fvp2S6a1ty6FCndneai2DUA9rBcbVYu",
  "key34": "4rNmBCJ4XdLSbW7bvfTVv6N7hHJciNTLM7vnFKDA9avnBCGu87U1Tmv5WL8du8NaUp1kFbfACWt7JHVrrQEKsAoe",
  "key35": "5PX9tQQ1wKCGd65Jy3GpJR2N4LStc5SvoouDEaB1SdbWtsq28QaARsKyAVksbjdU9bUXDTz14gE8zv86QzwSuGES"
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
