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
    "2eceo9o62HpxphaDnLmnHwgJMZ1U44zU4UVFsP2wi2AT5KUjGCUPkE26m3G7HvzsZMGv38DzViRvMtNFFijUVf3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3PsDntASk4waKzqygaPDyhCK3mQT3LaKkgHjJG7TkQGH7CxyWDT4VK2pYjm1dUxyp9CCoVyAgD8pvgbQWgz59a",
  "key1": "aVS1vsJ66cicqjhCAXZKyKQdR348ZnixDddRR9fFq2UaSLg8KbiDsbx3raz9r215sj89rYtcpRybET6JwNVokxc",
  "key2": "4Nk7qKgt19FpqatWnmAW52n1sq2FskRpPMDqkVhWhJeJRipCosFsuyvqarHJVTaKQPpEm4dG6nS5NYQburg52nAj",
  "key3": "2HpgjecZgGpvzm3dRhbsWrCbuMNZXU5GdMh1GenEiPFQmuEp7r9R5FJY9RZMi6ZUkVQqkEmFsRonRNc99gf4YSzK",
  "key4": "4dRNSyCGsBHXoPoU3nz5M5VB6WMEBPE3fFspgTK3iW7vU5pWCLDAFQRgACJ3znPxSr6kJWTjdKj5msckfoqRfSrq",
  "key5": "2A8Y8om19KHeCKgmMJU682B2kvkiwk1K1sbbnb2nm72g3ytfGwnr82n8gzP6NFAWCqNr5zDHuxgpG4x8bhZcTk4d",
  "key6": "JESuBbZwkbd5ovdpgPiPqjmhNdKUvDAtydkdxC25CQcKL7Xo9hJXK4FV3NF9FGXL1bFmCekymBSvRuzz1v6zSPN",
  "key7": "5zqLZ8RWvyAKhdKtZP57gfmM3CJDFAddAs5kZCso77TSbPt9QT4WrpcbEeKr2eqLJHX8W1up8WWrzgiRN3NSms9D",
  "key8": "2aphwBUVyov3cXi7hqfqy8pks8qmrPBs6n99iVF8XcbWHDaTR71XzVfdsBJ3iYxKjDGjUYH3zkb3Q2ZMgytrED3i",
  "key9": "3cCLiSWfVMGs53XYmSfPC2zhheugeBWCUqDNJJJg6W6fDm9DSv8AGm1uig5NQG3H6riQSxk8bhqTgTzghp3dxEh9",
  "key10": "53oEzDS7Cwu8surtTvDsJXi3DqnVVnW59jxYXHNL6Ud2v3Xt4PnYhByc2UvasJ7ejAwchPx944XBa34pB7JGPSr6",
  "key11": "KokfPwRitv4Mbzz3z2py37fvLdtUFnBHEig5YQieoQFRLeHrbhdNE2sjaEr1tSW6Ni1aHEtNCJxxey8x8YpueWJ",
  "key12": "44zgdEXR11AGPNcPwqoGT787HUNaWKKs15Gqd7Zt3GKi6zpgcNqGGRz6nSqussP4dcsS2ZhZnFYJutb7CEhZhbvf",
  "key13": "7Yw7znixvVcWV8uwpWMdDFnu5CwyQSS8cYHqKczPUkCo6x3zGF2bgcdwj5RZBqiCEQYoWNTbvdK8BWESMeW2YdW",
  "key14": "5Cw9P6kNf5q5ZrwD8zaVRBVRU9gVUmNKHHKdDAmdCGEaZAHrLiJgvtdgMdGiyaYmw9EUF1gLVXqRZug1QrTBgwZf",
  "key15": "49WFkg72sVHteD9smiiXy4zPbAcpJ3ENLB66x5fpUsjfMo9yycoJwCety9VMACGYPPBhsUn3Btin1VUdDyo597uH",
  "key16": "3DzordCe2dVPgraSQ24kjc5ndyLiwUtvS3WgT3NHcK4Gu7NHErUU4dxwvha3ShWNKCmcSE3vNZ2ebxg2RSC2PKks",
  "key17": "2pLKxzP2eR97wwqQZLhkSTq6V25bSUbeM22F79KmtpDK7FA2LcJuwiuPD49XfoPfeuDV8V1pHbwmUBysJrExzCsc",
  "key18": "5PCsEQhLpAifRBXYdhFjwXczhuZuQVsvEia8THpbm9JN3U3sLUaj2wkGSzR9DTn9wJdTTmoFoUbowkBvD6ZPJ9LZ",
  "key19": "o5YnEDH3QqHCVLhNHFZ7P9xvfBeinb3v44J2Zvjny15UDkDqEzmLubv5NFYcy6wMoFcGmneabbRBvowZdn78LeS",
  "key20": "4jKKRpfocaKerp24VNqPKAsMUdybdRtH5hPuB3w2yu7bKyuAiJaN8gHCuYCGgBT4rWa3VTXkBmDCU9z1LKgv3KoW",
  "key21": "Ay2HnvdjoqpUoZbLAAeucNF518WZnWfg3GKpeucWzhXDptvw48k4NTE9AU7sts2yF4L2NsQLUgb3na77MhKij9q",
  "key22": "63enWZU5RY7RXtQ2eqaCK6Vnmq2dFFPX68wAbgij16M1ya4MooFP72qpgpbuMX1TpvYFeG7XuURFuJmNxuM3SjAr",
  "key23": "2xGWXphLFCKJ2N5t2a75XJkTyVC5sNFobbhNDt29YeicWHR4rtjdH5HLfHi8SEk2Bwv9ZWrQLjUoofLBf6zuGSpd",
  "key24": "57EdT1TQSqtQ1KzpBLje3AE6YL141eG27W4kMU2Csskkph4Xgu6wnzW8gEPQPCo9jzkRxbb1HNZR1ey5eb47YUar",
  "key25": "c9x4uGdugGxw2oG5TWNg4UNvBgehF9LAAyPWgHUmhaJ34U9aV9TiqKgdwbRREfzxpPQXizD3psSRVFr86B96G7i",
  "key26": "5P24BC5aHRheRGKhBWqmhxUT8YHj7N2BYNEeVHKeywTYaz2n6NcyFuccJ26RJduawrVfNaNFy5ev1emUBHN49ALn",
  "key27": "3M4gFtMmrtbuSw1rmPhJSDnmnCZg76ArKNoPJ4vDfD4rKyUAjPK719NVw5TvQc6zcK2AAaB3HwUQWWEtXgtBjpky",
  "key28": "bFz9Vqu9QmJjF7vY1XFPUu7nCKbyXTkQedU9GrDbU2WfjQ186GixeDdbQ2sucnNgxCV6z2UJoR9qyPAKiKMqt8k",
  "key29": "W821qVfVkQxBYpnHaWQ9pc3KhYVnWSmqLwWXVAD5g2UmNhw2xBMqRnCEnfbhgNYNFHx3A9TBWEwUtFjEy6YaHtW",
  "key30": "4oggazwkvPgtdHa3xdq6e4Mm7GQCQhwxAETpKns6hYnBk5mbhUeHFKxPkv1MZcE1L4BUebVyiKQ4zBW1xdyEoAep",
  "key31": "4VSr71zgeZSaB4sCwT7xHjbvjtfsFV55mDqxNMPYJ8cT2wQ6GjhgWLVoi2Jqe1D7YPNYaMrC6zZx6aaBvF2CweUa",
  "key32": "2Sw4TQphhbeCgVunssnrYjoQcnysgQL7B1tiYJWCHAz7DXzov7gUQWn9hKdtxt6YKvmfkw2YL37BVqSyoSvv8CVa",
  "key33": "4fT7E4ZK5B5xzN1LRZccGsAaCgeY9eVMPotgy7Cfuqj2KRBtR6zsiVUK9381o4te4MJyhNLXX2PqTYMiYwtJ6mQv",
  "key34": "4LfMoAy2cK4J3kK5ko5catwMwksnauZomdXELkcVnvE2Wz8MRswD3199KoJWQgfoENQNWjqkxgLs9xq4LTodTVUa",
  "key35": "AkrK39ixEK4oCFCkDkJgCPW4cjAwcXqNCnbTtZG7HzQA2N11zJX7UDgmYyrwh1R296R4iJ9LQXVUcR7R3fre88L",
  "key36": "p11X7vNusWVteL3goaUqPwbRyCP7TDVVrKgmfgweUHBQrSQdysASqoXwbWpW6Ljd89pMJm5S6RGcPWBJqTHPXPT",
  "key37": "39Q2QwghfC8N4dCSpf2C91Ex7DU5fVZLiLYEc9rE6RgJbk8N11nwMwDvZBz3Ayz19HJpSRYuhwDjt7MdTHM4CveD",
  "key38": "YxuU47vEmBXs9bjrWif5ofxjXi9CZbokrnwbL87Ld4dpTL15VRvKVk9FSfC5hFNkoiyueNtzoRJVygMqaCPRgFr",
  "key39": "5MpH8oFqc3xY8wPDtdJ7zNGGLrNBr6DeqtHBFPbTWhF2XoN4fPvSj5hwHhAh1jqEhF7Nucnptv9sButXxtXfTob5",
  "key40": "3KcTtcTPnTJBR25evpEQoNC9BBvtk6qmdYpTSd3HESp67toxAeGHa3MvmJ2duLRqEs7NnJtCruREmahBAi2vhk81",
  "key41": "4Dkntj6s7tW5WzeUkjsRfYVnrbUy6N9VXBBVm8qkgS4zkbK7gdbKNEF3RuNCoDFnroUWnSFC6U9Ak9U5JjDQCyRz",
  "key42": "25JGGAE3XUxaHX7pA5DfwBeA4iYy8JpurGsLxsTKiT5pxM2UzNqn94o3wRSoH8f6K6RBcBWVWBVF4GFyDom21PbZ"
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
