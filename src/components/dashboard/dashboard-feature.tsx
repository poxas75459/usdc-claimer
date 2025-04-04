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
    "4Nu2ikmBwArrrFbyCTCq6Hs2W782Mb1YySAj2DBjwcN7HjS3o7LU6STSx3FKtWfAA8zxDXxb2HHrsLYHspDEuAs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCNgt6Z3DbmgRSHfhE6rLayQZgYr1atAPmiQacdRcnCiyZeVYVpvBaiseLy6rW9kQhUHVd98YGHYm5Y3B1Mqhv9",
  "key1": "4Y4Py3Rbjw2bvDZJoRLiedXQfVnZdgURDbmHC7dWaMEWqBC9Nkgx2Z2XabPxCfxHhweaPEMMXiJ2ydXKQaC8UiUw",
  "key2": "3754U9U5YmM64GzrKif283ECwv57AfET5mbaDLkw3GxLnywuKdmWUb6Miu6wW8zFGoduLN7mowN2XZVFXeXEkY64",
  "key3": "3pZTM2bmnphHP6Q9geQPQC7vojwsKgTqJMEENrYoWMUzTtCKgP7jGEJKf57mTqAx12GMRc7hnhWBEaBmbd73ugmu",
  "key4": "38SVCBKEb2W57Zw2RmxdsEx6Zc5jdwVAPTJNfJrWb2b4Gaasj37RQC3TgKygQfvtqSrtzq9RuxGQhEGhKvgJrXiC",
  "key5": "3BUnnTEVw19rGycmbkPeG3kpVqBMCsi1hRjK6XGoAs7PKAjrX1DgytbvFyt27iHVoGN4he12NFfurpbctWmXGXs3",
  "key6": "3t7mSYANg1azZyjFcLrLjTyXmesES8hP719yWJrm2aSyeaoAvhEnbVd9mJakKWciafKYxhSWgM5xTzQ9W6GC2yCE",
  "key7": "484tXmdqUv4AF2VatLWWkCdkRJmNinuB7GQADEWqV3YCJJrjXV5GC1UZp13zHiSA9gUGJ4DLN4kSKB1c3D267cQ4",
  "key8": "26oVZnUo3ePnGX4U7nVEKLRW9UsoAVMBHjDnKQRJeHwC7ozi5E4G565BaemJJWWp8ypsXSEegG29vi8mj5fkzAP7",
  "key9": "4baEunnR1uiXc19NjbTh9oNSq1w8k4UsxBFigSkYYzfRgUmAJmnwxD2nYPhWcgjmA49AEx9vEhKvEZqux5LawEWC",
  "key10": "4VtLah6WBFpiB7NM1zy26Hzy4v1gq73PyEjRnAkU4xYUCiXhpmgUVU3Xn8yFVjNKQGsR3XF5REgTQQcvkohRraZa",
  "key11": "649jTo8i4QcoS3eAkG2XXrRCy8UH8Y1PdzXgNCWXyk2bfs1PKhb6yPeaZNt4Qw5yz83zePZnQq5iqC33Qy6XzRw3",
  "key12": "2W9w4b1xHUfiL2vEddjC9TJozyweDbwYwczag3jxup8Hj22ceygytuiv7fhscdKgXzkWR4pWPRvzEFDCUBL1SDr7",
  "key13": "3uXJr2sNdihD9vCXYeL7YJPcbspQuoJ6GnB3ECx1HJTPs1EUTVFhuZaBXzdsTwtDah2tZMsD49ETgaYU73zCVLne",
  "key14": "2JeL8X1bFQWmS3wHcH4eNmh74BdXHEXhXAcHus74i52mW6aHiu3WtfrcJ95e63rpo6hGVcmeDd5ycvkZ6MWADDJm",
  "key15": "4AV4gvTkt514xaVQqaMrhrTu7BadWpcuVR1HkVcc4P1nP37zvXKN32dgUY4mafwF8ZwKZNmMvi8aajzK2vQVeVMo",
  "key16": "5xKVHgNf5q5chE5bp5dsJJzTv8zsCdwgYxaFJqCZJhxcbSS8BoX5Dyf6ZdzSNDnLrFBpo2k7RN3ogPetMXqMLARr",
  "key17": "2KyvSoHTWMdzwpbGHLEqoPjkjnTZXFEy3EQKBUELLbHzUbhnfbnHgeT8edtyAuLLx1iWYWGHgaNbQ9TB4Ywk8hZM",
  "key18": "2aVqhpN1uyPqoiwSLeDx5mKob7GpCGrY5DLBoaSQ7P5287ZR1enYYTJqxXeBiR5MtD2ezQrcnzXvyhwoa8cMmfiw",
  "key19": "4EZYQ9dfUdPxMgb5aeiM3aBoVyy2PKDn2V2zbunUbenVQUiGH5ty2aSUTrvfAxHhx2uPCTYBD44NKWbjjCpU2bNb",
  "key20": "2XUCwvJuDHEHq3M6DjPKNDuku3WpiGoGxf2dEujbupqowtGvAU4BsvjqSCmjnRnzWN1oaxxzQW31ejXT8qZcW8ty",
  "key21": "3Fks3TRHy8SvPF1iYmhcLqYaRwcLVu1eJSyRNeYg3dGH5GLsPSnZRbfhatvVPVhPTPokkuPGr4tjqA6VLmTT2QxC",
  "key22": "5hfaXSRTj5caLgDdBn38gVAMEpYnv2qzygk3zJWrA6pq1scarhr2aiUkwP3Whnnbr1WFSryBeiGaxmRjGTJCfHL7",
  "key23": "3VvJd2H1MDC9HNc5ztmWWhAFmNSTSg1fgBxqguLfazEKrgVzhFvy8JfHeRvxApu6U2KxNCepjS1tPHjD6PAauMpM",
  "key24": "57tmkSBgsy6bRUvtFfkJ4axXVwVp1ALAMZYFhdrMK6YBVe8qSxKGwpsWsy9ug4TCADJFfLQkyW2D5UouujeYkdqM"
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
