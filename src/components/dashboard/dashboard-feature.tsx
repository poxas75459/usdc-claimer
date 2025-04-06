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
    "bwuYDrKfpCd4LBzyiRSgoA6B5LPzJbHxKu3XCXfrZVdrfL75ji1r6Ysu7C54oGU2aj1pAMEr9457YHmYsqD4Vz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359Snoimo6ycvpiU9F8tSDqL5nG5soNk6H64usTT23dFwTSrwrMqqNoViA78inbjTm6GEPd4LC1e8uPYHpoTA3G7",
  "key1": "4QeW9MKH5VM5kMdVfKLDEDj8sJCSi61cxND57d5Qc1L249aHTmsenWXTw1SF3uoW2oZx57hxaUT8mKVqdDTPui9v",
  "key2": "65NEJeuzyTynUupPmRKeWbp7EFmCwUQNNhmgPxe81jMx5Grhjvs88kJD5BzPXgR1GKrbhspCaNnix2FTn5kaezTj",
  "key3": "4jxUGzVgPcKwYmLRzgFVf1WLMBXa8n5azL5My6UJr2JuDLta9FnTa96E2jKsTPurk9rESDvNLPqy4UTFku94vqc4",
  "key4": "29KPQJm8m1W1U6eKnwWqDR9yqg9ZBRiPnnmAoMuoT4guMXzi2oDZNG3AhHzRrvZ9mcskdJwi6mncyoEEYzv1ZapT",
  "key5": "65oGdpSfvRvknuGmFbAPY1zVyJFTtrZQf1JTExchkFWE85KT71SLkPdBMuAwtFVQPiJY8NKyKYv3paj2TFwDSqSE",
  "key6": "56oCuspyzDYi5FFodA3ZY9VyrqX493nBNxrc4U1m5eYqaA5NjqpEjf3eRzbTu92C9RvrE1WN3f4AZ813xnPFkJfj",
  "key7": "25zqos8ZWuyuH3uWLXqf7ov9BDMgZi5iUvSZwsz55eNXJw28qmbeTKFEBxyv5jeUgCPDUBxAGWeLBnVE8wwqai6Z",
  "key8": "2HdgJqWtud3dzw7KPhasC7ZQVYiawcSsjHbCFbsV5cjNjJUqaiLkZAdj39VKoSC3qwSkxk6zv1vwA1sWdsWXmLZ",
  "key9": "51tPcWuKhocYQk8TEQpw7BnzcwvRZb41rrivii49Gx661vbS2VBwakREVGddVGcZnRfGRyGkvraCgznvvbBUnxei",
  "key10": "5DybmXz3bUDPkn9rKDBkYgYbTjr9vyTZWdTT8zqwfB3CCLyK6f1xJqH6ZfyBb7WPUNw2wXHiMV1Hynnjs6nfa1xZ",
  "key11": "2ifjncPXEMQutwxghxNjNUY6wziy2EYwB7dtMXbygCY8DZ1o7p3LaeFWdED2vRqpH7ten5io6qda9Dz6rKhomwYr",
  "key12": "LtNEfPhCUdHHThPUuHQi2encGTJxYkVBUZV9T3UhWoTx714rdfAhGnenec5zb8A9vNxM9WvcRQqpZoExHThGgiK",
  "key13": "36rSNcX52LvGeYYtaB7CqfRzuQ7ftoqn5rKUyRbHDnjmAjHLE4NRaPNZJoj3oD33LpBXPjZyeRPv952F4vJwH8y5",
  "key14": "5yrp4D6bzNiqRzceqFPQ7XdBTVv9WGaVenP5NJBkgmAnPZVkJqLwyFxKQncRVUBvUxXJNm3XKDob5F2qMUUMqDDn",
  "key15": "gHnAfvCfZZKyfhEZaP9iboTdSkExqtJhn5Mcff75JGS3yLxwfyHFzjmaQ3hdfBZhztHSAYQdHwG21h51qrmQbPu",
  "key16": "4g3KiAk3qQzphTNWTb5fmyry5kXunRAR417ivjNzmPNMdotREoWh64XbFQF36pcgWBr251vteiPoLYzviEpZqs4q",
  "key17": "21iMoCUzBYy9adey8fnitwnxoxXXTFfGXsTXPJkvziKnUkrASEYM5gXnhVXnV5DXibFsqS8Kofr4ogT8vgEtWM2L",
  "key18": "2dSLwnC26qmemekio4MJYBx66jPCgVMgVCUrCqcYUsheBPe81suda6DtdXWbJQZGpDAuNBKCNdW5V2kxsF6CzL38",
  "key19": "2KjUkmDvab4jLfCnRgQ773oU4wi6qHdQ9Tj8x1Eic4P8im4De7GSs14JBuuFPeoVqqxLQrwU6juJxhhY62tsmrvm",
  "key20": "52cwuS1SR2xnmbF2a8Zi1PPhGzy7knUebTnhHXzd7uJdjtQtdQmKvUFHp7mzswwvRMPwzN1RjCMU2NwUHNK5xJfb",
  "key21": "2HTWASKwJ9rvSWpR4CC579Hcnrjj3RBmHZm3AD2MDE2uRMri6vTxw4yqKQ7b9CLHeaWRJ45WvSuE6F47jhMA3Kt7",
  "key22": "5XLrkHF5imswyVP8WKjaPRi7vFEzfszAv7eSxMW5nzK6QVvNEU815PSTwFTtUXuxaEhbRUXxoodYz3wKoJxxiYLY",
  "key23": "49hvSY8LcUeL54DPnyFUqtMo6yPQDsQrDoZFVDoU2YDWRPbtMUrhq8xCzQ41b5zwhofDSqgxLfU4N1fK8UqhPMSe",
  "key24": "3tcBvtnzFYSZFTq52LayKmzKEQdwWEjtQDJ9hmGESt1GvieHFJpaFuPfDu23gZvQ3Pq6q1MeXkyNmFo9N3Lhk6fd",
  "key25": "31aPi5yieEZrnWztL66B95eCJ6NGyFK8DFPQpwhhEjf47dBAfJDFarZH7YUUNSbdNWHNdgvxGLKr7jT4fhMwgtrz",
  "key26": "4rsYFXLR8SJ5xN1R9MmxicphVBH6sKM8MBJhhdhM7jyJffG4pwGyCWmQmcYHEVtL23vkJUs3s7jq13FTEpRSd6e9",
  "key27": "usKPkCHTwWe5WZmux3toK7HBfCxBLSBBdkBqocMeiHq715sDVfTKMdBLeGf8McQNHm53ukt7i7dgYH4qg8rHJp2"
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
