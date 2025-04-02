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
    "3h1GF29TxDocjHZ34msPB5FBpUy9SwgpoK3zvxzzKPr3GN2EfUXSR1f8k1spVZ2bnChxVjL1aF3SVFANEB4GK5tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RiBD232vUHpaDYR44CfqiMPjtE7NKULXCS816VYAUKdJdADTEoEmQzLC1icfGgm1H8qyQ8cqFm9AX74YHEpBXfd",
  "key1": "3MQHB6dMM2P2PQp5CUZpjH989TscD4xjLHaaA2GdJoLW9tnMeJyQHoQXRh8aQT66q66cZNnCRnSa5oUqETeLsRsC",
  "key2": "3crHb1u5po9LnCS6kEwpQWj94AVuWxkg5Y6hcCYGas6YNsAjEdYBSmiHFMe2m3sD5kVTb1fYEAhmczZR2sr7oswU",
  "key3": "kteUZnR9a1DYkZTEAHwJgYBHpTgRATPtYrgMFuyYhK88uEbuh7B7Qs9n1LbkR6RY2RbECEZjyknHWC6kXEjaUUV",
  "key4": "4uy83Bf8jHSSVypCymCHwEhuCYBL76y8q3Miajvej6BcuW6bHtih9qcoAqNkosCaoBviWeDdqVFtBf6fnHHJZoyH",
  "key5": "2APZkuUQdbMHwR2jUKFJuy2KgMzxi9G6xFzx7uVG8E4hsUQpU51n3jphmhGMNAxnFpTFp3Dh4rxe9UNMMNs7UDhG",
  "key6": "32jqXrYGJUV3Wh8zwpgyRoDthvRiRK4KtmnB9wr9DrH5myMprWWRgBHoWsNC8ECti6igg1Rtpapn6zNHgVzHszav",
  "key7": "5kVCme1MQ2dZ5jR6AhgG4d1JwYh8TGyeoiNZqJpw1S55iKM8tjfzuh4DsV4x8XNpZbMouqAMpG7jH9wViXmv3CvM",
  "key8": "2aGYpa1RfLJJAc6tYhtFEmViYgDehVM1rozAww7Yh9rQAnAcFR83aBmnqdp5weJYVusfY4VxM3WHZ3R36AiF9aZc",
  "key9": "2wv6Ft8XXoLydmn4U1kVaAfPmLmnmNAEi7UQiPW2VApYWm6r76ydsQejUxF7rKpU1fjFP9iWFpUJvPFcJhyWCbSP",
  "key10": "3WrN8XaqwsuknpHhSxAWLBQiZNGpQjM9cJNKeJE6njD4HLMnE9Lp85UVJuK39W1tfrNGWRsb1UuJbfd1JXB5q84G",
  "key11": "25Q611auRa43VJt1CaBh1BKgXExzX2eGTDpMQXDjEBbYWyD9KrntivjoEqNvc4PuN1x3v1iZ8EcQZADS7zUfHjQm",
  "key12": "C3hdkk3rGdd5ApUQZ9boChx6SADzue79MMVNkBXzsbGYB1XcogWYBEmvwWDXAkD9PsUdAk643wMpZ5cwM7B4Vi6",
  "key13": "U14kJSUYjZk9fc1BDdPUPA5R6xZHdhnjW266dfxPsB5m7vvatTYM4xhQ4JhfmJKNkzbjAvBHxEbUp6wgRSp95Kx",
  "key14": "HuKBPTmr3LUzwNmbWq14JUZURoyzNnmDkiiwRN7Q7WMP26oeb2wxQtPU6zUNjQtVxXknsdjur2H1oqotQW9c2FC",
  "key15": "4vXyKk7Pu5NisGNMtg1MCpKN6yefjKwvnmTGsEcVFSKjjhrg4r9fuKHUu954MMW9AcPpbHQeTCuaSfArD7h4uCMJ",
  "key16": "3t8DAXbh6tJDAvpHwDSLgzCw4jJLAWsrFgrAkuLr1qPLc2G4RzSDRtGgCQzrFRNevYQDKAyeTMiFdBrNCf5GK9yB",
  "key17": "3dyBgHNWj1DyUrAfBA64Aufkq2CnTyMbbYjrAZBepHG21By5PkpSSEucQrkEvXyfsc98TJnd65ESY2jhog9k62RX",
  "key18": "5QhuYppoqrdirN9Eqr5VCMcPK3ubGtLCHcbBma3d195ih2k6ejUSNNkFgePau2CvsmB4Jujab3ExAe5otcg4r7qJ",
  "key19": "x8VxW6ZLxYAYzPsGUmLqP5p7y5pMDD5h8ciCA2gVqvKZXPCKwivzKiuoPd17YHoGzyFiJReSfhNnZSUvRhTgvFY",
  "key20": "33BUd9BQJNjKWThWYcAyrC57b8Ei7zeVZmgPBQ8PiRbNaR7eR4wsNcDo2itBaV6fTHUS5eLhWQukd7JLKYL4W9Tq",
  "key21": "64jhdreMyYtSbA8BYrEdD5GwnbdLLBSNV7W15LHzN2yBiBCwcjcArnb7wQgvs8Xb7bBxuUbAfNN1mhXJ6CvrKzW8",
  "key22": "5PjfSeQEqegv628snPqgEgAK2876LACx7H3rC87tgRgPyHgw1XCdUBPfucFAXYJpNU6xMQt12wZWrx2cYujhAXv9",
  "key23": "516CQBVg2BGUBXZ5FKPgY9GdFAM92rC2Rtt6M6nfd96EEVDgzmfDN8QLoZbpKhHH354e2ApnxWWGiy2HKLQ6QgZZ",
  "key24": "51ENu9Te7fAV31AGpsrQYj1EyL4wjGvKyEBVv1LEGBcbJWJq5LjLJLQhYe8gQMqDD68vaS8VmzhAqZghE9cQ6UGR",
  "key25": "4dgKHzc7QUi1DACWZ9ktSabFtZeg3iaBwy5G4kKhSAXvqANTcnns3vRu5zv2e4q5ESYNSwxT1S432UP8k56vE74n",
  "key26": "T8me9sX6tFYCTkb6NhTyMnHXdwMc54XQZ7zHErsKcug2AjDwgcQ19zYkVXmnA5geyktyGkqDYztcBFR7i1o2SNs",
  "key27": "42ZktQqM7coULGYZh5q1gvDqx9gJ1M4XHmNA4ZzJjpuWhj8BtGqBY47c6oK1o3e7TxCi5D1TxgYmAbdG8vpirREt",
  "key28": "55SmNqaooY3YPMSh9LbYJ5DvjJWe785m39u9QrhWepQByTGhK8y8ofBbo4ti1W9EnCSY6wwRER5q7uiVzEdyNnjd"
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
