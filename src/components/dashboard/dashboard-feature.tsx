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
    "5M7Bn7HM2fTs3UNbTcABYrBuzKacwQDe9qNuGxLWReuB69zmpGSWAPW7qLTV1RwzgozkrC9szy5bUYNaiNcjtTxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HUFuYGvfoDsR54DrcFxbqR4AbQNungFc2xBJ4cWVLambhe2dvnQ7cNBvKPc34998KBytkgmHM365zZ91jSCw8fT",
  "key1": "5PRSQAA2huMDk6D8sUeEHC4WewvZVgVNUt9RWsMsVmbNwUnSsUwsiXXf7Jnuo6yx7CPquws46ztsM8Gf6cJarw12",
  "key2": "3gXbv57ZewtSxY3kLZ6GQJMqDgxvpicLrRvB6B9UzDo5NxpJZnxgeqaZvhEgwG2tHfkeJrJeeYgVmj4ufyztykkS",
  "key3": "N4gVmLR1mPGELU5SnUvxkwegaFfWmBMVgTDTLSWqFh3DoabQg5uXBDo7qcgCLoM1BSJaegkZQQ5ym22MaWHh6EQ",
  "key4": "2eQ5YvuipdKay8bR1hrQXps9yAMT6hKMVg6WkgjwHjMjzdGM9uWoQB9tWeZrcxvWZVWf18m4trC2jFDi9KSkaDRS",
  "key5": "4Lk2UwpKvXQUEKp5XbVdvBc5y3tCxNxT9Zed64MUvusCd5himVN7rLX5JFuwnbhYa6jnsEP6XjAgBUcBvDZMX7aY",
  "key6": "5avNQ1fsHda5SABAmUseEHrZnV7wWvYsHkqF6udwer7PtxNyjRyMoogRc4ZWtPkHVT5huGr7jT8yoaiXs7JrEoMg",
  "key7": "4VxBEAcvako9cRpXEJHTJMsuwuxfTB6XzyUrcZ3p1ctNPAwtxhb2xdvDvaqDN9QUNE5RzrmCdpo5R3UQZYJrsqcR",
  "key8": "5bxi5cEXXxrBRS4DREVyUdjnxLYx1uxaKr7CvgQgSKzrP9K25nLfWWVZUqvqJ4KdeznRyc7Gp689LVuaQ4uBVNXZ",
  "key9": "2Zv7pHMnW4VgQ7cDFfHegvXubvNafh9dut71Muji9nuiVmicnwNRrT7UH4uybhFPU6B1UP6KTLySGczNgi8pkur4",
  "key10": "5EcHfRthwa7YRtU7dLd5spmksF5PNq67KuBtWqmcQPVQ91c7ziw2TqibMaswEF8oMv5NSkm8k4FKNsSCnXE9wH5u",
  "key11": "2p8fuBt9QCkpSGs7T3BHNZPdiQA5hvb6DCtykJHA1bZedKZ8hL5UpVhsWz9KkreC4Ho6JhsxY6GEWb2CGvrqCesF",
  "key12": "2BT26K4zhA3LLY1B1GQGaYmgbqGPiXNogTLrxpd2hEhpNMu5v1Pwi7GDzw471Caz4rYRuZqRZfDeU44P5i8P32nf",
  "key13": "3hXRBVXgQsEhr4WRd957ySQV2XhiNJmtLAgU8jUoUHY6bN9aa8RYCff9x52ZJv67qgWzphMjepuiEmgWZZSe6dMq",
  "key14": "5cDP4v1xC6BPUiEvBxDp4aGBKqmfKWvGPmESraU7uPEUi8GnMmdkzsbGUfVPPjKN8ZnTzNmyDgiwuZdaCCkA4PWk",
  "key15": "4y5NcN9qgV6ApDpjjB9i7wjwFobnsUsGHWVWR9VT8gW7pDztUmyF25kjTESS4WdN3TB6hii9Wov2HVfDFYvbxE1v",
  "key16": "5NouqNd6CcKZDDMZmPtN2dZKt8Gxs2iNi3895LXLG6cmcPzo3dna2PcdYqEXrdUxezuN9p3o5Fjg2cUmtCht7g6z",
  "key17": "4WLyp8vRjtVPztM5KzSivSt1FbUrv2FFcbuMg7ZxVXEhQo5qrBE39jow4yppYRLfBKBoTk7SxfHHD2HgmFQAR1uS",
  "key18": "38BrY5he9tRv4BGcbUFM38dWNFY48bsnKKgoFbeCHE8rcDi5V6UhAKbUXZLx4c53sgfvucG8g76FWH8meDaDMn9Z",
  "key19": "5oZMm1E9SJL5h2MUXDBEXs1QdditKaJG3GUyMLmrnaw6gp6vyzQ4SRUgeXB3pbKgXQS3xaj2mXKgQZPcxzzDyKTi",
  "key20": "s4AnBt2M1TbctCuhCp2u8U265i9Le8UKMcBKqxsrQPf2EVnKxk7vzP2Fg2mUT4PVUwXKtaoSbmcEdub6auXihnm",
  "key21": "2xisBZmPMPSZwunWcjo9wf9rnqdRRVAWWu8Kt8jHwy99FgnSPcJysfkvhywH4qUomuNDvB48yTZy1Juf4gVqdWd4",
  "key22": "2yvZ6wHq15dgBFN4DsNbq38ZgXrajpPYLEgUfZyZshJVjPjK8NV3V29AdbzAGs9LHjomPZPDEsg3KaR4qag3JMbT",
  "key23": "55yiek1CWfiPnasKFVBTR4w8zPHfQevVC3dZrGE8nCqGh34EHxqoEpnKFyDguSXwPC7WDfwFbMaPqgEidUjxfwHy",
  "key24": "2GKY21ZmjGeUn4Dy82dkCrCt94FmhoKLMuLqZpDuRkNYPwBBWME9LDx3rHxTfUAQ5VHtEYnhZsfLmYuns664ptMB",
  "key25": "3uxr68waqVMiEdfjm8ihJ7LASrhCE2aqU1DkyJZFxwox7oGoueE9TvB8c1pmYZHAuTDYftUkEAfzNgNP9ECjq4eg",
  "key26": "3CUhfhhgRh8PqMsGBx3BP1fURqoCPpCYF7ERcWgrhLyRAcTVyBBzidnuJr18JyNtNzY1U2RMNGuUC83QWHvf5FJ",
  "key27": "5DtaNfEKxxfD2Hjag1oThxUmfn7dFsoYHFJvth5ALxckYMXqDVCkBp3dWXuqV5qLWPT21FNsdSirGRH2nai9PHXa",
  "key28": "5wJuooFcmbZCcavdkyAadyU4b3hV2XAuJ8nvb1PAV7K1WXqi9NkTxfCGyHV4cHMfVpbFEfwetThbpLp3SVizpHky",
  "key29": "4K9E4Hv4QJyuJEZxsfw7wubLNKD9d14mw7nX86baLEsje6g1v2pJZXTc4KTe5T1G6ddquq3Rrwin3VhavXwuf4Zv",
  "key30": "5VEsM4u6zdoWhW9zJcrYJRfLP79dsReKswzfLwircu8sXssUiC9w9zSgZnCdnk6K6iy917wA6En6eDzNXE36Jfd3",
  "key31": "4ptUeZuLLjJR67Yev6MDaNwHLd29xpnEp1Rsrmd7E7jomWjFVyHMHYb5nhQKhWJpGdrVsAYtKHpoWhnGELXzj6es",
  "key32": "4THY2aefeNiWdvpsSTfS9qHm9rgwbjf1aHnH3AkhLbRVJeBFWhhTxcVAAFHCRohY9Zgphpx8K8A3k4qM2RTSZEEf",
  "key33": "2GhfHoULNZ5AgM1AStk1ErkjTAeyT3ZVmXSdQF3oavDZsBc2AoznS3qPAMiXAzbjdDXkKvoDp6s66ydWs1nwSGVy",
  "key34": "3MxfN5ppE4ev4Kw3YR57tR5aQqno4oeXkiWrsznW59ioeppkCdoasfPhkXoCoCHj6XjwfgikGAaBp5Tvv8KgDbZC",
  "key35": "2QcEgURZUqMTRZRthTVP3wvyHUcMFMFzUBAFgdR8UL9H9PdqpTGZnCUW2iY6RvVjfEEk2NqMMeszbnDa1KzMFvLV",
  "key36": "33xhPBQ9zoKQbN6mR4WcCmY852PdRERpq4GxLDVWRB5peqsuBunS5r4MViQkZEqXdVtbdErNfaoZfWFagCktrwk1",
  "key37": "5heGd92KK7KdGZfY8pKoJ7awh6Wn33r69fae5t57UookxtHcXHMSHZT2XG1fhDwibhAdP8wvecbg85YMwsqk7JhE",
  "key38": "2paFdfuiE9iEanvPuzwVAtusoibBhpb4UBxHAjBS6xTC7dcyBSBUYrhQECvjXF7QPAjF6RvSsF5vLTCJSp7i3zhZ",
  "key39": "2i4Y9hGv31ASGqHy6niHuQEhRUL7YAFBdgvbb4oPjbDJrf92GnKf2zXH711YJVCNEV6sPNLxqPLUE83L9G2FvogJ",
  "key40": "3ozkYhVbf4B2JmvUzW7bXWi7jgbKP3AsCQS4BwXPyDnyavxbyQV4jDC5aMRGhFbSNtEAeoWZmKishPLie3B52wvM",
  "key41": "5MBfFvnMpbGGgv9or4yEHww83czap6HYnuJYz4dLVsnfiERhq5buiNJWaiF7X72UYC2iwMPvkjL56BGJ3ciJgV56",
  "key42": "dsDQ8WqZV9SxVR9T8woappuXUbzL92STcQYNsd3K1s4RXf7DgfAV4qC9GGL6TMfs3EJgC8Ka8FZSLsvordCkVwf",
  "key43": "kLe8aHMZdmAhfgz9T1yip9eefzxkiqKkVT7w5JYaVVvgZJTEswvLNWH468eFPgWWfVxWNw9R51Rsk3Ajou9q83h",
  "key44": "4rafu6TYfTc5u8sV692B32dphdJ85fN5z7ARKRU941hu9m5iyDryTzWThxDchAXdo6tYYFj4BYBV9AawYTT1eZif",
  "key45": "4hr6edSLqc1Aa18EqhauT8vD3t15CWhaYdmMgJYGDkCt19HFNPs4cXN21PrLyPZTgPbm9qNAhSk5srCMsn3HJcUN",
  "key46": "42o68ikJEdknx1RGqfrLyx5vrt9gctvkE3RBkD9cavraQevLm7tgCQUFXnBWvmSwPgVMCT4SaQDEL6bbXGArjUBE",
  "key47": "4bRNjuZ4bMvHPFSiHxi7dMLf3Z5pZT9qpCBaLyiJNC8KHuzP7R9w8pY2WFQtKViAWHqr1BMwbcsF3xmWkwYunmuo",
  "key48": "2GnirxY2aKLUibuoGKrAXuJiojN86czrbKYQ2R8scgiCHoi2Mg6vPUfjF8niQK3JdBwfPVrUb9hYNNYqyTB7DwXj",
  "key49": "49QgkG5tYtf9xsWTuXdPQYrJTj6Mi1ua2CXRbnjqRJUi151WfPHM2YrUpnxpTZ8E3uNL2wostecwQsBWNZ46p6Kc"
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
