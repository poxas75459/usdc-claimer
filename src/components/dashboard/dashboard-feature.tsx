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
    "5sYeFipsCEFDtQPXsF9SETDDrxf5R4BgF8mSR4DDJYL3LdcPLZmFgruX5yxLVLFXTH1LwqMtKmVZUoPd5iZrLGEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vc18cqxR2ZdR2G3K34oVd8iYcbG3hgyfAtHjnxAAtU5SrS6bdTcPNDXavfwLRnsW7PfbEiDmB2XhRdmE2sMUbLP",
  "key1": "5KMDMtQr6fmH4E2PE6BqJb3bPQwvWKXkqz4KJyt6YrAWpJLnhDbK3Uaigjk6MpAczqCYP6AgtZQFEfTwRq9rUP6Z",
  "key2": "2gBjpHkt2Rfx226Gf3LMB5rqhKvGDx3W1jKdFGEzF2KMXZWFo9rhmeosXn9zUC4TsCUHi6ZzDtUkwbE4rKvHQRuY",
  "key3": "2t2btfD8NFW4RgmTnWnDrCbMH97MeGmYGGEmd4KqnfZac3q18dTqMn2Qd9ESAhJAa6cpWGJCurbarZwPZSKfeirX",
  "key4": "hQfoCnF7gaEbnzqDdVjAH5pv6CJoAKytTPugUNsMGfS61xSB1hLKg5n5mVrEYtY1xUwWmXGNHssZeKEand6m9jU",
  "key5": "5eekmeEjwjfzHtVvZWgKpgV2vfBWjSbJhW5DoZz1eJspH4NBKnHQ2M1PqTN37zBpEhWiCvHfGxyH74ir8VSm1zNV",
  "key6": "2N3ueCQmmk3Z8SEReXuX53vFVVPgGgw64Wee2szsW1DLtNN1FqZnkZP2zQYWLTX9e8hbr2rzxSASaoNcDUwsSGEX",
  "key7": "HTYdSio1ariJ2bp4WADANCAYnaFVWFbVJLMm6wGU1dum3TQK85F9e3xXnPqFZNfz3G4ycLEKvjakMp9kwDMWRWt",
  "key8": "5nVgsSwatt3BdGQ5q8CZFvYtWpxKoYjbdPj7nHRQMas26ePQRdmobw8fZ5MFniQjXdSEcEw4kzFjdTDMzyhmUbP3",
  "key9": "3s8dMGarQauyKid8sgcvnDi5GFa4Q42Ei4FdpepdaX9QnWz7Hn8aBd4fdzvzdA72FSbFY4CdgjuZ9XnCMwrN9rwv",
  "key10": "NY4xZzCLePQL1ARkwrpUAjrLxSgu4pb3FzG5ZGe1ZdYGtnTxCSQJCzZGTGKu4imSRwb8LYhpDi9FNhWuD29XMnF",
  "key11": "2ZiEJuXS3ByG5UDfS842Bwje88az95QyYr5YKb1J3QLMvyHrRuSCSTnbY3kGSiCoGF6eKYBdXcAyHJMmqPoX1DQ9",
  "key12": "3S83y7noDnfrVKxiTP987i2ijx4b96xgdW7SkwUNwRZfnKskiMEiYohnHbrm8LjHRvQHNZfX7A7mkefvDRBWd8Gp",
  "key13": "4g27Vg7t6yB4eCUDDp5y1fzbMPbLN4ve9ugH4uaprTUzXyeaT5t2sn23S5WiKsbyRMiojZacUHbHLVQPng6k5pVv",
  "key14": "NbKVCebtBD3H18Py8KGi39fDgK9ERSwMbnmV4xLXBhqeUZvMYZCU25i21Brqkhd7pPnfr6DpiK4KuozPqCwjRQc",
  "key15": "4dZ7nUFKCi18YWgFUkfbvxtyxbEZpsszseNUB7o2pq7gAqhX5QN8zBEQy4xJveuyauakdiFhiEjcYP3T8SMJ6JNA",
  "key16": "2Ch7Qcq9fQ8EkiTvPfvkMk4VCjpWNs8fp5jauKmAY1DyEQQKU6z9usYNjaAP8e2MDWQS6MLNwLkZD4mDMoGupa6",
  "key17": "23CYCf5ScBjkHn5dgBETBh1CnooxebPwigvmqDxoxaCebecMAcQpQhKjmzBt71fGAL5UTkQtF7GyfnrFD6NxGnVB",
  "key18": "5K7pD2DJBXns49PAM3pWYReMQudMjVNVMdzFT1NuZtnqhaKjnmD4agocFd13ats4wMZs9RGZ1bH5BeFpjueVqZE6",
  "key19": "4vdvPEy5vbyvfcWYrBK4Tro8XNjcNWgu81gfwJCnGqmQGtNxTvZzG9fZxXECcKXKAHeik4BDM1JuKTeymJAoSRP6",
  "key20": "4Rc8TiPsi2dxJYN83rCyqtYDfvgu8ywEWyYcFYzfQMVWpy8fS7dprTQDWVyxk1u3rnKvxR66VkJrz1zZz5Z3W3v6",
  "key21": "3xxwjTogx5p4sqLdE1jfd6DUeNT3cz98AU6d5CwEvzmN6usN8szRFvxeqsfVxA51gZVXLzgJrwezW4SzyqcgC8mw",
  "key22": "t6jCSTXnV3JGF2pEzr7R6QQfPPx7G1JQkex5LteTLyHJQDdTW7ocbihVyfJRwsBbqo1RWRE6RoUBExSZGitZJLt",
  "key23": "3enhanYoC7uGv3eqjdPZbHLFFDHBp6MaddpDUgMpvT1JwBq4EtbsxmCbFDwrqicuv1j4LzWwYsFQpictS1D4oRWG",
  "key24": "3AfGoKG1o9zW63kSAWpG9EmvDHj4mvJyXMLnnrSmKqMtpDeH84AKaYgFis2R8fniByVJn7EhVJQFw1apmq2iSKM2",
  "key25": "3LkyiUCRjn93dUUXVDLvMZVTkrrq8UHxTcHLWHx2saZuw6nSChVzs6HDgAUiGLz3hDamtp9Kfh4v9Vq7BnYG5bKw"
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
