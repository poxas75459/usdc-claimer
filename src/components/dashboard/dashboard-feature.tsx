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
    "29F1JwZQC9nBiSSTRiQH4L4bRkmeuhWomMZYgmruM3DR4A1enHdtmiHD84xnuGxp4SyGf9CYxtaubAPtPNxMiveX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8BpXwyZuorWm1LMUAwoJvAN7JZyR9HfWzUhJM9jBxVC595o1Ay6H9isjW9izpn91oK7KUP7y8QMQHw5aFrbtSV",
  "key1": "2nU95Q2isVVDDxE6qTg6gjpt2EhGNPkA8AAjTc1jqyzdmcsTP52qwbeeR5p1wAv7F86r2mW79GvvngtXTifPsVom",
  "key2": "tEM8FLSe89QPKsZjNZzaPDyY1uoozPhfQw9FeAtkbYvUYWKNDCRjtXn5PzVVMwhQ7WtW2wFA5Gt4vxFj5aH8mb9",
  "key3": "23wgwzbsCiGBFKkY2YWcGcDTUrg9U4MoiuDUcdPMHhCYxiPmqi3SiWyxMbVenKXf2AXuC4ig4h6cFPLTR4u1VQSG",
  "key4": "2q8x4U4D2CMYSpDj4TgCKkPbQKnH7h9bL3SMzDP7bnoUb7cJqKmzh2iapfcqj8HXT4G52WfQF1TM5Nm8vu9HMDWM",
  "key5": "HpH2vKPjkx3DthTbpP3r1Sf5hWRGvtWrVYXHALcQHoA5xDnDMp3XeJeFjU9X77oVZJRy6UQS55XHMeEykyR9meC",
  "key6": "3SVWAF4X22jfjDrPkpryiCxBFPLp6YiqZPWc1hK2ZnNrDyQf8Lo6nx8WT9VNi4t6xyXxGQ9U4oxeHtAHx3hDtjgr",
  "key7": "3FpVse7Bkm4dsbTnzbe7SgGhe8ayRV8BqQPZPJat5y55BoZGKkboXZeT8X471znEQ9A8PEKFzeCDK23xBUtMfvsB",
  "key8": "5DSctQd6XEzN9LMvwEuzSGnfg5A7VERENNkvVyGCAbpd2abWPMmD6A3A8Hurow89Momzmu514cLNHcGQMZo5DL4e",
  "key9": "4LZUJawCvNp3Q35ti1id4brFXahP6pYKD2H9bF6NMNZpxWFxgTkhYoVTaEJFz9nAAik56C3tmVt785SVkuuyQmiD",
  "key10": "51jb2APsU743AiJb8sssW6mZXNAxmQwXGjDk46v5j66nPj1ypq6Jky77UTVW4dgNsqwgjJaXUjitMRAXzT9SAU2U",
  "key11": "5ZtKwQJ62JGbQvUinK8bpSxF2QaGHTjTm79X6GssjHYhSkRGCs7FMQ9xNEePakbeKJUBpwKJbgyY7EHpj9sQfshy",
  "key12": "2WMT3XAMVMFsCTLexktxYPKEANao9D9agbdJRM5MaCQf9JFuiwgzKDNZZFbk2iSLRpZxJouJ7XY8zUSyDF5TDWTF",
  "key13": "23BUqCJs1VguUMfksoeLiFLDpd5NhrtsSGbtP6tRfvVQvFrwu9324wMUPFx5TUfdXApKVNHYAsZ2qSvzt5QT88Ek",
  "key14": "5p8vPCTSYjfFjg8vyRtdTWYX37hT4UWRyro7etXGGUMmHwCPUdcbGGHTHK3LmKtLXDobKxi6LWgjJCCV6zK9RAXf",
  "key15": "FfX4pjgrGvF6pWBVryA72NczoviTQ87c1kUgrFqNKEPPZcKNRnQ7qQUNYXw3GbihGnJa9xRkQutkhFovBf6gkwb",
  "key16": "UVd2eLGkths6LVCG3QVPkMae6x71vHJdgWS2QthRaca5XKxWN7CMa1djeavYAkNPtpz9GsKLZtpa4mYHkQgHfRQ",
  "key17": "62KASF8uxycGr7GihU4FmmPriNCeE4jud69zCgrL9FsUHSjPM6y6CH3ttYDtA9oY1sR6BunoiWveZR6czoGrcLS8",
  "key18": "5SRYdZu4FiaRtmyJAM6ekBgJTpuvfJcKXKse7zRaWs1Ygzng4Ucp35SUVbQMbAMXHHyMZS3kYDU1qTEntTEdnkjb",
  "key19": "4DcaPvcYc6r1qX6ReF9QUgx1eKW5c6hvryP8fbC1GpZoyBxpuJx5hAC69UZ2LpwGxaWjhm4MfxFmqnaA2ZavGY9S",
  "key20": "34nWGD3ACndokw3TSWpwTbiRKxdeqTUvv3MZxp1nb9aE4GBnTJq4A4x7zYz8TJhDbKTTfB3KQ1Wf5VRAnjpJ6HoH",
  "key21": "4rU81tPAUWuX9usgBGaoSgHnPHvefnR7gVQFhH7RftYvixQf4DxCs3VtTSSLBioBSrvwaWwW8ExwsZjduSUi6aFX",
  "key22": "4wrJQpYbS1gs6R6yWADRZYaoZKiUEtmRTpse72aUXuTpbr133G8iPt6tJycDKiFrF9XxJJVnGbEeMjnC38VRU3M8",
  "key23": "2uCarMUyBQcyGzVE7Qq6gMb6FV6Zhd7ybnrfmH2vXU6rFNHQ68C57rd73JDVH4LBgcb67kHB4t1QkeH4bjuRRkp5",
  "key24": "4vqMpHHL3t64U3KjjPZjn5TbbqwcEX9cKLY5ob77HTrDFNvc2V1GNrRc4niKhJ86aJQB4s7zv9gVtQzwxwAQHo93",
  "key25": "34Ju9LZP96gbrUUzyC2Fh6541if1ouvKCUVMmWnqKVf518EeAVGTj4L7nZBpg1kga2kuGDi3jDBp8x5jsnrcbnyV",
  "key26": "2HYqt3V6YzCFb2ARuA1n2XLvNctL26uu3twrdgFoNx1NWvrxxRiCDU1rP88aM3itw33xPrDERjGtwznnXDdYqQCW",
  "key27": "5hDudrPDxyGb93pmJwuTREmdRZVbNvWf2MtfmZeCRKUKGfgBEdQyABpcFPeeNWK3ry2WAxshYiAJjSvydsSGEXV2",
  "key28": "28jJxEE2wNxT2SmN3GKbycgRfZ28NBH6WE56VJ2uksApx91VVefgDXfSzP3AakBiFvfG1RcC2CE8fdfQYfyBb4Jw",
  "key29": "2frcaW6i1FgnnnBwqRADkz89stRFqJV5FWkVpXHBN93QWCTxQcDaXWiwxk5dFmteGmAYHVC8SvHRhZ3dbCJrhHky",
  "key30": "3iEZh3BLBxL6VSiLaDwDtWEDEYuQ4XqqrB2zbX8D7ueYWVFVhWwxbhtwcsxR2mHd6ckHgaM8UyeJZq19Y2fdnFSA",
  "key31": "5AYHiT6Vdc1KMQsUqwtfKhuucgADsBFF8YPxAJY8LogELSBudxXK1ZuTabyNkXTfNUjvnUEzFiFhRqLXorLR5Mek",
  "key32": "5D19Mrq7SinwxHiXuXJdAS4UZQiboRTJiCeoqg6n4ZYgzoTGvLXySHsnVVqR32f4q1QF3BBSG1efMq2JfWAockju",
  "key33": "3jo5nNTXp9jzWtFo53JwqVLfejCShRNsa3gjk2swreYTbWpNc6bFRUcLVPFma2LZGu15v5DsP2mW4NvKoQTVQPqL",
  "key34": "5HouWxTrf6P6jGBhR4UKAAhvDfVj4owyFExWzvENQG9Lp2wHG88duLFHirjhtrbJt8Rb5trha5CYqfbXBs8QRzZY"
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
