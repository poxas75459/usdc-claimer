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
    "3HqCfDsZZRzwggAefePhTUYHRKHh9mm1SFEYrxsHCmwGG8Xr31HwGTvaegEERURzBYSqt92wKPxDD2kKBVsPHrKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XihDK8kCDnraLNR3aBQY61tUxCZAEmUybXgW4azRLD7hjTKHoWpUehaaTx8HLHtDdjKvgLzdZFNLsmqeyxparQp",
  "key1": "2dSXVVBcsyKB7cV2yGbctg5Rct5oH8NKNkvvce9f2AZfu4PDgaBpjxtykra9wYyswRg8k96rRjnKhZD6McvevUTN",
  "key2": "5LgmSrr79z8VZN7R7mg1G2BisFoRAaMdLjUmDVQDQzWxsAguDyXGp9WmXgz2SELnPpaxXKCVPM5P3tJ77vdz1Gyt",
  "key3": "53PVsLmzGJ67KyrdKMW5S5UdfwuTbr6WEhnJw3KTLBstMdzhz3ez8ZHJejtay9aj14USCSjFutHV8uBXnyfauot4",
  "key4": "cjqAnXaF6t8cuSnQpY39DBLPtSVGL2EUUdm73sA3cdS6BG32qdcebsPNqCUJMqR7ZfNtYh91Uypwf6wiayXnreZ",
  "key5": "3c9mfEiruDEGxHymEkqC5iAJpq8NbB5HRmUELrvPkrbfYAbNYxg1UZEzRozPftirHX65eH9ESPhzAtRQfXxs9v8P",
  "key6": "FUhJMwBZUcKJgVssWRAUXh9WKgxaybxyUEfhdMhUAvBkeNeGRuQ7ZsdUZEYmScrAxFLGtZ9cZmbCLJsnoGGgAUD",
  "key7": "3triJ4i8gwPBQPzsZXpMTFYv9nrwwiZn7cJj6uhoGgY4dhekKLu3rqoT5i3iSQDSpPvHmzLMae32sQWH6CXHk4kw",
  "key8": "4n8RVd67dG9odyXibJDzvk7VNvLQ9KVdDpJtYtb22uDHooNWLLauoid2Yb6a8KD4pUuqm7Jp4UBA9brEwGHEucVh",
  "key9": "2Dk8bf5ErdG7Dfr2MCaB7zo7XwhsS6RLLsukfGEZ8wfvNEMKXVkKqdAYmJAqfRwBTAkdLFrd7HF3VzkiVZdsnpQQ",
  "key10": "2x6mytkvRoncr5c8CTUm4LMTWFc8TD8ts9qXCxpotp8cDjTHDhnKCKc1Ta53nwkDXrSTnVwHnXkYvEPJPFfZaT4E",
  "key11": "577DCpG6a38CkdUFpgigyM6LG1VdKSBDWCZM5gx7yJAEMu8W4LgpCenJdwTsPapbnP8cQYWpGLxEwjK4M7RmAppm",
  "key12": "4FLf9tfgPbNLMG6ZJPjcXpNxh4svJTJByakG1bb6KwNpBy8XaMCPTbZRZYna83dN7hB1eGBtHzCLDZQFp8UptbwP",
  "key13": "48mAB4XAEQkb6ipH7NejvLgA2z4ewDNPE1Uv49nUSv19XXZ728bLr1Fwgvd3wgJSXxksgb3xcWAGHehbnrL6MgzK",
  "key14": "2WWfx3f6prC8oiaXxUbjzyc8xNzMg1LLpCwf4MgWfTyJdaUi9ZFismJj1KXHy7FLypjyuetebFFa8GevSdDbrhkE",
  "key15": "64Utff8EdXViqyF48tJzoS1yCaoo6URXrLpwnHcowvfXZSdgTsuY8oJvKNnHa7ysQnnzV2bR9hm3ktCQdQfqCs4C",
  "key16": "2houQyVyyvmEHzwESzLRHHet1xyFXaCidxM8SBpJTwnPwfrvPt8SdNEWoYvwuLTeGE8eD5hqRrME3xAYpRvRx1E3",
  "key17": "3NP9fQt9qyYec5VdEd9jiwakJ4RfpVATnQLRddMyAZkiSz1pzJ9W6py1F6uh9ujqZCRwSw2wDkjcLmytQSLcNM9G",
  "key18": "36dExSZjSVwpzpamWhaStNBHLWs5a3jQuDwpRkgkGtadV5kNYbpa1epiyyyJ8Qkm8JBfSk2qpeqEDvDXqdVkMDWu",
  "key19": "4NgxyGJfCE5MSwb85Ld9QReLHBWQqpNNkJzrgD6EZqn6J7S9BEKUWxEw5z7bCc95oxswUbn864mrdezSoFRQRxuq",
  "key20": "3paesQDFJSGL8QrwDocRFQhxpsN1ZoVZiijmbMKUQPkx2v4hc5433rzBAEMsGUzmR1qJTbVd9qYty4bLCdRwDPj4",
  "key21": "58majJnCQXZAbBTdeK46f12SBUEyMJwpkyaaRHu8SPSBgan99zqDwks9reNxmtSp4id9PpiLxvMQ4CM4cfBcmb7Q",
  "key22": "H6x3gaApLfLR9XvCHUGDNfxmQRsoXcACe6r3saz3AqupaGgeEVxW6TgC28y8DxGZYTY7738RFqu2aWxzw2scVf8",
  "key23": "4dNP7DPiVHhYcfvxa6ULt41ZjgWMPqAnzGm8ZGMsC2cPLAkhNxENL6853vgXJsXkx6gMYZ3bsUgaUz9Dt5WCDPdT",
  "key24": "251CSUxg3MPa2fbXQLboUfq7DE15HsQeRhd2pm9pTRid9Zx2CVhZpQDuGcMiCap3N6X5vHrGUE13B6HaDezDB14g",
  "key25": "54Z8xDWg4rQJMyTE7HryCTwWuRR9KFzC1LfE5nYLg7cHJDdXh96GDczzZKvNamgpWV56k5nNXH8YwiAitXQfiHM2",
  "key26": "5vy8pUhnukBAjD8YJqs8NkrCYV6bRhjysXUmK8AUrQq4GYCE32yTdcxhZukHjFPSq77rRTYrUpMDJ2Q9EqzuRhzm",
  "key27": "2hdoYDBJVCXYsRfXHK9sypggVXy7a7YSRkraSpaXHiY1esKxqa6m2NKrEVPfMmdqRExxksd1DX4CZyWtNv3UKDYg",
  "key28": "2psXDgSWNK2TUBQALGNCFJV1uMxeNei4RMksux2xcmVXkE4DQwAtDm3UFi6SPUADvncH48k828f5zV851magm6Bt",
  "key29": "5o7RUB8x1yNtLVeaK3m5Jhrtq22DcEnVnPfGftNDUvgY4g6is7EJZjmXKfzt7bvqhU5DYACndEPm3svBFnsrfhMt",
  "key30": "2sD9K4y4j4d5FJ8jKnvTpAQACVi6RosGnXTRLVgx9rGQKUmuBwdrrL2J6X3F8zTEKzbYzABW6uMuJQs78SyrxPJm",
  "key31": "2pbjGFxLwLhz8CpgrUSMwEVZhqgGDw8ECAtkw6BPaop2h4YL7qN8YAWjyL3j8yDmCoeB95JjLVaiCf1nrAnnxz7s",
  "key32": "AqD2KQdGwEvezqYG1WdY54otKHjziwv1q4CX5c9n5yAofJk11C5vv3XTvY5XRBxBJinhS4gwcJ6YTq7Kr2VMDn4",
  "key33": "4EL9L6jUP1XjPoXwRPwPgcWVJx9hEB3pbvvx6U6AhBeGzkJnA8H2vhGJ9CvjGzWTAwyaT1JEc5aV6Z8RXDvXJAzj",
  "key34": "4xQmsGLZB228wz7DjLTeFsuHDjr5V8QLkBWGnwm4uA55YSXrHC4B3QdCYxGZHS3YGAiQpNkbWJRsNYZsWFovgaF9",
  "key35": "4cbt5jpJ2Hu6pnTf9dC9jgVg59isVjovM3rZaJHro9o7ARPVM1mqXGvqkzp6yuq7fw7yAXJetQMNFUTJxCoxhzzD",
  "key36": "483Esst6xgWASBBWd5n5p75pzGJUCqENSKnCZpVSei2t6z6TypnCcAXJ34nU9uf7XBsHV8V9NcWYcLH7SUHqUV5M",
  "key37": "5NU3oEnLbJfRvsBiJhMv4gvSpC8b8MgxUp9G7ejt9JWWdzG8ZSXkezhG9Bhrg255Q2GZurKEC3teWGbSJfZnCY9m",
  "key38": "3MDTtBPHXAGNFpsBM5cGYCZtaqhWC6PVias5XmXkeXc1WdTjCN8CQM7gYLsbmktMCkxLSjrjVt856tYcisjjyT9A",
  "key39": "33qeno8iVg6dBBFEzx8Vb95dsrYeXsyu2zNY57vLSjgRfYZ8nhkbzo5a7CnirbXgjycD9ETb7w719o8bM486qt9J",
  "key40": "1XSU1LgJ4PjfEV9iWQDAaCNnKi3h2ATn1dAHSUTbRLQHboUhFtmiPcBjXrfHdrs45mipYMb1MwPGPRuuGNsfbjx",
  "key41": "5fSU26aVeZLazGA2GCQQWqYAeNsF5577FwQwqTNbX2wduJJoc5y2vG7YWbApLBkbfqbzFR8qNiBs8FgJNbep1eBW",
  "key42": "eWPoejQ54aZfLUAA7X2Ld9iELWaiS2ZLEaeimzDuCcdzYS6bNruGkeU1RR1NkMGCnhoAmjkbh1MEbwW3dn3W8cW",
  "key43": "3mdTpPG7hvSrCP13wTnPFKtAWbv95DXTooUtgGB8ZJD7DxZuz4WLH7tR3gQqLMfC26C85SdEYaEsXsAbvcscoLaP",
  "key44": "63esYPDEjE6KtAGPMYthkWEcMPohBKgycYcJjsgTy9VVnn5fQFS1iBCTjiaRRzPaomBvFcc3dRtMQmzS7ngdkY6w",
  "key45": "3dbj6LHfFmfFBgHmcjA8YezDhRwZnhGKD1hoxPKuVwrXG5jrXNMXDRnrWXe5y5sn1MVE2iLNYpXLgwXwVakBTm8Y",
  "key46": "23JfStU4TkhvUfmYHyqynqrCKFGrMVBHrFGV1HYEvHuqDLsnAQpBkJXXSCGfHMN1hTWeRTL6bPS1hoB6sucDvjve",
  "key47": "2EuVSrZnB9dyWs9YpuAD58Df4VqXDcGNxk31RtR3PNzmaRsjSxRApupYZN8vNEBM7woZDn5Kn1hndpkZYLqVLJQz",
  "key48": "Qyw9rEFaotZcokXUZRv8zVQvpydYcSgearQFUjKQy4FSRSyiYuJLVtJXwKoDP9numwbnUVS2bq8Ry5x2fysLat5",
  "key49": "3BCUpBYNZE6MAT1zBvm8HWvGHmcZHp9upHep4fpKTCpMVcRpFSGk6KDFNK6D8igXJ8oBSiXrzkaVuv8j2sVJrcuq"
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
