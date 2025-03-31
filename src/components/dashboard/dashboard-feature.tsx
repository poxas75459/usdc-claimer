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
    "4SbXXLyVRNy9KtEDSdsLdNiYWbMorqjhsmFAJ9jdtzgHY1Ums2GoSu72rDdQimZbXXHYc9e7EtQu3wVRgsyyJ5p1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7LC39uvGs5oKSx67zkBGXaDtqQvQAQDmcQwUk5q43AMqJ3RNhFda1gtt8HwgupsomibgcMpvuRw5BmzNFCQyYA",
  "key1": "5ucAjAEPnEEJeM16R5tyBLehLoxLxo4JQVQizif1HSyz53mEzg2E8pSohbpYwDwus8CwdALgQ5F6hEVyUWE6ZMfg",
  "key2": "2qFAKUmChywgF82wBkJCPReuBjTwiGbdYNW4oVz6s4E1izBMpgXuA39EbKCBcC64LnZW8F9b1YpygMk77W3L9eNy",
  "key3": "4At6mqKnZ1HeA9CE28537AdemnzyoWKrrEzxZ6x1EpU3KXe6ohkwXhPhKGhC5rZ1Nyn53FcGRg9yiTqMh2vWsmDx",
  "key4": "4PUazBXgs2MyzBheczq32JEn3LgmQbNHr5m228vhrRmHSx8oE9y855Y76SPKJTpCkSgM3bowJXXbSejPyv2ZEmRG",
  "key5": "4GbuDcN9mEFKeyPrnFyR5Kk3TkWyiKwEba8gcSfd3jDodpRZBM66SNDZFh9dCkvzp6YAZ5bb9xnsYnyoLdjYcaU9",
  "key6": "3REFFMWW4mefuNiBJu5MV1Cb6vccDuFCwB2YDqesKLHDmYHJuYvvC9EZHXN9vE3zLGNPT1ib58MGapR6foLsrGMY",
  "key7": "pkaU452yBQZhiZNbbtiFdfBJabcoowBU7CVw2dDLyzK2eDtUpH5qPdDmi6NdmQaCCfLvrF8pQVTmJDzU4TQseru",
  "key8": "5ZgB5quuqpSufgnxYG31KpowHsVz1Nd7iRMHf5ASdTv2p8FvKH1SKqo98GBUinDa78FYy8RUkZ6iYn4PZLxtAcEi",
  "key9": "2imA5gh9HLYx6whRaYuamYQ7rgKKtmVFhLnqWfLKuMEvXtK3zAD9qqBLEAdHwE1WmEhLnzj3XCioHhhoWwQCPQNG",
  "key10": "5UY6CpcVekymBTFEZ3v3iMGJEGQsW3kZ1ah19fyk533HkEybcJfU4jMkYEaTf9Gxt6YDYJKgTHUFjm9p7pqs3mG",
  "key11": "3ScXRdYWhXgZmWF8KAUApucAHt5TYD3jF9pgfbMZYdMR3Z8793RHdCvoDqpRfvFcmiJQajgGVzWEep1vcTZb3hu2",
  "key12": "9m8os5XedesmX3wGzxdM1J9WqpcnFsPUhRHYRieywZTAynh7SBhN734VFFHRqaD58N5jWhvgEFXc3uUjyYCi61V",
  "key13": "5ovvmihvbpG2x1CiWdTUk7iG459FM593DFoM8JtwmXmGZLwL5mxUPk3AucMQpbo9BFrHiU5hs4bEVXWoB8CDmfEy",
  "key14": "3GDsDqiXUoSGp6UjTiFShF9ZXsUgPKXa9nQchKFEVC3HcMNd7TUU62a2GDdRxHNHBzyqqjhZxGjtXTt1WiEAbx1q",
  "key15": "4FjdcQ5emfWxrDP7ZwwMoAjgPWUQe1MPxcTUNjcgTyr9obH4hzEUX5fEF3DBMBjU8wNjfgdVMAP1rSr3FkHhQva1",
  "key16": "2Grvs4SsiGcN5EGWesbEVELqEtDNNoaDMecksGUnMsKNEqeYGnmTHYU98SKCHL9KL2HizgEyNAWwN7gyVmByu2rD",
  "key17": "5hePCbfCLt6j4WUuRnTcfzWUFxNLYQAeN7Ju1SSGp3mDQ2ybje9gB6zEpFz1aDbLUeRETFPDobWBSEkSTH7U5JMt",
  "key18": "42BxdvduPhX6VjBet3tJkGj8BUXKhbcwyCZdXKAARWzvyue9FRFbVrgxanP56w89dVWFjs5xZTQSwcPGnhRbwjUs",
  "key19": "4KkV1cF3syb5NEha5yKCabUw6tr6mHRYAprZ81fknSkCNcePknMCLNkEjcgRDrqCKik7wCDULY23uvasY3WmJwcy",
  "key20": "4xmNBrSvgM92SRDhth6NeUUFcQtKER36c2VFbvuGpVkm42KzTgH1Myf7CLR5hHmDTWEDusnJ3H6zeM9xYtqmg46G",
  "key21": "3A4iivddYYxXeYVrvnCMZVmkvHZ9M7RBwvqZwurPD3iHrqUouy8MCkt5ZVMWZscAKHKASJBrYeRgrTbhFGMdyzoa",
  "key22": "5RYyQVMhHCFxGpPJwKQDR5ebxgWeqnScgzJTj9CrZTV4cHxRGmgCzppDf4x5geQkFbWjVJDE6Bgfun1tjoNpyuFf",
  "key23": "3aGQu19VVYBC5hpd6PCRztBve2oDgRWmTLPpDzkidb9ZZeAiWi1Hk1VEEiMqzMkYxwNsGj8rF5Rd9iz5DqTZ9Csr",
  "key24": "3sKmwrnTK7sHa11ES429PikEornnd2tprkgrze9QBWzgENdrZ5V24qe8gXm7HwwcN6yTVxrvuNMntJrTecSH61gD",
  "key25": "4T4eVgHvbAGEwfLdNhK8xqaS4UujVrV87FZpD7k9tCNkoFVcWcjpR2Mny2Ec4FZz1QWruQa5rwBynZq253S2WMuQ",
  "key26": "hbC8xuWfw2WLpsNQ1XRkWkCFR2HYofNbbACkoZ6eW1mozkJdS2aPSc6LReBDXGpe42r6MbrAxZ74dTZXswLVXex",
  "key27": "5qkP44MchJJUHw2RtSZhEHBb9nivriYHKUhH9sn1i7hfmsXTdzZtivoXJwZyQ8fSmTUPzVVim2fvFLGcupUCKZGa",
  "key28": "5ifFfUZdztuJk6DixH8VfVm3zMYQBei6S2cs3SMYi72HbPGer1evZMuSACghoXPz7xjx8DjjNHq2tSrAteyaSiWb",
  "key29": "4eE1N4Y3FMVb4NfWbgrxq1g3CDxiQkic9uMVq6P6Wt4fwSZ8DqYZrJBySzwVZv6wVMC1wyFGtznNNYbHMN1sxbCo",
  "key30": "6GettuNhdypMzYQvJSMYuTuAnFQGsUFnyzyWQy1FnC8sdS1YbZgYjrUMkegTSsjy8qpHeibTBeuFdqMyEbbf2Ko",
  "key31": "3gH26ZX8A4JHZ7gp6oaVAXmSa8daoJ2iTwEdjJPoZiqF2wcMssfheswR2XwTiziKzJxNqoyDw9ivHEzcyScMXr2H",
  "key32": "FByk5oJ6As9egyTPsav3z3P5CEA1hkWE8Rhi1RP63SZ5HYkCe8Hbu6s4BzXmPD7nRkw4e45JrfsMs9FgNzYAHFp",
  "key33": "3E9WRra9gYiBHyNZTLZU9JNpV4FW3moH2KSmdo8cLAdqFRoqqvQfzUV2n7D85tq3VUCZr2a2aYGToLT7LVQsbFSa",
  "key34": "3gcsacxYNyARgzQaGExZAGZXw7FDSZQf95QyKuWSRgE5hz4ssoCQaaS26qRpFf76ijtt1JDcuA9dCswt7xQX9RAz",
  "key35": "5SHRiWQrvYKhsM4xVDMaPCgg4ABVykz4349mN5Txr5yEMnpDcBRaLpmLwPwQKUUtwxysg9LxDZ2ZztUVQtQ5kkaA",
  "key36": "4va2JEqZEm7eHBoejAzuwkX6GbWVAAuJ2WhRaEJCbZu4fiPod5ZVHSWDAtvjgVzfXVH633aq9aiTtmZPyBDVaG5",
  "key37": "EzAVira2ekKX1yyRWWorxWwnXuh3gNiXxp7sQsJg51PsVn6gmTT6FABCWytr9JZLDfHnPUEJiybJmDmsaKcgeB7",
  "key38": "5VyyjHjCHq4Pj1r1LpEngUx829EmtZ8WdazKsPJtaeRyfq84Yi3zywznPnQds98mCCdAzPooMRYiYXrwS8pbQdio"
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
