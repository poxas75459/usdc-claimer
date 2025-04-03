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
    "5kH4Vfhr1X5n1R1YPQXnevtYG4jzsue9e9mkQmcXJw1NvNpr6SyDmB2Nu5PPh851EiobmATduYBgM4WBGU3xfRfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBLFGbG1yfpJV82jnjfyNbjesFjA8BMK52ogTRYAA8HW1tCwfuWc5y9wujL8p4XSL4mgTP3eWcSEvswcy2bV2mD",
  "key1": "49aM6EsPrYKT2iKCVqsbmVDj1Bxrh9TNUHkxPVAr8wx5iV9DYWtPDX5fKpS5tGx4AJYudzvsYpXgjAcsiw6n39gp",
  "key2": "28BydZTyYMk11MX8NviUfSTmCNVEZeAGwkFegi7L68x55drGZaaERRVCZFhLMqHxhj96aYKQWQvC2ckCL1AMJQGP",
  "key3": "5zeAEGdwe7T47YGDdxJG9jN7ysPuqe44tGW84HRWVvtfj8c4ZM9MT1vqAgDarZfyMUBAXHsT3kNC2Vw6UoLyQfe2",
  "key4": "4WQEoz5Ek3LfFNXTRwNhc5TtQ44yJzapi3miL42FQyQ8TtcYXEieupybPGX4APTcJBytrVa48rASZjk9hVbDX31J",
  "key5": "5wwN5XEwSLVTkzoBipswtkVbfKJC7ugHtmiK12jaQZrzSUv7Db8DVa67a6hwthadP2Sq74S98Pot5w2mXuh4BJZN",
  "key6": "nfcz6vugNNtDBaPkRVuzsXHQQY3Bg8rBvjaLsyptY9BkM51YKTujzUxxEMth7qFV7fwJSr6Ru43Vnck2hPL8tQe",
  "key7": "3mWSWzioYu8GXQd44YcVZnfujH5M5Und1TwxfTwKUJiXb3xKsxXuvyjNdoPd6k3BcExyP7vzrrc1PASNVrH39QSr",
  "key8": "22vuZcy3K28tVRQiJKy1MmxRm35BxySUBkHEQS2QbVeimsgBoE9jca7W3vMxfYxadir5gHzNA8JjVLkzYNzyQWxy",
  "key9": "6uZsU4ib4DbpdRQC23seHnrGYWVFQzo6Fj2WWwbJxRtkDAbneUAaFaXABnhAd4WrD7hcr8zK5Nu5grTApdHQPWv",
  "key10": "2dn7qFRq5PDZALcP2ZsYocfdQrNR7vWXKz5XarGKg5vjg5nHenJKyEaCjA2uQqWpAHiz2DEhtpWDZRHjoxXeEfN6",
  "key11": "2HVS8hvR2jjtTHcgHrmHiwcYRx1DnxJ4c4Fz5jzTmYvXNfyAgFi2jkQvhKUJ8gfr7DCSpmT82Cd9hwH2kpwyWpRb",
  "key12": "GurFy7RagcDHaZ9dproqRg5xVr1GhzTJkaYzewzMB9so9LxWiCqUhCymzvWTXR9bft71Gi8BmrM4sRCNo6eDokF",
  "key13": "3iiFV7rwGw82GWUnK94LQYNwwExSQ3zxSNGstDPdqkadP31hrYhtfQ4U8vxQqvK5512FZqcfRkbZfBiqQJMskBC6",
  "key14": "33PCnCfhyMg88NQeHKUDaTtMyd7XvcSuHuFigs2XcZaKmz9652WZ7LFUyXfsusZBtiotnKifDnz1Fy36sxdHiWRh",
  "key15": "2psefvNQM1WzanyHLPp27DJPvG5vhAUf4HwKDQx75YmfZpJ81Zcruor34ci78jaFFD9x2LFwUuYpHwDn8QxRJNXm",
  "key16": "5hURcfqXeFXV1Yqzp9G4RSTaJcPcLtWkkRYsRmio5baUii9QcNjuDWnMoWgx4U3726pzQAMM75CnSfPQ5kMP9cTu",
  "key17": "28D4bcfSC8CTsrkbdse3CSu8wX9ugpVNgECrBUi4LwKf5mi3n7nCtkJdvwwSePTrrbppkjdETuhst8zTeowtYwJS",
  "key18": "5UpPTLjiACrp8wXdkgc8BSgaXC6R8PWdc6Je9UdTeP1VKcgRTwviFcLTiYqe9FWgoU3ANyAosFpUxJpJS3mY3bJp",
  "key19": "kdmMrtpFCwyCtmyHKQ2bdQrf3ZCXjBrNALL4EMboYTEyAYvGB3aewSRGbohWLjf19Y8agwLyhZBaFYcJR7zsLci",
  "key20": "39RAZ9hYjhWsrtvoXdkDRu2TRL8T6PUB6gLZR3v98bjoTxvJH9Lsr17zFxSgLkRjaKfRmhQpXo5LBKYwkneYv5G6",
  "key21": "4ca2XFQocThhLkA4zyoBr5HFsSkwgFsYvVcfnQkAJpLMiMzwUcKYj95ZH6T5V9MJGm74FDUsM6C4s1RXyRKk42X1",
  "key22": "qtca1RLcY8JS4eiGFxq2m5fjhuYzQVcJdB2fyjr8XQcug9w1KoTcLSKydBg2DbwZqFRx656JkdsmaMgTTYuPkKW",
  "key23": "4gao7nriEq4Y8ZmrefNZA1bAmjXvxp3Rrb6go4BBb38bnhTovsfiM19TL9rryq2aaRHLb31LBAQvu1vz8f1nmF7m",
  "key24": "4j6fStLSDiw3zwKfYuieWmpaic2ckRyLDkzdDygAKDJU5JxkcA8APYBTFbpZaVJ28wcpg8Fn6Gc3EUzbzH1dawfX",
  "key25": "2CQJQyuiEPBp9zN33smoTTNbA3rZQgv1yqvL8N4u66WwPZ6HY4LdJ58H2s5dJDCjbFDpJ3r3E8aLgmrHUuRS9QGJ",
  "key26": "3FvF3ZJM3qQZBQ3fY6FFqohApiq8TX31S8UPu123gWRuEfibPnEZjJ2hKmB6qhr7sKckgTBnAtcc7Awt3sdi4xpV",
  "key27": "RomHVmBiWydGSzPZYHJjREqwinbucM8Cu9zF8utCuUosN5waiqqRVL5knawby7MBJu6xdFMfWFFw7jKce6zzwEJ",
  "key28": "5n9D1grk79Pp1kfdjyytkdunH4rAwiLdUPsQ6XCxWvENFsfCb1u2GfN7pKXpu7TMYpta139enBXJsR92ZiKXy4GD",
  "key29": "2XWBudsCXNo7eZMPmXYwgSZavMyGcBFRkY5txGhJwb3Swg4TtiREKeQKNxZCJbDZwuyadRd59PWaD2xAzBjAPWn2",
  "key30": "56seGS7YKWgJi4ohCRfbQdEvW3Yq9LidqsRqcgQxxeJVyX4EsrtWjqtECCrMSb93h5NEH5geZWahtJ9X1DSwAcJo",
  "key31": "2HWKzzzLZ2X6ggLAN1SecrKomXxhuNHQZmygqkbUguZq74SnGo6jmSYBsUgDyMk5hCVbM6ejxvfxWsCB6ZuwQ5KR",
  "key32": "s564Ex5Hf5DDAdfNtvVjHD5Ho5DXKZeviXQ7nJ2VHgr3iEDVz21CeT1XGo8GZRm4xg79oSULDacsXajrwcz8xfH",
  "key33": "4SQuQVScCjvw57KxG6YPS2gUo7x8q6tQ6ycsDuK6brqLhhi6iY4RZS5UgwWuu7KHhtCAnr2sxNFZvqzcHh3EJSxh",
  "key34": "5YMxQvEKq66LZhRcvHPs75sbjCUsNk3L7HCD3XqvFyBVQxC59XLH4cW1sTmsFdNLJRDw4QC3dMP5HZKKtGnmoMUb",
  "key35": "5MPnbWibSE98SAKMtusufPBAXWhDgJUde7EgxpXEGj3hrZC7gbHFXSjLYfoBfQGzH4ncUpJ7ZvyRkiZ2fdYdYJSF",
  "key36": "pj9jjDtYUBdw6YwgrWaePkrHdFKpmdnXhhZdiCWsAcXaqEJR9QMMMRChhdddG5cDe7nurpQApmvzBLCQnzvExXW",
  "key37": "3oDjN1uZLS4oaSvyA1MHCuJKyc8msZWQE6MWU1yQWdwrTnwT6F1D66sd5cRYzVMuqqx9eac3pkHivXyFuZNzTteh",
  "key38": "5AHTxfW6Gbhgby8dwcx8W7oppK2Um51Qy2fyZTbvT9BMWdHCg3F8eEWA92uFag6yK9yx9FwTMUESJzBDNRLEznZ5",
  "key39": "34iWYEvzsG19QVr7dyeZTffLR81y63tZUYUAT8FNezjfZkBTmBjpKdNuwFzpJP8qdSGDD6NRaymJETqpRBtcwcXg",
  "key40": "NkQg6y1hM69xQGXiJcTVmiPorTpygAhj8AKK6GzXMM5Fhs1LaqdBPxkDDTqAj2iVUgzYYUPr6gCAYE2UsmXw69n",
  "key41": "5XSMXz27XdWVgM3oZu5x9keYxQPbZb67f4qK9LeJaCfMK1DpdziLCrrNAMXts286yBTSMdQVT3U34TaQdHH5QyRi",
  "key42": "4waGKqkjo6emRyY6TKLG1fjYbGNpAJM6RDG3PTtc3xfRmyN4RpfjNPTNAEKeri6S2ZSB8vQZ5ErgfjxmS3YjEaKp",
  "key43": "2Z5fW84y4yD7s3mpCBcWyWKnp6iwyu2JK7HqGPkszurKkH4ABKir7LRhxFbyWg8254MsHpiEyiURMBSQ21YxaPZa",
  "key44": "39nDmrcREbuxNrLNghckYt2ubQdhYBa2CJtbNTZLDcGcX6SeU2GqqZB2svDCgdUEA4AYjbdk8Vad8aMxDdxE5FnL",
  "key45": "3qPNwwZkj53sPhccXhzPKFbD8dKy5oiaAkJWVvN4bfeN5QwpjN1nT23E9t2xkBroJBemy3UFwcZz7NYrAUCa2C1v",
  "key46": "4JzGPviUPvcnATG3xNaZncFStx32F2gM2FXSZwbiYKMt4ntBm7oojcVSCw2ByCopioa7j4L7DddAtCgzXT2EuBox"
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
