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
    "43hy3AVqBAkDNxXi8QEy7vr9SAnzv2bJqzqpe2RYt3rYmNzbTpBpZZp3DwBRQvwngoHsCTifyE8N6uwC9VoKZiHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tN9Rk6UozhkL4pZrL7rdWesUdETJ1FygQPM5EphFTnqvrhbzUDQFa4AG7yy99wF8sNPZHiGmLRBHehbhujQkfUd",
  "key1": "5prWFshSWKGro6HbjjNvctak6nEHS9igvRGHAmXR3aUeNfbUdfKTHURkQ8gKhRRbvExwjC7LN1yEeyLHjwRokCbm",
  "key2": "5N8YSht2BFNM3iyBw2XY28V3kJiQWt9kdYxeHjyMzygMuZPpsmPd29KmruTsEeaezze2Gb9AzPGzAt4wj9ZAR2qa",
  "key3": "2BEMuiQiJTxqsYZfD3siHsafHooxTSny7xdoHk3DovrtRGaRt3tHAJ94rcsqjxvVSKw6Q4JJxwXUKtyhTbAPMyjY",
  "key4": "39a1QSQmgEeDXB4Tew5fySfgcE8bcfqGApJ8BeLbdUKaqAsvBZLPFnm7u5r1VWw1gznKCR6yihjRZo4EZQ3BTJ9S",
  "key5": "LGrpoBVxQVLXT2Sx5eNrMASFxZJg1UEB3GSvqEL29ofLw1E5AqUnskTjhmigqbrswC2UE2ysatwmPLZMVWeGrGL",
  "key6": "4tDUyUueTZJuvpex8AiqwqKSzqzNs5imHSDYXxWepSWhPJxDUzHAMQy2sBQecizaPirj3e5m7jtNVsMqrBVN2v4L",
  "key7": "3FDYKNRAwg59tVpghr2MRyEnp7wpgkrWP656XfCdKSX41x4ANpdrfQAU4DzDH3qMqdLcCc8h2CFEYWP9rYzZ29LY",
  "key8": "4tdBnQiBNAkJvR8E63FcjtTaXBF5d8Y32iJRdBm1tedxCKAwMQyT6vyN4HDCTNR9UV9C7o8zgAKEi2KwMERYmyth",
  "key9": "2UPzx4vGQ1awo5KEapgC5bq7MJmNXvmmV1ci4KGfFFWrdZ2H5hTJWBvS6cLHeBi5dhaQHKCbb8aSEbGq2s9iYQ4z",
  "key10": "h3o4tmZDVhdPxRqwr9PyYCQmq4uNFua8DmEuPoDxS6UV7KKYQ4GDvvDpDALQ28szjBkmbdoAM6m85es2g88DnTf",
  "key11": "3VaeMKHuVZLhrtrk65Z3NdwTDbgvqrW18hD3VCdwwHGpQ8aBZV6uX3jbQ2FquZe9vuETxbBBfDzwQrQ6Ud24KpyQ",
  "key12": "C8ZQ7JvqcGVmtH3hbWVFr7Xz1jsq3uVX2QHSfcJXcgxkXsM3KEr1D8mqY9aencyTWE9zHztfUPgunZ7EEJV69ob",
  "key13": "ejMSGs1Kby2qn7PAEEc38JWNzkeX9cPFpFrRExa616ZdDSTRUWBnxXvWJdF1jFgtQdRb49ZSB88m1A5rPbBzHr9",
  "key14": "4eEPrbydeARyBtF18krLLqJjLj7v2ZCgLTvE6fCKEc9V5eD5gRC8kvz4Ja6pCoFbD9rCKPsUzP4g2ZwhGq9oKab9",
  "key15": "5EAr6x3ECYBFYfDygVsAd2hUGkewP4vD3DvdoZJv13Lty6Egzav6QT1e9p4pXgv4is2oscvhodLcTxLXrveWdVo1",
  "key16": "2d2pFBK53UJhF8BWHR3nNxNPGeyQCeUjvoaC6qeMgr9hBW8rPMCs2ruqWmC6TGjEKhMnj33rq2XWHoE6geytPFz7",
  "key17": "4kkngSZ4fCbMQDNjFCobQQ8yrii1w6soUrRMKcguGn5gwPnSZWnNLxcfPiMwePjU2wvJ2YraaM4E2u9utqf8NoN1",
  "key18": "3Zwz3WLnQWt3ZA6grfGoGgBojtEjt5BiFzGrA7KbrYSBgCw1c6pZkfzFrquPKwvrTkaT41rFWxfCJuFgH2b9jP9S",
  "key19": "SERMDAspQBkBJNYhqsxJ8HqpS22U3Pho1vFUTapCF2aLXDiXakYX294B6XCCoUM3BU4pfkyU9zxBQ4u78R4or8m",
  "key20": "9u6v6PXr5294tLHBznyziUYRYjj5jHCz91C5JzKm5WFaYS9EwhxbY2Yk5CMiv9yvF2BMaQFBCmtg4B8pxaLgERD",
  "key21": "3p11fKzgrsLK6rquVuAchdP1SMRa5DN7Twf4888ssTmAYZuNr1mpqfrjqqv1vrxG1RutWqrwZf2JiViozu75cBAi",
  "key22": "42eVjpR5nrJbPXc5vhuurmhPPazfFbegoB5piPeTdMuCPn1mNvtDBchjZKdG78dvPApFPGbpH2ibJ3dqNYPCMJ5x",
  "key23": "5t1xmccmvZ7323oQHkqxVyLsSogSX561oCEUfp2J4cgHTrgTbHrXEViZAusKDF4ojrcoGhLqr52rKgHuabCNy5Cp",
  "key24": "4M9mBxyPp2EkbjRzBBak4KiaiVxsG7GRq5y4JdVeKrp2vUcwCSXhFcEXdrZuRkdLSC4gUHDBrppyZRueYp6WEEtZ",
  "key25": "3SmMepUGY6wKBK76fPP7BaGD63y81w9k7m2LX1jK5zEbfknZn2M53jNTYPycQAZggCTN8MnHwEVgkTLdSn9q9dt1",
  "key26": "31eMeXy5JhuktF9t2X5m7e9VTctomGNUrMPSdd6vpoHG24sUxff4XhYovZdekupDey6v52YYYgaJVDzghCfQtF3M",
  "key27": "EvLZN2N9R5yUE92gcDmJQvN5Z4pjCFcUZQFFvNv9sBM8X9haiiDK47fMUz42MPpJtbs3SWfRiiNnwPaZWXmHiLG",
  "key28": "ZmJ3GvKmac9cP816eXm8cfzkYHUoukqQYLYgHH33WWRFeK7RqWyurUDgTB3bEm3JyLoi7Y2MrfmLeH1zgWTZV36",
  "key29": "UqpTk5fjRwgE6RHBtcd8xRoSGvLnkgwaAWd4maPRjv82KgL89s88tAx5HZDUZN8fn3kMTvLyqqN8uNQP7icQbTD",
  "key30": "4m9LSVJgUcp2yWAYxgEwhaNS2YV9rnDCKKJsHka4ua1NVS7SVu3TzMFRHxg3tfmYxTQiLcWvNCP73Nf24ucP2Dhk",
  "key31": "4eFk63cmMzuN1WKg36YpQpgU9v44eu5c3cchV7qo9qXZWz9SgH6hdMjMDKAShoGepyGvKCwRDrn5DH5JfjcbVmSm"
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
