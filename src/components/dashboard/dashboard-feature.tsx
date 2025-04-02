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
    "2QeM6iJH6MWy5jRD1LxZLF9s9knzT7BRedvrPVwotfiTyNuHX7myyoSbu9UfBnm4CQhgd4GPNZ1xhAdLSTZPTi4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PE51j1b4BXKz156LhFdwbH8bVNWzA9R9yDgYXLZtSAQxtNtXXt8gk35xCyQGYN7cPJiRJnu9vzgXAut5y8b6rpU",
  "key1": "5mBqTQVUX8bs5zmFMtzvEc2fSvXuxsBjFukPn21BTC4WCwCcxZeGfzxnt4W3VYtPKeVuX6hWoGi87am4foEDWYBr",
  "key2": "44fjjHLGWv9wVsDTrKLCwfF3QxjC3ZoHicWwUhGD8817S6iD4uQgQWmEVbXm3KrTQgoTU6kA3QLGVzbp6nV98D9N",
  "key3": "pNbNL6oBa5BoRLM7xfG18UL19npmDaii5ZsX8y6gxMgNbgYzSUu8KQkkpEStAxjgnRiRYnncgLuva4GerM91msy",
  "key4": "4UG7bhDC74yw4m8snV6hbrBRXPRpzNmJ5sSem9R7omFzgHdcaP979fwJ5Fu1DCq2oFxrD8rC1d9kuVRiWa8CBVVa",
  "key5": "2GUnjgaLzfhovgsJ5tNi4PbpNgZUSJfkW2ewe7aCzzmNqB8RxboNmnbiBBf47NihdNm5x1W3j8UGtfLfNKAUzJZS",
  "key6": "58Tvrt2K3JMSU6zy3aarthhrJwodTZDP8yht16pj9yKdACNw6A8KZ8nD2t2ZZHuikjtmzcKSY88SFEizkBtsSjVJ",
  "key7": "2mhZtvryesGqRL44YEPf9Ea68TXJAfB8hDLKeQ9p2gfzEc9KT7d1GM4T5vuFLXJ1V2mufBW4eLQTNoSni4cabUSX",
  "key8": "GCiEK7VK1eLPEh3pM5LdE63Lkpq5BUznL2J3jho5a7g45q92A2kWkk9GsFhvV4WDNcDG67f4YSqEJBseutMdjP6",
  "key9": "3bXogbutrJY8g7TEEasmpanih6HA83u8bK7NYQQsUPzC47wBV8mZLYzdpss7qsRFX3Gaau8fBkyPRr5dp9rcUBFh",
  "key10": "62xC4pX1HbgGsoxBimmYt4rCgdprPLe2PvpktgkB1XuT8S5gJ6c9JvqxEr7vnpjCym8rCbeWw3arSMw4tHavRyD6",
  "key11": "4KYzztVc3ySXGdkBv2pvdDzztQm9iekLALURu33irLDoUgwg6ST55APtPt6JzBN2S9mdkn8niJT57U3JfoUGWAcm",
  "key12": "3FBXGfoeKu8iEJ7LBik8dYSEKLW3t8qXopNBnqYRsdFdbZThuyALevVgf6RBP5pDHf4HFe2WZ66yhxaY41ug4DjG",
  "key13": "473n5DKgJcbn6GFW222RQZsVDT5PsyXWTJWBrLiepv27oR4pS6VNw8YpMajK1Qe1xZwgwQSf3onqLcuR9ZWE3UGP",
  "key14": "2UcD3WRWWnWyRciEh35UG1LuU6HedFUe5dSX6mcrMxZnwnsQBAnjqtAtNhVD6ygJRNqKBvC5EYy9gdWzRFzLcd5o",
  "key15": "3Yv2EnkVSM5xpiS8Dre9yBxUszs2usrVNGsQXLbug4n4uPy4pFfRH83dfj1ukTLExjb2HE2g7NYEGCJfPrUHsRQi",
  "key16": "5nBHeQ7aP2zTZCbJxX3nnchXcKmNYxY7S7vAbwvJTDoj2oKbD7D57dig1uiCvjVQJ5Zbj2HQcKE5tuGNYb2D84jb",
  "key17": "3FWRQRh1NCvoHF1fvTFVZ9taXdpyLvhgrkm2GLVXXsJxHQSg6Ed8ch15KxHKutx8G6P5eaRMJJQ4xD98EYpp6F5t",
  "key18": "229Jyjiwwt3sX5CJ5xd3hKkshYhZ4pP4LKm9ye5Bf4tfv6HZn2vgT3hix3xGCHotdQznCQz3Eo2wyB5dqoQWg3kp",
  "key19": "4KtVYXuB16nYJQfjmSDgioApmBeTzdKfbEs4iQL9VcXGu2XDgfUsBXttVUn3ztQJ1gr5iZuBkWj86trMJCz7Kt7p",
  "key20": "4hBJDWuZCXMRARNap9J9WuvbTgAozbeizdUEj3Zt3bYkReYBAmM8afxoRAr1JWL7EVoiJ4emhPd9TA4LmWsKw89x",
  "key21": "55TiK6rY944TDp42tR5gYzyZ1EmBMXDFoAm68vZRAgAmjUGCjyMeDo4hFG9ZtC7fE6H7nP1JZfGocV8XwrtHaVEE",
  "key22": "3zAVovUs1nNdMM8AELsbTxFX6oM6ts5J5JuNCLHAqLzBwmAgHcZe3i7kaLyRtpDEjMzjnb18oZVekSMiYQvXBWHq",
  "key23": "Eto4s428cxgCu2CxGyTRD7nKcsGwD75vzum3EAR3ABCSjfbWDevjmswwr26dePoCyoL5tDqkTvNhETbLsJwEMBG",
  "key24": "i4xmCqnAomN956n2cn6kyVEBzKvQheRBmcJ4q7XKjYEXgDapmvLgrHrRw6jMAfpfuN7JtM83Jom6Rr3MdSpheGw",
  "key25": "2ixmrNijMCLw4qQoixtoLRVa6nfdcefDKreYQV6PLvgJ51euKqV8cn2WGo4DAHpfT5p7btd1cSCVYVF6gidiVxju",
  "key26": "S7vHuTtRmbNEsa5CpUdLbCKnuyiBPFtVzHqTTU7Ljc4ie7jqY78SVDHaNMTWDt2Fsr6gdpYAwT3BBgmdiYWGNDL",
  "key27": "2bJGbXFNpNMAS5ACzTbRHZMuL97s7Jj17X57Gi7Rbx3M1cWcfcCdnySD2h4PZcNeHCsjCjfCFADmLxFsuddyf6Y4",
  "key28": "3gzHvqZUTRBURjtrAik4Sqs1H9u6MmgJ5vMwDHGPo33T1PDVtwzGsRfK8z5jZcn7ctt3UHqpTJp1ivz8xYatUokW",
  "key29": "5WpPvJmzbU61qUxXzCrUkvzzfT3hdLiVy9NSDprRTi3rGkXQbTsEPj4TBsLtJrs7BdP8m9AdSFKc8v5NXwFn81wH",
  "key30": "iAAskGYtZotkkmnbj6ryvdB4iUq4bFQx8qWmk3S58DMjvbQdDpfnQWhTwANtzoHZL5b8PzCoJ55h6ET2X2vdAvc",
  "key31": "3Ac5khz9EhGbPC8Zw4u7yLDHW63Zs5vruCC6FUa6ntkSMrH7myYYmVwm2pcbXLVBUB74e7BzKswXqT2kvefACKwS",
  "key32": "2NcHMSxWPwjhmnKAZ7PEFhnQz2xgpbxa75yfaKXn7W8XCGQ7z8BFTxiDrimo2PD6abckrXTMZwZqXtfcHCkZiqK",
  "key33": "2uyLDU6vFoNTkyhkjJJG9XfqpcgX81tc1RcPsikDFcUW7rCjopgwg6BwYPMkqVq7nevSQFWUZPHTuitJFvAYv9Vq",
  "key34": "31rLwu3zb69cjCGBfTJVVrNxew7Hk38SXaFqm68huDXbSou37ThfhPjtAN56uRCbPgw16XJKNFmo3UfVMz4DcTXZ",
  "key35": "3TXyHZEyStfLGeLJfqhBNukMkSkHoyEeJqkGYnQWwdCMUtPyySNpXeLTQgTfQLFfNSypTjNdP3jicQ21hxzGg6JW",
  "key36": "5ysmngSmncLpBSasdsS3C4v9iRmxVTY3bnzLDyXNH69A5CCN9LtUfqyUTUxPx5krHKwAXnFZjz6e3wdgrgCMVNrY",
  "key37": "3BgTSo4a8ALsWMsqHCGPipfCLDqXBSPFPXH5f8gU9zui98TbRQ4jdS6rnYFKpJA9rUJLqfsPuZHRCujXfKmenwCA",
  "key38": "2LAwPbdBNtmjLd5eCAcP899U4TTE3T57t9ziArSPwfefi1WxKQD732t6v4ZztLRrLHXtiMCPFMftgSmBwVA4BVfB"
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
