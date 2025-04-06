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
    "4NZmv5J2V3ZPHMnQhmE37XcxAWi61rkBExtZiDAScoKF2658Pj28RuCQZTMjQymW5BHymvTmbAYReKSGLWoAKczF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYRLKGEKYP7AmZpintu2pErhvv5Uuk1vZXGguQvsMeykXaEfDL2tsjZSuggqB3v6xe2KEzdwyfk7rBkZskeALH3",
  "key1": "3wQsRwM9MxvrFkRR241NNXMgZXScUaxm9wzTv8fdbLKFWH16QFKSmXt56nNUD3HdpgtjeNbRWr1p7gdhPntdGuaj",
  "key2": "ec5hDZxxraD3bz9a9KFhFHjauHhrscP463knuYBSTSm8HpGq3UHQK5MtCoR8CJDQepjcJUZZMiLXqexPuP5sAbM",
  "key3": "55oqjqWbebTV5Q6CYTgdn983X1Emx6vFDfQHEYN8EBSU9R5jfSZKTCmzdmPSsr1V4TUVM2bhHR1owNzmMikBDxQr",
  "key4": "4TWVCpJojFYguKaJ9QYKn8CsZsB3N942UVwfvC8yZvwUdfaK1ph2exBHZN7eTLq48PzPshB787DFu9tUXYqRA7vE",
  "key5": "4thKMBQAwUHYMYxYKgTtiRoFkzzbavaXyoR3XaXie9CYSDyxvKjZKMGQq6ciN12zC95dHsMCmNGWRFyrW2FLn4Jk",
  "key6": "3xopwSwPVBsnAAfWCa9AKkGokTLpvu9xerMGqurGPsXULofWRJhPMX9m7uWyZupfMwvSCHBSBSDuxuLXWkmpoYF",
  "key7": "2uRzQBY2y9WEqX1iHUrTribi1wrQdibz4C3reXDfymsWB5jBkyerRzKzAjc1mgBXAwQ4yTJGdGfAUGW6v9DwQeX1",
  "key8": "5bJRGkmsmjCYx7zCHVtHAW9iewREk3vawj6QDQ62DyB5RSwW9jG4JEyNmCd5PUQw2cYSSe33W1qArjQWi2Ft8r92",
  "key9": "3yNU7xR3aX6sS5LXFnRzvZDwSN1yRWcxWc9buucG2K3491Grqou8rEMVbQWr79cXZcYXLo3KooF7ZctbBg45SkiR",
  "key10": "pY1YXLrz974HzKHdrksHKRjuMvVqTt1jEgv6MuukmBbDjKYVMBGd566ndJTijGrUqTvmayRPwvmFVKsUCqpofhP",
  "key11": "3z8tB8oFvnPeMy3tM3RpMnKBLXRzt3Kw2y3EvpsUbbFiABgjppPdkGNJgykMB5RRdjaPdB7hXEfRZNjihkks2XYB",
  "key12": "miRHL4j7LegWpZaaHqyyzCZd3aBUR1UAtM7HofwVTpYNH9qvZ9DmS8K9ZwnSeHbYcdkMfbRsL3VpT6syxtjhwjL",
  "key13": "UvqKGEpB4P9gTZodCjv7WdKQiQ2Brvi3wHJy9f2VnV2WgqbyMXGqqonhryHvkiEJrgyKuNd5KGyZyfVurM2gpv7",
  "key14": "3F7YSquGGQe6xBVn6nm4MrCfUvu8RSE1aCfD3gSujjYHxzmGBcvofyWnQrhWYAsqAM3ryiXEGLdbxK7GURxPdRXB",
  "key15": "pmv8hi4swAhPsqaXKHk3zhxvtsnCNnbv1ndRUVEKnX3imnWwsdREikrLFGhgAgaNrv1w6xNKnD7ckmj5pSsnz8A",
  "key16": "MZ2rwZ9iRbBmmvBRhTCLy3qTWtk8jRkS3ga8aafLfomKbjnFpzScRcRUMfEjxQhHp6irAstEDGXQZxAEaAyaYc1",
  "key17": "4m45csHAmuzAMhFq2vagRA66wXqmokzn8iTUgWimdXEWbvjN8TMrSVtHNb2FwxrvbErLV5NaBGXNWqMKif84zqt4",
  "key18": "2Z1si4BCaSFqNNbYxZwXjqHibNFeC9NhEj3ierZZZuzb1mDV8cFQH6nCqnBVb8NfTig51P15K58U7BCT1Qwvrca5",
  "key19": "2PrgqpnUNgbAmo5mMpN5XWaDvtFH8jua35Rk3hxsUntAQEEG4ccTQoo7fUie24EgcAUbcjNeAt8DMoR59Y54yP8e",
  "key20": "2ggohy83DTFa5XPJx6XAZStR2y12KdbiwYzMGPo1LHbZHjdstszrqL1zKpuP6oksxJSphyWWFe676KrrNmNzJua8",
  "key21": "4KTcTeYPGVLenvT9HVr9zu4THdwi3HJuE6ZyiLroviKqw2uDGHiiZYqfCpEAWkDaMuk5xbA21BUciXpgM6xSwdVc",
  "key22": "3qrMU6T9nrjK7jtf3ycUTkiwPpTtid87KwLFn1j7MFbokRhFMrVR2XLDxQV3dKucDy33FcoxtgQKi2G4yXTUmohC",
  "key23": "5mhRuUk3aa2G4WHnbaFSxbCBonZhaN7eTT2qimcJZH9ohgWV9RaJq2ELzPeAcyRY7eQf8FJyiRAQ8aR5L8BiGE6d",
  "key24": "242a6MVVFv1QeCfNt4Hp5MnwD9mASeY2vxa7vAjuzomnCuJPhixpXMADLBWH1eucB7cgvRfKy7HLZKf9WADpyzEE",
  "key25": "2WnCsDrnxFuAfcFMhbBV2J74N8TRxXqmBcZJyzwCDuyWuaGFVnarjb7mZyEapPyBtdYNUbv4iQ2jtFRQ8dCJ5eg7"
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
