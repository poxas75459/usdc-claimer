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
    "4niYseNT4mUcARdUPXC3rkxKgtvaidigNHCtwWAF8DzE4c8b5b6JD1K75euwS3SVWTF51PQwtKCYmP5fDdVmSExs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfRLw4LAE28itvubC6eGNkg1NBx7JBCPrrP2xQwNGa2jKD3ezFVkwyfdBtvsxBVuJ24Y69j6SoxfT5J47BFLcQS",
  "key1": "62ULNqeP9zqhsS1RkbsuyCPeeChtJpBvEiS311NmVK9FAAPHCMnmF5mZ5CodcowFiE1tA2pVh4n9jeHw1o44aqDR",
  "key2": "5gtRND2o8R7vg7863zKx2gAvWNq9h9MNeoFoaDpEccTTNvvacz4LLad7sxgzDV9cNjJYcag9CsvpZiGU7QFz5nWF",
  "key3": "3iXgEhVdx9rNuPPQRZ7A2LE5UbBdsNFLcdZewvBHuQrkbabJej9ip6hVGQAYPAd3EhFXbHQysQkEnu6mLXGb8HhX",
  "key4": "5chGYUuKaqzPAbCT4znEU28QvXFUn1Fn2KFDubvxMzwPwoHiqEq8QYy6fdvh2SdndFa5TGz4QRq8ASSEeFgdWMwV",
  "key5": "5ZpMipFbKeHcHV9enxU7YeDAmyVxeTorZqbBbvTDJZ1oKBAfc92ezgDCcuEnC3j2rfzHwWVDUGHVqGdGgdvjHVtW",
  "key6": "BX8GoRyHJHHqdzNy8F7G2tx4ZJaYfjm2YR8TkzvrXBmf2YurQCLyuRB3ASkjmbKgrBWAig229Yfgu1tNLZwzRRw",
  "key7": "3vQiNt51i9Xr85qzG18GZ7KNG1Nmn4qawezxJeH5yJdMdsahw5otUjHbYM4yzRPH5o4GHCXzofh4jnisFzQNJUZj",
  "key8": "66eDojHN7Wqj7qu3nYioctPWT5BrTK5GeEbkr4dKBQgUs85dNcXrfmiKY3bgyL2y8AkN6qRkEMibNxWKbGyXczJJ",
  "key9": "3mXPhWokWE7tbH9ogBkbpLJGsh49Fxtww6Cbq4GL8jGs9a8EhC1h3TiQd2ZFR6VQLTX5euSDCf1xVxKFytZ9m17L",
  "key10": "2QV5C8VFajptA1BP9LLh7SBfSqHzduDaajkC8EMLxdy6wu2KTTiyAxPFKmZt5WV4asiQvgBRNLo37z12QNSe66L8",
  "key11": "Vq7oQFJ3BERLha6TTHnnu4LKFNX9hc55tbGBorxweubbwU1nQS7XXCEJnBJSDREneMyQiBmSsrtNd1V3UczcGgM",
  "key12": "ugyqsm85BMNEdZDkE6nKVjjapeC9JW864rSfxcksLv6zNHwJt9LWKZTk1DQSz8uwDViY14FSedEAg4KghXaSc5A",
  "key13": "57FbZwwrvQmTqrZwERk9UKNCdaGzkNDunXTVCpj9Pim3aUuMXECZ9gtBZQoHE7av4MRmhYJoPbASyCtcymMkaSXn",
  "key14": "4e5Wp7Q8s1iv2G9ycx4BNpWXQzZhTYwsEe4jxrapbFQviksgVDFpezdLCMAHxeQ11kNS6goNYCxTmCrejxNm9j8h",
  "key15": "Nti5Vjg32i4BRh29DV5XS24QjdGPB84G6qfLJyPBBAu3psV7pBxfobwGqXURUbK42YBdxCPYYTaJdHDRHJBWCcw",
  "key16": "2JNmhVVBXykWmLwNA2R7FtffsNrquNKTMexzMqxh8JYKmZMZeUtjCuffFqyHqKyFbzTo6g2jCsKrk1dygKUcUxce",
  "key17": "5LfjvMC8V7BiFBKhhZKmGDf8yNj3xjCfDVBgTaRtLyRbpxF96WqXrpEqFeT8kb6zSjDq9s97YtPr1x6Mhw8SDhez",
  "key18": "2ro39JaX3Jso3DbivhdStSoPyvchYBmZSTEJQdRU32ueGzuiVbi8TH4M4yiJK7CsUrjueYSs2qeBW8SUy3DS8Bec",
  "key19": "rr2pXANRLz251bn9SkLHfLM75mAKHfAsVJEnkzJVPrznpTeCcsrxyi8DXNXQQVd2cxpM2ikrd3RvpbavzGLnnED",
  "key20": "51LzbMcD4tCt71wK9ZEwZt81D3iyc4s29rJZvMfspfgsfziK5zXqExJAiVHxpFZxvhd3QJietBnBzTTzgeyipJwA",
  "key21": "64SvwUbL6Yz3oFLHwZyPBhjJRkXVjahWkTknakgdphXP3Yago5Gu7rjajv5akbocJJvthmhv8EN7ufMZWobjB7FV",
  "key22": "5w2GC9aC8LZ4u7E7H4Ljvmi6LdvjjuBhhakm9YCdYW1k4s4pGwT6ZNVdFbUanrdvtgZSz1PEGvTFpDw8m67nc2Bp",
  "key23": "5T7RzutDHqs4ATPSQD2J7w3ebk87BNZ6eAmX7TZLZWrcDfmSXssQaM5aQsXLBC1cxUqySczpMnUaBabT6sQJ2VDX",
  "key24": "4AoRNP6hnmUMc3e9kq78hxCUzAEGFNjdVu1FwNDi28vbvHHTagByzgLmgHHThtJnPGRYBbnfRKq2X8867AT6XQMR",
  "key25": "3EE9tpqbpvDsore6sCRqmm72Pn7orsjKC7pEnJA7ZTzESBmToyhEWZ7ULxZ2Lx9CuuakFafZCxpvzaBTokax2eze",
  "key26": "B95T3uFgyJo26NyfQCAsNgCtsyUwfVC9U9gMBnjg58WhY9DXthnfvHo6RggZg2vL14u7CoEtGcDfmg5zEz2371d"
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
