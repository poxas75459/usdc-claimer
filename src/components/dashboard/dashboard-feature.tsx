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
    "webrVjD4TsX2zXMoSu1jTrHuXW3g1LAxE6YgpTx8vKAwDeQMVoxeb2pK6bfLaLvMpmK1Ag7zoAfBDaz9tggz2YF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VFeeFkP7mXLVt1KND2BWaMugoxWygDkNmWE2XrvpyfGdPijBsNqqXKaw5Azy2p1nTxXWE3UdRFAA6FDTiW33Wmj",
  "key1": "5DXPneaeUU7tuTbjrcMDnaWcJH7FKictRPezm3vT5N12jB7Hu4cTdRa2NS7eTYuQwtt8qHGeNv6GYgCbfH3fKRZK",
  "key2": "GEvyTgex2L1VW6xH44yUwN4g5iwHFtCjBiCxFv78WZymieGbfhiZBbkZ2qnwsAREx1inP4UGCTGpGLpesF7Wp1S",
  "key3": "3PVzZFdeSAX6VgJevBktSFPH15eYM7fPmJ3CTnWTxpsNkyTVXTKLPbzaGz1twGTs1o2Kk2TMHUthwWeBPJfiTm2E",
  "key4": "KTpUEvWVycpMkxzdgjzoyCSpEEPYYTx8NkaTErnZaFLnQUynHZbzcQRgKo1RHVaSoxLQ6bvuHKyyVWxWz165NMy",
  "key5": "4kZpafWsxGM66YSDaSeS2qQPsC7SUo7kGeLBX2Ki5ohAfHHzS4ik1FNoRvUfX4AWcFGm4a2CZbyZA8K6UHAdLZUw",
  "key6": "a5Gm8pu4WeH9f5wKyVSjV273DDdScrBYrtn6YJVXDRsWFSsyW1xAfxGTDN3zmH9KdTDvQwdZYUtL9y6dpbvjR5w",
  "key7": "TEeKXQt3MGWGyrF87iG6xSQT4Stb4dW9akdJXoyybT7EBCzN8jjuxMU44VXkjwyFv2cEdXE5c8oayJbv4FXy1P1",
  "key8": "2FaCnsws4K7MyFwK7peeWetuo6vnrRgEgThWfA8RAJvtNE28BR8qkR6vVBunRwoLCeXNwdEMy4siAi1trapUkAQe",
  "key9": "3RkbhvrskJvJYZnxcaV1c4u9VQCuqN5YxrdU7CVfHg8mrLgUSMVYNtNECs9cWLqjyvgq4vqLYJQJsRaKAeJeErvc",
  "key10": "52Doyr65gEC3iVuAFdg49ghfTmhAZ3AgoVmm3ZBFyUTERc31cnvrD4zrjw2nah8eNEnw8yyb2BNFxfzwGapY3ZEc",
  "key11": "CN6Jt5PnxqppNKxFkoPQoxaMbjLSK2gtcNest7jHveAe4iK9w3QseLHymreGLc2gGqUikrzjXUPX5eriEbHRgAU",
  "key12": "3rjNaw1PzsXT7CWawTDytTb56ME7JCWEiNpFSDqBE6bjLihsvuvu1VFgVqNWRDj3ajVRZKLiqtczu2GkAP3U9nKQ",
  "key13": "3LmdnCdmpw9qZjj74o4nMXaNHzUUywjEXvi52u5nJ2swoWArN8f3KzmZivAwfSc6WgNnxx18njz2KxJ9aEdSpRXp",
  "key14": "58GupFs4SfqFDv8U56L2x9hjnLB8Eyqj8P41CNtm1BYgeA5cb77CxEbBVTQPrtiChB4CHiFf7Y77n2bTV3DXDgaX",
  "key15": "3Ya4GxhfMjRgqeL96qN4zHXftTnFgyoReYJk2FuQxT8nSmugMfS3zok4gjh3SjwEASEMRU75PhEdQ7d4wR887qoh",
  "key16": "3MfsEVMp7PKyF4J5ZvVekRsMGXtq2NnpUSicZaTSqqC7UCcKBN4KNKy8Y2ofrwugtuN1qzPnzCMFPY7d3wNNHNYX",
  "key17": "634fqSvjPdBz1yb69qJAvW9dMVidCrBaeU5rhKpyJ53ZVTRi29PgqKXQVD3UY9saPFD7fAYkBaxFFMcCiqk4w846",
  "key18": "4DFXkJXDuEMnzksGuFMEyD9jERCHz38KEqZyrVqVtpFUY6CuP6fqJwyqj7ToxqJ4WsF6PRapcFnUK2PKez8opdSL",
  "key19": "36rjHavLJcASEeour6mnRM48gxXj5RkiKdJ46NafH4mm2kGQqpYhA6uy21jaX3m3K5c21JTbe6TxMSczzFSqYh7s",
  "key20": "3rEbzwQ6PQBMAnW8bqtq9ZqyNjMCPc2x9UtreT3wqAZZwiY7XGAiauYjQyfi5tWDMtFUH12LQGaxA4LicWdH3FQ3",
  "key21": "4H4atxSw8BNfJwKKQ6RrcBYvEMoHdTejVjSudsiuCGXgaTmjFrgsELaF3k1bxFpfLZL5D2ji4puknozkqKmyTvZS",
  "key22": "55vsHDUqCsY1eipKeiypge3Udg8n11rjsrP5L7S3brPksoETvDSyNx4E96PyefVyddwLCCv9sPr2QzNEzVcN5ob",
  "key23": "Fno49PyeNx4VVkACphSLhv7p29mUWDS41BrB9f4dYsSCBAuJ39Pnw1sScH2r5YfVsyworcZ43YbBAkBQp3mhFPW",
  "key24": "5pQePM3QkBaySEVWmEfqNdpqE8wn3iu5AUKBng4ut82gttYjqzvwzu6vefVQmJhwSoaaV2gPjY9P6yYUWAhW8AZR",
  "key25": "4fk8gs2w6cfQS97aR3ZR7fxn1eQtcmr5zKE6oFzn8F54RRtBLuQQFDu4g5FdCcKgAU1YrBCWU9ZVxSQLx25QRivc",
  "key26": "449HuxtLiNJh65EErD3duVUj7KXbtcSRQZi3zhWpzKEcA21i8mzaazRTbEusnss2uToeo6sktmLnWnnW7GuDENGD",
  "key27": "5RAMjgEwKhZM2pzpNkxtcMW1H5aEzBmu6e7cduWkewsiVK1rmuX3fVPPRxg4cFGtTidEah72XWfNGhgfSqSMWP98",
  "key28": "2EYTmbvfD6LWztirfwPbsbJNu3w8fcLJkxVYghgzgZTQ8UvbJHDMeHeRxmoNyRbRhq4b5Li8RWWaBACet5E4toLm"
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
