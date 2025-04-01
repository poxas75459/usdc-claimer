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
    "Ez5qtPit2uubKf1189pQsmhaDoJMXtoFFbkW5hfcDqMqg5AnDQ5fsy9KN8g5JnwoJ2jh2J7rDSYvKeEATCi1a24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "89srDDiVapGLw5bxzhDR2Nag3KMhA2skfZkP5FeLDzmLU53LuYwAtwR4wz84oWZYpPafe4nZPazatk3pctdNXQP",
  "key1": "5ZBaAGAS5uTsv2HzBwxKCrFB8PEANx2PToNQRLDmNSZaceLpKoKBPAkXUmtfErDZTUdKGXGSz71dqcwp66sd4PCM",
  "key2": "5EKPrsVEnCf4P11jfTrEmr9zkJY9rh7knAQhnRmk4JMiKRin3P8htRqATiWFZTebaYrkqMEQyEhkWQwiwZ4LVor2",
  "key3": "4aYxxJRsYMzQGQzdwqTbtG7kWC9wKNUJJqqeoU6ge6H3iFC5pC9GqgjiULkU4JoXccrJGj8853xU38VuCj5iB5JW",
  "key4": "5Hxy2C4o3fiAAKUMY2jWFtWiXBJqT5qEYznocCxB7SyBxSWeXc9P5jvHkkV1DUCQ5rsU5cwh2XEBs28xzJFipFKX",
  "key5": "3xwt8SnxUxcKmPDJCZKMBFLk6R7yqR7dvKBnroWTMJr8G7jqSinxDYSr6BN4oXcx6CkPnZKMEMf99ChyvgoUnUGk",
  "key6": "2bUjicufk9RrFNQCskbShSh985h2dvVBvzSEXhwfEKK4iCHp4aKUzHKaWemXWhz4jSD4Y1xFuDcix55JyHbkkRfQ",
  "key7": "4Fvc5TQPqgGY9zTBDE2sxNWvAvr7RWsD4BTEZTRXpWAfywcsRvveN4yvSVZMaVB7LwBp7eaL71avgC7j6hByummV",
  "key8": "4Qt7BYAixa8hfhybBBEGqJd7t5xkoC5mrixvQSwnxfQ4Xn83agAukkAQkxh64tsSeV4wrRmyFezu43ebWPPW4o44",
  "key9": "5nymYGURC9AuEazj2kWGMcHnSsGg1HN2uCQiZpaVWxvwyQSFY1ermdfGcdaKKH7VYukVUhVm4JRRekgjRVuGTQu2",
  "key10": "APbRRyKzV3UrfpiUb7YM3U8cTTveZ56hLFWyFdaBEvRBTbq8XXVWiBX3UVfxZMYSPqnbBMk2Q5GWheGAcK78vWD",
  "key11": "4i6jytRqW19asDcfV1adyKYsBc7EEdKVkUBTwxT8b1ibn1EutUhWmXDjY2bQubBWNbnAcBJ8y58GXsLr3FsvdbWp",
  "key12": "2WQ7oEAHviQNfhTj6SPE8SQBRkedWLbFArUg8fmjSAnVDUJuYGF92YfeHFG7MVqX59gxnTGcsVRqfwJUFH64UXLo",
  "key13": "3F95DJNEJK5CRu5UTgSY7Aekv2eBnsfyroL88Bm9og6A3f6ELS8s5GAwTLMe2GbyrwPKHuWCn4Z4dr52vLaJKX6o",
  "key14": "5j4AMN3HEVUeGnyJSDcYGcKwxD31xEbVPGyHHwAhJnMn849fGudCcjtuG7HnDrppoDTd6iEqc7dt6kmDs6B3oD8J",
  "key15": "2Nncs2f2v8jCDvrV3ZJhGyZVJGVK2dir5g6YXJfa2YHUD3jbUrSVVQdczHkHi542VjpFigT8KecmGj7EL9vzKwXs",
  "key16": "4aTjMHsSwRYXYwm2cqrz4oPTyFTQ4aXAY16F8fQGYqJc5e41Ma6ydbXgCNWT9FEA6wtLANxskNxQNGbCWEAdmuuh",
  "key17": "45kRzAaQo48dY83CVYdZKpKHiUA5MoBqjEp6ownsxHLiBTfvbJKfw5teva1KGrKwkCM1uYEF1kiSpJU2rYnwB63C",
  "key18": "tGRCyehBkSdBpasZdjWPpm7G6XFV2utcpPaatUsH7oHinbvaTUeiNMmKAcsYigTZW2Zpi45GYnkvummsgZNU3VA",
  "key19": "3czrQS2viHbhorwgNctcfwyeZoi61dipj5GUQtsuUr3fbgM9gb6B9oVCzcmN3bDFWjuNdihdtZZP9QYfUpiyfgnQ",
  "key20": "3Wa3GfUXjuobq6yiFBJZjzcDFqjsep6KsDiMdsmd3xHxMLhVQckGK7QWtJh8nVdqByvDUTGcQbPRzeQKzjLtLqfq",
  "key21": "4AosPWevJF8VAchAmidvpzMVWWkFy6mPRdMge2tfcjEJHPmdku53PyYoYqwmcRyV6fS9HCB8tEbqyq4mhu61TsMe",
  "key22": "3PEvBx15pkJJ2LQc4PCgfJT1UGNnWcL1NfcEiLeJ4RLMQfSFgCWnsX6VikB3iaYGnuxARpQvAm763ixTJr6JBYTH",
  "key23": "3nJGxw69tckSPsouAVtjS2m818gT3xNbv16k2eJCwFw14zUuGrZXmeVYqYZCErK6pPNgfacwCLy2R6SxVMCSXa4h",
  "key24": "4DAdLN5KsZFAni6dPRtLJHcRLweJ4Ci7PQdZyhVAwkc2JZSMLkwDq77ZgYDgLcGdK2uei1W8qxgxm9sVyr4Cfx7W",
  "key25": "3LiDZc6fXNz7joDfZoeoLE7pvcjdRwrGETpnudKXNPpAfvw8JVSHcoetdDvqfPrRGLfPdsnD9QjSEKufWEB4cy6r",
  "key26": "5rfRmBvg8pyBvHNxkkwvn187R9ziLR8mhpvfacvJXxvoLJsuxU7A7NCs8t3HmpUft2nfVQQp9Yox4hWr3fJ2MdGw",
  "key27": "oxGHcPFE16f3ZGfCVNpYjDE4kSa5UZtG2Tx2ZvhBVVpLn715ghJ5M7BtCep98oSgDv8xHF2ujsVyDBq2RUc6tes",
  "key28": "4RsFrsoz1pAeYNLm7MC4NGjCNa9fdVJfZ2dLUqpZuZKHg5jZFbdRC5FJUudyKqKZKPiP8dn2Xnu5dtTvMU533aw3",
  "key29": "5gKUWtNGn967Z4teVRRNDvW8CNjCaH9rdAbRqSS2aiPLKbo1TxZ4tmuECvTsWVTLHerP2q6a8Jz3W3GfbJbNRofB",
  "key30": "2mAwBACogVqXKEeGN4Tx64dWCbSv29mFAmfhK5DHYrT1QAxCt16LbKvrYqN4z8zoiG53R9wfpFaLxLY1R27AaNHT",
  "key31": "3zPJv6bVxWJnxNSVFVCsCNMb2WPoGKRAqwVT4b8Y5U7nZWN2ScKCBYsSYhhRq35emdByCFy1JB3hvRSyVuGxBiYe",
  "key32": "3BeGohS3b4C26XEBciyaRA1qfvzQwxb3AY4nrpYos4VfmgsasXB5hxp3Zecw5qhxPXHgSeajP5fMUYQTH6n2vMNs",
  "key33": "4kBKst96VmWspbC23FCFU6aRHeY8HcpK1cHR4wG7Au1jaCD7x8EtRwknbEuj13u5jGGCU5TfQxggzXn51LgQbw4h",
  "key34": "5MgHHzaZLnMuXaeVsvBwdURGNuoQ2yCSxRbFfsFD5idRssJUDioq35M6vbvAJRFYht2RJitpL5jFHGAKb9Y28G32",
  "key35": "3vG6kSEptqpbuipSbQz5CfFBYj4pt7iU5sY3DHxmqVshpR4B6NHGTS5SvZr4FJfcGdFmQp6xvBtJBb8BXniTQwK5",
  "key36": "2jhERsL5UQag7F5Y4PmoQzNefsQCfqcjPAz3gEYkAzmox39bS8a9CWrRzK78VEBHGraLvKJG2HNsE2DigbRr3JWh",
  "key37": "8paBradydxCajego8q9GQ4znSjqWLyUW56PfA4nhziZp5AnFNMSwXJc23v72unUD9Z9aHftEJivbmvQ32XGt3Ln",
  "key38": "4ayw1wKo7Mmhy5hpypRPUJh7gPy79HJyqMQFx8cVULBhWkemQRxrMwJWiBeXWaPdiaTu8DjD2SYWzwcjRTLmWxwZ",
  "key39": "93Am6L8xjQP8mi5xDepqniCVMGJMvf23JqxNFStGHLPVqkEbV7buNjihE6Pe4VoywuDJ8VxUHWGF6ttStrKR52H",
  "key40": "41VjipBbcNGBetGdkDN1SU1BaRgKYistZ2xjdWPZhamRzTcMsT82YPiFQ54qPmiNceuJdYJeggYaJ5LDVZQjdx6L",
  "key41": "3G66bUKxaAohxp4nFG1GmL6ZjdBwySeueDLBnMKAfGFsbNtGh8V8s71kNfCas5mSqgH3UPBdXzT3irE6X4ZuUwJF"
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
