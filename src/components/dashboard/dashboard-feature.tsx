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
    "5h5m2bZwssmKsYjDHzmiyb9tMiaRcU6DAF8wUCpktNWZCFVteyiU8mvv5XmYmxTwnQJCi2Ltpaw99Gyt7RayPk6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMkiJonfieJd8fPVBwT5h1AELx6aikhJTUYrzsjB5p7FJ3bGGgyEiSTktGGj5FVGdEwBmKbsLdzZpwNUDS3cX2c",
  "key1": "3FguoVBsxBSM27HqXi6nqRwHeCZnoxCKtUDC6fGR5stkSaFnBQgLwkZShhKtKHvZ3T7ChvRE7MyzY446Ytnhc9fm",
  "key2": "47Vi4f43iFtFE1MAgBZZPUZKMg4wK8ZmszDmP9nrNg4D5548pX1cCcNkasX8maA9Brkb1hACtp1vcVSmzAbDYfe7",
  "key3": "5Nio9r37zfrFYAZN5cLao1gKU63y6g1TXmQpFmvgT4cfAsq1UNque6D4kzQphVuEHdJi7e2GxKYEHs9kzS854L6j",
  "key4": "4gpbeTkYwthahLrDYqMYYtFGJxvgedneuc15jvb9cLTgmNeSCD9j2bRuZRLmwuWHJjCPvrJg4ATPrJ7AqR3UwzN6",
  "key5": "2hyEafH2JgTS1eAXe2eYECc93ZkPQp2PiNVqsRLJWUfZn9KGazofySWnVvNU6drmo1sXyh68LZcdJXaKNKwrE63M",
  "key6": "2MSDnzgEyY17Ph11N3gkYnRGUGoe8hQM7LHYaSGcNFNbUVSp87upabpKXcmtCpqDGnkKJpmGtktQJk9PH89GaYAN",
  "key7": "4dVvr5DG1E6kqecVwcbRyhmDLhvkRkrjwh3h4ZxjuXmNSwGd5zAovs9mcgo3Xd8j5keyeZRDcRiaVwxpC5pN8YhR",
  "key8": "2qq4CpeXndvy7mVT9miwgVGGQAyMN129dyry9JFtMmzsVLyN87H22ckbg97xSijXDZSP77eF6hbb8vNMywSgcg4A",
  "key9": "aYtV2Hv1AtXspM5UPSTZBwchnHxJ5kyKkbTQkGw5d2KstoDPxEYXUcmuuBg7FfGxNDwpZMMTgJq5QSRArPqwWLU",
  "key10": "GGZQ3rXu6vsK3escycvhWvi8DnqvfVeGk85zHu3tSQ8PiTLcSyCyzyHPiDUQwNQ4fYQit6ytGMxbk1A1fsE8Hoc",
  "key11": "3Cu4BUd3qnVC3F3orAVFWUY6GytSbfsojnEt5oDBbwA2qg37Z2KZxM8pUqtYH9pAJJ2S1Wds5tyDoUdrfeAkUwkx",
  "key12": "mbkw466t5eBWeZfkob7JS1C54mBuCbW1x2QP1Skc5LJTe7R2E146UP34wQFyuSXcSBxf3sCPfDFZCLezc7PBZyi",
  "key13": "2E8cLzjRuGTSRueNcMLj73g2GyxM1ctweiQdxRBx2fb4b3WXpbj2cELNPD1BXGzkAsAsrGhDSJA1q3LDs3uHKJ5F",
  "key14": "31SX8cRRBptdzhatZ44LnegKLH5psYtypqhj2yxpkgeomBqiYTc8yPWcmotLLSny2bD62K1tMKgLJoePyHfNfaE7",
  "key15": "o1vUZ45kZKScoK6sMnV58ePBST6QRFsi4bbXBeevUH6rj4WPcvU8AmzPLc2jjgrAPcNCMKrhdsN8MqYEuk7EJmT",
  "key16": "aMT6p1kAV8Y3DvJff3iE9CFw4HSxi7pAuKo6ji6GmZUmMQKHLfHt4bPntFEdCxarkcRZGX7sjeBLRpjrwE68Kgr",
  "key17": "2EXwW9cthi4sSbmcATSaLKV9PjxnwU9Fwixi9F9yM7oBAkXc9BEzkbq9xd9vaxGteti7ooBLorBmGmeXgsbwbmgA",
  "key18": "4C7Ry4ALr7xLMnGWwBrYh81mDhZPQT9Hi6QvikS2SQNT8YTuJ1xPi8xzrLQVhNpkrc3sUW5WoRz7viyCuAK1C8Ji",
  "key19": "Ek5HYpTTE2t3Hu79E5UDX9v2wQ3pdiSUe9DC2yDBkqyFvawMubqjp6RtZoXe69Xy12bjYx7Z317zWJK4bsmN9AT",
  "key20": "5bEVhTYMCsJYkUhwStG43wY3DCXp7bKAYwQ6BhMMpJ2rPLpWK4Mw5fqLtfa5SZQDv5DRDVz21Ka6bhnfLPsHxXE",
  "key21": "5F788zCrSsumH4Pf6ZH2DvQe46Jvw7R2FztZPcECQL2Gd7YYy4Aa1u23x2t48UcVdSDYozovEkDHjQbnPgg7mvkL",
  "key22": "3nkjpuPWXA7nLW7pCkCkEomwLZXVSi1q5MGBm4kTwvgqreuitDswQB3gwS52oZdPzBZLhkYP4BsXNfg8yHfMqMdH",
  "key23": "24iHS2ZJRCYowsSP3Zy5p7KpqzatxrufXzDgLfig8BmzcM2neveZMF2nhyyRqMNQmjD5ChhoFy8rLT3kPX6NbLYh",
  "key24": "4FaxMFSbBE873x4vUb1TYiF2gfn8Q9HLT41kUnsJKxPyUGxvy6uC5zRX7LGo1hVCMqG8PwhxnL3EX2DKTdYm4FH",
  "key25": "3sYf6yb64jh9pQmHo9Z9ZEEGB69GZhWFXxQFkELH9C6uy12eppakfCTH6ZbjAZa1nVm2MqEJrvUGLhMzg8yoy3dV",
  "key26": "5CU69fCAHbkUPxUheqkR6iaGiBiC6QZaUBSweDyt57u1faSXY35eZ3QV4HkKZrdFLskfMWP3EqvkWbonuuDCSqZ1",
  "key27": "2sicfV3GTXgzVEQZVrro1fx5UXgcEAgtKMZasoHdMiXnfD2jP5cDNQ8JANGXcGmwUqSVE87pA4vr3CQYrMwdnZba",
  "key28": "2tiKuHLp6zT471nPFFLkja9vYe76Rt1Gz9RUmQ7NnNKwrhDUKosWnbPhneZArq5hHedindjMMY5McQnM7YAWVNt"
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
