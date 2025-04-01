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
    "2RceCPWk8KtijFvFHag941BoQQtc5fPokiuEKsJLCzc8JC8ZRVsqB1u5fqoGwJa6SgwXLuknzsHUZ2LHYHD2Amqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663Vjy24NSRyrcPRFN6TdiNvpiwD8bFsFQFLxL1ziD4su3evRiDU9x6a899HPA1bc5geD9ymayz8uAqMPNTKUexc",
  "key1": "4dRMjcrVmn8bvJ23Tw9DW78WGSf9KWVhJARrT5cjhg7vLmpsc2DhzbBjs3Ar4tDRzxNuTR2Jor4fsCt4EjQkZi84",
  "key2": "4TfvjUtog2tbJvXPjszvGbCfdkZxvS9FwewGQGrnh5Gcb1mskTc1jtEVnf671av6H9dpwzWMYpJShNEh3ZfEkV8K",
  "key3": "5vcYjgzNnpsLe1EWGdGeEyVn8nXvc2wfiqWGHnGy6xavj2VLdcfA3z1e2bsdLye5UXcSymDYZjrTcRxBe6LM5y4P",
  "key4": "4RgRMBxFdg11tyVTCUNbh9dKi6J38RNjLM9hapc86LgPYF5oM6oN5zeUBo7C1S64ukw636CYyrzyYr8MecWPX3m9",
  "key5": "5yaoX7xJehXpJFA9CckJ9qL9z1JLGjmtJ4mLea3gCFSupKCwJQV8ZB6ZyGeaTrqDvshZatxAFFNqrW6jFu7DfVTS",
  "key6": "4u9PZNfbBypcHFiktVpsoLujaK23JaH6bV4e36nQG9B21G3kb5wASUDR1sQJnwdQnfNM7LseQJfxZaD4R7Vr2xcd",
  "key7": "4Brwgak81YMQTiUPaSXkGMPkXsg5FXCvT9WcWafRCFQPAackrJmbpBHheHiGaCPAtLUVndgjZUiwohJ7db9BPGF7",
  "key8": "3ogbxY8xVdNLL4F4Z5oPn3VixTcFGHUm2WMtXzGJf3sJrZudTJsZTBhHyrHNtkmdLGTcUnDyTgvTvXNEkJmaihA9",
  "key9": "5S78sSGtU87cBpmggTjVSDVRFKhPZdi44xnSL7pRgpTDQNvzZwvaVSroiqNE5e4REHVt3aySaATqqxN6VE9TC36A",
  "key10": "62frxJNXyP3y9tMsAGarDh5aBpZXZNHnR1TrVBc6SMgNApqBsJknKp6yJhUBP7wDCM1pUaji7aKK923zYuUHeDGK",
  "key11": "5QxgEpSgKvjXSN87Rr97vj3qFdezwu6R5bcdS9KLLfeQ2aPn2oPFGxPNR1caydCRAVWC3juE2re8yLJ6QCCxCwBg",
  "key12": "Q211H8LRpmAA98szK3waNoFs9zgUPrBa594NFDoA4aoFHbAPc1f18AdoyG8HoRKZJTFQ7v1NE9bvDxNEG9HESVF",
  "key13": "2QLfFxQt8fTzr1tzZFrzWuaKfVANxPikBNziY9AsjPt7hgtUBFsmMzr2EnyuJ3SqLiTwtJ51rGXvNZSa3vMuMNCb",
  "key14": "5w7sgcPtB7pGgNscNyG7DeEchyFJEKkeY7aEC3agnrEeMEb5KFcfgzFjZQ3kF63H9sKCm2fZgCmXqbLGJCA2LHMR",
  "key15": "3smrfbkCZXuR7J4vudqg7q2tAvnhrr1bTYYnF3aLWfq7LhZ4wgLjUbtZSw41s3cuJH7gS9wN87nMWG5rCSB4yh89",
  "key16": "2czr2fmaE27Y7c9QX6wc2dMNNaLMPsMLxSQJA8sMk482EsbDpeGc4EDZKrJw8oT93dR86SUxjHJqtzLCZYJnmpms",
  "key17": "5inopxspM6vH4xqPDWLYQEvgMxyAKFf21BuP4NTba3ASuqVoKVynUFFF9eFpY89Q7KFrbCBHXbvJ76uiw5mQUZiM",
  "key18": "3B2T4hULHAUsyKfuHkdsK4iqQ7Rx2fyxx1LgrdzwCoBDdrWEzZdTkSQoNU9Fz2L1ZbsM1EHfUC6UX5WKQHoEjeh1",
  "key19": "4eyKFqUB9Ne4kyaNmnrsiLFC28UE6o1GCHpMvrD2J8ECiv8Me6MLiwYrxSNw5xPWvTszfhTS7o1iqLjATSvommuu",
  "key20": "4ot3cT3pKKe2ewb8QfA377t8Q1nSGyhcUhgAGQxW47NxEXYXhvbyp2PGphMwWzt4zBt21fnaaNJFLCoEGN4wHguT",
  "key21": "5rKPm2tDM6c4nkE4ZxJfGWXg98xAHAG4LwhRqF2dxxosLWRnEan6QeKDf2C3HrjCVTQVLKzhUq1HhwHqb2ycBV3k",
  "key22": "42w3gn4Cf3o7w5jwMoMrgdoH4dQZbok9BoAuQgKGpmnYiDeCGYvDnieLXLT2w17s4ViyTPjEiffBnhVx5QJmjSAB",
  "key23": "5JngGqCqLnbkPZDGxtWMCBRMAYTFTmxA8zz2gYRUowudnf6SfGQmZoftjQnYTbra8ybjXbCui9VjFxvbXiQLMFJt",
  "key24": "3ubSeRrMrLfhYmKHqV8tfVTsU2hgvzzfMi8UyH3mPxb4MV2ePEqayDPGbBT2YC8WdJaF6yM1y5Kx61xiE1SWXxff",
  "key25": "3dp6sHibgffZVfWrZDK4uUhttfmy6YFyR63J3obyYTAjkitwgM43AcygXX4aVMQgckqPih9YLhFrH3CVfgfvd56k",
  "key26": "2ejmqwmhDgxawkobK5LMrSikXqvCMqpLRwVyXy1JNkDLjhjdsBG96HZizUZzhTL4y6BLEd645pLY9dzzaRBfda9n",
  "key27": "4qNmfaXktDANc8ir8c6iK3DRCPLp5MTPzaPoew6jrpLTh5dFzbHP4rqFh2nnGrZfjis2DMzyQK2nbDNN7LnQbnF2",
  "key28": "22moT3QyxjgeVnexQzTNuHjx3D4paLVUWhwKredmFqrWGwL8s4gZvrKFfauqEd9xW1HHTkV26RS3vNqFRM7Phhgh",
  "key29": "2C6qx6LkZYDdUWf6ByJFctPUAnYgmC5TgCwJhiW1sY6r3D266mXjzzx4565gW5TQPMKmfy8Uy5McJZ8haPpwshRf",
  "key30": "4SMBtQkJ3KEK5dBVkWgNdWMpPY5jxYZbPFScnPcSF38A7KhsmRqfFhx7ZzyUv2H2tBhtce3nzNJfMcqsawWDLe77",
  "key31": "kmkEudiE6Lro1fH4pmuEQoW6DP1BYK8BspKZFUzB3ioyPaa7M3TGyQv7zUrX9xdFWoUVNFU44F4iHMb4h3g6uCf",
  "key32": "5cCcnhbkzhfdh4PLV9VG9wZanTWeYL7CyKiThH7LhM4rX2y5WvwBTcGAa1cqM4JJg452meuboC1kAcvyLnPaRREm",
  "key33": "2ni3YxmS1K2i6WiGZTm1hMwCggunzbQwkoEgXae2bic3FVDWt7yod5gdQN5jG6TbLqEYR73jy7AwBm3jaVT5dr46",
  "key34": "5F7zkBTLb9K2t7P67z6PwvKjeNVbaFEYWhqSwZMWj39nTKdhzBatbCDLe9uuw1rd11VAiM1F8nPUaT8AWB14aBBh",
  "key35": "1uoLekWBAdaheDDezX8hwCFPi3H1fFztBamJVVMR1MkYmwGkC94aaMg117GECvQvqrF249x4FiFeYNcPy4hbKSb",
  "key36": "3RHy21qZiKXsZwg9GmLbyCRZm5FF4wmKTsmn37Dipvk29kWKWBmXawnsZs7MUudR1guZh8nPN6ynZEmzdK2ixnnD",
  "key37": "3SUmY5S8wKZtYTGX1katVNtVdKoXDrozLJkFUNDu3Q1iARAoDr9rKgmQrrW5eBYD9p8q6cWZv9dErmdgg9dywhi4",
  "key38": "4Zbxnoj4weoxV4AkC4FY5U4CsFSvBGqsULQf4ZrtBvPFnUZWdmjYsYtFRdsjgqNuLsZvgYkFkscG7fKEf9Cva2q2"
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
