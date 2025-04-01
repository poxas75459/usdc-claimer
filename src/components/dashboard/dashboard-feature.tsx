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
    "5oPPmAwSS5Z3xcX77SLv7mwNGtroQq52dsGwXcTj2rae3uPNwDwg5RmgDqPGSVAXg6HuPWWYvfh3fBKNFrkZLekg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YtftLNci4gntdyEyD5kwupn8aVNAko3weAqzKyb5CpJri8WzNdqojsmT8T6odXRP7vLuovbcAo38mRaufr7vMaB",
  "key1": "3iTtfkgD7qG4zeEN6QkYRebx8W8v3bgHzBGrbcWPATdiJYWxYDfJt3CJj3degZ8HXDVnt34WJzKWrGbvYA2Lmoj6",
  "key2": "2e7kxo79SR2U7w2bpby2yg4e8bamf59cvb7wRBDue5bhGxRaNtD7jQoMuQDnJ8Ngai3Yb5YKmqcv4gvcF3DW4KLn",
  "key3": "RrDixNUgbYeExtsM2N6FSvghkGmgvkVZkwgKAodj4pKAbrgbcr7NPpPQZ2hYViA6NjQ4Vj3PHM1t7iZwRrsJGG2",
  "key4": "7H7PhFdYmicoLNyagaq1Snmf4RWfCyThCxbKDtUBDctC5yGkRyuvXfqjeYF3hvgjNufnbHfSKwuNyGXGQE87YPX",
  "key5": "2bemk4CtPETFiEtPJdyzuUygCFardYp7FzXkav8nzzmZcq1ddBLC7oM7ANfdK2idxoGXm1poSiauJpXeCm5nbKYr",
  "key6": "5BLnhjW7ppv2VAVqK7UCkNWJLyXbRSrbEW5MpwXpwVfZQyrbpdgNrVHzAmWNqGmM2CRwLF782YxSfSjQwMx5ZbYh",
  "key7": "5wmAUz8Qkzp4f2K6eQrVn9ALrmdbDnqWHEMiFtCdRrmDdCbQowA4MLNLL2pEwFU2JWHqZUXZMxVzHqLYATMzkyY3",
  "key8": "2yKeFXhzjt5JQzdSvHNf15CFZ7yYdGoiFY84gzgysDsGqvbPMpf7Utb59ErhjNpxJoWvEMKtX1PWPF4Ar54AB6Cm",
  "key9": "M6nfEiiGaJbaQJQi2nRuPU14SbuG2koFGgxRhsCqaqGR8jfC1MF266veRAyjDq47s9pREKtez3DRQCcsDnaMDzc",
  "key10": "5BxdtWywVGhjYUWpY5qheCaQj7CArxqrDxAAMEQbnsc3toh66ppQqLYJp4o1u46W3iNXvvM3chrD7N7Bb8tNX6at",
  "key11": "3NSgtDW3yM9Tw6AuzRCsw7QYhohyhx1wstKbzqArgoMbp2RAm5nEewv9maQYVdQhrUsSJao5kfTBqfEeBbWSb1K9",
  "key12": "4w3LY1hhLaSyhjy8WMR7ymbSRZQ99DWszgXzKkLXg94zriePTEmdozvpKaVBgBRgeTbQkibBo17eYZvqr9KMiNJ9",
  "key13": "yPmTrPzq4svFAJqDF9Mn8DUhDkJQsRtiiqS3EJsXvpMQSBgVB4xpiXgKBAz6TtwEHZj5LTMguBAP5Dibwp2MWRC",
  "key14": "4dvMNno6ZJdtbyTwr5hqqiuG1UZ8qCuRCiwAqtoV2Fh2LdUs9nTHyzcKg88FWNjy3CuohgZYrxtyuuonyd7JS5t6",
  "key15": "YBNMRPkDDucYrJcWMefiZfjZuxgSrGSJ3DHbPVtEzJy6qQPZoQmevZ4HDrqGywCCduYX1TK82WYGAmyy1APkgvz",
  "key16": "4xsT1Gn5avCjrerSgWe6ng2ViPnbeui9vQiEnecYj2uh9dA8fcPw1sbMWwfxZDcTvhSNEJMeJngnpkPdMkxSgrpp",
  "key17": "2bhattvfwc4KAcpYek4B8RVfzdXS8tzvADDEYso7WoDgkbCujU5Yj4nkZ6rByfxKdS8okSFi3rXwY7ZX6Dd9RHKX",
  "key18": "4caqZoNYcbg3JUNuk1Sdk6wXifRf5Ubb7qXiAAVcdv3AxAwgfngdKrpn7JBSr6kD5Gw445A5DPRavV3DbxousCtH",
  "key19": "4z1Y9KxRsoTddtJbSPjNJnL57UNJpyh3LQh49M2NHHCt8RaQZW472ndXysSbJGQBpjrHCEF2H9sjaBVVMTxMhWBD",
  "key20": "wM9LH7bqdgM3YrAF1HqUXPBrRyptVpCiCUAuzKwCwgnijSwwX7XgxQRdNnaMmiLk9XcAyNAGEf7nmahiQg41Lo8",
  "key21": "3t3Yx36wwwBFtUjiNRcF1Wdk5uTGHAuzgnfJXcexj1ue5iA4ykj98hbgJB2cgYm1tLWcSpTCpFkcK6sEgUv8bbS4",
  "key22": "4WjV2Bj7tp6pHscg64pb3DXUbzhU6Vn2ePpog69SF4q7P8riX38XrvEuHtcsYphXV5ec2npLxTkycndK9737hKZi",
  "key23": "2Emgt9QdFExWikKuqfrkWrzfGGNbvwcFbW3C4aXYZ8ihxbwat67p9K5EHUDJqP5n6AcrAb3UqfuC7b4GDThbrKnA",
  "key24": "41dPf9RUyTtQSAUQ6sU87EWpFux6qHykUDKTnv7j7LsBgimkfqJpU73LtxfZ9NZXQzDv9u3DUw7YdpJQFhUiEnBn",
  "key25": "5EkrFXrhHPviCwqM7ECEMioRbADSXtaffvTMx9xbTVSXJG9S4fMKFYuhrkKtHMJJVzvrmJ7PSA8E3fXcbqYaNLng",
  "key26": "3aHc7SbToyJ7ZYUcg77nyacsLSjNL9tnfYrwgV6WrSUZyPKomirFtCE5Zvtnxa1pdesUb83t42Nbm9YKU6CHdzMN",
  "key27": "2oqh4TJp9QTUgsQxy3UZSqNZ37haQJ1fbiFqpsptP24N7ArrG6XoxhG5uTxKFvDoqP3rgg1XMWn4MDgfhvER4vFc",
  "key28": "rudVVrWTpM6zoB8nG7b75oFCkScUjhBd2i8XP69ePq2t7jy9DZCXJTeWvDptzZRsqaemhMa2wMyqsDuGkaQxVth",
  "key29": "25NFCFSdsVaRiK6GseTTArZhcGfbixudvnbYyvDfVbHV9UKvM1owuCGtbREXzBGDiG6bwd5hTKjGiNtcGMfGnFiX",
  "key30": "4fypotwvJQAatVK5JZd37bKsDaR3x2CkySEEkDcQVLJ3ashrt5mXiTrXCT1EAuG8cTJQxM1CkLviJG4bymvhq7Tv",
  "key31": "4MBfHprU2wWHKGzJB4HpgpdjcxQiTin1NjuLdWzvc1zBq3eo1zpAGY5pb7rBon7wLH1DCa2izPYSUrLMGgv9QYyD",
  "key32": "2N2VtW6cVnWPx6whkq1bTQZrNLrhPx5oZQjRVegUw7oL7mWCeJvDszqaNyXMNhBBd6J43fY98tkPvzuWgSSZomN7",
  "key33": "ohSDrfhHb4jqS1P3RLYqP4kUaEv51dn5wrvyzvHdNz36BF1fYjCxDVuB6dBj1UnQnTsPgXx2xtg6Lvy1sc7ptZC",
  "key34": "5XPe8dxUmgXaMX1B1dH9AdtNMXkjCoNZJZ6LxDdrmxdNFrkWq5HaJa9AKHM221gGL9PTRjUDMvaPGKWWQCsPd2ak",
  "key35": "5n76t1s8Y1CdZqzgaYvd33NHByG6VtW5UY2rf6nURPky5dpK7SddVsgFvrALRrDtRWSJeogM6aSLQ66YGDXzQBdL",
  "key36": "2LnMpfdqBzmJ6Ex6H4JhwuLyYEbiB71Fwquo2A7TYZBZQMZcgrWaCRf2Se8f3SgbVpme1VF4LmzdZ9YGUDL6SHBM",
  "key37": "3wqeiGG4DfPQ8ywTj6gEMi7kDwNNBjAr44vq4nduTD8N4LgVRrFyn4TsxGaLsxPc4XADCJfuW9dNPrnf1r5jYjPM",
  "key38": "4xHvbm34QF6p4wDCPdEeS1rkLasjxzo1NXJaf2TZ4x1ucfwDJ4JmehpugbGFAauCTMbPUQzLjb1xx3eo7Co2qiiJ",
  "key39": "3aFUgyVPq7efGb9vsgCH8WkYQxaWwBuHKis1omdQSQPrabrZU6wFoqF4rRLCSVgQ6nvKrBXxuwXcCzZFH5GpFNJQ",
  "key40": "61BxjZLNqPgGruhFh46aPPiMhAZ26kr9bK1qPR4APNS7SQ1RQJoTjAeTFDEjnhLgwdC4WdJRnb9EoNguEy1kz35V",
  "key41": "47PLKaJKtnZ2qeM87ncNZbmUrDHAkSXAAhDAUKUj2ty2job2exGFHiAn2FWquW9vDC6z1SDttxfokPDdfqL79tCR",
  "key42": "4FN3cbxeu4MFJtQZoVW2R9qWFrwKs3XPaY9N1L6E4djn5Ztb3crU6mSm9RdnBpsHVU2Jhm7vcN4roAdJQ6VEJsGw",
  "key43": "3GYhh7DjxLuCeBf7RDA2ZkBEiAWaNVRnpBmNGBFLfi7us8J3YCJpGxdLzxeCtgtYjik41zTP9q3uZUCBesQEuy1V",
  "key44": "Ar8raD94u15DfNi2KsCHfZfQ651Q56iWpYcrrhTBJ1NieDeq6SBmpTjLBeLnfxBg9R97FvkF64uNPDDPmM93c9o",
  "key45": "5z5j3Yz78zhVkQZubnpZdWFxQr4NdFpW1zVhSW8vv3L34E5FgwpJzRQczTNVBHDXjnzoU7N9QCRiTfBzuRfYGEDB",
  "key46": "5mz3fFcfP1t3Hg98afCLwFoGg97fHBM7uYzTzdi7PZKPrNQ4u1aJmTMSgFgmABMaHb6RqwczxykK7Gx9C6pjxgZ9"
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
