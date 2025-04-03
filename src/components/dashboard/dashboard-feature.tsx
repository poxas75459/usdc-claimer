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
    "fKnjnTkq8b2JLKZeY43QtRqgW9TbKu6o5Tp1W4j88mopi5XHP4fZcyDeX74WqkKMhGywtt7ZLFnmCc7TSTnmrRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdsVyWmvCYfXLxs8eguW43taiNitgAzhUhgvaBvPqSBAN97y94oBgiz2iTf1nmRixaNWBdne5Rgax5UiLWZKpJ2",
  "key1": "299rR5CzssbqA5S5T997GmrPfojvAYx8N92mdPKsfrnN65dkK1qFKq5zdY3t4ejMibpKVUtXyRvMfKLntpP1UoR5",
  "key2": "mtaGfNUFCzfiq2rFDJbSC7i5CYoCoX4QuAx6bgdEtkvqwrrveHCoYiqHZBQUGcWmxdgphCs9yjnCLYTxSdrbJ1x",
  "key3": "3fQ3rpTqM9n9ZEk1kX29KjWTdU7kZoE439St2LQsFjVJUgjiNEzF8njctBR7GZerT7cMjzhgECa6fDjbT7z9US7a",
  "key4": "5ZS83VYPTEsicJRraHfBjsy7YX8Mx8DQ3oTDoNJpaPHT5Uxb8PAZUij7iwWwrixionLt9oVwCsamk3C3oH991VKY",
  "key5": "gxJPeQKT1iBgbWqNS9RZn677dQtgXeLZ9F7wMYsrrDwvuQ9LN9GB3vQvPFMhwTKgULciDWzG1puP3iQk41datxz",
  "key6": "3dRUtUEKQSBZ85TwxVUiJ6YaEAfrq6MYtiseZMyjn3pCxT77fHWaEgZVNgdaHMA3vbmhzRmpTaaZGeHWqZ2S7N1E",
  "key7": "4hBWX37twf93DL2ymfQxvSVTzuvQ5883oyKjFd7hdh1Y3toipjZrXqNjXmoVYSvYNRyPEhoj1aHr6hSYdpqGbY9V",
  "key8": "4YMyciyn4REq6GZgmGW9GEFytL1p89Mug7JRPrMx6oamjb1EQf12JpSTJHAmdyCRYYQBTHsap27q5MnrgedoHvky",
  "key9": "3tE7DyhzFLG7s7iThpk1cFUgsibELJJvNZqvk9JJ8iJNbAvAgxgz57tcjzZpuk74ApJEK4z9hiQfrWxcJkh3rHjo",
  "key10": "KtPJEt9yUv421V9r3ACx8yC9UrgA79KCpKVwb9YVg29MrqmpiJLLK8gJdpWCmuCh4rpnw8WDxghpQU7kiEQRAHW",
  "key11": "2pTFoJhrRoC5MYXPZ4S9zpKTdHwy5rS1Ma4V5SA9qHTcFuG143RkLKLHnQCNxwdAyYJvScAf8Uq7zKNL5GuoaB45",
  "key12": "3rVda42FdicaaQz1A4P8vprxiTwndbtwPN56XCtp4CQeFicAjhzmAUNGB2vgoc5MmhQhv6cDZCYwzECVAVzq6LN1",
  "key13": "36ShWvwh9BA7aVmg4qwVmE7MqHWvzyUpBiPnxpryH1nyXo2VwmoJLs6JqFkNsbWCPhWVaqW9i1mGTZC76wMUk4aS",
  "key14": "z1pp5S6qTjF4NddPHXs6HqghrKxSKuXdiiofZrUJ1yitgi4WhFu68r8U4BMfQNR7cEKKATmMLcF4a7wk9PdhFER",
  "key15": "5DZLkGip1j5w2YgSVZybDSAyRrTpSbKUXDvXdGTi6jNmqCmWGGTQe14Ry8maATjs7fny9LKBiiPbaYbkS7RFFRzr",
  "key16": "5YGpoGjR61fKyByeiHHh2FpB9SfKmTE6XSgY7STDnYM2wvemv8gzQ7WqaBmYMEteDCVLxKhpLr3T3FuPUPfTK9Mc",
  "key17": "3gyLAVvLwYFkWgdUBq43SDcJWqZoC7Nsr9tdaRGF8zm8n4uyE9nnTmu9Wp6KC4jdXWxcWSgopxV1HsAp8h32a4pv",
  "key18": "37MTS8szQSSogsK6ruS5nJhaQc84PhPn9yiUemyBeNXFwtif1r2MdrjfpHLsBNWJpELGjgugGP7BazHecXyNHx7T",
  "key19": "5TBbFiPk1M2F48x8ioSGecXLSRvQtfJX8xXPCzA56EZAEKo3RZffrxFhzogaPriP1BXkAfSmtHKYL6sqastEF1n",
  "key20": "HyGf93DjDvxJ6BfEwV5rtJqpW7mYDDkYK94tWqFVwftznBDrvdEX9hhN3UzAiMoo2akXaeqmAJnSCczxqnAPwhs",
  "key21": "5SKUyifZL7YL98nsVXbmAv5eTnVVL2jkWdrMet9PSFeSpcTmQ7wRhjLK5dYKdxUGbikzu5Lu8wtdbA6GJMa9n7mD",
  "key22": "4mvoSVFcrF6XDUuc3A4tFms5GSNS1fAnGQdfNodpTiM1oVPN4X56fZqQguzKnjpQrjrh8Sprk6NYp687jrMdmN7z",
  "key23": "5cxH7ZejYaToxYfMBiMMdBTa83yCcEL79Tuo9kZHQUaDfEB9Hv8Srr1BiU5hcDgNxaYiPnu4fvP76XqecVVwk5UT",
  "key24": "2axjfmAbtEFu2CnzwsSYJYc9vymwZcvpveG8thDLp2v5LNq2tXKGetDmXhMCknDGYnnAuDwq17ZZbeHHnhPSDZ27",
  "key25": "5ETYisUy2P1JaBxKnkYjQwBAFaspQF1zZJvAv3GWdXNQRAKgN4ugU8p7k8PE8bwzuffYeugWAPR8U8vaRem3PA6f",
  "key26": "5SKZAGWruB6vkmSHwWUhewH6Y1rnNUv4JRyxewFxWyQQmrrt9PRuxqRwS4ai3pJiNdM2jocKLgDYRq8vxPZT4Enj",
  "key27": "4MHdbkURDjpbRhdz4eJLVabrpSgKJv5v24qXNwtKmrhqzJ832yQgvuMGCza9pY15eEPp6QGpCeMe7MrqBwXKuDrv"
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
