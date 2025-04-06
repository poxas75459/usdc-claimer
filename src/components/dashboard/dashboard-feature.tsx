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
    "5eYPSfxtk4jjmz8PbENrsyfHVcUpBpZDPrBF81myXdW9Ftvkaye6fcnyfNk2tRTngqhs42eA24csuWyJp4wmwY93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9YhgAYdgCLtsN9yeZD2SoTFfJDoDBdNeULSeLeJruj2MgdgzWMuc2RMLiuZGGGFW1zzTKgMkkKzKiKHyLXdHnm9",
  "key1": "2wKJ9LnYntCmCCWFFvYCmX544Uj9WE99wgqBQt6DH5AYYPj88XWJLWeiFf4gXGmB85yY5KeadKcgBnUYtYWBQzLy",
  "key2": "4sS4J24DX1HkXEY5vJuRm82aFPvsKZfMzKC3xgryKkNxYFasD8ASivs3n5gMR96JGtMKXvqtKqFS1fkdCwA8vd21",
  "key3": "2zQPJtJyL7FBm8pMJ5Yz5h87bKCCqeT1Xz7rAwALE2S7uTkysy35KBnbbhcPsZnGy337uUmZKc2RTadJeZkMpNP2",
  "key4": "qqJGPPe4ubRGhUv5DaEa8ZkFnHVoMEVBamb8S5Je6xAhj81Cf2YoKWbHbxAe6rDbWsbbVPq8YzhMmqSiRChbgXS",
  "key5": "49xLaHjDMJN1fRxv8mVzQUU5ht9ypbPGtAnsjCX6cbxDgTWH2ZLnY1CFgrPW2WcqWxeydtuSQo7Vm9HLzpgV4nor",
  "key6": "t3C4NW8TucUANwDSxZSdSr3GscKNc9ieecNBqkjhjTU8AMZeKEo4y8ELsVuaH8TfaqELa5cTQYYWxkVq3KNi61w",
  "key7": "5uc2iR7Yuh5Pmh8nLg5hFv8VU1g6r5TnffrWeAdmmDJVb4XBREpCNKajoUPJQ49B7wTKqYw3CfeHHp9p2rNKr4vn",
  "key8": "2Fepu4skwbq4U5wYgHVyPMDKiVgKCbyzAS8jFBwyMypEuYs7KAepBRMdfH8LwnrAwnnP81VHPniW8JgmYGXGKyKn",
  "key9": "3Dx1zhqJeMJReP4jfJEBgqCbKLbJEC7LtATDY4nMVbfZTNvXtX8rnR9VHiLhouW7VKT3YZQFXPNSoxDMsYYkPBY",
  "key10": "5V9AuwDgmEbFgVfV2rXRzJRnSXQwnetEbTg1wuyYoeBVWLdfVhjfmCMxVNgxhwNk1aYZUVJ6DogezVxFcnPcj5qm",
  "key11": "2vTMgimmuQ8n1u5Gs7wPckUYxBEHJbePChtMDcnrVcm1pTiQFboGEhtJmbFXL9rbmCzrLPbCqzgt2nqUxixUtV72",
  "key12": "3zfucfNjqaChcjkD2Ppf82SmSnQSGoy5kKZWJnyQqjga9MxLBzd8nuEYm3dFw9MguzUyE8T1JW2114aW3HrDhp3B",
  "key13": "5MqWD315zNqge8hXTG5VAZNzneMPhn5TtFVS7NJcCqCxscKTN9B7Wx2bLbp3qNHNfwShALu1cUVXuUVTQRqGbSwE",
  "key14": "hVc5CoXUYo7JCtFphePAb9ZXg3eapw1LaqDrrZYjUqe98fYX443BPGhBrjcLiJXoWZGCx4NXSvvYU32xLWB9x7v",
  "key15": "V7dAv9SKzz6RHTk8ePWLAktXUfwK7o9XuSZknS3zWhpx6YcmDNfcHdyneZUbXke395ecmiYULZFAnJGWyVYMspB",
  "key16": "4WdyVhgEeRx9ZhPVf45f46iikm7g7PTqMKmgfeKFJAecuXTaaRCKng4FfhytQdZ6KNc2GNRSsxRJE2uE1i3MqRGQ",
  "key17": "21fVF5VYvSSWzNTy4k8CE3UG6VXe18CADzDUhFfMS5Hf7cNXAQcGdB8bhSp8zrurZrV4J2nDpyG9R4FWQSZpAdVD",
  "key18": "3EVttmtmhAzuCD7KmcSxKDKyRMa33uEjZ7CKJXo2VKSbEvMaPNiQDWi2eDGvy6D8Zz8rydHZpyrmQ6X2EL9w769j",
  "key19": "3aM9Mnip7Ayppjgs3K8cXGG2cPt5enZFTnG8zBkkz7C6HAFD8iqp2aMd4DFHarz9KMY5XWcifM6B52vFNfRQ3kgx",
  "key20": "5iMLmnLy4PJk34sqB81UbxRp83Af7caw5TntsrnqpFLxRzVVQPqTup2XtRgpmuL8qyouT9wj1KDKPZwHoj2nZJnp",
  "key21": "2K5RYVXHiDQpWqd8Tm6FzrNwo4fJ51nNe4RMA6bCGX6LxuiZkjfvA639EmNGSVJQjVS5ZHMTjd8so9ydxT54j2M8",
  "key22": "2bKkhqkoH8sFK1h48ZFEAFxQ8Rwj7EjNBrAwnhj3FLpYQibaTLQaxeaLF863xWYRKs3sHAmKjAK2sL1M6vJ9mdWd",
  "key23": "2qKpuDpevgWGHV5bAHQUPWX843YTULXQd5mThoBxfAf73xuFmwhnSFHkCTXisxBY9TQeSVtiYb98qZbSU7v3h7ie",
  "key24": "59q3X8EnB6n3s4vWzhZULfdgKzkFmHr8e6WG7hWTWQHuwX1KN4Bmo9GSiq3GU2xVkKUgzDFVpjC848Q5nWf7EEAs",
  "key25": "4qgESQC1vVWCJAmXjEb3ku5X6Rh1c3VFXYyk3DYVpf8tSnqGfkAgnA6sT2SdEd2WMsifK83MURGWx6fVZCD8YyzH",
  "key26": "4L8EdV8Dj1gFrxtZshDhCX4Dpz7QodSCGRMz3Cw3Wvxv1RDJBoGP3jmnfg4ADr8WNV7UiiktQ6HohgLR36nxDGXA",
  "key27": "3nH24wuX1d46aSnjErYXCQvxpV6Hs9gQ7wGu1yj4Pgua6n6h9gd8njfFbb1PShTC2UbEnFjFZpS4LZaKw3cWrb48",
  "key28": "34DcRcfG1d1i8gtRoQKRSxsU2nm5mQKsdQSZ9or8MELioomCBk7JvXS5i1XpC8VxMEQRnPmZ88D3SSvBfDhKA8xR",
  "key29": "674KEvLUfMWZV8vhs6VGqdbtH3dnS17PGTX2kCz4twYHVUZPwkiXoTyWdz6vV6UaDe847ZdidAsfhDgfEGEY1d84",
  "key30": "4uXi9aUpN6W2XjM4PYwEsGP5ZB685FHZpQMvFpjxcfXPDfYyxN6u2tVzEB4kNKepN2ALbpwrsotzkdP7wJYB47MZ",
  "key31": "4346yhcacBAVPXKg4g6CkL8RSq577cDpJ1oNwHMxcKG57dxcmqXcmWeyYS44ir2hRA9PbamU8Lb47uMPN7bMtbzG",
  "key32": "26K66AcGT4rkQE48wj7zyJRfSCabA7wEryr4UXTUUZQNcXycqoUb7ZQ4A5PirHewVs99ga3qfT4pVCCVBtZehu7V",
  "key33": "6UnLkU2CaShoHEYyXRU4Zz7BDBxLTXBgbBzqghvvzNwU4iruvhYwze6F1Tr3QUonr6EJJJQAmDu3JbxHhNqFEBj",
  "key34": "Bo97DqUMSbMLobK6skKyryjrtHZnvCvYVYXtbWXRyapmjUVRuvJL6xvhDijsEUJ9sfti9LW8D8azFNoXqW9Lmri",
  "key35": "34KRoPfRXn5yUNhkdf7iqFH8zXLghHYE1VrPJWvJ9hsFAiniCAPLd5nriyxe64GBwxuz9BQm7FeqQiuiFi5dzfSB",
  "key36": "299Kgb5JUUC5SeMYcHwrhCfnoTP63hs5AU1Y6H5rxyKPar9t8uiku1cewnp3WCMfRVtpZyqNrmzCmmsWATf88N6h",
  "key37": "G9wQx3zZsAN9iP2HBupmdhwYiuZSSF8Qt4Wtr6BKKC7AbUbg7mvLridP1FUK611bE8M6EngLK8jjdGkSYxfVY32",
  "key38": "M3SdWPKAkDDRPPkc8cUqBWT8Ei32BhZszjmaqE6EpJvvNDi7wqmFtCTPqPwu2npBd6wLTRkPPhNdwEGNogDGhqV",
  "key39": "CZdtDKvybykDqMRwUBZunLA9CPob7qDKf4KvSm7t8T5QtdHZdrPTaNGk45Vk7eX3A3uAsWCocFdLAH4yn57qY14",
  "key40": "3zSn6wHKAB9o6Xt2hsWe1TfTNPfUQKhRfxeBBn5hvmZN53nTii8QwnyyvWe4N7VGU8gsTt2JX1fgLG8jy7qndjQR",
  "key41": "2fHfw7nyLBxuBeLpxdYhPZ2V5LQPhzFdfTEcFRTNfHcaBKZZAPPoRECSnzXnNr72nuVSfvGrxRNpZ8cy4qRQJC5k",
  "key42": "2g6DmhwuuPtCtJMamPnBBR7Y13drTnx9jGnqw9aJVnWxpQtAFdfPVtbkr1XnZyrmY882hxxWUUox1LbGdMTraNUP",
  "key43": "3KB9WhKHLmNYv5BVpgZw4red5SftnnpCTu7GS8XApxgaMqRzhagMTDJRDETrgpUJ9owFk8Lf1hMRfrWF246umqEN",
  "key44": "5Kn9tvZD87ongAiM7XxANUHWwaWeiPVabWp3kZjN45QigSpm8yA2tHV68JyYfapNzy2kvWabHcSL7oAyMeZQHrSp",
  "key45": "5ULU7eSrSNuSQgt8UdHiXy56niv6sEazk8A8edZRgod7hbVy7rVBMmTwn8q3BxFKB6QpoEomLurYMrPMBNRUi9dB"
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
