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
    "3YqCtjFX6XNP8EYXgM5TjNQbCvEzNW99YJmffKEJE5F9ejQoJYfnoBWKFBud7zWM7PgGpEQsXSVjMK5azaiQ4f7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bA89JkskFmzu58Zyaj4zFs1Sk8gFw8kbqXFegyM3GBWEEz42vjCCnt7fmaWm8SgNgars356tfVigoVBp4RgxJDX",
  "key1": "3wEy9Z2pGqAppMDun5oocoXejNHCSFssDaZH7ybWB1F1apyyQ8ZnEtTWeFkmLZcyjRx5pVSswsMQRCitFs7x58ew",
  "key2": "3khZyc2VQpnw6JW3h76iQFN1KE2TWnxxa6dD1m1DV6e6EXCrWiu33Zj93SfysGJBdSkLHuLXg7811rLBQxxsRnuD",
  "key3": "3xDPMNRF3rRTvHg8RrLCUjvKxVepXna8XduaSTTXKG2uYNxHisSA1KQjy7KwpEpjTAWGqbstBBHDLLdMF9fpNRzY",
  "key4": "3p6ek87FVhBWcC4voWjzHtSWdDcLkv7kk5asVscaEb8LPt6d5QM5fsqv6NLqCaf6hNa8kFg7SsMdSAQdGFjmsmsp",
  "key5": "658Rj4gZy1PFvGuM3W23kiT8TpJUkwG5iocNnWEWsgYvkfMmoRYpo3Gtnk8Suxw2ntudC2FEa5A36XtT3WZk8Qpa",
  "key6": "66kmEHS95JoHuDVy49kmUysdmxoSXkdiFpM4Bdzh6w29ojwpVFnkf49Fo9NXrBNmmjBZgg5s82v49AhD9F2iVoqm",
  "key7": "2Z2nnfKDBeA466bJZgE2CVdtS9NMeaMp5YwqTRPY2JNoJp3xTidwXfgAvJBmEHT9dc7oBCDUF3sxDDkeYdFNsat3",
  "key8": "4frhYLu1TmKwYYVHiVibTu9Hm8ndV95NQF9f95kdPYZJMD7Yp7RUjLVhGztueGRYfddq63nMdxNMTw7SHEcXofy7",
  "key9": "2RhhurbEPQYhyLAVDKjViYtCk6nqBcJtdS8h3ZprWkRm5ZnWe9o4CUcvGUMTybWjEPkDCNZQCZJVd1Z5E7YSF4PM",
  "key10": "5WxLr6G8LHce9M2Gupt9F3Bu8KvKWXjsuSANJmAvST3VwS8Fs5bumCUuvkTwNqoeZCbV1eMeMYXpZH6wz1ZGWWc7",
  "key11": "4JZrbqVjhveWEZWPoJF7vyotmsW1noQLBugfKuPLZZFgizJDD7tcKGrWRPQhbPCRvZix1WNVWS17ckWP1S1mUqJX",
  "key12": "2Fp4dQeqqPPmiM22FUaPzUaRHGuFAABGFDUqfdEN9JV742GJbYhDJpemZRP6ZQJKnm93QfP8c8WFy4w9PXL8YcJ6",
  "key13": "4nfhPZCC7i9h7KjwjRhowBdoNEbkVauiMDWFx7RfEbTAmrdzN3jfpiGw7vDEzRvc87n2DGtw228qGfjDrSbNj6PY",
  "key14": "5bFLLkT7AomHLdD4VdzfmmrG21mNtrtikTU8whjVp82YJSpbWhjwXC5mWx1vgo42qpwGoxzExHHTS8sdWvzK9xLv",
  "key15": "4aX4KCTRKZhEJzcodWKTPEDnMdHarVoFFe6d49oCFiFyzFYwud1NCrTuAv2c7Gxr19uH4y6hBwpRgyiLD6E1dQE5",
  "key16": "4eF3eXCXDQdMo69v3Cq5Jy95Kwqhb6Um9qAUjLavFEp2Ba8Wp2NLShxYfvrRwdM8NJPXEbTVau833Ag7c9SkE2W2",
  "key17": "2WZ5PL1U48vXDXGF5H9hJuszkubyTvJp7NC6uxkbnBx9Yjr2MZ5ab8PT3QCXyVbqeXtEZQ74LtC8zaczY6mc3XAW",
  "key18": "2R8zvXExDf7YU8fZwvDeAQA5SKUrpnrgFp8zVZystve7qKj71tDKhQEJ2JbDYY22jdD2wmKREyHRz8LwMms9wSMY",
  "key19": "2QtW8Ty3a4ZmUpAEWFUJWEWqZJxBYkWH3ZMSAfUVZK5tNvvLgVbBseVM7e2rDSQPgDyVoWDHmru26UZRDERbsHvm",
  "key20": "26K4kafqxKFjfwmsoe8sA4Zqs2vat4h5mbd6QT6iAZnTjq7pXHbpULBxVP53oKNPC5PhqQgHBVWxqvnZzvtfvnwS",
  "key21": "3PF74N2WrCCCSChLaXNDuiubTxaNcTEjQ6HYrZtqx3koDtQ8hEko5Vca4dSc7A2Pbr1MEvErowU3TZjQ32tn7xmr",
  "key22": "3vvDeXti2NzBix7jCyVqQyZ3v5oWMnrdYfkHfRsEkiTBawz5PGBQpZgRBLmCicfwTXDUfgJshx9FbnUChitU5wTj",
  "key23": "vfQZzJbjNxDNUC5JGCcfcFy9nCmrQp9DfJ5qs22p7BDtcPQ6vYsM6QFg4b51tw4nCV4LAcZAA5AHdejq4XjxsB9",
  "key24": "3bswYaeq4Zf7dzK7ycC8pogjVLj5oqbevasrzEMWQ8z7igP9WUBukn6BWoRMH7zyZshrZykPdHoTf5jP6kBXLE2g",
  "key25": "2XsmJ3d91hDTy2grskQzeRX2JuEfYJ3FU9JFzEK6Dh2A25xp9fg2f2ckGaUwyLU9s3oXC8kXyxHTwMxRRoRTmk38"
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
