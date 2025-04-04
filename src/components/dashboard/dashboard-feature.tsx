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
    "3ADTmhMzbMZ99bzNBQWipFdX1ZAPZtawcRGxHmRCK9neXHTbXQd7U5EakwWk36e9uBadnW7zrQLCzBGe8oVogiL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1bFxvmXvb4q6PBECdpEtktqrTrXC2TYfYpNWQouR32o8gWxx9vyqWe33RkvUo1WzUK2HSeLqLwauGVHcEusHbJo",
  "key1": "49TjfFWndfiGcRDtrmDoFm98ebUvHK1rWGfFiRpY7rLbDbYvTDnSKY8V52hbVCP9nowhfTY1ZvUzWM2XDiovqhQr",
  "key2": "4UicM1CjjrbwCG3EWsLdtjWt4g6FNMo5iUHDwfNpBCcMjWWP6hqY784BunUypXXyL4Vs7qS1oHHjW8i8TwoN6ru3",
  "key3": "41QPD6BEKUpeuH3tR4Xs6njPeUirysZQdKRKLKZXodywyjBrbfZy5N6vVVXq3ajfJh85Jb7Gd2ZyyRpxDSigjjnd",
  "key4": "5iB68tsx5Qg47qcoYQ3LXxoSnM1tUVdWwuK5aohYsnCmkkiv4Jn9QUJZ65o1U2DYeagkNa74gu484vwgj3Sjsf2k",
  "key5": "5yNV7eXMAV5zApKqfTv8MWkCY29Uh9fWL7tWnGNCoXgorEV5BLXskUccqycBwAfcgfbjE4xRiK2NHqXytMXS1MzQ",
  "key6": "5JnGDuybssMvE35XsJyRXf351JCgNT5RSPvLSf87nh5CJn1x5gdswGnvTkHCWpdbd67Xp2BbghVVVfRLGTq44KbD",
  "key7": "5FYukSazfbKCF37CvzYUPhY2AdD8U5pemMBf7uS3sk97Mr4Eu7aLz6b5e75PKv6Y2XF6oCYG9SNiuY3VLrU4574o",
  "key8": "5xo4bdmzvzwt3HoS3uCraT6ednFZvp3TdXvq76ZSvVWsC3QeVEzxYm3uBmpaXeKarCHWf7Ar2yLix4RKGMoXksPc",
  "key9": "4gv3oqRgY4i42nB7q5q34mRKcW2p2xkkEv5p3KiK7QVSx8cNwzxHk2uEV8roBU2N9UiowsE3xE2sFL9aDGrcYg8n",
  "key10": "xznueEWsmp9RpyvHU661uWND4ufCSthqrHdLUdzYwZJ3eqL14kzs6HHsar8u7gJNddfm7gGadoGpTerHfWX5E6a",
  "key11": "4c63QJYuoFMGxrLDCdJ4P9Dt15hJ3z46xKKtiPgRyXcRa2L75RoQuzP1zeRXV363Kbkq5V8Sd8Ag6LUzQbj7iFg4",
  "key12": "62B8nbSeoq79GFWSXgeMC3JJ65FPimxoioZGRUX2kpvPsgWhM9aNch8zn937pdS1vCJZNW5Msb1exLtxjGPgdygQ",
  "key13": "3vG6iqh2UXkKXtBTCEXfJ3c4Hg5mUBwNEFaVzv8vPSertDSV7bh19yZjJ9ydQsStmjiPsocWoJjeSQnt26KLKeWM",
  "key14": "A92HpHBVdTeDNi5R4skoXAPWExFp2tzTvdv8v81x7aPazP4c5JmRWKDmwTbNYo8EmzYwqHxn6Bm294refoHJTgg",
  "key15": "JBRdXsbW6cGfuVQA5ioAwqVcFsRXX5WGfskW63KthgPMEiuygwE43pZAmcRzyqm34eofo1DgFVguUCF3F8EnqYR",
  "key16": "32bn7U691dKanBvSasmUZJQdrN7dAy1tTGENRbvRSqataqW8nmPAwwnS95VmrPWK7RJkzF1vXPT6RHJNZoukEaxo",
  "key17": "3RvqxuievA3JHLobvrdXAPNyg5RyNjxZ4vdDWz1bqSuAFa4Z4n9ooBgwgtpSQcwb9W3Lzb6gGDyHtsvapgwJz263",
  "key18": "DhvG9298MSieoKVPus7brQfTQXduAFd9eyobJQo1tA9ReheAfdzRbM1e1NGrvEGy2dVY84ZBQtTEEp5LxVEU5AA",
  "key19": "3WF7jewNosxf5smVk5zCac951zjdXMsRnURZTzfLnHiLFuU9Bf3pMXcWy7iGZ4ZxdTc8kiBbmzhT98Bv6b5j9vaS",
  "key20": "34BY7aGybZsVC9swLgTjxm4pivkHjDR5ZRAifvxre9EvxrR2nUbK1bN7dQPjmc6Ss11fhhySqwSRLYrYVtpTU8fY",
  "key21": "3FSW6mknZEyFb54bf1pWhGoo9uXxJw61QtXbgntzRK11HM8EHRdm6j2dkoi26FfPrQ5Sw6hPTcuqbLc1YKYB32j8",
  "key22": "2pGhLgEaJbUYL6ArCRxcz9ANtNyCrHjNv4YQcAj1fMHP4JrbcUHvPXevevG5DbtGW2G2YRGo1TKxUYcgfPqZSrsj",
  "key23": "489Hf5psJjp9A94Cd4FzaamSeZ55uHw9T3WjUGnXWbC6Pucg37oT4HfsabN4gfFYdjvAVTW65qa2rCxTUkpbgR5L",
  "key24": "5HKuUaeARdVyok1C2Ne37okXrvY4w73BtacYw3pRHyFwWP4n9rujQHdj9cM8xmXj7wYumcTd67meqoKTqPG5dMcq",
  "key25": "4sRYQXcvhaDe9wwg4JMcnnXqcNsamoWX8MkT9iddV4DuH1KNCzRYq7S9LQWrc7aMo1q7W3oqAM1PSy9zYQSa6Uqg",
  "key26": "5ifZD6geK22MvzRmXYfK2qFjcqS64KxBPDHzgvEP6SMFxwgNbxofA2r4VZ96uG2qCLjVxW8CGSPoQz5SGZQS8Hkj",
  "key27": "T7nqFiCMhuuEjnvNmhpSGPaAftGkgnY1rSkotV4uY4KJL7wUEvp5j9U8YY8Kbcrmhkm95tbxEjRtCs9tAkJD9qx",
  "key28": "41aiRUnMHikcAJp7PtyPKbvgBFdRurmGC9RjFA5GpWbh5DzvE3qRMZXLJSh8RV9VidwCWc48E7xvxiLoGsjMhG7U",
  "key29": "2pWwKo69C86FJBjt1snBT1Vcb3nW7asrjAPRf9TVMNLHgvCf1LxgUKdMJojgPnkVWphKEzBSRvETwsZtfk3oi3La",
  "key30": "d1ntaSrpPGgJwUneEhpBVe6dX9WrxbkRjNRc44ywTKqX8i5Um3wkjrMwiZd4AoV7HPXqREhL3USLMQkn3Y8Etfq",
  "key31": "4zNrVKGEhHVoMvXdHbLz7ihjsK3f8P44tbMZ24e71NGLDdo6Qq8YqRuJE4qcYUEsfucH6LMYkqfaJnUyhxgSezS2",
  "key32": "5zCgaFQMWkjorrcchXhapEuV12XQV43NTyrQWrZ7NPQrv11VshTWJBmu6hdVf4HaZwnuwRNqjqYFWaGe5JsdtaQa",
  "key33": "5sQanZxWQMigectoeoMJFSCt2XB9DHpVCn7jS9zA1v76ApY63LLJo3AFiQTorRJ427gj6YzxgXSqGosPVCfBEwG8",
  "key34": "3EAmqAb8DHLyEvkgdx9ETsVW7kWHNtSqyi6RXk61qufyhfqdzKCzoxVKVQ8AWKnuuCJ14wDWy2iTqMXwf7rLP897",
  "key35": "3Wc43w3NU5CTEyktrAb8SEcRrQrxaWWRjSdT7pgPwLrYdexa9SFg5hQ9E4Ua1KJEnya5dScYn7s2PDCBPYm2rwY2",
  "key36": "eWfdKVV5X8cPDZjsySGH2gWK5JMqDjDrqrXFgJvYZTNyf8RddNKN4mG5jBf2LvsEX6kSWUaLmR9S9EoeP2joQid",
  "key37": "5Lvynd4RJvTub3bJWgSKw1BxKwrQxTw9cLKsj58a22fWhKtan5DyJ9prgDJvywYhSuksH3689a8oKiMrh95pCwcX",
  "key38": "3cposLvNSKrMavwFM9SZYE6D52NEsCNeZWFFLLRWAKHkKgn6NjZ2nM8ku8FjLQJHgaSJSzBqvhg4MtLUzJqyTYpU",
  "key39": "31BQkiK7KnQzDQA1M9Wkk17eNGBhrAHVycASgnWGTmLmTkdzwuuj8Ub9kVSqTdE5UZ1Bd2B4mfGMXHt8ghn4LLAJ",
  "key40": "3ZXYnpUcDtRpKDU3x5tqFPFuvCY9NsZ17hJBWxSa7wS5U3jg51RumbBftuQoku1KQDsh6KLP2RZctDsNitZMr7wo"
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
