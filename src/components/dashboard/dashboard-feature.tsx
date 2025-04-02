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
    "3WyEnJPhyx72LkV6kWzE5cwzdPnZ82R2FfAiCgsp9YgQceGq8LEZLqqVRoA3fmU4EErneVcLKtTg5NLcWRmko93Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXh7yCBBN3NkjPJ7ZDXeJ5gBiZYf7uABchtR1ZpwCY2AFtesF4pfVBWJtXvazhVN2mU4EzRRkQh7wimjRB1iTMX",
  "key1": "5YQrcY1U4x1jYfcVPmGXWPkHhaNjVbZDXv68AYwLP9jsNFg4DvzD2XpSFL4cZj21kPJ5kUp3eoeNy1SzgA9LFQ7a",
  "key2": "3ZAFhq9LGguK7UBmt4qG8vZ9fgaK7VnB1gFmyYmq224wgZJFTkB5j6ZyJ8ekkWrUvEUjKqf4CWCRYyghMY6ryrcJ",
  "key3": "3J5gWPfXY9es51SSRi1HKqAcK3HhFyK9d6CqAWfj7AxF8JxFTztjqMn3GfLBiA8tWyW2GCynr2oenYS1NhjhgTc1",
  "key4": "35bu5FtbGvccbuYoNWTvk8XomPk1AWwRevLntaq8naqPT7kE5K2FCgfPQckNU46GPay7LCMcJQUzLj4Gqx1HgiMK",
  "key5": "5mykDb6gzRTHNfwte5q6YUx4ikWCoRPEN3wKVzUxJ3m9nMWoRtXX7dU5oPKAkNxuSX5Fetu4bWZjf2sn28g6sFAH",
  "key6": "3Wvx4A96DmJ8JMU6tKpLxLXeEQpotQkKou8XSGj4hPq3UgqNmyjJtW9Bpysi47teFmckENyam421WwYqAZSPSkig",
  "key7": "ejtM2tgMLfURGXjuQhiPxutWGqj1bd88YWKocm5q7EQVvwjvUFhHFSwXmc4zU5SPeHpyWis9eLeLTDXe3vxuPx1",
  "key8": "m8DM4o4pjGTvNmj8rP8YTW6sfU4FU7yMXTri1H35nwpckChbM6HJsMufVB9iEWpmjeX7oTSrxrtArUWe5VeibZa",
  "key9": "na8eCKk2qeq4nzBT3nEjxJeJWiD8H1T3nAquAvQHujqokeU1QN22uVWSe6U3QxW96QP7s3ViFWdjCQMb4fukUSU",
  "key10": "3U385qTinHT9wX8couCVkt2yYcvr3kA7Kzf5bDUAkGC1F7GkSdgvnyt94Gy3MCz353GGdvJ19y2UppHmaAnFFmmX",
  "key11": "5KX4NzsNUeAq3qV9XqW2g9BeeP3y6QGVFeoXjhrXpSzApmKJtiyTifoPwUnKBoP3wnShoHf2XUi6vHyMtCxvLLxH",
  "key12": "4wrfBXDyRExjDJXMuasWFkuVtbyeaU19iQofMYGj3voaZxbpsLHgQhFTANJqrc2HAH3L7wKbCriHmXCeg5evh9aG",
  "key13": "5MrdUFQv4TMbXxaatbxWxonLEj3K5prkabfwMn9eC3HC74tnGYq7YrmnooQt8FeQQHhhy62ffbFWBYTsTf2aAWYT",
  "key14": "3inzsbGj42wde7VDisucG5WemaeEKH1PStACMoX6aXcksPxnr7xYhVpoGZgr6AvNHQw43eo3SbrwrrbQbJ3B5G1g",
  "key15": "4k1YFzCLVNDP7GEh3L4DzNTpiEHSEfWg9kCG3wqdMzWQaW2Jmoqs9TJdcGg9aNS62dgU4QyCifKSvN2RPqaiBdNR",
  "key16": "CQsKaGYXQ96X3LR1MC5qTbufBdYgMgTKBPRGRMbD8wSNwfXFCXs1zWpsfi9EoKGMMAXDSDXbevE7RWCA8jHj94m",
  "key17": "3if7haZ6aDqs9xapwpoVTXgNPe3MTsnG3YTLo4YCEFTbcVFrx4EbD6SczkM8futKdoAayRRDTd8Z747JpWECHmvD",
  "key18": "4d8JncEVZggxvv67z4vGgpQzqeBAQoTeYd5HaY1WnqzLojMQcXpmoSUnrSzUBByaWpq7tMMeQHggHTumoBLBBbCd",
  "key19": "4GADtiqmrDAsVSAqw6yXURZo4FWwTeUvjBTqn3u41Vn4uyak8BNTv4EHQyg9Nu7UeJBbWYT7WPor33cgSxdEYWVQ",
  "key20": "33onVaGD9iFLevmZiChRH1qzPxPK841jee7RV7LynfwFh9B6zUzotSwCEmG1WgbLa7SY2Xgo1UGXFnEqXC3XhPfC",
  "key21": "3AzYWUEhKDhgduHe61yANwySLnCfQ6DLo9VGy1KVnBuf6UeZzVwGqHwyCh6uunJdqtATumEmHNEsUfxMG6HfSH2f",
  "key22": "2sdDiYgPxonVDkfJZ6EwLV7FuU6LpW9w3gwzknB8Wq3SBbmx1hc4EU2hC5nqugepdBRdYuKH5pDwCmQTc6zbaK1N",
  "key23": "2btCDFzxysFKVu4R66jwdiuVNnrYqERkSFbgeSe48EjtvXVVqguA6WjG8S5htkxYTutY3oKs5qvDcsYSoYMyPLQy",
  "key24": "9jG4C7Z7mjhm8Lrg7qQ1FLrtZimjQW7VYrR3qzihArXYzhDdVhgVckvJjjJEZ4osgopYLppijMFt7iyKyzxXke2",
  "key25": "3GfFhj1UPYh6tfp676XBbLj3iYbwbxTSZ2SFFVKpbVuFACAnWZo8RoZndBjArcVRG7uunFT4QH41jUcTA3TJuxX6",
  "key26": "2xjN4nMAPRp9roSW5zpAA2jRtQ6BDZTRAQobVbJTAbHxP5gUsvZyaooUPdVd2XFdH2UU41ev6sZVuVEVgv5QMACN",
  "key27": "KRswTVRLgyiskDLPvt1o5ewyXnGk6K1PbsSEfFVGwXBbvt7HeWgQWU4sWVa9bdFrzHkpKeCLRQX2Gxi5BRCKnAG"
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
