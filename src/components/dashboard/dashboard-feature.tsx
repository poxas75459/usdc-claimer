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
    "3zSSnb5TG8YrzgrPL3NZFpnXKzUJUntY4fgETYdkwg41Kx6unbdDmNhYiNo6RS1opoCfNmtwMFYFHrsiS6zqLKig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uN4WoWGcGzjLk7ChqqVWGbvKviTGKg1uvU8y77GDGwn5HkCwMwFR6sfRMhe4JN4guy5JqAf98SjJoaiA7EPQqYc",
  "key1": "3PxNCoVgi9gc8oR9sNdcPbQQY5G1Le1iUUWfSxPMxfWKmEnfYcekVei4yXGqM4FZjRQh3pFtTi4Aa798fhRGw61L",
  "key2": "5dMB9HiT8Ar512rtr83dKJnnfKoytpMvUX1YuKS9JAKxmCmPBSiR27hjGDkDgn3n83VEK5AmJUWqmfqSQu1YRb1J",
  "key3": "44qNzfsEvfyFKXLtB3QhfissfPbxhrdA9vg9Zy1QatbWpZgNyxmr7GPH8XVVX1hTVjFbmem2x1Jzy4s4B1Hqjf2e",
  "key4": "fU79NLsAXQaeqgT87Dy5YWm3tNnpS77NEHykdRGbm8oihbS4sV5SiDFEuvGUA2Ywy2HhoCMKTm9SisKVTM3o9dv",
  "key5": "2EnrBvBNQcCQuJLSp914A1dmejt5DbBrfsw7wkmiT1nvQiHa7NvioxsBmCt2sfSh77yiwk6p7EMJ2F5nJwS5V8pF",
  "key6": "3LW8aKJVuHSpRzdLQHfbSXQPHZZC3MJCAg9yr8n5a4HC85hPNKKL4MKRmQEc5rTB6xWhA3brat1pdiDjB9Sv8tEN",
  "key7": "2zQTJaYVxLihQ8mBGYnBZKVvwb61tgkBX62ZCoFh4d16dSjqGV557mMPRG6WPzRX2esHDz46NNxv1snWrmjZUJ7y",
  "key8": "4LAuSavQqvUgDoyKrENaicdoYbVNaF1g9VhyTeXSDajXTU1hxdGeJSm9CLxMkEAKKsZznhTGCnyZHmN4LzAVfJtU",
  "key9": "2qU3cnUhmDFmoKjyiYAQHavkZimjgttkQDLPvhmkzmk7V1NPH82ac3Qt2LYZkJXG5N5rYPmJE2x28eo3kvZRbCsd",
  "key10": "4uS54oTuinuXLou8r6ybsqcwYSVDLxf85AmbCZp4hbJSEtY5h7od3XcpyVjpYvpU1XgDo8Fgxcd1byL8G8W75gY5",
  "key11": "3jpxhfRcFx14KkbA7argryM7f6GuuqeSwtcV3RARyXv3KYRzjv5raSWPrTHzj691GSRZpdZbC3bmPTC3KzQmbW5o",
  "key12": "Reu1wGyPwg9q7uQxjhqN7AnboqPCtSuPwPvqCzWcEyHUsSXH8Kh6Z5FeP5JvdpoYhYTqjjVrNPG2ZnRJkrbTPfT",
  "key13": "5YBXuUHduGBYzR45qC45iYnZ1DwacpndzQheVTQmNNmcTMZXRVfF5dbk3XQeswC6vdJ6g4Kiw1vER8bLuKV4CSuM",
  "key14": "3an3UUH4kd6UNoEyLK8WTisBmkq9gpmcexBUVaLnf3wr3HPCXxoUDcmDQxrXAXTnihUgkBAnBZtfjbcfBSJWgXqZ",
  "key15": "v2Kjkdih226P91W3KichpJu3BYyU1FDKCjr6rnTaf4WaPY13RwmYUejexM1FhoDBUrW3naU7yhfJ78br7Fa5L77",
  "key16": "3DkaMXJjGy6C2GKzUp9gxZM8caSHns1CKY6f5zESPgdCaVzz2STECasd5N1cBQwyE2BfcY5DraoyiEZTjer8ZEj",
  "key17": "4xfMxbqpxfL3DJW7PdSkNVTDgAXWUuwVkY5KZHgboKWS53YJYAMjdSnRhykS1kXQrFGZTjPJ35pcMXqR2XStL1uh",
  "key18": "5ugBhJ6EX7B6915VAHohoFtwB98UuEeub7eUACEro4JNmWfc3UJSoCGmQwBc8zEFUxia1w25jpb2TPWRJ8i366Vg",
  "key19": "3P7ocCrMKyTtyMJLWo7D7g1dJnw7tSPGaK4yoaEHiRhj3RKxM69oR1GYaK9HNGzWWx2frBB6foFFSfafbsx766tF",
  "key20": "3VSHCq7yJkuuMJYRUqow971zhbWh1K7rJrdJ8eQY3bnk6RV8xKjjgJ9gYXtvd3zKQ35QvKW6qSrDBDWotYEBfxk8",
  "key21": "3Nkws7Gjn3nPdoDrre9D3Q5GKTV6JF9G9MNfZTTv7iSNTVyFQbavRVGzU1Bt5WzScYY86TtvnbLh25TUBtbiUbk5",
  "key22": "4Kx8PSqEQxbUhtuhz8BRupngtHBsbFrzkcpSc66FveGcrdnhGnx6qT8UmSTsCj7sDW4o49CBSzATvSQhL36LVHvx",
  "key23": "3WWNfhsZQ4Goe9eSfiwTY266LYiaurNep2CfHqjf3X62dv598oeCfdy24igW8athQSGbUivgr88S6xjs3yvi1m9X",
  "key24": "4sNp2q6Yvyca9ApDTMjq8DzhmkBXUugf4tSLbtqizc6k8KTUqK4gtBonMSbQRb7o7JXgmiApNRcKG6GKRxybRu26",
  "key25": "2wq6f3dQY2gcMx7wsAu1sZ83jZ8kyr8nAYo2fskZAkW9L3mizDBUR4EsYTuc5pbnfUwm3SyfdSJ4uQHJKJ7DTxG6",
  "key26": "VH3uR924E1RiKYi3zfWW9vhUr8YznNbqBgMeoQBN6gw9QA5jt7A3cKANrosKQb7asFYjPNqSKNkEiLx3a9WsaF5",
  "key27": "BQ9ApBZE9bftxLyH9o9WxFD98Zofu4WRhJFfJntYo7uWyEEhco9PR3ZMVZ2Lvue6zhJ6M6nWGyLxktRE145FCWq",
  "key28": "KB7wKNa3VLtD7MnG7yQs6H1JbHBdLCf6Y67uDFXeZwSNr3uZ8UMz56rKeS1wuyauTHo7rkxCqmKst6yyxVCeFMr",
  "key29": "5Uam9VzWKCXykHBaYbLuMsY8tygT2Avo5XXbHaSeM7tJLZJwyZd7fyQtMR9pGjvH951FtYP7WTqqsnpnP2T5NadL",
  "key30": "2RTMztWR4z2qnbVmg51jsJHbXwEPTvxf1zVAWAsaFDs13ZQsuwrH4u5s4Uu4yQZQoWcHgLGJo3qRmoaS3d1ad3fL",
  "key31": "GoPed6jECy9sHzSLxLCopcWooCzisZFg5xp6C7MNPPypwG3rNaSB2GeDUJTV1i5zZHyH8659eERuh2QmKwZF8BU",
  "key32": "2umBf4FLR12rVEh7F7DVRYCmPwaK9kLQiJwL1Ax9THnEUruKapXpmTV3CpkDvGPQzpY5x9z8MbUD16PrUYt5WzHq",
  "key33": "2yfVvSS6Gx4LUazRcuYWskTJCpBcUGLQy1ZbQuzbChpuBK3HBzBTNRSaq3XzXNkYkZpqwAAisBKTLPDdCEnftZfF",
  "key34": "5yfySrTNd5DNYJE5fBG3k1cCcdzt1AYQQvE2LPq81evus2VE79yDv2GtKeXzj3djmQ9fDL8jEbnMesSQP1sG6Eh3",
  "key35": "9fxDUtS11XmSVbQv6x3KxAM5FxWh98hH7c1mHgBCxctWaChYMMXuhWNtYfvZPS45YufkzGzDcBdV21As3yzRQ7f",
  "key36": "5De1r3rUF5jMNSiJLzDwKsAfPiD2gSrqD1bqn7rvtYL1oGCsdG2Avie7BvNxTCvDMxdSK2cHjoBU5PHjr49ziwdp",
  "key37": "2paFVxm2dMLpYtRChC9PQ9FBbRLtyy2G8Z7Sx8tov7teeJsoZBhBYjKVFQWz1SEzdSYY9oEHixx4HijNAqh6gBJk",
  "key38": "2P1VsojougNk4LHXtTgjHyxzFTPafZLLmnD2e7YgbKNgyB6m9ueVevp9ptm63VNZSULTTSSaXHqPqa9VQ4UrfqZ5"
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
