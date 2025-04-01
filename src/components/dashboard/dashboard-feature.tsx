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
    "3EK4kCqWqtm8bH2KeYhKp1N8oTPyDGo5Ddt41jDx95M86vqnXxs3fmwgqoKz35Y7h3qDUhqgLVUChC26XbpiJuMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sqa1yvAHixyyAPf6PQpoq88AMqFjWejRgMDiT52C8yo9waeLaimg1McA1xUiTehYD99e49F2HVaLTaJiTJV9SN",
  "key1": "4ZaQfE77HoQbmpwDDMhMjg4tR1DSBdDJcGdBqBqEUC2JmMgK4DXLDZaCJbuEdFQnHFavinoKndww2w3D1wD33H9i",
  "key2": "5GrxeCaQfypfHDehrJB288KbRN5GzfgVdXsxFk81AGF9z8C9osApZAW9R4fe2k12kx5qw2stATGE7EMcW2VjKHv6",
  "key3": "57vFq2z5mTUb7ueC4vHaVmL3Je8NQBLYtbjdVxhNSVvfZgaV8abDCgLsQKbx3QwLwAZrCg3aoBVru6rzVJfVE9Hn",
  "key4": "2SX2jBoRVnq73FaebsiKmPT6Z1aw4cNkX3bhf9CoLmetZZeytaypNHmgBJL64nn8pMGib1SBzD7xRERpWc28PQHr",
  "key5": "2BZe6J7M4NPGajQuzK1LvzGFCfCB9JKsib4HckGXZPHz1ZSJY4rgp6h8tAa8rrPZKKfRSfFTLhyLPjLsQiL8oESR",
  "key6": "5YjEvZrTrDUYHLv4PUC9SVakEhy7YYMXDYjqsfkueE9CdtcwTsj2dGprjfvztkkqHXro72DQbLguS2V3hZG7yAv5",
  "key7": "2p1Qi1kudLHPznDehAtCo3YJRifxc7o6tiPHbsU8LhEqDd3YCJ3AEtSYP16maqefbDz2cvLLwsi4ExLE1Y7E4UuR",
  "key8": "4UU2CR1aPaYSqBdxuMS6N9M7onpuvdcAKPeB3UbzY8PfN1thrnDPuZX6eABTZC3q9VSUY3zSdkZKmZPMvRm1qds1",
  "key9": "3s2XmFpHGfi4FGfTP6aQGBaU7njLgA9efLAyQ4BWMGNNGMvBmERQajCEbxnrgWWBFMiRd43gYusmDaKNXnKzX8Xa",
  "key10": "QSkep7tDAsDw6uuWdSJzSEBncDeA2VFuNuogrHfv7Ucz4w5MMud1Sfn8Tq1bneNkXZaHmmchUPisbhEwS46fhME",
  "key11": "5vBAo4exEFdRXviTG2ZwpXV3CxiydghFAGBuo6eiXCbPFei737C2VruokT1Wajv3dkosN8wAHeNcyHj878mbcnQn",
  "key12": "2E7tGS6CaScTPabkiX9ZvRLS5HuLxtjFHZQZzcjt9jQYBS5SdAcoLojoAoGD2Kq9cXpNJMS3QQprU34ySQ1k9bPH",
  "key13": "5onGkLMXEjfArBFDkGg8bHZggzGJBTDh1zLk8AcCb6ZF8xQgPCZAcsgdgodwkWStq2pYNQN3zGFU21h8S9wWNX4S",
  "key14": "3DEiAbyqLmoZadzESyrciP2B9X4ekN3jK1eH1P8Ygmp6Wfg94Zi2enAsZ3LvC9VeMmHpdyzKycaybbGAu96nPpQo",
  "key15": "38m8N6uxYhobwkoPuboYCVq8XaztrhrAY3CEcq2MAr3oGgV1SjvLYT5tShKffbVzmBu8qQiprkCgtsn9tZGRxH1C",
  "key16": "5YvC2NGsDPNXikEiVyTetkECKBgMW5GEukeUVpYME44Nwoh9LgSAJV7cbDEFdRpjE4tjq1FUn87JefB3e2cP8bwc",
  "key17": "62rLC5KLUNvEKhk3DK1irzXbgR3oVo4VJdiLEqmiMcggq26LQkPNcBcNEoG7o8xU8YhcjcWpewJd46VQL4awtSER",
  "key18": "ATS3ApZpwN54eSyWnYARcXRUSyq8rbsEGaynYBoZs5VnhC3DHsRbMcSaJTo8G8gpSBPGks5VRVWwJSRxWJ7uDqp",
  "key19": "2SK1s5W8XtdWbH9vuSGYPuA56EEn9gCEQP7oQUmLh48DQgVDaDWYY9WbmkaGn1u4E1dJK7agY5a1RiWhPnRKDH8m",
  "key20": "3cTpwLuF4q658ZwTA1RGtz1kC7gsCKG1HGffHvvF6vxN8LHToo7XLFT5jULo4GBidMLiEcneZ2kxRgCU4jDtugV3",
  "key21": "48KUmwYAa8J1fj8y1HG5hfYx7HHdcjc5cwEK9aU7nZtWnLh4Aj74HitFsJ39jhwS7312R8UVX16ysd4LvrSv1UVS",
  "key22": "3Y6KB3MzoZUxRzZWvHGQ7G1ghSjtMWatSDwszNic7hSFaHTmxvhikFY7B2KUXLV19hwyo6VPPrNDcq8jCtcrZLXE",
  "key23": "37pGxrQhQQGKnk26i11di8cGz9LsXGPrmejKx44fzTm3cLPtFtDitgTMpuaTr6NSF1oyoZ8pRD33VvQuFyFpuz3p",
  "key24": "2TfkFgGdU3BBQreu4hwqMkhRMiMcnhzn3wWm1ADyLnRkGqdd6JNZ1vBw63zP53BoyZs2aCycfsdrEHDYBmQfCXj9",
  "key25": "29VMRhmYiJP3tBaKVyjKAHWNw9pnrTfk5FhMoTFCQ4F9W4pvMmq9mHbZkTDKf9pZkuaKxLJ27p4bQMN9azoCM3CW",
  "key26": "5u2q2zjWFfce9EHWDyvNaZTU5zGgc8UC3HzetvfcppqEJYPYvWPRrnWYhoYdqZfxQ3SpQMX8CVyVek37crZo71ej",
  "key27": "xu1yPZHFopuHLHqoejHJu3Xyz5knXtH6Wh6A9UKg3LgWEV4rjMxcE17okzkBjeC2hABk9PC4hT4LYt18A7eqhrT",
  "key28": "2qxv9ExoV3b541B129LGM12WBDmz2v868MGsL9XAgrXKUGMZDfLrLXhky3WGpFg3c8wt1xruaAo3rzNfYFeGLVBi",
  "key29": "5yMAzSLYwBcyiZdkJhpzdSis3fxwTV7cXcGxh68RyUw6fBBin1cCnQsSgD9m7TGCemtvUSCFe7odwZ2NVCvPJvQM",
  "key30": "3dNRsUpnyLWs1eGotNKsGTjZ7HhFSuGXZwBAT2DXVu4NpbwC8jMF3dofDhmbY8WWM1U66uc76ZieK2UiHpBVaWs6",
  "key31": "52LHDdbDzy5cMyFWGakQop3fXpgTwe16JpXueW5FzzKx7EuLMxw6G7m8pJLYLkdgnWzdXwmhcrzTB69U2ZVkNcdj",
  "key32": "4aHXkyVRhiyUrBrVewK56Tdp4mMLyc2JjJs2yWDjv6CJ8AJCM7hYnDwop7WJpofs2tJi1dMEepmk7aMHEc7JUfLU",
  "key33": "3wam9PcXpEZRwHqn1mUHmfEKZzrX1qRwACygt8BSRmDurX9fUat4Kew6wHTR5mBDWCWUzTSh1uKUcvMSjJf54EdL",
  "key34": "2MeFkB7ThfBhj4d33LCUwA4xbjN4ZmF6aYwpLvowy7k7mZy2WMLTbtqekBExCn9ekiDKqjxkoy3giz8e7KX4aFVh",
  "key35": "3ybzUKJSJC2R7kW78RjsKJjUpA8o97hZTKNfuJgVJCxD4BTG9Lj1DrZCTLttzfk6AURo5eit3dCbTyf4XbqBCoAi",
  "key36": "5jQKj2dSJL3p4eWrL7Xmpa2yfZAHGVAao24HFF6ZrzjZH25M3sxA72gpNuC3s8i4CERsVdAqo6CrQyE2VHijpve9",
  "key37": "3hNiWothLkV5ewcits8nNtCpLmYqs4DBVDXFq4dmKZiDaUn4Eqxs9ReYpGTqve3aZSF5aJKyosR4woKsQuqDH3vN",
  "key38": "Wa5HgQL2djkXs4fws1Ui9FZRoyPJQmL4r9f22qJ13RUcrodifbQbip2MukR7CdFYQ4snMHHuj4KwLT4vLdYJcns",
  "key39": "64XivEorogx4SnxWkD7usLX5zp9jTrivf7onCM6g3gryCrrTU2yDesifYLH5z46GtXjK6P65yAUVtDux8zg1ZqoF",
  "key40": "58KG5WjvpUh41puurLGzukHwqjBGFLoFL7PooCNKBDZ5rAu5411UebVeX2iWKQHVmq5A1ofwzsz7cuTiHvUrDxq2",
  "key41": "2vsXZeeDjBC2R9zNZGwJq6A2sZNnT5mhgKkXw167RNRnc3xVFVDfvSTLNKdt8nCiADbPX5mDnxxutMedm5u7yYdW",
  "key42": "MwQqD9RJfSZwnZf7B9WXXFiJPVk7rhoLaqWt2JRQKAT3LFawicaaQqzy5AWpUagRhXiv8RGY2iUJsRDy8hy9DHJ",
  "key43": "29WxuDBmQcK6kZu1M1r2WFG8bZCDBi41Eb4qpv6fVpr2CJcqZkpLvXdk9YB4v97rc8rBRTRFudkjUugfcUK7Znko"
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
