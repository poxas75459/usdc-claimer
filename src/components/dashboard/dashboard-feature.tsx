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
    "2kg93MMJmLPJGo1JCw5zdpeLYak9xr2Y1xf5iK8zZSazwz2sNWLfRkhvfPpaGJUX2h81f6bMscDkYJuMu9na2gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62V6rYnWyqAoCcvUSx2cjhHALLScGBvxjXY4CNGJazYK1wTV1zjvg9WcoSdMNvzMAykatM872VTMuks6zkZsa9SW",
  "key1": "9Qc9rbVMMHB7pnkkD7mmaNNWTYwJ44NmqoYcFCjCqU3zBeRA9ia9Tk3Z8RqJCMNqC5JZjGqWE53Srygm66dYoLW",
  "key2": "5xTrVTTmJX5CuDNxgLFEhe7B37VLcuMsueGgJTfbpgzGGWHkN55KnVwnea1pU3zZc5fnevitoKDTc7QuXVUm1DYL",
  "key3": "4AFWXLyAxxQLC3sGstnLxjiwDJz9RMAohAnp5HAqpz6U3T2256Fwhuv8qcfpSYepFXm4Genguec4Kxk2zKfcjRke",
  "key4": "4HYxePhMdn4vNFjxEXaahNamznRjXrwBRcBx4P9pDZf8JUi9XvQC8n2r1tGFR27NTJUinmb1djR7qFoc6sL8Konr",
  "key5": "7HgmcJ5oM3HxG1swzT1u5M9huC8Q3X1PWzq4NpZTfQH2KF31wQ35ApRWpqbrkE41GkkJG5E3Jd8FE83XA38tH2Q",
  "key6": "2JkRZaVYzmvQM6kVoLWTe85AEg9nwmVi4bQtgTo3yPP7gWaFydnSePyxEsJ4rAaD4VkwnpDeA8Fv3Lh1pw2kv9HC",
  "key7": "4QX2SVpwUADgpf5SvCAtPyTsKspBVpDqWNPk5oz96ZyPdqnccBxWZqrj7opXmCGGU18wy1QgXEkneDMCXyNEdHBd",
  "key8": "22KDKFZSrZ9Ej85PMUaja1sdj431BjED8V59oN7GCrx5iAbx7xZh5pdy9s8E2FmLDE3sSUYiTqjnpLqaR3aXLDkN",
  "key9": "4eWWpkUf1AUtrc4F1EJbpTTdYT2zNX65vSf8vsBL9NQrN9mcQHMymkXVchyarDGpzbMgZfc6QgbRTsPxy3DEpeTq",
  "key10": "2gs15JmfUNvtVtSfSQNsPNz7tLaNMUQHx5XqEv429kXSJbMVcvGfWhUDu4Z3QuDrdVSpQ7CyoqheFHN142CTrjVj",
  "key11": "3ULF4XMUqyvXs9VvnV49uykY652wGp7gJRdsnvVBLTtuDSuGnMJs3oa6e1gWnDAWp8YFTAkQfqop5gbzryMrFuJX",
  "key12": "3Dvwb6dugTynCi86puDmCUcCwtS5tPpuL83vSpTxdbr8Do1kC2smepaJ3wTEoTYURV8U9foKeRSJqWWvafbLsUci",
  "key13": "3Ygf3PvZwPqxmUXrmb2hmtMXuo8LayZTo9g3UR84bPRN9xfpahbGHkE4eE7MYobndoQLYb54Xa9vdHqTiwxzhyAJ",
  "key14": "3h8sHa3uT8FkGQZYJVSpYjvjyhjcT4RzNGc3LoVR4VsB3nmqbJMdKuWNVHCTJhaTqUkFLsDAc2AzJLUaSrKE4LYZ",
  "key15": "Rv4maLwj4x15se7zJHxi52Su6vnEX2r5CnJsM93hwzVzdXUnuivs7qi2avmbpLFGsMvGtP6FeeDiep5MPa27R5b",
  "key16": "29SSpXscuxgxtCoYkEN3MePHP4xo8sfKwb3bxPDKZPD86VtBvgSUurjp9KQicNqm224mqj31aA6k372D8sDFj9ZR",
  "key17": "5x19kdEsoxikVrDy8V3VL9mNUmzVF45XQczYAzJsgW1ZA7utgSGsfg6u3W9GVCaGDwoogqZERLceZgKwVbuUhdH1",
  "key18": "4ehPW7BjB3ZeoTwtjhCDsJdsUWSgXeH6qEt4iu5r31dPemKh962xWrL292EEhojQKPdJGauLb4jK5thzjGaD2yag",
  "key19": "54ZSNJM4a8HHqh72MipmR7PqcBji2s8nnvwEjGrLZLSXZXsM9kvzzvnaDXX9bLjUu4n8EvhbFtJdKJyBEsWFf4nB",
  "key20": "HP1dQe8WeA9rJDErBaJtERVAFxBB7CSTpzvRMz1X14BFbGZvXMMBUjvn3ALFUYejzQykKRb9PB7mWCkXCPKpjkj",
  "key21": "ZUzhiyShV2qStFwkaWGsKRCz19s3py4PPHmDeoGW1sdqwc6Z1Bo1TizCHXCeJfGWBFutMLsGRG4nCFH3es4BKFw",
  "key22": "47z7Tu7NYV41sF6L9GvFcsTVbVeo62qBnxbFPAxnVnMQ6NMt5kMxH6PHbfFem9ZreymBMcyKhZ4s5ytMvXNs8KNt",
  "key23": "3YJumf7oeikASuAveupQLHBbXt5fryCtiJtPErKcTc5P2KdJSmmQWbsHtDNnVNMSscheGspmjNM2rwXxo9nBNvrh",
  "key24": "SKuL6VvPtYQhzKraJB8yeNfY3bbUYvjQhprcmMMonJXMcxCZ28isPqgVtnjgAnqq9jr5yv2x8R7U93v24kK5RSn",
  "key25": "5h8NYGjS4LrkjCXVGMGLYoDBUXj42MXTj6gBgTC1eYDgHBLTyS5iZqzqvUGhjkxETh32qgLstW4TvJRKc7WXVmr1",
  "key26": "3VrNNgo2sVqRBD3zMMn5eAtU4FkjxqjGf6M6kNH8TdgdEPm4UhNhGoYmP3bSDwFBrr15b5jgtLLGAxrXCxybSQVN",
  "key27": "39mFGPH1tG4SbnRoR4izeULUNN3r3ueuijhyPTfS8HivxK5CMXD3yfYPMZetXzancmB3TowhBqVBkMuWvZ8qF3Pa",
  "key28": "2R4j3rLCnpYYL2uHnCcUgdxGYdbd2bqu4d8x1wNo8tqGDsLxFUUJ2LWqQxDg8bPmouwGUUnVnDdyaG31xaGAoXUd",
  "key29": "X2EMEWRF2BFSXL1qUFcbi1VwtnzVpe5Htsd9bj1pabASnbHUfWWm97nvydBA4wwmnp68xNddZvCS3dzttMGKV56",
  "key30": "2BHCbggucJWdtYGk1tccF7Lp1dHCZqEhfj8EGiDimxsQHVEprRaVeNgt22Jif1o4FnhAqmqVdByL3rEF3NzQjgqh",
  "key31": "MgDoocQ1EuBJajmNBDagmWAycGNwendQcunotkfDRqiqvXCshxcsTXZ1iKKj6i7bQSHtQ5gfm2ynfx4TSBi5fef",
  "key32": "5zRa8NGgwCx2MbxrLhKUwcUqohyKkuWSjtrfxbtNDhMcXPBLf4nsq2Ypzmceg4q1Si7KHJi9wgQv6VoSV3xXrJ3A",
  "key33": "CXgwzMLtiuARCMi4MMGgRx8NeyEdYdo7xWaRadaZXDgD3F5iqcQ38nFUVAeNP212SdZPzuc8idSCgD9nG9rit2S",
  "key34": "54JxsD3wcoWWPGBc8GKSTL7WVVyKbpT9sfY5vTrTmxjtHkCxMzbpcqExY6WV6UNmvDYydkEQW3pwSrpw5n8qLueV",
  "key35": "439X1CuU12xkDJtAqqB6xH6Hw13UpuSexqTC4BPEaHPuLpf1HWS9rxwD1nG1fYR1mKZewKoL3Y5BWkdCtuebuvu8",
  "key36": "3JxBuDmDgW5AteqS41CoUvrgFuysKTeEo831f781NkdfaqmJayakZjNCUEvWnfRjJPiRjec8X8vhRJn1rLtvY3ue",
  "key37": "5aAERbixfwMGMvqcjGMLViq5PvYevuf3UNPcLwWm1SE6hJVjvfpp2edbYyQ5jXmkAT4HpZG9vQcS7kD9rRyLAKYm",
  "key38": "pNdjRmyQA3wW2T5t91U1sT8AtfQzygNUxX6QtxwYmXDNRPAEzEqkL6T7ebYwTs6zjka2BNYMJx1NpKYB8aicrjD",
  "key39": "5zV2HKL4VzHu4LB8PR84h9EVVQ3PVDR67qsQ1rA9t1U1qGTiw8ykAASci2Q1idsP5SCSiv4DLecKkaynBDgCvhth",
  "key40": "3S9S13LG2R69Rt7bhFTfGD76Sksq6Wgmzj3czuccHHX8hrTsuQ6mh8EcEqKhSSUCTEgf1zHLojkwrSNtHrmxK1i5"
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
