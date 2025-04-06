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
    "5tHzePPxC2j9uPsgUtL6pq1tTkWbqMn3WeFkbvurafkadKwqUmAURFgey9MwgEZHCUjyNZoVyR9f2cVq3u5cCAxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xomZpw6RpcSdRrpo57r6DDmxopizeRoLnmRtnEyUpqjhoWMniPWxT58h932e3MFvRe62Wsia8FCUjEEX7NuEjzY",
  "key1": "3TNd9XAagMWFF7fFkyXZDPxBZxjEkC6cPyqvFDdFZizDrz9a2P23CKdMs1HLcnULeczfLaEEcDesWFzo7vgQJNZW",
  "key2": "WaQQ7gec2Xbs3JEJ6CBnqV7jRw8SqU51uLzLgRoouXmdMy5TAwx1vsZoyfEeCAjinQgLw9M3BkxGsUTHvN9bp4q",
  "key3": "5b6ND5AoMxvC6eVFoMt1Z9ocCFRbHPrphKTWyg3RSgiXor48viv8qZhCDXWwm1bv2vMbhpbwnKVtsYjcVyPtr4Yr",
  "key4": "3bGUssULQenKqE1R8JL7Sjs5Xi6jaDCi1UmPzhuHdTckvKGAzNorXVjWsyFckUUMwKMJqPAuJgay1jw4fNrADB1u",
  "key5": "4cxcKzvxC3skzEduybszQ7RFSKjN6q2npWB2qDwMacm95mxZWqQmVnDhHzoxXcL4XrkSz2yb5wbNvQEAsD5R9v1o",
  "key6": "V8s3gPDFD8MwvrCPypHMzZwhW6vs6yw89dR9mMLDHmVxiZqdrRDtP7JM2UTywo641fHpMo86WZ4YpU7PvE67BCo",
  "key7": "5Wx5NFDTfd1uamihM6a7PChD7MjtYYfhVaFXGX7y9B6gQH9BWnZ5TVGjZZzGZH6cyQzaTs2LdoTxHjA55VQZW7N6",
  "key8": "57gxuThMLWmBZRdRi1Qmer8bhdWbZrpXEtVRUS6JosBZDKHfcY1s1MtWf9WTkeSVwfZXxYpqW61a6ysvRTs1JTpo",
  "key9": "5AhWHje2X6aXu5SquzZcfNzxzkGSfjb5U4xZgMbSTbu1BL3pXYt6sedCaixZRxCdDLEVZStuRzjeu6TkPkuc6nYd",
  "key10": "5b2sWJK3KNeFZqWeNJW7iuz6jQYtQo9X3gWTEGDJcksDaCfto4eUjVCn35qxVHfep4B19CMu5Z6PfL4bv5uh3xJV",
  "key11": "3n5dSfGxHCep1wWLNJHmAqiaYZsqm22dgBDYQpzuXwEWaDMHx2CYthbKpzxRYJS7t2LLvnJZR3L3hny24ase5Jua",
  "key12": "5hB3Ldx9F3WpNYZjNKBKhUVcCCfHp4yiod4NWyxE6CY3f9fwaZBDckjiC3kXzSM3nMWg5CihFBurmGvj6XLXkFL8",
  "key13": "5PKfpQavuLqWVSteHZxqwhijMvSddAECUKv47VwKyVTvgxNoeCUDjMbnYqW8j3qWR1mB6eYa9kjoraTNC5ez1ZPE",
  "key14": "nhGy5ztdRZt57Gz4hK7Af5fJ8ZE9f3anoosVhZcU8ikABPiCAzYb9w8vF4WNVww5DLNAgauRN2P3xyXYXDJANZQ",
  "key15": "5ensvbFtFnMBbTEXP2ABC4JztmZHFJZo1qRY2BMfp7g1UuGPWpswHfcudPsYmCUp5tsx5D7xAVeLJ4C5CPjbNHCR",
  "key16": "3u4TkJDQCVCfQAdEYYa2Ts92zkfVNZKowZYDQqYiPXD73VnWoiYsCqTRAEDcjBUdnttuyQukZEe9FS3QeYgQhFHQ",
  "key17": "4nubKcR7CrqzqTUfKyPV4KCc2jUrqBR4j1XsnpZQpsBpPM61H9uiazTcRBUYj6StXByVXHoCub41aBjj5336tak8",
  "key18": "4X83AXHLNNbyU84mbswb7yuBxwLNwuAYGVtATtnfkqCB3hz4q6S2MAcBjNxtkREuuhSJ3JC9jKBYGsTJGrTz8Pke",
  "key19": "8y4ve3PbvKqWospUQFHN8atGm3czGuPDNbR7Yzj5fo5DaZXGwjVN7vzTNtmrv4naMo55pGH7z6fW7Ha4FAtycQX",
  "key20": "4JTqsT37XHqkUrTCuf9qudeadJtsmQRZEYtQ3SoZdZBVhGDjY4wD3CJrryM8nA5N5FYGHvVZfkQ3bwW9KrR82Xf5",
  "key21": "5xXLKcGwZ57C7wqqDUz8e57aqfu9VAVt67vJLDgQY7YzYJRhBhypVSkhCdtt1CBTsNC7Eq1Bo4dd56cGpLD92pbJ",
  "key22": "37umRKckR1uc4YqEezmmBYk6MER8wVzE6jpcbGHR9XkgokxSFjL2Vr6FGymTnTZivNztKSQFBgZdVDg8EhbtQAHK",
  "key23": "4U8QxsdkubXCMoRhRMYjcGDPomnwadEA594gc2nbzEZtfJ93xqLM7AG9Tm1myz5kiU6392cYNx1NiiM6bFxZUwtS",
  "key24": "dcJ8hL7AyXJvdnrxz2CwfesH9JH8zCLLt3EHgSEAWZFqsgLesErTygbgsh8mxmWp9Xb8uJMLDQTxh1kRWu9G7Gn",
  "key25": "4VNt5JxTSVQL77cU5Bqje2zdDMb3DEB2ZxRTUu2qRawHzRNtLpNo26iZDeJB3DR4Z7qf8qy6jXo9z283amLE2wE9",
  "key26": "5Zy1z18z1vzx9KfmuVh5QDbx1eB5MG2LaZ3BkcVyNfefCRmzzguXPxx5Dhdn3KgPZYSNfziDHgYzQSyL1CFdqH4X",
  "key27": "4BCP4VpriSFyQjL7ymG9RYTzk3cr7PRYkYBSU7YW2Ysaz68pZyNMWFmbdzWFZSncpiAy81oupeacNUTQ1Fjct1d",
  "key28": "3X1vtaM3SrJmLGofH9s3GrFgtGYqL3oyUuf6oBxdGkXtKt3Fd8FojvcJNh8KG7CYwu6tJjixqQSFeevJkXE4i71q",
  "key29": "gaByNiqKf2G78yQAuMAeADbAcX9nhipjEpZp55H34KwSKCVKN7xbvVPZSfBSQtoZ9ZCZ8t27paqYokiRmVMAbR7"
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
