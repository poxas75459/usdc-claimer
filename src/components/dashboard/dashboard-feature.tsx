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
    "48BJwQ5ncjCh77TsT2J3UR5CUGbdfvuBq6ohTUVB387VTCNGgqS5MkLEucjvAUi2LFZD5cTYk3VUKL5ffyVWFAgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fAF3712WosJzSfthqRazB3YBWA7JWAHD6XZixiKuvvFUzeMyhSknAyQpRMWnGegz9brtcnpyxbDGRcfmwx9U4hb",
  "key1": "2Mddto6hohdzJoc5uDizNy2nxE1sdoUJHsPJyVa8oCYkNFG8ScLp2J3JSPzz15HkDLpRkZRAs1TtnfYeWoeeaQES",
  "key2": "26ymQph9fDJdRWYNRd4BCeqCTGw1HVQmf3wmkSx3APANhjwadWh7x15grRtWCPkLsv71dhTBgxN48vqDY6czA8ip",
  "key3": "636yzwyHpp74onPwoMZdXph8PzC8jDckbLoKVKKEifqGgbQUPRFKdJnaGdp15knUyPLhuJDnvTJjC45DJpSdtM1S",
  "key4": "5fVULrAZKHhTVHVgbtc7rAEopvR1q5mipTy8ALiQeZHPE7VsHXdkLKns8UHcsbaUzbfkEyWyA5RNa3GMbdPFvLKF",
  "key5": "5inMKLmiLSYYAoYD4o3fQeit6n2Yuao4weWag3cdnv6SLoyhmdzeoJZ3GxviCTuRPj5iSPZQfR3DAtmTLB5nHTVX",
  "key6": "3oAsBJ7iMGjTc7euj3yoBKfKn2q7TZnML7RuTyLzF5RBwJnoussQmuyeeRiH65ffS8kRaqJ5ftykMMud1jhLhtrT",
  "key7": "28WdLiFDLAnyodg6f88dZNECgZ9SDq3E3i8nLEZGR7Rs5pB1He4zvhjFZbVHpdtqa47UvVQMzpzeRMVZFSFRrYJC",
  "key8": "zBsbJSb1Fw7Yo1BocvFyemaoCzBtghkbHtVaCisE1TfYXdDkgwnT6Hdvqh4y7DB6QvBqFygzmotubSg64FjGYje",
  "key9": "5QjpW9ZcgukU9cprRVk7MUsNMNadYLDWnU5BmSAMWUEgcC3qXNW7Vs3YLd7qjatrkKrXEnn3ca4vuGLWQBtUXqV1",
  "key10": "2nLCG7LtwMeNxG9nyasWgZMu3wA4jqTiTmSzVaFiopY1J6rsnpyrUx5HzYcbAZZ2WmfH84i2WMWm9dPe3Vn6yQW7",
  "key11": "4BYWD4VAsv3W3oK4DGjHEzTm9PUywDz8crAn2xutJpYVaYPYyNsES5JeFouVq3JxUFhn6Q1VwoN2dVR7ACGy1fAZ",
  "key12": "5onezGhimxheRenUbvnjPeZYsunMTv3bMbU4YVAX1SonBGsZ5BdwatLTjTFD6pG1UV1DSwmUsY2UVqb3q4NA8Lzd",
  "key13": "2ffasz3ZXH5Xt9eUAzFTzLnFj3DW8ucqf67a5nM1qUPNom6jpJdBjPVfepGx468xHfmeY5jrXxf4o5hm5ZqE8XiA",
  "key14": "5bTtx14uDqYLVHrwxAByCCZdBkYnhMpByRttnD7cUDu61Rm5sBf8mwAuWWJi4by4RbrQY32ns9P1WC1PRPNW1q3E",
  "key15": "RYxkMTmJCbGK5DYZgiUzEZmEojeyUKNQgYi4kNkcMvwdp8Uc17QKqr7n79jycjqGgQFnoQRS2ZSMPKoNMoq2G45",
  "key16": "KRH2vQzU8pme7ThKoMUcwiDrmippujK4M7cw7doQZHw8Kduj8rLUQXEEx7Aczu72pgCRvtR4Nyo5Xk5VKJ7z93B",
  "key17": "2LE8E7iRsYbary3hayvCduK4FiSrBtEmqn1HBkT4uoTxhBvE6Kvco6KLVVFKBkENydPMY5pwQk91kSJPX8QnjTSU",
  "key18": "4AY4JAwLToQjFa34Dte2VFVpuoz9MPem6SgJ36q45Kzxzp7wEf8RnrSYKWkRfYub5nJ3RrMj7QdtAKLvLeZ3itNw",
  "key19": "fNbrW1yLj34q1emoTfqKDnTwbFw5fewfxwTxvVfVARzMfoxNA2yms7XCV8G7XSZFbskCCnWXwDdcxmZkA54r82G",
  "key20": "5L4XcZdH4xjVA7qDCWJZq2zeZzD5mnFYQ3XPtgkEHXQcC4Z7sQx6H8Qk26ZR2QAiUW8jR3cxaZqQsBN5226CWmTG",
  "key21": "3Vpq19fs1guHNPinwwJ9GKjDTgiakyJLGZu9LPJAtZY2NFBY5mqDZG48L2th1hUqPvtCB4Uu8Wkn7kVVKtM842nV",
  "key22": "2p1LbqWH7HBeqz1tgvC7LYEEW77gveu4wYTHNEZQuz3X3FKJ58few2P8oFPoaYp5RKAC3tbw3rZQDrWkt5kLSCBu",
  "key23": "BXdc8KqBts8r9aHGF5XHdPpcWBk3h4Wp1ouE6Brxd5KDR9Pe5vTQxJVx513M87fN4GTur3EZxhEjzJn22Pr2VhZ",
  "key24": "3eetege2KpidXk4AXt2XmwrPW16PJRyhSG9sReLMnitXhFRMpHX1mmKUV9SUBG48juBdqxti6BGode5WNhJKWXiz",
  "key25": "59sxXf75HD5z483Yh99Zy2yT7hxsHs1nDwzYUE6LznxShma7kko4ooNxKACFzhBTtdS4Rm8pHGQLdDe84zrQnZQH",
  "key26": "3zxGjwn4RSsTEqkubMsvUG4y3j746DW4FZg2KYTmddHjxMae33gLwh8c3mVCs3AgvdVr3KP8Zzpz9ZBcMLw8Xh4H",
  "key27": "2C5MX8dm5CuVRjwnGU5EWQfnxjve6L37ED6cKx48QZTDzmpkzgX7sWSzzfn6x5LoT1H8LsQKrRXb3jm8YKCTuupT",
  "key28": "h2k3Bj1UrJFwVWD7himWptA8UTPYR8cj2yoh3rqQVeEgrra8VuEmAfYbKEzfFTv1ukuYS25kwWMtVtgSN4MxHqq",
  "key29": "2LzuhngjtPd2zsc2z9qz4pn4xwj4yDvZp2mWE7FdSMjmhbsWhFoRwSfXcUo2p95F3p99pkQLp8yRM7oHNJY5dTDW",
  "key30": "5CcmDD4N4NZ2De3KwNxMENugCfkPAPXD4i8pnuX2CgvdyMjyzMLmtQFK3J9syKKyN6wHzpzzWor1JQw1khYi6o6U",
  "key31": "5WTbyYncGYvgxewgN6acSwdJpfGXR617FpXZdESf8xZyQ4rDjU2s7kSC9NbYH5aRFY4XX7QvSNNYujCwTceicos5",
  "key32": "66J4sif8Wjv3yZy22JLhEB6SuW9qTEw3CsmSZbegLtTDcqEXsTGyQLZPp6HXubDKdA1DCh6Kw36TzJMaKxqgHDhd",
  "key33": "23GA295fGAjnDenizPohZVaKB5DxRjzyQaJmwL6TFjJM4AD5QZzErN3LTWBi85obeEYH8XRCQbRL2AhHo4JNqRab",
  "key34": "4969dakmaGbX8oAvZpDp7YJREVrVbi3BxAs2VvDfLDeaxMjJpPgauEwsWJmE5ifTqsmyRGFsmr7j3WYJAU3rR5vd",
  "key35": "2TH7ZL9qezaujt3W5YpNLF78AANJvtNLQudnebawDDDbBzATKbpb8JqJrdtWwkJeSkP8TybW43toPJBwrHfLpmge",
  "key36": "4sTX7U9ijrF4BypjQtouaKtFJcnJWSGDjUhYYigHzg8rKCE4bBzCFSzfjgLLW3FELh1Aoaz3u3vh36uW5FZbLHaK",
  "key37": "5EHuFf1wEmow5LpDJ1Cz2CueUKuifzMrsbn63pwZWmHvxVS3rHvscSHramokaBzUNeupydJXagtLdjRV17yDwBzF",
  "key38": "2KUzMxkdoyJQswkYP9sna87jMbELiSzLXQeENqL7zfUL68CbTsThWzUHHnZF2xZDvPbDKxHGgyf4MEzHdrL3g2Xz",
  "key39": "4ccGV68nZWAUdFEQGY8EAwXCX4hVEiW4XUmpruQNvh7VsE9x2nbV5WFw5re76USpuqof7kzusXqoCbjppwzJtR3V",
  "key40": "2b5oE87AacAZxXUufyNfBx1uYDZ22ruhfpXbm3V3cNNDaqPNiZSxpJ5GbXSB68fmmefLkgrYQeqj54bk1mex8Zyw",
  "key41": "4PgGSJnZ5ZZoyJzCikRNSHMThC6cjVzVQBf2oerHH4H1H7DmPbnZ4iqBh5955sh4EGzJzadTnoGzkU8EZjgavhcT",
  "key42": "3rUttWgtRwcPpDAU4iL7MGwHponpK7RaMnifUDQG1eA3BF8rmkMCQrX4pL54FBb7G6orcRywXcrEHSb5QWdawjT7",
  "key43": "AtGo29a77jQHoD9BfUSMfrfRfJ9iurLhkujMr1tHPatgUaR7ACi9NkrJeEJy33ufD5LKwaiA2ANKdZev1PRB6pD",
  "key44": "2MwN2L6guByMSuoNjiFhF3cYKiRjtGJSfgNXLUQR2zDjsHcaNPeP3L3mb8bu8iRc1XaQxkbfPgCUqxugW8CF6DAW",
  "key45": "32hpeGt55nvBazqLfot6bsQCFABV6tFfuuRVmGBHAnHb4jrMZFAu7Y9P6afau9Vaj5rfGMWCS5X3MboPxjW8vnbY",
  "key46": "3RNTvRgpHtdopZTSqoCuW3M99e1bYo8AkbetDWDNuX1mRDmWbbocig9XfLnBdkk5RMfk7GevcGWkXfHzNVEZy3ci",
  "key47": "RgxzXz13SRARmtQpGXdmX6YTP5mxgdS3AMaw5sgqBKWugDs7YPnW1XbXRt5ewc4gZgY5D5icFQMnW6Hrzu9Q7tJ",
  "key48": "4erHyhcpyntMXM6kgYfP71Z1tqZYJs99HA86vS8QeoxgRWcdcsvyPc47GnD7bVRwMus4RiEXpvstwfp38am9wx1G"
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
