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
    "3xYYfUHZZoMBFKD35A7iyshnJz1wPUEvRyoJMzJVWTQg437pT2BQP14GoEVuPzuDFX6DNis9d5gmRT3Tc55kMjKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Co7UHnA2kDASAaVi2hcQ1X3DmfDUKY95RcjxNea6Wkct3wM1abjU3WBAocPo52Zw9HvX5GFzaFZPVjxVa9kHCPS",
  "key1": "2BTppncAzZprMfyJhf4syq5pnbJTWDRzG18zdjoR5n5Vms6YYCvTesANHnsGwBGC3gySWiUr2sHrKt5kiSubKoEK",
  "key2": "4Hdomw9BYvyhSpDYTNM4mb3MhkgEsjXhXtmbtQHwccpJuZE9DxyTSRBcHKqDTmTJhXxyAeAipy272Th67HKKUfQA",
  "key3": "3RVvRvmBvNVesRh9j4K2KFZCPfcUSdJMDQ4hef5Bzg9ssZBYRLpPFZa9o8pZZsQz5JxH3RRDL3F5pUxrXcPCUfYS",
  "key4": "2x17ehrLDTwmLSdefP3eLhFTTEFTXXiZMRnqytkoCWTZxUSTSfDK4Pkg5v1sb6V8bFYxzRirynT2uPnEeZHo3Frr",
  "key5": "5bPPAf2vh15UgVWbauE1sWqrfWQDd2mafwVrrtZ1c57QCoH4MAnRL4Fc4wp2WmbT3iBgrcMa5Cqmqhpj2dVTd4ah",
  "key6": "3A6a6pXKQ1K8gxJyHaRLUF9AV1c1bAXTgS6r9XPKpnLhUTotBsqcUTbSZqTuBYVUrbfQ2PEAqaUVajAyk4nJpFHQ",
  "key7": "2cc6D3AcAk7bbajQJVgnhmKtUitvsmvyMxzxxCaJHDukRuTSZTQTKWHnmCmrQNrma284GGUxCjS7P9nPkanMWJsN",
  "key8": "3eoqbJhjvg8jX87pqSnxDF69bD8T8R3RZCsFfN8rzuDRkfiDd5PWLbg4MeZ9sDpWPj68wMVmZWavTUGRLgUDze7g",
  "key9": "zY6ef2DAmW3krcq3z2FbjfVpMkCvYDPLpRop93inmPHvYG26VXNLpbEej9qiBiw6hjx7nG2D8swjA4Ds9RRszhE",
  "key10": "5KL9e3L417GqhcsNKoZZVXFUzotk1bBE7FYKEFVez1x6wvbUa4PyD1GqtK33KBq6RY4tpQq4fwgQkGSwzUHoFJ4p",
  "key11": "E7ipJKWmEUMCGpNwu6Y3LZeEec8vuPSJxq2s5cWWtJU22F6XLMTTU8L2mxoKSHCu1AkFKJSJJCJiBa6AKjrkjZn",
  "key12": "322gkRC8USPUuiroXfpwgojo9Ann6ncW51R4vkpDCrZ5KRS5L1xFkV8CjZnRTUwdSFky2CpeiKjyU2Nr7CtMTnZk",
  "key13": "3U6HpxF61KdWGt9dTyZS5KjeXt18LZPiwfqXWGcZ9o5QvEpjx7qBuASWhVQcfhkqdV52yC3D2JYEgW9YZoUV6Qy1",
  "key14": "kZmM87Ewd1sQAZ5dpRZ9HRiB1z4MXek1kGoRNHoDkQbS3nDwjqHEswtNj2PeHTbRgu8YVcepUSFLAghtBwLg8TL",
  "key15": "2tGLN9i9C5yZz5rnSxgvZoijkQE9SQVgSz2X8ViEgYbtaoDG49Z8oXjSqrgYXCWn9PfgFKC7kQ1sQUt4a9y6VXKA",
  "key16": "3QofHNUwTZbHSi3d5ushF8euPfkZL217tcuKRjaPHwq4EqPq9TvNjv4MpYnmuyPMqTNE4yph9m62KBhbe8Dc2gzU",
  "key17": "rfumFJ92qGjQWrgs4v1yp4BW2wtN3JsG2jcWctXNJFEam68BPX3TURuFC8HdFGUqkgsuesF8KuTDjz63k9BxjJ6",
  "key18": "3DMdt7kaoQ4wkgL9qA2QiZ5JpuxdZjxN6FM6NtfPKn3H4Q8DKvgTC4dVsPPW9KHjd8QG95u2PTFeGtQggY2EceZu",
  "key19": "4Scqppc8kQhZ6k5Ycxc48T4d77rnSWZwcCZkFPWAFF2UzRPvwyZTkzc9KGBhfmbQ7JMMJkcZWw3U8HegJDyEg8F3",
  "key20": "4nxDVQkPiuGW3MGs4xxNDNXSw8ikK8HwzqAC8U7nH9g6AE5qkKW1UyMiUtTrf3KRt727ffKrCrFm2QjmEReTpRkL",
  "key21": "5RbG5G237rKcNDPhM3Ptbsi9PMh99VwVZgqiSBqBjU7n7dD8o4jdtH9dQivzkVwYfKSR93M5rvCnbiUAcifAWXJ4",
  "key22": "aiNbm4RwXH4ADiDoz88XcpvnEAzBWfpoCqw1Z5Rr4DTVzRQajyY4UYsc3s3vNKrX4UdxrtjKfVEoaeA8C4iYjCL",
  "key23": "3L4JCu6K4HXarwTApTF7fqGR34xj3rabS18bmfsmQpSQbKjDRFzeLexze3VVpWrEfCTXucL3A9ZAWaC1xc3QKand",
  "key24": "4cN36PtDXDVx8BNwSVWjqWtYgZ4Zg3bMarquui7ohpeqSJB8sJ9MJdM6xGsyDR2oKDHf8GRo8eC3jiXs8GcqCtvu",
  "key25": "4NvJXuuqYfZQgCG7G1tDaoSds6FzwUwMQcuSHDcN6jz7HAQqygmSp3RWhAUGyy31zoCT1HLCMbQbbPy44aQjFVFz",
  "key26": "5YGtr14bdDDJRFp5hKq5T3CZCLkTVK1FRhYXuB1YXGr4dFhLE1EBDaBXcUExxxUtrApwKVLSEBZrvmhQfmYuKEXy"
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
