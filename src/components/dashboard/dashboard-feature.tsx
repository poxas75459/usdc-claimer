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
    "v5FizBQZEFNgXRpkt1ptWppHbpF9bzg9PKkVMm6C5m6WwdNMMC8X8ynkSkHHrZoQn1bzmCa53SbE7dpCt26Ye49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMSgQecZMx9JrcYhjadg2DDSSG6eGWqUcAfKhWUhMTKSTsAcMfKNsaQZKzwkn8dLHTR4JVyrRp2hMpsPRJFUtJn",
  "key1": "4aD8h2wjL3BcfpP2GiXtXTBH4WHobNZhsmJnUQLEkUoqS47NYet59wXyYnMRpZ51vZnB2FhBBUzqxPUAPfaQTMnE",
  "key2": "3Dhv52qoP2gWyUV4FTWqAjyriuurrV4aJzGC8FbEcmo76XPuJgp7L3CANmaNJbkZnQfuBQmjUTvfTX1TxmJVYsR5",
  "key3": "92yqNQ3KfnS818hJKdd5zn5hN4TA2SjnbWVjRZG3A6atLYUhjmiGzGTJiSXoDmGZkykde9Q2BrMipFWf47UfHty",
  "key4": "3ZY5aDQb57ocjUKRfxVApedX8vWfz8r5wMmJAxqe1nLouMDzVGbBLGJEyKeA1vQ44mUvdgEmruxcNmMnQW1ymX6S",
  "key5": "2cDPEVMmvDqrUfSQex6g81CGeW8jZp3ddtgEFAHFR3gAqZJjM6McAyG99XJfxViJWkqvcTreDZUmyn99ycFNPDSR",
  "key6": "4Mj2xTncgx61h3FHyTLCpE7kDXiTQoBr1gNAR9mYSTneVQtneJSHLv4G2JgCAKn4YWAcSv1dp63WTsxdn8ZkwGm5",
  "key7": "F2VYiudhBcxoEr1EKKxTFkYSH8VZZqwUCNcSBShf2pcLXpcq1Vg82hiK5tmpSAVsHxEoXY6rZaD4b7pmVLZr3Zt",
  "key8": "55TVaxwEbmtVB2bC5PitQYGtNZNjXJ8oRk6vVi974LkaBZ74T2HedzZyMR3SJx3qEugxUtYKUPHwvqDgMkmxRq8p",
  "key9": "2GWLkqJXNpVUXgC5aBPCRFoKpXyyVtkZULknT1WVhZNmxcSFox1cxYVTcvrjzK1d3xzUv8VTp92pCQBmm8LPEyXb",
  "key10": "2u95YomkmEL4swVc7tx6Mt1smPLgqidHEoV3txauCgT4EvFLmXJ4T3Mt1sQetqt3EiuX4P11i2Q8v5RZDskmKdHf",
  "key11": "5szwB6E9JBBtcKRFq3UmosKwxWiutEBHia23joFzJeDSqp1yE6hQ5EmPzXWK8TtEbbMJCHjbBW8wr41CqskAmkLs",
  "key12": "5PtzR4T7LbVSzm7obQsuAGhdCx9Ad3msqoDns5b4kNpnBq1AqvjbnP96JczcZBEG4GH2SBV9kp5g2rpiRYwYbU2Q",
  "key13": "3wQn9UkAc6VZXGvnLHRUgePLErfp9tnPEquuQCU8eZbvuRhiC3qtirYLvccLG51UftQaobbWac1KWVm6mg5DwVTs",
  "key14": "5rweHaRvYcYQ5qfNCLBAMKBtQEjMjTZ1d7eNj99APqA8ukVuZhCPFijX278pcXWhmKx74nXEFx1DmKQriMfoK7Jn",
  "key15": "3XDk1fEWgJzzYscuZfmaMiHpWZWPVgw24s9eT2vSuSgbAmgk3fun17SLw3gMWGXH9F2sj1Xd74tQt8BP1p7ndU8r",
  "key16": "21xy64otm66KDUHdDwTLMuD3ompRJRzMy5cAs4MDsByk23pTzE2rJzDHiXwrecw3yke4tbWo2hXuWwPDJTj2sn7q",
  "key17": "FisjaU5HhFahCdhcH6tQ72V7wVrv2QTyRywfpCmBeANJ41EixrCgooxU4i2dTBtBjydhGtWGDwaUeLC2KyspvDc",
  "key18": "1N3kqL8gLTGrNwTv6gvLMoJ616kLi8aM7qzyGDJCCkzQZH8oBBocJ31AgYLQ7FENKkCexm2qSCDpCifACh5eSqv",
  "key19": "4VHKgeZ6HacreAfdgQU7KfdCn7M5dBsicsPPNG73t8ewTJrgAjMKDZ2JV1Gk2PGQzhthsV5SCd9kewre9zRxgutx",
  "key20": "4PKXLfakNc4eTBDDkAmG9vGpGS2Ywq3GbLxNUGKYBCib1LQyobjDNMb7RP33q6GdQM4NAcKQaczwJh26iFYYyU1N",
  "key21": "2FK36VenHs5AMA7Gy38PHcqK66JZX9vAzbtk2dFpdsdNCzziRj1M86qvdrBnkGGk6R4wuH6ARwcin9biW9btPyVz",
  "key22": "32PjJVQEfymKnx969EZL1wuVxbPaAMzGQkABppFo1JiiEXTbvxhUTTwY6zhFsBYGjDxo3r8srsHVHqeb3LJJ5nk3",
  "key23": "3UfFktugzsoNKoH5pgb6fQY1pyUydE7E2hTYxDMgcUh8ashXv4B38faYzhRMZyfCgBZHjdMDv3Ht1ntH5RJAMyJv",
  "key24": "57BvNKJtq2ESzQ87ZMas8kUDmtSStHaDiob8wi7dJuwaZJfAtrQUgzfWnHBYfHzqHxDkEtpVnXB4xMuVMEi37Jwi",
  "key25": "45RXnC59UDhvfRwy4d6hr44q4XnjJiBwyXZBon8wawXrFF5iHdrWgRxEePpC36p2Ae8rjQ7HX5PrLC11yMzZhGoH",
  "key26": "Me4wGoMmB4Nvv6k3P8UojAxAz1kXKBLXyPRne3zSUZNdZk6tshXUtvBuLVmhPRPqcZW1kvnfYVmqiojBZ1v6Bt7",
  "key27": "4HpdGNMG9UFrBuHKgTdKDEMfDbBy8rsvXCR1aRbJPdsV4AXiHK36zkAj6wKo2byWyn15qUqDk1KjjN1QLzvxuqdw",
  "key28": "2gXuYrRpWjwfSCtB7kzr6AULdkkS9y2ZCc9baczbmXvg3CXc7HbqzMizZvQ1sm9wAk5ZTMnSmdFeNNNj2Sbksk48",
  "key29": "2QxiV37PUmr3JwzyGJF6L2mAiaYVB5W3Luef4ovBMvH61ZZiAJLmjoyCjFrHAzNB9uBJsRpMURuBuL7sVcRfV2sR",
  "key30": "5K3ADAcipBXTcuRSkHhgfjZYW1gU4QhwjdBdgtbmTjTL2X12f9ErRXi7mn4pUGDKXE21HsqhdD96qv3jymSu5tym",
  "key31": "CYHEkZinK6CNtAupJj2XHfmRzki9jeyiX4REBVD5TVqK7y91pFYxWMm63mE6ofqyBuTwdAnnarQ8Q2pwDBVuJp1",
  "key32": "4t2bYWXhAxLYSAEVALNkD1mHuDTqFTsnS8ZnHzz9n9fYN5WH981Vj7yFGALgxG3sSiqCuagHSePQwpFKELUskMgu",
  "key33": "57w6RU3KCuhDqh3mQnw1U7nrmA1QmKTLqzPzsr4Ldd73cofj6Y9tw7NJL8eJSuB1xCuS7eYmhRD6DnC9kU6E6rQZ",
  "key34": "52ghzerd5C7Z7TWGf2drHfJLfeUtzrJ85Hw5CSm3b1iEPnjGjfKP74ejJ8UBtt7kek2cjswL5H7xFygGhe6Z3GvT",
  "key35": "5fHUTGYEkpwGKjXvibq8UEcscH79RrNCQ2R8cBENvmvQFY8ZaNPjabkQQ5uZUugQE5G8ECfsvu461C1BDKwsfLPU",
  "key36": "MvBRwpbTNVcoEQ1crwHyRf472ctYEm1f3Q3HWCx7a4YPYU9B7y8bqySWGuwUF69KAEGFkTjcuERJAkMjw912cog",
  "key37": "4u1dKRjs3WN41z5aC3nhxsrrvfQHEewnEbSnHemu5BM3qHs4rZFjhjDvaypU62z2XPCE3mFnY4uvuLzGqoCC2Qb8",
  "key38": "2EmSVCf4M1dCTbZwPQnaE4BVS5467MQNCJcdrKwxifLr823Pa87t6kMPktCBuviQDvF5jAULn1wafCGH936U3wYM",
  "key39": "2Gdm4LYX5tVuoi3FXB6idYHfKFFwzwtA5pvZaeDU8uuHkJkUGZm8ypCnj5dAE4XegrfCBqVwuBmDsDxqkCo6iNMT",
  "key40": "2waK8pGxCZeqMDe5JLWxxTA4gaKKRdMesKqUyuMUeDKbLVjesV6eQrhUF3x4mvykL2YVMjTtpu51RPmAjgf7nj3g",
  "key41": "3ACcNu6o9caqF4ixnKmYhRGftpGFKNkcgo9v1r1XedKMdj5KWT37KhNxnANAR8764giyh3Hk4WAAq9e8pnmZ3nWC",
  "key42": "iNvERtkous3NG1GcsTR1n9HXFh8eipJcHfcdjfjVN1mYKjgRpaLoxvACx58uVhfXpb8J211c3UYb1vpGRBsPfRr",
  "key43": "23S8kgTxW6y8PaDkhAp5kAEitjhzAWfc5cF86bf7dN48R87QTZsBFGUiFzzdgvNpyLHrYMQkNi225NMVTk52Kgag",
  "key44": "2FFMbANwrn9stUtfLyhjg1Ck1fwvLsNA1EnVJ68dKyk4ExeXreDYkFJYKTdZ4rPG8NApDTgriaDCWXLazNzp9nft",
  "key45": "47B969WDLmVonUjfPqpEkUcFiRsVzM9NrL8QWKkCLyczvy6SuXacnEKUguSLNxbhex3Es9HpusXPiXtfYCBxeMRp",
  "key46": "289nNrLGQcVEtRy6Q8nT8AZaVSXF17FJ88HmF1csaZhMxa2jWg96i8bSiympDQGRV6zmMUrbPzpoNWP1aCpgjAzW"
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
