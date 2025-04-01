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
    "4Mx1qLD3HVqqDpjqAgGwXvS9uoQjUJ2XrLy9dM6Ca4ZWk2bSn2pge7xuLpWqGpwN4d9vfXoaM4GLbWdp4t4BhCaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PWbBTELn38yWVHuE3gH8owWWha1EWG2FRqfCFn5Ab7oMBijHeHSdzJAummZb6w4WnujRu8hJsaCokEjGiH5bWp",
  "key1": "5Sj898hKV8baKEJpdgXx9BwaEpf99uDffVZQyLuMxRCbFN6CTAjWDPb8N1CRzr9pmseXVbj2J1sWTTh3xejynbRb",
  "key2": "v7b151aPrcVYo55gdPfpxypg67CGZfBDZo2MagiuFGSxLp9EcLfc4zbkoFqcdiQZLUd2UwEEZJVjFJD8S9TRcH2",
  "key3": "4KiAmGXono7THKm592y3gT1vWNd9f7ZCTdCAkvTk6LLu4xgMWATbzsQ87hdDBdk2SEzYESvWyzjDzZm1SQonVmk4",
  "key4": "4vNCYdUz8piAAgvGRNmwcY8tTA7hyTM87gqnDZobCcFiiTv1m2u3doXcj99qDuNqNXEG41sM6ghRTcPnJBZYu8X7",
  "key5": "4KxkfTAxwyJFFWQQsJswc6KTi156izb4HD5p52weaa8KpVYKYuqrXfnJS4G6F2RMftytjBZA1tV7WCiVjA52tVD9",
  "key6": "2u5mVPJ8Y18y7EWb4VU9jJdnb9qLoSZhDyaMKdWnh57m7dntJL4E5TghRXMA1gx2wNH6PEZsBqdk5u7K7fURUW26",
  "key7": "5vwzr25Crmp2jEHSXxFTqFmWPsfEjovweFdqHPYUiHrtvKWoEwf6iYuvhejZPt66cueMCwm1zyTu1sTAV734SHKS",
  "key8": "2ZaKYqwNdWvfTiUX9uzGmYwRrPgcDKyqHXME5uoB9AQXfm9Xjz5WSmk1rtdv2GnKzZt5zmCT3SmAS85RvJbFkcuw",
  "key9": "4QmmZrpSTFK6jSUA9fdJzSkhjgrUjGXzi4r5aMhGV2bQTEk8zEdMRH5z3Y8amrgr8RnG3cG2E3UtNGGiQJv2tdqq",
  "key10": "4zzNSvwzupeW96JreKZ1Dh3h1moKGTR5s1m4tYmpU75ji849bqGmNvMkYfbZN6j53tk5qvcZ85BLqNrf98G4p8uv",
  "key11": "uPBg9dVFu8PLrv1uU5ADo5RAhCAANn2ebzJkVSzKFHQChRBj8fYh7cqrtHbMWpNhaSC5F1XuASAoKdRM3aM1jvj",
  "key12": "5zzxnRwuANUZPM3SehzmMaizb3j9mZTEjHN7vjf1Z9Y7gtNUqpXSsnfBnBDEHDNnVi8upy7cByjomYBvDxGkxdhA",
  "key13": "5zsmo5o17dmKZGLRSKmH3643C9iMzfrwqqSWbF7AVQ3AFLcniKbfhLiaNR49V1oNmKG6fJqxZs1bdvrhJH7cGg2",
  "key14": "3gSSwQTR6rcmX9j9QXcL6xvYgJAxVZPRiMTiBfrWb52N4nZfU2QMLMJX4EZYwt3mf9c41SY5NUQycBpG56bXX45G",
  "key15": "65oLshyfTyBHEthc8neETGxFa34aVhhNfF2FmofZ3WTyohS7sXnqit2uuYARMg3uddfhmAxLvLCa6JQGqbZ8pdUz",
  "key16": "3riXL87D722GXzryJNQK3SgJNQv5uSkAaFmrU3ai5CbBtaLfs1zrz8L5YGNkGDJ6QdnHcDbe8JnYJPjW9H7G6Gdh",
  "key17": "4KTzfNqqmmuyQ2zFWQB6ddJiY1NPkb93vfbvYDM5ttEtvq9cyCYp9NSUzckMoiNZiSDSPXutbMgSNNCiwFTQuscP",
  "key18": "4mPrDBRJNGUm356nZieTRawfchBKHEQFjJkg722X7iZTegPw5LwHzEz7LnxKgi7NqVay4WPfPuqkoq9zuEjDCnpW",
  "key19": "2rutnYRqEU9L2a8BDhizU7VqWK4H7KYADcwkkSE4izbQ7AkTUqdAo99i6pW5jkFKg1mz1JaDkMEaCnnvV7YuU5Y6",
  "key20": "3zew3snzwYXj4jN7E4pmbdTrAt5hupkanHz3oZZCXKvBFAZzDooTwKZCAHpYBv76bWvDAix6h3ExTsjn6p6xWeze",
  "key21": "35E3h4uCsDmjsTi65TLXmvgzVx42KjeEi2RtWCcEq2zqSnJ9NR9aU7hHmaLwf6jt8VFjt5UusEceDfXsMfS8ahFe",
  "key22": "4VmFHMjbLWJMkx7F2nLrhXmdCKvieRdXwrzapo5KzQou5Gi6aYfUN8BKJsb589d6aGjUQU7nqBpi3vx1CUTzK8g3",
  "key23": "27AhBN8Uept3NNhRcrxVNAaoZgfpi7RT2DG13Tfr7w7BtqwSW38S7NZHviTkZVihUnhcwTw53Gg1pKPPGRGdbp35",
  "key24": "6bGKPWpKbYZPEnc8GfpKvy8F8Au9mizroAKToozQCztQ6sPWX9HmfZA1wJtgLgGHnNikEedBmfwnVzTBtEFZr9C",
  "key25": "2GB7MNtiUkEwJ1CcXRribZPpuBwJQwTHvVCC6qe1fnJ3wBp8HG9kVgtBn7xpHhuoZRQcMpBNZPAEkZHyNemdzhAx",
  "key26": "5S5H9qoDxKc9P89Kr8X9ymdda36TCKjBNG2Nt6rCELCSgDue1Cv7SHZ8S1si1SVjwXuUw4DY1Vr5m5qq6EzLU8ws",
  "key27": "2tfWAY7BGK6PESM8pS27p6FGzS33ovTcnTuEjjUAYgtJ9JJVQjWTR1wNFrQztJ6YqFPJf6B3e7viPHRyqLYkeA1K",
  "key28": "MtuC2MWRCeY6nhQM1Q8d264VzmdUYm1prSbadzum5LBZvAxAU8WEVmxABkGyb249f2CNoqxTXvxASCE3yB2cjZk",
  "key29": "35D6XbhBm9WcJcHCM9mLNMsSmiYyPgK2JEVnNPgBnSMGM386yVmot6rsXWG82Etp5PWxcyzgiGzp7fgjy7ZwtBnP",
  "key30": "pLi2MQxJnauwRYBZc27Sh2bnbubiHit9kpK6C8rPhMrspeaYc5GA1CrAzb9UR1DFd5kV2EURNnEo4tNHADAGihh",
  "key31": "4AKoXMqPcvTb2pjkF12Le9yQSydnMaZWugspsFGiEB3bUavEMxQDJtLFibEBxkwTtqJqM7ZfKFDcwBsVZMWb763J",
  "key32": "2UkjQCmbL2hMR5tnFUd1FCG7FeyLJR5t37FZRCkf9p5EHdw4NpEYLUaFxMnu8sTntSumpr4DC2qMp5eZh5wvfwj8",
  "key33": "pZUxrin6sv3RuEMS3k5yqm8UGGupvGPdeW9CXeHozHKSWiCYmTwtrUbNego89GwYUef5vTyhRC37EqZvkXYMtW3",
  "key34": "4Xc6rmLbc3WrzeXFmk5WH3cE8BNBDdtE4Xfe43WGf6NMaVnFatMvDc4UZvnioJR2wACvxxhXmNjgocQtd9jKEtm9",
  "key35": "2c1rDNXwwkbphCHxiu74DGy5ugnaeYM5W3qV4EZvSE5Vnm6Ca9D8smHpbxCJdQe7L1teoGiNy9QEkZV2HdLZfKfo",
  "key36": "3uy2dM6BFczhnRWQnwdunUboscDYVCKDVoti6bxFrngcD5hvuoF1C6cmd4toVbi8e38x3XahdX1jBPjUo3z43yb3",
  "key37": "3AgjRdjqmHhScRnrgaf3znRARjsKRV6v1QRsdjvmkK1TBR9W2zMDSxTzx2Wro3kXcreth26ni4ec3y6fgzouXMJs",
  "key38": "RJuWkejRbD8xb2Vx5qArugNmiT3jfCMmKr61DK5f1RDWh5vUKSxsbxJC3CeFuK3imMsCGzqDV9Q2sqhdPWZwcnx",
  "key39": "DUCMUbiv4T1WeF6HgBdtdMSzFB6FzGMjF1tufAscWBXN2crjW3ihUHw8MwnzXB5HxgK11i9MLrcEdAQcfcsuWoX",
  "key40": "43ZeWcccywW7kNMXj6rR6FRLAk93Em6KMLSVs5uS7K33fUWRhXPS3wh382NfpKLYnxLvqBPg5KTRtwyxsfqsZyjS",
  "key41": "3sDtCk6gnKLXuzzYeBFRzN9USX5LhCWscp91NAftTjKPm9JqrNZ4hGnrg7irkwVPjxTSkeJTN39JznWV5T5jXNdE",
  "key42": "zuU6xXXfKeSN6JhYyK89BuwUb26EtHjjSFpxWMTucuPoJpgikkbwtYMj9Qtop7XYUjkGeoYdktk7Wj3UQt1aMCY"
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
