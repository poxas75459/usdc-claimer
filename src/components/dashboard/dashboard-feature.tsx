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
    "5epBR18tzpbHD3XK9UqxXrcanHAy68NTSnZkBbYp49Lq8wMdhyQnifHHLRJNHbSABQoK1qr3nSynKvy11MnsUnXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2gvgqgWXEiz34q8Qkqb3ik7uwzdsRpNoESNbNVkrjM9mzXkDvfAiz5QL3rG5cbqoAbHL1539YWdK3Bwz2YfKss",
  "key1": "mtj1BHYH7Uy5aknUb9VaCH5Qmi75amZmDkAmb6eTnjomooBdiM9RAoaKZpCaH9zor1piVVG1cx4covV3raGxgB3",
  "key2": "3bJQxBuMKfU8Sy52gxjXUvRebg9vSWrNNAK6ZYWJbwSe8cCktXyn8FF9t9gSMAoia41nQMakLx8eyzVZhYBTM8XP",
  "key3": "3G3qCS3BCviZop4ixoCExJsBtBs2GgM8GFE9St3qJ3Chnq7ecfqhiD1AD1kmadx1R6SYsKFZ8aNoabP8Pqq2v3Mh",
  "key4": "5JmrZ3PwqmEsVzR2dNPapuv3uAnTt1bpGajv2FVKst4J5LzAmYTdwFcyX8oAF8yUguXEYkUMN2MfezgVvT3Hts2R",
  "key5": "dtykJQWnxd77bKRgWWPVxTT8YMCsCTqdDC7XVYyb4KoZmu4yiKBR7WHYK4mpBKRVaPn3QP1oNogGWnexR59DoyY",
  "key6": "5fGr4Cm1vuREKowLrs8psU7uWwUvCtVSYobAdK8sUi7FtbqZxmDjB8F4WGZf73QQeETZPpLbGn3KENNybf5urvxQ",
  "key7": "KimJgELr9Tas3Byn3B5oV1da1T15miyFQrPZV1WLfMok9edfAtxkSmtwTbiHj5dW8o2my8pUa1TdTXgCuzcm66T",
  "key8": "3Natx2mt5cBKKEMyAiCGXKCLwdZdoVSsfbNbd4sEtbxQqaihPPun9k8H59bFchZep8Uy5FoHcDvuE4AV8QyFHSN3",
  "key9": "4jc5tHmgrBTe9CSTgRTHcR5Tr2ku5eRWYzMKohnDTVkmsXV37aGNf4QF2VLWn3fuDTka29SwB43JZ3XPBjLCkbkZ",
  "key10": "3Wx3ALZQkFbt8R1Bwd6tYXdWULPLT33bYDwf8DPAN4gvGffoBQjEJFBx5qiQ72ub9wJYFdabEubVj3k6Grt6jJDh",
  "key11": "4XEmofkXteZxxJTsuMueMVPUchw3qVhghEeuABk482r6hQDmsfcxhh7YqhQdPFC3np9CrJxezcDkWKDLG3sED3rU",
  "key12": "2ta9VtSzHcRrk6FCGtF27rdPsjxKy3JvxXgiJTM4wghG7onPpJHtNTHj8N3GwyyJqQjhkxJE3gEs23DXK1p4XBz3",
  "key13": "xfq6FMecG6rpWV3hRgyKWsPMpSp5fWQ8egAQYWZi1jkEpZd61RezymrtCVQ1PbB2B15ffHUEpVUQ9ypCNb4eF7H",
  "key14": "4LedN77PUKHrVJvSViDX7iWRULfsmANraTskaK1MjxEE2hpKNxzSKTqsm3HT668UovYRvrf8CembBPjASxeC3CjC",
  "key15": "5GyHrtL5Pds9uZQeMtNCCewPf1GYVGUAYAcwx6kT7AQa9x8Muum1WhzcJXMMjmUwmJBbYVXtUdox7cjxGswFTKkt",
  "key16": "PUKS3HLj1r8VZJgdj8u9YjDNrZLusGpHQHzxPvRDsotpC3hzxjKZGSgqsVx9ba5cWqeyVhHCDcduWWsFBJD66P4",
  "key17": "3nN3Lyc2zC6pvMRzXTN367XPrjvRB2xka1RqDmBBe58tdMHKL79DieTJVXGiWTfHZaZHe3DLs5iiExLQFhPf7dXb",
  "key18": "4VXqUs5EqxfwGnaFssZDmyWzLyhoF6gYgppLVkZX7STrih3xqA7yR8VhmceAqz2UkuH4H1kC4MWkgGmUpGWswoHM",
  "key19": "j9VuziaLm9Az3vHiqpjYMzA4Wk4Fovit65Mm2qzKSjiRyv69tncnWZvRrJ831y7xmZK8s2qVCLhEUsM4uC9SoEX",
  "key20": "jrMqGZwuhEUnGswAbhcz9oV6JXHGjCe51LnnfjGFDci3bBjojn2NR2GB53K2WJ6RPB7NDvtHbtp6AEuQs4agKvR",
  "key21": "hnHJCZ5yN24K6NSNa1mTSfAjzWgBjAKziHLw18fxszQcPvYguXW2iy5dPDHoS15GZuoumhQA7bFGpH3ie7mu5at",
  "key22": "jcnJ96bPokwk5U9rYF4296ijsPUa8nWvXifcBjrfSBtrgr7NmsxUfMqhvE65BtXLFFcJLZYPEjwbdxhnR1pkwHw",
  "key23": "2fJf6A6xGzuLPHjW9du487K9EqHwrDU25Ny9GjixBRrzL1XubgebHF4vLBNURacjZNtprsy1viD2ZxnJQfDXUz7C",
  "key24": "5DdCTma9RjBSRgtTgL9TkfgaD4hYPqneYR9nhHzuDZWJCmkZ5URT2VqR8PfzM3bA5Gyug27UNTZP2LDpukWACX4a",
  "key25": "3HjcqUdfBtz49z2EED6vFoWKvXy2nii3rpNUewW6njojLm8tV35g7gsdYmXEj3E8Q1b63GccDJnfZdK7YK3pCVLF",
  "key26": "4HZ7EdMejBbobkmugQtbrg7xovMVULVY3a8ywghB5GpC7RPFz7vS3kLzysyvZGVraYVXjEQR4cVWsqahZfjmoXC5",
  "key27": "317fVJsoCt8DquQoBoF6x3VSJr4HC5yc8fa6xKfPeH1j7yb3CGzKwQzhJUA4j9ZHENVARvpR5x5yKVBS2CFVuGHD",
  "key28": "5s2iKGp8NbYnKs17ZDD6DmUpaGdyXHHf5GGVedn5ApAp9MkqQFVk1nhYxShunKK3VXZBrrycE6RpfadcJ4XWMSx9",
  "key29": "2AHH6wzf1ESW5uNuv8Aa1fWdzUZTXqqfzd6hTNDQTyBqP6ASmgRV5TgWfa7tmsW8kXEAutC7v6HZsGoJj7SMEbhg",
  "key30": "5aUb7SoQwYjiiZFEQVmycDvfvk2QE8wQKQYudRwh4HKsS64yeK41XJtsnTwJq6zvqZtztCHusRcwQys1rTwj2q6u",
  "key31": "4Dc1LNjVnG6EQAbhi8pZSEyYqbyD4gJUMwUj5Uw4tbyPJ4n849YnTRwPAf3YqsHtskaNtpJ3jyNSHTdccC9TyWNK"
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
