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
    "4pV7K3aBNpsVucudeF3nFNBTiWgxsMTEyqCzX4XYSjwmjxU2caifkoBXmRDax1QZtr4tmPD2sXcLD68dqnFHi46V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ssf7knCZuQZv9FZBah3pPrK8jzFEc6iLXSg13ppeLvCCcCvp1CHxantJfwvQFkKJtDYmFFtzhgRdyxk1ygWRAt5",
  "key1": "nRVq5bxaopNKuwwwZEAEHL4CBKJWFUqML6SR1k3WsCqAVB2cDZoB3CVjVEBJndJtmnLyNtJUjpKHkhTiYijX7GN",
  "key2": "4HQZdRohSq1tYgFFZ2LbQUWcmBsjX5tUWMS8KLHSkpb6ZXFtB9GGbxf1MRhZMLcudJs13WVwsqWbuCUCpyNQvUFA",
  "key3": "5kjZML3VNNwZdrGzX6umo9LNFqXPjvj469hk1pKWGHPYp1KdYyDKcQsa5TtHJPRA6G1PRRgi67Wcp2PBqzNvySSy",
  "key4": "43yyt4SRhjuttkBqXCpsFk5NnjhZpS11F8rPyoopxt6DAPWxTbTURAcT1UvNDJjMt5VYh3uDeMkNBkZRoXm7aRzS",
  "key5": "3JtvqwxoAHE4v63DGuSZXYXbZdsF96uGm5J4A6MjQFsG4ZbLgsr5h8bdNgyh54U3r2JjLe5CBLmCcdvLw9gijzkS",
  "key6": "2XWCdW9LzmwqFRoN8csdTiq72pZXSfV2YvP73179W12xrf43NJtawte54zMDu2BreJgEu8jwk9dXdYNdyEKgfKj",
  "key7": "3kFS2fuShFwJquSThC18hKXgUFqVicVPSfjuRbdhUWvWG2WXbsK4qZLy67S3tik9bSvFGnLhSDvLTLxu5dB5mEWm",
  "key8": "2vLAiS9oRjJ2buRHqqMSWMaNRb8KG5dSNkNaTKcjH1ToEebNrEigwQLGKkMErXWobgv3sPm45up7uY9W1zMf1fS2",
  "key9": "2rugrkDVRgxts3KVZp4LnHX5GvNvjJP5oPkxquHsrRMcGGaCibg9KHURWVpw9g6HdPCYaSUE5NiCTDBWQu4vSD9S",
  "key10": "2bQkHJeDJWFhev5h5zqgXCYC3sCh4njbBgNHPzoYvoS1oig5cAaNWeZz83Ptip5usUXoCm1T5CGuxitdSKz1BGJ1",
  "key11": "4RiatdHTkJBNtXN4wHUgSLCSwbpLBjXo89Gs5zcZdeAH83ukEQrW5CCSmu1VhfdAosGtxXrH15mZCQnWnRkNLHp",
  "key12": "2V3PyTEhMUp7h1UuMexViQSUX4RDjUMStjKwipJ3mM6idPa8etmrX6TYTv1o7229WzS5JEbqnN7roR1CGU2rHMz5",
  "key13": "59secxxfpxy6exgQmVKVYv6NHs71KLNiYNxVfbH6ZXBfDzR9HZoVrp1kd7mgMc92KKYkbFMd57rwQNPAvxQoh7TY",
  "key14": "J8LfMMe1AcWWtUA6Rk5BjKbzU5L9FmSFz6uAXKyMsnfrkcXJFjhM6HXYRCdnzWXuHg5vQb8RehusYpjTPrus3Kc",
  "key15": "288nubvBBscBXGesZ63KvQgDkE5FqC3h7nNQJZSGc5NvmMVtajWkxDMcnujkTonhi4ygVbWjC2tLj35moxjhyaUy",
  "key16": "AtaRJ1SXjTkZVQWaTmHeUiyisyQ4Jwkjcd9jp1TA3Urjo4F2fiPU3gjN3ioCcrxxdjXdoCQgWwQrKZDBQkWGXtt",
  "key17": "661DSp1GLkdYCeDvVxkdSYSKGAboTTPkPTtX7An9Ny5X8LdxitKgLi3xLJBgsMDnBWDMP9YDz7S4JBV8dcRmGwrS",
  "key18": "55nSmm25TQnnj4owJ2cHCh3uWa4VFN8YhCEYRNA2xvwqTASkESc5aQZEPquMvLQfURV3FyUdn1LVtxxn2oT8sE9k",
  "key19": "4GSrFgiy9UeQg7TxhsujEgk8pr1NAGXqJ1JrHYdrpCjGJ6J7xqDf7ZErtECQYUVG3vcKWjyrwRbKhxNULKdC6oxi",
  "key20": "4vi18uPSX3huCYtans8a8kdGAJRQWu8fA4pEEbXCS2rNPV7gPN9j9nR52qnyE9PXiN9NC5zFErfUD3StfZA645yU",
  "key21": "4Dygv9bG6CsQ5n7EcGGhxFofZSQ32EaT1yu4h1MrXR28FWbcfcC7BF6Ms3AnmaTzCFJ4za2nvxHLer4qLqLZ8B2a",
  "key22": "4JaMxisr7X1ZrmnkAaxGgWKq66wvNCsJ1h6qU4hXH5dwhW6JJf9w2rvC17CKeWs7JW9WG7V3VdEWi8oNsfTge2m8",
  "key23": "4FkqgPX4HpbFfmfQU7ypBhZhNTcPvRDJ497NqTHpbmL2WLPJNhY5oqHJb6T15gFFh1oMwQHsRWRWTw8qzs1N3PNP",
  "key24": "55yDbkMQ1Yo4pKjrWMrQrce9kHtjGjeDZ8qPHWNyDRBZazJBSrmpsSKMKrzJvjAuGBYfe1JfZSU6pHJC37FvAWxV",
  "key25": "5fW22uA9L5WpMQ2hQ5wFPkrU19SUzMtkcvf2ZPWhKqBHNBcK83YkB4b96oMNr753qyNMMRJQCJFSSYU1ZinfB7CN",
  "key26": "WwmLzfw3bGyddDBs7AWq7jqZBzctjhEGNzkzaRSVG7bsecghBuBzwyUjcHefwiK3H9z4cHH1RdzgLSifwoFUkJ2",
  "key27": "2oHjYq3qVVPT9fTYjCJF7nGopcp2LajAEY8BHCxKW5jPD7TSiXZ8Vn48DrrmRyMs7hCAT9HPhEhCbsqHR3ya8wiL",
  "key28": "4Qv9f47wLALxgL3KeG7uykbtMPiuYiCVjxg6xbsA8F5KHm6VRBRJ5LTiGFDpYyvSf5UJpykarcWjro8swEoYQ3S7",
  "key29": "4RK6DDgKeSdQDndGMfYma1oMLtkQ9oEug11KmBmxLsBxCDg6H1dMQnMo16gmo2o3gRk35Dq2tSWEEU7pEwPwD1F",
  "key30": "4S75eKGhK2KdifayNeWNeWc2E4Gc1RZeJ2gifwMNW2EbzN5JnoYDJEtsJrADiLJ8JyKSMWpHRfndGWiQtfXEteuY",
  "key31": "32tfGdQaxBam3Xw7PDkuzcfdfb43qJWC4CsUjQU1XjTx6aFybDkiBf1HZkBPauV4ojjXApSeMifM95KetiwEFsdF",
  "key32": "5eLaXE5FagYLa1jd2cQb7dKfDXPvMYksxDYfdwZ7ELtDziLAynmDyaaCKdk39QnpMyi3V7UouSPZjCpe8m72sroX",
  "key33": "3HDtxagMpBNKtPF4jTbTdqZSLTaWB5JHgpgfRsn6KkHwMQXMcsP5CnCsxzFe34dKNKFzSdwzKhBd2BwAbxNTCfnC",
  "key34": "By33tUFrvqQjF27EFSHSJtaHwEv6pNLTsa7Bss4HKrPgm4Lsvjb7bhLkEdV4KeU9RQkhik9L4RxBwsxtSuaQyjL",
  "key35": "3xBtcnkBCpPMwdvS7j6RjeAeumnQ3CUoUFeX4tBPv1g12UQ5iwq8LhqNazyzyPf8WsPT1fTfWLFy4f1zw73M7CQx",
  "key36": "2c5GgPyeW14eqkKuN7QUbE4dpm4n2K7gP4HnvAAFtFUWf1kN26PtFhXEYnVm8s1qu951svBzoVwkyBQLgLexuRtb",
  "key37": "34rvWytr1hmbVf1CA8xprRHtP19UCzTC2wwe9sCeEsLej94MDRCFjSSGk97mWPNisbp9gQJq9RujcjPHMrLZ668b",
  "key38": "5BMbMJNK3ny2NeV2rXMtr4n5pk5SKvXwxwT4JXbtsSy6ybkGsBUfjM7ZTu32FgR3UGzBAg8nEjDYENEVgtV9f88D",
  "key39": "4ju8ewcSGXvLZDAwLBRgb7E54FhYZJhHa1u6o3sCi8AFnT4YfDtHdxbKjKDooBDxc6dvPK1sfe3vL4gyXeCgcvaq",
  "key40": "gTsN4oMxRqD2fzrRLxqjEq6WKpktYM3HPgaFq8fjyJRggUJ3HYsfnLmpB64wrDFPDdCBWMAsuTLWhm8t8xryKo1",
  "key41": "AT4W14D3mSZjyZg8sANuDpyZLM15prRatoaPqR9dDLArPT2d8SeBfcg5doQbfnnqY5rd5FSETvj6ay67gNJ1FAP",
  "key42": "3KYLubXRn4nF1XqXKNMnZRdwtzd6cK4TV1ifBnjgnYskjL4XgdnTv8tULaQKcsnDKHJQTb84EXhFhTTDndRajt6w",
  "key43": "3y5fTfMHVcoUB8YhCMZd3vqdZ1E3VoXafDLcmvr5cYFbornAVFPXjsuX2T6tkjbLs8eTyJwtu2rZBo8ZHQtPmUvw",
  "key44": "2e9ryTYEA6DT3NubwawM5yzWR5FLQoht6d6655uaNbapZH2RYJL6LKENjM7j4SYYNA4gsGv6kXf24XcZ4qyDEjEF",
  "key45": "2kWw8VewkPTva2Ri1YLquroRNuxnGFjYLGYNbvqd3Nn5naZ31DgDksRVeyr6YiZ2xrs9nSahKSLYdcAvWCCjV31T"
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
