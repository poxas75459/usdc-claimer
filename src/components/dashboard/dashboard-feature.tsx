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
    "3jDa4CNqTnjZpypr5yYtSsnVFQe7xMjvdoKMiuACd7AuwJz9CBGHMNf3gdACtJg38ovQXcEmef3KZsDCbTFYXC98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23PEgaPWRaGLXyGhHUhHMKYxKcRxt3Kk6ghQPmCxo4j6TCJH83su4dm6638XF7tk3CUZmxuGNDwH8qi3Vg9SXcxv",
  "key1": "5joNaSqeH9DxpB9BW5MHyra823J19xom2ZwSek4foWQWVMGu9fVBSFDNZTgiAE4K2Y3Q9MEXiVkk1KVDvr2Rm1gd",
  "key2": "2wLk65ukSLTPxztTbyzgKjuHCRWxcCgE6Qdqja59u9sebVUZc5Eko9MaVSCuZXEAW6ovccNUoa1sqUdvsEoKSbxb",
  "key3": "3MBuD8hTjeTeJJWdhuMcuDTcAiiU5it2WwuWvEwiaccBnoeQZLkWAJRqBKNd7qGksmWEH2HvUaSUk5A8r3uy3uDz",
  "key4": "XCCFMAVqqLe9bVnqNCjqzaZ7NCMFHCBhZBusHDdZKaweCQuZvA7NEVYdoG2HrYJczqRTYnMt3BT9qV1PwyQhK9T",
  "key5": "4qwSgaMHgiCx742FTwFkgs16tG2rnTwXB8fhB5hUiE8txJbU2t9ZyiJKgjE5SHaNSogbasu2KwwxLiKWHKw4Db2o",
  "key6": "33rbT5KL8D6rUxJziLaJEBxfLWqbLcq5Ssjbj29xFFzV2e6An4AEXqBhcj3wjJdWXNkaXpPnQxPPu4hNXsGnTJ9X",
  "key7": "377wzd4iWqR5yZZThJJ6LaM3BNGFSFNBpXC4TbHhaSVSr2H3ZuegwAANrHq7oCFNeGmmga5MXmWCDg4BB5nNhYjC",
  "key8": "4KzBTwPaBT57skXySWsD2iTfHLVmVVUtiLbksfzHRrokriH5EdPffXa84i18kuz9qzTZ2daADeAibLNiVvkETYrr",
  "key9": "5tdLEGhV6ctBKQo5tWhpdSDghSsKkssTg5wfgEXQDs8vUmDQn95kDqr9bGfhFcSE7kyfxWQaeAd2Cz1TyCQ2w4gQ",
  "key10": "2iEvtSQ3QjViBLVc7z91fKt2DFeTwM2wvWTq8y9Wk94zJRvkBCxvLjf5U3mniSWCgvNVsvNdbKWgXLpE7B3Gyy3M",
  "key11": "2PcvnctE5DRu1CaS3Gb6VfSzVuGHYtJUE9M4JxqPq2NctJdspb9LTkmXH677TaMrNWmQ1hyt4NJrDVXZqKNtQvSF",
  "key12": "61KVYJ5Hz3kNbrkiAxJ3FRX1ktmzScJczM1twTK2PJSoeZCiSFD53aLqje6h8LE2hxc2QTWraB5fnacwHjs5DMH1",
  "key13": "23nSRUNjWW9FSajf98gGngf1yqVUuvCk1vTdkpN92y225rQcjLp6m7TY7TumwWwvjVyLUV4dcbGLQW2x9HfzQVVV",
  "key14": "2QC29kb6AauNfQUWtvfT7cEmHJnwiVDKsqRcPgopQEahKTibGyXxpZBeFYCwtwd5fGXwqyduNLsc4BFsV1tuuLGc",
  "key15": "48p5rnc1UDFNVpPv4yeRpgmBGBBM85XFJ6wdhGzsim7m3NdQDuefbhQ7du4do1mEprsZSgvA25NYcRngTriQnkKf",
  "key16": "MPj1opEzFADCmYryeYdks3VAdB15jKAjCaycyHi63iYkiNJzHTKdN9EETSRVvr3bXQ7vpQDRc6aKtfaKcbrMjvJ",
  "key17": "2XfRtGqtRA42u1Y76jcvmnt2pZByz7ZNeHzJjW95Cjg5jDJe3p4CdG1iYK51vyNR6SAMmzy3VaaorBsnhvwXa1hL",
  "key18": "5JgwDKZqJcBDbG1uKJ4tPpn2Wu12353t6esauvRVvZjXBgkamJxrRRcGLzot8GPLEFyB7VQ6NW9qhfathyR5QaGJ",
  "key19": "2QYKTH8poyjGkbSFXKXpQ1eLMjvXriWQUADiSokA7sjHA4hwY5D6k4R4AgA77pU5EgnWJTBvFzHeMZ8ygQowDdgP",
  "key20": "21mq8rk44L6KiGA8RZRuqr2Z2tm3CzKiBghMzxYUt87nNFhrAaiXGzwDGy79DXF3Wq1gJK3C5KPoLRb7DRHsMPvP",
  "key21": "4f3h77SGQNRtBEdKta3C1hF5XFpgByjX9PGLxTknqxnK8gSkCN31t8eK4WUa8ekJ5ci6K7XFyKpPt2dtEpmSe2Q9",
  "key22": "3RVa9UtbnCe6tSTqhL93pYDT8785xv9fT4WiMZonjvv9ffDTpREBAXD4sfyY9Q2wcQBQaGEBLWcQ56JATqEohF9A",
  "key23": "2U9d4fuF59yFFQbwfp3q1U632DDNVJqiT7gmmH3XSNfWwoUxFDHVrUJGp8WaWPX7HgYhqXpg6J9cnqruzYHWjnQz",
  "key24": "273rH7W9oNSPeqGYvssmDKJnyX6NZq8bxcRecbNnrpu42TzMGpT1vMpMxK6N2ypLhX2Wb2wdUv3aRUWQJEAe4kWd",
  "key25": "4wo4NejBAL7WdNoVNwKYKWToUCedCkBqVTawzLnB7CJM5HYe11F9rGvr1hkVy8fBMD4eDBTfo62stkpcjZf2rkte",
  "key26": "2ojRusdtLVmaGWTSRVHiY9oUGdkxQ3bLKV2ftLcpeucMGJPq6jftSek12XTaCBjdSst1c8sFwTMYWKAPBEN891BR",
  "key27": "3dtgLNHCGku2bmkWz6b3wUWfXWKKy412nwmpW5dHKTtDyHaiyEMmPcesehdKg8Be7FDvEvGrGJRPpr3rGxSSJR57",
  "key28": "4UUCqH2aDXjWvSVcjVF64NveRzDn2uRbgB63dnt19PJD6ZSfhLBRjVC6yHppXoNDFjxGLQzNjxxT1sExgiMGvR9L",
  "key29": "2cvUp4JLyPYkCTGXLEN386EavKDBpFauyEhz5VahGctC1ptwmE6rm44MbnBofJabH5dSbq5tbzYYy8GJvudrHqk",
  "key30": "3akpjp3p51owryU59Dq83MzLY8j241KSpKnDUbgCCkh3FsrJozcWzWMekh7mD5if5PRntyVZRkFPrCMMXkXk6TSk",
  "key31": "3HuS3o2k5RmLPSbyvKVYArLW1ehu3drRXVbhwdHHtWboP6Zh78fgXNmvs3Jnf1rZqB2zTTBqcafSUyVSLUTa2iBm",
  "key32": "4joUgLE9BadrmR4qXM41NQsBKf3sU64srgLTmTJ8zkqAFNDiFd22YtND91htGNftC9GHMXZDYVbgcoLqKGSR2Cip",
  "key33": "3ePt9c2tUea1XXfH62BiEViEEtmj3M84DW7UmAAf6Nhm9TFwjqzexMjBmZrx6tZLFPJPNDbqv51w5zEcXmQEpjjH",
  "key34": "3iSJ7rbpkkf1oRXw7DQ6K8G9zSUPYz5qtWLzBCSUNRcPq1SBSRigwTBtAL7VYB6foDW8LbcXuVALy92YEx2jTFYD",
  "key35": "54NesLXQWhpAYbkhxbK5SwvdBKDEc5AzUiyczEzpet6ptyjMgEDxEksrCSvRp4Lcp5Gm3PYQzHWjUsnGeMxf2EVK",
  "key36": "289J1x76udvKJazHjR5jRnEho8P3v2wCMCAfXAymDUuqVFnCFpTEg4ySVo1RGyEyLZve7pQYpSv7McDGu3261c2u"
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
