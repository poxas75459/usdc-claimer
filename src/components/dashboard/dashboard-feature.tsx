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
    "HtFddPPatmsuAH6bd8tUP33cFPD5pHHJDmWHjha21VPSrERrByx3KJjvdp3unLMNQvUP7s71kgZRtns5fM2wJcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GQ9smcGGS5L7Mz78vxT1MbHEwegJuP3qsgFFGPdA8PqpGnDQy2s7Spr7LP1M2vVnnL5tVBRrx6bBkmJ5kes7iuL",
  "key1": "swp97fEd4e8KzWzZ4wSqiwTzE6UQD5ov8hPspx6Ka74q4fs1YZ3S6RLVeXNi5uF1FFxUnsJnD7fiihPiG3vmf6w",
  "key2": "3iaxkt89JoXqXrMKshKnvTNKtQAVHJrw92BTiR1YXrPLoRMom845CBjiyt3XEgcdfgeGSETUAW9h9kaiMuq25Ymj",
  "key3": "AJkFBZbBULEtvMXN52nwiqSCZ6D5fAwkmxJdnjR1yWMo5JCmz2KRPkWko2AewkyNa6P2t1e8zR3dktGhBLbp2gL",
  "key4": "3dYZMHXYj1uwvb3r4XUd3XmcXC8KS5obKwcczhFANbjo7ckHmd5PoNrxjFLpXxv3mg2V4VKrwgNWbNoSFQjaKv76",
  "key5": "4BeNmCBHj3a3ehm51CZCsv5T2NVSt6xYWcoq1Q8y4ZnKyvRnG7PfffEP7ezx1c8y1Fp5yAWapF6sypvsSvR4bpax",
  "key6": "2eMKjUXMZvLh8ZDvYLXuENe4JHooLsKheNsi37yuBimtsaBqeHMJJozWjJXZVmi9NHnwmRCZXixKVzz4gS1fmJNN",
  "key7": "5LzpsVpP8ufFiCqdyBzKAF1FLXmuW5fzBVqWbkbtL4iBrp55uFCEn2N6etD6gZYhgrha3M6ridoaM9zPnhNhL9ZL",
  "key8": "2Ey599YvYLnqBjMnBUtfToJvQ6P9rZqeoVgAp2zDNcZeDzZnFYXbw8ceTgH6vsp1vmSLs8BNv7gRuzucmZCytLRQ",
  "key9": "2L2b23bAQ1bCbXsjVYkBYv8iDydPLgKibYyrWkhNwLBsafzkomNQuheAhUXCEoJRTMVfRA9V1wVX7MYxmDCbi5dr",
  "key10": "uFk67byhh4qzFpk7DWWD4GiMybSfiQpnykALsjBWdd8AbBJzrRiPbz7cFw3VGBVQzJ4SBi2YDTEtiL6dwXg7cYu",
  "key11": "5NWYHCysAa2KB85AYJrAVL68kyXTkEwChpFgThGdmeyKGcoGedBThG3jGcGb2uyJujdAmkQbw9JApt2j7EKvGc7M",
  "key12": "3ppamDDmmn2R8VoPVTWjwYvXZtNfx93V6enZjaV7MVugcjXeDhZWgyjYkV3aXLmNTi8kwJeehCgsdMebM4SHiKTr",
  "key13": "yxxTqfsp3PE8R3VnPXX1tqxBXVkqD3JEsHhd7hoRLeYFMuiLoAWBFQsEugdTtAw8DJXiB7XwmZCG21dyMmUkuvc",
  "key14": "41zJQdLKBg4Jfs39f8x6BJp1tx1APiXFf816CZ71mwxmYCsCHDgxymsN1ugoE7FfoNg9e4GR9tv2tUn3wVVNrM4N",
  "key15": "fK97dW13tg4mqdyBVpehnhAgk1c9uTjBqvfYDGUCQHRBi5rMgr7LaRUjEjnknrPxyjmNHNTPYKsQ85KZYHVVBWW",
  "key16": "5cjXvgGWfShM64WXcywoq2QvkUiKSwJCneFX5ncYsTnA6qMAhCdpPGFJi9Pjt5xiMaZQ6zY21jTL42pCVRkCuZ23",
  "key17": "2v76tr76LWkTj9wsxc1gY6FD3mYwBVHzUCnCVdY2HsD5Nb3gYy8S18BGMv3C65LkUaA6HzWH6ncPeGnsEBKfYVoF",
  "key18": "b3qkciyFtQBywsd4LR1gCM32G2E56Bdj8A51UdMdpsrCE4QiyJQTRrWRL22C2AHmbs3XSrHrcMm4TTUgJoGwtiw",
  "key19": "atu4ACiimmhPxrVxeAU1NJxavhpPSsEJyhXAhJuciC5JthoFZbeNZxVTmUgEJnG6cg2eGaRsqDQaHQkAXcy5bGV",
  "key20": "3Z7HfuJ6Mvkof4cG3Se5x3JLF58ko5ak3yR6mNJ1aKYBDoYxxjFggEHS46VWvE1XqFjD8tzqNLUZ8Vh3AJf1bqFY",
  "key21": "3yZNnoxoE32Tsomwdz1CwHzXWsXe5uFfFGnRJpdc1KeHSA9iYD5jesERfegQr64XeotvDjAhbMobGsRSKMZ9fL26",
  "key22": "3PAEFPmoLHwR8fW6vVXYjq3xt92LGcDMguoX8cHNDUkj3BnWgctrcgq9m3EXVMbSd7y1VF8x8Cwejk14BGxsNt2h",
  "key23": "uHidj3VZU8WanrTZketkXRa7aLWcaT3y18jQnJwroKyKw28De9wNsUxsz2YKFd6D9hPfGzwrLi2wC7U4TdHjg7q",
  "key24": "58MuqXjuvrmENw1CemFt9wpSomgZK8AHXap1gBw7oauCueBd9eo8txc8xvVWLvSA9rXw9uSJzM5sdLCvwg6tLqbz",
  "key25": "2JWe2mBHqisTUmproXNVsQqx1fV3rToRUuZJ5cw2C2cBjymGjjFQbT2hobzTssKRFK3J61mPnAE4pVLJ5cQpeykW",
  "key26": "5QCQBJKgfhBgyPumvr6Ch6RWfzpcXVtuXo2XuQE9VTn4LSWA2kCZiridHqrmm4jTHvn3V8zT7BW5wMNmohqmf15g",
  "key27": "979R6KrYM25CewxdFo2r2xPEkzqyPeSj5LqGMj3yt5GsxGhn2Ya2bqVqpH7jtmkGMbpwoPAB1x3SBhTY9fv1TCa",
  "key28": "r6cC67K5UXTvWH9QzX8iKsTNpkRAqBAdxx1BdQM9nMoLVp1X2yGpTuNCSkYQqYs95jADpvvrs8NeGi5jopeQJtm",
  "key29": "HJCb8wzjKWrH9JTou7NCgBuTHqe8QnMrNinvf936SYtdc8ZiEiHLGkWoNMaugY2LfG15SxzPzxrazEQvwLFWBi2",
  "key30": "2rnR6XaBkEQWJwLeLmtwVq6moTBYTq2t25Fb1KJx73Sgf46yrCX1Tmzcc2eYKCaipY8WVyAhcWrJMjwGxE97e5MF",
  "key31": "LGWSVssAR2DyqahR8HwuyrENiRHJWRhcuaejPTTnAX6ELdo7sWNcfrv17at2sdfLEodkbVoDqfSxTNHxCqTBq9i",
  "key32": "5Zj2Jnbf7uw8BRUkCjTP9Yw2Jgox1sAS6F8aGWR6NWG2eeFfdNEEuZTrhLQPYmJbFKbxQS3sv4yhMGqgatwuFdzG",
  "key33": "UH3YdNDkPPaFMvcQnFynMUga6YZagcjiDzKwQcPBb4aNwAtYMrG9LQtx68KscWeyhwM4nsiyR1bsRmBQQ3rpb9h",
  "key34": "65rW1coEVZt85zMAS9u6LDzLJb1Z4kWjSvagRcT7vNW6Kg4wck3a3LUNY8Mz58X1m3kGvMsk2QTpdLUrSEAUik1T",
  "key35": "5zUbXsUKjGmGuFATQ9yPX2ehsyPDMLKrEJw74cqVeS7VMqicDRYANMB95CNWSmJUksZRUYhJ4RvrAi6Zt9TWE4Kv",
  "key36": "3CD4Aknf5ub3mvrE9MVBoEWsN2gqFx6A967dxFChA4S4xoRHdcNfxnMHfLd3Gxik2aGi7RD41EntiqM9oKk9Hvx2",
  "key37": "3qHUxMi5T3btRbR9RiuRhNHLg9hVTRyamwwqe5jN8XHg8HM8zEDZbgUCUASfodBoVdnjHXp1t9g3bLwUFudrnqdc",
  "key38": "25EvbgRK3MBHrdHtT6sjZAmDoYg44bFiuWRKYaUM7beZSERGJaoXs9t7nyqzxWPpsV1UqHnYs6vbgyAJafCDoXSa"
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
