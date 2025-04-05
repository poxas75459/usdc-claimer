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
    "456DRFq1dfKMxgLPsKwWi1L2q9Z3Pera3yRQg8krMuUxUhsen88n3Hz7EPWokzu9L3GkqW2vxGoHcUSFvEQwW2as"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XKtSEZBBvwenkK9ZzXNhMpN7VggatYuVGQED1aRYbravpS2HWBHyd1kHs3N3hPztAUX9t5rS49YDYRmsVUmTSD",
  "key1": "4PmygEnicmBNb4GfoeGp3c1FZGbwfVtgYT5HQbsR1Nwn5zVYBgdVCQUSoKePREM8HBRjoNvUVvEEq9468TRzCEPo",
  "key2": "5p2g3XmjiwQEwUK8HemFBosZM4jbdu7NoM2VEeELTZL6mdCbcbKXtHA3spgVLG3PGxPLqtgRgP8Edwtj4howGaiK",
  "key3": "5kfQ3QuppHpXsQZGNSLLBnXnVH47PL1DXKjB83d7z3g4ZyG4ycPqFajGjwVMFN2m6uLooJxfhcfCA3SXNzohKx48",
  "key4": "3o85gjvQUN7rayXPFwvYhdxgSzKHECGQB4aD5JxS94mDarFhu3axkgcrbtpai1VnF9foZyZVnvtwW7PzbrC8P1Sz",
  "key5": "2LdsEiXMbtkNbteY6ykxxCJgpohYoKEDg1VuWBbotxeu7TrLFzELCcX4kVTXCCBBjSE7omLHL3WRTJhRmm2URw4a",
  "key6": "3N2bcPz3fEtkAmXXCVwFjDj9ULbWTG7HyoHTcHdbqM4SwzBHhaTPbcpVhKGfPtqBFXKVjjjuTLikYCqirvjCTxDY",
  "key7": "BFBmAjTYwgYYx9HZqNd9VvZzEU5MeVJTxvpSyzMcskii8GxBTtNphyhViDrq2WSHirmXafnvj1MoAy7A63UboE6",
  "key8": "4caRHmsFmMUvjDYH9wi3L8mxcFefaSQVrYFGcXLhSvwmk6D2T4wHYE5aswe512F9jfwYgZcAA2kcpzp8qHiRBiFy",
  "key9": "3XpWnh5hV9U26pbUyC8BmeFHAfKzqESeuCjRFWqAQZnQi6rd3JDn1Sn9W3o3yGJG1pRbYPGDKxVvGsmFzWb73ir2",
  "key10": "3woGvmuP1Xu21Pn8h5aqHHVJMYbpLBt359R73eh3cfa8XixPPVb4sKP4jjvvv8tnieZWyiB2tXfw1nmANryff1T6",
  "key11": "uPZsSL6iMPpiinL1EBxtsRgVq2KjeHbT5b5uHqcDj8b9eLDuKALUP2RZJBYYMfuj5JkgxqrKgTFseE1AZQTfnAg",
  "key12": "2qMaUQ2JW7j2cKiLFUDbac5WYzxto9ACLb5hcY3hPhgn7WTiXhpvrdmdpxxV2MGoXBskRaWPzZGXSCH1K2nfy7MT",
  "key13": "4hqz9vJvmQTS7tUBMK4WyHFw84gMRxCAdJiaxAtKa1RG9pXTLxFqzbFaZS7r2cB2d2rxHZ2cqAYaBogXM2BWqobr",
  "key14": "5W4smkieJNMvq2Lah27fgz7NuEcLDgQdatnDdw6BAvdJUb4wrNN3ztG6XP7uSNSzQAYLRy99egduQi4ovSF7A8kf",
  "key15": "E1naVgqfh1CTQgygu3krYw8aTYJQcECHRXeGoB2uxADA7iWV3h27nJnyE8MF1uWDT9dUcp6qtzn6j2zUNtSrkDS",
  "key16": "4PMPhQMPeT1SM5dNFfUyvKgV5t4YbYLvfiVQ3PpugfGcspwhCwhigrYSqK9xTBpmbnN5gLeMj4B1fY6s9VqyFnAC",
  "key17": "5Ryf7BGqz16F8FcbBiRm4TqAQ1RNHKBfE6gAK8nHa4N2yLM4sVZLRxAdTy8v61psUAHZ4S6eQAg3oS1XAgkan39T",
  "key18": "3UCBut8bPpVQMWEEyPGaMFT2LqoKJJasqq3wpBXk784VZXP2CQ8qaN6hD6rhJCnvYRiHpL2QKpv7RpeYd5rsnw9u",
  "key19": "DxNQSwwvQNdjqBEtVZTqiF8XWuLgUERPvvFryVSVNAMNdxZFH7wgZjJdMcemJkHKnhJiisrLNopxfePykFtBq67",
  "key20": "4543MrqahGgBRLpf4RmwLEFQDjStdHtg2CnTKVfL24r57GumyUJDvpwcgmnEKke6bUj2KHJey6FbrkXKtfr7MGM9",
  "key21": "57mKsc8sGoSr8BZSUg5t9CtJD1TL5sBVLk8nRQoL1hiVxUj5vhrfZYQvYfRtKuQkcXzf7Q6zeQJXhMRY8Q5i1bxS",
  "key22": "jsDuKuq22v3BYzHmd2a1S1DcGRQVhyrd2osFESuVWkwuY9m1jJRg1hvrfADosT2ggXtzLCqEe1i6Q6U2qJqcLJA",
  "key23": "5HgEm9nMqhDUF69XwU86wUfuHoWBWXBDDqHPxd7bYc8B8wtgfdkKxkNQzCHtQFzyuMfrZChGo365QshEaPChAxFX",
  "key24": "5JLWC1k1xFBLWWhLBHjDXkButN56AmFdsXCbDx3NhVLrrfknWn8kvYPjrx8MjtUgYMaZ7B9waPFyfyvMVrgSwavE",
  "key25": "4tabzC95bZZvgG3GiMXZrJ84WgRwrmmLPvDKwt7YGocNf1qzT1JU8Yrde8niHcrxTprg6i3rWquDfyWaDWMdw2BQ",
  "key26": "2bFXJARh7G5MAi9EjUfjxRX6nNssyuHd6dU6Fz25kCZRzEik7Z528afpibeVGKcxxjtfmSvt7ZGb31K9buK7it6A",
  "key27": "r8a9FXPVdqQfbxUNrYyQiJuKjUSnzUXYV5xyM46JHeUJJu5TnKWbCTRFb2RCjV151BCxqbJmLN5ApxcUraXdGbT",
  "key28": "3nJh9qyhSYtPcK6X1uY4MCkWvAeXw136hZoPsxdJY5vER1f1pAqPyUFzBnUSo26s2vJZAsXa3rtqtSdsy8e8f2GZ",
  "key29": "62Y9HUrVBCMM5uHm55z9kZLi4HrwymWn3YEu9vHSmUaAxL2stwZuyNcSjKZEWnNP3R3rDja4DqrGGNuR3Dmg95w6",
  "key30": "5oXRxwQZLRCNYTqnBauzuhhfxQpeQjw3tyZp5WGrfpRqzA5aB9VoY2Rsabo1jBVBgtPD7TuAQFYrC22h2kuY1bji",
  "key31": "2y29ba8fZcPV1y8adWUdX2kGhuDVSzT5yf83Yfkbte9sotNUt1i974y8N45d8HBuzB7tjZmaTriLCdJzR8qMBn4j",
  "key32": "3eZ4P8A76WvDdz95ECjHDrZoka5LzYzASARbbQjzyRbwHsEbBzkzZG9wRKbEeZsESuscHuNgfquzrYs7Q5g8T3sx",
  "key33": "2BPTfT54YcyS1ZzF7Lg1F6ko4SpjijfVMo3JL299itBza2v9hS1pxc8CGuKzUcNb8idJLh3CeE2aZoWH6FHSYS9M",
  "key34": "HShCiM8f6vDwRq269y4CVhfKmcuLn3FQ9jhUsNA1QN3XyctTcgwtBzYAhYLoE6aA4snAAV7W79xdLcmmNr1eWpC",
  "key35": "5HUxZL44hsU8pUVeg6PDs9FXGypPZ43w8CkiFwR52pUAZwQXevfbzjb9Ttis2mryiG5PbokGsUh83iVJbftWYUFZ",
  "key36": "2VabJs9VkXvQZaa57nbugGUn4x8P7LeAq3wuYdbopPXdTCkbcf7zpq9zPNFJaXFTHP7V75B69QxQSxg43RCsMWy3",
  "key37": "5GM1HKubVJ6DTLwF6sGifX3A4ZFoKjswoBY3torjLQ5jAyCF8yNp16uKinHz1XJgAsZpWmjdWXGZFGhDRsNE9SYt",
  "key38": "38iUaFvS9TXpUxAMJoEVbTKWPd4Jqe28UBUuMTBEfPWD4mW8N1mYF7bowXd5uYU1rz7G3uwJf4nhutb9gK7R4ZPJ",
  "key39": "ZmMfmTAajGuVMJUyCJ18b6h7TBG3VriB63QXHzPxGkvHWLC4FdY4UTGsEzmLGqZamqDtHqMACX35217awJmBadH",
  "key40": "3iotHBpqfLcLcp7Qnsoc39MzZQ6n8eR8HeeXZZ7or6BMRwboQVcgBDbKBX7XfXd3FhVkazAXuv5e8tsWB4U9KHQn",
  "key41": "5ze1p3Ks76c81nCmL7NjrDw7GgVbdSAuGXFaMimef8eM8UJTfVCuvBXsKeqgqq1E7ZinRo3AEVwzKhfzKBudLFv4",
  "key42": "3Vd5VAKNQ3v6kvaoGrVwQETcdVYFnMTXnBGsZkMKKEj6n2QXEmhLDsjKDNnKrbRUSsxXTBgSWHg7iRWXwERny1he",
  "key43": "7ZdFySyuS6BipNZpZ7SMLiHv1b4JdkeQ3BMtExKomWQRVURHmeVJ8iyPZ3vAqiAh9ZC192yLT5Xt6KCX1UcLyvZ",
  "key44": "24upqX4iUPMjQVvkubzKCCVXJQ4VruyorixGaSyojo1S7f7ASqSiGTbVahq3qkPZcPjrrmGg7L9atoEu7PR7m2Kw",
  "key45": "81o5ucuR6BhyW2dxPdtbCTW53KVtwd42pq52SfwbtfD7DSF5TuBdHP2NegSPAnTTMCrDCtRRPbvQjWp2ghrwExW",
  "key46": "2qD7YQ8rxxiEMNYiAgqdsRubwtusGdNqjhWVrQWsLnmEMsXbx3GtqJR6xHoJMupRF7BBwyZVffvRsbtzTDoy4ELo",
  "key47": "524hDRSrLT4F5B3vsHTFENxY8ctesaaQM9uUEqj3rCCsgKD8SjcPvMSDwv49htJjhdkvBJAujgXwQb86vDvoAP6y"
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
