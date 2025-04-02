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
    "4VQb9NzYwtbpuaLSW6M9BdzhBKDSazE3GuH7uQKJjptWpVgccBJBgwzij642ExRk2TNP9e5VPZBtWhZ2RmeD2P9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62zn6MmhA1HAzbi93FVVgUSSxkoznZXCeqPStNRwhYzG6o6gtCm2apxj2yAQbM49c2ZzZJ21sLKVcA6rux9Gbe7E",
  "key1": "3GzMoN91AzRTvoWnYQhRoNwvk1pSzG44CFin5gQuTJrKj8fZWQ7pffqMFXzodZL6bRjRhpDAiZMKdJGrBY8ERU7q",
  "key2": "qwpTvM223kkojxijTzWCvBgmymkqaX2uLUo5FWje8bAWQUo9bmUN733u5eMqBAfasrgdkeFLewWCyLy1Ls5N9oP",
  "key3": "2TqDdBREPoMvirmYnzcXQRb8FVcQNchr4Wn6A1PUEZW53pnWNhTu24hrVQUUcF6oStsqEGrtwmbnbM9N33kHcBcf",
  "key4": "2H3Z3bArxnrkoDycuDepMLpjuCg8bYPGknM4Rwb9381xXP35dg6CJ4YfATevM9KmiASASYYbJWxvg8PnDLEadMEJ",
  "key5": "4W8guSYXcFvDDnckS8jytaS9mWuGxsknqTqdEtqCA4Qh316EF9pv6v4zNpVs3poFhKmr6ifbA4YV3WEfmnnWMRdH",
  "key6": "5GUFMmDsa7tEimYnz3PRU1j2xkBsvczjZwwVNhBdAc2XY6nB27ux7qwsbTbGBYaNDemP1HRQzTWZCaQDQMPWQmiJ",
  "key7": "39cnmixEJhimmv8fgJ2Ed4mWpxS1gcVSzpGb91RiQwDCeGCP8DzrttJK2eFKLnh5twd5Fg1QifdDd46nNNtWbs9p",
  "key8": "5xdd591dyJ4ZqCjPcRJ27KDJrQfThk561hEJqJ2s8TxHK2uG6etsLcmoCCF73K5QsEDacQthp6cUmy82H38WX27k",
  "key9": "5jr1caqCH24QRCxZCM5HYiYjedtCRCJVmckJx7e6Z9WLa7XZnN1fqg14nsXtDVJJuHxejkiwZcGSi9hYWWwDFaJQ",
  "key10": "3rw4SjWbZr38wN6xn4mFrACP6EizadudfWpLDprZpt2EAyiZarFgwiu59S4gakWTQQa9EwqcTWgg25PoRcNtmgGn",
  "key11": "5eYbaV5R3STCJZf5XJ1HZxdSf2dSuKkcsas7Vihj4TWxejZn6erieorpYxgffZWdB3Kdj8wVqYT92yrqjz7eAA3v",
  "key12": "4reGm1CD7ykio4ozrYCR5W5EQ1ZwdjFLTSwhLvq7PoSt8MK6xUKr9nPk6QQLsvy81eiDQyy6utW5PnSLvt69MTXi",
  "key13": "28LTTv9Taj8i2p4myueMRLbRZm69FQAzJ64AYRjoePjEcJqvW2gjMmc7kce2Ja7eMzhegBTp6uFyjbjdey4TEbDR",
  "key14": "5VxQHFKwJe5ac5sx3tf8NbWHkRPAeMrpe5bBZXr42rgF5LgZEqjvjuQRWjJKfTEYFz3H1W459SwCssGbrkqwUk3k",
  "key15": "52qYbdxEJcFgc9TcSuRs9DbZjnaEf8yJfSxTpkJJQAb3LC5zcjqYjBhoQ3onc2EyQxesG1cQLs6HdwufqdP6bFoY",
  "key16": "63LgUZoWxNV9onQwBYaRcQaogVAbxAaaadzexbkLthGVzZeysegrrBY2y2KYJUCwZLePVxPP2D1SHLFFsMyknMnU",
  "key17": "2iQitZHjKEz5o8kiF8AcyrzA61jKMHri25xKWQjM9hzKqHJdCvvJda5rFbCg5K8acPh4icdsqcdsrjFSpWh2gUUM",
  "key18": "5RXzLVXnxqJK49QFej4dkDa8YGokio7xA71hdC4d9muHsgEp3oLzkG1DuDDt9sYWM1ARr3MHatMZx1EPC3S3m6wJ",
  "key19": "62wahfxkmqDFpe3gSkLKn4ucFf1YUnRGd4k2yzuVP8VQNoo7gQdxPrE53C5GvYYAk8SQ4D4CLZKQhHtnZPQHdU5Y",
  "key20": "4ogdMJG9ZZzKH99Du6DNxCr9NNjPCgUrd9a4ZZScvmbJH8MQdF2M5cm9xTecvLjcomyByeyj2MRm2FGuBC9Vk7Nd",
  "key21": "5VR1SevgdiBnUkRSJrzwzmn9CBGRGJa6KJu4XvPMvGmfBumGyByNyP2Vxdy9RfYJYeymbgB1mSg8b5di8jtyh5dJ",
  "key22": "5jTWxYSeoHc9VjcPZrdE9J7UpfDS33nRVi9x2uTpGCHBUrbfNUGYVkHYyRha3T2FmWYfrHkhWUvzJgjAyo6WCibs",
  "key23": "5LEhJRm5aKgSegQCW3NZiQMcfp4HgXMAZTJUjCkWMX2XDzjDK9kQ38RyD3dqr6MpNdoN7tQsC8gqrF2tByvDviEA",
  "key24": "5xWKXmTNYSjP3ckBAJeXLZGwtm1uTUaVzUUkRgn9MFGqHjiUqPsA1JTUAU45Z1ia68SqarCXG3c7pCXCGmiepzR5",
  "key25": "2Z2mP1ALkUtvVELQTbr3DkCTcFQQVxRYchjuWLRCCGf3ospJb63GcLwNPNPuRAp11EXCMmQKwn4jeC6B27JsAeYf",
  "key26": "3iTW5CSMZqK7B5zzjF5HJwb8yCq6C4rGaWcuAdkM5iUyBzJcdjbyffBPCy1dgwPgK9NUNG4ZjTaEcywdFA1TNPME",
  "key27": "5e58EVWLzLKGB4iaZW7ZRj3PkHNAVSkdkCdUGitiJEd2wuQUmA9CTYgUF3fdX9ruMeyk3EVwZ29a86CzkfMBtZtU",
  "key28": "62PovmJq5s8T52J1C9w9ARR7YoxHPzhNzHnqGVo9wQZXkBm39DsZRzjzLXraCpTj6gcn6kAGaAwpLYE2y38tQNP9",
  "key29": "4Tnb5jYBdgxmHCxkDygfQKq7Fxz9g5ei5Sp9RHDPr5Tm8FftENokkRRr2XRwzgFYHDJ6ePcDSZrcYPdutJJ8Uuuj",
  "key30": "3k7vTKB1sHyWdphmvdM5bFgvErwtXHUuSU6AQo42vwWPJ1wNxTz9NA5TF7n5MSXaZnB1nACmrtuVMWqAjku162WJ",
  "key31": "2HoBXJcrApDJL873gyYDpvkvrAfHZDDdNVjRFErmBHMvjRrbfrNjWj5vEJC3mLZPmQSWgRkhwAPwQxShLfvVcUQL",
  "key32": "VgPMEqjSVdbAeUeJMn4Va4QLDENPXsooWWjnhTtB1k492SzwDrXGW2kqE8t9NNBj1iMANZGZq3pntyBfs4DJNRj"
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
