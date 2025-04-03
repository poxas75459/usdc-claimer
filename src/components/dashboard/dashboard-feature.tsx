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
    "4fKEEycRHXxoJXNXoVEiZQpKBLaTFPVqjkub5zzBDmtzTgdUmzAeMj4tbBd5X6PNzSqmgcD5G5B8BnboZWojotVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZkfPgHJJaGKd6yXCSfDYg6xKjwbPP5uQyQ7QijfDbj91oHVBia2udGjqzyyUqJuPJQQGaWtLcpb3BUPEnsXRisQ",
  "key1": "GdmuzBZbwMBjmFZHJ43b3LMNe64c4T2Ugx3rUKtLCch6iZCZm26gFtZMgPD3kMNagKPixHdoZeVNbfHbhCQWQ5F",
  "key2": "2KWpcjZh27LVAZcHggkZKXZ7vWHNgPJe8WmeTKdo7tjGhFThbpeKKTzLLHJ1YvF5dVuG8EBmMPNtgSZcJoX8b6i1",
  "key3": "3pjZXzyjt1HqYtGZY6cNd6QaA3poxPG6gZkmhjjcJNo7NZB6EMAQkAKcy6KMGvJkqB9Rcmr4qc9JK1y7iZS8zF1a",
  "key4": "2dGUUo6nWNCtQ6BkzbwDkGQndrmUv2kdi6NRP48VEbzhpTrnVpZspR9zxC9bH9YoJY88iY8YnAjFR4u559hBT2aj",
  "key5": "4cip56jMfm5xKkfFpS1isE3LpQX2qqh7j6Mp6noW5tKhvceZXeYPmJskwyeakCVvPL6Fz9c9ruPzGVqmjXvkaNFw",
  "key6": "4G1KKqCGtHdfskUnTnShjgKCaaip5P8fRioJ4MeunRqFffqMgXreXumNTjZA2QzWYCuG7r1tzXxQLeyFTodYvQhx",
  "key7": "qZqBJ7gXN91RZdMZUXMTzNqb2es5DEHFWjHNFFXQWQPRL7BWELvQ54sLJ6owsKGCaNNDrUi9hNQBDMksexPVF8A",
  "key8": "45NF7muugH2dYt2gNHM8iiMViaTm7qJFuaMG623f6QYoWVxqKnMc2N6VgaKoq31RhMwwaf1ERttqLwRacjXwjJw9",
  "key9": "5TXctZL6ohqq48GTAXABnDhRB41U2MjMFe15NKerVC4w3ghi6udBBmutkjdpQYtUXV6Xzhp6wQHPTcT5L9cizE9z",
  "key10": "eQsSWnfRiczTTYGKusjtRxevNkQMDNZg3Rtqth3hzzHBXvar6SA2WSo87Gn6KvjXFGW89dyoL26EUmvDcyUNtMw",
  "key11": "63h2aXUH7pgZBucahiJyDpdya4kXzg18GNRisJvwKHMYrovvNhoG89H5VXo6dFK9ot57WhD3tHTaz9tWtq5TRhnZ",
  "key12": "5awy4pfzdVAfndJjBaQ8ZSKvt7T7GS6pTGLXxEf5tu99mCSxNNig8T2ELDxtc7MNWebaFfKgxJA3fNBb87gBWNPt",
  "key13": "3caQoSgN8qBDFLS2XiYkXHUFWC788mtH15PDA9HtYhcWw9LeJmmhrfRmL4roQW2v6wFz7itKEFXPgRU8ijGdQZfc",
  "key14": "2U4mZVFtqAcJZkHHtwhhWJvsi5psSBUVTAMbXVgpx99wutFw9pC3CUNTDF2LKP3iTryZ7dNcpJ6QtYK5uyUztYC9",
  "key15": "4Q2L4YVpz8m2zJt2EQ8iHGRcJ4dGQVEWAqphmZPAqhasNTVsTgRk4mgefycroAVQiJJRkqnQJmGAdqANErmFHqjo",
  "key16": "2dhhMhwicxFeJb753Axwf8R4v3YpcrCjQpGDkrxnoSNTShx6w85bX95jWN5rYP2qs9TVGA9iRBLhkramcQNVmx9c",
  "key17": "55J4QvMrwTeKztHPxNbV77UZ7NjhF4anLWqa4TPHBGL3cvwakQ5d9K5Ut1i3rfaLmdfbH8oLkH9qJZ21bMNtbNNo",
  "key18": "aLBn9LpSggvN1KSrMv6Fyu1dxMuTTPcVaApv6seaR5U9uCgxaAkwuwbcN8KpkQKbLqnjX46DmEw26JKC5ei2txh",
  "key19": "63th2YdMUnssbN2tcUqjKmaEjK5986k1BEP9YrYbhcCuuWRerjmqs5yuRCNAYjkdHgkwNkLKYGpL95ue89VzZRdi",
  "key20": "3od4WFFiCh8ifhZdfufuzwNGUGuSnv4iiFcsJ5BAvnxYjJ2TEeGHeinW2TN9TShpw7JcG29on6jXTre87sA5Sxx3",
  "key21": "3a7yczUt84GCtrZhBWCSDjhUVP8f32CEruUYcjKW14gjxjnjojmNsuqL7t3Ua6dfcaMVM3GCKomHf4PopPcADFad",
  "key22": "25weWmw5t5g3Rpw6zTtXegbzHGQhxotsoDv5qoUMpKpDAq4feLBr1KAhAPvnGifXvEuivVGXkCogVTkEFRS1maw2",
  "key23": "41G2dM6XQAjX45ns2W1meVXc2723YXxxPDRBqUNtMyn1gsY4dR2k77BD9TLjMwzZ6e8QLu3PUECeZiuFQxjTzGTi",
  "key24": "5uERspsvSa4CE1dz8u6RckkZama5LX4QdUf8DDVyZHrRnzAK7vyZU9KmjfDUe4Psfbnu28LEDK6uAXtA2XuQnwHb",
  "key25": "57BoDyMtnq9aAmzYJCd2nhp69UgJfakbsy4ziAvU1bbz67j91pxZy5GKWtGXZpwXw2YGYrNwxmPu7eYaJPZR5g3Q"
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
