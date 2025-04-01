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
    "3W4SfVNS3V6wk6C3KeoZ6XiPr5jWLQMzyX6uH9TsMLvFvjFrevWEG5LvSVN5vQXXiL5RzqJtTZixFaPwyr6tAy2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eJJRdr4h15RdNkcKqnDqvBkXangdcZoMKxnA7JRQKWSbfnHDRCdNdknQZGkxEmKw57fDaZyEcZ5CX3fgUQh6zUQ",
  "key1": "2uhcUvXG1j8Bs9hMYWTK7K6oXxJQpuMYhU8q2yWhE5EyU3G315q6rwGudX5j1iM4Ky83ifHrhhBnMJp5rxKdDxYs",
  "key2": "2r53VgcPui2HJe1TroYHvnWoQdKBEayU5nFbs4T4RFyzXcabwTLsWcMeu2sspWq3H6EJq6YGzWnmZ3jB3xyZy5kv",
  "key3": "5xG4A97D3Nshz2CfPDypGTZShFC5HPAdQorCtPXSt4D6xrSHdSdhcovYjUQAFyCbTj46PpQncDUrpbbW6VJSWqYL",
  "key4": "woqPcmaoV7PHEL9a5waFBNz2LtPmjmTL6PGNLPeoPF6CeVCWJawRFp7bdUchLm8EbTskdnuChktNK6nBEewrRKL",
  "key5": "43EKY9NC4eKK2YK1UfopGWr2rWrUsE3As9hKLrJaWZPAiiohVbCfdmKJrbiDX8ZHnvkpQ2Y1Vtj9ko27VUbF71RM",
  "key6": "2bziyyaGp32ZJsGFSR1JubkeceiHhYiDAnE3MbnWJrPfVcxd5rcnPJ3xCfDDABbLowk7fwwBWSxEh1JaD93rG7Yh",
  "key7": "vpGNgnAj3DNzJgWWiuvZ2Tph9vw11EeYxqTUAgsBfSYALUjH26JciaonCoFPpXRrQPSRGF9yXJCk19L8eBaWcze",
  "key8": "416QUxsvf8VZfMLRPxvYtvz2mZG8XD1A98gwTYYkmP8h2vvSVMC68kpUTpEhLVGJhMkDATuzs2y3dxX16RRkitqx",
  "key9": "5sF8mZSM5pr5ajE7VN9h4W4YC6PePMuDzCrDE7M2JXSUbt4hhJucRUKtd4LAnZ2n65iGv4eZrqyedLgdF15drxcR",
  "key10": "2UK1aKyw3Ukz2FBP4B4AoCkRrZrN5meBByvAhibSdWPKq53UmUGGbfRKfjhHDwYKmxy6jj37mSkBSbYAw1NtBXqm",
  "key11": "618PPhydPzJrAGNebEdDHgs853sVGukveVEbbUAwoJMGhMuY16Nkn7c4p4rDUsgmjPNSywFQzdQkwsWhWWbt53bR",
  "key12": "5KZEFFYRqEsNq91Yx3FdUqBqZtZkUpz5LG65tC4oSyNmFANRQgRSRnEef9PYjVz8FcgWmPXMCKuzKWXvUHRciPKg",
  "key13": "5ANqHNcvKgG6eUnCebjgdHbqv6MNnuRzwoC8ZPmr8G3gKykN9rTGqA2chzmMheDccUiohbhFnuETEArtq9UYMnx1",
  "key14": "3BgfMjNoLEMzk42ozzxEGbJ9FdNjcHSSFAmarQCJ2s1L7fgzrtMDZKfYJ3TGWyjLusa7fxgihd6fC5ckXcEPxPLP",
  "key15": "bKRJsVreKnEhg2NQsRSJZw6AMSiTEVbTivwRUYpPvNsrqbVYcPNxDKyjmXfLsoMeY3KzW6gHCfepW84ej87B3iN",
  "key16": "46U6NGwhHKm2HEvGmMZtyPxEkvoomvqKuJnkTiv6WseFHpU1r9wjyJSBtUJYcaUe9usHRN1UPA8v3dhkE6uq2jck",
  "key17": "3gvAVgtuhp87uiw13wUJwxEyA2yvyZvJ7xkyWaccVBREJjP4kPAikpp8Jxq26SLB2QE8NYKMtJoCDvuDDwog5T2y",
  "key18": "2oBoDYRy4MTHvQMMmLAaqBzo4KFAuC3xEjJY5Lxqs78zsP8iaJ3VisBubWn6vnCXxSCY8gmZ3rpY6Tq9ZDQgpgC7",
  "key19": "2bkaxU5DsKRE5KARqN38fE3HBBARBrdXdfuWXctXVwUFtWj6WQEtnaE7d2pejR2rrXn2qA27vpt8qQwFrs9S7WNM",
  "key20": "3ztFh7fk9jUjH451EHn3fcEbTDVvVJxEVZ3KnWePdmYReGhKvQT5s1c6tPqN758y8B2LSpSxrn9cnqjNsuSQQVgs",
  "key21": "3FdLqKjZaXb7UFMTfrnjqhPraZiArnMorQQr1ZWrVKKFoH5TtukdMTckpT2t18sNa44ZuSjRjR4u33sA5cxQPL5f",
  "key22": "4kAqUoCdiMxmEGL5qehjCkZJ938qVP9snQoQdMyygDapPPUNeJJyHUx2CvKZ9C5CNAmrdPkneKrGU8ECRMAcFeqp",
  "key23": "2PBRZxRnHgbrjyJtjJBe3hv6ax4KW6mRXp5ahbL2x15NNGSDgzjVsH2RQcRoYDhm2tc4aGgj2dCLdGRFfAesZJLQ",
  "key24": "3qGq1aMdPpFvv3nSb8EDQYgxQWAcPQxSyhe6JJPWxo28gbjxnarGrpCvSRfRumcCr1cmX8essVeLGJTXJDrYobeU",
  "key25": "HiVivbYKeqf1EmEEqP7FCeJFgxMNP4PnybaJZp8xXFR9Fs4m9xfBCE1tDtgT4heWu6bngpazeXuw9mA4JZc6738",
  "key26": "3evCHmpUofHLgLyQo5hfJ3q7EyoZn45c12gCVuVQLNpNTzBiMnKHPNGFTiEgeWzyzrPjGJ34VA81Nq7dNaqLJ5Y5",
  "key27": "3YbhYQXhupNKEbqXbGF2dv5BPJcrDhksMq4C5TSBmcA5GMK8NfQ89dsbs5Ct1LSYrPkMfBMco1N1XBeadVChF9Wd",
  "key28": "3xinC5fGb9G5t4ZyALB69V1io6dYD5zraKaKocEgftogV1qfMx2oMHWJxrTbtByiuDXYEWv8hA9NB59bQaHD73mo",
  "key29": "5kGp8Vq3YavxNQ2GeW2xVcbBbChmkGwn36LN7k2gYm5muHVRKdMhHUwyjyp7sjtdj79PfqduEaE4YtfXjrDZgUVk",
  "key30": "4KUgwDLoexVsMFGTKU7a8odKivwaQtosbCwZgG6JjfDd67CRbCgzheMXgWaAcimYUBxHSXAiy4yNQns86MPsRnmh"
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
