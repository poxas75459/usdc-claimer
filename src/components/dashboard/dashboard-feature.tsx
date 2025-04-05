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
    "5uGobDbpKyhfeLx6TtSPUdRbSKjQdTX2LmDhu6uSraTfEyUL5CESPnLHVcfBMheVkoPpfVcwPtw7wQX5L63BGqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYjEv5R4GhhJaepa8H8HPs4aMLUgHg174hZV3nBe7UJVW5FDW73MMgymPWvPuwf4ZfNMjrmhaHdJFXBtAo92GpL",
  "key1": "2njLMzmgPJm4jjFxqm5hHPV7nLx2ym399477QGDooCjgo78aayvyLpQB2WveFj3yiAyGJe3cooZstqQDigFjjFXJ",
  "key2": "5rPt7DyENWdAXfbwEEyEUQpHFwP3bjBNqAbWkT1amqE4YNZ2AkeCk7iuHTNXAgyKUj6gNpExdeDiGhheqMsvtwWQ",
  "key3": "4moLJQ3TtyASxYLtN9QfA3VvoGPVKxVTmXftfEvjXSqJcchPsMij38uCRpo45boZgUmd2bcAt2cVsmXJZGQkAhQU",
  "key4": "5bNqwTVGiUWRe6KMaHqiRzSABkNxaZEDT9hPED4EP7oezEoHFXSupqs4yitvsKqxScSri185kpBbwavD88AvFq1P",
  "key5": "2oa3iWoaYs5HAJdVqGG7goLXX62sjyevXY5EgeDWrUHfH1LAqktZJp4GkumW7V1CYbFvx6ovWhy25PdaYgVMm1oG",
  "key6": "5fKpBRySMPx55qGwkmYQ93pzfMrsaGfK9sRND7Xt8tAM5Z4T6V9AEHA7RF8Bu6BUnLwEs9uXFDvRWmjdFPngc5tZ",
  "key7": "4sdnXmhGeFUFwtnDGDXsbZtKdExLyX1aHXC33BPEyfNEZpsNQcKj1Sh9cGRKCqW1q4QFS691487GZBgdzLRi8zjp",
  "key8": "5TadTcw8Vuck2qjSZp7xroq9pT1P6FShHeqiKfmSuMrrcx9wqCCNzvmgQmmnG1nwWrVzWcMEpXS1NNVB8mr5ucUN",
  "key9": "3MeWJBXCcxoy7pfKmfPRS38Th5V2hUs2gN6Nu6ZGzBWMwzpCifes8Lo3KVTTfz6RtQKuZr3YEXERndHq7ni8xWip",
  "key10": "3YaEnQAZKL9QHbGdbwdDJ1mNLGY8YXDqFzNyA8CxDJdydawv1qS7Vxv8XHhbwigZ2kLyhpBhJ1aKQV9Rz5oyZPn6",
  "key11": "4NCGMHvrWQD5TnY11789n3fdCjkYv9BKqc6oqXB8p4CU3wmQwpVRN9BKJ8F2EL4aMfFkBvQcm7QjutLfirBgqFGq",
  "key12": "4gQXxwh7Sj3fPa9vgWxjeyvejChpDEjbZwXj5pFU8uYog4BqRGMCzgXd9kxsGPu6VRL2KHCUFgUFe51x1GY3hXqQ",
  "key13": "2vNkN2FaaMjD5akzJGikuzPdHXRjEk5xSuCFxqEfJ9anWgDg53p9bdGSkr4HM6D8zoGe8vfFt1gfGrfySHTBFBC9",
  "key14": "jTb24KLutsWwvX9kHAzdic9TniSoP2o1MrisvZsWnSHEavWJ6aBBcGzk16mDWXxURcB9TJgYoArmg1XRnvPGRRN",
  "key15": "5NbD36yvPiGz61nNXTb5iKSgijhNMf2muSmr8Z9ndVSHg5C6vLKgxVZrffF18EnQNWj8izWxp6EwwMnhDLPBHCM1",
  "key16": "5avUpcpYBGo8nDqNM88p2Yey7rHWWFk7xCcXmRT2FqbYt5NYEJGxab5Noq1JGK4oWQoJrs8GHnNU3C5ympBZWCfo",
  "key17": "2Co2LdUYkeXX8Yi3RJTXzq8oJCdRFZiStNz4Jngvqh7aPfouHrXZhK8hVh4dezJyPJX7xfSbLVEVPuhYj12mfxJ5",
  "key18": "438Pn7Dg27u5z3xrpdTCFtGJjeL1yvh3SpvNS95B2REyeKS8xsKZ4ERLfPE4W5f2Vc4xPTaFRqAm4VgKonVcaMUF",
  "key19": "4GDAcSpyxUaTnStyhosaTBEe4p9fnjJ66kZ2B335fAFsEfZtb22nULcQyrDXcfrGc5hb2cUSoKh3vPvos2qxzmfD",
  "key20": "5bDHaV7K9GmhEyQozNDfGNg8dW1Mfbt8RQrgYt3UrwGPR5VxJ696bBFpwAguVqrieWrmZ5JtwdNbqSa4DCTwzF69",
  "key21": "5dyzei6xk5i5bw1uBvKF7sqeJZ5uv8jNZw2YMUxUcyEux3jMTUpNenbBvPFVjmeVpZdxnhYURtP71mmwU9ZfTGHi",
  "key22": "5sJfJdDi7edmToPB54u2Ze6u6j7zbj9EpXMhE8zKwYfSEgCSijZMY2KRuW3uYKo8VfXNkx3m848zLVnWGxdvztFQ",
  "key23": "3Fdw5wyY9bEM9sMP7oWdYikrfV6umCyxw4soX9CRzUQNn62pQdpnJXucXv5cNUHFDWPqusiSvoajsCeLDZvwEra3",
  "key24": "2xD3Gea9V98qsP4CRHwgGH2CQkK6XjGSZQmuyQkWGv9NUcG6aBDxLkCQNojrmUyGTatbZpK3UePCnBkt2bx1tek8",
  "key25": "2YF1rKQ6ztamrAGs6Jd7wYx85cHipU1y2UJ2wJuGSsnzpYpCYKaGZWr851SRjFsxzMTWUBSbmSvsxfvoDFWWp7Ss",
  "key26": "39BUvr68C9JwHqCibhF6rdfopHbhpEjF8PfPHG9YY4AhwPT3Yg1UzJfbBTzNnMiPvspSFxXANCLzrcAb7QQNbHfB",
  "key27": "5U8QpVto6cM8fWbnLkFJzGbfraNfEsWkcQQLX9B88opHUFK1EG2pUj6Hxaw77rHhCRntSDL5jCx85VXc1L72bnzF",
  "key28": "4SxyhKeNFwfGBeKfwiPDUgjz5acXQx3wvbjzEoTK7K83g35fnzzHg3XSSnWmiy76HzQqXiT8TT319NJNyaem8FGH",
  "key29": "3WUGTjb7L5uddkRHo44vj2RQD2PRVZpj3GuvTqExffN3RsrSx97mHqNFUDPLRYzuMMNARzfyfRkoViDa63CdS1Vu",
  "key30": "5YbgHtnyu4f4jTUgG6dMETLEw65QVEQnXXnykNqfwMmBygjdiYJLocWQdn1gGmuswzLB3agPeC9BXUnS2Xt1WgKg",
  "key31": "63UyM8KPDRQ26Rjg2MnESUM7U4ELnPPMWa6gKKogMRyMEGiYUu8saHcx8gyZ5TLZhSPF8hPCzLtNwWSVFW5RW4uV",
  "key32": "3mztJiJZvWKcS5jSmQJTj5YYSkN1y42nys987avFPi5aRQ8xUDotos1mBNhm1LWJsF8GjstcVEeqdcVM38Zokty8",
  "key33": "2Bv6kejh29PckH4Mgx7K4iDNLBPPn1VPvxk72qBdN5j5AQ5w1CT9YR48m3WBqx6KeuhkqFyMiHWSiR4uPmvEFrDL",
  "key34": "3426Dhg29njuycKajjFB6Jk8aYaqLjEEBuLhZ8oFb7jpaB7YZ9U6yZrqX8xi4gHxzJ1GhdWjQcPvY83S5LrXL4AJ"
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
