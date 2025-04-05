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
    "4cMQqT5SvgAHJrbpmLZuW1JE2M7ka8ZT2DmF7sXEVQJZ8ikDS2XfhhEwLoijCsmvAow1uhFfYpdZjv6DrERim8PD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZYWDysyXWV7iPpdYoYGgp9rf7XCdxMiLBVif92A6AkAtjSjvXncQikRkE5A3wpJv2W6jepZtBqhcmUpqMFWg6b",
  "key1": "2hCi9sUML57WfC1HW8sQnmRNeAWwKeherMRWWtymcuvoFJJcQa25kk4Xmz88HFkTv49vG9UFxygiLM97BNwuEAyZ",
  "key2": "4xtD1E8oDpM15agR7YmeiCVghNvYCUqYB39GYbX3pRCwtgDxAtczGWB1sg2pjcvaa137cUf16x8w8MrqbrBzFBhf",
  "key3": "3CTN3BvbwTSNQyNDaaPTKYN1g7a3bwVPNJqzD5WzPtKXsAUDZxtc8P7vxqWBcQx4FdkQAxepDH6siJwy4Eox5djq",
  "key4": "2rw6hTeZHjezVsLxY3HXkhV3FtSifMCRs1RQTPzmdpnCy7uFQ8iUF1P3oEXJV3GJFRtBP7b6g6BrV19voYNvaah2",
  "key5": "2AzT68xiCKYw4grx8vDBPCMfLCZupqVLa9JuuWawvyPZvnfEYEBurTjgtwuNUjgNMyEYLi1arXuUobWeeiDxvuXA",
  "key6": "5zpA8HfPwVJcUuTt4jzn8PFwhMnzVJEkWmyZAHC6fv7bnCyD4Cz8ZN69oAKYtrJN4oGrrBzBMxUiMdeHjb4odJ1z",
  "key7": "3ueJqstqY6sc83QJZJ6r1xzdv8Xqr3kUtymWAXzvjYDmknaFZ8WQZXqZvHidS2ti1H9etfVfSqo6M9GGfS2u7Tkt",
  "key8": "3obFzYYYuxFGvvWfy8aJhM4Vm6pR3H8kUrv1qCUVt1UvxNSCLypfeUHtrHJHgEcPH8F6Vcg2Z8Vae2Y1uyRZKGET",
  "key9": "3PfWZ99r6Z9zAR4eHBE5qrwragPkggFQWv8d1GxoZL2fWMdCs7ayzaNnYnomPAg1sjUavsMTMFkZzmPDQqH8mY9H",
  "key10": "21VD7ityvEErqFzfnhhfSsrAdqZesff2pVVZT2KiS9kKPjetXkx872GLJGDLVWHTcZDCfoKaeapoHwpjHzEgjEqT",
  "key11": "54xrvuuPAngHCSns4uszi6987x4eLrPnqMMqBdcLEJMfV69yvkaTn9dCn1Pn8696cTkoybPryY55RUmBsioyBMdW",
  "key12": "2qwMp3c5LuvMbHLvnEHpo3gKHSWww5XVk3FovHEfbUVG6iGGeQmEF9gG2HVED8g64B6MnVqQbE182TqAWGSYYY31",
  "key13": "573qYSCuRqpca4LaHJtmq8xxNU6bqJwKfveCc2sbBcZDJbpGe1cBjTtRPPy5nw7jxdFyadej6xGfE9kfuxbv7jVe",
  "key14": "4An5kMPubCTzVgejSrJfF3ZPTApkmN6LzRZsDBVVDjg9vEfP8JmZgiQsFUf5pRJwS3CxvypPqNZHUAp2s3XFbXvz",
  "key15": "4i5TSTW7ENBbWBybRaHrNifknENnvj8AvLgems8A2vQY1gseXcHmynb2MANcHq37UTsvvk3kwqGWKu4tiGbnrvk7",
  "key16": "3rZjbp7ShaxzmcWE6bcMPb36pc69YfourBEoFjYDePdEux9pyinJqjb97MrUmPDh7a6Kqw1cEuiBQqTQifn41Xwe",
  "key17": "3ewi11kZU4i2X1eJZxRp1k5VLuWnYEyVUCPdSBCA2DdndF2o7sHUGYgiPtFe2focHg1oWug51cK6HN8pxaCT1dTd",
  "key18": "3hbwRNYPYtFWdbgZS7zc14WyXzLtMX7h7kdutSJNrgVJNfhkM56s1WM6WM4Ba9vvipS9VyXqKMurzRBUjn4StGDq",
  "key19": "qU1m6E73oTpL4U7CWpdMXnZ5FDWkZdjHgPUiS2WBoPHJN9GZBbLJ9kyz5GpXGhbpNaB2tBD2tRr3ctTCrKSTAM4",
  "key20": "5K23YbVhBvLRfcohAViBVSZbb4wCx7qbZv2gFxUsURXLWMZUJy8BJdxQfiYV2mrgtT642fZKPEhZ3gYzis42NKZ5",
  "key21": "2Logmx6apDCgivW7WTKxhnLVTjGryMvLaDzMnJ1JoyFQ4PFDwnWMoLexkKXfyqYeTgsPfivYTDqWTtkTKB4rji8",
  "key22": "4VFRijK9qh5dkDQeDWQCC35Wn9JQ5TzxiLiANs7mrvxrDwByzRh2rJf3JLgHh1jknEbERRFkxaT3Yh9ardyvK3cH",
  "key23": "3cUD4DYq2o3Ufm2jqEWYaWg9ifJzjDjxp8D2Yxb6ifscQ2i4gTFtpJoEgx9VezCFYBcC5Lk3pSYEpU3ad9n98P9r",
  "key24": "5WhWvjmQ3RRSfxMzSjd4bLHJEWjB2CvTnLkyxqueQ1w6ThraDLo3kMAPSKXFnGiZao2P2m9rd7N7KEEQbokrvzFE",
  "key25": "5jUNv4JqKMNvbDd5UKLH7ufmD7SC2yADP8oushZ5ZrFrw6zKkrXV1e7KLgGEss8yiqVVaWtUvL7WyhDmxgY1sVXD",
  "key26": "2MP5fwy5ctqtXNmmWwojkffzic7GGxRNHXiDD5UTdvay5tMSWUT1YHHuaFE2hwYFD4prdLMsMNe3ww7ojpNzjPnF",
  "key27": "51QqqESn4oAMB1ZpLcpmUYBQRuKrDxNTkQWDNF9q4xy8j8V8fBupVET4DNBqRav2o8heUP92hLBQDXmS6kjvGVv",
  "key28": "5V8988VeC6xTVGCnT2ipLxe5g8q2JrBPNERBNCuWd8VNRwV4JnLey6pHqtNzXeSCjfJ3GJLvp7Z53Q9ZWmfrxetC",
  "key29": "36dC4rX5qukMMf1pJ4paQrXunGanyTKtwDPgW6WMhxB56az75M7PvpGVTqxLxzB4Nvse43ueRqzzybA4QdfiojVP",
  "key30": "5RvvW6xHKV6TnCwCWg2dFDdPRu7GY73B8b1tvFH2L8mvks5WqcBfzfmrncWfYFUJaUoexUGQLsLtZARr8A3tuoML",
  "key31": "52hkZfrjMpp4mrgGtK1yB1Y14tEWPN3hnZS27vdFdTM1n4WR9nTwP61j8nbTEJixfrPgoukCGvvBpGF8Lfp6Mhtf",
  "key32": "gDzDBZBL1icrDzN3sK2wxvJ2AxttYm7JNKgvwN3i4vProWADhuyj2pyrGR5w96fgNTFFmUMkuLtpSQvkHyp2Vmx",
  "key33": "5ZgAPxsToDRUEB7gCuiSvLCifh4VaUXAzfeuuPbPm6yevQYhJPqnfbE5scZz6vYnNWcVWmpVXmfgZ2pM2GZ7T1FZ",
  "key34": "5D1WZAyY1QtWCTmyZmv7wCiz7kMNP3trdKLQmda9cB8QAWPPsnFN8TQAo1Wjf7icyB15DgcBfcxjZXnNATG1KG4Z",
  "key35": "4n4nHPhPz3M2t1Z7VH3rg1FM2UDZzfCVSu8cUP6VWopUUDf4xw2iwYh41zNoBe9Z3vYfMiY62Z6CrMVRTQGKXEBz",
  "key36": "2A1Dbe3bK3Z6Fr8dCj3gjjAZ8pgwUEUpeyxmDntJbyCGodMg5EGF1ZWL6kTU3FtaJmPnABa9FrsCaYrS2FVmpbDN",
  "key37": "5hsv33eMQNXAE3xgzLdRjDRFK71NNi1o2fmEJHp2Qxdtx43a1thNvuugxGYVKDX74BvGXerrAQ9V1PmpF8zk6iqv",
  "key38": "3mGL1kCW6w84363ZZayzCnMspC95KK5spFmTyebKary6g52ZF6D9Zc9VwDnzKkcn4vShT6yeMWi8YdbCxhJrpYMZ",
  "key39": "5b2VGA7e5ibGeZqCTxJiWYdv5ujoLzgb4tMVp9qe5eNsgai84zxS2cRNubbPvha1wykz83xzVa21uEBx54BUx4zu",
  "key40": "AK9hVgQRP5MoAFcei5Mabh2473p3hXb9fTeih2bus1WMrPtoqv5R5yJiPkZ7R45mwfTYCRUrwSKiqfoaiiw1Hbm",
  "key41": "2PyqPtSh7jDF83XkvHSVZRpCbP5ZfXXYxgSpFCJBSZWnv77jLCGvit2NAP2k5MQkQFb36TqaURaPPFCdqrsGahNB",
  "key42": "NMdXY1R6ojGJg8bApzjWqhinTmPAFjmydNvszAivzeo2fXyCFqWG4ZvhoaEborGwwC9NQzaLwGqpCMqA4zPRibW",
  "key43": "3jzNbf9XMz9uj56x7uJZeKmpgjKBQut44ncbcAo2h9gcgcU1Vs9agmAYCzk17QCh6wYsY145AZikuVkGABGQMS2g",
  "key44": "51NTYRoeTYzRVGutuSzg8xNAFJwrwsCk7fDRj3b1LPrfHtGJCqTzbbKNJ67HjDkdbdSLCL7WuLxr8NU8VvmZnH6L",
  "key45": "Rb8BKzBsyQBMztFCVqvhy5NYui8yqVoEi4kmyPtLcfGg21acs9R7wT8bDg4r6y57x29GnawXy5U7a6eZKQ94jWY",
  "key46": "5xy1hy8ov9tZ3v1osHo8G9mTsJ71kUgvMR2qg9EnxYTtnCjKVs4NPUgQFrzmwo7pf8eYbd2SwNQbbZm14Q4yzWwH",
  "key47": "3fuZiGH9UsgxpoG5vocpgRxGDNrGvvwsGTKCaJtdmd7Hn5MJSCPJ8nHNUbZ5cADmW2J5cVZPbikNW2L5qPZLQc5K",
  "key48": "3Z4U1coAb311Bbopkd8fZCNcSAdedGJteSscyqCNWUuTmJAAkh28kEtpFu1dPuaNzkdPmkkid2RWbK3K1bvJYJyM",
  "key49": "4M8Hpdek26fWL2vJuUdkGbfLzxNne6TQBxDF29K5StTVFZgSmXosfVKRN9qSyoU1TzuVe6jfuGqNEx3oq3VoT5YU"
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
