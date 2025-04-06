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
    "4qd5EGDs7fJHDN9YEyTggk6b3nvxP5ZSnGHTewQBckZntnNytuXSK47qFnYCfpWN3ysTrzt38sq1Zqui9qYtMzGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mszgeoLoQr5TDP435tLGzsvymdKa5Ya2CNHwPsw7ofSujZusfyZdXrsnWKpHpPLikKo2SuHji6soiwQsmkSVPe9",
  "key1": "3qV562S7EZHyDrbeTFJqY2kVsmm9kjevL8Ea3UpWatWNNMkYeiKuDEtAAbdENiz2dmd7rzyQGvvtMPVCK5kA7NcM",
  "key2": "2kBbmfJV5np7EXMFGFsPtUWYPMnUKK9dGiLS4BLY8NBU2Db8689rNfJ5ActGFD8sgLrRWVwVBBEHUBLAGs1pTH27",
  "key3": "4sQPnA7tMZMfcXwPJ3reogbustdgyMR5aPaRifjt4XbkeVhw1tMnG4RTSUNEtKmH6wQCRfzpJjECLqtx3SboQj1g",
  "key4": "56u3wUSjpveJpU6ze1MJobnQsKDTm8zH3YNDYruG3o6kXQ5HeAZBWK8HML99tDVigTc5oNHAEpXJFuoDW5VFWCaj",
  "key5": "4NN4RaFELcs41dFVQb3q9VPNLx8fGcHeRzmPyBDbKGuidLgcFh7oUk8F2NjhJycYta7aPqhkjW5YVaYEVysd6WYz",
  "key6": "5FNpyfre9Xxx6Zu7KnMHVwQYmcELsdHQn6tXvt3Zrn5wTX8em4sEUaBC9Yt9cbFQc5qhYUfJUi2XttP2T8FdoxmK",
  "key7": "F5Zjhj9FVPxHL28jvCA5GiHUhwQ6pxodMZDR74YPGb4FLvu7f3d18NctXqes25aNzJxC5nCY4wudPf4guCpCSR8",
  "key8": "3AMcfoewrYXhP1SLEdPRZP2UNEdtRpyGcRPFvpDRJdyXXdrsqcjAdgwbDhSqEAQa2BkHRF8pCibson98o35guHSi",
  "key9": "3juj3AKZCtvFx16Bi8bY2arj86LXf3qQYWVvwphenXFAMTGoyZYyFyYtfFTL1dGsmamTFDKWBXKzBSZYYSSpeEwi",
  "key10": "4449hSupfPGdBe7SCaA21HxLnGgXoAvumJtadjRxpwZt6nSSSJUJgwh9EJFssQj6ZcGb7bQZA6RwXh61NMnNjYSD",
  "key11": "4nVZTcR2SCo7B1JroaKstjbA4xq4mGyyooFnRsm4B2pwyGourVmP156JBMCRfSnwnT1ZrU1SXRQLqSeeukG3HTK5",
  "key12": "4T4mN6wsWc5j19HvoamtPeMgX6JyYCa5FA48hVB5YdLJ8oh5DUzpzvsk1bB26qci1VW1KnEGBcX4mf231NUGkWNC",
  "key13": "4chJkygU8Aq96tA5ADg3wrmfeZ5PFJ7ZhuGbv9uMkQjtri1snLD6vBDGSHWFK3uo9uUvX6Qb2EX4o1CSGWckewwE",
  "key14": "57EAUHuDDC5vpqfRVs59BSPKDJvKsEk1dvQBXmx6YRxWXsuDVf9SWS6j1fuaKUQ3oxswyXc2DBbqnCbKMWDU7P1j",
  "key15": "5P4nBnQyB4h8wkSm6xs8pFoKvfJ47HBp2zEtCfYyWFg6vf5FayVxJRTvUKHCoHjjuWVPUtjWNb9UgovuSCnnuzCw",
  "key16": "2JJTNw2BQbzQozJggCkqKrvEcwYTH9SDyAaG4if7hfBzqbLxHscrbfFKuCyddi54tRXHTeSGRvALo8GLWvHmjima",
  "key17": "2dCVbFKzFmT2rTCERb2sC49zCq1WNH1fULFzT7SnkdyazMiXGocmwE62t1YrVBk79X9DgE1f3MaCQzsRyFpqwnUD",
  "key18": "3jQW6EjSvibfm7M8NacKkA2SH7FbNro5nTfF12CrsSbhtNXKA8ax1jcHv878EGdbumqM936rBZbbakE1S3Cjkogd",
  "key19": "27NjeoZZYTDzgwpqQeX3N6L1mJo2Wy5YYm9fmQkhyjh8qBDYJuBHdudGSAQvXmYPGzifCC27HgLWw2ZUwhchinYa",
  "key20": "fpJKYpP3g3o1G3L5KX6LMcV1JLBW9WxVxuMfn1dVusNEFAsoAVPcwwFUiHWy6KcKEu4DV5iRi1t7xPDT8XnHkVs",
  "key21": "21SKvrCpT78qev5tfcJRtzect4mHcVVwfVjXkbK7nownZawyK6dJnE8Hh28k62aVsiwUovpcSijNjoGVd6Q5KExb",
  "key22": "3tpUZU8dBxPTkwuaTQPUVGKC15Ncnip3o3vwn4NBzT9hemce3piptwhyPCMkczJCTCcnfbw7vtNNR7xs7F6PQrVD",
  "key23": "4h7EYTj6NsNrWBdPoWycdfVx3nGk4ZykwcFyUemJS4D4m1WoqtK4Z5RG7bZJm5pd3bsDuumtoqNf1LyuJp4TphEe",
  "key24": "2f79a8vAyKfX7FEU9asRd55QQmA7L8XRFUEduH4s9SCAi9ZK9BmFxpDCnafHqKaK3kDaE4fTiJiDvz6uhq1PAhTk",
  "key25": "z6hnbTw747ka22Tsd1xPMXW1SRk4dqSXKYaHJxmpnCmzAgctrx4xCiL5XW3ndjRD7o5NYnFuE3i7kLabdNB6kCT",
  "key26": "5V6aFyfhWn1yPqMAyh5achRD8BmvVRRYmnJnZ7GorxikHcap5QFnPvq3p6TsZaaxL15DwMM2dogvPyZDPaoXmke5",
  "key27": "4oMUe9D14oVt7ikTg2wb8aqBuLc66nFdfbNd51B1fnCuRhn1cenesaq7a3ZdVMWddP1jVG5Snqeg3c63yM4tpJn8",
  "key28": "66HEJo6SXRfPdm5xWdbmmrey3EdnCFmiswqUT9CD4QGg2Z5v1knUtYJBtcYtmH33LPWALqp5GS3mppzw7AxqHtA",
  "key29": "4qQUGawY9356BBGAFDrZJ3Addk13hQYct6WGf3ugh6xxQ3SKJh5fCK6r9wUFJs6gPmbPvdEUeMi8TEmLKKmLKENN",
  "key30": "5s2wDyfv6ypdUqhGysLikQAsTHc64gUX2eUTSbLqhveNR3JTKZfKpcSCyeMUzyzeCDLZdtpsK3QxctATfESFtdLy"
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
