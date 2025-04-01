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
    "4PvoPN35iWgdwuiv9a1DRcguB6vgV7NHBL6218mnk1NybxVNrBCpFXBr3Ct4vgcdvoDc7VuBuVekPttxVNxpQCzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56orsrX8J1ufaTzsEuchh7wRno3B548fgBAyFy4EhwBZV9UMyJguVuTDGmFHipEqs3wvWnZ6vQ8XeABkJ9CVBsyF",
  "key1": "2yowESzJdpbRnmT22PLRytrE6Rub9MNA3NkDDdZdKKpbGoF5SSZX5BmRPd7CxTSzYhUNw44L38SPN6NuoaVoZFkm",
  "key2": "6oguoQcb5kf74cqXc28V6mvcL7gX4ySHhpjmctL3RaHcsinG34Gjq6abcKuuFo71RBJyVYxWPryr78nNf2mji2q",
  "key3": "3ciZrQsuB9Fw4ztCi7zLfjMejpWMRphaQ1EkTTpekLpX9CrmDFXEfdgG3gjuGCfos9VQsKfa1eUcL377Yg5ZVHkv",
  "key4": "4iujfso2x8whbogtvQbh3mz1TmCq8MxMKVJyWsMiUYwrCwpJut61Pgzr9nhWrcEM5ci3ZqaayU9a7PxLdqzTZ2hp",
  "key5": "636Rk9wvpkFzX6MjxPn2idk7ZSS7shxdwPJ2WSq4iXkfDGHKYTnDQfkuPbd1ihYYGTwaY52AUzsMv5ikAXeeGUYY",
  "key6": "3wEujw5MbiLtAXvMrJZLyYpR8EjWGb6Noe9utErtnHq1u67wvDLteyRZPSmaaeBeRrzbKGiMGNhAvUaYRHzPgA4K",
  "key7": "3NtSh8BW2wQbNdjYowDt7ZHN2Dp6PV8Fj1HL4kgqa9UgymTG4dWuczsMG9xg6qxV7tBH2Sxxamy1abXacUGfVPq2",
  "key8": "2QLo9wdGDBkKmXN1LCFAN9mYsBeLA1ZNYKydCs3oA4eyrzcnmRartntjH8JwWrW6Wp4tAUYhAsP7GVpUE4deZeJe",
  "key9": "wVsvBNNtAAYuaaw4JqVi1FewdsDgVaDxygvk6Yb2ZF9p9b8vJt9H7XKXJgYZZBtCFbRdRoEc8zRJ9wXRe9Jcihf",
  "key10": "2v5xLqW1LRyffnJh1MRfr6c4cHZU12AZQkTVMKobSSizdyatzqTgv8dXnrntkjMQJoVevvCCzJV4xtdLEDBTzTe1",
  "key11": "4dzC7TfCPcB1s8z3xk13xQmFpHX4b7q2q1k3SLE7RBXN28pxvUT1Bo5LvMR9yoNvaEnQU1uzBUW61kPXkcKxm64n",
  "key12": "64Rx8mXVfjGieJLXAgfH3qowDQeXcZCkix5zcGdeibZFDTpUekAvNzS8cfH2fBmap7XwaJFdwUY77ZAHMwb6BvuH",
  "key13": "y1eBEnuEQFaZaJdR7xF2dNTzfA5YGVtrE1gkny8hBxh8N4VBvewSGqcG45DiqkP3tABJwWnWLF4Nka1rSxLyTvn",
  "key14": "3KZ4gZKqKvGkxLpRmdVRYnx33tNzGhDAHozBZveWrQSVSfCgaAbYLXsseBZiwoANHSodZMNhqivicQgvwaDChDqo",
  "key15": "2YFwN4KpZWY9hf2wnFdSXmG6n9YJAqUvasQAFZLRkjfX8ZyzGbJ5iax9DNQQh4Pk79UCqrCo2xMasigxydgypnu1",
  "key16": "39eQX1KuFMgajhWRMsFo4CGWMjZ6qhFJop3Ze4ybMZXWFYekNQNn3ZNZnNSe75ADAfcLBBF4F51JDG8n7WMatKnd",
  "key17": "25MMC4C91Hjafikbfefp9EPvG8UG7EG3XJn5qvJLSVeRwUkAyo4jQz1Njh1QStnqw26ZMwYHsJ5WWDFtbbf959Xr",
  "key18": "462gFaDSEuvx2QNTaeuLYkqK9TXkp1rnh77RnZ8cNpe8NVhVJmTy4H6ogVEaHghzEtCnucc8iZeDzZ5zQgtvLsi3",
  "key19": "4sYVwx24y3WqoZ1PUWB9nPub83uf2EXoduRJCXLptrqxNRyNWJD28mS5bivsgwPExE7L5pBKtjgA7AicdBcG5dKk",
  "key20": "1zirYNKBEnAcARMQuECo8synr7n7pbB5CkjsZozWGxQK1njWTULEVmCL6qdwSoN32eK9BixQXGvde1mE53qdMy2",
  "key21": "42db8BqJe6mcAsV9PzC4HBctmBouK5qoyX2bTsuwTUdgmZyq666K1C7XMPDNgzFSACA5axjuZdT64ehCAA6EaDAz",
  "key22": "4RmR8vKasgfZ81qk4p9oVYV195bDsnH855Cwdbg35fLJZw58WQdQq8L7gFZmfCd4fF85v7TNLcWdGHBHfRBRZxxx",
  "key23": "5aCShpeCSDgqTL3gzSqjFTn4yn5GrEN6rqS6cRFtctWqBgfLH3sncVzjfyMu2udFNVAwqCYJiQS7yLbWFcBsTEzu",
  "key24": "2RVtAPQMayuJiEtiErfcHdcemccvibea7Cb5hVHsmcV9hgGToZoauXz1RGfzisB66KftHGe5E8FFek5zn4JQi9xC",
  "key25": "z2bmJgCKYWCZBJ9coMbRUvQ7MJXogSqye2G2NW5hudvu2aaZCyL9RHDbW6abAXn3ChLuP79Kuz1UGhFb4qvpZtY",
  "key26": "f2d9Dybim4taKJz13kLM2gfWXYBBDLCwn3rsZA1WPmNBASMmJA4oHzQZP4bqBcMsaenh4AsGfDdYUD4nKHxWVE9",
  "key27": "5LJu8n98UdqwV9ezfrEWo4jM9PET6QTZDcBtMEGLG78fwTcfwPQ1MmKs2N5om8vxj7KQbjbmmM3Zq2hatMs6TCds",
  "key28": "3jb5xxVScZESmtSn9Qa1VrBtpNjntj51pvgTUuU5jw7xLS4PFKX3dWzoT7HHK69BRwP6jLnGEfRrS4xgtzERrD8e",
  "key29": "45qDHkHPgGraVQWG5GvJhxgw9GWQp58AKzqca5CDGpSdkBk5qKNTgMu9DFbDGWj72mQPAVU5tZiat8zrAM98fH1h",
  "key30": "44onpF7Zfdxr64EWwtxQMLsJESY7aJuq6UMRqjGNiqoq5t7PPcggAELwaYvh3mfkL9sYkCn76bHoL5tx5FyU3xrL",
  "key31": "4DLCZm6F6i5qBQMa8PXDGgV4yr1NMN98dfM6eCSxyni4qsLbG4MMDZMECyrgnprDvuV6BMLwnheWCuwEzcN2RqrB"
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
