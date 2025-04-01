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
    "2FpBBKBWU7x7zVUxLot6XoLAbaywESjXd9KXaJK5DGv3PSbSsohgsmZXKzViqCVWa9TDV9eYgrfZaj6dEA3yFJDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "319bii2iuNk14jH78tvrjNWG39KpDcJ9DyELcxAD79PUpjSBP7qUy7mGL3krR4L4ao6M4ZfJxuhP7v5gKREnoAYQ",
  "key1": "2GUg6iaYpN5iadrqsP9fgbsSoGEf9c4ZNSRdh4jUA6Mog7qQ486WxTTN7mdiXcYpNkncGEvKzRKLAmfmmYUr7nKF",
  "key2": "3xKK9Lyv5PdFF4J33g7BdTWkxchpHXYze8zzaJ735hjbpiQp8t1YWfw6bWrRBRQ4g4987RGEPsae71KmNiPqyH5s",
  "key3": "3RfpVFcrWshryHZtnWiVZTiVKHenoGfifuQqDBZi9Lz39Lf7qjoJo93JaHWGWjBUL4SE1HRnUFDouxeDE7RbzjXW",
  "key4": "28cb13aF3TTKsTr7osfs7vJURzTVpBXR3opPXCcK7BtPm9iGGdMJXNtWuq8LCmP6KxGZxBFtv2yQyLcKsJm8f965",
  "key5": "2tB6iWbEWhmJyPZW5L687kvrPs6tCFPexd1USnHYpKdoSLpaTRiyuDrqjuwTvf1Z5xBfXfNXnVCWaaVLMA8TF6dj",
  "key6": "5sueeMBATbgGL4SqVXheVbvyJfQfQUh28VQUBL1e9qsgRyUVc7d7ucUSTfWt1WpxWH9JbT5jCbMEjQBXQR2SbVv8",
  "key7": "3ZCTo2PuwsRGd8KieXR6KnXTMFUsoyehzrcAi8sFffQ5iTXmkxtBPaJpr2thR1a7d7rX1Cq4v9X6wPsxxfornQzN",
  "key8": "4uMPd3EEZy1ydZvjbfBMNMUGt9UvhpJe6YLpF4x1mcVCddwqWrnvfeMWBLD61wF8oNnQ7qX67JhRhVUc6LaaizQK",
  "key9": "6fFMjzcDyufrpvgMriUFnxba396Gdi8yWNMa6T7dKkmZz57g5dJR7wJFo5cnQ1fJoBeYDqS3D3jwbHoa2sSnDyq",
  "key10": "3VxEr7bWicYZWS1MkSdFE2XmLhn4Rw1S1d3AcZAEJASxw5cC5Np1vYJ9EVRs4xsnZSML5AnyWTCbTVP6xGPXgTio",
  "key11": "z8jjf5Pd2RH8MprVuDQDEPcsXzSP6QTFrP41aYkV1yzPJP8ZbsjtjD4hzdN9rFS2tNF3k1ukxxkbPN4BgYjqSJp",
  "key12": "2FLbkyqEqfsXLFWvFumvaCwx4oFYMebRSg33Rp4N5GjbMVaUWoLAcEqZCZdhhGX5nKdiEo7wG9ULV7UpQ4D9yHde",
  "key13": "52BPqPQeBnhJMtVbnNMebxoQca1yJ9GDUyV7SkGeXTjHaaFiNn9heE5JN9ipyASQTn21UKgD682H4uF5WFPnkCSr",
  "key14": "qgUzWswGc418JSBFzJ3bz93MkS3pVtYVn9m5JF3wkDfopBZgoxb3bmQxPe9cYDxCvfRobeGhum2YRxshwiQfnaM",
  "key15": "5iU4Uxpr9uwEMdFY5AugQMC77Nv9F7e9pM4o3NbSX26uohv1G4jLwKKNzAe2k2NUDhmZT2eD2APJgwiQc3DDMKj7",
  "key16": "3mz4BLdSJne8F9aZeZzBFPGtMs8QQ2L6cs3jdEdPkstAF93WkWG1FnyUgL9gvKAbMAkzbQATEStM23kyp5sigCYn",
  "key17": "4yzUrerup5vfaVAVM6arRfgKHz2cdq2PWvghTZTwgujqttCW3PZbep8hpAqDaL6sm6VkokBWWaaTucAhxk1dUnSN",
  "key18": "2EV2tqih7n2Sea43NJwfRSAzXBnCJAPx6zAUGYd9fSEu8jTr3z6Dmu7Jk5BpzMqiTqGMmiseQha3eJWNaGsd9K5L",
  "key19": "2CFT2Q9VB7aHxnoFJe8FwHgnFtyCjZ6TCunfJu6GvSJjB2TQNDqFaBpF27zU8SjnGF932QvQZx1o1ShbAxm5WYiE",
  "key20": "4zEvgL6rX9KKVmVSDS7UC9UDUhzJWZf5vRKoRDivVeyB4v9fp1YyyP9ZstZ5CCozBrDn7J3kQyot1RgNqvySyHxG",
  "key21": "3uPFZ49XiaWwv3rxV7pPm6f4GurRkD4pW62a5MSmMoQq7gNqR7QQsv5YLF2sD2ZTJ1YWVHCdNY5fieAuLbAPsyQ7",
  "key22": "rZbbD4Tb6Rvp4BoHuzSbB3JEV7g3CvxoutJ4kxmLg9QwQLAL5rsFDBfxF1pwdhZSMYEDAZGc7R8Yaobds8rADRg",
  "key23": "4hCTgrszMwEa8pf6gik2VjsSTwKRPw5P989SWEFQyw77kbLP2MgugePacXWUPgsvynXjJZeWxkvDtujNZPP8GqSX",
  "key24": "SE53p6aQoyLmBJFh3VzP6AzWi9pkvU6h3EKpVg4RExziFs2UJ7VTH1ckskbwSfy7qnMMGjYEvNkqVb2RqCAHgW6",
  "key25": "5Ws9wsCE8ysr6jQZd4p7ixs4bjW5XLvNbEfBA6G4UQdhK4X57ECzPkkdZijbNYCcLQThsr5YaCiqPD1mcbY1xHFc",
  "key26": "55ucLCFG9yt3C8MdZnTw4fVDVFLDXxsp29WXdb6cMxXWU3PwmpaonpfxCpK9cRBAReUd6YCiBUQCcMLVDWGirk6b",
  "key27": "5yaWhHjaXzmzFNBf8uCim4ipGbv2BGET2QBkdjnLF8yMaQyHk7PATyfG1zyjiSd8n14vbf2y3Yj2y7MdrdCWhDaq",
  "key28": "2nTtnuUPjvHdH9rDascejjjt2TqXUHPg7z6j44uxDShvTbuWFuYuUnprEgY7m4GjRkgNRLFPHg61iaUy6GyaHBM5",
  "key29": "46t22gPZ5qLSBB8QrY63BQrGuvJ9fNxWqmM93ruYVvNn4wAahkgJ5zNUD7RhvgnMmbFgLe7V4zabZ4eNDHsb1nvM",
  "key30": "2MEUT322Ct1j9w117cfzVVXZqugKsAo6rtFHofEKePpjcHvcQPcnMDJSnv7NRWBmQcK5K78ZRTUTXRynhLaZabyA",
  "key31": "cvkftq1kUJ7cLWKwMjunDvUc833VGUnDq3V4EagMVYyEtWDjunQs13ViN6muNRLodpRoapdQk5EA5Usdyv4C2Gh",
  "key32": "4PEBQaiPoE1YaJrGdyaY4Gsv8CrnPYpkar5uYQZefKRtMJS9n3RogVFMNMkBqfpLJpxooSyng1thpWrbL7MghXM7",
  "key33": "5aQkvbhAoTtagKDm73xRBd66fKoLchhMH9ARPEGAbLV4cJZQ4WBoZtLA7JWoPTWJ796FoRAAGeQ52NDPJfUy7nNT",
  "key34": "66YwgeYDjATKgwDGhXrB34n2Au763FWaefmNfPHa2GNtr34gs6S4e7HqDvZvmYzNTKuC9FHhYJjZdC8dLgCefwQv"
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
