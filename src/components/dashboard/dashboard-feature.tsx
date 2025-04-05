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
    "4zUehjf91RGEBmCQTqR3fCexhZVMZzTHigt7MHxZ51NXu2tQpxsAvE1BeboRRZdpq1U8NdwbByKh4vW6SXX3sCGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fuhqbssLJu99Gzyk1L9yah5o7J8eYGjXBDgRe3WwFaPb9A2ACCJEMjyVyFNLA2WuwghPV4wBKMdqSqZ84fi4sti",
  "key1": "3Yf9ctxAM2V4aaWZAH6xAeDoq2iVQELSrrNnpAkZmVbhVyphcmVSN1WYspCxCc6ZtJDD8fM2w9WjX8bg95u3xNH9",
  "key2": "57iqtYrUvM54WVaSdq7Lgn643rdb1563gRxP7if8BRtYwXWrhgAWxX7sPUDju9Qsy8QBhWSzpFaYTAtbTvg6P6Cr",
  "key3": "Wgg5PA54xTsWksiHJ1swk2cfTHUrRU7uM8AbDiG2qVCxbM7Ua7iLMATv82fZANFdPaic5amYvcvuPsGySvENnoV",
  "key4": "7XQ8tGQt2BRPFixp9ADSvTVWqt2iXTkzGgwpX9PxK3pVGgyrkGNFCHTdJZJSzccWD3rnjFFigvwUu8k9tqNc5NK",
  "key5": "5wohPyKY2xMQ1uoHWakQQpF6fDyDitKPshTw5PV2c2LcYsHbX42Nff6iQczyM2SNg4D3zBnzhWXcz9KxpLwk4u8k",
  "key6": "fiK7CiD9CYGuyT47EskvDPJQrJLm8mtCj5ytPiLNpkAsyyijbDLoKwNS45EcvSbzYAbyTZnupVMZLnNmti3tsyo",
  "key7": "ZtujcDhY9ikrZxDiW8eekvJQEzC6djcxKySsHwXdzfi8oKpezGduAWExu2At9KyKrMFQKwi5jLJ7yQSWgdrQdZt",
  "key8": "2x72srAzYCXXHc7zSr9jetaAhtxAZHPVf1oydietqZ71k9sMLEZpA9gy83MeYLsfQv9DcKvNd369Kc1SdA4hnQde",
  "key9": "5rHNaaP5amDvG3KafzDRpUyQe8cJpZBtYcLjUYKBQcv8EcMAsmeiE19Qcqg1GQDKwrtFvsFmWVyRuMHSL7ZkKAzz",
  "key10": "5Bp3uM2tZzpxExiph8WBirSMjCZ6b6VWSYsC6twS8EKT9PtoJigQoVMMVyNGnhGb2Vn72BTArDqPmsKpRPsy64ee",
  "key11": "4zxSEHSi9ybPu3YiMWWAq2wWJdBFcbYwAb7yPzoRs5KXJkJgdAwXyNgdjGdEdwfJzPVueazx3PMoXsYqrcSuLbYW",
  "key12": "2qMwpHqMtDYr3HJcXZXast3x92aj7hNBxh5iCTJc7eGpzSWedruWYaq4xnSx8ysvuUGMyZF7xXEThGnFeHcBJNge",
  "key13": "2FM5pmCyK9Kp1GHusad1ccJSRWkd3BdY7xVQYNsDEwVMAv7nc68v48LhKrTsGaLaP1fdZGS9JKDaRG87y5THSqf3",
  "key14": "GdzoVgfkjeQdACoeEEKuNQxnV79YXHKsmL5Zfaf6mPm2sV4UNawzb8YqLQuKA9cMjf3ohAx2LyP47FDmjLRMoVN",
  "key15": "5nCGyG68gzqNEyuKkw8JvdxiZNvfrsnr891kQTgbhexzznP4sKZvh6PiwLW5ZFPTu9t68pi96z2cbpnLogPWxiw6",
  "key16": "5ofQipLJ5cTvK9EYXsotzpck5EU79BbVJvNgSCv7bLALD62g9hmZLrxzCDqeKPLcQSotfCefAHLKdbBvx7cHUpyy",
  "key17": "5pwDwXHr6sbSbyHc9edpG9sbDDqfFrhPeMM9MPFg2M1u8rqg9jxVZCNXa2ie9TAHq2fCXknqvenfkkYXyu7svAMa",
  "key18": "GbCu7ypEM7AgYydjM9pEFmR5Yo7CZGNjD5W92VqHiohM1Zbx8m9DSLZpu2zXL6Jwue6C9gnWLT98qR6CKVxQ7fk",
  "key19": "4ymX3WbtUzLsVSi5Y9sgV3v143LVi7MTqra7EvDmGNzb6BspQ4S38qgK5oWukrF3fYzVsRsPgz6gRLTos7ddusRt",
  "key20": "2NQ3TLrsnXBPboTyn3P9MFgic6KpPNtq4hqy9mDihRtior8DFeSm4HVNSd2rX9WYXWVYbWM1n9iBxyUbNw1JsuqA",
  "key21": "3rwGkPYyUXawKepcD8gCh5k2zFmmfavk41kex7BD1kF429fTMN7rFe1WyA6XsNWnKbu6ePWZUFw3ttrwZxNJpoiP",
  "key22": "49N4ePUmKAyZNtrVBeJZEG5m2oeiFVevDRM5JTnmRA92e1EmwSJViS5k9a3m1ZLkjevMSg2FSrxzEj37ZmVt8jgA",
  "key23": "2ve4Yyr71JDuMrHLBDhrVMq7HfhMiqf2xYb3HgQ6E6ozYtrcUfifK3DS2rJb1teeWaNgwrjgizqYYbzdZ685aEEJ",
  "key24": "45hsj9AfSoeiyUUFyMG4NvpJgKzMWVgiSYSaNsQHYGCtqMqyeVPjUpXJUKoSVxHkyqdVcUrrQNudFxd59n3rmzMq",
  "key25": "4xXEJCttoJ9a3bmbxHaT1YGLJzRkmgRkNXXuUvRrypPNFDSCuhHSpaDVFWg6xrUdT5E6WuP4pAxLqLT7pL1XtBw2",
  "key26": "5Pt6i8LkFewG7ZMBr3NTq4f8U2jCd5MZTSuVH78T7sFB8W6uAjppW84etrnVM9Rj2vYtnxkciHwJ3fV6efWyGHn8",
  "key27": "4jpzbXrict8XbT6Xp1BGAabuXhRkqKHXSsMTWf3hFq3wCfGNGHi9SQrBJqbZJKAad8N7ot5CRTuaUdxJacvT7nF6",
  "key28": "2TKfwYNL9We64CMhJVWns6myARiTfRC6pScsNJgcVNd5P7HpNpxVr39Fis7WL77sq1aYCngamWexrcKLxftTBPHb",
  "key29": "35SopNjXbJ6afcPVhg8tPzHXpA8JK15mcK7SDk5gPcr7YFhkTp7DVh7g756fc8PrQk52GwWvutLQHZ5WRYkT6yJx",
  "key30": "5wjbuUwuvkY9Fzvh6FJ58DuYCr3zZnQV1wpdR7dnuSa5j5rS6djY453tYGjeAtQegyTH7H2s6BtJY4bSn67WjXFx",
  "key31": "3YP2pE5AQWaZ2F6Mwcz1ANAxPXeDMNKLLUoKEyvJCqyKNdctxNZooSKaFkrqQyt9t1eCW75eCT1bpbebr9FXyEqE",
  "key32": "2VYMusmmatiiMXFf5uHhAKKPcxVGz1uyj2XCTSMBuFJGDRXxFZFuZJGqqTd7xfYD51uVRU3HCAmzScPp5XkGacQR",
  "key33": "23Z6aS4hH6cSqXSmH4dQRaNFMkZ1mDAGno4dPBs4S23beQRazEGwgt4CyU1eSdCPbkB1L9P2yED1ULtSrUH29aZP",
  "key34": "5nWiFKG1t2cjtQsLkfaTx7TtC5CpoPyUXVzQVvmTvZqvpcDDwwMj45gLAfnR372QPxGSmzwQEsy25j6BmbiVKzGZ",
  "key35": "64ikJhj1NSdvMknbBtNUgHwUaQq7Bsvwptnd2ouzw5EKR4wGACYWizyBSowtgpnWkKYTB4X9pWYt8fxXGUnRpQY8",
  "key36": "2dtr1pEicaCDYrHhyu1WkWs9tXWA84wCuMwAdoojFVwhEVVuZULGcx4GTBdJYt7fXiXvJeB2aEsm1vqgTd6ve6So",
  "key37": "4j6Ufhxv9e93uCCrkXAeLxm7NrUXHLam5TzN66wZpKxUnQYQofefKnLbEHPJoLqceYq83d68AxcUFhNEYn2dYgMy",
  "key38": "5MDd455bD6cNRGQVFNrcnrfmHvyznbCdnZ2mndsLN5g8kXbgjT6jbK9z8dSs1RM8PuMmjBd7btsp1hGu4Gz1MYHe",
  "key39": "3yGsATJrkKS3QP6PYuL6BFD4XtM5rN3P2emCabJabNfasWykcxHpMi63LvTAG983QX9T6BgSb43WaccuqrUPAyYb",
  "key40": "4ZBEtRvNYa6Ha6qdyEANkNfdwcUWChTJ9ErkNfWYgymihrtyzqFuAnSCEZCHHp5HXcLBFwtLZrLgmeFxNNStPir5",
  "key41": "XYGFyi3QXWXAjwpem69WtMRoW3ehEgfJ2ycH9NAtGinuVgKXPZANaMQLNV3FENVBvoFBVBLkmM6npJdVMSYGTNi",
  "key42": "53zhnT4YwFp8DYMouwAN1X1oVYxo53y8kGJZgWS5BFfyttjgKKYngBxWR82v58rHgfzVwvoAK8rkDNnU3UH2sZ9o",
  "key43": "37infgnFhV5pJb5TLgiMMM3SjpSVsEyoXoKRL9yi8UiXberetP9HG3HcUhkwrmZ213RuYbgYdsc76CfUNW4zCcb1",
  "key44": "5ypGYNbr2gMM4GV4YgHn5Viy4gv1L2G6qiu4pGvT1euX7Zv2gwfQEN7RjZHCnv88PY5gUgWAr2Zn7KcG46ZNyQ4t",
  "key45": "4RL2AyxeAxYQNqScQ9WCSzrCDNQNwFEMmc4BrzyvWgDCdLbvfUfHqVAUX1qr1BYPEQwR7ahL1Vpd6g4F4DhAMZM9",
  "key46": "5eBNneKwKKWRh5hXLh83WgkJfuUXm1fGWzQfPdMxkytLkPcfRj3r1x6j9zDq3oC5pQjPx6Y7wWFpQPfGNM4SoyTz",
  "key47": "2YquP2Q7uTm2Gk1HKGAuz8BS939DYYJs4XNPtc1dD7U7SBqMBfFpw7HUEQZCcmjmiP2r28Na9Fv5iQCbAUHxfmLJ"
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
