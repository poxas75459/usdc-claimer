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
    "4Wvntnb9SeXGzkUe78r5rHw5goHopmuQep1dsrVunjZNYP8DhyTbK4e3Cg4gyg2TmeZm1LDWUesKSNMQ4ev3ZxDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDbefPk2sR1rgUrjjW1CTiEKogRUMyPaX3nRTS27UPkgsgdyLEQvQmH2QEfsbxqLfy7kYXRAyZv6Xg5dnyWfYCr",
  "key1": "3zvwk2y8pPTpyGH36eGoDHieAc8dbe9XWAE9RkKpQyGkhAj3qxzYtn8ERQi8wNVbAm6SH1H18H28qAKR2nZ9NfUp",
  "key2": "5Z4CyC21UCmgue6HUUZAoBX4UgANyuk2hHSUcdJBXi14GNuThb8mgvFG9KjSb7A6XRc66wNKM2TZ7N18siQe7vii",
  "key3": "3hxe6eQqJ84r1igHi4qu8bNnD9hyf5in2E7cST8bbtLyqRvtpNQ88Ztn7BSTptYw2gPH5gcJyS1EsdAjeJKAXjB8",
  "key4": "2UKmoWYKRQ9H4szNpC22xBtWmJYRh4Y9TJ28BBDSzTgcfmT6jbXGt8fKfd23BHaHwups4pTj81VtLQRit3AYudUq",
  "key5": "5Fwx87WZmoW5vkuCpqCjGAxqJam74F2QNnKF95yScUxRUNemzdvNMAVi6dKFrdRQXJSz4dxx5S9h9iSTkKcdN7c5",
  "key6": "5jtQdTCzaJrdNX1zL2sRxYV5hH4hCyrEkFxfsMGkpSTnyK9v1XuaPZtAq9M2F8AQt5tiFV1FUQjX39VWjanfY4wK",
  "key7": "nt4qVByYvUPTcdj5CzrjHAkrjy7YxePPUoGroyJycT27Zmb6HgguNigvrktpWSQiccxuc8W2HMEXUbY3u8S9zDb",
  "key8": "3KnFzXDmsLtHq2uhJgr6kiQJEex4fAxGAwMv7FRxDSDkkSA4pAuvquDE7F3yZnRiNqc3Fnnyz6hcvZS2P28CixKN",
  "key9": "2MntHP58XudQDHtkLHDWps14NX5FPFzpnfVSwjG8SdGh1QEvHXw4rcTPhFSqZpFpYaAGecH4k2BGjeHrzELiPsN7",
  "key10": "4uPS84qrN5eij8RqbEkvFs2apiAFSPtq7ZdSShpk3SFKcguw99xhnKw4ZZb4bkw4x9aFAjyDBxtXtagQV4jy1hdF",
  "key11": "65rqup3iow9sXxJM5p6s2Q9vpaF2fZEZ34pn6nhQXDYgfFxfhwk1gifArt1NmfGFr7TDS5ynJ5gy8CcC1WUqG4or",
  "key12": "2B14okXZQa4RKB5K5ZpGo1Mjsi72pJEAd49ihTLJvQBsvc1RGaHmfuojuAmQoWBAxA2XsGq9REjEVAeQ5sj1zLgN",
  "key13": "5TKe9G2rioftNgUKTs7hdpvfKLwc3UfgTg7jnwuuaJCjgvnGozrYpA1scRDYefPG9XPanFFQZqJBNRk6YcJRqcer",
  "key14": "8tWAn1swux7vYtDpKcRP4FXJTMRiFNMwxiwtpqU8bM6nZ8j7qWUKJBtx597uEU537edQtA5gaJyupcZ9B9Z1CeJ",
  "key15": "3hYyfGahvkN7SJ7KgocdGvNkbdP99DewjqZVPUShxH237wmCpvRfSqeJwUTMYEpMbyo7CUYFq7ET7GP1179zsUAt",
  "key16": "2JT4MpT4hA9ndiFVBHRUDpnmoTVnCVSeS2azKF5dkA3C971kFpDSevjefSGTr59uFxHoWqzkzagx59U3WmhtCQCk",
  "key17": "3KaoEnfzG4M1gCU4Gb3KdEDwM9tzb34LhUFvwsYW5JHJDFLUfnSsNJ3gkyLy3yNr6TSrrK77LdNGAnPmA2rKeDpw",
  "key18": "2QfkM3Kba9tPEAVmGXR83P92HU7xjordiuEFWXsRxWBpup5cZ6v86rz4HsJ3SSHZBGkpWHnudH3uPz1opof3KjQH",
  "key19": "2o2vhRdiy6J3CQU75muaKar88jokvhTMxozQumV9KQ6y1oVtA8t1QX85AVS664y3M1qmkcUcBXQMi2dBTxprXQE8",
  "key20": "3Xo2VXZX2eDmQoPkAtQktZNFS8BmT8hbry8TnqdXCAfik2C6yAtmLar9voXZSaaKW2YiwWfnpV8sPLLn8BJ9ixZT",
  "key21": "29Cgh4vHHNUHkg4SteUJUrApfEset1mqPoYqX9Qe49uqYx6evtVNT1CGFmsVPNY77v77HiX3HUWH7ggyetWcNLo3",
  "key22": "62kacFJ1EvrZz3kVjR14qzSHBPTVUTh96rXZSMRiX11LeNoac24YqxfFP6oQSRysNNCajbEyVvewsoFMTUMNJorh",
  "key23": "61KtAiY9TSmLb6MDr3FM3xVd1P8tquwWXy8taqUFk5FippXoxv4MNfweQpqfuLTpUesQfwTiXX4oH3sbYyBCsfXK",
  "key24": "1p1iTuGYUPigpuNdnjm9ueBggPZNEiB2BPzB1UnjkE5EDdc86cZoSqUWkYsYrXDY8xw8wBwyuBWsKQQ9qiWh4di",
  "key25": "582pC2hFcPPp59FKmMVxNgjTzXiHK8XCDPjvmMpeNpyajKU6zHX9FkpPBhW9Qgr5QDzrvTvPSxev96yDEvebFngK",
  "key26": "uqJDz7Qhoe62MJgHTRFF7cexkHmUC7oJz41Gu7efnHAUX1gyF4LxRmwt5GKqPyBjUPZrR8Bpa25QbUp5q2TZokw",
  "key27": "5DkgpMgs9dptgYpoyPDQVnNNw8LnzzvgicrbAABbv7FKK1Ts3He1vosK3U3XtjMjxGX6ddwn3F7EbqXSbd6yfTv5",
  "key28": "2z82mNF878zEQnVXA5m2Xm7iXcA9VtgRWRgvnbmjPrKEDm3NJgJTo5JW8GyvubZKGTySR6vsQ6ZeV99T36Ppmxxg",
  "key29": "d4emSautv8sUt2oEKogcXDhzf4xJX6Xi5jGfxQRN9q3Q2b2ctdvgsPXmnKF3J5u37MocZMRHuQSKSDEMp6vkuL9",
  "key30": "2ZTUuMYGvo1UJVA5jbEc57D6RasXY5JsxpLeNTT3FHHsAyHojQmte4KtJSUfxr2XyBgiUvrrWMhXw7E2FSLiSNow",
  "key31": "5BRyXT28Y9CugYtWgjW3yUPWUPRtZNz69pvah2pZaspaKEBn4PAoTw7TNkyLZsyFCW4xPLucKvAJ3B88FLDwdcE3",
  "key32": "3t1gPcmh1AQQh7EeHeUuNNsD49DRSewNHtwSbX7qjToAY7CUzuA2zUW4XEFaGZnt2TdQRLdYH36SUWj82RzHTBAg",
  "key33": "U25SXQqe2h5LiCTydpx3u8YKHaQEFyY4BampVbXHNsMTvnAAdWGiy6eJEYrS63DeZwGqA9iDrLtNdTE5D1GWsBi",
  "key34": "5Zu3CETZg9TRfdcuUxWYPvJgiLBCohhgdEFfAaLEw7XWawsSWfQztMv3CYK5MTs8S8dg1T834RwSPd7sASe3ddvA",
  "key35": "5iARJFjNMrnRVY1w4TpuC42Rg1kv7hZ56zBn2aPN7VyThkj1zfExWdz7W4uijNxF7Q8mgjQtuxfjaV7ZdpYmLZYh",
  "key36": "2MnHosoFd8Siuzo5xDkyx5SqL1dZv6tWg5XgThVXNsNW1pjq9NwHYpsNCayvBeZodxR4Erx13ZcpoHU16WfnjoYy",
  "key37": "4nEEHbx7od5VErKqZ2aPegbSbzQMnhjJTJ4feAJ9tnL9W5Dkqk6k2W3ZtV8ETYYnVRYcDukFR3tWzRAYYn9RY9xa",
  "key38": "5tRZqDZFJa4A2yvSi4c49o5UyUDiurmGfHKTk4uBps1TGD7q2Je5212XbVECUq8yYEUcsh7V5oQK3bTf6mn36fQc",
  "key39": "2nw7eskv1vcLRGA5L2Ub4simZfxkF6d5H1URndukDteVC1h5AnEivKgfZRcGUjvNgw99prYFe9yV6uWR7nq8xeva",
  "key40": "nB1JC2A94b1FY3AztYyBDYWb5RVxPc49uUDeGSjW3MKQ5GfNcSHSjxXHd1ZMVaCurEEuc4FiwEtgWUtAGz7BRn4"
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
