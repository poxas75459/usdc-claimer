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
    "2MayaaoA2TsiXuZ1EMRfo81W6VQvLk8Z9i7edsmJWrGMxNfsy6ztu18cQMdZ3NWQXA7D3uoJC923T3EecJfswAFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bYowg5H1Y6oD7dYe2Hj3RRUbCJHKXfTp6rJcH8q3gMiPak9xY1xD5KifDX6K5cUnyYxnTpAjFKHs8Pv83YrSBop",
  "key1": "23TRh4HAqGPSQWsJRf2nywJom9R3saTNBCZQqNif1Lt1GyfdStEQY3ieHmfNQfPCtvDBVRFbH1g5aUyMHThN3zpF",
  "key2": "59hm1WQrduFx5TaaGwoHjSBTneZMCCoj2TBcrGA3tsAc7cj6eEsbtZm65W61bDTuLW4NdNfwTRBg3DauRKb4uSsR",
  "key3": "39PavjYcQzQZDoJVoq57oiAfRzJKwnv9ALAJ46E6cfgEY3kD5KcpA86kgk9VpMaQA2xYcNfLhDBJ7ZeEn6mCobYg",
  "key4": "59YsKeMnZbTJ2fr5axA3gqosrxwQCqRE98GtpB1YLGAbEHPpzStCqAWz7PHoxE1oXNnExPSY1ESAj76LYgdcxbwD",
  "key5": "5PRULQn8NbRFyh4U1DMNhedpZ8U1GnpEtMRZJoQuVzQRFL1RoDdPHpLPiL5w1fzLqNY8rrVPexG2QpRoKBpoqv9U",
  "key6": "3RuvCr63U8xV73btJxZ8x5ZxUg5Buy6gmXphCUtTmSY5xcwvScVowSFGXY5Pw7DifuG2e9MLrjGGQkiwzvUPZEnR",
  "key7": "47Vybu3zJ7zuAXuFawkk1X3PwdaPB22GZd7x7CAqjViPxsF3cMmX9WZLaYFv4fMPspLJp6zAMzS9wr964Hxec66g",
  "key8": "5vjsp2MF7T5Z1hLGSJK4TiCxPCvQK29pakTttX5JpGS3JJRAZWj73kPBT84N4DwiSi2hFZqTQ7N9WyD2XDu7VRrf",
  "key9": "3MnfiGhKE3KnmrMoKkxcu4FviKAqzaKFJ523f4iqHD8iGKStYwdmVY8Bgurhip7opSgTZrbWR3dtkFPKZYPJzjoa",
  "key10": "4oeUqaBGxj9UGhh97PZycrYnZeLM3izH1RUDsZApzN1VJXaxJKxtiiepDsGkqKvwCHLt7HdkxfifxYSe9vWmNNt",
  "key11": "4dawaJaGLrJDRNAgM3rBiEMQZieXt2j2ecrq8qAtoMVZLjHb2tzc5QmmLaXCu3GQRfanUc3oVNiaeQGteQ6VprBf",
  "key12": "58J8FM3n8FkVVTJc4Vng9nK91eB9ZoyyCRFsHMuf23DbDADfkqRU1nj4tozv53b4ixD2W34uLZabmy17KunfFBWi",
  "key13": "2Muh4arhsmgh513EJDhW6vXHnk88HZ3xS1aJTDvNusCmPqj9s1UdpEpgh1DiSKNLKkGN6evJmpEdHcFZYRUCH566",
  "key14": "hW4GVH9BkkYzqBrzajBS1xLvxQDrKJseTj9xvshrDowa2CvrMbZkzYk7Kee5zsGuYfHUQTq1YMK5TALtdNsbHm1",
  "key15": "4HXqWv1zaWULZHmzH2RtanHS2Rj9wgq8KGynZjVJqKhUvmNQaYCnWLyB2GqWWAEEtC258vxruuaEY81JCbWk7vWV",
  "key16": "3F5LikDP8YzPTML7PG92D4x6kVYjVvuMeXKYesQunvNtjU7b4rgPXUssbZPdqAfJ3aqVJXTTW3rJ2qoiGbrvSinQ",
  "key17": "rsKTmpPysoQTGZa1441jYqkZHPBrPwvtaHUR6eVidzmn6YZa5A3phuWz9EUULy5HwyC7U1aV2uoX8VzrNeMuobT",
  "key18": "3YbkWbwmbF4JEgoFj8iESD2LZy2wVxxkJDEpk4S5LyXR3Sss145hmAfJfAtkBHaSbmYjtzmWPAMFA2ywe9zRu65G",
  "key19": "3vXzYvmMCAkeV9hfKbEtdrT2u7tRhkyeFcApQcLhCrPvhdyVpgTADxuBJVbhahRYvqGay67ENh4Xk7ohYemH7jC1",
  "key20": "5RnCPjTvYYLpQUakkEKgN7N9cWNarw6BihcU14FwZ9fYjfKneeVhzCe1xDaD3XZfX7umBLCeSnVhsCoCgmnXZkba",
  "key21": "4y2LdNHSrM4Swh38UcbUUKbFyfc5EqdZg5E5zZHvVzTSNMNxjy6nxCgSq5GpCppetDmK77Nqiv73wt1q7KHmz8Tk",
  "key22": "2cjr3PddmQruERTMfaqNGQQX22afYNowat4tdsfnYgTFvVqRjrGQfdkBeN21eSLcv1k2eMwfmxV8DdUH5EgysknB",
  "key23": "439Ug2Hk97FrvCEcYiswmoj43JAJXjsCaDFkzKtbekKCzrHr57aGMCvrfrgkJR6xdSaEXk9W6BDcL2BNoN3GiLK7",
  "key24": "sUq1kRuwtLqivS4qGBHi1f4huV8RPGNdfzoRxk2xbJLe3u9ybTdZYzfeL8xEoDEhYab6qiJyZEAdrcUDRbvdEEW",
  "key25": "2Q3ALvzCH5GBDMGZ4TGVfpemxC8qi1P1wFoJCYySj1W3bdwE5Kn2FffjWkKUkUbT5tcFLRQgGk8Bgm9QMPYAGF3v",
  "key26": "enRjmMeX7i9ojfXqQCTkxUUYC7oChmpSXz8XgRhEaabpEEHEWiFJo8sDiYUACebQF2mRJ5hMh8DYr1h68kPiQeq",
  "key27": "32SssHUHpKQk1ojFTvt7UVDGoh3JxxPQDLRwHrt4dF1NT5ti45KJ8PPwVfMdKCa7FYYZE5ea9kPQ1pB7LgSeaVkH",
  "key28": "4H8cbqg2CVas7AjucFNNVjyNN6CFMEsX4qusEFbJxPWr8XJtDBwTcPWXin3AwUy2FX9De3bLgMSHuZZRFomc6pwn",
  "key29": "3wEaHf9x3jRXcKgbniumELGBRRgU7BU1TQVbdDF78N9fBNBH5w6VnmXsFzD5avJGB6EbFWTRqPT71kgFcqoja2fP",
  "key30": "4mPgf2tmVPpcTkQpgrY3vzf8uTSRrr5vo92GmTS7khEgbjQ1TGHZvVNSrqTyc3V5twMFWCYaw8ATHomSPJBAAhw5",
  "key31": "3esUdwE6nJXnxD1cT64ByQhPDSPsuLebDYueT1nD3fv3MeapBEGDHYtGN8M3q29FP4KphKYLJRkmeMmvs9coQne6",
  "key32": "2nFMX2Z6jDttMFAPhuHgbHNwZAmSrKRuJW4fqKUNzqmG6eoUCw4MraNQHVE8gH4xrVCj5S9z17neBkXB4sa4RJs9"
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
