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
    "67azXeYozxwAAuC3CY8KXdaJewLSruDX7yDsqr1nWdTP1QHhdDXddTEJLxvUeTfDsXrEeiBZfc87DbQCKYJ7tDJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sL8ovvak3xXYD5DVJa9QaqQ2iR7G6DBNguMXBJncX15T3BmAyXBN19mGzECqdh6zGnUeDfjvcAE7Jo5QvSHXRrB",
  "key1": "2gcQ6DfUUkRPrJZFKZuPv8G35emTANezd9JREN3jr18JPSsmC11zcwZbV8wUUzqDnGsgTmhAPKP3MCDc3uUWFwHu",
  "key2": "sFm4n4mLv5wo1KXhutryK2Zfn869Vp7RGXZBkFYU4nu8iCNpix9NerijqUxiGsb7F28mFj91ExaDZAaFsXZspDv",
  "key3": "3xn2TyWswx679RDxMs7nsxJGYa4x9EFysLty6etunwuuBn4Xw3T7zwJymjuPkoZNrFtyStAyGNottwsG43YTZ3u4",
  "key4": "JzihTAikgpxrBtX1LEcj8f4g7CD7JJ2LpJ2VvkZ3JGvWYDsFzMdAMGjMAtqFQSNHFmKeMYWT5zeLWygwH9TXzMV",
  "key5": "3oMNhMNC3sTjwA64Gp8rbHBN27t5ETztvrgAzS9iKXzKM3QF5eZDfU8BxNDK95YpHuns3NiWEiYaXKM23iXkFhZZ",
  "key6": "2ET2ZcGDCxHfUY19hPcWKGUZhWJqBGXXmXqiBxEpRYfJvznTQCr4UQuo13eWY6ZGzwHdV6gt9QbLaFm2Nmq24Sf3",
  "key7": "3cEZYegvkch1kmdA76EVC5PeKSin5rUKZLL6AmaC8Wx1tRYzBq5iHeBTbHquQAbGB929NuygTHrFJpw4PMTAb36z",
  "key8": "mj9UHsnUyte7FEsaEJK6vu59MLru1XtBgvvhzx2Ni7TjKSynntdxoNjytn6czE6boCdDHdyMQwUfHp9qbtNaY2m",
  "key9": "4egx4RBuS2CQd7bJ36qkfj5dS3E31MkeGWY8uevvDX6SdDBnGA7Ja8XoRiVrEmoMjHtkME8V7WQefEnrWeLBp6Lx",
  "key10": "JtQGYfzumuVaTruQPtkb2LSABahivAhfTEVcnw2HnKDGeuygUpheN4vAXuDuJbdohAgG6eK7AqNJAxr66EcFdxy",
  "key11": "5iYXE39N6ZjwcTK3tT7HP7DUxN2bUUmMeRXWpt2ab5mm8zi7uyagUMK5Vv4fMKjCoFr2Prpqu5JVstX2mGvMN6so",
  "key12": "4JwxDPgemAVuCSYJh4xGrC461uN6uvBeJ2s36kL4hi9voWLT3B6hcKd7tMn1ffQXQbPSqof6vVaT5DFBTBsZP7Jk",
  "key13": "4DFcsGVut4Bn1qHignU59EgYSZEJKAhA7TnubNd1HUwkTdeA8F4uBgZkvU18x2GxWw93coeSJSJCwJpySBCGAp3t",
  "key14": "GfZJrULLCTFLpAqJ6V2wL15qucFFX5nL117uC3hzFsGn1JSWn2Hrd1LSKsSK3BXUbDJyrLiDCehiEVAx8Vr8Ver",
  "key15": "wgcGvJfsLP3r3Cxw8bs9okXJrtm4fxpFpPHf6xxEXcCZs6Gq35iZ1syQmvuVQDFt4CgKsjbYTpd85CyX9gqTD8L",
  "key16": "3TZ6DztfbHs8w9Wq2G1fuZknFhDPQT7uUE13KgjXczct6W3wXoSJQaSTUnwE5jdkunVB7K9kVyNQaNnjespf3qBP",
  "key17": "4KCSJS3vyF6zAWA5qnfwEroqANyFDHnS4rXk9wczhLwMAm2NHvcmBL3G9cwEX7DwJP1ie26MbAD6M7T6R1b6CXwC",
  "key18": "4p6sGF8o6PiBoHJkbgjbutaMTFoSTpFrcdwnjuS5JxKRxnLwTUvZxarvnCkHLLd7YtPtCHVnWhRu9dXEcEvyze2k",
  "key19": "35nPBGkCzV81wnJFHWGrsNs3f5hn9d7qTqJBM4e9qk2dTdNoWNpMKrszaf3dV7u8XUY4XMEYPDJD58ZXKqU4KNwi",
  "key20": "3aZBDPoGNjQqVoQhSs7k7j3bhYuo8FRUNk5FbRsEcMP91cbAx6Je1zXkBeKJYGrmuppsuxndUQ271BqqPkpqmbXy",
  "key21": "57LifUwgZesJAyLEuWLvP9BQ9YDwHwoFCEEPxC4vxFuGKDuMBFngbRtiXpwc1AYF9eCSD7k8H47f6iUTdn9KP1HH",
  "key22": "1J48T3VwczBbGzKaMjugd29SyswkAmFq7vp83mp3b24Jj6LcSfv9xqMcgDt7SC8BkvwurC1EJqTq2QE7VH6uRHV",
  "key23": "5s1342f3XyPLoeTjHtJaHEEjxapTmRMX5RSpG4GX6HRHY6N9BkVwPvfVT2W713cxRTiYrZPVEqLNdSTUW7gky7X2",
  "key24": "5b4jzCkqTcABKsPRamsRQwaGD2kBscNYdPxVUyArCSKwUf45WwPZYurCsHhhSg5FowLVDvxwmwGvbhECgudKjDPb",
  "key25": "5br5t5qC4281jSvzxg57kxXzKeJRzFxgYfKKCNZ1h9tSshHT1nivHt6Msb8Gy9ihCgVqQjGMBuVXiLhDCL7DLfsp",
  "key26": "3WLuoC3Agqvi1XFoZCoyYDeeehuaJSMYvXzCojkebayybrkFpyT9dVTMF7U8LB19EAcqAnhrJyBpMNHF1qD4YgcT",
  "key27": "32p3qsZopGNmfefzFH9ozo1ePkbycgM5ewDaxyg8r6yipx6PpKWzV5JsKgijNk7n8QnrLsMyF4cfMb8GHgNsvaJw",
  "key28": "2u23FuCLcox5u4UeM415HHwBMJY2DmJ9vAnGHYdamhB8vaxijjX8FnQ2P79Hi2gFRFaL3tDuaSkQTPordAc14bB5",
  "key29": "j5vq5JwsyN1g3E6KETddp5M822xHGE7yDRJwBw1nnshos3FXTqQSJFBB6ZXWz46kgkuvL7wpYjM3MA9RBep6UFH",
  "key30": "dVqJw42zg3ZGRKjjEPWwWmiTp6JLdZu5gwvbb5Ab9tJkLMpV6yzm1gjmUDhD97kqTAMkuHe9qtjXEfrfD1SL2uS",
  "key31": "3RTwsqHR8JxWjV6mFJbt5kZqXJMGM7xZ4y11KqdJnuyLAuEB4WWV53aHkH4PDfrCsGZnxQd6PFmekZH5kJG2UeHv",
  "key32": "4XjYbjZ5xkuZ9FDXNrVj1FgtPDF67VxuZuUPj4uP6j3gBU6VAZUh6LizQ5nJyrKLB3v1e45H8hsyHaaz1EBsyRk3",
  "key33": "3FHoNq2AEFyPRJ7PtfnSmkM3aak6n6LDQWwDR3Mj47bSc4CUd6rqXWoW2UPAEfY2Qb4bPT41ashHiHFhujjmPUXp",
  "key34": "94oGz1ev9LQBtVZMvksxwn3N2pDk46CbwepYPqUTAPwoLz7zuzc8Uv3sf4QNXtebQPYkRgozhzVSbrpk9cCnCR5"
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
