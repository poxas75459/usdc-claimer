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
    "2LBKXcQ7K47811sfArXdPmoLHbX1yitwVemA3QSUqpLPcksuYC63cePRbQfMp2uR4GMjGk8C8mt28aUxCTzVgqro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wff8gQvJaQSQV8NXAGt1skQNvY2mN2d15C2Cp5ETQvtSDvpZRck5g75bcsVEmXd17XDszkvjCwguTk3UCdBHqGN",
  "key1": "5fp2aB8wXczhUzZnRieDYYPqFLqVZNY9RzJTv4Rz7apWPqcpxeLfH2U5QGpuajmCfcdXU9JLrwiNPPfeGZtFwrna",
  "key2": "66KLbTV8PDrTq5gnnJzZqm6tkCn5FdgLfjjvxSc5byRD1hNmVrVRGjpENS5SRsUESVEYMnn8EUsPH9dpm1jBmpHm",
  "key3": "4CAJ3fHL3AaJdYVXJZwGctT3CiBaHfRZMazZPzyouJMQ9ebb3XEp15X2ppaLxXDSN6xgssVZrvHj3PxgyRqR8chp",
  "key4": "41zEEce1B4YSG1pqX9ux7eK6TbvFrxBUBH67CBUGnvFEZ2ZcTz7ExDjvu5CVSH7j1f4yk8aA7c8EXstSbizTNVnS",
  "key5": "4DTViVRUWbTkXmoB8nFeUo53FCa6NuMM9Z9btsGV94xQNRJTfsT1otKnrQd6us2rHoQw1LQajdcgxNRRg89PiY9R",
  "key6": "2W6kEsGeEpCXEJC57NMiZpkqZV6Jev8U54GXyaieexeMUcq2ykRnfpVqRSoX2EKULxGsvsr2zyqSknvkQPGx2mWQ",
  "key7": "5LEoFfEmqXckVSThv5dn71ACdNjrMXVtgDGkT9aDQDqAvupMcns7zQKMN6e3dQhAViCXrKLCcNrZFHuRP7kaDB26",
  "key8": "2Wor7YhxD34Y4zosngwQmG1jxYfsCAdpgq1tEvsdiUMRfoY1cJoGGQ5CmvcSDo9i6arCyeLQpU1Wbcg9Gk1zVyMm",
  "key9": "4wuPV6qepf32MRvtdQhxZq7NyMUhTTUjLHBnHCJcf7CZJt1FknBZPrhfwjMvks3ZW5JEcyssnNAQySR36NoCtUAw",
  "key10": "34pNLKKjbHhvh4ZeWhQXwpJw1WVU62amddS7g6YVjSmmgvXNMZSFMfzEpV1j97RCK2XXBeauZddBU4zu2igGZjS9",
  "key11": "iVnhrhcqbzX4AMmGMpt1SPDbWjuSzTkMHLpdSHgG2o5HAvjLc2SQdzy8BmW4qSPM8pwCjbtDnGvhDMHQhniXjgd",
  "key12": "4VSLaTYutxjdGDB4oHRc5eXew4pvfuFsUmPHmUbY5gB7VTjdpq2kGjgzEmGj72WtqvVYWMdVhg7vqFBZymRfwpCJ",
  "key13": "3Nzy4YpoVSQFu48FaEAQ8b1TW7Jaz2VcnzGB9tkhXi1mJpYSsZZFAtM1RWsxfefY96givW3yw1XWY4vu9JKDZn2e",
  "key14": "4ojALBiUrNfMj4F6LkKAgffoSy2Ezg9sh3B8V31krnCv4jwvz6e5rZMmtwj7tUX9ZQqGqSz8WLLWerKx5Q1CpdXU",
  "key15": "a1s8PdBnKbTRNXexVRQBkb2iyk9y8SsnkbiWfy4jR3ktSjtQfiEZZ525S2rs8Ak2no3A9R9mhP7rF8Ni6Mu3Yhu",
  "key16": "Du2zrabfr9LpJqgw2E2L1b5tuYeyGMZxZWbztdGMXViD6GCGfmLygxgroYVJuo4CFZxdjvxTjqFzkyZu2FzpcVz",
  "key17": "29gisD7iAaUrorn1prC6MhCAnen9vUCcHUnBP7GCZ9GTEwM5gJzYfiVpVBJ6WQErZifn5LM6ENM2ZhQiPw54bsBD",
  "key18": "38h6Nmpdimd4CFGoGfQHXB6Gu7LruyM33D2csL4ZvV9ChSWLezzJWBpnKUJZT5mugDLHKH6tvCBaHThkF4syHvu2",
  "key19": "35HdzSFDSyzXR7jLk7NoiJiNbZnSWRQZWXtHordRBrXLKHN398vFao4oCbg83Lhfq2mjfNTBjUWQJYpuCitWnMAP",
  "key20": "32mVxCTvswDbfiwPpKneAfQM3EHeUpcbZKEUhpTb9JrKDN6RwdYFiNS3fLFy5KBz8ab1jwXEmV4kig8NSxnFVsvE",
  "key21": "2wjzs6U88Bs4NseHqQ3UkyHHcaUTd5QY6PLZutJiGgS95icFV5BF44VRQigyGucAuU2xUq3QMv58tMhmTb7yv1yK",
  "key22": "2MKkaYUAs9MF7Q3kPmRfBoDvygjjgsrBQB8jrsG44Q4pbGS1XU9nox9PhUxjiLUBLwv76NnT7yrSeTr6TM1zg38p",
  "key23": "2ejgZ6n5QUYXaozt8GnoFWUh91kR5yzdHNP482yUspj9G7auEKkwKNP5Xf9iNShoLXEHJj4xJo2nqw2pEHPbQVLL",
  "key24": "247EC82HgDcjtVWkhY5j5yGvAjHTRf1WPCu8LhTbWVCmHd7joVgh3tbw5qC6PtLnMLXuYPWHA4fehJ1XxRnWmFHe",
  "key25": "4af5c59Qi8LKrrYWmNBCwzerVJBFM9j7LPZu5RFesTssaWBf5LpfVW7ecxKNZVxCFnYgWaGKqoqxRVhpZQR5C9ef",
  "key26": "5EqZcnzt3Ae3f51VEmv6kfLNHZfKc4njdxE4LgzC7Tx2E6rs7Z891FdaE44tNTDJBV5yK8AV3kgjM7qH5xoCdXNW",
  "key27": "2UQneV2qo3PAswYE4dGzNLeEMJfZBaDp3bebzm1bT5YdTWoKNcd3dRtrhD1HiwAqYogSRXfssjX4au6YLib5Zuv6",
  "key28": "5HCom8kiP7DBQFjd87Cyi2qunkt5PSEjTHmsfH2jzxLMnEYCv2rmYkqwPB5h2iWP3W7xcsa36jcoBBQbywS1wmVP",
  "key29": "32nNxXpDbZumXJjFamajPnsAY3MMNyLXrK9bijpDiFzzCqXQVMt3RJhTMWGPR2tN27CfE56Xbi1iKwopakjqvVRp",
  "key30": "2gBPZMfi7p8DsQ8vMXZ28mCP6mrDgeuKJWhz1VBqGPNRFtujx4UiVqgqzQJcmGHibgffzQiWJ9tveAnhwi4eNctz",
  "key31": "vizrTz5ZSVD19DHDC6LjJLpgrAauT7yoRwfg2fjwR72DakBHhVg6gv1gNuYmVnjMLDmQMYwXeWHSZidHNzbfJgB",
  "key32": "y4Tci3nzBcCZmMPPHb25b4E5bGLzmWJ2xjiiXU8yfRZYfXQFUf13dCEbBC7xowbBTSesLMxim9STKCMhdHJBHZd",
  "key33": "4EPRKMuKsYxaSPPu184BRDeYrqF4G576oU3h24YU55MSVpxLsRWFCmYndjNQqKbym1LoKMeZk5MQHb2J9tW72vqL",
  "key34": "5veZJ4BJ5D8H7X5MooVKS6CcFgeCSgLeAyw5hSAsnhKnLNukvMrwkrza1npRYXqoyWY2HA2FJ3uko2cew8CAR7be",
  "key35": "4ebeFVa9jjiBqDyPkhqy8eSrsikHHQ3dG8KWyXNq6LLgkMVtbiFuXy1Kb2itjcAgSM5FM5g38ruo7EpuoeEuo7yP",
  "key36": "3iuep8MzTQS6A7aCi5wEYezES7wn5t8A62hnyBAQoLvkL1A9nKv8LCcrwpxuQwC9i64UVDkXYtPfB37bKGXUM7UW",
  "key37": "XyJifnD4p3wYNHPaHz9pFHvEXh1oFdvWMCc12p1u4q4D6GTa4Kz76FS8G76M71iJzLASEZ8swawLfmNy4baTDrH",
  "key38": "2UNz9jen82RdpRovU4WrkZy3vDD8FNCNNzhyeXwtC1kF32qAkWSf6PSKrer6RYn3Kgt29BEs1HY7jkGvuL7PfQ3C",
  "key39": "5ZG6Kg4c3Hjnwt32DAeU4TaLC8cBFX2wTNoECHv2mvwGHawiKaKesKhfGYXGeV5raFNDshRi2NGnYqZgX8wW3WFS",
  "key40": "4YxMKfi2ny5JdNMK73j2A6DjdeKxJ3Nz9Z6BMixCLybxbYaa3h4ALkAoqkHcaLeMqR7gBXauoxKvfjFaYCoPhVrs",
  "key41": "R7gVfjf3b57q2zoh1HuPUp685kAhvb82Uoupo2A5c73SuVziJ1tg262wgaiMz8cyFA11rNbBkDRSMkgx8jPbGsW",
  "key42": "4Fz33PznNG5Sym4WSFsjcX6tjNoKBa6usi5tiQfDpeWqzXarNViVv25Y8uXtmcmUJWEm8kSXEM2G3v2nPjE3a2Y3",
  "key43": "4im7Bre7gqvpz161WqcrjjmtDXJQTocbFKNHryr4zGA8fCEH1wiHrRSSQNofpVtk3Ckws2D5HALWPWF9Vy3iZ17N",
  "key44": "5T1cuqtqZP48cHszpC6nPK96ohYTjFj7hGYDjrMt93tmbeazhohaTMP9okA3wtTkpyZzP9BfrB3rPunAbjDBeRZk",
  "key45": "JKEEujBAfbyKDPHyB8J4QfJWniTAvC5amQd6uusGXXCiA2aZiKSys2HgUUCZsYNVS1Qsjc27jqfRPLVHN8P8CV4",
  "key46": "4dkpcSU3gWTzDaE1dsCEm1NhqeWBJtDX36TY9sTYWUoVmAMKHfsBtMKn43eNJKL9fYU43sswn8o681KphERN7vEf",
  "key47": "4jXRQnPCZPcMCTP5cgHMTdbDfRGJievKnYSH5xcGwGuQrhJ6yNHykxM9WPpcGbv1CcdYjeGz6B4qxgAgEDi4WFkn"
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
