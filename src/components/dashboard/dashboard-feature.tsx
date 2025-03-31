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
    "2g3rjmrTJcxAaPRMygUm5EJd4DEo9wyRUqmAaHLRs2CTqp8ZAXDs5wwLFnZCioKmHz39njsSdt4Ex2ZzrqXgAAUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43x8w8gKM1ahdrr8YBpeCB6C3QJsm5vopqkGXPYrauuTTdui4ha2BGqKYBcZnzHyc4a8fsgpt7yfxtTQMja3hrwH",
  "key1": "3kAQqui8E78WnbHWRW9AaU8E4Bkr7jcQEkThgg2cD4MLe899rbfe7MpmrMwFzbLHjvfoTwD8epNeBJiKSQTWhbJQ",
  "key2": "kFLiSconCcB748RzffC9orjqbZKMCE6qUSg3kKVnvmcg9a5KYZLA8dufSNhcsCk3hMcJWuXDUeundMwVZtqFMeh",
  "key3": "42iW6kcSa4zZQvPWZP7vpBc2m83JgnbvEcqft8mnnrE9vrqNuPaDcLi8JDtxxLs6gaUG3b7eB1gfGdi57FxGC6is",
  "key4": "482bCZgf6v7UAycbJbeSArw5BfScpz387BVDaX59EcZ2y8LTFCnFPhN2mikgfs9tqMDk8U5oTesSzKqWQLd5E3bx",
  "key5": "E7JdkyNVvgCco7K4tpu4SvUBcuUSXJMyasibTP6Ko5xdXhc8LbMzCV3cCtkozSVQXdyR9z4sctsL6N35SHPq3ou",
  "key6": "5DxCneEPNPEJ8UaDPYkbHyQ8YvqszDPwbVA8d14Vd6vEAfefipymNwwHu5BKhQDDkVhaFVuP7P72EaZvHnAE6KkE",
  "key7": "3DSh5XpR27vxhwEH8BYTVUqgPqxr6YNjnjWhWjtZTc4MFreg11LvNFzMTb66zCq4uanVv6iC1uMD5Rnmyfm8yn7b",
  "key8": "ai3aRyW8EuLhG4Hxd3zBRKVpj42G2gQuKgTuVXg4wDrbthUonK1cjnuoCvS4cDo8m223ckPdhvCmiM8Em4butkQ",
  "key9": "XLHu3CxJJ69TnheUm3HFrk42rJgt12HZrgwJRtec6fQGXWADq3B2MgXqDTzpx1SFxmdNbbagZC8V1HKpyZs664q",
  "key10": "24yjbX8FXjcw6GTNYqdCvBXDmx42Y6BAJAyUozDJqXbMdFmRuwnXZzxrcfPoRvTss6oC7DCEbiGTMTNHCdMwS4Pz",
  "key11": "59gkWTF76bmseSD9GJxHXSNt5BXGAjRomzKoWiofRDTtaq2mPbZ7WaaSsTDfcHK6jFtpH7J9wgZsm1j6oakdEb17",
  "key12": "4uMyopB91tBU4BNgeZr86VZ1zVREKTn5zW1MkivVXPpUk8NtrneGTS8Uezhwos2Xy9jTXnAXShULVBtRsrQXGCdR",
  "key13": "46jEkxqvs62q1pELhuSREn1ZUGwfdLZGpAGvQwN1GuTGB3QEpiWs2QXYq1ZmmzaQWQ6LXBbrsjSAGyjdaVAgqEMW",
  "key14": "3gQrK2q21zGBhg99yTMSoDXvqRF9ieopVUWF8aEzH7TkpSt1EFHp7CDannYN2eYzhiZiXKmmv9mBBm6H1fPnCuJe",
  "key15": "2QTvmb4Q8qikQ3BALJPxAwVbyNyVRjHkb1h5udrrJMqEoYBSV6ptMynZBWkBDHLnKaA6UcKJE9J2GGVwsJkbExJZ",
  "key16": "45c5UNrDHhRHXaVnp8Fj88fhGSZXLEhtvPsN262BwkHgkcHdwR7WgVSF4g7k2meBXgSTixFTQwW7BtEaeHvGfLe2",
  "key17": "3TJuFP815Z5eb4QtSn1XLSJFBdhNiQrM42yvSHcwq692MyMuxnxdUvidj1NqU9LVXWenUexXRiJESagvoej4X3gJ",
  "key18": "2Mu3S6o9aU3i2GSHVfhGPxw4Hcvx9doaaELAP5qn866Exziu9hoy4oZr4AqEEE5RSFxXuXt8TyMHaNbYPnwDfgdi",
  "key19": "yzqgzqmWXpu91Nz2a1q1cGSmZqtAP8fRmqf5QWYWhbiRhcymnYrSjfVNBeLT6QSDa4rQ9wmH1DLBsurJaoqECFR",
  "key20": "4v9gqxEwRNS44vJPrxRpPEpz1MRYbSLrwSvF1z9iNDXt5eCXugyTkA6GexkgFaeuXmTSN7nggSkJpM6gGdWnzA6z",
  "key21": "2dvExuiVTLJHzNoDgPnALwiLXBsdu3G3J7SjDufQ26uBaswe9jHcvcEiDt5KXy4MmfjUWTcV8PoBacaa2Wn1D2zz",
  "key22": "4gXUg878cN6sRLKFonWYeUG8WY75KAB1vZEEUxTewF8bi6Hjjr3RXaxJLTRwqTfJJZcZPhGTChHaZcWyqVEV9B3A",
  "key23": "4vPU9qYAWv6DJVrhjzM6uxsUqwCL72sJWZet4ndE78mkBuq7bVyHgyHB3XP1tqvm1CEVc6sT4eNgnmfUAV98AJho",
  "key24": "3ijMMygQ6EnvFFoduj83gb5spvJAuoBiJoTuZoKwifLedAALTEAWZuit2NQRwKTUi5mRFcmTwCvekLd2tVw5eSxs",
  "key25": "3YLV66YG4AGLmYUhS11rBMMp5nAf9VVBNfY5cZHdrF4SV5oiVpK1DsUQEGQ9koRTe36nCLqEdx7ip1evatatXZNC",
  "key26": "39dpjHToiEW2aMjeWM9DNhkhRicnu14GudSft2W6eWCzNce195VCSS4Zmq5SPo2GgAsyiXW8XEMxpK4qCWWmjVob",
  "key27": "2vcsZ9TtbNnv1rwp5XkGjV8x8GAewjwUDpnrjQ2Q9tXgDnaCUUktv9yH4qbknoHHALdisjQ7vJSdoA5Jq5m7u88v",
  "key28": "4pqDqRhTWgskR4oCg8GyGwmSk3PdwRAAR8DGnvVE3u974NCfTPN8k7s3n5a5iVJdhThi9hCBXcDzwRjZaifkidfo",
  "key29": "3ir3LcAnpbrvcW3jusyCeSPAwkPydADatZJQTX5gEzeZD8CPdnM6mTpgk9QGzaf6XgUhCgoKKZTYGhXmHa27xjTQ",
  "key30": "3jqavmuydvVsMf8AxXjNJ9m4xpzcKDK9DQjLR3UjxzVuRoNK5WGcByadTickBXY8XkhYnuiyq4z9jjcbjwJAKh7M",
  "key31": "5Ffu25MHUfqr3pr4ZpL1XjeT8Ju21PP2y4nTCFPxYM1axZgofnQpcgrFinzvNvXsEcwRE1NrkdJ8mukkuk7fX1j8",
  "key32": "3QyQXNMWwzENUuMY18qmnwuEtFxZ1wsbFUzQPHBk33dekLKKW7jCDtW6owBM35JoVANRnvbyL2ExDzyYpuVotbuR",
  "key33": "4yGjF5VnN4Z3WB75qP4jm9MziEEi2TrocAoMVNSidKadeKfeuejKJQWt9Jgr3z4BB4A68gqVEanAPUNxPLJQ3yXh",
  "key34": "23eWeq4T2ojTHrrSBSsoouDTCZtfh3rgAHqy9fM3XMpDbbgBLXHFazfMYZHje2HTrVZfYQyb9RRtzC2xKH8TqxN8",
  "key35": "444FATmKMGjRsZZYovEt3xMSifhMygsP9MHeqo5bJcXnq3fbAW8yZT66GUffYg4eXWbBWt5yuXpuxD8fTmpU9p5L",
  "key36": "3imnvmo7fBQwkfPa54NrvbqH3xaS5CgSDndYBWC1ypeYoopCZfJ3MpZzLs9EjJkpfN8yfrFycpxg1CYThJFcAw9v",
  "key37": "3V2xTjarNgVMD6deM9fn7VCQQQLYSMVb5StrX6EaZjCgHrgUwaXBQpCWCgcrB1WtMghmBwAvHUeo78vxonPaKWeT",
  "key38": "pd82orZ7nbUgKmoS43qTBn9rFmrqkmB8LN3bnAduS1Fx9co3xSW1qvCcQEsvpH5ic9Mjf8HBJhU9KuxFZYGULmD",
  "key39": "65ctFLJ1SLNC3eB119P5uQmzVqzFuAZdV8dWRJrFMzjx8z9iBzU6e51WmzeAhGBS63DTp5AGTEdY2ak6nuNLeyXk",
  "key40": "3FTMx3DNGUkcqN9omorPfmcgMPokKYN83EqdsTFHr4XLNYr85BYgm8HGmk6uXvA7W3B3o5zCk7XNRPpxHQQ1sxYY",
  "key41": "2PHLE94CGq3ezK3cdk2nZ9D8keHbupTKsTQewZ3V6ATUXg41UTZQdHV9cj6BPDCDWNCo1KeVh1N2qyCG3DoJ4uTK",
  "key42": "678z45EeESUpPoXCk4qzV178oYnyCmWLNAZqGA9R5L7czsrY3eNZPcofWGBwUjsjWt7iMLzYGjn4izuNphorVPkJ",
  "key43": "262PGA5mJa7FvM2DPaRKMY3DLetANKGdbhH641GwWtJJvQKLCf1xL3ks3SxxUji7ygWWQdT6CaaShZcudYbxffsr",
  "key44": "2EEZRp2hZ5andLx5u1gkjbbb2Vj52zonz3tWbr228LcP2r2j3shysaNLFS48n5yoY7Qpi94uFPXDvGULhrTgAxSd",
  "key45": "2fAckFA1z9nwv1Lb1kMcmUPuEtx2sDSDfzFovdjpjkRRYdw6vqTKRrR3gcAU8qX9Dk31jNdX6FjQdxaKU4S1mfPJ",
  "key46": "2hcLCGTfytQHjwp94tjKu8TojZUKp2B3ruhCEESxUNAL7Hd1FVVa8e2SYRGsmfJQeV6A9pNXqNu1nQB1tGmXqx6G"
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
