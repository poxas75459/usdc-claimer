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
    "hJeRSJg8weFbrXzGGpsBqzwDkbEmpMXzTAW95Aq94mqBxbr99y1tknQmdqrPyT6vEAMnQWqiwa1AHA931HdYnmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zTZPHJvrgyNx7DBd7sci6ps6BXHhSk2fpV7WzBAxDVpZf4mu7Kj5ztNrgc8KRbu5yiNTbm6vrxcxXwF1gSGf6M",
  "key1": "2QfET7qWQwpv1LUoa5h3z5qCjUDisazvjWjqXaqi2xVGeTBjtXTRX9wuGZV2txeH5ymosJcveNLkSqYTtHw12yqq",
  "key2": "3pL6kvFeA71mQxzWExgr5irx3LVsYrcGsypZ2sX6HCSrmEKqagtWrU5mJ7RdNf3dsSXjV9st2wPE8PTMe6vp9D2B",
  "key3": "2ipbcgPRuXCh6HstzFJeccev7NhS1sS7PyvHC4tkAajo1JnYWQ7G4WgwBMggrWTiD9oWuvZt6wbG3tmKZMhRKPhW",
  "key4": "5CFnEC61gdiPb7G3utp2VFPrGP8EVgQBFVVec6Y8sG6nMc5ZvGb424bkSCQkeHBWAonBR5ZTHaxWqkT9DbG39hCo",
  "key5": "2VtrBEb8VycbZg4C9135WkWj3xbUKsV3kki2uvL9xeGo65AKxMZCSJuYXDpx8D4bzzXWMTdEj7EJNResRmxBDsuz",
  "key6": "2Z7kw22KGW7ecvuK5tBy98nuE5Kv3mKPMsFaAxiHFVAt4x9GL9okASmpZuHMmnArL7qNJgubzbp3cf2M5UiU9UX",
  "key7": "3aPfxPgd6QC6h56sF8bvAdbUdXFWTheSoDB1tbxXYM73X7oJUDGge84BbEAEQxwLxcbyfa6zUux4kbJSsMbZBerE",
  "key8": "twzEJFpSaeRKMFrRoKugi1yPbuMUvg4UGGWDza5cXtRwpDCTft21URwRDC9PzmQLU8BDcjX2oNq2xoXD1vG2uUw",
  "key9": "4hXRQNxG7yEEtjjhuYafXG9EyZKrQX2VZH2vwgQkXeQ51yjCmFrUvQv5DVbsKLpSZuedwG6DU6kDGGLmCsdpA3Qe",
  "key10": "FwmFKsdbn2BcUtXH8qwxsTRChifBd2UeSVcyDGSWwxvtxKMxwpzX2D7xUgcH6bgmk7rCJN7cvR5acWnymsqjz7W",
  "key11": "5ANgcddDHhmtJrrNftges1jwyQLPuFeQA188MqzRBcCBvBt3cULiRnE6gn3qRdMjNMJfpPVPSeXKFxRd68gzJvt8",
  "key12": "ehihNxMzwsGnp71E4LZciPwp45FG4iDbZnvgYbLCcLqBB8Gnt3PSUCujcToDJQdZmmvAurHrZcSrgXVh1bQXwmB",
  "key13": "2pMTnNLLxVPT2h6dkn7ohDFmy2MTfoGVU351hA7NnzGWgPi2Gaz4qQ3FjdWgDne6RAmgwpLNWKffJZ6gRRobtkPS",
  "key14": "578Fj2c9Fk3Cq9K3kwxNZXTnKeTX5LYXUkHc9RiP9MYezb3uWgeF1AbYLnHkMqWjbGs5Pns2tvdaNx5wjJ4WPPwd",
  "key15": "NjTEbSMYjJEdRPaLgUwf4TTfvJcb2e3e8QXApJaFRKbj3379gBcd4dKpVbw7fHdSaK8FZfK3rECahU1doTAJFWY",
  "key16": "eRs9GobZsXyU5iBLvahY3LhV362Q7FcjxAV7HLN1y9Na8gxdcqCyqKvsz3av9fnLdhs9qgodNHZrUT9WkDdZuBe",
  "key17": "3ANkNRT3gtExZqWAZrW1mj4ci2Gf74vCj6XvcNgq7x9CejbXqMH6rm59mBExeUygVxsKNUQ5KDjfzfdQyjVheK8v",
  "key18": "2tG7B4pCj4b2mEkvbdFbXcB726AnpbQ18KHXDWaGwG38MZkKhYtaCJeBsqFurFaWouLpaCVox6G3eRiVgcJ7krqn",
  "key19": "3aGCdq4HhtcgVUmWJWefvXoe1sngo52T8JqDku9x3CCjYV9jbZAGNqvUgfYbTkjQkJENgAduZGMu6QqkLf6CK1yT",
  "key20": "2rtj87mSekvZc2JmBgm1Y22D5mSa22UmXjyHE5waRdCzi6yEBX46BiDWvohdkyzVQ4Kd68H85zK5xKtrKRD9grYp",
  "key21": "4GDpKJg5CHMgNfTaeknQhihxnsD3g1ADCPMghmkRCNRFyWmBL1YMwLtUL9UuGJWXhssm72pdxCDbxdtgx6CobdDX",
  "key22": "43MbhFBQi933ZtdgRueJG6pGcrm7C2wBBjzuXJefCZJqdESk7Q4A6pnm6ykjYMejRUzFDSuGnme4zJe7ghkqWjVT",
  "key23": "2THScFK4ZmJPJ6vYSjK3zgfY2NUCEqie6jdJWgCKsecY7J4wzTrJrN7FKroiAEZu4LLhvcc6DbkvFY8fh2mSmtuy",
  "key24": "FafyfUmKF6UcBb21YN6ciozCrhjSjowwjFAAhNiBCUyoXAQxQg9kuEJ3NvVoePEVoQgaeQ8srKVpnRuRBA2TWZR",
  "key25": "52JQyCpUwsNSx8AcovUvPLnW4nEcuRmDA7N92MuW22vqnahdb4sZr2kKKGWsFbSfFxtSe9ZzmtjVybeLfAwcdN1w",
  "key26": "hCswAZmPp7UnXLaNhQaFBRMVMKXYLvNv2zMXMmmB2zq2qm9q1UjvCbN6p2t5584NXWphjqkPy2sTKhkNrev4ESo",
  "key27": "2ZTFBqxitMcpPgSt9mNcJu9ahVMCVNpjZE4pUEmV97CK4YqPZDvjY8TYhYAHM1wd9YJNaw5DpeiD1YdJQWjLX3iN"
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
