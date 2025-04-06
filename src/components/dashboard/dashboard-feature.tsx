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
    "5iwqRH2V1kM8rbJBMeVeCh3o9aDr82ZNVL5NFuc7xfhmZDQGhw37FpzaQrHPVTvWoMoaab4geE6dnEhA9JkdTQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jo8RQgV1t3JZr2Nc8xtCk5eq8yRagqgTUPPTb6Txe8RSwZzKrJdtehpkZc6iyJyQELRS81NFTnGp6Fwcu5EmJi4",
  "key1": "3NANnL3pMxtyTYturVxZZc3dNiekLYiesMp5KTADCCbk3jyuTPhLsMCpPHotGFRzyUHVCDnzzhchkHTR6nUb9o22",
  "key2": "kwLzidakCdk8N556ZDEWLX5PTsbLTJuVbwfM7zMgR2sQDX5hSAC6KSU6VveFZjRdAxBcFetpCfCZ8rxMBRRm6A4",
  "key3": "2EKAXaL4ghzzYfFjEHCoMyZGrgWsBoJKsyow6BNZerrMede7fomXX8G9ZqHkYTZ8vUr8d6RVruxtuSEndbpBNG9B",
  "key4": "27tQtvGYU3KfTTjTiyjzf1Pw7JSB3gcCeVUrtQcsgTJK4sT3FvwmNExYqXtaH8d65A9JExqsWtpneVjDw5K8vLqT",
  "key5": "5wbJAZ8gFUv8jgQArgCEPGCB373QKwHy6cxJe9Gf7zH5xt2bUzXrgrEqdd2J2wweYYottbTPmwWYg9fSmSbafRYk",
  "key6": "CFKx1VMzG6NXw8wUR72gbWyzEY2oXUmKnzJd6jYJ8oSsAP3EGqTbKUkLRTEuB9soX4fYi2snG2dzYp767LFqDSE",
  "key7": "2K4AcNKFqSZ3xvrUCheAcoDKZ4JR8f19CJxdjnPzGmSQdaPrP4WJVPC5Cky5vaQjUKBFvZ47V7qSaVmDnsK34i3t",
  "key8": "4p553tUzgBsRhRB7BT7FfB61RFSRnL34uHA8HYxKnFqcCyFCSCjoKnbDnRfFFE2fMt5GusLsqJWNCXtWRCpYuW3L",
  "key9": "4PvKVuXC2roD5Wex4RJgextenAo6YRHsacFnj1PnrCmXJQj5doZAFULm827zVQVKDJSGRRVaeonPUQu9axBabVan",
  "key10": "3jnR8qZFz2X3VwutRQF7WQSBWs8oF82u3McsAh5ZKyDu94Z3mXqR8h24RsbLtdvmxAC9XynEpPWcJnhGCL5zSiPu",
  "key11": "Qymx6rx2rWtNiBUzdbQEYaXTg7jWojjayc3ZQYdZLUHUe7mqbCL9EZgDQZFpbU7JNWU9sroCUwA1cxJHa8wHJ1X",
  "key12": "bnajWcaugq7wQ5eK2DnsDcacWBC6cWe7KGcxqeqVaiBAzYmXbaUTk11GxqQtiE1w31r27qgcCfk9WLWfQiC3cEV",
  "key13": "5CicmKyWKt8kwnnDBWBnvZb1wN46mxzm7KDGvKVhiwFjkH2MTVq9SBrQreA8DCVpExNZU1SYHLrb9GKF9jSNVYQC",
  "key14": "5XwQgpE2ufRPDskTupXL9GKCxezDxeEHcfTkeTBc4paoKQcnYh8fZCgew1hgAh18yTJb9nA338YG4pdTPGT3vk9m",
  "key15": "3uevRZNjwTb8LRevyX3RxBxSiENqM7nrxb879szxwnBqbxPEou5NcjaGc8NgPjej3SdfPiWiX3rYrAQUHQukpyjs",
  "key16": "2CYkeoPhH6cUQ1AC6gon31Db2FERzPAYjyjHEkjuVqV6AoKavve34qjDPHf27QcGFkhpL45vTnVuG3WJFdYHBkbB",
  "key17": "5GBUdDeWWYBNMHJMcyrjZoiW14bLP4g4poRvJqg2MoV3tH1BKPXrnUWE8Nc5YTpgrGJCSM9ZaPRTcJqxQEJj5eHT",
  "key18": "3HeHCLNUEk6wjcjFnSrxuJbqVkuLsdZaqe7kBS5VmwinwaLi7AmezBpjveQ5mTLkYvqWtCRwfqWCCAyXs2fFdVV6",
  "key19": "2E61sBKx6qUa4eQvTq5qWBQaMaY3nryLUA2haSgfg7RcKeAHutkfXwaYMxxoxDik6UPEdQ62H9UfMcA6qTv3SaBY",
  "key20": "5DTi4m2irRoCk38zA2K2Q7HafrRnhTtg9GzPDFxa2rPMn1FeNokeNs1jAE1ZiLwfyrJ6LDa5rqc1SNEqCGExs48d",
  "key21": "3gxsxPnpJdHZypemZbb14A7HkZ8MfGrt4R6BeGjnSZgSseyzPLmBWcoxGarYwcZ1aTRct6454YUhrxjiY3eZ4a6h",
  "key22": "2nic1pesvxUuEuimCgPiBBp9z7k9zqgUf4oi2rXaYMkh3YtDAFg7gdLgokYPdHTM3SBK6ALszNCd7BdVpX24xae2",
  "key23": "4AjN24YutGyFwXXpQyroNFN5LuwmroXyg9zT2vcDFZQwR11xUhLG1yV6doGeKRqLYv73HkAELWmQoobJcqjc73VN",
  "key24": "2wWN5sSBWvLBpsRVrWA2kS6TjgXbjLS57E9a1K5g8jdRmGoUWyc9WwxJ795YBtr4RcBqBQQgzBvLkYk7N2TbY7FV",
  "key25": "mv8NSycnXtTYh6dFKigJVmn3CUQDmuu7MU3KtuQH87H1G7RDJwgbnzrw643oWMW4eity7YgSe36ZZfpDadPMqD9",
  "key26": "3QTtxFnHGYHAkYFurrRsGubit6mcZUALXwCGKN5kdFyCnmYVXG2XUjCJwJZYMgrEbwp2SGY3XT52meTaWhc8Yh9G",
  "key27": "2HFH5BihRJChpWdLaQvztV2y3rQ3RZAzSfNRsuki72G2miwZt9DdUrK3XaREKBfQRQJsuibVjNZSXWdXkpd3cXDu",
  "key28": "4QvkyPYywZH4mTwA9SAqCGpqcMizgHpNAC3pFGFJfiAHHf8VZK643vxBK74nfu6kSwTcrVdg7SSJ8RU7cSeBzNqR",
  "key29": "22w5S1eUzbmNv4foDDLviyo3gdkk6U7TvbmWerMqxavQRrtWPrrtjGUmpVygYwKHK3GaAg42BDEKPLNA1mnm77tF",
  "key30": "3rsH86GkGawTR1F5CXabnEbeYVjkJrhYGZMwTvJdpKqQ5oTd9MYA55WEo5fvFNNEhRGsovpHxfQTXmGRuDnZkTgQ",
  "key31": "VyBNPrJtFT5GHHcfBEiigwQnZBGDUWn8XfjRQppmnuqREMGg9GMJ9PXZV5vPxBffMwy5cFxXuziNKHkkhzQ7KcL",
  "key32": "vxe9KTM7hx4kZ6A6Lbib2vwGk7rSX5sicr1dJMJpqE7dR8cnjT3W5esmB8MYRBJm2Vgjzjq9jrhFwzpyYFBRt3q",
  "key33": "4Jz69AASRxuApGny3MpRLX2CifqMD8X32YgMJ19iyfDtaNfeC19gpuokDxZD3jvCGn9KiqHWpAyE4mYwjXjVpyWi",
  "key34": "2DRbYDUpdqEbR4SbG4KM7j58FH8eHsj7hZ3eBFiodws7Vik3PX5KKaVsX6KJT3QUEDMpi8X8Z5tJ56RRSV7L1V2z",
  "key35": "5DCZPXe7hUQC7yB8PtfMDVMQDrTxabJXeYvFRRsBWgNBv8UwY4FhJf5SRbXo8NDMQZdcVJuykSZ8k79juuDtVdTo",
  "key36": "VBxgecgnV8Kp3PWPxnsn2hQ8DEW87wEepSQdnHePY5tuZzzEAS6zLx47ugmdk6hxPH7MRERVhMeXYeSRNksRRDK",
  "key37": "4Jcg6V8hcrZg5J5LhZoL5NHiXTVFb4fT8GETffezeSQRvJPLC5igpxTpLv13KTCjDqFUP8MCgTReFx4EynjPL7Qb",
  "key38": "4ZhnJreJbAAogsvKGXLdKQZ1zosxRADMepufJGBxsaRpN84dCvnVEe9WtGZmD3KF83AtJ5z7xC27PxJv1qHJyyZD",
  "key39": "3mv5JVJwk45jnex19bEfvzyEMfCgnaq9Etdf4NiBN4RfsYRypy1o89MtNmpxTLXiXYHLawA7VeWcuF3ueUGPY7uj",
  "key40": "3PAFhkXobKGLk1W6LerqaGd7i7eyA8az7anRJZAX7S4Vj1a9buGGzBGNfxUF6AHEMtn17oagCtuNEMUQ7hTVWduu",
  "key41": "3XknW18fWPzrHJVMuSL81HYGnwo2UcaZyujSCA2XnBHGGouxUYpLqqPQcDiSFccWfZ2H6CSL1KYGcuSEHNcan1B1",
  "key42": "kNQqQRtLcdzTxCEPw23UPRaZ5GLPkPeDGRagaFp4CPNPw4Z3CVa7mTRhuYrweXaUPjGkzX1jUoNPGkfrpeWb7jY",
  "key43": "t6Ebg3RguuyQquCuvg4azDKFeE4sAWBzbXFcu1XLEeBFJeAgmVCteEMUduM7rpaz3sedmJCLxevQCDKXq6kgtJw",
  "key44": "4HXzD1HvekvD7hSoLaLnmQKCxeRxCS6ocqTnTxoVvJxaZ4bV7fbfdTZVg3covWno2KeRZoVKwGvARuo5WwCVZ6zA"
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
