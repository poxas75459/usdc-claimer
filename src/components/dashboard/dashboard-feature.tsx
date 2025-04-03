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
    "4YWEWvjkrnhjdqHESmtZZFfZ4XT6bLizqvCwb1XiFafvvkVAq1ezTfvN8b6Fnm12dkdVbtdASPqa8iNmTnYNXavo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FVn5Nx7niJu83ZtxzUdyYAAmJqyZG7LR2fdGp6o8D1kDdwNmdEERRninkVKcbwLXDeAJkvk7gYsEwKMVXyFXC1p",
  "key1": "5eWRNzmbi8LBNEoeDiXMeKwQ1VYkPfPzh3erqmN2d35TT2T54EiwBLY3e85F6V29p1vUB735cWMy68aD7oEZw64B",
  "key2": "5zDjCiHdo9xygcy6TQ3j5tpw2VbTHF1uQ1k2wXRAAJc37EECNQMr4yWPyUPcYjD5WVkRmPK2QXUhDTxCTayCPihR",
  "key3": "26L4LSLjCMRcxKN9Nv99E4CQd4hMv3Mw1jRDpLVPT9CNjj5kKKxuQdtfd42Gnpvo3PSctUyjwXGEgxU34nxhb3MF",
  "key4": "5Bn8kt8sFonXCYu5e8cshYx6YZcVVdryfBqTdSeBoJa1Rda98jiXHwQw1My2GXRADMTuUyWvdMR5oUFRwF5smHvk",
  "key5": "43JbkweikA4RemuvU6QiEzKP9WivfahxuEKNNJQRdGCGwoM5xJ3nDneiU7YnA9fVhT4i3775ZEWSgk4XgK1tbsh7",
  "key6": "5zSuvW3yX8RwFyqME5BDz8cHtwchLngrS4AUFv1jQ9k97FMwy1kwong6uFWbFyUkMWf7XeHbFKsLZHK7Ha1dA4Am",
  "key7": "2xeA8dGmgg2f733zDpxWguciEG1DkmSyprQkYAMH5R8XzzcrcpRhXnJX1Hd9SnEYm4Kr1oHe7woLqm5ibnMkvnWQ",
  "key8": "4rG6nJFaa8UDskbuqQDoThbSXLwrdDry5XtBLeDhrKZgHnFhYmT1CdLBnUCJL8ZAXdCbUESLGhmzy4ZxMj7ENtnJ",
  "key9": "3dZvkLNSLPsBLQXXr5qH3v7iM3b8X1dTnbJywJLs4EhECadB4MifgcAWUPzv86iJx6WoxvE8aTTmh7BMRsdS8gFn",
  "key10": "2pot5KiEtwKdiwRZ7G6ka7enNuv2t3rpYWJqrqX5xftzepGLF36DQtNjuDrGh3XGWKKaii6Z3fuU5kUydrU618Da",
  "key11": "3rX2Jv8KM7xT1URiw5tcyPhFF4d1qF7pSPd2aMy5HRPX2VqacAritEraTWUCVCycw9iaCXrnD7Q1YnoRy4aYvAhi",
  "key12": "5ozP4A31aGcELjS5sjaX2f9JUiMqgVrdbGAvQtMs1tsZLwiZ5FsU8dTv97RnFXiyam9Z8ju5pd5CzAApuT81xHY1",
  "key13": "5y4KVpuEHhd6A3FPXmhX5X58MwfrjBZmqn3aex1sNr38LE9Qz96VEpd233VswDhAP4skbo6ENVfwg7EYe6z5A7R4",
  "key14": "5gCXGW63tVtxUfteaz4ZZPmASLQrNCpS8JJxNzgKovJLpS2gLyaRVJrDoqyK3YNqn34rvACiXG4kwAqSZhQ2MfEK",
  "key15": "5tp5jqGHF4ZNFGEDRSHJ7wE3ZZ6Puwx6kePf3mFZV4hMEwV9avLukk5sQPRZ5DhZdbh7V1W8D3V5XjtAT6MSVFps",
  "key16": "4Pq16Jd2g1jTq57Nu4so1i4j78a7TzYh8W1wcYw7db4LcvjU6qKZ6xDyRQYdZcZoGkDKAJ7AQKc8na7w6sRwv8ND",
  "key17": "3PVYK7PpwRgc97zrVb4eqjSebBPYeQ1tfhSa467UF8j5mVT4mFmG339vuHcLsZmnMSYnyF8NQP7Dd6gg7cVqF7Gs",
  "key18": "2j7mu3tG8qHusFjrLb4Wg88EBAeFX4ZtQWKAgB7oxM15fCjnePLrcKVnF7xNwHfEc1HNwagZn99X7bQye9WFDwMZ",
  "key19": "3FYQXHud4vb4dedQobtYx5VkpUiEveo3gA9SMkxihpderhbzgrqarLT2JLDECSdPRbgvbE7hqCB6nkF9kYhgpdtx",
  "key20": "4c7EMVvzCzEQrPXuMmx5FzG1kCu69aCseQwmsvBEZF3ejs8WkGjSD9fP4PMcvz3UnydueBQwCFreS7Afu8QKVMNu",
  "key21": "3CtXJKfe4UHoxfFo8gERFWrjMn2URNP4z8eKUyfrvVygjErMQ3YDFsWTif66167Mx6DQVv6ng51ZPYS5fN9c9MZZ",
  "key22": "43G6sF1m8S9m4iZoSezjV2TxME5jJmMsMkdxJfBzWMc7yYLeSduTxnAjZ7EAPnYaexo3jQkFDcJF1tvJAh46eiXA",
  "key23": "DzJWrQZZSTXBeuTiC6PG57MLCwVNQwxS2dnw1gFHq6BcNWirQcFnNhiXKEyYHa5Pnp1S7yecsW8D9NDTsbMEXaK",
  "key24": "3SHLazbh3Jd1bm94iMYzmiY6hKfHQeTX4cRdsfPvGqjwxTwoAC4MYnSTP53gTodSEwhu1oKZnfow8fCmPD6HJZvn",
  "key25": "2ukSEpa2DLbnWMgGN35XnTqqxvWVq3zZbtjwjBtLEgw8dW6r8US2RX9U4A4BJUZtVXJkdqTj5W2mM3bqdPT2MSR6",
  "key26": "m7iXSKEKN62uzVzAiYfMz9iopj1vCng7Sx2o19xCrXZ7jym7YhSRiCM78DoQSqizVJ7Wx6dtBYiXKssotxFZ46g",
  "key27": "2LBWbcbEmMCsUuAMXgwqtG2UwxAH21haCrTfBr5gsoNGHT7zXh31vYRZL1rX4wYVAuT12CUx2XiSBLP3XiVpMQ9p",
  "key28": "5uS1JdFqg5dStJHroJjHT88zFeiVyyfvghyXCxH9jP59nBWxN399mTsfLweJXDpBqYLvvrq5XCr5YwD7JaCzt1Sq"
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
