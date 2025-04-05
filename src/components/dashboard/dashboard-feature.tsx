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
    "5yujBkM5iA37WhEsq7YJ2EEZzBSsBCnP9Dv8ba1RqAjwyDqRjuvuhgoUDtJvDCho2PrF4QEJeJLCGjRGfBg8d2XW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDLGh4mdFh9tb4XgKDFeJ5hRxdSpjFYXxQcE4ZWqQhrXoMEXeA9vAJPWSdT5xuSuBRtWzZTg1b7336TobmYiWNC",
  "key1": "3NCkwm2wqEyAfxh7jEzoTkcg7AyqL4DKZDf9AZpSir2AoL6FgQmaoMT8ZwzNRw2gK1htrxtRXykXBZkngGntFKEX",
  "key2": "4JQ6xrN5G8HLyAnmGZhcFwoCJP86YDDcY4Sr4S4xtCqMteP4Mq4LhEomvwtsDhk5cBhkX7GAzorRyynHWveTVHBu",
  "key3": "3wYqs7W5t99yv5jHTUQR9daBg22R1WtYEZoisoLwvum62J9xwNDr2iFJghFgKEQgadSsAReG7RDweDYvmdpfe25Q",
  "key4": "5iSnymRuMj5Vkh4GBXQ1sJaFV23brx1Lijsnvn1PfjND3van8okqYwALMfECnrA1d6NpgJCtQgtsGbCthQFqJaKE",
  "key5": "2bjxq4BBCahnAEefo3HDcMyF7XBhgCVKAsh1jzmfyCHDHweWgQkFhpf2n7wAMMK6DTGsPaw2Ch9nNSwXcFwt5FhW",
  "key6": "3VG63hbrcHa9wxHJu2GN8gBGVLLXiwYWJXAiCxJXFckNKxqpTC1erSXTvroDDhpghMZ5XXSPRmJyREpweRjUAd5j",
  "key7": "2M4yVVXcVeC4gUedZfF8GQKcsXxbXqfDvmKJGzAU2JBJJTvCHjjqrvtnFfTdLqoC6wGeVSALnkfvmRDd2s9r5AGS",
  "key8": "4QVfoGU9E76qW3arEy1Rx4pMV7ns5dGv27SrAXzctVPt23yxUPaT6PQNrJ7iBfpRpNcHjp3ZYjBpoajB58xKszRv",
  "key9": "mouNX92gFSwxhwnFRqc3atwnyeHKeqNAnhpFdj7wytjAgMshhHAVM25ksHPf6sbpdh5fLWE5J3zauXVwAmqsJys",
  "key10": "reshWHGETRLZKaAeQDaaCeQXpiRJ8Uw5FQD7gdVwnis9wTHHZ5XY43zMCknDuJthukYPxtjZ9kcj2jUCDygoeqi",
  "key11": "4Xpj9BDumRLw3fRGXJHBhn3UtfcXDvy1qjQPhXMSdxWAVbGCAkBLyTCMKTDegnUzE3U2yMv3hhxq6KDmNWG7jppQ",
  "key12": "277ZPZsgj5XsQWnfaP6VhgdAqN3HVJv2vJauMGGFL18sfqqQV7kXS2RVss89Ksvx46VjxmtVcQybKqFp4gDPTYV7",
  "key13": "66Cm6hDzpCmENsMMERaeyptZu33ppjjmb2NepKW59Di5jJefzy26PspLTLNkJ72sxrQXDkmMU9C9SK8r9iUHg7fk",
  "key14": "4df9L5sSYkSnAQrLWNNfTiFn9DaiyMJ9h1csX9VKkrdEPeuF6qZH87k3VrnuUbLyoV5E1fme56C69hz7qMLVMXu3",
  "key15": "37WUUj2Swmq3bZNa2FETH7tt4JHaUJD96n9uCWofRQB4nQZQ3gqH2eNJ63w3h5hDjdqxvdCnQDxHd2uYqSS8PdAD",
  "key16": "5rFYJfukXk5Dj9LfyfbWbzRbdtAgkx9fjBkNsqZQgpsh43L31bDTxhjH8J1r4cttDZesPVtf66nTUiSdMC9oxiVA",
  "key17": "4W1v4ZsjAqD4m9PXYjBuJ28NkhJ2eUi2JMEcafd7ouMBv8etBV7FycGHagyvaFZ1HzB6m3TDppJnJ3vXZp9q5HQp",
  "key18": "DjK8tuGnRJBjEYRCBaeCzKNnr828wAfC7nu9GxEvMm7wDFt1dGqYvzEwHeUv9pS2dNAVpBZzdYPzqcximxjoxsg",
  "key19": "2wML1A71Tm6a3PH54JQfVUJ9ZUPv2B3LhiXwLPfwfbig27QLGLUBZdLqsLPNfwNrBLJ98ryYDQSNusgBiPKHJSCg",
  "key20": "31vGS3N71BLNEmLiXhzFxQGpqjapqiALYsLmgwuB6iugL1qZGcapiA2xLRKMU3DRjXoYJUn1CfgHLSy8iXxsbS7B",
  "key21": "3XdnZBLRS22298KGwMmRJhW4iPPDrJ9kDhk3guGN7nyVt2iXgWqKbzHNJyJZC84GRq6vePusYGm3NrBXU1bA1qjF",
  "key22": "3yvPLmwKtkysGtMzpZTGiBmv7SbeAkEHzAFGvHYsiz75kumzX9Ae4hiqv16sQHwVW2xGQNbxbCQatJPyYx9H9GTj",
  "key23": "3bFPDhDr45nHFMHqsTPMhZFhykfuA3JwLw42GDsGweYMbjrfrq7MRyiMNrUDCosjWXWj635Dr3bnB1ctQXJaSkXU",
  "key24": "5tJifx2Hnqq9Uva3UJ7PEgkycYikTrc6uRvGHHUyPeauMtSKHAYfsJEszy249sZ4qBXDzAVxe9y1pyXLM6As7w55"
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
