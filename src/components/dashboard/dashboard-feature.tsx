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
    "5mbKrdeTP5RqEKv4RngUdbViM66xY1Qn2hZwFS7XMHE2WjGyrk9VGaEqQ88MXVv5V4QNVhXEjXmbRWP8SA79cctz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LiwDd2dUjug4rissc5gcdrvdqunMwAjvhvKzCAQhUKpuNQ3zU3hW575ZLXwXR6RXyYVBiJojK2Wtzq5GYKqcKot",
  "key1": "dqLdhWTG98FbykDFZEx9ZNbb4t55GWT8aTKr2BVTuFRdhta7tezM5DNX26NZZZak39WrK9PzLYG1WGN2oqT3JRq",
  "key2": "5e2Dpn1wGLu3K8Mcie5nriHxuxCgoSXvLqTCZbFn1rBZTPbvzgsde5ThSNPL43Gkaksf4MXZ1Fd8FTHUALzn3Yy1",
  "key3": "4ySXB3VbsLjYyn7vqLqupLXST2iQtg1miibS5Mf2uCq78a5RgtWpwNWn1NfwV43Er7ev3DfbpnJ3mwdJ6GniKeZU",
  "key4": "3DeXeMNopzbdPeeKZRY82YFVLkNDjWjds6hgjUyukNU2a1AH2Uf5KNKW4W6vNvFKccBV2iSM3T12GrbvjWxFFnbQ",
  "key5": "2nGFy5K2CTtS3PAifjRfsbDLWFMgTJjZr5QhEutSmChvSpHbCp6scJZsZjjBv4SCzotvF8XsSwMibEFWqwX39CA2",
  "key6": "4HLm8X47zWhwDLnYkC6iSzghrAPCimV1MUbiKDscuZ6iY9DoNsJgGNSkAc3CFKrnpfoiXHowRmty8ADaFNLdopu9",
  "key7": "5eLMa5ShjCMBmEZxzWgDKdBGwSk4Pamp3oCNtYdzcxtCEb5vWWXtYgizZ28BERog9aAEhCY8XDuXivY9Jqyqc56Z",
  "key8": "4F1VXESDeZiFHYQCLndKNGxCmnqLfr56Frsj4kdJW2uUTn9aGVij2ogc74b5PCcKn1PWCutLJbBb5cPHjY7KZtrm",
  "key9": "5MuLa2faK1mjh7RT7o5QGsCAFrDGgSny3Vr4eyzjUwme3DZ1eaBowGUfJcz8szqXVWazyUpwrpEvRSWBFRsJ2qwd",
  "key10": "25c5m2D3kPz1TUmb8wHrhQmf7mV83tjVLCzjGBFBNGid2wkPDnUaUdu6LXL5puHBpcr1h5VNzttDGq2xVe1ojDD8",
  "key11": "4521Zmk7hRSLUNztvJmgaUyPjUDvsMfDTD45C5R19C8u6GnzEKdtVBAibnc7VqHUd9hWM175FmW5gpdaNMAmoJZt",
  "key12": "3QUaKEDwTErUhYvxaANN1xALqVVXYqyQa5P3djnBWq2b4k3TDed3GfcFmeiFbN65rM4ntE3CTKb1SYi5PZCWy4Z7",
  "key13": "3ZgD63UjaQv2k13qaStgioqkJeEoXuhzr2WMpXZBsASXaYhXzwvQcGsDMx29jokDdcdiGhmhnvVyXcp2NVPxQguW",
  "key14": "64W2PsqYdjA5aUt2f714X286a9xffzmdyVx9gMCeCsdc1LrWTQ8uQo8MV4fAEWTHXLfpjKdAE6M6NKA3RgnVySFn",
  "key15": "2RrbKgCxZQm8H5pQRygyVaSHPTK4Ze7LMSjDZUnfzzt6oXPDaLd9a8uuGv5ZGngUPHiDrjnjNXq3fP3VCorTHzZT",
  "key16": "3bJ1BaP7iJX68H5ZSSPeJ5S5Ps8Divrad37w5xruxWEvQmvnR5p4ZQSQ7nWp4R3E3uo1kRoKaiSNCZJc29jCDYrQ",
  "key17": "61F4RHiEdo4A6i7ocswBzjQwpiiVBLgPjZkd8E3kjhPJLTFypw4vqXBLwHSLjgPgq94C9uq3jfB38LXjryTGiq98",
  "key18": "4BXqaXfbcud7FLP77sX2YLRn7CnvpazZUcdTqnXKPueh1i79zNMWM2gtH8KYogfWxnBJM4WLAHJFcU6gP61enjYB",
  "key19": "4YwVogvVwbCSNam1TVt8mCJTQaieFrBocSxc6GVXf3KJT5YExA63piy5ixiDzZ4hWJRinuXcStPouTYjD4xG4Mpn",
  "key20": "4hTKBXdbVL83n4hU3XprbMBpbpm44NKG7E8PcsMxKAbmtG3Nfc185nBZ4eMQtTuKTQeiZtFvmYsALos4bM4JuME3",
  "key21": "22e5yCXLtf9HBwrdDHNcJLHFzoLTL1CmMNdZ4j415nTGWfdPA11HAFDPgDyNaaUoyzWeSnWJpNmJE9aVXs3aHm8z",
  "key22": "H86QeE6W9tE5fdgfh5DPgvRLKGDdNCjFQDmWKayMnFy9GXyvtN7M7LdKZgWXV9AovddGrdsxL9YZW7892cLXeR3",
  "key23": "224PvbAeTu8uWSzttuA5N7wSXdB92Vf1ivYCWN4p6idkSWpujhwdhvj6vwaiuSPxY2UYHVXRTFuEYwpsZ5qPrgo5",
  "key24": "5SKJUwo8KgN6JVNR5JT9kqGjhXraS8ddqx4wTGf5xcmPMxrPzWxWxwEtrxxSfMUkMW6wgvMQjTLU1Yj2tszhdTEF",
  "key25": "5aRJEjuncThzGcynnXKKrw8nnyvAuzyRFVo3K7xweQqF19vyWmBEXhnVDXeXYXtD9XL2C5YXfXWn14s1XVWmnn5F",
  "key26": "4EgHSqp2NAyMtm4AQ1acM6GHLCA1bpc9eT95HpC9qJtxuSbZaQw8y7Xvmi7biurRv7x3s8DamR5Qq5vEHNBnUfba",
  "key27": "2cynWbUMWCGsv7fwGeGJ3fqPHZWvn7eq5DSpyRzK8LrHQNy39A5zPYCJoyLoXydMQLqzXm95zW6eAJkUq3swefdv",
  "key28": "44fjkH1u8mWVa3a7wEbWiM3dHoKHNVyqFyMiBrVJgmXAcnHL3EREq6PEEndS62HZgK59ozDp9z9gSby34WK9Yu1D",
  "key29": "2r4UmAB8iqBGQkhgRpj8opiNCDTm84xnzB529SFnMR3d5jTiZpnf5nFcQDievTTKZy6FcBMbDCSVnDcPWswjVkzx"
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
