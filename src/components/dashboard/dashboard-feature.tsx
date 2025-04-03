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
    "iiMVSMxKQq5yHgoATysbxW16RWaLmUbwHLoHQZszMKQxWLrymixYu5TWt8goCiEY64RboLoXzq6tCDQfcmHxaKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2ki5EvCtvmKez8WQn2UjuJdxzvuYygCvU5Zp7Yg2yJnSVRpz8Hn6aUXRAXcZuW4i6d46qyfFXVb6hQhgHG3dBB",
  "key1": "5X8JNA54QdxCiwZ6HymuMctehoJM8GD56viQJkHpnYek54m5w16zxpyQkPiDjvCXbUorukTA71eJqcHr3fNnpEUt",
  "key2": "5smsyfd44dJhWVcXZzigJadCiD9FiChvSeenxjz9RTcrXtrC5SZi3CKafhGg7Ph5gwRqcJiQbYBJZH7GSDEcUQfs",
  "key3": "3MJQrShSFGXL6MMdqjwrDUMKwbN34mitQYGZKATg8KxdPcSxEQSn9WPuQzE8daxCxGczvMPsrRKSLaARSSpPqxmn",
  "key4": "2tDhZZR2fo7h8CH5gd8zo1KCwEWHg8qTru2wiBCv7D8tNx93uc2UPjGuzXP1jXGr4fUaVNUgyqqUgSBMdPdHXTjF",
  "key5": "29sDHfzy4V4At26ZzpZYND4vZkvGQh6E76EhH2ZUyPjQLdznxX3KAfx2HoJcXyGM7augEz6sK9LovMsk5g9sPw9z",
  "key6": "v2zGvekp1ke7UvVpCmumD6Eutr5HFVFiwirRX4Au4MAZ1bNgdQutHkyzakVYWtKu3hUmgadaazKBgAMCJ5AebLj",
  "key7": "5ArCxDpGnnTUSig7nrfvHLfdwNGiXXvz2owLefv4hzr8XQjgcroB18Q5FWmQZ4UugZfrAPvwaEVo9h6Wmcbifoph",
  "key8": "5F3qFLw6WtV1SVqsNGP5oYbAxPA5mjC34ALuENSRHmbWm7RntiJByNjcABvVngFN3DMLXSyngp1GLau9eUUBk1mN",
  "key9": "3kFqyH58oh4YUBvJEQyutVgzSoZazsSSCs1ZDNeFdYwP3n3mS4vcpKgN1Z8CfhJY7pmNRDASKb1eUiPwb7izCnJy",
  "key10": "3DQvknx9Ea1ttMG9UTLotQhY958diAWHtr2tJnU3Cs8GLE55N8DaAzaaauA58PLTquAuZsACrDQda88gHosGGAYL",
  "key11": "59YbBV6nNRzLvtA7c898d4Pf5rcZZr5oseXxLrwVwbWJRzPM94PF9rcZqvDXtBbqy5V9S7cuFkhuZLPpdazGeY6A",
  "key12": "49y4RvbMW1CWXfogb2TeA88gKMH7vmudcGvG9LaupXBAkDGcmiaxkhA5EXBALRPVLFzKzMLdktihRyuip1NypYLT",
  "key13": "26omAJj7zmQ3v4FgeWExEMWug7TgL18CTUzSvY5gb23MQFpQhrXtmsnVbQDZj2Qmaf5QWQXumcaBpWurY3skpRF3",
  "key14": "2z8ouC2fcn9L5KVDJEHihMsYHPNBbZAnwQmS3FgRdyvFu5WiSsPWk1kCjPxcohnofrHicTuABRaq6tFDG4GAAkoV",
  "key15": "5TqaE1GhSLwZ1nkNzrWFEQsBsA8tao9eThFwb7BocBsbB4JtZnYiFy8MB2ye9p7en83iEjiQR6b1Z3t6SqNRdm88",
  "key16": "3DSbQ2qNaguQfhmL5xFDZ6Rg5sGhP2ggNnjoQTArSJN4VCTzhmxKB74jVyzwkeMFTM8dVviE5WfSSjAqvRrgUofk",
  "key17": "2KNFvD4JTRq5QaXyGGxPquXYFGvLZfJJcoyWDDL5VrVTQSDxKdU2Tx3LyH7VfKMrpNswxqdH5pcpgwDmKwDA1ycX",
  "key18": "5PxsyFjYPjvnGnpSzMEyR3RbmPByvy6BCExXQnaapiwQTdh3oX6AV8pnJSVbhhBKuqjiiZAK8n6znpEyjHRJDS3B",
  "key19": "5HDjz8S8xvYBnTcbjtegwBYAxHpV1t9ka9SZnG5HGGNW7rrPhjFyDtF2GjbMFRxzLd7r5qp2eLV5NZk659bdAPDp",
  "key20": "61WEdkzNStDs3nEvBbQvfxJDoyvpgAxagET5qg3uFJKgjFZPjptngexQZ88cK6WTfP4gdPEBWrj2szSGuS2vZCjZ",
  "key21": "3PDqk5EQwytyXxzSzP849QypiGc5c5wDGZVZZ25THW8cvdF2Tm1k1da4n9TC6nHpRfrRj4ywSbR4QGxfHMegee1K",
  "key22": "5nhajpck7VvSvJa2Utb8PPuzULpdkGedh8stVcUZJkHWBft6R7W8mHdznZTE4bu8jYoJG48TEjL4HTgsJTqqYu49",
  "key23": "5bZi2cgjUC9KKFj9tQFSTW9dcHjSdTPdPdJUSfejHEGgpWiYN9zJntSWAZL9DBcXp7KwzBDrhaBdHZ74LfK2Lpgq",
  "key24": "4NcK3PAQwTDnJGY2nfTSLsg3qeutJbEvi8pZafwQGgDU6HJN9pKtyvMVZHdndrn5sEpLxaF7AVjTvAcFzBacw9Xf",
  "key25": "wtrGzuMSacg9Pns9UnhCWoSM59AP1oZFTZpz7f3ZbtHwB5kqSon9E7JQBk5RLBodxUvLUUoFuEHDTqGYNAkCNuG",
  "key26": "4rdqXynpNaY2kuZc6kSG2nF2tT4TjAHunXjMCyiyZkM23bDnZTLVjS2BgSnDtJ3fAUpf4Ksofcj1zjALzUYwkYME",
  "key27": "5zFB9PnYpumvEgArwfePYnnxAZYi6hvYr9gTGK81a1rGAGk2ha1tyJKhSC3kAt8po7FzN7znFFZ5fXa4fryhQWDJ",
  "key28": "5bRHN34ygZV1VQ57SMUA5Fa3d87DNmxM1RqNEgWEVt1Rhwd6D1rrg56PUn2VzkUr4kRZpDPJoK3bemvuseogRw65",
  "key29": "44Bhh1haBK85A6unJpS9sv2wHWeS9U4QKcjxTTJ4mpYa5dL8h8qdkmgkRkgFHy2ryHMyY4EYY8gFhz849VHycwg1"
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
