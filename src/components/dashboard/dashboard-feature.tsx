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
    "4pEawwmopG1fPSNMXJt1ktFadngi8wy9mqEdonDe6raAyruhEyqoRpUmJKdv2hQRfwNnFxAvHQQBfJMrjENb6dDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cViUbDQuoPWPv8Mk6bNsuXfMWWJg2sbnYtxS3Qh2X6pp5fpfcuiozAKMwrCsfTckeTndx8uuiUVUYFWo8jFJ52m",
  "key1": "3uEiXCFpPukdCcUFzma8fWCTe5a2LWJzL8ke1gXcBSvzGbJ6pmHBeuakV3uSu31AaYw31iqHq42W2sU5ES3Lx8ic",
  "key2": "43MmD4PjxnJBdXf3FNjNpXHFLh41a81j1o1xoaycxyUNgoauzv4vgy29eivZ6Wr7rF2XmFxvAHVeHPVSi6p8RXEA",
  "key3": "Z5pjgZXX12gML29fAuxSJtge8ijB3fuCaX3epuQz59xYpmxmqyfaTSfi2KBm15adUXUBC8Jv3PiTkP4jVzB18NP",
  "key4": "56hjGEDZcqZaQtUhTGyr2vdCmmDLsRjiYS4sgDTS9MwCKMo85dx4AmdRFFiXc3fKU1iQecZRyehY6Jp1LkSVbR8M",
  "key5": "q5hSeHhY8ckUJE3sUk61GJKvpGwgUExiU9eQb5jAskBbLVBJ8vRiMBRgsKbrAPTa2bzddn7kh7TZkcnLz3mrzhA",
  "key6": "dNTcG1Y3YnJUwcbANJuGTh5HM6cQJod2bdGnrzuGGNDZmRKUUXFBaxo8NHM1VscHUsNUSVX531fx6MD9MUq8GvV",
  "key7": "3Dxc2MesMpd44WHWcnCFuFhrNMwZKZmvbpahzwSyH2sh6X7sEaQvMgjUB5XKDGTTdXoWsYeJewwGyzLdtJ5F3hMz",
  "key8": "2Uk142oimXVnEfwvDASMLF1oC2fjmhRd8En4PirWeod4bkyTNrdBJoFixuUTt7p7Ki7Xg28zkZDZKDtXsKZ5Q9cP",
  "key9": "3qmJ5mP66Wk7iwcSkDd5ZfPpXSu2ZzXUH5wQQiSJNyavKnL5CMmtE73M1AYJV9dC6ewKnogacXX83fmHMoBoven8",
  "key10": "3zJQJYhiw1jEfC2sZKCt5Ng2ZAavdGC5xMkhoDQiY65fow3VvMNbo3eB7X4qn1HoAQNcLp8VLXmtiQviuBwupjbJ",
  "key11": "4HvXAsJtqkhCnFog2Nqqhf4Skrn339CFo9fdjN367b5TQ1G3bTjfkcs7C5XUZGfo742jyepcjQTKBCKyC8mFJBgM",
  "key12": "vnqEd5TKkVC3q71uZJeYRwqzKLX6gRDvvx29pr6shgs64wuy4fxtKYqcoUguMJ3BQ1dPa1Rem4cGrhqEYUFZ1SQ",
  "key13": "DbKLd2mWSDSGCBDeTsvz2RHKm34Un2jB45kABNiUgbUR7EUb3PMYCAFwAZ65S7Xr8J1v2RWpBLtwY6JhUDfTwsg",
  "key14": "3dQy59VFbhHUYDGczURFaSGUX7vXHaHhZ6WNCGkpbStqnow3qVqDHH2ewmdHNBsmEnEZbG1Fh5KNrwJECZQN1e74",
  "key15": "27cbRZUE23jDVA5iqmijmPTwuDZMqVCYT9k5k4q3V2ApddLDohP8NpZ38RZhy8SahXMWVVrH9yHrfY3U6ib7nj4D",
  "key16": "N6Mhce8B5pVi7VDLQjyAZ8YVc2fU7mr3fd8HU9Bdtk3NBaQRkV3mYjwyveMhw6B6JkeVC6yrY8VgJ8nCDDNHwHC",
  "key17": "3QyjD8cknggSY7CyzzjnKsYutcZAcjzJUQgW2EjTyi4V98JQJ11hbqZmhBJpouAdiEW3j113LCYhRJvpYQANAfmF",
  "key18": "55Qh1VjWDNA9N4kt6DCScoeygw2yVudzoJ2SW9fL3VnydS71T4DWj5G1aqT3WFX2mtvRZocXsEEuW6Dwg9KpBtYF",
  "key19": "5uTrvNtHMRm4fn79fHy6Un1C6TT5T7A1p6gvdnm3yzLU75TD2XYjnJRvzaFwJCJX99x8XGV1oJMmtRRRx8ZN5ZYD",
  "key20": "4QGthVH5ntAy9sWVuARsT7dqsqHkqtgarnNXBwDoCSE8Q2fbNeTGK6DQYdhY4YjYB9xuNUauGWw8nfJdH1hQtiGj",
  "key21": "3HK7Y8dbBnchMsfYZJua4k9ShCDYgbZsKA5PFk7cfJLobHwMCwHaqFqrXHRYE4fWPttoXR71zndXqNSPgtpQ35tR",
  "key22": "3Gc7f1mQMF7HRjJ7ACCtG5rynLzgtfMV3sFDsD5WXLusiCPw1JU9os5BuDTZBcN15YAAHFDKksceLi6qDwa9mUvW",
  "key23": "41Zampe31FWUTqLYWhfddMPPyWnAvNnVFyPNgTnLkVbDZnkLftf3mRVQgaq86iWtfxyT71mkEbxRz3zE9WM1VM4f",
  "key24": "2aikyino7PzqHWAarNVptQSGEEQ9ABaQ2dcWg9Nu17rcBwFZxtdASZyxM5FCKhcvdMer91tHNbUFj3Gvgj8mKxUG",
  "key25": "JTHRcMDomYihpxtMZJdcHhdtxtfPf4dmutsrVvfz6wkZxnWk9anKXnt9nZWW5PWM9BTj86cxxVA5U6zcjApm3vw",
  "key26": "4fvB3G4BC4nTmHxgx1cQ84tDhVgmvVNiTsxNJ95xF6ttp3JHwa6Bzqjc58Ny76voKc9hFrXZKxJjSfyLPucUGZEf",
  "key27": "4Hb8S43Vzaju2V787WQoneb6KqSBiw6K8o6kMkjfJGivAcXWKpMjCoB7A4A2hSZeAvG5hCpNUfc8trpXfZ7JeJWU",
  "key28": "534tKToS8ZP27WbWgwaBoYYM4Lk7DA12Tx2V4xuQeXGh793bSE1Ae7UvvxpVqZRoE4Pq91DJDPdjj9CteRz3sApY",
  "key29": "4nrsr235p8oXtNLfc9gUQAQiqtX8aMd4JUAcKqG3xB3jFYxUnw4LyGN4v8zBjo69MkfMrewnE5wMN7852xKyThgY",
  "key30": "5P7AGDYzQk3vmkoMx2cLBCGK7BNpWKHk3ds5cpHm3n31TWxXvr9M8bC2dxSWshG3QKDPCLge3U56SGYpUwGizyHS"
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
