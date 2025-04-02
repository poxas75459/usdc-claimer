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
    "5Gk3Um4FNjvBMtv7ZnTritMvkK7bf1gmk8vDZLaHNjKQ7sRaeWWNFK9Aezetp5ao7fFtZJDYAJ7gi8TPzmMgSBiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422K21hBem5edu3hNkBRQ2aRxmTBssp2PSsTEvM5qzQXXXVSJfusc2d2ZwKArWBhjSFQco2XG32CyfMUqqHWGrVt",
  "key1": "5ACLFE1mzxGJjHZCT7JeyfM4QUUun5LQKFTD3M5hsDZb5w5WsQr9KoS4JbUWGEQpBZnEnSM9aFzgocrpkZbc8tZS",
  "key2": "XuikJe3YivvYVzekPP9pAeTxWJXueNtzrMqQvv3M43jjpmkkVEbWczmwAzZ9oAqPpUKxq4wL2rH4f5XmeWcREpR",
  "key3": "292yxpH3aBLF7qLFdPWKsskVMg8XRZxPP2QpUrv64iDNGr6MijgsfPgje93vJWYZWAC15J2AFmuJ7ettA9tN8Qoc",
  "key4": "2eJ2xUpcr1w5KuryHrQRJTZZJPKKgWL3EhRfeXxynFokQ9QnrU68gNWTiUwL71Lxu4EVTAWs1mzMggKwrEo8VyWp",
  "key5": "5VBkZ4WkVhkkN3Kg8WwAU3kYWEtx46bwQdcuSSMigXovKq1mZLt1HbxZeK89PXn791FBbA5snCgY7N1LUFhRNLFK",
  "key6": "vYwXn2Q3ch9W5MBzv86QyZX4v6AzAfZycW7GbnXhpULWZM2tEuTihyFiGXk196KU7EYrUX9WQNmDoF8MeHJcKNj",
  "key7": "3UP37f8YDBAHjETtJbZ1YfZDGCUVvPrUBXW9hpitJEP8XHVDzHXSaq4kBJPFCQkvQeHA2eGo5Tf8fy7ZF8E1KLGB",
  "key8": "m1QrpeE7BXP7HhaJFXWCcnFxQ4w25Efa6Z3FP5tsnmxvCa7rSfMjwpuf5TcNZkgqRCremp8uMch98gco1mw6pQS",
  "key9": "49gUGgevCKd2RzR11ia5cXzhifuiSWwd25PTadxmt937H9f5ZM84xn1DnzStf3wFS9D4Kw2FxuCG3PjQb6gvZrvy",
  "key10": "2NPHZ97zM1itUF2iD98dkXMC8EH6wmh7yaftxNGv2RivXga8CAiXC6iQ7Xkmi51r3d1w5TFJocK4kPdLxjLKB9Ya",
  "key11": "5Hbacc1s3J39p4EZXtj5d41vXJ1az6uiAEGB3RUEGoMCtZTo2u51wHv9EBace8371jbGoMLkLnVQFC8THGv8W93t",
  "key12": "3SaBatCP6NgrAfgujjrxpRuCLtnnFfx9oyTnfeQmZkH2yh65gicYHMQpisoMnDmZ8yrU2BRrC5itdpx5G98cvMax",
  "key13": "RM8rqtXPKHzmxcJACbPJHS7n6ro5WS2raDDXur2orHBkFymrsc2wqgMjfwPdHvDBfH5aPFD44SWGdnbKPRaGqsP",
  "key14": "45X9PU6JypfMm2e3B7c6dsY5xUAL1Zwu5Lg6r2DW6v8DGZCaVPMHRPmEdZ1RqoPnQ1tYLAbEsMmgLS4guj51WVyB",
  "key15": "NHqLVzV4h3d1izUCRgV8ptxW8KwFgqb5DeX3jbhq6TTXH5ArxLmVpy4VB87surMPprdqwBQSx8HXEYpyQJoAtgm",
  "key16": "3xX96swMN4dZmqn7LK1xCb8VnG2ms9k5k73cDcxzujko2MRzB7KA9x1wDbHj8TZrxyig3f57hFeUCJkTjgPXZhPK",
  "key17": "3QBbnZcQq5RMFt3WVk7BrqqBxqdp2depmdUGGpsbut1UQyBZNBqMfzzzgzdzv7ENEXFe8DykYtbqugvMFmy7GMpn",
  "key18": "eH11MzrFALGbWBFHap3qCLudnRsUQAWcWE4v1Vya416TWBv2BsyqWrH4RRkETXppucRcCanw9axfuX6GWrRxDzw",
  "key19": "3LdtR8wG3r6tgg11FsrT7XbtuqoY4jNXozd9LpNCLJS8jfJXtuYo1pNwHj39dtQj9pw1QkCgUqmMgu78p88NG1z6",
  "key20": "584fjZTSymzr8jbHajv1AhjB57uqT3xGDQFm5rTCpapdQAdFQVQTbQfSvV3fvbm5SFSXD1LiCxKXqkma5xYcUWFj",
  "key21": "42zd2cNafQVjNoZwwPqsKLACBjdvrqpfvnapa6cNBSMkvEBr3G27TBktxb8CvwC1NpNN8oDtNoDhJPMWZ98DfJKb",
  "key22": "4dHsiATJom11zyoAL7ueaZJBvgYbX1XG78ZpUV6PjwbCC8QMo6ysmgbq21Ggy3DoogfDFM5WiDMFrLm7bjGT9PNA",
  "key23": "4Xh74J5dydFaZh5ZtapCxZiNDAeQTARAaXGERjL6BoVJ3ySuu9R5738j3vE5DQB4Cpo7AT37k694w2gQLhtpMycQ",
  "key24": "2LQR8fWT85v2eScvfW6xYLwTHiE4fPtPGvVGsHfPwPJaH3gRLNZEJzThcUebiRXxZNcJqRUyLS7gTCYrsskgPaqQ",
  "key25": "2tXnrW4nhH8MMWk6VVmS97gogZVjTpN6ymqYYDmhWiZ4kajhyUBZPPf1QBpvxhRB91kV5RvpUxLj7PDx5PNG4cYQ",
  "key26": "KH4gx2Hnzd2Xi7SQqTPyUVuaoXe2egMkUCau9eojbz3K9Z1y91NVaHwo9YtayKmMxqK5i2UcU324unbmozcwcV4",
  "key27": "2ZPKkuzWB43cNLbaGD8pS5BxddPF2784DaSgvodS7Jrz1w2goKTpNTf9nLBbeZKbhtqEnDP7vvghogTHA47N9QSg",
  "key28": "dktAxX3FtNMj8ohWcxiRAd6QFwzVm6Xs14A9jVdP1GVfraHVZqvA1TDxZXPgS3StiZfZbK3j9eKb7AvWt7JA8t5",
  "key29": "MHWx2iXais9yByngHUsVSPsxhuiPj9tEJsrrKur71t2ThSZi82SvFGfmsyqmuGXi6DVcdsz7hqJrtmdkQGPVuCT",
  "key30": "5kKFnJctogVw5aYNpmNG5yePLYgaQK1bHuvHPgHmmQPVMjYFHNvMciwYq7DSCcdDLw5Q74aK4FH9w4HudLKqGhJp",
  "key31": "5hsrNtq7gnrVHWSxzY2BydGSAkRVsqaN3pFieUA3B1GeKniwZLxvUfMM7n5Y3mDAGMiexVzfXNTAytodQLb6Agjt",
  "key32": "4XanQ9hkofNg3ZHYxUqStgmtF6zF6Lh9wMifq1YvYGdViUoZ4gnPm2p7ffp37xyFzHA8MyhJtQsHRcLgdqQBsThh",
  "key33": "4zendwABW4Mn7fJwEue6BRkcBLzAoFJ8PRWT8N9MCyyeCipe1xpn1qNfQLvqQrAUcLgQGTEe5TjY3XdX42cRUSKq",
  "key34": "45fYkjPR9ngtsom8G35M2wErXBoBsmMN4UYe9oLCRdg7yuM3KAFrbLFVL9dKMA7KUVShn1pug2UshgMnfwhqJSZV"
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
