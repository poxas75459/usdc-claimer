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
    "nBiTpBdewsNj3CqPZ6Sn6NDm33EPpGjEkzi6bhFBd5Y5suSRPtJThCi9giMmH6Q5rsnfankqDCxvzdjjSMiDMp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fv4umh1Dk4bUMEydFude71faEA4gKdjGoriFmXRSFdskjrWBcZucjVSzzovcV3BA92AcbzW1caqVoZ6RVPifYLX",
  "key1": "3ARTWzD5cpB3trkQvW9MBrgyyugzqQzVjNnGCzjmaCkKpN1MxfDtyURguY9XUfD4ykvSP8Qy4LeePX9BYEnWLuG7",
  "key2": "2Es78jfPnrEbTi1V6aBrTF6xxPjpfpGucGbnCiHHCpds7WmVykbUhwAzgEDCdQgwK8twDaXrDwVVNPvaSbE1bPUi",
  "key3": "5aRYZAGPGAtV28vXu5oSejGrasv4HgDzmQ4DNrkutYyjmhETgDUxfomvRUncJmcLZpy3jpzuDDak1jqNYVP9ysRa",
  "key4": "4c4bA6awt993Ua2mkpGXYQBLqKRerbbKfW4KkD6GAf2re2qMEUSYsFwg5HFSwdQevKiEmawJPpKEpQ7bRC1h2u1D",
  "key5": "2qCmWqfmnvbNKda1ALt3HgeSqxx9Mv2JJCZKgYvr1RDuSGYmT1gPYobWLEmeTbhYxwdxJiD7iG2WQHnuPkBaKNqG",
  "key6": "4SE2GSsoU2uskpGytM2f7zDGq8w6VuvT6DjL5ANiiuUiNMdtiKVP9ZBSG6DVQhyqbyT2oDmGxJsdt8F9nnxML1tM",
  "key7": "3ebMaVnZNVWvvYr6jCtducBsWJYGAd36BY1PpaGR7TZfB3PD7EfCc5zRjs9kENZfEtBa2ZdqvVrnxoHF4kbKL6WB",
  "key8": "63wzPeFShGiNGbKAr6tAs6mNgoSZjNJJZTabmUSxjBRwPjkwiyi7B5c4hba65Z9hftTZua5aohwDUBUgaDN68SDN",
  "key9": "iwZ5B2hd68VBFVoBt7rtVVudgyytM26AE29dFWxwQGcjbTxLUhQtW4RZw5S6ZorY5g7F7VWaxWeNZUUVknaMnZG",
  "key10": "4orYL5maiduMt2RXC6CDhtqpmqmV6uCd77HW7aBQwdZCCmgwEKVryN1uxqyVuU72Dv3CLURA2URogBsKLNeqzViW",
  "key11": "u42WaSwAhSW8o2ebsS5ojy4cfRHEc6Ad6MbtZCwvweGthXXJW7fUL2H2bspq1HwimyH6aHNjV3GdNvvPa95Ao4z",
  "key12": "5FgzC1XbSr2rdK9A9xqZ6sAmPzgsfYQEWenxgxD5pisGKgDSyuRfTDwybxvqVfp19Q9B4FNywAyUc6Arz6kUtXNf",
  "key13": "64LLCgmWxkQzr1J3j8nr4BhsSbr4rdXkroLVSeuxjbXgsBDZ6WJGtSKabFqq7zQnHnMwve6ZgConhB4au9VHgg2Y",
  "key14": "2AM1z6fQG4n2TR2hWrUNiiqvtXVDVypsq6EkRaGP5TkEGX38yqfzhQ5wcZ48SPS9NwnTxqLwGPKak2KFR88rb5M2",
  "key15": "rEJw8D2v27NRxGAF4o7wiBadwn1Vfu4YzVZDVTXfCAkQL6PJx5NHqopLbSWBtv4BNLxSenh4aUoPayct6xp9q7y",
  "key16": "48EeUxGu4t4jJvvkJpLwvfhpMRP8afj535grxaYH4Gnjt8waYjCLyh34JQjqBmK6aHoUx2pvKLSBRgtSMXMUh3VP",
  "key17": "21Wp8GfMTSVdS5RxiLvkqeWFBwiczYggWZ8m4chHo1hzJY6u76LVKZLxDsdJyxwsqHVrw8h7uMRMJUdo3GZjK7ep",
  "key18": "hKRVgqAKWQCszB4fjmCi4sQPrB1fdaSfKo3aQNWBfEnr3uWgJdcwCgTdikZU8YV7ckNH6716qB6oBuB5LtrSXGS",
  "key19": "cqTDfgnbb2cJyipyJb9wy8MePmioExYsKnJcdUYQSDSbGawAi4Pk3HwktnCjkb91CkbrUZgd33yPMsDk42XhM3m",
  "key20": "4dLPyAS7yN7qgH4JrZkDfhYY1JK3wSoaRsr9NaE6xhRT5wiuVKidcwLWEVJn9RmN6jNdyofM7U46Uu7czmxVYas9",
  "key21": "3A7GAxae7reJPNcVb72XkjumAUkVpPkoybS6EhyZESgQ7cmTacumWWxhg6hjnSizLzaPZggBG7wJoLdrx1n2cgGc",
  "key22": "5E2YRp8mQVAbSUDQnFKi1uBrY8BmabXsiaLYhJXp4FzRBWam43YzA8AvA7sBVAnQt5JvZA2fc9beVPH8FSZm6Fv9",
  "key23": "5oAByZepG8Ko22QsChJa6aXyZomS3ovUpduxq3MEtsmkcbbqMRp4mjvVNR7u6dmSvA1nQwLvBsUGeRKUo7Z13KZr",
  "key24": "4LLbSZ3op1USCQdQd9VeAfuHPj47xtXX2KUqJQDoEhwLeP6ryjz7cnsoCHVT2k7ZjqK578KchagxmedDmVKHbm99",
  "key25": "5t2GbTXpVopUmYLKjY57AxbQzQXv1wdCfcoDZgKjhcAer7edopKAiKKup7bkeZrd5yDQyPuUBVESmsRTwznYWB3n",
  "key26": "5p7hukocxGLM5W6uoMHkgmAQnmuBnU2kt1BqTwUTAEFqTSVNQ2rheF2Jzw4H8b71uvh7mdcP5Yz33EXZ4gUJcrQV",
  "key27": "5v5D5KJW9ikEj7sNVqrGsh4LXRozxraLTLWKLMBB9nX1VZ9CGJABmR4zozggYEzUxcjgCBYR8gKPS9miaDj98pd5",
  "key28": "z6AcHasXYBfWyfQycFw52HCL5MwyarEWnkUFxvAnDJTeuCMSaCMtqLbJFhQURLuZs3NxQwqkw54P1emizMkbhDz",
  "key29": "2TmsnztDW2hS4QopMghWWg4eQZgY9WMCMVZq3vaobJVAswfXcWxQgjxC3WR71uhRWe6cZNt3NiQSk54ChhXGFPNm",
  "key30": "5diiHYcA4jwMf1GuVbUyx1DkJfArvThHpnD4dX13EpAKJbb2rw9zME8bD1LBS1xJVWoQtuLZUza8qcm3bPoCo5TM",
  "key31": "a93vWXsRXXRYg25HqRkd2auUMkg75FNRpEFiBTQN1avYyCGie2oXpGRDjNwxTu1keAqnwN8ri1A57xYJHt91BZq",
  "key32": "XgKbwwBk3G5NRbk1QESJEP9uE9GV1YFFzFvBKr2pMenD1rqgrkrn8xU2v62Ss7WUgWWGQN4VgCpE9kgk8HsnKkN",
  "key33": "3B6Jpcf2ty9Q1hEVQ1dTwx7BxvLibdHLgHibqUpEkwrdE9F1VsTK3PjgpUnrdjqdNZTwd473FukfFVqM2wvJPVuh",
  "key34": "2uFbPKRWPaiTgfgPxSPmpt3vHGeseZvkoiDjYXn9gVkNhgeSk1uZz9XRxJS6vgtdRgUtUTUGtqUeJsZXsdfv8cPe",
  "key35": "6nxJ178byeCiG1hVEM6dqH46MGctZ7q9tBn39zYZqw2N3kFy1k3UvoRGRkNcmKJ7qUJTwvhaT2RwomCugQsVwYS",
  "key36": "3XjMuodAJg7eveB1KRDggMzAzvNPWVqC287uwgcBKLjTCRcYbAmiu6Zcutu5aCYEimHwMXh8nc7P4PcvBEyh6sUE",
  "key37": "39H3YH6ipWwiN2NYZHrBUGuNuMH8awF1Xgbd4nB5LuW9htpXTAyYbKNVcfSzu3pqjXQaMwpwA9xxhtGhLTCKz93V",
  "key38": "4hnhZtgbjxeGwb5EU2sHsnRZcCaGK3jXhSSV8RHR6kPcUzmLABo68LhaxNuTuE81kDDGVH46NXFswCMC3yC6tM5x",
  "key39": "2KbvGqoscqXK7intYr9dF4jg7hxKSzEqE5HtFRDVDATytjtdZFaZ8sFYPuCD5B66CSyDMX9AL5sE4b9wwpFjXiws",
  "key40": "2MRARms3xXxo71fPWo69LzMxu58AWyXj16CT7joArhuyFfnzhW9YG1XVEoWif1kyDgXque73uWwg1ozg9vNtvVQB",
  "key41": "2QvasmMPHkxJ4B7AHeGZy9hV1CcG7FQgUSFUPWf631Eih4nDG1HwjiPxvAjdNy2xrANMeUw2zz5AMsYP1ju1gfgA",
  "key42": "4N1zCoQp8awcduWsH7q2JFewSPHKbaEpFeZVTZyNinwapTiehYPxi9uBdLCtSoAivVpyWDryvtZMYPFNN5c3ggE5",
  "key43": "3BPbE94EpJe5sqTpfBQ5uzG9t1mGK7Qya2FdH9ccpQUmdeNaLcHBoEURsJDizkpBW7TM1etKHNuCAtNFv5VtgKpJ",
  "key44": "3dSUP5y3WKKRgH7k5WHhHcJD33juKNsYfWuPQ8BLqTX5pyomj818cfueoNj4QDprougvBEZWN7mKMYvtg3J9YSJN",
  "key45": "BgupCspEVGXbo7meG3WQAoW35RhnuJqU9QWtXDq5aDrt6ZwxqbxHAzpxW3rx5XXag6ZfHgyXSWQVm69RRHKdfPV",
  "key46": "5djf5QYNB9qfbYXD3KVMLvgdn7SvSb3y2w1hj7Sf3dgdVn5XgaFfRGUZHcdK7WYnirhyRjYBSknX7g65nPHB4tNM",
  "key47": "RU2waX88nGKkaVzVGXpWxpEJdetszzwXvGpq3Ai7F2r7uxXp3zGxQFvWTbeJ14gdBfzBZF5CQy9vTWTfnwfJPST",
  "key48": "D4i359p6DbyW8SCKPFb9oKBYWFVsRPo6ioesAdbcSwqioPy7WsbXJP7E65k3Z3q33uo3JbhMfbfJ8Gu5yL1Ckdp"
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
