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
    "4gYey62hqFoeniDjxjGA4dagL6K7by6BQpcifTzaJtjTBNmmgJiTNvavA9ew1fKNh3arnYzxFxFVV85Vv5U7sNJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55gSk92BHPvLJqjC2yhB9wVGmhRFrKcktRoriR4Bb1EsDwFrCdYuGRyEXAUskGJyUKq2TvMNpDU6S1JqBJCuocmV",
  "key1": "gq2gkDbQg37g81EFrYW8ruCUuBRTkxLZFYdvfYEBpcZ9v5YLsBFvpqXGP8QUgLeF2RoHZYmht9HCCbakZ9F98nL",
  "key2": "4JeiRbnzGg9LK8ppzjPJ34127k3CUTuzJDFacmGS8o4fLDtr8rQCUiyV8JCNBsqD7vLrCMXxU79UvJvqVSTXpbB9",
  "key3": "4K8t1vtP6fTAoKNLKMQjtJPTDQJcyAL4C8msTXHUpa9Jx8STM3fJuB6jPxP4JFCLpGHt3B2bWZh63MDjK8d97rKn",
  "key4": "4PMMGe9vnVqHZU8FZ8uiMnCxLCcfowA6pcfKxfdLyuJepVxSDGLSp9GCpmxqYXtAxKikkk5MNieWQrBUY5nP2Pvm",
  "key5": "t2k3NzTEF56Ea8Zp2h58gAD2QSZ1LbbrN2b4hN37EEimwWF8hxE7rJA189xGbtVSQkRGEESkTW325MvuQd6Z15m",
  "key6": "733f1Js5XJ1JiREYg36E2DQKtjokiojboPWt8JCT245fyG4jbx7KWNemxVWFYJRtct3YkwSS8xaypZhTuBBm5aM",
  "key7": "3Wf8x2QwvR5b17dcQ9tYxLWdAnwmua5SJF1XvZiPbEH1W85kS39Dtk3WQdEbsAjuG5BRphDDDG8ZaFDsPkbTXoUX",
  "key8": "57AyhiZGcSpc3R4G9KaE8DVihPPr72zfTAQGugbwXHWyGWci4vQttaFHTGR78nz6DL7oZo5BNirEG2JU4N2QQXRB",
  "key9": "466BvtZiFejyAW2BrBTMTzH24nbbu7wABjjRxCsew7KGXu2XjfPPHhyDKMNvLFvxEM6NAvg5Ne9gx5EdBPiKwhBD",
  "key10": "qXarG5zHEjAvbFGDyUDocihPSZ7SiFiaTtuziu7NCxE9SEL5AMjxeS3YSdW7oEi2pfdrEoERLFNVbw1bhABXdg5",
  "key11": "31aMSs66tF1zE2hR6zWaLpPtq59iyDQ8763EH2MuuPDTQi9wsH3NEeY8Hw8jzEYSD2jqaHvUro6NZd3VpDXceyqt",
  "key12": "45i9tu2NaAWzvw8x4dzQRKSH7DMy718AUD9hMKCfVqhsSXXCq5goCAQxncCESTw15FmbcohLZCsKDqZ9HbUaMW7y",
  "key13": "3besNtSMXF1P1NoU1WUUmtbwiqi4sij7g2XPMxg3QwDRSvRSbpNxkGjSrRdC7iSE9UbQoHMwDGPxBBwsVJ4p2Vo9",
  "key14": "34jnHFb3uK2XAHYrpYnkaWUwWXjrdeEir2ikv58mNSpPnwX4DjNjPR6Hs2Msy2iNuaVByiczXRk5vceEMwZ2q1x5",
  "key15": "jDCRRgGU76Ptk8QC4zSvr9DnnWAYNaKZpau9MLwj2wQb1W9omQQi53T9jcvSPFepDJA4FXk6B6vu5VgzS5YHimX",
  "key16": "ZVhkSYB4gGzNkd1bGturM3EZmGzFCd1WraB7jooQo4Kd6ZhAuSWNAFqK9J5TeDZ23V2BiG3faKRaNy84w3LE41h",
  "key17": "5PiQg7wfoJbPCXiK39FCvdjejjMeNBKoe2ptUH6dXiYyHUoHCndfnUa1a2Tn23xW7Qcw3ycMsbKDPv67GDGqHQgS",
  "key18": "2NKuzhjGEuhnyFAiVfcuvWdKxnP71GRHgDZkfBY3ryQBVVEyQ6yZwMzQ68qys2poNvWwidh6EPvfuiGmiRp3v9Hg",
  "key19": "xggMTnBTvnunYrSnzGeaCQfKwvhtBu1VabXqb3rRxy8baRQ6NN3EQoKBXe4aVpwMtXP9aAJRPiB3DpDB4WWQfCm",
  "key20": "5N19YsduZopXEhh5LgXVexMjfG2LbZd4LtPZhr5XQKdb3K9cHV7UWyVsqZeaKRhCYnwVpJgTnADnopyRxp1xwpaP",
  "key21": "4CTqFC9bqqPGtun1un7g3R8fSezsy1BT6WibJc4Znc1QNz8kJNUQ9KGYNdpJeUrAHaYkC8fiNtb1pEFoEx6zLaA2",
  "key22": "3mdt1Syo19TXYbcH8eP2PFRyYQ9DD6FC45AJCGb1F5tWCuFRSEz289pLPgrKDwxAFquULxvEX73SpoqqBLadPjfQ",
  "key23": "3J9z6FTueJU3fojnKCMd498QsGNg7JsJRhdcuwyFPVCuuc4ymsYEHbD8ZdkRcpivVJPjYhnN9G5fJTzvAaxe2Zj7",
  "key24": "45qAMSYecVEEqrkH16SHccEzGu2ym3kyt8edWNheZbMCg4utj5rFmwrLjKsRHEapFMDE14y7TepmVZeMV6sqcGGJ",
  "key25": "2oiwXxdGEaytE7XzFTqCVyBnrBc4uAj642zvCTiZyt5tqvweytgAY3kRjDcGw6w4gT76wRKQgqv7Ux9HXg5tnoYd",
  "key26": "61w6Ut7JADtxbF4YGALj9AGxdC89A729KB1HBrYr4YwaHzqJJuFVTQV16Ew5raUvaBwMNRSxNLvJPgMxjJAeFJj6",
  "key27": "619Zh7BLvxDTmZ31hHYVBueMvfAAUpcCpcyfJRC1t7dZH6XZDn5F4X8mmSE8McNdyD6yRKhzdyvtCQwuhdLCXLd",
  "key28": "2hHMQuhDko2cZLGZ7thSDiPAgh7H922hHtkiNFhqGBeJ1fYLBSd8rDug7jdLFtjWtDssFhMS3nrwt8zykKnTjYYK",
  "key29": "3k4Kqo5f798tfGVteMkKKpagj8mEWnTcvHXzoWM5VsPEznzXkWEcGkeCkpcaAcjLTiyVinyJvEThoqtaXi8GqUmY",
  "key30": "3vLRzpjkwFzH63KaPk5Nqe15SikY7hHDPkvYh6faNpLevKhcgwDTG5dKiZkNt8tGyGfFJyEovc5r6tNN3zromzxi",
  "key31": "2Pnm9a3TPo9eT7GQ1koHZXTCTpgzQp4xMtq6Nf7gmpZnBprBHLLRvS6HZYt9sBqEtKmxR1Zof7jqbdEmLMs8PWqS",
  "key32": "5kXEdZomrcR8BSawfZXg6tkix1LVJuQkZMhB6XFT4o7mPsJTs9osUNEanPKoxNqZgPtGztNzCYXn6D8uqGuJBErS",
  "key33": "3pwswGBf7V7yGSbTaY6RFHWZYeTmbxFhMLX9ENURJvLH7eP5tihNASi1SeroEdgf1QDvHM3mTozy4ij6kctxHQtA",
  "key34": "2qpGFCQ9T7RNqiEuRmeZAGNUcRZXzAByjxwZq7S6MB3GTFFNLi24nt3EmZJGwC3YGfL9pLvThGMdRS2WpxPzbyio",
  "key35": "2D5GyDP9MM2AnRBDj5uw7n8Qk9cQsQ2uyzdvaAib2n9ksDukFRfPE6MnMCMKQjPNYBkmDZrqDYazc96f4GXHLfkJ",
  "key36": "5sCDuyrq4NvZYi6mE55Z725YHDRpUwPdy2vWHGQ2yoVBGmFAHao5hyzGcD4runeP7botNLZcYU27Rx8CLnmmiZXX",
  "key37": "4rN99DUXZMSWdkphn2LVT5wZnBscXtGGkr7K1qGJYug7CHXKEhd3hGAGVEe9pYn5vAGgjBnvJFSdjUuhyA2BEmrN",
  "key38": "2Rm93Quhvo9Koe6gB9g44Wd85BsrBdvxBNmRFLQB7CT2YUTJkvNY9SiW8s5MsXBpiRerdB6mBcMiLKaXKGGZkg5F",
  "key39": "3eCk39WTARVZKQKKN4d5ZmvTJXFzWQxaWUhACL9S9nUJD5FM26YQGpKUKefKFv74tqeosU1FVi3FStK3bXSQDBQe",
  "key40": "oQxDphTNeK58uno2v9iugUVBtxTvSgux9rG1mcPWDQMBuFREJCRAwuXF2A5i5L5uRWYALrvfPCLmfTextsHPzhi",
  "key41": "3L9nibnphCuX9KRxKdTdXe1gVwhKxUZGGHboSt8PnnnrVjDuJ7su9Qi8XDJRHnsX9WahKKhtzu6SEYuWFvy4aKAh",
  "key42": "65NUoVZAfTR76WAzTvPgVnsobWBBvc6kPcMBCiUtkjmuzUaeUcWWNzJV2iNvjnG5YfVVAKRHLK3yicSidEkU2DnR",
  "key43": "5qnoFXi8TKoopJ8kwx2Mw8tMjwg9BmVS285y1sE16JEjmXD3JG8LXShjMNFhPSDLh6wCM8q8iE3xsaxgMek6tiFd"
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
