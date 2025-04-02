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
    "2WLTNVauGtKfY4bXVzM662jV4VyTnUYkrDKg479mcYsvnYTh3dnJRc2CiqGgY4Ly174zHW1mcey95XFiCNndfh6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwGg8MrvGyDkxPL8ceqJKkCcLjYgEwSbZnzeS72wCDHKbMkzfAWaNzXRWzj88oWGvt8g1DGUM3N2E249SNhoJLg",
  "key1": "2XV7d1ax9Tt7R8MTCyTsinyiagstL6piyFD3bxzGEjumMNWPhd9aBHHmF2cgfqs3TFCNb5iCAi97onQoX95jWcPd",
  "key2": "53uabsoeiypkTvwVTSfiRBJU9363Xz6AXhrm6v9MkDmGyhsa3AVYMGS7sw8NKsNnuwdeweGk5DsFakaWtut7muFU",
  "key3": "4Q6ShtTHtFmZNH9skp772BfawoGYU6ch7PZRgfrTxi8EdCCxJ59sV5XmDMAHFrJ9w2VBMkWcbX9TjWP9zLXvwZqi",
  "key4": "37NAGotGv5DVDawU1VCpmE6MzV2Tsp17j3NXUDQd8KXgr2XcudFNFEbJJBdXjiKVLtsmkjS4PERkviB8Xth2me43",
  "key5": "4QSffkytKPyfvf75VCc7mz9yhiyw49wAXJFBXZ4ftp5histpmdiXEpvwVoj52kT8HvEUbQZTQE55aWLDFo2L6vPn",
  "key6": "3bCbFH2xtD2Wi7QBkCBS4d8oEpvfWcQuN1Jz1mgQV4whA4ZpXnUnyGw4UZJa5vP9BsFJZae4GfNrrw1uAYTSkSWX",
  "key7": "TcfHgPYfBrbzzVzCHHtPwZxUfvtYjxVePbPt2X8rscwi4dKXr7BfH4Vkxn7vkgs8rEHD4Qr1hLXoeReVPZUExrA",
  "key8": "3TWxehFMePEJLHepxb2WBV1H4WGkHkRNMFEtywpLNte6zDk3rQKNAw1a867T1eXKqJNKkQhFBRxWqFADx3pe75wC",
  "key9": "3oDtYGx15wZzH6SQT8PQpCtr1ZsL4Jy3RJWStFL3n11auYHuzAcnborWGeVogpFkw3J9y19p7xGAC1Ghi4LeZzQx",
  "key10": "KoDrnjfgBMWLGTNjLGhANDc9YUfYcNhSMFHHKUbVjtDWeR2PpJiUg3GeSCwBjNGZHi7RvHuSBcZmtvoGvsyPKvW",
  "key11": "M753CDYaymgXggb57kY4vqpN7kp6ath5cuG5y7JTLnNYQuSXK4pvLW4hrgheDLm1seiJaMCdHFdCRESLrb6suEL",
  "key12": "tF5HdxUAw8v3pQ1j7J7tD6THcutzAB86JFawnM8A2zofjghQnosFhdirLpAKdtM2R6WFsoM68Y4nHEaEcssTugm",
  "key13": "Lopd34u8iJSxUbKNozDffHXA2Kxh78PjRLT7bcmVqqmkEsFRVQ9krJ26ZFNwiKFqMQaKzxsZ2Fj5HvvXzqaL3vs",
  "key14": "4YPeLLJ4G4NtPc12cxB3VhdEFmk3L3e2vY3BhWfjDURkaatyRNAhE4QJ6iACwmR7Nkv3oFfvRzRn8hhXYXjHVqka",
  "key15": "9YMWbxjvPWwZpE3dwQ58PkYgQQSAsd5MiJwGeuEMnHEkwrzk9Jyv9fHvsZyqSMvod5r1nBF8FgyXpJ57WzS85Wn",
  "key16": "2G8R3GY3dAy393E5BEjV5WKxNDj88fmE12KVHwR2d2yuJ2MuQNRUDR3KzzRFFvV4SSMpKcjeo5mzZqUA534AunJB",
  "key17": "2KkQdwEgtWBcr8nrsPr7PfdEVEjyAysYRg1JgK8UPakHtTDXm2MEFGxbVeGrcygty9DAefXGvzmRxRSVHvFKvLjE",
  "key18": "EJftBLkt1wYaKPNuZoRMCnj6bBvcmUhBQ3p8khCRkTsxs8DW9tRMLt44ahwYFcAwg8DKGCjCDsWWLYYpBLpoV6s",
  "key19": "ECV1mCvVtZPw5SDP5z5PrNo9zdzMN27HkpZRf1HyvNUTtmw7kRYDmRwdDBahEd8M3pTpK43UAkA98WURThpBNw9",
  "key20": "4oZHgz56qnboF7pPmcV5FsHcth4RAc6JnTtnqWcQVA5wAeaxSyRzgnwvj7nKESjPL8ZNaoQhZHWbiMH27CCSwgv3",
  "key21": "v8UtcMyMnuT3afQcF9VNs9QFw7LamDsRbxBtvg237yk3PyeXdMRKFnqCWwteC4JAmPdLv19ksLt6DCjN34w9vTJ",
  "key22": "2GkpsGeyYfVrTVMaXwQAxFQQGtAcoocqE5jA63hzRYA1npFtm9TQmurgSkTqgHFRwzNKUYULXRaNjEMt17vrwkut",
  "key23": "26Xt2Pfv4bx1K8MNL2WbHCNNWw8iKEPwcFS8Q65CgDsAXoD87N87AK1peNWDMViLUdehueEcxe86HiwmoQya28Yh",
  "key24": "qjECwTTd2H63S4HJiBD6VStqVmYPQELj3EzkoPVV28mbgH7Jt2ZWZke6kkvwkgGdfzjMLGEMn1PtcyhnnYdapCS",
  "key25": "3zaBE3wW15iekjpj4u2bQSMV7X1HAo6QpsJzfLfZ6ZJAzFKNtQjAcjSjvvfGHBLeyHtM9pBPzqrKKMAymUPLn9ct",
  "key26": "4skEuuLfroUkbBgApngchp7vYoLUz7fpexxyUXmicsQWgkwz4a6mkkFNaZwGWUq9xYZm6F1YJRUrzvAh6euhLGzV",
  "key27": "4YQvfmUgWeeJWBwgUVPvRzpVYucAyMBpyxyBkzg28LsDCUQ9MEDhCoJgAN1FpGn6UtTDjHnA5ZkAxQKjmxYN2TyC",
  "key28": "4VJQp73Yg5piYNUV324YtJPsjiqVcb3shgj1oJ3ravpxeggwmzKJJEa7vd7H8MKBtFKq9RxHqKYnLWsLw5qdbrr1",
  "key29": "24G5DSg2UfeJji1e7wFhmRuYARG2q3dE2PXfzpuYwRbdnzB3AcVornBtkhgujbntCuabNknrq7ogUgeyKZMzno7D",
  "key30": "3si5hsMyR4Fkph5mK43KJnGFnNip2MiAwRVJfev9wZVxh1M5oYFVzarYPs93E1TChacdASVRss42xXp1gf17QGom",
  "key31": "3LVRg4fHbmd31x7sp9LC86wn5xXzrETXjGtwuv8MVZENELQ7oRQBdZbRrainCcsaqbHnT2eav44cgWQkxFuJeWui",
  "key32": "3nkH6VKtXxeMc1KaJmByVj98QHXf75h7Ehackx67E5YaDdwwEctE4HNURwMurtKYSmWm2dto6yetWtSUG4HS5w2r",
  "key33": "3ZJTDuiSeuzFUbDgvYXbpQwCRxhrgfdtVEyzV1RcWAxeXCwpukdbT6JkwgWmW2Ptb62mR9EjiByFwnzrZuGrtpiu",
  "key34": "3EaqZc1mKeYB12hpc3NuhF7Q6d7ekFwMzh9EoFsGARFocYqAc5PpMrWgfjQQd1ZSaQEJnDXx3xvEyU9ekqHqvcB3",
  "key35": "2vamMmiKvQNkxvcxcDRu8XN19AK3oJtDnBbZimCTi9pf8F6gtGj5zeZDsZoTvAyabcTr8wHD7sLvKFz5Hov4E7F3",
  "key36": "SCUtCbByVSrgH65EB6n1UGfKz44FDsSvgeuxzywCePtqA26xMndBff4m1EGvcvSiqYM2DXYsqWik8Q9T8rZFFxF",
  "key37": "5mtqcNptMcEQMnxg9Z3NkVEyNpAGDeL1JdTgzv2b29evniXpTT7xQGQhxUkxXj1yCmGT4HaQLxGcVZmYtXx7A6qg",
  "key38": "mgapipBFiPBj7uhenHeiDBC9kNNzKHnyALhXCxLYV9myJobQMbJuaxpyA5vCsbpwN6dpvxSncxAc3xjMpX1By8z",
  "key39": "2Qn4qB66459p6np6ueHkCJnmNWjZRL9tbyV7iwweARF6N9b6kK4Cp1CyiUCP9XBKKjSFVngXEXLHKBaStWhrXs77",
  "key40": "4RYZJLbSnCbJxkCEdbUtuHC3YEt7oGEwnaCP7HWe1zp9f3X8o5251u4uLxqvDtP1Xq4EtrX9RBcKjsiMHtq6oX4h",
  "key41": "4DDZuYg2oEHSpBxmxoefenDE7ynerShtLoZLPiDNUhSrJiP41beJTsqDZq4jY8J51hAVmvz4CQ8UpJsnKs82MtvM",
  "key42": "3bhDkWHDKJ2fh97Z4zsR7QoXporyiqV9nLacgnMUgjYHqxV3JqKGUsGHDyFb72UDkMFseUTpBi162yvMoHBgSpDU",
  "key43": "3yENrMFgcf9WRSz5u5neMktj1kXUc6yvQNnQEAeMigiFE9wJo96KdQzUn2uoFGSkW31B1XtvdoAP7uDpZ5TfESfv",
  "key44": "2Z2Waph553wYX6tEMFx5GYegg8wofx4QUZ5J22gxvfXJcfgxzF2f1uvhGiXYPmZ9dDCtT6HkxLSKmFjj62rqBrNN",
  "key45": "55FQsjJGy7hXAQGtSJJEHP72jMrBz9yptE3bgxLFBdAAvkAHA2xuJ5rd8qkWWKwxFC9kS7NxNR6uFUKTVNTLXhAm",
  "key46": "4q1cHmCrVjsHVTS2kB9Acs2efnzGjqaYg7UHhicNkiZiVCPK47V4mcgULCoHV2BgeNRWHPDsev3QRU3uaVWcyxSV",
  "key47": "38ubCaJaj4bFRes175XZfkwTpmH1t3VWBdizmBpPdioG1aYbv3wL99DsPzQq6YVY3C9m7JuEUadqRCtrWiZF3HcK",
  "key48": "jr87gUrugi9ebXLLiXiTp4xYdwH7sNESiMK5y5UY2LbC6xBApuP9WDZefapkUZZXb6C5nixz8mh21epcyxeq4uz",
  "key49": "3Ficip5hMxWvpCpxgJFZqStNcRKHCb3iH6TuyfZpznwQ8eVLREJmmumPPxbmSsSing9mAiAVxgwYzT68NA1Q3irV"
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
