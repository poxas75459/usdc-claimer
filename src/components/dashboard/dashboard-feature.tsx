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
    "39Q2nvxQT1EG4ub6W4DiSouaJC9TKv8VpmoBaVVkpiZzS8JxYiK2ec2gxYXcD5LRyHMAdds3PSBPehCPEkxHLxc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mU8cWbHRc9iAKBkg53eQG19CwHAwQnRPd7q3vU2UdQeYCiqkF3inRuGRQhb9XCJyHBemUF6XHstetUuRvfT6Cap",
  "key1": "22Dsh7yAYrgrzLcpj7keq7HDgogcEF4TQ7mQzvPCQsy3Wc3deeeLEbjvUW6AmrJp6C5goeG9AMhKDbj7piRhmDRh",
  "key2": "2RM7Tatbnm45vtPt2qt7PWoSCMNgJuEJKvt14upsTE8CogdcH4nxuftYJCM1AifkLcRkkbS8dSJxP2oooqnRgySH",
  "key3": "3dB4r6XMJg5aa9UP1korHpUxTaCEcKu9puhfJdy3YcJH8ysdvKoLZPywKRF4Nr3mECb7tYUeeW3baEm6D9aJZWbj",
  "key4": "59kDsLgousBMSescGoHGtb1zswNQbE64cT5j2Kh3qQnthCLFnh1A9xRpPuunPRS78fqUzD1Twgd1zEbqqN4zfcnb",
  "key5": "65veA2VExmBPgF68MzCMawqpRb2SkUr2HAnTWUG8QownrEmKZLSc1W95qCqyRVe2SbgyrBdBimPfcZUoBVfcDdby",
  "key6": "4wZuCJXW2GQN9ij9aaV4KMBZhuXbc6qrw4gznz3oo5MLTZeM7aBGHPGJgfyQZ12PrZYjQ44NqHmH3BqD9SB2bhuw",
  "key7": "2ZzqQXKEhRk7LwEmU1DDYt1WLxyjNRkrxdoPfQmuwHStuURjyH37PNsnw3edwmvYP9qpsrNvjrVJhq23gXoCoRse",
  "key8": "d9mW7r893QtCuR7d8W7oa4C9qp2DoA35bwXwWAb8QW1Xb48k6FcrtxEVxSfaFEoBFfBMMXHEhytdJWHtenjJ6fr",
  "key9": "2wdDyF9fdSd5YSFV5Cmie8q9ykm1kjzjSsHhkgrBQeeA6kNp21YjoFiZdxtmPkvPfwZ2rZemLifGrQ7WAukqvQZX",
  "key10": "3qxgsdH7pt19Ls4Af7Gg8mJMW8BRh58NvXUDifeJUAgPGeKS2kvWqDkkHCfEUz8WZiBVfCQt4RBbL57vQ7j7ApRG",
  "key11": "pwM8eB2fVAjTQBZyuxc37Ja1kFdt1a5JkWmBQEZUnggBjQena31JTwxeCewDoCJ5x9GuZcBxbj7D5HSHrLUmx9B",
  "key12": "4Mk86Gxd9xiCZqUTqybi3ub4sPm3D9rueHXPZtWVay27iM8TzpCDMuxWBPY2gP1gY5DZ6obRZDJkbLg28QW4aaZ4",
  "key13": "gWvLwowvwfb2eavDZnoq3yJZpLHUGKciBTxASG9J1iCZ7f7ra3CsZKRauXnZHPd67ghhUKov7rXWMhTF67cHDeX",
  "key14": "5n31dfer1q1w94bghQNVR4AeT4fBrYSrhgQt4o4sEXZqvVoKCz6NBVKtjJSydNzxhpABgFbS1jZA4eSCurJJihbe",
  "key15": "xCQwSJfwnmL1ZuBeqB6dqewhQRZRuaUxFW4wjp51vyWvmvhAn7ckikbUBaouy7vd1jDWRc1KHqTACz3qZA6cUf2",
  "key16": "5UwTVo8bK5tHfi6e2cGqPQ8vT7WCbSsabJ8x8sqYLDVDYrUw9DLrQNPxXW4Z2xoknKWCctJAMwt8FN99YuWcdQoZ",
  "key17": "2S3rcD6th3o2yJ7NtWvWADHxnrjNFMm8M6tvornbRZJ1ptKT5WFhFyoNt7TRUaXYT8mvij4HtrDgGWNWNuhFRFkf",
  "key18": "A7SdfacAQBReHr7GXuLKythxRRx2q8zw6Nev6fg9v4ctHArPxXhJcik5EN4GNNFRtxmZHM3TJYfeXhW1Hg3N1Kd",
  "key19": "5qkHr5WTpduNdgMBbZWtfrvzeVKkH7H3VFX5vhFZ6nQaxJ5RAWw15mqe6jTU14PniTxvGL5H7AhHy5ovgtNUhsSA",
  "key20": "HUCr41JJtMni1xVRQGUKGJ1jFokcjiao2eraVDqaf73HMuQX7DoXxsYFQLnA3oZT8ToRfDP9rLD6RrUpwxpfwMM",
  "key21": "47onn1W3gCJEQLX4C2o2s5PsjakdPz5Rqsd2jKK7csP2gqHjNuZ6R87S9dbkpw8twpftiuvUq4Ks4wNBNEPxZ6ng",
  "key22": "76G6eWFJpe3JZZzDZbaJavoGb1NGQ1srWpMxw365AQU2zZDtjJBxZRn6EL3kL3iZVi5bsv8druQn2WRyswoeWQ7",
  "key23": "5AdVveuhu6oyjVcuayb8BXEkK35xJcNHtSBT3P7UYkAM4RuRYZ8P6EajpGeQf19ttwDGS9TuFCLT2Gs6WdnekzVd",
  "key24": "3h1d9iJig1o1dGTMR4PRyR7v2nMopBo25uNVQBBZ7KZJmHGtRkgD77hJsDAxzaY1hTVMUEo5s5XtG1zEhDwjEQ1N",
  "key25": "33Q4kfnqw7WtRBUUcnnK31HGcNATxzKuJYsnCQmTRAQQNgEUxtbczRYjGEyciwjZPTkefFQQF2uKDXVaFrM6Ze2Q",
  "key26": "52DQX69AnLZ7B2NmnaDDt7VjVpgCABn5KJh9HepvB9mUerULwnNkYjNHS2iEs4Ex3RuDsAvHP4STEsvupHPwhaRB",
  "key27": "w8U8SqmCiLuEPePuU3aGkLCCnBfVPkYQYHMSzLz2o8QCE9PcpmduYU2jB8pAUCtWeXX6699JFfT1NAC86smZtpy",
  "key28": "2pSJu27zDCM1Gz3hYpuL7nY4MQjRMjcjK34J5fTUSKrkLYhgfPgbrgiAo1PdwSFhS5LKESx3yjizvCBswNoXhwrp",
  "key29": "whgLGoHTHDJdVkhkM3gcseM98DZqFYhBAd2KsFUhDF9TtQrrXowQfugkMzGVrZj9x6tZq7o5afcN1LYDKJysYXK",
  "key30": "3trwodFjqpabzfA6386hfNDxyGmbxs7rXRrki7Bb1f2Xrczm6H9qQJxdenAXNkCSdHGSSkEjC7fRGD1mQ5Uk2f2x"
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
