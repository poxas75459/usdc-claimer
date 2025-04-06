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
    "2TYFFugcAfgJLqpArZX1LnHDc3tUr1fVFaZvfZqcTM9R68agbvnatLRbM5NFS9BXvhMD3SwQ1hqLovL1NqVmHtEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LvpifPPDL5gp9KooxAgkfhK7FobEa3YGNut3c3AMFRsY4bqoW1bN7XcQ5u7CGGccqJGfvxp7jZzv3Cnswox7DvQ",
  "key1": "2VZDoD4bYYvaaPJCKG7ap3n8pRqRUoa1F93NwC1GrVRP4spfe3KZhSEot5wm1iB1ryNrrxPkwmXi1MfjP9pyd8fL",
  "key2": "5LzPLQj8RsLcwPXCoRQzowKDo6Bps9J9ePzKdLiDnWfgxvScsvS9JDTZrKm7NHKguzAqKxxFQPP9wcMPJZwyQkhU",
  "key3": "5bGLgKrKLBG2vGYZkCPkaASUdDUAU7B3Cj1cFEtZxh4Kuo7XmV2QsHvNKNAa24xxPyYHejpFbMt87gi1bb72f6aD",
  "key4": "3VNxz3pVibwVFaWKSRWJytAUmZUrCEMzowDNFnLXe1viWRr3bdZqFepK8rY4DEUR8RPWxFwHTMdkavtPN9xbmCa4",
  "key5": "prUVeAevm8dvJdSFQacRjxba8Z6jLbSZ9rVPb9V9HkNEAisq9of9rSWPfBNFsKrAvBJecNyXGzFQ94dgsThA2H2",
  "key6": "4QDgN5vKByajya9T3g3C5gTjLjZjRPYUwL7qWPzkcgeyzq6ptFJi78KuAMNqqejencNKWz47za9BsQazvFnFavz",
  "key7": "5Rgwq68yeVo67dpFxWYGWXSdtz5PSVJ4DhtP9gvgoP6JdPVWCaFagR9dohSPvJ3bGHuuo19kiN5j4F9ufwyCvA1o",
  "key8": "i8cjSiY6pSQQCMsTXvYm7cwUc1Jz65LeFwGpsvKGMtwgebjNxoLdeHTyy94wBHjZTjZEykixc6iK8HDACQr8Fiq",
  "key9": "4JmsFVcWbAkVs5rX7FtDcRnxBXYCata48mqJUPQXjFrX2KsKJjUNaP51DBdhu4dSg8AXV1v8iNgNPx1juBvme94T",
  "key10": "3KNDjFzvEQWJTaK9X1dcHskZhC1nk5u8ajM36wAmUzM57LxCbttdn9XwNKNnWpdue98PeiSELicajetA5fkqRicr",
  "key11": "4YUyrvLj6Z8kMBoqBP4TGnEmJT1CHbyRw7L4dBsn4aGV9e6mjh59Ag2xhSVCPC9vwb6siCgVW9G8vmt7BASjXRa",
  "key12": "EbkV3xaz5TQSy2yVZttFHR63SYroVvnwNQYexqhDLuQka25DYJqpNmYZc3aV2szXqF7cyC32AzsYc4oHiyKbvfr",
  "key13": "4vrcC5hAFiobmjmPPYt5rb2hW6BtC1i8Se8Swyr2dwFkSpTbA61tGjNJPwdS7qFYsuJUUY6vzY8fyEoUu4BqaWKH",
  "key14": "22uY8Z3KjvZhQbe5Nf2SSRKdP7PRyM8YABhV98cp4vvM5vfxJS27aVKC1X4tpjHCYNat1Nw6NbkaPDwwkZgEtYrb",
  "key15": "4Vxobo8cqZSMJHQQ9JD85JjtY7PkpkCA5vo81H15qT4AvozRsrf8D8nqJQzF3ZsM4SkGdKcTSFAKezcaEBNjAHdV",
  "key16": "fqnk9nKCmiGwQmUtZjwqBL367redwoYZU9YVBFHi6LdEHJzLsBpc6h9nQfVEoHszqvRGRqSfeSgQM7vzvjMZWS2",
  "key17": "3sfDXSsLJ5K6Pjk5LssmnSYAjEs8PUe6vK7k3WtDjBNG8b1zJipVtsMicScDQeFtnrSTFbhvZKQbeDbDxc4LQQ5R",
  "key18": "4Phtx6J1Rekifxmv9dqyMnu4QGwb2FXaqukQcierPA7YwF95Nh95t7qHkh5M2rxTfRYdf7s8uLZPEvUs7kduBbL6",
  "key19": "2nYqE88FDVwtMDrR6xvNaWLG7gqyTYwiQXT4XMGSYw97y88hjKVfw4y56QQZZyePAJmZ3APAd9TkVKBvLcaDnHKZ",
  "key20": "5D1hoPW5HMYrPNKzR8uFHu7PtyiQHGKsPvf9r1dKMC8XLbghAPVMMcEerBaoJgJheNVXgqQw3Y5EgmKPfrHPcjn2",
  "key21": "2BamsgHzrpnPxoqUBEQQViVmRGz2r2JjB978Vu436pXCk31eaoALyn8m5C9ttZkDikWqB5RyqBxXrdFeREuM5CQt",
  "key22": "6TgEwf3maqbUDfd8yaDZvVGYKvrkJ6i1TSLJ7kxB8ynRLfXRhZ4VoDV5YWKeGRvXMpQKYqGGcoUdR7uD5xp8jPL",
  "key23": "it92usRYUYGdYBCXvNHh7UpWtzgXx6QyE9X2hBQbNhrvkLSLSfVB47is3wdGgQPQGaPARXyJizZkv3vJJMzAdBP",
  "key24": "ZC3GGbuPp6gAQAeAGUMH7FkDtwwx4ht5etMtQSSV5HHDLwL6FAfKZBC3TYXGZMCdCCxcv3sdDHi2BKTHCirovpv",
  "key25": "47GTRAEBuVENTpk6eZSJ7TTACUEGP9hUe2XDFspHGkfrXoz833ev4xvadLF66DumKtvNXf81YCt9FK6PkxmD6KwS",
  "key26": "2PNCBxt5fpa6qFrF6uGRP4XupQx3ALvFuX5yJLxkGdJvCM1m7UiWggjUERr21tVd6ft5R8LiiseSETidbtnfKh3v",
  "key27": "7e1BL53wiSiEFk33hmNyiwWrW5iWkCVY1jbmspWoHony1FXPffrQgqWSD9fXjrPjJbtzT1hrgDeSp4xDjiw6fcJ",
  "key28": "5uhraSmSKUuhvVayuoBbCTSbLgq938b5k4RCZ37yMSrUT1mG1D4UsWQPsKLtmXjfooT6QWfPU6xgHtREsWANh7zv",
  "key29": "37tdPxmtKEypQ6nhgcWAt6dJckJhXjWBeweY1r4wYvgZ4nJBnRYYqVXHh7BpNVv51Kf1peWpz5Q1XVJNSSNMf3SB",
  "key30": "5Nf5MbK1EFjBdThEmRFmsH9GFtNTGLuSNMhnDR7LvWYwoW1W2pPY8cKWh8QGKoqT9ozyt71qQK6FoBgA7jWuPMLZ",
  "key31": "3vKgs5iUBrmwwYMDky6d1f4rh2p61buRudNNYftHwsHWG6NG7uUcKmnwew8E7iLikFcZ9jN6TXGZaYnxpHQfbSAC",
  "key32": "3WXPQSHW9ZkrMCBfRzUBzHHKEBULcchNE5GMss36ykNCMmugnTUsHjUM4KZZHstsbFv7jCundaB5tfvu8zjaAyHn",
  "key33": "2LStuytvSyRfr1u7so1pBNTxVMDz1RrBLcuqMDjFW8P5e4fic5TNJBu36xtyxQE94u7j5GGULyfnfBvXFpbEnP9n",
  "key34": "2xJBV32LoQpMVMnhoQtkuso3KucHT7DS3b3aUcsjau4fkq97Zy6aGigF25pVQqSTmC5jSGa9GCLguuu6z3iW7Uen",
  "key35": "5UUeDN2USxfGQ4FKnCKbu6zxzRWXqFpa1oWH3n2fxDoSSmBHD6PR8zT73NJB61g4sQwiQ1NouhyyoudZkW2sBr9D",
  "key36": "45oj5yqhipiFzRKwPpM7Q2sihcQhkkpVSDNaFSYkf1L5QV4RmahdR9a1jeUYwr2Vvf7SkkLMqFBNPRzUdUPeaUmt",
  "key37": "rCzkftETXrspnBMyLM5pvPiXYQkipogNoNViatSgiGryXcwPqvjBvDiqjUsqfUab4Ty5hCpSAFzKFhBMPHKygoh",
  "key38": "3AMXKgXaxc4NuGqjasJGTehC1P2vuq2sRgkqmonC3ETm3z6BBf1DQdjyQjo4eaNfbPtrpKnsgohLi5YQXVudj9Ku"
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
