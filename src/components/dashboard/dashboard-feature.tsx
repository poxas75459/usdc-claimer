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
    "2azsEkj5LoYDkKmc8PUPF3jkXmtuirAeMPfU6suzYDvQzHzvoNFyyLJSWR5tXJHFqbpinNCodBbPCNXrU3TTR6W5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRnvtZgyx92Ydj6A522VcxjyxDcGM8wWAho72SkiGbAnwXJgZSnivJ7nzzn1waB8NyrEHURjq7L6cMjzji5dJeb",
  "key1": "24rsWPKV7qusVBkQZLr5ommBeMbKHXyh5qdThtmWKUHTX3cDKHC3M46MYXqaets9qYt1UMynRjYNfEqawkBCj1xe",
  "key2": "2FS1hAFArn4A6JyvejbCsmQ2J3a4kHfRneuxJhcq6V2xCB3NfKpMmn1ZM6TBDQLaaqwSdBakW9wWn12jHeb8rgYq",
  "key3": "2vijbwQPkihJncFe2E4uTdhxnfGvBBS7Te5WK79mqkUaUEt7qZmJBBeMVMvhwvMCcGRXB5KgxKvJxFnPKwFpg2vE",
  "key4": "4HW27k3X48qHjJRVxgjnRDRwKsSFP3SWKpXABBa8jw5NvkbWHvKPe4oCuVcNaU7JwwUJTKdEbsH5gFquVbc7tFoh",
  "key5": "583iyUVXH5sxiuj1q62zxpDbLjdcZzvoRbo8JV5vtCds3CcQqKFNNwrTfRMFYkb59xsergcAtaH9hFGENyHEzSpq",
  "key6": "2kkHymzGipYCJcTvMBDN5JRb9bnzHvLYSkymv9CoyytQD93bXBZe4DWxNf66exxsj82EAXZ6iVTQjkuusdP9zXxo",
  "key7": "5DMYhPrLvroYtmpLsBpmS9ZMQrrRcPJc9XrbiX5JqaW3AzavrR1GPEmFa4NXJQXWzQYGnVx4QaZ18X5h7BMtBGSg",
  "key8": "4oUJep8gok7QxCrcN81BRkQX2PM27rkSwaKZsYXruyTx8WFHGg7M8pJ1rMDfaQnBE77cJHpUfbdFEk7WqtWBiteb",
  "key9": "3zMzAw4qsudaJLp2VndXx8Tvx9ioRHQhFAwnA69amy5JXNnn8AHz7wg1duAX7icCBzw7Dy2KhjX4XiQX62XB6ZkA",
  "key10": "LiWHFAPv9hwKCeHPB3uFj7swiJZGKrvCgHNyPXJE9qKhLECqZqhvSC6grWV8LFGtDkqULzckx22HEqbEAVwUFCM",
  "key11": "4Nd9nHjkgPzSCyH3CdW4Xh4havsi5VwDbKDqYKqZ9a7vioHSrtE9FocXUbkJzAgVeiDBBBsJqfXQL1RihX5UDTH7",
  "key12": "2UFFKPukVq75fhnezx5sD1EKns6VPyHAE2FJaBaXaM7rT6z7pns8JHSnnDZXkm9Jm8CGVSu73V6rnkEavoUnJFd5",
  "key13": "Uy9WZGdrdS7zPBvMtn24YFAtXaBTgpkay3hxwL6pmdCPbchRuDM8pUPxXGj5pYvYh2KnEVXKrFkkcMGTKGcbYeQ",
  "key14": "5amKdf99q4ApG5VmufWBQfg6cKewUbwExNV34gxN1GnpTHippuU99aimsX6FbChrfXAo3LL2yqK9hSQoMCoFtEFn",
  "key15": "5Nz1o7cgqmCFYrDm2UaSgNGffifb9Ekf9wLx17sdB6bm4DTj2jGcsTYbTB1Mv6LvaBQ2St5UdEkM4smtWgymmbDA",
  "key16": "2Zgs4SNW8KTXT2KMPc2MPFVHxSEvgfkaVMXRMSPhR4Abo6DjfNoyoXrHfDwpsCrBSYztZtYtkTU2KXaDy8QFjSb3",
  "key17": "TUJzWCp1gZVUVfKLHTn5bkMEUewE8XeD5pLiaf8MSCYuB5U7xfecxEGaWv9mhhkFyiXczrQUC6ZhbQi5C7mM5f7",
  "key18": "4mEQTY2REnd8RKF1dRXomWjB6jT2NqtgvAPGNFa81hhkfRyydELM6M4jULWT4nKVV2pmpZS6CT6PkcvDxu2euSmj",
  "key19": "4SAsystS17fEchYKwT1W6z5NfHBJz2e8jWCnR9cGoBbnJnSTtp9ujb3sLbQWXUwUM5MkpZnQ5fTuEjnuVbqPZpuh",
  "key20": "67GSLWXLrArNa5eZV3gKSHyreSSSxzLNxTxBBcii3iDHJXZqC1mWyBpPU7zHAXF5fVNjwnUc2qExhZiFLnJLasFe",
  "key21": "2Vvo14UhSBaYGkzFM9RBJ6Q3vguiyuuo5AZ6UJVnZ3oUvkECg6zcHvWETkY4AhETJRrTydoSF1moiTezXd1WFhWn",
  "key22": "2R5UXMMD3m3J1M35GXRX6iz3qfApfSZPuXTP9v64vgRqjhGxCVASnLMcMZcnXDrwSr829xKbuVfGqfUBXDgrfSko",
  "key23": "5Rq3R3QHHVWjwQuLsVysRwLrVA23xyJpZmJYKd1QSaYpzR9yd58a6FT91m27iR5griztaXbaWB8PaeL3f8DFgLgf",
  "key24": "3MH17eA7p5zXmSAnQMtRpLugcu4WjUayQfPYDuuGJm7LwatTSUvTPGwqUGbgfGW2ZtLbR9zyEsTrsTgrVUjNPDr8",
  "key25": "5o1ZFy6MB1EiWFZQfpbgFWswMRm161TVdxmumu9A9sXoZRLAiuSkUZeHQJobUgwQPKuxG38VgkaKECfqmsXVUd5u",
  "key26": "5gDtbyG2MCT1XtHD62UGTGh5JiVFtaQDZcVoP21NrXDx9sPBi9x9yueHbDA2CNbmkyvvXfJ8aGUVcMoi8LQyJNPN",
  "key27": "3qfCm4Uk8bygKVaC4BAKTCcFWGd8yw34BcTZtyBnbzRHonRDUthRcHbhEJZaxzFhdTRN1VzJHQKQWAMCeog7dR8N",
  "key28": "41QddouCiAx5NHXBEDAC2aAj834d16r8iWYAWbU8XPJFfyfMPMRHAk7iq5hZLrG7jQv9NpR47YP4GEyWbY7hufsJ",
  "key29": "2WVd7DKLXtK7ZZUAEKULZsPmaD176TVdek1gAeYnEPDzxfBvfFcn8vnq4APwgRVyLQvmvQ9vSSG5Hnxt8fK21ii9",
  "key30": "4k9Cu7wqQ73iTS2dDCyoFkiuaR7jBP17dddSw2x857WNnLg1dzeRbjSfHY2vcseFKZRNNHebPZHb34qT7t5HRLTF",
  "key31": "53GKXNTEydVv8xkpRctsCs6ZkmdreVZTBduaSEhP2EkzXj14QKPehi6FsHL2daCyE1C8YDN7cJJ6t5Ah2b6Q9K3z",
  "key32": "4AJgoHYWAHaCuLqR29Z3mDDCYJpbuwGEKwTrpZ8zqAqLJcyh7VUASq2bqBMS95nJ6axfysUar96zx1UCU88rFuXT"
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
