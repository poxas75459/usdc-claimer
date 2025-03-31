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
    "5fmr7cNVuWxXDjv2w7ZNMw8UV6p2Srk9sM2vLRkuX2Q6JuDmaotcn1uPN1eNvJcmnQ4Cx8V7m9aNP2CGsVMCZTM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yjtgMiANFjU5UDKqKDWFXiALcKF1SZXNuyeRoEjCrAgkcRxpM3DkmgRAJsGBYEdqi2xVaXDncNw7dcaRkLvvyn5",
  "key1": "42NqbtZDrmSm2YnovruB4f3uLk4LqU78S4Hj24sTNWYJv8C9HHtwY6HusUoKPwmX7bYo4g42uBWK1kk643ykaQET",
  "key2": "UH2Kk8E9wPH7y8HdNcD7Ny6kah4vxLPoQwFdurAQiMhrnwHNH1KgfgzhmgzCgGaRLZ2zVujfp5QjWPvnYLZVStk",
  "key3": "4Mz74NHdvJsdbrt22fjUDZHfyL42ugMu3xmjoqPHDgRVwjUMsVpN85o8k6yNXCnHHgGUBBgkTFH2x7bx3AfAv56s",
  "key4": "5eFZXd4xeZDTqyW1VRHFSPkF3v4nkykHJHdiGqZhJtAjPk1bHDxxymTr48bEAb3X3164nARMfoirnxHKW2phQome",
  "key5": "oZ6ofCcM55PiqYhNsvds49oeZQeqZC6Up1H5n9tVizVr7YtmfyAH7Lv2bHWE5SvtwPr8tZktqVpPZUC6JJ5FfSn",
  "key6": "48P9PcG9p1wDKqR8q1D7T5RKBEBNMDMW6Ug1nE4BHYgVgYmSCCTKQ7qGhGLhxL7BvCC9iYHoMcjxkZSL8Ryq3ycX",
  "key7": "3HoBmZW77TcVDi6WMteU8e8DbB2mkPtKptx8azmkU7zKRjsRjhTM6noqWFF7mZ9aUa594i5jNtBuq2XEmX3cfFfX",
  "key8": "3wEwPg6NJF7Zykj3gPhwZAtyUHLm8kcv9z5QdfVsqM8sjq9DZwbenKcnJPNwZeQZn2Ge8arXNPVegBKvX8qwr9qu",
  "key9": "292RE6m5U5mBNAL5omB6JmevBqVbH6HSfy6ZGiAw17J47JVwFpqkNrzr3jbX3ZosCWHDzf916mMc5Fctyz1LeJw5",
  "key10": "3UHog3U4enJdV1wmCe4ch8KaET8fKYeMkzyGLhi6fxMRs4T12eiqg814jshrpSLAjBRKSzqurvaQ9SrbYdPLyaFP",
  "key11": "5LauU1a415YijGrc5XQ3Axi3JFQ1gzhW72xQ94jrmi1nxSzKix5RXvuvoQngxK4dskRVWqU7hQgcCNtbBKyCsGBS",
  "key12": "4293VVqcP38aPHN8GargBjpVj1k7p5Mh5M9HTEnm87FJ2MVQhvybo4iREfSNjrYW5figBv7zr5gBhZpEFC75GvVi",
  "key13": "2CrU3gyZj65Fc4JK3c6mJtVuZywHeLNAxJX1go6XNwnyEXUh2VJ5n7xzehWsCtsecvFMuLnVpvxANYSELh8htofc",
  "key14": "2CKLt5543AHkVqTMXVuELcwB1bDc85y9y26woXEDTyMUhYj96EZDU8oY3xKJTuLdRrt6zU8jA1mPEKBw2t8eorea",
  "key15": "2uHtBFTt4BG7Q4NG8gHq59V6t7mJbdvR3ZCu72iQvaetrfyWMofqW7qFqja5yt5KzjbXxnR19Fh3Lf9nqe2gyjm",
  "key16": "AtVPVbYnnqxogeydx1UYYr5VgmRMM62rN7SHccYqDqWxgrcQGvW9msuZVTwKAtHyRZq9f6VkGFcJW5VtqeWRNAH",
  "key17": "23uqVtVHyscBEa1SPXf9T5sQoQZqvnfsB7R5Af2zoZbc9ZdWjMz6zMe4faEqZ3ADyhj3w9H6AMNeHiR5qJ2WbDiW",
  "key18": "2ktMUiL1FJs5ahkLe1iur2sJsJ3btWFXzR3Q5uKM8wsDAV2rnCuE7LA9wC8KPxnmzntHa8X2NwC73MTSMk3yCxnY",
  "key19": "4eZ9kpDomhQQgTsz4ybBaUmqBmXCQ2LWtZiuXDja3qXDvDWCb9CJdj3oHzeQy1pj5mGdaRGdVMcWJrHC4kyLSuyR",
  "key20": "39jZtwr9iGkubaN9dxLe6yN5YwKf5AV88Kdvue9pAtMuygGYPksVdPXueGBPC6p2UHz7fpebgb2iZJoaFraqz3L7",
  "key21": "3doQfPy7EVoXLJBF7Hj5dt2JhDUuMG4ycteiYexjksAYyDNfyJ54Uaru49MdrqJo4cSpBeBN58eummiPSvXnjo4U",
  "key22": "21jm2Zo52qYrxNMJhBFticxinxhH5nyncx86qQzNNPzpNANpLQXbkdxWyJTCJCadeUWY9u9ncQFBYTtnY6p2Ciqv",
  "key23": "2Ao4Asi1ahB32kYPUt9Ua4a1kSWfmVEfio6S2W2PAWkfZSofqbtPEgCBEKTyBoW9hQRu6zsFyoMp5RjGqMGth4wm",
  "key24": "48AhKdnXgRHLuC2QC884XYda42QLwB3TFZK3XEMS1wDNbdPjseYgtq3vH5DXe6CpvfPuNAMjCGPQ7RfBKDKbSDa9",
  "key25": "4uZbZ4ioWe8LDtvWGW8Sh5fdGWhYKh4T2KVSGrc8hkf4B8r2NmmVH61TDhwGVFNHbjZmUSTRVnBoHK5Rw1vSJ34",
  "key26": "3GAQLwq2QdpTf9rSnNzCaBEARnVxaKwpb6WDuzAaegx5BpbM9qrcZMgSAQQs2UDhUzarTVM3GkxyHXM1RBHAbKtW",
  "key27": "43LTifmSS2eTZSebwqgt3VsRUuP8DYo9KW4cWd8X5XZpBVKpkR44CFPyep2cTH63SFmB2MZt3K8TtFKGt5AcB3BR",
  "key28": "wLKvJ1Penu7ytCjjERLvhg4CiqQXLDYSKy13DRKCQebQPJ88nwdXgwrFoDowS1r1yPKko3otFztfXezW9v7p9Sj",
  "key29": "4y1jdcJBzJGfr3kVjw4n5nnCEpdENtVzLKmm6WAV4hxEgeCJNVtZtXVsZULD94BDH99RTvDSStoBF8X8Sirua1zK",
  "key30": "5D4FJTqHVM7cjEmmtYPvG2o1AKhG7WDUMYm93tzTmNgY3PAQSgYENGwo7HWFN9D3YF8BED5WA1jFrw84U2dvvAPz",
  "key31": "2NB6KUo3BiefLUcBSGXv2MMfzULgQW2VDoM4Q3NYptGWxayiWLsn32EsFnwotNnkNxjQZQf9JptFAN3UVE3aKBDW",
  "key32": "2t8JZagtJqQcGFKPQ6qr6wre8bG26uq9Gj2qP2Lvk6rEMNrTAUuCghwUkyUEutKNRa9fhJVfq3xLg6GyitFefAqX",
  "key33": "25kfvzapax7dQipKkHz1jDos7AHqgRrw41WiNfY9G88PD2DckTnNorYtZ5B2m3w85v3hyKJ4vCgxcxVgwwjFtAXR",
  "key34": "37wtE5qNQaQHG5tfka1MfQHpCavvusMoTgjxF44V9B6jzJzRbvc5KQdyXGH897ub95rHRFCJ7DAy4AhRM1W6MVJp",
  "key35": "3iJrCPkQrtM6TicKArYQnPTQ2tjU9ag6QtjGeXxcM4PFMZ1iyGwcd2QhAL2xPwfAe3E7vKATtTmphaVzFFmrQSWn",
  "key36": "5C8VeZdFNpGAZ6WqYcXvcbZtiz1eLkLybAbhVGjF6GNEvC1txys1pkCP6nzpaydAyj8kaeq1X8DQ8isQud1oz38Q",
  "key37": "4h9EmopGHvBnzmywzBZRhpXYDVjZG8FSrNJjpLSv5mQoY9q7RVeqaSQLeTgkY3yH9ushey6bbb5DRMTREasTTDKP",
  "key38": "2eAQmqHHtR4bky8szr5LhSnpKNcHsd4PF7aYMTvR1EiPLHAwahKS7sr4Z4KfXtduLa5WuF8fw3Wx2qFBDpqdLWiE",
  "key39": "4CpdAEBngP5xXLMzT11844ELKqcJCxmZBf3t1cQoZdQvM8avvR624psW7Wn9DQNPAcwmy3hvviE7zkr2aKchDBFa",
  "key40": "4YekhhrtJfcpDxzmUYHkU558LHDTzy17FfeSJtfnTYAuzRXQg4SbRbdmrgPgV263hFJwUKt2UGfVCi3954MZ2Uio",
  "key41": "397uEXsUcKzGFYiU1qV1HnkX4VfNArhWiK4U1n6JqmnpvJvcNB8bqAWxEDmF7inwqqiy1pxcp5UHi3vSa2PX7gwc",
  "key42": "5dgDtNSNj62sHDokuYhFpW6Lsj65Qoc4baVNVftwcGxcQii5dayXgwt2oVpVGuhyhggWoiQGJUdtZL9p7ozXzgT1",
  "key43": "5nnWkKbxBaLw4NRT5qUnF39yGW7ekyPHHBTDkBZvZQVa5bM2vkNTqJPM4krjJ4hv2zFAhncWA1CabVbD4YsNhfFs"
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
