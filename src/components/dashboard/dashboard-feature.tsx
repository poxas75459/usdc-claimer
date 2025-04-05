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
    "3oFVQxkaMpg17uZgfHjKQf3nisxobHJCrrPdnTrQ66TH3kU7RJXedvFjEmCgVrAumT5AkgW5SZBdQ6T8fHpJQun1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MVJzxoPrJzZdhPwZddrpfXHpM6TmAwRXf1dwVRBXt5VmQJnf5GNds9tX1dP4GcZvZW1EF9iD6x84AYY51mkLciB",
  "key1": "RZmAAjm9hPEnaw6rhVkH9oYyCiXx4qvBuXhL7LL7TGryBbEyxsdLgD2uyEvGMqpMEUkNewinjA4JXq7yJEUPTSW",
  "key2": "5HwDJQ7wKXeLFMjZDh2qLjXR8csJJMv186xCCwoe2qgbFoMCUcNyaYF9FHjiFyoj4HPtGtu1W2oiMPrH8y6nbPrQ",
  "key3": "55HKwwP8bdvNsDZg9VYCtDfBk3sR89ZkkPDmyn1UtMKYNpqe77cRdxZVS9dE5aJQs3RNgmnnHiQhh6D7Nr3UPxfN",
  "key4": "Mra9Hae8V9YE3j8BUk2yxt9QWEAmLebMMrfMz88VDkqmDNf3CXzZvPEd2muxykFhejCmk8pz6MN3g6Lz8NQeFdf",
  "key5": "QLWRa9Dzf8MecgHpZBwZVBaZG3tzMbucSMg2M6gdyNqKtJtWCPfpjMiMogKx2u2rUi1fAAiCkQu7DRoo58qwhCr",
  "key6": "4utsFVBFvkuFZL7cy8EddikCLxL1zbY3HVZzht4HxGZdS83P3dR2KqhwbH1NCE3dot5b1hgpgFcMpAgXEpmo7X9",
  "key7": "39PH9jwFuRgHfaxgd2FJQo1D3CEHjcz4aiHNVez1k9VBpEfW4s89EuTpMtbkm4bdoKg54iq61fQuKzH8iPigpeQv",
  "key8": "3TyWfwD6LgynMUn89wY6XnmC9JSaqBq7fGvsLp7TcYUPvEPaTSxcS3eRPsjwSiQccKQvUeufzUR7Q2eGDnHcZMoP",
  "key9": "LR5jgurxpXCa7SKm6iNAVud2M384poFzfMbn2N2Lcri3Xf4b7sxWFDJsHiLqNxmAFe5p5fwiJrsta92ivTJ8B3u",
  "key10": "57vLwMdJNn8FLBwS4YiTodZuCXqjdVdbYz686iP85V1qWhwxNJbpqPzB3W5pQ4bNDNw5CTAdmzqKKRW9i2ytafzz",
  "key11": "5CRR5DdM5emapt7peTfmfovE6mfZFNfjiGLDEFhR39mKk2aCQUTPaVxhHmkmBssmEY43uGU57fqfbiyESEhpvQmT",
  "key12": "3SPch2GpzqXudbTZhNXEuPhqg4fYRAT5AnXA77dEmqAvQakNs4Qg3PbxLjFR1GAkqyRsNFPKEPSs1Yr1sCwhvhc6",
  "key13": "4wnjkt9goBxgMVLLtEfFWJj5Z3jRGU8CjoAkvRy9WL94XUmX7R8Jtqqc6Wc5drUPygR8bn25EG89LEPb5pkL9iVC",
  "key14": "3aSbirZUo2DwUpbGKFaqrTETTgp8aiUV8SSDc7UZZTERvSzngrQrTgg3GNxsEFtkrFfrTFP7WSMLtZEqHHcPBwWx",
  "key15": "5Gm7674URwn8ZXNgzLmJfiRcDfd5qHhYMTnsXGGkophfb8qdqjxorsmPHm9d5fowaD2vLNSN4qPzCSXWSSo6mUNF",
  "key16": "mvpcdm21wUfFEQqDbWv5Hw2RH55GHqhFgXwM3L7BYiP12sVWyC1G7cDQZ9urbvLGLxeiF3ChDLtkinnt31Ux6Nu",
  "key17": "3He5GgUNt8TJANrLxG4zAC9q66JJmTNM5c3NDY8aaGB6BA7oF85mDb9avWzJdiFKsuMPYQoBSwquS6SaidorUSpM",
  "key18": "2zJSMgAC1iZahQFqySmDEp5rNw8nkY1Rc7EXm7sLvL6nWyvzABsawjzcSLNW7G7XqRawbvWzSMkHXSdEfbvm1p2L",
  "key19": "1ZaBUjfhni5EFJqisuJTRybKBkmi6vDdKe1vsb3MbTHNb6CBRhbmatDE2b6KJ5KMTaV7PLNPw6gxov7RQZRfD4R",
  "key20": "21FU1kTUXj6ubwDvE6XXyfcpMHGGWdiuenjSCsrKgqQgNAMxuaF6XRGGsF3FXbtAdVJjdXKsB4g3SyHpUUsmWXyn",
  "key21": "5rkuGvePuFVKKz4HMosgqq2XwxDftR6g5V4vePnerPzyzycHz2bNdWoJ8v461Nc28PDLH3t9sPDYdb4E3JW5Fhhz",
  "key22": "5WU7JndqAU3qn3wF8EJAwWasvaqJFcPvUjvtXch1NxvUxqGTLxQWDnF5JLYJ81XPF1Dcy9qsbRFsvwhbH2hPnWv3",
  "key23": "437dig2TtpVvHnmq3vDneADXXfGSQPiuBqx2K9AwG1QJyXqUz3V5dZcJNAEwNYbN6jL7avkLQUzFrKg1SAYutiEa",
  "key24": "34GgrUM9eHuQ4ZiHzsUVCXRRBTmk3VhMwQBpDgiuSTckmNqPVpHzrSpXuHGugviqdLjkW1WELW5dykYVng72wGZL",
  "key25": "3gqsZQ31pzD58XxXmeDjvVBMb1W31kJkvVwN1YSJrpSBa67KgaYu3VstWk9JrtDNqqPycGi3pNFoP3BxrvUtnGgE",
  "key26": "5nUcBSxevDxYRjQH8v7CJsAqpDzCSh2S6k8k7SEeRvDkm7WNuv6TGWeukHWWGBqeg4gx8AFkXnbbgDTGvhAtNW2D",
  "key27": "2r7N1q8AK3tYn6MafWqkbibHSZ76Y7fbG5Rtxt93d9e84PrE2NWtt1pRnyUgqUUABmf4mirswEoQz26HzgYKcSiS",
  "key28": "3Gbdg89AeCFe5uUGDmssPwFM8xjZ1wi6WhZiAtB1621FAkETgJsZQy5mPgsdoXs4zPNBaKTR5MxWdfhrJutFXbma",
  "key29": "4XZSkYM7nAsuVSxUCLFkXq7wHEuHT1JeHPKTHhGJVbJs5hEY5pkzGWnhMuAbC9MnYL7EcD4aRvuKzgJ8gR7JX3TB",
  "key30": "mRW1ozdpc1RXe2C25ML8C5qoeWX9ewR4DWRW32fezWfuAmaoSrdC7Yif64ffTcovQa34AKhNuouyzQVCC6SnNGZ",
  "key31": "MGToojhfpJNF3Y3ZmxxnRvkMpuMcwT1r9p2SLRvGcKDs6RjWzrjiPG9pYXdsuxtGtnNnBv1ty6GCdqTXkNzCJfa",
  "key32": "6522BpgdijTpCgj8f1ZT5thfgudttTtrabxvkM21oywURbPbz8rcv3psp52VdiLt6xqsanzTbR4rnYHvyibqYv8H",
  "key33": "3qa6uiNXTYL4SRmboJD9GychYCiMWjSsZXbfsHKrEWYdGwNx4kQaXZJo9R7qGvxfXXQYgqQDgBnZJZ6nMgVMNFGt",
  "key34": "As347myqmsuufU5qCdgdwn6YKNXV5fFK7cqABc1dKxARkNNzrhgfct3jcte5gcjMqdQPJZmRuKHwwNjRFx7ZEb3",
  "key35": "66xdwPVeT3YvKogcSeWqG74YBYgbRk28Gf4jrTjDAHG88y9e74iqnH5d7wjgJkmKANkuZCw9aUaLsJS51BPBHfaV",
  "key36": "4HGaypwJvQEwxjVmq4XSNZeSsgQAFFDpmrGsRpirH1sacmUNcowC7odKjZxiEARtotoRYdvwfCr9rursfxndVRye",
  "key37": "3YJ1BMNFmPsu4phir1XWA1vzcRXZ6gNm6ERypmXBTJSH32w4CkeiKC96N57Q8iEDmujPXpehF72sUYc9ogPvPYLk",
  "key38": "2Yc37h9Y2TWTWmz8UqeyZX8RCC5vx4hDQW4QbpjSY3dKLBN6TmvNZrJaa1M9yY79KKvnkaD97gKTfPVP3ZCXrvZZ",
  "key39": "54yw8HVEXJJqYuhxaxcdsexQbDGXTC3Ee8B1SBJJ3BrNNKaNZdv1BF5S5SUTMBGPYKskHeG39LrgtSziREnqBtmX",
  "key40": "3eqnNaxxqDNW3SqPk2RxuXCWYnP15onfVu7vdDfJXkNsf9aaXN1UggkCDZssz34CqgSRp9N262C331kdaGankSk9",
  "key41": "5dWPcamXN4LSni6Svh7E9hYXj4VfHjZCj4G6srkrCTRZjCNHZWvt1bGmCoaTENbabgAxYa8QkAxYVXozYKzqFxWi",
  "key42": "3fY7DL2AhoyPorRR684Pn5wEviqYihsMH4knJQLyeZkkfMmymehfhF6j4Fi1cthfUeTQ9UaWToM6UmL5SuZQj7aT",
  "key43": "6419FbVGhGPkPtFifnbUGvm6Qe68yfhzqw6QG8JeN2tfZswEDoMjCSt3mHDm3ykNb6dhQkVyqKte2LZdPkxf5tYy",
  "key44": "2nRDCRzcwnRobj14srdhwbCvHacxZY8aBLYoComWk3Pdnc3zmYJrjHsxDwkzXy5aLb8WJ6wT6js6VMuJL2VZtXS4"
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
