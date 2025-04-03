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
    "3FGB7euftcNzPUnPCBuQHmkXhekKBxnZRy8j48utgvuSmHDyniPPQsG1AihmThCg7uowHYEa7wHSQ9ohgj8A7ASY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Zs5aytmEys7Z7dWiXJP6yt4p5sM36tEsZ81kDueG7Wke88kQq4f5yLc678gVfneHs8mR9yacpQvbLjotk6uy7m",
  "key1": "4hJAiXJs4TgU8hxRpxiJJSdnkmdmyfiryk8fuNDgx5rcMkqjz8z5dZtynL6vHHoJ3YTrntwos52fqVQ6279QsTtC",
  "key2": "DxRUtS1MgzN6UJTD4q1jNUkGVw9uZeFAv3Y7F6pMPe6B5mr8ZWm4LACiqxaBk1FycDBzPF9SRgR21MTXqJFWesh",
  "key3": "28QYGGgFTyyUfGKomvRAHnPtN5scTvpMJaznrBy7J9AmBYcvcT2FNLbpe29fQqXwrfKnewUQGv4Eaw8AaAYSjVhX",
  "key4": "3xXg4DGdainjRZWpiRVsXY7LSjH42Fb9qLD5MEEQCXGJNNVPn6F2XXJAjuAkDxnFASFYwASUkRJrCLMurCrs3ABL",
  "key5": "4fo1nmRPyULdA9vt1tRVXMn7oc3MCJSMjb6vGqnGfkFPUowUGhrv4ipxDyMYGJicgZJ8fvh8aDHhe4fK1wQfT96W",
  "key6": "5fnxQxwPpFn45W7a2yKrEfVdUaKbzqzZoZzSqgML4b7esSD3PmT5hVxKaUHGuUxwiFmVhrGc7gz6iTS4bjkfuWjR",
  "key7": "38EmQEBqZr1juQyR1cw4G6pEgPDrrE9Fk5vuH4zFrKHN2UJfqqh8dnZnxWwLrHZc2LDVWgSeqtgh5N2NZXpjGy2G",
  "key8": "3Eqzm3YDG7UeG9KBu6NjowLgaL1xbaWVKgucMKYk2GwPG4H8LAJe53jkRTcJ1wttUHX3ymZAgx7xEsvFqNXUiGGT",
  "key9": "KHwXXT83GtANy3iQXZ9Jqo51NMZjCQE7mV6x7NYC6gePq85jzc7uoN75VR2k6v2zNwUT2Xg3hvz5UiHYCHSzfAE",
  "key10": "5DmZYVi1eZ7PgaAeRHCyrSRJBUtnBqoDnN5PKoMbtRYRpnmusyiKYVMBdkfL4hjbBrbP6iQsMZiMBJR9ZsKx6T4R",
  "key11": "357Y2gBxGNYGXhekqJbG4vHMk96La5osNbDxZo2kdM3oEht97qyWTVkAvRP2fV8tYqLDCpYXNJ3mu9KYY8tZimhH",
  "key12": "3T4xEJDN6FykN5yHJZoTZYNK8q6oJMkmoedbZUdwUJdfm2Qwz7Jm7iMA7aLvGrpzzT22G88dkDsiGNJ3V5qZ9A9W",
  "key13": "3p1egWwZr2AumvAWgh2P3otjCS4uUyW56HimK8rRYmD3CpZiQk9JW9T9QfwMM52QZ26MFF3AfHTv9YMUezr5WUg3",
  "key14": "3PeDo7hUq7VxANcmzmweaeVWcytXCgibLpJCJCiZ9GqNJaaKZUta1s9Axx1KPDw4ng5A3WJKxvPkgCHXw26hEcrL",
  "key15": "4bV2HdXpYze9bpBihaUbQTybgxa85xZ6SiZGmxmea4PJys23xCcu3VYNYZMbJvn9K8zAzKgm8AdWJPVQTv5oTx6P",
  "key16": "61UmYjvRihmMwHd8nMNdmBQG6gYNfvrUqDz4ioT8ZLpBcvkYtkLefybwXKSGQzXPEAe85x1cc2HvkeaPByivNLCz",
  "key17": "3dZ5ao7fwvZ46uWaxBGCRFePkCF4KC4axhXxxydyZYBTxsJDgjLjdMq4nQaiFVkr6h3qkGPyuPiTkNMH1oL46SQh",
  "key18": "66zenF9s2cqrzSnCDCMxR8qjEcDbSoywJ73vCyjMbE8viLDDMY6q1EraPp99g3DSwbo9RkPE9kQQgYaTDEW6J6q8",
  "key19": "4MXPEhVMdUHgGSv7qjBQ7e53tMb9gNfpLaTyh4BKodyKyasszBDFP5pqvtSawD5e1B7sd9AJv8y7RQYsmjivTKdP",
  "key20": "SkTJL3LeTWDyngjcMx1jVboFT8PvkbNT1TocesZpvNnGkv4uzqVNrxPA32mUfGknEYFkuZbPmBdMn94GXrP8cbC",
  "key21": "4XfQyWhAqaW7ob3eBqypZhkMEnei9KHxHfnmRkrh94JvwNevVQzH51JgMepMA6Nk9LjU58teC2ou7duKaauJegCe",
  "key22": "KTNoc15GMBgXkb4rMYtEiKR7q4o5HXtT78BdDe6qvAbw16doji1q1gT7VruQ179AjM8TG9We6G2x48AABF4QsMY",
  "key23": "4wWxUwN2iP7X8x1wLCtHdRaH6JR91uRkVrwvMGPDdSbpuKK1sy3tFrMqvS3gHshWazcchNeD28oMoRktKk7GYmVp",
  "key24": "4GtkhwGEi1wt67FBPrcaT99ysixqMDNRxLpQhYJuw3swk5rukDpqL6tbFHt9wuD3v4fJHuzvNw2udCMzTF5WcpE3",
  "key25": "57cBygFceaoLBm4YMsCACB9U2maoW544Xecarf25Jf8Nhck5pmC9dGr4zETGXRU1mhyctExTB6vG4KUbuEhHpZX2",
  "key26": "4J9syhZBa5hGAu93uyEXKXLjuVJ4kNd7NKuWUdUYSMGbfiUbxmGstwniUAkT8fY7V5DBHNrqDrFwnzYc34zemZVa",
  "key27": "5Lfg5REy18nu9FYapXbR5VX1R6gFxx674uLjyp48kMzo2zSET8qqMNKe1fHrPFaKvpXkzVhJCTh8akWDhzAtag7E",
  "key28": "3uqvGmptnexFLA51Y7vCmmLm7rqMG6Any69zF2kvxKNxXyW76Bzf6m7LMUAR1HmNsAnoxy1aPKYyVHPSAt6h3kPm",
  "key29": "4uo5QNRcaizBj9LCWCX41WQi1EEmQWLY17YATewYPaNbpAEMa7vKkuqB595X4fYp7Kj4joQomMPoopAwDGfRyYLd",
  "key30": "4QWPPNPikS3TiFy5tyzn35L9pcD1Qhy7Q4tzA6yo14ijcWm5QW6vDyfuEzakzBv1ioCsXn8vav2PixBHykyE1Cuw",
  "key31": "5YWxEvJCxev1pxLZBJttBrNakj5bKUJEMgDpTctRzNMcLNE95xeRu81uv8yuJJxmQpnDd5tfsYugHGAhsEc4n8LW",
  "key32": "325eSz9zN5pwRDdRaukxCwMCQTHYJbEswRpF9EaMpBA1CAmW6AehpmeZqmtvjpJgFwhWRv1ytmUecdzkDgN2J9JC",
  "key33": "aZknEFwoXicmv6QEAfvsphskzcZXCAk6ZJuw5aC4FY995gDoYTF1hTWj1bcGNsoQ3bE3JJ7jpvkC4yb5uf3naSB"
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
