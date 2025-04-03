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
    "2b8zU3wxhnteiKxNaB4tfbycCrhmNm3qDDUQytEc65zHV7wt3c2525gWxZYeRMwU8BzdV9dLCDjJqnRXpFKZeBum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "17V1556Q2BvTFWDiPcGMoufsDkxcAxf1GioRHwN5NXxSf7jsv16kdb5p5ofYygjRiaUcPx4DgB58SD892dktMzS",
  "key1": "AA1RhwBLGDTgetS3UHkr6zUm8G5JywT2Zj6HrX21Q88TaSZiTQCkQhhiEZGUHKW2vHQfg9T2D1rUBpnm5kKrwdZ",
  "key2": "5E5PGwUZ4NxUTXDXSPYaThcFbiLtg8LuMt5RujTW5mSHF6J13Naox1q5Vy5WixS7G5rzSFNSLis9WQRph2jydDjY",
  "key3": "4W795XyexvqJnTKjqDuFo7KEmjmvkMhJi7tbxRv9o6VdmiW2wYxT4T6FzR7MecBxhjEM4DSeqJoxbbnojTeAptLj",
  "key4": "2Jh4QZuLsvWe4728fdqbfzLN6Hc9aW8UzJM4H73b7sbtufyfdhruEeKTMW2PNiaihRi6SDiHNccMYPCv5YSNySyG",
  "key5": "2UHbGLzrAyvjmgn4fjedcxQxqvYX46ZcjopNjGq4wve6q4e454dQRTa9wLrsGcgmsf8JFuhznN1gxM8AEsNymfaz",
  "key6": "3WC28j2MMPySKmwimraAR8vvjPxDA57GHGwxGiYUvxmp4XnXuwuptuoFgW7hK9rCrWKR4gV1iGcTVXa3THmLYqdD",
  "key7": "5HLqfWhnnHkBHt2rfJrXQAgHUQVwoeP5FcPj1bYQCZfjjUUDhcdpkoC1tsgESatfGfxDhuPzz1DujTECHzQqsTXt",
  "key8": "5MGuSCWWZ2Eg5uokaCQQw9VUW6XjQMkz8JJxcR6afeVnzwU9HPncxNA9iGN9YifNujB3jRr7vfAgpemSuXXRSeo6",
  "key9": "2sTe9G3yPr1Hs8FfKdTZdiBytbLY9aWACKoHr9cbgucp3DHj5yqwLfbfc7KEjh6nHLKodPU92J2DQWpsTSMuQQ7Y",
  "key10": "Zj7RsUvZet347nzAEo2EatezxopUNDQEPgxwuqVdvqsLnFuTNcQz9svGCHwc1MrwLX2d56ybyLQqJAb7jup4kz3",
  "key11": "RCjq36Cgh7ng3iKERbtCumHpxJWn2ko8gx3meRKpte1cKRKoe3xMfajE417Cjv4JrkEDE6CTqiH7PpUZh4uPpcw",
  "key12": "2wLtWmHgLoG8Z6enm7MPu9LyGDZYayN7JT2AeLHRvWMqT1VAvXJojAxNUXkvLczKwMoJJXhumgrynWm6oNTMAb3U",
  "key13": "g2dALHcaWbLtbgWiLFp1RmhQNpuqmZ8ND97CLwadMwU94ppLkJSWsVAGL5a2HTshXMY3R8xNE9f9pyu93jjF9rx",
  "key14": "2LsHqNckS3QgcaUpF6to9oPdntxYvCC73E6kn8oZxR8uEKMgW6ZRj2PYwYjwd4eQPSBtzZRT3NyoQjsNMy3kEn79",
  "key15": "7g8haA2xUvHxQT7wDEmcXbjWUwdNwp4jeNWF5nKc4SrPL25m5NnfFpJGtcZtfchZuj4verD17GYc4z9MguK9XEk",
  "key16": "27EGVHpV3wGMZ5q3JNs7maovjwkqmRdqpy6x8sZA1EwFHDr1qooUmu4P4VBUsN1SsNKuTPzb6psR1Wz2veGUQ13o",
  "key17": "2moZPbek5hzZo5hVCbh74cNGotkizskPb2Ktkzx3Upr4YUuRnrBXf3nUdQezwELWZAVnGndve2Y9MUcrmLstDUKn",
  "key18": "2Yjt3h5Qytf1wD3pox1RSVjDcGuqyYXBFw8EoL28971zqZ1Vew3p7MVJXukuMMTsSdnkvuWT8dPCzqG1erMTKjtr",
  "key19": "25U2JwsYj9Bp31WpgmhyFiNp79BRtj7THxibwbGNVyTN5kErrpkxzNzojhLg6cVzAw9CS7rfTgxo5tfscMYsaAMK",
  "key20": "3WbZv2KstcuvqTZWdPWuKQmwzyz3REuDmE1BWfo352xnJNsowNqMZGgL7htTcwHYi2JEymcnu8TLGJMurDyptma",
  "key21": "4kSBVuTmVeHFA9UFnTxWv8QeFkZKtFJsUT48cSZ288f6S8myBH6Bc1HDe7tCi5PaZYVEPx32W5SvKBtzSsg7ioEz",
  "key22": "4DvbiYJTgugjCU8UdkJwDbG786sxaifHpJLiLTdmrQtVRtZbV1Up9WN5zBw7dftcNxWF1XUCvtcvMAsAH44mh485",
  "key23": "3mhg2pG1X9qJz4P7DMG5Ahnu359dDzGKHMxjJo4o8hjHSUju4KhdY6r8AjbKH2zgKPjbBi8cJNJzFDHKGowi1HTB",
  "key24": "62gDdPnqy2qFbvbGBrd68cW838G7fteUXVqtLWf2n3AVTmE2vQLthND49ew5Guv1pV8YAqsFB3m4pbKkE56Mbpk8",
  "key25": "2iqzb9tAfHBYnb8RCnAi3o24FrRtPvsrEn89GBGfBPndM282BpHQ3KW94WKemEYiDX2jMyf7ASMkGLuPNbigpA8Y",
  "key26": "4A1tVo3Tb1m5rRkqLVkzbKMWCnVagEVb1dAq3gR9bzBPHrEytmqRLkD3BxHprCnTrH6GsiGV2vRF939fxt4BVvwv",
  "key27": "PP1C9tGsuaPUF7aiAygvxkUSiFtLhpZknr4nYJKzX6jvh9uCEvnqDwEUnKPNqLkptacP1bynoUXpUUPPMSFyHkp",
  "key28": "4dnegGXd7uDZ46yC4TEV6u2fNofT9Qsgd7eW3qt8AeCGngqHmBbAtP9siRUu2zfxUjoui4sN9hcNeMQoEvPRJnbZ",
  "key29": "5ZrwJboaXon6Y2WLasiRNQbH7CGjfgNkvqYfdZzSAZ1MiykN84nZDn3pduhNxmdM6MfStZSqQuE776oDZuuf4ukE",
  "key30": "2Uhod7MaCd1kbLsrFLUniNGVp1SDUEieSyWmeE11pJ3xsqnQ84xGkaP2koptjcgV8tk6eJy9r5FBjziApqH1n7gS",
  "key31": "26dY8SJyUTUpxVL7BLonGu3KpDQjtYtgzeqYx9PWLeTcka6XniVhk9LobUkep5HGqbgmEgKgjzz6KoeAFmbx6Ket",
  "key32": "3E13Ur1hXr67ofXemf2ftY7KDADnv25r8DccC3DSsVnFZLDh46RMrjDfDUK5Y2iB1DJvjMVdJ5zFy3Ccae9PXqMp"
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
