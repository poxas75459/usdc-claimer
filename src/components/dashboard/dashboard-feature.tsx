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
    "3t2r2wNhFWtXm7TDgbZEyTkonRoYkZkrFrBzRFMqChNBPrYMD2zbEZwY4NygLwUzVWLJiN2Vs5xFVbCXpiW58xxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zhUUZFheeKCUhy6ftABoHMPGRJGTU89V8zxDokp66Sxs3C1xwgqzuDYHaChhEb2qfPiftc7nLb8aWmm4StAMp2X",
  "key1": "mGdyPGohh6svXztBPsvSjESwSmvyekC2hnzZEC5zwjzsuvJw7uQGSUDcTLKULpNPELYXesvi3emB4oraE7nYTg9",
  "key2": "LqN92pxC9p9v2cmCBVSWUjwa7wU8tYV8bzrUBwetH3BUmnyN1rmQAaJG2E2AJmZwqh3pwpfgmKahHzokKAB1b4f",
  "key3": "47rkMicD9ECMrTjavRD9Lg7DsdoVirL7FbE4KgAPbCrhmjoiULSZ8RoT7FKfwNtfmnPSPHpnwjDKNzHdUx1TAyYM",
  "key4": "3LbY3ZEYtrNPXba3sVGyXBkiaygrKLBe12SyNY81phjtKdtDJeuGgqwk58QTu9A5voeB3Ae2SuaCTj6GXn1TkWuF",
  "key5": "3chnj7Ucz8SFgN94G1tCTNH7iw8d1HPXLWB4NgdohCtt6CdQ6bK7zGUdC1EJfUscqKURrYDqwf9L4vdPQt5Nnx2z",
  "key6": "4NYo3vr9usGamYDNb9H3y2LyY8f46kNqrVNFkBD7eDW6qqKCB8hEn1hbknvyL6RL2JHB5JxtWuJFaGpbRQZMsBPB",
  "key7": "4x5oBfprnUuE7Lxw3dmnGVJhFQWVDa8dDRC6Vb39ydsxU6fFx82cWKW8DbUEPXcNy4tbLsMsbrshWLjvzFU89Bzf",
  "key8": "5ed9LmKvXTCRVafR137wztGrh83zZGFCQ6joQmESMpVuFjuMh3Ha5N2RHokVZ2xWWo218vkyn9ycoE2iDwvMKGEb",
  "key9": "4mAiiFhBujDvGHc3eFSYtnnMbounJ7xEQWPYLvkEpy8w3DwDnXqD8g1Z8pnBnYLKiceubsTopQQV3xuBZM2Y3xAX",
  "key10": "t1PaVaefMZKwNKgrzPtGhZxaNHMZLbVXNUt4V7aTPSJQRxxV12odbXDb6Q4TBPA9Hc1iivieMznVTgmPPv75thW",
  "key11": "3XuXeCZpnbhdciiaMDH3enNhPS2zjXLn185uAkhqXNWDy69QwfjWEofPvrcQkPBdKCXDzM8gTCk21qMQrygYhHa8",
  "key12": "4VPETfdh39vasiRXgMkP8BdK4vTJbfyzADbfpix2jQfjatZWTEvfcqmipXQsq4Hkw2QVCV83ZBavtZekoTdyWFh",
  "key13": "66KudcTw5kxQc1rEW31BRvhMzDGXHdNtixsnUkFanXqQnw6nAg9eYEK2htDU23F3ctukbApsEZRRLnTH3HRJoJfe",
  "key14": "u1XAYz1LYoZiHHQL7NHN9kZZMH7iJWcyvEFpTeFwcFSrL4TSwAsS9hdCs7CdGKD8yByM6FMvn59bXpKu7Gxm7L7",
  "key15": "gjw9rBcriMbZQAkJV8hsozkC4dYZZ5zdbYNLiiz3Nua2MGGb5PeESX3okh6CfLBXvKJkXgmDpYKWMWrCcE53P5R",
  "key16": "2Uckf1u7Vss3waQHwT7H98LxUbVoN99shrY7SPaBUwq2nmhpruieCVBsmZYYxrMVSdzjnwkYCSFStKE7VPJreTXT",
  "key17": "4gdxdzZ5KuzFgDHx7zs5LZBibCmp7JBg3EV9eBeL4HgQX3tye5T1GHcoJKoqFgLrtXG21ey9E6FDV9JyjFP9ap5g",
  "key18": "5rJ9SSvh4g3UHZG5zWGHNPYDp6yvDUq7ayS5t6huxgG4S66DT53zGMspiDmyVpvPNwWWcB5QE8iBaudU9vFDwfoX",
  "key19": "3rTApLk27xzwdLVL9WC61JijX28CYMQFVFe3MFttUNuPDoVfu4XSuqWa4Ppr5aAtDYAGtK9rAzAXj9h6j7fUwmow",
  "key20": "NLfzTcSKg9CVGSifUAzi6JJzHCrbCdcGXctGjpBXPS2p4BAXhihT9MPvZ8Vq3WixRd1KDB3nc7KGv7RTwBu9YRa",
  "key21": "4LbBsSTyWZ4d2XhRUXpyJigFUkFdVKVkp7BbKbiyrrMxoqY65k2Zu2k96taZtyd7DTBKZAvYTcY76nbP5CjaL3n",
  "key22": "5qnkk2ReQx3tuCgugXePsMzKjvGKgV9vscLqTUAV88jDHw5SzdrCfWcKYpCDeUp7hSE3CdTLNEQbr7dFTNfprpFR",
  "key23": "55y66xFafnrJccBKVSTdDHSfP83dFAs6T1fnSxTG6nX254P2rn7B3gFyCqihSmk59XCijQDBwwThuTEf1oqdswRs",
  "key24": "5WPEnCYHBGJ9n1VvGhXBKn1nq183Yyqh4rpyhcvfNxUvMTMJRWx3UQWjkW4xGBwQRfG1vjn4f3c3Kq8D5E7TZ6co",
  "key25": "4feAVTazBbCisQGizCXjg3c5ffmkDnRgJMysJ35a6uVXyCdmui9cKeimwavbABqaxuHeTZqbHqDPMUvU8nqNyg3z",
  "key26": "5oJa61KTqZEVeFviTyLXeEnR3CXPEjmMhRwKqHnQuHmREH7iopgYnHSwvwfynEMCUxKukLdutwxKtSYTsbLCCzXL",
  "key27": "2cMMyrj7YYXn3h1PZ4ADN1cWWA7LY6MmKdpjnqkFmAK6nCrDV56nJDb4Tis7bmWbHdAeV78EKmQDR4Tp7u6qeyJP",
  "key28": "3EkAyUdnDerX6Q1zv69L4SG25JupEksEgme8wuWR9CmBGL2jXcfxYeftAn6vdNMGVuoSYPhnqoWVi83uiS3asjMr",
  "key29": "3JuYqQGn6j5ewAhBBc5eYhjE5imBgBeBxnyBG5bwqwuU53uvkiYRWck8MuEW2BzCGnMhgo4rfjFWPDt2nXf57AND",
  "key30": "BmWjnUaDbXdiSN3HBSeJD4ns6CH97zbXPUq6zwujYXnXjMscABxMZpcL82GBizyFt5LUkCdiypPbvV7DVR2XKy7",
  "key31": "5Scw2KPe7GSDFJJa7dgkKRo7t9hYAzNqgFhmFywBv4it2KdeFRxaCxqpiLDqahW9ZGPLHYXGJBP2hXQJ3jcfu6TH",
  "key32": "5TRBv3GeLD2WvpvCkdqdX9GABLL7jwgcgtL8u3RSf7vSxWcPEVUPGCKZiHECSEW2CzYSrbUWAod1tcgd4nnjAqTt",
  "key33": "5tRaEMLAnqb4SfmZ4UUpNZELyKSSU6AgFEugUnT5SzNbJdLrSSfoSkgiZtuQuHrYNmvJz2uUBE7hRDsHL41vMg7s",
  "key34": "3QoPfG6ftNHBk5WW97bhGG6P2zmdw21iygydkMrFWWNVzZhYRYW738SWC7fLA3ry8CkCH7Cd4FBiiWRJAztHKmk8",
  "key35": "36KwbXXueszxKaCzknWojV1Y6DBUXwEMwyEeZ4jwC7hhTHv5VdQHunBP4yhmsgzcTFgGhsqjo3hRkxsXS4b4c7mc",
  "key36": "5hzqL49snX7PDVqfXxavk657yXm44UDKiZ4jEg3ihDBZqcvZj7qPZTgner3xmuz2hPDfwdD84vCF9iVHgE8f8jX2"
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
