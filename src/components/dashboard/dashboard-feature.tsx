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
    "GPkqX7Vhkb2nKYwAUBCWe9NEY6j57oy8eSJxsajFv6XfdUciVUooUuQ7cDRp3Z8GBbaot6uT82NQK5KShhiAXjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215emwkVasfE13taYhKZoq5fxAV648qkxDqJegT9w9kRzmx29prLuLTdBRAwy83h7XuEECmaF6EWsrCBKymtj5eB",
  "key1": "2NpEdmFPwGUcTiuiWiFCTnwwBNYRFj13RkTEVaW4NpLyThmDBGV3NKsMeBjspCeUQ7mbhk6mrUEwia2U7L2GeqMx",
  "key2": "2VZTGjTeu8Zc6k9z38ZX8DYbhZFmY1udXwN9dbzvToNhENpBsMFBX5jETtFYPLnAKFSBj6UFAeMC52CnbMzV8xiw",
  "key3": "5KGWLdBTwww45RLyhXZWwmDe6WkXTgbPraFd2SGbQ4xGHnGkkAN8vf4AkzwdxxJWKguhhSb3kJ54itypXeY9YHTD",
  "key4": "2uVa8AztG6s6B9CQPg2L6Maj2bMmLpSVGNNFohCHXu6nbJyJMvwxsN4pqHmXfJgPH9GWbPJHxdhL5BQuVMhEGmxd",
  "key5": "2VbPcipKktk2sk5CzSuxTbig3Kwa43CdGcRB7u6jGuqPaXw56FDTwYT9Jqytgoh1MSxM8cw7wGNHA18b6CUU4XkN",
  "key6": "5AQpQJpHxi8CGMxq9bRbQwybW9C76pyfqQ94M2Wr3DJH7K6kQighjaHLGPw6mrDETZUrdVocviSCzRykj98SsNzR",
  "key7": "5rWkTwC6oHujRJBx1Mm47vRjeG7dCCCxx3zNhb6EYLgucc6FiaTyfSEHvQ8SPzCcuETA9muLxooGNmvexk6fPXrY",
  "key8": "2fo62rbrpP63ByAjRL8Un9iqi5RMeuRLBG1SAhe2M2cQWb2SYrsSMR4THXyvXWZKgywZawp4gxccpYRzzVfPEmhG",
  "key9": "5LWQAEH5a1xiXv2eFCphFupfD8x14fuApyhJ1XSQGoiHnYmHqBs4iLkqrUYzYn71Cak8MrVpXmk2p1Uwzsu2nLWc",
  "key10": "3NPASgEjqbUpV2e6qzxvbE1EWCvckzBKe4KdyUCijFQ5Ke66vpHTFTKEuhcHCWihSA3FdebdjnESwNaS8L1cm2BA",
  "key11": "hoUvUM3e29RhrewaA6WU6bqFbx3JMvyoHUscASBtbi45Qf8vhn37u6oTM2UyxJrcd17NCMhwuPfgHRYoAGBG8fP",
  "key12": "3C9ZD1Z668PRKd18timcRan7QdDAJ4tDpDM8ekCF9nKNwp1vh1gdCNq6ArDakSS5f6w6yxaZj8qMHat1KA45KvgC",
  "key13": "4NXCteVANhCpXSaCie9RQMrZSdRgwQ9jpQquQkevknXWbr5WDsuEBv5G8Mq39B5QduzUnca89d3rJAK1zm4mkhmy",
  "key14": "4AGwyqamS6ppwXYyVVPhvtdLALwE1UNGy7zEkBdSAvndfiCxNj2hEzVRzzLr5U4v1hVw7nQBce8CEgF2SEYbuuLK",
  "key15": "2coQWsAGkSQmJTp1Km53nLPLhDkD5FkTLgAmkxooq9pEqDjonA7SVhmQCBqQqzvQBmLESdJey6aJsE3jhLbgaTdQ",
  "key16": "4C2ig1rKCrs85RBifHJEM7qAnWZLFxFeXv1MKzdXTxm63EvucNsFrPRXzfLZaVKGMZacyCitmwaW96J3Ei1t7XZT",
  "key17": "4MhbLbwFYX73sPQ8kfmC9LbRnQ3czNnEk1BtorNzuNhPpPJiUpZQAntwh3kk1QDAKMbBk2xwcCBXCn4in8ftH2NQ",
  "key18": "5qGFtv12sQxQsD6tk6QriM7u6RijT9BnexT7GUUojSpztvUSAZfVzHm6X8Sr2LaX6Bux2f68LVKWb16L5GVemySy",
  "key19": "5VWaqm2Ckj5gq3XFMrMBGw7VE6rZeB4CYjhwYTGEGMSN2SAh5hvwMx2fLg2dNKhxULgj46vsknRUzLvyVttCQNNg",
  "key20": "46BYPKdCf47RTXRrN46wv24izxz5w12R1vqzHqPTh7UDhkuuPCcJqX3jmT6JtRTSWcEupRA3gymtY1R2QzsQqTRf",
  "key21": "2AAENGvpsiBzyksuG4dVU3SVi3zizF33uwj3f8ajPRQwx7sfffHWHEU4t2ahz5K3hufUgwVt29T4oC7GZSayyJBy",
  "key22": "42L4sozjQD5A9GPe1piarA9LVRV8ifG4c1FzKviyUM91jX4d94PaWyN4agfW4K6egjqbp7ySFAakosX7eTzARrww",
  "key23": "2qQ3ty1eYWSGVao2JPqY4BRXrnTUbyFydmdqdyb9CUagDK93FTSBxWVwKVSS5kdupfeFyz7CzcJdDKyAQBMALw5w",
  "key24": "4QSaiUcqLh3A94UjzxixdxqNxhg5bjUMzaYcVw8oMgpGiM3xCSNF1XUPWpyG22wUd8ximecPfHhPrv9URZvRtLkC",
  "key25": "2yR6ELHKgvAMP9LkRhZxKTcndFcCuS7BqSsCt6S4KXgSeBxqwxZRXxquH4eQn6Hj4rFmcxBGZqCBNr8xMYS9K4hm",
  "key26": "56oBS2UR6wwDru77WEoBvfpGXeuEpkAJGzPA19FgRKhjjgLfcGkPRKbFEyDfNmS3CRAw24KYhbyYk4BzodKNZ5Cc",
  "key27": "5YvNvfKTW95GW5c2qTSK8SnfDyeG2CKAG2tPysr6kr1sfbuZDW1id5n2gy8SFK4AbBXg8qxho7seynHSQ7yrL9h1",
  "key28": "4ae6SsqfYMdFziNbWPnrJEmT1nwdw4FGdCR3cQ5XBmu8mZ7nNgyCHK3po7XsKjmJRpQS4hMThrAdeBciGtic5KNt",
  "key29": "4gReuXeBcdMZ4ZCBN9QN8byRz9Ae2KNzgdvEpkRcQ83LA5KgmLpcABXzKQPA2Hn4zeRkgc3RcLwxtL9bZJU2ASXw",
  "key30": "186LDdtC4WYD4Cjnsx4v5ZYo1wohy1yF4RPQzS36SL6UeX12hq5R2Bu8mcG3L4Gnv53LUjWTu8rxpAXypAzuYk9",
  "key31": "264FNnoH2Lvemj8Migib5gxJ7FpgWaDf4x7xqkQPhFffCTzQN1hoZPYVCzZBwumdQ1xD4WLUh5471jKjrrqmJb1Q",
  "key32": "2KQTMoTsw8MPT2TejF4tDaK5QGcz76ynVMUjsRFdyzGSgrG5srU6Zv4WTJzXSnJsYrCxh6WYvcEVUGtu6baE46At",
  "key33": "58dC5QZPrJbrUkbdA2UGz65XDq4MefeRLpsWcyvNmtSDWZaregbFTLpJ8nonMdqGmBg8Bzn6q6jbdCdad5rLmBdV",
  "key34": "2xQitwLP8dYoU4g5mRiAZVvUh1zwd7Y36YFjLS1iiUdoCo52515Kfb9SUYmxFi9HrVqo4otUJ47hWDjuzGvrcFW",
  "key35": "zYWTmjSTZjJCGxRXBibwV4hwy8jefWCpbSMuUXfbSjVfLArVzioARxfj7JuV9xR5TZRFQ4LxntThFFHX3poVFvh",
  "key36": "49wik7rNhQ4tJotzE5rCDpKc6RiuxC2rbJhEwytmmLb2tkZZkUdkYZYekzFREpFiz5QmY4Xv5YLJUFmARvEqVD8w",
  "key37": "4G7kvHVg5YiRqgs9g3VC1i8UsY8xQHnysboHEwvb5DyXjQvnM4uGybwEjJP3j8eWA3KdmLLMVnYJcynsjL68X5GK",
  "key38": "5WvTHBAS7wjGY8CxyQmpwBCNDfBCjpk51KhyqaGVV1q8e3Div4jCoPkZUSZhzcP4RvPoyieFr37chHy1qFDndXMf",
  "key39": "5jaYoCj11iJqzBrfmT1Y2KZ8VN39Bk3wkskt35XM7G9zcSp3VnfkdLJMsjnrvu6q9ePUXXCb6dNJ1Lb2pFGUpTP",
  "key40": "5KRSnRaWgQs5yanQbSbpiq1AZF9JjJeM7bxLi5ip7Du9o4kVeYncXVEmgCcdo3Mpnex8VDY5wLTEsNmhAAgQdsz7",
  "key41": "4twEmeXwxMx6DhZdWw5TGbauvCEqL2somSpEWACiCPbGhTjJFwCL351yKECXQrTuYfxn1c9C5RsAE1iGWFgST2V7",
  "key42": "ZGWTnHpSSgSBfcosYwMKpdGnHE2oyvLVBYMHFAmdHddoSGkg2EscYgktkQeKte1T7GeD8we1jxodBP3btUQ3fRU",
  "key43": "51X3QboSZuEP2foSPKMapPgxw2xetZLPeLP3Upyv5uyTWZbYi5LUSQPZWaGbZWeVZuStA9e2MGJLf9DWJico9YXs",
  "key44": "NeMEw7sw6AXtTgsVPRUkKBhpCWcBhBSzYojt3uqUDYtWKGyrubemAgwLtQQ1vVsMD4V7g3U5zHa8jU4iqt8aBqZ",
  "key45": "1WgHyEXmR2ux518Xx5x3BdVoQWprX5Fg26vyPRm6Fowru5wiq94Ch4mK6fpd7MKkoG5MyqSH7KGDfuuWDFtfQah",
  "key46": "VNy4nGpmH7k7yUFbE5LFYnXwj6v531y6uUwE4KKT4MF4fCjTnRSM8tQM6Diwifo1vFdxGGVpxvGFxzAHqLmpprA",
  "key47": "5Sn81Hfmqmwkm3UkG3ojgdTENviqJq2AEfdD1Ry7ppTVNkKPL1JYAWB2bM6fYVjrxE3gAGrkLZKVyFfBirYStbPv",
  "key48": "VmXedmEfFzM3GM5oVhycg5yWGHkPujxBCugVtcVorvbZiR4oY4bwdJWYaWzbS2V3VdPPH74m2ymyjfw23Vr3A1w",
  "key49": "21Fe95296hWajnhNshhPuspTidK1YzkR2wRefhntpUVLPDfNYjyDEsz7JmhkJCyJNFKmZ6pFM4j3ZZDPCRtLYGBi"
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
