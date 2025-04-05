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
    "2ZpJss66xF946Q49EvjNWCZaFUvCo33gKqVhLjQqNgXj4ChHjeSp67KStKjCBHd7qz2uBjyvAz1dVVt5K56vrdFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sDQpBYZrkYjAmr3WLMBuuBos7DaczaQYNiHjaoiEUw8xTEXQVHkvNFV2uBaRc1jHcdRC5YsdD15hcUiowenyooy",
  "key1": "222at3x6NFNF5F8xhUdUHuHM8FVvdkMzjaE4iCwc4GBatYJfPVgiZyuzUjzmT6JR4LuirdcXHFuv3duE6GgEcig2",
  "key2": "4WtxfsZrw34xELujhrsfdXg3xifgjDVnQB1nuK6kXo17g694ZvwBeMSK7WXUms1jYzBK3fJeNRCukkw8eeWMeXKg",
  "key3": "55E1qEF5RJu67KC9onRoCX3fyXqwsWZMNNc6TUDYdpCqtmPy6Rrxf6zwjfUEbruekKD89XtmPsVhs6RqxD229aM8",
  "key4": "grKW8rXzcKekpD5Rx2Pv3i8QAvSShTDMUmfCgYz7CUoYBT64A9FzY3ZGyA9k5TP2XSrHtbDzCzVoPoWhdeQnMHi",
  "key5": "53BNRZXYS5WHqxgGQqdgYWjtkhSUn1wjg5UzZ6zjw8uix7cLFbZaLQRRfEbmg1PwS7XYtBxEn6WvKDWUDxNH5i8v",
  "key6": "2YG8vw8QHrjSTRZyVMGpio5Mm6WNkbpoM7VdD43s33aakaiGK7EpQjAAkStFs7nT5ts8hdhLhdFZJ4CRe1N3PDpC",
  "key7": "655wECRaFuEkfDzmNLrnzpTWfdyXyRnjgQ36RUuRovGiehFjbGjNsEZyjfoBkbT4EdJToR6dzLWJPAuYCYeQek9E",
  "key8": "3XrrDvMGMV8hbPUHn2HYNid71TSULoLKhBN1wsbgnNqqckW1zmPR3tDaGgBsj9mJ3GmXzfL72FRFAC3BFD3khUt",
  "key9": "38WA9Qf5brEoe34ArTcyba2wP3biBAVNnQNfKz1DUZ2LiS2UBB5xM1yP1iSEPqbU9YhN7RMvMuFEKa1GhsrH2rnw",
  "key10": "5DhBQgmeM2nuJewLbRc9W3CAJauKSaaeYvvJ59RPDhpeEee2nPRJYJtN6Aj7MFfE4hdAAxAedQGpEAS3X8zjiFzk",
  "key11": "3xYE4X7g2cKDRXHJd2T7Ui42JCuvVkWgDQnLkQtSCr69d4GC76YAz3xHcqQNZmRDsHCnRK3aqfV4kvxN4XSPrWtv",
  "key12": "Bj45F6vGanCY7NJAd3EagtNaFYzoFP8NiDePw3UY6YMiLtd4kd8iEFuqYEA1jPw7oEdSRtuCc2Jn3vazCxtS4gw",
  "key13": "4wqnsEbLBHXEKmKNPtk69vyVTS21KmvbD19xa9LgreDAuTbhtkNY3KpX5cvT7mzFrEjRvHJJfW1ckjy5ezMPQNd3",
  "key14": "tNZBGty2S1RJeThfYwPyaFSVVmLY9gos6EWopS3FKWsBXt91qAKjbLTH7xUv8HqXJ5JSLwfsWLFfMomtCdCvYFp",
  "key15": "2kjsbAAAJ64tHEo9i6aZuzKVwUbSqWLPdf6JAUbt1crMQPSamRwXtKS39JAdbbgMGAaYgrfJ8kjamzbDKKMZpQ8",
  "key16": "mh9Ek2H9WGzYoeygV9osuJcuTVdpWJL37ykWHZgFn32McnUokYJsbEyJBb3t372ScFqcfg2skie3SfnJcXVntzK",
  "key17": "46tA19F1b8xHizKZsRRJigV3hsASzq1MDQZb9yjXG61DjTJCvNeVqzbz3xMjsQJN6gAEKkvKyw3TbZ2zapbmXWAL",
  "key18": "4GTVHAfGeXE18g3PNjGkQxnZUVH22jBob39Mdr6nP7EoNPxh8VWN5pbyST5wvf4T8rZrL84nK1JqWJgZqegUhWSz",
  "key19": "42KGQTfHqcW9QeKmCNkUefGLs6aNFDRC2RYQB77SJYJ7piF1xyKoLRYpy3rPmGBhdGVdfavhZRyqVge25KpZ5kvv",
  "key20": "4oXjAKYUEvjTnMWjWLeRjhyfieCkXU8qetF4dsRDEKAdAnzFmAFhaCmyKh3YRzdU7d5PouZza1bxArMLYxyY8gby",
  "key21": "276JEcvNsktr3EMcmT8VnWDv3H6uQqmwfSgJanLaPdi37Exmd55RcbTG7s52MPueE239gHYXVh1hCicEKA2NmLdn",
  "key22": "5dtok5iAKqR5JTvWZtzHE8RLaRrZM34t6Mue63tVWjJBLSPEhgX1eZQU5vYXUsoLo1bh8Zo91MbdzUch3KestKzW",
  "key23": "3VvWhv2QAhwxhxrbq8d1yesikZ9WN287tuT8y3G6AQBZ5d6DcQtRyK7RUbkrMko5kFWb8opjbAywM6rvySY5V5zJ",
  "key24": "5WPMdk5CKawGuSDR6Lq9ysz134KXy5puHGK2xKjXceBQnXktNhtnisTtWKdvwurKpDBKJrQKx7geSPTRFX8xPQCe"
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
