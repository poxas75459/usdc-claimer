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
    "34umvBJJvcw5Gdtq1C6A6pdJonPgWNTGRh5UW7ZzntRoDDEhD1MgFASKRZhCD87LrzgN4nAG2tMffa1g7yQCc8mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfW8m32QnKikw4hWVkx2ywvZfHmLjoS1ngFojTaK48sg9sgagLJrk94pGZVqrYoAXYXA5r76x6SDSDW6wcXJ5kZ",
  "key1": "5Yu8ngd2uXcp72CajEjcULzVRSnEQ6dDbHJ93ysA2GhPa14evZKyEXGeWqApCCqdwPCx6TEsQ1qY2wxm8w1su8Jx",
  "key2": "3zfA78i3rSmmHB56U9Dai4TaMAt8y8Tu4327eTBvZFZq9wYweuCPpdHDQJjQwr5hLECPcoceQCeH94YSoqpZS9LB",
  "key3": "3vL6vEGpRBkfs2NfZCAiAWD2kwjHcc69PtZj2WzxAayjorm6wWsbBkZjYWYur1HSiJp9uGS3JrUpJvjTfinDePVs",
  "key4": "436XSFwZ6QTp9ciGqfCBzWRzhRExsFEUdVUccbC88tcFTSxecEjrZrEjxvh8szZSbsx5s74u6U2GM6MWnjKbUoQE",
  "key5": "2ZJqLTjCWLmaj8Ug64S2jhHhkxsbpYUBVhV94EVNJrY7WevoTdduwBM8hFk8bx4j3n8ZZdJxsCW7fSEhawbrESa4",
  "key6": "47k55VmTBagHVe4X3h4pzv54QmQV6knN1KqgFjvXgWWWDSn4KTubtvdqHFp3c2hGBWiRNMa8FRgNxC6mbdhKyX4",
  "key7": "2Nd1GQC4vcxv4UJ1eYPLrGPwWxrkenz977bixDkqojJ3xmJA5kWkvR6VZrc7tCBDqdWRNwnPYmoKZidYUpURmenR",
  "key8": "4tZZDEi8hUjh7tfvGmvK91H2kGYc55YWNLTbCZDdckPGX2vYKVkWVf1srZTvd3ruUfjLjo5hSpawrxfisAPYrkv3",
  "key9": "4BKwLVqc1z8WXBEqkJwKYcUeWQyrPYTLpfAVTetjCRrRkA6Qxd1jJs1Lhddo6ZjKRhjTicAKvqTUv1p6J1eRijTj",
  "key10": "3kJuagLoCJkUGkgee33GZP63C92i1NAY9dRRjyh4XemA6zK58oPagyQUZC5fFgyJq5K6bAvbK6GLvrWwVtKbcoui",
  "key11": "32qWW8bqSLNdyTMbKHaT8LiKXBub2mewBgCZGDbZW97Qj7XhbqqgtoehmS7es3RH8FmTzhsv44HcchKz284DyvpV",
  "key12": "2Ve2ajJXmDG9Zz45HiyQJYVmwDFtEZLvS3sE7TMjSeQYXZeuCtJkakbXx6mqoaey3UAwUWCRDDkVZLMR5jjyYxWp",
  "key13": "L915V55hAkNPgeUZxGsfAwuodz1MJEcRgq8vKoffFwnKCcn7VZq3bD45tLjS7EzFiLTf8RboQKRqrDfzFgcdd4a",
  "key14": "3BRe6hsyhXCyUpp8jvgbFNeH4r8mfzjj9uX4eoPpHyEw8LxFewSW4j4FRhTPeqqUwpibsDS48Pf2v6nGRJpaRGrp",
  "key15": "5Z8eFJzjqryjAf1mWzewKVoiUWXdEGMqFw7PPFW5kQe6PyPhdQHLqoL9MexMcfUdid21MrJ3T2u8A2pQFdr5Pbcp",
  "key16": "3mrjYtFgJCmrF8K4VBmow4bb2CftfJUrbiby4angig9SBiTurkZHb2qBDTNh9i2TSV96k4FC9y99y3R8Ec1UfkTj",
  "key17": "2cLdykUQYkG6rEhRsZjpir3w8BVGWrgQ8cXGVpTFAEqegNZPyHgc8cosAxLoLj1dPjdjz2nuD3Hp9pexN1SSWZkG",
  "key18": "syPSdifw4UWarxxx7G8yhCDpqnq5R4wivTjiv5Vs5jUsLxwFzfN5af4uhNWp7jPwxjWh9jB7CBsKkSznurb63Ue",
  "key19": "65h37VCBEZoG8YVFd4sg1PyXjCoM9a91d6vWhZ6XCb329C1TsVwYqJXgF6QZRmN1e3b7rD1c6ApG7m1tZRLVJvyJ",
  "key20": "4GnBqmc3uYiT3DNyeFyH1DwwDKZULzTp5SDCAD3P2iJg5HJijyCGN966UCRxmMbDM4bBku9JioSwWL3t6gbTgYmD",
  "key21": "3Z52sdDy96ZHc9b33huc6ErhZHJmwEwo3uW5cVaUmJPHWYKYQ12zwR7TQMyE1kXd4vwsMDSehDBiLF3T4mRXyJx3",
  "key22": "tadFxEZRpUUf751ByxSgDjVEmUp9q1fc12h5X4sbgaTbipBuGiN7ipvUMbyg2gGTNENZxKpinJqeZ2eGueBJUU4",
  "key23": "3oeUtNC8go6GNHx4eETk49hBydhTkd1MTngCRB9UxMoJJhepKgBFbzUV44dJDaGtbWHfhuTMZZRutr7h6mR8AqoS",
  "key24": "4rmmndNcqXWrMcYmYFi8wcEPZckwuhp5GaPFxN4XsENw7GQKzYDTXTVttt3E29cmQk7tfYBJwmm1C8Lf6CDYEREQ",
  "key25": "4Wzx8Ne7NGoAZmMjQah9A6RnGVommcLRJzg676pg1GLmnmxvQrohks27hvTVSNvLNciCpY6ZtiQZhXzzCDcNPZCS",
  "key26": "TxJHjH7DkN6pSDzZysWRG82HaBEryLc9hU7gLTjDq75ebbwfAGx8prxuU6bryfHgThji2FyF5XJZR11kE2KJex4",
  "key27": "4aakxr95FFqy8UxiCTN3Y9jjTuzLNPg6M9Wb27dBQ1N3ENdxBwcKGgFUNXxzbaEkorT2bp4WCYBxqtmtdLZoEXdP",
  "key28": "HQiKLC6Nup5qYQirWKxnUaEWyoeGpkfM5fSbgSh4KvBCZeQPcikFiASobNurvdQ5uGWvU5C9q3Zs7UNwnVQBVNg",
  "key29": "anyskCTkrZNsXsuu89pBRQk16pJQcavT8NJWm9CFB6pWms12roH7DPmy1biiw258PviUBnMWrRJVPtr5Te1NU6W",
  "key30": "5pUSYfUFCw2j8JdUqmpBbVRmKm1iCvnkphzo2euyAxHCjFDBwjeZqGpuy2a5snME5NCpV9Bgr3GGgSUPyf3FRHfc",
  "key31": "FdNdKGmxv4Bpm6qodFLzgiBevkcRJ3HFWFKK43qTtTCzHm9psut4pX1EeWi9huVsrC97jAL7xq64m3qziArJ5FC",
  "key32": "iJvot6uUpPBZgQV7Upe1oGwEd6WK4VzGjnGtdRP19RKjBbnFWP8VoAhdfDa6GpnYGX4xS5jFbyn6MZ3x6fTAUNP",
  "key33": "22b29CfQo9FZqfY151yajGMwiZHK8Yxbdek5zqSiQVmuuBZyPq9ZLzLDf3XeGKnG4ENzWFDdKmXMi6xA4utFwJr4",
  "key34": "5JHmeAcvZdREpVdei4A9ZCDELd1g1DhPkQQrfrthMXNVd5fCRfqYcE7pAUq7dr13ncPTfjbhn8FLLW2DAU1WJCFg",
  "key35": "2zYYyfjt5rJU2PUHFWS27mrnFqzHi3LXZJsmqTu5awzAazS2B6digLmCMoYgSUYcUpzoT6LLN2vyWvqf81WGJ6d5",
  "key36": "2tfSDQ3G784HR94NKH4DzuH6uhPNZg2VDDFMFpNfYR9TFYhPuUBW5ANjW36Y4rTv9tAyZgnq5AmoomkzhCDLWYcG",
  "key37": "2oUuw9YvfK7wznRoNaULKrmKEf94fntKgSfM8ysjD13VcwvJ8g3rucrCRq7m2ReJwgPVyy4W9FHSBS5uZPTsG7ZE",
  "key38": "24t3EuuMXN2YsTdwckbmW1nNVkPpyQEPJriBSwgVji9xkUx4SGd6BHqwSJbKhUwiaknkc9BvLxietgxMoUVqdqtB",
  "key39": "2zwscfr2v5YfofHJqHEKaKJmNQ8qjKvTwtKSvDPLGLhCdHQiEpmSYpGR6xiUen2xQ5Py92qAK9FEdjwrMfigSvcc",
  "key40": "4hw7genF4973wjY4idau3iRMe6ByzVcQUwHdSFzkHxZoFbZfC6pou3ttdEWodiQ1wcvhiVPvxhC5GVNiTynHH7v1",
  "key41": "3XVZSmhnXxBK177NrY6u4q9gtnJF2VBhf1xoBWsxQRmxhmC3ghy5KviApu7c7Lhu8xV8SuPd8ejKE2ycoaaNGG4D"
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
