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
    "56Kw2BZRhvcHnfz8vsL3th46mmRw3wzodoF2xq53abbDYCwrfwPgcch8KwxEtXvgqQ5BNCSGrUHZ6s2mrKD3SHkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjHCZqq1uEy1RZnpZTJrDUfPnDYzYRoaGRpw9K2X83b8bTnqdmZc6XTtcnF8BCWbusqo21kWeuvtdPUNCuX2ysx",
  "key1": "4Xc3NHKXr89D5ynUhjpHhMKyUtHuBhFv3HAhycJcSriPJXkLBu8q49YRUBLKgK5knK8nsRL56ddfjfGQvCAdkf21",
  "key2": "4WeKZeCKkrRgvTkquHdPvp4S52iZoH7bvESnzV7fMWZY2mXnpeW4PY7Zkyi3Xyjo6JUgZwoHeEGEmtvy77kCwvAx",
  "key3": "5GXBwdMDZmiUPddbEjr2j9fBKVu1saWcHbwtLWXvEn3Yb9nZAUCfYWX6dPADrk1pYeY8z75GxihLU7E5HaCpNZUK",
  "key4": "5WmgjRfhUZjKfesGpv8n6spRsZVqkWk4dFrREeLMdysRjWk5AH6KmkmPPNjQbLGtuCGfj57bM9rYv8dQtxs56dyw",
  "key5": "2APakJRG4T33Cgk3TmBHPgEqdU8LLfUBkdHJj9mjnarBuxQVWvHpVzESM2sxKqDKC8HRiyKqtnv6XaXBA4SVcZ3c",
  "key6": "UA5Hyp5SyNBwou1dY9qi5vrY4HnVy15EN1niFwGfoKTNDVftukoVLa94m8BSxgeEnmjZ5sdBJard6cmLj3YiaS2",
  "key7": "2PrgVosGiNrHf3o7kt7AH9yLsUXQ7oNRWZmJHq19u8EyzGkRy83622eJHyAEqLz9CFw3e9vT1gd4HikDyoooWjCw",
  "key8": "yBGarmDGEfgA8bG1z4SbtqFPJv3KGRJNDChdWcPDTNxbHcb3tUbSS4HMtdRyLb7BpEF1yAvisMvQweec4D1ZJKK",
  "key9": "5xcApiyj3Pq18dMfv2KVYgY3zuSagAkeiDz8oz59ER3hjHHUdunTw4ocMvw7EuLJLm6TdVYsr9fxdE7oqmwuukR2",
  "key10": "kf8Srmiz9RX2Pfh434D6hvPPgWGe1vCHhziUQNCUt2cwLXuhWUn2WApa6Z5MSUMpXry4xyV6MN2DigBVQ26hdA5",
  "key11": "4Ft4aKLecdgEKjvtgSJ3HVePQRBQ4zGv6bctNqyM8tccG7GdFJvEoZ8AU3meDmBpWb2tXrvCLxDZ2gTLYWbvJesL",
  "key12": "52G2KJntoiRby3pypc21piF3cD5qpkpmTdvQKMj8MUvrzcHeuHXv3tCqwnga4X1akY98iZG2n8ozYv4fTX4fo7Tc",
  "key13": "7oMfubkWCupg5cY7zU9YLSmviTZbR22UwiJhFtCNoSu7hJDEk7fMgGJcRmjUGRzFGJgCR7M4onPu4U3izVHYD9Z",
  "key14": "2nV4F7GLTp7FYKWDPH1RNaWCTKsqfJkbR9L3Zxnh4MdAiQ9WWd7oPWRvtwVQnhizqovB3AznrQmigfB5q8AFmptp",
  "key15": "5RN11zWigv9VzjNF3z41rcUWxnFN2848Kiame3nJPvjXkJG6rDFj8kBao7Fdj1me8ATNcoRAwe3JrTvjZNrNf2Bn",
  "key16": "3zVCjZxaSqamyUUpj7eHweWk34QUEodL82uB23QqHKig1MNBKaiqj5vZodK88PzVuxGmRrzb9mNj7NxPpaJB11DR",
  "key17": "9HrJTgABmfGG2KZ86c663rzwEyusgZvA2L2jnc5VPg62HCoYxwWfknejfJtXtHBeYXP7TUzpJf751ddZUKojrev",
  "key18": "33JwFRTBiGqAWLgUDvB3SNT6yxbBTZfPwBFqiJrE4mXDba96R67Yr739Xkoar9KEvqAV8VBmPGiGKgaW2mNbEwQE",
  "key19": "2LemKEMKHAU6gZGQWiHaxNbPeeKX7JK3rPE5H6kvLV4is14sQTkjLTWSJ55jZ2WF5tU8cdcnbeVnZ5FXWcvQbeLM",
  "key20": "2BRMdVzB5pwHb97BNEU9V58Gnux2MP6hN5Nh3YdWvUDJfbriJtvaYDf91PN9wmJBsYmhFLgrkz21gHzgSwS4FPLT",
  "key21": "3N4KBmoxPjeBmxmrRJpuPre9GtSzD2zjCXwtmrMGkxEGdT2Uz8dcBRhktWGyTkgPtDRCf54jHPN38uYA9kpG19b5",
  "key22": "52c1ufT5YV3kKgEHBgZkWM3czC5NZNaj2KfDu7Y3fdYwzpAMFuuj9WSUm6an9gusm2qrdC1RRDfwchsRxivWccxt",
  "key23": "3RazN3seULtLktoCLGEPELUR4rvLLAUtC2e2H6HCfVH9jwe6HxHp1LSB2F2Dt5CKdabMWEqgSoniXtenKtvx48WW",
  "key24": "5sbt7tz1vtt1LxZq85ShqYTpx3HvZrPHVRm2WmamwmsDUHpo1dntQ5EMBsp7Ra7KGETLXyCcgVxDvAijQpHjFDG2",
  "key25": "3cCkguKhWffN588YHJXz5wiPJYua6YiTeFM2BFrw12rprMNc5i1t313c5uJLpQiGDDgKVgoCELrym6hdUQJhcdmU",
  "key26": "2cASC59QGqpBGMScaBqzYPhP83y34TPB2S9MpgPTn4Br5VESkmXZJao9YKwqczKMP25mbd1n91GQi9WuABLCXLL9",
  "key27": "4wwh9aQbA3eqCXGebnJGaiR5fRLTDCuLkbwd9sELXNXG6eBheFtYfy7WrczC5egbAQVsRbkvwYZipUvDQe5SpKxK",
  "key28": "3doSUoMY4EMAjWcVoypsykNj8s6Ly4iZ8aLsdzuumhBuFmeFtmNcqp54XfBEdQVnim5Hujvdi21AFcsTaAeimfnU",
  "key29": "2XCPMYy3usBsVEFAADaaL1xCpVEnNxJGeU9jxwtfZsWLJiiumPL9L9fpfokPE2BHviEFDrCLWcUUetvz6xVsPyiy",
  "key30": "2iH3gLUFnpAtvAMWY32udv17mrDnhtUuwqU92S2aJHB6LhG2S6rDqgDJpZNMFYhqpadp8kmxfiHfg5mnieXMyJ9t",
  "key31": "GG8Hxsi1yTSxHeHYdv2MTECXRq4eHhhgY9q3dVu3JthC5DWQfba7c2vHDvNeuo4ARuGDJi3rTnMzPTxZz2XUM8j",
  "key32": "5SHHzCtCeqjs67BGrFUf7XuLtUZjzE2rNqNEmf9m4QqH8ZKrdEp7v1VC3so1WdmNJp287uhP3o1ma8L4qUwssYug",
  "key33": "5ZmmzgaZcRsrr7HtLEcbgP5cFaVPt1yVuKAw2q55G9r5Na9WH32Ai2y5QVZLhX5P7XnSAJpxr21Hn8aCx69dNG1g",
  "key34": "3iKJvEM8F7PhRfBAHUqPkA6485rXiUQZtJTK1J494JTcb41hnDgaodAQcC2mZPLhX33CXjoqRXJUSqoxGEx8i8WF",
  "key35": "4AxSRCKd1bhG52pdijUDxR9GcBkXZAcxtiY8Y4XKQHKQiUcYynqVoLKDenL5bcgoKmrFsRVBcVY5JaBwfjQFEek2"
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
