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
    "2GPPD9ggdCyQ9yU7UxPQftsAuAJk1mfgJpb5DGfuYDoc7mUy2D8WcxCbHgpXc9eMvHrp46ymv1BcjApJDRBu58PW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2wAPf5xDcFkrV1eKXQbVaXQSbExFRoLj3ATSc5F37JaDUXTvSja9ae9r9hd7w8twnsMCpr8dzWMG9dcXr1Cfo8",
  "key1": "nHY3JvUce49bJnd3CChfPgt8oLigDTyS8CzxTS6bJegVEMZnmExVU3XUZVbae6zRf3N1JZrZHtggPh9JQWiCajk",
  "key2": "4FRTzW6dkKF93q24FaoofyhsDtsH6UdkRT1hBoRaCre8BuQUcdUv2ZR31LnhFjj9Sd37MPysBmk3SJnvaEsFMx5",
  "key3": "5JhVDhvqyxQ1MvvTgX3oqTSczN6MZSsDNJyc7xP4envdGzHdtq6ojzWemeMEa13rmqPBPwZo29bWbYpD6WzMdQdh",
  "key4": "24fmYPc51th2rV6EMyGGDEoGiXsX7EsWrhWMVVyHrfGky5vNCXmn8QiwmzozZw7nZCjZHt6cdXDH4FjuFg2thmzj",
  "key5": "MeG2RgNuXCB78byUJcVi11wR3N78mbHL4sesH3U5CyeoEFqqrPSDuzpqTwzzA8kyYZgSSoTArJdmfiDc4tuuw36",
  "key6": "2JMtZzxXtAU98dDdAmVybNixpZcoAyUbdL9GXH5bGt7B7S7JyQzChn8ncauQzE2jQeKbLWqae3aXvyrKGyPmPc3R",
  "key7": "2vFwo7zxcVebDFDEYyNcTZgZsoJ33U2pFiammz2igTch2J1NRYkg5NEmQZaT9wWw8eUWg5Z3x9xhq2c2N8zQxmLG",
  "key8": "4Y1HfotYhrCXGknaj2FAVG82qE3XN98qLEtR5S8h5fBkGLpmZ9oS5NJLtEhqEVyRJqofvs8UgPcce9kVbfSTYfQR",
  "key9": "4tZL7M1CZuL6VJDDnMSGQQ2nSdTLvJ884NKaDNhysVqMaA1BE4Evt3QGaAGYswApZe2Rj4t9hJWn8JwM6s5HzFmW",
  "key10": "KF2SJdMdYHqESfFGwM5wXKyAFvcdDQAXnjUAdLmScDNo34Cf28FWjRpTEygCFktWvdactQZScPr2Urc6Syw7Xvv",
  "key11": "51YAievqqFGGCTmYcDYVUdksgLRCkeWZKUBAhUun8Vp9RELL3gurFEFRhozHaBnPsrxqZrJ7do36ULLGdbree3TQ",
  "key12": "48Vru2pej8x5MZ6UAXVSgFsf2ej1qiEb9LLrBhcxWTQr3f3XCTuHLnEfjHGwDgC4e39mYSmRky7TkHKzXFqJBTQb",
  "key13": "28Lm6Gu2fd3MR3u5iAm5BYmxNuUpwmcb5yVa76voVw4cbzUdGBd3xCkehB8Qd93ajR8gKzeTSwqQxizPPKcnxx6r",
  "key14": "XmVdE1VrhBi2kEic3aQmx4eKgFN2991MxuNByfCeengN13iyQfapWxBpdhtBMRBRWnWXRgrwLzq8T7WgMb9hdqh",
  "key15": "6694PybiaqBFqJpna3nuneegtAAwbDTWNPGBhDfoBVPth5acCVhN8vvLkx4pbFPRQNrAxNAbbxPBBy2tgy596hDw",
  "key16": "4t487ER1tgz95bJgWqiwoL4EuhW72o9keg65pi3BBxWDTgDDUASSmkJKqQvMEJnpxM5mBWZACQZyVfWq88zLMvvy",
  "key17": "2suQuAYUiEd9nAVsm7RGT4DgAdJxm6CXGJh27TFa6s4LMjRA6c3j5cxki9djigVcdaP9tqTwEthp3zT95Ahyqn82",
  "key18": "3LV2cbJnqxnz9CdHPAANgDdQuWFHUBdyz8yETrbjGrD8rHEobdDSJvTaeVV8utfesj1JCzopfPWPkf3SYaRXsp6P",
  "key19": "3hn3HiMdTMZnmDLHH9Sx8otAQA2TqBEZJY6W2WVAkniY3NNVaoxRC6iNopXpxqrkJfiV4ezwh9ufKmfwPCxxjswR",
  "key20": "sRibh4ngb484YPYxCwW9YDDiqqWebQSXAfSyscXPz4DjWz4QSzGKKrYRuC41uvPshzygguWKrjuhtzvpfDVSRjt",
  "key21": "34JbDtKKig3CsKjTyeTWNamTrRfKAwdhnWbNiZYNP5hHeHahe3cjgKXQkveqgtrziTW37EWYv7VwFnUpZpzx76Ps",
  "key22": "4uenfLiPUmLbMmYziugMWHEuSXhMaRGjCh4oPZK1PpUKqg68DedRiLPbkJGvLwPtUByBpAeiHwwHGFqTdYHJPeDu",
  "key23": "2pJvb3XwzqBJ5k4qYmnT5gbrMsRetdu7aBXpYJgZeaNtVqq3UxfTKcE3UtL6eLBWaF4MSTZZkKLZJSCK1Ks87Tfk",
  "key24": "5P8ZYCpvnqXdNwdSwcTCYVbsXPPsnFj4N3S9n2aLp7kxBuERkkih545x5AsFdxBBEi4tRVaHafG3iL1UorXfGXhf",
  "key25": "3gWG3KfB5e8kUiJsJREwqgvktxULBt2JTWQK2FrUQfu3q67GHHbuYzCuVTuJMbiQGg4BnovhVT6sLfbSY2iAmSBg",
  "key26": "4TZqMTddrpTLWHUvW5EaWzNG3NyfHoZ7iGWZKzYNRTJcBt2g5iZQp8Kx44WkWPFEk11TRcEJZcHEBieyZ1u5fyY8",
  "key27": "5HYz8nafviQD7rzYbTMHMXhxxFtiTXaQcVzphbH61ZaKo3uPCcQtMw4fHFtnRV5W1xv32Gn4qLm8w7YVrNkHdFQL",
  "key28": "2MYDFdjCFE7awCgA5HrK63rHtiNs6bSyxKWtHmJyzEj6G2b3P3CD6pMQuYuZekENtAbZCThfuHJQ2ogMUPdwacBy",
  "key29": "3p9bTwpvzqhjX8s8mbWn8JtTqzoHg3mTkgubxbAXoZV9CUnnYuCeX75N6TormrqY9GqqxN4zm1VWJtUqrA6k4nDt",
  "key30": "3dVmLJJ5Ex866yDgh1FUGUxhT6tAmPcquZBDFWAdKoBzf6DpHHKpUVZPqdGRZxoSosbbjzkNwEeqaFEdedb3h3qZ",
  "key31": "3AWrCd9uBms9eGHfwQkrjKPe6EMkLZt345BPvU34G1KL5GskHtQS7CAtWPaE9e4g6Ltzx8NLUjY9WCg8h2MWa3ij",
  "key32": "3DVGezaLCUv1TAnTetrMcWxJqAS8FFjaYTw4n6TQ7aWvGRN61gW6i1CGbfxJd5yRiX5A5EtsxZtJLVecQGSFs5JM",
  "key33": "3Xb4yKQQzcejBK4ffuNFVc3nytuCokJJCfuiGEszM5844XB22CcCaLG5p2vGUmWSe8qzEJjJBq8uNdVmZEDDYxef",
  "key34": "2Cgc48fz5bUKy9BUTEXJvjCCGZi1yXuU4xXiqAj24p6MX5qibqJEZvPfLrHTkckfWHGyc3HbicX5UiLwuuX6yZ4R",
  "key35": "54JeAbbxsruv9nruPuJNCKf3HhyuaWzqLTvACu3zqd7Xpgburg7oc3nTKVYvLTX6ksZTCN6fuA6Yn91NtzCarZkx",
  "key36": "3yafEwtXFTtMsk4kj3bi6EdA1nd6nCjAtuEKoyv1cnoW6XtRXvYkQ3s9Q4L3DBZGxCKSuwJzJeEKRSp2Jh5ERUVH",
  "key37": "GELiHj3RAu4KP6Uwn2MnfgcGHbqne1h92J9cBt8t8PTXAXVmw3HZYGKbpxvs1753rRK5xzZrHWEWZADiCtXPpUX"
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
