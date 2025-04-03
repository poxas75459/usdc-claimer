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
    "5Z3AKDh2742Nx1c7ivjiK523jq7w6XsYEkL8JRPz4zeT8xhwHxaPw2t2rqSUKJAdTHUGZR2ohzc43y1qoYJBDrQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MF9pjAsKwhodympq44mvJksb4GCPzk3GLGD2xBY8KUzz4pgkH9jNTbhij82k6xZ1PASqpe8o83DtRNu25jCtFTr",
  "key1": "2yXVvjs45eA6gMbBiPh294oM2g1PpCEyJw5dVHcTjVbd2PmUxmr31dVKVkyPiqStmit7RtgFfd2yKruUfEvdo9FG",
  "key2": "4ddbNt5dSFL3d4HoPLfTjyQt6kVz4h21jBiqiu9pvyN5sDrzCYFu78EXRg9YFw8ugzmWv9shkZUjnM7f3F7kTUtN",
  "key3": "5QczfwftqX7rtmBAkPuLuPPYptbAjkFA1aNrMHQiqaX6aCvpqftPa1dT143ySo7BtyYe4UaSRq2xBHN9DRApjEtd",
  "key4": "2JZVnuSpcPtxneuzZXT2rcSH3Wi3aH4iHKhV29N4oz6vNLXW14euASp78onY5kZh8UFWZpfAWNpHhV5hrHTBFbr9",
  "key5": "2EYT1wNGDSFQsWFZb2C13LMUxmuRwGRAEhthTddxGCoqxaWZj4E6umCUTepQUvLS9ToFUVMymkzv7AUGshawJq3m",
  "key6": "5zQnWohXCvmfDbRyhsKrmHQx7UDdPsBHr52rAFwdpBrPiyZVNbzhrrLDzahsEs5gPwdZ5kCqMgnntBxUznLwkXQs",
  "key7": "5Ni2mLWni1MY4iy5zFwaBw5CKZaY6wugUpmH6FkxCLS6BU5N8iKLcHxj7txfVXzg7TrKrCyoDHw4jPiFh3oquB3p",
  "key8": "UJ4edRsKa5zyizLyTyruhxHtuNx9Bvt5bpad5XhPcBAp8y5ycjRNU5H76hAKFx9yXwBNhoKo65exyd8rpqUBV7Z",
  "key9": "5r6Q3YhDFuzwYL1jkDwo2XBDEg91L8LZ6Zcw5oUWTrprJxJJDFajQ7D3C5gNDfwRNeGUQMWwYCmWnWmRrnQD4VXW",
  "key10": "29dES57b28tafFMpSp1em8HkoTZC5YBq76PjgmTFnayzo9LmFvvXguZvmM3sRWYJBYqNqx8xFo94MBfJ8iRRy1Eu",
  "key11": "2GxsjexRJX6Nye8bAfHvTjCvcmynGcj3i97MpThwr1rH4nbHyaLu9uWiYgGuzdgkg3nJADQVjeh5XXvkJe9znmxR",
  "key12": "5uFyi4z17zjd39Py3ugCuvpAx5M4joQZ3BpM7oqVcdenHe8Ya9sxX7EUd3x6tu23zSHeGTxyCDDcr2J9gdJkB1Px",
  "key13": "va1kQfNRu8zKGy6cyVJ1cw1FhVQUbfnzRmw6hfK4ANxvcxPcFByLNRq1wCjvcvYhH3F4VJn3ahDL4gPvDJ9iB6J",
  "key14": "4SMgp2qQLnU3hC9iQbt1DVhKJoRn5aFs8asQZx9XHynk3d3ud6WXazjq8eApyesNeoZNPRufnfGcHXEm2q6eK4Ge",
  "key15": "efTXzGkDSyj2cQReQvS87WaK6ZGokph4scYg2S1VqdMBC29ih5rY9sAqPjHn1A3ZeNpdHvMGDM27TAxHJsvE3Ls",
  "key16": "3EnmMAKegzWz5weYwGeTDhN2cqzDquzG6gNHQBJzSJGuimWfxf8Gq6HXxj82jEtrYyB9uC2viowQC3jJYBVmtgTC",
  "key17": "2X828F5j79eN8QSzb3RG5wEkJ9B8oX3JWDftNQo3jKPfUXPtk6FDLnfFZaiVeersR2RmpD36XVRC5Ba89VGLvpfH",
  "key18": "3QvoWoYSCeZJ7YuwsMpwmB9PbexuVrPfTdtLn71tnAaHW4AnTjfS3ufeM63qciRn2kDsSpmEztMpS5JS8yxBWo92",
  "key19": "3pwgUjaWfntWHYNvh27HKQ66wtPfPJcCZAfFufibv9vBPeE4MnSUAH1Vh4UaP4tjUPdBYBx2wMEhvRdqnjukFjR7",
  "key20": "2pxRq3bWaAwhfoBAYAwrDFVHxUUdpnUiDir7jvQ7oErKKqaNQEq4cyp2eDABSm3XQGi3jCcm1FZPjKgffwTK7ncX",
  "key21": "2jQSsUtEpNYrEnVPgn41trNP71VcQG5KufzgqTdpHAhtPk8LmajsLfsg714kMhKRsGRiPEH7fA1hPEuiCsJiFmpW",
  "key22": "5yXuZTzGMFSm4R3gPu4MyHrYZWFCkgYcY9UzFu2Fh6HTJ2wsKpUZ5ARxeHdxtLtTEF3j2pqG2r3xgh8UqsGYUq9n",
  "key23": "32DwwRM93Ao3UxRdzWvaJ2YPKwWnSfx2UNN7rhuLSKFKjYwtBNYHPFTPJ4TstXchjw6RwvtHzF3kGgMWD3PodTRR",
  "key24": "5q9vijmdqYaZAQkejDEEnt2npGr7tgKJutirr5jDeuMoEoGW18o6DrdXrKZSdgZyS7Akn6nbruN7wpZwdRVLfUa",
  "key25": "57qYJEdnCXqZ7gZf929gL7sUqJmNachp98grqBxGm2NP6qtUd6A4BF3TympT7SpYVFkd7b4iLhN2RbyMnJVQnosi",
  "key26": "2jFcbjQV2qWq8h3ZS1kVYXcVT8BFs2yd4LwbAWDjSVVQb5TjkXASvhQKRn7uVtEEudwpcaaxJDm2kSCfwnR2ZChm",
  "key27": "5Xee1vfuJEjB5M7mnDdzGJoz19uWkECp63jN8i8Z6Er2zsbKuGMND1PtWYXowjh3UrKHm4pEfDCZsqwbkdCccdsY",
  "key28": "bJ4qkxTVspsWiMSsPwCrWHv8NL7KgHgESSGcc8JBDypnp9FcEFduNTWqRBGKE3X2ZgkodYXu7CvJLpSrzmiXqV9",
  "key29": "66zdxkQShqfNWU4DvkoR7tnia3x4F1D57oLKn6Fr9Cisbssc6FCTtJpiUtqS8QaudFy9nJBhbcwyYrjJZmd9U7Ai",
  "key30": "2fW7iDtV3Kexhz99xXFqJN9geNxyJVdyNH3vg1XDLjXRvu7A7WmLpfRB52VwMVyF6DGucQodqFTsFZmhjFiHaU99",
  "key31": "3ouA1PREQagFGbzcRmYkta8Xiaq7erMLhuXVKcb1wJm5YNE4wRafx3B4Gb9T6DqGEF3UG1UqshQiPZuyEH9Y6n8Y",
  "key32": "2Uf9n9Ua2AarDWPjasG8Xo7dYnwcT8VoZooMAGnrjoYuqonG5SGywKQgDj1qdYyDxTMv4FxNQpvqP176HHg4Hvpx",
  "key33": "54j7PtaZvNfAR7X8H5ASWw6jDHwoJT8XTVBnwW7a14KWLjfXw5EjR7XuqF19rwN7A9wQM39eYqC7TXrHK2CYkKq",
  "key34": "4tSJin62mEW3Qf77DQpQ4TDZUzogdP9J1Z8ijWimmZCu35AkU7rPNbZfhhzeRZDUK1hrMVWcRqWcc3DvWiXf3yYr",
  "key35": "3aZzxLDUys7EyGmo8rmi6hxcK1tAr1T6ntc4XVvn8ELig8cZHMfN6UMUZQMMxvGrPk2DvipDxFwjYHgat29YbNq8",
  "key36": "21bt77tLxg8Ga2QmQ7SxbC2y9K35eTEqfgwMYYnuTqUhM2UnUEXJZTBJjdNg8rBzo3Y9YpxBDCmED9XZPdeFg942",
  "key37": "Kd74v51u2owr4jN7wSij1ByNqWm7ipJmsdjgQAjYsvdKVLFGXb75GSSHAF9yF2AhHegzikucPWF3dxgWBucfiHn",
  "key38": "4Ak8Q3AmfpkSAgfD4D8qWuoa2Tpthe6RwWtrM6iPW6mYdfPQVtaLhb3JmzSXN33uMuokUQYQYyTg7dXoqRhJPhsA",
  "key39": "5QyTGRdYpSnfjtLHrvXGCQXXmv81sthJXU46phrFHFpfhrmepm65nd8eYuhsh8Y3NZ3EWg7zgJPqMvNs2BJEKVBy",
  "key40": "67RTHWMw7e2WjungiNz8QWVjNA5JKA8nz3d4p3aHH6apk1kWnPFR4QqtDgzhrnkHGCtvjBG4p2aw19DMtwdzTSyk",
  "key41": "2HL7nd7fTSepMtJhVDTS4t8L7bH8UV9uAaQ67U5DeXWyMSvuvf2BMs79cs8bw4vtY7WKZUbcgecX21nHxtYCgXKv",
  "key42": "3yWY1T3DyeZd2s3bKd9LDvu8fCFY2NKjSUcooQGsyNwyQKBZPQbaigyN1pmEX1Timw9QP5NKjoR7zV86QVMYYRxQ"
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
