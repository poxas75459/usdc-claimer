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
    "4L3xWXsH9auMZJowQFCJ199nFss3AUKyrQ8KUcEVYFWuLrhYavcFeSxFryyvHnWDSSSXZGdoBeQ5rHf7rhRVvxkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HhucmWajPDfqTvyf8NVJcRrD983rhats7g2y54Vm6Bhn8MxtcNiMdwCwrabs1AzgRUkN5g2hQfiUaF5UKpQXoJu",
  "key1": "4Wzbbonn66WfTTQ3ehFvYdup9EJNeX69QnryeqCZfzvPP9zjL9zTtcVafJPSHFN1h2UcHCEkyuhE55BiqnaCzrWR",
  "key2": "5fhrUQizLYr7Q9TTUHjQQg6PuTorYEz9xsVib32k238nruT9tLMqcdL61XgGbuEERqE3naz1DAAobgh7gce4o28S",
  "key3": "67VuMZgnGCKAUnVDAjy4tERbQCpKDST38A9ax5GKzhbM51iLKGjUCTgT358bU7BetsXaqK5wsaiAeDbMAzHNrzAy",
  "key4": "3a8qLsKhae2HHV2hEiBpdBg7VzyPLu3vmxFgbHsT4LJuhBhtoNvBbhfp1F72ubbdHJWeEyJRDmYRNQrYYWAmmeSC",
  "key5": "4s44XAqLGAoPpfaGe8r2t6p9d466o7PsryNwjDgPSRYkXyKmai5LnxPs34JFSSHoqRP3EgLSSzs8C3BXkWSz2vPR",
  "key6": "4auanGPAkhXZfeAec3eTxwJ9VW9ctoknwacdtbVUwvdSXt1ohm5wDU3tGgmsEguuEJKZDBbeutKSJUZd7JqzTEgN",
  "key7": "2dMTN5rWSeSGDNg8TVsHkX8PAt4bL2pC7hxWHeVg6zuQmu6A7a9PGXcuAq5sSKssQqnXic8jsumCucWXXyawdPZF",
  "key8": "57NLbo4UXw97LFFA44vhvuFnsHDiuycTMT6qwPXZAgsm8B2fqbTNxhGY2c5PoRc5NHFNpoQx6vudG3FhWRKuEmuM",
  "key9": "36RkpcYsvuQZ537jxambsxxN14Sy8oaqkf6D2f3G67zMJGR3uWL9Mg3gX8Ccu8RVwpgoKRa1qA4D7drfaMzutFKs",
  "key10": "3Fnej7q8fK3Bvs8sFU9dhoiB5YRm39JiCfDi4Z2zyE6nxQuQnQNAdjttKaQfNe5fZF3sHfZEL4pGgbNBiKfS8EFe",
  "key11": "kh42iQvHDv6CYUPSPa8SghuofEzBRc37PC8dUJdZnmRRHr6G7X8ZyLXGhcwSMW12CisxRP7zvV4SmQajpCKZqB2",
  "key12": "3Yycx6qkQZz9VrKEaSmGEVMYcQo8PZve9NpBxa2SsGqDp7K4Zg3wHoEaH3dPVmY9y9BDc1C9fRgZ7NGDrTssKVQe",
  "key13": "xCjuK6hqdBZTkCUNaAB3gVqL6z4XWWMEiv6dHfMFyigUSTxBQ36PL5xj3n7J2r3bJ3EMw3rZKu7dfNya45xwYyv",
  "key14": "3LBVX5TPnrSt3KSbGVmCJ8fm3nR9i8dJEbPzwhz1ec81nryQ2MMF5MpgxMzEb4i2MLo5go4ScMD9yfxwnxQe1n4s",
  "key15": "2567w5RSq34FcXsaDXBH5mXBPfSoyT4tNVHbV69BMPSnPxzGnLgSeys3mUpdHNTuW2BKUk1Zy4Hv7cF4fn3pBzi5",
  "key16": "5w9qgf6YfLEc88k2oZwNRJPu5z79vMPoSHEpfU3YpVEDCBWbsVMmJaYFPMPrKFwF74i5ZpYSod3esErSVDLaHcFe",
  "key17": "4unuqjmaJpMKxrJGvfKdkCMRdaNkmYTUnSXwrnPEYaC2nSchaFQi2zStMMsYigKS7Rdm4ozkh26oE9E9UWfaLTgU",
  "key18": "5LspthW4cgU6h3BqihCxdisekZcqJnWcH6N4N9mAE5cMBn3QLy8neMgCXm7eZ9qqvhi86jPV9Y3BfhLdTVUBnrAD",
  "key19": "4dzRHRqx9rttDokzkf7q5V17FspqMRtd6k9ntn9HSWdn1SUmE18PCp3tATcctJVNnNToWLA1CPr9fT7CoV3M3PUm",
  "key20": "au9Y54ZzHfFqHxnyPSmc1kmtogQfsLWLSJxcSUXgzTRCxV7CgrJADc4MGZPkUmgH2vDb2STThi8AnPExmabxhnw",
  "key21": "4HHfQhSgPtDFDRzN3hymL2Y3gSyajmk9rHBc17eQuFxihZBV36zSpeWSNRhgp7KCVwgqM6EpiMP7FmpR5sFncXPq",
  "key22": "2DuBHQGUbQ8zAj9px7GAK1ZED6bxWeVe7f6LFMjJZYE63Mk6BY7MNwtptZDD5pzL9bbpjyRKKnsCFa7cYHJtqb31",
  "key23": "2S1hSYfws3CcK8cvVGvs6wqEtfQLwxHYeSCSsv2wNLVNNsjnCw1zAUymehxTZQpDVxrHBsyrfmiN3v8282REr5cS",
  "key24": "4LfdivUvY33LY6xSYD6hsegKN4Uedrq8nGUsSvs83DKSyLtMgTNVCh5eHCxqFCHKThD1JE82KPNkDopSksjMZ81o",
  "key25": "4RfrnNbfT77adJ4Zqshh4vCWCxoreo4aEZMYq2dFq5WDcr7S1MHRSQvxcQ1Je86zq5x9yCGzbWVPEoA11MvANE5i",
  "key26": "52no4uox4KTw6Y3Gzh7s4bDv7H4aQfWBTk24NM5vzxs89UXKEdMkHs4bohFpMduWCNC497KUjVAFZaxGUAXnoTC5",
  "key27": "5kWTNv62fs1WFGfj5yQ47AWabmxQ8XqFKiJzaefMY2fBfkc5zu5ezKouQUgutAsWM4kN2ePWkkT5Be4KtBZySx4n",
  "key28": "4yRcto3R4G6cR2GjAiQ4NjiKaDSpmoHYEoFwza15AmaRaeVpY5wp5dWRivRpDcnzRvpAzmMM7Q7d3Pxux9puinyJ",
  "key29": "5JBSRfEhGnxfiC2yGo81mneRyfeJffGVXYLaGuroQJkNoZ94gtvTy7ZueoW4u4fb9mimdWFoSXbGufA7YaePbKSg",
  "key30": "BpXEjxtVqgpbadyrKR5ejKrC57Zvzg6fkbTn9xPi4tCDdzfD1yz3EMBEcDRUXL6aYE6UoQ1qe9iJFMZVwNHjYiA",
  "key31": "47VZvUVe3ykfXqbmUC5JnwAxttkKd5uQyobe98ypk1PDMXFCU5YiteYPzSXQUydLUiVY5PAwt2zzb3nVwrERkYpL",
  "key32": "2mNEbFpUPmG94P3ybAJVZ3W5oUcHwAKfcviNB8HeZKrNFP4iKvS5wHPVgEZehkRuoAcfRSkZY2zpro6aJk6vtRST",
  "key33": "51ojSYLGrhpFn6KkQWNZUZkgZw9nNyv7LiFDQx1WqbhsjxNNMzJJuxUf7EreqQSZbFeJDigXUiHxehjiu8mvyQmv",
  "key34": "RzLvRLa6rr1oFNH7WmV6b1maLEoBUbUcM75Cup2wuySGfVXwT16VdMxE7ff4mWhLPqKdFwq9FmVu5T52sbyfcJT",
  "key35": "4VRc8thrXQ7KKNcQqzWBoQmmstUDL6ghtw7aroXYB7B52hWzyQrisRsC7gsBkNEJSXDcjX2k6pv787njTxo3sG3H",
  "key36": "4qV1Jq6muR6W3bPZz91sspX5v2FFUq5pwHJcMESupwqBzvs1EWqn2bkfocgLaztGXokqHawCzWEbi759RDm55GR9",
  "key37": "3pvXW1KekgaN87CtuHKSPe5YF2xFATBB2gES6QTmXZv1e8SLTpiLp7xB97m7Wh3498jMHwbQEpnfZLpUeSsaNe4Q",
  "key38": "3jDvN8kui6Vse5DRfzGmWwVdqdM4bkyzKsq3ueCSU1Ep6uTfCJ2ak3KJ8RqS7NEvDqPb9J34cxsrtqJ5tuqBS4o5",
  "key39": "2GPBe6axtbyt7JS9cjtmmkb8gQShQjJ4UAaopq5udVniqs3m91RRVzvytqWtg1nF8L4eQodh1jPR8Z4qVcuto6Rz",
  "key40": "4CQddzLb9PCpPAUVT8eA96Cea8eHwVNTansX73TXh4kcpoUV2VaTCxVXqFUrm5cDWKGokSA8vXyt4XzRxdYtQtp",
  "key41": "5dr1FRZSZyAvBwhZ8qBWMr3R7LXEsQT5E6BiDxtPNV66PQs53KcM6EgwLugjpC7PSDjtuyijbngm6UuRt5azKcpp",
  "key42": "59i1c7TyNYGaiUZkY21dmuLhn74m2mf5YmhA9Ji5nTwrA5HrgcKLZix1JMSYFJPEUeVWgYmsgPrMAtwc8ngKKGcY"
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
