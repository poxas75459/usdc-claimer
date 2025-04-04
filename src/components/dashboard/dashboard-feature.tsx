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
    "58sZvckPJGBiWc4Pmnon6FTV46pAbkCw6WRExnrg7rUYks47o3JRPwzL2d6B3RmG93heP7YYhJbEv4Dz9fZYQbPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCH1AJdSmFDpvLvFKm8zgzf5YBEPPva33YRVmjTczHaeimto5Et25jCYMrR2jwAvXTc4D9vhNwynaEGMu8aJimQ",
  "key1": "2kkh7NukDshw1LSk1UsnQ1tYnCgS7u9DYazsCKu7mQWkhuU6BYe3dBxtvy1wQ5ggpCqRbWJ4ogvD2hNmnUeUB2dp",
  "key2": "3C4eMA7xSdgM7aR9LeJ93n7Vx8AcMWStQBACxZdTzrm92tBXd8V9WAZJMFTJ7kJd5NQXdvhSbMatmdxaC7XewhWN",
  "key3": "4SFVsPXuc1qAJD6iLBpFWnPiyTa14xNdgGXvNkZcAVmiLzYpDUnpDHDFJriRQfWj1joxcq3wegyow1mpxmQU51Pp",
  "key4": "58idLaigKrJjNweTbnsqYZ2uF44Amsd8rgdaBpndH41HkQjoNokvpch2b1azMGWuQKuHBZswTKiP4JbFhgrQ7toB",
  "key5": "5M7eikLaqRWKKZXHwhZKCFLrApHqYMwrG8TbPUzk2egkuSNyhPjpEWxo37LYYvTQy5nsWZ7fDP8cmzGfBAVrZhWU",
  "key6": "5SJvM9a3XQuXaV16bRVHdQyanChq7sV2hS9P3SUMPmXDiJQqeRjeZHuziYS8PQJJ7RXYSTjLvUXV5TmRXbD8uNN2",
  "key7": "5sXr5a4oQ7gtKKXQQEZeAzMbp5rUm2xNvCVCBDu9aEa28we9YuXdahw2xRjuJ3URFBtWRTEtu2rfaGZyGv2fwmJr",
  "key8": "3HoeTBQjjk3X658qs7oko9M4TTtGQnH6SCiVHn9UKLGAHhKaGSmeRNY5CWe4MkyRbBDDqF3b1HTAHQRxGPHrL7wQ",
  "key9": "2Nt9hufJhvd8V2gFcC4E73qR9K6EV5CrdpV8PirDMGiTy8zFmVSLYHqRC8bshnkZTwmgfzh42BnjQHokTREME3Sf",
  "key10": "3XusoG7bS5jzPCoWA7ejhJyezYN36kLCFBnV9HwVzhxuirCf43KiH9pvQgBmuSMKT8e5byfEJqJUXk7JX9gTusjY",
  "key11": "3Tqp1teToRKojtN6yojMXwHKwA2DpbbKuTxHYHVy2Zb1QLaAwY3ch5c31Jki6cUNSQBfPa4n2bN8qzxgwZyRYXnr",
  "key12": "4GWbKKWzqQpU6KLm4K2a8aeqfU42BSSkF5EZcQfdp1CqKgXiJGPfrv2ENVBYg39kkeE3xvwbyzuDXVsRT864xeKb",
  "key13": "4RAKCNo2b2CcKsCZAozayQxRdwwxrXJgguNfE8uunfiEG1Bv5REAdXUPV8AsMASkezzksfVLLb9cHjyy7cY2GACg",
  "key14": "5VW5qae98nmZWaQdMwozYTGgSnXpNoajXb5KcGpZEZBvM8rLFG7NvCtDR8WVgzQgjjesM6CYoM2ZUY1sKo5UQj2X",
  "key15": "57bqoDbbxvxNN5rugmTSq3Qix1K5W3faGgCBVon1SCPP2JxQQ5gxhp2LnBGHLBm8jrGmCXxZGfyvw3ucyiU6aHVv",
  "key16": "ivWpF5qvsP8sk9qLfidbuLgjaa9s7ZciULvSpWheG94fSqptysd2FA4v2Y1qXWDxmyyg5hydoJmb3pTLuwMTD77",
  "key17": "2oXAHXMxmzzgN4G7CztdRsQgCzvN9jEbMRC4Fgrga8guLAwvq4ewCbxvzZNnV74FEDDy7nLwV8EyYNKy8bxXJBKG",
  "key18": "5U9tiLijNN515xzpKnnRfgBT1TjHRYrrv3a5jar3nmWNpFLhbxhh4xAoDEsR2my5KDuLbVVD9TChgKjmuxFrWLZv",
  "key19": "2aT89jra56r4n8GQLM8Ux6tPWRtVLPqKTcU8VXYoc9s8fFtrTFc7M65wDjw2i9SATiBzX8VNUCr6goLYXSf79gzV",
  "key20": "2qQGsYi3t6Jnzxz8jzgfGo6Xve2CkvVsbmsLGRFyS1cVoEEkPDjgowEJ3fPMFvfxE3MNehv5Bs35iVtV9ynSQ2ZD",
  "key21": "4QbHvMECX6xjSddtBbAkDCPZcoq9nft6LSuJ9ZBDayLTqJ3FeTnHDJQFgnA53yAAToLCBwMTuTqBmYzoS527wTPs",
  "key22": "5i7Buei8eMUV26hgs3otJRXkNFuncqZzkxxxSRdvEqZ9E4kfEhA2oZdK1GroQSqwYQwejtMjv5mRQJYXGFXjwfUB",
  "key23": "2DoNTo6E2EhWoxYx4EQvN7KCs9okHFWz1wi4gFNk8jxdPRfpgZU7WjUyuaDJ2nK66Wp9idCifEF3JcVGmKzyQ9t9",
  "key24": "CzgHGkpFPVPN5VyMWwtr1D9HwTSmtArJm54KTf7nL645PAvoM76ERc81VL76F3guLLvYxb1VHg4UTmDdB5VcWf8",
  "key25": "3GEwVmPGHVQyjRVKz8knYUro8bXEkrRDtSCUfWUKZtHMYVjjTGJvR2B4cE3u5i4QPc9pDs1f293j7jQUagMZAGKG",
  "key26": "5n8tRCC4FpEgkHyEEL9rNTfKvxaYSA1NQR1X7JY1jiuTqEk6N2cQJjgwVg6Fc6CFxjz2FidFKtu9zkYh4K2KZV3E",
  "key27": "4Wey7bo8oxdZRQn9LWTK24eb9S2tQU1ss51qA9dzvrWEwTXM96EvdvFD5vj8WnwQuc63Eq128NAqiF2pY33jMuoQ",
  "key28": "4Drc56h82yGTArMp5GedioPQzbmcX64Rhh8dnMQ17TFh8xQkzqbkp3YmPN9SyrDPvBZ2eLfENCDSz8dReyFTuokm",
  "key29": "8QRQYXqR3LwsmvqCBiSkB8ufYgfoNToU1tGnNo7NyjFF72KZ7cYd85zX944nyRR26huFoVvV51qhXqMGAAASzFS",
  "key30": "25xEAXVftnVzn4y6R1wXjL6xkabNuM3mubpz7Vewt2f2gh7WWb6CKzHKHUNFjgBwFF3c2jNnBj976mYJKfSUonyh",
  "key31": "573egoucjP9u3kGzDXw2L6k9Ndh5mBRy4nehZLtaRZkspkJdZAR5pdQFCCdQh1HY721xCSrYLCBRs4G5pDVUWw9Z",
  "key32": "NffrF5HPNyfNwxKhLvB3qaWxDHSrkCCyVxyHem9nyEvyWWaAZEHHgUhkmj29BzP8tFpK6xWdpzH1KMTfCAUk8Ar",
  "key33": "48k1YMQtU37Huoj1Ybo44MDw5tAmzAu1EP8aCjPsdbfRRXQ4ch3TYL6MVBeHGyypJpmhFQvhhzsMoiXdjvJvxqdc",
  "key34": "2mQWowibuSQGP83WU9ATUTP4ZCDd9jQzAmEqxr8pXyftMUg4AkbaKgTcGYC9riC84dma1PcAC1B5PtzyXL9DfjwW",
  "key35": "5E36S2bF6TcRYY2PLswQhpoc5xBQYGJXGMfmXDU4i2rQ5dPDZPYiseeLAXZCayPSYgRDTLGkNpJPuaF6iXnzmzjc",
  "key36": "2Gm5fb4HLdTuix3FV3hfshNCHZzNcSTfKHhUQJKDudmwPWaHqMkpmtCVY2MvW4ooBNQ4zpSByvoWD48mYZ6wzicC",
  "key37": "2dcmEekFMG9i3xEzZ2vQ2cdiSh6eyFp5EEW5DgNcH2TwqVTRysF2wv1Uk6HDGodoSYVyPeekps1Ckzhn1sjgjvrb",
  "key38": "2X117LiAP5o7j6X8PTSTqRVLjsp8Wmk2xwpcAB3D4wjMWXyWfwZ1WEHjNb8j84ZQwRAYprd4eLZDSVYiRn7bkdKy",
  "key39": "4GdxFPFtjKNU2pctvA3dybxF9r4j4m3oDovxg5DESrN67BWgk7nqzsrqVZ6E6befSTij9JUFyoqCD11uoWzV9oWa",
  "key40": "ASnVpQgNW3dLBNqmFbobHKYuPNWxTRuDx9hoGR9dMEnNuTFYcx5YtXcN7qScZMDhLnJjafzpvUXN5SPsP7BueCa"
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
