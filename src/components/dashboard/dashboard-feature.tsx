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
    "z2a3HAsW6XQmkkvQWERqSCdPu97aahoH9uZAbfuiXMFeBCkZwy3jvJHqckG6QhgicgbCAVvyV7cnHCEnjLBE53z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZ9cpy96kHqwsLY8bHc8j8veHuEARq3cWspeqaFhsfL4trkdfQU2gz2vfMiTvT6HU2Jby21huh6eLoqmMfKDQdH",
  "key1": "3TC9xMUDFGTtx8ALJ2YEwbXNhTbSqDBgNshM8fLJMBkDUHa34KXXVhpitR1PgFBHpqM9DexshdWNZS5TMYDQGBtm",
  "key2": "4urFRfGgQGiVQYgs6CZgCKvRmXCXXsgMkBRuJBGJpr1rWjmKrDiWHdP5jMogrH775GdwySW47CFbbkyM39obQMN7",
  "key3": "2f7KhrYMMvutujffrzPFFTxFhYAfzPtH1YpV3KyccGWSBgiHJztn26YfLT53iQhL1vzWghXiNKDRZ7JSyni6YKR4",
  "key4": "2crVi1qk6458bVmJWJjjNCBRSVWT7vwhj68A676L1RCubfxtVeYtggxUVrbdUFWWM1BJWf6ao99vU9QsoRLYQC3K",
  "key5": "2bpjjLGyMHuyc6HDE5ksZvrRZ5XPiz8hXQjtRYKvxJrEoBfcnmmnRQqcB2AhiEnob5omaSPUBrb3U9xAehuLFPVb",
  "key6": "3agoWBitNjK2E2e6pH5jnweZXKX38L424gY2SM9fPC33rhq2oQ7CGJvoCh5UW3Nf2MDq8tpdiqyyRAJy2EYzvkot",
  "key7": "4eMPVuRBwSaaonKRHJq4k1yVdGpUzYyZnjvfWFJRNx29xbHBbMHSGLLeUosYHGG17qn1K2XKLncGNdKwtd98CQiP",
  "key8": "wBZCd2EVzNdAQ7MmxPgJ26BwhW2q5RFAh7r5HSrpDvum9yXfEJkTf6NMWev1cnkSC7yz9CYABPz1TuUBKvN8429",
  "key9": "4NjFA1JQngqJA4zCXhmtKFMkXpz5QfjgMPY9yndWA2uj6wgfyvAtUotGJ6gwjco7YMTtwBAvq8GJWaa1qGJ4zran",
  "key10": "2Qr2RPrzGULDKpoSRAxH8cTq8MapYy3qogdoKLJHgR8dKy2MBZmWqEYHNRnQVAroJZ6vtEj32ZfArnxpXCvr43QF",
  "key11": "4HQqkguYEtLAZtJmi5si7ac7LYEwvuEftVSXyceBkLiXgJbgk6ekmNSu3ZmxKQbD5waTycEnCgL5Topik3wdDtsh",
  "key12": "3bk1fdNXWCWda2gVGHmJHwrjEyfYwjCoCCNohgMT6zEUrAwFTvf6jMqw9RA3mH6ti7Jfo43uXiBX7Mbo7wv4oLN",
  "key13": "4cxhPsV9fx7rpLNbX96MB4WwHLV5yhp4zii4AdkZR1YGtgF8ReNcPWvUp5VCiyDn26rkDPaBEkHAdHagZCxfiNgG",
  "key14": "ngmAD3G796YPZko4ANZjufnsDbmoBvkExq9evymat55wW83ssGCVZCbyGpd4BjfgkR1zTTw4dWmx2mCukAwuaNK",
  "key15": "4WtstbztLfRAdyc9f2sjgu5iTFBLeRpXTiEboacD8E5crXykm84STBp9u49d8TExNFY9LoCfwSFAp2MyrBkshduM",
  "key16": "anzMjHk85NvPKoxChjB2P3cNxWMcGeaurnb8a9aMmyPgZJKAYQzwi69D9JCoc4L2Ai4EQTuf4CPfQEieGmUxCUy",
  "key17": "i9WLZJiZLsK4d9kBkFBMQm1w7F3ZCH8D1dsKawGFY6ztNBwScDt9oosFuvxLvU9R8RjdVdkteKBZMFh13sgZxQn",
  "key18": "22LmteY9p9A3MJqvSxDZ9RKtabGbYRzshawTdH62QnNCLrRyEgCzTXsyuwhRXeTZe9GjiNv4UGNh3Rsh8dFMGotN",
  "key19": "4PaAYqngE4oLRJ1q8FgFjMg8XLk2UqysfCUZtKTnZjZuzUeCLCN68HsLfXJ2FPztKY7FeXYW4KYKbuEYFniHTZPZ",
  "key20": "5qM1JH6253Fe6PeygUwdVg5BBJ8JhUYuJwuDzhbSDhmZ57NJ2M3CfVnQcVzQoNEGNsrpqYk4BoVHAeYtpkSRTVVw",
  "key21": "GvfhrQSr7YFMqcaDAsP9ehipsMu2WLg59RjUexXRYGujGh5L1ARydTchyNFmRcDwoKTQspnoQ3dLaE8XfwMLC36",
  "key22": "m1pCwMqoiJ5wAuFU9CkYUCB9w7e13APVdga4Bf8iGq23CJQZALMMPUF2WP8VLhhzyaDMgTm9You12zLfJtdu2Zh",
  "key23": "3KsVkbnTdSqWZCxjr5hwP54qP8MzThzaGtWERCLXoh9yvdo5fVgsNCjZaD9kSBbrvZCpfrCAfxH4vr5CfNWYbb4n",
  "key24": "3UCjWsTcnzCxL2wZrH2qhogMVmQw4Etfpr3pqnwddMEQytvnsLC2CYa6VaTqzNcGFRUp2pd2Z3PEkarN6nLWUAku",
  "key25": "4euaqEX29YVGpqHgTVKmUCRk8YiDDtc81PvWZhbMhCGhmrKWg8ZyCXQxN2S5R87yZk5K7ZrP9dUz8P7omqAieKtN",
  "key26": "u9hV3xKJgnLdns2ZfxFM97Vy1RzZFaPGHCfeQWP2paqcYLjKUgYdbHWeBLA7gu5FPj5TPcFrbiaugfei3bBk4fy",
  "key27": "4YVqD15aGRuBiLjgdu3QZAvzbJtncrVNBUd3WLJj15gWqu1c48uaJwN62rGcciKEQ2jvYByG7md7DppERsXHWUT7",
  "key28": "32DaTexeMgz41KVZHjKhELTzUaxuM41sPfsi5Mb8S7odbRCEjXQeKAajtX8U1nYjwNEEzpLz8hyCx1TS2MgNNQuS",
  "key29": "5xH5e2ry8bbHb1H1XbTjDrHzfeEGfkKj5v6wvhx2ouaqLVf9duvUAH9LD7U1MfdxzgeDHXNDxHn1s7B2y1c226mL"
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
