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
    "2twA7wmpc6128CvyEtwHx4jseooNUKMb1672EGWnanrKWdiHgRTX55wim1hWmoYvP8Z7ep5kEykn4tyiF5itwBrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62S2Wq3GhuwqtgCVK6Do5dCdc4LdJMdjJkYQVDvDVwvUSEm98M2t2fzCn74buhfZ1CBanYamW26AmMn5jTapsXo4",
  "key1": "5kL286xLTfmRxiGUPoqXNQUCnZVtfutyv2xDXiPWCMNAzvmc1EjGw69ajWJ5Qk8JEgwP9tV6rD7FUbnBXME9hGb1",
  "key2": "2LvN2roAinXeJiYWFmNZQekGthaaJkFXwxTWsRahvYtZbFeTopbppSmEqDvG58HaS6ShFHRZJ3Z91Hj8dWWr7FcB",
  "key3": "mQkdMEd9Lj73SNECUhJkH9V7NPnmm4DNBfANjqQUVW8YUCajZAnPvekGndJYVYQvVUz1xXccm52qZcnkRi3NdVR",
  "key4": "2RLk67xqEw84gMpH7FB1RKVmydFbHricvo1dbkkREMbvQqc84Xonz2WCwGgC6r2uub2YoJDDVVindHkTtZbW9Qfj",
  "key5": "4zLiUbEQ9w9iXNdmzFxno8fqcijuKLqhaYgXC9mntAdLghtsMsuzq3ddJBTVh4gm47KVJv4ogd9522zgdikTZtUG",
  "key6": "5HQDxbgUPguDCkwG2QTrpmgLRPiWUUMhbkumT9kuC1S9XGPA3YhJZNsgyhWxm9mDygNTg68SDVjqieFn774TnVVX",
  "key7": "4E8RDe4hf7xa8v9yZTFb2WMdF8QDdiDbYsc5thW77NAa4wnwnNXvx2UP8tEwtVzf1JNGSEzmSu7nQRnmKTUFiMee",
  "key8": "44i1AWtfMxoLTPKTZPrwq6P8sJUw41pwZvMmAszSo3CVe83UXa4hntpHWW38WCtkGyopsK7SvFzNxHhiwLgGoSU9",
  "key9": "iNknvMToY6CQfeYESPbRaSQeQLaXYmP7iLg2PL97mGEQRgkN83XxFCQi5tubuUQC13WoDp3PWkcKoMMqNqkDZHF",
  "key10": "2hjRaeXsGmbDncV2D1nSkj4y5uCKCJgURwy5ihTadkU74FiVJGyn7tdNCifUzzzaPMcoE8a4YTZqP3VDuDMN3YAC",
  "key11": "3U9NtAcGtnazkJ26DdfF4PB5DTz7njV48hmCf5TZFvPdb98LbmNYw8tKZ6xdHXh1qbLfg2wQmbcYtAsuWVRLdm6e",
  "key12": "59KfjAz73U8dn8ccH5WuFM428zioVUYAEyTuAxzHPNCjqKNaD8MNg39F1t4BoWR2wY7odAEhMkR8VGepbB37sbFr",
  "key13": "4BURpiVzymZGuLvZCXUWUVfr21UhaCVw9Quz9iuz2Q1ExJnaHBrgLrxnsFRXXvLMrf8KrMAG1Afxg2yZXwP3Bmjw",
  "key14": "4K4qpw34DTRywmvUj4u4RASmjwJdhCnmfabDBxCdw9H4TxWzisxD1TJp42PNGYA9efA3ys8Ecc1iRFEbzhotWAqE",
  "key15": "2nHCpnKXr4RJa8bh3rrfC8p5UKS2DQtA2UWR7eaosiTcdjBgW5k1h8KDPN5hbCEaW7VXbgu8GPganzavdYBXC1Cw",
  "key16": "5a8onDPPkeeHDrDaZxGdLk4PcwWnDSgXXnRvKJNNR6XvPWEDkkkaz3rgH1fFhmxg7j8fiA4HwBAPurMdZhZyjaJ2",
  "key17": "2mjonw5nhnoue1krSDM62VYX8NZwESnsmBoNE6E6dtQE2t5KiJ1BaoeU4dLTFu8rAEK7dhQGFsVj4a3iqeG1hnhN",
  "key18": "4LiPGvbgQxHEiDgDNwRfSTDCiLU5mWxBtxuTn3eAZwsqu3msfSREeoZPR9bxur6Y3T3PmSqDzvmsez6XwNZQFmc9",
  "key19": "61Peb8K5UbVVYFB7mSodQXcUHCKZsa2aYty65ZGBE469X89PCuzyy7XAUG8Y8GjJeCZKjH45jnBv5pMiKLNn8Uxd",
  "key20": "5SKQCnpiNDWLh7P1mzj2KfeLhaBhPaAgFNXamGSdMjiJZEZwFC4uBTp8AHaoaagEsM9fu29x1ZEcheDRw9Wc8jhh",
  "key21": "2JKKjCAuSJqMsY5kvkbZjiNsEBPJCgMU8BqnxxS8Jxb7qH82WLTpRA8y5u6VRHpVkMPUcCSihphV6DVKsL1VSrQV",
  "key22": "4Qc6yrVssxXwLumVWXjNae4GjBCieCg8SRFA6U14z8EnPpHaRULC6MGgRotMBSHLny2SYkqXNcARNR1vx2axdhrZ",
  "key23": "3bExVjVSDD9uTJwEjknbeR8bWeSLnrEKuNz6aDhUSTprhDkofrAf4eRTkK6E7Mhp1NJZciQJ7arptd26CoUC4eDa",
  "key24": "56yGBo25xweHtTNrMNot3Z9dY9jtry6X9ivCRVc16JCAWW2LYqxtPZNesBdyeH4Afig6noLLkNj5rDhhrwm6m6z5",
  "key25": "5gUmrBUskvBvT8EemqCipoqPc2tjq5HLEmugcjA5MGcNjr42Db8HZrRztAcLQysW1oFY5J28eJo9qSSsKGee39EU",
  "key26": "ka1UmSwWuhKX7ZBvoGtE4CtusUDtPUgsrMrhw6imqEQ8aaYtMgLqXaqFvv32TBdxMGXkcW5nKdBtRrLbjpMv2AD",
  "key27": "Y6QDhw7BZhySUdisvLaxTJfGQUNEtwVKd66MNSuPeK338oUkS2qdCQivc9J7Sur1MswN3V9pkNVFG8fPWNNCJ4n",
  "key28": "2L3xWuyF8JSUAJRaogRw78En1EgbCKbHtZMVbJ42vFsAw4ES9t5NgBLTo1VVgwivxPbheqBFSD58Qb1s4p8kfLn9",
  "key29": "nBj6BPLqbNCpAxszWAcqiaBKKJebHhW7QVTMQtKeK71NtjLZZUZAS44d9VdX9VVZUyY1N1xY2Fmjyx2UanbyoQC",
  "key30": "3k9QkpVuyWSquVkKp25h9vnNcovV4kCZFHRU8mT3PYVtkT1RrqRfrSfGzC1ecZTQYRqgcUZaxD1YZKuVwqLm3YfS",
  "key31": "5pddxXbzQR5zSb1Y79hGCyikDERq3fPHHPnzii1bwKYqrac2WR2BywdvTjXyMwsxFaNt9JcXGAcFJb5asxVkJdWX",
  "key32": "4KpcuYtanaun81uFjSswh4bjyWfN5TpZEt7X8BqbmuLUdNkqvQnpuLCpZGXiN4KGzavCM2iULhC2ow91wnnuRwUs",
  "key33": "2michr7cc8NGTE2NJv2ekoxBY7GLaFbZL4ebDyL7G8Nf9fek46Chur1weZ6JbEbBM38Cap5shpeEPGwfYb7tZKhw",
  "key34": "FvzYjd97rY5D8NrR9fdE3JSMwqzpcUnnmmRq1x57wDFRVXnEgpYYDVsMP51gCqrYzdZFNPdq17grysHTsdfztP9",
  "key35": "4u2pQXmmAC8JDwZgoJhPQpSXAXWxSkLasoEtGYfU3bXQja4vAftku5DyU4Nrq5xEqABAzB8b1CeALyJRcCyda8tf",
  "key36": "d6MiarvuGXYCT1YibNLbgw5TBtdsxCbgitF8Fks4xEHKzGAa6xvSqbhAyMTmcqQ2PbdZCVpWimkpgnCaedsPFXk",
  "key37": "kNipzebSWdMwLEJfSK1tpkgBemPXduMBXpysHJdF3Y56cyi5ojs31GaH16kudxMcD7FKqxTz8e4rCfiJukBCoxq",
  "key38": "5Kwfowc8N38CF8tV7bawLo65B2sjfELCVGXbpniCj1iuL7hUmDRX4RxBZ6dG1qmRz1NQAwtvnkwxDGcU7QK6AJfU",
  "key39": "4dXq7sGBd7fj1y9teHHxYtJCfNGjhWn8iDMw1CyhCBkvvbrtQrM8cycZvAasLZfE948C3JN4u9W1m8bvaTHKm2pH",
  "key40": "51XfnboUCEqHXw4KFduL5DQnbUcHoL6icTyEsahnBhdBRrhGS8Wm3vSp9naW3hvyjaPUiJudCxdxVJ7LRzFVJ5ZM",
  "key41": "p8Thizm8KEcJxdpwUrTncpim1Cu2BJeK7DbrpqDzpikMtSCbW8kokdiooNCJLv4LYXmZXVHSAP4f9KKTcoMyto9",
  "key42": "iNef52BjPGCdXBRPCTdHVs163R9rXjHNYi58njEPfkMACsjehcsDKE8XxAJXiyCCKVWBW5WgkSksJckyiJn7nox",
  "key43": "5MYim7mmuLbbfzvE2tbxFiB9Asq7TTaTKSSU1sTyLsvdEtEJxUKV9DZXtgpZkeC5FJM8NNJ7gDqLXxoGcRdkZcPQ",
  "key44": "4frmqA8nnaYqV1fWc4KpYJaJH4SQpqujrbCLxDyBhiEQDzfhgNYAWMJFzebFPxcVqcCakyQYEP7o3HC2MvLMBQNa",
  "key45": "tpzKJqA16wbEFDa94vRgzm35fB3QUrpi8eiKQmiYRe1UZhBZCyCsWf2RJemS9MaGYYgCYhrU7fb2RqSzUvj5E27",
  "key46": "5Lvdv6cUpsVLSt3M2pimJXZvFFwDiQ1YQNovGiUJnCaCg9gGVX3o3NUz8QDtAs1QqjZgTqh8d6gw3xrC2ti9AAdU",
  "key47": "4MBBws89u4JgGAoXVha2b2YuGBvP9aAUrjqW5WUtacpMt65JDYbN7v8psXdMk9JpY5xeewme9FpKxiD1bprv8yCX",
  "key48": "4oNHPpK72mGjWM2tDyzNRi5GaAViQKgqnLqpBFKD6iXKtv75ZGXcKVFR5MLz9cHseysZuEp2jdFHMLPKQVaCaosU",
  "key49": "3ULhmNQ9h7pzQRwR5eJBLmS4kPvzKLAJRt8ix3YZB9dfrwFDWp6DGXTm89pBNCxZLvd7JoLbBbZNsvb4iWgPCjQz"
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
