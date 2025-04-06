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
    "z5V3uLBEMcJk5Z3LrpVtvKd43HGjqRLct3EYxYc7wNWseBJZvzf6T7s4L8gLFPFBm2qTcDBouGt9UPn1QLyYrMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nm7vZd6WkjRap6Gctg4JWRRMsQKASuPbyrGUMcufWcG26avTFTpMqjUUtEa9L2ZzpuiDUSmoFykKDTaLkSrVDLm",
  "key1": "47pgd3111Exw5ec64QcDyvNCZPrufh1yxNf5xMYzXy3BhMxBZzF8g6hYoBQakFeFGeqENphppr9SmQ6LF3ZMaKJv",
  "key2": "2gnUM2GJ4Qem6ub1KioVyi24J5jMtQfWaU5NpwkRnsEDizv15RSUgY1gWV1xUVQN7WhQNfpuqepWS92hHVTcfdnS",
  "key3": "2aik7MLaCzYpWXV4XUNzsAa8Kav6svnf87UyTgAvnuWMyxezZ8E3Q3e4VtgAAEU2D8eShu9RTMkdXzjZytrFBTsn",
  "key4": "4jkfd6SND2sJn7aW35RTa4m2EyWVoipycCtebipwVC8J5j4Tk6uVAm25v4uPgWk9diVyePdeUZRkkadjjjUzPVDk",
  "key5": "3Z65KvwRzmqBodfeZ5N57tTQ2iMW7n9Lmk6kx8B5m8aVePnkN1d2q7VkZchmsqYtBugndBv2UvuovXQWUxhdj3YX",
  "key6": "whnv37DrP7Y9axDPng3z2G9NmyfeaTEztvYHRhqXwjzrjCYi87yzYjMPD2YF1iuqJrnAFqsVP9Wvb1k1aSrKmxp",
  "key7": "2k7qHWBrhs1Qus4w9Kw22uFvYic3iTboWTR3DiToELn6EC2HJ9AZej68zdXgjtdzUQz9GcSPJm4L8mWfmgg3SqWH",
  "key8": "4Z3gXsmpkHC8JFgy7ARjXXxLJwTfkKVssAHNQVo1wmnitsvXPG9zA6PP1n69QLSfQ3gTyY7BkT9oF3CnWhxia1SY",
  "key9": "3ocm1Y4RBqteea7kGaCtX8hpcjiLwFqbjpR8EdZnCGk1Qj1MsQJB6rbSCqRW1nzEYzPRRXZTwEAMpqDPKkqTmUFt",
  "key10": "2pDbf3PCrVuKJm78uYYMAWpbgrmqogS9ka3wATTMzhCwvoHX1hyFGs3cae4XsdsD8JdfS4QuWLrnzfK2YJGVNP2c",
  "key11": "5h4fL491zJ6PNLd3J4FzCeP7WsG3x4WmShRntQVKHN1Rso6YvrWxDFp2MysAAwkpq5twB7D1hrbvJpnC7vU1PMeq",
  "key12": "2pvLoL84ZoyDnyD6PMpRLhzyGjU8vjCEanmqxreSSd6y4KoBBxPuf4Jmn1GNEa17sCz8LMHHhFtLM93Hz23dM13H",
  "key13": "2eGLDNJBSTck1vbJTDnEAwcbZi1yVTL5fexH5RNYXDQhfYMTxDZj9UF71qGG36tSRPLEc2ZL3JeNL7KAu8XvU3eZ",
  "key14": "osWzT42asqgQpxbXeAZ3htTU2vJYAfe1C8Z96PV1UbmVx1XYsRf9tn5ofcEeywYPyj9otV83Y3TJPN9VrkR8N9Q",
  "key15": "4hzQKxoMG6h7S8WzZDxqNPBjSFJkpUFs7MYQvyevgA2WTg2CGdCA5Ya83MJ7ciV7bdhEJXRLRpUAbofyDXrNMvCW",
  "key16": "7YT5CmbnArUj7J5upDfTVQkNPP5K24H6oomwkRvHH1VVF4UWoKNgBCgRn6Y9Vwo576iaVVQtuCzkQMhPxfPsQcr",
  "key17": "mvtQgfqc5hihKdtDmPN7YGyFpLXkxok9mnrk6DA8Bt8b5VF1JxDBAxvj2RABpBf4KFrasHKKmMS9YnQkr1TpLMC",
  "key18": "5LF5DvgxZeRYezoYhFgQEcgHoD4kNide8uHdtNYUxmsVH27dtkVsKzQGr5ETQxSzbcAsZ7FbJXq9tt3c4FHvwHY3",
  "key19": "2viZT5mhzbqhvMjo32rJU7EFPFm6vquCsMEVDQj9THmCUFtP12BaDi5vefaswaCv364RECtwuS4zQJNR5TuL5WD3",
  "key20": "2HkFUTdP68hLkXZJAsJjFMa1ieSvNh88ZwQ4i6a3WWctPjdV29bsia6pLuPMB2ebo5nncUFzDkNUV5Y6USVQZ5Ax",
  "key21": "2aVjTRzXdv7jHVvwFUMU7NP1nGMwX3aCDDrKmQ2xVw3g1yJDTrKLTaY12KrWMmH4aB31Yqwj39mHgmPs8biQrPAc",
  "key22": "3WfihpC1wZL3gxPPEUgdxtayiN86BGZFyzQnmAw9vSysgJBHCM4Qq1Df7dhxzvwVWX82Ydtk1XyP2rNWeWfbjQFu",
  "key23": "29zwWyei1LS1e2MEkRPg5kM6mvuh3FPAy2mGtAmEZMisY6ywBVFbucsuMBdX9z3b8oChqV5x4paENyLWrRrFuRM9",
  "key24": "3y5khpwVe7K2xK91ojBR6ViDipqQANWyP64qxMBPe1zJWgL5jCtHF5hNgE199Bxh3z4FfmAnaGtG7As33DYJL57W",
  "key25": "2ZszrcmdmFqUSkRYrQ5FbRhUoNcWUi8DBjeE4vMQpJtjt42am1ZJGsHi2jznM9CSrYboTfPrkUFJDnxz3i19iXwv",
  "key26": "4foFCjGVZCxqv6ajNJegc4gWQr8Tgg5pBw8PVakdWS2mCPqkXEWcEr44EFQVXbQDNGE1iAtk8rvMPSMEyGbarSad",
  "key27": "N6wpf8S3aWhNJ6wRXS4WvkobFSPqW4ow1uyM7UvXLgKNV6nFELkcQ9t5yjTL8siC6iCTCgN2sTMf74Wnry71UR5",
  "key28": "HXWwwxvDtiRpTf1srqmLkJKenbTR3nKr1MGxj25jvhuYZfJqH9d5yyBTAstb4gDrGdaSpUZPcqLZagZDAzyw2RA",
  "key29": "5MKQtTtSUXq3xA52LqB8FY89M1RhdcxWJ4naeu8To4hhGgFJiL27jmrqUxqsxDEmunKqgWigYXhNZjEBzrAvzD36",
  "key30": "2fCMVTNAXVVqCashTyb6Fe5NmxJFJAfz549H8dwrMmT8nH2HatB9iGLfydQnpo3N2hzAcwZ1gUq1xY33fqqSJex6",
  "key31": "4vgp5Xic6XXLrKQKU4sgE2tjjuWRrmrBhxJw2xETg2wsFRiuZUGwvU9RPcr6UywwMoSw969YjuyftTfgK5pNhQTU",
  "key32": "3TTyWxn8r8BpjRP1j3iQ5PLt9XBnr8ay8QGdrvruiToLpqxdWXx7hTaY5qMSNFrj1muvM2fxTyzZynHL8cM5dkSd",
  "key33": "4WmJQh7719cvxo4vjZY9hQxGLxufSFdGsVYvSJ1UCsUv2q3qcHZ1qpXafmTx6uUAbxxchNau4tbBANBB6twtL4yn",
  "key34": "2c8eK1qNEZ8e9h9xGbteHG8hwj9DyupdtAw9Bw2KWoKPsvxTGaYEy6HMaLvaysbYdvwUr9ob2JmXDET6ye6HSGqg"
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
