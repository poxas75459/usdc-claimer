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
    "53BPNTh9JEE2CR5BbqZ7eKabRACMVU6u2CVDAGe4hR5uwHbPp7CH93GV5PYqvkA6FPaqwtXHLQmhe9Cv7UQc7TpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QwVbYPTgUwSG5X2i6G1w8VXnsS4jjrje9SbTcBDZSMEmP9imiZ1mdYesD1mLAYN5SYMJ45gv7d277M7qj4MacZo",
  "key1": "5mKkoNnEbwH3CWyBE6g9PJ1mS13poRgRCAtujd2SbBFH39RZkzAwcu31DaRfN56NowY8KeE8G5p3eREA31JgWgU8",
  "key2": "5nEF17Rb82hvzGhtWXXGFDXoxHHRM4AZzuVx7D1AhrAHdDc4dMxNqbz2d9cMUtJGoRgL3yHcgArkCLHNK7WB5gRS",
  "key3": "4hFqqNsDNhmHzrh7BYiUt867s6LBngh7TZMzPycD6mr1dWP7G1j77XXV1fBMzKta65XPbXaY5UkpGvF1Sg3hZvpz",
  "key4": "5zDPDpTSnvXHVZTNfSsjK7QsVBGKhsWshBmq9gfb1zvS7sFbhRH6PA7VFytcEzWBSfuW7SUAESGkA4LEeeSuNM4n",
  "key5": "29HfFjGypuZYLexCyqsjAHLt9Puv44vYUu2iM2eA5JRpfnEkH7gxx4vg1qTL21PDqfiEMnscRkpvqdr48tYoMXZT",
  "key6": "3sZH1QTdaw6PLDsveDm8D5FtpQL26qn3a4TX1xbwibktfYwuXXAWDPKSdL85edXHEsncfnHkx3mcZ6393rbuvdHa",
  "key7": "5DsKkfXuxSzjNybTFVSjotp7yF8j1MHW6TJqWest4CWjR1mJpoUKbxoZhBsXQY9j4Yc9tGRfVveGBtNamPGBs3Hv",
  "key8": "5SLRxUthuUWntBN8VSHhkZKFPrTZZ5M4zjWLrQt6uHhBxuM8peU34Y6A3Pe6UocKVa6FKGSb8E45ZcgW1fFNPvuj",
  "key9": "ArcqADGYwJcT6MR9CiuuvgyQeZ1tEvDZP2LhaQF3wJjWuThdARxJsKPZwQiUh3CXuPToFyz7HN63c3rpJDUt2P4",
  "key10": "4Fo4WF6XpYTdT2qQo1gRdiADB5kb7UknKh1zZhbMYUzVFMwNysvPYHVDxKMcEp7PfxrxHeAfKqmwCvH1GjzttWe4",
  "key11": "2ZPrMwUmtLVmx295FsNNeoo9wMX44YUy2Js1kzUZvrhmj47CmSCyZCVDn2qLPDQWDdn9Kdyvmvkrv4k1VNtrHazn",
  "key12": "pRigfxX3mrg9hwa2nFvt6YwWzi6JEi3gcQZM6K6UNRwt5dh4eMZNZhxwxnTnMEfGHACYos2sA69KWV4RZT4yePy",
  "key13": "xRZfpHupE6wtDP6MkHZJvXszkax7bV1cYevE1JiwcF1tzWHCT5Af4KmT61kvEt5Hoi9h1dxXrmVGPtgfUaxYZwE",
  "key14": "GUhk6ynaKE2B6ZiMt1skm2GgMtQepowNNSbrTxY4JPFYDB8Zk1qTJE3ime1nwwupMbvLursKMhhBExpjF1cYXy6",
  "key15": "4oN5Eg9jdzuL38TJrb6oNJDSZQVZhRBsM6CAvPpfMTg6L145pRdFgmzELFEXLw44VSdUcZyBX6Cp9oPdpfJC6BLN",
  "key16": "5n1dmcwTeXggDWSRzjaqR9LtUaTa28t9TN2Tt9fzMhuxQe83vEWDpuCg4AKnGewwwePgJVAsLfmnADHs9FvSp89p",
  "key17": "3h9veurxT9NZVPejsU4aWpzzkQwudUEGGmmCXHz9ugkfPbdAGJcupSEUuVyeZGYQD7N2NfL6ESzu6W3ZC8n55ptP",
  "key18": "3egoz25awcro9nyUwVopm5LAVG3YzyZF9HhTDww27eZyFfQP2yFwa1v6htVAoxXkUBkx18Q63wH26UxMvtKUyxF",
  "key19": "2KY8zZrLd9veRu3Y8xdees2q82BNeGi8Q9oKGWogEHQU4eT6NEYLBUS26VJWYddTWgFpQo9e1P5JGfWxNVQvLQaS",
  "key20": "3aAxq8ztLFMKj2JQBbGVDRKtGDnayr3gxRPfPzuLGuEbMGqeoh33uiWBZK6aP2ovoEShP21Eu8o3owQim3QghfZT",
  "key21": "7wZyVKKjnrTezLLAGKpww2edU7CGqjkNbSKuZfmuyhCXejfDpy2XsaD5FRmuSnbpXgDj6VUGfz7spcm6jnihNhJ",
  "key22": "4v6TGFKB6GkxQrfo9aU98EG5jPjj284FCu2qSZHrWzSwR3KGtoEzyU8FxTRTqA2QKSA3d6jcBxoJpKQXXRKHvYrD",
  "key23": "4h3Y3ERi2mbhT9EL3TwrYLjSHFPUSoK4DDBKhZaYhp9zq9HB41m9D5eZHuQUpCRa4W7QXH3ndxBDG9bKsZWWRBsG",
  "key24": "3b4LMr6ZAktckHfGHfDbG8FKZSp2zycEAvzK8CX28ciMiMuJTh9y4haKt4FMSydgRKztgXJ3vRmiikzJ3BoqmeB8",
  "key25": "5LjzFrzLLa7LTXAEmZSYa6StwMgXFvPY4PXfx9qmWka6ngX14RUoDmG9eehnSoesmQ52wcAh2oe8BmFfAFZ3zyFV",
  "key26": "4XWvWZVftSW2WXTaXFutKDHxMU4xFYJ7TvAGeG6dGJ4db5sRnQ89bazTc5TkiVmcKABWSMTXBCMwoNTyhBMZKAfk",
  "key27": "3kxqoVSSc2VthcLf1pXwcgBLYKxNAyoHQbMtopRQ1BnXuJz8yLrx42QMxmp8oMgDhbq8uaBqLLT128bTLWKjLwPb",
  "key28": "HjuxXS26ri3n2VrkP7o79T6bX3L9dtJimL1W1vR2HuwcuTngQqRc1CyyjajEbjXSQEL4YSF6h7HVL1CWRjwi5iS",
  "key29": "2QGPZw737RkwgPAnUNvYQWBnNAtTwFSzG8EMSQ6ZTBKdEQyGjHJ1yXJn27kUDFGqFdBGkDm6qr6SSkqZNTGBiHCh",
  "key30": "4fuyJvPtLJRH8KYnPB16DnGUWGWVhhTH9XcYZ7LMPpBeEDamV7zEx2E2ZoeeMojSCcNraGtpSydPC5yhAzVMFngV",
  "key31": "2CrEybxi2XfLgnKKBXXVQFbQjHp2FT8rTbufT2ku2xZZhSoCNr4nwFLL7SaoxrNq9S6i5xqp1Z1L8nopBCPmB7AR"
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
