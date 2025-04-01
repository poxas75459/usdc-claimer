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
    "2pZjzei5stLowy1MDUL7xJKxT8TJXhqWKNCu95pQMs22UD5e6Y6rhLv2ZCGkUp3ETr9eW6FMdV74UMxJ9mXvMD87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xAhUkJDDSjSDsPJ1ZKdnGkeFUG8HKpxGY5aAABQ9gcwf8inE7rHBVTEmNvz2wZK7F4Wf54uK8Zv8xyQ5NNpTWYG",
  "key1": "m9yZCwLXYh9k87pCugJTgB1mXjAJtjp4do31GjrFHiEwxHUr11WPqqAqcruQDEJ7e64ddxwQheahJDEec57AjeZ",
  "key2": "3k1L2XABgseY9YWg1DaBs41M5Y8cqhYkWu7Bpi1PfGvaonsmq2914ktgPkaFxJSDfDAkprGiFNsYTytMwM8UhHnZ",
  "key3": "64BFEL48BEviUAuUbNQn74gsk8Bz4gRYV74SX2Arx8dA4UMVeWbUPqNxEojHCPw3kmjnjiK4WGfWPcqgbCpKBk36",
  "key4": "29EvYCRcyLdwwtbnpng8th1Mz8n2Bih3yswdYZxYuvRNRaKjBCrKB71osphoMJtX8ttAUJCUu6TRvxpXZazxjbmT",
  "key5": "5tsTgNF1vrR9Y2CUTRTrMA7xoptNLB9mNbpr5Urp9rhNXw7LnNEcSTxopMnVnZwVyHUHKVbTQkEUwrX7bEh4Taq6",
  "key6": "2fBXT1JLCd3aCh4iyG1AKBJwySKJxtNXjSiyqrYUesWBt2NT8ogjfVQHfPQteyMyV8xqpuUBtqinizETySzGmxed",
  "key7": "5UKuPdu4ypVwKo9vreyd7Pkqg1Cmm9Y8wUeJmtWmtmdmrpMnAY6oHBuj2AeEq5M8rge3ugtnESiWrkUyPFqj1sFW",
  "key8": "cVKhYzPk682n9CadgngeeS1epftny2VuZ6MnQ8jcxMrsC63ewV4SPUxk1EcSB5KVF7ubXhk2LHBBMzEMwGohMW7",
  "key9": "3JaqeAYmSBc7wK5pgdjN4NEQxuJFMMKz8AU6kdjZyHfwdSu1FdPmGth1W9WMyDit7LZrHak78owGL5daAree312N",
  "key10": "59tBqKXKQM6qL73ed82nS7AgNgbjsQ6bzWvsexw2WV664GmskH638KMW6n7Nj7VH6VVNprc1m2s6NKgd3AwgoBF",
  "key11": "3ioShHNHD9D4LBEh6pLEpfs66EWugNqRifHXierDfdkK4p58zYcwpsQWki2Thsr4AvHe5odxtnqZoiE8finidMaX",
  "key12": "5Z34rNSHx38rcoU4Q7cLZRrdtbNMZ8EaVcztYCKmcaCBDEvfHCB6Y8WPbXrKXYq2gCjGBgjLagaLuyvzYXAaREeF",
  "key13": "3e6gPgqnuHU2RdVhes2hbztcEMLPtDTfYv2tuAWyjYrYWkXCKxBqQ7fQerPFiZJnRf61s5ineBSBuCBQ8fELYWRV",
  "key14": "WiSazL2EuWC7RjhcMnCjdEDgCCvDiB2tLGzCB99DRZEhzDvtuPJafhJHkD2E7Lh3Z4Vof2zfBFq6CYdXBiW42g7",
  "key15": "3pYCqdTDeiTeYvLHHH1fA6zCwirLiURBW7NJdWSmCNfzHmDNaHy8aiQ8mh5BGFmfVb4ggxLutU6ZojPtCoPLgfFq",
  "key16": "43W8ZiSWNAjEsrnVoLWxtdWdLKZi6cgZtjAK6FmejpuMoeTeQqqsTHbRxq4CWfHU6tVwSRN4EtAvagPUXuQ8ctyW",
  "key17": "4hNek3fSTSSz4G5g3AZnh9uVD4krYwE8wL9d1oh7Shqay7PF9sTinEqNiPskaHk3RAWeoE4dknuU29uSBcPfTNKT",
  "key18": "5K8u6aStCr5bDeCTdjEQD9o8uQgttoctpcAf7be54ZRpH3b9TtsyHwkHrubujr6f9MdhT4M6z7cKFr46JpASMsuq",
  "key19": "5QejquN1eBvBrwpN73MdTYkt9Q7si83sdKN8NuPtC2ki1CZjuhaP5dtvJrRoMRAsjoy2RgNRhHNbiwMcKyzdot1F",
  "key20": "5XUK8HAPfxhQD9DgnN778R2ELbHV6eMraMXQXUX8JwriNKsugbcGeQdhnk3KJrTav34EY1cuNY7RFa87WRZGQsyZ",
  "key21": "33mQkqTxPFzmSTMDSTN438p2M2DZ8Gzi2bCVFKq4S56nbsNaGULgvnqVUbqbhVWzdiy8ersPCEUMkbEooYA2D3Uw",
  "key22": "4w8zSL2Q4wtqYeDzNyUKW2GXcxTqpxXdmDvKknA6H8PeD8zy44F8tJZXRxECqC31qPC3yHB7jHBeXeSQufcndt2b",
  "key23": "rNRTosU1uTxhdY2Z8RsiYtoRLm9BBzr3A5wtpjffA6HQA2vMycxAH8DGcgm9V98zFrC8yZPEYX7V7qzE4CLVZRP",
  "key24": "3JhbbkxUafi3CvgwqSsWZ2N6bnyJQrguD6AWZV7vvcqcPDStGc1z8tQe8q6BMir3ngjYwcfGrFdkh5hwph9mx2ZX",
  "key25": "2uxUEV5vn1MgpWcPYBZf2AWQcZ3Mv3s3HhER9GGitaVj5X48qF8UjYst5rZHANTpNiZ8RQQ6Q9J4UPJFTu9eLqMp",
  "key26": "329jdPKqr2WQr11VaDSLhsWnXCa6gm1WFU2oMfB2LAJ9MS5nTfhmFpC2vK9pKAQrgakDaAFzKTKqA3yudhD71wx5",
  "key27": "63DAVb9hRBjJRGBmczKTZzycDYyEocTdocJscSuvdEyFf8qdRKeEqPZW4J3x44TatwocDJNtLUiFuShTu86ZjPS5",
  "key28": "2AU3vZBMmkg7qGYCEcfDs7NJPZooRz7XcMKQ5oywXVTuW3h6Ad8DWBYvm5mzkNck6M8K1YQ2kmDRcHvg1yAkNjqP",
  "key29": "3thwiBWTo6nEAdC2oAMuKor3WcLYHUCqcBfYuCa5UWFUi36M3TzpW2Y3qt3PjyA7vhADK44C6nxkSGj8mR1NtvdL",
  "key30": "hgZKAcbB7ASAMyy7kZA11JXYdyLt9EYzniCB9HfWAvXdwD3BCnQ6ZruZkoF11BXx33j85q9BxvLNBkqHeDCQWAe",
  "key31": "4N3hfidNLDxYJVxM3QrD44FyZir9fr7JLxjdHYcREUjtQihuzFVjkixTpp3QoSwpDB27281Wx28z1W76eftGwMmT",
  "key32": "3pXZ9VhQo3tjf7cpncr37wc93bi3JL6zFevntAg1g6k8TAqP3NqPYkjeNrUSXPU6mwUnjwnQkCyMidMrd9qo6kxP",
  "key33": "zqVBFpbRveA7oSiryFHHatTzapTY2th7mZBEGzUJD51eqUx331vYRGr8QvkzhrCa6cuaw6nH58qmKh3AMwGiRgf",
  "key34": "3VzLv3Y48dpLVhMC7AUUVTjXsvsUMaw1DfbgAAMeaiEgdpndJKw3hw17rhvx74pta8fdk4BBacAenoW6xT8SfeeL",
  "key35": "28NfxpmoPvd7MiNFW4fPPbzM7kTdJ7GvEcTwy4jQEyyYTg2xsyYzjXgEX7s6JF9xYu225yhBkrdHReSS9hzBULj1",
  "key36": "5bK9LShy343sLhwC5EckzMj4gKbCatqnnXhBeXkDK3gupzniZgUKpX96p1y65Yjm4tXPeG52U4HUJtECY7SkJF9z",
  "key37": "2AiXL6VQr1kZG1Wdc3mZQou1fsLPXWkicjydiWAHcsyWMmU9nQQMn9FPjBsE47bs5pUcuxPFU91BVGgSox2jhgdw",
  "key38": "3x9ZpV4CPGJQF8HXUcEXfCwFy2cRwbkwt3i4vS7XzPzK9TGMjKyC5qtTCqGH6uXpACCeLhpfTxbKxqxUuZhunpC2",
  "key39": "4txbZqMqCuJQde83oiz2gS8ahTLa2jh5gpcdx1s1cx8DrMPeS2mUjRzL6mibk2GFkeFFHwHP5vg7kgt5EbC5qwX2",
  "key40": "5N5NY1QGQu4dSua1GYxFNcbrsBn8ewKx2BxTp12C5ZWZHD2hVZCJQ4MRzNTEGmkdrVvXK4vMj3Bb1n3pyiLYTRbf",
  "key41": "4PCfpi7Ek6cWBcab9MzekrCTFoTKPuyNm2R4MkTpJ51fbJxaWAJLYFm79VkLqQoB8CWPZBbgWMAN2hton4r2rgZP",
  "key42": "32nanqTFFttqPi7ModanLdXsM4Xq7uUmirK6UfCrS1xVx21L4rN7EUaptY1BNUPJMvP8jM5LtvWMTX34wgKpcWes",
  "key43": "5RwhQn13oyLcpnwMf9oXpPhPEijgWpD3aBmrFdgVtyeYdZUD1WqfZ819EFK57kkA6JYpSLfhkBCwqWkLfZ6cCE67",
  "key44": "1eQxaGsbXAMUqsEys4wjZ21dsJ91mEDBDV5iTQJDiZN7WhwRQrALJbCyKCxdyyQeKn7Z4PoBZXmwRVbnTYQqmJb",
  "key45": "3Tu9tgppMpdjdYz4VmeDkRjUF536dbTm79heUkq4Au83HCEtaogAAaWnKqDYLayzTeW6kVGM3hBushMCczc9UfYe",
  "key46": "sJwkG2kB4Qj3dVZ4bWz9WC6YzRDZWHWDsU33K9ah1iejCQhYkj9ov4ura1CGW2YC6SKoBf9CwS3Gjg7XJfMbZU1",
  "key47": "3pFzK4u9BQF7JPijqJRzdbx3oXLrWPGGUuxrbEJwQ6mJ4hSCg5QasiHoX9Sf1WmNLSu3iMemUXwgn1Q2Wzife338"
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
