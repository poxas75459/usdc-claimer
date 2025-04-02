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
    "59ZHYX28WQmCQee8iFByRHsAtPme6JQYtqAFeSCCJ59jZ2WnbTKX6bqo1hHwFi2wb2Ekv85ci3avpt8uJDKccnNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V4xFXWb3DiYkKWTqDmYPTjdCQDEJSvyUGW9oh17qCh2eunMdBMJdMgo5WQBL4et2CwJXf8g6rLRYLztRavYwW7i",
  "key1": "ujvfrLb4SEtXBH7aoAwPup1eFHNkmAXsSJrs4j1RZi2psgbwD4TqybQCRXi7uVR35WofKpWjDN8umJMnyLHLCZJ",
  "key2": "4szUEURUQE5r7Z3Q3L3WqAPiHYMdvpeg9wQKKYkUFyGUs9fKEFS1UPwAiaQ6LUyVnFgpDycjDU1wLbFHkgzE98sX",
  "key3": "5P8qhBJRS5xwLHpWj1D8bH89dyBqdW6NXRVxEZ64p6g5uZyp7rVM7Duk5t8affHvTUSCdvqsfoeoxwEcHkeN1SYd",
  "key4": "65CsWVXRVFEbYig5VmFT2uUjp2sR3GZb1zxb9ZCaT1VUtkSwxCzTsBMMpHU7nnC8QhUhVC7JFPENSqEyzWG8PjK3",
  "key5": "3Rr56rZQwDzAbvwff9FWzerrzpYR1RBTafxrmn3dcU7jW1HZF2u7Z7EdXxs6Byd3dLRRH3jPaSiKCBmwxooFWrUL",
  "key6": "zBhWVNZnZyGUw6HuSgRBeRu8XyhefAVwiXPDFbQVq5MJZ1L1EikgeavT8scrh1vTyY7QvifqvhywgGtrjcwwSsz",
  "key7": "2GEzDfYpKEp1Cn31V2cCxHeBw6PbYfKXxMjmPtzA7HfAYRgbRk7xiMFqdFiA7VdcZmhLk145SH1pL8Zz9QKVNB5b",
  "key8": "2wup2EjChdTks72bnvvXDgdRCrQznvXm7c2RWfVRYBZ2ysDPsaJaeZ79bY4v9ruXFYjkHDGqu8dxWdP8GDocrcnP",
  "key9": "4oemFe3G4XDWcFuZVksQgquFSikmQNmLH75HNWrJkohW63TExNwwsdbUjSyUSbWsMBMwTFMUcGwiMMAW5QoPiewA",
  "key10": "2dx9h9ct92oeJsefezvZrXxH3BFeA1Cw7CymN3gKVvA8CJP3ehGSC99P93mrcn1gKFKhVv6SmDiuQZihbcsmVGgf",
  "key11": "2kULL2H61iDcRCrXvzCNVTyJipUfu1wTiCbfVCjPnEfzbpmSGdGP7VGwdqUiuA2aZkuKW3t6Pwf5ijAJuMzYZKB1",
  "key12": "ZsV2Xtbpm3nBLYiajP2xSsTxgDo5bvymzt9H2Vktn64Eu5zS6cDKmsP3bFM1UZTc3LzEabm4A38tgXhVXVGk4vK",
  "key13": "3JiMPDEnRcLvSemACMo4j6uHYnr5eqcU5vufs6jaHxURvrSmjNWqkGwTJ6EuhMYtATHPAzc4seHkRJEzghbw4inA",
  "key14": "4zsM8KMCuTtvX1dQttxdKshbV3xNpwbfj4SjoDa5wXBrJNYgybQSbzci3618BMrdTe7Ua49tcFxkKEBy5AijLER3",
  "key15": "3KKoM6g5v6H2uAeKtLFiksusQtro6j7PfdZ9hwo27xgFzwNtqZcDnUbJkFKJjJ6xqAgDBrpAAXj874iKL8EknZar",
  "key16": "2pw9dfLYcQn8U6ntNQip7ht5VmZxhzoN1hct7bEPGmToGqVu5fJSZFhtBGVxukcxW777A693EbZskrASWELKGbJt",
  "key17": "4k2oEtNqpVW4rKfyAxcBKsc71HZ5spvPrZrgqVS9q6iFZ5jSSKVia7WAyQ4Cg4Cv3ystkLzbymshhwpZqtqUdDnj",
  "key18": "5HNJoeiquFcfEdkESV1dr9P1nNLgLPSR5Cw5GRg1JppMtu9QWAqQjuGKq2uLsTwaWoKniEokxG5b1MH1jV7G7pC8",
  "key19": "3Mn75k6vSsyKScKntMZSQNc6TWa3DCnctyULnzWgrkzA4z6tLokuuJXpFJ8kcma1xCe81xABYim6bZK3eP8TE6q4",
  "key20": "2KFYrJNBdnmKQ7EFR4rYxJCq8bhUU6SjqLpR2ymwbPAZG3eBVrVMFs9SCakzTJcMzMHVzh4SkRSSkg5izj7uAtqP",
  "key21": "3CkKEbx2fBnLJkwNW6oGw9tzyqmVAQFz8viud8kdJGSPALq1a11Fv6eRzw9SuPEbqyTfrQBuoXp85w4vq8ReTNqS",
  "key22": "61BZBrfN8GBfxeVZemCfXv8tqoirm4acKv3vxK2KudKdRytmK83GSk9fZoEKP1AZ3jdzkbFi5PKD5iLXDShdEd9B",
  "key23": "3qpjD61aCsAPKBquqAy3s7iU9b3Dqnf13mEmtpgwfYjLdhuoeEi1sgVtyA31eFPVt5NqdfhDXF1MpgTZBhQGo4xB",
  "key24": "5n836KgrXZAYn8c9vJACKjYwCFphGXSb29AYBZXxf44SqYNWPz8upihgZsu3YFgbV8AeTxHBKihR4JKR8pRDXmfQ",
  "key25": "3Etdd2oaJEi79zqHcTBR1ditm1f5c5ZLk9EPn8e5ZVoqYXACn8cRkECdRVQU7rF5JEKyWWRqHrCmc694BaMZNtcQ",
  "key26": "2NbRvUVb292QBSewjMLS7GL6aF6eW5UGdaK61kBFQ8DWqCs3BFBn5GKbu64bJVNzQE3DhByPGZT1tHQ4ubx9He6t",
  "key27": "3udaNhmuYKdm38GHY2BBzxWrMgRdwHNFNrFFwQY3DLDSRy4HknjpGVXypJGYYfssTnRsKXwTiptmFttyZ8DzgsEd",
  "key28": "qEMaYSRWs4hen3xEe916MVSwZK8x8fa4dZuBNQh2ELTLB284Jr8iUyhs4L5zv7WKTvfFvNMfWQ8gBA2JjYVjZBV",
  "key29": "3Tj4oYyFQ29ZBkwsTWsJcb7HWRJcGbSXXyVZ7KLVomtLJeaNW4t14TiwqYEb2UGqBZfnb2ezt6WXCjQcrNyhZUBR",
  "key30": "5hpuimwDsQGdMa6QhkKatPT2EWw5nxcvhovNejm64dKeQqxWjDPhevxEiD385bf3uGudseBSgPV4KXFAQWi4VtaB"
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
