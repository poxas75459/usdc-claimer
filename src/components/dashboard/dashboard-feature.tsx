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
    "54wKm2hqiF15V8PvB7zjbP7LrF9zEUNjd3vsrKQ91L2sLXt7gjc9V1NZ7AKKRWnP4wzgQpdedF4x5YwN9hYx62NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GPHYSPmP6z1oREFoSL8xbsZJha3RYakLnhqRmRty2onvfVLfGU4cgNeViiDJ7hFf8NfgygxzzTP7grAU8kTmdy",
  "key1": "ykPTzTpFKzQBakw14DuvWcvXbVF8H8BWYdsFHMY1xniis1zFw9sa9Seut3Xr4yHgr7AAofFpgE9LW3aC55pchEY",
  "key2": "y85e3nHDRscB1zDVYb4zfLxPkr79szuaPN6eQFNMAzUJbVD1bw2SvsnphpPKBduFMpfLQbFxQS5Y3SHWpsEc8W1",
  "key3": "3GgUJhvDoijda7Y55fEf2SWXuvbx4PZhxbWSgNwq9ALnGsSWKndxictddgEhCuKKqoN3Zgp7BXGtqebi1vLBa7do",
  "key4": "33qug151am8d6fdSeBDrvwQ3B7gcyeCd1DeCZNGfczhYB2g9U26HoHjvhzDToLCpBVnXHmgxhBdesLXe4ZJmbYfj",
  "key5": "9HRube2kZ4E16xftcsffKVy3QgiCXjv6HLmcbNgvg6uwixVDdwfyV1LjTrwScRGudPnZjSKpxBcV1DHu6iJnwpT",
  "key6": "3qWPsZoY9H2Wq9pdermgiuxP1Bx6HZ3JH4YNxb8QGBVkQUa3e1BzygmX8TgHKUewNiMycgQqSXctbHctynnneot",
  "key7": "2Ei7PZYuKaAALutmYivXN5Z9fdGQMH2AV1ThBWBbv251KgJcMyzwdfqCng871hQzA64Befv3ocKr3gyvzNJmxBo3",
  "key8": "4hNVt3gDPq2QDvefJip1CvEpuxbf9DHtViuZGJ9FifAxUkKK2ZBNC1G4wzAhNH7FZ4yZnCcuQ3wMcUqdWp6XSCAX",
  "key9": "AEcjgKrDCT7QixdGZyZQTeBUTzHGQh9MoAMq7M8X1uagbrQk9w9wYWKmuJqrjrmVH4KhfcSW6FoPgGgyBSvQdBt",
  "key10": "CUVw6A5rBTHVftAnLy7EV7MGYfqZx7MHYkUvFgpmHKuZZbfjqwzupp3TRvrHHDzn8xZqxC6nhc65kzYvScL1cje",
  "key11": "53uReQGcifAcXZUBFoP87tjobyBP47s4DFaVtQQzECbrCWT9jYL5XkwTW4tfx8ErnCpvTxtpWyJgptbeESpDbpZj",
  "key12": "YXK5YsVmTysszcguf8d5o8B8u5azmJkPBS2xXbXKgEhkXsGTY4oFA27F7KyrQpem5GdDPVPxjNP2AgFbhXLK9Ls",
  "key13": "4SDX9QYM9i9imkqh3bwg2PeSaRANPV97XcLbDZVDNbivJ128SAsCA4QU4QgVBUSyXyjTiVNghBMesY69mkpx5e7u",
  "key14": "5gihHMg88qdkCcmC9Xnv4an19BcWvsSc9RXqmM5u15K9o6ufAoQzBoLEQXwMR5YY7GyLBeJrV138ou3ZF8oQTJkF",
  "key15": "4jfPpirovviM7CaixX2P59Sip8SxuHEENKw8Li4x1m8pYpVWBJ1VsDgW92Xe9aBomoU5rB9ZDbRtVdcPNLBZBAC2",
  "key16": "Y9z124Z54mTQvBTcJ35GJXJbkbuXLVqAqEssDuoUKR2LJ7txZybWKvXsw9hyrFQaHLsvK4Pv9hcutHBmBkZwqS7",
  "key17": "EVtBNBc5szeZNjuVoTFiBXHgxvALKfxKv4UgPKvivySmQ55BscyE5HquHkUcD6BqnbAi3AaiWSvQCZ6pxPKj1rd",
  "key18": "hGuTvzamZvxZkJUG9Uz8CWRH4tnbQiiytZvmWxGEN33nZ9xiGDCwqrsSBguj8rDbr9eeeSDDz1Fko3GUQmFEnCU",
  "key19": "5ZDDpHcfNR4yfoK6T8nAvDd9PsHv3u4jjdjzZ7MBDV4q8wX8r6TN5Pjh58P7XA1ZvThKnh3U4dwQdywAub9cmCoz",
  "key20": "QFK3aidRoaCvt6yCwYgcHFHBCTr7UZ4Bq5GmRv36N8fEAgnFDUKD2k417v7HUTWSDj9jqvrtU7gLYRa1S4XqLjq",
  "key21": "2bb6xD3NEUJPhuEaoNi78VgVpz89ijYGexJ68krcPPPjmteTpddgAvYpaLgz3iJ6DRFWZfpFnryoEyA5Pnn7jsQv",
  "key22": "27A4Zo6BBgu9byNxkD6k8Xi6UZBaCKG6fuUTvp8Ecy4rbJMUR8UvF7WUDCP4vXcHk3Pt3eZTNd3Z766TrdYaFkHt",
  "key23": "4bjzqN1dJ1wSGdtPRtEpFJwCw9d5kJdYbz3PGDKFe2HKSqQQQtofbZxz2HamYSTyjYVqGwpXZFwx5KAdpLnnizf1",
  "key24": "5kercVuBo9VEeQv22WPjt8myB6g22sY29YiEA343RNUduEcmyAxR6r5d34W9goWGhKr8FuMUpuSFDBBhyMW8duUn",
  "key25": "5VWmCazDSwwESk2VjRfG9atR9kpd27DpPE5t2phxfMoA93ztsk1APK2BifMFcqiVvkhUaP8LMsLHrmD1WZvLeHab",
  "key26": "4KnhJe9wK1tw1KAmiwJcFyswLjpDUYSPXWLxqaNHQDmVSD4arqtsUFMfgfeFJH5V7EuhtnpL6xfZaRoUHc4rYwxp",
  "key27": "3M5mZveFijTz691CbHfxw5zeJCd5xH2noubJmCKUvtFPPHemgYkAN1f3kk8hbEmHcMXn9ixsYcSswQfVYMKC6yPs",
  "key28": "4NVrhr96Ngbgii9okWZtMhTRWtKhvhcU8GVNdcrEE46PSE2iSj3z7CrpLKY6PJucnu7pHCePHa3Fu9EUJfpsDhiN",
  "key29": "V4EQwgHtECpjkLKM2TRmjNxi5rKrUitKQ5vQXfwRzKyPANn9VAvpgvuvEAWR9Emuqn1scmkKKX9DDTWbzE3XJv3",
  "key30": "52qTb5n2REbkicdGKi5kpF5tAuVAF6EC9t9TGUmgy96HRP7HgbKfgFvFAdAPAfKEnpoE3RDTFD7FeQSL6ZETSHom",
  "key31": "3jDu1NDxZoyqJKsbnRbCaj3CnRu5twErZNHuhBCbQrmpyZNWh63YeasNagbWMxEB46qCEPQDkYZknunnmAreYeWw",
  "key32": "nWHybTNaxPL8LkVYZ2Yo6JcpQHovyDdEcaj5yxuyS6JJU92yp5W6iaRCdst2WJCjytAW1d2gKErmUyJa43Qwh5x",
  "key33": "4RuRwVT6Fo4rxTTuRDtJTZW1bz9jDCbaHuu7pv19f9R3niZwwBoZ5bahmTs8n9GdYoSnHsiK8XK7VAKxxuAECJwF",
  "key34": "2pJAXiDyMqJpgQPqjkpY83jhK2gcb9dS9QVsojPfQjMBPowAG6sxST8Rtjnf8ksEF3aDozWjijEGiNqfG6CUAgyu",
  "key35": "3BF3cXbxCCZ7NXM6vPfYQCtofEUkJxEHqrMTYQgFe8h5eTirY1miSeyMU9KjacHYnDMUmGQAVHwzLPSX6M2NzmTX",
  "key36": "4nzCPj1hSaickCfKbvuXxRT8dGsPNMapEv3hYxPTNviK5kLahaJmecFjN8ZmCAamYNey7HTmiMnp9G4MeaWX3cj7"
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
