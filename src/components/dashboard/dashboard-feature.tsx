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
    "2GtfWcBjGu8CT6An3gESayc4yMmgtyyYYheknBxJet5t3afJokVL4hCD5EH2rjmga6XsD7ApBpJTRe9kBpKeFtcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQFc9PfNkHWtPSv7qPghF52nXnHNEbtV91o1ha38fxgHBcCgqGbAyiNy7RPNDTxQvqxBdjA4ndB7d6kqCsEjUDb",
  "key1": "4WY37oohZmSZUnGJfwhudmbcB8xWhfsxNCzKzYvYXUGzUgTHLCXsht75tods6cckBn18t1LsmMYkXnvjLHJ9a8cL",
  "key2": "iDiJchGvKVXauFQC3QwfcFcEZnNeWNa8Rx4KcCAdbb1PbB9ey9YMwGoJjgKu6QMfjoRknrP8xogxtJ467t9hWdK",
  "key3": "2fzDnU3igTnddGPTiM4MuhBo2fVwUEvsaSWP5x4iM6X2qXctyxWtKEzERTk4DeXNKtvx82ZWKsgQ7vTcrDgweeT5",
  "key4": "4qtmhUcKrXGSchwgPVYqKM4DqbQG491DPdEwctTBBcKHMJasDRu9bkq8R9tpLKZG1X9X3aMna9khRCXjNzNrfdNx",
  "key5": "12125whsVsexqQy4XzwDndNAR2wi7WudqAQAkKLo3eu1jgwRUKPGhZjrPm2YN9g5dQSJBiJTugSQBobd8g38pQDi",
  "key6": "AnQvN7w3pyK72WeXDEQurVfm3KRdEHSpuNQXQdnMPATHYUPwXsGH45mb2Jr6jqg116UJwrSCH53M8HchD5447fQ",
  "key7": "2nQmmiWZ25LB3y6J4pKsXY4Yc24P2D8FCYo9FyazoovxSoTvz15ufMhqJ184zHr3H9XeQtgfSz94v6Z5Dvq7kTP8",
  "key8": "4EXTAtxo9CBF1pUo2xJEV11aw7K6XyVTJnhPWnMwHFS7M4eRBcKRUmAqFnc9oYz4xKHc497fgd4mQ7AoEaeZvhmC",
  "key9": "2KE1mMk6NRk3RyB9fGkbj2KcQFfkzVbGifmNqJppJB1Fy4H5vuvJhcNN5q8NQewvJaHr3fgMWp9FPB1Hxm98Wkh",
  "key10": "3BRV21byUJk6bwzBfT2DfRaY5rP4HfhQWyC1iH7JcCN7VGrDvzyi3yhwKxj6Ht51RarnE76VsHGao1d21JZgXKun",
  "key11": "4twmYZHMaDb7j4uWyKewS9dtDec5V98bmi1SZBLAAYgKDnZczDWDs9uYzk2tL7cig2kKqatfqciKxrTgdEfN1Hck",
  "key12": "3uhit63tMaLeVHQTXX6QPo1aYseSmFyXnJb8ENj9tH2R5VEUUyWrRRTw1B2cycbAvVC6f7VeQCY6Ru4pHGJgmM3r",
  "key13": "5YcsDHoqJatEsbYD8i7Pci7VQ8wVeJQa3bC8JJY4vTsU3BVU6TjyiAdXV7tSVsQ7cedgeT7ccUEujUudvgHwfMxe",
  "key14": "4JVApkaQaCgV5D5d2oxJi3UBFFTMdFmDKhgnVjUf4rDutsaey5wp2ERUrk2iNqLwrg1c74rUo3vFhU5R3fXpjjT8",
  "key15": "48nKz8DFALKbQQi1iEDTjDT8oDDvN64ajphGHnqGbgkJ78BzvHQK4m1ZP71Xfj7kBvE23maMKoAuEf8aETBMyoPA",
  "key16": "4Q21D63k4hrDQdc1r3abTXuB3ue4TMx237m6ose73JaXHZrDrKUATD4FSKMnzDHFwJqjFUUsTDusSRCeopZBNGaQ",
  "key17": "31MvXARTLwByb7A7S4BfjCasaRqzvG2Zt3TMtFbBQNFVyN1R7qea9ggWxKd98BXEcbRfaHR5E3iQp1ha6oYXSXik",
  "key18": "2WeK6MJTfERriGoJvMDqmoNumtZDH15yTzCKXqS25r6BMCZdn21PBEgzphAbpLxtLWr1yeTrorqjAXLv3FysTiPS",
  "key19": "hg3vH4C2LheYMTyx5aj2xQuU2zvN5XhKc4rXymUCHsbhvrGryLsukcAgkh5r9yFNWmtsLYXxR7MBiy2dbXhx8me",
  "key20": "DPfTjdJTxN3oM84cHQdFSf9JCS7MPQUtEboEgh8wSYtP4FYYNEkNKn6ewoQ6yKjaaXD5o5WXbiNFzh8DX8WZRpV",
  "key21": "4YFpPaeouDvTc9ArvV1KpoiRVPTFR2SXShVb5pnSvtipz2oPboKhY7rigcmgckwUwUzkkkkm4yjE3UNbALSjkEqH",
  "key22": "247REQPe5V7XGxLFMP93cJ1orLY8JCZJCyYxBV4eePPGJwEcVFMahnd9zcrDzpu8YU8oW3ioNZXVi4YQXKQgy7Ew",
  "key23": "2u5N57z1Ns8AjL1EMS1GKynPLdm8rPjBkD2p3F5itfYN5Fy4rrsLPwVLZr7HqKeUHkSzvQKTyRuUPTVL5BkTfHwd",
  "key24": "3opbUQqXTPCMN25WqQrfFovNpDEH6WLV3J1BiB64NdK6yVKEDrXyghgCyXVkWiUj6pT3LDrzHp1q9zqjbU2xQUym",
  "key25": "2WPKYrGSBt2E1oeKvt8TMcfxxcbvmnpvexX1fRb6aNUHTBz3yS2mHs5rBAh29Cbw7VQamTd1SGK8PH66F384qaqq",
  "key26": "wJYDW5Pza5aX3kYgfFs6j745axN3Y9U1aed9YQKF6TatrFiMMLcu4j9tczfQkP7ec1CWfG9z65b3wq8YF5z6uxV",
  "key27": "5iutB8vEbFrVCVwBgUSQVFSG1Vd4pkvzTgryGq4V6M8vZC7EQas2X7bDehVao8xmCu3PNG5ddj2vicJKfXwW74N4",
  "key28": "2C7N2AoQBrxmhXBnudVQL8CUon2HuarzanY6VsPCWvPBCebUQmhbGcQgMeRPdNpKAFvMVuEC9psD39NVkbsFFrZf",
  "key29": "3WgAEBSpTNNxXA8XxmQzVKLBYGsj27tEd7EbJpTk3W2TBt3q15dLAurPr9pYfTch8qM5Hsk4YHU49asZN6XF1d6B",
  "key30": "e413cpHQJrzrpm7T2vF7PKJtJAWVPU8gocvSexPRPdaes9kasLGSegs3K6SvfNDVPcAj41eeyXX5b9QZ2sjrF54",
  "key31": "5cedPV2Qq962apgkkhQtxhauiyYpB9o6QiB7QoZNuP79Bgo91AXMmt4r4uSEgKWVo3gGg4V2uRUFdorHbDEXyjMz",
  "key32": "CZdbTrMXETJwB9PNSGcvCLy1VTcuwgqspH2RgR99MHzb2K6JQdgrFrTgzyDc4zUzqd9qrZ8wLP86gm4ioKDKaZM",
  "key33": "3rpMac1yipvhQyvmje7yrgJ52QqWGThwdU1KYKiYxiEhotcZMXCfa3aTuT1BwQBicn8oq7L8gyEJoPYGQApcf3X"
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
