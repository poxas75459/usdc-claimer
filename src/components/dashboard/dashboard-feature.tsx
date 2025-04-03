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
    "aCy9qzR8aFns3HoXBpyoTZLUdtWpXmg12SKZPvVi25ekwDy3kPszNuLrCpy8nAuXPVut5LDAbk6Erser3ocPSUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nngNQM6c7YCJj6GYAAdXzN2mLqCnKJ3uF6D1ojp5QFXEknZLHRWmNKyX6vVoXqKbzEbnaBfCH8MPsLqeCSnFCb6",
  "key1": "5ZBdFi5Gu5Xbz8pVStJ8Ammxz4ypCs8vU2qMZpq7eTvMVJubYWWZdtBQCSapqx1eUk2UZxBhzprer4XTzZfnhMKm",
  "key2": "5SXK1jnCavFcKRqmArYFp36rabKC5inUo9qD7kdnHhnS6mdinA4erRPmKxu6EtpbDQxAUB5icvsgeMPWKFDFHY8r",
  "key3": "4dfXTZrJhT7RPTgwbbjgz5QeTD494EcNHqGDYr6UJQU3rrjd937jni2iad6gDgPwgbf3nADhF4Atap1aBHjwRzeH",
  "key4": "3dNrTGdLqUV4UPyWKzb6EhTXrMcqFn7cKn5pHoGgupSDehVPkpxjpALhoFcbzXECTJ8mVyeE2AqBYLGvdJmKH5WL",
  "key5": "1EEr3tW37YCoBjkeCeYYT8mKLKHH9CfaheFLrPhQz49PqGsGjXRUpV3DmkLdEeyjuStUrX12q2afZRZGLgjko6C",
  "key6": "3ojSoR8dtS9bjABwurNswps7zqNpa8YW8b3nu1JZH8GCPW2ESrMM93FoHwXYQ5TK78kpYCPXSNqKJd4L225HjwsB",
  "key7": "3nBZx3u6WGLJSEc8rcZinXHA1BtoqeQKUgFY7DTyLhuxPZ4c1uwPe5a2A6mrzQ7WhDD37WGvdB5rAqBGhoyTdAC9",
  "key8": "2cAR6WgJ659zB98L8Tfi2Qh9oLoXgjfQDJfGnRJ74v7if6sTtAHqK1tSyWpEx4tVEyqFawXKJCzfD1aTeE1YXXWQ",
  "key9": "3ZCDFZzrV9pVs4iTJvyN98WJaEoHBR3oWrVMkJUtfsnQi82TC2418CY2rEYHYE1taDdifMQLZrLWCU4sh5brWCeQ",
  "key10": "3eoMxcuNDkk1YNXETdZ2VG6xb4xuhzanihorboJjWSofcFg2jbAGJbp2hsiMNtWTyuCAFtQNa1iUNaiVqkmqY9K9",
  "key11": "2PMTW3VckTvSNQerNucj3daswD2PAYLEBELBTwHVhBaK1ch9wBr13DGTp4MiHB2LZwLhKsGDAmMiWZuAGW1PQLZ2",
  "key12": "22ZjpSggNoQ8YBpgxVp81cpERTp2Rv44TmwtNYn4GDvexN3A7v3zbzZ2PVya1FYfKardFDtppSw3vrCsM5xsdvdL",
  "key13": "39n4NUKpHZC3BYVnwSF2beCKtmvFKG98Ra4uhzoHBaRKA3dK4sXXmsThnymeoWe2zsVATpz3stZyFQss4BzmbXX8",
  "key14": "9GwF3xf4GAF1VG2asWx7wz5Psizf2JEDq28otwYat1gDwqna1kDJ32MUaMKHk8RgrWQuUj4oswWNd97f7HeqNDd",
  "key15": "4rf8bpN5RY5qxTUKXqyj3hhV1TwyUmYNnrLspswLpmUHS2jv2BnuaUeZeGEKxjFnNurUHQyuRRWSabVYWVMFwcWh",
  "key16": "3VkofQ2fBVKaxgBDetovDfsnoqd3fL5hoaR5b1NrLvTLreBaj7vo1vhjvBZtH5WKTvt6gy9SFnKbM1U4KzXRcTW3",
  "key17": "3Xbw1rcHMKnTnMt2SPs6MhxAXVuL9AWMLtztKxwVMyrxJxTLjdYpn1XGVBfrAcFDLTvWzHd9MtfcubhRUQ1Q7B9P",
  "key18": "5BwK9De1fbbGgeCvSJkH9eS87mN7iST6uxcZ7JzyLMh7tzASK3wNDcTcY4u9kkt7LGmxyx8H5aMeSfH9j2LPLCAA",
  "key19": "Qd361r9NRdWPgY3qAJVXVjYVCceHFT5CCcDzxXkz7aUzJDFSuTFqvRKZmVqm4X7sscbTTLxJFFmuBCZiTDj2kbC",
  "key20": "319Kd59X7R7X2P8PXdZ5B7SWsRdiQmhcdoZGJcuBCxu5io6egHkvn9BKdZ76dYM9KnPf7hiH3ZWr9cWK4CUDZF3E",
  "key21": "3yvuNhXhWcdxKb7dCqEC4SS6nqCvamPLY9XBtwyHejvJxXwhxKpMNKMTWn1NsFBWVwBt8WEtPFjmzjBXAeFtDQTg",
  "key22": "4Z2yp4uPYtpRShpcmwThs15HDB9vAn8NzoNwgUXuzTiHL1Jgr6H8W7r5YxV8Kw15FzenZ6QuufHWaT6SqkYYzX9c",
  "key23": "5heH7QYTkD8LMj1heNe39ZFJuxnqKu4wQ299mnHJBxwpzaBLFvBWum3g6CGsVQ6vMR2iPkaoueuJHcvB2EtwhmEQ",
  "key24": "2vfM9Gd8NHyyvqvp7EgrUqgpjt78SRQCxevCTy2ow32cY7zsUZETk22mNYcPff4ka1vsu5zt4HuKEH8Gg52UkBUo",
  "key25": "5jzi9X8xSVMtX7F2Fz2gdTogGBfqkU3AFesQ778MVwJzrhfMZrDnRhKdWowzfBot8mtSdcbZ2YpoAT4in9ueVDvE",
  "key26": "4qEe7DAcpzaGFGZ1Q68ZmMZ3tyTc6iqzxNahuySWPQUUbjGeh921EowPQZ8BAPnkAzMz69M35pU6vnJVTp1tE4rS",
  "key27": "HczhRrdWtui5Ca4UM5M7qQ1GRcQxLWZLJdJcZGse2sh4ud5URHDT6FtG6zBjPkvrukubCef5xwz8JEMiVyjNFLJ",
  "key28": "3PZYbyvmgQeswFFtKGDoE1PpGcqLAp3eQJUAxQiT3RxgQoAbxHtLLmYGJyfx71EcsS1FhUqQ68EgBEd2Rc2RgyqS",
  "key29": "51JjGp5QkiTWrhGAkoqdZQfE1xTQ7QiRjiHVxfwuhAXzHHhijX4LMTy8s6mKgqtY5dVkFPnDzcMJhfvNxWqBgkDs",
  "key30": "4cKZzQpRX13kMHhoyrJ5bct3ekb8qvhAwwiitfSDAABPEL8tn3acmoMH18TPmWouJNQXUVHv7xgXRhu3ktb3QLb6",
  "key31": "53g5L69hXpDA5kN4Vq2syJC1bvCWPSH5Tm8D2Y1PdpWq6WDnB3ZDnAsge2QDo3q4mMu4FkCfMd7gwsgT5W8bWL9h",
  "key32": "5uLS12a7nkwZV8q1aqqGdN1He54iRf3zbB6cyRvvFKf7ta5DzFYPpzjVK1EQzEWJY1vsECyXqanBik3vSu5Asb1Z",
  "key33": "2kQpQL76cHznVgW488Rw5TZTgd2nbqwvXd7LPhp1BvKUor7Lc3GKPHKtP6DRx9dss4WXsrXkgCXfWakPpYz6zWwe",
  "key34": "4CTh9ZgXiG3JponsCAB1fse1oj3rorxeK8HovrRTG9K2NkecMqyWSkkUvqTgW7x4at8CnQjZj3bTmK4MgZeVTzdv",
  "key35": "2BDZwEVMoaJPZ273BuHrAFCZGzjGPsD6yypffM4K3WM93Knv3vrEvubZh3uaPRAKD4bc3kCsgSRqBnEDxcDtwC7e"
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
