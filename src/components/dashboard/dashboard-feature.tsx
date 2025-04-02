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
    "3LfXKgeTDNTAcAxDyEBCg7MYBgGHQRqqV9kmomnpu4oh1Qk3djxeRS5YV2giQcjfCx52UB1iWEmBoTD1WowE6pFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ww55bvNvcmUsS4z2tTGCH1PrwbjZka4MSPVEAQ9hGx9TGKiaVA9N9mKB85mYTgPFVEr6MCXNRt3g7sie77te7xf",
  "key1": "4u7aCbpY7bAtsmWZXQdFWW2UFSaDqhQYTQaYRkofxA9cMoZ6kJSN6qnFsYekvU2jB6mQP3VqQZWcQk7pSSjhTGq6",
  "key2": "46uZHkeaBaUyJfdTetDvifEvserhhQrW9GUkwJNUPMK7uZXk6cUvoXwrD8BLr25SVE6JaSSHAAjUMFxu45Z3Lorx",
  "key3": "3e69ZMVtgTJqEMcpavLSEc2keVs3mSN7UXbX84eXAt6hM1GYfzVQoXrJKbiwuPo77VHPC14dbTuecQWwuU6xT4ni",
  "key4": "2vm5EZaMs6Qt87sC4TJhgRWifAp3A2AwKNrK6iRRpP9goUqEdwbFRMKmuStmy1pkhmSvSeY3wr4MMG9R7mnTj577",
  "key5": "2CtnEZqv5T9sGunENkEsSXTEfxogNGhwtUuUbjvQZcZG1FfEH46Xdekqh8PunmStEZSFGANrnKK816m1cDkFCCkk",
  "key6": "A3sEdU9Jxw8nyw9mRdYFarnk3ZrVs8qJ18eQeYiyswjA43426b8ZzYHteFXJJHPAiYbRniomUfEpsjm3FZxUXto",
  "key7": "2YMaMVTVefjZMjeAATm4Yi1ztCSemNLGnTJ5mTAjrRyfDz2KGWygUKAMnS1DLodxzFvonny3ZgUhjQAg5ktPLMrS",
  "key8": "3EnFJZe5pgrRvsJP6D7LDENBm62WJLKbFFvbqkVofJ1Ldnj7Tzp1eK9oFJz3P8HFsVeKxbAEsS4qYSxP9so6hNqs",
  "key9": "2paU84caXjxeNrDXpyf7RbEMbgvVA4xTQheoFb43VFvEhzTBH68LATk6dLnsCaR4ZrNkP9nMKSaLwvLa9aUC8DGa",
  "key10": "59qrGDeP6EG1JXnaRV5VSsEoS8DnsfVmXEn6AzybKyqqhx6PNu2RR59ivQEQuH91objPCRdQMgrnhiCndzYvrYTu",
  "key11": "22ecwHNW8K9zkC1ZcGxiRjFjX5MfhQh1MKkLT2wE7hBnasapHY9CeEC7Q7VzuHf8Be4H5LdvwiY3hFpeCNUkiw3m",
  "key12": "GX9NDzBTTBV8SJ6x4LZJoT3WPb28cXftegPk8oGSM6FFDkBnZsZWdAif5Bfwf5GSWSJrpCaBtahr8NNBBZ7VLvg",
  "key13": "ENvbmoGALQrWVSx7QedvueAM4YkKuuu8MCxA4c6ut2uiJbptCQCR7ifS28nF8RP1rdX2duY7wmUVc2mNBTWG6BC",
  "key14": "ib8CkbKetJqVLbY79gBbYnfV4inV9ww2yf6trVchRrZdUWqu4hs7uzhRig1dqHBzwMZhcdhsp9qRVZeMSvjJxL3",
  "key15": "5TuMrTamyRvYYsFYQLaXiqMKT6LzpCr5zKDfFTNhGZQGUxcmuUMCLVV4P6ZAYhda49gJumguaj1e1WKFpfzZEb4d",
  "key16": "63wPpBWnCxZiZCfVit1JNqwX1oBiDGz6cwnnpuSbN9fTLkB7QrxGePjXkcStSt4BrF5pz37nfDBFw6gHysqHRN4G",
  "key17": "4DWZc7GkJCJU7xL8YctpyacX7bWaGHaZpCSfUTK5GrqDTJiJzRYPZjrgETsfUWyVARv3vzBaNtrZ3tmcNsBCnmEk",
  "key18": "3dnM1VZo3AcWej575QZF1LEhHAreA993TFubdx5DFC31tSiqfsqiYSYYPt9Hf5nfBhXjTL99imS5xNmUmFUTTUhv",
  "key19": "2bjcpe5VvMxtR58jWAnr8jzavzFfT3LfJWtHY2gZW6cyx2qPXoBQoiZQ41ZMJiiULnwDdkJvmEuLp3Yaan9AENAL",
  "key20": "3UG6aic1P4jKXggMuizRicUd1Dus4pwPPEB8uyEsXCAv8XFkqTuDJpfDdfCmJZyLSL3aNF8ujw8669CHAfjvNtjf",
  "key21": "65TUKqXAgRAxvHoEm4n9xKovQXhu1xv5mP83zEwCoDZP8fku6Yu5tgURMe7j91cVMJc33yhvgJrFEGjrPZZi6BVn",
  "key22": "4LECrs8tPTUfSiMatAee3iTdNGz6885BRvr7uAvYj5C26a8BaHFAov87Aa7hVKFFd4gDKy1krJ1v2QPQjDPDTvXx",
  "key23": "5Pra6CysLNVbTD5hvReVqWMPS4Cf3NRoHgAHg5UdUCcKZaGFGzKTECoPn47Cbav2HXqXEj1eng4JCWb8zNfXT3K6",
  "key24": "2DPUNdkfBHXFA8y9MHQRVayd9u3m22WPVAKhVFvbhCzwuzDzfh9GezZYZr4RKMy1Sjq8M6xgobH7ERMffnxfg51X",
  "key25": "3UL4jSDqtSxD9Hb3D56PfTT5iiWnskgpPPZAurFvEqERCEWY32SeqEKYLC2vqdPtpstLmCVHf6bzpPd2GPq22fCf",
  "key26": "2K22YKebdK1Zaig3QdaSyf2RbM7CGQPbEr7TGAjRWqchUYiUuDXdSaVfvNhXWSwoMDHK2KgpBwr1nCQLrUvWptTR",
  "key27": "4Wzyk9yGLDdnVfto8GZzKebjk9RS2zShWE3Zb9hgrsHoDCthq1fkRKrG8JfPeCj8WRnYhWRnZNxhmCBpGmsFHRAc",
  "key28": "3YduWq6GtE7tQysB6VRM8GvtLGya6G977d5aTBh5wXApUZcZWYignbdaAW5nCkoVeiL4f1aid9Q3b3TneqvnYgtz",
  "key29": "KFksSWmNgfg3eRTkRpmznVHBWqsjp9FrJ11eZxb1wSyAxnyEG2j6MHdPvnDcAsru4dc7SnCVYwhMTJDk4zi58x2",
  "key30": "GfAKfdXzdaNRSZfpxSXaDZYkWAStGAVJrFrjrSGSnWe7RbrLy5kwSftW79RietbipLJXDW1b3sHE3oMJvTfqLLj",
  "key31": "51y6tqxVMbJQqvi3RswXdFniNbNmwFx8gnaEpxDFuD3s9oeLtUNwPXQM6XAiiLiQAafDbx6EawpEafVUZpvmEzgu",
  "key32": "2DNFmyw9i9wQ6pCgRfjDtfpEKNkEUMFcDTYidVgwC31npgfBzxDbA1HiAL5ZYKx4Eh7fkLb2KHMsLWBQkRBPcNxQ",
  "key33": "cDKrcj8u7ZZ3TZ3FRUpaFRWu9ip7xmBMxotoNNGnfZpMkbqVKXyCnS6DxFGUa4KsKu5PFQCxhg36qHQkJ8H2Fc1",
  "key34": "MZHxXYA4CF914Q59jBTQKYmvJNioAW6yESKCaF4W6wYXzpbnXcu2caLurbrmJjmbnMphUsEH85qq9VysuU2zLh1",
  "key35": "3qPKDPZpwEoBCJDpqiMjTvu9McmeCrkEk7PQ29SMo6W5j212cxpoft3f4n9otDqChgjWFWLNbiUoVYVtkbympw45",
  "key36": "dEEJGBGH2QbS3jWXpDa1hi4bvHpxEmMvxX7oCqdXYjeSX4CWf6gDyoh3VuCw7rDUDQLBSZytddRMHmThN5w9Nwf",
  "key37": "2cjy3WEk7sAUB8rRNnLG4jsFhggbhdGHBSftnT8bFbu4DYXjagS5cVAC7zD37517T9avzU3ZoHtaT7AUFyDkivG4",
  "key38": "2Kj2o6RKZJwguewr7HApbWFCLwHygZ1FiW55mSUFXyN4FVjcGdhrtW8xDkCNMsTqv2JGJVgmxaLCT9mK5WYtb6gC",
  "key39": "5RC6t3gik6V3LjfMCYLtS8W4UkgJWYERKga3zjb216KXccL6TUmhpLeYJFo2J5pYD5BN7BQ2KWdzK1M6UhnqrJ6r",
  "key40": "2TfRooDVfzpqPvsDvzUihBFpV8taU1ktZcvYtUrJhDsuZzgBPBqyeHL2ZEKDAajkM7h9TMccr9xxMHcSHL55G2jd",
  "key41": "2BtJ8ikvx73joBQT3GRX1Bz6nug3zzCDvEqfFi37di3ef9pyqbdN71YaTjEFmrkYGZZeLbAwMeCqcUjnG8gLePXM",
  "key42": "4MGDdyHoDMwuFJT8w3zbH38V71g4kkEAEa6zMWjrwX7s85mXy53bWCjHU2jvkn88GxYKztjRN54J6dmhe5vnKy9t",
  "key43": "5YdEFNbGzsVfQAx9c4DNVqzL2hAYQEYn9Mtd2zaFNNPkBhwHhgrAcaBNvL8o7BpbUqbzR55sbAvc2kbntLhxzBdM",
  "key44": "2peiqMgskwcYCmY2q4bUZ3Qp9r4nH6eMjQy5qGaE1pL8z78UPeNeLVDaCtXYhgq6ft9gsEK7fH4x3G5FfjWWoyHQ",
  "key45": "ke6uhyKxio1tEJZPbjT8EuQNE7GoundMP6TH9wSH6cn5UQmZJAdqBC179dGWcPgErgwN6MpVNFmsKX5gbKvkwCE",
  "key46": "5yTXoqFtmjWpDpqwtcYapP2Z6BLYFsWQvNBftDnrdnLYnXEVGr3LtRsJj5u5dWC852YBe2xsFNRuzv2g1LAzcjak",
  "key47": "2pa3MrfUe5kJrbtfir75Pi4y9GH425qYf4fCmS4Sbr8DwoUnu8HGmqdRqjiphhFtDBf2qJkXdoMqYtvhuyfaXGS6",
  "key48": "27sRydUdBPDHpXQUpuXj31hHaHUpBxdHmyaJpWqJABYM5HCHxJZD8PmvAgAjcEwXR89u3q8eXodmrDwvrFVr2QsU",
  "key49": "2xccdWck9kYcEx5mwgRU83CwTa1f9Dkh175CTYyB9oztVjCPzdibfFbR43i2u5j4uRB7Kw983awLbyavX3EKAGjD"
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
