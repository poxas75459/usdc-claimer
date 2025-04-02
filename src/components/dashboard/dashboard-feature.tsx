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
    "5dqu3AvdnSEK9jX2RFcm6dq7YNKeKcMeJMY59XNi9UpebRqGL2WBBfRPPAY7ZofwfCp1GiA5A4qjkusQiZ4rPaG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCddvJjm765SeN97qsEoYdsjB2aeyznss6qyFkLyvTfzs9pzfaM5Stamuib2mVQMXzdVWHGiFjWguu9ffX3Prms",
  "key1": "NaQULx3CRiASFDUPc6JwKVEnT9MQ7HTjEfNmAYgPCynKATGXh3JoNA65fx2MAUCgmGWHz8z4WcqK4nzRGBFNMN6",
  "key2": "3R3nT1CNKZcVnhQPqUEZMfX36CKYQbCCPRPbykWPg2S2zbrpLigGCen6qJGksdvspbNf8Gwe72mKcgPTHysZPZpd",
  "key3": "5PAcrevN1rQGhvs2oHHDPeeeyspry8is8a2FYqhB92JS8uFhriJi16PFZsAtLKFXyyZqUg4E3cU993wH1XCVmGfJ",
  "key4": "5EVdMrbPQuUCJssLo16geY4srYFa22cyn3ucPtZMmfKzN69keuocgk5kfbDTGrgBYBmZcF6N2Ct1eMZX5gcvM1yw",
  "key5": "649AhWdDgMy1xxJQwoSX5EdNxugV1agqWWY2vKM9R7HmmdUpmmZmbQW2U5TEpMMbskFuU3EyHW5idkg6qYwj3p6p",
  "key6": "5q9S1Ag5czS9TZnQ7qZmNjQKzGK2PDN7K7EPVnAuYZSuW74rVC9AuRqiHxGikM8bXaQt6S4ExzjSv6g6EWpnviKk",
  "key7": "4uuK9Dw995DtujkP4S4CVXQudsR5z9kcoENA7jaFym71DfNasF2VAZQWpdXbS8abCakJ6X7o9xizc5bRKsvmcJPJ",
  "key8": "3zzcpLjjpJ4z9TgyaJ4UbjVjf13RQBJCdqeBCEQSzvaUqWgCuHXoRasQRiGqYDu5UtxMf3q9E97K76JZFc1jN1Vf",
  "key9": "2dohVSgx1LtSCxcW6RocZEm58qsAJWt1EqJ5gXUxzdt3oFn1GzmmQuP2m4bYAHU5AqZA2rCtgdaYgZR9T7Rqkctw",
  "key10": "622nbE8Jmk4uTEbKxRDCqE1bsDnAPdfVasLyQa6WcjDtBHuGDNnpBg3EBy2B5F7mbB1jT7jcJhiZ7LV6i16C5woF",
  "key11": "6537S3LC6nrsjJyo4TfnGjQQ695w81cRAXUzTDUvezYzxtvpy25g6bDknZ8JYGqUCt9r9QQxkPxECw4Su1ja6xeF",
  "key12": "2e69GW8uJekeZPnjt4QEzTd3HK25hZwQCAvGZWXDGKwQ2fiFfAZmRUnpBKRpb5EH48jc7mqiShUHuxppqiN1CCVU",
  "key13": "5PsEFo47eiXz8SGn6NXoQKbATU3A9BcHE4pq5R2MFS7JedTZzwgoZTJopMumTaiTpyQgpCD9iVAUt8v4gjGn96jv",
  "key14": "2XMx6S7X3PDiVvWGBNNY1PeLsSszh2Z4CP3oUshW9LBcJMALomXccUfa3uAR7AgfJLEHfRZr1SLgaGu8fEJmPKey",
  "key15": "4P1rbdF74HD5zchnvZGruec89V6wQ9FFE24mueZEmsiFmTsbFCPto1ZFs7t7pH4PDcqgBQeaC3kRzcD6ktLpLxgZ",
  "key16": "4pMHY6oQRWRgZABMvQYPuhrEisoafV14PHttNX4zYQyTzpqeGJ5dP5HuMZ6X2tBWgSE4mXXoNGA6TDUSFMEsW4LL",
  "key17": "3Yyx3fZxDTPCZzb3XsmXyeQfCzsYJvUpFypwb3HjtyWNUjADnHSSuzPReeWcHSBka7G2rTEc3a3QKLCZakjLkgH4",
  "key18": "2f73XcHjjcjsDKXtDTVbZ6Rpib1toFYMEXvAhsZGU4e3QRJiDyBZGtqsX5whPJgFS5cFpGjkFqCEefbmaGoCcnFs",
  "key19": "3DPBx9ZdCN8Hra6qvi5yjNvTu9sWestdfaG3FuAHyy7hbpc1bQGDqHBCef8fcAvxsj7bgFYDXVbctTXZ3KxxPyRD",
  "key20": "sttA1wJi3FmLkJKCzizYZeiTRdV8jymyC4cSYJRgSui5UquCHS8VMqP9EUaeqcNjNBiB4QUXpct8c1AFVSNGe1X",
  "key21": "4FB2uJ1htWtMEsWLt8G5Hf6DiTzhrCvtFj2r1nE9i8PHkL17cgzaFkSGVq3yfMgUrA9RznfWry4hqgQkDYbYnjNE",
  "key22": "267BTvqhdBz8zWR3j7Ba36Z9jBtAwPY67dUp77U2EyzMGaiiU1JLxpKGtbf6fZzD5W4Q6jysEMSd3Ztf1v2h8JUP",
  "key23": "5guW32tzH4jWpGrKou3mmhGca2J2FwmWjygwfdq2kjWfTLPBouwBnmSJDMzrYSZd1xNFxX7GeFNpSqpuDFgC3daV",
  "key24": "2CRbXnrpMqVFgDtrLB8xihd8o3dtXZaPorpMBLWFP6gF7GiSYYMm4cuES9fBiUcgHpV1mmFMgGVH1jHBJ8hAgtxh",
  "key25": "2x2XXpdAQ21KrEU2nNbFmriRY4FMEXCJdPY6o4xUbPsrCUnVGPSfasCvrmQxncwPAfuzKWxbmGL2pUhAjkX9ExU",
  "key26": "G4r1K9QXCUAP6C31iC1Tc258zGi2B1nyeqHtFmqEMqK9FbodumYqQdPGBSi8vP6BYxH8KSCHET1K3hR1w4uEwMZ",
  "key27": "6NUKyjddMpUb8RTu2zVDqv6VZA7nKfWVY1ULfv999pweLX57FNj9JkXjFhYveYub5ze8xKuSGkuymEBQhUnu57u",
  "key28": "56qJyCndSVhY9heWX5g1jeEztyeMrKaFNoWeFcHDe86DBAs3bDpo98BxV1nskvjjHxC1u5XpVU5jVNJ4sP2gJ8pR",
  "key29": "4fS4WLtJv2TBkajh8a73J8mMH6sicM3FU5or55E8TzPFqYLPxguDpNuC4EnEEiMUGp6u5QdqbESmmnv73NMnpbTc",
  "key30": "4EPXJVTWeNacNH3q1sTnkAs4XxWfz6d61zhDHwjPBgsWMzEbgWgYGkYsHaHmBh2djDfNjUcLY1edPMfPMitgEyVH",
  "key31": "4U9smBipfajFciqiUyxnM9o2uHxAKG1D7gEdwCCT1MTWgDhrHPuCiDiSqFxK1aLaC5GktcUDtqVeDP9vrnNnSAV2",
  "key32": "2Ju4wpPbArtPugfU8wRaBEMbRqRJhp2CGpYuzkHSiwrJbkBDQP28FCW4ixsiS9z99v1eXy8s6rMQaorGea4ytrSF",
  "key33": "3RCbwMAQi6Ay5BUhAjDpKKQdQgnavFg1gjYtT62QzDfFYVJZuPmp2feyMuBQTobYRAfein8s4Ky7VUqa5aWFjD4i",
  "key34": "2voYvzxUU9Tm2NzxrQcjgEPJE3wnaRDYmCoyfGqYQ4MJLrvNNZ1QZbh3Y8bz9JbyuJLZ1dDpSTB85UASKTf4wY3X",
  "key35": "522qkofvQtvZBH896F7tTATMD8Pjac3zgWEtgKkEdv6urmEtpFmqmYoWh7oRVhWoETesX19TsDknrZ7QGNU68H1g",
  "key36": "2X1RRYJiUBSGjtPCB6nvjCUESLCTtj8wypPQh1sa9ZG54Uk6frBQ43YsUovD7mYiT7XzxdBJAxsxBKU9q4dmc16T",
  "key37": "2moPxjBGNBVWt2BS3H378PrweEAAx65MFVe2EcEJP6aPCSjYFu45gQdm4TJnLN2ccpxY8e4np97PTMECqwiVGLzy",
  "key38": "29syBe9gaVR58jyUwFW9CVhS9Lj9E1HLPtZ3B3rTNn4jm8JFcv3fvwYVWrpkAKgYCLNTY2byH8hxLuLPv4x63hvJ",
  "key39": "5RkMUGLCL5WLmegeW2eyWz9MhX6PzBge8qr458FDKdEx7ixwyD7tCg4qZpKBJDfjj35kaZzHUX2zwt6M5rw6Keku"
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
