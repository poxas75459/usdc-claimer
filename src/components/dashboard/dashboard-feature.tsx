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
    "3UgS3ewL3zKn4whN7TWNPckgTGzCDfj8zFGaxS39SinuwP4v1kTx3v6SUKVxcDusPCEjWyRxzTYdqS9zv3sutxjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FLn8JAQzTwDoEQrh3aeiYi31K82c48zNwsqy9EWmH48a9PRjBLJuhpSS5GDbSFUtRtXf4W9w3ajx5HaCk2smHAH",
  "key1": "62uYLHiN35rZex3jmFvK9BCR5qQQuSFoNoDzUqqq7ipsYZ6jirStE26XxJHqG7eDtujsZwkay2mKddKdSrT79SrB",
  "key2": "4WvjmHQf7786BntSkTyA5mF5ab3woYtSzwxdDZmoTLP6tSyP3GAhVN9BfTjunwT5jxki1zT7t7LWtp9Qwj5LRGMg",
  "key3": "4NNbS2dVNi1U2fVRmg2qjD2w6gK8opn4LxmyXRTqzrSpzQ1yQT5V5JPMEw9pAMpzRqEG6wifaXgvusfs9LEV5JUC",
  "key4": "61LLqEFV9AGJ8JNNCvq5pT4q5BecsKp1UFNF1ubpzUdqYFGpxkT6cy78o6GrfUqjDFzi2vygUsmrD6YmwXhZdnZu",
  "key5": "34txp4U4Q3f82YYdAGRqRHZRoVbtRaG9LWcGRKBSdsEiqfY9uhaWhvtFfvc3bzi8c63YrEBxBMxUjNet2G9iEj19",
  "key6": "2AoVSuZfehz24EU852dbwSzmjL8QwFkpZvxmPXe1EbMepuT7kGUaHf5QvKfKWRGt9D94CQJf9qUe1E1x9W2xF7zB",
  "key7": "2NbLyUPysHABoC3CqwbTrTgQktgY6Nseuk5rXGPLt4otWuuS4HPfZfn3KDAxxk6XwAdw8Mbd5DidshFannbicn9g",
  "key8": "nhWnsc4WyWDSwjUoeBM5FnNBjf2h5PkqLWCXVhhzYJNzYNCSuD7PmHbv6isxzHPaWfpYuUqd8HRuEegVE65ivv2",
  "key9": "5McNug9cCW9Vq1bpGBmXv4Gdv6zKhSGv4GRndGB2Kca5oC9Ep7q678NcxTq6n1hof7UDRoistajwxgvXg1bTz5BT",
  "key10": "3FGaUjRrM9cbtQFqQo7LZiWVRYk4U8nPrTp6LuasXf2aAUCMKjBeATPYCJ7isyj89axroiugN4hnv7EV5kG2zuwi",
  "key11": "4B5vAjkwToGKX6x3HkXrYhd4G8ECT72z9HLtw6pupTarC9Mh8sRUtNTFP9suTj8HwntaVwPFZ66zW4Psp9rsNfRd",
  "key12": "5U1h9BSFf9ZLG7L2nSWfTURx6Lnsd4jSqhdoTpHDz23pADLedfh9YgFFRWCgLYPaEbshuCsnC8eqDMsmX1SLKfPB",
  "key13": "mE1g5tZD2J81vs4r8TcAtTRFn4d6ZBLJ1UyPnktgvJkD9uc6NHbP3oXfX66aaWc6BVEGRaP9UfnYPxmhd2S9f4S",
  "key14": "3FKPrmERhiy6PqVaro9gzS2NzhKAa7kZEUo1ag6ScZCiMQxACpiBvFLnQoRtLCwwJ8oDdowLVApGd67jmF6Hoeda",
  "key15": "4EunqJPKqVc6e1qUaTDkyMjQcNyWytTj3Cz8feifzVqJHznm6ABgshPDjAJid6xhDa63cMxLKsupCjyBVB8vvT18",
  "key16": "5Zo3c8MKDWWxLhqZFHi6uZLvePKWmsYPBEiyfUh625Lep8BKXU3SAh8KZPWhDaeBmQLWNt9TfQEhG7zKvMJMiweG",
  "key17": "3m6N9N6BoRk5GUD42xTpsvyPAX5qE27bPqRCoiTx8htdpxLaTMd5rPUdM7RtrbqgZM2tNEUZ3NwroWJZmXjCQc5",
  "key18": "3t3d6spdejHdwgJgSbhujV3fimHsYyqmQm4gbL2bvThU3ELPG2BHSb2g2XUGUaJ6E1r5YeG6tFKs75sbGmqxCKNK",
  "key19": "34osurTEQMTaCqPNQqAyzybkRfCcgrGiCUVbRtrhNryT8zaXfZ56PgETzj6gYmuNfEy2pnDMNpfG2RDm1T6wQTof",
  "key20": "4zmzau7iKZnTxqonteqeXnQqij41fut5ZcGmmqwS1LXfwgvgERLFhnteBnJMEqb3y4PYc1iV6WM9svgtxRGCepWJ",
  "key21": "3oZWASj2f2B6odrLQsDVj6HV5van2noHwwnavMZSJHevrxkbt8QSXnCtAYWL9NTSxeVT6bzwg2oFB2ga9yf3Ao27",
  "key22": "kyZvXcxDhcCShhkCEAH2gRxWBtJY5zpuPVnfNjrT7vbkLRop21NGJgKboH9EVnktigQQEkJTx683EL4UoiiEBKA",
  "key23": "itmcCUEcijAc3dThFTfZ7rw8cP9aYKPG1ZXfaqnyevjBtGBN9uFnzj4wcQeeEGu9uyZK487t6ChUqUMGdG9Ff8Q",
  "key24": "8regjoDbveCBDBowCCgq6VYzNozdYgjZ9tNkrDx93zkwZ5sxfbEsdjmVMbGZqdLq26Z1yAv5VvTacpaCVFY3hJG",
  "key25": "4exio1HVSefNvLmTT3webYoCrSG1wrCbhswbfL7QRkp6GjmgCuNXawcbGdszxt2hcG92QossSQek5EsVfut7BehN",
  "key26": "5K7Fc89V7orRAmDehVozD86mJMds9fFkGyWUdYZ8PNSTAeVKsNcwMCmeoWSaxeQFr7GtruD1hDkw6pcCz2HQQP3X",
  "key27": "2WSqper99VseiwhJQXx76kMbZrdH2tUM2RGyZUizBwaiYDaSQ7qLTUXZ9CC7J2AQLgR2a53VnNMWr4seLjWuXqx1",
  "key28": "5c8FD6tv59xKqs42XtjxQ16WBc1LZPdqYTYPEru4SjcfkDFz2Js9tF2Ji7ztGmmEH98WtdTEgb1TXQg1JEciR8fr"
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
