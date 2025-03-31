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
    "5yakiSa468VjSskk6BviUkeGRQjjLu3FiiMxrBrfH39urWCJHDgk3pHExRq9ynM3CNkSw6La94D5qkx2HJUGmEqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERa1qM3dMRrGWsmRVAJnFNKbewfUVws5ds1zXj9XmTEjiw3GV81ddGyRKH9BEMMGoCwPhgdoVFMqdJ7dFYZj71y",
  "key1": "4SbXARUgm24Y8taLka939KmH1FGHJjF46fBdoLoD9cEwNzn5JXaF4ZYAS1cG2pQ8iw7xDXjLwZ4PV48T6VKqGxb",
  "key2": "4yDNTi5n6Z4gCMNj7R3vzCNHymncMhsArSbwoRY5ZwVCJLsHjs8Af3hj5vZ6ZWBebDVrpL6fMrzPLeBjvzTUR4N5",
  "key3": "5xKmAcvbiRfPqmMveBQvMZgp83nApMuoFX29TsTeTjuSx6uqpSZGQU6buSDGrq9aVFTP4mWGaqbEn2Y6DWtCjyva",
  "key4": "gnmByVYyLZcyaDsvWm9pZPBZzV26XpxTRejiSELgypVzTG2qK4CY6G55qyWvWKbq3TveZy5rKQQwQVUb5TuqfGH",
  "key5": "3VKXqKty4jkzvMsYuyYmm71XnAvMrqLaEGhGQZpczyWEiR3VZfAjC8rga5Z9zwq3xWckbgJ9g8kSeqNy9RzWiXi3",
  "key6": "4RDc27bSvup1sXV2w1jbRMuJPiXsitr2GHMohJfasQQ7ZWUdDveevxnqJsqccuyf1qUMcUqeghVmLKEY65NDGeyg",
  "key7": "ffiPPZnQJGoFyVHg2Nk73HJ8eymGb4aQzYEVtcuNK6KGNFXqYfDT39U5QTsqryJ6MUNKoR7VTEz993uK89wJeJk",
  "key8": "2LXR167PFTpuMhN7C1VE3E8r3kZ1mSAMUSfjU8sfJynFsYMAiSC9g4FKeny4zJmPi9VTbU8FZqkbWFZQkeQpVDYi",
  "key9": "w5cxHSGyaKJucykB6jbzgJf64M3w4yQNkp8kZgcD8HGDqAefHNtzYtsMXsJq42bwfYwfSbz84v3DKUZknkmi5UH",
  "key10": "jQKERz3gZvXYxmvM9TZgSNcyE36sFs69U87kLFkL8gFQLTE2Dbti3oUpRsNpeaV5m54B9N87bZQ1wxjg348wX6Q",
  "key11": "4GraaRynk42eDoJpy5kGPz7SFYfpiHLPPrFwsw2pKur2D7z2PY8m5FcEPCzgET3A6dRWdovCDeod1XBrZoJskshS",
  "key12": "5qqJaWdXM4wGqJxSftSyNEeJVbjKGtXEcPP7kyjb3HesjsxJwNWfEGxm8NiBk9PQRpttPDAjKq5pcFH6Phg651tq",
  "key13": "4QZnnUYrtnoAznczGTjKXU3Gy7QCeWRKRKcYGhRuHQJHUhjT8stEhu1Etr7ZEnuRZjRfehBDEy1bkbMKD41AVnoi",
  "key14": "cZgzDgQKEcwXyfwKo5R62pwwDgpcUs72Aat6mRvszZfMDhXodNwyigoAHkujDe9UaPVMB9fEMMDMMXbRRsuVN7Z",
  "key15": "4beDWBf3z1EycJXbGdJLowAJWxtr3U6QvTM9Da6G9mhiftW38SZhtHzyhp4T8DTzbXABZ58SNmgrqWEy96SSuLvC",
  "key16": "58MVY818TxWS1FYXWnvKUrGndyUJ5nFkZgkzLNxbGxWWcawijwgW7wev9eb7d8tF5D1E8THLxHR5pWqY8QorKLrV",
  "key17": "5mycR63VaJ311AYPgjwhY7NHvLxHk96nxdMGmvXAPUQa15752rv2h5hKui9JgoJmGRVKDtuL5dHtje6fUH1NmqbP",
  "key18": "5ryw3uTVbbwSXfSqiAgdPQ8PV4gyuCVJ6ykkohSrpGGpGRwVt9vssxrNSE8SBoQ3fRgWfhqCsHdMe17Wj8CoDcGy",
  "key19": "tZMUFDxA3HghH4FyzgiembRo94zwbZhBHkJ57R2pzK2REuHBHBahLJQ5ALS8gieGKcGyDwyXCwJRAiqpMhZVBou",
  "key20": "2emEkozbDTZ3V2xXxV75QoGvZipSBYE6VZxjWTcSFAJ1Dg5dBWHfFjrNZdMjynQXaoYpDKYGAwtnnuoWd4MKbpxP",
  "key21": "oF64n6qfdU68MoH2qDF2hyhypZ1f1NwimsZMG5UjeVTqxwBPrBciAuH3Kg7i2fK4VWQxF8Xt7nrZgRWNY7yhrgs",
  "key22": "3piaHjuzuUovcECuz1XALsQCzVgqKYn8h5xvxedL1pUGoYGrdg6wYzRxCMhRMp92BNvkYoHj5r1AbBF83sY44gfE",
  "key23": "3h9n1mxsAS6LtdgVrg2th8UUtGiouQD9tLpLbmuzrjJ1C71EgFYXNiJE4PDppGJmcjSBydNoAPpuY2uxLvkR1Zrg",
  "key24": "4zGnbcXrn952ojxAMwQNBgfXWd7fw8ccbZxzobXERH3WQVX8f1WC5EZrbH3dqqu5T8UNkRnAkiQVbzSgoLbrWxxz",
  "key25": "Cs7CrK6qYVxEq8FCNUtkswNjhFkk2Jyv6MVPhdZQGy2r2ZZT87385cZjkrHiR7TxAJMxgwMq8Jiw6pvhZsNN5kM",
  "key26": "4GXak6QS9ZFDJaPamLHDK1ZpnqEqcpa3373FH3U3U6aEZQqHc755W8NUBKypPWDSvdP4Y4Q82FMYWRss8bq5tzm1",
  "key27": "5DPDWhL5EbFEmVEp7vjPL1JhKnHKXBtRxpEXU6mUV4Net6MZxHijMRtKu7mnoikN1425tLCMwTrmPSSWe241ywK1",
  "key28": "5Sv56tdnkTquKssNcb6DEnpjqjfRzkD3t2LB2sJpAi5SA3Df2wAroBuMEpLEKArDxAhMW4p46bcb1sRX5ZRnkt7n",
  "key29": "2PQGLFqV1QjWEoSJN853xq7gJmdFggfQvVkRSaBjqto7BPsLq3wjAVT84JXu48houQbwt61r3ugnch7HegVLCMd8",
  "key30": "WXVHyYpMMa4m1tTLEJ4U5gX6pqXFzHs3GukNx8iDkk8Uef5npNkAn7PzFGchUTjN1nkwhpykh9qAfrpdyJg141Y",
  "key31": "2t1jpjKvbxTsyNP2RZhYJYfukLYNf4hEWp3gzHEcufUbeaG3JvzpMkRx5uNJYhpXc5dBoN3m1JuTVY74QRfJKBG",
  "key32": "3D2AeqtWyqrxsraGk7TG2YD9Z5VZpjZoeXyLTuiMp5F2sANdJSyjmdzheDaWF6AQRDfd5ARt1Tx9YCsf1KLvQUbM",
  "key33": "4RZgAZ68LyCVbR4XJeW6pZoXrLcmEWtgQrEW3UaanDJeLMLbVZ66U9jEAkxqPXoUwNppDy9o72npJ3LQoaj3R5gT",
  "key34": "TaZ9GqdQoxNY9zWvWeBSDES2MqYHUNYhuALPbGjNQYkQSxupSZYzDU4iBdhgQHPW4KBAutU9N2ckFjLFrsosmim",
  "key35": "8PSdiYHfAG6YUbEWg3BuwMSM7ZQtcZh3fF6uAWUe7ifkAAgEutAm4AiDSNi3NX5U1SU8fPFLHexANKCL4Dc8bur",
  "key36": "2rbKYkC5txPRTEPevehfT32YLyb3gUWMFskFRSm2VQAPvTW3RXA3bgdND6oE7eDRypPSnne5XsgUfFbd74qkjrsW",
  "key37": "2CFaorST55MUhdpvWtUCrnJstFD3xyHCemqVBf6HVb3vbMoP13DCRbFvzYR5ZR3xtqbEJneyMeb7539U8joowJsw",
  "key38": "L3HPW3r27idaDdm1VEgJd1NE5sggYKViv1djoVFWLevHKka1vtMFHGTjQXvmhu2MWzkMijUn2dxFUnM6w6pxCuU",
  "key39": "41wVthT7SpLpTocssxCMBSV8Kgm2cyDxSxhz3GyCZcdLf9PASGnGGcND3ThcdiHXUPfWCuDGbQXbVNrJavK7bzrH",
  "key40": "2ep9N9XH3EtRKfxk9sPuoHfAYmkNuXip5jMbn2Jpwj7TtYgWDJaRbGd1TTshfANhUvyP7mMhsS19KQo5maNbVDTA",
  "key41": "66Fuw2Xoi3xoXCtFxvyhr8NAJrq7y4TWKCtyHkHLRHWacnDn9X784z4qd9etkzC4CxyuPr7fo6phXHUVNbzEX9jq",
  "key42": "4BqZEy75Aft7jr5Px3o3PZRgva77s6RoHehdHrDDWrNzd8yHHQCUatNoJaLExWYzLdRy1XENzk48cQZskLpRwXhf",
  "key43": "2NLUN4jyQpbeucD72cjqpqc5k52GrrPZ2yEPYLVdLAJLKMzdrnLH4qA1wt9k1HTBKZozYQUGpC7s57fxTzQmLm7J",
  "key44": "48iupHLe1CHVNw2CengKa9iZPMvd1kcQ8QELpQgPJrdkDsooLL61YtmPgXubJYD3P7SUYgT7ctmcJqCssSqbRaec",
  "key45": "dUTx7meUFn2bL9WAttWGsgR5P9MGrG2seGipnH1B7Zcgq9ywdH9nhVs87h2Hcwx7W3HTDQ3DfHzZLbS2zRPZg2e",
  "key46": "4edLeJC6MdsEcrETf22E4AZj5CeuotVkiWCdjxsT8x2b7CXo2Gk3fVZiU9CHKhzVV8zbD7TVbxaWr9DRAC5G67w8",
  "key47": "4hgafJdYfJvGJY9cM5qLhB18aHMC3ahihHBdypg4MNXNdgyh5SfXGspRotvSJEnV1pfGDNCieemYaKKDu26PGjaM",
  "key48": "5ZFDET2f8yXheLCgQzrQrbPPmAXBKin1rZsn97Nkmc1zJKTXR7H4sD4rCBSXvy2b2yRsvfWTjho28XANc34uDJbH"
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
