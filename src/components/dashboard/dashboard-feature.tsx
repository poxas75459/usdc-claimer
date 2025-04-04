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
    "qENE6xYBvUhdhD3CefwvpqF4aYBgiw4XKn9vCtfaBY93DFjgucvUPigwoojaJ3MC93Nwqurvtbm59BtQRp2Du9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JhuZShWFWDuhRg9zRxBoZLvsmpHk8xvS6DTx1EM6nKCLWPHDqypgNwn3AG8FYbkYB4HGokjV4iVh4o4u2sLxwo4",
  "key1": "5pMBxyP52qnJLzNuY56QWUBGi2Fe2J7KeirdtUmRuatUaSL6nQeqJzDE6n2RfYjxAMXx1kBzDkSMeGzMKMucUFDW",
  "key2": "5ta8S7NPjZt7BmtsWehoxmi7DEdnvBpkrTWiJCjC6xWbhf8wWgSMKwTm2hM73ZSr8KazHrNU6nLzJtWH67f1rgeP",
  "key3": "2Y3MDHegBe2h3S67tQpcx24uEEPdu7GibRmF3kz5wdk2gdk3ZUWjucCRDDxN1HbxZowtGsKvNoKKy2Fa42RHQUNL",
  "key4": "2haM5PVrG9A4f2zqPFwDQYFik4gUDRK3T8Bbb9syUMFmP5wosoPJuK857A4UUQuY7uSmPCaFRPgzvWNadeKaMTzs",
  "key5": "mzNNyaifo7Segef3TGhjGpSHDj1N5BHsmCnqFbBDNeT4iKSK86kU5ZKMTC9sjSKwgaGEGUGSGk2Pr7NZ1FKPJGJ",
  "key6": "3BfYNe8KpEQJ57ueWyPiEqLCaV9uZM9PwW8pkGB8kaP7JJCt17KmjJxhSax9gQXJJuxxr7WYtxjNQET3h5qRCiMD",
  "key7": "4GzZ6hP9UNMhFjztxXvFviiS9476ZnuFHZv7MrA5hiJppTd5RZbSYjyqP78d7KnYv8C5hdZcHqh63yziURwc591P",
  "key8": "UxXsW1yMjVHK5YaxumMaubGgxbxg3NnULoGbfCEEnB1kBXt5Fd9kyVw3zSybqZU5obGm9GRbcKWy1qWVXqyTsWv",
  "key9": "3ioXbAPY9ftNvJoUchY4gUiwmCdELU1rzBYjAzYU7HkXF9jgPXU3XEdHuqwmVVYhaxRWgVwj945326NrihnwXK85",
  "key10": "4PcQbWgkx3NjLjvCQo5GGgt2eP5vJhQ4CynahTnoSt5ytmt2uZibbdPWcY8uET1S4fJXhpLHyRpbcbFZDvRR1Afe",
  "key11": "4tXrtrnRRXniK6AmHwvS1cyUWDhq5pCawf3by7D8R5y9kCNNfrGpsTDPTvEoFdHCyfTWGoZat2NtP1yCRX7Bh47K",
  "key12": "2SNrYfHWJNiHetunSHG8FgSyNAmMCfrUJ18Yb22TYrtcExwqjpruVF64usiQ4bzTnE9yAdrH6FyhDcD32t1tfLDE",
  "key13": "44V9Tco6WYHHcyad3kVXT3yC64L7nXmHoC3rjjC9sU8vxRQJF6S92PFX5jHPYQTWMzVryimPe2KpTUnio4FfD8Jt",
  "key14": "3zEgG35c1T6YMWVyxnReXBz6BMQy754TjrVPCqnahHvFVPCys4WU9LihNyPWqejtP2msiJwQ37gzUyNBbnnjjBG4",
  "key15": "5bRyycApCEQ8ZAWjm4BnmMYngr2YBcio8h3tErsUXb8hdxZzGYZfeJ377ioAiRddnyPXBui2H2FugteFob6SxyS",
  "key16": "31x4GZCU1nYE7snPTnmpD8tk3RXhi81JFmj8exxv14wDZAS4rvrBS8Zkvb5fXXc8wdFwbWYAUdUJ3EPEWp1X835C",
  "key17": "4XvAmjko4PUGH7jLUFSeVmFmuNiharJwfA6xZ471xWm8eE23cPT5kipPByxvjzEoXonLCHqhYqbL3PPe16zFMCpK",
  "key18": "4pptHv7a5nCi3zmgdsqH791MTebxppL1kpHXq8z8FHk4Tfg9479UfJvoUfywgc8eCUXF633uTNEMNHUvnhCJku3Y",
  "key19": "3AH9u6hTQ37NFLsBWB5LDM9Sxwd47k8X7AKE2NC3W9AP5tk8H6bXmqMNSTSdprJbXViy6GLpfHsG1VpUFwm9CPAq",
  "key20": "3f1iaTLxscAbGmWbWkc6qDLp2APzN6xrsRDNypBxK5WjMhnMu3eiRwVjtrPKmCP9UTz7DvyUAJNV57T2qGdDvSAE",
  "key21": "3cpeP8Rp3n7kJp7xo8kkmdLG7g2EowMFpmTqRg4xrc12nGjgvD6NGKzBTx9aWHzhNjiwxofC7E3Y7gASa36A4AjL",
  "key22": "5vAxTi1jSvLjh83jqCjzq48sq4a8zQcKx4iLieMXLDaWkq31RSD1QzrcMszdGU5QBXeqhE4a2qm6Ec4J4xBdwnWr",
  "key23": "2Eu1D1mjzXJRbJ6GJCT9mKeqTRHRunkYz4hbbWXxj6nvoWYbqiJr56W3WvUsumXp9brcUPJrtbB1opu7iBMk9aVc",
  "key24": "5a4ecrVzpRDFngAJw1Gk8bXKgH5gbwzcFWjGoJaDn9qMGv56JGcB3JLiMZYZgmggyp7NFSYJMx4NQbGQdQ3Ho6KC",
  "key25": "2MeiCKVS2Lq8aFmnKvBnY2EQPQbyRyfroVhtdXZXqnps3LWdPtGFsUjLGzotgj5UwV8Zv2hanCUxAyXVnCUBuGjw",
  "key26": "4V93rUrGvn6iJXJhFGXgDYvxqxyj4Q5CCxjLkG2Bhw1tDDAyhVWpKvAL4Pa8BstZ17Z3cttau9aL15aiVDUYApnG",
  "key27": "5KUUHo23ogDJtYnCoJLjjX3SARacoqWGPB795QBgLYtu6SmVCQvqNCAWCkDHN2ziMwWPRXVEh3pvU99tx2YMpVhF",
  "key28": "e9vAJrkkiqHGcrbDsdR8snZVfjf3fiWbvodFN1Exewx4xBXJUuUJ63K3iHMVEWxrYPxWWx3c5vgmR4u1V7CDjZ1",
  "key29": "SUP9hALQ6NksmrRJPJjJruNs5FAsJxHxcjHNh6o6psrb42tCMo7TVjXLrPt1HCSTNpiqeiZbVR6bR3V6sZGbymP",
  "key30": "3yf9nPbs5ovbUxPHMpSFoCthFHBUpmGk8bBWBhbk4iGm8QWY8aNEeYjs2WvdruZ4vbUnR88fZJAb5N6xbhSYqXTh",
  "key31": "KmUjpw6pZ6RGg22fRkL4FmMBD9Jpo1m6vjPmSxnkdKKYRKJYVpaKWCZDuRiFnjpQkj1VcyFfmTXxpmZytHj9cU2",
  "key32": "2bWNN47aACWMf1wwWd3pvEmdf9Vm6y9MHKDCk99W5FTEPWCbAYcpabWcBn612BcAihasmPD6tz1Qh9BUq8M6KxSp",
  "key33": "4XR4MhMVTfNNkRA16jwzW77846EpzK2QSZ5xda6e5NgosQkNfS8Whkk6ywxHf3ng2YGu9UoxFwRpwHi1Rejzd7b",
  "key34": "Q67ycAg7Q2ptEzzCE78m5FAJwdMrZCLgLWzG5mNoma66UEp5zkMEeChPJfvJLk1sx2uBkesBWgmdp6y5RneHjyy"
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
