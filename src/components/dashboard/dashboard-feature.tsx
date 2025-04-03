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
    "5KD4YYycbXBrCzA4A1ALs4q9PLGXsVo3HSHj6scZxaJR4817mgoKF5tMyaGgwK71HxyQk493X7Uhta3CVEU8fJEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HbNsizUYMcTu3dw7uK9MHWrqSQPeKTCJUNvUHSv11uArw3nFV7MapZLaqPVqrkXcFFQCrFzCQH7Fv6CXuhwT7fF",
  "key1": "3ymzGCdbihJjAPW5RPAGKzWcfjR1ft1m9rHF8yHLwXTBunNvgeu5CNJyDsXPdAN9UtwUhX4KA7a7AAmGujTT54jt",
  "key2": "2NnYN92oVTj2cPxFu4b4NKpan2XnjVJiUwmQrCrVmJDXjb71d5GX7CoNcCgSJ6yHVNgsVLCvWF1xS4UteLFo29YU",
  "key3": "N7j93ZoWQFcWCtjiE653yNtCbJtUVzZTiwkUnjgaFonEvxKK1r2cyCFi3T4BqWMRk7Xp33EaSBFoVcvo4V4aZyS",
  "key4": "2rWbbTotAQAdMudEkJHP1DLzFRndijdsRoUpPrhhfGuBphb1sMpbDFCm6WHcmVnvuakmDVfHvzsWjD9oyo3mZDBL",
  "key5": "4XC47LtD7st1myZQh1pyJgRZq1q8PtjcPdS71c3v1ZMk8fZaVGH8pexbeTQ6Jp4cYkUVMH4as6uVsyZDaCU9gTHD",
  "key6": "4riVuh5rgxRxVxa5fc9b8rtiQXvPF5pjYWVfgXgAaaowLF7WfZ6aHpsgs1uYcrkDyYeAzn6bWtZmArbowDEwXd6C",
  "key7": "2EsBmuF4zqnEsihLs1gzMQaDX164Rwo5mK8AdS3vPN3HssJ9odbZxZXahFVgUc7WCTURfaLDV57Bnb4nayfp7w9M",
  "key8": "59XUE6PkCr5KsE8GFchkEQg3bwJ3ohMx2e6kSVY9zteyyGDZjbyggnEtubtZKuwYoPfXu66z8SEafwSPiB5rowjV",
  "key9": "3kU6p8mzeMybGTXsqr3tFxnJHxYXiTEztUWjzjZrpJMwaKJ7arXyKHLJZkrF8YGKseAA34cmJRFCwFRLTD8ntD5H",
  "key10": "XwobVTeERumR2LV1X69oh8j241vBRFAoBfcaajB5tSoZu6hy2Ns5rpiL2wFyNWGydtLj4JqXLM5uZFLQC1joBKX",
  "key11": "2Y2m5iKrHzbUhNpjaVDY15ddchpUgJpyhRFwmMx5J6zQc2u34mVJpibPqfvCjXWHoTcr6sUy2kqGj9wmZwz8DzAz",
  "key12": "3WY7TaxL7yAKnVanVi4ThLtQFduCt7cK6hZQm4VzTws8oQqf5Ky1hQkCppnbSJhzBiH84K8et2oH83uYvLX5dpEc",
  "key13": "5YqEEGPs88oCdw7W1mRG8Nr2ePYeG9BpNNtbpPd1uaeMvMUB17brRqGG8BiiVeDBy1vBSdGRwAoThTN8VYAahrzN",
  "key14": "5rSd3BQWVwXgnqBnLYrqAMVCKLctgRomJJjiPLcTX2Uk7BMZHAYC7oytjq9w3wkRMrLcFVnbmRgyKkLgm9NtH4gi",
  "key15": "abSHtVBmgfnMAWwj8TH9t4aNMh8ig4xyFTzHeJF5dUes52bADR4Qk6GVKSkfpujnv1gNEwBWravTaZAnHzcUxEM",
  "key16": "4Mde7nRDrnGxyt3n2yhmvgoEPA8RV4hRi1YEz27iV21swJBsEPn82kTXM6G7NYPyNacm1QkH2ZhErjvtkBuMTNSM",
  "key17": "4Kq2cSwKf8Wb8vJuo8PxfqjL25Y1cCZbqoBg3DzmgSsue4XSQHA7qbA2NhvYzV5VyeCK8isKAncfxcrXFfcuWwsu",
  "key18": "2kwT5QNdrkFKzBZKALXNuiZHWEqvYPkZndvcdn1dxPLz9uDJkkgvyFBScsFgaTa1GWn7xbqdtAUqoafjWkYM3QtX",
  "key19": "3MA71QuTPViFNbqxUYtAmCChisTDbTNxyCaupbtxZJHZm27fc7gCqcqY8djRv4CAbwns2en7H1VeqnW1sMKLAMt4",
  "key20": "5x8UqjXj7yYFdjBgYj5KSpJUkqDTYGenxqq1qY4ioZ8XXPVVDHmZFJLVzamyGu1TVLWEQBQD7MsyUnd8bdwAwRBq",
  "key21": "3v3sEtT2dJ4xxm97MxHTxaQAhqa189caWYV6a9CcACsCSx6HbMM1Bbpo4x6RnLAFuQ7KGMD4qdvsQSERW7pYAc58",
  "key22": "31z1wgG71szEYGhvDKum1Yt1BCtGCddbcA1Dgx2Trb8XoX9Bb3rkiyVznC5yUgMyxrFSnRzdtYZk1HPqwAhrBnVi",
  "key23": "28kGDhwCUiBg185dZvyAvD9QXVDGTtfJNdY1o4z1GujWFrYD9aaGvXK1PwJmuZTfW7X6eZxSCECCDX5kZL9bmHk9",
  "key24": "3vnuEjsy6x8yvoxPybTFtDLmMmYqWigTaDDW6DbzJ6wiKHXDLqt3kGEPVvX6rEGHAATmdhwgTu2GwuKK7pAZQCTo",
  "key25": "4YJWBd8keQ83hNwbnwPwpFRY4FGChkasDE83QqL1Pd6rDVVP3gDg7EHGakj1MT3wwVkP3XVBh5KN8T9xUZTz7P3S",
  "key26": "4jJrBrto9SBY35dwPcio9MTb5MH9wQjdZ1dPdevHw5CfkhswkyppA16jjqEnhhZTkef9uAWUNuHnxUtMFz49tonp",
  "key27": "JCc6cnG4GKJCwzB16XfLTFvyAr6hZHjaq1tSBZ39pg2h3Cf7NPtXo6Kyic6a1spedjxiTbWrEwwiZGe3hpwXDXy",
  "key28": "5usk8JVZWgHzoGoXJpF2VuCqqRWUom9Y1YmTUySAkj5Gb8e5XXb36xLJr5CMbLEo8jDEAhmooLjRdZaU6bWunxAj",
  "key29": "2pJ64JAVhDsu5Ez7ueLSmsTuqZkUJ99U81AbdWo5Bd17MxneaATN4jc2pjAUZ8EXUvj8toZA7Z5Q27qm1QJyMTdz",
  "key30": "619nBpfvxjkGwAFA6UxPLe1nmqehDGMvU1zYaDbaunrtDRDe2KfuZKCRdnDEgVpGKyR5JjgmdFX6i2HbY9pzkySq",
  "key31": "5Aac1xzWDLwsvFbxGPq3w9JSJAmaFKnbmoXipR2mubzc5UgM8hDXHGVT2Ye8cDjk7D7oCnckasdSU4ZCPF144Wsr",
  "key32": "3Y7u9CL8R7bm4PBbUydWrh6kZABWDqgVCQYFUkZMK4mBN9ztNf8P6WtizbXbpKyXysN2y1iC8pAgf4r3iGBneXxv",
  "key33": "3RjDW8SmKGHg6MLAY3Hm3UjhYymrDD6sGn2FhQX45ryYvz7bjG2LL3VbeiBBWrv4NAvGbMsjXbYxTsCnTaDoUHf8"
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
