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
    "3Gym58tCCTFKz2YPU6cchgaUw9LemBxQZvkhLzr4aqYn2DYVqXMEQuWd1Pw34YZ3aMG6rDcweNA8rTXSG6XEQsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8AQxiXtAVRags4iwKCBr74zN3bheBPGUyiET3p1eJdShYRhWvT34FNdzkTUj3xqWRdr52Jy1G8Zz8ozm36Jmid",
  "key1": "3mDMxYTPGXQkRiEXR2qzvSrV7TL5hcr4eAavnTEfStcMQaMA8aM7n3qsn1yj3iSSHPXL93F96jubJPvEUKU71Zf1",
  "key2": "3RnAzAigSTsBKH1cYLcU6g9H7Tawne3u83WqcSdf518Bspp1wjMpB253aWxW14pRZ7QYABNSDVdRTkWjSAv5dFfu",
  "key3": "NieZ8gM1BF9ha8L9UrWzGm3wgXsyA9cwgsRvewp6ACPeHLd7WCNXBL2KVk7iEo17nzzCP8TD5XkqbkcxAY8T5pP",
  "key4": "4MosGo2TXg3ESun3kaScjRxzfr3y2NatfWTzF7gr12WBSCZkbhCF9raAQMA25kuK7Nj8nsgMwy9WUSXSLQ9eaKmZ",
  "key5": "2AAgKSno9pGWKonpzig7qNjAEB2Gkh13ENhWCi3nP69qPmNXtvA4K53jPyg9ZQ4GSnqhLeTm1qNeaK1RZKbFtBcT",
  "key6": "HNQouRX1UqwX5YG9e1osNrvbEkKnRwtqPgGhnXjKJ3TchYjEG1JWGbTQ2repnMf7BVRhaKLijdMybxKxsg1XgW1",
  "key7": "5efYk1PukdAQF9E8DTAeiKzbJz5p33xWP3Ec5h8MuVLPvt6J7B3fSyXW4x1dGjhDZPicH6a6SLnRLFLu33r7xYau",
  "key8": "47tHeDevzcLiM1jtujLd5NMvnCpiD5eRu7toApgpuF9Cr8aKfppsgAvBE96N9RypkLaW2Z47DRLRDQZsM3dQGHHJ",
  "key9": "dZy6QaHra8fEHSQQ4qMLw3X8P2ntNc7b57VjKZpBG4SfrVu6JJC8h52n4ViRjvqQN9qknBqkyRzUqGfLnuy44RG",
  "key10": "3hJbnrEE2YL5aU3HZQwgfbDwCe35rTX7iafUYJTPJQxobMN3bQBpTHxfn36v3VopP6ELnin4ywk6WUwxbbiUPPQ1",
  "key11": "52BnuhNMrbW2SGoqLWACHWddwNdX24Xy4f6RuEf4gCne9Tp9LBpPmYVkJuMf8dxXtPh5SPyj2ou9uywzEnjANNLf",
  "key12": "5YL8WmxZtU71XiKqkPYgs2rhWC4xmxXKixWcRjd2w6YkV2Fmt7Vz6Ek991uSxwTaadUNB7YKXf6onyGfD6t9FAZZ",
  "key13": "54eUhms6RgS9omS3jGTXzy8snarFLethEn77p44N1rF8StR7gFrD5YMaQTLywAfts69UffYwcj7y22Xk6CfvpWwC",
  "key14": "3KF2MGJqL8Z6wN97YE5XtBHYY5WZyMA5Zb9Vk5G4kGtxGQhVrR4JttnzN5fzU71y9fWJKNDMgueRn5xjoaEEVaXQ",
  "key15": "2CENJ8QgN3QnwjAV8sHaimt7itp6PQNofdo8dsDXiiNitp7ssdHMKcbEY6ZWB8qQqG5bSQpqyC6faCWaL7pAtVej",
  "key16": "53z6baskoNB1eXfczsVoSnoV1Q6d2jfGvLtKv1RpXnRNzAGxXX5vNMeZ3NjmgUR7Q2WzUx2xh7CfpZS8df2Ah4Cs",
  "key17": "4dniCe6DBjF5eXp19GYS3jT5wZxgTsVEBxS82qFpx8s9EQDKtyAGPVpoD98AbqdJUSP2avPvMZmZFQdqP4q18wYJ",
  "key18": "7yVSMbr9NYP5FmYm9HUacH1F5zP5h6uakBee3wSdXQNs14RzR9sNsx7d3JousQTX7pynurLArkMHesR5xnwDaSB",
  "key19": "2eqspfFDL6LbVhGWgcUiCpsDGMyZy8ikN9Y2w58PQnVtKUnH3Rd8vVE9gmec7AXGXj5jEMduyaGwHfdQfXkkss7o",
  "key20": "5hRMcMxwCg1YNUpxtPEW2eAEowDtRxMb246ZZ1N3J737TaYrQJoepPv48NcH3U3CaEXQCVsKzwUrdyCdjng3cjy7",
  "key21": "VbYnaJfMWhtD1zuhiyXci8nqNF6yARr3B9HsuMVRpGCXkuesPjwn1YcedjKPMtp6zY8nRBbzbYtTNP2BSC6fGYf",
  "key22": "5YQpciMNfAB2zvMDUHU7z9dzwC6KNvLY9EZFNQKgiqehPfTK2mvVzKT9tptfM5CfRoAvyMJsbXmPU2grFSCcVJth",
  "key23": "5GsYP2f6YavxeAitnG6bRTueLGqFLdzEHTcRmazZ9G2DCuLKyT4aMQqvDdJWjFosE1ALwjzLuvLKKTTH2KDL3KxJ",
  "key24": "3sNR44gjKr3g423ym5Ue4A3iLhcvuFFP5C5t4JHG41895StRfxZnMaj5toiJNqLvBEuDdFoQNqjf1kGDaEPjmXb4",
  "key25": "RP2SvsKr55JFL9BTZAjddaUxw1dfypSZC4geqo5kBEZerMWgmqcDcvpCDqmvpPMBbPVUsqXBMHAYqRdy5ZzVXhZ",
  "key26": "3UKk8TengVpP1Yv38af2xSpNdJtUgef675L5dPUBjKUPVTsu8LfaeoeMuGLG1M8qKgHVZyEstWqoGxoBhMruY2y4",
  "key27": "4YtqDg2JETcJHecEcsrvB42AumLwX81cT87t4CmHeeSSxNqtUs1FneiLxdwdoANBd6eCv9c5vxZb9bEJ9PNCJUCk",
  "key28": "JzGZZY7jKXXfx4kGbPPBAAjk9FxmzGbUHHreZCp6HBASB4GdroPbQgNXh57RxrS5JjrpsunuocF755usAzje5zT",
  "key29": "5fvbWTKEvVJ9AWahdZBoRXw26pTBdkbXjQv8MGEoaUosMauDLsrEUoRoTVbGJHEc8pUHzfUAHJvH6SfmeGNbWhU3",
  "key30": "3GEgAs3yGWyzpUMgaKnxYRBqSmjKTCkX66L5tjaJN9YSooepoUmDj16X5tXht7P7SHfWQtdnUBrfM8Wg2v6vZ4eX",
  "key31": "3SMDy6C1z3cJSf8ktk1gERdv3MnScxivULRa61dZ6hx41GaZFgiD7PGqXXetgxAL7symYw8i3THzwEVuhACtX1j1",
  "key32": "6BKpd5dphS1Up52hmJ71QgDckq2MaB3AdyXuGiH87fefc5ygobiFLoeaohfYtMGCJwP35Tx2KifNoXS4S3HKznm",
  "key33": "6xamhSeG1vRJcpF2VqmDE2bmHmdLLw7uubJjB1MXtiSMX13JVeKzwPXNNany7891JxBS8NpDjAUGbHbsU6x4KeB",
  "key34": "3Y1FrwzN36s76aN9yNjgUtcH7Qatmq5Nxx3FbBxnaoF8PAQLtdkmryomHsAGmABFBTZvAnVgns26LVCWnxCHMLuq",
  "key35": "5dbFxjaHTZhLHHGk5zQ6R3fGKr6QHt7N8VveeMGptgYW2cpG7Rov9TryBZjc6s42KhmqLQeMYHBeu2T2szy8VJFh",
  "key36": "2z6G8bs2wVEwf6jFod4uLwRL5ivH3sGGMFKF2VzEyCvvKB9KvVDgE4YfBy1N3fhTwd4nvGLdE9ZN6SF9CMhPJugc",
  "key37": "3v2poVWXL9GVpVyJ7B14wtjHLPjavmCFG32Tu96ahano5cNcunyWYViHud5BTnSHwcHVRsJ4NJCwbpjcvGaCxyWE",
  "key38": "29mogiZPSP3QuNK4yS7P3My2iPkqyzh6SbvpaJFpNwuEczQeX91mGcZmJeWLP9s9arY1fXv1XovSHEPmDWhcczYW"
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
