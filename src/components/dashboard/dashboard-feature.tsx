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
    "U8DYAuZoRYbznbPRs6G4Gy6NzFKdbjJvq1qGhtPjwjzoEtT6hhqEjZZEeLXZcHGMa4XpMUWfR14LiNa9FVK8UHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQfg4bmatK5zLwPNJpaT4eei5PwLewDYBy6YPVDsQ84FZqYBpGVpJ9DcBU2ggh3FY4CWBugkoTd1ZMLt4Gkg1cs",
  "key1": "XuTn6egxFc7e96fMUYaJgTBASzvw72aYimfKgB7RbgY1gxnFyr1KZxQhqtNZJxsPN8iatKnFxi78huz94qbZ9aq",
  "key2": "4nDtCv2RA4oJBrmhz5JnkqiXvbrnbf2882tWvEi2xPc27Qkf4LbknoE8vVeHoyLgnyWTbycbr36dE8LsDCFVbUtw",
  "key3": "5fMAjt9uB7JwAaxzmd7PYrMij2sedHiqPXekum7Wph8iL6T62i8KRdriXZiTSNusf5AQV4aWWd5yHgm2E48ikMzM",
  "key4": "279MYH8X6MDqfvdERb7e2SpuAixwrxFk3RkEg6pmbJzU1jyASZCAzGc1TLz5JrjU5bVErku3WsbYUpvAj9daQ1J8",
  "key5": "31eYdi7cGcXpSqzwtdqwTctfpRHZu3kjFAWjGC8HF1p5K4B3Y9Hfud6YwPpkntBHHrTEysosCt4D7mjAcMN3kkhc",
  "key6": "34Q4UecYScy9xHCcadBermZ3BZH4JKtqWRTk4MCrPhnQ4YsDYdoDsQKBXYjWVg74puhb7y46df5p1tCrzmyMN9Mq",
  "key7": "65GGq55Jrxj5JzJ9X2NSYEVViM1mhnkXFC9pcuQjUa4xCPxCLZxJ5YHjDr2YpnV6JJ6wEJqD543raPPe6aYtY3s4",
  "key8": "4FYsDPgF5m3ZtTVQE5P5eSjgWV2iawXvNSnSvAnuBRDpbm4XEvXtoqBtNEpqxNfs3HAAQa9Q7GuEqGon5RgHTmQS",
  "key9": "4g3gpdqu4Jfr5WiQZVFa6BrkZuVGi4CNDcXGrUsBUXyJKU4PeYkU2Ctf3K7PAuziKLYfp7164M8jyVfvCa7Gzobz",
  "key10": "YybUneGMDquuog3uTU3JbbWcPsnHf7jCPX446pEFuvYvtwZU4XsKmieVTZ19P8ND8kcjmM5tLoMruM1HE67zYPt",
  "key11": "5vfDc8ssMnvPrcGvsDMYFzUZ42iQ7yY4Z8wLxiUKobNh38bv9PE3VwqcfQN5q5GKdpdfvgis92GoaUKm5v5UjHbT",
  "key12": "5r5TgHexCYUv3b6brotv8SzZ2ji7CvCYEyPRgKShQS1TmXfpqkbPKud8aW8m9uryMhsAYKSGUoL1Rw72k18JNJEN",
  "key13": "3RCKvrkRzhGwo9PHUUxcfgXb2EpyiyJUoeTMHXRypwkc2QVjQswuSPBrN8NRoZXAnDHwasqvwxsqdXwNv1F8FrYd",
  "key14": "oHQwyJKcJgs7cBDbyqknXfMhbkbFxR8Hrb7enepEtGf16B6cvvxDmRBqAmLnZ4Vx6f9KiiQR3WCQwyTgjubNJDM",
  "key15": "4dJNwGdnfZUP4yydj4qsKxQYj3vxfDJ3s6qujwjg65CqU14qZon4HHxvN1PCMpSx4qhtK5nL5HEYtgK7qaYDQcW8",
  "key16": "18R6u4EjFVniXViet7uX55M7fwyhs7avcXkn5Lb7TVx7cERWSErix4rRKy4zKTLBXFr3dBkNjcgi6KqsXoDVNV3",
  "key17": "EkQxRimee3f6UHb7x1pXoyi7BMqzbqcCN2YkU8oacqUBa2MHnZQ7jRLg1mZxvn3vpKmcK6sWWJnZobd9viNiGdQ",
  "key18": "9hMPTXJpAB3EeBMBFN1exkiqY52HTRB4udUNhfgPeYrpoprDXRZdWJg86GgVwgFuiWk4epcJMoqLoXByw1TRBVb",
  "key19": "2zxQNi81nZ7dJ1CTZ2PNG9LbSpvuD19m6rWAtc4J6twLQk69rYgGdfBahuSyBg2gu2ne5Q8Nhivj5dh6NHj2WaA4",
  "key20": "49eWazsFmdR3Y2EnY2QB1A4XzNq1dVH6EZih1A37Spb5qK92zZD2j3kw88FntwyYmEi7tMArsnxBbHjKgw5dfR1X",
  "key21": "3vKerpRSkdnRaSKZ5p4Euj1rH4DDuZ9DBFncAz3PyAP37eHsE2KpnhGjSeaonPLYUsuGQ1ajBwaV6dsixiR57Kik",
  "key22": "5twr1SB6Bh8iT47L6WrmECkaW4tvmrGDQkhCyC5rv5NmP7WKi2rEwSDgNwLQuydjciE8ooVacKRgDATrk8AtBhcK",
  "key23": "3MG6ccPuDcYj1W6pKJxCo9hPWBpyiGrKa9MedAKh37HZMyiDgeawoNuNfPixQmcuZ6aQrEDHS1D19VnFad8qUGvL",
  "key24": "5Etwy5Ah57vzGNZR7pvN3977oUF1Ui5MLJ2WK5NTNAZjtzhZc1geWKys14mAiYZv6FipY1xAePRS1p2613JuHUh9",
  "key25": "3P6hzotJSLkqNLQeiqYrD2C2ANkbKVK3uRMAn9drBpuhXqLsA5JGgToPAkfGuSGMrGSKoWFuy9Fdv99YgRLdDfEt",
  "key26": "TWnrBcfe5qtNFC1g4Z3vZJ7UUCdEW7zdGEe641BUDHyaBbmmhF1NM3U6qytWWs5rNvc1VpqDiN4Nv7ySq8MF546",
  "key27": "8uhYR4GFzZTWVVNuZFuYHrqp9ZfU6LtzJzvVZ8wQgVeMTCyTTphcRQk9yyrx8vgTigZKHx9GDSc3FsAFWg4HWsE",
  "key28": "2sqmzdLQknBhYiPHCExHpbKqUCYGwUm2NQ78yfAgFGB1c1uFnrkgNQe4TjAjEQpCJTyUYHYtU4fgWFwjuBSwE6HK",
  "key29": "488uG4SA8Rhi3gnzh4wiEhUJAfWwx1eneZ61ZpTpF9LXQAEbqSTFs4XN1VphBTGhDVrqsVoYebQ1G85bUTmfMCtq",
  "key30": "4tqHP6MwKKY3xrE1MtJQ6RuR32WdLYXBuz2c3Jw2mF7oTvzKnRJJqmCkMzyTxnhmreiUigg1B9LVJxDGQFZgX3Mk",
  "key31": "e64ejv2JeJD1FBDKLM3afGjFfQoXT3QJP53yWPTE8fhmheipe69VnV4r5cVDWkJChQc3KVX1JNJAbB9gtK2Bpz8",
  "key32": "5CmYhquRVT5z4n8xZSQoCRqJbvuxHfqgtVhXV7k655vWzUCjzMdPgyquxypa1f1gGnpwmKwRaKJwr9BRtwECRRDe",
  "key33": "5TnKXkQ9QWkebk3DHk7hKkg7z1D9jzZ3Xxm8VTw6RLKrkjavCXA2WBwteB3vXoMtkfQJgpEyrJv7bjq4dg7xsURN",
  "key34": "VMuUCjqEh7xuWPjJvjUdzfuXeRe9QVRhCCTjj9zvYBfWf1sMaWbU3Vs21NEvGPa22zonnaARzvXMgsvwTfhu9PF",
  "key35": "4oCmN8jverHQuFmstyRUCVDDiXsYbPG2ZtiK7H3jDVojsnBrUMBkr9cEUQUKRKVMcVsXnNRraLZZhi1XXzH69uRD",
  "key36": "5imPyvr9muZPZ9ypHx3bTvjYscV4s4N79kNfZRuRSJ7S863tJuhL7Gwoz9DawK96hFJF5tP3o9D9CvNnfmBWtz6v",
  "key37": "3bMijwcDKLgUzb4wmxcX1GAXbLrTQH4w1DwPi1srcUwgZ2tJJC4a19ci83nC17Xt2WBsD3qsQqUx9k1BSuMKkzpo",
  "key38": "rtVW8sNEbFSjaiZzPQWRjNJbkqVgNbtZD6xALKG4rAHas6GyEJcmLKogUqm9gT5a9wDCVYzRvxV8R2Y1ruMJ8pd",
  "key39": "rsRKVX3D7qYJJgZJDLqseBePstT5cwhJCnKBURHnjxEnpZsMFiHpyk9vv2zkapCzDXwRymiZD5KGdvk74cuNXFS",
  "key40": "4DjcbAUG3mWRKAhbqm6RhqohA2YACKfwqaRhB6tBeP86QeLHCVtDbfvrY7eZE5NzuBQSoroBE2PBxxge6okK2YfX",
  "key41": "4aUbdWXodqTEqwRDXN7mnL7Y6TFbyakkoEFcQyH1F5UqNc3xRZhRcPFqaCjo7hVWHStXvZqQUJ2ssUixgJUKLo3S",
  "key42": "tTx1JtbMuXoHduSa23UCffpfNo3U9eNT3F6yYf6Pc4pDTp1zVTZw5hiCxLeBbfxZAoTP4hepXcpvR5yVS4m56Pf",
  "key43": "5dVg5ARbPHnNMX6hVrskFCXzwbmZCd9YYV773PovuP1krfHk1R6YpoHh5zNepv92piXo4M6BQ4vpJrgEiEZUYArq",
  "key44": "2dmiv6NxpnFkXt3BtR6K45fgUWni3LnW4reVzCkaifr6MdoNioBCm6H6AmrJnjpfbzAvuJJ7Uff41k4xHnkouDwC",
  "key45": "2AHTuisLqWSoRJwxfir8TC1PC258dsCWirCeE3CFwTqdpTMovFzGikDUgagY4PAAUotBh7DAPLasgu7VnHwNBPaj"
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
