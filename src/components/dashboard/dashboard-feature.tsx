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
    "4ahpKbuMcYkHQiciUAievQuj8YFR3wxMxW6hrAreaTBM64F1dw4J1zAxmGQbSM9rVYfSi3wprHh6wg2J4bWdbd37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yrfawa1NEMerq8a7TKvgrjbAUb9zB6ifuzVEL9VGH6G6QLpxq5cYGRLr2Qx73D3hE3caW178L7qxZTuaupUdekh",
  "key1": "4eRhJayw2acpY9gXkeSXQbT85wgtGLXCEQeoSD8qXWHn8zwjtySh2o1SQj1V3w6hPKAXbECCHdHKhM4MECWowkF4",
  "key2": "2wCzNE4p54sSfNH6CySTZt2inaAk1RAKxMJsreSBZjPpbQCPGSufGoieHZrRPWrZEG5WirTXzZw5y8vB59rwWMhx",
  "key3": "2Y3S7XgXiQL52jeTQPGhNZoiH8qwodVdHEM9ZK33wN1JmWMzoW9NWMtf37diLFPf4C6phrWjrY6vHq2wHegN62jS",
  "key4": "2BZXvGoFaufUTQQsjVk2uaaeeZDdUQWTirP2nuRdTQaDyyX7R2j1UhB8Qb3rxemnYVvwoGAGdSZbvLyHwbDtqpAX",
  "key5": "5p2fQVDfA3Z9yx9zo9HoWTtTr6Yot5xuWf9pbzu3LaBuxwjcqjBF3rkAjqxzCKByk5ZAc6J9TYyDtfMDE4GCRx8c",
  "key6": "3vGQGcfQSnDTQwgQWjBdnThqJC32E8wvvaJGjKJ9FuXTGS5WYCoTxUKxj8WkGnF49MeFPnz2pGJZHvWtPstMYJwq",
  "key7": "oMYZX3RsMfFDPpqe5PLodWfsjq8eQWUSnxDee8ujsVLF7oVHrwHdFbE39d1cVWSbdu52A4NrTTU2ERNBxyHnMaF",
  "key8": "3t3qm3JGoQS6e5ayiznQg1neSWr65WyKz26VbfBaHMum3zWjSfsHChjuMkLxTe8Aih4nGZ1mcerXkQmApmxyA7BN",
  "key9": "2qBdJsU3Yo6nkht8yXc6CBiw65gdUQC7tEi9HuVkPSr2uLrocVCp8NNiz5Fzi8G4rmXkPbUoHPQTd9PVc6vxQHZG",
  "key10": "5pJ37zEV5tuKHQUi4RQZVToNHjaoe3chM7PDYkpdTsb4pi5MgBqsY6WJ6VmMSCgVw1J51fXALVNLndf3xz2STqJP",
  "key11": "2LaN2UnqKorZwNUtBsJ7tNUcruYVANqJvk6gxo31q4enSzeWoTWN3rC7aQ4dvi3U9ctjvojv1SzH1REbHE1u6wpd",
  "key12": "3arpbPnFa5KjTkXv8NRggcziYDnvuBwo5yCCn3JGnSMBLbdF8bfLjvo13uAiYxqAUf91VfyLeGCfQ69qUtq423wG",
  "key13": "gETWzSXv6UP7KKoGFEX5cRurj55LiZGH6ZdyZXMq8ZX2Kek5BuTibDTk7rmbNkeoKepbGto51Gn5yt59czNRcsY",
  "key14": "3oUXwuJmTfDSkQULJ7S5ES2rjN97NA8FwVZKXkJ9taJ9tvjxnPHK85UqnegsRMZisrxJhEg6wJiAA4s4fh8Ar8NW",
  "key15": "3EiHJLfT3Rdva5t5xhvSjgMTmC92EKVLLBGQiniiaDDbgKh4eJM3GpzvegWdNh71qZNZ8G6UEgSCdaTaUeC2mL26",
  "key16": "3j88WBYLS33XxSnBNMia7vmtCKWbuTUdhiPwqpNuDoTnSGhtQXJPQyYxEWaakKquQiFVcbTY15AnftcxZCEK1zM7",
  "key17": "586s64tZbeZyUAUXUT59BZNy4M81LeqGPk5RGfiesvWTkN8sF68FYNVTqhwKqbJfEgCP3F9AxWTaU59XqqRbqjyH",
  "key18": "3gaFiruC5EuuGrxyjYeRP5MgnRNio9VfTWvQwTtwnLfhVUYMCfRhiZ3eL4BSmwQdHwgBx97PpbBXiBJBipMnNzQE",
  "key19": "3zYa9sNwYt6jcbPy3cHa1UiFU6KDNVzHAcTiYhX3DwdwwuLDUxFj4EZCaT6tBpJL2oonUweNUnmXnLWbS5s38ctZ",
  "key20": "59byTTMsTdRdEKU6wJx6vtVMPgiki6nvad7SaJSQLhsqY6sErjWrENxW9mW8g8LX6NFLbBFVgNjLTnk8uqeeBfjc",
  "key21": "maEN7D4WUBHuj1LdftF2UD379dmTFpeUXRGtCS8oLGyZKTvPiXzZdKmQ2GC82hqeAfRHbMGhTB5qWwhHsMwaHMB",
  "key22": "tTbyUUfhq9ZNr57BFnULcJTXAQEFTH61A4whs5iVwKvhgfBGJk2pJXektkHN2aByTiuQ3Dsp8X9mo62gsmL5GL9",
  "key23": "25vK4RmxpjuprmKee9Y9NMJowguJndgQatLiX72Wy5jXm7e511VPSJs1f4FRhVEjM7P8MMBbJyH4KArQ4jdAtXwF",
  "key24": "QErZHMwJz9bPSJb7oKCNZzjCP9AvQ9nd6RJN3jimxZsgdmhPkEQwbFQLEoh1ztzrCo4jpr2b3K38iWcABtU5uiJ",
  "key25": "2BTjZryPGo63xzBXwJTY5ACjt7pz5F9sZMLYnatnZcXzZH8xR5txmRNvUaevygYMJGw55ZBbxU2uwhfccuCWAQab",
  "key26": "2x2anqT4Y6waNjErNxyKWSCDVUEdB8KXwAVknixyVoW2EDU3rLvJhQYDz8Car5wWTn2EyLYd6dVxJAEuU8rPQCdD",
  "key27": "5LZ39vfsQRGVh41TqPThXydHMJKhDzHR7SFZRgBnJKtDWTaKE7PQtRE6thpC2oDnRXYjio168FfqEYJ4unJwZzZh"
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
