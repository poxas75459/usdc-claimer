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
    "4B6HStELXEbjVqnGpCMutmiCCw98B463p1zX4ZNEA5wLcuYnx815cJoy29Gmk9L6ZMUKfS1cZemanDjGfXaR3nLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVnx3vaMPSLntyBoWMmu1Uzn97esHQaYnb43SHfN28B4d6zN4xbAAfBaMd4T6PyKkfkPJpV7W234qcRnJYZbRY7",
  "key1": "2hDaECgM1Md2w2w81qEG6uFhYESumFc7nidaHnf6csgoiB1aMQee4ZvsdM2rCAj6CmYDXDQD6cdHUNKA7mM9Fx4Z",
  "key2": "55oMGVYRe1DHARnBHhJdbbUpX7aH3VetGQKfsqzazAAyqK779ti5dk78EiX35eriYPxaxvkoFz5frBRXtCaPU9d3",
  "key3": "27yu3xsqHztb4Nt5PX6cokQFmmCjrq7e34dyrecjtGWCK1RwReDEhAjL939Wqshk9HA346bY3354NGyi4gXJ3LkN",
  "key4": "2AC6jHAQbjgmJ9bne7Lq3qScZB8zLyVxKMjtw6E1HVYZc8x3rzzPKePTzA4HoEAxCZh4CrmnbtTTFCevwQMAfdxH",
  "key5": "24qnYCBaP6LmwwAipCX5LXrhzVV4yVxFpsonK2gxzXR2LSMKJYFoHvpgbpbrzCMPmDeZwS4tR3Cn9VcYpx1m9xH9",
  "key6": "4amjLu4fJAFU5nRyrYsAe4qk5BC4fixVATRjFYDU1SbdN241uDK8fec7b9ZrncpQPewqjdGp62MQkuTxd7UXh7qm",
  "key7": "5wetfHJGPz9vwLBGwzes7W7WuqmfCV7KE56QZhAVAM4hf4zfZu4TpDCxy1ChuW5FyaAS6UBxVoYf8HNQggvGS6yL",
  "key8": "2aM5H3KV6QMM96cab8UM8qhG3sBpWfEbRDvudJJfgtjY4kUmQgxEsNwhnZa3gVcm4wkWxmguxMnrtoHdk7p3Xrq9",
  "key9": "2YFxQJN47F2hdBTELY9862GsTxXx4b9D1nmmRFqu6QUz3fTDWNKD6SgX2swEBi5TKswaUAmVXX1uFoVHvsgToBiT",
  "key10": "4eakSsi5ZeZRz13v9r8PbD3cJ4mcqjnuvcw3aCQmcQ2WuqMsjbdrMAFoLawz6uUrHHK2zmxCwKjFPvWic9WhBASU",
  "key11": "5G5MoH4b7M6P7GYPXF6NQFimc6yxh54CYUeCE9FJnE5FLUpGbMkDvzJkgDxwQNFgKenG6ZHVXtEQtXdDx7kF5QJE",
  "key12": "4HQZveLo7YEg2V6EQqFs75Z8QiQnqhS5eqLjnQocv2vAB7haMHEf6RScWwRV6hvzD9tSTZNtV1DJFHYHPuJRbv6a",
  "key13": "3rAWoZTNkxaaz1dABGsGVXD3nPKzwp7toY6pFF5YmDeWZqmz5vjqnZgmSfxA1PCywqMRVxUqemRa4hhBXPBKcxi2",
  "key14": "4aESaNWZWy6BDAiWGi9VAKgZkm6jouoB3p7TVij4jaTRrohPSheMVsMsggVPpAnU96SxYqrYDK36EVWwFKC1do9q",
  "key15": "3j3ikzwSCMomPpvoR4zc6Dah9d1kA3ggthHTjyRGidihR3e53tFktaJAVe3XmdUiavbSvy2DfCxpgGv9kzP1bW1o",
  "key16": "44VRcSsWs7gHUYA2BsWgzSyTw2sXsasAPWaY1zPZgFV2KaFgBtQDvXNGqdPxEZiNgYpYaKwK6yJckfoT4sisp5Uq",
  "key17": "3k4o5CPy922W4VgTUYxnr82mNSfgBFXdLewt9awq6j4v5x8y9vTovku1hFDc3zrP9Xcvkvtv29or5mYf5yQxc98f",
  "key18": "4KVGPe2sbE7C57vw2vXCeXDL79TL7FvdoKVvfsap2iiZqeJSysQD5weNDkNRco6JWSKjJZS73tDiW5LcyLouFS9U",
  "key19": "4iK8HPL72WLERedSpTeegx79TgsZ2AGX96Pw2tFapXUfMKZ312nnE6sYTghJLAnHAqphY4JxHsm1MGnxkWHvCRxd",
  "key20": "3do9H4Pu6DvvY1Mq2vG2UAbBfJfb9x9ZMB2dbNxYig15hvDh1wwU8TmTKGzPwN6xSeqzZHcjYS9zwioEuaaURMfx",
  "key21": "42cTMXvoCiZSeTqxzwCteBpXJDDcbWYnceqBr2QUknverdaDg2Hr7xQ5svZb3xS5uVthwDowMBr8PxX9zymjngWr",
  "key22": "5iiBcE7x5fYmX96mu4st3MRhTqSLz59MTasQgEMEsp2ioMeg2nrxzzuy6cH8qB13MKM5w4kkF5j8b1Uy6Mwt8LLs",
  "key23": "567aHLqF9LAfjHtAEwffHbHo62xeG8PZBsAuTxuFdMXma2NEyZBsZyzWTighHCYrFqSeDHJFjh6W6KJJUwrFQkqp",
  "key24": "31c2PrjAfXf3ZfQPBwAkJcHdzV9mhsqvKBUWrjsk5WKVgn887U4oeyQK7bxNe1rgGENB2PvzRMcpqDA8BRgvqfso",
  "key25": "5RxurjAisAe7SBKsBFbKrv3SCRMAeZ71qrAhe2xpSDaz8DSVtkLkRLCA2BfwTW5MwpqWznPP8Emh3Mvc8KVGJucX",
  "key26": "3fcbHTScdrdNvCRTnKdGNioNnCkessL111QeeomZVnLUCnUW1Tm4hm9d3mKj8GKC8G7pki9N2Rg6kFPvH55WFxJL",
  "key27": "4itehoypuo2KkJDKoJdxCm29hRPoAhE1RDUDp6wAyZ8agptteZ4TTkQzNKJJ8Ac817rYXfM4HLUALUsn8r6Uw9dk",
  "key28": "ofb3gbTHVr2v3C7aaud4kPQC6En3K2mCu2vCgE8q8SyKojNmRBNytNh4atsQawUnRVSH1xWhNP6RZBNtD4kq3cv",
  "key29": "4AH8ydcdiJKaTTMeaK6kdnKovFxRyDuzM1g9DHdwYAKbAWnjoKd9Y4gPj4XVwE7CQSFTpq5vHzr3kVo5WBueGpBM",
  "key30": "3QNNGqTbVEUsNagTpcJez7ZAKZpJrWtDpyiVWNrvUwb5HSS7RVb1TjaCTUoHsJaU5VKMZTh1WmFp2tdpvtYzzjVx",
  "key31": "3VG4sf2qvpMdLo76RpqH1AL1Xqje6igHekk837EZE7jJRvJSbnRPfbRdaJihG2xHfvipvZ7tFgc3FxULzXeDZ8Su",
  "key32": "55LkXM9FBcNzJ21LKpXTPF2MRLWby1g6xpf47WTcNeEsHRtnR8B9cL2jqE31sRR9GLraBC7TfcmZFz7EBWFkSbBz",
  "key33": "4hagR9oR94pzHHPkfokw3zuGX1SLgGcRcvHtrCxRDwJpV2Aa2jjELWBDZChuK7X5tdxfnpw6baTzmgRHVQjSv1r5",
  "key34": "1h2sdn1uhzRx1im4JDRuXeh9SkUvdsbtQZ95VoxHsRYjs9euWZiCaRNpM6GDY59ejq7Jfu2rtgigrT3xG2iDQoV",
  "key35": "4T6gMZRF8v2xpYjtHNkcHP1cZU7ifjfuEn8bkAaBNTfp2i2YaFMT4bg8jNooZjbaQzJeDNj5bftwbH9D49gcQKts",
  "key36": "29QhE1XGvQLQ5uEN3z1Pdqf22uY8VFpvjX58fwKgaVaBX7m8QwUzyXxACPMhopEdfutAva6PUVtjp7C6p76t6jvK",
  "key37": "2o4NrNoLpjU7HiamXzfZctvMdvq3aoJzkYJy265D1yE7N4UzB44ioLBogNFh883xEqKTc2R38B8NW7a691oYgxpi",
  "key38": "3s9CuaRgrTni1jBwPhsiiZF1gNKFem1juqrLacCc48sUxDeSUKsBUS1u2abyvKgR4UDosEZ6TPUyZG6XAfWyGPCq"
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
