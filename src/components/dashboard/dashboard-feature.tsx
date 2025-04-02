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
    "5QLV9vxbMWHQQ3zNNGkttV9CaVeLeH1RAEDDsWLqsJ8tjNtJqRfxf9G7toEveMoAh154ZJjmdVw9sa24U6USFUJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hESisov3dUG42DdkZWNVqW6brHrtFZkX624aRieS9tAATVTD5Mva7F1u48TePfhpnLsBeXncHwLwBaetaMbXzDP",
  "key1": "4pnvs4n7U84jgb7hqDYRxZt2V96CtJF7QZV1cXBW5zf4o9Edp9tuaDEsYg8nWYFfVZNqquUY3jkzUJaShBVv6N59",
  "key2": "2UHbj7x1bpsUEQz96yzH7XM6Jzp8AdfCz193jnpYAesYAPYj5Z7RZe8DAZjBwkKZciPcPVkASi7mYGf1PR53zHWX",
  "key3": "VZ91tcssM3gBmzMb3dN5WP9ofZ1SNyZFdaCLywddpRP4JLihn2eLmFfa1Lg2TwotwXzxFGbxRYc7oSZTc68qgPH",
  "key4": "3q5Gqy3jvEHFTWjh3Tms1Fi1qMaSxXCr9snsJ3Cnn4vyhsihPgv1vbHxPfyRCZga8odoojG5MfVRhdr4Mjz9xRg",
  "key5": "4g9MFn6CAZ8sAbDa31yvf3nRGDnXrGbX3ZMr1S6d2tNeSp7tUGjejp256vVe96gDxf4Az7exZaJ6X7y2TpvcXk7B",
  "key6": "2jp4emhUUGbmoZU9aZJStPGoAcg6duQM9SsngnS3P6Mn9QyjWCyyu7ChDj5ghJXRtCHX91GAySFKdKxn47N16Nku",
  "key7": "2D5gRhzDbgAzZvX7GSfzNgnc1PydU57RUQVuhwjbw56UgXne57Mz4Bd3jQJFqe9mYwtedejsdyMrwtHGcyXDYwdF",
  "key8": "3gWKtPQtCS6TNMkVgzwW538ofq3YENWm16fqY3vEAPVyNVzJ9PWfGv3pLXBomyUu9Dh47eptfrYKuuYw6VVoNjDF",
  "key9": "5HDwLBvuCsHWLr7BMBqerdBBSJZg8GJNKozQsNdPh3PrJ9h8N5G6BNbyHX6KWQoXhYf5JVLyaUFNrcRkx3xbh2C",
  "key10": "27uJ6MemFVAPuJyr2hoEMWdgsJr1oSLiWFSaHGEBSWd57jpwEp61siDWUZbRrogEoH31w1AVsC6H4vapCLu5zfWs",
  "key11": "inT8c6ybnYsPtGEaBfay8A1nR6fLv1tw1A9xeGXHj4RMtzqWSQXH6K5fXQReeirLF1PXuY9mky71mxzXNunXz76",
  "key12": "4XdEBudv9teBpMcUog3YZrnAwLzWYoj5X5PEKeVbmcHKF7966LLYWYXyofk6EwdiQEpWrHqutBgneggYjh3W9yKR",
  "key13": "4qLXRtemWP5Layunv1hqeBGBGU7Zc5AB3pZjKFE9Nay2gNqQYRDu2jY3dLL4xREves6cvDaScSmRHUQDJybS1nsR",
  "key14": "2uyY62m2cmw92Yp7RU2AT44QjM6ksDZ4VYJzrMyCfHzfdTQ2f8knntHsx64CeWoTrZfJJACkuFucuUAera2fQ3Lb",
  "key15": "3Ph1sdLBAM8BjdfZg4sxkNLW4S7WsQCHNEFZS3kGxLL8GFFnzFnrtouRj7AmTEqiJfUKUysd7ZuU6z5vopGqUUxk",
  "key16": "5cho64PYGAmo89WfZ11oJX2w69HiyJVRCwMYBLuzuJLWydHgQpAr6FUkB1zaJ5JCgTyBQRizw67WzBCfsrxPoE5",
  "key17": "2uaqt4p9p8jsVuTMBkfHyHGEjo8NCcsMnfqpVtgZtywJojT3n7fRaMKdrUeQAKkVLeSnXreBTMquyjzT3DibNGrh",
  "key18": "LHBRJgfXgeqKNfnQWEKvQ6cSegtAgjQ5UGBjeLMhnxHTn2KrpC4a2bewEzh3eCMCkKY1y4GMjRMaprFUXdKwfNK",
  "key19": "498CVfP4Nf5mptHfJfRJq6MpAeFbkxpBGE47uRVpdJ54ZmQ1kLCJkSFhQWFcDCnZwqA1aSo4sgdBRgukNs4hR4Fp",
  "key20": "4qfSvMtiQMVRr8Sb7cEzKhLZZrXc8soq3dMtoCyXXCFyDTWSskxERKAtWduFYMmaaLPuinMh9HH1Q3FVEAdaZzmz",
  "key21": "53LqAGxja1WsA8fdFofCRvu4qPo32BkqGruKH6VryWqekRngetLUciB7WCFry7WoEKAF62Ytmy1ng9AzwJJhKccD",
  "key22": "53L8kMTGs6oxLBNJfYJTSdZyLrfrE44BgvuFW5cLpMvdCatq2UwQXurs467dP6rNQ7DRz42Te3kh2jY3Aw3jB7P5",
  "key23": "367345YeQ78H4FFrVGDov7cfZoukhCGgM2r2VEH5tVo5E5p18oAqrwEkwcDsv19hNuZeha6n6rZVxgFBLFMUrj6d",
  "key24": "3xTqh95cH8ggGfystMgMbLhNaPvuNpGWzQKqqZXtxHpzAPDMojeuGC3d9uCco61xajPubsmTz9cZ2z5wm7B2kGYL",
  "key25": "55mDTysJxBgKd1QPn2TWWdEgbRJRg3k3oW4apAFURXYXkWqRYFAaXiCQ6kPY3JafF8fecYEBjvNC1ccx5gEuC5zw",
  "key26": "4LVYVkX2zzxwNxJQWEvN5kcAQGFaxEpuPgCnNKEojsk6XML9MCCjtH6CJCddhhFyGq8hUbfQDChJaRHscgyJd13U",
  "key27": "11dwHPDkZggibsHLYdBGTYyAKnVEXjPW2qkoJzmfTxk3UwtoGioKtoAm1Z52HmfsiQ6EEeKrYVicZMuKFmFUYH",
  "key28": "5RATsa5GK8GhikqqKNpr7e8gBHN4TdLba46ye8SXEKvZ3P9e6uxJyH1SzHzZs7rynfVj55kpg8yp9df3pGmCo1zZ",
  "key29": "124rVHjNH8NkfEdN8xEFVDDoikhcr3ZJMS4rpm25takYrsyVg8e3XiX6bZriop96dBxmQ7c6rrwpMgutic6T7QaY",
  "key30": "24XcLx5rkP81gVp1NbynLrJZSDme2mVjGiA8RtNw8fSVNxvPZoCr47AebBKHLXC1ueA5jwsamT3kn7Bs5YahMcSk",
  "key31": "2u1QQP2UExT1Ap76mP7phP54rYB8tyabamCwdQ69UY7GqAUFyJm3iYxdcLJqcAAgCDcNYeNaJvzR7aAQKj8DAm4N",
  "key32": "66qiDRB3LBYbPRFJQv3fWmJAiYPDbBj2ctmjvezoAtzSTpwMk1j5BGvuKUjtNQgTJvvFmrrXLC8woVGE62peENdi",
  "key33": "Xh4wY3S3G4ZtLbX2vNMeRvRAGRgXTxq8putcAXVLmGDGkXio56qMcHQzJmN9FvrRyFT2fqLDg1qE45NL9u4E9bX",
  "key34": "qHEKYBTz3qBVrZfcRdBAZyZu5BxiFXHmroWHqBWqEP18waSTxVXoh2Qc4dPbMWiQioK1Sbr3pYGwAtBxdzsnh4W",
  "key35": "4tuyZShGrVKHprBNJAtSJP19zvoTATNqaHTiRPZ3qPNckoeYkjynWFvxcntXv7HQyuoGMfsFJKjWHnM5BibGnGid",
  "key36": "5NgFL9mumk2UanJTq8AUiBYhuvZZ1Hn9taDecopJsUwpvtFPzTBzKhWhdgKAJpUhA6e5Kz9fsqyrX34UnmjcsX4i",
  "key37": "2iaJEbJw7zo2vBsH5hvBZuERhbXz92Vce28UzZgfcPWwLzwUpYSZZaG74HUGeaT4QFqFJagWbKRcbcuDKHGcC8XB",
  "key38": "5GkGYwcZAaGpqBpKJLA8bDB1naoeUQQBhzkuXtb8kjNG8qzX8Y1eZBjCzvaiFk4LzodP1gwU4faBT1JpiQPDnJNM",
  "key39": "5Q8xXS2DCpQALZfve7chjwbS2d6Ba9V8ejLYHcbAFBbqLFHqLxC7XS14GNLmnXKRJ3NXZ8AN7UWV3yQfrzXFXUzE",
  "key40": "5hZ4ZM9zS7jbTbSPywR83w6BL1U6AhEWgwD7aXrHsHN2f5Dus4iREa5c4jwuyXhJBNxgjAS6mXQMDdwk73ffvsPN"
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
