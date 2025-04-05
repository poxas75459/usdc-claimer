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
    "2StwJQ8JAUXi9msbB4MbegAujjB7oN69MNiNUvxJFnktSuzzq5Gyx662sMZ8UyZ3U4v3YudPYFUpRxftXJ3gHewJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36WwB1QTerLX7AMsybCJbyCFj9VA3GBivG1jtY2WGzSf192R1yeTnLHAipo4KarGkxyHR3vAm6tTRQnrfgBJzeGN",
  "key1": "3EWY7dDfoLqvcieBMNnFopRUgzxys7EHbxZnxt8UMi5Sw3HEgZKXXqtEHoFKdq9yphcH4k87QDSMkXgVdEffmNVT",
  "key2": "3JuDZxrkAugpBdR9RT7C7iLzX1bqdkiYYnQG3noyZ458pVURSq5CWfeCgeBxDcdiYMaPgeBzT22uj7aZJY6FCgFD",
  "key3": "4QQJwtfF36bpJqd28WEMs8DSgEwAqgFh26AQ13uhUiskcPQAWcNtiMdY97WgtcFQaLh2cEqtsU4zDX9XoFSA5oM2",
  "key4": "238Vh8asee4Vgye6NWq1jysmfRRxhd6oXL9Qe2dKmfpHuHyhzBaka7hM795mLiUr9yNdtNg5URLtM9MLiYXmjMAU",
  "key5": "2bfEzm3DSJwXPsgqV5fEgRgxYbFqJY5edJkFAF5c81ppyYeJuADXXMNrtRgBdDquH2PMQMo3qsufX6KcBNs8a8Y1",
  "key6": "35jE3RAghhKLAPeW9do4xRnHUERui94ADPjtSzFSun5Z5N8vYCS63rfrqVqRcYd5H5fRjmosHQLGVMEZa16V4miS",
  "key7": "5TcQuKZdRbk8KrTWj1aaRxCxEAmeeHCkBEZk64vsTPQwaHDLnT55vC8vXN3rbkh1dTEsbJVSFaW3P9eRjY9t3dee",
  "key8": "67Jt24zMwfxWcHhNfjNCA3Qh7EfQX2ANDoH9VMZxYXLGtUHPoiWaRT9mgRiDtgfZcNe1b9mutWBDNUPk29zXuf2c",
  "key9": "5x6NsvMD2uajtMGcMS4yrzAdeVoHJ66NfLWby6Vu6HetV5SgRsmbWZXkqbc3yfwHLFGZ6tohux6V1v2z534YEPj6",
  "key10": "3Rj9FdWyVGWyoyRpfNsZSJzuebP61mmxJWwv5fYZJbfi9r3bRuKEEGQqZSc9GrjrVm8aurwJffJtQ7ds1TM6URUV",
  "key11": "23FASneXiC5ULvBKn5qY1pj4EAtK81geYmx8od2mCVBLYBqXNbZzA7o1H3bbM1KmjATbiXkJC9PoD3QLUiGRDu6s",
  "key12": "dCdAY9FnsHDXZsYWnuZj4DiBWavCPM4wJsAh1L1GPgHC32MtYqhwdcLawgT8GazPwmFmxamLi6vTyEh4wkxFoLN",
  "key13": "3jGkHETN7MSGdwBM1a1WyzbWtYc3ug8yZ34DiXsg4mwV8rABEGy4xDTDhCzJ2tKERUWTTJrssyLJtft2jTcNMmau",
  "key14": "2RFnHuHxBhDgtLHqPNuVVwEih8SAt3dViY4q5FkNJ8f8bhSEZPVs379WqMn8eETybBh1v3gtKS3ahb2GUvaQPDhP",
  "key15": "5RUAUsF2RcvSkEFyAu5k1RZKuxKw5RebGo5CSARQrWXHTbvnWaYogvMNmf46RPGTYvTD5cJEgh9aYpG6Ns5LSSf5",
  "key16": "4QCnJG7RaaV9eLsS3oDeFPJxQRADfRb2Ffoyg6uh5VZ7ggr9CCs2RX7N6FG771TsG4vc1zfQtXR48CXKrq6Pn9Z3",
  "key17": "4g5xU9AVsskEYnxHmfQZZTWZPu34Pos5yyWbbRae3S8JqV6BMykuupLKqYDXzApisqVFpAncTy4umHsM1M7jMiVC",
  "key18": "31LFWotVnURaiXiy5C8P8PB2Sniq6Nt4TxUaaCGDrLQTv1iKmbn6wnVkNyK1oRKYN92wUUxvDoGXoYnjiLjjmRcW",
  "key19": "5mJAq1Uug5P63zuLsWGE8j7vFh4AbjePhdTnQypemhQHXDhmpNq9YHB4m4K4KyXtxmzJp57n1GZ8CtrnDWLTae6q",
  "key20": "44qftiW7P9BsWDFUZMvRGojQ3uFARygmsjzJvsUHXvQLqtgSiG4zmwh6sAJ1a2kYoqyGqXxoLovJ8Hc3UfaxkBE",
  "key21": "4uZpinkERf6hRBHwS1zhJiu7V3ZarVunaxmjNfw2MEBGfiu9MTzL5Fgi2AGXoJtsvrHoSMs9RHtuM48yXvqGiYvb",
  "key22": "28fjMY4QQfNiw9U5qw7pnphcHQRt11aZHXyU3Qn2QQiNrYLTKd1qS2swiMndw2vZ4o8fpfPnVfcC86WsYaTxTCpE",
  "key23": "3zMQcnssUCChTMfVYRkXR7xoexigRACXac2dqtH5cPn9WdhBgWYpNmJmika7rZgkRmoL889mKyd4M7GC8cNvG6DM",
  "key24": "4MFswz3DhMUcm43urh6EAga7RuD1yRYf1ARnmWkxELTsV458zo1ENZ7LiyJxLNVDboJM4TwLU9Zzmqm6ewyQsHEw",
  "key25": "4yNpVaSYdGM8XEif7k7ESV2fDaQBXJ3PqJjyhA2EXBxQVcqTsoUqs5yFopP7wH42DFbXcFXG7oDWYdWg8CLrcDZn",
  "key26": "5pivtY9mLXtdSUDXi5u7FGWvqUMLBSCPed6zyCeNQRao51TXa4nizpvGgcXZNuYXXoeJzJqkdgDF8pZAx6hUxVAf",
  "key27": "EWLihNWcecJrWoyseQEX89W5fyJqyHxyabM2Z1GiUtHWkarrKibZBdHnBtkhs2VpHyPHFGEbv3oGAeQhZz44pAx",
  "key28": "4gjm7bupMWkt3gJ31aLtb9nu9fVuNi4LVXjZzuVg2SKf4uACfMgvgBeRnR5RS72pvvBiUTNCRbENXTbnxjo7tHqE",
  "key29": "5Cw6fUNVyzAYK5dFRhhcB2ybyHKagB8LVTvou2nJaQw9J3FoLdqNwxpv2TCwJax7qbMjy1jz5mFGRu8XrTDL3T4s",
  "key30": "5UfXE6FtcfwDFcBkerYJj6i2xCSrnpkajKA1kdCoj8s2x5kZ16BURVuE6p8ZXxke6Gp3Ly6uG36TKUYsLRtnhsqo",
  "key31": "4K8LV1F5cMBbtbHstTKEKBUBeLWK1MQPNAjZVfUM9CAg635pn2ze6LX1szyNu2CznCayhFyhn8ZhwKYeen5ZoANX",
  "key32": "3M1xeGAjYu1nkWGbnnyhnJLL7WTPGiDg1i918kS43cEPWGRYSjsEq4GZEKrJeFgDwBd6su3HDPiuCEdzBhqerhyi",
  "key33": "5USMDSjcGTrHeGZweHrPf9VhTjc9aMezCCfL3e8w6Wh5YszYruEKQCk5S6ptWChPsVUPMzx2MssbWQsHcBtFuqFC",
  "key34": "pf1VrmoTomAKTAEHuApDmnjjQqVUVTxW2gX2hoJYqeK2kSvFMThvLBkA8nC7AbEcDWrc4XrMsPw11mbsJzBDknc",
  "key35": "5VgZT3HYGZCJdrgoK6bVQ9xtt8mtfgP4L6Urge35myu9tY3BMJ1esBRKGPiM8rqaWqYVx1qNvm2R7gHReP2bSUs9",
  "key36": "SkZ89kxGVxCo6JAFyHt8XsxjWr4nfqii1bYUhzvyA6MHdtjCmj4V5P4UpRYebC1a7Pc5TCqJ6QZ7c6rAn9VwMmC",
  "key37": "2bjZKCNuKcAH3Exb3hnkxgLQeG4cBzuSyvNJxdoTW2R1pyzfgUuZp1ZC7H3fJDLGfTSFG7Lknur2j9JCWwXRrgQC",
  "key38": "3f2yn8TQKa86frK4zfzC3iQd3ni31puCwJ5aPRREqgpQiVm9rG5fYTq9ug8SHrqGEh3uJVpE9cpRcfgNHdKasGrB",
  "key39": "3tmXBNzQ1isdjmBnyiq4tFEF3e9hk7kXDJ2FczZYjEHiQrnNRjsMytcs3yLAEsM36E1HkAHJbPaidP5ZaLmKwbHd",
  "key40": "fc1xG4YTEV4KMBFXJkmFwD5Sv73iK2QJSXmPq3c4wBxRQpSC4R2Kk6Ubgj5KxYm1vrnyRrvkPPuBfWFrGEeUeYx",
  "key41": "5quqs347VtzST8Xy7m3fcTEwH9PDTGXCQBYES4Lm3RP6g6ikGishRzzFKqeZwHCVPaMdPdSEoUUhi9suqPrNZb3T",
  "key42": "5GDuiXPV2wMQ1ztUmhXXHmD4eyFU7zWv9tFNX6Jiz5HaWBKQUXbFnRuTW71TN2iJxZCcjnsax7k1WXi1MHLuJnpj",
  "key43": "5qR1DGXhzHB3oi6tdfMNvjU49DFpB3Jjnc12USVs55MFpd2FJxPcejSrHZmB5SQzZc5BGFMsSUUWSC3VTvyH8xZ6",
  "key44": "5JCJmqoD78HFjrBxso6hBJzWD7kkyAf25iXhGpiUgKSPcSqciD3bsoFyyAKNf2FYwjzvCmQ2GmfssKE2XxwyoZEE",
  "key45": "2x6ZqXdeN2mcWaSkAJMeXrBF2q5evyuj1FafhsmSWgbvoS1eb811V2GgNHVckGH5igNL7A3eGEvwVu6xLdbNxqTt",
  "key46": "t2z2tYrNVdvgHcap6Zunc33M8hZwaLMWo62zKswR5ijWjn8Jrp5An4Vz7pCVqBtc3Lb4yhGF9QvHfTWmw5o3jQL"
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
