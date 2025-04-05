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
    "21deNd6T6vMvPo1ddoh48yZUJxiFCRBz574z6EgmSQu1bSQwFUZ99Toe8g3zBLJcEb6gtfXV9taKqep74YyG61X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdypDWYL8fW2mkbQ13bT3b4w2WBFQdtUHtoz4JQpg26GKxqNvcYhYvcTBwDmoSF9pG9fxRkC6qdJy24LrWaf5Ef",
  "key1": "4ZbvAqvAmxsXHxydZJE4Sb7cD7r6R8phwCZEtgJbo2wdjamGJByRfQ8Vvzk4wMvERRso33dP1QtJz3WdF65WKJ4T",
  "key2": "2aHdjNcYz8nHHGQ6HcbQiJEaMQboxTwNGfLzsCMcmpNE87WztKhX4btJUDHV6qvAge8HyeXstJQ3UwnRGZp2EgZ9",
  "key3": "aMExgWZFACUSQvjAAvAicEx3QDZbj3aSHqstttmwzt8C4rMwPqof62yWVZkNikFhcQbJ9SPrPJkgdGShzeMTaLg",
  "key4": "ERPg1BmPYhz2LhePueU4R6m8fkBB33jZ6Qcmh8mkyaTGMvMwUAjWttr2cUrdZupK2n8BpSUttBynARbhtajV4yX",
  "key5": "4H5KNE1rjUgc5uvajUigvAtgfRZ5eG2cjWLFjxik22tSVFuyM6Mqc3NEwZjG2bQWrUuirU2JSDuzRy5q5uxVnD7C",
  "key6": "4c2ZjNA17qJDvCj4JniA6zxPzQY5gobZKmAEULfuPR8K3w7YECQm1K9gtMTArPXiqqHZZG1aRAomQzTaGhP5687y",
  "key7": "smSv1jNtxpyLnUyieTg9An9JZu8HTBQo3AyCGxVwwRBqbPaS4YJQGMqp77Ln9Rhp2KUziJwaoCzWtdBqw5dPyu9",
  "key8": "4MdxGyqsXi7Lq9GiZeRVjYvfw4MXmnfTe4gh9b8QN6i7YNSTXzacGXxUaFW38SHrv7BbZLxboYK796TsjmRZ2JyZ",
  "key9": "k7PqjNw5dYih4XvJ9REGF2GP18JZgqYVueXiXoxqyFFT3pxRkGKcUQ3TjsTb6reM6cTTJMLP3F3bdWrBfK17wLa",
  "key10": "23P9Poowyv6dNp3DFU4gVwcbcuKVN1GcagKMAwjRAH31CGLu65WrAQ8QNZqGcX52BpRW96GeM6Tbb4qkwsFw9wfT",
  "key11": "22DGZ6AEMgXu4pJPYxSBQvunu96hk8vi7WR8ErGTPZm2GqJmZtT4LHoULS218iV7JqEX2ZJUDDQWW7gkDK6RWT9N",
  "key12": "3V2xYQ8GEzFnk5AJjTPoTQ72JcBXAwhQfYYc2srtKCLunsDAQLFQCDfQjx833yDBKov8zPLgXnX1pnj3qUN2qXCp",
  "key13": "s9QNpF7fATo5jJon52df1h5St16WdEkKWfuwXjjC9S2rNiTvC4Be9vVeXh2irdeqjs3eF1M1stTsncNkHzjyBgP",
  "key14": "5Vp5ruUQ8aXiFHymmq3BDmqYuFmXvk3To4AwRrCpKUWoSj8RiYQP9JuDsG1uCt1xj6YpNe2FqG4S9fKwAhWXcoGp",
  "key15": "fCYr9o8HEWtxv6mFeGjw5Wm7rKVAwb2fFmFX767Vi293TjqE3aFugy8oWfYzbwtFLCC9Yurdt51QzD1VVXU9v9T",
  "key16": "2ih7ZxY2bWpvWRsxVxCnhQvS1WUGDr67zrmi4BWLWh4VxjyYLw3m64q6xoPc61GCEJZs3qQng5yvFTLBvB7M9G5B",
  "key17": "44kPRoMDfiJ14okHFiUhUocd5Vn5vtBqqua6gBYXCUG9nEw9hyG5XwESJG6uRms4PpZ1noK4qhUtSJutfeJAiEjn",
  "key18": "m2uE92ZPk6RFxqe3gTC3SFuQVYMbBiADzFpn4wKGjVEStiubUaaJpEsEV2ZLVofMi3QMq1NKvDQbjGtWEahpqoy",
  "key19": "2a8GboZxWXzwf9Brpwm1r31vpzj7t4GErEuSCJ3dFHHyAYhNACuHT2pqPXmbb3Rmk9Dzz36v1JyHk9JQHxX5PVuf",
  "key20": "4VvLvhUnV7sWNTgGM8kNoSWSsxMDn3oGWTanXEU7VzHuA5923q1hmqyx2Wwamte6JpoB6rPW54LqfM9owrMSwG7J",
  "key21": "KsJgrgEciLk32bovFjAAS9tMafJASGB7AJXcRcMYVkoqLHKjyrYAHLZW2KiEhpCZiBY46trRPfguwRBFstP5sc5",
  "key22": "5SHSUz3w5cF2yjCK4Yqf6uYc2X7zYm1bJjWEKMe6qfNQtPB2tGELpfMCuShpdWDAfMG7PKE2bSHrkPhwUgFcnue8",
  "key23": "2zN4am46b4iN8SMhYq4kXTCRDsrmw2iK7k44jzMEdVR2q9JYg6tvBbcHvoGTtxxak3MZFFAXEdvMc612jbF93Bhm",
  "key24": "3k3zZp4GqFtNmKLQs4WYXr3kNwvCJ269QhycBmFVHmkaENeQFDcBhK9UiWadBDYFVmBpxwmXELC4ytX7AhSrxGvx",
  "key25": "2j315wuPnm8ux6ZLGY7Vdfq5BXqdLfezuHqmvxmQ2KsipxM8ENAhu4o37645zEezmgHSEHx4LQyqZjWuZqTRMrv9",
  "key26": "2s6G9qcCJ3N2GosJtQX2YiDCVXbrJ8G1HDT94TG1YMAiir6R93grmXcECcXth56CaZggnC4ugYsFqppdR9cx2usC",
  "key27": "3YnJEwwz8wKCNY1ReBhgiNDmT6F6RpPi2wwhWDJnQ9ce5vRsLk66z6kqTfrQkw81GhcFvyVU9CGdA5vVRNMjHU1G",
  "key28": "a58TpwK5MBqTVVQCtNr7m9z7SB6aFPqFgbeE846RELgWprDMujBr3FR5ZEXNqpWGgMJ3Xviut6iQFQnZMbdQHJM",
  "key29": "65Q7PbirfqbEP228ZAMdHdcmsty9psRfaZsnd12qoosDE8XgcH1qyr7T6AyKPaaDYvTZ1hSJYQgHrp7cmTGuDU1g",
  "key30": "28TAi379EsgQCzTgX7bfibf6KTG2JD6eEaXQdp4bUqF996VmqWRPXWPFKzgFMLWEJCjUgWrYDSgNYuADpASkR2Du",
  "key31": "5uv2HWB3UB8ZDz3rRHtL7zZGVPvQJ7Htpzga9qqLTTWZAbChaz6HfNuRbDMn7nvqPYihgz2BxaUQTiqmbSySRd4E",
  "key32": "2224Vkh7d9pCepuzxN6FZ4hx4mD9PcKPqHf2sJu5bQjdq89NF81qfpfvW7kjhvqcT3XaT9BihedQFEKnmPWDpczr",
  "key33": "3D9qVUCGPYfi6KqBfPs6WocDJ33RwtfzpHKAT2LWBp6B5EinjyZcQDTzs4sE9cRpRzHpBTVjmodbJehrCV9stMHT",
  "key34": "4Maq7bB2CqsY9SWGFay36tSiaKHaEFJG3f5jZybczjAGxYyyWh2aFoq1TS1gwzVMqvcPStenLZacE8DEvPXGUp8Y",
  "key35": "4WbGtP5uFwDvm3xrmxuJVfA39YXZUPFEEXezCZ8upV5gEF5JWAYXmaPgWgSfj5Zd8YqzsWwUiHjrYjnQWEnXUZDQ",
  "key36": "bKHyLT8Xyyksv5Dzt6Vp91Xs2wYa4jcrVKDaxwuKV84v3cba9GEzcWEHL9hxiZxzTvEVwKb2JqArgDWiy21YdaA",
  "key37": "2xD1c5iHd55GtMhk9oAbEuyCb9NEkrVpvAUM72fxBMWC42vB1uwyKkoCubMvAJDAJULzbgvERamriEnf5i7g66Fm",
  "key38": "5ENoPAweme6ybkjGvEy95Z94uaCcYKGuBEbwwvocDNASzRQVwaueXAYr9R4LvuhdaKNeSSmCxxa1VjHuWdwzQWwQ",
  "key39": "5z3C35rFyJx4ACrGdTFTuxXhGLKzbmbbRXzJPnpfj82i3hRzcqDrwDRhVx9LoFirPnswo1uvAqtNZZuQBBaYsCzY",
  "key40": "5vvCJGWoQfPYM1QoeTWw2pbB1ZSvi5sFhicz5bvbD1PajgLt1kcpUG7GL3C1LeyJarz5UNfZafpDtHqvjaB9EXbF",
  "key41": "wy6UPaMQJad7VQxbPqE7mkbhdzpjYtegGaTTUKharLsEQ6oqaD5Zhbnivrxveym3LEKZyzUBm1zoWc1EJajtP3K",
  "key42": "3Zu2kz5dX4SQV9ZyUEZvGekMynPxte48NaxoyecntWxYeLb6y4bKUxTcS1XrbeWUvMMf4ZaxDyu6bcgit68C1s4E",
  "key43": "31XVKoGfFpcNm8uiGfpku22x3pqD7owqS4brfRqScNwBGm5H6mFyFR9HsTkuCiguC8PF6Nm4Kdpy8khu4T8MU442",
  "key44": "4NZ9b9fGd6QgEku3tffTkAdBQfPSeZMYXV5PqL1qTqQey2ZXW3wKcPGfajFq2JaYgBvsaEbGY8Qk2RiqDCDr3uHi",
  "key45": "46MzaQZoA3nG5S3nodJnr5g5LyqAn4h8DjxXHeyhL2nK59HahUyxvwctbSi2hJ9P19bUYyUKkg9N8ysFJ8H5jxbt"
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
