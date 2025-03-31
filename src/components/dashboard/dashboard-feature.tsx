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
    "nma1NswEc4vP5xxnbaa4oMXRw3Rj5Aifm5MwgSXLUxEenqPsNoqxxCbrixxDpoD8FreM3Cw6B1Ru5is1R3QThNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GWKf6bvNB3JDmU1SrYefGLDZ2LfXQW6BW1FyGwMXZcAm8GwBeFMFFy1wA8uUceNqtNx1q8pxG1cqFjdaUQayEpZ",
  "key1": "RTNWsviDVvNDctea44vWEP2ykT9kFvJuwdrPyydE9tzYpE9k5rcv5XDwNvQ9dVj6WBW258GDjGJRujyERVLJ87c",
  "key2": "2bq2eow4j4o9EgWHzr5kpvYtRwyyTsPMhpDcTkRfNby6gcbTpS1b1HMBdkPDw9ifuJYmtm7WvicAcTYEYjQLpVcD",
  "key3": "8QQ31jdE9hvkbsbhWdxazuPdhWtJfXux4c4n2fqc1RUsWCo7Hdueoc5bmSvKJQfhAoWLJqfHfRVznGnZiBDipm7",
  "key4": "EsC9YcPsYKgenznCJSVQNyMCRJBWCvpo9WKDsx4gWdjHV4o6zznCyNXdQ9dhqGYBEZdVPMqNoC6uex3EnT5S3Xu",
  "key5": "5LDJekkVc6rQyyeT4Y91DNck3eLK2FXnVEFZYkG68MJntfc2NFy78Sw2Ag4rXccNjitKGKi74wH31so264Ka9ZGT",
  "key6": "67MWsZgXmABcWtbVsfSUSgPVsH9rCZa2s5BKMKghJQ7idAgpUn3CGXH8tAV3v4KvCrmCBEDKUYKBAERaCBcxGTQF",
  "key7": "4DefjM9CJRxdAS2jqQzc8ZFysYRyhPu47gf4WsGrV6WQXmZfuuKahvaBXQ35RZuVbpZVjJhgrKGNeV1cXV5B8Hvk",
  "key8": "2TZmZdZPe6tbWuccJGyNMnhjCyuMwhtCvuPBJmQPDkNgXHPLHiZ2SAqbQtvENiQs3hATHfJuk65Wiyh2y7RAfKmm",
  "key9": "52BFyu4mRHPX8BLJVGsQxRVv5LMVvhmqSCtBptjwY8ZjmGQejEW9tVBqsrtTnFKcqDBG39Gpu22cWZPjBZfnszcu",
  "key10": "49xt4HuEFcR2mH223owv2NHZn7x6QrLZ29z8kG2nEGkdsn2weLViHKPRpA7R8jrqxF7vnNY1Nmrg8T1yQU6EAK5z",
  "key11": "2HLVVSbuRo4arrWTGwR2aA3b9bGCz4SVcqxUw9QE7fx9YF3Xpz3ibib9yskmWn4wDQywSMHBEwB6aRyry2BDB1ri",
  "key12": "5zrwcDkkeQap4PZrDQgWXEwZaJzG9fyNVxCe6Qi9AV4N7oZMUkGyYqVDcbbZWrGa6w7LGYS3T6npx3Ff5HJ6Mi4R",
  "key13": "42JSnz9a8SQUTnSEvSgX46dHNmJb6SCpqetj8Qg7cqYhtqDneAxbSTvRz66tFfeuyTyyLxFwoGZaoZ7rdBkvLJsb",
  "key14": "53Eb7xMiMBP4Wtznz5izMNUbyggy7WUAc15VbfUGP4U8WRctHdEcGHzoNdKpjq4kVFRtLxNpcVeSm1FCCru7GeHa",
  "key15": "4f96uRsbouZeyLKj5inAEqa2B2cLi8TaXEZdo97gqbysMCScQSWo1L3AyjhjBBDWMnmR4B6VTqbup3d5vT3PtJ4f",
  "key16": "2cfe11iiV4TDPBd2BnFPBJtA1vtFiRFP2N62cKkW9u9zyLECD9tpUtUtkRRTJK66nY5FDyKRT2GUjVZG7d78RzqG",
  "key17": "4R2VkcC44CZhkMKBKSTnJc4zz2jFD2ZrCuszoduTs3G9LaXMSbD9jDhd62xhE3uRTXdHWwh5RRAfXYiaAwTJNXA9",
  "key18": "4TJXiJ4ZNhGmP5g2jLMhnH69YN9pddtUJGdCCBPzQ45cqHQZHwvEEvZRBAMKN8Bvd42TvEfygSs1E82GLnbtLhNd",
  "key19": "2Wk7Jkk17Buwru8kRjtjpZFHpTzu1Q9bLkLqKfymw3Lm9gNukWsn5tr8H69VoTVyXhAd4YSdQKNkhnqmiSJk1kf9",
  "key20": "4AphyAXMJm7QSPXModSzbdoTJdWYk6LtrA2GTCFioyjmPhKf59AGwJwqQ3Zfeipp7atLidXk3eUsWN3zhSkrve67",
  "key21": "2hDFce7om9478AbTPAoupjpxiLieXFxRShuCR4nixfoohTeerd8HWJKkAe1PNoLedLAT6RLi8XfCqtqkSbfo2188",
  "key22": "bui9Ht36kSiswUdTrmNjtH7bRGgkdFfJUmx1HV1HvL1DJ45x5u3LSKx96jBHdXk6KfinmEQTTsYa6cWq34Gno4A",
  "key23": "5jDWayK4HMb7obrUXX9L6X4f8CWpaeMsmW28U8Xo2aNsKgtDUFLDME2Kvbdpqhu4DDzGZBxkGPDfaByCZepZmGwy",
  "key24": "2Eshf2SRyYNafGSrb97Drq37CP63Yca1G4rXQno4HfYn9NcUDJCKnoXaH2dQpCKS62obT58wu1ydNzP6bfyRKh1g",
  "key25": "MXX5a4XS25sJzntvdR3vvgVZuEgCoj1bYUAoft2wFDaSaGDfwSzpPX4crN8yWjT2hNVSsQzhRffmTykCaumTL8W",
  "key26": "462ZFV41VJhUgKeMr1KUieuqKxqxn3R7kPhW25T7UvMBVXxRyFoPSe7sSzt7M21mkyMub17h4edXJygzRcT13J8U",
  "key27": "2hFzxhwAMz7LTga4TYUVmk33qo9iccWW94tyiUbRbtBthHAS1sjwUQpN1gRZDLTzwE3QD4E8Ex6gkVV3fhGpq2JV",
  "key28": "5AMbNu9MSt1HkEay6yFcb3dBMqGbHDWUc5QvbCZfyHYfzVB3h4P77upZ15v7JkBBbupNggQtcEospUrReRjFNzTu",
  "key29": "vSfChiwBLFovYcJdoHsfG9i98BcVXqKoPAJxP7sQbxdJ99jyuz4k2iwjuN9mj7FVNKuzMH5JMSnaEqvajGEo6NS",
  "key30": "3ThGJJe7zGq3VdoCKKJtXy4VeTbDmkRmbmJN9btj6WsyF7KZyFYEyyNg4qxEi2m2zzrAMMhskbt5EAQRq6raCWpX",
  "key31": "2jeYGzEQzdtb6dkcfuTRweMT8uySDxMTrFWRYZpXiJ8A7bujz8En2tqnyB2atADNZ78bnZNHE38BH28jWR51ocvA",
  "key32": "5SJmw6svT9fEaD4Y3QSMefHHJPpfJE7EfPgkCVmFPjYKhpHJPKEMZromcQAZFqWBTQAu7gc3bHhVxTsyPptHX2mn",
  "key33": "4MJ9xmkX2R7AN9oW4h8ia1mQ2hCBBSJHhQsmGZXeZoWRLxMrKH6T9yAsvag89ifmXJtUvxk5GzYXHu1BRiKCAvj3",
  "key34": "5NLx2HKbqc7zNM6PTrJUetMT3Zpqt7kNsTxQJ78Z58kxAW6XnVbVA5wwrsBBPKnW96HBFHgo7ALsA5ziAGuhzUPL"
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
