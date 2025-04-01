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
    "mDfStUwS2zsjhn7yTJDux2iPpQhBmH8PRtCim9SeYrTqkxVvTbQtHztSgRnRCG3uev6VpCA1iyGsuThnwL7f4t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBZMHiptSE9kDmh3XadNoj8Jz3t4wD91L2QXZmcW7cGgvs8yC8jMbr5RyBkq5s7XTYmLtq3JMBauKEj3XT9huoW",
  "key1": "3KhwSHvRTPFMeMvD4tUDd7GH4AcPr2jb71NVt8Avy6e52cknE7pyYwmqn5tVyVPrdoFQnrAgBmDLPN1PtiSEmcYN",
  "key2": "3Cs4iPrdySHYniQ5PXp9aSJPKUBAk2Ytgb5EX61nDLnuBSBP2jW4VR6QbJP1yCBwTWcJunhHuFFSqXHQHrLccVWq",
  "key3": "qDYkTFP7oFDd1cSD4ABKHn9z3qmJRbnNXyHXDwfXuVMWAeS5SqNidAXSANoWu68H1PAnrXenaoiemRw4qQPBTUB",
  "key4": "5qcirGhrQ5FGXeLHJ8kmWoNZYN1vNhZyhmZPBQcN9XaphXkVvJSbLjzji22d1KG2kB3cTh31ujQ7AoDVKG57hL3L",
  "key5": "wgayzSnyoqU2BcaYV2SHsevJhLDF1J46sYz1RCApVieYBp8KUvUuf1GXutq7gSVhKtc2ZKRyAbQGpNPedfywZPi",
  "key6": "s7Mt7KmCPcp7JEbuBV67nAbL2xuQxEUPKw3FaVPivLRqPCd78a9GgeUHDCHngkDpCb4ytU4ogiKaBQJjPjfwSJN",
  "key7": "8GUfVsE3KotUHswp6nmhB8bPk1oChf4Bo7mgeedSbCYojxzVJctEAMzdC9z1M9aJZBHPELkj5oiK13ruxdaq3vP",
  "key8": "3Vp8zAj7cz7RqcLTvhJHvNMYE8d9myvzLGC9S3XPxgNAJbzhVSwjJGF4VvrrERWqnyyTX73ctZmYvsjLW8vjL1yq",
  "key9": "7WwYCdttRNMXiiGMqmDcMLL5rDfeE1LGSkM5AgxYKNK8LST8AFz2VA58VTLbZo3Rbe239N9LrCm35dKqpQLCzQN",
  "key10": "44Eopsm1m28NanY1mZQaXgwMnYymdTSQjXtjjM8YCAFPdsyGYEZzYA7M7jwCtqMy2LH7xYyotQRBsgVmEK4gtZN",
  "key11": "rrFKgW4xhKD2KzV22vrGJcnixbk8wTfsUFCXJXkx4uqtNp2UYMCo8FqXmJtesb6R6EWyfnfun9guo4HSSZgPiqE",
  "key12": "4x6TP4nWgRH8n4JLCW6bhsKZHnrnstwF7qzuhTwR7Xhi2DQ7BaxKs3aR19vzhc2nq2MnVxvC6roHoSoMFCtvUo77",
  "key13": "5DYaCzDsYoNHgnMoiE1oMnpdAZ8YbxXX62uft1NdmPgYB1xSbd7tU3i1wd2QVJokowSkQKZAti7vPoC1VNkEhkuE",
  "key14": "2crpbGdyr7VPbWBcTYxSmCm6uHoQdVnwmPxQ5nbXpQxA6vUiANKw6cY7UUiywWCSES7SssWXveu1Z8GT37ShCceo",
  "key15": "kZkjFxuD29Ru8dRd6wm1wrQSD5c63qdeFd7RYjfQurRbYAQGVR5TTNCwjt2VFosme26N4MMkCYxSCk3rULwj3sV",
  "key16": "bg3XJJrdQMN7Jp3UL75jSZH6CzeCiiibztVvsgnvbdMWhJK3f7f8xR39GsQsmdPZ65xagfxe5nhzdiEk6fNYKoy",
  "key17": "23cnbg9RGbvvdhdrzXMq76BLDiyXUMDDKsyMFhhMRkYXNgM2su49RewGhuSqvgEXMXNCuWvzbsXGby6xfMsCMSpU",
  "key18": "3LxXsRzrXDQJqM8pRLJzzuax4xXPhuXeSAUpJWv4Ri9yGmbNFGmQNpu7zVgXVqhcSmVvEGKaEuwmtnUeAcPGAMYJ",
  "key19": "3jXi1Ur8JtbUsSY5EWWyMqQYLBCKCKii2TdHmdoGPuhoUvV7NoyvrYRK5ysLy5bkSGBVVJ2r2pAXWJ9cTpLbPpoE",
  "key20": "4qT4W5T4wYrfVG9UxKWV6iTRWydjAoX7YsWyxkjoy9NakzJ8tDvjPZduFgR8Edqu9cCRfMUoshosuV1HhYmAaZ7A",
  "key21": "65VnjcDXB8VdPRj6pTj7iQ3dZ6tLNzaFuTWUZsQUR6hfXUeS1fEwYs6g2VqVpQTdN987LQJYDVqz9uKovwaPGBQx",
  "key22": "ykekkDsHywowAs2E2LC88yUzewBieNmgiMAQvm7YZTWq78mZ7wxDK833tjeivCPtmMN1URswq8ENbGZdidqDWXe",
  "key23": "5izMmKtjNNxdjauB9QePXvPkvyjqFdmWYdWbMZyzf7baeCbDHK1RigNxUJJoyVE9AfjJE8pCh3oU1geAHcnypp5c",
  "key24": "3A6oYz11Uw26eiGcTRJrQCLNB62SV69aARjJ7Dzu821GPkvVEhvXJBZZBmwWEY4BNt9mBLv5osruhasANy2ghTYH",
  "key25": "2CFGYEAnCZYmTvbcVTrkiwzgedp4FN16dq5SuYuvXMu3vgCK7dyeb1gDACqnSLuDUNNRjyiWrqj2hU4nxGq2Dora",
  "key26": "V96sdEAyVHuxutkT9QwZm6GJGnXsbqK4kMqHmJcdRzkfVrLb6uVYKSkHfwHR6iGW8ayYDNHa6TsDePuTzPX9vfz",
  "key27": "5qAR2WTJakyJRZtMxxCponVWV9z7BzKjtEKU8YBKp466cJELSPHpiHEajmwUJVL7xW17wK2c3BnGta4RK7v4Tz9S",
  "key28": "2WheHCwXLgYrC6BBRUhWRz1ysxamr2XUTee9b8bGE6BLuDMprpehXjatJejJpGSfiV8tJ7Y1AKQYuPUhEKa2sort",
  "key29": "YsqBbfStMUCdLo35tL9fB2WgHwiMZkRBnGvqYCJkGFZTwjp1JtijjToU1ENftqX4cE1dBuKK31k9c1xe5GbHnz5",
  "key30": "2FVdAVxihV5o9A14hwwt1UH6L8iEZAb5msVUckzFYM7dR3cUhxBk5h1A67jQJoCnEN9S3CtXi6c7KwEvBt9ym1yL",
  "key31": "4NnLq6DZZatCsfZiWLiqpxdj7V3JGpt3A1a9Ut7By6Hr6Fhe7Ji1AwGZRVRdFBQuMYfjLGC7F5fLGXLXpMv9ZJd2",
  "key32": "4CnfQaN2j9MyRwUis9FdiTv4nKRqDp9EYM2mFQP5zERMJr658VWs3VTq9nP6hchjDXN5Q4CFCCAYvhWfJBd1LD5G",
  "key33": "3yRfsoyC77QWHsGcpADWiCLT31H9yHFvWHXznGQQkHVS7TCQDo6hexnxGHtoo6U4zNNDnxxw1WBBP9yCHQrM2yNY",
  "key34": "3HMCfvMg1Zp4f7U619H9w5ckDj1ebspggdS32NeKxsj4XERQVLUzBfWo5S6g9P8z6EEXGeMrWRHGAF8yJ12GWR6M",
  "key35": "QrqakigK6UYZjrvyNgP8DSpoSEsEJotTPCkagvkQEQPvf71otTJ6wwAFmYsTqDtHfpsLUcDwdW2dtAoHR1Un5Tg",
  "key36": "3UXrBxYtdBKaxyXJipCR1PXwe6nXcNb4XjuCz7xakzbdKszoaRGStXJp5Yoi2BUQHd2s8B7wkpuBpEjB8xSpV5ob",
  "key37": "41FzG8oY6q2KAczNvWh8KdnHBt7US8Qbou42EKZhpW59P5hmaQPYir4xjreeKtm5otNKrKeH6hhrpSU6PgrcSGyb",
  "key38": "p1tArhQXX3cKC54rFGexNXmnZ4hmvrVsTqNsW2ByPnQmozaiiuZENGmqHB3NFYpgvHLpn8ZhLvQUqJ9ZwV2b97S",
  "key39": "3SeaZKuTzxzuY6xRVC8Y42EboxyKkP7zejep4EBjxCTNa4R4Xt57GBWwwLx3wM29hiB3U1MtPE1yGiJ3cnUiGZAb",
  "key40": "3cTrCcVLHnWyAWwzzUKUytzwPycmRH7jRGu7cHdxA8P3Wtqt6k97mSjY8r9cfAZBf6uAk72Gj6w86gxkw18LnoWH",
  "key41": "3B24obezGWMKdBDtymG39rTS3pBLcANffYB1fqdzibZvxj62saK49wLFY6mSYdtk5UrK3Gk38DV7iovTdj29gp1R",
  "key42": "2SeZtnzwbvvqZQ2oEMhkAjxhqeLNq6EbzMMe5ZKKue64y7mPgSc7T3fiASACprjwAx5wEAWeVd8jXkr5tUtDtEA1"
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
