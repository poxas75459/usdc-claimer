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
    "51Czrqsn2EqpNREjwCYQ4UxnMZs4ArxUj5uisxMaLNg92DU1yD7LAJKzaSPknHsrNtWK3VbnyYtqiZmyFQsttdvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxQbX7SvAWysUSgATfdhHS117ZKZpnA6TXhqj4qwKN39naDj7zeoUgZdhFxqQGpeujxjamxJPy67tGZ7fZ6TVCy",
  "key1": "5Sd1gv8yqiHKYwuoxqs8AUxySwmhXSoMz7FxkBPHxHQfRJ1FLNCZ49KBwecCLMTeUimDz1MsXJpGTzY3VsuP5fCr",
  "key2": "m8LMSce6bTDpwzszbm5K9UYsMLg4hQFoQvrL6YCe9o5DqgEJPUNcEa9c9EAKkMsLMxKdxS919odkGetSkL2SCyW",
  "key3": "2SxXgV8XZf2LkwFXkEe5kUBSnjorKAXaaSiaUC73Vmoyi2fnLPM4fVNB4zYHAbiS1KPCYcKkPiH74f6KpBCCJEs7",
  "key4": "22iExnnERyNLMh3EGjEUp9fkUPS4FKoNijuDLbBSMTpb79fBh2ZnLw3ks5G5dsBgStrqTkFXyZzL3QjmkwWpwzR9",
  "key5": "5ddHemm8th5eVFSoVSmN7vbXy11sBmB9f8ih2oBfiL8fkMg3GzwJNYxwGtVFDiYRyaFgHGA8WczevJtry4rrtcts",
  "key6": "5nqbhaf6XdJAapujsiAh1nN358AEYwrHe9c9ajHenN9AbZ4e5RTcEAS4KQ2aUyqYMkZ8euAwJFMrKTE7tkogTKgA",
  "key7": "PznmZ3uBWidBhcLWUGUrJNwBQNoGDSZZSx7oMkuaxByi7ruBtZsJo4ZWttwn1M8ofm2eJPjsNket1GYSfoURzGn",
  "key8": "3bbNbzCeRkngwanjoSxKawFZoKQzTPFcEjcwHLFs7ij3yPQhFdiDQo6gTFZM4sXxzoxXjYa6qv9qc9dJ6rykb6xS",
  "key9": "5bpVEpC8cguV65r9msbLSTZxG3zkZCsYrvfwV6oUTP5ACTkCihauBSaXpeDD5ESdQLxoim9r4R2Q4LpLeRpBVqCd",
  "key10": "BwmFoDNon9yqVH7p5F35BorHcoUKBd3CnZxg2xKyQwNasxpG9TdXPJTBJ253XZXagKet7wrbP3wT5BVF3SHoC7m",
  "key11": "3mk6EsEYb2Hc68e6meCdMFFg4E513qMGsvyz2dxbtsE8p8XmcWL3u2B4Hd8E9TdvX6JXbMkFMC1XChGbqZNDzRHN",
  "key12": "5aa1CjqqtKcdhkcP8BoZ5Eg8vh8LpVBKLrmwqcFip9LwjCbR2TP5rFs3BSTXjJFuVmJoCKxrYQXvVtarHSUQquSn",
  "key13": "GA4AZo8Mdb6ybp627boV9uxQL5zbPxDMg2NSBZhc1rYNm2UnhRjj2uzE8Lbs5j1H8BTF1SMNX5XXNMQ7QCAybVU",
  "key14": "2xT4DBaDaLZGDiCgQRwFhLLqq15k9eFmid2u82Ha5w1E5CX5pceEM7YPwhhbfzHZrLuYi9FSoVXTfwT7S6nMtmPf",
  "key15": "3H4RKdrkrRqQnrmeuF5jA5H9BPWhGM8YrUXNZGsoWZBNVm3kvkLje7ny1Vm8oATRArcX6cjju1QK6zEURcMpxi3W",
  "key16": "tq6pR4HEsF96PagWQ55mrZEzfCnVCZq1hr8EXtLX4WtqSsdmRn4XqtXojwKwfJmQv76yJ1kXY4bVTiaivPh7jFM",
  "key17": "59TtojoYj79Uk69NcoAM9f2RqLhzKypWmjhLV8KARcMiV6dWjtAeWKzuZoHnL3mcNwy6GLn3Mnetn5Pz4A7Aaxbo",
  "key18": "3aUeR2JJ8qayftbg2vqeyvPUrS5qo5ZbXyt37CcAZHGbxDGPv4k7ekhnbprfqWCLAjny6WaECPXAoTB8EJWxZo83",
  "key19": "24n2YcFeGZ1wmjgZXUeQbeCYZrVx9cF3HwCVtdgZRGJVLEipiRuyKYsU4fvjt3T538VkUqF6JRebMArNEYZJtS9x",
  "key20": "VkCRE11igt9Mdm62HFa18WqVQBj9CQBk5U8abvKxaDhPsSSwtip1rytLEteYrixouvHWRaWDbsNAMHd3Y8S9W2y",
  "key21": "YF7tET3pDFyEA5coAmxLbUsNn34gA4Wr5AHniLMwS5ay7aHhxNA543DpmXwpfBesi4Eicwwu8xtp5qnnUGnPzUY",
  "key22": "Xes1CegK4PphZMZ5YVEXwkU7uCjQwaeA48Q7Vkj1ibPZt1YsbsnDKEk8S1nwu4Sbe9UtbJu2thEhPanW1G4Mr35",
  "key23": "4XG6RhnVmxNN9eP82yvCGyTZGvBJ3MQwJRWvjbj5BXNt6KWGWHFUxzHwmTjmvBxCSevgGnDs89mpZdiD1Le2TaHY",
  "key24": "3eUzQJ2yBrQmoN7j5WoWyfXXtfQ7UfiivdCPxYgnpSjR59vnFGUNz2GPh49t3veZBEqiWVzWD3cqTaPMGzRLhKdv",
  "key25": "5hb1pqdGqPbc83Ui6AE6TwDKn9KGKetVk25sDDWTfF1P1wHeZaomevbnmM4XfX36CobT6sarH27Z6dNp7Sp25NwY",
  "key26": "5ZRL7WhkFtF6rKPf5Fib3FpB5Fkt1btjMHN9BHMnzmMWBEVYQsx4ZV49maMAZ6d5XmQwmRFNPjUr2TGEW5Q2ZefV",
  "key27": "4P4mX4sG9HQSbzwz1ny17YmMARa1KLX9eMPnmimpjg3TXW5XFPM7Uwbb4NARgnkbGa49rrGyosFkkh5HqgdNDTsN",
  "key28": "RiVaGnWLNbW3MFRdEi8sCPNZ6KWDTbUkuEmQwrMJuopR7kN5dkxevqsP4BUz4ccfQNre8cvKn82Q2JMxreqoXaS",
  "key29": "EfboGRmFku8NqTJGvTBEhsSJe7cpY6ubThGy98coTfV8sxtDQwBL1Rm4wmvagayuC21P3oqoawEcTMFwMDTgywa",
  "key30": "39xVwEiUUmwnbooSHX14fkJJLCM2YBngMjtEvhpvymMCZNhdwVFSQGcBRjxd6rjvgLjyDtQnbM9yuiQHYjfYB4dz",
  "key31": "2WtnpG3Z55LQdZRp6AJprp5EzjSe9HoRPyVCE7GEfBG3YtMw8JQUrfJ1qeNpQyZmsmfJfcKdM1p4HTDnauaMApSk"
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
