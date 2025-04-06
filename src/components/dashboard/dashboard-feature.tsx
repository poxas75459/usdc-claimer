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
    "kRprJGntMMWfizfVhohPHiiJTmQCMFYXoaH2RvtkRxEECS9d2a3c6MxW7aganR8QteKJMscJvCgztV1JrtcXtq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hrS12x3bEYSeTLjdSf9qrG8QpGXReoBmjhqp8S5F4Sf3xfDi9d6XszTrDBbrgpR8nUHa8QaKJZM5GCE4hVkfwRk",
  "key1": "3QAJhK3AY1MpqH3Hd7zW5EK9oH5xnmkiwbiaeNudeATP8uTAPAsXSa5hrAYhfuDUbVQmFbgE8yTGy7yXQgJTcmDY",
  "key2": "2gBvTWuEqkw3N7e4JC7fdoX2Yv4q8DhR8LSCtCiepbH5PiN3b2cuf5AqNB2KxKm8GqJAFPbYVnaLGnHik7v5BEqN",
  "key3": "3M7MrYZuLnpGRtUTamHoMkyCFg5EeEHmnTbDu5BJre2iRZF1k5F75KUDTBDpPpD2mXLKSNta8tqwPwqauDJmezCB",
  "key4": "31x4CvisgGwUW1DKJh1VHLWcYTyzrYasFx7uB8bBoGeb1HDpy6oXdip6RDTjXzXd7ZefVgeQsD7QXHzXR2Qf9RFP",
  "key5": "QPWNpGv3iJLfSNQjzaXWearYgcjxJCfvwjo2CTePq3oJh8JcXpkYKDoUiReusbXwtR6RvGbQC2dXrqPcKB4CMKQ",
  "key6": "G9DaCiyVmCTbKLhuWwUPCFCAtEkvPURR6rPCaozuz6rsqnhxuqn59uhVFGHm26HyzmJnXrisoLcHY5i59d3ScNg",
  "key7": "58tKdL37MSwWbWkBSzh8TZoVmLi28DhsWDDZchzkZNmgfdUL3pju7W4eAEJMi3hamZQewpgjUBjbiA6ogi9EyXp2",
  "key8": "2DvAiEQqTwHbFYnNi6SkVqD8LVbt7nrZKoo1uyLp7ooprEGdTZ3DfhQCZ8sNqKS28Yc9rpVFvXAN8QqqXYRn8sNK",
  "key9": "PPw28WTtDnHhzDUpvqGRsueUwLneYNxGNE83eSCTrqpkyGxqEJdkaGNSUPBi3b8ESwKLoRHKPpgoL8V58hkCBTp",
  "key10": "4KVmHTgnHJxSPp1KqSNbJCjBLiEL8zR6XsHJeMFfZNn6qpx2axXmmHK2Afy5kzSaYYUh8ev2t1HkLg16PkCiKi4S",
  "key11": "67d6ZjbBYyN2sJ6A36NdUU8xdnsg4hZnDVcuSWeiA3gJKnG6dncvrcSAsFu965o6w5FcLeJfff9bwTxkP39qbMJF",
  "key12": "3XCj4osQvpraoKxCksptLz1QWZkJ2TqS9QrdvACjaXvPADiMVSoASDpsBuoySkuGFwXkX9TYi3qnxD9JiNBUCpNh",
  "key13": "3w1u29FetE8xBJR7CoWE87CDjaLzk9kvoFhTaeb1ZEyKUU7a7Qd5PibbSDBagXJFYqosphKwNfQhpjQn6rWXuj7f",
  "key14": "2vvuSZ3XNGWQgdioazLEpwmK6DgNNfwMKzfBKFHvJi8CCgTiFMsM3iFPV7i4H6kN48oWiSTZpmUJG2pkJ4h1JVkr",
  "key15": "2FTPcM3HmXD6cjqASvHqBSU7Ro1P4VycQJLV6sphsW6MToSUEen7qo4v7r15AhP411uiqS7oMtQ8qTosxFi86MAd",
  "key16": "4KhHX4c7jTVPRJde2iQs77ELhEung7t1fMy1w3Mnm4qioReG6wVSeJJRMLceoTFqPQ4AaLNrKQ4k4GmWkkxGqETC",
  "key17": "3Q9W5yHNnTaq216u99hs93dwSjR2JUX3wo82UEbKcyfbytDE8RCHaDCw4YTDdbShmtbuWAfBHFmySuGi1LQ3wxfJ",
  "key18": "2EB6oc3d8CzF5fc7yVWk8Scf8ATjCYTQRyDLJiKi6ByfdogKybUNQcF5uheS2pdRhPUakEj5sjZtWLdHBmdStemg",
  "key19": "2zcJg4dKaWRf2HKsovSobBo8Di73G6M11E8L6J5JrLSZ1N5MRaAKft6Fjj79TqtA7mPHJnqpciwX2oScdGuRoK91",
  "key20": "3cZs4tMRWGqucXWeZKdpLCcbGxgBnT3eTpGmdUtwbDFwTotsfg1kPJQubXMKUsYn1E3zDLsUhraSyzihnhzcp5LC",
  "key21": "2a8GffDhuF1jFa8gKhHQVkcykNRQS8ksSW82xVcn4sadnwVUu184koaYD25rKxuWKaDDWb5shWYCLqD3vro8tz1P",
  "key22": "LuENBo4qZUprCZtzropxdtyRaBY3wNyAywBuMo2knvnV5jvuRPVyayR8iXj22WSZtzxrQyNGTE2RcRMEZ4tpZAB",
  "key23": "36RZbLKqwLSVhoWD8i3PYcfqa6LSLVTuokNQngJvsrGny1A9yhkkemn38sEPBWYuxiMZUxXa8mj5ekfuaq4TAQwb",
  "key24": "3SXsWgbpN26B1YicrfUqUA5SGd2JUjuiCoWEAMWvKEE32NZ1ocJy7X1qHKjbchWQbqECBD3mwiwFYLtGeTJpXGGc",
  "key25": "3QTxESv7u5teM9KM6sYSKrwWmJRFg1PkEFXvAoReiYV4ruQpTtNN8j14pC8ZFq78zwRb3rpNSJtus63NwSEgGtkV",
  "key26": "4RRZbbmcr1oqr11ZjB31rw3cgKzSeJCbgPqwwPDvWW5RBDQFmKCuguNrkg4Rjtrcq7886WqXPyPEMCNvu65KFCR5",
  "key27": "63hatA7QZxvZLUB7MMY4ntqQFmNpaNPNgzGrrfo9JXa7is8FvxoriuewG3z8AU5yWP2JHZ67bTbxjhX7L7761HAm",
  "key28": "22VemikH2n1C93wJadTrarPC6zay49u9JN9g6bx2raL3cxM2KcshKnEXpiSyyTCFeSHGcDk9wAhf41Pqu1mavWPM",
  "key29": "4xceuwnruSaf2E5vBAg8afBizMTAJFmNjpVvoLerCS6cy2WSZDM4FstWZ7XZ9A1twphKJxcPvk8dVAmUoYM7q8Bu",
  "key30": "3Y4rohRnyREUvjj4dw3qZ2mM5WytGie4xtMBTZkyywzCuZe3gzaPsjm2iWXswezorPju3NEQbFrTkg31ikugftqN",
  "key31": "5AM5iwcy3GPw7tseJDrbyFdmPFXZfDvM163AmorfFUtXWPRoKUgd6z8qoY9LffwtixWmdakqgdYNfvqTFgk26h54",
  "key32": "5UbH7nDjakboTos5gVjMNr2HWEf4XfSp1k5LgRZrFsWMSKSPzk7me1RSVKedHKdEbL2HFVB8YKqLvyyKVhUTDsnr",
  "key33": "5qxVT5LjLTh3h2Mkx2Ay7MUEwdNWPgvBRDxLQqPrVRmJ477RsNzV2qnroPdZcBpuy15UuUV5a9NMC6jgrnCeTTCk",
  "key34": "5xDwApF95H9p1YoxygjC9rsVnbwmEySU4Y7rpvR4U4jyvceQNjd2NRTAZesWYk4qsyhtPp41zHtxhcbp9TJsPW4G",
  "key35": "23vTeERXERUW6juSae4iiMTdT9g6Wjw8Xgx9TFVoVjBrU1yGLQ6qJXFvDheVaM2yCoxXHnmQEXorK8Y3C6LKBvNQ",
  "key36": "5L5iF4Y8nJw3Pg4Tv9BzjPdeyA4jz2sQpFmW45Vc4qimgJyCwnFj9VMNQhoSXCjbg9Gk2QXPQSeCBo8Kp6WRWEhi",
  "key37": "2pmPTGg5wmp9MgsCKnonQL4hZYbMudG4pYRiLWTaMAPXvHfGWpUFuz3WP18Z1tTLS45PUD3xQR4tAK6XGMYFNL9h",
  "key38": "4ADhhSzpiPtjCk18k2YBCchHwkifF3Xno7nxFhk7hGmVQ6PAJPSWxr2qWXjHGawEebD7Zh5kQB4mjiWKicPnVDRa",
  "key39": "jx1Ls88tyULNBEWrSW1maXQikd8Epg6r22LpvsPujNxPXyBu5HdMsiiBdgrT3RzFpZf52q6jyVwQ1XzEisQMWDB"
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
