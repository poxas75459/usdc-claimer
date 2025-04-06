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
    "32xV2Dpin5rc5erqH5pSPh2Lxz8xkiYjmFzvPHamf7J6u7aguhYiZpWfGqi4MDMqzUDh2w5AGmLD1Ys94LZXFwMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXFRwrV7EkigSjZ7BoojvhKU9hoVf4hYfc5h881ccCAXcihfYcE3sHkVGKf2mptiMCvz5VoiJ75BcxavkpQW5Qn",
  "key1": "39pBv1YDLM9VYB4h5pwNyA4APpMsVgrs31FJVUcsWcNxSWyDjXQzXRTKe25mhW1LGkju1GcjKjxV6Z5K4NbFG8Qc",
  "key2": "SSzc59xbeUW4e1FVry78HV7weupee2QcaRvNi9MLXuTzBuVus45s9YVx9jSkmAnF9GVbjMy8rHrzv8yvxZy4T76",
  "key3": "WtgZ8k7oUqKeom9yb57hTUtS4q8Sh4iqf1hRqCcnSiXHoe9hmzYsuQJB4RPw4q1TKJjULtCzpuEacF7rmrysZnp",
  "key4": "64RdfM2fVfXfnFSFoj3dNXNg8cLBvE9dKCdsCY6YfHsLBn12Fd2mxM3igGfzrGR28HqL1CKTXT9cyQ44oZsWGqJP",
  "key5": "2dUPEAkKBz2jdHqRjDJc9g3DDXhZyo38GyHYeNYxqAnqRuA88ehkpgvTvvdje4Epuue1GgmEXr1v6aWxocAdXknC",
  "key6": "2sEXrfuhPYQ95DP3Zn3gdAV4w8jmQXfomgis9S5znLsNHeT4GPu8m5Hst79PNk7DYAfpMvGx9GZaC6fTVMpPK14K",
  "key7": "4DMCv7k5gcv1PqWW6hsf5GK7kaiTmEScUft4c4c8FktDcHyaUgTjjTAKDrm5KyRxrfdTKFvM86PZ83akoXd3epdz",
  "key8": "3VYxNmhes1PnPGbs16dNdkhkaqid1krzKbp5u9yT6VaZFBeMWHZRWg1M8cHX5d13X6d3wTuwcjzNnabDgA2Kd6Mo",
  "key9": "ShfXbzg9My4rpBdCe28B12vUcNj5wijk6CPh6hqryUX846nN8og7EDGZCGbrBndCL1MTmgGEohme2o1L6ASRT8k",
  "key10": "5HAxkZEBDof4YbZwPqgczV4r6PjcGuux88gNVdrHi9yvLVR8R4n62QA6qtBCzLp8Gb1cD1y6acSrvb2wJ89YZnnt",
  "key11": "4aTqrJjofjVY4dqsmADNrZuNftRZfQKLxdSsVypjAv8rvZUixvVtnDmGt2KZtZrME4Z6nmAamECWSUMcSi4QRwgF",
  "key12": "3UwsbksxBBfraXEwH8ZZ5KGL8MBALYAmhjAJUkx1ckjoZSHNFgEhL8ymKSxmaGf9m8B2mVvw2dvEARvR4DuXWNV4",
  "key13": "2jJitNPugt6J3rWfja1AvF2r6YU1LpNDpaRz8HTaPRRDBRxKAS4fZZdPjrauFrmUnopcMUEA84MaV4hzik2Y8v8T",
  "key14": "2YciwJyNPJLV42pUJnKKYeVf5aMNC6xiBhahKUVNY2QuWnqCxR9n55pEJkcHyQyauf7AUW3nrMmNtVLsn1xM844t",
  "key15": "kk7ZeTsV2xzPxiUttYXuNAz9s57uEnziMRsGDiWZmk8D6qKyYWJh3fiKEy8atemyu7c3Yogr2mRJw5HCVqWVB9F",
  "key16": "36qJ26VZnYNdZgjv67f4cTK1w4tvxxrTcrSGBXLtLpeGWauKwbTckHuECPPnVGKhsKNLJk1ScWGPVWoST5wRQSiq",
  "key17": "5uAvNtLw5bRLX6zT7z7tC4od4JGVFZf2J8te62Fr5EBFSJWo2G2WifStaAxWfg4VVJsmgBo1fSy8sUQHXk25m6t2",
  "key18": "4gyeLa6BvzWj3GRUBHtLP5gc3LTVsjefZWvYwoaRE46dRvBB63cBdcSWEAxSdUZu3NaqjTshKY47tzhtJX3jh9DE",
  "key19": "3LQmzhmF5G1T6PnP6crPympF6J8CKDQwztqiTxvuytKpqnLVgz3xC4kSyZutjad3c5pyWZCPnFu1P2v7GwawzzjM",
  "key20": "37e19onUuXo9FmaNKAXkSPt9qCug1FaXtckKn8ybxZtkdGatnUugZ5mcfaUB7R2v4zE85Xwjs9CynkaBya2crzz1",
  "key21": "2WosWAykgACL8w8HfUDhuHwrvZjXqRvVBrXFH7BQEqWLJhJSsPTT1QFs8N3m7vAAwGPrR9Bz8jMiWnadPaNnRjei",
  "key22": "3Q9GS5h77dKhxy3FGEzfPDwRptsQuV2pzSF3z2p6A8UtDgeLKg3kpz1huQe3cafGj9QSue3xyUScbeZ7MPmrucXw",
  "key23": "5fH3XKBYQyftKVKTqkxeYvGCsea8sVXQEQo9bDSZGjhpKnMNLd4hEWgM8MpBcSxX9gwhubdpgD7GTSePcnTKbLQX",
  "key24": "4r65MGPoiDs3bJcNfRhCTAvFKpcP2zvkujPUzgQWPi4eMJiL1oMwXtZvkHUaSnESedxLR9V4QoZPZZ1yPPvLrCXH",
  "key25": "ZUZgpvVcN2RbLqKEt4UNdiyLQjXHhFHch2amQHoYshXjxLLJznosLmBHmdL6qJwGD5eQotnM74M9GoMGKu22aBf",
  "key26": "2dDnqGFdsLtiyk7RFzMSN39nGApiaibg9Ek4e1zM4EwKbRnpPN9bobZs9LyMVksRMarRtYkVYfzNKaCtZJebhZaM",
  "key27": "5hjn95apQosukWsqgJq7oF9494s6yAUsV4qf7SNX1UTyuD2EFejErABvHP3dyD8WDpWggb6jx5b2eg6k7NufzWB3",
  "key28": "5ccygz6whTHDWXGJaSP8DcT5dnVt454Cq1Xyb4mbXEbjwzLJyz9yufw8Lcx5eo1SJEav64koErUs56Zvr66ex8Yt",
  "key29": "35RDakbjLKLGwV1FUbXepcdnJGAyBnvdpubbmcSuK1BcNYdu8x91BNUWCHPhxMzD69u43r47X4w3KB5fce6VWPzX",
  "key30": "5yoMae1aoGdAiVHau8ZF4iMgwsVXZAFcA5YE6SUXHMwMR6F2bN5CAqyYna3PD7XNNEPMwdT2dSLMhaLnfvEcFnJQ",
  "key31": "5JhHQR8ezqnYo96oGMBBPq1S3FWKo2twqDDEygp9yiZ72SDjgNa3vRz54NfUTyeRXhJpNcbCxVkaGtk32PMd7fit",
  "key32": "4ci6rrRy4rVuJkK57jRnSiEsEA5dn4LxkWsMtXUKaP8x9HrDBbofprXz35qYMFrbMmeDNokqxnD5GokhHPTRhj5z",
  "key33": "5KHaZNtVf6Fe5Xk9RLxpkB7orbkf11JitUqLBwwzGzvwfnvwPtghRWXFwK3PZjR2WcAFUDi9hKw6kjpqjc4Ru3Jq",
  "key34": "4wydRccKftoHzksSyHxfTdNaQyBsngWf893q9HBf57LLCZvBonvXWva9jxBGh1yE9gJc2UmzUXK8qaNajbDPtEhE",
  "key35": "3JT82HQxMhGK4J7Y74t4knMcDQxJFmAUv4bXewxUPoswp1rXHN2usKMpCZrCsfMjmBWfn5PagKFN4y1wm14WgkQB",
  "key36": "3JdP9mpxD6GdzTYc5tabUag2rurnhcGQy4PbN7e3etSxXYXMefTvuahSVw53ZBu7mPrLp1PAf4VYPs1YTeyfMbTE"
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
