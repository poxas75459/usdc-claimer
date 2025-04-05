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
    "2EYACCZ3RixvXEctT5ibEf6MQRNb4t4mgQkQSotbjjr6SQjAeep1rcjzLQns2qwmZznos4oVU2jLXkqLFtvHSeUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zi7w2WE7P4MnGHf6woXk2eCmuFTYiner7HvjNwCyiwH8djRosLpp5xS75BgHFzxNYh2L2L3krwcTgouCL9Bj4vC",
  "key1": "4cCeSjbokswoBngZdoLVzGcwMho1QNM2hC3RjN63qNpinPmLb3fWK84CQpDcqqJ9wiE6yXnZHAYWFJeyE5VojrGX",
  "key2": "4eFDpdQDdcbo59bPSwq4ET3ZFTT1f3zMNXeBApb6Ak3RLgzRR4MRd5AFE8PerjJx5hmS3R8KrJ7F6gYa7GFy9ghh",
  "key3": "34DGYDEjB8R2RnxoWMXnmJqgU3qef3FqNn9oFnAmU22zFzTevqMYp8YPeRVG2JeGmPzQvkg321Qah6cF6ixWFoQq",
  "key4": "5UD6tcaoBKBtx1prUkMo57Pf1UjeSzcxf2TCHvm7LmW289zSvJ7miLg7Xp4hZokoVj2UHE1mj8JM8TpA6EwkLvaC",
  "key5": "3m5sectDhjRqvq5AsBS5MmLaMjcJ8PkpGf3WBACU6CgFymYL8fpuXADddieuEcarYnGh8758D1njCRZwZDt1wYtt",
  "key6": "3W6wo8tyFuGwY5nfXQvFnZht6rhGeq23F3b4zDJmmzcggog4R12xKVmMZj6wE5K6cTUAFSWFJnXD5W1LhmRntEPP",
  "key7": "5t4yWwt3BdSrFb84GqpuEFP5DA6fAtYobtYfhDL1HEDFEAczniGiQW2WvNRD3FmYPiiHdhuZpwWXkMuh89CrjBEG",
  "key8": "2jXJTtRrzyJuSabYdQdBfbkWZPmaCk3dyCC8kX7EhEtC7BH88dRYzzgmG3YSwax5hSvPCCUB49CWwiZdfxYx2PTx",
  "key9": "ea6SmchMcMAAUYcnYErHgJw1oxvonAHSpzvn7UMRqeEoEriiyuD8MQDsR1Cyk7f63EE4ntExGi6QXAVxAeDMU6A",
  "key10": "UNQnpEXzqMrTmG7rdomtsCc64m3mBBMs2Hw9csc2nKcfYBVTPGkcSrAidtoAJHBwTDGLZjypNnbAge5pqynFFZK",
  "key11": "3xttLigQMq11scBxmcbVMJzMS2Kmx4xZKEcscChKd5NEbXdxvFixCzVk8Q7fsEngLqNE6zBuJzwGszn6oaFz3B1t",
  "key12": "2xMiDaYrdzFm5DZtYywSg6gctoH7K9rpL1ZnHvcNKok7QjZ6wPk3kYysAJfjMBgTj1zBipL1Pv1FcJZrJnKTk4Gf",
  "key13": "5PkCreLQ4LJBfZoF8HPaKwcHHT8HrizCdA76pQ88X8fP6x2TSVRZKJSPCqKXYXqd6mF9Fr2VqCzzF7i1idbBQxLX",
  "key14": "qsbFhRfU6je6fpvEeNTKFAUa7SXw7Pzdw45Ks3o6tCxZ324QT7EtxfS2rARXy8uCvf1euX7irMkvZ9ZLHZrRaxc",
  "key15": "4ebzJHSkqvTuDvvpLLkHfGE9KQo4qmtXJUNUU1nsjGz22CmasSiR7wM5hyfEFaXdj3o876A9CbrxTjB4bJkKnPjt",
  "key16": "4nB5DTpPfKNBoe9YqWkkW9zpLHuyyq4uMuBAwNdPnVFA4yZQ6mHUpV4LxJ1xrhbzJu7aMnveT9bsqihuTwdkGSHN",
  "key17": "4jh3E3vPsUXKfy7Bfd8Lru2LrQGrzxzN6Yp2oRFVUqc9J9qjLjUS2nth9jcPFx4VrXShubX7xwEg36B88Y5ZiK8v",
  "key18": "2tybefwsPUUiP5SejzfHc8qXVMTVgkbXzSBS2HWmdGfvtm2VBEpU3yDqc8Xcf7Zx286CS4Sm5TxPPvTXNPuped3v",
  "key19": "25xTeSfPUjZVHzPnyoJwrkNCVAijstvBcZGWmMmo9TMUeDy5TzHXfrYsxY81fWwpNPfJCcqha3QFh6AkesmCLn1U",
  "key20": "5UaFVUsdHmHecEDuvofm63WXiqd1pSd9rMhkMXSCAJWpEzhbhtA7Xaf3dbjJMaGAFiw5CJ6Z8LVMoa7gYsYYQQ7V",
  "key21": "jst7FfnTqEx8tNXFNNfTLgZcPRxqZT95wav1amRtNEnMTt66VMiQjtHtN1jScAFUhRdL9hEhBpi2k4GrzFFQw7a",
  "key22": "4zYAV4q6sYUHqTme7fH16dXTpuo3wfX4KUNeNvCVVpaBV9XcqgyPThPknNqczRZtqcQfoBeK7Y9SWprNh8rMDG7j",
  "key23": "5EtA2Phjzp4WyaQfR1twYKi7RW6g6eV7WZfmmh6rcQnAEgot1jBoNaQgzDtAj1qfoFZiEey5uNubAEnemWu99fDG",
  "key24": "62vHvk7WCPJLFvyvWgooq7EQ36VfHhWSy1oLyiaux4MoRxWwJq7dmt6uuZFdMtsH1ZiTwU8xba2kDnFVKRT3x3fG",
  "key25": "4mjuNe7dgiEfzSiF1v8NXpYwg9xpCec2jssSfsryxZEMHVpZbTmKqdjARGc1WkcczrKg9ENN1qqqXjFW9nykit7H",
  "key26": "8aawGXphvdQtpaAMrqNAvnKagcpNy7DhrDMcG9Nw8d42tWLniV6FW42UMP82SCrzm9WXeBizfyUJXMT7aN4rbar",
  "key27": "xxMddbWYCKXgZ4VxRELHW7B8Rx8dQ9oLffwsNGWG7RQaRBAgMBqrM8oLUJDtZNyPcPbopjyzxTCu1orhKWnCnQz",
  "key28": "4mjLvJnSjVvB3W1JjAUUqYLRkkM9uoVhmkrhXaFhxQPYstn55XJzqJszay8JmxPrkXg5A9D5ysV93zKgeaFv6nyh",
  "key29": "5JMcm5gdmZvcuqcbhSurVF2PmEVqUCpmbJCkA3yvuCNAEjdwLLdzBexRFuf8RsQw6FWK1bRGZMngY8rAQmUdgVc1",
  "key30": "2EqF3sRS6CbUkJjfTwG6K6Trif8DLpNs4EvJuQZy53MgjveodEgqLt7qxGngUiQiwoc8Xm8udz7dYq87rum6dFHB",
  "key31": "5nkpJuGmTn4ARLTinrsJj458NrjcdyEB8JMpJvHc5hYhyWtPi5LXTUY6dQ58nXivgmghvLdAiZ1LZh2BPpdKwqwL",
  "key32": "AfSbAYXGSLDqEx9YFn2J2hses3YcMhFRnPP9E1HNbna2BjQa5oFJz6PQXVifJQMgk1kP7FdBRkYywSJPcShPXwL",
  "key33": "4vyD64u9XQvBS7EmCsswMP6LtZVN2EbLaCgDkiDgUXoZRqskz59WcNea892g66M6Ja6DkqPU6311zHd2mrww5PZ5"
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
