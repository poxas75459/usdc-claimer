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
    "53n8hwvo4bF7WdFaxDYgQrvA81HFsC36vsN6LMjzhUTtLHPnWBEscbod1dq1YSZeswWbtPik9s15MwcgAhX4i7Wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihXphXEKt3JJybg9BrLxsPXtwaPpv4ypizLyW3P4o7GpbfxWYQ8h6gsuaguChmB7qFHcWk9VQiQfryWYo6qWfzU",
  "key1": "4HNjUhUVqdAjSvwvP1S53KzoX8WLXhHNBDWP6jdcBEXXAqBCKxJfWiCXh1CjKAcTqUTHKvvQTtLeXchX68KEHx7o",
  "key2": "59LhDGk6BPmh3ayzWWwUM4YBgwuRr9VWcA2JBGYW4U1L36AjbdRytgE8suCpCzbgJEZZPBHgSZv8fvsaaD7fHWJX",
  "key3": "23cnzBAmrm6YvoSZkG7faEDnUcThFFNo9q3MCCZF5f4hwzHSg7sgWyk1mUExFiPgNM49oau6ggJdMaR3n61CPvsq",
  "key4": "MUXNXbMesE18fTkbWNddCxrdLqhodXfb4S2S4NyitDKLi4Aqm8NqxGF5kzttwWF8mUYGkiyPn2oDjhWrc48poQj",
  "key5": "5u6D5yiuJmV4rtjFrpxc3AzL8om1MxS2n1qFApojXRdpkAeLUvMgs899gdF9kWBMmaQJ3xXCKQ1LPpMop5tXKobK",
  "key6": "4RTYUZ6c5FQGaHyVsJmbiUiYd6j2kCChiwZEcvaxUyBfEr6A69xnZq5oCsUnaLKzMNcc4NjpFsfUUBWGkshVDyBr",
  "key7": "3TADiG16FEk6Xiv71DdB17MKABBeDFB4wpaiiEyH7a2j32vwxUvgXKhSPk7CAceeQJbWcPLDrWg14dEaqBu5osrC",
  "key8": "4QPH4quJwtv4TYvNygNd3kPsqvJMZvi79su4Yq9XXnnGkLhqLj2Tb7USfdoFrUPGfEwEJAbT9MfyvhbwegRt79y7",
  "key9": "4oCQeVAZZN6aTgFLUr7LBAUzPap5vtCQNpjPfU8ijr8ntW4eSFUWnrxsa7uBH6g1F7bqZttH1gbYi9iHfSss8XSv",
  "key10": "3xnkjTXnLrudWbpX3LY93JscjaWhdFQzVLsHrYbCwgbTT7SFAM9BMa2LgvwMpwtiRTDXfDG8tE4XFquN21JKx2SZ",
  "key11": "4uCVxzhSjji2uC8FQPBfx2TzYReWW52Ykw8iXQnZWqwgGdZyPmAUGst1K6FPX8c5NqEaMLzpWuMxHYj924y92Yyq",
  "key12": "2uUxJT1CGaTvy8qoU4GTvaAn7PM2T8TdW4SJgDdLwhJE5mceh2DPTCGfBYFBqTTFgY4W3tWxB7V4FteD7vi94DQF",
  "key13": "4WgSPW8zTZNAuPtcMHcsVwgGrqDGvZEmmYGFur6cgpN28SjfgGREbvir3zv9UbHEwmZuTXsw7EAiHThNkXuGZNyc",
  "key14": "3rKj6xWCjemXwFTj3TP9gazXJpWqa3wEHrxX7QNWZvA6zDSDGo1r2Hi4xtB4V7dJu85bTuEBhN9V8mUAMgdb4jwv",
  "key15": "2VN9pftezGdSUrQJ8zm6vJJNo7PtvDLJHKzJy4S2uri8LgwCdPNG9kYJxtjYjE8zuUYALvvazg2mYxf9MLAWQ84Z",
  "key16": "5RNwrVjYX5dGRJA6TYdyxafNTvpWfaof3dtqNpZZpguHwEvqVTTQgZaGxznq3CWhLpUz5gS2ivqG1usRoXMuzaNr",
  "key17": "3SPxSNYu59ThUF5Q6Wqmdxc8LwyMX2DUsbVaDKqd4XxoDistz6vQ7Js3tp28ZU4LZXzyr1KFpYzk1ovSYghMUWun",
  "key18": "5PprWDdMRe3ewzjjM5dFGRMttj8FJ67ViTyCgWJ2isRHzm7aoSoQRaiqsu9WLXNPNoeRiUEnP9KHxU2DtpayZgjb",
  "key19": "3fx3vQjq87PtRUqXEvtPxNdEwyJZYxnHHji4vR19SX4gqKWXDydJK2fik4C4EKwkZAEDJTPu2fyCRMHhTXet8QiR",
  "key20": "34xuCmZ79HyU2t8RCWyaV8F6rdVaz2kveZJtNfYreGDHiBryWmvugTtmwBn37egqoCY2a36ijuQu1YqLAF2J83LR",
  "key21": "2PeLaZxySd3oaTutLoTfUtxMgAzamvPvMmWSQ9oFKahymNWrDUBr2gcYUEBTyPGLYouijpJxQBnrPiNoJqQDxgLY",
  "key22": "2s9RMB5MRnRi3Eqqr4WTPvXXp1N1LmsaJpVCvKjhM2hsN1qGcCFsCoF9cHL7UqLLUoBsUbcRrA9zfBXHqzryDhjA",
  "key23": "1VjG2x6e3mWRy8RbUD1qZgnehsqSH28xf34uGmmwrJCR2GXMwNUXSyUFceSTUQWwGLYpWP8aG7mLd6kMcLRDsi3",
  "key24": "2Keooa1UWqfRiHcM7Nj6yuD1CBuV1Yrb8MfGkT4M2fUGecvB57ZNgWqqooSH1YPrdzeXQYSbXV4Z5nfsJc46Sck1",
  "key25": "4Mu2FgEPmxt5w76nSjL5jhZLYfhotMyFsgNXcmBurAGaTTyBPMjJKaohDv7oDGusz4yenFhN5afGRMzBfqmFfJng",
  "key26": "pvqkQ49FSDM7sy28GEBEtKgM96t2aUvzNSZp2bVqk5MWiuHX4awnKfWNDQBoMQCdiwsRSjNUnnmASVw8UMAV2DZ",
  "key27": "v28i4LqJsaF5aWrvYpn8n1trM4zbADtJtqJjAicBnH1fhKKSjoHWgQfRtPr9GfbEbF2ZYLUcBGoL3HKrb13oU1j",
  "key28": "49UUJQS4CqUW3bZW44HoQ8npDS7vJ4L2jymABXo96dhUWB5smxHPH63ZMTaVMxKurxtw6wEfM9jv8mmY2VmsjeC",
  "key29": "BdGmG77FzUNQfnZnTrdusqNWZ2nyEiT9ZTzAagGfbXfKANVh2ffrjdnY41ZE7ezMz98YQS8iRmhvGxwPgW7K2H6",
  "key30": "PAwhN8AUKWQdVBLpSgcF94m4bpuiHpJQxtr7NBLQw6bbxPV9EsiVk8c56o7nnjNjyaN3Pn4cb1yGCZMoruT6qZu",
  "key31": "2at8eNvks2PX67tNkxHms9EaNkv6RfRB3SUXickcSuQa1FQk7xBom3TbM8upJoGSCZ1eu4sNSHFYFMoidvFVCTNy",
  "key32": "2HLE3MunBZkJYNRAiUEXdYMnvrYu3UuDGLSYbLzbUY9aZZMpJ6wCjYpGsJ4a3zjaeCSDaJwqzeoJqP4tq8cu9UUS",
  "key33": "qLX6sBg7MLUe1T1sDi17hsAKYACJ2fAMJ4mGDW9ppoLJUSXgs3fgAXwTtRyLutoQ2tZn4w3Z5hqnz39BGS1EMWG"
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
