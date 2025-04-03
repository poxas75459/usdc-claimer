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
    "667MTQUgcKq9SHghY3qFdm7vxM1fHd9LWBJpR7Tox6oUKgGyjByQs9uxZEouN84zcSkgLWGW1hQ6yeCRkL57vP9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HYJsWJP782LC6WcVwm4A4bGmGXAoe1gbc2He1Ux2Gd8xzoHtvbZrNoPdeH1fL4bcuaLJSHw3S2qmoZizP2M9H3A",
  "key1": "3hjTKTHbtNYf3dxyVEvtr6dLkfVAWHMyct4jeVFyC5L53rWgd4STHk3huEHgFFenCWY6GbUSyp3WWDcQuFCQmMge",
  "key2": "3rMsomsRs9k7YDZgS3gvDiHADgMRqLfDhLMNqnewbGEFvMQCTX1BVxF2Pm2cZwX1qK4qWWY5WPMM9Tqcm679wrkD",
  "key3": "4gcLSb6H3XMQD9mnmZWaEjYgeChGa547Bde3yPCPCrBmQ6Y3PGbnCYxR7LYCadwFWXTTNPNU5gkdPVDnBfNkSwbN",
  "key4": "5pdz6ngaLp5ZMDtw7z5mZifQr4kptAWoTgUpthnTNM3z36q86rrKuDjAtUFYieFFCYFC18TdN9aG9HMrQRbwj57w",
  "key5": "3J8hNfeyxw1V3xcQiWZ3ZYTxHf9znu49CLqMFumJrYVECEnLorDZCzr4iounTpj2SP4eeW5rDwcAXoJjENhKwqN",
  "key6": "RGcbcCSdCMCFbCz67Vo6A1QnTCMCQxr6cnLobt38swXiNtuUhHFLVEJBVWxhDUwUspG2wm78KeKywdknDaBFd8J",
  "key7": "4vD5ukcSYGMy6qdXj6oD7yaqvHdwstAkGDnTmr8CuDB23q5ncwgJnrgdwLm6nNrK8c2R1fsFLxN4jHVgx59nwkMd",
  "key8": "3mtLtRmMNeJGPyA8EmJ3Kk2hKG5Cn2WuYNa27cPbZbztLi8L4wrHG8RPV3Nn3AYw6NBTCigyz6MoGUD3Kc5meNMe",
  "key9": "65boPmcUSvxDKB2K4rhBqE6tbnsBRzsRzRQeeoFzUGWK8asua3RD9UWWu9c6MDvsUnSQrRmdVJgrkqxmx7tqpUeF",
  "key10": "4XYDMPY8Aq1zhDtVsnsZcU6aWofbhoNoeRRKBwCxYwostJxQrv3ij5tqW2xxGTZzf8oCMVWckA8C514TMXfSu9hd",
  "key11": "3cbq2h8gYvGzt7khiqmd55BDeLY3MsRgeBhzkrtigT6QUNkpGwYKmxqmCqzJSkb9VErbUSPGWBRWjswqZRwH8Ptk",
  "key12": "4NMHpzj4Q8LBh25v7D8Hgupbpq2XdzzaXLnzcqp571EPeFoXuytBJbdnpJmYABVQL3LM6QHdNHwK7XyjG87tRsGB",
  "key13": "457W5rc6qXJ9rKyBE7LxHHkQPmNHGEaVxEkDQSM1rVJw2jTmxUfcWoHLhonAAjqKH1khzPudMQKSesrwriFoG7ak",
  "key14": "45hz3kWWGzmvXupyRTcSK7ye3dTFXBJitprgKNz2TCgm4cJmbTqEk4WRqgfmm7KULWKueXxfjuDtYKHjSRJnhpg3",
  "key15": "52L9HxXHE4P8H47Mp87RrbwE5sopXLSmDWYYqs4ytLY4Va6XqR5FoJP3vN3PpLMuqquLLJ2nkVNzyCnzSYZfJSaZ",
  "key16": "3riUmqHDVC1pnuAx1ChLk3nz7dat4XAa6B6kw4x9XqmSLQLbEUxdqYChon4QXQiCY4tVgYARsYqGA4jiY8eLsEZs",
  "key17": "5gn2kbySPm6PSC65Psc5vKxAB5gRP4iUfFm4htACUx7Zj9xGo8VfKpkG4HmNkgxVapk2R9KMVHYqisLEB5KGxUh4",
  "key18": "2BAq4A9PeXXifLfWGxJcrX2oKNfHynEik5fgGzxuYP87Jz4yWsnxbCZK7xbd5DrNRdS8paRxu7kaK5ddPNdZ6Yf5",
  "key19": "5DUKuGiKyWxMGDsAGHPn2UzMX6GJo2MuHpsEDYLhKBXb76kysdB8Up8eRs23XEMG7mLj3KkASZew7pN6ps2mLtYq",
  "key20": "4W2cniEST366AR5ycMcjbXba4ctkYnJBXsgBdkK2mpXySf1jKfQSxqSFvjJLWDP1SNN1Xbnn49bvDJAs9KLPmMUY",
  "key21": "5iJHpQWVp8XGoX1jiXJAyC5mc1XKrDuc5G4sYRgsi4a7mrQYJKSn8tve7WAtJ8GTb2DphfN4sX96LT4H1tnGZ2z",
  "key22": "SQDNAjZdD2B5waCXu2cm45r3qvpZnocy3iqaXrN6ViwUqjMzk167wLtSfRhP8U3iQR4V894vyxsE3g8k5UC2bYi",
  "key23": "5q8hctfcM9Wfpvtt7Y6mNeHYmCz8sGvwP8afQgbqFXuFwkN3Ko1e7jqhUAmH8iKg2MgTu1bQZh1Jo6umSo4mGT4v",
  "key24": "5JonPPJ7JFx2PKReX74DPoNztS8Q2pzKBHXbyVYrCXSkb6vZvEPzbsZeuhvBdosxq7oJEcGs2mugwF3HZ7qCfAEQ",
  "key25": "53fTaXQvXJRuQci73hBLVd6ojZqA43oeTv7QufCU9NoWeBrEfGCNpbSbxMk5vEuF8BzYbbhq2yzvRUUwKnkNfhEX",
  "key26": "24k2REq1zwwh5ctVm58r8m68XxHeK4EZsZWdB3HYTabu94nMuDQFfy8iQqoMTRvG2PJHrgoMprZUQk7jfTWqCKR6",
  "key27": "2HD5x6KPHWXfAsqw3LXFyLDzkoNFdvWwQPyi85ibQmhGF38DeC5sW4ntwRJGRPGh7nhK2WLecYu8yKGX34yBFW83",
  "key28": "2VTRG9TJZQNgxtPv1KAHfSwtdZTaps99hjYTRBVo64qXM72g4jVgvykYG359MvZozEWmherwJS8JzB2jgMxmsc29",
  "key29": "4NycCo2H3r8vbm2LNkGBFa74XPDbT51rzQeY3Ry1JrbFAagd4WF7waEp1XqxpCQPgmcDDPsAy7cHabNTQ9am1yjt",
  "key30": "AirSYYAnGZVkchD9J2zHDMjm6WxS54RyqANyziC4W7ESkmYWs3QsVFirqFTxKKX1nV7J4VtHkE3AH4cnwYbgGds",
  "key31": "5dPHQ8DiGP3s1eYXJKQ55PZpo9xKbfbYqZwvX2XRPnBFth9YnsFUSptg66zyTJh5fhRMVcpUCvKK7xks8VpGmw5F",
  "key32": "5QJvDwbWAvVcYRhuoqv6idYHVpftrTdHzXUWV3DHz6L45kW34514FqLvP4ZnbF8RSWQroB793qJ5TFejiwUdHc59",
  "key33": "2RDJRwZBwYNjQbKDfv5VGmsSgWWqxCmTNBFdKTZfoj4Noucv93id6FDWntLrNnR3fEk9pbKSdDbHcrKXYPoJtBjJ"
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
