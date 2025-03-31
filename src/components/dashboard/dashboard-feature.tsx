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
    "41n8jhUtjb43BnTtThrajaCazZGc18o8Lz7VZ8b5LnVLqsHMGnHaj8VfJKRjBmstw6difXDLPhKh7qUmVaB8uFyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QuckZGVuvU4sUt7ak8H7VbDWdiuWZ2DMEkWubtkxXef6yLUst4LugGTw1zxynvnHo8abuPVecT6Qoz4YKw26bK8",
  "key1": "4rGTs25jPikEgyP8EkxJqjeAH3RhcREe3GgwAuNFVYv2WdiXCZ5EaHF25UjGdZRWx2d2SfEtyej2LaTHCfG4Usfq",
  "key2": "yG6y5QsEeRwDqVNuEe5a66bnKKMgAqGR7PbD8bjbBSunaTdan8KXyBkUggq6SJBYfkZF2cNQ2vfSJBVi9PNg1im",
  "key3": "5NmAXijvt1fPgJQmruFoR6FLbviA8GA2qZgQyXebec1i1hxs8S1VSc3q15UJoBKHZ3QL9vP6dvpAxCzZ31GXAuM3",
  "key4": "ZtYXZuhHyNqS7FX2dZJ1jcUcNyJDiue82Eyf9JWRwzd8c6MAh7hXVxzG1oUxVsaZkid667jzE8xGd5wfNEFRp7v",
  "key5": "2h8RR6CE4k376eH57RYqXaTqLP9J6SRUbXhazn1Kf1R4AJAh7sbjDBDs1xtwP5UKVUzL3kb61aTB1dmuW4Sydaym",
  "key6": "3Aw1afYW6xTP6c8Dhwtk9pPd9MyDq7RPXDLpgSBGwpQ8GXZ2dST4q4j86B5tAyNcdrCJoQ73BoU78fmFuJioCeu",
  "key7": "5xwq8v2wrrKZy5rudyWXtuMceTB3Z4x8CkVMtNYN4onnV8VQKrkJfwghoJpTHNhAR7VR9MiJt37WevzNrkqEMrTz",
  "key8": "2T8aEc6uygPKne4Y2qU5hcCQUmudyHCz1JXjMAqEzD8dm3DLjuXVYbkmAiTkkMnhwjzqVySSA74jM5RnhBdBQRyy",
  "key9": "4nDixYZTfZFeUroKPJBw5yaXTDXYmYgnzeP82HyS5ivK6U6qcdYTtdLqQWoENeMdEg1KoWBWsLwD2uYgPpXQNwFJ",
  "key10": "54AKbDi96zEtvsmwiUq8H4MyVdKzKpHUjHjniPHvKKg4z2rhPFPt11gsq22eHHk79g3Qjw8Dvtoz8Ptw71DA1nqM",
  "key11": "4FVDegkmwJj43xsTsvTdqkuoW5VH4F7AZCpYhyhtJM2FKG3UshPquPpau5y7rXpYHhqjFiPRUSTrATCkmiau8uBm",
  "key12": "4135RgycmHGAg2fWjMaKEBSuK7Rj4Cy4xfzAwpqeUcrMbGEqbvtpSHrFPeNtHQCrbGsPEdEm4rcrjL783SeT1F5C",
  "key13": "3fhnTx94iRRbWeCAZiFLhX91xpiq4pNSjSWz79tUZqhk9181fVW9QHtiVZWfHt6wV8c9ayJCRSsjDfuuTTbTqeKM",
  "key14": "2NrbamG6tLC4w9mmFnzAupPdhxhvUgTsqCaRDxjoFeB4WsEDP5tgnenv4LVqhR3bpjnZEQEu47sxbz1CrqK4xpnv",
  "key15": "2mTqq9RoXEMo3F34mAWSNCN5T9t1EoG5QQq2xHUJjwPEYZM2LVJKqhhFCtrvAGbGCAKif6WLRC5abT2ZvSCYtQQR",
  "key16": "3u4vUFUat55VTMYHkpjSc34jAHiQSXLA8tkSVp6H687Qaf8ibpxHcRNM3mgbPqMkWYofWLbrGdJEiCNFHgy2PeVX",
  "key17": "4X2e1RLQPtHsPaF1yYoHnzoEnhPyvLSHpxNCqYegM3nE27CsZwuTKhvPLUXZH3PsmF4fqPfkbcsxTrPzdHtN2Eq6",
  "key18": "4Ea6DW33z6Ys2PGjJ2bP4RKkyHnd3nWSxDhcy25tXumhqt946MTeNn5ytAVUR3dSU6Cqk37Xv9Vweo4eXjLiXxj7",
  "key19": "46g8ahsg4zrgEj53YXF5h2iLqfCzPTT4iecXFV2SCUERKQT8ENeXkvej4tq9GLzMQkCvmespCuJ4XtehC1ne331K",
  "key20": "dfhYS2K8wy1reSCtWSux21Zjdc65PwRfJ1v86d4iJ4gr2UsVouKx32UnBdd23Z9kCUzFy2MaJs6hzEfmvqk8z72",
  "key21": "4ZacZzVP6kjj7XfGMLHebMYEaSHmRHQY4tQYbmgA8Pb8bHJLXPSjrZ2thXfDmVYiG7xBnJZNi95zC73J1b1thTyb",
  "key22": "5YAzXpqcMqLMGwqcafaMy2LGc14ErvcFBgtcbwxVA696N2hhvn9RXrk5pnvFmfoKYq51QBjAukTeu3w2tCDcA87r",
  "key23": "29wZ3iWcxffHzLLoQcegpgAS1cZeJfgnUP51Rr7D1tGvLjdzZvDKp9MJaLMRHc5s1RoNMkFSVis5oTuMxhjSN5uz",
  "key24": "6RGePS891mfJHBbjJJLLbz1Z6bgBNDbAvTm7hXM2NqY8HqEeFnQiAhogvkG2kGo2dzcn7R68po9E5UyXiZDBUTf",
  "key25": "2fLDFucYMeMdRDBy2g6PuQMypKRMWGaevUgg17G2yPBKSJyynv6MWUh6j1qSWdFKja8eRfcESJwGp5VhXPVAhGza",
  "key26": "2wt8onCTQwwHKfZVtbdx9ZRqkspouGfga9hSdHmfVmkJteQvUKGdj36YcBYHW34yydZ2uBz4VPKe9nDYUoexYzrh",
  "key27": "JMS3TRNKB1geEsMDbKUtLVe5SiLAnmxCYowkn14XvemcXxGyQWAyoT2vwMuKzGBjXVjNdkWA1FSf1L5pQuTvZQD",
  "key28": "BbdQZxcKTRU52XEBqLTBU4k61qBvVv6tz54cTQrijBKdFV3vN8xDc9dkunvYFVGZzRL5Nsyg45YcY5V9Qg2GX36",
  "key29": "VKcYvWAMvXQkTR17w7hEKDSvSLdfbhSvJExqSszw33jFzq3SnreA2mqraEUsLbxnhcwTimQnBNVGDBeCSc9cgoB",
  "key30": "4HDpHrTPm5dwhDSBtw2fqothNBLW1ebdfMmYY27c6HM84t2XFBPxQYgdBf42jjDr8D3qmjzo8G1xigwzGBsgFSDc",
  "key31": "2M1b3UExFqhP6hnyWaWHb2Q348UPF1c8cJYpfvoyBzuX9DHX1ZqGNeakEerc1SHKh9H9fvkXMkqDYnCP2bg9bdCW",
  "key32": "42uMsbeFEcwkyPNNhrZQpzCz7h3UGuQYteai42CwPtNz5igrzhqru3mQTzaHvPvZ1addcz1hL46VA89CKZKBxroE",
  "key33": "3zHgr2PUCCSg5j5u4Wd6RYjCrb3AVGj3pN4Gndy29dUdXHi7SvVaTJ3AhbzeyPbgDiuA9Q5jGyP2XSHhDFJck7zj"
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
