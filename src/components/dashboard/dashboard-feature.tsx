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
    "4fJaPFUXChHYGzMY7vapDu8imfNFfj98fNtnFu5835dFvM4a9Y8RmZkvshcC2yA6bfuyuQ5QAhnfNM7wdvpf5sT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWFkzPzSksSbWnWDPB5aehiFike9bDqES6SzNsDmegYMyEK3cdruHsB88uLvnVjLq5q3TUcvwJPYrYMSa9BUfZ4",
  "key1": "Ra613nmSnAVVoVG4Qhy16yqXCXBCQdTM3UY3oJdXksjzf1BzhbynbESPRnGZZRm2ZEWxtB5k2fyisSSinzVd5vt",
  "key2": "2P6vW9SZCLkgg7Mo1iAeAr8foqJJeRybDTPC6HvUvKqnfjoQorBoUjkx3UBrWK8ijEHVsuwwi9twn9ztEZ52uwwX",
  "key3": "5M9z3u4JEu6ykeDPGwsLMXuqqmJ6MXNcX5GhJoMTBvDvnxdv4P1X85XN63VSL6JKNqKL31Q6WmBEahgmk7L9y8CJ",
  "key4": "3q8wHzcQ5kHURANdxff5VMpngaMn9UkQ43i8Vc7LRBgTs3JsL75qiTLS3zScHKXxD7oL7tYKBLBZZ6Jfwa6cLt1g",
  "key5": "4bS4KKmaoy7RkZWaZSgFqMydpkwRTcWXv15oW3ufeWb2Zsd32b37vgjRvWRdst1UdHLiHpSPSehHaHgCKdTvKpXD",
  "key6": "yDJ1RBGRNeSEYrBTigvmrYromjN5D4SQUFjyHC1w23wCpLBp28yBEuqM73uSTzMf7oDRhz4LYyTSBYcTEAkfViB",
  "key7": "3NyrhLKkXDseqKzmrhP9nSC8WCND19Ja5MyFDX1YpNZSGBkBNbM8WHtqCpqJVT4rb7rHzzDqNzsYzzwQ6qbzX2dT",
  "key8": "56xv6h5CrN9hZyfKHZVRRigqmyjfAD7LkwrPBMENuq5vG3bYwdJUFA3LcTNTZ5dHU1iq8fRryasT47FXjCk6VVRJ",
  "key9": "4fmyCz1PzSL6QDauJ3wTdJw6cTfB6tVFdTP8tssZgmkmMUymeigyExArNbuqNtxbsg4DwgrJ6xYvFTRj1GU575uW",
  "key10": "4kFEtjkV7fxNE7jT57iPnhuyaZJosfABU8zP48Mrgiq6u7364NrcFFwH7MPeHfFLa1R6DLwVy4LFGYqQwS1uCgRS",
  "key11": "3nLMLiB4xS4LKdaJPBTpfYgL5SyjVSAF9k6YLvW6RQnCURDmHL3nUBp9HcrUJjZbq8LHfiwfTbZnoWKL1wviZ8iN",
  "key12": "3LAhzXTCbYw7XwKTWVp2fM4yXAc4GrwHBeJxVEnauLvg6PYUspaNVDZSZMcvbZtyqdXg7E5A7kR4fVjHVdmX1aPQ",
  "key13": "5HoRtKdgxd9V1ASusBwZaxVHwZYkFNhJMD7Hh7T1y4XG4p85N3dbF9ieUNu95Nr6BQNkR9DVSQ8T3oTo38jo1JKk",
  "key14": "4Wtsp9kzsFNWKEQ5sVe7RRGNx5kEKhqTucFpmgCGVTZFSx72F4jRYTLDcoZrMign9bNdLFgSKNJiFRM1nY8Hacfr",
  "key15": "5pv8qERQwsedPj7n8pzhH85LmXyrbZwzPCsdcJRWPjURazKa5RNG2fnza11FVZff1PV9SH2xrprnjYXUbR5vnwpP",
  "key16": "2GK9RV6hr56GFmAVAfGvoYvLKFgqaJqZus6fXkDwhQDXAavdBgruXnX1zt6QuidmWjVH5JbzkKKz4BxbegVuZoUK",
  "key17": "Ya7CKMv2LGJSt6AC4KRupL9GvcugP9F9wNmQNufRqL6RBq6nxFWcHMEiAY3M7pbbfpjBXVepMhGeRiosKFP38fn",
  "key18": "41A9UzjizhsxG6i1FX43scwoZPiPE3MDfGNayfAk11RAuFv9rtqcKh8CYi3s4dC3aELpaj62L8qzdxMLPxCbDuA8",
  "key19": "5MdkvxgRmAZYCsFLs34zd4dTW3JSdmTwnYaXorgprEuknFnGER6EPZMYhLHdkQYwLFvR9z3Wb2VCw7mTGyX5K3GN",
  "key20": "4PSPQjkvdw68so8dV3K4foLqXXMWQPCts8wrMf3XTwcCbjsbPHQ4mFjbR7LgCeWguaUuEtaEpw6SnQ3t6qCDYR1R",
  "key21": "61gcefqyUwqr67bFT2nk8VSVyw1huhcVJZ48xCbtcCAdtSDiB1sNuvxYEzMQ2PQt9czFEQHrFSNZsTMdPKwUn2Aq",
  "key22": "3bVTcdmX21aBNAzW5fxD7FNrCsaDrD6pws4vc96KhNycqEASoCPxGwDtpzKBKoGGqckiziEpRUJ1aKCf5xCVoaSQ",
  "key23": "5rsoBK339DNgzcovU7Xqyd9HSCiq3wBzs3W25LmLKxhJBCaowdfAzrMUk2kRn6q87YCH7wJoumhX8gzCem9X2hKS",
  "key24": "5LshZEEVKuUV4k3nD2kGZDhoX8M5kwCPAHkyhzkEaPd6YPrQoBDhcvyWqUTz8H8UVHwToWqSQ9nvLxuqfaYpYfg9",
  "key25": "2MBB4KJaz88DeHvXS7axAdHcMWZTZZE2juZMSjanW2VVMv6sMxg4y4RHqahHvTpdLzXGPxHDLCMactGKLAqgJyjU"
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
