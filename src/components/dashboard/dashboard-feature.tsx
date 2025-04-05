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
    "2VdX3Akgetco7iGadCdH2nC4tHgjPMDHiog28K8KSUYsZAPpWrakAJzZHRVrkfCiwnDjv2ZYmKSfVDcHQUerJcdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ob8f5MxAnUA3eJfs5wmM5W6e4yMc4mCwxfkFh1wMydhLsHYqJ5vzH5pjJZGm4AF5GFSRBkbmLDacR9ibcnVaFKw",
  "key1": "3w2NVdosCXg98mNK1WXa4Xhnqnv384CCrgKeAfd7ebsFJF8jbRXxDo1fmEZhATL5JiaD8VJDU4w6GZ2aVk568WuW",
  "key2": "37Lu7nV34tqXRni4WudqnrUEMuBzsWPs4PMXoVcxQ5pK5dEUEFKs9f5bqD3qeG2sqDD2NXLrQd2mwYakf3MN2NYx",
  "key3": "3aFYStyDKpxMGzeHKURRu11SB1dSEANxQDLAmRC7JXYssdCTKfCxLkhM7C5dDtxNL12b1PDmL4M8NuNg6kVpfQfu",
  "key4": "uDRmUfjFt1iZZ4p2Vdt41mkNKoFERob7nvydjcp69e6vKrpy1WMWHgmFAqeZ7hUD5HnR8Q2RkPNo8FUdQFZ9zAR",
  "key5": "8YLu3L2Py3LsPijsx8vjUwNQLe2FLqwQffa7y6nL3etrKLdCh6FVKZ7dxexQxybjMpKUUcJPduCNvwsLkRmHsyW",
  "key6": "3ubQaVjKUPCdTQ2Qj6nzYrvAKoPiKGNaewRez1AbTxbygh22AGnaBK4GCutJmHambeBpcRy4BmsorRpspV4SWjJc",
  "key7": "3ZormbUbCcEN3YeprPzxpcwQ7Efu5QSCWDpMEBMZphbkrEsR8RwbAd9JdPeJMzRvXHYpbfWZMKz7hvf692WHBJHj",
  "key8": "4DNSKq1DyuTxaaH6N5ej2fZDDi8nyAciBkfD54Cr3x9HfS7aCXACgqgHZSM3CyBfALCgMjfqTKffbUWm4hUuqQXo",
  "key9": "4eBUgdHBt64pKkNCWjmG2edxz5AwA1UgYQ9gUEKK4KPi2zww564zs7mdUa2R8pifoJ2nAcoiwUApkJxS1oQ6gVqz",
  "key10": "5oJXJhvzajVx6Lc2D1L1nYcY9rfj3oa66kE1WSrZxYURHnQFSub7K7fgpHNP5xGEoANfdEociyVo6MwApFZ8dG9E",
  "key11": "3EzA9tTb25nU8V4v96qgP66P2rGJEJxiHQw1Cv44C5V2dMJQomehK4WWUsfg3wwWZ5PvukpWysJ9TaHS4ubfCEQa",
  "key12": "4QURGTTXefDXvXAPbpCXUPPRq3P78ucQioGSd94PoPnRkhNc4kRryZLYJpiqD7QU6AMzrKcVjZgXb6x1c668MXMm",
  "key13": "2DrVr7yj9WS3274nWU9YKcG4YDHEaAcGza7vTfZSewvdFtaUV5D7YzKk7VNyDRGQAsC9WZ5CJZHVBJbHCMRxf53G",
  "key14": "4Z3ANYMKcBEBoqq5b12gw8Pf7Uw1ubZKJLv7Nab3UQwvUNTgkEVNjGrxpqwPnSSEejhvYNi3CC2wpQtoKCvEbJCb",
  "key15": "5dtYAgNPH7poiq7zMYvstrYLdrk7gzN4GNWkgQY16tHQ1ctgDGmQEtv87xRqe9pKZ9cNYnTLWTUQybjhi8pABCzt",
  "key16": "2pLfA6WRwXTBHBefb3i1rVhKrzShgi8GGWMsUax169UhzvVXWuzNG2tKzsd7SRxVoG4KZKqppQJEVnqZ9cbdxYMi",
  "key17": "5K2xZjsPvUZFA5bKZnQMGDaeGXzUCFaQda45k3wuvSCu4mTzN2ZUH9XjNYDnTZcCFbzkwsBLf5kPK4XmMEEx3UkT",
  "key18": "42BpJYFjtG5MEgKCPs2UKxdX4QuNVtRyk6CoYzid6NcqeyBnv7VhfVAp6rAXDcgC41upPcmJCVQeWEfHGV5dDrRe",
  "key19": "3RDX8hdEHQsp4LQ7s4xNZ6Qs8kUqRMACwSmuLgQjXaPZUs787HaQjWgVzKKCztJKyitFzFZcQrJcAYF6iiaXn1BG",
  "key20": "2dTsav7nYMEfEtBvy4g18zfFx755aeRc9iF95cVCKuySubBEYvzkhrtscq23bB6pDDwfrzud7NGsu1iJnsZ7UokQ",
  "key21": "4ZFbpjmAEkvGXKWV8GyAGbKEhYEjcjkHcMVFf5ppTmoXkYJdokD3ttmUgyaJctpeihgq97Ero1VRzrkFHcAwEn84",
  "key22": "NUmvhqRDFCp73QHBjYUgufa4WSf95zQBJp5Sx93drAanRYhZyuCFmQ8rrHgMaNtSMTX1sTCtRMnFPArzci2ox33",
  "key23": "4GKL9fCsSG34LzDqiadbVMZT3s18YFcy1D18njGDkvYSaorV97JpYzWGduc859dMkAYN2dUVZBoyZfbmr3jDHJDD",
  "key24": "5rfCk1wmeyqCHQeKeutoi3PpS9akUYuX6LXSeD1A6HeFmM9Vt5JqYGmKBMAjtkfSymRuRJfyZwMtArCk77qFiWkJ",
  "key25": "4nmA4rrVwpca5RuEnDho9S8mMxkmtHdo47s3xXvjE8ZHqD8m5r8yRoqwtpzY7RpLZmtk7iFHzvQHpPvYo6EYaQaa",
  "key26": "2PYb1g1DnmGaMgrwfBEpK3t2vSiNxntAfEXiHJSPwpKZTQjoWRy8C1u8TMwV6x8cgFc9u8rWj5Nurz2BoEePwtDb",
  "key27": "4GvRqebqEK1mi5K5gwpxnbkahxJgD4xJgaCiKmxnhECwZoZRiAqT7hTWVTSw3jahLXAxYuqzoq5dc6bqbgjX7uzZ",
  "key28": "QCiTSivs19bNyPvqWZLm6MUWvMZERTbn1g33Ni7bebvLEYomN3gbqVFYgekn3LhiT4iTxsWghqc4UvVNQkUWZ4s",
  "key29": "obxymusEeTn5nSG4aJ3ASM3Vd3yp4p6n5j2pkS6xW1PemFgHqUjB3Mww4JSkkVe5ntF13fJJTFG8vdjkS7szumd",
  "key30": "2kaMMcNACE5takvXkjc2aauwND4mHXphgC68FRtrVT9gTvunK73A39XRHhkUHxubGuXBW4wnEjUkoCwbYRTZrPaQ",
  "key31": "4NQMNHs9VTQJjZ4GW5DPm9jKGdzKJZHJXU4AjdCcHCnmSTbQxvi7DAwxZzVHN3W9WRx8VjhYDTrL1DY9MCo5raz2",
  "key32": "2oncuwMr7tHeXMAbZDjJvVRxRMA7regtfhBA5oF8yrwrmty8xfMFgLxDekuzfBJPUdKPZS8C9s4qe7Ex5GsNPeRW",
  "key33": "bv9ZgZEXV1wf6Wj9xVeSgMcorBW1y2pdGXxnpXDbwvpYA2BKmZAM1Jr42d9XZ3B4WCv3PXbReZ3vC59Pk9P6Dky",
  "key34": "54iN9vtuP5eac8NGHTebCrLCsfvjH2XkLVYuGPq8ipj9hdyZei7HiQxa5WjUSrb6UjPP5VJs3phkxud5dURtZBdN",
  "key35": "43AmoE2S2GhDQhWLxPSR79e4rsZjkvyHzsZXVBGrNgyoTDP8bo7MJtTnC18tcvaG8iP9Y2npAsPUFvQCvWS6Tj4u",
  "key36": "4od5fZJzRyciP4YjLnEp4LP9c4zRBdf2T1rnR6WXna9ctKESKmdgv26C19PFu4Bnsuwc9cbS2sFXAeGwjjLtydUa",
  "key37": "53TRDrsZP3i8iHAKLuKALeeVTTBaZupzKWekWoezfJ4P3pBCM9wEhNiDPV49U1SPcA4CJUwFUwuzZ28mWTSXj56d",
  "key38": "5j1gaGNXcYBfcxPNxcnwCsqH5tdW9rHPcbTX9vHWQtzwLB7Wa9NXNqAskyfhobqydTHx72WKe7eyayjnd3iQQAUp",
  "key39": "immgFiPYkQR2fEUZPPxftwvzRV8XsdQNZvmvvzQGgM5mzwg3oYvdns6se91tJs7LxV4zYbqT48HE2RqG3maEAiT"
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
