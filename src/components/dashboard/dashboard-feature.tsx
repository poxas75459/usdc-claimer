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
    "Lxj9BwTz5hqo5Ph5snrrVsbtzR6f6pdV5stHYd7ERMVtzWcY3bN1FRE23VDaxMJaBCJ2ywnkshUDJMrgVDWRPZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659iwJJ7XY8vFNbKXNkEHWaCohu63m2R6V7Yi91bZqQxXijvqZsijqiTnPd3qHdL2AYogk7jJkLRHvCDDSBrtHgp",
  "key1": "2jqm7nEGtuhmxFdMsAH8BcawNYdfiPSaXujdTV6ZKVCz6orAZNbpik9xxDvrmhYM8859w6recbr8fV9m2xQSy8Bt",
  "key2": "5UH2BhXgmT3AUzE3ff3ZFdhS9vANwmsN6rBH52FyYLbNJCi13gBZtqWLwXNfQYRqbKfAAqad6qdEiufXPPM6uaED",
  "key3": "3v2R6u6ypGfsEe6b3QMC33XQuD7TxuqR3EMsxokCJtoVXq1jMVe5wg9XrVpAAnwQkEBJpdfxw2G7SUKUbFER8Kkk",
  "key4": "2GFVATAD4zaTgDygqWG8YneK13KaoSU1xELcxyVGvHhnrkQQUQ9ayh5SZLncVSNcqcbq8CT2Mz1VMRgVNjq8sbw8",
  "key5": "2Nsj7PBk9FzDV8oNt8wjLptrWjdLJyGGLpX726aFf2vWwRZ7Rn3DGu1XKRoTGsJyctUw1EQBCgGo6JiushLVkVK5",
  "key6": "3TzLSF4WcoB5Y69aV4bSHyRzLzfebBPCZCB6jeipsCrTaDX3427vVjmkX8he2b7GPVVJd8MXAz3UMXxD1YaMALm2",
  "key7": "2hRAc2dRkw3HMaJXkz1cX68qaRUQxLZ7zT2QXCC1zzMNpg1SBMhevLBNxc7f6bssfxiqJYMRZ6s5wu3oLJMd2GkA",
  "key8": "57RTEBo2ufdRMVLFfFLWuo1oaQxndoZws5y1qAHFtAGDbR6uuawt81R3DqwzAMSzih7M9jSG2unRKpu6W2QjWt1r",
  "key9": "5Fb3SGmZTbpWrmtTPuy8XqqGJBLxJcBn9u2CPfPdyLj33toLsyPcMvtvSGNqUMjjJtrc7qGTwuJLcavwnABpuN4h",
  "key10": "3HUvMjQ6XqoWhQLA85duxNaBbhFM8sgAfmX9pLVLn54GiPmbg31tH1UVQeHtUc6as5Bun2mi2LwxwAeQ9RHDN7M1",
  "key11": "2MB2gwPovF7fbLR7wYmS5N6VymfwVk7NrcyfHngAszFqdsRLFQD8QJQSYV8LMqWHZhv6JQVsEqnqdYkX2FBXhqsf",
  "key12": "5UZ5PkGA9AkFea126ycgN7NDySjYuK6P6gMFy5XBNd1WoQHokE9FQk1ngVtyatV4k1STuuxkgvDzFYVDAkxPK1Sy",
  "key13": "2LvKVR2EK8kepRoh4sTSJorEPn8UeiKyE66pjryYBE8ffa6r5fUUjc5xKWftA8eJueY8Mdaf4B4bkkAEc8jR3GJY",
  "key14": "5FcNkvzCwZK7diCLp7PnM6XnR1Xmu4n1jjgpCGtzqqYbbnozhKHBbNXvnbUnogiiqkSgSVo7b4gaX8NED7YSMN7C",
  "key15": "4ZsqRGsWBWw6UhtQMjBEKNypsr3ULQUqkhZ6A2JRJBU1PwpLao8ehSytq8FDhfZSfDjMgMteZxX428HBpWXUcFHq",
  "key16": "5BpWwsmSsBiHT6DbVteZuNdsazyzWUxxrJMhvr8HuFGUGdScNgMdvRAhJ4X7SCK2HA9BbaEYACzEeYrsoePB8Srs",
  "key17": "4S3dsfNkiVG7RXwDkp63uyc745nxqaZ5JbodUPBr6P4aehh57FZGAuj4DRxuWKeigkydD2oQfqUCJniQFHrqGhxX",
  "key18": "5jWwLcQSRZYTNpzJa2VBM3L4g4sKzX3hv9vxNuz7AWJhV2VFmxverQtBTBePgombJiZcAPj28eMM2MWbDzW9MGoy",
  "key19": "7rqzQk2AfUbBLLuwAJWZqpZkpWKnYLwTmntCiS1BMHLKSzRzgxdE26hSbQxjoMbFkkDkjPenuRioDdwchBYHYcg",
  "key20": "3TAaat7eSpxu6Cy5n7mgKk17UkDfw5ddKrM1J3KwjkmNT7YsmgJatj4G6kUKbRyEDJro5GHQafA111RMEBpHce45",
  "key21": "Zbjtiq5ER9BaZo46pKECxL2U3deb2HAnmHVWpGSxeK25NN389wgW8gcEKaBTSGJFoqDsoQepkzpSGr4eMnSnvTw",
  "key22": "2SSxenQ9iJSiTuDLGW5Gkycvv1PthY3ifV7mud7JS5p3X8KjWgDiVLQEQzjxE81ZPf9BtrGgbqSwHX438vZSnGUd",
  "key23": "3yN4VEDtg2PFLw51LLSKL25jctDXBHXoaY57Nquq3UfV2G7igVUSd2NXFtv4Ee7ZUm7Aw6vwuC1m4Ts6x1X5CVQh",
  "key24": "3um8gQDHV1wcTU339maBQZkn6k48PhgBtfequVuHZtHTikYeniyMUPLnLAALPx3nb1UjeN2iQSMhqxxzg2Q4vrjY",
  "key25": "32W9QHCy9Xa1Pyo3oRsVaUT6bMCgFw9KXPg1Y37DzWxpsqtD8zMgD3M6b31cGkpaF2tpetK4XR1pmEcF1uqQtaRi",
  "key26": "Hmr7brKajuDesy2TbNYLau9Wbcsh2zLJ8EV11AnuRUNXmxSkn9gMDPqpZs9RXPwbQa3FHbCLGvoV35iACDEiTfx",
  "key27": "4Bw3MuTrYGEHpJgdmS9K8zC7qn31LKcvVczWaNNB5JV7PXzyvGpfWGeb33SPRWtY9zG9spSK222T7LSop2YdCwfs",
  "key28": "5QSSk5thJLLebhcb9kV9tbreojT578WB1ERYZjK1g7f8b9d2Bo4athDENsLK3BBnz6SnV1EK8tmntAhNcKFsjCoa",
  "key29": "2C6riYgTxU1xksjL12rFMiTnyJ5cvZsq6uXByzxpeQ4rG5CofjYfjyP78idknWP1QyqMkLvLA9bqJNcfJfHUQ7C2",
  "key30": "4GxDp8uuNTGm6XJfKPZayqSaL94bkVrbAUnaExZGE7DEzgwzjVY9CV2fcDoa9x1RWA7Fd6LWBAmkZrYj1Z5CvTpc",
  "key31": "3SeuRNH45hJDoG62oUsFvJQqogtNvbDkDUc8ytJbKx3iYLak2SpFp1iWbxNVHcjCKdCMuBa3x5fGYkiGHQBhjpT9",
  "key32": "3FN3AzPwZAvxi5LKvSQan5833bAq2Yep6iARNywN3EYLNQ1ELaXwD5DoiCKEW3y7Xf6r1MWn2U9wSzm9awTmypJL",
  "key33": "2z5kb7ZotS7Dvmuzd6MVB5RW2t86zu2UXuMcUyv6eigGRjJDPPEK7syxw4NaA6Ah1rxq4vreW56Ja4rBuyGqGpvJ",
  "key34": "3ftmvx8gF89oS5osc1Q48r18ns3yoAfDJuHNuvCkLVAPLfbAuo7URbiBLDwiTQBcMi8krq1YBNLA6nPpyLpaQ5vV",
  "key35": "J7iPnRoQ8xyCrUQaeAEW69KkkXWUwXeRe5v49ZeN8mnMVY2Zw3QgwBZYayQXzp71g5UBsaBmRceKgcBrnj4N2tN",
  "key36": "3YJU1NDEKhaVYd5cMWEfqU8b5pV88TgzQTrEC9wiZHdExd9TuQDaR4v2nGqAP1Tm2efJ9dqJapFtxLVgDYtAYFwP",
  "key37": "42K6s4BWjTQjaATCnaUez2ZrxboFzTExHMR8DGRg3sua8XzxtSEeoLxGYPL4LVZ8CSNfbZ2Ptr6yGiEXMg33SsXL"
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
