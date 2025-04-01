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
    "5xRcXLhwciN2y1kDWNSjdgvqw8Gpk83EFY1g4GZMW1ZcMGsjydX3cXUn9LitKtqT7peaL5Fjvr24vBXGsHbMpKA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yAj5nWivrJBcA3JowiqcQkCVCyBr3tqNAxhVvuLGboeG8kS5F3ezR8unAQt5DAiBRXQ884TmZpktydWJ1FNJFjK",
  "key1": "5B4o3NESPDxmyY6vw23inNKoATQ77BnMyEckMucvjqWwZmYzpqPmwmFTHThz3PLNHSqjJBosK1PV8yJbatrcKuqX",
  "key2": "qFrRgGMi1CipKLEZQURR3X5aGHXGDB6WwgwUt9P85tTVWhqHBP33JFh5HeizW6yQjzHhUJ5iFr8Kov4npv1aPia",
  "key3": "2dkrPr9SEfpt5x5yV69C8igrNcK1gGh7X7Vc5T2TCABRRRou2hw7nZsBxwXfehWp4AM9KoKx8ixXZAsgmpXGzcek",
  "key4": "5HunbTHoaWXbSM93HPapgt6xWMY9kJzxLkW2a7S5yJ3M5wRxkKTYRWzmusLU2r4eLHcHNa6vcBiUVowiHiqpkgNd",
  "key5": "43PyBaomC58BK1ZcHCmRakK84JLWHc5NXhGxkPrv5mZHbHkGTiLRhhH1SSjKCVtLrsxUEE9TvGRgmZbyU31mKD2P",
  "key6": "Ssfao18w5q5oWq7LoLZHRimhwm4PqTVng9LdL6JobbtriLHAd1XRB4TQPE8kkpsBtAcpCHLSnXGP8QHJp9R9jy9",
  "key7": "e7TRrHsK2wk4qVW5mtt4HUKGC3KA6QWYpZqcpiHoErdRfrJyyu8kUErR1eAFtkG5KgU6256YTi36x2a5Y9ST4hg",
  "key8": "5wBbzUFWaxuB2CDEomGv6czx4RcHHPkX4MS4b2ewP1SS8F2ZuND5FK3f9P4LET678vGkHGXtobgmuTqSga5sruSz",
  "key9": "2FAY7oDfxdHh29fPf4kcX4hk9Epq1CrJxcW6vHQypCGCsp6nagnqady2pPNoBxCGzfY2WHt54a2kU2vp6wTMzt5S",
  "key10": "3nUkD7BTQfKQHx64bpEsYs4gDrU19bScXTBdBSw43zuau99khUX4J3imNfF2T1mu1H3MQrEcD4cJWq3DKsnsAjaw",
  "key11": "3bgfR6WN5PrBUBZWbZuELrvzaB36SyK3SNUVy6TsaMayujt3JMzz9E83fVjucKhT1aZrCMJnr5q33Qm4msMY22YZ",
  "key12": "3jJ4pyoU4dcBHVLRs2kU7LydpV9JS1WNyWUp2uUzHM6afhpwVojCVJpxNoDTW6MQPSY7mcydV9xAe7DxGXY6i9w6",
  "key13": "27P5wTjZ9d4ZpvraXvzVeje4jDa5DAJ3Lx6hW24CAdWZQNVvHZf5gCysbQvjUJkEYn4dxs3WycfbsxKNWwxhknVE",
  "key14": "YKPgnK9NyRVdcU58ieuoSSqxo7N3BkRJ2V9jDaahQhUjwvHZDHSbYxScFSztvtVityw814XPECSvbcY9Qm5HRx6",
  "key15": "5By9ZiXPqpDw6WMzTPeys57Bp8xzLGQ2M9WbEThi753ihPsBGwcLrQea5jaY4DyDi4sGEfFUURj3pZVUn2V2tC72",
  "key16": "2X5ym43WkVh466J2V8EXx79Rg4ijznuUdUtj59is1BMjACr5uphw9gdUb2xW7aR8t6ojZLMdxz2v2fEx6TpNVkC8",
  "key17": "2Wx23AAXKxXzyAfuw1ZepoPTEb4okxZ9AG9esYE8EHfHEGQeS1YkVkswAZDBMeNx1itjDe4iTKke7KsgRXHqAZGQ",
  "key18": "4fgY8rThWabd2Cr7TVZHgH96iMLMBqucsoyZcYtr8kdbLKZ1ZoseiRrD6fUVxvfuKcjmKo1G3aTPKuKddZtLJmP5",
  "key19": "2zVs48jo1GTYXoJCqDQXCGKuJAB3sW5GjThHQBjeJeXvkp3AooFZ6ozUoXAw34KopY4jcQHyE9QDpLfXyYDG5Bt9",
  "key20": "525C4VhMfZYq4dEzuPYTT9aUZmiHSFEJiJPdipQCdNSGyBJL9U6BdTL2ZVw4mVaWhy7Az16bS43dh8Jmn3GjQqg7",
  "key21": "5vJa2FJmabbYVs6jRW3PFTu5JGSkPvXXwSgQ8VJEDRB1FojHy6mzAg6Fc3aBmr9b7s64M6conxB6kVHmmLhnU7xA",
  "key22": "3TvurqnkK6gU3Vwk8HQJgRFGZ7GjXUUMGxGMDxQRYpqp4fkexW7N2x4J17S313jayiPqyCYtPvA9tm3oiRju8Ddo",
  "key23": "2ndNojEiT26WLYfcs7JEeg4d781bdzKX8EiaoTWBPpbToewhsdWtA95Rppo62KzkyVc71qdmDR2LLrnh1JyEvTYJ",
  "key24": "2sNEcEDss7EiamPHzExdFgsiJkSgDFF5RGG86VFxAPHH4w7fozMhG6K2jue3ZjQfafW8bqNP7fLRhJMK9LibCbP7",
  "key25": "4wswd5jYGD6hC15SiBnszgPXaXG3yiUTekvNpDNNMjrX9ifJ4DyA4xfcNbQTLXLDt7BMTL97YobUxwxpVwGTGJ8r",
  "key26": "2hYeZ4H8xHCJA8bXn6LamQqYZ9CpVruC1RV3cidZ9RW6Ektqw7iAhAJaCU2eVRzm6fk2YeBaBQE6VNuEmxFwUGM1",
  "key27": "Fx2JGzDm6VQTNuVaS2iKxpLwP7LVKHh3UAn6Cw7R7EJuYXxFhTkVBMC1QcgnmzZPgjKCh4ozAiKmwykimeL9ngC",
  "key28": "3GsEjiGjUtnJFbhjgj8AypjbkR6ubm1BguK3Bc2bTRMFj4hn4MWxSCdEguPTBVgkmL8wJPtA21Ti8LP7G7xLuBpb",
  "key29": "5QDRNziYjHQYqHv75nsJ5ZZm8RBikM6grTvXoBZ3gWMgBJhYmDj8UoJKMGyeKdHGecwhyuUdEYvqtem8F7hHy1X2",
  "key30": "4W1AfaKFT8TYaTBrGf1baxg99TkXtLmRGArxxTXS9pwFgKgC3MYNXWwb6FEBUhBPfVqaxMz9Vi7sPmrnC6us71L6",
  "key31": "64Jdc44yRNDLStYigrXoxnAtwoY9aDrciMLyksQZiZcj3tUgiRzrACBgbbcvst9r8qf98nNxP7kAJ7KpezfS9nkS",
  "key32": "SnbexofLfV7NWNKCbGw1EbKshQ4rnmgbhMYFsCXCBstLpSKPVcbwNRizAr9NihFRAhY18UwtcazEnhvMPryTtsT",
  "key33": "5Hm4AvktqrjJg72dcJB1uxvoZu37zVhrBWZmUsb3ZiALkvtK3CtpnxfMg3vdHccUMgoENhHWjuQ7FTgYxa1aUABV",
  "key34": "34pyZ2KGYaam6Ee4RgppcYxhaeBrL7WpHffMhSYxo9y7RLPk2RWZGThvTsHa1JHphbxtZTZCYQKj8NRJzorbKUov",
  "key35": "3rQuKGeetgDPEoYxctZuarj1B3BZmap2aeNmFk5N4jXPvVUXJVRNZETrBCedXqC8oduGeyucfsVFddiiPpLn2BGQ",
  "key36": "59AepN5NFmZSwxRNa2JUEPyGV6rKnETrNrJanF9Cv8JaWwx7KVPNuS8SidgsxiQzqMcyzY8deFU5QoYPcPMA8Vkd",
  "key37": "3XrkFpSDpiYmAEuvoob1zutxm5mYyN2CS4gigbpDvs4gRN6Cwq6TDh8wGtXeHs2XuH2DfmboWCLYMR6fjLrseQLT",
  "key38": "277esy42yJt8eyrQqbe1HRSdFW4VReG5Y1Ljk4e8grkXBSatWTNYYN784eRQKuAw19HeF98J4BwCo8rDEbnLmSoL",
  "key39": "5Y8bzgqPnohTp7iQzKtXD8FNWuxiWdKG6gyWz2aJaahN2vvn2dPmpK4wpjB3NjU7W3z4Gbhn3gr1JJpajQGyxy4a",
  "key40": "5MPcwC9mnmJ8Bs86Foay71sJTL5sr1uZgVDnp53KphvCpsrLM63HttidXT6PLWoNJ35VUv34cBu1MwTv6coDPuJD",
  "key41": "3CqjtCAAazgxJnpsmYr6eYM3Se2WYajeHCh14Aktuapj3kWYmfMWDNQ2MyWiWsMkYmpH8HHAANp5qF7T4AAJRw7Q",
  "key42": "4viG3P2wWK9Pze5jXm181GrGthNhV1UqKXDCfZEuFuXoh1NaWRgwmzgqbzJovKJTeYj5FTwJLeWdwRFuWYYaygjm",
  "key43": "2BYHKfuiF37RAzZXQkqwDk9teADQyKSp1JZszdqqeR6gUpUME68qa5LYg7TxnZN8PRqVzj6t3U3v2Ryjjci7XuxT",
  "key44": "3NkkCLg7uWSF2ET4fJnmBdJA1vDCuRvxAoxBhb6rYbJHGArqtKNkPkZ1qJnQNwfW1KdNwRQy7N6u6QZGBEMRgxjj",
  "key45": "5NkWgeT95574MzeL11EfyfHVctQ8WryKzRuonQCBSq1Nai39HCLzf2kKPjYhbkVGbKq3a8bDzUnQxUtoP4s8HArj"
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
