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
    "3UcCpDQoKFVnBUU37SyFpTWWhrRCUz16vdh2E5rwcqghUfsCZdZyAiAZvAuJEi374ksGstMckThSm8kdGEZYm6on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645kCvtMHvaXbTu8ARBPCzfpgy64PT3gDo98ouKH1hiHkWLYjBfB1TsFLDyp2C7FTXptMzySmAkL1MzEh2QwDCcs",
  "key1": "3f5sg7W8Kt5jRtqmPiTqgesFSb7h3DaMCamcAwPMHRPWMrBuckUspp8RTgdpbN1j1YTCZou6p5Wd6Vf77UY9c1j",
  "key2": "5PHLN4tGjDD6TAEL7VZV4Av8V36qavzNUwwbd28wNLMMgmxdzjM1cVZgcudzyUY2QwDdQc2Z9nbmymtVH75E4XV",
  "key3": "5TazkrVzG5kj1BvocyXJmv6EHYoBZsw2f2S5Ca13ckRatoeDxeb56k78ty4D2tHoWLFxyjU421xsqoauaZ2Sw4ze",
  "key4": "2iKUwyQ2mbDKYMbUAZTjvFY3hFRMKzyh2AnwQE7T5bFSHn8GyymvK8nPkS1GFw3XC2a15RfCYMeh5MCw4EKGyACe",
  "key5": "3WxBXzN8vmXrrhPJvHzL7p5ASVW75tCQ87LK22ZYHTnWoQczB2wP6Ruz9yc7P2yTkULPC1wHKb8mAoXRiQur558S",
  "key6": "4UMzK6jVsLAhLZ6XrbbSVmgmtcFugqnhy4tWNfXsAcf73dsq3mgYdSSNa54UQdMDHyuxpVx2ncxrbREUGYj67KMc",
  "key7": "24g2CE1JXsnLtT7F3dhagus9152aU7znmoYEki8k1cgRfvQwDJZ3QYuUbjvDJMEPGW3QFcpR8AaaBfnPYJFZW87H",
  "key8": "4iJdn33rDvwMX3fr7QRsZm6Bo5VagCuoi4jej4nkFQkboXTj2DaNfGw1VmWfrdQMAzmNTZGZVRXuXTJKM1U8F8Sv",
  "key9": "3x6HCYNhuQdzGFxi9CKbPJrQKVipDrdYM4nK7SdUpNmtJDME2Ef27d9ivjCt9zvjaHR5SYRPfeH66ASxEs94uWWL",
  "key10": "397htQuUkYfdpvxZNgD3fQf6fPRFKqcVZRPyfLbEzKqk133ZMqVkjWFLvt1BcAzP9L71NNwbx7hNACTngBETrdSr",
  "key11": "2wx8D9t3XWE4ChAnSHxFYVRPEoaK8Pbp8MFQJsctd3yf6Ld72kxEbX5qkDRC163pK4m425qwKeF68hJZvicaaS1a",
  "key12": "4UyrumFcitYQS3VUf9nFRFLgqs4GpS5FoPpTTitmJtyg4egT4uDA9FUZCdZzD2JMbZnNiGsGf85ZK6M7Zfrh12yE",
  "key13": "XanYKjBtqw9jugxYvPHfDCDYB4frMFN9Ug6C5anqcEpcGAbzfDEVsdEe3MbdxEpQSU4giQtzVrDJBXGZZcKXvGV",
  "key14": "4M3YMh9QsrvRfZSko3mMVc4ayXkvkwSiddniPF1mEW1npJ4UBzn3bvRj6T6m4YvBAKXc2QSCijfL4jjzoGSF3QCE",
  "key15": "4KBStXHMD5Xsr5SRGSYxTsMsbFh6YeUnN8AAMPbvRQ6MChaAGLKTBRaEFmuLbLfeNYFB3fDrfP6WiHuGa7NvS9TM",
  "key16": "3NqziAoQ1e1C3XkpXNrBj7KQ2VGcX6ZqCyfE6VSEPhS6T6ficj9MbAc8G9z5frpkd9d7c2MnSYSgsfXa9aoTxXb5",
  "key17": "3VMnyJ8A5RdjXLh9YK3bzRTYu34HRdGNP6XwYfUDuLjKBcw7Er4QyzVhKuVeXfKgyvxhYTRhCJSwskxmiZniNgkP",
  "key18": "5fkA9yZzeTcd9bpbpsAQs7BLGUQa5YzvNHGQ8raPPzyEcDnrgimo1qzmGW2e4Mr47ryQuJVEoWYZriDm5qZu28mC",
  "key19": "3WqLimHF75q9V8ufJsvX8gJ2WEV7jmaQt9bWGExfQfBVyFB3Vopwh61HSM8szpkrJ8SribZnetbUfQoJq9Lu7QQS",
  "key20": "ppReZsJvP6VnTnTUWBmhNCG8aH7gvT4oL8Du7EiBREiZkzmEvsX2DRorTfdp6ciPccLvNZ3PWR2aAnDv1FTdYPv",
  "key21": "VF3b4T5RdzNqFLM5a4wHbxcp4tHQE4kCQMo9SDRdHS9uMEVEwtYeP66ktfiV6vw6Cs4dv7JUDqf7DFbWgzQADgk",
  "key22": "3f9VYyCEkauZF1BQTwoxTJoCj29vFSmPxRUWsQUWk3zV7Rw8pVnMFMLbhPGTeUfoJq3E2N4XHLgBSpwoHPxmsJA9",
  "key23": "1y6vWbGD9b1zMRhFfCPcubPnQMNr26jLAffy9Fca9vxdij9Sa2Jh8wPoM75tv9VP7FJu84rpZ5E2p7MwcRfDvgh",
  "key24": "hFEE4dqjMCRoQkMTW2K3v8DdvWLjKdWiUvJ9bTwwEEc7iq1pVEaZvo9DAEtM3S5jFo21Qe1TWbNvMF8HV9o14Vt",
  "key25": "3ZivwhiGtQCFgKZj7yLiGiDWdkcEduTgF2sGmdsAUmAAnVN2aPNQ67NnbmGZbC7XmtDrRopoQRTbV4YrRTPoPUDH",
  "key26": "3sC5xho5SPAuKAGxWER6AMdBgyqEFYsoG39icjdWStVgdrVZGQpGmzPCbvGekvsMofJJyDShSdUueQ1szbxFPya4",
  "key27": "3bgvfgfe6CHh45PbfsfkHYFE6YkzPhCbiU3DBRz3QoS2icdicZ43ycjB79xqoiHeCGuhHCs92YPSrwnf9Hhnc5GB",
  "key28": "2ZjyuTXHHMPrNw7Ymqg288GqiPcjHTrG1invmkk6Fcaappfus7ieUrmX1WB9ywHbzfycZYm7fpsb6g8oLdzKerv3",
  "key29": "MUKfpHvgvf2uXFFNEMHdXy88fcxUanjo7tiPnzq1MAt8mzdgRuKZ76jqwVuydc36HkeZmmqYNFpFuhdbJE2wEDL",
  "key30": "5v4gTdCu58biKZSpXDMwHMF6sk2WiZHXHCq6hgQE4KzF2dRtAGtL26iDaCS5kUNoPooBR3po1BfVt7hEmovmMD4r",
  "key31": "4YkWvRdjuXqzfpUjKhkgHWafHWs74uk4VPSd5jhsrVwci13WVN1kaca69hGfm8LgVVvugjM4yG3y3fH9b3jDVKoi",
  "key32": "4tWZEU6d1VXPNw3tBqnPGRB9s5P16fc1qmtWt9qLPt3n87qWdJVHU12sMHy2AgvqtjVyYdBNB1GX1jjA3h4Wx9Pv",
  "key33": "vbFfXCqPK98a5WxgCi8qaQR1n9z347bTMhaMR4n2E5Weu2edKjeT9hmbouVihFG1dn1UwH3MprzNxhgUBPY56Ah",
  "key34": "4wJkQ25dFhMvUniEWCfx2Z57ZgmQKvk12exeZHEgXwFxL86WxoT2WEr5wCQJjK6j51FwEP3L6yp3TUc4MpWw7cqj",
  "key35": "43dZddCmLeod1uU1z7kWX2jhfb6bF4DJPdhRHsvy2DqoeqUZbmZvjadspcuAwhw13EC1LR6jPKkgpMTGamAGX1sa",
  "key36": "Ld7LQUwCpDbeGoYmb7GjDE16n2uyJs8H4mt75imPJJFYKnhvebjaDzTxWkkqTsbESLSBhcsWZiqJXY68vu6uAGk",
  "key37": "2htzSYkpbrWzQLFjo6Fsap84VTEFTCXqApJQC2KYvoeV4cNhDDpHywUSaBJfxQusxfARWYxZ1UG6ZuGoTdVHf73B",
  "key38": "4JzbeerSHYUdCJjwm27JGTMhu7NYaDEXS85ZirgjjomUyXTjEHW5jzwwPxzR2wNaCo34vHUd8u89wYzoVoh8L8u5",
  "key39": "ovwwEwGyNF2NtkrfMv8jF8rrRSAhXKZva6raxF4pCKo6C1styXoMtbETSrgaXU42MnaUzGrFKgfGwErzW2Da9vL",
  "key40": "4mfCJpKzU4XKWJ2RC4ePfEwL3anm599XaBqJogWK61qGcKwDi9yrJsenZWSv81Nya6aqKuD9SLBWwL2VvZHg9drb",
  "key41": "3QoxEg4k7NaLohDgNbrF9CviDMix5r9qvwjaw9jrm6FqK8jmnuK2tYVdccGyeCRdgJFPogTm1GZ9fmgZLkQRzjD5"
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
