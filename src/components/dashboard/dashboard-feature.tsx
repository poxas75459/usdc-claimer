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
    "oPtq1GkbPXFAv7aZD7BPWZWVWK9N2YbjSuxjUy3RSgRUpbo3ucWkagsc5LkzMSopy5jgjXomxXyRoWyvBHAfRL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKnuYmrrBeKWAgJheMs7QRGUexAwRF1uzfohM2KFVgWXQUG9yssfy9Dd2LSyrXnpqwFuUhf8Ld8GhgXWoeTvRr8",
  "key1": "3k3xM3dECbwbQ8qexmDRDEEh8WpcQNmUWqS4bBbJ9ddyqVFCQL25zPnN8Kaj751NLKD76V93nUz2Fxd6yU9arWYF",
  "key2": "XXfR6D5A375x2XGZtqwmyxxi69nttJurJhnq9ahhaX4HgHqQxv89CADWbjVSbPAq5xhCqpV6NFJ8hPPuukHGvfv",
  "key3": "fBnN7SUPzSScQHa746EnVW1qeLkcMRFCN4nrkkYNwAw6au9dcAJeiAG5ngmeKBC5XxfA3NhsfJFSA1V9TqGCGdb",
  "key4": "3Yy77NQRqGQFvJXET2xW2J4kdKKUYrxNjSaxE7Hqot4JxG5gfbRikPCq5sBb9EYaNRczjip1SVaXGfNYiDDEdBnT",
  "key5": "4X6V9FPzPZU6Jj3gzQpZ3H9ZNHsWeY376Gu2yfzc7vZMjURS9sAa4nKbriZ58J6oFuGut9f1CgxLtvb7mZeCnY6d",
  "key6": "31ME1maEcdhhweUMfLHnd1UXZ2LNJCGnAiixxMjmwdDVNn2aamP6ZfjiRMBnxJ293bZn5mUqERjuxaDM1u6vR9c",
  "key7": "VpXLDNw2BbmKh6NHWyip79Nsx61fqXGCa3CfCKZ8qoHYXH2nGki5M3uX2VSEttuty1GGcXwceJ3hQMpbMa2sq2M",
  "key8": "2HN88MifdDg9KhCJXoKiqy8vYPMoDi3bP7yJ4ierj4WeAAaH65jWhEGapKKZMHwyzC1ahEnHhqRa1FuwVww2iGPP",
  "key9": "5NL3z1xPeJxtLL4V9drtciVhemkK4PrJZziyRX7qWvC69WU14cpbUFLVtHznTimxvmzt2Z4LJyHQ9z65nAYBKZ4m",
  "key10": "Cv7NZmaMDpgTWm9xTRfc3mWGmSYq4oYUp5Ev8Vyu92QR1G2za1Pbp592gPY8UWYJEJdwkSidUTiqSsZa6Rk64Qi",
  "key11": "37XTieoAeJohYpveWK7Nhid7xEMGu6BqoAtwsyrGX6MFg8Tx4wz7v5BPKB9DLqHt7rykEsXeBQaWAJjEUb6YfCsn",
  "key12": "3Tt96NNFbEhUJedavDzJgkvEJtFQ3EK1BDL2n5T7qswNPusyHddfLyqbEhcVnxw8ZyoXuRa64nw4t9iDg4W7o81N",
  "key13": "35dxs1rRxkXgFBAWyT2L29NemmX2zK3AsakcB35XdLgErrQqLgrrFZAUtqNQYNb9r5FX2g5Ms2gi7giPsmxs6E5F",
  "key14": "2yJdeitfupRjQS4jXBCUMoQ2toT3AwBdVkiLwLNpVquosRpViY1HhiqwpnZCDqveNWQos6jXkqnxVejyxQ6ujdzJ",
  "key15": "2pdsrfiZva37eWrf5ige5BKdkW47CRmPCYBTVQD8iwBvpGwW7pbakd9jGfcA15Us9s84JpQw5MVLj413EAC8sBVR",
  "key16": "2fhWmUgHEJ3yfq2zJiYsC8GmQ9EDAbDigFgzomdC8KMtDVAMUa8tDvPAbAeCJ1bWLhpTxSbgmP8Bpvpo4EPqsaHA",
  "key17": "EBz3S7PJCoDyJZM3GLBmqHy97hksnvex5SUV4Js4mwbAjsYk1PGd2mwjyA3P8asLa5RkLn5ZGw5hYCg8tHz4AAo",
  "key18": "3dwvJp6k4j58DSDfN1irEAzc1nMbFimTuMj1HcyZZxirrof8k7C3A9wkqLUo23kQ9dMsgbzDLrWPBrjSaGi6Exs5",
  "key19": "4WNVYHqpsJabdcXkWQ27Yxf9wtUXhn6XQBCUFtwJVcAjj7VaAwqmtZh1L1V4P1KKeadh9yQMsrjS6ysQS9kkySYo",
  "key20": "46JXBGr1N1zUiKz7ihPaiYCJXnvmwg2BfE75NAT7MoHfV3BZGWGmcTshqeen7H5kjNWZKLCDiepgL3ukkVFZ5jHw",
  "key21": "2fv8CK5dxkSwoep2dyN1Lwat1HvUtMqSARzEtiFo9ov2b7Wa6SmrAwdhiNFm18mgnnKRhXdgAWPKbGHx9SBhYiof",
  "key22": "a7FV5UfV92Zwi8e3BPaY9YVyqL5dByRDx7r736RbwJ7ez3m1y826ZaWeKw5kfVqspLegTYQvksT2D61NuVASG5j",
  "key23": "5gnvh6n7M2vNV9gAVnoadPhWnz8rcX3cVUGNWwMW9ZCBCKYkqs4E7Kax6dBFK3AQb1dMjmaWhu6fBKYe66XFDde9",
  "key24": "PhwBQUXZSJVwvjeq7KrzGWbYJzwpJ4S44kmJpVyKnspvMT9eFHXETQjfGxHZxXxv6fXPPiVVrgkPrWec3rUodJt",
  "key25": "2a5oo5FmQiUVwHHjkkFLnk47YigvEC8BiDUQechB1RRoBp8LR2o6SLsGf49sDRkkUukPy1hCMq5G1czhKZhSfuzE",
  "key26": "5wuGo5nUpNqZ2Wymao7czJ6yrqCWeFtJ2DT3F6TuGguo7kr4qLy91t3NfotbtV6LCpagjcR5znVSNaMdi2hrt9aE",
  "key27": "3dwkKMb1z11ZNB2zbNahArfYxjKvJsE2bvrzczhodbaq81sm5NsL6pGNVfKmKmdpFv1Q6bYzqbTKUot4A51LNRqQ",
  "key28": "3wZ5nhGQ9vepmpmKMTpbAxbccePL1Z4scvaGZSTe7B7MuNv9Ymdhk5VR89DxaHKvUR1XL52NooTsVSbbztTvUhGv",
  "key29": "4c5KqTkyNkpuhkM3UiBQnvkeCBDZofpZs1j7hZLPi5J2rhDwvbfpmRQqazKdWmVYVbjZBYFRTCWrkXYsTfA5pF55",
  "key30": "5wbPRbJm39C6DusQbagnBHjeFtZ6me4j8H7uBSMtrMJrPxPPyzvDySyA7Xh2MY95fEmAGGP9AEVuH8JMVonmd9uD",
  "key31": "wDCFTtV58GNUDvEsg9Zr5faKRiBSxivH8ViUa9ztJ2avhqHvhPYy91stPbByZNrTi5BxLTi4TwTc6xFsEeScBHe",
  "key32": "5DinVeZLktUJTR61W6mcgpUEyMsEFPbJyXDTXwm3kkCyantBnTmNQ8g2917Tt5CXX1BrybnJmR8krpsUBpMgphd",
  "key33": "2cPDjpCnoSyWB1ssK3QNwEFjSorivbhahx4t54HFJ8cbKKojfPHQrK9PgLGMJ9KeLB5xfCGhzoK9yeChNYWVuYfD",
  "key34": "66mYy1PaQ3cUtFG3GvuDMFd3mXtoXqhz29PDeUmj5NTUJHmU9a2hCqsq3ySzPLjnsRaSiUR2VMbp6c7eXDZF3efv",
  "key35": "3EqKB4R1dpC6SKWzcGkZV1fQziuBg14vPTYyonFkQkG3VyEYjSLwABzLcyA6rLurwAQkR2Gq35c6gfAd4DHVgnTA",
  "key36": "NdQ6UbpaUWYDEbx4J9qUAN418HyTreyyC685TjKxQ6RiDkNikNmftVmVx9NyEUBAPr5EPjk27Kex8X4SUCx6xzJ",
  "key37": "4kGaXNojvfVrDdM4mMZShYgSACNgNcYLMee55aqfdRVVBNTae4ZGD8DGAUgpnKVofUF2wt78ymyCvANhSipfNMXU",
  "key38": "tf2bU95qHwNgQFWUSTNTa9Wqjuvr6Tqa2fTUmtEvSXhF5wtr8N3DUPHWuuawVB8BeWW3KUHowBi5rnFa98BLqaB",
  "key39": "5w78ikbqeGST4KVdmYkVL8HbwuWepW654oQRNmn3U9u5Wgj5kjE54vaE4MrVuakMTkKQaSzBibPUjTcfBDXbUhqf",
  "key40": "5SnDEYShjutogG9d7e4kFw4uv7KDzLrDSXYuQoExf1Ms2EPq5yY19i6ZrjPQGD2h7a6mSLxGRb1VNFwDmWQrALDy",
  "key41": "pmcXuidUovdnbp4EKNC6fzuW3sAPRZHTdpAhYu5Bs3WwS7AroPDFPajyvzCj1AtWGHxrgdbmrrAMpriouENx3SA",
  "key42": "3Bedokp2yU41gCuWCk1ukKqLQVftSTcJ7UMKxdkaFR9UDmS8p2NrmgJaL1cHd2uMZ7YULu2z7rNfVwJnUJF7Gs5t",
  "key43": "2zkPPz8D6UtTSgAqk3xLBd6VFXYxXxw5WrhVdvsfycp2bwDeT55p1i4QYtoQUML4KmAABrombkHRqWiBPMyeyn6w",
  "key44": "5cQr2cmG6UtH1yB8zj594S9WAyLxYCy88mihWRkVCWTUawj5gAC8Jihjk9YZFSZHbRQPRZ71Qd2dHRaVJnxNLypq",
  "key45": "VVDWM8PfrScxWyEqjkuewU4TRaioqHp6J8h23p4muuuJd1jHcxhbrMCkJ1PSG7zwSap5RZXHwrBiM8uo96F7yp8"
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
