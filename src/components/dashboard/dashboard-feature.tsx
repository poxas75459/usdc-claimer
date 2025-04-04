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
    "3HPMBiJB6AFQMxtaPYUePj74aJbZUNUkBFovENf91o9aohcHWPfgKbRn4uupcwZp8fFLHNTc5P6fPZRQvw3UQWs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qHkBewoeDhG8UacPoLDan7Hco48p5huLkcbwcbYeubomG6wH1hy6Wpv19oPgh5JVpDmzr8PKxvYmafLatrtzaiL",
  "key1": "2aURoYzdQbr8mVpnNmoNUhkw8Pr4XrQrFrysrYR1hCKbEufbZFT6ftxyySEHxpJBCN8q4gbo8BGNxzCcabULmKwX",
  "key2": "3E2HotVYUaqzwfGMm3Grwd9KPRLAkfKccRzEhieziq9okWF51gyRLgDvyKCDRxYNZgrZsVogg912VNERJG9zQw7g",
  "key3": "4hNUWaauQodLZWDPgCj8W6tjFjH7p7ywgzfUrvifjBjyBikRd5ciks3tAA99fDMQGV6aQZsgk7SmDFfmQbvWi6Uy",
  "key4": "YMrmwpqyb3wVtbNmi6beSSrvUQNGsuJ8N7Bqb7gvo8h9J2Jr8TobBzxShvP6N7FzQDvB7cH7vBioyW7gCxtNrsu",
  "key5": "25QZQXLemvHQboZtAMpRSKL4spLiZWN3Kt5p8p6Gg38GMEgUhiJ1PPiwB87rjooEeRSvhnoVWMi7C9QKywAATq29",
  "key6": "4VFH5KvGUzurjq1YrScJKasWnCeU86xW54LFVAVYv9EcfBph4RYgoLwxmD2xxKZzyju1iUakvSaVT14ZZAPjrUVW",
  "key7": "2HMk2qoeRtniSSQ56RpArDzggF1Qb1qfuacHpU6KJpCsbCaYDSGXWJn2JhfCKNuQhVBjrJU78FtTqhAMJBnGvnPC",
  "key8": "62c1CLoj6sDN4aXbfEzvL1nLzVgZpVPh2v4tUxYvxJBNmCLRsSSrFgB4idi6eh6a55X7expjuuMAQ5UYA4qAeH2V",
  "key9": "5DV8p3yLhzsHARLmfQGYWPtj1C7UD2qK8dMLgHzCyEQTZMkbdyU2CGXsHypAc9X8tLsyu6a3hdFJLdv3qsitXH79",
  "key10": "8XYVMKQyiY5QMfxu3wDbFAzsPQHvhvvgfvA2C6CFRbwJRwCaV8wWVbdTsLskSMKb3G2DZuSWNnPtHCTfJfJndzF",
  "key11": "47XL2pXs83tdTZeG6fVK2214SzdqggQZtKeyyd9SxQegZdEDEsQ1hqiHHDmWSjSuv34PrNP45VN3Y1jrzExt2Krq",
  "key12": "4yL16iYNUUkEVYv5rLGCDq9PRkXnXJFs3iyTbP2NFgFKcgN4YP2qfATQnmvPRfh82HUNN42QeH6h4dzqeKr6gbEE",
  "key13": "5xRDsuzSnQ4AHJV5piPVuUPDjBXC4LnUeKBnLtjqLgPSLYMxzPetKM5ieDfNUudpM4A23zkf96ZfEVKZt1pDvFbm",
  "key14": "Hphr5pgnq9AvAHNVD9PosoAAfAC24ETA9H1zEZjPcLhQyrMBrohX1csLjuVHt4TJVaSj9ymQ2ToHcRimvaoB67T",
  "key15": "65so4yKz4Tw6FgG8j9ENtZXDbVsF9ZauHb1NXNzrPnw7BugWTjBd2Fi4hCK8d1ZWnXtTLyGENyCYsx1KAmHXQ6W9",
  "key16": "4npMaYyLtzwMSYMbVeFib3ubgSLZjxg65Zq2RSjsP3Yp9PreTwnK1h4tS9cWr1vzW73cWnBb66VLMYymnK5TDrf1",
  "key17": "4ydoxe1KbJhrcxCRCWzegMxX3CFWj1PjCK7F753rCjCECSWdahSS2wDh9emY8SsaPcBxjRGowpxA5HTrVgV5T9mv",
  "key18": "3ehWtEMTj5yrVgEEjFLGZPijazpdJ4N9otcYgnG7q9h1sw27V9oXVjd8RktyTC941ZxsN3vdxS3hRCikFUV3M65e",
  "key19": "XkSkUUuBk1rY4o9CShUB9eG5evCU3TN6k2DVJNxq3tEiuB5LPj3z2bPBjFKTRy6KQjtvUHqXsNvweDJzGA79nKN",
  "key20": "4kz3ajUhqgydrkyFFtdy6QpBKZsCK4YzCQen9ytBNYvDrZHdnpTZ9BbiLbgqfFXMUPewNvq1hcGrMQPK7ZUg3a4w",
  "key21": "3FtsKa69iMF7X79FV9rYog8A3Qm31Kk7w53V8Dnmh4stYEhJc6XxySAj5NyHRQMbjN6rYQWzvP5hfXpt9HZSPh7V",
  "key22": "MiGM93gxNfLfnyYcE7SdFaMS7JKikWSvPfGXHbiR7hK2C4QUKchA5LSmTCmyiptQTpmhd1pUP8hSLJmTHwpLueh",
  "key23": "24FxtJmo2BshDAbFvBwrw55XamspvVVvJBFc6DaCkFTqb51nCxkM1n1dvvo9Z1caGnRi6qtmUXAAPXDK7t2i74gu",
  "key24": "L1tAHvcnqWRbxXDDexEPQYioZYxzpEwsaQcVBXgkK84cuAtLiH8cR9eUmrEfSE9vCt6JN8SWhJTXbjvzTL8DXtM",
  "key25": "FZ7FEcnpraQsjuN45bUx2bBzkmDCCpcLmVY6DRdu8JeUkeGTXE2XQjsXp24vPcYD2XiToPhG6yiE5VFQTTmvMDZ",
  "key26": "4QrthiiBZTw2byf1wJBmDoK59srDiRj63hShkQyWpZZ188Bia9tdnDrKCudwPrhKs7nbYNoT4bXGd1bBdRwmEZf4",
  "key27": "24vueukMCQkWocssnViEYBeVcpajUbAoyFVbC73njD5sy1WHRaqt6pCvwpvsP49Wn3c45C7jf819xGCtNskkNisR",
  "key28": "35rN1SDa6NES8tkpjywEg16h1hGLRedStRg1HT4Z7bjg8WCqfF4SKZMTpop9toMfaHdvHnMZncXgHiVtJsAQMvzs",
  "key29": "51JVEUssQkyMctvwwuYg48QUwx9V4w3BpnqaVohuyByy9XwsdRCE9vSrXobfur992ZLGWDHeSZ34excDMX6NXGin",
  "key30": "3yQBZTA6QycvQ4PQ25fBZPbAnMU7XyLZy7LzYUa9n55Y7qpkTJTXYVa9SvbKHTSPAJph3oPg6zrEcaf3SnvBniyP",
  "key31": "3CLJUQ9ict9MHnNnMfYjLXYc8KNLbHG8nQYBeao6CtPsyS8SHi4nMVMV7KkNYjJrwBMvDTEyMoUKc19wuMguVw5d",
  "key32": "m8x98Ug3twnGN9AK5TQNXAww51YmDXzUPvau6QpG9iowhB7aMTBhYTghMhMfkZvudG5LAd8rfaStsrm6WagU2Ta",
  "key33": "28odBdYERHPB9DfF7NrH9k1WdQsM3Qxh8ygjEEqW9iXQnn3kxL5ckai8asvdNwHvZdkenJQW5Hi7ARti1iFAexiX",
  "key34": "3eHAwmojMpTXv9qzb3w2MZ4cBrd4niMKosqam6D8QAjuoz52iieF8NPFYSWxy152j52nYFQjqrTzpfFWJLoXmWgp",
  "key35": "3K4JNDhgZHZvaodyy3VDhntZxmCzwT72AfNppkiHJ3GJZtwXsoJSTWVNGbeuuEJYD6ThxjA8U1TEKcekMd3nxtRA",
  "key36": "2kkwAfDELQ1Sc8fCK2urznbcdRbvrTGjJSAmjTJVGCSCZkNwrxHaNfRZCQUqD7JLhioAd2BawuXAKk3XRLRrrJqJ",
  "key37": "4D7iF9egPDnCwR4C4se1bxnGUsDrg5L4Bdgw6yqo46fKa56mXn8wEX1SBnXt82b8wy1v1RiQgqbvWeLucZdGAscV",
  "key38": "4bNr97yVSY4xKSzAq6SBByTnEqW1djv6HXU9EgDGf4KdJHm79NgxnoF8QoWGq1kDLUCqvWLwenrqfYztmgT11Hct",
  "key39": "mSnog9U9TaEuthmQzNoYQCEtYoi1feRFhPhKPmmUfsUE4wwDk5VyWkGXJ4QqcryYLH1LJDbw7ZqytQv3y4cgUDq",
  "key40": "4Qkr7QopiUuS7pHsca34ykLJuhhMMS2MDMJDorM5FSeLRpd9DGcw4bK8d6MJ5yKuwdiLHFrGaFEJynHwmAkTPQoF",
  "key41": "FYYXigSq1DsFZGWcXTVkYtjyowdBNJDWazLbMSeQWEcfS7onPPdsLtd5At51WBZdLvGtroNWrE5hbeEwAs2LfUg",
  "key42": "fqrQeQ1oCDKdzQQAQY4fbDFXoHbVhEcnKhdHPYXkzt2p13jU5ieHZfs339RvkQowpWsAGvEgChTTGq6qso3u5yJ",
  "key43": "2G6VVSMxfb5LJGcDbEYFuvPVHXSX46ePDXth2oN2jr8KvT4Mmw1zAZJU2BQfCqdSvifPiL6A6Ee8bniGaJ5hftth",
  "key44": "2DRWvoms464TtEAoi4AQZCszB5rqSQ3B3US8nBBxRdEmN7SEykPG4T7riXAy3285ctJoJ6nycEedJkAb8dnmu41K",
  "key45": "2BMnGPGDsXYXrZSNVLLrie7ahuZLcACTQw8aNYK7Wr2sEhejaKh65U92ia7KpSr34tawyHRa8Y6n9iyVv5XFUfrt"
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
