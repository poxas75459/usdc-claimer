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
    "43SCu3kf6ouFKaMFenfcdqoDDryFeUAMygABKJhySnAAsLiHoXHghGFjyFcLAfH5Wt5wkbX59TXSraZzeYnvpANi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "491mNVky2xWbACPW3GycaHYoGFCyoRkR7g3xrzcR8LnCdE2nFhMBB85HyM5z3Uw9DVF18MqSAHQY9tCvqp54Px9N",
  "key1": "4vggazU6kuPxYqgFB4mU8AX8keEziTcRxSYXeun2wuvm9nVzoGTqG8duwqdrQNtjusPccCepuFSur9SQVvsEfuVu",
  "key2": "4EGCXzbJhpsZPtvf4Bgq3QFrxjSQhPj4uqM7EvFNULGqStndUDtJLFemBcBXEyzSRvJ2Bp4iqzrcvPBqDrp8wEBt",
  "key3": "2grGYjWB5yMvhAdGTxAqgC1dvFCoXw6c6rYvyL1xoRCswNm3JB5gGUdYGoBeH844d74UL16yQQsy44p4bBTyB6sB",
  "key4": "3DXZaCR4RJEet8bryV3fsSDjhhFSVnEiXQgsKDChBJX6J8buBfgrVLmuDvkrPUCE8PPMDMRRZE3L9KqdoKBm6B9k",
  "key5": "64Tc6fjDD6wjGC23Attmt57ebhypb1X1B9xjhrwkCpzenqs7wsfXD9cYyswE7dprgXJWroknQGtB42V3KijsKn8R",
  "key6": "5zgR8t47eusmWo4nifzN6xQ62HcDUmE4YpQuwGknZfzAPCbgoKYNpdpQfjUhGyaw3A4dnwPfZrWrRfcZasJWxkh6",
  "key7": "zKNRgm224EGb4WfuWeF7Kp77H8ZmsLPjHSAHqT3H4uCxeNrme4QD3fCrV8Hf53KvcX7VY5uKTS1W7Gs4xJ9Zm9o",
  "key8": "5gbfNHR45Xpo6syeMG8ZMbYHxDkLsEeRzLYUiVQkKwbnPZWf5CnkhHN1zSW1FXUTpw8gdyxJZEyjceXqzGNqjsxS",
  "key9": "2qyXXpjXFx7AJQny6cJZS9ugFasoQzLxAN78vm6tCoo3utQBwcKZ5ohUqW4EUuxAULDU4NgT7tgxQRvAtwbNE8FP",
  "key10": "Ck4akLxZBNW4ZGTMcvGzoFpURFERqFdaQXxdK45JQFiiUnVo6SAMC1pJyXDfLForVmezdiAe9t7aygc7hRCkdPv",
  "key11": "66FYSj2q7AGoeh8xa3DoXcRgRyvumhXLs9AgzLnz54mZFwPo41M4PWLAoGyGkxNk4jiZNazxPEHZLnF6Cd4gMzYk",
  "key12": "4V5AqFSq83mYc2v345TnRxtfPY552itGCPpS5pLhvvFhM2r5YsyDzCXHcgAxjUv8aqFPQFhP1wJZqtg4tAuYSoop",
  "key13": "22AnjFVKqqJZNu7pGHBubASPb7SgtbnfbV9Ddd2k65fNwoYxVmJZxoGKjnCavhgg54UTGQQdDWLor4Puf61brJHv",
  "key14": "3bNPRezGKDkQUhVyyk6G9YCCydPLcwNu6xzcyaGLCfH79qWXCVNSUXnpLDBZqHMeTBqcRTjt5QHuaWRP2DJYr9FA",
  "key15": "2WDimiPb2NcEDiJqy8Lbt7czQpkVmggVdoZAfHEw2RPEkrDTW1G1nPJRh1oJM2odpd4jHm5gUrzzFcdi3hznxAab",
  "key16": "63oW9r5tVSfaLsKg77hGsefJHG8EjtskK5jKjVJJSSbapnGfGDtaWvo6nHebPCwjCLLsZVSRtUaNtm4NzSePwpqH",
  "key17": "5nKcT9jqKwKNjCz2AoPpGu3ccWqRSjCmuQFmAPUWyWVDTvtQwq4jLddtFsiqjadGKAqYCz4ytdhHANQQRWSeShZK",
  "key18": "5w9i2bYB4ygN16HbRR5mquqBBttbUKvXQHGM3qP2vGapAnWKjikVuxpfjjboRqs2rcLVL3vWXqBX5K3U1WQUupAU",
  "key19": "3bgLowRUNUKhRfFDi6iTvabaJtooaenrzq5KjjmAoTksGeh9w8xGuTi3mRg7YLeT7XomxaaceVbvyB8e88EzBLju",
  "key20": "2sD5UDow9fFfJfN5jDn9dEqbmZbb9nncnkKqwmibYotFfci7kAh6bjyqpL5dU2a211Rjs5frhN5h6BmyDyNuQo7B",
  "key21": "H7uZKUUozUUfgQuJLCRzqgJmELzXM8K7SgoBe1R2zwPBN21ZoqWBWjMxVZTGWZetyiYPWr9ZW7ev9sCPVmwKEso",
  "key22": "Ldge8S9nHXXc5Gayv2fD2MYoAuWg4Q3UD58u8Na5bQjwrnQCUQkh1DCxoRszoZpQxJMZbFQyi4rGrcitLsYyUzL",
  "key23": "2iKG6W9yXN5zXVp36u6s5c4oH4hxLhqr7wF2Q2D6fqPdCqf5xAmQBGi16dbaxChCrKCHtpzr2pMTE3UZy3hBRqtA",
  "key24": "24sSAETzT9V3x2BM8vTZisQWPjH4ciNNwwueTLgCxxWdcpM9sWMzmeLXMEkTdvdte6nccYxeK9VbJq3wb5J3GXSW",
  "key25": "5xPVB83rc8c225irb2PSgwsmYqXvFTJrCVsfoh1R28gMNAoc7ksE222iSTW6mTeupbKVCEjG5V7RvAZekDwZEHRK",
  "key26": "4jkDWVtvLSHaPwXVA8dEEwPNQp4Jz2aLABczdeLA6oik2x75iWnF1PQWchgzk2jvi1z2paJjoGZGQ16u3jHnvkM7",
  "key27": "5wnyM91goZRFRrti7DKfGev958CpkBYSmHbYSWxUCUoAMftj1gFtJ3YmaWy78mWDAAaCaTzKtkvsG3gkcKnpcJtZ",
  "key28": "3wvRsxp9KF9R4d85cL3FXVpFLrkqGzctLPcbbEmiwbJxSR3XwNoke2bEjT1p5c8fWNB2N1JciVUeEfE34aJNxuBD",
  "key29": "3b7xQn4A1ZHvNRGAUuCDB32ZxYbaihm7iSgDmjqT1F9Eqswa2WjDxnSi6CfTCmRq8fNNY4YWWZiPHP417o1Us4Xx",
  "key30": "8GodzzfW8EB3w4HuWhJYmWuAgaHzgdU3kCjYgh5weD2E57eSgyJfrxt9Cgvxs8UHaSjDey2eguBmTZKEqSRG5Qy",
  "key31": "4REGfuCYmK7oSDD34G9jY37nVgCyDSyu8tuAECYDAGUkf8V2J6XDJhmHdxyM3W2Psr2Y7GkCrRF6ZYPydphgqLtD",
  "key32": "5yhED9dzVMqiUgE7iKU3eBWudK4YbzK8k1tsVYo2NJZ8yWgLaaQHCgCfMTXqec5Tmcwb6ZLBtWmCBg5Fj1mmDPxz",
  "key33": "5Aa6Zn7EaqqJnLg2gGrfbs2dUMHKgxv5iCvA3HsW4f9dc6znCB739CQG23ux9g9ZCiTdUN8RMJAHmTuWu4fx8UYs",
  "key34": "3h5pXSYgeTfmuycuEw8TNbVkdK8GSyq6ZY7Y9hN9BFUeyTafbmAyesF6uVJVz4bfdxE71aouYj6GjeUot4XXSaVT",
  "key35": "3HhR8MJcffuj2Pxe5LkxfrUpDF7fPLTcxx4JseqnPMNGa2o3afdqucS3Wyd7kCsaTrNEmL1EmYTBi3apLHsDqtKf",
  "key36": "3hqSzkD8wer98Y4wWeZpheEP27hp3F2ZY8hKK5CnpyiKVHEKqZiDcyN5x1rNHtTySKnGpSBta7yJy9NnnTqQgrNr",
  "key37": "3W4UFaPt71hupiqbizgFz4a5L9EEDZSkb8nNcanubZW8PBuGcCTDCh1ta2xokfTjcHAixQvQFFzbhxkLbPneuezf",
  "key38": "2XJWvoXhFRkTXMgrZfw4EV7oRbKWwwrPAFd9wL4UUGYmChxJ3Jg9d1UMwVwtZtG9zv8rpRmW5GVEY4FYx2K5EMZf",
  "key39": "Vx3R4uXJqXWCXmo1WbafDPAcSzQoGMFV8uFE949CXFntZqifkdSgtNubhb8wwc519HBVwGzS8JWesp8ShZQz7mv",
  "key40": "5REhuSBykLr1QAy7mDG82N51y3cxBjpxaC83smiFLAWmHvo3uf8UGwVRMPRoUyeqgyboZ6gBmoRtzzYAxBsM7aXt",
  "key41": "4HLDqkWMtuRmndtsMjwyj8qGaqdgyRh8eU2KZPLpijebaAGXfQQCQ5nf28tHSVzKkMXWx9AwEaJmUqxh8EWwJSKM",
  "key42": "5bWLBBiKNFEWRyquEc51j9X3pghKfGoQdJKcGvQWmpUSg4o6X2tHaMrNKdv9tNJTDKpyMGFbQQGqCpfiKgzhsdmC",
  "key43": "5Yeb9g3HiqPWpXoaEEeVLaj5L8Jbevp3Q4QCB9NEGGXWRRRHijCF28USmgbdTiAugBMdwrkhsKzu3UqJhaMT1YVp",
  "key44": "jD14iEDLnu1TavkNt4XR1mwzRwPcRR94nHFGJX7BSMuyHndZLQzMiigKWfdM5fiUi8NhzQygUcA9uPFaa1NGAPp",
  "key45": "iQcrtiExFkvfjms7cBpm8bFabF7i5uMVMugJfZ9MNwf3h4pezYLAAdfcRz77jt9vB5MEJuE6T1sjAoMo7YEUR8e"
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
