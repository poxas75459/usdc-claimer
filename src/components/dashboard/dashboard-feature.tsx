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
    "Sxm2L3haXQfVq4ExmGXuUr166kFir5uFSMqdhW7zWZgiK352qAwfd29s4UyZogQm7GSw8E4QA8VcNjAaZnoeXYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWDPyHVkG59YT4xMWjzaykQXGmXKxbphZ3DF3hyUbRP98k2xiJc36xC8jijra4dpmgi45aQNpTfFDQY47iXbq9Y",
  "key1": "3yoATNZqp7Y5i8nkjGWwg8EC5qgJp8Ma2CGKxwHYQaaVTZouXQcKjMf7cKgyxA8mACDh74FQZe3S4v41BZhSqkXQ",
  "key2": "41tr9m31hb6VTbxxhY2x8s4nzL4E74RyMuugNLXjbwvmCtm7LvcEpXNw2fDUwvZfgLT9gBZz256f4DC616tNmZNJ",
  "key3": "5NApt5udsCfzCmNZ9BkDKop14ASWirZjU2mQBF1CWWC25uzkEjHZtRTbANgLWBnoPUKnXwGX4mnNcPwKLWABvjqS",
  "key4": "yYRWmTx9J7hRzekLGWyggJUqDyLr9AZWp63WtDSyQfoRGZ6Tcdxy5s4quVkBtigUaQTAJ6yALJE68Tytcd63QcJ",
  "key5": "63MXcG34Y8udNiHXrGDJaQ7ZWEbUxED2oeXW98s5kRzm2oX77v93JBQQXQfAfuQdeA9LJA2fyuRx5riJatdxjkcF",
  "key6": "4vaY3pLTUdkAvsjWLUgLKr8KLmELbQounUcTMAk2huoXkUUqiu8uodnhB2nwzvySfzwaZDRTRxHznQAoNzBzPKLh",
  "key7": "5KzRtC9bizhR6htLQST5umgNc5syXojgNpqAH1rFi1tuceGWPoXS7NP4nc9YEyitR298tWjBthxAWJt59etNYEav",
  "key8": "2fGxrkrxW32Js4XSygpc6qM39fHaFLB2bYCSP89ao5oPWzThB6k4zDHeFGkYYpMJoh6E1Dbb3kMLnphc24WZJTNp",
  "key9": "2PxUw4xLWR3HNuNPFb5ijK6JB7NuPRVzjm2TcQzUDMRYNfE2kZfDBfD6W2F2vPTiZe4ZCYugBdDdxWAv9751fYiH",
  "key10": "4wjNTRf7L3GU8PfPtsMNG9f62ysodj6crRafgnHLtKo9oR4cA4hqth239RE7HFhPaYJJD1Mb46spz8CwBNU7Jcb3",
  "key11": "2nw3JRVYzfUow7xwnaaD8pwTu2DNda4mqUGiRJBPCQPdDF88ZT9Jeuv9J8YFkVQdVaUVZmrhsq6Vj15yeTruTuDp",
  "key12": "uNtgAkEWpvxmgFdD6tEn8DryLNhKwLTx4KUDGzQkA9oe6FEdrofryGKuqK5uEHAXusnHyoP5USCcth4hTLfxRGy",
  "key13": "3bUwduw5HHS5ftASVMQNZALpPYpWkJLDrJKuxsCYjJjJ5MqmLoPtyXtCM6LVLBqasbgjSLpj8nGfqHMnVqrdjvr8",
  "key14": "2TCXJnLbhYt8vmJXo6TPywHpnbjGGa2zd6v29AGDk2aXUpaHwHMTVK24W6pFAEWCyfqgircTVenezG6wTq94PQS4",
  "key15": "5vWaay6Q3En9NHW71hBtCNTViyp9jRATy3kaAh1JJMirDwdxPKNH41WYLvcFjnoghWsMsH34NFsAM1RuZmcRzpfq",
  "key16": "4nEaEFKxpexEkBA6egLP1boHjzQivMnparsfisS2A2325ekXFVG9CK5oiyZYr8z7eJAD2TLsNurqebG4MXcZdrzj",
  "key17": "2Vr6jRAF3EU2QZM4484kB9jEooT1iWii7DzwZk1QYdHeHNKoo7p63AXYW1PQ5yQSYrnzgwREUCzPLNtLfhjZ8djr",
  "key18": "5FGYsej5dTtREnLGJc6mXYW1Z87dZ7YcZPremZVvt7MVqp7ARXL3pn45U3bjKbeytNkyLNbr5HE9orw4GzNGUAd3",
  "key19": "3TiRM9iBhGXEeTLUphdCNfW7aZopNCWdVwKv4XAunPVe1aynktoVpeHRREQsXzTJTMivvLDmdz7LNGqpLp4sVtNL",
  "key20": "3MZMxcgrgJLTe9UhstB4HaueGW8RxRfXFUKqLpWoSvgguDDeqix8SKGGN68n6h5HmNqSJpwyZAfMcsBZ3631jDBh",
  "key21": "23DENVXmBNLV9Gfc4WJ3kTyUJzp4MKQxtzQCM1PoPPBt9jtB2YiQYL8dZuz82HjERCvmLPtkbAfzDp73Ggq55B3H",
  "key22": "3WcAbh8GvRttZTi493z989NMvjDmYZ9WyVKQSt5986EJumNnkZ3DaEgxQaR2UDuFjBBZG1aPQTsRvQPRp62movYt",
  "key23": "4nnsnLPD5K7N5ZMkxHjJLLtuBCNVVxN1zdjq2z1yKNWDhQk1kaWdkP9gmZtQc6R3oDyjH5EKZp6qyTE1ETot1KFa",
  "key24": "6czw5o4Y4NQKSu2gfv3NnQMLQpk9R1DX9X8iVy5ScFBHNEpvKem4qr8FjXppjuYixr7eJxSb8NaugbhNAKpBqJE",
  "key25": "RAF2UPjbiDSjG3t1nHyj9WZe5FyzVfHFSSaUutv8pXNECfYVkwrZgF1JHRJ5HBn8hDsUSSRdYRoPyW1HoDPSkt4",
  "key26": "5qtNkSkcV2KpLsy3heqjWDT796e6TdQonag6G3np8aYrC6pHMzrWrb7pTTAW4gqprDjEkEZT3BUTH4HZ9aJx96Z5",
  "key27": "5h2t7UdhBpkHYfwm7tHqM2c64twvYpy8WEJyVotp2LjE87TgfgpPJGyqPRgxR8PFCnCAh7WNbfQoHfhRxdcfLM1u",
  "key28": "3R1VDeWQ8grLBtPN3xYrNni6EZAoZTmdjuV9QEm7diQmVWcNRPuvk15p959eCgLLTJKfMnMYLAuZb7m62ykumVxV",
  "key29": "4Gi9TVDLMPqPD9DQ9VM8wXhfLneJk29zhpBkqUr895NKkW3DXq5k1ZXhyn1Ft7ezarTVnUUxdxR2vVtzeA3dJSKa",
  "key30": "5TDCmnrGDe9FZbNqVPSUydW3tc7F7ebQKabT6ffP4ZFaXakzqaPL8CDn2e8pMEyAJwUfiTNSGdj9UANJAQGNB3Kx",
  "key31": "5bpjwCHCTmenvTfEXsAM9nAWKuoQiansEVwtR6L9zUTkmv2hfxscw7hH3c1uYsqH8aqMUiQuSRQjSmzpx4TbR8D8",
  "key32": "3yDHY1Bvf5pnRDtki7iSxA2j9zGyxpR6wKEKTGv8zja5sefbhpkh2zqv1tnwiN8ceuCP8QmKpap9NvbYNx9cSPS6",
  "key33": "4sxxtKktareP2kntcaD85vTm4G5S3kGBzKSHbD8DGBSqJw61jwP7jNwFKyqmAaJcenhcS6JnELcJMTMVqMv5G85j",
  "key34": "4ZANNwhUKVkGrgYHXrQ5YSmfnwZBKxmhUjUSa4bupzChBgFktjBNc7Tq4t6N3nn1nL8RSD1zDk1wePq1FEgcyoZV",
  "key35": "2FnQ3u2tGj8mvpUixDrCdjKp4GhmwXPSkBLegFEMyGTuUu12tLybimbtiCQDUyajinkeFWEdU1v25TkDwNuUnCgM",
  "key36": "2sz3sj9yzENjP2QoVmXAG96mp6Zrp5dD7hXfoHksYFh4ptRHbW9nkNHWf6Ur4Tk2mbxSgQFr6nYN7VU58ksG2JxK",
  "key37": "24uPHRZgNdCkwphQoKn9mLBfdJVyb7eRZEmCq6MhCDBix6ddqYvGm8y7hXx1XtjxyNuXNPken8A41MBWAVLjD94D"
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
