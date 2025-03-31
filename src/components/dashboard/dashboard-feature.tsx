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
    "22o2AbvWVjCaXNSxDUCXBLcGDeXkfatk8xUGcmexfHWxLjjX6F1R8D5zJfePJaRs3aX8sNjrN9uwsH5VcMEeQpgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yet14Mb8BC4QaTGnfmNGssvAudQykRtV6bGhc9t9WhPRq5FHFBPBcK7vBHVSvAZd7pnZdtTZmUBFojm9ibXj11E",
  "key1": "66e4G8QQQf124DPEfeSsutWwiECmyEp9Fgr6A93ywaw1ytPDuFGYFkni9yveFmTRbJdtsGcQWwCkp8nnPmLazs2P",
  "key2": "5ikxYiEzxk3bBBYGdXzS3My37X7RvMCHwoKYVRqNmqrKuVpfh8DLFSxMkufp2k288JRDHSn8ssM2G72FdHuiyiyr",
  "key3": "2aNJfi1GuwBb7gPzZqxZHcs6j7qHuhuK3ve9xsg2HPcLYD8Mds4BEetyYTWqAhh1PzxVKiVaoB2eFbUX4DKTZbay",
  "key4": "5EVJmipFZxBRcNDv8ggpnhtZSmkQLtDUDYsgkFLxMa8hXXVJM4QzqwQBpNF3cC1dPaK9JGFp9SkQBTAw6isjPyfe",
  "key5": "26wJdx8aLH5gBRsxd3xKrucDHKFjUeWLMwkJEdHAjEQ7sUSfEgD8jJaA8DmuQM9hZuMV8R8JSsKfoXrTQbKqvtyy",
  "key6": "RjfPGjC4jxSbanP3PtLoJLy5xn567cKZyrekMPCpnh5p9FSSWoJLj7GvCaQWLcaeXLnuvD5K7bRqfYYAGPrepoa",
  "key7": "M5R33ebPEbhTUhxUSwfE2fmoiXyC6nZuq4aRAUfUGfGERe8zBu9feQLtXvrTfg9T4p1eCA7jZp9fE1Fmo36b1Ny",
  "key8": "zNEU4RAdcpAFgwCovsAraj8UnSW5C6DekSYgy9F28jjm6eufHiaCvKGvBBcKVhShVzGWp1ywBxvmnL2HCB6KjY7",
  "key9": "5YF3RcXtTWCspJnNj5nTrMPWpGMFhXrLLWjHYaK8CkCTEdKEUc8etnfQ3A1Fpap3PXWdg9eZcuViCCjiRjYFcjWX",
  "key10": "4GgU7M6TJ3NYapotqVRvFcAGEX4cmXqRpaSd81thdmFWMCpZcPsic42TvRgT8mJnoWwvLiq6WGzoTTnPyqp6HwPr",
  "key11": "2FiMV1qZrkKaooEZ6Bi7jDk1ByXEtobmq7YLzuP7e5UmHy1nGcyb3WtkenXBiBMjRjMEv61WJvMQ7z4iTX2UFq7E",
  "key12": "5WdkfbGsZnfL8V7TnUimG25nmPaVeFLjQ9Sqejpkxwu9yfyGnj7bmViiF5ALfkVdWwX8zG1vfMQJtS2xAVQ671GC",
  "key13": "3QU6XdTuabTAU4wmmYJjW5ncFz2aNRNTTtjtnrdoSkJbToVz4kVXC4cSNtxbYoWgcYDaj2kFrXZ3far43nmUY1nn",
  "key14": "CuXHjNuhNPgWuwMPtuK8eTrjd6JtBGVPJDxsydHxKnTRUCJJWA3psEd5nC6MiNNoQC5evwBcSW3cqArS72JZXa9",
  "key15": "67B7RXbs9N5TE5qkQmtmuFcXRgFLpiw7AuMALGymdDnX5VvQhNb46tvscruEykCtc6XHxYWoe2CgPHaovyXhbRtf",
  "key16": "SRdMTkcugvvMrCBCeZpCTfKuy9VWrcbFwY1Xdao2xAkNi5WNar3MC7woaATvzN7FNgfCrPd39omvPLsYq83TQJ7",
  "key17": "3HrqcjvHjQvqq2PTuEABKCzJy2wYK17ta6U5gzx3pXQk5SS1ZrVqtmJV1Qj9kGN3Hb311FKRtT11CViakVpABZ3e",
  "key18": "YvAQJhmnuSdagJW9UDsSNKjXy2xGHjcNJLEsiSRwjkSNavcSQLkH77EhCbaHJnKY9GYWcewPfrWhUGaZwxV4bSJ",
  "key19": "4NKWDAdUqdtDTzyoUP7tG2myuz6utNR1CfnQeRk5hE6Er6W3iBnjoCAUh2ykGGjTkp2Noyh9AeJG7aUyPoMRf829",
  "key20": "2mZMKknhmobd4s6akme8oMkvA8dYnijCnpgTZRHEAvqVQ3gsgVwSxT46vvfZ1zzEa9BWsAzPJUgxd2sgb5P4Qafn",
  "key21": "veAPg4AP4YCEyHHcnYJQoG5PdtfWw5ZhD6bwV6rAE9Zu7LBb7Gmnbx4epCVtZLoKG2kQxtuDsxKjnL6bkjBzran",
  "key22": "5AsYi8fXv6RqRAU8XaggDmSFxPMsqxusq2s7FMoqbFwDZZeCQ67gtMuQbfmX7TSnf4RDRWXixAsCVk3b2b5ND5Qe",
  "key23": "5CiRNRbTQ9VSkod5j2z69qGZPSmmU3jYqwSamafHqEYde9kKvtENeCU4Nnjxs5D1EgwrJJPouXkWAwqDBcsMXQr6",
  "key24": "3ZbksVdJsR4vTZRUWAfnTikNVWR5QHLjM5bJiMyLfFNcddqgcxmDRk7YFBP6JuLW6xcWgnGJjFD6jmUePca4MXED",
  "key25": "3qUppFrz34kUqKZBR9FExAW8f5jQscH7v4C8KGZSxL7K2zTDixiQbk42pZd5nHQheU9M6LSpGitABm9k5zXc9AeV",
  "key26": "4B2m1HFH8vFXEqhVxeVWT5aAXtRXLy3hiNXUWP72nZQL7XhXUVDXDvaUEduxDVF43a36mjM5J45ghRTGbPY1pUXT",
  "key27": "PpdkuA26Q7Qf2R6HTWbBkSbWemvkoCu6TScN6WjKz9Wiy2AXFrHzPMXzFgNKSvcG3oY6TCPnqaJxrPtfp1pS6Pb",
  "key28": "5z9g58qM5sK7gEqcgYkdUxE8oEgxP7N7bEVTFqRpag3LBWoe93fnDgHghmfZ2ADWSDZ1gVXopSo4t7THUMpmm7NA",
  "key29": "3gXxUR6o6FNbbcdSrpWnj5AoVurkpqhRnZE9q491NKPe5wQfZMicMcnH2UHFUGdAKFDD94Npx6n3NBTFKETMUSws",
  "key30": "4YZFRsXEAKttcz2KcS426RaAazhpVBnRsskpRLmRasfZTyEcrFAPYMR1oY7z8BwJampaMHx2tQXbwiJNb6UvnJDm",
  "key31": "49KkMJDJFS7XA581gSZEkDwcFfYVNnbvSs41ZipRyKkju3YY9GTYhTTPdz99RcD5ffLMo9ipqwAtgRiWgLSVu7D6",
  "key32": "46RVnFaVnPLULqZbKKonce1MmL48bBgBuG5vEyewpMtgYiN8qfGp2Cfsyy2Y7mGqfgZJsePYABt6osHbpUZF7nRV",
  "key33": "2YnojSvTgxzAYFaW6yNTmBreAsj6zFFu2jnJ1GT4BX2Jv1yvnzQrLWx44ka8UscUNepak3xWVMxEVFZ68LrMUkGk",
  "key34": "61DXk8ugygtVSGxzk6EdVs22oY44duVbyurm3eQdX4e8Ms5bbhsR1wkhxaADJZvecBoPwLQrQYYPfeNn5348wxJd",
  "key35": "2CxXQS52kjkoSdcVJ8XHPLWMPj9r1CVgJ4LM47WvxXvWBJzZk9aMGASPZuUHVXGHSnaAjnqmYS39V6D5Fz59Gnar",
  "key36": "3W8YjBcGxtt438yMKsW9EAgecjgcR65XTiLSNihowKEKfyVcJrbJ48m3WvYLJ48qqWjM6kNyb6g4mKb1T4McJKnB",
  "key37": "56DUG1tLSBiGv3bJcycKjX3qWr7eJtwuDAD9YP1Uys63idrgPHg5FRuB18VyozAri9UEZsXFgXZkDEfJx9y2yHGB"
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
