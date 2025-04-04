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
    "5tsQFeC7xajnXv217bubDiiFEr345nyBUKkVocQYyoBHf7r21oB2sTLVu9seEMD66mfwJSjF7QfJBZ5qZbT4Gwp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYogwkFy2nGwiKeotPoeWi3iSP68fXfUxmUHRWiAK16vQsQzZgjFpguMqCbs3MDKh17GwJxz4M3ZikxLWe5Ddxi",
  "key1": "4M2FRgGZfBKUFGTaosBARCfRjrBEhXC2Y7jtWoqJkjAND4fPGDx74g5Lp6F4TjQHZ8gPohAPAP32eD62t6hTg4Q5",
  "key2": "3Z9x4EPX5WFR7qwbGATnxAJXYhser1EuGJCo75NMjtPbso5S1vzmip9erGxFbs9CU3ujrSQ8AM3Vpm1Lct5sTYdp",
  "key3": "2PwVyuwB8vg66EHL9x1HEAqid321XSCyavjvA4JfSZrauswszBBGXFPo1CK3ibTN1LPfVhvteG1vEUT5ccsNJKXM",
  "key4": "sW34k4bXxMJCyhgfy7Vw3tjy5SK3CyoNmuDxCs4QrUdEUvudbuG7NKRWUprFiQQrassjWSX9XM7dncyW6RUT2cU",
  "key5": "5SQUopui6VbFU7qStKEbPYfEFbYq1WepqurbELZxT9PGW28Yh3tybw4cC8Y5tdy7ktmCnYwj1YNcYHbY44jc5mRs",
  "key6": "2E5qzrpzFxhJA78cFSKBK6NUSaReSLcDcQzp2GLXoAz5r9cnR2k45WCKc3JJ7NENm6p2Z6jvugqkg7yY54EdUaj4",
  "key7": "5XJ8eqTd6QxvkUnDwqhH188qeUKft92HobYVfa3d9wp4EkUFgBAJrAR3VW65crGLJrdV118uS1nHs6CWMyk3pD39",
  "key8": "4JWR4dqsc3hYw57QCU3kyKDTGEcReQCaJPtEd2YT32t5CZaDv6B9xshRyhXVLfrfpNdwD9bWnXMysVL3VgqTQr5Q",
  "key9": "39GTJetnoCSS5ahoeFCHRAMg9JsLNQhXL9KPaKfhjvCqUHSzE6PmJvfLLit6TnS4H7pSc5YBpagMdsV3psPvN8g",
  "key10": "33QWzAjmT7xRJEtL7u1Yjij3kQJrQEv3pWKvpVDedvsEURhGgo8Ndgoe4smuro6QAeuKNAE7ZG37AWDfaWR6QACL",
  "key11": "2nhV2W7HajziPGzVzc1jXqAhGtdkBg38BK6TrVW8nkL4ZTJd2bPapVBqXdFCA5FMJnn8Hmvqe8fKWdpbkYxnyart",
  "key12": "stXMhZJvvhuQmzsGwciFECXqzP8gY54EuZdhPdBoM4zVHW6dAuXQcn4KjdRuCcmk9Ws343gfZD4pC8xM4APY4YN",
  "key13": "4en98b6bgv5uyxXp2b453PwQr3esgeumEwQDhbZqq9AKue2xydQiNht9YLsrro2aHA94AGPfMV9JLLqopFgf6sao",
  "key14": "2eTGCdn7UDSsxZDDtfvM2PHPcAu9WnkZeRFUYaTUYQjEbLj54k7cZb8K3BRhN7C4VqSrECWTQbqRd7bTAhuENHJZ",
  "key15": "2oWsJSxpYbT3iKeKv9GmyNgnMssZ8WDrT7UdxytQzLdpAwqzu3vUEyyFtKewwYJFjwvhgimAXFdPcFxdMUvEvDZL",
  "key16": "5f7VgPMMuFL4mWxbdT3UN5LUisYkx6YH7XkFSRGvUPMRBNEBLGo1BkRRoN87FYYHDZxwtAZKEedeNQvmWCx9aDtz",
  "key17": "3eKhKo2sncptgtLHra9NGyQ2nqezyuCcnhsNzS6b4s2Dy6eSxQabjrznS4FuEDNMeg333viHLxfLm4pNQ5cQW2Ef",
  "key18": "5DjPmPZuE3DkxVrz2CiAjjo9o4dn4NmEDzr26pwqhrbKZevCpRvTfGDuM7jFuYgnVx4E7CvQ375nDnkEaWim9bzy",
  "key19": "5DSv4SYYGA1Xi2LQyKDr5bz92WnqmgkJxRz4132bFFDkTgepFsuZEufzSZ8gck4mFeyV4fhERvry1KJx6RpsMUMq",
  "key20": "5eA3vKLRfc9kT9BznjQiV5YS5o8QhzrU9Y6vmZ1Q8JuSQZE8AiPVdYEcV4zGwys8UycYpnL6vSk89g2fa6ryiToc",
  "key21": "38jbbd2CMNmWatqXCoB6WYSEzMzqZ2LXUbcRVmR5QW82SBeFpEKgzSLEdGnwkr7Z8tVa2mgiRuGLkT7ACcJ61uJu",
  "key22": "4pLNnQ7nhWphmrsHHUbktqTpFBkYLTbPfCtYy5hGyXcD9MqLERZZnWe5CT3JkmnvZ8znagCPU7rGkzzAxJAK8MfQ",
  "key23": "3gBafF5MZoyGuiEi9zdnJX43R6fKhDqsdZ7xq19GQrQ9u94RHBG1ittmHdFBq1v3TTueUgXK4CNg4b7AABVvxraR",
  "key24": "2rQCt3ANyHdXro8u6Ri5S4hkSySd4c1amNNrUryHk5Bd93YNbQfFuCDTvGqe3Sy26318R2gWf5A3aKTWPTZoCa3x",
  "key25": "bpXAoEYcF4k2A8jeSUzVwNg9VKBAQVEVvQ9FuTNHiALoUtQXJ1EC6eVsiudxbdtmTzZEXvg4ViJGuKqA1AEVAR8",
  "key26": "3Zx8qFe3DAsz5tzahPAGAo5JPB8TdAq6kRDC5TQS3tKi88iCGRcYuGnqe9i8XknA1gUBqBrobGtvi7e8e6cMMxZ6",
  "key27": "2CnWxHcmzwgJx9xCZtzh7rWgeuxdSyw4ZT6UrvtnDNLJtHbaC85yeJrFbyuxc8WuQ6U75W1XoJmnE7vVbqmmDqAH",
  "key28": "3gWzvUE5GK1gFNyJnEak6VxqjR8ijE5AvaixYgQJ83WDVBhrFW49BfDJqgFw3RoPe5DZm9Fb4LrqpbsZaYN3xCDo",
  "key29": "5eBve4GxUMzANSJhPyAj3fmY7CGaoh394RJYRXEHHWoZ7GvPW41tcYMdCtAH3xcftGyH6oEkGay4SUWxVXLA7Xub",
  "key30": "4eguESwFwEGpPzwW9iEx5LdvQY2eA5fHd2YxZgwjz1K3mbJY28bGbeF4FeEGn2Mb6wadg39geMzGJXEXbXh9C34C",
  "key31": "32vXftHEQh1qyG9gktSpDDcFf1Apwdhzd3QWbis1AVU5NWwdXHPHRQP9iUoNsC4YB4HEsZCyxenwkURu5MYz4JJ4",
  "key32": "3EKCLcayyMobicFZEWL5k1CEhwsTBg6qeQhZqaUnM5CmjqDbDpdiVkefztU89TodmH9so1Rx67fYaWNKo8bVcg8K",
  "key33": "5j7RDratzSaNKviSB717mrts5Enopdq6pcLLPJWLC8snrbK3UcnZSKBzND2LPP4gAF1t9Zecc2voeTgmtEmNwrBH",
  "key34": "2EeVm7vrMpNXLAtna1v6N1vWcDHj7T3vYgQ7GTT3mkzJV1CipTuM78UaQ8BihX37Ae4KzruZTTMcXiYCmRTFuJKo",
  "key35": "2zY6R1pAFHNu43e4uxSA9dHc8Zdk5s8vWP2mHdxGHJjw2gRKNYFxzFHLpA49U33W7NHGsmagi1itQwJqHBMbgdAN"
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
