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
    "RRd9dxxH7EGaPFXJ6kHVwB94dT8ZBSRes5yjwH2LCpxTn429R4oEwKPVfKnZEE6wLsViuWbHd6ooUe9obA7YCZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dgaimeBo1txZna1FSBHctQQ9MZBEyGgYpeHQeBQaqzFW7nT9nGPc1rK5E3otZ91iRNHNM7JuxHBPJEdMpnVgy5o",
  "key1": "wkkih9pTHyBZGJ7zxcZPMFgRKZbiwR8ZWwnmBYGNPP7wjpvptPTA4d4eCsi2XXnmfZBpg5oYkBx7Yt6graPgcTv",
  "key2": "5EXpE6dUrVGrdwBroX9mA43pwN3PrPesnxFtpUk4Nbi75moyv5vPDsLQG6UgZT3zogVAhZJTMgEHnnu1P9V4VyUt",
  "key3": "62y5bHptUFHzequ1tFC7okiPViAgPFtkhfpc3Uh7FWJS4RKLzyzbKo9BezVneehcXRCSaURMYsM3AAYawNWjkuUo",
  "key4": "2FU7R8xF8Qr2WLGvx92H1nJ34viZoLaJvF7eei5XzjyFmPXCVzNGWNQtmqQRfYHejnc5DP74Yj4SYP8cJ6JZ3qcH",
  "key5": "2FWQuW8xsx6LsTgobV49HSZw7x3KAmnZRA1DUuy4Rc8mtwwkqz7J6iwhN8aEmLgZWG7hfiFUwReKLM3qpefjFPTa",
  "key6": "5D1vQ5P1UasjAaMfKSKJwW56yVqYhbuuNua4LRdQ4Xn2LALp9kxnSo8ELXj1amGvG2U22A7AfuTqgJmSh5ZadkZP",
  "key7": "51uXH4PazPYYfK5NmucQ8BSo4tf5wAdN7KZYagrE8JZj76uD92BLeBdmx7R1bgGufSRR77sNa8QGEjr2ea3WtAnR",
  "key8": "5JTxBLuEmgormWZkDxfDBrrvDicgnGx5dsiudJAngGBfBKCGzWZbhJ5SdUkzPBwfFXFsK3Ydu6K271beofbjWMBH",
  "key9": "4JDyE6mAyGcGvPVkz1rJRZreapXW3RmfDFieSMArFjYZJ9kUfkrExwEbdQYqhHkUoYtQwp5JMPL1B9icBA2RhPza",
  "key10": "2UECCdhXVY6ZH3rQ6DVcNsixVxisRof1c98ML57Dy2wUaaNsftQbiVXH4xY1U7FeiTMXnxHBB4JaY2KdhisLUcdb",
  "key11": "5ES5VanX3UmscD3F8taRxGyJGdpgzYiEaxrRTr9sTmwLSjJ5Arso9swAA1xHACDqLCtsemcYVdvoC7wqp3jqhJyn",
  "key12": "4X1xZEkU2ybFESkrqT7tV3eqbifpUb87jq93GJA7ZBD7zTvnfWhMbmMzU9M92CErtoJVMben16bhBdevpXbXVKui",
  "key13": "2zu16ZJGtGFDHjMLzKwVn61Th45p8b2tvPoGGN2La4Hqj17SqAMaVqbKpkEF9dQRi29TBxFXVHv4Fvsm5N7ZvhuN",
  "key14": "k8ZEwtdumF3N4ZT4RsAvCg1S4KeBQ9Bt1Svb6PyqHffCjmR1Jzeq37Jbo5KafcijT7e41YStGgevEUD71SAgmQ1",
  "key15": "28xDQYPfreGwu1pG7JzzjVtvWXeV3j2FBPq1aFgMMhtfacVK8QTe2sVLx1NBckWsxYLYnKAJ6Bp92R8VS2MeVGtx",
  "key16": "5M8vsBrEhBQjhWD57NaqLyELPhoguMB2Exkaidd8V3wkV1FjdsiHLzKUJwc1sHDUqYZGDtLYgRtTK64zzfSLia1D",
  "key17": "3WXWiaGyvTPxFT6kJj6Tm4qn65qBRkjJQHxfhZhzfVzmoHwB2f7X8SuYp3V8nEzYC6o46sNW4SENdPHmP34jFQjp",
  "key18": "5L4RRJokz7A7evuhFoD5pYv6As2YhcVuBZCtsGuw3f1ytbJNZHP9qfdGVNhjFYVYdYEeh8sfjut1hxnVMWxLqdcX",
  "key19": "2LWfaxsJ4sBw91dojciFSmYoCCcaGEVba26ZL48FxzvkujNT2U7mQjqJVsmtVYjPe9zqns53tM2maDyLvtbGUuJV",
  "key20": "25xy8d2kuAbW6hZuy9j42gF4yUfPncDvuLb4suHZKwgJqxkPARRMrUhwHspoQQ9ut67CLDWN1wN5teFWSpDr1zL4",
  "key21": "2NJvS6LRfMRj4Abq4NaLYkeBRjCptB47UoLKPbJCH2KMuAVT5oWv2rngPbhuBhgPTwCyMbuUkQwnVTE4VcNEgNQz",
  "key22": "2LdrxffqtzgsnRKwaTUdyfmQnLWk2eMhS5FUSnAD6nWjd4czYYJ6yyWBZaEYssKcXmauLN6ce3hv9mtSuC3erfNR",
  "key23": "5EmUvHq5uruMJemw3Y33cRfkYtqd3b68665LVtxaVVhuTKCi7nGh5XVArm56j5Sdwu1wCZiQu3KXjKz5fpXKmDxC",
  "key24": "3GWDCLAXd7cp6W1RWwwrGqwE1D8pYE3s5cv4K4gAffvNpVWwUmS64Sn2fmhFcSVQkyitFtzFaKLZuBJyBW5NAWt9",
  "key25": "5wsnf4pvY54TBcVPJ2KHnhYz9nW7JjqrEZpKfRC9bGTMZn89C8pDbUqyMnfVJ2owrwVv44rHVZ3azUN6oyqPG3pg",
  "key26": "54bjRY6zY3mpib1TeiQSnPf4XLDe2bnjoJBeyvPbgq4fyUsbnUDMmVFgQKXkLKqxSXnMhR1zcWE2diBjFKihekWm",
  "key27": "2Td2gT5bfT5BRmeBh1g2v63GKxrTFGSaEAE5pf2Td7zRcVznG7ZSH2GZsYZ2PEzuz5VaBWLZURTdWJBfZGgkPf4W",
  "key28": "2tazXddf8WtvHnTje1An2wG7kwLYtjDfiaqbrrPjZRsK2GTeXh8GSY88PCXEChL27FVprjsoEJJcGPabibpFjxGP",
  "key29": "5HX6AqkCbB44dAYQWy2wek9TdFo5LoiVqgMMx4nwDBWvWhugwkwWN4NecVXbxzbs8qL6ZuVe8pJgiss6KyGz1kPF",
  "key30": "4c88enYUJScCe3xvjSPzD3CMbM96cND2HuKJjBDtAPAS8X1KfhnfWGKPbESLkubeEJFyLmFTeVVnWHF9msVnXVr2",
  "key31": "31kuLzEuo8cnQmoPAYZfB2pMQPXehKQs8WHvyUDdPaDFvw8XmbviJZJ6wnJ7kd43PJfhgsZXCERZTH7B9aKkcoC3",
  "key32": "3opAL8RNu8ziEmCbAPWmfEus4NUWHmQs9sCBCbizdJC3o6LLBVaUYkpsQw1P8Tzxbu5zaRtiGVaCPr5NonTxapyb",
  "key33": "eZV3UFXuyevXAYrX2999mrCsfLzNZYYCw6zH2JKepxU7eieP9PCyMYpXjLWJnvzwfN4Z6SAESTqmpBZY9RW12Eq",
  "key34": "2DEbsDw5nnffoBqbsZxkhNAnyqWjwcUYdh53AkWDPXEq6PzKARYTznMLNHSKEiR4n34CD28Vij1ifjMWf7sCnbd4",
  "key35": "qpKxYwJHSAHR15Vze2Qk8rizXAmSQ82jeGtHg5wbKYP2ZxeUhM39hw528Kww7GUd7fnABFopYs91JWtznraypT1",
  "key36": "4FG566seZMGHwxvj29gpMj5XbHkhmUnaD2nqzUSJna9o1k5jHfEnjuZFySDFMHS1Gt9rhy5WY2UTnBPitDB8fX3g",
  "key37": "34bmNbjKCykZrTEhhqkevnzUP9jPdzZFk1f9ZTr2PrKsDYo9bnDCgDpEx2qSwvCgc5ZMup8PQE4kdd4uD9v5H5kP",
  "key38": "4mD8qV2ZQHbjXdqhoa9B9mEm4JT9CNgpXAxKhDSxiXtYaDkWmirwpqAPd7KTyuqvrqFttoK9u13q1KJthVc3FKS7",
  "key39": "4sXNz9hVmVjVLrHVvxrEYujS8gSDUEbX39CXREma7t66sK35RZyoLcU7hJVV1Tb6fYQi7zi6CRfvrhZ9zbZgojDN",
  "key40": "2uPQsgve8kCkU5Nc16mo9rWxQ1qDrJ7BSafcRSAHk4p6HxHxdWPYJqAtnL3A9ccjJeCGECopm23Aop29KYyqbGHY"
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
