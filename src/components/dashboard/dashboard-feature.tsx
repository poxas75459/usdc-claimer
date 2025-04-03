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
    "JveGd6QEj8XMijDdQn62KudgAEW5tUq7fpraxuCfW9rjH5t5QdyiqodjGh6svnV1ZEC6WXCv1EekPujUmczeaoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h89XDK7cztXDibUyBULXMunP4GNUZ6RDNAJ62EQcFMgwipMTYeVNrswk5CuPjgUDMtccFJe86XQboaftvXVHyrg",
  "key1": "5Cz8JtUUH9SeffGAWLq1D9RSpGNGs4X3RhDMySTF7GF4Pmqu29Y8FkgqQEde17hksRMpNW65531jqALwLnHE5BL8",
  "key2": "4au7TB19WPRuKqQhZszQPknnq96nVSZ1iD2EZ1fWjX1YaKHArTcsDHU4dtvCWmoqQEJjQ2qcS8pX1JH5qzyeB5AW",
  "key3": "2y2K8rzXirhh4Wkh3CHGdnCYS4Gj2SKfE7adUiEF8ercvhoFwR55vtsBAbKCQ6yeEj1KXBez1wyTsV6WHH2u8RkM",
  "key4": "4yymhKZgLCNrsuQEzGXuigxQmaE6wqj2iaMnS1xamNxPTtuMoM5LDqRKdqfP3JS8iPt1S9z9sxqSHYCehJZiEtgk",
  "key5": "gDmaUQyzj4FK1aTtFXFGYHaUkD9mgygkAALtckudyY5kuZGpb9oFr3AH6yq52QYBPqS39t9KWpdLsso1MtwQZPP",
  "key6": "58UZyu2JbCaj4DTcFaRPcgokUsCgEPPXmxhBiWyGBGnnaXVfGu768muFsCFdJiFsYUJTp4xBeg7wAZsvsXn5qMNQ",
  "key7": "DUZKBWRyYHegPLEmu7hhWA8uKrHH22BpQFNi3sbk9HvCMiv8hFS2kpULwgQNiS1gQBnkaeXMb8cV2YXuchb2TRt",
  "key8": "4u9j4UgMQDeijpMCG9t21Eba2U96f9pgWE3xwzv7mRQDieaDyxrRoATCFQhJ3NgXtksqjsN2DHmmdwUKwymNuKTM",
  "key9": "3RhRte1G5DKtMcdWh4uS5VeBwjuiweyuRd184EpoUVjMi8hWK1ZKGMPnB9EKiwcHXcRcJDfg1QsH2hvbi8CYkZBB",
  "key10": "5AUAAawYZ8GdZzcTgEypm12utjYzjp7KnGU18JcqrZ3CBf9Hnz4GCtePhnN3fnAZtmj3sXpjVt3gdNxETF5VcZJF",
  "key11": "3tMAKYdE8uLaucPuYiy3ZjpoigLAVdaNEAckifA3A5XpdUXw4VYt7bcnH57NBHDwxmSd6HrC2iowG1QFPhSEV7fF",
  "key12": "4g89T5tMzPEvp97sypGTzLLAzz9XVuRue8Rs9PGXrbpkE8fjKULgjKrzj5kMaWRP9siT82kyCQqHQatFeVDKFKZg",
  "key13": "4SjbmGAHxtZ6ypq46uk8WbTdsADeTxEiJAqJfCWpQT8Pg3N4N1rkzPfq9wqYa8soQY9ypmECviFV6odSeWzNrScU",
  "key14": "2Hio1hcRhxBRCiTriM1RVdKVRi3GCBGkLGRMRrUYRr59VUb8qZ9gXumEHXb2oMXGES1khggkGKCJHMNdzbYmnY78",
  "key15": "3sqrYRcCqZGqkHSYrmXx9XzmwBnPqRSi7SYPc2uBwbCPNv7EGH4asvRFgJtNzRvco6pRHySVdRE96gk3EeCNts4L",
  "key16": "2dAD7fMB74h8KvVcq1KfCY6tgszVQSh8xhWusLCHJo2Afnp3UzkPJm19tiWLcXq7AXzcdSLgBhhsHkYjrpra3e3c",
  "key17": "476HPvTG5G7FH5wxSAmw7r8BABFukR8ygK61muZzYiLpun2i7rJX9GLZGNSWctEJaKN9x5wcdwMAh8o6BrNAndJx",
  "key18": "4HGDbr8EC2envoicfqWdtdALxt1BqcMfjSPJ57TSVJ3AgC3yqKDKWuyUkbQLRywwoWFE8h1j2Sos58KXxXLrRTzN",
  "key19": "2oqLGcHw4KCbhUYzNvjkFgNr7eizWmauG3bRdSdRsUkd3AoQzf87mVbgB4SpdviTB2Xpa4dzYh6ABBwb93rhpBa1",
  "key20": "2oeYiMbFwavFY5VLVhzrSmx62LmGbtdhwr3DEayzYaMsxikGjNJjGdkXs2N6U7aMXsVbZ5eHQC9BSi8hFZyec33q",
  "key21": "kT118gKheGjQQKJCcoww9Fc5cZvjU6fLaY7CwHELQfkwtuVXMAwSs1edrwWkVeKZPPBcy4SgLTJvyb7aH73kiFw",
  "key22": "4P9mKGNDACKoZz3UL9RNcuKhNZTEHqHUtxwuiWXmCJZd6KHrgi2JtNbrK74uviGWBeZymyzUQTWBNfk7kWPpBFmF",
  "key23": "5q4sRyw3KKwZYptb4LzEGakQdvShmj816Ddi5UthxKDpP4u9dXRa1qngAwReXALQNj3ydqBEQwH2QV5Zy4aqpYhf",
  "key24": "3oqUfUrqSv5PR4VFuMijuUzUfMsR8CmroiPr2HrhRkzwnjnJneXFPAFnmuAxtvXNkmqhzFXVj3213EuwpN13LqMa",
  "key25": "5LuEmaei7eB8SX7N5wyYGBKbLFiZk7Et1ua8FVpsQa2aicZyhWW39zrZCNKvmFJZTmvNVqJSdGXWEeBWTjZCSmEY",
  "key26": "2yohkukzHBaL1KJ55ESZLGUnogpLSDGMhmUTL1SV7YAsyZYxZsavHCFGVW3E8fKfyNUhzzVGY77mS92esAkipWdS",
  "key27": "5Q2LaTmi6Af11CAyqq4q2aQZMBuu6vqzQcfr2sbfttYB3qQKeUSH3sDPu1HhsvKobX4twMUpSBttBGcBV7VkvCWf",
  "key28": "639wiMbLQoj99NhJYEU2qTWvd68nkSfXSMpVXfXE3fGyNDDTjSAKGPnV329Qa1wGrgfubUsff9s5gX3dmBWjWYWF",
  "key29": "53RehKAENUt5EPKqCQpD7L22g7xJVRjMKZ23xU9PSfy4HnbgziNA3jTBcXZuUanZrjjpzJBrtK4pZoAKDxLcLF2F"
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
