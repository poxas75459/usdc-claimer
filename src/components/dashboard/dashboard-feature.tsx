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
    "bGHUBmKDqujyeBLpsJydrBSrh9Vea9FBkXYKNBi2WXAtMP9NaM6Nv8K6jzvECnmEf7AipPubAoBpY1u2GjjbkX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uSoYTeiL1hU599oheqPDD3RiWJmyuxZeSXwnFdz1BtVsPfzTbhHwcnVcAkPbgij62qVfrYk5MKP7RSC2CNc75ZQ",
  "key1": "3i1TqemSBkkpbySRxkQPYLVFvqEBYNij7HumPAyatdNCedrJCXhGfUECFagSRHYyEKG5NNmYmTp1Y1dkBjfE3HK9",
  "key2": "2UEmJrUChtympRgLwrfShKFurCBQVZ7BTLMxuBpn6eeANccbA24JpjaDidKKiAtNqRdD4SDM3F2Mu74DJEryqyhM",
  "key3": "5J3hxTDMJBzNQtNZLK4LurGyhoSyfEFChwMaridf52WP4UtTi8c5b7bu4iBrzif5JCc8NKf7e7TjuvAXP8EKeucn",
  "key4": "5woZfhfajhz1M1WcfaxmwLnyouuESePA5XJ7oCAgLQnmcSsrw8ZyMJww2ELaRygBgPK9Rkw9UfqCJykdXECF45tL",
  "key5": "3SMgP3UPPBiEinFaDtvvG8wzVUATEJ6bHxREjPeKXEciUwv2TFPaCkNb9Z3qh1Jd5y647PkYuvxCUNjTESZrJq5L",
  "key6": "21Q56CTLcEnyHCNVJpBDkv78FhafMArotTi34y4AAR321EtfegxspVGhX4Vd23fBzoqgMGCSFeLainycssyJD4or",
  "key7": "4Kz1kWN3LQW85m6Yh55rgeqVM24ZbyD6ZAjfJARLUHGo2h5n8pPMRsiRAV7HrPMc3jbQsWWiQcq8k2PMHipCKGQj",
  "key8": "2Nu4jDr2qLKDi2XLUwSVzBYkz5Nk2Z96JE7MUYRHYVvgjvNvV37kWARe3Sz77ZnFEfKJg9tx2D91qALyeLumor1L",
  "key9": "5LrxBvvPZDf3uFGfvyDSR2pz2PC6ExWWFVqFut4DEUFsxY3aQWePLrcCJiR8Fy4zmHqwey4L37zJG7PWWJrhRTKs",
  "key10": "2Qi8sush8KBxX9ncJ9UhCJDSuGTCPam4vMppkemh7kvFSiAkspbAUR3BaKykcuoFBMwSsU2d2jpuURSbj5Q2jtqg",
  "key11": "2A8dbcihJZJj8EtFWjNG3tWWN4wW42TohfAXiWU76pQqLtjoCYbnvfJHcuTMHjx7VucosDREpbwcbrz3k231gbQA",
  "key12": "2dgK3LjRLL75VnbQswvNHicCy2LmjWYvHZCWR1Re7L3kbKxLZaye8nHSec39ojup7oJ4niCostxVTEC9C5FCbTMX",
  "key13": "3KznLSjwWJBT8Mixto3HHDbn95ag8Gxr4MarLT2QezwM2gsxXfQazwmUG4SegLkm21yPzP9GFPGJPkaGiNX9b7nM",
  "key14": "27ZVeCM2iry5f2o3cvXs2eDrfdjo3oW4eFwxFsqso5nKM8S58s6CkKEfuBgwvn5WLZWDJ5z9jUGAJaLeFvc3G7KP",
  "key15": "WkESzuzEKwq4zhmBx2VbKjxPRuSxGutQjZanfAho4YN3DXdWiDRjPJYtguv5MpRtJyVQky2fFSNLaV7ubNWR8E8",
  "key16": "2Ziok7nvNn2CQC3bG6PseXsfTQe8QUKQ1skGiRXTmUt866A3C7WVey9BMQvqyHSS2LsSaxRYiAnptt4Yt4PVqbJr",
  "key17": "24W8hBxaNTZkbTHYr7hpsYR8M5559yzJbfVJH9dsouKehzpBr1d1oTr6ANDFK5EyY9Kq6yHz3GXt8W2NhXYnKtzM",
  "key18": "3AyHusVJL1oaazwK3HHjRJYDA1U9TWTJGn6CwfNCT2WHyjUi5c99PKtZ81oNsiYoK9weqSCYtoVQjGuaztoTG2BR",
  "key19": "5U9JSxuTuSB6e9T6TRTQD2AFWK96rK3eppXvQmKAoNA8nbxQSpySR4GjfVuoJjpku7D9QzdGxjw2uxkA2AvAjwV8",
  "key20": "4eiTDUhK14p3b2phyi5uKioeJhm3JRar6jztXDSR7BCwiH5uWxnR8FKSePCJ1BkUmCqREftavhqQFw8NjTuhDjkg",
  "key21": "3RVLxEcedhmxqC85HGaetUHgXgMYBcofCBNtc5EKLv95W6BmGEcaN61UnRBNmPCjHBKgWjrXTxMGkCGwCqXUFNvr",
  "key22": "61Kbn2HctV43n6Vd18mSPJjL4vc3CmWkgYTJs6s1wubHfvG8VJACE7BRR5mi8jUVvG9eio1Z6GYS3tR7FKYMRKdd",
  "key23": "Sp6EUW57zHwtaKPgNKG4V7uLivfkrC8zGZttk1uXXxFTDWCXMqkex3rMqE6fEWJvp4e7yzQEzkaZbssEjtPg33g",
  "key24": "5qVrZZ9Mgj1zmUQ8cKmFm65kiZsB6AoaEc5G92Vqc5ZzWNFM7XbLKwr87fWEx9RmC6MVnCLorwJekz2FAeSVj8S8",
  "key25": "MKxvUoo7WBLg4JvPavSUeuLcryCaRys8sJwkfMkJWAFLiuMvkG19Gbt9sLQUKepkgDuD4VxMMsBmU26zMvmxcCG",
  "key26": "wL9mJnWjW1ug2yxkX9w1AYAU6BNdnz5JzCEYpGCKsecBbuUGiPWE1RYFEjfcxbcCVqLMDiakheSaPv5ZmQJBnHK",
  "key27": "3tyczoLNUNBi3HQzNDrHWp4JBLk9yZNi2tCP9yrvTnnvQEYVdNrm3ZHnpq7o7BUw7jBvvPzBc9tprQwemRT3P6gw",
  "key28": "3vhnrB16JUH8oXXwDT2PndPzK1Fv6fUVbSKm8Z47G1GTfzhf7kLkwik4K9wvGUUXEnMArzjpYqTCPLgTiDbhvtVj",
  "key29": "tAE3gtL5oUs6k2tmkuYr21LKSECaet96BweK2ogybUYWPPGn1E8XkWKEGoNdAFwTim4x3MJrQcTiHgpERcpwh2N",
  "key30": "5v3T2bzd7Xki2PBXfAuWFoWGsujNUJNJAUNG2KERms4z4mpomLuLjMW4uPxyzbihuFMb2DS7qMUuszBDzPALrZBa",
  "key31": "4aFQnmtc3JCuD7pnvViMdqLytcbMxHtiGwsaw1Wjksvo6BqP8ehHohZmHCVLgMJNVbQaQEBkmqFMsnwcMwgmPUyV",
  "key32": "4T8N7DDaFuMZHyU1RebTDWZciyxW9ycPG2H7iFQX7LZ6UfZoq47gF9d6PjJJbk9Wsc8ka6iiAKmwy4oao1oZtbhd"
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
