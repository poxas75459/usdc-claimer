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
    "n2QHHwVcDpF8MpGcBB4Xzt31F5wHTjbWXpQNQvjJsxsTv8BMZ8S4yzmukGtoKXkLb65oBWqXTVWFJzA1zV3urc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w4SeofoWZHYHbTWBCuW5DNmU56UnKNCQx23X21UzDYsyvgfrsJc1Tpkx3egjYyMx1zzy6QpMNUcUAutwGiuRsY9",
  "key1": "5gG6tXwLgigoULmG1aAFFrLvXo2WDY7cASvXAEMwq2DAR86RqAB836aPhnbQNVwZTFpDyi71gaEzxRyuAenxrCGv",
  "key2": "4VHfaHrkbKkvJtDuBfYgxBSALTD7NGTqgvkErmRJyYoEjJYVEao45Hzg4EKVNU7sakZfhfp7SpAeoHTYraqtcoD5",
  "key3": "4uvkduaFAxHEGWtDbvSYU8deKBwjsikgP73TcdHY3xM8j3uHH9BuyaTKo3XvvCp2NpKHWXoHsNNE9BedxWpxGAyS",
  "key4": "4mcRKSJwspGzt7K88SHYEgQmTccfdccgxnegqxjY9xpeUkKXT8PXbr8Gh8H1ahEUFbTkSGvirc96fXauGEHRKMjP",
  "key5": "36BviQEFMx3mYHnMEZ3SaF69nTCGx3frMUgSq9rgeMpRegvR5cRhou9pWLjxwd8GBV7ZDmD7dPn1xsD3KbGFZcTR",
  "key6": "5jmbSRchDAZUS4Mx5qVvjruzHKsGmAFgqC1tRp5vCXd2ykeTdLkc7UHYzKfEznuV6z15fesuEp6W8y3tS9djZjPQ",
  "key7": "5Cw7cUtqwiXggvaFQjLVTGrUkiqfog43eUC7pxmzBYPe4P6RDvGZ2vXKTXzTJzgnTdnXHvgqhhbYy2RPSm8nST9J",
  "key8": "5jRjRZH8ReeMMqyL2fPWwdtZpNyZS5VWzkZADDxM3CNRRzQN2RgSeLk4nb5Djog2xbTLCftquGzRQrfZGGD3ML15",
  "key9": "3YKoXYh5QfpDYMuXRv1G36dZ7mbMKxvt9ostaVGsmfBFWDwgAAvcCaXiHDPxwbRQeGgMx8hpy1bx4MCMB3srKE5o",
  "key10": "2M7NpHvLdV2vF2862xmoFmPjuwPMioKhTRjQDPEgQNXf35onF8haJ7uYsw18y8xrcSDg2xFK9Mrq3SkHxk7q6ZoG",
  "key11": "5G7qJeS446VmfzqyctgujMUgLwSDsV2bCEetxqaGTx4GBCmDHWerMvjMUAsFhRoi8pmSsBAwn8zxU7orioUyfn7v",
  "key12": "4jxcpfXJ43iXu4vvLpY4mzQbk5BynsHYA84Yq9o9izSyTBwaDoQwj4aHhCsp42Kr98WGZYkzh91cvmioY1N9u5dg",
  "key13": "2f8zDGSqzvrLTHJfW2R2mf96g2YJf1YoBhmfVuXEaa2TDPeQcEWXQDAM5WLMydsjGx75pUWhQ3qYgcHreJYYLhpo",
  "key14": "4cvBs1mGGCcRdjHQo8FumZBceNXPHpPzcwgvVoCgf5PwkPd176GxxPTQ25zP5wDmUsAXjoVKayEkfiEXNEvB4Rf",
  "key15": "2XaqWKjEGwtrPBemCUi3jzwuBPMWpNL4c7yJfzL1U7WLeuGPnYg17PS7V2M5tuNy9pj3YQPeGHyW22DRXfPwguEX",
  "key16": "PCJs86ECCy9WjJQeBNDzdbaVdBctbYsGKpQyb7b7QkJvPQP7WycmkXzSEpzd4PVuQvsorN6ztdKe6aLSDcYmYmR",
  "key17": "2csAUH2qVC81um1WFuPSBDsV8wxV3vr97bnwXfSB69SAusGY1s3S8qCQZo3LpLUq9nJGup7Yw112mkagRoWjvUtH",
  "key18": "5Ej8gbvfrijGVoobYiTvQ9XGA4w4Do9EmmCek4eonuNnWiGGQ69j2eL3HRFCoETfEtida9pzHRYvYUEm4Jg3T5Qj",
  "key19": "2kwXwguqoUTCcSBRBHLFUV2WGc7HyRqxUXmP2QeUwJKbtCD8JH2gV1KDoxBQBoRnoguu3xtSK4tHiGN2pA6AWpnK",
  "key20": "4La4DpDkXhmEWkNX8iM6UzbJVeiQ1UYdLe2Q7fYgfHTk7evbMxGBfBGk6WmXAw6qV8c6mx5yxrxthLxYRCSpND7j",
  "key21": "FtJuJEJSZ6PTpAGH1Vj8jrSB1jE5LDUrRUFZp36xgv3ZLVpmznPvLp2TyhgWDtMxrtrobkmugqfsfn6rxVwX72t",
  "key22": "51eHCjBt2p9RjzC5pX7uD6KE7azFhKMqcZtPC7vLpWcXYuuLmjUVYkC5T5U8n8wjtioxeQijEXBMzSSoSQ81F6JD",
  "key23": "5ubikbjYBZUTSsgZXdKXP2a58kB1zMpPRnzkrQhB1QHJZppwaekq72Bp4TU6Wc29BaXe35SFaUPE277ZXt9HfZNi",
  "key24": "DKWz8kJKsTKjvxsZuV653KF891guZYgPQswjeDEHAX1mB2MKPm3e5Lva8SY52H6boj2ka2xm7D7Jg9iTLuFk9oj",
  "key25": "4VjZWZj63L3PnSvhzX55nnX4KUdZen1z5F2W4JWr3SzJCec2SG6ZTcwWD2W7p1CnigorZptAZZNX76cEpycAN7pf",
  "key26": "2bt32j7RQPwU2tB6L7oPpvgzg1yH3Xn5x8camH7cVEkm4wvJiH9wgWfEMGBqEisc16Z76o7DdyJFPVtppAdJvx2o",
  "key27": "ajFpb5ykJ2tfNeGGYfFsZBUL6eCCmnxwxBuFNGYU1xMCPPwnj5v7SoWDoH9RnKiRZTxSC2ee5xb6vb78KgcQtQt",
  "key28": "3ZkLQ5ioHpkpVRV9aJzCEpZyDKsYvAkheHZ5BwhVyTyTkXpGgQXFrRDjvNa7wD5vnnVfJzdnhkxBUK4usECmoxjp",
  "key29": "2kciH6KRE4uqHxwnBNmFUjoMMju6FVFQcd7S4XsRbZ27NjG88vyiaFSmyyo9AA2fsPjHbgJqqNm374AfKMLSZtTN",
  "key30": "4osZienYKtkXk4HYeZf7BNK8xHLF7tw1rdBuzZrjhDSDXkMCUMik4jEGkezy47wwRgwJYE6uH2mMyWT4YRRLc47T",
  "key31": "2Qz112giffoEQwjpsMrq8YPSPKT8mtYjeS6nNUssU9A2Mva3jNnbF8A7tbTD1Z7EGN7tmVwFhosodVcWaFzYv38U",
  "key32": "5t9YD2618tqYos2n9fp6XiftFPP2Jtu3rxJxtycAYy6Yy2QAc6fV81sVpmPBMGcriXfcH4Bgo5UdbZ4RXstNa3jR",
  "key33": "iDuyvQbWHBrmJNAuDAHGS29eoQcTfVxR2V5EeEtRSgNy66fBptNUtG2RoLvXr1zCkuxnyG2JwgCnyLLKPcYvxmx"
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
