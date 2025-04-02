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
    "5Uzu4Wumf1YMGUZtzU2QgWjvzedKuAU5QY9MruuLd4BFSHfm3Ei4hWwMG3yKFPXyTnv6ypGyyjr4r64aH2NKmard"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sgsy54ZGyyv59aFXX94Zwukk1X3LTDhRqvRpnahVuMVbhpXbWjzErv2Vvn4pF62v2TorGLcmCPqn5FVBV9Q6mQE",
  "key1": "2W3NV7ia78WdTNT4gAK2tanTmpKWeyx6ymDyvGqPTiH18z9zg6gjvT5unTH3JMquvNgGtku4Q9wMiKCd8EWwjZKk",
  "key2": "GvrQNJcqA5uS9cJABoiq4Bu2DTRUkMu59QAUsBMZzDsawAxeovDoSNNBeKJp6txFkP7rQ2RUfgAmV6GDf7SLYSb",
  "key3": "3CVYNqimGaetBWRdcnELnBaGSJfuCTJhNZyASdfFYRT9d1bDemsfxPEGbcp4sdQWpUxhMhh446UN7S9eFSPWMdZy",
  "key4": "3mti8haNxSVYFbEXmoCN3edzB1eVpdkDdtEMBeWCzLWrWChApXVWYGjHxtY2veNuNM6QaDFd41amUiXrECoxuFmM",
  "key5": "34YnnTwXxWM2QcWCvKt6Rkf8NxG7uo1HN6C6CYuvXjzf78GBhUuvyqUuVR1577Aa24pa5cRhyMYts87pPiWuFX7D",
  "key6": "35crj6voT6CYnCr57FXUhkWunhsfoFgfqkukF9tDWjRoACd77EVNQeKw8YiX3TSMGNaLJ99cSg5SK9RZ1T4Rvtxv",
  "key7": "53Y1FqSJ57eKrb6cQShyrX7xDaw36A7HcSMuneAHpEnYqEf7UeRSLmsFncTBE6xbjdghbf5HvCc5YnShtt8i9xcV",
  "key8": "2pHf4Ej8bAM5cyKJGWbCxRFyTNYmRxCke2zC8aPvurr9jh2vDuLMfYTc8EWjZhYE6TVex9avu6kWggmwTSR5pZZM",
  "key9": "2sCrXBMHbf6M31LwPfX4zP2aKiXHM4zzuA99U45KAPurReyu3sRmGAT87FZbxxjSDTtsJbR4WaRAMsrYFfb11khv",
  "key10": "a4QTgiR7AUTR71gS7BXvGBSNNS8REQXpx3rqrrMK7XFm2BGoWZmRY52ZSKFyYP2uZn6JENkER8qaBo2WvVwHZED",
  "key11": "2CLbY5Nu1tgB6iTuCPznAhnKGPAq69s9n9PUXzHmtARcTgioeoAfW7Voh71xc3xUbqv5zfzbAssMAtWNTmej5kEu",
  "key12": "KDs4mib8RJc4xfDM4u8hfyuwsZ9aHhzEGxunowey6GG5C45d8ZsG6VguxiP2QxfvfP7R8wZuqAon8HwEzCvqNeb",
  "key13": "7Cu4EBQysnSBDnmZTcuk3pnRY38CnQveKKM9x2LHnHZ9P7mk3zWdcJHTEp2psgdTVSnJpcgG3zQpKmSQweHaSrN",
  "key14": "ykJHAdDwsKPY54CPiWSBQBv8CJNQwc9kkHC9bX8JbiFuUq54AFVtwodNXu9nyWpETdDtFkpVWXaDdydWVUEkSUg",
  "key15": "3eCxTe6mueMSEoS8LLJk1toVBFZwP3qWt7K7YUD5mjjj7xNyTLh38e6VbCKNcMuf9eiFe1Hz1BUR1RGwwZVhyeZT",
  "key16": "4KMgU3i3SasdAYvNCgKmnxuDBfmLwkDJHh1cjUeBBu2KtxQHkvuFztgUhJSdq5H2Kyc6EEidwqY3YbUJVDY84edW",
  "key17": "3yvwpBccPavHqah2qWiuzw968Siu2Z8R45NRewzUK8wd8JGdg4aua6Me5i4gCVSXD4Esa99F7Fr8STHAiVRQ3wMo",
  "key18": "2NcaZXP35L3tpW3vmRrfF3ruXjCetNexUNfnGScBh1NcbaHVaaswHXS3nGuB66WBjgHqEGJdfFwxp9R6fAMz2H5j",
  "key19": "2pWoL7P7y9cWAW4Mcp2t9GWsADHX1oSUnreSK3dY95XeDV6NdMp2R6i8H5H3zgcCkUhrG5Sua4DwhWPPQkbxYpyZ",
  "key20": "4gVXxPEWzTjm5cWPnD29fy32xiZCUJtTKdvPvmnvmb6wF9yAwF4AyURNADyyPjjctc3coyM6YHJ2HzQSjTikBXHc",
  "key21": "4xG2YiJApchvLhWA3qEXkBddwyy6AqeZKXH34MJ2CFEYXQf6zBdNmhgFCAbyz3cKi7UagVXKHRWjSENbmiYCCVGi",
  "key22": "TkvEPf7PVphMKht6G8rUVdrH1iXBjersg1oFxKWGiP7zxMREnDMF3AoP2VhZ5uXFunQinCESGFvktHjL2yGwVbd",
  "key23": "4sZCdzDffNJzkK7WWc3R8MFvMQgYLd6YEJgPYeUsXFCm2fMeFrfLGUPMbxej7VFX5ttCdAppaxcXb4UVtCaLF8Ad",
  "key24": "VAJWjfV7QEkYMnBazpqdYLuRdjMobYbeNiBddZ2rerA93ciUPnXF5SW8CVg8zkEN9GF2h4KaZCnBuSDibrKpHUd",
  "key25": "3C9brjZ8RcHtk92DALeQ8R9qBPD8fB9ZZfqraPrBjgNK8ifN3hY8osVXfv1CZ3Du92Li85LSVEyXZM7hR2rro6L3",
  "key26": "5zioBuXv4UjBXCEXUfEUJJxNwzBnjgTCBWD2c3ZCrSAvUZPV7mNCoXCGQCgpobx5yo5VeMPFq8GTYkY4RFXAKBDV",
  "key27": "2YgpcQPHrkFHXj4aDHTM81Kk6sPbnm423yAeN8WtY8xskW6GdkJpJ3pueXiedhSnVTkArrP938JZr5nyXi51GZKr",
  "key28": "5U1xraymJwozqXgHWvj7rSWQ6u15zsGp75wce6qduYPpxXy7DUBvJqfbdyP6ug64bKYSyV7CB2mefTwe6YRkWR2R",
  "key29": "3FFEPeCZMn8YZuzqUu8m3k7aRkukRJdnkFZ8oas3RCSC7ZSFDBNEoj2zRACZ2wdLD6JPYzCZTWjrdYuVGWb8W8g8",
  "key30": "65CkcyfAEzJQixw9kQ7HkCKHB7xJK5W2UnyfTmiGaGsZvJZJrZqDcEXB1PQNP8bA2KksSaYXG6GCv9DDCTFMDqSX",
  "key31": "tcSsutR2s8sG4mX8PT1NFKiLy5TCWAY9KY3E6euz5Y3py9UteuCUQFtUnVfYzAAbX27mA8WU27wwn4ERvr9sXSd",
  "key32": "2A2X7962LcENMcahPp7mbMV5ePxhgBux1UNwNrMmVSxjo5GzJgJTLxBZPX7iAfMVQtLnuX5eTTq6eSCKbTPgqhPc"
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
