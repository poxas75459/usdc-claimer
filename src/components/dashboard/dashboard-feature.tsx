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
    "2tbeq82eALmr32u1K1BskRr65k2eNap4YcyqtLicVHXtYtKpVScmYiWySe5J69PH5hBGVW78Gq8GdDC2ssQFk2P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XafFXy5HodixREypsEEFsG2EzXrHxn2z8TpzN5REK1xUSVz3HBg4dwoM5cEP5uewAEd6bvZqhy2dtZxQ9TBoNf5",
  "key1": "2rfSjcSqmNvEjsBdZi3sefJkV2TDG1zHFWGXqRFyGPMAMsYvAsFPgETmBhS2ogfL5oAwsGPFKqqA22Gx3caNDuP2",
  "key2": "4uuBHkB5DMBeSdduNcZzisUkz8q4QKkx3UBqiR8GPka6CfCevvTkJMhzbYKtoCxyDxpcQZymQK6dQHcpGSy4gnWS",
  "key3": "4qoxkRpYCA1QsrqkVGpaJyRwi5q16MX6PV2ySFsDcBxx7C49oGvrcMEQBeU9fwJXfCswgdGV2s8UWyVfvzRFyeej",
  "key4": "1ypdG19UCpsuKbPfGDSJU4UFkFZKa68Rbm68pzW6kHNm1zP2BbxxDJCmqY7Qvm4cq2bJFw4PJMJPjTGqqqveApj",
  "key5": "3efFmmoEj674PBF5eZExQjy2TvorDWrAfDjqRRXWw4BQWuP2g3SpSfpfVZJ4bCTBxLorefYsjiA2crYm4dSZn5HS",
  "key6": "39X6bUuwStHaDKcWq6Uvth7WJmJChNKGtHFbPDRosKe7paRsMRWmAZnfBEQpFoom4ZjPzu8WWXwTHFtJVNRDCJF",
  "key7": "2SuqJET3x4C9EwBUbqZMiaDpnv7sf9vUo6nRpyc7aC4u7XB6YRT95rif7Rf51TTw67YWTRQ2YD5wXMRDPjAU6uGn",
  "key8": "4Ufup8MH4PvZbxUbiWrd79yAunXVhbsw6bvMoxMz4HHD7UtqmpSpgzyfvcfpmLvYuN573wegjKBxzjzN2ETNNfuM",
  "key9": "4YW7RpazgXrk1SgvNoVJNgn3groNpudLjk4VfgcMvuhkKmtGfBanZRvfHgNpKRYgeW9cfpYuLyveSF66gFXc5bts",
  "key10": "5d3X1FcE5xTRDPwXzb3YrGZAnagG1SHEGnZij81ntBfWpN6KuBi36nqqFXC5wnvkAnSouAg2yc66tqzzG5GiznUA",
  "key11": "3efZFvu5YS4myHUyDfVAbRm8YK3F6J7qsagPKTS2PEPNjj627jWwYyPwQk8G6E5j5YqT6gWuWiGScp9Lkx8whAPi",
  "key12": "3stfPssM6h7WB8i4VpoNyX6WckNvR6camUfDNBArtHeX9ZwY1RwUJ1QCkFszosCcbNPkCZALRr6kuRLY98ePjZry",
  "key13": "3MkLVaP3QVwMHAUFTPeb1QwgrjHjzpxizp4Hb7DLFpgKtMePU3UBUCqG2NQeQsM5Dbq7vXS2UoHwrcAbU9HCbLjY",
  "key14": "3ZWjdLDbv5jPnA9VypAHwBRM9uXFkkoCPffAnAYXrVyhXjGSCeixdwCk79m8Lf4NfDWYmHHyxwrG6U1FovdSNvSP",
  "key15": "oAxvzwQra9VajszSU99Y1nS3BNS6mxhyXy53o92qRTchquhSxRzwY8roxiaoWVaj7RKvQEcGFMJr8dwTaPN4cdS",
  "key16": "5SYcsEXpioCQLNeGfmYxnL77Pqc1Kn3GCnehfMUCcj2W4HFNUKxBpjU1aqdiP3sP6szDK5ggFUDZMTPLm4LEsHEQ",
  "key17": "435UGmQjs1CfdCzwhXJZUncJ8HUPN5HJS2CrRRfTHmdZSmcUrysrW5oFDCBDra2wVW4doWXuSaxbPvTDB6VHe91k",
  "key18": "5Pht9dD6taQZoqJg7hYr4KAPeKPzWMt26owS41v6SuGphmiJLYaXXG11xmFRXmDCrtEY8auZAqQLuJUy85GmY43G",
  "key19": "26bZVhdPPWMUWJGX9dmpm8FZp7esEii3XVXEybtEe98ysXVJgzMpDWM8dJipWCbkRBFAWcEDha6UbPpibgiQHQpe",
  "key20": "yry6Pw2otQEcaynbL8Xf8kf4QNgBXQgeGoVjFcXoiK1b4LoBYodQkV64pVB85pNcS9yUV7vuJsYrdfuLZwkKegJ",
  "key21": "emzb4am7YYugTD5Cf1r7GMSuzMG2Lw2HWmaAnsBt7cffcEgrugQLLCYPAAt4ZL9v3PmqdR8aVRngD2JbhmYeXHW",
  "key22": "61aP4Sw2UTsas1tpXqirzqNFeXWVfJQCRKHv11Hhb2fMuG5gjGL1MnuDhFrFGfeSBxFW2yo7JW6wXGw4ufoJNiq2",
  "key23": "5RjMYgPw1EJ9k7dvEBXZAmaJ6GThdhg26i9zrsQGFEDsJ5LYEb7GUn2Fd78qAi6sAyLrFYy6S6BJMUNhuQ3bYjX6",
  "key24": "358WX8JT5yyAuAEmF83185WN2JjE81fBNiMYDEquFojVnwgs2yDxtMsR6QsyAXuwzKhnfUvcvvvnDMKeBuD1Qt7Q",
  "key25": "3Soo3bUEJMiFimnb16oTt7r8qVfSpiUCpaz69stWHdVYuxyLGA8LX7qtnUXYJo5sTE9cc2Pt8z7wEdjz5YqSMgt5",
  "key26": "469hcv1sXLwePPys2MsMAy2wPykhiHwZWzBHfvYAVRbU1xmGPyQ1nrhbuPN1assbAtrPrU9oU1fS1w1wKmMxdjYX",
  "key27": "2wjYQUgGG6uaHgQz4Cwirhw11ZczgcpeeYNNJ4z2Rv14UT8sKSX79sL8dwkEzHi29qNuhhJLzbmrTR328iSayvgK",
  "key28": "4Cvq8ChVSHM5vUYpnJouTot4EzkPPRAQDSUto4KWorVETDfve9W7p8j2pm8faVDBNsucTGkUApsgeGA7neu4g7nJ",
  "key29": "5Cdm6q8SnPzfphCsA9w6X4gpf5vgfR3hLPogtVe5Z3AKK4vfdkggdyU7MWRucRkDzrFh6kVb5T1pTDXPMok9kdVL",
  "key30": "49sjm7gCFXjdW41BYRmngAbezFzvdYmCb5fKyNfb9rEnpu81e1raAoicyfVm6QJcTbN1upQuTU3EmWsK5yDNYwni",
  "key31": "3AVDb1L9quJvNtP6D9BFevZo5ngFHv6acpB7xHtQohrMSUG3rRYh8Gi39zq6sDV2moYLhd25bADw8FJhvbngoRqH",
  "key32": "3V6bsGWR2DAuMCdtBC5Qn3ArUNQixGHpZ4e8Eq4TZZZS3DnDDtMibur7BpoTfVxH8kWoQrsbkF87nQUuFTjkvj8D",
  "key33": "5Ya5v8P6WjC1KcT7yXr9amrVBqYRgCunLmQ4vJLa7Qz6g6YChjaxAnLANrAv32x6gahFBYJQ4izi5Vzb4otNRjYd",
  "key34": "Rt8ZgqQPL82khmqmJgaWdKZfpK7kYaDRfRzTKx592AVQB3RVENqCTmcG21TMt15LfSyLeAXsXZaLHQ71uCgPvnu",
  "key35": "BLzv74QNS4cWSMVAqtFwLkcemwrszVHcmZP5nnHuKssezBHREjgiuUK1uxU6cRUDz1TbwpkprKke5fzuJWbwcRZ",
  "key36": "DFUPbMBJAkFuCJU8VkuY4Z59Ct41t5uJobwMZEAUPysznsL4aQDEDeYTqgZL1JUgpLNRwFfk1WBpoqgrGQcHf6z"
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
