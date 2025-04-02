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
    "27rJTrGNTEDm2ZKYSSKbncFBPpJpLutSuMQk8Q9PP64dY1XYkbcponJV8p9kWTecQKNpmR9z9983gaS2ji4FeRgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96icW1W9bibBqS8etEn62Pyod2KoGHht3AUhNWiH7huiUodeiR2XGNNcAKZgc1heQe2Zu6gPepEeD5LsTGwNHqA",
  "key1": "2cJ7vUgWBHnBNpcisM4LG9guont4PPjmBEva2hUguB3JGEWtRgRwkmLKxNNr6BpbyUWN2MaUQ7RrvmqsY5dKzLH",
  "key2": "6BiDxYVB6mVYEEp6eRQqnHYVqqX1uEkwLA9LgD3CFjNzetxsShq3XVRMddTbtBM6RFsWx2tB49KJg9wziDhUJMm",
  "key3": "2whKPggsyG2jPiiHhfHRzbXAbkv74VPD4HSt3QJHbuuYq9sPGJZ8gA8jvLbc8jN7SACwpLjLB4y6qLGxppKD3U28",
  "key4": "BhQE4W1hb9uJf1EfDZCgDD6zvXruRaSt9tcXvcb7WKMohKazgChdbEafWckg4n8YSAy1eRrh9sv6yihyBJHtCz8",
  "key5": "2iqBjC5P5XgChWtEPfcxXRaUNRJkVdDgXHg4JUMF5eGV8tuMauHuvZ5L93a2Efe3TRLPdL971PN4sRCKk3vTsc6m",
  "key6": "9fGkvSHmeBwfKpipamwWLRdB9aqNFJVB5muX3R3PUncWNxpviZMLXRZw1W7aBmzTxQvpA1bCz2JaMyKet7sprFB",
  "key7": "4o1eZVdxR1xEpZ7nfs4vqZ7zyWc1mwV15quDXWnirq6Hx6YjJZsCrPBDCeyZn2xWB49Vr5JAhKKLxTBycki1LEsM",
  "key8": "2oFVsYReWxGisQhQk2buyDE5UgEARf1ev1qcHWfezmPRSLY5f6UzQ28JTh7QaGK51eLUGnMQoFKa6RR7i6xX2N8b",
  "key9": "2ptxn9KJ7NSa9c7LevWwA6CPDRwHDZ5ErmwJqSEMFRdpXnVyw57k6YfPvsqnySo8iZooqWEv3c8dJFGYcs7ZA8ec",
  "key10": "2E3MKsWkoe5TK3b5gzUGZpZF2fgdn5iaYfSS4fSMVBi34AxBBnxZqdynPvpkgUGNpnP5FxCjkPob55irAW1Lh1ST",
  "key11": "32hMPmjhoAXsod2Uaws7WejJpDsmZpWaaxvrAZsYTgtLkurBhuiSRfHzb7MhLsDd1zgtYPSusMkfhrSb9JQGWFY5",
  "key12": "3PsAEASNvo7U8SsDrNC2kLRoPJVPfT5kgkFfpG9Ro9UPRbdtnbNBPBZVuUD76GgDf21svqT2nmMUcVb7Pj97cXed",
  "key13": "Qfyk1jVhFQRMjEM6xrRWPnrwULcnMQvqwUBHcNojDGLsZfMX4ohqdAKY9bkxjpC7sXjEy44UASkLu5gjLuZUuV4",
  "key14": "3FacaMDuHYY4gc6iVGPtnzin39t6GrBGvAds8g5gWnZDR5TJdqfTg6NenLEdH7MQjeD2JiuATwMP6joy8gPr4Siq",
  "key15": "3aX14fxfgPmppmHdDoR6q3eGcQPMq572LoRersM1irPSjVTof52Z8dVdrs6PKHZPBa6re47qf5osqjZY1vuViv3a",
  "key16": "5Yjx6yr2VSjp9thqigxxDczbx6e7VjSfzQPgdmRvqro8WYwJKTxsETpHFkRKsnLzf8VBp5q9eozNyz6nmMPdm176",
  "key17": "57FKuRFHkpSoYLcr7zw5jsb6gY7pLHdHxo7qqRxhT8XhFDmnAAtVYwhPWzGL1CivSTUVj65KXZ2hqWUp4hT22Vnn",
  "key18": "3zB9rtQ5FrFsiY1Ra8SDYFG6vRiRsAbr8eKR4GewmbxLVznmzUt6xx3nT1jhFT2cewLmnMGHWKotR8fSHBFMimjQ",
  "key19": "5oekLBWJ2aTt3Hg9yf9mPAa5pwTBmYoSe6mnSqK7qCgTzPZEeTwZf4yJotnQbr9FwZrXYgvE6V9oJeXZQ5VxUquU",
  "key20": "31jR6erEiG1oY97vCeWCdHj6ZvdAcBB9bbi48Qc8vhVf2UNiBShdn4c22Aqdb6YDdffwgjRPm3XHQPFpwP3UMKrS",
  "key21": "5x8nNVDAbeJR6241nvoYSsPs3E11AYxaNtzps2otdtAZzuTACZpFnPbCcSMJFaocU4UmG7VRHBsBHExEXMxsDko9",
  "key22": "5ULU2gSMqGkbHQExLhgYuoMGeXZn3tHs4RyXTyUBob3tgzx2m4rgGejEU1YjX4ET97JGitWBNKKYZaUm2DgM6ga4",
  "key23": "27BR19JDANbtoSX61yzmrKfiy3XDucPYzv1RMDexCM4KFR6HVXcttHnLEn63QKAPqno4VjNYiYPddd871MggKB8p",
  "key24": "2RXedGSpxVHESVysMzsSfoxwLUKU5WFfxZeCKaL5swaXa3FP9hHYnJxRcZd2XxNRG6RNxgh7jkUVkX4Lb3Up1vUn",
  "key25": "2MdtnLR166JWWAS3i3TB5SPpAy93p7Sqe9mqmn91hSdLkxMAFaRPeTPFnbXPm7ktoqFqnNcwGvArXv7n68xGnqFh",
  "key26": "5Fc794NX9Gjn2h4FQs4sVBk819rYdPZ2M9gaVYfWD4Tx3Gy8TbCPHDbpcAsKjZEMBqvPrmRk1Y5KHzAJxzsTLixN",
  "key27": "w9gvoQPPnAfHbQchTwY4Dvuaq6Ncx3gTbhNVjQNxZpu6WzeBzRrUsQZJtbU3AG2UzmKgZTANv4ggoCXYb3GkMwQ",
  "key28": "4kATQc3165GUi3WSYtqqjAuQWSBSU18HFWTfgz57z93eLZSVmohywCVF4sxFRtiDwRzSPqZS35d3up4KpPWN4ijT",
  "key29": "2E1afELK7Qs2oSjvvQK1biVqH7UBs1nc6vMBXmSm9x8YhwMgZrb4bHBwS4v2NzRXdbgQUgVUbiXakyAyUn7KQDEW",
  "key30": "4PREPZnMzMuG4cBzbG6Q9dvYXGb6UHNF3bZvnooK8XGmBnzRfbotrbDRAxxvAYQvJfHvSyyC14Z3BcRfR5bmpWtC",
  "key31": "3t8cPuezg3ChSMKnqLgB2gbJi7vQkgbWA6MzpdXUdDJXkmRYTz4dbMN16LYLs7bMqJ1HaPCrEgLg8jEvGwbcJd1E",
  "key32": "228qrcGrwVBUeSjFDxuvgMxExtKZvzDGZdJFz9JM4EWTVDFyVwFLZmBZhcAyJVFWLeFLhVERGkZTjNpAaAUhibDy",
  "key33": "5mMbhd7wSxMtR5qBUoHDyrEpjh8doZhb4QCqMY4bKYAQd5C6ULPnrdoMMCckU7bSSLcCF7byBtxbvgp4knmsZBzR",
  "key34": "5spVY3dBQUmfbskoizqNaKJxgqHANnPHaKR2xZXr6yTSWXSQXvBuynECSdR6w9ME4NWyzZDxi7MRdip7HEQMBcki",
  "key35": "5zGiw9rhoxeAU5RnC9njy1iE7QpRgkejRdQerUHKiFG89wsGgTiTGvVGKroHi5gFSjR16uPjbSCvDeVZYbEvRWUq"
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
