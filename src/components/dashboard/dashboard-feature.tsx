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
    "5Sk4G7NtS8VviSDavkgKi4um6tcewQagzP78xLUF5Fw7fjcPJPXmtRp84htgMHHc4huodEYyBDzNv3GyBMBxBccz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LeHgAc6bRx9hH81bzkokcKs2HtKX5YN5UXSYdR8fqMW5MH7tZZGn2KpHsPCBnoNhWUJ7ZGghayz5hazV5S2C1Qc",
  "key1": "5s6TQNVUbfp5CW2pGtjkj3SRA4cMYKQT5df9cytsQfkczRrqmbgvVXsbbAC8tAwNnhJxLyKYWftnwoKkqPzYCWaz",
  "key2": "63xQKJmMaaHW7Wx7pRuacQ5bbctuvsHEWeE79TMgyesMVqAZSShiz8L2zQsK7AdjapCEJHJWehftBoCAV2PazmfH",
  "key3": "2eQrCqVx5qEfqLedAqNCR8hvG1KDKVEF1zfG8nWu6DdQ4go1SkggXVHRgVQUKE7AxY4YE2opJ1kDsK4Dg4BY9gDX",
  "key4": "52Y3wZfDaqpFDSTbvQFAZrEzdn2PiW52b7fMJ6CnrfbrK2peSNjvyyZRLhC7dn9zygj4WcryKqKmvahhdsxj8n2z",
  "key5": "344obDKsnu5dQqqSuY2YnpaATrFSYFAkg3GxPe88KiYdiKSd5hoFvufdEeHohxFWadPzuMGP4Xu2hbLQCxoApWKF",
  "key6": "2DDZvQXWcrJTnhVdV5ZwZaWPyZCbVRiauzRvXCzq1KdkuFuRLGBs2m12gbdPQioDr279a2rr1xRetb23VeaG5aFn",
  "key7": "mG8uPEedpWHXH9SzhDxNdEGW8hq9rYwZcLP7dWrvcydHR5FK2u2ZPGykkgrLSxcfvZ8TpuhpwrXL5AVdppknxDM",
  "key8": "PH1PWogo31ZpU3mnr4z2rjAed24E2H9GeyQXgxAK1WHSU6oC6tGwhZxra4wJnEkYDQKAZAHtiWCYvsT6mezivrj",
  "key9": "3c5nER6dSj9wMjshKLeMoaZHD48yEfJDrsSWD6JbSfbaRoETREydsWAMHG9Hugiqw6vway4Dx5ntoJMsnf71Mg2v",
  "key10": "4LnoEf9UTtsifgiNZ5Yu3UovTzybHqYKqSuTvCZve7TTUm7Qkj3jVWpsrshcjvRwy3qjj6VY8w6VxXZD9g64V4MP",
  "key11": "2PSLfQEYVE4ZADNTYm8ryNNBTTfKFPNqC2oRJFhfJJaoQehZA3XbYWPvGLHUfy7Kb6U7Ps5hXLAZKCFDvfzyMDUh",
  "key12": "3uGsmceper65VgnujCKhYugGaZka56cSfTPYuf4yZiDoayC6bBCUWq5XjrdHXTYZgsVPS9pBPkdwNeEYXPqMTojg",
  "key13": "5qYwF2sPPRXXNASWfkTnTZJmypPaTmJow4bwfn8RbQzqTp2mgpJvDdmw9S1VjTfehaYnN28KqoW1jq61k2nok7nS",
  "key14": "x96RM64EfRugQbaWJ815afm5BMXHsF8qVpMADNGvmWA1Gaz6tcd1UYG5ycperKXnWjf5VsdawdaEETGHyKTLJcN",
  "key15": "5ef8pPe3MeWUpzmfJe2XDBnGAypcwrsSb84P7S7kqLxzar1imDnp6avH7k3khBfkiKyhrAse88HayaUKDL6itwMW",
  "key16": "3kzYkY9CZg6xmwdyY2vtotLTEguVz2oibz67MztdxdFU6yPLt7Hrjsu2JLp12aXB6VPReyZWQGzXui41mGiQFdUu",
  "key17": "3EuYWk1cKtiWPjWVf5dTFfJWM79vnPUTv71EAQRH8HN9kDtDfHzMpCxZHNpdMZwuMkCj9mnip6cCKXUCUhuLEJZq",
  "key18": "33mapYvHCkbFKSkB1XxdmyAyFb8WFkzzv9uWidyegjcjEH7RhSwiJL7gH48eP6tqFMDj5wjhByyhqCprXGq4UnLH",
  "key19": "4gpxt1MM4Yv8de1Fi78JwAWTgituBjcvUr5QKCY7monTw4P7NpB6yiQumU5bo5PenNKS5EK3NEskiBbFY48e6ejz",
  "key20": "oJZKwhtLRpLnUXKEry6hZSmZLbx4q3iC8oUf3JaoEi7JYMVqvQRsUasitN1RTeFjbt546wNvUxgEBiSCAP3iVB1",
  "key21": "3Qw6k3gNPpZkDHHQ4y2hi4Yi8mCoSSQJ8WC8FGdWLyvDe1fus3LhVEfxSpsPZ4hwSs9mSmatbKBdFpEFe1m6kcyJ",
  "key22": "5PMUEDv1hg8YPtUSoG68nuyaLzn7aTVxReYJXX39S93TLSmFJ3f7WuwWQ2i4WisWJrmjojz4hKpdFwAbPHfuDgFZ",
  "key23": "5q7t1g3WpT1YZvL3tJSJB9rGZYFCdgFK3VgoL62Y98wpaNz8sVnYnTuUxtyRB3HqkotJ1kgV3S3yrtz8e2NdmZwn",
  "key24": "3bQBescamMHqdPekWoPPubEGyFEbavtkz535pQtaiqnrsqc9raKiXqW3YZkXzXef5aAopXZYgEFQSzLk9ZauLbWw",
  "key25": "44MeRn8oVLWc6pVwxKLoxkQPJU2hTKMuWZypARzNUhkaeCgy5DVahYRxCHBUK1EDP4VxeDYkVLtv12CVtR78x7Gd",
  "key26": "4KNUEsESoh8SV4Bh5pngG3HNGQNS9GqK1qXPqUhWBV7iwjBEdeGWAZL5Ev27E8Lw9WhE1x4Rzs1wAozVkvq9DwmA",
  "key27": "4E2pjxzd5QHFmbLavLkLCEG7gngCxVVDJvaFXqJxiDnohn3RxT6o1zsCjGR4e2xX1WLzYJRfQHM3gyV5ayXA5QC8",
  "key28": "27A8Qfs1K3YtmoSGbc4auypormS3eSV2qFZZ6H6eMdh8xB1eo9iTvLZpti3YoSyv4rdzUfNEAXvdxegANQbxrJwQ",
  "key29": "3nADRyM7okmpXJxwv2HBPmVaY2wh5UHUyxwNNpaYLa8JZvQ2rpfi1L8tKPdX1VvSVtjuvKZY4rJLpABRFaQEwKPm",
  "key30": "39XZYFbJh5rqGSuruN9NgrDAMZtTxdtJth2gqNHbKEoF86aQQ2GiHbv2pi4sfQVgj1b4J8WMSzcxUBpCQUc7ja1k",
  "key31": "c5qtU5GiV3UcMdWL5RPGMCRC41a5o7YBaxnbEb5Cj927tX982Tj4kxZG3UnxCJpJ9f7ZhqgeDAfQxZPFRa6Crz8",
  "key32": "LY6qsTSyKyUaJnepo8baaymVoYxkp8hEruZ3GqWbY9U92haCfjjdywRWvG18rr45dFK27vi9Rwr1c4HEyMdbgG8",
  "key33": "BvQUoCWAgbjKWFAgHAQv2t4hD67Gn8FVC7NgYp4jaEXNGi8jHgSYrTaedFeViwPs16LNtJzgF1EjWyibvMi4Bt7",
  "key34": "QfNX6FKk1GkquHE9i7n1Nbuqhi5GT93Hjd5oMh3pk9NBaNXsVYCEr9swmyHBfWw5fJxRBBn9WjRUkEwBuhF9ZZ1",
  "key35": "5Gfq9heuL3exU1vS7kA6o4rhMV3RfXKzUttR56URGEHp5o9ccsfhEnJdqwBqfdnrtfkaVr5SQMGPVtJRk3TDN2Vr",
  "key36": "3oxaMWQPJXQp8FzpriufvjJ5fZ5nSFpA3gmra69xTiAxezoje4u3nQdqf41STbWe676Y8UfUdT8REoM19aAr14am",
  "key37": "iLdYVuaupQSnLZFbGH5BAzRn3fkkHG6Mb8RwVu1gygJARa3KTfJjssCrstfvRGtqHeMogop7consn3TcfMBcwW4",
  "key38": "4u5M57k2SFcqZXvrZR1tFumd5SrYLKwkZxLKAAukMHixdopvttgh3oAM8PF9EwswRoQLXMBMc8Wk7QoH76SVJzJv",
  "key39": "7Nb5wSG8Hh2xR8w6fEbrVeetqRgsoRNpakNE8s4kZubC4LTcPvhhtHp3k6aLZX6pfiWo4orerwoiHTRVCn7QyJB",
  "key40": "2XqifRqprQDHnUcufK2zUgwzi2jQ4GGpHALNoJ7m47r7jSFW2akmJzQxuMbMqo3copUKHg6ep5owJrDRS87SgLJs",
  "key41": "3ZTUbAsVzZUWkEc3JC5EVMFvn9RfmgyaYp4bW5NzVWAsKFi4BRdFk4KY3fmmyuP4RKvJwf5kpk72HeZK8Vgnx6pQ",
  "key42": "3JjdSsiejV7zVbkzBmuJjKXGHdU9CBk6e8eeUetKgfX4zTWYZUDBga2oE8zhCHXFHRjgF6AAawgbNaf7857BRzxJ",
  "key43": "JvP7uX5TYi6pBcKb9am63eeDaqa8oULReXRPdz3gtEXMAk6TgmQ9Y1hi9Sn7ngxWjXD53Xf9sZB4Nn4Y4j7Bk65"
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
