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
    "33as48uZxjwLGVzucxm4WWJxSkwBJTpDnSowW2bkaDHYmHexC3G4kTopiRmZM3PMV1e2UzkRhhFqMAEzckU4dejh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzAy8a7TggdTFp1Vyh3pb1vyV2rgo2GsXoQU2U1hDV1iasfLwg5e22LbA7CACz252DetyzDZXzraRW7ssxbRdoP",
  "key1": "DnE55SFtgA6V2jtLFgRjHGpNXX2p52h28QDz5E4WJURz3883beEX83bmkSdJzsiRTbH88AtxzXnjnkTturqRGp1",
  "key2": "LFUihVjgT4GpHHRx4qWo6AgXjGeumEaPrb8PQfjw2Qzut9HTPvAeqkTGG8Vj1vYi42juLV3vVbvHuhxuua2w3Ct",
  "key3": "4B8Xds387YTH4i599WaopwLBKdacRA9r6C8gvJYp2DQV5pQvkfwjEfDniw7uGJ2dpbU6Xped3148NA7xWabk6B9a",
  "key4": "XBzj9mycrSWrqfUMw1aJmDicAFsTEBJT449BRayGG5tbJQh6szqRqeW7e7BnMxvWKHu6vRNz6xz7L29F1vc8evB",
  "key5": "2vLSBJVdUrhJQzQTr4jdZGAPuxPXsKMVccLvMyGpZDDVXQqpBNLH7gqZApDskfUmftPFpLRigqR1MgrQjgUg2BZc",
  "key6": "szhwKi5TPNaYDy2irXMMnZF2jdXb8oVDeKzxHfpBtTmZJNnyhfhxfK9FnT3FSZ6TNV7Y7xdGCBT9BVnqnwA8zx5",
  "key7": "2wGCchMjRmRzKzRmUGYQuRnnTH6gHEfvJTAGNoP4vLm6UBmZDx1r5R25DHNLdutVLANJpE9PeGBTwKdKDAXQPVbC",
  "key8": "4pJ67D3pgy6kasMpEFmtH2RZeCgQ7vCfWXxt8DV3fJBHsaydLujjAdQ49JALzMVbV43W59kZ3FRnifB3RR8xhJs8",
  "key9": "DU7uURzACBEKMk8WrDN7U1zXFFe2bLiR3MWdAC9bPg5gdnAZ7T9X1LikgNr3Umt84eNi5kqjwmqaQetNNPMwPDu",
  "key10": "3tSRBJJ1QydKvcp2S8ATD3RytyX4yCSBe2vC9zG1NVR7yLDwqLKr9AaWUgYcXyQNq9hZJER7fGaJGnL3KncmSdTS",
  "key11": "5CSvjguX67QkRbTL4YgmviSQqNcx7wz92PtDfdpbirduLGLy9u9ZhtCXH3sATyJA9FQgoRxt3DbcEBH7TdpSQHGP",
  "key12": "u7CByy2BGPkwYARziyWFnTp7Pq27H1neGPkGc3foU1znKANXqMzd8EaqSsqmSKauqxu9LJTYGGe2VrYv4xoJ4Mj",
  "key13": "2X1Cm2RSqiCMN9nJghiNeg4qQtAJUPDcTk7NRdbGLsxW2K7KMtKy1uWKUcAF82DSYwty7EZ2nkmHVcCC3tQhmw1s",
  "key14": "4ApPT8dZU8ycRd1KqWgyzj9KzQCWxL1B367wMDTmrVAc5hEK3ZapWp55J4sDJcFnZJVPU7xwW5uKL7YZPrRquqj1",
  "key15": "6W7AYjgjnrfuxwt2MnjwKWUpu8BvQGJHDMiVeSpuFrdhM9ptah57gfwMjL5dGggAs1WHzkniJHPHeVd2ihs8ZMp",
  "key16": "5mPn6Advqi8CBMwtJ7h2Vp9YYSRRA1K7iSw5eo6qsftupY6nqFvik19tsVnzK3E4EWoHDLZDFKsFgBxkkFbnkErK",
  "key17": "2feGFJpuMJrzdYVP87oDAsSBMSbrV2CDfsSKwnNLyqbS8sWVy6kfm9FGrpAzxqfTZRrJ5rPPauqxHMrZ7M5wukni",
  "key18": "25mFSjhdQfQf8R4Hq5WEshGBzmGUzVo2MvUR8kBeG8gfzKhGfkdDxvjU7H7tQqgcTPY842EyZv9hLLdWzJCwBppU",
  "key19": "3PhWDhuFJYh7P4UAMmSA2wBZJaS4YikWknwUgWCqxhDdpPjd4kRU7vGRcLre1F77LqKYhkVtrWtkKRFBEndkBd81",
  "key20": "257NUuQfSEzRydUsipwcRtFcgoMihc49sEJiod2bbeK5SiAohPYgrYtAKy8QPAviCQ7dxztdQQogEG65io43G745",
  "key21": "2NBoqLw1VSjbsTo66qQdHriGeP3ABNdTDgcJDHJ7ZGeqCERBKZpuAnCu7KjiaZuj1Y6paGfvE4s8vN83wj6QWcp6",
  "key22": "2SB1S5y72GsANbWMMTWBEcE9Z3hxostbXRTAxbCexUM1pAAhjaUnEE6hjvhYrVWFk7rCwEy8iAdoei1QFNag9YmH",
  "key23": "4UB2Mve3MMPPga4Cx1VT4LTX6FtcCUYZgm3fwh2VWRwtF9kb4SRDYiJFMKCG1nHaP9F1FaX8yt6jNUZLWkRja8Wf",
  "key24": "zKiXrKHNrPxmu3eW2gzZmPXLnHdfmPiQJPqsUhmNg5qiSytGHPMRUGD3dwbExcTfog6j3DBC7JPPyQjERp4QX1U",
  "key25": "9iZCSDiaa1BavTqWe3Wdp6wPJVH7tmu8EVBNQVNqHog9TXBEaMDi38PsD2EwFTX3z58wPgGFG4bembFboiLYQVF",
  "key26": "5PBUBxPDs1qgPwW1F9Yx3zRYyXZCimzWZs11GLefFU4EStoL57nsm3TbkybzJuxaDpQnktKNiPSxbawV5cQhANpb",
  "key27": "5G44mduugDcRyCAGGAJvkYUV9NwyfXVe4NfMWaKGSF61VcMfKe3SfVJCz7cJdGsMDNRhWQyrML7GqmPC2DpvBewx",
  "key28": "5GTVcjivPKac2TZbcVbV9nB2ttjNNKfaA3e9EcqpmDyLvqXGBgxU1oxiZvFUgeZKdUcmb14pnJSLd6p7n9T4V3f6",
  "key29": "gy8n5KVd3DteCLQcWdyRfyGYLU5qUykvkFMyPdjt6L5XpWDobRs1VwWq5oHq3j2gkE6ftHR1sGWktxn3E6ear3F",
  "key30": "5Q3BaQR633uUoKxFhaUUmS1rRDXC8Ea6BRxhb2WJ83wrJ1g7BFR3zHebm7EwWAbqw45637DC5iSbhRfE8pGRVzqM",
  "key31": "5Ecdxzzg9ACXfk5s6S84KotXovE2QuGrvzkK1yLk7pbbh9KZidyUuw74TZM5eKzviWFt6XMxw5TEy8R4RhwPcPPk",
  "key32": "3u7cAhDNJ2k7Ukss8eoNS1Ej3NyfeynKiq4mmpxV52f1ATyyTBjhWYjDch8ZnD6QkxRWsm7pLpV9xTHJt2WwS5aF",
  "key33": "rzBbRxZnQcSsw15vC6VzB7bxZRj1rxc7f3fD3w7znZKNxtXBsuPUKGdKUno9Cv4GGvguJKZ44a9sxFbvDViv9Na",
  "key34": "3KkqE4gVisv3ec5jRnVJcvW8oDUiYts5cozSe8VAFXdACig5MyeFcSQGZ4pnEXNa43BiMZ7hsq8cTeG3Erzx2viD",
  "key35": "2CRd3TyS82usyAhzzMiZU43xwMi8XJSBsFp1sF9UKt5pf4wxjvGiYsBQZ4hKbWN7521fm39pZw6ULHf9PPeGE3KB",
  "key36": "4gkExRyZW2D8Dfu1JnZHzx8ZRZeUTST46RTDWgPbitYKq4ymwGaFbFnHmVULTBZpkxY1k47gbisTmK2FQ1hgM6pv",
  "key37": "5Q9r4t8wdFLggfifFDKXvkJfnyqhJeRLHPv3K5abnTxTSdCjkTixaV3ZpsKDL6CYk7zCxZnbC7GozjbcA1JksKWC",
  "key38": "4qLq6tFciXRfnebMnHGzobN1AofKFckLvUMP7L4iRoPcVBfN6TqUKa36NjDMTDyCSyL6RKYEcZ3kWYJ7LJfGMXrn",
  "key39": "3ZUcTQ3H9JshCEgjuT4ZJA8wiCHuMPHY4xo9vnE2LsUB3EkcYS1uDGQCW2fzJgfjqHEGsusp3zLy8ZMyjTH1rC3e",
  "key40": "4siqdXU5ZtXedq3WbPYDqW61J1g9G5AUnBTEvXHAwoQGWMbMrkYg2FtyqZt9FMQ8XtxyNTyvEodimb1LVFarT5Uv",
  "key41": "2SZR9GYY52VEcbWp1mYj4yJ9PHSmvJGCpBhKXfFWBWXaBiBayBmX1NPhT3P4jwSFNupJAooDVijF3XvMrhmLPaYv",
  "key42": "4RerMGgfr11sWMkmALQhcQu6F34FS4HqXkqFHi19KgWYrJxHYaYSRDgBMtmxqs6Q2GbbGqGBBb4THsNsiPC6kc8V",
  "key43": "3gLGXmxaMFTwrqPnoSoaWTUj5jiET7u4Jnnhsmpw49vcoJjFrYzNwJhuKrsXjvgtSneQmjsmTCehmMe5GfZaro4h",
  "key44": "459bBVEBgs8ff3vmGjkNhDWaDKYfPJJ2NLcqxN25nDsuxdJSC2JxWojPPRKXufi7UaHTwt2XBvoa6BW8esq19zQF"
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
