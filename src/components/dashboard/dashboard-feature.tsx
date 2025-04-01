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
    "4db2AzmzzJTtKdoRcDeB9qe5NHgPNzRMNK54c4YAwajRP6ApnwPoJfcoL6NpUpKtcQyPHy1XKt8mWqCvAAWWzV1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nNecHV1m7V1J7YBmp645K4NUU4iEmLXLw23R82by8oRYcuT6caDmuxzwhfwNuNyudJVhYxHruV2QyG6JxAToEE3",
  "key1": "5ZAKcNWrV9XSFJjG7vNzztACq4RC6iWQeEyBsTZKskCdbYxyZHP7ELNCvXy7jby5RTDojoqNZSF7oyKpiPoJdc68",
  "key2": "27MCQYEKsLkbDGD7ZMPxsG3Qk7ujMqYFfSYN7cmxTx1P2tk5yBqnY4RYxWfWBjgNxofBRBPp5RJ7QsyNVDcuJGdw",
  "key3": "5jnHNhszfKBPGexE2yhDsu6wRMTxSUwwSdEtv4VXZmWnqfU2pueC3wxcm75pSoCDaaZRph4NKpQQ7mkhY4fbEpp3",
  "key4": "HfpkW7FeB1NDWdkxD9SBUxH1eenbZvfoxprnACsB78YVXeDmxDsKjLbrKZ9gw5j7wYzLsrzdoQrWhaGETop7YBd",
  "key5": "4FLexpKZmD8Mvr2VEabakXx5NygoKzxsRuQouRtv3bQoAaZWFf9rWWKEfqC9zFmr8q4gbXo62MUfvP2GgMFRVjWh",
  "key6": "5x1mUzd8LQZyRnnHnwmBfxB7b6eTChRcD3E7FhYTA3mgCnUd86xsBmteEToxDLLKG2ZHgmpnCEGb4iYbE9cboq5k",
  "key7": "3uKHU1EQuc4oN54CAma5EzfFGCRFzCSW7ktRn1zPLkZ3VqrjC4d5j83A9EZYWegCBTLhheJyFEbDxZMeSNZsUk1E",
  "key8": "Hv5YkZh9g6Q2GTWa9hjMpegRMqieL7A6u4nXSjp2Gpbo42t271JrNF1pwmphB9M3B3drPkR9X4Zpf5aRaNKeAvn",
  "key9": "523bk7Q9PB8pACNYHDdi7EJ3abyX95vRkf1ge7ahcCqKzSR2AhwykoLkxfeAj9WFBDV4uiip3PvLJyFa3wRQpsQ2",
  "key10": "2SDAgny4GXtyWjRyYEKSweWr8BMbshjc26SzKUtE2c8d5ytd7JtpUebb7rDdy71hn2Jfihq4nVL7EDoX9pJidFrk",
  "key11": "4kNZb4PpiAnynqSmKPHxzaWiQGRouQvnkkCmBwHrx9NspWm2DFjuF3bKdwBiX2s3bL5mMF8Y1GTeaQM5MvQSXveK",
  "key12": "2dECYqkZpQBFhYH8xTuNLR77YNYSPn5kC4m2hYDPKc8oGAn3CexmMSAf2iw5bfWzZcPa61qKxjf16pqYKFXGmcW3",
  "key13": "5GT51YAkfChaZBcFDZQxvNgJz3wMG9mSV39E66A3LuRXLgAP1xU5q2jpxK36NCbx8nL5bDxShM1XJdbwVtiXwFhQ",
  "key14": "2ZY1HSsqHirmr3y5DMpwtBY7zbXxDNkcJCEmcDARGThzceZMyUbFfPvc4DSAUNHY21M4RkrMNUw6CU7BE2ovsAao",
  "key15": "QTiygyKMMSsgUDg3ZVvQUdRk5yFQgpBM1MHYoedJM1UYrAgU5UTnTarQvEiqerwa9vchsJyonCKnDhEaLfxY9u4",
  "key16": "5VQBvkrgcy4YipNQKHUJcQoHrhe6CdNfct2gadjMts5R4ak5a6EgcJPuS3wPfeWL2Wzpx3jGZmnREdxLkLiz4dTE",
  "key17": "v6N5jN28nP8B7STXdEpW75HNupUA5rysyhTrAjiDWbHXVknQBABTcqvpQe9y9vCKMB89QRFw9nHZ3jd4PA4RRoN",
  "key18": "4DAjUuQK6Sza8FKg4U57XTiiXfsfGZ9nrrSwsHe87CvYQRq9wqSSTkFwGMk8ZXQ7nRhjkQgn4SPjFgcbMtzXn7To",
  "key19": "67UjpGGUbeFm3LkoM7zRdoQartFhQ6erBuupCFDVUjZifVeMMnUxpbsN3KxhoE2qDGVabdMpLDwVsSP8yA33zbT2",
  "key20": "rAGgGXhgfajsq9dxrw3rocEq6mt3EUbSP2Whp6nXDoiCmKqiPyecDLK3Fi6pFNaufvxo5zohwAr8MzCMDMoKa5k",
  "key21": "5EkVXemcrisdCoyRWD9kjzZtGZYbDLzub8oHXwy7G3t37y1ZhiFP2rt8rQjHTKjHGae15xAXxtoJeZRJunjXFbqX",
  "key22": "4fZ8ZPNGtb6bu4NA5xAZMQYt2Evu9X6SfMAajN2pjedp15DNKZPj4WgawXewqynkHJfwCqdNLePmL2acuVtTTmLP",
  "key23": "4wPFB35WeLvVBUMU2ejX3tz2uwRVagLAxP2WaRRmuoCwnrJxApLU2MCG61cAJFwaxEfrvQDgyBKrsgbLgeFRUWgp",
  "key24": "56SiwYUGweLYdG9YpXf2zi4bhw2ZT223E3T4zudYSobLsS4KfgXWm8SxjyUm7sJC1Hbbx6gBzKyF7h3MQbxFpSGG",
  "key25": "5jE181zRjFybUApUB962SCVmJgHrMLFkRqGGfYcTWdHi99pd7zd1SamiixVQP4dj22BQbuwg294Xf6nd4b1n661o",
  "key26": "5iLSUSSL9GcPuPksPEfurH4gCpULzn5z5Knuixkf7Jv6kM19QEmczC47JtS9ffUunXpwh9MUJQvfVaGZAvhsPnMr",
  "key27": "3k4t7f5jhBgVRhU359Yj4wHrCdrUg4Lk54gyLrDSGcAPPGJ3rXWKhwfbxRrPVV6SD3hjUHoQAL4oqSgHm8hSbbzc",
  "key28": "57VWskjnUXJt1iCkaGYqJmVEvodaECDrtAV3mvskxM4iVmT3Fh1rswRrg9sB5FDBTKTaRKKadnstSjVTGh3V3yii",
  "key29": "2xZLg7oUfM9MSW9tWiuYYmhyVisVJU3Tss2gDsHdwZpWcXmJus1A4sm3ebZRKeBYxhJFN1XgQ1KLwegkKaRAcHtg",
  "key30": "3NuLMGPpqXUHkPQ9e1GHM4KhmH4bUC5AgFBi2VLY3QwMRxToM2k9dmrEdxt3ZgnDumdpmF1s5weVx31a3L7wzTQ7",
  "key31": "5uWMbN4jDUt6BQSGxEr4QoDTHorv6knkhnbqt23EMYXXHAPswJadWPibmYgCXSjvP4VMmcF9CRDq9nN4ko5zr3MG",
  "key32": "4LTc4P3YPadDxX3A6YTU3px8DvejTdcppf6LmKgSdH2tj472vjGxLGo9Q3CcSkJzcwuRp57BtU5zt1vbvM93vVsw",
  "key33": "3ddNQJU9NzskuVsvfdnivM2fTmW97AzHejThHx1G56VMPPS9SKw83w4V39VoiJnwYdvd8HGibajKdnFYnfyAr8uU",
  "key34": "5QuR2CQqDzguDDmai3RCMs4X77J3RyerYBrMtT1t9vXD8PrsLG9J5HgwrByvVVYuaWDxxz1DiFcoycVxoqZpsCWX",
  "key35": "5rY4amRYVJJrvdqKb5LroFJzP3WjPeGfU4UJ2j5jZnZQUQ9swqinjwJXazzjBCiYkVa4AM5wLiFYqTNzbwKAm5tD",
  "key36": "2DmZbcEC2fuZPbfzojVGVe14znfhfaqv29wnDJua1U5JMEKgM5AswHKqwo1smnrMd4BPALVxUfHQ23852eysFiNY",
  "key37": "4avWxQatKjeAtHqSYVsWfAC5szq9hxLZhnbuXqdDcN6hHx5jTZ1fjKnDSYKiZVp9ZvPQsspHPHnY8PLjL7bVx2Y",
  "key38": "4otGGzBN1o3vQwYEDgboSxAyWRpGbh3GHb4oFqV22tvwGkQxufiDAUbccCEMVBSqLniZuYrugRfgHZmSpB5mauXf",
  "key39": "542zehDihRDDUTNqFEsbeB2aQf3vs2YbT5iHQRmme8fgTPwx5X3iyTAojBA23mewcc5WM1J2wg8QihnXVujgqkZd",
  "key40": "4Q66gGaB8RMTPk3dyayB95Mnr4Xig2ySQ6hTxfz8PCYPfhj52VhDXKTJMempWk4MgF7mfhBCrzcSEsYBjW7tYBNJ",
  "key41": "3McQ5UsQzGiUscdvRA1RiNf1M5kRBZKHb2cWAg1bhW8d6Kxq12UjR1ZRZsURmbgtzNG5XtsAsyjCr42rWLkkBW1G",
  "key42": "ixiBgPwJSgwqqyc6rfxisaUBAE8tY1ikeXzRVnzfrCSdRsQRfZrR97a9uxc554aDhRsDsLWyictasaHxkDb215J"
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
