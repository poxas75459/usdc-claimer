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
    "4YQmr7Nba6jMMjtMC2M85nimgdSC7oGqL8buJQ5GQS6iZE3sPn9uJQNvCVjcDhmC672MN3QZCAEL4eMdmwnzjpki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qqmuaowRUbJN5uwJwnon91kKNySigcZobqU97NB2Z8GWVStW76P5iSkwt5LeE1xoFw9MbXEN1tH43yZadSuJQR",
  "key1": "2A1Mm5vsSwKFd4C89BCzwC1MQJThVXcXJJRkVw2oUvrtjkJvTLdXs68F6njG2ZogJifKaUVGwmcUyAFrbwMxqq2f",
  "key2": "34buMars8hQr77WCq7qpYv88F2z9XigP8JDpJ2jsjahWG2NZJLSoS3FR8YYA3YtepjC66j8cQAFQKNmRGLkN2Kkv",
  "key3": "5JB9X8rJPrkmsdEnLYMtszcBwAkbQh5gSXvH44esDogzTVipuaPSTzvotheEowxG1NVej8PhcmQzvzov4t1ZWkin",
  "key4": "54EVUWLW77jYwhS67XeTBeBwEhnJmV9CWvb6rgjKvsZoy7fr8NKmo3JytVHmPxxZkeFVWiLpSoMhywzYAyV8vAjf",
  "key5": "128BELSdtAfAPYqHRw255EvY8PT4MusiFmvMwxNRobmG5k5sjyGY161jsyqi83khkFJiuE2cSXKHt4BYqFVCVJxE",
  "key6": "54W3HX4vYBaYFk7fmhvPqTcViczoHYubxNFE3NyhYEsYkHHftHiAUfZe79qwXJYxiDfCH8pv76fXhHj29EBbHJa3",
  "key7": "319JqeGTken8QXw9pGZouRaVDpGWJkYauHCim1b4RJpVyW9xbnJZq3DV4GzM9S7yjixo3ffkgukVyXWbXZ8e3cJZ",
  "key8": "5fXhsrHiowdn2EGtSfDcj2KppEzHU5dobBTgd1PYGhbLCGb5TaJxYTYd5oXwYNvzTeY1W6jg52kmNytbiJn9EVTK",
  "key9": "5wfKDopkQXRErBKEF7woRQvp6bNV73PtDP6t38eGJd39Bnrj88Ev1XVgyKuxi9Ex6wXeNaGhvwj1twwEHRotZvRw",
  "key10": "5QBudUorXW5LXMfdfbS3JmVWNfx6ZajKozK4Pq9jfWD6Xe6uEVW1qX7gXvTXoeV8HZq5DH8UzAuGMMXSpr77LXHY",
  "key11": "2gyqTqYtaz5MNZrWtmsjDdA52by8gXS5dgcaKdZTVMh73kqN9cv4HvFqgWz4t5CSKAs9RMzpDfGmC8q52kZL4DHa",
  "key12": "3QxE3h4M2LawiMpoQspYFG5YYsYKqJ2S4FwbeDnUi9cmNoFP4921nNKCU4u3U1ww594NXho1VodhjDXF6p2DMAgC",
  "key13": "u4oyB3serTepbun7fz2mL8mq2u1et8ebrpLS7G8nVK1RAJH6bkMsYmnovwaBCr6BiUvmCZSJXTkXWBcJh5iLWMB",
  "key14": "3nipYA8T3VGkA26JYfadyJRdvZ23R8ZYv93dTpzEWennEh6CGQPqq54DfZScPWEe81EVqMxrsv3zXfX66LvxFkhM",
  "key15": "26QRB8LhEGVbhFUhssZjQWqRJYj9jSwEEZ3SU5V8phTgQVm54Rsb8SUy95tCVjUKs1JFHcDiRGzy68N8R7BoaYL9",
  "key16": "3WKAb3c5EMAVWuS21uUxVfYmgKbeC4VMqpuP63QGCmScw5QjW8SgQEz4mw2Htsjtwyjz74DKztwmMncVEgzLkf6Y",
  "key17": "229AyXeRTwidbcToNbCGX2HKifrjY5KJmNbjJAmDi6ux2VEzN2RGhRWarou5549ch9pvTityosDBf66SXWHRvMkw",
  "key18": "41zqWb1kcybYWQRrcp1rTzepxqS7ooW6sKrh7MjSAcoAW5NpEXKp7NHsfpFkZQ75kM9H2TnvmLaxfAsFnXZEDU8L",
  "key19": "NYUDRwvQpBdPFGvEVufKxz3Sk8vUvqS8bpheRnw6b6xmZhQ1bZ1GJJx1QmPJCTjnfzH7uzX94urLuiZqnxZFMLD",
  "key20": "2phfCrW1jo5uqbUvU1qqdQj6mFQ1jAVd6Fhzy6Cs1gNBCmWRMkLjhfPZMLYDGCuecJ5HwN5WEA7jxabeuPWAYjnv",
  "key21": "5EDFQ6pyj6Q5qpk6EyS1FsnuaCX15SxUpNNwot2t9GKLMXbXUcif3APkA9P7vCa2EnVf35eVEaTxVSVZX9pEtE7H",
  "key22": "49xVaqeV4wskpKZznxHE5RmRcqTZ8HWs1t78NBe6zUE5BdXvmL6b1AYfYGLAuJ5eLfm3zWbQGQNEnmWP9WSpBFYX",
  "key23": "47B2JbgqqGrXUgheogZA3BX48XQiSffHGfNCg7QKobUm2bdSwrVnSvG9PT8cBDM542ndaLbgdUCpWBhaNfzdkiWi",
  "key24": "2rh7UeX9DDz3mvzm96C3geb5gh2ZZsJuNMqAYPznCngYGheeEZtWUPgw2GbbRMamGSuRzd8tzFDCKjskoBBuaQob",
  "key25": "2GZ2FgSGw8uJBrySWPkRoTUVRmYDdJDNFHQPpdZDZYDHh9UtjN1RYpBRubqzyh4KH8JsoTKqT5rTTWs3CbE2JVdL",
  "key26": "2aoAJubBAUTTJqPVHwyvBc78tZcsX4WLQ5NugMJpz6AKE3tCH7zkhr7iFCFQ8cFWE4Yu1XYhfNnJ4FVCMHTaFE2L",
  "key27": "4Bg1ztqtppuqPQwmX2bbcNQ91WPuzvwF8Y3EoCoH1x8QgdSeqoQfVx1pjsxoFivM7kUXKBF9kRDBQVSW9pw1TcDR",
  "key28": "kNS8ncQUsBTDLFwvM98B4QpCiCXeiL5Vp6yNLbf3jtCnMha6gVdRFLWiSk3pdy7LJALQEyiwXex6rniBYM5kzya",
  "key29": "6387j5RWySVbHT3EhaUayoUjZLMNgrn92EyiNpRURvejG1KLia5UZ24Ru6EBgF5CaLF1qk9DeHuKNmsnU3kWKmtS",
  "key30": "2UzDR18H5sQDgTS7dLq4WYAcApDXZADey1eZ2XvhDQ8ZZn7hkuuUBUB3SEN7j6pEtR23fjMxZWs4kUXoh9kGcJXi",
  "key31": "GR95VGoxnt9V58KC7DPiJ6w6Ds2gm5uWiLhbXAdfCSbuUVG8YZM6YVSX3fR25uJnB7TFdLnRzzMCh96B8Tm89db",
  "key32": "4ontKYHnYSbA3xGVk3TRSCAymmW2CRtJmc2Q5mR54zjtVGQJ9ECKnfqEeTx3Zm6WTkd93iv1NGpu5pYwbaRd31tt",
  "key33": "4JyWdjYHYg2bri6Qrjp8X9jq5fSPNSJRGY3vFuGB1Xw9nCVXZQ8Y9BHJ8p9hYi9ZLnRZzpjpT18HDRW1RB5QbxEi",
  "key34": "5jHNPZfaJp4eKeheVdik7PLrHkcAbWDGAYfVWkCJfcDJWQxk9f3rPzfE5oGm2o8wdGdaRLuHL2mYu8G2UsinUuwM",
  "key35": "4LP31qjfTwn8NkTDwnMQVwJqin6Pzjs4pcj8YVHe7pSQRyrzNtCfv8S5TKQWBHAHpLzmwH3P72CCwSjnqj8deUx4",
  "key36": "39QSm5CtMie9L52VF7QC4SeCsT7MMb1pFVCkKGo4mxEbnDtU2hssKx6F5XHaNzNZcsD7Qstq7RQY5gB7eSLKcQLj"
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
