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
    "56bAchrEWTGn7wCbn7xfNSMyrJtUSf5PCzhFEVvGFLQ5oghV9nPyMpFWypsC23x4gSRHjEzFcsEhHVAk9773eWGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fp34EfgGSfm57c4HQkRFJ8pBkSGukDPLaxnddz6gy5SQptXUuqhf6WoeapV12dPeLXefgR4BFhe8B6SzXhbXfuC",
  "key1": "5UsRsBJwMGnXQY9idMnmyxrHBnDNZ19rUvy1tBe57cHAsdVj3fJwhK9AdhRjN6XPioBtykxoVoQuDVkJZL2dZGMe",
  "key2": "5eqHrQsKnf9SPWNNbR5H1guYA6K49HyU34BBV9SpnToXQhXPuRK7WAdaTiresPsyc5zB8uq5ZHCuh3JzrmYUef4T",
  "key3": "3R8zqoK1Z6UJ1J3LqVwgFbeu5ghuyjiqbSQnJefqKyqEegYzp7hYebubpsA7sAkC2aMNZrBdCBj4D6pPaT8fJGj3",
  "key4": "42DkXhbY57tCk4BSQfcMKs7q7cHKTJta5L4kVSvDsLEfofbEiZZVnaKQShC7QVnqiCKJwadb3cDJMAdjDAL2rE6z",
  "key5": "3ZUfJcutimg58eoeB4cY4egKAQo77Ey1eSZqXKkDA2oUeW9am17kUjK1Tu94ScazG6Z3MHGZX2BofkCiEV5ZyY6z",
  "key6": "3MSgpqyrWJfDcjw9ay8Mwi4Y1dpktfhhSMNrfaT5WuoJukKxcHYufwjJFF4CLVxdepMPaENiMhnnL1dRYd32Zi2M",
  "key7": "4NvfZFy3LpAEijGRoKGnuwsXu1jM6rPsYsq1ix6NrUfYCckbmy3a2gbuDHc3d4ARrRVXVYdgCnSiBPN1R1ihX4tb",
  "key8": "394y2pYZdPEKvZ2tq9sVoCubzLrAHBR8KhzqAR2Zp8GZidLH9V2uVjGhcru3d7WSgFm5LjY8AiQwiTdc441Sp2XA",
  "key9": "3Zw2H7npYqfrSSd7SCeHpw9VP8i9zwKgRsYWVKRCqGWQF3cDF17cXvTPDgBz3pQtHMJf6vxVaNsq6eFXrPzuuqhG",
  "key10": "5vXfouworEQq8y4koi8o5ZuiJJSubhPQxzeHfRo59eypN5NrLiYGaH5PvyCBAeCr57tRUfTJv4gdFmeazGNxDE3m",
  "key11": "5HzapFjwtxbfuTWw3qHGx4ybQCc6kBe5SDprcHNHURRf9WQtbzfkXWFEcbR6cuH6S7ohApDoWmYkJE7Thkn5DsLD",
  "key12": "5dJRUYC3yQt9Kjjqug2C5X9FZ5QrBZCCFEc56971jJ5CuzQpPdf6zKRcxKCkaLPEkcau2HhmpWaTpxMMpWGuig5T",
  "key13": "53jvALz35Fr11SmtvEfPio4AySgRyiYx1wUMdPBpp8tkhextaPrGosghup6fj4SBWyWgU1zTeDrcSQiguBUAzeGh",
  "key14": "7CTv29Y9RS5tXNUb7eSnR5MdHxDYAu2AitERkmgpByuMJYqvoTYpihzXcou8PhVt4u5rvunrz4J97tjJUheew2g",
  "key15": "5ojVMDXs2TosRYBsnXnKwhtnCoAxq85VsdCvxAE4zfHG2rTJCY7YMPADwTTL9WGsozxshzvnTyMxe9FCNwxynXp",
  "key16": "3rFHdfkVz9tnjM8JJMLdqpXRUZTwbc1WoKzBYB9713YkyhBSW87QPuUZ7GJcDSSfeZhMUm1tCxY5kfYNMaCW4gK7",
  "key17": "2kmBKJWGK3acaDJmDpXhsYf1PJx3rkuMPGoSsC74EuWRqpn1fSfwznAiUFdx1uvq7hpoHpzfqvzekDLtxYrXHdCM",
  "key18": "2YeH13ABLxAnoSQSKS2azTyEsP6km5byL4MsQgHrHoa9zimaLWeRuEn4CSqj16iLNPzAhqzHkY5cGRU9ECNgxsnK",
  "key19": "4P7a5pcq1vhN364E8DwbNm1UCsdaiwnyU7xAWuescKxfVq7DvR96izkrNuZg5Vdtcr3PqytfFtJZnLV3YnuT4u1j",
  "key20": "LuoCUQ19yfHJPb3cFf2xp6erXsdRm1hdbWnRBQ5npUMqtmJaycyRKc62XMnABMSBzKv1tUjMTduvRLY2wt8kArT",
  "key21": "5X1v17mpEkq2ETpKGJJL21uB36AXVDTfMbNztSo8wh1sTGh8y5PviKFuZF5htRmdS2W9Qh1cVvhmVbZ6BJYjBZFz",
  "key22": "3oNPUbPSEM8Xxa4nXDCS2mxk1ymewDuAeVRDL4nxpQSsuZnTQzi5qPQBFkkLbosF5WCxGhirZA5hypgGyuJm2ANh",
  "key23": "CyK8NQvSi479vtxVbPnRC4xwkyCWKtvYUcF3FzmHYAbheW66U6iES6trn2a7HzmZDZMMLADidRLvF3yczn4utcv",
  "key24": "21rR35NrGdYJQy17ErVfgFH85eAUY1RZVcMvqKJd9AuWUCQeatMcxjvhygdPUMgQbcZ8SEoS3QpggtY3YTXnJj5M",
  "key25": "3Wdz9vmD1Y4QSZZQWWjU2BV1HymqMnQ7R64fEFVTcwSz7m4rmxsQSgSBVGUwJA9QUo8JeUEvhDidmpmVQJqzL96d",
  "key26": "2F22YqJfr6e8Bc2h312zM88c7XVKVwcAp3b5M2Jiw4gDMU66DjczkWuFt6sPFnbbccZmS8FAXRsc7Ddf2ps5ypMv",
  "key27": "57UjTLNmL9sd9S2KvEQBhjBVJWGFUj4qTTmt25kgC9e8pjpDcr7xBN566eSCJVAoHYRXR4qocDZCwEQGp4tQzevP",
  "key28": "3E6cMTqk9imuAU2ZrCAmNrgdt7KpFkBvGN1uPE4wtbqA5cSTYzpB9yaZhSAqDhSVsaqjfBPSM5c6Wz5NPBfZJXwR",
  "key29": "4hWeWuL9r1qmcEpu31zU44ExZYRRbfCSHW6EpxBdgWWtmPTLDUkGAyaHrAWpjDGWBDGtVUzfPjQW4KqScmfhFiB2",
  "key30": "3gTVbPCskLWrjiq7vNPvZXNLtjcwGNYeZpE7jxVwZApq5ZnuLXCJr9GrGd2ke6KW2KNdFmJQsCLrqgHCamncBF7E",
  "key31": "29ochxZF1cdcHMGGLCR8reYeXEvBwMssSbE3rcAtXBFzNw7sCWBz6XHV6pVCVgbjVtXj7FXgWpZx1giLJbp243ZB",
  "key32": "4jeXmiZnc3bSxiaKWL9kSxhL46DvjUEHM3m7A4Y3Jiq1J5x3niU1FYKJnZfSAEFrPfPTt4D9WbyoPrnjokQenNsc",
  "key33": "5MFucqHqdJJYxRrsoHHNkb3xF2TRhnGtAPRCkMrtMQstw9Vq1WjW8iBm9JykimvzaG2F1UkYBZ9KXRPZBqZZ7CQD",
  "key34": "4E8Q26Tx5R7Qx2fAshARovvx6TuCvQozTQAEhw3wF5Tra43QEbxV8ANven3EeSyaTF7pgicuWYAu1dqTRrYgoW3g",
  "key35": "5WechGeyYsERM2DPbHYaJuPYpC3mboXtGHYyA6YVikSRtL5SJ543EmHiTmByziCWW5WSv2pArZeS58dpDKtNr8M9",
  "key36": "3eUZamZSCykBHgMf1WXjrFANAGrLX9YdX7fdrCFK6gbekrSk294WqsByn7ftwZr1o7RSNhaaBfibet3Xbtj9huL8",
  "key37": "BBjqfhLie96nNbB3DNkq8D6Ez2bvWP6KvizmfeeVKicjK1DELU6WXxjn7eWijSBj3YUWPBxoMTVkKbwDwkMc5jN",
  "key38": "3Z9WygXgPXN9HpXsAy79kJr2f4dvpN2bHvrS2iimHxvUszjHPffnaTE7RNgFaTpZKxborB8wchp5nMez2ESfHziY",
  "key39": "4juzQngbSrF4mwAgyHKXiuFKoac9fgiEhyEZ6ezWQ7X7d7BXaaMpXMNCPB4b6YyF6YWw7TgBJiHfWEKXjcwcx9Kp",
  "key40": "2TpBQnBQ6mxdJzXTAYGa5YHUZ9bS16VxoSxFr9u9NDWQKGL2LF1VwpMMV2sT5CSHJxXFPqpM9AwCB3nXfS9PP7mA"
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
