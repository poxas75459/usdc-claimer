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
    "45xZtqiyteRUDHffYvxfoditRXNX9U2WopoT5VrMcAW74KTwUsaMau7ANf5Qd9cdbX9hwDTv1zwV9fZAfxzy6VMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AcARmzAZqEkSmebJpRv7eJMrGMghMEnVnxTJNwCvLqVqjCkftqcWTgXTGt1MkfY8Zh6e92obqqWxM2LHZqz1k7B",
  "key1": "3P8s8iMFfYV9wVzSaqB1hZoCdkPPyeSsDbZkXCA4V1vfTfGHrjnjJ3rcy9av44aQcGecsKx1MWzwjgNLDa88Bha4",
  "key2": "XikkLYir4u3s9PeD7W9D1e8qcmJaSaNzEXQdUUCJ9x7ikEAofVi7jhZR9N7w3XGFDoHvGpYE6Cr6GLnW5pnoLWP",
  "key3": "3xWAWUAqM2kVNvyWDC8M9YEh2Wi5KnYqDLALNmLZYhcjY11xzHyq2strkj8jV9oCm5Huh4mYyRT5Yty1KEZTHPPd",
  "key4": "SWhnfPgATDtMsUpLatyqPhnAfpkeE4i5Acp8c1RvmUbgumdY2mqc27ifuQDQcPPSX2oZEd3gtocqSUjQ5NogixH",
  "key5": "5AzeXGg5b4Riwrz4UBXzAN4FAKVw8BB5rBCrdEFxaJDeS8fcsRuzYK7rqvApYZSKWWPnx7pfkXZDnc6ymcjhQu5F",
  "key6": "62mN1KNrpT6Xz1JGNyGxK4Q1Ncv9k8LapsACPDGLU5sTisuHQ6pfv6HzBUouXqmwhX9b3tMHTJEMoZDtvHJmNE2r",
  "key7": "5ceFrhy4akrHvGxBrEQnjxxkBehyFeAdgUAqAsz4mBaBy48gM9QTS86PVLrAvuMoqs1suCGhgJxPRGxZTezzBqf1",
  "key8": "5twnHMrohPZWa89Lfd8xMPJ7KJaKbb8XLDMoHfJqK4VjoayjaACYQ9SGwqXoE5XCpafLraHyNeG4Qg8ZjBG5VYwi",
  "key9": "4rDJAoPpqdFtzsZCXkbtZL78XEDpV3D5AYyXpQdvJDcH5jpL4f84pMPXN9LXDVjneztgTNkoWGijiJiqBSoXjnAY",
  "key10": "34jvhcoDeq1Bim3ydaAtnZJBidf89zDDwcNgpQZDehjBvvbfCJUXAUR8SjiuEwczTJtdv7xEuqvSaoWxW8SFhuhm",
  "key11": "5BFqtCH1si1ZYJT2dLEYdAAWhZ5PAcFu3SAtGT3HQs5Qne3SGmRcHbkFkWxU6PNC7M6pxgmEZY6oU5DWZ6rV5wN2",
  "key12": "vNU7cA7SyrsA3uajXnNGfJp7NGfgmcTcibc4CjTPGzwNxCMfjudFuBGUERRA3KHpPAfmsr3aWQR9N8WkmDdmkCi",
  "key13": "3myX7NZk6fYqDH3QhBmWH3jBErbBXjGbynoPWV488vGSqWoq4EDeTrPUjyn23iENZMgT9575F8eJS7cVw8N3Nqm6",
  "key14": "4yPnsh3GULghFBWv3ZkyK3NZ5p5AZH5TTYzzVaoYRnU7SZFhn9m9qJnutp8BiaAoANHZjav618UUc4QoS7Frs1xs",
  "key15": "42HHSwLZiJJyifLCiVdp7AhxrH4BD2qinrMfvUvbWWx9D5XuNf6MBkpxuEcUHkVUAJqj6R1XMXqVVQwqR9Cb9Bg4",
  "key16": "2SDGUnQWFa4SZsP9khC3NHGrJ2dZAzb4HBBw4qNBggwx4CgbBD7j4ADGmmVNN3RX7oCNT6rzAWTaQV4irqze2MFU",
  "key17": "5L5dEdbnxg56isNwvA3BXCXfTNwcEQUueKsBABsUeA9DwTX9D4J1uuVmbVcHRmY53ntDKF11aUyEexdExg7NJ5YH",
  "key18": "5Jh93rgfPiHG73VtruoW5YszotBUcAJ9SFr4oWgwzmiZPY1Me755VX6F6XHVJneZRzKhepu6dUXF8uES2AC9VUYh",
  "key19": "313rTVd2vSMBMwJoYeoHVDaTLCanc6rVXig8t6bZrac8RwPD5u3kKHhsYYkeA3gCPuwknCuKavqMoZj6w6V4nJiA",
  "key20": "5p5NNJrrhQ9GKcYSW1cLCzsQZURqTisk1p5fCGgAaw2Ms8rZPeQtCPD7bFbWKFonwpqx3JDPB2mwamhP79Uh2bdT",
  "key21": "2dd2rRD5YbjaQLMKSbrUg7G1xNZueKUacKKCdNFHXKUx57sogojxMih9NVRpUiE9pY93oFrcmHwa97TCNs4wRGZK",
  "key22": "4kN6kCuJohdHQXURzX8rUWayqMUEwrkdg6E23SzymARb6XwvmD6gGEe81gbswh6Zv78aEZfi1EnctqTRATeXn3jh",
  "key23": "38X4SBydDN1SQvmjM2NsBtLCqThC8eCSAsXucLsSRDKHbEWZdyo9QcB7dJ1uSNDFyFqAPqPBgKQ1w3KyDgKvWWNH",
  "key24": "44srwpipdUXWadXFosNjzVbiTJPLV9xiibUM9dq6JAFHUdQQ9tP35U7BKFQ5kvNTRFA1NnMrEA7gtJwmrwyGGCv8",
  "key25": "2SSMy8daNZfFtBYjyN6prK65mzYKS6FUFTR32WYUvuzm3ctBTjBbBk26P1npfPyhwVYTaVTphgSPL5soeqTQwVBf",
  "key26": "QRdAwi69kem5h5uthmvYPVXbwQ5gmuWbEsXeZUuyEckGMLHJfo6PwfgFGewu2mKPph6KqEh4Q2TATJmjKW8L5Gc",
  "key27": "2tNvvtMxEYm5rPwv1z3vnVNvdyg8XkLAbDmwv1rTVwMCDegjBorUFv9HrNfEHwVGGWRZoCvwhC6y2vs5KeVfDLP8",
  "key28": "pfaLxKjajJ1QyAQ4C7ShVHwhP2dSsTHRi8FudJu9Vzi1Rit9z1J6fHcZnDWKYm21fx8anLVGTbSLksXmmKmhcGS",
  "key29": "3LxWzs2EtbUyVWZHgKf3cG5MNKfYMuQqH8tPXSwhwJ2cF7PMGGnzWh3Vs5QgoHn1WqEFzYaEHF8c3sHErpm8A6nU",
  "key30": "5r5stkeKUCgo1MjtLPijLy4mQA9zp8pKhLFJ3mY7hevBGQsR9XFJqo6WkPsYGRXty3YbnJYkXYn8nVUsESzMyDm9",
  "key31": "4L4YCYNYWGBhRiaKMkUKQzvrPpz3VFxW24BcfQtThd5E4pxPKQyLm88cyMTXxTjJsPYLuY8H5Db1fTt7xS2pnp7B",
  "key32": "3h1kMWXjcSwhxqShnmvaaJvEZdMW9nWvxcX39MbR4agWSow1zCsUSzxsrgD3AJJ17fjh45d7KvQzrcHnFQui3T64",
  "key33": "44JzvWSczjHWBDEpWSHeSwAVNiWVMgPLFfJJP6u2NJ2PxYLdLahaBDRTdjjuQx9ouGGCBofHPKJhaBoMQ6Avyt1q"
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
