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
    "uQYbKYkepxP5h217Dq8CaCeu6eQUC9Rxxs8Uf42uridMeuYnaWAxe6mhMqaiQPAdg29gQzhQF6PemSXgV2MwpuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvvTSCeE8YCNS1rmu81CDkkFPWdCWvo2EjQPpnAq3MdJR3S7umfjXaS9gpRXA5H6GpTk2zUNG1jiDrhh9pSXM3y",
  "key1": "4msEVx2nPcCFP2KqBhJnSUUPtUDXoQdV1KThgLTc9E3Nvh2cSctUnEGYnp9Yk2cH8JU3GPkQ2werky26H63y5c9o",
  "key2": "3gJ9FdLBsjx9dfMrhQo5ma1cidx8bF9o82zvtFNyYs4ZPwQrP92XAJb9jrh2vjDxenADC3DB6AG9UMfRHM4oeeKY",
  "key3": "674ZkGBWE8wipna2hpU3vaHXcp1Vg4UhRETMzgtTvmonuvcLCe6MaeW5SoFqBoW1JKBJnmwhLnd5w6UMiwzRxgY7",
  "key4": "3o9JDkcRmNc5UJtvfDQpVqDeqmG5DfvNiPGu4yDNrYZwCFzckzPoRqBxwyM9RxWjQSBp17h4g2s4occHcnGAeuS",
  "key5": "2hiK7424W4YP6Ju4tq79JpPwoJCVB9JdLvZuFmH1wk8RFVmqvmPfupJ189MfCbbZS5wUqiPXpJQopGCCM6fj7WmD",
  "key6": "6SQuZ5XqZve6YPDAKQVqxRZAgwumid5mEeJfnFxqA5Af5yCCpjQ3G4kfnhYX6W14Rd5qPd9tiP8PX9ajuMLGfRQ",
  "key7": "GadDeFVrxNYcSb2qzHCthkChzKzHtg5E2LqjcveBCeS3mYwAvdJimpP1E6Jj1jGHmTfavoWfKPBSaKniQvEvFa6",
  "key8": "3HxaMvd5ceM6JCkSGS7qo8EjVcvB8KDoE3879sS2ugBVAewMMGHqADnzHcsnL2fNReDq6mBsqTrmQHoDP9bxBkn1",
  "key9": "GoPULpRptYYywubgnyxh3ZtKoN7kD6c4CdqxtUxhkbQ6gnHkDLqzEdA7WvTM4vS4J2BNdkHi7TbcHzHCK4E8xJs",
  "key10": "5TuKgjjF7p7pMpwinmRrWP6gpNSirgHPtdHRXtLjGSFAT8VnuiRWeFZ37BbX5dcSAhp1dVswPjU6eqen9GQMBNCD",
  "key11": "3whU7wRG8tD1aJW35QQumsLNi8NaZGnazHoc4wxtkQ9Yx9GQs8SGBpgUgJZNSV1Gjfpf8Q9mVfrdErg85DVcx2Cr",
  "key12": "4c71f5Tw5S25LqLv1SCap1CswrcNc2TQuQSWutX6pqy57D3p2vQXKtcPtwpa7gyUcZTqm1eC4f71WHehtfxeaAxk",
  "key13": "4kVEhZNC59mrVFaXVSVb76iSA7TD7D7nBvZkSfHsvC6SKvCNV3A8jVR5XVDq7i12KPKEjoJazBykWztQegWYUKoX",
  "key14": "5r3PKxLqoCSCfHqS19npZNeADnK6rxnhT9VVgAcuGhcCFsxzapNhLuAkcuejwQZWFFgow6WvGbrWEsyzPtVawRMd",
  "key15": "3oBFpfXX2XrWyPoztUzt2X1igqm5P9iouwkQJrKVrfzRFWXJosY4B2qhjbeeUysTxVQ9hDr3BNxSa2mDCYuq7egB",
  "key16": "23yXSEv1T2VSrTz83etWNrrLmxRpVu552SkMVsyWPGsx86BHGwiwyTvA4MUe74M7wh5FDfbE6DLTGnB9RpwsAqGv",
  "key17": "48GXDRqAxQv5xZQSmYBoWo1wgHvvPvgg9zuPdz7Z4BHcbi7jZ8x2vvJZDNTntgVKCh4MYYYgRsjZB1BoAgfP51K2",
  "key18": "3377bvVUgTdgBYXdXRZFbGBLVhPfy37RKWMFtKCmPhSryKkcWVwRJK8Vj1ua4KHRY9rTL3kHtDb7aFQnxTpJc92L",
  "key19": "4CEKLWQQ5v4Xzcqfe3Dwb7Uuak2JWjNW4drTTXyiEJYdrhagFzyx6qE3Ab6qBdxRzZnmd8as57P2K3FNdetBGVLq",
  "key20": "3HHV2nmXKfNZ5kR2jdPm8RiDbpM1WojZNHY2zENJ1bF1NLvir63RaQgFBxzutdUBz2YTj9W2euEwYJ3wgK4B3Upv",
  "key21": "nnyYMSNoUukPjDPBMD9aMDeE9FQJ5j4rEPdF9YffVmVK3Msupg6a2FmnnnESwNs3RauEZaEA1bPBZN2ozDy9LKT",
  "key22": "5DxwiRFnmrQwkStBdsLzma8P8exYD49hQxqFSUfxJcpZxe1mWcyFGdQ5sRFaJk8M1aND3rRgqCptdsHmVBoW5prS",
  "key23": "3TizQYUwy5Y4knZZSMTiV9Z76UpWgcRmdoWWnez5mAHSazyi66QNFMKbjKwMa5BbrdmU2Mexd2ZXu8nrhuYKcLtC",
  "key24": "577ZvnBtMMC8RasvjodKW9bdF94GRFMLW3sx72uWUjo1f4hQ9Dgvz2oZPzFSk9BkGNAULgJiGTazqCNZ13KUmA1E",
  "key25": "5qCJp2SXvdH9keRgytt1xLqBdHhbVDZNEwPhnp9FXxDjeVs23MZRVWPXAhB4RMi9jiDTnDnRsSEYHzuyHug14E7f",
  "key26": "5vXKj4r7qZBi9r1UKmdR4Fz2pAD91RCYc44y8UykzZmHSNk1Y9FLTdpEPBPBxYPFAM7cqTYpWPgriBH9gPs4ydCx",
  "key27": "2gH1f3cWZAzrFo3cnMVW6n11Mn2Ux3mBBXmWERtHvvcyfRVirGXkzzsRmnuHcFcCMkdybPSpyMZMyx71WGCmZqoZ",
  "key28": "4UhBG9enJDQ8XnXa39djAcygNY2orcf4v7mYQAU7AXWooNvVpCswSAh4HFFgXrsEMXfoAK5tMZ13Mzw9bj1M52gA",
  "key29": "5XNHjF8Lwt2qAhaR7wXCSDg32NiPBvZ7SrJGnCH3S3KhVatmdF7MtgfHPMynwC4Foyy4JMmWHLH68annCdo5F8N3",
  "key30": "26vwxW3RRhcKn3PfxqCv8wdt5RMgTuTVVcDxqQKFoyAmxD7yicaHYs7MLefFmTP6s3A9oApLatsCkfEocN8tcunc",
  "key31": "4naCjrKPJFpvqdeEKcxMPYCgr4bB98wzAB5Puvt2YzkeqCjkHwZ6moPGmx7UcjNDgs5TubWsEV4Qt1JpDT94iBAz",
  "key32": "3txyjGxweyg6hJFE3iiwutzesSxu2ahiwD5udq7j75uX6VH5SbMQMtHVVMfBWCUi9r7qFHywJLwnoMSeKrFZRLnm",
  "key33": "3JeLVBpP4vRidWfmr9EtrnpCSSGe8PidiXgnPGQtm3yg3WC7xoR2qh91cwqthbFEf13MDXtJhN9sicY8R3oJZW95",
  "key34": "3Vb27z4a83dNvyRBvUMUW26Q1h2bMEqdieCsCufV8yYuu8hB7RQqm9rs2nGwJqK71Panqt2Yja2dDzSoj6n2naYi",
  "key35": "4w6EnohXYiXS6sw5U3tdUXJCc5dhbFRKcKSqkJXmfddBaeLU6WEack4XnZua9jKC5KTFSz9auG1dGUHBTKYNEPuu"
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
