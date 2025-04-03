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
    "AqxWmHiTxSxhFC2K2ZrvmPULB56uRvXHFPDhUf5oqLrAJrccGU7G3e6xFUJHv3TS9uYhpA8aCcZ9tbpoc6zxtsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4zNFNB65eVFJs7dQWJT9xcxC8DAeRCDhszAHvzS279fiAYH3L9mmR6aobmmvK7ekMPYXciAkKDiQxZAf4N7qoz",
  "key1": "guLDsnmAx6E7LGRqdrAZ7RMDWYfWggtJNHK2fsAg33eh8KCCbPUwwQeFiBdDm8ryFp4d22WNuQEJizGK4Z1n8Zx",
  "key2": "4Aa93dB997uK2HoqxGeShRKjawMnRNmVHeWyXXS21v2V26g5iQ1eDb4oGjrWziHmu67awPnp5zcas7q6ABoP6S9u",
  "key3": "7GNFt7oi8mC9aHhQd3t3JgRcs7Sh7igakFZukyaDF372rEHZpWDdMxHL7eYckT52Eps88NvyvJGwqmkmKfQEZH3",
  "key4": "2fqCxAQzMivpQUJaBpw4nyLzB9e4tvXTaq4h27tS3SJXdJrMf8vdY3orZsmAew3fQChELgV8qfRCPAqTUf85sUsP",
  "key5": "4JGYgJtPcsGY2FJocvSYmaB1bQ2VqyXutEDbmC9sg7BjpLufo7Qx8iKaD8QmpTFJ7hqg6rKhacivfzqhqBdHCPf1",
  "key6": "4QGW9wzp1MGiJWzVfMpAwJoYEVDw3ubhTMDGkcJG7PN78ugZtdDLPYzCy3Z1nVYreVGrBoU1UPHdzkG8njzEv8DV",
  "key7": "4iVvqqQLe9mwMTVnuP7EnPtq2MSbAvjYot2ohey3zagvN5mGEtPzmsQa4Ve79w2ewD83ZofossNWULbcTahxteh",
  "key8": "ke27qLpgcxrWjTnzbK8dCuEscyuT2xDMY4sLxjpJUUe5xD17QtCkYJVuRrxURhQrSMmWgVJWpihNA7FXCMSxjzK",
  "key9": "4xc1jkLA7ttdtpowWfhU9hiHwrY5XxKHNGMtfN7CSgnUNifLRSLxdQSXau6uFtrMdbGsqzcGA756wpnt3GhUZBjG",
  "key10": "3yvghq8KM1uZnDdMcqVoo84PNBWgWjgg8nJvuJATaYoFoNeLuSs1sUn3H8es9bE4fqhtxif4wLS73CuoQYaVQ3gY",
  "key11": "5MP6NmVyDeL9prqVXozT8P7DUUxJAuj323y9zvCLTKw46k54EAqq5UDBdzFvvNJmXejNWohwyq5TYgD8cc2cLPbK",
  "key12": "2P7aQ8jfUN3fqdKDh51xRv8arBm2StCvazMCQu6UYmmT2KqonYpXdTrMFgoRMnRJBK94mWENcqZk4jSpnwJqikAJ",
  "key13": "4zrrfQZ8JQ36DHnHfdc34sSR8zyk3KYqZ9dNbp3rEkDCZAyZ2yoVUYs77JmpP1ZMMwZ9Lj2V3hUSTQzRN1jWpVCt",
  "key14": "43hAwAfMP93sWxiYZy7YXphRhjyKtS1KTduSspQziMqc84zczHVvZwQMXcokwAetTGXKfp5WhDignse26vbpSuEd",
  "key15": "5jv5LLc6gyHWbeXMqS78fuXFezMM6Sg7B9tjBUAbGViP5Jq5zRoVExnwtbgm9iHkETiEtAZF7s7wccbn43JmkV3X",
  "key16": "4oDEFpGK51fRkeDTxiWsPuyQxndgFvUtJr4rcW5qgUKu8983NDRM1wSe3nkLSB4Y66t9ukEZTsPBBaQpkaBjrF7R",
  "key17": "5xBAsQCachamH3Do9GV5t2L1e3as4nS2ygTQsxHrXDWNdUPFnEapAzn5CNw6qNPbABdhcc68qcaAPLRZs1yCNVWn",
  "key18": "66D46CSFGzdbrKxQh3DXjkujFnYJB5C6oGUU5MBVQWo8iza49rAMxcjCV8XUtyZkvLcRHC8dSyYrykmvzX9ZbidC",
  "key19": "5M9viRGy6Yty3TMKxbGheudNKtErh2GoYxyiCR3ns7WWW9Qti7pVpML1x5Ciy3XqqNrY8NFfszFxJ2jX3fiLSQ8c",
  "key20": "3Yi3sf4SsaSt4qmR2xTpkyvh5h3SmDcmaXjiUc94QpyLneUY65SKVLD8Ud8mC4MoNNhcoFjs6HkxKwYoEh6FAhLy",
  "key21": "5JLZGkBUUyACmGAnHkJ1vkjCeGQP5cobGuQ1HG9QwLhTqM5jmXHiPoB2NRYnuzzmMXWmKEshrsZWQYU82nByySTn",
  "key22": "48rC6zZhxJZqrEhe6SkbtGpHvW1nob85HdgGcdGA7kAQVoQiXRvP1SxdMmoSFsAvBTUnRUpiFmtL4kAK8zZwLnR8",
  "key23": "2LSGFYhPM9obYbBVktygmdpR3rUZY5i99ZpMVufypoKUh6S8SpqcpsqTy2z3JQsK8U9JBHeBFuRXXRqHahFgy8uM",
  "key24": "wVe5x7RuZBgPVHNhixmrHShbHH4bAavsvtxZ38gor9N6WLRThzW4p1vDphqaGA7obbTVM3py5Cg3JSrbVzzUcvU",
  "key25": "4RLXz3HmXBppfpEGRniUFoXSbLCvJS6innJJhZYULtykm2ZsdcjbatqbUAV2LjZTfEGpkKoRcJADbskfjXR1So6a",
  "key26": "4uHRF51HeJqq5eHnTwcMiV4qTs6TQpVLmL7gPRgqbRg7N6wxncnpzDkKZ8D2q8v8rqX4TfxtrSZmCXTq4LidudYJ",
  "key27": "2e5czkqFwDP7Zj6n6ozVvCGozrps9T6rDSJEz8zxmD6Qkt9YUxgA4ehgKuwD4PxXT3fRm5uzFVHayuk6hDZTspYz",
  "key28": "239od5UtMawhKc7EZMWiv8VtU5JV2Nq3fYLovNcXeYs6oMExa8FbWLt1xMN2EUcSxZs5NoEMJYBFWa8rSenK7i2S",
  "key29": "3Fo5awTNN6zfuLmueK7HcyZK1dezQp7kKq5ZTMEFkLjsu4yMRtE3ygcSP9CWArF1QG9C7TDskYvh2dZM8U4fB2aw",
  "key30": "4sx5AT5RiE8hoPoufeSG1dgCeQQ22ZHFqWn1KAFmSDsYsQZBHi3wjeMVdjhRrqTJ49p7a6m3ADQEC53iMHsz6guo",
  "key31": "3TrAA1Fkog3trsU9QLkvxx18iNzpv34C2ARoxtHMi8EzYGgC5J1GcXsMpXVRUczG2TLpT1TWH3SvaZNoo7GwwNLm",
  "key32": "25gWUa7VXiPzKZhoqZNZdLt92BhURUty2SuQsW3Q1cAKu6XffVNPJserKgS1Q32bpC3TSUWHPok6ELjB9iPvAwjF",
  "key33": "2AHjUT6bFWzqiZknrwkdAiSiN2rUfgL8QoTYtRMnyvW7iAtEH1JHQSmFS23SnWt2x2Q6dHV1pYogCrRbdSzKj7tj",
  "key34": "w8RDEfjiB9CuX1icM2q7ZdcjNzPvA7BTJe1X9NrtyUuXWdpAE1dx6X9rHv5Zxok4UkwCUwvJvzyqsufV1a5D3eK",
  "key35": "25RAS4d3VAAtU4tvkaLHJ5Yt9qMyWDS8dP7u18GigsgEoCpEhuax8Asyc65bGNpam2rbnGut92jX6SgyYgLyjUFd",
  "key36": "4MjhxUjiKAXrNP6y3iXC9B4Gfg8T1uF2ujqXqAojonKL5J2BnrgKpAJKgi5GnVLLBZ8BsexmRWwTJCH9cHGMRt7T",
  "key37": "83kRbQvemPB8kW5GYuar2AwcmJ6i9dvdhdHLWwBngijyFPPJY1BZfXgTYfLjJvTXiRvkUrzVczVPTy9EioKEnnU",
  "key38": "3Y8c1hC1tdkfq1AHhQnmWNmHBB1qWhAMH3pzuzNHpJxeSh6GKR7C2rGCHpU4AWpvjcXRHWfrwhCrQLZtiEmwRhry",
  "key39": "4xt1bjg9ecBXnRXcE3EC7GKxcq2E3FnudAafh3uaPgd7HnpyErXJUPYrJ5TNvLLAW7JR4YP1KMfALdrPqbrZpoQ1",
  "key40": "tjjrNqWA7494iFWuYxiHkDS6uicayChy3A2WrH7dtxY75kuJDrErY5J6j9xRQDyecvz788wFwhxM5wRKTkjGTMD",
  "key41": "42B1Z46jAdBbUed7vc7C5KmfkktApwWqzCczSW8nrCMBjow1qs1EWvNSJZTcm4RbiSs8MbQaKYAP38t5sJ9wAVm4",
  "key42": "2vcXNh8Lm4taQdwkYjhPtxH65bEX3U2oQtMQzWmUy3yvna43j3PzqZMpU633hQT9Kfr9bCVscoXBfQDMPBz8GTZP",
  "key43": "2YUrrUh4jSSU2nPsfwtsKK9VZuZpZvcHJcFphXgR7wdujcieCTdKWL3XM4a4s385bdo8g4PZ56KDG7nX3yA9DZgf",
  "key44": "4giwZmofnPHwPnoBiDPyUACq1jXGcwBNnZdgGZPyNT7xaa4SriKuun4MhrahznLjTVxt3zq4DbBDyKHBM3VcKs2R",
  "key45": "2HCTR34B6dUtM5DjgWa5kzsHoNHwLaLbRMgVkukNp3UhaWBnHbfgV8o6M91m9whGhtTsJkBQF5MrY3UySoqwcvgr",
  "key46": "4epdzs87oeZfZHdBXzjzpqxTpJNFa6B4QVmhjTi2yf9x6JFPB9GadVnjmAPeZcagQRaGz7SFLbjAgFp21Tu7B55k",
  "key47": "68z2MdjvSV7UTfc9GPCpgjD8pUcVh4ZPrzboVQ3wrGWBoLHE46ewVJedLh7KAvcg7a6JpcADSdFKassx5Yf1FEF",
  "key48": "2WTmYEzavyua6pDGgErLuDfSGB6Y7JWJrqSXNnTusq7aftt7MAyue6wePChvjLoTvVn7H6kkFj6uwHHvm5vHiEaL",
  "key49": "27tL3iEW55MQBKPuhu1rTZcP4dNLBaZuN9Qa4RweV8wfGLQaCy1pd2VkrTM1AyQ6QNx86GzhoX44RxYLqHBCBheb"
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
