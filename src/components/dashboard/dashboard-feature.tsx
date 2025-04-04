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
    "5QtwcfuTi39DFNP8R8ydkG1T2hTLHtqMU7w4tc6af9MtjJr8EVh9oZC4fpn9T6pNTE7GGoysT8NC2TdLT9Ngj41j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ey4427yAvjq81SsnEViQ9jPoHVm1UFLxfjidgyt17eBw99wNXUZyknCCWAFn12FuV3zRCAzcCrav9fKJtwWLLGj",
  "key1": "3pAW6Xr1JMSLxt1ezziafPCN9GAVedKX9QueB1Dv4yvodXv1DFKoZsECQm9GKef7vpHotTZVpRxZs65f721ouToK",
  "key2": "ZMkvCPU7RRZ63HyFGZ971gsVdvzZ39MaSJ5Eu17UxmVBMmmreNtBsFNkXFeGYooDQefgjCfrLUfLxDaxwrmfCzw",
  "key3": "23YKabj9ALdpJ15ny25vLBbJcE4br7hLyyVY2MYiDPF2NHDoHcgvNoq93Cyg8p8CwfZvAFge3qyh835Dr3rCuo5w",
  "key4": "dToPqXAkMkfkiygp9c1Fw6bwoWXBZLsov3mvfTCAr4S8wTWujo8ewzaZnwvmyv7f4RQj9LTf8DNuzFfePoKBDfW",
  "key5": "431srhRp8DDCXEGM7LVG9nUp4nYouHGhfzc2eWgAfKkPi4jU6K8d4jUBVsvFYVbbZ2qtNVf8VQ16s626jEo6RLwS",
  "key6": "5y5tHmFWcNNbneyvcosidh7jhNpXu5ZgpzvStUfznX96iArv1vD4YUxE7gGmtCx4FbiSw9vohj8FWu5xst5WkhXt",
  "key7": "3QVBQp6SNo4YYQRznKWAEdJ7SDQAe5FDt4tEFWj4XjdHAXiReRmsrJYSQ3HrMXW1Jq9dhaYGdo2VUG9muXVPcFDn",
  "key8": "3Y4bLADJcdxGXWJSG9cn3hEVuPw442esN7vBnpAChiPgKG6aTpTvMnT9WWZNFQ3ee9BF1MxF7UcJtMC3fWC4t8vW",
  "key9": "4s5yUr57zLNweXoz5rEDN6BoXxUYcyxw5fJEs73ALutkdNYsucrtkGTzNrBGT7NuraPewjBsjTGePuRejc38ePt5",
  "key10": "5D7zZVU25J3Ttkv7T9g34bzFQ3H25XzfVjAsBS51fMUD4srm8WNWXBUuswnFdcAfyZ1BUq6Wj1yR7yiwUaVNTja9",
  "key11": "5jQNn5QAJGsp3eeoP4hqpj9be8pjdRTKWdYE77zxykzb6ohdRiCyooLEPLhbSxsdyTDbnAsYa2yuXYLARnSMjtBv",
  "key12": "2rLmWcVvyrVXuK36X15oU2WZyYDdjSVU4fUf5JeRXrkrbuYyJThPxeNmaHWAeK5BTHC9L75gcnp8fUZDQ7fsTWBv",
  "key13": "46qZed6XeLyVC9NY4ts8QYBWpuFoU6wpo8gtXYoNxEw1iLKdkQTat1WcZBWVaNVbVjLXDRVCk5xnjTndcPCcM42c",
  "key14": "31j8Qnv6q5acLqfVRDGU94cMjEfn3K1hxq1J58ygmmNhu9JQwm7XzuZgWZQmr15GKGtE9JAPXXDo9Bp4WpuE6sdk",
  "key15": "3PpPziAMAgGKkoDsUMD3ZarugRx3E5UVapLFgrj9b8b5q9c8tyVVcQ7adrhHtpaN2NK7NQGRDzoWFokttBoyy4sg",
  "key16": "3EGB8AkBzjQsiGuCf82xCKZc1KycQwxCvcYy1CmKTHfV6bP46vczU5NXU1BSSZrDnAKTjK3Wu8GYCMvcUzH5As91",
  "key17": "38AGPPgGuRjaf3oaiFDw5xXVKSYjTDjjB8s9onEJfreNUwmXSZ81ZrtDkYmzzAqRcy2NpYLu2sHj146d83RbHPas",
  "key18": "2PPWqwsWjCSsPUVNjX6rq9AzknUvJkDibyBZeiHaJ6cjdERRugt5TDzaU9wkowrh8pg3vc6EMAZV6HymYvDJXv3E",
  "key19": "5f4BJPgwQWq49TWNJrBNU29YbKC63dg5CMcaPqSzwyWwKnGicPJQ3NMdFPr5Ctd36JsqBiBaPu9hfqRGQLnkPrKF",
  "key20": "HMg5sqb1rXmAuq4zT1mmETvRXWx7hZJ6Y5W5d8MNpMLWmt5LLv1Vonaqp82ZvTcwjPgPgRHcrS86vTMUS6R5tvP",
  "key21": "3ckbCF3S7ufwJGd3vSbAgXe7dbx5idWgA3BdRtzTs9RKgTQvo8Kpddhy9BiujVe9rte3yJyiSN8Jn7cqKWxF94ff",
  "key22": "5b3eeVVnuFEKVLb82ZjJuttBCABKbgZQtsri397111Am8BdkxKb64rRjFABQAGiNZCzNDdboDLGLJi64LciJtMHX",
  "key23": "5DoGMArRf6uXsafJm7BwDqwj3ui7NcTjnuui4Y5p2oGeTv3ywMYfYWL5FmTtS5UgQbpnFpP3ACdNYWfkhDx53fid",
  "key24": "FKcfFvhG1sxcHZCwYZMQeJyqw28uepkWhZB1d4hHqLWcTTcMjsGswmag5n3Qd3n2CboRGuk16oNThBvxXzQK3cJ",
  "key25": "4XHK3ZiTVuQcDGE6dXeXypW3bsSSQrE2uPEXrMcJy8fDs9cDoj9EWMR51g7Zu6S8pkci1isnzpp8wsAZyYgiCCYU",
  "key26": "27gUfy9YA5TPkNAdRTnyTUBR9h2ckHzK6ExrVvNBuJKkaKQ9qvgTHNtG6eYiPwFPuVMas3NJeQtMsykaoF4oYMAd",
  "key27": "4NQR3cy3r9jiXUqKR96F33wR3yFBZ38678CQP3g4CM2GXFsVsw24bQhR562AyZRBXNYvFRwvhEx7bJyw7b74GcJ8",
  "key28": "3ShKKP14YFZUDMjbHjm9sFWTbXqoPRwQkvYXGxy6R4tsc6ajMB7ZQYyYVGqXFzdzAnSdo1voJcMvXAhWMQjUomWE",
  "key29": "92E3MrNBaGvysur7ydd5TtCv2CKFSjzGy6rhHn4UkPyt8vk2W64VQmh5RJb3uofEmJ71THYv4VXUkPi3xGsyatp",
  "key30": "3FWX3kKvohkA3sTN5mid8DQsykkdzrWCJZ5d7Q9J73jZrrYBRR6mSzP7D9T8cSci3r9UT6GwV4MfCtWj9UqrD85Y",
  "key31": "2Ms8g2zSYpLx35fuYMzcT85iBjWGJyhW1vZBS4w19PaFWikYuQqKNQYKjsPY1v21TbtBprPuPr4E7SqNQ4ybZJLg",
  "key32": "2tcguoSuREhtxqmfyg62EEpa7tU5N2fTfsDctbjdPSPvhDLbTd1wqCZgapJbpRS33Qw56GaMRjuxAg6xtSm4aJzQ",
  "key33": "4wemwLCoRLDD1gCvfDaQrTQnxQxoKVGuboTSkuyVnWntixQkAtbnesgHjm52nLfdbCmsHAbwTdEjMiLx1apWc9pG"
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
