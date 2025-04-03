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
    "snS925VGotCrBJF1cYsHdJTKwqAyi3dN1UnBXFgGRdkLxe2CR7bSDPwPyfDvzeJ89UXwZfQdKRM8k2JXP3L9Btm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hmd9toMDbzswMrwX8yUREYRoGshVWv6aKXHZHko3EX6Gz8otRfFbTvk7UnPxsvuq9eTvJoqHP5qC5QPBb96oGDg",
  "key1": "3aiW2XzYYH6KHp1C5RLj85XWjgTzxKAcHSnQZXSYaAZHLvCinYprjtGru4coRirxG4FXqcpLYV5RLViB6b6iKrts",
  "key2": "Lmi1PCLFrRX8pc9R6pzumv9KWpMV3NCtjKJUrhsyjf32fBF5jYK16v4VJn6LscCZNbRd4MLxwtzdJM6wB7p4Mrc",
  "key3": "gNYrA2KmCZLV9a8FrZ2ZnT3A5uekswNQBQiLDsfzP2jmYLFMDLAmjeYTsRqu8gELasXEBBNuMsEjCx3yQhKkkTs",
  "key4": "3Z2PwGbzsbUjgxb6qsiHNqxNWbQFFbAoxchjqU1LFA5xHZaHFsYqtnQuecxnWGjCnvdVLapXb3YKjcUKB8nVGPNx",
  "key5": "3sU1jevngDcqGWZL6Gb2bthyPSTiRFaipb8B3AbFiq5GtC2jSohcpXHeSp16haNyi7zxkJQ8gPuHCJAqYD1wJzVp",
  "key6": "pSTvXePJV441Arnooq9iFHdrkarw2QHhdKtvi3qrXmWLS9VGa9y6cidh86JQw6uEqRr6dqbQj5Tu3rzaNUEaGxX",
  "key7": "54LwSsmEZ1j4Fm6wUarFsKsj1pYF8zEH4rmbE1NUwpqK9ncf91AqNUYg84VbQ1T6HDu2xY49wEms9ogtACJv7dVq",
  "key8": "d4jYhraMDyA7NiRfvwiyDVM5P1B7GG9PisUR1dyC4U22VhoYrDPASKVEVKeXdCeo6LTkz7Dn2B8QQxEXFYixhVS",
  "key9": "497gPfZJu8f6TRQpU2x5x9dmkeuyx2zHWtN1yAgFwvmWTP48G5T9FdP3UFCMbeAxMEUJwfsPVseKUKa7xTdb8rKB",
  "key10": "348BxEiegFMmHHcxCUPVy4wQzwfcmDE8qxyF2GZPo2jsY6uGAQDidooJWjS1TK2R7HXeDkrxnAWcnFGAi9xJTx8A",
  "key11": "rFWspirsn2peA35DoTjJxo81PB3d812smCz7V5Avjz5KdRHqHXWwsVNyun9WpZS3J17ajFXapBygrA4Fr2ULGLu",
  "key12": "4ubfG4WBji6U3w8FdMX3it4htFMp2iMrtM5pMeP8ghXkc9aGU5o2MCFyyFiXXKBh1YoBYDjxtBPDnWLYszhEehum",
  "key13": "36bKsQBSdAgdqifojrDiciERR8BqcGSKJ67vwqMQ9hH38Yi8s5BFTLcc8i3z4KJNfbeTxCSWHfv17FkMVfeiJ3JC",
  "key14": "CM3dXYhqht1ejmc6wco48WUwxLW8gckJ3N3f5CyxGqfa6T4ViaioNmz6sjNTciF2qU6s2pyUzTAeeeMKYg8EtCK",
  "key15": "2pjpNysDm783QTFde112QcrYTrWXjUuTsjqoDdpFATtNLs7TNpTZoAo7uRVKXLkTWQLZZKafWJ3CxfKHqMKYNDiA",
  "key16": "2GRjkd9Na9D1PvAPCwPq4LtG78YprthMGkfCeZczfEuxdS6ZeRnwUqQYSRBMwd8XGcq9hVZTnqHnmv9ydfFBm6df",
  "key17": "u6TYUGJbpjrpBLwARmMW7opqbYYKDFXsXqwSyWj7JbbkjLfhv7YqUnaKhY4tmdm83Pxano9mrPh8fkqjvPMxTbA",
  "key18": "HKMi7nRpoyxXqZUXDTWZyueadj91LUUpfRUrXnp69LMQMswQ8DDTqTLiFstc9eY2tFTUUSeeExG7dvcYbVvpZdH",
  "key19": "5q8qxeufkoS2HiiTj8eyVuo8eDY1F8qwVLJBEshZW8BWaVB8ZJFNUb1wTJZTYZaxhvp3GtJeKwYbGZpRGEk4Jvfe",
  "key20": "5cbgYMGuCvACF12gxuMRdDF3gS8JbGQSTxfi9BoKfeNw7fXmRrGjSdWN89x7KBQTrmCksk3cKepfeLbLcF1BcFuH",
  "key21": "4n4nXSnr7ApPqE2T7d1LntAy9HGDRFBFBEfVxtXoYCsn1xrgAzjjyrsoaomrrRfcBZv2hEprVZkKkV5twZqrX3sy",
  "key22": "3vMc4Wr4fJ6gAZzAzJZpiVSt3qRZVTMdqdrBgKizjCaA5j2N5jLahrcXcojcUdMHvarhB77C5pHZiiYpA4J4MtPo",
  "key23": "3x3zpNTrgRcgdKpRVaL31YuNkZHsC37rgLGP2dFFxHZhLubt5ecSedZmX2foQRvB5rWhMnZwqACWWErjUas8zYNT",
  "key24": "5sQx2o1WpS6c6c4AVfUGfB7pgJNusaK6Dhd4PfqBYzTSQqRDgnn6g5Rd4fKuhPyRH9YeFtLsnf59ngUthYMaY9Tu",
  "key25": "5YpBfYKnZyuMYjVMLLqUoJZYPES1PQhBEpNCKg4EH29BskAbXzNLm36VcH9Gn6Qf4n9FKmt31Sb8iUfQj8XkysVE",
  "key26": "3HV3niP8Rns1iSerA3Se3kpvrGtJWoZgEhTw544T4PbQz3DFFiBTc1o4LHjhjYaU374NiG3Jbz79XhRvA3MVCttQ",
  "key27": "47VYCjQKXDVHbGF3GJK2n2eJnyaHnQBkzdjfp4dq3k9NxgawmXXNzqVc7sNPrD3NGXUjt8iLVfuSzwGWm7LLxhBg",
  "key28": "5b3qUFBt6fAW6Fo1YVG8Tb9NnssCQeV529osXq6Z4Sin8EiCEDjVY5sSTTS2kUanaZWS15QCak7j5dE5aKyM58TD",
  "key29": "nbk3JPjzw9rqWBPEPyV1B1pjZLRnDbzQsovAGE4WpzDoEcD6GbrdPKgALZjpsskz9JZpCqPBEPXKK1QeURoxr3S",
  "key30": "55f5hFagxaFRZSNoGYk3LRmf9pqmCj8TYLFmQSu42YCJuxuVnsWV4qNrLEXcHQmgNeE51ZHowCmZ85McgimGxvX4",
  "key31": "63EVFHkzxMTXEBPEXDMreWFo6rWjpJrnPsYccB37W2XXvowLj5QFwX1CGAACfcVm796EGjke7dLVAU3zpJuf35qQ",
  "key32": "2L3Ebv64rkxvxJkpKuxEN8idcwFGW4zXRuG9p2BCpY6gRs6JzeRdiNtB9RiVHQNMHWRo9SojQGVdBhoxyweWakGj",
  "key33": "5k3kH6fJwznGDBvaEDvPnbPHNv5vYyaNXo8SNBsjdRjPfMTJis5CS4xyGefL6AwhjpmC2xibBRt2bq6kqxvURQJK",
  "key34": "8GMdV3Md9NpxbfAjvvfSga9u1aeJ5YaSFHmvuhpiErYxnsXj3RNdZm4u1dpvas4A4796iZ3JJNW1NtSq6RWMoft",
  "key35": "4PhSb3aGnSv8QCuPeaUhwnGhzaE1yjiLwp2cbiUF7D2Jg38J4XDAmawxW6j6RMWNTg2E9jg2x8pb3U7KbFhvZHbJ",
  "key36": "NGesiXsWXHjSgBiDcJbyRSafj3yMFhp9xQDj99Kh55hAFkpkAv9URpyMNaeLGnX7T8GmMNrWduPLPnhybLp9pqQ",
  "key37": "3if5GucKRBm6zQHc8XWNqX5FRVb5UHwfXkp7sQawYaMcvrFvrj6wwoXWvqbrjuUEuS7Hr6MoVfZn4TMY8F3fc8Sf"
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
