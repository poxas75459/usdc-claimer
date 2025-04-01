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
    "2kVAmjP4WW99UojdMZLZNCAuSE8MaTkDmmxcDAubT6qJXJfv4p1xmFfQcKiAqtLu6kU2xgqXqMe6UfJX28jzFsGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzHixuavwYLtXNyH8mUv65toYj3ewuN6PEbwuca9CUvXDR1kJvmca9DGEB4FYXjyoXRuGV1tTWGe6dAsbcm3uNX",
  "key1": "3bGegGdtuicW3VF6Rc2Sfx4BTehiX6TxffegDawHv6CzopKseWGSvn8YLKCC3UMgrEBzHkBdHX5yQ4zvNyqHKEmX",
  "key2": "211zSioYM9baQAAPqwPBAgFsgX7svdCfNzjmY2Cy1M1xWZQhNsisQ6cXm5CgZpeDUPYbcmXaUPCfvWEBctqtp8bC",
  "key3": "4Sdh1bkSaNth1zcS3TA1J5fcGtqamtkRBFyVqSa6Xm3qMYavr7crwiH7qExcEMPrQqoVCz1H5PrQGYKsSNXabJgP",
  "key4": "ihCTgjrDJ72RygVqPKrot7sHcZrzYB3kcdNw5LyDf7Lkt6N8LpJDnM8cRkpTcDjU4towTnQpYCnnLBCTJjMbH8V",
  "key5": "5TDJBQsxfjqdxMci7j73zk7qCzrvr2uHp4c7dr84BP2Lza1Lfi56AuHUP6kDZN6wSDnu9Yq1Y3TCQZbbhp8TCw7i",
  "key6": "5FKNib7qqJpmUDKZXUzZsxijiuFMwEdZF4TTJcu9Tz5ZGQYvN1bqFxJ9pcnTPKbqb3q66S3rDyQkKHtpZ24rdtaU",
  "key7": "5ms6EEbCCCSyTjv6BL2mpySXCQGCWmxk4YraWqssPTAhsFdeKqCpUPqpJ1uEpDgh3D6rkwC6optFZECpp3sssWDA",
  "key8": "cKj3LvdPR6MnqW72dH9T31rkgVik7TeTJcRSzmHifppA7c4iffaYTDfweCLoGWhDC2jmuESohkTu26b6KLaTmCU",
  "key9": "4WcZazKS7czTQYK5SnhqdSJzze2XhFtrkoMmYnQNyrk9ndyMZ4jpeP35pHQwV8MPpTrAQZ9LpCapemtEN6vHtXr5",
  "key10": "4HYWceW1NJeWzAMzv3oe7AkMaTX1pxvSwz7PMdoZYUL53LwmQ5T6YDNshFjzkdx3ywhcZPQGqW1yh1aPFnr1p4re",
  "key11": "4V4GE7UR9GawCNNLNtqMabHYKsBo4sUkineME9Xv9sw6QPJbxm3a2Xhcw2yKHbaVLVdEfDi8LKpN7DS2CDzSU8VL",
  "key12": "pL6PYfeUnez49HnFqUbHyvVeb7kdcRRK3zvrCgzA5yh7pjKExTREMWvHYb384NLiVrg9hXyZGEhc3vu8hoBAt7t",
  "key13": "244GAXA7CA5AhmLSCY9FCFC3cxVZmWY4xrxpH2Ks58FhmBP4xebY3WMfeGnbL6fqZE9xymfdxi3XCHote7sdU3qD",
  "key14": "4VoBSEe7bxww7eRN8w7mEwQDAXGmdF2WuBj74G5bBdmuerhv8UVMSPN5Q6KinU22BBFLsJejaHsujnD7Jz75EHpq",
  "key15": "4HQZqUSabny858CbQS6xz34TYjcCr1uciJJ9cXzXpmvUAEJDdmtp3TkJbSq57TrE9DUk62kzh6qsTvp3NgBXeWHg",
  "key16": "3cpNfv9ifNxEZNUcNqG2PZ8ZQcZv1LnjnJTR1nTHsDg51dUqkZhyxpQLxCgDhLSJv7qbqw8fhVLiEyPUEeXSL2n4",
  "key17": "5QGA4Wuuqry7YBVsWkpFKU5Nr3sauzCfLCoRhnKErAkev6boLUuCBqz97w6SQ8rCnfLcmHV6efjAdb2yGgcrBUQM",
  "key18": "sAGA1Lhnq7Urj44CcnyJ2vRxJaQgrasxZ8ySt3BSQbAb3hGWfUkzNziYR8YHKZC4dHUPiE5uszzViZL7tjSuHxZ",
  "key19": "4KaCPDnJMorv9KfdCvk1FHWSVNFrEAa8BkFiPZ1LsD6o8XDLBh1pbUQMTTdkgxWDbaSWxFNLWpN9UaMxctuLK7Yx",
  "key20": "5UcM4YnhExfE33nqtrv9xU6Momv7zgYPk7dJdX7d1QaukpHwVD4RwUajPVQDKJPhZuCd7coffypuWVViPdUr7LdS",
  "key21": "2ZyH9KEAauu6z5Et44CNtAE5MyeA2rM6zRSiPjdCfPCH2mNbK4bfBp2KP8fjWw91zwK7vefXHqpTQNd6G84bsDXg",
  "key22": "SJsDP4VjEQzjhLecp1MPvjamusMVsuFcAxiJE7F4dFBBTD4BD7R8tXt444k3nQbQCXsWPe6rrGRqMx5oKx7vCkf",
  "key23": "i18uHpwe8tC1XcUnXGUCH5ov53DXbi1EXpuGCHNdyQoaYHARpwWGiSSUiecKt9xVXJbgd9vVFuooLGwM9GosWGR",
  "key24": "hE8Wwxs2WydeqAT58EcAL2dGJj34krjZapBnkCRgWbcVXLL2n9aNZ8fq82b7YanGG5zBkwzwNStDoEi8LjzR4PV",
  "key25": "faiM1EMYi8z5ZwPZ1DYwkJMQVw6nwPD9QAMP7E1ck3exFA343dAPehuogQSbrjNxDU6S5xaB9zN8p1h3z2ZaXgV",
  "key26": "2YrMT692n99YkGce6ysnMPJDpJqsMkbkMzvxKG86MTa47iWLjYaU3pbWufumZv4wKYoEg7qgncaG4Cy93ttCWVFY",
  "key27": "bpJ7ApXShYKMwAxaHH675td6dxV7py1k2ybTCBzwAxJmnaFjra1S3dS9VjU1rRNBozN43qqX9ov5a6AsptieE96",
  "key28": "28fi6rj3xVhrWppnZnHdKb4MfiiFXrFKpubgx5s4HG7NWpJhzq2ccoYyAkG5uNRv8czNXfQAeBfxPazJkTEWDyAP",
  "key29": "5BzUafPHedNVxNQET5b6Q4mf9YsrTohs4FNkndpbjJzVXgkeP7LYFJPJbtkumCYB5Q9VPMBByPm9NirJuFTGmktQ",
  "key30": "4VLxxh1WhXbaZgKVrDfsJmTYZc1HiXAicwFGEsYPvo6LCyCYxNycXEqTzSbXS4DpFHrYaw8y3ZpFTEkmRXmbruym",
  "key31": "3n3tQQAQGgUTtxd7aUM5B7BopAQw1bcH4Hnnfne2JiTHDwYxVCsC3BSrBmTHuekaCpGKqS361oeC67Sy9wXySCFb"
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
