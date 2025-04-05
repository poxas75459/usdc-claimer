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
    "URSwfv45GbKMxqDMnUnogQdWLQ6savjo32GcB97uT5GjCAnGCrT6rb6BX76WKCxipC9jDN1BQ6k6aqA8aGH5J7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zx2YPd3rpEjnpa8kQFmYTLRBamxaPb6tavjSHyQgDcexDE8prfK9gftWFRHMzu9EDb2zvwUVNMUda5RQoStUr1A",
  "key1": "53xrVxdbAjL2SWouXNC7MPX5rMgywDNFAP9TE8YfazUcvVNvu7HKwXvmJi7CfUahgj38VJKpXCAyUVN1TfHpsEPT",
  "key2": "2agh84qkhyjRYfWjGYnPTko8EurbfaGA4Ph8o95H6oe5oCeRR87LncwngznX5QnijFSHjLhW4XrSGr89E1p4REdZ",
  "key3": "Jc8WDACcyai4D1SDo7ytShRuJDmSqU1uXza4rRinPwzzAyBqrT21UX8Hng9Gijr7ekoMCz1mmkt1PAqTrBU6575",
  "key4": "3C3uRQtxFeoQocuKUSPhuCkdotjiy3WddDg9JoAuUjzHjWiN7vvEYDnJNGn87RzTvh4UbbQFQMFPN2EmYRq7iNkZ",
  "key5": "4i3iwWnBYqVmjM6FeBmukuQtqPH5vtYHaRtqZzqcBYfqqnHabxEBHhvZwtAaHP9ELiF4mXyLzy6ZRR1dV7YkLNZm",
  "key6": "4t5ReE7BzeVfWocpsbD329Ns2DbAZD36k1nBRdT2CMLjtvdYhoW9zer2CJK4fJ2RVN4mhWFZqnXtQ978nyR5iBrp",
  "key7": "3wyPpPLe5uH2jm4kzyRL4ux9yJaJGgb7ek6KSF7y1tyADk4jTjcXaUCWdLTwPd1D4MHik1ZgBEKHwaLGP8bP9rtL",
  "key8": "596dfP38gGY5Dz4PF2654Mbnkgv4fLEcMHoVTY52mqSpa7XqDbHkUhXs92J64LZYFHBpmhH2WLTLJ8MTTEBsXayD",
  "key9": "54GLXJ8FAQcx3Jd4nFNEy4uyQjvjakTrXJiddnmvExTwUir59eQKQTQDse2Uvxq5nr9FGmUbdxpXSZ6m1oVzXzQZ",
  "key10": "2aXuBcicdsCNW717FeBgH4gcKqr9aLPETE5VY1SGsqkQUWHrhGLJhuUNjYkCQipEAd22fu8q6SkhLdLyLH7E5hrF",
  "key11": "5S2C4bZ6M9EaDQFmpTkSYTawkfUo4qcpR9u4WKcUUPVyyzVYK8r1T1WvvrnbRJR4iBHTv5ooXexiUkTHXZUMwPFk",
  "key12": "taiD1fLyqNbCswKhEQ2G1ays7wfhphaY1HAG1J8T46KemqogCNFtLHAjn9Ci5Whr77CRBaZPeJHcLCoYy6c7DbM",
  "key13": "5vEGHQpYqtysYF3TPyaL9GePYTzmtW4jd8o3MRjhEVUMrirYKKonUKcUvoEMTJEqGFgMsEjz5t56gRm2TECS9CQ4",
  "key14": "36CpuEahPuNgAbBPNdfzz9DcQAMfgvj6niMNNAwC7w4vrCPPzobxjSWu6i1xg8GD7fKSiLkhgSLpzDBD94C4bzcu",
  "key15": "61JtF1vtasZrK2R17QV4UMsBirp3WnCm8BiDAHmrKmh1xJrZwWLc25QPxTWn3pxD4qLVNdyjG4nGExUtXLPEZpe4",
  "key16": "4CZFifjixs1WLWdWzzHzDzi5ps1LMi4ZpU9fhTgxyiaxTmdLscrPi8pTm9kwYgqRkZRkWFcwnWvuE2af1jeMzJNJ",
  "key17": "55Fp5wB7aYLesMhrGSmoQyzsmCPHyZGXqZfkbV3y2SkNhRkCp9JVGhXVx49VAZ5RG5DnzZS4UZoUD176AtHjVcxg",
  "key18": "iM2K1VwEU2KvkzXSoqtwztU43wFHTPc2VydjSctqdRdk5rELPTZsD3o1KKj9PJ1C1vy1N1H26KsfSarvgz8K8CQ",
  "key19": "3HBgLikzBvPCdSMdX5T2dUYrwSF3Yjz22P4XbKBkcZ1XuSrNRRVeeNvwunSsAE71JdXEfgfFhqtAyFNyP4LLxrMM",
  "key20": "2UFnXdH6FDFprPnYby5byht4EMmApCAvnUMjogdnSkZ8zEKK3eWJZgSEL1At6bar8TL2u9S8u5M49MsGi4RTNwFH",
  "key21": "22sLD3ggSStj4ayjHtbXrMbJ1E5mJBeGyhiWHmTu29mKXMHk8Jz8QBkJFPexjQZ7XLE3FPREGKaDxTnmJAX3qFiD",
  "key22": "72FfxHXmYNqmPoo1VFD9Ji7MoLRU5MsANWfPkC6rRFsbTwReRu4hyDCd3c3djPE7vxqVkcRNPBhnMBDVH5cANeK",
  "key23": "2rbxvoUS6i3bVbnRtpcjxP2icgxucp9zv48m5P5DuJtXzj4E2smzpqzCiHvAs2BsfyUUu3bBn9QgVHEGuCxebCce",
  "key24": "2nmi57i84EFUzyBhaMpgEMYZDPW1qGJmksB1eMgJTpPhAfEJrDTiUZBnTGXDnNJxgpdvGt4p2Sqp8AAceJTSCzmq",
  "key25": "5gu5xdV6RqNjFFagVkBUpTS9JV3rZztA1evpiMTpB59hGWWm5XJBUWv39Hix6tDd8N4pe6hyzxmSDQmZ1j38HKQx",
  "key26": "Bqs3589cvumRnA6LyeTb7C3g7qBPXdv4A8W5NLwS5LKEqZYQsAU3K3xr1aNiRcWfwuTHNEHX49Vdk4zvCxZhnb3"
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
