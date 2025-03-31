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
    "hMGcwcd4b5apkgy66gQyHaCfYnbmoXEBdjXL54sR93FuqoLq4QowPYk4sy99sZaBrUgALSiMiA3Wzhm61m9t4Cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oCoJnLvcJudRGoDT1tkCr5qxpS2a4VRngkCznReJTxTH4PWRT8FmdRxKYUvK5gAVndtqLRUuZf3aAnWNLsAPSLv",
  "key1": "5MNzZgmc8cyV2UYQseTrR2bMN7dCvaz5skRzc1Ays1ZYRoNgwrxMGP639CRJJ6cqqPRdBvmdhxgWWmibaMvFQAZ5",
  "key2": "zuPR9D9khdfnW8Dd4fHSbMmEm5it8ACLfPoj5x87PWVi9c6VCXke2sc16i9ZGDwQwM6XH1xPG5c5E6PJvmVg5zA",
  "key3": "3a1q2uu2uQmGEEV3H4PyHgBWa4BGAmcvQg5EPQkCvW4d9xv25a1vxWcM1dCE85uevxQVUREaNayv6XPjRZaxxjfv",
  "key4": "4btwPEJYa5XnNLYHnhbpkg8UzeZpbEFCu7L6MqHXMgtxvmfg2qfFKgzqcaHJgtHB2wZqx7pZZXFMHmW24hukMeD1",
  "key5": "35BdsGtjxPm1P9gg827zJcPUkp4GWwbf3UhYCMWQCdNoj5avi37Ydq3wNPpdp4QBCdGKxrEDHsX5d7MDA5Grnwdq",
  "key6": "f4Jxjs4zGzLsDXvkT4NmuozUhr1eXc8a4u1ckchmtD3JMYWoLn7gp8dxQJsz41cLsdG6m8zPTYWNmMBsZrvPhD4",
  "key7": "2XP8VEJWeHgj1s4Mxt89HiQHkZvc48GL4c33AbCCbkUDKdXXnW7fRyS5ypR5G9WT4iFMn5ZnTttBoxYc8RaFSJw8",
  "key8": "5p36rhnE4cefSQ1z74mbQeybcouVuNiTsWH7NhhMLtkQ4aDK9qn7UZrvozRxg7jMefEjzfjUmT1GaYmQ6VHUa2ip",
  "key9": "GTMm7ovtBqdBE5pSMbBvk6aXLEyUPvDWQZQNfQCXwmQkmrDiPwqVehm7ip6aqYAmg7CgpLYkCcDqSJ1n3Kj4YR1",
  "key10": "5zWVZAnsXBcNNjiha6HRcDn4pFiHijQ6kJYMUKg7ncaoBCHJRySTRTnD2CTH8WmJr3CJzKpaQKuVCJZ7NykR67fb",
  "key11": "5RyS1mXhksJbjiEQJaQRbHfu9aSdxLc8Ch94ZdFLWmQDAR7spD8XS5gEdchv3zYCzzZuycXkCRfJVfLMjjg5p6s",
  "key12": "5wJs5jG4NQWt7YnAyo2iwREc4UDGKtHitgRwRUKdcqLLG6zbJj39LDptKvzyGpm55MjrXmsXWrgMbvFXqGcgpPbZ",
  "key13": "51ZZ7EC3KkS5EFroXSWGChSQa9wKmGDxkshktkhq3HcudWboSLvrzcomzt6TMqLP9fJXY8UE2godQoq9AoGvzCjm",
  "key14": "4JV8vwLNWYMipiiBVSX5N8YU3LgWmLeLpqtuePZpEwpWSwvZGRPk2mZyCj6AMLfNzLzb5VFrfyWEzFSyjqCbm8wZ",
  "key15": "5kkiBfp2zEP9qrmxFXzXMLBZ1r6yf3q7dp2mT2GNkUoBMQu6iH6wCjHS9jwRYUMfoKdD6z2rX8DTo8rA6mxaYf9F",
  "key16": "2ACnyFDYv4Z6Amt6mE49PSgJRfAUeePr6fqHkFJ4exRzTMsfuR1oQfznSx3QTNfPjpTxjy89Y1JL3j4wcKfYLyML",
  "key17": "44AdVDXK5ttquTZz9aGQPrpoaPBZND7mxfHUvNQBqfu4C4XykASVZ4YKRsAQWmajX8ShHzJojLvRhdtGDXrreB9p",
  "key18": "2uh7nm4x9gxq5WpKXoqyY4tnmeQHhqQHwUrmvDLjwKm6DET8xfkaEtAqd9jVHjBjMswBNAyH8HDPEG8VDm5p5T7e",
  "key19": "2dTeTSTcVKVQzxe4Gcu856CjkydqpTDgAqqrtpvGy3BJdFXyneaJgBsKqSgtx6HrFYhKAv9Ma8daSTqMarF2gA6w",
  "key20": "3chniDFavHSVL6ckNAD6z6EkLt2p4sXyfcxaJ8V3n7NSRbekHimpbgmB3ZmDxm6QAVdyfZ9K84CSc4NpdZHuE7xo",
  "key21": "3JTyYhgyNaM99i7KV6tdnWQMYpFamHJmygUHQ85qHtdQGuBvTZ8ovANi63g5N47e47Gw3UtPzbckjkU4gfSuBCyg",
  "key22": "4LAAAPz1fCFBaoMNNihrJ1QejD3qRCLPhqWURYFV5SJet6pY9X5uvKCXFfcmji6SiwvVXZobbVxtxwSWbnQ9rQwB",
  "key23": "34HAGwrv3mvi146r5XYbZUy2fSx4s9wTaQ32tKUHX1ojZmJWh4EZF4Rn91X9d43xS2kHJydAPtpuUnasnToX3JJz",
  "key24": "3Zz5CiK96CM6k8C7SgrgidJRcbRDWGHFpmdAPC3wuArGdVM4bR5rsA6VUBUh9ibyFiFGiyAMFePV9gPb6CAH8Lwz",
  "key25": "2TSWjGEFF6WMZhb2NW6911CTLwdz93zMC2DW3qwu7aDkSszbrKGEHpcFe46VMHBCj4d9Mqor93F8zyTPzdS1vMHU",
  "key26": "4Ae5ynDkVahmvnR5XGhF6EtbNGZFSQYkwB2GEnY8KL94Cf6SK4HKT7wFnCnxutZunPXoa11cb4pCKc6Zgg8xBVMn",
  "key27": "vXKrxAwnpZrP8bMiRjPGRiL7fANHhrTUL4aAvqG25F5bMaACMAbHe9HREFF96DwJ29SwggXVAf3tM1pqiJjWTeo",
  "key28": "5R99kTqhSnV64yWz1RqCWiFByY1RXdoU4oKGpE1wzShrqm9WcLTi8tAtB2QVp4QDk37mW7kbiS54MVkM8E12tA3e",
  "key29": "3iZWQZgvvnxWCgR2cxRwbtUNDZy1xB8irLmM6QcZvoFweh2dRqdbbdCPGhS8SQLTFjFTAnZktScM8B4vLrRtmRJD",
  "key30": "5u1u1wmA923xCQNHbryzaiboSobopDV5oPRdUVQgnemssyKKvcEp7WXKazWdBwVzK4wm5Ks1GXv4U4sgj34oWN9c",
  "key31": "48yFMuNMH3Cx9rPqJMzyNx1RvFMPC3zyJYMuzu6c3mu8kFjacsNr8kzZnUB1txL4GSWKwb8W8JPRN43VcpqNLuDQ",
  "key32": "3CkyTdDZCsC23prvM9anjKahquXBvNcpbxtsUtZvc1f2hzx5pf67taE2hH11kUME8vtDFMEjefDKD2zKmUPyxNEE",
  "key33": "2jMCHxBsMQ7xYnzE9hWyj1G8S9tAg6LrShmEJ8S7nSqWUNU3r9r2fjKdHPn4BhFnaQE5a3i7oo8kX2CBdDcXqsAY",
  "key34": "2ZmZJ37qgHSb5i64jy9MFetkhPCn1BGjaS3x8g2xVvGEo4DUujgJUBzN238S2dEwbrPGjtnHkwrY3UB2pQw49qPS",
  "key35": "54NhMzt2dgMAfVTaNa5vDwkcfn8AHA6rRMVMiZBVQbRbggEJyyRyXbszoHEW2tGsDJbDxi6pAKcBC9G2wZ1pDxGd",
  "key36": "dFNozHUnVFoVUV1Jp8SEncCtWDSBx5NAe7w8v5FadfFq65KALZSSHxBTz8sx7ikyrZyP5DqgSF2xS5k9GykvT75",
  "key37": "5Xj666YG4YQQHzmPs8qHLj4Gog4qoSHKX8vBRnsEcYFssHKqFHZqnhpP2hiyPUr21eJSBhK37BzrDZYuSFvDdXfZ",
  "key38": "2iWkbx8x6kb9UdbowHe55m8uEe7UDUN9zuraAYK5hnX6oURuuxxzcQjJn5Fn7uSo51XVCdJ73MwYNmLrdTTHMfbc",
  "key39": "3sLxs5XdxVu6CZHJTbMW8Li5AFatbBJJpFY7rNzRkkCuGvSij9KaAPmH4SgfBGQyZNdaBteieK226EBmPJyr13We",
  "key40": "JRP24rT298Wd5fTiSogySgSkiu2bwr2SfodrfRStSKPTJwZ3FWRcdt7eA6P2H2whupVFVn8PMFZeBWxRy1uvmd9",
  "key41": "65X9WdVuxN77W6W2zCqqTW1u3pupzhBfAeNhbh6LnpAvGufLQPjaEe3DEb1bcskJmS9pZx9R54yHc9DJVBwWfL2j",
  "key42": "5jm7HVoBgnrgvQXXpdgBAQRYQwjg1U5m1snXek71UX1PyRpK3UZNUQrrNWSq5Cx1Su4QW3o49FBVNRCowqZYUMro",
  "key43": "5g6BH1oMneuesMEKK19yGNSVqdq4r25YYYcvFhEg6Ag1y1jYTiiwCofZBPyuTQ3FJ4Xv4A6wDjGhdeZrgmT6KW9a"
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
