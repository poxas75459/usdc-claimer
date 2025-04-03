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
    "Jy4ywm5Fe7rnAMCNPabL1FDSCrn464KciC9JNjNvrD5ZgWSp6RuKhEQCG3hH3LmA7XHUoYvJ8wQRTh53JNUYtL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNykvoNHKDitdZQtfer2fLAqoRDiBidvPpEwpaYeAkWFCLtiLJ2V4aRnkx52BLn5VKjTqHRCVnEXtaTC11XhMVi",
  "key1": "52Sd5HFu32RyjUdiSifeXraqSnNJDKraVzDfQDadVsysGjHrqhMP2z27bL6fmagTwfZYpZFQdWknV14RuTCkigDg",
  "key2": "2WXyosacTTgBSuHoHZkqKexxcuQ3ZPZgaQ9VLGQU7o58PGRP8jaiRtG2oFUFJ4cVUkWL8CeHMF2VVCxmJGto2M9R",
  "key3": "4d3KEUZKf91zjN9DCDKhbTej6UNyn744U6YK5jtAmM7yaxNxNKvmibg5mikZL8m85SS79Thb1i1VeUDNf6eeNBhd",
  "key4": "KviTEpYro7dNaPYJ4T2J6cK95pgYAZzv6AZ4V1hugwwB2W3YemM8VMCy5JkoicG9AKZNbmhA8uBsb7Dis4bPqSi",
  "key5": "29LckFykKaqrhqMx1TK3iRacbufdv4DqAb87B6siUGdofYF9PTB9GphejjNE92Xh4S5znRESNhChHLCMjSNKFo3r",
  "key6": "5uEugL67kra97fLzXrCfEEze13bXrRe3JmQy3MPqBPkDtEcSUm4aT2HE1wGJvqcn47jQW8aFb7GAVuJCq6MLkyUr",
  "key7": "3NcGhz5Dz8t1qdog4XRNb9CXCYFT5uzrGbDCdypkGw9o9ur5McSksCBod6mYb6tQVasugLES5X3HHKdiSvSDpxH",
  "key8": "3xqwoRg6sCDgfkVfqJdKNyozKd4aHa4de9r4XjSW3wV7f7f5xxsJu5trqECaZT4W24Qwj9yyHyQ6SdppDMafEixw",
  "key9": "2yqAEtjTKphXpRRz5i5hFMpPiHfHa1zCR9YLVhSEmXjNBnoLp4i2xmSM9ToW8EntCWHsAM5ZQVLjhRLXpH8CgDtT",
  "key10": "4G4xV3Z7GLsiZbAng65oLMS22mTGnpx56XHCmU99RDES4HeAfrU98VTvopZptsVCX52vwbY1uVmBxoRQVspnDrvK",
  "key11": "4AwrPDUz418RaVBgxBHdFMoAb1sGavRfP7LYzwH3gqJ3KBkzy1oxEdAWchtgrBMyEnGsEHY4DAKxG6J67kU1vkjG",
  "key12": "5W5PAE8op7jADbiXKuMi9zqGERUQJW5uuhQaCejQWwqjKUS5ZquUzPftQfpsgBPC6d4uSjhrxP7g5fgDB1VDG39E",
  "key13": "3RJU3Wjz1VhY1EjuRRdEzpBXvKab8R4KY6EqnDv2L76bbemJXWn7nKdRwTVX2y5bQu391bm2WPDcm8ftaUG97i7",
  "key14": "5mSuuCqyiyoyD3HvgJ96eavrN6iyyNS2aV5qzxkRbsHqTzWYv9PXWKWoL2TkK6rCAJ6fEmmzj23fe2nVMa9kbWCC",
  "key15": "5C66JX8ggtGJtx569tQkibVJx3v4bMF47J81aXnoGTnSXdSgZRQCxu9Wwzf7WZu7q6NXGYPnb47DSLkFimFcA2Yw",
  "key16": "3fwuubUiZebXWPRgzy444FLKExXcqLKJUjn2cdgjK5WGuD7SN87KHbrV2pBQPSLKGKig2awgYCdDtHpkkNFEewkQ",
  "key17": "3WA3tUVcGvog273W4q8kPrK8BNVdaMbeBngHfKGAJ6CRKVDdJBsKKSjsmZP6g4ZkrabuTcjZwXexVqS6gs635x7R",
  "key18": "TWSefGXkJj4VqFZCCBuWJZ9VpCsQr3emPqjBTwAAPzzLpsYW6sgLyj7iejnvz4y7u8J3VDgwYS1VCv5R8t2DiTe",
  "key19": "4ys9CCbdAmcAZrtRNBdrxJiXa7WBEMZZYhcFm5Jx6e5uNqnjnrJzXru9UyHqVd4sN2R2xaqa1QEka5fP4c2GXzsZ",
  "key20": "4ytCnTwmYd5qLXiJeg6ocjtowN6g3TU1UCtPziXnxRFQ2si8KEdpAxmwETEySgLAHM6LRH2FABSgbV8KJPd9hPMo",
  "key21": "U6vMQ3Ex4W3hqCbptDMeB4w72PKQYShZmGWjtUEHBoicBierBQ7LVgfthAoQFUY3Z7H8HgidgkpwyRoXhFur5uU",
  "key22": "5gzZ1fmtL7hn7x8pdDM5vwRbqdJaAtrvA2pCy6gGCPPfgEABd3KWvfU5GMKjhNmB8HZvGbG8SxoUqdnGZaUYvfHN",
  "key23": "5QKmfM3bRLv5bLL41ZbC4csh93bZZrjbym8QyJweCsMjKPbcjkc2WTq5EhtxaoWPV8ArJaTfF9z7LAhKyYduwfPB",
  "key24": "36piiA3t4UTyxMbQ4FDtL3diLTMTAZvysfgcZy3ax7Zn3JJeAeWkXNdeDcW8jNBKdqaq2Lnqa3JdWAQGTNcV6bE",
  "key25": "581qv9MXomMSKFdn9t7w1Un6vKoyst3EPtAfdjUGHzoYDY3uSvueenTdZtUM4YAqrqnfvSNtpbnQ9JkLzA6VLp62",
  "key26": "4ECSX7N5mitPwKJw1R7YYiU96moN4xUACMyvCHLB9DaYkzeuVbgQztDdt6EyhwB56r7PyoEJHJ6L4nPHW2T1wQyz",
  "key27": "mdmd4CMbCL41r3TsRfu8SAvBPreeoDizbUncQnSETvXVvJBUzwDtqxYnv7CdsxXbcN1ip1HKaqVeQN4PaQyfE5R",
  "key28": "4T52HVnFHQg4dbhhomvkzqkQmR2SGbrvRUiTBbqfXFNpwVV9H9DNRJTuEErbA81FaQX116ZBkBR1QjbRBnV4mvWe",
  "key29": "3knH9NuxDRhvFSzXBqx7ZUvPaEmiNnafwgzZnWgT9Q81eDcT1LxUbp3vywkieoYGYHxe1a9coMQuHP4dDHMN7Jxq",
  "key30": "4mxdKwYLRKttu5emuayCrGBfY6NV9qqrrp73fC8gEWZui9DNKhGqeVVELqCPNTuuWZBkFTE32uCBz3YA84rZ2ESs",
  "key31": "yH36vM1i2B4FcXSWy2gRao6kNwYSkRZfRyD9CPdaHbE4LBwZD2oz7Dk8TsgzJ3H9thfhM1Gi7qeXBw2mKhMUqPb",
  "key32": "5MMLTwddbGVeahoo89CF7vbCR1vF3zqQB6Q3KgcMSMzwtNdW7y2FGjT4CSunsVAVF7cDdgYhpS7EaNiVSMNCGxbt",
  "key33": "449WiQGEaeHCZ69rhUUGM6QZmM1WXadCDdmqjbsFZAdooC2bkd3s3k8qQkTmY8c1sfnx7dpMoKcpUMABqzqHoHpw",
  "key34": "38ZKuukVCWA9QwJWHYEkasyBKoaqMvmQSkoFuUmC7ehPDoQriAk67K3duTJwScgG1hi537h5znvk5tnvfkyF26bZ",
  "key35": "twZEcr16ocidtJ9DaRvEWm2vqqWmytoY8bgrievXX2gg1ZCF1rS3mazaMXKxR3CE16p86Ywxo7zThsBVJEqkomn"
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
