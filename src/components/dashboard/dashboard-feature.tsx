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
    "4tFvYdZahktweszVaCLWjoc43RqZZ8YsZtDAWywwzWCY2nJee7jZxs73d2h6sRAvYsQgTFgxKGZ3QYCupzBe83KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77b2vPYdWPGpGFZ7JrfJ4tkzVmy7EV9TUW6djyG4Bg1a5CQN1cDRB51QvSvV5gcGmpqgaXEjqMpBatD5PBTiztS",
  "key1": "3qWvYkXpJzAXGJL2249J9148UNVyGx3Rb9S8QMmGwGD4Lx2L14gN6QMob2Qo3fxVgTBMUucr2Tjo5KgpFkDKQ1io",
  "key2": "2AZctD5oHPiuMKoJeDmuDNn6XkoBRcjcKkH9aExrSVtuXFFHjiDxm1SkMVVgd57MPusrkzz325dYwRWAgwAHpKWQ",
  "key3": "2V8EYJ2unRtX4ghwMPLCbrTbZQmjemvsXce9MzfSakZYH4WZrpMko9S4Dw3nie82CKU5tUmQBoUYDAoA8FPf6Kix",
  "key4": "aJrb6c7KK4g4apJh44e2WUrkhSSh6inNWPVXwq2wsLTXgvtYiC2ERMWirFsWzEQCE7LySJGtCCdsU3ubyAenw36",
  "key5": "3Bk2SJSsdybqP3krMtvKMZ6Tk7jiExnBRZRCBKErN1BtZQXYu5q2By3RNJxucxuoi9ti49CdRtKchByFXnjLhHQc",
  "key6": "22TCWxHThos6PVe1b4BqqgfqubWgcbZfVvCPCAT6RzYA6R7U6ChjCQUKPpG7eXr1imMBiU8Wq7tZg6CyJvpy5b2b",
  "key7": "5Yqoz1tfcTs4bdKcGHU6A3YDDtqUAW9iGcXdcL6T1Vh25TjWpeffwg6f1jb2t1Q3HnY6Y6Wgc4UPSMLm3B8RNek",
  "key8": "53mcaT7vMVrH17X5KPEy8uJLL3zTJ3i1aJnPej8R5SrPHBX2H5XkncaVpcNLadCbhYsXjGrAFq8XXmF5q6pqdaV4",
  "key9": "5vX5FCQ2YtmWgLwumonPWW9H5g9dQ2mRkpTUtXE5PZizsk3CMULv5AMtx3rG7HHFke45P341nhSzSSJM15nwFen3",
  "key10": "2PR7r7B7Cn3sW2ZSbnAgVkDtdRzB1J7mmpTRzTPwgutaBB6XGvaRHKqHo1jiZGmXpFni9eTtGTGugri8fFNz1v4z",
  "key11": "3hAtVJ24pSiMKZxqhNWGA4ZbW8d199jMHHfir5GE7nh5H6VosurwGS1FUiT8RQsJdqEk4zXCiHTBjutEFCpVyoFk",
  "key12": "5F76Zn2PptKbsNjwXihp4ps3L13hYEfNoEqziRk4FmdKQ9TwjNFeWWfcCBdQ4EYLWpp5uizNhMrY3WSb72n3iP3P",
  "key13": "2SExsfKgYg9MjSW7Fbwaw5fM8Z1GhTctm73evbP6HdN7eUtYp12Rn1faPAfQPyUj5m4Vu6GZhw2ukJAzsi41w7D1",
  "key14": "q73sG1Uxk6NQ6fowK8RaiA6bGudxZZZsKgNFaxKSXZnGsQneN3v9FtMgasYBhFU4KcwxTT2Bumo7KHzwre4TqHB",
  "key15": "4QLLrSNtB6VnQ5GpzuSc8fT6qZVDzrp8eamAMpnf3H8TVveAjBUD9CvPkYGy6Yxq3YAdxNAiVS5DVEyiGoXmtwT3",
  "key16": "fchcrGTfJpwTePYntkbicLM22h8jnhkp1c3s5jLbA7yTuS5UhJHraS9PpiShPTYsRoPgGX1bAkjzY661Vr1xHDq",
  "key17": "4bhyW5ak58irJ93dx9ZNP8ofPM1DuAAxUMynh7n4Vgidv5Mks8yBU4rbN5Zg3Yd423gmuQnRZJVQCho74jHRvc64",
  "key18": "3vR1acAxmAMw9JYpT4D7YVA6zbZaXmdCxqnnx4oGzgZpAUf1E5do3TCfbT5c4zG2318ZoZZzoEEFazywdGPAYdBf",
  "key19": "5fiFbbd9kLorGvmfyrZk3HD9evnw9rSCJBMXN7RUm5TAvQvXroYFbRhkySMF35uoa881CjYfTgShKzbmuYXkKHfb",
  "key20": "2ptd2dQjdNAnwmmSes5NykHcQpX3GHX9XGyaDvTjR7UU6bwqhvC4E7jXuM1t9zFGmre2gjbdKGy1dsBMyxU2TTnZ",
  "key21": "2AYL3ddPvAYa39PqJvAkyt4Q23FSb8ssDYbdYEiNRKUs1s4mPNfY86aDuTmcDBRJhBcz3NpeaMrzbRBtZRbNE3WQ",
  "key22": "58DqFH79S86RkCnFZv35SkLDx3BCkoVP4BsFpYnRkmo4r5FgvxK8JgQGg4FJP4ZNi8YFuKV6UQwdLhQD2DiHon2x",
  "key23": "3yW9JqXKEsW6seQ67HXqL2VY3JZrh28cg1oRaiLWp6S3JPoG9Y95hVb8fNCnfEfHmvY3FVZ1fig1yDnNcbNPC3EB",
  "key24": "4UhHY9cezgsmL2CBz5kZDtmGprPd3sSEdA4nLqdZSuaBRtBHQ4yHv12Y63t2Jgw4Te4mTPbyEnEkj5triansmfi",
  "key25": "5GqavEkMkhC8Y4zE4mQ4W5cATx6Qhf49Gn8EKYbXwV9ktt88emJ875kBfSdaGPkYHeA9haS4FRvHcUgCDZgWnJUT",
  "key26": "4Gk9sMNLmk3ZPhPwjfUW7MehghKzaErW8hHE2yuFCXKGSgKHXZdzV7SpogKdeeiCWK7qvzEVrnXh2FjZkYWbVGdh",
  "key27": "3dTLS6xNoUwEQBYa4Q1Zb3vjk7u1zEXaLEjnfDwDHB8QngJg5rz5owsNSEmXw6BP6TZ1ZiEYxJjVV2VGqWMVFiCg",
  "key28": "4CywpH9kPeD2spRrTnr3GfAqW7hUGEKvuwpX5V36jBsmWSAQdrC4WKE6WSGY7j3bi8wJiVsa4aCk5wmBfEhDTi5v"
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
