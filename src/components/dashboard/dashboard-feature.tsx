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
    "3YtAXs3miUGutEtwHTP9NBqvTgjHHepxgtdNAxT2hh3VjPQHd9WagFgJhNZEsND4ucnhUi3nioG1Qm7kevJFCyn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62aFNABmPpHn3GvPhXajZ2ry4KWvp3BYngwcnq2iwq9mtZz87zkn7gsj19YDoLqAFNXvjqZgtA6TVXAYsNV4Mnhj",
  "key1": "5rCEyin3CAaei1eoRJckeiRwgLXPThb7cmkmRs9DcDh3M69E35ESJjkWQt5yDeXDNKmYni834q9HzQ73Ly5g1v4s",
  "key2": "5JvCTJJ1u5xpMseUw7XxQNLtskT57339fdxiqNj4PSMu8tRK1KVvpyTUDqqSM65w4Ne5ZpJCDD7GMdYhjicTvEr3",
  "key3": "358LY29HC81J7erTdX6ZQiisdKscn2SBqPCfvsKab9raDcCQTDvuRpmab4NVy8ZTM3Gc5QS1tZGCsnPuUmKtqegW",
  "key4": "5h4pRQFZsGGfgCijcyEfzPA93kwHP2aMzoDQjt3LzBk38iq5vWkbLVstd7pypw4p53f46dxXYYeYiwCySPEFHCon",
  "key5": "39gr5QK3YT6r8mZyfGW7sAvN3owkKHFRo5NjWmzixbGiokHwUPFNLguQwSdmdvyRcZ7AR3nFgmLEAd1NFCnAX5yk",
  "key6": "NjxNNdty6ioTr8WvH3aAMbg3y3T5HjCkCTGL3x6fvdzhZDA8eHpho3wj5yWETsb9Hsf3maHdgVd7Wuuoppcdqqu",
  "key7": "3zgoazSFaFnGZAkfeVBfbWiFpNrmHC3mVGbJobp9WK4CFv3H5Kbe8oLLARDbWfL3VRcjtMRMKung5j5WzcvwDSZL",
  "key8": "4LkPTabTFVnEB4wnXT1LVgz7zwSd1RxPr1vp3s5M3JNdF4XLguxHrFC2tPJMb7GMU1H5HPFjqdjj2Rx7z6rkZWLz",
  "key9": "42HWmwjZGSMp1pxgHWzotDeBaZQYAF21SUuDTDgU6TGtApQj5qMMgBtUhRyorxyVHo3MsiSupPv8BBybKTJzoHuK",
  "key10": "5rnWy1D7ju1rKHgTo8o2W57kuUpzh4ax2YSExNZjvUrtqZ73ebaZfEEj1Uth9W59FsHXFznbGbkPV8MMbBiz7uu5",
  "key11": "2fzc4XQhNyynqQ3aSTgYrRYzNgBUT1QNzPk9f4JJx2GF2uR6ZW7wL2DhWvx5gAgC7AJT8i95pGQtFUG75YaCdgxD",
  "key12": "5qpDDhyDeWFKbjTQtgZn3HKdGhmoExmBLjPPWDaAvABn5c2KDqEXeQbWwfs2LV9PNzbz1zMoYVkmkzL8vSj1d2fZ",
  "key13": "58LDQCtQTizNjt6rTRp9X5A2eFuQta6VhaN7A6H8H9Pi8hAHdXRSi7kSsMVDyve986AMZ5eU2w9bGt8GNcgZh4Gq",
  "key14": "59R2e2x6N7TDC9SxMGBgrN1kQX6T1Q9gzFcLNERbJPV4vJAHiENzCcFpy11ozcFwVWhSEYarPGL9YDYefPWiZgsh",
  "key15": "37zBugcz39iV9zZcCpqUwbv3WdcyEYfxDiNQX2jPsBeVChpxv2EXSMDkF8ef7gLeUeHBrdPsHTDNC39w7Txjiw7U",
  "key16": "WRYXRmi8GKVPukpbdm526kzzR9eki2TkZNApVWjFveUeHr4uyDkGFQkMEkqvoUBdEtaZ2xTeb7vjLQJzCwTua8h",
  "key17": "2k1JX6YNgkGrAUuYzzLjS3i3KwDm7LktayxPBwSYC1HgdUm2QGgW4e6Xd5nPJafJg6hQ72CHFnTfb37zBcSrAX5d",
  "key18": "nEMbDiZxm5ekCR872WimBdmvtBj1d3Uf5Z4yzoTkrpfFJb7xiez4zZVbBQUY1sL7SutrmQtUaGqh84yWVm8PPPj",
  "key19": "2joRYThL5VmLDJA4uuT5PSZjF8qTQkVwvxHF7HejPfq6r1kyGxPHYrUi1b8RzZnV4avfHqDWVjwPK5qN9oG1Df14",
  "key20": "3WZ1BcHgMmzpMXKSzyCVfKporZyrGZKnDgaqhtHvtsRBPfBT5X18fTpMFNjSAT8hXtqqWKRycf9PmzjVyurcD2aa",
  "key21": "32rTnwZaFkFzTx7fKC9iRhS8fQuouojfFmsi8HEu3ndLK1JNg9bCw1HKNAH3kwHgKEmfKj6c2gH4miTb9mqpqKHN",
  "key22": "5bWG7st7JXVKCHW3p4fEhkwBiLE12Mdgw9i5dJQjZHmYyDATJgrewJv1tH6hJQi5xQrWgzqQmWAE8vUrBPSXxrEc",
  "key23": "3TvmSZfhw4Xi4V2y3Jw9yVdFZJXmQhPDAzTzroZ2Naxsq1wYjTt2FDqjQQrv81ewxPpWWv5x2YskaDuVNuK4Qogr",
  "key24": "5SdsyZD6aFn6et1TGZB3DRKXeuafdzVs6meg3ZAypTDQeHcv9EdN4DjieN7HmQc9LB4MP9UBrBncmbUFnggpDD2V"
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
