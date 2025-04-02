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
    "49QS9dNWYq2ZijVUhPRSraRYJYApVKsjJWDw7kHekasANZSnzNCwFL7bMVyMxLcgUNkpNVermKLofnYJsvJu5edk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H25fun9Qj91odfFu5L6R2P243PuNBTtgfVJxAznZ6Tonx5NuxToivRgdc4q3u78iJn5WkTEsXqMuLVopoDrr7Kc",
  "key1": "nwcKUGf2zxrtr1sDezVuUMMMCtim623KRYxA8qK2XDt4riuqAMU7GD5TX24HKZoxVd6w7BGwQTzDJ23JxDv4sGP",
  "key2": "2gV7rdamGGRCbsZzqa1KbadbS1PLLdoYJDkoyg9f5pqTZW6My52UcngvnLXFcbTxhVL7G2KhSoYzGN3ScAcjcEck",
  "key3": "U1dgUteUawAroGhKjwaxnBnA7SWbMcngd5JJ9QCuExTnXGMe9rbwtY5KnbmgQNSwUHqNqTECVXqbbjXRdjHTPBe",
  "key4": "3wfqN85dZPT5r1i3naNwiXweH7foahPfL1dHDdYCv2rjZHRsfzKqQVgfYc264DLrvJuDnd7kNU6UJfNkkub6VQ3P",
  "key5": "5cB3zhFu3jqXdVmfxDz2ezoG5pZkKmTsvbQ7TYqGJ3X57q3MrMTtU4KEBwmJX3XBQGHQ3cZPVqnsFMVnVzEj8AcF",
  "key6": "2sLmm1uBTYTUb1jsCLYokw3EabfCbsa1ZCtZFBzw6MPskFTkNUevtGbWRZfgE3ALVVs4YJg4X3JrF22QVr9AJEv",
  "key7": "5rkbKxkM1YSUET2arqtHcJZDGKsiBdSJiPYJJxD6jsXSeBNojFM5vh9J8Hxwm4DJr6FyLan3tzBmCcAZmXXPxVgV",
  "key8": "4yhjZ9Bw9HkhBdYQrPiNPgFNJSjvNzdRLq4QGjKnYHRUwtsGt4bLNGj4Vy4wqyV2PXNAxBcPBaPU2jhNjGoTkVpA",
  "key9": "etw8syK6NqoLMNecW1CVjjeZVtJXGAD9w2NPUnowR4dzwvAhCxpKrCNJw3UQ7SUC3hWFs7acU3XiA3jLDTrL6Mw",
  "key10": "2zBPfgQCwRp97NMVqhKK4i4hDpVHVCX69qKs8WtTyJ2opJzFX2hk8uFaDEDoVYH69BcPMwi5iuyfwNYyKHDyfkbb",
  "key11": "4sunxYCCkSqK38ekCuVeg5nHRESCfKpYyfmW4tqjSx6MwZHrKEYax17pMY7Jr9syMNmChEw9SfnvhVDRGszwbJDn",
  "key12": "24ncVfKf93vwXKpoxqWx1xuBXfXHXgoQCPE53QQnVBb5KgxuNmXohLRexUqj3ruNvu7RxK7KCRhm8AFQuGDLj3Bi",
  "key13": "2rj4xZXWQpptQWPMT1MWbKc4o4RXYf7i33X9HEzYuWw2WLHLS4wnPRJnsx7mEiBWQcoYMDSLunwV1iyZecLBvjJF",
  "key14": "91rNV5watEgw28g1eiCiVWE2gYs1udzsxJpJ8HmGVtUPiY3JtVYt1DuaAdmYj4dERXAGj1MF4WkVR1JFbJcupuc",
  "key15": "5dderKi3VjmW5982LFnvPd2NN6Uofh7f7dQE89qMDpEhtGCVikM7ZfhCEU93BPQyUNr3mtEQEDpQ2WkSvwxn7aaS",
  "key16": "2pm4aWqX7gLJmYx8RXnYBDwwdk4E5gMRde2UDWrNKgXRvRvwjzLSngjTyXUPDqTwcy9RYNErTUAFYYrykerwwmno",
  "key17": "3sXsqHN3cfV7Gq34UVme13YV6mFr3AoNkLcn3ACa4qiNc88zZ5BrE6xwEDmgMHhXABQdXg1otjGDk3ANkk3kZhhE",
  "key18": "5fjDqE8LupUnpZed4vQTNNyBusbWgXsSKUd5np3LeZsdwrjJQVW6xaVZoosBazFQjSuUA67dWb63BSHsk5jy8RPP",
  "key19": "5wLJ7jceui97LLiDi6APGSBkwZNr4G4XXPYGjKWtCk2cmGAbFpj4TTFJ7fpQmQquvX2QvyoAT3BokUQkYauN57WF",
  "key20": "p8s9VNg1Neeu4minvFYgtmK1zYWMcnCsZ5z6LUcb2WHFRUC7dzL1Kx9k1ceK6Vr2T5Ky8u4Edg4g8edxTi7XjJp",
  "key21": "2AY38snS5YFaXUFNKFufnGJUtoJCsEoDfHDS44rGzGaQtpdn41XkneNyDexXZ7poseLFUbcNXsUUdfW4Ndwy38j",
  "key22": "CZE8uC1EnPsM2FShrD6x6pSobvYAiRTwz2ndmMR4mNmxxyzT1UtQ4GWAkPGBkeGn8pindJZs2RnWN7GawXoeKiU",
  "key23": "YvnKC1nQFK7J2mcvUtk5mNbaZJQqe6AGWY9nyg2CypkACk18SiwaBqreF7DpKXFtuKP75iAHxV9csamVawSQZY5",
  "key24": "67LqrVoGPkPbY6LCz2WEv67HgszDCwfuhcQyW6311apJrRAd5rMwYNwZkL9SxnsZGMF9ncnTi8WFM3aof6QgMP5M",
  "key25": "2yRB2a8BWbLKhDPbVeXU9hCSBhe18P4g6qFm4CugnbS7YQnkxmNmAnQbZiMYDLtFUjtVdZ48szvQQJdeT3mJx2ZN",
  "key26": "3NAjFPUFQBSrfZPJ4pS6zQThaT7RiQpMpeteiuT12313thhF6p6QYPZ6QDSHmbmCfHcFLYQDLuU84Z1sKF2dCVKJ",
  "key27": "59FwiSHvK8XggynD8xHptNzAyJbXTbZL9V4Cx1gQgyQ6sfs7p8wpvyWZn6Hb9meguVNT9e7aCdDdZAkhsV7UuBZS",
  "key28": "5mjTXUpVdJFTUGtQmWBaAVfPyq7twCQ3Y63NTLTJpq4Z1cXH5t2MygUPEe1wh9KLTY2LCsHWv8WB1jZDqRSZrEgn",
  "key29": "34UbxadDEqvC46NrXoUFBJajykw9bXtBiSe4EzDk7Es37oKU7RPcBp9YTYT4vmew1JCimq34SqyLgsnPN1QS6gGs",
  "key30": "5tus7vgdE2QX4cKynv1EQMwvXMYB27Sc2m9p6yTp5PUkaRijH3QH2rvJsRiegoa6pnYdg4fgsuJBcNTrdDiaGYDC",
  "key31": "3Pzig9oA6mX7DC6Rek1yZDsvhh39SRkyUyYSgmBELcJoFTW8cSSGvBxUHsgMfHjmGaNujMPuHxyg8DP9pQz7GU1T",
  "key32": "3SnbSBWsGZnTqJaW4KkstMayCVCSz2PJQqtmMosfCZaSBxPSQvWspzUUhyLFaYGnsSsLoYNLG4fozqRdWEgDTSy",
  "key33": "4qaZ37eAaLBDyhdDH2UW4jrFTsuvHPcz3NZgzPtsq7Xq3YF9CkWijHRQDSx18D8ZvMcNx53aNh6Ee6WHJxpcV57s",
  "key34": "2Mwe4rft5KQnWXKW8judNAt3xrcJpoAvGZG7CRqcFp7gTiEoeyHTRgwGAGA64VfsQTS5kv7CrvoszRUXzb2vtC7S",
  "key35": "5knWFfXAtCxeP8kSZabN5rHj8WjkRmC68mY8v46Xx23L68A5nKZnGWiVg1qhCit7GPnLmSDh8mLLnUM4R8XEues1",
  "key36": "29UReyyqEsQbRuF781cQ54Q36rrK3trNMg8gqq6s8tu7Rtw9t6jresmECe5uBfgT1HcJeJbxDmoDMtG437uc5wdq",
  "key37": "2Av5gySSc9mouRXxZKZQwzgFi14Tmmv9RnEKSMpsbYxRApeQRtyKQcDTRsGJdij8Qt2NDf5yJCyKbLd9J84iZDHt",
  "key38": "2qZs3eaN1sDr49PGCfhgjaUsw6qnWpytXQGSotUhK6A776QgNuSyx7XvakAPjJaZY4EXzJVKnkwMQehJkamyEvdF",
  "key39": "2NhfhSSpPDsMUkjZ1ZQMaRrDe7JPJBaMRm7P2mdZm9zj6nmCuE9jpALsnytgxw3RCaksA3NiN1MBvRSfDHJEn48R",
  "key40": "5AbN1JFDJXkgVydnXUuxdkvb2fnHgASBCRNBHmeExU9iPxuT7GaAHfP82uu8wKncuNMtpV933XQmqrqcDrGJPAjU",
  "key41": "3dYym9MNWz3AB6QLVxSTDkcvbB6EscZrU3vZe8Rd1dgaC8XnKcWixjPLiJu4MDUDJDT3yfugi4JHdQejFocgwbrX",
  "key42": "wGDCaX54Ek5qtNdsmbgGmuzAGArA47oda5JkrMS514YPRSLHg3yGURaM7s7aSMYy3MmxLzKuTda1FuqyaY9Z66m",
  "key43": "1QxFcCzubaviKoshXcNYLoswRMTFnBv5MX3bJP4q7HJBYwDoXqBNV7emgvYRLN2NsXQJVrBKb4CRA3Z6jvv8ENA",
  "key44": "qVunNz7CXNs1hpGqMwzdyeCoUAUuBC3Nd3oBwCDFfApnCBooMQ8tfpAyUwawj2ABt41ZHn9rGjTLccXeQXnokBG",
  "key45": "241QhYRbaUM3RGHrAbtTBDtRBBu1rbXh2eYFfurCJTu26yco27juD4qNoRtW3Jbu99Jzm3QcrCwnDT36dGWfivZi"
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
