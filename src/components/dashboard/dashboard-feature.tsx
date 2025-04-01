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
    "Giawa5SUSmPDfVVW93ktY1EZ3Vx77oH9e9CrLTdYUBvGNPJ2bRx8A9oCjUieaJUTHuDm8QdSbWjyZk3U3yRBmaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auUXi1tVJep2WQkyYJiUoE8foroCNXDNiuk1zvtbZPLrJcU1TX7nSvdK913JbSFqtpTf1qQ9SRRWyBaxwoWHahs",
  "key1": "4ShpHWsiwt5zUuGbmAYSCiQdkXDkzXZeuqUuWfUoQJxbnuxJbXvKPKg5x7AeV5fN73jtgVHsxJ1C84nr7PDPfHa2",
  "key2": "2GqNz5BxZsSR8fM5271T9rTDRTvxm2eXzvwQiESei74RfNR3CrpSPUyoiVuCBmj7KtguTguWhAFUisQ9ro1QJiyR",
  "key3": "5PmykxzWEo5b5PkoD4QyFnCKXGFfRgYxUxNvyAg2wUVK54CMPJNyBH5NHYAHyFxPf6Fckw7Bn9jQ1FuM3uA8BKAb",
  "key4": "3j1cRqaXYkQhfwEuBcZNaGTD5Qk7QfAKzSJ3epfXbtpLc6YZB8dDhYHWAwW1mEgBzXBA9ComDJYpPuaKSFVqsV7e",
  "key5": "31BJz5R7U7UvJ2wmw4PJkQWYbJ1BC8T5G2dTmRHGmL4U12AxRJArG4nQ69fLvsMUePe6qXxi47AsLwkFhYjz9kAt",
  "key6": "5nD3WmNtVFqmCpzWCvWhQeCDQdD3PY1K3whQ8CPpDEgwARWXch2rhSwpLKorMYALncewcYnjYPXcZjqHManCEsXY",
  "key7": "kPjiX5VGd4mVBq8YhVPG2fuucWzJF45rAQnUnaSG6A5aLaLJGxY7VzvfMSZkyRgq4x4886NrYYkvUBs7NRnTNyJ",
  "key8": "5yBJmSofdvQu5WyUUKCTaExz93Xurqe6WGwEAUoob6hLpd1LDyEqhmsJ8zDZGVYxXL9z3EDpXy3woXGHmHH45q5v",
  "key9": "4WSz9bpjcBFjU7nXXduAhcuPnUtKjRCroEmjhsgPW5E4VTxpunirzgAAfDiJH1MWsWeq6ARYMbxjDXt3fU3GmkvS",
  "key10": "g9gU9VM5sA1DUJFtQjRYxff8pryxHhDxE2BgoVDLUYWMjoUaJ3pANTxVRZctmWVZBHiYkCNep2yFttpTDkkHcHE",
  "key11": "5uFYavyPXAgk429eowsJyExYf8Fz8PDsLDzKaw3V299ox2dGHwqQLw6QedU5YQBmKJ267CDCKiafcvzrQovLY58g",
  "key12": "677FXS569oqqcEbcjhD2MPNNNdekAMTdYQL25rdRUrSNjr1iuLjjoMfH9Dce7BrszuFX4KS5z3ZkseLXcbnENC73",
  "key13": "3GjTs56wgPoASENe2KDeSjuSFgiUMjcpcRijbeL3AfXnAqwL9SdLLND22zD4qSvopfJJLtCgJ1j1xWQRrCCfHQdL",
  "key14": "5eDsGB8JZTBxwXF4kjW7gRgPy2qNTAsqwNPSrV3BuovpBpsqae3otyzkQqpPE9R86ArKWvA1oX9UsKDyghxqCMqo",
  "key15": "3MrD1FhkkcDqZG8jNdFVty3oNgRzeafDJLzsGHCkYuVGvbdUdC6mpCW6YV9zJoQn3D7YKmUYjGsivSexEFSkCT9P",
  "key16": "t7iyQDgRFxd2gaRdKXnhJqcwVgxE92qnC7jdmgSkRQ1v67T1maWTJa8KnVDA9U2AbYcoHQBd6UD5BGPi2Myamif",
  "key17": "4cJEX3mnpUCujqk5kp9KmbYXQrLLcismsZ6jLiBbqUuzguFQPJf99weiLRAZ4b9xfCurTFzgefNrHeST1SHN8Xcw",
  "key18": "TiSd4PddvLTimX3VzuaWL4mG7g8pnvrgEpu1GhxDNv9Sngpp5AZq9scLP46Y4AEzQsAvUgL3uBnwTpcNbnHrM9Z",
  "key19": "42e79rmEp7W1UwgpdgF7k4iR18fjA64hwRZoqhELFFzuxuDue7E9suqoMa4nDE9RusFTfXuU6UG8johW45RoDQXU",
  "key20": "3SnTHvch1MG2Lo1R2rGg58RP8aNrKRvLQMyRPS5mYQUS5Q3WhsuQvBqj9gu8f7sJ4gSt1rL7F6oFBUpGFUuMAe87",
  "key21": "5wXsoHgvTBcQ9hWTdCcZCbRPZZaFsPx2r4wh694NkZ5taEmb3t9KK7h1tMRxR21r8Bptq6gHq7d3y8D7feJXCk5X",
  "key22": "4VcRYytbGxdAcW8SwzS9NZYFf6DQ6W89XR9hRnCknv9j7tTmnYNqRV3GNdwDGXwLVkQv2tGQMrRR4xRuzsTb1BUF",
  "key23": "21daMVoH9ej7azW28ZvpstaiyANohCX2dGhPxoDKEbiubPgSFEi6bqyjAdn9X45DiFZ27BvN5qscLLGhMivMr7mg",
  "key24": "4GeWdwooUePuDLKQhjACHS1Mu3GbHWVfu93HX2rGYqT4jsfC41LyLhdPsiz3J64QxnP97w1FPD2Sh7cGPr6CtHCq",
  "key25": "3cyqBWyVqBA1Z3ThGxUFT5i3Hua7m59f2qKqgNu9gVoYxQeBeV7upog9eBEGZ5NrVwpaNXCrgJ3TnF6dVWvve5ig",
  "key26": "4aLjTUKUnDZeZ2R3QErCbN5Q7dUDi1WBArpBQGx5NzfSinprkTWMVYyXj7ufABvP9vSG43c8rwKvG1Xv325nZp8L",
  "key27": "2ivS1zUepWAHgS3Qwec1YWk3cvFE7wTNauKp3izRpveLKUVfP9m75DQ7UqJCda56zthU3tjV3uPxMNAFVePL3fsh",
  "key28": "2A8i3hqQvPX8yenzjddRf5shC1MgBGh7D12s7woZDomuMB1PAzFBsqv8fPsxsnVEAxrhLaVhhSpQyLsdufzEttBc",
  "key29": "5aYFzfAT8e76uqF1RfAgPAVL2qex4YMspxE74VwGJwZUQrCanXGs9tRoBVWrazY79ihhJNcJgs2BoikXvB46CvT3",
  "key30": "4rGJP1fbKwSneMRVh3MvjKbuWZPALyzy4aU7ptB64tFdeopitqsVcQ8M6WinqMnH7hdehLDGVy39T4PzcgBpxTtU",
  "key31": "2JcMNzACVd1epGT5YcHGVpoFswraPn7LcSphuHDgZYfD9agq26jkwgRKMELQMAtqStNrcvgL6Y12N1NbYJMiPfSP",
  "key32": "5RjfXnbpejpbyGcqEE3agtFetPn8ccjCciz9WCxx3vF7aausbqzu96wdGMTL7nd4c7pzvZUPaQh9SPAAvfmL9HWF"
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
