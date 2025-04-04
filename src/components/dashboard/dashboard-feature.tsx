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
    "5HMR1r7NSgPjsq5ydA7ZSvCoyun2qjWnxYJFSaZ5MPec1fx4QUKrVHndth569MzFy3irfJjfxgQAHTQxbh41fSQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pof8NJcUcGkpCX1d6siY8emRMzxRk1ea5zxbHYvDLCbtE9cX1i2DjCghftcC2i4AVMpC4P943T1z4hcDVGf62Lh",
  "key1": "63LC19eVBja4uD3UWvehuYKNJjkH6FWEK1nm8cWfnQNVMHow77wv4QZ49Kd8jg1LVBfrGPoy92GirLWazFTAaiT5",
  "key2": "59K6vLVJwUAaMcHU7SFeTqJiUqY1rQYjH3F1Lwav5M95dnuAcJXiTg3tfEBpYFwdunjhcgwsmzNjAL2hLaFTMnvE",
  "key3": "38QBHXUqeVrvxXsXE8F7SrJ3CeNZizLiLiys9ns3uAkeJ47sAhwEzi7oNJhhb7RzUUA4kyXbPxz3WwiLgK8PACVE",
  "key4": "55W56sXtAT4k2h9wzmTGkrMLnh2m8DjpnhuYyyFQ4V9gwxMCvcKXHCP4Fj67ReuzWXJU2U5myxbqSHbue87wykvB",
  "key5": "3rf5uk7XkSseSXfZNvotP7Bygt34rVGv36yLfmXyi2nezCCyn9vChpinhesw9PQnqUcYgKGeHaqZCnjRayAFDCqh",
  "key6": "5vrHTXKVS3u98AjQFkhN9xhT8JAmW1Ng4KMDY14aonvpiAMNFC5EKgLp2L9FCuTudK3eNcUb7sjWshPfhXnqV97N",
  "key7": "zdNye2Z4okVTeyqcAaSh3J9Gsu17XgQSEE8os8boDAgmidqsP8wuHWJACSxi7oCDcRgswDNqAHKcu55wNLJQUYU",
  "key8": "5yotFPp3pjJJC2TiCCM8kLhhtpc43E59maA8AgZdNnPupgiT24JEPY27iDuiZ7APEKRXL2h2AcYdzbc9E5bgdhZ4",
  "key9": "4cjDzbwmdgUYXXnNQerK2BhcsJCcQvECfeKaMfFAa2k9sD74GkKCrqmyb3bt8B7bsM6TPnf7FatwRvJvrENvh1ax",
  "key10": "4fNXXMsfmTSAz3nBxyjVEUD2mvcwb8mkcQiPhMWsyCRGhXgwFvi132qGEnF1J73TpDUVucqkaVs8tZTzYnCHDWf1",
  "key11": "2p4RPrdU4U87GiLTAqTA3V2Pjgv2R2uf4AYBSQ5ZoTCEgnniHCYkabyjAr81z82LqxZH5Y9fQEb7gJM2iRhzAjdP",
  "key12": "2GJ94T95aX14a7t1kfVMvUiLrSTtAh5REZJoq8wzyBPKHMF7fhxnQYGBXoonguKotZ1Xd7JEXVJm9pqDmR9TJ5gC",
  "key13": "2dMy3vivcMFsdnj3a8cJK2LTSCtWgiWxwAVmikH9icyYp1PL16TjQrNsmbdq1HrHJYFSpHsDngJriGqSLXzKS6TM",
  "key14": "4m6HmqkMyBGsFCQg6BmWXzdqhBrvbACLWTzMbZ4t7u49y9f3GJ5Zb2k7A2vct3wQb9x9fByC8btLGWEhx9GD3gyc",
  "key15": "4sNAevrciZsRm5r9FXjJDz4GJGRuaxcYApDcAhP89fzUg99wTYkhA25Fa9pnF81DcCkRwTHh2cM2FRjJejLoA24R",
  "key16": "CWeGTNphFpGBHWJwPmEAreSmBPmRZ1p9gABUcBesubvh1CUDPgQextLsrTbE781EGrCwjYpdrdPshadLEYbBNAY",
  "key17": "3SNV6dsEB4DMRhTg5dRM4Jeit16G1PTH2dYXCHr3ax1mz8fsvjaXNBmcAXzX2ew9V6zb4uP1gw6iJKmpfqRaQu4t",
  "key18": "3KxggBe7uCVcL4hEmjyZytt977grWruDQkN9kfuHM1pr4kjqsTezDLDpGy6JBTLQ8wBq3HxBBKsVN3BMaxY8zQ8J",
  "key19": "hzeQHsHAPGQgcBNAxz4HnuSLBycRyRjULDxcXosaPot9ZY4qQZfQJicMJjFq3hp9Dgj9xP9qMdo8gqu3Q3KpWCD",
  "key20": "635y3Lw26dfaS7um5CLiXELQeEWmVULTk4zrGCEikwzc7mQQAyA5BTffhVbokgsJSbcfaLMCfkEVpmDEw5vVE9aD",
  "key21": "2nQxEf8SqDDeqoKtvH83F3gJyWp6dHqM3hQLpSdVtKDTyxp7adafTBoGysVsnA2eiKMutbGoWr1CxzF5s1HXentJ",
  "key22": "2JFKptK4JnEo1vRb7giiQPMM8YZegkZ8Agi77PrXx9WthXPpfzuf8Pd6epBPu7D7F2C9vPex3w1zVbbRASyeWqAd",
  "key23": "58gpohonU68YqATfrwfcuwCzC9Xa3xMKy7MMou8h1UCNYg4mevRf6SKvDLYVUfvNMq6XodesztmbowM8oZQxesWc",
  "key24": "3LbxUoPn7jc5yuzpxf9KXSduFCZv7qng5rFt2hvwhxDiU4kNtWgeWwtgMCTbb1cTYi4cZm4YG88DucpSQyCQ2duN",
  "key25": "2PqJUBrg5JpxaRxXCCDdwzjHTACjReDXBGyTXHL9S2V15X9ygLZM5ULBhFehmuDMVsEcQaiSp2ViLqtbsEzmtEHo",
  "key26": "MW2jePA57JBohBEJiuSYwrjZcCH63SGL34FNGgwoqDzuf8y1u82NdCgLVAvDkXKSAQmyZ84unkUfVh6mv6ttptW",
  "key27": "RyAXus1qYfDiEXXZ5qGXA8L4VRYCn4NtSMqd6SBxdXLGYs5PCt3jSpc5sUMi11hUpLCupvyLwgdH7WT1bE8eH25",
  "key28": "4xjFJuMzVqJ6rk1Jq5YA8o3sg97mHCvwYZAWs7b8eFKESgQsJKsRUJvsHYLfsKvnx7hdZnKkAEmPiTTKZPLDEASu"
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
