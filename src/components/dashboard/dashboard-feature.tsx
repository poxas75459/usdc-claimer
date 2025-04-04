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
    "4PZkTMK13NmaDJzzKq9R9YUHhXzbishVbrJwFCE8vrF5QBRictga2Hf3qVZib4b29R7md8REL3EFHK6a4BCF6Gqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svWJBTytr9pBfo1ZBW8nVg2uFH1g4RCQiuh76wrjx6t8Nh5ANEvg7EE9yTkEBccg7pwb4HV4LurtfjNeRonehpH",
  "key1": "4w7TYEskqMevJMcSjD2vPSAcTQQ5CUxjvfXq2i1sk7Hxb8cqBLeFPsRZRsEwyzwsPzVzePDF4foBYoAGHGGrCV8G",
  "key2": "3ATzQS5Dn99C4EfzeRGbnzygZnHh8XNW95Fkc6Z5B7WTHMGaa1cj9PVjrTeN4rtFZ9n2S59fiwMQDbRx9wd7PJKx",
  "key3": "3jKtSNpj9J5J3Wqw26CUxqvbZNsK5bPT7q3mLv2jKVHMdTUYf8ppitGD6N5gSkiPEHuWV51FWXvNRymzjSq71TbW",
  "key4": "6vT1arxUFoXB74W9BB7FGx7qN8wH49pSkPAgjfDFCPToceJ9gW49MyecWtEnj6YFbuEN4oo9e5exTsuCAQfpTBQ",
  "key5": "2QPK51NsrMgpy1451kLhwwdcAQDe6cCfKKFvRmLhkEB3a5aGAjUnyx8yNDZVsps6f7cb6tt9Ydrt6vLMBJr4Te7B",
  "key6": "2knnZRozySjza6z8PTxATRpGfgfDgqc4KkGVN28w4ry8in7Yvh3ojWUAZGcJeWqxeDCbYxA33vNZvz7D9sK2RSBN",
  "key7": "3WnbVKqdQfWg8mG5GnfUzJCRmLU6XrH7tWxztEkaCs9RhNzajHKkT9MyaxXa2XvVcPfc4gXZMVpNe6kBxFgzHzTo",
  "key8": "2Nyb4c3XCQSHjs5Z7ik65352RWYxoW28AQocCBt2rL5mi7XdE7iJFoPgFQiEvPGtS94TzDTKTPtZ2HnWPHZpMECc",
  "key9": "3diWK48dLPdSwefmPMSkk3tpzwsD4Pwz6eVbEKGM3qtT5Gnoss5u4zeZ1pLtfYCwbSQiHkNWVi95Qp6WJyVHfS83",
  "key10": "Zih2NuA2mF2iszuRtqxAh6EvyfPJsNKT7tQEjSaYFNmjdGVVDfJKkWzmm49ejt2WVWYPLJu5ispYqGwYtHRa3Ww",
  "key11": "46TZAjCF9KQhXFTEVpd6iEyDojeSA4oDXAXi7aejJVgJjZnTWwJZwSzVZTJehawxZsnPkQRh7fSRCi1QMY5CmWMb",
  "key12": "rZTzecRiDBEWoX9fTPakY2suqv7AtdQMF4gyNfQZDstYp3KAK1j5mtkQjovRmFnngbuyYamxCrTkesCHTSs4hux",
  "key13": "4TqELuiFpKQDDdVBkA9bGL2wkEQoxVVhY5q8TbHQ4TY3vAAM1T93RcDpznVa6d9ActhzNQZWSbGDEAL2cWrYUVoZ",
  "key14": "4RL5BknYk9GfYd9BE3jAtcugkjV3auMLpk6eTPVFMn5SH3Ef9BjxRqgQjVzjvSyFifAC4UQUnD4wg3jpdWRsNp7T",
  "key15": "4THb66utEZwSGr7uGbeiB33TvNGdQF8VtUGAgFQCJezLmnTScLGVc33PVw5zjX4w9r2CJMmWNJqCZ9ZoyV2R4f1c",
  "key16": "3nEkgkWB5ERE9iHwPvpS9jrAdzX1NpGJPfis7XEpDAdTiQMonhY7e5nMVSgwCMPUoGrYc7BoRxmR99tK17hmVDCc",
  "key17": "2ThqukThm4UqkZ321vryjZiMFY9JnvPVgqWZDtcXfo2sauqBb8qGG3Lwautbaq3ByBGP7JcHRHUn7XoKfKo9hSqG",
  "key18": "44uq2HunGytMyJitvrRd5ZQs4H7yB8SWW8wE4Rbm72vBZWgJ6kYBzdjPuguKyxaxFaerJJDr5TQBZ2DLirFV6hc7",
  "key19": "4qhiWsV23Mc37pNv4WebvhpyG1zkx3ycBa88vzbr2CA9cyD4frXEFngg6Xj64sA1zBbmwvEVooX297e5KGwCzn6a",
  "key20": "cMQorFmL3AHVwZeMhFQycHKwvrQ3nQpvUmmyibnLhYL2npihuAB6e7GUiipHdcLC1ZJJ17PKjSq3ZK8Qnz8nhBE",
  "key21": "3HVQ7PxzbrouxJHPM3hCfYaFbafUVb954JJ5LTajeVFY4Y1PTTvC5yW2kYLNCor66tkbf5qK8XJAP71tBYGhY9qt",
  "key22": "3CPrhzmxRnG1WtmtfmUNF9MNbJws95fXvUi75tq5aLR1eAgyHn9Y4rQJqMG9qSk3Kh5bKjuzwuExrXukVYWtPbVu",
  "key23": "49eDR4zL5VkVE95muPAERxJXmDDooE2e8hvp46iaRdnWk3Kia4sLXMAesRAwFhcccst443J6HjXoFnfwG12paki4",
  "key24": "5P7xcZkhMb39dC8SsztcZHzXWaxguQYjsZBnm54Z6Sf1LJ7A9Fm1CwQiPu47mBgLjxe3pBPDGL7FgZyykBcK1ZDe",
  "key25": "51Hvo92gXNcDVFaezUSE7pDFfAbLKeShUnZwvHfpoQA6AtcJybcM3aHpzVYCxBkLHamsFW3DX6uPFkeUMAQ5fkMR",
  "key26": "5hgBswSdE2HCAcP3zyXZYA6akJoe2XV1nN4NHQR9t2hY4EzY6FgLCTqSuWU8BsSG54dKRbBcJN9zj2rSj1SdY2zg",
  "key27": "4q9BCMUacuthXSZjp7zAt77WNKrjZzr7bVPo21UtQx4pNWve73dzTQbziHRqar5s3jPghSS9Gf9Pt41Q7z6Rrqzz",
  "key28": "3iHnAxx55zS229Hj3SKw3Myjc9TbqKK52hP7jC7P7WxNwNZfuQwvtMsD6Ym9gi3gZZhGUxna7362uBs3iK8QVwEs",
  "key29": "634KDsk9d3poGJiFVm2cJH6rSQJxcMz6TJAdyRwtDtvXs9qNKA3R7cgmAk5TgcNE7FCrAWqpXhKRZwtARi8SgepH",
  "key30": "3VZ7qy8uHX4k2WfZk3J1EXikojsC57yXDoTBrwn2NoBuLWukiTzbvxbCBjjDyT1VenF9ZRx313qo3wpbRqAELFzQ",
  "key31": "4pxfNM2XNRXdegU4gzB2B8sXYahMLohF9cXhr47XtKr2u5RrPT5Ru7WRQeUYVrwjg3DGa8yoQyHQQmCNgvDu8kXS",
  "key32": "2xQJXrrL6oeHmEvmxRtkyY5TCRSMLuKsMKUNxb9hrM9gAtDSE9NtoAg6Pfb2Fmtoupz18bedqwhsbTViHfcXd2FS",
  "key33": "2NviLnrrhiyKCkSDhkYrS55s54Xaj821kUcmtSjc2G4uqkMAnC3iCmKo2XUesVeNncELPJD76TCo1Zz1aEECzHHh",
  "key34": "2Qup2fvGF9Nvh92fcWXyXXXEBsZ4ifMRhTgfENNikwhoiARJgsPMEiTgegAX9TpPgr3twB8D6KjMfyDr7CGt4BXt"
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
