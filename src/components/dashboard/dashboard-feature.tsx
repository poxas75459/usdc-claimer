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
    "3P7iVBSRzE6T7ZMpnTuEjCyioM5Gji1iF3Eo9CHTgN2ScZruFoQ2Cfd4H7WgWqoNVbmAYsQ2BfhDyvtVKUrvBXsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pob2ay5HsMfbmayLpzJYGnLqnSJPazj3KqewGA4xP8ReHsAB3Rz2p8qrojD3ECM2UKpfNprhBiTuSe5qvkWVeZu",
  "key1": "vCasMEpUh7eVqhNdf7CvoccgQmyCwp3VJXTvxAq1acGTJCbDthTV8EzE7xhYMn8KdCaeJFHmCcpegiHZ8j3xB4a",
  "key2": "sFT5VYUTahtspQzF1qz2SN7FaCpQbqtjwGWBqD3c8zJSVAPxGBdPNiZ5CNBhyrSsd3ZAR49kQ2nkQ5X48dJcCzi",
  "key3": "4TSs2ovZkNWPwy5BAYLsbRaCuzBKksZaFJHxiLd2NgEyKtVUd3zkwy1SGKhPfx39nQqGV3zHSWFzaM9tzaz5UyRV",
  "key4": "5DRCweCvg4P9BAGboFn8LgJnZszBPgwWnnxhEcvmBqu86V4En9qbqfwESDdizdH9E5KfmHkQYLngY6Wcjz35HruH",
  "key5": "dib6z5YmcwDyD56BgtGpg238sfsMfgfabkCkWDT4io7E5YWEw9KUSRg1U6SNVtrrzq539NtLVu63A1pAyn7ao2d",
  "key6": "5jUpKQMrJ5zoVe9JvsZk9YYgMZP7Dnip5Uq8jGgyC8u2FtZwYPYvEFuCCQkCgJdhuKnPRtSKNobBThWbcCbbFwkT",
  "key7": "32T7nXomQBnVML4Ysm7WBXpWVDzfHKE3oeNkMN1ABmWb7pdAQyKhjBhUigHLtPSSB925Wpz2Dn15zoTK48QUSDM9",
  "key8": "3e8iuCCTdJavGwjLB3wYazTZZrk2amhrF74nHjz7GRKQtGzDj6qT8HguFSHQkiLDKai87zURSb9xPXxxs3j3MMYb",
  "key9": "4pw6nHK55uiDVyHYRouRcTaMy9y1bwxiaTf7G8H5vZFuBWapoMXKn1yigjL98HDggcEMzrA1C7kVspMcGxE9nZkn",
  "key10": "gQvk5hGwu7eSnqE73iFDjyoaM1vz58ahxAdLs23TbzBQ6zV2RR1NJC2jXsWNtZP5EXMpqyQPBYod5436Ho1oL9D",
  "key11": "3Sd94uRhxuoyAMPCGZnXDauqXGY2c6c1W19GBdnEYrdRXQ5xVbuCPt5QrS2W9SnvacH6mSTEcASbJ2cs4V4W35m9",
  "key12": "NYpd2V8BSQeFNcBs9XG83nAKVozoKgxYb7YUuaEzMcx27o7fMkyJyQAXXbf8B83mHjg5CAVtLoAfLVSVxcoacz7",
  "key13": "3cjsWwggCWX5LZjsTZYqjSLod3E7Ywd6tkmBTMTPyD7wfL5ac1BDKWUbCYXKpDim92Yx7WMt3vVivMop4zpzbg3b",
  "key14": "5p7owqt4qnuQCtnv52Z3GtuGFhmjiBhAmkxMdmVVuJF6vLxXHQDNmTQMSDCbCbykLmmjQ6n2DRqLeQxC7P3wxH9i",
  "key15": "4yr75gxXmehZPuezwTrLqsD3DoSCFAaaHV92Nyjeua4phw4xqXFPnc38ey9XAqhDEg2tkqXKyd7WeceUDGLPpgEw",
  "key16": "38Qdv7i2Xn19hSHWXZgZWnxa1EK3vioRUivxapjQ2c2J3ZZaU59xYEU2CHyDhEhsfT6JpDRpR7pyyUVe7XFLCLAn",
  "key17": "5kxrYwbemmreFEQ7CL7XkdWYUtYKAvu8sAuX8Kr4Ra88EFkPJqG9CpJs9wVAabDRD6rbiiFpSSRhNtcdTY3zmpAZ",
  "key18": "NuerJ8zJ826oN2fGXKL6naqRASu5b561UgvZ5xhoBTYruMHwP2XRds3D5GWkvLqYVXrZ81SaRpvhZXk6AbsoiDU",
  "key19": "4KZYvbbkkj2kdtonx4e3FAmfqXF6Ms7QDzY2BYH9WZ3xumfFJYUjU2ojGkQFYtP3kqdACvhgyA8toYqx9QN43mpv",
  "key20": "33jTJveCnWreZwd2D31fLKk799iizXpnPDC86TTooWCrhYkg1zEmZauq6S4ohbKoAfVqVddmLSJ6XVAS6tUdebKz",
  "key21": "4FKjT4JBdU9enXka1nJKBHYCd5kHB2q57Uy8Zw1SuiUKUjD99q6bYhwqydeztpTZb8RdzyANYXDYq22bRF33am6p",
  "key22": "UGxzZAa32FjTXgx8qd8snHpHF7uq6u9jrcS7JyH3Mdgudve4zGRmXATTnzafDSPu3q3jycCFQkLQ4uBbc8Dhq5P",
  "key23": "5AHGaMojWZqTwd5hF9RPpGNkmrug3of3fUis927AgRfq51M3Pk9vok1AHf7AnSBQ8hwskAoy5TpyNh1SMBJRmm9q",
  "key24": "4xfsKXbRgomhGQ6BpAdjFkoVCXEewGiMugWTrkYJnGxrtDin7d6V2xdPxaAKxWwgTmdsL5EEPzmoSiF84qdGbNcW",
  "key25": "5fd15HRFZjmG6pPKoLg6bQD9w7GoJPRooPTCzhSgT4mXJm1Y4rs2KuUjU8V43GpmiMA7FUgs7pMoSubMDDwrtBX9",
  "key26": "2Sw5Kp96qA2MBm4JcLU5r4n8MoagrXmCy6sR3LgxtWsoJaMpKrbvT6kLJQcrnpT8A8pVeYeuYBWFpsHzMdQ29PQB",
  "key27": "4FbMVvHG9K8aDEGBmrBU8T4zbNJV9p4T1UUxSycavyhqct1ed52rNYQvEuEgmMpVGL6frSQXVAXNbYH3MHAbWJs4",
  "key28": "3x2sRdfhEuLZEL5G9CfKTt73sc3DHQ93axD4r2oVn3G3yJ5Jpwfd5MumH99Zfh47bgctAenrkpcYzcyJ9cgjcUnz",
  "key29": "rK1TtmFV4CFaBmN84wfHpKWrbd25cKqpXGpnH77EZrG7TcQfA8vTD2Hv7dMTCnCSmVSUyUzVKiCoxTqaRTwYkA9",
  "key30": "3KBTYevKFKL1JQdA3gaLbFT5hwUwF6CbnBUjnvUGBzDLBuhfRSWSCXxRPChkkK7F28CfS9vzRA1Q4X4mkQWk2PN8",
  "key31": "67KXVcf9XrijkX8hky7LNzTnPoAzgdyr6u3UMe27mjFN8V9JwUktSzPnLT48gU5bzAyEyVC8wCkS2hNkyE9pEFNo",
  "key32": "3ytjkDkngtMQrBhFFFCWFjk2JM46UgC5a4wRbq1Z1kZATuTHJWEQecPP8ZUBEceBVWmBP7derSkTdPVYcRAguWat",
  "key33": "2LdBV5p1s4FkwejY1Q4nAtmdf7QNymM1Z9JWevgEsq8ppMLXy2BN9GKdkeG4W6mkVBSmo7ccD1Ct1n1ViGhCw6WP",
  "key34": "bvZGHc15rWoFPWeuqFkNWKQqEsRRZsvFWpi2YTaYbZoqDfFmcgmjcduxuZSVA7aYdxwPst9mCHbpdjpUjBo3EMR"
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
