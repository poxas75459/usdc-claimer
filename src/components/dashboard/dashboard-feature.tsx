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
    "nv6GpPpYrnqCoX984h9y73hexbn5ZmksVNfvgzJ1RZ5MaxRUk8o6poXyZg76mUZfy8hEZWKcKJBTHjxEE5YskxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLkhjMGgRoURohgYvSRd6R6skvjZBqei7X4q9GfFV9M8FrjhmECYKpTWyd4c8n9rFsg1hZx159UP34ofphdDn9m",
  "key1": "3Dhmjwx7eC3UqJzTaQqxKQvY1GvVsGq1YDLD8ZZGbJM32YypkZtsgdgAdkv2ZkpkSvRFWwBV9XkCjzpB1kk5H7dT",
  "key2": "6a4eEf4Yja95VwWhL2n9ZsSVdhfXAsxYzW51v5vMbXUvBFdy5gCeSpsm7xPtRvdVjyX4Q79YmJUkx2wrLu6V7x7",
  "key3": "7smM7m7c6uMc5bzVb99sAohqjRZrVLPtqbnttBMhQHXafruRq6oQreHCGoP4LBhK12kEL7ohpobHrZ3RZs55EnN",
  "key4": "QfpuTk8kZ5ZwWjTh26Qum2YkehwWzQB3fbiCgTGrrqfpmA65GhzSatqcXYxaNrUZzoY6jLjKi2c7ZZRjamrQnex",
  "key5": "5EacuC6SkiZL94KwE6dK7isY289XKPMwrpzE6J8NiKg4pVkEPF7vxGQvsLmcrWfJqMaNbm9pdyeA19a8LhmAGZtm",
  "key6": "2XsdrbpvpLi3NCaYaAvuc3AUzUxybHzJa4cSYTZAKDygxRdRhmveeCUiFQgF5EsBy6qZU9Li217UDYL11VeMwGQL",
  "key7": "49BMBFd5vYpGa32SYMUUxuRdPxgUs6iwvwipGvv6bHCyRaicoLEXLAeWPc2aLepkdA9FkUzoYnJQw7hbqfuZFs65",
  "key8": "3aauLDWHoJ2c816U25uhfJgMfYVBzZR72jV4r7U9XyFaJ698MacfFXBgroq6mRJ6cGN4r6U4ewpwNkpULZFEAAo3",
  "key9": "4nZEbBdq43HwAUwxe838fqdnvvNg2P5wj9v2r2SKASDy3LKwaVExxKRupcEDMBX2c6UBRVKHzmMcTTYigvqSybRX",
  "key10": "49nMPwYEt98cT61TVtW8c2nZgFpEupDiM9jLWrmKfkrJrRiWCeatjaqqV81Rk76qmRHd8LdAmaUyTZtxsVvKytB3",
  "key11": "5Pw2SiPpz4BL4SDwpvahVFakzr8ksghQRR1N7TbE8wWzu6ZarVtUzLCVD4GvkwxcRHYtFZHy2BHKRLbghYuvJsMH",
  "key12": "3GeWUEh78Smk1YWyQYJPejH3LgQN8ruVe8BP7tpdn2UrRkwx1WZE5ZBzVt7WQwtEZQXw65Y771PFzSbTQhnm22Qf",
  "key13": "4Ltqyj6rv2fXvzkmPS6RKUbddBXZLBE96scZgXgfBb11KyxbE2MoeemrQbcEXj4un21Jz818jijVDUD8WsKGp2WX",
  "key14": "k82KFKqLyzAwkPS8fBntAeF7meEHPoG1Xjk857nMpjfbb9jiG7hTXYtmVfaM61R3xVXPTBn5CNkf6y3crzKh8eb",
  "key15": "5QAQig2pVDdBRurATYqQyQGZhaxyv4y5xn2ThXUAYWnj8Cyayz6KubV1YonntyWzFMemmmiYz1dkhDMLsgnQcnC7",
  "key16": "46YpTMx6S6S2jusC3zreETZS4XAWP6Rjz1iYRR5zAi6ZBm5vboYJXnMfiYsvp2gAUhu1VsD6PFkD2tkKtzddfJeE",
  "key17": "5VWwiRUbLAhX7bnAxrVdDoLXhRuzXs5YsyibQXuB2YBmRBNxxaBDCT3s8y5ieCjXPutVXG17eUSyWmDRzAZLgz7m",
  "key18": "59mKmc6ZZsvtMxnbBToAf9NPRCqLrKuFYmMTARsj1JjjDVfsY74BY74GBwaTD9vnBgwKwSdgHESfJtQzpYADD9um",
  "key19": "4HkUWQxfRwjzn23RFnMujds7TsVKQRnV391iDDJ2R6PqjWoqmPHG5fAYpdNwr8t21eeMwWvu5D773TcHXk9Drevy",
  "key20": "4qBuAWDg4aeiS7RibKRm4mKiNERZCZuXgb1LSbNDxNxqViLyE91ps3XQixS3LUzFKzYRexttfoe3nCt4T9q3XXb6",
  "key21": "32gxxGz57UBaHYL3CGeQPrGPZPotQhtwCGTfrjoLKQW5ZirH37kWFm5oMb7FhpgCCGxscZoY5rhvL4CJwFWVZTf",
  "key22": "35KcBZsXeQ5NG1znKc7g1E3KjJodF6PopXrDS1PMNFT7onDoeBsPPMW5u1tUmWKD9Nn371ek8VFPbBk6AMZ7NvxU",
  "key23": "4bYkPwZ5zg3WLy8qC2QzQuBMjgcUS8bJDvuwMnCV6uCSNh24P1jJAzwGUDA2LTDegoM7RvQz58c7e1heXDV64Ke2",
  "key24": "2jdf22yJBt8ZyZvKy2eeSpGWmqTQVy98mQE7uNSSwn6G3m5A2BehjHVACUS3p8nmonVkWka1dJUY81tZdeJu2KvZ",
  "key25": "4EktkqVN4H2vSfqK1T7ieJtQjp6kSkUbDPEKT8mwZUYwfeamvNmt93F48e6XALMjAmtej6gpAN78WMco469FsmuY",
  "key26": "4U4psbLyoEZeYyiZrnqw6mSQzFPX5kcpT3heGKSSeH3f7d9QCrQxZjpj4Hmq4S4nr9hgSgFuZAGUdMAUo16rjBMs",
  "key27": "5fwLdBfoBd9SYV2qLibk7KKZQzGbw5LR5mnhogAr5pFp4nUF91QoWTVWJFcy3LCv2mAThoQnoPwi9gYa94o3xUyc",
  "key28": "5F9MJCwpMQaoBp3diqa6nN2uHNNcRHQeE3vdmFC4JoqP2PQ8bRPtUYWGGdeRWGSPpzM2pmbATX93xCJdmLFPxzAL",
  "key29": "3UnMbXgt9SK1TmRv1yfNA91oWqxjfrLjzdGHt8Yuy2RG56mgaW3jAvd3qhivbUQ1dAYEwEtoPVLqaP9SGvqzYeEP",
  "key30": "3FjUi8ZmpHfzQAzUwHW8yreQzPAt4fFE5XpWyCVK6xnKJb76zRkDNa8T5dhTqe5wNaSZXh3SQxAA94QiEcENrHvL",
  "key31": "2oKUUc9E2jm7aZ9PCkWTALt4oXBrwpiDT6scB4xQCdQjTkHN8jzHb4erVRgBCAJXh7ehCpKUMUJYYEKGrTogyq7w",
  "key32": "2zcL4YvpuxUaNWMgS7KxZZ31TVWd9hQ45ctRhX9wKFHKChSqWceUrDy8pX9TAJAJx6Dav7JWbqUmzSDWQLyKZ6wd",
  "key33": "RUfd5kC5LXocWJwmHMEQs5tVP6zAkdDBih9RF9nbEkGfbQiNajHMcp3hYBpJMjspJd1Tfpb2JgbnST1pazfDYia",
  "key34": "5oZwqw872du2nvgEwMuvYDd7oZPQ8GHnBYYUxeC22fkHEvTu3GAs2wDnRPZ3xRzvWnEcGHc2QpRPwnbTyHA6NdZP"
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
