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
    "4kSmC6HU12GDeqZf8eCKb2ARM3zwhtuco4FKMwehK6HY5BgP7mFEQ5VPE2raiJK8VahMJv8WaNpFqMoDPMtu2BKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7S4Eg9fVBe2bvh8jtaNtnqHPAse7sV6NhpfwafBDS1bgqYKbb9oTq6hUJNvJQoyV8reoKjPxYuccmGqtWfQ61Z",
  "key1": "2pKb8fp5diiamamRPdZ9m5tXFqMYiaXDhVefN853z2jJZmrA1yqgqzdPtYnRwwFjFFQ5moWDWx3we1YW6JXTtEWq",
  "key2": "2LRJGPZQVtRDU71WeyGKPATpps8SpkPvwm61ScKHg6nqyETNYqs3ym4jxk6K88pqHFjgAM2hgiPsgUL87R3chF7u",
  "key3": "3Z1WprLuTxiCdLGG47bhUFcj7rWrir5kZdWMahrw973zkbdBh7MpKqRxVF1kHj2BcD1EQsdfC6osVGDVSfTcnGyM",
  "key4": "4FMCiHswSaSz3WCcKdLru1WM6QXShMNx8vJFA4DVXSzC26LP8V2CC968A3eWTM7ZVmVNQK1gr4iWKMDZiqsvTsKL",
  "key5": "3gjcbuQBCpHAzf8Sqgzmp7Yjo5zGdXRNFZ8zC3WxNZDvuhpLH4cp4VrPGF7wA9VqezZBuDXPc6m5VF7MkNA6zida",
  "key6": "2RscquQcSBjyERQHqLUnzxBSuiukDHCCauokYPxAm2ga7QFWdHvuiPBvfedvLqj6EkyVeMi7PxW4otu4P58zEx8D",
  "key7": "2HsogV8vwKjk9EZg3bhyy6BpVhYoqAzitZ4RyGYWiF6Y8Y2GKvb93ALGu15bjJS2jhAw8VU7stWQDSAmC9XHWRBi",
  "key8": "bZKXS2GKZzGcbTB8jRtFaSrmE25CqFzdWSYswSx5cKCBHQEhe5vnarDkyPDvwW3xorqRC7VCCPTTifKfCMKEAKk",
  "key9": "3NxVcwMmmgeP2wQden1U37URQ8qG94VCaY9TEXj8rge37SnXEqvJk7CmNjQBwPQZHq6gp7DNRau6A2FrQRHadNq",
  "key10": "4JpG2cvLwpc9DtXmhYUop6hcsto8y3u5RfHdTzKEKuE2fNR8k94qQhvfR5q3hysfYfMMP5nGkccBuf7MwZBS4otz",
  "key11": "khaaL8dzCzxycMgPJiDZDiU1jkBGVcgwH1rQb27BicyW3XbrSkZtjYKyfuGwGbPL2Aeum7JBGFAJnoD85Ee3aN1",
  "key12": "5w1q7e3CCn3db2Mq2UrqyhXVzY4ULT4ZzENoLRFfNPui5yGDUecBLgwTJj2BUrA868mVJv4W6NKKedWMeZ21PfU2",
  "key13": "2nxjdSJsZeneG8MK5z5VsYn6sNkzXBVcRh3FZbyQT5VU77F4jtszxGgsvidAZMPMagjJz2KdLs7mrHLonjme2qzN",
  "key14": "4nfzbHtoNKSxDs5cJKrLJjdZiviL17vSLEwyxiDMbqBK2M448R9o885kQLXjibM2i5LKBFyT7eivquKfbN1nu8FM",
  "key15": "ZUKCUVes3SzHTKyRasfkDdp1vJBfCUtsesbX8gBaQvf3tMnG1H3McjYDgTTGmLd9xbHv4f6fVtyLbBKisgUbSvU",
  "key16": "5dtDHir2923i1cpohoNs2beE3RYuN6R6XPaPnUdmVT5GkGNiaPVXRmmJCxCYs3aE7P5sHNd8TjC7YDBQWdhWLR1B",
  "key17": "yWrdqy9DZUQRDy4Qu3etJbQ52qpwwe4BdiEuGWbfiY47NKPwSi7Ay6buJzKH9q9VBGkCVYeWE64cZA2a9ND5Nt6",
  "key18": "2TksKJqVGBhdwQDXyjDfVZuBCtzVNb3ekwPrsrVHCEPgwDBDcMJNAsLiWXfrkN2T9pZsJBuTENdNRLiJ5gb9NHYN",
  "key19": "26UzwCHVasaXJXYVunn2vUS1H3VmUbpaRSDdKnSQbsMr795ZEUgw8YeJvc6W5FWPPspvmMraJDZWg2chHyzxEVkX",
  "key20": "5hppwRougP7ohVjqu5SCnj3VehNPSABeqADdUxRBATjFx61jSmyig6RCqLcCXPYx6ciCNFcuQmUf7xGFY9S4qynR",
  "key21": "2GFEzBSnEiVCZ7dRimnVzndHzHF8D9Ccj6EieebxEoYj2M36Z94RHR3RPunRu3iwqGC5U1jc1DTtHCTzFahbcwv7",
  "key22": "2ikm7qCr5wniTCZRydJPLHLypPnvPTei5hzXu2m5D5mx3wfubiUde7mucBfpNERShguJT9UUw65J6W7h5q1NsZZo",
  "key23": "FRQqmz4ztWfBFLWAtRgAFzuwj82fsz5gMZHsoWHM3oVihMRDTMZ5UqyycgpfA73SzLxyAShgYvhpThFsgj77a3j",
  "key24": "62vmgfxro7CoBNURA3LXC7mhjMCn6u3wVjwN5wjQAb6kiKX8hJ7sYo4SWfdZndXtBT1FZQjWEkxxfFd9CdC1M547",
  "key25": "4qJeeqEZg2YvwyhRXiXNvuLri3bs2ZxqXRt47aiM58adKnNtNvJsv8bKHn1Xn616fLAuJYFqXNzZD4UPFquXKFKS",
  "key26": "L2eWVxehkbMW2pnTL5UFhGkQZFDDeHdUU4ZdzHFV9FYczUbbjys2C136wpo8gHFrp32ddfnYrmj2PQXFVJmi883",
  "key27": "2NfGqMmam34FeDhpiUBcfbaj5iWxizxmKEMYZueUMGPHYaipJXDaDazH8ecoYwS6XNYF8xTR6m7Xx7RF3u7tntos",
  "key28": "2hNURzNXwHv6j8T5VEeoRMYLuHzLU7uSZVYbrd31XfLp4aiHFjdEQWVnP5rzoM9wU2K4zhbFEXyZuUpqZpPBBquU",
  "key29": "NPqLs4tVgZStTPk9XYsm8H9kLkqo4M5utEyWEp7xdYsKknUd3gt2ayHcsh98F1wHJhoPt3K8L2DqwYPMhVJoeeD",
  "key30": "G9FjQhtoBHwSshE29uAKBh4UCpCuRZ9dLWpFbzrLjPGjDeHc7BmVU9C9bPEcZ6gVzj3qQpeVVcevyBMtDcfeYAe",
  "key31": "fnFPRZZ1FLaMBmKwN8TTLAXLySD9zWUkNrcKqKqx9JfUyPGr5DxQTsNKxDpySTbi5KfGewyYxect6ZkUA5QKdv6",
  "key32": "3hqFqKF5HYco3ABZZ4Tj4gQ85ypCaKifKZdQ8XU1KncYBTgZn9u7Kda6Pjd1TYvSQPPoMhKDybyxJi7X4XzG4qCz",
  "key33": "5RyYDAk6HopxV8s8ArgRzky8PKe8gsdx7BmKW5f9QxQtC5NHbNXanX2ANbow9tiDw74ZLz5dfYoU538Ge1cpnfbZ",
  "key34": "7z5KkVq4oUa14rZSz3jzfTCJ1UUpnos6VdcfozxTgSaRLiCSRJxc4VVDKBA8AJWAAGw43Enh2Yure1sptAfnt2f",
  "key35": "336JASVtsak5B6fvRnrgJPNcUufkbo5F41xUz65YfzKRBavGBvnjUJiruUKf5sBxTA4Nkpv9C4XiUCYgQoEGFvX8",
  "key36": "5W3T5Fe97FU8sK4KuBooQosC97C2XhfgR1rybx9NX8HtMKiAfqGZDpbT8qeoxYghtZC758nRBVWG7UdSLMjgpuuV",
  "key37": "5K9EDPbmnrUcuZcxqZwF6tYNnwyYQLfeDGp4hU8zzqfs7TezLShSQUxci6FG8BEjUNeL5SuLM3nCCyaJm1PVuYqn",
  "key38": "2tYmPToHnZ2VsnqUFggzD69VEsfxCtH4DQu5jdddoArfFe2oasj1eAYxhbMNdt3smUrMW9x7dGfhMcH6euy7Lu3T",
  "key39": "3tvNCLnW6HKpMtrnMZSLBndn7LGmEsWp4k1TLgjztfvYen1iAqCfvTVFmakF9ZeivNYrwacWi5n6xYjF4xsWxFt5",
  "key40": "LSHe5nt1yMyXkYaSqrnaPafTnQmgTXF3JJSQNWUsVGiWyMjaSXks8GxzhvTwzJWhMCEmCFJci99fFSf7TKDr92p",
  "key41": "45EPfGDxufWD9k3xMMwPPBHomCZiwzxZ7VDf36euAZCYh68hQ2BianN4pKAgZERaUVYu2GXuMfXSw4c43UFg1K3c"
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
