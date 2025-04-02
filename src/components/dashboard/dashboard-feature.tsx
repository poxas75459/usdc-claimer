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
    "5fNAFQb5Yttuvg6WCwTPVTcAecAcXwjywqSRHrW8Ni9vympHGvVVrPnPSyGge3YShUbdJBJWM16cYQZSnzMJESh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4aCGZEuAwoZB7LoRrHkz64yRKjCGWEutSHaRxSfHj9DfZgM6FR5KMvN2TnStNDjh2NWnKi2LeoyKwYL9ZHzMsQ",
  "key1": "4BqS5WeKUkTiTUq5yYaQo8H6DdhGtrPA41oqxec2LzXKRJj3EqVY2xSFNaz4eSefUy94STZnAPQXyriNUENCVprp",
  "key2": "TMkVcF8cd6pvkHWUkGzoNAuqpbucZzasmH7ayS5JtmARtDB5taG4JPKsJ9QNTe5wLJLgZDPLxtRFVbL9n9f8JeN",
  "key3": "4kU8eFUT5hHhbMy19gzA5Bf27cCT3QMbWujaedWYGFHSBsd5z3FRDf8JDsB1LNKr3fXFNPH3WprUfCiwViNP69aS",
  "key4": "4jezyVCZh5FDFKxXTSF4BVUG1zbwWzuGbv7AbGCpCDBNmRg8D2yE5WYZHiptPiS4Wmoeas9yqezz9cSNP6newGMC",
  "key5": "3Ss7jLmjT6QP7TP8CNg27miSobHbU9Dx9exjF4W8Fycxo1KC1a7E55Punq5ftLBmSBjFsTkVAhTsMpYyjLwutBwr",
  "key6": "54gwnGYYefHWmzH9qU1mqBoqmP8SAAp2iJ5uq88RkykRLpoPedBYo864ms6fWZhN2WtUJtK7CmfKmREZGXLyxEqy",
  "key7": "5nBPe5gyuSXiZWpMgAENLPVdDkvhZyMxpAyqjk3BxNt4rEDHL2Hn5SPCgopbQnTtFycVth4b48imbxtAcisvFQCi",
  "key8": "zn6kbo4ySXTfj5ZHmNYEGTBtfo3TKRcu5igFXPoXMUrM3d7Zbc6Hk6YhwfoJ7tXpaAJbMBTBksEunJdNwb1eEtJ",
  "key9": "3Ac8fvx2AcrLvDZmaqDqWeMnUeqikEwFUiozxQy5aAmvfMPZVbrFY6Ugxge3xwnt1vWSSUghYzfDBdxBEEw9RD18",
  "key10": "5tLUFoVHevzgrYBWmoqTXo2Q8ZAYdr8Te2T2W7CbA15TazzKddZACWd1ZthsN8deMazTqTP6LBd1b5mLSnGB3SKH",
  "key11": "3geF2L2g15mkBQAmzFp8ZrkbtFm47HwD55kqVZ1Efm5cxQzW1ZqZZS3u4SRHtSX11G2vra7Y29zMm7hwYDc2oT7j",
  "key12": "5ec17AC4EekNwaa6Vjfo8ikmFVGQkhMdLVxMSGbZSh19pS6vgpwTPGuYQfu4xcfiQJAdjNGYSS9drNezuRZcce5c",
  "key13": "4mXhHvRaZai2ei6C1TPf7oHTtpWTF2FdR2PSEBSXcYjqEboQZkLri6DJqdktbb2P1Q83XFHqquZigT7TtTaprPt3",
  "key14": "2dyG5sGcYzn8ELdbV7yYDNfdQYwQSytmGntULFRJKXGH72eo4zzGLxKRNQPr6V5vaYvPVgKREmJbngmaPRRWS2ZV",
  "key15": "38SACzgcyRNwNHnQxWRnzfXkF2rceGjZ2sBxK8Mjv3wCGtabxH9wDDs4MKa1MSBKZkDu2RiTMWJ6MUnnCQ6NZzv2",
  "key16": "4pwQTa8PJzFzjncDhgtXJ7zV1xp4KF6cAsHXgNosTaPhhfbtvVkDh7VGwJ2k9YedQBrNSfsURoo2yuEXpcASyX8D",
  "key17": "4Jn686omySm9Xe8V5sBxjffM53uiu8RnTLVEDsPunayoTZyVAcHaYmdXQeNna5XCTG17c5mHYgTkAqt3qwFF8KfJ",
  "key18": "3q5Wybs6kBZyFcEiBiA3TvYn4tiEfL6gxaQ28p7kNdetCQunBwre9VkfKdouSPXWtMpU2h5XKQGQPztC4Caxd21z",
  "key19": "5UXK7r5c6RQ8ToMMapELHGq87bpo8GGRRhfp761XKjd3EXTagjj6JPGiy7CeM6fSuDA8NTc3eVBxaQeySj1qN5Qa",
  "key20": "5f8cCJNwBgsNkGSeritMUNoZgdiuCb2mBg3mD9EQ3vqmUKtcA6uY2VQn3VHo8WKZ9CCwy58y4X71RYB3b313n8qj",
  "key21": "2NZvYc2C6RGzfnJkqvPUhZqDQ19ofbhjdKxeDPtEhC3RK5TjVLaCJ8f3UUmtAv7diqzCdsExcLWAx3bmqzaNqtHe",
  "key22": "5Y8WTmC6FTFDACXSsj2gc91f2JBcSczWXgpg2c5au8XgH2yd3Ue23AjPCDa15dNKtNbUtamPyrop3jp32MttDVAV",
  "key23": "29QqqrGmiDexvVhpmMiT7kYEH2DKW5yCHaFgjBMP3Bx519BA7caUSQJS3n2wJHAXXmdT7GY3h61WtiPPK12i14D3",
  "key24": "3oeRBTuN6T1AUvU8nqx9zPcgkuxUi8AoeaGifoj2dHyW2DDuDy5bGF9gvYEprqzuw9MTCawiDKf13v3TetyM1ehT",
  "key25": "4e9xCQdGf4s7nCj7dvGwzSLRWHokTmMkVqimdQihkSEnhxt1qySY6dTMuiMyj4HDjJNC9NeaZEjGWKN7wuF8YS6M",
  "key26": "4Gd9H3LCJztyEj82Mg9dtSHBgMpDjq3N3vACXLvjEKr957wJAd1SwUZnRNgiAjfPDsRUYcASRzPWDYKijVQbQkR3",
  "key27": "5b18CHkGtfzkyWMsmdkV6jgm4FwgZ6dzqWTjcrKXMrKwp2Dg4YyC74ECKdSy79TyyUxY9VcAP9XP766fqyJ2mUyb",
  "key28": "2KCcHNPTFH4SwEorTmbzsYUViVdjM9pFiB9UeNoKiGBp8nCynGJfmZsrkbynzecNe9X27BjR8cchVd5sSyFoEpE8",
  "key29": "55WkF3A5jatPVtPJSn6tMcN86yAhFXC1JSUAdrwZiv3RM8zuEDEd9q8mKK5H82b8PUkFmZgZuVp7xikD8BHrar8c",
  "key30": "4qb3yozVrcmaDZgSxN8rmeAYx9fknX8QwNw1wPbRmpGUhKzT4ephNhZy43RPnDVETJ2YFYtyAxBdESqRJozKaE6G",
  "key31": "5AfwkKcNubML6nSG6B3UcHjR1MpaRpFL36PWzTm8Y6UnJrnpHyAc61C4hmrMwxrUDp3P4SWBTkdrzd5seHLbus6u",
  "key32": "4XyRmXJxzV3hmGzhZrsLLyj1Y3Yiu9rVnDtnz1BzK7GE9hCm9JrdSNXoyxT6JXQVHRqVwAR2ZBoJhTz6oTP2ai49",
  "key33": "3cX6RDA3HN7EXqBq86NA3aPJ5eBcGuWnpWjLNcSyf4TTCrxKVPT4LpS6XATEUmnHGqxreGU6a3CtKSYbdSLM8yxf",
  "key34": "2JyiAzR9he7sgjhDxrztBqbybim5kWAmcbHdFLTLo6DrLziLXfV6z9sPW9WppXXPJ5WxuYtXGKFFqjKVLmH5n66R"
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
