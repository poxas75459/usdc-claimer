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
    "AnyQXhj8wEvmguEWAdnz7qG2waqtMXRaBvZZkTvmSh3wbcpaq7hiAvNUtLo9CWRfEN6GQHLVeQ9UEtrSLzYDfMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8TdsrAUu5w5QhLV4iMznYSzD7J8RHjPyCGVMXhXJjxgpF1R9GAZ64c7Boeyjti5icw6hkEuoUa4JdTDmpMiYc9",
  "key1": "2bqeap69zkVUH8XKmfLobTd8LPFf3eviZkaK1SQFynJNbvEAaQXdz59kPU2fR23Q1vSWUMCW5g5xxqGM1YMMbbAQ",
  "key2": "5gyNChr9Bwu8d1zDNXS3h4gdNeBv5GeH7bbRt3SrSJS6czHrt498HAQpVJbPLY5mHXUV7h134HCHD8rXXw3e61RJ",
  "key3": "45jvrrdW6Sw88PDAmUTFsYehbuWqxQBtft1VPWS4yL4A7XM76FCjsp98rgFbi6mRixwbG7QJ7pyW7zbkwkw2pE6G",
  "key4": "74ZeNKo4ncPiEeDzDFXdaFYzRZxHPAn7kC4MGtzekrNttbGAFYSQxtkKEAsrFEWEy1Ddh66hqjWMPoFTiNbc21g",
  "key5": "2uTcWCtspbwja9RD4dRnbpWudFSG9rAcrFMhmVTZS3ucY9e5JUebWEwQpy2i5FfZ7wnQes6nFMSSprVhpqFCpqhr",
  "key6": "4w7t8H8zwdcYeoBZKW5YToZuX6puPnmiuWLxopiFcLacdGAEcfc7AaQBE8UhE9Heq4mdW7yN7tZFaRTyKzcEo1fb",
  "key7": "5wT2KWxS27T1zF2aPNrbAL2pA1eL7Z5bRyUfW3ETiW9dMy7o4CAmww5xDvPfcdLgPk3V7miCxQjHno83JA4AFUHE",
  "key8": "2YhrgkPaQ1uNsZN79yNJdZH1TKQKyKZioZmuk1ptRFHifsC1C8ci8Wenr5wRf3x8ocBU1fKdq9BJMQqo5iTjZgAf",
  "key9": "t4RJuAeLPDJGW66hy3tdD7n37fYfJxENsHo8Snwt7GPuXvXFspvGD9DDhnBZxtq1MB4qvvLfCTscdoLPfhr6QPk",
  "key10": "sgmkbSmTc6DXRH18TSgcoPRNz26n292aG9FCFY4zwBeyJxx8yGFsisUAm46Pb2tZ3QLv6W2QF6k7w7ztjLR4aob",
  "key11": "ebtMCrTTHfpg5KPr3W2sv8SV8AiUxYKzzk8kGTLTka7DbirV75WhCqrQicwLjJ6dpZVWRjV1qpJMnJ5T5i48vee",
  "key12": "2zUxSB4gdndiu1b29H4D8JU2fFeKzjAuAJwheLXVjt5ZUKrypmQjQdcZjtaZQwc6vvLN9d8QFhWsM2VN5jtBtWxP",
  "key13": "3BycBMqFJGghpijt6JQ1VmYfhN62hRrVXFdgqXvVVsfQam83ooU9TKvSfp6WFxMf4RAPQtTWdivM86fpsTTjJT88",
  "key14": "563dA26JcCp7PVuom9P7X5zZAA4yNcNgHErQZ8izu75Pw8nVfAA37pH1VbipA5hMzztsvNbyaEsLDn4nweWh2qAq",
  "key15": "2iXTTVdEpgU3vwe4hGZGT7mgUwZduSz72zFfLSoXbwT3DvC4NJzLKXM26KKnMBC6X75dwjbqXgsPXBPq5z14f8iy",
  "key16": "4dtrcFkzK2oKQGocrRzHPCDc7EybaxYkNCZqZXxMwnHtfoFPx4PvtWXkC8u1yT3GPnHqE5JEr6Z8TYE3W2d4xWeZ",
  "key17": "wjhdPQpLTzTCQwJUpqbLugfAi9dKDrwJ8p67R2yzuJqrb9rNWCHwcMg6Jeuau67tJKLVSeJSmoVMBHT239KKFWE",
  "key18": "4ENY2WcyMRw3Rtz4UeapF3r4rzsuBgf678MTHKLZZ33zAYH9csaFdWF4qMNvvZweQoR4DJAWagHx83EiQen6hrLR",
  "key19": "5r5X1CGm3cREJy17FvwAaDta7ehstbkTVxD2E3bhCahQKL2td9vJXbwSFXMopeDaowno6mn1igBFuiqxyN8Zx51P",
  "key20": "5HeTH4AKnB4JHdwzNu9fFbZJu1cZ6YMAELR67tsWv62zNT5fUusBokRoPaVVxYzdAcaQDaPecJ3FxGNu9gNCmS9F",
  "key21": "153rU6CUuYR5AP4KGrgDoyumj7dXf4tJ4SUUrkYbTurjx8xGHjGp1gP4qBpwhuT22YYYQdghBr9tsYTPGpb2WPn",
  "key22": "5pGgbyuiGzoiQNwN6M4isP9zwvXN78sZrYV4w9ZQQZ7a5Mcwb8mcqxZMS98VB8ynPoEpegDTt4WGrKVVhdguhWGd",
  "key23": "4adc7sVFhW42oP7VxHSciFkT5V8SJq3pS2TUiuCoSBknNb8uoWg5ymGEm5qX6aaKBn4wqZ9KQMqEnwr4MTEhGayL",
  "key24": "bjDXWerVYb9Jqaaa2U7kZ77Ahh2j5ShS7vxaafx6auJieCDrn5c9cLadX3XTcQ5dcN8QvNYj9NCF8aQHh6YR5GG",
  "key25": "3iN6xo5kGTNwCtTUNnJFv9fcAmxZR4zEKVbRrR195J5hHpgZC5a7vE9B8JBjpF9XVQv4Q8CxvRBBR2wDJiVXgG9X",
  "key26": "283ncBDh3j3txgQity3dHidBRHZS1Z6KEM3a49kTrZZgbVKKfTPuiQZgnxZAMUaMBVp3Yy3x81Ut6ZsPMgqutWQP",
  "key27": "58K1Rp39xGqHwpbwt8ssYjMKZndMGUuhvKdJhxVQrtWFWwGyDACyZuxqLmpwo66xWcMyJQJTbdtQUb4d212Pp1Ro",
  "key28": "4tJDeYe93zkyKnJnDB5kzSswAxHYnKZgJ2vk5AbenXZyZqg7RTYfkBMZJNWuYUkLscEyCPvHB5V8vDH8RGJcCWM2",
  "key29": "5LV3x4Rn3Nqkq8fSAqCwDHXesYgWochneGxCpHj9xB4rKa3BzYHmaf9SkxK4oyEV3LBCF6aVMpeQVVsNaXyAgP23",
  "key30": "5oHX8bZtng37DYsk3eoeP5zYYd8p2vgtbLohBSwN9aJ2ZyRYrz6b5SyALQHfeKbqVyUvqQ7fwK9f1vbJqrj2GT4T",
  "key31": "5PLkqXPf3FzuthhrGmeLLPkx4jqHh4PNqshYiNmLcKhCMsJWPwjmBb1dZrruPUK6dZFPPoVR8pwQUiYZhnGxEtZ2",
  "key32": "2NqDp5KjtCY8QR5XyfodD2rKujRphG5EABdb5cmWeLc2ma9iKFp3VhnuK6SetqRkBpgfEWX1SZkMBcai254x1QBe",
  "key33": "3oHHzTSQKPNAdnvGKf3UE9tJCKdkfHcqAzEVP55zqjoCurugBoNUbmiXWozPo49x73Yc3mMEQxAekqxBBAFJp1eB",
  "key34": "5nDGodQET3FaS4hXzhz9AkAy86TUi5EAUnkCZXWhkmGCpkDTh1Bpcsb4bYst6puvmnjn9nBonoG5f41Qp7xzuYJz",
  "key35": "3YrvFHeeEis7H4AnyJ8M6jyFxdBLnGKSNiwCY3kfRPAZEuFscyYPLVvtiUfSwnX7mLu1sDsqWMPw6GiS86t8ESRZ",
  "key36": "6xL9JoSi18Tufu9tkkUTJiFcS2fWR2xMEzpMXtmHWMXeowB4bvyN14Hut3Na8y5xR4UCY2Ga46d4qTTwBgS9MiF",
  "key37": "4q2DvAHdmCxY6YmEr1g1KVbzCwmAdduV9mBU6Lcopg7v1bNgy2sShBHEc3SQN2qKemtiToAXYmvHEBHZkqmoxH1F",
  "key38": "5YKXnyNTrkGpcxTL3YvEoKkpZreKbQkfGRAf9ijqVcw1gBLXyd1RVVQ2dPp7sr2435bGoshR6Vb85dSwaW5JpWGb",
  "key39": "4mbCNqP2oFB7yfeAHNMRB91wYjTZfx19NebuezCMMtHCUHnuUTxuEZPni5XqJWTtHii44Bu3oLQ9xRvcD6WAhqw2",
  "key40": "2etnhEzG7DxXLFSsk5Jt8svPPyDBZjA3NxQcovBSxXnhxknm5bQfkJwhRsEp7mYiba7bkwznRCTMj4ymqtBYmkwh",
  "key41": "5eVPjBvSoo4SMeBu3MEDJGq7oucd3nsq8dEH8F5hqsCj5Y8PPBPGDfSLp2AFQsUBge6p5xtsxepK2KuMF5pwNexD",
  "key42": "T9VLZKKURG14NrGnxCxdDmDAcRPJptN3sXTRcEfoEjeq7pbZG5QCktwbeatkG8jkSBJ4qrcjNpveFCwimQcxSzH",
  "key43": "hRAzJ5rGZyoMEB6VBYYhDYJNTX7ebTtKvpxuvU4oQPfNiaB9oKsCWeTrRAYtvCAon57oo3EDAJcPoQdr4dHQbN6",
  "key44": "5XLhTziHK71CGsdhDP4pKuEG9YLoJDq67b89dXVhnioGwb5X81MiQeVn4KQeJfac2bvvLfutNerdwGCzCWwPS3LJ",
  "key45": "4atf8stRYXNhZj6eKSTTSCvB9NEGmuif2YcVHJf44nBtMmZSmy2ZNJWaQ3n25ZugteWS3XYvx6JJueg7YBbDcHku",
  "key46": "2jV4stvCSqpXyAgkrKWdaoahmMrM7NoFPaYWPxFPS9s6iEtFTYTEg3hWNkranxiQAg2qtfZJtbSYLwdFCRHftGb4",
  "key47": "5uQtg3jF3cuU6ZdgudpsdDJ9Lm65j7h3PdEEtf7A1urcf9WvtrDYoTqJn28kGNtZK3Pn1mcfYJgXM88cDhB71Jq8",
  "key48": "3VDGVzfk78c4fCbRUyeuGMooKGnJvnkpkYkR9bXTwRZ8QzpWk6nn7XuFwQtuLS1E8opsZtyLetj9yzZBVc6idaZ6"
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
