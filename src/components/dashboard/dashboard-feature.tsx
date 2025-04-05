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
    "5KpzPKUc8ZgFdwewQKv5gvm6xwWnd8LMVrAoVDDQVmYuBjzLeYJz5gEmyaerYazEKDUXgGk3HWfb5uqFUugy63Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sk5Ugo6tARzYPfhAy4BpBSXsq1KDu1YEScwJZkoF61bKv1jarR2dPrLhytJ8b6ML2uKe4yfCV7d4qhBqBdHZejz",
  "key1": "AoYkDBUgo1hBg3dsmqcufhzLAxFWZoXuTS4fpnybZPk6yKFpqWYsKVE3cxuRuQdujynnHcMjQWoEb36gWwE53Bs",
  "key2": "47XKW1goqftdaBxADAHkjJdYLk9VwrhmT4ugZ5mo6z2bTn8QYMJDs5MFr7Nm1BjZbLB7L2KvEQoU7k8pDq6V33cz",
  "key3": "3ZRFm97vyhPXFHRaSnmJeiKVFhui8Z2iWM5BqNiuca4sFMmKjtkGGB7V4Zm1Vd1YWpGwvYGbjbunt6DxiPH7tDht",
  "key4": "4te9ULyCYtts1BT3twtrJAquvAk1FGcXBuaDfCsVmDn5Y5axu827bEJCoSeD6xP2enWWCf9UDRwjBnJCssQhPTrH",
  "key5": "5ZK8V5Jma7gJRuk4st3KFqh5NKHyMpM1JNXV7uABBqv36M1BMeRttGzn4bPLw1UsESvNqAWCcKH3MagqvohiNryU",
  "key6": "32yyEHUGKbsjHi3Ay9b4RwFjfzwSpzLRRAMgqq8RVNuHfMqiuioasX6gKoMfP8FQM3S7jrF9jQ1UtZrqboqhNV1u",
  "key7": "5Tp7mdCUN1QzThMukEtXYfi7thiEvtRheX6ayU9ZzuC56yVkbXTJmWiZssExwFqrmzeDSzgrtpyJtqwSPG2jdq5K",
  "key8": "4Bm6BZXPZdB3bbNbkcnwNTGnhMdzxxCVd9zmruUUCVdNG9QmLiVUUkYSYoxYkjptUk9uKduWity3MA6UPXFUSCJp",
  "key9": "53DKisui1LRboiLgZnxdJpFufaKWDT5E2JJPgCELzNZxe7JZ7L8tisnTVLHksYjqGyikEneejq8D9pZhrTMAxnAV",
  "key10": "3UjwZQQXw5NPSAB6oJcwhMzLocputDGwJXbNZEpnaxDrihoz1NkcUDMjGQtQBm1mSMCm2jpBdYzaoCoMk5AJha4X",
  "key11": "2XYkpWNBDDdVjVKYSKq9v8Qy14915cjBM2f1Qtvgxeoazx3tDDisPJpAbAuDRGoL1brLz4Qy9w8C9Zqht261qo8e",
  "key12": "5V1LTSuFqjBF6bSvNoCJhZQFgCrh7QzvmTDWLWfsMURBfTY5sBhzpE3Cqkt4PJhsBD6232uTN35dHnbXkcS4MKAk",
  "key13": "5sHK7AwoxWwR4r1LoSMvz5ofJHWNnatfoFrQTCkhZGkqFFPRojsMqLWyPxjy57ZEdsZgVbqdJrpiXsXJZnqda2D7",
  "key14": "57Tgzfh4Z4iw1RKs2Pcg9r9hPNvRQwubpGmc4JhtLYzdb5FZVTudpYnLVmNXCYWwyhwsnHLK41hjRSPg26eq7YYD",
  "key15": "4iApz71KZQUZMmgn1gvUbvRCG5C6hMFEirHjW6oxGiK6deY8t1ESWTwimjMh1kjAmHNdaEMvrNjf7eHQLF6StTK3",
  "key16": "gryVj4AKMDHx9t8Uqtw5uTmwzbDZRHsmmGHEFH6RB8WVEKt1kh6HW4cVNY6d7tXikTm9impwR3f7sDEoofT8X9q",
  "key17": "2REya17X4Js8Fa7JXG78Y2H5mMZaP48D4ArZYCYouFTpiMX96kpagt7YcGaWLdn4xsUg6KMSMkQg94B6JXX8YvGt",
  "key18": "44XVzKDKGbLRV4unkTBhsGm7BTS2gLAKVz77Ah655Yjrvgm2ZAtXBNnbEMKb8p4WUCVm148NC4M8ZgbaGFkqaJpU",
  "key19": "dC9PUQsBWadm6hm8PtWU2kYYQxhPS91CeYR5xUSZ3paS8s4Q1yjxDHF3j8bqKByYQrK2Z3WJPyMbeGFCNpPEt2E",
  "key20": "4UCPQiPQibAnT1jdDSogt4secKd7JnP9cG9htRF7e7nHkmGVrZqbuLhSQ4fXmVLLLnWTS2tMUBPFkyPA1v41XhJe",
  "key21": "57RsQpznAuMEoTffX7pFDcV4RXZSvYt38v6oJeNhd7frA9qh4UmsUaoPQKCuA9cVrVQtkiFyzEr2dMUYa4m44NFb",
  "key22": "32xXd6iUjS9vTLY4BMQeNCNvfhdVLNUKrwgtv2dJkpps1FvipmebSd1WFKceLovjEEmPpq3EK1hY8B4dn8Zsqt2k",
  "key23": "5v5rhZYyvToLEdQqk8j18RA7oGKuLddDnFjmFsef9wjuLqf4vo2oWkK8AKSay9zZfa23bfYp8bknYJ7yteP8Gx5e",
  "key24": "cvyKjZz1gJDCTHGvrNNNNNPrin5yzBi7jPEvXmVhKoUz1VYGPWDJfg3u3sjXtTx8crTieBhEAYcLf48Qydj93aK",
  "key25": "3X9xZhZRGySp4gT2ufcuT6PjrWKvs2euqrrSWu3bqfWXKhjV34Qx6AUhAH46C17FNDZLW5bRQHd5AtNNn8ePuZ11",
  "key26": "3DzH1RqBWV1UTqhBQtg3EweUsCvVeBLPnUeU6oFt6NXc9sFf4KxafYyXiwWtPne2r2Q63LQoSJBvW6RbZ8gJN4WV",
  "key27": "4eiz5KCHkswLYddjz5sc6SEpSe5WZVUK1JRAwsTU44S3fdFsyigSczhSbnopj7vq9FqL9isCN5LQRfWsnQ85or8k",
  "key28": "2HxygRwp5FbqAjpY7Tm2cgB8kpAicQ7WHgiWxS1P9jS4yczm5ZTFUTcChghhG4Nd2o9Pr4bQoNRymtkdfW1cBzHz",
  "key29": "4GjbDLPA1c8oSR6wQKsdB6CFzeFnkDc6AGurSJ3gvnSerqbBsVnanwkH9iaAWBzmEan8AvwuywFFoShyUWgzX6TL",
  "key30": "4KMu9VqzAM6mZvTNkcoGM1gSJ1cPjnYMzjBtg1yeUAGBMhX8ecxo3BNd7g4S7nc2rsQVSnwA9YGAUeLZ2nn6BMPE",
  "key31": "2C1n8s4URYroJZ354HnsCdu34B6i4czpcZew9nbJPssgd6X4n1ebenwic8eydXPFZ3sHNpQ6Sy69KrVYMm6HZPXq",
  "key32": "2qvDp32EWX75Cs65XXPoSspTQT7mFKtqNbcE1HdHgGpzUiJpq2Fs1Bp1tmiSdbXvNa1iVdNrKDrnbHhTUnqFyXCu"
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
