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
    "3voUeAPnPTDQWrZkr6EAuZmviZRPaV6BZXb9tEuRroDfE4M3KbyvrcqGpVAuJ75FqnoHZTGSBVw1V9QKrXwFxwmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QVSg4wS4yg39CtGD98zdzXiCr2mtgjJGz9nhPjU4WKnCRDmHzvG2TigevUyeN7aJN5g83nCitUTVo5HaQ2Bpdrp",
  "key1": "kyQf5fR2gNJcPAPz157Ph5b2TNbpw2oDrqXUvSots1vpiLHH87JPptbsXCV4zKppKydWGYCSJxpkNJMhFjAPtqw",
  "key2": "3PuYU3bj1RgraVhdboe7YYRGj3XM6YRNfmtE7cmbgiV62BvkDfEFfHSgvrcuQgnSWkkTvSRm5Zg8LXBNwiwMXSCN",
  "key3": "3gvjbSjP8V8b67Ehs9fL7iTdwkwYQCUhy36KEmWfqbucfqj3o6cM6NRqBg4BjzsT2E2GvW689nh9HW2zqiJpRaeP",
  "key4": "3tDftqHnwE1GPyifghMt386rjXDbkkYdWrxk2EW9p9yPivn7x6irmkb2FxdwnWabbKi4oRncnXgFAE6g51K57EWw",
  "key5": "4snggmwrFDCqoigVtQMJ2G6FrE4rsCKXyir2ojQewF84b8RfwKPsTnyueVssgEfaKBxRCpMf5kJYv2U9J3EZqAJK",
  "key6": "WAuHqxP442FtUzAHvXxdvKgkPVBd1T2BKrHy99xdMeKHjzD9tn99hbKJFGEk84NwyRhUTfqYLUhBML8K4WPaP1z",
  "key7": "5e52TC9LXmCa8j87bU38ZR6zhxa6QT7cfzLS98VFBhSHTs892k8f2TEHdegSU4Cp5jt1t4w8HAZHJ2i8xv6CBaEj",
  "key8": "5mbknef1aGycy5rLTT71JwYbzB4uD5zzmjynB6pYVQUs4p71KAEQv3EVJTCWMenGGXj6kjddWwjBFSNrRByXwu6g",
  "key9": "Lu3Bgde1fQUTaoZHh3QkdHnxXa3AqvBDC1ph72J6KWV2VMW348Tyj63ZjqSdJAWAtmqnc9PbY8F6SzVhuN1QzHY",
  "key10": "2hwsXbWQSNWMDoECdPpYUy8C8Uigo52u8afarDCwhy4zuk3JdSSRJtCU4ahVWUB8Rwp1CxCJBqeYs2GxJ4Re51D9",
  "key11": "25gSMVB5rBVtLTSeTYAyzD7ViN3fK75AKwkyiJ5v6LEaKbbLbXtVUeCx7mKsmr1eg3hNAuZh6YcNPg9xE7dbtJK8",
  "key12": "5bBFvpA34BxFxXFtzCgQuhFrrTSoAJsFfKbAi45Z4PwoVqGjMAo7sJ4ixvHXgsmNq6SczGKmJyQmpt4jZAhe97uK",
  "key13": "5SnXA32XdfQLaKnVwJMoiMA8V1npapNLjKGfcV2LMHTvxEnQGY5FobYzegqYZg5g6PReUwYBigEJgB2AgW4qZnEe",
  "key14": "4EthAfGALJvFK4yEWyJexeYC77ZwbXvK61wQGbFsQLBA3Hxrv21RTXaxZ73zkdo7xd76ACfW6VZG7v1jWS6k6KXA",
  "key15": "5UCxNXHuH9aKZjLyRRhrsqopwZD76bXSRoRit5qsCTxwmjLZMi5AgxrmtSyzLiDNzByPHA34FsijGFiScL5V3w4t",
  "key16": "2DgeiCQZYGuaoM4TTeBUAkBER9BmBxVxfTf8XZ4U143bjQYuMipBHRUt3fwNyfPhC4pPFujWcq91pePxVvHz2fgY",
  "key17": "5GjZ677E4mtTANGMBcba6wbz6m43gDYi6EZTVbDvvWxhdY2EWMMdFUxFGAHriHF5hJbTJ8t8jgkWTNtoQ5JeWtNV",
  "key18": "5hYJf8PrSVgjjVGPtbRy445YduAtr9ScfJwLNVn6M92xLyFF17Nxih464NZiUPgVnNriF28VH1GKNKrSMauRrFsK",
  "key19": "4QqZ9wco1rkjFUeFapmbGFmD96LPWFEiTTbKyUYENvjg28rqmBVnZ5CJ2HzBVsBymuTpyDKS9nFW5rERsH8t9nGe",
  "key20": "5wmTifswvPiir6FWje1z6j4uq3F8yJhocaNtii9ExMw1fJMui1om2SuVat219ah4YHbVxWhmnjwGuyfRzZMURsnY",
  "key21": "PEXk4cV5bqh21yREQwh72EXgnejRHuQ6d5ZDV6bV1suKty5V9J4vKWGJeX1ijXVi24CYzRehCWJp9vM9UFw7qPG",
  "key22": "3TQbC8KjPaWyCUkR6gmqvyj91YFyKfzQzmj29JV9eahCPiijbiYgBCvkUDd1ktusMD55gt5scRBE5gucbvS1tdDA",
  "key23": "2EBLhx17j89b52r2LQ1QEbBV9HYMR3vqPGGs4Z3SN2xtvk4qFWcGRgrqsrzYZk9oxB5KvffquiZkvRbBzDMNPpYh",
  "key24": "5h4fuCJmTx7W3KPQSLWdu5695bjPU7stTgBvjUAwDxZByHGyBCMNU9fDgWvDD679EkUyFVqzBCq8gtMNCzxfDbEu",
  "key25": "2QB5LFVJR1Rqu8HyrHdYaBRTGW8PNH6V8Z5foSSyxHXDUW67AxUaXBzzWtpAZeBq44VsVRxa8vz9HWPkk2t4kMHL",
  "key26": "W9rmTLLYrkK37xfNoRNXin8RCm7xJxRirKVwoAKghJYdcmpVVW5pkzJ8dyuCZVifxKhqTcXd9kV2K5fiyU14ojK",
  "key27": "4FMo1pinjvGksXCPsYNVRK4S1kPWPWotVjqQLdm3ULfdnDZ9rqPWpEAQ1eeiVCzubQE9jL9NqG5ohHGX16WsVsuC",
  "key28": "4F5oNtiBqsg1ncQdKG1JYuwyruFekk3U897MYen5kTJzcfvTFWYKf5sMMKhpG8PCFtK7jXUfs8DHY7PFVPFspHra",
  "key29": "5jQq7uf4ivyUegqkfz6CprexXMtq3t4Eh4qiTBPoLFc2K9KBTezc8kRTdwoGbcCp1629FVcdNXbeXfiTZSbDPyPw",
  "key30": "Y1CawNk4UgSiv34P4hAQwqMbxRpzKRPePvLuy4doyCPqP4BSBpyvtEadg5pWgd8oevZh5Ms6s9mKwcs1Bgr2Adj",
  "key31": "2nUhmogUq24AD7nemGFymUod3P4ENJ2CW9HW3VdgzrYbmYxYdfkxxc4DMspsavz7wWCZFeGiuo58cnfhYRiYNMt9",
  "key32": "64R2Y4ByDJcmU2Z591yqnkRimKnbEyEZSZT4NngzwS1Rw4vPLdWqTsvZ3jBQwUwDvhHXe45RGLndxgx6ZxztNcDb",
  "key33": "2PSJQVQZoYhQ4JhkXUpRrQqUWP1hzQEu9WJG85udzK1GbYCj3swJGn7QsE3B2nuhuuUbQNr14UtwW7PXXhZxgq72",
  "key34": "Vmvsim5NoQyYeLpR6DchSEykwY8No6KnuAAWwnCn9rAiCdePEjMG6Ncd8zY3orapw5tuo1Y1DH7PwACmzb1NrK4",
  "key35": "27NFRepuE9EcNnn6Lh5YEL1QcpBTEbqQfCFanzG7Ldp7wrWYBYGWYVqfJyLXiUmtRSwGhujBZ5uK8Tpa1JUkFHCz",
  "key36": "3yaoJB1mw4uvk3xM7AB2howCc4XBLF2emrNrjdhY5PxoYYMkpiFTPsH84R5Hj87qNMB73GMH91aTkWDoHk23epW",
  "key37": "5MmFU5pMM2zCU4jb85LxRoJ4KWQrQ8o3x2PgXyDrKunTW8Su9xKSWFN7joc2Q7EA5TxXSNoYQJKLUhwuBz8haZeR",
  "key38": "5Mb59dznRHPKwavYvPxwhEevH2avxMDzKmuj4T787DZjmj8Z2sSqE2wC9njoSrg8p8F8CCNmAR1LjCj48cxvpuGf",
  "key39": "3qkfFFtgMkw1XhWkWP1ocBLGEFXWkr1YCPhSxRbtb8RJ61MhyoEYf3uSnfpUx7s29TUxVpMwsup4duovsL5prLr2",
  "key40": "2rvCCQSJuqNi5AQjVdaZFpZx7Tt1h1VmpaAJyNDnGM6zxpQ9GJJrJHVuiDrSXbMPDRGH34W8Mm7AA1zV4XPK1fBf"
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
