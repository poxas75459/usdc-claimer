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
    "5LMFgNdAUyQZW5skH6rVuszbXwuYWzo9nKkafwSpEQ4bKfVUm66wFzwYynGkv1nhWcANpj8K66z3m7x8Po7YdFAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMfh6Jy2h3meERGH5wZ6EK3nAToggqohBPfkYBsUeyLnhJZr9u6eUh3BXV2owvjHSmN5HiDvyp2rscnRoMaTsek",
  "key1": "2VnmdewcFqz8PrNxcym7tQ2Qe9qhuuqeCrwtbD9rNHw9s12kWSEjZ4AUrTbPssWyyANwSGngjzrqbQVNzCa7EJA8",
  "key2": "27xRmJDy1bqx2dXYvcnHGZtgmgZpP3CRiHJGceHdJXSumRGABWnTnK8Ns2QYELY1wo9Vj9ugFUKcizQ3Pgk6hfBX",
  "key3": "5QARumsExXshZmx7g1VdCtaNuQrxemwP8j8yohkWFScWxLCWv8cabw5XCKu81VXkZzkwpw5JaCnPV6sc2LwiqKyF",
  "key4": "2dAKgosEdRm9dqLr5ir8pq9PmJwUksfnCox3J7eJuVvVd9hQSiGWyhZ5R8KxVd8YH2CgRnod8ir4iGDUNVMRs735",
  "key5": "5XeS1qNmEPuTkPeJTLUk7wbbmg9NJaxN6PzbNFbVJUfZjMAm7RdcLsBQzyhTKggqWzt7qaQGNxkfBrCdH4aAgo23",
  "key6": "26ZCGsEz4gNo9sP2iJr5tzBJZchjixWjFuLpy6qp5XywjuJvRRS41kvEULJ3ZwbH42SSasWRPbcoBLAwk2Em7Wq2",
  "key7": "5F3ou7SoZrKFBEHBTZguVErgPYjXpdyx5YLGStBcQXBSqzsakykFqHhzFfnaGZvSUGtc6QNSioqwB4J4XqJxnhiP",
  "key8": "64mYM9Fx4Nw4raTnQvR5i4JeW3pWiuWwS38zoRnKzPwPrHJp3eirWFwDNVZ92b48aX8qXRJsK8wdczuot1eNbxVm",
  "key9": "46Z3p75TJC6o7us3PXHmPV8M82AgKgnWAJJS4V8unU5XyyonMT18T9wA8ADKacahFGdYb4xTBFo3MyQ7FL9SCuCn",
  "key10": "3YcqhvK34PCsm4LvAXCLDwVMRnfmZV6s7oB451RmsqyXkQRuGpJ5zq7k7cPnG4iCXYoPQWtoMhCbx4eDi7iBGt26",
  "key11": "4TgemZKeWUXWjXj8uednCeDkiZPSMCQwdh8qzgwGKQFaSugtJFkNp7SAMuWsmrCA4Loz6zoTvZEq5L4rBYu1zbjr",
  "key12": "2h95erupcPmNwi5rYxph41XeeaUqXJiQ57pfXUAMqYTyLpkpsubTaT89WDoy2ntr6GSF895iHHHKU1xrrzVbFjor",
  "key13": "4jx3i5UL6LFFJYg8hZ9jnkLZpZ9S4hTrUfdgY6f73D8MYe83DYrotjdoWmPsi72XUoiaFwmCV862Y7WNQguHWpa2",
  "key14": "2nfoEXE4GnVEw7YNL1JVm6tr1Bxf9MtooYDhXdF28TE7Q3aWtsNjCj6ngJZqF6ER9XKJHcbCUJpX7P8LaqMAXLmb",
  "key15": "2tLd97ABrzQUncncA1yzphF2uBvsQfq2xRwVZhw3tKjCkgo48KPXVVkm9Fuu23BVFf8KUQWio4FFEthVtBBkNCmy",
  "key16": "43xwZS5Q4Dd59Lj3DjiyxwFbbHcu9i3FBWbkyQ291fQiZF3yFjB8FkR5Ln96JomLuwtBd12UPbwXHXsFhVVdG8P9",
  "key17": "qmgcYvyNWVdV6DtQKrrzsjRmbWPrn7U7EyLjX6Y18JuuDsAAoRMy7VVcwgKPaN7zzgKJMFmoceFrXK5KRwwh8Af",
  "key18": "4eeQgjNLDSUnL75GVuCbSb7skpRhExzQ4vyYdEWS9ZaZxvQ1QkroCc4j7iQub3RVaKU1xb3mbt17JBshMCE1vxmm",
  "key19": "bHXgaJ1BatY6GqYwdmU2PEZaqkapMQ4xPYSbnjpNaXK78rpMp3NUuJpxz2w6YXTwUvZiWTXmXBwenSaoqfr1trt",
  "key20": "23ofJCA3uYRznF2PCNTHWvvaZQmREC8Kwwqh3rsKKvdKLS5Ns1BkotUTdFTdKhRD9MpEfiM2yTjGJhLvJ1SaEWPP",
  "key21": "3owEfbi5bX87Rgjtbn1Wgqpa6y1fkqKLkpggfuSJaK9FWztp48Yx1brzUr4eu8xmcGZcEPoDePJJH7LaQBYdgRny",
  "key22": "EbKioSMabKNMv4cxA9n31pXyYuF3pfFoiRmr591yR3gAGjybchBYNdAd1NguksoQVAj59s7zQGBPEN6QYHQ5r8M",
  "key23": "21CE3xgxNX22VUZ3iBEsiQSe8XL2JgpiETCNAQQwnfUiHmqfdnSbmYCf9ynQLkaBujitD4q5rm8rwxxfmnidgUT4",
  "key24": "61JFgqdFjCkPzoaASjtT4ztgSjQpEPSz241tZ5Aabm4bmdL7HjWaa6JZCtFbrFFFNGj7zr3Gj5bHzEvvFjNGaSuZ",
  "key25": "rJiGEF2q6XU2dxkkMYsRxggBk7TQaebeko3rhbmRWHWLh5AeovKR6FZFAC1Jic8sE4jfXLmhz8iDcFpj2cjDgtE",
  "key26": "2JiVPamaG9dj924nNx97tutaDJE4j4n4ZyG3mhsDpSpxk81dJGD1TtF45mafatHLr62A2JawYuUSo6xyWNJPPL94",
  "key27": "5mVDNqTEP4hPwLxSZY2sbpvm4Z6PJTwsK98RPw2wsJZSExKtu9zwY9Sfmk3M1oToTh1AZSmW9iJJ278tWso1Fn3Q",
  "key28": "3AFcLLBXvzy6EuwXhRD1UGfY3ZL6mVnfNSKXQsxBEnAqcNXXBCHuV2k76akGNTVVqagD8KV5TEVjcYP63avX6Nuz",
  "key29": "NPLareytiATidUemZWUvkFuFUEGAvLHEN6rRpWTvFpgMcKMmWqfQLUi1YhH8EDG1CYwTf1rgrEZCXcw74NKRpNv",
  "key30": "2gKq4xvCQbmMnHkxKqti3HDwouZEcEhkGEDRajQ3sSYejhL3GvRgDYaxWcoomgKKqvp83KB7ttGPMDSwkPmGQGeJ",
  "key31": "3yKTuJLx371npdNo5xnnCNpBZGgmVSDh351a8N6CMfG8iVkvp22feQnUsNTU2ycPSwoe6E3kn5MXHHsgCDcETFks",
  "key32": "5xAToFTkkJu9818fEDbZ7hdkNfHwW1dYA3C2ieydmZRqyVcZMXcp1Jm6qBHRPytPTYUWK7sCcxT3gMfiTs7VxfBJ",
  "key33": "4GECBjUWKDfATvsLyUMFShUzS1JTdh2MU2NWF8ZprF7y5z7MHkpna9FVkAUeYjRxa2asNffiTXh5pZgTGPZpHwQM",
  "key34": "2UPYF4NJa3HCNCo1PT9syphjj2XAqUkRzwno1YMMQ8doDYpAHTDTqcP8pm4VbwcFdWriBGiFiCFL5uG8xPQ2Pw9J",
  "key35": "4HwsJgkpVHE6n3En25EtK77oXDYXzxhh6cm31R5EPtWsozqtW2cye7jj4abJk6hqHEnknvpDnwoJoxL6wa14QxbQ",
  "key36": "3DoDkCoQefAXTmMbZU4YL6CLQ8PjVxbHtdqQFnVNa6p8HcYLQFziTxj7g9FrCm5KETALEr4kJ4ivcucNLt1ipJyB",
  "key37": "3VW2QHdNbKmrJQcXEMXeo7YtmfrKkfUPV3P5nsZey5xebVzxAXhBavQedJoPn9ZHqTWJDxykcSZV7ZFpmuxLePPQ",
  "key38": "4kfCVCwTLRtWXEYxASLJBN6rqYQ1FGUfBwPLWsfA6giJrxgPafqpea2TAj97hX9jY5MQfMvsYsjkQACmupMRGycj",
  "key39": "uJSGnyURhzJUeYaVNznsEXYcCMJ3JUqCPNxtYXrAvSqFY5MgozwTDykCXTrKx8qGNvNDfMsiu2JE1dPHcbBkscW",
  "key40": "4BUVwtUd4Bj8Puaf7Vsnf6tGMfhv4ExMZNN8YvcUL35cxU2i79hh57BySVksFv6t12S98gcZBMr8RLEEGkGzufrM"
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
