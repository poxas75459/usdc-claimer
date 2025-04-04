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
    "3VWMhP43DCj5e5JEhftoVMiGdvvLrYZGfGsQcBAbn7gfYpVPto3TpVRoKMCkJpSM7hfntDh5TeGrWfvw34AKUJjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMdoHGHsCEjSAft3WDwkeZ1avyogU9s8jzgQnHSN4sug6tDmNbNhunEhmTmNCcEwhweaYinddC7N1u4VGXU7yaf",
  "key1": "52GhxDaBSYSjTedCRbd2e6wRBw97CHLZpT1Ttrk4Upg3Xk4hi4aB1obNQRrtsrpNpDSDcy1LFKSscMPZS9dnV72E",
  "key2": "YNHqLjbEWWHGc6PeY3ovVanTKDZiN5rRDuJVymFmLSbyEQPkYNKJuVvjUTNdp4vijwCPQTKwevictop6BwfhLPJ",
  "key3": "EgHd48ruo23ykXoKGU39GFkvfwmWTuHRdsEjAa7MNZRbH5eoTwgqLARPfgyhzje9Egke6HCmGDVauRipE15SPjY",
  "key4": "4miUFCTx3RZ1N7py9YiV5gYWdhsgkypmh6LtaYD7DpMHRK3QBjt5BHEctEvZBd1oTXj4zTgp1uNBQE4w4KUYeTnQ",
  "key5": "Bc7Ap7sUDX77H7Nfy1g3a4vz6UXUNsYge5weFAA11vQ3gpcyBiCVMdCJBzQnLVy6w6sKHDi9bB1Ryq57fmhz9hN",
  "key6": "5jcrUjKMUFrJsvATM1nfMPBiGXHCofzRjLninaFKbhUtioG97cFvf4XBAYgb13VRtoH4H3DE8Ffybek3BUduE4gH",
  "key7": "5gMdG2NUD9L5xCGkw3f16VMsSY3U7U3jsq7v3cHRxr3SKFTDqiSModdsQZTXeuAMCRLvJsP51pdp7BCpFpe99Ny3",
  "key8": "EHqztQ3gEfZP4FSTB5P2gZqcNJbfwcEqRsYWmQFKgQy733WboWq8UAYDFnBvU7gueAj61kex3FTT8sjcNMaL82f",
  "key9": "2yrmwYg8vojLVgE94wxt7M5sQ13AdNJykYTt9J1XY8vWA2pvcwyG8zb58y1bGnZywx47cCidxdn4svxpMu8PsmqN",
  "key10": "2D3HPEa4rWQw22mRpgt2o3SynnS3kuZ6wXvW58vRy4k8A36pez314yPqKi7ZgjMS7NnzJ6WXaSEQbGmGAkZNcU4x",
  "key11": "2E6QFaoWy2XkVcxLS7a2uAdWi1wzkCWsnNp2XiDc6QtaqEC2zwrGdHuboZhvbqne2iTokrGgedTNXpn7ZZqXpkEd",
  "key12": "4A8sV2tu7igYNV8wdDozKcv2EALVGUWYrQp8mtXQb8BdtjLjM7ycDhbkogifoYWqhYKWRYFvAQf1kiTQTPVKJfLH",
  "key13": "4d1FQJ5L8zBxjbVxgvs5AkFZGoBVR6kbPqDZ1WF9T52ApWiScJvsMxzJGHNcw3E6bD75ERG84avVJ28XQudEkr23",
  "key14": "4cLruzqrYja6k4cLMCiDj7Kwb3wp15M9U5ULy8CYePJt4AekR75soV9aiGWssyouxEcyya9nbSHLLNFMPitWCn6V",
  "key15": "22iCUkanjZnbfHhsQym67cRMfoXHELgxNC3YPPGsXbjUSMTBRwB4nvN25ynRmjoj1ncQZgKxRZYCXsQ64LdBxF7R",
  "key16": "5SoA2GyZsEPgyfVBeRqWBfy2mXgzkgRhnrZC7Zeq8kTRVyKncndDiwgiQmt5Ah4bsyh3hQn2PXq9T4GFZnddctke",
  "key17": "3v4nqwA5tMnPkg7gdLbpVrsbHMYuiCW4baF3syWDZB1vWrkjkycoJXEjM94bmsY33y8nkvfbAApJwXM2JamzxmXv",
  "key18": "2mHga5DAEeYZZZDNqanLdXgSNNaY6tozqBMKCRqLSbD7Fiwof3p1n5XeqDCB3zsaNQg34SAo6Latt7fxW6t1pYxX",
  "key19": "XeBvERozd9cuQW9DrLMbXNtCVJN2jY76QZhHH5hBm3SC69aYRWK4mG7DLxppH9t2vjGhd4QtYWjcrhjPqwHzuAc",
  "key20": "2idA5erQGrHes5qkCpPfpYrbNWYdnD1Lukb1owQPiwC6AsriGAs873Ev9qTbiXsnNsNjwtsA38ap92nBPARa66HN",
  "key21": "5yTbYNvH3VNJLTR19knnqKaMMnYSag1dQ67fkZUzdPFansdwJgrzsQh5bSRKYsKK4X4GHPkqXpmKaqsEEYzkhYcJ",
  "key22": "4tAwpEGQMTEBzyf8mgSST7dSEM6H9ZMN46unwyMA5iWxk32FfJ1Kn9Jw8s1V2j6JxzMK2sX16iEmeP8YyRLayDLe",
  "key23": "PJkWbuSRhv4sN6ybKm1ZaENK7NzbDrg9BYiG11yT3qjnZMDtQb2RDqW6k4XvRihPYtwizPQZEhw2wv77WAzM7Yk",
  "key24": "4gu1ScJHK8MhUbdskw9jc2qLpZyWKzA5v8tB9a2eRxY9fwmDWS6wvAmnU1mkBm9mWuRrWNvRGp6gfrnh8YMVUpWi",
  "key25": "25jQwjLej29LVHHhvPN2heksBUMMvvTyuUP8Pk1UkztKdDd4f6Me5QKCRZ9YkGDooqCpns3LKgZUjKwwLCKfB4MA",
  "key26": "5pSjGcHTeJL7oH5XixirAJxFN5SYi2C8mEuVJpmPkjQuoAKyVJkpNXdx2LCjdNXC9ZnFz92rcxVpoNxoivwKFSgH",
  "key27": "2E3B18mbC4dSUnV5SKKKarsGm7Gy1peHg5tsC2hNonRwzDGMFCDA8yhiSDr2Rgo6DtpsQLZHNq6AJFiYg251WLqv",
  "key28": "2Q6ntvVaJUUXuNNneQX6Jd8hYyMomiAncnPjo3saxmvo3TzuF4WY24Z82UWwQV4xfEuUaaXqVCA9j3ikDErRuRhb",
  "key29": "4zU7TnMZMmyBaT5Hy7Z5xebDReiw2wrvGSFLGMuV9A2XoQRinhsoufrAhHDkSpH2dSzKsWz3nCgqa7mFKQG1heR3",
  "key30": "38mNiRmbbwRhxLDetsi81jp5G4HGMWpCRiH8fWPxFaGS9h8FmPaLbWRFQekHne3Lb5PBm9HqbUrjk2N8M5DAguCq",
  "key31": "5sLFhpXmbwnVCvcrfQB5nE2TfFcsMrYfRnxemYTUvCYioogNmpaRPawmG3pdvhRtu731UdeqiWtXkRv9JZfL55oH",
  "key32": "2oj4V1veHyNf3U78RHYaVNVL2c2XSSBKtJZyV2jw9RrN48Q969h7LBG4QgBE2tUFWi2bSLtXQfMHUMR1kg55S7mi",
  "key33": "JgKNY9W7hpiQpmApcSVSK3ESUaiKj7fK79ZdZjWf8virFnZGC9cqZEkkesQz5NkyHTCKQrEshBhb96cG1JMHaYn",
  "key34": "2ZVQ6fduRCebWFnfQb6x1M9TaA4P6z3q3FAuCAm42udETqDQLxfW2GTUFVa4bNyMuh41erxFEdc4uCZMiuUuLXUJ",
  "key35": "5yrCxfYn1SfRmLtriQybjnAGNLDK8AhSC6krE74caG75RCxPaBMoZwLQh7fS5MjHoLWXRXw5u6HxKXHaN39hhYsg",
  "key36": "3Xjw7DmTu83o5ZLogt3S1i1Vb2pceznzS3JLffjmkoELwJFjMNHJGXteCZiwKXaB63etUkHQE38mcR7pDdQ7hyc9",
  "key37": "5qFusSC9zjPy8kPAPeMx92n82Sm4MpF87bokq2EiGjDPzhoSMspEyTYyQCih4LKpRn59yVJdzorqrLvQyzagRcAc",
  "key38": "4ExhBNsEdMJRQCFuMGzwDzDuxVAXs2TcD6JGBX1sMoXP3HMYZQ5T76Ki5UWLndabrgcpXpFBQjDsreu9kuwJyZ4G",
  "key39": "4dst5Kcgdir4ZijtCkSMcE7pdq4L4vyXMZYYNd1NbsdsDtk9JLnKvL8HFtg7iwHWA82DaDiJNsJD6XByS7qZLb7a",
  "key40": "4mr7jjVbb88NfMDhDGmmudSMHPV5UGzBGempAMpiEEcXKcsf4vSTiXru8LPXW7uEZZXrFxnm3EmWhzDgrwGHcinA"
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
