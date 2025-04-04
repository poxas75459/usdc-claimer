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
    "54YcEdQ9wR7TavqBjrVaG8mKFbBtEkootK1Ca6NxGBue64oTirK8VVmqUEMRvbM1mmqAW1w18EV8hyhFtJUDCLEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDgP9hWt1QVoGNcfGyKhxQRNU9NN4QrFuRfyQfiLuRSigBwCEW2xSCoZTYLjjRgBzMNNceBSt7MbKRFoXwMy3p3",
  "key1": "2VgJzTzZRnyuqehApwtRqSBFChCBpe4YQfSEwfQEAMsY3UwtmYzGutDhnR4Yckzh8yPijbXY5RZcsZSLTTRpNZp5",
  "key2": "2Dk91FcvMkobv1QxYkrm5EXBjxNuQ6nmKmyn5nStyPtTEs7RbyARj8wkNuAZGtNHtTbNPsrnGqoiTzANSVyFjNQV",
  "key3": "2yG5gbRPn8hjH8BxmoFvPTtELeFoKgbVQi4yLHLEKsFEdU3GKZ6D9nVc2r6hrqncToYUaVXrjdbsqhe9YfhA9Kuw",
  "key4": "488kGKWNLiHM4LbKeKoHgcqq9FN2WaVd8uJ91SpPLCEpDDkm5UWsUgFpj7zpN6GpR1hhobFGV2QvQ8DZjyw2VqW7",
  "key5": "55CdZmKmWYGcAnBHavdu6bov1Wq818wfcqNUmW8XCL7s7hvBJQXQp11SvD42ms1FUo2RXev3yo1f9HN9ur2xSMXZ",
  "key6": "4BXpz8gEirn32FU4kM4HCg1RSZpQzj11G2iJWogMGcCvzNXocJXDTJUEMWqoEVuTo15xQg7pZSSb42BqeMiAFRqT",
  "key7": "4xHvXcc4pMcdyLSkWgKnfBxD1Lr5UWjXdMD81j3rEg85wtp9sHRkEaa2RsEYZfPeN37vRQM45JAPDQ7nNAyqrfWn",
  "key8": "4hCLpbZC4eaG7rfhToFNNAigbTESXdi2RA9G71e1rAcd4Q6dGDxs3dzJQofdTZmBQVRwusTKbztgcLktDGF73d5R",
  "key9": "3XQCPSybz2AobswEB488izsP3iXJw2gd7wJ2kJnPKSGqqK7X7ESjenPm9z2kETYmcnipvNNcMCQKLjtPd9dsGFoV",
  "key10": "4xemVXsVDRbCqUybdboFophhT5VK6muLWi7vDrQyGHCcTDnaccM66D6EwziZwGE8Q5KXXLn9ANhWtqJ7AmFtsEaE",
  "key11": "2CKXByAuoPEAfbManLo3QztG7SDtuWaJM3CDFue4rfyDZFeRhQNN5RWLCAKdnC5Jo9UQ4bkaxri1mzckTPeqSqa6",
  "key12": "4sVnu7vWkJ5r2d4HXpUwLey3cN4xUFHaLXEXsegaFQ3A8j36FmeoS5xLeoByXYhRGuFH5vHmX4h6S63BCQ12jwcK",
  "key13": "56QLGAaufLpxH3PgJzn6htfgnUqv8eD2NSarx54c9yozzgGjiAsbhQ6WxYMRCt7KREF4Kj2rM1krtbDArRENLyyD",
  "key14": "2Hg4PzTXZKbxmUznkcGDV9qgeAx5nrnyJuwZgfh8S7Jt2WnQpFFZWmAcbd38rtPmrSum4F1GQc2iwfDvgAmBjKZ1",
  "key15": "5Mw81S9yQ7rgQWy29b5ck3A4w9Gz5CUvW7DMC7koEbhxwbcJGGGP24zVrsydbjwhztintJ7Ss8yDEPkJt3Ec1VaJ",
  "key16": "VTCAJnHjGR5eh85AXgfKtePi37MiaFdGqL9EkJYwVvWnWbUQJEKWfKz2YLiBpbu9wreShLbizGvacuYKZUpfyyZ",
  "key17": "3fKUDCk7tCTJvMiYEcBAF8aYG96TeijTHencoK1Mnk2qnffy9GCEv8KxtF6QSzDKtuJDJF8KZhuGDDisoQzzzP3x",
  "key18": "63eRHKwrLna4Bbaj5SG973MS8YczjKsQ2CaNcyQdmC72hh1ewBSoQgYZjZq3MWwv58nzX6mEVhq5ZzBEyv7j9rKK",
  "key19": "3C2UQ6RUsSsYFHkvX77oBFKjp7Gh8cxB7mBQwQhzdu3uFnAEYQXGCkZLg8pieQdaZAzTGHmYUt3BCLiM17kez9ov",
  "key20": "3f2qBdA1idxQ83RwirBzNKXCnnEHVCdxTQLw1C1yKGEKL5mFV97Dv2hHfohdXZtQhEVC8QbsaMhYmhu1e7j26cRy",
  "key21": "5A1DHxFChJrDLvvyrPkSaRNXMFrCUVjabptzWMb8fLWF5XZGdQmwiknuUPCS3bQuNspD8b9e3tWrBsrX5B7gEczg",
  "key22": "2PZDj1ErAeLfhouM8zDPx1nUMHUF9iaqN5iRpJMx4rNBQNZAFZEinNgigf5gbrVDAEZKheCFEc9WADE1EftPXSVv",
  "key23": "ZrLnxhXabkGMSvNrRPvuU7T2Fb7Gm56EWgGnmZva1FPfSj9RKCEzmFgRniPXpteF2eL4NRVdEuxRbX91EFSs9HZ",
  "key24": "XTcMAVj1RgxniVFiqyVgZeC2sidWVoF1gzRdNQxYrW6SbgauC5fwc86yH84K1w7JTpFGoWWDVfDM8SPHR4JwuDa"
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
