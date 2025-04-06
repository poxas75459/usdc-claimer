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
    "4AXEUhbDARyQgRDwpV7dNUSbupMMjg9ThE9PKJU4wk2NJqqrKivmfrB8w5B8C2uXJ2xnarR7qFa9o5q8i7whpSHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YMrHcjXx5CcXgCkvPWod1vCZ1K75Ba14AyPi5LpSE1nXCU94ADv6e86Yq4SAeBqFbwHuvDLnVx61gtVajy63TrY",
  "key1": "4YtCAxnqCX3Mcr3zXtWFhYDtHbAELs8ugT9whqt55BbHzpZrisvQeRKk2ZTxxujXUtq4Z9XQykZ6fVqNW8s7vnvz",
  "key2": "2Aqp9bp1P4h8tKqEVapAEx8EB34VeETcF2LnZnNAbg7gdxmYQs63nBecNnmenYAAef7jdrcZKpbhJALAsoWBsQnj",
  "key3": "5fe37L97MWekanoxCEFBubr8p4WB1AGrhquDmpgA1q7vgqEGqZznSExbCNpSUKEn9DLo8stWKSHZk2GPVbFBKpdi",
  "key4": "3fN9YZTCuVZ8WDHa3TmQ2Her6rrjgZBjM589S3ULhHBVFj5D9AJuNhHKRYbNykMAQpW8wX3nTsam9AxFvyLsMbHG",
  "key5": "3TsczQHXW5vggw9PtrbzEVB1bjoDc7TJDG5SD3EEXPyyjBZrWd1P8YBk32Gm3WEipDx2RsWaGcikNnyvHugqh1rR",
  "key6": "2FL18P1DhwY7jmvddr9fN8bgytitoFVSNBKuxfP8WB3eyUBrgmwwCxB7MRHvhvarZbzhuTKtsFbA6cnsbu3B2GoC",
  "key7": "5n4ay5tbHPGfDq1oXGA7oq2ujv9WhxfTQzUiRp5yyfCFNRAWMoFBi55s1nQbsTSgomCELLpTy4d3tRH5djBx34s5",
  "key8": "knLqomyutp6JPd69wo2asdkQQqcx9TWtyT5yfq1iRrBa3BchZHdPTqEoTWKb7mhvDUmapeY1zx8yHcQ36rDyucE",
  "key9": "3CvLUNUyZXL8J2LwEjdUv2JRKp5wRjGVRBt5UfXDmozgZkFN5NWZ6wUBXSRpNDs5Vy3eZq8vJMexZKyGEjra7NJh",
  "key10": "2pp2TCTxC2LFVefnruuvD3WPTXLn5qGLT2iVpSyikNtoiH7dTwyAt81bdpkT3XhUJR2qCQAf6vhu4iQjTcw7txSv",
  "key11": "3ddht21sisVCRXaSF8Gv7ryCejeiFB1CogRLjy9uc5nfQeJZxCo5f2dUMadr4H3RS9LeA3C5NAB2qz6LgPp8ZmhP",
  "key12": "w2K4V4C6veL3Xs8t2GYsqz46courq68rUWehH8VpDoddrNvhXRknYEvU6PLE6QVBc2UgPYk9jS86JzwLKJuFf7w",
  "key13": "5boQUF22LFAbXjuSuc8GFGCMbWNWBjTAsGjCsLfzaWHiUUzDA88BLaHs3hkP2a4bX7H1DAuzQsUKd6c42j89R2Qg",
  "key14": "GG2tnpenAmCckMtA2hyDqJZJnE2VViGKEH5NDbNniXVFsbg9zvW3MkhYgSP3FkdtPqx37XCaXTxKYPHULYAN9Fi",
  "key15": "2gfM5bhcQvfvX5YHcon9FsLjYKMGqpzq5DwVBg2oGzwo1HAHMCRSBe9P2dYhD6skupoKDzkVbmdjmCT6JNrwHhYo",
  "key16": "wW2mqHVcLdUUN1GgddoGMWQXLYB2b9S434FuYFPaUmdN5kJjRnJCAVYSURBpFc2r8XZroadfZMRDk5u6zyfy6n8",
  "key17": "ZU6vrKb85UQBCS641m7inSZLg8jWdUUL7yo4SpzYCkh9VZQtXfnX1BLr8g297dngaPfqqjjnE9siq2cWNpm4JcA",
  "key18": "2k5nKqgNTqM4bjNWUFZwv2v6xDt8VH8GwkdASDbaRk5WtDeeF543p5iQC1TDe8rfuXEpz6jvaDBoqcs88YQ7xpYu",
  "key19": "H9p3UVuKEaidKq9pF1ectqjKxsd3Emhz9LNHHnTwKXSra9KWoqSQQNiWFHpcDojNF68Frf3vfPf9cLPTJbZyMhW",
  "key20": "kUmExjxXN7KvjeHeU7auAx2zrfVjJQmngqjh3YpAqshm5x1o3vUN7YYbfULyCAFfbfDy13r6ocPDpXz1FVREn8s",
  "key21": "4C27j2dDHeADvZKwrXW6wUPEqHuTVCxdDnQbdik7i9d4ujpRsYvJQUWXJD1PLWo1AAkL4ZSEC1QzWCS3oYpEJ3cC",
  "key22": "4RQd4YzA4uB3szHwbARWEuEZo4Q4okqBcbvx2PYoL4cSjtyc6QFRsRirKswmZigPWAPzyfRMvdUAQW4e7Qm4mBKy",
  "key23": "3yVCLRUbNnB8fuacZ9EtebG9oZGfSuUt9cupgkEvfXPKVaMeYz7uKbry351LzoGGxCsGg9192cF7DYEJMquJ5dA5",
  "key24": "4PUPCLAXiiVivwWYzpFMXFkDUN7aAWcwXb2sYF9V8GRnpWny2NujeuEycHeJ4zhszvdaE9P7785gaG8169H6a6aR",
  "key25": "3zsqRhurWrUhvFZxt52XwfoPDGFyXwLZaZRurKQLzQHoRrdF2XQhsNhEwNEcJ6w3dknwrKY35ZmjT8U2SHTG957Y",
  "key26": "tB1rtHmHvbb7McCy74m4seqBZgbRrSUoKXjrh7vVDAbusTHjvJeSTqt9HoP3QYnQLafrUPjgcznJCVkPbxfoMae",
  "key27": "SLGHi3yndbWjazSAdrkWA2fNFPC8XM6WTWFcqWueNdr8Gx1DGfmfiXiP6mBeQ8ZZsf5diVAk9HxeT7LqZ9QUQPw",
  "key28": "3nE5qV5GGsZ7FJ6kunsb79i83B4GXgDSxNWZPUHnEnH9SmetVV2gPz5pE3EYczY1WoTCWKiE1a1wrufKGp2sUQYi",
  "key29": "c2kaWNqVJxyjKGhjKqxsaARjCCwF7ax5qRDdyeR2fUJ2P3FC6Q6gQGz9xTk77ZahKoS3NMv9oxMFxNFLXPgW9gM",
  "key30": "64mBGNp3WUoQNkBWPBdBVX1fuWqBUNNx5Skm8B6ttccumLtdFDJpqvmwZKrg56rwg17MrTb1qo1FdpKmY9p83sAX",
  "key31": "4cbFqw1RA2uvpY4nvpSSDLombDK9Mc9B4u7pDemnYcbTh3cyqDHkeJ6HoMcuEAQbdp5PtgftfzDDYabemLFXKi74",
  "key32": "5aJSFRcFEZ6YYXv5uTsoNDacpqZfcPbphQVyLvDz62vNv2MP1Ng2yxR6UW9Vfd34ARdgBse8DecHFiW1oL4bLZnN",
  "key33": "58bRgFNHizoHoYbB5JwjmSzoD4XGAzTipMe1BkktndrghD5Dm7ASmT9Bsu84ExNPpS7cjHPNhW9DAkvMxDhSavv4",
  "key34": "4iUuGBXfFpc28UWrRJodvND6TiovSCmZsJQdw5mFfESzi3Dvh9EWFbTHwK27yW6fBedenDTpZ55qnbkN2SRKYLs3",
  "key35": "4b1DiqLSGxLbpc9PatydLYNDGKGsGdRT4JESSyshujRh1LdswwbiAa7KmzvopnVQFPtMGarVR8fETyut5aRj96Qt",
  "key36": "2HA6EtrL38d3m3h4oz9Tqj4cRfDp8PaAaxdR94wBb5spbhapiFvhjuCVbbTS8LUAaNwaK2cmpKiiP1tVCb6HLSj6",
  "key37": "mXZVn2NxuMM58qxG43aJn8FsPRnsyo9g8bPKgWfkzBSxSC9WFgcQ1oifzrKjdogJFDBM3BVETu1NtFg5CHKcpS5",
  "key38": "41WFQ8rA98N6ZE93xs9M4rqN8xoSfiKuVu1ro6YDNGnNDte6975WFsdKnWoHsGFXTwQwc8PADF4Y2bXFd2s7tMkZ",
  "key39": "7kUgvtwCoXbLxCaZxksU58QXeiRQfDzznxxjoQMc1g1GTd1Y86pVWL4tzSRgkrUVnzGYy7rxBNSiPXjK2SUbwsx",
  "key40": "398x66W478ENTe3g9JSzfgNgzBvh4enS1jcexJ1TqdqktNpDhuhCRi8B2Ts442AkyULmhc6M3goRRatqu81sthg3",
  "key41": "2kECe3HrNxZ7d9445usCb7bnJ3eb6uVia8CzPHASjveiJYbajWToNw6Lz3WQCo8LEjrin39svVGNZv21P8A9m9EW"
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
