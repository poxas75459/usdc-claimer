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
    "5uJp1t6gnWqWGdx1XdXkKbiHanEKki7AMcbVEU7iAS9ikeE1G6cv5kVDBsgcajDKa1Uud9BsRVn7NzXoP6TBJFXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2YFcsoStWniVWiY59en6WJ8QxMcc7BuAw759L35MnkFdq2ECTxnUcNkr6nJkzbi8phQg5mpuMgbWjsSdrsFRrz",
  "key1": "3BkzeThMmGae12VyYN7mNocrdRj7v4G22xgXnRBNfiFBnw6hNGrDEwFXEAzaQsFy382vjaxKLgapod9wR8bhVBan",
  "key2": "3VYuvZrf3apBo2UA1fTuaCfGCdxPmr2YmnypABZFkSt4GzNBrvA6qzeCayj7LonnHhttLkjtrZpbbeNGLxib7erH",
  "key3": "4EThRqzvEr3TYSq3fRU5SSNxLYRVF2EBJczffmSCVyAJFHgSNUqd2phh5Pb2yeWaAiVTtUWUSn1Zfh4PSoHkg2fa",
  "key4": "4nvkqLfsgDZmieMV34fMrb4LjxNDM5Zodv5b9KF6sFz1FTSJG5dVa7BYk58yYUsWFfFysQGWeFQ3zJBw9TLgR9NQ",
  "key5": "WytiWAS2noXqvSEXSBQwHdeVK9Kvs3FHGr1emTU93DZrqsDWdawrmYvitNknPAP3vCmnX21SpDjFfrTRgv94JyM",
  "key6": "41XJGcSUqhz73Vx9NQuxQ2s5JYqNwoHf8YkZ7V6NhA4Qmzv6CnYDVXnkjxWuSyUmkoAtFRsb9FtYA7WdBCsqXmb9",
  "key7": "4KN1LdPwzCXk6pFfs4eaKpo4P7y3G4vdycdYkP31mYnuN6VJfB2npbAGK5h9gU5jKUwGjqtJNnV9H67Csip3XgEF",
  "key8": "2avvhetejF3s6vU7xvEBCcJKrvrxsiGp7DPii2UyrkcbL5K8Lbx9Sz9jKDZRsj5oayLaNqhTxWTFQ5Bokide5ep6",
  "key9": "4tZY7eKg1dVrQvjZR1u2R5M9zoK8vfLkpYtPgQqtAT28rofRwZZFLFWRDEcNsQnoVEZGL2dViMADh95aWgbTkpCi",
  "key10": "4hLTxC8ijdUAujActfoWYvhK5MRHVh5M27ZAQzp66iHazS39L8gBmBfvB2do1f413C8vMvLkPvAHBzVsGEgVoEqq",
  "key11": "57uv4LPDBNJdNJcfXfrMp9axxt7zz8PX1J7tjuesVVbaFui71nnvBALHDfgTeZjPebUK2C9wdN4pK6rYZASS9wNB",
  "key12": "2fogZZEGs5CLicc3AcwtxtBvGx6nbDjZzsy2HeGEaoHAgQjhSYFL6fnVsgz1Szjy5RBmbZeQR8SUAbejE8cAe2Kk",
  "key13": "27yuhDjXgJAHVjdKLUim5ApHC68Ykx8DpVfATujff6R7SjqtKiNCpn5f4JNe38JG8SRNfvY6W8euQuvWUkW87sbx",
  "key14": "4FCvH7TmX14qjjNG3EAjqvnbB8Ah9jikS7ZuQRRkwz2YrSxaQsuXx5ZALuPz4kqPCa54cMdjHjPnCBjNUCkwUhXp",
  "key15": "4vRBV8S7LZXLwzfzvD7Zvo8Ferm7XkDN3v6W8DrLnQkuxPujXX69nauYeQPgrLmmkSNaWdDRLGYnCsmep8d2MYSE",
  "key16": "xJLiyZcnAfJUgo4P27qqzm7ibMj4GU8QaDH936HAm7MUMsKhtZ49PrqN3TPvrCQ6SJLdzykEi4iioJ7fm352Pdp",
  "key17": "4ucQHVBLr4BgdGgt5oV8tcH2JtvGsUanGeUr78AkkhYkRGQD4tZhSWnG7rnmnmR8KCL8tfZeuXojgH2N3sH5gduJ",
  "key18": "k5d7347SqB7ceLLCTE6B8JDvQD2nXUjnmWCDpUex8MRGSCfymqz3t7WfhHxTNaTPXLYDoenGFUU3UAL274Fowc3",
  "key19": "5FQYkaGg7jQ48jyVypyFjm6fTWv5Ea9GUPRuEu1d4YaAougjFR8QD13Wt8pBJxxUKKKxff39VM4dnvMUEcZAudaj",
  "key20": "2bZzNxARp1hZ7oNcFuCbkbQGeHThAaN7m86XMkCLRiaVnji1AnYxtn7UnYQteTXQKTQcwxSRxwVU96UYfDUDzgMp",
  "key21": "b3UwMkL1vUppad2qMUA6wHZRPFonXEAZpvLsXe6HkkZzu2uqHEgAZTG1rJ7qxooitH7pyWC9sAj7S7TgwM64jxK",
  "key22": "2Wjgbt5RM5Xgk5ggr9tBxjfJpXBweztSM68rEme6i7vbJNKoHSrvvukqYAmmsZGt7yMQqx9EgPoFEtLu3zaoersV",
  "key23": "5zSg6Pm52UJMJmVYntzWCccxu1JtLHmdXCDcKkGfGAZzFMu2sknF1asjt8vJ321RxZ7ju3HNmiLFQAbA4zfzbEJR",
  "key24": "22q1HdAjLeBpxsn6VfuFk27UgvKBa5nvs9UKHAt2nUhszDd5epQ28Adr4KzFpcDwFt3zaDxxEXWnmVxbJP9aCG9N",
  "key25": "2L69KALKQdZZe2m41YQifuHb4Cxbf3HLNQgkSwKnevbdoGMELQ9kUdhYuQhpiy5fhRt9VtJyGf2YmrwnLZ4rvfas",
  "key26": "3TJpjrFA78iPkutqw1Ns8ba8Sj9KiNyqHSJoM7Nm7thuKYwgmEpziLkYDMEn1n6c5Hocb7Bq487GEt77pURaQyhE",
  "key27": "2GRRMu1DhKj4twDpKXjk5kd6MnoQWZ7F8gPWRqr5gFNzsu848AbnA2HeBmXD7kVTAL9XPU8i4h3dhvsK8BZxsHry",
  "key28": "5dofNzmdNCjJZ8J2w2CbCWxuTYeGWKVUrpP2HRp31yykHLEFH4ZAuAAntBjA5d4LYbYzHZBcc8oD8qwkrei88dmV",
  "key29": "596rvnAsPS4zEST3HbMwfzS3jdR7WAau98Sc76EP6phe3Eg1Hpy7KA9jVifBvWCjVrKtr8TTX4qrCGzt6xMRmnei",
  "key30": "2n71sJ42w8VyGJQ3MFo45h1uRjxmoGxtEPFjHhAZbvA5LVTVrfyB38bBEtu2vnz479fSVySAZDXnWqiKTu8dio9d",
  "key31": "ivaSTocbEBWPn7yhe6yipQzctP341NLHPYfceGGe9VZyzCW3Do7thaSYf28pvcmQXzfG1qVXgUdSsekhhjdLzBr",
  "key32": "35QzP9YyrfgxbaPmea5LMuBdxwdnDvasry8GHJMfJs9grbSC2eCj7n4yyqy1mAmu5weDamCJePmSUzEpUrXn5nD",
  "key33": "2LFiEzcAhMhD8X7EpzTxcgWPeaUwYKxGgNBUSkB85xPJsMbJ6fruPypAtbgGpo5h7NQo5T66QGQxjT1ykazPech5"
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
