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
    "1zzDcELSEnx6GMZxK6jiU2nub1Qph1KLHLpcr3NvaDncxdrtypB6No6GyTbs9JRnG8Ez93YtZVvukCynjHsv1Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UD9viEmBufLc5wRLthxuSK3qWM4RKDvmF4XN3igiHeEFdvBz2Q6G9ouVN6uqy7KdPsGp5dx1MTeBhAQCRZ448s9",
  "key1": "3hi8L9yMD6rg8EKMrYjRS5ti4Dic9x36jXewahu2EYJwwwDHMHN2WBZhEjP1HQscQWZa8nK6ZyfWssNVXfgPvq8S",
  "key2": "xNj9abmYMePyFgHR4Q2CifkMaXaZ5pRTr2JCD7yCZeaaYLfZSSQDPoTUjpBNbJXjx3KMgcSuj4VLhfHU8g3KcZm",
  "key3": "649DDEqouRjudqJjxkqzdfYAK1c6Uod99E6TeAHdgE9s5RxSVT6CLe4W2SAcohFDXF5xsYL397rMx1zJYE2iade7",
  "key4": "4WQmKyoBJe7Fj7MVeCDogzFsWhH1aNrRYTzhHwFg2pJZZALEnevEsN3BP76btahGuVTN9P1Fcq3zMKyHsSUs1Xph",
  "key5": "3DAKp6KpPHXyHhMFoCnDqXr5oG6EjYPgRfSzFcS1zoFGPbCvquG758MbvsUocteCgNZGwhcrfxuDKayWw5ZQcfna",
  "key6": "3iYavJ2wzedZBxUsw4e1YvLZptCyYHpkAoGRQitTaE1s5m57VzphYSDssRdW9tR4D4RFka9oecZdYeNWnKPQGzUT",
  "key7": "2ko9evaWqyPGDPCxALxSRCoaFyPAcbm2isR8ex7YrMuvBi4LY3sVX24uVyD5BoCM3oqy1NZFCMDiNo5BJGmZCyoR",
  "key8": "3rW45APxiKdJDw1MwdrpJVuy1Nz9iDfcaYVSmGTx1f6PnomKd8ims98hqeSp1nesd1BftSpPdnEPPaCybUECuMLf",
  "key9": "3xYJStMwAsYiL1YMBybjQVL2XZxesZv5QjnxjZPkPnxdds7GbgFLiNnrNENKUScTHqKtZyVobBrQsvkp18oDRMBq",
  "key10": "3Qf3GtFkXPWqu4FPVu8JTAHgeYXq4ntfUaWfV5QeSj3c3bmuS5dmxHYGjCC9Ps2DTVyBpqYJTuU4Wg5rYRqKuLeu",
  "key11": "2MzfUjpL6j8xAPrkGBcfDJW1GRg3eSr3hdABaFurNmGZHiTrwzqLFJ1CYuyZfc7MZYRPMMypNGdFPykg4URtzX7K",
  "key12": "65j5wwJZb3pjNMBdRU3N9gE93RhBbRubUP6haSvLcwN3eyMpxcCkstsjqHThHmoWGng6C6NhRSwPw84VLDBFyJbV",
  "key13": "2bX25UdVhrPoftLiT1BHg9J1rGdo67naDkJeTFihA7fsVeguyyfNqs28QH2hF71QNZKVPvV63sa14vyNaA7LWuLA",
  "key14": "3A6AwPPpdA47Mvyw2HaSD1bjh9nxab5uxmLS82D9irhMhHed194AZEevw5KPe9RRwQBszYSQCCn8pe7TATJZXfd",
  "key15": "xonV3g4aQXZduJEyZGYe66LpPd2FZf4ZHzX5xU6b3LhpKeQdUrhSi6HczmGgKsLmELhoVB7QjpDBDbWuUg69ZxF",
  "key16": "5WxdYtWCoDX8MHz5SKQodG7KAxWerg33RqzGjR7ci4zAqeqPgeWFYgrwN39oqKcHnapvEoiH9NsNtNQad8UxQGNE",
  "key17": "5GABdHpputTnsscYLLdBcXWgSYyE9thD2pTKULAN8GAjMUneCptWJBwwacMoo4Yof59XFcXnGERZ2xN3i4ydetLZ",
  "key18": "4f76Ev1txg12QXfVMos9SvYPng42gmGUVpk465r26f6VjCAvbrawdaachP73rFE9aqR2cXqGE2qPWdA4nAJMfuxa",
  "key19": "4XESKkNn1PbUQdCs4HuwPP6pi21sNmxmtQPU59V2ox2XVCbtbNnX6WeXSy8EV3GJpNxcC9Yj8kZd2vuhzz23og75",
  "key20": "2DWCAKNJNMDXnqFLvzSFY1j4PwztvzFkkfQyVrGqu7i3mGKjHvMsB36B2SgoK9caGsCfBrpLitvUfdUnnYsSLX1S",
  "key21": "5pZBRcdC8iVfciUitSyGZvVkjpWH6DQxHaM5QnwWYMvSL7U1pz27xtq3C5xrVNbcGx3KqM6NkjuDgLc4JhA14JZf",
  "key22": "3tGPVTTMryEUGY3dJuiEL1p3i2K2Y8pKdmk9pnch8QsoLwMqz1qQjocMWVaEh9pLewh9txr53kdzzEjN59pbR5RF",
  "key23": "4NSmTBmdQKjUZnod5LRPSPKWZVEEGYQKb6Nu5Znjn2viMiW8yfRhCheJeyoCHBY5iaTBMVGN6WKqPhpk66V1zDNX",
  "key24": "2y1MiRQQttvdoMhKyT1bSbAwhRVyeKWagNwbHTHAJqvfpuzGidpCDJBV2qkKBzyBD5ez9Noty2y2yKQu7BbqWExH"
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
