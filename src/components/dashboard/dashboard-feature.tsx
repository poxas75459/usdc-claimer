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
    "41gn5DEvGzAYwowGpRhxtkAbamUj7QhR4crfSGyicsSXEnzRmhG9xMsr5qzcK8DUUnPVAnMsFPcYHmYdxUSwVYGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27idkBxd6xeRsqR58rPf3ReYCL1AAidtvjtopa8ND7zNWzQbhwGCks8LGXaDng9Sic4Fk5HBciuTetgVDcv8KmfD",
  "key1": "4EzVSmEXAFGDign2fLCQPpwxABMu4KkQpdBLN3wtpVXq3jVyu88oAnVGfBzZdbdjBrPL2zFvAuDZk1ExDNPCEsuy",
  "key2": "3GB5waLVRwqdYiHoPrzuALVywxoxdxs6JB1aRGyxucKLj6eKhS2A4iF1JAnFA59Qnxd59HCihoG9eHDNT8HtG5S8",
  "key3": "3ckWn8a5YseK2k6xC2QV4cLWaWnS1faknd8Q3kjvpG5R5jbECZNv4K5FxsdHTQi7NfFLcGGn2w8vqGLtcBMhtq4E",
  "key4": "3RYqv1bifwaVnuzqsPXkX4rR3gEdCNpyk2CD8baB9AUQXVo3SSaUdN8EznJErRcNwSTMvWHMacmhtPrNpzisai7Y",
  "key5": "5KnKx1nkCoYbgaQkmZbV4Uz7pQ3KeSDgKE6Dk2BtYfwqfQmZSLjjdczxSjpNPj3kNFouoZutX1sbX4uysqojBps5",
  "key6": "4B6DohVQRBMKMyJdwCRtXpweGKG12QBxRojbxKHbx7L8ZNQSNqmkZE5QfuGefqfxjk2K7oKoGX61QoixxVfuG4mt",
  "key7": "35QbF6PtemgyvngXmURWvhN3QP5zkmkmBjy1BGam28YJmJBDuMDE5PVSZM7VhogWj7qhKWQtKhqk3pkZpS6EYZzC",
  "key8": "4mvaXF2z4S5eEHuQHE9FVMbMfuB7kQk4jS9moPiZEiELzGAYuS77JEw4ADRmNSgAD3Pmmx2xscEix5yf8cFE2iu1",
  "key9": "3GzmVXkW5E5Gj2UasNVhMrXktPxucjBtCtS96Xsx5AH5o3DgSu1n2Mx9Ua1vgAJauKDXfLMpeknM9gEk4JuDrAEL",
  "key10": "FaZ5C3QYYRY5VMATANvn9g6GhxTdvTpYgVYRnfLanF2RK3G6GD8fWpYc2kkj8Ly5pd8ENPQbMFiCMaZd8TyXViv",
  "key11": "v4x9G4FQiXcjMaxFWNrpPb4HHjPUQgkBrd9H6i3utNt1HFMAGnr8XPHaZFViTsqo5PjDs5fm98igh5K2wH14E1B",
  "key12": "5cKxpAyKtcEUHgGpHQchG1sguLbjvAH4CCfReypZ3ZY5bgevymGTmoTi56uZAPMUYKM2Ubzh8ntf1MydWpCbkMv",
  "key13": "3CEi4Eo4BmmxHGhFPJJ9ytQYYWnfccz94sSSwhyQA74Has5JPXTxcuJAUxGnqHiZHHFfPLDwtQzE8ZjEiyTLN7ss",
  "key14": "2SpnX1CS5WE1Ldha3eVukfCnnbdy24zgtjMXshPG4EK2ushQ9oB4ofD6kngJeDZjWLmCTJLHmtEFkEAqfeLU3eKi",
  "key15": "TRi5ge5XSF6y4Ww7LR6Hzj7jeD5Kz6M2GQMYFbKwPvzPmnycnf7qdEkSRoCKhWes99Cw4Ce6cH18gfNo1YqXjRg",
  "key16": "4Ugtejx4Wxq3EE2Jcfz995N1rjQLWkoaXwBJnPX6Lc9ES2GZtANnuD67SyyUW85EtFyEkGwit2JtouBJfGKgpbeA",
  "key17": "51mGBQ7Btm49CV7pqkxxthmFoRwYccF4S7CJF3MweQe9b6yHqz2ibCx4J2ds9HTVCmaoSVLbeqPqPNDxLePzY4hm",
  "key18": "5WNBGFNruz1fyTsGpzy8Cbyv9uan7yawSydSzdsLg32mn6U4Qeo2xvEgAThg8QFMg6MEm2CzmAXYA63hn9uhfD5U",
  "key19": "64ANQwCxzn4KGf5hTqtxUhkHRM9QqATLyFMRnFy7N2AyAAg4WdnWXSY7yhupTSCH7L3u2j19rCWzXJBnsGTWZJ9y",
  "key20": "28FSdGCmVAHPboozqqxfHKXR7gkZagiVqUNMDmPPMiDrvkSsDZHBnqZeZTYU6PKARzquT1A2i3cSCD6xAAkfcg6T",
  "key21": "3Xww2KwqXZ9vGdBeD1Kfb1hR5dZeuLK5CrgH36ZW9WyG7JDwKgjfsk3tWrSJZDfj87MAXgoSLFQiMwVLXpYJ15WC",
  "key22": "4WYHeRDpwxP94PiTTiDNmP3dC3D2P5Fzv33MfFr3PGFzrTEaAS8pxjNwgjKgAqByXZVjikcwmuY3hCF2A1oqs7Dh",
  "key23": "3gXXBqhkdaN5jmutoqQYqZdQpSXwkuXLzhmfHMhWAH1cfq7e2d5gk2Q3oL75QSLkKVwM3rmcACynWBoKhed9q2LG",
  "key24": "4wdmqTmRhJgZjmKHL8Uk2tTGanaPSacQNugiVrAt8G4acCv32NiRRTgL1gZWEvbGz2yxiv99zYYsXjME8nKQGKxK",
  "key25": "3eM2w6EVrKr4HvXtnz8oHyGzwSmVE9XeKFgdW1YJG5Tju6mnPZLwZHS1X1XpL3AGAUMFfNP3opaqQdTfx8MGkCXn",
  "key26": "4sa2WbgU74RRXeetRJfE6Dgogv8Pk7rRvYBedERUe2ut96WjGqArVgQVoaMHjxGUBYw4dAugBEuUR9KRVkmxKwY5",
  "key27": "2AgV2oxyq9UHL9tpj1RyGibXSiVhk13BVs6mjfFFDNe6pgkv8b1MLW3XqgZs2BprTCjRzXqpZkJNhEcNGWPWQWmd",
  "key28": "5hAZWYSi9NbeuvtXuWHDLq5DvULxkbvbjGUXfWReS9gKRhfrgQVG4V72sTeF9aqzwLS2mrp5YhZ7bJDamzkGNKku",
  "key29": "2zqKBNtxKy4YgkqzmXo65SWdiYQ3JCdJsfr6nqtEJBHtDD9yK7MpxpqHcP97hfhb9ipjt8xmLKWmitjqiK5runXh",
  "key30": "5SbqVfjsr1D9BDpYz9djiaFNgRgvT3MREXUfTmq11fsg8chknLqW7kuDpDvUxxgfMdkLHEbTgWk1NZAgSNWinLwb",
  "key31": "3k7kPs5FNnNuQJSacYKP9FK4z2xo8LVHr4RwdZDhD2sdsxgiXzTpWFYuV8ivcu369Ctb25WdqzTYhaWaJciaFEqh",
  "key32": "5RpGwAvC53PjAg6o3AFjo9auHPv1DuzUuhraTo4tVMSuusecfSfRs7oG6aBgFTtQNHYUpdhaHnKzFVF9xzMxVUFc",
  "key33": "3ahajjKcRc9Qj4DnP6HS7EXoeY8y8V7P6FQKNt4vpMBALjmfzTwkmGdPf4dPuuXwX8z2iRwo9rLyAZ218gZVdnFY",
  "key34": "xqGAHEtT8juE4RWQALq1M7nuRJNw8q376ZEWao3StJUPE5fyN4GFA3rcra4sYUJXjjERy4TM8HaiZ859shSJHWb",
  "key35": "2wgF1447KiMqAfT6TDQjiQqCs3Lbf5cVydwd7YhNxaMR29R68FPo5K3k2AiJAdDT9fYMLZR6kDmjRatywFFSqaQR",
  "key36": "4FRh7ps9kJH97S7X2kLrLFNhQY57rq223owUAzbb6vXZV7W4DqqxpwZQEdS5QbZsKCBegFeu4h5qicjyvTS6EQ3d",
  "key37": "4z9XuTjiGK62bS9n3kQR5gxTrrvzdibGAph3f3YFoLJXi3zKj6uxCP2nJSzodqBzEd9E5WTeqqDxMMWLe1hudAAR",
  "key38": "4p78nigrCtgyuv7AbFyFgdiGDPebNGmThuD2sxwGc7WAXLPoxqGApiJTTuixTTX2Z7KWZTWsTMupXSPnc62Dm31y",
  "key39": "5oVEHwyVp6oiumawKnjNSURnp2rW7S9vAs2Rb1vdEaKjsACRy53VYCio8iXPdbtbpfH9cRNo9ftyyoAq4MYf7c5P",
  "key40": "3riQXt67jA8YEdXTwhvfxXrwYDiuZQWqSDJiZS8MMLDLbT488JBANKCCARofUUwBivTrQxh3mWamkqKH3xYr7VGw",
  "key41": "4TySqQGfnZ9h6EZpjdjr5C3L8jzLiuHsCzBB3wReGF1wGSNfaHtwetjCEo1nC3adjkX455wGfB5sZ1z7Qk6aqVGc",
  "key42": "2cm7ZXm6Qcas3fWHMLMmbvQo4D1unwZXPA4HmNJ9LS436PKMSiUFUczZrixfQSxcSx3qFf4z1p5o2miijr57ZAJJ",
  "key43": "RcYRe3hqKg9wxNm7exH13KPBAeNEdeD4rMigr1h2Gaopz1MZUJFpmd8YJKE14VfydzBMgQ89KZEZHMv4yCqXgG5",
  "key44": "5QsZ4ujF57mSdCEBEJqfa4R1ew4LyERwQKSAmyMtWHBafZi3agtvLoH6KkvxSDPFjj8qLN8m877im9WiE2DN4bpQ",
  "key45": "4UwURk8KLNx3UmzZu8suewrPGCCeZn1hqVdYXzDqyY1xFYuWo6xes6GB2sJ7ZNXnSgwYfLX8zqxDSDZcYPnf39gs",
  "key46": "5jmDGgG6ZYYtSgvWejktcihs3u6f4tKKAcbr1HFZ4yyvwEqT8VDwcyiQJaUxjDQtTrKZEBJNmR3R8iDFtmRER5rq",
  "key47": "3e59CKR7G3Z5AT2j3K4SDnAGrDoUZaJyBjZnEdNCAXqXmqPjNevg2xeVxJMuemfiWjvRNd7T5KuAFVmnZHs9ggqX"
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
