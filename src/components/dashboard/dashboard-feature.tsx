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
    "5R2nYbY5oVaFY7tfKHigv7qkWNSuhS9G4ysC1HhzguZHZ4aM6h7dztFWbJEfsPYQiaHZPvUh4X9szts3pX2U4z65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51vzGRDzu9YvgQfGKUx18dqMFKRrKMDxFywuUeMGzWXm9nQB2KxYmJ6bsggBk1gcbtsxnCQk3KL7VdDtQC7Aek9j",
  "key1": "ehpMgzaRayVhiQ3haH2cRvism2vXcnfXEVboZsajmshy3BjwtFC82Y5PBUUZT5vLxMCb99UoUKx7WfWV4eQEUkB",
  "key2": "VVKJwe9FNPBQDoFNyosUyAfzSBo4xeyHKUF8KGoosjaDCZDhzACsj84ggLjH9DSBVr3RBE1Sigwk9XSVYqK17JT",
  "key3": "5Vdf4dtCfwUgToDMHhx99QxVQnZwyhL2gVYjfnHAzb3goJAFWzxVkZbhJMazWqEDf4c3ynGKi2NEESQxskzbvoci",
  "key4": "5sgsyVWGBzv2CGgnGiL8ovh4o9uK9kzWFFv9HHcL1mis8JvGXL4Qgj6fMYMmeZCb2bswxcQrr3XG4ctTd92b68AZ",
  "key5": "3biZZruUsXQuhXZESVc5zwqT8RTjPdeMdH8zLWR5JaxeR8KVZHMaTsArmiffNKWMGJetnGVGG5nfKQFARdf547Vn",
  "key6": "2cJyyKLgT1xdbvpiLPX74iJmeNK7Uoh2CfeAXiPnDSPEnn4bg4GZwm6AFHkrrLu5TjbJSaygyxyb7hZ8jNXTvdfF",
  "key7": "5fqp4Rd17UyDeeMw2fSi9f9LtAdypPnSnmVWEh3QipvKabgWCgbem9nrAVABMXVyg2fUa7ZvPp2jdALdeep9rzRt",
  "key8": "5aSsiDHdQvFCcz3P6q775xFJphvi3pKGLomn3cFRie5cVTgKvDyQfiym4iitrrq8fmNJhYHSE89gwbKuvbMqQRt1",
  "key9": "4F36F8e8rS7PZnoQTSTayHySK1myg5g8JXnFpQP24kKzyMyEofSKzTtXPB7EY8jeL5K3xx83u7jcsdSzsvqs3Lim",
  "key10": "4bAYycs23eGsmVC4Ren3FNyY1th2hriBsH1Xnt6mhSxks7wrAmyoniovBLodsWUd7bds4XVn6TctFLKV7PLEtRbY",
  "key11": "3ahJ9R4KVQbiLK5aDxHsdeHQM4qLUkwt4prVS83cmV6aqWkjYrxxcmHZ7ZGMoeYWkQCRjPXiLc6wimaSFXNFKYGf",
  "key12": "5zVKgzuNLhu7WgUHKDRCBEeUv7hLAKgENgstqau3FJBekAMJGE95qnNSVjd42qBMGnDkKHU1aZosMJWexsWbf4b5",
  "key13": "3exEXP9FNpLNeeXG7rWxkogvaE4v2yuWF8v2febkzyvXxBBD7Jf4R6GaLnxGdhthD6NSQDiTYwq6hSMz4j8s3D2W",
  "key14": "2dXM5EhbN6Dz7SkyvxoG1UoqniBwEeNHZegex6YAkBQ89MGPigvhVE6oP7vTH9Paq2qtMK43vX4jsyFY9Tdim67Z",
  "key15": "3vf21FMASpK95oPJz4khRZsAkp7hAwnG1ZGxgytzKACwpDm3gZFoiP8UzZcQYMxMGfzSREUFYD64RdwHjqRGgL2x",
  "key16": "5miHGSihVMJYzt1dXNYEraBZANB8QZxEQZ9S2bEfZ74C9jZLNJHdQJ5yMwz6Dst6hHtnABfzVBrVTq8LJLRJaQpJ",
  "key17": "3CiAuduuZAwvZUWk1fLob6knCddbqvGTFrquCmHTWVWHQG4zTGKDL2tjrUBkuQQRn8LR3R9JD1BeM1rmot99KtjU",
  "key18": "5NxAbhZ3WwKy6ZJKhbcHd2EoXSvag2uzPHr6H2MPSe4kTNZn8G8fCxnrvCUBZ1QUbiiXHtuCJuDenK68RRbEzZAW",
  "key19": "5H2F1ixNMdnabpS9dr6kuyY1Qc3UfVXho6e3BUgiqa37TVpYJiPtpNKLUvopPAn7JC3SybvSRPdwTb9s5TS6gDc",
  "key20": "zNfJbCCdKQHtrfkww7CmdRaFMXYvp3Sb2v24wR4GKvPWHZCiDpVxRa44zU6yWEEPfVJGU8DdQQcBodib7yBZrLZ",
  "key21": "4LJx5V9PS4AoWdFu2FtfTEzdA4oDA5pF6hvHPWWpFMtN1H8HqKSRLNf2P2r6dV77MNqbtqomv7d7P7BfsJZNzdLY",
  "key22": "3weiRqnA5YE8M9RFzmwBMs6jPkJfkVh9g6v8KLmtgCRZTmcwz7j4JxLo3jvo6g9yejemhRUZgrc9fRQYsrWQzRDj",
  "key23": "5MtzRedwRDUHKm4yUJA51LWh7K6wT9QpdhSNXdTqfahPh2XayHRf7p1a5kZpg1Ejr2g4eFJqBXV36PD1LhskbWAr",
  "key24": "5JdYwDbBCBQMwcnMCBrv6iLhwUPRL64zQYte3nc5ubzrdD4e44LKk1jHW9g5KeVtjwfx2FfjABNu9adc5yQSsAPD",
  "key25": "2s7gQPH44DXSZ6SMS7KQkgCYWVZMZHLAekf5k1uff7UtgPjDnboxzBgCfGe5B1mCsgBFANFhHNyiNsTgXePoRLrW",
  "key26": "25uaEV5CgsVE1kb9L2oVwF9Ko6QKPxpXRZ657AkqFh81641Y2MrabqLjrJmxHxR6wFTYZhJEUTGEq8Jc5PFRQbek",
  "key27": "2eygJY4iqN4o7qpmfgukbyjPhJEsG7iUQDX8R6KPhDooUzJk4RaSUB69BNYBwYNYKCx6qjQgpL9BAtSAuRatT1cu",
  "key28": "5mX4CqZkARGxhEYy2NPbNps5T6CVT7d8VLAXXGRD6ip1ESCNiwfUUa8EGTomyWMcpeyajfhUTTLtMW2p1HtfsZ1i",
  "key29": "3PCgefqaECG54yuVgJKgUFZLAVLRX3JLAifSnz6JLXdkb9TZqip4N3tn23qLGQS9E6UhWG6pZNvGSKsQ9sLQ1D15",
  "key30": "2DHZKD1dUQvinGAVRViemkS4C22XhCdNBmYckioAaRAbn4bLKXN77BRUdW41QxCjGTbEbdED83TLZHHXKiMDa2vN",
  "key31": "43WUgJ2LBzDSsZq5XVLUaboHr7oFB99v4VSSY56eK1ZTroEX58ew3fh1tzJQsFRmRojKPQuDNTnmTRoeqqdZhm5J",
  "key32": "4M8D78Nwhkjtg66bVBTkdsDdusRDdmon4uUHRGUkj3hbKbiq3ducssWjfndotxwsDSj9MK9DuBtYKdwSkoshcL1P",
  "key33": "5gLVUAkjHcYhrfbUGqiQjzSxaEaBHCBjpVuFQBMq5tc4fyeJJS3B1FNzE6RevdosHy9wdNjB8txm81mgBDBESiFf",
  "key34": "57y9ZDUU7NBnRuTLxYHQzzpY4PFY3yZuoEdZp9CJxAz4g7bn2B5V171sKtxQNxn1rHRdDVU1QS3LiRHFpQEB3M8s"
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
