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
    "5aNEVNsEHMUEjJHFR1SjHBUESuGQQwZUMmebMsz2JZUjJMNC1AYWiRPER8yPDFWnhnYYF4UjAqvpBQKSB2GQ54fY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMP1XVKiCkEkyJmP9pKaNRgrH2rEQggQB9GKcFF6qLoLZz8GC9Ag4ibPxdnd3tgcna87EACAm7VKkYAmgs8AP1x",
  "key1": "5kHAwAo5FJgdiFGngWhdQzxRBUfFZ8xKC3YW9EH4zh9CTA7DFyUbtxCPwrgY93thihNWMS5KoDQRSjWtJ31WUycv",
  "key2": "58VVjDkTBHmVpmaRykyvBRw8z5efV3vwwujQb6iy1WHiunzH3yHDc31GnfCtDzq5PsbehA1umDE7XVCnakzfWvHR",
  "key3": "3s7PpDPTT7tfabV3ysAHudDkHGBsYcKkbT4zMSmxZpTaF7eB9hQeP4KG6T2PKqFZzTSLFif4GJvjsb2q7BtHkpax",
  "key4": "3iAEK7WD7TLpUYDMTFH7t9jU4SoTkSrdQtCtFx5Ex557VhfDHp76bqvcVY1UaWpzZ2r93qk4DPSrVj2Ug1rNPKtU",
  "key5": "5k1QAN9p55JBrqjn3uLV27Y8inMvD7XdVNzQ8s71Mw8gUzHPCdTVy5CkiEqZyNP516E39pDFGZugweVJ6M3SMSfa",
  "key6": "rN7t9WhWKfcKrKUHvKMJetkaFEKqZKunA3jUH42bc1QWjPmWP2JwRT85HFtqdb1sbXatsVZz7PpWRmkTQwbB2PC",
  "key7": "2iyWpLYdNDiSDcSWYWaM2SfG9o1984Hku8FNTuuhKETSyFnb3xaPbemiNB7PJ8iaX9RvzgKeX7HUi3mA6ngcLmWz",
  "key8": "44C6qLrci88DePpw3bo52s5SSNasStupbgkS6GuFGTofKaDikSLdpwEjNDoZJT4A9aiANBR3VoLARH8nLNmjFjby",
  "key9": "2fVrL5yaMPujV4AgE1x6tEaktYHALNTRJh4yXgYg2VjxhnvQDZBbRdesTYTxxbj981ATDG9cWMdisVPKthHKBJyE",
  "key10": "2weG3J291GLATNfdwr1rWaWn7HPtaEwH2uPHqTw8fuMoC2fojhFgUGNi6c2RVh28XeJd9rrTaco3akhQxByf8JjQ",
  "key11": "5LuZDDRVLk9Y6d2Uw1qXPwz2opUPA9mFDBrM4ZRcr8xWnjA954QvScREqU9kLAGRVweqRhDF9nB2qoEWvd3eL1iJ",
  "key12": "2GiZYZae6zT7EtkD7DcnL35re193N3NXqzcpLkuTHXzH3FuvnJMSpxKdDXwd3A6tZuK9L2nwZYMWKSj2aVqVRhFZ",
  "key13": "55Fvigixz1iDFzBRpW1A74JCtaRcoQv1aWVowo36JU37YeTakxKC4U1pvCkST5z6sKsfVP1ntgjRkKTHwn688hEq",
  "key14": "4NUZQHnwahrLGznijRHboY4f5jFBKQnAbqiNy8z4wJJ78ZnVczM2q8xJe35cet1kTSya2qum4EEhfQo5t82Y7uyZ",
  "key15": "389RTn8KryUvpM5YQXdDr3bRBiPGW5MoiSwXeEqrrqh3sBZLZSzk5gojvNbvnEzhsBr6fnduQaPJ6PZhJdFnkhMx",
  "key16": "vd7orsf15xwX42DdMyiWSKsYvpfoqENKf6m1my8Z9ur8jG3mpZSSrp9zu32RSh49Wi3BdnEJFd1FekHNKm6fZBB",
  "key17": "4BLMz5eWsNXULG7E17HbiqcpzamRBymee7Fk5kCgz8DpKSEP3QGxm6pgQzXCa89pqALQN4JUGEjjfsbL1cEpP9pZ",
  "key18": "2hoKjrkBchvGgex4sCLjcgiMwTSPriYccYLFGF7SzRekTLMbZpAwiuQPXfXQVv1464KMU44uVhpwatFcb8YxLPc2",
  "key19": "258jWWjw6YAsmYYreudU4eJ2R47ptznzi41p2QY9BNZL74q6Z1oCsimiYcHfLJd69Seu3bmo6ABGJQ3DRKixhzVw",
  "key20": "3QC1t2wMQLs9GJuG4XBQAHWmKziN1GoW7jsdc93n9t8DzfGEKKWU5aWCQbk1w8xdH2b2SAb4Wq31EcjGZ6QW2Fou",
  "key21": "2VwipqKto9K63fKcJyuWRGGmAtjb5JPwwH3ELi4m42z3UWQRHsR3ph3SAhmpmT8o1x2rbDRdL4Mk9MnRhQHazeRk",
  "key22": "rMUpvME95CBTYQawitBR1Z8QFyqQB73diTg3tk5a6gZGUh8QTNeaBfyX7YHoStXx5fHiq7k9etafz2Z5dZ1D5Xi",
  "key23": "ditai65gYTSPgRYqpkAGCiwbBSwA2qN31PKp5otYkUnCBY6sTFELRTfapBpueTLCorUt1ReQbrKBL9ynHYFA7BT",
  "key24": "3hN444paTT2PwTSHxuUUd42379f9vL7LR2VrtujbuNjDgBnWXtDU41FWkEQPKMRX3CkdYtxsjTHpZCvesbWZEfR8",
  "key25": "51byvFXExL3nHvkzrUTcHsZDSapJKGB6R7uxsBEW8LDXaW6UsvjxByH1PmDrSD5rMh7WFow1G7d9eXtSdyzt3C91",
  "key26": "pZw7CFCVMcfxSrV3rSrycWsdbhWP4kg5tPrjGkdvycSUUGYommPKmxrqDHDU234mJpdJkc2jmFh9yxmPnDHCYJP",
  "key27": "5cjcJNwZZXKvbpt4XngcKR4gu1j9oHDRTM9eqMFm81sNoPXXadP92fh1zjLMyYNHQhxdg8ffUdp4N5HPUccbXTr9",
  "key28": "4bvJVFZ8mCtCE88zSUwg2WKWRnfabJbNrnZ1QV9zsQh6L4Av2oGow93DvSXN1K2xGPqhip8nzEirApq98RL9JQWG",
  "key29": "4Mba7tJ9BxKb2ysUFgSrnZAu2TYqGZFQtRV8TdHhHJqzXr1bV8Lt9EJgo3cbDmsXDTRFtjTopcfbi5uVKcNhTbSU",
  "key30": "4as7yzcNmbok6NMudD3UzePiyYyyGq72b1wyER7Z6i2HEoJhswBR8K46rgXXAKn5mhr62EGem7Ln4Tw9RfPXPKeN",
  "key31": "4H1v1bCZ9Xm4XhfbzfzNYnpiXAxzH8b26CDmWath8MccAhLn51ufjGPDFnu9guyCL1nqt7RNzTHFaehjqbAUVMUK",
  "key32": "4xxUKLRCvm5Jr57kthKZbNCmy6TbxGrxxQ99Jpyq1YiMuFGMJ2RhFA34AWQSytzxWS4JJ8qdkWdPRSpDrLGaSZKS",
  "key33": "3BfnxfNkri9TSJLQPL2cwahE44zApSHCS7468dpAHuj9t8ys9ZvyB3qWF2hf5FiAeT4LfXAenwmhnZN5iDdkKurC",
  "key34": "3NLAerExVfLbo6Jvx42frnGDGeMRpC7dyJUedrK8KcvbSnWsbdzt6kZkyAv17MYszT6ZAKZRDfYG6rXEeweqoy7w",
  "key35": "54Re3edJ3daFPxgiptZKfThWyQVxp3eo7Ph7qvgj9CkGdDG4iza358gdq5ZiqKUNafGA55Xm5QiTPA4K2o8AZfxc"
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
