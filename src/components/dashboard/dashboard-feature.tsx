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
    "4uy9aqDCnapjdSyV2utxQLdm4gUivc75SQ4gNZ9W7ejpVc8KWHttirS7HH5awP4gfT5VAurPYnXiBjTACkfovfx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tPZwdazSRzJ5kS17GycB1LUuk3978kqCYRd7yZNxXvEBcapyFUhKcwftzyCKBrkoY99p4gLiVpLorSaNr9MZH1p",
  "key1": "2aQ5zaoAa6W7kxVkPbwjEKGyNEScGcLjfGwyWckDQ57ecz93iZ8QPjg381Xdi27ruNHrSXTMV6xz3pGL5ysqub7t",
  "key2": "2oN2v9XChziz9q7WhhiFqHokWwJsTXmQbQkDR9SA98emJvAA7fdvAoVefH5WzKVquYLJu6z4XtZyJXoVYLmitvP1",
  "key3": "26DxmJRKhPxsRPLrmjyLeGUY1zgPj6BHgBQuwj4NXMFvdSF3LLcmt5gUHUiEiZ9CRW2jCpBV6r8iVo8bZeUDnLG4",
  "key4": "3C5H6GAZoD37wyTbL68CNNaduX28K71poArMHMCULnu3hGvkdsQU99kEHRK5qybf5wJBRZAQZSe4YHGNkeytHmYw",
  "key5": "5KRzpQupJWsS3sj6b3HfdunvXooVe46v7Nk1XMu5EvkGCyQwComyG9ARnPm2BkQJm4bZCbFEbxdgkHH8aqYtnSBt",
  "key6": "4USRZ2KBoVVjnridXFAumaefZfvxg55W884vbHfmt2dZ7zmJ7UCw91rXxL7CTDLkCjtzJQQ5Ndi9mkqbsvcRoN6x",
  "key7": "BzBRVuPCsr1P6j9vW2rE9sVt1FKgc9PRDEkBbXUPSToZPDpNoKMexaZr3TfFeDnNLp8cj2f8DkCGHWgF5JP4yfC",
  "key8": "23Ku31EY7oLfuvL4ymWmu4sh3ZaAW4K3BcQgqchzyms2rT8SPw3QfTpwTm7WXfy77t6ExypBBrzLmHA1xcdE72nQ",
  "key9": "R7y2WRA2pssg6PwVWTT93n8xLAz7uN3CBtog4Bk9zUBfjmPAsYrC6bTyfFkY2s8G924nNYK2K3YaLvh4j52jTmA",
  "key10": "4igxKW7EtGKEhJZuA4Ma5kuQrfsiVcTZ5axKEcuXGzbrdaPkdor4S23JmDFu9LhhMhdBuuSjBzCFpKDvDp95u17e",
  "key11": "59Kdf7jGfepdi2uUzVWDQQC4rwbj5U2iKjTTGNpiNvqRfbZbZuRfDiBtQBr4jAyEypDz2WLApGa3QggWbQBfmGvD",
  "key12": "2VmQYZPm6C3UCeYbTHSakMY244gXVhX6AHKjmHBmNLJbBCcjCA4qugckcbkuLJayXwhae8skATGeNG1WQqNw7ZJ8",
  "key13": "34bnRPJTMQ2sUHydKPJJZY6ZAg1aiE9Ew84LBjaoQMDXDtGi7VHfRVs36FQdUZ5tkp2MKZLJ7Hf31vaTWpwhxSfr",
  "key14": "5AWfcwZCoP3EYPyoStkLgVStzL8ihGJb72m9mNbDjwxBmK11vmSWKGThUZ5HgGpv7ojDkmTf8G7tbaS12DGGrz3c",
  "key15": "3tGhLnQ1LTp2hC7Ee86YeaKfmHMKeoFuhhJRRRv8ocfu1veMNBmoevTYzcq7jxDYp5CaRJgT4K5ooQYRFNYn31Jr",
  "key16": "2MWNjnohLrFrmeyU2zAWkCobPBHFfCdrMqTSfN5RUorbF1VGVUmHmGjv1QSau1Yt9Zw5ScgeHFfNTDEygZU2RuPN",
  "key17": "67NdJKnr1JsXJUWuiZAivkyoMuLRSVDzuftPVZYnhmxggXtpkYRqkAZbmjC2cYbfySx6bwbHzCPtQwazkdRmoMad",
  "key18": "58mG46PUmYGmN1y46YRXSsXyJMN3Qw5uEQ58P6xeg3eWJFSXByHKiMjMDPzcemjykRkkbCjUE47Niaz2Y7nGcaUP",
  "key19": "2sfaGyTJ4nd1BTUzP88VfixHfs3nGdAQwfDpnECm2B7AUay6n9sDuGmp3sxActJUqN1PKJEBXXQuPBYw6EqJcMki",
  "key20": "4rUUngGVxsfQh5hsS9L2ibnv5MqMmduegSRJKxv7k8CEHumhw6xXPAooSX4KRac9WgcAY6JavLC5Hb6Jq4wsX7Mw",
  "key21": "344NVMU5L2DgosTPH4QApggfKcewKyuvtp7K1CiBrNQ7Enq7APYv35EzqU2BJBehCYNxLeG3WTXw8f5gzYieBma6",
  "key22": "23V5erAN8GZo9ZZLnKeyWH5jx8YFZ7SQiXUoRQaSURPi8xKT1F1mThoRau5DkaHyUPrca7x4KcgNCMU3X9ukPpUb",
  "key23": "EZtPogQUdnKdbrUCDmKd9pMWcXmfd2xdp3zNNFxa9aCza4hMGDBKo85ALUpDUZvZYJYFBqhHpRsw44oFuKgRb5p",
  "key24": "3cNAVrVNDqPTtZRCopBj8EV5e9adceXLACyBV3AGGs23vG78AhKs7DJNerr5UWE6h6bwHGPvJiVA5rdbhgj9q73k",
  "key25": "3hpRypUfYS86fHihQ4FKk8mpWM9X2hqSJ18KP5cKgevJJP3EqsaMKi9k4jVkg1aBSu639bqJ3JwTzzz1rwJ5PkAy",
  "key26": "4W1kKi9EKyCYNmj2NaEQMWHEBXLXVTnbJcNmAvN5h53qpdcuCHgLNwpqGKYKUocZoWAS4SFiisNEyefbPQGcTm71",
  "key27": "4WX2XP2hSswELfPmqQrjomyvxTQmLBJT8DfemPH5WkLqS1kYqajDVpJQBPxC1TYwHkX6WTKTrEEGZgLjTtSaJFnP",
  "key28": "42Pp8ZF6kyeM3Tr2qWpHGpWDpmuA7aMm84D1YCEPdtbxsfY4yknas6AUpiPRAztBZgk2B4MMMtPJnjqQy5dnuV8u",
  "key29": "35H3DXeyvqTNYF6EvEeURY1U87MVHGS3nYBytZisVcFoAU8kX1LdZergSaRmV6Hz8R5fK5PF7TjKBdKD2T7KP2HB",
  "key30": "4CoJt7afrsWUfrZpt4hVRqZy3K8RH1wwDVy8PsUVeAu71faAzktwYPXt8uV6Y9F2NYUMmb73Feq5pe9Pbe4L7szv",
  "key31": "4bjXwfMBMih1hBn2nCfxoYLPbAfs25uNJx1zyjKcLcVKfhHUz99jiyKXfDUGcLQbBAFWtoUtcRJeEKKH7WM6VBLu",
  "key32": "2yTjLaU5Kx6NmS2TuNu3d5S8zAtyrGcigvzp6wF5fwcNf3M646ZN8dMNRz7tbr1SXFyCUu8VKaiLfMgCKQqnA4q7",
  "key33": "45NmBg5M1ydipX9dKG3kRhgLvsUpjDFQxPMkuuQU4gugw7fC2JTLTC7ZUJcsJQFko2JSx4ggafLgZ4VJj2QHdAG9",
  "key34": "48g4PY18tC5fLCkH4Nin2kFQF4JVJzq2rLC1y5M77xiw4DDDYTREhNXF596PYk4w7FtBpZrH1Axe12gzQdq444oW",
  "key35": "2k5NJ82ztqQJfvkatY53D7rdTLAPNY1deSSi7UQJA5Fh3n1pkAPpeqt7LF1XcABi8DP4Qf3Ju6GdT1jNhGiGsBDT",
  "key36": "4BNydyaxzAZnwU68xjnf2RRqW4BUU4fUCv1Nwvx1GRMPRU115y9znr4D5kNxZgKyUwFwjEBUsaccNM8ZWhLVZpQE",
  "key37": "4hVGJ8dNvZzBPgWYfSwAfXzWS558H3WUXUmCKBdjaTm6q86VErzX36tSwXQbnWEpU668EZbiLV7Z3psdP8PcwMZJ",
  "key38": "56HBP9Wwu56Y9opC5fBfiLkJqR79m6AySiC5VpbofVZMVAMJrfqLcB5nGfrsw1RKSTw5koTBT1eZKVgWzMWxi8gT",
  "key39": "3YmanFwwEoNZHC14QV3tgUfKX4QQu3aaKMBtZPhrLS4i8qF8iytW1EKc4xuWCt48Z2os8ZZEXgDNkRvwbuPeaXR3",
  "key40": "dNSHrKZRvnw6pVRgLqJzk3iuVARhjf5bottHYsWkxaVarfF9ddC1BzkjrR9QWDtfhirFApmGyN1pRLUNqZhCtHb",
  "key41": "3do1EPtA4MECB8xqxrUwDR5orUU3mhCsDA11TXLyxLuMhL6z4PUgmWDNR7h53Wrv5GZZDqwMsdiknJk9ykRNibdn",
  "key42": "5NfjWhwvBG4LKWcn7f8r4fo7cczrFmxJQYPaUekSFjHtPh81DKZdz3UEgsusjbLRMhQbT3LiiHDUWESw5BeKDraD",
  "key43": "5EJRjmoPwtLba2grYtMhjaNCNrWthbBy7NzKhW5bzQuQjUNgrYc488jxcYFeRrH2G7wRTwWJqtq8i9hFkSMCg92e",
  "key44": "4C2xyQoXt2F4TUyVJ8DfFvLuWn3CsHaFcXsDBvQoL4W3NWCg5uqRN2adcZc2Jes1eV2g9DQcATyh2oSmpJATwkmi",
  "key45": "2v5AfVZEL5wuRan3ejjvpvWbfUdw6K8PjCNnv69Yv7vySxSzBXnXPrh32rXWpr7rtETVx1AnxckkY6pPbYkAJ5H3",
  "key46": "4eN43gjSnE9R4b8312asc3epK4C4pXGu1tKot5pGPdD2Rp3hx1KWNwRrjGxNLSQsLE9S5saghhwNkmAv2fXh5dYg",
  "key47": "32fmNFgcj3m14v4VJcosH6zWjx5mos38ejpGDFFTVtNV6rtZK7Hoq7n8X5jizQKbMJTtsbLntwdLfekGYyD7AazM"
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
