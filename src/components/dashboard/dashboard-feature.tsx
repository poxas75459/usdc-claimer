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
    "4AoJMS5LiZ2eFgneWCUQcm7ujQefa7WenM4U5RYxQsNg4TuoF8UHLfgJ8AURb3HgKrWFLek276G4dRNUrizM8c5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zprcBjgAuDV2WbWwtw9DhHrEhJnqEauD7uFjRrggwrQV1haFMSdDzs13dWsCx6g5n7mAtWCdQE8Mk9ZPRksrULg",
  "key1": "5UdZx7gnvtGutQ8EemfLJw1qEYEquY7nSNrPntNJZbMqHktnByjefjRMaxCyEfTVBCyztRYbJwWtkafHodwG2wwd",
  "key2": "5yGxo2EbK1ctzaCGMGNtZxM7eNZ1x9UNHwMjEWtHoVR3sjpazMaBNWQ315YDPnAVY7hD3c4ZKzqeUGwU1mLoDhkv",
  "key3": "3hiwvoWJy5Sr9HYVGqm6sxkNvW8MLQ7RKPTaYpAYuX4g14ASuQZzTa1r5fSGjU3VejSu5hfsPnAMGm8neYDkEsbu",
  "key4": "3QMgPeXuwtnYxFsuRDzPaytWBL4uzkXb39UxuVFVp4TwRiMD54FvBz3YwBX5MXgqnQpysATQeEsm37ao7qmnCmJN",
  "key5": "5YTYZHero2thwbu2GpyB7Npk4jyC69mijDpsQbE7thdXpwiz6zWiLqNqP8BdWAF36bUskj2wdaPPZ7WKUypsC1eS",
  "key6": "5f66xGcujp5smXHXDMgS3Qnk7DpWMEuwVp7tRTMo31ECS7FWQvz9Kie6h1ZtUP4FNDs4g6PF4TFT9ZWo5boBfEwS",
  "key7": "4PyPtg97WmYzj57AVkPjnuRwguPSLcEkwodZkmVnNVZeN8MpDAGEMYnFwNWzNJfu8hW59N9G4wbZphgsBjeHoToW",
  "key8": "J2Y8psoUGjcptKM7nZ5RcE3FbeXhEYcfdr8iTuKPn5NWgccbQJz4MqedM2LU9kEBCRAbPqBhRxVJs93Su5LYsPv",
  "key9": "32DSLf8MuBJcu9wwfngDhMGu3YLscbVDfs5cbtt3FgbjD9TnDqybFNwGDgm3rFuMtdyFGEu91R4fwY35BtEnZpuP",
  "key10": "6521y384qc3VRJ3xcADcc234CerZwWsWjhExydqJYe84XZ3x684SS8bD1Y3KQtgnPh2UcEdct6eZx2AoeMrwPVt2",
  "key11": "z7MkDw7fFnAMErGnzqJV89vxMLhpwudgku6pWbSHfaZSwHmFf62toinE2mJeUmzrfHesYToRVX4giUGkA6NAyHc",
  "key12": "4DjGY3EJGVRABcHFgzYNdAbhXgxmxRwQWN7YHG55UUpWL3sPh6zu6zb8rqR1XwYCzpV5H84ygRYgDzumt3vZgY1g",
  "key13": "3Fto22GDSiUqUFKsuuLjMPUBsGKqmUZUMYTmZCr7R7q9zR22ezV9eDcgAgGJYsBy5be9m8WiAHdZqAii2EUxmwSz",
  "key14": "3jYggDopAEPdHbidp18wLQQpnm4fpNsftw2dppG2nsDxRy9WHQKEV1LbJbJbWJSCXLJSHWYfhdTFntFbYU4trZB2",
  "key15": "zubcBMQCCL3b2XFdy4FbVrwTJaGCgccWbqQ1LHKadw1J7W2CimnEabbMZW65u14wQktMMAFiDPTavJJCGGr5Wm8",
  "key16": "5E9EotmrJD2cRQF42D8Cco9d5cDkBCp46Mmkd6sTaWDGWMwNCU7wZBNPLhiDqnMRHtgTSR4H3dakbvwxkteQmX4y",
  "key17": "56R8QVSzGEL7ZRqPBEgDsC4hktTbmUC6uLn1tJM5vG4DirtFG74Jt1ZGcVcXPhb7Zt1PWG56UU4AooQXt8b59yuu",
  "key18": "5o9y9WjYdYCwDabjhTJa7xTVCrejy2z4G9xNiDrPeiAv3jo9XNgsENfWmHZFh2djzaJ4fNhrNcqFQEPwe6ij6kxq",
  "key19": "2ahvcD5UtL15iu98xL8KH53rD3C9BZ5LQK4Tneonjt3zeYJkVm3mzLJzRvi63JNb1hSo6AkieYtRPqGtjbVQCqQo",
  "key20": "3LX6AxKbtGnbHFHcbco4pvdoYyyvwPhwadN3FT4QbNywjqonRLUJw6575MugGoizQeLhPopd3CZVMdJEt7KTMqYZ",
  "key21": "2wUr6HN9zSGpV5TKQuCYNqVYvTdKgWr9wfDu3LciGv5a5oUuGUBMZUhVnQcKGuotHfEfuLb59vqprp3kBWCyRJ8B",
  "key22": "3nVU1h4VZDoXsX6xuV22PwyXqYC2iV3fDKXLVDNnfyGtF9WKGsKgMizSgZnfWhpdLYYMEtZCox3Cmu5HV3uxccSc",
  "key23": "49BZUVHMMqRu2UKeF9SXQxdxDok1cVGW75udPT3bEcuosePrQ2JDnMG7mrdJBvpb4EeVsZ6j2PEtTKK1kUZ4SzUX",
  "key24": "2EHKBWCGi9xjD88CZNW6LUdvd6jupSq3wvYKnUiTrRQgL8PYih9C8TeQorajKr91D8FHZfN4nsptTb31fSmWnSt5",
  "key25": "32ED6N69j2ADENtPBAZUKPYTCXkEZRRXaoxV8RsznA6iGNQ9JnVU7jqxm6aAmrV7Zw9gBDKiDuqruSh4CwsHLy2B",
  "key26": "4oNU8vwwpXD3BzmSpuNn7dr1M3R16VXkgu1jJokqCNZANGS4LgRrBaC5WqNypcKS9NGGVaZpknAmf9djwdUoJaYG",
  "key27": "3DJW5kjdziM5mQHkiLZfw3kx4WtY9evsUKwaA9ETkKpmmh1nP7mdRhaCxBdUvQapmnLFzP4hGRytkA32r92SnmAT",
  "key28": "4NT8fVfGFJwVpi19wCAwPbdJzUfZWQ12aKtmb1S8HNtFUBkUNavKFZhrEMpTeVwzs8GRnyEhoYEsW4TfPNDREwP7",
  "key29": "45qd9vPY9hRhz1FsAMZ47rf4GowKp4hJ58i7aVKa7Jq9pbD66P7nz9ck9cbAPaFE9PjGHEpuwjXDsfJ97CAnahRC",
  "key30": "2Dv1fe4ZqyPcJWQFkswaoNikLZfKVV7PXvyNJeQ8k1NXJ9gzmNkGW1NV2AL4h8LTypL6NuEDYuQxhq1NN5GhVGap",
  "key31": "2w8nBPZAfWp8VmmVbQH1Sq35gMWQXyEwJ6Kiy6nCSNrUojuWHXWkeJZ6hZaaCegtTQjQQ6RLE6ynGWapMmTNY9Ln",
  "key32": "1Ga5tuf7hFChfL8QYzRYTeLSyaWtBfK4DQxPnRJF2tekkyL6GTwTJjsFkTGhLqxo3NNNV7mPEh8W1LvzPSE4zrv",
  "key33": "8tD8tD9BxyUEYkULi8T1kXfZwrQzCpMkcUh6TBiX61YZJegVXnKxbkx95v5Vp9N4T4Au41hm2jH4ks5hHEFcsNm",
  "key34": "3X7PeNwfbJsbXBrwp9Qqx68ZBzUpsGEFgyXKzuE6r6tGFjrH86SoyksqQLFPdEZBK2pgjKEfHWjDcexE1XqaFUUw",
  "key35": "3b4eWybjvLuyyufdCh5QXNGMKiivz79T7dVPv2qJUYwFoHvu1d2aa8G87byaNeqavrheM2ywRbrijHmV6eb5G4qj",
  "key36": "21fMGzUxne5KDcsizSLiXCfBmx9y4rj8MFhGPPtymJE74UZ9BQwkAaxX6ntnxxUcrizUHag7Y9UYhJhv27GHYqCo",
  "key37": "5RFkEV3mdeA2uUCTQqxwJJSJAPpd8ydZW2QBk3Cf9HjRNcgiaSzBeuxG2PJ77XcBmYa9ppB4sWBMjb26xik9vzgY",
  "key38": "3idRYxvozXmprs921fUPQrMCwRHydkVakkuRLuDYgyooUKDQVDK8XAGqMqCrWTPdqGxKEADwSLbaxhmt38qY9LLz",
  "key39": "tN662hdJGgLym3su3nL5KDZzKasVJRqTPFP96fmYX3W8R2ikAGup3RsD5JP466gJW44jbFcwEoS1gX35Bd1bcXX",
  "key40": "52uAG7kHJr3jroL9n9B5CjVDNtMejNVFk2pLH28iKKDTxNyvSJe7oR41VBXjcQTQDTymp3CbcGNca45p44TNB8vC",
  "key41": "2oK2yRBsc6ZGQqMcumtjrnPHi2FdESpiyoPEbQLSJBSssg5sHmgRxzK6EFdcSVEPo9bnWxYiDaPaaoHaf5hEzG1f",
  "key42": "5wzLVmS83XaLF19VUvA6LuJvU9fiDKg9QUF45QQsrspDCkhXuSesgQBPeNnCk8MFrtvuTyoXaAdqojnPAKy1d66u",
  "key43": "4EeH8MdyykYLygZuyfYZYLwgiuk8N9xNSPspyuMdvtAEZKZETUd1fuk7kAiqQh3CtY7drUhgcApsX3vzJAVZa2h7"
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
