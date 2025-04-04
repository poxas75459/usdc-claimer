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
    "4Pk85hN7GGV45xfk8yMbpgXsowT4iHddPEtsZuejQ4ZqHy68PfrVhbfFidn5hFimdydojHo8N4AqjVRWGpT5isQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67FpLiWix3tgZ9zHzebU92LjyjsvDh4mrpsSUmJF2gZFsC8c19jLe4XTN3KKV6ASaafRfSodMpQddCJ1gxmpcv18",
  "key1": "5SFif5PkY1p1mU3EuEr6DBKL6Z7g7Q87Nsb5kSZoePNwuvNyUxA9DLWK2SYA2tXnpcLMp24bHSuXSYZfYxJYrKYK",
  "key2": "3x9br6FGdjpwN83cTLoQzEdmMKHNKWDL2VV9jovHYjn3ZWC6RUkWhoP1kaJbJJ5vfneFXvUSzgB7o52PSkvUbTD8",
  "key3": "4DdMmTpEXoLdrYqvFXDSJEWA1ZYkgmqJ5Cukx85MUDiNLypbvXENPQLHq6ryGhTqKTza78CkVLNUsXUmaZbZqdjP",
  "key4": "26W9xopUW8KFqeCng4fSqVCVRKB59Uw98AeRR5uUxtoa4UbG1Hnm3yhRGwQGpcsyunDzhSVik5wS9ihjQTYaLFVZ",
  "key5": "5vH2k5xj7vCPrWmJpDEXvta61AzjgsgVs1zHcCZCFaG5FkawRuarEaA9AzjM98SeNmc9tG239x2QHjUwDBW5vZnF",
  "key6": "2bWJKm48o3AC1kr8jpN5qYcuLhhjSogVjQWQD3BxhWpnBTu13uFCdqVs6npyvYPh4Py3PZimq7rTQUof9d2ttGym",
  "key7": "4VZLMwQ5TSG8npy2ghqArSgkSEjb6ogUMNKMHbPQxpa9fw3pc32L4gWmuUehWq1RfGKVapQc1vXmdpvwGGngGrv1",
  "key8": "fx1TDwm2L5WrX5PWZUKyzmPpoBjJBT2xM1NcWzxknxCx77Q1Yb65ALGfACKYswqo91zwaSczCXuyau476QBWtQZ",
  "key9": "3654s1P6aR9Lp9S5U8ZXbbmgcFV1nnsLemdCkxLsuZEvc7w2Q2AvVSdkyuZajuj8LwoVq7JXtP1cBRgfdxp152TQ",
  "key10": "3SwpwG3fQ4jSJ5K3oguEeMYwEh2HtpksauNReSirx32diY8yjrjBdmr5tZKsq2ghWt2dpmiFYgqR9H4fr5RAB4Z",
  "key11": "5ojnP6KFR5BhNUq7CmqztjMmrJ2qE9ig3HRzwXCFMxvaT4h7DEJ3WPbLUHH7r3EnJ3sSpmBEsWpGXaisu9XtLsBn",
  "key12": "53fvMeEdnsDggw2DNzcSwnEywrjrv4tUDYkNuqKimvW1HVkKh2Wvim33ESVhrA2HZQ8TYWQ1TrLQayWGnC5695H3",
  "key13": "Fe5b7QHW78hiKsgHhYQdakAJrbgviGrAcyF8LDx59aRJ6xNyg44v4Km5ZBwjDHdBeB6vnxeYv2x9YC3kwu87mqk",
  "key14": "3ipjEjbDup1WiFKWeVHxB3p8GYqpxUyWF4ZaZHcRLQGwAAV7mVb7uUtUu6wF6AvFC9gz73zgnBoojWfKSYaQN5F3",
  "key15": "bwqywk3Ejso1mWhG2ajYDY5b41ybHPaJufeu9tgi3RjxomsYNUmhngd7AmLU8BRnLQw1jLWc1dhmTAJapkERc8R",
  "key16": "526AvGpisnzruZxybkzTiPkdzr6iRhaozQeXvA5uGrDfLX25ix5DWM8oQdiJ8iKUK6DzaBPffYmNVSdMMHipm4EM",
  "key17": "hCPZutZRq1vNb5kvhWNpjPBGpcsPhAJoUK8mrV9QSb85PTEES66h2CU6TnAWCspxRbkgPmFFvJg62AgUvydLNqF",
  "key18": "5AS133z4maWKjcGvnTNRYCcous9nWYFCqVmjkH2AMeiBNAFB3cafssgepRAzXtRqzvzBaodzpPiQXsCNRt5eQ3if",
  "key19": "4WppB4bDTWkYxLvoMnRWXvMf9FRyencJdS3pcrQCDXaq7wAtBzmruLZMuvPajfDerhgsVKz1dZVMMdBz3Hbi6Hd9",
  "key20": "3ELohjWKjRStjXVDWdf74VD29KMtqF5Nj1BBgcfB2cYujpahBxMmZKLTZh3DCztXv27umhYqxM5JNNy6X2qy36T8",
  "key21": "28THXu8UcB9eqYc1uCXitu8Ysj2K7zuuZduTGYYPmFPR6v6JQmJn8tYkFGr1wY1bxcBJo7TXo8xSakaavY39y4Vs",
  "key22": "3X9oYWw2rsxLvez58fLV7rPXBVG8utaNcMjDG6iquKKgeusc6WQqsppoinFC1PH3a1C28PxNKHBjYhfhDwe7zy1C",
  "key23": "4ZXWa7nCRkQPeUcsVdx7AHHfo2GNr76mGCYVNR2rVkqLL8xCBbme8vMhvJpvuxJDeYaQfz4axx77nrmc6gqMDWf",
  "key24": "5LmugecYq7HF4Q2wuvfuL5n4ixvEfzGXECeP9HcC6w29qyT8Vtdjc9xHYK1Sm7x4yudpCEDaacX9bwLPN1dFtKWi",
  "key25": "3NNJK2nDbA4G5tiK9vsuiwQTsSTu5zCSHkCxaHM8p8cfkpXUXq5ZRBG1vbe7Cn2mhKUDsAsRxfhxKL69M8Wfz9n6",
  "key26": "29NcRgwBWpgSy1vYTfwnoMm4poMkejCpbHxRet4KEfi5tVEd66ALGsLxzfEG3aiUPRZBmX7gDG8FptHWup4puaHU",
  "key27": "NAmf1oD2zUbAeZnvADh3aLSr4sCGEnQxcRtdYYZGRER8cyU2ZHStdxCa3Fy6yn41NTi4oQsNq96vc11NRMq1Vdi",
  "key28": "xzSpQeZmkj6Rn5GMBeaaMe6WGwMGMtBqtscZX1NdEjy9tw1DaHfno2zXbCs1pTJ6xoMLJm5fpkG3yuEtc9NzFzj",
  "key29": "4vsWsuU4iu61UKoHCVkxZLmB35sthZEZYeohtPMeY97jw6DA8EoQEizu6XCrrzdsde8AAMVvTeuLSZ1kK9g2xAdx",
  "key30": "4RGbNYJKZPjpQfm8wCA9sPB7h2NWYdMmCyLYouMVCS6bBuPxJrU8mu7R6Rjfc2niKr8GM48LrrNswQRNNNCGVcq8",
  "key31": "67nKubWEqFQ1NeF9dy3QPeWrquVbUbt3C4JicZrFtXnBYqtMP32Gug39LTVApGqR4Fx48HDWyq31jWKwWKs4iGSC",
  "key32": "3RzQkZXK6Wo1Rcx46yGjxpabBVkXPhWQsaMNKjKramNhmoyxiCyygAXPFESheYzVURptycFCuQWYtJGLkpf6BA35",
  "key33": "21CaNavMSBKUuhY1rF3L3F5TB2of4phDnpDSVx4FaNLvoJNqFroEUdSm3N4JV6jLmySTp7RksUe4uRUESnzMwzgG",
  "key34": "3q77WeHeQpEDZ1XjWXUUbC1LTWqz2nMRf3XMx2HDU1E9c8H1jyVhvKG6shqtnyANhufGWNqKrNRVQmMc3ck8JNZg",
  "key35": "4FsKtfAXMAj8r7VWH1mtaT6CmwuUrjZ7gtSRzDtsanZe8wRD5eobt77eoyFJJg8UEWCY1CVxxdawNfJySNp3Sfg7",
  "key36": "7mqzEXH7Yvo4GK5cMwDWvz7KdxfeVdMKBrjLreRNkLQ3n1K9BZerTnMFYxyqV3oZSidPAxVMaLCDRsbfJQ4hb88",
  "key37": "4XatfQgtcpFY8bhaKz83d4hFs8CQdBtA22DgeZgvhsXUGZdGY4qmpfNZHdFn5wbzR6SGJTGJCTv9rdWM9Qon76js",
  "key38": "3DS6oFfr6cRqqdf6aGw2aaiJzP995LBqkM6UfGi95wEVx8eL6ZY1ZykQdr2573RsdRqhwjcTprnRzm2enVCJ71YJ"
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
