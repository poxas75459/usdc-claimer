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
    "4sDtgfpZMgSbfMxrWDcYwdzBa5bY78fA4ZnKz1CcnaAzJUWmr7Y6FErSJgCxZxpTJDfgWeSaqGY47xBxt8VQxCEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ihA6rz9k5hQajYDKoEoMgan95CGmjgrT3gkZKA4m56C1rRH8YXxXmZiZj1A5hqk514d2dpLmtkmckJxFqXokeG",
  "key1": "4T1mLUsquW32PNMVewgPNcNtLpFUKLf7jcLavLbrPWS23rLUrEhAvYuqgWpqqpjEC28zstZ9JT26bLX5FFuJVm6H",
  "key2": "3naUEecqunbAjBbXec6dHgYxAwp14fkt1Wd56rgQXu7X6WTNwhsS7Ay5exHU3kaaVzDjcPdXGMEAguJ4uxcqp1dB",
  "key3": "2Xsxcux7WDtSpRX9GXzEbkzYpn9CW9LtABnVio4XGjWyftKmk5Qw4r9stLbsHz65P9vY2nujMh3NXUu9VMtpx6Yd",
  "key4": "4TsrZghnpkHLA7sjRWJ1D1cHXVYRuQ2zLN7wTNR66fDrBpy8MWaKo3QjRxH2PEcTyuVRk4r6DAkuNzGjpogRix9y",
  "key5": "4qmm3QoPDm14TCnFhoJcreR4jk7ZVmtJSCQDfsju5J54os2P8PeG4jJYXscymTErSfWHLEpSomTbHqyZiHyPUNiY",
  "key6": "H4w4ZY1fTQAUjSvN4Pw9QoQ585RfWgi5Jii5eJ2hHkcY7kdMH5z24qe35nMkPZEd9BJMPh45WgvzyyoQh7mVGZB",
  "key7": "39XaZszKNeTrEoDKhoW2SR13bhbEn1FV39ffCrxaWg2dKws6TdT42CuotvAH5dtgriUr57esNwofuPZX8zTrUhnp",
  "key8": "4MjxgthsWBauPm26DFpPPrrZbeVeEwVyWqGFzMw7cgdnSESdEKtooLpzgYw7nDGr3ABtr4qHGAZifquPSnSmqCDx",
  "key9": "3N7Hwsi1KbCPCYgnsyevW3YaMi5dsW3UAXo7TwqNHCAT7WNuF9VQprGAWa3px8vQPFgjNEwQxDG8vXurg88xYbGy",
  "key10": "213UAU2jZ6RgTox31aNQY8stfKE7VoWSan2Zgr8R73DbY5LV4KiKPAE6BoDFweBDwZXyCjHxEkpbzGNYty8voGec",
  "key11": "5hXvffJ5c9TzQeFL7jg7YgVDVXRACownc5X8xFob9uymoLhy5tHkPuGPCARgFKvBsDiw4qULAT8DpNoE4qjHDUq7",
  "key12": "2G3NJVZFK77nCoJsp2pnS87CAtzL8JCZA6wDV537zwmMSQsoaK5Gx5wnDc4yTsW1W4NxaeW9VmYsBHGjdDJ4naoN",
  "key13": "zfSVzaiJ2Kkt3dTYYxcKz2KQ9Hy6CvDhCf6ywmxYWhKL3FJm2HWWe7x4ZLY4UUMyaBGW2r6C7oU2LL7VqeRsc8z",
  "key14": "4vhSf7ZvmpAEUxivMu6GckXaofbYtmXbsBcePoSfjBDukr3J2LEzczfwAndxn36sGb8vTPAvrdPa1kvhexgMGW7z",
  "key15": "2FVwSH2m8LCr5iVfti45e1ZthRcXdJ8eHD21hwFoDQNuLdHusDDNPFrUfNCdubvdNyFBwL74hFKUhfCC6h8Pw28U",
  "key16": "2JDMnJdAX2v6RWwUJnFPH5m3wFsdjaPHRVFAEtNuomoH7VRCKwNqhJ8AgmhBf28cRTvjA9GvV9y6sQGEftWjht1G",
  "key17": "BPYZc1wgtCQm71mYwPhytz4rgiy4zE8Z3yobC8utjLqEwxTHVPBQCrB6fBMfwyRmcbHLBefPsvm79hbrmaCKNi4",
  "key18": "LpMHyw5gRnxCFd1WnABN4KvVfN7a4jmWyMaa2BXr5A4PFuqm18nNAQDiiMTnpjQGpecatNKCSAaAqpHPdCGNZKQ",
  "key19": "5DYpyt3gSXjWhfmjzaDWQF9GFy8ZuZ4ZFBZkfnDQb2eUFHwf7E98F65Uk4F7em8bbuupVCf3zkWAdKAH6qKx51Af",
  "key20": "5wSc6N7cUL8tDih8aZNi4PfD8VJaFwHgx61FP2AvFUxCdZpWNQ8L9uRE3i5fDjmddB6gZHKUMCdF4VqYM6zw2EEQ",
  "key21": "2p4Z5HW6bd3fk8zxni6eeRCbKLUjCwkYnVhGpdMxdy21XhxzR4vj4rnSfXdh1NdLWr8TJv5RQXmHX6HAccWGLbqf",
  "key22": "4iUZBPCBTPTQFM6Moa23MSKvCwCdfyHPNdnA9tF4xt9eWjL25eQ6CyVrt245Uz8XVZR5Rf7vWRGYzvTMW8JcbGNV",
  "key23": "4hwjQpdkYq5DXYGxWPDAe2hCwdBf5VeiEvM84CKjL1YP5EFJk7w7ERRxStn7zDDbu18NR8yBdXH2tAG8FZjsmpQb",
  "key24": "ZVn1eUm1o9GoMTjWmoK72wEQ5DeHyovo3ZWcHggMCAzan2fsf1dyodBH37hxv1Gtu6WoMzmwWcNr4ygmM3spRCF",
  "key25": "4M63hnUbRY8vQHZrWeQg76VrYKvjBVyTwttBmcYjARLp9HVMX49aRuJkYvtSEVHeaPU1YRqQGMJMDkyTPR8hJWB9",
  "key26": "ELCuVrXxdrjKFEmfSraxnWC1n5TAPPNgDYbNf1YqypLfg8zYLm2nm34yEEVB6QDwsbg4cwVP9PzRJ64ZYdjadHU",
  "key27": "3oS8EaGmp7TDGNYUgYZebLrgBzMrnpQYsj7jrsTAJbtZQTeh7rtXKh3HQNZLcdjibDcJavAas2bWWnqGu6SCUoDm",
  "key28": "5QGG1wfTGTv4WSX1m6nv4GJoVtGiCxp8B7rBeEtsFEHuXbVj1PMmRbaPnUREMjHcfMTmfRNVvxFpAcvDu7KyhYwU",
  "key29": "3QFDRWX3dcweqDw8d1zfxDJFug9uwjwsLokTH1Zw1TvXkRXTUBR2n9wWidfQMCj9MvDAT7qzsk4eNMyDyjsxPrFT",
  "key30": "51ZcLxwbEn25ej1cxFJn9xronT5JyKTPLGnB34PXBetb6ZHD4Tc4jf4tD6fMb6mjojW5UtBFctpt9gRLv1s8m7qh",
  "key31": "5ApDWqFx36NntFmWFAgT2ZoLFNNmDkAG7a6BbwSv3dgiX5gnUsZi6aSbKqx9HkQP1vBR6nM32HoVQi4ggEvdW1fW",
  "key32": "375oNZEUfQVYK4r8j4DxDKa6E21yggsvkzfBTxEoRVLYE2nwZURkbvENykyk7hcMuy6ec15U5SGJe6osbEUMrzH6",
  "key33": "f2uqqJVsbQjK6UU9Ksp3wLZooAqovidVwELYCBqNSpVeuznAV9aAJPcoTGoehrAapoJKahminr7tSoNZiL8ZBe8"
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
