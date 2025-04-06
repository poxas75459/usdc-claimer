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
    "2eoWcYbuDgq5dGauSxWApwb7WhWf5SP35dMu2myDkUiVLypvm3prS4XeZU4GXbHn18UAcWDaJaa8m4MJxnX3Jpvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4afVFbDUVzeffsGNMo1XSAotxkuG2gA18CAuwgfoFphxDL5NM6uGmsJjN7czZKLNmgp2PEUcSC2Yva4Va3uqPqCn",
  "key1": "5fDxhzDZxE2qqd1F8q48serSzbZPARBrzfByxkpTYoBFn1tbUsa2bQiGza2dCe3Wd8booNu2e3b1p1RRoFgFQmU4",
  "key2": "P4CT4uP1JcKXvGa2zM3hNKr2ZMHyMp9J8ibdNXpq3KnuRFycb5jtkKHe83aCCqevciPAuQzZbL31uJeLM4Eo3pP",
  "key3": "31iAYfwCqSZuTwpDAcAxUq6WyYD8bPmPtzmu9Sp2du263Tv9Pi99YxkNN1mF75BsPbHUauEXNCN6txjimwYaDWte",
  "key4": "3J3NaffLZdUEMQDQCiWmRffKg1WsmHdX6Wq1HAJffWqmVMsAhhzMRxpyjYTMuVsnscz6rNmsufixB1FAgVtGsNnj",
  "key5": "37mc937dzsjJdzWcnRFWssM1AcGYbiQCty2Up683aiDpBepQbXmMqVMPHiZ9EKX58oMnEnWgtgxWRqf3hmq9SJFW",
  "key6": "2rHn6sJJKVz9LA4USys4QrooNXt7uT22qD8DEyu7vKtt1GNLAmJLdu5oN6y4CJaJ6gdFTFda2Qrj31kEPgyXKK2d",
  "key7": "hgUKBw1F9h7MD1xW1zKkTiuS25SydS2s6V9HcxzHgHyVtxGGCYfa2ZyDZaPB1Ydjzu8Xe7eHgrc9uq16jJnvZM3",
  "key8": "4GV1PszU1QnjB5KBeahRHPFSikdyGRq3xTKqsDLLi9YaMhq1uQpdeKBveU34UCwbvoRHiWxAgQy485V2AXE82Pth",
  "key9": "2orGtkMdCWtfQNKCMBfdKR8iSnZc5bLtwsLwKVYT2W1uCz72pNtfKuq7opxb7Bw2hrP8nijffa4bhqb6c5PgYotC",
  "key10": "2LBRCMfRsigDTcfH7fUzN7dHgoaF7KZqUAtM7VDDumV7K6RVmrXzZ5ugFhjTc27VEVbEU6YbfqNmPuNRgb9CSqZW",
  "key11": "5mhRi6s8ZLzVgE2TyrFLSFBD1pwJz3thyZ2CnP3nWfaGXF3BCnX5pEsWQu7FbfR6FsvPNuKwFLJGAVDkFUD7CUz7",
  "key12": "3VMmjL8DTSqAqzAjffSrTguLRKQdFsykw4novSCiEBcw53PNnzLhfxSMFQ7D3aE4w3ZJ5Yehg4LhdiVuNQVcVQA8",
  "key13": "31HLDq7xTmJ97Y54qgbbdLVZ3DM2CuG7kbvBiWyoPySkmL4ZpRucDPU9eoGmDBXNsAr5EDESfhjdHeZTGQZ9DqnQ",
  "key14": "5xZYFGKQ14Ax1r1k2pTeieTXkd4EZ5xFQuBe3UEsQMe23baJkjG6kQTaPc3ocuzcccRnpxqfr12YVDxMtCurFJQt",
  "key15": "2b6wK9CUcTcXnBhqGujwLsP31Gf6wFrL9ozw3N6C2NkrmxQMyxtA19GgYWwVcmkpCLzixLGBPSAAcM3mbi3FEKtc",
  "key16": "2ju7TZdhc8M9pwQqsBMAekXMGoFv4kdE9jnCdkSMvft5Bbh3ZSqoqjDDyLmKbid38FsXDD12TqSWTUP6HD6VjP6J",
  "key17": "5NesiJJXvpxQ8aFPUUeX8PGKpMjmj4pzwWCBxb7B8PUMjf37Z42t4oFBrPSvtBd6WUS2iw8dY7SW25La7LiTq957",
  "key18": "3UAksWwWQhT4699yPGBtdk19ibjAmpUwGd4tQHawArKcknbWKF4sCDdr2dG9sVZMg4832NyNjMt4h8m8VC7TZphb",
  "key19": "4RkcX3fUZugQkinxzriyrv37SZ1J2U7uxSrJ3DfDPABQxbqRBQju5M9CHxGf8Mo7AJFDh1aE2TsDFpGFmtpSAQWN",
  "key20": "XPDYXsQFgBPTXJSmg7JV8mVVz3dCrhg3Xm8crz7GrU4LM24Qgn4bvfg2ySBYvrsUg7LGuBCGYiyqtX8NVufzofQ",
  "key21": "3dvLmhfvKfUqyq1peiKZXBtYLwL9mc4zmnkhc2JwCkLKnkmGpSFKH3W4PUKo4uCgdFrnfosuRgUEqYiVtexLX9kE",
  "key22": "475v9nXWWDGxsAcUta6UtRr25xCF6aKt9FbT1Ya3vsHG8CedEQhcne2dFD2eEwHhaUJHtvseebdpEXffTUb3GATM",
  "key23": "3o7EMSbt2CS5DEJZYQuAgaGDj7QcTU36ZCeDEsEjxfzdWhJhhNxuLfaKj1qyFW33je6ZiqnXSRrgNzVuWwoxbs4w",
  "key24": "3ubF9wofZwZQ9fTmWQk7NTXf9jDZS3xP4K7EthXfDf6xivT3sZRtogm69bJyNqQawxhWSeGagXY2jeiLimDLRRUL",
  "key25": "32rt1Mpag5FUfD6HAWvWmiY9BKzcGSd2PtM2sDBHcH49u6A4zQBD4FyWpsFLsGoNW9N9pr7AnPmijomQtNhe31ki",
  "key26": "5CyU1H74ya4uuRwnf4tsEBJ4MTp8g1pbCL3Pe7LLibWcPk23ZmynmNjfqiBvMxkJNBTRRdDANRKs5mUZQ6bBLDfc",
  "key27": "SPqA1HtAjJSVMt3Cp76ojxdNVUTbv8Bceg6wu759wc9xCsHQK1VcExUzqUXn2rEZbax5MubWXFrEstPzVY3fs5n"
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
