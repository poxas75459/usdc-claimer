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
    "4vdzFqr8G6cFTDSy59PsBABufUq4B7XUaMTit94BgQC1sTK1xrc7y8WFbQDrH4B44mHFqG8hPrR32sj4o5gLJFj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X4foRvvQ3cMP17sJj2CinDnUcgizvY6ZKhEJLKEi8z37LxmkftgqXQp7NiWiqCbcapjfzdTSjSThWfAcSkBvY5D",
  "key1": "5tRzpYW89UnPXEN6Hc29y2jiBTNfP4rVomwkmRGKfJAc7s7EMGKo6LyFiXoVrRnN6wGr4n15sbrvKWbhyCV9SucT",
  "key2": "4H6R3PtY9FC3vGfEkc9j6eMQK45yAV85u16Q7fh9yNgXtXT3hY5HY81vscC4cbtYqiDb19snpBNx5HT9wZURbouy",
  "key3": "68AH6CuKEaQ7RtshZQqgsgiUGn2pcth4q8coVqxtrv9r9n4HhrD41ctkmAEXGqaZoAGapgeUaaDEzn55zcNfaoz",
  "key4": "3qsVzkQm29ioyxy29MiLq4siuqebXGvL21guAjgCgiQzYxoQiccjqJaV4NWAA6e1SYQjY9XJ6gP5xR6KJzDZDL53",
  "key5": "3Urpyj8sCubpg6WTcwhp8HVfSXDRzA3ML1aEWFUYuMGdTKibs52WLf3NjfxSNKsRva3qPcj1yMCFA3xH1tfxBsvR",
  "key6": "acr3aeU4YewuwqE6snLEhcfyNxHfyooMJbk7bMB4NY6R5FYCpsd1ybfbmtaHiJYnXczRRakswHZUwMWrcavHCt4",
  "key7": "3zxHH4sbwoy9pYKJeFB4efKkETg7TuedSN4XbYuc5coEzQQ6Z8H19sqJ4ptRSQwz1Hni9ojCL2DSjGaHUgjeBX3h",
  "key8": "5LoknBNrMHCemN3B2VdcFmJfc2nmKUQ6xQ2fwyFk4BMCHoR7tA4VWDhL4rA3YjcBbeQCKc9FSnvp9KGiRjNokRmv",
  "key9": "4T1Z7VeigQbDVTRX69HAi8ALDQhyHRavex9m2AXteA4B5hAXfAwYgHvCWApmyTFwoRAd8KttzCz39MHcpPCnEKz5",
  "key10": "4epDzQfDwQfAyZJAZbHWNBQHHdATbNV2DQ5MvuPt9wFn6qWhr8HRvB9MzKPMT4C8BNGD4fU7DW2bHnNrSE3orkzo",
  "key11": "5p8FAR94RsAVqY6FUVtadqi1PvmdmTm88zpLvArdFKVTK78bqAc15n4fh3fqx9EHW2TiFiELqWyKPGkJePQFYkSn",
  "key12": "3YvkE8vKWv9VANmXXKkvhAKpXoULqws14r4v6eDFuv6gbLf8L23t2rCnppLEDuMDcwm1RSN6CVuN753Wkz9YLgPd",
  "key13": "79ay8nZDh5jNstnvX8QKjtMW5aEnYnG3RYJAuAfF9m2zWdVwsuj14XwxegkBXfWiwFdPn3nS8fF8QVoJ5GQoPM1",
  "key14": "Uj6pq99YnHCEsG6dpjWSDz8x71jtv3fR6JVK99yg9P1tkjGCS5zsvebsvixah6PzT7fXny3sV925MkXrUWec8mH",
  "key15": "5kWBE1xEXhPZA9oqbNRiFvRZfrvxwnAzY6NzApQ16fZthy9DAGMEm2fkJwVu7MVx3otgPYyfajnanwnWc7cBqfrr",
  "key16": "5LpHNp7kHHLXTNRZh8JN57CUpMZRroMivLu3btMqrgZAhU3M58hd3WVmCFvm8mAZZqPx2sjbJiEG6fmRbC8bV5UV",
  "key17": "2Dtq1j9xkiQB4fYBzP9nS3hrd3UtHGKaWBg2rhtVMsBNeEDhJ9DcWaYmprZvnmigM7wbvxwdTxy9J8T7VWWoSkws",
  "key18": "23VCNS4Nte7Mh5JTkZviT7QC4T9XYCcy1FWF4vgyBbLXjf8k6K1U1TrJyQJ1Gi3sNaCR3CoxSzquZKEVW2sAmEMJ",
  "key19": "5hLiLDHfEXbkcYTX4TkTPZLXm94GUhXnWQZgiYs9xxz7dpXP4w1hE7tU4paBmof3c6urbZzzPjzhXaujsPLqYNXf",
  "key20": "3H65HxHpzQ38NA4WyeZLCgM6iHaGoGmV71Tisjw9JtmXWmR5UJGMU15KUz12mQ294PXhVwAPVGoyup4zwn3cp27A",
  "key21": "3QecYHpXfKkjR4ADRfbHTBh61K9zsBoKimsY81UWNfEaX4rznKvVRMzGm5RioVc2ByGpFwumF6jJTRzfon27wnDR",
  "key22": "EHHS6zwT69GX5wxEEsbquj11fjHca43Rd5s9JWrEv6apH9ezEAxdJz2u5H4TrehgqLud6t99KaEeSQWP9jDy2vL",
  "key23": "4wiXU4EuqmGf4eZ9Jceb1cHnwNvxtfv6vsktPaFEtSSC83whWYL7X6R9wNmcR5yxPUeFtAineCuXLaZxibXcAw1U",
  "key24": "5SLSERVM9K5HHSfna4Xtr2DQJ5h7jfaVDtHiCyHQJLg1GiqMP6kjudFUsuREg5oMRopV5DQhnirRPegMZXibyceE",
  "key25": "E7u3JjUN6VWMKZBsG3Ch7VXtKGXuGKAzsJPUqU2rTMuooaCPuUGFATyMocyEYRcC2bKpkdp292SA8iZ7z9MQNzW",
  "key26": "25DiK9AZJYtuwaPGVENwcM9288DDqY62i6QoEFKJioDF5jGmEG1pU6aRzTzhE2jt9gcSXH8GQ6oP65RbXLneKQVd",
  "key27": "66ri55DawcRK24D3aMYTLsNAUsrLBMq35dgfmHUMm8chuHnMoLxnGqvwUqhANWcbN3NBjkLfto9ntQLpEDj39zYy",
  "key28": "4o8WoQQUhpyCnEct1PCxPRt66CsQnj2nj9ydhFi8wmL7LUqB5f8EDY4yJP3jkHWAstHTiuTtgjLGrp8VYGS9toNp",
  "key29": "47EnoDXDPWM2562kEDkYSZfkYUx6a2a8MpobRB2TEcdV7sXKZayKqiU4zSAu85bgTTVYdN8sLfyzAESwoZnvQemN",
  "key30": "2D8r2Cu4sjcWFNfex85vferes1T5hnJbEpvWszS2zPDq75kTLax9RHxdXR6VDxLYZJY1mrDANNRGGMxtufcXg24g",
  "key31": "4EoG6VJf4pCbCTD7omjuGwuqoeAFqTUuvRHRHuXWc6N9szGTRntso5pWMBnvLtTPK8bYinVqjLoMc8yVfkzdKAPY",
  "key32": "2SQZRe3xopq8S271SRGk9xykcNokGpzqaaLygUHpQcTrzdNzzPWqUY7h6VAGoom6Uc54mjkkqXKFm8R2J5LrfycE",
  "key33": "3PLxMBat5YuaAJPQbFTg9EahV1HSodrzGaGkredwjPFWzdDDpJTMcnEPTc6USznJegte5SgPyeknVseQdoFWUsk3"
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
