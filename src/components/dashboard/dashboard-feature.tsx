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
    "635YGjbvqdrPJThdKohmN4tkTyv9kruLBWRtaBgdk2m6ALjrhjD12fYEYMPBAqZwWMXZrzuGm4K75vaJFD3CLQWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rqdz4AZUYZGBW71QY6qZbHYWZbKh7Xy1W7W3qADSYKYx4Pse6cXU3848mvzZJSR1e7CJb3CdKMMebDF3gUkDAAu",
  "key1": "nygLh36HeehncjFL8dGNQmQZoayStYJMPuFXm4t4iUmxENognWAnaLjowULu91tqaccMiyC3M5GECrKgCMWogL5",
  "key2": "3AJnHxZXEDishmPeKSea4hZxkAGDrkVQH28vFXAGJs9mXpP98fGx5onXqByD1z7JEqrYv7ML4DktuTyP5yPLm4F5",
  "key3": "5R8ayXz8UifnFAMbAAQnuFfMAS2NQjV91riUyvujcyfTDsUpxfWnmPw7XEQ2WtVfskf12Gy4wyKB9bjwDEaZZXGt",
  "key4": "3tZcHriRp9L7nUBrRQ1PZXo5XQohb2nAA523mXopEPmd9VxTy7jmxhzLZ3EkuoYbnGamu9TmiqzjUyjfoyknsy7L",
  "key5": "4uC4zHjXBnkC9QA6SmEEd1r2i4kU7SpwrET9LDLeZcnzuUxrnhv8jhxyvQomkiCSw6oyCkUcgnAFLBPhMtrSuvNA",
  "key6": "3g8fm6Fw9a3S8WpWWqwWXSL3htfkFv2hBDh6G82fbo1U37b7Rpkr9mF3Fu9Woayo2sD7sYs3jjVyCefodAqRZYhN",
  "key7": "5oqr7hVWNi9dQcCk642pFEjReX1RpBgxNeANad7VpjYBk1npxjM7nVzgpU6vtKEnQvxLBYPaBKcv93auxTrrNA6k",
  "key8": "5ZyqeutdcNK43nwJ6QADQBH4FmW7T3m4SasmR3DqST8De9NsqVfvDGVqCb4BL1boawvQVgxVn6kEpbFGKvSD1DKr",
  "key9": "4xbjj9JrzRUaXYnqESLHvBx89SpNqS9yeB9Ug1SaRVnLSEWzzQCrV3eqtJsYTwUFbpuereyfBMCiV1E9mzMf7dHP",
  "key10": "2yDikLnZ9mUKG1eRo7Uby5NLBe4FcwTug7WTQiFoeJQNY7HE2VJbxWVbTd1EqHttGDpEAp2b67iWMDtcA6wZqBbi",
  "key11": "YFtk8zLYQbt3uRRd2x93q6nAyWxEwynpUPmLuE8JuBdRGNbYxjd3tmsSuzFRVr5Bso1RZJjSA27cggPkFgLsmd2",
  "key12": "5V7mWcSftKHrNoCHhhBMhbKqNJFkdc7KX3k6UXeACWWMrUHciWURBto2nphmN8krW2BteS7zfoKvDoSG8T9u8rpm",
  "key13": "4a64mAAa4Fy5NtuKH8RQLuCCum5zRxGBJJGAYxD5bARLm2aTpm2kJVxAtjHPcWqopFm79DLNwrPPc4dqece26zqq",
  "key14": "3pv11iGk6gPqh5qgKz5MdkaSntMmgvWiB56Nryzb2DwMMt6StHGrM7tbspoE6mvh5qrdp1DNkWhf1biauqF2yJYU",
  "key15": "2Z9mL5uE8pk3bhYWiupFRA9EsPSu6MzVubpMN8DkQXaGnCQLn1kKHfBiFDLMBSAEVqqocgomHkihKAgDUx29hkMw",
  "key16": "4GfuzmwjG3vLNwhMmcunxShbBa9EYGM9qCvreKbNfvZNYKT1KWf5pvpWRE5eCEmK7PWNH4ivDBncRn8PB1r2cyeQ",
  "key17": "4RDZ3NfADbkq8M4R53a5yutWCKTUwvajKSLJJdtVprnfPj1SRnq6gjHVdrBQJT5PzUjFocVJKydn9Tx321s5X2x1",
  "key18": "pAwVdZjjNGBQiF3yQrryK47xSbL1uSVqA3QY9LMQpPWTuj7iTU9mA8gHK6GiERXrFJ6fUhJWKMzRZjigGWuASxe",
  "key19": "4PAzLSJBSCGQueubAfKZy8CHpepZkvcqpsktcV3ZeuLDkgpyJTBockwBW3rr4Dxi1VuFwLNzG8xrFzRHG4cfjgrR",
  "key20": "3icRaZJLFkuDrSKN2RXnwaoa3KVixPqxVbZjXE6q2juNKcHXW9GFxMBGwBxA2a2rCcwvbJYECqBs2gZWPJxvEpC8",
  "key21": "5upQuJkNrdGanHu2ZPUpgs5hu14wEXpUbPFNMMncNWjtp9kdhUYm61oa9Z88M8ZBPaoasbwh3QLaoi8ii7XP2xfz",
  "key22": "2Ei9x7EzoFhzU8vbrF4mDCNvPH1NPVstiEVVzTSWcsxkaythq2GrzNryMJUnfSuXstUGoWYczwTnNEHttyhAJu8M",
  "key23": "4Ww3ektAekZCkzFLAnxe8x29Fb8GNiG61oKKhow75Qm5R5cC1ZJcRCWjpakbDM6Yp9oycwCKRchyNzMCJgz7haMT",
  "key24": "4v1YcxYoXExPMjt573BKqw5nmLK77zRo3ckkwz8Ao3CybFw4GWAG3XEHsU4sk693bvgySFXC9j8UJ9HAmmwx5qY4",
  "key25": "2ieFXRjScYUCPWKLQHuWx5wrfeb8pLm4SsYYCfMdAgqX9JRRP68rL6MuWDFbMSTPGbXanp7GKeLm3oMQcfWaTHpj",
  "key26": "Poesv8LesMcYYEW4mt5v9jq3fjYJXvcaXZRrVAX3qdcLYJrm5NHqVUKw9o5hKiGxBGBC2ohxgZCuDsgKQksgAtK",
  "key27": "3NfUmFKB3Bx5WA93RGKZxjj867fLm5aJMouAbt3wwRcnhRQHSYgxmwvSLjRcBUowLmVuXvo3vSEbCygR99PB9Gfm",
  "key28": "5C9aL564Lk1bzJRZMrbQvHNcuVMJtKRQRC6UCi4CcJ1vKiaQUfMwtnqJKuSfeGprnTPtuj8LmQ6kBw5Y7PTNiNr2",
  "key29": "2VUn6h7jaAodyEKtxAytbgxjaPPA8fvDPBSDeiyFMvPyqh1rjhETGwBtnJ3WBmuHd7pG77RGdAqTHfF5kRG9TFSA",
  "key30": "4TBAa1Dh2qMTU9rLZf7skridrsP82ihjbTZWUopV9GQ6HvcdjvQXeUmLhDvpufmcYZya4fGAywBccZhJGjU7JnJi",
  "key31": "2EAD4WtBUveYEwaUsja2MKcTxJfvVwjtdfegxLPfv2EJZjQTB8hwmARN5e1HATUh3AMCcsJzw2yFn9bmaRExG6C1",
  "key32": "4A5GgF547WdhXL7f4BizVHYZfYmZMhxU5iJ5QSw8wDmDTWX2PQzw9A9MyEPYoQ7TtNPNmv3kaba46kW8DEz6Vw8F",
  "key33": "uFyaPkXFW6AA7n9YNJJvjgPEmfoyd9jKNYThXmBZTwQFyVb82nCkQYKNA3RLyZ3jfPA5kDdNE3uW2kNYst9GCqB"
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
