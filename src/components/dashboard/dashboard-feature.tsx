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
    "XQruKtG6cFvxpguzRBXPyj8zEtFKXxnMAHJU7Zy5B8VkKohUXcuKYkfAZbBNLk5FTWZK6wtaNNR6BUjHVTLuXg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LqWLozFGCtFgEp2LPqCXeJAnuoHhHQmARuee3j56roAmnkgCm48Ri8aMsCkvY9HZ1D8JNc5aHV5cUHBFTqU1Cvp",
  "key1": "439hnCKzBA1LMdKC9gpVVG9T57uo4LMAq1SpFrtViGoV6HpYQUgPiGLLZrmGyy7MhTA6nSCdD5WKCG56ffWbVTTp",
  "key2": "2uEvhHJcLwakXQ13efNv6DmiubQA8NdJ7faaNvd8KjhaZByYzrtGvQPPpU7seE35vzi5RZhLoaNKRNvJJER31Fzq",
  "key3": "5nGDKPq2ojzdp1xeiGuLcm4iCUTmyMdfki2F3QtRyBBkaXWwinJSP1VZrAtnjzEtirtWQh9dpKmnxuafgfZRkZuG",
  "key4": "CrWNKtmUWxXPLK6FbsCzAByf5NyqSGq3dpn9UVWYLxz6fXTxfY72k5ruWvwg6nPWGC5yjWVqRKg4TS417isszFg",
  "key5": "5zaEUW68z3WdzyjyaQZUqWR8r8DmjaS8BijeXSSUNzNBVaNT2ZFoDdgJciMJ2g6SzBsNDxwnH5L1Yx9ki4iu5Urv",
  "key6": "UAPdkEUCtWHmQ4rqKv4a4ggXMYxw8j8qmZtQnajVucW4qPnbDhncpBGWBfAnHLSaDfSoLRurw5XxyMuDs1tYHv4",
  "key7": "61TnE8vhAt5tgyysyUNLKEnWz3uyuHyN4oEKHWBdLTNiqJnFfaEVaymp3K5a7ZpvpfgywEZzsNnyssHsHD6zSEUD",
  "key8": "3KHxE2BiEQfCAV7CbS7bQxPEnhoa6Tfo7QvaPkUnTmA1XstXYLq49tZ8BPx6kVgSSdk45zjKPzZF5kEsWsXN8whC",
  "key9": "3ZsETfV6qvYcrgP37p1bcdsTUUk3AxPT4Vwe9p8U1HBoQNRzXMAUkFrAA9eVqiKPddzwkKwjXVxZ6qpRoDTEyukS",
  "key10": "2G231qVoXHVfCbs821FeJmUiRqx1ukghL1uY7d76iGqkTcf1HvcrTBgBj7AopEWReEEFZit6Zeyo4nrNgpZmdUDW",
  "key11": "2XDuDBCgxYpXeAYQtHXgLCmxoopAc4p1Cm3cKJc1RNXNwb5Uny7chaB5j7HBFiVENEHwFrRiKE4tgWfHJYh4yx2r",
  "key12": "hz754X5casWaN3W2AnUyQx5Ga2UZrKLoz9eSMNSsayPCNyqDQ6mcsfrTnPGbXArEaA2ZJ4RP6pTZ1a6f6tJ4tmv",
  "key13": "2uueDJKfGpiC8wNurT3e6eLBVf8bfTFepvQdBYhDmayYX895Q6JoLh5crwMLuMvbdnUAq1crDXhLY69JvgXLs9oB",
  "key14": "2adrUzpPYh2NcDUx9vxmZBtSdnhASVa2ptK85VgbffzwEALFyUz21ydQpPD9dqH7rpF4nTAwekX1XtLiYjtDABz",
  "key15": "2cYfs2uWxLVCgzv316qTTE6KSLpGRbaiWKhkz4eTnDfWknfwNi5A3YiDCAdCqxx4QvNdi8e19PfS4BLWEqEKmSFL",
  "key16": "NmfcdAM33FShdS27sgj3huk2cfTk9EsQZHbkJgD2319fhDsCRZdSZ4ugEmmJCd5zB5Dz2GhTQcWBqN5sahryzL4",
  "key17": "5YGUW4dYBefFA9tYazDF4u98pHGFT2p1rSFUR1btjoEvyGFLc9Wi4pZRdvhG5cE5D4rDG3ZW8Sti1GTFEuKLGPSj",
  "key18": "5Mqkr6Nq2fX8j55dFPb8Nfxo3KPbNMU9zQKf9y3u3veVVznjXpDzoaX2pbBpexxK84jvKKgY3J1CWvdMDtbo428A",
  "key19": "g772Gf1NmnbSdFKdqrvXR1FSYwY49KXrZ4JHYsyxVphmZ1JerFYMr9dHQysWxh5GSnPXdSA4KF1u5rBeh6WUBYR",
  "key20": "2Z3EgbTAGKe2DqjuwjLGWNuCk96mZfZqB3Bf5LPUeUsTgSWhbfdmAX9G6xSrSqDRp6gyUw7Hit5a8CfXqUXMJ9iT",
  "key21": "4tMiAHeS9C2Aw4i2xDBTaJVBQDg6AxiH3D3TBgQsEEVLp7Awy81ekBZCDDu2ihdr2joVcWV8ukMK9MXKphTBCjJs",
  "key22": "2yJ1jn4LLYprJKGYHnryyxWsGFQRUdCDdxrEQ7SBsBMHb42NkAqNicr7LDyQyEbzDk1rfSFHuSeZ5DuC2sYDAnMM",
  "key23": "4RC8couBWF4QCDzPC7ufBfjWoE3cfy9d9ypNauykdhFwiZYafygMPY6KgPQs1tJedFrPxDPZfH9QmX4ZijUYza8h",
  "key24": "2xkSjQQqdQPxvdxwrYttoXGQ7vgEh7ZyYTzuAM1n1TL5nijJ22evkNS7PK9rDAQ1tjYq4vM1D1oUdx5UrQHLYggE",
  "key25": "35oFAijiDHDheaicb5571iwYAp7Liu49N52HUi7fcm9CDJWFfzRRYRjDfYe7hUbN6tJfpaUQwYCdRmTKMG8xjQrm",
  "key26": "6c5YR45JGsAUmi4cERnfMUMn8jQ8nJAwkHb47MtVcdDsF6dpYYpU3a9Ti1PFdhobC34UNTw2NewaAJrsB37DbFa",
  "key27": "3YEcoCshxPfenJM3aDAQ3WWDif2Ja24epUwQHqhBqtnBVWLpVSGzyXHjU2c1dtU6HuvG8q488Y7Lv3Qs1jzGLKye",
  "key28": "3QC2R76p183mwRmbTr2zyjDxDyj2N99STMv8Y1zeUwV3xYVT8mxi9aD2ULUgSJjnMm6JubKDsYepUthtGTquR5pD",
  "key29": "qxLTLxEMUnnwCaosW3WgvrASkmnL9PCejUSpWJfqvh2G8k5b5dL317RiovPe9152UjYA8p8YkTtPvbQbcNtMNdh",
  "key30": "5WdC1mt6mrU8ZSF2F3FHk2RovHCR7PGe9MNLdq3Dm17FaWTYBrfMJJtWYJP2JXQF45mc5EJ8aDNmwHXPpk5MwQZx",
  "key31": "2QzxE6iP5i4PdSAWdSqY9MsyHMxyvh3e7dZ3RgKTy9c97ZVJtxBXDhzk28bU1pSZAyW3rSCmajiFcNLGyetE1NLa",
  "key32": "45MMHbr9fZyk2ZTHWTsEzTtL8Ra8KyqnBAx4g7mwmfEvCD34cp5UrQZZoXxZvbYgrAVFB14YoBZ8EQdpfoFkjKRk",
  "key33": "4DHmbuP5nkGQeV1mbqTbkFo11LFbKK8UHr5LbwiSV9k4JrjJLMrZAXR8iCwJp3kPBScKAWZ37vBZWzf1hqaAdPyU",
  "key34": "tgA29Uhy5iAGc3mwWXfJ4rkHvCVBBCnXX5d4rJYiULehjo8NhTvzRHNnBMA1E2dPed3rJ3BaPDPDpyZcs51yrd3",
  "key35": "3HuPcXN6uszCnxauMSNicrGV6VihNHzZ7oy5YG6qPs1UEMq3hJBBCAwCsfMJF4EBhUacW5HdFQY65STKH3zVmQuH",
  "key36": "2Ry6VC6inru7iCpyHLukKj9MaLGyyMiozHjYg6bH8hZFXHZFtZiWQ1uVwN8DcWYCTZwrCjfQiccRfYgZbPvgEaqr"
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
