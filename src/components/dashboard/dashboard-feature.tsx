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
    "3QKEJiQuwK5jq3nXf48pMJBio2kDvYp1cknnG8DGqJF75y56TDnsGjwdwuvrFsyadMfdtn2HCnwzZnwqa1CrXM8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UyWmvYbrX23byrGbyVPsXTDScdeEvh1BzZTpw2CY5UMsCnJSBceB3ky1m1SBT6Uy4CZ4h3er1ZtCFybgyZmpMiT",
  "key1": "2b2PeqcKt7ikcgKwmVVVLWJZ5JYyXvgkhQGt5bZ6ubsCrWuWdou31tiVVig4fNvFcu23Hd263ggqo18XiDEaPvXd",
  "key2": "3zfSUoBSNENvuj2xNFwBa6ZtfTsZ8n1EJDKgLoJBwj94hr9Ah7oHxNpeabxsbm1ht4uDnJFyv5Ya5UBjBTKSpnYX",
  "key3": "3HRuwprxkTqKcvb5nzw6msGmoS7MLJdhcVhkwKbuMgrYWehyJSudFhAUXcEmeLBDXcVC3ypgaymnp9xk6NGfmk71",
  "key4": "4FkUzSGuj6fCn4f4qYQ4PeD5ukgcHggjwcAcv12yyuxvwh6aZ8tM17xoEYdwgyiHQnWE1Z9oDKvRyhmrweLo8Tox",
  "key5": "3zEkkBvGZW3Lcr3MkrMStDcDGHwmwq22YFa84ZYTuWXcapZmH54xMm8HpmK2JvkEB5HeNXEqmU27yGpSwfGVVtA9",
  "key6": "2zyZkVzvmX5TLzWkgNcyPnAfiY5GJ53vBcccRGBasXQDjmwxM1WVC38kL342Ka1CEzF4jmo9b1yPmcWbaT37XYWg",
  "key7": "WU7aHHdM7AcibZu32Y8mQfizQsLZwVVNLb3uMQLPmM66DSPdppKgKdP2nawFis3WSdGikgdvDbZf542DMhDKUhS",
  "key8": "4fU8bbSd5Sxun7TpknfNq9f73gaUDkM4oncp9Ud2zD9ZvzizZXGFnN4cMLBdb4wu8ZjcxTRCrMLztNZYgPFQ58qf",
  "key9": "wGcTB5a3JKodDrhsoWY7fmUDxSmZwXL1gP3nPQds9uyaVFuNaLyc2NodiGFDqCRC1JGt94L1SFCHTcAZNebZbLA",
  "key10": "4uMH3dXDTM1UQjM2FNX3hg6ig6M612nzFvPoqfnTSarc53EoJdsaUqTeqPTXJMWAWrjHqmMgdp7nNudd2D3J1Bw",
  "key11": "45ty6TRTtk6WZsmwFCc6wSAevkgQsL6KR3ujNmLt9yemgj4PcyD45oaqyQTEZqjyb4WVKLNJ8ftpnk9gb3F2BwCz",
  "key12": "4v1C4dGCfxMSiyokmvBA9JiZac5q52AdVe1DQ2HE2wmLKfJZAQhg9WoUqj2SQWGJ7Ght7oJoGTc3M72zjMvXLqt7",
  "key13": "2LfZDjpfQWhcW518g2SG1jvxsasDLxaGKABvvi1ro3Wv2cpeEBYjPzcdTXZvH1SoGaxFiTxZUD9fHHRfaErnH5qf",
  "key14": "2RQmEre9ragSWKnpEPoQrsGwvWXxwpufFzQUfW1goZAbYSoZLDcYBGA5YXQHz6Jady3NxnfA3eeeYw26dfhpQsB2",
  "key15": "63F39SYQZtSVY3dy9a48dU8JzEjFGCtStnYLeebnH6eCLJpLFAsNAyiB7LZ9z3aqk7vtUNdquJ9vWn7QFh69gbMa",
  "key16": "5v57EXKLPwFxdnJSAnwZYvoGTsG5r7hy4CAAw3zhy3hs22QdS7m4gBbXpWBs669sMeutvcg2WVo6b63hLLqqMgtB",
  "key17": "2nnyCptcEJQtXd8V4cvAZe66jcvH6yP5Hp3tdU1kDJtZF1uceUPwBEsfEbZ14PvBR3eV2yrs68StyXRUfav2Yfae",
  "key18": "5aqXNDc7deHZfsQS4bvnj9fJHkY8NZVQQmk95qoynZG9xqDcbx51yvSzbnPNUVyR2H4GS4Bv1gT2Cf5RyRbB1zqY",
  "key19": "3Vkb7bisMr4vMz6FC14pumdEmYtiv6SJtRNqMbiuEkuUpdkax4LBriLHZsvZHPBWXiijmpAUkFyNdhSvMo83J5Dg",
  "key20": "3KFHqDvcmmTp1zsMzMvbUA3ii57NiUFugxQguncNRSFLpxVKAd6phHB6645NpMVFvdfdX2YtVbs1rPci5JcMFhY",
  "key21": "5BM1AZ1XZjoXNFbRSzNyUX8UqXEVwjpXo2ZXuke3R59KoVuAJhj7wF33boqneL9bANvg3zyz78aL56FQYmxcHWny",
  "key22": "54m64Bnuq5YX23jo3CEkWnAB9yxXmz3Zk2roStwoDLguvKTFV93SaXCXxMhWzLmZpYUnm2D43owtxprXWJ5m8Uau",
  "key23": "519XBcU1FNqKuJCTwoafSAyUyF6LtUVBBMi1cVUHQEEQxHTpSAvzwRqMrppd6LsV91cY4vqdRNx36JtiFQ4PdbcW",
  "key24": "56tNT8kXt2m3ftMwTWDRY48CjX4cUQXXZASMiVZYHMmVb3WtVC1qbV6wjD7Pdo227nTfcQAGeWpqdEttLJENcay3"
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
