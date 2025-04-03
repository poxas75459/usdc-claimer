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
    "2kPgiK7D6zpRwuJkKaXCuxrMsHM9WaW7TbtMiQN11i54Xv68Vmj6Y1JfDFAo8ku4xWsMGArgoSeiES6XKXDHbf2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7ZogT9qeTr3fBySmaSwBH5Je81pXv43aoFqrfN8r9HnBz53vCvAEJinHT7LgL8tiQQmnAvRYwa152mroGBhL5v",
  "key1": "67qZaYYhwwKXpGipC1EjGxwKg5pHh8B4ob2mjfKpg8UKdopjsDx7dYxFQSvxmnhpdqBLqWrfygo95eShapNNBVJe",
  "key2": "3uWuNm6RCcTgFrdTDvhazQPVgKX3qciYewaJWoAjw5jUSPg7ACu7iWvtDS7uAYYbfNuSVL4j6ger12jNWn924hVE",
  "key3": "5gpCnpLv74SYGsRXfRegCksruNKyCLLFwAdYgMAxXj7vGkCTYhKT3nzP4A1RuQ1hycxXGX3rd5VV8njm87baA8iY",
  "key4": "3HUsTYf97cwiinKbdgCzhhh71VMwFoWcAHizgfxyKr8CzMVgBSF7XZ4vii2BRpa7etLrhc1MSkwMP6cAZuF6DKTz",
  "key5": "2eZDRra9dLoWSB3rPLTZFn8urecdQ1sA9eCB9a8zdFW4L2pt4rWtHp1fQLN8pCSLjx6XvKPFMPATEZiLQBTitz9G",
  "key6": "4MGoEEfcAmzWJDngXSsHBt7B3tt2hnttHMbwhBRQAZM6LckxZaGN5rCUUtGcRZ1a3HhxdsV7zpGxsG9R488cn5rK",
  "key7": "2PNf1uS24HGnvdrj66rPFELxanZynphQFJhitUmo3vB6rsS6Pc19s4AQnrMCTqySCLLEUQon5KCE8KAjH6k515Xu",
  "key8": "3yZfNoo8PCLfsw3M5vp3mLwu2YQxaAxBL5VXKXp4cZyDq1PrPVR287N83VXX95RFy1NXaTBzRLVCLz72qvLC3GTT",
  "key9": "2WjruTkx8SJqfgTBY8RhRTzpRaDssN1mN5PYTGX2fBMZnYqef9KWSfmVQnH7PydDYNXAeZR8kwjj4yDooNQy9SJE",
  "key10": "54w6j7mYgbYRMBHUFncsarFaLkgGUdF3GYm9pffLpB7fG4tN9sTQV2qfhqk7B8NcJa6huMQobD61DTq6WxoBf8hv",
  "key11": "RA8Xh1Znpnwmp4pdXorQzTFvg5Zz6ah14ihfa2G5zgihbT2K2RQtTcKd6ReUqXatnLs2fxP7h5TAwrsdLJTV9vE",
  "key12": "2md8NAv13hmRGtgXVSPRLHZNQJNy7eHBR3ZmbqXqoyPjcPQgKUjFvBEg43pGg7qpQ7ww7Gva4aUii76M1MoSVcNR",
  "key13": "3vAGK6ueJRmXeRkRMNtzX8hbquK5qE6xPLUnU5WaRkSEBC4jXraGj26SNRVQFx9MFgS9ZyLhuGPUsXo3EvRA9d6a",
  "key14": "4aUU5LUrVfqdd5CDZL7kBYGg55QSLZjsJhVhvv5Lem4FhdkdK7pbMhQ8mbp6MpoqdugX2yPmjpq8UsSoZEXANbe4",
  "key15": "3XCYL9uDQUYd44AoeDFfcXN6uRYttSq7YGuUL8fYXq41vAsgg3SwCh6m1KasoZmrMmopCFfSJgDPYWeRkSnW8PXx",
  "key16": "3HmXy2VHBCoVL9xrV9Y7BHibHT7VWTbwg9mHDChCE9ZrXPSmvCF4PQDLh12LtZ9beGpEKc7JAfL4swf4nk3wmy5f",
  "key17": "3t3CP816X7W9tzu3jYxQGp6DXUGpf55opP71BhchKdpG56sMQgEVHczgFmWPvDVNcc5Kp1vEQF6bnbkQfMjqLk9n",
  "key18": "2F7HVpAJS6ScGkXDADxadPmuuQBdZYM2Nh8RirmCd6razgLWjKRENReYXqXA43v1dx9fUguKTvodpeLFP38YxExU",
  "key19": "iXSh5Ty8ajDdFidtdAoQyTEJkDKj3LCbT2KjUixhgHaCMnttcP4568LXUc18TtFVArZxg7NP2BFwV7AHiRnuZJi",
  "key20": "61UMqMe9Zy3Fq1sBGg7NMHz7QbrG1eMWEVB4f3wFmFfM4eRNxMvdspxb9t7jkipfTPgW5u5w4QdKgnttKSVfhRQy",
  "key21": "5AJuDp1azUGbJjUmnRopPhDtJ8Jqet6WvUPB6kafTkSZxX1GjhpEabzmbDbHDdhpPT92VB2TMyu7U4Z5E4ZaazFM",
  "key22": "C6sQDygpTRzJEZLHPskYE5ZcGDV1MUtrKNsofJbAE17MxbZFb25v6xzF7qf4QVef2LFegf3TkRVcKKyHcUDkE3g",
  "key23": "3m94ahipXnHc1ct1nGDUNPnchN9S3DuCM6jvonf5tePYjxU8oZpfL9arD8vRXsfCVaB3uYWtBZaEhDeEL8kCc1zo",
  "key24": "5VvHV9Q8ZpfuVPfDH7wy4Zk2hAxpbkwKn1K8VpaDRVfMSSgonkdjcQMdvierpASkVQogZCDFoPW73b538Tv2fNdY",
  "key25": "5evFj4iLrkqmwbuB1LKkWdQuLj27C33VjZemoeG8KiDb9ZS479su82QTwmfXJm14tfLjgw2oWQnZhZ3bVjqZuWUb",
  "key26": "5BCwSbBwfHdvxiJLGFjeU88WgYeRy21P61N2ZF6m4L5tVjAR8BvBbXS9jqbkPESYkShjFfxL1ELgtbxPyeJNVbxR",
  "key27": "2DUq6pZVEYtvrmT9NdkLGfqghrRsLLc3nQzBwa6VGPqAUSpBGjY9pu6D4B7wu4DqzKtnJBrgBPFraFoRaXNzJwWu",
  "key28": "28Fa3DfgPgir6tJRYb7jWQ1s85aBaDw1azPBcVhvFmQne3aMUKGm7m9pGF3uUdcgfa8RmcUXxkVM3Bd8KUNxj49H"
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
