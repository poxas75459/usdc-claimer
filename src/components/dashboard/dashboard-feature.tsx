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
    "5v3aEugaCUimdU1HdmAGt1yFHiEDpzh6jcwee2g92FbxSBvrzq3JSgTsXHm6HYRzBFULuhJK9kZ8HpS3Kx6ynZPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZTwCuZbU4oopJX6uXpTpskFrVoxpR9nyiR6N79jQWkc9SMLpViGptCCYMmWg98BHPQPSSHEHUNzfjydopg8cju",
  "key1": "5Wja7pMMRsavSHnvjW3LGWJxWDm6cR8HKgCjJUBcbk2w3oDRGiB97kCjCBCoeQ2QxFKeWFAK3Cwxwhq2J1CuLJvB",
  "key2": "5JZKmdnWyJx2xHXi7UxovXkgV8ajfWZMvo7ZVw3kZ2zBoCCzatA4Dz6mVjHSDibfSKJMmDCFiJCMn643ay35aPrd",
  "key3": "5AvJA3uy9tSExgZqq91dWGebaVyGyo8y2PPFeN8eJpGxtq2spGDALV62HTjyengbAjXorXcTme6B5yURMf45t6yW",
  "key4": "2jZBBAHiYSoFM7mc7mx2kkL3jWPmXrPC134zF7fSPkijv1m1nBBs8sWDn35nG4ZARxrTR3vK29R3kePxEPV3VLAp",
  "key5": "2zC1xMMpoF4kyEAzk9ShHoazht2WS41zWNLZeKVbBvis59x6dQWA4XE2grFAxDnwAW3EAoLJDy3HcW1qj8mQBrP2",
  "key6": "3ZvDi1DxhkioSNERyZNDNNqRGvQqdpj56HCvgRxWNkmTDQHudvc9VWJV7qoZaGrXTqbBL4GY9bn3azUY6Cczx5Ep",
  "key7": "3dSwUmTwzdQAnEVvxqNgAaXuNSg7Yu8trrz5xLQNuJwzTKjvLfmCg7ZwSAvYdjVmJfA1uVTEk6UmDpznu2RGi3TU",
  "key8": "3LfESewWMa6G37T7ibD94e8HgNUegjQbAnr2DQPX6PEKjZEoojweR6TYdqep7YQ8NBnQDYuucZeVRxaSnrZgjZTH",
  "key9": "4iGZ5jyxob168vY1PXyL5EXprHgst8QD7cKPaHbTd31zuCVarhx7GiCZ2c6MiYD2r9Z7NFuErLvtqL6qBx4aytU8",
  "key10": "42rXoGzBWmq6ceosARbmyb9dRxKsRsA9Pv2M3YDAHY9K8b4svQCp15NSsCrwQnWtdD1HCtWP3WwdZLhLUbDhKtX9",
  "key11": "3DvLhRZ8KcVVG5FdCgRDXFXMJdZPGdhZ6KDWU6abcjvzPFsHd6vmPpCyuoEQqzPNFCF6hUdp6U4MPnhxHEXibQpR",
  "key12": "4xCVrrXouZfxUhMh2VnT1DkqW16ognARwzc9zScFqPWY1aEZTggt6KPUxH31qYSRirMbwDPYD6W8MTz7W1dj5UM5",
  "key13": "24sBZbtJZwPyefPxhsgHakic9cJCGKy1FXagSNGHxX4nTTxvmYUjYMS4rLF7gG4mDsSNcQknGdemK3vWsTd8UQdc",
  "key14": "jAPHi3HxVEaMkr5pdcXNsUbSNRHf9vT9os1FU7fuUfwgvgVdAK6NSShAVRon5uoE2czY8dYbBcgxJ6V5YigSUpU",
  "key15": "3CGntXnHBhzRCNuWdnvGFSV3jbQTfdmWXW9x78tjAAiqFqB1aHupQCSa2EDZy9RP6RUxPcZSsx6tWedFk3cLNCCC",
  "key16": "2U3L99BEXJVyHGHAdJwiW5WjpzVX5VGovH5mHuKo7BeUiYgazD2j3eeQuQ2FJFcUXFnNiSZRMVFGAXvfKBC9ecoE",
  "key17": "2FKqx3nEQBTcbXCrPxZLQFXmTwQQ9s7Ff5Vmu5cQFAAzAnyttnRZ6Gvd6CxLEgpQhTpeiu1rnRSS5FRxoSRz5Qqm",
  "key18": "534x62R7uHPVCJtzspTh12PfwFU76m6rgZSPBHU4rMK24DzY9yW2Uxty9N6gDgwor2LUrg2QRvt7srwaUzQwnR4U",
  "key19": "5FMDfgMYjVkjHwTcUHHUV21GqssD5ABEmuaQycfQxzZmF4VBXinuuzo2u54ND83D8voYYZLPM9w2LCera89pb6Ad",
  "key20": "5mYEXGirrEcJkgsmRssnBZh8jMJpCaUJFXSz2GynGVyT4JHrE6TofmimFhmAZZ4E6PxHaSujpxMaWdPKatMWFwsB",
  "key21": "3rKgRJMicaKs995PnSKgB89HaTc16nNeCME5T8NrmXzokWhxqDjH4uLpXBsFCiJLqbSUZnEe1XgTxLEN8dh6CvVQ",
  "key22": "4FAd3bkhQcthTet4MZqR1Uw69rD9EiZnPDG2rzaxsX5PJFH3QAPie9C9B4eDJoYZaB6PDjZJfJhDojZWMwZG9Gyk",
  "key23": "2h5XJKXX7wKXh6mPw78VZzWWCmpBG9chH68zeN1GrtY7ofmwS3NHrB2HHG3Dufvq6QMKKqDJwVfBWNH6TcZEPmqZ",
  "key24": "3r5GprSZn4spEK9ju6jWoJya4PdUwYsTYuiiKVCQj3sGeDTwLtcTecG8qGZR1ZhafPrvSpfXnyBUPy5WrhpKoi7M",
  "key25": "4DBPXjmMZAk2JEs8ej4nDvYNzwYe9bmv3PgYqZdf26VoQi5anSajDhuqnrYTUGZxogwYt8PfpbWFPXi92AH8UM8q",
  "key26": "3CQja5JS1Erf5hfT7mhifVstKCnc1e14dDVX5SWRjcSuJbupnMu5U4db297zP735YcocTXQyxWsuLMfWbGs5DmmF",
  "key27": "3XUynyNQXLPWCLdXepqZkk5WhV9bYWDwvBsgagygLHuondzRFMuQMB5k38Q6wMZYXQ3ZQLyT3S2zvdxezbqTWBed",
  "key28": "3otAmmLgU91zDcHoSVcc2PZCp2Y6m75fhSTf6E7x2vvKEGkyYQ7G9aZ1TRch4m2DEaqKKewHevfmofeEV8u38XM",
  "key29": "5RVJqBn8couPCCc9PsuwQaVHpmjvUNcJhUPXWLn3qLRYbUMd1NjmkPrGUEEEDxT24QXnhnvc6acH2XCi5rKkKP11",
  "key30": "5cS92vNcsYdVKUfAUPfwtrZLiboWf5qMzKjsrpv4HeBBvk4r1qRSMyepaLpvEUVC51JapvE3rkLAaTjG46B1xzee",
  "key31": "GZgVGZSCe2AmRGkEPiC9fXWHFrc2qXjSBeek45txLA4eR6sctLfib1d5UwvNWvc8sk9Gs3dk3WP5GcsGwc5Beei",
  "key32": "2bUDnz8Rz88fcokHSjDvfVLgEL217atqzpARrfPKu9Hpu7GL9bPKMXA5esMoz57HfngShhbP23qoK2oB4GuGEGej",
  "key33": "4fKrv57HYYzc1HFwtgYXAX39s7Zn3wUdJ4cEvVJuUgTuYBoBTv46PDQpALgqvdCsrfAZhhabZHadB6ihsgh7p3Cb",
  "key34": "5ShgptD8WKcRHydm48pQSMn6HL3CjkVtt4vL2nd5EcqEmrVuhzyxXu75MH7B98nDJaPpfUDuaM1mAoR9TeA1AXoY",
  "key35": "2UiHz5iB4Pms2fMm1y7d7zTnngXxFjkR8LfGkVQYQ1EYLhtSHideJzu4WDSYBPCk273ghtoJaYUfAjegcAexHatk"
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
