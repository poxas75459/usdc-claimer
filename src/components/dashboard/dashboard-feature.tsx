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
    "4WpbdbyTtxN6SYA6arsVw3uDnvPD14xVXsm7KMQQ7KZeNQoUYjzmKRYb6SQSzYBUhtGkCgkDsX2gcBrbqATrKjmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8sDJqDFcJqNWnywmC6saTmJVFwti4seLZ4FL6thR2r7eBuv58JTSd3i7hVpu1Q3JYWCMiDP5dTo73SVNfAhVnF",
  "key1": "b3ypxfH7xT7LjY34nCmRuYhv1bFVMHQq6Uawa5gk1uqPQW4kPV7RRtiEzT7dzQLjQNFsgVdxQmeztgBp1gSCTof",
  "key2": "3GYPBnsXoFWZN4HM1yABTP9kCZetwbUxjA9Vs8SnyM4idK72AiRALSZhSuoSEkzZNW9zZaVw7HkWWPMfMdTQ72Ri",
  "key3": "46GA8uBsL7QYC5w9VWVZe4qSeGDqDehnJYVe7nr4SaYDBt5FadonVeZosQD6uYZNE4aNG77443m5cxb2zt27uex9",
  "key4": "66eopf2M661j1mYMge4MmDqkb4PbupWZbxw9DdLLLzRRzHC3FRjbp1M9Wt8cP4iHyM7QBQBg2t2xu1ZSEQrG2eFD",
  "key5": "4K2vmpXqV2b2bnCWmRhPq2FbfbJaoJHdKFkT6vDqaHfajmuP9hjAVbUuwkz6BWVQbbpHxtptNBo2cQpFQdqqmF3Y",
  "key6": "4hLUghB21iQ57zgkHGL6t9penSf4nF61ATxED51QAN5mb2y21siKaE3EmKRKaXvy8EmenpPLYGTesrx4NvH1P3GU",
  "key7": "5NvrdV4EnSrHj62nHyqmX7NjyFRNggerNavTVybDB9o5BGcSDNZBEy6SV829rRqNR6ZDRa3qL6av3iaG24BGJ5s7",
  "key8": "2QQ1GcBJRGgL2vYYRvFQMdbCBr88RVsy8KKfEoGfRxFXcyrNb2NqYaRfRa6gDzpR5EWjnBwPFB5i2QL9k1WCieEH",
  "key9": "Ecn3GAx9EsWnFjwN6mmtwVXFKVW3hV7cRdwga43FeaCg5sRJm61KLxY7cMgtdJgL9srMLSeBdtiji3AeBGNwymC",
  "key10": "3sYjNbWpNso2yBVQsf2Z9daiH8UujYVuzqR89Pti1DMwuXZJp1YCb5Zx4vLg633WitMfnEpozRw7uYJEerYGZrav",
  "key11": "LoRE4cdWUHazs5BdfCBRqJ1JfrZP4HFLudEq7rUatZ3WnaJnkpmfRc5gvX2EX6so7AiLaHsS2uvNumuDNSGqMXe",
  "key12": "3Ybx8qFw53qYCwc87531JNWqwZjYCJ6fqqVRp3bZXWW2tnpXekdGLaU1nPzUVgt5n9NGu17Gmpoe8Pk3TBvUmsas",
  "key13": "36DyZ5cMKgdGwaX9oxd8XNxHezHxKDVtgXdEBDS9v9Jwtq7FoYLBPHBonD5qw8f8UxLtdAStqULQuo3MUa5YLFJr",
  "key14": "5JKBUtcj15uRWgeEp7vVxGMpQMCtrZzNw24suu2rk6R26Pvm6wiyvSo2UBYDdHfc2x8gQT5vz7qJ7kn44yAWDUB",
  "key15": "5zXB4nxE7GYmRkfRqwvX32q4RJigXWJLTW3eQrrq2Xku5e9svKo1CzHhJENhUxWrPZV1mdfr1s4xVLeyTuPGfR7W",
  "key16": "4bQaaGrhuNyhgSGXqfvovLtWTafWFD6faZbS9m6hKdSrQ95eRZBaeSTiwJiZJsHfutFJeR5PZgMPo4iwJ6SRTtCX",
  "key17": "4LRvjZe75roYHQZ9Mm6kQFQESyirMr6sctnJdoV7ZXSqaYxpwK4RvMwVdC4sV5gyuKoiq9EYu1mTva3WEUnDtVZr",
  "key18": "52EMHgPTKSymPftG1ZTHTruZFo4taJcJLsAE9ZpQmi96DxtN6LyiK8bq84LpUFtFDTbSbs7tgMKWTVxifPFCNckw",
  "key19": "zuXQeP9pMFPLVamGugr6i26ARoWAKi3X8H7YqokGyAf5HrSdT7rBtiosEPi6PgyGCduMgZG84NY4kAY41Nvao4G",
  "key20": "46sfm4UkyBQHZV5zPKi6t5aJuE5XtKzAPjVgQzwcGWhCtTCsAyAEPgfrZC6PYx36oqNNye6fvE9vZadGAm86M13B",
  "key21": "2DcU8WjXhLAKvnDig6QJSiGsJ5drNwhavqUTgmzAmZxZea8vkCkXqVySCMyQN4CQEFmBoj3Sga29bEcxcxGy6T8C",
  "key22": "YT8ns9yJWqMksuSWMTv8pcv11xxbaNKBjTLG3MSJ2ag6p9TRbEtEkrnqrUuByPghP24baDtPe86H7n7ZMZXTJLe",
  "key23": "5SpYM4LzA4KPbSTdMhyXdZBCJ3oJcArLjuBuvPU1CHCtEcibtJM4QYJZptvHTHWrx8uGaDw3oaZdfT2dDVP8tg7P",
  "key24": "v1aZURBjq5YRwipXMx9FC4eURTg5ey6td8VLqfq1VBRwrsuN8XNBPta9ERcD3U7KUHZsaVRH9QTZZhxi1tuBv3G",
  "key25": "5jzswekdGx57adkQgwEiGZJpmynMgYrrzZRhGeTqZiERPPiLhoCbjvVjCeAahT7tLKtY5DZFPM4mYRD8YxCitjaj",
  "key26": "3BKZnJccSHm9YYmjY5mHck51pcKFj5EZ2Vr72G1wzHxE4qDWaAGfVqNFRUVWbZFEqhPpcEtBsK1Gay6UFGMqGviM",
  "key27": "44zVfCs1ftLrkyLCJLzMoDTrZJWS7qRFku2bPefCbzFTcPQszquhFPCntdgXNHDT4uUKHE6rqJS9aJ839d9E6wtU",
  "key28": "EAdZH6QBmwdnSAZtrHEDYs4pmuMmzi6BbPkrarY5cCXN9dgNzFyP1pwNEZQNTvKQMjHt3vtARVvzKWRJuaKT1Wy",
  "key29": "2GWep3whaZwzQGracH4VRkYRuSka2NRrQk3UhoPuKjevB2WkvMXs3JXePEMP3xGZMywNgPe4628QtvoZeEEw4Syp"
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
