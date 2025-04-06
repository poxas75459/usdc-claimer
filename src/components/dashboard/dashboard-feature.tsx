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
    "45hRTTERyJ8MyDZEdgX3dHbv6Fkwj5M3v2mS9aPUZk2syCo499TYpnvBmrtq7197k4ffdnfJLtqbEQypZJ7Jpuch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCV8DL16ZAUQWQay8GRUjSU1ZL5atT7NpDUKBuoHMMNkxMEAKW9DT3YiHQZZD1BjGCVRuJK1Xv5P9uQpP9uvPqU",
  "key1": "y2SFHk6ZfY42WGsghy4z7n4E93wPjUnFEBU4Xhp7617Gig1WdHCHWK3VdEVVZsSFNAzduBBByiWMMjcha9D3759",
  "key2": "4wP8vc6bwoAganfh5dn11ysWQ8J2egsFC91WX8bB4swi1HPmxWris35xDai85XeJX9Mqw362dJyg3DufoC2CpPxR",
  "key3": "27cWQGVbPRAzeLQ9g3K58dcCqMuwNNGVAST3quvm9p8vMNKVbmbtQ88Xx6Tmkui92kQDuUL3eYnRHawKz3naF5MJ",
  "key4": "33P2212Y9BWNk1fy2sDkEJZjjWYYwetagYF156TUrcoY3hiksCqiWBV92W4zKqGtXkkBpH6N1NWoBYrYR922qbsh",
  "key5": "3JgTGQx2juZjNKFbF1PWRQyw8Zcy2b9p8BgfjGmfcdvvUAvnA3UDtEYKtrxTQ3TE9Zm947pTYmQme1B7H4u3diq8",
  "key6": "5gymn1bvJue8CENYE8694s1wbwhRSyRZPf5azV2AnsXyDuuJJSCjqKp2Pnvf9J6dFwxYGmBFxYhJBWHqWaWieviA",
  "key7": "2viLW7H3wvurFo82CKwf4sNGCXFU1m4HEbK37PkFt2EgFugdmTjzri7rSo9MRTRy2aJgkgTgkeMbmyqpegvtpPDB",
  "key8": "539T4RLpba3Fy8DVGonzP8pawaN2kac5kNZLXxXYyZjEcNdJzND9F6bQYnJ16MhsRwUFEV5regqGmCwQQ2Wrx1Bg",
  "key9": "Joocg6jDY4HQe8ekkhqHtLQrCbpjqaquGGJ9RjsJYNpp22E1F2tR8K4MFreDwRufC2d4oE6joy4s3u4mWURuisL",
  "key10": "4uYY7p4QC7yP23Pe5MBq53BAnSSrCYB9KJC9SsfpBwSV7WgrvXRLJED9uA2pD4MTL7ZAbCcskdxGGTaDLzqMddAY",
  "key11": "2yg1vURWBksasTuomEVWzsaBCtYTFtBcXgfmpDMpsSg2vg1wz31NrTSd2HNhqrjYFMxXos14cWXMiu1t4YoiUYDM",
  "key12": "6P2LcxJynAPcFqp38nizBwa9pxRp2UpExXyDzyJBzMM28J5xmQnCpeaHKQ2nvFkkubJE34h1HSwjDCjdBo5FfMh",
  "key13": "5Y8tQLbUYDc24W4wiwDRWY6xbesEr8tmkBULcBsMNS5NzASHpFgmNX7TTtEKPkWJq99M2zBn3Rvy2y9352vtKyQK",
  "key14": "3ETNzHusEPmBAkTo6JhG8LxJS5iTFxCKTPKNCXeTRCjbtRcxYsy9FijsLFMzkAkSpdL8nC6bD2tMkmzAZ3s9cYw7",
  "key15": "2z4afcrPP2qir8CRUZH1pSNDXxxKSJwcCA1HSL6GoxVHqZgzEsnpzwNmszHioPjkUWbjcYKkZNupJDR3x3hgcjyF",
  "key16": "4a77jmcioFqvSkAcS79xJoNaQRKpiKbMhomjAKGkHt8TLDBX3ZEgm4mv4gvPUX8N4uFsenghPwAD3rEuMJoix9Uv",
  "key17": "3qbRMZU4iSqo8tf1bRwrmL8hFxYNS9aTq6WwKL9kBSrPnggUQM4c7LUSwrHBc91ji6dgpyDoiT7T2Dupmd2H8Arf",
  "key18": "2VmuzRsVBAWrhC8GwD612nXQiDSusXp78EfNWjVihpnWHh1QVYc8avUzHT9Ax1ZRwuBiPo1cCux8aHjCh6EDgXpJ",
  "key19": "2BFPaNUdLkg9n27sdWzrQG9AcBpZjjDy9hMEfmnubzRrScMvDnxZtcwry6E2CpJgt422DLycVmrnL9Ja9oG7o7bm",
  "key20": "5zGWQZQwcPECyeqL23XLKDBjgy1FAxyYpKTZf6koiwSiTZaa6EBAFpQvJ2LAEZav6m5K6JB1xCrfcG1eso3ixeZS",
  "key21": "3k29g2VeK2CeuY2dr2LB6e8RpKqpM3w6FJhEyFRTyxgZcEU2f5AVGxe6PeUuZRZJLxR2ygeEhB8gxRkWfM8eSTHV",
  "key22": "2ESERGbpMXFVm7YFUQvVRVjGGmmuXiqHmeQ4eKyYrHUBUYTBobAyAcWgzaddskEW6RJ4PFVmmyeUpj2YyXLSgK3Z",
  "key23": "4k8guai8hbWfC7jqSBeKUBRH6hiiCB8jBMzSSmdjuPFKSjjhP97m7ocL4ba57NvH7omeir2if1DABFr5YzTnxdXR",
  "key24": "MwVDvTpjsqx68XTLfJhaS1FosNGXBVZ6B1oqTsYJ21vxbJz5L1N8RaRY847wKWqFcw7sPEuh51ik3E3Ze9nbgJr",
  "key25": "5q9SxJRR1ZbsNqVqca6C1WedkyWQHLnSXcMn96ontAgX1SESFdcWoEnbTuDPLWA5SqhyiLXVfPNK6ZmCFXm9X4Yc",
  "key26": "gTxG4HhPuZDhgU9S1bVXPHkDb1KAqAVCnqzc5Ro1R8j1LzFSs6TREd1j4XPuXzaDY6UPbprvbaqvdNqhEeyf17v",
  "key27": "45WheSP4bVHPjh14LZ6HJAcAR4xAeiKCRPmUidUZzWc9WgvkTPdAssCDwpf8nS4KM2ve51tEcxb4gsxTe5sLdugH",
  "key28": "3BoVwQvb35Ng7ZATToMHCf2tSXQDB2pmzq3r4GWCgBN7HhYaDnmSenpNp6KyfRP7YzhihYpFZxqykBFidBX5vSPV",
  "key29": "3MKYQW9HAGoXYdQ5K3BJyFFvp9RskSPPJ5VqsETdFpPwpGJixyDbU1sG3tS42XUs6nUPzEoxoPxLagkCxkR8d87y",
  "key30": "4vuDJ76Gjaf9s64Uqh6tGHdFgKCwbPzSEuLnPr8V1VzNEvdMqRRVTXrFniKa4gFxyjKiaqPr7Jr89XkB5jjLLZku",
  "key31": "3q2nEVE9DGvheS8dmBBKmXdAGSGigKtMx6TK7An4zUi1wEFR1Wvi116b6DBPXjZ4VMsyQoVBzVh8BHXso1643mqi"
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
