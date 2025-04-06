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
    "5mSWVa8BYNw9yhVstDHohdWVX3My4poqNsfUakp1SyV5GwKqRnrpo1BgPQA88hQP1BXsyUy4GNf9cRLaKD4RHU5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46pGXUELyRbUJYC3RGBYB8XTseUuVjaKGYG6PAoYdDPvVXtiF4Y3yCrAPaLmKS7EZAdRdcCTvz38mXvGRDwzwRFw",
  "key1": "4uQie8VjgvbmnRBLJR4TnHsh3TJA5TsTbJ4hebPb8nXVJg1gXA2kNjLyFqBGkBMo2j9nHVCRLfJqgpdMeWbRbsGj",
  "key2": "3sWdrb8qjnAmkbbGuXUA1gQZwFFYqvetYY1V4baZNY31WRmbs34kwcDK9b9evzgCTfy5UBNtQ1q4Kvn9whMssqaF",
  "key3": "2f3DkamtsqD5ofYkzXdjKW6abZQ6eU28SHzfHJYM35cnBsRCN47z5cMELefFHVbgCrGvvkwhsGTce8rMyZ5qBD3v",
  "key4": "2MbrhH1NVNG7vvXXjeZ7JvpfVtM54qRBbay8agVqtzqeDkT4gVXZuVDLGDQfnsxsY1JmZKrdWQt7SZxLbUncRGUJ",
  "key5": "2VfQMTeDrtcUqe3SGFngq5n63aRiWpAcxYzMQ3CBKjAKqdwLj9A7fMUw928KKL2hgdkdBVWJAeikgtvT1U9BE4wT",
  "key6": "4Tnj4NvbZqnhkePA5sshVWzvy53esvaKLHGw3ZaDjv3VcWKMzh4iCHDYzE8MuidKhzpbzCfTXSLCP98kGmBo4YKL",
  "key7": "63UMA9D83pWd2Zw5y4MgpDi8WaFzFgCNK8cSDSib1sMWuWBMzW7HtwNThQTvNgsmfX6ZJ81nPBtVcySKP4RP1q1B",
  "key8": "2A9idfgw86vNvxhNKa37XXxDm2UMDjnezVvrfSrLjusxZUyXUrF2cteV2Ch3un2ft8pUGaCK9C16YfxsMEF7FFna",
  "key9": "ZbwhAg9jDpFhccwidji2gCUGdwMSLsBy95Zr3bY6wxZrXNHsTEdw8vseYFu8EUr1m7YNJTHwnda4kmrCsGrSaPE",
  "key10": "2neGqK7WzVRbRD3X2gSMeozU22aTUZKuPGNmLX8iTCP53UqYZGpGGoYvJ9VfQ77wRSTEPcZbuBShQZ6xHMCYyGY5",
  "key11": "4wJ5nGsGCt6McUN549N8RCjZzQDZSWHiPh3r4uTbGWjVPj3s7Pf7wH71EryXcMbyAigV5Ren63z9288wXvii8nAP",
  "key12": "2P6U4fV5PtSMNhuTsE4XStdHgasR1QU17seGL5s6ycyt1YkhNxGvRDQrScCFXp6XBk41v4eXWLkg5XpWvTroqMLY",
  "key13": "2teYytpqkkJ5FsswnejUVKjEBjKYYdWdBkuRFXmAeC8cjJ3u7sPyJsioK4Ri5GbFgaxuSFJDTUHpg2hBkzaqL26Z",
  "key14": "5vPaC3YjZsJYByUyj6KkhnqJeTAoXWZ6rmqK4GBnibomLC9s5phfJ1LbX19pfzccwWAbfMFCDwj5bSBGtZxereEQ",
  "key15": "2TQP96JwNmQoiEjQmQ26s3keQ4TUS8f4vX1jCyAijckoqLWBy5MZmkjAd9LgdxA4zXpLkAGUwNq3DRRXSPa6E8Du",
  "key16": "2TGz1x1UvABnt6zcN6Ktb9fjMjnsojN7sSY2tmnWbSoRZ5Hy8pQvjPJNHG7jBq57n4EjiMAHtGVDQZpbhtnxpSLC",
  "key17": "4e3QNYoZAvb6PfdHbTiMDfrcBwKHTBskwCkdSP4uzd1rWHixghuEwmV4oZy3PmY41TnrYkUEkSqoRcauitw7sER8",
  "key18": "3nF2U88NTAALDTBc369yMLDQvyDaFBZuxGUXXEwXCsuZX6spm6Zkk2p7pTAMerAb45rTCboPy9U771tk1vcXKvcF",
  "key19": "gamzF6vHdFzM4CGRadwvYHAr6ES5igKzb7NZV332SUAp3C7XWeQQgM4Uqmun8PSea8yQJnkGBrKsZB7wqTe2sZN",
  "key20": "3htDoctkNKggxm3XYobL5pw7RAEk7FH1xxENfhB49cqkVXH74z6K1cvkBqJvWi8H8iovSRHuQA91cXhUQkqHNoFS",
  "key21": "4Wf6om2RMkKoaE1JLcFMZz8nzbF3BMhXTgetU9QqDo8BCHRewgs1rFGJ8WCjutvZt6wsgXCqwffVuSJsnffDxRSx",
  "key22": "5mf14oMc9CDXRB3nFDM5hakdv5cM5jqGpqJMhtWX1wwuXHRvHrWcqBXWbceXaFSBvemiV1hstEbmQ4FhzkingCsj",
  "key23": "4Hob8HdTTCAH5KLtGrHeCcRRCdfnVSKmtQk1QTqd3qioC5RHEeEPCTyMmgiQiAu8FZ5CbqHbDZpEm1eD1MSSwrDK",
  "key24": "2EzQ2KdTzzX6CNxodj1SvZozTQVBAqMcYDB41AcRwBUQQuTTdpVJXsRv5LUKTe9Yv4ks62Zzr3M4DQKo4wfZu3HP",
  "key25": "39bKpdZjgpnRP45TKHD6J61oL7b8Zx8rbqj2yesWGihsepRjaHYeEyM3r3456itSEX4X4WVDwy6hGx9V3PY3Ci4y",
  "key26": "3F92ieEbfn2nasQEwy84ytvLTcVrg6sJTvEH4nm3smWrL41Ac2FPHqaf6TYKkENx9MAp3jLLY1sZiPN9go7LSEti",
  "key27": "2DWHpZBdWcRmMpfgTjUGnxvBnvM1fDquaVH1njqG5roLr5nUoibsx6dqQeFBzoVXc2hvFJZXqNKzY2iYnw2kqjMF",
  "key28": "2Gv5krktFW92ecJ5VJn4WCBQNVbccVi2ETgDknhZNWUdtZaAD6znAGyUsSfHXABgxMrLWUyHHK2xfza3zgjwyZ4U",
  "key29": "3B8pguGQbD8mKKosdx38maFfxfqrGQ6qRFwaAVgGWNJq5jByKn1sDfzpmjzfDsDK8p9kVnqwsZY7Gxc8jvLHbCXb",
  "key30": "3NBZpyME7uee4vBCZivsu4rJfPwXk19CeRqGzKEWbzY9aJKrvQWVg2ko3gGDqrooNbcmFaHgJu4TcKtrrmiCvkMc"
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
