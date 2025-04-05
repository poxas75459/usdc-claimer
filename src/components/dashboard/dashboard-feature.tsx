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
    "2MuAziCBPf3C7azjR3SAFU38633SmggvdseWGRh4ovUDGYztLsuBk6qubSHY5yfxyrWgpxyGNPR9hWfDX8Bq4VUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KweqMNABFkyp9Ki7DHx4hhENzHsxbwgB5mFPiQ5Wzpj9X5uJ1JBQYK4M4XhuqQEX6bdyC1AtwpiNt6xea7y7p7J",
  "key1": "4Wafv43QKwyhLSftrSMTsVwo1SE3gL9cpWxTLbBq9jyKRoRoDenyu8ddL5ZSswphpCpnhrFR7FZ8AMimdtwHsgA6",
  "key2": "3687TXFptbEL4Qq4R1zeJfdeM2dZ2LUCuxV6SgkCMfUdrToF68KEHWfLWBMUfxwSS327KRc6TRm4GXBcnGjHx4Q1",
  "key3": "4Qx3GnN7bzWNbMGCFQpoyQJEAFdcuuHbzon7xNYt11RGsihh92r1KnJHJWt3DddPSMv4PT6PJrnqZfk2DMXJ5mJ4",
  "key4": "5JPRVNa3DaHakLvdX7WaJ6AYZqcCgTAydg1LECw2fJXcf1oYQDDAPHBvyRGY2EYRFQCFAq3yAeGLWXgdyTmg8F4d",
  "key5": "2Ttp4kMVgqFFYywK6pQi6C7wSPd8u5KwBssw4ZjGuD3CvdDKSMu9WZX1eiPr1BFoQn5SqfXp5PmWx3jDimtwUMc",
  "key6": "4Lm4h1EYwEuZ1JMBWnan7nxawcnvFqFQCogPkmCyE3VkNfgkqP29DbYk79tYsb1WGEgNHX3pqKJuVE42fAMwpL6C",
  "key7": "2LrXbCg58XRA291GHu4XHLYV5RfDvayEqxheSmPrH1Kc39D5KYiXDyr5GfV8m9YeHku6N6mVAQeCDPfNpyxqzKmp",
  "key8": "3AEqBrWrQhK4VDeCMXPioFXJKP6RZJG3vgrjjrRfxkSiWHBmSSjedtgqtxJWn87sz1seM7EKvi2EU52iwyruDN6g",
  "key9": "8bwT2Wr1egcRauU76uTeJctnYuRrWXUKvCkRCxHbRQypEZzeFTVK6YxD4ah81Q1gJDr7AFSggT8enNrsAfKfvN8",
  "key10": "WipitMubYoUy3S38pixsg22YZnyj1qh57qkwoyA9zUhrErYJ7GeXu9ga4F7qSJv8kUVcd1kcoDaF1GZ8gyyg4Pm",
  "key11": "4VKoatg3GJvLPXwwq7o9URqByy8j2bBNAoyDDtdVa9x1HHj8ZvQtnaq6U85nfBe9aV398i4DMpciVQAYUQpnZKFB",
  "key12": "NPYUTGgQmY7TJvqwDdKkgChLgyQDmn6AWDbrPPHCakRMpbU7y6dM7cefAxELHKUBjgQ53rPhgLUhP9gYNEWEFma",
  "key13": "3vBzbUqkrn4jcAJsPpVRLXKyocnUD8mAw72hBCwC6WqNoYxa5dyViiSQkAhLCVHxTzGpGcd7tfA83MEF8Fo5pBHN",
  "key14": "4KQjYQhfZznYXyAzgupK3LyuVt8tReiyJEkTn7EgyeQAmi6Z5SecKr3Ma53F5dxq1AFid9haC3WdHVnuaco9on3p",
  "key15": "LgPX17CdSA4M7FzyR3WW5wf5u41itciNQd7PeCQVvQU7DEgGM71LvvvaYBN23rKd4VHkHviZ3kjyHwMArbWwAc3",
  "key16": "3FW6tSMqfGTMEqNV5wdv3LeLupkvPzUwkQ2YeM9cxt8AJ8TFA41DsjTfzUoh5oiUHP6zzDc46GvkK2MyNX7kXVei",
  "key17": "kiXkVSYkEM8QvKqnBDXLfkBG2nhoEdXF1SfKYoUV4miKWz49SFq3ysmp6QXtwSnAHXATb2KuZbFVJNWQrdBcgDc",
  "key18": "31d6D95BPE1H8yRPTYq1dx1t2qBKfdegixLWa4jXhV2J2YKYHUH8f5cr13PAHahu3TJNXrjTacV5MJHrMu5QaG1",
  "key19": "4gXpUEdKPZNcPHBpCDdK488tM1s152yefs7y3igLXoevKe4hSXyNdfysnNBtBAiN8TR353fdHT8VWPfXgp7Vxvbe",
  "key20": "2aB7wtFpQp3STacTtaeGKnawKdHTtWdN9t3V34MVD7YQR74YcqCZrTb4UUyMevjMB3ZoDuaAv5HfLXXXmL72CN8n",
  "key21": "xHwKKZ3GMZyWMgG1BqdRb9JR6cjnkg5YmkEApHHDN42iYvyBq6GoacsenGacqHpX3Vnjif2HaJPr5j1kp9zJZdR",
  "key22": "5Ud7HMGUAQJETa6QnwKrSwVsZ7syM9rkkGUfP5Vi8FPfUUW8NQCaJ2JKwM61sw5pHQngNfSmvcoVpo7ENJqvjKU3",
  "key23": "AQdhDBgGVPVRupx5pZLbb3rKQxUyPtA4VJ1DaYWQ7n7ib7nfzLbjaJDUg9ax3acXS3A9ab8G9yShmMq6QBcp5QW",
  "key24": "2WvwN4g7bn4ghEhXhF6mFwdr1LQYCQCsWigwfz2jm7jgxFKfb7oaFEgMfhgmnK6jKzVYXfhYBfq3o2jN6MDnazt3",
  "key25": "KvPWfAL3j2Rnk88BeN1LEtrasmmZDdQx6TRsrg3NkhSGGfKdKXa2wHqPhmzkFvrFGJf1iiuRXp1zxFyV7DMrcDQ",
  "key26": "3KQ2YvFzsaMoSAmvCmYDDSA33HYC1Yrdgjg5eWJ792EN78WuiUPZd3qqa3oc35zKvP1BuwuJPW8j7JfVkCNL9R6P",
  "key27": "5QEh75xwDmxBCoTV94X2qday6XdZrDat3zmZqyeyHFPTo2td4z2Yh9CPwwUBvF3S5ucDo1tSHWvThSCMibZkBH7w",
  "key28": "2eZiXdDFRdyBy7MHLoFsGVHi5pNCQofRHxJvCbcR38CVVPS2WZ4VW91EeJh97H6LM9GyKbZhZyRbnQZ7veQAqr7H",
  "key29": "5TdWqyyeMc1eW3k2txrYmsPSQAfcRtu48jyzegKKP27FBKyhVS95Hkn2ByGZB62VDVHKtwBknd6jfcgszMG1AWev",
  "key30": "598SqNpFyy1LhPjXnYunggH9xRCng1qDAKR7DPPT96xVrT2isaGi8c51NXPdu36NtKjjhnzQjoTMqxehJwCL9bUo",
  "key31": "4gLzTmpP4s4KnqgEdZsNyncggVCkVPTGecZx7P3QVPLNA2kvroV34vpsELEDrcZeLCE66z6mWo5jRVXF4Z6dGf6X",
  "key32": "Qf1HikS1zXyCojag3FyW8yzV6AkPd2cCkv9oDE43qbW2iK5NGCrH37Ar8Dwsc5CLhTtC1NvQzrT8Yewyexfztyf",
  "key33": "2vhodiyLP22As3ZxL9w96TTu5hiPSLa2dSg5S5HAL3NSk318VnYRpT22fUk5M46Pgxewfx32vrYJQTeTGzN5NDCa"
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
