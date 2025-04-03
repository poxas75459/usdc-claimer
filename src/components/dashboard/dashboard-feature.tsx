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
    "2YceN1DJ9fThULtszoih9iPrscJWiLX7PM5bGwfbHjbJJTR5MZ8iHyL84a3NN8k52pmQAoZ72gWoEBJfCpbmS5Qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x56MNC5dzRXH3ESozPL1hnWYB6iBGz7pqsAVtfuAiDazPLZtCe58TswVYgfzRBJMyxbZdCjLtB3avANHniSjBYN",
  "key1": "FegK3KD4jXRyajBC5iTZjr6t2FavtdRdkGCKx6Py11JmwYzmNL3m1Kzk77HD3GfHY8zJ2U614r3Q3eV4TkKjF1J",
  "key2": "2LqoSdw7RwcayQ1SReugcSw432wVrBmVDaUVCoNvEZyG5dUJh8271qfU3LCHTqmGPKmQhjZ3ZqfUMKZZWBoqe8Jn",
  "key3": "3AUCqhcfVeFKhCxSo9ChgbtnooTAWconih53pmPhfKiiFjr55s3ZRuit7kvGbv1UyLuUFmbGiyi3NTrDPbFM2Mue",
  "key4": "2DeXFmxNLhnFjoLqugoqCQquE9sPfw7SZeRxzYNb3peihK4ZegkyBFEdTxViVKVn1hnY2pL8wADE9AcFVhomqGMm",
  "key5": "2BSp1h4SDQpWJ19shA1X3D2oFNvu6wbsgznFrb3BNhTpZVY6TRQX3fY7jQy97T8ujUevpFvCBG8wHetuBjLqm8ZN",
  "key6": "36tYxViKyNJfvaiigTMq32sWsaJCt9bytVsHqeB7WrrUJz7Y9m9Kr7ShhgUdcBum8QYwhGdKMf5poqgZrR9RyMXA",
  "key7": "2mYZbUWcir2Kr7JyMa6YvDkqZcPg9Uu3ZGa1SNoB74hMFDY8kvGb4rcN1zfvFSKL6Y8HkdeNuh5J8cTSCJNS45Y3",
  "key8": "3kSMHPh7B54JtuJu18D3ad1EqRoDy8nAtApuvN3Db3YQZHSR8PqfsnXA7w185ugjcBAwubatXL3yNCfNNdp6M51f",
  "key9": "2uDNKRDtzK5j56bpQxXdjNFGUAw1KkagYQnEBRZ6j3fV3b8d1PX12tCNVms4LjUVU4KNgg5u8H5zGy18NvjLWxnY",
  "key10": "4LStoKmft6M38tugpGJubT33t2j3ZqaRxqJFXx6pTTqBiYT9yigasBazjzHTu4Gc5gA7Kub1R79sEZix1SX4B1iT",
  "key11": "35DfZPcX4ruv9xVn8exd7aPcpuTqvTjtGKboFqV5pBHuG6F8eitm3QeJdsu72awyrBXrwbUGqUFgAEeuoee5yktp",
  "key12": "4yXUm7uLEoTKEvAzXNjTnkdg49W6ZfUcYqjXGqmAXQoxVEyjriTDfbqdWAZRvMmy43Qqm1ZW8Tric4ZC3PgkJWym",
  "key13": "ASh9GD9ncPAxpNykyYcY76B6pK64WkBTyftBoLhhJ4D24P73XytdNoKJRocb81p1pkkMbc28titAJ4tgY4aTCuW",
  "key14": "BvBi59ZpUtP6wNe2duQZadP2Jw39VigQpXp4ZMAPRG47nPxHM7YHTCsqxXbrmce9ASUQYXPr6DU8vNJvV4JJJ6b",
  "key15": "3TcYjTGUs9YjB6pzpKapjAMCGJDGZ4ZdCe4osXguRegAxj9nmozHcqdKS3Q7aSGcNE5tFwS3fh8RNBHt4RT23EXL",
  "key16": "iFmGXomxYPw3iNKWDRai3ExEv1aCxiBd9czgYEeX5fDRvNi5s78ML2Zzz774Dhtbz7X2obXYW8Cuoq5PZKie7fv",
  "key17": "MYeW6bhkJTDRnAFBW6iz3UV66FCFh4SGRjkgzbM4FSw2mN47jDAdb27fnYvimFDRNPZEsZRBDsPDrGxGbSsgjRx",
  "key18": "4HetjG1gSPXU1uojTqr4Jz6BQiX5LS5AqEV5tgr9hgmwFsJPa3KPzzkRHtUgYpszEdraW5YngYQAz4qhUPMoovsS",
  "key19": "2V2hLhPdaTNWnwiUKz6ctfaX5DwGCYD2bHFqDgbuhTYycappCD3mLVqdHnkDgUq6QSyqEtugfjBEwv6gVHLPxtwy",
  "key20": "3M3DewdCJKoNC5j4wVGNBgCPbDwHPnhyf57Sbs2ntMbvtnk4Z2W9LLp5ZJrNPDqc9TPd36ddNKfbbV7ds7cCEZL7",
  "key21": "4bt9C74QWVu1ozMba6wocW1hXhsVy1p3PDSMFowZU9gsTjZES7ESHQYuEcCLve5NTQWXoTucBqGQrws2L8mhg4cc",
  "key22": "yCxF2yxMQA1tFharsAn55A2BUyW3gMmkvB9ZoWkd2AcprggHcYYgwTzZJ1SnR2DCTbGeY8T2SNiCjkbQq9jGCYZ",
  "key23": "94zaEL6mPbCYXEQqsTSMeqeV6oxKYY3mNXktogAFTVDhL7TR3os4DtM6WkuCNUqdfpdA6kxr4FPXqcTr9yYb1ZH",
  "key24": "4N1FzUSkshgRN3GkS4FThB4xbqFNbyULrnNDXjbk7kzGhom91BrPvw7ozSYnz3XYW1tGeCic3sUn6WspjjSVEnX5",
  "key25": "5MHrdre9QJZriNAofMRCQWLFL38cKwvA8fkMJsff49SsqaimYJANDcntqb5341CfESqSfxddAhrqbEqZzUyutzSU",
  "key26": "3Z9ZD1B5ZdJ9cFTCEoUchvNi73wbWXDwVju6SjJYJTVm6wRSc2ur55NaHM5Q85UhT5QUwvuDEMmDdu4kTZ8XgGg8",
  "key27": "UihCnsvqdDQ1DTZj3Gty8VQaicM2wPBjoGGd9do2TnKym2o41U7LqYvnAD9X4qPKeG1KYfmrWXGWAekP7ZBS7SL",
  "key28": "4TQRgbEYrASxfb9dnnBeoyL1hLfgjAUp1desiUvWxMvNe6mFjY4LvetfaPmCWstWJrLbGDGKGtYjVnggHNQj9nmq",
  "key29": "3UigtSEm6bkf18YwYBvC7GugiP1FRikRHQ6zXtrQZ6yxSS8xtniWji52PH2N8EdcUnZSY3FLLGYcFp2LUeoeQmz2",
  "key30": "4b5pTTLc5K2uUwReMiQSTadDruYuLNRdhZvXWSDB4AZSvKCURYJEhT3NPZapk6XTBF6U4YZmxgZc6ndwRWHpTkvm",
  "key31": "5Ws7EmvRH2UdrnkfR9UoF4Q3Zw8tnMdNAG25LzHLog5chh3n2CUMMtLghPgFeWTdfDqNKFbi8LkJjRhbT2HuXHiG",
  "key32": "3Tf754VrFqeVEou3cUXVuUMnxFz1pDJQ59KJAB7hACpNrQD3qDwm4WDw84bNzridM92wTH7GRU5edbv4efGaXmFb",
  "key33": "4hASed36AC7X9zPe28Pn4VZxJDTgXc5UqkQMNx8yAwyutScA3Ehb87U4ZiYjdkV5Ba3Uw6dRswmRaDiLfD7d4iDs",
  "key34": "45oNCCMTARVGnJY4upgBuCxnDtAqf2p5vSFyDsLDq4M42DJA3pd355BtrhByJ1c7ago1QrSxADkuKfpGV7FM7VEv",
  "key35": "3CSUxdeJFukXP8HxweghtkfkCbPHrk5QM7BRvMpa4fFsLXD1ikryKUjfnLpvrS7XFm6Emm4czcxWQQP62aw5Fip5",
  "key36": "3ViwMk5pnC4dYMT64o85Xff1uCVrTrQVtLQJmLzif72mXbseuqeQTeejUHkBBHG8QhcmM76NqTrrjLh6ZCkqBs4B"
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
