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
    "PZvLU274hHyUs9Whv4sw5jp2g9ygL9myH4FQray3zm5mSGVvQFqQbpqNbc1kvkyPbQyGCqGpBg2nKDNdr3yBVZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NnMvndo6wBEozy4AUnPkbW4RKPvwdwk8votoqi4xV88WoW18jZPvg3RiB23xitVQyEMyLR5uZG3EpXcVTHsvuBD",
  "key1": "5eTZkDye4RfYyMKE3S5VMfV1LS9NbQ8VVWjVQEYWnZnxEJKNMrvVBGUqNGcBn2QB3MUuDzNG3GZw4Bxwng8B7NHV",
  "key2": "pgHdThxCdRf6BXKrjVs8f674AuAiSNkuiDnf1VN3exZfpVFVgaMTE2RYaVPzDi454cTvYhXgGvznLead9ynpKtq",
  "key3": "5SKJaawXDNSdieTtcqbUr1Ak47BFifA7hqxRa97eBkQrw3NPCckAFDiFL5WPZpvTVja3aKS54Y6Y63Afi59YhPiH",
  "key4": "43JotvUFz1eyP8XLA95NWxkaeXqDxs2YtE5GAU9PFihzHdbSTRuWo33LgfyemPpCYmCJ6orEEmWZHhfdZTVoqPPA",
  "key5": "2ujeLt1sU8DJMCifZTk7vWGwwTYphEZomPT2s5N36BFhRkeQAdVPg8MdDUsk8Y4TkForUa7UBctCG6q7Wa55zW7k",
  "key6": "5K8WpwikGS3dXFGJVCACm4D3ufZE6d4rHXDjEr2nacaF5hYsxv6RVmhkW3N2Xpxdu8HQqZZewmvzgbw2j5CagjYN",
  "key7": "2xggXrXz5qG827hp3XffWm1qJ71W5akqCnS5Vkphay3NLtBbahZJ9RwTmL29wvn3zWzAYVCz4dPKoqsL1tAgxTbt",
  "key8": "23hJXoSE3gVLWJNEoH7WFwTFFX1AkdhzEg4u9pBU8pZDUtSVVtXkwvamaMdf3Me4ZMBr8ZvjMn6PqgrfNgmTwYEz",
  "key9": "28hHimFg1a4q7Q6M2Wptvn1TrboWPkYV9E7VHLYsmAtTrMhzkRsXPKLVN615SXjWmxMYRQLDdQegF1KJUjdvGJJP",
  "key10": "3GJdQ8H9mDYb42nTL7SK5m4sNyoUbFivyGETAuCiiSqinBpWdtSFVrwpW7tE1uwZSoqp2xHfAfju3Z9WDwb1KcRg",
  "key11": "3CSirzDkYvXsQtFp3a5SfHcXgs2UPf3C2QPeheEEzqLkiJi8Jf4KR44Xvd55hCnEQXVQbjvvMQgteiFi23MrYyAQ",
  "key12": "d9uBisyxaT6PChJ8tAC5tW1j1djNKPcRbRPFM281VxuZX2Z7TMYSBb7dfzuHDQdyaFGf7JDrt9A7LCEFtCJnNiF",
  "key13": "4hV9JTvhFwhYekm5VpsTE4Sjc7SPcqzk8J3QQTtHLyjsEJdfCFJ3BRjwusKXdUjgVdK631i86CmzRDsHKiRitYdt",
  "key14": "4uPS3so8rfCmkCfZCywrrE9sX2FvKrqHqHzbux895LbD746CZbTdqwnYtzS9BUCtxUNnFUFsrAbg15AQDN1MN8hg",
  "key15": "4AMwfyvidTsxSasXvMkbtZepBkD5h7rL4KGkhLXT9PGD5vJBXUDTaEbRUMyqjFvCfSKFBXtWEDyenuNxsbFoVLYm",
  "key16": "3CnmtpZGcfGS2tmYjucTpY9erVnHgVodEu34mUt3rGqDZ7dYEncjuZQXHFveGSUkxpeuQzyq82iHL12b8mtMLkA5",
  "key17": "2Nhav2MSp2SLKjbPL8y5uZYkfMnA8ACQBoTJZMM6eDUtAbdGgDpDmXiLFcf24vnbntU3C1oenvZYgcvgFc2FheRM",
  "key18": "5d5kKbFLBgEPwAexk6RYJr8V6opQY9Mwa41ZaHyCXSg6Q1ENQLhfiGZiCuBkPYHAhgCBc3XVjc8R2QXuRFjoPBrp",
  "key19": "5Ma8K1Qvwee6HjPCLvG8jXi1zgakfmv4Lx44tdFQuQH2GfRzQycjc9ZsfjBzzBkL3rwNBaL7sivrkUYM6NMEJ6hc",
  "key20": "mcGQPWDefmeCxkGdGPhA6fs9s4fsjfvskYLCTP6urgA8CUnFdtmbEe5SQ5ujZx7Jx4ygbdXHv1ziHxwMceKoWVz",
  "key21": "4GefMWq78hyUoixyach8YQ5qDSbmKW1cjDHqpqBQY9hvhZa1oMmMD2FgSgQb1bMJ85SfZ26kDz6wMiTR4hSrBjJ7",
  "key22": "4cTaokUjQNHHrD3SQ1R4o2cvmU1stK3LSF8uEcWd5vt3xV4UzHVJbvLkeE2oCS4T5BG5rApiKUpD1s7jJQF6cpB3",
  "key23": "b4NYbhghb4gcA42aYJf2iNyzkfyG5QFo6AEhbDvvRB8NjFym6LdyJuLsLZEQnCX4W2c2a9AuPLXdLXXng6VqkTP",
  "key24": "3Eu73kCP1QBKwUo8wBLVvoHBNiZPHdBSTjGnoPqQg2n81ru3d8JnfFdHEnYShq69Bu24FG3821yvTnAk4VeERrgX",
  "key25": "5Ci3t3KJ76weFD4tvr36qipCZn1NtFxhHzR4Awk7bVFKU1Hz1i3Ka62xreaZxxoHd5TF5qSKHZb8X7R8eZgkRxrr",
  "key26": "5KgLaxeVbmAznf8ut6x52SWQRqWZ5TRecSZddtrwk3RB52idjy3tXSseFRERppzynTScn9HMPDQfkyVQEAwDxrV",
  "key27": "h8kksugZMEBNq6Z2Hsbv8mSNXTrtV2QvY7u7qkQDDTsmfeABfsLjjBSCdmApJ1Q2qLXsz7rX8o9kn1TuWgmc5wK",
  "key28": "TjFbc1AKfhg5VXekxM4topGRg2fmDsH6QcFZM97gpLNXD6n53FjPCWmG5bEXafw47H4KVfNGBCg973rhjTSi6d9",
  "key29": "Na9Gq9Z2m4wBKub5U9V1xvm3brajqwaPmAvBncABJDgpeziTZpHkrhF9xumvFAMrVgASjDaEdmANMLtLAwwNbLi",
  "key30": "4magRqtWZ1mZJTuiYNxst2t6k7Vy5QwnbHbVbjKVAAzUP2bYVWxZGGpbNVWcD91v9gFfqaYvzogRh6ggYXHogmgF",
  "key31": "3kpwUSVaei35JE7DAUAXxauEPzzP9LpLwBH6ZsE5v3S2bvgfx5CpCyiGGajzaa5w8bR3HQ3jPd78tSSkfG9Cdd2z",
  "key32": "3dXsFAMPHa9ahHkdGzBnYwM2XUiAnPD9xxG64h1GckuekqgqzK1nctiC88aeTS4C1YsYLCyZ1zub7abThcmXkWjb",
  "key33": "2SHvKau7H3D9Jj2Zrwpg31XcyoPwPo6DqxDFqaW4J6NWkYMeS2L5a8C7FLV5NsJaXaAtiw4CVKTwzmvC2jfoZ6S6",
  "key34": "44MKCaZX9E6CcR4jgMjRdD83XZwTbZLwvg9tFEDKxJmQcP785zbipoxqssG6T3JFauw7EoX4tagVVtkGKEHpvjPA",
  "key35": "5uf6GVj1HdGaexc67u1EUKGPV4RrZVdENgUsewGu6hygRSr8sKWu9YiJi8fiKNkR35TPEcpcJxYgAJjcr1n9C7Vk",
  "key36": "3F3kJGXQDM4xH3PdUQugyJfDFoppAqtkWCPZzUBGSLx7aKBE4TPjfte31KMj6dWaSUBczzyGXS3RinPP8BuXVifd",
  "key37": "49CzvfgfD4KnteuptUoU4HfvngYZmfgiySaYoKMebieQTg3ybA2Q6hk2dSPhPTNgWctGGtUzmnuxo7Ab5D5FQgeN",
  "key38": "4aVh2axSXVhf5jk9SVCedDALSy9hrHZmP6vq7DPFeKRJzjxJJVRrghqmhLMqwAxXvEC5UEFfBw7zxhyxZRfvb5xn",
  "key39": "qhrZK81m1Ez2LBAagyahFdWvJiVCK8U56QTNsY5eJ5Mkgqy4jst4c5zPkTih8AAEhKjwayoFt5EBpw1roZ3AUgc",
  "key40": "nQJ9naBicWvmfY8Psjk3iEZZYGPp3niHwxqHS84inNdNeGKpC3No5Wx291dwFdRPMxQdpnMbJAL68CsEGtAtXTb",
  "key41": "5CzKQmJxCqnhQhUx5Yii7WogFuXJdorxc1HvCoJcuk2DR9k2kEhEH8ftYw4sxGMgP39VCWcNxamzryEV9Cyp7V7X"
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
