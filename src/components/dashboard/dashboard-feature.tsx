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
    "5MtM8i8kjiLuHmHAhAcvRc6ity1isnN7bDjaiarfZChe1DztYSQ4AdGGRrQin29bFkxWA2F1qKdPraua8uYoPf6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yfbW9HVmoFo3LBS1e7QjWMAi422Ua1XYbB9cqX671SgLYtu5MwWcnv8oSKS3TNXYDMa8JfBKK4WYG22aXLFJckd",
  "key1": "gA2LikbMHMYA8onNYgiYNCWtJkxmzVLJsyfyoK6RhqD2zugmrzNk41fbjw1LYMHpHsb7HeNA2w1QgmtBgdo5pEx",
  "key2": "qXZcFvQ9ymMFMBgYLKmLEGSBMsfQBLfAdnAvwtf49wSE7eNT2fHsNHZuT297sEkQbBPhWhTSZTz6maRhq68Vx1c",
  "key3": "5FRLrAjuAy865PShEni4eP3eiFjP1zJ9q86bvwjEeZgZaRBkbew215gduA1Bjf3TAi2dScAgdZvjB8snzwD8mUWj",
  "key4": "4sieCqey1JKro81eWtS6XHUHUiYS5aBSxWQ1Tp2dCydjK7ahVJZTx7RCfEB8DhtvJt6wyanJRqrcoPpssEztrSxP",
  "key5": "4KNp1MUmCRamJiGdkD94SvYDWD5UwS3pUAreYZs62FtGP8YYRhkA9ZVtSjMMK6LV8d2E71hcwPHTZUcoHvZ6DfVw",
  "key6": "4UhdVAmy8b7rsxD1Z6RH3fy7pjZta3gpjQBxUKro2ATsudDkNaKPQShAxfKf4vfij2y4S9u9zK4imgx5G9Y1cAi7",
  "key7": "5STTJ9trDd7JhopMu5wYvcPb6eXbwdSyTw94U9GGkb93aozb2h4R4F8BycXfah6erMwaqekt91FM8ZdCoAznPwVx",
  "key8": "4RXFhFKYRpdNwmAh1V1CpR8egTB4wD1K12Nq1wWUK12QgXYDdGUjXTWXfd8NAEYEc4BcBxoTQGGr4RJcMjsJvXzf",
  "key9": "5E67ioj4uqvyzGMeXYuJhCgp5hMmo35FNpdxd1THtRZHM6TXG71VekizB4e4MUuQnGqxupX4UTxQJnoDUyZKzD5S",
  "key10": "5NcxBGpAA5cjU52QjhR8Fh3CirWQfFdTJaTb2HU7Mbmywvbjd16fPUXhLQYeXxV7FJ6GFgohdK15txdNFFoiR6Lm",
  "key11": "4FjemoeRtVZbmKvi51v3GFDbFPJXCAKq7kc7PRGoMzWPeXdgavD3sbVYSdfvYyr4xb7F4wNwHTCDqTJGKWXFvLCe",
  "key12": "DNjZLzDCvE2aeRrMaKTUqevG3h6h5F2u4dst6u7PPpqxbgR9dfdWiFyirvDTgguTWaycz6kwCx3Coa4pGRaVZWF",
  "key13": "2MSP9UyXjUXFpU6yuwWKuURqXs4izApPynfsu5oGygjgqp8wGTwS9qh6xjH4Xfevxd2MRX8rawvNzFuntwiHCu7y",
  "key14": "jrMZyR4a3PEyJYH2JUVRJkAp7RKpMrBt8bZMudF3zN43KzdmvodmeVLeMEUA6c7BGvuu4NJt8zrPvvD33GLM6TY",
  "key15": "27xg3N5kyeyzLbyp6oefa43joVTSMf73FPFJaheEHJCfFp5FcJR9E76ki5XNWfLRf4XNGAQ2JddkFMND8kBFjNhH",
  "key16": "4WmFMdL6ubrsCHi8XA6DKmVaEbMGYjpR9e8N5rCr8foeeyw5aPLN3sLkrV3ZhizZaGu1bFXdiZRUkuZfXyfSkKGu",
  "key17": "3XiLY23k9K8Lj2kvffiGPYphWBF2VxHKphCWrhhBrx4sUPQu6XUt3VznQgFe7nBLB7LA1kMhRpAjih8Bc7PF2HuJ",
  "key18": "y7cFTGiZVTWCRXyJvqaXd5AsYCjSBFSqWfq6LaP5raNCUCcDZbLbbaEMnpDVLbYrjTye6SP7tSQJdpamggLS6dZ",
  "key19": "5qeix4G8id6D4r3MPwmxqcwaQXgngpuvZqi3QEqe5Jn7qdeBA9FbbmVCqxbW8cvUnjprb2N9cEvabDWGL7TEEHxx",
  "key20": "5nUsvUsd21jQ6DTVTrf8E8aw4SSw7JBcXwLfbcnZgG56sothrewYeqYVN7qkNN24AENjvsRoYVTp8YRnY7nSKVSb",
  "key21": "2WQeEVLHCPP4uuUmqYLgvP9Cp2v5siSqzdkAQWWSUECcAFJNZJqaUF25Todhx5iMypd3UBpE8TK6j8KDZRqStxQ2",
  "key22": "4tLuGKyKcujetcqB3CMVoHX7jSNSoaD3ZGeHLpR2bNr26WG3FBcwfArGwFrHGr7cw6tM1QAS8yh56Uiw5HLTriHD",
  "key23": "5HPRnVs2NYaxnAfdFKJKjZ2VhkVj4Y6wgDgP6dcS6XYwGFXNeUTq5CZguAbacdS4UKjoMHgFAyxL74SjFk6mjGAk",
  "key24": "2JwqZYiDLmKVoAgoRYjpVfMspj5F4BkP3HudRCaoMEj4P4tbMbG4j7nVpT1iyRv7g2NeA2wBYghW8JjpTv6CjwTW",
  "key25": "39nek8HeMuExAXWhu78iyghsCSiP3HufZbYKsT3VgEZLqbWLKjnap3KEYVGYmWR53vHcj6oGTmT66QL7y4xtrqLZ",
  "key26": "Z4wvWghasKjCCB3CKhuqe96cU4VPsgQCvkA8xCHoSeEPowzYMZgZHU3TGZsXWuDfg2nV9RJwZKFGEsEDTDHLVQy",
  "key27": "4KkSHmw2uPthttYRoHQW4ugPoPcUBr81Fj8wirCjfQXmn6AFZZ6mLKhSP1dCvhUXLLYs5PcffFzbGjvYqp18CEYd",
  "key28": "5fX8j9vmjSRGLXNjp768XDDxM32ntMv3gUDDC3Tz2UB6aASXpkdurmcFwc4gohdVb63S54ycrv9pY9wwmcR3isjr",
  "key29": "2jPtu5HcsHVWC1ehSCV4S1twvDxB4pgTY3kFy16VU45MYQaqDDfVQpJKUfUsosNUpBPqnnHP7F6sR7p2tzbiEHot",
  "key30": "8WXnwqXZAkNZRzCYECH9Lhi9fAAdqLeRiYq5DMz5JBsNR6x4jv9RGZQGWx88Es1G7kpVFC27hSQutwZcxyaa2KH",
  "key31": "4uETCrNxyxcKT7bqmWPa6MKJRZ14rMJ8nF5Rz47Fwywdg6XSB6gnftGnEwoYmJQ8tDYYbtVYajHFYWWZ8cvM7fhk",
  "key32": "2YeqAunNF74ztDVCqryyVqDHQeHPQDs7aG55pwBzKQtRPcjfQiefwuV4Vy6fHUBVJvJugBW3Yh9ftgoBMjhpYoj8",
  "key33": "5riYLnTg4YbZ88kF34qSkAN1Lm2M1RqG2jyr6yiT6AzFsnqtQjxjDUJmWCUkx5ShkDec6gNSJshGqTERGiqtmXHs"
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
