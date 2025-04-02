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
    "3pPDntri6sQowNMCg7MXSZKf7f3GBajUG1eTd1uNdoD3MLHT9AXbu7Mtfbwqjh9PGEyKVaNbeKWqGVf6q1oBDkQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X98rawuZdmW8HMg8MwzrF9bf2HdkMbVDibGpN4AUnobMLHtajZGN4QiSyt276khp1QrYFj12TgXFrNk42MhUr9h",
  "key1": "4FcBUPieAtmhxt2cZ6gCLW3yy5b8fdRptZKGcXLChF1JqjMWs2SUWwGy9y5rV8Q4DpDzDjGvX7WaVTQEj5tpgLdi",
  "key2": "5QMqRCJ4D7PGgpQ4L5vmofMkppBhGRU3WCqHAqW2gkBZgbQkFk4PaqharBX5Mzg5UR9du1bfH4sJRR6P61eGRWuT",
  "key3": "3284vgTDQJonHbV6oBQaiaCoDMYj3HogLP2zmk3UFaNuk4cut2BmQy6HsMxWtqSYkhbUAuBa3aoLmXApniBSfGhq",
  "key4": "5gctLGGTucGxyAUcxVnKyKV3oo5FR85DETYbTucWxFF7Y86e9e8wLqKbLt7XadYnMMa8BDCdd8LFetSJtfsitLaQ",
  "key5": "5biynwaHEirQAHFkCZoF251JYXerPcw2K9im5YucMdbbFWb82kPZdjdzMhDzQaVK353Bs9vM3R848eUg3YrSjRGt",
  "key6": "4gRuWEKVUUt1JMsskJJzxtUyeRs6buCc9kTLigdBHYoympr4hdJmNJxXdzyeGQKEKxQxaNm8u8CsFN3ZH4un3WzC",
  "key7": "5HVjxZEFePfTCNZLcijkTvncdhXkG4HcXjUNoqnLCCkUJY2AtoFe2DwUH1wK25QWjfEhNZ6CUpErg2ER5NphvJkG",
  "key8": "39ZmosTG7MXpCB7PJtxEWEsM7JzmPfytywKkca5o6RVX3DBsWegdBm3wfyw2u3Nd5qWQ8mBQaWbjdL66uzdfb4SA",
  "key9": "3PwevRRZPDnucBqqJgSTVxoJVQ1oCPakaLsksQ5wz1KpAvbnHbgCspXBxWvbDNyc21nXJMX1VPfRc6t8r1rgASzP",
  "key10": "4wer4GYfb6Q8kdK95tcH4gzDMeUt14iT5wFZDtd9NWDMJnphyBRt2H2xZsTuKVptoCsKdj9nnUVbJJNKNwZswQNX",
  "key11": "4wZ4FxC1cXLPMt3h4XdQeyrYyMrA2U2auZuHBvtJ6e9uynn7JesAhsZMNSJfbF17G4EQStdJehM6axQJD2Cu1C97",
  "key12": "4SFgHM8sqKwHL6w8FD9K4Vv8dAR9KUL7DaMKu3iWK5SNbpVhMTT7Xxk3yLnVmqQRBQa7Gc3r7W5wEmUnCLP8g6yV",
  "key13": "DJU4w4QqqsLfJuWra1KfZHv68ekejgHLZ9AmK94oEfQZZwLGwyiaCNnDyd19983JLMQks96KjUKwmdoZ6o8mZTX",
  "key14": "EuTKrb4shdC7nqxGzhaHzoJUWxPjB1P1tcRUWMjmkmMaP1wZrECaaFonxWaJMBVbbbg9XPHj3o9itkWcJ8pcJ83",
  "key15": "5uh3BSydUrdpTdyrUWRfS1qBLw9g42K2a6v5v2U5zQdLfuYN2xsbTm6GxxvqMtYSCYABMZ2m5m78sn7YZm4yKhC2",
  "key16": "4vjyPpT1w9BT84LqDSPbbcN1CToLEy1kgW6ukT1sVNBNRpRgD85g79rQ5wUigoDySiMZ2Rqp7Da3TtJLZAZQ8ZB2",
  "key17": "4wGb2SS7VWf6nGNyGV6GWG14XAD92HToDMAy2QmffMhdU86QZ4tWx5ZTtKHxYkFC5J4YWN6xwYXbQ6nAQsxtLg91",
  "key18": "3fFiWJ8um34Hcyp1zTS1PavhHvQxVuz7quPg62PT2HWSGT427QcWQTWZqMCS9cwHWGphLq6JCNK4yRNGpxemindN",
  "key19": "uXQVSKG7eK82kwjDkSh8H5QGrPsKiXanMn3mdwxnexpVknfougojqVxYr1RQwEChLpBiZ8QedWF4WTAa7BUM42f",
  "key20": "5n2W5GPf2dFTvqfRFx3CbX5btGGHSzWhyv8YhKbjWAhYwNKxBsTeKqzxHtRoZcDJdrjBgc669j8nvMGh8CV7LZTZ",
  "key21": "5HjXVzJ6pQDXXDutN4WUPHMxjhnpXw7dRVwPZbHTehGf2riDze2VXPcCtCkr6utsoqXeXWkenjvzcfPgPuGnTpWE",
  "key22": "MV2nN4Sb3e92Xe3H7RBXNupBDwG6oA4y2pYN8VX569yNtFAKdWfGe4694BiRSoiYN4tMEjS3XjhDUYRzzHVXEoo",
  "key23": "5itqbu4Etc3ce9qVRSenHK3HP2KptjHTpNp1pr3rqtqov8eoMEKzmJvGoM3VDhNfBmcqJEQjVRo6NUbTw1PX9EFG",
  "key24": "5Wpb7xC1u4GYMqTDJ1fYNXHMDDW8tCTuzWWTVgcUDqSQKa6C9dbmaSH4v1Y5TgvfVtpGtgVsUj71786Fo2TEGFR7",
  "key25": "4naxCao734BVAs9M2tPPxvUy2r6Wp2CxkoXCQPFmJYjPhgCXQu6Aa8vCUfareccRWLu4XrUJkKLJpmzQVSieRNJs",
  "key26": "482e61ULTf9QNY6AXKTn9hYAPqGRq4XgqSwScSivvNjTFN3CG1euzRrtWvKYSQwsh4m6t5JDCRXQPTDu7aFHsuWQ",
  "key27": "61YbdRnHHq7MSPjyXy3PeeoBMuUZfz5bFQn97UcqYjam4ADPBRo3dj3WrkxrJG3cBiuLZZ1zP8qfFByPcuKsVRfv",
  "key28": "5omunZ8i8CmPiKKCCYU85o85LCg42agaP6cfTpYHQRjeHnhcDj1YwYWrrhPVKjgUKuPeDAf3cUT4swgTnWj1LwLN",
  "key29": "5U9MnNUTmCRsuqvQdCcdnDiYun1JVWUXLGCSXPYgeBG8tf9Qp5nieS1pRUsm5rWkRR1ZmYAJGd37sZjpgy2WiwZq",
  "key30": "2bZhqJvDFHWeTCWoRwKSZXbGm31C2EHEtkhVYjBwkkAiSXaNdEr9fVkuctNxLtT58QZvpJr2PE1EQxNWG5BLLxp4",
  "key31": "2QArbvU9B81K55g13ju3x3d2W1VejTqpyfRZuk3yrY3T3Re1JVSQpoteXoBR2p4vMHgqHujy2tjQ8o3GTaebHcJr",
  "key32": "5spv9wFoyVoS2sDd1q8LTmHymgppgYf3YJjxEed8iMtjc68dsrTdK81MiYMQZ6GgqnDubwhbg6R7ALc5aWx28b8J",
  "key33": "PveBShXoT1ramUa299ecKEmjWgcpv8P3oKe7B5fUz7LPeSc7oRHfLzYfgUxQ3raZXDGViVCkutzcSr3TxEf2ERc",
  "key34": "NdxgXzSm4ovNVYkyiXjg15cN8CusfRZ4nKVNuqR9kwFij2nxM748fFoZsFvuctqyaRaBU3zw4qYasf59fMs5mTy",
  "key35": "46ELrwBNJz4NdwszrS2xPTNVczydY6gZkb5eFdZhcxnTeUD7PHtVJd8JjKNNYhSJei9iP779mdjSbDjFa5iNbwsp",
  "key36": "265yrKCNXYf8i24qDMwcy3pB8e6dDqzt2kq8Giwp9dDAu4tXg8Tr5JjjSvBbZAND49bPi34jU9yX1n7pMUjbV3xa",
  "key37": "47mrK1fyGfuFwoNrCiPJeBYFUnZ3gyhdsDAUNX9FbVpQ3rtnXzG7hDrq9giwhsJ8auAgxtXAaMdiKK8CKJtPYhZs",
  "key38": "GQbbiDsrzDLwMBbNY6Uuv13We9yx8KrZ4g31fxxDuKEGoavPCXzwJW6CipKTtvkrJ29fV2p6e1EkPvbhFzV1B7Q",
  "key39": "4CrQUszTb89QYH3KHYG2ebL9pGmFXXLSVfobCod3tbNRJcygHPnW8w34X9YuGf9bPVoeDW3HTnmYZyh5MvhBJjSM",
  "key40": "2rgrhMktQQu21SYai37BYLvGPJAWYim6ZCfnW8zx2AhjitxkbQSYPXF2buwAEigXMkx8uSCXESRph9M4t79EqKQ1",
  "key41": "4iKM257v8BComKQuNBxvpHvwB6KiQ3NXzaVVd9gW59uSUNJJpZDdmQEmrg9CzxG28ASjteuqFgGSWnPVaCRRNRhS",
  "key42": "4wczDywwnKXLjBbTkzJ61SHSFU3M5nFKdkGGWfBrqU6Vr9k35xdEiCe5HaxT7Q4MSbdAfT73DkZMPf33WutxvQUk",
  "key43": "GGeudQhuQBJ1eNjGTLtD63sSR43mJKuUZNQUKDtmd4WXhgBJa9wRDPfbSxcdJb6k6ptrNBVCGuwDExeyXoEZc5s"
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
