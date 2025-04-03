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
    "53moPwhQ5vVckDHesQuBFuqqXX4w4VYNJrozuhtVfQV1BzbaVBNsJyZu9YspuRSj5vwiEFWWCA99n9SEgXc3rHoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hcRLPFcGpGMR8rkCLKXbsMLmeMc1aVR8iUUJc3PMWCwMrid8QPym5vUvL2vgpxR6cZ3F5PKwKq211PgftxgxdTp",
  "key1": "3itT8mGpe1mvLNaoZqXtL9zc9ysqLCQs5KrYJmFvUWNatCqwvx6FF6nxVvqZfuSEpAkXQwHV26jKKE51jNMrFGtc",
  "key2": "eixfBZhTtifVtzsJjAWXXnLoqhSSUEQ9ieNSE7yYRyEqv7JSfV4LtPhgpK6x4mBiwW1i8wCfudzWCozByMQCAUt",
  "key3": "2EsFoUozSb76vuJCzJpas9zLWhNMjNBv5opfU3rSfuiVCUyqak5gJv7CzWqAvu7avS6iyMfAvNiPQmGCyUf8exRe",
  "key4": "98bkcLDUctwTb29ugNhZ3gX4GFcJAU4Ue2mAqEp9deHFWG5DRaJpyoGMLies4YV3wV45U2cBNvar4RWDCg37kg4",
  "key5": "t8Wvz88LMrM5x7yScSZsicxfLTR3GZmfNoYNc1WXQ45A9tBb4uNPgo8DFHTemauqnkS6xXGxju55ZWbNiHsUntT",
  "key6": "3MdAPcEPpUuT1ukRFP3f6oJe3goNfESpP6buYbhJxrG2EJ4LJy3nDrESimZbYo26FRtBaGNLLQPAAAGAcThFCdLy",
  "key7": "P5LH1S37b8gkDWaqZV7iS6Es1mXJP75Mccg9D1oBh9Fg6DMBGDtGRRC7k7hP8mFWPX4YcaqQMS955TAFcwRSRd6",
  "key8": "a2wqBXS3Z8ZX86NDPM2VEH55eSGqxNawKZ6WD9rJFhcrU2LQKj1BunYKoxqFGNJ5zeeHgzz3KMLR7yQR25hTZam",
  "key9": "67Wdh6tNJ5J6G9WDdBq6NNcwm9f9Nf8uBwqXAmxWMumihFYJXfqWcXNqPTHcoBS3RAEGvbFWrzhsHJoysBbckDE2",
  "key10": "4qB1aeUkDi9RYpxXzPUAQd4ywoCyNtsXAC1xp6Fq8z3TCs8xCo82PcaXVGQfovBaDm6N7XfZeyEvt7bpxbxENwVr",
  "key11": "5iNEsNKvhrFrM37zcgYniecNGSoYGk1MnH3PT8AeYJaZJUHUdQ1nwRJCMkcpFdD1CEUzPLjqYtyoNQXcbixs2cKV",
  "key12": "2Vpxs1YK1uVEBrkVwspC48CksiFhFTUiBZYpEcAadWZL2LZci6Y6iUSr46Mk2Ngpa31FtjjPNeHZvy9wrpNAtUGv",
  "key13": "5uQy9T9iKsjWQQMPPLNUXqeSjNnbgaY2jcgN8ZWeK5QRcJ364kuD1hqZVNZ3mrLkYtsKV2LVJ6xF9a8MEvLBtX2K",
  "key14": "34JSTaRVha2Pbf1nrpQPYYLPUY6byeyAahqoC2FAAUoAnv6L58kyrQTzQmsniUV4rc7mM5t55fNQc3Xmvz7HM7mm",
  "key15": "b5uV5DgQGEJA4m5J3epBfP4fyErjZL56up8tvSDgoSqvPta73aS9gxYxxVHBPV32t7syVQhR8xGFGzfoBBeLHMK",
  "key16": "2YrQszNUvNAjpwTUeqmT9q59qoKZPyDUKjYuprvyjuGgXTMytaNXrdWQYXE74dLD3qKPAaLfiQnoHAAVR7Sr8DYH",
  "key17": "4r3upqBVSqsJnu39YdFesCPRQuB2rizvRMwwfFcBTbtWsfhPyVPfkrsND4Qw4gU7fvHrWC9nbv4Y3JNqmMTauNLh",
  "key18": "4kue5Dc9XyP2FfehTkfKnWpY9KYGmHS9Ev8JnSVZqqvdDugfv91QHanCz5QSFkZWN4XmRgFkQCvNaDDdbRfGM2vp",
  "key19": "exTWqu6GzawEeyUeEfHsbrjtXjdLwEiMVeVKG8vFTfJ29quHJN7Tbxb23efVaLZHat8oTdQZzFQ3384BMEZLk1N",
  "key20": "mQBCQnvnZvXEbGVaL3tkSLDYNNUEQkvmFCgJ37sJZi9EZjDSNNabHvDBADCstYipgXQT42YHXu6jPDUN5inWHxp",
  "key21": "3tkSqyXL3RTNfUJdvQH8PaRj2p3uQjMHAEHgk96Hc2wkdAu7eDbVEcqwMdJau4umhsmvTjj4b5vs1Cvzm5zVyy4Q",
  "key22": "5VP8WhARFU8jBLKQGWGcYzatuwuGMoQ2A97784g1FMPtkxbY28Tm3QifjYNKUEDsxnjGyd6SoEbgcWgaXooZDVcd",
  "key23": "4hRsfeTakYwu2J2PjsRdhkbKwRoYAY1fpr739ZRLu6yjrkfTgzHea717Se9g87annhLmdZYQUppN2Js1zJw6EsYi",
  "key24": "2GoJvmW1Pf8BXfF1ECfr3TBRHYrKYw1Gxdxc7HpbsihDiBAyq5ytSyBbWTcDT5Vg5q7ZMzNVnwdkoR7LY8qn3j25",
  "key25": "5oCLEijFQLc64yDP9rbWBzYwi9ek3KJfLEHmrvPRgKtQ2Ptz85AgwHiY4A1NhfTC6x4X1AGcyqLWcM8G3RHTBuJv",
  "key26": "2cS721kiizaX3gJKanoHB8Lx4Jvx5Qviu5nrRmP72VHwudPJBKfa8tpFjWpURTLt5wjGpeZJCPfP45GgUV78t97D",
  "key27": "3FvErCz9zL9T1L3UFz4SrTXBrDR4G71nmtDKks8KZarVPUWWZwAiFKWjEhLnVStnvbC98eLWYKetT8GsaMYHen3q",
  "key28": "4SWNKkfu6c8iyWFpx8qZbhXkrTn2serFkECNUfyvikDJqhrMFe7S8tg1M8e6WXrYSabt2t64QpR5MryXT4ijyonh",
  "key29": "4iu727tfenNjxTZPVLtEoUnkenxJNhLH2gG6QmrbumgmX6yzjES249buNJhYeVXZr9LZDSb6LYFDcCLTJBAZ7dx1",
  "key30": "3xJsZtHp9rTHk9SAsgBtDJAZx1N8W2pfKM4RY9iJZQXKuhWMNfKcv74G3jQAvovTvf8SERnRo6hSxvSaqaqf6xVj"
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
