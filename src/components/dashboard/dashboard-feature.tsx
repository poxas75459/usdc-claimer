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
    "efCD5a54Fq1Xf3iuA2o5wpPaUQUbxAqvYeeb1wtpcWZZuawnByB5winZNzQLPCTM1CcsQ8WoWxeU5joXf8XY9iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4871JFfipe9ko2dWL6LheNURHKQx3iFjEZLq2UMHccFWZijnv6uCw7u9qoVDcXXi2snJfoRbkAh54wan82MEiuwP",
  "key1": "5XTqRnVR4nayuy9BV6VYTnMUfbEACpcsyxLRaeKqcgRefkTJ7CL71N8i5jTX1t4kMzPLBDZ7QQUciP99TyQzfZ8R",
  "key2": "5exaHcNi2umCG3kYS27MeL82RWptFL9mHpirAmJNjf89tNkcwUYPsnPpZX7aeNZuUzrUaXi5aWMeWre9wc1v4MC8",
  "key3": "3wvN89h5vQm8g3nkhZfuSBzfcVk1aYZkRRwzwj6XPPFL1rSnAzqwJ5b1ANjoPDbDiwrACfGgKhzcW1ad356sBRGR",
  "key4": "vVKCcZzyJkKW5atBqwLkPSD6ApTjUJSr4tcKqmYmZFGRqk1UnJQWzjZ6Wsyy1JqhdYbdQxBkzp8Mioqv1KV8Gqm",
  "key5": "5SAxqMoJB3j8pBTm4jtC4EtBrBmyTbbQ5jy27tjv9jkzw1d6hWs5CVzvDKjjwvKo1XciHv4EESZA4XMqqqzZNPob",
  "key6": "4xNgzR3xRKao4vzVex1LgZYfVnRjwjTxMFqCgPkeXNpxEXMniggP1DSVQqYFxMFNZyawnVZvwWRYGb1ZgWYBWo4v",
  "key7": "3rNLvF4mRk8sK3oPiDfEXZs13Nbm8mYDUw2FZsDKdGisKXf6a84mqDZrprikyXwV5a8hEWjvVKjQKgdUSST2DDQm",
  "key8": "31Y8Jq6KoSP6kg9kujPkF2LSB3oKUzQxyBVJ2ZVEVeMXGgoNNrkebn5zL16M4nNkKQTV5BfaKu4rAdowY5ZhBx52",
  "key9": "5f6V8BJPUh8CqREV9gqKKhZ6CgmJjPY1ejYmDFrbbZxSwRAuLGg1rPTPyBAv52DaqHa9dQVMNKZvciVuStK1L3Hw",
  "key10": "4tznibMfQhzMPJ7bNR15C2NWomrVkKdMJRxg9cp7pfE4grpnxDHgg1uQUfEgBP4LbAwnCJLBgj7B8HwfU8MdER5B",
  "key11": "3tCgP3JPS3kJzatSCvRXPgRxZhHob1dzwx76DX1QMVz6s5QZHggbfXKYeGsKz7U6RrcNwE5NwVVG4ohWYfQrngWU",
  "key12": "54Zo6prgkz2rL8s6YR5mujL9z5cMPkAoGDhwZ5FvStN3YoDSMAsUhX8P3gK2JvYpT1dG8bdg2iTBscK3K2ZjQb79",
  "key13": "2AV7149jLFAcM7pw8ov524AyQvzztPSVdGoR1Me5WLBU5aZFJxhXHkMaNm4z4JJmWVQ4ag5PDDH8MSxboKQUSv6x",
  "key14": "3DqEcTS2SHisEU5Sq7sAZ3Sqf3Cd4bd5oeomva3Y51Fkh2dN9EZyoTN7UFYGBsGoZSRaQNHy8LjW6oLRJPYkZHjC",
  "key15": "wCTdLAXdAFTWQdiut48m5UrSY526R3BwfxszRb5VNmAqUskHGNYcbNjMDk23bepJ76NeHLQcDzcPNg7vGQC5stU",
  "key16": "3B6twGjyWDjN9NEYRFSdvZnYNvDHdeXwwnoq4qSXHryUbXtvqPKVnPmTbaN2tnJ1XEeLbxEGekvoXBh67XPhFsVe",
  "key17": "3wXPT3trhfrRHbuBRPZ6EXs1TeKaaRmRzJ9heGWNvWjWwy4RM1kFCgcnXUCBonCiQ68r3D7hjcFssD7cyd6ovbpp",
  "key18": "4UB3KfVA6nwFK4ZaED3SWzYRXgGCuicMb6yDHn98NBncFNUKwVQqr534Vu2iVDaSjMPkZgar9keAPBw3i39CDpFx",
  "key19": "5xFvNzXQkg85zAMSaayjoyQqrUhDyCy9FStQ4csX3V4wGwDGYDwtASU2q7vVHocH7szSFgrWURQU8h3G8y1xqV8J",
  "key20": "2xugTNRt5bqmwvgu9EmZM4gaTZLb57xVWzgn8eN6Q6irQgY6pjsDLHHXrz49C9KpoFeNeUGBex8Qo6FvHM6oc9cL",
  "key21": "55Ab7fu54twdjHvVs4No8ABADzPkALoHWTyWnsLbwY9SG7iMaoC85gm7V1jypuuqZML1SCoCBYW4itV4p5WGRN4t",
  "key22": "2mtf7UyyyrQM1rk4jF46rAwzFnhUsQ76B1BNtGjppaVKrkFDe52ZPbYYvswkavYMKY5iY5kkvLidyn5EcQkXfn3y",
  "key23": "4hmsj5PLqLov9cyb6VSNxupHB91afipcMA1KVsCY5M44kHhN8ieXhG1yzBxoE7pER7VXgoafmSwAnjNfbCEnL4h6",
  "key24": "3vQH6KwNgyp46vtVHe1crWAw218Ke36Vid8DGH9p1SeAyctmXEtn1qgNMc66cyX5owz8mwZax2xkezSjLWnTg3Ef",
  "key25": "5cDreJVuBH8rUrRFucndhmuyX4WnR9jLT1i7kqcinc6Mgrtw4Nd2GinRA7zXzDkzdn2msgFFb71QG4uFPyzq8Jwg",
  "key26": "54MNfQGjwDkxESP9i8CaEnzZKjj2kXZ7Cu9foSP5p4jPy7UmjM9jmsok9eFTMNkKE6gE2D15LEtN2hiLJewEJ6wy",
  "key27": "59iyHxRu8q8tNdgW6ReCQhJWtCwmsNzHagyUwQFcnerrEt6ZNtbaU7LUuhrtcDQiSGqBYenx73BcTd5L6cJ97iLC",
  "key28": "4puwVMcDxKFtbDgAmeyPnaYnDhx8b9amnxkvQt8x6mjPn3aL1vML52NUzHLxML5vYdL1nK4sQYTF2riXunZUfTjN",
  "key29": "5tWndaZg1U4rSC3Su2hBRnMyYqE5592dH9VMHmkV2Bv7Dw9Y3DH78jm8oLP79kjsWU4b99MJqR3m7pUHjyEHahQ4",
  "key30": "5nEGmj8fEApc4ASWRBAzqx7RuKDuDdAm1Py4csyhhPVWXMAS9p4xGqhMAxQ27HXLSfgZnqcgthNuAuD3yUbgDmsS"
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
