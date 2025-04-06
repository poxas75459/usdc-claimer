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
    "t7pnBwvEDjoTsRqNoxKgJSBq9UJHaZ6HFXBbDXqQewEWVTuEcRsaTbCNojesWqb56RjxZD2AYUVPCVn3k9NUYw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zQoyJfoJGr3fZaCT2HmrnGt4VfWpBqXZRg1hZmsKD7iX1AY2Mw8UM6CqL5vo6quNi1k7BoxkuNaSPG78JkimkDg",
  "key1": "54UZS5ftjAPecpJy7sJDV8pLkWVrFNMy8HZJfaV2fFwQuZPgCo65UYQKfSWchHm8k4JjtwqNdSbJYdauJ7GTtZHR",
  "key2": "4F5jZ3scjyKPGMnqYGVYrfLjXj3gnSaEBUdgqnPbcDgVe132rMpgz1W7DSyz6n3A8cASERc4jCQfHpQmvzNAM2rK",
  "key3": "5tCtTyrCSY4VGUtZH6xMs2FXXLTuLo4XJeSUroHe7jUcKHwB2H794ZSC14Qt1uSSXZfspU21HMBYhaCMuFwH1TR7",
  "key4": "5VthmScAYZpwQH9ALKVmzbgNn5omLwWfWRTC21h59aR5DH6w1GgKWKqyLzuRzg4oYekdYqY6twAYjXTdesRF5jXK",
  "key5": "3bsapDz9R23xFhY4UhrCnAq6gMJJpaRdoNtWFhBQniiVHn8YTmRuAFQA3k7oW77smSv7aC97TpGKBwcvSRnT6Xrm",
  "key6": "5EvKMx3pASRF7XEPiBoHiMLdzy9uMdqKR8Wf9VM6TRFEqffoXquo4oEERXRVUZ1T9FDN19zbpAFRVrzpPBwKbiDd",
  "key7": "2zjpmxQHDu3MKrrpiEzvHTaWDaW5FkVvJTXbHu6PjQK6oV3j6FumHDTMzH3dHEu1GCePiYfKXrxBdfhQKZiCfgRJ",
  "key8": "5hz3em4TrXTrgo6byw1iAQcYJPAKaStv3brsrzab85UzWfQxVBB4kBWREcjscGK6JqNd3bEpPLKBWQQekLc6G6da",
  "key9": "5kPDUQBL8iZHhs4hwCS72rAX9J1bBjDV6G3WTDknBzkGkhWQYYPXSpsNESNGdVZzVbMwwzrVR5mtYSfxLZT7HDYo",
  "key10": "2NxGdwn9TVwuPow85QPx2tsUfLgsLfhCqw19vR384xhzEV4GBvrxm3CGzG13hhoyxvX52mmxBeUSKTxEbuv2zm8m",
  "key11": "5RWApsQhDqWdEJPZ2zoV4mjHY8TzYB9TtBH7oieJtykKQgZdc2Wrr4sgmezjpKbpTgooXPmsbnUvgtCcJt6fxsDE",
  "key12": "56p8kRVTSS9vYCGC54zUG6xPVzvBkmVA9SFhun4neUJWDPXo3A7W6Jqr5xoRRqoVrAGVbVWpqpAUzmqSna1cTxFY",
  "key13": "3Bi5UNdBoVRDCJAh5pHo5H2cDmqbfX5o1ABrLVwZhpkdYtGSWdYs9cHeFAjoWUr43jVx6jBazGjWULXnpyVg5vgA",
  "key14": "5g6eNpteTVC3vnjqcMsk5oxUWNnqnTJ1pge7xUefEWj8x3hUTQhxjLfc4v6ZpqRzz4G3vGkR7xdPXg4kW5xZWMFZ",
  "key15": "3oZh8uoUUY4e4sFv3HV6aWVBaR71bet9b4Fk9zHyHSRam2PqVUvNTSjptoEq6cujkdraE1y41tTky7ty9SjZ8WM1",
  "key16": "5nWkyEABbaAQfYrfYu2dNGMtumr71wcMZ9MVu2P11JzZLJYAaJUZpKhccbKhyxvAbEEUF7zQxaxiHyb4gWBzfHDA",
  "key17": "3qEmKE1ThtJA1Cyxj84aqZ5Z5LTdvPUW4feJ5jcFZ4tHYNGuTwDHhLhPZKSgkH7jxkp7k4Y2mjTB5G2qcNwDakAq",
  "key18": "3K76Zi8bc71CnRPQb9KhiZ2wMQvQqxHrppaAm3RL24RzYzVVcHVXk42FrmdbzP2zspoU8Kg3nWN825qPLJaNxfMX",
  "key19": "4vLUsS5QyLHuBn7BpUZ6hWtHVr5vrH4STomNezUJLTKpYeKzW2axjNqyTmj3AqYSduS6KJaRbLCjztSRyTUPbcvQ",
  "key20": "4Qq6yjsqWLAmpFnG2bPQ5SMQCjKYSz7HErfQrtmRAoge7T3BcUVK3ynmNWC3STQBUfJQN4hKYKVcn7RKAbXScd8u",
  "key21": "5kbpXAHaQJJuGM6hzQkV1mV3dTAo3Tt8dKU7FyepAQpPEj4VJoujezCoWMivi26rp2piVAn4SP9um3Zk2Bxpe1RM",
  "key22": "5EC6F5RtEmzns1z1Ruw6sxCQ3BwS56WChmfoJoiYhXPzxQUXnvLS7DDtgX4pwz2KkJCWAHLMLNn8cfefTECEi8c2",
  "key23": "5vXezJx7dSx1rpF5miAphbtxic3ibrhteXoNqgeV5p7zFtEeUVVQiohKEwyBmSCqts3VveGU5e1HYAo5hPLhoi1G",
  "key24": "5HTW1PKBrvqpPpSgGQdyAJN15RnYHH3ASxhsFuu7UYzY7MC9zFSUMM5XjeTjRhUfMwhy1eXdYU5puDbRHLdct1pg",
  "key25": "299gtpQ5E5kbYXppUoXFm2WQbrWVWjft65WgCPzYFMh3PYvysB7KpDLdHMr7mV64SD36ioAz3V2PBejADR6T1rgA",
  "key26": "5sXCFj3k3NjijuDE6ZCNx6m5HvVHF1tsuoUdmNbUWbfZLo7WBBbjsjoaqaobV29H7QHtUKWBw2Lzgdffc7zC2uhS",
  "key27": "4i8EN7wGjwr6PbjEdaaqpeevBeZ67oM3bQbbySwfjvejrg4RSrVzhigmXRBkJ6MBzzNcvPKnS73GBgEzfBNDoPxN",
  "key28": "4uyQ5gcpKgrLuhYhFgUev1JLACC2nn8wPqXjmxhkEshz9VqGX1LG8edN6UMRYoi2NEds7wNTyPUu2zfUKXEVTv6Z",
  "key29": "E9nMtSWX7e7fejRvH9wrDf7GZ6kG3e6YnEVBDz2agz7BZ8FD9UJgvFZksa1eoCKpBqwEoT9Qk5p6JjVU4dkQbsi",
  "key30": "3A5xq7LwUA9VkcwH2a3KeDaUW6xJWEmXdxXiNWURb8CPh7wVGRrfLyzqo4adyrD5w8BeaBPQBDoJX1ZGmduCgyaf",
  "key31": "3ib6cPwHEyY7AAcEEQgt36DeBxnimn8RALtmnyriUDnn61egYBXNxXsrUmfEM1P9TAAbSgUQ7X4ZC92FR3ehBTZ",
  "key32": "PDRPU9waVovgSPp5rHiuK8uoFVds86nnzZQeuuJKP8LdyJLFHYSfu4ABZB8qsGojAWGvd5pBo6pHWnCX7B3ajNC",
  "key33": "35hgUHPdfPspy6gUUh5pj5zys6kJiK3ajRL7wDHSc6CGzH8RPWnFxAM1DtcgResX4yrZcrDmiXRmkBebkoqX2J9E",
  "key34": "55EoFbkWqLFSLeGaKzM4r2HDWTBHRRYemCVaNpFoUk32QFKY4YobJr6PG2KDUzo5VB8bHZ3vEd1Lzzy2AAAcSc1W",
  "key35": "2asAXuEsUoDA3Vtbgk7DNehvB6tw1Kr6sUWjJooDTtgpDwUBUMwX6PGxoGrZ19JHP9EmFbPkzxjjYttmyLnB1FMY",
  "key36": "5LWbNDtJ6KhFjmR2jB4NVDeMvZvzQoKxGVUidfC3nqGbvfMUrxnQpr1RtTfnnLgwSEg5yRLeJ6apQBr7o7XVu8GS",
  "key37": "4zGXsrD4FEYV6RXwDFG1Ag8xg4XXPyBzZAhqmGQQXbnKrsUdKQwUAr1ZgfzpngPxC4Vyzcpdp5uKRgfKBUu1RPMX",
  "key38": "634pYEQiE1MuvrKds5sKENd59FHTX33EFiBQrh1N6QxpwNmi7JfPJX6h1YYE8mf2xB14PiYhxm7QR4L3TsM4H21C",
  "key39": "3ziqetx3RBnGmLrFe4de2Xz1niCKFVuQaRiurC9PU99AJuDX5JX68zv9wN1rxB9WmfVMpgotF9bGYXzW6MteUEaa",
  "key40": "2w7NaSqpTJ26zhwnYEjez1QJkPPj7fGnQ7BeLtk8MjUgRQGn681RJYnd7RdPqaT7BM8qp9YG6pV4zN28PQmSm3ex",
  "key41": "zHkvvsi58xxoieyg5TVg8tSueigHiZ1GCX7KukepniRAF1pGEHQmGVYaZTdP2ZDAKox9mq9g1s53RBRTVckvVch"
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
