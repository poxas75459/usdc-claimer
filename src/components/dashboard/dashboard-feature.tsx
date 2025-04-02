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
    "4VrU59AkunP8DptoUwh5CY9vfRuuJFzYjApvga6YH3vDfYtGzwU98NgKhW56Rrt7TU3E618ubKPgXDkBhhi5nJFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oeDce838JnV2bSU2SdptDLSQuSSuGPj8wnc6xsELvGKhVB7GJrVVhfXGsXZCutZ29qkasG3ggLDRrHxXvJPumeq",
  "key1": "5tiNWw4TzDnWUvzNPjrCz7C9yf4sjAkHVYUtBtyT1VTxmThrqPkPA3HNHuV2KGCGdCa4s54ph46szpu17fF3YoMc",
  "key2": "62oghZVY16yDiw8DZiq6bZnsEUPi3NFVYa4JYWttzNhQWEDLYAANjYqjZEARhqJDyQ1Cp2JrYff47hdsBSxr1iHd",
  "key3": "5RLsb14eDiuXnSh96YUsFmGzQLWoeZp3V7TftrVYjXaWkWd4nyxDBm3cjefrXUWpsP2VpH4t8HY59dnn1yTvdmhR",
  "key4": "2fyZSsyL74HPoYxN7KQgWkyWGe8JcyV2LMWJpN1GsmMdC1Q5cUNgRaSRmMHXSeFnbkFApZdpYqBhWTm3b1DbgkNW",
  "key5": "2sfA45fgBunVTN2idoSVLrigxjGbAFpDFTJ9KsS7tPPsuYibFGmk7AFnqrUKc3ws4edUXrxCoVRdfrw2pvj3Z8Rn",
  "key6": "2fstDmATBigtTJXQk7N21aG95a8XZLLtipQ2NEG8eWzdyqnsq5qRVV6XTnMr2eoDTKSmojJitjhJ1q8QuGb7RFWL",
  "key7": "5g3AwP9BxPxMs9dSMJxXo2P8BtBG3GoZf9rqvBwSmGub6SiPemMAwFPqFHVLhvKSU9g7cj9mCuqhEsbb1ARs2vTL",
  "key8": "66KVQB4ej1qBySFTy61EFtWs89X11CGKhpzHHKnZR89vMfrwYEYPEh4NFFvyTZ2CHjoJY6upgCXfg8hKKah29uys",
  "key9": "ZokvFovVwSwst42VA1GiD6MvyA7kRj3BbhPPCMr8VKe5NhCSxbF8mem7sNn5V8vL6NGpxmhTdxbTeP7LCUCENR6",
  "key10": "45TwSSsR5TZrh6cqzX7sztHARpxGWyosbYuHYJvK4w2DdTDHpEZKZgQhhCijdpFM3K8ZA5Aah5qvrQdwEhDGVmLC",
  "key11": "4CZ4S6UwPmhJCmrEthhJTtU24jVnBREZkhuRuJTNmdFY2KD6QkWZSkWynjS2yNQus8MCet6wK7Wshwsgx5tSsDbV",
  "key12": "xx1meZ8DsV5Weg2xEMGWLRB6aTrxK3oQqnM8TwCjh4u3JEsZ6iHodHuesivPDJBgco6mpBgaBQfRbUBStNWudjK",
  "key13": "2oZcVHd2777vtRfuU2cMWGd3x8ZepWcot3R4v4jfb5bFCLGEH8GkyYgnUzibqoGpeUqLawequNZGMgmyFq1e5BQR",
  "key14": "4xfAxYCVWoYtpsM28XZccaihPHtgYLSf92nm8YHg6uXWJCM4qwQGtymmvCQbhU4bQfui793C9vc84EgoKkYAyacu",
  "key15": "5MFPCtnTCxxC1sX5CA7kCayYVQanc1muTDZatyQo2JZ4nFZN3KJnhzzfxD2vm4yaNMiXSiZwqaFirhvGvVG6RYYL",
  "key16": "g8dmm3YkKyTDLbc5AeRWxcaqYhRM6xUnmAy4iLem6pLNNztzociJqLqVL3pj76LEEBKaJh581ZY3bhApqmNG21N",
  "key17": "3HpVcji772DZnHJhdJDdXH8ydQXRkhVW3iKkfQWtqsxAquMGsDPrs8jCp8McHQXhXvyqgwoPpF6TiHy4DPsREhjF",
  "key18": "4isTDseuNoZs5s8joRRZ6AhMALop56mPgTPdiC8rWSDDKqtHg69MdSJHwmy8246eyfbnhBdAkR28smv2Nhwc6PGW",
  "key19": "5CshJfZhcgvXUKfau1SXyWPsCBWAyquCSW21BH6UixopZDD1sNFP8zsDkoq7GMgeT9TtYDcw71EBVxvafdrvPHXq",
  "key20": "2aefT5DCNqbN2EfnSuSXwHUEunV3z8VqQqkNGqH3DHdpFUGNGTG6VFMfF8edhWg3Y8zgytAK9szexkkKrsvgETJ7",
  "key21": "3KaxT3mkJV3wvJsT4x6dGYTuizmBk3PGiLuZr1kXK3DaG7gRNPtobuNAbG7v8VCydpGbZwkupX7KoHrRXfffnwqW",
  "key22": "poBo2yqzZZMmyL813D9J1NTL7g9Mzobme8SE6hDbFLLraBsXMY9rcYP1oUkFbtfEiDeGr9raVkcJPgMd3GHK5Mq",
  "key23": "5qdMQU5RZSwhV3GL3VnqfxSWw1GEaS2kXTkoXX5Xcm2UBFLwzseuAzd76XoXifMJhhgqgx9vF7QUPG5UMvxa9N4n",
  "key24": "5zFrJKtBsjFe2BNBU9r2WJEkR1vNgUQ3i2QSJEWFFt77rMfFb1M36PF7wobNumZhXVyeeJsJVWqqkw3LwWf3tbkJ",
  "key25": "2mZCzSfz8Q5fooszZLvBLqNeb7qyvAcUSTDxxQX4r2K7X9gEfUkAoL7umcaeVxSNMvovMW8M4dggLAPADjqD6Fmu",
  "key26": "2WSkxZRihV1M9gvsyf4y2ZvPZW2R3KidATzTQ8FXoS4HAoQW7SHJXRzvuTKTw3EAXm23bohHEgsubL14LEELBuYj",
  "key27": "2MKMTRKXZVGAgowG3YoBpcNNLzgpzBueTmQm5aqB2aJuLbydP1j5Zw7vgFtfh7qLXvxNkUEAyeEPbZ72FF2FSYhc",
  "key28": "3cvLu5dkHn4CMeBsQjn4a2aT4BWwyW1DLHQgDhX5J9UPMKaCqJFNEs61tEHoD5oui3pa6jsLteEjTyPwogCoJaaW",
  "key29": "2jEhw93Yjx534S95dYTBdTREAr47vfDMrmd4c54td17LZYcU6ZAt6SS7BjeuaZ4wMVjqXK7CFJhTjkaKXLvFkUXX",
  "key30": "2JgfrSjvqqsfaebvcosgNAvddS3TBnBGWQSA2QVSJh8GzGjkZ5zGNM28SMPd9f85qZcgy6td5oELN1yiSwKLxJWr",
  "key31": "5U9eqwPTugyKMZmDvx3Yvx9dvJq2BUMKJtMuKDU3es6CSYWB4Hrj79effzZzg7TbDac1TtZapuCAc7vBHVyN2fCM",
  "key32": "4Wrj2TP9ukMjPnh12VXmL63wtMdQ9NcfwDdDhTtDHUoKLf6He8UqqfTQPNcPuFeW8YAdy84ntUK8JTFF48Q51LJt"
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
