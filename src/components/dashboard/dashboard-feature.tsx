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
    "4GncvP8UxV9QghMJ6ysGPChtXrCbF376sgBrmvQZUV2j7zdVLtd41RNJJQKG2iymFWJvXtqxkMNWGDnziJ1Cdd13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVCxGxMdUoKwmE4N7yNBJ5hzbBdBHpstGBdudvrXvAfxw1vUfbBAjizzdeR2mGjvHByn3WgnUbTe1Ce13nGGTUY",
  "key1": "2FvtUQUwwgyWR8EDYWdKUdkwCbfxKWc4jARRGkriUtMr9CyTXavMhq7jCtMVSgHMKHgeHJ2VQvwwfLBtss7SojAr",
  "key2": "4i6rmomFV6CVC2CwgDBhLSHMbsigqnMNRghSGYveTbhXJALBL4Br3oZ3yBn3man2XDihAmXrHrNzjiL2jqNtj97P",
  "key3": "4cimseRcfPZu5eroPJPq25PZqvt11vStGvaujTzHyN5Qzsbs1i8NFLdwHnVpWBkfEtuqsUgPa4oWcDvn1R13q917",
  "key4": "5r35CXwExktT7VMM3tYUTJ6AJCe8QonPbZqcsoMk2QNFrHttt9fHwq7XW1o2s1fra93wBj4hns6rUZbTga6MFPmN",
  "key5": "Zm2daWh5RbF15wLFRtw6gdZwmsocgW7SS58yJhZdYfRKifgCfUji78vQWqkZBECZ69bKaoeC3hM7A12uvUj26Vk",
  "key6": "2JSBQUH1B2uvczZDMrPK7bjsKh6VFfJVwanaPPFyhjmk79izaQX7yjZT5FAzieQsGzTe4mXDcbg3z8StZnfPY5p5",
  "key7": "4J84DkejFCRBvS9g89wFSwLBDxxWnivtdgthPWUEfvMqhUCZ3uAtBT3njqKUrxDYsnQHbcGrKZAsnVcZqoxXczMT",
  "key8": "2oxw6TqVP23FvQtAZPHqNGN7X3JHcQpNffEFjyGe4dtfEJUQiL4aDkGDSg6P9Ufesj9br3DkHrrwiRcCJm6dim1C",
  "key9": "5qPzvwBVKEQxgEdgMW8m1ua9pJr7FuRNS4PQTSF89LZoD7rAF7k5xJiSYprdWqFRntSqKB5N28JF5hZEHkZoJHCn",
  "key10": "3UTa7V3srHgU1sd3CTdbdbwbEurrQmX1cuzLzJboQxKmmm37p53yCW8wr68nEpp1qVGwkhd2K8ehNUvR1XDbThj6",
  "key11": "56RaxJpmUpY96vCiF9RxXPWgHimTcrnUtcy96FmiYzhC7mpThY9DC3GUk19KhoZ8d6y9Asb7Ppav7gQSbdsSoTJR",
  "key12": "4gqTdjNvHXczuoquVt4eMvxPQtiac4oj4jTGAsMU3GK7CoGbnVdWWyMJMRucEGuTJTVYXKLT8EBzPQvapz3mxD7S",
  "key13": "4GiSmsZ21efnmhmjH5ZkUf3kJkM7inK8sUDdDRdLEfZxBaoiNhP8AqdPRHHNKYKHwbeJJDFoFZoV2VaSNSX1992f",
  "key14": "5QncG1Er8QfVM8yEkLvqsXSmNPRkqQQd1NkHBpxY44Fq3getbJeQFEYXGbJSpeayWFfgZfMSdF88cHZ1xYQm5hFR",
  "key15": "4WKk3bDHVwZ1t466JZBZiaNAA948XaErafFokYPfpQuqeDvasEuxCDWKf6onnit6Ac9HxoXr4KahUV1k2Tgiaiev",
  "key16": "5uDkq4NHQib4B7Xt87ahrcaUyV6GBSVsopx9HXNd4qn1DNAqvXJ6xeTikQUyPEnxctvkCtV3n2baGkmRnVRJv9eB",
  "key17": "HWLRU4Bw1H3WQAx2PKuyyshzrwzxP6MK3YqzQ2csqMQhBeMQGLBEEbmMkNdwcacziXdHd85NLRThs4GjhVdefYW",
  "key18": "362ZkHpVxD4BLD5eFLXgL8zKuwxLsL4DzqL25dCdibeAz5mNbdEAZz2Lt6KW64qMcmVPYac1PV5n1A1bDz27DoQi",
  "key19": "56QhDFSa2bnnJFsNfjjdcVZwpmTsqeyyJoj7NY6gGUXb9jocN8Pdj9QtiXMKhRSTPFsa87jwZztR7uMA6TxJLiaa",
  "key20": "b994NmArBNBiUWwcHvBxErjV1Yt3iwEbT9nAnNKdKQVnsGAtwGAiQQJYb1eExDrzjze2zH3nei4S1yzR88rnMFF",
  "key21": "5j9xCJ32YxE59qLWv63tp4LytnW82uzwRYnHXsrnPSQwKRYF1Rce5fiaYXJAB91P3qyLyJdn8NpSP9ZAbDogeRfE",
  "key22": "4RVK21BpmcgVvd2VZUJZiqpbxWMhhtLHJWLdogB7M89z9NYNfK8NShwaV9jgD7oEupfzZYke4PVSvo23DHpsypYz",
  "key23": "4ZRpVka7GZnxAfJzWK3EvAb1cJCX6ZjtqpTwQqrLpvcscirnXsyrnKpPesSpxkrU2XxXDqttMwzUmHFFotutumzh",
  "key24": "4JjcPNb2EaK7GmyymzfU6ZRxqwxBZyohd2fqAehEwrinvvuNL5q1i8q41yMezBiAWCZRdgJ4kW4JY2p1VdBTKn3H",
  "key25": "3fxL8qFc78EV5fv5z8Muhtvrht3vuGbC5tSTuQSxetTQB61F9yZBmLosp6m3V1vJkqAYTjZtmQSTP29uJvBu78Ee",
  "key26": "3j2NduaSrSwSBMMaAqwKYTJbA3SUCsMagL7yL2AHQ9LxbJbYzXfxECVEGjeoBxSCQVmaTF4pqTWyGMqYFvKxxbMk",
  "key27": "3upDo2No7DZrhSkUhzgvA85R33iEUU9eLhv86w5ckjGj94jnaSi7Vds6eoyy1rbHhgdkFLAMTMqt1fMkDw12J2Bg",
  "key28": "6Lf7LqiSLDWEsf4ggEgDaErHXJU7guPXx2JBBATagvwvakYGmPqu3mrpbtUxehNG1wjfNqbdaLJHs5fBkes18R4",
  "key29": "3br8Z8DDdRNG2MVtzqcRjAzApuGWpM7PTefCFGDCrDk6XQEirf6vxVTxi2cXKrg3vRVGaCB2aNAEJcSR4b9rCXyd",
  "key30": "5GNXve588BsH36NuqVZxKfrvKzv72EzGKzxZ1tpMgU1zubHfk3erL4cbL2bKiAsUb9WQnHHcNVQTKXDwjiUq7ifG",
  "key31": "4a8z178MgeBHMJb2MpAK2C7FAKFXACnC5XzXb36Nt2bzPmggZx9vtXzoQC6oAeEChrNrBj9GzqpWs2qCakgXvLky"
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
