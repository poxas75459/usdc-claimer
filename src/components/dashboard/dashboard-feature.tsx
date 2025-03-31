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
    "2NTZQGYk8JQMq5thuZMmB2hiSCvABa4yaj4Lnf2SXzXFtFXQAcrw7K2gGZEnJqrAByA7hoU4PyWhvcXjPH4BWbqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAhAVBRedSBMADpAeuWA3P93sF6RBqfEQwAA1o3ua9u3scDtLW2iTr24TCaZQjec85Ny2Y5qHi2V9YEmAtFaYN1",
  "key1": "EurynMi378vcb6RDzntuyRA1vjtXaFFLuvQuxxprBApFzTqkZVCRnBsP5QTg17KjT5YSjZP6hjS8qqU4kvHDoNs",
  "key2": "4kuGWwSdbBR4eT8eo5BVYv6awJ2AQYy6ZU7PEZYjm6mc1WmXLdgrNAybVudepfVFJRTpyTd36o9vntDANXFenfe8",
  "key3": "2XWZrCppFQWCKKD792nzgXbKWLMuxRrz3pj8YFRRibEjBuMWzFMqzXnYecKe9ES9UDscMvbwyfs3PyJwdpZ6zrpk",
  "key4": "4otxFAXBgjfzPLbZwMnYgBHCEPDWLpJhemm1ViTD77F58ooySuHwuXP6MqFq1UM71SFpWXo6QY3m7Kr9EKkhUKrF",
  "key5": "2C9mFTLSXbfDXV5poPyJXi5oMSVhiHiSYRk9Nd38Hc5K91LMHWSjKn2xKzTRFsGGpPgh6Q3aYjcXmgboZGBJ1sPy",
  "key6": "4BDEkLgGHLBrDGK7VgPpWgNEePjWuTzYSBv9DNS4wSHbr1kL2fNzGyeaRYyhkrwQjthXivx2eHm9pyZE7nRfrD3v",
  "key7": "2ai2B7ukASoZHxNQf7LnneW81mrCHCepRU1GP8FHMgGDKn5hfKGqx6tVfnTKuCg795a7UY2PprBZdDd1CWyu4XM5",
  "key8": "Zn13G85DpnqJkLwB2KFriNkWQiYknW97nypWxF8gtmNfzYiLp31VBvLokZqc5B2FayNpYS3ztx9np6BEPuWbY3m",
  "key9": "3u4sspeZoAWEyCq9Afoe4hqCXvoudncXAiPAydKvZ6oS3G2176dpXUjweSbhKqaghAHGX8SkR1j3XShGE9gA9L53",
  "key10": "4MzBC7Cx5WchDUT1PFXyFFgNWKbor2588qR7CVkZPEzNHi7DG1QSPqARzVQg8d1LPbiizQ9QCzMLZKrNajxHSkWL",
  "key11": "EVXNjji5NoTd6bLmCdqh8QCYHCk4Rr2URiJ17cYRDRPnn1huzsxn2m5rFZ1hfLWqHZE3N7BcwDTsHg7MBJjp3iu",
  "key12": "3JhP1rBwmpgsMtqvMiFXvcqfSSKgPmGxM2HsXixVCrFeZp5q8eq2uhZwt9cUzp2MuyDPfV2YaqNnWo1EZvT3NHMr",
  "key13": "4cRr8wnp69cgV3PaTgzfD6FVFMbEgMYDaEn26pQgewgX2QKqt3jBTAdSGURD3b5wsyPzjKmMSiT3h14jMga8oyL",
  "key14": "61w4PiC36eYadTAMbcsMVVbbWUUZy8vM21AXYbHxJGRRRb6jW2hjnHPN2CJuCXM2vkN3xrd667r6KzLGFgzEq4Uu",
  "key15": "24beF1QtgVwsjLdRjEWEPyZnL8N4F2oWkC52RBrXH97EemLJQcMemKRZUJxNyAGrj8CCDTNPYqY33eG4u87kFPnL",
  "key16": "2pjJ31dQbPSMPeKX7Et68HJXTrYuiVSj9ZPF9o2LghfNCuHB4crtN573Gu3KvsosxGHjNA5V9kdt8k8fGYojFuYv",
  "key17": "49LQ4BrBGWhqBLKWUnLKFZcwXc9cSiA5gXVjsadxndaFksuVtbU17gvnDveVroTDeXxaCxCfMfAU4vh3bek1KAKs",
  "key18": "23KZD9dveQc9wSgAdGaEcvKLVk1rspV5MrMBKdi2Tet2HjkiUG9GeaekRYZUxuQWiZtHeguwPUyQjHUhkpTurPve",
  "key19": "2dtH1MEX85RPWjgfXFZt9HsxK8WxQ9Aw1vy8CMjgjXvzXGnZSNejHZnfAAoriZDK7LypXd6yCDA6G7dAyb1azK7v",
  "key20": "3StB8gdVZnpK5swq7yrsiSxG1JKmYrG2EiQajKLj1nXzMEfDqZ5MknSdJs8TQL5p72skR7M9KUngmDaVqe5MdA1d",
  "key21": "5trtaYCPoK5en6pJmLtvJTobqN1npXdh2HdL58gFMvHqKPCKqugocgseJj65w7YngeM5doB2HLGMo2zVpLgLAGZG",
  "key22": "5F73aCT2cmbsAgkXTpRM21tBhnL6DokVXBryUBMauo69aTvKLncWLztRsEwiw1dh4Nvevyyhy88SkgcJJ4z4VeMr",
  "key23": "2bgR8dZNWKZxJvixa1ntVQ5SBhwJAGuwPdnQG16iRetewZiqo3J4T44NUpyYs4nLPyeoUTxBFffekuYRszpagu94",
  "key24": "3b1m69Yuf3Kdgi7DPb5Xk1eRAcvMTuotZVNpL7RUve2fsSSMc8j2iQtBUoE1nEcsDHAfL1Be8rmUpyorKUaFSsaU",
  "key25": "5vuzGgiDfF5PAjrgZomkvdSxkHMitFz7LTa7vvEtrrdawFHCDGryn3AuNqXZ5MJHr6Jb4j8ypvBtPRaFQd5fxhSd",
  "key26": "2fXU4SkZstpiorc5qg3qkNxqy6M8EPjs8WCYWvZSmccuEMYXiLLu8QWCFR5SVRr6x25TvQsN687pUZLf5SsQK7H",
  "key27": "2mjC5czt5pKwPpehYDy9i2FXKKUTCmv1e9sFgMAbCRBETsC2yvKRf5Fk7c4qfwNBbcbQWQrfKV4CU6MyhWy9wDCB",
  "key28": "4xjexqkJGzDQ4tiQ96sW8PrkqtyRKRJKs3nUXicoZMrrgTjBQ8tgB5pAHvsfpBM1Wp9dtao7eT5SjgSuGZwAoicn",
  "key29": "4jfJkwRVAhMiqEttCCEeeqfgd7UZyqPWtHDMGWNZrw4quK5nk8uLc2LuUaLBRqHvBodjneAEUXnBuVMvi2HFQSdn",
  "key30": "58ANpMU6dQ3Z8K5qsjq78GtMsyP8u7YmjbkfLVcNJqjiTwndRQCtrokYyAG4TZ8UAa7pFBQa7QCtVpVe42bAf4kh",
  "key31": "51sRYgosWjR1GktkqrxQZA6uEZMhZ9ZJN4S6MVnjXywfiLSQByPocAMMNBdsNhhC6LPsmXT6fWU6k9cDxpspPZ3d",
  "key32": "4mZo9aQV1gBqjDn7MUKogyuKh35Y33rrAiKjwaJwsnfHmXrt5xKfHw6NDtndq6cJhayZtryyVTuWydF7bVrvErx9",
  "key33": "3zgim5LkKBVrQuXfjegNXSSmgRT84bq1zuRHkqRF88x3fkYtVDLQomq7sRCgzRQWZE4T5cmMfFWj23yLeAHdHd53",
  "key34": "6262oBp3v72zW5yJ35mY9jed569wfqF6hU4VommPqa1K9XunV9JprhHSCyvaBVFSWb1REASFvEiDZhYAmcTnhU97",
  "key35": "3s2oNnpZMssovyntR1PoC2rwekQ2GTo8KXcgJTWQKVU2wHDmMv25XQLNySkPDryk26tbKXb7ZDjPcBqvrv4CdbBE",
  "key36": "52UXuQbcMxsCm1MQmvd4MqNHQMcX8HkZ3dqNApFh6LbNq4M4XsuYYyRxiRLduWbJnqWBcLTSjhpQ91n1DtNetcoC",
  "key37": "2cUQAf3zn2XRiunQfj8EfW7LhhXp6CNLW6wywDw4zG8N7esgMLnMJ7kuTgFucom55EEBHPaLKuxNphba1BXZAj2t",
  "key38": "J41Eei8bT2Yc2ASr4t1XFxpHrTYKAWj8t2MF2d7kd7Tz7TZtr2DxkmBpNF7TQwDpPKhzw72pdjkkwrD4DuojpRz",
  "key39": "49N9fy6cdPzSHqLRb8qLX7xeNhSsTK44KpbbVFpMj7nu1AsSxqx3EMLGvnC8Q7PkqvgujWzZq25ivUs1jVdCQVKL",
  "key40": "5JWrHU1RTnhv5wzAvvrawHYfSy95wN6pqEtUSyXabhrFADgoWzDg6JaeRvzm4Rw5fvkrCc6Dg2x7GDCWwFNdDJ6Z",
  "key41": "5Gc3TKFTEDZ7ji97xdTgBENuMsNP4GK4e5224CfMoS7SVuD6bx7bqA6gB39ganfpPARLcFTKH8JFDgbbWxR58LKo",
  "key42": "4Czgtibh5NhK3wJHZ5SF1rs7aEjRmyECUqhEG2CGyGK73aco2v5ynRbYxwmDSThkty1oTCt7d78knL8YfvGbqm4",
  "key43": "mXk6AEFf85Tcge7VWaxJn2tTY45qiKzBnEHGNee3pJZAb7RGEPkj1emqZZQqKw5nd4EKt3FePioJSk3eDG36zCV",
  "key44": "5rvyXX6S5V4gj2bYcU6GbEbM6sqsXqBN6wrdWtpPsi9EDVxny5g8me7Gjbr7pKD5uc9y5CcedjFsSqNHbmCmw6R9",
  "key45": "pDJcKgwvj1LggDgEAxtEwa2Wdrr4Qnx2X7tE3a12k26uNmPxapABLcfAkBawUogZuDZHPsTbZcow5h85TtTWnP6"
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
