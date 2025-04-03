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
    "4MQbvvBGjFkJhnLpTEpFXn7gFobyhj583VtyDdy6SBsJZdZdkAHSQ2scRGn8Vm1mdDs9Q3MGWYZyfRJLmtjV1MPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpcoeaJ6CrGLLo8VQmZS7CKhGAxKPfY5Twt5Pr2sb3C3gN63hS35uVET7uooHb6AH3tF1QbN9CjaqszEoNRYde8",
  "key1": "4jvTJvf7y1VYVtQFbwaMAppGhqDwvuXaefoeGZzaHhaV6rRz81uj635hw7fRC9jLqHMMVPVQqU6eqoanfRK5ycaT",
  "key2": "5TAkhtPExCTSdkotWNKTCSN5s98V9KNJSYNjVcHZzP1USKJJjbLPHCqKtayB7S3aFkyqJkECr84h6baAmuuERyaL",
  "key3": "DKTy663epy4EXT4zaVUM8tDoWbhkoSX94W5rbPvECStfYCCGzjHWmpDfKJRU5esLRrnJdysrAtmxjPddho6nfGs",
  "key4": "5EBbt1PXwe4SEC4XVPNE9W95DVehyL8peR3Ybm81ohRVuT2tH1Mx2CQnz6HRUe9oS1YznRpsSCaLhQajHHdoYWvt",
  "key5": "2Pkn6TQVerwVw5j7uAZFS6JxkDNHzok8UdbDqfsLt4uZMdGT1aPUqTXaCcCbAzAVxmPoopHqsVhRa44JZMS63Ejt",
  "key6": "4mGY6RbJi2VqqiQUZjWAPnidxYY4drttHvkKz9VuPRpvvpL3TJLJiNUsAQ8TKVsTFh4mr6u8KAVMQKoYdzKiFXcN",
  "key7": "4ckUbrsms97xd21Aj85gpbvVNy9dzQBhRsoxR1B1mh38JtAcedPnWeXcjpq8aWxYMt3U8x5ie6LmW32E4bw5big4",
  "key8": "2cBK2J3oHCwLPVZhYF3nqJG4NWN9GyaSUSoD8ueAUKQ7K5rJq1k8BQh9w4HLfP6GQbupidtzsXznswjCrtGzcAEg",
  "key9": "2bK2y2tqiYkooaYbibKTrwzUjAnq9cokSALxB5P9L1QCnPRdzx1UW4rV4gR7Zu3WZxYpLeGwkNdU2vNUdgUPBkvN",
  "key10": "5QkW8G7AQPZP1LNXyC7SzqFbxri2cfKXSgsuzLb4ykcj4WC3G3jsChKTieGZd7js9zu8dz7hPQ7jDhtZqgdtVAzo",
  "key11": "4V4329U9LpKYQbBZBePrBp2hvVpjVPCPHcZ4x79L4sUJAkG61gUmviUQobHiGDxSLmLCLDpULmhNvmT5NgJo87ue",
  "key12": "3LVbtv3wSa7hcVYwAgNFL6jDJDcSyzafSbuMroFR8qDYe5E5AYLgdqRb7fifAMdeg5HFtsBcUEU5obJMMoBt6Rk2",
  "key13": "33ae5zj4zwSVsbZTfRq1UR481o3QkY6b6FamqqFeS5zN2A3hF4iitX6fcYeTb1SDoZauRWS9f4XP9N3fTXuHK2N9",
  "key14": "3tSB9nfTN6AeAob9kwM9ipozXjCLxr89GxDEnfRSoUXrHro8GYu71EyoxL51HjHaAMrfR7LB8ryw3mZbJEKhyso2",
  "key15": "51Cdg31U5AkGYko2CvRhe5tbZbuApGTBTXTQtvrdGpvpk5BmYHGBSBTY185gTwJrVjqJEmN9uvE4MN1NyyTyrKdk",
  "key16": "4c3vN3K6hGgwpxTNdB9Y2KhnjMHj8dvRoMceSFCrVAssL9N8pxq93ggNqBCgVn8tJXgW5SKMQEpEuQ61bMQ9RPLU",
  "key17": "5JcEnM74cxwKUBGTkoSdT9JgxU5z6ZjNvSCibCMeKyFxndxPLf8LHFJFF9QMVoPBxEdxzGTQXwQx9H3E2TM7fBtV",
  "key18": "KJHo4WtRmsyQGtxPhrcrEm5QUxdtSWAKmuTvmp2jffhi34WMuEhraGUmrPeNytQczTtfSE2BHgfiUESyGafjStc",
  "key19": "2aS3W3sVNY3R4Y5A5zALcpL3bgMD4ktLwcvNRHsAR1fVWFrrbZqmBd37UDZY6651GhBvw93HUEs6gVi299ZvvGLS",
  "key20": "551sTww4Tc3cquiXBfnmZdoBXqn5bB1Nio3LnNSDYEcYgLGUeciL6y2BbB2rWVUZZc5cXsFgbojGmmPmzJkQ2qsi",
  "key21": "gAFFdbhXQP8ymBKPEFZSRBjPyufuPUeYjAzyM1i7Je5Vs1XbgabjbofY6auKjpyury1DqeNyzfwY6S5RaXYYjM4",
  "key22": "4amuFULe5CaXS5KsWZRp5iMpr4ejoszjWJAbLiBLRBqK4jb39h41T9STP6fDfYuiePDGLEei8LrpEyXHpZMNeqCv",
  "key23": "4iNtaonxUbuMioP3Vxm8mGFAc7jx89D1ycncwbSp22aGWE6fwuRPR1AHer6vsRey18y8sYcp17ionhiyx1JTDKa5",
  "key24": "5uWiyqaUpUTmrjMtgP5QEmJxAU8SmoFWt3QH5Xi2DATwYqQKpXhsa8Sy9txyC4xW8S6dXLRaW9m6t9BdSQM2GfKN",
  "key25": "2PR2KuCbwfRhiuX3S2MtPCNnKUAYXmPvCS4sxHXEH6pnwdBjpDv1SynYoWt7He6qpLBqJQ9szQ276ztZ6r6LyhEG",
  "key26": "4YjXMVvbNntz6Tk8EZu6N3fHtMpYjLBRX4TWMEN5vLmsaxmbbu57JArRguNy1jzbywHhLEwVcgjHSiqfDqD3LHto",
  "key27": "67bS2kswPGXrRQuuCVEymHzoyba9hyrDNRp1w7ASf6p7uMVQkZv9j8C1AqtkjZU8pRVtb3BX8V8uRA6MXJFohKng",
  "key28": "39zrTMcwGUKjEzHCArL2pfVL1fe4aWK8aM3YA5CgsFmD8SqmKunKYCLSEVD9BsQ6VydMiTmxGpsyyZszBUnZEkbk",
  "key29": "ziSWU6BWsGFMxPDCx5tQdrdSnTfw4dnDGk7VYtPmxzNvvCvfd2gjw3juuSAVfBjZKWusjE4KKGgqBuoxM2hyJ4x",
  "key30": "3mAu9HRYSJK85cMLL8hkrnkj9QqBWG9NmeM4Nqw7p9gVS5dkWBUhF2VRXKJPNU5hqBJYQXSh2CbPqTpvJxauKvW5",
  "key31": "2rNCu957qcZ3EW3Cp2wKEW85Ui73qGk6hQvQqxR9ebRb6gNAUTT7Yd5bnX2WRsk4N8j5tLSTXPiYouuvi3S6ta3z",
  "key32": "5nYS4KZ6HVtqRpj9dVttGNuVgx78jtWUqNqXwqsFxzUjDcosNTFkhMvibWtAS8vFkojeZy31eXXRJZZAUBLLsZLm"
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
