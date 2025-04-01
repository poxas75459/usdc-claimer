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
    "2sGzbaiwrVfAgX3LFiWayEkWYCLY2Ud6iKyUDVmaa1GoanMDevbyszXcwyJsfRS1vmt2hTnRwRLSUbK2rh3N2Kht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7xm8s5GpxQPPi12tCFRouVwvwsHZwjLyrPp5H2hpr8VG9H53t9KJ4XXC3AJQnCMonEfsQiZprndrYsyknmaYXe",
  "key1": "4qJmN1xAeMcbQShNwmwXp5FvPe7AmsBQkT8e5AxMuMsr1b7xVgeG1KkXduV6ckf3cq5QDA3RUphbKD8XjLdRJZJ9",
  "key2": "49PX5ZzNycGVZwxdAZeJAFWjdHu8Zc2LjUwYq18sjYXcF3g1xagXJ4bSAFWKVzgfVxSuUvUnZangeQ1qCuUbFTka",
  "key3": "4wQZTe8gReQ84DstkrmP1yv7bWSrq6mRgPkBGCH6GMW4VAue4T9VWRB2gXanKRp8gQAw6ZsDTStS4mMPz7UWDg9w",
  "key4": "3Xf9iFoyRP5FJNVoxLXPDk9Mo6F6dPqNJWCuioFqyjA5PJcVweCiMquPb3WTJVF8Zr6SDdHVhBJ4Cfvuh475QaoH",
  "key5": "2ahy5gN7VKGRTkQRucA6KiUBhaKRRgkEqcfHHXedjqdCeG5P7JevGYdKVKtG8kQiG7eYR2mjEdhkdeqH4RQ8GQFv",
  "key6": "8Wmv6uS4RxXGjwat2qzLDsyJ5np4gJS9oweiZ3THEbi24qizRiixfxzsiYww9x7TLADdCsYYhmDvw5JMzst1FsU",
  "key7": "5nvzicFWigbX3jWqfbWJrJnmvZVScFikGGXmf3Dt8owdhC2s7mYxvaD1u9Ye4J538bTcgSHibryze5HqedRnB7Zw",
  "key8": "5eydHBRhx2Z8A1sWLHMA18BxDYDzxY2ABxDrkjXoZEK48GEX64A3d14LB9Xj79gnA84QMCGKwz43rtVeLX6RE4JP",
  "key9": "vXBqq5Lofn4CGqpSKogaPmVMqF54NwPPmzwThxpwcAmfBXxXWBbKX4oedipeHH6PPWchEn6v8syNdKwouRFbCAR",
  "key10": "2qmcrix7g1phzBd2dmi9oYe4vo75GynvUnZ1GYBmHbV2yRrRMB92d3bfG47M7YEa95WKGHL8QFX3hbhfDE3NnTse",
  "key11": "5v49DBJUsk66oP6BYPRXRHzDc6QiKna8QkiuhHprcn5Hend9o7VTsZ7BFHsgcHJg5jfywPdnWgdcBQgGPLcBjaKz",
  "key12": "29E9VZ6KU6rkpCLuinb2FLYysaiqtpDgaXgtaGJbBkjuYwfadcwMVRxgCHuSa2gWPdZZLN1tCsiaLmNQ9FxV3RVb",
  "key13": "2u4o5xkcwixYMUV8HF8Lrdb324jDrVc6wEW7wqX1jxXGRLZzW5mh52R1YWyrEymLRQdyjPiry34CEH1Ka4QvAz7d",
  "key14": "5HgLNWvzFGKegb9DCAF8foXvm3PqhH5G4skNcnvuQKBLRn5TGBREuRPxPVhPhHTRHZ5gYctzcKYxGBCbqzVisAb9",
  "key15": "7Uzb5YLmWQJXyZezaFK1krSZkdMGNjWWY6hTRRZaJrQp5UZbZPjVHGWChf98f58XSP4t7LwmJ54YBdvfvkZxRL7",
  "key16": "33tqrRqwubKauNstPez4TR4pie3PnvWY4Z4pCFuMnQUmieXVuYHd8QdxM91KxhqA9jh96Ad3HAaJ3cu64ipGd2Ku",
  "key17": "2a6DDUZoKEJm3zAAjT9pmsNF7M93Fv62AV2SPfPRKzXSj8EbDTt6ANSCunhjxNaZ5acE3jQQ9QkTBDcm8SANDJov",
  "key18": "sWsmHjE5oKpNyycnNFB9uJnmJmUovL6yxJqyErKDUEXpmnMgz727grPG2ADGcj55EFtvmUbudrneWaDEuebUoap",
  "key19": "23bRYjF55w7Qm7T4WTkcWRum598BG5gh1gUtkJ7km8UHmLyM35NDj1pe8585S7rex7mHeSdQTPhZ38cPjxLK3kMj",
  "key20": "2thbELxp3mTvV3jf6MQk2yZWaYf4YP7fP8vvTLUuf4hchpM7CdLN9cqA14ha51MbGCMmsVn6z3VgdAVZJHL5vUqc",
  "key21": "5Hjin4Kmc95kmv5ZJxyEntwPuJQCrUwyyuzUMTYQC13gAFJVjBYCRhgfPQXutU2UsCUJGau3nwDNysmZWfq8TGVJ",
  "key22": "Ln8QGC7GHyiWdAo28U71tRHyCEcAzVZhPtR9sjsriJKAoECWvrDT1DAURt4AH5Bo5QYxo6GuiXumJEDpoLsq1L5",
  "key23": "5zx2F62YnyYra93Ne9wf6httZMV1ULicTHC2Nvg98h4Xo69skdYdVVtJUSW1H942KYjJy4efrZqcgRJfWGZ4KEra",
  "key24": "2LjYWSPHYtJ2H8Z5cDbKLPXbm6gfUDUU1ypRJAHKBjkkp4U7ybx3YogzKURbu4oh7GTgf3QE89wiUPB6g3SqZS8B",
  "key25": "4MMg97KG4yEZkKu5evjCh7ud6Tkrxb1sZVyU86Cg3r97JYSu4Zn57U7ZMxNRtKwyZvx38td5vxE1Hk4bVvti1QtV",
  "key26": "2XxPF1MRhZjsLPD9NVAqgnAiKFENWWDYbWz79vmw6cycbaqy7avfgfoxNJBZstMQYio421LHmhiYMbWGpmtdMqY5",
  "key27": "2oS6nxRncYhsNN21WQ1RXWbUvKaHFWKiiU453255sWgc94bjrWPyzPkUGryePwx38BrWXvJSkGD8bQdEw9VsTu5R",
  "key28": "35fx99B6YR26B4dhayFGNhm2T87JbX6PtE5N1GWXmrAPBdf5YrTxgzUWsL2zwWW6VCusCb6ahppX8Rok8u6ePHBG",
  "key29": "iR1TGKxzcC8PKAcNuuchJfCtUimK5wbEEMtWLmrzYCP3pkbCP2kDuZkS9T7toi37LjwZSYUDpo1XLpEbRFxFZzd",
  "key30": "5AKnYGT8MRDQkEEmmDRkdVoNBces953Yc5RjSWfSoEzvh2GAhnEZSHLPCoYiwhPLbJFyf4fVu7vD7V2Xqomaf5fd",
  "key31": "2rVh697DQeV6oqToJ3ijDsVF3oM2YPfbrD4oTXMorc1szrn48jQwrcYHpxU4Ey4ggKf532C1yMzK48XfzPDsUL4J",
  "key32": "3VugTMpJ91yYQftFrBW4w68f9MkkuEvqLMc5iHL7TNPJyXLFGn1nZogVRiLqZVSPV5odP6zMT7czJibf5f6eVXGC",
  "key33": "35k3i1FA8kYCxtQyP7PreVhfFB9bcrDJcjQ1wiPBrjauDyNkuT4qzzsYb17RZ8pefw1A2w8zqMPWquPsuL1wNNc8",
  "key34": "pGyvJWQbPM7J8DXUu5qTAv7evrFSn4RqSJ55LNJ5Wiv9jJeNDnPktdp5wxTNbajJvZZYrX6aUfFfCMgSkA2snwb",
  "key35": "2NRfzyinPZN1C6S5t66e4fJZGWdUGe9tDi7r4TTPyw71MXrsYWzn6yQ6YZCrj3fXuHrWvcusdVP5NXa2NRYhfxeM",
  "key36": "46xFES72WMZ2tMzaqCZao94CpSzCm9X7QJsQJp42pYmdQworJRp2kxdLDA3nSsb9imrszSACQ9NtiUva7oJJwaed",
  "key37": "63SrgfnPpC6yyDByZgbiQarckLaMyeX1h9KJU7ETrgmBgWsrEDssbDmmz7Efsw9syBX3w6FMUekWaHVJFnpcstVL"
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
