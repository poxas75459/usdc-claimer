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
    "4QGqy8mSK8hZzPKq4MaLJCf1hdvrUyS2tH6jDi2GVUbSqbn7AUmFD3nCPSz134PqFgR9QehftWi7bqsW7gNna2Xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ehX6ibBoNmx6U53DdbqTnaGVuhve4ApW5vJay7uGGMnSqCXKQko1RKwYR8pyiTqrsPWa6wt1kLheakz2nQZJTCA",
  "key1": "3WhNJVuCwuonirF2auYCYVwgAMp9HdHdnckqkwR6zwkRhofog9ezskAt78XZ3qEk72UxPXVFDwRK9d6Y9UL1ESyf",
  "key2": "3Z2LEb8zBEXNGjVMDfrDQDEnMGdQKgebdY7p6qmqZA8Aoy2vGPSAsrqaMTEvQTJhj2Z4HdVzytjEC3nVbPyKJ7pc",
  "key3": "5cb5qX6nPeBHCM79gtteuxkvNgDYrNnBhc7eLZksxebwkTLRQtaUM5mEQShTKwKcWcqpeXSKGGJfHNSASBBCXy4k",
  "key4": "33f2j8DGE76ZvBSLacELCxF4i24CWCjS9KwbbAHU7B3fiKy6YaD7JN8JbZSHCrNgwqa6Z7pfsZnkVfLBeXmQ6NDn",
  "key5": "4RDJgtbWSmVZJUxmLtYQhqk68rHhsbkN4tDsvRX7mswpUijyCwivHZsfk7Vzn7Edrcv6DoKaxaCjfYbUu272TtfU",
  "key6": "22UJ7HiFtAT6tj2dLSgxje4z2uSNGvzVCUJ6PSUWsd7EARfYckJSj52f2kuXecCk73weva6gmYL4iMaSK2njySEG",
  "key7": "4291Vh1RY9dkMMLt86DnGJdPbwQGcd6ijF8AnYb9vNabgdfG3EHdaYYByF3pDH6X25PNvwPGuSJa85LRfo6ajtjU",
  "key8": "3Qg8TX1rTeQZTCXM9itWWEY1HCQnL2TmUBpydzQvjRnvWoj1cmx6CRqWiqF8m4QCNUM8kBgsWjxyinwHnfEq32G6",
  "key9": "sa6NNGHoAxZhL35Wpmgy71MbhaciADdQ1sjHxnvVJMuD3VpbC7w1DABsQzdW5kV7Z5EkEdwyPK3gW7T4mvuWLSQ",
  "key10": "5bv5Fjh9uvgSsFyL8R85ft2GD5mjvoxDedvoBo7vuG68e27uESmX8FR3gB9LWyxWcYgGM68bkZUN1zanw2RxNxG3",
  "key11": "388F1gorDMEPXtSfVEsn3h8yFuyEGPCyaGxrjnkpQukVjZ8g66U3mk7WyqNPKMvkLVvegSnHCFwmvftPiTWte7sk",
  "key12": "4t5tRpQpxUAHXMwReyLkeujLbTJuZWdoPRiwFFTbRLceGP1ng4PsfPZ2CZ7U2E1oryuFcGxBfrUBWxjHNt98aQkR",
  "key13": "65q4wbtuTNcEYdBF2HbfKBVRL4FixcPpCHm1U75M7WZQvMhizMqygGHLyTTAytPSSA6swN6cvfWPzsVoNgh1zDsz",
  "key14": "2fZC3udit9erFeMKULPtc9SqnQ37bzue3RvLQjb8ugZDw8Squs9s7C5FmVKZSTrFkKStwSrZrmzUsBuzvyGrinaB",
  "key15": "5oKvQA6jNUCwxKWhUR4YAUMsAchTGyYomzEjxcPj75VkcXqmeT7csmM9Ppx7DXSmBbaSGE6cGYiUwtTeGCCVjNeH",
  "key16": "cBr5uXDkktVqQAsSU3cdFkgzikgiaJs2q6f7C8fcBG7RyAArZFgyoHs6SikigZFNrHE2edEhQeiHXamt46ThEAE",
  "key17": "3J6ko4CUNrX9sgFHh1K7oExgujeH5AfzWYj9KSK92sGUbZJ82kpxQHafrX934R6vn4bMDosQSFxDz5cFyTmYvatw",
  "key18": "k4QDwEytg8NxcKyRcjrk1fynEZ97kWJreE8ARxsLbvZFu4vy5K1xsxeDnCEt7XqbLXfRff7img3FnMNHfSiMLKt",
  "key19": "5wuRFM29Pp7VWZYe9Y8bw5hUCKsv6uvXcwSpkGaXiHRyAbdXxGpHMAdSyp523i4oR1ZJcQQUE6XsWVqeT65d1yGG",
  "key20": "3mQBX2sEDsuSWqFtTWw8aXfZU5wc1WDxKm71AV93CG1Hn77uiZfy51PGg6DbuGwf6W6m1mcnnY5QrFJSHbMCvfUh",
  "key21": "2A9s2GWV6LotRfj7463WvHNXeddvdCL5V6UpgWwtsiZTNYHALtyRH3JE6XPDDbq3ZBYtjnVAyQsRXVxkvkWee8vc",
  "key22": "2TaPRNHiWkQi5V52cDjLGJNwG8maiDeuP6f7Sw1M1548LcSCS8BZb3G87DnrWD44hE9jtNFMGwBB1eK4kuMnBNZY",
  "key23": "4TC1idAb5SEDLucNsR2ubS4WPQCyX5mXNRFSFfioo87risW15X3Ff7Mcf39urogMQjU4ujpY3yajDSYm3yj3nS5g",
  "key24": "2xJSTDT8kk5hTJto3moTyzcQiyYDRowLEQKLYbivSECGCY2Fr37w69MdnYgk3GmwHfMwyr9wceVcoFQT3HdzPc5",
  "key25": "3idY91tr7hbr77qiaz2r4D3781WpmuR9WyXz1vExdMCgMTDFw1uPqy5St7urmp3Qnyt89AcMeJmtDtg5boVYoMQK",
  "key26": "ysyT9Acsipd6AR35TRKuzWnQtLvqWCzuvD5TEoLMGPDQ1mPXFCHkL3QXeiUbVGEC36VDAP1UZD8siKbPeF3XUDW",
  "key27": "4rwUfDSGa2qAknBNcYwSEVDcCHyGrbPPBUm5uYXNv6cAdGn4R2rNkmd5SYJp4JBvrwJ8n8Ha8xMazzZBJ5JrZJm8",
  "key28": "5Sh6yXrBnzAPPQ3buyVutzL8EcrKLWm1iJn4RQWcSvs9vSdKfekuNV9YMomnWGbC2t8uS8WJtu9QPraHZLUVA8Tk",
  "key29": "4m4zL6ntF93ANE657in7eZxMWe2fpRfL22Qoxk8ScZZVZpRp7aZsB3W4FYosrdnKEezpouUTV5mRMqCTYx6R2Sv9",
  "key30": "66U1hBTxLkhQPt35vksfCTiS5MPMMjmQZaWRzy6vVoR4Co1RFKQcNRRFdkGoBcHDXueWQVUim397SzKMK7Pao8ao",
  "key31": "4jF4LAE4CV8LWrdL52pkv7kh3Wpr3KATqUQBTFoBFFAXfBkUmN8XwmehXFeoUZ2dWpQABUqitAPy6YMh9JbsZBSH",
  "key32": "2zSX7cEYuKHEuFYuHPfGU6TCBuuTViLfDkqPcPW2nb7cj9MN4TSKmGuM2EZsvB8LhZPVTt4hk9CFgXBk364x6sua",
  "key33": "2ToHBeCv2tQqyrBnmZDLEjhSLwPbnacgN2DeimCYa1aMiMZVF8Rcv7kgcNF1SGkFvJMrsRhpYFjWkCR3bD8Dbevq"
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
