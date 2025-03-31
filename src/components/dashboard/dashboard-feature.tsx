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
    "2g16bvLW4CKWXEtKrEF82zqXcC8WVPQd8kAdikaN2SjHL2rTNNAwkEFuNhL8n9PYCMma5E7X6PxUQ2kzx2f6xqNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YmpnvbrFNLUDnFkdDe9BRfAa77EuFSQvgW53mugZ19ap5p6mwDZDyHiQX5LNrUhwEEPRWjXLeojDDTL8kLoyX97",
  "key1": "5qWXu3GZYmCv3cVUz2k1g3X69rEGGCvzW1xy5WQVNp4TLHr3E8HorY3X37dyP1kbfRhANc8QfZunV2XaQTTSvAhw",
  "key2": "2fxVB8Y1konZomiwu98xB5gK6ctEkbYAYCSkBWecfzsyLZrb9E6hC8EKpSR2jNb27ZnztLLEAjnYLeSrvJvCsMcK",
  "key3": "3Dc5VKHQvBtniHDAYiu7K9bU8uqZgXNxJ2ZGoNbfuwpM97hQW9TqNGYpdemehse8xL5UVFCuJrBuKr3DQZQNGxdg",
  "key4": "23fAETRTL11c1ix6GLskKaNQDKJ3AJ8GDnR1LK6u68CQ3efeNtbANmPSaBo4XJnVYY7WFZJMr3RwjWtSxWzXCNgD",
  "key5": "3rE1oBSQTxX5X2yTwEG4AYvECRncYvuekHkxKSdUNS62K3Q3gsRjyq1MBN7h4apXgrtKefNSfmSCs57agEHyv8F3",
  "key6": "5pmJDyTfEqaz84H669L23PXjGVhgrdftR5SSbzr7V49Jn7KPTDucL1DyTZ4p61o3mdTeEGkEKQZmkCGdyK4E3MfK",
  "key7": "3Z1vZwT9XRQdgARcrtuY6kgFQYZtC1Qd8RUraCCsvZFSfbdK5EdgFN86YSHs722TZaseFJsgvvyn5Trcva6fz2NF",
  "key8": "3Ynz5kqaQk1EnaXLvzUouxutWK2poLj8ussY7Ef2EeLZ9QuwspiSspUdNBZeesiRMpNGuZaThjyjyENFAQLnhG7P",
  "key9": "2qLpupYEKprzenTwf1iGdkEdgotLQwS3fKdTqpkuJ86nJnPNMZ1gaJ1UZuopCvH2fMPGgpjAnA2C8aSgXwCRkppQ",
  "key10": "5PPwpUY2Rh4qFLZnKYWoEJTjVoKGNtZyU45h8367m386c8TLW94VkJ2HFvUWXr2YrcRr4RsDUbCwc8RMi8Jb5kfo",
  "key11": "5pnVhGJxx8WBxAsJEunnnSvr9rMF3RmT4PhoEwz65yWE6n89ZD8ifNjHbSRBG5omzhT32GSQ49hpYwrV3n8v6GkX",
  "key12": "3bhqsXXx6pvmELNGLzMwvomk8hvuyFcwTjzD7jcppDYYw458wW3f3MfyGKXUGK5MP1Ut6fyUWkqeVpdvcYdyzhcd",
  "key13": "2V82Qdvmj3GWhmSaJVRnerg9H5VyRDPGnrwoBYtHdXUctR5bc3L9ttj8cP5DVMqErxBz5LYvBqrJUm73ypRWSaBE",
  "key14": "5Dud8FNrP1tws25QhjGB5ozEWYEreb4ZTAgGYBgrDVhhaz1i4C57Yo9V2u5yWsXrRJcGMgp7svcPBs8tJa8VKd3J",
  "key15": "Dikthx85pxb7AzYy274Ff738yRu4x2dbbtQpLrnyy41MioSCnstDRCFWwvgGB5N4v3RgVDT7mZmczxRoDbQVku2",
  "key16": "4MTMHy1FEGT579DPP2y2SejhuATVJwgtQxGVaFTiSqS8U4Wvj6uYtSwxV7jyLCd1uMNHJcTzTToiyz1Z8nPgQ91Q",
  "key17": "3SwocRptGf999EW87FoPEuvJRNoWZwuA1KWKpRCAfY6g8Aqy5HesXs4fvNkVNfJLUcgsrc36V1gYsQ6CeC5wxZe8",
  "key18": "5suQAJt1sXv11N3ZT6AFJDdpT8cF9jZtKdFL5DTtvAmsL5s3wzDTxFQeWfb12tSeKfRe3YRhH2SHcSba9i8pv3Ry",
  "key19": "2jh6dZVE33NeYZDQ6mdf4H5F1ko2mm5LPTUd44tVXwQYQH8qwJE6DYnyi9BGZdDko1RfC79YX8MWt37z2tNL4rKW",
  "key20": "4AYQGUj52TYNMaiS8WV5aNyyWg3vdv7vLM9uC7ERH5dJkJDp3mhibMyvhD3UZCiYNLRMdobMnsxjaypRaHtMSvTb",
  "key21": "5X7PP8f68eaAdo9kEtsfvvHsYebTkBKjsDumrB4Pm2hWF6suiacgcXZAQJiZizR4FthvJS4ir8B8qthsvgLjLtLT",
  "key22": "eGv424SAm5utw4uM6Nf85bfG95FWHUxRa6qqj3roFzfrbDsZ9ZXyVnMiWrcaacJN96eapXxqafUrCEDjFgesrsF",
  "key23": "33hFXaRRY6ZgAdmehwcJKySaEVccpifUBxtMAW8B5MckHrkoQfnvkgXHJAbwmYFboSn35qi2q4TQkSqhEEQB6xsT",
  "key24": "4JzwX31VXw7cG4HQSMeYeEzJJQcCzFYqRd7tZUBa3652YWGZU2VDM4VC6Po8DHx89E2ke9vNmSK1yvB4RgVLrwWZ",
  "key25": "5eLC4LcxjSupgdRLhfLubQUr45kebhNFC5nVyE2HXthn6kGZVjxa9ceLHfo8WC564kDtUNXgExYDPRhi9L2giCsn",
  "key26": "ZV9ZPK4NThXE2oDBARQahSWvxs4wgK6MkNwJeVP2wTi6GXZcmMFcUateLh7vj5mJtTBkuJLNQbwNhKAcfHypn33",
  "key27": "5toywiCoHFaa3ew8BErRuzcJg9qNCJSykrXMhN4yvrD5Gj6vf1S5b4FoWzphk2VAj3LQeFnXQnfrqvaiwifSqcVd",
  "key28": "5s4dM3wfWfnFwwcdLoZCQT66x6WQgFfUBZzXFsz1RZnmdcTiUMFMYPfB3PtuHjS9iMQ62GyUrchkSi9bV952catQ",
  "key29": "5RN52TTmo3Uoy19UYVuzfZCbVTvHcPyeGmwaSeLcsL7e3CYWVJrKJYK9BzmLKc2T8EyQm1GTgyGh7cv52UgKJVx9",
  "key30": "4bCanXGwni4gVnTBaPn8w69DPaVzwBeNhwVWEm9SL5HrDbYSjfLkxCQET8sanpYfxpVk1zHGURrrnXc4exREUgVf",
  "key31": "2hwLdVxufLdNp4MZ4B8YLp8ebMQ35PoQ55JecPiXc2VidFgrg3U8fE95sJhBYsBSbiByVf6Ck2UmoRA3eQsyHvZx",
  "key32": "2H58Y2fMy4w2nczWDGfUy2W8CMzgup7npJ59VJqWjgi4bXHg9ByMXxE1NWQ5Z7aSusEHESLSXRZJS2n2WeuqbzJq",
  "key33": "JzoHMZ3CuiyiZenMLWkAWYCtvAB27ZjS3bP8xtiSbf33CKoZGQ9PtNFa57dyQu47FbCUPNar2pMHmnayzAPZzK6",
  "key34": "64fjEC3hZYHn5y6Bbzxq1GLEvo4umuLn5Up8emm1BELuucDCWWkf7bJgwsQzorVMa5SozEJsnjucwshWGaUTxxH7",
  "key35": "54tiQUtFRpS4GnNZxKH55XxCn49dtqNuUekrSFdUMnnQQNSv1y1yZ2QV7yYCGGwEGdZNCTW1DDsyjJMghvm6eYv8",
  "key36": "4grmjbM2dmotZg7WZG2eBWSrN4s5z4zHDGwu2rZV4nuZkZax3aQjyVSmJHz1BAsq7bHvgVPWnaKr3rh8zneBuMbk",
  "key37": "qVNeQVhHpCWXhTy7GxxGjHBVvrqdq2WadEcBQbsaU7vqwwe3WVTYF2jtWkC7b6h1dsrCmN3i6WKBXzf7z1bP4Rd",
  "key38": "4krSdbYebZPyicyiQBYtKpyV1Ex5G5dk6kEugyt5nUXmEvm7DQA8afMMi8TRtPHRahBZHR5i1WSHfQLsXvp6qHez"
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
