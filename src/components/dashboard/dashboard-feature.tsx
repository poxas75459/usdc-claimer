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
    "3VRTfQMLLDLCrQ3YeFaJk5ezw8RKYYKGYWY5mG7T3HmNmaVToYRuetHzyXfA6BN1LYi3adqsTpksFiuyh632fEK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nt8Zrf3oSUJ4nQpMceZQ8hvZPFVDUZGGeV8XmJCHT47egkvsWwyVaKWhHjuCKWZQQH3yYzsme7HKhoQn5UZdXQ",
  "key1": "2WFPb9wS5sfEcrBdxMjTijvH5Yfgp5fuhEVfYUzw7FHwPHcGK7AVDLQupBjb36jpQb2G8Rjes9tZcDy4fKf4ojUf",
  "key2": "3683RLMyspWYwRvNCob5DJc7yssST1PGA1tHq5CaYpRA2oY297hneqxYXsk7qM9L4VTqfbNc5EtjQ9V9sqF9xXeU",
  "key3": "Qn655cM7WExaju3wxceTWyjk38s3boVHinpENBwDpv4BSJ2yodjFfrrFDYUtvyrjK1KD7m5xu33B5CBieGe6XYN",
  "key4": "2tdtXfR1sc8KiyskPPFhh5utbjQenDdQ4TtQQ3XrTRZwmpR6kD4hzWEJzVuHyre6iZ4g6ZgMQLgo5eQotWUcFcBS",
  "key5": "5BZjsSYN7e26dvHvuPKgBeUY4Cw2uar1chckQzdTQ7UvcwMN9imcjV4feH2BnXojqtEQ4DDvpPZs1XxuHtUvY5dk",
  "key6": "2HTZiPYDY1G4wqDutF6bJ3C5k7gsV7zLcgYBNb8nvE6z68dmqXkJeJUhrYg8QmxZKG9Lyqeauie3Ka2WXUS86VPV",
  "key7": "5yD99veAsrBFhe7aUDRfq3xmQrYdfgagCokP6SqABiC7nzPJp9QKpCFKd1Mb5WCtN5QhsnJXVZs9AMVXNNHhNRsN",
  "key8": "3JGzeTJrcATv8s95DE99j6bwSjUNSoZbJWm8FNAfKeHu2ZMqi1zHCrkSKAocTPqspjdnSsMTjjAq5xqkooVsz3sM",
  "key9": "3m2BwhmWreuE2ESkJPihQkVgCsvi9ayagYS6gMF5TKkaLgetPe9eJB94o2nViemNgAaPpiF1bLcwJbVeZnv17i3h",
  "key10": "5EZWhSc7FWoFEv6N5dH1cwzYsDZr9LC63Wo5SFjgpK61NZ9W77jHuyHYU6wnTKcwkXq51rkDtZkcJvBhNRMu64mB",
  "key11": "2Utahsb5h3PK4BocMUjtpzGZHRrW6SdELmLikKkv5shzQ33n6oH4rf2QA59B4pc9PtJA8YnhHDT1HCMw3H5hnSwV",
  "key12": "2tHLFEa1DQxX5pjF5G5hUnKBvAoY1mBPSmVLH5aLMupTLmNSodFBZ7s6EWjjGaPpRyt71vMef6nc3wve3UiPuVzL",
  "key13": "2m3R7QU4taZG6zHUofTJQatGP9ohEuhor9jWcdPhm4S5mTRVBGS7HEYvYkpWK8Pf15p1qsRU7pwJxt3Usm8HDgZh",
  "key14": "235kctCoY66LoZSFC7Tjkne1fxfkujh8Esd4v8qoaczzhFoSU1LSxK3fj1aduCwJep5f2UgiME4xBNsr4WFmoc8L",
  "key15": "32MYbseJ3us8rS3TDWTSm1oacrhPaZ6XeQPRGFHovwAA3v9QMftgf2dxjTMB5ZVjK7fN9mTC2pjXgnYsfHa8QGwX",
  "key16": "pwacfomCjZ58YtcFJAJwj3SpbkX43dSRGV6F1oygxh6L3uJvwc5yhBcenYQ6EMx8gkfdAox9shLQmC5RiR3rmTb",
  "key17": "3ngxg5rqLAXKoM1EjVW6yMst3q9kNcPNxtU7zuMHEH544umrMoH7j9pX2rGYG8jjZv1fmjqP5djt48omfZi2CFnu",
  "key18": "637fnFdQNaadkk2RRk9Lygcv3quS6pbXEjvrp9rtCf3EvWh9fHzQX9LeaBjhXCECsyEw3sDEaLpCD3pTyoDMxbXN",
  "key19": "4VrtkQA36xyphx14GiKMc588qWu3B8vfC1Wqx2fne1K43qmSS6aP6dPTe6tVxK5fCjtdgaiGgtJozn4vd2pEUXyD",
  "key20": "9VciAtwadkoeLmfr6Yvpcm8CAcUPwEp6oWQ8vSSGXvh8XLMvcgvoMusvK8MH9A9EnNFa9twvZ1bTjKmizPTDVJH",
  "key21": "5MESffsNEFzsTYnzHPYqFT1eDNLFwC1NhaETYPpAccAAYLkm9rPXNxEgAaGiWidvNBshpkwz5ixULbDCnJWdmT8R",
  "key22": "NecZABpxLCBTSHDsvFXPZYYWzerTLLhHucJzvcFKQ5P5MKFZusx5LG6hiJBGqYsycfpRoCL9SD9syWWNrbYZwjq",
  "key23": "2qaBaJzJxvmb7tZA95jtoD29xZpzyu7kxjs5QZqFTYhfNkyJEB3NbuYB6MVUUP7xNypnTaYadyNg8unA7unKC9Vm",
  "key24": "3H7BMahv4EHh2fKg1SJh3xYyDhjWFV7qYx1jpzoJeJCNtgPss3X8G8BByi94c8RAKnPdaw3JLYu3ZRvJDZKKtzSD",
  "key25": "3uTWUKVRFUVPoqfWfFpxuSraYF7TVU78VVrKfAWLtKrnm8MQYn4QwH1B9ASWy1qUqTRAUe7bASoQg15qtEXtyXGR",
  "key26": "4qtwyRzLkZE7GZKHQesyDj22x29PNjb9EkqjjSVNs9xWxUUNnb4AvoLnGyzA9UbDSr8GipEWwALHdmykLRnaoaqd"
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
