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
    "2JGhZJFn3W6D9PaEsYmpthewjH798JwJ1328bxSVHWNxdp79WQNiYyyZcASbGeonHkqywk4STfeXZo7xMsQj85vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBTWJ9ncVyFuz7A4qrPaRQJiEC33ykWEoJjq5t5SrExAzbgAWVhxP6RGSLfcxrb4bDgwaZNFnGqeS1PrWnYc8iH",
  "key1": "2rT6Z8TkLMeQVFC3WcxtWD3bU4y4u6uezcegfo92GTa9JBDsGjKkbokoNDrV3zacA89nfk7feqnDxWbEwvzp4AwU",
  "key2": "4H6fo4kB95YHxcCeJ289kgjErw6MiXY66CSKhEmojL2rjMnyAVyRt9Bc4m3dGvNz71ot3udQjBnTBFZn39gQXs29",
  "key3": "5r2rMBwWvQzyPAhm5zxQsNFgV8EaScxBw7dm7wn8RySPnpJTK8FVPMKLHiZdwmjmaUY52XL1ao4CNSUw5r6THvdT",
  "key4": "4k76CpZFEARRaJjAvZfZeVwRx8Nc32NjwDgHSAYDkSkyHmmkFNgi3qydk7uTdDV7h5ryiz4ayZwBFhX4EHfG8PqG",
  "key5": "4mac5HVCHCsKM1GuVS1aYg5xoxpXKJYXgs4GAzN95BEEpP7EKZoHN3nJ1QqxkrsBm82NDksPLP82KFnb8mLZeat9",
  "key6": "Qqsj7BvVoXLRjbEFYodMZirSqo6KnhaEzVsSUg6gYJhvPHx5RCyQjt9CFCUEokisSGAz9rzm6JGwhSuqWrL4Gwv",
  "key7": "2EUKDij1SDmZAESvYGRcYUKibHgYji9ybzZwthKgyJiHbAiz1UvLqAvcaZNfxU1UFC5FfoHHPykvrd5Y78VSfeCT",
  "key8": "2sD7ZbHLiE7LWQXMA12ruoobVToxd72GhJkGGrgbTk88zX5t7VkBYTrsGPfHS7cEYiWi1N1CdGG6cxWJwBqHjgre",
  "key9": "3BQRgU8Ko63WzvKFyoKX8jR8cu1jea84YMxuupbBmW9hqpzmVJeHPjYBhiWyCpXZ6zFYnSG1w2cwrEgHY9gcCDZc",
  "key10": "5avWjhVgddpNXomFPNawoamE8sB7qru6GQ42UxvDufNuS7uWXDZJ9X77cruvUgWgUXuUwf8PxCkqGiwPhv179VWQ",
  "key11": "CZbJWsBsf3cpSXzRR66siPcaiyq4K21nC59Q2jDvcpRLA1dFogktgDnuQgSxhDRLSSCM7cbKw8VpCE58C2St1LN",
  "key12": "35j8tEBCizLVQjau2b5FUj7oXGsga5nBheYdpU67dJmFHMxLscTL9bUgDLcjpmnJ2L43eLHar5BUy1fjuXiwNHss",
  "key13": "2quDuo6LSFcrynvm5vxfnZJB4ijLoG5TpHhJ9rRrTErbAyvycGBDTujJm3PMS1Jzvo3QoGhNNUPTFCgNknGn7BPq",
  "key14": "3VwuKvUGF8MJoM1RbLKq5D52nSGPV1uSqCdtxMhvuLznGEQ5dHVeVmWJbztEzssZJ46n6XJTARZxdxNQQV3zPSq6",
  "key15": "67RGTCqEgs5ZwVRH1kuc8iySNCqCPhJveCFyULzD1Qmz6TJyzBUdiHrNGF4jDnp6r1owxAg6p1F3UJNvFSNxLeaw",
  "key16": "4mEoSqMoCpVjwscPTGxivD9HGNobymbZHUXjFKwmBQkzGdBB5xTdAwrbJwRMRiv4fuTeBX3MF9fsxNhh439G5FGS",
  "key17": "3TuG32NqmYm9kadouBZCUwwi4sVS3nAQ3cVJuuiGqz2hj4SVGg3xQKFoecJkTSp7dBRHKo2QpttVqSW5nfPt9baz",
  "key18": "3gjqgSE8m8vbDgjTgwDkBRMwVkWDkWAoLamAJPbvdTYrK8Sro34xv4uadhMNTP3A2ycipZty4vB8vnYDV7k9Xtyg",
  "key19": "5UBHHtd33wGgkR2jK3e5eEHR82bCKAJ4RAJT9VCSVxbAHFzpetXrGDY4wSd5oRGiSN8vscSPUnTcubCLJXMLZ443",
  "key20": "4kbrAybWg1dUJADDLQsypofqjP7HvzZj37nkftxinbDgWn87ipbTJ18Ty8NZnwD4ma5SQk2z8JRXXHkGWuKkgFLb",
  "key21": "23ZPeDrnxS8gv5SQSL2DGasHUcrLdYSSWRgLWKuff3yjPosi87RTgMSAwYLjUsjzGemdkzMg1RL3nWUHCPoxo6YJ",
  "key22": "2giRb5DZg74k1zMgsubz22Gnvqre2bHM1FpjrUin5Smm9m8er2tVCiYzXKKhf9fY72DDxrqDsNzXeArSEofP59di",
  "key23": "cSCCSFGmsUctfxxvvwXppGQBosH2LqTVvSn7kZt3yohrKqhnXqoSJHf4QojiEuaoGeBnwydgmLNzh1LcGTXRpNf",
  "key24": "4wnXUH3F2GM95eaB7NjXcENJYPhpj3vdtp9og17ESzNm17uhmVn1n99gXjxecsFHaRFbYubu9WLFNJjBrCueZAT2",
  "key25": "2HDKocrsFWwJJ8LQVqMZHzdr8DBvhAZMY55dMvJa3KFprzJc4guVBLjgsqWZpdH4NfaCgi8FwUQGke4b7667kAoq",
  "key26": "ZKAcBT8Mo4s2XshHhSF2fRu3kdK1ToS3cqmddwjvpza2djHhgiBSRA8n5kiPcr71DBH6ngWTE6g12ox2fgYeXJc",
  "key27": "2niNTWcHAVGtmBRCxvWy1tHMnUUHtnu88Y4SPBbJwUhZMrx1TZYkAUvq7p7UmcW1Cjp7ywidMS4xsgSiU4wgQnJc",
  "key28": "5MZMLGT8d9CLP9NdY7WzZfzgRFMqpS36gKkjCLv75bx4ahfsRw7hwQ6URUBuaaDVC7UxQYwHmRqmHqNZCT6zcqU",
  "key29": "4sZdVX7r4mg4cFqKPLZqhfHNTkPZW8bV2FS5tAHR4QmwKYRn1m1xt6dhNDFBv6KnpCNUhkAZBkajPFo7arEgSFTV",
  "key30": "5Et956TYELzV5tBogcdSjYQGiamRD8d75u8Cgjv5BiRxVNaGuUa65ZRzfq65tvXuFpQ7y8QDF1Yk3sDZfPX1bYeu",
  "key31": "4A7P12qnwuQ5cmwPxaGZbMWqveFia8FfR4LEvdDuECSGtg8zcrFghYecuNmpyU1E7noqTsgbcwEJ5zgcGyoRe3JB",
  "key32": "2A5U7HG9UXE7TFAsUYJJ6areNBMUmMb8bczhsxqxfhmtiSuWjMwCWBa3jPzk5zGjskhJH5jEZE6znGUq7ULxhcb8",
  "key33": "2rcxcwRdmaAJ4xUTKE6qXSunAVVuVXiSr8edMq2bgQAzUzirKGfKQMZVWLaNQfnSPjPC9L4civ48b9PBuv48eC88",
  "key34": "49sKe5gDKgNHQcByGYa4FVHd7Sk8w7qU75Tqf9wZ83TY3ZMU9LZ58et6MaciWKqpbyfk5kySdejHFa1nALS46dHg",
  "key35": "67ZD54D6VPbAU5ycqMTC3haq7D9q8RcSXmai9fpabcsEwYnnXQ2oTFYFPWV9RYD7xY7cWJgCPtyt1LQfjtukQ67k",
  "key36": "uSZU3Lhi34VwdEEy6i14oHVouVvJN7FtLoKvgaGALfgKagxC7YssRBJGRS76BxyhKisJSbDU7LJiFCJhBt54QX2",
  "key37": "5azZhFUxztLztMx8HzpZiPSjSWLcvZXcVRjZt4UUvUqn6WPBhEszefhhnGUrSJv1b6dcaGorsESfkMcnEttqspdZ",
  "key38": "5geH6twE658zR2KEjhuaBrZHWMzozXjFbutB3rLbNwhLPPzZ1GvnFqjrhLzyWb1BkWjXdGWQWj3QBRcW9jcqgFs2",
  "key39": "54iA9i1bXsJkfaPvWtGUBKHXfVttUhPSUQZdjGrmqZJQugKCEAkJmCYo8PwZGQcWdy6YS2yKpnQc8cu9dZ7Cppoq",
  "key40": "KuKaV24pPHd3hVFsNQiCRAc51Q1CeAvGimwPrTtnpmBT15MwUZ99JHBbQMXugVRzu7FZK9e4fU9Tg7VeXWTKvqb",
  "key41": "kKL8HEUE6unj3XCHvkzvRYfUXt1572zyt8ZHKJ18U7ESYzQaBwCkXqDTBzaiDjaUWzf21E2fMYXBfn57cyCaG7J"
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
