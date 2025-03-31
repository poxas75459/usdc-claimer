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
    "22xZfYTNttwR52WaiUiNeThRDgda2sCTrusQcjAwYZjwmTydJRDG97pFN99PKVZzAjDtzutMsB54sh4J9NWDHwxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25w9vA76FanrBJyMdzxMjAaPVPc4dQoPS4J87eBAjEMc75qUWeVZAYD6wdGfmj8SCLzoykBXDHTxEqeHEF4zjUVm",
  "key1": "2TDNbyZbrtMUr28AmuEQTzbZT6ZucV8jojASJ8L9LAfc6a5sMRtPtzGyJ9e4QpmxUFvz6cKtV7rY8QaBZKjZD8aZ",
  "key2": "53WmQP3Wee4yzzjjGExZheHCcG3fH4UDznBc6bGPF5r1wvUFie3Vhny5Uhv4ncrizgCQTnjAHubfJfbZKEoJVfYW",
  "key3": "2bdHTj6U5CsgQsxJ3tMQAteEFfosE8Nos2fVxkTvTUdEnS3Zjw3YNCnugSS38n5Utdc134xUa9yCWA5BL1v9K48w",
  "key4": "4cGzgHm94qYiMTVVzuPNrtmMNeLQk9Qb7auSWQaUYCafefF2Ddyufac7dWosUSVHztfGCB2FNPabg8XbN8g3msp2",
  "key5": "2GySKT6NLRv6cwbxJzQbUYvDg8fZodmcKcVfBTg97eXdG5PXsV75f7FbQtCqnBFbPeMuBzPnc8FhAEz5aGqhuqav",
  "key6": "2QUSWpa9T43Ex4mZV97prA6ghuhHnR4j4LkP1UbtLUQWgdt1oL8tXFs783y5EJ6yNx8es4fZHyefgQaC5ieMP11B",
  "key7": "5shyLjFjz3Db8XUBwqBR6cpm1UU7xEnTxtj8iAVNkMpgnckGwJtkWbvC83C9QZecwY3WcYPozhtgiq3eGkBsyHvd",
  "key8": "3oCXQDwPQskAGbnRsj4E1MzFSYDLQgkpJzwGKuZ2Jmyfu34sYvL8hHnnj4g4VevKU1x685c4W7JXpLBqPJMUnQV6",
  "key9": "3EmX7voQPPjEk7DRNYxAgHskUWVp7oug46eZ9RFxdMjCjb3aapHVTwKH4pnZZrkWoGezh85gpZGE3wsgbVbSmvVr",
  "key10": "2bbDHVVv4txtpobmRS4gpdLChebHaowi7BrT2Gw5cHBKdQMeCBmHq2pLsUUhsrE9GaX6y4gm7eG54MGTttuM6Fqz",
  "key11": "5rc6iq2pXPbxZr1uTnkARqJD1Qep8FgxZb7BUpbCm48HNyFYTF4sVtdSYsdzhYGVtwQtxRAgrTrsKxR69qsvndbe",
  "key12": "2ePswNYn1TzqJJewd5U7FTSWwa8tKpnB4KEpwW5ChQeMRLTajgLrrv7vugZw2QLMnZc8yJnbDZmt1vVwyuf4RrUZ",
  "key13": "4otD3VC4DGs9tRjKf8p3wv6HbG1qktEHo8SyBXNRLyDtSTCcpCoUwQVPzo4hqdkxobZiocYqF2JdmEeW76dgRmwr",
  "key14": "9SkpBhQQsNx5cqCjoQn9q2uZU3vHLgjAhLsCycnFFgonFrtzwPVp16rMFQtKfLj2M9Ui5AhqK42c6rPvuZB5vHe",
  "key15": "a52DdE7qmyE9K9nzA15mkZhucf4H5L8rHYaDRrFjHhFhiY7wpE7NCvRUNiynKKR44kfygbcc4cUihMnaL2ZKW8z",
  "key16": "4h9Y5K28YHbzi2GbMJFK7ryUANKncEt3biykGmrPrf7ZaeLNnrCeAYzcUUnczCuYsBnSbbrjgGyyqdRahBJ7U8wz",
  "key17": "3nuRUmYpGXbkgEm3S7UAPwhJM87bn9CUcgNVvsaBv5pRkbbxFZxB5rrhgX79sc8woacvFFJmeFguHuAd7yT9VxLr",
  "key18": "VMYQHohsoXb9wgUDrbehwyC9YxNAt5UNsohpRt7SFseoED1b4CFvTJaxvKaTr5GZrVCSEB43WzwZfPHab4Wxs1D",
  "key19": "3SBqjWVCpQ3SgiBAJCy8HfbGvuzatKthcWuJJytjrvQuuTZUecWpq8KfSkYEeQGCW8DPh2hd6uutXCGyZUVTNWQ1",
  "key20": "4sp4N4gebmpijkQ31zcBpoVJ3MDEWEZ8wuYYGnCUCKDFTWecdbRs2t2Q4XGomuiad99X1XTMAFiWuSwWLiR4Gtkt",
  "key21": "3TtZ4GrnU727u3gYSwGJ4Mm6DLe2ZxS22423s9jF7szzMisKdZn5wPoxwqLFRpoDpFFG837fA8HvLvRV9AjzpobA",
  "key22": "2mRYZ6ej4aoZqKh2poWuqZAS9qV3WZsuAb1Kb7ygEcbbZ13yn4sCdeYQjmn3euyCViD1Jy9YkTn9yZCKsx65X1mp",
  "key23": "52E2sZSUi6DpoGR8s1hbrNxnnsMonaPn9ePSjFzKnZk9KbmABGXeiH5znb2nt4hTK7bmJZnZRuKNeSWZjviceNx4",
  "key24": "2BVYierJNaJiua8vpsMzBvqWLHMBPkTTpt5RaPgHtRk2BnPP5DApBxFW43rHYro5Xm2drdM8Zap5KQGuy69RrwkL",
  "key25": "cP3n3B64oEEwbSxMoUEksz4ZXWU5mPTnxg1anGNk96uzyoLQHVnwNNHNjaXfmnDMKQVM9qVjPPR9P4snXdLw1FT",
  "key26": "3SeoSW4BkXx4JNCeCj8hkX5DVnUPwqwYfM5PLqQj4iWPm75e1WAArZT2mx9x6RCJxX5hUyRg2HVdz4intaDcCK63",
  "key27": "zMihMfov8CDtDCnQicsxqfkoDhiwz899uHSy1ot5QQwUxKLTMqPL6urG5uSXHpuae2mvnYKN38qE8LXjJkcrVdC",
  "key28": "2NWvSE1D2anuMU3hdHep7cWFfwceQjjrgjhskbM7HtuFNitEWm7dsWk7m3nhTZsRUeUtmdJo7455ucvKyQ1Z2ZPu",
  "key29": "5vXwe6syZmwcFntoyp2ULMoy5J7DCHZbdMjbMtGrjWdmhw4N2RJDQvmP8SbkvLK9R6ydC7bwzmmzz887qLUo4TxA",
  "key30": "qN2M5taSxhBnDus57y72eEMzszTpsAk4h2FySE5nerYr2EvvPERtXDZ88yxz1iLfH7n1oJYWoXWBwj8aqXexuus",
  "key31": "3YgkmkzCyfZAvpws14Q3tVXxmsxgpP6SVuoTLN8f1ot4gTw8hTPJGP9MZsFac9XgWFP86HfQt3dQyxEo7qHNrvQK",
  "key32": "121vfYQZTP65WFsofZWwWFBZJYfvipJDUygHPxLRGKH7bNcYeooZBbgf1fkJkACdUuZqdkgsVgSgV2CUdUeFdiM5",
  "key33": "5ZNRjvUhgF5UtR76KVHiMDjjtdSvEgYjdJuk6UziN5VWziuuKg7fgqpqp55BePc67sroPdjWkLow199z1PSeAtsy",
  "key34": "5g7sjCX2otkU14QDX1z2BQsDdnkqwJASUWYXBFJGGnifTppyUaH3HcrEgcVXHzSeTDuZPmoGvXjdeucsLoVXxfCe"
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
