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
    "3fAPxjp2xNTiAsWVARmLzP6g6FUTR1aHADTPgUTtEcW9FCgqXCJUJwfpxk8UCf3yjqpvBdw5ZY5ZJCvVwX7doFwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618ijQHwaqJf7WL6nMXrvEFrxN12h1zCZEVRRaxY5ChUXHAEmkq54aj89QyF6d9YFE8rjCpFXZhzefJqJaY83DuA",
  "key1": "3AYAMT5RTLyJ7JwGbEUtkPjsTSbUbAsqjM7BMPdPBC28H1yLPga72SNymt1bUrvNTf7xMWZfZbdunHF11UUYmXKq",
  "key2": "nki7PvveXsNCVtwYWfYkr4RtuT9Y5ZuFWt5QEuksjkgCzN3LCrk5LDEFWvG3JCP1RgJvZ42fyH8D4Zx4nWU7iYe",
  "key3": "41VunWShqrMMSiE7ZFKqrCfr3UHBvgNJemEkr5ipkNa7bDjhs4giYSaDdTGhUN9fFaNhRcACuAGesrjG25kECk1t",
  "key4": "62rwmeCiyN6LefrXJx8RZM73ajcs2FJLNoDDrPYpbMzpf5oL7bBgNRhMSYZsboKxmEwsn1G7Sfer7jYMQ2QHNVyt",
  "key5": "tawrZ7n7CjJ85Zr54yCMWcjjWv9R2qdJoUpsYQvHa3pkeRnGcMi63xSDbvNNBn8kDNM9a4GvqeoonSynLCs38i1",
  "key6": "bjNDo8a5ep3yNM24wB7ukz284HPNYctZqGud5UD4x1sY78ZasBuXK6HdZPQnn88ibLnwrwNkDvYD8jiPP8Ptuef",
  "key7": "4Ds3XPzyUgWa1mqTVEmMzc17xnK7pZ6i17BnrTRCffWVz5mhFNhgdtHq9W69oheBy5kNcp3HrVKfbFKQa1it3SYK",
  "key8": "2txW4BR9NCGvKwsqR1xdQx2Edn3o6cet9qFaqryH8o5iYhGYeKqzuXoC7yGMzqteCKs9Z6cfor6rG6F9uTHcFo6C",
  "key9": "5zPsBBEEqmPexzC1U16dGZaadDr6fXwH658m2kpKUWmD7ggwX4cHcngYZ3pxgaBMRKKTb1g8JF5tjdj79dUduZUc",
  "key10": "5m5ryGuwJaCDznEaaDyRLinLbJKu6r12NBTaqDVqBHfC4V6KDLUkDvTgx2mdasTepVkH86EjMC7PNazCMYtV7LFh",
  "key11": "4eGc8kgqJDAJK7zQyoqWs8eGCozfXnyEdWpCgCXhb7PAhjFsPLaDai5hLmmmY4tUqW6mdTq7e5T6jNx4NxBhMA9s",
  "key12": "46oXvHnd2sa45v9A1VCNMnHjjotxrb7k6yktaF6YcobaiLQYZ53MJisk4K4cWmSdmZVpag3TMFwGt2Pgeu157oGN",
  "key13": "4VBzfYX4iosiQGj52iHnqcUJG5rnVj4F2Fa6VgNTM25q5hQ7qyBGGBVs6Hq5muCaPt4rtmboxBGpwP4DjjSFYGe1",
  "key14": "4z18eYrKT5ESqjwKpKqHxb9yU6JkSAynP7BUkb2WRwdrCMCPX28mfZuwZv2M3MX8JMD6EYDvLfmaDxHU1vikKark",
  "key15": "5cRCDn2nN8AteqwzNH4cVLKKBoDzjiUs5MHUTZWVPfntqrQM1AUuy4y9Ko5rdjNM8ammSf4nmaVRHaHbyQM7uct3",
  "key16": "58p1reYYMeTsfuiqB8uKoJuwu1kQCodhUws4xQbhLbBwgvnGjj2DR9X8JpTPuf8ZQsqVnTrJhJpDAiS67fjGR3ft",
  "key17": "ab18XAb2mrnYw4DMBew2EBrAGSSM26KzDwU1Hdmt5RUx5my3KEK5VgZWnZuJkGgQKmwNfHbsSpSfW8enmVYUfF5",
  "key18": "3yDsLyoxLDpXhyPGUJdTX6v7CfkTL1unoafguASxiexTGMdu1NyresiWGLjaPJJxW9SmCi3Wa9FTnTRgGWNSEwZh",
  "key19": "3PH87BwXpYEZhjDYWFKodE3kCwbBKy4H126nqsKy2AfwG4u7gg4vB5fQhZEMdUn7oWDgXwRgLFjJs99i19wXV8hP",
  "key20": "yRGAok3F4eaQhnCP5NAgyHiLZBY8Mp2J1C2eAdWh5fbVK2cXRnFxrsLBZh3YwFMZZrxydPcTu31F6Yc7498EbQP",
  "key21": "3yCA7VSkAHjjNt6eNYeq9HNVK8UfdavcPekz2syntZc6XNJEi93aDC531Rne7JsHcWNrBqS7RQCYRo77TLdbKtWL",
  "key22": "2RT9GS6ud3bxymxrYPBk4jcVXEyXR4ANG1B9eYXkMJNeP4pwcCBwnduEeKFviUgXafGmo2eAVYg6mDT8HjTVfWw4",
  "key23": "3VAgw2Tx9sT9QaTsQM3C86paxNYCMCbtydupgkxp788KNTAXxSmv9v3ByavaTTsg63ipmcVsKgNHmKCyyhF44oFU",
  "key24": "2pYKeQY15kXoNUPBvQAEobbcBw8ij2G8EKLggm5gQcZHCWDtjN9xpmH1hvZLACJcuTKXGA9iCgFMq3dg3QPUZL92",
  "key25": "3bAAno1EJtaDQgqNtj6evswzAHbbbcT6xnoKqWHBwetEMExrrCF6zh5YPR657Wxk42Y8geE6i9EQrF5csHs5HoQV",
  "key26": "5MLQvYguZZwWgC11Nf6BEYsx6RFmLviHzEkZAu3fMgWGC7WQawTFTewArwfXN3uFdGdmjPR1rKanV2FLEuFZmVYt",
  "key27": "538FpLCTnZVH5fJtkczx1eGdUVAjiSW89tAMQim3LwJjJfeFLHRXu4qbBSrp19Jgnb8Ru7QJbMUMZMuesLUX3wsm",
  "key28": "5zdrXTGHR5uuWiFaiyh4BCzBNLJyRgXFcwZQQsnpPfgMdzBu9R8SkdPR3evmYqxSZAuzCEuiTeBQTa3RifhYAkm",
  "key29": "3198cxnVnej4cb4hLEqPABuBA5RGCye5fsmCYZjSry9rEQd3QzFtQSqHYNZ6dRdCPiKGauYNJWJjfKMwZMVV9Vos",
  "key30": "3wbZLgGfVs6VXttECZqecYkd8xqBNYeSi5L7Jv9ZEf3qC1Q45wSfMZKL4hTX86RPUCPojTyauTBR9rMeMyTwLJna",
  "key31": "2ptjgvZr4XSBjbEyikWtq6YdU3mfzeQqE9CcU75Md8GyCduRtGgyRnkuqSuUuCSAuekEDGK8wDnr9vSPEZyzVBzm",
  "key32": "63qhSoV9KimMebBi3eFmeVju2LJCyJbnEqG3MxmjF9sZeUHMNBsJY7X7EiUEcNEScofJjf2NeB8fgk9TSgrAhg7U",
  "key33": "3e2h4U9RYwVvGHUBJM9ySeCkuaCTcpU5kXjFZz3jjFxagXKnFv4sKcFL9rMrFUSgbMmjw7CND3nDuxegEN3b76Na",
  "key34": "25c68m4fgWpPJ1PGHnS6sNQADhXEjfMZYdS7wKJzT3ANLZAEQvumRstZcFUtYWangS3ZXBJfVeX8SETo2N1meZd2",
  "key35": "2VzLBPttFBihSSuiStGrsdP5utZSatWPe1xWwxDqmvSWxrM1yNGUHDMskWxLadDKh7ktTGoPKbPUoomwR8Ew6BsP",
  "key36": "3SBnDdYMuLdtPDHRnZvLUyRUggQVed9JrDgJepBKW1SPg3k3gyzwagXJw4AHuTJcQc43HyVsn43FHH27BaL3yzFi",
  "key37": "22Xcfyo4aHFwNxTbm3q6mps8KNWba8b1EXoiMQUcbHjD2tvF5PeAhkPnm5FhktQhhaeeBvCtkG9eMg5wEssAiZUv",
  "key38": "Ewv2iseKc4eVTNuwkDVbscmnJJcbQJ2BevBZtqjiNz5Ni2iSYju39QizyQLLCtzoJbQz9CKtECs4Emx4or6UcoP",
  "key39": "KMjmyZPP9PkaUDYnGbJgz4ksSbJbVir4Y1MjuQEoaS32z7p1vm5vsxaUMmmKJcimS995Py7bPUw9GXYx1nCQ2Jd",
  "key40": "3dtwRQJFCZWRSHg2St44F7UEGhodR84JCjHdiruNyQyhLTLs3Pw2fAtb32ofHWPQDUaZuEwLBgFQR8WeD6AuVK97",
  "key41": "UAJ64TiroUEbeFyDdGQA5oSS6fQLhgmWTTj6AfHxQX4TwRLNhy2Ruh3jR7RTWWGiUsnwxBUqh6tgbtwkEjnq7iT",
  "key42": "5LwMiZS912kk6uvLLvdDVEufbrAoWfjurianqhQPSaxHdcWeKa1MFAD4ShDrEhpNchUGgzTBjLAkAp62s2CF4oR1",
  "key43": "4baAH1KqTBuVFdNTsKjn29zoD39Es4xdGrdxBhmEGFimNU2bnnGfH9QCyHBYyeuKVtYqqMm2dNBw6o2cJ95VE6Sf",
  "key44": "4FHG98MdZndrisrab885qsEcZuHLSKvjWhtsUTjzbFxj83kv3AWEXmWSKjBkQWxkCibYcUEqti8WfJkZPJmohScy",
  "key45": "LnHUGGxiP4cjC8WkiQkQWNgnjH1Zm7YdgjiTFTEAYsizMJ8RMGK4ox7nucXx7pfNHnY8p9MFTdww5mYQEXFNq4k",
  "key46": "3h11593iYmnbG1jyZFzvUpxPBughgh1Jr1LiapTu1viE7ugoVQHeGmbqtzpaqyteD56Qs24qHAWSNofsuPpnGhUf",
  "key47": "4WQcC9QjVdMr9dC3tyShXvSWsQwsk5xHwK6GsUuWBPdBGJSav84izznVdALK3b44MXo5AzUaC2qbXbfYtWuoFqyt"
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
