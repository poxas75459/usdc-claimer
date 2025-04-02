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
    "4Mca8M25HPWKB9UDGbTK5y2SaWgfZ1HALo995SNGAmXC5vJjTVssB3piKUgN3jBKtiNmvSXfE2eoWiMAAVjPpyfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2smpNHtXAmvkEtSHBA4gY4VS34DENqE8wZ1u82B9tdubkKQQ9VGVq3NX48cgQHmnBsLprSd1582iB4HGNsL45so7",
  "key1": "5mwqBd233ZYHqyT7GogVU1U38DmcGYeEVW5LaDtWBXLf2PFjF828XwahpCaWocBnGS6WnD8dNUcCg4k9DQYdTrWj",
  "key2": "2r385ddQ8ZHuCXF8r3BvyZuH8x6ffyhMe6fSKDMTK9aWLxGBvgizb1KEufBiF98zYK25AjLGVBDfVR1Hu8Zy93if",
  "key3": "36m4m7tQn3JycunBq4TvVGYKudX4Xd4vTQ1im8AT2k58HCosQuBASKYYyayGzHQkQjdySuvkG4C3WovZEM78Gk8p",
  "key4": "g7Cu6jCw7js6vAb1KKsoVrgk53WTdn7VctUANiW6CpkK1QYvdW8mvmMXc7vYQSKwsRxdDdBW8NYTD5GPJj2p7tK",
  "key5": "4dKFH1xd3Tm9tqtCshB8m2yQUzTcEfbFeUWgXJGQj1SVkaFLUSKHN8Bc6d2XZ1TiY1VZx7cJ5ksQQbbu8FPh6qm1",
  "key6": "RS1WLTJwTc83E8bu75V5LkrcNhJT9a7nPfvrNGNzZJDi2iZePvxzBqeeGoCz4WUoUNYorE4LGCQD3t6cDA1K4CD",
  "key7": "21wqhgqxt3e1foHYokAbn9N8PZvyPiAtTgHAZXYHXjptqzaijL6iHhUJqirBJ1NRsu8oFizvh7QWnFhgg7narXXw",
  "key8": "4JVxwLNLFZYq6ePN41Hx1WPqV4gnLDJ6kKKFoYexNochZPC7eyUGqxtWrCbJ9T38AMYjRP5PuYSvW47oYCq5rSZj",
  "key9": "2yLjSmebuHeq72gsTm4Dwf5KzFPy7vuNJe7MRWTQJozBvUuCRU5KVGPxrg6nuHNuqxerkqVBBAJnMB4T5MKPp1DM",
  "key10": "5guoVsXTD4q9iUshFRTkfMgXmFFL8e1gJY9YDyDGukg8dQyQhs4Em6VjLJDFbT55E6a4G6xTLUijdq84ULjgDbqe",
  "key11": "2T5AJAExstCguBaVQcryfxLyM6cxqZyN2kxmsCsHJ6sdQtaEpkxtfnjTDno2G4dw5cPeHLUPoahVKnJWZszQatKU",
  "key12": "3aKaUmv8JaYXU1xJVa8pozfhiEApSt3GdK8RGVwr4gjZtg4xwdZ4DLqNd5MTPmD17a95LnaUw1YYNTS97hYEcSsz",
  "key13": "5sthzFwVVyFwYVBmmbYYriSWibVozos4cn7Cphzfve79p8c4bsVvgRM54HEkqMzf1nxL5vbkDiZ6U8cZ121qkmw1",
  "key14": "5MjdnBD3xiXKakkNdtdw6ceBuifkhYMXTvqReyAyjkUwFpKkSVDBNSYhTQiQYi8AcjZgS7bYq7BgVEuoxdewEUkE",
  "key15": "2en9jP5x56B2WtqPdV2vA4Xe2gEkaP57ypSyrxyKK6zkmet7SaGVuVMDSsYn1wvxfqE9GhcTn3xWZmg2XCgfDpbt",
  "key16": "7W4c7Rou3dDVEMNFdTnnCzGP1vMeKESXkY7yctDkodseWpsQEKQGYAUtqLtgSnGRQN8rpE6cUPRZv6PLWj8258d",
  "key17": "3beSKgAbA7McX1KFw6dTKX3cYzVKqWbmrdrcAVb5ppnmkgs8qwz7M3TLVELC5vQU9TpVZf5UENrmW7CznLUcjNwH",
  "key18": "2bPmg8YkZQHnnKnsKrmBDHgeNeRC9Yu6jfsxLMT54rwSDmL4evXXoRfVCYUFtkXtF6JPabJcobD141jv82oBdZP",
  "key19": "4XZ1bokWSbiaA9iVPeQoTw1JmqfaMg14aL1Nr4noPtg9LMwoeCPA4pVEbubdzcLwiL3zmL7XKnQe3T72UCgYD8uD",
  "key20": "33ZjTdvVBNvGVGKgooVKjeRAyNY6aiqHpq1i7kp234n2p3NSXqpaQqzoUSGAYzZTdJSH6Xr1fYHifdoPEEunzhf8",
  "key21": "3tCeqznxS8e7ynXi7vuVADybQfCxNi1tWtWVckFeuNrcN8Vo7zM9cGHqSBFCmCmrBtfAnptbRpSu2nLeZZzbuJCQ",
  "key22": "5Xkp1yZFrTXSPYB9cSbCrNQtEF8KqXyifvgJNKiPmUPMQfgtT3jDRX9LbgqKJRc8MeEnZjqVpPr89wZ1PD3DN5NU",
  "key23": "5nwqu92B2bELUSU8TmfDM5LDRbKSjfKL1J2ad9SpK7XghidbdHDKRGKWk4eMRuDtsp9KkkegDyKX5QH9xuVpM877",
  "key24": "63oEcCN4aq26tAjknR9U7LqVfnnt8teSNhzF8zDkxYnj3G4L6Qai9aubESSgLPN1to5GayzPgjfPuNvRt2YV1xCu",
  "key25": "2i8noo2JQSsctbNTRTKev8YeHRVsirThL5aD9bgBQMxjRaFvScUufKvRJHt9eb3CR9kJ41DkTBdu3fxQCXseB176",
  "key26": "dqbdPv1DfNxrDZP4usKcrf7w7gR6vJ9vRyY2jqxgHpyf1q6soFKMJK2TUDDtV3iyZLaw2Q7jURjaQX417kxSyVa",
  "key27": "4ni9xchVRCUuBHw1fa6iDJvELWFBdKcHcTr4Fp5ZbWi2icS5nBJaKQXti5L7ytetGdukvytf326Kw95SrqpWXP26",
  "key28": "2N7oYibwM1Gc4upnggzZsuQYSMFFuJE6Tr53DTz4YUzK61GVAcExAi9Bh39atrBG97TpMCaY6isMPhu4ojNkbY7x",
  "key29": "4gVLeq4SNPFY5EQyqrEjXZZFtovkagYogaThwHAwgS6Au6MSLsP4iY7jLu97ya9j6aoFEYNpzpV9dhH9EtPG9qax",
  "key30": "31Rt7jfcWJdND6ge79JupEUkjyXhqcHExr8TzWP4aMeeEBzkv7r7gV4isjuAXb7qQ1reBsXdTWPPQnD47aEDfTKr",
  "key31": "54tQFUGgpbVoKXGYyATTwBN8PBrWQK4mrXh2WY8mfE76MsvmPUDprE3rxJt1NPy5J7BnKhvqze7Z9UaiN5Hx79eh",
  "key32": "59D5oUtNYidXxHDWBiRCtnGkWVSJuymWnsohUWucAizWJuxLZ92akfMBUr86kZ7FYTZ5SZDA1CUrGBZwWPk3R7yt"
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
