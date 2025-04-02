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
    "3ksEAeXyiXRNGU8ARjZYkAVjZwoRZweZJnBru5xDgnnKwQBpmNxQ5gGqx9o56WShWwY4bBhSk2L52N4iVbWcFLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q2W7nsHiVFJMqBGAxjF1omoXKHMAF6mMfhdv4urGKAzZzahMaC9ZQHp2ZxAb77SQCRrpfMNjUwvFUBJVHHjNxk6",
  "key1": "549a11nGkPJicsvAHgLbFCATBTUpThmm47YpkKLxnNc6rF2X9tMWiZMahDHATgKtXxfvB7X5bTsHo3TmRPbAme4C",
  "key2": "3fYE4zPQWcqxA3gUBmPAMpidSQq156Vj3kYyqfoBgoU1JvDKCXG3ocAkRekKng2Yz2TaDxpUvpqcEGqvYF2H9mgp",
  "key3": "3k5mYfwGyKN8G74wdgNj3ukBmumW4nyPDczj2FHQeqThQnJquEoaUA7haaXsYRK8pRCVFyT36bggLZvwJfHdeRiA",
  "key4": "5dJG6Hs2ehH97BmvB5knDJqFCErRpfwhe5zrnVRy2nrBNkWqKrE1v91mLrJHLBVRQqhmNNBNAjV9Bh1cV4rnwvqi",
  "key5": "42kubHTuTingmCuEiuMYyHa5s3hYQdTdtiUYdsZnNUbKVmeDD1hmgHQC8f7GAvoi5r3TVJ2mphcQ9Fc6tyhBpT87",
  "key6": "Gf2qbhpBUhpevmV3G2qTZdF62prUzLVkoJLzz4eWkjtyJzn2wbmZN8Cdqsv8kBAfDrEd1ZcTzLg5UYVCdoQKdah",
  "key7": "67qMvo1GHkcnEnsayQ6tFTg9e6E9pcUTFtRq5QFqAL8qG3bY4NCtuYFwbH2dnRXvbgWRdwL1uXguNgjbSTenA4kZ",
  "key8": "4VXN5ggwPZN5E2rUrk2QztvwUV2hGc21tEJGv2RRUCLPM4jum3qPxtttHg3nLSMpUZ34yPzK2rLznR4na3XrLU6X",
  "key9": "3RVJBzwezWh98sXW3y3iJA6Gu5PUYhfRHTTrej6QNSFtoBBJr7YzNFPwa88JRbb4uHvCahg93d7LKWNf38w5gStN",
  "key10": "5djyadmp95LsZpLrVGAxfei9ropjWH6mhzDpL9oM3khtHoRF5N9BUHcotb4sYKtwgFxa6kfJddmmzrGoiDbGpfC4",
  "key11": "4zyQVNYJqw4RgMCEY5jqNBP1nANs1E7CX1xFvnaRBkC8mremx3dg5xTJWKoMFPMTnpHP6Yp9Xya5L8vSuMbY3zjU",
  "key12": "Lpw6tkk1GH9PQMQ4E375YTB4PdWZ9mPPo8ns8Ln7PeA9hr461CWXF5wrSSxeUD4XYD6r3WKVKqq6f4s2MuurNJe",
  "key13": "5r6cb2YuBLkHzwZbxpxjDRM2A2sRsYSz8uXSGdBa8BCPjhoEy55p3qPDbNqEQaZJvbLNt2My9jcKjkN3ERZrJdGg",
  "key14": "5JmdBjY1LsRV7dnvGD12Wxej9WfSCinuJGhmmHEhwun3TU3gqWBQLoDtkPRynwK2CiqHt7EdDQj7A1A7dzFL1Z8X",
  "key15": "5U8DZULZfuEXgpC9fhAiWXhPqxaSybv7otg4RvtJuQJAknbpFGDRDze5bUAck7AUM7bkqof6P8XJ7HGkd4nbhZnC",
  "key16": "4TJR1oUXZFyqaGvxnGEL7emAZUwXtCEcRt2BQRJM7BBpB3SD8qkAUD4z7AXuXr4QxJPVeSZjW9D7yn9BQRvpNMSv",
  "key17": "Tv51C6rND9Bg9r5Eit8uSrdgLaF8AqpqJqecAxcFyFPUZc1oaXc8RcGn4tmQS9sbqiwQMDSVUtHyiepPZPo6i55",
  "key18": "3mYjxSYWkznPBG8pNqjZJ9X19qzzt9sfcu5yRoLwsJrs1iFoodtXNh5ajkiHfdGLRo4oKg9t6Ffmx1hRQovCbthV",
  "key19": "wSGDDHT17q41DisUQGUiMKxTYZxKtL3M97hghwWfvqhQiVHjTkaV7a8HVFjmnowEVq7kUDdvLGKiW23Fh3BHgqP",
  "key20": "dVtyMvxEmbaAZeChGjiAv3eF9vBRXHo5kqwNFi62ztDzYvajcGyUroew2K15FVequ57rnYKgnyxHeCALrTvuc6J",
  "key21": "3pmP3zL3TKo87TnEBRUGPV8kSYW6CUDUikQ2pibybJHfz6MJz7tkw3dhdBS8axjV12LpbFcLRd96GYg8tWBR1ngS",
  "key22": "2Tj7Fij5gRkZ6qPBbU8zdD1sbKT4t3RJPC1hpv7S5KMyjY1TGR6ugTjfbqCLkqaSY4W3aRL7PzX6AaUGZJq1Ng9d",
  "key23": "4Y5TpA7WwBtUHDhFCXHVnFTKbVJwXbYsJR8RrxYLuZ3fNQHXZW1nYmqxGtrT7fGLxEDrNEr8ABZaSSxocHimL1Yq",
  "key24": "3BXGwwak4viNs1QTgmh353uy5fgYPypZX4zJCzdF7gcVVdtt9bTdhoEQC3L2Vza6EawLhCT2moQQF6puCn3Ub2xv",
  "key25": "5A4TxwZmgtdc5RDD1USBxWebnVmtthBF58Bg3SipDf5pSjV9MFLcePtTeFNY5dTgduL4ugVsPVniv2rBwAAV6ZDa",
  "key26": "1H8CbQvx9H9moeUmU9uj1R8iZZYmgZt6ZDpZuu81EotHLUcDdfsTRdkv1fvDV7s7Bc7qcBUBAkRacAZbuXrjdqk",
  "key27": "3VUxHDm6BhUE39CBwBgG54Sg8vfD5WgbinWwq8cbdMQDVi4GqFbEVgDkkPiBDnr7Yhp6BKSDPhpTvajEZJr2gzc6",
  "key28": "4CuQiFSWM33uooozzT5G4TFQoBPx1eqegK3Ckdpe7SYUo6twJEF2X5yS1yKqbUSsXLNCwXM8NC49ys1qhFuDyHbL",
  "key29": "FaPMDFYwfcE91HEqC4pKEURaECLMGZdcns82BeHqxM5sKsKnEABbRx8EHZHhuLsijzxYaCarGsmAjaKMd5RDNKR",
  "key30": "4HXFf5pUdnqrJR4XdPscthLhxDKmWdTTVz83vpEXfY1ur65VoPxnNu2hSuuD6AczUp8tLqNk5DbAdR3TYonoKJ9Q",
  "key31": "4oz8N6htxuEi9wbtWGkrd9cYqbrxxDV8gxhXCrC24QmSCtBMnbvQu7qVE9E9PsPrxPYenhmZjmSZqNXMdPc6Pp8M",
  "key32": "5MQNVypVn2iqDjoPSMvVuCkCZAxKn1nuRsxJtGXhFmR6BgMAcvfCYd1nsK3vCh1YWA4ihV3PVTRsgTrSUympELjg",
  "key33": "q52gq359DkHsxKn3HGkUjzEyrK9iPNKayZdUtKKBwrBuF8EUZ89DKDt9HGjan7UdyKmHa5uSXYXYbw15XBS6N89",
  "key34": "44c42CZrwxD5RySdNpzXXXZtu2JqZkfjxABE8cAVAPTC2BKmAAF7uxBFjPUh2STWrhErgvVFppsQ9HGPQyGUsXyb",
  "key35": "YcRqBxkzA7zFrCxL37mDvGqZxkh26tP6pdUmXhLfxg5eHWSWQ8ECtBewKy6zQoszdwK3PAoiKZfAWvxc1cfTCyL",
  "key36": "3Gqk6Zym3ekuak9WoVq5uGKvUKTYHPpbHB3DEirDRNUeKKe1LN6isrRvpv4n12oNTxpf5pJcSP5zzyC83SbmB7ck",
  "key37": "5TttLT7vNfbYneinjbcPc5X4BqFEj9puieS2QQ7Ztqu6WW2eXffk11Me43jiWiLgRk6pSHRb83fhzr3Nkfd4G77R",
  "key38": "24kv92UqifQhxRTotzeTk3nMS782rZ8YZbNdR8QEGsQbrmR5RHAhZ57isoLBsmjJTPTMi47Rjdmmwk6QUM6UWZq6",
  "key39": "4e3voY4exuCZmSQxtJWuhetrBy9TJPSV6XEYC14QHLvXPrpX9GreALw32rEEosbjJtEETuU7ekanc76QS3dMVnx9",
  "key40": "4o3cfvBEAoKYXiCT5uecahkZwBP1ZxDKYM1j2xCWjtSyjkuPL7dnSkVxUxbPPtxTV2msxwVBeL7U73bfhweK66dw"
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
