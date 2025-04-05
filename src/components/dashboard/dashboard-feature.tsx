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
    "3aiRngemiQTD6vGD642qy6FH8dSe6kUcxY3Vfz3HRjExaBBwpvaW6zJD3gfR1LgBrKy485Q8iCgnQrRnp8Y7Vz65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S1ScrSM6w8TUT1qC35o3DYvt7jjcvdKsKj2wBhu7naN8Z5W4nWAjFZhsfMaCicgXv9Vn8zYu51hH1fWZoCZzb7S",
  "key1": "5rAQw3W4NpdytBGkqJ7pgUjL846wrRgXJYrF4eqGLsDsixgHoy8VvSkZ5THMYaopCGHQPZbHuMshN8zia7aXvYXe",
  "key2": "7wbhRMy8k26JrtSBstNFYTsRiZcG3wYRT9BP1iTGCv7dd27PLdtYzSxbnWu1HUWHhxDxFjTQh7jj9bv5YsJskUa",
  "key3": "5ZZegNNxdjQviDVN7foPHcMssFQmky7YnFJUpdHgZgPbG6a1D7Wo5Yj6jmvvxVTzjF1Tjk2xPFNECtwsVkHkEwPB",
  "key4": "2W5GWu3gbPretpXgxGagQMBrdo9LBgWw39CB6YrgcjhzGiSyTJHGjkVM3Je6vGuhK8Yjt1oDrkh4gnobH52HAJFw",
  "key5": "5tsLa931PkETXtQWifqenffgT2zeaHjAP5EQYikX8KTp3xdsf7p6SKk86RHNBQ4K7Ndsz3dPoUaTywCNZwiWL9TG",
  "key6": "24rhj1HRSv7ijMDVzjQgZ5QjCYmYfWdAFBn9pL76G442aua3xNH5qTMCMpmbvHjHvxCvFJRSCTJDsaq1MDBg8myS",
  "key7": "4W9BiTbwvLkwcwWZFfXUEfTMZvAjTHY29tBnkVVQG8yAm7buEthm6CLJ4f7CFhGi8kHx3GzXfdxFULatKgxe33vV",
  "key8": "5VL6iofotxpPmNvFsj9kh17GZS61gtyv3m4a4bue5hYXH1WSqu6KmLnkWwGs8fzwiLn2D4R59iUGq6oW6P8R5B2z",
  "key9": "5ZymfNFbBzsryZEA1RN7EKtoiAwBjbpDkMMv56LxRRfCkqR9ZN3o7Cyms7RY2v28yA1X7zywy3zZ96SMdyTnhNx6",
  "key10": "5DF2tKXPazKtqUCv3Wf88xk38dtprCiGEAxQSdQrxW4PvKLnThdSHr34SXYZsNtbat4BqZc3TNbGF8SvDcc1E8L3",
  "key11": "2fbQWwoxVfLwZqYZytH9sjYf96jc3q81eBp5mrNDtJp3fyvQTUtPoGhc6qbGCaakaCEDtdgu7q6DVBLBfhZb4Pdj",
  "key12": "2vV7ZHikgrnutPajn7XsJsdFkAoQ6cPsUSA8bovnoJghWP26r7vtDPMbPEAUnnWZyCuCyStUHRoPAumc6sup4pWD",
  "key13": "5c9d2TYq1T8cePwcKujSzUTPpvVKTX2rLFuVcMSKvwwscHvmMYKRQMhfxpsLtyHc9NCQvsMMcExk2oMsD9upKU8Q",
  "key14": "3Rz1ZFM5gYt1jgRxaNZVGdGnVZjfpCS8fEi9VrhXBshdmLZJMgbX6rMjGu4eEVwAu8PCxPZxVFEhV9jYtpNn4ktU",
  "key15": "3NWmwPvWLpcaRNWWsneMkmQ3Cs1Q6qrMwMRYFSyuP6SYUqPGoco7BbWtJhW2Fc43LDXCLMF3B73JobWbY3D7A1xP",
  "key16": "hVY7WDVnark3mM421G1zatSD6pmNAozdopiYSbSsDR86HaD275CRAjXX1KGeJbsQKmiq2FY3yW7AZEfCtoZJsa4",
  "key17": "2gCwmth6Brxz3t7YxA724TKAWNTsKMjyvhKjkzNpbDhu3y9yB8BLEu2v3NTYe6o1UzTqMN1gPHG8o5NBf3fPbqZk",
  "key18": "5n9mVzBv6RrySUGPVjrwNznw41Ji8YGKAxNC13GurnipgBuoPj3RbsHhiYXvq9TejRMApQSHiLkbLABoXT1YXQr7",
  "key19": "3SSTgVYWhZ2ES3fVVjTPXWC11LNC7NQNYE538Bia8u8CDDZ1aiHmXUAhPXgfVFgUmmbcayasMTC1AS5ZEbM2fpS3",
  "key20": "5KLrdNt9d9KuWCBHFxjidneS3B91HNdUNtuB8nzVkqB3ugFT7EsHoWVLzSyjQCvtB9wVwYCLwhQvw9iuod6UiaKL",
  "key21": "2y98FSbqWhSGJJnJaK4x18MYcLh3ozy8K84ZZTKeeytw1Ha2NrPiKB2TfpgNQWFy5VzpBEUhxtzmE4MVh7iN1tiL",
  "key22": "61yMUGK9EjsnmasUkzmau9WM3yMGQGPodaaSFU5jjZuKncbnPPVVSUNRkjUnCwQhPoRt4hikwr18LEePtWpeiJa5",
  "key23": "4SBWp1o6PpmbcL425hWHZ55giZPGCZAfj1hwmYJU6auyLdn6QY391LdrRjo7TK54tNUQ5ZJkytERdUN9eDS3seAC",
  "key24": "J4QTYeN6BTKvGu4ZYf5UGMp4UYUBR16owS4PB6BK1cnaUyEdmr2dxP5NM8xmWpV98GYYBcXqx9B9KFpaBEDtjhN",
  "key25": "3VMH63KNmeRPwVfGaCVvPxkKJraypQdKAL69sihtztqHyJFJXuLEFLQrEKo6XE16xCAXW7bVSr3go1rjZzqybdWi",
  "key26": "63HZ5qx4gSZtwfZjcVWc39d4dNtQTLZAbpEtkxhBx1ACnuR5AqKc5xswJHmfemLZDnazecj17WvZbiUx37if9xdq",
  "key27": "3LUEhVCe5hPbD9ZDcQgzBhhPf3XHG2Ch9WfHCemCYDtyjgHdvj9jTEfFDbRdSapdq8uFnutL7TshX64cM1MKJHfa",
  "key28": "4E2QateJEhdNDTzuuyD4bRha51tSm9znTgynAssiBTGSeUK3QS7aHcz3D1YXNxqNxheQbmHazpDvudjFKSUPoyxu",
  "key29": "3mNTFKGrMfisq5qvBaPffqm4vbGrFPE3Es3c4su1VVUJr1KNcTaE8WDkNwxYraUBZskmXhSUqQERvwBfEsWsFNwZ",
  "key30": "271MW2qGBCfk1JTYdxn8cCW3H72PrNCFC2aT8SxMmJQJ8FPHBqd5HMRABV3Pcwk4B1t8XKZ3sNefFz5myyaBmndE",
  "key31": "5PPeiSjoKUJYS9mmSR34qUcEiLVRq1dciGPTS4KcsfNXvCxgBMj9qTLy8YaoAM3bw3bnw3s2X6o2hhZf3kjsFytz",
  "key32": "4tXtzdF26UN44WsY3MsKDVJaB4dotUQG6az5HAQSWpckN57uVvWpoUQVF2NyZebHe31EfLn5zrxpVsDStbgoEmnz",
  "key33": "N7CDMmUHJCS19KwQkbZovN8qssWP3qdiELq4unQJESajS2wtW7Z1iu2BskV3fPP7q3A3kUA2HHq2WgQbosu52ZP",
  "key34": "3MmnGN2igcVYzMekPeRDxroN8esn6kF8qjNYk2knQcrzAAhZnzhZUGbmpRQpTZG8FzkT5uFyH36HELVQjmZuaNob",
  "key35": "jBJA3n9xiHx7thk6bAzxXqshM52i3VxCjSioUJgZmuNYY98tYCbG2jQdU3SvhZ3BXaK9bxTc7E5tLQAXUwKX5D8",
  "key36": "5MrsErVnsKwHNoB98uGZhyvyNJq3o5cT2EzhrrwVVwEMuABzXstk9AqWjuyeGuFsi4tVZQx5SUuYKELborQZz5D1",
  "key37": "5B8KDpVkjqTeFtQuMYvmbL1oQ7DHBdJA2dRdUiSaCyLq4qyuhxURAdopepz1JzaDs1kWbhwDHczQkjnW3S2iYQYB",
  "key38": "DmyZ2Qm4DoHCGFsHhDPfM88DEy3QsKqX4jJ8kFQPcBqvbKxC7xePfsJPsPn5cMe4tXdPpJqh9ns3cdwCNRp2wUp",
  "key39": "2urXUFtjHGF82ifZVdWT21k9ayx1v8eW7hH8E6GGciYxJVYtGkenuoAKcDjcPpR1dQyS4QV6yeFWaT1KJJFjhn42",
  "key40": "wBZpsHSiHbirojMZ6j14bV5CaNiE7PeZF9G7YT25KaeYHZssho3L42VTDMmbq836dp6KRkfmVpKKMs6fszoYSZM",
  "key41": "2J2qEz9bcia7dsfrSMh93pC3ZvS5TvnoMZyUG6hGNzbeEGGYGj33Mzpwr5ehDhvGbUmp5Y8vdniYvD4QkDpVvQBF",
  "key42": "4XRhjr3DVRFMamaL9YM47yv7HF8t2RfkQTxzRXez4hT6XMKxX4rmWVdtQt7XSQXnxBF81zEUofs9R8YuxcuJLuTv",
  "key43": "2TAPr3RvxqstGum8HTm81NzLuPNxVEC2KZdfa2UnLHRayCzJ7LkucnFVDhjeTtrwuti3aVoJP2PM2h5Uiqn19t1t",
  "key44": "4TDXmvoBm2kcEJmhSdmpQdnqUpxqyC9wMzXzD8QHNsRxeadLrj4V4AWkabhK8deNrGf6vH5rxHskW94FdEkgfexh",
  "key45": "362x7nCFe4gVm5jpBMP6sMnSnQZB8C9LVHZicuLZh3Q3USSt1HY4zpdtFCKS3Lzpka1vSXdvmnuzgnAywa7Nz6jD",
  "key46": "4GM9NWX4QxsDJ7g7MeyXbsv9uaZaHoQf3QznQUaCVbyeo5ii2ggzCexHJohzz1pBiHsP1pxSjV9dDddNiuoMbUwZ",
  "key47": "3bCNRJFKBHncGUvPKedexZxqmXFwz3ttCXqcZGZgbHhwM7x8FsgJsCEgv4L3fxiaULwVaaBtcZtqV5CLTWDYGNoQ"
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
