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
    "3qCYU5EMN6sP2BaFPzgPAyFsrMcd5BSeMEZX1NFDA3oczLhMFDEH1tYvebkRgTwzUqivAJSKzqhvT8W1bXakmAeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gnKBdAPvtkaUf1fu8JUfgBW9sL3xX6wDJPo7ZnsFrMUGqNwHE9UCmDigLURWgmP9EpFV3xmKWwWceM1BwhyeapQ",
  "key1": "4NSUsmS2KgEKMUQsVV7diQid3FF5YcKA4HFB3LB6P6BHruTiceNSxhrfgWQ4eoWSnmkVTmEv6uBWcnt31gHxP7JJ",
  "key2": "2FRamvV3yqGZC6eWafav5jrX8VsxwaApUE2DyDSjfeEyYd395HypvhrpYoKc6fDMnxHLsCMZGZbZizKiBmzR8bG2",
  "key3": "4FyWSAa759TtV4w4sQ5ytnXk1cXzncZoTj76tpvUWzNNe3Ln843MCtvjwucaProyVc9snM4a9aH61JhkHQ6v23GS",
  "key4": "5Dypf4Zap9y43Q1SCzynZmgTqj4mdYJVyR9FC47EqHGW3h8jxiAnhfok1GtpMgAyRXdJW3sDc5j1BTNSL8ddh8wL",
  "key5": "4FRL2fvUhWni4nS2qNEdCGrAVjvAFeAauWQXsC7nyrtVci7vztRs1D4vAVmtiYqkMPhWbRScvqzLkbimeKwPJEcG",
  "key6": "nL4Nvopv59SL2tYa4Kq8zCGYPkBsYXsmrjrsY7hpQNY4yH9M4jq8CqdSzU6TfcXNuB9RYvS2CRBVCMqEfd35t3s",
  "key7": "ENvMawYeKfcFJDzmH5wxEEThy69RkDHgFhN4PHS9muzVVbzvrNR4Smvx6QP9xCsfu2cV9DnVZacoPTWjRGpDERp",
  "key8": "37SwkbHCHMgbLuPQoTyRR4d5FcJPSLqYcwnxY1xKaXmK932BsWNQXKfFPR7K4sRjv9KxopvRm4qdApvyyrRMVtN6",
  "key9": "2J7Jy332FY5G8KrtoWyHc5DLbRYQEeFqeX6G54fjYv713yrk6zSrbMVxaWjYHiMEiU5AJRwstiyXS3Ebe8ZyCSif",
  "key10": "5qiKXf7Q3Q3c2oGN6x8yE8Ap5cfEiaxHXfqdr24unGiXrZksYeb2gTbdCF6rR5PH8zBhYLaGLV3iuxDTHMyn5NSR",
  "key11": "5RXforwE4yCFUNqRmLytxTQD1PoDR2ASGKmNHupBwmTXWi3G7HPMXcpivSUhe6ngXBe6voWWSVwbu8mBYzgwVowN",
  "key12": "L34qsu4ymGbZ2rgVLwsA7BqRV6zy4TKMiVd9jyyXKBEQGC4ZP7xuSRfxFMT6ZmMaEPhDzEjcptBDrJgUyuPDCqz",
  "key13": "3BmM2BhvfjCm6RxYgVGxdatZy8JzRtoohCUcpcRQPo3yok7c1PkwpBeyt7BYG6e3H22e2VRT9wcKWmynEAJoqbv1",
  "key14": "638wkqxH5GAEgqZWVyTYZdFpYkVqGV4Da7DJ96mVu8Xvqkvr6ss1KZvx3Zpo7PnKNCp5i9nczotWzWJ2P5sgwUcS",
  "key15": "2v3ZW5HighBt6mQPSoJnAbbCfk3wt8d7enGWwKvEqQtTaHT1PCrQi45WcuFVtgEnnAJsRV6Bi311kjVqPLtwyBpJ",
  "key16": "s6nuQM5YnawSaCqci7ob3DN4mftBFF9YwsFW2WZyEU7c1qZz9tAcWYhNJ2CX8qwRG8tjYxu1z8VM6czKhLDufUJ",
  "key17": "3e4FuTvtXGY1k3EezxnxuyUiHr2sfG73cnoF5qqzwUkhTKpQXvNt9EfkrNRcjNHfz8Ps7KjoKeNqzDLNWrrnTAx3",
  "key18": "3RXavWQWDdZaUqBB64DQ8XPvwue53fWB34UuRhvGBJxFTgi8LkHd3EGWYwLGD9BShgJN1V9ibqiLkwhHiYpqu6pZ",
  "key19": "46YSqFMXN3TMMjJjPdkoeeAYd795AcEeqDjyPzov1TUiuBTZwiqkf4mhQqh4ZpxWct9LTYL7LR35CJ5cszQhxthr",
  "key20": "5ozKFaU1d3eWdxzbyRgDqsGXJwXRSzJyc29jsMjjgy6g7Fs4cqxrnDiyTn8gGaLB5TDHppKu5Fyg3gNuWWwummKP",
  "key21": "3uvYiDQbqSAqghSm57ArFpF7qx3fniDU25y6eKXbenkfS4GoLQbKkoPMrrAGeAD9Mv4xq6Uy9vu6HzLC8CJmUAKa",
  "key22": "4opM6g9ifK1hg8iH76HdHrj4bCR82maV3TSu9stZMPUedoKXfLy6ZpnLkMbxurvLJirYpACyUh2cB1PLsVnEhMrS",
  "key23": "5cqdT1p4nRtdUWFUZdFMzxqW2XMP1dtS6jGxY3PeEsUc4e5uS9ivnnspbfZwoJHE238CYahM75aDNn6MP8pkMH5u",
  "key24": "kFy8JtPbejnE7UdHbMMuMtPHaWma9XZ4Er3v294b4Z6KGdyM6vATbm6juA33kVxwabG9gpH9SEFKrQRDVDPCXmS",
  "key25": "3t55AjePYztKMutmX4mh5yypVjWY143nhh7uoheB4cWsb2aBUJ7BxW7goP4EMm9xBnL9Qh86RDAd1yKBhaRzCuxM",
  "key26": "4Toc66SSBibS1RC9Gn9GHvsymFYVGTMDrmFVw3J1XcRGWbUE2ouTwtEq7GFTE3CsrdfScKxeJgi7oC73kG1Zwvpg"
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
