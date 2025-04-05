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
    "34WAMEgdcbQ5fH7UxgV64fY9AzcdChMtvHzpHvfp1mMbvoLUSBtsWFsmWdw5ieuwjqC8mrvwAPwbjKSSiGTNiw2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bm3Kz6TV598123VkVia3pvU65j3jP4TJJZJ42oQcf5CKysei3nS6BJ8LLBN2mQmpaK3QEVaPh4SaArEqYSDjQjj",
  "key1": "vG3rhxQbsBKxEEsnxfrk81RUE9mBDod9PoB5isoRRJ6LMxCn6nqFAPm4c7aGG5jstAPjnG6gWt9h6kpmQ8mCvnp",
  "key2": "3yjkyzYmAmPPo9EPvtPJEENNMyRoNTPuzioQtVdrFTNt2nYDKnGPYsTJtbWam2FLhk7t1WAtZtec1Rfb7voQGW42",
  "key3": "38BMDQQNLXG1MSVqY2iHyyDueuQ4LLxo9q4Zjjgofgj5LK9EeVsKgxDuwWxKQghxgaXYZER3TkCBzMi35GFrgYec",
  "key4": "3yjseADW48X5gEqpLn628hTSkSzoX9QHkWUfqxNH5XJzRngNogr7z7pxKLeU2onGFUznLa9oHPFe8S4LY4X7AxJ1",
  "key5": "fFLGSyp8QtV7b9QuwGErPBBLmMCFPBSmCHEw4ScDruEDVCdkEQRE42vXYZjCBxKoFtXLc8gZFRpfgBrSD3k58MX",
  "key6": "4kes4xioKxspoccdUnkViD69mokiLhCAryGmSHNfwHs2CBbn5cxiW8rw9akdM3Z3iufzcuKFrFqsJK76NrFUADAv",
  "key7": "2XSDGJqVh6BC5YSiyCNKwKz3TAFH5xSs7KgY6xrDVfasRAjB5uEbQ4eyi8GNDQjtNuNCjtp9ynBye8qHQoV2SgHH",
  "key8": "657enJS2GEbe2QkBXUZToD7QcZgLvHUGyY7qwHx3kzoRHfQUENVmjLgcmjpvaGLCvg5EZCBXa1WDzAf5T8pK2Ag2",
  "key9": "2JDctL3b9gegazE5wZ2knjyXt9P8szb3xHub8uRak1yabsNhU1JEXoZPyqQJUiTVuLHQWeSYkhH2CJpmob5q8RFb",
  "key10": "41QmviqdUHsD7Y3gfYUC7G8NqZdhYWvXX6u1XcKGjn7RwdnQn4cL87L289PaXKJiJMgY41LW2k2kDnhk7suQajfd",
  "key11": "4KWnEtU4V7PCYaw4HFCRhyopVDtCcCfwbnPDK6f1wxwnsm3ZEXUPzr8TZcgj9Zdjg6oh3EKJueZnf7Rrhq1hacwW",
  "key12": "2G2SiKgLJd9LbKyhUhxWyETWqmk9GYSskpu1XWBuGHk59GaUBUbz9HNE7TDEJAJxGF9TYWbHp761F8ffVMzW2FU4",
  "key13": "2JEvM2zzxa3TfRcunwjAGqM2jR3kYsMAJGyVijWdCJeAE7QLeLdGs3ksu4hxBrrrYc3titJjyjmbWL9EhKAwrccC",
  "key14": "4GifuMKHiKYqsNovQV36qFmo78NsZhRRhLtjGNZk1gtcXw7ew7Xiv1cvKcPTLwWMLf43XFTpCUUNY8mAxLRNdAV5",
  "key15": "5xMNRL7TcGrnSBJNPBPDcCnr9XnUYCrrHiecnV2yeVXxFN3duxiowuh35Efh9k1LYbvqRLhcDvytDqaVfH86e8Hu",
  "key16": "3kbxbTvurbSCymjtaMquu4Cx74eVDf2wkpUsTztnF8wPVYf1xsyPxarvhw2CYkuRBrMNZgknNcqdKCGWcYZTftQW",
  "key17": "2H6TW3nvbZdw15zJ9JUH1wsMj8tiMsvecaDYysbMC4FKsfH1b8Rued67g1VbBTNu4C9DNWpesX9m4xw91nkD4RVM",
  "key18": "5xERYh18gbYMCVgJyKcKCeeTrAcuHj8Y77yvCGaVGMKLgi2qrfYF3HdnSnUuCiCVjJ2qijr9MdEpsxNsLjrVeVwC",
  "key19": "4tEP9kadK9vMob6vpjgn8eP278ErQK6yVi9vtWWQ7mbPB4Sx4bV9bHPNaYsd3pyfuzZVN1JT4S4ez1BAErYc6m52",
  "key20": "2J9LfNj61FLA75w6t1XbDYpmX2QrwDYphzMejggBhuT6mzK4iZnh8thfMPbCpghVDHeiHwKTLbTfja3uNsHZ2bwx",
  "key21": "4fsRW9kBnjvjqqLLEm8TMPL75uWj8Q26b6iFBjJiYgUiP4kCDsMWHaViL3DrrwJs8UhpNWsDs8BTjX8h7SQmJuGc",
  "key22": "Gr2sFAhM71jxXmueisCKoF8s8XWp4HYaPgSaST5GaJw2RgymBp3jBLBqnGhxyiA7ii6Zg69pMPhGt6TFSkKDyQu",
  "key23": "5jMfawTQXvRsuJbm5ikXiev4wi8ztsPD3U9rGRPMwGHZjyPcstYeXiRp4Le3FU9YdEuTGXVkyBRXHVPUHumzKETN",
  "key24": "3dL3g3SbSZbisfJs12aJur9cJt2v5sLmTgUj3WPwNgz6ey1VbvZPLfcqJoWtMWJd54mBn1j8PTA6X1Nfpi9SYLTW",
  "key25": "5napK3zAdfYCe3Gs2eYuB851HWP41brSufqwFPGfzej8yW46b6WphPJWK9qkDUi9ocxjg3pV9z9cKuEVRmqPyFYi",
  "key26": "3VKpVr4GoHdaY1Xqukrkt9goVMzJ4oCY5B3egxyLD8qLuDn8bvxcGP2R9xxqeRpZYVdXseNy23vD2tGjD5NEXPhH",
  "key27": "21376Cuw2cpzqiKqAFgGTp4UXGqyAs7wfMe2pp6AhK5DYr8ZY5j51zRe2uCc4czCsPEsb81MUd6WNiHMG9gLHjgy",
  "key28": "4Xq7ufnZs2R4VW7ixVHu4q74R9PRrLhi5hkBVkubm2Rr2ea94UT88xZk1sDksshPNNUDppowniPQoSbv4P5sLKV7",
  "key29": "5TeDuCEthH9saLe3ijw2RH4La6XkqzT8UmK29RaPEnRZWKfFi5Cx4cMpLqChA6ZdRdPEFB4FhA783RTMZ8RRq18N",
  "key30": "3P63wMnkpvQCtbthNJB3Spee5p6KyhSZnU3A3p6W4hC8VJnyUpXgi7j2XkurhAVASNzgNVDhhGtRAe3CcfuynN8Y"
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
