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
    "4e9AVa4pUnpYruDmEiLHY7yRmECSLoM1KHugvU9cNwBpfJ4KRbnKCLmNfMBpZx7N1h25wTuuufkMMmJ4Pzka9Htw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPXQdYxqGCENicBdJjTStzGudoERz2E8hjS977ZZhs21yE8qsw2BXPeR3D928cDpzueHYfLQ3gMwzyGBdC4S3tf",
  "key1": "cDvuBemAdLjmstYnShioM6zubrjiuSyRTeeiyutEnMpyrzpoCGpqNUTukStNYwJ2yGpQr3vKJ91yZpmqRFthp44",
  "key2": "5L3MxZjmW1N4FNNz17owuBWvR9W8TNxdrMDoxTgRQ9DrzghftVN6HAjQxu13sEqXsYCknmymWSMaWBWhHkV7GhbR",
  "key3": "67omP5YdpycD9RMW3E98SvNHVBTpvDon8JnqUSYswBrAbiwwH1ehiJvgB5mBdJnAtoCZYEGkzoBrqh2HKh2HKunm",
  "key4": "27Y8ZLHX91T7nCeCbjtkL6KMj85D51Uh4x3SFyC4DumNRL1zD4MfHKqoMPu8eRAh2vxUGS8f5M8HndUAdGk93cQ2",
  "key5": "3TNVMpjU3bL5BTgjEijiMkMC6JN6DV5uxqumSeBs1tgnmvWHfuUeyBc6mJ1iLjcK5uwVPhuh2eACWMZ7z7pA3PT1",
  "key6": "41PT438kmoGAR56Wdvg7Gc4XZRooAZCdgKkoBkmrcRxCRpy2MmLGuhyUvAwcR92QFMhPpEML8Qfu7rVYFSkvnNMi",
  "key7": "5gusQda1yyVJrMRAMhjUhAVgG5NH48iYdYEhPJWuKA8HSqHCLCBchPouSRgLWR2o4JrdugYgChyRVPYCThRGsXUd",
  "key8": "4Cjof6uMrhT2KgfYnrGN4arY9f5eLUBsy1YyKeno1DQN86A93B7CwqNoCSR8rFFaNmYC3PzAQM54dHVgfjDmSbBi",
  "key9": "3gnswFYrrQBDgmmnwvhUmobZr1McQYP2t6fkySQ7hvWm7Zu7m5VTCMn3v6ck9AvfTSishuM1rTUM3VHhE3SfCTNR",
  "key10": "3vg1B9h6fBaexj4GFPAXRDbPBnpwh4hd1tpz9ewJsmrLe6PDgKqdBXCj8HYef4L7K6hrqtk4P4JAcTLUAFjZcvm9",
  "key11": "4jDnZWnWRjTvXJgZr8fsqiLRmTT9Byvj7FzsV5e3Uxpjiennem3BB6uVyfTqtYUKToCfY3t672KGH9Puz4UF8x4R",
  "key12": "FRdRxURZcVG9GSiTmDWXzneQgU9pktRJrGpQMXiRcH43bgqHBM29V3EtCCE4iN7zyeD1trb7vh8FYFmKD6foHV4",
  "key13": "2cVJUs2U3GakefBPmPAp8PAp5buyLTt4EVXVohAu1YqLPjwSduEgC9ArEU1tLsPwu34Nj5enr6JmZpqSKC36Ek9W",
  "key14": "5vSkrvPpdQ9EFexw5K1KQqkysJtopdQLJiv72Z1ys98GCdzSNE72X2myu5MmYsi3a3KmqNpH7aTbV5ZMzVMb8v7X",
  "key15": "3bu1FDbmbsAEzxP29iPRCjtCNV2gass6jb7URNzW3vYD3jkKFCLqpPgvukcojvB65BzqHbV54PDZ53sUfTJFfA2G",
  "key16": "4xLW119nxTsnAYhA2LEofsa4pFpwYfLpL8XpjfS3FACxSsZPsDmSmFNzhp4sxxwMq5wpBSLKgnGwT6ZSRkwRYM7d",
  "key17": "3WzLbiN6KwzAqAeJZtCB5iJVBMh6RUB519RcECbxzKghBAmuTDeZ1JaA4eX8EgEZ91RxudoduSsw6PcS8gQJv5JA",
  "key18": "qez5hSafckNQR3NP77Ke5XbM7D2wJpoLiKJdeux4pZHAgXs6ahVNTNx6jXpEjAZKta7gUWhXioyCeNzdhB3Hd7u",
  "key19": "4pXraw7H3DL7gxV91wFGVHCbL9xXysrA2R3e34G2SVcpfCyf15GAqsfYP7xvRv4HQC9vciwzU1hrRTUyvMt94m7D",
  "key20": "vXkzVbQEYs2Bzv3GSMduo4PrzY23eKAPj2weeByXVB1Gq69jZ5gk3eMJKLU3r5GacsEq2ZgSbb8DZUr8BUdaS8b",
  "key21": "2rhtLQh1vHrYMLxQ6VrBq4oCLiBmmTJzdC7mXSSY9B9nYCMqzJDK32JyHJGWfo5Quf68mqGqAEZhd3f4E2otFRU3",
  "key22": "2nBF68BTGCeirUsuyrKL8Ppy8ZnZqBMurTuLJTqirMKdRePSsQTDobABT1azcZfFUxu3yWSCyUZ4JjAnwxmYRv2p",
  "key23": "62axCwoG2ZyhLM3nDuMJvYRwkhAxGvcKuMwouMCLCZPNuhCF2X8N8MJxwf1tmFFwHtjmbzpEaaQmk75kJngGS3bC",
  "key24": "2hZi2RfCowoEW9GttcUg3iB2JPSRh6dJWX9McH9PRWziXV9XaNwsgcxJ2YdCDUc19pd3ZqXVtcqWA16QB3odoJRt",
  "key25": "2Y5zeetDSEzbGyu9WZEwgahuHXUJaPG4Rf9PJTzpo49RZkETkPYA9EfoVfuYfQwShWGjdGuK25mGzZiUMrkjMAVW",
  "key26": "3vwmW5aV1DRZbDzdhL5ifAF1YmXsDHiR3T2owWus9wEUdWb8me7JwQcAgJiLx9c65MFzW4foL9BCEhPautJwDF9r",
  "key27": "z2eQ7ZpQYbZXoFN5ckB9FciGBxpNXnMXohFX5M3ZZVbfMdySWQ9w3ZWacMok2R888mzoBMY8s2d4wU3mBzRyk3D",
  "key28": "L3ttVQNGwJUEzgTjuuUb3SHDHu3yrgUtQwCQsyBovEGPRwVuerw2FhjC9f9p6T6WaHWGDLfPb9Dexe9tTzGRiYa",
  "key29": "xJ36qZ1ea8fA4wmSaeGQKXob2EfxcvrboHLqANQ2vRAWzSyyYnmGyHgi2qYKNatHK4XFPQpcW7nevBQ4sHuCEgV",
  "key30": "HNcK5se8SUvpBjqEXdVFzi9ETC8GN9RswBqL5pVtPPzWY9e96Q8MLmqAgcNHSY2QDhwX9zS7S8aLggn7u9kDhKv",
  "key31": "5Eb9JG9b7w11JQPxoxsXpfANyCN4rDn49z3TRshCvNh2ZeiExF4TYztFCosnMwxwuA67qqdfsLGePe22GwV2CHsT",
  "key32": "2KQmv5oXKotMACfMTKRgTkFSdb3MncCEdANht7A4ytghm1Gzgp1DhKS7Z5tNNBufK9abqhRciM9rzY6QzJpV1DHH",
  "key33": "2buEbJMRVchbojfs479i394tMnfdWFVDSex3BcypBxMuKRv2v9Fm3NJcze5UgVtNPzEijtaEHMGTsdKFtRCvyxrp",
  "key34": "5ssbHGvjKwk4PUrXnCJef8Fp3hrFygxQ3dKW9m3weM1hBDQkbkNYtX1w5fiDAdkLAhhxMRYZxNvbTfhyi4HyiYSV",
  "key35": "4iYwspnNSwZQHywJn4ps9ZkEmejwqFm3n2y6GLZ2baEu559YNngnUCtkK32hWLobEb3zerhkziZYGJdrkFZe9kP2",
  "key36": "4nU5msjW4JUjkeqeKfXbzFQzYdJbG2u6NoSdia6DoyrC7DWmFwGaDTMUwU27aJFHqxoPbWF2JZUsYDGz6SVHDpT4",
  "key37": "29wH12JnsTM2CSgUuNFgrCkzTz7PPaUR4eNPWBDN9EDuf6ANddRSXdzE6ujo7vvyaD77ohymBNTFWtnKktMJRit9",
  "key38": "4dJaLCzF941GN2bF7mdv9kykxoANWkGgCd7ZsUg4L46DLy8nGWanEwrBpomn5hpG7j1v2fhdp6ovrNzoYquGty6a",
  "key39": "UNaLh5eyDjJZvUpzdabPcvQSDbRV1BSMEy6JMAAmk1tS9AKADLMoDuUCGoe2dhi6KRaDLfV2RokxGkdybJtCFYB",
  "key40": "3NwgZiVeNynK7hdMhAeH5auQGjqGf2QeGUpiEsnSMgdYfQoWuBSPSqudgT9tfNbnyBKvvseWtG2uc5TLYx7pPcw4"
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
