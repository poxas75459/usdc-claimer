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
    "3GFTrYSi2P4FsCPCYzSxakXQ3G5hTeCcbNzcXK9yeFXZW6L2czPkdvgWAftgsbGtpumvRc3iKCkcUKV2g4m17PK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbLevTVhRjyCoG5JD6Rz7y4KFPzFR4qDqrH6VZcXXuLGq4sa4mFgjVD5qHjGNrL8C5qFZuAXi1A3RyC1wgpCzvP",
  "key1": "54eR4VaouHLGzAWs8WaPh9SLEtNKty6jp4MSAApP3ttpQEfPB3H8GZziDkGS5VqZePZcFbwnmn6mCLA3eWkx3ob9",
  "key2": "2nw53XtBRRY17cb4yemggaAoQ5BmnEU317ewA5oQWqRXpd45hc1pyp6QJCNzNrxVPBaSqNzbRQBWm2tNAxZTrVFn",
  "key3": "59f3hvbyjfZr6yGyh6ME2hjU82tHVFyxPawLGkPe8P3h8H6YEepCyRGUpKMvNGs3JEc5eXogroRs8bPJbzUmfALZ",
  "key4": "61Lx5oF7nK1yBWW8shpej1AK5Z4GBunG5KJ2K9mRJkoM2nfZocYRA3Le35XZq6nv7NkmW21RMCy57KK4Vezx6gjW",
  "key5": "4gaEM2QY3jPSN7p3wJFYQnyd5Cm9VXZyDkfV2ghsf7dfDnJz22HM6ADJpsp9La9JiVXkQ1ezxvwkW8kZ7YKpdt4j",
  "key6": "3NJedk3j6eDNxxzLE4FGyosLUQgFsTLLT315ceLt5LBCuBnsJWoHn7k5aWf5Y7FifbPMpKvgFeYBgfarK2HiZDy9",
  "key7": "2YeDmBAC125UTJBBayc7U1mmTPtty8WdjB1ZPwzue8rn8J5xUNCmu2Fvcf3vSpqxxDarrS9motNjTkA5Hjhi8VQf",
  "key8": "5QeHWBqCqLA8q2oqRs5Fg8HR8YCi5Po4yLCX2LZWpQWLBJwCc3rnpxoRYcoynASS25go2mYP78pa7QqCfCpjWWo5",
  "key9": "5j8AgZcrM3GarRCWRqj8BBTvbAzv3ZZ1pme69QRLBESMUybBhNqJzEdLwP1fPFZs9EZtjUzvyrCo79WTy7GxQCyp",
  "key10": "5WC3wmexNfL5WcJZEeedBHBdkfPnJpHG9sFN3vJNeCvVWffQ77RnaC4ozvUhU3hZp8wbnvqBTKnV3pZrSJVPYaXw",
  "key11": "CDPigwba1d3Dm7hkMZeiCxTnPpfEvejuN8JN8NEFUEkmZ8CLtzXg8uFDgP7tYnsHmWWu84sLLkALDBzGRtSv1sV",
  "key12": "5KMYmk1LSPgt8abdr6ZPNAH5pnJ93UWPPexTttXRMG2miqqDMdTS67cbDN6FeEEpBN9UVGT6XCnWupGcergssycu",
  "key13": "2QCRm8qnPDUmREFm5dzBtiBB6ycfbaz4bngD3BM7bMcm3X7HLb4Zh5LAS3X4H8tdYQKW3MmQKbCDKz8Kd6S1A4to",
  "key14": "63bpazqFGerosUK4aGktc4SLDryVobCTQQ6VpfkiYmLRugoN5DR2oYP7rbWuYExwmsZ6WmM7HPEHcm4Wk2wvDZ8d",
  "key15": "55ijoRXLr8owy3XQ96ybZDR9qCL2uewtSaVLNGjiDknsXRiAFNoAWDoX3zRYLDo52x1R7yGmyoyDzBTG4SfQD7ZW",
  "key16": "5vR7Q814JpanbDKWYftsEJVLMEpYCrAyaN7ydp6RfTPK3AzwHUHLwJxd21YYtnLikWpsbFJH7QuY2fsvWSUKn64j",
  "key17": "5GqURYEx6LU4KW3FCAsbB2XMeD2ajAVFpKK2U7HPPxrgHA1SsXUUTq4KC5a4Vt1gN5LnNyir9643dYRnvimjBcoh",
  "key18": "YMbDxnF4vgJnSFXpw7AaXkvQcgesFxKY699audAGTUL5V23HSQeh38AuX4KX7Tno6ohx3XCABFTJtzvhy8DQrWP",
  "key19": "DpL6HZ5ZX6ki3M2V1d4s7mWQuZU2d1WS3R5gd8wUX6jfMBfBNBYzUoaM8MT3VjsgEG5WU5quBcbHaVHrMUiv88R",
  "key20": "3vX7RnkNgP7mvMnRcJEBNdbFn3f1jhUBhGjiiywAruZ3CJKwvuYfVgy29Kpag3o6a1ieQb6fZSVG8hgNTwm1o1ry",
  "key21": "5oDzidzMzPbiFh24JsPhPWxfWUZe9jmP9Wo5MQvMVTr2MfH4SMynaFpU4R8PHeF2M9ZqtEQhS4ejG7Ju2VtkYaMk",
  "key22": "52oo8vHFhtsfpQhQLQNWqaUDAiZA1bScJwEzNLCpNGk5ibK6afgLLVVVmKni2QDrRLLchix7ghuhUmeyzwMoLYwX",
  "key23": "mrMJvzhMCobL3ht1kxotkENFCUxeGvGXh9AusXBj18pQwWn1Fn3f7DN2cRxCz1qGodfeZxgF3ZdqTdXNRWDaaVc",
  "key24": "2n8c9PHeTvbMFpgZdffwNxPWkVdzVcyjQs7YHw1nP7hJ8853Tg44qeh93trHkxhYj4HE44Aj7U1WZeHr6CmhpwXQ",
  "key25": "kZXXRy76vQdCthEoKM4aYdb1BkdxtgAGFWiR9WkM4gZATJZvTyma4cTitzJ4aTZiJijxapVgUE4V1p8u5uZDgHt",
  "key26": "2x3mHhy3WG8uMWvTwn9fDSSVtXCiV9NvYH3oy6KZnUoarQ4Wf2o1g9Eb1xeb2iyQzecL458aeAPo4Ajr9GKvWuME",
  "key27": "31n6J6UUtUznLpBJqcSX5JFmd3y1yV77NR6poqiX4TorTZY9KRvxS4kazxyGMZmUDtFEdk2Zjp9REF8SixnnPTv2",
  "key28": "2XJwqHVdifgf1VpPaAa29yWyytgK4XCtvcVQqmQZ5y8PzDGQ284Fxmp8EWvAiirbkrQynbaeUr2V4Ke9pi3iXE8o",
  "key29": "cwsL9VPEfckmKRNrQC586nNdLbVJsL6yCK1XypPDRDJhhMDxCf6SWf9ErK5ZtL5TWTUNtbhsZ82MiFyKtzM3jvT",
  "key30": "3jYSYPxrXJk6z2oUsuNTdnkZpE7ofD2sjNwcJPZ16FTtvZg2ZDqGpyxnFGrdWAmB684NHa5e1et9irB4exMm1dH9"
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
