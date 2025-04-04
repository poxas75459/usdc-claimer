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
    "3azZr2SvBJMcwywkRHoETB6oq3nrWVM7SCKZEJ9Qz82X7ZUZdnunSmJ8wKycwJpteiTbLY9YnNYye5LisvjQd5CL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHjmMFgRkUAMAWXjpiRCXKTdVYWqQoUxDFuX4mJLvG39D1nGexEM8wehEdPevFrrH7rMY3hUhupMSiTwJ9t9iKg",
  "key1": "2gc8SVnyYaQ46eJv295B54A4wDJS8mUUUv75AAamwjCWk2q7ZZksArSm9PSWV1LwvUHg3rPX8gpYqK5qeFiED9n1",
  "key2": "LjxwXK6pWf3Dx2hsQ3DT1Jx8ASBzRh9puq6NgC3Py6o42J2rBxTqkx6JTASXm97DJsA9WwKyBc5JibF4iN8PdvT",
  "key3": "XWHsSS3ANDNsT6mpjrpEUjE7dVtAQ13UnED4epSzxM5LZgSTunUtjcwbnTHDskoy6ggmqSSRR6SCBbtAeixCSzT",
  "key4": "53PV3KQHCEFkJf1fnVMLwxKp1FmeNHwUjvi3FhuDzgThCojoNEudwJbHjEtXpHS9wtTh91YKzsRwsa6gTM9FNFxj",
  "key5": "JvVJMMLKXXEVH1Q5fyCRmPHuQnKqTPaj8WcswWT4h62QrGjYAU3J5ow4bZLTnLh6FKGRQNgeSs3iy2827DxdHcG",
  "key6": "4VJDjf9mJcRdJ4bN93JK3h5Lfd4j7t3RBvhMJ784yt5pTfcNUa7cnxHpsrB1KL2Rjqqg9sRy25HWcebMz51HVvCq",
  "key7": "JDwMDMiXLQ2Zfwrkitw7ri9hQLcb3T4JoLYw4Z5WzdFbzCsG2CxqjqLKNpoA3yzvexj39BRuhTGkJxmrhU93m2V",
  "key8": "2BMeyDjei4sshyYNBxZzVK1GwyGzPAMDMEd7aY4NuEDXt3bxFN98wE5ydUn5LBNhMFM28ptmTG4WT2R1fTrhF1DP",
  "key9": "55JS1vv6kFwSujCGeDTbnKBtKWwDSim44EG3mZHb1sjuFoWSFEeETdGf7sLhQFGFsCRjcNxqQH6MaJRb2wxTAt4c",
  "key10": "5C5qiH3tAducafuLDpT5zVw7kHpcZDFvtanhcgaCoQshwkRtTXx58i7CiqYPCJ3EibtJBFmCxH3YmH4DTBC8Am1Z",
  "key11": "5d59KDPnzH9qSjWbeKhuDf3Y4akuyeijahdopL8UBNG9ZXPUrtEmGMwA4xY6Ut4aH8WV2msemrTTRdmRCSuLWChQ",
  "key12": "xWnhGHLMTMDRgjCvBaam5Du5vnFDd2JyqdW45rGsduX9XDhmBsNY2mcauhMccyKeoNsKejinrve62JiZMsbExMU",
  "key13": "3Y4fiLXwkDXfGnb9tSMLMjiBGHrvkjwzUGcxyXFQG62dAQWVDeJ1GvJons7NDM9u4dT8AABrUZCvzhqrHuimJjEx",
  "key14": "q5ypbbotAb51XWkcJFbEjVwpEc8cxh9i5qGiGwfUdAs5Ewe3oDX4nE5FSEM9bUwDnkABysxS4HzS66DZjRBkyoc",
  "key15": "26RxayeQDKacoiAQowbyzCP6c8L2HdoujLcaTJvKmQ5appwMcw55tgtsFzqe3GRRMsu6FNi7Mdt7Ht7tRu6nv7Rs",
  "key16": "4MXkmy3Ki6ncN4aARSPaPPgCewmZBgHyoU2pj6JrjP7awRvraxy6KaMJetYuR2cTUY3CwPwTsLGSo3v3XGG7RkiD",
  "key17": "JZqEfwAs11hR1mP1j6DtLKcMjE8XoQEPdTb29BX4X17fgyf6wUnSogGxYR35Y55FMkbyMpoESZLR83rr48cCcSF",
  "key18": "38w6iNNEcCqJ4AwGCDsPVmn9f5jkTVhEmQcRbBofEVUPD9gxWg18YoHXYKxEsQB3vcuwWNu9ZNz6EgQezHKrDbQQ",
  "key19": "2yX3G68gUj3CLrWA1iX7q9icLh67PdBR5CzJeHqWA2ij93Sf88wNJewJvPKdz5GsX8gCrioq2NahcvvEcW1yjMkQ",
  "key20": "2wtyRGg3kKj8L7ZnrpNVfWARu5ZUmPRs8AnGRU9ZkTs6H8CmNNCLXkKqxSNPHb7cVQbGU77Cd9Khqhu9XpqjPZLp",
  "key21": "46MPPSGXsFjJX5ypMHMAtfAMdupH93R9Tyabk6JQ4GN1tXV9NgW5TiLGKzVvfMQX2NdPSo2HAxpcqktepn1Bai56",
  "key22": "4gULB3fAWyf7UcnZp6kTW2URte9eYddAWeZLRmYR82QCB38cbMChmdbcmtrRnU2bNJWLqhWZvtES9D4Q2KV9m4HX",
  "key23": "2ptuMuF6HkBknFp4vRikJfg2fdMFK98cz4MCCECST3H2CMJ7JvkvTTuGyqg7co5njhnDvuBQnydHcwSDCT5DCkcD",
  "key24": "LBteuka8P4g15FRuzZ9CyExYt4SyLwj6amLyRvi3bTKjbw9sy2kChC7A4CSsKoHmhU6kz1UbGdJP6DhvB1UY4uE",
  "key25": "3WoargReUuhpvtZuTETeFgpYDJZZKA1EN6tiBKSQw3ui8AhrhCZYW88FEdo7LAJCsiB8ykPK4yZxWu4HWCvnKUFQ",
  "key26": "7pPkhNTo6rv3AJrdwyR9ARs6t8s6QUG92aUwZmTHko9JTJssnpMdtDPfktEgmCZiZ32ULb5GTYVrvUkHJDvhs4Q",
  "key27": "2QeizUy7xJ4HfTLchxZoNZuKfDh8PNv7VkzpFqyARa7PgAZBjpDkX27TKRtJAuyi7QREY6QLTLigUCfYCMBxoanJ",
  "key28": "5V5dJwXQtcwnTBYP76fbQuGcBSEmbUNShZHpA5d2ScEwjnC8zBKWvHGMRrXMT8YjDa1LuGUyWDb1kNwMRqh4BPgb",
  "key29": "54xBnHicvYwCeA7gud7JWRxUEunqNeEKTUFAv17GzUvrhivzWDgCsXHCzyVxbVVyCSsQBehNrHYmVvPBauWuw97k",
  "key30": "3uJ8Z6xZQczhpU18aHhJHjdsn5eAHJcJGMhP5Tg4gXkqYFaMAccfTFT1VDdzneLCfV8XugMBVkSXvwUbBRxx6HQC",
  "key31": "5BU5duR1oJceso3GhCJrAj9tskhDPS2Myu99ooo4CWbNmMDFVmuJVETwz7vSF3RcC1hKo7i6HKo1WVJ1QSLxzdxo",
  "key32": "4Jw2TEv4QZdbxQG7b29vQtGpWL3hEVZKiM6j3dRxAADJMU9pwvaAvn2qezJnmEnNnbVqAYmtW7hkC5F7nhpquthr"
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
