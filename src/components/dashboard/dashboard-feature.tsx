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
    "3hcZQ5BZpra3ss8Hg3Yv3GRtb2eAYSKgpzUZc8fGLrHAn6He7JzZF9wKYg4yEs6mhKdp9QdENrUXfxzkYsdUZcGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47tkVrB1mGkh19FGBTZPQDDkiNjiprWfhMEeU8ykRnZLo7foshRq2BUZVPv7x5tN7jveyALEYZnn1ygnxBfECQSr",
  "key1": "4R1tg16Yd9YGAaHUrnjbEe8GxXSQiqaEUmypF4nupJ4drZrHrBqDRGvEGt8V6xSsJzhWHK6C8mqXijRF6kqKqSQF",
  "key2": "ukxgz29WRuWptLkaWz5EbJBYHVdSxVfxzzU24EY7Q6EdC8mbtVGGRVmysViuHekzfv4uXqeJqrx7sqXJWHPaktP",
  "key3": "3unFwfX9vRuRLackUi8cW2TyWMSPGtTVisxfjoZ7hw3aVybBPDdvXBjJ721dHbYBK91No449qoJe3hN7dCEDMjM",
  "key4": "5Ht41ocVNpHFXA8kvViCNJm5PocvU5pXvKczhJnKUN49xJNeobwvjEmkxCKaA3VVfndthpGgsHgHLgtJcpMP2kRn",
  "key5": "5CFXfVPhSkQN5pT5cjrffxxrGcaX5nczjkY9D4LVAPTMeZiWbuxfHxsaGtGADX1Q3d8UyJWKDsA2rPct73eZm1Hs",
  "key6": "MmmsZqVFfHqQFdxbuuNtPPNpRSaX2DQMUjANGzxRzYfxqSRtc881SCctMvksrKyxZ9hbypbZie8TR9ny8P6xzZD",
  "key7": "3x1ihQXBMsZ63UA25fd6QE4RfyuPv1mDzxTkjmtjy9UUFsVQkshitNAVMW4hKXCTp3cqPscmRZHLChsnPXkY2CVz",
  "key8": "2duHNUKRbcJw5VNL4mnBKkcNSfe2wiVQ6ZXHaLNTi4SnPtxAJG1JG9Xvxk2A9BxNjzuv7EhsEZnye6m1H7qGpSaM",
  "key9": "5DJiWbKnNQ2Ri749zc8wfqXCriG15AhixerLiv8471NwpE7fz8VtZoFTCweBpBXN5dEi59rQwYk1TZBGo8SPhrny",
  "key10": "344qJ6BE2PXDfeVnWF9HJk11xVioy2YJ21bre86iz5iRkWkQQ1tmvYqqZy2gTJWk2Jb7pYVxJfytKZCAQMbpKDsR",
  "key11": "5H1D3NP4L3S8X9wdf4NNfsptbu7zEjAVKnNkcXvJ3QG9CbZFv3EvMQHps31YoW19admxL6TCwKcudvRu8ujqCtps",
  "key12": "4XvJeBUVsTRDLxZLnoUJKHPRHE73GbLAAbnZaaYihsQoVtcb8z15EU26swH1HXP7k348WGR2qsLMhGQjDKWrTPbH",
  "key13": "22Sb75bogkpX6LK98MDhC4fyhQMXzfp57SZcyTyEhUHeUKJZFYBwvPJr5kNu5hY5q2ePLuMzjL8xHASMoS9dGXmk",
  "key14": "wtBvXqSH5HprYZDDhVHjEGxvJMRCcwM64pw4TM6d3wveuWpyNYh6fBFoX3W3QZrMYuGQYRXMWUZo7bTR8aN5TVj",
  "key15": "5tif8B61gxxd8UDQM8nMVDEV65ToJAp5Y1tdPzS5Si7vZuqbCz9nJXU6wbXpCubrF35QxfwuD5Q35NC3UZdmVayu",
  "key16": "3WKw1jXhPKpEmwzCvtg14vnpjjxg3rpxVxzpaLTk6hMqLNUyt25rVZ3LKAmPr6wUTYfcPkZFg2Fz5TmnTdWiEf5P",
  "key17": "36hh2YQRJSivojEgsGqcwNbwErSNkp3LnqgAaL7DnfywLPSY8tgMJVgq3vEXPw57bb6SttP4cG9M85YTCeJfdrhU",
  "key18": "53Zy3NgtyVC9nQVyXAgHecH5ZHVjetLs2trJbeXHTBNmg8sxH8JquSZzNVjN54sXH7osh4CCXCBicunm71B9aHZH",
  "key19": "36Z38HcPrdZv9ShCzFDVi1UJecXrwJzvtbUTkovjMR4r55qFrn6pWrB6of6NnacTPCdJYmQuGeakp2B2SBgUeCp4",
  "key20": "36ineSmc1LA34mHNkkwesZwN65sksBg5PyyG9nEgb9SfT1a4YoKQtpnzTbEY4hxyXrirqMHRXydhDAr71vmC5jo6",
  "key21": "294RrRHDGYAsQWxDpWqz4gpiWWSD17ro8JNftUyCgFqCmBvjDHrS85uYGuYCNZsWdwNCu8AcRmW9YuNTNL4R4Foc",
  "key22": "2QkxEWqxb6he2rQmzX2Cxai1gJXoPygLJaU24YkdLGhs3i9NoafLRTjMFuq8VjnF9GwtXbAjy5EoDHW1AoCh8BnN",
  "key23": "i8BtrArbFZfa8xcbUR2Npb4hRu9UBnWoJCYyzAg6phb6CbpibZ9eju14VhHRHgiFdqEmNBCR9587zx21BQTwcHe",
  "key24": "5jfySjtNXbqh5bx6ZvPC9EP1ta9XHqGmaEMHELQhHKwPuKanbknihLBQTGpKm3tCgd3NTY6kfGspG2Qp4fhTxcpe",
  "key25": "3Jbu1jTKwPiUarxF83nyYjpQTbNRK86K2Em4YMTZ1rpNUDzCiM1DS19mEJ7zCDu4SBJAeBBQwMorotxaJ7QV7wdN",
  "key26": "2hbz1M4UNEgLVi1PXxSCdZHpjswiiUMgChffmb5yvK4u28FNgK3vRmASeKEAm7cA2n9ZednoX3Ab3CUsbGKqmKow",
  "key27": "2AGQ4kpxbAnvNzJFPYFvUzpDnfh1UK91HeUkRD6JMTSE4W9qb3Je77quV7soBcZRiKcZp2Mt84FeVsaK2ENieFLu",
  "key28": "iqhVnKZACZ9iiAsZKHQwBKXC8crq8h9Ldb43PM7kJCwt5YXhnE1fKcgGp6J5iMT7cJZ3WNPuJnRc4qFSvLupfev",
  "key29": "2cw1Tto62NpGBnPvfJuks2DibZG1fzix3Ut4dLJkBFQE6iHZP978CP6PRJ3ynAvwuitAEXh9qX7nANHwsuXftQ85",
  "key30": "5oe52Agru24nbdvx2pThQDdCyqUjEWxLxtrFcB2C54nQEmTk56YZMj92N2h3Ucy5LATJgwg3cgwubHHL4WvsJvpo",
  "key31": "3XFTY6xejmzp1cGEoWcQLfDqX2mABTRSzNH8EFcqEaCsPHZmuCxkZ6aR5bGnLYi6TrwiWavJPHXYueMAnNE7LQSB",
  "key32": "5N9uXs8NUjG3mgHEsVp2phFHxhVLvCEekmzzTDGqo5KZvSSgQXMAuEzLZx8VqVkDA2gozsF1MeBMy3rWmueNCMrn",
  "key33": "3eUSuth4Upi9dN74W5V4aoLKWKsXhrHGk3yq38mhKMzKEyjSjGadiLRGadu6PkBgA3gZoBaMiwKJHptp58KFxZGi",
  "key34": "2Pc12RPPUo4ayJTNCcvVGqHPgMCpGE3uYzyNQMfpsgdhtiVmSJT7JdmrKYC7Pd62b8knxupZs8jKNbAv4YLaF4HU",
  "key35": "2Grc9ncqtejXgTjAX3c7NKdLnGnCVcPBQBisZLog9H9MmxvLuf8CVszRENovnR7ywsRWJeeqeHVjARjN1y4YVqT7",
  "key36": "461eNjzebDjDpLNNPeeevVRPuCrhTdM1LLCQbHGhm6LfFNFokWDQyNQcPQ8NPGF3GUzdvMdUWe6NmtpiKWZgZpce",
  "key37": "2qe1Fp5ZiRFVYXvA4MSobAi1KnYafzLUhVfSPyZq5895BWDxoNR38e3Rp1FXBr9bo8cxP2HZXw4oquu9o6N6BC2v",
  "key38": "3mcawEV5LKuavKuuJvogEPH31fBwvkVMWQCzyhw2BJKGkFf1yKVD3k1fgf5fzoLRTLGNhL4GBb6REUtqfyDcKFk3",
  "key39": "38TdNTXWGtPKvdq2762AQTsn8tFc47BVnXQqyzZMmijnwi9PddNfaMJVUiS6LiFQoF9goQ4R7aypEWyjfhv33b6g",
  "key40": "549GxyeczaWGQF7DKGM3b5937ekeuh36m8vEEBNatMbDhCVAZvTZ93nzNyA6eUBmsTJKfbUsmvs8uAakmkGCajzJ"
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
