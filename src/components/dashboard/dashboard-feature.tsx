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
    "4rDZ4Jo5kkz6HkqUJyB1BSHfgPySqZdBCVZ6FXYu74UjgkcyExFQTErd2yKBGKDZRPPwMnfmJSiSHzePFeDXFn19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZszVda7cgfNmw4JJ9WpPpPH9GdUkir4UiShK6GEEKuUjP3QuBBeSYjwvCvkWBNNEfzq5iiCX85h8Jb5pEzz5fwU",
  "key1": "5MAtzoVSAxMRPaBUR5igy8bRPhw5EiTSM25X4ny6iWnpNN3YJWnMYVdDzChLzEKtEVtLzPu3rPAKboZhyS3EUfMi",
  "key2": "28RRkiTnbZYg2VEdQJpAspyUgJbgGQviNuCDiengtfCjFvriWQuqfg2UB15vg6RBK39YH9FzREWjm9BuW1YhxxuV",
  "key3": "LWRJnXACdYXeZGDUCW3FFxxnpHJTxnTwhJAUsMMhzerznPqPytfHbybDHmXJPKTmKCoGGF1mQZDZNQvPHZc8884",
  "key4": "32judkZJwXBD3DamxjvxboreEb8a8Y54fS1dvXK659WTsbcYzaqyGuGD59uUJhAh4AiVLmTwHuTU9A8oq8AFcp1p",
  "key5": "3aUMyiqamWW36W9j2WEv94L3D9v1jSwWhi2Kjs2JoVHNRTBi2B8vbvrkQFP98TLs3KPd3x8moJepHxVjNe6qb5DM",
  "key6": "QNtMmdDL2CYDZdnQbngncgfdzQHQ8PEvnKYESxysivWRhA9XGGLhpSzxU4CwrWK59w4U5141v2C2kzB2bnAQXLc",
  "key7": "QDang2Z5AARowQMRf75xqLTJhvRFgjMKW4hSXsEsMrizEdnco8VqPi3LAtkTWS4dHW8rdMpwPAxxcSRAzJD4zFk",
  "key8": "27UF1TRXBPVtF72fRpetseEghYPvedmji4wSsVxDmNgsrjkz45PUybAGct5ga3rKnGVA7pRTBnuFjjmLnqZx4Hn5",
  "key9": "56pz5vfPekLwg5BWw5MpXz8drCsRhg8hDXEXSkiuErXqx8dwpFPGjUGz5cKXACZRpwGnWaYEwMpVXjZk9BhQzrRC",
  "key10": "2ufweEB3uBSaa7UHL6ztJwL8G19xD7VmDXvJiFXrThSPfnxqK7uwxNe1tCWQHUw4isNxBkwCoLvNfE938bSvNXKs",
  "key11": "4LvRL3oYdzYf3AVSwaAhHfM6BoXGyUXrXPQPUSx9b8owCCsn2mArkuaTc5ErFzP8ufJNB4djCYm6F1hehnuF3YvY",
  "key12": "XzcvSomaBYWk1edZTSGFSM2yxFUfBuapKBrnmsFEu7W7BTfLCjZW7nVqagB5xWQtTHsKq36mzYGNVPAyCtgCBBB",
  "key13": "2C6tDjFSZZszhEtE57vgBgYmUTchpFqWhPgZ4HXhq9ZDqoNgJCJiX5FQ9jbHH4P38V5PL9kjTtJhdEZTMPf9LVCc",
  "key14": "4BuLFFBn8Qfk5ZhMZivJLdD43YfgeQz8ZKRktsqWAy45wsMxJZ1DJPhGJFPaAy79cCubny88mQrwS3ao9javX6D4",
  "key15": "2nz2Ywm8nmoKkUDFzTZnDBsKFynzYaMLfBR3bwtv8rgvTAmVvzrRvWM3nF2bBrmREzdYrYmVntu36pfJ4rhL2qdG",
  "key16": "4suzL5cBx3UuoXAmTSefU3q2VYwQkB5NoNh1tKQaAqEhKgcrhvgD6rdoFVfkkLjBvG6CeLrGPwo4NPSyhjy8TTTK",
  "key17": "4midyVusPD9SX5oG6QD1H3UWhN5Gtfnj5GN9BrtLMSTd7GU4nVANcFPENcExRssCFmoFvxcjzQ5buzii6EKi5RFY",
  "key18": "3dyV5j4BBJGL371kj8MoiKiVw4n4va3YZR6JbKHe1ZXoHh2ryMEju5QZTNRTz6mk71Dj4WNSMXiFyQUDGKqB2aGv",
  "key19": "4XEouNXBRd1GHfhPfNTy8968YYZrAEKQPuPJxfBALzgRqrMSM7ocaNq6FVj2M7yJmrigLY79E9g8PxmUwdDS2FB5",
  "key20": "5QM8Xk63s4xZMJpsYr5QsP6yUA8nwZV3jsbdCZerYdMgoxPt5UUHphSP57XpM5XoUmjoJNpJgCWjD8ndigmSgmVw",
  "key21": "3vqeHedFVgp6rqwW961bzuQETC6aKKg76vqSwBR3CkMRKAXQQuNv8EkF9ALwQzFRmi8au9WCP7XvAR7a7jrk8AmA",
  "key22": "3WDnXyQGUKi98mHNfbTy5jX2o21NR7EXKrqjR1PVWwCUyWVvFwESyqcT95nybvnCtJnyK8k3hza38cd3jA4cdfpJ",
  "key23": "47j5yL4pu6euSfd6SU6M7JTHDfFaR7xa7nVbW6zwtWnRkA2iPBPkWoX5VNdEycrrm6As1Q9zNLGt9H2q8R1iSUbV",
  "key24": "48F1oRpvr5HLgoYMhL7Yq4jg3UUHN88KtLQVyNMyomRtDqvSDdKTP2t5UEZUNcYkLXviKydum2hCa6ddBBsMScM2",
  "key25": "CCBNFpdQQFBoZ8DvLJsCtmhg8fzNZns1oMQFFayNkNyPefaqwt8CpzHGghAixiXAWMZyUftffvDebmBkXPaq8Ls",
  "key26": "38sSHknpmTWSegW9tAU66RnkaPRN82LbxoreVppsoMeZEc2tJSzQ5TFDbb4LKPRBsmcmnSJkPgX85vUEmbQg34DX",
  "key27": "2TBSYynpBjJEyJwjz5dhm5JLeCqRzahamRUJo7yZu8JrPWLrPssaaeizoPc3n1Zvv57qHcZF3AxNe71Tgd3Rnoy4",
  "key28": "2Py3wKGj2nWgFRX5CkdFuQ4z9WG1SknAgu8Td6867AcGq4J1bQdaQn6WHnJnu1eDc8v2e7oABtqMQQQTqWyptNte",
  "key29": "2vBUnjFJD2zA4DfNSoViNcVmobVQxZGcuN2KFRKKFmrk7Gk8b8zcJmABcw74RnagRcuePXRbPWoPHEg28QXPndzS",
  "key30": "RSxDDvkoFTKWw8wGeBDYbSTfZZzpJhmcnWDYVixEz55mrEBrtG2Wu6qnRcutyuMEqcPDifqAcBhNycVo1k2Y4Hu",
  "key31": "3pJpjAdxc71PBPtGBS7DtgDjDTgENGaKiMdZ6QkwQEa2EbznHDU6xddNM3Um75dH1nQEYeLcSVfCLBwuTnMznmct",
  "key32": "3CjMYJCvDQp2QeB3xpdeYCQaz9vfomqTnAqQMpnhR41b7tTH5Ui5vjSgGHFLYk3KKqqqGiioR7UcBDUPBee14rXV",
  "key33": "5UVHHP7uLzobu5E2TH5oBV1y3xCctdQWYUaptfXyHjwTSdaDi2zfD4neSSYvJBaigRxJscKsmFMJoYAsx6418JCm",
  "key34": "44uRFM8GhH9Qhvbi9o52kjaoowC786yKQTQvXvPH7T8LHh7aHNijet1RnkTRRjySkaDLdqADJt2eHjiw2CBwDXPA",
  "key35": "4cf4BuJ2n8QkbWTsjgxegMxjtEEJg23XWYN4FEfwzQ4NWyAUmXFy4UmxFfW3nRcAekN4sm4Kk2zH48CQg2on33Vp",
  "key36": "jddXi1x62qLVKmUFjj4k4k87D5yTD56fCtACg8bMPoNU53LjZ1abPAR1hYhie9NxLYE5PBsrRiwMhvhREPEdXQz"
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
