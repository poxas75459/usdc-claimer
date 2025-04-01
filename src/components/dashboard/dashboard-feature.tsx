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
    "4dNzycCEhM35zVvmX8zSEMntW3ejVnasvy2Vp39Y5AgtKi391KuyzESFFXMJLwqV7eza6qWvjJU3VjLbpkiyH5GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tM8wKN97sMwfyC3JiS3V6Vw3G1R7bNTAyRYsJSNDLiZjBtenTBaRNZNZvu9S4qpcBiCgDVXyohrppvXLzgGxK4R",
  "key1": "Qoyx7ZFHawT31Q22gNMWohqkFPHdb8aS2RDiLK25huiDxXvdbVwunSagYEXZhDC4szaBpk7JbSKyrFYvGoB5mE5",
  "key2": "6JrgxkvY6XCgVCYvyuwnpqz5uBfUncSmxWg7SD3gohU7WN8i2AkLinDvD47RAz4uCK6jwVgDVWYcAhTCDQT72FS",
  "key3": "4mNy2F4w43y32zUU5t4Tnz4vDiFZSz9T3KkomCJQnfD4kj8q9NTeRUr5hiDRaYfWxEyidPQtj8piT1H9RzdBubV4",
  "key4": "ERjcnAsM8wgw2tJixBFSMBMriHLB2eYmWhHsFyNEUGmLSX4NM9NXr9fQCnFR7syfuDpjHT1N1kc6BgYbPsiPq6v",
  "key5": "4zDs13V2g2KaWM6ndXEiagaZYKrbrkZceQtAtfWNFCbDyRtEDTYDvsumkzZTTEbT1SWs7G7pb1xUe1A3dCSWHG4q",
  "key6": "4qefiHzYBMy5RwKHwnhBtmoee63ZCNszR97tderQNyt74kPYxg5FjtbS8dK5gvzWQrqRJg1nqfx2WU57pUv2q6rT",
  "key7": "5kZ9xhNgtj2LoyqfV4DtULx8ECPfa487WWmxLKHq2LPxrxRmTZsFBGEv99UTaVYdP7sBUXUjSCkDxgBqhDJp6xir",
  "key8": "43VnXf8CK3T6R8dWC7CuNAf7mLyriWqtjipsJoHKKpogvJR1ZU4WrXYYGdHXLH47fu75MggDUmKjMrwqECwANyRz",
  "key9": "24fsTTEFHdQKusP2ABzSLYp82iVuQ1YyoyQgddkqJa9pJHVNjE3dqw9aE82BbPxq6cKkZbr2s5NgehJavmybmrUN",
  "key10": "4vyXz9kri9Mzz6AdEemS5uUZAasw83PHohQxfnqyJbkRJ71wUaejZ4yBiEz18Eq4zpimwHhyuD57nmX8mBCLmaD2",
  "key11": "E1PUGtzMUNrpUbtXCsnn2kW7wChCh7zUvnem9f4y5JNo99s75Xf6FiGgutS8NKBcxL7VFTKAZqCfbqFsa5Exhm7",
  "key12": "NuK2doRdECTwfMvWfhKd1p7aU3eKfxZaBC7M3ZEmXqybydqAv9YUYSWt8edVWKjQEfYm8Hbr1tmvhM81FgCFtvm",
  "key13": "36jZ8HfcmepzGbVpKDnm4h8G2erdPQyTdq2siqJJ66WBYvGMgzUQw3Z6qFZtse5mnk8oKqjpZWa34hhpzhWaeMXh",
  "key14": "428SycBab23sB5Yoze7Rubq39Cv3Sennm7AsnoCZu2qrpNLn8gBbwmqo4TNp89EcL5cFykNjycxiv28JxvjKQt5d",
  "key15": "54hfzz3SG8TUFHXpFA1dkFfQwaeWN6pjcYVQTZCxcxbB1qwQWTjHgJSJNPFTMXgNHTdrfHmY6CAAbCMJwY6Ega6Z",
  "key16": "2tmkfZpKDvA7QhefdU99waaawSEuT9iosNBKi5TUjmh88FV2juS2iF5G5H3ynx8SbKhL6WTufF8vCQuhgj8wkZz9",
  "key17": "5J5iSBfUxjpDfUobAvJcVM169DtDGGobjvx8h7Hcp4TBs5icU88DyV2j9KFmfbUjJ2tr3Zy97RsUhWQaH19oFMVG",
  "key18": "oCKmwLdwvmDpUHciTew2FMceNwkmzwDwRzvWbsV9teTREt6DWWQERsgi3bNr2BNMbEP59RYVu9YyDU2eMNu9ZYS",
  "key19": "5ebuswDf3QLC9gC4qHBhoetSZHmYQiriedDB9s2zS19zLojZKZwRDwzECNZyFgpVAJKSfQYNTagUeGTjLfwZYA4Q",
  "key20": "NpqQTPETeZfZNAm43eAwtKa2fwtvQPpAyQhndWNJ4sBK1XcDTNk5hBwZyoLgwHkFt4mSvy4LEANbABjsvw9MZhQ",
  "key21": "3LxQTLvwjirTpfXFbdz2yS5pwDWaieEHZKMnPNrpQJ44vjowa5cpbZVkCrbiPcePZGhxtDh2gjxsKVnSc8sgfcEC",
  "key22": "2s9JzTwcpHFh5Ro9TS6V17ox6maHrrodMhP5LDqjjQcsWG9AVHCRMBuqHmA9mduadh8FERZMDcDUsiaihEs43cNu",
  "key23": "4LYhStWpBSaYsAbgHDUAp4ruL1FThzcFbDtomoDC9Yp6vAp8d1dvYZS1auWqdqDoYWBdRC8swnWcA72qV5aKJU6M",
  "key24": "3CjpiugLUfYZq4dxF2jY8dJUrvTqMxZodi9S2n7hCDZchXRUwtzVnvudiNusGKXGaTVq7qT5U1EcvCcKu91S7ZR9",
  "key25": "4ndARkNTgJAurJ2t7qudH9Sc1ydf1JZSQwnFHZY1jS55RHeFv7AStY1BqG9biAAenCGLv1oJeQaHGLiJTp16YUKn",
  "key26": "xh85B9K5YTLdn6htzZdsPuLKnYKcdy2YfaYtj8rGqkmyuoSL6FU2KAvEQw8GHbUSkzsNEkcmpgHhV7K1WSkzvFV",
  "key27": "A7RisaMRSjQ5MdVJAXXUBhLqNBV4fHEvDbqm83yHQMLQ1AjnmsfS28zRn3EtwP28sRWsbhcC764x6gKikcmNj68",
  "key28": "51MA8bFCvqMTvS9s7ptix4VaguiRHG6teE3kNKLR2moUjFe2NnsgMdADSbqeVzxrb8XApueA17BY6eNQukjKMtT2",
  "key29": "hkjwWu7Db8wM5uLqbtjNQnWPcX5QFKARpMojgrDxxswTrMzuZMjBQ58FBnCxpk86fdeeJBUM3iHDqjPeUhhM4WM",
  "key30": "3XLjZnrcrxWyQJ4oM7i4L5c4Q1okdvxMhd9eRt3PubQTZhmtVFCfZedXrYcUzNg2meXhx5bWt8MD9Jno5zh3CjVD",
  "key31": "45ebbKKzUKZvWtfySTNDUXArw35x53v218oqBxG6ZScGafTAVjQTk8qZFvaksbFL2f3GvUM3owKxaAoXXMf8DBsx",
  "key32": "49pnbqzjpFQWCgdzVbkJ8ytKLMQ2oGJyN1dHA9TaK7YieSX3RuK2P6LfTR9riK3CTycNwGdfmYnAdUgd4m2JZ2pV",
  "key33": "3LQwsVFt6pfp9FTvHMvC89hjRUYFtoyKyggapQxFeE1D3JRKAx56bUqVF9bP9WPy3vCWgYPwF5jvZoWVsJ3M1o3r",
  "key34": "5pRbtypZRKtW9cWT6iVtpZ9ew9i2rFfq3aKjr3XPLLLFGxujRxiqjA17whSyqDsA3TkqPXvuh2CMH3pWhycgitk3",
  "key35": "4jb8LeBDwwXV8zimVS59irUuCCMZtbrBTCepJWCTNtqWAy8PsbXfd8eBCuakS6wxwaTtsjktrqD9PoRH7TfeLHSy",
  "key36": "E4y3tuxR24tFSNH5K6v9d4BjSF5u7dhaxugA5JTQ6mRRnnAwMPCVb3UJ1AKDTC5b59tthmyZxDiS6kgPncKBBzi",
  "key37": "5AyVcrEuYF8p84WsEvt2RLXrK6vj4RwczqjNszbL253JPJXZaSFgnd9sBD1wV8Au324qjEBCK6UNPZWYZdZtWPW7",
  "key38": "5Ldeqauxyp4htWBh8VsiCHNBcHWnHAEHhvFLzZpkQ3Rj8xb13zaPijqrrvK4md6EetbhRadZNYGPvYawkmwDBYxE",
  "key39": "2NcsnSHoCXB9t8VRGaATg3AEKy4cJF4kUU5eLeuMWHSXwMigo2zLoceTyVo9QtT9VmdgmPeS4k2KXrYTxDgSoZaM",
  "key40": "4dGx7prZdMzTuPJmz67z5QS7LXWkT9pNywVdWscjiiKacb12xrkFwE4VSj3cvRgBaJzEXSYyDeBAgaKPFAmdcucH",
  "key41": "5mP3v9uZSF3qDo1SaB2aEoHcHSpTrBLEsjjLChySRo75vwwRPGGaMZQoB3jqW5R1Pp2Ly1eAHWMLp6YqbN1HiuJv",
  "key42": "3Jcs5Grv7qoPV2HsynhdpGKtK8FreC5ngwSmSvKcCJCquvfCSRzF9H7tKxcY6ouhLoCmTfmUcnmqxJEKork2Wacg",
  "key43": "2AKbS2pW14rf2Ygw5n5mT9iYVECgX1nNsEdTprWRds5Hv4n8AQLaH5FSLbkGrgSkSdZvVeqPMeo9W3Kno6NoUCDd",
  "key44": "2ryt9RcNb35SjZZaJtKxqhwvXqAtSJYCQDmdpkb49YhMxGyofpqtPrtFas8ZCgqdMWQ3Cn2U3fLaM4H7L5vAz7y2",
  "key45": "2jJVZWqkXn8Nv3rsU4tojEosiLLk4DfogYz3hmJEvG6pepE8pphVTzqveR7oy1LjcLK3RANBPSiGJAbJh6sLN9Mb",
  "key46": "2KVxf4NLzHRMBhzrRhCncuom9Q6TauKTECJZxscskj9LhpMnu4k1RD9qvKq3Q4gjtt3va4gHMCZmtjSkW15QRKoC"
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
