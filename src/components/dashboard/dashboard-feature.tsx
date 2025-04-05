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
    "419GZCBDS144ZDsMHZkJK7gccdLY4fbYgEgCkirk2hEUaVMCsWoZYCZKG9Es39saLTCp7PMX6yB3JwZ99vjNrvEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TywXdVP7oF9bD9yBPez7WjJxjzTx5RwCRuFMRgvVZ6Np5j9Wn3KhdP3DNL8VLDPFGkrv8KyyPd6m3jjXDcxFs4",
  "key1": "4SNnwCBWydxvX239hDLRXzjLCdNBzTNXzYV8qjxkF1GG2GAFc9kd44hc13ayVFR45s37nY7dxx9q4hub1Dgxg6C7",
  "key2": "64Q3qkpbEzjrRchDAHyGrqWagPR5ZwNSi3pPHWjSJrsuufXGdGwBruxVekSxSTmuSQFygc2g3PyzPayMDnhcZ8zd",
  "key3": "5JG8tZcNV6eWNuy9ufhMxc2Bb2yor3PozdcDsDeNWeSezhzgcDUKBgP8peFZ95UWC7obZvyiYPmfimLdK9zMLJwJ",
  "key4": "54Kyjv2Q9MFy2bqLebnD8VHUsmKuztG2MaQRwNSjiB5SxBVh2n5nWsG5X2TnBLuvf2w8mbm5re2MmVeSPM5rJ56C",
  "key5": "3vp4R8ChsU8W8FQbGYSVpCkjHBhV6jnHAyuAnKhV3h5TuXWPrhiLfbThr6eU7FqxTMcRwu4zZj3wjpjCrzbRqkBj",
  "key6": "337yr3eUJMtRYomFK3faBwdyyQBrafkmeXVKcVQZ33E9PNvbGCRQUPARL35o81SUv6taiAMQcWFu1b69mBDuEkCh",
  "key7": "5VsmxRMrfuzVn2EUHfrdcXfAxtJNhnqq1xLuT1yGPzmthzEV2sSwQFc3FozNQUtzeTQfZ6sJWbDQRrSn4VdosQ3f",
  "key8": "4BE5HpNCdxL3PDfCwUT5GCB8ZWzg8Up2x5ofUSps7Hb4Dp7EwgE5rh4QJiKyvhZg5LhcFrkD8jjWNYSpSVobUkBd",
  "key9": "4J5yoM3HSJVZXpjhpFsBf4jsTokdJp5hhZKeGrg6uN4nhS5VwyTy12jxVjrr1W5mqmuDMJ7SS4PGBG9YVBA4yX5F",
  "key10": "3Yp5yUG8mtXvjftDYUFjFCrfWEfopiHpv8AACEP8chZ5vUt3ZnQz6hG1TiKXaB6UFrNpVPAvqy1YGoYKrgS7GkSA",
  "key11": "5Rn4A1im41yrknmTeTU3KY86vyVRgmTp5Ts71N2NcpAsbT3Pskiukj8iEdMGn3G7w6V9x4mXwUteECBoK4C9QEWi",
  "key12": "WR356tHc2nw4xue7u9KnUR9cgiGRiRKpL1x3WdbkMMym8CAwAaJyKNU4zayciBZmn6WyQ7bQEYG3pKqZscQHBQ9",
  "key13": "5NK3vM8m3NTP1toKaCfujtsmDgEUscKcmGcaHB4kdJVqPkkW5A2JoAqGv6Tk4cQUnc3aW1MiRmGh9tPC3bD1feYP",
  "key14": "5Rn6GRum6dXf1YBGsSEHgB5Ye2AX6HrCf7oK8JxjGn4Uo6GkseHo6ZjRBuKPPd6bSigf6KTnUb15R5QkFUuTU49S",
  "key15": "2724oMF3TW39owKoB6pWGzueNNwE8NsPtQSxaYyg9HwJghkfcPJyHg8ioVgStMHaxXhWZE3eHjbSzxAtvZcYmXw8",
  "key16": "JQhov4SHjuNzNEh77huYo44gzkQU7f5KoiPxj86eRpnsbHWCMgWba1Ex2GTFn7wh4uy36jzXxZCkfmsf3UTDXPR",
  "key17": "2xbcmxkvUutJpRtba364kXYUvvMZbEV2HvdFiyX4y2vXeYPTK9m5bEGB68EcxkQv5yTnzGtFweqoJc6oS3oQ2DtQ",
  "key18": "4nxDBMm8KCXWtQpCypwjxDsxinzNuXgHiJ41hzZvhTgN7AVTv5XWmmKMWK2UR6PRk3TFLcehPpVJr8AHdMx62gKw",
  "key19": "36HxkNj7QA4wisAWepMqtQVw4v7hy3u1TQ8njAybfssgqA3xCThe3hFNXeABcYZYxUGzy3X4eY1TbpLjcaTFsLH7",
  "key20": "2EepMuKszuyx7VwBiZV8wEk3DPQs5kEmNkQzT9ieoCUteBV6DC66u4rLNK9wTrHhJp6q3RJD7pJdUNtFGJBRpb8U",
  "key21": "5PL6eowS15JuxwGg6BGdsyo8KDXBNJjEQh6qfSLhAkfRU8gMXdwGTSkXDzTXJwDuAMwWkoD87ZfQipRLCphPp1XX",
  "key22": "4xDeFZgC4fBFJjSWsz4KdnUbW5ZocH3sjUTQm2FwsibBDTvEJoJLSTg884beon1nC3B8GgTqBZf4kmurqhnDeMUX",
  "key23": "5tdwFohzReNP71TTtGTU8QJ4mcsaKaVUnXPtA5RmNFvj5fmv5Nk1e8mqCQvt7fYtaeibsMiw1v9i4ZBXrq6AGpst",
  "key24": "4ghJvrFThXNrfZ1WCmLw2f6eeoNYeZxsCX3QhXrJJy59pr317vQxCsK2huHnnL95WFbmsfioshZhdpRHVxrXgF1d",
  "key25": "Co3NJ4C2MUNTcYbstwYhXKNLqQuxEHxwKJoerBH4pQj8nkyf3BhVS53v8Ygm3FbPChKA1qhHmbnwBro57UUqDKB",
  "key26": "2Jvt55zTbT5FYdJtqJQT2XjZD7KBRaWdkyLzxNZCD6nyhpfQ3L1i6XVydYh7xG5rRjXzRXFGLPxyHPoW6eQ7PFyP",
  "key27": "3HAdTGGqvsTQEmbmntAXMVksyTFJVxQqbNLQWv5N1bh6cWhmq4Eg4uwsQKM1RUpyYgdCgHrncPS8vZwWJidgxkUL",
  "key28": "C6ugbZVF5X99HbPJa1Ytefh3WFtbB9mWWpD2wFCGnDH55ZjYRZhvta7mrEtTptc1HJJCRDfaZSTECMvuW6HPdTM",
  "key29": "4gs8eUhW5tYdYMgSXF2jAMa5TMhNSyRJxy7sJNmSRYUXKtKFZQev23bvBUqdTMbRm9XNRWq4drdgLE92MViFFHoS",
  "key30": "4a39vomJxxWn9P9KxEaS8MCs45shTVNH61S47UUCPmFXkEm37XTCf4ZVhiXzYhVt215eSV7rbvNuXQQGDeUPdyKW",
  "key31": "DDv576Y1KsMFwgHMJ91mKpqjEiaZabfKvKsm9TpRdJUzx5beRtycMBUsdTasUC9KCU5vniw3XUnw2X1Wrjj8fZY",
  "key32": "3hRqdGufuuAu3UqXoY2FSUx1go5JfywnzfEaF1t2ApYb5SasxQp35pTodQ44jTPEz6wLUBCY9w4zBFD9aSQDqmkE",
  "key33": "4gcm9G6uh6Wzm5qYsPquBf8H7HPKRvS1E6quR6Hu3E12T8DstQDgmU3wDG7RxbamLuanosjaovo4H8AnX4pBhG46",
  "key34": "4ASzrANq9XGEPiteVpAPoTfDvaaioB5sM8KbG7Sp1peaA6TWvJgFwFgqH87Mrw32CYpgUUJGE9SpMjCq6GKjTQd",
  "key35": "34zFHEddkyn8CnDrrMi7qJWo9KZiSUQSYqosFyXr7BrbuLVs7Qy2511DERVxsKhp5cZh4QDLUHY63S7C88vCbAfg",
  "key36": "4QKwWHAJCHT5y9Mis89U1Urtu2dVpyLFHqhhigC3kMS4kcUf85bBG7gCqnwcCkDytjUSfGt1wLu5G9Fz4LCEdc39",
  "key37": "5beXFdawvo8PCchsbsve6aYFP98m5YPqjHuz3S3JbZHv1bmbTTaVNJQhLkTqy1ucY5wjzahhwuk5qhJD6Bwpdokf",
  "key38": "r6Qi5q5p97GjRfudwqvX1WLcN42DfdVkyFmyMZJzMB6fMwKeCT45XpcjLTtiPKYr5nQCTNuW6gXFPfeW1c4QkEh",
  "key39": "3piHqLiM4KAC9RQZL7GjsnfsS6hv7eRjnVtev4TB5P21Uot4XoXMBm5EHL8geJyeJHbjb9y7BsLHErNQMcVSRNgS",
  "key40": "3ygDTiq4Edb92btwD3rZmcZ2Zoa8QhKPeFcuQbFPrywbsDEMmLQXVJfiZ9EU7JLwLL6LgFatvhAVGYbMD2q5Euey",
  "key41": "3WvgKpi7vohsjH6YAY1JYdbRjLkemWXMwfiHGPQSaJ9a9jx8avz1mX9JUh8eoq4kztrobsLw7uGXXKotdvJm43Po",
  "key42": "2B4FZmQyq33ZzfNffVhMmJaLBfpch1WYmKuMHuXqfcDcLAvqpYsWW2mHezy5TyLt7gT41Q5rKPHBVbWgDSkhnZ78",
  "key43": "38K7bhnYXtXmBnNYzWyymCDRND1ZXLcxaRXwdM5RwkHScN82Er7jFwhLwGoCk6iQgJXD5MGwK9dDa781zk3k8ETx",
  "key44": "3bStPr36QDfAHSXw2iJiwwpjXkwk9yCWdsAr8QvdY4dAwz9wo8bZ2fJAM7S5AQJUtfQqBRgS1XxtDAcBCnw6YD95",
  "key45": "35JJWmsxCceVWukaGbLw9wsUwwYCGeAQYupksP1PLGaYZPmaWUqc8xwyntfQGKvevGMBX8N6ReqTuoAihVdRGmcV",
  "key46": "2Fa2m3uPZb295Dd6DH3kcgUXFzroqJtyr9x8YkcwjoRZcaGeZx2KvrntTF8WYT9X4QtJznKJsqSJF2NSeSRaogDm",
  "key47": "hUTpzdLvbaKvbk17GknhVVKKtmsSdtqHWxpfRYuQ5smjWXk15Ufw5nHqVjfhjCfAEKBa81EvPipSurpRwPVTb8f",
  "key48": "27ZDm5URE4bo1J5GsuFWmf7htZ28FxiokGf43LRpxykXmbcfKyzQQRCJWZhdQgoSLPbYQ461L2ofUGz3fwo2StxH"
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
