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
    "2gBVLsswe76tSF5GH7CP3p1a8mcYoe2LkA1nA6u9BgDBU23cuEj5nSj6ZTfg6D6SfuS3UjmLdok7ZqHt36PLW7NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qpKV6NbfyqCdffRKPzzmGh3a3z1f2NL69S3FEo6BgAshhgUKyus3Qu325ESrBWGV4qHXuDfkocB3YVpkZwL3NUC",
  "key1": "2HE1i7daZugtSqiYV9rzbe1QeURdtHu7xgZW7DcWg4NNGfxRxV7oDRaQPhaMLadPedMHV2rt2hjHXXajZvVpksGJ",
  "key2": "29PMYFGVkebTG5jcmbpif2QofKWN9QzHXCeTPduP6dtcqw8BWjDgThGqBxEGZ92e2Z2KyGpSK8DpkLcbVGKhxP64",
  "key3": "4yTxLzGBnDovmGLR4tqGVVQWYbaKTPkziWexfxDMW6YgYXvnmz4v6Edofae6obVV1MdJi6v6VWgHuhoQZJ6JTYuD",
  "key4": "4JmSQrju9zvm5rDvdVZ2pCopPkHQTY2BMeicQ2tTxLhqnw8sMSVQvuXBt5fAFjijbHNg6kk16Df4F2zbmpcU9KKP",
  "key5": "2Qv7EWbFifMC4jdwPCEj2nLjXzMNDuY5nee8PcTsp6QUPMaAnwoRdrVeoJDPpLxR5LKbePKxyncx5DckfQJjeC2b",
  "key6": "iyVRi52y1upFnHKcwPqftz5T9A85GPEE1gcyyCUeSvQZ3eVZUTT9h2ZNdC5feMdVZEaFRsHtNBmsMRG5oaARMCM",
  "key7": "2kd2EyCVfb6NW1kd2qsWR6jX1aH8X4HePc4WF29nLJ1Gwf5noee14LNYpuuqwhtkoA4Kj6V9tew79brzRiDxdZVo",
  "key8": "38N74f17ZntfrBr4hq3wfessyAjVbx3BCVDoAioSUrmypyxFbw8Wpahz6Fmu8usCvULw8HNvJAbsxUy4xAHg2NBt",
  "key9": "3BcK5VhnukVGaYvKSt3oNvS4WkvYZ9UPKqwCGwkZAFGjtvfYLRLDimxq2C1NTcfZUqPBBNb1WxqCT9XdjoESxVpn",
  "key10": "5b6XthDgoHWKBeE4hvaYzTXvuhfQTUMcn1inMKvgwG2s1PX6fqPZH9UfS5mMZscRtFs1LahPtz7AK3HGuaPLDeAS",
  "key11": "3ZWCv5RDvxQctjmXzVXk6YAzrZqzQJcDde2xn41GwFBPboV2bXUNHG39F6TbTp4MTmkhQ2W6YYYEkgYagJGRkkgg",
  "key12": "4Akm57yZUQQVWGcKadzLJ5Rzp6k676bigjkhYnF4ZKvRcVo9EUgg9ehWD84ipwmUTWkEPkMcsoTrMsCfXK8va1Rq",
  "key13": "2v7GYGBCWKiBKMfU46Av35JehLM1FgvKat8c6Ti6ytSz5xrTD9fN9riHeuFPivKh5awYUg6B4ay2DNZdoUd2GyAh",
  "key14": "mAJwMvXY1wLk4KtitTTRePnYSZvhR3nNVHR66baUk79iboP3SMSsogPKucee592cJdZYpwDtejFNbNhd86UDYw8",
  "key15": "2jDhqeECndpRHGbt6Qom8Szbab87AxJ9ZQpin9thyWaLUdKmLyhroFvEEmUqfR144vkgp9cJ82uffnLn5f93yXwQ",
  "key16": "2pY28D3ghxQd9qKpj4FPUzRfDe28ksvKF8cmPkj7tpHpuCPdu3qRb9usfSTo72fNpSSQ2aHtAhkHn2e9SxDBNXAQ",
  "key17": "5iTPrgsyX3GkqyxAHAWabteeKkeDbkyRN3vznZrKeuDcyEW74fnwcK8jEvRQG3kuD4VjcGN9P2v2xRUDZugFoLTw",
  "key18": "3epufVLRXBmAUQ97k9yrrV7w3s1uuRARGwVfthZUb2i6T526reSF2GAZc8BiS5epcEop6br1oMweoBtysjBXq5DF",
  "key19": "h4Fve53dLGrNBmQjubBnGAEh8ywgWBC8DpAE8Ca8HVihAUobhWzRfTNRavrj54QcK4N6KhaTVP9WXGcSVfNgVnA",
  "key20": "2553tSBeHfz3wh51RpmafpGBYiVZvCauqshfaN7kngMcD5m84icu1fdZ5sBobeYnkGch8BLZhCwKz97xc4ymwR2c",
  "key21": "3bPod7YmzcPGJXaJnwefu6kd1nizFozESsMDBfmseWDt3jiMK4sEd2S8NhxNeyr1meUiwzL4ySDpFftaADq2HTd9",
  "key22": "5franutUfV9dmRefGBYYmuxC5pGnQuV8kTXasgkWAcdvkreYJ9tVs5K76zSC8o9DSqnu1d2cbHMm6WB3pjoQZCu6",
  "key23": "5mUQcE1jAQbEWRLHacjEPN3HSD6Uvy2pwUxk7WpJsfiDu9wrqYaQ1A6rXXNZVycuMaEzzVdUJHeLuiZYxn4cR1rL",
  "key24": "7XUxgpG2aWVqHS3AMoZJBpjaXBiAgQhJwxY2q24ZsBxvAxwZeRHRS9oxqfgY3a2AeeNfnt8hvrb8McDi2DoYxNZ",
  "key25": "zGNEbwSypgLY5dQrK2z7ZWRwmoZsgTemuumbGFpdN1Z45evP7m3kRNUvT2U1nq4XTT9Eyg3eSDAzsGyWLmBBEMe",
  "key26": "5DdDXQY2HGpd5Uc3sbJSaipSjiE6FqbTZYsFUShwPFycv5Lv6rbmAWLMVizLTM78uEGmSeJShe88qDhqmxZM5b3J",
  "key27": "39gqKMnY46nwf9zdXxfFnf7GN9e1ERrrF9jRPtsp4BuHsN4SkzG6Rdvk9ZokmnN8P63frpSDPb9A31ttTnraAgRk",
  "key28": "2M3NuvBczRGdMJGixJwJ6ZjVXgYgbg2oBucwrYRyYDMssphZzndW5Aymf3U5Qn672hpZqNAn7q3RecuhALCnzXmM",
  "key29": "5MtiCDYcAH6TtVGVbK5hs8LsaU1tQLPiMLmzpmP2kpvtz5qHk7NmLiXyGuDgkY6EUBRfLX5fYy6NhB1bTSbEzMWg",
  "key30": "4kPipDL9XBbXPYeuK9QdwT5J1pEGKTTPErf1VmVKSXzg1kKHBhTw8SiSTFbfY1Tju9AiyjKoq5rxSvcqgXiNKcsR",
  "key31": "SZh6zzWj1QRRvhi3WbLV9ZfQX6nzfTi8iqS3LkkEsUoz3LaRF9hZFUScmcGa5chtPHWRfDvWHVh988VkjSdbYdg",
  "key32": "4zGTr7A3DBvJcfjTrMospwArJbWbjwahE5zMZrT2C71tgsFntzasko2Wgvc2dqsPA6PkserbKzDmkeWA59yE6w8y",
  "key33": "5BXUDMLkPTV72hny5xFVnRRjKZTqZsVLamLhDcqsTL8FWGTMVx5GcL5Lx4x5BALAtpW2njxzEFnNX5ST6mgXS8x6",
  "key34": "KSYikaDotKrRiC9CDxFhyFqTiVdtD4XrPacrBeDr4iDeJ1iw1KE3QXWV7hNQnGoYCf12rb1K7z1E64GZykZTw6B",
  "key35": "4icFJg3jeaB7dX66yN4F92MchVS6J8Un9iRHFAWbAiazXxHWpN5CD7bipBNGTgza54sn7SXHXpMqdvHJrqZAVzXH",
  "key36": "5ytdX3wsbH9tybngrRgPWqz4kMUHWnBmQfS7hR4vLt6sCYdpjBbkdKrV6KTTT4uT7VSxZx93sjrkcZ3a5zcZWjfu"
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
