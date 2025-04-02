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
    "272EGYNeRRoa4pD91TZBoPbrA6L8D39A4kFrW7WLmgoW3fZuGH6ehU1vPi9NeBNk1Ay43QkejJNb72rFVuT1Gy9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yN7fGUKgYVVcnBwUcbQBS24PuBC1YAfUDZnNrCshHoDSqaGnd8zR2U3v3FNDU1YdmjbZPwj5jPE14CzLdh3Q9Cg",
  "key1": "5dpV12qXgrd6vj3EjeRRTkCQDqF35h6SC9Dr8aZgEKeDc6PMwvc1r9xxXzHJKVhpwikGZCtcT4NSYspRD9qW4vn3",
  "key2": "C3pomiM3QZzcD4ixG3uLovsyqq8o5HCWpcqsovq5qWSdLdaUHX9h4VeN3jBdVvsM1NY522o2rVUu8tvZCcEPSc5",
  "key3": "c6QpWEYBzLAfukSYY5LGKdn1ovWV8u1oXvGXhWwAP2umtXhwqDHDFYs4HXTHVmNCisvyEy2QVYyiPj43kuNkKDk",
  "key4": "2UKd4fUJgMvQ5arbkBp9N17fft8Eyc2FA5XxSx4Z1u7enwMyL1mgsAoShSW66nw9MRbctgx4jRYP7eGRKTxa3DXW",
  "key5": "4651KgZUBb8J3V2nrcma8jcou4gvS3kMERZ6z4HErSobeqsDkutPAdLAFJYLDG7zQZQTMfCegK2HJeDtrXg7fkJi",
  "key6": "AHBpaZdEHTzJUMy7BEYJ5hEjTeK2jPDibjtYqoVRp8f6mNz61JvWFb1vEJ5sz1EWMeAYzKtKecxw7deLYFHCVjJ",
  "key7": "Tn51QfT22JZ5kijm1TKuJ33r9VR3deQ2DLAULEJK9Mszt3kLv8Dquar5R4bdumWUHUC5pxwC4HzrWePiDSrGQTN",
  "key8": "3chY8Sa4DS3ZwvnNKz67HVH2Sr3JLuvKv81J6JxhYhr9g1wadRwWEkwTSBt24rfa9rez7fVh3JvqDvYJTdjpybgM",
  "key9": "5Vpx3skfZ4XhHGHP2k6vqq4rntFFNfsmRje6VyhkwYEeQwgbbxp18FSYHDBbhVPYmgF8ZtcskfBRTpXHrXikZj53",
  "key10": "3uT6xhnezM73e9jBDzVu1LB8QsK49deBzywTW4wh3vcFpmEAhqo1s4hMWjQ5MsXGjfdNt2KdFzPNCpuJR4A1xmRV",
  "key11": "5nHa9mcazoYJb7ERwnzUUA2DtCmG2BXe22vPR8GgyXutxBvVmUWgutnBYVuHwx5ibmViSyuYBtJVhPK9h34cKuD",
  "key12": "5L7wu1iTgQzQk2WJVhJG6Xo9y5wTqgsY6BURMuJsFxeEXZn1xQv5fsxmkkvk61wQSyo6pnwdStjmPGyDJyouwgnP",
  "key13": "DLWDmPA8C2DzucbySkfV7rNQPTvi4tQcSe8xLMWo5dY4tTuvpv1s7NQiSMg71XFMLRtkwxBHSnnkFXiUKqgTK2j",
  "key14": "5X8m13FDqHMxWzyA1APGJJwePiTbtN4iqq4L7ziFocrNaMUtqa5EdmuLJBnu9m199Pdh6DJZxK75E5g4BxWsCMsy",
  "key15": "2DxxfJ7hhP6GxUbn7sawFQ5pxsm6TZ6Sy4UcBoN1U3oBBBCh1UK8CymYyu6aLq31tZFMbdJkYWF3jReU2zqhVNzR",
  "key16": "2dMKg4TxnrynPTCU2HnDuf5co2VW7bvMxixZehdjuns4Po92TT9qmKKYofVUiihgFZ3Ha45pop1pQY2WcsEahAeh",
  "key17": "4N33f4U9iJTBHLmAnkh91Vfyo8MNAY1LiH9FtuCFqbCf5AmmjeH7Q6thQqeESJoznN16ayPkJgGP2xgChoX7Duf5",
  "key18": "4Nd17RGtk4WtBxoBYsNaMqWKLvfiThAxKUpKPXfJ1HfqcRuwsHM1Ftq675KXoKCNZ24YbW7u7FNUcjiVhpsBxn72",
  "key19": "G5rAPb8b5zQbvyhYSthqdX3yMfymgH7NoA4xYY1b9oeH6tRPTMjLAy14ZzzouDpQjJhv75FzuVJyMohjfgoXBqu",
  "key20": "4KTwmcHGd9qHzkkmWsGqDnJzJWz8CAJcN5GiAEYFWERiySP7FRhfdQo1qA7MwBcPkSD5PXJCKVksWGC98qUy44YK",
  "key21": "5ASdfxNCXronjahX7xAY25Qv4esRok7s3W6Aj7BK3cXnrCmhTNsARr3jSsUSRyzwpDiedVRhsd3Gp1ARyGcoo1Cc",
  "key22": "qEhYzoWoTsQts1qKBbBQ2TBkhMyhiNGi5KZytX3CQzrF7EnwCKixzCCBaKHpYM1wB7MijgxYpe8HZwgydRd7HHd",
  "key23": "2iW332etiqK7Qojkuo1uXVBB5LohN7nNxET3k8ELL4jTVUd2PRVgXtNdk39QGrHmNoppMbefrSNqb5qwLDzkNwex",
  "key24": "5qpGXiZDgzkiEPYc3TKLnwJNoMfV5N3jmBZCzcXyHEht7rHXCNyLus5xceAsxJn3Gw9Ecgz7iqHhCtngyqxieT2W"
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
