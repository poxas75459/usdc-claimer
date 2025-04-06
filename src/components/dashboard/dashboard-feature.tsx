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
    "2rwf4Ry34qQD1mKzVWcPFfoygMeDChADNrGq5uW2eZvd5tksFyouPvpacCZiMN4V7LCnurKzzy5k125BVjbAmcxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7CbnLU8vG4d8aMxJr9xYLrLRz1fS2gEfUpTPkH3NwE84f2ZfsbTWzC34HXNvWGSGKnLqQzJJu2Yo5yPgbRX7K1U",
  "key1": "5fT5T21cRSdXdyqM5KToGYCJCikRdR95SEXpbfDBaytzVwmcEHPAnHgqjWvGnmuHYVFgM1A4hPNB3ePWsBTcNd1B",
  "key2": "5FTug7uTQh5yrhzmFQu6ymGjbxdqbRwe52fSeoYQ44abWmgRxLrVCaaRVFa8tbnwTqPArujM5vD1VoezEhd4UuEq",
  "key3": "3Mb3WPsZpykac1PpS7KSj2JxBnQbYfbZT1hcDvf4JoF2s3C2U698uGTsRHJ7LXCgrDRhaZHP2k9ZtqAx6xibhGWt",
  "key4": "5AftH9YqXJGacTQv7xjzHTRr5hbEH2HXKg5L85K7Xd8gFHN55MBKtR4KNAn7ZV65YWRzAjBreZ2XRDa6G4pGgMc4",
  "key5": "4ZPn3BCCeZVEHSYrrdnAe7ZKE1Wko988GQgkfjrarXVL8sGdyEGrhXtqRA3cjkLH9HBvgiWNWk8YgaXaZs61yZ1J",
  "key6": "UWyaSsaTcNCgsVGdbWRFWLtpb1EvGQMwWzE8xBEdzxp23qD5uXTeZhugHeGHrqFzVBUBxiZcEkb7t7gbcx7BeAW",
  "key7": "3SvAbUhvcMFzzzDE9XrVxfVabXeQVFv8VFz2YextC2L3o9CLhNBb4ZuzNLjrABEGqrEGa3zxHuRqeL4w9s1nnQTy",
  "key8": "CnetBwTQyA3Q4jDMqDXXSSSP5fV54LSQ6JJ8EnEncm45ophjKTkf94j4QgDiThdeGfSnXB27AbuieUBAs5kTjNN",
  "key9": "5qW6gTN8u3wSc7a3PpaV5WSzrd8oX1sHbitt6DvT8sTp8LJnrQe2MWhoexiGTM5Kt1PbtKhkLvi9DqeCwUykF6dz",
  "key10": "4eavz8o55pzPKMHrdvFKgBT6FBfJkxcDwjp9UgBsRit7DBkU9NBDUhkVs2fA3pbuhhLHh7CrrWx8mR8cTF97vpv8",
  "key11": "4MF2enjwoxo5Benv3Kzz9M86TqRzDh14uFdyGB1jB2eF6jcMmrv8hgKURikPkgPN7qUQgVasK1pYHQE78cbawKxf",
  "key12": "3vkZT9HG5XyN4fkMser8D9s5CRcCCyUJFLRtyPdECVoWVKYABynUXhYZHQAFnwxCFS8Jgb5NZGSwBa12nP5XuwY5",
  "key13": "5n9eBg2EAYzAeqE7fRbwRdF4xLzSEwiwCeK1tnndRwsohUuTA9Q4SUaerALPQL1b3xt2UjvDstJx2ZwnPHcmBXj1",
  "key14": "57eyPPdMA3jsFngGhdL7DkEMsawxeWRp3qh4Ni82xZRT33m7iHgcFFCrMmwJtWWgWfgwPEPuTn8qGzow6eDhVRtw",
  "key15": "5obDgErU5kbxoeMKM1qj7cETnpZsbdFsim2PQPYj3E6dN6VYZEVDECycRzUfCfoYnxLEbwpzmcTyyx3MRbQfvQ7F",
  "key16": "5xXHKevpch3rAU3u4E5wqF4nnub6F4AocSQ7tfAa3gqCBEzu3Kd8f7cfW1igGckJYiVYGRxyDVHULQbZfyvr2krf",
  "key17": "4QRZi22BfayHmMc6my5fR3dhV7PM18PBPtKmgYHQhq1CRFUbBaeki8Sxds3wqMMA1qaCsRd4MSG23bZdN24o83n8",
  "key18": "48cjwtniEg6TdKw6kCvRSQUnG2n6wvtSZQUFhWUsvDeQDoYCKrJQTyDzWxDbd7JKRvE849vhH2JRVGcwXLpFtaB2",
  "key19": "2zz17CaunADGwpbeRJxbxFsYGXSeNBbZLHwjfW3ajjyfGfp6Yc1UpxCs673TzBh2t41SAf7ZWHERNYyDN1Vxw6Uq",
  "key20": "2A4QMu8wWtFMK2fxYe1gjvMfbqdVRKBakyngHU1dAJjs1E9kDE3bftCYiABHyNBuuY3VvRDpYGoyn1Q16WRJnEfo",
  "key21": "vDhNBUcVVRReaUYSpyjpqkso35SLVneQVmMfWJQMHXstpQVSJ2EiVTH85UB9Gg5sm5g12QH1onhc3PzcGEFeN7f",
  "key22": "3icinrPsNMV5TthJjLexYRDy1hUVgMmGGhVGeFMWtvxtmkGaz9grmg6k9NaEiZ4eoeTwHbs86TyRY9QVeihsSWEv",
  "key23": "U7wBdrnNZHSs5fe35HzQDuwjs8mchxADZUjjFsKEG885Qxw5EJbr5yKviwA1WSSpQmkXPPwwd7uzHuLPa2Ua2nW",
  "key24": "5WmjDNSKcjdcNv2NamTBgVXV3WgWjujDBrBDVxNX22N6fBnbgsxiUnoGxaHBXARD8bTAMmVfDU41sXJkJ2CKBSmH",
  "key25": "4XMw1tkn747QRhpXPkpGgKKBjjm5JoU5Gzoy6fuE45YxKHbVy79m9VE3o1NqT9r7jRVjAftAmaUMvYARrbWMQqea",
  "key26": "4GA6KW4goJxQdET1iNNZojRrtqevv4YycGHT8rbp6PSUXoCvDY1KuNfBFfV7u9TtLRcGcdy9cKbFwLUtzETahhmh",
  "key27": "2R4zXZTJWfgnXuEUqneZVBSAaujkm9Ljih2aLEek4xb9ekCzh7h6Q4TpQvfv6hV74uFKHHVTyPQr8wnkez5icq2v",
  "key28": "QahtXXaK29BHLPWPo9QTdMPxX2SLphRQmU1N6fN59P6qkeYvwVaXwS1sMJP49M59AxBdc7xPmShhcwGXzEA1SFJ",
  "key29": "amUMaVN3PqUAMpCArKpa6VDhimV3YDYNZX5pxtzEgh7nWVsrc8KjMFtwvJXyPdmybuPqAartkWw2Ad5fffZamGa",
  "key30": "2cGDJaayYoUTDHiTB4nYoZbRn3i4HErrDcCystZx2BfWjYrSvGc595bvn5UcGE3JM2MCtan3ah8dbGZxuM9Z7mY4",
  "key31": "2T8Fa6tcgJquXRssGEgC5xreUPUo6zjwJDQcg6jMRevMtLJFTNvvc94qgjjTVrCKQsAEDibxbMNaAYXq3jN8u1hU",
  "key32": "5vUqXyJr5AgMmz83gkWYPaVuimJtEad8hLg1y5dx2dzAaccx3jQweLb4KkQYHLKYy6Cg85BCL8P5zzr3s24hYxBp"
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
