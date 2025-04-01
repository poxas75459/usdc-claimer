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
    "4CyM1baYsnRZPiD9gZfT7UppAJEcJ2BKLAY5f6ETrkN5a2Ro1VZqcniqNKjVBro6vYdE5or7LyzWBomipjeFgwHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnsk6NYDXsZKivpR5UJi2AYPzrm45nLkhfYU3gwMoSWWFFFFCv6XxUsJaVjqEdHSjKDnB9ZWg8NKTNsPSDX1FX3",
  "key1": "5KfcuEBdfyxLvrUNG3ngKymcP36nxfxUEjsTL8spapssVojW1MAj2Pmtijv1q4TrseLBQceYBcAXWitqgg2D4j1n",
  "key2": "3AQaPs5ckLYYEMbf1cFaSjGWiv61t8ANGbF2U82HYw1FkpyxEytkrwVAvyfjgEqaRF9z2k75Lrwrs53CkF6M5ArU",
  "key3": "yKN4TV2dgwKUEmQaD5hKrJtWseUuPDSnbESqgMHcHWUjfRCJZ5LRgK4X52EozQHpT5w6gRwjcZcfCqLFDts5cFB",
  "key4": "2e6Jq78b9NEqbrJN1BszLqyDZEL28AvxjeZMeR9fYUDFSKSge8mP5byhmzFHteA6zRg1m2y8vNQNePXPLsrz2dyD",
  "key5": "2YrDQVa5xUUYuHHs5xdzSC5wQTGnb1JmirEHJrcRJfdHHjEByVEXCyNkMUeWZhDnHP97P71uWReeGCMnB3LLHsa6",
  "key6": "2GgkCjtQPprCkGwtZPH69K9DEV7HU2W1wygdGbMvarz5ukD6H3hsjSd4Pvi1aeH4rrJHeZUHguXMhk1mPWNVmDSw",
  "key7": "3eLnLjm51rfxV4CPV1TdxAETb1w77ZHyUe7311GDf5TFdhF1zFiN2fJzeQioFzKkApYT4wFsoc6qUADpr4tCNdc1",
  "key8": "3pZfMTc9oN2cz4rEVZJ1YrDfFVgBzGBDcAjMcGfZNVsj88QTErBBKirDfp1RGWiWgq5eaeajSMunjtfCuJHX1xgJ",
  "key9": "4EhzKD9UDJtyF3DwWiMgqhr9iWSfaoaFjd5RAQvJCswk7tEMTVv4sSgRZbGkph66oeAubWPZDvBqZfPwuxh7hhCf",
  "key10": "2E1xeT7DRajMjE9JVUkgv1cpbxT1L6PvH1gMKNhSWdUTFwTkNrApx38YWb74wqwRFNaVNapQJ5guD76bsaDFKi8L",
  "key11": "2whSrzvt8PRue3U4hxuEVaDpvaVNHbUb28pbAc8fKVp6AkKx2VQAVkZXSUDDtVf7kxT7Y5euQwwoXwuJ6zCsGgwS",
  "key12": "5oAEgS3sPXx5JvfrSPVmFDD5QrWfRPWnLJj1hYwiYNNgvDbGzJJpnoyNjm3oWSLrxjTvkiMoDYThnGUYvCmaSqxb",
  "key13": "3gH1bVUqBwd6ofX9H5GfNTgR8y2Hcb6MzWiixsWHUUxyVgmEMTXEiHYzZ9MiXb3kynF7ihYzCXJJmTh6CGJADdBR",
  "key14": "5myqMSTuQZL5gkcxurtgvvk77HoHpX7QNUy8zt8uHbwkh8mHZAbisUZMu2ruPSQTDn3DuCKW47hivDcPMQwU1n6a",
  "key15": "5FdDgmdKbiWhmVBiUtGZaf4KwJ9sgXLC6pJgVmftMzCSiNW5zqjHduVJJp973nEwuK523tiSFeFmrdtpbLPLnvCi",
  "key16": "498fzVM177CpL4FDJLHLcorCwwPhFE9xTe9VGAPPhxeCAGoYuAm3w2udxrfqgYMF1fNhVH2jDes9zGBp1esFTfDk",
  "key17": "3DQPChVSBkXhPLxxeeJ7AZrcbcAuPaDvWEmswDnPZ47rX4xVKYehCPoxTwzq1b12rzjFevyE5gK7mef1hfFCiswD",
  "key18": "414TnwDZ1c4f492sQpGnK9WFzPYCn8XDTe4Jw4VSLVjiucMvG86zS7qbNAP8B4aDE2nNfvzfUFKDcLZXUDK4gLUS",
  "key19": "3y7WBywqiNfGc1TuXYGi4ciLKAyCwMiAHrevs5JYQWt9UNKyZ7syxP37hWXLnzfGDaDhnRgUSSVGKdpjCPUovxSz",
  "key20": "48TQbrY3r4KBEJc37PYyQUYmr8DNCYefAyZzSBeowNEftqv9Lz2itmQAsEMAjdcR8Ccwj8Ga8BWB8zrwr19JfJdv",
  "key21": "2X2eDmDATjw15vDxGsM1wDrqmYMHnJhAbxfiGtiXLQxn7WqdkHQiVeDh282MtgAC6rcCi89LYWJxp6TyhieEZKQW",
  "key22": "2HXnDRGAt8We45gvqsNx87n8e23aDTAnzFNMQE22Nm8H5nM5CU5Hz7Adua5LFgKFXjzCQNNHx9SSor9pF4bfqPoY",
  "key23": "41tFFi47FmLW5W8P7sJ7a4SVgmWv2WwAtxGrACYh3zomdfCNuUWEfijyehU5CmUawsxV4Xsb4LGHh679h69MeaLz",
  "key24": "44CasQs6HT8AfF34wLwuF6H72PH4xsfVpSH2eg3pZH2yyCX35vCx1wdJDt6GofiEcrAmKrnDQPwYsbD8bUjUptAC",
  "key25": "3ZX8HUndU8q9dxQAkHVMJ8acpgA1a8i7hErJMbvNaijLHV1GTEfUATnCrYzkCq468KJ72A8Lhbk2MVxc4NgJhgcD",
  "key26": "5Yu6kF1H2MxA5zRrdWRqSmLqRVqdiqTH7WdfHF6DnnbszRaCsR7Y6BehpodnWrxoPaF87huCpennWPXt2Kp8vZv2",
  "key27": "2thQsSbVNv4qt38MwujZ8wXzXdL5hacNrHX6fL6csqtTb4KYT1FEDWbWGN5wuCgQxZxysoLFXbZqLjP7oYtGeeQs",
  "key28": "mC3aL7EarFk5sWiUBeKrgquJx6bNtBibbGg3sebNtZouFUoCQcpHMdi4UeUQrRotSYMQv5csDhpEWZLBApvoms4",
  "key29": "5rHrGy79jhkufimgTaMdHTtsKhqsVvoCiBzpGHiRee5UbmHni1QdF1USPwASq9R48WT5TuvCj5twJJpsS55n53o9",
  "key30": "3sYXNgbSdjKev2P1jzdFgujj45fBpj5zSwrBEe7pAe6BdUn2on6oXsmBmHzXJrtbLYyerQeQpyDVdCuaeySFyKKx",
  "key31": "3NZaqCYhdQe5RZGvM8mFi7k93um767LbeFWg1Du9tiYQ4WNGbdFAqdsr8xtmrrAg4GTp9SbDiJB4HeDHLCU75PnH",
  "key32": "2E3jx8qQCZvRoaHZGz4MCWWu59FtomG39JaGeSr5ARLo41CWbHbyM7q5g8hesHqBnkyA5PeMaR26FncCaMeRdXuz",
  "key33": "zEToV2m5PJNNLWttN5VrxcwTuc541AsTD1zxg5TmpjY43ZrHC3u8mhDdp1b9wQrEoEFz5RmRnpT8K3DUPYGF7eU",
  "key34": "QueXEpqqJksL2xZndMTTprDq6JK4vroDE4rEKdohgLasSDEAqMGjM8Z7DqH2psvL4JyHzgZrXRsPQbzU27R8MQM",
  "key35": "PG6r1cuNbEaQVdMkaMmpNkkKrZNPTbFtr5vLd5WehH49g1EtgG9XCAVQrQEtufrp9LLG2TsrNnKsqcZQkhuiZxs",
  "key36": "5bJhz6jEU9LW5Dopcz8zW5H9PDrEbzgR1LSfrGzgo9fmWsd5dgquohDA1cJxCkuvGMGi3XU6ugXF281PXsmKxkrf",
  "key37": "27HAQRKy5VyBRuaB3pvBwxa7dFEiAy3aQwQusZbEp6ajdECmxjDFFHcubgbYhDGEqBfRTqMvu3pv5yFPVXc234ke",
  "key38": "3GhhLrK1CdyriTigAhdzhDRdJPCacXqRsb9TALh6cTKUkZPf3bfPmyifhUqpVjttHgAEBHRVsopBzbXqnkUYuVLR"
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
