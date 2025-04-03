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
    "2tZsZckbZnH3e8XJ9mBLWqZ8tx9fKWWTFuB92SgFFSSLp4zxSNLgpM98mzCMg5HiX7wbGWVLcpGCuhBtWdK6xuGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ju9EeSZM8j9BAiTSNpoPJbyruFLn78Ao2pmZ4e5zKuyAqRqcuBaTguAoUR4G6YpTGZfnU3J8FkLJT2pKVUjnVnk",
  "key1": "4utxoL2vBWxJ36mMZtSa7dRue9hGVnpZaHtHprDDrYYtgQ4Dm7AVSDRQAQjnEKoQHDPqBmJu1fZpwKTAFGon5mp1",
  "key2": "jQ6YAM5Lieb5D5jgF5YtP9m2FTnx91BgA7SkwbzkXqshSNUhv6Ysy9ioTWgukGiXTVeLx5T4dm1gTRstGte9Zq7",
  "key3": "2nwr7xj51QhULXuVqZCKMoZrbkqaWLxqRyPQa8ewfCEJPTEFEk3FFgAUos61AyX94SX13H91hEVUWB2U4kYStPrg",
  "key4": "4EYQrCQ5DEzcAsjQ2tADoqNc8f7P9Qm5BHbtjRiBWAx7w2VrcjoaKEDFPKWtbUJG9ecVo1fZfrz2ad91gfVZS1Xx",
  "key5": "4mdcPChqeraH2qfuqmqnGNnrGRLvMp5xZRxiL7N9VujvWXhSvmpvWjCbVEgWZoBkfTzAm4HTe7U4icWKrfpWieRw",
  "key6": "66JPURd6wtBCWa5cXCeCe1ehnduv6fkMyoLY6f8BrVW9nEbJSfvbhABvA9oqNnvwDoTMSqZpQJqjrcZS2M1BWakw",
  "key7": "2HVaf2GLdX599qqZw9e54dFmhCwLqsUqVdTvRFJ4mNmzvWZQJExXro6jkhToS466CZoDLBKmcBuMMikNg1KXGpA8",
  "key8": "5pJbLFVnm4SmGk4VqCuYs3mAJkt9qT6yHn7pryCPAqThNNKs7TRnu27UWU9ZVr8B8BDCounyTeUAvpeKQzY5CEM3",
  "key9": "6uQrHaXV3MiBDz5miDEjRwqVxGEov9C1yUDwAsb3WEE2Zajfn3mnyUqEPKZ96nftpjWudnFne6dqcSyJ3ehJPVT",
  "key10": "K57DaWPj3K19TkVLTusXtY8j86AD1M5BquNJRmrN2R2KrmuyvvjYX5Zt3vvnvUHd2sGRm9DSh4EE8JXwvaTXyMT",
  "key11": "4F2nE2WPQkboRfPXXVoKjwf7CR3ipiw9QxZVHaQS9WFyPZA1hM463Pqhriu7j7QEu7cVhwsNZtT6vVFsKdEV2Du6",
  "key12": "4us3x9A71gprxw1ucCWLyAbYPgkPGR9cdF7CPMU9Kd8a3YXrWi8mFFa8qzfA1cYJsWSQX4hi7pM1aNonaruSM1xW",
  "key13": "6C6WaSDov9U86bi6xNq8WNxy2J7wdQxBfEcucrFh3PgG9zjYhtgq4vZ8H6jsBSKm5eHBTD1hrchBdPn9uZecdhZ",
  "key14": "3XAHZ9hX8qksCnpVtQQE29DzdGTL5emZ4ThVHQ7zvpiWvcUV7BNLbUpz1deipMmMuzHRm4GyaVchonA9FCGQEpot",
  "key15": "2XDsuMZVJyvuvvy4JwuUtdKjZwsMooz1REvKkQV8CtEqa6nfLnbrj2Lm1NrvgKBnhhb78JnP41wFNzj4LeERYJwq",
  "key16": "4i3Kcq9X4JTrAkMef4svb7BZwLwQbTw11NTLusHXhQHC5ZfRMFXqysiT1Ynti6TvngxrnixofuBiiTCgjzPnmrwx",
  "key17": "3o4rnVoJBT5NXFNrmyq98vxqfDxL9bhFTAZCtj74QKPbVYuSo8H38HgaKABzXHx83VBiSmKGtKymDSoiA2n5HNyj",
  "key18": "4wtLpfiQGZNjwUXabDamYCcKqAXF9dNGBSRcG7AehHsPpLTs4Vr1Vni9R7LfxSXXJKNiPfUjkSYzQuLCJG29FWr2",
  "key19": "4YmJSJQtaU6J38Stgm1XJcJEkJYA4beTJt1wnS1QYcZ9je234fHgTbfX8hRDgZopXoW3K1Wt88ykgFuwToHafWS5",
  "key20": "627u9CNFEuRzGo1x2JuGp4mMjkg5ybNAz2PNVuDsSKGLiGAGFT5yGwEw8dG5dBuarzqp5NHNpGfjtJkgGynzXaWj",
  "key21": "4L1Teo1ioh2wxmXh6m9bjRqB9DyFsSprdFUpdBMSFDXS4uh4o3brNxLkvvmrgizri8JNBamsXGTAi8wzeRjuiQeQ",
  "key22": "5afkRcrhSRvzenkVUFkhMDNTBWsh3ayfYkNdkNmCANCHD4KbkmAK55u5VYojXuZe8fJ4wCxBvn7yYpcaxp2Ejyfr",
  "key23": "5EaGmZbkoCcF91CemC4P3e9fM6NVKCrmKePhcrMuhJktSoarBJSzUUSqKkXyMJmEVxxpm2egv2vxCUdiKFci6cG2",
  "key24": "2YifojhAXc5PYRndEoyvbZsKWBnVcBThSrjCR9LaMdiC5eioPJhm12QJyEJNSsaVPcgqRWXkyN11BXbhhLkxdnfm",
  "key25": "2MN5KiWAMzzp8mKd7r9bFSgd6vw3uuFVHdoANWdUjBiWNRxkknGcyX1fRJmkWKBVY8HCvBS8YpXYsngWuYm3vaXd",
  "key26": "3nwnLRMKwnbMesk9siU3QqjXnScyfsnrT7MyNjzxvUoX45h2E7SiSYFsyhcVXRduQrwSnqT3sK4u1tVrpyUQoR52",
  "key27": "4tr1duo6xz3tquSjwaFRCG18x6Lf6JBDQGR6Aa1PvjcPUBDcBDua7U3R3uChjcVsFMWWshA5BbLy4C5BjBv8PgE6",
  "key28": "3AwmzWzbyYekfnC18pnnqK2guwTFRtDhDixZformwWfEGdZZmbxome6psjLCLLmwfKsFYeGe3mqiN8kA3z3KhYCh",
  "key29": "2vCxGF249cB99AwRpV2ZshHGi1CzN2GaoGMFVA4jf9JszpDeCvAqgaMZmsj4cu6wJ2KpJ2c8mpGjMY2KPTeKvaNw",
  "key30": "2DoMCA99yHCKNj6K4dm1SyvJpDCh97vYNastMLAeZD7BP7bDup9TwvjQZL4hRTthFgm4Nw7rbZTsVvqWrm4Dio9K",
  "key31": "3VTdS1sYnG4iHYoza4n7jP9EbKPm415wNgF1J4WqzxaYbAaAzZhmqKsC2yTQPCxbxA3yqqYnxcT55SSrLMXnWTLR",
  "key32": "T2Zo6jorHgQQGWKDmQ8Cvy3u68KX4xBF8Nk94Ca4LJpogmPoSJzm5Dncc4ufL8RZ2BxvVbwmPk1MX7ZeApe6V8D",
  "key33": "4hNtgvdtzQLgf56RKwQomgzNLhnyKADZaUJ9fR7gpS32yriRccwnvPF2eVAY7Dp5vBoBSLzt82NhdgKJJNmSfKsB",
  "key34": "fZFw7Q1uhdUc2Z755J4tgy89ZepACzYsgf7c2kqbuNfCZ1ZGuUkQcyPp7L4vek7pAh5VnacaVBTH6XHXdDuUkYx",
  "key35": "5gaFKQ3xaExFfFk8P6Qq5zKWdCvEfstFzkXtAt1Ccnrx6cpLchCwuqK7VWyGWmPUF8buJXiD17H55uW4EP7r3LNM",
  "key36": "vRDTc8QN2b4AwEcwunSTpCafRXboKtACd96pG6ZPawV3DfkJ256f8KS3RJmPQFpUeXAb3BgrRzFgR6xrVP31JQV",
  "key37": "28Pj9MRtmNnmJojCi17jHLeD5gpNuHpBVa61wLf9gRhtum4Zo5nsMgu3uACEcGNJ8wE4fxczpqTTUJYJc1fYJdab",
  "key38": "G3197oabj9xJXmS3xeDLGT2sLvX4fkNdLDwRWZnsr4uiX6p3TnxPHXZHc69vUyravd43obskJnbk9DgFgZDuXKN",
  "key39": "2sqssHfyEX69H3ZNLBGYd9gZ6vrBjqaUGRQnPHZ5k1F8m1rBQRKfpXYPFRQ3FjeZNEKSRrWiJgozdMH65ao23aWv",
  "key40": "33PKNpjmZKoh6muXFJxLCArpe17Y1h6DdwodHU9XwzuDZdNQ6FDscpGjAfM9hJtkUJZK1gCMzJdbk5eFLNheM62k",
  "key41": "4LAocGZ31s8XqBUFEXthS5osBTvCsd1sNtER34sXGij6TGbR9zpaDqkvHFFMjmd6Wjy31v7ECuPbdc9NZbgirbUt"
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
