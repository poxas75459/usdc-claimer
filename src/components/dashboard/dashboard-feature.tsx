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
    "4Wofq51Q76J2RWf99hbobrmVAZQX34iyteEMQhM2jvz8FNCFfzsPbiYXq1NiRda8F3syumr1VMJxYR1EKTErmFBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5QzKMcL1De8Amb5osKKLibDw99vPyAEbwrJFaiinsnWQwuq3ApUAW37393FAVa3dDLSypUFZfFzirWvZdLg1m2",
  "key1": "3CCiWM7x44ou8UE6Wt8PZhoiiebXh8zGNw2MUrCprPJV3pCqGYR54N7GuBGLXbwByH58AXBR5K11CRur2cMnHJbA",
  "key2": "2Nmso48kihTJAiP8TBuBkEtDkHVTrXMiSg6Jd9DADqCmXurZHfiQ4DwWnSHea596dP2adZgFGPQ1VdN9qurcJJuA",
  "key3": "5GzRh7b9HaMtRHz7GpWtQR2xXig6BvHtHUUsAB5XtLPURuXbuZD277DF7pa13CddrsCKbZeiSva4UDeZWcCRRbSu",
  "key4": "23HEyFhLnXqcHPQsD8tLk7zuL1EcynJ9st2kAf5FNrLyj3FScb59nDcvy2TJBW3gxr7hXRexQfeHwe5pZfAYH1xo",
  "key5": "2E3NMASGhC6UNMAYqRNjoinpiQktPo5fnekg1znCMSgQR4iwgphhVTv6H44QYAn2Vby9pSxRNRJSCZqc1QPTQwKT",
  "key6": "uQ3aHBPwCJ5p6CJYgTWiWN8Q3fPAHqvTpfA9WHcsKbEorQ66fJzFsNQ3nzyPXC1tKZqci9n1bUkQxA6MXBtVg1f",
  "key7": "2nUHG1MjbgUxryUdDneqfmvhBDY4F9S88ya2MPXHNTStsjucpPVqoF1mybBLJVAGWxriuGhnBTJMuLsDwXEd7FHv",
  "key8": "2hazFMT24eyUooX27CjnS3oNuhdyjSceQbjG98gfZgy2vWNKM5xB5iojSHhAE9eDTAeG9CQJea42t7djNBsrtMFF",
  "key9": "2DFp6tzxE4HTZgF5Lz4h41U192mah5ZxJEgtSCd1sPipAhma7458ckuwG5NKxLmrV7X6inEBWQX5oYNWkuZM3qme",
  "key10": "2Vv1DgNk1KrTx1ifLYR51DPSRW9K7n4XeB7ZHZb9A3KctivDhGD7EkVztYH259dETfeZScypM8fAdpYVJ9qvuFot",
  "key11": "4MwmjYw4gbuVL7T8y6j48B9kQM5rYcCYCmZs2kBYJrxegwe6orfs3wMiVnhgxCbNpb2hazVnkiSDFEhUJRb5Wspy",
  "key12": "51oRDzvJf1827WceXbk45bqhq8Za2MgtEkM5ra1qyoD6gy8dRtt47gDPAJiiWkMdJprwHgv9CqGMG3CgxezgkCRs",
  "key13": "3WZoWuZjgGuHX7BtCWMeJocse6gNZqjCbr7a5w6rSp1dGMPLB13BtfsS3HHmp5Ds57BCLxpMVy489viMug7LBBi9",
  "key14": "TBuJtnFHTahjgXM36aTUckkvVJqhpoXxfRkKkh94v6hAt9KCdtMZwSL5o2oW4peCb9So51zqFWf54UbiTtwiAae",
  "key15": "4RCAB7Pq2f56CRbrCepnf3gccZWKTmqNuoaCxi4yjiM7hvw79XuAf7d9hi8bUSPb1q1jduHcxdbuwtx4gdtVrw8H",
  "key16": "34XyoTGyXAmxhjsxsXUjTk4SThgmujFapZELf1BsQxfY5mgwdaXVhVF5UVVbLW49TkdCPfmRsEcVviruswcuAN37",
  "key17": "5zENkYHJucuVJ5RmEas1KzxAur2MyTBukAyqMA83sHWq9NMnVeF49uhuWEifoKsospBWYDbHZ6FwYPa5vjexB5bx",
  "key18": "4kWHXMxzrS7QkpwXAcKPhCuHjMtXFfRjEZM4GwsYAXLSJjQB5sPGGRHDxCFvRnSoectNS7k5VFna8CBAVuLsoykG",
  "key19": "5e4qKJZ6vUC5odeaNBo5SNfKfnY3j2e1jo7y6zkYofPcszdfgvvLtdYrKJhnx5PNy3tYKrXzRrZygMrfCrgkih4s",
  "key20": "61g65KSPnEhZJi6KSGUPuuJyfhy1n8wAdB7RZym6qXacctYfwvk5E5r8hrYuENy9cFD6vj8Sw9J1Q6a2rTG1izX1",
  "key21": "27W5GLswqACiuC2RvroLV22Gj1hxKuA1e3sR6RGS5hv74dBtb8deqKJAjGTeKdVAE3CXf45L1LqT4hiNUcUDHhCs",
  "key22": "1eFJA3Gyvd5EWk3SmpHsAytJoNauhVGWdjnk1YbzvA3tZnvKqAqLKiWYoizeDxymzR1qXLW1xkM711NrshZdVKU",
  "key23": "39r7HmLBoRYmugpSbpNj2narBYsEpEEJ4yZGCVobucLxQoUy4xjHTaHhgvzn53GnrHPmLPDTpT8grLPfuf1QhXhr",
  "key24": "5Y7tTHxX79u5UvHi38Xz7yhUY95eTATeP3bXEDWg7Z4sCvGSpwJaL7H3WKd3S7zgSNTSwG71joqm6vRqzS1Xsrn1",
  "key25": "2oNyTJi386RheiA2gyf3ijKgjE9FQ9krXfJG8fz4igmT8ARKp59hWFFwyfEEjbnQSvdooMRx5RvhuvauEmQ43AdS",
  "key26": "3JcBoqng9y2kSK8G1311WDdvYu2DGoJ6cVPK65Cmweynieu7faq9jHatycWNAgqfUE4CfYbNdWQdqd8pVRfJoSec",
  "key27": "4KoKALegYG343vLjcVfGgHmAqne9cB8g1M6ftYkxp69RAxhK6t5KQnXdrqkbKKurPbb6ZxJB4RMGwD25QWnRYJ2",
  "key28": "3i1uReZMR7aYGXbnv7F13gC96BpSreUxGKyYUFjLBZ8L3JrqhfDbpXyQwswWZLQ5xXfd1eCJ6QVVQ8VH8t5o8iDF",
  "key29": "3F7LM3HZd1Pqg9WWuAYZoN5dLrd2NWdTyZwQZFkJgEzb94aik86Er48goNqYAyXqsgtxXgd4nKDnuHo4wmNW4S8D",
  "key30": "bPyEEBxenem8nR6MjNhJq7onHF7ymyvnffUxaRzDnNvq9MFKqhKqerMRx8ztWB41LUdQxg87kcFCTmtbFa71Ex6",
  "key31": "5kNEw3Ft8RdCxdvgoQU4rLW9ij1spui4wUrSC2adfkAGfiEhLne8wXRia7uajf3EorCEUGHXbAWb7TzYyzvbxr2P",
  "key32": "4ZgDtZyyZVorBM51DpRiQHW7fhLsQxxv3DxuHgcu1S4Ht27Rw8QdfcrsZcNv6fCY8VEiuzD3913cesRNK9dfKvAN",
  "key33": "VNGDJJdAYqo9JjTRq4EVSZC4ndpZ1JBXUggfW628nqZkDUZ4KZwEEgH4WLJYYbZnpwYqXXimgUmcUzC5LmVC2yx",
  "key34": "4oAEkUisWxy7jianD2353uHkarDArGCp52KufJjwymB4Cbn9s2ESkTFCdbhL5KKYe9s5MpU52z2E9DfMa9T4mX9Y"
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
