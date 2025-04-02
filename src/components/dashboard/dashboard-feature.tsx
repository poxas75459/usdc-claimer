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
    "2Db7VrrDkiFqRDCTButuGcBY9ZtV9rH4a9yqYXjHoLZ9N7VnmCaTw269gmp3odHThj5Kr3aH8AjJ57SMyPkn8Rgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56kWpEFtKZbpKN4Ze34ghuXhH3uRdRDwwmF9VSbkmFCEqkToGTLxeb9SUNBWjtqJgtvrfTnytpfJ9igk8BYAJ8zH",
  "key1": "LkGYwLUDRQphct4RbnvPieP3ieummUfpYaAfa4M11czjdudwZBktijnUZQSGAgUcmo3UDyf1UBM58CALHnT2VK5",
  "key2": "4sMRyixfzugCsRDG64WuLsntE6PNDxvNZKo5775K1xh9dhHabfaTyo6zoM3TJ2u2tpBiZ8tXpV4uodr6pPMDfBbs",
  "key3": "51fDidH4ReEKGWV4PX5g27tmoqFCri4o3TBWeFcSxcnaQCsqipbwRTpqfnJdXJ68MHFCKfNepjAu6EhjWEKqfGUt",
  "key4": "2W1YFfR6Rbnozwco63mm2neQHfxgCja1TDUX29KCUg5mHjBU8qqk5kxDA3KJthzmzoz28YeVin8fvNSYnortyA4r",
  "key5": "3xaY3WU2b4HsyPr5du2W8gBn6ZG7kWRM4wU7tcR6n1MjpqB2RVHzTrEHafZ39K5LQLEj2GLE7AAnRUSAR6SHgqWB",
  "key6": "3tZNq8fEDmPkCS1qDaVLUasBB3CvofPyBW3hc28KguAzjDScfNH2hedsbtyJwoxiNKKmU5aUyT1SUAiXiyb5dnPy",
  "key7": "5ZoUfoeSC1mtE4wkR9ruEYHBbK2QwpJw83nqz9k4Tas1MrYsPKkDAGJqmkuk9F24BhudLWSvi1STb6tkTQXN8k3E",
  "key8": "3So71HUewySgin5P4LdsJkSejjAjLBamF75vKUkxrbGmhMPjW89Uctp7AzsQ3QWTaASZ5LW3ZPbbQcAWMidN3Zhf",
  "key9": "hyr6VmeayeZiZ9FTJNTZZ7DhgWD7xKLecgjtEANVVLNbxmuh68L3C5tHzuNhiCANgMv7MotsdxnESYMxN5A6SNK",
  "key10": "3gJ81fTuBmachfKfqZT1CfQ6WfNHjXXZCsyDdS53aWgtvDLG4zG48R7ofa24n2Y3CE9nyBEQW77Qbh1NS45W79B9",
  "key11": "4UUHvV6SNiDTT49ACbGYpcyDstHoEUmshZAw5gogFWtqPJJWvBu6TLT3L5ojMzN3qC64fb65xdzHJ1qJNQaTN4EZ",
  "key12": "tFijrKic1oDoEzh1ZjD68qDfV8ePFzR81unbzic51rzcGMHvB1SqPo9PpKSDND6n2K6ae24NaBGVsJV6fJccR4k",
  "key13": "5P9JvzehQU6xxXY1QdquoMtB94uMvsJapj4ZF6PBixFqrF5jtXbcjsqz6dEK2rYV9zdgkifbKrJsf971WKQkBfbG",
  "key14": "NyR7khYQpSanACVeE3zbp27efhcEABGSX4CAS1XjqQR5bdj2fWgPK4Vw2h76k3hT3ygMcJitpcfdQafYFzsehyL",
  "key15": "37A4vLHK35Nj94nbDZj6JPBWsESLwboWcuMom2KqZjE8pVAqsDtAwR12NRutiCHCJceZAk7nmt2L98W1MNgNaxKf",
  "key16": "k9omiG58jN2tFfYqy3yafFKSKVkHNHQt4UUZE7XrqS25ctWsCU8DPUi6JY8tCRYSHma6M72sedT6io2Dsq4WDcB",
  "key17": "5DkBdQs9XRLtazAk3arCYYEmVP5DFkraEGtvFmwzYTz63EtdwEtFM5jZpF372E6Jg7PSuHo9qBbbHh5xjGbjnurz",
  "key18": "5MxWyj1ejtXRdXLEXWJ8CXG9UzaATDC4N22LmrBxr4QtLSYmg2iBYKpYfyUwKZ7wKmkE1cFMewhZpYdcM1mEA3Qc",
  "key19": "5zpP5FuihcHhLa8doLMtHm4rRQ1kFyEZva4SwzpsMLcGSCjJNJhK4CwZMKFXFratro62D4oQWjyQXLMBSaExgEFF",
  "key20": "47GLg1Nj9RJ7chdFva9XU5AWgNah8KDX88r31JGYjFruM1cc3wzjHxkaLghEiFuTEjQEDwBRgNLrx3o7dbKgdbdY",
  "key21": "2GAJsyE3eD8mY43rUDisxaKxeuSuxHrzN1gpRgsPKxwtgvjPXasfB3igrnLo5e8REXJev7nRHNnQQofUEFfcSnF4",
  "key22": "46i83W6vwQ7uNJnTrSuJcLafrZDLwmFHapxrWaFK7ojdEHbFSbppV6uB5wTdh3w8DxoCt8CLPXjPuRJXjDs7kJNu",
  "key23": "5jB5ZX6qQJkZLCh8pTq2h1xntbfKMStaaNXuLnbVcS4A3obpaSdFrae9rPD6EjfSfJaGht9HMoRdHwynM3uKaYJk",
  "key24": "43eaAT7AfoVqKaQv2wB8eqhBttcENVMRkkqwDNq9CbujnGJBND3h5rveujD4usawfjU8oSyXY5cjWQzu5Ddzqaeh",
  "key25": "2yNb4yqFpkGdDJzeX6HNyCYTnxHa93rzhVzGQcVWvPhVAtUkbSv1zpk8C5aDkoX5TADxNXiTKw251uNgsfJ5wR2H",
  "key26": "4dhBXqaymefjmoHTfMrrce3rRv3unzwkeBwYJ4kYGEZfTfGV4ThgV8GYXZDR5wTyD8bfsMAoa2LfMi5ksiStvsQY",
  "key27": "5cQDU72v1zTrJmJF7cNNzJgj3eLNC3BmJVUFmZyQKJKbsf2DusGzCD2s3GRndk3xYxQ2QpXLxHyq4AmkpLKL86Eq",
  "key28": "2ukzxwxKv44NHrxSiahUjyf8LPcZHeBB9GfXh9kPWj54Cg72D8PuXsjF9r3LKC5suk4bMjm4663CMRV7DisH4gft",
  "key29": "3eab9sHoSiNubTMLVJMv3MCkUgjpfFHDxfStzwNeUarrQJ3njdn8vnbVp1E9jxdfdYdmCwiKAujsK7E73w6aHVY5",
  "key30": "3tDHtQrNcwUAUatnUcm8ZZBBse298GSGkP6SQ81aSyLBSWNiM6ixC1cZ8v3U5sNWBEjbt81fPZT6m3HGxyBRnnKB",
  "key31": "3wq975R5HLDg4rh9Lr97dUR7VZAerdEtafuqJDXbqVcs7brbV3CB8TuNRhKAek5PWrHGcmZ8V75N1RgUf9N7WM45",
  "key32": "ZF624ExuiVo81FnYbNe1XhbQwbwtSvE3q2a8AR3LLAXxVtXhzAP4XJuKzHCdeuswtbSNVRM1PnFCiayXk5FMcWi",
  "key33": "4FgLnVHuJazhhA2t7tLUQzZrcL79enkfzs2TZaHF4jpihrVdjLcPviAyQthXoBNUN9uX6Tyw9AwThbADCoJfWh7n",
  "key34": "P5TVKQmDcfaQUY3MkJqNEDLt3bF8tcEpTa7WzKA7Rtg1CPN8LqQbKDFqnqPTzzm12kJpgzVbKgSqBG8tafsYMuL",
  "key35": "61MP1NyfGWCveNMiyEDbabbyKL1SxUV7xFu6rzpNceN5MWuQnPTNxMEzyu5ttSo3YXkTdhBgnQvZUM3mNzSeRWM3",
  "key36": "3Wh6cB1uFRYatvwwuT775X5vLeqRybKJbnhqWqcFwBiFcvGNcfgryBCfkPw3gRHjfwCPM2B74fWUU6AQeah1h7qg",
  "key37": "42oqt1hANfR1F8JvayLy6MS44kJK9MQkprCBXA2M3QLSaF9X1Jtd1JY3rahVEoNXAXfJLPUToCKVe7RY8i5XeVX3",
  "key38": "3MHJwNASHaUyD1p7JWYpFDYHfcW7dsuMQ12T8H61pS6UBhCaEJEWA3qgg6f69YqE3DpzEebhzAXuxGbKGdhhfzcs",
  "key39": "4U2dVMy5GhAaS32PcQtguSbnMa1zdQoLrvhWetU4AhKKBXAdErZoqYQoRs21EbuDgBPdmv7ujPyJjDhsLtW6Tgzb",
  "key40": "TsiHicNy55SR9h4WEwc8Az4nR2xuuDfEnwioUQth44zhiLJgD1o4A78XesKWzBexnNWHa1iDcUfpWWgtcT5ASNU",
  "key41": "4wSntmJSUgGnaq9s2a9LNy1XyTE1M2zridNoMaJfmYkh5CUNUyJse6sXvCBVvNUBYz59yXUKojgsMZP8GGTp21cy",
  "key42": "WeKJzCFXVoLPQsBX9T5Eti3dAddcUn2LZXrzxY42z345hdEWuKWt6ewEtCFcGRVYNQnZzedvQgtXhvGAPERuCY2",
  "key43": "55ngjraJTRQgbR5QHzzkvmiCzH8Em6esTcq6KmuLRrGzthKojJTcFSPwoU3psXbPvWkEGXSeDN3GjR2dY1nBd8Z8"
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
