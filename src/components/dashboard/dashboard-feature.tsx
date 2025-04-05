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
    "3orL5zuCkKiKNNWKnF7ijfV1ZjrjS5QKzHXLUfbazwSGTSGNuTTja61oTUx6ZKPyoHq2mBRZzSKEr6ABBdmJ6HMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hWBB3EinxyMYsm15igNU7kQB7oj9gmYcx6YChnwNBujTAxbtJ2fPgcAQtNfH4HMErLdy3UPrSF1Wh4JMocinsZS",
  "key1": "3MCSPHcAWU34qeuywTAGRfH3GNfJ7YT66Jo1mustGzSipdeQxCkWTpgeTaJf7D6k2Qvxsn84Mfkm46RkfLwkmDXd",
  "key2": "4AVqhn5hiUMn66b2ydkV2W5t1MzPJUKt2my7EUbvC4Q3eb3BXY3eEv4etKfEVLVdnQC3SeSLsN6aaK2K5RcJk88C",
  "key3": "3nuyXN5bZjmGfbQUmgWeeaLRC3ktKeZPfjDLYM4rDAVJLrtLNe8fWHym6APWHMAB5vYf1JVFi6mE7zndyvZbzDJn",
  "key4": "WJzBSmNKfysuFo6Czkwu6fgyhXjuzJpvd1ePcV499mSG1nyPzEyfLZKFaHvxw9xcxiAvjxK9BQyP8Y67G3DQRss",
  "key5": "43qnscdgSkDXfZFouK1oefsLrV5scSXf8UrCSdbzJzc1SqjAV13YTn4fkWma7NWf1xid7YN1t8tUxURYBKzd9rNe",
  "key6": "5cgv6DeUFJtp9VS9LR7LcrRjMFfDuX9Z9WUNwLMF8f7VszRbSopy78SkDirC8tfkYpCRuUYfoC4qqQVvuCrgHgeH",
  "key7": "3a8CFAFDiVDygn9aCk9YCG8Qazrc4GQzaYwJN37EEtVhDDqPW1vfnZmwFNMvH4nvcgQfju1hsM7hzaWVhH3NbWqN",
  "key8": "jg18JJQGKfewPxXSaWBtKywNKBQEZVZg1yaEGXjweX1N9Bo7ADu4bcQY7exhqKXLrQf8qdnSPbzS9j2gZSyCwRk",
  "key9": "4bWwpH9pj5aeEiHq4wxvMbt5ffMQDxkTfWHcGwixV29UH54L5EapFVApZKziRMLqUddynKkGuBi9cfTkupWv7jSZ",
  "key10": "66N2PijbZKYuYfTsv1ywjBa29kuzDyGfvgsD2iyBBywVXvj9No42BRN3P1sDrH1j3xvtab93MyfjGVyKxpZ6RWmd",
  "key11": "5e9bfbfBXP4bbxAMDGJbVkRnBECgbTrksv16c1dKvKT4isBqQv1BRdqyFwfkn3gSmAUTJUriZP73y3RqhYMV41yw",
  "key12": "4NQdwBfgQxYoUWcUfYZAQ9vwatZNzA2tjNLkqSLmkn19JjG2PKho1NshuRtZN8oHBp4mskSH1Mc6iJiGT5hVRSbo",
  "key13": "5eeUS6sCYjH2H8Aaky94RxW1pXDDtW8HWapp7JPwN1HvnhtSr2ADXvMzhqpbqxJoAnb9FhSC9mDpxLS3aBTbXCnP",
  "key14": "4rbzwM3DbGjNKnKKqRhC6fusz3pJBxK4eF28wTjJaM4cCSCgHhBaUmBYSs1fMyz57Yoa3zjqj85LZm2hPrHzGh7x",
  "key15": "54pXzXsLLq7xbNVQfrkJTwKNmYYLLd3swgFNVvxtSMPCdNyoUjpe9f9moSxX9Hj4n8ogNiM1feGth8tVkeoynfMJ",
  "key16": "3N8tNXRQKWRdqjLSabBHYj7KiquJC5tSo7rHw42yFyw9JPZEKW1cQVcQSGFSza8cbZbRVW7UCMTKdkthoqbtkdK8",
  "key17": "4m2yYQiHubrmhsvDSJCkF1bmPtucUiRPzLAa3kAGMKhREo3LsgxeKDpjybdUUqnp6XBHKpTEuiwUS3qRBSHZtq7C",
  "key18": "2z18cvyBERyT8BzKno5YUewhkYtQjXrNxWkWHkZYMGctdse3bJCQj9Nk71uiuNkhAAV1SoNmcV6MmyPCa2QdE1vf",
  "key19": "2oa7DYXPG1TQo7F92yuS11RXMLZGZzdGN1zySuaz99pLKwmFCeoABCx6dTQRjZSjks65LSL9ZmsGSDWT5oUUbynt",
  "key20": "3aJwYUBDjNerepaFuEQphb4TiLdL9ujBdVbN3A19zHNXF4ZdXb9eqKo1vuKpQ73e3geVo9bGXnAm5ATKjK27XSR5",
  "key21": "4v4ZbGKS5jzqCDi2299BVK5bJuuxx3o4cKTStwjSPZpskDKM5Xm3KvLAoB1eogQu5H1dUeZyS2EqpT7LrsgZaymo",
  "key22": "64RLvq5nP4s53HjgH5H9rGpVUXDGSUenF3mjF5wPnzuLLGsHCVrWeP5BZjoWbUSdVEvVorcMbZF44YB8HnyAf66i",
  "key23": "5GBMQ2FWszNiiNi2XLfpbbULZzEXj4FSCQTz6cBgKNz2EPbE8JddRNVuyuqudGSzr2SGuHpGTkV99ReeBbWWkyRj",
  "key24": "64SfGj9XxpXfNSF2NgBKRUBMwny96KV8wUbWu8byJJG5tyEVRKKVKq8qT2TLWMNxsuabd6pwuBrbi6hmtfKyyTjW",
  "key25": "LPQwuQ7d1VEif2vikfT5PZ4GcNHxUgzAXNcRYogLazGrKvMAiXp6P4ix9imy6AiXC7NXgzNh9WGbE8oCtMrL3Fa",
  "key26": "daWWcNQQrwPimYVSV4GCrkA1H5HLTa7Jmw9qMFG86DEbpbke4QGbLnZwWLzoemRw4TD4FiUBgsJBmmFoJzx4HQD",
  "key27": "37Qz2qegTx9tQtY31iUcjmyV6buEHc1CFCDWH2VbUXcSiRCP9WkYUZvcw6moB4HtJ18BxLDUF9NXGZ1rrwmo8RcB",
  "key28": "5iRJD2mCLz4KzcMUiN5xqYzF1vV5FR5ELmztQSNiLdwqkPT4TvVJtsDhwXxB1Bf1kH7ej2TbwNFMo8UzPv5EdFgE",
  "key29": "2gJ5tYSePFcoen9opweNjzVkSoEjo3a9BwxcdRkvz8Gm7zdLAoTCAf1czwb288W6osBFgAu7S3EUot1PYrREw2QK",
  "key30": "3vR1ynzUYFfPiVLgAFgnhawC37r31JaNcCVTu7TxV7reAKkic7JhDf6L359bobrYcP1anvNMb6TpYNpgccZCrf5E",
  "key31": "31zhWjBtrBmsnm1E4uAx4cgVdpoDoaWYUTodFVRravDAa4MYxDyDB2FPVKQiw5vTh274MjxQ4DZKBscJd3xgX28V",
  "key32": "2uF7MqosYfSXgEdCVaCKnHPruYNWfkh6Wrh1vVwwfUjT9d4ZkKZL2SVivuNPYdyhZxnrsuKZsPxJM2vgKE5XtSyL",
  "key33": "5koibF6k6iZxsoFSKgFJWN9UH56nZBmiewfzSjh5QnkBVWyyekDQAmyR9s8K61tVz5L85MykEBCs7QxbQeFA9v3Z",
  "key34": "3TDv7Rsh7fCFFqoCXCfyqnwA8dw1CSyzAunBwf5whKRNhehcaPrw6QJPJFErmm43TnqAFHUJxQW9PC4zJ91HndGs",
  "key35": "joneHbvhjiwVTyHZooJQHgKsGLj7pARztADqyW42UWXcnr2x7G49cwAvrf7JSEe6YW66sNCYfvSUQvPJWPQJ9ov",
  "key36": "5ufED85BikzXFRPvabzcgmDrPMDbiiDwYUN7nnEVg4eMQmYZKNB49h2ZnQGDfzYW1gQCCdsQindmayS7FqQjzBZ8",
  "key37": "3DbrrQKQ4fUPFfZDeanWhumszM8UkJSRsgcgvY13541jnZBe6TLrmMC1nY3LTxnmZgUhUwvEE7RNnvQcMETEsJkp",
  "key38": "2aZBM3v2tgyEWeyUZomsFj7YMpDLsfCQmjEMat2NioR59UdyDF7rjuebfrFC27ZGs34F4ao4UBPEtfb6RUNBEz7C",
  "key39": "4s67uT3CAZpLNtjSr737xxCZwuAnzo1pgg9Hwchj3JHZ1afAerGKfrANpk9V6zCnPx6ZqPW6PNLeng2ikQUrcxWZ",
  "key40": "2spAhhU1Mp4k2uKszKU4FWu6vZcbgjxgNVpvcdYVEWWTQu7cVNmGnouiF4A1GCYVT4JLvvg3rzz5E35sDTQxDyN3",
  "key41": "4MmXyQJ9zaBfvsRy4WRuaDFnj6boQJB882CudgR2RcAi1UwFPgAcbJnHF3iV3qAf76H5hjxbpQNZsVC84CdCFjnq",
  "key42": "Ht1HddoYASHJLBk1J9Md2YpxLWTAiu5dc97tAKRDbDg15MEHTN4CjynD3hyEyKju6A5msf5SMjsN74XntWWjxmY"
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
