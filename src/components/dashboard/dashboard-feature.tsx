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
    "3KAQHzCYBqpcv6wMKvhKMM2Ugi9GtGfeo471LkDa3VHJ5mJJRgJdgLhEiXPYMKSKXT3dvxzEnYpzNvG8SHspZYdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCn6p9YhgqQbCDxHtukPQ6v7N7ba8ZJr4kckp9CiWphFAnjF47mt2nxQThqAWmnpA9m16sA3MAGG7RUSkFv2G5o",
  "key1": "5scSgGDxuCEnBwaeWZG215hc5Aq26uY5Ahyf1kGAPN2RAc4gX6PVHY2g1n24Kf4VWoVFe8gij7EqfLu57i6Wvzqn",
  "key2": "4PrTM4Z97cCrqqvckMANia5SRUqLnvhRoes8F4L22LpLNNkhQp7H7Zb9uKvciMYH32xMKLHEh7F959JL9LUYpUg4",
  "key3": "2yM4CdzZF7zRnMyjU99vKa63jxhasFZZCvuqPFhUzoaT2aGkj4zYJwztgZVHuCbHPqwaMMPwVskXUcyfPP1CTqVF",
  "key4": "4aeeSimq9ia2dpYKzT4smD6h1pVFNT4u6V5qWiFCdzsgCRD5paTbdLVm5thG5LrPfNepffhrwEw7yirrx6UzQHNW",
  "key5": "5iFMRQH8p3PTdmaGrJ2Gxzg7oJMez2UxoqGhm8guCSwyP9mwrNfQgDZRBV12Fo52YH8kykWTUduxgaR98Nu43gjr",
  "key6": "AuGXn387haK1jFUjxKcug6qNahzyxhvfTdf3GSGkCJFTCgc1UFFtKdN4MwKZ7DBvffVSBstJxzzMMAoMGiSBfzt",
  "key7": "4KRYMCN1xxXgompcYDxLSbUgu9pFqev6fUupWrGHGCcU7121qr6S6T66s68qZVC3viyWCiT815PmZjiZ65NNF9Fc",
  "key8": "2NDoQG79qayReQsfDRXATpCiThj45edbrsztx9cEM9QSWWZKv5y8QHxCfbJQENsvzygGXtjwunWsjAMz4C64Uukv",
  "key9": "3FkHWqtnm2s9WtZHT1GVcccxTyGzFepE8oxyrSbkBZ85GyUaw8pnVW2wG5ptGZrC6CLrt9rnJ3cjukRnyc94b5LP",
  "key10": "jLnTtA92BFSxmRyZ8xPWCjSdr1Zc64ZPEvjnnDCqKYuVsZ6mL9SAF4DECjDDNr7HnxHessX2MG3xvgEpNZ4yGDw",
  "key11": "61VaoCQ5KqrSWkXukNP5Afxwpdmft1f1WznGQRix2yZY8f3Rb1GFKJyutspLeQRdT1RX6czr5iuj5XakAsV3LXiB",
  "key12": "x5mQhZVHESTE8fU838fSLh7ygkNjFK8tuouvU21kRT5rtSZYeXi5KZMHPkAXAqSF6E7wfz5XXMroqAB7xWhwPcX",
  "key13": "BXizjgiZwJngnKVfBm2P3jZ3wvGW7L6Nymm2La9ZQFx8yTAUpDsHG2oYFeEE21sxegn9BccCPCS4vk9diqrtoNJ",
  "key14": "3uCf9zFUAz1qn3zPv1E9e1e63dwvQLhcr32nhDihmkiuATyaGR8PT5Fq9Kgq6o4mqqrWYCrscR3EnKAGo1RFzYCC",
  "key15": "2A6epZAGwMEie94eJbQvfuu95CApD1dp5H48ecpMsTnA5K5fXjvUQQzj8QY6No5t6FC2pGD9AznFMxfDUn6tibft",
  "key16": "4U8eszV3LbhhT8grE2fFuU7wEVrm1AD4m2EiSQAgQn8bA5X5mK3PCSFNYZhnubGYd81aEbVbqYtQ8mTrRPQAtVqr",
  "key17": "2PwADUPUvtdbj2dPVT6VsXDfY6526YtRdv2JSsTDiq1BokBHErrMLPkETmMRC1y11n4ZucSDeiysD6FRqBsN5sPv",
  "key18": "4TP26U22P8tifQR5RX23ouhaKbf4WtUQ25LFYzACBE1HEi82Ga5Bbc6sKsx6MN6udtidaJqmoqEAoEA6xSp9tjMN",
  "key19": "2mnenJWjjeqmNxSup5b9X76uZvK44B6phzpL4oKbk79zP6g7arW8bLYSjnJAA4esntzSM6WKZEBQ7uQsS8YNjz3y",
  "key20": "2Y7frLHVtQ4FrpDbBRgQtY2QMkKMgNkeKQdz3hih2aEsuByyiMZtBQmeC8UoTNnQCRJ9BiigMXnbzi5CYebTYkAD",
  "key21": "5PoVCqRGpHRygCc9LmyfGmrHbpnGq3G5HaM3q3NSu86JRs7r93JAMKYFdeSDBzWjx49H2xommYct78MgZdepMJvU",
  "key22": "3LegZ67Edasw2oZ1Pk49pTzgqTB2i2szCfs1HCbehvwsjW4YMjFavzJBjsA2zRRwcd4UjdxGN6Fx8zPXcotSMjmB",
  "key23": "3wYp9B1RDt8uFaheBZR2uKBS88zB9rw8gpaP4oVukhzEqy3z8arJUU2x9dqnjJzfSGnT73KkSa8FR1sx5vdbWqd2",
  "key24": "2AByoDCEMk3fM4nsJAEizRe4Gjqfb9PBXCjJ7RSEUif3MG8M9PjCHgZGm6e5LhDxjALphqboLGaMeSgeyRVgKt7F",
  "key25": "mE1y2sXUjMP5jFEzeQ1ABdpE2uBVUQpQZeMfhwm9qsuXUVHtnnqd8DqUW2Vsyv7oPw17xRat2qUxv6ap7zYSB7c",
  "key26": "2bYMRVhPFL986p3Fb1oVYKSzk6pexy4eURuAjxJwPe3Td8mBGJA3imLUUmUz5hPsMg1sDpvLGnJD921dTErHc11d",
  "key27": "2FkUECZQtM1KrBVmAVPy5sZGbESFimvUph9bNBtMGgCKGzbmwYExKu22voGpcEd9edB8nYVf9ZYaynFUbaPoMCfW",
  "key28": "4w188WXebn79h4DHz6NNyXVdQMpjU1tiRjaivWDSc2HLKZjGsu5YnPkzrJEvYAkrLwNyce7HkRtHSpLcmHoNnPLG",
  "key29": "2dBdru3w5E2ibTYUQzPiJnRWiwuGWsdkQzTX4cE3qUT2xCZNCtfZo9HFbCGkmkU4fY3W5N9EScg78G8LEpusmkx",
  "key30": "6466Hg6auYHDxoJu7kDjRqx629i3Mh77LW5PJXUeSP1tVmEYf2Sa6q9Ghwa2bwGPbbw16jSQacYeuGguvaCWhHRo",
  "key31": "KYmMv81aq9D6DrQbBVc9ptVMXtH7kkpMNUCYVftHu4dNeyUERx4nSb6pyk3SLM8VTsHyHccs2hu4BmViWq1kFbm",
  "key32": "58KqNbHCHewmreezHd27a414hRmbj2WHDw87ZufE8SNwwEK1ThFff4KF5Br9yQZ5442w9d5bQDbedy2TvNqt1uKi",
  "key33": "GrsetayJHaugsLGMwAb6i2CiFFThWPGXAGFzaVtHBmNyjJUys2wqccUoPNRJPP9qpesDuhQit8XSzfVCFuyNHBd",
  "key34": "43tXWm8Ljfhd7ybnurwHdvWcJCEEMVdnKsrw56Ldr6erEbKha9ZHaEpqUVWugKncMdaid9tRYSgZbwVAp33RjQza",
  "key35": "KiRtkhTTv461yH7kzC5XAYJM274ixQytPD1x2RyirXGqNes65bcbAqyNEyttuMdQm3gDjcbLmj8U2Z5FwBg9GtQ",
  "key36": "TVdkLGKmK6LxkXyrQnE6MFgvJXke7WhHAEAvXFLXoyHBWNKeSQFe4oUmkpjL97d348A9u9r6GmbbzMCUbsVCzRz"
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
