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
    "nbB9cuVwXiygBxGkSb1Mdx54ivgSnjHdzKqxJ8VRqZbweCCzacW7hFTSzPgPvpwzyroGuy2uPgC4SNDAb86xrEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWXcdf6zLpE7RKS93Xr8otefcciSy1ELMT3xt9t6BkdvQR5CxXP1S7m1rACG5snDaCvVXYeSmMV5wtsNVisV469",
  "key1": "42zsdEF8ECTPCAqdhj4rDjzizsRK3kMd1524g7pZSHaV27iPg3bz2S14nwNqpNkAEJTXzSSk77cxfTUiLsyhudUP",
  "key2": "4N69SFcne6Y1DTfss8TTCAnN9sfrXZK8xh1s11isx2sV2k78EjWscrvPU8ab1qpsJ8aMwhhBdHJbtF9uJw7WfyxD",
  "key3": "2eXz2kUR7n55FmfckM5HCVv8w9aiGHu5GZhHM386pDB86KmcExCUQcxiRv2tPECceSme4ZhDgVM2avNeFDGHf3Nb",
  "key4": "42p6cVttdW6TwCGQZBD2DmuWwSSf94Uqn9kPjGzrsGSwpwJ3ncMfknNtpi1pmUwnYqAtHLNMe636BGuYdcZAmUXn",
  "key5": "5hWpeRxXUPihb1EcPyfQRRjinu1w4vVTELXtRNbPC1Hspw7XWYcCyyiRjjZvoya6jNaacunrk1vKyAbE5RotYeay",
  "key6": "4BLfhQoauYdRQoCF1k9CXKK4nqN4WQWuDEzpBEmmRsQW1tePY2K33SGchpHaAjH2LSxftDa9RnSf5CXPxNLZ3qP9",
  "key7": "67bi3ERpa2yv683nZ5v7nzzZDxcERNB1566Qics1GZJ4oY3584YQZtuTNxyhXKqiDBSxCWjEfzHT9tR5LKL2MrhE",
  "key8": "4dFpzBxzDqtpHpBr74AofHcpjPGLhEp4KeaDeNoZfeKeVafqW5LmRNuU9UfRdJKP1EjEoyim3nSj1V8WokZwPdiF",
  "key9": "5KQ1QBPfr362VrbZq7m16EqYmPYCLdX8zHBCGRZyqVYRhdfSLeRwiEeZipnPSiG4Lpsep44LqUYRTmcun5ZpqeR9",
  "key10": "647xsBZiKDdc9NqdZS4Ugwv3gEPHecjEVE9nk8ewUpdfgAyEVedUVEJsJgcnytAAG2DwEzg731xsBmBGVjTTXw1A",
  "key11": "7a5VgzFtrmP8ufiTs1F7R3LpUJxyoHAGphPdKDXiwyjKfGmpZB7xbkkmDn9G75wKm58GMzXTZHoKQQ1vFtGtHVn",
  "key12": "3UFhRCzYYiDH9nBKZkVbkniHJct9ZrJT8jcD58u5GDwLaUJoAjEP3RkjsXdMhd6e4CvDPqRXmQmgpemrsx1pduSe",
  "key13": "5JnfMNPh6po4CtBPY5SAy6wQGSiM5mQkC3yH3P2Xvp5zZYq5vkvGwVagbzL3CYRdE6xgwxu5LvH2gm1mPRFSc4sH",
  "key14": "ufwd87mkuk8NcKRbhLwTjCR7WPzTY8fkwFXWDzYvTYPnzCs6FN39amKmDMTWB7um1aJCnrTnvNiik3XQzkF4hJe",
  "key15": "4BMobUEn9F6vqvycMwHhPkpd1KkVYm5suVF6fQkKqfwAavQ8YGyvqHKCJ4Exy94bnBUguSNEsFaFxhbCfP5pwX1A",
  "key16": "iiYDywX8QijUGTo4nfpnuK21YqbpbiabHeuzn1wn2do7aendoqV8ZHfySwfrEw7FjSfCUnPrnKKaJ5437zTpunD",
  "key17": "5XfPUqvxmwDVUMPepoYzhwZ9QX1t3XQs4xBhhxJbqGsZjCKC8kGDNFfXJSRrzkK98CKN5aEZpubgiWpNY4mhg3sZ",
  "key18": "5EiNBvC97UZSt2ZytpwbDioUTp327y2TCszuH5kYLiMRpsg8Q9M8BhmGy6k35RoQwbifvsk1khkDVuSyuWE2qWSL",
  "key19": "m2KB5KtbqQZbAuQ3nWD4JrYRF6dy6LeTnstMbZNNzdjSN8D8C22GXqoSEUxQtwmpEUGFojBvMkfCBeZxbJtBFqz",
  "key20": "3RDUCSqMcXwALvQoDUf84HhzQJ9Hah6ahhQ12tJD6hq6sg8u9fLUAdqE24FZmfGHLVwxWapLdajW6yVV7ZLWS1qH",
  "key21": "2shfgkNmSTG1KhrZDYGuvXEEb9otyi2CYz69DiG9RNwefp25o6uiGooFZA5U4AvNJkQzZKVrbxjEbzuqjbga1Jj1",
  "key22": "4C5HaKLtuHWqbS3htLV3EftLVZ13zPHWrubnnWGzeVQYd8gQvDgqCrN4HAoNxUYoTLMmWFWivRQ42XRz1x8nbGTA",
  "key23": "2DR4Ya4uKyVfsVcpKZkkETe1iGHaPEw4onH2Nimq4kMtdnn2jnHjWhPqRif6nwQMMkkWfyxyafbDWemDEK4nrYPA",
  "key24": "2yhEAh2j16x7wQcey489SawMRib8ty8o7mLieUKnm8TdPxfb3EhQzAL3sc5jprEJDjnpgC8bDP6oBzSVhjAb9rfg",
  "key25": "5DqnaUG42phJ95TrYoyocvJBdiiBfaCM4PBC4fDMu1uXJti1KKNhZDwfuX9sFBC7BqG2FgB2ZHoeyX1oCUQbKedb",
  "key26": "2QJuSXoTeAFQ3vS6B1PjRyRxvhDWQhcedk5h9kaFscuh3jp9fks2s5BzpfmKiGtcoNKxaSEGCZUqJidEcpQ89Wqw",
  "key27": "23435unQzM1EVAgkDaDwJY9nex71PhfVg9K7L7SMnjbRPo46N5CMgCacvxTx2EtCmxFsW9f3gPR1Vcs4immtYzsY",
  "key28": "U3F43dKASG8z7w2eBc3EZeAd4BLoTsstpcQCpvHp8zSTMU2Zg42P9dYfTCC7pghFoqiPP7vr4mK5sXxDZT7mXDH",
  "key29": "2yocv19vBhDNuygGToexzv16zxW9MXBmBHbjQuwU1QYZnoFKhLspAM7oaL6fmDNuk27xwVkshYvcy3bwXdm3cCLb",
  "key30": "y6WV86NkSqW3NnMqNBmE2ZVPrB7ygxqv6T5oKnQMm5vdFnj7bMKtrUUD9aupuJCURgT2r9Gk8zpcpsqByAefWZD",
  "key31": "5khwjhgaukHrG1idieBvkcr4co8AGT7AFECoXe81hddEYf7Add7yHi7WZszTi6uTUYxAkdsg1khhNJQc6TzmJucg",
  "key32": "A6CMnqmUKhjKDa8DYLr4noE5V3pfXU5jbbG9tCaM6b5TC8KpbjeqfT4nTEDCneanCXGnTYJ9EyR2AEr2iDuJTZG",
  "key33": "33e3UUn98Q9HLErq7BvNQSz1QNu13wtxqbS5ytNZjoS2wkbvnVLZKth5r2ymRs23WATyVUf6LAGzfP2mHSn1GRV9",
  "key34": "3B6WX2ZCSfGExQTM8EhUaToVWZVgPgCFRMw66Gg3pqiz9d7EXaohTbTWBPkRbAUHHn9pzMxh3s9H5P5PqBArjjEa",
  "key35": "398JWdnFfzHLH6SQqhb1bxdFihffhhW4NoFgEL2pFPz67MXUAM6eNfcNoqZu8z798U4VEFG3zg3qe32maJvYm9T1"
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
