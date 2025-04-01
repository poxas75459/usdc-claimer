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
    "4xhgpU4shhBfgojPF3cMBuDXGdAQvRryyCY21MXW5bizRHGGd2zS44CkX39cnjfMWQgYwM1datiuMDpf8x2ADKku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q24rCJGmSWAb19y6B8tUSdKTdoxPseNn22PHVaC7ugTbKNMuXDwnowSwqRovZUue4aDGbqhLFo6Y4oNEbinNx7x",
  "key1": "SohD3kUNdfZued7UHDW5StmPggX1C4vj8CucH445oh6sstbGXwvLTyUFe8jR56VqDe1T2595dnCFAho64yBxwve",
  "key2": "vCC9s3meFSRfLchLLsiyUPGUJ5aNACLSVyvSjAFg3m2T9jT4mELJaEjD9kNUP6JKhSFCjojhABqoTEKqj5hMooW",
  "key3": "23Gcxm9X9pCn4TmB6y2Ag8Q3UmKx7NupRWQPqa2K1n5whtHKizu4UbwpGq6XrzyWuNS6Qu7EPGscDwN1drijYcUi",
  "key4": "5tyotKMLg9oLy9miTX7gyVf3QHp8Q7QVL51dcDXmcydUJDgQof9kPUdTofoKLrPsUXDfhoW7tZog64qgtEJFsV3N",
  "key5": "8MX3udnugMmBEnk3XAQvRYxtu78cxeJGp1gZVVUWAARNRdTqnP44JbvMEV7rRwEKxQDZgq3eM5cT24tT3b5DNgc",
  "key6": "5rxPjDTTeKb9GGYqukWZNVSBHMPJF5A7hnQT7pjkxLPp5LXtsYUhyFkX8LkZA1b9nDFRmeVidWqUB2cRCYXifFrP",
  "key7": "2kn5UYrN4JefFzZYPLGjbGS9X8dfHZddBfpxoJxanJYF5A2KBh5ZzFkmgcDaAaPoFVbqgc7vFw8AABjspD6nXjWC",
  "key8": "2da9k9ZDYNyLnHADu9VSUkbhb1Za6dtQx5f5qsNBuhAqocZ2sF9HLg87QJ9T6T3oWMij2xm9eAYq22LpRzucbpcz",
  "key9": "2Rvit3SJoV7hwArb6SbrDSJdeFMYt8n6Zu6zHJYwjT9zgk4qvqAB8ShxPcYw51z5Vr71W1GX2jxU6JmsE6Rxzjpq",
  "key10": "TBsh4jPS4JgmmjGCTsWcGCkSzCEpGybChGSb1o7rGTh6kqYo6kQXo7V8pqQ6BM2ycvVgjdFe2DDKT2Qd8u8Da6s",
  "key11": "3iN6LQN5c8YFtDeLoft5RWWjjngRQVD3Rt3qYRzuZiZ14wJF96oC5WNKYGJiB6sFx1JzyXndMtxj29jb6TxPo4K8",
  "key12": "5koKMpzhRSJast9TsSeqqsMgFYeRbY4d8PyVDMbLDhfiwebh48FxJCgfN9N4tYhm8aUYUHrG7R5i5Y92xdAPicvd",
  "key13": "2wuLdmebPbofmAfThcBGiZEca4exJYYbkYpbuL7HtKN8x97fkm6LabEvXhGUDQDsuwzu8KpYpnK4fRCq2VmjtyhW",
  "key14": "2AY2nKGkSTemPL8MharCGFMAr9ZawP6wnEqARZEzd267MyLiSSnrB1dDygwB9t7VnBTrSYUkzUZ8aRB1V9EyG8pM",
  "key15": "45MPdJSCYwG7GjN33fsVmpEHKjijgLrVU87K4gCTjKHUc4P5XMwPHZxMxddZaXPURSdLENdaohRkEWs87UJJCPXX",
  "key16": "UrBvJ8CYvoLedtSeQd554vMhk1nBbZcuWjEqv6ErzNNWyaPaWurp6a4wvfkG5trPYst6cygWZMRHC9tQEBazthr",
  "key17": "5VddRc8ya7ScxbWZK65kZiqkfZ4qENsPYaSQpjr1dZwAssLgcaCRfXFArqfgeMCLkpxCvGM2SW1XneQc3fv8YjRj",
  "key18": "5pR87oBVQfG1RGRyHvs18NiaAsSsfpfLSXRw8Boa32vb2xqydr1qbF53pDQsHjdezPjbybMjmPrMdnQULrJPdXA9",
  "key19": "3rSR3Q3nXM5KeP2TAW1327axdYsKZ2bpfkt4WySdj1t273RXUboZ3TJKNcu18GBoKfYZvkQYXudqDx95CKdg5biu",
  "key20": "4yp6PdbALjy5Dnw6qUQf1YQYZbx6J6Z6Cwf9Xv2gMEQGuzKA7859TevrxJXi2BfGHi4vsgSbRToM6GdGiMpSC3EZ",
  "key21": "9zTka4sw1Q2tZ2XV9PYhEDLQkMaEE74f4XwtvXoNzzNbXurxbhA6yYKWv2k1DuD1MEdruDYjsrjab9bLq2nctjz",
  "key22": "3ejtd5taJV3v9DkjLWstLJwQMW8uqphiqMTHNFbjfDSJK4uCLQsPyWipTRpQxNoGqkrXweeS4nEeqEC7xeoChNvQ",
  "key23": "5sqUtEDVWb4JevrsRmjTa4LNXgje3mP2BAnPNhNFLCfCrJ4xyaj2LXLfUtN3QnJ3kS8zDyi7RfC2fLVJ1bGkhmv4",
  "key24": "vchSBENuS3L5cJ5fH8bdTPBaztGJQcYt53guiR1pUTdbm6yZsckKUQx1PpsttdXFzuK9fDHbw4AdbKBXrWx182t",
  "key25": "2gTBYgknnwonQWckDbRjGP1zP3ELijnBmefHdXjCK4Y3cJu8DpS89YJ8uwSGA7ruH64epUYr1K52HzG7SKSRxFSi",
  "key26": "58tmUdgAND1Ewf8SYtUp78FDJhLFGNnZAMheeSNtKj9hMJv6m8iY4PnGTfYp1tmb3ZXyG24Damt99qhaKw3ZjkcH",
  "key27": "27XcB5Nq17AduxvYA9HVBSBpbS8fjj7rzDndCQdBXJLPhDH9GYb682vtvu9i4F73W4DPz3UUStFGp89DfdSF1zSG",
  "key28": "2EKEVawDs18hBBMFaQNEbGMaPeodWqeqpfx28WzTjKm1kK3e5R7MWMEEtGXPQ6aSu8eNqvMZbKq3JNhFVNQYJV7J",
  "key29": "xSxxD48Na59axyi9tkzsLVQaRfWrM1bqQzjyZBneQPvueepAGXwLSQcpeRXjoxKkJjPDozA5Q5WPcC3adMf7Y5X",
  "key30": "5BkS8A5Qrd3LdTw7NUeSmWCWspE81bFDU57G7BVPZZAYyNNELWBTboRmrZS2eq5uwvHzZ7rugiveZVqSydGtVZTj",
  "key31": "57SVAv9TMBrz99RF7AsTczAqRVaEUqdRjaMvViZFTMChLXJZzTJetphaPS9rgDfThz6nJSeM2YqdRu4jSS4EBrdZ",
  "key32": "2faDvHroGkEF21mzEVMX8Zhvx31mFMc8MfcKb88NtwsxvzMkC7yCm9zfavWsS1D8aSBRRv22CBTYMpcWBv3Qkuo4",
  "key33": "3CN6FyPXXGvHCD78cs3tjD1EXf3yQA7HEWa7wdEDnD2zsm31ioiiVU3pZT3L5tSo2Dub8ViHzWiBWfqG2h94nqJd",
  "key34": "4Mqkh2s35H3nHoajwzWxjcRF5iCLXXrQdECw1bEMyW5pgmVna2HEvrTH8S6A2ruUhbiY8Hrnc2fhikiEDgpW45qE",
  "key35": "FN8LBQ2A1v3xof7qtc7E2YoZMAXB53U27jVYohD655YzTQiRFMuKMFNh9Ba1Ewby3tFKEq7GuAHYYY9XxBYZb8x",
  "key36": "5jWaNyZGwJ5J4Zy6mHRgzC4EpowuH2KpB7t4nZtVHDyZAyKxmB3ocZoz6uApRUsBgDJGtkMetr8RqSB6pR7Nzo2c",
  "key37": "3eiUvxD574shwPQhsonfPU2AwWyWCRZUK4UcfzYvVELgoaqnrUgjxgr6GzQdYGxqRSZrbgbSdfdV4BXdZp1ngcNF",
  "key38": "qA8GRbDMvsfbBPE9rE8AXfBmnUbAJ4fAB4EZrStgXDPj4SuDeFPks6WxWhqBQ3E7hzhNVoznZyg43hGATrq9vUe",
  "key39": "ZqbQVhEq12TKjKUeXdQxVgJQZKr4cToXa2W4TZnfoHxyydThdfD2yEx9u8uneEce9nRgL1UtT6ock8prq2Lp9GE",
  "key40": "3RU8Ds4VwS3sv4eugYRGhgVP4fBzU6v82YmrNrzk4M1VrL85PufY1UbaviAzRZ1YETsrg9xX8PEd4BwszmTgtVnB",
  "key41": "2fGvjuWD2pNdMWqbgEwg5kSRHB5GH2vwd311VvDWAs8ciefQLiVaVff9XVrWozu5byc5TX5YepKNBZbyK5ieYnnA",
  "key42": "47YLU6mznP3kMTUv8yjccCGbsZPE7Pnmp6yFCdcjM79umPJQrp77Jt7iT9ZoJdqEPRbnwNtYtmVNhLxE4sacGWRD",
  "key43": "3LP7i5gFxQ8EDpy4Kp1pWzH5ZV4EhfF6X92LTPcejhfkVbpdyh1MHknPL8C1XsMhg82YVe7FJMKxKHdtNPijuTBf",
  "key44": "4HkEhRwHsM9ZXrA2Jc9bp4dNHqBSigKsuKFW3AQv3rPPu1Rxu9WoNvBujnfGaJefA14pnuYX5ivJpZ2UWBhaxinq",
  "key45": "8Pn7QFNMnTf1Gos5cwmjU3Uy83XH4afeFCPDkbrM8wPgUujgStzaFj3x4nQmZ59QFSz6KUWSYWycPAGhj9ZXq5p",
  "key46": "4ZAzTrewU4ccXDQW2g6cUAtdkCmzmsL8nUscThP7bwnpA8GMvbCJtFgJrVtfp6JVSZp9ryX5PvvRZdbTqi7hC7Nb",
  "key47": "2BKdwowrRvZpiJBpg7Bu53F4cUyQgL1FqYVwoDk6HjfX71Vka36QX4xZHFqFZwsCmmVcos12bess4fKLtPE22A3b"
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
