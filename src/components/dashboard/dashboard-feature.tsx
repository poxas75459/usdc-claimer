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
    "2xxR6Cv1hYqATLmFAATwqtssTFrV2MPSxo7bgrF4VX9o84dJMEcZ96XfMNiBiVg39ZD6Bfgr71DZa2gYKkuucwvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58B9qn6FBvS8p4wXnwuY1aYTwaeMRSDfZEesR8KVMJo8eWHwDVHRfRQwTvv1Yf5FPY65C5ffvtA8nnHVKvcA4rbL",
  "key1": "4mMsXy5x5rneQq73dWXf1WB9B3fpK4s3fcyctLDuoVLv4AVbXhu8Zjr85aeFqdoGUXFrmPQfw68M4AMVcEFvXH8n",
  "key2": "3JgNa9fbdq8aUk9QkGBeNTKEp9w1YL7hotSfeaFiM3iC9JV9C142qYioZKrx2qLHJiEehQ1TryUu6neEsB7YJxuj",
  "key3": "3M77Ue2iEHgW8ZFsuyU5n58SVsiupckxKJS2St84z5gQ8qa535MM8Dtc1G9uEBtkXft6km5vB7DZ4TcKhvFnjdEB",
  "key4": "5iQ2NXqf8SRB7BdoKdsXw14jFuptGbapashEZrZNeDjiqoEBMhFHMfkjCQWqY7KeuBmAZ8QF8NzuMBPn5D1AzVJy",
  "key5": "5uXBqkFzYQLj3zo6jYKZkCdnAWUv8Qq9yaGsohNueo2vqewsRXwQ4MfMdpmHWJQxgf59aL5rTDDv9e5pFt8EedSv",
  "key6": "37Ks1t7WN9YXY6ATkN5eu6JW36nC5CR4Pa1n26svQowAEPEXmQJ8suCxXsiNwT3SKEjiGbksLJsTBYi1Q8NYnViW",
  "key7": "4VVEas3qAY4JsmX2ZqowTtR4dJ3sFizZvCB1gFMem2BK6A2QGwE6FdBgKQfZ4UisX2ck9LwL8rCrh4V3ANhDTV68",
  "key8": "519pwis21PguuFpkY1XtuZghUQtoUjkafJ5DJ76sGnw56gJFa9J6Y3EWTQLP5CnE7EmYFAPazy6R1WJruawEdjhM",
  "key9": "2BQBnembTKZajXwSBskJnT3fSSP1SRLpuZ8pWeYEHpcxQcFnrFsUeMKsNK5fwAS2hqVgQnnT2R4pKRD2vY27YPQp",
  "key10": "sJX18tLjtsy1br1zYwXehXg4FR3oQimbhQjxrNCJUPYuEEHwBhrUbe7t6xZJdeARre9HaKXepT8HiXaVRNQocYn",
  "key11": "3fS8LnFVQbn5g2ixHH2JWfskCXZKipau32bpvwsPghe6afNdr3VcDEr9BBirghMZnvpiyi3cxziXSSitvDW4JLDL",
  "key12": "4EQ1rKEmfpumvWrHSfw4J9hSzdTofngqhDFAaBKGentmzBv91gGcA8984cbW23QXcYA6RLyE3nX5d2r96c97y7cw",
  "key13": "3m9176AhR4CTvpgiTxDdtyCfEX6RsKuE23mXFaHvcR1Hg44A5AzCud5SEDvgibRJDcHbePXgp222rZoqHe5p2z7q",
  "key14": "5QpRGRYaEGCMZ7hJ3YLev8iLGHfF6Em9MAazNWujf99mmtSMwrqmfw8ZihxjTdewM89vm1YoyE1XFVRB9DwNSzki",
  "key15": "2jftcAP4Stm7V3oERTb4d5rHduN8Bx3Sjvd9kZFiT7CSNSwYVjtN2u6W2eAeyL9gqBHfRdc963AudDEnrYKvr9SJ",
  "key16": "nRLQQpdXEufN22sNsqP4bUbi4rJXAyVMcA9usMrozTf9ALWduryDM3CaGhjsuYC7JPrmsJUjHpmdk7WjJT6uNEh",
  "key17": "2ZQuDeH61DFyJrFfNMgT24T5L8kKraKcNyn9eCdHu5sZGAuE7dnSoacUXdoG8Xaf6gVBazmneA1spBvTH82bXM7A",
  "key18": "5MyLYhKTqpzrjnW5eYu2fqrD3hjVt44CHFKHUKvU6bUJVZtSXK6xcJZQPdmQ4Bg2gWw8szkm6NVu63K1r7ULr55Q",
  "key19": "3bdZ8Gw86JPiVSRfnDvkpAuc3g1CjGQbqzHvbfa7bf3HxCXoxmpCAuNkqNLdvzYYUMYEArgEH3G8HQEcAoiH25AD",
  "key20": "4bdNvMR2d5VsRZTYQ7gtscPeUkpMoChj7ztcyzk7hMB2fZPHfUZBiN5WPJfmNBVX5R4QtFCXpUVjem5WtF8dDcvL",
  "key21": "VKkbBg6jtthZQbpDrGrTZYvPxT7wbeMiwTqvD51C77WLVDMJhEjgAcbgiLE4TQUEbhu357jr4FNHKSYjVs8Zk7d",
  "key22": "3cB4x29ZuqbVbetS7LrJiiczQ97wqYPDuEkQE7qLqiBNBc5y59rPLEPiWqnFFhEw2LCUwhDKGhY6UKzbPU31Aijt",
  "key23": "2ef4CwAZc9Di5f4ZFkDnEFkMk9XvAyn7X7aUoiQeCNxURkAiwmDHv8c9NqPjT62Yz75uXrvrpMMgrw16ZdRpry2A",
  "key24": "2rkjs494zH7xWj46pdo8CdrnVFEXXFwqtj7HWA7wqWQgP2k7VJkA39GkHTchegmp9AsFs1ExnvTJx5LjUSHQjdU1",
  "key25": "26UKqjxy7Ax4EEGY6u6KUJVKNVDuAs7XySWrQDbeyzTtck9ifrEywybWZpC7nzntuK14aR1NaxwZpgy1CgsqDCas",
  "key26": "3Wv9RisHbmLLT8f5tNWnpYwFhLcX7JcGuix3LJdhS7vyB3sf4oT2DJSJ2aTdSAVa8LXZMhfBJfxqKxAB2u9EQFmC",
  "key27": "4kGo1L3hAwdDWJ1P7fG2ZsGiTVywiG8gN3pXWVxc7a6ahbjNPy3PE9RrcNncdtJUbVbBMjWTqdd8mLdp2nc3a5jk",
  "key28": "3wcP8cVNMGgn36ZMomV8JY97jznBN9AV2DrJPeB3BjkAJ2EPYZRUbTaKnH9J2s3gijdRZn6rRY5VSLJQTysvxFC1",
  "key29": "5YUY4pwFKvE1pdEwbrPSFNAcYytQGAbdNXrxkjeFaHKJnJTh8ceSt79YB5CQHAtmfobXQWoLYPESDtrCDMk8divd",
  "key30": "4RaapSAQ5gnkcK5csMRtb1rtmPPzLAnMc2DhEqp9yC9HBNnnUwKqYNdhnTwDWXhVyXGYBDGjF1ZSdcPV2XDvnw4i",
  "key31": "29wys828Br26Y8oapWoA8D2ddRbwjcivDRq42btFcfFQspADY2bkyGaniNbNp72XJEykBdRu6V15kNCKzSZ7kosf",
  "key32": "3Nsgz9j4bA8SRmmAm7TnXzC1avwyNWZADHFjPJsqGJjLkDG6QTXyeNKYuRxjPFC2juRYYxUtrEE2wqbKijaZzXdE",
  "key33": "5Gq2ea3g6GNuEuzCDbCN9gFoaA5mAyPoUqFsX5SczgvsoManF3fVRUsHzwYHUmL3kBbXYzmTCbwijbeA8qJ3iVjH",
  "key34": "5cCziy8PungVBdKgeyp1JzjpVUqkF4qmL2b5jqUQryaYyCcmKTWJAeFyCc6eYeDpgAKTpkYJ7B83DCAuTwbhsfiK",
  "key35": "5m4xVevrfRcPnZpHpbanBPBD9znLJPM7AKET2ytVwHvHHHx3tASFvkVPL4JcFNUGS5gs3ncPGX5FBT5zwNNhsLsn",
  "key36": "3oCV3hzanGBkuPcjB3QmcXvDsUzKCTL6kdL6X7a5cSzSdj7T7X3sdBfq7YumwouijXfTi2jZZzXyaM5R7JYdnM5z",
  "key37": "omME6kBTD4cFeQYAjaUC1VUarbQPCHmc12dN5xegGo5mXWQ3RHyNGe7uoYAm2bgfkpMwdYcDhWpLdubckfEXsU6",
  "key38": "5vq8nhub9Rh1LvVmAzu1VY3p7xgQ1RuwmYX6PDinyJi53EDripij8rDT4ZXMHfobzJ9LqafEvQ89f2TuyZFgWTrn",
  "key39": "3pD6iAaJuBHMqzUNufzCPk26tTZjG462JC9QdRMdnXjVMB5vsFkY1q3wUueuoUiEnxpktEVifN3LgHi32icyU7gB",
  "key40": "3Lk6wojfo7XRQqzntCSBRGuLCG4zbMYTwxyKYxxcD9nNs1m4kViFpoUrhF8b8GCN3QgMqa7ec5U3wQ2CCniDhCie",
  "key41": "5neSDriq3bjYbMdkE54F5uePMPdb8NkuWzErQZcS4x5m4BWtvnKwV2Qb5joMGcrMmYLgn5HmDRJ9dSWASLeMhhsX",
  "key42": "5FfqGL4zE2hzB7KbMN3vYe3xUPrBi27yjFU7upgZXtjn2mw3imSedQMfFdcAqsuH2wdqkyG1VBPQ9824hvGTU418",
  "key43": "ZJMJ14ePLteJt7NaoWVZuaDB4Sq7dvYhrwnmL7VXy6ZTFF5AZXAJ8QZ7DqVhqXcP6VMcuzDtSyjTVcBXPBoiPUH",
  "key44": "4pA6Nqf7t8qUnaHuNfjivPFXHGJjB52gzzugBssQbCP36ta3KW2b9dTZwmHMX1QD5mCtq6NXdoiL7MjrgJaqbYMm",
  "key45": "6fmr5Ym31n1nyZRrxLszZn2YAdbauYS1Ro8WFp1tBBPanqZYgzS91Buxfptnbk3Fr79gBvH83a3HwZc9GXqRFL2",
  "key46": "2qHaw66BHjAX2bnDqMRyk79pv27qDLy4UKBqvBNFcRhwi5cCFgo1dj4u8MKfDnYfsRzhM6avSKHznqoDH2U6Nh8m"
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
