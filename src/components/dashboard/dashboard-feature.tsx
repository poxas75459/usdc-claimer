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
    "5PKyriP9wswRkKiTjxGNf3eeoUKbuWgYcohipkq6U7WQdHXAvRQm3Gk5oe4XgoH5UvzgMzzXtTvZSxec9VeMT9Mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xTD3SiPYvYwkh2trbJycQs9TSX8iwGkPUPYSzJrfTbbD4TZ322Dmx1U3MDxF8KAW2QBtwudAEgSTqfjBs5pdDaA",
  "key1": "viKmUPfd4qb7nydAYnoRTdvoKTpMxF7WJWvYnJ9531D93cvBGaRWFbrK9buDxkTjgqL5R4R3o5D4iVRmi1EQjTd",
  "key2": "3BWB7a4AqPQBwzqM6RFGmt6uSgNYx9seMm17i2fvm2MExPGPrY4wSr9ArHE1atfxDT1Q59DdFS588kMmf2srknVp",
  "key3": "5vjZpR9xRDx17wRRzT3TX36vG5ep2nWYwcD2fyjG7gxtCCdU4xmxDTjiahsSozcQ43LxYdGC65yrLvymgo8EEUHZ",
  "key4": "2BBPqFDZMQTj7u5NLR8osD5mo2gzLNXs7rSGnG7mq8RE7ZS2WRkF379DHUXnuuZP6sAroR4pdL92rDUs8TAj7kqS",
  "key5": "N4LBmWVa9ksVhywNqEDjiX1RQoqkXSAKA1M8yhFXZmogcLv8iy7ZUAdFgtaqWeyDnpFgDZabqt1j8MbevLzB9ot",
  "key6": "56FxLdtrLGTcjCfoLjLQ7ied4cURSTQr5wrn6teJKqwxzz8JLFZYiymzFWm6bGK99bYCTRfZGWuot8JuKV6hmdYK",
  "key7": "5YK8cntiyxYWLztRWNLeDfKrSztZV4WxmongEXd6TP4DDTa137UvDHV9sDtZ7v7whZcz7GcGJ8tZ7R7doz92FqjN",
  "key8": "4w2BcuxJ3nxzSUA4PCNvmo7qzArJDUDZBuUxrfRgc5NWc3eyhZxXFww7MiFgTKZbbGgCPUUvjNareT6ddPafgPUN",
  "key9": "4cCUFpSfYAZhbU95rLAaRjLg5F8RET2KhKEhgpZnY8yDbePJwtDyCsLBnybAtWb11NMgsCdyCGuSZ7v1yBZ6pQNo",
  "key10": "4y4nTRYAUvYB2cQLEpXegeVax2gZiqNKJXUK2exy9qhGkkoVyDc3sFtcbSfYYre5LvWy7QwAnnCfi924w1ucAYJV",
  "key11": "4yeJYF6SVHaKvqHKDBBBooNoErSXaNpkNszV5bDCrRmuVRWyxvo7An4x3irKtujfDgEeuGbAMuvKMzHV4cmBSosL",
  "key12": "2LyJ5k8Le9mHccciXNJzJbAzXMZztL3XHdpKeiAvwjCVwoTn2gyqLWof3pfyZ25wGwCWG7EQSinadUVFmzo4bR1k",
  "key13": "1XPMLQpZHeYmWXgoB5YeRv7C1bTY2jTvGkkJU24CPuFEEGvndDCPmFy99DPkMctVmRHt4DzHYGLfYhYhUApFZtV",
  "key14": "4edrV9jsBKq4nw2gdsSAjECzVGBXE8abRY3xu9d6aPF4wiihbwav1B9i8ougV79Wry6aCrF9GadkcwPQ67tCGeVc",
  "key15": "MjVzWAvXtHH2tHnPyfYHkYmnRwRQdChnt6b511oEsooQm4M1yDroMzwkdqUKZKH5dPt5GQ5bumBYh4XSFcVQMVm",
  "key16": "5UYffjRDWy7a9eShqK9AmQkAybeXmbys3SZq3zETp9b6W993kzB9iWPDBK1DrjX5AUUihSiZvvRp1vjJrUQyjZy2",
  "key17": "3h9xMs1WqhqHFQG3AWmtw8KkbfugMRv8YermSEGcYJ8oCzqV7GkvyCvPuPcAzfUxWnCYnv31JDmro3TtwDDSfAzZ",
  "key18": "DecDTw678HxxDSXnB9tSDiw94eBxe6eprYLfyf3P7TeGf1kqymwxFt1JmiQJM88TAJvaTNnsQrwSBjaw9ZtSigT",
  "key19": "3UXMZ4rLZH5ZEk82oXChKFo39sM6hEjRQ6cuHyRLZPP4kY2gsB4nYBMfGPfzdTxSZq8FYvUcYExnQf7ewMkw4hWw",
  "key20": "561ZXF9oAB8ESvpdLFLJhix34GWFZ7Ag5dC6446JMFNF9KapKKGgE2TUWM1hxjze4avRxX8bvw1AEXz6rZADj9Uw",
  "key21": "5ooxuJ9yibAww7VoHjaQrUTzxhvX1QsPAz8H88C9CY8SzHe1LsmpCmXncTk5jBWFPeW7ScASxynhh2PRTDGvi3tq",
  "key22": "62uGWXgXBNVWxDfqcVb7TttQ4RnNL6QtVDxjyJP9vi7mtA6nNpeRu25r7rfWYGod2PcUC3Jh6ad5eoDYgdEDNrf9",
  "key23": "fy14mSdkZC9Jp2PzVqFHVYjuyMwE9et5f6twAyCBQdDzcyv84Da6noWZLRnxRcRW5s91gCxcegdNzKQ479E674a",
  "key24": "46zk8wAxmsMWrqDwPX8X8vdEu2FoV3K8aRFu3P3KEidrXpkftGYkPyws6UVV5J5R5KNfwdZfq8eJ1RwWTpbsBYYS",
  "key25": "4jthsszL1mavrgsv7oUmXwYfh4yNYy3AffF8EMUyy9cRfEj3FAzEYSrQ8U2tcEm7qUc1QWY41HJXir6Tk4QcEnEF",
  "key26": "4p2vEXrWPDB6vnXYc3Mq8UYz5DrWjGPsGdUMB4sdMSVnq1aTHMWR8mubzgK2Jb6f7PW4FzNuCuHWoxfiCnu9xdtq",
  "key27": "2Tos5GD4EGSQ9sUBGvTTbiCPFxTrC22JNxEEeEQU6NhPPPqS88tGaiznUUvLXjjyxFResiVsVGbxPvcSEcyhBCJW",
  "key28": "3v7Tx8X8ZVurQXJWys67ifLPQVrVbGXvdEXJtR4Zo1dVbKQmAqCQtSJ8Rf4fsiG8TvR6F3NCcNm4hHkJJKzp3Q1a",
  "key29": "2kQi3nnEjqrzh1ffpt8dis9bZ2Pgo9jwEECq6E2nuJ9CFUHy9PD4eSw51K2H9LnWu4fz6JGqgTLqdNo2PUL7ALxU",
  "key30": "5hoyRC3XusKy2CCzuBnx1JodvMspDvteM5kVWvSkMDn9HfNN26kxW1XsxRJkCYqv1RBeXjgGWKS15YkQH5kz7ndo",
  "key31": "5KfwHmNGonw2k2s15t5v2uKu5RA8SxWZf4QUmuav4QPeuHQuoXnYEo4uZhW6tAGag6rC2t8ZDHQvuBc2zfkESJxz",
  "key32": "5wZxg1r9WS2cQqCPCY7wx1ngymfzisvCnArxYURGDUzy6KZx8kCqpeReRuPzZGkAc2rJNzcjG3PtAawwfNwHHVkq",
  "key33": "3TjWWjtZSuPHKk4XprzW2GFLozHTbYRJuR9EvHFRR2MpCNmy8GTR8SjyAdPdQKDVUZsc7kQByayxWDJPJmMAqTbH",
  "key34": "2nFgmPQqYUZHpSn3BNH51p3F1vvP6DHvLTSiQoL89oYVCFVZN27RYuNdjhJZG6prEVAUpGWZhxXb317Ad6gLifsp",
  "key35": "2CpjiEPrcyPFzFaQid8BwUyJScm1wbHrU7RxPbxxCCCvoRpSA861wh23cMgS5b3SdPgdrABPD7RbcfBEhrTv6nq9",
  "key36": "3VwiR8dP8u1Dumuv9ZW6YFVCbQWZD3DQVwoRtha8vbXE5JfRZZxf1GgLCZEqJE2qmEw7hLHaJ6KTZxCSVkUdHcLs"
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
