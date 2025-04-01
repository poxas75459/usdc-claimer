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
    "3ANueULR91CmbSJx2GCFEYBKRJAuJxxhc49m9V6GKksnTpSgUpki4VzWqeAeJMC3b7j1x4fHyNamerCFewF1HbAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwFwvR9kxNTZJwSfFdkiL2dgQt3hNnrVUp1FKPWdJZxhV9saZpQ2fSxEJRD5A3CyJAyCUBVb4sJ1bow8hfC9u5b",
  "key1": "3ioepnnBJ1TdUAQVAJMBDuBH7xeDMyfdeE8PPtFCTdDpPBxQF6d5JoGiNwkRcrS6xrFVuRrgtpuz4kTJGzNQcdTn",
  "key2": "2DrauWLggbuJsCG5QrWLNG3bzUBnhvgGdtWi9AZkqwBD4EtnMMfzkECynhVJt488aLMETT2SQjQFfEynp82fcpju",
  "key3": "3ZssmVwQJ7wHocnVh45ZuRjhsC3ihP4A2NuDQ1TU54evbwUAyMEJ9NZwLxxD67Rk55cbXF1Cch347DqEo3v4CEFg",
  "key4": "2fppws5QmfPMEBZ4EYEwiE26m86E365a2VXbF5FLk1BjRJ92CCMaZGHzn45hnmS9ipKvj3bJZJnb3n9UBmRtJ1Su",
  "key5": "3d8XpGkf3wihjozQhhP5aDyHYNP77QuCA2uQBbvT2yeNTVSYwHoEkjW2AjgV1rcoMEiaiG4jTp2z4fdQkM4pBkeJ",
  "key6": "jgA1EKbRbSVzEq6EXxd7mCvy5X6LZR6znMh6uNWttM2vwAGvfqg4K2MYHFm27oa6WpdevAZgn96Eiejjbh3bs2H",
  "key7": "4EadWkwq8Chf2fGrNSuTGcy2NSqdGSFraqEEU3FEuyrdc5pVPB7NPcqvow9iX8fbZSBHHpPbZmoPLXPh523svWGy",
  "key8": "2HNitZDAxTS3nQLQLDNZEYnwgHNh1amXzeLdasonKQCVk3wEKYBzT1P1qU9DoAbvN9EGxwaoZVmzNS8LQqXmEFCD",
  "key9": "2LrrTAbQyk8SYsQuun6EZGsZC1G2yY4PJWxFXTyZRw44S9JJ95PJCnyjXUFRMKP85yvyEogoMNcaNjgHRnNUYJiL",
  "key10": "5xoN5PTopZpjosNQNsUDecRhTPrsb6fwTd7QsJQkXEphyEWDdoaEcugfWpY4gXbTLgoTjs2eb3b19ipbVzHdPBm",
  "key11": "5DGtVmPH3L4nQpMHyc857V3zWhuKjMVSRkaCbkMJGAowfBnn3cjHsorcNjuMHtRX2RddPfmbk9JVDaNEyKZwFhbo",
  "key12": "3SDZ23ix9HsVcck46YR1m1VWKJpdyYGbq4iif6r9qSdBjajeZugRj26XxAXhqJ1QvfTWjLRK71QWn39rGGX6m7Nc",
  "key13": "2UEcX6q3m4GWAP7HkJPNoMCNCNtezdeoz2wW6HUBHT11Eofaxiq8tKuimdiVL2bUd5GnUPdg9qRkrNFtuSEowDha",
  "key14": "a84fAqVupWS5SVoJEqyULExw9MRwRFi7DaZE2to32daQx9k7VrUEDuiBCowdqaCJEcA3Sm4KKEQA4bqu43fpVHn",
  "key15": "4dg3TWLTGSUuftrRefQ2qXJHR3bnm6Hv9sXXwCqNFZ8yLVXpnKGzRSXJhwgyZpLX3aUCEAgA6eoShFmde1oJDS4J",
  "key16": "5CxGkTV6NtQQxJKUw86wV9fLJ3TEfWbssN5nBgs7yS9LPhgZKhpBmhANFGxfztmijL9YBxcDezBxUTKYrqGAy51N",
  "key17": "r4QHdgLCjQxQ412fKnbKbNP4AANHrnzZMZQbBig87nEKrRWvz7rqJ6GAW32NJ27aesHwd2cGzqFLjRYCvY18mqu",
  "key18": "3u3ZXKDcqk94zY8ECsiuLDmyNAyAHapiAZgzgvCXmZNz3qgcaysRygV5JKuA65KtmEW5wZrq6nVoSxLyQn9wsCTu",
  "key19": "5E3BhBPZS8DPueZWK3yDGeWmeGigdSGfkYiZ2UjGpm9tRrhAEE5VqKyRZXLMnipYFFvjLzRdQNVb4qaeAwgpgWaF",
  "key20": "57zJeU4eCrM25k4Gh9s4us2r3FdUdgF6m4wfDkzXYEbCueii3h5LVQX9oEwD75D6bEne5tGJAGKJuT3tUNqJTRS7",
  "key21": "5jcRbStiJwjR9hMBWS5gymkpsMCin4GCCeZrs5iteWJa3o9Tf4CUK8xULoWk7ptGdvSfCCThYixnn4G4DRd7gRCM",
  "key22": "2pdP6Qos8KjY1UxzEZHrWRVMzNBeV8r1E4WUbsBHogqf5JcAyb5N2eoZ1B47LJ12yQywhn6433gDL5o3pY69QqQR",
  "key23": "3txyfX1QNFBSd2w1skT6ykCfAyZonfLDg9XGWra5zPgNXdgNpP9aq7KkSAEpbB6q4hozE9hiLDdAuZ7pZ4TGDEWH",
  "key24": "3oMy7tYbNjT8LvBC5abXBt2BLbU5oRZPkyRFpF4Sm2LszWK7DKwcDNrGBn9HY3QpbouZ6TNDryWmnsXVwqbXwTUq",
  "key25": "4fqefPMxYjTgca5syVm5JHvUJWwKo2ThNpTUo5UU9DEedV26gW5T56rvQDgLK3miWRwG96pfAPe41DSG3y7vN88s",
  "key26": "3jtVXpgJgX13FCSaHC6FpCBsFVrjLwkQckXR1QLpQpRAC2kvkR73uoaqyFbuZoQH1YeTX78yNtDdX6tALCtQD8VM",
  "key27": "3wxDwWFAFuzCUBduqypn8wLb7EXF1hTWUL19yq1QCV3n9KpGGVpwvyZzx7D8goW2VEjRhuCni3KGwYKTTc9qNt2r",
  "key28": "62x9ncDVUt3uXAAg4Zo5hWhCb4CHnRq8h72n8uFKXTBnQCH5L39dCmqaqke1M69RjS9jVtW1mxATuSVrDYsfZc5P",
  "key29": "229AgKSM4QVBTPQaGdXfpYvKXHpM7XQCjxrBrAzBR9T15nwbR1hVcdM5Zpm6pzPsz2xhactccGKEwkpPjaGAXxZ1",
  "key30": "3X9U5ojySssmrUFXJzpu6AZMTGTDi4G8m6pXsTmcVvTrT723zowr1s7WewuLNsPfjNyDYZ4gP8VbEP5tvyxx2Aub",
  "key31": "5gNNsHyjfjdh7v8Yb4yBFvCMnh3zgVg8BL6vzdK199ZKyknfkMWQQmKNG9jUpvNixY3FWQPtmEoDfM3ByBxmCGez",
  "key32": "4Dim9MGoaimA1TXNxYZheQtKNNH5KYDzqhhpWEJvbQBTsNnkhc8635GStEqTBTe5dnD2RPyLNsZHJyDdvnywxTBf",
  "key33": "2cRKbcQaQewibspxGBoGuvuYZkN5bEMvAPk15AeaWR7YzsyvLTW7XmFn8kVMF17oanu3KHukQBztBHFn5B5wx7DW",
  "key34": "48jUTERUKSPgXj7VWghy4YShY453vBj5tzrqzdCkdDWCY7U2wVPKSa1uVGGkQaguez8a1ub2GMnTmSD7CFLtBE2a",
  "key35": "5drZXYorkgXRGahheLkvkPjr1jss3qD3BXNTYmTAtJGYJexiiaFrM6hMHCXMPaGRxH7Jfcx7ZoyW3o8zGUChpXB8",
  "key36": "5MwqS1JagMSiZhWvJu75SSzbqzvXsFs2jSbpvhKHuMLydtyoUhdivgLhuFBWsSbZkUzyUHLdngeVeTG4Jqdai5vn",
  "key37": "2Qte852ToUaRstDxmZtKWqrdQvUF7RGMpQt3Va5m1fVxnUqmfsWginS8w3ukDowwzVMnzwP8JswbgKGVBjXxGCav",
  "key38": "3m4HPB8xkA8gM67rRU3uGJXDLkYKairpFh2c3oKxqB757DDAYvLJC83zrad35EN8jsNfM1hrJNsyXRWDiCdxciTr",
  "key39": "3JVJo3CbJoq4fYur67CF5N2GV8DVQLkzZDA7x1KpdNttj274Cox6rYBTDEBUfj4A3D1rajwz7r3LusehbkgP9R65",
  "key40": "2bfCM4es3vtMedWcVc3NLi8e6NGZzEXA5ES4zNonsww1ZiFEbLabsBXT6GfxnLz4HxYiwxvzTirssg7nR1z6ocJm",
  "key41": "semSW7fYsADH3sD5xyqKe9arKwQLdD5tsikkGRgZ28Q5Q7FRw7pgSkwuffNCg7oEchduEyb3PXSEZBb9AX7KJ7E",
  "key42": "2VpCjBkCuYYC94c8oJhXRAjMVDHt8bYZzvRm18tfuo4SUHASMtQqL11cHp3YLksXyWVCRzTyBSmvYNDsjwbvkedr",
  "key43": "4VX9Hx3pnKufQ3aovGYy356SpiZaZ5jsb7a48oL88HR2QnQSuG5cqntXnSyS7W1tpHvVazqf157fL492cBtCWzmw",
  "key44": "3oGheUKFia5MNpPPZWS6PzcComur6517Ad93vjpWgjMDGenc4Z7fdS4JPp1NQ8xNf8XNyDir3umd9Gydef7mZADR",
  "key45": "2HEhi287pDEGgcfF6MsMiBiqnNxcFMsHKvYVk6TN4jWAqrZK3nmsMKWi8Z47UEgxF6fHfx8Zq8d6HwKqNkqUECHm",
  "key46": "2kHiGSgxxwt2TzLLQXi5a7rxRLvnsYqvd4Pd1a4umkKnnyNenyUmDFTMYa6r6ozH7jdXet8MwsEmpnpDhS8JUxMK",
  "key47": "2xsmDirPUizHzeHPqVQeT5r6sWuS1U1DKTsy4cW6PQfSrQPH6pv47QDXjbPasV2UT4DQ7B335XjxP7NaigCtdjWT",
  "key48": "f1fSf6nM3PNJmYduY7cdyVBdJGMnqMk6gYgsiFTnDuRsyrwLK8T4qy7mkGZHExZwXL2bcThofJcaEcLFSSmnB6X"
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
