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
    "3RgvtDMRTYvZsMj1AyPjLZZyCG1Pr6KSr1f9NcjNKdgxEHYDwntkfvb9iuSPT4fMiYTQ3o59n8WQ4udxL4PuFPnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pLsXagw89uZ8mX8LDMH5QVrqrAy7QciTwF4AUQK6E3BvL9WkYsYQFMSVygwPAVb66ncdwkN2Da6cA4JMNTNJmFA",
  "key1": "5R9qiX7qDhXfjyKmY9RUtyBtUFbb7rERG5Q588u7oEBGf9oLP8CUUEukj6iT2bAR1jLLBVU26HYKpgDPaYDWeCHG",
  "key2": "MZ8zqqq5tz8G9WpkPjWKue5gGPt5vjZt17knUSZZVHv1SSbXsfksdNWHcdzcXxUDCfn1mAKT69Lw268jRPXT9vF",
  "key3": "nCee8eer9VHUUmZSNrwvxwjzrSfNdotfT3FpGEB1t7USJ1D4MeFGecPVC715FhSoCbBhp76kAisWhqkozfVN3FT",
  "key4": "4q9zogQckGoXPbrqQE9vftY4M5kAx1x8PbMDZ1r4eAZRBTmsmdjYGppAgd49SioLA3i7cZYKE4PUuNCR6qFyL6DQ",
  "key5": "4byEojd97PJn68CF5wvKEthunGNgoKBCGJvfMMghzVc8b5uxQAPQEUnB3bSnvufJGBPnfawhJvw4HHAQAjgcQNjH",
  "key6": "3Fb5U17X5tzMJkgU3n1vrj2MotUv4Y3X1uQw2ogZ8TZZGeiyAPrr6VCbj8nNNT3Rxcqdb4AaGzENR5Fir9X5r9ma",
  "key7": "6sPy8R5PTuowE8wFc2dZNHshWmKpkXtF592ohZA6U5oBpVqrhATbXjUL1xqsPCvvJYjc7YCzahyvpih42hEin1f",
  "key8": "4BTmR7wx1Y5UAB7h7RjdeTgTPn6ty4fz1W96vftrcm4vbpSUVCZgY9WULidjxhJPToVYwa8sGJX1oMTBenQBjRwm",
  "key9": "5S7EQfuVj2LRi21eT35jGMUPoNxKheyCxi5WJbKiZH3rNmikBqiGudgJUAFuB2Fonw2uXSqsJpRLUJoiECUeTdHk",
  "key10": "4kNyTxpRrpeVyoZzAJLqMx26K5912vNGaq9QatJMMPhAqhyudjnqtuhxt1iqKPxHUU7JnL9jQ2uxAMoaZ3mSQmDS",
  "key11": "G4MCejCDPooeHAA5EK83NBBS7swbEQBEejG2g9Tp3PodtW6Jncg9Q1s3sRKiGwkRs8VnYQa9pWbFvcrvq9o7qvZ",
  "key12": "fa3KkaWQpZi8tdr6z5MMK2QdosLWH6QkPKutty3y1BtCWP1airAW6EfKrvzSTZmRtpDHKLtfyzsECMdoeuky7wq",
  "key13": "PXBvyT54WeHh2txEFnPQJLeyYDUbZqsNcUut2eWY3wi2Sgd8nJA4RK2gyyVCiDCuw8DgwjPgDdqWqvgePTGAKf6",
  "key14": "2niECHdS5TrtpimDzbp8NUSfWsM7ht43MZwcv1mnP3SkAgJNfpLkPm2noSFkASb3VCPSmCZHBhwv9vi1V1aqvnb2",
  "key15": "2FdKk3PwngCLj4oZ4dQFwJpxWayb5DqMsjgBeXV7vfZi8rSjqJsPxa5ssHyrHJdt6jqWc82A4gGe5ds2vB2tTEnS",
  "key16": "41uWcj9SNgPDFobnXwifszCoyUTeQhwsC9X6EV2xDKTrgTUPxZpbLB66SArCyBuzwv8fV5A1XiHWfkjG9WBwNSMp",
  "key17": "5TpAysudFyci4tSzJsFrMeT7FCxTCrTVziuVNzekr6wcdHXuqam6UKbBxeZYBMdG19giiqdJydoXZurZUgdMh7Cr",
  "key18": "221VWiNfYp4YuR4ConoBNy4EvNnC2yUfWT9vpVET6woQEBZbRW9F1GwTjyAWKyhi5UU7LE6hu6ddsVZef6DYrLof",
  "key19": "2MjCB5Yk7TBie62YjQ1GJFFNe9Tdfi6gTuy9s3b4U4vz3GATkcN1CiSJ3PkYd8mK3LwsUWtX6XYTSHyKpSBn4K9M",
  "key20": "4nTuSvnaWhDBbHyRUmT4kibpRMGDha5FTf23Rc99RLDVr2DHbHinqEMbwB39jjYbhRX39T7VzksXDB1AiE72MZtN",
  "key21": "49S9jkVJ7tfw6JxudpSHwwYMfYGEbu532skBXeZB64xkApocGxwAAa1iin8LhQfw3Wc1WE1om4D2FjF5JJgCDJeT",
  "key22": "2PbGoRHnTVX9vL5d45qZvTW3Qarewpm6ARJfmvr2C5g2H4wwGSsDnifmkTwupnrHCtr88Znf2VipFYnX83EZrLdc",
  "key23": "3htzFgWTxjUeQbFmseb4iGGWAiEzJrzQmBVQDUKwRajPFPq3E69RuuyVUDRpbzZVxTDsEq6646EyxD7sQPXFxR3c",
  "key24": "2B5bFryLEsetU5WXEZAn8pvM85YNF5yDNuBNiecYUivN7wtwuYXfi5AFuDG2UueopHqvBcMBh5i9i2SxBxB4RPRq",
  "key25": "77vcxBGWMhR8EzFNmPW4w7tCuH4ugLz4SXUN2fHx4hmpLRkkEycjqMYaqEh9CF6mRCPCuFEof1VikVw5ZUSg4vJ",
  "key26": "44wW3dS98RrNbZ4T6ytXoDLuhPsYEDwuZpfdHTi7ebRQGEcp2cm2YZy5NBVWc4P5seMK9gcaWYqWqYejHoyTzfcL",
  "key27": "4yzFgoQbeuAKzmA63jAbx6UmzUdYJRPtfTMJoRm2WqdKPsuZ3sb51Ma1ydDnYnpRgyR9aDBNKJXBy1gyAXVU9htq",
  "key28": "awFyKTBstTX8onGp9ippyua3WpYouFgG3bp2BVHquR8c1upnHN3hx9GWawADrEeaoHkcczYXkeSW54gTMTG1uhZ",
  "key29": "3bHSSgJQ2iTSHhbSAmVHjWSqNWQYiMAdHaWQAuZbuNQLS6aMeHW2C1XH7LZR2GSWUu4Xv1EU3cCnGsAYrTfmEaxN",
  "key30": "TJJbKqM5E4pmkqDJNMRHbCXbeenJoH5BEYoFBCE46nQme7VCnmm4ELtcENkqpEST7Zoc1PFDVLnedTunSJNyuQ3",
  "key31": "5LJ9Z6ntcN2x72x373N96onZj54DLDpL2QU4tCUyB8JYy3JPnAuVFQzrFP25QyriXAPhAr3XdVP4CTHhP1ZR3YtQ",
  "key32": "2Cqyqo8NrBzwwcSiNtgQJrMv145LKGAp2MigwxCmA7CVxPF4gQxYMS2BREjPRc1Hnz7vmq7tBEFjGqcA5FFeqeNz",
  "key33": "KUcVb1iRL9LumQLjwBQLpVA2VR7ejE9TnN6bkCPYWfSPeaHG2bYN4GHiAAqjyokzHu9TdDg1pwUkhkywUvd8a4M",
  "key34": "4mAoPJWFYURBP49WEj4L6VbJDksyktQ9LcT1eEbJwrGHkxNjivPWERYLG2oBF2GbPcu6fF7g1MsrKm9h8JRJrZ73",
  "key35": "3CLu3wn3vehkDXeX7DRTDkYw7WsbyhXF3BfBaHGGjUVxg7nYzZg5oY3uXggvB256tuovr5vm5EVd9qf9RkcYXfKw",
  "key36": "3ecuGewjfdkY8K5KEm44eweVQ52HWtuDCg7BF5SyBdjjxbd6DPZ2jpw2en5mFUkJ8ZekHitYVrVpNo59Qc3AnPMf",
  "key37": "5GHhssw3JhTHwxF8nzUP3fauevLt8tfFuBjLeMfhtNM3M6kGKsL3Q6w8bEqbixuXEhQ9QNSAgA8t5at75qF1Ntw4",
  "key38": "JJnEnBEJeugWDpnHngLiSQr2x9GcwxYfnAp6pwPvBcabDmWPqLEyKJTrinoST75uomKJwhrTFk4yqtv9M8TooWj",
  "key39": "4vvfh8R83KffrdnRRb1E357vRQ1EJEK51kVHZAzxtvjza4BnkTcNJVosrP6nyWLDx8ZrqufGvyCjqD3DqF45z7A7",
  "key40": "3UeeMB6U8A7KQsc96ZerAP5HasZkfTeTG87CwJxj1SrrPBDP487ZUmPgh5c2okTw7yPKFze8c8G1ds5wrcru1rTw"
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
