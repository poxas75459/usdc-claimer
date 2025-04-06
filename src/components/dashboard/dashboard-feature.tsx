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
    "5PZMqHZPUSCRVVj1aJdXqtMsesvhR5TxLKiM57FuRTVBDURs63383gvU9Mfgc5omBza5PhFfUT4LrtSrB7fsr5PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jsk91uUT8PXUxSWErubJCskKmFD7kiqAfndgN3i978R1kLYqmNsp27rekjDcfeT5vtD8syJY5ZnTFmugoSif9z",
  "key1": "3paapChc9bzMfD5v1zn82782JqWd9rPYPt9vxiY26nq2rmyaoRpeisGRMrJ2ns3oimkbWzVSvZir4kpxnmuVjebb",
  "key2": "2NetsPQ6vpRH981j7veqd55W29SAzQW22z6KAXnJ8MfDCW52PttCrrEjPWmkAny8BcNFTPgpF46qRHNVKUMbgG7K",
  "key3": "4AsgAJe5U4kMCSMcPLwHEQkvRpooZ2AP4FYFfCsgRVaAjVM65hgX61CV2UMsQM4vEyXPrEmhJ9o4kXa9HYXjSLAo",
  "key4": "2hNJNVQAXCuSka8zfWTRwTqDGvBjAjduXZAgDU1yPPf6Qe7CFfbZ72jMNaFhgQx8VAZjfQCdMmgpo6bi8vGdA732",
  "key5": "5KLRQVt7SUjLg7KKeuyf2hXF6Kr5eFJtXPtgGpWjVS5pzu2TUSzYDKKwp1uBrjZH6gPZSR3GpJRBXyMXC5ypTq2S",
  "key6": "25gaj8orzo43dsq8dyu9NbK5gpVoX7hzykYPmp6aUQDC5e7jABBb6N9GZUt95jedC4bGRxgA1qxp4vsvRibTABm6",
  "key7": "5TzAPTpYhXhJcjYikrruqA3AxTWPv4HDLPFzBFo2KqGWbRUUWAwoLGJ239xNmGd1mHJDArngeQFVkg83R3t2TUhP",
  "key8": "3eCtaQKemrgPQHeez4TVBqa4EojPstf96H9cAYMdAqndrnMpqDjrYwx7yHvKggHXbQJ2ULFzyVCKNKSVTNiS8gvV",
  "key9": "2JaorYbyAnV2LR1mJXxdVfovC7sH2J1Fv4gAdDeErN8bqwVkPph3aasm3jKpbVgadc1neaxv44kW2rqGWADB3mWk",
  "key10": "4YEdfWUFLiCJQ9oB8ho6Ax7EWxFS3JjttJ2aq5C4CY99aKQLKNRWL2FpMHEzg9tPqV5CCMdheG91qThiZTGuJF1F",
  "key11": "3axYHYdoWpXmWgCCVuxTwuMNrtgdjVTwwsD8knrVEG6WJzsksmx5GmM3Qd4cTvMLVMpxDyo5T5mm2qdeHUBMLnKU",
  "key12": "2Yp9SzP3LEn5wjdHGE8rTeGTxrAekfZz4JhQntCx6SEwrE4AfKfiwJUuctiC8gU5BaZqL8DHyEgLA9SrYjAn2NfT",
  "key13": "4hbRW8y5VZFwyMcZctiJGC8Vxvf4j1zFZonmvhLSvmqP54hB5WYqripKSHobtjUoMD3mtDJVBUZ5SJFu2pb23YTQ",
  "key14": "5GWZFPrCY1hCBbHrsgYCEuQugan83TTr6yR9Xt3ZEw3AKaBikRvAkeGwkHRaqen5Nzr9YEJnHRKCjf5MVLoExqrj",
  "key15": "3BFnzyiYiBRCd6vyHKbjeRvfi8DJU8knTZNbN3gEajRs1uud4xJS6TAhKnVjQvYLhWDkd75AWX9WSE7woKp4X8sN",
  "key16": "58Cmg5Q2oNC83Rod6bj4WWcgR3ow7vZbeg3LH98EvmeTvXYkCUhJTX4W5NBmAFQfXYnDV5ioHddLvGR2pSy1WZ4s",
  "key17": "4eJS6HEQmPegWfAGWJqFacsJFKwiDuRxWEVpTT8pJqEiJ4AvqKcM77fGXFHENKfQpESt2GrsiAP7kvA1brtMJWpZ",
  "key18": "5J8Lm2SeGJU5EBNDd4pVasbJAcqJK3EHF2bVz7J43teNFLs1JgkrJA3P8LYCtsi1PZE7HaTBqPQSy9RFx2QFSrmH",
  "key19": "2cbPSHcShKSKncEuiwzkmFsAHCpv56wDARRxTFR4VqnFsUsknMVcK9waCPU173eeroG8iXzJXRA3EnLkJ4m7M3PF",
  "key20": "E4U6e2EZBr6Wm3FgngzAwhzqmiefcm7Wwvk8LuKcQBEE6SN45kgrpDiVkw2aXQkGAqQeDGGB4Hk82DR4dBWx28H",
  "key21": "64zsHivqd5EAEkQ6BPDG23oCtj4chDQUNe2MN6RQQoMi3Ac67SHmPfBZSoQdd98xMf61NWdHWjjYJ9Y4Q8X1gv3A",
  "key22": "4usHJoz4W9ivbG7A1JG2rkocCtEvSVENZE5cpwHksLsCnd2LhhiaPpdG8Q7beFcuTV9f1HU8yGW8s3ui3Nj1Q6Kk",
  "key23": "5vF8gUtsvZVLLmBpp2bkAePQ6gDpun1x9kp8ytbuPurce5mmMcJwpYvA7wQCjMbhvf5VX2NvTp2JyKgnaSx71x1F",
  "key24": "26Hz2EmD3JQN9PtMtAby1uQ8ZeErXDu778dmaU148yTL3UHZoGBm62WG4gezZNG6G9BYx5YsKANbboGZP9oFzc1k",
  "key25": "DTgq9JcYnsLnDKi6BcB3b2zFnX2TLiSM86FCdAtDq4PTjtFkmtCL1n2QHuhWA15km7d1osJwG3ebWBk3vVLC1bX",
  "key26": "5J8AgrkwkHBst3wFB8azMFGm8RLweL2BjZKCxF9xYnwpcvEhxrTkP6fwxuVUM5vn45v1N9juTQPFvZ9hvyA4BbTp",
  "key27": "yfdoos65qqhf71U1wzATxaBLJ4WjCBLAVxgAeZuLWBSq4o4xynLKhoUA98m8jemAdkVdwEurQRQ16RY29m3QKfk",
  "key28": "2Jqk1NZWdpRZ5Qs4vukUczs7mwgDKR8L4zhsP5PKvTMBTtFXCJUGLdnzCNdtUjYq2KqxbQGcy4RY2nisTNJovYHX",
  "key29": "5wy6XnsCvevoZkPP1iyRtSJQnuHcLsrYoK3Ah69GEWGDtt6by6axk1SLY6xHwVfWzqoRN422oCao8DHXPR2xZiU4",
  "key30": "3y42YNz38HJTmFxNnZB82o7A8hK6dtCrvqeudBDdjHefHWbi8h6gTHSyHeGaSsJtSy234bosBTt1LLNtXecK4dVc",
  "key31": "2dNALcae4pXjRTj1ZcnXLUfrJm2U7UgcVT2VEjBW6hxbLcwxNTxYgfxwGUwxyvTFUsYw3BojV5hSBQFSZWeyugKG",
  "key32": "3iC5bUCWBdSpZazxocDTzqNdnZ6XU7KQxc4MdhiwvSppH5NEbu4MVTbs4q8vSBH7ypufieVhQzJy46LBKZj8KTzX",
  "key33": "wrMMkS5aZiAsz8CVUsrBRFFruXbYiiVsGgJVUq7ixgc7gXHVShJHk8yFZd5YbV166MdX7RvmVxZMBrVRfDRjg6z",
  "key34": "3q4BxKBDnGx5hyjtenHh9YjWp2vja8bueNZ8kkZSReYbntuMRQRpP2Wj7xFRHS69A9RQmds5UegizeYTxfYGNjd4"
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
