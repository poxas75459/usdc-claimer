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
    "5PuZnonaVr3kQzW7uG2F5mJs9MDybULN4rCTDeDMPmVWwsGBzLq3cKUnpEAEryweiMqGPHVXoug5erziELrdmKRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tGGYjNWiMDWawNXwqefQVQdUf7ckcC2k498ABfXFxJcHdpwmhZMeC1iZAgfFUg6oWK8HWoAQmKmzN4czLtq5aPM",
  "key1": "328tuMVAvqk3qKxqzELc2DaiKn7TcQpFG2ViUrMaY4e3eVMKJb7NAhAQeHyEHHJpwvw896eSMz3xhUbJFhXmeMXb",
  "key2": "5coBsHSdtr1FMnyiMZpU8MXekyAn3v3MdCzGUhGrh9SmHQ5t2pWkmz3JiAQqzbv8BaWSprDsn5LevfEsACdjFnYa",
  "key3": "smRRzx8eitHMbdMkyNboQ4xZWCQC3UvMvGBwQKBaT5yXwKFQ5FfpHdtLLenGteYZKFHYr6Aq5Jknxnt4V1oBdPH",
  "key4": "5SdDnFxBMWoD72zvST8qj34E1az2GahfHRPr14YtXYibFuDeyBvbPRXnsviUXd1AdUteEhNDTT4891vbcscqYDvP",
  "key5": "2rEvWom5bMgQ5ZpBi4EZKtzSwN7ef4FajrJgXBAJU8N4EC6ypNn8ssp66CP8CeEwkjSbtqfXhPp1xA5krFviSLcL",
  "key6": "3iYQ7jWrApofqnd3LAQihjV7rhgfEKnQ2NYDuQCcSX5tj68j51A7NCEDbvq9DgSd954ctUabnC6FmhfbkQwJXGg5",
  "key7": "21rL7RkY4hwHcuQJZsuXpp3p5MQGeY1F4J8KCLKso52CD3MpcAXL6WiLkGjFJN27G7aaahUdixYHMro7Yer6djgf",
  "key8": "2sCA6yQYHVvQskDpkE65RYr4o6yKnJkVs8cjvSTyzzN6KyisX4NEGiunCftBEmzDdibXcxFRreuibsveftQiX2dd",
  "key9": "5z5moD4zbA5ojjW6n3qFj9Mi4Z9tXZ64SJGGgJUBAqLdxf88DPkUK7KtJewWtx3B5vdrRrpcLBo8oJwLyo9CXSdo",
  "key10": "4KwQwYGzP7c1fAkHq9bDB8uksohsxFiBqqzoGowQEjt8Lwk2Pfx3Go25gFv9AaSjA1mSMnpJTNcs7BfpaU9Xu1pd",
  "key11": "5ebEu81SoZGPA2P6zzzvpCKCQe9aEFQgExuyQNr1teMRQzX9X2hKqFDLe4v387SqUGvy6QXn3QX7uDrB8i3hkBwa",
  "key12": "3gNMYatZwRrqA267xD1DgXWrsB32zHLDLAYz4mDTevctmeBmZy1Hn2crZyfaWxn6x61K7b4RMAhNGVs87fACywjo",
  "key13": "59YVSkMwXGn1WtRsshgr9W72ehsrSzVouZPmJLzFR8ob8jaBbnCLETZ52S42oBY21fkr3gwTtPYFX6Wy88Hkrvcr",
  "key14": "KqCfguWxRwsifUgtyhiSA8a6Zf2DeKf9gj4dKnqkBQkDLwQtwG4aebsf5ZgphVWkxHgWiJLEKHBemnfzJMg4gtW",
  "key15": "5rkCXNv9kNxYDz9sYQp44pTxc6UZC16WKD5qKGdHP3dUybcMypoMg5sTtz6vyDat8SoYvdUQC3ih6UsKz2UncTHr",
  "key16": "2NLcZ36S5L3qnb7Q3UxFyFfx1eGNg9MUqxYtUuPF6NDHqFRAjQLSb2ZbMvdTkDUsV8Bm5SV4CWyJHCewsZ4yTgk7",
  "key17": "3Be6m9yEbczuHLDRfk5BZ3Cs5p5yFxUGDFKLSvY7X6DgSPhiLNMSLf6nxisq4ZqcSvMZ4ZgacJV87na8bmMtbJch",
  "key18": "4HGds8y6TLFwg3JncphxqZFWdrJLDbhv2Y5q4R7GV7KoWKhPiVZn9YtvMSMPpnij8ByUuQTxtkYSFZ25Bcia1ekg",
  "key19": "3b2SuuTPn8cRzqJJ6HvirBAcY5QpX6xkbDxaGUaa6dfED94cPpNhT46X5jRrApmFbva1UZzcbwAFP8PNgUJr1LLQ",
  "key20": "5Agr2Rx14H7m8M8cYYsYTv5iMj7NT9angb9p3z9efZohjYADeuQhMCpya9obBQfCrDnSyzF5qgVhHsDWQ6G6cP3L",
  "key21": "4Ldtw6qxtjna7Rm7oSyr5DYa8EL6FPPw2vbRoiq27Vb4CejwwciAnzNKHCaqjpkPhSSEiMQpWzjMMNiNZCMQ1VtR",
  "key22": "4Pf27GAFAr2DXkiTdja7moTyELpQtkfLW5NxSM1f696zTTvDANNZyeg8sZp3NPvGK2Hx9TaHJpp1vgwtFKaAhqXF",
  "key23": "4skZ572xWhsJarVgPYN4Gd3ec8uby4XLyRH1y7AXEpHpsSrRyESE39ZW6SXLe8Kkp1Kb9cx5XhWypPeSJdE4y8Wg",
  "key24": "2XcDT22SHDCa2C9AcTnoDsWmy5z6JnHRNu5MwVPncoRahDr6PSA5L6HbVM6EMMf1WqLLCMGu9bYACxFqAE6NZ6GD",
  "key25": "3uLHkpwcv5zE5ZCLrKZGonrzh9STxRZMeHyTzVuQFpgvAtpWFapc97yrAnDgueRhASxgYGZ35iATkA4TeqaCnpW3",
  "key26": "2MEZogKAES4mDGY86CEDRwtchSNfKs28G7b33aRGhUGSQ6iovtEdWD1XHyKVb6ThwCahaHVWfXL8dmAKywcGjjsx",
  "key27": "3mKJzuUwNBsyxL9wZXKr8QsDzdU12nnEbaBeJ2KPtQzKEE5MSjyHNBDMtEiDVSQKNS8KeywbUQuzKPUb8DaxCeXh",
  "key28": "4NwWKUaohPouui9Yo3ZkZsoTzD9hdo5xuUzEK9hHhg8NJ5Gkq6qUXzfYhUxDrCqjLY1qqwW3HywoWXJapK2atiSJ",
  "key29": "59E97i4tE6EdxLHPZdcFRMvpwJb97yiyQv4UFZPJWJTjBxSBgVvg94vYyWvGTdoS3sVLdy9exB6TW61kodMwfWaR",
  "key30": "4GXKRfmZ86sgwwRZgmprF51HbE71kUUe9pvMk3n6cuJ17zV9nrgAtQD4EVZKnzpeZ4o9f1czezwutzXYrvW8Xxjw",
  "key31": "5u3A2Qaw61mFvWpvkZuVgbS1n4C2Na3rG9ER4pndkvdPHPS1Bx4wtwQUmrk1arNxNZjuFz1CyNbpxC6hiaDPEEn9",
  "key32": "5Vv8ovER7ZZzjyZJMdDGE9cr5w1SeBs11gtebq8U8yW3mCs18D8VTVursnawvMHmjJQewYCsCynSy9AJyVTRLCCm",
  "key33": "3PNZreJZHQqvRvzgpbEdgJW7R4cA61eVLdYrQYnTHW3wRZZvPqzVCVjEsfxtcUNAGGUVHWcYoDoV7FQaewTBsbKx",
  "key34": "33Dgx2dSSvnWnBMMLdNL43AkAQN7m5LMWyc915CuZ5BwLqopXKBnySxHSw5PiThvijyYXJo3qGVKG3DQo9mm4jbc",
  "key35": "3AfcC367gmg17ozob3Vn8zLDAqaeW5NhckH6WTDk7NVHJJMSigfSna2jbuNQmUQ2bXfqh6cnivDx3aFKXDgHicY3",
  "key36": "5yhcHxtkdbPHpN4hPEvx5n3zRSzAxHjrG4Toh2ECvFAdjz7g6g4m4TV9XSq7stJjuGVvXRkdudsvGcBnqWduoVTN",
  "key37": "2CGvTEzKmceQa4EcKk9Hi3sLfSHUfePpKuN1XCe8pGf6NbTwvoq4byqunaUYQgDPeVQVay3Z4Z1NdDtKeFuvpQAL",
  "key38": "4RFQYeR6eP7f7hpkHGwW3p8GbaqX5FHwLhEYCcHyttHGTrSPwt9MaHMbHGMVRxgw4hmSJLE5sngiJM1WysMhAfQ3"
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
