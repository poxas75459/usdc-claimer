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
    "3X2S18PGEDc7nLQK7kM2QShpQidSyvJR8dJXZMt7V1GzJrxBq69AsL9SUpxSUHC4tqAM5tX7jJFTu5zBe1mCUunM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5QxVrSsBCqG9HpcX7dvuGVv1C6oNayNVHyxsNwjte9XRhTuziA2AXm19VCSkjsw8eFeb2mvET7vNkwdZyZAo3M",
  "key1": "22ZK8QCXjEEXZbJxp5FdpYomsSYLcJpJnz9oV3x2vLnJfRXzckkDsV5dVDCJP2tTS3T1vzGWAumheGjeEGbPD5ES",
  "key2": "QWoC8UE1CPhqTNxcQFE83Q2yW2k4Zvy5E6oW1Eu6nYHPsQBB8F3BrjHvUmg4KppcX9Y2r54kdaztXKiT6tXLFTq",
  "key3": "4R9hZZQWLkaq6u1rHgk6LAE4KKuwEEj29poryuFkRuSSzrVCPQKzM8x8rFyVepBNWBS6vvrYXaVFt2udbpiXdVEQ",
  "key4": "5dCB9TqAXga5mvUtJM61sayQTFmDhPBnE7QiEpBEogJn9yFwcwYxfNuZAXfWYDWC1yiJjbfDf6wRFz8nNCQjC2a6",
  "key5": "4SY7HKeiH8NbywYRJ6MPuz5SwehrD2fVCvKvwo44py8BQ5ADmmBtGJFb56B43XEc51GyLzjsqTx66mV7Kyz5YGne",
  "key6": "3hfNsfHavrbdVbqi1dYGzEiR6kbKjsjdX8kiGiCFsXsjq4PzAp6fx3ERjoZcZvb8Rugokz1CsLPWDUyARohFfSdN",
  "key7": "26jDTrn7cAbXcDezs6nTwWJ6BHDnQwkDWZ2HrmxRG9DJwnxKYgByS8uyCeWCaxjjXUBhJGBVUTpfc7JiNnJZpSxQ",
  "key8": "4dYMCfCAYBXQofCTgh6cGRxHoey9H8cfmYLaey15wf9hfK813EzCvpsufrZMXbsHNxKjR8NSDCoXBVAQ8DbEaSu2",
  "key9": "24mzDtwWLwdsRP56BV5v8MXXs31dqDwyuLBLpnAjsQ49pYy45DV3H4KY4UWpoa7AKCCsM1yPsuHk64wUg4sSaUDT",
  "key10": "21FtA2gLdtNz6W4nVfXCxBhXax8pBWRPkQAUYsATEYLAK4Y7Q85Ey68opwkq4Fx6Z8g9exh7gpb4FoZY1vgCcCNT",
  "key11": "561MJpRdnmrx1ccs4FCac8sBDyAC6Nth7wAzDJsypc7WsZ6ahypkj7w3WZZNuM2HMCrXWd6vitM2fx891kCyrZiy",
  "key12": "5rtwhauYiriPVLY8n8KR3E5o6V4tTTtiYhB3FjoghXaVsFCwrUNZ96eXw7hkWNaAN8x88kM1vPA4KN8KzrvHxUP6",
  "key13": "51HjDBrGPAzvkZr24ZwW4tkQbAFhgwasaB2n6A6hjCCzQ8hxpUCcgx7XWm1ci1FDdhM39DyKAo6YNqNbCqQqAxp4",
  "key14": "2n5zGDHDAuPDWu1Mh6VCSzmvatetdCnwtQYLN2KjteqzQ45uP6h9pDGG97WPhkujwv28aeoxYjGZ2TfDLokXkvk5",
  "key15": "3JcitmGrXKkhqRanyURYUFZeik4F1FKxmdJmRajusJsjsQhKhGG4B1hFLycGDWMo5cncKrzDPDzmPHCSUayBzfbw",
  "key16": "rYAyR2FawmwLvRLXtZN1kTBmTpUFcjYg4ZuXVmyCw4aZ78gDCMNjCyi9FS2RhXEaZgqpPSoQiZzFN63SMnRg9LK",
  "key17": "5ZJ925a2a43pMRarLdsHKvnrqF7XQW1gU3w87N6abAaQLx4tL9iRdUJRDnytxbsmiABZpK3wh546Tz5G34cnLSUW",
  "key18": "2e9DiZeAnJZyenEpdJJ6cF7Bv9d5RKBWwK4vsnAasHSVHT33L9jwiXf184EzxDjarUUurZsxY9TjPZJUBkg1RYrQ",
  "key19": "yjsCLf7XxcDDy1DLMm1Wcj1iUMMmhpq6Mmp2v3oh3Xarzc2RszKFPeVZzn1PNHGizcdQYPQUCaHMzWKMT14B7Pc",
  "key20": "VKMYk9jGTfXVep6oXq1YXvkTZxSFwDh6STAM1DyGuq6gEY3GabWHHM4MrYMU1Ayuw8cEbMuzGa9UNzNUVquzuTE",
  "key21": "mqsQeQNN9RB4nZvAyzSMyrUvrcVjhkZ89vZrsBs8hmpvrQmxjTEGAceHhG1FduttopVYFboNU7RiLsEZLxpMuvH",
  "key22": "3zemjEoD2iya3v5cMFQDLKbYWaxGUk9YBEBBxEJUFDujaW1qjHAFzguEFwwaGCw1QYL5bRJ2tk2W3qdRyJ7ZsxeL",
  "key23": "xizJwuabsh9G4xR74ZkDKRyMns4EbqGfd4rE4teedCq1X18ZWDsxmtPxSDZ9UuweQXoK2A24wp5HUc1LBA6kt28",
  "key24": "3whuByE8jbNZyFt9kfA5vJrSNjkrAinhcXh9uewrpsyXAYyP6iTrQoFjxF3utEHbUFFZe7UW8upwVSmqLFC83fSC",
  "key25": "2PQ411hvkUemTTj9VxVScYUp31RjAFcPGwggVBE7x87q6QesLZHjH7S913Jm49uRvkBFUHgv3MGUQTctdofiXXES",
  "key26": "5ULci2N3YWbhcpur5nnHs2bZvTCkGzVJQ5mfSotRkvgdpiPEGQLyLefVbsGbMGqKMxTpARujfo9yryWshHBAvbs5",
  "key27": "2wcTkJJbSzDWgaYRnV9kk1ZgrBPkR6WyWSPF7T6AVoHUht9QDrdYUM95qX1x64u7bS1RfE3XiA5i9Z2GNv7GR5PL",
  "key28": "4KoDc9F39aYv52aLABP9nYt4hU8rxvdEAtJsqdTqkmLura6McijU7GDd52WSzzJyKrNdHvVda7oBe9fob6kwEpFy",
  "key29": "2ddnLbrtbcdzzUarWVqVspnFxS6onsMAkUxC4fT8Ka8dCn88F9ypoWd6USEmWADeBNh7itJEnqHzbNq1Hpw8V6Zq",
  "key30": "3LNiyFyymbcLqpTCzBiXaRpundY7Er5BGwqWkSdnwhLDd1BtNnh6aJtLeFvz48xxMwH3eYxv18vydDmNbEcE8STJ"
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
