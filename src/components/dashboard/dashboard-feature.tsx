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
    "3zbEycN8RTC5FPAu8UBU92np7u7kbeS1eJ44QSKYm5ovwW3YfTY7rUN3mLsJcKDrrJ3rrYsnkUqRUCJYJHGW1BpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1aUQB3PXqAcfahy55eX89mCjicLJ7u2eLFEdv8dbZQYGywgxN14tLwcezwUtruSdDtvjHqtkK7x6TbfM1BYhoY",
  "key1": "4MSg6HWbuiMtPGXsYYBTsMP7cJtgNhtXXnyHSXtG7VJpwp4ZRyxEfFUMKCDj7HqAkJ9vFci4wVBvs3p4RJ7X2Mk4",
  "key2": "3yUqzsmXkjiJpxu5GHQbrRNhhAeHs9q8nB34if6Ub7gmHokEuy5ruojpf9hB2Zo8baeX239XWWy3X69MAHvDSyhM",
  "key3": "iGX16XN3TnkEnmUoKELYW4uXDHFxpRpCD8GyRVBtXMd8muomnrhFA1JVDsD1oxoZwoG9WaHt15Af3nRzzDuazja",
  "key4": "2zgYiouRbDc8oMWVZVbjfBtsZELG9uW6KP5gSPGn8KLrH6Swc6QJv5YdnMyF2VvcEqcootSovqDvaBr2fW6Qqhnw",
  "key5": "2acL7rqqjLPLQKciVLYHwFXEpNt3MfBAcLMuo3hLokhJXA7FJPp2trxhvwQRoHv7BvXQnmNRF5R2pLB6EmooKXay",
  "key6": "LA3ZHBar1EFEPc362rAV1pD7gN5M6CW9J9ZweD2VNVSTcPBjsCF7orW9Wa61uuDqqKzipL2BNFduHrWUZiNwkxq",
  "key7": "2itfmaHpYkG2TjYTE35qh3Z5zwpoMhT4XPKdS3saGXqAUM1Lkxr4tS7CA2BtN1XNsXV1kJeJVX1bQ82ekRogviWU",
  "key8": "4gCwirWxpuf52jSG5gbjoexqp7dr4yMz9qewa3TaZpdsqbKag8uXqSeTDpimQVUb1nXcQg6RLTWwcvAQPMtL1bxx",
  "key9": "1gngjghhsQhzaGRgYoUBkNzXgfv1Z1MY83zk2ktr8uwdS4Wax9exxqcbPT5NsfgiPB1U7LMaEDcv5KVbbnC5rHc",
  "key10": "deb5hfKnmiFbpHShB9UNbeLVDJT4VPCjHN7DzhKYGiwcFQTAQXkenZbKLLRFAVt319TnEyKiykoigrbEipnsfo4",
  "key11": "2iXVcEEPTjjK8aTPnFagpVhD4g2hLYSaaxsbYojFmS2RvyuTwnXJ7hQYGGTmT3U2Nq9BmpcMsLPFjpdYChDpjPzP",
  "key12": "2puQEdKxM8LecpKLa9ngTXcDUJs4YHVCH9vVXkSJ76wKDoTChUTm5Tat9h6mMWB8ta1UDpX4obe1TPvREAavirJZ",
  "key13": "VyKK7CCtBQ8f1BjjMxEvy6MHZBxaGgPpq1veTqmJj5yHxKBC7hTMtdNcd2nqNqxRpY8KkY9eefHVtnxfWVT4NG6",
  "key14": "XYYCabTvt1EQxnzjrYZ6SBy5EZsq6F9fT9nQ5hVqtXbxL48R8hTou5YsJFGGyAy5FLiXcMsuSLjAF4BTtJpWokN",
  "key15": "2WpFpZQ99c95QV32ncXjh3PjBEux2WCGdHisn4FK46WBPsE4vBYddDvUmxdm7zNgebCq1we147y3cjM3kQwrEKcZ",
  "key16": "5o1v6fAgARvw4cnzBQ2m6fPLRFfb4aisj27agRLA4nDpivb3VjK55dHx57x7of9Sgf2Nu4MnQwUm7y1mL47EG5JZ",
  "key17": "B5PsjmfqdCejZ1JFNUY63fFhfQ5FK22Xw1Cr7kCakDEwAuymmzFn7iKuMMANFFZ65KGoiAfZJA21UavXqGo72g5",
  "key18": "4Hckz899n6duikjpBSTRuVsJC4Bo9qrZExPx5ZWKNrLb9QNUyY6mbkPqAJVHrvJDW115vYPm7kZffWfL7J2ZRfdv",
  "key19": "4xH21G4rKTcjNyhgxkE7nAS8sQbVRV1vSdmuvxaYFnRjotPvgJyxrQtPcQB5TNDH2dNMjaC3mnKJ4Uo4EKr7fgPY",
  "key20": "5aUbaKrjQYDdcjasXs6a1cZ4JfQgpwPHt4Hq9a9BTTtw9hKnDBkZ4ywvFEBmcBCX1o3QpfrHjyd95zcRQBTA7KwS",
  "key21": "5oUFzQVfS6pXVpBd4iftELvkdobggck9HivjtmZFKbBZhJ8WXQFqWjJaZkgoP9eLk3HMT79YMFLiXeTwzdbEGTAw",
  "key22": "4t2AZeq5uz4BCVUS6KufMMvnCAQavets3HURLw31g9B29YBUCS1Q1DQsL6iStvWu8Akb8ikTWt5fjGs88xrRQNP",
  "key23": "5Gtxq7RdH91nHzEH5uR4fwikvNCodEVTWA5kdMmB7UcAs44vxhB873LNmRcn2G5Kiv2HG4bwwjC38LMq6EKhwZD7",
  "key24": "4EgwmMRsxzW5cZSzZzLH6UfsyG8ZWSFA1o2eMr4sDirky829M4nGBKeXo7XgPyL7Ba17Xff2iuQTWBvwciDvBx7q",
  "key25": "3Yk8iDcwWafiLTmZkGQhrGTYUY1MmDnCDGjp2vZvLyaz3BmXXVFgQeV4mKnDtvcAHL9FwSGLjJEQo72dPciDCiya",
  "key26": "2iD2jkzerSDfRwUP4fRuwmkpv4g3smWzizv7zrXpgU8y2CGmYtsKnwWqiCjwGtnrLzL5LGkEoDoCDfNtc6Z5qkna",
  "key27": "58Uaxt4U7yE5YvCHn8mWLDh2sqES5XC18WkQuNxoixLnTveTt9zPb3oGUHx584hcbfNefZJQdEEdQCJArkhzvk6c",
  "key28": "3cwvx4meN1XSgYCJMfSaGYSMzNunYDheoZrYCx686efU6MMxFtjwttqpixGexuHtoU7uA8iZEQX3ToyZgYcDt2xQ",
  "key29": "8FtajwjnJEbnpppoECLHC8gHDX51Vozu6AUHyYwVX42ZhbP2N6Tn1QjchHSWC3fU5Pq1LAVikZ5AgEgUGwuSKh1"
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
