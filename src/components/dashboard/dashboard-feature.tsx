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
    "akVQi8548Zx1YHVSFmEPZkxxjW6HGhqMqo7ijtEjpZRGn5kcu3UnGAqVRcDj5RVu6JTPaPEn3AVWtnsWa8fyKqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSZAE9FcBcUo7iBaJMbXwprVKQiakAa3BWPtPV6kC3z5NJweNC11L3ngksXttE6mm99M5R2PTkAdK7UJdHdBnY8",
  "key1": "43MYxtSArysJGewMXQUcE64r9atpBnmXYw4rcT8GRAe5J72KpLgaQ1MoGw8a98h71PuxLrBN1aASDx9S5WMzifjz",
  "key2": "3ko7ifxmFsrRoarpPk6CgVGvuMEFsL6E5ysKCxqZKKw9YgiLERCw7DcpeB9beRdvPyAA9KAvGXC83xJhCKQwftGK",
  "key3": "2KSBfARtwsJWMj2JfL8DvEEejmyVDE6yM4YfcAt2htXJumA6uPbRfYiKSJiGqMTuSyPcW8GGLV4VVbYPS7XEz74i",
  "key4": "4qNoPh8iFyMQYnFt1cix8UsaLpLy6cxHvLFdLsTLp6Hs6yT1xy8H1WPasUTZAADcRKBKdgchwrgJdCEaZv6Wwao2",
  "key5": "4TK9sJV7jEgBCMpuB9DMP15HrBVcHeWxE8twNxtZ7yeyFmtNihGaUrmFKawy4tdnfw19gFqS57h6hn9F71UQnp1B",
  "key6": "5EEFEedkeexEsLRQN7TERQxa7a7oQPvNuXX4BHaUjeezmhfbqxeKax2hXQdrR5T4yXuVTRLnrXwMnsr6zQUAyW3r",
  "key7": "4dxhSUjVQFVK3RixzXZWRjCsbpP3BquECKRudLoDAVPhNCbDuyiSSWYp6Snveaet7Y6o2NmHrjkfys4Ubht8Yh5V",
  "key8": "5vjLLGhAT8BiXQ6bQiGxaCUWBR84hCk9rZpRNRkUXSJtnY65it2jjbDhSY1eXJq6u7YBQkCh54AryoQyXwHT9ui1",
  "key9": "hW2Wmi6vdxcep8mkpgBoBM4A8DnkrS8zdcjnVbU2zWuVcFgpPHgXgsdFzyCyY1BPHxC915VfHf9T3sMjrxEnavY",
  "key10": "5VbK8ZTjU4wcjxwQgjBr5Ekmart7A7wxHfYvckWA6EsyDehTyDJyFxUuzhR698PEh5VLiADZgcDRbcf92uhgwbqg",
  "key11": "3vJ8dCoUCRxorvaQSbFZtJri6AZKT3SSTv533e47Jfn24wWqZ4F7BxbcNAdkW6pjGHb9P6dpQCYNcpvqH1UE4pvF",
  "key12": "2UQa3QGhThaA4TVaE4cvQMdg7o3rEfTtFsZCPkDEdQM9iDLeAaQbgANoE4AwGpU6LtoaL1h2A2wePDyihADbC828",
  "key13": "5k4m9DRna1dHG1go6Vw7QwAVNQEwwJYMUxUBo9KqbwKkgrmBov5puuFX86EUn4D5jMsxXuoqFBqKr3THRoULKk1F",
  "key14": "35mhcPJQFk58DuG1zt5L2Lmxo5b3VkqFWACVQbk2jFjnzUmDv6wNyn5umBJiZjnaGbiubRM9CKXt1prUsirGeCLY",
  "key15": "5XyFTzdjawVkUCfKcRhB47UQsGGUJzdL9bvrdwT2w1X9rpDDs1ic5ZhtTa2fhiTdjBMvZaTpvYiuwNaHSULfMyMk",
  "key16": "35cpTnLAJQqCwGhj2JZUdoCXhjG83KUtQpAZn531D2NUDuPdH57oaKKJCFCSdDvJ3bTjzvszukCV8HAfCFD8iaD8",
  "key17": "3ewT7F73bZBzTdZdo2tAEPoMvJDyuNRjxW78Fa52nSFeksaCi4ZJ4jEEzpgDMqxFrKqvDzd4PzWDWcXUKbvXwb9K",
  "key18": "WSsU1UM9G2WfKwuW8zrqkiHxDpwrcKcahnkwDNpXhZQbrwEnzEFKr4bmE3oTUSKhWzSgGA5TYyyeJkqyP3rMDFX",
  "key19": "35owFAQFH91zxgMJhbaoocx3f5q6LSd3YdqcpnueCzSqVCnFEEk8reqN6yKpxeocaxM5kCu9upQzeBwzZdHnKyyZ",
  "key20": "6462HKssAaEB3iXZKd8SY9sB85FvscJzPqRjTGa3Z4Fr71XUqd5htUMzsEEQGuBSkmumFys3XFCdVhL3QASkq6SJ",
  "key21": "3wdTx5AP1aj3Jeiej7fpBVVNVQ5BFzi35HLqNEoQtzFrnobMPVY9Qn2haq2ZVPC6Engw5pUPen7tDJDtM7gQT4AR",
  "key22": "KSnDvxRUVNi65cnZ6PRxo3Abdbm5ZRJav9rM7pPFY7qh6tvDyNwG2CgSqHgZTBmkbDFxPCtCNSazaHFDLybw2BF",
  "key23": "3Wb1mmKhD6hL1jpR64mVWXJsCgj6PCSf4EMTLjCV3qqMCDvhBx3jKkV8YJaMHwshPtghGSr8W8JHqmqpHedX93ka",
  "key24": "43u3y6zmo1nhR18nfWkjG6vzTFd2ssfLsMoksP81A91VjqdF3oFFUJuGshvfhiveFWY7DP7E8AKxXSoU6hHvKxUC",
  "key25": "5N8ckLqwqBLUfiwHu7NDkN4atLgP31gSnBncvsx5U9YAJ8iZo7asVZE8XqEAehswGaPpY9JvqNLQKAzd6DaJzVr2",
  "key26": "3HTSpAfEd2MzZjBUYTmVEvTw5vqTq2g3DyMZXmaZpwipBwcJxSnYRrsVGxnLqFuAB2dtUmjzkq7VpmFdEskMrzXe",
  "key27": "4DzaKVEcyD3s8YJnfDDixi2djWRtzxtddHKXUM5xFesyKbr9AZAmqPNK9zqf12fhdC4knjGgEe5aS3qgANxBUUsT",
  "key28": "5o3kTcHnv7gYDu5kqbKvFzHoYSvZL81bjVjj89HP3PyZDtNEvZW4jiRyBq6NRBkMACB2xbexzzRpfcMhLxoCrZTC",
  "key29": "5BwomkBwXatUZWscj6cdQoymEtZuP8Pr7QtaUHSc95QTCdqttGLkeKCoWHMztPSV2n8vNAFgXcRP1wGJeBB38Gjr",
  "key30": "3XPZrWfMiANY9tNUTXQ2JkKm7ynKjjNcXGUEg7V4hS1dSebwGajaviLdMq4WC82okjbBtcctEFgqWYEsVx3aA5Ch",
  "key31": "6bH6q1kkVjVkRSaumyLaBu8MSncS1vF7UJgrsuZszpTo26EMtW3yCakQ5RrVugk5w13otSRJDiAkkbqzxgVAGHQ",
  "key32": "2wyGtNPyqFqjBRGCMxmKZLdM3JSYrziB5U8a2jujwSWFuF12DgwDxzjcUXxZe93vv78HxGcHPsmAscaGUQHsTdpM",
  "key33": "KujRT6A13PWwNnVboocaMnXt2VcrEbxtQ6cyxrLeZQSQU3zku4YqVnvpQMnwsFUMWjnRN3zFwebBx2xHcEPcLhj",
  "key34": "5YLSTjzfrVqhVCCDnNbDb5vViqAguxhpRSLcWxay67MDcVEY6N31PEfsQgiyxCdeNQ5NRZQLfyn2y1qVZ7eYNJPx",
  "key35": "4oVcqPSCDeJ9CXjD67nnJNxMVe7cmmmhzB5fGW58Emv1rASTKXZpCwydzSfFX91JrVHQQQbf9x1ZuG9i7yJqfMuK",
  "key36": "5QjhepqTeVRes9RTMAHB1cjAaJNLE1QAiV8FCzUt2Lr8TogTw56xGRUXAqXbpPuKHw62k435Q7EptnC7nouzk7We",
  "key37": "4QqhygrWWVskpiUwzub4wc7apasAvGTLFj27XoJuN13ggu5iF9vsR4brQVpLus8AHiTy4m38XQWsbNeWDWxN8k97",
  "key38": "2A74WRLqPthZTmS9q6GAhLHTsSxGmEK6F1vtMvKrFhaYnQ7drk5SyL63z9hfWLCohqq58ZMub8HmYNranH9UrQ1j",
  "key39": "4E9cHyCD5v5FFaLhYrt9TLVXbHo4CMexxDGhFeZ1XyjM9Six9Jb74wJXtQdzagYbq2TPcWpvPzxviSiYaEpzzBXf",
  "key40": "4hPjs6ocWJyp2dw3i8qw3Zr41GH4tzMC7uZwKTSSjynfWdKPwytByvrqV6AhwtMYvtSDoTeYNAgYL5M3wJumwPaj",
  "key41": "3198Y9YMKfnv2638a1iQ9T9mN6K8W3PZbUYuP63p3NJbJvDVwLhStnaiVp2D3sv1M6GqyHZ6sxBmoMZ6UZWLsV66",
  "key42": "2wCz1JvZ6toMS9sHhvmpWu8M2sDJBHPQRSpn42hbmizwgNCEyAD9jsRtUJPWnP9N7u63QZfUsQQ5j4z4VBdxnSyB"
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
