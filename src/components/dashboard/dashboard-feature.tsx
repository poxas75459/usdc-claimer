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
    "5EnhEoSCxjTMv9UYn8Mvvp2vhsLtgLQEFTsf9GSciJicDNoukCTTvo4fHUo2bT7Vn8wPycVMnahA9EwoG1bcFWtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kutmbQJW45a4Epvm8oZuei38ZPYu1UwTnVjSovhZ7cdaQjP6qCqynrH3CQ6bjDcCxgrh9ACWEVcakbCiDQcLYwv",
  "key1": "q1pJMyP9o1W8Vb35aHmNC4ajVyL1ZHsoSkKT3ZLS8mj5ThpfC4awfV3ErG96BR1ADp5BBBCfVWhsG5TQsU7eN3J",
  "key2": "4hYPueDs6Zhpr8C1gai8fWMo8JtgHQUF8GeSkVNYjKiZwZT4GqjK6GZurHBusXzcUn6sxXaLddgbp4z9uEEQ5ESY",
  "key3": "4ZtnRw1RVXqaiUV99yszQWduCy7Tnb9W9tVH1AxGEU6ycEpUmhUt8KTBWL52Ncn4wEM5V9pboDdZpaLY9wq7uWyY",
  "key4": "27Ej2gscYRyiHEyX9dfXkgWGDfCxBekf3v37L4LfA6AGJUibyW8wnMfX9rj52xKwQtMwuzeAmHsYxZVq5Rr8VZBp",
  "key5": "AzabXMVNUgbGKEQ96yndbedp1s139XhZScKNHz62HJV4MhpctkMDb5xYmu7ALMcoDSYLp1ptLn4G9egenHZrXNR",
  "key6": "b5B2DkGik8ZkmjdP6PuTXwr4q5PB9WnJxphYGcgKUJnGkjjx2XQ9UeKdti93bPyxSHSFSN4UcekXf41BZvTRF2y",
  "key7": "2SC1YS4PVLin1iXTWs1Vn5ahb1xnTR12wDuU4G8RjgS1EkJxHJie7DF3H7fqxPkkHGeckPTEfGKudMNxXgircZKz",
  "key8": "5eZWzxFz2NQ77vfeFgY28S6HusdxK2pahiJTaFkGPcApjincwNQ7sF6ULfaVbewBvWE8JPYSBsD6BDpTz67gdFZq",
  "key9": "5aP5sqDd5pqoWsFKj1QJyDzZufYMVFaj3cPyepdZanRLK5ssVxJepnj3KV693PQmT6pPiomrivtvmSsRU7y6t3RA",
  "key10": "4ajKqWNtCHBoU5JygNzruVdNsWyEmfwdxmkZnVAa9rU6kkHyS619oHwMJxLqjFknEVcojM5vSw9v8meeX5HRfLRT",
  "key11": "exNiqmsXP5z3kVoC2g5HGyA1iuTC71DuiErDNNCY2Ze8bfFp5L4mB7pUe2riCSC2EaizdZPgCgLgiPLtHTyw4dR",
  "key12": "629yuqLQBvfy1dgrGKoxkBHowALCcF65t9QDXYqyQKfnsTDs3FQmAgbvZA4yFYKA2UjLZtjoLhSEcafeDZFyyXia",
  "key13": "51d6q9SKSCPYJfDreNY3RC47Nc6xEBV9uJgonKb6idPkrTBNAVAbZ6RpcvXTaFLASCJSgPapXkeBy6moNVfimP4c",
  "key14": "YBxT3GKmaA8mLnMoq5SUPQVCgvtiRQQHGHnqajFiej58GNypfXPzJAPQRX5eCBHaD7JRANYgTYQPFjNMMRh9o9G",
  "key15": "2gRQRBYzxuc8gtFqqPtQGmeY88sK5jbCyEGdouDdJEbV7oyHKdNUrRYoG8ZscYMWJudmYMSH56KYHwwqS6EZeng4",
  "key16": "5ko5CN6fV4HQ1wQdoa4w9RCdCTL82xeXR39JEBqbXLpsrnfT4iYu7wqQ4n9sqXH75oTe1zuiD7EFsJkgBYAtdVCr",
  "key17": "A6whRKcHiAH8HLgv8pPTk6yaeAFKoStFUUMgs1PSL5HdYkxyrfAKXanCWtGnbMfFxWzRyNHhbPnBm8TBmJ15mCw",
  "key18": "2GGXsL7ipaTuapjsL2Bee8EQhmSFspWMsu4JMkgs72saXumTAAnidz4s88cZmHa8NYHA5XCLz8Kk9j57uusURNyc",
  "key19": "4tJgwK3yje72Y1ABo7Ft1wRa9VcUYvspPbKna3ntch1Bk41iQ6YN1mEuP1qERcEFjPmu2of5w65QeWExDcNMSnEk",
  "key20": "3WFETnQKH5k8uGcMCBqPSQffaUjXuYrNxS7WRSV28HbguFKvALR9ZqzHMkMwcDT9YNYPFFq9BjCUS6oMgxCUjisx",
  "key21": "5RwAJFFuFHQthtLreauC7b6sUYXXvoi8PQiiVRMoWrvjzRvfDiGJPWQgN34WKEUHFhpRPJ73D2KSFYu39Tgr4Pd6",
  "key22": "3rZy9bJLLffxLp1grJeQiUMMYfqK316bsCJ7j7BNiHvuhGzK6pvi5rMDM7QFkEsT7MHg7SXGBJVvA121ktTsJEmo",
  "key23": "4yfikgbpqC4eESeneMGsHmRNPsKZsoFtSQfSUe82PnzjKgbffNqRi6u9wTAVEoAjxRQGdknpJwwpmx9oe1Vukmu2",
  "key24": "4LtWLJmTXb8PSqx8zEaem7ScjBy6tr1Xre2AVEqgR4ihyKuAuMu5ELsT9Kx4rregxMbNqoW1UcsJsXvMKTHW4FW9",
  "key25": "2qUxM1sxNHbY4MiaV3yFri4t1y8YcWLNzSg8s8u1nZkmZfSqPyYSmid43j4hxcx48uHUJmdwSPD8TTXoywmK5mmu"
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
