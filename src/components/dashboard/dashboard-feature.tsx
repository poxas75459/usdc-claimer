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
    "5op919tR7d5eLANCgg3wj9PMgi46MizR8jo3i2amCUVc2Y1CpFnkAhmTcBzC7gLMRriRWwRaq1zKZydjQ9xSkmd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JxwUnGSjYVGLbTR4c5VqQB1WF3V4DQpHNx6KSZt6Fd4d3NS8Si6CCy2dMiirejWKh6wygnjkntC84h5rt62J1j3",
  "key1": "vBus2MXxh8sWJdWrwPesgcWhmqweya4gumW2jZkhu9q8oisYffpo8eiXmnBkfxTHYCQuEKazX3VHPQCXRZnpoJj",
  "key2": "2JDSkMCb28D1kJYp2As6AKqLoVzbAuBUjx2oULhH22sMz3jJiJDD6CWRD9Gyah8cpm7YKXqsyHp9ZB3DH4GAg64C",
  "key3": "4jvfaRWr4X4deL1AWq3sjYPb7dVo591JCu4bUZvn6nrd1mbdCNPHpZh72fTNz4qsH3HuCGme1oroo3jLLq7b7D6m",
  "key4": "4vnsr7CkBT45ekgQhtBnuXinqwb1cPoz1HFAxqWkZhr3VFXuAAPu9qeXnaGvYLHjPyhzWNNkUaTD76YpAe8MgfU7",
  "key5": "3NDpuKXVVNFhiDBUfMfY9LL3G8vnqUouu9k6KUykFoEA9isDuzwcfwNRcaUD3atHWQuLMp2zqVib5b3MkSP5oCQt",
  "key6": "3SgiUG4w5xBFyatv4zfmi1WuaoTbEWDgxLSrTMMXeG1qJzsRuCwzVgcWpBYm2Mu9memc7y77ZUtnW8pGMoxwQWyT",
  "key7": "5aQ6LuMu7mJGxsyjvEWcDMxzyGdKCzZFAGeYHQVqQjkFvLBa6JryPFPEdxzHLsk95tRL5dBttHeVhDeBuxWguMBo",
  "key8": "5z6JHwTEshy7cBc1AmQ4NkXLSf5hG8zH4FjHkmjcd4nc2TRnW2yuC79tnRZp3Ho5JKVKYRqdGqjWERq96FR4DRHm",
  "key9": "3rENaNbsv5apNMpkvFTbUPM3hpC7uUaeSojC4G4QjTSi7X1RXjKdFGBZU2dj2jrof2tCk3QeLwbSyDxNjPXT28Gz",
  "key10": "39QJjvJUjzkrKbWs4gXPVZEEZMzHEn5bKkvdUF11sMPqc9cZisg36eGrZMJVjat4qQP3Ay6hmHkfGh3B37h69XhR",
  "key11": "3d1iAb2k1jZ5hDTnhG842gp9uYY7bLwubtncgVt7FkqVzNSY81AFt6xV57z3VYQdRDYKC8aZQcJ8fC3eZcreiMQ2",
  "key12": "4hc93B9EhypHuNwXRxNkN5SRq8232yLb3HeBfjuuezWy5HhFD5SVCrZoWnkPkjURiyiX9nYzSYSDo85xNYPX8hR4",
  "key13": "2UXogwfkR82sAXAZbg9kBMz7mybFM8LTiDR7asHVtSB8En6h8WijVM2uhXtwjMxQxRKnifCZFjR1Mk7gjbCKdZpM",
  "key14": "2psGerZyAQeDYFMKUXrxxUHthVfTikpxDTC4qpgZbohy389Zdjj8ocPT9uKLpS9RNoTT8zSvSNpMg1pkGzFbPgu4",
  "key15": "2dFQQkmBWHCCYtKVAA7PQZV4xnSqZLmBncHTfw34eppaBYNNkUQrjoPFR3ffjmMmtCAM9DyKEEbD4CmLajUe1cM4",
  "key16": "29U2JQ66wUo7bqh5jQpfG64jhSWwDeq9uekAE74hy9LKBmEXoYtuCz4LAhZQumimE1Px8K6o77P1dLA3WN5VDYdQ",
  "key17": "hj7qTko2AGeeXMv1qBqaPX2NzywYMLA29ArNcUSdD2LmfRyNf1bbMz9fZGj7D6qJTL5RsQL1fUzPAYANnU5KLqW",
  "key18": "3BC1BwiToKhDMgujQWHeBtcRweL97d4JfHt4roneisvi8kCDsY3ypamcDxCbFyvzKuz7anG47QTd3qur6nchZUV7",
  "key19": "owfXjvHbACPXUf2UiKbDYuztUTVEQCAUqDGrSeHsgvdN377D6Ms8o3KqSmL6jGYJHKDdariei3o5CvfPndmuQe9",
  "key20": "5yBKJe9YsYdxTEsPWT7kFQU7ZE7pANYpPkRz8rG899PHBoBwv4XEU3rzxfAyzH7kQowUXCvbCHSF3A9eonC7qfBB",
  "key21": "GpwrSkwMH7zvp1QLP9mn822mjd4voe6SD2YF97h2jd1XBCM5XMVY2cpxMKSWf48h22pbN8KQDoqV65Nxoz3uhry",
  "key22": "4fCAit2oKv918iNSDBGB5dhBZgLXtDvKbGGeL7458iTzrpTFFx2V6jaqPg2DtT46hyH8ofK6UL26SGdB2cFuBBTC",
  "key23": "3u1SUWyCAN8ZSQMVXHRLVHLxXDzkwLZZqc7WaLZpjKGktvoShNYo5r9aYxuGE5CvcFqKpdq5qjmLrTchLYSVMS7M",
  "key24": "47rcbjd6QdJmsG2zsqoqX9c6jTDTzPRcARPQqLDZtKdaoUZo9eX5Q4PGdMbRD6KwbwJ2h7t83U5MLgumuGQRJMby",
  "key25": "BqxFZdTxqLNGDQBeuxgBaKvnp7Y8LH4yUPB7i1RWb5d2Tgmb5i2FUNYWNw7kWkzwuX2rQXC82SSoeXYxLzctQna",
  "key26": "2LS3m4BnUGaTKcCyuNWLT9RaoLGmFNJHQENu7FpdL8TtXLxz72qF3eXnRpmf3FbgYAoeATrrHZxawk1MumRZixzp",
  "key27": "2ngP97LjSA8xrAW6LHNpQ2wccP5UvmFnfcX94gzs77vWVDjBhsMpC21JyKUv4qP58pmoZHDQHx1Azt2iyJuMqH7q",
  "key28": "66mWGzqiXLrFKL1oicXcu4kz6hf9GYmLBFmSyTn6w5EMZPxd7fkxJmrm4DDUFk37dZ8s7xQnKa9NCL1CPK8feLB",
  "key29": "5dwmQ9LaY6ikTiZg5y9dgorkofM9HHyqhUkb8RGPcp3q7ErUVABvmZABJQWx4Q2Fiuhmsy2YL7woqabH4CbpVSrS",
  "key30": "F4ok28EJmyrEsw7gGMSQsFbPsvb9pxtizBLmHd7kSvYw6Drv57PUCFeRfZqZEgLDRVoqVsoPVjcZjFtDWnS7JFK",
  "key31": "63HYCpyFX8XMKuAxCbfdqN5nQoq5e299ML5ApS5WbnCScFXdTMXW2XpGW5vA6tURw39tu3ogMd7nWmFAQ5E55MPg",
  "key32": "5R3HQnDm8z4dmyfvoKXiGX1H7nAwWR3HoGYLuAczh3MCn5qy83FDr3HSFDQ6yiHCHZax9TNADaFjnoC58quj3oGm",
  "key33": "5SQn6yqy57wDqy7nREQBiX3grMxiMqhXJotEY6MgZ1YaHuMjBHS5cUmfBFCHM2NbbvKdGvN2syjXiEpdmNCR7MVQ",
  "key34": "22RooyPK2E9aRwH2WL2xiC4G9y5oJM1T85q3Pnp46Doci8xdyUZNVMuWEitHHwdeoJdSpdbMjoBGe3UqrNw1cBVn",
  "key35": "VdCkXzqbW8efTzRxvAoCvf6UG6soofNP9RpA4Bw1p799qBYScn11i7VyMKPspdbzzWvjwsCk7FJ8UvTfCU3hZdd",
  "key36": "rhf574qt25fM3K6nzzUBviJtuhMvSYiTMXkNQj23bMgaP5QmdvvDp9w6CNGBC3iCEUULje8KcDVjyTLX8X8K8zu",
  "key37": "G4eUoT9FFA5hvbqJHjVnshbLb8sBRhtagq1RySZNgeFuHPUcvFHXNc3RtFqgLF4aQYomjRRanJb6PMBy1SJjAxk",
  "key38": "2Jq2qkAYwQEsZcaR6soThzoFiatds4Nt86zraCrrzBUNXmsSCh46hmnCWa1kqWjERQ4amCgkj4VhyipKbjiiaBAo",
  "key39": "gxaaYvmgeHFZNqVEuF5gRyzynv8Dmf6LkbZ73fm1uwPwjBtNb8FqUXra1Juk21XMMJaYBUe6rj2r8Hk1dHncXd9"
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
