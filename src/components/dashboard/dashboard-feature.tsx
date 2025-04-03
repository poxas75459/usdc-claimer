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
    "3i1oQ8rtTmyhJjSWuZn6Kpeb7uuANbMQ2pU9qghQgzna8VGoNbCz6vQnN3VeShj2hhKjnMcuHeDQZhKSUTevyXtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bCPWLgvUSg6fDkyMCGfADFWQBa4SQi5aCoNrmTHs5PwLMttcG2AneUExtEZ9KPduJyyB9WGCYrrVD2m3HxWtr3",
  "key1": "64DFQaGWGR5DZc83jCRuYA1fLzSYYBU1TLLFiYnoV1hysYbwX1sXSkchP4VRwoJ6U57DSiYRmzi2zKDMdcN8mcue",
  "key2": "3tyLE6u8v3AMtLey3ZikXZbrf5FeqmjFyDDJjrRju8xhvy8o6Kg4SUq8nvdkX88cBeofHwcTiVs5UT1ZThnDFpTc",
  "key3": "26b1nzpMjYRtuiLvg7EwDDMqvJ3XxDZqAfSEDsHK8AJeaTojdfZ8M7E4wPchj86yCpNnED27NTupq62qcQh9qmut",
  "key4": "2Lni4ynCEfNV6twog1wmfN5EaZT3pAx8u4kQ7RFMEEhXdZL3NHknxQzX4X1n1auAqrTHJtQUPjhwDmjt4YxtUjjr",
  "key5": "5GDecZ3WDwbFCi2KVq9W1pfinMjAEchPCLLvyXNUFSZESqdPtHk2BUjsCCYkcSzhCM7FPjxhiZa89JMXBR8g8Xqd",
  "key6": "5EjKNw2MzTJyE73Upm5qinyLCZ4vjja5SvrXsM1DqCaBxLARD1mZ7tMxR5QYSCxSBLjhcaHHE3XvwEXGN5gS5fWn",
  "key7": "5W3PQoyLRwnkC5mX4jMhPYGLocpsGchh4f8gCTTz6YgeJk5h5mWfKQgRb1kjuZDeLf6sGKbCJjyCnViKzkYgDWKx",
  "key8": "5iWvVnj1h5geRaeRWAuvrKnvaP5tq51AJ1VEhJ9brh2DNnLy9x1YzXNLZGxF62hXrJnUZB8Rex1AuaCevKEb6kSv",
  "key9": "5YQVyC6Nj4iP3c8omiHG5hHCnkminAoGRpDpADa6jTS784dxugT1CiFn3RNovkwC9SqMVmJyENZhsqPL334EYJrF",
  "key10": "3674AetPbKeRGWWxLjNLQx8ChMcZksqvYCAksmdPUwZDZYqPx3oKp61798f8tmH2MoQH2jojTtZawifcAxZtDoop",
  "key11": "5UZj852p676VXu4RseAnm4qYUtK3CtkLbJcsc4m1RRXTp9TBavDiUSzkBeK5kszxPsAeWMM3zxSgbVRwXK332Foi",
  "key12": "3XbAtdc37DFyRin5wgicd43hFHHeTaMrWBSouots9UQPJsUo9TzEvJ1gYaySzGcBVvcFXQpYzWFtHwC3WBhFk2ms",
  "key13": "2Cs3ei5V2ovtrCj1VGpchRB5Tc3f7fKewL3bbs7HuP8kByfrPibF2EAVcFQHqKQEhE2J2r4n8xCdVVyEUhKWyfQx",
  "key14": "4V7GSNCttojEJPYpCzKYxdncHp1smgnXpt8rZUBUSb2q8caj2MAnwHRTM2LG9rqUAdi3sWAUjhDgaiCmDz1tE8a",
  "key15": "73hPjEwN6HJ3DBbUdHaSU5d3bq75wM37rj13CFRNbk5jvg2zs7Bu3E4HMdUfst6uELk7qcsy8PiszF92CSwhZeP",
  "key16": "caMChsw69rrHo7dBrqKmR1wWeDDHEPk91bKxZrXjfbfNqxLacci6QSQqzGtBHVfLj4uzwhEwybmNNRFedU9ut8P",
  "key17": "3M9msgqJNtVWKwYM1DuMGJQbShZmBUZWs7ofG6n3dFZ4JxbotcgsNQMd7SeDcRjrdWUGPBUqA1oG6JZmbp3pjjnJ",
  "key18": "5XSsg9FNsmduLgzx8w2CZ8ssTa9eSggJxRekG1P4zKPiMxQezdMnMyNrLMKF6A4h5v5i5Q9ARWHjY9pKShY4vvP6",
  "key19": "4Kz7MiNuy1yiWZtvo1c7owTBgoi5yGiNMyuL1Wr3zv3JU8eoW53sB4PZQNHFZjqZi8m7eYcsvuNEqumQcx39Z9Pp",
  "key20": "cXgg4XcALRvptot1mvAJnkiCVJEGXuBV2brngrqHUrsyvHiRKVo1JaqEzwfwwtJaE9cAuqm952J6qge4j5ZfyKF",
  "key21": "xUDvWbcrqAB665Z7MccpMLVAzWn1sYAQjaLVnp589YkPLukQejdaEKBfFGpZcLgM7bBnQr81j2QHyS5gmtuNiyp",
  "key22": "5bQ3vDCcmXEPz8xFq8i6LCdagzjZ2qrA2F4xHJdBbPHorgCWkhEfaPXDMCiSsQz9yRTNXFkcdFdyZFF1UGW2iqvR",
  "key23": "4ZTPRDwsjfhMjQjbptiv5eRWraE1KPm87LdYrNpjeVRgM6ktQgHoHZSjTgNRc7466eQxvD6LxveJiDUNvWKysKeg",
  "key24": "5GrqivybauC38boT1cbPLZHqrrSGt34Y4Yw4GtyQRZ1HnJ6iotvLdqUnBwu7F1bYKyaY7SsYg1ZptMXcn1BSo7qv",
  "key25": "WMiRYnHiijdYTiRj9fUhaUcRLqRTZzXzpZuJxsRkQuMfRRPbU2cbmVybUYVG8YCAajTHo1i9mQjWxqJcNHincZh",
  "key26": "36GgZ5UzfPPx9YDCHqNR12CgmM8BuipgDQ3S9anzowEH16HpYr4fpnCfTm2Rb3X3ieu4G8Dkbh7GwyvaaFkTGkGN",
  "key27": "2KB43McSo4TxK7wgGa6896zYTjeL71Uekh5eMbAcq558X2rVBhGousqjya5hiw52Mca2H2XckUvLoP9C99mjSUyM",
  "key28": "2cNXBJ21xdtMERsQ3jybr9oi7omssH9fkvV3JCa4WQnUT3Mbv9e1CwPfzuW8JZQX4TENYwKFsGV12dUvXn37kHyJ",
  "key29": "2QRnvCdMrfBSpg3Tn5Q52RCGvaNwKSr93RK8onphvvqdRNdvpvpDLfEKR2gLhDYPXYMaetw29nPYfvZBabkmHApL",
  "key30": "yXUgYjRHLj55HLLcPqYgvsBMmkc38kaWWxvmWFKaV7Z1HaCqz1Kmjsbsi2w8WQbAR5bg5PPKPz7Ld2Dp837Ri9T",
  "key31": "i5C64vxp7Tc26NWDXjypN6BHejL1zH7f5p2N9x1jhn1NEL9T7hLeNPCTj5dk6tDGgiesLgMj4yenfNymKdrr1SV",
  "key32": "fn4wTJgZtwHetRn2F7RkJmL3GwxsFQ6DAVtMZobfb9FFcEzYDAsUhyMnnzpW3wB85Q2z4A97JV7kQoKXzudT54B",
  "key33": "YaqQ22rQ7NanTW9p4PTFcwgeLmvnuxGyNWqg8DTgwEfLKdFQvHVVxdvqYTuXqkDH7Jp6GAnf1Zxbo1Sc6bojxZ8"
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
