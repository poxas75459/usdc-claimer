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
    "5V86xuX8fWw59ntbsfmQu79z5yZfrqSDqVDVatgcmA9We8JkyEtKn2xMZE9VEpcS6bHJPyVuxU39XmfKNBSQ4wNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1f3L9BSseykpH6haWtv47BdjGrFnmAvjUfFdcn3KA4FjSPYbg3YnBzNc1B7a8hqbSNtXfPxvNKaMRdaxh9yx8b",
  "key1": "2JduwRoBUcCJdT23EJovspY1RKKpu6WY9zyWv2tUCuXxRjJSeuPon4NxAHYTJfAXYgVvt1tK5byDTmN8DoMSxVPb",
  "key2": "3uveVDaVX7NDLfDMDEk1gQRNcugdFyPT6zmVfqMbehQcYZ1ZeV167ZUwwrVVk5kaBi14jRavGmxmnegqwa1vQaqk",
  "key3": "57BLdkW7t66vdwApRPZeSW9ZGvgsggVhCpQNZFSFM6poQzTmazpmQ4FcfjVGHCknpkey5zgGMTMDiDNktqJi4SWc",
  "key4": "2Autj2iw9cp1xSGs5bLJk8rMcVpFfEcby4j9RRmJdbN1XQDP8HPFiR7hEDs7fsbCy6gxWNcB3bKu9SQ2UkZLsBQg",
  "key5": "24gtV6Xn14FsegvhQUVLphKwKVfApshC4GS4fAAJSRU519eiVfY75aneWmVwDD3QC6PWQ6vkLJbC3dghEjUkRwro",
  "key6": "2gWb4hh2mk6K867N9KewXtsZbfcmdJtXb2TgeTsbsqS7jGAd1Kcqnrh2Xny64JywzsCw14wbSsCGc4TZ25ETpsJg",
  "key7": "3pveiTigmZN9vQNG1Y6RNKJwXzQH8VvWU3B5fSFmAzHkM7XofUQ1aGjXBhdPhgqRfx9F2XY6SCXFRLRUby4TbguR",
  "key8": "2rfs7ENz8X4eV8josfnxjueMuCfwr61fGwihFVu5CfBCMuvnnzeR1TcuZ78CPwiRnYpLEx9o4XZzCRcXRkQs7dzv",
  "key9": "3snYTVnCuskwJov8Neifvfx2rmLRi9Ab6yem2uEJCmXgm6DzFgwaKT5wAYzcgH6nYjhmEzCz6x6MeJG88ye4yjEr",
  "key10": "3E12cKsXrsCPe6aRGvAQqVUJzT9H8Z8TNLHqjsLQ3PJWF2psbzKAWPeHUbr58BHHSFMftbRhjLhjMRVzqF7BsReT",
  "key11": "3RRpabbGYvFmewYSB9r3Mpc73K5FGZKH667LVCcn8Sj5tXDyeNGwtjtJ7C74YKXA2dPnjXFMCznLiB2meTQJcKvg",
  "key12": "SVNfkkHoYRLsJ45PUbpPeTsRA78izL185duHvESXrud5wXsycLvE3emZj5GtuQbNALPgNcBN4USsrVTFcNCykKE",
  "key13": "3rYBPyrw2WzjSwwksgo77kHs7oiQoA1HniD94UDp6CAAd9FC6zYVXP9YSHtT9hMD18ZckKtQ5eHf5834qqhAetQr",
  "key14": "5zPCknFzizMZnhVUhEXDbXSYNfTFGcWHkhaYtNjjmWFubMScTWZ7qcytkSff3VZKp6s6CGFMWRX6N1otGoUENQW8",
  "key15": "4hf3RSk3oMFaLZNdeTCqwY5aQkgTFN6kgEobZw8FD6fTLEBzqGi2xvw7YjJkG98mPNSBS17uLD45QVH6jTq8R9fb",
  "key16": "3sjmtPW2xDHrd7Y91Mp5sMPepFyYXe3vcEcm17XZ7v23cyyvPZKrBszBz2s3xJdxLssAngoNHLFziRri7A7tcTPB",
  "key17": "4HJqunvqkxmGKLk3YFWQiv5uePKBNR979UqvMjMvvgGi1pSt5oKjRmh8T9z3VB9peZmzprisMdPM2ytebab7YiYT",
  "key18": "3ezpNTEKxp41YkDUKURR89hf9gyDU7f8TtrPaaZEe4PvUadnW1pcjYQkLTbKTvPKwoLRpuu8Z216wP79e9iEhJkb",
  "key19": "5ci6ypp7WVFFw8gjHRxf1NV4g4jSeJuz7PD4WguJL6ZMqKtfptPhqQR9QWpA8dwZG8jZ8JmTBQsN5FhAdeBHgas9",
  "key20": "jaLSRNtRz4xeWouvz7JyZaHusgZr8Af6ox5sZEJZZYX5HYKhFJaFuqSCvnC36pKtjirsjMygrsDwcMX24472kAi",
  "key21": "8z6M1yv935bPmqS1VZxPkWiy7BNBMyJdX1yfa6QTN1ipSNeQ5QbizsB3JW2T5o6vXaU4pigjKaHJJFrudjxikag",
  "key22": "4jU4hnZuAmtwM2moVaATYudoEhUmjhJ58VLUZQUp8HULRyXwyetVC5cHkdWcsCEhuYphFLLvGyF95whGQJ8pcZ28",
  "key23": "5JzR19uc8uAeoeLceRAiQ5WLYKMpqXwCWCLuZRYM9FmrHGqTYyoJPtwjQ8Dn8KrwjLZfoTn4w35cxr8Q5dEwLD9i",
  "key24": "4gy9BBwcAxb9oeZtf9DQbv1ZMyDRvPY14nGazCskvteY8b946vhVTVcETffennKHFBqUoiJBAGxpJBRivvG6Nzxh",
  "key25": "3nUD9VbWpRfwKYiton9bw1pDhUzXsaaJUVLsZr9oMEk8vARPjg5vvWsRM8sGy7T55HP1sd2jTERoSvih4NKCbXQz",
  "key26": "5FC699rJqK5pA8hrL9fy9JPrbhHDP79BpRrq2CHtiWxsw6y2XAMdpCvXURAWxoz4mX3wuGiDvtkQ75mcui42rGKK",
  "key27": "2YMPyeqn1M9grKsZJiaX2aXnCMiPjc7x8vEE3QBsaDgWnBtUbDkVsShvbw53z1cra9PyRnAxqQyoFR3wbNL5KW4n",
  "key28": "7CoBdpomuJrTYxrerucmHWSoTcjjssSirHfQf3KP6X2Qc3xdBEh3njQhrcELa7WX8zY3xzfoKwQueo6Yxj56N1Q",
  "key29": "5JdKvpZ6iXBMKWcsBw4bh6y8dbYyja2sdWenehoUG5HmKxUjrvbz5pDRk8JkN4a1dHmJsoUHcMbHx6D7ykSKjN6h",
  "key30": "4S7y1t4e3mxa3AqkzemfLP8yHHv559XL5qUs8bNQTubexa7pTfgQTSS8BWA1UD4CBsTdqYowEo9yxG1xXypEqvDD",
  "key31": "3sBhzRVVbngGwq7PZSjzgCDTVeurUXsPZfuXSqqVxuBtVA55EczY25bpv2qFBppzwhXjJmySSX8SynosiBT8fpAL",
  "key32": "5s4di8jRwL9vBXHaep93SJEx7ftoaV7jawuWd7eYtxfhgPJyYobrMTQgvrS8ShYFK4MCs6VPB3rKGKYA3wtnYnfN",
  "key33": "3kJC7EW9pBukrDuJCsHZPd1HVc5rkkxdT2CWnVgiDSvLcfGNi1DWVQYu4H1cFKMPi3nsgU2Y7g5NF9VWbcB49UQE",
  "key34": "5k51SDDXMkdN194LHGcHd35CVvMZiXpcTYiKoV7eL53mTVQTfQt2Tb4uhb8tgF7anLKrsWZyrBxd7bheyTBNu7x5",
  "key35": "3b2Qm51J3QrEdHxaWeMgD5WAwjiJbcRwz97gPVaxf2NikbK59zvvXtamkBHDgvbfJYLd3SCUKX3uHSAKDnaLnt1L",
  "key36": "4NPP4XvrLMwZbnqbdDC8UWyvobShyK4KyJfGRppKQFR8FyPfCoTEnbbpkD6wYHBzbmm3RQjtbQK9ctm1wUstHLrN",
  "key37": "3hkNGHEhx9jajLWDEYRyszu6NE4CAYpizr6eFSMaG2MyeupVK6EZVpBXTWAGyJSh2pSTSWdPwknfuWXbg1eoqebh",
  "key38": "5a9xcovXwYWcKJHF8h2SB12DwUnu6x1uhEnMtnmTWm5yGigeFjwg2ZCRAEbBch7meCGBzGGXswErdRWyuTofevzV",
  "key39": "5s2eSaCfCT1voJQ33HGbE9FYSL1iadBNa2L8EPinXeKBNpRx8HeXq6Cwsjh2sDN8AXXyE9KJyfqTiAQcvQuMg5DL",
  "key40": "AU7bPvHenkVzeKmbQdvQrxjTxRWivsewpeaQrb9vbai48PncP1o7pDZD1McZEpiew2askbYrD1KcK4V7wjpsyRQ",
  "key41": "4h1mYfFcMUEUecb9mFP97JAKcfMaa9PjgJahzV538KgYJkC3Pw5Qwq9Arg5bMZXt6V1bfqHmBfJzRuKSGAKB3wsZ",
  "key42": "KGeiE1WiwHpXvAZks58ER4Gc3jHTT3mqRLvWeQpUoMMWpGEwnXCJKiJFHYiG5awxUPLV4gi5UzML1Wck5B7fQw1",
  "key43": "3u17tg3weeGrFcfEjf58tTPnpHLZRT2TRzKxpaEQK7i748xf74QnkCqjVNVTGmVr6H6DnhvqrPegMrSXt7gW9FYg",
  "key44": "4H9C4F1T2zWVWcqd4gX9BkpF2tSQfi2cYphYdrgeiCazWRV8gEZiYeUYppkEr8i1TgBpDgQCK3CauiR7wa2NNhnv",
  "key45": "5p45ASMZRqW68EVDf3djuuWUCKCMqSqrovtbwyVhASeoRBMgxNrgjdnELfNX9PzQ2J2QZDt2aH7fYR7C7HGdfoME"
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
