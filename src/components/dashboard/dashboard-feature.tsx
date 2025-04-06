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
    "3dfwckgfUmh7V5jBpRcoe3y7WDg5D5s9vFx7UTSNkiiLkLGHvoLRvoxRK8ZxBbPQpwMPtQFd3pvg6XiD3qQx5kWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RfoBZ4dpQUyRXAN2zi9GyFeKYLMs6cYM4zBk9zEMK5Pj8kWme2tuaNn38GZSX9pbib26nMB845rPtwn562ruUC3",
  "key1": "2uZALwtFxStxRWjjnQG4GNRU2AH3dXd7YQocZRMAqxLyWyvB5MnuZ1NAoMb4GYL5oiAcHqpxBooCZMUxxX9wkGmi",
  "key2": "44j6hWuMduCJkuc7WAWk443b8ZGhLc3fzBDHqHaeytJDTLVAvy3MhSNEtAqZ9WzAh1e1J48eF5wUy8rCCJAgduLf",
  "key3": "3KB6xtbhaoaUezhfCu4qRL6PynaZYAPywr25gJ54wmmRQXK1v59jiGRNVfHnbHHvn4ngWK7q95m3y7RM2sxrt345",
  "key4": "4qET3yxZLShopzxZtH4Ba1mjtDbvi6j3bXQMto57wKAHByzPK9H6Bucieqk6QDfTYGqDkg7mgwkoFjsupv3uRBxe",
  "key5": "2xni5sptsz1HUoCdMepobtEBouKbHf8dHLSk4PXUsXFAFJUJ9UM2KJ5wTHVygpjJkXuLP54AQ2RVFmqcocNWJw6o",
  "key6": "5nbrAUYVDqz1aR3P99sAkZ6aBFKaZKjnG8DQdRKygyPfoDGFENzSALa55XayT2xcsq3mgg28LKipjQjkiaqkJiyh",
  "key7": "3YxT2AToyNAhpzvhf7iNnWKYda1Aw4pbnHiVENrEZ8UbzjarsUUmWYbqgrd2gdKkCXt7CFLurFsZqivQsUbLpnvz",
  "key8": "3vLyJeDFnQYi3cLQTpWs5rqg3P4f2m55DSFG2CbPTQCvJnGB9Asy4dAP3MjeDkUeP7oA9vtqBJwQe2CSBNkTXcUn",
  "key9": "4MS1fFQnJ3Lnbs2rQA3f1LLKAwEBXKvnVuVxTUEN6VzpgBWRdSp7fgUbQwvDrLzdGq38zSMVo7dvERzVoV7soZV9",
  "key10": "3LA1X4kP9x8h5D8aM2Ca65U5e4qjUF41qo5r14ZDy6CoS5VQKw43sUZdx6YaRdsJa8C4CX6yjHPLJPZBHMD6f1MU",
  "key11": "3MCv7S3qerMpvcwP5rggUqBFZTPBL9mZkXt49NHzCNLatG3UxwHVtVdpcZ2MAEVpcafcFNC7BNT2crbTTr2YFxco",
  "key12": "5efoTXrLnoyUJYEZZKgAZdhBXLCM11H3ER8wfEV8zH9SReuzmXYofmHrhULFVs7T6hyzhfV38R9yhW7FPNfuGfm8",
  "key13": "5TDFDiAdSq2edZoeNPQVvALvZ14BLKi6LYSHMg97Ce8LstJm1HUhBfGLuxEN5kybpad2VJkv7LRJu4S3R4TTh4ZX",
  "key14": "3fKpvwnmE8D8oHnzeAWCk8gw4A2YiTnn6aHAQnWtVynEbmV9XpP3phMaErzCksT3KvHqmN4L3aRBt9aueMxxre5e",
  "key15": "4CKN9fNQJn4dPPnJwxGZnHLe39utE154T5pUKReKfQ2cRxJzkpXjFKtaevKnEh6kVBFius1vXoxXZe135FK5sT68",
  "key16": "5CxRJMUjWpSBTtgLwGctxEjM812VNtR9wpedyhVEZ9gJo3eQhWHqjvAo44qJG3PPuB5wFgELNx62XcD2X7ncidvT",
  "key17": "3LPmiWcpHHrKTLJAmNLTkLr2vG6vu1m6xwMXJJyJLvkdsoaD66cFXDnFG22HCqfQ5kudiKY6gSuiGu4HheYEffA6",
  "key18": "4X2dAX4RNpVHEVeA63gcnRDXwjSJYA5kt7T93MvVFZGngRa9uRBNC6k6kkGeP1e9HsFBAd1aC58feuqW6YjEuATy",
  "key19": "JLz8WSaaR97LPXS9CGy2M7H8sThvFiLGHjhyK1bs3jtxV95HEsgdkoEc6GPd3KRjYyVz3Jz6V9YupjWE75vRKit",
  "key20": "3nnYAABqFNPQsgtcN2ejDHeTucVrpftyudqKgNVpSvAiasXPedp9TFTsyapb1knT7yt8TAwt6oXhhjD8EN3y13nC",
  "key21": "4bHY7hFA3k79W8qzKCFtEuK1zCw775gAo2rHJ2EiVtDf4TCQWVQJNrotPqiqU6YzRH9rnWctuDxiQFQs4CEZvBGJ",
  "key22": "3SXofY1SdZKcfY9ys4cpXdTDfdZLfqrSdsb2kKZMMNrnKn43oFJqdqTZg3vEW1emhv6V1UMcNgYhtfKzKN5NmtTa",
  "key23": "2xzyGarUhPuYHHDpxhcDFdcm5dgtGFdpeVX2VXHyLSSZveTzKZ2cHvH9iYkXdgzFkAvCPyM5sjiAX18VucU4tZfj",
  "key24": "4qUF4o4Rqa6FUyGRHGfMGs2ha8PS4atfQXqbkKrdGRvoSuiLjssazwwAk5DDPLqvd8ne7ysjW18JRUZff5nBXHFu",
  "key25": "5kopCDJctbU1XE2vL64AjQhiYjqJuG2MHobQfXPrrVs74yqk4XgsfFV5uhnHYW8QvD6qGrYPuTAsFhX3xos8esfj",
  "key26": "j1HE1jRb5iLEKquqHZ7Y3JdZp29d3UcZKj85A8vRxKbgL4k3GhDmoKJXsZBie1h8cnWRx5rLhrj9DizQfXpUdVV",
  "key27": "4qgyszPQaWaCQjob5yZrVEK14QgRVAR9MUPwHx7yDu6p3FHjBxB4sRssLRPyxM25PsbXAv4iPUCzj45mftf8HPi8",
  "key28": "4vNA8hxXUMS4gTDLdBYi8dzzMsAGeara24Df21qVKQF6wysXHGi1xxHbzaiFyJTdwkRaCih8uAb45oqcU61itK8b",
  "key29": "5d6Y1su4WRw8ALPtcrxtib8SM231wL62VvvBrZLzgQm1immZPytPXZf1rqjJy6WtRbpD9E1hLhPBCuP47yg5UnfK",
  "key30": "4rRHLnCKfQ1EhHh3KdT9uFdsRj7MEpky871mKLRK5Zw5ZHD2ZtA9FfJAoRZUPErH4NteB6FPvotNnBrvBufEus7z",
  "key31": "cfJYQUhu6RKb3zb4Jye4ViVMWbhLmNikKippph4quCHBPuXVwDmbaK4v2PRvEGjrtQQHTZb1ypxJvoxKp7F64v4",
  "key32": "dftq3Zb2Nj9uxYGATgSyaunQ2J8iWpiZvR78eFL6QanZ3HHmBxZqkWu9UixYhfy4dkKevScuzxaYe79z5VrKi9G",
  "key33": "5YTG3PtFqxbw9F1iKaL1kruYKzrhEsxywX7YMmhXihyjrvw1NXuPJBtSCKUVh6NZy5RsChMqCNJb63efHAivUxKu",
  "key34": "2nSFMMzBX2VciBkoDu6UTVrMBCK6XDRBYbpn9GoNM29Do59ApEo2hh7ccnrCHq7LXkbqobW3Foej3ipqex7x2bnm",
  "key35": "5nAtwLrPs52bSwCSMPgPdeL9MNCxAZg9nZdLitnzKHDdHasd1NGvjWFePbvK6oc8wGvqLrJZGhC4LvJAWX7ucebz",
  "key36": "4tPXipXaemviwc71sKj41i168E5Yx6Ev9yNDqBVzAgUkSp1aAodejjibbGaAfdUaAmyeqjSVDoHkG8D9MRiZy6Tn",
  "key37": "LxEPrYfNQmnzYvDtTfuLsYDGHg58fRMFocRitwbry84u9bcVVMg8W9e9x1zAntP6tjsbYH7nATFq87EFDJbZyy7",
  "key38": "4BqY5AaqvZrLsskqJ42Yh5MdTFWpaVVv3om8KTNt82PmUyCKN5gbSgu2LZR9QK6CusiVSiukG7qR4DGHcX5Nh6uS",
  "key39": "aKVKXvXRRbwqb8fvjGqrrG2dSDJiBVuBAkAm5EtA1AiTgKNcZmgtq7vCdcS5SBgAEgSU9j3w9bupmbrFX4C4e7m",
  "key40": "54RJ7GJ6FTcLvC175b3mHPpKGuyaUrq2BkNNsQhqGoLRnE1yWDzoBZMwWgZwzE8Gm9jYYJ8HredMycKgv3ZmGRhw",
  "key41": "5bt7uD72VEiMqZVrgZaKhUXGimCYbo7iryhK4jthXcx3AxpURRb7wbp6iGJNg7sfc3z6sfxnBcBAocVqmgbBTc4A",
  "key42": "1cHzS9BSXZJS2HPKR8okX7HEpX86v7eXJMc6KTYTzwTV5vHXungFP5Ec1Cvh8eSg7NJzX8xnzG2H1kiPTooDYYK",
  "key43": "3WXdXK6aJANy9ntXx1U9eXffX5NSFegrdhep1iVwWDfsFv2n2XigZsdBw6XfSTZUuPaDEi5fbop2yr46Xdd4Bhv9",
  "key44": "3q8j9vYBJiB1agNtjMmo6HCoYvVr1tVs958WsAn54p7gs4VjcHRFR67b93S4x94wurHHofaZMGfcnpsEMNS9cmau",
  "key45": "3GZzHiVeoGWqmCiPvGta4RQXbhLo3QeSKxfQnF9CHTFxjJ1hc6n1s9xdvNp4iYUQWxEinaURi2q9R8HKHdvrDz8M",
  "key46": "4kzD9HeDm6WYzFByqrVCYN8q6VtkiGtnAhdyHocQn2BV8zXxQ185FtyPuYwSgKe1r2tJQw8gb74PUCDZuhcFzpwC",
  "key47": "WaDHTPm2hAyX6nzDxbbD8NLQT9ae1cXyfxcoTwZqMbbRTj7BLHqHFG1hvUPdchy83fGC947fTQWYuJBsf4JbgLQ",
  "key48": "4XH2rAAFhVP2j6WFyuJuE7F2e3NEJ8n22dquPGXPMsLUNVGLdyhMqCyahBBkmzKaTg2JUcW2GNtAmL7y2rpeyjs8"
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
