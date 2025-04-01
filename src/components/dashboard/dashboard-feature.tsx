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
    "5jk4zWkmS759kydGyJhVFxPqg9fSVM1UsC274RS1kSSswGqnyRj61jDm65zsu42cS6ePoNLf6UoCPbtmMVAV2Lup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62npvH78s6JPTKkUr9nka4cdvppUzoxqeUvJcZw9fzBsDa4cmUnLovwedfZHdo2Rk7HwYvhwNXPLVPqSZvWQMwgf",
  "key1": "5iQoPghkukhpAApb7mutDHXdGeD3CH321QXhvLk6vyi6J4AsojRLgQDwqmjwjgbsrjcyt8ykN8J93ARg1QZBedUv",
  "key2": "4oUR8X3fQ5UkgwaZebfmUg6vNGTwBERibs6MwswgtUXy4hHMpExNGGCMLtbkoijupjKFzTnpcH24Go9Y32H95efh",
  "key3": "3eYtkuFnJC7hU3K1tjvw345eu8TbvBLPDivhMkY7QC7RUhZujYAzvd9bZcfrPPHNMgytRtyPa5WB7h2UhVUUQ1Lf",
  "key4": "5sn3LMnwwcB5gAjjLwtymGbYFBf6djSBT4j5tCTm9JT26E6XPSMotXnEMDfQrFEUPaJjbx7ejvf8cpUgSuCMqKKf",
  "key5": "3M7PLAJori3Z7BCcCxKCioGz8DcDL1gJvptAsTcEJrr2ntDs7YPNvumScAULjjgjpjmJu1WC7tN37RmX1Wo32uUH",
  "key6": "4a3MmASb4UntiVwYAHudGPsrut6MJ8Rw4LHXM5Zq3jYqHbereX85Drv7dWNRfRNWFZUK9HfPR7gcMJymSCxu59Et",
  "key7": "5nGrg6HgF9LGmoWfQCvHBXDDiqfHYjmF1d3a3LpSSrbXzd4RvdVJdbMkSD7TGJCfRskiVGzki7vDY4DWrPCxScKj",
  "key8": "2omd7WJpDGcdDtKHCxvFVJeBf6dTSaPJPkSJy8FQ2fbXHdnPZRRTg1yb7XnNnwrCbTU3oXcDPhFHbRup4EeHqiHY",
  "key9": "4SMQBdtBYMkhwzkE86VCF4Fo78Je7tXiMozFj8ctJv1WzEtGYm3rNYgg19CYwkdn59P2P2VpghKb2WmuLJGJUZGh",
  "key10": "ST4EL3nUvvgKvDTtQMrfm3LyGcPTAt986HbFd3ZnnXpFfXttoveQfByn8miUFZaDY7ootX6EWav1hZHPy4u2LnD",
  "key11": "3cMZEMFN8YGSaKHT7EPxRk6bFHjDj4uUb3QmrdobL35WuEeACpJ7QANMyT1Fi73USFaKu8jhTaezrpxnmwyqz2FD",
  "key12": "xsbnhRBXk3kWpLRcKjUbAz3j5AkLSSkonNpDiq9X16TzHQBYtMxv5hmrMWv1sQb9ZDqhLUYf9n1bjT6iEX4TwG7",
  "key13": "CDwYHP22PaJh8QUVWx8UjEBTsqg7nhnksnk8fREH99bAbhUmKRkXLtUxGBeEN6QR4Z92BJnohyEJEUuYB4K8aGj",
  "key14": "2Ks9jGQPJK1ajKtktfQbV7wgHwZvrQu4JAtiWt1ygHSpCmeAggsLfrZ7jffGa932KvnmQxG9hL83N7T4s3kba4vJ",
  "key15": "2vhuz69z3N4Qqycu91uowqN8sEUr1DbP2JtFHnNasF3XAxrBwhScnNwukui99oXWRmuBPhsGPwBDqofQD6wY2dyB",
  "key16": "2nKWxZcqW2HgCmrmS9TWhBbG7sNTa1Xvbz8YNnxnBf8UWcQN1Ym8BDNxEXX9ujbnY9Q3UThzUnTdkoYser4q6ipX",
  "key17": "66bFhyMxUbamVtdvu4smGVbfDhGKSWKzD9hDtLuvDRGMxZq8zcwPpM6HovWfSkQF9mPM2352Ziz2tjak89WaomXP",
  "key18": "37tb8oZTwU2rZWjkUAJLUd5y8jSaXgjNP2xkazmbGsHwYRMiUoNRs1oVvxs1qHWdQ2HxF1BkyuiB1SZsgZ6Pwy5",
  "key19": "4UGABMVquaCwtdtGNebbyQm6mKNc1uifN6d42wSJEEEQTrjzusHzXUb2oPWWXnTKABMDwRFJLmgKvTW4MwJK7Vjh",
  "key20": "3aaiEaWiidQP9YDnz7DyrivFEeEmDa7JLEq8MeJpoN1H61xZvcfJaTS6XxqqZjCkU2R8caowp6cEY1mNffHfReCU",
  "key21": "2Jehgu24fdz3xHB5WarPsUS3nKReTXbf7auvi6bSEAFeJ6hrkFFYwh4XVbMK2dSRQP81wKLbTPvDG4Fn3AkX1WmX",
  "key22": "5oKC11dkKZ9UJ3HkyeYiQPH4P6PdEbaA8iiYGrHxwAwx7QnGNhqPMBAPNKK7eJAfXdfCebeRZHEeKoqBsiCP1bB6",
  "key23": "3B8ciNjgQS8BH63MbyCXbzMzqk3QraP9CrfQBrbjEmBUNp9nmendhkPoLy5FR2DXoRNXSe5XYowCvPg5FmCTdtWa",
  "key24": "3ZwcEjiJetU7EVNyHLjrE9aQs8gPKEMFKmC7Sv3FxE7U2GJhGFSbRZGHGrdAMG9eF7YWupsPwG8z2Q6i1zw6MJSK",
  "key25": "4R2VnHrvhovZm2SHvSumeBqiAnd7Pq9hie9YTtNUApQWg9zPxjnLo3YMi4rmWXbdieJQSpADJTQTVWpidPc9oeRU",
  "key26": "44DoZ9HEUQjxphhXUhuzYix3ADjdHYqtSPAtWQQBcGULqCXSEe7gS7XeysnUFbbVUwZ1QPmumxCMrs26bV739eX7",
  "key27": "hq4VGxoJMinTmatiNcPcK1kZ7zf4jDGxEt4VQYxU1tgeACYv8B9A2coc9Ds2JiBbCtS4VVemVJgX3uo5LCmBJXK",
  "key28": "2egmeBc8V37yPHVZuwTuwX9LyMDwE8kqy8H1bMcc4c1bmDh6rmywatBywXNZ8XP5pLzyYbMs3PGM3bBjAFbvVRwY",
  "key29": "21BEUB3TknFqgxJa8ECJCuSUKbbCEyDmYwn6hs1zSaQSzy4Q37Q1ni8rMH8Nt4F51kD2C9igy7pu384QyqRmXEwm",
  "key30": "4KRh4iSe8qnG8Tprv68phrYCZYUkd9h2uk9FVyBZyRGBqmifw6ChZnpNxu4mB9HzbxhRKsTYQtoY3SSEhfhzP1eT",
  "key31": "2B6XTwBpztsHu6upXYjgXDvpJXNtYeeZ42kiX3xQMiS2qHYRTHStwvwiTEFr7DjxK1AW6XKnvMU9xz7qch96aFXu",
  "key32": "54J6hnP6wJwyf4PHxhU7qZHwJ8SDiVoL1Q5BWqUNGhwyp7kPTobGbnrKsV8XeUxRDoHJkcT1RT1u2xh2Fz1YWoys",
  "key33": "3FNmYpwarq6SUfzJBhHVk3atLuZ1AMH8rDq6idNNB4cW85At9jrVSYRAN52Y444wqqcroy2GGsaSVPS3MAZpZ7Eu"
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
