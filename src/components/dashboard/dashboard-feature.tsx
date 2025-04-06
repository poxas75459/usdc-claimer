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
    "bzhqiRRDpVCAtkkeLusdn7XfazfEAxHqqYe9GqviaeJeb8PwLk3mgMN8ZgbKt7nvbXFfwST9CXg3VQ2FV4r9bJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AeYfDa5MmLb3eeiYeUrTGkUTLiiwVs8zxkD1sAV1MoZEsygYosnTU7fQ149SV8xZtMuW4JfsUbzh3x7xxWuwq1i",
  "key1": "4kcKMf37rETRGgFqS2MgjGK9CeQEphypfE3nc6Z5D4QhVjMkYF37mEXr3Y85LYVS47uA4no2xWvxqwoGrgBZ3zKs",
  "key2": "59KwZ1omcYdcx8ttmrYktVwnw1QroXmZLj6MyASybxPNomjksSXo4Q8LP5T2CHfqV46uVmeSTCsQgQqCQfscbZMk",
  "key3": "3DnqRaCbHJn6xo8UDnqTfbRGGUqQXWSKwHFLh9gSSGEr3hgMNk1XLQ2iE7WHeNCnyKCpMMnayQxQLQFVBy6xA71U",
  "key4": "2Hjszdg8tDhDUnJmHnvcjZ38PwYXrrijsKBc1aAAF9y72mukv9SkKpZPP69dTV95qPG3SuTrdDZchBWChYjvhdHi",
  "key5": "225q5a1D3v2LDATt87ZRp4CnNeRX8s6Df3Z5hipTFqEdrRWMvpPkEcB55UuCQr5uoch9PDoy6YJPbRcsZjZAyAX8",
  "key6": "cTwXLDhtM2UJY3ZZdtFStxo9dx1MgvG2gaufjZCass7NPzUVpmMzCanFZHwaTpCXc1vaXehKuXB8JfuqqQuTqVB",
  "key7": "4biA4Gz1uzFE3koqGbtWsbx9j17ReZ2BwZGsLJpcMFLHSfVci5xr5bJX6Yhvkoa9dQqaG41Tumb9Gxqj2VouKfZY",
  "key8": "3PCgvgF98PZVVq86ufQTryo6nSBbB5pRWAYFi6D7NcKr1VnSLMXbk63GyjQe3osxnkb3tH9kudXsdu6FnwsoDpoD",
  "key9": "GZAcnUdquZhLsykGdCdToE6VZuVZozFiEYdkezTjqmZsP6x4bsBftWSJa8SRb9xFX8MJP4Qbcm4EoSx8afEhGKP",
  "key10": "55igwjLhpcRLwpAzDx3FZHr81oSgXNyUcnYPZb9bkBR3SDDjvSwzryCc7sETEPFbFJ2JMEGCUBcEPbRGPDsUDBva",
  "key11": "2Kd7VvoWRrtW8FNJzbRkE8dvC8ER63En4dioppPQj1MfVETW3QgQPT7dkW3wtcz6cbn1JssXaTsT8TuRPondMMuG",
  "key12": "5gMadmYNdxs65CekKTLmHY3U7sXLiF8byaePGpzUX3EQExyN5zv48oXS3AN8o22ZyQs64tKyUsyFub1BSkuwUV27",
  "key13": "5GLBYf8SsZCfbWViDAmbY14MpFPCFvd6fczuPEHRPdEYU2AQnSX2NQzbqeNDedGf1KK6pGfwzyRr7BZg6esUrwvY",
  "key14": "4e61vrgwFK9YcMuVNqEtKfCTjk9yVsB7XQGPPwdLN7vyJPGQoGxZFWhZLJGyVFADMthLmtnzHX5JEQof9BPiMyGU",
  "key15": "tfvS8zD6gAkt6UQ6bGkod8ujTF2jbszz4dmz2mfKCBrq6FWB34h67joSbt3PHekmeRVvYxxeCsVCtsiPdam8ATc",
  "key16": "Es2GMnShzJu9M1ixktkXvwgyJvMJ1q4enHiMSJa7T2cugv3sg19SHChwDSGLa6aPR2oE1DQF6ZtKBV1xnRBKmB1",
  "key17": "3qprg8jmMAEQCbxREtaQ8Sdqjfph3NiMs8q8hRVZT3BtiVpq4DiJTvj1JkySX8e2awAFZ8y18ypRso89rYSyUFb5",
  "key18": "nLv3zAJJzLtxPvNNqMcnE9uc1cgdBJx47akrnCZMSzFvDgGeByw17A7cbNtV2skyPA447DvFtfs9fiZd824JE93",
  "key19": "3m3UHLV253NrY2R33G6EnXzF4h8gKrFV5Z2PgVRCNJjb8DmR6esV6x77TZEuFJMnKPbYGj1CNsv17bHtRpR9mWTY",
  "key20": "4hmSczJ3zjbbtLNy8Jysq8YjYgb2m6mdX9NLRcTLxM6DMtUNGTwNDmYSGj6jKeq23wVGRkH9rxjSm5nz37Rekpwi",
  "key21": "2hcNhxe5Mo12xV5mCBxf7drx5RrcEhJz3semG718AspS4XE2zUFEpvUzg2HYUJYhSeg1gNT1pvSsAy4FSZmyR2md",
  "key22": "4ym76SD88owLtM3MZoNxHw2h8n6CuF5Jj4ZWWxMPD7JpDvovKuGTVXUmzDR8P6XXumnEzgqWUfLdiWkc3ZL1ykmc",
  "key23": "VgF9T4eWKkn58Xqpszww1sMWC4NGkEfz79N3ixGzpYsQR4x8dwB6BUs7nMrV1WsVeBHtMc9w5DZAEABoxXNjEZC",
  "key24": "KnCn6e7KFCr7x7v7i1QxFK2hRbhCHYbiGxH5Knxa6RrmJ6ApvCZ5123bo1pi5LUUJoSMpvftQxdxkih9wjYzLKS",
  "key25": "XPtmVzsNNseMwWYtZT18QTByqDE7wFEDkjdXRbF3zM9AZrGDrYaKPvWcUaHTpVD4sexqj2JCPNhEwHC4kEJtFVM",
  "key26": "3mftmng4ukwKz64cmNPNpwPHXHTMRCHmuioSk4pz3C51kRkAW9tn8omKaYDeqgAdKMZSpujho7ZvkmRudPuGLrxJ",
  "key27": "4nuAxb1jz8m8uBDyfx4F1jvTsMMx4gd2weUZKVCEqbg42RTn21HP5onuKyxDwkwcciLXzRch5UPftaezhtREyLFz",
  "key28": "3znUEKDkzqCgYDdRMTfMAnr3VBqfaCQQkiQja6F8iLNpBaUS26zTvz1UqSEz6pzoUjrpXEu8FFBZue2vKfyfHpqG",
  "key29": "DNPBicE5rbnjxpv5CReqyqipdAAgBbLgEZLv6AEiMVHdLq77eMi8MUau3ssQxdYHKnB1aB6Ys7VrdYnRSMP6Gp6",
  "key30": "QgP81SzgRez7DbucFKFcaavUtGMN3yECjZ7kw3FfFJPr9Wc3MEapbBJXiHskaL7oN2G827oBdttWPFvRGggiJwT",
  "key31": "D3bxKXvLPTcALcDReZFUa99u74ubE4Y3GcDYq9vvxvyQuvuVrGPfyUZkCm9G7ep1BXGLTKoSVdcKsf1uDkfLw25",
  "key32": "4dEGym5LRyGkjK57MDUmXztpHHdDKApfpWhgeeJHBSBV6coH9jV9uFPUKE2iqTHrYiTTL1LXJ9VAxhjfyAHCk9k1",
  "key33": "33cvWcdx7tmF6M4uskdZEkjPH1mRgk7cr3fmBv4JC5u2zSq8AeagTT8Sk2F42A55AH3HzBKtPviH2iBafSW3Lc3i",
  "key34": "3TTQngpsNXV85Qu1pxw1sDEuNWaVgCiU6RHgPoaqVageZmq626rXXSF5YkjVeaZ4xSHuX5ZSv1GEF1BayDr5MkM5",
  "key35": "5nCAeMHrq7sA68QeW6QUZejdfF9cw9J1UnQj34pJSweopZi7QNYFxdGsWzurwo1mLXwWkrrUxvFNWVWAdPvgZ1HG",
  "key36": "3n2BaTvGNv4jEXWCfhik7fHufjdhEc2JLXsv2ditieYKpBF8Yh9DDTy2QH2aqTRkAkBT9VgCCcQZZuZiQU5MPYeF",
  "key37": "5snBKKTMxVP5w8WhCRZjXXGwE9WwUFxsnF77P3HJxZSj2EgvS4THhmBrYFN2ijefhaNskquXFcjF7mZ3uAjNnmBU",
  "key38": "fXtzTW1vG3ZBYB4cY9U5bgfP4iYxwntK2UzVd9qDShdajBWHmFR2TxcF5iBdspCs76GsTnEiHkTjn2bHnr1rFHU",
  "key39": "4wkUBWW4wvPFQMKHeARNijeupFmmCHqi1drD7hsKszVrUDcahzpcgX37zeGC7NeJuHchvB53oFeHPA7jgRUhmq2",
  "key40": "5HBdsXotqx638PJ23WxTTzYy1gRSw9GrFmoJ2DHJ6SdtUqt7tXdukXu6zwTn7NH7NXXHp7jhXRVCp4eBYpVqCQ7G",
  "key41": "5kVXNPG5N7oJ5pUyQjSuwLaQRMDpWnoHKSfrmvNNZoNXtr6skVZCgtFT5T87hVU92bFr2tAHTKPRUBhwE4uGz68E"
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
