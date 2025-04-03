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
    "3HAVuNLTqToRtGEp73EWuzhRHyVmyi1XNeAFocTBVT7oDtjRCsLDmNhZVz4FtmGN33jtvX2AuW3ASX2sj3WY8XYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfHavcfgWVu5Be9PWyNv2DxyGqgfMCLwqqBQmYyd8G7q6c2ZmF7NfWdkEi1UdTbFTWTThnRW1aPyfYWRwfgfMRF",
  "key1": "BNngDpo3spce4pZvyAfmBiv7EvTDCctngWYcd8y8esAT7cMuovyFAMmADBzXnjB8Px9ywMbu2GVWoDCpF819sFC",
  "key2": "3GoWRECypespqVfdC3s22A3D1DTHHDrAtXEKVerXiDUa4gpqDEHTe5sgBAyspayoAKwSRNwFT882f9uBAx1VkWaF",
  "key3": "HWfuF27SghRfE8CPZexcfJbJPDFuDYhCKDpzgDadaCGBdT6CQjPi2Mn1wL8akqg3AekdQ5wN2dw7bwKjtAdzQGT",
  "key4": "4SaYwWKXCkofiE93qAahALn6GVM9MczYQn4JHviM6Z8Wbr48WVUduXhT6NiuVEqoqpVNC69PV4dQKMRFZZLAgC2q",
  "key5": "A9uEmNNDJXhRtag4YVpxAVioo8J3KqR2R6ptBcKyKShLffLXEb6Z2jNx2ajnaWfi9X3cAyaK3qBrRmhMULdP9qJ",
  "key6": "5oXJNTE2XGQoXuVgPTLfMGgdsfr5LCmSFAEVcZ1dHmMDTknMpFBJWVyGX7Ez76SPDUYCKsUBXdAA9d19wwAe6VWB",
  "key7": "2zMUayxwpau4SKwzfj5bchmiE2Z2ZtXrEh8CRr8U87EdfLia7m2e3dC5pP3oUF5WzMEBPM1c7E5QV379NjKD8Vqe",
  "key8": "LdkRdqSZvUg7mGXV1eXPQXrc56kAvZDTK6uqZog2nWwU4gbxi1AysGYgnRQLjGuXHkkAeScNAtgS8JWaCrXJiN1",
  "key9": "3oYrY4GgsCPiM2cW2CWY2YSm1JdXMWAcoxpwhUN6G1DGhoVypEL52NS3sqMCo1ZuqtqvbVhjA4yyJEG7AUboWy8M",
  "key10": "3CgkfeWhUKGemAT9zanNhkbYBi9LETKbouKoss3321MR2i2NRHY4Bxahi97mAzkWkPqVYcBp3wX4UEwF3FXH9Jk",
  "key11": "4kShTLEWNz3QiLqKbcfEPfWo2SzBWrzuSBRwsr9Y64qaWqgBg8o92YvwQEm2RkkFKZ2Pk6NFonUMa1ccPt6B5Hfv",
  "key12": "288fLKN5q4tQLn9W2ey9uZMFCWo2NNqA4b2chmYmEzHcq7yViEBdyPLr8D96hWP2JjMQnbDsfUnmodyYRByDUGpP",
  "key13": "4WwiSfuVgRockXXT6GDtzbpVJ2XT1RvfQuTsYZd9TXcAVp7C9aXwZeEYwqekXv9DWT2ueozc2eyViWDVXYgKyz1h",
  "key14": "59BmA2oPbgR49sX4RqPqbCVS4esL7XJfDvFaK1j7Vq2gJmfgDJNDZPxEAgU5Qiwq7C15PgATAu79S2pufzfGrqit",
  "key15": "2BgowvMkesThKmnvL1yrnRg3ee935giqcbCsYd6AA3YSBVW2af2mJgYyGYa3PUkEN8Wfda3fMMzRmVhxQZWBxwGL",
  "key16": "5YHu8K4LhA9oHgAwpeMmyVq1j8WxJGxtQTzfmL5UrkVqpFLQD1XZRr74g7zWGr9DJcyBHJxqGjRzjtpoUQhUafJM",
  "key17": "3xA5Jj2cFuZuDFMfKDVXFiKX4pqCZc3CaRjDKEHmTeSdxapjnPeov2jH4Bqpz9oqVdeScLdJNW37JoEkzvbhkLr7",
  "key18": "63U7zKpMr48vaHuWpkWeJvXPmhdkvmgTJzB7HNWkY9XHvf5CSzYmRfgDSB4RU2gy43ijaTBLAXnT6UmTuhXP4hbT",
  "key19": "3W8soni3dWwmT1T2JTvgDXi8pvpZCF4DWmR9qnYU8rkSETZEQVZYRyn5dXNPgJCD7QkxqtBW273FmQCsgyo9jH1F",
  "key20": "38LgBmYAbZH5L34oTsfUtbUotsmnjtQf9NM7EPiAzMXonhjc9j2fcUnaSQWhG6hWi2iwX3iCLqFufvR3shpRf1dg",
  "key21": "3noUSkxeXPSB7UP5D8DTk8KnENZrgFk8jVh7q8bSEMgy4Zs1Lu3TdvjFKwQnd8nQnmWZ1893USXC4ncUe5PmYSbn",
  "key22": "3woT4C3Nwm7gYFW4yaDBdnUv5664SHQDwkeNi6qohHk4EntjNrbvHbB1ts58QHFgd3hwZ4jY3PaB6fMZjfXDR8yC",
  "key23": "8C31BCZPHpeVVqKvUDsnHEufzUEYChYKAN38FyUWzMLbM5o4oNkLKZMhvzyksTGKtMZdMkfJ8CyEasUm5eoSUgK",
  "key24": "5t2zoNYsobm8r974EXxta3N4J7EariqrWTpGz7HmeyTVWfPodNBrHQuJfcCqKV2FKX9JihgfBe2BrVGLA3WEQsYg",
  "key25": "2dwx8AsvV3967i1E4zXpMUE8rmznY42a9giKMUAyZoggT9aX144u4w6ZDfpmMDjkcUHBLuCe6yYZ7oG8o3ZAdLrH",
  "key26": "5d5LJn3wZX8oYdUSw5E9KXJAEDwSoSLb1FHPYhefFrh3dvY1diqWJt5r88V7VM2ucoHPH5esMYXVg15XbVqhs1gG",
  "key27": "zFmvAUFFwZUYmiTkr5pxp3h9sNKn8X3QMFsJh2KAytYadMSt63CV4XtbFg3W4UDTooUugedbiyAD6gJab248PZy"
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
