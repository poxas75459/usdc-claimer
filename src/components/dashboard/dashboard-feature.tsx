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
    "4GiJFmgXAisPi6GCPZUg4g5s87Nos19Yy6yFuQhJfQxifmRoHNgrm4Rjg29eddKx5bRwqu7Gta8DFJXMJJzuoAGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZc74NPBR3nMxYDQniGQ4aaoZuWbCRtbsW1gC4M2P7mLjXuAhYuextpJMduRGBGsSXkTJo6MAQWX6UuhYSZXt5B",
  "key1": "57nwc7hyqAg6uszNwPQEXhYaEVS9Y5aC7jsFcLKBXB6EGsQeEe9aJSd6wG9cGPZ8Y55SPUEv81FsJFzVXyyGt3kh",
  "key2": "2u98ganLccLC419Xsrs92d8nYtAEP4uLmqDwGX8Hi7scxJMdWaHvNj5zp5gzY92zVNvJtfCCNjRYGLynf2K5UhBX",
  "key3": "2AuS6MkR6Y69dB8hRUNg6yvoYEcHgdFYf5J83Rs15vGTuGQJ7BnEkpUyjL53p5fETaKgdBrNsEvd2cMDv5HzDR7X",
  "key4": "prnz5bbczwpzgypEDEvxAJdvdWPfLy6spNsfET66tC6P5npw5ob9Qe2bw6S5T6cKn32F8uBb74xvxS13yi7mamL",
  "key5": "4NVM5cAQTFWCV28cbdSsbLZe2m3TM2V7eS8McAgrsWEbSsWZTsXtDRzafcQBz1UTW4KCT3exdjUcEQB2CQsCzgVM",
  "key6": "2csFSq21wRgXZCGZD7iSSwsfmWGEp6XszetXh9MrKH5Dpvci1282GCZ3kZLm26mtEqny7uAh2tmmC4Kqgfmpqiop",
  "key7": "4CLmLgMkYfmwCC3y3vqBH4JrD9dJ3LhfvFc6PSa5FqrAmJLUGoK7UdspsjDXF9c2XqjFKSW7mvSFsTpKQxa6j9Q2",
  "key8": "4aTgyHijJRwy6UYgkQbwx361hJRiUJACgigkphnbCBVkbrCEJHvj6mcV2i87J5bFr4CWdPMw7CPHFgYiVZisFqyd",
  "key9": "52vWCEzMQcifh32kio5hk1yNY2HCswUpqH9rTE9wzh1wJpJRYsrZAfHoVqG7GhC5TPQGKeAu7mEVMDQ9msnmfzV3",
  "key10": "4iCK4x5qKu5PNaAeM1QJbw7aJtVDmUWWsP2V5zbibmKWJZkTMprwbe1UWNJpQynao2YQsbfzEEh7uyjpDWbF8QUc",
  "key11": "3Xw3y1xm4m9UoBj2Z5oQJrV12Gv6bvZzA8dT2Hb5Q8PFZqnwSWE5YENgBJuC6PQkdDxApsqwjQe9obaMZayVGb9y",
  "key12": "3dEcwoBVQz9VuSDmc6gAJNjWoyTHSq4BycCtpKZDNaJSCZBb5FYwfdy5V3uCzBQenojNyBbE49UfUvbCjXmt4kya",
  "key13": "55ufpPGtwg9vbXjzjn8rwxFmCHe4M7fV5YLpupPbGMAZLGbX2MA8rFfNkYa9PyimJ9XYkqMRpS8bjQ1bm2AjKZrn",
  "key14": "2ekXUsY2hJR1x8NfyGn3524DoaPDgmjWygBTrQYJVKuHngJk5wrEt7A18KcpKKdgaY7cekvEy3ifrybxbc81XVW4",
  "key15": "281PTU6VszaNpXR23MdWYHokPvhuHwZ7EDYxUJbkqekWdqPx43yh6irr8dMKJs4y2g18TmsapBaAXZMNBp4XMok5",
  "key16": "5JHsLv5KangTNeFSpJeDXw9SDnV1GCvNaxtXXekrRaFJb2Bngczv24WGd33zbzTLHQC4tLsmDBkRPT98qxGSRSWt",
  "key17": "6rJmvPKn9Pp8xb8ra3qahKh5VGw3gw4T1prKp93PHcBFFZsuJBSPgbbkBwKFeXw17JVHnnNQszMV4p7TrJeHuj6",
  "key18": "5vW1SsveswnSuMSUdmZYNxRigt84tzQ3eTvofsjvCkSByEA7i2Ga97WmuS3V43iEj626vAhrY7FfvCSbZidvsPs",
  "key19": "3xw9pynuTTP9Gd7zpEj9SzjiLon2gKxbVNT1ffCXfyzEevFmWjF1HvmcXTB9r2D8vd6LBGZcAwVahqENYuzdKo5Q",
  "key20": "5ZUd3xatMThtMLFNbviogBFtXPSZLxyfNahJtmPENCWuRxQVUe2KJPb7e1p65Z5fU5tJTzjQ6sB59UknqCd8Z3dH",
  "key21": "34xWwugBZkPVLF4KdjcX9Fi3KD1J9KSfcfW9ak1dRGmyLuy6VN7KAUbYgh2EVKdFVQxJ9qKuWVqxzFo3U3sDZjbf",
  "key22": "28nwvpPs1fU5KAXcZW49gV3X2snv3bmEDdY4qhdRPeseAn618MxXJLQxnmud7q6nGBi9P7CG7wtnmquToNLuEN29",
  "key23": "GZJeaBTHrn95WrJAmgdJsi2DPCx1dWkvgANvjT6aPo5VdbQtdfodWk1qx7T5UHbzC1ue1MMtq4kuBpyTD7EdEu5",
  "key24": "4KmvjH46xVYHRTZnsuEq2GMWY92tvFRRYNTYf6SJQu4cHUpHcHk4WKLpZRtx9KvaLE6MX8pvkaV5KaWbdERw46VQ",
  "key25": "qc5RToMtnus8pvrMqtEgqTo6NUsFhzS88Fb2a3vVro3erdpuSFaSbfhGvVH7xz8UFMCGpUX1jDcC5cbBpgExkbS",
  "key26": "5jsToVDrDrdyhK9DDdS8tNBP3fQD4w1JX4ZTdzRf8U9w81bmurKnoVRsyoXcsc2wfHCX5XzuFR5guS2XXTnfEFt1",
  "key27": "2JQE14TiANBnopwQie3d2rcdpVmWTyDdyxi55WEgvqbNhFzXM2xvFNrn26FZAZWvnnjFtekK89PhihgjusF3WJXs",
  "key28": "4Xe4ENtx6j7VsVeansvS8mULCvJ88FYcWs81i3gLY5cBdv2Pr3aat4sBHpkLtpdFSayL3z1HfN4K2iju4DMmwWUX",
  "key29": "4Dqf8m5txvKPVgU1kfQ7PiDVk1y9yF9jw4R32qnLbDaNHomLh4K5RC67JXCTCMUHQPee3gbkZQ4qJXh8HfKNEgyc",
  "key30": "51EJzUaxEwkEwppg8xLoMdKgZtWeQMSH74WMwkzojNniosN33pB21aDLqfmVwZPbyNP1qEmz59buZveU9TnrctEd",
  "key31": "3HsxMcYwmvaAKaaZaezb5tq6GpdTbw1xae9GLm8fyjvprmgcRh2sXXvEzuAYnpSd2RSe5mePiJ6RdxfRhWrjkKKp",
  "key32": "5qR5vZgouoaEao5cVKJ35o3yo1AtBp3Xp6vBXbfHkfZ44quRBi8WErupQxijMXNxW2bkpa4rLFwmvpBczEha8YXG",
  "key33": "4kWF48ZwtoqftZZRKxTcs2emAhyBN7wSTZCsEb6vagE95noafVvyGwVskWQz1i66gGZXK2T6e1cjFDTuc3usNbPQ",
  "key34": "3UyfGoiujCRToNf4hShnMhHozULEEhwAhi4CjKuTfSaXDxfswfgYES98fiw1riv3ebpgzvxAQi55DbWCuqH5bTY9",
  "key35": "2Cc8NzHtcsiHYQ8QALpfwFVk59EpHHtt8ki4wKsLH2P9qom6wzaNdeSkUePJuTrrNs88WLXMyutLEdAdatzqqdNE",
  "key36": "5ZyacqVgsEPdMc24zy8Ff3yVWSgV93ckzQerrBqzFGmZqo9SifhZC2eN3UiHKx41uQTrpKCdFrdvXUBPnLPWpGP5",
  "key37": "hWVP18j5TxoLQV6eZ4GBYj6tFZnHEtKN48qDzFpgdD6CtMe3WTg9nE1j85iPiF5MakTmXJV1ixsg42ohFkHfc9s",
  "key38": "56cer3P9hsiC4aZTMkKKkz7Pi2kjYUqwqn9fin5hb5j4VuMD3EaJhgeTLdkhUHvgRy1kKMqQ577vUHoCcNtENabE",
  "key39": "4fa1zxX3ghQiqEPdzXXu8De384keRnvw3z4EZaQqNSqt7CT6JCjft9azY87yd7PYr6TsYmMBBDjWjyBg7U3aWzKT",
  "key40": "2JAZxa6WeXtUUa1AApmuYKMgqptrYo8nEyXdVKToQ7UMKtMrpzikcsb5ozEorzU72RsR6MLo8XVL1xs6zdL5Kdj",
  "key41": "3ipn7vzQwexhLSdzHPc5cR4rV92DgtrFRZwrcAvfVk8ZP6M1nrnquxdDgU5Wmfkg5xhNPWkHWE8F1AdkbPZayFW4",
  "key42": "5rhCZQkzaKzYLvtGUfADZW8iBB9cmZ3VBp3HSzuNuA8rte8THmsQPAvMqoAhBmiRYygJacbcEeVk4P5xFWtCZczF"
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
