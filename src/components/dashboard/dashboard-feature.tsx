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
    "5DGYcBRU4C41vLJBjsGXkWYxAW3FhtWkboimGRbUApDcR1BYNv8Vz3tixu5sgnuvQBqL4EGcet3msXo7P8C25r4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFovm1VCMKTVvYigxyiozW9zrDhPVvpD6BA6uKFeUYERSWyYECEBBM5y95wjfEUZPKbDTcBSQoiCcicdSM5iNcB",
  "key1": "5YtdRdFi6GCB2nMQv8C3NfJXHayuBj3vUNE4Qw2shgEeAymG4nTo6pa4ChAGWvQ3xxxSRtK3QrQqkFMnSFg92tFe",
  "key2": "4V3hBSGL5xGs95hLNycbAL7Gxvi6er5pYHT3NjG73K5SU1gkd4Kf1qMe6sboMFaSWcZmCgdnDLRJ71KtaNUcQrfZ",
  "key3": "47xWpXaKWuyPPnjtye8gwkxhHPC4BeyWutjaSdM1zj32u7sQ3EVB3NbRNyDjhFF7amKP4u8UYPKALDZFsqUNiGCn",
  "key4": "2BY5SnmSok21GGpfTvDfN7nd6a1JUunq4VPx6smu8tthqLnfZAQvtoKYTihZZJBw8cBBu2mmhkcX6DfKH7ZvYG5Q",
  "key5": "3xNBuJoPTz39cPoyvxeQgifJ1ZABnuk5i6nLrQKCen9aiTBz3yLgZAdeLY9hbhXmWZLSiwiv4CLSbFLQdP8PGUs3",
  "key6": "3PbMTrvwNrPoZH7dMefXiH7oBq9yKzNfUxoxiyDqqWkXgspFGW8QpeBWqBeSSpcuTEt1yrLS2UeFJG7Ro3ScaYp",
  "key7": "4kdpivtvbhTRHhyYUcY9npmjqeHhSmFDxZ4tQAQPR8ezSgsrrfepzHcxznfDAdjAZp7yY5a9anY2psgj8VR3ZrUt",
  "key8": "2R8JbBzxxocF3jgUvaVwztG7zXQzNh9mMWVhDGj8Ea4dXTZoQgEhqJNi2fmLuKqeHRkeuG2FjuG1Hvffs1SYJp4h",
  "key9": "27EdeCzVT7aBWDqLvcFUePTyLD8wFU2uuRgWSS11xjwa4jYZfbk9EkT8joxPJYrmykVsRUz4MtNp1uRVBau2JSuK",
  "key10": "cz4WsgPNq88md2qRTuE1chSvf6oAzW5mA2pBUA7zmhaS5BuHELKGaNXYTYVr946Fj6E12EDGZT4zjFwtEK8PZph",
  "key11": "2vGuDh153qB3bbvDtsb1c4CbLyEmpyWCQa8dZjAfSmc8f8YCiLrzir5pEgC8VmdPXb6kPMj952dDTN4pPPMC2chE",
  "key12": "vtG64PEjrzEPRkDWngZjaSTkSoqgRDbsPBwXiBSf2v6gUZ1JafsmNFYSbfGyPTocxkDqbWwxV85UGr6kQfUAskg",
  "key13": "3TM1vUFWNKap45n2VgAode4UVyykLFNtMNz5f3RRjMLCC6GcK452uSDz6cKWiJgYMVj14CTt7tmy3Lt43dTTA2Nv",
  "key14": "3sRhAHVqKU2TGjYaai6uszVogK7SFs4KoShzNBJnGQqibf55kG4XeQfgr4FSq1mh9YZCz5EUWLqQ9T74zsnj5xZG",
  "key15": "4pNWGLDU7q4YWhiFDYQanrTjLQnYQNYktP3hUq4fH9noro2jz8raaqA7pjdgeognpxfQPc8kKTSkVf1wDUv6uugg",
  "key16": "4gt6Wx4TCHDgNxdmfjQfgpm56UPjQz9xVnZFjRDCQbyBV1jhjA5tbsGm5Wjk7nkqomicj3YNTYd57MfFdo7RdhQR",
  "key17": "5dr97wNwekeHNXEdfCin6JJXnsrntL4FFjdaHzuoATSJRSgn6CU5D6njJH4bX4rYs3H49YdyCogdCJe8nhtztt2d",
  "key18": "3ieMcVhdQAwdZxybpssSuLTDGMfNiykZ8tzGQ63zxb6fkEhPewSVE5wVi8GFCNuP236tEtzvXkE54E3YNPyefySm",
  "key19": "4USSQrWzvWBhSg3nH332xz3vXRKbXhbnwQsKDhmjqbjY7by3sDcy8bYgfgyA2Gwufxf7BurEnuMm1VUU2syonW66",
  "key20": "4tqEiXdgsc73XZSMyPJY8x6bXF9E8ypDMJ5N23xhT8VsrGvDMTWGRXTzwqu5r9AUYwHppST8qKCEQrPtohGS5JUX",
  "key21": "4mpDQQRye2jMj9YMhRTSukgufYKmUTTRhdtxP1pvHM7nk4Y84BJ3NwKVu48KpBXDYrCD7uXK99iah3uDm3cS815P",
  "key22": "2Dqv24mNayiHijfnCEZrYprYZjMbJLXxxbevTUeXNWAjdx4buaRUUZrWpkLpuJQL7yxj9iQiPasTT9b7Z7SsAYB2",
  "key23": "3tChLT4vQcAtrG2tKdbqzhvAe5VoEFaCZDaAfZ9ecGcgnKEvCKv76xYoK7VNqzkogTqFXP1vnR32pAuxBvoEFqqw",
  "key24": "3F2JT1zRS3WrBYgbapxpiArCesW1p3n7oyhF58Yp7ECA3sqwEkVmEZa4gAuDTKZpN9Znra5sXTJsHwkXmGufrEUA",
  "key25": "3kby1cWUjHugByfFnoxcvTT4GE8q2yZsYKwZ9X1KgJCQKUbDbd5Z28j9pCXWouq2kuMVzdH4ZALYes8uhXuHQqmt",
  "key26": "4NFsmdERW2SbJT1qYBy8Hme9eaWefo2RRBAp3YWVBWgSxaeWBRNm42rLsQC77Mit8E1pftjF37XoXecNfzWgLDCx"
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
