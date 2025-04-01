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
    "3whVSEXZxxJGyZ1NZwKpk4RxCECtVXhFJ8h4tWwpzHzKUPUNvnGMLzP6XUCA5gB5KFJbMzR7gbeWF541vWCR2ULa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3roynfMntAQS1zBYrcAKiNrbczfSrf32CV55sW7raVYmJDaq7vb9hc1B9REQm7z4sUcuU5zme4kQpPeeDLdcE5H4",
  "key1": "3JNFvcJNQqC5mP8cJem2XUD1NFZfWtRPqdhzxDSpurPojUPNHdqj5FyKfBka3LwRg5Y6YZYUB79ptpULs778yPoA",
  "key2": "2ZD9Cd5xSTMDxE9UEVwdSTgSaLa5aDQwtmsz2cv65mB2WPNjy6tiAULQ32wSmNKriq617Nik696GoVMbBCMntthu",
  "key3": "67gCdKNbCrFAmFmpbGSEui1REcYmWGAHrFQYSyPaL1Z4qtGjLtzBMqvgYTaQkZjvGzVGTevzDz3gHv1w9xMMGzWe",
  "key4": "4jMhJEoXsUYXijEnXUnoAMPnKY4SVUPZ1sH75g15Y5b3acWg8yz2yTNX53Bu5fLq5sFLpjZNfzf61h14BjZHN8Sh",
  "key5": "2ioCp31iF8k9ajHJZKCpfGQoa74w9fdwgdEnkNNQQvUNebzGJh2YcCQMB3sxT4Z6a3r7PrGLMJRWYJYRTaM8tFbW",
  "key6": "2N5touG4mczNfLxykJBPgiXGzsxTmZ4AwYhj9dj47KkJ7BSDa8mFjfv1aaauammDc9Gg7YpE1A4ohUo7TUrtmhyX",
  "key7": "5r7GVDXcVVESoYyaNiabFeAWXobLgMxVKVQX4sS5mVFS6NaDfCSmg44q4ggkZ4nFTSVEag2tFRCZpXoc5JoYmwoi",
  "key8": "5WMgV6pW5jvELkGMUyA5R3PzFC1Cy2YHWgLqCGjPLvKD91ro9xtN5U2StnnLTNteBJpzYbmTwvY7rTY8t3CSU6gk",
  "key9": "5VT3zwuU4Xu2ycVAb77HbNRAHQpABjhJJLY1irmyg1iBGyaKKxLkUJekRQQVHU4fzTHbwp5oM2xBmraYA4nYvdEp",
  "key10": "cKnEKNJUGsgeF1o3WqUJjuLfiPoK5TJL5wZotmna9pFcUSayc1t7XKb5VZxCHkbXwHxYGSYsX1855UCEcZK3voq",
  "key11": "2HkVXTsNJ9Kt6HL9fARVpY4QUFH1BrLvZ8GWaLgBpmQMK9xsE5J5xcdPdngBS1wRaucWK3NrnecZ1EbPYukLxSLw",
  "key12": "31Rc7tGoZabJsuRpq2M4nwGzi4rLq9x3r68VZmaQVA67k9JaZ8uemrAv1mha3bL8MiSZFCWBo6V4RVvU6ggeU2Tt",
  "key13": "5WsGs3YEBjLDfkhjWM9jhetYoUL5tsfgi4GqeiA8hichrNYqBy9XfLZJaVdaozwjJWEnLY7vGVjJ6V5E32gEr4mb",
  "key14": "4dKEWEfJuF5XKYvWMrAbfNzmPqb3PHKdNRSDj5qADWZnHGAuxn7UHSpT7Pk5y1kg8N7rNwCeKaL9spuF38jjikxw",
  "key15": "4Smmny8WTutjsmvYckpJp9tBp19NvfeSP1k56QThvqgHZViUA1u17yiEmFpU9yx66CXA9KwFx2P4WfAitJY5Y1D",
  "key16": "2jkN3EipYLUUUzmM98pAD35cuXvV8NiKfPiYswD3NHzqAmsNZwRHjmuwS35kQ4vrhRNwuKcqSz7eQ8aTA9sML2vr",
  "key17": "3Q3n5tQZU2v8PTK3Yyc9XYDjM51TdjCYqL7wdufJNRzkCX7Q3wJWbkCLrMFJr2itUEB6xgot8WCcP9dBwyYqR88R",
  "key18": "53FdE2PcQFE13YpaZsZB3L7RrJA6Lb24qYwEteRm9gLvBwpWncxWTZk8NAWdBRHBz2BZtpKx1J2FaQkWxDMJ2XVC",
  "key19": "hzuo91tZCD3Mxo49wTyHhaCxHbnGX9qFLEG9fpMEMwF7QGgLLyxto8ftyTmPCV9dfxyWEDsBBpiZ5oRW47umsfS",
  "key20": "3sQoXGePjFULVGDFNq5P6iDi2TVUNSretjLE47JennGpK3PeA5BFbRhjmYowz2f9LoZKQHb34uBHozx9dgSKWaDV",
  "key21": "3332HMvUQVuQoSiiZ5Vnqz6d96oq9q8c27ozrQmMQNmMUrrs48rMe1Wdyh7DRnr5F4CGRUxxVUSbMFRHP4jVhhrz",
  "key22": "5FkoE4chMBUFcDqmnFfg2f42f7eUzTmyWu8D3kdtM7bj2znjsqPADb4ZKEquzp2w5CSduSLtKN2d8CLoaCXLd4za",
  "key23": "54rokMQyPWzWx64sYHTVRuFN5yRAaaX8asLdP85naBF98tnrKRPaWdszzjptFDjaTmNyEWiANsTuw1FfrEnZVWXk",
  "key24": "37QYekQpdPfRussEF7ynk6YpAhJPPuMfqs8zoa7sitoX2MVRdh3rTGBCbWbBx9jH3vKZGobfa4GZAV8DFssJTGCa",
  "key25": "wPBDRqhKpCA9BNecFxzcoFUqTvcYMS1bFywtd86df8XJtqVdmXQ2rNiw3e19AbgXzzBN9vRgzxLFGfS1HSXc9jz",
  "key26": "3wUQzF45cBpP1cCD97vHVDvVXGxoNs1sNtsWKoRZRnpNZJiZrT8vGLJ3BsZ4r58fm3oA6FGGQ2WHnWWWqop1puio",
  "key27": "Ms1adzQAfSQFq6MghT6PASFMuNSs4o7XNMJqUwMoXPYz5hTA53f7zcPfD1DmTPqtRbrsqXN4JqsBixTUoZU3pBG",
  "key28": "2VdrETmtTVVuXijKk77zAbAM4ru4bw6Nm2LivAff8SLe7Q9tM23Kz9SRZgSXPea44kAXajViN7E4hhGTsKU7DsxQ",
  "key29": "2HD8Jm52do1yJkVPvsWnHGp7BfHk6nXQ4KzL7M8PdK1sWPDcveeia9wiZePmFWCPKTLbaGb83CZYZyUPPtQGX8pP",
  "key30": "5omgAQqEetgNiuDPuHec6sc4Mu8qvQSmaSuxswTauGqedwp4528BTgnCV7ynbzS4yodk9Pb9vQ5LVUoDqdrnsEo5",
  "key31": "4zus2jduran5qTmxcC8vhW2CW97zmC44LY2J1SbUwzzZaaX5UfD7LZekAeSepV1FdRTgBX9BUcQ2PzCv6vmHB8Dz",
  "key32": "2V5UBNm6SaYJFHzVeWpYJSfQE46XAtkzUNM2saWZ6RFF4AKUtfD5Xfvji3YPTdjDW7w4boEfoH2pPzogaRzhmpYR",
  "key33": "hXmxuoYZvJgrGq1t4afcpNqg6wtfjSupucThab6rpQcjuU7W3gHB9Tb3hDhKMYKjBjcerNV5wr8LFEbKNBGrLoX",
  "key34": "SkvGuCLup99hxUhjeG6LLgqxzJHfPyiub1HNMDHALK3viZf2wD4BdD9MAmSGpHXhKZo8LnQcRo5M2EVXU2BTuFX",
  "key35": "3CJV9QafbKoxyeWMa7HPRnd2N2as1oCDAuMSnnmJbBWfK9V3DLVWFTwStyGvAfpSJKTWLFg5Qhb75pJwfkikrMif",
  "key36": "2CprgvQ8xp1qqfAwvVwKZW4MAanysXbJrGQShNGg5uBXrMLz2nSh7Ks7KhQhxABgYAhSJjUqB4qir4zpaXSu9nD5",
  "key37": "2ywni1fTCJ81TRYRS2VyyxXj9VnJnGWNrREYNpi2iUc1JAFFvMR2F1tv5bxGS2HuZcCzMd3k3TBZr4g7nqNSwy7g",
  "key38": "3ntD82qiaqJ4StB7yded4m3QY3ZaEvA8JLDEuNqCWtcVWNUo2hdfZ4dBf8K3n7FxJ1APGuJoLaCm8x41bQxsmBjy"
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
