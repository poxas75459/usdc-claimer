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
    "4setgQ3ED585ztzLE95Zg8huse7FgUmD9Am2v7n3992PDDeNb2HMmacUqcUvuYVFq7hg8y8UdNNHwr9eNUgqgTQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfDmQYnU5AaeaaEcyhHFCT5pMzrv9VmvFLs3GpzNGedBmHMHJRC2KcoHoBTFMU46cWb1o8CJVCcdBxQ3EPVqyZD",
  "key1": "4Pg7BU71K2MiGxmbDFwbujmJxE9AwpQ6UMzqif7U95TU583Z84UXDkN1Q5ATAMZoDjnrDi2wpufTfgHcMK946x6e",
  "key2": "2Fo7LhcmXUadoB6RpKfPqNohD66XnsKhx7R2jTsL9XYC8eZyGoeD2Hep5GhgVwxznuBiLZfSme5FV2TTHxj5z3Jx",
  "key3": "2xy35p71PBhDDBD8ieo8xiDhUDyrM2GimezLGN7rfAyNCpqGeNY7oFWYhb9KNeHzmg5QZijVQdiiaePzswkE5zLG",
  "key4": "3RoUTx95AtgyhEG5jC3N7syKDjHGgsrGtcjSdwGrR72JFgL8aA2wBQR7534LJTENDKv2bvdf2ATfNWRWFx45hZeS",
  "key5": "RoiGPDcwhGr3NGJKW4ECTuBkkeUAGE3eL3WNkXoLLHGWRrb9Baobsi8Lf22PWDDAQZV2ZiCnHuNaMYdhd32o8sG",
  "key6": "VfZgpUiKCMPoCkthnK8e2mxTveKPRzDUb149FBNLVZAFmqM6Y8u86yFjDxLrp1KNwsuLmT7pmGUAc5jd8MK1n27",
  "key7": "JPb7yMvenmZH28SiFr9RVdG81VpwJ4FfwDrBD2VneJqqU5Lw8o1HvD2b8cwCQXnBzCkYLBcL7kwrd34Ja4CCEGn",
  "key8": "3DBvsAWcRESkJ1iqfFy14ukfN24N8A49Xbj9g7uzHovHNeSsE72MGDAqV9tVy7dqbd8eEX4REexmBo52WvicAgSm",
  "key9": "5xvGKmtygAWvUZFdqnCCy996D1PjjZPYQiCjhWPePJ2cjCAyMNbyVt2yEJiT6eqfjJ6VhFmfGjntCRLUAi9DbB2v",
  "key10": "5TpdffdEeu3tP7T3i7RiWSFCyxjpkALxS6WV9kAL24S5BsprDrh9CtYhDJTRTaBArPrUiEDyyBG56G8NRmkbFJUs",
  "key11": "5Pm2SRM74pPUZYNHHpaZovKYdK4ug59jJaXhjanE39cUzVUb6a6KR6wxNyYGx7QanYtU12PZ9YdgvbkThQ6ZbAys",
  "key12": "2V3gZkmWrhP97g1eFg6sbr2ksDzcXmjioHBHW8oYn4mnfUvUPnuPAtzqeW1tMDhHxm5jfJy7Zut72ggycAHapzGX",
  "key13": "5ghB1Z93SMEa7vkTHRzCyzNyiFk7eztPwMnW1JoqLC8ouSbd6sfHjHT2hjUw8X6EvxD4zCkoxN96KQW9wpyjyxkn",
  "key14": "5MLjoqhvCUA3YWFDZnBmVETpjHMDUMJm4SzDbShtAKE8tJZoYMJLeYaQV8h6goZ9coviimEuFuBF9rthy4Fh4bqY",
  "key15": "4qfRWV87jyE7KBhd3NGtw5kNSwCwLoHkReCvivkREHH7UsbqGfQ5MEtqedTXmSvs3ntY1Z1SYA5SdQmg4w3yDLeV",
  "key16": "fNAqnF2x1BxG67dam1TFuWLRh4b6tazLzF2dNkwXWFAiQzPCubZr2P94skPXjWhd1UxyfemSUjLPorKyCsYSKeu",
  "key17": "34fLCww4Zi5hkbbax4sN8pKr2s38Y9oSHpYMctXmTgVzEeNeZP2s57XFfMtpVrwJofmpy1SPYDcDiVz3dUiam8yd",
  "key18": "TpWJ2Gsuh6UFBxhDEEhCKekv171JH3tFUJgR8SSD7aukm5abp9DiMoz8gCRh5hYi1NDfG7xBSH6Ltnxx7K6hi7u",
  "key19": "5fDPRB283Xdh4fCRE5UcXQe1u4YoGXZzNV5Az5dxm3hriiFMSK4mtDScvCkLoi9ABrLMRyLnVmFtsL4iFM1jCepJ",
  "key20": "4pJRFQtQkVfH27gX8tNtBPFxZzp7LrqEh9Na5yLq2MWGuyPAawwo7fBFupFVfLGVDiXEKTUGcR2kucPBZcTh2RpF",
  "key21": "3yDhtc1N1xX6kNuApkTedKiYEzAZy5Saevz6XUEWVt82ZeaDpd6crWz2ie1EGeLeKVDGCkij2Wmk27MAYJtc9pY9",
  "key22": "VSjLTHDjMqF388AZNDGnJ8PYfPREjbYS4JBB1FozcGVXRNLjtW6u8rL6QKqKZY27CaqJDkomPKcDuA2KW4gEQaa",
  "key23": "37GQ7H6CD8rn4MK7MkUBGPbgVVmJUa7QZKCZNXCSyqFDRm1pGijTyVP8umDPuzDGwZvFkfWfywKakkYxF88PZQ3C",
  "key24": "2WJinGqc1RAmjngFD7tRkBWJRHq8kAkAk36rqbAViuuTvdtDiCbFPi4apXjZPKUMGnvEPcyjgn4ttjSmbv2BAdPu",
  "key25": "2yBRoeeamGMyzap7F1kFC4WRzxsbK6See4ruuqWWFMQdMsvazXY8BVzgSXRB6M9PuSFyNcp8b9AYTbhUdMecaNLX"
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
