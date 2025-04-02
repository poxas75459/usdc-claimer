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
    "5FArfqs6qsPUX6FvYfZHej75nRa7qDWEnj9krs4zpv39KvwXLbAvERtWFWx4bBgnd1Mi1V2FmDEUdWg6r5DXtZdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hb2CXJPtbvhBjbgnPeLEevgqF87jmCRK7tx3L6AJsb4NiWeWRVQ2ytnsZBraos2oi1Z2YPX13Jddja53kJruFJn",
  "key1": "4UA2pZPHqKgfbpT6PXdbC4kJtTxEwvq17kt8JCf37XxYLwwVGscYvaK4ArzawiyqbhTy59Q4i92ueT6kkUdv3N4W",
  "key2": "81jGv2sMu2nLFDADiyF59FUrCnn2wpJU8MGLzcsfofDusZjMxSqzgikLoqM23XnXgpoLpBQEsz6i2Ue3n1T8Wpx",
  "key3": "4jj7QYmNJeLwRp548916xV3Q5QxKmVa9ZsdQCt1w81Fd3JFp38eUrf4qnzU3fGKVnpysoqbuLDsiNmnJKNjED4Ux",
  "key4": "53fkNmzGkMeqA6XzmVysMbh1n1bpsjc7VXEk2u4Yfmcjirc77B5m6qmjWdLiXhDMTqKuYo3mVrT15CKxvWqJPHYx",
  "key5": "eaxFTfVshkqRSeAUdnDk8jV7QNsZdQLRCWNGkSGStKgvFyrDTLS2v5rCYJbfNUjj1Ld6Cmuc3ADfGVbitUJoNMk",
  "key6": "5uB4MZQawQypx7JFkVHGGZt1xub4mAgmV9VEmZfyLyB4eUju1Fj4gVsK3u6FsWmQp16BP7fVrDKjTxGasifjAtBZ",
  "key7": "35BFxe37w2rXevEjhZodEinF52Leu7YnycJ3cgMfaPGRBhhKT5vuqBFER5Kz2PwpG24GJB1eQxGCocwQCPckZRzG",
  "key8": "4nwAxRPs76j4jerU27YbmNNxud6K4buCGKVsGy22ZRoqm725Uev2D8VscT9WSBvju9QA2FTcd3PNrcYMrQM7E9TH",
  "key9": "kNBAFVkRcKsC1AfMxsZko5p3c8FAQP2WczDLDsneu6tme4eMwvkULHpaTF653NRNVVqQpS3w7F59b3Z57NTmcU3",
  "key10": "3NDWKWoZ8XzxYG6wXM3oDi5zFmuRMA8KPm41rg17RKuqGk8433SqMLHdqfagAjZySVvcwnwA6SETQWZty9vQcbHo",
  "key11": "Ww25WSR4JsAZg6R8VTGUXoStJiaWRkQD1TMu2HyjFaJkGy89UMwPh2WqiHUqH3AMMe95YRWwUtx4GWadn4n5crT",
  "key12": "4b2ry7Cvp4kWu6PZ1uXWgdUVc9ZzVjAyDS5wXrP3dw1DHHmJXnz1SfWStQxEgDMzjnE4Ptwnj7uuYsjqq5XXfyxf",
  "key13": "Sy6WbhzVPfG4AnPZ3m73VqzwHoi4pVJRSqFaPhGuLVmxnQfTAxNKde8CLkx4tyobJmLr5GNu86Mit7FTGLFdWA2",
  "key14": "Ex14apGaKnSkb9xHuMH95zabruB3GcF3vghpSAxBJ9NhWbEeeepDun394VKV6Pi71rny3ZJjzEzatPwURXtQf29",
  "key15": "JAqsxRWJUDotruxGrZ4ycjwDcdUUsWqzNd7Pr9iNJFs6i3hVvdM4UmLvzH4S3AJ3vnyuWWE1hYu4fv9HceyqUQ3",
  "key16": "eAXVY5adjFuwG3RyTRS5E6pv6ctD4fhJxhxWKerqJg8dV5A73oTKUyKghW4NG8SDBRzneABwUpVYiN6RhS9wjvX",
  "key17": "49bR8E5k3xC3iQUjowzJwiUaGx1KNN8VLnT6QY8vBW5USbxUrhfcXjSSBg8aJNwbmzHLUQJrToT2ZJso4XZgdB7a",
  "key18": "CNLhJPmW2fQhi5v1WjR34cWBtbmGRq4aGXX6M9WwVyCZhvYZLuMKK9QBgDLyz2WCeUv5nkRgXn8GdcyQDNkSGwK",
  "key19": "2z1kvjndioNnnAQkFd8QZHGgk87BQnZLGjP48hNNZBQuUNccxPcFCREAgscpBiGVSSFd29RFq5bTahfPPXSfuk2P",
  "key20": "3bgVS2nSFXK8xuXKegSC97NXkEUoX5aMzMGx8dgatJ7mYYiKUvEqzuKgiKHw7aLVPyPbLGPTeBiUMfmL69NJB6hL",
  "key21": "WDUoxeW3WRuuTWBaMydhab5TZTwfNoeSbP24YTBmCdG2VFxrfchJeLD4ABvZE4wPEG2rMjjEqQ9AiLaVvrLDc2Z",
  "key22": "2gkk1T29xmDCwnBzwKHdeU2wh7gyk1GMoubcWAX1bqna9cosiWmnNwdRzzngeNZ5BtcZzxAuTyhx3af6tL9cmwtc",
  "key23": "23D6SUyPxoVz9pLFznBbATBNKX6T3kBm6vQ9Uh9NuxocNkRwdBnUHubVUR7xUeUNDhfbMbWdTshTRz62U4tMmtu2",
  "key24": "5rwPGoiw7afRz3hDPvfEWv3qmqjj62J1rerajUadhP5kUW3mMF8ds472ixANzzaStf9dc8R2P7dz5orHCf6qfYQ7",
  "key25": "4BkZHpg6VY2F4DKdUy7QBb9WabY38swZfW6kpMKo1xkzysjasHKTCESvwwSypjTcdww2hShzH4VD4rDWbzre1dED",
  "key26": "462YcdYa3ztzsp1xVhs66TELfNwu2w5BGMVqoJNUU3TuJ5ayZxAASknpqFtDwkVg4mt1pzub1APBgxAHqr1sgs3c",
  "key27": "3a2kAU1Zh1yyF2xPXHkAgRW6nWeveGBUmp3v7TY2UGnob5wpH2eSW7M8JLCBHNFkAihxfJ8Ba535pJNNxueceMQv",
  "key28": "4f9bfAD7djgESrmotv9fXkyJw8wn4xGsnsBHFezK8w77gx8tcB33mwkc6F8kMCreraBbYEfhWi5igfKPFUK8jQGc"
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
