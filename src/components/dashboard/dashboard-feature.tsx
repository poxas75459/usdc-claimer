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
    "429xYjrniBu238xFsg3kXVQThnVszVJbfZwHLNcvsDPVLmx2u4zDj78gHPtZPzAYNoWhLrhUPZtpQt7qma1xZCAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbBuKe3YMjJ3t2QDRcdhtNoU1oGgmfNfeDvZsUzEZfxhNdTLZtMNGKZTDE23TyUg3tNyLkWpKHdTQNTDgHJEEMq",
  "key1": "4twWLcUspjaMkp1vKz7Sahd7tR3ZqFGBNppuiZU8GnZhiTMmPbD2tYV65X9GCihLZYPRqBeRfcfTUww8ubBkyTK4",
  "key2": "3qxveQ7L9cemKNXugHCwXkbvwYGd9uigEiL7L5ff5m3ty2LDZecP61zJapo8jqSepxN3Z1PXdo3j3EHCVp675Bp3",
  "key3": "5bbXQdczRFPQYoTtkDrwpHDzM53hyGKSDontKd6kAX5Ay9wn4wKaVrKmVKrQtTKqbXx9uz3ydhXJxcgue96bEjEn",
  "key4": "4qo5JYWJgfVaEa3zzKrTYBsmH8akz5B4L8eeQbjgVUcUAXugSQJvsNLwEtgtfNeWpXEUKiVFUdiLeUCS6pFSH9wP",
  "key5": "2VdYUZDZ6yX65Y9GbRkRmJWqLnQtteQaNauAkh16CfrTqGWvfV4ZwtSDSnj9p6tkqLUJFvjAVHVokkoYuuvbTcYS",
  "key6": "3ABxHMbxH9XwLz7Q5CcphSQuYk53S4HN7atBDw133vqFgo7ciZ3xXqkLykfyxRMj15eDHhmznWnTXSAbTYSEeb4v",
  "key7": "BrMv94iZnxmPcQWos9PQqGmMnTiYqRA3VCP1jMZRhZog1EChMX5EE1xmA7dd7S4Mf9UXQDFxVU5f51K46bJywg2",
  "key8": "3aL1cSy5CPNC9DsnTcanEdYY3ogMhknDTmpdFC4ggiyWwozifT47tf3EUykscVgzcTx2eW3EJH5zH8RLKAnmq2VF",
  "key9": "3UNz1FnW5AR5Y6hJSCAu7CW6jP3b2gUoWvsk9qTrAQ3Q8snGut7sS6PaxL4p4Ygb8xzBSmoZtc9J6isoypEHKLeG",
  "key10": "22ZZGj9ZLVbr9qhu7d2hTY2SZARsYMqX8VBiWCWqw5a52vK3zftjHrVghHHVnYXLfXLPCbyYEWdiGMhWzAv6NPHn",
  "key11": "65hyeKR1XAjrca5op8C6cgoEcRDbwkfyCQxDLVMpMUGkFqCu2X4cUupoeFXJhxcjaBegb3EtqkhmHk44cJMG1fa1",
  "key12": "2JorGcPKZD1mDEYrLBCEi6QJUmAebM56BtkXkFLBxZ3LjwpFNH7dQoqo473eXp7iMTip8M3weRmTBhFy6yP9XM5h",
  "key13": "Vg7p7Ur2jvtYtcbFC7nobmzbiwJ3ZYdssimiysaXSkH8wo2qZYZM2DXYZJSBhPtsxM2EwyPG9JYZ8fXWCcCZgW3",
  "key14": "5HnK2k5fNdM8iVffHYMCZP9HVVFa4UboZWsciJhuAcdyg5Ka2jVqeqtccyEyubghb9XgVvJA1TeReTwfyRAnuPMr",
  "key15": "3mMjZWYB9RUKpdpA3rp4cRH4eq5XvLBBuTy13MiQ3KRuYrrDFpZwUp34PYE41RKLfsCo5RAqZ9qHSLqW9bCa8T9v",
  "key16": "2SAGSMvjQ2kjAjQUUj2iPKajQanMkkAYYyu6epwigqWbZjnN9VApoZMqVDzBQDFuX5Bgq1dLVZkwo5m4Y5S6QZWi",
  "key17": "3rpEm5dKaUNHuHJESK3ygwuMmXtRHmuj22suAShYJtWYqa3cnBGHoyaJw8AGnWZgyDvGHHzFkS38W7MP2a6nbVgS",
  "key18": "5o8PBdGupMBLvjuUi8X4YLXAG7z1UDW8kc67ybqiZXyew2vFJQnHBZG2pZ94Ety5okYAkHdK23bR4rax2fYAXGQ5",
  "key19": "39KXtMeuvf5P3WeowBPs2mUxdWX5xg6rqxPgdFPUDCCi9SmemiNoYFpAa8P3jDS9cZgUPtYfdMQoSmBmXC2cagkw",
  "key20": "5ZhBjhSDYM5rJQcajW3Us9wHh7DyvdhFgbJKQPunouPCfTgHbrxszwRFvP9zeCvdxrbjF6BMmqyzQAEwmXXgf4Zm",
  "key21": "2bqbN1zu5CFZt29ueit5bNn6QcfQXvJn8k7xyeb5m56FyokquDy4rkTWxpDPEMvexM7CV7jUvTi9hgc6HAT22miL",
  "key22": "5ujC2Vjxsbu3VuGuG7LGp1DX3xySz5bR7gyB6358MAok8Un4NDaxgAFWsQsBZaNvLhGaJ7SP2L6UN5wWRRZ85xs2",
  "key23": "3oMi7XQD2wNVDbjfxwA1AYdEv1jCqaYMipvNWGTq3tJsjoqRND4B1wP1hsmHvESoeRjgqDArKW2bsfHL3dT1yqCN",
  "key24": "4T9wZrqnzT4vCuonXDt8QVeJymX8fcvwMQetFAZhgy5JypxkSCaTfnZzmeFVRrqFpq8ydUPfwgJGR1ELsJyVaTjK",
  "key25": "3F6JoQpZeWLW133gYAY4UFVQqLVS7RoxYUWTMr7FaJJs9L2W2y5gdTeyND6bB9uQUiipStfm2KEhMM3GE7BYohig",
  "key26": "51T7YxrWHbbarYdsTu3pkRqEguHiyPjCAFLaY2HfVwomfjuf27QMRVG5utzZyiXXkodg9Gj6FJW7KQ4hqDx4Dehp",
  "key27": "3eZ3vSMazEiCZvPgrhXE9udm71weAkSTZFTw4xBetV75fvuR32xTSTYFMK258QBLrdyynV8MaJeacVArpPW9SoWM",
  "key28": "FgTp58ZZEZzaG9R3RQ2XhAFcnCJ3W69U8WKJ4Rq1Ks7Fy7osX2jSRNLyYbFjfdHotF6iSPTjxJDpBT5tvoPvLXF",
  "key29": "tMxKRcwiuEJfikC8YjqYZRonRAmLaKvWdbXnzgsrByi68AbGEPiH8noQRHEv6ju9i3YsJtxdxKv5taLSZCaDoWz",
  "key30": "H2t2KM6VNhf7JcW2Q3YPKQXjpUZTiKMo1HC885h1ZtXipq3Xj8S473woSddYAuLcvzzo3rN8CWwiUDLAqzneJJA",
  "key31": "3faQhU5gzNkNshaG6spaymRQYFzgwj8ZdhNTStPGxnQiB9ZpJmjvdMU7Mc7Tk7F9LNwgfocQBMboLXJ6wLQoejfG",
  "key32": "65E9aCQvDAHrR2cFHm19C68VKDpBWa4pemNRXL4gNaZouPu6BBNbjJht4zG1CtJggjpgj1WGkQUM1kzS9yzET4wT",
  "key33": "2A65dFMqC5fNiePkXWwuui579bVaBfu6H6aN52oZJpXmFXwPiBNivm6YeNuTejCi1G8wvrtkjdqFNGk8f4cDvG1V",
  "key34": "3FBnvG5Bks7cnJjawtMFPQHmJDhGRPADVjoSAe4j5gh9mnEXFXRBuhao437YTPFTSNBqwknHGyYK5kKL5pdTPeUW",
  "key35": "4mHSb2ckiEuDGestJ6vCkUqtysfbNcVLYNHDe3wYyxYkwbfiJVRLAosGi5s2SGP6DFoCDJ89BStEQyYq2BUQn98d"
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
