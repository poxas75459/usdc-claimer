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
    "4LwKhoUEKSHpvQj9fM867YCjS9xQNF6mELo5A4kZwqDCWkmcjjkCuPpSEnxFav7s5Ne6dVyqYnoBqPhXemqX8bHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iav6Gq8BngSrEUvT5zkW6g7PhAp8uGXFFRhASv7usQAgUvKuRgGrcEMJ7y1C7iByB76Y9vv9N3FE6zwFwqjqizb",
  "key1": "61ye2ogMXzMzc18fsKPVwGDBPkZ47E9PH1iLtfYH5yUUsLRB6H5NXvMx78DnR8Zi2SUNNg8LCiem4euDAoBjbjsg",
  "key2": "5t6ndhVyUYri68kWpC2BmU5Vw9XXXZAZw154y5ioDFFfk3VeeAN4EkHZshAPWAJHt6VKrgBek5fj4DkXZvXrcN4c",
  "key3": "5qzTMa6VueLe6TBpvAnwDjsrSqQeuYLwngHk62wBKSZxZahMBWpmAt9MHQ711SDrmQKG9cim8cxnLJhqQqbfCAHV",
  "key4": "3984mRENN8NFVGbUD8qYcDYbey5FjWmMFnrJBFMZhE62ACmwredzQ6Cq6DsJJAHbS3ep4wT2zSDjbw7bkvwEVZ9f",
  "key5": "4RpaJRWjWLUBYNWCMPmZtCb7LDhwTibCVQ3sKLiwBFF58FpzsY8oXeMYnE5yHjkyX7D8WLWiez8WUBKCZkqMR5gU",
  "key6": "25Ayj8gAxZLhAmm39U4CdRPECqCPafyTEtPVa91qBGGqmB6GmW9WbdwAP5WCi5QPtqiustmUUg4vweYRawvdMoSa",
  "key7": "53k7u9izGxkwmfMxhUsk2BGUUTW4ozLXxWrKqbpVKS8cZsxSgJq9i987mNDUg9Hrr3ZB6Nc9uEu9ri72MnLe4nTb",
  "key8": "PhsTs68yNvfHB3Kd7go4S8u4KBbow3bnKbzpiufkNZV3QsXia3LCNjJuhN8tW1iRfvDbmRqZc11annRaB3tBv5D",
  "key9": "3qeYSGdtJcbk1F7PvptNyDovomXX9NNSnTbSjsJAvDJoxiU2kVsSmnRAthB4GmDBRHdqjiqjGW7bPPmUL6ndDzEZ",
  "key10": "41AUfFvCBZ7N1S6BG77pm1EfKDnGg3Loh4QgFTzveDWjHHmg2pq4TD4VXGs32dTdT65o6SFqJAkJrKYgVTyc66rZ",
  "key11": "4vMpYpN4F4F6qLeh3LCmuZ2dkqSBn5XBSBi2YT5Ff924mG9FnbK91mqdCWxFMATErdFi5t8HUk7qbZTN9HcDFWKj",
  "key12": "2Np1Fv529WBv3viwePVbTEB28k42AUXJ8h2yfgj86chpTG2m9FHJxf9RoYeU7B5Bd1vLE7BWNm7KSEAANLu6FWpP",
  "key13": "3CKKM9Ha8gC7uoHX32L9yavXDFJ587xZh5GFPBoJEJWcfYKDVDGeDE9xreGQnm7NkcforcnbkiYjanmqfx9up9do",
  "key14": "DU8X6i2qcEhgWLaCkdGU2KJTDiF2bPGn4sNKrpjRiZUFe7wdzZjqKtMXpUzbgXGAV1UMmArpFQGrLRNhSM9rzFg",
  "key15": "2fkKE3g35MCs3UUbzGoTA9vM3WBQ2sjYsfyVSfh3p8CYNeiZmWRDxHAyDLQywmHXA63tLcuz6cHLPNL5qVfGPnBq",
  "key16": "2kVjVn55QziV597xZChDceyV2vTr4yD6mfehStyEreS6TcZ8zLteiqM5qbPFiXmiDSBzME51JTxY1Qx3q3PLvGcj",
  "key17": "4XwAZkwNaDJHLfuZ4m3b9DWpgV6tQRgtSgWUwgZtv64aw2JsbL4TTn4vRZVRdaxLSL3XPmcvbXr3LcFVmS8MrHPB",
  "key18": "2S55QhZ6Q96MsAbbGjK9ZvFdFuMQe74NsVbe3GHkSUe9sfXES7VbLAht9U38KKGHZhxcRJ5GqsAKQ4X1RB7CqFLD",
  "key19": "5NNhfi9wcuFwercbxuppbu3mPD9WaFm9pZEYPmvvTme8WScxb7bgWnTMZhySqnfPjgg6ghV49KKZpLGjMmaaJK19",
  "key20": "33vnEvie8EYnsTcLGZSoVvNyVoAbZGEJgp5piTSGCjbA4x5yhx7Bp2CaecRpfqMoKxFimz8oNYjcfGnr5cYMchVm",
  "key21": "5Tz7cK7oo1dzUXujZFjmKHsxAztoUSF8Q2w2Wy2129oELnYnkf963pVuaaz1hQPTNqH5dyVs2J5Q6PYmpj4HAm99",
  "key22": "5gWsMStseyckdrt8B1VH9LFxAPfsKL2mNSP35CbHiwiBk6hkEnbiVx47PM4P9jWH7dcFudQye4attW7EdWd6pKz5",
  "key23": "63dhdRTSB6JvZoG4YKJvtdsVKuziiMwPAWUcsdw7YKCRRaKGBXNyzFym9NztzNfq2v2DBDnAN9pLhVS9PimtehgY",
  "key24": "4g43krxtggssuxKP9sEtuBDCfZU8EYCcoyp4dR5PiQm1wyg96cSSB4xzUtAt3bgBZYn6mkQVyYcR3Rt4XnYbhHbY",
  "key25": "39GobHEtTeshQ8c9xGo6obXNVLazrpfG5hAo8Uxt2dfk1mUU8PV2TNvDVvLbN9s3NecayUFRCnAx4a73jWBaVEDy",
  "key26": "3EL6ZU2jXNEnpNDyEZjAWia1qFdw2cGPX5KU6CxmJNJS6wSEH97AyY5WmmC8USaBUiaB9p1CudqnmW86g733uabg"
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
