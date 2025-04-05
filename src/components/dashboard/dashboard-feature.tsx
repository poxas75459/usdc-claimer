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
    "4t1Dupi5hGqz9Sobk7WGTWwHgPxzRS42C9DcBWgXGa5XJxhnv6Vcicm6t2u2EP4UBBBEn5ojXi9D5ASPFz8jkQnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yF9xQHghNxx4PjRmjym8rBQ81HkcdvvMY7kLGueeL3QvWPdeUArfECGrS7dpaCnVaVTmCfmj9agKvMNmtrV7Q7D",
  "key1": "2Kho3fmEnaRaZi18M9TfnBd2vQ5WXq4PxXmfkZw1T2ig5P1yXgJmd2GQhqudcwE8U19Dvvdwq3FE6yxVh21MqyEn",
  "key2": "4ufF2dFb3BXKt3t47obx32ApAspWCwTtKDRTwrJPDVsdhvjWL4N2CbnbAnQ8nx9CreFt8xi5VeRmXuQjommzFoan",
  "key3": "nieuUAmLRWaN7XL2HEbxPfSdRyEKAZGdXz3PmhEDZWmnguoBUdEaoyForrXGbtYTuKrTgwZy7gKPmozu2uoshwJ",
  "key4": "VRJ6yfY8q58AyZGnicp76zQ8jQBQeu471E1HMwrAFAJ4fChg1k32cmaapihy68MXB4AzCTr8b52aSTWsc4YxjFM",
  "key5": "4qceSjMcKPWWw8q8A9Sgbb49p7VckxC7uRAsC99S4ewqdGjQmY4JQQpTUq8mvkNbvMnUKSgNJxCYEBmXdnnNY37i",
  "key6": "2mAW4XMSXgYJQonjydyCQ3gVNijGnk9pbDcp48tFUGuGcRqiN1wR3wqxdVZReUnL2W9GQMbY48YqJG9rukrDJABC",
  "key7": "2oFHHHCqMdsJr65iGo9y3Tx7RdgpfpMGigTe9nuwS82KArH8uyrvApEGUNpxhuLTrZ1Gdis8h5V15XzBiwqtKmfW",
  "key8": "3dV92kvid3abZnYxDQ4AnvGfzswTsSvQZtywYCRFLHAaXbxHVGLmMN3qrEd2AGqvkewHx9epP77NE5HrqpGSCvGN",
  "key9": "5vYz6B6w1NCK51i1wkBD3EpiDgDBiHVXqdjTBmzYB48E2y4zP4hVsqRShE5WfM2dTjhgnXVmePLLiiGUh1fSwCZv",
  "key10": "4wFBW4eGPed2yrQbDryuYLhSgGyyq8TS6JWDdgf7FgEt29Qt9N3gbtcKK2QeBc5V1MMm2LqN1ntFS5AjF4oPDRfj",
  "key11": "3B282k9pfSaSroiBVZwG72MjZ2RK7aT3q5BayAeu1Fnb3NNrBjV9KRTLnxixjxxojSQMEibSt5ujJrSGinAX8job",
  "key12": "3P1FtTadiRdYTH54RzVZwfJpk7PT6ipoEz9LCoTnCGTXMFpGx2pqpFRLxbJ1goHThXTqruKpjE73yW1pWQGCRV5U",
  "key13": "2uV5JDdvmEdcHqggCDtNAnXUuK5LMFPBMwcu6fRw6rPbApXj84mrbQre97W43U2z2TyS2kvUWGXzNqyt2Mnk8Fsm",
  "key14": "3wJZEgGpUrfZ9SsqNUVPvymnAyc3A8NSCqQxkf5Ppdg7DYbnsskMks8nVnk7sskbJjTK6PbtoJFjZW5Lpfh29M7p",
  "key15": "24eKVMFogagkcy4nEDCwcqFY1B6QzctM5wx7BdTNc8fM4dX6DnGj5manwJkHfD5TDkRHxqSPf6FGesKjEUqgg9Ch",
  "key16": "81CKhuhS5szFz4FN88XFAUUQtpuSRcKSTdSmpK1LNx5Nwa2ewD3NwbV1oWqQSLxZrLVg86B775tudetsJiKLd4a",
  "key17": "4xM8BxAAhLNaLzQTXFbWue1URWBtLB5BMpu8CdAnBEMtNJaXH2Yzvj79JogsMhvrMoUWCvtSzm2To8AcpyAZQqmr",
  "key18": "2hopNcMPZob6WJfi5Y8GAJZrjEnAVUDGs9SPLB2GVmhuLQuW8YRJa94RU3JXT3gn82EarvUv6kKobn59hengskxg",
  "key19": "33P2WsWFC4DTX9py7AZY2y6uPoseRZDGw2b4kW6Uhyxa7cswLZ1G5ab8kRUeWE4FsZoSc3gvwMC6L466EMiRNtPC",
  "key20": "4jgZZExxQLCYL3AkutQnEoNBRPq9AaikG9JNz7KrSUmfM3E6ypuESo8G5nMYSCFKbEU5GeaprzQkCLFYh2Lp825b",
  "key21": "2PPgidEkLGERpjPVWuwdypcqRk1ksaY8U1XNvc6VW2Z5273kiKELAbHZTTgRhUthdzN87zfiSqr79GWHs1tCribt",
  "key22": "5gUB5iCtu4SyqE16HLqwNTyBDH17ZAq2z6E5BLM8w52JhB5AJHrzZWhDETcoVZK5tvtoz1GirYGCTWFiL5R9DpDH",
  "key23": "4W7vd9TE39EFfZNuudCJBLQVeS4JSMqq8zqaCAaLFpD3hBYKEUxrrNtEpQ8x95Zr9YBLSJF2fz43wGbequA2R1Ba",
  "key24": "5Ne1sJGVvZKD4FozWDynsJ6PjNrUhfJk1UyEB44jbMs7pniNqANXnZ7xoqp4Sgfx3aAvLDMKHvJ32N2Lymi9kXxh",
  "key25": "59LPqzBu2AB2YEQH9o67vwex1yixwFobzJFm9MaM8F96HiJYkZ7VR7uzd43DifLfUPm2a1yMbj4NGkzLkbWz6g6d",
  "key26": "3pfHdc4Z13U7umBaCuSthCJb6xuEupMiw3jQRJHK46azoygM6nvNZvnFSNGabA4rGkeK8Tpc4zHgSwFoAg94TRs4",
  "key27": "5tJMc5cdUf5kiziKSZoPaBcuTUv2F4oLbJ36AYgCgqC598g1zJRQynbZTqyn1TzeHTjoHLvdBiFfYCprWCa67Suz",
  "key28": "3uwTLZzaJQ7TVJ4AQ1Ga79jMHwoipGp73revn1HgjzbSa1i73vc321UycrMR9YeuWyBNPLbDCGaCTzEs1DvQfPbp",
  "key29": "3WAQXrN9vtfg8KGS7fL9XubkCqzwcJFEGz7rp1PcGgvm7RMsT671Xb1hBFSR7ZsMKrfdC7Kh6ZWz26nFRLd2oXd2",
  "key30": "4H1MqH7LYRQWCaXWePY8dQuATdqhdaat3kwj6NK7NW9KfrZ4PoUXrJ2nEUctPdpc1rW4ZknUsLouXRzBnmPqHgJs",
  "key31": "3YuBdJwYcuvYuJ5vwx9BWmZgd8pPwjzEni9aj3VpSpQ3ysPfw4msgFZYD36D1djvY39NSeFYrWRZjBrr9RW2W369",
  "key32": "32Xt8KLQrETLofJAdDDr4Kmu5Ud1CFZZiCQkweuc1RwBv9EGNFL7tMRK97w6Lbb4J4srrxeMzKehJxAoF8SSR8VT",
  "key33": "3VFV8968VRimrtVGHCUjYD7GtAdWsFeGkBo7vD2c8UyUcxMWk9qFjJaXe4vV4dvDv4wp66mt4xepJa3v3bLiDe2d",
  "key34": "5j9SQuYe2WzbNrTBW5N8nka6gumjhyvRmS786NJfXBRdNakhdWWwikcr4EUSaUoLbkALyRCxjnUD86KZ5ke6Npwz"
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
