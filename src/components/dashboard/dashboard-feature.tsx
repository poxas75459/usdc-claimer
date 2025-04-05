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
    "4HwVBqLQbq2bxeMo5tZvhkZsb8rJGdDXbxfy6oWaj9fWYjia7kLLz7NPiUkmPpn2yZpmkD9aa4enSpuMLKtmqE21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcayCYqb6tAZeezx4tbTous6b1xzD4quJ9rYq8CfvBUKwfNgrDrUUqPkAaNJCMLzmaSGbC26j8j6JFcwJ38n9Ai",
  "key1": "SFVaBJ2ZnBQbZNGNvxpkkW6tXygrzbUR4XLdH4swtRpDMQeuXqXWF3NgUtm7K4dzQMoaY6pLaphdtDWuFQPBTaz",
  "key2": "3Y2t5ozvQS6SWdpgXsb4K2VCoKTjm8LJdNczYhUjUdL3Xnf25cqj1CbQ9DEEKdP2Cfh4o1czxwcxPRsviRJqZbHQ",
  "key3": "2UT4cGTq3H9A7QuBxvFHwrdwoeSx5fw1B1sndPTxnhC9q8RhGa4KYeLSaXHcSFq3c48acLaByu7KGh65jwMyYHpd",
  "key4": "XcUoZCGaLTF37wmFnFwCWRtwDFxNCLRPycvfskvnhhGap1XW34reeqzFoyMED3JzafAZtgFpPaLrvNfBBJRfQso",
  "key5": "5Gqq5NbTJviB2h2eTBiFdjwYpvS3vqzJjsW1s9ZfdFE4XV4WL7X2SeNsFj8JtPqMi5DJk62gpeKzQnmHAPV6mo57",
  "key6": "3JYE44BsUS1nFhMzJpNEeS57EvKBWoetqAPnQ4Js8Dh9WVwYEQBWLhWno5WtA1vUs5jJr8GEFgkg3Jzzc45dEBKv",
  "key7": "5qR84vbvmev8AL362wGqjXvkkcyQKYdPiK5EHumUrdV81ydrmmDdYGjfTKCnBv42UtmHcR4s8UYtGP8z2q4D2SwH",
  "key8": "C3KtmWz4x1Z82CSN7fH4LLaGGSyTtvKKWzdcmi966EgqHGzF2NFrFGV2bMhAu4oLi3L15QfKoKYDpDbrfcQHnvV",
  "key9": "4pK9RjpPAN93fYc9QSEyLPWqMMdvgLhcbNPK1iqBfZbANXSZ6268wZtNGFUaq8KF5ovaTxaDNjehSGycmAh1PQVb",
  "key10": "FqFoqmNfnejpkDPD4e8vF81FrtrxGMKcqbvEpgnh9ThYzpkhfgyUdRXTGCQNDkLkXNLyyahuL2b75g1hgyKjacw",
  "key11": "49GaDes7syYTD3KUXhx73sxYPUuiVqquYCaLbZFGDjZWbZ6sgiXf5xU8ttfFyuTMQwr7MHm75HdSzbEUHN53NrCp",
  "key12": "4GNNUH71MsckoP8EE13wbq1EHnB2v1mMS4ZDzTLs1FpsYtanhU7Cg9nkemUp81shfM9KRhhr2WH4ibuZzYBZz5pT",
  "key13": "3AnRQZcnShMJKrTvDueRCBtGT2mpVTsiQwi2gkehAGo8iuKW3tJumgF1TRDcTjvwSpbATHSaaNFBFULrL5kH2Z6c",
  "key14": "2AxtuAtFJ3frs17RpbWyM64MQihEE5HABLmmaX3pHMJstuwHV1y6WRq4sW8yDAXExxJNZ4DK8nXABknv6aHT3Q4n",
  "key15": "5eB5rELtGKarNjRwrKw7c1uurebwGTU9cdXpUc5w7FM4jofNWqxJTvekKsFXnpRk72vttVtf12fBnrBtuTpRxxxP",
  "key16": "yrXRZeW4rPZW2B8jRe2Br1s1GSUZErBx14ZkcEc6UHtteQKn8bsstef2xpSExyDXzFePQdYfVzN3ewCymvjdANs",
  "key17": "55a4kPFHVepjNgRNQir2pPGiFVZRV72tUvudSehSr9Kz6wbs7ejP8EuwpNftXX7gJ1GaHV5bumCCxZBgXA8CPmpr",
  "key18": "8Lqry1DWA9XWFAFZRhWhCSBXzJB8ayQawhgtqcSGpk4SJej3cMpEW8gWErVCsXmKADpWHdGPaBgGjADdDZt8vHi",
  "key19": "3RKwuqRXberaypZmtZWsUzKW7orRNGZ26oEKbxzTmjuEa3bwfjuC2tgkyosxfujWhcuieXvBEu7W2HDpC9JuwAv5",
  "key20": "2nbBe6Zkqi7M7m5yuNgsUawxMvEhcGVAhJd5THffgFAhvxEcZmS3H5bYeWsL3nAMTeXEYgyMgzvKUpq4HRGWBFsX",
  "key21": "4BabcXacC1wx7qW4Asz5vS7wYUde9z7k5cGwnHLa6foiJtmmSbeHpvyxcpYjj3S6EgcEjwgLUTHZguTy5BCbMmwf",
  "key22": "3N9Q24LGUQhLksCK7MD5vyaWMnzTPxPbwuHGygDTg1dBrMkhk3vdg7xUtK4LQzGRfukUSycKDjYiQYRag8VVG7st",
  "key23": "24nBGdcusAMiRRJeYr9xqN3UPCPei8PuWgbxYMfncv5fatcsmECy3sj2yDuVFbVFbvx9FS9y8SskkxJ48yx3idsK",
  "key24": "67dZUhfE7BMopazNdnMZqMMjDqx4AGPXr6M3e1ygmkMuqicH6VjDkS2Qwj25L3eU2Twt1ibvmcvcpe48NMoqrv1p",
  "key25": "5iZ5X9S7thXNnFZCNiegfoPLBy6TzxUSgreprHwukrLv7UumBGhQMvUEZpcpU7Qp22pfitsqu2AtqqXdHDFpBGEN",
  "key26": "4LtxpmtbA7aC4RxmHypg8RggGQ9c9985hXyH9eDDQfa5agJtcPPjjGEYJkHMFXKByKuUUjCCeBfUVBVJBt7ZU3jc",
  "key27": "5PDPvKVchkagFWYratavmUJJwmECMyqrDrfRsXXwBPkcQpqhbXj62svvi3RuwWE4Xob7KgvmMuausfWCbaxmD47Y",
  "key28": "gG7YsvSoXNSvCWjaG8FmGZ4EWYMd4jmhwho5PeWTXs27adjcKSbHL5eQ5mWGQ21PAWLwRAsNKueWjCB5ZEboi3M",
  "key29": "2JT9UDCnae3tDmeEK4fmUW3PLPjJahLn5cHekgTQM5vREfu2Ld7BpnXtBC3tXaAzgPe58Gk1HH95nd7vtZWBUbXn",
  "key30": "5MiDzGLCZT1mteRTzvBCpPch9DXMxrJ7CWLt6DFts6jAtnBkHg7NJoF4dxbRVh9VWe2z3MM72MjvFikEqffJwRTc",
  "key31": "4oW3o5spjzJ4kaU7DFq1UvdqZwPHSJiBjtMwRM6FA45CDfGTUhL1tc1Q2CWYvT9MS1o2ca9n5nBtQb6cKMT6gjsU",
  "key32": "5XWD7jyoSedLMDM78Ji6JbqeniYDeggSRr7UGrxd7hL3e3WodBkjwQAPVHtNHFHJqRtr4H4RTbi1AdEMvJr8AZc7",
  "key33": "kngxYrDjRxbgQW4zYgXnUKexe7P1Ju8YjmJnSb4DUtnyZ3xmhwspA2X2hphMaxhqaUmcxri9w34CsWXMpPMBAxa",
  "key34": "28gSWGoPopv623RFMonFM5Ut1bBmLf4RVSKfibsFgqDw3tfS3KF8TFRa8UbbqXGLkSS63Sw1RTP31BmeKvECQ13P",
  "key35": "4m5tzAvfAuPycA1trjs2bK1cLYqfDaTYG7ZqoP5fmkFnanNznVNqPdopLx2nzViXj3e7MW327fYtjWdSctLboaE4",
  "key36": "eEBUc2XBYeRG6r2e1F6D5NBPWRQDu1NofWhUrEmStyEyKSXdToDfkfku5VJAwJAqSm92okab24LCyjkXMb8JeGu",
  "key37": "3Rh88uqvQXmKUfubqgAgbHDrbCqToEvAF1akDoMjusGBEEqveWiaNd7Sg9ztTjg51Mj2yJCVzh2G7D4nuiVwiTBQ",
  "key38": "4EtDTis96Gqfv197tZKHyEYLh9tCVhVsT3GwZdsRNe8ZSsFFZ1CSCbDU9T1ti9T1MhiHtBkE8jLXUYeFXTcLkATT",
  "key39": "iyeiWqPKWe5T1cYzoeNqTZKHq6otMFhmB2sBTHeZqq26snCUb5jTvMvuyhE6XZG4k8R8fFJRar98zbHyhZzJN5V",
  "key40": "vbcUAQ2x45vVnqtoyDe7ZFvGHTNtzFkZBLwjSTeJici3yg5Nav9XtvJW13SzDpCCHgXg7YPQ3qNMoUZKn5c8z4k",
  "key41": "2AagaNVFyVT4WDr6ZbC42gekf1FXjcUd6j1BTbjnnCVrD83MhZcdJE4dDGTykmnAUY4fKVmeHhNTJ3wvPyxjTGXj",
  "key42": "3o9p5a4Yvm9cR6C6y7hegiubYykGTe7mjmG5btPzZV3P5cQ1Lyff3B4zSK9eToQ6QbEuHwfv3XFroMWDgdS3f2R8"
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
