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
    "33WNMmPRC7WaQfYi2k2mybM1DVF7pwgsc5wjX8XWiwDTaK5CgM1t8PT9xj9wEyxh7ynkkKjiYM6jSxXo8cGL3nT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ndrtyP2xMEx9BdkUShNwh9YYpzZ8UmdAzFM4rTrz6TKjzXr277S28Wey82Ledx7Qo17B2z1EsKg58vZZr6Kf6F",
  "key1": "41WqvZHLrV8scLAHwQfYDxK2WBKujTiFMR8XtnTwpVvqik2eNF1dVLqGcsApQN4WobayBPJE1B92cGq8GdFut1sp",
  "key2": "AtkNGunkadx5oQFtEm3i7YqURyw5xa7DHTU1YgrDVkLBqbmzcatdkgeQaks9Q5pqaYsLypqCmx8XNsU8Tehmqs3",
  "key3": "545jJrmXjozFSeyEgMSfAMm1aVDSA3GBhe2YaSwawZ1xyq9ekQjLMXFiKN2Vy3vuaGyQYe9eeakPCHAjfCvugs5G",
  "key4": "5CVdxfmkFn3HcTrG812ghmqREqkeNyGW5JmYpXUwuHW8DZQncwoK1xKkGwFvQM5vH5cer2FKnFsRVHBYHDM1xMWm",
  "key5": "eLgyyP3wHvjd9Pof6GECWdxtC5m91nYLNtAdoZGi2QhrVT9ri9uS8c92A7yqDjNA6RC8BvPBuRDTNm7epWx5nai",
  "key6": "3oTA5W9svreBcWABSvfjeFmznNMQ4HJ4hQjvY3tDvQ7jbfY7sgRYP8iheR6cN5NpAn2t2qaMHNdAkYPKP7CXfaNg",
  "key7": "2j54B1s8T8MJvtscXaxamkrjEbYogwiuZybozaWSYFfg1A8KZ9VwhPH7i4DbJYuesw6nrjCfrji3DtRnz5PwasY5",
  "key8": "RnxoyZYDfzSnD9GTP1hgtR2D2KGCeyVFikbo7teVRGsfp68RQpu6HV6VPSvqPMFrXoDF9q865jmo6fHmG7BKySd",
  "key9": "3kY7i1cWAtUdj2hHzko5gKq1w5x18toCAoUdxySGNunPQ3PMJQte9V5nnPBG5i9GjuK8j6vgw6hqMghCiRfqVxp6",
  "key10": "5QLbi98kibHUGSkgtHSJywf7wsKp4fPtRkzSq6LgqAT381zcmtCHdk3WwpQN92d5jppTkf9i8zg4oRnHbE5ZDqae",
  "key11": "5uGHQurvRyQMXQD9kYxkuuCMCw8HVKHjkHNDh9a1SmsKW5CoiZKWdM1HYcPW28H6VK2kHpmcz5A4vjgWEstqMprY",
  "key12": "5shhBeesVcFRiUXWvZg9ZJtSFCdQNYT5hL1odGUZ3gGAChkpbaeWKMsLyRBVBapYhzTvvX5FLiL6LWWFKgzQha41",
  "key13": "5MfowWCx2ktVv3pQeYost8Fkh7fBxvbmZYSTVSKeWGt6focBRMM9bPszWaRZKCnrn1LQH9KJBheSi8hAgFwokA42",
  "key14": "56H8Mtvw4vNZk17o6G2tWtV7fNDity2grMvkW3titADrGgoLjtwQLBY2jSJmvZb3sy81PnGqKm31NuScV2ByVZt6",
  "key15": "3mZ5CHFnNpK9fPCjNqfTQj5ujFkheBvRkT5S5eky192AeecaTbj4GFTc2gWN7JxYChECb3kDKZXjSgZajMzujPc6",
  "key16": "zALkGbnmDTLK2P5L4YDYwU2ybuPzG26MWt6YLhbiPzy99XHJRxkUzNZRoiXgHV1PesXWaSJTQLdhRqXE53cShNR",
  "key17": "Z3RALtUaXafx42pUF4TKFK51AHXA6UaXH2Mrxd8LR2usJbu19izD3qzHjQMYzqQxUoM7dinQq4UkaWKSxQmSSz5",
  "key18": "4vMLoVW6cNmeRhroo2Mi7wA6HxyDnWpfk3crmPkzNowyr8a3yyPW3sWnTk7tGUMW7wuXhZzEG6vBoPURqsUGcDJW",
  "key19": "4g8DFFeT6tvKLLcsxWFjkRZxn3DHXGuULnjw6bSBRqbB5b4kXksMjcX7jaSf9M3xQ9tUsMSrn5Xcm5VRESJc8DPE",
  "key20": "3Jt6BTY5dHK7MfGTJ57wnVPBEZHXtkABfMQD28CyoLkk98ksRadtuK5NeMY6fb3rgBb3bV43Bz4Hw6MvGyhLF8T4",
  "key21": "2PRnpX5EwZdmZkRcMvLact31a2mgTP6C3CJ3NCj2wGSnABaT8pxudKxiivLwbfMFBzFs83jvnSGJake9rpNqeNWT",
  "key22": "3R7cXuKdjfb1UW8ua1H1fzrCKeKQxhpuo5pHzwjJGRarENqyismtqoodnaPzXoHpMu4ebTeUc4M2MSrKBttAPP6B",
  "key23": "3ZRi3L5gd1Cca6um2SVWbNGLhT1rKDgywuNDuFMAf3iwV1cX1zLbRDUEfNa1pL72tMLnZrdaEUWdqPJ4k6FNzytF",
  "key24": "4fMDhiErcHvBQJPvm6ecWaF5SEQxip9cqKwLwNNsHdt957B1NJnngZh5b6h31ruqksxqT1JwB5H83fB7XscX5LpS",
  "key25": "4CsGcBmnAnyyDqGEuDAs1V14wMkadKybdvCKSuKAYtVWL7umooZ1kFRTrBBgS2N1uqjd5cjPUa5FEtjkxu7L4kgx",
  "key26": "62Kb6X4R5KDdM8s7NYcbbYqTZdnWG65xN2KjincLNCQx2q7b4orZjXMqfaiPe9i9xL6nGqJc3cLZNaEHAP8tpSo",
  "key27": "4FwYRqCWPfFbNMk9UrrMQSwKiZKsgSAwtVxTiwBK64VbR5FMr7EAtGoQhubwAEjKxbtEj2xzLfgeP4NvQdV17N56",
  "key28": "2aN6SqTiN5qnHcpP734eRuFDd56ndeUvFN4EKvrm5ubuVhkrRVLj1Ah2jkJFCnySswmBznkqXSexY5yjJtK8CkXa",
  "key29": "3GLG9ggf7wAnpv9Prqz3LJwgp4RqDyUUg6BgvcvfrmkUnrDuxD5uUbGNkBLaH1qre2yFkQPwz8PYadH2xEHL41YC",
  "key30": "mMpL987EeoQEJ3RCTD9LGqj3dRnbKGJuCN3gPExusEjc9oPCiMxtfySmABGRRYkqUfBLbr8JGq3VSE63NjNfpx9",
  "key31": "4QycNJVq2sFPmyDkt3w5LgCWayRSrsc4iHcoas3nVPjXoHgCiMo7zdPEP5SgXDKVgWc4eb1oLnah6XGR7vBT9RAz",
  "key32": "zzu1zr6ZSP18kdLGJD9zboUvTVshFfrJSwaDwiv4ZvNi77KpQxXd4m1QX9xC6EgT141enCo8EwhHF342FbeyUsV",
  "key33": "3srQRSfrb71y6dtnDVkkfmvdMrdQujYLpSE8tfYbCUk9pjSXzxoihka8poZTsQCerjugTXDzKNEyyKuKRALx57f4",
  "key34": "WoZEPVkFp7tAi5zPHwxtwCvMeWCWtJLDpQtNQLM4Bpa3kv1zYf14pscbSWZKXQewQ6qKHmVohN53KXnF2dzcod4",
  "key35": "mqUciKLNfb19qMHAXLe3pTPYjrC4EEFf3hgNZPqopUMxqBizvWaNGqurMGF8N2BjxxRi3Jv22p67GrWqzou3E61"
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
