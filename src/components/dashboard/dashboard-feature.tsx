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
    "pHTmmu8maDFsPs2st2fCS8U7LsrVwVFbMWqn4iGBEQLCi799f9uRjs7kEo3QjBpsEk21D7YHP5gEAMfPsT1fbeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tRj1xgfSR7nGjfQWcqpejJrdGCbGiee4KCyykHgqtv3d7xXXrgZXVaSpYz9NRijriTvQpdFyhtn2SuAJk2tem6J",
  "key1": "Mm2JXpUZHfBoYLupGLLVQZ7zXTZM1qmKrMUA1BSuJ7ivfhPbfLMgy2E2Ft6qc7cSdoixnB8o37UikwzGcx7NxUA",
  "key2": "2Gtgo5s5EyGWPa331GKh4GMkEw4cZEKjwqqkRmzpHFyj1s3D2TmZq4GkK2H7GNZgNVL1nx65cZ3j6fqDGCr8m4h7",
  "key3": "Q8knCRrwg9NgMmiqNQRN4BLCo2bzNrGk1sa3DnxTNV61GYU3tFji1kQjMK8qwaDAxPSAa2uHQZLx2vC7GL9M99m",
  "key4": "3jfZwJDwjDMnFqz1SVchym61yvJpmdJHQNWMgt81rkqXSxS7iZbUyDDCsGWfcX89fCjmTU2huZ8nGJEAZ2NC5Atw",
  "key5": "42YVhynMPKggT9WTaRyyJ4gaY9mWqEdT44b8a1b5WgxxEFhD8dC4dSCppfCMZQ3G8gqBemgm9r3D8Mn9qzBw1VRp",
  "key6": "z8QWNzdKsZSN6nCQLUv3jWxZkVVZX6aQ49nSRSfeKoeZwnPFptCHVYxXmtrmtZkNF7mhGU9L3H5daJfumLyCpHq",
  "key7": "4ED8GDfnXS4tv6ae4D4KrRkCwBgJ7RPC4msqJGJDdm19g958orHfPRbPzSUJWUMD69Q9rG9tjkVMPT7RaH1BqviR",
  "key8": "4PFmiyZSQq5R5Wa6HibZRUycCLDmprgCLBvBvSHKu3eEizEMjXDUZU26LnmXE8NLi1kV8r3iDDbkrf9AqUxZe5SP",
  "key9": "2BvFWV9968utRNuvuB1WZWKtUQiCmpM1KY3nuYqX2XCE7kTs5UfiL5C8UFnnUz7awN1BzuZ314pEt2MdpWJT3SEw",
  "key10": "2nZur5Q3o1ZG9jfFK3BsX33K8XgdEw3beQw7QTG5DLq89fRvXcyLANPN7qRbvdcVWyYkpj3M21cUS7kc6Q16ATnX",
  "key11": "3vudJ64qc7AShFAzKWLyE6ZuC2H46xyqj9N9fTY2zBGC4xuC5y1j3NFkF9fUN36jfkiT8XMtiQkGnxPyQHVSvtTG",
  "key12": "GU5CkSf3tDabE4SbBs73NFYJ189cu8gLXBZxd3e7AkcttCDb2JVNFLXus2yehZ9KWiMJ7eMWkkhViwEym6w4rvo",
  "key13": "61LstkF1bAosZ37FBDqr6aYhMTwtBSC4xsWvgNi431kfkqa1bxjMiCYfsBPfA1KtDiDK73LxrC9ZL2txwYVP4fU1",
  "key14": "4qZ4C92xVhPJDc6DXgT4CGCjLQ5muVE1j5zVsLR2cp4242xjyEmzUJf1G8mMPBJV7AgUEohTzEH4QB2dMjkno6FM",
  "key15": "wYYv1jg9ytdombCRqwevgKqbxQrt5muZoFdCdMn6DZYGUcuXdc3eZKXBnGoerJSgV4onGhhbsa2FczNkZWvFVGg",
  "key16": "5HtWN627hn17Fsu81A1dCdxUhRYN1X13vdJzEMMoiAqSgh4fWF8rkdhQEP5HkEp3bMNYjE3K7rLSyTaH7RD6JazY",
  "key17": "5JaDZ7XhPoLBnqRoef4JhaMz3MTfawaF9q6pUaWbPnnnzZLVcXQQsyo49Mxn44fVnAWoGanNMCvJBadgMSE9TThZ",
  "key18": "4CjX9UnEQy6qyX4zXjLAViStcoM63AsCqM3zqXLXN2ka4TVU5sxWYaxe5ig2T1bgyET9PbgW6uyR696grsjX8fsU",
  "key19": "QKAyxKVPZUGee6hEW14n99WPJgN9zJQSzacNMKJkJFfAWgurtc2wY3EtMnzCDHCQMno36DoJQ8cEzTw7SAweJZY",
  "key20": "5JY5YmfbUuQ8MLJ7dWHcXHP3N5yL889oKyKUmToB9uQaYtmXtH4ZACgs7M1QoDFFFF4dqBY5j43xMu3CiwYoYaiw",
  "key21": "4LamP9x9fojGWwE3Hgveb7v6fXUPumW3mFtFgG6XKuvfgUz5NSNHTLsXSoQ3EFCxVJoveCehhxQJDvaP66mwzf4v",
  "key22": "CaFQ5v6nTz43M7GujqkTPMmUZuJPgaUSJdBKa5WjQ8w8mUYGq54wHbJQiGAVVyNnMdX7iqzXfDNN2ze34juStLe",
  "key23": "4WMRWMnsR9xnmtySVoxaJ8B3yeohystt1c5BiEmp6HiS3DQ8fj9iSzw6dRsbzbasTUd7JKissqzmJRkB6WwqEpmJ",
  "key24": "2Ef9T7HDta2kNq78Q1Fc3SGy6iPCofSAvfEuSEusNru8n6tKVFvAu2XvMw3ffM8Gq7S6cGwVirnTiYn5jydgEjT3",
  "key25": "3tAjBSyCrx4RfyMyR1rt3Lp6rZmuQUXoguc8VwhYJEbCdhcpqcqrbXqu95SAQg3LQXxFGM6Fa8qeD1eURZdzHxyp",
  "key26": "3JM7fX2TBKh2xv2dZckYsngw7BynZywshKNm6E7NoEjQrJFAmP3yJLUENHnmU3D2epcTwE34rPdWXrDicagwpCyM",
  "key27": "5bfF1ZenYGf3sNPGbA78m1ityUvyxysDqn52ypjkctHuhBaBEqgfiVhuNDFo97BgLuAaNP5RwkcrmD5asuKyiPwZ",
  "key28": "58KD5FxArmVEsR3WuE2YpoGUR44FRtZddYA5Fc8kZxpRrbmL1vgwtKeFBTS3GvaKge6B31bMATRbqXg8beWv5S2Y",
  "key29": "5puYqe1G9fSBhkhujk2Wu9RZuP98mGrBGP8unYQ13HdaVrWhHSToYeLvFBNMe2RhsGhqNdUbpNiGwD6QzBQSn6xJ"
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
