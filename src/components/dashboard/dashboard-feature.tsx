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
    "2iqyzg3miFCkbhLpXmoRZCPcnTiWje671UtQ2wwTSUJmQa2PXNaZnB5JurVLtZeEq3biK5RkuRRfqSJafad5raPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwfbTAoUbcVaW6RBw9gCyq4MXgsG8W17AGkD9y4rJ4jhB8nMUQ7a4m1r9LhhQUozgnxQpWqPsn9mbJve3wXTLgv",
  "key1": "5NBwzTZ4n7sgcgyn3JKw22GdwmnPpXe73EQGsavFfEZbJdiMHTyrhF3CnzWpDjkF3Pz3Ph8v3u1ECxbEYCq8jGCm",
  "key2": "4kC2CbyKAkXqF7PgxSYJyVTRMAvc4AufrSPzUCmYcgmWxrf9Q7k1PPDboXGr9D4KEWGjizGvVvXVrLyy92k8D9TA",
  "key3": "RMNQQptPYbo1CsfQ8FCGzGfaHm1i3nvzC8VnwyEViaZoXZf4NHPw7LvFAZTwfkJHT1uaFXJV4azPettXo4KeJuo",
  "key4": "3z74YvyLUomQ87JaaeF1BB46o7MpeAoYTrmqYvdSwvr5hMkspNQQpD7yJ2GpwnCeax5DNDssH3YMCuiHCJHLEy9m",
  "key5": "3ebkvKSi2mtWhK8smrG5KSbFvNW83XxaumBjXTjbaqdSJLmFgF6fF3qU1ztWbzz1QJyeofQKD9jBZG9Yb7oUrMvu",
  "key6": "3bCDxdwDBmv496w1MxGWmWekmZrJeewVGUAoxQp22XV5uETF8XMntXhx424xFZ4iv4gvs5KfBo8GejMbyeefCLk8",
  "key7": "3DsBttbV4sbYFx8BijHoG9YRP97ZgAqEEwtyNvSLYN6WvKbxbHfHXjR85wxmzGx51FqhBJmx5CwMQHe8MDx6qWru",
  "key8": "4zsWgTqutRt95c3YwFnvhrNxV31oL72Qrw1tNaD5ZwEfrTbZhVCDWL5knCZeBnscJNgoTGHWr9b1ao6Wb1GD6S3b",
  "key9": "M8SxBmMVcc8bpozh3npaKiQJYMKvnacWii95aMannegdTJL2FndAnGzpBYgQbDiqv7yFCC74xvQU8TQ55JxgKyH",
  "key10": "nbxbMh2HjV6zEV2bskpag6AEHgryqTh9cLuY9ZoybH7BHCEwRGkhK18d58GBvXBhVtteDKgtwfYo1VuZbPXXTmm",
  "key11": "3Qr7EazsuGzoZ5DFSPTcFrWHmLZgxty4KqaiWCk1rFKS2d9P7ZonJNfcKBF7c7D1EijSXpomuuestVex7b8mQnbg",
  "key12": "4WMZhjgWCgmRXtsC82KJygHCxgdPwgmPbspsNb4TY2Wok5HHVnob9ZTupJ5gNYRrj3gXPp47dksy7iUtdisiTNjx",
  "key13": "5UVvVpdwdixpNwXsvncb5BbUcjyX9rKTxThQj2Hb7kXwvfr3WjfRku7SWfFqpQGUc3rjMSNnnCLVEF5GgFq8dwG5",
  "key14": "3NJsY7175cp4s9QCwDK45Qd8U1MUavzhchmVHhWYsYxRk1mJjn1AjM6ri8ULvDFKRUGPHejNzdmeQTzyGbjwrqKf",
  "key15": "S4iefjCDqXmnyBZAGgA8moAgDbakZtPkKfVJ649yMEVD3U8qFjUKXyb2goctzYYWPEEB9xC3RMPMBQsy69xtnBL",
  "key16": "2gweRgCa5nd6kWMpvNyijek4EhVSpvU62NmmsvpneezsLD7SviKZXCTxVD54E9t3Tm7nDKGK4FeTy6V3FnygS8Gh",
  "key17": "47dp6ppJ6Mrh9W7v5J9ZyiTExfqKdcvv2eJoTCQ6K2ntRcp7RU1QCX1xnJnvrUZfAEmX5nHcx4WqiJThQvhuyAx9",
  "key18": "2pCxkEzEVEk7ZbbmJjZf1dT4MYqGEmD6fkHcCJ4YS59t7bVevCiSyvDnckQa61fEeuwx9VsWzduXCvzhGnFwgjLa",
  "key19": "2roHfHJ2rbdr7arnz4PhFwodzyJCCUPGbNDJATykmqJ7Wv1V6gZKMKHzkzqsdDgHVT749vBH4BYq5jdKh8TmXoDY",
  "key20": "pNuhQL9B5oKU8p6aGZGXYutZDvwjPWsxeuZ9tyUsFbHmxjWXGTQPjDAWDa7wnFt9EEqnsxpkfVg59hgBSzGQXjK",
  "key21": "5xqQvLBhXE2vxLMDDCnbgT2dF5XGdNQapptrGC5LcuuV39jD1HaYaG7f2pXKHLzWZ6bKwr7SqvbTTATdDaeAqrva",
  "key22": "2atKYdRLdKKuRc2ukPXduzmwVdoVb2JddMN6ffToeq4Dp8PWhjDAdwbJccLdbHKMjQjaRAy2BC3CBFDPp8sHZJq4",
  "key23": "3BCGkbrj4TMpWdxKBzVYCLsqVh17KpJ16uML3Jc64FRRq1UawSj5qtF7TPdHWPtzb4f3Z2dKKsXGNZnoxwyxieSy",
  "key24": "aT89AZuwmfkou4m1NhrAqmQDHkXimXjbhw8RedarNN2rVrHv7ahJgtoH4kWxKLoGirw1Nmd8SZvULxo7FWKAHMZ",
  "key25": "5JkjJxmB18BYuPFoqJTy39TayvtsGGD5ubnrEZf6EHACWL8vnqiDg2PstZ8r2NgJzZyCbgMyFDuznpAkYXbeFyGA",
  "key26": "5WQyC767TpauAuAEMANggdiX2gYFCsSoVNZYBuHWMb6HzPZ3ED9RLnBWTaZPJ46Jvf1APnoW8kg3k5XTtPHjDqbt",
  "key27": "4G55dTddBoqDpJs5Vt9UCxCn7A6hJoEVe8B7HDCUeehCpuXjTdSRNP674NQwfBJrtuDa4bNjdTjvsexQzZaVdTnC",
  "key28": "bjdXWjXgvR8QeNpwiLFjYFLhRWYdeUh8uhzVgTJk5kA3etGbJgRbJqidf3E322GtpzMCMqAddEM8jFLfdKBRcj8",
  "key29": "63epGpBLzSwREjJ5HyuWvPZgp7Fjz9YVJiXHaLmJBW2Wh9JnNdn8fjJjivRKiKae9GErTXxgWBdknsxBtGAjApiz",
  "key30": "46BapRMribchJVPDJM3wK1PKRYHayNLdpX3KtMBBNTxh63zQBjsZvzGQSw6zfughsZYr6rfNKxNbNXFBNCqFZQpX",
  "key31": "2xeSvDSNwXqNMTF3abVr9GfRc6LZH1AJ6LXZcqZqCYuA7FoLqHswSbaMQPEEhzegCMuzoeeQntuUG25aUkX9ksnv",
  "key32": "X5NLwN2neqYmcErz7e8Whd47bjDzXrViYQCVCR9ZggMhDmBv2UxMTiy8ia1WnKnXV2vL2gWjvPmoHcAB11T77TF",
  "key33": "5nBJAPvEjUfBZPnRcxjBsUCPXMaCgotjDytcqPyGfwc4JuFTjQfrzrJ62xiMDuoFMzYkTxnHRnxpBnyfnvNSj6ok",
  "key34": "45PsBewytTrQY1Kb8VPneDsPWEyKRKCVbZmd4KLCdUX6T5DbT5vTPHVo586qvGaSbyoqXQuT4A2hDH1Y15THbJkp",
  "key35": "4bHaj8X7WmBAwNS7cZ99Yg34JpB9U1LmGzZK71ttvcfyQBdD2diHhCLkNT18nbttrRezqjdmsiwoYrARpu7WAY9g",
  "key36": "4ZvuZvPYZ5tD7Pk4vSTTuk9Uh8r541BEgzZ9Kxzb18tsCqzXySfAMMPAr9BkJKjkoViWrYVWY8VUFjABH77pjd4r",
  "key37": "5NcaXRPGQfF2BgTZFSXaAhsFBPGwBPCCkuKSJ59LGYGiio6CQND77Y6VNSYXDomR1yumarLNAXWujRnaV2NP3Qqs",
  "key38": "tgBTa7NphhshfPe3xsCr7fqsZAvphBnMXdCPjH3xH7J7X5zhffEwjTp4xQqN1ojdjA7eQmYrMEH9JiTUi8tEbZD",
  "key39": "2qNWW45nvLtLtM2e2NB3ewszevsnawmws8N7dRrY8pWvkFpvP4QJUJL2kSZexmtGLzrSgeyTdrkmhjzKVvWJf36a",
  "key40": "2FYsjiQuv17FzuEpcTCeLMSRtifaG3P1bc7Mt83srLBnzr2LwsZhQ19k6awiwUyiDf7N4LHbfeG73UL2U3de55xx",
  "key41": "DtRnsDnsoRsnT43asP1yJz1MEuGpSrgUjNbpCwx79hd5STa35ToXYBDEPfgicxvdf4MUz2gAPiJkw4WocubBgWa",
  "key42": "321jkk3NFzNqgkEhMSvE1q3bSUAowfEAkA5ftodwnGkcof617hsYJikyReYMxNSFFp97zqCQxFpw5sS5WDQAT8ai",
  "key43": "4wZBck7EPotWbX896AWS7afQ4iyyvfzz62MXCaNGGnX9sDbvHJj3rwnMH3fFFhnpMZDaAKGRAdf3EZN3jeEiQ1R8",
  "key44": "52vcAw2yHoQ5gRLowghoBCr8w8wJ14PxzpPDoBqVC4BHDhFQoSBEF6nNwLKc2gX3M6zp9zfLwuePkvqKtsQ2V44E",
  "key45": "5FpM6JdtHQcnxS5yWN8RhfZshUwuSVfTibXB1UKPQD2LmfSxUNfRSkewsMymGsVabuCc7tEQH4ho2uGCtCuds5Bk",
  "key46": "h8FzaCDY3Y7VLW7aUcndiH95VfH5F7rWbWuBn5vq9K2yjC2VKas8ZkkaCntsJwiSVg2Up9ip3VxdTv1wJxhPXk5",
  "key47": "5ZA7ctWSz3xE4kF6NMvtNmVpKmest9S8SckKKMdtrFFDbZhca3YYNHQqUHEQi4V87ub2XhiBD4MGsXmYufY6d3Pq",
  "key48": "2woo5TMxpRxMejnYopwxw8R2kVgWDrqQWsM8A3YaxZrix8kWk3WEr7wtTL6Aofuu6yifcBAvhMKsz5q3Fu3t2rRV",
  "key49": "62P8CrCaTJZx1gRq3AAiqTJ6BCzfNT8ppubbJfDPpFR2WehtPQ5szcrPyTiiAUmesTBofLnPZaexmtKgvPhSNH8A"
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
