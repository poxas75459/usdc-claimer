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
    "2GNoP1i29siWZyrFV729X34KzaRKUYuGYrgNyg1vT3AUYqqpJzXioBejCVwU8MEvV3Z5gpqzYyrzumPo4WSYKqb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5azA7Kg5uLcNSovbrCAKwfC86hajCgRgbbGUgJkQiRzof3Lsw3xALsCX6eJf5xdDdhRTMchoGQQFULa1cM4p9ZUR",
  "key1": "2QZwWu5ZegMv6DS8aTzK1WVSnvtAW3f1ESKvdUX7MceUsGtibhQ5hSWtVgSmpR2hkxr2pKu3L4fDzatxmwSxbxke",
  "key2": "3E2QeoXHSiSHAQmappXjvcwKrrL16fuHVH5erAPKGsJ2eHq2tjYzqZTHTM6H4g54SdR8kf2ZY19g14LW4JE2dbkb",
  "key3": "3G8oZa6roFZyaPKJFywbTXtYRQNpRB8q3WcRVL6rp8ZYLXcU2C4L9n3wSqhoRCTuu8WRCMgi92R25L2Hu2CDmu3F",
  "key4": "4iCe6qVZmXXL4B1rgm93sgxZ4D4TbH1QNAku6cFKq84VCZHiV6Us5LLuYYqjHh7wvL2qdyEuUL1TMJEeztF3fuSw",
  "key5": "3yTwHHFWV7RETUZmz1j1RJkENrQysD19Tp8JuFUp7h3mE8W2tzgZyxe3H4peAjWKKkPzcUSJmeZRVeRC2d2cV8xX",
  "key6": "4p3oZ8qXdmWMGfTYBc2G6s3M2uP5sdRebyL3oTbAJjgujiw2K26ZaMYGgvXh2pDUYj5V9G5mPBTa5nvAQA8T4z1a",
  "key7": "2WqHhGVLtmgwAgjavfgSstApEsabdT391GVMNEtuV5agvQG7q55SMuBxLMp6DFYthzHcJLqabJAKdgptG53u1Hh4",
  "key8": "2QXjyAF7eMbowKpKWC1f6b6rw2kds929T8CZ2YzR3nqzbeHjsa5E4AyziKuGv8zrqH2eNNkthcgiDqS2cWiFhFvV",
  "key9": "4uBBExNfzybqsh9ggp7CfJmSEYAegSa7yQiquE9SXsyFUFub9t3V5kD9bsLRWptJdyJ3o3rAcyFUWoz3KnYo3U3y",
  "key10": "39MSskxwc8Ap6MCu7MNjtYXKuVmCTyDJkjMPBHTuEMkVMJiZM5rdAsTvxcyVStP3psAgnvB4PW6VgdxWze9Q5ZNn",
  "key11": "5xpoGJaLaQjT5UZCHbuXyWQD7k3D5sdcB1HyMiTBVY1gaiSSboawPuyrWFLojHXy1aYKZsCcUw5qMU9iMEXZc3tf",
  "key12": "5GEXeCBNHDj8rLfFPWzf5HUCNU7eJdieZjgaSuBVo1FTNVDCBT487gYyhi3Tw9UWzSh7UdiWkVpBWyKqZgmbvpto",
  "key13": "5wumj7KQJpJGVixpjXBiBNFcGTXBsBp5EhS989E2URXoKbBUE2ke55AMvspaVLxXAHEJsZ5JrGxA3aQ98G2uEPB6",
  "key14": "3ENS2tkfochtp9uxNdmF4uK5w8Lzj8qmH4qpMY1U1VV9Baa4fGKv16m9y8RFfcUAn2GP492RTsxekMmZvrFe2ae9",
  "key15": "2zyHeZXKBhvRydN2dJTahuZnjEbg3yuCGrWYV2746j7awgUSsr63bsqd9XmtUSkR3zkcomrxb2BiiuHWEJgQGj3K",
  "key16": "2WbFZheCCvNRrPg1rMCgWNqWqRwrE4zbMyBWBjutEDqivvqnNLzKBVrefyTZ6hp2ZcRySaavappMtNZQm2YSsBEV",
  "key17": "4ufnDLvx1vtqeUVHj6amAFCfgXVqfUKnHU5ZG3LNAmo5iM3pdsMQHZvLgP989Y76qzdKG2NjzcUtexMGZNENh6wt",
  "key18": "2Wn7xorSrKahyRvhP52Yf7FZhJVH5JeHyZtQdho1ucn3XvWCisWSbxMtWp4wKPacQpfbi7r4m91antbBRZGvYd8Q",
  "key19": "2qbrsNj5A9XjQYKucMGq5V58kuhnF4L93KaSnGwhPVnMWCSAiXEpdiwtzMunf6wkvFXVYHtsJy357vZkebKZUcVo",
  "key20": "4nEHrmkFQ79Vw6cuqEDEgpXjbt5bKycJZrgGMDTGhNkjbZL6URHjGS8Tuh9vUUX5vLZjfrUNin5tdcs7woBqHFDf",
  "key21": "kQLpfqjni1XCgyYkQumV3oduMXJsZGTRV3rR7D6bFBmMNcHZqsFrbGDeFPNmHodn1a1xY7aBFxfoA4RyoVkobBt",
  "key22": "3YxH8NJEmneTLJsbF8xjqj35FjKXzcY89BMgtSuNsqCeLNLzp8dC8iuJPUfMM8qzE2611rCfFAjJdsLzqZUtA4Wv",
  "key23": "2SEHK3412tqxedoqtVQ94CAGfzD7j9ApU3jyUXFgT7aMUWGuNovojuQJc6Y69UdWEXgxbqva9BZ4m5i6W1nGcndi",
  "key24": "62EzfcMzQTVgZXW6HVDTnsBVsxArbuZE1nv8TaS1dowSmE7yR2DKm5FVJwAHn9V8rxyWTrdX7Tgo4x3Ugnj8ro3P",
  "key25": "5H2EvhxmWthSqCBrm2Taax41hKVKiSF3uPzm1DE7KDHnYER1wD8dymRyUqX9pi7ueDmnBbF91zi18SECy7N9apUh",
  "key26": "5pxz4vyzELxWpuYJiAiFCJHGoamgjUd69bMLSJPWLv5uwaXTYWif3tjNvUom4peNuPa6LyFxGNKeU2QdX8T2wpuD",
  "key27": "4nxBiLvHtsDeRfZXDj2hWuH6MA9zK3BejZNuXjtvVYAGswinaLFYL44Lzsa9s1eoMzZGmSWG62sqk59TteCpJ2CK"
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
