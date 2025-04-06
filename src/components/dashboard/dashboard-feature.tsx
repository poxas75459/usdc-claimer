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
    "4s35oGdGQyZx7Rfo8YDqG2iyjWEHDywPiG1VZBnPgtN4uTBiA2EhLBU5nfmt9s7PQQBEw5WxbKDosndgcMAohC6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CgLZRKXrRUzWYBSSPMzf7exRjmHpPcqoevGvpAbyvCzTj5JpRsK76d6k2BBxfgpDh9V7px427jUuGijQKWRPmvQ",
  "key1": "5aKLxwTxDAVfQuJn68KuUYugAm5TMD5c9LJWcbvNDSfUFcSWfGmFJtgnaGMAwzrtshvf77uDmJRxjJ64Yvpq1XUn",
  "key2": "4Gi1Z331nuhXviro3xQhG94mfSUNoBe75NQxnrmzncsyushttgFdfvFFeNdyFPZRjo5Cmomct3K2kxkkpR1n5EjJ",
  "key3": "2A93f5BD5puhhTzfBpcJL4tGDLNj2vGRUkixrWxMERHcsgSzAEvKisW3VTyAhyw2yYgiW52XReuz16Yr4hqGHRRJ",
  "key4": "21tZ8ih2PpxrVAoWjddGtboJ7ZEjTx76MP7G5TKuDH1u6CRbfdCJAU8mQ3MRiNnMMjY5Fgw2rQkfB4kTGKyCsbzm",
  "key5": "yBCcApivdH85Ci9iqmgp3aDJx56WJTfzg9A1BPqPvQdgZhrWTwgwXKyMDQzZMQawckwupP6m7VkFxYzU5Z2WE3H",
  "key6": "44kxWFGua46GooS89mhxkEkVW2aD7Ld3RY1qDHT384AN7SopATN6uZstY1tckpQnEqGrTv967zszEH8jdDQkKGhF",
  "key7": "38UVpNm6PsvugnkYSWZGgGyTUHa47pUbDZZTcnR6Fnn4ujwFy8fzfwNcF3Rxh7gXHJBBPhMa84C6MpQ5VFeBwT31",
  "key8": "2Yeeb8MJmr1RyDNdhz5nY76oBBUrUybwgm5zZSmLMfgb7T1WPDFcVkPJaeMMigAreYNk4rhrYMqZSyfUW2b2n1eP",
  "key9": "669eeZwAmcWoR5UKY8AREGpVYew5DK1hKfg5Nuw7rsrx74TGpRrGTaQ2NAP7SnhSqX3v2FYxoXpDqKcow1YRHy4A",
  "key10": "5bU21bvA2dJcey5dMyPykAHYzLn5PTJnoLSXiFF6A3xDDx7B3hX4Gc2DjGv8eYTC96vsjZhGDCqzH84wVvc7x6rP",
  "key11": "y8A1WnzXK7Sapz8dRK89824zmtN8hhsUfoPJND6pi1rUK51iT5v9na6eKfzsH56SpCpxJhfyg6EZgGZZ7A3uDJk",
  "key12": "pE7rRYRicD7Bfjvy1Ey1xPaSiDKt5tTDmPesyvqko9xYVJ9JycM8vSDn1uoPyyzTbR8baQVa4wrtYNvV5AvfcnW",
  "key13": "4tysim7rk9FG8Zxz3ZnPsMid8EBQU5Myu7poiAdFb2w4n4ifuYKpvBuWf7uTSwsL9svjFTTjBBigNTne5wDgdcJj",
  "key14": "2mL6sEdc4B5RVhsT9eVeF8QGa5UtkoaqMbQdw1KoLqWyRJxefPPSCfUmruw6KTRhp2ZtyMA3eN3jwdKHJJueDBic",
  "key15": "2umHpeJrBPJpHaxGtmcK7mQVGJ3yKCD1MskQ2SjzNZ9e2WFuPSwgrUafYxw5ZxLd5HabQRunDYfM6UDomdc1EF7H",
  "key16": "KzaSHPTS4FxYeFCp76sKveejRwYm8ovDfejyCr2x3KfMp4BygcQnLaKEL9Wyiyw2i4JXctCopV6VZjziqJv3L1E",
  "key17": "3EPQ5mmF1ua3rCwFDsz2SAHHqk943afUQbtBKDAf9AijS9bo8i81rWPzFGcwiiPiivKPWArjM5y95y3hd29Gzf8H",
  "key18": "4swazfgCrTpmg4Hk4Gxz8pK14zTLniwWewZEvvw1UpTQeoKrVoCz7hR9RuURE4WnED1MFkeUuF8MofarWtQynY6T",
  "key19": "5sWdCCyuH67Y2mZiJhT3N65HeqUsp8nip9knzYfY3GrYfWpoytKA5ThoBAkPhUxtbUQx216XY3XHxgJnr61tqjrK",
  "key20": "5iZTVyw9ULrDtzEGLWm4Bqo8YFxAhYEz8aSfnvQSER95ioiAjAwA5tqoVAufBXkbxGNjo7PiTmcRF4twzPsJErrH",
  "key21": "pE3dwWxRHPpDJwrLuNX3Ln8gjEwCtEpAscWyuY324kHTxAFz3419LeBxoSQpF6tpArZgSGWAoLoM8yxqxwZgd8Q",
  "key22": "2V8p31H2xB4edZR9NtkMTTH7M3NLWVgJk2CTDXpczxys3FWftSQmHY34gRmCbX3sGMi6QhrK3L8tFWx24K7DaSbN",
  "key23": "3sHrZ81jeWixrDNoibQTt1J2FtrAc2Tvwvw3gyugAc1i28QRdwPRJirk8Bt3R7avwCL2Kfxn6eN2xJP2qBwnWLJD",
  "key24": "4uDj1spuFJVoXbhZ4pJCB34tEB9srnN4SwXMNneALxB41Z11ndixQTdGh1Ymb1kNttsyipbch3DQTc6onMBzVfna",
  "key25": "54wVTcuCHNNHM2TFyEXyrN2vVNto5AaR9k9yRCU2KAjiCwuwChW1j2JaNVLmLWwkzp9tdP15U7boUPtJfoypme4",
  "key26": "2Av14hRgmUzAm2RpoFvF2xu5jWHMXy4R4g6iJQHupgNjCcYmV6RRw175ebamftbob1Ak7pRvscc16cfU1y4scKhz",
  "key27": "2zUjuXahRfBTgRiEDosxQ5BzuMRdiu38ZTMmQmddytWHEcLkUJPTzVe5bB4YPYBioX55H6tF5HddzAwucgTLFdBH",
  "key28": "4cSZNoAkbriKBvVpz5MspxsMtzHJBzxYmsJ4tjgcwvEDFAVn2NYBxHFh4tjjHgGYyHZuaRMe8YY3dGuC9gEsjVc8",
  "key29": "2gUSxLtn6Cfh45Y5ERPPcjt8hPdNCNEe1qAshDAfrDJpK4CH5GjZUDDWYSCZRgwH7uJk4etaAC1eadkSh4XKYZ3",
  "key30": "FtFLnmsG4mDh2n4un82mztZS2m68wdhqP4cYkcty1oAdsijFGoo2YCAqQMfGVk2BFENJpYv129BYibZTyUiu6gf",
  "key31": "486gDyUMXzoyhSpZHjYpYUJVftw3FHckk8p36nSynpcGxynz6rrtJ52RMm8i51WHxV7xM6cDapgTSUko2hEgdW1w",
  "key32": "3fQMH1GGMqjYiZwciKf5sLwE5yB7zYrnRtdLVSJtJYYt9TfK9vamjSrapBCapnCsRAoD6HXWMTcMP53mqvVDRwgW",
  "key33": "4ZrAmUVsmnMPHmx8PiVVWA3rMVmuyCTAQFgDa52zjbjXgZXzSgp5FeXpEStwyrHRwYBJQvxLSnKNCfgdTcNao8AG",
  "key34": "2YscPK4yufPayyjvFeJc9t7fnNqa5T3WanTAouTuaGBxyDBZ6pef2Zf5KrPfbbHrWZXc7aA5AnZuLfg6DN73dxpY",
  "key35": "5pxAVDLLRFRtYWkdefDRPkegCjXcHwDK2Sxuqn6YUuTS2RRW9NAZaVY1kzLMrgAggjezddSKcrwzUFW8gdDyuxiK",
  "key36": "5TAmosHukxumonFecNanwqYX1Mxc6XrVjAwRtkvZMFHJYNExRReyGtTkb4CaQFW4NVYtK5sb9y8Q5xGU1NjYnmtT",
  "key37": "38DeLebZtrQjQGNjRM1QQVZofyenYsR7eQ57dCrvnbaN29qowxiJKumZjqtTGPSsCNgrDjzn9WVRZBWXm8VtTjNs",
  "key38": "viZ6zKcLhauboLBP41yDyLiGWpCqHL8jVobWZ7h1s8TC4BWkWsdi1J5QyYbTiP6ZTcw3m6CTpuKrnwPQgEG1p4q",
  "key39": "37v6YS9qmGu95p3yDWicdfan2i7diXcC3Pdgmp6AoNnYDX7ySTYmdp7gJ3WbZKwp6DQfbgc7GARvXGJksJMpVwH8",
  "key40": "4anbFiWT9RWzHDqC5GTriLE1DVWwvCsuUXdLtpC9rS4Zgk9Rs6eAYjUmeHobpwS34MAX8x72TySHxMBEAHYNUfmq",
  "key41": "2xhHNu8kBjfSkjWjKmmefXVR4aeYy5Tc61ytdN1VJdXa9Q2f6dwZyh9uRN7NZxZ7TpziXzPpQRzLnLtgXWZMk2QB",
  "key42": "2BNiFfqXfWZszs4M3RjzPGg1jaHFWWQGZ7RiiF6JJd8irrGWbqBqnqron2VckL33Bm91d2pogi2Lzq4cwUn6uu4S"
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
