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
    "3h9EzEaAHQJqdXXwYmweGcSeWTfYdFt94TBLRMAHUGyryZJbrF4PGZyAfjZwddb56wnsGAJCk3Kmd6tLN5HHz6FC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rK5uBegNWiJfXifggrowvKjH8aJdsRPY6yQu5aSZPMgTW8HuYXHodEw4foainowiXqmsWycC3v1CFdSLy6uUmv2",
  "key1": "EYsnykJFo57TuZyfS5WZ66RvSLiSjWQTp1rxfJpM1DGEBQ1zYoJGU3e7GaZZpgmTUkEs27N3n6hVA2jyE1rHRuY",
  "key2": "2Sia823LD39L6ChVwVeLHxxM5r3mC5HNpDJxFFxxk889DPy88GwzsjfhFeayzFppAfA6WndVsvcu8NVc6zK6666L",
  "key3": "4iSs5xXnDS4dukpUk7dfuEE8e4PcbP1RyS4UWhxadfL1qCy6UNabZ9ygSScYYYh1VnavU7jMXbrPYL6B3r4g7Rue",
  "key4": "3Syhd6AqqgQYfzEFhz4dRtEwQqQWD37sBkWmWtMvAmAQkwFs5FgwC1iMKgcB8yf245xyMNHesP2eRHVnLojfmqjK",
  "key5": "2CLppKokbNdsfR4ht8csajFzHAzYhJY1h7eQMdMFUi2UU1vQhJTMXcVYzjxWXsi89pVgkJjLqwYej8Pi71rT7qma",
  "key6": "5C5xYhAuZCeyHj5c4fNS8G4DCn2GVjzSChsQcaebgh9vHRzypKDFXMbAKE1bwoGu7f8WLJZVPDELzMG5W82Z6emG",
  "key7": "YHHBrK5tk79A3VZ4c9XojGdUqxZ756SgNRvu8CPsrp7L1HJ9jEXBpp1mvSEtwEo7TfF55nnN1Tqm5GED8wnFPCW",
  "key8": "5cg7LrPW1yQ4egpdyaqHZMxuEU8aevih7MbNGULTmE4mxbCpAjc78MZo1oezWQ8JVnazeHUda66uFgazDd3Rg3wc",
  "key9": "5H9978bnXkvK1NjNpLuV962He5fvNGSJPPHpCw5RkLacfLZH8CQ4W7rdEfNBCMB3Gw8eYs1isBxfngS8R9egMJcV",
  "key10": "5ZWoLHZZusK6yMFgHxLejHGYoeqNcJAQFpdMvmMCRVTv4NyaYnp8x9KTX2rzni7exXPHV19Myqp4HFLhiYi5fR57",
  "key11": "5cTotZEkLiU7Ut9HfJgVaTwS2GMk5XxTZJiV167Mnxvuom72gmjY1LkCX4mnpp7NWm5GT8TkFdawRc5PWfdsdAde",
  "key12": "43vMpogGkPMjmG1N8weBcX8EVWL13svyjSZSxuAB7xiKwqCdf2BBzMoB552hZQ4d6jQ1cH2kD17XSQLcD5CCRjCe",
  "key13": "jy167v8j9F2gbscSfqtkrxJVdAMDEPyagMZUrBBsoP3zA8YyR1YEf3oKq3nNZgR7Q3g21YskikKYXxP2jBX9ddo",
  "key14": "5ArX5f3oDyPt9c4ubGTkzZZAbwjsSeZbGKkqMafpjgVyifezvjuVr4TWyfek4oAySdLSRHnuZMRxUpHxedv6ZtXA",
  "key15": "mtMH1chZrhNmmiKH5BwWdh1znxziQuFPXMQezSihS3yCs1jhD5i1u7Eun7iSSLwXteB7eVLK2WCx9QzmALjR3WV",
  "key16": "3GK42dxNzMQuX4SE6WbNixqPrGy9s6wLgtcwEYMFRS2vDi1J4kCfeoAgCGN99ZhnMXgN9iEdyzCsaZwsXWDpWZ3Y",
  "key17": "2v4h4Foc6kfDmi37Ea2ozGCpMn5bWFudRDFW68hfoiBkeqnLbAkpfWA1S9cDt69wxXDWqKrJubLvpp8Ky6N7yLkB",
  "key18": "2ZHHyiEbEpxoFbERr7YnVCwvvLLRZJV4rxqbbL75qirBs1ysmhSUNvkSrrEhs1QKHNv91xWWo5PSEEQ4DJG9adLa",
  "key19": "3gLpqCb3oVLzsn4JooyqHuZgZCq2nTQ7YaAQ8i9E5chfzSMjjNGbcyEPn9RTGvQezP26X9LCXvefvkytUYredgjz",
  "key20": "5FZHhWM8GxohPHrWVzrts3sSf4FUmAtV88zPFbgMzhX5DYGm8RyAXX97jg9Eh3GDT97Y3HPgSRmwdHPgaw9XgMET",
  "key21": "iu2PDuqTvn1ptvDUwEHNHns3Rp76wBxSt6k63fqGnKqpfRT2t9HJ8ToeBBYi4RHgH7x4LsxzhybP4K2PuTEzDGP",
  "key22": "h4BxErXH8rT9adpBtQcu6YU8GNdVmNgWqAj3iChf7YTiRjsgTcAiKz4cTxsWtntJbmr17BVHpjeBvUCMZAcHX1t",
  "key23": "42bjCxXH1aCN8Tvm6ECBnJJvQw7ZQH2zERDC6LAzKbJrX9sHj1px4wGuNvsqNLm5qLyZVL778VVZbNxHxWnkj33B",
  "key24": "etMSB275vuFMwJ9gXnGcgYZCa2nZDf6hetFU2M8XtqaTN7G93SJqT1rjzaW8gCS2ap3WJnmTwJoE1YJe5aqJWqW",
  "key25": "4myDkUHpEVnXqtwKqoDmKX2Z1NgBd2DZdo9ZhQ6ayin9dBEkN3Pf8YKwtJis31W4CVvzTjDRpkmYiNLoiAQfYttc",
  "key26": "2A59PQGf34vgQ3bjgMwZ4T9TLbxUfzBS5dXW2qTYvHs6UScXt2Jbidk1e8J24Y4res5NpPrKyrgCjoDVdb5xxaGU",
  "key27": "tByFXHrs8XhJevZmXoQKE6n8HFzzJRURMnX8dj9Km3meKCmvpCtbBtzpkjGwEaCZmRmzGgr16AxpQt2hNc3T5nN",
  "key28": "UHX6vGLViTkJeVkaun3UCPBYpCchESoooGipjSn3BDwfQcQTCkyf3ZkYrFYHrFUHVcpZMVAfL4eoBcWfF5HtASv",
  "key29": "2SVPRAjbcBkhwTvrc4JWcwQCR15Df1NKhVpTNpL7cQoUN8LFTNDD2Betr4uGVHh1N9nac4mF1CtjxBTCUgLyMwhh",
  "key30": "ze9ivvqEJCqW54AjUdiRCCBDhDf7GQhe1tdL2CpNA1EoyPToWEdjZENft7PVkZyzX6A9imr2ZTKYTQE9cHcbvBz",
  "key31": "3VZMq8CrHcPa3o4vi25E1iVZvZMSS3nQ8W85jLPhzuZYJiWwRHiSeCg4TD8eLVWqqtAasWkGWtvZthhHqsDxdR4f",
  "key32": "5bkzDp3yLfwfbzndyYikxaVkqAQVjnEWm66CBK99KdScSskbpDqqKDJxKBaK9MNsGcvfk47ADqU9C3epxGRqoybj"
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
