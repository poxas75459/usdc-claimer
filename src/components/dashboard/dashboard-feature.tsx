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
    "5emc1LFMkU7rrxkR75Ea4t6Y9SgTrbKkrQZatHp4MFpaho5atN8SEgdF4qZtz91dJG1P5VfAmJfAsbyQ2Cd5mXHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DTagtzfdyDTsRegdHW2Fvf94JTCyKmozWa4S3bMjQJGGPXogEwqJqreaMSbUX2dHV2Ce6Dy7SN5CKF3kYz6c7cG",
  "key1": "4sjKUyW3GKMfJQ7vPosAJP81eAk2kMUHQufHzs8V9VoDhjtL2UuxkANU1f2gcsBqFNExKysyK7CtnPeAtGFV6RxS",
  "key2": "43YGf1RjPPG1fd9AAokutVfA9jjZLR1B1JUN1DHiB1kx4GUsnRkvDoRRc1uoWWUe2NdKBu2Gkrg6v53rn4H3V4E1",
  "key3": "3r8vVJwtDeanLggrBmUxK5PvPR7gcosKgWVj58xdQs8kWAHSuhUbGhFTbSQJXcfQEkVtQUL7uZMBsmYS728coCs8",
  "key4": "3gFYyDh5LDEFchvoywdLGB5pWyeGkRDe8JcKkkHWAcAoaCM2nuvEhiY6mWvARzkAo4AL9z1taxempXGCN1JVYKHV",
  "key5": "36Y314x9c9ZpDdQNjpBmZoFuABgVNTG2vdzGXD6xwRgYxW1Cp72myvvzPJcEcHvYd45Ec3rYhLDU7koRYeqH2G7d",
  "key6": "5A7djTJG321yQsakwrnudE7QmavHdTJd776kTtct4Ugb5qZh4a2cpiv5UQDTz5we3X6EabzvxgwJG6WFcT5qmafK",
  "key7": "uErjVEbixEVjWr3bH2pMJtRzSF1BkDAYZGLEMBgiCBSXiQd9GnbJXj2UB3n91xcUS7jjeY39wobDpXyq7d6EgRA",
  "key8": "3bifLvit7LPL71EFPYRG83ZmyjBAdbx5hedBYUf5A7TztMWwifmLYegpysSTXoA33Fuc8CV2pBhQaNxqVhpKU7ct",
  "key9": "3TLX75zJEUDV55BHjKaJ2N9yJojCmpEA5tPLd3NuKNz5bwUWpd9YTpYPpKAHxtrb6uLoJStTTt6LBHZ7mqrT9iim",
  "key10": "hUm4zUSkTR6XpBThiRxGXBoVnTT2wuFaH8gnmVbaGnZWM73S8zoeS3KqRhzjTP3cbr9xb1FP4BKr2KvdDdRTJdZ",
  "key11": "3XitAsqdDWW8Q72LN3emX6zsYk2XanSv1zhDmuyg2qECha9TieF14sUnDfGbGZui2vWMG3pvfJTcbNuhEXHMjDzt",
  "key12": "5ZqUwLQAKZTbHpN4xqkEq6ddkC1Hg2pkDixVE3SuGM6k9kZQQUvUveVo2sBEnPN2KwrmTxP2BWaMNpQ5oaqj743x",
  "key13": "8QGDVoeywmdDeH6zi9NXD9rb9Qgd4fFdmdoViT3XhWPrkCGEQuEqAwecBcTohwg4T6ZHvqzfQKf5QdPPk8Qa9iY",
  "key14": "4XzLpfqhEBF3VXJcuacumGfvjogwQRLbjusgMmPjJ76kaD2GA7NRzBkJdwDBwULxAPRJfkEGotfoZDnFbZbAiHSr",
  "key15": "5Et1f8171WWKw17jeBsCikxgprmAnyWd83mmmxdmFy33LSN8Rayprqgp2DTUzdsp93igrzoeCXNn1sSiMzcQhL3Q",
  "key16": "2vHtbVufTH8Zrr5uUkWZfDfmiPLJeQ3RE8oYh1Dgr6JBDDABDwLSDAnF31rMhwE8wdbhXCu3E9oC1FGyNJoZBh1u",
  "key17": "7KEfgJGfCFo4qSBhgVuafeMKbYZsZptV13T7cy7NGBZiomRBd1fB7r1YrajSPWemUgxvGgRC263Nqre9qN8WLFv",
  "key18": "sNUrgiHmTfA1TyrUuvWPyWPyX4aniCB3qWTPW8pzAX4cZtf9wENqhG2RrCuLEiZa6VW8rbsBztZRgDc8iM5voVw",
  "key19": "4Lbf7iDkWWMRvcLpm3nfcjkLNrgn5kcTj2QQeDyJ4dYxBe4XwPFiuZGhLUukR9JrYGuY927cQ73RaGLS29wyS6Kr",
  "key20": "7pGupQS9c2XE5NJdbY1RDAoTNRSovjJXNx4vH7cpjyHs2VWQSEa2jbMxwkuzJ8k46QT3epkV34R3ZQh7shazxy6",
  "key21": "NYPYdLQiifuXye1Gt6JRSLXyBxe1KudSx7FbCdc7hXKDvH8AKsxnq5jY2Le5BUMa7ApgRjG1wgjvc3XQhKFziB4",
  "key22": "2CoNxjc1teNE7CKFn8AFHCmKsRx3MMvdgT3ZXyVs3DsvXRx44RyK1eUy3MRjyQKM4XghSdDBKVn8bvqMY9i7pfsV",
  "key23": "55a9p6ttWknvW12zc1CoTgq6GCigZLjDxh78wYS4QhcUqsxom9JqLdrgZ94xpvhqWGQ6QTa5fS7SLVbsm1RwfeEc",
  "key24": "23zuFmT2sFmSVq2cnQsSHSg6fcqbH3A7p6XJ5eC2DGedvAdutZjAXNjLHuPDvB8GoGVcKAnbWoBbiq2hTaJUgVTD",
  "key25": "5ywFhEthJh2fybtuosbge8yWniKRSAzkWef1eSv4Xuk7b82hmBGaWBF9DSwtdZqnWP6SSftB8RPx7FSvwpTSLLeP",
  "key26": "k78M6J7UFWz6eYvqiX5YzyqavHXAvxrAjELfnMFowNy7PA3fnm9esabJ7YJuJAGyFizjZMCkCDCUPT8eNYWwMAi",
  "key27": "4RyvDxVeJBzgX8CGUkGbNTLRyaSB1iB6NHkRXAJ1FAkHSGUYAHTzzNucbXoSpr9nxedjaQwZi7sRmvmM1Hq6CzMc",
  "key28": "5zvVEAntpNPQxUY477BFijCYDTsgMmnNiqdmDTHmKA1PerYY8pWbSeCL7dQwHWmHeH4AKzEkyANPDMi63NaMnwFd",
  "key29": "2t8X51CsW8wYiZy9L6y3wcCm6rkvyA1gu8VKKKUNCEmJqnJNsJqHZJf7FZLaeQRd1WFH11xe94EiCVaryqPvWwwz",
  "key30": "3TJi6yDjytb8idqL1YFe1FCfCiBfK5wR2qHpUxBU3Co8as3EiaHyYrd23DFumM1xLqiMDAs5VDAbF36pwEvEM5vT",
  "key31": "rDhB4syuorQhws2kvFbxqa9CePNYbje4dVjAVqrWkEw1Xb9rTQ9qwohu53r4i3Z8GzaGU8R2DYk3ZwFocGhw2A3",
  "key32": "Q1NRRCSYcZyQCuegmASLRnJgnoDAaWxUJaBhdfLjKrQz74VXfHqahWEhCFgz9BEL8oXH92x52Bd6PiA81JjsgV5",
  "key33": "31QsuTL6VxrAsRCvedYfGLbGBovhcr4iiFNrbs9DvtXwhSQweLQWk9TtmKhKj3Zwpnz6ZsMzY3Xc7MSbY48hhry",
  "key34": "4W5BxhLJGuWexkJcMPSGUaDjrfEERwfhSseLCC2b14gRqk2r4K6jDXuxe8v7t9X5HHxotPjKqx9JDMBBhndTMNvn",
  "key35": "WUrQaSGJ8rphHsBxsFqC5wNPZXcGStz3N6TPAgRnRyGszY9PzPLLGMpRq1JnscS3zcWZT9dUEq1z6BpqiZGZ8UR",
  "key36": "5DT2H6eJQn1sos16cpVA7gVPpVi2gPJDfUmj86cZFCGSiohxJYwPExiQ1xDYKkiSwS1xN94dGqfBeYbGsKCRtSf8",
  "key37": "3HVgPAiScUucBF4vBaso3Lhd38nGR9h4g3R9JRoUToGFsrzQHNt8cJwyoRnd3MwZY3xQfUnxtodfR4FiYy1SjmNv",
  "key38": "2zgPYvrdYhVSwXkbyYioNJixNbxJHKYmHXyEkLSoKWGuxDE4Dp4fwNBBjMh8WwVQcaiKFysSm65nCyiarvkZ1fCh",
  "key39": "3oti2G435FAz5KBg35xiVKkyzj2jETF6uvUEHp2k3aovS5dZ5uSEjdAkzsUV5mh8SxobE3jR9XgzJrSuc5SPYPbi",
  "key40": "5qVNspmFqFVvJ6A6mkgdzQNSTAzmJLXkRXXJ5w7nL3NCqggGdS1bvmSeUEZDgcCxb3g4eBmCEECuBxDEGoCpbvFk",
  "key41": "o4v4AYKRPEeYEdadsHcUgytRStJNnYwUfC7w6nJ5JLnShhERzzXDXKQT5U6oYqErWdQVguNaeVTFWoHQQerW1kA"
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
