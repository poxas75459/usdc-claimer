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
    "4b7Uowk6MS651pr8QwLsGpXtDhX9qu5cxMeBGjqXM25WkoMjy7oTBx99tafstSHEUJdC81ZGE7493jnqfMkyBWQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFccA1WiEt7SZFCjixpzebZ5mNdGCpcdRB3u6E41VNABCqLp3DprApAPVvbMkWanpj9WRP9zkArgzHPWYRQgkx6",
  "key1": "4tm7ASEXLAMMPRNdwib4bSePCDS4goZBr6QBtWVNyvDNVmuRFFjGEKrayB2yo6wi2qQ35H5vKUs3ZdPzp6kPNKFp",
  "key2": "5zq6FDprVmtFmd7jzx3eUBYY8AsR6UCEK5vw9LzsLCvECYAg8RRnnrmNkUATfiHsDWswPyBv7mhUE4698XDQ3kic",
  "key3": "48PWLsp7r34aZF52if17JXYEcxYnvEwB4vrXFUELo2Azwzyidgkhk1qmqA9jzBghrpDHMV5rjnWfJ7mbPSPZBcju",
  "key4": "D19MTRrQTxE4BbDcnvFuHPTye71PsjkdQt3J2YFsBwAr4VDk63SyZ2wr9Bk5vqcwCTa8xhn7hoCJSZ5vgNoS1SK",
  "key5": "53AgL6WEGa46JYiVhtHBs5CwiDMSbG561hSGaa93Wotbk8wBADWUMjCDmxwHUXHAgdfrBdVttVxFa8k71NMAWbrz",
  "key6": "2psc2JzVAzFbN2kUQadwGHp1RxWt5nvS71c6sSntybarcg1qvspDaXqd24ogT7aZ7JgAkUBvu2VgjMViiJr6q7jx",
  "key7": "5sz4kxYQoQbGuR2pEsaJGP2bDmZTodg3pAV8c74CfUAz1iNDavdvHBVqszwq7WAArJuLyAxm8hSF2LH9Dwg8KGZ7",
  "key8": "62XNJhS6FMxh8xtJW876azG9UpCcPmqo41S4EinPs7y6hDqjbSYmYqAwu7zoR1sMdb3TRQQFtqJgTp16LRHt7gvR",
  "key9": "WrNQhv6E7FnPBaUzbX7gnb7XJB18TSbPtc8gRQNfhFBPhHh5yc9W8iwxCY6vbRqYsCtw7mAUoTm6dnHSCuX5L6a",
  "key10": "2vexgpKQaTn78byX2G9LHfcrtwuhim3vTEJRNAFExW86wEuMXd5xxrKCbQCQganpfyoAosZECVhJBE53hsrgtHwi",
  "key11": "t3D1vyZgxBTUTq7CsZxNnuqhNMY3h4Kyduvxak6YaL7UsxD2dgwo1ks5xySAPjnnY69qWgJCYJBrkWgHD4ZJn7N",
  "key12": "MsA49YEbn9rXE561CrrhSrFjqVPFnEtY5HBFtzq4JoWQtiwTJasgLusVfEQ6r8mHCL9Rt2oqmACzG77qR5SbZL7",
  "key13": "3sizDzYv7mZs2dbFFdrEeMVc6uw2UbhaGZMgidZEAXhPZo1agBYPo4oDhyM889iCQvS9yd88fy2nk28UED8khQ5r",
  "key14": "676wnJvvmyFdcGnw9AkXE5dF3XveSrse8evuywFxfbfXWBnKD25ae7sdU6wnH1fAJFNsytLSV3fmvUPbnD1dvP6i",
  "key15": "3WaqcwiHPiUUngCRdZGUuLFbscbwq9MzcMQmCaXCKcaet61mtCYad5jTcQLLmgDUXn61dTSRq1rVsvBUm78EEGLo",
  "key16": "5FH1NCqV8QZy5Hyz7APckVHGiPLPgYZkZTsu47p2jpZK4r6zjusNNcUGcogHqJg75sx1ov6UmKBdey8U7NQb7K7b",
  "key17": "2Z2bnotDvHUNGoMLPzNLop4XmxbADNx16b37tXskwv4yqPM9K3YQmJrk9wiXVg2SYL8TWcW5bc8xaytHvbYszBk9",
  "key18": "2LPYzUPbG8ieQNR8vPR3eDKQhqGdRkvNBWjEx8mBVLe92NSAGfxAFy2iH6LoCmDvaYqXSTHGPzyDrZA7rUE15MSa",
  "key19": "2wwmGHiX2LqkuZJmCwXokowsr6GMgP6G5bRyYkPDH2rmdZkLt1qfqzLK31rfV4kxXp5ZcvaDdv4Pb4SGcZsoXC5u",
  "key20": "38tjJcDXAtNtjDU7uHLFrVgnnSK5HD5ngtDeNezWM5pabCnbaPJ2NJN4Hbq9V3L21X715AfRmtJARfshs3JnHK2y",
  "key21": "aqvnLp9xuGzNiZUyvix6oiDffT6DuE9KAK6xpma4LyFD5Ehmk5Hb4Pr7CTCdMxwSa7DDhQXXGwaeG6BYNw9FwH7",
  "key22": "3VZ5umrZSxA5EP6cswVqsBRLgq2CXRbpmP81Jk3fmkGaAszhknNeMJtCy3YygWU2KBFbWdjxuHrwHxrdP1ANoQHe",
  "key23": "LWjj1Khpkr64DbLhiMqwM9L4SQgQh7nFsTqETDfFYExz7DEx1d7T3t8ULKEHniJF44FksCWBqVSTL75qeJkzf4W",
  "key24": "yKAXf7MTZSiFvafnH17SfHuFDDGM6hYwApF9ZTbyeGwfbAPGvSedsPeQg9AAjsSWikFMNHdUXVkdMYLrXrUzY61",
  "key25": "3C5J3WZDtkm2AuMq6bT3dhHtW9bTfMKNk63CpRRneAsb8ebnkRA3qWkuxZ2K7QUSF2jzwZRsmsprt4wshxdLXi4Z",
  "key26": "2h1qES4RwAhVNwJEbuQ5goBKFzQQbq9XQZRn1LUYE3EcxPvg19ryC5p4ahyruK36HfDanZhCHQgTvYfiWkRL2LoB",
  "key27": "4CHAcZnmBdH9JEgoazV7gMGt9D6M9NutqMTtSLTMFLmnZaYXYRh4DpHTtvr7b89j7ykbByf57fVBaQ25Znre5Fpq",
  "key28": "4bGGCZv33kS1zxmUAT8LDpqBSpeYHbP2LHU3MqngjX9x62L49k6rxMD6SaDKKBhwpgKnwXZf4Qnee1kKAxKzNotr",
  "key29": "4tevWHju3mtSeKZYGPEdUKUo7zad79YiYV9TjoYKaeqcXpJp7zhsFnqvbbFHt6Ef4f2KNK5iNPKLUeCJAG3DuqYk",
  "key30": "5YAGKpGJ5Fzh2JcMkMpfbRhA1K6ZeUc6ui8oubyRNzAHMPfB9i13V2MTrLYmE7XrLuLaCSsboTMAHpR5xtzX92qT",
  "key31": "5ZayKZ4mG8dTwL7uGEtaPDGKiqsBTWVFP9LbpSM8mCEttJEGYbuJCKT8GWdGbzvpv1iVHbX4kx1eM98FpHy3VkrZ",
  "key32": "3GBmNvgmVh4t1R7G22xfJ5LSV34uxjjsMybHfVRDBrHVNg1EKrbiLMVbzQpHwTwkt5STMazgN6anuFhUaJgQinhq",
  "key33": "Ef24nqkMiyFD74FVQcq5qwY3de2KJjQbo3QqhqXyPg4dTRvJMBG7RTsaV5gAU2NYn4dy87b1CRxVQTMssUxak3r",
  "key34": "2WvnB3H7e3JWvxtPSz3EyVzAQMogP8AnPX7cBVQFq1o8tCkXDRkd824YkWL6oZVPSY4hufiJY3w4pcV4bdAyV5oV",
  "key35": "4AcV4247fj64J7nwcDXMGEsFhJUg3dEkwsnbCGpDVctbjLzEi8wot6oSP3UP9u3kEphhoKREpPyijFS7pALu7ZB7",
  "key36": "32Vk41BMb5BYTmS156KbSX9GGTThGn3Gqaod8Ck4wZsQY9TKvubw9ko5UzGhLWyzjZy7ByG26CTqmpa8qrWaGHyt",
  "key37": "311hwjFFGpb7cFxSDqyxN2i2CbvAVCUFfz8D4HVjB4yRsFrefjv3aMg2hNwyTJS2NBT1fcnGc8Z8GQ8e4t5RkcVo",
  "key38": "5M32ZAzwcwvsRZmqXWykQeAV2nCtq4mKvgZVjqqX2ojbQMfprYKbgK8P53gJWHNVM4XoPhDAWttLPXzG2kEzRWV5",
  "key39": "5zXwZ1DJep2nsbSLJi9RVg4zzsYCQ5NFUpzDFwhom2yvWVA5UqGkTtQ2Dz95iuNbvBgD9ZzUQ48Dd8CnXSZpsgzm",
  "key40": "4ruJ3FwCaKwc5hMP38X3Lg799F6yKtadcmaXVZanE6yPTNWELqh4Sdv4ZrXmEJ9KNWwm9TTXcuhA33cekPdDDVVc",
  "key41": "4yW4eteRwvBaXnFnstWiBiP7EWm2YTUkRjWFmb3PzdogVito1yyHzg7xttgJ75V64VhRGRW6tQYqENR73Sfr8tQM",
  "key42": "4uHdfrBEnhcpUs1RYuXZNvFTp1q8oQ3UvJiC5V2pmzvdujzvmhzjuU8sXGE5ZHDjuTJewvyCquYJhaBskJPrEe1g",
  "key43": "35WFzqjEYhDhUM6SQhbo7F7iQdtYkJKmYVto2BAAWGscDjetWCw73V7NaQM58kNba9Awrfr4SE5g3KxUvNAUhsBH",
  "key44": "622Q6TjAAEkhmnhXAGP83sinybjYoK8ZDyuV62nFvrWwxixaxCgwN251dSe7eumBAUewGRQA15tA5gZVsJhW8DWe"
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
