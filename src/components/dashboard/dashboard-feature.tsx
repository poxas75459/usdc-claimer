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
    "8J742sCHMj5qUd7biN6QzQYrhMYC3Pce8BbFgY7nRsaBg5ksXjcZfs9i72sgQDF2fQLmC5BB1ugPf1Er32qYjem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NwKkMybZGcDAqm7j617ndthzJQirwBaDogWoE2Yt3VtpDtPzBdFawjKy3Wg9VTVxCF95goHxeaGiKasH6RWYww2",
  "key1": "5TiYSaMHQa8iuNzndJbwqAAx5At1uHD9xDd2YParK8nwChrf4FJERSj9wV7d79kbQNhsPPpq788hh8iLr1KAw7c5",
  "key2": "5oDjWdj6f3cAAuBmB2TUGgSZ1tZGGptJpohna5jsB6iSBicG7zv5ve4VXU6ALoqihRaRnZWuyFUo4p892BAAhh8D",
  "key3": "753ECaX226XY8nFSTAgH8TFjBz5mnY2B1zAs7fGqEYtpmHbgmyBZ97t2m64dfnFRemGLcHPWyn8XUwtJcsQD6qZ",
  "key4": "5yRrtdMYzeiKxBjVLWjCvnnvHYDkRKJJ7P1UTSEDRV2giHQybKF1tr5N9DTBdwDGzsPfRBpZhpZNdBo2Ei8fPmNS",
  "key5": "5v5rdmTgDWuzDADb2WFQv6sTfR6TQnZYD4F2YHx7pjY4wE2kJEdhK19dZgUGSrE7ZHAhg8r8Wiqwsq8tBTA8Gxn5",
  "key6": "mU6333bjTPrAPeUARaEv61pT5i9GaWvGh3vtSpSqyzhdrdrn9YwfcYNvE3FWc6kx7JjYt7L1Sg4X5ECb8FnFTf1",
  "key7": "Qfc577Q4h9WE7owiMQsfd7tZJX1N8Wd9LNwXeArm2naB9LiyXw6kQVK2KCf2m66uZuYYkKtUSa7aNBUCTe75HSL",
  "key8": "64V96g1eRdWREJHN5VZcndiibDencoFTLZUjwn7Pmhy1vsHtXbxwVTa1XSj82zhicd8ZrUjBXURqKgTKESCF7MLW",
  "key9": "5cevYFCy1rLYoRujn88k8vw5M7rMVUjWTu23N283vDpvEH3mp5Ui8dKymzqQhPWpdG6A3ogfjd2H4M11gqE8Jk4b",
  "key10": "3K1BACy17ncfR637PgcSXB8ViTdW6qPKq3w97uybootdKfbeLpdVvudNhRWdMGGbNsD5ad6hnq1A9SvHSvDie31a",
  "key11": "2p5BkDNQnrPFFxKVhjauyhhGgsXhmytxezFJRXj4e6hTVXV3FvJuVXWcXWPwKBV4bGefDMvnnTbd4TUH2dGoyesJ",
  "key12": "3NEDgpxFEyxAewDmbs6GiXfkqR92DAXPpiYg1bLHuXTyTrpgKwQaMQUk3osRSgLKLKXAZnG2nARQ9bkVobetVUNm",
  "key13": "BHuGm7KXSECJugbLwVa1fWxs5cQCrLD6TkV3P9MVWBjr6bQuUjvzpk51TSRKQF4Nmmm2sskF3U3QctsSc8irvE2",
  "key14": "3cgFabnp615DUb4aTLhNTpPKrka8wnvP5yeA2YazqmRmeY7trh2n1S6xMqPbzaMwP5y8V9cChNu63NarC8kmVxPn",
  "key15": "5M68LaN6Nz3PskYtBGT4kYidaF6Z5gqircuRUr8UgnqpbU2bWU88cKtgdSW5BqHaFkR7Vvy5kU3ZJ6XkyMyhAdGM",
  "key16": "5pXRUJxqXmce5JSbxMMiRBa8iGn1Cigjnv121bbrCx4TFPWPG549MxV4aXLFfucf879gHZTWSfxth18d85UF2GdE",
  "key17": "3m9HCGoSc1UKxKAwEeW8SH16ce3fYX7MNEv9Hffr1fsi2nvzbRtkj3EugVuWCYqpAWUUiibQ9ddDn82MhCKBxVFP",
  "key18": "5LAHRSTXFVmdLUgx1wMfNNMTivMqrpLZpB8EfSA7fH538j54ykxHGuJ2vtPxg7iSy9JA7yrde976mF9DBKbs8uAn",
  "key19": "5XkkZMo45yiNNhXRdbnDYEQVTxgcS6rBBi3194GK1MWN1kybRRAMPp666GnQeyX5ABTGKiDBFvtYg2nQpXSHG5Xq",
  "key20": "27y9dRnpzfjkffyfpXogs9C1TcwoxQtDRyYAvgyd7h4PEuy8vCqPRNyLwhnoJ7qsNgDjRPhxGK9mVJYTFiGyQeM3",
  "key21": "3awes6hL7x5MTohBU27Y5DaJit41srTv941w1JEiP9BcP65ET5cC33K8fLzcn4uZUqfNEsPQzdTguVFZ2SZP6fgq",
  "key22": "5uFJtLaekcCgR8jpkq7hcZWrooPyxNBKZ2FQjn9Z8fKqVfkuxn9bPrXqVPtKc2HY8NUKGN7bJsk4fF7ELus8nDKn",
  "key23": "3A4PHn4Co1rAkQzkEN5D1gWBtFVZ47CC5pB7ksDPeD5aKRDoJ7LT9FSEVBc9ANP1giHhwQZoX2yiUkWyegzDJ4hx",
  "key24": "4UJp21iBpiBepzzYHxjFhePBieMfo1oc4BG4g9JWko19dzXgdprn92hAB2oF79oRCHeLyKNUDfY2zNkRAtid5her",
  "key25": "3jDv1g8Lc5WTmAK3Km4nHbAJYYVqDh46dKXvQgMw6HeMnzbNzqAoQeLZKHzbYiMEraL9kNq7ZvTRtiBCLRcTomRB",
  "key26": "4UfL7FqFrFvbcxStsx75ADuhAudQAmNbrEHC1qXzQ4mXxSCVLfhjDPYxMtWPgmSt5bH9fudqgjzVBqH6VCgwJ86x",
  "key27": "3bgyMiLo7WbVxYXTzBDgtmgb6fAnc96GNG4RScTh21BFDfFmr9FN7FGhNLzHjU9ZnN4Axnc3ttyKyErrZCzrPVPG",
  "key28": "4NsmXAdJKZXrXhAVrhZL8TPSTsTT47WKBE8ChS1833gTiaJ4apNB8m7SQ4M22BHMQiDgRpJu1vS7gDqzPa2eoxbQ",
  "key29": "49v4xgq2qidNoK99JDqtLzz4wJSqxqnyVJCkjR5aVCkeqfkPavw7mvuZcV8V5eK3TuwNhuP22qXB4m4ZhDuEGV4q",
  "key30": "33BM6W6vNRmHwyXdZWy1JyLcttFJbvPPLNd41KFeoUavDyjySo9Dehk9X1WFvRF7wLgRvG5RWiBfUvaxX8UzRjx1",
  "key31": "2uMMvL2A7t44AYn417BL1ZrsBinwYggDy29p9yQQW2xJWsN9naB9aA4Gskzbh32gn71kcMCaGfZaEDXmpi8hehnJ",
  "key32": "GK6bD9bTmWtmtAedg4LKZ3xWBh6oY9SmLYC3YbhCJbuzeewW223iBwYVQHpSwWdVq5gD2ss4k9eCSaybsHuVSNp"
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
