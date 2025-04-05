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
    "56p3Pi35MLdZMJeokkt7GdJctvsXG5GQctmmthwRU4QcBVQMMKP2s6LLVQnoyhzfKWKweMn67DuyJtAsKhtSUgBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q24pB4v4KgWUHcQ392d9D2g89G7GtvRqWhEH3DNPBnA5sXiS5ofXST43ZftkmTGX3qCzXqLHsdHZCaBSmaKJYnH",
  "key1": "31wLStDkkkaZ6CVV2xaFyEbKx4wgVCx7852cQHhL4gNTpgpZdV3beva2Ntqprx95atbV2ygpJPJUZJ435NhYvNE5",
  "key2": "TL1cjUBaEvK7n6dWaN246kHi14pV4GEj5LVpRovgRMGDzJGpBgRKNVrndks1S6h5qTTM6jXZPUX9N4VjE27Bx5U",
  "key3": "3HBcsE8XytALjucqSns14cSczrrr9zPmwSFsfQaGqQofrTNZfH1wwTKbMdaVbSwmf9tYW2oVVhqNVmgEkdcyZH7a",
  "key4": "32hLNeKdS1CwHjyajcDMBviFtdYRBgmv8Eds85aiaFFZtWsagu1K2M5fG7jcZLM2syheZHXk3SaZXE3cZ6hoy4Bk",
  "key5": "3f64Uu7z3KXw52Fxqh7RsTvqUqVcnGAR2uyNvW5Fzugfcn78wZYHDGcWxE9RENZF2LXRzqdCRh5JfT1ECtF2CwUs",
  "key6": "67hRiH6MuhLu3va6oZR3a2ZEPo5CXHgP5iQH6NijwnsuPLWxSHGvrV7tGWWqhy4W8dEqDpqvnij8SHF8mjRekTrF",
  "key7": "4EBczNsULU7wDVUrhFNPhqagHXmA2dnyL9wPxmzNWvrJ5YaW9SwoD9wVfatvsx1yUTmKXWhzVY9gD29YFhxV7HP1",
  "key8": "ssi8eWeoE5gCp9Wc7RhamGm9auQE4VEXXNKkbo845xCxnA4q1wzLFcTb3266X7Z7cwFdrLvnuRres95mYj9QL8b",
  "key9": "Qc57vuTFpQVuCdHffLmqmVjFUKD1rDT4ncet2xzBzB8W6G7vjXZcXGaoJ7ryxUQKMFR9oF6YBr2r4Dd2iyRunLZ",
  "key10": "3EBFL4oU4Kcr1sYVg5NPm3rvuwx987jzjAue6Ce419hL5hNgvtYha3M1DnfYXNCuNegomnjMMVzcDBNBwTfRM5Yt",
  "key11": "5nwAXDpWodRY8njMSKse375LmX19kBx9wwEHGBGeyhAVUTxPAruooYyR5jgVpvsWtu5CDzzejFfxCtJ6R18KJqou",
  "key12": "5YZgKnk4w1F7Y1jU7p8DGemw1wwQ9rbw8UVABBPWPM1ax6zapNcsdX4WfUvkNep7tqM3eYqeNuBMQGuS99MsRXxk",
  "key13": "R8vePfLkWg284Bf694RZzWNpybKfD75BjSXueanmsKxnJPEmU3vrn4XU8kPUcPdex3hT2hjfdGyW1ZwAZNvmtj6",
  "key14": "eRKh5PBNxejcdJmkZTEufkkzwgfmStrF3EQvwTGZ2BQcbgRfbfvCkWxPvJCE9UjcgkRqyF15kSeY3YD7F6dYdDC",
  "key15": "4f5zZf1DdbrGu68VBRFbuDNb2ehtk3TayiW7fzbK9oxKms8aq8wpaFdf4ahhrwjwLS9z7devwdW7KuYCnMDCXnCv",
  "key16": "4Xu2uHrhAzjftKiRvP3vC8FcJ3fT4t1rEyUMsVG3uZWF82JhC3H9wzcjniBr5jBf5tM32XG3MiqCyouXCDJnC5FM",
  "key17": "22vVZw3U9d4U4bpuk7jhweTvo7mkBu9Ne8R6Yh3fNbf3bWTGy2Zrb14MZnDiGaxuVPxT5UZY7wZgvfrTnoYVdDti",
  "key18": "448NkLoBK77QgqJHkHcTsKW7T7vLpr5eN3YEfK9crKp7JoC6Tf6zzFwfunXsGvcmSHoWpiquCN2v96V82PTjmxuF",
  "key19": "65crFkUJBQhE4nyEtPWWapCZFxQj7HVxFgAmDfpVrctJqbJJKARLfwiBHCNcA1f3uGEbx7xu13ZqSSLMLkuCnJiy",
  "key20": "xEqSuNZXoGQKTnGPCqio8sefiXFFeamLqoLPAf5r5aV5oJ2gEU6f2Vq49Nuyri8exfhMr5hC81VkpuMhWyHq2jz",
  "key21": "28aP89J2rHDqJAn9Bbr5B8dvWQebLgWDrWDBpi9st8xdQgHuKY1jBUYEoj3YBAzCWRVpMd4TbCoHqzERNHd7v5H3",
  "key22": "7nCXvRgD3GpgSFoV9724d1HziEmESdFxCWcMbcsH2YDV2CiQfR9mWAKhjTg3i8AiNgvdfqsaLzoMfgjTyf8W3Wy",
  "key23": "4eHXi2K6shf8KxbXvAcx554bKUGJt1cxQYjxbMNxrxLG76CCSeEiMnRFCtCbPptFPArzESe3A9R7xYjB4edXejGx",
  "key24": "55CcFd6M9vGzK1nHksPmvwSyQapUXh4W3fbDaCYrFPFY1FBjrVehdHJ1QkWGDFc9MFxpWxEufWsYWNThYzZENZmD",
  "key25": "3NXHAkTLG7aXYGfKqEsLMK8siGuxNqovukbhGzonfzoiB8kd6iyZYLRKFhWE5xf9UXLPak1o9LvCTirhGU8hQQv8",
  "key26": "q61g57LwUbsskUC58SDj55nsHihMinyxKBy976DMETpBBF7cUYoMk9RhwYtqk9Gdg6PVUK7qz5pCetsRN8PnbBc",
  "key27": "58gbqXrFGM979g12u9pNp4oHLLPMbWq5fJ6DdsiyJQstL8thUem3oySKXdQmiqnWVvhhhgbQXb979EKdZgEoWFh7",
  "key28": "5EJeudFRb1U7WJqCoNaA6oWGPqKjpzLitpR681qiSpCFRUrDoDdXNHw8cY41w33H1hxcUyRMEVSrLCKEGKyxnpzD",
  "key29": "2qHmDPKPw2qRER1xNqYUmgxBNYqr5tT79ZDkzkM61gek6uJf4PCNnH3s5hQssnxn3yyaEHTd1VVk5w8Va5Gaaq9c",
  "key30": "JKty29LzRZGNzd6NNRzGM7JpKzNEYnVJre5wabp5DjMVe7KbPLTKozPr73cTrnF9MtH35SQFWUhhJXSWuA5GMyL",
  "key31": "2VNJjNkAy3ZMYA3V55qnR4WAqcVtJHXMx5VLxKKSkVVKon33eoCkoAQtiTvohGxLVvo26eRfUjyHYuPeBmCGyHhC",
  "key32": "45hgvcuNwHPbTFMHA9YmNVP3FyHrtf1M8wTLDh1YHh8rdGg9zN9s1o67RbzivXQmWKcL7ArEHYuqgQTQ8CSXScA6"
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
