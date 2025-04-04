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
    "AwVgjbnRdtND99SgjF4aE4BZZLipQu2uVeYyjto54hsMh9BPL4aUydBgbTTP1RwqEbz23i7BwvnS4C4RaLcU7kd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aAucnP6BL6zN9ZZxm6MeJyEZhffQZ9fnE4Tt9XWz7jhD3M9T8ZvqWo91rrELWPX6QFr3Uf1mqZSHTLrWewgiKfB",
  "key1": "QstruSyp56SixZaUxTcoWHj5JYmot5NNraXTtcz8nBMABqvxexYjFcij1FdGceSnEj3MF4oj9swPj9sWqyULYNY",
  "key2": "5ZZsmENia5j7mta44UPMEYZ21fSijxafquBz8j1BfYFZtpvQSK8W98HAxm1qrVR2hAUq1YqFm21uZmeiY553uSwK",
  "key3": "4SWWXSMTj79LCNMzqyPqUoiotH6qyN3e9qREFGWz1cyCyuDSAHPV8AyzSrpUiPhGWu4EoZEsQwQGk93wbmRmmzCd",
  "key4": "25QjzkbwpeZz2RBJkgzH7RaT2sdXtnjBcn41naACUgYAXvA1vi4WyaWsbi6s1j6xvhywnaE1d2XpsnhzDX3WZzLc",
  "key5": "5Vog2okGJRca3xsZXTdpsHUDeLvfTG43UkvA6hquoGUk5H8BdNNxS2Xwdu6LbrEfnszanndxMFmZb4MGhTsXk4p7",
  "key6": "3vTBzSwb2ddJgkSp99WDJjFQWXtjuik5zk26rHJKjMNyQjJ7KYHRMqH3jqS1ncVuXiSSRJGSqeYVnNAe6nH8kuQ6",
  "key7": "dPr1Y1i7W54kViGLnrgp6NKSwqBNNQZUFfe9wDdcjM83UZRSpf7gqsFCc1Gzo9uGnkjDaMtM8xXBa5UcQDXLnze",
  "key8": "5bP9wDnsofEtXnMnKD5TWkkR223P8N9evfLKfxxPpEKWN5TWpFqcZU84XmBLK4vtV9gxLE935ibLxRpT5Rqq5VTQ",
  "key9": "4JGudF3xxx6uKDgY3jKchp6xKV9Je7JUX7aPHJzNbELNwqfsbqzRMLZjLZnq7bfPwAoqD2mjDgLTBAKoDSRZsRYR",
  "key10": "5cuZSJRJY1XjgDZTYFdS1EZ15ZVSNPqWvoWiqxoMgvxpTsc6yNVQH8CFSurTULagdUxnDFc71Yi53AEfU8qmNHtL",
  "key11": "2QdbpbPbNrR4DfraAxzWvpnyVhEKwHpRsi2AbstsCKCoK7QuWyyTqN4DWjibKjigTkwgSQ2DhEsTA4KY5ak1Vhwo",
  "key12": "3Tcp7314LdtkENcgyucrz5RbhpYPJnTCCPR72HQHza7w6ucomyzXcDSnCV8B1hfyqqFaMVfG3f4qbHE7A25f4xF",
  "key13": "5SXaSsUr49p3tepHRp4ZV8pLojZGwPosmFSGSBNQnE9vAFYEq1B2nDToe78vb5zxNxT7bQfd8vFnd47NPxEAzbE9",
  "key14": "4utxBni5v5oCHjkTJrwhxPnfhkQWaoVLADXEbZxcdd3rkaBwwmjdeuGMeJ7fUq7FWnv7uabPVK9qFkxoYQzoCYW5",
  "key15": "58y6eRjPQqZ9a1doTnuEDFgLBNY3GNxxhRMgKtbkCEfHQyZZhTcinV76KvCYMNpq5ydb8Sxeamw2RZbgBArENXLW",
  "key16": "4wTNhF4FkHEE96UjSWJNKpcXbb3coG95eJ5AQxHrJM6bPFEdJbUbRaMc6mqXaEcte81YE7ojUMA8TSKS8riU5dNv",
  "key17": "2AoRHDE6NSebZEy74sFVmYxUnB33TqVgXEpTsYs9p4Mf9Ffdxsw5UcoHyjb2jseP2paC6vpiQRe9BSQBJxsEfbaw",
  "key18": "3BhnAWYFr1GBMiayWQR4SGX3xr9cJhYWeHFh4ozWS3jmc7TXR1JBZSvQ6AUDfmTzrzFJGKGEVXSoe2Xsvdzc1swq",
  "key19": "44pyo3srKpJNjt4nzqDMxiVmyoFAfFERoKeHtSzctxGJJoVX3JAwADYU3fwC3oUYW9MH8HyYLduT6ohbZYsjGSUD",
  "key20": "2vmVfNx9nX7c3QEhFtdhai6GbxarDv4iTVWqikCWAWjAxuzeh5VYmaYaKrwr1ohVLB91zwmsqV4rngMycUZ3dSf2",
  "key21": "rr1b1Xc1f7Lnft786QE3iW5zgSes6ZmVZvjNhXum713Ug4Phqmbtw8EEcU6xZkAUeTggFrc3Fda8rxXaZu6Gq3q",
  "key22": "2K34dnVbgvh9tLgzC9xBXmjBdxKtGDexjvvbaJDst99B4p1AtbM8A8F1p9exivXuGBdcw5Vo4YQX4gW3YaCLbKWz",
  "key23": "5zJX1tBSywKKMwvKnL3ksB21V3s4HkMiJNdVVubzUzY54EU3tMANFceHjfy5sKebb7LaDpBkLHzi3MqDngpyVwJr",
  "key24": "N7QjJCfeZwB6zkeMpJNSVREXx1r7Mw52xmLEUggfYGP5X3D776usDjpSXLUfxFanhey4Ez8x1UjqBoJP95zET3H"
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
