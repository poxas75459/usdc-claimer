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
    "41Xn6xsE3aAFJuU887ncNavsDHkBQ2ur6ERaQ5YqGDtU4njN1g4V23VRmerzktQf9ZnRnmPa1DRjVinRiFWqaJYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quex5SnkahZLiEsLbJmwuZgPTHbHRnMX2fpvPVL9SJMmJ1ikLNn4ovkitabpSCaxN6Unycf1nU5JFNLfsmLfNrk",
  "key1": "35kLYZJ9j6KveTQ3ovYGrgojSj25ZcG8bzc7bD5sz9oQSu2tV4HL4qfn7stjwmMK3TBV46XNmVBfcEt9go29sT5W",
  "key2": "4ZTXeyFhK53bJH5hNTzLPvNDGxqPhbgGjK4wKTAe2KP8j8VTqfrzD9wXzEj3ghGSm9z8ZjJfFQnEB7HQAyG9suMn",
  "key3": "3k9JrAPNzFB4Y3zEhsyg9x2SGTG9vbyvFm4EvE5WdA9ESnTeeTt9nJZoL871bN6ZtNhA4tWwy3pFbkNTxCJ3apTb",
  "key4": "zMXGo9mM2kXVS69DPxr5LSLLm63UHXw2BJu5LLFhQuF2x3bxhb4PuPB8KZ3hKAnMgj7tRwDsKqoEcF2H556wEuL",
  "key5": "zZ9aELigLGVSS77b3UgfjBgyj4pZth7zcmjUNd1MbsEcrhYriw7bQERdJaASrKV5DFFdQdg2VvP77RjULAqHwAm",
  "key6": "2mmh6ScTzxQBshrfSicmGEzJ4xtcPDL13q2DEogn8bmCgdjridgJNJBLpDxpcQa5kZZFsLFfb8XGhDMnDerNakEo",
  "key7": "4SjFajwkJaR46u3tEjYwWivFJzeL7wCVd5vRoR2nra8Lub7T9NUGsr5XUgZKh3tRqX3SAS4JymwCRs5442FMpTBH",
  "key8": "2bFQ8fLi85vpd23PbBussxKKDdWs3LVujzKUNzdvbpwRuHJMTgnJfy3vPoqmXnAsTnCN7wHjzsN1vEwLnSYLd3n4",
  "key9": "4Pev73nrxSGEFHy2xeaSdPHT6F2Ew4QY1QDnz8xzRMdo48jdh28MuskVmrhzMgKfgJSmaogSVH3Q2njaWP9Txoss",
  "key10": "4ktMu1RoKHMK8gwpkikSqavL1s1tZJkHprmnkNGf1Kuzgmm3cpxEpxniMrqLabheXWEoVpUPfa4Fh6RbP73urGMt",
  "key11": "u7bBe6Lfdg9DSQjRKwtaMD2xc5PBykqRJozpZnGP3zhgHkntB6R2q27LsYnUWEDJmy1iYBEkzkr4dTwtL9Gfeb1",
  "key12": "4N5JqDxGFarwsnDaTgMNk3uxxLg1jQ3iromGjKCLdbvmW3KWeiQVcJSrQSzwyYscDNhVda4TF1uUZZsjgBbbUAh3",
  "key13": "2An2JkFHvfogrroRyLUyhyDfdXymSs4PRbBkxgkSSbcZViLxkGPCCXvLGtmBjeriPxbsMm1AVceNgYtEK6NFL5gt",
  "key14": "21rihhHfp7CorvFFgw1YHYj3g8PTK3zyaG2EbHNQa4TEg7JjyrKJLhP4KcRxS7YEM64t7UDnHLNNSPSsXX4K4Pym",
  "key15": "wrK2k6vi3bp9F84zze74i9AaM8TEwebdLQ5Hdp2vAZ8zye41SYaAujXM2gVJaKds9nBCr8mf9pjraQPLzmj16LJ",
  "key16": "2qZoFk5BMspWJFnt4zrFLDwdKbBpPYQctXqAcvUBS2HiuwuYKbXKyVsFL2FzaeEb9YGRREQRZsUMCdbPQTWD4B4p",
  "key17": "3WDyuRdeUdJr5KVXDGDpcg6dQKpZcpborVzFCEfp6JwQKnXYqpjA7FpJcypZiEGb4GPRu7nkAs12jANjD5hchgEX",
  "key18": "22uG5oKp9M71kz8gqvX8Lx7bFAiXw1cEkbcLpxLiaGXTZ1tBn9gaCJGyuQceDDxN45ovoT8vCATSJMY3DABxXsEJ",
  "key19": "1Lb6UvLo8DgzJGLSTUm18SsSZHzhRhcNoX7ZbW6qatnUuU2FZPBq67kKveQKCf9VHhvQqZtDTKECyWW6TU9Ndnf",
  "key20": "EDznFAMRAyVzvVAZPsXt5dorsvDeRPajDRaxsVF7kwNtJLBbn91nFo6yAGMBbjFybTyXHqoAbu6L5TBuyyscYBK",
  "key21": "4eiG3BAz8R7Cr4HjzhMak5Q934M4myGrCRyeaevvHi8kixe9rx1J1uAwuS5ZHJrd4sYgUZRCm1suRBaTdazmhADb",
  "key22": "4m7WMK6Nx5rKxtFf33rd1cZrvzCcYZUgFCihE2m8Uboctd4fJhaWnTZVcdsefhhyi8h2zMFktrMjVKdZDzzgh3UA",
  "key23": "3moRzJ7WxBbdxkeFeHDKrWKZE4SiVCX6C4Ayxcwcbvf1pcQH8hZfTYNe4r8SG9U9Dsg95TqZ8S9a9UuhMVCiHwnn",
  "key24": "3v27xg354xVUakBxxJAh2SVMxJxXnSSWpeLfH8M7LGZySJY78Nw3MJT5yYKFpGicCjVZdxYgbzzvdJDqmTQ9QXeq",
  "key25": "2gns49Q1SQxeR4KU5GpTzc2MzY9z5dfobAHvZwfmkJF5RRc3oErNSVmZ8JiYbpWg9baKu4M1kKzARSyxL9wBp7oY",
  "key26": "5XPHwHJmpweYJcYPiJB1suAp8AomqRP2HT85AyAZgzJ2by73UPM99RKJ4yu5ePbxWiBKLMcHhDjoz5iJGSUMeF2n",
  "key27": "578aQpcwsKezzBLi1XH874DTatxrSSx61B98kbUA3gYYosTD8WZAqoxrzfptfDWCcAqyNLLojU2GEDVtaQN4qgci",
  "key28": "3TsmyKgaVjNCiBUcMSTNdMKeZuXBg3w2rCPh6yLxuQnnZq2qSy2GRNSXBwCDzJr7NSQ5KKwZTKDAxqZ9AvNMZVFS",
  "key29": "4UppLbApCSkS8kpUMNQu7C8C5xreKsPPwVjuFNZrx5nLboUMxW4zpdJLPqVgawXS1BZKCFQsSXNTRd4g4Kc99QSs"
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
