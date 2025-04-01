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
    "2G7V64TVSb7TMQo2rPYwJPgbzeuwcsbeeQSPwNk4UbpwAwhNdN1cFWEiNeL36p3sthYNf5WRHLxvVYFjHii8cwjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oJw2kCdwnDrQSAHbhpoYJEXQN4sDZvFnL3gq825HtZEKkeeFMoAJBpyk1pbBo3gSoJdPZmmhFiWhmn2BB7AYGAK",
  "key1": "3LfEuoccnRQaeLvwtwBZ1Qz1dgM2r8M46npn8Xig17dCrt8ZTewGpz8cJqYF1YDg7LnB6AePxS8E4dHXUkCMBHfC",
  "key2": "5uPwWMKTyyTByUjRt6XZsJiELsjugFr9SeqPg6K29K49D6yUeKXybr6WwPedTBbHAUZ1ohBJSaGvjYr6FYWnDYXY",
  "key3": "y4auF9n6dtGAkWddhLWEHp1A3wxVTWyXPoEkmBRy77T2mhTkwYrVRLH3TUYpDkdH4dymPZn4UQi8btWuT5QGfU8",
  "key4": "3Dh8wYo1FJrj7SF18YhzEQJ5EkPUkuRKeGME4eTxcaqDgHFUcJdFcpC1LPhzWHqfb4GH7E2bHKF7xMRcYbJGn7hp",
  "key5": "tprwkP1wqnZEK4gQ4ukNwgsfefrCcHGSiv1TEnBrj5knUUphpBzh5WdiZ8Jfdg3EiLCFpCcc3XwmAhPoY4wKaxR",
  "key6": "4nzHaNE1ocqR6rDJrCSjf7PQHPmChRbTVSHmN4hgEUGRVW7o2ksFWLtTaJpvoBM5VEk1y9MFSEBZFTkqWRSDHRU3",
  "key7": "5yWs12r38rECGdWzrY2B3U8zAbUE3X25kQpEmYesmwGqHaKBnjqVjE12bARCiKQ3aRiXbU1sVN5QyEuwfQ7H5kAp",
  "key8": "3UAtmd8QDBxUpfpbhaKkJ4kCHm419iLXTfUaKF2qT9hY4HEE6d24gBbRi6eAtVuRcgaUd2YpccQM1AGVnUtcyx6s",
  "key9": "3K7gn5xUVkhVXsrVXEgAZgyM6t2Pma9xbR9fi6P1Ai3h2kVhLXugQhXg6Qvii8G6kVjYdD3KC3QHPtfwkZqQYbDT",
  "key10": "5AuxD6wiNp4AaZowgBd6Rwbdjfjqxkw4JEQtZMd9a8BJpba18nPnL9Q6upFCa9G3JQ9vUeLcfe2e7nNg5b2ioENT",
  "key11": "4BY37SnnkST8C5TPmTrLZiBHMhyQ2aH8Ps49ZnD3XJHCLcKQd85Wyf2GsDCwfebiEhhJvqzDPPPWdoa7C9b2M79A",
  "key12": "4oyR8LGdwv89eDiaUKigB1rNk3K3vhWst6Pr6KEVbkjkPZcc9dw1V4qL3jUZbiqSFb4BZg6osQ5bDTRK47JneEAR",
  "key13": "25HzRFezXPQiukyU5K3PU85b7sZemApoSoLcKwk4abH16XDh9ySdj1gTT89MJzw2cHHU9SXABHvzJVXj5fW6MYkm",
  "key14": "2FbASuzs2ukJMAQLsTCobt8LfQiMTjtQ9h62e6Vko14miq22TWVcDzt5DBtJDD7ULJfXYx1MQztT6KQLiFdgdPF6",
  "key15": "4cdBzMiLcr2UuHnGoYW3ZDYpnyjkicbdtNZxc2nLaHKk2ant71Btkv9VxD5V4G8k9ZTuKYYuDaELrBYqYzjDeEXD",
  "key16": "3vhJBzmeX32xhFkFSAatYTFx4MGWMQtpqBEgQwwkmF1QqYTjMg2wYgkwYcfkgZVQydvJifCYRpx6dT7WZtuqV16a",
  "key17": "65KAPPNF3grGcHKaiCckuJ2pqdmQVmzcUuEijwYNXqg9B8v7mrXwC375RhuFwaSFz4xeVqc7w4pLKGRK67P2J5g",
  "key18": "gegbxgCWh89pACicAt6XX33ZKLpkR4WidqtJ2DQqeHV83nZhYkEBqxcCEynFhF6hcxyYkg16qJPbjAtnmMWEfN9",
  "key19": "5A4hUmxErhwe1aUX6tcf3qNrdzuUVmr3YHmPzfU7VEB7Zon2w5ppH28o2JhVpzyqes3mcar5KX81U9aMcuEVCJ4b",
  "key20": "4WsBGyNT3B1So2YH753J2DgcR1rD3aZVH3ZP7n6AytMVWcT7WdDu2WgRqFu8tvkUEuQGa1PwbNnHaCXWQtJQifCJ",
  "key21": "5vwVgFHgFafYezDHgnu8XXoAnvh8PyA8rKLhSfQicH5VKBWrah5Sz3Qd56w6jGZ1Ghui9SxjYWMo5UWRNUp8d1yc",
  "key22": "4zAPKP9rA38ePhoTdusHhb8v2tXSmrg7irZUhCHhp8XRiK97wRSor6gjRWvJQE2Jaf9L42oaWMMbVWnjELhiTtqB",
  "key23": "3VTZCdzryUkZapXpkttFXM5Laa7KML37gXxskvWCBN3h4sEgczVKqd21HrjGaXRns64WxW91uwtnps3G4vq5UfMg",
  "key24": "2vvFzeUx3TM12TBGnCwKkboV2aCtpYLTSoH4M1KJePNKzTvRL1DMD7kozCh7Gxs91u8aoWyHegat86dvhGcUDrnV",
  "key25": "2f31GGKSmFUKCQbjsjrXhmP5Ko7FXUacd4jxrJdwWyvhG2dnV7NeKuF5KjF6fhAbCVtfX5s85LJe9EbA7xL6WTet",
  "key26": "3Tq6Vxhbqjyveh66iLAhWU8v2u2NSEpSUEaT96TZm7GB2np8aaBNQFBpyiTwQhKKJNmTcSRZWzikRJNqAVqE5P8p",
  "key27": "23AxuPMPLvYnx8AFofWYJrkopv9NiazB8uR8AsBBNxyRUmdDck2ZbFRsy3RSZ2KRsPoCYUmsYqVpcnsRprYqduzr",
  "key28": "5u8GqphqrMdXKEYuSa8WDkRX3HPPMeS4Fx7BVDCnh2yoKw4Crg3d8UCpV61Kv27iWYipMVY82FDYnnoj58MVUpte",
  "key29": "52cXs8QR1vtn6raipofEAqaLPSroSLRncW4J6WSzne7EdERzgvmPpL5GLi3ddZoTySA3bbgVxbaxWGL89VwCwwRh",
  "key30": "uAcXTnSAWxrDD2i2Rif8EFUZHnZKuZ7z9myLH3kguU6B4ZgXatwksWuhtkRHYyBYybNnRweKs79vdjRcpspXxjF"
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
