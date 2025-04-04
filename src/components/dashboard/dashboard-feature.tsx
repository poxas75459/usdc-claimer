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
    "5HzjyYWCbqNz1iVUu3gKH1h4WexUYAWDycGD7XQcdcKr56UEEyHjg5mZLXWg2sjHJ6kRmyeW6PGj82UgvURbBXQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNNAf8DqMNjQeNbqS7X1wpPLgaU7BvFkFFkH7xVVfXW2A49nkMSyQK2if6X9z4iBKA1PyezTaaPpBxMKNqL37Td",
  "key1": "5XQYHCQ6wxvnKHd4c7hCbpeJB9nTHyHTGkeAm7ZmWoE3j2F46Mc9X5FHYSHxhnmLeHvyHB9RatCREmQAXuPF6qvu",
  "key2": "2h4QUTmzfS3eSDCaL8e9oU4D2SUrWxS4Q5xvsbMdZtBzZiEnjKkK99PNKPeB5veShV62bWbSDhzPY8VtWDA9KR1c",
  "key3": "5GzFs8AwtrNTJM4W9ctw3WASkZV5PYj5QWJCkzkARdDij3itdquNqc3ajZYYUdwCXckpe1ZxD9AaW5vo3ogU4okC",
  "key4": "3qwCSVLAJe4em1n37tn7s7DPy4J4iwRxgCfkSUA9nAV3xXqqmwnbky3EKhHzVxWy8TkYR4y3sZkMGYV2ruoAWqTq",
  "key5": "4aPQ9jpdDAx6sqhgU4Z8YUi5CjQQweoc8EJZvjZGxvw8cU1oti8TtWAHSbEoMDwCWRjuN85BtzUPeLRki6iRyb6G",
  "key6": "3dw38NYojpREWP82B4bbHzHkr3cdyxnjLBeuXGeuD5ecHL5wT88b1TFwug9RhPs6MUdGo7wqk2ko4ukpbrPn1oFL",
  "key7": "2dTQzEtoujUyfArr2XhYmmiET46ieRosZu7bma5ZJaTEYQGjoPm85wtKpSCbScffD7mAAYYmusgu48fksCQZ8CY6",
  "key8": "SeCrMJsNzbRVGTvpRM4e7QPjQABqW598Bwk64TSk2j1TkZx7yHxHkCp8GSREstHUXDTYDue5s5VSiF7V6JLLvME",
  "key9": "8XQGh2yT91EeqQtekt42zcaPQw6pJiE5K9ZVoH56BBUACMgKMahyAauNVTZyf4RfCLxe8SdbeMT2ZJJkWi2zaEW",
  "key10": "4JqxDKrvUFRthyyRmrMPc1Dx5nxQYkaK8LSYX9dvkmXkFFvum1LYRWjFxNWgfvKYZ8vn7LDAsyoSQH1HrKDB4zDj",
  "key11": "3VVPeK1pgbYDQ54M61uyvK4xcptPHPU5QQunR2vcNL8HJ23EWAt32oASqBcuyeHiwpKHbeoLuSy3H3r2xbJ43Ve7",
  "key12": "4LkvDpgAJGz8PZ6gvE75MkCBM5EnRyK4rYiS5zRUa7LB2cmh8BS11MbueMkRm3PBtu9SzCQVEFJ5WuULAN1qfFq2",
  "key13": "3UBs3X1fD6EJSgunyErfPZ68frUkZr9BWT6SLdEHnuGHH2NPfwCjg1ebUYuoUi2aq3EE4eXK9PyUqDwVVso4griP",
  "key14": "e3Yf4GHDYKjCxi9q1ugKUcYbfxqy2vPmorhoAk84gzWMCtJmE5WrHMrMjV6gbPRQdUquuCqR1XbJe4scgqHkYua",
  "key15": "2zA1NAmUEGX3snHKPhKtXDXoE5nGapHcJRYUZsrgpFPgtL9WYXkNXFDAKq4g3QcFP61P9S9eqwYsvwLPVCu6Ux9f",
  "key16": "fej5JVMshQAbs6F46p3KwSRx97PzzA936SY5TP9gYHAreLKzgxHm4Ey56aKduPUhTRJbehENAUSrCwP82kEsaE2",
  "key17": "3weAVEBTfJ2SnCE75DbKwFBkCYtSURg8hU7jLXBHVjDyGbtRwbEe7S5qEQqAM3dDGtYUS9kg1AsfiAw2QoqWkMq8",
  "key18": "qdAqaUgetCqKTzzWCN1unpjk96UqoZW4NGJRMSyPsrTUQQC7s2bG74xcxEkBbGvg1zWtJcB7zzgjW3Yodio2f14",
  "key19": "pgrB2B8cgyAy7da2HaCzkVEq8k6m55zkmgx8bg21bozjZkAa95j8UU72MULvS3nno4k9jNH8LNFbrK7myV34SV6",
  "key20": "27Bfrqe1HR6iRqx4PxXCNh9ECriDftLDfGw91D2ZA1CPEXe2HNz9QXrGRuhKF6jyBCBCmVG6ss1MWJAMuXr8M8bs",
  "key21": "4Ay1vBw2bbY6J4nkDaGbAEXbQko3LDiQe33nw8RSssQLNFj3McdrQoAAihX6rJB2wYKgZDhQS9Pt693LmfKsYBEk",
  "key22": "48pYUbXwFoRWWoqNaKuBgg9bZ4dWpovpxAowqhrLejjSK5yutaQURBJvFyEmzPvuqdJvN569w6Jwt7M8c7Zy2CKV",
  "key23": "43uNmeV4yUigNGnUCPid23PCPBBb9hVjk4Sh3CoXzz7G6ixxnAmp3xjsHvS5iNvtJh88J93QB4NxCcmgNehEo8X8",
  "key24": "4TzTMkFDrhaXugT4keZpN7jVmnzmYL9CFDhsYDZLcuiSYTcjkmNGhf1vURd64GsaVa3kGCMawCENeSNKAMWmdffe",
  "key25": "2sX76zjY5WT9sjJ8ukyoGMw9X2Eb8eDQB93YFqMX2wbuk4Rgsf7AEa8GGJ9TMyCEvLzYCmBvj3kHtYd6jaxig4Xb",
  "key26": "21DSHWQDffLhv8zFsEXF9Yh44fAfzgMYXuZGoHGJJNjAVDgDAWNfCFsuzbSXjpHZB7Mgqve18hDFtbZKdcReQYoV",
  "key27": "2CFej9KygG3jEjyVtveXaWMdHzuzyf4MAQRY7pWa7rZ9s4B2JLENWBUmtV75eB3286B1c3rqQR6xXWgD9a763U9X",
  "key28": "4en3V5ANw6sLhcb7w2GN93TGtBAzZ7U7LChaJqzWsPEy4arKwiE98oMy9YWbP1xmEPQ6Xd5qXdrrn7PTWDZAEL2Z",
  "key29": "jP8GSTKFFFCVWRrfLWkSW7woHjajNuFHJ2XaQqSMPwW8nrm9Eo3SsjrFWgQ4UwRE3SMyipXGEC75DjqG1zZcwD3",
  "key30": "2dLoGBPTPNBmJj2AnGDCK3aWbnpo9ZqZzLJq5RTWW3VeTnoc2t77bTjJUCHGB5A1VgnEABjbwToNMpEpc3A1UBbU",
  "key31": "5QC5e746V5VJ8UA324Q2gmcgS2mkQHHS33xCF8uDCTVDxYG7TBLKsjDZURkMiJZKzVs7vHp2baRBgX3hoXNZcRZ9",
  "key32": "5omGpQj9CrcnS3kUzhgmcAUbfEVG67cp2SjoGse6js8VHqdhZ6cCFGuGre6bUZikvSqbmdKaVSfWeVqtZCYRpqqj",
  "key33": "4RpAUDnAXqYavjpBVjCntccrhdX7TxoNtjUxV254EPnHtU5zCy2wmZdgiozQM5qn81EZhAokj1VFSo17cLjMnkm8",
  "key34": "2jmSH8tN4cC8J5SVtW7WReZ7XF4FypamcYpT9qdjsHzxV27LES5MQAcoxUJdPMpxt4jmqNe3D9jwg9MtPHqiH6ZX"
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
