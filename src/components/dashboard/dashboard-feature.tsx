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
    "5JYiqZKu3nZ8XeQzXP9hHCsNEQEj17q6bCTa5aiFZpwhTLxhQxNwQNqn56yXTQUnJekDfGPvwDBJbPJMSx9yx5xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61adkw9SkT17DZvQ5fDA9yR3KjZhVHUe67uiEPpbF2fqgiXdfmdFSMeuNYwHYsPkUEnYZzC3XyRU9HqzrFLrp8ZP",
  "key1": "5YbAgi9QLhUQRsu3MvTTi3uLAQPyknSdPznmCRhBWffHnqe2HfN73DzueWSiTM62W2jN5kyVy3J3UeBUZ55oKnNT",
  "key2": "3CYhZ5dfR6gFaL3U7wXrnyiHiJKt1b53Pw7doboZSXvynQDyVLhDB2fos5mmZdLo8Nxq4oCV8nfk9CUdLdpRnbZq",
  "key3": "3p2JSP766W5P7MuTCc9WfPgGyHEsR1UwJ4NrMYFcm75NEKT2eUtH6gXCXitvw5isEJMtzypR5t3QARfCzUN9zdS4",
  "key4": "44qjtbnW6iQegVniCACxK6KJkgBXcV79rfPrm1pagjfYVGJ5Aw7sNn6xyVyho1v4ZB3nbrfdBM42zvwaVyTJS4HD",
  "key5": "WCpgXeGd1fjWbCbY6tnzGY9QdtZB6dRXikmqJ9dKBcxw8wPv9dr7tHzLz3cUkEipLXG2RM9mHXBWnFV9PJQ4iJ3",
  "key6": "m3wkieWVYdTqvaYCRw5zTA68G6VPhoncrrnjuh6c1bn7T4X9m7SRk5VejDCJHS9E9GfttSh5bzqNCaz2t6wR5T3",
  "key7": "NT573jR433XqbyP7ATjXU3B5CPxkC1Ss5K6DSVzhw4Mjm2WHzWN648hWyi3B3n2grYzX75uAfYGNB9tKMS4NguC",
  "key8": "3aguSgSt5dWsUYLFsK4sBHkdszdeV16onfZYa9r5fGZoxEgan8mAk552TjxnzegRYx7y9GJtjxJFNJKttqfiqAMZ",
  "key9": "4ZXygCPYsMjvanCMRRemV67ZVr2yX5ogE75kdSrzL5PXmwikMo4dgaucDMemi3Ko4YHqPqZCMVpbjSYuihfcnoVq",
  "key10": "beyT5dqpYXU9xxD6BAJhprSSPvVYpHnqTo2B7611bCuajv1MPb3i8dH3cYkQXwn8oanUuczmpicBfjZeiBCrTnR",
  "key11": "25qCZYoXUPnEmqV3mBZm8DhdjCXiV56Kcnm6ch1YRhY2Bh2MCbrfytjKAuuyW4XsBBhMZAG7Up2yQsmN1q2QqcML",
  "key12": "2ZZuEVpRSA5j91iqfaHuLbdr1dSLLHoqA4kXHLq9NeH3eA2uAXFmsWAYESdKMerdgKG9ctavh5KqBkGQZpgPo3it",
  "key13": "2fngrfVmrPsvs1bNzXE84LSDSDMEpctA6P787XsQyqegpfun3o6kL2KUtwA59XJRSBw991xNp2hUokUyYA5hP1vR",
  "key14": "4UNYGoh41e1vWHQDAi5P95j4z1ZPYjJn4opid7q8peNRbJQThdX3VvgHoPKL7CejzwXv6UZkLueDYMn69yG6AdYa",
  "key15": "77YJS2QuzjzGidoSPkMdgGLmbMGgUj9bL758DyPH3SFypRjWLoKFA8g5c6Rf7io5jchbs2bBdNMSAxKzA5HaCBd",
  "key16": "j6DLbC25pCpWaGwazfevkL62WFLxfvv6HBZ1eR181HKDgwQaLTWQkW6S1Wuj6B2vdxi9qSTZc9z5Ggh122xTnzG",
  "key17": "3HNtkAkXoxLfhDSeT7E35HqzcSMm6J6kVmDHUVMGaZ4iuhUz3JUpSGttujJw6CJxZTRReKzdz2VBmrdCK8Hy1pVv",
  "key18": "2iajEcdWWiSgntpmvwXPW6xTUJqrsvjjwg6C94ViYq2tcBxNjW2EY3LBzKZiosKHesziVADgBHBJ38aB8bHkGoaG",
  "key19": "8RTrAKFnxAfLNXExdecH7xh8VnvHrmFeTqWgYVEy79XNH4sfhu5sSk5Wfi63rAufYebwGALw3vm5NXi8XPWUfAL",
  "key20": "4SRpf8ZTKowZ7b886g5LmpkGb9i5HCGDTLQJEmBo1r1eRtjhMsTH89ftkhVyCUR3JEF9qtVVtKuQhAZhmR4YuhRi",
  "key21": "5X8fxQVsf6PY4uE6jqQN2MLBTvmaVqpxe45y6AMjskZN5F3a66ntjc1a63pRZXXgshzNyAowcN7Wjw993FPVzc8q",
  "key22": "4G13z3ByMLQS71zhL22UB9TK79FfeiQn26Hntf9wJ6sw4MvWAyF4R6DYUhnHgrL4wLGLUnbdyop5Ha1RyHhTKeWc",
  "key23": "2yxKZJ2bchhJknvM699o7sbVYerK35mz1Uu4H1du9yR93wNNiNKswDmKaXRXpvQzgwqAgJk4t2rNS6ouU8B7eqCW",
  "key24": "2KmC4WzVAAKdvQi6bJM7JrwjUBdusEnH16F2kREiW5QQtEVrEX6K9nj1qvyxHdMx2Bk7X4xH6w6vUCEzLwbbxJwP",
  "key25": "5FQFdHSwe1ggSvaTCYEu2YaBeFCcRctZL2Rb3b6rNZp8XPSpFV4wfmjugmvi3D1AsxKmGi2Ahyjt1t3AbptNdqs4",
  "key26": "2Z394AY3b3rfXN2JxBUcnFdyTVE5S5W2k4ePA3AjdPbXGJWckXS1yjGXhFNVSsDB3QtBSK4fFHMyqrDFTjnjYjRC",
  "key27": "5detWyXNZSNisiG9GfDk8qJozXzi1ZhZ4Q8RwRdYEmENrnaiuLWqxq1z7JjEzXhw66oJ2ckDqYLQqegDcZu2aKYC",
  "key28": "FyiaMbW8hcuu6zNSmVXVt7xsA6EtNtyTLfajL4YTBgsPxqq6mgEdtspA3PAJW6sUSyDCffraz2rjf5YAtv2LAD9",
  "key29": "cVc4PPJgThFx9JP8PyPKcfRpfhEo7tXh4kVAVZT6A3sfeW5RLzMzZYRsLD9vB9juM9fnueEhqFo3rY7VRGc5ciR",
  "key30": "65twgEbbHTGXMw4B6hWzXWZfPwQnqYpqGQ7baU6TTF1pumqs7r5PsTb9wAVNA1KaRppChyM5ZCJRFRVYVhhB8xkt",
  "key31": "3KxN3vAVTfpYZpnsruvtFBqZ43kBuYb9xw8jLgZcAWYfCU3R6m8eaK2VgP7Hp5kG73VKdV3Ja8tX2c6q4GwVyRpy"
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
