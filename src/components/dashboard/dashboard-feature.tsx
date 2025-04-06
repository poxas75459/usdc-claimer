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
    "4EiGJLbvUwpaF23DiMmRKmzNH3uJZ5xBXQ1PxzjPYJdTtQK8rF2hDNqoojtTHuUzS4kB6GZbsw41Tfi44Q9PyJjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46A1A7dnsPZeyopNpG9Uy652X6Kh5sDuyMiRUZVC45fjTWNhosmMTGgsmgYFKGYzJqumnbRDvgctKxtyNHtk49qo",
  "key1": "2AHwBRA71G3Jg1APFkZMyxjm2LXs6UPHWbhkasTivtTWV5CnfgQXT8ATrpPKG94eZZ9qpCYBF7jo5TuoEC4fkX4i",
  "key2": "53mX81oyQgW5xeyUqhK8ThpCDB6uid8H1YYryuphkRbedMuGuNWuWPFDGBJAHM8bUArxp6xrWRsRY1MLxn46aDvB",
  "key3": "RY35SQxMz7c3kJgPSunsyiqqn4CgRAbHKmRGduj3wSHVKZ6Ai4xFVqhJLBmvCnciXi7X46pF3L6kBYxs7fcyJKC",
  "key4": "3WLytUzXLJL2r2T6uzkStWFRUcXR6NMAbQy1cSGAB2xqRVfPEUAUDvnhuE9vTPBbuy4CQqT9pVgyZwjLVng7yVs9",
  "key5": "4myNaCjiGCDi32oC2boVrKbLcasRq1ToxpTS1XHJ8qnof6KNVH6biv7imdkQATegx9WWDv8wXjNeA1egjZDeQZwt",
  "key6": "3okVbBEni5rwDVA7dVgRpq9i7eVD5LCNwkWoDXkMPF1f2iU4vUGwXaiUUcHY3S86KGtjPdiTqagYpKeWJkp97Ek4",
  "key7": "vnEN3h5P1pnATEUPBwnan7a2Kq1Zx5cDZDkUr4YVXcBBqjoYkn9pUMsNaCGwJvtaTTKk6rNdc7HURv2dSBw3nr6",
  "key8": "58BaVrMLRtxgeCfymvxLVmfdoAz9DuGkFwmWRdNiVCtGY9cuqibzPUcwD41sAahwe2jv7bBh8AtTeZSZ6uyxqH12",
  "key9": "tmZAdrAq3LEPdRASfQafcJvrFdf1fLPxrnQsHc5zg9m2uEzPYaWnddCFjUzpvzzQt93i8q1EL8RgQzBbhFT84Hw",
  "key10": "2PYWN3bY3YPW2edZMRKRmtPd6RNkY8hsjiHcbRJYFT4NzraEZDEN3eyTEb9iuBb8e2N1FfiTmxfNLRSdaPk2xJ1X",
  "key11": "2cDhkZJwDhQVcAm6UvNoLEdByDXcwBCzUzt41uBpZKYhjaDoJ3ZuyY1o7YYs9W1wuMUokYYgz5JdpRdTpM3dWSwy",
  "key12": "5beULVDnJraU13tiQbwtmwM9Ja6kmmexXP9gKkHrFVSEvHubkMgn4CZ2K43B7rzuoEcWsncFfubEVRLo94cSCrEr",
  "key13": "3cyW5NVEV6JsUxDnUdHErcqZsjhM2yjUqizpcdZUw6Fp1dbtWZhmKgPR7sYFBcDsgyUbUrWHhF3vGqjzwQmyDiJM",
  "key14": "3x6RNz92Ci8MzZttNruEQzh5hhnTpy7Tw2EUvBj3kvbvL4vxxsM66P3dyJuyRu9PMoraYHVeu38cq2d8oGZd2jbi",
  "key15": "bx2yxBj2HXmdxi8hzNYGz4Yi4fRTM6GV6Fv9yR93YhzRVB8oiXBx2FcDLA4hFEeRPv1uqedCboJjAHUh6c9e5DS",
  "key16": "472XG44sBtMkKPjrAk5mmeLvctibVhXioZedNgkvEpLiCmVfxNDrYHiMcC3ggehyWBo4VozQpqivgX7cpEjnPFqq",
  "key17": "2k8nVAJM2TZUAxG2aCdGiK14ggRjWGFzExfeBtgP86KQqd5KMcQ231feueK9ZtpHRixdT8z9vbAU1T4TtXuhrYJA",
  "key18": "2AGvZXyuMWYo4W48ZEi19oQaTdf32rVMZw46KdQDVSqtv8LVVz9wJvZZ6VDdCkyh48XudgAFNBRZWyxFBW2cZaBu",
  "key19": "4tbqQKZpNCVuPpmqTsmtgmw1WdYtpjX9HR58pJYtYXSFiVSk52nVuAUY2cnohGQJF6DSo8MijHDXS5UJXhtj8Xu1",
  "key20": "5Ni1BtJbK1VdN822BWSaUBxRpsD8U3eTTf9g88uvnbrwjRB9tjYEMTUwTxB9pb1dZrzb1mohFc17HeR1PJhEDyPP",
  "key21": "3puu8ybLK49Kmp5qWUZr1GqQ2CExWbVczUYno5ZGQn5sDQYNkxDa2sPBk77sxjarhqN7utxWHPaArfzJ6EUCrxap",
  "key22": "2zbN2dgHmToKcJT6VtDrN36ttE48pCzzVSz1eeUXxoECrSkL17iFwSBfkD7H2SsKxDE7xnbXkaSEFsTp4RZ9VjPe",
  "key23": "5ibPsSVmzvc4Ry8UYe2peo75XgkB1aMEsgRSC2pPCXzJBnuh74kqwRS9o3LerLJvAkdZrNXJMSsSiFaHSu69AurS",
  "key24": "2b3fn4UNGmyEmtsip2sBpMwhNpggkbb1ycE1hF4sTnBZeHDq9d7zFbHd1uPUU5YK7yXngJqB8rQrMbuCfGVae48R",
  "key25": "2EK1KjquW8vdgp7J5FhVVZyctUVJpQmCdCHLhC5gv4WymA3XmvTCRsV7rfJktQUkm8rehcE1tibbpmNgEcWgGmtZ",
  "key26": "2t48mLNyw3sArNwZqLWwXcAs1tpV8FW1n2q83U38jd45Aj24YbnMMc5bBzXLH9XFRpL36Ap9fpapQ5BQyNp7R9rE",
  "key27": "FzCb6QP6BokgwPpcCiwJtYmn8TZHEnhWHKLP1NCdo5CKj4ZT4Q8vqQb5wLEWEJuumLPS53A7QgFUxtN7Q3BXWiY",
  "key28": "2HSrmm6FJLSYJtz85FNHNcyiEgjVZH33iQkra4fxuY3zdpPVQgi6m8ksoJDWoaNoGbWFaFh6m14FDhq2meop7oR1",
  "key29": "5CjqdSpocTbdysLgGhm3ymawdt9B8xT8wJTYoJQnuBGXS4Q5QkicmrpxxybN3aZEbABDvMdjhLjiMGJdK7u25ivk",
  "key30": "4jpN2V4NFEADjWGzBPfXQwreL1jHNLfcBGjrDKCh2i33eSnp3C9kFcrt2xJWpByVjpdJbCcscD1Q4KG4Emib32sz",
  "key31": "5cKxTqgJMr51hkUcpYqHcNb8Hhs4wAXCThKN6EBfAx4hbdHEN2RCMzanRyeEnEd86gVGfW7vQCR5RsmHU3CQkJPp",
  "key32": "3A4RPre7yAus34XAysGbQbwmBS5x7FfH7MKWAzoUJS8Y3hxGRw3CUSfUg28jTKULK3n3qBp1sFzLG6ZNh1Dv2DzS",
  "key33": "5MG8oYRvWhhB6cHpbNXjmUBPdNmvMNJ5e35vhDz3vXEvRMxBsPdjbEyHntvdJnWvvupBQjzVkYmusMTQNYWCJiX7",
  "key34": "3M5c1oeQU8sGAkN4EHKcoA3e6jvtToRYKHWHf8oeX42FhsWSLPNaTShKnapL8Qn11SoiJ8c99hEjDtgrKhQENxsH",
  "key35": "4XhYAN7uDsDuZjGb7fTsbJCNKGqeqzcppuP3mr42Mcbkn59ryoC83jAEBRPJ9fgR8rTE3B5qrRFbMCMcdzqjHgVq"
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
