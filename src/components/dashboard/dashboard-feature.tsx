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
    "28WP6se66GYYQ5o7oDW7wJRBbgCL1cE16PzadwHdRs9GwHtXBbCZuvrj2o4fNG5TBFCC1Mgp8MWc4zwv2LngYcsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SXvqoLREuiJ7HFdopo4mZz4TWWAoCyNxVK6fDWwgaKzB985pYrTqVsvjssUywCvb5TTUuoNZ7Bgc87Xh1XDt3E",
  "key1": "2C2z3F1ZN6wejVXYLWeK3FKvoB6vXtVHNDW4mtz3v8tpfV1r3NUEL9vVwTP4wdEPRSN4HGfDmcCMom6veqyF9T3w",
  "key2": "2aMgyzQ9U7XfgjjuxGjHB1MN349i879cwtFUVFYV1xteptneBXD2ehxi5uGW1YN9ksUgSv1U9SdyQZmojSzfKay7",
  "key3": "91i2tCAd6oTGqRZa4LP59RgxkMoVuhVymj3wJ7GpzMbdQiZKbNG8xQtR4xWTneai3Rbn1wyafBmmkswK1Lbwu8C",
  "key4": "3pfENNGpdBaYKpD2FgKVdpfk2NaXbTvwrVwqcHszkRna7SwvrkqsaW994qrEtr1boPcdvpLJQPuuQ99Agz1PbAb9",
  "key5": "64BaSngz855L28enubbJdxmiPXCtxzpkdMwDCySQAY4K5Zqd63qTEJkkSFgNKUqfiJRvA4ZXPknhbTi19s7dyU34",
  "key6": "3VGeycDHR1XsNWRFfnFY8psq1dTfzygc5TuSSDRe5zTrfokyuueskHF4g6rbozk8mVWGJ2NWtzG8kDhUuC6aw6JX",
  "key7": "3Nkvvf6GHage3cifET6ZSJzxULnrmGKWG169T3Q9jEAEX26tFgre9K39SH9risr4U6QadnELRaCitkNrarMwFzHw",
  "key8": "2gXWCaNDP2WG8tnfZj8zgLrQRdfxjQb5eszGarriPy6keGoc7AzJGw2E5hNaMVtWzo5kaNmv6Rd7gmcmThfbhiSp",
  "key9": "3ngM45JZgK9imLJrHsEJ3uvYHb5eAQHceGiKkeXAuWGgC7qrDtpEn6mvnCXLnNkzvfpQZdP4yMvAG7oVQG6M1hur",
  "key10": "4BKxFJ1KdKYjYaVUTvEg6C6eGHxsNqVuua4mWwuvw9gd4FfHc8no4r3XVnfCBwcoweBdtoh6F1VRKFfVRyYGdtrF",
  "key11": "5yKgPMqpFqAtLsbmgLhjLSwtpgGbkrkad9n6948ecnRgg4nx4fSQ8jEtHSrsHtm3Dg48WnqbRk74n9iPs939UAXL",
  "key12": "3K7L21ykxUh8hMzvECFdcChKuWQ7tmzxCJ32An3zyDx1umwmDxLmwjsZA5xaffTwNHLqpn7e1LZDKDE3fXwprZEC",
  "key13": "3VDSLF9YmRceiJxK1LNQ4qp8Hg2rLgSMwJtwrba9XPEzPJXbY2GRWafFTNNwjWX1qZkW6JM83Am5S9ynfNhpWwnk",
  "key14": "3ryoavqb46K7nWoP32w2gHk5cp5hrFaZ5j284cZzJpcqNst5Vm1hna2Yvg2wSoBCvrjGi9b9i6pEqQhy6yks3PRn",
  "key15": "3odp63bBqTDUGNhwhwBbT3DbmoYW8qqpPRc86VC1c7PZ6YDtB7C2E3dDBncLuGC73B1Jz5d7VZcAb12ikRaXALiV",
  "key16": "56sJb5nVfmyuts1r9smp61P9oX9UXcGGLQeKMRpGf4n4SqxHqZTVCFg7GTi1JTqUW6V3t7RhXafdkaBnihZRKQ1W",
  "key17": "2KtTLCW8PebQKyhcCqcSKKAjg4Q455V1JrRH8K9RZWxURUDNzwQaEHLPAWm3b961KnpDWjyFjSDMttaKjcc72CsG",
  "key18": "2rJ4spRZ9UxyncXn91g2pagUQZgWyzJZuM6vAMWexTkG3tW5AYnfgB6JDXvUFJLQRysQxQH8q17pdjRs9gxguNtd",
  "key19": "35YjzKgFDTS7yDrqW877BmFaVStRyrSdrZGvBUoGRSN8AXsYH82VEt2cLn1oYtmZT7wk4xCDZLMksBBNTGgeJ5CP",
  "key20": "5mV6za6AdVtWav1npjCHzzZB6JprGtpsr3M7uS2LU6NFP6AVSWTuVSNQtdVuQbpq3Z393ubUZK14oEwPCByr2N5R",
  "key21": "xZMhSGv9keFY7P2FRX323CK8h3ga1BArrk7wFbJXnBLBxrjBhdgCYAZirpdXxiS8GMBqf84U72dyGqkNj5Ch1Q2",
  "key22": "5RnTB89pWkSXH3egyFJyL9qHLmyU8kbNYAm8XvPNoQfSJG5ws46f2jzrx14EXnxwxkLVwsXbZQKxGNm45fbUxDct",
  "key23": "2E2cAwcVXER5rjsQSnx8ZtJWutUPFsJjF6e895ebYMJAszA85K1rna1AVAANsNPNTdciyi3DsiuWqYf4Z8mT7chd",
  "key24": "5Aezu2vt6H1yaNZfkEzkEAJzwQkwNgbuYbeycERYyeMWGUvuwnE4mXCPys6qhj3xVroRNVbXUbpUfG1WzvFLXKWK",
  "key25": "3aBP8S1jjxQzaWKFJth2LhVQZju3Ev6bwoKv2c6xwwUmEHxUF5piAfUH5sPw3tY2ZUAcT7NTGpQ2ofpjBRXM12bK",
  "key26": "3us46ZYXAmnwsh318YbneFRSpEosQDxtMx3FuLyYtXzy9NjwAgVD8Yt2CWGLBk53nFMdnsinMsChuVmN6XEh7Pkw",
  "key27": "3u7ghHmG64FTyJLn8DaPv6ogWhE8wd1mSR3rmpK6JNkuN7yL2kvadK742Y3sXR5Rq6MtpfMWXxSdnMhCNbczx72P",
  "key28": "5XaqaCson6crhKehyPf33ZoTvdE1RSKksQHmwhM5FuqrsYsBhKMkbN38YUriy855ueTBHBcVzAZRFB7wFBWzZPk1",
  "key29": "5rVHaievS7LbBZqNoCv7i92zS9PV2Z5MFputwuntjqhz4svLTmtnU2JWcX9pVt5m2nsHm4FBrDi1DWLPtZn237SH",
  "key30": "5eLrNuNT7yFRfGQqv5nQq3joFxZmnK78SCG7FRZ2pPpk6YnkHeJWTSzJH26rgngNaZEQyL5q3aqRuVZnTrWrmieV",
  "key31": "55iL6HirU4YVij1ogQcQhRqtN1hNJPR74kBYV3p6uMT6BpSvsng9yZcGtvqsvdXWQt88xW2Kd6LjcXZWCs4qfqM5",
  "key32": "2C2DK6Lj66NTBSTqKr5am9naXyycLpGJNCEfu9iyhtTkc9YhniptttYEYbnBncufp22NQzakSoWkY5daQu2yjyAa",
  "key33": "7R1Goe8iASeQ1jh5ejvzHSxoduTYcQbGfYoqPSMdNQjKXEYXBmQkkHvNzCipdiudyY7D45zqXJivkXNdXYiLnA6",
  "key34": "5cvc4zcPJ34deYc56juEPv1q1d9ckxFy3uWfQMkgkm1nb5MPrVKkadswdeqGHkWfjj8uGjcsowET8yJGMo85Bqbc",
  "key35": "4L2kFmVo2G99z5vCkxVgTBytN1N1r3UUF2VaWoUBmrSGF8QQ5TgUZiCHv8LUNJ2xgUJHPhtdyhD5ZbhYcHRNXXFp",
  "key36": "UQCdZiGekGi9wLgeSQA6XFcBesMt3qf4bKMejtxubJ1boUKYLesm4npKRzUfoZZXadiP6n9ctLRHg8o6oN7thvU",
  "key37": "4rwbVHCsAAnoH38RfC9QfN6g2AtszsYkAiSVfYbWygc42jWG6FHqxJNjtUJG1AAGtCowdq9egGPwZL86uq3mbZgh"
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
