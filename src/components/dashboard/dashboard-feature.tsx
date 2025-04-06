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
    "487sUWLrXBcgMSviCob8kGehNfi7MCcuKBW8HUuRNpnTKm6gkbo1MjitvbbdwAqnRLJN3oGsW61qe91Be2juuX13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2EX3CcQceh2hcNB8eDEHTHijLF5qkuvqpaJ1sw79Ngx4gSsNPnZVX4aWqXM66nBzPsMW6yjJprqEpshSDYWbtU",
  "key1": "2doaNcAaMAS47WGvkdcrBZFFHPQUpKscc31QB9a27DyKjPnmARV7JYd4BfNoo7s3CbByYcgRmoFBVti9ftQDh6Jm",
  "key2": "W62GsUmJFSH48vtUxqVagoXwJZNDNP2T4nA4LDRXukD9YKtK7ZKTautk7jrbw5hSZkt4cCkGrn94yvV4nN3yKbE",
  "key3": "29ZZFwh9sqe8sBvfDxC6BYLrx9G4hT9gHF9GNMEJ9A6p9QU5zU7pJ5UAA5JfYDs2cSfyHAuwqykZM7BP5kn1TNq4",
  "key4": "oGSMdUrRr8j53ASErb2z9FwdV4N4QCwWXVrsphiZ5hfN488sbW8hAmiW4JbWDYAG68fs2Ep4tf4yuUSUWSJtEin",
  "key5": "4vFxmMqhG9HHVSRrmwoE7sjyCxFcZgTqSDJpEWxoZUtsRc5uzupHBNbZh3wr7cmqfTzKkfNa9GiByxdpKGNTAmLo",
  "key6": "54zL48rKC7gwoaWhcjudKX2xd4XwUS3j7J64JWWsGjb6NxyRx3zaK84HSUaEpdB9dnDYURGmpLJCPMKTe6UALPH4",
  "key7": "5qR7WGv2Qh9zf6KfhVQUoe5CRNfDVoiTwLAW4YLrAgcJnnJibRLAAnv9prLMPnnMGbq6zSw7P2R9DgRh3pvJka7y",
  "key8": "3rRXjPZ9TsksYc4NH5EmN9U4NRpt3Amz5YGZ2j2VeMvmjiX2PDSm1yKwY7AVNY7xoXBQGG6qgTsH9u5DSoJJczph",
  "key9": "47879B2Bns5q6ptqfuoV7bdCASYA7ao41BLgfUQ7FfjcDLwhDrtcTX6Q4uLQiFXWpmRfSzcBN8bAGh6Kvhys6b1o",
  "key10": "5PWBQcH1M3wY8MRhBgpNcdZytazF7kcRsyTLmJ2y6E9mXFv5bdosgUb3SeYmHmreMpVJXCpe1qmBS49EneZo24pR",
  "key11": "3buQK4ThybAfeYxGAEzZsLP2tEurnVgCacoWP4Bo69uqR74g2fmwnxYR6AkMNA7jmkkfkcd74N65cSYaHybYnGV9",
  "key12": "QxyXaiMsixsNPAQtXScy7sEm8UHWp7YocYoR1AdhBjfCu5R4YZHMwHJbdLXudPazj97qrC2d2XYSeUxquDQCAfo",
  "key13": "3wPfH2xkbzN9bxUnnt8M6pSrrk88Yg3UZjH8rWxNFqXAFY53tVrpcSDgUmK53znZC8aKaeNigC4k5P4c2jyon4oj",
  "key14": "5jk6MDUdYtHUWUDU6mpEZgMPrRZveF6vBMedo9eNTCyYJqYode2UBUFTRJ83FKfX6mFZD9HhLiatvELMAt6tvKFm",
  "key15": "RTPLVEM2EV7A4S2muUk39DLFparDgtshoVkAXjRKicsoLC57X1a3FeSa8EPdbgUEyyv9V7LxCAsH8Ka1mDDwyhq",
  "key16": "xrHYVWk1SWD7KigwJ6qb2RgYCzXcPC9z7rNqCPNoopRYC8i4uis1ym63puhrit5j2iGnhwXfdqkjucfD6L6BNPy",
  "key17": "2erpAFLPCd5ZkadzVo3cSNqDf1aNjnP9ypiAVzW8naCLmQz3SQMu8nbLy4agdLzpa57WxJhF9CJtYh7Et6KF37HS",
  "key18": "5DNpSrwtz4777qSJ34KdZTevXN5tBqe5SbXiddE8CEcEs47DA1wGEjeYX4WFTVCePLL6BBiYZZfxe9q331kXDYrR",
  "key19": "3DcPQY4KVwgLtbYNLajcUCkG1Zy3qMVvTAYCwRJWYFjiKd7LUSkUBmgunT2xu7s36agQBLAjb1pDoPpzSUqj5d9y",
  "key20": "573Zm5TfoF5eS23D2PNwHXvH7hAAr2o5t8j2xNQLZx14UzW3cKrWvvLKeXM6qzUMGXEpwGtKVNTXPSKRXDEoyL4P",
  "key21": "3v1Znoj3dBSKmdCfBk9ZcHDfWKnygEnryo3GYqW7jTKpGPkmXjsBm9D6Y6LEFrtKdx1ZBjda2YQYeRJCUoNpfkTX",
  "key22": "3oxdXYa3PWsL7eudSyRefuqZsNuLKsLJTUpKV9YGgkaSJYssuKQhiBAWBkNDHSkeLsTjH8B3FtpgR9JkPGAGss9q",
  "key23": "3riqcttzZXA6cYHFw78XwefDXD5tJyZT2MNwWd9vHZvFZcZuTYPvjQ6ktt2tRY4ihtjTsdBvT45iNGqSaYT1e8Wb",
  "key24": "wo3PV6gyjbHfFEYh5fENRAkpQwF3kU41wajDnm47LkyTV2T3UwnofMTX9QZYQfixigevvgyTFwAhCYK8nh6mtES",
  "key25": "rXBiwejpDg7hdBbzMHoXXskqih7MUzXrxRD13yD3872pKuiHHLf5c9dxy2z29AUcKWKQUY3LfTEQzphQEHhc3C6",
  "key26": "3rmJXmicvHj2GP3bqmpt4VP81EXffWb3ea4xdQTKSg6fY3r82SnHSHJn3CYU4wpcrsmDSsMQbNS8o3DsPiwSejzc",
  "key27": "5dTzDfP45hEBj27whgjaGAArWbZS88bXALpZRD2Ac5yUz7CJS5xXG56XZHQMF54gFPvPw9qnLJFDd3WbWbhk7xTb",
  "key28": "5nCWB28FSfrHanrrLhhEFu2XEEAanAn2AZxwzwGLxusxCTHzAA46My2W9jqCNTKhKvQDocfMCYKTUdiVcxoSe3ws",
  "key29": "5i29V4kDSy8zGKvR27e43h2vD7GJ7fNyRJ9E1XJjkpzGPCHU6xxnrNZK5WZxNhYB33fBjJzeBJFw682Js5oKWCKD",
  "key30": "44USSf1R5JbXzhVz5Xgypnjs3QCgSWqiBGQMWkh2oZC7TyukBNBFWTNtZSNh6JQFcLUj6z6CqtUhh7eDEB98d5up",
  "key31": "4FYtszvZo44JBLt5w3SZxWgrzAsDZGqSmZ2oi7oBDPTHJPWSJ1tcBEgY7Nc1P7o1Hr8LsACaqX1svAThV5kGbQv4",
  "key32": "37HuQ5mM5ULhwVSRnJ6AhhcWKBMZcVjkn1esb3JMsjExgqaYAz3C1Pgiqx7WWAVTCcYNdoCEXs5ASHrPCxmQvJTX",
  "key33": "53U8PP5d1K7BLBuQQQNvysB7ciZ8Qw5DBrJEdbBt9JZhp7tCM3FmCrpm6sfRY8gQUJQ3baCqoSboA9F9wfEoJy4S",
  "key34": "2bWL31wj4U64uVrKCEMBLzg5jCYAEg39V2KtqNVALm8RLwKvsQRsoKk7ctEyiW3WivXCScQ8ubAg83GSyte6bzHx",
  "key35": "3YhYoY7Q8JmGNK9muQwPW2rk4Wi9uK1Sz4VTBNykWKTLzvfHqQErYDoEgH24DTqzzLrGfaV8ot3DiuN6YnXTdkRf",
  "key36": "rMvjQgVMmzBixWkUfW2xdzb5Uz3juaXawsgbamzCYVQ5B48wc9x1XwW8UJ2XmLmrW8XTHfBq8KDgt4Yby81Qbu1",
  "key37": "5Qv9z4WWtfepu27VeUTjjV1joXFwzicY4UtKEGUVXbbYv6HihozyJkaUo1TuidDgarifWdYwSS7rtvRQaETyPUFn"
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
