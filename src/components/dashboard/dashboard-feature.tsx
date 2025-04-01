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
    "4eXQNh7KXkMQZg6neMQMDmDmB7pE64zteGUC9yPQNRjz5W69UfCg9aeaBgNasWwPJzq4hab6QWSRLoga2piGnDx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVnjCEormQ7TknjmK14SaBc5vf8sHXywPyMAYUqbHNdcEZvXjpBpX25DS1NB7RWfc2GmcEA5kHDZ1F59WdFsrME",
  "key1": "55eoTQTqnZ4d2UcygwAAS4g8nnQ5Ej2CMuYcFB656w4mxukCeXGRk4ARgiCgqQ2S4wj36dV24xKjBJhENosj7F2c",
  "key2": "5UF5LXV2haEiGEdpiBjHSfNTqsmMSDaHHA7B6kjJ8Mzh1oiiUx6xVatDjXdF5f11SUyWnNT61Fh81vaWc842gEMX",
  "key3": "5mWR2mG8sr34meeAvfbtc2KuMSnd6i9DrYWfKfpPjaW4XHMHJ2Xz7oHJWsB2GXLpktpmJSAHeC7BdgeqUv6xhSUy",
  "key4": "2sfP5ugNFDsgNEP2LKmT99oDEuCXaW4pjMCrkJVRy4oi3SUzagNzvFuBiVUU94aAmqbqHrUAyeTKGntLRPSqcUSY",
  "key5": "dHHo9AExh3pPmkAgLTCajZihmf9ZztNi65ai1x27dTMN443C4GHZbFawGivJ3YQEbrNCcQLiWDkRSaVU2b9R8KJ",
  "key6": "M2yjCvLXLzHtJEK2xieihJnfrbRPa1FW7Fo5YzB4BCoLSCQngehB2nK9T3yfksss5c9DFJYupt5HZMr9eaHsRWu",
  "key7": "4iFqNm6xKTNuiCJpst2VmUSdzhU7hU3biy55m63NmsvpGTaBjXHCgjxP95ovGYtMdGPUpAoRbUWYCJJ6dKM7yDR4",
  "key8": "HMJRY8WymnLjQ3fshtXzsGimQphagANwwauweKQViruhSQ1QRe7LbHtCeoSYwya5wv85QKc7XViyT4YDJMZ662r",
  "key9": "4Njj65TTha2t1fUC3JhJWJehSyscTE2ZB1u8YHmKohzGuFo7UUtrfiwjySFBwB2F9BrjzVVmoRcvD7MfwW3vD2Tx",
  "key10": "3u5X6QN95wBtVVdSeEoQykVMepH9BhwjUk12bSVXNyDebG81khkwqjWN3HMP2UqA1pLYLxRS5XrPAs2f8u5TyjsA",
  "key11": "2phJ6pvJme2rFgPFoSFU1m2o3gTL1fBVYu8XADxs72MRndz6P1ydrfKWB5DootKGRtsHVQksA4RMUJmosK58QbTn",
  "key12": "2DbFvSCh7CfpxcRvFYLQNsomNgZgJrgZvopq9Sw8PCchi5c77FS96iDdm8fvsKee54CzDkujtLRsrSRBpQWKsrFA",
  "key13": "5AWzVeQohLjuD3LehWTX21ckrXJDV4xthPTfi6QDaf15vb6eRn7yzXHwNEaajbGiNSPNzRJApqWgPseRZWMekBJT",
  "key14": "4QFPGJKds35C734EH5o3qjLoQswxHVhLg5SQejeGASJwyf36B37EJAH7U6t24x6WpgNLKhkqF2e15hFfF6L2XnLJ",
  "key15": "5dYVVooJAdTJLqGdHeDcaK6nPVkCmfjpjXZT3pqp1nkKuD2RjwnJfCw8cjQRRWPG1zzAcEWmmq1yNmeFGEUEMdx6",
  "key16": "jxwyPnXuyxyczezJkYKXDHtQEe4tDyYPPMqt1RkWe5s59oDMR78SnK9AGBECA7roRV8PZy8Dw88LvnssoNAuVuR",
  "key17": "44kb93i3xXarCGNkZySseM8YNYVhtL49MQmopkCZitKcXhwcTjajQtyZ5QN6gdgZ7Ed9d8SHk4J6ymKRUGbanxiC",
  "key18": "4pjCC3N1bQXBwRA7mXZpngzpqhpD4K85W2E2jSQq4QFA7AA1SMsMy9cGcSE8C2jpaaaiT1bzTirHESM3ssKNjr6S",
  "key19": "5KTznpo823J6wK7wmY355LsUZUreb4gjtfKzWtuxPzBkn9h3knhUfZwt7rZVwSPJWcd7oJFmXfs8qzbDnP1kjoz7",
  "key20": "QoVLv6NFP6NqAtio5rZ7raq5mfPTP2bRNynXqAZEP1j5237FJ864UVjyPkcFhvZSA5Mg3MFyzKRwasNZRbo6tEM",
  "key21": "4YobWtZS3d7S55AnhMMDJ5DxupceJGMrwKwM2MBfCNRn5GC6QJ7yUa7UEU6EVbEpyDe6ddF1yHJXnxrnRKB91Vt",
  "key22": "5u6nVvpgBwsPVbvYkcVFaDdZTiXixbALtNULuLaBgmoortjkHHrsJrHc4qKdZCLzLdpUe9nu4X1s1CMWPg1rkoQ",
  "key23": "4WXwGniDY1Sg8E7sgUgvzKSdpHcfnmqYKZ914vfCSgYtVFaXa3PM9VjAgbD8pLdJR2dNmkTa13LXvJCgkd4qkKRp",
  "key24": "2Xy8muL5dvHHPNw7JJEpjxVDQkrkrUs63UwATbUK8xLnD2UWEqmWghZHsn5fcoPTguaenZAfBambDS82TS9mLk7D",
  "key25": "3LRTmJvcUK5MQTcnqUtkAeJ2yksV5HRqVPLTmsH2bB8bfrvRZxBMpVEafys4gUWti9A1FgpMy3jbbqZrNa1utsPS",
  "key26": "5GRTbEtCBJWwJJQLhVmoV15fdCaD33Kd6nb5sg9EMtGTNV3hSuMCvpfHqqDyT8RCuZrrgASpZzbiWSXKoqT7wbLf",
  "key27": "JBQxLK5RLfgbj2tmDpVg4syU9rcvGhCiWe9E4SZ3qULT33pCMoRN9Xp8Y8iRCizL35uSm31wRaVJiCxg5BKnAAQ",
  "key28": "5DG4SNECoevcoztt9FZePyzw9w6bQL8eKwCux1EyYVLQCof19hVTUUVDzQesnvKFWoCmgqDZszkMLon1EiZgtCYU",
  "key29": "eWdBzhdLawnMw9hhEjStDJaFkfEwbwpLa4WUrJfmDDG8KFUxTKgyExZx6oXYsCMRdHkGYj1afujsUePcvHn688r",
  "key30": "5BbUyMc87bjCNwWc1eCUNLhsLpvKQahbLE9YnLdyvdtXFNfmbhi6tqBbcfm26iWAveQQhrvjEFfJZj68orPBdY36",
  "key31": "4ujyTNSMN7LnVYqTNS5fWYzRWZU8ai2LKXRyusAbSk92iabtQtWQWCxPADfKLZrC3BRLak6cjacfFUbx3T9LGHpi",
  "key32": "39Zr4QJoMwDLTAxavanmYm7PAFzx1HwwkZSixxP64hN66JC5BsZc9bQUxtk45sZ58EAkLSMha6ug2naXKhpAS2Z9",
  "key33": "24BhaYVwjoiV5c4eR2KxGdrCuyh8jiivvehzFu4oVv9f5gDYJR5xRggjPvRQeUmeJPWRzRAS3X97NdrwZBxjp6M2"
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
