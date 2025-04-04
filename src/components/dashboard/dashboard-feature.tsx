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
    "frH4hC9kviN9TNjuSP3Us2Rd46UF7EXZnu9TYWeAvHdbiZWS5LaXogB3wFw3pBUyAmKXdvrY5T2VSYSGZu5hLaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGSYNQRWgjB31bWjX4SAszxuBeLmYPBuHoRohS3u3TnBooGPTifp18EMNA5xgHTPeeeqFrcRkSoM4V7gdqueM7X",
  "key1": "tKFBzaCGcgKkhWPt4zzXxekDypdSZK6Tdiq8nSggy5yNAAd1Njx7QvqTMrX3PR3DDgr1FV1ABsKegR5j2xr2kfv",
  "key2": "2KtQzcx3zYEE9aAo2913J4Sz5QZXPNNL5bmJ775nRjHStk6q4kUFuoATaYsPHPg6oKaPUNGL4vGWXMqfHAFt3ojB",
  "key3": "3fCfn48EnNHkXqMugFqn6GYWUBHCX3q6qoLSEKZ4AMP6VxFMPWuWeGZtdJ6B2VrzCvpqynX5pbJqNrx8R9D6RhAT",
  "key4": "67gFRNM7Wukfrj1QE2kGuzHDuXZvgsyYfHYLEfTzitcwfLYisnYVGPFDcLiabKEQgNXo9UXQU6AH82wso51XqAg8",
  "key5": "2pKbrh4veRAXXAGStKG2L14S2hdYG4KRjJ964vj8xMrn49VB7MyxDGxQ3eKizgAHfeZyMGFFcKhj28gGkU4wpKLN",
  "key6": "3LFkcPxrWh3RRztF8CgyfK7Z7skv8ok2BvRyQSPh1PFSVXaCK3wGaVnnivj4w5HLFrcktrsUDn6PDWFV6dSfeu9Q",
  "key7": "2sMnUeNpQLPNKDugoUjhyBbBeskq15pPS5YJmN2LcPai3HBkNrRBcWi6Cfio4bPkLYnE6cmyJRhJ3TWJiCSzofz",
  "key8": "5dVjcrVDHtCK1dV5GDU7p5U6adhWLuXsZbjGpdP37mXZQcV1s9vRFzsZxxQVa4DxiFdzBDicNRqggchr1J4FobiF",
  "key9": "24LYUeL2ShjjS43y2SzLB4gyiA4xMK5LetjxEvtUgr18Ky7La2wLXdBQpHZxZYJmsXDH8T6Jc26R4kfEyDQEQMRz",
  "key10": "4sgPmovAsB7CkdYfjqFkxiQJeFRcYGSSniQfkAF5Goj2LGqm9H9uvS7L3jCwshDDUTVkScaK5pv62mFmQ9QWBtQr",
  "key11": "3ds5rf39MwFQdpfvBga7c3CYmRScjdnMKcqDvqwNi3c8HdGMSJiisftoDZpTvQ4zUJ7gbkobULD5Be6UdYJ9sj94",
  "key12": "5XhamzE9Dus15Vm2kUPc2RBBUfJUMYe1tCJWJUumVn4DxMJe9XtVzG6msjJNNTGR6z3sbpKWGuBiFEBaWjaNFufP",
  "key13": "4YmqaXEwWHJQ5nvXgqLETBsrCzMuqpdysr3E8dhi9cz1kBohdNg2Nt4FCKp14waC7SWnm5JM3eLkcxCffTHR4DuA",
  "key14": "2c4ip1WtugVovwEBdiHdCs2UNjHE8DecRUkS7aCPUR2ZEYsmexatUHAQ1PpHzXvd9ad7ca5NJWL9wyABipZ6HLvW",
  "key15": "3SqtexMVQazMGQwBmXKCTvLQ7oTDkiSN3sqEkBsRWwKvUGEnnCP3dq6RXjLuDpaNvCNC42VxZM4QMaNyNUs8KF8S",
  "key16": "3p4zJtga4YCyEyQ1B6GPz6oEYS9YsWnG4zK644VHA9MsY3LPkue6efPoT4vY2VapLtv1mGYemddNn97JjULMj1vZ",
  "key17": "WXVBYNb6NxnLdxmjV6ikaBXN6fT2ubTYL6qpt6z7is5vQ7zdbufbxeeGzovscftaqTHKEgv2fMLnbGWZBSj6st6",
  "key18": "24wvc5Dt9Q4Vt1kBHHXoRH7XCRtEKnwPxzbmu6d4PeCyNNL75Q2AsVufYWw6Z4Ln5b86o5XBB2BYzeiPqwGVb1AL",
  "key19": "5korEPnxsiNtCkfvBrojxon4KQfuvze1aXXkhpEib2oy42naUSW3iCB2zo4XAByZxZJUPXw9C4FdDxABaYjXeDyf",
  "key20": "iGALtFYjuGSRsc4EjYBVSsoZG59K26SU1gpfnpJjp5us3Fiesj58zvcTximabpWUQLnZ8xd3kqMaoPm1YjyqF9M",
  "key21": "28rgH4TRL7cg2u1srddAyNgGs9YWxwQ1y7k8B1wYeftqDZnkCeCYEaHfXem9AiwNbmS7RuQqNwUzyMoSRXkXu21R",
  "key22": "D2kEGQmJkvdPHiHSXVKKja7zDFuxE5WnWoSeuo8ZLiTLHfBKvWrHKxdARsVhUkcyvoGvjpXPo1Nca5M9wDHtdAT",
  "key23": "24uBqUh7LtFUMQLZpEYQ2oRMd3jkTbivKHbj4EKN2vuh5yqWAgyUgVUiC4xfpzjX3uRa26duY2JjcGv12e4AaVvN",
  "key24": "4NCuXhQtRkb9BpHPeVZxE6ftgpx5BGkgvMPHduTghxbd5kDYaB83GvTuSW56s2tefJnLJDdn3t3V7Z62NYUgKWeN",
  "key25": "27c2kazGrmrcgupR2KisKcKGSAsBnqZKkWtXVTQFzGvM4daJH36VDxQhih6aiEoEQ8ds88tKzKVzYC3wsbqDadty",
  "key26": "2upPsbq21LWu4kdDdZ4Sjppc6aWQaGfTS2rqg6CUCAo6X8gkTvvkB2MnDNx3X3314gMVwFWfXJAh7gBCKvqEJH1o",
  "key27": "vs6L1SrD5qMvEYf9r6hiQa7VwQ67irCy6qFVSfLxFdKbqeLdPd85rcCpjUAn6NmKwAr9bfxx4Cu55CpDjHiAeN2",
  "key28": "26srXcamUgB395pQJ9Lwani5ZLovnUDhfqjhrho7WRvcPVyegPvTVz4NvQtpg3Mpnqo96h4Jgd4AfA86d7ryKMGr",
  "key29": "5DYVWEqdkRcRNohtc5aRMHfRYPmikTtjRjXhPKYtJNWbtPU4m8aj2JFNWYpjJdq3t25wvEN71xDi5867XkyoANB2",
  "key30": "2AmxBUE6eq1oufBD7x7kPQzNBdDi3R2ZUVLFgyp6wL3Uaz7p8BEHfvNUdpA68YCiDrmc5sYpTsTnrvbMXeJpX3L4"
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
