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
    "4GQjxoR6EWDTyuXaNJyKLkgTSL1bANXn9Qt6xnq6JtRndzT4G551KVRj6PL75imqAZJfs7B5qZMMXWKuBA2ywwQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t3p3HS8ouzdJBcwWPCZeMfRGM1MkzTvvnFcRXKP1MHqiHSdVHAs2CUqTs7xVphvYWMoSZzofymYuEAW2qF4iQh4",
  "key1": "3yx1wgGRV4iCT86HVLbj61KD6CAUTxtyXm8BxABQoR2v6myhP9Wvi1WjvZHA3JTFkw3Z5PdXzkWsSyUAx1nNoDM",
  "key2": "3TxvZKqytmNJsn9Bfz2ZWBetJDkutM13EVXsnj3DYJpRoZTZ8nfwRX5uwDKt16iWMT6NFBCwTTJRdR8auRkL7S4g",
  "key3": "5vHCv6ihsAcHH8BpjAR7kJFg9yrD5FsxRzV5aCxmBJavHNWL4D7szvJ5j8VKeodzUWLdX2GJDhn81jDG8WAXdCzp",
  "key4": "1qpkCF2bG3DNUWco8scrFyvBkmWq48nntBsAF9kgsSgH3y2iWsBDbdPeT1vJhb3LjGtHb67QrBeV1bWwvRTosnF",
  "key5": "58Y7pGbSpipGuP1jNBXgj6V7EGeudAy7U7wJkzHguuyuaV7GfFHH5Uey6XpYfSs2TdDTXNMD3aAySZYmCPCiKuZy",
  "key6": "4fWJbcv92S4qXH5ebYmrFxibn82i6Xfzu7i74SxWTQ41avZr8GU8PNe84cB8QbmMbqgjhyqnNcKcntStg1ZEEqQP",
  "key7": "2Fp4zZgoByYkqti4zcYjK2wV2G6swQDtL7Hi7piQrA9o3XNsXy4HhF65NH2mNKH1fkQbbQ7aKFnvfymiJZy94zZt",
  "key8": "4zb6AibFpH55Hx6BdXTErkbDQyCscDN5Ycy4EozyHwAFoT8sRVHEWyt7tT5CYeygPZhcFJaumtwVuekafXrUY7pn",
  "key9": "U3aS7qg2yjCR4xuo1RHvsRww6u8uk2ePxLehk8AnPFZkNFkCnQwPHzi868EGe3UVgQ688SC7GJ3uoaLoGcLnBDW",
  "key10": "4Z4vaowoVxCBFHJoyCm9vNCSjGMTamCHjow1CSGMw9FyE1KS6TaG7X5gRj7tuixD81wB6GFRTHy8D5WcNXCBW3ew",
  "key11": "4N7BABMFfLQ921LKRALwoVdAgnV35dUY2YCErFn9sFV8DYYuYbq4g4Y3EgBSKKXvr8yt1MuXAdrW4wdwk3kYnuHL",
  "key12": "4wPy2XfLgYWQcY42AchLu12PZ8cNsd54WKmXQw2xFun1qUycuEaRMMWr28uH5rEYZduFDhkhxFtaMZDzXJdySNsw",
  "key13": "36rhpnZPB6P1Q4Zd7YMEN2TSjuxRS8MBF4ZZo6BsxDdVFrBPsbzgj19kRP3SCEPspaKphrDGHe2Dw5VXVAVzC4UB",
  "key14": "4BjwqByahpxUJ6wMrJUgMwA2apxRFyk9DgZLZBrTTDNCMuUe2NJMWpPihkNBmFhngKFGtdpqUXjS1irWRrhfbdo8",
  "key15": "46n9s1upM9Ags5G6NfHgGo19zYKXzoL3w2udovayddAgpVF3Ftz22tmK3Lm4q7WADKq8SUYoy4c9EyKz4ZsxKuHh",
  "key16": "3Pv9HzHXHfRdo7mpD16ymfYZcZrbVxJxBErw5dPm6Psso1gt6PM71v7tW7XDGbtcAC9WLh9DZGy6qaRciDRBtPXw",
  "key17": "2gCySig65VXqEp2Q56Cwd8CUtCpBuMWNjHZmL4CbWN4WXxdNqkEUmJAuTaq5CSNnLQbAdaGdJVtcxgX5Vd114ud2",
  "key18": "2vtyYCvHMniPXf4yQ63PShG5B2PbuwMoD86hC48mh3ENCCRn9sEsR8CWrX7gmbmvuwnsoh5shsau99Ck7v6oRuGK",
  "key19": "4oGo6b9ibkiMuSBSHwc4jsDkYB3BeNYNZiEzXPj6K5zKuYUtNzf9Gc1h37MCUxm61Pr2a1rg9FuHtrVvGmeL1aHg",
  "key20": "5pA79Bgj5yQCG3aETjbTsVNKZBbRUaZkSQiLkThJt9hmrDsegvsT824Euzvdh6No14xo8Yj1Ws2yG9fp8E4Z6xX4",
  "key21": "484we6SQzgPnqcJmrZPvFQubRACwRvf2cpdFejng5FYghYaw7K2uy1SEFALB4D8PfS2jNdvBAGeAU8o3T1Ug8hJq",
  "key22": "2cbth6xWProf5wnxteiHrd3PW7j4JVPCvadasCyRt7ZqRFUEa2FJyQy9qChb8Dnn7KRTYNnpN7wFaKdY83E1b3E3",
  "key23": "5oe3H5bg3AWNe2jxJjB8X4dK2RxWmRuSEmTWhPvyJeMYSi2ENDARwBiTbLUHbzeUEFiU4stqu54zeG4KZnRc8uP",
  "key24": "AR9DcqhB4zwfXt1n2CiXoDh1nVZyrg6t8tmPMFWfjWPzY7H3zZzmjv957MYeQz2McUDssFSyytJo3nXvU7KW4Uh",
  "key25": "4RmHqG6eoKTqQBWVzcnNb9MGHEijoaTYzjsgEQk5fE3ukxWkoqu2sbwLGYuBr588CbyjQA2wW66BrHXhdeSs5kA1",
  "key26": "2czmxqkZb99MqjE6yvLwbN2PtjC4GuFVaqbsvCXZCgGhXCehXvcmMPgTMMZ3miEizeUPwLuMV9X9Z8TsTUyUAszp",
  "key27": "4UFssJNBFcp13HL6HGA8AcMzfykGjUJxDzZemq28CUpR4MVor9SYyLATyr2xpsuuC3HKi1qYch4AK4qwP7DxU9yA",
  "key28": "37e7ZGQhFeonEhAs3JcRf8dKgzvfvXHwEKm1VaAVW4Lqt26dSd9tJNt9WsQFcG9jZRWn6NyQsVXTyoSamo6vzibY",
  "key29": "aZDGiStb5Gw1LPLR9i8DjoAmKYaexVsHm2SHZHWwiNyWqd4HtMM35KoCuv63Ep3n6rgzetZHokP78a5mbBEDqee",
  "key30": "66RYg55X5qR9jkGm485N2bRgbVnnWQZf1KGZakNSbGdPvBkr2XtyMsEuvWAg22NzaXYxXkUY5aEorBLg811ba6o9",
  "key31": "5QWLfFzGLFm6PeHzTALccDDy6yjhWgbqcjTbY1s9286fW3PChwQMXCybsz7sef1BkcCjZEFCtYibjQknqFGXLMsD"
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
