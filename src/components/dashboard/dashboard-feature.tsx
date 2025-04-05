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
    "2DkTbVeN5V7TmDq5W6PKce4MWK1DcWaawU2PXC8gmkDaSyZwytEEfzmdbttVKMMs1dkjZi4he9i8a5MZeyZYPhQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ACtKvX8ahx4pnwuWVxgrUL13cEVHyUg1tnP7JzcuiFF73QWstZHfTMzDAD2G5XU24ywmJ8dRZRyevAYSLLTFJ5s",
  "key1": "2hMrUXbHENQ2wGn64bUfiGWsdhURTXnHv85cxunzhvnaL7LKtwKRKuNRjWuxHroHofnjmt4ojJvMBdjHhtDmX6oW",
  "key2": "4FvWgq7UaPV8HPdkbPdZH1QkvJJm8PmJVBebV151VQYu5vxQyaz27sRSctrTh51wSbNRsGR7pjYFsavRE7nVaboB",
  "key3": "2CJP1TRkHjBq2FbaxUcsjYHTvDGx1fvxnJEjqSkkTZkvGC8EcEZKDGkiy5DegkuRY5emFTNDDaNQAcdif8c6YA9G",
  "key4": "5CNuzeCoYGKwuaUaJ4fsebQ4k9XiKSb4FERk8LWjjTMesdYgzZwDENDKuZTQuZ6yNc48B1M8NGVmVK1QfCNkb6th",
  "key5": "5m2xYnKdRtkpErxL1TmU3xusEGsJsJdd3f9i9XYD2Sh9Dk7dv8apnPx99YgqZjSey8WtBkrSrKZ5c7qU1m6Y29TX",
  "key6": "pgB1yAPP7Bor2fU3SxqiRMDzgcHUu4xr4TBoV4jmCTcvTrrBSuSCn2cDsMrzkwWnMarGkGHXe76dfdi6qaBvT7A",
  "key7": "5entn269xJ9TR7FLZM1da2V3Q1aemnRHu3SrVm7qkkg9PorYa49yw8vLbhJdQrZwoZiWAHc1ixFZ2wt4ZcFtkeg8",
  "key8": "aAJueYkn5kcm9Py996hczN3h6gBC59Xa9piMh5Ny7mZyA9pfwKPGRqkN4UfoPyRnVqFWyiCCDEUfxbU4VdifNHU",
  "key9": "4teWbU6KWEAbRQYCoMSGbQ4YjscX86qTLSCrtkhq13hyvE6r5rSS3Ucq2eXbzFpCXmhBp49zwx2PN1gGXvF7tskG",
  "key10": "3FF99za7F1puPpsW8zBQ3zbLfuoP6HZAowNDjS8scNip88p3tWZVf2Asd4LKibRqsvka1t1JZJA8oP55negfYbZG",
  "key11": "48HkGTtJR76SfCaErHZS39ZkCoqEiVoGdJkqtKHNQurpeWaD3YG5FWxeypVccfdGfiEkrhafJdJQ7DoDX2Mc7XCs",
  "key12": "5g8tLK6r5nwppkJs41gRaWyXnMhtd1motrDYxYymkx93jdaFgLy7t7y3FTDaDdkL71dmRLE94H9NZMKHAkcPqavk",
  "key13": "26rEibMpDbMrqywyWhLnPBuzK2LH4q3Rkw4gqrgmm5TKHJHAJ5HSe3wHj1nDPz3iMN7anQ51fGGDF2fKkXJ2Gbmu",
  "key14": "2i4XjY7Ezk1s5hfBuDSfoeEA7ioYWMLsVFtRXamgkaGuB27sfp9ayPsZ95TGbs7T5VxNN3hdYzeSsYzXXVu9P9uE",
  "key15": "2FH8D3d1sjzM4eD9DjsDK1jxDS8AWK2s186w4bfhW9Ne7RMNb8QoaaXwvRqwqVeypAxBP6bKQnZ6weENWeBV4XDM",
  "key16": "4B3rbd74waByuFUivU8znkycG7PQL4MHtDqqoWaFyQSVLAn5ukPUjBzESnfD4WygEPQjt5HxkWDzMvzRsPUuAJKt",
  "key17": "4UVsyFzTWWLu4qcE9MwMmNFNe31MowSGSraiJYTQupQyj4egU3XDPSWh9Qnts2ZbC6Gq4QeyUahgwp76jKC1sxLe",
  "key18": "31cppmzN95c8wvsdbY9d1GqpWAnTxap3LUboQvHWBcLkpeLTaEpm1mMjdotTqeykHWrW9YXErWkZPTRb5uUQz5xR",
  "key19": "36iXye7GxoeFRbQmY6MTmdNAuJurKpzr8DvtSofLJukHzM6tQthvu6PRZ5vgghcyo1jgyY95osjeqNv5RmB7WwFP",
  "key20": "3Q4FaRgZPZdAPePVxom3mq3S4botC2nXTdH68NpDZHCXBRnvu9FgAUnkNSd1TbiW4ECovEwvcTRJREhGpQcaHJc5",
  "key21": "2Dq1LvPu3doE33TLt4CQYh7i13Hzkq1QWoGK8XAP7HvvSku1v9Aj7RYq5aDT4NNj2ZZF9wJ7r1N6KdGDHRCP7Q4K",
  "key22": "4xZekszkdPh7jwNmB6CRTjEALKbFuHoGZbbwMymVoJa7W9Gt4EuGpLXgyJyAp6ccAjpKbJKQRHo3Fyu5TogEYagU",
  "key23": "FYea7pYvxnXZQytVLdn7tLq6UWoMeiCcujveRn6Bzc8JAYf138zuNDfbP11a9hn43fe1uUg82sB8CcCHgWzH6we",
  "key24": "2RjA2JZbg6gvQ8duzSAnBMQyL1sXFsw2dCBJYqxHJoEbwLVcHNG6oG7HhKcJj6QcV1MNw7qvWd915hmcrQYucPCS",
  "key25": "2cJU8kmCnXG45s1SqimmKuKPjsqTFnst547gLkZazfv2zwsCoRu3tqMztsKaRiRXZfvUe5SjSEXtXxC5adJnRsWA",
  "key26": "4uLWNj4RdEi8Bvz8XWgMpHA5atgLihKf5Ft9q4afHib4JYGnZYNGWWGxTEQSREGoGqHSC7fLJKrRkK56JKvkGZur",
  "key27": "oHLvwrhZ6Eo1sXoroZMo2Lzyo5uK6NTvgXzSjdET2VrbcpvkFTPL2eCHhvn6ySrBx3oj7RnHGeANWhDg1bczJt2",
  "key28": "ps1yMCKQ9gsAPAwK1h1EBP5myVRwYsBmFD852cswpZEQfkWzbT7zcS5JCpCykt668VNSYV1pFEqZWJbEW6MnCsH",
  "key29": "gcZ4e7NfgPVbHJ5ABhwJsKvft9KjpbKgMzaQFjETdgG6HpKBLHNSwsQmi9brd3nstC82uZcqdWLeH4ASAJ3KLpT",
  "key30": "4f9PL9dMivDyt8dJ4oenSTsDyXv9G6VQsbcVTdrmFG9rQwj6HkwAytJJTZVvyQGaxVu8FZPaCQWmcgcG2DZfnXWD",
  "key31": "3ut4Zpcuj84mJes6c1Tu4NsH4TEXk7B6SHBfWoNqfLARRCpsJ1MgP6HDPFLxafc8YpGUikfoEqmR84457WKMG6rQ",
  "key32": "nCGiAHCCF4qgaLUmJM9kpacTig3GAQj3iP4t4r7RtK2pPMQEqbYZ1RoRpacmTX2EbPiXd3WBtGDjznjVjsz1XVs",
  "key33": "XbB44XAKHL8UgK3V6kVQFiYXnwZp5Qm9YTiAf3ujf3Za6kV6pZQEmjYpE55h5VUVCVaty2fC7BofWyBCyaL5q33",
  "key34": "4eUNcsYBVsCMCqrT65Tu5c2ZksNsxMbbpAvxS4NsRXTjb7ACWLSEhvq3ugM4iyBS6YtkFEAgdwRSbsgomK771Tqd",
  "key35": "4e4vK6fQp1PYZh1sbrFv57jTDHmCYWiebVabxNkMD16HRPJVeM11HSqRtd9ZXoS75j8uxxFtYdD5zMaYtGnPr5j2",
  "key36": "3XhQgh8KuRJCrdBvzMjqFG3HvpNCiuSz8XfhmTAHi3g2iyBxudZEX9F4N2p5FMHJnLHBV3qTPc8B16eThfmhrJxb",
  "key37": "427GbPJYQGviHgD6eDwwfVDKnh11qjrixDCw4bRpQDmMDd9i2B9SPwC31ru9Xk6HroRZpoA7GUjdT3d92bbJPrig"
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
