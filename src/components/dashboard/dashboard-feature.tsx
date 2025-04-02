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
    "5q7oPGkm2PoBAqo3zCYY4CzbiaeBoZH4vE5kzKepZDxXTcAGxoG9RTLMZkT9A8WvRMUhDxHSfbi7ETervhZ7XHHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eTtxw5t3EG8cqLNE1LXqUVZwJQQLzToKuZCADbbiEr4PByP3yPtDQExUwGmqihKynJ8cEsW6o1VfQDtFpCXVC8t",
  "key1": "aNETfqQbqeXwaVneq1L3r1qKa6J7BGpyToMZSsANwdbfYWrEJ7pfG78vVzMhy46pfLScBpD3tP58cAf5NNUZsoD",
  "key2": "3Mw8ZqJvVQyx11CJtzsiEp4qGsws7UD9E53BApi9GuDwKG9QNL1nehucBNBsatHPx2MD583ytjSkHh2ZLc4nFrns",
  "key3": "5y8WdwJDidERyZJpDPWr87kBXF8jSziD6tzHMUuAm6bBHQcT96vpSp97N8t7ryJEZpS8voo17vdWLGx7meSFNXBH",
  "key4": "643FyYu4yzRT3RgsPRHe5em9TakymVcYtfkcVPK8sLg4QN51Udpb7CUu11BdwhqJMyHcFnJzMe6hKpbgDRgp5Nxa",
  "key5": "46s6JRqLYg4BHeMrWZMeEYB31Y4MSQoEF5NqXN7FBekxo5E3KoQ4Q4aqDvZewE3MoJKRYhx1iBBbGsNG6zHZ2JpD",
  "key6": "kJZrT6DjqU7DhV6AR9aKsbSmS5vF9AiL6y6DG4AWWAYATru9NNsKh7Fi4VUn1xGARVsxSwBD62qC3vZayJKZUHM",
  "key7": "4D8H4bvdmo2xqcy81hUesLEz2JaAHAGjHUMzh9c5UJdTTKzJqP3fhkFsEZkytMmW7J1C6dogLNBgUXMpQNdFEr1F",
  "key8": "3ErntiVQ7kg3ttvjqMhBCWJUe7sMuMeB6DMMA79B6rtVv85TDi8Y6HDtjDQXq1be5DaGxLBWDWLQbffq9qbB36H7",
  "key9": "Dy6WATTGnPxDcv9X8ZRAWjhz6ejhSh8Z9bDeMNVhRZFng3mmA9VNcJgEbTBHpatiQd1ZsBwQHHKqDCyZpptXFFi",
  "key10": "GM3ZHrjHtNvC9umJyhpXXSLBKvpb9TTkLd7hrPfdunWUpwGU71w1dGvwYWqXM6yKfZtx1grfHsrUkoayz38UJsG",
  "key11": "3WUYRLBkLFna4eHuMrgM1SFr32W1HArWWxDFcftpZtVuynmWqBS4s2NSwcSkimG5hW8qerCMJiQoXSU7uEcm1Q8u",
  "key12": "3Y36uLmwqA8jnr2585npEXSyFoKrHAcBvcpPDdsCCzNT68MGrpmuYRLt377Ree3iEvjsRpbMVM7Tq4FvtYxJCKvv",
  "key13": "4pZ6vCoxGJgSoQHQ5uHHLbagwJPGjCRbKyVNYuinc2CAPQUstEwKd8FqmaXEvoTqhBxM9m6yXYo49ma2gkhPFsWT",
  "key14": "62f6QSM1cVdtRPMJmntaemqR6mp8WGpgvkYcEch4fyG8JWrD4rF7in6pCJFZLu2pWakfkg3reejLJsXcAnnvFYt",
  "key15": "5c1dJ479tXDzZ6VitRtaeSPKsVoAWGVi1jG61pisyCB6RCX9f7jgfgmBMMaTZGQi2ZXjAsTnC5pPursqtYQ8sUKW",
  "key16": "2LiwiKAdaVZcJTC1MV2r8QzrJSm9irujAEC54eqN3RvPv9fg1fRG6YtXCxHEQ5v7mvpfLsUi2QtaUWtLj48FFLZe",
  "key17": "3JpLbv4SfJUbXFLHCQheHjNDVHemg1eZnrzVJ2KmzZZsTSL5vAZg9JNAeQkkcKnBaHUaMdaJq9eVUng2yJz2MjWz",
  "key18": "3VEtf73wUGsTaXLSHkg61eGb2MaDwm8b7fwCTpHji7jTAqXYYzVq5yQSjCQjkDBgKynpzaxmFskSt2iYHa611Xga",
  "key19": "3m7iSBmAaU8QLrg6MtmBnNDWWdaDdWh9U8MN92yp2cpHsWUHXofbvDctkXDt6xtGbW3159Umay22qVN1Lj7hdLij",
  "key20": "5fBC4u5Yd3JVz1vELFNusVwWbaXPkeg5GGWbr2XWaT18TfokcHEFqTZqbK2d5k9dQwwMjnNhdVnxwDsKgThnPLqc",
  "key21": "3XVXugt8iK6c47Cs4JeNWUMarKUDb1RMdu1XRtnCARXGmTj7DiUyWmKEXMVv4vgXEzFZ99hQ8MuF7SME8U3PfcXQ",
  "key22": "3gyP4R6GEzAskF45WLkoAhCid8XNqQ35LQMK5hJckBgm2KCanKA1k5EcmnPNzZnouQepvAfivaefXYRzRnJTFwMX",
  "key23": "2Jo2dP2xDPagc2wRtvas92QteSXq2p89K94frvdyUYfAE7yXfJAdbryNxXbZDyZRRD3rFpGkwWYGyJfDFP2jh2Fi",
  "key24": "4NK8VVr7QyjZHGQKtr6YgBGMFUAZct372VzZjGXFwxxLpkAZSqj1gNUfwuLdJ6LX8m4e4ek613VGHTHbYk6Pe14W",
  "key25": "UdoDX4W3vkjDMSFUvuuZRqYUxjbqBfo5Ap6YBj9Yqi9QGcGwHnMYVF8oDNYeK1WfdFRk5uanBJzAXhkkZx3xqXs",
  "key26": "5nzFEsmBWmnze1zmbvzJywQpfisj52BjoF131AC42jRWt2DeuwdrEwC1Mij4Lt2r4rbnkvuPjATMyjXBgxr8KNj",
  "key27": "5rv7qo2UdhAekcvKgeqNNXMTAjujyNM94hJGbnGXX9YATFFtc9bKzPSDmv51eRpc9v1nz8JfR3ayZYgHx9NypeVw",
  "key28": "5rpYrXeoM8r1b85xHbjfDK6uxXMEFZDviTMn728HguzosLgb5WuXWwcRuHsSz4imbQcuCg3XnBRRFGDcBP6fcRoX",
  "key29": "31doEkk1Pz7GwVfFZU7gRDUCCdALjtrxhNdDck6D1XNezpf3nbvzgy5mNPbFqEUSgAYnKKFNgJ2bU6hV4yTypUQQ",
  "key30": "3GJ1FQVHdVQiJte8j2NUZVixbzVYFP3qFpyFbTN6XTFLHhseLtLfVtvGoyHncXJers5m3iZajTN1UqhGXyV6CrE8",
  "key31": "3Cj7L4uf9NsoUAnS1sx3TKBGtsxo1PMQPUAoYWbK1iiSBLDtVgMsryVjdQj2twbvzzwjFyRPt4g2RTaPS3XDkhmN",
  "key32": "EMMSUHVa1WHH2Jj63LtG67X9RumXSXEfCr6AxyD5Rw968jZt1Juv9UuFukLQmN8voEH2pYA7z2gHGRUzG1VuV1A",
  "key33": "2qLuTVnShJDvwzuAyYPzy786RVXhxhL9RG9KXyqc4KbhuDKYigS7vuqiC8apyG7rhJ9mLPwQxowGQMEWSJBc5WFQ",
  "key34": "2TMgVQ8v9oGmwjWbyNfGFounF78UHitbaRRcPw5BD1PLD6hEF4bdBPcrKmBdsUuUHCrbv3PU69sQj7PoQszPSMws",
  "key35": "3SuhkXdKYX5826krRmetuu4NzNFXn1ZSuBsLr2THhpQMDzEV2JuLeh2vPuJ1kuA5yMtGN1foq4QCU7CnKoEL19dG",
  "key36": "5yr3CGBEk4q9NXFvHRdWeT9dGNpZmomGVKfKv8JgdRUSJoMzT69M7isJer4NT8Gia91d9SoRWG5ztBpAv5Ru1pff",
  "key37": "v9TUwQr57NGFnnZN7W35fKWTzmJYnULCxLVkY5r275Mu246aKspNXhf7o9EBc6SuPxCTmvdpfzcr42asWBdfh55",
  "key38": "5JcaPFKrkxREmProeQqoA2HQAXJ6zmmpSrAqLAQCUVPdBWt2jbngyXxGTw71WbxrD9a9aajiBFcc9WXdnA7L4ewD",
  "key39": "57SkbSRcZRApekTcd9n3U6rHMcZk17rnyF2LxHNsWGE4gedQRaTT5WA9XvH7YfYPpKXtboV9UAr6vhSmo38AJQZs",
  "key40": "4um9b76y5JkTd4WrRZGHrdLbTXFHusgmABwvSqHmFWKdoMwM68efihah4jhjno7nQWuX5bTHaW37Vkbhb11Ey7Sz",
  "key41": "Rtxoka7iyjtAwJYu4WegmSxy4kkaw7aUT7bMKD4A3uukqDjNCpWCZuuTZYYe1uzQiUpaVg5cMF11ycFsK7x6kQj",
  "key42": "3GsyQXcMEXYbDbwmPYt4PX1AhzjjCjz4j4ewRrmfaiBpupknsm5Gmm4dNWQdTbzXkYdHN5dPWsngGJweYRLjeuvT",
  "key43": "dYrqUzjcJKT662dZKSZYG4jAcstkw75mQsmqg5gmZSZmaniMP1PKTkojt6Td5K8MPGv27wTjW18Ebk5GGgZvw6i",
  "key44": "5Tv1m8EN6AS9vGkdeJuBE9PXwvCxPFzR7e97iM1okBDLfB9YbtHz2Rdbdh5yAK2eys5C3yjwNtpv8dRszmAceMxT",
  "key45": "2rLcaJw1XLSehEme5duEtLqMBHzRmiLnt6MrahaKzj6c33erZZVxPsnDmWhhdfDwwq5QuEHt6yH7mWpMhLZ6ZYy6",
  "key46": "3m5thYRZS32aG1vSFteNPeKGRLLQNS2BzYD6GVq65PnirT9KcRPSQfcoVPQr4voqRXB6es2CcaaW1gsu5f6y7UWY"
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
