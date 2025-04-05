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
    "2XXt4RAeU7fUdGmUxQ1VUGRXNrJDp235wTAdsHiCz69FePwZQJ5mT74upWnqQqDnxS2cNLxqoTVM3G5CieJJHaCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c67xXAUmEBvQRfT8VmJhSY5c6kHGQESYz7KdEtJmzeaMDYGoCRSt1KLiz8kXQq4VeykJpcKeXnvSJLmNjmsmayd",
  "key1": "T35wCoSLdNSYpGLtjiNYVLa2C43z9FEiuakJehwpXAohTZ6SRodtyB5PSNVNeuuVUbPQgbyRy1F3Mfi6gqdfnAs",
  "key2": "5nMcb3BahRmy2GscawPwNEwotrQ3fnwGTY29x4ptVU2JHoCVoRSin8XBkr9umjNnuaKy9CGy9NidptMuYkK32sNN",
  "key3": "5mEQzUSBoaghGSLcj4uXu23X623Sdny6HgDyDvi9qzq3ds9Hbae387mAbDpnwS8T3cLXL4X4gVXhd2bDoroUYpRG",
  "key4": "4zAgVg4zGABkCoiZT5gPcgENWvnNK7DT9akcoVxc11pXNMYy4xE38e39uc4bQar5CBjDeVoK3bJTaRWqPKKemLSF",
  "key5": "evZVas4EY79S3Vu1yahZFM7b1u3qmhwixXBNyhsmfyNA9iKLfsPgFUDZNb11K6TZLqsfhF9tdJuH46WuiB6HMdc",
  "key6": "5NwXNHLy7fJ1ytHQyVySKJzaRZBxMLL6omupp98gpV5QCizp6PaxXNEqw9nBbuYYoumu4BgQnHrpM9Vd5ZKCBnoB",
  "key7": "44TYQtggEWCFPpr13ctZK2uFDPDtxWRnMint3tpt3xhxCjuTUK9pwxj54F4zK1Tzc3HdQFfgnpqJCpd4D1MH1SB1",
  "key8": "4hxtNTFEWSmgdP9cyZJuHSFwb6PZuzHW3nH9eTuwDaDXYbxurASo7zbmrnngutFYivtJmLodutkV5hXqwtGaR1yg",
  "key9": "4nwnxLNuFpz6wJLRmKHFpu8qZudLqxmEWUSSrnHMfBuiVJr5W49sS3vL8obXSAYARGe4hq2bDDnQEbmMqxwxnX9b",
  "key10": "4by332zx4huTXp7GQF85CVajKisbgLxmG6uZpV1qox5fbzgJCq561YSxxsMGVUAVBjMHEBSkRgUBfy9ozHqPmAf7",
  "key11": "59Z2JzYGYiJcV5zkS29JSqug2dND1fhUEBEYM8pKQ2v7aciSWbFnCrWzTxCmTuqZTqup6XVnLm6MKbAKrz8LpV6C",
  "key12": "naq3xbjrMEThyWUBPeLPJ16FRBuVcypDVUjuqnM6KLzStDo2gFHucvibqmunXisqxBRr7f1EfGqphm9dHr8Yasv",
  "key13": "HvzJ1jTe5rZjWpeMop5PGjbHJRAEgeopGZiqf24C26RBpJqwsDDxUfJr5vVEPD55sfRK4NZUXgBLoVjMUcQh5TF",
  "key14": "271XSrhUx9TzCoCPNFny6EsGx4dLnGTtKbnCZghmrrhXXekvk7pt27B1dqFxLJNSzddkPcVWWuVJJuQfvsvruC9U",
  "key15": "2TXdH9TWcJCHywKHtKSPxJJXuhVGtLcV1rvhKcCugYPMNn2v7eHTHR2bFfiNVuLEAYNzrdjGuBMUTht6XCRtKsRg",
  "key16": "4c9U13pQxRwq52BQx9jF1FyHcjPbiJzmHhXuT9qMkBHSRT7tHEN69iXLqeBGEXnMCvGu9EZrjhCvm7b6h8cq5J6p",
  "key17": "2Tvcqjy5zTa8psPfyvacQABKiyHzUK8hrbmsmiXTFfbu98CdvXmCDSy5xdcyM2APLW46dkM37JuqrQT4HEd9MB35",
  "key18": "iAbSAbKTonmTb8TFYqUM1kv1884mJJTmRiVSTzCNLzVN5DYhFx25LghyH4qw3WNDNapiQGiNvVfs44E4rNcib9r",
  "key19": "4iPt3mRk8y44kDcbgTksddzzu6xM6qeXCUsm3hWXvpXcLck51sghUdRqPiZhwd26EhiTGkVPJCdy3NkZihninhzD",
  "key20": "3SPqPBCuyHYUyJhsSvNGveHSwPSsNxzxqGsPSEwr61rWTJNSFao2u92kJ59UhabykLakyqme1aj34d8MLfdEVK5",
  "key21": "5sZ3sMVgLGpE65P9cfjJWGCsLNETXh7tjDkALCZ4SuNtKc9SdF9ZsLgRxQDD7Niy96ESJFvncW9anTeUeLSs2bjR",
  "key22": "dWi1xWhdX2QZTnykfi7Qn7LG18s8LZDbTZR571uez6FmKQzZ5i5dwZfxkEvij2vWk8uVLHBfSb36drK5UZf7Lt6",
  "key23": "5Ru5UVA1xmAGy5rFpA4V8dtiStpLo3eU7U3fjDX8xmK6m9dW6exezP6bauvhu8HRTsRXBHTuCN3hHhypNsGHoam",
  "key24": "LzBEP8smkVAZGto5rUQ8YmitgjQDJzTQjVLd1PAyUAivHkTVawSHfKJSCtkF3u9pv7M1VuSDKd9j9kSe4o1a2et",
  "key25": "nHfBTi4Gh3apG9badhmxDNDGU5MtpGBAJjcua9LnCJJhygkkP3DbD13MmP3x2PQtx5QJUKWtKygkdwKxZwM835f",
  "key26": "4XmXgwNhnfkFAd6yVBwxA4bxfR9SfosNyituBE5YyJZCBhU4eCSg4ziL9MyBRa3WJ93C9UQpS8ZNeRinUsWfvPNq",
  "key27": "29kPU8cUDJwLdEZUgxSQkFm9SaRTLn3guYn6hEnsQb58Yv5fc23tgi7nQoF9pwD7doGhWW5SDF6r3CUwgRQfFG8H",
  "key28": "2CzKEVpspdQ5KUz3nwtdPw8NtVK5iBTUniN2CyeFrwdVUMCtAoQHVKBNPyQnnhfUgDAaRyQLxJZeprQonVXPTcDn"
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
