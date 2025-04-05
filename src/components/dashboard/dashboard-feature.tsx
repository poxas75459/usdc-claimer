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
    "2ihqRNYhqftNFWALunQWmpTevk9rRtsxxJe2nMyYaTJ5onstufFgfPpvCnuwrQ1JcF4j1ZGGgwScoXNhucUj8eeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhrcaN3CizGwzhQiEWTLdiwssKCWXbP6PeiHpU2zNhD7hxzkVVmTYyEpwv549wTnMmCJoY9mxypQ9DypJxe7brz",
  "key1": "2PaYxvj7Nhy4SSia4MYuy1sZKq18aevfnTJRXBCy8R7uoUBWEYnVFskbZU3yAoUN34sL1gofQuk7ozPSN5VuGhEg",
  "key2": "229HZ1Ghk1ruUA4fG8MKbrrbHYSndf2HBdnV2E8kJALJuxoq7qvkxfqrBokKfp52MuZPoFtPJmWwZoFLevjUkK9x",
  "key3": "2PHqTkxLsm9bq9ZUGCrokCAzY4aot8Jt3rFv66uviKCLsJJvZ9Cbot6Tch9F8vPVob48cxxRTZ2Ckgpg42nLtXgf",
  "key4": "3LQr9ENWtVgQraRBLpZgCZoUuJouwARE3w871brdS55iTk56KnE2EDfq1mZ4znw4xUwSpX8aX6NavtVEy5eBXWhd",
  "key5": "5xWamPPwmXckZsFzMqX3bboFHrmKHnMY692D1VqsvDkw1o8Ju3yt4u17uYEQyXDnVx6j97Umw6Tm9cCBMUTg2JqK",
  "key6": "5ywKB4t4vFMx7Eq8SXTYEMGxNVvVdVyAHiGjWeLP1ujcrQQN51Za2mPoWLg2matrqcf58ds7prfP7eDxGWHxvDMh",
  "key7": "3dauN7XfHRuz8ShG9CBdHatdkSzbGkLkfhhi7kRtqHJFhXd6nX5CAJt51T6FGt9RTBdyQJmqyBJmZVxSEbHviHTZ",
  "key8": "2rPTTd4QaJQrNcXRMyXFfzuWeBa3QJHybvgisW5LN9cqVE5AJevju2TFo7LRWhwcHBYpsGiMcWjHLtem6MocfwHm",
  "key9": "5K2cEV8DyPmdigZW9Mt4QdpypvTeTgNvk6tmMuqQurfptnHoc5T2CLXHkw87jfb6U2FV9Gr7EKLNW6wJNPZ7TNKD",
  "key10": "4UGezmjGxtqUKrrmBym1GUaqQhTncU6uVAkZxAwTGw2UczSAjH88y7iBGQwAivZJ1Bg8sxfCcgNgfXLmLzMGcrww",
  "key11": "4pD1zuRUZjhBfJDfSdD6EKet4Ek8tteuY9DufyTKi97ejPAXPGrposUoceLFvuY1LXkzsf74Jcpnop3cws8bJ7K7",
  "key12": "3wyaL7YbrFrnKQn1Ja9FD4Svbo3Ei6nukmAhM9B1QM76GgRKcmm2wT2vmn3Vnr96z5iuZKazBRnSAuLyAtYxwSMe",
  "key13": "5EDKfGiuKvRVSfpk7m32wt3wTeRnBkJaXFVcrYN2aF12KpGwCZjoWWDoEhGzyyxActCjw27NskaydsvvxB9h8BdR",
  "key14": "5JBpo8C41NrXi4mkSiLiHKNYYZ3ETUJDx51ZTAFGsiTAX8kGfMsu71DER2XiMQMYus6SSaa7taESwK1RTq8Bnhs9",
  "key15": "6H4oYN1ifgrBn9gRv1u9CGiUqbR5BY8g8cRxWMvQyjdURZbojBy8sd1XLVxUeEhfNkZzMEJvmEvtzpTgwqs6zsy",
  "key16": "5TnHUCdZfEJEUMS6rVb1RVgQffjMpxQmY53Bq7WjnhESVJPKvE32v3wzaWpJg82H3PZ947FdgzvFiUTdPxdNWmnn",
  "key17": "5wtNJCUK8gAn1yzP4EbfHKJHeD3spsCGiR7vYA3dZcWt4KTUNnvpNhQywuoTj2FH9ZwyedbiTvckMWjs1AmqxJP",
  "key18": "4WJBFaRBjxfCvR5WUXXsnKgH8RE2h4xLWf5MNcFV7jBXJtsitQ54wfZRQDMwXX8yghGwzbUu9UmYrERQnr2iJbhG",
  "key19": "5r8QqQWeL41oSGy7Fd2jneJ1FZq6uJjqNMiBGVVaNq6NUrx8oGPM2YNr995afVsZ7hAYyVtgrYmH2NsPnpS2zz4t",
  "key20": "3z49vYUgrtW8yDiRcTcDihh7nV8Nyj8JugenhQZe7SaYP1jseMhur4489oSLWs3LL1chtsdRkrhacf1J6eJoUGwf",
  "key21": "3x4XKdNChiMhcZ3pkdVB12CmfNP5z948XsvzxCNXpLRGKg6yeD36iLz8qbm21KWai8gu8QWVDUKYJmoLHVrNQA6A",
  "key22": "ZsqztxrNyNsznL4zF5iAAnPnKviLV5S6ZNrA3muFDF9jkfUVZegS34xxaGHBBeMaMd4YUQBB92hM1ocRMxQ5Rd3",
  "key23": "4PetBQKGNiUuXsqUgW3oSNENeokXh4WpVZ3DT5dFxcwW5toDdZ1AS9wTKVpsTdW2JvUrotBFVb3mDjA6GCW5QRr",
  "key24": "5Y45MJ6XHj5sYWnGYpfy8UVZ5aR4sa1nuoQJ1BhkxDrXD3utatYgmY5n3SeyV4puccS5twHC6CK69Z5bbxVdqwji",
  "key25": "4mxD8KPJLXcfeSdUMKp3FebwxUvqhW7M9wi5W4Mnu6LymVtZynZqfb5sNw7V6Rze7MFYSGg8iGoRmHvAsFriekCA",
  "key26": "616Bk8WQjUbHjFoE9gRDPng1v2shTVu6x3wJvukhx5T4DCxAFgcHeFGmKKDny1SGuFHGjVapX29MJJnj3YLxRpvd",
  "key27": "9jQAkZDbGVHM6JLYL4YgJuzVy4y7hxWPVJgPp97YLw2pUb8xZHgso9brAy2KnRS5xPdcGKgSkHYGRakBXb6e9gy",
  "key28": "37StFftRN2KJpbHiot4cukexvu2BBYrpbidqn1c8YPrWedbKUsNjZJuz2DvjNimdTgEGdxqauovH7wJCunou6ndc",
  "key29": "2XqRodfgFz8BCxcnDHtwaQiZAN95px8WgWxQhLuPB6V8b4fg9oPy3gDPyCcB6UtTnDcX6SAVVrT2ydjMmDihE9DA",
  "key30": "2mgsNk1QxEbCjfjg4GKyAuCuajB6ifmeWSKn7oXqEmEzgnrqvFSePvs4TF7kfre1Fo6VyS3x5bMcxogLpSbxLGGM",
  "key31": "2ZkSpb2pWVwf5HeWkAQTFQsacUSMgQRbCQwLHLuCZPS1B2M2nhKVoMeQoNpHVDctaBka74S5Wa5XDRK2demoK5u3",
  "key32": "5mWybXW3neQvuBMwk29Yr24dktYXp4mRjm7RJMSANZUGSi1QoGTKkdine2uBk1eA7tATsmCr5KHcahgTs4HZ7aY6",
  "key33": "4wBUL18TbY7DqnRgTcyFyCPR6M8ptg8ZpJQzE3e4zSTvRQ3VjeDSVvyZrtJgK2zwb7k8ZT5ZVBxhPGSGWTxVGjRA",
  "key34": "3JJVWkJJvchkjkvbGbnm61ETC8Efu8gWiMcLfL7CawWkw18WV9J6F3PW8APYc8gLERZUJN6byKu86AzhLyKi9T4s"
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
