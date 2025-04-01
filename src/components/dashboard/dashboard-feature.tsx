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
    "oYKEekF42nTP1jH2DQKBtHwWUDVdM3AUjZeUrw7587fPwQqbtyjoEwULAN2vtMS8oXWwoMJem8nZzjuh2ZspNiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SqX7G5yS75SpCDg5X11MtEeJDFNQ3pGpAYXBzLBEuB1k5VWnXnBqgjDxDHEc8sovP4jmAiRKrNvsqjnE6ToXUZs",
  "key1": "4PwyLVD7MW9Z6UAEkrHbjTAbPXdxuTwEL68fhSZkRLAztUNADbEtkTYGqsMrG4pda2urcvCMCN4u5YoKiDo7Uh2q",
  "key2": "2tWojE427GWwBDyXg4k9xXMCrkJaBoczeheamYBi2QcwkZzsyD8QEcsRxadD2JNKWebgiSGhNQAoMGaju1LoEmQQ",
  "key3": "62ouAj1scVqhXehPTQW9sppgygFhVWCM8ZcBth8Fu6bQpTXbhNCFKrtKCbHyd6ScaudiX8Z2HQsDMopJV5bZvBat",
  "key4": "5ofcR46qBV2CCFRev4oDhcUx4vwgwoLQcYyLvhtK7bxtuUbnDdu9A8JpMtPseBm8Ruf3eup42P7KkHDSSmWYjSM4",
  "key5": "4HNjttb7B6gtEdE9o9p93YjkJt4ft26Ka64SgzjBkrZuYMvdTMj1MUS6J6epGvQNmfaPq2CGD9HKfH23WB5n7pWd",
  "key6": "3DnBzYnvsEwrwv3NYkC7aiR7uH3pumSSXgL42trW6NXNRma1Z6QRK1MvY828wkXhW8afjzsRfcsunhufPmNoRYSm",
  "key7": "52LKyNzghmZPdktZT2NZK2ZN6kHmyCofe1KpqTu33JJVwBMfhCcpMyDpmXH4EL4CRsdtLU6J6LwRJBDSwKpyF1ED",
  "key8": "2qsQyCm5vAwwYF8q3cdFwSWJs6hWkQ2KWdio8hXviAD4kxjKfp1QSMmi2ACy1xxq6yY3PPipFdrSxEBTR9Uimxio",
  "key9": "LA59twP53dC4qV8HhEMMKzC4ncpADJi9SNiQZ9yMiLoqipGhhQ5thP5nHjp4v2BqeyPg8tQ4bZXPSpJPerTp2xV",
  "key10": "JpfnQZ1puo8M6wB9RLFFRemSxLRCNbSVeDa2botoyfh8w2RNKZhdm9bnXZbS3opDyUPL8VkWt3qWg6WgddH8MSy",
  "key11": "4k7uTxxCvkLS2R6Ub1AtVbbNcxRD1inSpwJzxacBVr62hKHAjgibhyPM9oL2BfLKH3KbAWTw39EWs4u3HrnZoK5u",
  "key12": "vWJ2soQSrxQTtNKdvV2uMWEawcPNdWw67vHaoVhscuqEGJNaWrFx82qzu4LphDhTeAU99Y3D3BDCGBi267mmMMy",
  "key13": "39RhAinZnuhbsFmGZWv6NyqtoYhtRoHEMompfKEy55Xd2ysStiapWB7YRFWncZ5gZJ5Djajc6QCviBMrwEcBNkf8",
  "key14": "2EvwJ7gxasFGGg5A1B74ifcbxHpQwDqqH2HMAXf9Py7CXJRNMJYBTrfiCPGDM5YJf2MKbPjmp4VDYtSMeCap4brr",
  "key15": "65mRzNTdLmQbf7pqnbi1MWZh5Pnq1VnmyrSXYHEY7cGBJYmHvecqkjV9NuApVWK4jJReTxXfb722uS7ngAjDHAZC",
  "key16": "5ctUtLtPaRcBuoj6r9MSaZeogv1psurP2c7cZ4VnPKfsRB8oqrECu5Yraktt2NTm3GmBpbtnmBUxkhDtJBe1Dy1L",
  "key17": "2LuB4WfUYvMcWUqWvXiyMDnT9pGM35uNHbH9GsgSp4Y6oiEH3rcQs8Cwgia1Y8RJ391XaMzkVzokkswtnQcjQ38U",
  "key18": "3331aDuAg4Hf7BHQPKyYKoE3d9w5QHiTYxa43aSuseKNnQkLXoQCVsgVyttSAmLg6pbwQDpzEypctxJF1jibibxg",
  "key19": "5L3nEJqb5VsMppHA7z7gzFbMAvUeKcbd7GkrDpgsPVmgqLvQFN3CNJz9Ew6PJrqdY6tooE5QMywMUeMkatM6S9vK",
  "key20": "5ptbj3jK4EqxhFgjDt1NgYSKcq9kjFjkr16MPfLBzCHNgK56smtbwCGNqydbW932YNSrf1nXea4io9Q6Evjr1x8R",
  "key21": "5adMsSV1N4iUx8LtZ4wKSKrakjj76hyqjbJ8ShK2wLFVsJnaWmRJMny2fnF61SXCU5XKhbmveyQiBFcAPqQj9MfD",
  "key22": "YWcyKTAjmDWVrPmGQx8qo1JeWjnxAV6AuLUsb9cc7Up9SEr4txKnSULE83aWMPitUYWofVpSYrdV592xBwoQFLv",
  "key23": "2RJp7p4sXfMoMU5KWSx69jT6kM5kiwoxjwjRwK9jQJDtcmryonvv29Rz7N5M9jcc4daWeeQNsyyehQ2PtynBfP2e",
  "key24": "2rpLEMg44Npp1VMn9Ysgr2mEt8Q5PRHJqpaS8cG2y184fpMzfSEq8meUFBGv4XBHP6igsDAJWxmosqaBkgUtPbQi",
  "key25": "aQ6RMuyiAGkBcjnYqEcFCyzmd5JwxLjpfEFjjRE2TUGZyi2XarF8xVdjL43ML2iWDVjAu1H1ioHEvYhAQMMTRvg",
  "key26": "KG2u6kdC7W5HMvPWuanuKkWTYkpRp3iPMq9LkDPKkEkoe7RjWwAxxnNWVSkWQnLbUSCFKdMp8LYVJCmCmK8MoQG",
  "key27": "2bmrw2idbruYeWCRPXQrDjq8TsecnpBSrdHdZqWs7EsSJjpugiJ94G6tDWne9ukHN7Md7Gjik4QocB1BQyaHHPzt",
  "key28": "3C8GjjTfDuV1SppcDiUUqWACo366L9ETKmg1yciKCbgeH2R4YYSZcWUWWvfiPzFx6eGS2Df86uGAwtVArMoWjNPN",
  "key29": "ztiKQWCtbE4TbCVsVQaCVrpJiB2fYuRECoRrhoWRgHUTjY86o5guEJauc3d1BKBvMcBuhz4keqRzJqYKnkNEHeG",
  "key30": "4Gjw1V2kePqVaiRHrmQzgNmSqwax7D95ahppUu5nqL1AtGsDxwYsR2TA5UpQ4cK1zb3WFyRjV1tMBZT7U6MuBQSe",
  "key31": "3dN7JWDpbtCxavQhPLTadnLa5yKSXLTgTPbyNqvZ879KUKfL6UAiGBH7zZiNEtfdhR5Wme94V3QbzNXdM3Dcke9g",
  "key32": "cQabn7Qz6RHqNBMUYrsJG3YV5UCSJvvcuUyeURBW3fJRmaeix9uM8ZqiqRKtAgqsso4HsdA5XNorY4CqN5ky5Tr",
  "key33": "3ADqLkGX7UFr1cxyLNuK4SrYUrjV6JXFfyyRTxShFQb6zZcm4EdPRNkXR3W7QSDYLFQEZnMUSmVG66UQ4ztbnd7r",
  "key34": "5bmaxfs5zgt6Hkva7D4tgZTJFYVRBWW1p7X9V5VmSpxtFQRctLpTCBCbdYUmpfkuZVkskMm7QJ7XKjAPXd7FBYnE",
  "key35": "5L747ZStDN5dpah3zQVmErEbh4tPkVsDFAGxnzibTmd1mE3H2SS3JMVcTnECvMMgBJuVCCBDMGZySoAmLKKUPQTz",
  "key36": "3jEyMtCVUedTLzUrZUtrkAZGHvQr4rQUzxXCs4qwYmKbqhuRuRBw2qX58QCTBxaR9MDF3oeeLmiRmec8A4e9Qqts",
  "key37": "9q6HSQteVHaDSd9ifsJWXQ2119LGb2VCmqMtgyE1o1c1sNuPAPLUneY983RkiqdKoFsvHpEyXTAAxXgCNTyuPBd",
  "key38": "3GDwQK2cQpfFonGEdqmNq8Q8WRxNrifGhgBFPzUCAPdoj8qmUQB5tRi7keB1CpbyCECPqhCqtJo3Ddq72HzqLv1w",
  "key39": "49z3AnvcBkxYYKHjzjKQ3QeLtgeeNji6AXXtRc1Uaf49NQR8maGSVqWbM8HfU37nKv3LegGTPR8qzHnLZiPQLQ7Q"
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
