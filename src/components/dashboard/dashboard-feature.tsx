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
    "4pSXr8dRTrepU2LoCsMPtwTRBtpJoyYcTBn1HoxMCAirgmFkihGyXhyP54YXYjgH3A7T6PSgRokyCzGHmQZqbqUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJqVUWH9z4b4MFuRHUSHZ9twXZ9dzdRy5WNd9f753STKmRzXNQ4SJwDUjrrLHZHBMDfxfQaTXUHGtzrxLgb4tPS",
  "key1": "2Kb3gNcAJvzUuxxnXZkXVYvKECQn2v8fCoV9yAitBWw1EsMwoThoSwZAQxFvNaT3NcHqqwNxjeNrjs6sA9kXmQHu",
  "key2": "UE8Rb6CNXL7jR4Z23drUyYBNFNcSN2Sk1ZBHNLggWQ2Ztsu3KDMR4DPWqBjXj5jGUTTNnC5cRWQfb2D46jKGTw4",
  "key3": "yVmsNgycUqTdQbu7kwPnysDEwhpHbEhT6wiaqHkDhmwZwDqat9BR4GkR254RK5dZPPNRLQExYQA6eJKP4ksJgCT",
  "key4": "2oga96TM2ofBob5UyN2uhz8r8ZgsHd1xVmix5qPBXV1GjeH62x4kiLHt1i5YYCuE7YefCV4yQLxb8yMhbdRaGVa3",
  "key5": "2Rz7YSiuWu7R6MM3KxZwPd2ev9zYdDGxeU9rd1hPuWLQqxstg32sfzD9mXnArQsQ3tnite5Ua1fTTShtSRuVHVwV",
  "key6": "3jkak63HgZ6Jtjw3nYV2DEqGHbpYubPpEnzu6Ms4E9JjiEAt95rprPVfezjPGG9NQU6AT7Wz6hGuTuHZwrppXy3D",
  "key7": "2Hz8e5QcTATWQwzYCzP8DmUQsoqdHS7bSGuYS1kejvRVFFvRydBg3axFHen4TuKBpyGYGbHdbVpvUBcyp3U6iCc2",
  "key8": "44v8gLQ9GywNc5z7gPDWSBgwHLGPuF5nFtUqDw5QZbq2GawKEmQurxjphrGMKE7Pm2FY8Fn4jkgAyf7wRoNBn5xK",
  "key9": "5WZ7qcyfm4WMy4ZnSuza6CpxACrqX8Z4T9UBw9ZcW5pnnEoLZ4pukWkBEEuGZtcsuoifXM3SGwCVUfH8EQS7wxhs",
  "key10": "5jV5jbdvBubvKALKFnM9ALqbdA1uWsWegLy3JSYJ991GNTtKShN77mcBE1RQpL7um55uutKQZK9L2DhEf2yVuK4d",
  "key11": "5WQKxWmWP928qLsfujcBBraLQoyt628YGzCnq1Vnt4C4cL8vzZvQDAYHGmzBJhg7dsVj3ayMq7qm2JB55vp2bEbo",
  "key12": "4rhhyfFKteLS7NydMto9FibyWqav5oVgSgWU3B978dwQuUvZBdj4ni6SyExE4ita7khL66p9mVUkMfDN1DHP5qwR",
  "key13": "5BgAEp5Pq9SP8fHqSEbhsvWbWJciMHj1nLQcbifeoh6M6U4DGvuigrwiUmhWoyR8igmtFF3YoNRSKtLWsQAnaVZf",
  "key14": "2ZhdJnx4qpfVV2JU3Fkvv2vZuvsf67CcqRQSuUFVdssiHguMZ7L3wyecHvn4eFqmKc2PkhqaJoDYX2P58XRBHHyC",
  "key15": "2LUwZZgA6WqLJfz6d73uV1y5vDt9Lv2cNrnY7gRc6UDtKNLVosJ4rjHJk1RSEFkSFQZMJ9t9geKvryymbwWKFyQB",
  "key16": "aJwQ2hVtiq1dBfPH6enayu4sDxzGekf1aXudLBnSEpefaAK7UiWdH5Zr14UXzaJmWy7TcpkDbUXAvsN3K2qa3zY",
  "key17": "5kTKQECHvhjNh1AdKuZN1LgHfdWSW9RU5Qtra2D7sz9wvw5zHpUNQDB8QNi7aXs81jFJe7eoJQZqbpwAh4n7A9r7",
  "key18": "5tXuFjuHoBTx95iEkioFNsuf2UNpBHXzKv2rGhNBQf16tP6BzJLgxgs4RA4UsNfD33ZoJb3XiQBWrJmhKTZ3ztLA",
  "key19": "ppWtvJMz5TvSXXNuDqoZVAqGvyxBmEhRPycWSZ8nyjLomRhumViY4Leo7BAKMwwyRzpDn8Lpupx1zYe1W9b4jKi",
  "key20": "GWTUB9nSF9spDxXLFdZN6fy6wGFAyVdZJ1on4M6W4DaYgxTS4Z5sH999D3oBSueghV8pi5EiAgnmfaCazuLHmW6",
  "key21": "hymsppGUs7BjqApjtAsiwU3fqVNcjR6PVuzwuuAbQhqQ7KgQVBFGgukaZgz54RXWg1uKBWzV1MnqmaFSkQtcRES",
  "key22": "32534HqoBTssG5CqfR8tZmsUbCkME1XoFfpvYsyyLJoTDJs63q2fCZ8wULZcjhNaRv5Hve8VrYEZvpJm88VxgxZ3",
  "key23": "2KGw5yerBeKkoNpJpkbq3CuLfUgJcbUULMNoEEfdytiF3MAAKJwnwf22sGS9cTJWwRCLgHcZJovVRP6rhScwzLW",
  "key24": "3Mgn5kUpYXXdjPBekUh6ytGvo8C4AD7s2scfpR93m7FX3hNAsFZdD5EEDJ2xa1gFs8HPo7sTXfsaeo4AiT7YVYmg",
  "key25": "2S7RFhmH374UyDtomh2uEzwq8zvtPhNwfK3tAeF7xyB46DWNY6fGGduuAvnWeKyQb6Bvxn9YjsQmozbPnDKBQNjr",
  "key26": "38mHeQLrM2JtwBM9jXQeU7Sieuhw971LTpuTvvmwbvVRuLNeUVdxWxLA87TvcZQjmBi2dmnUEEFxUmPE4qqQeWLR",
  "key27": "2hpdp2pYgehP97rMU2ij6JnFhXREgB45QXSKqLE1eKL6Rz33ziipnca8r3LtcpVSzM2ErrbRrsLg7zbWo3YP1cxf",
  "key28": "ivYijdeDvJEuHmdbLFejrS4FoqSHYBooEEPNK5yaVRK34ovZLiFDTC1mNCfxvf4ARPLraFZp3wTxSMbmngRGzBm",
  "key29": "3A5HfjD391qKwJXNUGNYui8wq75jrhtRkL2NWtwkmg5Ko1WzJpaeAt9rVYHj3B7zRiq9YoQggfUrm3u6gX3HJJZR",
  "key30": "5Z4aVSvequsYu9QEmP8eawVyxC3hT2xcXppWxhkNkm86bSJvCiKAiiDfNkzaef3nghb2V4PptNjtdT2NHFcPbHR7",
  "key31": "4GJep12usmVp4amDaHUtEHRENJ5ZofsuchyTvKe8ywxiMQ9Qk8o2wEtw5B2KvGb238cisZfC4GSrR381s4nUDhmY",
  "key32": "3F8iAoXrT9tYdYBZdmm2jvfkkikmTWvuiiVH3AD3xzzstSrW26TACrhijGtGXCxiJ7HJnNRctMiD4aWCR4nKLajV",
  "key33": "K94w43N8ZKXCzdyqQbpiQx4QBn8QmcLASgfTyr3NUkYgd4RtUCQGUuVu9jovfiwKtpgUn99TqKuuvSte8iMkcwQ"
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
