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
    "3QLawa4Q7J34XNqZSquBoPCae2m7AMyUkpfNNsuqMmP2nhQXLtdW2SvkFibQCCQ7VD6BDz6DLqzrM2ivQ9misgjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28oVePLV98K2uccVaKLJFoUMFvvGmc6eV8ALTnz7LjFqH3LVT1PrPkXbwXWiiLnkstXeqG1ttzTrWTRFeQJwAR3X",
  "key1": "61ZRMrjkSVDnnmWNDEnxen6JkQnjK2FcjKxsfmvwnppwEWoQAmV2yj2aQvdXxdQ3VbKFuo58bbeZuugJmif69VMB",
  "key2": "3yhMDLsAXo13fBDpxu4UA4zJXw4fTpLkx9vYWx534hmYqxFV5evDi77c9LzdVa9cxK2L96w1Fc6oay9i32hTjZFV",
  "key3": "2pwrKdXBRbZjqXvGqoeiQDGwM28vXWxAXwrheB1p21cJHtvb4NVuPRfwEt2g99vkvhAjj6FuW3ezEeyLzrrx1pxQ",
  "key4": "5yidnsPmiNYWbnyhBHTcSuJcbcSD7oWRx2YB6aviHnWXK63azZZDN8r5RBxHvrATJuSfhuNs4FgEXbpMNg8LjZAd",
  "key5": "zfSCFjbCKZxnr1QjCZwqUQ4AarifM7ngR9eTkDcGHD6GCz55pRsaUq5LM2U85JmC9mz2LrGvSnt2SLFuBGbzoi6",
  "key6": "1sjm2g2vATT646Fzrom1JoZJgGbD5KB8yeELopEUkVnAMGvATJtGXxvpedVHrSi3MeHyMPXABgnCTL2t63pFtnJ",
  "key7": "4t3urxvZs3BxBLTGYaMtmFFJdQwM6xBkDHp7rGhGZFsJzLYtaCR4s6NyCKdFBDVmuQvAzq2mT8TKH6UAdBZWELdt",
  "key8": "24abET7fMRufVR3H6YH3oDQnpFmJxZXrzeQA8Vrom5kbAZBr4mfxgRCHZYd87Y6VCpeDefMDbFGxkJRkGjW2e6Cu",
  "key9": "4wtCJ7LRaepWWSsSp7ae6e4zesyy9J6n7kAoqm2hd7tAfFXUVL2R8ZADhWreFfzgZs9qn5Yb9pPnRDRMvHdU8u1M",
  "key10": "3CPsRUcqyYwKLFvZn1PU7WSCwtHWBkcPSc1t1XQJDoFuaTARW5yZddZqUTund6kQcRJtqiHmcJVtwVrrEqas1A3e",
  "key11": "5XUHZpPLdm7tq5AoXpPGBBUXSXAy9VBop7BPvMZBjDT1KDnChjC3zL7vGmpTDKpMmDVHPo6YUs5xwptPWCKxE2GE",
  "key12": "41SKkGVRrstgjziR4ZuvHRF83tEj7qYyTLJn15ss71xNP7zMmtdYT12JNsSueVE9FVpnwvh7rN59NBeN6XbARykV",
  "key13": "3u2fUwLWhgEuub8Av92YKZrvphZTiWHkT7W6FRsWBvnPdPfJzPKGwvCdoJ7HjW46HrXvt3PJBLsa9CiG8xqzbBEp",
  "key14": "zpCU5D2Q2Wurpv1nyAgfCDpe558ZUUeQBfZUHPJcZFTj6SwjxtJA9juoohGcY1VpVicjiZhJQvJaFZfiUkwUgbc",
  "key15": "5PKNrhRWWb4Rd2aSq1X4cmsEkH83KsVSUEJPVYJXoZs81WkjFvRswN6YbyvwUZThLfFYe55mbQZELZMWdWjyQMN9",
  "key16": "3NfoHst8ZLPN25kd18ffPWKvcbKvgoCKkpe9na9ipMSe6YizmAv5Wp74hxXN2Lv4SAvTmMzCphbcK47gugQ46jX7",
  "key17": "3g8Eou6A7DUJWCGijZ7Jt2UaNCTHcnXzLkKVoH8UVXVZEyBD2ZPPAJxM5iEM7BvtMAQJmR4KhekkunR1trfbmFe9",
  "key18": "GpEKAVjw7acYp9f6Ad8C1ucrpyWMicivLPALBSFT6XGmTQCu2AWyUSMtR3oWvK4cAsEok1qNrATYM9szQABwoJe",
  "key19": "4tULLYLdSDy9BXsqgZAoSyeWEjgRPpRwwZxUJMaKZ1wYDVk334bkbRnmSPzdyGhxYZ4fwmSMT24CsxWe51Ld4wwC",
  "key20": "92gmNWSnnABXJnnHbcM2C5BHVbTeZ9DC7fabUfVN7XLmsjArswEZHKmyoDNpmyLkegsukkwon8ALfdds1yfH9VE",
  "key21": "2Rb59k66fxhBgqgsf7YfZTWZraZ5UBnj6k7JhZotVMiFxwxqgEwx5Gv4AzQS4MAojobkDBucSiyC9FNKAQJxDAut",
  "key22": "57d4gmro2XD3F1tMuBxhVCFsnjYQ7xSeF3tLXCYbW4LjTTqciwetGx2EF7xdLLf3WFdavJ21axZgtAAQA1aDzrSi",
  "key23": "QJqnjcjCtvzY5RFdC7hNJwrJB29HBJgUvV4NZNmjLx98zdK84dbgJqPucUDaisn5TvQoSgsYzSajRsdsXbL8Znx",
  "key24": "2oZmiUdZ7j7MXCtyPGvXVk8XGRXmzTFCMyR19Z453HMaWCPv2yiWPiqZCRUnvoP4YtajE3ReGTr5zyS9qPKRHybR",
  "key25": "3ErZqh8ZYCc1JtwL2BvE1HRakzoMMqg8YEEahB4qb8kfEcy1qj4pJAVRKPdWBXWxK7rVDAQUqoCcezFKjaQesWyo",
  "key26": "3usP6eD48Fp4vBirD1RKaehYcCNNDWmSFx5wLP9pzhy3S4qT1NaDKqb3TAchnQ9eBwqsmc6NN8ebaRnjbYDfDPrg",
  "key27": "CeHPVXw1n6NZvQRYP82h5r79PrkXDhUPuh7JUZCEPvqfZtRn3jdv3vaM5dYBzTdMoWHVXTJoQZf7vBTWKUXVpfM",
  "key28": "2dSez7YKouokDukMHpiDcfVcXXuZ16Mkkfp3q7r55aVuLWCmoVpPicc7uMH6ZL6uyZNA3w5aUKchkRgz5cMytSju",
  "key29": "44w429WcFii5LymYWoxRoKxghD64mcVHz4d9HEutEWKuErjNgwngbkHEapr5RUFLyru92RVU32wjLP1WviQpztnN",
  "key30": "1Tswwx856HEDWojStXdmuSnbkhwKN8j43BnNcprdoQXUGMS4JmbfvPBxhUqw2B29HB4sK1mcbk8Vmmu9HpzM2As",
  "key31": "3gHuLPfjkVsXLcEj5o8J5hXWwhghaZE5ypsMe1cZSQrURy2ri4gWHR8EuSXLapdnwiqoLdtuj4JqRVijTkZdF5xZ",
  "key32": "3NNweMFhATFwWR891pGXSpXEQDZjev7iL78Q3oMMVf1qsgZTwntssKKEvcYg16MoGzXRGTjrgh9m4dU3a9USGDur",
  "key33": "2wYJynPWTnfWmDdznMHyA3chdTjqfuEdppbpogNeWkWc3VhybuoRawjwpeprGU2QEsARzAHqEv2e3mPDc1UmRYRc",
  "key34": "246oDYoW363Jad4Lhu1iuPpDqjbfYR5CppgR4rErEXW723ZwGCsrsJ7rCqzZUBfT8XNpfY3YK6XEfn1W8JukU6wC",
  "key35": "5vL8oshPcj6vY9X2RmC8rjQFrUVnfVTkxgGt4rwgNDasMmRTAkUTLYkY73y8giqhaKQY15SMgjEyix18rgbaBmZ5",
  "key36": "4ssMgykJcKKGEARg5CjQr94qg7qgzcjsVfukBzB9UXHbUMojPxdJzCLCJconkyoE2VdG4ZdL2JN1U86rQfD6iPUp",
  "key37": "53g8oP2b3gZFF3pTxK9DzZCqms4HC8AGmTotseitSgACyPQg9BCkr5EQ9XVQ5brv3XWNQAA9wKhLgakCDh4jJWJu",
  "key38": "4CsqExvRf5DfBpPWQUnJdxfMRENwRPBMBEKkeYeuEQkU5TL7fRSMS6yt2xVtK8DaWcbVVVpscNkkBLAuzqbZ3vBi"
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
