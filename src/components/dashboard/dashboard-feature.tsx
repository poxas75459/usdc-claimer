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
    "msQ7LqWSRwmandwg2oQCK94b96D7Um1eD2sKQGSwihZrFrGS6Atgf2LZCCRwg6rt3mhkUCMfsLH583tSNC9jksh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVoLCD1azbfzxu7epnAt84ArFjzhahTsfeTaeQ5x6VYQq9hF4sDcHx4KjnikSsnk8MMxPWx6P9JgzQph7WQTVYD",
  "key1": "29wLUGmQB3mQcJSZrxWKDtt3eugQtXFyRhboRmzKFmqKJdWs57YW6Lti8aKYgDQXf4fYhVo77sKjG5nw35wx7b69",
  "key2": "pw2zLTh55WGz4HNmwzAk4keEHLwbt2jMRcYMJPNQaqaoriHeQDHmLtmfm1gZnY73wDQhaAZuu9R7o5NT3siYYBi",
  "key3": "4nra9kBe9Sq8iexRcKrntbhDQNr1aq2xv4SVFgo3GyTwQDK9PfyCQUPcciTxbN9sARR8KyNZVdmma871mmfwAxUP",
  "key4": "4goApnUJvqWNKXBegLvmyLmvp3G8ZF9ApMepVG3boUP5GeWUYn73pob3jPyDnM7k97aeT4xjnRiyE664YvcKFXg2",
  "key5": "25mf9NfgKd7rRyH7Cu4XMdhpWYT9ZXNxiKKfTUiCd9iigqJLjTRrvZpdegMHeuXxBZEkAfVHnoJBUHzmPLybY64g",
  "key6": "41aeGHrKTD5R1Dq7NVxELH6CspwwFPRQUpMxcY3q8i1fVHgXk9hGMZjtE9ynZ1JkyAvmL81oMmutpu5q9ffiCFFW",
  "key7": "tttEhgQE6jNSR5hS6aDXqTwcT2rEqwZx1t2g6vWUb9mTu7RMCcmdKv5NmAy9qVmH9Q61hg1J2JkLhYJxpiaqxBN",
  "key8": "2Lqupsgkqf5KCwZWWmowB8cYaSea4mpeY5qxDSryU5qvo4Gipwn95R4nytB4X93mhsMhNp6V4Aeruh9Vr3PRQkUb",
  "key9": "5A1u9SaUQ2z92GamXvcqX79H4uCqJMGaDUZbu1wLPYnNtjJshawrrcpneBnoq3aZdhHeRWf271aiMyrT7BZo5jWe",
  "key10": "3PxuFCSkPWapqSn7pNk1EVwYC1WcdRxDryuEW6JQgsQSqrGWQAqHWLjAqHEk4VVHKFFjzz5Nk9tTseekGGsaGy6d",
  "key11": "4ZbBB5Y4iq6T3hR7aYDDW4Jo6aHwfDsCoiupnFqPUJNK58PFm6UZRBaZuV7vuSTjoPhR1DGssCRsmczw8DgPR1ef",
  "key12": "5ywDKAKBgv1tEfMM1iB58vC661AmwBJ127Sux85krTC49Hv72kuXpNwFhjZGwPdw234kfZMq62oe7yzN3gSB3RCu",
  "key13": "3EeV2BiQ8nCbThQf58Vi91ackUfhomVuvnYYQg1n2f1vr5QSzbZVMDKzXqVzR9pHNAPrnpKN3KsS4rGeWt261siB",
  "key14": "VBP8WUcuTLHrU1nLmnUxorAu2x1kWpSAXoATkZPxj29DkGzbCNG3Qmk3ZDvu4QBuD55JyY2pfbL5GxziSLwkMKP",
  "key15": "xsgR86gtq3QpF9Jzseyi6RyDSJaKLLkVNtNgN9Zmfeu8V8rZM8PASuNYhwRs2kQWqFovd9cQc14iPrpsASDBcSj",
  "key16": "5SqKedR1w1KPh8xTtYohAWBUhzE2tDme8JCpTuRQmwsnWhXPiFPwukptcRCVZX75JmWKnpD7FrKEkcAC79dt737r",
  "key17": "5rhXD5EN9XcTff1KsQgZU4g8wAiKEEtMJ1hdJpdNrCv1Cycr65yfToafCtaPmKkjDpHE24miB3UoFodSiXGGrgUK",
  "key18": "5oM6zDz4vLPL7KtBu4ZNbhYXCy8azETpysgo7ckYoH14Cad7G3pzHjtU7gDSKMTfwyggjRc36NkZPftP2eEkfFgD",
  "key19": "3qEXyXdh4VZPBqZeo6EFfc9PfghjeMFHK9XzbDbCqVMypdJfqGXZ1LNEM5mxH5DaTV9ohRgiWxkRpSWEC54yjyT7",
  "key20": "d1SjC2LVDgDRG2cU3vPCH6SSQcyCyfxpiVYdePFJvhh44ddQPbQQnf6TM7dGNGbntpBdiaWbiPnJ5atyC9cwufb",
  "key21": "5qFkaykZkaCep5kHewYg3izFYVvcjKc5f3GQ71n842kAhakHi1wvASHAbqk6PXPZdrTF7C8GMr7zAGJM7NKkhdTc",
  "key22": "5c47kQ3byXhhwKB7GRTCyfeBq3LcxDXP5H6x3UWYrt7K11DMxxuziV75pnGuVeBzbHS3YuQTaZM4birTB3tAtnER",
  "key23": "4yqxpGDdf19RHYjrvadQGaUqL9MSFBeYggbTBbXFwZawq5PSqo6KdsUsEdopGdNHE1p6VP2Ph1SF8z6hyZGFRgSg",
  "key24": "h7FBmxasf3RN9nzQ4MhNowNa9ohTouY9kEM9aSuJxrJLLv9ih9V2Hda2pQbBH7BYKrq2b212bcdwEsejhC8RHqc",
  "key25": "2hpYgjh5LSKtEResvGy5osCeayKaP2toJh9n6LgHbcKmgXdjYiMRVcvHgES4B6e498p9H29vxiUwXsyr3vH1U4Qj",
  "key26": "247mu8LJBkCHK8fg6eombXMPYe3UoFTVXeGJsuBQ3sQeCAZts5i88g4cq1BdCaJdiDWm9pbr94gzwE1YChF6QFyU",
  "key27": "3YwdQFTtDK2n7ghKnHNJkR2E911bpQ7Ayrr6HuZBjuWUHiDKuXxo3nwhUj8uo6Fu2y8KazPm8EFsFFeLsxM2pikJ",
  "key28": "4Lst397ST9EYC3yuPppY4kRhqMixvQjsobMpyYBEagMRxLXP4QuCSAxNSx2jVMWWvamK2gAMsfes4TQN9B9nW8R7",
  "key29": "5HxHxbSQXPURRpcS3RGGUBLPWeZcooJVwZs1bN5Cw1VbLdykwyDP1aVQ7mVw8RS7rsX2oFy4778Gy4kz7pi94QWE",
  "key30": "2ysupeRCAS7jYfVzfYykkTyXPx355UqkY56rNa58nkfXfoW8C1ETuKFisKhGFnpkqvnvR5ZoUGfSSHtyxDTVDWwU",
  "key31": "ProarUUEA8KV1KsFMgzNgTqz3PjBWN1UqGV5JZLwL51ZWRyPBMemQx26PqqNUAute7azqCw4qXVAiXyga3gZwyT",
  "key32": "4UbeLXbU4BisZmuFHhUD3uZ1urAcwiuwukoC1bCP2dpeChUdpoT2dMZvhDwqJDCy6QW43KvXFes4iuJCZc6DgYw7",
  "key33": "4aRdEuvoZ8FzdBRhDpc61PUEdSAr3MNrFxEpL6BCDdWigGGXuEbomL4Pt5LZfxqRe6TceyQy8mbaGdr9EorukqmC",
  "key34": "64yVuiLoSqJAWvtDPL6LGBVWG8qfJiXdMk7GVi5udYdss8w9isUCvoThqTFBjxEBNFXpnp6ixHnLEQhCdKRt8Zmv"
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
