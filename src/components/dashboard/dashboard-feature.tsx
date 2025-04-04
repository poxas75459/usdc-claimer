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
    "2bTHQkdhe1r9KxujxzunVb47eZTyWqwybyzUjQnTnmnJvkiAEJcAc5ypoVn5QJg4oMcTSJPzsMZT9baFfe6TctV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmtsehgZf6G5HTnQJawafqNWbup8tdyNTSzCPHTyVf8FUcSjrP8MDEPVSpma4wsFkz9ARskLgFmQkbwe6kfywhN",
  "key1": "5xM4KgCEFCyx5nMHz4JGRj772q3uhCUmZnZXj4Yeq6gLtfXj7zVV7xe7rZY6pN57S7h5oah2ZRZxmtH7wyX5f1mz",
  "key2": "2nThkuMi88ZYYGVuXwDxBuJnLSFt5HevuY134pwdLhZxykTsUHM1NvYbYWkJss3xwZwBqr9jzTWTkd6ZUM1dWTdG",
  "key3": "jJTF8imW49e181uzW8idXzENnjJ7oXFjTUs2wDtyBt2CSwRTt1UzFy7uDP9xFyzPH8AzYa5XrFFYq7me8WbEQvM",
  "key4": "5XQkaWpPjfReYMHobbBWegiRWsgoPaQMGVJMfUAP38P2F2FnTfuDoueXGjrxNGTdN5sXzC9CtB7LHA1jQ3fVGGLz",
  "key5": "uNZkpGZ386RRLiuwQ4oWK7FNvehMYbjghk1orwqVtkpZBtpbsN7znShfJsB5JiqecguJfBn6XBAcHCJU5p4dNMU",
  "key6": "569ZNkdkSV2TcBUJ2FRE6gjQuBymjjG4PtURd7EuXJfAZ7ULaJtUbJ2whuQtseCi62hWquwcqs7hhHG4CH89CnyL",
  "key7": "5ASFq6Ag8F1pJRuLY5WNzvVy7jGURSN4Ec9tauR84qgJ5bKhabMzesPMK2m2QS5MSHhmDbe2qEPhKHyj7tF5mg6P",
  "key8": "2H4qTpjyG1HwtEqkDX3nD3ZzNummZU8DGhnNSdJC2Wfz6qRJNX5JfrDfKtzGhHxEHZMafP7DUSHExvUgArgMdkw1",
  "key9": "2YW7UywZWy5iAUqVu8bFEW2vwaYsHnA7jTKG7ZgAjjxbhRLBenYTxySasYvHfmV4rbZ5rdroRdeQdPLEMxJj2meU",
  "key10": "4uGbt8ZNjEBYhw6QZGA2h5feZ4HVy7Qo6peMLyZNSR2ceNz126nUYHApxtZPGJMXkE1d3eJiSfafe9Ndcf438TLz",
  "key11": "WWse6eo1otqduhZXm4Y1Sf3pLXvGMh5dQyT3PpBs9WVaCYoZu5YC3yMiH6tntuJ5HHVAGLWver4JrF1Kn9uZLhV",
  "key12": "2huy7ZurteepqTGQaxcjkivZ7QMrt3pyD9CiGd75R2QrSGLQg2dVMEPPeMqtWevWjy4KeGUYjDtb2v7varEc3h3c",
  "key13": "4u6VJEF1ghe4Hq3C8nzviBvJE7g3riT7J1iTDLD3V86rXD4Xaujjik6fcQaqW5kccJZ3vAMnHXiGAmHVHfFwYEGi",
  "key14": "29vxuqvZaWtiV3AAXwSXd3niNSF7Fcxzdo4EUdseqF6V3jFZLLc1m33ELYePeDgh4KpCbGSbqvztaRyjGuYfnHbm",
  "key15": "4SThZQUAcmprsFW4MSk4QmpeBjcFPQ2cEPwZEBrATJmNKnh8SiW5j5eq949rK4DpQM65HBQV44E984Nwb2zX3Hxr",
  "key16": "5ttUCB9zE3xWyNkiGtk4sLb2FBrmiARrzMc72Bpnj9jq9KvHDW417a5vCd3ptNBtkxJCVifUBSjSUF6X3reUJwHm",
  "key17": "2WzBpbVy2DsyYgzNxHw1ebyG9Hm2wWg4V62dZUXwVMNFqH1mZt6y5Tt3Wymr4dVJrcXKmm2U5NN5JSCZWHKB9BUr",
  "key18": "5Z2eQ6uW2mLeL9CmFx6Kj8w7oPzTVFSV8dDxwkuAQTi9qSfeCgZ6LRAGM4Au7jdLepWkqpuJGXj98fS2Yi38jXiA",
  "key19": "3tteXc6Prfu1vMXEBDNuFSxGbx8XLEYAY1T8xEm1KRbvN4rHQbZXDRa2G3CVddgqGrhM7eR3CZeZuNt6QXisk72G",
  "key20": "3cKS78X6K746s6ygM4J6Q28SPUG7hEGTABHhLKyWVeAvaSvhVPPbtxwG7ZN5QsYzEu5PQWAzwBu9T1G8XEdtx5d3",
  "key21": "ASkPo64USd65x5A9reYHNmSwX2tFnaqEmVxEeJ7NbKwa7LRo6SLcN4o6hSsa7uy9ar2HpNTXzpGpcfQ1bGnoNxj",
  "key22": "4PzGe6vYniU9sb2BcC8cJbNBVq5RQNp6HdYAN4YJtM2RjY5QrCMHGJGFyXjaPJ5hB8DetybsVBmoQcFeo9TLfSyC",
  "key23": "u4NrSSXcTTuj9aToeQaV8t1UAGuPJfNvBiodiBqWQpgPspktJxR7oi3TNBrJw21tGrCb6c5fbRcMaKYhLg29FVW",
  "key24": "5JvV9aPAL9XyV65KwTbc4BHHx4ahvHuqbSTryPdsi7j99rUTwZ5dYRKkruS5YB7YnLg7eciecbHnYSihdwrFwDeR",
  "key25": "4nvbHu6BLmvMZQpsRXJKgeWM97AQFVoqgG8ws58vno6NCvAqvGQNwXXLyxtBe2ofYKsVXUsY57RoBo5zxTnCDkhz",
  "key26": "4nCdsFaBg9sLqsmSvLGnKQfNMjyB3PYveeLkMdzku3gtwJEvrJhkojdbdVLZXcGnWy2cE1QNfNHB28pXB5oxWd9m",
  "key27": "c4mKz88xSjKePLBZQPj3tBsW82Pz1odTMNHnHw9tDFUyMGZ33eawfieeUVkYGY84Ym9SBfYCUnN6TrdsLeQCBSs",
  "key28": "5Lso6oz2VQMDfv2GGCqQYuS6mKVCJQxsaMwqNWfr9mx1TLNRiH2ZjzPxzv3Md3WytLJK6vbutgtg16kEKgqGixoW",
  "key29": "3errzf84HoXxxrLk7p6wARUwNwssb2sD8DEryMbK9WHoYGPmorm3st3rxnFfcH6teYRzAsWpVvKUW33S14kREXg6",
  "key30": "5q6XiBCL1u6hREpTpes9BPmxK9Ap45RM9RaGWCAL6iTRfZmFBLTWZjpRLefvwVXU9whQCNfkB9B3Xy8MpeSSVd7Z",
  "key31": "Xr2nrkznmFWNnz2YhLs3CA85JWcMTYkoP7x6UF6mWm6hhsC1tvfdGeiCMwJfEFGQYauudf9RPtyDrKBbvo45EkE",
  "key32": "43BPZxYBZw4UYWhex4mjFUriiELByB9fUiJYm6BDdUnZgWu6dNEeAA4K4MSD8Qy5gCTFJf1nyvzGvRqRituYfQNH",
  "key33": "QDQFABrgtjsH2rHxDnqUxvzpb1xPJAzH4xkMSkUFHGEDM3oPeex44HvhAUk3rEXdNzewUPHAVkkrF2AghTyTs2k",
  "key34": "2ej1Rn7ToegpvNVvyWsSZ2kpgixgSs2oPzsQ8Se8AMKtoGydGTLh4QKYjMShEXkFG6yNQNwukoHtjtxPHp951PDK",
  "key35": "ZaL4Feo6kg4KSB3Qo81DPdZXdA74uJVLFTVeKh6cZEVQAFy1LtU3kMMEkEXSyk2i2fSYhaKNHnyuoVrD4Ntr4R5",
  "key36": "25aFXDv43Df2ruM6ucxD3P1HH8Mnko2YoaekGxSAZZuTCZZVNGnLmAqA5TvEbc6gCHkKnhEgBqhDyQ5hQBxnrasv",
  "key37": "58PnPCvhjdGSzrjCnUXyMm74vo5MHrvyih1cmgQfX4LSG3E3KMPm8mqvbmKrvoWyZMNCdsYfqQDcrmeiqE5dyPFB",
  "key38": "7Pe5pJXF79LGHHsKYGZPN4pDSP1N6APjRcrQJWZa14pgPDDy6d6fWNRL1ZJRZpKxT3J55rEPmBNpysQ9BaYJmVo",
  "key39": "4W1YZgLErmihEzMVvMv7bioVSDgsQFFSRf5ZYGUcvMPMhPqLKoyk3cmAcmrLQ63mgsQBvhP6EbC7VtSgoNgvmSLh",
  "key40": "3ewym5ZWpKjoiHoCfSLLrqaihPThhxhooWQHdsLSkeeBKF29AtTKDfkpaPAB5KAgRW7kansraTqczo2qXZtxEoMn",
  "key41": "4zgoXstAHBPoSN5NaMJwYy9z4y5LP1Fxc2hK82TL7GQELPJ7CP9D9GibQxvHmhDWdzHefXxnxJKWQHbLLCqNijCx",
  "key42": "3X8ZduyM8FmBPQyPf1F43sXe1e2fCkuLWeUCGhHzTL4zzn5hYqqNdkLN1bmv9gaRD71UPfqjx2uZvqYC18uEsj6m",
  "key43": "5Cqu4RkmZuNxruDCkcmHyfqN72dM4GNNs2e2MQgAmLFWB1QSSGoE9ypJZt2zrr8LDTgkFoNEThAzB7atAzHNWuzY",
  "key44": "4qpfYD8PPKxAEEpZxpPpt4iUNPC2xwzwnfSqgoEAEsPJKGHE3vsmAuhA7sWuR7AgenAgSQCLwdW3c425Fq8h8D1e",
  "key45": "4gFSp5BNkNyp2LR4e2Hh5wNKVCY7asxtHLxcPHWQ9JMLKn5TUE5yggScndagiyufUAZp5Kd8Q6minXJsNDautYrY",
  "key46": "2uwGhuut8WTEzJ8bAzpfT4WNeoofpvypsmurLH1kNGWJQoNsyPrenc1pHtrkxrtr7kwNcnEXd5VWdRrcG9iFAc4B",
  "key47": "4WrzqaYY77FTHR5BfgcFAH1hPkcLsNfBYNTjx6S8XutJ4fPMJnfANqKMA1YPEJatCYyF1AMvHR98DS275SnTXxxh",
  "key48": "4xYAJe2mGpigmSC1K7DUg36MYLM9jF6dDbn4wmZV9GCCFaaz5MdyfNb94N53tW2qq4piL3ULLRphM6cs9oDSetpF",
  "key49": "5tdKgNFpR9AkS1tF1aii828SHYtNCrDimcDVw7wR5i7GrUv5c8eMMfMHcGtuq5s2te1wBWhbx1iqWsRr8JsXkiKE"
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
