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
    "31sA4foJuPQpQ4efr8mVsmQFsZDsSHfhcct4Tf4HnbiLNyTCrwRGt6Fqk8grB554jx11K8pBuXzMKTp6Fz2URBs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXydNRDx5FLPHRtibt2hEpi1p9jVZsyy9KEk5EZYNxc49DpCdu8WQUNLzGmrxLqJpvDfLvkBr9V38XVbwneiEeY",
  "key1": "4qbxPt49KrGrJeMYQHEMHXxsDj6URPR634nMfUg6PbyR17AHu2pSQJzGrKfYrAsBR3K9SvEENXJMcj4njZrzvqco",
  "key2": "2QZS7R3UFBMYKPJj8BLNELDMHRiWub6G3XgZ76iyUuxRefAtLbVvXzsgkigLdtjdzWKmTfhRLuFeb497Gjkh4KGx",
  "key3": "NC7z5MyibbePodph6tA7k29butjhFuogQPBz3zmQBUqrcgtpyBNUfRAQcdPPcjUz1yugFz7Pd6G5vomtoXm5RyR",
  "key4": "3zRSEwEiDLHzbbxkrcWP9BfZ3BzC9VgaVXcm1uPVzbbaVXCsUrwbLYxQk4ZRjUmnsYXwr2VKhj72tAn53DS4iJLa",
  "key5": "jrxBAUueMdh6c6Sm7ZB6FvUvZ6vorPyVzmdUgXzXEE33cdDqnHFbBwCTUe9zFSe5JpPQv3gbmapm5FDNfLy2QWh",
  "key6": "47tZHcQ3s8HBFRZ6w71opneWchHNrdcVBnkfunECw71YH7LmNi62oZaBrNFYna5b5pxwD5yXEuF7UUpnBmwvuA4u",
  "key7": "xRgvHUFWykUzZkqe6HCR12P69RfXPR3nzBASGUy3EY8ZTuzBeB9nu4MY9B142TbiiTCujCgnBwd6UwKb2QpMSzt",
  "key8": "2432WmqLVTnb6q3tUSLejHpJy7VPMT9iLFvXJoR5PB7qjLxXsnYD5P1BUaPLPGTXpjm942gcjb3tB1tmrN89RPje",
  "key9": "5tBb1YjmZQo9FxfCZvxcyaWEgBjpJUrs1bnDcoMhKQC1qBwoxEMUkKLUF5hrd7PNXH8qm1sg1WBDeLQ6MhYMeatY",
  "key10": "YEhmtfjWPiaupMzaQFGPGnGgd3cfEb9YYDEAaZGGLVQqq3krMFYTGqpW7yBtqrfm4b9Lqy6XH41zWez2yH6GyfA",
  "key11": "6285u3d3eFaUXxkJcHGXNidjZa13d2nSNHsXyN5DFjfz93scE8Km6TnBJ89vUAEkLFEJJL9ivm1KEsDHqPSvqSXQ",
  "key12": "4UaP6JLCDte7qP6U7EysH2Gp7L5KR7ieQ9sZZwY4LaoSyDugtN5r1PkmHQ3iR4NdZ5FxKmH36ijfzupTGJE9rdaa",
  "key13": "LXhqBvHhBruiF5wTmf1gArYm5gaux3WWejPN3Fj2U9dhte5MrAGMuyn2x8wgiQzXJB3gG3mkxbn9FG2rnW7Dxkh",
  "key14": "3j27S16ZjET456jtagRdXaFyVeSQQZ5ieg4xUgPD8b8gr398zpkz2rffS53pnJ7sMQZD2ekVbNAjUHKXQihqkkYb",
  "key15": "56N23xgunJWEWzqvYC4gwBtsm99CZoyMM3BBfSAhWeZ51YjLrQe7CSEW4AfjWL1Kzk3zMQrSofNjgoDqLKkHcfmE",
  "key16": "5YjrfBN8UK5pSnEWyHFTkjcxjokrQDGXUCrsQP2qCYmfAzyDzWssznH9jPoetAUnMWTPVcXJCm4FzxNQeTqvsFTW",
  "key17": "2amDZGVJzzit6DG7gZaXuWM2wT3XHeZNBnGtPV8Z5EhzGYB7KVou9AQY4rLE35eP1HuFTwN1Q9yrZCSEVD1r1eE1",
  "key18": "3pjeN33GveFj2n9eUcn8zWauqBCQyjXP75yvKo8DYhh39XRWCWdxYMTPbstZ1Yi9w4jK8bnXDb2K3AHspSctrQxR",
  "key19": "3e4GL7YkUWrTRuHxJhqFsifbwwKn7bu2bVCeEscbFderpTqnztDx3fzTWPXpLerxP1SAxwm7EAhuXMhiF7ACckhe",
  "key20": "61Q4AM3BVYt727isTWrEHZGwvrF2DveWgUDp6RFNEpomBgW47EA15d99cqnEAoAYGqaVxVMeAphTXErVugB3F47h",
  "key21": "4C1mB243MsPzrJQ5T65RtDuAiLfXsnUowFqBJoFXXPL3uKu7yPj8GDvPZDqNtT8iaVPfuAussVH1arEx9Eabmv1n",
  "key22": "3cxhJBiSjDW87CTfCp6RHiFwgK82CwTx2iJYiwUE86f2RLLwcXWk26KPrYYR8piwQviNYZsj2JrZ5xLUoEw3nhU9",
  "key23": "44YifbdodEuBcebEWsR4ks9fUxd7PYD5Kjfy3Lh21YiXRDMN2SJFNVrx4zvvaGxKFuAgcurDLxFueEx594vRiRQ7",
  "key24": "3GyWPVZmv8xvFMnwD1JUQuRKgEa7qSdeJdR6geuCaaAmDEJEDPomNRJAMbJddBs9eafpsNuvRyeWtVToYcWAyNWC",
  "key25": "reFo62EyBUGdRnD9oWYfZsZFw6XvpKqpcnh3wswHRwrq4aDHfuhboAzHapjy1Jv2sRvzfcBBmjN5PZHe85gj4Cv",
  "key26": "35TGRHfQaWqQ52q4kqWSqdUCVweeznvdVZxKKnDxZXSTM4TZHE33V5MEcQsePPomzKDumCVfzwd8K2s5zMvtvGgZ",
  "key27": "5aLAtGMGgCrdQUyFCURX2rch1UHAdixr74kQuqtaijz3DmbhC5oAD3RS3LNiJCQ5tQgcgkYjnMLvsFZkkd8Y5Wqo",
  "key28": "4JQyAY7cWugci9woeFLWv3UDJnhseeCCNLjmN5CfvatudYzEecFZ9T6XQLku8ihvxkSmksBgH6fz573NTBDH3YZe",
  "key29": "3L7WGedGeCVFpDwKeWJj1gHnVFUR3rPDfcjZquL38fi18bdiPgbPWsTGqEfnsme7LMGaLEm1N8yLFVkafZCYQxw5",
  "key30": "siVt6EzJ7kUmLMHeG1Bch7GFhWrdr9EBGmSDe5ZxrTDgorHgXLRmLwb5Dn2NgSpXkGs2ckgJbJGDbr2dTkJYF1n",
  "key31": "5uP9EXDfgQR224sYfG9dm5dNCB8CwGoiF9RkjnFfQSqLrqCunLhDM91mnJA8NgpsYGGNmxdMGyDMy9uZ97NWiUt3",
  "key32": "piiK5gsoXCeKeA779KqQbjBbQmUXQXTYAPouXn6A4PVtZ2eswedrxurrwYXZr7AToPQZJPGrYGyCbk3PkPZKbPd",
  "key33": "475JqsrffPexB8LgKVv3HCsnS9LpqC1g1tUhVyW7qQcnBGrnUAJ9jMPu5ySVGtTSAQmxth895ZgWFiRWNHNxn5Zq"
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
