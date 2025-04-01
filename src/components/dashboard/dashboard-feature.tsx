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
    "4NW4xv92EML8FqBM43EobpjNE66e85Ssr64pCPtZL3M4Yqh6b2ENzdS1nvHTK53U84z5Cq8M9mvm3DbhaxEUAqNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jkkC5foseNPtR3BFY9qqAxPgJnRaaitv6oVmVNUcDkoCp3qwbBBzsDQ3VwNyDqpXKTkKzU5syVpUDKnwpScHHdC",
  "key1": "2hUXtJiWGGGB1goymHd8HFXEZbxRMGArx4mXKNHtEjyVaozchZ5Sdt4knMtBPesineV1ZK6MruRvtLXGy1FSV6ax",
  "key2": "4vB45mGke71djjjECwP5rmQgs2Zm7SLUdHC7xB4yaqo3uJm1qwtCBkrc7ZziRk7GECiqJbsqUFFXSnNZWWDKLpXg",
  "key3": "85webimqimCmNkKPxWfZbSmcMrFGm9mxRRDPoRi99Dd89SWRPd7MS9MVWVLpMNBg5rpioKNoLgik2wSkWUpD9XN",
  "key4": "5F7AYKc1bDGrDKwJ3ZUjVbJaTL8cxkicmrNNSSqvoXyNCd3nhgVBux1SwNUbiiaq5BaXrETT6W78z6sz1Hkhr3jM",
  "key5": "4KmQR8SYX5UNLucanMAKvnKu9WGYW8Z2uXp9r9CDjxdHbwVrEeYEzEyVkxZSQNaiJFf8NKeavxT8i9xogBHgT1pP",
  "key6": "5T6n1uMqLZaGPyf2iH8BnKxJMzbJZQiJPPVnsHtTWSdz6c8szLqLbQXK2QWpi7icysC6k8iGco8po4sgTV7fBXUq",
  "key7": "4nbUrgLb6ksHx4Up5BKSjJ1KPw3DNFSJXdKtbq8jwnbheFKRjdVkSn8LyAi7xpJqSySH2gKtUSRDKmSZ29BcG4CD",
  "key8": "2yjmLZDRPPGCkEvrp4QaHL9XTUtFznwMhVYgcJbDBmxYdohKvEUJejygXLfbczEXvTYbSYN9zF32x4nahZaxXLHx",
  "key9": "2qsBtmcvAErFzGA8Lg4CAizyFky7WbL5B7G1x5m3TsXQXyNQub2WfavvmTZAeAmLM2vtUxPJbXCC2A4thVMacXZh",
  "key10": "62QSafHh3iFgo5osVupvFQqoda7ez4mystkthuus6mngP8o3JmFXVjrRZrXwN3WAMosuC8cykeUbR2tiYBdtzCcy",
  "key11": "3rrauff4wngJE7JRgxiDufcnqSjstAU6eCPeBk8mwRH39pV4jdCtsz8mkYz11cGduVe3NSmGa19cdFN1LrkxDC2U",
  "key12": "5MhJY6RZfJvZ4FKt9jWkRkvpL4MeuUE97aH8tqwvvxMiti7ekyLs7SMKuDbyJV6vYuaV4Fj5B76Vy8uoZgKitegQ",
  "key13": "59JWVprydPMf616NpqkjCLyskjjTsWswGrHoKqmJfLehgH35HAG4N3mYUcYd4BzUknhvRFUhUWbKkXn4z9UR6aTQ",
  "key14": "3p3Uxp95tc7vpP6x27m8mjoZ8u2Ga5jHbPEHZL8rf1GS1kGxLbKBr9N9kb87judg1LiuDAFRWfHw3kJKub4udcAA",
  "key15": "3qX5Vr94vZX8nh2XanJDVCpfEMW8GbZbfW8DL37cW8qwoTfrUkmLqJLMrzoxzqbdkBBwidgTBrK5YFMUtQMzRw6D",
  "key16": "4TkPkwj2RBrpNFH4rwvgXMjtK9gkr9rf3PiXkLaCA9ygSN5eHLvdGzSHQkkTv9DzknQ87DikhJCNsJwN2TGdWMws",
  "key17": "5gPXpsCoufDa9WG7HyHR7KNBsMnupvHB4aThbWJthnvgzaectjAERoWWZp1gL9tLazLukeag8cgRMjJupdCUVfzT",
  "key18": "3pgMDazaR8VurwhGw4G3CtKfbMh4C7UW3sq54T3uwjRFuaBYmiJgaDUzUWs4fmKotdNzRhj1tUHEAR8oDrLm4M1z",
  "key19": "5vQLUo8SbEkmZCf9nHLTo262RqfGdnCaRFr2Zpk9nHDw4iGvNdBWpbz5DtFdhH8cguCcxQukwwPVai5ujPNMHrEy",
  "key20": "5oXv3kYW23dNWKQwzfURRDEdZLLy4LDwuBiiuGjpmPBmKNk86MMmcNhgfPtAaHEhn9ZZQdH4RPn4KbDZuHpYnDq6",
  "key21": "5ciSowuQpF99Y7WWkb6pwenWEG8vJUQ7rDiLKhfhotaqhLAZgbbhagiy5Q5W1nz4tosorRmx5W4A7GmyPAboTDoG",
  "key22": "27tJSfMGgD3iSoE3dUr8ji1hJHTW56jXxM1UvDV52phFGRzH8bSiwbb2t4zXRwEqoCDo9dznAgMXQ9KtaufZx935",
  "key23": "3zCueJEdr4Eeh1YuspTUt16VspoMgDKV7nLcKPYNyrDD2qcZsyNYXBivKcFrQmEYYeUuXtcAfMJ7votSzdwkfvP2",
  "key24": "2LksDe9Tbu8HaZ6WvaJZjokW5wYx6aLCifpU7AmBrRQ5hXTfZr7cGJ2VV8arExKoVtE1SHRrEm1UifKSshxuMKi",
  "key25": "4zcDTxjdAiijw5iaFrEqFrmujtbeaESJXd3USKwBThq7EfrBXYyqN3aJizLQGpUgLRiCJ4nwQ3xaPBzX4ripWQqi",
  "key26": "4oyZzf858Bxu16JkLtrZNU4pY9pHCDi9utqv9uD8oUjdZV1fgssafgKK2r9ZJxx8ttYC6qncR6Mdbyx2PkSow6co",
  "key27": "5PA3at3xwLKpnLfaF7vQFJqbvdBRZsN8RTZ2enK4dmf4o2L5pBY2iiot69Ytcv4FMffb1P7VrcouLNMwfyiEiyMj",
  "key28": "3bDpa2aDFZ6CW3ZvDuUXx9J9nyMA2ab1PQHvvJmzmzjEhN2GNivkcNSfSQx5fhEiA1mxS5KwBPJR3epH3YPKYjNr",
  "key29": "2qihSjyqZWLnBoVrGhePgT5X9Ttf5rpTsZFr3FdwUHRfpKieusfDHRJHWA91iNUHnr2gBSmGU1htpyaNz8zS2UwA",
  "key30": "4WNZyKeqRJLGX1FnuLfc1Dso2nPapDsCN5nGfFxuhskVRvdKfGqmijHe7rkVBXhtgmZsJFcThHbpR7z51utjBmUJ",
  "key31": "3DPFPbc31nbpeWi7o1XQNz57vPTeuLVPMuGQuT4ECV1EG5ds5xvZ4cAm2i8zk3LNweZhQg24oho49zdjc6js1jfs",
  "key32": "25Etzbgq2cNrvTPoc6G1zEwEhyiugELA18ei2GgLDSkTpSQ6THWmG5DyeosNnxJYJCZZdGLhpZktGfrTUD2V9riZ",
  "key33": "3ch2AgUkkrNNttvyuGbnQvTdp4xCweXtMTdhLGwhnang5cMBTBQU3KXvPLbrdhZJ3c5zoCPYYvmnB3qgUVM23jhb",
  "key34": "37oPi9T45RhSTP3hTtkEZBuZTwKZyS2b5WC2UBxdAtrJjNpoCVyZhP3DeCNVCY4jtMfg28oD8jAPpkKqb4ymfXJH",
  "key35": "4WpR8xArD3Xgq823UJm5mZWjkKeD3wYNkpcsGwRpNkb749uomUMnN3J2UNGcRAXiQbdWn235LfQjRT8MyBevghZz",
  "key36": "4vDP1eADNrnsamxFPFJdXuKhpxYb6HPjBa4SehrfDMypZT8mRPH2CbVhjGWoFPT4TcmioGC9NQe8kpfVHaCRdA8x",
  "key37": "2EGSCurLKoB7NoaBgUgBHHRkhnY19HZdUMGARKvU3gfbcQ72ErVYb4cyQtWoNw6yiQ5YbwQA5vBKZKekVE8TDvrP",
  "key38": "4kDP7J7zitroizcvdX8d7D5Cz1Tj2ve5j9mVbsuCXtfDWZnWvMAGqYVjUNirLAx6KMwreFmRBLmg5f2Q5kWLY3LS"
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
