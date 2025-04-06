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
    "48LyDpNmVsW7qn1SLHfZK5Dk58UbVjBvw8UMuAp3FRi1DibxEu3PPWCynnCa1AA1StnCFTWSC392VCV87zm92qGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqauLANfsGbXMXEH3D6bMHv94JgTFUHGfj8RozqtMJiStpe4nXZK62vdJTncmGdJb6vz73kxMubb72XnRVNySGd",
  "key1": "5ydXMu6g2igevstPANTzFTPPWLyT5NvbGyE3u8rQRCTUWB82wkpLmoszgAYh6foinuYvVc92oVZNLENohyr3EJ2U",
  "key2": "677fX9knmzh6fFaK6Ea4aJmcQSx38tjyJVvRSHxYDeukJUjzt1jKp9samAzTELu7rUTwesR2TpmYsG62B8UcXWbC",
  "key3": "5ohP7Rqayt3xbSd7EQD8WejAWxo81XRacUwf57VE7YXbonhsvMzKz4B1PK71JeMarhvrXa1zpUg2JCQej58Tj67N",
  "key4": "3YVH4Hzno3x1nZe3zezi726JLV2o6vMnaNvHhaT76kT3ZadgjEtq2mPUN8duQVR6UsZoFu1b2NirZhDafnkiL7e6",
  "key5": "5nHpqXvhLPrmfaiQhocYbwUTrDiU4XMKx3s6JP2987Hx7kRqN7Xab1tb2f56eLbFzmaJm9TL6dQ3Ge7YcxGGaMuB",
  "key6": "5wcJbK5isZ4MmZoTh7BPciVRzuFLTSFr9mRtfDVKyppNJ8jsAMMWjTCZYK4uq2X7gRL93Qs4R4yohJyVPaPvAZCv",
  "key7": "2VM26nxzZxjmuyugrt8Th7P9YNQnfMdKufZqj63TpfhVD2Q22HgSRMXu9F47haA8rvBacaZuR9q6YmLRHVgWm26i",
  "key8": "5uZC5HrrZDQyMG3hdT5GFWUcjfA4m5suopj2kXvETsMCsmQmiQCnZ9XafkpFTJDcbpdM5Lx6iCBxFHgPeswUoCRy",
  "key9": "3BpsxLSXx7VDJAFDNxfq1D3Nn53CqKTQEwJ1pqD3RKmLXaMJDNBk6yAwphrSwJ1K9AkHnyKwityBztiJmiRgMoWz",
  "key10": "5jrpJAComhUms2hZViPZXsLUCZp9j1e9U9jCqY6CbMBdhidZ7LASkZ4Z23FwXXB1fDMwGKYXjjDXrLcjyH5W1M1P",
  "key11": "2kHutshBGGdA2g9zj1RPECZTu2hsVF69jNNf7JW8HTbxv8n9tTCvnCbecmRDxztqgY8zmMNK5isuyncjevS7PZmd",
  "key12": "2b7mkKcCRy4oUZsAZwZg7zfkGKnDH7k5Vk86Pp9jdhoUFLBuKBzWhidBdYnN89eHPgpkYmPdgjBV7tyQ27EZ7BJL",
  "key13": "3r3v469wp9VcXmj9CCNBSsSYCQbXo8VG53sy76ueDSZ366bGUPANBoNqNrmLktPgctuSEArimN7391g1Z1n42G37",
  "key14": "2vtMDdF5wbkKqtpHjGxjJtmKVQhPaV72MYfkcV4PfEYt7tzY2eLB8PdkfCtswUzcTaNs9XQ3F9KUHegCgoecfZ1B",
  "key15": "2miSasoXhMHFaHTuXai7JXwFivNpmfSu7imzn4YJeTZVcbaL5CfaPa2qvbDaY5P3bYWxYJ7nDqTqWJXzVS277Uuw",
  "key16": "3LxxwEWXnLMmWRv3nWsNAK5J61DWMksuWsprbqMHpMMtttCZxsM9EEVTLUAeDzHzA2XLNXtakgYtxGAkPVc9WMpy",
  "key17": "4noz8SexL9JRZUwKZSspgMr3jVC2Wtp4dogyYbP4gAtFXwFJgpmJqUyocxTTywiqvrxPiPmNY14M2twDmoPUA5v8",
  "key18": "3pkLqfybA5c8wf8biBbTJLTuWuky52ZypspxhVQsixjNrJJ42uenS57G6gZGDP7YubvcfWbbELGwWuTHUxxJduo3",
  "key19": "4Yw4sUPUzWtg8AAG1bgseHPHacfpkjGW7rtjSGfszokNDsCfLXhD1P6BJzQfcBUsbb6XYQwfTuGfaNoar8kqrrFd",
  "key20": "2HLnP9yZsmLgwsvTRGVJqnuXFWrJeXahCyoJTYPq1zvGLuhzMgEqfzaAyrZM8RWX4Q12vpPu1M5SZ1xWk2u6J2Ks",
  "key21": "3sUrKDSpU3j8xgXwBRSvBapR9CAffrsNvVxybCJozb9WmmYA4iWX9QrQpVdmUpWQHE55RsbGpsaF3XUmn5nN2JqF",
  "key22": "37bjpkNNqUPibAwKhJ6cdUGZkwGCcCJt8FzdMeKrp4UqW3PBLTqiKMLJcRsPHpZVeetq6NkwEHDmAJhyFz49K4Nz",
  "key23": "2tY13buXJU29no8EBGiJQFYgHgfWqitKpojusDfxaRWJ2G2S6Bu7DxjsrLeGHqbeT7WqZfP9z375VcC9B8NFczvi",
  "key24": "2Y2wJMWVxjWbhiA6RZMg92oni6tN9RUknjUaXT3rX3VaG9LxtxztTMZNq8aiuB9xEA9tReiRaGduuA9RkQe7K5uk",
  "key25": "3v5sLoc2ys1dy5n77WDYakxU2FV9s5GfRhVvp4FKxRsnP1yRtTnCi9nuvyA9Fs1h3sRd48bPj5gdRCd5cqZZNxpe",
  "key26": "2hr2z6PcbCD7NQk8NFeLC5tnm4UymRhyL5En5aKhbpqyUKaJoy4YKdyqVjXU12f9CFgrhBov7bRnrDgd52eYuq2r",
  "key27": "5EPxhqgjGsoKEpJmexHFqsyH2f3TRw2BgpCMnNvXmEJwm2UmmLje5RVgLUjuCbQqZAjSezouxx9vgByGUSqkW2ye",
  "key28": "3NxGeoXEz9KZyM7QmsEFxH4c12NCoVxTEj7uQ7tVF4TTdnurXviD1R2ruiaMFpw76A2Chb5x5SNta3XZJ6wGshqg",
  "key29": "2a39u8TPpiw9yL2zJMgAsjqZ9Bw7PMnhRRAsvaXB9kPnQYSyqMygqEJukz5w1SsPuH8Q9HfE2rcTwEngiL7cVDh8",
  "key30": "25srUZt4A5mf5Dx7jLB3vi5tmehCg52yGMJA61L1kW4iPWNA2T3yZFFsRRo9DpXkivQg6YbAxuMe3yctBSLZMikf",
  "key31": "ZrbyaaLVXQZymyiHU4smiQgUAtVEmeyVbtmbVbiggs8zYVdyersSe6Bxy1H4kzWtTXtAQC3ChB8SkDtKKAC1i5o",
  "key32": "T6QsPQRNkKUPDiykWA66zEz76zghdA9T6PeLQivb7V9aUti6xw2ELffDJsnTCAVBkZP1KN1J1wEFiaoZQMYtT2y",
  "key33": "5ZbUiuVSzFNE6ZuztD9EzLoc3UEEFqsAmPjK4TGoCgypAm9Yyd6iQmetQq27B7VY63t7JcKC2SKavgUb1qwyfgHq",
  "key34": "3qk6Pzuk9ZfaZXAXn7XKQYakXpcVQTwJCPhZKdysL3viRqew8qzpfKFJNyjP767i1W6YDf3LkhMCq3MXtgohDRD",
  "key35": "2mujfFHVAWohjBJfZELTtBudWw7HkkyRcAn8SyomRtvt8BNC5HHs3VPRkMGwH9HU1AE9y6s18W6GSCaz7HwbWWE9",
  "key36": "1HPdjuqXSr4JCnoBWzAkXR3yiTUqvWHGsmtngJEFzkS84qhheS4N1MVaXaL6r99p5EnPjgFEddWvy9oSE9gh55A",
  "key37": "61FzoMU1UwEBC2rgr1W7dKEjFJdq3YbGSunquqJSB4UTtxbpwePERcvTMF7YyRejBEghh99Xy4U47SKoGnjrTDuP",
  "key38": "5piBGnb1AAhkVACdZUgB6ztGX6FckHwANyeeYoitzcXwcJpFXnMgrcNfWMfKkNARW237iu6vMcBARTqJsU1wWqiF",
  "key39": "4deTLryVEpK4qNrJzaT5pjYJbP9Ey51ShRc7cp643kH6Bt8e9ht1LZKAYX7pbVv6iKo9qQVWhLyhJnP5T3YFvzjS",
  "key40": "4BabkVYrKrs93pGJo32qGPaHFy9qvJPP2PTUetEXoHeRPuWJGshp7TzRujS5c7hDhmxRKR8vrS3BTPdXhtPr3z9z",
  "key41": "2E2rxEgKYTWFTKfFHGfRMRgj5HuH696BJahyLWS8Ny6PcchopNmsMRaBiVxpNefLeGdgFE2zSnGykpjW1cBj2ofM"
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
