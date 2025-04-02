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
    "Rdo256dviv4GV3iz93iRkDH42Na5dKVZjt9xroRCyrSRMfsB1XqA5ctyNjMwLnSEEEe92kZjuV3neEfUX5iebhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pdjng2mLwbGueHKuLoPwts8T87xpseHFEGKZGJuBrmeEUTQFMMrVFaHe379FcNDiFNztP4jXFZiqHCwkgoKQvzM",
  "key1": "44CmnSJ476NyWBtnKyGZasSuhzN5wwTqirNGBNGdCpp7xKCMRZ55hRBDv5yDbBJ5PN44RDJvNAozoKN3Gpa2EYFB",
  "key2": "bNZbTUBpXVQvKon4MnqybcQyPeHqdCo6Wmeo2oZE1cevLfBv61nJfwQGmS9rXanz4Jmt3ujUaD33Eoygwehs8vZ",
  "key3": "5o4pW1cpPwW1H3pxDQnHfrsA2bk3pr4tKa3bipcQT7P8yfNqBKg8m8hUVG4yo4iJCaBwhGRS2pdyo4HxtPvhqgKA",
  "key4": "5fQJTNqeaHoRpDPKTkEomZgjkiDLx8NuFGRVJBFx9uR4m34GmEnVmdMgpZyM2nvRuvDCecSKpfcDPaoBBKqkDKaG",
  "key5": "5QRjiMFFXVpFv3J9k1Ep3U2W9Jf9n3273RSdsf96qoSjPWpmaruaG2omtBcgxbsFrQo5GyQCrfTkmW9yfQsD7jD4",
  "key6": "5y3CdqC8ugmZMgtoxGz26LpCHDA8YHesLspk87XRQriF5hBuV9wSptSRcufSanSD2N4nGsnXmLwMCKx1BhribFwa",
  "key7": "5h7ebMN4QEKfjeGmBPXtmgV1WfKsPpj66L2qt6cvSHvSr9fC98K2qeZjXQqE9sc3wpWRVJHkkW8nNoh4C5m9hnLM",
  "key8": "5rHd5yje5rraB1Uh2WQaVsmgsUGpUygrwDm9K2WNxQzbJ66PSVuZNKJxbL9SMbmofHDLAsSoZwk152SpPnc8ALwV",
  "key9": "5omakymjqxjJEbAA6Jo2TLdjJ3VzPM8v74qHDJxsCy31qrRTVCHwfZmqPHKGcyBhReA4SUp8CtoaZ7jFTfPqh71e",
  "key10": "Aw32k9qHkR16UzsgW5RhHMKtxcADq4qZDRusDGU4dCjYvGvJCkeQsRYtQhCYiM4uSU6St43gUyDrRS2ezR85mkC",
  "key11": "24uvjHAQBuT2M4hAKnDMqX2679d1ErQXp39mypKZpxAR7oBEaJKXCvnMmEeT6fwKVLhfzDBFFGcqy6CacbscW3dd",
  "key12": "2xfzhXxyvRGybrUHpxSm9LpXc3dXzcHqRLzMVvR9YpfMo3ECbmxL5fJdS1hk58vHRiWXKPe4GuvunkGEvyYxfpGy",
  "key13": "2RZcTqCMsrsQsRWRXDK9cTtJ2rbwsrUQ8Z79NWpSt11Lrp3LLTCPnb4fBEnCjBqk5Ark1f8ghMc9FnBAf5BRZmMK",
  "key14": "5CLEce6ycguU4jSHJKQqeBncWfhDT89mjg8dVAVAqfNP52t6kUC9jrQP4m7j64W4PUSYUaUCUMtZVGFhfVZbuSkR",
  "key15": "3n9M8CoQY2jiF2JS81bG37D1fwRTtuVhbzEzQj1wxh7dbtfWhdiN74AucutRjx9hQpWEL1QvM5pgpdkFqUhLBHkv",
  "key16": "3sZG9K5BQ2ZqP9KRGsqtoYNQHPTypBW7mwu3eaMDHRHT1XoLqkp9mutbysPjyqwGFm5FhQbAgZ7Nf41UNiSvfqEc",
  "key17": "3PtSrFVcctGK4sPn42kwzssVm8z8eMx1WMZ17xe6B6HMfyWFY31sqZygw7G5gjopccGEeKwYHzjRtXUX2NPkSRpP",
  "key18": "4zzknFdaHn8412FrGKkH77zKpo1abWt88gZnsx1u2oLU5bVv1DjAY3ftHpgLyqtCkYYd1u6ZCfLCtS8TU7j7hkRG",
  "key19": "tmsgdTjKkwaViYKba14BVeVXUjqAe63sqqpWusVJ7erFMcRfwGX8TVARJ2rgXx7dQRSj6DQ1dRwf7XmmKcjwADM",
  "key20": "5hW3dyFtLsvb7ABf5wgEoXNQVmqbrAzGNUh2qSvxV3ruhSE5qwkhzRVPdYu3BmfyLM4hLyHoZE1RTrsXFB8LjSxi",
  "key21": "3Svu1rPpoLnq3Btweks9xCKWkf8xz94zNUKLFGmxvYiRxt1MGSotNLtZyA1VaUNpwJyxC9Po8aheakJKsERYKKfh",
  "key22": "wzb4R1KUQCcPz8p6LztUZNVhipnE7KSsiiN5wEAGnGLWHXMmwMcGUNTYp9nA5EF5zQ3gK2qWozqgek3nQa9Wpoh",
  "key23": "2eZupR9mDxeETM5miLoQaiaujQ5VF34rK4SeTEnfUb2EsQ6HC7zjqBR2ig6wn9z7KvzTA9hsWNs9aATY3degsYMv",
  "key24": "4A5zCt9e1o8UGv7DwPFDnXxNQuefLhqY6F1ZSsUTpWoZgKVrQ95gSHCTuKhhVNzinNtLo1CTyBTCe7Kzhrwp6Pm4",
  "key25": "4zhPeKPcDKo7bQBeAsfDf8x1fPEwtfDrymLFUQo5eeFcWhDGDVF9waqSTC7d7SMtRydRZtu1E29m9hd4BKxkUTkx",
  "key26": "5yKGPVPLtXQPLGVTJbMTKej8AMSzUkqTZQMdGUGJ8X6yLGfonre64W6TArWfFYLEqTanUGedLtpfVuNW6X2gcVh6",
  "key27": "avdRPLEMLRHtJuZwK4rUvonTRFzkFXihP2dmJq1cuhjwz7NstqKDPfXVfjvVm5mzx47bdTKynFNzRFMvfj6hvpd",
  "key28": "4nCy7SPJ71D3QCqAs22gzFyw4noD8DS1EbdZyRMsoh6NGjR9qMVx2Y2hg3BKFhaSQgfLiugzMsp8Go6Lc4goJUNt",
  "key29": "3Sh186x49CDZAXUfyL8ztBg7AX1dz6ThLECMgHehHqdzwqvsgGN9zk8UJfCR8Q6JzEgDqXShMEyrtxapyHVbEKN2",
  "key30": "3Z7nbP1hTyxHFgvziL8c9KiavdGUbAFkHvAkjHWGLid2URavLYafC5Z2Xvu8JYmoKajUUW6fDVe7epDQ52aW8TcC",
  "key31": "2Cc8QpunbyNHcXfBerkrnccrtRGhjwSQdpPZQkanegvVcXfamQg3M4DuAwQkoMTTcTN2Cb5Dm5H57YVSPedqvJjK",
  "key32": "5azNR4o6rXnbGmfJ5X5KbriRHrS2uk2pMxUgLypVsWTsiM2kUJQqpWV1jxqx7N6u3Cp7r4XqLyJtqirv2P9EMuzj",
  "key33": "5cYVxbSWREdnJfR2P1H96q2fxiuXfhAQh73dDeMbeEvZdT6JDXLNb5Q2xLboUh423qqSb8khdQVN9SB9jF5ukbaR",
  "key34": "43i3RpuCMDmPMHCYyaetSoRV1qymDmsMeJroFFW8ubBHzkFgJ7yxVvQb41871usD3rtNwGq57WFJ6XtAYzX1gThy",
  "key35": "4ASiSHh5zPBWWydygkpGWZDvAinfejbQEneVEY2rk34eXmDF2ahdy25SUqoVkr1Jo2w5gyKgsV1h1gtAUsHEChSy",
  "key36": "38G96eX2YQYrDgbxpmDuvhQWxvTXrth7uvwuZcXcAmKsNoLvit25iT45A7HWDFTg3XQFX8wWYBesZNrWhjejE1ai"
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
