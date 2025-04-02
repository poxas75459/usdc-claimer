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
    "6SEwXugSfuuEg5YogqsQBXCjGws4ijTDEcCjHwBApDDj9DMUaM5ePzLmJtJDJYpSEsjTJ56zbcHPMXrt8YUM2Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8NswQ34P2KXJkCWrDSpPmPZDPqpsoDXynCsKQ43Wak7uhHF4vF4MFKaPGmdKoC8bawkJW3fDZ36qcr2sgtefnDK",
  "key1": "4mPksLXonwXGuNBR8mUX7acv8NGBJSio4mMiyYyWvWujaxipyEcospdT4Stjv2EuRx7cJqL6dpAwP2jqUbnxqJ8e",
  "key2": "5F2wkMucUw9JLs4XH8fiSFX3kA2Gm5vctX6qErWZ5njKca9ufisfjrzHEKMpPAUFKQigNWhJ3vD6QzbeGPtCbwTj",
  "key3": "42B5rCu2tZKudo4wXbjSUnrHfdCraAVRjDjPGT77D9aRgdbBtmYnz9UJfvtCz14tVbprum7BPFNUFzQfsHTAR67Y",
  "key4": "65iWG4RgvreLcJfiU992pZC1HthJSWmadfmQVQ1VCCF3pohX7Jncw48pbMY4XhKj5sJX2Air44nXTn3iTLM3g6Qp",
  "key5": "DUqL7BJHHMjAYCiB4iRtGuFjWSpaBtbDPAJj4y3bTY48Arn6UNZdEFXVnZVTYoLpXc5joq8A1scqJvYzKWS6os9",
  "key6": "4EeayPt5FcDb8BYWXZNTEPsak7nBWpQ23Jmf8pJrDzC8L6G6SyWgYVX95qGcumaGeZ9Av9nc48mVg3S95gN9AaNB",
  "key7": "TLijZbhsJEpLCDAdrnzWxtRYvDc1FRbvH1oboMTdGDArbnp3Kb17A6P5y1J8M8jPWukL8ERbPbL1L1YxtS6kuAy",
  "key8": "5Nk6Tr27s7tGsyLphNUqu7WET8JwbnKigK43EvDE8Uia6TyuNLVL8zyPzeEyUgmwfVSR64KDVSN84DrzzWtFMGyE",
  "key9": "5gYys6SCp4kBVArD8NnVtXHUHN8H19BFehaz1q4DEdoPfQELPH1FXS3ZuRQerA1XS8WTvtPq1wYjRRzxnm8DyDPf",
  "key10": "5Yqmp12wWr5huuKJF59Z9gdydQQcDnBuUap5FWfg4pMB1tbd1yq4ZjXGArWLbtU6oL2YNJXjmmriz9LRcc2bGFgj",
  "key11": "3phfLc8Miy1LByQeTMH8GPpgzyvsfsXJi46b6VXyow4QQkRATrwcR3sAAvS77fTSnsPDamu1yEMAQQpfrh3teJMh",
  "key12": "3YM9iKXZAWaQJenJD2vstM2qN4R3su6PMzvJAn15EbMHFnHKjS6bkhkbgdjUrb9mfHiD4ecrLLQCRw7TbMLnxzj7",
  "key13": "582STjJf6mp2UccMiAm3WVpxuqvozZhuR43AHZmjyyHycRau4pVcXJLd6eoE8CvCtHDaVfUC4MAF3BBhxrSvnudX",
  "key14": "4DEofUG3nmzeSxUtNfxuFEC6umoPGw7FtdLoXq1kMb1sLLL4LXwFYaLFvpsebBnohVs5PeFSHujWvbdNNHzepYG7",
  "key15": "4bh2hYqXb2dgBLBGEYu2j1Lv9LrDxW6tdDnfpfEy5dc9rjQg5MiMhPk4xbYBGnZhdtkvEvCUoJqwWTkLGb7NzQ88",
  "key16": "eTfy22QeJJ56LXm1rizYyZ2v1hdDCaDCjgPXpzt7VYkfHCcRci5ahaaBsnN33AfvwAXDPLWhTPHwBEDwqyKRLzr",
  "key17": "6PVAqFfBK56zqmhFEY8vMDGzoQRJLcHzEQyDyLTrt3ngTE3R8oH7zw5nU6r2e8WCdKJjdvP2NUpuVKiB6iXbz4Z",
  "key18": "4L3R3BauN7huUMYYv8xjyW5JTPkYprfGuep9f4dbavdoTZmsNtNn5ko1EeyhCjmBCBhqMPGj61n5vCuYYxTaY55e",
  "key19": "3zaQ5GY6Jt8oazauzVi5Cy9xW2Qw3Q97vNu4kAkEcjXaGS9s2XCacLFhAeXHvsKGuakjoW45y6UoiUzg55SF3sQR",
  "key20": "4yE3h78hFSdFZTrnmQ5Jn1aPWDSYJt1rhyrzDx7cz36uKXGYXciEPbWLsZCj3QPQU9PToagcyUcW7ixLYHoKy9yu",
  "key21": "Ansg9uJgZpRPSLAVbxAbtRMdCjegnnqhESFnyc25pP9TeM18kWTdY2fGv1SPJAYt7QeQs8MdfiZhBBMShCrYejz",
  "key22": "34QSwgENuxiS9MQPuiWQBqyxroRytSc34v8vPSAXHLfQk2BqpKy5whTH4oTWotNstbqDvyAcB3EBvJjQJzySDvV",
  "key23": "5uRrWenKcRez1Cey1SX4q96RW7Tpitbk7h1x49eYPaeihPdjyRTbAC7jiihoN5TcCGBYfmLaJL65KuTQuJVbDvSa",
  "key24": "LkerAz6VXH5n2zqwZwCXbhoAYmX9G3rSmFKwE8vhVrXdBtfpPU83cP9YnWErVz3gMab4onkLU2XLfbFRpe6xEq6",
  "key25": "Kk2XJW4VBAWFpssSv6mxnXCSwC7iZGWdfi5TuXLcRzNxX9SiEWnhY8eqSByyigx4CAvMBiseJxzty57ytNpjMpU",
  "key26": "2Ziqkh66e8wXAVzJBbVZ9eL3pcdcSqnGMLgdwiYvYyQaMCi3b1X1mEMip5e8BKFtNLLttwnS9ziYuAQUp6qkL99N",
  "key27": "4pmNnsUxfqGUDb5AnKLtfgJtBARc36KkuQ13tgU4r8Yj3viafGRQfkeZyjdrRU2bgMJQKiqi4j8v9ushsGMQ6hpj",
  "key28": "36hQhYeMes2yDVXJVwDpKKQaTW9xBtbiaKyerDotvtJxxjh697DoyWHoUoL4mp4GExpwFqn3eR2Cg3b1wudYPKAG",
  "key29": "4F5HbfAnmJrRwYQRaND1Cfo8bqDzkwZ7WMUv67atXvD5ZQoZcd1jfYNy4VnHab4inPT49Q9YJzLCTsfSxrtySUzf",
  "key30": "3ffNUbJrS7UH2hMn6EfmhaBGx5Rq9u492w3zUWBV9VNS2Z91DBRXvkgGAqoiEUiyuVBPi3oxgG2CsV8FwA1CHGSt",
  "key31": "4pQSyHxr4hUG8k9Z2yZu9abf3pK2hBRNpfvRBvg1j4fAYPGozr6AgUr9w9KqaK4a9VB8BFBQMzKuMSx7prwVSFbQ"
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
