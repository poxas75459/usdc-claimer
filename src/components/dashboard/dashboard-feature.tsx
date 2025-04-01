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
    "3QqHTHvFxvHQbJKML4MBi7pRve2nJkAm82xXnwH1kFsyxxpHENTxS6xsYajkMFAriUTV84ux5UtGHFP9enXHAbk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdvWSd864FbCf24KWTMuYFuGWe7PuzjzzM3gZ28sVMiqQcFH2HSgZxrioSWLBoiPpN8sXGCFLfXLCqxViQwu94v",
  "key1": "NXzW1GLYrijRH9e1zsjuVzfDJj8Z2guDQohj45eNfe3y7QH3mEkqeUBEn1VYvv3t1dokGFvCSg32fKDJzS5ju1v",
  "key2": "yKzA2hY61o79jhgV7VEXJxv6apEaiSUdCB5zvRdHaMy5ZfqJ3pQk7ZkiLqH9m6eJgykobZeNMdo2UCsabeX7A6i",
  "key3": "3Qr8jQcPj2d59TReUJ4ywuaCEXfdSG2fYZpLnMCKySpxZX4V21Wm57QRCo6thsdhKxoM1etNDjSXBbw2sFhh52Rk",
  "key4": "ir6mM2FPwJKN7y4PwgWDh2NxfK9XeEkRxtnV9puR4SuuCbAcKaHX251Q7EnmcceqUZbT3FnK7gmmRXPs6NzAmjG",
  "key5": "2pPEDorYMQu5as8pLiD7HWweVauRBWyrmtjqNMVxRPAfGrTv5ZcLXX7V1gCYLgL64UsiZsRkFQkjnVHtkaBMvuZs",
  "key6": "2NuiFzcycfUwcEXruoZUp7WjEeQkyEXuWQSNhL8dSs8TUe5LpUtHGjtjN4vh3p5SQqLUUYWhcr3bfiiojkbopDA7",
  "key7": "34msYexwyhG14M7SVZVMMRyRrMBBrr7DudHCPNTPHmrw3hQAoiGg46JyxfqtkkJmXXX5F6sncNYRKMGVdCiTC4Mn",
  "key8": "5qFYXo82u1NTXLDMsedUhpeApjBy29TXLXwR4nBMj9KbB1zQ8XJsjvprNbHA22mjEz1jsrbSrtsNfFxVZvvgJhGc",
  "key9": "zbNag83dvCTAdtJbjQcwDXZ4ZHbNN6BGiuAszRDPxwaSGUUn9JT7THdkBeiLqk6tV45a6JdHMk89pP9CsveLKKc",
  "key10": "3bxo2Cax3w8VvszXoKe4jLqJcmCdqi73Gw9e2erj5LyXCysiysMf3gFPhfuPyF7ZXqrh34QeSmuz3STKevrA7tbP",
  "key11": "5UWpmHh3f1zzZaSkdNHD2rgdR98XRQEjRGEYLLtwtzVCPFAS41Dyp67GkdGKWhu9zk4VH5ZaSSz9zT7L5Rceq5Y",
  "key12": "mtzi6asBSsWxwtZqPxNb8dMGbYRvxhC6rHg62spqYebHRkCnxdzQFKN7efS1Ru8rVfeaxS28otvyp8ikyEUittQ",
  "key13": "2i6H479sZCawcdZXhuHg58BH1jG8KWrJivVRLVdvSX3Lgy45tryAeFyqnyTdTFzMnaH7JeJ5BHEEECbK3iDiksqc",
  "key14": "2t13RbirmykFPSYAaA5gmxBfFpGyFpcctMpjgTf2ChLWkmQzv2EoenJuvKnJKbE8Re5PjGer3Saj2gvcMCJpESw3",
  "key15": "2nnxSrVHgqn4TjdXcn5R3ZbDunWbSMmdVXv1JHsLMhErPPcWd4iUP23hk4rAys7Y6A6ysx1S2gnE814sURKQefQd",
  "key16": "2X23UsWgTxxdyjQ2uX4QDYHoDDHktJnremMbi6EmFSyZ17w18zpH6EMJ587DbSjkdbnsv8qhjYb6wX9fXYKzL7Yk",
  "key17": "5t4uu16ryynwAPowpYCLEbe6R42PU5914eseDHkK2bdcYxBv41SuWWLVGR3Vx59sYSU8oUUjsawzc3ypvCtxV5er",
  "key18": "25Tq8NwLdjsw9u1PsxcDL6dETr8u2LeZ5nLVKrAFkqJ881d3u9YMGH6JfsazrMHTMgJ9HVi6V5fme2vwHe9XgcKQ",
  "key19": "4JbYwswdNBpJ318BtWFwoxH9RwtEzBdK4W4TYmkbo3me8xawKEFQGkmGhmpczRZSdWJhdYNcbsuSAakhPDWCnpTD",
  "key20": "5K5CCf3aH4f2zJw8tqM9FsEmH4cHMWHCozhe1Uz6JXSBv45FgzjK62k5wmP6KeZAnMEihNCsPFTYTwZoe992AGYP",
  "key21": "5MJMhvp8b9bCroh9CEX8Xxi56aQoJ13r9wCGTfPfTQVwf2MNjsc7ny8e47SXT2MgqZQamXC7qrpJwvsDcT3wZsCL",
  "key22": "5c5UBoUMnDpAYjF1yoPEEm5Dc1pZ79aVsN5omKaeXCqjL3kVwUFjokjgTNpA6KkCqWf8WyDUTMsXkYXyrRvoTh6Z",
  "key23": "tWF9LJGFE4trZ3H6wSHUpSmQtY63rCgMdPitTsatvRB9XmGwVG1aK4idiRqmUyaYXER1RyMZAbGJxsfqaR4PYc9",
  "key24": "2268KY1JQrGGRQWs2GBEnqJv3wBYA8QR4ofwoE5fCz9KpQ2q4DoYpmpdECgqgkNMYuHPwGEhD5e5P9yyjWKqciQZ",
  "key25": "4RbzrYnumW11p4bWPso8yJmzUDub2SpBnrStUevDUASNCanTyNyNXmXNJMVKT5m8rj2GWSxyem7o7LTMoBqdnrZZ",
  "key26": "4vF425NQ6bGHeTx4fYozr1wvk6Ef1CN6evxiKnRJERfkyNNLyGCbRYGxeoLKYMJjAir1PmJptpVZqT1PPYXcgTyB",
  "key27": "4eDQCC7oUkP9Pk7mKs5PNnVSN9VXgetAr5sQA13eTUzAgH3qiZWopRFBR3bxtFXBzMKMoBZ3ti4S6kD6ZzZS9eKL",
  "key28": "3tvurLmaohK8tGiMdwzrZxgbyzinJinS8Scid5mHdst7WPx2wT8f69k7PydsKFoqCQkGzCmCMwYxGVL8XKwQ5LTk",
  "key29": "41KThXYMzW7rGZSVRvJERvFTW8fAagKs4n9F87EyaWTqWd4wZCzbGcASdjUvXSsCCJQU5RZ6WKeAp6jge8FwnmY",
  "key30": "5JVR9R3zoEkT94bhJ9FvULviRC2BsSABCAebrbSbytn3yDDGm4QaakhrWsSGJmPpmjnB74ZUypsCFk28cURrb6Ci",
  "key31": "2wvQdYcVoLnVy8ML9oA6joXyU45JCdBW6PGEU8swN96EPSCn7Fa7jFuXD9GFpcXurh93qS5eJgLpj94gxWPwePmk",
  "key32": "5JZqvj2nj8K9BGqmF4BSw5WysMd3Q4SQKuDXLREDxEFLJmqpKNHRN8ztGUpcxrK8Qx1MVPfJzzmG82pqrVdZ7TTw",
  "key33": "3MFFHnHN2pV1DrDyVadNGZAVbbE5u19Z2aM5SVsWutFf9cTZaVT3a7g5tdXxJrd75sjTrbMtjGUzdqPafs8ujDzQ",
  "key34": "NP2oBCyCjmur9jsZXJjq5e49mPiozqRyHu5FtL9aKjPUNvMBEZgV9KeythHC4ei6jH2jTJiMJgVfhjqFJYsRTG6",
  "key35": "2cndWGi9pupkvZfroGUTNRFD8m51iDCvrdSH1XgtjykwMz9cnLCCB9hZEQ8nWTQVHvchPWJcGxxFThbyPZ8eb9g5",
  "key36": "3thYi1WunHPfPXrEVpusRgMMiZccz7iFoG5uwjFFtGum8BTqHJsxLfcJNrZ3yi2K8VS2R8Z8BFDstzGbyh4gTtjs",
  "key37": "588dqNL4H5KZrRtaucNWHYRR9X1qW4oNSs15XgKUGx5gSay7Pwr1LQm5W5T3qQ5YyRJtE14Kew5HfypK2mW9AWGB",
  "key38": "3cZn6UvWi9gUkBgzFDh3778WeSbTB6GDYo3uAgCnkLYs7cGrr1o5MYLUVyxqv4QsMhViCkkn5PRhVBLvNrabp1gr",
  "key39": "3wZ6xgaqexB4emmC51AU5n4oJed1BAtLmj6TyfB6JcnNiHbCZSEf6H6VFwBrg9nUk8Mu4BUDuESFzMek8L5VHtgN",
  "key40": "gBxiSYDkjiQQTdztAkmai33Adh9VJ51kmLE6wPB4CEXLgqVTHEg7eXLixk6pXzNRYEtDbswGW5FapGDqKAH4GG4",
  "key41": "4Bh5TFBzJ2Cs6gwwRubJnbrGm4dvWyTctDdvhnELUcTdYMQ2sipHgujcTorHqdckAFGZ4T3mjNApv3CCXGY5FRjH",
  "key42": "29nybeDsKBhhPLB8XtigsGi63pctBW5Qs4FsUR49LowAtwNxDCDS7Qfpy51Y5QFUSnqxjCPuVvgmFqNTd2u14wZk",
  "key43": "GDa93JT8JqmcxdJwuu6PP5e4GAvw3rgoSqQnmPqVjtm4fN3sn4MQxGfAh8uVejnhA4aJ5jd7yj1MvcegyfXbEbP"
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
