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
    "5tVBw2HaNKo2vNci5TJ4Px5YhY3DsYU9F7jgTxJZknCc8dWL4hE6WjJGg4Dij3JqCwmfrN2CApeatEsu68WkjYdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fV7XB5mUx4yqJkPfNbsYurRwZ8xtxc4E3wmEpaiJPTm8fi2DqA3EvG7ZAzfc5A7eBmidjSxGWmWiuy3Kv6UxAVy",
  "key1": "27tpBWnnoHfcYfEMXHhoUa55ZLZCjRVopETjZdwiga7cCsCvT2eotv1RksyzNF2yaxk3HA62BhGMM3173tTyNLp8",
  "key2": "4tcE1zveTXHZ1DFKUKbuZq5azWj77TFXyaiaCbDn4oxUF3iShckbnDaJH92KnCWm11UDTnsRhJXbCZaMMKsk2sKT",
  "key3": "4DNidoWa3EHLGQowtzkrWv9rKaPhtJb2MgZanWE92ZUHZQjRjUY4fPfcmr1NVaCrD2JsPm9weCdBv3eFYjjDe5zg",
  "key4": "3w7oPBiWTpVHJVjbn1msTGwYQ3itU5qxsYMK9rR7yL33LUrodxwLbkGhHoyKFK1VcBnuww6cqXp28hVnHvtf4rqL",
  "key5": "2gk99xTGPyha7fSnhKZnNASn5qnDMdFcG4y9i4yLm6ySRNSFFzrz4UvVzEMUut5HgFeo8yhfUPa9HomkcbAPTmdh",
  "key6": "498FnKF7TjQH1ayf6ZCz5yAQfH1ESEGrKFCaxwpyUL6Ln9S67nk5ayfFRCP4rN7a1vbG2Z9VogBKdcy3t8Z5Q15r",
  "key7": "261r69zaYkGX1kusCPEdSsHLt4yCkPhBuPHBfRSrRjRbCpQLpRQExqq9CGNMtjgiLSQooSMRfnRfFTE8MkiUU9zX",
  "key8": "armMW9RMe83WyRZhxCP9iKiqynN3bVhSoWv5FvP1vg4UDTVvVdS5pgEv28pjUiXpvLLAfYG4cNhHY38zQSXbUyD",
  "key9": "5krdoqAzDFbQjModztMTVVA1Pc7nNzciiFeJ8REYxHGzuqVHjKGW5cTDj7NWj3f5FDYoptbb6VMm5EUvWx6UX11a",
  "key10": "JaFEFYKjkDyepkDpNkpQo4afAxNjWWurWsmuavVLAKSrqqtuCwekpTAyGrYnw3z4pG5hdXDL6GJC8ydbzwZaMvn",
  "key11": "RNXYvkmzAWTEWtyx1zQZZQpZRxGXW4hrJBweppaqf1jkiEMZTUSbhHGgAD3xA9QaKWJrEpSmRCWvXRj7Ljibm7j",
  "key12": "XkbQZjuQ83AL64oxKiznjhHCeVWi9gs1cixMiZoaRtjJ1rLNshRpkou8VuVTyi377hBPeBaeZh2MS6JEFF3Kq9K",
  "key13": "3XWdMAyS8DsXYx8YxHCEX9dYLuSfyPE84N2PBr6MP5Nba4PoZU5gD5qqoT8X7G9dgoLb9KuffyoaLXbjHtVV5yUz",
  "key14": "2SaUQA64qnDkZh4CrYN3uFwHihDx9kvK9ewd2ZE7CS1AieVG93bgKE7wAdSWuCiSkc37gBJyNZDwQjQAcLwKSgeX",
  "key15": "2MJRGXgWzMnA5cVHwncEcHV6DzCpQVsrsxDeu7DNosiETmZ6VxS3EsC832ALR8LFKy3TBPGW65mCMNjTLgUys4TJ",
  "key16": "JgXZf78EdZqCnz9tpfDJ3zuUfBb4Xj7XSKLDjAx9LViwz7AbY6vnp8wfQ9hSHcHNwutX5mL5U3pxpNZ834CcXPe",
  "key17": "5d9NiQWt4CZH22R7rwpxWZ5ne1r1mxYLHGkb83bos7VLqh15LoL6HfkcKeVocGBVFxRrqgK2AgdSZzfBxGX5Hcii",
  "key18": "5LTjWftoTxxAP3RdMZUY2knqiNGttqBndqnR8W6upyhSZmAQNf7hJGbTmsS8Ux6KTx65YkHSSGcbWdpcHEy6rsYp",
  "key19": "QaGJYst5mr9C1Na3gVxxWQjfVhpg46tuRS9JRcmmK1WR7opTLuoRTRJhZSErB6Y6vyYrz1UQDam9dhvANB8eSH6",
  "key20": "6mXFvLn2G7WuB7eUktqaZZfyRHwZmHChh3MrSGdHKyjXDaEuuGhZJ7kWWQMnRLtwh96vtfZhdMzmuxvuxZJqTRK",
  "key21": "4orJL8j1qbKjmkDQRyY7BqZx5JnTvR53VuzgVo9U5KTb7c3eSmsD8rq9AcDuWHzeKxPfTaedZZ6gK4gHFUsM1kr3",
  "key22": "2H1G9s4bgftBhM3ayaVMrsketWLiUh4tGA2AZnDQC3MKi1RDWd3pWbWwGi2axg4vWWZbcsvDq6B4WJajki1JCfX2",
  "key23": "4sdsnoAvRgx1Ry1sszhFkaTkR58nbG8XLDMuz9mKEbJ9pbUwFvKgfUkTFLuv71r5cUkJyVbmyxNzwc5Wj9F5n6Nd",
  "key24": "1xQJiSrmTE4KYQVbz2PPi9ZpFMcqpeqiEnV5goZXn17ehmmAHbHZav2DSE4ic3oBcuwovxzs7NVJBL74V33uE4E",
  "key25": "2Njrm5EFkpV3Z2uiNuDNv3YY3MVh5Uhszy8DbQ9JjkiPohtg1MCiknhwkcjvV7Bk9WgQR9rkLv6zcKSbkMSTkZNo",
  "key26": "3GnVtfPv2csUWHmLQ5qBzdBvqF8MGGTb331kzbsHSFthUJJuvbs6WJivbmBFYekoAQbT8wMGjkHpmRbDbuYYqZ2N",
  "key27": "4rnu45LVQJHStMLJ6R6hSM3Q4Fxc1iFgkfTUycpa2n7tu9QiEJGapDwEFQ9WThTrTEoxVaoqkxtarHsbW359nfcr",
  "key28": "3swzn8PW1R9mudrMJqT45B75qfJzHSQZ6goKKfwvvHGgWJhGXX1iZSLQwC2vB828Z8t6PwgtgdweAqKEWxTsZB7C",
  "key29": "5Z9ddLbfihyBwSgsQBCytB1haveJ48iGLFS4zPB8fq78XgfmqQAXYFNNzJVMhwyrXYmDBkBT8FAzHJ94UTthV3Q",
  "key30": "4YfMYasTpdCQHbHxj2cbJu7254aY8g9kC9KzECYw49CNSmkEDY92YEy31EgLEZyGA3d4N83bDTywiVfDPBgNtRR8",
  "key31": "5iu6TEspxpskR1YppcmAjY3U1XJ3nVFqEhchd7e5bQYpj95GNqQDEG41txTaZdk4EocBuUBwRCFafayRKrBmMKhz",
  "key32": "2QroPso6gFtvmfM1ULa37tWcWYsVa6n1LjM1jrf4eHDvAKroVj5JTwNCrFQqsiTFeCvLFgoV9TkEz9HuHuY9S8Tc",
  "key33": "ndRZxg5Ux6KMqnbo3BXP753FaC1GUYuSDC5zDFuqyrWxtq55RbfZXrJUDk2UXWPwXE5P3kykpdqY4utEFirFbe1",
  "key34": "RzMxUtHk2sydMSRB54ARZiLmWqxenk2zNWXKQvqn2fq6nx4Q9H7MXvwoqVdAxNVuJ8YmTsWDB8eu7fCyf6jqwcT",
  "key35": "5uuZDS7wVb7viYN1igpLJyMvEUa5nuEfZfSWEWtVuXzKBUWhsfTqBzRXSjAAW27jAgUnkFhzfjZdWaf6s5tcDnrP",
  "key36": "3sCLmYEbwRSqW4pM8hpcnUhfTNFo3iJP5uxWhvMuYpUwgh4QGfmirgUCwavKiTstQhunaUyJuapffa62moY8PK2N",
  "key37": "3f4uR5S2naoY8Zco7txWdQ9M2M6Csk6sysCQcnBzjgZ9VtVw9wqhPcS9MQFh24bZ1cDJwdwAnQNy4gZ35Cu6J6vw",
  "key38": "RkMckbu393ERhyfiWQQfoBToS9Zo9LkFuGoHZWQtCo3N929Jqfgdi5CrxgfPotCmsLCeLpUeWuHdzdd9DF5kqYA",
  "key39": "5BTf96LrBbxVKDCqAqdKid2gtToUwRRc2XFRbZYKKdwcwMrdyjgv5UPaZTrEqBtSRydtcBVhLju37fwZjBV9hfup",
  "key40": "26Cirt2sMD2TmPe3apTh3gBJRqxt9vM52ebeietPXiXpo3yhm8phLwwJ8Q5fgpWXqMFvE3kmdWNs8pnwx5psz4kb",
  "key41": "8ArsMkTvsT5ZAxUBfBF8QA1jFmePknA1chFwcheG9g7vUsBMAnKUwaryB2PgfQFzrSDND2Y2YAdNT4LfEsyVnU5"
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
