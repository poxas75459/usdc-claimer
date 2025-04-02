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
    "2s5WsK75XC4iwx6scwckhPP4qTTA7CMUu5oqcJXtqrwWyX2cgXhibiZaLSkMmxte45cRimkPne6LBHYFPBs4K8SP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nKYxhgH5Xta1CNAxJv3JWuapDiyXE7YErBkwDxMCKsaKBsYP3jqUSt9BVyhYPWspXCP9jgJZGA4XbZMYwaR4FqZ",
  "key1": "5xQCNhB5qKpGcfcYpWdeUd925at16c22CkGgWcKRjXogVUgByjzsu9xyHyeLMRJhCcDWXdrU9JmE3vyPRtWf91AQ",
  "key2": "3VuT9XBKAd5G5cAwdUTnctCRRsca331VdppMn6bjZjuL7bu7XFfpQgRViU8JH4TXqudRqGwnfFNE3SVLxCfXvayG",
  "key3": "4HC8gW6hPj5Ku53v6aB5L9hZSTW4Ej9x34n7v5NKFmuxuf11vtE69yTapRA2Fx6jfeGHBQxXJD8stm1QcRGYMPHP",
  "key4": "2KFrL65dXqbPkgdMRM9aoAsATTmZSHxLjzZxFL7Fpm5hBGECFFBN7egVR3csUyiYQWnQtRLbUP4RPYBCwCcz2x9N",
  "key5": "4oSXf7cHeq5JZ4Bv4sAYHiZDUAqEBmdbiBbtV4czTdFhC2kPvDbBMTqXs5EmYmVo7Jvdqtog57ERJ6SzZ4Nik5qF",
  "key6": "cV9SY9wLCuHw9fx31qiZXBbmzQuA5S3jRwu8w2RX6ueuPadGMALhAz3pLWjLRnF5tcnJxKp8iYo8Y6TAWymeqgY",
  "key7": "3gDDnkrhWEAF7jJXKfbdxNxXA3V1piG5gKfcTLtUH3bAEWX7pK8WbQ6a3xdpvnjaxgMwSv3UgQM8nCEVnCiXDY14",
  "key8": "4Rwd8wV4PZRNF3hZt2dB94bizCd2vvU9AoZyTpAoAqomzKtsawP5PVnXpFftpkb2pTnaCfaShXBtnWEVuKH1PLz4",
  "key9": "zP3YZWEGQ2321NqtDbpobR8fg9jAjKvLjzxzY333mgkiD26iG8kEFQb9iSnx5s1i5f5ofnHcVsqfEzWPEcpRh2N",
  "key10": "49B5J7jJbgn6cDQSkteKfWj2NapkC9LEJHLQE8qH7tZZqVpQ848oPxnkxtSA3BStrKoep1qdFw1YFr54yU5oGEm8",
  "key11": "5ptNC2cowzZLmH73fnf45bSxAQxx9XSXVh7MRJ6fjSeTDTd7H6Y8JYboPEANaQ8c5JCxRxQhxpCW2JSMTaCr4Tut",
  "key12": "5iXKcukBUPwmawNuSWTzDswP1ieyJKkderMthKbGrtiS9Jro5ZNixv4nYi9oQRHuhYg4qqtPMGsPauDGC8SKx4y7",
  "key13": "33wpyYXEkzTYRBx5GmsybSbmVt1eMaqusDqmbuFVni6pfsWwkXqSfsJU98GVXuSxYsME5bcmwbQ9HJQckFMe7Uxw",
  "key14": "2QJY8occMLq4tDkTNeSusDEdTVKEWvaanx1HUMA35pyBCJAHS3oCqjoD3DB5GJ75AUArLLV3FLqCgnTWZFW9oAjR",
  "key15": "MD4F979gkTJXLp14SWEZxW65ac676jhmP7FKRZ4j1cRiUkifEaAgodnbN6YujU5dTu6PFNSGPsE6uyB3JTTBQ6D",
  "key16": "5xEjncejoUx8EcLcMJC4PBTCXtQ7SpTLikYQ8QUbjhDAENXPCi2zv2eUwr1vFysaHJKwHYJFcs25FcC4eVJeQmo",
  "key17": "vbiwMmpiCNuDGS5n4ZbEGqJGvv9bphVCH8ng4aZQr5UsYQ8q62UFzkzxiDGNRrquSL35FFt3L4r8Jw4mumxeUKt",
  "key18": "5ypJUv5X6rUvKkepNzqt1NfGRwRweWE9pbJ4psF5hvZAicNqC1jJ3te1f9wmnpdnGwGtu85uv25Dx3GRz1nrAyYz",
  "key19": "5bpmFRwjsiEPFmYdHxipJFKRJGUTJyu3DZszEPBKLBfJUn1UgB1mRT5Ef9iyuFVuHVonJjePzwwPAuXLbtk58niQ",
  "key20": "3SG6JzcxdQS1BbqbKK56pMveBmux3jSidTdXXwPWgUqpVWHH6Z7ryA92ByEhpjSswzqiHLCtq1pXJupz6NSB3g6S",
  "key21": "5DVwCGwVi6gcBieGDsKLyjeovkVoR7qa1rHtsvLK2VzXA2Bqa8uuEmy9u5EcnboH46K1PDx2PkebH3U4LmZx6gG8",
  "key22": "4Ao41hjqfDfohWzwuhFzQFbz1AJnNMFQqM6pyTRTZSyyScZo2Thc2chC2wddHegk9g7CsZqFAQYU4epZ5XaKy8dB",
  "key23": "22kP7xfmYcwpz8GzHL2g3MSfzzw5QBPgnFecVD55gECS2T8pnRQgAxg962s3wsFn7QA2FMXvf3aqkSDcUoHa5UxJ",
  "key24": "2tqw4G8wSh6r3bzi74Jvh2VS96PNMFEfL2DxykWZaQHbLcKM6bkT8QzYvGLnGrNcsHivBf8qgp64TqdEpHZE89pX",
  "key25": "2FBE3bVfyY28971tdUxqv9NfvWM1iqnTgTVFLBP8xKusLNViB6FcuN6BPZ2RRTap2uGdRJLZeFPwUYhAqbnanzD4",
  "key26": "5ULT2Py4mWvm3ukszztUmkzDA9TPyJaMdSPc46wk4BfnoLAr3GMhLueizqv6kzSpHLsn7to5vfX9oikMboA9oqME",
  "key27": "2EgfcPxy9EsCdHh8642WrZpRd5hkxJAVhaaUiLzJnjSFYjicpzRe9HGSbRG4DucjSz2AQsA5xL8rp9dFrSUh3ARw",
  "key28": "3U3C6LEkyvvunwBKhMP6Vr4vp2kvN5x5ZBwukVUEhoSfsBC6WTwyB3GsxjKjmZZKDwthwGw3dSkP3MnEACRRS3MG"
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
