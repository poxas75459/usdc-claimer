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
    "4wsg3Q18frNbKU6CAcyG6oDfU7kq34xw7t8XwE6NJiyPq9opvFT55fMNeD27Xy55J6KkbuoaDGZsFoJyM79BQBKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8EFbfv9ZyXNpN1QaGhqbAV5tvWjowsJ8honQZRqiQ5vTXFbMyQCphrnSrhv2U3swmUettGJH8qCfjtYW9ZkYek6",
  "key1": "3rFP9aGfwLKXvEwqWVWaiZkj2CQqCL2dLaCsi3Dx6xy49iMZrWhh5ZMFnpn6NKmE3phkeCZ5poxYssbgX6Azkenx",
  "key2": "4Cc5Z6MTagkFV8HT4JnHnzvDZwQmb63qQ9kMnszCvFZQNFQ3XWuSozhMBBvE3QBwJCeEp9ddasuhSggfusfZVtEP",
  "key3": "mud5aRsg3r2ch5CJNoAuVSRkM93yzyrwH14TctKib9ZKXbVi94mcozpodVfVW3aHarZ5WkoNwqGJg1yvTGjWo7V",
  "key4": "5hG76bgF59PSnERfLKmC3e2C67dbssDMHJ3Pg8iV46PwgA9LAHzdn4MUPVk6BpDXLXUaAdpFd7BhPa21yCiUx5GA",
  "key5": "2GPDB1ZcPHNe9ULaHZUPsPxMnqEgE2HePnPAuwd1UzKuriCdAEBWamqUvNdg2o2xBfEArhbvcKrBmFfQN937fyt1",
  "key6": "2NATuxkksbqQWSvJd1tVor1n9ZadWSM6i15mDfxaEnayynibUspuUoTk3g9wodHGFrVgMUiTs2gCk3QCRb4V8wHx",
  "key7": "3j32uKypD99sDDKDsZpU3Qpexm9vHP2N9n3xtYhp75HppgkHjfxvSPSdnE43Ah8d1eqvQJfMv7QDqUn7N15xjjRr",
  "key8": "3JFrR33RKcXZYnDDT889LeUA6nxQ1bGPmwXym8DWGK4xtuKfF3ZRsU22u8krtbq2AqD6Ce6WK6XKx47mwEBDdYmQ",
  "key9": "2n8tuy2Wb8sfNo6P2TeRCQXFpRuzJfJycuLGvEiHEWC1UCSidnPx6L1kgXo6EtX4YXHFcXzyyX1pLGGRHUKWrBqY",
  "key10": "58H9NNG2sEbox8YLaBWvcZCk2idrc91YaEh5iUnhMfsEgPKkU5K2PZS6mDVjfxwDmarzHkCByra9Y9xQSKiHFY2f",
  "key11": "FLhHg5Aw8JVG2hUTcaosUuArxDBMgc47Ef14tSXJui32VS4N7VZbkqiWXPmQqPMbdcgXxSf1XHDNWGJLhaWhTAZ",
  "key12": "3KHzz2zAakZkhV3jEfNyuGU6pVEx8WgXukLCxnj1uc8ZXatiymm36vFweh4jvcmYgzN2CFc1V33XoeV5Le6BPbPh",
  "key13": "3NWLJyZCnX3b5MTk3FLPQKnW8zikaJjUZXtGkR53EQWPhd1biDhFP2yZdRmPWHT2GysLwG93kPUfj9D3tT833AyH",
  "key14": "28FrkBi6siCBXVt9NUPEqfkitM4q7dS5eDqxZtJrStmspHkYaF9YWndWsAW6Jkbo1X3dDpGs8H7QV9NM58QrqdrF",
  "key15": "32PqfUm1ZoBppvQTU5qkjVptSVcMgmnnxk4bSiMMyX1hgGgFg8wUaMmpQeUvKMcPRz7yYSKJXtmxE32NdwPS3xJ7",
  "key16": "3PN3e15S5LUSc6oEmXP1Npbq2Pod7CmGWZ73KBpsVFdVcQYuycQpZEBvRX1BXKdPbqkT5qLDFq5sZU56GoLuJbDW",
  "key17": "ToqJjzSKeot8PJRY6v55UbT2wCpPXxSL9k9bbmCxroXT8gsHaJDxEShCuRB3pFovc7tTbFh8nEsjpnSh1aJ9zf1",
  "key18": "zFnvD6bS52sqb6wMg4NQkheqTbJ4D4Ao29BMQBWHppdnYwaTddy41d3NomdcxUMYGeQi8oyQbyVKRaPCXACNqos",
  "key19": "4gEUeqNr5ygQVcNviU49xMggUefKcbKSpE1xcLTJPxYFnmimjwy1nkrMDA9yp5H4j8EZGhRw2MLFvi9BmVXp8uCY",
  "key20": "54fUJqFdHzWG9nf8GR8KdcBMR7TAh87dptv4RrWrtg8rdYZx5dmY9Yg4cf7tXvPXdBVfiPXRNmBxU3jEEFdAWciw",
  "key21": "CcuZsuqHjsLy6MHbjT3NJPDAaP9a7zQe8bqMKVNucsu8JosYjwsi9nBpyBDYy838QQYb6ZXSUU5wBVhJDLiGEQc",
  "key22": "3tD8DtSphmH3TDgNhUtEjFHEJU8cNKCF7fZFga8FzEVdDYiNuUitkGun6WRdAbh5sgoR3tRQCSkcopiXjp2FirsS",
  "key23": "65KdCww5dUdhpeyNoi5vy2cDLV3kpCKomMKHUqo2fCPLR57EwL1m4SxmqvnPpfCpTAnoiSFE991mxR6xKzdBCduY",
  "key24": "4yVp9DdHGpqXAx2pKWVGWLAGMCqq9Bm35Xn5nRyqBiscKx9w6wLvSh6EkdAztivzauTfkDBqSvqZWQZXFJoWgWBv",
  "key25": "5bLnUWjaukQkKkDJPw2ykDun3uwvknX6WjybxNzesy8X8obtsLGxivzjE39dArGnwASnhmW1CXnzCSHM7vNdi9vQ",
  "key26": "5WrnPK4UyBF9nE2CoNRREAbZYto1GZPjR3qHAtGnFFPF1NEJVDuRtE7xG7Th9nJ8pq19Vb9NfNZNm7mN2fiBo8G8",
  "key27": "5aes5WTY5tG1bFPRdh3LucXjsdMRWCtuqJLNyQ3KdaUxGKnDkbsREVpqqbf3M6KWKzjKSkRFJwy82YYAZrjvYVH5",
  "key28": "3riHuV4wu49AtER7V15Zn2WbiYAoxakSJYfGYVukRmZyi4UEj1PAVaA9K6ndY4qvrY7A7yssnRZNNe6Xz8LLmVcR",
  "key29": "33zEa7Y3JejpZX3Fy9rrgbfwor2KnonLFySjhxX3Pxb8K1uh5RpXTwL9cPhXbmRk9MnJfPXGNhw23ouXZyPkLBHF",
  "key30": "edU1CVRnZxtwC4MyGwPimZcUM1BxJmgK4dkBKEhJkK8dDG6DswMNnsr21KbVCXQxEhsKwfHyFCuR3zCFZfhCTGw",
  "key31": "5i34UCGVQHeBmmHmm4X95FeRMFmqevpi7RM3mQbrTRBhumygAQsFq8pRvDPgSpHxDhZUnfJegtJ2pSG3mtHHnFy3",
  "key32": "3U7rg9gBAt18NAuaDQREZXmmkD2PfoRaHuyoo2rwdjxjqBmPVUKZAWdzSvpnPpAGoH4NHuDAN4PJMao11k3RVzJ4",
  "key33": "2LXA9v5N9huTj28j6iXng4tXC7ZawXFnvppAJDV3kUzYHvFUucaHZK2fBYuwrAZQdq39swRhPTU1YG2wMTin7q9T",
  "key34": "PhRhAJcoLwa4hkqaWiBQerwDmFtz2ki3KLMQyV9jM9JGDGyKE5kqamnHGyfaTaTsjx6RWowsUC28mRGJR4n6hRv"
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
