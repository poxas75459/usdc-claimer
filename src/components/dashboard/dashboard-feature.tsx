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
    "3TFwtiVVnmHF3Cc4f7vVUPpMx1Qn6bvSXq14ZcaMZFVNcjZC2bQs5s5PRTpQxL5Yd68R6cBb8bkUGNbFueJw7JMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSxpjGSnxdUwRhcv5gBdFJeYfUV15TChLJdt4YviJZxkfkngPN7vPesB4eooCowPhNFXXDzEpdSSVqb14mdj1Bx",
  "key1": "3oVP7qHhw8Vb6yNYjbJJQjFcSSvgVDkcEPhQ49kMArRTVbJdneATgaVvBT17u4SHFJDEwm7h8Z9UReAWV3biHSkW",
  "key2": "5cQi3opSXLXhUXnrWNHL11bSsTCtdhpkaxGHtkdsDsEGfBGGrRR9rv2eid6sX78MTopzWuNbKLBBjuPgb8yVVh3W",
  "key3": "59eVi2vz4Tcaw3p9uTZ25yqNGBsesQjvJQzCZj74HnZusHafB1DyGPVUS4tDyj5mUuzpKFkRmog8jxQ1GRAnySBM",
  "key4": "4VjVqNjudQqJpfT7abntmiAczxSiEtc3EYPd9fE5Wdp871i7v7oRL8aTWjULVbtGhFJMCbkXYVzaT3JJwAL3BQ7",
  "key5": "HRumQJ6Ww4xL7G4qad48o8PXSvf3Nz86zz3NkQNsfvfWsBqQhK73fYxx7bSNZr4irorghVwn9HJp9LzYcGBUVXj",
  "key6": "fhiwt5whm3c1FPAxtNE1UwN43AFMbt1xKQX2syrgG8ihqNGVy3buXdveYhMTKmxqztFYNBsES4k268yG6a2jJfs",
  "key7": "2S3n8oRFF9HAUnyvDdwubvCHkBjEnXAWHyFk7hhBqF6jy8Rngqs2BVyspj6EU2ueVqmxnNzDnJ1wLiVo32bnL5Zn",
  "key8": "wuLZev8jC4wKbEgChsmft9j7H39dSPNcYMwzF5PvLv7pcDf8P6G17sXEVmo2pRkcpdVtfuMy7etV39K8NoYyycQ",
  "key9": "2MxCVAUCKh1oMvAFSkM2iTQf5nwma4AdxqsMKU2VygMJBJaqxM4Jyk92YvcPyHoWiSdv74X2Kco2nMLAksBPWavC",
  "key10": "iX2eF5oo82fRUMTFq5wGrtuswoMnKrZizKzzyL8uM3opXk639eBns3K6sVuUAzoFBCaUuWTk5w8EjqjEdK8P94w",
  "key11": "3wYwVVmgUDGZwyzJ5p2u85p2fbpkjHQmKUmko4ot1cs4NL81jE9owTmq2zztwktGpvb1XCm9XZvaviJhwVisazTh",
  "key12": "3RT1a8cxECH498GuH912kc49nHZTnZvukkX97CczUE326e1GUetugkwK6npnBusa5McaPWenhziQbGAJequystp7",
  "key13": "48V7Y75Dhri5zMzheVJs2fBU2zk1Dympje5vrB9UNTiWmxG9Z6EuEfRXBUoCGav8mHpkZdZxbBS6RGRFtzcsdqQx",
  "key14": "3e37yLVc48W5WQxQESTzqn2PmMgiTJd7Wq5ppQpFQKSp934pud8pJE1doZQZD9DZJdyCrDCKYG7W8UApEsQJ6AMx",
  "key15": "2AFWmAEYLMW4gzfWAd7hLkKW1afrdz2RJL3s1oVUykERGGgkLZVyF35a3jdD7yTpBEZtiGLeUTA8z2KF6f7rDH9W",
  "key16": "4cdeW7mmRXD1UjdvRutSAsiLV7hxdNpSLvNHkQnJPNAND8xqp6zLPgwXtY7bSuLuQEwTWr9PQgr8eN3yJby1zqd4",
  "key17": "2sqE1HAt9gtGmWtWm5UQyXWt1URuqPu9mf4M7t8odmQRx6GUidQyi8iZqq6eR2nYsU5fCE7HmpmiP1EUmC7DNtif",
  "key18": "5tHTpy1mCUu8EZ6UWoNL4Juz55muCn9fbSqxLGb4s65ZuxptSGsnEcqhPUbVnXh4Cth11FdhQt8HgGaPddFDx2EL",
  "key19": "2zApDXQ3yir2EfDtrWszx2dxnpXV31Bqb34zBhMjjyrGgNKsCgeCV5Fq4VVtV1DSRzo5vuFuws3z4hirbvFNnTSR",
  "key20": "FwYbbmb1nUHwyS9dLTr9ps4ezssr8nPAcemTcesg6SL8gxiJRGMPMQxFhjVLtdkupP5JwWB5H6dgTpQVs6B8ovS",
  "key21": "Ms9qEYatpbAH1CzscEXCQgAsEENyp3G4xSgHAagwmQwPnHBa5MmoCzBWFiEjebHHTSwNPp4mnNKjRsRZPfr7EK7",
  "key22": "4Z7TrasSrK1RDabcsZVJSiiQDU11Ewyg8TQtnEvyV2VvbVKVRftxFeYQNmikKmGs1NjdnL6BaZeccJVFPBn1cxaN",
  "key23": "2VFCs3tmTuHTMVV1i3VbLeUjiHfYmQKzS2LzRCdMwGhV8AWnb7Ywea9BuHjFhWDxiUhyvjUEyB8W8urvCgkuVMpz",
  "key24": "4LNBR6C8GB7GawJBsYTHftWL6rZWU4UcQhyqQJHbcdpZQgNjpo9nkp9WM1yz4d3v6r9yE3smwGjwvD4hnFBQKHgh",
  "key25": "apW1kf66oTDFRxvt2MWBxRUKKnhMHTvrd3YwehtGff5xHuYbGfhmy7XXPNoVcYqbgXn9WyhTpaWCc2amNoL2jM3",
  "key26": "2C2xAdvS3ajBJZmAKN5ErZcwvZn7n193hsyCENhbGtJ5jHxEEAt8A7Xo6n75vMxXarZizE5PDxb3zwNzgJFa9cq3",
  "key27": "5pJKecmWGcsgVLJUbVAGnWr4ZE9Da3BeGT4AANru33BRgwzgSqhwMzCLWr1tGkm584pi1TJg87Yd24k2msWTkCvH"
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
