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
    "XRrM8krvvsZdQxGsktxjP33zuJBbjopHkZQANZrTZ5njz8RpcASDJQu3osecmWbUhHdke36SRKi13bKPuesr7xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zvZehUcnNxNB6em1NXe1rNo4yF6o6r23encsW9HXMmwbBVnCdxC7vGudTqSWxaEKZcyhR5mb79Aw9YkfdHWdgLL",
  "key1": "5ab9ywvNMA2pXRtceUgTNYym3FsJAzQV3WXYeKuYVjK68ZZ9C68moojdqLqvdF9DVVZZrGKeBCY3Z4itfN8twXWd",
  "key2": "63vCcHwafT3dqfGMH4nNdCgWAEyyTgWcHXZnY1VEfmQc9Ktdj9UHWxhbPxLoNWWChz3etDebU6BRxGDAVsLZfj93",
  "key3": "66EhQobDtx9Lt7dqvgStXiiTNGWD5oJm34uuYrBTfCmBMPorp9nXviYscQMUNhVeF1yK4JN2UaRJLxustn55aPKF",
  "key4": "S6trRXp6v11z9LBoAqeyq8hnsRjWXL3VBaoLX1WdUNtVEEQ2oHQjNJUF3MV1UFWMJamisDLyPWFaR9xtDDw2EL7",
  "key5": "21r3cR6hMkCp6u5J7TatPowLbjkhxAo2CCgSMDcK9NMJikn4MTTEhZQWpfWxEuri5KMToG96MBcAkGsqYEuZbUpG",
  "key6": "3Uh2D1HsdZfDguPRtZcMR3VAQiGeAHWHGkqWepV3otNQ33NZ1J4BTKjw1QahfuQwcDYujSfPVDDFxaajRwBpErZu",
  "key7": "5q3BHUUJVwmGoUgHY2jhkWAohnawySFjvcDuT516ewSbZnuEus9er9aQrboD6mbDwHGwan8ESm3xuxT8biRZnEh",
  "key8": "2w5d75yfUVfHnJMovPWkZoJ4r662isA8F5D2JbjrSMnACAqQFR5YGKbh9k1Soq2vjxYN7ga6YSNZi5FpmmjZMB6f",
  "key9": "3qK4Arhsw9dZtMgXWas19N3PrFrdTmBkaaw9dquau1b8uBtxjP7iAkUX4G2VMP2Qt1fmmCpmqWGzUwB3PU2bgon5",
  "key10": "5i5iULo5wbDowyQij5aKu4HHeAMR8ertWJoKSHB4TVR4fWcksh4cdLe4tS1oxR9nGTf4RvfpXT75x6cbUfHm9Qz9",
  "key11": "65SKjeakijBdBmFKX22EbAQgQ5SqZ3JcmQGnbiM8g1fdbHnQWNMHBRtgoKEo8sDhUNYMt9hp4nb74TNw5VrJ7eQ4",
  "key12": "4oKQ7qeZZCaehtaA6wf9wxVWCKYN29WEcGQQNbpMzPZGnWiNpqjUJGNLtuUGXCSGyrbAcwm3vpUApVLSF5sRWpUQ",
  "key13": "3tFAYc3bSyPR9yzVeUzMDgKVZi897e9x4FTAU9TTe9nrd1x4Yzn8vqpG6qVZRzPbs2RqivFmgzhVccurDt4w95KV",
  "key14": "4og5xxT79KBbHGvDbkEMz97a6DckUadRwxJytZNUavehq7YtaN9SrECAkrdYLUboGxJsDEaxQfBfSTfUL34XZpET",
  "key15": "663sgHDyuGdHbPGk5cHvkodqASeTaesLyPjvsvo7noK737uW4KKdxKuwNntAuUdmaPru6ZydPhqvobBCtVJw1Cez",
  "key16": "5QqqoPKUjg7E9d99gtpaVsymxWZL1qeqHE61Px3NSw5edtbhX55bqEkQyoNy72vfK8EF4CVjofAKwYLvxCRp9bWc",
  "key17": "4Vqv6VKvkmL5jUtLRBHA5HoU77k5q3CqVVnVcdsSzFu1aovNWdeAHDbwwAbzwjHxkmvH76JjJGorABe9AegvUMZm",
  "key18": "3oQsXuN4DBfVoSYkLXXgwrg8TRHFGZZnR9FjLbCwUv5jpYg3t1chY598QtcvXbczBzNYXXiv7RLBL5ijN6YeA8cv",
  "key19": "4F3pCiTXiq9gzUYymbVCgDam5YYqdZK2KdS6hi5zVSeB8yvYKtX863Tq49pPWGxt6MpviPpySZTmXDP47cLA42fg",
  "key20": "32PckQ1G56autogBjPmUuqmNmMdZbz1jU3dJZMUyizYZsuTrWMorb37JD2Lv2YqUXFKwAtLrRCuEEfoViEmahWcs",
  "key21": "4gcnXbZU1xhJgLXe66NEtaMoU1DpcJxhrTsiaJxvLfW9g4VnS3k5XKZfPXvLTW2et4Z7YuoBAwytEmzUQtnb6med",
  "key22": "36N33TEr8ibYxuiogFW6Y8scaau1gbELpj2GGpQphCe9tzYtbiqhRHev9pUCfLPUKqPFXwxSMULdZTX559JZGWis",
  "key23": "2crXT7oddQow3qzc12neyE4JQr7EagSMwjTuseeLPUXjYZbT4mmzWJT2D2HV6W1txjcKCioXXJVCoVW4HBhSxaQg",
  "key24": "3wdPu8pQVDxqvSs1JRexV778aBKn6LctzmMgRddfoXBgPYiihBsbB5auXdkN7sUiPjtEe18XRw2RHh6g3DvJeCFS",
  "key25": "2BfeDijLCaJiagWuxBUxyVc7YRHGNhed5BYoYXL7TTVfP5XUUZRZ332kArPVHoefJTNzwycK9JQLvwt7zMZ2NEsB",
  "key26": "4rRnF5Qa61DymLax8xDLgnfVnch1osvHe86j38beoPqR9V2msnkHaUkDMcmrzTrrYFAMGrkN5SPAEnQxCZJL46nV",
  "key27": "4985qo2y9Syo5kQnWZ6P2Ks3bZFhe8aF5DsgcP3eU2RE2zrTQXrr6MdH1cJmhvVsr7MeiGqCr3uToRTTxt1sqsZW",
  "key28": "2sJmxyBu5n2c9NYAkHQPaskJyp49Hp8C5TBL4bvJ7JD52hbrjMKLRgPK77t84wp25u1UvDm5S9StKFSGMoAcUJDu",
  "key29": "3kQf7BAKjyRHDgBDe4pJyB24to9kab6twqYpaJMUUkkdgdYnrabMj8Fkk4VFLrjkULEiy9vubTPfbYaBSnR6UnGg",
  "key30": "5uEzV7fzV49Gop27x3tqccxBCCyHZA6Mdo5B6k2Tz8AGqwhZHExAR3kYuhZkmdXyrib1Ga1FkbP4Q5zALTNdmd8q",
  "key31": "4sfES7tjP48q1v76fj7HsTF5mNL9GjFRJSHStX5oV9g1vpDro4j3SxYQd272YCj9ky22go4qg5bsDY2Scy1d41su",
  "key32": "26ijvagobXPgyk7yLPnb2biDp1kukKc2FghVohprw46wgwZkTLw27ZHCf6GrcQfzUrfYdTFd6Q5v7QWKBmK5WmKD",
  "key33": "4yKPBQ5UKTdxic1iRqKif7ZFo3VWiF9uv4HqocYXFKHn89FMLfjmNUqJEhtDqYMoxhexqdqU5ethpfj1CjHxxNiL",
  "key34": "2eqe8iUJMPdaDzjFGoo7DzsbhTGr9HTfA62zwpakGq76dNv1LTE6neFHkPuv9Yepv9rthjzAJFRxWHG5TBnMHKsU",
  "key35": "4Hw8WHmn1tnxME91JV2BV24B3SbzXmk1857c8YToxEYF8SYNKxEmuVTsMSkuDbkiWjxsxVxciZpNR73LrkRhrRLL",
  "key36": "5MAUnasfUG7ofgfPVz4JfkjtU3Xb6xxnA6F6Maaqn6krGA5gufFi1cKBUrLyp4hL5bkwQGZx66NH1ZumyzPQZMUW",
  "key37": "29TeWYtVk9mZV6T3tEJofwisbvJxz5BqqJsYsd2RDeUkd8qa1vqL5S7yAw2ojaqLyuQaWZQejZQTfYEzCUsNbFsK",
  "key38": "5zvn2xQiqEp1QTBX1JT7J9v26vKKx1xEqxHqALShQoWrdPe5DwQNuxQyQwz1EA2w5BhQtHub2hoSk8VriZPhFCDe",
  "key39": "vNoUMHMEJEbBr7CXjtnZ1D9m5qDVMCZLDB2ScNALy3N2mGGHHUVY1541tJw6TiC81nyVaxYe2HdZf3nFdHuheat",
  "key40": "FvjKmqXeW9Zpmzb349SHzUVgSv2kL11LpvTLK19qzZoTpbZ4q82DH7fJ3FPRtTj29hmorAQB6mFLNQcVAxmSNo3",
  "key41": "2u9rfg5W61bXk6Y2u1H94mmFhB8gAJBa424aXQnkMVPukmgtux1iTvRT9aZw93rXjsHjJoYn5WGSjpVj2Usx8BkL",
  "key42": "2dsyqwNGJ7ZhEmdfjz9b2r8SDkb2Ur3F5thurRgzabQdJZH4xNDPueKj6JYg2t6rKttaRAvL1jiTAfvGvffZXJPY",
  "key43": "2ka6kwpC91fCoB31bmdrTs9kwDjr8hVTp2gm7vD2QTxyJgheLEfvCUgAvH2m7eY3AYioMMUw3anWCMndGUqRtXK2",
  "key44": "3Gc4Vrs9TSBACdoQWNsi1rW8aG6N6nHv9MCBRqGaRJLG1H6afL4qaCFKJT7VS8ahJSmyWmZeGWW8z6EdoebVLdVS",
  "key45": "2AYbwmuiBSo4e9AQHcmHGUGPmnXSveDnrfmcQaCUgbup6qybDyJKoBcAWorMioNnfjQrEztouVyqu6Y48u6ZnrQq",
  "key46": "2nyYD7ueP5bTCRGkJQzM9n4iwoEettVVeo4gZkBQzy93UMtSfNrgzX1PsG562uEJUK68mL43va68DC5a7br1hMq"
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
