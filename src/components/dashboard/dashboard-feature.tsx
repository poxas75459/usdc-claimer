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
    "4sTr7Ph6xTaDabWgxNwah98nJxd8ymdJSbHYZyteqWzg6x4gFMAFQvixBF3XsmNdDKSoBp6QirvTGy1ABbUGaARa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PJmb7Gew7YN8riABjtPJPc3m6hXqJEUZpq9cBfMoFsN7dyE9uJHiXmJzmLjE57RiQ6jGcDR1LSV4JWcfydyEtpm",
  "key1": "3GFEg6qrfQ1tDdC63LkUibBUSVfyhafBvZCU4QcuMzEUYcTj3XNRpztjeuuPUoYnvmKkxFttb8N1mHtteqngsJdw",
  "key2": "4DfALgforv9dpwZWZ498E2FPpAJY7LUCj6RmzVpZNG83zfxr3jRkTrs6ezUU3Z3YNJht5tXTJvbj7EQcmMeBha7w",
  "key3": "57RWqEqxvFkP7GpCoTCLbuXqTvAwvDbYd6ZvZZ5cao8jmmBfxRgDWJFdnQpJzK57cbJHc2SPr2mdxqy32RVTMNDa",
  "key4": "2GCHDATZjBC6hxdXMKYKEnyMSXDU3gSPnX2kmoQkMwFWUWrNZMb3vjwsMRaNC1ioAbhf7WT3WXff5HvkbovHDaWK",
  "key5": "5kkGMciWPjEaVYRKcpND6EfETbNpoGqmynuB2c4CQHS3MNyNuhZuF1osW9sNrSm99ZdavArXuHwg1kXRQxPtLxV2",
  "key6": "impcna44o2UWJdky73ySstu2Z8G4nFPCq9xXSBr5kBwqDKPoAJynLFi4UFahD5Tpzj9kbg7TqmxrUZ1Lt8cRZVa",
  "key7": "3GUjnXqUdnZXugvXPMCQup4ByYewoVvzUYFM2rfYJ93WGHH5biH2A58FVqeUiSdzqJfBaoNUWVSocEb5Pf1ymLNH",
  "key8": "4f7gVAEWc9ufERWNyvFL2iCupMqJwhfas8s5zP25yYAFaAAtt9cEU78K6qKSTD42io4kEjE2czCxxNfti88rUHqU",
  "key9": "R5nMNnHjQCPZL4AwB5Z9xzjd4kyznTFbs6gtZqJyzceC3qhjGR5m5anwttNeoGPvxqamCq33KCR2zmTYta1iBox",
  "key10": "4yMmJCrgfrpE6qCBqKDz26z2S9sqXXQYCPAZ6jGmxMghRRzm4pCAAT9P4xL3PYBPBUTtjJrtN6umt4cN5pTK91se",
  "key11": "gMJyUCSnr3MMMXANz6dNEJbLUqtVS4c3Vv172Fc3nhCnUEEpLk46y2AivZDaK4emNVNBNjo2XzFfMnEBNELDnWE",
  "key12": "4eYrtrjrmDfC4KKR6RvUejAdYaDN2CuKLJeVnNHmBiHCQW4TUXC6eFAY6AjCFTVwGMh6gotpeAFGsDoBkgm6UE8D",
  "key13": "3qtmjYPQToMM1U78pKGCk5qn39pxMbDWHmdi91YijPUQsVnoUW94V5DGuGRPyH1KBMff1D8TPTtz5PJZYaLunVsq",
  "key14": "3rXNDh1d91mZzkFBHdAQCGwBKbUATvMEac6u4D148kyXDPpnHyXcPJhCHGFAVP3XLJDvaquEZWguCiCUvxbhBgio",
  "key15": "5Jag6NPT7BqMmgNbxciDKJ26tsEmGaJ1zK9SHbmemRScDdqwyZaMn1bAgR5qtri64UmVh2jmVJFiyhQKFrvwh6H5",
  "key16": "3jHg188suibDTazsgjgoCTqjNpie5L2MvnUHytEyjCCyzRa4fLrg7wEk46jmMakLaTaNDdCSQxfqRwREQ1fPERnp",
  "key17": "4ctCSDSzJBJyPaJJM2XnfdxSqPPtEz9mVopfCiPtbSn6vo5BqHD6TfV5zHQiuuWa4nLuMVjEbwKMz8XavKUfiEbj",
  "key18": "4RCdvomnkZye1U2p9FTUcQud5k9L5A8Na39GFsXj5irf5ZAKMufRorhgwLy2go3aE2jqwqcgSvsD46QS474QkgZd",
  "key19": "p2sXV9CvMUqMgxkZ882Qy2zuaj6CW2MtYYAd4sRqcvhQ8oJuXpjkBjzHw9T14wfNwS1ihbC5iGo6fma1sTTFYP6",
  "key20": "2bjqHmxDK524vG77GVQpedHBYPFLkEP2dJNhTFxchu1Kkx4F4dZSAgB4krS6cndLzmc7CNCCqyofaxjkkLiYCLj2",
  "key21": "55SNdpLriQnNMkBUjEbKD6DrbJSYGpiyd1T5Ru6YgFvZsKet83mUFEjHD7UMQ2L6VMDSLL9mVvoPrJZDckDaF5Gf",
  "key22": "xW28oaHEEJMLsStaG4JANc4p4m1Js88KsesJx7FAzK3aA51J9FLWeBgF55vq7hGoyQMRMxqjnaRmpjqvG2NAM5b",
  "key23": "FX9ovCoiKYaPTzdFFpSNcZVCJfqpLQkhaem6LJGHoc2BFPpPXmBAFKJaMXBA94vtP3WVfUadLs1AEZqCoHDX4Nf",
  "key24": "5hykdJeFgAYGCKigKd5LwYxRByvSF3EnmqTDozvFhMDeM5LHM4CPeFjSSaChHMaMAgKEs3G8thG6mZTY88b71GVt",
  "key25": "5Frt1wixtm4VV9rkjbhB87uE1fwBaQRWS4cJ4wuoQPL1ezjp2nYSCaK744i8zcM53ZuSVh9iH6fhfHT6hdmKWRe3",
  "key26": "4DmCYr9M43qfC3f94Hk9QeyxfC6aJsmu4PjuveySyAYzgzCRpNxGMt4gr5d97QD8DdbVeNzxjtQDupBZD5h5coug",
  "key27": "5h9WzJe6XXY3dHbvcfzx5RtERpNPLcYCAgVfYMb5C3wAFVSJynmg1Kwwaep2kgamhSRrmBDX9kisUCbtFZLbrXHZ",
  "key28": "36gfosKRgZ3rvzvu4Ac3LAGG8eGTPxtYoByFBzceCskJjRB5zuNkpSdBjMNhgA4dupwVZRD1cBFZsG5fh7tDj5ab",
  "key29": "34XjZQmvqLzFxVT6CveHeeG5f9GoNxrdTqs9E6gUK3cG9VtxRTdzvnVPeXZG55ZEqGyHKzzAwGJ1R8igXdPH2rgy",
  "key30": "2UEt8pGscTapLnotCxwKi78sn5JQj2owDuSEVSFSbjHs4iifCWaXteMxMLhPPwZ9JPM6FABBw1kBnBRpm2Sjk4Z1",
  "key31": "5EbkFQPPo39oWkAmYLtrd2dPtAK7LZVsxwvKU5AC1N5xHuE1ii3RGiJB6w9mFunvH6FqGjE2nRLqczJ4bEJVgz6o",
  "key32": "5JCmRAiAQnvW3oYXKKBdxwRcSZpBKjXdwdVxHCFxMxxWjuWc9MVJDdtJFhwqXEzdFgPTPuyS2jJ46r5w8jofBatn",
  "key33": "5eDxskSCvZgDMbBVD6oMXSXsCPXsD4YLixgborUzCDxHVgusrRS3hfkKVcg1iMnvGY47Luvq4d2TN5ygG4epHbKa",
  "key34": "kaAahJSGkcoU5qcb9vaKounHixrRjYUJowQTrnkFSBeDZWMDZPivnh6cbmRmXooQUeoXRyQhfyDWUtfgi3TxA26",
  "key35": "5ctdxezAcBeq18Ka3vQRxTaYRjCbH3xzQS6RHtdFQp4fxBoELnPyjeY1mweahDXdcmo5r381BH4aWHkLTAe98Cdc",
  "key36": "5T25FLc9R3e9AzNBh54iekPJVGUUPCgPifVQZrQWcRbx9xJNiaHKarQ9C7S7RBJNwpM5zFfpFzNXE1iLAdXgdN4s"
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
