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
    "5vdiNQw7UpY1sEFN9D9nbfxJvYhLTDNd19jmVZ1esKmtem5mn8x6S1u5Dx5fW3mwxWSx3ze7zk3A2P5qfacuXsmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZPqLQ81kRWuM3ESVPoHREaSywqCxFvuEz4znACYGJRQDstcima6qaLRpKpqabGFschLoYGiSnCFuS2q3CRh6PT",
  "key1": "2DwHxyARzPuEvZvBKmEfSxqnXsWATjvsJLqayEk2LbwpDBbtbNPbFtamhbVLPfsMPz6gq6DaMQ9i59zJ8Czxtdhx",
  "key2": "58Piw9dB2EpbbZzyuneSN6G7QWcPdnFC2V8J78C22MwXr8GqLyZk45RaFZDUf2piJhVCBSKbkh1frTMaxrRTzRCF",
  "key3": "26YTYhxERGp6iyxrkwqvGiJYX534bJCMdWcbbQ9PgdEX1rgGUwkRu4sujKq7iCQW8Bx86PgdEmamtnwGD1mDu11F",
  "key4": "5S9QSthq1AP4aDq4KpnKfDLL1du44xf5gVZsLQpfsAie5Ckm1A5sthrVANcydzQuoifaZgqu2Vy9YSJbcH3TGq2F",
  "key5": "4z3Wf6wTXNr89UvXeGzf5tTwRF4W4JEnHkLMAVDpWPu4FjjXwmmaQnzV9K8XNphDjKm3u7wLy9rhad2ZSzREV8Np",
  "key6": "2bspNLz1MSfhQ9enwWktPDVDu1RjXDkTq9h916AxX3J4dWH8bZXGRw4vo1Qz1KyoGZcqkE4KwWA8G6uH9DkeBm5k",
  "key7": "3ckWMmYj1W9nhsTn3enhejaZCTuFA8Rn6PvpC1E37sNnnvXHc8WSpR2ZnBHGS7Uh5APBv1wrmaGQgVXoy9tM71Aa",
  "key8": "42Z8xpRgV27D99R1B2ghrE1cAM3H3d7LMLLs6sq9GS1mRLNZDrxmJuSka22Ro6cZ6XCBHXfMqVhzv8HepximiciS",
  "key9": "oYWyYkDef9N3ZwroiWrrA4i7xhcxCELQNf6RHzNATDiwoBBW191aiZkZa5bLtp9sxZSWEz2jmZzfASk5yuEffPP",
  "key10": "4N4odYa5aNvo2cCeM6bpAp9bc7bzHmdkgNfYmUnuvriEztak728EUa69Xwh96CmW7UCzTnYb8VYRb7UD7FfT4ePg",
  "key11": "3x3634TthuYq4VwvDfdxPKfE1aDt2R1psHrzpN8u88WBGDP1zKNQqXoAWjogFjkyo65avPdtxdYDA29Lapybiozr",
  "key12": "pUMbmc9dqQoVnK6HCRWCFiXp17Ui6RCNTBDAnXJUtmzezWegEzgq8KZmPArw2VcFPHyCpBdhjQfmz25bTFigRga",
  "key13": "DTDsYeLx7Pea6jKxkVWdrgbU5TQjjYcbQ3VtY5upDAfy3gNdgtQFo5Br1ri26XuCNbXyS1u66j1DvQmUCDHfHy6",
  "key14": "3wgYaw8YC3Lo44so3vJC5HQA51vcnsNeCcWAHRtZoqN2ZiGXLuBSYmH59HGa83yLatxXMjfhREXKfv6A5iCuWPY8",
  "key15": "5uQuXeRPY2xXJG39uvUnxUUXqBDuoHXaJfurL5g7hR1FN2WjXAmnSsvCii5NgjTYk14pBPvBcTCyPbUnxysTDBZE",
  "key16": "3hSHrCykQ5obMMM24corUhKxRF4oDBMtmc9favWKYMWznPaYGPuqgincLPZSufUqhC4d1pyEDJLHD14UWySpsuza",
  "key17": "xLqTF9d2Tj3iqie3Me6Nj9s7o3m172nMfLpynTchqovGargNQPhiGzdujntWEEhhMdmHpzZjq7T3JUHkwUw1zM2",
  "key18": "WAKbwE6eD6oqa5yopfhpymZ5st5zyHWs48qMVXH3jBqH2LDGJRDRvpkmGJURK3MyL57NoTvH44UnNEktMEiMMai",
  "key19": "3MPHYoZTskSrdtpSdJq9KLbQhpArmmV5hiMB7SNJ6MtwMnR9FT4AcuM1R9btHPKtqx2mEHCLgugtGoivytZXDKhb",
  "key20": "4WKYkSqix8uw45dq9cZidSYq7wKwqtRFsVb54FCftgiuXRatWw2mwjQ919iLD3HruaZc9demWLU1joS8nt5A4U7m",
  "key21": "2q9Dat5brJ8Km5hW75fCPtTwM4eNT11WaXRaMjbwTQJqHbifMg2EghwrLuji3gACyE1ak3rdt3XaCujVX32gsh2H",
  "key22": "4JCg8rXjNdhBVJiN98HCcgDUKDPtFK1nDJrondTyb8bTkMUWL8yiQ2T9R3k68tHryea6AwuihpGLJR7bKYBx1x2M",
  "key23": "2W2EHEJMAhSABi1mJzmGSNhjJPbSwZyWC9VJUD8ctNQrzVBVKSmeHfyhhs39c2ea3mNTcZxbGnPH8bmAQB8BRM2k",
  "key24": "4qA6enNSM2Mwy4ANp5Xox2Rvo92M4zSc1WBECfTqUGY8aEX5f84hcmuXvWqPG8haB5sUk3ghKe8LdesoudSTyezX",
  "key25": "4TAr9q3tbnyhLEif4vKnqxCXcGhP95ScTjgfERSBURFL5TTVTDbRaL7AYC4TiEXX2USkByFsenBddPJWLwTAtCym",
  "key26": "42gwAkXvLiHzTeetf6uCNXjg8SmL6yzpboqYY2Y9miaR2xKZf2RGqYqUbrDyCvd4Me6ucAdQMLd3xweddJSFLPZe",
  "key27": "2QSmfCy2DfhxBvyWqqeJAVWydaWgKcrw9z48PMbTgntQUnXksR4oESTARAwq4xYKkPSUt8viHY52MQEBAGnDgeDK",
  "key28": "5WUkFFXpfYxJ6fmD3L532WqTP2jA69sxcsJqAVreWctSCDBYQTMecRFoGhvLAKThaLNLCRbswL7Z5JAwmQdiqazv",
  "key29": "4CJkxFwupNLis7RzSxS3wHm5utDTq1MQjD3qLWCThTTa9GhgjeLiJFuW6quQZoSpbLakqCFt22sySfVnPK3wgq7d",
  "key30": "25jNWQh3F1Ynh6hKDH39cx8zSwRJAUWKhAyAkuG5zEojQzy8LGt6MV3bV2vfCpJFPy4yUhi5Dj9yWN86p93rxfL3"
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
