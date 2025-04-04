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
    "4qFE1nTQ7e6J4WsY7LtoAoAb1sryFwdfE8dhjJFSQqxPQQdK3MNedNJG9XW9ohQHa13vhM3yNdGsEc5Ufhw7xP1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqAmP2YstRLSsvkhsQs3JRcnTTG5Hnu1GHBtS5DTKLUjQgJr18vB4bRnqkfYSk4hrZqbCafpkA5Wh5d5ftXA7ms",
  "key1": "3UBYcNd9529zUCRoEWMVZbPk4Le691vgsrw4MwkYDVhLjnMUAJ6QdzPQk3ypTsuEC2nypV2RdpfK7BkLM2XWXzxa",
  "key2": "Zrs4wpfMS5qL1tMe1mFoxFMgeRkZ9mfHFt9YHZmvaGBkALThCSJ732Yua4cDD2QMXMFbfXuBMX2uJVoem4NSr8E",
  "key3": "5uBeHFEySyjxP5cNC2xXykoMd44Wd5HYsYKaE5joKmokSqQDKoeSvYN5x1uGe8hnSHcFyeB31Pke4Wq3KTN4TeyS",
  "key4": "sqV7Y3QYpkbeYWwUshHmpRQ8oVc1zoyvxBEMzeCfhnxzmbdA8qmSKCYugJS4TYphSMvwcU7iyqunSM3B11kZkxe",
  "key5": "21sD9dP9zMMi8xPjx7YBqufPvEVz4GtEoTXWPeSpT9fj8w8599yYnejgUAWJHiZvXA5fo7mLpAiXtrdGR3LgwPcZ",
  "key6": "XeS8y2MuHTwBtGuzQRes5RoPaQBpga7veXDaADzyeeTTLN83Q2Hy1RuBt1VGpYV9RGUeTU3N6MbYpZm9rFUGXXX",
  "key7": "3hu3WkYLgQmRWfHUistivUfq8wrbftxRgQqpnobfeLaRJUdYFjL1ntznVqpWZMFV7t8UxZFxSjeSZp7WDVmS9DNZ",
  "key8": "gGmHf5ZpGPCVCN1RxNe6qicMEunG5PJHHPc564dxxWi1bp7BnktxiSr2tX5xH8GPZpZ6NFBUg6F3uJWqHwg8fFK",
  "key9": "5szvAz5mVULuh47CwzLs172rYneEFMo9ch5LhiFG3YW1dUpTecmUdVWqxSnnvSoFAkWeQrUhGgLmG9REfYk9yqWi",
  "key10": "Aoi5L5maFtXmxxVDJdnVyBuHXzb6ZyCTouXQ4ByAazzH1mznJCzaJjSBDqvthXKCm1dytU6sq7WnnMC6MX5p25X",
  "key11": "23SoCeKjERXDtjT1m96oMMimfKwcuWmoFEtM3ihLhcMaLLkiURRHJ4e5hXem3gwoBEwPXKQoK1CdVinc8jnGXsir",
  "key12": "5Hwjc3AnnzPkPtdBEESw3bcNFDbCtC34PSoxUvzDPEyfZucjTqr7x1yDG3yibJYZyLHiwr3yuCan9vbTmeHBxBTA",
  "key13": "4MNDowFXZfFjajua9ZA35FhKKPrXdv1hjHSDoNfmNosStwyZEpGgB5LEHcZHXwRUBDoy23VFqSVxvn9mWpkCmoFC",
  "key14": "35ZrB1ptZ5UVe4fEqmSMHR4QXEDLqLifb5dtw1dSQnyWdKVFHkHZQdVWsHbB4dLtoE8bZGwnkEDYB6NQHHEhAzUX",
  "key15": "Pkzzz4HC4VYU95CyhK7dPexFShPPWU5VxukUpPiu9gYbwmY9GENsACeswFuLt82963EqyKiwZjx2q5bpGfkW4NP",
  "key16": "4HNXqYN36BccuNZZKBRmebC3q4FuuRmKZMDH6eiZfKnxPEsq9o1zCBknFMVeCfYzRU8d9QEtqGzBEATNdw2crbAu",
  "key17": "3CHNLMoPSuhdqnZairFeWxdoPKmZPrbSon36fg86wGLmk8Ad4MsAvzjbgks2d2K2K8oVYewEC4axD8rsWFxBNGco",
  "key18": "5p9NbwLM5PpjrdrUsXnE5C2cdUNG8yVhY5SRnXRrwiGgL8npdtTUakttk7LzH7xgEQfJfnfRGT9BK31g1YYzDdu6",
  "key19": "524uUVFrBhFYYuHM3gr8eS7jYw6eM8fYeF2ndiWRxUgHV19EgzLSCToXXFLktwYK9hAdBNtmg87Nao46Genepyez",
  "key20": "3tndoK7pQBD9xyX3xhfRaQDjRqwXQg9evkCvVf6om15MwK7FpAYcjxwKuhLZArBmuYXPo6FoVywjbqkA6d1hb7LP",
  "key21": "29umK3HnL2bKdhgSBN6DXMZWXtbXoWSAVsvfGesEhRenUVj1pVQb7VwguBefMDR4FmeG3RXxHnCh3jWhVSYv5mit",
  "key22": "4b3zzkxkym9z4ajV9JoFmZcfKhoWD7SM62pCSUyZFPbKFCyF4g1y1StRdxiGWZWFNmWZuEZZ8jhVaEX5yTkt76zS",
  "key23": "3WWKoLhrJXvR9yKCjsQH4u6mCQqQxRMqwDG1P8gxCt9QFwT4d8vEYwLo2tS7M8ZnvR78n2TJnVgayMnkc62g9wgw",
  "key24": "28L2bA1iSofrW48fHVSd2hmFYDVFE4DuAZc9Z7EGmXRdURsTyTkLV2AvZyS8n36CaygsYfMFGJ2cUqZWok8WrS9G",
  "key25": "5WrEymaDxhQfgn3SrfaSwn1vj2yhsj2TSwXVMDBUWjhjiPWXuXAFoAmY2ZVKeuuqD4dBh7VWzNqjgvrPqX7KZjL1",
  "key26": "4FwdrwAYPMVtKkGBAnBvwej5VK3aehNRrPvjCaW7uFQ1uKYTsYBbnyrne312MqBrvLNM2K2HVzyfVAQqdh4eGB1q",
  "key27": "5EZQ1pHCVMw7pkzAjiPkoXgbgNvRY2etx78SnMgWSjtyezngC3ZJgJpDJbsfNpxpekHBZhUaYsNJjX4dtWwiW6e1",
  "key28": "msmjMguHRn6PhWqLYJPgTFf7a2Y396J1tcZeQisXBw5VFEgWvbGSEs8Du8PqfBJ9t3QR1sTAZv4Lk5oSW1m7NFz",
  "key29": "37jtMRpJqRxmXK2qzHmGBqfh2zwdYYeHr2FJqXNMmz9RAmeDPgZA94fvNejTbG3VwZzKPjVrx51A5ia9aPkSSeAA",
  "key30": "5Wqfm24SS2LYBXaq52knHSHKvHpFXmS4oh9HSR7gYTVbzPvGAKxXQJnqYw7YoTHj9gWcQ8z9J4GRA8rjXjybtHce",
  "key31": "36uqepU3EUjqrKbiqQEbYHUshDrjbzZSRFrxmMNVEGxFUGo9WXxDQ6gdDxKTGbhoHJ99tJ6A1vSxRbiheGqCdAfy",
  "key32": "4GWKRPzRMSzbYEhTo1UYg9UNafk9SzgtcxQpQod5vu8econ3THYwRtEuNHC2QMQDfDr1vpZ8MSZ7Uu1qPUy4bvyK",
  "key33": "59bWaEbMeCGvpg6hFuZfYdrZmurAsMs9y63veAV5H8sjhysF9yfaVt1D8gjnrKd3UQgB1ZjTfSAXDVVvHm8C78KU",
  "key34": "5tLbgRfmTTyFkApgQ4TY8L52sZjYnYRaDMje4xLu5o3iJYz821cU4RKXA7akuK4E8cpi47BvFoSSTiKoW8XW7NZ8",
  "key35": "46NnvxqTGPfFiEYZZxs64iHsUFiCfM2VNh93GBKEnhZvhdHvs1fnfDHiYpbsK3T5VApoSfg1UzhZgZi4t6gQ8TC2",
  "key36": "e7fx3ktVawqLgC6qbqSkqFLrE8Lk6GTUXPsoZiKYvdWe1YXKqmMRo3nXvSiiGEX4Wg19hTH5CZhCqyjmSD1b8Us"
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
