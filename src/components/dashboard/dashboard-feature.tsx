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
    "5oYbPCh4uFXjT94UVcZcfMEA4uXRWfUmBhzNcHnfm5Jb4Nt2cwEAJbURVkbgtJf9HFNr2TrhTGm4KD7PQwsH5VhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5WgzGofP633v67eXLsiUbNYR6NXHtJ6sqn5JP8EEQ2rCB4Z9tkRb51tjsKH6jkT4kjTwaHEocpbWwn6C3U15Um",
  "key1": "EEQXmNxPM3S8zm5x4stJ28WJfgH1YHTbPTeQtkMRkbYjAYDZEmZnBRd2mVkNH5befCRxas5aoFXejhxF6vgsJRn",
  "key2": "NXuogZgQDTKAgCyMyr6FuhL3SNfHhDt1LbRdtTLDFig29bAwGtJ66NLEsMcoFCDs5vNaGpMKemrHR7c36ekxRja",
  "key3": "5GrdUbJc8UGRwUhwTztHk4c2xzU7RKHEdsQUw4bSTaY3aBLWjA4Brg7BA2TvNz1MnrqGX3JbvzXKXEhovqbtn8J5",
  "key4": "3fyNT7PrmFWXbun1MDUUzfJyzAXQUhjdifPhnZwBPo7Lq9nVVJDDYDs9xPyJyxRfnn5od8wSPWqW7Yae9FeqGqRN",
  "key5": "2EX3bTXqx22Y6aM9cVGyZN3V6muvZbKmUFVWrC29Vua77mxmBy6qbgYFu9wW84mivmu4iCw9egDkyZtAWVvxhye5",
  "key6": "2H7mZf6co8jmP15HqyVj7p27tjakvMU5oCP7iEkh3R2YLnh8LS7aLPXTLkEv8fEUbDH6ACCEFxWiVj6qUckwGpkd",
  "key7": "3TtJQ57X2dw99ogUVzUpTJv3Nm6rnXPuFsmutCe4GXMJUe25upHfwW8ebZDMnRHzocLU7JigfYXfSi9CVuN6aMD3",
  "key8": "5b5NwWjRYa7XKoEv61mBC36P2E2QAUk9MQsDYB24vQgAFAqT9sVkbBGJhauAJsZ9QaMBBPF5b6CJYeSuWxrNSWgp",
  "key9": "5g2G2zg4wKVHwhsixTWhE2pQ3XuL8J2o7gH5PYJkWPuYwEKb5vVDu3GtWtTUhxST38nyoundodiv7CzSCWHMzLbb",
  "key10": "4Hs8YCX2Bb3gGigTk985GjJ8w4RifVQz4j1SVzgzLN7utRdY9eexCaQ189GF8kfpMDCg8qyjhvdwRnBqSR7Bermh",
  "key11": "7JoiwZ9Gw8Pf41qusKQgp2U5HVmqsezRVQg3NZG1EUdKsCcp97sQftX3aAWrhz75mNTrQBXhjL9YpuJJbyroWpE",
  "key12": "5FzgBFzXxp3v7XLLHCDhvDytEE8BedEzXdUz2tQLWmN9SftSwTo4uzgygY2DMTsFxMcdQ1FXm9cUCr6RX8akZ9WD",
  "key13": "4LosXAS1vL1ygnq3BjAHM1xVemUeTrzYmiRLBCANYFjxChbf2xDdt8KaPdkPg4wt3Xg1sa9ruZiiV98NcmkbS7go",
  "key14": "5rH5p1Rg2oDhLkPXts543S9iWgW36NRHexHcsSwG7sED2ikajD5jtMnc7yAVjpZSjaHnac4wwDXBRmuq9qpedDZa",
  "key15": "4vVhCJeUTp7WaJ8GCtg3mUNKXKVe4RFECzTMeV49yn9fjgh1vbiGGdM3SBbLy8WQ2iC3sWFxou5KP2QtUuJfxu8N",
  "key16": "5XWFmKdLdseV3Bqzn4gvhf7PeshZK6ZAeBeiZePCxhaKEyAr4HD7BUXYLJYKDkBLb4Q72warhSjCAtqMfqgYMxr8",
  "key17": "3BRMSfSoe6e9ogjUZt9J38qaDeDvMup4VaqShCjCdnJGGRYkoGXg7R2Eq2TAtckuA34hCfz6Raobt1wDXLPUtARb",
  "key18": "5K8ZF6RBPFtoZePeo4dPcNcYVx9kBTKXTkTaMG7ZnbKq8R1kEHYTsqCBYkYCh2zNY23cxdpekJkEUPKNQHhS2c8d",
  "key19": "5rZmsRRNXx9shbaExXiTb7V9PdZQRm4wa32Vn5Mcs4V7V8ZEEgod7Uq7ruPJptfnJ1VtfBYTRD8qGngzatwdqni9",
  "key20": "53rMFh91XQNDktMoHt27tY26aYvWWpXNC1Aopr4xmEoKvzoCeLTDTTsusf3rCUjrgA3ivSxSpzG6USvAoFf87i6D",
  "key21": "5rqiASveLACHVDi3c1Jc7La788Y8TnY91xerfYX3SKjQ5jnMAgunCUDcBBbUE1hZYNc9jfFGEtH3y5nXJAjnAEwn",
  "key22": "5FKYehVBcLipQsjgW2JKpPof3ut6HDEcVhz22VQfR2tP9YagNLCGQqpJmvGwnLuXA31tzGmbu3dGG1YrAvzCEXBW",
  "key23": "22YS7wKLQSW8BQAtu3YbRfWZCAKh1TR7UwJ7hRSJYHmxcVrXf4dXjs3PdYJQauyfcXtJPJMYpZgvqDJe9VS27HeY",
  "key24": "2EEosjrgLWBkZAjoSqYgkEuT96ZJYdDXkttgfCU1EhVUfdnsMqCFTfmv4MeV1zqZ273tUA1ismX9UsknANZ8vCyv",
  "key25": "3fx3GrG1WS6RrwAu4VCYP9BZmc7JJfDcXeoXVukqy1p1MmjzTNKyXAA64GdsCijAW4M8Hevt5mstrSzNvCWYAkLX",
  "key26": "3yenYHT6BoXpVtfqa3LeNhKWJe9nvJRhMuAe4wsdLbyi4cozQE1ZGDhn39rdy7j7oGx8epxdBCQQD6PqFEUC4s1",
  "key27": "3iSrmtyjMU4v5L4GtJHvwUCC6caNq6PBU57q7ydP2Vj9x23zg51hnkNtoRsTaZh8138nrE9Ubj3nZitmsK4CUpV4",
  "key28": "4Jd35Hm9QCsq4RYSNkV5TKJewAYnHk3VhX3M61Yit2ySNSM6u51zCgGVpY2LU6JBF8UFZkCfLuM2f5GXkXprPamh",
  "key29": "4HU8Cs4yCTW3mZ88EFbep9Es2sbfJKeZ5UJY2k7GBikU9DwaU3YQc9BXfvgFgGAW4XVNJX5SvktZMrYofQR48DgV",
  "key30": "2dMT4bsNkraPzmyK9D9P5HT4gyeBqYa3GNBShPy7GqqTdFBhacWfK48UvFMNidwV4KUVS7UjMJgYiaHQEArMGHp2",
  "key31": "3v8Z186KZQ95v8PGZ58mwBfarzBQ9hvLYVJnSM1D7a1vAaAnr7sefMKA4CA6zrAWU9YVH5tekdLAXxGkYGpE3eF2",
  "key32": "4PuxxR3K3NCddq53uRJePD3dACiXXxTbiA3iBQ4qoNJyzTK87GubntxUT6M5WnMx9ssS59rrXG2SH1khHThgvnxK",
  "key33": "rcPTUH76t8ZmxG62Nbp2w2ZaWy6ruqfNC2wgx7M2woUmLF8enSsRkSP85vtKFE3vX4qsRCyMW3wJT18cqxPMtKT",
  "key34": "3XBBkfQvuw5atRsq3CHDnpsAWgKrEaKcRy48KcMXYqNTpZcZHWd6WmLpNuHNcvny5YhB3F1k4TqS7e4cSt1WmzZo",
  "key35": "5tNeLQgNfqPZXSPbTeGzuyJKQgzzRd1br1QLEP3sSKg4FX7tTbEiMTMhvrpAvUPH1ub6k4sx95cECg4x6SyD8TEd",
  "key36": "aWMzFEKHfbWLuWsbQpJRaKHHVEMkhMhhzeQL8YjWntzztfYRb4jABQ7aDnWnFrWCPMaDzjXG2x7goq2zZZGZxe3",
  "key37": "2onEENrk1qRJDTLq1eXGLVzaJoswgswX6Wd7LLtcUAtyH6DNJsKNZBCbSCfoGhN25bkXoyyAmB8trG8i2Y2U2aJf",
  "key38": "35uw5t2Af6oWmUJ3PxFoF31VaQsjqTG5ftjFdbNRTGRkugx4YdeQnQG48rRJNEjcqa1LbwQMjXMWNULd3cm1kADx",
  "key39": "4Nbp1stV5ahghqekTJ19vzoU745gWk2bF12RKDR3YUtfk7rVKpbRWSdDFA5PhpVteQDX84ZsvUSHTDcjh8vvcQZK",
  "key40": "4dCGLnAsi7aknLoCLh4E1gksMsMVTjFznsm3tHJb97FYVKZq4C7BD1ZCygAAGXbr6ZjxUonEhPrY6QzMDw1x5Fdg",
  "key41": "2M9B7iouvM7EkF7hJBzHTFQeSgvi24Y2z1d6jzbagrUNtBnrXap42sQFp17P28De2ck7CHYbtMJuE8LMiWdeKGBE"
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
