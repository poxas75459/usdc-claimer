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
    "4Cbjwb9vHsU66jGevj2pa4xPXz2ZZ9xPMP6oUDvQS476ufxj3a6F9tdMPVRHTv62Y8hhy6UmfCUTXpvcH9GwiphK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDxxGxnfXsMihNzRrvbAcJdoJNHEk6ex2kSF2i1qRVkmqaCm7MpuPQk9BciYB9u2Se28Bc4Lhv28S1eABV8i8SQ",
  "key1": "CENKHzaWNpMssmmqdg42uZsFcxPxSw1vXCdbmW9rPyAZd8vhAAY3NYpp2Bjhw9SwLHd1dNmfJJyHpWcZ8yuA2mL",
  "key2": "2ThrSgxY46kDun9b2LFPi5rXjQUg7n8wXtonuCNvbBu25abrEsPxUyRsvnZvz7d5NSL3gzFUXeep4rxob5iW6rg7",
  "key3": "5gp4BMFUGH12aQCDuEr6tiA7yRcdNY3mNgrFRTq969kgix77U7tcVRxN1sddB7jjj7K3hL5GFCKv37QZAbNnVZBt",
  "key4": "4AxwrcwsW1WRUU751gNRhGp9UNdHxgeTYhQVbAWBFi9Kzr4SvLF1KEmx1CjnZvyVtu2Zsg61J3twY2cvXzKK3NFG",
  "key5": "xedrTgq9QoZGjDwraLeKg7QvKupwM6E8orJcT6si7kY2YBSe3kQVApXRBx92B1vL9snYiGhpoDE536dyE1Ky8a5",
  "key6": "3mZVbc1mLZoWPmcGJrTKwVPa4yV5zXoufKaziNdMDiFQEQqP7R7Ee9AqPZJVuWmfM2VpQGAUyKe4PrXrmRVujqZ6",
  "key7": "29FRiNFG8mUCW2vHMuhJnXskLwCsrUSnwB4sX2p3dz5JkQm3xrESPu86qqUvY2Ma97NRCvr3UMBpnhakLAMzPFBk",
  "key8": "3xyEC6JJMEZ8mZUrtXgsRBEbxyaAFi2LRqrXrP2cAGLQAH9m1FXmC61iUu5buyVM952aZLPvoN2NyXaPnR7p7mYr",
  "key9": "DxisvKirPPG7YkomNdGie26BxoPAuEVADivTpuWR7RafooBZnpyYrYfzW5NopiCPgV9RP8azKYR5f4EvvwxxNFL",
  "key10": "4vyXbudsvqKRzEaZC5RpYPmAG9owP88pJrRBLASjwVAxLNmodX2beD6ScbbrLQ2TT9kPsup7B1o8bdQnzfUZ7y2x",
  "key11": "uKahcRzDy68YjdxRKkPFsRffwrbPizKbGEBmy4J6BTeAmb7aaUia9bncqBEdVXZpkYCknmBE4q5AvkmGzW9sbJo",
  "key12": "5Sr9onRGWMw7KXCKmDbnRXq1tNBsPhBikdUynpYhensB8wJnNQSLFdf9C3R5zkdox8yWS9bfzQnmWYM9jo5fQziz",
  "key13": "7VRe7Ujw3KzHZf9nEAqAZwXAKkm5kruRoqNc6qdiFQ8SkNyL8iuwA3pnKvzKKtL3dhXUcAh2gxHivWWZYPg4CV9",
  "key14": "3ibiYQ536c5nzzd1Wjk1xN5TuDiU3j7GMg4KEbkytBJSQcxZPJ9yqZG4kdJn2TVBjje5WY1oxaHJRPe4VVPbUfyZ",
  "key15": "3Fu4fr85LSLJ21WojaGETupMuuK6W9u8bXYv3QWL8EYJTyMN5mQ8gqnC9a2sRNXk8cKPUiozLHr7zCWTUtpZQ9b3",
  "key16": "5kfWxAnJgTUaAS5f11Q7ijSr7SJuvuyZzRe7GGUxGxTmyrRMmBBrL1JKQDxTD3WvU9FUB8hoiK8JihCexaeoDcNp",
  "key17": "2kHv6FsCsH79PyBEnDi3PpLhwcmCSKa6MkE6nnzqWyWTCsXgewNfpv9cxRLuPPYCzvzzPsMPNkRdoQ9fjXpzuSLs",
  "key18": "4ioTg6XhuAbF5s8HWKG5vY9peNzJ3vXSSN6dyF7vmhVkVu1Ezfj3oUDVS5dD7H5WPN6hLpShNc2VksbFGPLiwc3K",
  "key19": "2jtemZtjMuCfLMPrWCamQuMKa4QhDi1SFkuzV8utYzj77bEWBPEbaeHrZnuyB64daukH4dFj4iZmx5vBCaY4drRK",
  "key20": "2i6CwwZ9MVYPAku65PF7rCCPCS7wntna3zhmD6UVCHThR4amFsjHizxuGut5cosc9tHDzm9qfzvbHMh8s7rbdUHv",
  "key21": "H2ekY1W4o8qqnq53SDC5eBSAEBxoesyn6w3N4FrszDuoHvdb9Mm85zgazkitjDi6LmDAqdgDsgM3JoFWrY4De6S",
  "key22": "3dynyozZbishTkytJQcA9d5pLV8dPu1hvQLtuauwgwoHKkeXCh3DBRRZ71aAdrZaJWmxjyX2H6JRN6eALXCaAxrS",
  "key23": "2fkLzNeWrgM7Jhr7QRbSQrWomuc4VRSfDtoUmPdbBnynxUQFcLWTAg3eW7nhMYFHuLs91k8VoVRvgYrzfYmuzTum",
  "key24": "3uKxWDtEerUZDr7P9W7dzQC3sSstLEnHuK2JpXYuhpPN2stajqVmYRypG49uVKAoyqT4RnB18Sz9RFj7aLmqTFGt",
  "key25": "51kgkM83rbUrxJ9ez1r9nt1CPCq3VUXgnG7Vp5DJZZrMgeBJpYn3tyjwSJMUgyxRfkxvE4YZeLmmj8enwF6mSqhd",
  "key26": "5GHh3P4pt12Q84bdNmi89sbaKJdhMSYMjN8ArTuh4GKT53xi5US6ErZm1A6D5U2bQNbDDczTsm4GmsziYDnLSWTs",
  "key27": "5PzEZvvUquxXVhLtN9y4YmWFHNZtvU5EFGefCsNa8Z9EZZ2QpCdHaPBVbzhDV99TpgYqAfQHgBgnKZhB7BHSi41F"
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
