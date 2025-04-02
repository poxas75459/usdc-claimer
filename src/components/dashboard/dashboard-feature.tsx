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
    "44QtyR2jTmhL8ksHd1g8Zh6ZvA5cYcQb5g2NmXEmgceKFBNz5cVuQDDNrsKMMd4u3yvuYkqDmFcEQHJvXCgjisFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMqadb823Nq3Xpx3LVqXSacx4JXkqPb1K5nJp4BK9PGX7fshcskWmQKxu9PW9H9mphRopSe4eckvqp18wPaHp3G",
  "key1": "4Rpzneohi9L5DS2hQi42zWzBFYMZG7phrdxM5gAcWQUmG5NK4KiRykeeZML3owuwSEie6wUKqFsU2wXa2yVge7Gj",
  "key2": "2u9Cv4cmGb5f5Nw3ykjQfsXLgDZuafnuSS1EGYZsjoSZrQkkeoMhyox7oDRcr7ySDvAjDYfwqxw4p6ezwbopUN7g",
  "key3": "Ezd7VpCZeTnCfRJU79vFVHi95mN8WATcLoUEi8yxgYLNAphBbQoWJTX5c299ioRNwdAozsu4B5sYDvNfLQaYPKX",
  "key4": "4EbnoX7JQFVicYdMdh9KFQo7uqT5kAMXuFL9BY6giPHn72PxpPSEVq9Ffii6eF5eta9VZmzqqCAkuXe54MWLpj7D",
  "key5": "4BMdH6AZiDgdzbzHEyjEN2FfodGecjtrHvTgX3MRYpA7GMkpL238GoXASFr2gMXnFLtgFMCN9eNEWSc8dtQDzUEE",
  "key6": "2UrnLPjat2Ky3EGqD8QjCXQ3LFrNJd9JMuyiYythQiN8rSbrbmVB9q3MwgU2eWaD8voLr8uocYeXoA9jXca4RXDj",
  "key7": "4ESCb5DnBbb2bqTGFAfsvV2fNKVpagYNTCM4BpqJUdPgWcCRfeQ8suKFkFFsWbxXCxz27ZtDRDivg6YcpMHg4Wio",
  "key8": "csq822vGUozWvcrrPgMwxhg2mCQFQwowB5yV4DjWgoonW8YEjsZvKChwx1racWUMbrY4FYGPTPzXAfzYBS4doGV",
  "key9": "4kgXfpXLemWBtpyYejY9ZvPpLj8BmJFynkhWpdKDAXBRJjTUF7qNcF9T4Agx2f5Gt4hzkS9u6jhULgjho1swE3mq",
  "key10": "5zqCst61zziRb4GXHkbPX6bUkRnrg7uDSvPztWhkTdbMtrabdzZ2ypVBZ1LZaHHC8VhLXU4v8KRzkbofvJfa4FPi",
  "key11": "EaLAJBUHonKVLJT1zqE1GUcLi8wuDhbumKRsV2MiQWNbU4pcee4Hku9sfAv52VW93Vy5c5QKMoF3C3Fc4UBbUB7",
  "key12": "k32CJFqchBSZw8cY8PsPAvQpopeK7LHrSKHqEozYJBoz2W9ZHfdGi9KsRkiDBpnEMP2DGRfrQ2ZcMzMPcgGcxJP",
  "key13": "2A8wnYz4ABnC22ThSsErGRsCaopDrX1woYyyM5QmDQdczZSTW16yY3cSCbhnhZxTWuGhQgnzrNnx2iVuVXLfejoo",
  "key14": "57vchN8mA9XcCMXr59kH3ND3kQWiMdG6GfW9rpnJER8VvK1e6azw1jytsjAJz4SMYx9NbUwnpA34c8cmUXeRc8ac",
  "key15": "41HGPX4Xk8Xj2UgTBwWxqTun5U1UPDgwu22BYQZhmxhzfPTWLw5JPWdC7xmqggiWUPC7WsctB2e2TosKFkRf4wYa",
  "key16": "4fKQ9KmRFhMpw7xm5rLL9wmRkAjbHg1ZnSy8PJ5eBip2Vih5LBQfXDjJYM1gRsyEPUDGYjRHjCbAhfMf84JxqBzf",
  "key17": "4mfn2hTS7dTeE4Dj3D2zn1cE74JJacxv3wPxKSuymJinWvoFTrmkS1du4eL5yJfbf11V42i4nfduxzaMng3JD7S",
  "key18": "NvD6PTf7LESFe7Lu1LBcK4GiWoDiXgELzeYYPCWwLhaWhaQZEGDXXtdoivDxMCiyD7J2szENmrzsrSkXMzCVJsy",
  "key19": "4YSGUopLLNZrcKuP6G6itvMbWkKnwzkHzrbFXr5KHKvaGbfunWduKCP4ZUw56cVa57H7catYDwqkxm2QcetgA76u",
  "key20": "4HSYQiLiQf9FzrxRhM3sgdRBXXAQLXD1gJxcmV3f3T9uc9TuAkuxiW5GC8tEiQDdVsCftHwCrbfhSJYN7boreXpj",
  "key21": "2oCju5fEYNFVXhQBk7HtE6q7DVWuY8hZpK2ujrxq66okJTDQhzYpbsMZa33wvhjgtMmEVomsAWn9HeawfoXZ3pmF",
  "key22": "26LanfeTef9JWZUCYEfjS1xMsETM4Mm64b9oaVBH3wnz9MBh4W7t1QTEkcVWLHvQ5Gr5nXmHjSBXwGk266WnhVTj",
  "key23": "66ZXk5SVqNSUJXZHFUSmbNw9hxaU87uN6opUvnBd8yNscWpJM7XdBYM9G8HzsTwhmyx6KrqxVCdBPSUfjW7HTbjW",
  "key24": "TDGi4GThHxhbEq7vgzG73Zoj3aFsVHRStGzfixVJDeVSVyfDiyMS4Avjz4oUX8ZwCvRVYbNqSi9Nsa9Ctx4S1A8",
  "key25": "2jYB7rqbe4QqPorcshwhV2CRXGk6xdu3wcdEQFWLourDgZW1zjc71vzmHBDcxz1U8Cx82zL7oiuy5qRNM7iWo8kH",
  "key26": "1LCZRZysDok1Q7xMfjhyDcK6vxtcN3B3RoeVFid7bjGRuFChHdtqmvrJarACRgNnuQ87w98ZDHHTnmKhyhEp7oN",
  "key27": "5rQgeSFw7cjyHo8thyEHV494mZk9JkTYhXbsDG5q9MTTP6WDehmYprNY2RoJTqbRGdDCoJD8H4r6nuzanSbskTbg",
  "key28": "2LAZ29UKnHUaSf35tZe4cNyBFBVuEuQ5WEFpHRbRy3m8j36B85MWBe6q3kMbFdRxyYxaZvEG82bbZDnhrg3ftKcq",
  "key29": "3SxhBR3rbNsjqbeQu1hD7aCCevbEgZvLH9xkcDkSjFLpKy9fMPcUqWrpZxA3ydzT4hU9SVKUbGbZ815F9b64FksQ",
  "key30": "4hwaqNqkYi5o5G64wFgq4QmEL34rRNrajbh6S6ytXfYCxPp6sgvakkSpGjyHnMWtvBtiko2NiqosoqqruU9WABXZ"
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
