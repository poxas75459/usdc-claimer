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
    "3Ar6KyLoZY3kde7idRkyqB8Yy3KpYknVwDmZxsGGEwfMwGYZt28qrUvGfVgZnfdzHzAVBJRaHJQD6VrE4nGg2Qev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56jc8CXDwv4eZc6YwrLWtL2Lmk7GL4G5j41g25EPRt7P9tSpDxScUPhTyjoMCQsxwM7GWhDkUJdSsUbBZ8j5L3BT",
  "key1": "332Zuq3ioo36B5SmZGb9nQ2uGTdkWJ1rpxTBpzBwMFKWMrVcpDQP2xs6uuEd9SAxzCUa3jCpqt9JgMp5KRF2ETi",
  "key2": "NU1VqNMbu5GeZFuxpiRRpJpnAFF9TdiTUK7iKJUEQA2AWJg4g9T5ekb1jJcwrfYYAot5MuwCDMiDtEtuvsqMjQY",
  "key3": "5AiTxTypUrTk2F5qJCp7oQsoh16rzKYhvzmotE8Z7itzFX2Vc31mjSNwDx2QfQsneECeJn7crdbdK5nM2MFGxyqf",
  "key4": "3LGK8s3SkCd4nLen2qqr1yUY3hUe1Uj6uyKZszWER7gJPi1vzDeS47BDhpGUEtSfBfMCt24X1aKwzKRAPTFw5zMK",
  "key5": "Sv8kXgXB6iBjgLKKcEbZRFq5U9zyzrN2XqMkPLhTo5nUkKLmoVGbxTmtbJzBvw4L5qARffDZxwWY98odxbtEsoP",
  "key6": "3dWai6PNm91oEakoUSQDmvUv5w6JoxChA2CpSPNcgDaC49MREyVyQVW39iwfyXF9FK2iuddXRgMU6Xw75w8mSsDE",
  "key7": "5xDAcwda9btxS51mmsoFoFBQPcqLYvf8TX1SYWTdFK4arVLYw7i96rw1WBSyt99vYay6gMecKjTh36pbhenEJWs3",
  "key8": "4BXBukyUPqYWctWxMzPtDPeg2bv3WpThtfwigdLUconk8JGyJ68j8s3qfkT958kSXiZbrJiJfKHZg4WFpQhYzQht",
  "key9": "5m2Jd84y7QyKA55fBtsPTacxvpxb9pc4cDgZGVeKmJqXm6HsntVBnSLoN1MjoTam2XFaPtTV2toduJiRzkgQVx8u",
  "key10": "5o39f2rsbNxrTBp4Ayyqyh3QGxzZydiA7R4fH4pmia6hbvdv2bBnrW3XyDg49XQR8nvdr5YXFAtNwzZfv9hpSPS4",
  "key11": "4o1snLDAZRhKnpKyaUTkGYdizqiA51ox7vnheK5jMDpU4vfK81rDTMFhtoN8YShSNZP2MuiZsCDfFXpAkNFKbRpZ",
  "key12": "9q2wq5XtzghugURUp2bXN1buComWnNKRpCPScpdLVp7nze62JY48BXZbjx6fcBhjiqGiUx7w37PHVsy8haAG8XD",
  "key13": "3ZwSbxYHB8znwCK6XbYwrfojK8Yqcsr5YRr4B7vWYY2CwhYF4eRw5UETzDj97uc8byTyeTNWANAiAhzpSpwHdpt5",
  "key14": "37hQGVm6nFERMKtEFK3MzpnyCJXcxCMT6zWDmgoep6rZqvs4yxr5WhWNYTLmBCcPbV2Aazen7QwW1Mr8nkk68zUS",
  "key15": "ZxijQB57wWihb5W9hHENF5M7BGVD7MKyiRPZ3NrAejdHBhvouH8kP5ntPgdBpssbWr4j8Y77j2mXzgrT2gKGi4E",
  "key16": "2KNkhrpwbZD316CECgcmoYZxteYTb2yVbEWPwD56KUHwjSRNeJzzXp3mqShGQCCYr75su3nujiUWYq8vLb49DmdP",
  "key17": "5oHRcgjXFFiJfdnVKfUvae4pXtsQvD24afeDj9WPAu3aKunkGFwuNzSxd3TrL8yeS7ZqoREecu2BtzS7Z3yptAos",
  "key18": "3YPWrVAHoV4sp8KdQV4pK3zwKe65kME2bo6wWgGBo3fb3M1fSEDcgnE7hjUivFY2wodSZB4J6a5GrF5aQVqgYWTn",
  "key19": "3Shh4X2UiD6wKxdYDSpKV1ZppkAD5mFAJDu17upKCuCK5hHLYP2aJ3s7gFBKg5fdiCS2UWSkTYq6ekQATyySFxtN",
  "key20": "LjkwPXurJEGRvkBsrSVwG3xu3GyHvoVXw33LJ76oKCorkGMW9FkBTfDQJHbicCV1fikBTDeGd5CMQnqaB4P39ja",
  "key21": "4TRiG3WjPd8i4xBSEqKrR8o5sxqdhFYNL4WYRkCcxqrXK1i2ofrKGQBdkEt8iAqJwspVdt8bHVKCm7TuFP4gzDrX",
  "key22": "3xFA4skKz5NGC3r6PtqpXy3oidUGuaGqFcAytPdTTAR4Nn353L75jD1EzRHaxNic75RsokADkCtETSLqFs8mnSyz",
  "key23": "S9cW9aQdffR44swb3WHws8S5g6TMdsuL2WKMCYqZtmtXFYKmzQ5gbTcLRnwHRHBES45cHpJraXxC2UGdHQWoACc",
  "key24": "3QaZCARfgw5k95tj2i8Lq1uizjpWmhdoJzNLfi61TrCtbXMUe5KjnVoKFiZfDMwZyDYtzRgMBSftxDiUxJeohLiZ",
  "key25": "51YxB8K6tVX9r7sjpzVSwHCCJdsuzEFSrUKQaeeRTv5edHSbD1ootTXL25ZEVr1ADo1Xh3rrwxyZnTb2DwTjVoVH",
  "key26": "3kihLfyTaZnrSLsq4uRZ5Ugud7afDqZBL7QQgJViW5fDZVvBAtbupqhAuqG2WumCjJ227jSX2AZUg1ZRwQbyUDYu",
  "key27": "2DW2aczRPFVhWmJCiSG89x67hvssS3QnSWRsFmLs8xR8Tyc1zpA7kyr4GHJwnPaeQmJSn4C2Zf2EXrscEjWGhXio",
  "key28": "5XEzBmt4vQ28phUKxkcQNgHZzLaoh5esePuSjwdsfYwhdoq3eKciosSS269rhKnkSK4aJBRE6ojZezavDAh4r6Pf",
  "key29": "3AhzJbAYLaRuGi6s8hRuqiYFgJ4HA3EifxLDQvr2wXKmwZ872Av8wVSFvJjsvykxeCBkFQQqWPSzUuywvU8fxY5G",
  "key30": "4QogrNcAVsNCEaqZ2QFwzcJzt5VTu1yvYfAVxi8x4NnJjR9gsR6nLphrocUaV7B15bvUYGbmYGisNLsxa2N9Wgrs",
  "key31": "3zNgdpq1HHFBSGkjRFe2K1W2syqojkVkGT2jSJoWr25qvhBsNGdrStBahzre5SET1hEZ3GUiooManfBnY9porrrM",
  "key32": "3CndwhUEroy5eeYYBpejNN872EfeP9FRkmNdgBEYpFebDYZUfq34meHxrTR2KHmNhzZgTdmhPEwYJs1iKm2PPVHX"
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
