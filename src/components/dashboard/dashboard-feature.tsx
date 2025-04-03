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
    "3eHJvpFA2Yz5AVEC8JUi11CFE7EfnzpAtppmxw3nRGi6qyhBSMVzqnjxPemXzYjTgKGvu8bFwzKw1W5Kt6hmcFo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qbe3dinLVyKAfxYKB1783B9T8qmv5oTSeFVpmVh5ppNxiJZEYpDjDEQtRWcQw2ysPVQCG4XEm2zeJWQEXN9jYBJ",
  "key1": "3FHb3AUQuBinxSrK1wa8DnpUiHbHhn9gc3AJUrGrZkEqFmZBduHhKRnqjkJiwgqY1dzyvTkxb6KP5q2LWmHBHuxv",
  "key2": "3XTxL2mdyHYovDYbxGu1HuK9ybxzdiWV7Asjh7hSvsX9ra3LeG6eaQ1w6y4CpbPi5vAtzyMdSqG9FFTrgq5UkiNt",
  "key3": "5kN6mBA4LvS515U1Eo3rcJ3ZLUSAD5MEBzdZJrbW4hhedxhfCABWFLhhAn5UwTAPSqt2myQThGxMqGXk7CAyfuEU",
  "key4": "4XKRe287meKN8t9PGVcf2hwajDmq1uNYbAttrNGtMY5AEgVot9nHeB92TCiwckKuHx63s4Rjdw5BtkjEn7mRKLck",
  "key5": "3Sp7eRRY8tCDoKR68ShccJU2UQTfffwUXdCY9bmW4htGXF4Y6TSwKUhptVaunZm3fkGLcqE9UNvmDk9iz3HBEYcj",
  "key6": "4e3W8JG773bAdWUxBhfaBTN9TDKoEBkxMVDic5y4Zxjt4HQbA1NSXdfkrAXictR7NkhCdQr94C7xpMjBsWpQ574W",
  "key7": "4rh5XsYBpcUEkrdnFymFPAdiXJtXFSseEdaPdnQkqPyYkdz6M72VpiQJLWzuutdeS3sbqiQySKkHVhG2xGyMe3yr",
  "key8": "5BCsGCgEbqWgAykoNgd7WYbMEoUnHTJknnGX2vYcYneAcGyupP6CLs34iG2uYCBPBYAPEyX7PqMZTtpUQi9VrnTL",
  "key9": "4apRS3abEXC4BBNpin2JDubpENB2crkKq3r7TqRPypquUjR4FTiowJdHCc65iYH8wPvn87HGYRkPicvB9dmHjbR3",
  "key10": "2UMiE8bcw8t7j557qVK2EQHAJDVq8QNtp34hSqiqN4pY6Swz7k2vSDDXugH2HbqoqVwRvb681w5v4udDbS8j2XJg",
  "key11": "bf8AGVwojzkMkUG6oDzuf766sMN4shwWGcmsi8hgp2Sw991Sx7GrDyjnAoBG7JbkEV34i7CpkK8bhU6io8UUWeB",
  "key12": "3T93u9jPRZy2qzyg62R99oUxNh53YytSY8mPoRJaiMNvU7UEjBb3E79npmFUR2h3RdYNuhev1vvMd429oBdsqdT2",
  "key13": "ZXBxmq6i2Lh1yVFMNHE6UaXf4C2bA7HY2EyNJZcFYFSFKT8bLtKdXhZTY26Vx9Z5RMoSwFVUNJz7sKSBwn4UjPA",
  "key14": "3fBS3muz8ZDjJNiRLPThKrVTBZA5nKJtmg4d28nRSJQZaM6EAAxmUNBVUrvcFFnMkeUwhLKLULGzVks3nQogNSAg",
  "key15": "1mqRVTW4cPG8Sij6EGyeBrpyot2n4uygNofGpswYPNvzmU1fzhcRM6CQegkPDSTEqLPnLPv3AcrgEbgxWh6BJ4u",
  "key16": "XES89fqnyFkGpZ3WtsSAmB7S3xTLuYK73HBzwSbbQkjCHj7dtC2ETnLuqw3oVz3XgCs5xDkoQgvcShZK3CZWsC7",
  "key17": "53c9PP4LrFhAJenJZSRQ3334wmf98sxdDJiioH2yaDf6ME1N4YqhNngNd5eXCwUMnPVCJuek8x9fij7WebdLDCcj",
  "key18": "2DC3UDXZbxuppy5nFZ3qQuPUFDE7SKw2uhrwpxmvE1N4b4zvtNGaVyTCibNruEotR2fsGZz6RWF4Z29PvTGUZR9X",
  "key19": "7Fb2qxuZ58XWhHiWrnz6x2WT7G51dbh9Tkk2Xfkv7B2PzwiBngznmM5uCLc9J9nVAddJPyZp2Rb8BkfGWXoaThg",
  "key20": "4qBXZ4AZgZyBE5zRCrxrNZRxRZWPkgCXSzpLbfNBtEoZXEhxoczmaPrWtiXE3FhZj8qeUrLFRTJxrM6cTVDLQTnq",
  "key21": "5oZFZawqzoaJEsM4QNXjPer36qC3cj9yTHdDJ2B1wGiagMzt37xYwvmMWaaoA3hj6aEe6YWyrbLj2MFjAJryFsw7",
  "key22": "3n28dCaZJGyTAVJknTLLzomKjY6euV6JypT4sJNnzunjfkuRjX2idbwhREn4d9p5vkXgwM65wpm4CcAAuZ7cMrcu",
  "key23": "2ShHGvxaZA9PqdeFiY2esWFCzqrPioG9UZpPEWzBr1Cw19aLzL93DrSBj3gxstPyir64csNsL1hkZwd1etgbW6xN",
  "key24": "5bHCxpJx6nbLJUDneLFAhDSK3C2aHPGCyEeAY9CNucxBGB4GLdNqUh9U4ZbnRHjMzb5GobsrdbSPgdj4QXzhoFyK",
  "key25": "3iiHEYzEan5Evjsj3xZpsmKQXCdmvMPauJTZHMgNnGvvKbuAk2x6EixYjSBMSNJFDb1hC5xe5obeYXr2tKCG1Lkz",
  "key26": "hiiccAWEcEYEcgi3yf5CDrTr1fG3A8uZxgzzruFPPbpqe9kzq31V4cpCYStKKXUuA1EXNdZTHQWoS4bw1ijVutz",
  "key27": "3qfYkET79J25TsosmnBFHhf61rLDPsYMjoEN2ktNH3JN178t8m3nRaa2uwr5JRR8Jb2oqPKMHqQ5UtG3HJyAcHm9",
  "key28": "4P2vzR13Pjq8FEhd8ZfjzFAYrDDRid2YbLq8nDF3aSBu1NHJ7AKmf8h7YP9M17rphuVMb6yaSp5AXYBX4iw7dbgT",
  "key29": "5siq4Lei8GBs52P2YmTafmispTYHPq8URpgfJpMkSiKz3uVcDyJoFhHBitaasM3eFcY73EZuvaUpMtNtApzQZqzF",
  "key30": "jJpDG6gzHstUzjnjdc7Ce9omLgamTGJ7AWiDQm9HecgHFpevEmyR1K1HvZvA7SC3Hhu76t2t6mnvKcZYpK8doxt",
  "key31": "3KG4x6jEHi2PyCp3ZLKRAsmYAcKFjGNBY1A1kBXVFpWGHdN77ScdZNSrHjnU6JoLkFVCsHGGSfAhHLoiXt2bzBES",
  "key32": "2TyqBatZbrhrKYTf5n9xqT4GqymMJbcVp8651XPvitentto9AHdTar18DJWbT4krbiReRLAu9U8B4xyRudWmKDDV",
  "key33": "5518gkjEEu8zVroWJmdQPQvPePeoHV71Po9LnbBciq5zKX9zCadCyPQHZ6R4wSsaguYLM7bqdfgT6umDCA87LAVg"
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
