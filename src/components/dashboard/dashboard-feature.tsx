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
    "4vq6CXWkYiJD4gwJXb3Ti6BEuozkCnmxMQGCAt9xbL5QVR1FYLKAQ7LNsMzfwU1qkZtr351WNbXjriLqDfkMkwby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oeEyCPWMfK6pMf5whNSEVcCWHCQkxd8rtHtZQmQ1EcQj1YrPhmsREDHVGjPA5jsH3fEPqU82gdbih346qooTyPj",
  "key1": "62hG6g9uCzpmdAcpd565k8By9Gmyh7LWAa1bTL9e5voxAvWQCd9JLYdgbysQduw17vLu4k9W243pbx4bZNSJeGBw",
  "key2": "MT3NHGNno1ja6V7488LndCyAPPMUUNLuk1Devbq8PNS7dk5wmL5QatgTjCUyDmXUinVtVYnEjvrRT4UCgowTwpS",
  "key3": "2NUbJLN2k74WMKoUr16EXZFXxuRAiDyCE1DjBgD74Xh5GmhLv546yfk6UDfmjH7dQnEDRRzTxArrmjFM6sg9sJ53",
  "key4": "DCCkyswpDafoyRmzWhLJVvJzWYALeLcV6yVuGqrjWjDxcRYqx4VxEqRChFadjTcxYJbAx3Pr7oBhrW6eQA4nLyD",
  "key5": "4Z7GETe46a3ZXYb6CNY7aKWCKNwE8XGqZJ7Geg5y4rZ9CLQUgn4H4rhfsZcBW3snxNqsZcFpmoBfm3S6hq4GRETu",
  "key6": "3uznJoPkUAZiN6Mkcb1sksLAyzzETbwhtEFQLEEaei8i9oaD4MJKxHS3Spac6k6XPpcoMPASptFZmBpgcvmzVsyf",
  "key7": "5uk3L91cTGoXH4mnwcoAY2mwxTrtZCwvjfgEoGHnuAkTNpvvhSE3tNEvpRUmhbgPBMaCytdNPCLeEqrgeKU6CQEA",
  "key8": "2qzQ7dmF4hHECqfeaC6jHwVSZRiBiKPR82AriXxPoKTVFoK9kE9MzSQZJR755esE6gXCfnsJDTr6boSogNTsEWtf",
  "key9": "snB4DdfK4XZrFjhw6qbhKTk2JFpnwpHzD2BYKtnkL67ofVx4h9Xp6GgFGAukj5zDZEyVvJMdAZxL1Wq5sjx3599",
  "key10": "5V6SirzJobJgHM6dRkKBDbyhAUbkkMBX5acjHREyPZ45Nqw998gAZbSeucvYTBKgfNxMNG5C9vxpQaEJfd3FRrUy",
  "key11": "4TawdP1Yyo91bBhjvCQED1Vt1W78SE2HEruMi3WZYuHgoJAZjPS3SjihetvESKw2K2u9LaUxikPBGjvzCUEEP2se",
  "key12": "542AVzrut7ThrFXCPyNaFT5bN1FpwN4zqs7iCiHkANhxf1WA4zrPCaANpkJrR9hwZXouQDEYVuUvDaocRhHpxG8i",
  "key13": "5FXv47zUGiPkeAwXDWqD92NtCRR15oibL81WAgMCJz78jYPdeMumGJmFZGvbL18CGSP991k4tvYXJhfj47VMJ4v6",
  "key14": "2npEUbrpPdB7Y93pHai9oruKAmH4489TwhXSYygvv9u9S9dcwuePW752KjnSc6Cjagd9WwzcnnBWYc7tSKGrG2fR",
  "key15": "5zXRQcNxVgKN4LWem2hGJfWpgZm9jMHyU5h4aSUxmfyxiBj4kyQhYCdjeQttnxUoeuLzVRzv1pm1Z8HCsho87aiA",
  "key16": "fJRcYt8whE9HvazY8zB1QGqaQgbaFTvpxPSTEjbNDM5RVerDKnwYRL5NUTAKNzAwRgshkXm52SG3UeKApTVVuMu",
  "key17": "5Q9beeG4cshUdqm55Tmy1i5mcs85JHghm4rGBnxXoVT2kSLeNHpxn8ERyDy2n2WvQy99rz3UtGezcW8XHYtatyb8",
  "key18": "65FVRVDmirBqgeqgJeefpbuxBiEEDAngFCiCvFgMT1Ezd4PCGjKsieduWE6HBZT4QhdB6nFLPSdPiQpocqRY2VMo",
  "key19": "i6Gj7WVurR4RAB3xfSCUak1jQbCy8Rif59qKVTvSQgDyUcwWkRNamgBAt7JXvjMCNgDYPac8Lb5p8HTSMXhkCy8",
  "key20": "fVU3UAEGrgmPuSXpCJp7LZqrZvojCMQBUSngR793Fzsoi3d6HZYuaNWSY6pCEvT6kxU1Ls7KPmbwQqRvQLhGw7a",
  "key21": "2s1aXgKxFJv5PNQUxkm6DLGAQ8UVtnpxrZ8PaPo5NYdPtEtoqW141yxKxSzzyo1P21NzGZEytMHX1gy4rf2LRbaB",
  "key22": "5ePUsTbsSAdwD9BELwqyzvAQqnV73z4zFL7fi4ZtB6YDp88VpC5hQVyJCGjhmEgdpwkyM8CmcREZpzrbmAWF3v8N",
  "key23": "twd6wBVfKGfykPveMqG7yn1HLwYJ1moU1TG7m3MvgutnRDGSuWkyF92bo8AwTipqG53M7Xt7bMDwSzWdX3K1e6v",
  "key24": "3gnSad8vZRjH8G4oTiNitrbySBjsjbdZLavrGqH9gRgUZphvTdE7im91jiEq5bZxgCdQCbvNWrDbMT5yYCJf66kG",
  "key25": "2uJbPZEqCWxWjZKDzRUPuGPfm6DSzfrdTmn4sRAuaUAfqrobaUcQbBniHwXSQ9yBGbpeUnAXcr6C1keME2NBrH7p",
  "key26": "3MzSWX74g4g1yi19SxrDMMQiCs1M4v52MmmK9o9hAhvrw4KdsxdDVZxQJ3YBR1kjJ4CkPvFj91WABQ5ETS3VagXr",
  "key27": "pXHjVArUp9gZxzsJWNPpAXbhHPdJuFEJPXMcJdBAXgDCJCs4yXSZScFoy1G7gTApDf6mA6bch11baUspHgftgv4",
  "key28": "4Kfzb1JtQC4RkRYwQ82iWm6AgPgZHVLSPf1a6C1pGuY4wj9qsWxXdYZbKGrKtDsYrhB6TBpLKgByed5b4HgaMkt9",
  "key29": "3Zexsnr1feXxRKKZyKyyN3q4ZP7PVwGg2xYZwYpXWsSuyr6Fnp9gZgcV1szvUf63siPdTrtR4pzKTQ7DFSMirpez",
  "key30": "5ACT9W8HN15FBRieVTDRtX61Kg8KoshbtcZbLTUuM2qN9GDpMMcfBd8zjR2XCsshYDXxv2sxQiUX6yFTwLC2jAQu",
  "key31": "5dzZyhQ2NMF87fQYeFVRPQi2o9WLDJrULoF4AF9hfWyFFhCQz1jarxKANcCf5f9bShrDZNLeVqC4WfxDQJiCM8QZ",
  "key32": "EAv8Cf791ZRN7LngSzB5smAELjJjbYuimczM3ekDa7f5vd3NfHQYjxtJexC58uKnEXNexUNJn45TzFuy2Babcqn",
  "key33": "2hXBoUb7xyXJK2LVoURcTCcxF8x3bcLCq5D5yuUfTZ3DcvH2ygacoyGPD7gBN3Wvy6jEaLD1HF5LQA27VjmNUJan",
  "key34": "3xbDuHMwULpmkUpmLHoX67ap9V5LfDk6rFcWtFcBRcp8GyqwqWc7Gq1pi7ZfmkSJ5MnqFgLns4cgoE9WNUYRTb7i",
  "key35": "4RHTHdT67UxDhSacDsK3qUeVJigXJz5mY4XFwyc925j6zDf3dyjH8QMtH7nnVDkLmHdrEm2we4dQAqRPFiKwEonH",
  "key36": "2h3Fvhjda3EZHFVMny6yUyF7N6mtpsMm5Y3Pg12gtf6s5439ZC4jUvyfmZcWv2fEWmVZuWQeyocrn4MvtEXKhc4e",
  "key37": "2zA4GKP77MbsEEdh2C9y6irEeBQro8WHYEieA6WVbMes4GBBjmGisuN3cVqWMKGQMUvahyhVZDU3HRGxZSozgRf3",
  "key38": "57YgB26GFFuJ4hB1ZDb8wEQAYzUkRkZp1JgvqqDT5v5KgR1Y2uAHqAw7TBuipkJuJsTXjnEwhQJYcpb6jNPBuEcB",
  "key39": "3UQaxdBApp9NiyHL1Q8VDUNvEcNHXuwhW3G7NojWHVGKZukkYRQ4V7X2RxttXipDiM1n6B5B35yM1y7LbW8tMYbw",
  "key40": "2teEnwxB3qWDJ8gQwxV1T1LfwukMjAMmapGcbqWMXdMNngst48APEUt2Wyh6DmvadmREmQvm9tdVeAMaAUH5nyHW",
  "key41": "5XKs5c2bvHi3apC9E27wWBctXA4uZ721r4eogFcaVCq2L2U5abrQP9EWgEzCR5kMon4si4ZmD18XZ6Uc9HiAVQVA"
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
