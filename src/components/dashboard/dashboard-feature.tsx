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
    "3S5puQ639HAh7R64WFGrvoFeqVsNQzUYUnxS4L6WYmTzmUYZATFQA7dwEHv2RmLvtqUhMHGWY413oJpoexYVhEYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viXe7NWwaDwoH1ryUFKuPt32fFmqTtQnSrkVNx9DWz51SJutPGnFeM27x1noEqzFcfYdgEwfK6XnYk3ceBcAFc5",
  "key1": "4MtjqdQ8StZQQYrgoQaToMMLKYR2cNy5RTzic8GpxEnxHoktax4Q758aLyD2cryKzZBekt24nnokccU2jn6ofW42",
  "key2": "2Ejc7vutjgjAJJkA6tJLU4XWDZsa8Jh3eFDCMwzsTM6ToFxH75ycni4YvF6KNGCGo2hssaPGf4etnTrPjWQRXxfj",
  "key3": "5YBst6YdUZGQY9YMJtkYRFD2CbG9UK62Ezs3bFEY4ef3iTZ7EMpugAmg5BTsAoTPPpcckDHDcB5CYc7dNZDoo7x1",
  "key4": "38zwv8jBphgeXPib14pHYVASJoSHdsa4weeAjaEvsybCdRzbQrkqLmd1JYK4fiNQaiTAiW6uE7n6YfZGuah53VNG",
  "key5": "3zoFMt9CBoWJYVRyBzGEPjybSMC2xYJeRosgJsdhR9BG2EL8jhNGndm2qrWhXidEfyEapL1xzXmEJQ7xtqmB56qJ",
  "key6": "2f1ZxxigKFKjyavYJJeaQtLLje8KzYsWRC7AY9e6WDNjh9gznCuKaxBgAtjK8sE6DiZv2ys5PUVKxEYkefhj6N4p",
  "key7": "2FggkxqMvF7FfNemZcrZXXrN5imZFytiEbzpPwCzetCoPLdjjBnTyFft8pEJAvDy9U1VNEgnuuNmJzN7oHQTrbYB",
  "key8": "5ppz2gLaQxzSwkwQ119BpYHtGrYYcAN2udgeT4hovJEze99ko8nkUnBpGAEbnzQn9es9FgYaAPKspN9CwiYL7Phw",
  "key9": "KiUpyN1BMpP5wmSyau75iexQ3QNPKenYoez5vCiYHbFBduEJYaspantCmaYUWDJKaAW2L4zxuTz9pDZXyCM7k3d",
  "key10": "dnJbfqNt2gttmMJpzUdWuVcbXTLqPyqjNVj6yXeM1BPRr8mFFhcHYxrNJ6jtXoXeJCoynXDNs457twVR14iCbJn",
  "key11": "3EqdLDL6Dfbdmw5qVAKorUZJBwSp7J3GzdyZTuVFwvKQ3r2R76ey43wLnvvujRq7NvbUYw8jbtRfreuG3swC73mE",
  "key12": "2qxKFJYnBawophpEzqcDJBuAuEf2Ca6w7KLyHLYRbMtKXWDG1vZfesn1UFkvPfhavqLd3g1AT3GvRYQLy76a2wah",
  "key13": "2HkfaH3cvArtSMUCuEiJgoAWP7swpuafiyEV9CE18bVnKfTaHKHPSesMdXenu9zm8e6R622FV1rK3ez7Ms7Zkhat",
  "key14": "5ksXQNTL1Z1E1gAW2fon5nxUKR5QmwdeFMrC7oHBkuv8RLap1zv9HLT55vHoUBBws8KwhuXfvtupEbkL31ESF5Cs",
  "key15": "2mQLDea783zRCk49DKdjoQmUZHnFEsQTZ5w1BP8zKHv7tjBQ2RkSCekZ4kLhkh7DfUC21K3fEBeLneranVPwXfMC",
  "key16": "2v8nWDzjAuNqxouoi4i2gxVhYuGjYMSekZ7ppGrPEp5iEJ6NYgoHHDE16od8YrrQCrrNo14GzLgMJ3dSBeF2ovLj",
  "key17": "64TKuDnT7Uw24MazcPu8UYYNDvsTpT1BszmxmX14fdrBN4AAGymfPUED3MZsJd42bGXHXbcuqJfXMSVgKVt8DBbe",
  "key18": "4R7tztTvMiT7rPrFVyvDzZdhtQEgJaHkz6kUxhPFZeSGLcmErBVwpbPmopRJVby8uiexQepya2taQoX89jWhpYYR",
  "key19": "2w7nc4ub26bbdz3AUyBNfV11xm28M6X8bonMsGKnuSxJCyidKgWES5STL3dPWhQ1RzoFpXiNBM3ovTVZCg1N39EB",
  "key20": "3k8WL7TwF5hjWLji6XfLRkunuRsp7LczAQ7pi9h5qD7h1NozEF92tKaZaXSFoMnrKuWdXh6Bdqp1t817ExEKM8CK",
  "key21": "2NJ44Z9RWg2dti2xMcz8KfMWpfQqoyoqsK4xgUCkcbBexxJjWGdZhFT3ASRAwnvV1B7zdWR5nVQCqSjZbXYDHbxu",
  "key22": "4ybfezb3fd8GmPoKYABRp7ncAJghpe86GGKPXNM95Vzwa1MYjcoodMWzJeqjuQzsptm2K66exLnrXg9ZiEh6sB7k",
  "key23": "2vzRWkYhGKUaQ73AwCCUYAPmdVD4perB4HJ7RqH8uH5mn1H4ZAHg3ZNuqN7Twy7wRw53tpTSAXNs4FC6h7FBU9ZM",
  "key24": "22fix95XUeeexRzpESVbwQxe8dGZwkRPofEQrEShmnyfwFbmP56BT1kU5ccQa6ZK91SXMsYkQSiSf6VQY79gqV64",
  "key25": "4L6gFHWfecseeJ38WhWfer545f14GW18dbFGJg6pw3gkYeQmwFTRKipkWshcsq5BfYvAajbcV6iUNLehFsrHgFQC",
  "key26": "5maTX5c5Yi2d2Eva624uJ3eFp3NArWJFNs3oj4k84kdrZEnhAYQF7fKniAfekUnh4aPohYDGtZRzJtpm6PBTLeHa",
  "key27": "3MmkT57EQtaN1u2vKRjHyoZNHQVEhRVeLvUgFDqxqSGx3CorCDniyRWmyCnddLijzY3Y9N6baKcSseYwKk1RWc9e",
  "key28": "2GeY6AnUpiSxjBjfCxFpaxzdhcsNdww9exK4cMSNyadLhBJZapU1MSv3fUtzHKDVSRqGHwnYMuQEaC8ECr8TLu5w",
  "key29": "4Kxbqu2ww7XPKYgmgXCLedE8do56PVUWrwmEi8ZLpynbBYbMWmJSQzZ8DwVKBLiDLWAaiJeJ4G2hMmwmgUZVpb2n",
  "key30": "wND94WBd4zhTBLy4c5pvN1A9Y6JL5vQXSwVLZBvSc7jCKZqusRCx5iJcwDzAKWTarJXboqeZq4KNV7Y7MVw7ghW",
  "key31": "Fu6z8d83ZtXgnLzhcNsxQyS9FT8WpVSjT5tn2hWFTwE4qhgjFHF32pYxZPEounyjZAE4cD6g2kbsiwjVpw2vkkb",
  "key32": "5gyUqidKkrM2YdEniE2cwMwjymChHPeLb3pxJq3i1sy6nPEQg1D6zSHjtccCThV1X3gp8HMDo5W5XtknX8UUMkM9",
  "key33": "5YUeVW76g312SvFNUhy7ArzRc81hJmdhkU7vJ9GevVZHrtABdXQMa4QAm6B3HpDVttG2BzrAGC1Z9AVwCHohmGaf"
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
