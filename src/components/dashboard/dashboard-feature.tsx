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
    "4nBJC4m1y9ozEsu6S6pbuX3MyfZQ6h2ya5FAgCqBz2eeCykAYvUHKbpPn9TXpVmqom7P85WBS2uab7AsyEndGBLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8W8mcfb8B3XkhD4HYCYvTXFuexe5kfxvwtShGWm8n6YYNT7icBccAh7PSTzgQQAe8HWznTfxMtXdcgajiV9efe",
  "key1": "3asTRJARVAvFNx3bnEZaLMYNfFviboBgvKzoEG8wjtiNMRMJWnGF6TB3HmtuqAA17hRgxF6mBRRxe1gqYbmGW5mQ",
  "key2": "cruaUD6bFJLD5xNsg5DWCtqqS7qTD47ZSNazQaC4smMS4vDRHZiex1BB3y5bjBBH5qZBbt85qFwP78sfgCKC2zL",
  "key3": "4y6XwxZa6jEdWTirMXqpwpJp6dRkimcksFXtVHcMi2biLhgKh7G8knrCfa1XDqf2si1uFuGavJd39JBMsamWC9b4",
  "key4": "5HZ3UV3NW8Vx3CBzujD2VvvSAfsoWagcDNuAi2gheNw6TY1LCdi12yu1NkNo1bQZ7ZBDiFT42Wf9om3XrPksGxpS",
  "key5": "3mBbF5jmanwPyz1FjaC4TqeEEPQvdXdJ3QnYQXXHXZCVpocKfpXQBF9pW5iJe91MD5oVsUbYmg4CVofeH9bUfJKv",
  "key6": "5NK4JpcGDQgEdw7bXk97WKUP8jhwmEBMxGUSoJnPkc8oxrajnyUeB2RSoBkQbEzydrhDhpXCKMi1Mgz4jjZVc6q8",
  "key7": "KkvFeRMaR6Cej5oqSTBBGTneXArh9vWoFevm4gBmGbHLYr57pAFEZHYbNsQN5HXAtCBtB5m4Ci9QaY6LJ8bnmoY",
  "key8": "5BQeQZY8t7D3qxsDhve6UabaZuZZkrdYst7kBnJkBvAJpTkiYFwg19K4badD7ZPrJ2CEAtezS39zKTNkWzULnTj3",
  "key9": "5k9KEz9XZUcasmsZCbkg7ZQLm2XAp6ZDRUmHp7LJqWnVSXVRD39CzZAdTRGorU1PpLVzEPXx6QgLVoenZ6uvU2fN",
  "key10": "5tfNvA4PkYURWEajuSNxFL6TJJJwCDJ4ifQm8hsA3WPrFvm9GhCexRYw4tAbtgQMi2bLUWZzNrZEFPhJeDkJgsU2",
  "key11": "2dBuUkptwS29bZo4Yer626GJ1NkyaZRkJvVWTJ3Rjzd2qcKQ5orSxMyq2kmqVu3fAXE5bv7hEfbyPqQhZnHXeZnG",
  "key12": "4mV6UJfbcJRZqVFBQspyMWNyYXvD5ByUfPZGwW1Na1GxXebCGBtMiAV5NJeUCeyRMWnSC81DjaPPTQ4anS53vJ5R",
  "key13": "5Ur8UuYMZ4o2dsiwP3bdZCsLvg2LednSgJxpKkThWyBtCt5gxFKAEtBPMgujxGYkdhw8hYzMhT7hFQpUmQJWwvnE",
  "key14": "4Z1jR6F82SWSm35tZYg7KPPxptVikKYbNoZUsjZpT5zWZ2j4jPyLrXZJZ9KU5kz9sV2bZR7e2V3YPEhpipQJZAFA",
  "key15": "4MUMiLQopn8BTz4DhmJiS63JKBfY5NoFRGtQodwMf3wPNKQV6vZr9rYiqpQLP3WYb9bX1dh874wZ7afUBvwajKmY",
  "key16": "58z1irctc1KAkbaEAiUaY8m4YuhRtiW87Qmz3kjJgsUkGp5NKhvbpyRg62uedH7TS5rvQH7FpbbATt6WsagT3zwa",
  "key17": "QKbT9pQGiMJpm8ntiyYay5VjEb52TFtMyacZP1vYUsasigE5pvfSuWoVRU4beNH2cgeR2VqhpLDEZ82sAhsxmjb",
  "key18": "4FXJdvwASMVFpVmUYJxdSwDRZkgxu1rFJcrqMncZK2DeFqk8rdPp3uN7BZkEUmR4JSCqJVjNCcUTqzNXvXkmKL2w",
  "key19": "35F1t4AezFmbMwm16dqu1hjQ8BoL42ajYCK2eBbspu4Ga3w2TRp3dBkSwje9PLykRqAzAnkhoPhwZdzaztezQu48",
  "key20": "48jzKQCFpSiK1h3CKP5h4SBfehyiV5QfbqaRgMyQAnWcBNYkhXcNJ4D5yZra8US3VfwM4oC5ix5aTm74n3xfHMZC",
  "key21": "4nYS2bmVcUhPAsm9WouRL6UKgZBGTow5eKJbp29CXsKojt4chZAKrr8mYEZBhTB83KY9ty3D5V7CpKfhxNU4f7B",
  "key22": "3WPMX2dj48mdeQ75QHBsCCfpXjzfGrswcehapfCpvUm3aUzLRDXZE8eR4bgbLdBMYhYH8mq6fr4Nm551uSpRzss8",
  "key23": "3GmPg9dWjDmJXgTbxVgy4dcEiFFf5xW16YQpauS3KxSPmBKdAFuEM1uSsn7rS7y462mtKRrxwW9Y9ChDq3hgpsBX",
  "key24": "5wLdjBcHnHyaTSN2RyN3y4qiNqjDGbHJuDEuZ2NGtGvYQjHCAX92xzVMTyzL3GiRKXM4BCtkoLF6m6ypjuycrJLU",
  "key25": "62JT3HGtVwCGDpvn4dctN6CzXCxG6fB365ujqhEqWc6b5fzHo5q8vHwJdrASsTXLyuWUXCehbh853KsN1Z81ou5T",
  "key26": "4dSp9rkPSKejEGsrnRG9yYd1ApDXgD4j8Z5RaX9x2jcmRVtvbS8omJqsm8dafyaZX8KBxFYoBZfoTg8iGXgnZocp",
  "key27": "3yeDQxboMG51EVjtSWFW24LoEMfnESPg932xRHHb8SSDYmPQKFf1YZMfNudY9GUEngXHVUdNDQZW1JYbNKWoA35t",
  "key28": "2oejbNAUmDwVAh8pkWxUCWuXXA6G1rTM2F3sFWQvaPp44Ddw6LU7AVaFmBpdgbPbiHQYFLfAaUkmxjEEunnr76CL"
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
