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
    "yX2rJdKKboFh6JaoUTHCZzPfvjkrrDux8wC7Suok42xSf91Kiqng7rDzhUKwXVbZUkaEW736EqAtLmKuS2KpMoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iKaZ7HK46coDtL3HxBcGKrTNQwbLBs3URUBFxymndDQFHNJMTVQtvmQkzfUj4ojF2dN5QJbJw3jH5H11UqBLJCe",
  "key1": "2X3jHvsqxnyZDtNpyjx8jeDcwv4GZMPYL6JNj7AAxDAB6PYfsWVkYESv2v9rRN67Dvfrfjgk4PDM8YFVdvdWfgzi",
  "key2": "4wJshXa8kVh4zzeMwyrJdTmYABNwqpNyQt7vAst7ogBP8eJunXSJRWwH9QSNkThMv4FXsEfoLfq7w3NX3WRnA22U",
  "key3": "4WbJW3JqNzsgi4QDCikqsrKsZ2EfpDfG1urGD488ovqzYqmwNpP9CpsiVTMyezcm3oc1uUABJs2hHLqiBGmCwqeX",
  "key4": "57ZxNdDpykQhB4f38Yk3HhNE7p9gsD8AyyShXwtu7F9JKxd1iSguZTGnGM6ep6wpzanB4rzDG1SEDa9njNRYkcCQ",
  "key5": "5zMac2muR4fFRuM8mxV8GEtU7qJbSNuYydzsdfASZSqtqf1sdnkdX91qhXQWXWTX6eT8NzrDLCA3mxRbUAieZWBk",
  "key6": "5aW44NgEJtgD2Wbx157xquD3UYH2dfQQ85D4MTPUA5ZdG3C3FojU3cLu8bWGhssUTJSzRRnTYDNNk7Dz9uZJqPVS",
  "key7": "4iMV5pE2qxYvUxmvQhFKoqqysWgCMJpFdYzkS74w3eDHWSxzb6uQMeaazVAiHtHeadhcNvEN2vHynFBKdhjsCioM",
  "key8": "5kToAWFAiB9Cu75A2u6cSPVsu5HuDo18aZsiBzVHTNdDJK5pdrZwLpK8pqNVYs4ts9oZVivfvrCuAXMQdxUiYqej",
  "key9": "2oS86LUejXmxXgiHRtoVXBGGUM8shXDGYBt4yCXqUzeRRxtoCdeRx3cGapzoopP4zkc8dCNtMKrAkQyPA8CvZWkn",
  "key10": "5LvCeArTXHYWSBJrUcf6xCdqe9eiTBC6e2d5L2aFAv4fxad3rXxBDJxktT6JRER3Zn1qDewvcrfe4V96yjKT7Skp",
  "key11": "3YgqJoaroxj1uNBGcfzdGbao8sTSFSiWZHzLNWhvdR7CrNGrgyzx2d75TLbKv4NQMwwak5ArVHvWYVsiqSQvSaGU",
  "key12": "4NXWWnzMdb4WqyckFmuPUxPUBRYZiCR6FwP83ApaMkwSUWKMoX9oKXZ5EbHZAJuWXzdfi6LMzXGjZrJzwEmsD4BW",
  "key13": "3248q1vMqZ9Qc8t8PiH14EWJAzvWBofxfSs7VkyDtu3r5koo6wjtwTLE54xmG7yqUhhfEAzMq39xjW3dbX87qwVu",
  "key14": "3tWyz9f8xwte3HLNiSnzfm17niagQPpFFjK4GhaugNTFSyXnQxGnyxtVPbcBqXksSVpX1dFvuVhusg53vEUmf2sP",
  "key15": "2qD9B5e4oTEzou7WLk3imyxuzez43Eefbbm2Gx4Bdo5TDShKTTHSNVaL6uJ4H8GRJFrkbyiMrZzg7SmfH3Y3UBQ5",
  "key16": "3BJLFMKpF5ZtDmmARi2PhHf1u8UGdcNtp5ELm6LaRwesHeXGzXfmjNUQNonyA3DP4VdrJUke5gVhB1nA16BND4PW",
  "key17": "Djem8Nk2yajNMBsTva52wRXwCjF3mpmEgc7RK9ePFMxmBMunXK1hNDS4QzCBTxvf79Xect9WCJWWx432zj6MqfJ",
  "key18": "2jCNgfa3XnyM4KA1DJwSDAmTbsG8tQQrZhL1AfmLdQDbBaGQ6iU3npXsMB2R5tQocFhMyjHJy85oAKB3WG6zLFuS",
  "key19": "2EhDuCMUXLzT2edEcnCLJYSVLHA8hMcGeDWx91Wz53iPHt7Nx44EKrYFkn4xanP5VPtqAhGnHW2Z9MrSmxZnMhga",
  "key20": "628w8ymUork7gxPfbxTTGCDhL1Y9WbnukAS1FjE5fsrLmo3CsK37LmTZnA6bJg95rb1Uwq6hghN6awqUZFSBPzT1",
  "key21": "4NDwDGD3hFoHngt3W1MFgdo9hpq9PMrquS1ifRz2LLEo7ciwPeqGkuk7Vof7BhkEmZcqwvN1L3fyjq1M4h5ftMSA",
  "key22": "5eECwbhzThnpVGAE14Hq2ooHtngCMJW3tjc14erhDUyMoeF4yqd4VSDCQ75Smcz347sjmZagUSHkncWs2jSZrHYW",
  "key23": "4BgSdzKCj9Cc2h7bMpfvPSeWVCvmuYiK7LKRygC1QTcSH5TTsFetQEvwN3GusxZcLaV43N9qNuzJAs1dXDJuv3N5",
  "key24": "5W9MRewq7RBoHhJgAaA59eSbh1tpKskXBCcrdNhWq8j5Yn8Do6qvewS2SR2NDKtrBHpTtAafbSbUoBMXYyUis9zL",
  "key25": "57P7sCjfHiiT9cRsd3215LxpTXULUZWYHFH2oGMowrb3xzPdMkmnZx38tvSW96F5S5RtK2nnhutpDj1Um7GAzLdw",
  "key26": "3cjV84uTAjw6hh9GvqGghdJSjhmpBrjPu4rEwh8SRvWJHR92jhAkn9AVTeAiPwn6uNwHVWkR3LSzDtqGi6Jefse9",
  "key27": "3UDXqVXdQmaAvSZcjYcWz1R9uoLTHXr5iDdezYzknnD1SSH1Wk2uzytkDyRgWicWJCNHbxYVeR4rniZFcgLDkRfU",
  "key28": "4myWGJaJ2tpFKUR5oTy43kuPSS9a2fUzL3SHKKR8cPdF67FMf3Jw3t8x7DVeK5YjTLrZJ5HvTtzYeaVpvAmD13JU",
  "key29": "2WfSQXhLHFLozmY5YS9JkEnjHJCMLTQmQW9xv5jrob5EofGYRy4j71ZEadR7FZGfCPanDXkS5smVv6tNwqu33KCD",
  "key30": "51jNAvZvvMELnCbFeTaTp93NCM4dqeGMc2UJaZ9EFJZWSS8gLCp4iEK49L2NPQDFP12m4xrhuejyQcEwy91tN3WE",
  "key31": "4VqpwUstd7pxqftcLijjkSEj5Eow9TxTQZohrmWJHnFqhu9oeRU7ff5KqFhCeCySrNUUtf4D6bDUBe6usgtx3qXS",
  "key32": "TQDqBBMQqcfXtL2dyVkqaW8wvw1NrKp5wdKnHGhmkV7dhckeSV8sKcowjXAmbKHPPBYazAaorU5vVqvRmehDJ8w"
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
