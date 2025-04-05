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
    "SiaPnM1eWVurb9VWgztaUmSdVnD8KVs4JogxVTnt4a6a4BNXwUVsvTUma9B9EEuNxbnmxtMx9jLJ2LB17cdEXen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vepKTMgvabBXWPgpMTZPqAeiRdGFGR6no5xR3auLSKksfuYJRfrvTUGh4MYCyDLyJyLrt6jVgXotxw7jJsm78jL",
  "key1": "2ddLtidjCfbYajQ2Ec2c2PArG5XLhDKoSfy8kViNfCR4nTPdHHCPCgG55LtEpqrYnTnNJQQmGHGMGagtEiru6seZ",
  "key2": "5LcaBVYmZchAuzsjjzEQupVES4CMAm3ihv8qhK5hpHuJRBoVMeobC7cX5JFbK7syGNAgrTjB8Df1gFgsyKQRpVFW",
  "key3": "3ShB3bbP2JbS3eLDSjkCuKvvUkwUMaTBGHKVhPRcBdYpbKfUfzhfEY6pRSJRAtEp7ubgnVbmu3eKFXofZYc61N2C",
  "key4": "62bFMPyUscpMbX3VSRCddHozH1jK3WWh8P2CnyQjigkCzz65LnqzQuDNP5g1cbCK9fGwCwUoB9Ya4ZqXS88ncNhh",
  "key5": "5Zq7GzLuPXwuqaEvu99TbwR86TwLqP3gmJMKbcG7tdatBDsqhT4rC7DfP6upU8pwWyp1qqVgDVj7Vtbi9RWQGcJY",
  "key6": "4eU2LkMZ8KkaPh9xjf5M52jh3F27cvR6hQ5NFK99cuZ91qDNVK5E6wuMXUFMyet6Y7Ge94c18Jso533FUuzaEGwg",
  "key7": "4ZaQAW7adDgTpxXWm5LJF478HfKFp7C4kg1ExZSobBa3eRpRHF4xmFbdNkpZVmhd3KHgqWe9xFdr8LwSZkdPUUwm",
  "key8": "5q9ApY3csiW4qUBsaP8SJXosFCEbLNHFSRJGo3ZtXrmgDzqQozWNbX9AERgNDx39XGDBfpQAC89EtDva9aqEbf1K",
  "key9": "5n7bF7tfRqexAQgvo5wHwV54otRvWGEPEsyitZ4sPx5PjYsdGUC5NaMQfHLxMoM1hmrbTborceuqmvHYoUR6o8cK",
  "key10": "pZtH7A1LcbqdeNar96JvyS77H4gt7A7aBF9dntqmhaR3rWKwLugk187JTxQwTxh3sBgjU28ajPMhrhymx4s8t1F",
  "key11": "5UzDdVD7R1CLPcdWZh7NrH1LiD87dysGpaTeUsjcrohenNDw2xo2Vo9H8zGzVaCSxHv7agkCYqCP68Hyh2YwpQLB",
  "key12": "dBPEQLhUkezxZiHtneD3HGTyqGa7PDi7vShZ7vXXtTHJNcd9JhpwATrHEAzqao2Qwjg5ivXcmkwiVoyLcN5KSBQ",
  "key13": "4EZJFeH3n1FmJKKaWot78mtGYUU4AwgUAD5XqPnCEogXGyfRw8aDNu39uZVsq7zUxTewhcWcWTeJNihRcgZB6i2D",
  "key14": "sNgMnLnP8iNmu5MYVrVViTJg7ujc1vTTF4WTti6UiCkVexPDgTUtTBtCdT1CvspNeUhBENyWuMbD5s49iG7RcCi",
  "key15": "2GGng59Q6FNqDNmMxdmYXJL8QWnEvPRLc5zz78E2ZoL2SntSagezvQNchRgtCw4DxWXm65EAogBBBbUZmMqLksMU",
  "key16": "5feWmoLzmn1Rcyt22BmC9hgX6GbXG4hYM3X84bvNYnqmy9amn6BPZjN29nfr4ivQpCWFYAdDy4c9rZVVa2t8ueZt",
  "key17": "3ydrr4B8EMXbUcgh9SgkSBh5yBF6xQuBHq5H7g2Dc65CZLWqF9JidhD936pX6rKc6aZTdzPJ7WfU91Ch9hDRx1Kv",
  "key18": "66SLa3mxE3c7niFWn7PD2MUzFkQf3kCRHhqB6Bbtrv6diYQRHG7Wai4TjzxQVJWe5ep4KKFJ8YhTt1N4omobo6bc",
  "key19": "jwoG4vVSbtTiy1XekfW6mSqb52FqrZLJ1zpwQsPxLAME7SVW1BgEprfZGJHNeFyCDiHmJrAZ1bCDxvGXKaiQKL7",
  "key20": "4jXDzRhjJNGkTCxVTAspmgKL7ftnALxxEPC4bg63665VSPk9Y88TuTEVRZBwpvUxrbDndrtSunNZMiqJVz3iXpvz",
  "key21": "5W33Q4x5nVbX2XeYmLnBNVqADPa9Dkd4wAYpLFWshG9dTYMtiAen9cUrKB7vVjaSU1GU4Ey97e6AZUfmkrPHkyAp",
  "key22": "2wCzTaEn2XHPYvEFGteZXJzd2TLF5FWdnFkvfvMosBMXbaQKkuk1CFNYLJKCJwWAKEG5fsiFNQ4TE8X3pBCCj47N",
  "key23": "3hs7sqQNEkTzVjCHqLU3Tih6T4X8o2Mcyabt6HtpDFSDro6BHSCvwjwHt47oWRhtshCCmPd2TbWxQvNkjhjQiwHP",
  "key24": "4x9bLKdtb85U6Z1iXumrJMzBAP4BFVLTL6X6bzCypPfK2Syi7ymFxLhchqthRfpUXBK5c9xVvpX7Z3rkByawDW6o",
  "key25": "K7cam3khz4c64TZwFTN14kCw5vWZG1DGSwiJYBKTbpnD3yyufqDGvZFSm9yJp2NaSEmciCZEiepKJUetv3C9EHp",
  "key26": "3248CQv4QtPyxZTSKPnwvJeQk3E8PMiEk6uZgWFTxigwWazm7rxmT5fZKhuLKPGsytHh5YXZzuwNndoWX1AyRmBw",
  "key27": "7GVJRd87kdWd7hNdDyr8q7gQn6pFFcznta9n3nhuMvLFb3zeCuYmbLU1HcTJoRGnjCmVeuptVWxTwBhM2n1hzkm",
  "key28": "3YpgsKSStJ6F8t6Xpk5qLwonJdwKPzAJg9nkTDeRPdqzFeGMLMekiEHJ2hYSh53kvD5Gb67PTxSEx8EATdMUaiHo",
  "key29": "3iLN823SgDUchXWchBnMZMP1qYAkPc6P1CCyAFB3AyJ7aQ5H9MVuwQUCucmRQt2wP7UpQ4puEkBJrVz7WG2szCiu",
  "key30": "2HZirknX1XXMkuJLV8SskaWZiPs8q82fZe5Ff4NmTNcVo8HPF8Head4dL7e5Sgjp6dTRD1FTnqrGXdEK6HQXZTs6",
  "key31": "4ESkDC8Zn9hmj1gZFv5ZJGrJJ4kMEvNhswTJp8tp1QZCes2s9QV676asRbivZDNoKiLFvpNkekPVSvQVR8q1ZiRL",
  "key32": "333WVuEux62EjLP1C61XrSDJf5nbgBYFXahEAMnfNokiEwDVjAGxqvz8rjkrqdwqzPFhCAdpEymMVvPE8sSjB4hi",
  "key33": "VBvwSbaAeMFEyekuBYLpUAiYUDzAzsZR9NqjbpnaJ81wBCAgw8kWgLGPN7MnsfGcV6YJBUagw57BmFWXBTpSbqP",
  "key34": "3Uj26pADF3PfKU9nZgYmq5cfqKbTrDtYYK2Ed4352jwtYQiBNdkPdxetAUc6iyomyA4fSBHZf8zbXxFuXPjkLTX4",
  "key35": "34gNC3H1MV59DFb6SSmH77ESMnGcnTVk53Tdb1L7FHUgh1bmqorGc3MenXeqs81wvo7ahNS8sBecAxBHkgihj73h",
  "key36": "5RXsmzyTBzkKgFZ9PM3DE6kUkdMYUV9hun8wh6Tkz4rKcqo5AWHTymBg1xj6xDr765Zdsv5K5g6wnPm9KB6axcLQ",
  "key37": "2BA9iEgLchzKL5y3yX6FR7UybVGW8AWbKfEtmereHJdXpXJBMqzrqYVvXSLhpR1iD7GafKZqBK6Uefk3jMHYLDAe",
  "key38": "3X7TzRUp2bbUE8igViHC51izHhEpHHtNRj21221YVwBiHw8UhoBf1oNUrA6k6P5ftxwV7guWZTF5UEGEBZGnUeRs",
  "key39": "5GeUTGPxqDeMsMXRJ6qGMjPbcLVqoZsLeEpvpDqE3o5DKkNydVeczhUaXJw4NgRqhTGgd5nwzB8sH7Ma7WRBoyWj",
  "key40": "4kUScxcSTPkEhFEdZ6BTpYt9Qpb94vz2tppnXc18nvNmtofSq8LyZwCi4ASypywx4LGGBUF5Jh7WG64TpKxn2RpP",
  "key41": "4XiSTTjTpZjyUh3MaowRQ33hnbXuizccf383a8RtggdEmueL1jZWFAsPfVrpnuL92ZwyRA3JrNKCSyuoh3gM721w",
  "key42": "2dqYvf9w6n22dbFFAuotnibcxUvqTvfWKDr1T1M25CnewnGf4CmMbQdKK5rp8Cfa3fL7NG9VE9SwJEzKE7rsUFVk",
  "key43": "Q2S6ti6kgvT5hogBZRFK7XLJYrRe8GqKFdfePSFRmbtWuKwWeMHAdnbiMcwmnxCb1m7PciA6p2NSpwNJJhDeBvz",
  "key44": "611SAeyxSQvS3msbif3KTkUpVHmbk6NrWguhCgyi2sdzV1tTMAUWLQ5cs9kRbhAWf5hbbvTKB5wazTxBttFJVEJ9",
  "key45": "2K7jkwPQsVcwnmRspXgt6p63pW5BK3fuzwMTWp6XbiHo9vNWSxpkvWKGjoMgNVQ5wy2ewwBovuDome78cw89DMgq"
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
