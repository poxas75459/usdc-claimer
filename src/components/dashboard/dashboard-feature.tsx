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
    "3NbH5gwjN8EQssj2tMtFQWMv5KcM1KfGgG88UgNRnaQXUZaqcfX6CRq8jhfqYoDveqc2nQJqfjhHs7mjv15E6oyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NZR2miing6puofTAz9s3pJWvLkXHcLZ6HvzKF3r235aZp4Gw2ZUXKQKkVUe2ah71NVWguVBwDSTGBdAeGwyCyfJ",
  "key1": "3rBdQSZo6pg7gCZzoVWjgjrKttjLjfc5JLxXqh5h5uGR2S6N7wENhuhMkG9TCFYce8bpdqLi4bNWxpkB4HR64a6y",
  "key2": "SXd1dYwxd7aifjLTKUieSfayjjPydQYJHWbKXzRkzee6cABbLyFUPj8L8SjHnGLbx6342z9YM7VuUeTeDPbMNA7",
  "key3": "3b3EJ5qaMVzeGgFxtQijSTSf7uKpzFfRiwDet1p6JdRuTwidNaWjheF9Bc3pe6u65pdhiPSHPrWYT5xUD4ood3HP",
  "key4": "2kALAnqcmQSy79f4C8Dre5K2eEzfEvoo7mBQoB3Z7wBoAS8bosPDN5uoaEi9ohbVRqq1nJSYBxdtxSpByLxP4HNA",
  "key5": "feNnrLzjqE2T2LxjZsCjYjU2ehkbVPbNAvMFcTHkCAGXuMHsc7s7DMpPxiXb4qP8YbsHha31DQcM4a6JMVUadq1",
  "key6": "5YVpeskaWdZ8QSzJqs8LaDhrRzU3JEdTrSrDtiWtvDmcwjAv9NF1QPiMSvx3jzH4iBHso1NYB2ghy2VcX5KqPUiN",
  "key7": "q59ojfrCPj13JKV3CgYwkxcyXPYGzt5i17Go2RZM6HvdLS7kHfGsz7scYnRfLTUD95ak8R77wkxGuCtjcsiGyCH",
  "key8": "2tEvrGxdW9HXmF8goFSsuhiFqHqTN1yyFCcd6J7TH2H9v6x9rFhgsRERREAeS47TwZqW2jrnCEcXaLMtWTndS5Z3",
  "key9": "2wUesPp61b32M2Gwab8e6QAFyfJ8U4Z5UfbNr2vcMgkRdhGe1DE3924jdxPv6bYU2QLm3YTwHRyDV54Ymsok17p4",
  "key10": "ff9xHku7SmPtA63mniTkDAVWCMcWoTy7HBFTsQk4DVNMBPdFnsfA6TRVu3cy1cVZX2obgsyydphRrexvorz8B2V",
  "key11": "3cwuQvzJqqvWaZUSQj4HEHVMkGkLXDKZraCo6sN4y1crWNpJNckSQ13R2C1MKwjZESisp8BYj7YZTitf2iaAHYS1",
  "key12": "2sEjwZ4RXg4jQXbE2RW8ez5UaAHfMhSLUyKeh4Af3ZZFhRbFr6ccFqMbWxGpQ8nqUiER8sH2PCNC6p21zxrmBKtH",
  "key13": "3kYjjkJCiQykjbqGNs53hW6FrykWgAePd44Zbwb7ru5ba9mWXog2f4mepjod1kD165Du3TqXai6PjzJ9o1xfYTgU",
  "key14": "4bhHQXW7vvGqkZRSMBFZFPKDwAy8JKFeg7QY5nroHqmEZMsKF4DwFfLErExMtwyR2CDd2uE3eUrHwE8JzxmTZvr2",
  "key15": "3Bc5TZzmZigJPNBnMPbiBmyWjtFCiTpssUepM6Ru7ZzEsUhpZq53pPNUUAuagQC1mgeaKx8hA287RFSWfUFkwpJG",
  "key16": "4yM72yGhmjdWobwpFuwjrSsxqbtHPX4XS6kZWYF7Jw2krUzAXZ1VJqRnWgvxguN1Q3rjXoZW9Yb4d9EndU9PLGsG",
  "key17": "hCs2c7kxRhYCo9C2G4R3u1N6DWrQQzhyii6yGkCxD2ZsA1KyhycQ5eNypF8o8tfKTxUUK1MPBMbg3X2ne7WeonZ",
  "key18": "4eD9tq64CrJmFsnGFjVVDnJeoq8VUeE5t6aSKZ4RRVKRY7ejK1cENnrHDgFdgzZiqvPtrmfNTK61djF6rZpZVFaa",
  "key19": "2ED9seAoemvkskpRxDRJVuqZPt1RSiTZAXMTqLwaNKmjTHn8jHT1NDzoZWUgvmMv83Bm6TKGamB149CAE3htEUTA",
  "key20": "5MfS2R4hfP6QTocRUtKXJt3HUdBbqzbdghvWSJQUxp1Spz7xVqLvhCChGg4ygm3jxvkedNNFhaZeFtj2R2zWkXyp",
  "key21": "3h5oDDVc73rrowC4xboqTRgo9nEmt67ykwXAaJSWn4TwPT6rdrkrbBkbTYZWixDGVgYPgnc1kTL9wuqawYLeekbV",
  "key22": "53rZrm5PEDdhmtaHpkMMpwZTMiBa6vRuDHyQ4m2nsC1EUa97JZBCKwgLALSsus1B4ReV5EXXWu454Y8UeY4wzj7k",
  "key23": "62MgPrqVHMLNWYrfGwth7kAZnvKGhGEknrYwmpVtFuh1o9a2p32Rw9p4nscMu2EQ7ZG9MDezgtc963d5h3aCvMAD",
  "key24": "H63gyAJVVFFhGhRFimADxhWSYMHbGgMbDYVGYiMDUFtm7YXUBRuSNiypAVHBHjPwnWDRv2T6sAtnX4jn6rECvP6",
  "key25": "39zCR5EnaqF5qDfMSr6tqQsVfk8J4JT96SPnMqsoUtt2q5rGSeZWxuW4syZPu2tDxe2woEWJBFBu9FLRAXFd5P4a",
  "key26": "3s7yoBVLpD94gsYPYYN8dpTSwuSyJdDQ55rY2qEp76o3vADLKXJi8eMeDH9UBegAGzrUJqeHNJHKSTuVJA2mnreW",
  "key27": "FVg9nrPMEw88hrqh73Spbpzb9wcSUqHErdx1Yn9jWUpm4yiUEFLWQmavxv5PjKhCLc3goHzie7ZNrrgkvxvdVm2",
  "key28": "2KQf2yRWdG22TvfugAFaGDSuEUoAhEQF7jc6JxyepdVTRHNEuMP9LypKE5bdYK7TPX9F1YmBYWQ7CzixAZfPehDi",
  "key29": "4dyfNiQDCGYQjQmMueb6egweVdzh4f95ztGcMCsc8uvXg6E6Ntp8912jcRqunNGGx9A3Tsf5tPMLJA4amhYTWAF2",
  "key30": "4ELoLZ4Vf8ucK1KvxvNRFNYS4WZGHMq6xBytHEtEutC2NwSPeYvothhEwB84qEbVxQ5JCA7T7q9BP2CsD3LHUjsq",
  "key31": "4wVTgYktXfmBGQHvpCcjZpQ7B4x7phmFFUoB8w5sA2Weq7Snzce1Cb2CF6XGF5CXA5rJZyNctTuzk8ddJG4UBpte",
  "key32": "KuLfMQj4A5xzQm91MW3o7c8bHKpPUeuvXcBcdyh85YDzbAYkWfH3BwzZyFsXZoSLMqeLvw9NNtMWntViL8gpmKz",
  "key33": "31nD4ombhna2xqYoqKYAkGR1gNpqL6payYVXz4iRBpTx5qZRqsFWkAvKTVQin54v6E1DJNrFMosrr67twGqTHoeX",
  "key34": "2T7pQ1QdpS785GvmH8RBCwKiiVATxVrPnkahnXEWLjxDiEvw5CoRjfAsFYESbqqfTBRUtHhU1xczHu8HAG9jW3Si"
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
