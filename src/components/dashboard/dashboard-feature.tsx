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
    "653frxX5mbJksJqsfRB1pUyZfeZsCfNaS93LnPrk7et1xN8MFN47asvQgGY4eeaME6735qnkwLYCXzaCzs5C8u1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X11srrnXFqyP791ZfGnmniZaxfsAsw5oEBhufGNM15CRTbiiG32QaHSD2y7jc4GoEQtsGBpUgaQfJ2r8jUoaiun",
  "key1": "4tJx74LBMrarWUz2FZLd36gSyktNnAekMEEGvRJvokGPis7gLcdAhifFGER1vUFpvVuQHNFMNoRtzLE2ZRXP1N7S",
  "key2": "4jcs6Xgt3F1kPxX7edxSr5QLVZHwA2i5PMSSjrh5Hbefwa83Xzv6n42B5nLjGYWKzpKoT1zywrCKjj5YyQt2F6ep",
  "key3": "3DidB6a1CQi7yZNaLoKiF29a8CQm4xo5ak4T92ERt8YXwYE6vpbmpWnTtjwjLeMCmDTGp7jgcPSf93mKfWaN8NPq",
  "key4": "2vBQbezsH59TMMewuzD447fCfHCiGnXt7ZS8Gm9N2wV6byhCtMWTCJWUBK2uGVL91cyHdFdhbsu7BLPUKEivkwUv",
  "key5": "36c5tKx1JkvC2qSQvagYDHof8wFbXYdzxhGNUVKcxokpTC8NESVuASTEGc8S2dt7p9Y3jRfLDqgsTSnXh4tPKjW8",
  "key6": "3uY4UJKtMq2zZRMy1SMyxuUaTKLopAqLiYRte9k4mi6hQ7ULkH483uaF4UUNvjwZVq7ucXT5yyyiZ9y5177VTJiq",
  "key7": "4SSKu2CVqaf38pyLaPcNtnovBMdkb7s3rREjDpiLPJ5akAXzKdkXNHMBoa3nLXkeNoub3efaVHVTWwr1WioeDRgg",
  "key8": "5ZTyAEtUavXYmMZ24nFQdTStXCaie7PS3syaoYNK38TSU9Lp3kBXUUHNHPX3iR8VkZDRYjkA4kiNXrBnUoLn7Dod",
  "key9": "12A49jjmiLpjuqYWewjy4GQvtmZTKzuFt9LNL6hHc9uVMAP9JmWSHKeCtV3iuuoLBXDcxcR3XJrskBFG8s9g4J9o",
  "key10": "zkyUpvq1kuefBmg2GQLXdvCzy8amVVUjWNQVdGcBaxee1G1HdAyxAt7wXnYXM23Yp7ZmdSdJ9BZhtJx2AoHJALz",
  "key11": "5kXyGGA7XQbfr6Wvrw4GgbSoSy6PdCsA3dM9dcbGQNCNTTik8C9YFrBQGyD9ehY9GFAECbkJMhLQxKDK51W7TXoe",
  "key12": "59DVHib1hC8vrrKiW2ppVgCgQyMc5LaqVt6n5t162Re9DhimVLPpa92s12FBjBYL4LbT9b3kn5pkzoyqxjc2mjxP",
  "key13": "v3tzpknWDppt3SK7WBjjVN2CLx45APPoCXkdfMnEHNUyYMDfiatAtatF2E25FL1Q6Tmru6S92dmf2S8eELNHrS3",
  "key14": "43R5KsspfzB3pdxYHPe7C45Eo2SPhHPAqn4Bag7JiaQAQVdJrGNpB5S7KvMppTGZLCMKPjaXprtphC1JUbZmHKo4",
  "key15": "5JvFVSxzm1ukCJJFDpZTGMqwW2gghkSn9ALLYyH8AQxtGe8wcr4cyoRAgfmwz6Lisk4hyuet1XLWTFksafgXEbVk",
  "key16": "4zL2RwhVR1ikuPoJVbNpHp9MfguXn9urMss2c9LbNXnX5cxkzfK7bpxg3LDsp5mLHB8KXDW61evQwtN7Dw1qG6mf",
  "key17": "2gyddfUuFgGzUMiPu83cua8ovsgckeDCUq1ovnZYStPosvyeT3frR7NMd66nXpRsu5Gw5W2Jdf3HaAuToWRoXxDX",
  "key18": "54S4mdBwgrHspkdb7dDYrZqtV1KwfNU8uaLzkEjkoSzu4opS67Zi1vg5bVpYdXpnvBCzvQZgNsmFvHFAXeXdsHwc",
  "key19": "4YWccHuwfch5bxkU2k7mqkXSXx4bxQWUV3mDGtiPiSHcakqhdWE52qqFKuG8QdosM7vNai418RAzmCn7QkhSxDVM",
  "key20": "5kgaArthoWFcEFBKxkGASqM3joCM8bDF3v3hgwm4QvifsJAsXuZSiroBh2ianyT4aai8ZeVusFcgdcoXufwU9H2C",
  "key21": "2GU8enYxDbVBpEoAbNMYseXeDtiEowdZUyJz69Wm7QyHjtTqQzs2THYhUrb5RPFMxreguH62cj4g5RjecpKStSnx",
  "key22": "27WVZj4BK6WV7TdsUw6zUtYB1aofhogAnSx2FCPbmG5aivp4HvbaqD4cHAMpY13F4daR4cis3m8cMQX2KqDNMvnF",
  "key23": "2avB9M1zCsHaQa9r8Pg5abTzeCikgA35iSSpQyMmrZDV8B31k6s2sy4PfuSZpVLW5zvpBjot7UcipQKnvR5zdAZ2",
  "key24": "23zRhj164CQJJkB6bNT8o22NLxEa8kTVZbAfUgJ1yRCTuHgNiPsFHy6xxKajrNb7KF2iBWuqRDCeya6n5VpdGacr"
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
