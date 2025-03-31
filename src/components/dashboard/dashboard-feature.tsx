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
    "5LksMFY4p5hxGwB9KsXwvc4iXZTyG3gEYQqRpR2gPQSbUwca7GtmLQUqLopP63u2YeLGBsKQunzAUi94qv8GtQXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyph4oXg83jbC1ZS36WCpYGqD16zr59b2yjB8BrBtFwdGb1T3qo7C8Fbn8uBwcRnhb9oMKzh9sWqGurnFhVvPXv",
  "key1": "58xSkVV3ztjoc6qki4Ugunab73ncYe6R2JYvz7jcjeM555miJ8tmY5TZLiq9uzKUDFVEWpJWrpb2FMHE8VRaemgQ",
  "key2": "4u39UYCjjfijTNySWe8ykieLDBs9arFqAAWghwPa5mCrx2hpPUKMdvHRbQvQb3Q7wJVegSjpaLRfdrg1kS5NWiog",
  "key3": "3qVQpVjQW2Mi3Xc9WRyX6DgRxqboTghoKhf8t9QSvtyfDk4MasjDhfizydzDdiv278JcpkqUpmsmr4UQKqt6YSik",
  "key4": "3nsPcuqQKSxVdbFogtiSpx7BoQgQbrCVJfs2Ss4er22dHPZZvkv2jmuqERLZhdCkhxx1p3J5a4x91rQU5fyRYbyq",
  "key5": "22iHKZycW6UqUY9igi8W2jqenoeap3GbMQgUqkHg1DzzETm9fFbF9N3KXucXUGVYUXZMZMVZKVBg3zu73BFtZbZj",
  "key6": "5ntANbU6hSmpwM9aPHzc8vQti7n1fEDX1mhFnRkfrexqqN7QHyh3M6FjarLAmWjCgskuHPQpQF3xsoiu1RBAyULn",
  "key7": "2eD5FMMskjeTJHUpCkodCbQAUcFrsYJAvvJ9ncEZDbzDEwFo67ZVtrbEUDkMi8pqHb69o3dhZZHsUzFry4mjsjUt",
  "key8": "4MJdHVvj51hem3pcFs1v9rGYQkUbVNT7iVsimKkZQ41xv5bRWqzEzZSExeSyyitMXXpjwHgVXurSRYg5YWg1NhaC",
  "key9": "5Zkqb8ZVuPiCwLmZCtqVozwM94ri9xB5fXXfUMprdFsfHb2ARVxn1gKPVUtcaEVnCzPjAotuP2bZvpnBsG16C29u",
  "key10": "VgEAXL62jPs4QWhpKnLN3Dg4nHbi1fHj3P7kjwm3KuBWWkFfgcFswW2fKKEPTisPrMaMvm8YCrHZkezLvvH9B9e",
  "key11": "2jabgfYcQgZLV5KAivyWVoNEZKFQyJrmNJiSugic4zuPferM8ZT9QjoXb6imvRutpZ1jcnxE8tFZgSEaa6pF3tmw",
  "key12": "3mYknR4izQJZBDrMpiPfB7kJ1peZ8BDmSUwuXbmwtgaJMzRBt6coyoRyuBcgceCQJ6Zw229JPmY7zojEcX5EqPq3",
  "key13": "2E1vhpuWNvLCLdF6A71QofqbQtJGQvKsiiY9DVroHeGLpzN9XBxiVyXjvsNdJszJdMAEatqkCs1spixhpzCN7g2t",
  "key14": "5kEaPky7YWhCcNGPFAo2r4K5SCxtQaxLBeWLHjqgcg2GRrufdahyfYPEdQYXjtb5tJkyfrNkbVJZz17gjJQy7DER",
  "key15": "4hgqv9XyiHSu9whmvg7L5FPV87Y6zMcT1eWX9kdTQzp8EkejdViLfMkEdRjTpb7RFcsnGC3KQdwmStdKpPcyURJb",
  "key16": "3Ay4w1QaF37jc4cSoDPwXPghX9aBsKVtFAwbT7XxvpFwqbbDk4dkH2G4PWHtefQCpgGicphezvPB29iDtzbqEvvj",
  "key17": "HVVLCDRfvzzgxTfYru2DjXSabSHCxunxDZ3tBXXpG3k6Wd8miEQ5g59wzdo5gCz4BXVXavbJ3ffYBdrhLL5sev7",
  "key18": "3UfP3wW9JXvrxY88HAJ3mWkvfBCnxiMr9veXvZG5JFnXZNwKATnBAgiBxdfinbDJ9Lne3VhgMVFxz19e5Tb6UVf",
  "key19": "2GAYsCWbe9czcqrctZS16Hkxd26Rjn5j2rAroLXU4ctH4EbFafacEyEj4KKZ7LrxMYTKK4fAgAto1VWZN4acfTzK",
  "key20": "FGNU2mPsUEvoDEAxga6karVbRXUCKZgqVvYSWHPkvT9bZhzEs6273k6YcwCkBy6qP1BSNyUfyNFA7PXDX4yzgLS",
  "key21": "5byvq24Hh3XNzPK7wvvViUYxLVAta7TYJHXCBe3hbnmb7vMnGkKmwJsc1LkEvAhCPdkds8P5tTwcdqBHBnCQvBio",
  "key22": "3kuNuaJcGtZfjoVbnPDAkoEr6DQPGfKpK3SKG2vN9g1FmLZ92eVsboNiSSx12xWhwFqJRb11DoSgUYTgvDDHXqdZ",
  "key23": "2vi7WR31Uakkb1awX7APF1urS7Y6HkPc92dZjL5Rp389zj8TD3FgyaD96DUZURdfyM3zuqC25sTGDenswthMxW9a",
  "key24": "2xWT8qYj4vKMx9m6tcRrBke1ccWXPe8UvufHLucAQP1RLWpajnkM2f3qeyGwTdc5mXMYf8Fz5kQLBzHfKG3Qs5P6",
  "key25": "4jAoBAZM5LYQ7A9xtN5jpiwEfTKE8idCj8q3FwJT9vdeonuagYsywDUuvaLyauW3RQnB46Q1VqijCBcN93Z9YNRm",
  "key26": "3M2MP5nzCRBNTDVaFNbmqU6DUVvpooXqTbW2evZo8ZFJKwuW5bU7sRz8uyWwwthZAYPVgjCpZGL2WfKRnuWacckz",
  "key27": "5hGnUQMWzsaMGnSG1x4QZPRNa9i38LPdLQRBMQGukoZZDadxYkcavNyQ38rsy7iWM9TCRMyoGDDqy29oeQXCZQf6",
  "key28": "26NPYURx59aCcTGDaWghEDLZq5FRwpJcDX65Ei78zLxM6ERdfDe3pXPrWkV9TUbE3spKL7NxJfBRrZWGNe3QEMt2",
  "key29": "fwjVSLeBDTvPKTy4dCPMLEfdYeXSifkEvwuQCAUdjCzujckrMFE4fYWzXP5KZZ963tBzhYuzf5XeRQzUZLSEiYL",
  "key30": "F4iLBraeN9n1wY6WbWpi16T8payr9kt234LNKRKRCybBcmURo5QErmvbKULCjYACf5knUZz4c38qBkHngLb7tPK",
  "key31": "wdEZ1rR1ArUTLiYFS5j6NWwB3h3NfDHZ3byJh2Ke1BoS8px9rRekLemKsaaeR5utw4p1octdhb5oUVN4yZJDVjC",
  "key32": "5pxePhQV126DqAwK7inoRhDqFpHaKEYCbaR8FQywGj1TaUQcshVVn6twAp8r689FqDcogu6Yp7YyNsw4UtgN33QL",
  "key33": "4k8nxCotvHZeKDuturgUhX42VGL6nxJsYriDARpqgGT3MuG2GdVRdN6sPnMcp4sTpGHoo15qSS6KECuoUnn8S8xS",
  "key34": "5iZEhYWXzHuimXZorozgBWzEfZCMZ2vaZJFvFLMX5LTCk3fDmnLXS6fFbo8agxwXmZeHqSN2nT4Kd38ZXQPJtozw",
  "key35": "5hR4DqkXZbRJMqcGV8jpDetqzQGc1ZtMoxRKsQYj2MkB2n5N9ZmtU2Rvj6gjMsSRX1fQLEgHrYibWNxqDCGQDMFV"
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
