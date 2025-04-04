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
    "HtVWyihxr2VQKx1xx7YSv5A9ofmzxxmWpdDeH9tpih9y6UEHiTyVVenPrQzYDkUrUFg9YkH8fkUroJLia1VMc9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pSPqWsQgUmnZyM9bKUow6SpXATERpm3txNgMHhHTVU1AabtvzJBMFovHTiDba5ZoZw7WqQvztdVXPr1ms4NeW6",
  "key1": "5XDFxwQF1eteNFQktt1EdG45KBSLJJFLntM8DxQgLCAynab7WpFrMUZPQR1GQAca9cRMN5xhQW6efxi5Z79nGrnt",
  "key2": "5CzZ76UBJkuDpxRdZJ72gJX6X4dSFFmXqpZrUkk7MS9zCw7wpckxAY9B9VcLdwohP8vKNTYPbzXksXzvz1duE7MK",
  "key3": "2CGcoqdQfuWyFsubiuvxtZ7tVqq4MeyPM6Rr9rDkV1SjBVe6oPakHzMF1WZu9gMPmPmWBPcEjfjnWtpUcY4p2SQS",
  "key4": "4rWzGpcC5GwEqvP86cgyxmD9ja8ivsyVXh5bB9Cg5fmAL4f7eWsXkwrgGodyJjMeZHvZqRncK2WsGWJBgTSVgi2w",
  "key5": "3ejuHwZ3ZT9L6RAY5zApzwNQ792Dkb4Q5AHtmA9s5zr4xcucnDg93GMfDvgceZi6CRDjrLH66ivQLf9JWiXpwRiV",
  "key6": "xPsSpRqotppitHSChnuR7NYVM9HkLgpCFb9kFtMZmUEr4YnNCGoaWaTSRkN6ni8LHXa5qW3A45hwAykgnFUsFg2",
  "key7": "61DFjY83XLxYNhLMjdxTnPVRNWR47fANg7aYvpEgZ64YCr2xiS54Ga4bJXVQs17PyXC31pYWUsCKgpjPsFP4uwWg",
  "key8": "32kKvNK5EubpCqHGuhnYygwxRftbUrubrfVr3sxnRxRz72f1nkXszMYHEHPWe2sJkYk23Shyk83guCfo3HtxaMap",
  "key9": "2ytVDjtAg5tGWvVanaNtX2sEDMtS4WGnpLhgP2EXPZfBJNmLMFvVBpCCwZScfDpHkk9r9XgD4Nkf8jJJVicF9Xbx",
  "key10": "5G4w5N9Ni5BpFgmt81DwtdxhzpBFeKLyWzBvveCr2fwfFVg9XY5FTzd12cYq5Y3hgVs7NcbNAZRhbCYWtyw5jUdH",
  "key11": "LerfuuZ6tt3ZECCwUT7T91dcW3pPUtMrmdjZsTBNFf5XjBYMJkuU6Wq8iBHVkzEBQMd4rcst9s6doig3oNC6ypZ",
  "key12": "YfoZWmrcrXRKV37wVU6h4ChzfeZPsisfMNtXj2515RMbgUMCEsX4NBkCSrwCmufovaoPtXnEv2Zx4DZRdes68Ub",
  "key13": "2byryxGYxeUKnrseJD5mDYszzqc2uZUs2wC2JA9njz79HU5A724f4jdk6t4vab4qJucxUx6QVHupDiumYWzJUfdL",
  "key14": "XG7LYRCZa7vo4s9AjPMr5MNcXPVt8AaSCvF7aST73vGaBVnTjgrDzYXaUFa1DULGvHJGL36izeDALpuuXNGwkU2",
  "key15": "5Qz8LmLRoEJKCWcTHqgXGtzQynDxWoMKWryBUfZkrGJuCikTr6zrWnqmsxGKHCGZZZm9eZX24dnCRn4SEm4vAPMR",
  "key16": "2tvwqeh4iHnvvmYBEEWRJjiypJSg4fEwGBqcwvfyjs9HLpqwHv62SfCwbSrWe9rBHMrmR8kr6VaV4Am2s8dfAUV2",
  "key17": "4kL9P41kS45iR1HKbzjBy5wt7Hf9NUh2JqNWNsKFPagqArsHEMEjcW5BPP1NfyMsDbQeVZYFbaMG4siXBpVvYqzs",
  "key18": "2axbK2dxvtSBM1uzSiVjiM8v9mHsV58qkyLf24fLumMbu4kADymbmQ5Ru5ztKF725f3vsBYyh9H7QpW4MhpmePXt",
  "key19": "51fN1R4fUgmGWzANvn7eLPNaKcbjyF3jzfRiKL6P2Vqm1nVTWrtEQengkSe6o7jUiFE6oqvY6A8BftyCYQkStrVW",
  "key20": "4jzSXtg7RJmMx3LzYYrqtcmrEaspCXeUE1DWecancEtWwbQ6oEMHmY82kgKBAz6j6zcwnRaDeMpNtiatrVW3tXwz",
  "key21": "5DeUwQAQnUZQmdxTPKy6EKywed7oa52zZBwqT1LNHvQqyDA38T488YTnBFe9FfQKRua2TGpeKiE7AyLaifuzqAEM",
  "key22": "3p6LGsfKPTuDYQthHmoEhUtAoFwUL9twGExFZcEF4cxW37QrUFWKMEpwGnT3KvGnM8LLSYKmZPKjGZsMrE7eQ4Jo",
  "key23": "eDtPJ4g5vrd4xRxGsHmWm8KWX7dbo59pG1cSq8zBoEhS9C1Xtq1zaRNJujB6bXhZmw4ce5ajYzwFUAaj2ChdPor",
  "key24": "3mGP6taJ9MJh655Hh7LJCBMsk3LTVvBGFXfXJ89vExNqUmRxZJkVnWKGZCmh7xQGLN9Lx5T86Hxb2q8VHgeUDJXL",
  "key25": "5BdR7jLomm3mgDfRDv4mphUkUmA9ngoUMm1biE46MCJertK6EnCMnSoxZQRJj5JTM3EFB3VK6yzhKeQaA9ELnfPz",
  "key26": "2rjtfqR2CEowQhD5SENaB9Mtqv7XyEzayZ8TvasUzgd7oPnFcGuMrZ1xypNR5EkW33WT4n336jrm3zG8HitwKzni",
  "key27": "4a8zU362fp6Fz4gExG6aNwkAasPEQD1jmgGMSKQ4E6kGhFrgdz35zDQWeoj3X3KzvvjrZm6tbddDkmpQex2aLSwV",
  "key28": "3UUsvq4mrsbKRqaU9UEQxXyqamHMcbZQ9mPqDZErEL2gZRCtm2KTGLts6BuGxSMfzFXm3cbUePtT2C5ahX3Xcq28",
  "key29": "62Ly3HUwVCYHTDeGgX1pTger1giPAuxKDUi1BCwopoaYSr5cnHpNwfxYLyEuj1aU3d1aVFDxAVCNDE7uy3hG77nr",
  "key30": "3dMLYWGCMkmUQ6ykp5VkvguREtc7PB57imhi1AQ7L1o52CD6nokAehj3JcrWLH8dKrfELM4o12QRupErMwwf7F7g",
  "key31": "63fhn3E8LsYxpxg1Q5nZTBzCi1osxWcnmx1cdfLHo3ay83Z3dMxLFahQRCkrq7B7fqFdvFLH8Bfpty72e8cX6J7k"
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
