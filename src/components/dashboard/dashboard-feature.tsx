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
    "sC8nnJKVvHxEDtkvGiFXduQKYxrs3CLTrCFaGvn6M1f5jQXnZQuk688eB34Y4xyenB9xVKUhppXpcKSeg52nL2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXEh2R3DAKhmKC9exBgYKizyhwryxE4w8Ybyy827BUigt6CKvcQj5zmyRA2LEBJx8rtKqnxeqGb5pneT2PXpnMP",
  "key1": "22YSJydwA7uRbQX7p7c2S8FBcSoQ4MjNrXs3bMD4376cYGVTgEeP6WFXGPhmTaRMJHZ53GwG99cjrT4P5kGreQ1F",
  "key2": "2W5ZEoQUzQyYgTDsm7Zp1o5ayA2MKiXwExdZEfZ1ghBr8BP41fiA9KtNHij8wdhMh6yiiFxzjtX1uvXf3AsXtaNi",
  "key3": "22jr7pUNbUo6YA7fyYRFRrtxCNy7TsvyWMdzXdwgVtQkQJWDZfCw7mnAQaiyDPu62v4d69W7xfm7UyXvWBVuVqhR",
  "key4": "5RgQyPsPpNDExcyKi7Rv4toNhorzwDFRT3LcEJ1WbvejzxjBT1zQ4TgBignfj4zvZUkeKkbjmGq2FTHPbJSKtMp9",
  "key5": "4WQZhTM1ejgUhAWfCByTWEHZk52b9FLCaHXpQMhKTfpXVmZpmzGNJgdzaEiKWTMr3vQzMBSfoheM5jUFSCtaz4E",
  "key6": "4mf6XpYdwH9dxYEDgJQxTu9hRdrKzh9rDDGUHvFuDkLf82z4TArJuqD7FMwqPwAgbyMbNMW4y7zhSp41C8JtSuv6",
  "key7": "3Kojmv5AKGWRn57uPjevRRZKQ8dWtgBm9YkQX4MgFLAZvD74V5vqbjhkqMXREv2dK1DkQPWSN5Rx4yE6azxBao6m",
  "key8": "4p6vmHeWRVdRGYS6LKkbFKt48ed2AwwtJoHfBJj4tbQPbQ8EYNP7bBAFv9JUZic5NTksTPZb82hA2khzSZcq1uy4",
  "key9": "3bUo1amGeGHgi1RLCYqugx9J9LFt84BBNkKecsdDQkcotvVAfWKV3XC3BtpMg5VADwrqR9U5UPZqw7AVuk73utST",
  "key10": "4g1ica4zCYXLcwgqBgYPHf9mYPJbj8VNEZsZkkTUSHQ4aiw1sasPHV5EhhdNMM1rvjrbfZBnM5AyYDbG51ram4wh",
  "key11": "3oWV8LcKJqXrTHbdTqNhTcF7j4AVwPHWz7mPGyo2ENDDQ4XJikYmnWfMQH3nBdRtCwGP5i7N3YBPtwHjyS4jUBMK",
  "key12": "2z6S7W5xcM7E63rYrn3foK5GCbMFBuNCKwPKefHAaWfh8cXm3fbndLS9RCFkJBkYNCMTg2cWvP2BZRaqrcfa23GY",
  "key13": "3ceJRShN5kpM6V88ZFYVL2rV3wUbTw9S1dcCsmGjkHpDyHZDre63wrxnSJy12brcEYRmwVtMVs3Gmg5R1Mm27d85",
  "key14": "449EyA1uafrsqfRyCpSTxWUDGd4B33cPSdLxg7weiwTHiWjxtJqAcwALeHPjyg9KQsWW6cCAjQcYaa9a5CDXJU2z",
  "key15": "3M28BxYMgRAmAs7sgsANsbeuThEWK9fMBB7k9bFP7SyUPxtrU63Qb5L2tWDhacdvyikjxjEscVkFnGZpBmb2FTuE",
  "key16": "2uNeDWuCBdmTn2FDi2XCysHNJkqTYNyJPZAwhQKu1QBmCZftpGhaR8tQnV2H6pzGYkUxh4i3TLoiwGSnF4ZiJkJj",
  "key17": "5KAbDtqnHRa52W29vDbCPV8C9TJdf2wUJhxdQgjCrk3YgGJhdhc79r9ZRSXNdd51Axz3JURh8M9F4rWDgyWqFWvz",
  "key18": "65sXb4xJPcUkScs3FGXUTLyj156XPVp9btVHsB3wXb1vPk3vpZ6DZ8wvXx5FMEKLpTzbbi9HLndwjQ2RQrdQK2nh",
  "key19": "RHdASZh9VNN9akXiHQRbdRAtzdLbPg5nuDfyBKvw5ufK2MdGu1nXg5BDX2og7CkxMAYGYYkpaSDQHsJgfA9SYr7",
  "key20": "4w7UAKaAYTsqhjXejqpkjDc34YdEUnUKMJhA6L6jw7GcGFi3y8nZdPfZp8Jb1T3Ppuzm6591sjMwS4nd6pjVfs9w",
  "key21": "EjCTNHPoVJXKMBkw2dQAniFyPNFLEFg2eUMobLbmfzsBdY35as7MahCzZD6yzng3xfaZtBj2osm2F3wQKVsMYeD",
  "key22": "4mqkJNE7HwPZs9K7xmSeWbgpH2CkMJ3C6ZE3pbL6ZFhxdAGfFY75pTbxYjBgcjoH8v2w6XboZm8gekCfodGgVNLz",
  "key23": "5Xb2LsL649gdcoHRBQxh38AFFeRPM9PGrNsnGFgDhpLG9FoHnDFHpu4h4hKre4yzqdTGcposxeedy4yJ6DNeb88K",
  "key24": "3KmXbdqUCgC1Q78wDK4w7eqY8iTPLje1GXaXfMb192GVsy1eakfnxCEuPmqADDuBm5t9AMgkotM5pFqUkFBMnQV9",
  "key25": "25y2SPipP2vywadwJGE9SxFxnohHZAz4PGf1zrL49raSJLfBn9zsZv58EbSJw5Btt4GUUhzQtHqmdZhNCCEtFuWF",
  "key26": "3FLiuibv4npBfBT1eRhqLwefutz4h9TqA5YysMKAve6mi4uVFy2kebXVXoVa9kVP84os47ijtcCC3ZCtpP2k2vKJ",
  "key27": "656YGuca3hXKR9N4tSMrRrNvrtNZ3N9A6pKsuPfGgt5AhKfZg7dN7pM761xnvfcprZVzwNdwxGZ9NNDQ1Kfv4kH8",
  "key28": "3wNz6iPuvJzF3KAHQCca6hBdCaCfxUXS7AmntRCXj9ULMF9egjqSgR2UEL8KE9K9cqrJb1ohC94EKioWPrEg3hUU",
  "key29": "4XX8iLuYcj1Jct4ouq8CsGA7jmYiJufV97m8NcWrR4ikHUeHFmAwLzjNvPRJogBay2eubTqZWcvxbaD4CbhqNvSC",
  "key30": "5UXYckvuAPasAsAkDHpBzUFmjXt8P3v5T9ZGx1A3KkuciJU7viemh3wZBAnyMnTFBPbkEyrm6rbK5a1ERAXBgnwt",
  "key31": "4FaMy4KRHRBTxgk49W7nQwSLKGBTfvjYcJa1Egs8gLkBxyuvrGobghp7sfdMCRLLTssu32rVejcaPkmkJ8XMNEX4",
  "key32": "4YBEQxBs2vhJ84VoDzokThobi2Rc8o8FyfaTBPfrAFv7Sp34G63DFMW3VvusiL8mueauWScUQMGRpqcpZ7g2EDva",
  "key33": "527YZyQAeEsJM5M1QBxVQ1UydhyE25DQBQdHQso4v1iVo6rPMufv9NUdMMvzdzLKE9zKJgvk9yYNjKq9a9YBxKJf",
  "key34": "4h3kWyYiTwGU5pgX3Vor6ZKAy5ectD19fYDFtt2pRzkCRJ3o6g6hnrf6dc3Y9S7CVoxQxcHN2C6x1S7Djj3zwQeA",
  "key35": "58VaRPtSJ2X3n3Zw4obb5XxzzXkEQm5X1pgRLPEfJBpMtjdaxUMjZ28pA6GHVeEXvVRbWp1ex7biE8U2kRZC32aR",
  "key36": "4XJLW9LY5mrjSySCW747wpxVMqX2vTQCXLpeQr8bSAKJFioFqH3tUrTQ5Lvpa85mq5zremrLGLzWdEN5g5fnowej",
  "key37": "3w27AY9M463j8jg1NPCRG7PUiHoSxGjCwHjzQaPK21ojbYztFXZRVe7DRv2zAxWGaHwLC1WG1e24untqQsBqS7WG",
  "key38": "5AnvTxrQAuPujPix7k1byKtCX9p8rjmTTb38y1K1Q2yAouP8RD7ws9yEpeapvWPXFhctYcovGyRQ7Dmzqt5zmgjd",
  "key39": "59HuFijqSotSCjYz7p5arcWHUHXjpKBmdus3u7o1SGdyzb41gTnwzsaqgx5t6HFHdi9gmRZR52eL8EXKouT9MJBb",
  "key40": "DZffvDJ7MpWFuMCxcWCbKNDBz45M1mufHi5n4MdawrDXR2fmYREKXHJkjnwswjrQDQU2F53vwsMaGP8PyrmTn3J"
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
