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
    "67PuBS3BSzgcAwBt3hH6q1X88bqe2aFb5xp79cNxr2o21eAp3w4CScAPtkT7YCLJefXM744SbRACugk4zaChfNHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5FbVkM7895DUeHFzXSxXMB3T9YDj8qzKbGj1cyTPCKHz7866aBqC51W5SUgHXGghvKftMHFx7v6eAi4PWNbGYJ",
  "key1": "4KnxoL5hzxjNJxErwPmD9SFdpN3J8wpAwVCCZswfwVb37hEfTNK9JZ5KLqjAgVTirJPWXTYWh2uJRu9G1edkzc3X",
  "key2": "5vDnNv1ayf5MY1pHuCoCQyfjPZNK2cLEs42vz45KCmPMjDTz8gGTyPvvxmvTtJHDQaPvTUduvWtzh8L6vs5fHsj3",
  "key3": "3ttST3veuaLv4kVdB6qbUTib2SPae4LyRJfZ5gJhkKehA6CL7RdH3CndA8uKMiaUZ9HAvGW7pgq1GCa2uvtg3GuL",
  "key4": "Cq36wY5ZdnfJUzf16S972EEMocREDxC7uTFZFnthd258U5hSJuCExiTBpigm1aLF2bHDm9fMb7QC7haeUBPbhw7",
  "key5": "5AwaeZraEWmkDe7NktjwWzegR8zEvWtFUwzUVkyz4mkm56ZwFENEut6DTB8uumE3Bp7NyS3zKMdesBod4C8J5VSV",
  "key6": "tB5192CPbEPAvehJGya6h9Fk7aamPtLD5QnZsKjeSda2QeXVKceLuFjb3qGbbozqeo6rHJwpFDpBn2hBpmn33HD",
  "key7": "2ShgM6u6Tj5YBDujAvm7gahj7zfmxsGBXzFWrL1ouJygq6htQRJmUqUr4RtShcj91XbHDx53HjEBHXBGGGqnxbU2",
  "key8": "3Mjp621XteZwEqkX6JDLqbAftQBmFgq8R6a8w8ZdpAdgHMgBLo2AFt4Myk31KnGP8aTs1j4KiavjUpdhzWx9n5v2",
  "key9": "5cV65sQkm6SQdjoWYyeVMq2mnWhevSiYs5NkQ7YAD2UoSWmydF6MxEECc6XUUmRmDBwhpWpsu9yFXhBXEyFUXzE2",
  "key10": "5NpVcUDZAsfU6Kr1P6bW436JYuA24iRNNBDan35qVXUHaMiPseg4gPBxiA7zLPNXwdD1PBz85tyzXsziDKQBjqmC",
  "key11": "3uM3xgGGaFj5Grj9VGNcNk2xyeKXwTbb9vREZSEdaCwig7yJZ1PHiLiqbDLoxhpa2A3UdsaY8W6sM1kzdgRC7K2N",
  "key12": "5zQPkRxJKNcq4mAg1dfihVTFMtHEevyTr2wn1Bd5PPrHVVV7qpNwAvLAou4vF6TYbrHCz94QJDEMDRf8LHujxzi1",
  "key13": "4pAh3TUzMFL3mQiU8AX5sE1rTtQjUC7T43Tv3WKSde4Nq15XeQm3VMhTMoxp65zur8jiCFr7AnRKSUun2LbvUz2e",
  "key14": "5pwyHCybFtN1C7Y2QVtHFhEgNzLkeMprRSFfnK3bSFo8HeFK52Ykb5yAvaBWWP2fZE7kXJiZ49x5Fi5mbY46YXV6",
  "key15": "pVerX7fA9S9bDi68n4TBXhPgU4kAXzWPUphdWz8YKijQJcwWBzFWLuV1ULTWGvRUHXAAuvjtEMXTfjRwRXjzUKJ",
  "key16": "3KTpz4FkcwsX3c13RRWcGNKEQVtVarE4s5xMaXZh7H2SptUCWyq85nhDHNNyLgFwzWh5KmhTDZ2RLw73ZPuChn4L",
  "key17": "39E8LNLo7CqxquCi1NRdBGUkxLm8i15XALRBqwLoU2PfL1mqeQv8F5U5HGg1uXVrrPkDWu7YhzfcgjX8fnjR9shE",
  "key18": "55i1Wz9nH8ih2Bak4fdDP7NQRZiasZjLPHTvQX6fYmYrg7mwo6Un5HrdHXvAwLp8dM5saTUWq8pabXgfU8PCCCob",
  "key19": "hs7AZw3CfibX6YwAfr72MukkmHrMJS2mevUnXzG5GVFBnfFqADs5ee55gA7qaL1pEL9zb56JjZkPJbWAKM1gG4o",
  "key20": "4kAxrLqvAoSorweFhzejiRtxuYaNEzHNGXX6DhPUduHK3izMDNgtHedgujxCFSQ19w51f7TG8vifBY91Vv3yY2Pv",
  "key21": "2GhHcMNFyJzMCX3NMMwNfs8tUL4JACyNjRZZLsDdPucEDgjKnqrbvsAmzSPynajy3ku9RjQVGprZ35wS9myfuDx",
  "key22": "2Zo5oL31yfhTBNqEHCBTi6x4eFVjqQaRnap31q5w9vMpUNwNco5kcYDN8JyjnZ4ZJqnG8W3qLuww1U6p8gsWvao9",
  "key23": "GpxCyTeyQ894iL7xGx3SFYUSk4PUszW7irKHs4Mvs27bZpJoim8FggnwTqMhpmMqEBdGDemJkMC5c2TuXKKR6o4",
  "key24": "3cCRdRNYeku65XqnCvut5KmzbGUqD864xLMVSxhrKV2Ck3xNozp6YAu3Uowh5MNNSf2UMhptnV4iCwVr43QBde9w",
  "key25": "4h3gPM7WHZ9fJ4URgkMJgpsAdcTWwajZuWswvy8ZNcaU11ESb86ox7VsaGge6FM81rjZ5M69YuSxb6rXUeMDncvh",
  "key26": "4kMA4Ko9Ru7ZgZsGoQwHd46oFi6sWS2M3mVPjrdWf2kuMVg8RhL3U92h3wbQsNUYc1C3P4eFvbNZnZ7WTnFmeyxv",
  "key27": "23EijTXju4uUaUZtt9HELava438Nn3EwXWo7YZgd3FdDMR2QhWD37jQ9UEf1qZ2vZaZ1Tr3bFjpDFGsQ2Bpkq269",
  "key28": "28GrBD5464XZLw8mwYGk1zWS1ypoZ7MjrMTBQu5rfKKXGnCVW582DzQkBvzDxcvgAApRR8ytqaL9omXgMYSYDTEZ",
  "key29": "5vpLsREx7CmUmusFDEWfpSWL4N9fnYT9nqhkD4MEJcCF3dS3MpfhkbYugotaYSnhdbuoyCKfmK5CzW26YN2eYyGC",
  "key30": "5yEP9e6GGTr3eKqQbxRb5rwpfgDT4LWNJFFFL7uSEEy8jEnkmPi8F6DwgjMWBWxvBWpLkVCUKBMxV8m7SsbKHQKq",
  "key31": "WsrHHKFg6dvQTEXK6oJiruNMzKuMDYjDkLesaCS1AaBRd8aHi8Gj2L9TkJCjyRj4UKSvpBqC29rDqZxTrP1A1Pj",
  "key32": "3VEWQArYhqt2jwVBEKWLUdJZMx6RMcX9FdWvVzoFy7jeSN7MpPYajuHrfTozm3gdENJE9umc1WmNcN74MU84s5wu",
  "key33": "4Q8V7AUN1emkbuUTSU4A1jdGGffQ3GdkCPrwva4tMxH3JGrsBaBuHd37UQas34xLcBbDrzmALZQNTNfNJ6BrnkV3",
  "key34": "2Voxso221pkoxUvBgKGjTKThP1ZWvktPYD12WWWmazpwrmG2J7hGZiXhPBD2uz2szGhbTr8y2aS6DR1CwNhb7WPU",
  "key35": "4hK4YgZwj4potF71dbL42rxJ12zjFhJRpPGGZ3nuK2aF1sxpUN9zW1qYRWAPx3C9zcTMesFnR98mPbxh1gGetjkQ",
  "key36": "54NrSggKFGeedZuXnRNyZ1iJpCJLg5HHLcMwE6L7Sr8SvxQaLhPiYo68TqgpAPv5FRHcEUBcekS5iW7EU6Hbz6Ay",
  "key37": "3BR9jURWBoLj3rvAFbMa27BC7aTRDuWDPt9XG6tGAcQ3sx7N6XkRpn81DLzevBGJbzkCLAugPGUKjWGkcdUXqxNB",
  "key38": "3XYSDKbC1mRfYcjm993WffCZ5NPfjck3hyYk8cjFydMdX2ahr69MN5r135nKvgZGSh6Kjsac1LZrJGLnAamghtFx",
  "key39": "5BGvh9WZmtbYq9zHLHMccvwKqcsr7R2Gxy9YarvbCS4UDTXFRj4Lg1AmnepXnWw8UCFaDvgYsGn5FZQvyFFdM8rR",
  "key40": "3ScqPD1SqoetK9BZ1vXY6KJTKSJXDjrkkmgqgNWgipoEb2WEttHuohwb7XKPcuWN62yRNjYPmHL3h1sNPdS5jPZ9",
  "key41": "MfxjWoRsBAgb7woHQhL5yzUdb8KwkZYFBA8gi5SCxj3zDR5SzXY7xFUc1kjcPHJStF16je2i58jDGUyF9djY2eB",
  "key42": "isAsJgrzwbhsxGrsn7CqkmLypWq4FFn46wvhVpmWZ9tuvXAh2vGT628hbPV9wnU1ucCtUUDSpUBJVFYV6qpXnKc",
  "key43": "5asGfrV76vhsP7hXJKskRBu5hvnxE1VvPMrBBucnadkTuSLJ3hZWGMfeHpQ7UZnkRPhYj9sGFGwceFgsTGCCR3HP",
  "key44": "2inC1uPixzK3Rf79E4F21ZaBWUftCBJFmyGzviotuYM4Ey3BVmkiz7sBTZxLxCy4RMy6hGQimQt3NmtuqmFp2hDn",
  "key45": "54rvwHw41VU9gdziPDGF1yvdvWYFyEscFV2tXcM6fv4st4bDhjw8epQq1kXc9urEc71dMAv3CYoDmiJwdfLVGM7o",
  "key46": "4tNt9zkRFU8FU9XUs6nivj9UzHrWKmmoQJRNgSHCrNr6xFQDcys5TwgH3bWvLzBTh1e7PgxcF7iYgwPfbYFtonU8",
  "key47": "5z5jCBNTKeTiHDTkWhV5dmRGHLSE4k7p9f3pExubLAcEj9m39pg7EfKKhdq5t4M4ZWuSA57KJYWysBbbTwpkQj99"
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
