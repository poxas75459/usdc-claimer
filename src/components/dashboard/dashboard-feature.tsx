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
    "4P7ACvx5ZLUaTD4urMnzv96cphZGK7XivgsmbzPc7EU4e2LQJ2p3NFDuxow7YCda9hno7tJQk2w7v9WHJibgybh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5araiZnTbsUsCyG4LGAemaWs7BYaj13jzd4ycNzauRGQtJUQtUCqHryFv7JQxStPf1Ue2VmLzw8Bafgj2f7tKtTz",
  "key1": "5oywCxMUq9W2kEPhYZ3WomxExkMQAmvMs92QPxtv2jaVRaebZVtMWjomQhUXPkivhFxZHafcP8MXoJu8ckp5codg",
  "key2": "43JtCajnHR7uzQZAwjkftNDaVNocd2q4317t6MiMjVgyVWD1qvMs49X7CySnn66NfQAtU2QX3fAvdfyzNYV2o9eJ",
  "key3": "3jdRAyXGagbPk6AeavMHwHpAZqbUL25x1KNA1ehqA2hvx1wyyknQypjmcmj7fYbjw6Dht7ppyo5ebG5biYLXUj4h",
  "key4": "4zpckvmJwSfR8tWYEfvpS8wSCDLkUpruBB8M9xK1i8cP6k58p89fam6fWL1QdwGLR4PtbS3Ctj9BimQks7dGhyUr",
  "key5": "6xpvKTAsSW1Ueu1sHukH6Satjba1fRfkcJU3uJf1npeCMBhrdWbztycB6aBdZwtU2tN975H7MTqa7hLBEw8MAuC",
  "key6": "2vemq8R5tvsBwTuTkRivEPU82QTzuYfnRVbfj2o6KiMLxucQANK3Z6JLtM3AcogxqrrLmueGhmiTWJLiGpUc4LFn",
  "key7": "4W1iJfRoWeGaYeVqDokY64AxvjWwezAfpkLcuD8csHmmB9TTcpjTY7N4TuvybUaTQhWvQnaA3AAPxqokDKzV7Cxn",
  "key8": "5yKobadqo3HNDAGfBF6yNXZP7JCTUJXSNmqxFdmNtUXAVsCQxD2qYQFjFW5aK5TAvGPC8CDVZtVJEFfE5TSd1ySy",
  "key9": "k6NHBunaxsT4upCW3N5Vobchzp8of4RGi9tesfShGrQ8L7xuW1iU6nt8YqPJtxpxx31y5gcVq6tfutSBm8Kzefy",
  "key10": "5v7hLMJRSqNm5tcSQNoGeBSg4WPEsDNmpi6x1fmwoLwxVimQ2QX7qoJzXVnNe3sgenKrbPoYFj9m6EZaWw9xW1p1",
  "key11": "57ATG4B1jPjxTsn6WPKjtF7zncbWpX31bjdMNSPweduAUyUN7EjsHcC1UniYEi2W6aTyqKZ7yBRoDKNPiBrabrVW",
  "key12": "2mkmcQR3WPdC1UbFK3pyLQ1qtvZSs5DGv38kXMToiLd8HbN5XKnP5LVdP57BAg9RCtr6iUvGpnTWn246581Knt4A",
  "key13": "3D32QY5w2EuedRLJ4XVuDcqj7AhqexAF3XHLuq6Q2ych51LXN8ev5VtrzfXUrW4FTSwCvuTJhygmY2TJFtEDAZ3F",
  "key14": "3FvPVDLCk7SekcDnTJG6C3JMw4RkjzfK2hJ1RTwRaxAStvqE5T5MXv88uBbtpUNd6YgxboyBDTisGyKuC8Yg7xb1",
  "key15": "42BQVDjEYv3KUDrMTL5osWqtKGxBgWzbJnbvLwQ8d85pnojGEcjUNmVk6Y4usR3nR8r6EDvr6Z2yJ3KhmbLpEZrV",
  "key16": "4n4MfnVmwMdSJ9Z9QGvM2xqJFvxinT1PX7gpQWiwyVdAVGCv2qgGNpBtYxUm4mZYAzHcRfRwqQnT8UDrHF5vXky5",
  "key17": "2CsFrv5cgUbLyMHf8XdpWY9qBDvadCoQWAYnRCbySjH9yzWXCyStHbsV2h1dNSWnXjhcQ5Q6DXpSiJETAChr737Y",
  "key18": "23XcvTQqJNSEum9m1JPb4TCraeWMdLGfdcS5y2KQdY47dzbb9gMPYZ2QjTBop2bkjpYNWpf9JvJXHqvd8ADSXNTJ",
  "key19": "bvw8s4EQfTPkKYQsPgooHmV6KvwYS6xr2oyTw8fsinSfb6WpPwKHHMwDTRa79MifUkegtEiAescCiDpDAjXYo3D",
  "key20": "pgiQgZ9CWPwYx2RqCuf7RAFvKeL8u8xvpkTcuS4FGaYxCdWzJzEVwsnJNVqEEeTHRXxKv4xUjK7t2EEKHHqPX65",
  "key21": "5ZCKMDAbwdoE5eEqXjL7qYd6g3R1YBuuajmX3avTggNxGjKZ54P13Yg8QAyPVdHtqGmRUh9zqrpXsBHj5eoeWqPA",
  "key22": "5sXEmTxb4Grae9vFLJj8oDMZHVZqJJQ8B9xJgsjP9AW5VbCY4WZCHqHXDjrU2kRBEPt2XjGg1T3xj4tKY7xybBeM",
  "key23": "xuqRuNvgCq4LjbXgAWv2XbCZfSxPAo7HL8S1PLPSjyedcdKUUFZvFzdzm4ZjWCSURTYAySy1b8KVGpze86LHN2U",
  "key24": "3SFqcTTtoQC9NP89TobpATi6j5UUzBdCCCsJASh6X2yJc6wNGmbmDBWFk3GaMMHeErLqYR1dJN6ifyi4fCqTZ9B5",
  "key25": "5wiFXytY5aaqG3UoHGaX8vDWa7nxELadr1iFsojNaYmW8wCZYwafQCUCDRBYnik4SPibWoZY8gSsbySXhh4P5pWi",
  "key26": "3kKznJZ3M5dxDSQopVj2MVnv8R5A7ioCQKCDqvBeEcsrN7Cc4B2f2ujfRF1UZpuyK3TMmSvL3tgTPQW9LsPZtuJ9",
  "key27": "2EcZCASPnSS8NyVLo2G24Md1UDKw75twDVegP9CpRUiVdL1FmFRNTJi6Jr1eZSwcUJRTvFwpjdGNvz3KhdvYEnkG",
  "key28": "mX9arRqVSEaoJWNcRTrRNf3VHpcWNaSF36SpRQ6eZxTZ6vNHkjHNHPeizKfw9kXHtS9F5Adm98G69ru4y79wBtt",
  "key29": "5N4RCgUNBhigEF1TToKgje15tD3ggoSxxXm6e5rUNFdoUgcdLPd8NMeyFhBJnwPRmcYNfpAhsCLeZnmexLUk2etB",
  "key30": "5fG3zekT8Ticd4BAfNotyChLuoJ6Ci7KYUsedFS3WRNb94ErMi28QaU2yrirnsGTevJUtNfvUyiEFQ85XAf1GTUC",
  "key31": "4nTBxXpcepFqtfcK7BqMKzyFrDG9YX4bsnPecDQgamhETHR6E7y9MooL5LCZH5tXUyMaj3rELueAt1dy2EDagrVq",
  "key32": "3juL4fbPLetGesxXHdPHFK1E3zVDrqaxybD2trvp54pqE246PQr91Tpsjqs94hz3jLuAK1ZHRvuPALxoPEyXej5x"
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
