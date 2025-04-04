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
    "2QrMAUrNP7z3brh8EdvXNGfVdGsRE3c2AzGUc5J4LMphQ1BTbF6NQoYZ8cdPSCVPpN1X3SrfPnhbCrdysVnDMeEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mq1GDzQjRApRQhw29Kei4aJjq9Ptuu3NgKV5rfVCjWtcej57kaoqJbuSJjNDgavWMz63D38KtspajocTNpDyXtZ",
  "key1": "67hSpRaqkyxoyuG2XJZJ4j2MmvqJhvhbxiy4mT4Dd6PFWowrKpWbNMp6kH9CNT4JoLcXFDeMsGLsFvwQcooxHLj",
  "key2": "4FrpxUT8one9F7JTUFLg3JBRzpyBw8hofjph2yTBPA3emox4mZXvCDaLL1MtBCQg9kDEn3PXX8P1Rw7BMxzgFzzF",
  "key3": "SEV4QjRe5FxBA7yzKmca8JoTzQowgQMQHYsgsD5FHt4bGP4RCMk4x3Ad2fhTHmqp7Xt7zTsQvxpXCBouTJNUc1P",
  "key4": "22dz2w7dVNKPnhSPcX4WnCrVxQaaQbArZ4yuLDBZ63e4prqp2czQhcCsspERDLNNWBGhAh45dwSPVHQ6crB9GpMF",
  "key5": "cCsNEtDkSpR2ufJNdqtLTZ2wveWP74fSSu8EnnhmZjNSB31pufd4QnhN8DRHxezwF7x8FjcQj7Fhijty7A11BDs",
  "key6": "TMLG4yMVcqBzJ8dA5hBmrg17A5XSYhvL7mrmWavF2VdJqyCs7nUsnHriP8vHJ7ZRsvpLHzPZGdzQwi97ZdpaEWy",
  "key7": "5y7wRk9DtrKuBTosjPRjVnqKDWiqDR4TPZ39dimtfGRh4PtAKDL6E4CW7ESAYkbJRHX8i8Jre4hmQpDp9Xphy3ju",
  "key8": "zBSXSZfv9qLpn74Dmi9yeUU2hU8Sn9SKF8sK1oCHu618m4KhrBAEGhZ3uW1L2cXbchSRSvQA7f1AduLoCSPV1nx",
  "key9": "BXtouj1Ppzhd4Uys4bbrHDgMtkQMnG63NrVXofCHbr46mA43hmqrYCwawpNLqajJCFRJue8FvUJCPKazVGihGeg",
  "key10": "UkzfqyEWDkxyHs1iShtR38urZJMKioBz1MEvuYwTkoyBCQqu5Rw7CC5Rry873s82zCn6PRuYw9Hx6vaitTAhNcT",
  "key11": "66SU1fX7FKUqf5N45FQQjtih28GwoyLYFnBWDf6ypXN1GFrXVpBJJHah5eatN24Mi3CNBJ3sUmFdYNypctzkzoyc",
  "key12": "4z2s9PkR2TeBQh7SCYYCSRAW9ncm7ShyxoJ32dSEMLjxuc5VVAYTeYuC8JgnVYcq98tPjyjNFf6LvtuNgTc3cFCb",
  "key13": "2dKT9irKjwvVyYBqKFQ67ZktdPcsyC8LLRYE78fQaryeT9Njus7WR9bsoQF2cHAoX2rmjvUdFbomSrZ8TN4SXNsz",
  "key14": "3p93acxY5Bb4xj8W9zPUhGKm4PDYg4e75xMyeMKcesikk4WwWxZLfS3MCeXrQaK3M4nV6EYKm7RoZKSQ7Vzpj13b",
  "key15": "aZR8DtEzP3L5YiHHtKw1rnK9BjgsiEzwzaAUR2UboGYQmYLBiokr3Hfmob94XwK9Ak6QSXJ3XjRbW7KeKKKHvL2",
  "key16": "5KHt1ZiR928q11rTWHbPQN4CesVbV82zL8MEfoWVNPjL4XkJJ3a8SBBUf2GMxrAMqShQQBV6DqFXg8dryJWdmNbV",
  "key17": "3mveeKgeiTri86bnYdV1eLN5hnVf88BvVEtTtbUJHMXcgZ1z72zbqDkEtWNwMhqvz9TLapSpit2Tc57aa4A434cs",
  "key18": "2bEHa4nHavmnbriAhUbERi5HVn2ZrHSuGpehzYnHjxfbWMzRNcgX9bSb39jK4CQAQUKG6qaxVthrKNBaQC8k44D5",
  "key19": "2mR8m1VoA3wthXtWNVvpqfW98fDY1vVBBHyG8m2gAZuWjTUzyyYnFRpMDSbJaVNCgM2hnCWNKxt2bg4i3UESQHbd",
  "key20": "2ncTQe5WFwcxea2vokPXiq5WBYRPi8Ub17eH1GaLrSRJoiHceyNn4qdCwissURxCVCzeShDvnGACchrZuZdFnTin",
  "key21": "3CLPNjecqH51S8MsMgGLYvzu2p6k8jeXqg7nrxUpb4EwistxqgfVtMVAZ2vppAQFJLVvRLpcvCe6BnEvoVtAnXn6",
  "key22": "3eWTbL1zPqNEa7WMFtgNnspPMucWaXq5tBWeMnSyFsaBqDmHkZUEwDD6qQ6YiBZ3qpPmdbvdkZNoAPLZm7GeYuxy",
  "key23": "5KTtazPbhkKvSnEPwFba71H1WQjuxtZbWjQ4LqvAmacLmDXLcNdx26JS8Bc8KmkAyu8A1ipeB6DNfPcXkd33WFEa",
  "key24": "5yVeMB4o6mDqnHYc2Mg49MPAcSXvxwSDaGyTfsyU5n4Jm2JUiZSsV11QsBvjXMb1ep8iZKnqucaFw4rqqaXJs9DP",
  "key25": "onPDJwFMUh9UbBzACWKXtAvU6yfghL2JBuKdEarDFjcWYm2oYMSU9vKHErWJoQb1nwXs5bsBd3gHvVQenLRvFfj",
  "key26": "2kteTAbccazAaBLBGzBnKarGwZtkn7TrDhmfMb3z1pu7kYgzSeob4Cv7o61socycVMMCRBhoEVEXepeCCnbRhcLX",
  "key27": "34WBEdf7FL3ho1UgTXRmGHuLuiaYs3tWuxXVpCpyacPG7jemAJwrqzK65YjZ9yZ72YehqAu6qXRGMeT3Ub3oDUXB",
  "key28": "5KeA7tuFwsXu8YTrr8CSqtNKnXAG8oBWxsptV5uKr7oXuZMGC12f8ih2TizdeobToBn5qMyUEBYJRH4JFV2UeJct"
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
