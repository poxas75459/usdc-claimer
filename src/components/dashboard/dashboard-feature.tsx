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
    "4GwQYRDhNX7CPEvMVGXhKojCCkaKioCjCBtSnVYSrbMaD9ARHQGZeHNg5muS9zB2Cho9j7ScQquhsd62W6hMz6Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qn7qrVNMrt7pY6iY5sooPGrxEaShRQvSbZz97rmMTT1gPiiYXwN49of8nM6zTFFoUZvCaZ5pvp8E2QNxvuNxFyL",
  "key1": "49ZxNpqCtZpXeY51oDyQimrHM3YXFKi3mNU5uTSsHV6pYby6EbwBDaM3dxJFMkty17uJHYk97jFYWfmXBgXPTVp5",
  "key2": "qGk3ES1Z22AF4vnZG3BPTgsq5iPjVS5e46RnHVuyfoLVmAELB9tc7mo6QZej46PCYJiLkwyMmU1GLzANtEpqxUE",
  "key3": "5VUtb4HJpLnivQ8wiZ4ToErMbUKc9jn4AFEk71V4RkhJELwMmrhj3ZxioxAEkqyA1VCr5kW8wB5YcPpdpcrZVgxL",
  "key4": "5fPjcs7gT8jWDFqi47wb78L86eFRA4evuc6A3bUwKcqaNYrAbyftWbsAXgjkPp4uxCHNEkKieQhbFPmUr35bhWfh",
  "key5": "2rTHat5qEo5m7VaBxLBTLpnQFV3iEuBPsAYCdRpC4WhbofrZBgQkRzkjBrUkJRw4FPzJqf7DKZaThYFcvkxnmPLG",
  "key6": "57oQWLxdcGMrnGZ9ZGbvBz9yBjf1ZQc9Fnr1BEXJgGarpBH1MjLbQo2kCkPBhr7mssUYkeMzM8eKrxppE1uymdhK",
  "key7": "5dCTWBFX4Gzgiwbuzj1u1H6vKKRB8MvY4dv3R16cW1ZNYs5GhjMWtA9vAvQqfS6VwJirte5zMmoa6v7BcCqDHZkB",
  "key8": "25y54nkMkbZc5obrp6EhPYUTp1sLMbBTwxPRfZF6dGGMeNqdx7pNFrVD83uZcodBL2NcLmfvnqZHtQjdR6UCULtE",
  "key9": "4i8N3ZdsFn9ZW1Nnyy9WsmhCAiCCm6u1VfVWgr9wS6bbS658134F6G2cnTRR1CcdTSqFsc93saTczWxF7C474hBJ",
  "key10": "4qTZGnFSA6QXJ6op25V56aNQ3vEsxseeySkqLM9F6z4nZ8gCDQ3N1quqKz2ae5aLFrBrhq71nMP2PtvLXMu7dp21",
  "key11": "53Fc3T19zVJpXzyA4A2MpfLx1FDRxrkPtWSGfu9DEAYPkiJACazTaPP1G8YazXkx3Q3YTouMHevygMZvDvHEP8Li",
  "key12": "5iZECkC1Tx6xkFsANgKwnfPtR5LTXFVwhWiEuE5uzaXL8H6pb1qfBeLDvPZT2arv1ZeW6M6xSPzC1Jjc5YUnEy23",
  "key13": "5Px89w7yv7nti3LmXxNuLJQCdChTehLKDj5ofTEw6JTt3qKFJo4iFTnsRTUmGCT3FS2Gdt6xuYMeTk3VdETTveKy",
  "key14": "2KZ6kgsrb7o6T13tzVG4DSbAhfiWK61jcRf2YWHddkVLJP3dLkzRSSGnCwZ3xrXt8VP3WkH8UNp2fKS19FKE5W2p",
  "key15": "brGB5dLs2SZnxByng2dLBLkBev9MV25sPAn9Stc8xbaJSNQxp4ZLmNAqz5jYyYcGVXkcsqs9eEtUoU4ptE95EZd",
  "key16": "2GcbTKrJDXyg7SvaGcTkqHmhUhUtPN833r4oJZoSzi1EQYPQttr7ALkyro8Me5Q6TdrmNkWtZ5SbxjD5NaMvTfWe",
  "key17": "3mRA7X9whrdENcboqApMJVjYic3aHmeQa1BLFUH93v6UG7RwL98qFRBJeZvPPDwCNEzQG6vdgrMeMhxECjLi9LTx",
  "key18": "3G65kGVF3MtnHYBJTy1ocSLGQSyyY7uqGze6UwzMJYGdZ6iY6Aybn7AF7FEP5a2pq3H938RKdmzukpz8JcBpc4FS",
  "key19": "4Ro9k3ySm8eaG8yR2VAz37LYSrxyJfZv6bmiF6w7wp9cvDHNeeU7t4Wei7brbpUyH2VUPDetEtvLZTtRjtu4eiyG",
  "key20": "5BkLSELecZb9FqEXdJ9xFzpEa6KmS6qUKvFhVwoT5zuQZMiCZn6c18yKT5mu4QHwjVsvfS61D1ypvGKBPbdAj5kZ",
  "key21": "5CNd8GkJEg9HNeXiZVRws9GduqM28BRAbWQdHfQ4mEZm9qNnu75JSUeKjqXct8GQpB5eNC7wuteFWsWLgCuuTdnb",
  "key22": "52j7wJNhz1EoTTj6LPeE8raqXzU5xQLyRAjJztbBtHDPYnkeLPv9fpwGe98hsUAjBCyhRS3JjXJxBSduCQLFLVme",
  "key23": "24PvMpaqU5T2piy1N1X8Qk3fVsCW4Tc3yYacXrqFQMcmSoR7i8XMAki7sF6FhtGJhgmJni19euo8FPWkVmHQhRwb",
  "key24": "64Q5AXgjYaXvMfNbso1g3oYDtTnJr38Y3hfdJ4YmjhvdhJWJ6uqMcA6adH44btJw2pWrVLZrSZbZiLzJEHT9Tfpx",
  "key25": "4RN8rrXsnwC4YWNuT2cALcyK7ySfFhzf5kiygtAhr5bDaApofqQ7wPbFHBhNuZRfcz61ua3RmoQTbBfN2o72Cr4h",
  "key26": "4RYyFwQww7NTJpybDiV83FhbGeSvFMiXTCwYZnZvoKFFEQ6LwubDQAEnL2HzBEyvYpnApNqb4yYmBqDKHjE7NNL3",
  "key27": "CU8U5DcD92dFnB71TNrNoRTYMGJDzsGLx2Y39LsZ13vsUfYzXJ6ASksxjx8PDdDrXtShu8opp3Pyf4o78Qzw6K5",
  "key28": "3BdRaGAALFrrEvWjmxzqDoRHaMCQkhoTdw9MPzdiucxYt8nBFu6YpS5Fqjo71gbLtvzVXe1LpaeQp1xweJ9GdDPF",
  "key29": "BzYe9iKyZPztumawBUzXzKTUwzwFmYKdKiwiGH2ED4TyHbQYV5sKUNHmzqCsaqx4gB3HZ9kFuxPwZ5pw6MgSZqc",
  "key30": "2bnRe1xpJJr4gBADm7V6xdVzmrvWo3EcDRbrr9QbuuWud5mFyxKf3sELNN9hCzWJSZEDhb9HHYGSwsjbWDMSANKG",
  "key31": "W5EpVeaBoUWmnz6n5Ls9QXv7wCXef9ehSaDbNgRZ6h3snMskLWaSoMfUryfvjGY9YtDDwVvF5YsQN2a1UTRaKPi",
  "key32": "2NZxidoPtEmKaz3NhH8ahUt8eQnYEvMQCVXXyLyeYNbZEZUjGCkuMBpWpN6SWjmZ9FeWYuH7MNM3PmTJkYC1UxUC",
  "key33": "2FjtBuzNYUCqUQjr795Rsa1ftJkpAaHhmbYheMWGyzPmLh5muW9wFHN4FfopqcVoRQnajqk1hHj8xtg3KWHZ29zy",
  "key34": "4xgHgKeCZjDzsav1sM7KTZbowu6v11FTnUbw4CA8j1WTHhQfckBaNjqNZ5Uyi8L1QwGfixctkfQsLkQQkFJwueui"
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
