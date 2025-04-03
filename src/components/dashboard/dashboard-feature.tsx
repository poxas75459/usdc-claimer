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
    "hGm46GyFKEmGViSby5TaP27PR8EHJttH3SifoAcv5prsrFVQTCwpkUuicF1FDVE2N7cvxoY7JPAUxJyZzJK5tLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeaXbN7ozzjM1iPoetmGZoahaeWgLkfnHRJ7G1Z7yEac8VGdcCawhQ4zYg7HbCYQG4HVZU6c1NworojxPhcfv5t",
  "key1": "2R2xmQjibanQriy9wAx3GZcxE3wu7WPXqG7hz1YDw5hRvNaJt4Gmg5aRL2ZMihJ29EtKQJAKhncLHnBPosHmbsW5",
  "key2": "647TJkSvcNMzDYLo4cAQqDv614JQ3J5Uoq9Rneqq9iksTbxGdMbPNe6KfsQEeDw14GUz9LKwXwUzDDPDY6EdWLCA",
  "key3": "9aXE451R44BXWndt4Hb2j4WfPxe4zmwb9Mmiq7yYqWcKgbV1tnErgjRrBzwE6eRXLB1jeraUGQaCmWTnLtANj75",
  "key4": "2FryXXLWDqR1RAd94VMAFwmUPTDMWSLwqnzHq1DXmDanFM8rhfJ2KD9rm9W2KEWueNMfrkE2wiF7KUtpuxYWoWKi",
  "key5": "4hXVG3VhXyBmZkvSF9rFKf6tVDfc8MHj2SK8F6hdYTWtWFN8LMvDYikJvEbQyaHfvTNdaDkmkDZkstH38Lp5t2wU",
  "key6": "42fkLRqU7pMoeMCuNqKRnF7gqqLMbdHk1VeEk79dfy6LnM4vuCpaTQoYKbmfaV33CWadmVhNH5auT7jeZE21LpN8",
  "key7": "5dDJYHzasdsBhnWm94aMPFYrimADo6x7yEBwkPr5dZFTAKBCYTanZTt98V5nXBiFNCirND5TLN7A9U1i7VEFt1h6",
  "key8": "2rH2zhpgpgjxHVPC7hpPv7TQe5QuJRZmq5xMuaRsBD5BUv867Gxj8iZ42kgZePqFQx1W9km6VvF9BWZ91r3Yuo5K",
  "key9": "4fjyVJVqW52behxbKQeCTRgzFaQPGeMWNhLG5FemDXo47wBiJKc1T2Dq47p4o9Gzw99e6HE5R6j6n1Gqc7xmkAHD",
  "key10": "5TakHXdBUAnbSbeyTuWSDcmsZCTqQFxKcEQuyotQuyvQzYxdLZrY5ttz25Q4nN5aeJuL9NSWKT5YLqCLvi8zDxTn",
  "key11": "56oKN37iMbbubXFmKAGPTkGoY66Z8VSrXNtPNW1PiXncmHetCUe1JEdQ2q5hJNaUD5vEbA5nz9uBGLBF3G4usjAa",
  "key12": "X5k9i2iDHm4CL4mtbaGQahKqPWbqEL8uvZVRCWJHtHxzMqAxy6vZTRe8bgA6c3L36AT6hQH4VGNgnwG7gmqF4SM",
  "key13": "5Y6CCACZ2VV6EHkjkkobMj8tV33KeEWww1aNzU85ei97YUzqXAJ1zFeLMcMJUAkcmShpje7gKMibD1Vkexv4pB5A",
  "key14": "5cC8TT7chp5ad4b7ocfsic3vaiUZaFRA2PorpEqiEo29tPKCXJpVAVYh6Vfiqi3CsUr4EXmMk6M53ciSGzCoAhrf",
  "key15": "5ZtQitfY3ECh1jTA4QsdxrsjkYTShkH2bsBDaKKyosFyGmAqZAzVmDMUazeHephd64XWYG9bUXa9rZTZ84RAezVH",
  "key16": "3nBjyY1jBEGd8Yg8GJGCtjyPKpQ9dHzi8rKETdNKCMKyBqADB5tneCbKbcaa441pwKTiDz3ZRcTRwXNJHVY2Mr34",
  "key17": "2JvPYPxXwdCFZvNZEYBmUGefeWFFpEE2p2HVpDY7Hc3CrJPPtbSqGVcki27a4SALnwRR9EJxev8DcHy35cD3qpBe",
  "key18": "2a8xHjBZBDW4QttCgRfQZMR7uaDyCdGA56Piryu9FrmSnBeCeAgx7MScfg8PgiCxTVSYMpPCcf7BUp7xmVQdbXQq",
  "key19": "2CLuPYhjzLEQBzEdKz5CoUK2oKp7FgQs7QmVzBzzYwT9d16XmV3ckSdvJDpkmwSNtCmyS1DFEsP8CesiWzoWo3sL",
  "key20": "3xWqs4yHeMXXUkTj3LcY2guCkGziab7fpKZwLq6N6LY7687YecarzPpaaNhmRvxcsAiHGLrWqDRDrAtoNvF6chjy",
  "key21": "3C79QLUniFQJdHuSwaBLRJf4ySm2jgpmKrc4gownjvwfrUT6pz2JpvZVmY3JX1iV4pkec8T8VjVKQoBnAg5UYwr9",
  "key22": "LFMX4oYCjhHQ2xwYuK6bCSe19Jo4jwyiNnLpz2caXpKucQQ64HsZ5cYwhjjsjZCK4U391Ro7VYQ9GP5ugbD9E4y",
  "key23": "64b4SY1swv6omUbi5FFB1DL1g7bUFGbzCC2oGh6opzjMFinQn5nCQHfzGyTChokksWcB98ambv7gfQJmX3GNF2EZ",
  "key24": "4wPBi9bpohJEQsgSZrTvH3QQ3qA1AqCJ2r3JqviUnCv2iUFpEcvQFk1WdM8FtdWptGpazp7ouu1xn7VoyrKVJ1EE",
  "key25": "2DPxne3M4THstPUV7cUpjio4x9UjQg72fFN2S1LkdycnM2tUVmVVF2zP8gfthNMnk6ym8cnGSSz1SqFXawWeBS1B",
  "key26": "636BVuV3HZ17wfHfrb4oUb7Nbm2B9P79KYWJE9ronPi53xe9ESH9sgfKBKK6jRYsh6GPdWgANhGXkveAN6twg1xk",
  "key27": "rC47GKxDSJKMCvnYQjuPGabjZLUZ3SJHFmjx3A54Fs5oyPrTu8XLsGX95ku6sFaHourLtgHuDKXwQzgrjqA9Uoz",
  "key28": "4ZzgGSDXMyjrcJYbEyj7AaKwyNYzMDVevJGRAf991p1vdbaxX5pFkV7mc5kQxgWNgV3rQAAh2B2dz5YFtBEtjq2N",
  "key29": "4pJhnETtLbiz4q1xgGvWMLyqmuKftBpmhnkmHnQVgRw64AC5N4K4DBy1ub12Ugq5LsoJNvduZzYcycfQUbKhsf8Q",
  "key30": "2715UzyRWQn2MBD4yJa19NqEUW6x3J6wE793ew166At2Wevdb78qYYMFUcRAKavKmoHqbmM49RZdeSGWsxxadCdM",
  "key31": "Youcq8nA7rdL9t19jHzHgaD6JUXkEXBqAQXfCyMM65bKyaeVpnuEhyg3PKvAyt1MNiw8xxGGV5PwNtfVjeoiHTN",
  "key32": "46CKqXLy64uR3SibvRqb9s5km9WSUZwET68ZgA5oFpeBpczC9sXpHwDftMbezeMmtr1ZFdzaSMYPmbLgvY1U6MeB",
  "key33": "tr561NCvAakkCQfTBaRPVMpGj6xn5x6Fwapoe1EsFx6uDAzuzD38suZkSA9RYtda3T81Ctf9NGqnz7EBFvBcyYV",
  "key34": "yu1CFbKtjkVM3oQGQBDdvMg6cByYhNF6pagfGP1uvZt7HbxQQDBB2wGb9UMgDYDXFxSUbtQZSUmhikrFm4Kxzda",
  "key35": "TUPVtJp1m99m6ZKvW4A7dzTR42czKDSQg7kN1ssXRoSmtxSFPvZ34ChxHWp5FxTbgbQ4ExfNhbNE7TxmzpSAGCE",
  "key36": "H8omZPeJeDsTB32sjxfGwxMJS2wcrnrt7iNFbkihm5FjGN6Un7pbURfHrnj86XzwbBtxHBzM9Sm2v6MSKq3wNLz",
  "key37": "2MnwDb5b5EgoaP3SEGYnBp46kuwYQadwC4mpg1b1exwdbzZo9CpXUen1YJiiukPi2bCHc5CCUAzthASs8j751feJ",
  "key38": "YCRi6VJWsp653fntyjjSXSb9yhkhtZ8Se9mFLYeevfjFWMAwA3rNSePaXGndYvMoBHncKNZQw8YRszErDNBnS3w",
  "key39": "2Fmqz3pTVpb7HWd6KpivT9juXMwFXPcfv57htoNrxh8jvYsL5irSim5jWEPW8ehYrfLPm9DLszS3QNBMt2DA85HM",
  "key40": "eSCPVecet2S6Db1KexWkXxFenmFk8CQgJNk1tyPz6PDmgE75g5JAnbuGqPNi2swuyp67ntjHezJ5bJXboZm6xHG",
  "key41": "396H98ugkve8bggNCepkRhqJhNELA4vdfypxdW7qKWv5WKE8YioZYkeBsLE3hHEgdVrfPpbxnCaHUa521HKrLNMy",
  "key42": "Dk6jzKKnJzuyvHR5FvUMFHvtR9ZgXFpwBzLqbnHxPgG3SQs8ZjektbthJHDZ4Afrqp6xKZu1rJd3CUZXPPjTcFK",
  "key43": "CaaihDfCoiZXHVigWhiNHjrhPg2iLqJ8NkU8RnapPj7LETs2K8XT61NDRSWkcZfWPT51rFv3eMFWTxCNjcDBUxX",
  "key44": "4fRdBDp3eDMJKwjXyqAzZFx1RxnjFCu3BGFxDqucBNf9aCRCppJ2msiX369hRaob7DTMat5ztDa9W5sfwwf21fvu",
  "key45": "27R3YnrQhGJMSid82wqdKP76gWDzfH7fEsKY8eFTYnb4LabmYCb3AEbHzmRbYxd55b7V1pSHd92RVtFf9zqsUJ7d"
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
