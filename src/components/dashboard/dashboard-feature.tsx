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
    "4eiPsddNjGUH7SRU5ax7SbjKtqoizqFUbMwjKpKrZuSTJmQVjP6FKw7NwNSDg363YN7hEBsVPVHjUTGL6XW9vR6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGkTWeuxF7KYw3YWCpsBAmtTM951eEjSpXDJeJiV8JQRLB7XU2J1PtB33VBZsA45Pj6pZrCQoUEpji41R79vCU1",
  "key1": "5xw6sW5yznCxooNunry4bzocv3XTpiatgc6c97U23jo8KQFLVu5V6W6HuHVrjCXRz7ZNaEdcc1UgeukxZ7rPssQ",
  "key2": "61jkCf1pWYDtqEpm34w5CTdei2wUhVwXtXws5f1tzz2Unw2zD1Xy9u8Cuah3wfaxberC8CAYrULhYuLvawQX5Ws7",
  "key3": "QsMHXeHDCbztAQ52sAXEgwaQC4VZ847VPkXLXZMvE3dEn2ZSJFVZw3qN3ShHt7PdiTrn42CJLePJYv6uEygP32h",
  "key4": "48VAMfXPAG5QvcdpmvwVXeznkPA94Jy291wMYJtUU4VoCsm9mBAsW1xazMnaFvMKxUvrQKZBU71Lyh6sfcFriSzq",
  "key5": "27RPVFMSGXbAYbiR7LRj1nm91pnYQY5MgWMfk6E9bwoLRMpC8SCVGtaUCGsHphJhTzbWR4ZnJPxur8DwvmJK9QbE",
  "key6": "KbVW4X2w5it37tFrKg3UEKpLfRoMJfMfbHsm4s5NQHUcvnFntHrS9UaXNXqbSxVzmEwJBc4QMXUQqvqJT9X45Cr",
  "key7": "4MvxZLxcSWeKFtK7XTmQY8APk23fe75gQRuKKgCNeNsKSh3KeAf2dDDu7QBMzHfeGhNapgLnQgCSQr7SMaw6qS7J",
  "key8": "4gbnJN6hqtENC8myHFGtogD5jLFvcocQysZApa8iLH2UZtYszB8GYB2tZcLDxBWmMm4DUNwpMijVWUEDYEcRKZnV",
  "key9": "37uDJMHmkHZrkeAKo4T38KbupnPD5aceUWsGunKUTNgS3NfPaK67ke87mviUvGN8dDzBaPMpLAo39ETdTjk4j7ur",
  "key10": "63ceKXsDgxYwDevyqDfY3rGWQYY5pEZknpPt2HqEmLmKYcCeictmJKGbwYyrZj1dHnav3MKZQ6xNHz13trcdqKhu",
  "key11": "F3NfoDa4Y8B37C2CfKLxeYRu5ddaZJ52kmojMK3TVg4Js3jg8PnDUCPUjqkeWvK5SDZF7i3yFawG3ADMhs7qckU",
  "key12": "2nGYoD6XGGV5gcRZq5dScUsW58NftA4dfLQhgZuUB93WjMWW4RtJs5k4YnEeQkKbCiDBuvCLuWgJ5j2yYG3qB2tw",
  "key13": "44ixc2V1N835sQsLaw1a8ufUPn1ww91pKKaoWRNxyCVapJETfCUCarQq2UwnUKQBTkDVJ9Tfro9qGqnPEisZHKi8",
  "key14": "5r2ky6pQScp7YkKEmoCcULZN8wtdbEEFL5zB5s1vceJZ22QbtJNBsveeNVJf1JpQePdLbKNRJUF6EbXM5dUgNMis",
  "key15": "5Mus3Ce9i74SZ1KhPyqELMBghugNBM7brkx7pWnpuBqBdT5ArMfTteiBEyf5NqFmRtr73yzGAjqjZvu2kpXR1ofz",
  "key16": "4fdmNNvYT4Qd8gwKsm84yUwECxpBU8r7iWJp7Pdjak96qxPg3LANjEAB1p6F9UdA2jR4o3v8XzpjGaxUzpcaXc9L",
  "key17": "65MfbAyvNDispmDrGXd3pYZLnFbsNpxfni1yZS19RUiW6ZkVxtrnfaTP9DMnYLQjNizU1VFTnHA3yzGTePvSqbpZ",
  "key18": "29Kquwo3gvyH5bJxrheLxC7UDNCC9QfGAqQo2rKuiRZQQx9sm1tUihBqq5Ay3hsNjCLqjkT8UbqFna56hmnMXs2B",
  "key19": "cBbJ8Wu554L5PFe4vjC356jPPwmNKr3AjCGGoedBvfAHyRXj7NbLzoks3LTQk5bsHKyJ4D9Vd5XExPBravJGy5t",
  "key20": "3y4FpgqCHtGPDahGwWeFdB8CWMX3Af6ePKBhNaCrnLFVWzyNU2vfzQKkUZrF77GrxK9G85Ag5kjJRDCtncwbt5FM",
  "key21": "4GgckWS1Adehj5jed4LJHEAh442BBSYHBHebtATztD26Gu3Wpet35cBSH9N5ZBYUzcB85AG4sREyWpthLmfQtBv6",
  "key22": "5WfTsqUYnCcjm9fjpngbxWJPFqAUH6EiS1DknaoaFf5kRsT5LJQinVVdzcnhSgXgwHMm9jK8eVGYcUGKLPJ8UJWL",
  "key23": "hhR6ksHzybzUWo8QFRgyXqUrbSwfkfx22N9z69177uZcK9uhYsnn9QXyaQ711uKSrke8TL82JF7KzyXWXq6fwgJ",
  "key24": "33Xp35XMKwn4gfu8nxCRxniDweVZjEi4Mx7zdAQqBSzdUFwRdfizA2d758z4zcdKBYuie5foavZMnsAVqLmWhVTW",
  "key25": "2LJoEmMpyZMxaBcVeTBjshNYucd1ayeFLTuNosjbJADsXrRYtRxUsnTVSQ41v1GmdrEBjegtV1rHGEth3CqEynFw",
  "key26": "4vUvsgMMfsrzedCJsnuw3b5ZyHf4wuY1LNLDhtshshDNcQcQkyZjt1nKGHadzhYD7o2CtDBkF3DYb4ZEbM241Tuq",
  "key27": "4yit9YqJ2Vd1rsMNDNgxr9omRAMBSqqWhBynjjD23LH3wo8yn8uqeuZ9cafRABLqBX5dasA7UtDwTQYx4uDAiNwC",
  "key28": "4v1k4f43jUS3hg7nbVuQ4RQGeE1P6AMRkREUnmzTGxzSAivk5uBvAp9Ue3WujSuq6QbDwfDy2ziunLXbwqF5s7Lr",
  "key29": "mrejRhX4tZE2DM1TKn54Bcrd1Hk6W7yWgBZoBtcCa25MMRZpWHXgC71JM8gXB4CptMUoD2n9Ce6Gv5U3bz3MT7e",
  "key30": "2XJs9ZcTCFU4r3PwsvLnzM78nFXhfn7TopAdwcpxQae1raCjCCLuqpKrop2eBNnhXnNyCEBuxqTFsmouJpcuZmTG",
  "key31": "2ceASruzrUVsMHgxcZBzf1RjaddXq2CoCgfNL4AgVwUejRNNafRRfLAvrp656qezopyRN11PNpPpgxfYjf7RUq5"
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
