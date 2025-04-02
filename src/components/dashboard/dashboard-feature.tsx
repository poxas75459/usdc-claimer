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
    "jaRRFbhsxnvYVzYF5BGwsSZG5E1m2fhHdJUi89W3DFsogQYLqKK1fo2v1cUA6kJsdAMqU4MbtAgVSYWLa3nNvpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GGtBv45hguS4KnaRch6gnV97GLRZM6XQhrgy7GLq7uexrCPc1XryidK7x6x4dYewFxF44LJ7ajAfpF6M2NHmnRy",
  "key1": "8KgUuSriprjwzm6qXYriwxngPcJMMn9WtYHXW7jj4rmg4zUNN3ZeSZKkKtF18DHTVF2jecYBZT3PWiPhXtheSP9",
  "key2": "4jKAfdemiAT5JGG9TyopuuLLqp5jm8ZXGqkHFSX1sbgWd3Xz5rQBcU4pMqDym8F8eSpVHfuHyat2zzPrsGmBdWP3",
  "key3": "4Uuyfe47pDXVjtHdDPAiR5cStBedtu7jpjK2TdVJs5J5vKNBA4g2jXKGHvjwM6DrMaTCqVHRjgnEztVztLeU2rQr",
  "key4": "5xQhNLJhkwXCFb1f4rmLuHu1Pqcg5WsNXhGvmXyuPEJNX65HGMaRJMEE2NLDRdYGVkFmNw5r1K5RxS1gKLJJbz23",
  "key5": "3h77GYVpTeg42HxhHKXBRMye1j76dMwWk8rfTV3jkman674pMuVTwffL3eKtK64B36kf3etJXFNR8HbgVrqt9qsG",
  "key6": "L2xwyoYtAuXxrapwGzL2JTj1b2D2tYeKmLtHoHKmHNW1aErZgEn6NSsp8wbLxiq7wQwSyywWV1tZBtC6669T8F4",
  "key7": "4EFpmaALgUzMYAYkSrwAKbH9cjdZjxYEp5KkdApSHjwymPVb9KejfMxJynsB8RyT7f48KNC7i4vToM3QMxYkVcBm",
  "key8": "5ZT2t3NBJtMj7wmgEMsQZ2cNQ5NjAqeyvF3y8RSRWcxdYbzZGtVv66qCZr29WoweeDg2BbikAtJpb7znmoiSxoXW",
  "key9": "56miqzKTwYmUQ2sYxr5g6W2LueYetGz9aEWB3u8zGodmJBHGX79QEioM8emLrEb8FnyxZmRbGqSfkirWk3tZj24N",
  "key10": "U2AKAr9PnCtcWTZVcyShu1maSr5muhth4AhRPoBWthsKLV7JF6oiYcNvQkVpraaprk4EvCZGvLHq2yTq6wXxNtc",
  "key11": "2vdvpDNuFJ3KGfKTRCEsfo8rRkSnB74QuvzkJnKRFq862AFjtZmJtowi7y4d4vU1hdeghGKoestwEafepLX5zQUm",
  "key12": "4T8BfrEgf27RojTct536t7CGrUeTTdc8r6n2cHXUHLj8Rds8uftowBLhjqsAufxSSFNFsC7AkjX1BZL7usBH4gi6",
  "key13": "66kNoa73sQczB7oeeuxPjYznFdZW9Fg2ViJf4LCVVvv8PizuADvRWuPYKpDNGTJ685umE5niLjR77vEE95rh8zrw",
  "key14": "5sKLJmoC61TfArnF78CXeWQ8FEUuF75KrtCPvfYwua5NinyQSUXeKXx1m9npnt9Fxg8TY2hPj4dggX37Y1m5Cj7Q",
  "key15": "2ZEGSsh3ztJUYixemiwGESryXX4BVpGRXqxJV2yMMqrvE1QustFm62kpWZkjAWha1DhDczuxb4QuH9jKu3qLi3UH",
  "key16": "4uTWHrfupvC4DrWn18Ar8Z2NEqDDj1e3Aarv3pn3f2xqxwHnB5m7b7jh7r3rysmQ6nj7An6477Arx1HogyTkLAS4",
  "key17": "27hGgdWsAs4DdMBxtvdWJ67zPwD39r8LMJf2jKo7TNqztZgvnvcYgRpRK8f4c2aGkHdxqZeyc8DAtAQummLoGqAQ",
  "key18": "3m6uU1Eh82MM8AfWPNPSmR1rGGCetbzuDHniTgt9S5Dsoe1GHRjdL5DbneEuRGUZFmNBjaHz7csUv5QyLfjLXkvs",
  "key19": "5mpX1woDiR9UfKxcJJt44awyzEYckXfBBFpZXuzqpJaEsmum5MXUxkKpgH4cnSzyj56TSNkhfsUXw23nDH1n4TVB",
  "key20": "epCw5QQdsftimrvK63P2i64WTZwEseuw4gi2f7pQZNKKkhuyUqCTSGenBLBE7NTvWcVFGZ743UEcrggivXU7S74",
  "key21": "56uQXVyyLxpPkHz6etE2nS9opeiPQhQ9DxFAhEUsnxVC4Q2Kn6m5qKjd6jsyUipBZyXYRoeQXpfRVHWEv6SQLA6C",
  "key22": "4c2M1LEyZ75pBTbJXHAAteCMWS4uxnjH5LH3acBkrwBv2x3f5jH6EFR6aMq6DCBJ72gnpC18NcCk73bGFP746kEQ",
  "key23": "45mpeb7aXdutbrkKDcrhhqyPnVPFbgYbaqiJeBNLqsbc6x9M7dHUSL4ueA6bdegEJQPHcH6QGEWUe5n8GgGsDA7z",
  "key24": "49mJfUZG88jjSi27h1MB2K7ejEmMGLsen1bxdXVaYuLF11H4tNzQwZ7UTKefnGUWYhUicTka6wtzXLP1FLcCEY8s",
  "key25": "3J6YaDQx3qmVgFuKeYhBwNhEMhbqddAsaWBaLi9hkeLf9MAheW8xzBcQGybWDDsRHdcYLLBC7zbFKDip8vrVqCd6",
  "key26": "3cn5tPEVPmWXZCeQNKF6FPZGXwdk9UQqbqoZSu3KXabV77JanVo4uEAnHfBzRm6nQVBifnjuV2y3xG1N1MBszgfx",
  "key27": "5UDhNeyirmJkvH2RjFQ8NwTYs28vEG6xLG3aFFE6FP9bXS8pLAe8YZrieRJTFQQTAYyBN3cnPcxFnkAFds2LaVaC",
  "key28": "5whYmSPyfnUcptqqnJpLm2XRXdMigbESfoiEruXMw3mm3h2H5QihG3LB6pj6nEoSWHBsjE64QjiWwGjPyWCoTPrj"
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
