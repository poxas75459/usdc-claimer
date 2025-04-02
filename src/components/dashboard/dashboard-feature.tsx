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
    "2XWPbLqWT1aUjfxVMBenXfNhdUPa8UUii4S1DRJPSRg84ox4szsLswGGs6hC7eDNyURth5wWjL1FumTkpFcwT2AH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gxLniMhAawx2dVVStQpqP91Hvhxpy5b2XG1K3iV4oWWheZ3wHBBn7Xh2AvrJ4NYwrSxNs1noiYVGGZiK8NvAgFn",
  "key1": "zij92qLKYyj4LjCAPRPrCybAS7yRgwLWtsBPAbUXL47QdESgsKR4z19KEYBkSVuZNwQMCRnPUzK1cCiWUeHfycp",
  "key2": "2RFcgzfQVjy3CkmEpdVm5S43enGKrnmFQEmQoaCCgyb5s3wC9J6piLgNcBf5TKk4yc5h9ZEvQATRpidg32TQqgMN",
  "key3": "2RftT5h5wKzU6V32fzubAFVnH6Tj7xGjMWfMCJbGD1p2Xcf1T5DFPx6mogvwA7SvriSZPRbMcpRXsCHr8XHG8fsb",
  "key4": "3Dvrzs3D9YHBdSuCXmmbPGRfdYq1LVdFwFPAHRwoQKAFTo8AWFeF6RnY6ZVGaxdaJBgSUCnHjLPxBG5jp2s5kxn6",
  "key5": "qZKExqJgQQVXF3iitBmPNEvZmrJBzQtfxECMyRGXkpdUy858RrzvKjYAPQF8RCkzeG8U6du9eb7f1FPTPiSaWin",
  "key6": "46T6euLiPnt8QK2nf6bfZaeZfEkQtBDDtrpLuD5Sjod9s9V8kNxuog5yCtuyhN4KAoGYr48b1m5Br1iFtmkydq84",
  "key7": "tPp3cxT2qCyg2beQ9kLVYK3ACtxJBUmp3PbAFL3ExxSfM27KM8abVMcTy8DfFWfZiDNEht9CCjcHhx5xaduausU",
  "key8": "3DF31yr2JRNd91vo5oD1ipiTinuTWKERaXyAW5s44ZLxv6zVFAuT7keRCb4nWrz2KVZhG83d1hJvBkSfv7MJnai4",
  "key9": "3kQD8rinVvor6k3NNUd7qu5xR7xMQ1DYyrWs3AZMFxFXHUPHDxCw8hLBaQ7AuTPF6AYnFeJd8mEqVfjoVfRq4DsG",
  "key10": "3R3MXn1Ny2s5wovkf4NZoFjAwnBdLzhAhutKunRgzpiwNcSfnnFPN2aZYbyHC2AcPn8zTAeW5nU3b7VqRpKW7oVt",
  "key11": "4RsBRskqjjJ9NQzkMsX95Ec4EGY8mzXd1A662XjPq96utegyCE3arBzPCYZA8Um98ctwc7LMAp71Q4MjfNzymBxz",
  "key12": "5cGWLBZWWoWKqA9ziSSiLitYTRVj8qTwaNKhKzaMAWuspRWwvpdikwTdnGpjG2kkgrChQHz3Fmnua2Z8p9Zw4rZC",
  "key13": "4syKTTGkbdcWRBTzoGbTNR2mdaQ6gF8UMKcCsEkKwcfPvjhyGe2QEFvX8bnW34tW3ZjCpwqzANXK2QaBY8oRguqd",
  "key14": "4MukNTsdhqjpyNky9XZcVQ43CErWvRtGBRg7NXiw4Q5rkJLwPuu9PTSVM5E8mqLNcPiEnxosKjeDqd1okiqF6cmY",
  "key15": "4LVsXgyS9u8fiHrjSQsVRxJzf1mHnFjqxgUG3XYLypnYbtgg4aG6oZJkGLfsh1NaBjJNcdFNQ9wCwXUPLhdZmvcp",
  "key16": "2eiuQgciSEyVjtxedVUBqU91aUTGgdMDm62WnoaQyGYp8JjQeHuYFVAoMDE85BWXEMQHgopYnHBhP1ySmLJaRdnQ",
  "key17": "4GxXg7crvQ6QioS1wLsGXcvMb5H1cDN3zszEGP1C119VGwmX7YXfvdFGTiFq1FFAQ5as1rdD8o7Gy3XYdxha4xe5",
  "key18": "2CvJEoBgLMzhez6bMzCSrzeSpu5nbNdW3LGEanTQbRdrmnZui5EZtr2Ff3RmHSY3ekB5NNjJcL7r2EHHzf9XDCtj",
  "key19": "41bYGqv2GPdDsjxFus6MCAjwrF637wwC7vJfeeoSLwk1R7f8cc4RMs3yvrQnmB93jgXZcG17YS3ycJoWerSUnHdU",
  "key20": "2QcLkEsqZX7iM6HPvoYM6Mmih3h6iLCtgzQi6QdDTa76NRVrVmje3SNPXYvCu1k6bjU8zpv9J7cwLhTnKuZRdLA2",
  "key21": "5bvayEFL5roHD8qWmSpDU5HavKevevuC32yx7VekvMmkZs8Yf65tr3aRtULTKtZ3Yteih3PFXnzNko18YNvqPETo",
  "key22": "35dm2SahfwdD5ecAmxkVroEPGnJDyg8MrL9s5WzxEaAb4BCBK8gTpYxtrCnbeBsLb4ptmp1Ucucjtuxh42m6jvZq",
  "key23": "4gi9ntxFquoDN8ogcpc8tECY1Wjpmjf8PwLdWtF2Lckgj4hL7j3nweHHbUrD4EHTPtbYpco3HbYTXiYJXTRUvYdM",
  "key24": "3kih3dV94CeLVnkUsrK4JNDGiyGikJmgZrFpyxpE8C4G6TDfgnBASoNqVBHCUF2PKfETK1sRSHnPk2n9nrCo8baZ",
  "key25": "3NGsVRLhUrdVAB8xJzkBBB8XphXD9YuSQM8pPPA1m9hWYGRryrRaL2fvvYcxu9ux9g3BFjLSNK5xw6k1FNFhaGyw",
  "key26": "39Tj257VM6W4eVxryv9WR9fE8f2TRX6bqMbmJiKBQkeuKYTvm6DZotsq6BgSFfj6EgTMffPnjdviLz38A79o7E8c",
  "key27": "264zPdy8A8Ln5oANQYydrqbtprrWSypoh8ayxxWYKSzAZmZmUoZZEocHdRUi7M32pzG8aCLYrxgV56sYcR699JcD",
  "key28": "3A3Xf9ZvPyC4PXAkKFaELXrmjHF3pHxZg9WVUwrpMVGxyegWsfVjEidRydFKj7YMHj2Z31Pd5iR4mhtwGrdAY3jR",
  "key29": "t9WFqWejaPkh2zHM6BUZGFkkULys9C3NLCf4qhQamidXVfMihBg68qWBHXfaGtPZDSBptte4JBeuNwv7RY5aJhC",
  "key30": "3XQUDf9hrsBsUph2hW1nfArjdoiZjeBGoQrs8L7yfH25TMZZmoTAr1xWVgtotniNZqC8RaJ218c5u3MqeLuNxhmv"
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
