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
    "38wknMMayUbsjM5oFFuaLgGPBty8ZutXAq93yaoVeQbc34YA3zg3FBdYaMVqtyUmWhfvkU6zw8s8848eMXHcvV1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMj7Z1fq7mVhYt3bGQJUe7GXvb5H46m8Z5Z3ju97hWtfvfbK1NUqbB3E7waB7xJNXUrauZDyp1PvkyBcQyLeTjB",
  "key1": "2E6N2GJaDrHsZo1stz8Mm2qiqSs9QpfKZ71MNzm2qXyjBecrsTFUUATauohsmZ1uTYvAnCo3mfjH6R8D75HgeHkL",
  "key2": "62pf9cyn5a3SDSF5QYSdqDhRVGtJWUpLBUEd5x6WyDPvrtZ7rCpdJTipsTfRCB38Zyf7eZoJKoWhx7LbXUDUrkDM",
  "key3": "5nrHGXiBcNfWjYGn8J4cSamX4P8wMf7gYg76XY8qCfebjkPWmGuTAnqETy6VnUba6KZa9jjyYvSAziTApf2e5H32",
  "key4": "2YdKnEKRap3NZgaMQxqcxFp1XaXY7x5Srb69JamcVMBdiZRQBZfFQyDneBqTouo9AXdYjiAahTb3PxmTXbrTWgnz",
  "key5": "5ex7C2YxNWjYYoEcTR7rpCGappG94Zci5a9MWNA3tNnH893sEi5ukHyCdsJHct9bv8ieHxgKQVJbJLiRLSbAAVb1",
  "key6": "3e382GY6yWCtzYpboZZ1jeHQFntKb1dVFqPXhENHywdX8x9PjK9PZUbyxqzXW4PNZWRDaenSp2gDFd7uE7tBJ2ZW",
  "key7": "4oBBPyNPs2f9oMF7fetxj8PC8HNhJPcpshRZLV3eap45MEhiAdsDnVNrJb4LZNfnqziCZRCVbH4r2sfKHUn129YM",
  "key8": "3xjD7gfg2vYmzr6D6UDMfqHVf2NC97P7i23MrKvtF6QXB63ydXBLLUTCQYUwbfWjJmBJdCBqijP6UBS4NirFo3Fj",
  "key9": "3qpaTr4tohGePk76VCHoFaVVamkYrQ23HZ8wzrDC7RdANLSvr7w16UnmmBWnTfki5GJGbeVv2vzDj2hMhvZQxzuM",
  "key10": "25fir6RFVHQttoJHjd4ZZcMGnz711fCUfZw52ijeC6GF1of8JDMEGwiCrgA6DcNwPw2VQicT5JbM5h6tvo18CfTS",
  "key11": "56S1oYcDZFgrLfVNWatyKWYJhKEMLeVEEXTfuD8hTAQTf7gZ9cshxfh2VmxFHEkFy2Lj8QQqAktqNsM6i5hNcWE5",
  "key12": "5wyrfn2Mw1SzP2RP7sBGQmGXC5PcoWguG4Rb7JZZe1r9Sqqki6BnpLv4wmCP9S2CGfMgNtiKhTeNNAPxrcfxZaVB",
  "key13": "5SbHi3XQRQfSZj4zBe1iVVvkfFS3N2ykUhLHd7VzzEwi1yd5AkuA4MJKRmnLNhDohXAYojst7wK77iLoiwqF3aMR",
  "key14": "qcJErpMQnS6XfhcyiJPwLC6uE6cZ3pbPY6LGPiepLcAp3UUnupS1oeVNyC3ZzyGD64hJXVmRzCe1xPZXW83CDbT",
  "key15": "4xky4PnATV7GBDxMeY6ySY8j3dhrrjpqnmZqwRqBzUP9c7TRai8x5jss7ZZYGutRQxz7X4aJfcLybfWGKPnTJZ2b",
  "key16": "4mj88czQy3gXUx6M6A7JunoCpu1igFhi6G4yYzdKPRRvmx6xQPMSyCSWTrEevc2jQAqm55qUivuypzeY54cgf7AR",
  "key17": "4vCnDj6zyRySgG9o9wounS9erGrMGmcbi2na4Qjo8airEickmBKTavhxeRfhPoJnfQYPboKGPKoJGttc4MjaHTqt",
  "key18": "kKcqw6y7Br2T3vzsGwS6GbwAEPuMsJrEhf9h9Aqhp6qc7gxhgpvMQdtLBRUmpPoj1roxDbopzsrcphXmpTM7EBK",
  "key19": "3yP3vf16thaLjumUVVxsc3rgQMgkizJZN8RowiqfLZ82TaXXiscz3j44kZQ7UCwXmLMKs148Wpdw5njqK8FWFp48",
  "key20": "26mykkF9AsZemnN2QohbV4XAk3uNyZdFbhtMwNTyBtB24QzSD6MjpKdDFy6XbBefC5mJnwL2aQLphMEFWGYu99C6",
  "key21": "3JxVHuAt6fYKXfvVrNRxGcWSNLNdsiA6gWip3tFu2gHY6iZj3RtRaSXgfffXXVUazMx4v1b5qdcYqcq3ioA7UrRo",
  "key22": "Lx9dCQajTC4X8tAY4ivy16q9AAoUKuNv9ysJAeKP72qbGUnr9USF6NdSmY2dCA3K5qNNFxGubgnRpLUg9QUPVWu",
  "key23": "BYSg2rQmPN2NZRFxc4kAGpGiwGM286dt9eamGKRPGJ9s8mV4UCE1muhusyUf9qWzDPV77moN2cUnfyka688GX1z",
  "key24": "23s6bzYuJ1Vz5Pmumx4mRrjh1KG9ngQN7eSch72P6q5RvrhApswzTLxAsBwkr1hvjDgCEpzfQDEDGsPWcr5VC9dk",
  "key25": "bZBc49FhhapKAnx5YXBMLWbUuuWCPa8o4pkH14pZT1jrzNTZBPFVti5qdBagTL8qZ5vkrAZ7iADYD837ZjjgH7u",
  "key26": "22XTCwatcM779Fm3UHaVip4zvoEgALRkg7Kn9auWZ6vMNBNTQX2mcjiLJ3JMH5UuLtCRZqkQzoFLhRoREW7Z18xL",
  "key27": "2HEDGv1MrckESuRYEmKpvvGpP58XQ6JcnKXwiAshkrs1fyo9JoMWJJXqxNAsq3bmbcoWG35TvsgLEJ3gN9XDMnap",
  "key28": "2YyAZ5goLuDvW4RgUcHiRx7Xb1RQ7yCuaGA6EpVCuBqbbn2nrr9UEXoCzPFUVsa7sAwdmEkb8bo5eRjC5mPMCKZb",
  "key29": "4cpFi3pTFxbN7chwMu3idU9x36FJnkHq23Lh6KP79Z14Ljgfwcy5Ziftw6GTHk3einB4aa3eqQbEw7Yidyrg8Xz4",
  "key30": "5qHXHc3h5CktiSWRvdTzwfiWYActAcUdRkSfmkEmyvKi8NGR8sJHQ1JfsMm1MMpfZQUfrkF8wEwKLYA15R132ZEZ",
  "key31": "is3RRgZCKuMKGJZsxCKxXGREo6itUkLRw8VgYoyCG8aZtdKZrvcBCxCvSQpDc81Z1u5Y56Evzmt4Xn5h1nzZQ1G",
  "key32": "5CPDypvY2v7ZUzyft8xkKAjZDzbqp5dGPxoYUqKDiUVFtMx3Bn4rjdEsiswpbiRT9CRxcKJaj1kmaR8vLWnzPcwC",
  "key33": "523EBp7PHJ6ro3kTkALacVwtiebWViYMjG9cJ9VC771LWnebQzj2U9xeocZPDFN7bhZpVJ4ZumF3yjDMcxeatqjr",
  "key34": "5SPPXJVQgD1XB1BvteJUjFFfRE1MD5jSzV6BRF8Duzwxxrwjz1gH7AnoxeMD2RFJRC9PPUud5LWUDBQcoRtaZ9cF",
  "key35": "4ZFQFZg3QVppVLxAWRpmqvGakgwTuiwjBGzKGKoEKK4FMEKWG6oH3UVg3652BS1PCNQEvg7YFYLmJ34CfB3jeUQy",
  "key36": "4F1GqUbNuG7cE5Va4D1jfR45XWmPTBDSdokW3aSxMqD9SvFtjhgb1c13kDxUVuCMuBW1AmUF7UueyxFBEJa46N2N",
  "key37": "4TfgZby5UQyhaGyGMGfeKJsNag75fQtqzbWwmc6PxEqrBwogYxSbNbLosVYx1AEp56kVYxk6e7BKjuZEQ5NFpK2s",
  "key38": "28hgGqFrMJ8wZqJ86tqxhzfzVGoSSMJq2EDM5Zqe7d5ervmbVrFdwUJ6P6HqsnMiLdeEjHEhHVtKbrxZB5eMKG42",
  "key39": "2J5NTFgk8wH9iBvCwbbXS9R7nZ1j6r2JdHLbjzD19mxxaKVzrAJ9PMLwDxFtzxjSeZaxLDUHkWxUME6JSXbDhpvX",
  "key40": "1Q7nDYKrtojwwSk9nhe3uZ5mRaDYH445D7mu4bjeZiwVwVic7sBUvyqFPwvkFVrYHfu7xtB4GCZsi39gTBz8umA",
  "key41": "5jYfk12AUK9rRNdcrVW9wWbUPFKAQs2SY74w9EgcMT6Gx8Dg3hbZZW2zy5GCFYKJm8FT1bLvr7cJDcASfNzasagp"
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
