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
    "D2tNd1w4yrMr1CArhxHQo2VHAFeUCrMCedmgXTe9w8fcYMfAaMmttMFHTcLmUUU81TBVDR9XmAmrUn35QbsvT4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N8oSCnarVPvxAbUQnbd1hZMV8S3R8xsxDX2v8fF34awiNRnp1fB4Z1rBVT969SyRWdWKi1u12pveL3KbJYD5LG7",
  "key1": "fYvt1NHvngx7u9UjxPFtsRCnJcBC3zhLLERRZjKtiYNF5QXJunhCP4tddMEXDitsWQUo7JLjyWfUk9xffezhpk3",
  "key2": "59Mhox1xRGTb7RzJxRAmYkpjdY21ejmGQTwCejmmFqZbawMpbe7WvD81yR93DR6433NgCep9opcmUfK1PdKPsT2W",
  "key3": "2Y8kZxnE2ongyfFAy3jyRjnSVvTYzm9ssdPpHA7Mkzyr5M4U2vUu7S8wwTiJh9e4XTn8EEeW8yanTGBkLxvaKyfK",
  "key4": "38dnYBi5bSF9CcnfUCv27iZAV23sp42yEFVZcbgkMBKfQRHRQaSbRsXwWc1jSVLAd4NRwgKxAtuQtXMNJ22afsx4",
  "key5": "oM1FchY8uGyQdd6J9AUNEQ6cfcVedDRCRe65aLf7q5k4BkCQvzKKU48DgifW9px5pG634YQD81rjZeN99fsmL9A",
  "key6": "4Rrq1Hnd7PDZQ4XhfpAVogTQvNJPJiNVRqV9JAUrY8RTptS7EreKbYd14ZQrVoFvaEEF8oEYdg3NUXhia81DXN2H",
  "key7": "2syjcraAejFSM4MdfRQxUdMDV4aMGDp77GnjdNMQ4NRWdTvQZE1YTP9tz3A3s9mF9YYejQYVL1y5ZhGCxi7isxao",
  "key8": "5uoW7Nc9PECtv2GZfS9rer5rwV5joeohjPPdnbKiZrPFfoUdggJfGLrjm792nWHHBQNaEXhTbjY8UxMXgkecuEbR",
  "key9": "RVVFXX5UuG3HMiywpxCXGZ4axuYDM566fAVjzJUkbPq9Ay53M86m38qBBMdBfeZCA9UqSoXL9smmGSVdxmKD3tf",
  "key10": "yfbaF8cqkp9fb3LqJ5HytM75nzDu129LkJXHdwSKvq7UeWk6gPxY9bk6xuthbxAy571ENSGVbH2TEyBpaMgxU8n",
  "key11": "4o2TFCo4oDySGU28QDR2FYFVvn1jwuRcB6zfQTZ43gP5bkLM56vkNjvL4hSH7XpSYPzjvmot7YkqQGxoLKpCXsB2",
  "key12": "5FDZ3QFse1jCBupmjkiVNoiCdt8buDqfmVd5UTECFTE8VfzvKGNWG7HYPBn6YcW22FVTdm1EHBLfoeRWH6GqHVpy",
  "key13": "2CohLvvLBj9eMbFV9vR7NeXZFZ7x4Voag4RZZFQMNFtptToSuMMHSypA177jqM79TLfbCQaSVfFmRr3QdMWh5b1w",
  "key14": "3p2wxBNCHFZQ7tXaKH22WL3z1JzHw51wW5NuaZQ1oqAM55P4EBxdHHWWicFieMPTrYLFiGzftmfSez5oZs53ZYcU",
  "key15": "3HBvRJsvf7QmxrUBC6FR5jVXW2EhdVUhhs4tGWJ5vGVfM1dWXCztNB3ZE5ogKz35yoWGmH2hsgZAQXSgwB4sFkpG",
  "key16": "4HduP6rFvHY9xNVZSNApZx99yKYUMkHzajffhh3jPCaFbWBFSwduBmTEjfbeSn9Spo3BCW8DYgiyUXNLdTcr5Jih",
  "key17": "4EbmeQwG1Ly1Dbk6N862tNBpWnuPDLo5MWarT1Vj31NENXzueYw92XZphTJexM4RjANdDqC1K7CZd3w5AZ9xoBBf",
  "key18": "2AvBjhhibQYgLthEGZBMUt9PS94zjwC2nergd32qo3MEc4YsNxrVCHAFCuMwzaJJBT5RoahuGpiGHVw9sxEgXWsJ",
  "key19": "39mjxT1BSKR8ZSsm2cVT5nTtFLqrZAK4vUKaN7BvGqnh9yM2uqTATSiQmEWCPhEqQ9X5MBbaC9FePERpG4sxr8DG",
  "key20": "3eymxiDTSbuk3wM4mmoL4nadbQK5Tdo8apgU4EFUBe582pZJPUxtXNWvLv2RTienQadsuh84kzx48B2gQ29piZ7u",
  "key21": "4XknRoyCZqewJ59aUeA4LVkVXS91XFe5zwR1RfZNUdXhWdiRFEQEkB4uhM4dTaZ9mtVL5CcAmqw7sQB7eaXRav8G",
  "key22": "5LKTPZAwNp8TejGQj8t3q6bAFJQULfHM1U3xT3ybG7mM3ou9Y7SGdWWFEC72CtWGgKdz9vq52cRSHQLA3KvPr8ig",
  "key23": "4cPcRD3hr1a8QUq2nzPuD1fp74wFkfqW8Dd3uBTrNVKWh4VhMXMQW8bHg8hDPPPzLviN98frU9sEPLrtQwzpmng9",
  "key24": "4WeGo5DFQaFWLg5Yga6byJhNANfEmUHdPvdpAJAVd7V3GPzxktDBi34u4TD3qij43TcgtvKoSgWUYs9GNHYY1b5H",
  "key25": "4jXYQaYaXxQ78eorbe8Eme1wN5tJnCsXj4zBQ7FQ4WCtezZYLS3DuGmA4WFpP95RorSQ6tHMqgiXVUsFaqj9a8Rc",
  "key26": "2kKyrjZ9Ucbe7jxdRqbopCGRfVew6VR8rghDmKcWqty52pEJo5LcgHzQDNeCDATiJfu2Z7BHnx6YRQTzNf3SG3TS",
  "key27": "atioG5QuxQdrjeuan3qtJC9U3iebVsTWxbyTZnzzHocbHyZQiNhuU1dEe7YgJd48CuyN4UhM6Psn8qRxEPwP5ss",
  "key28": "bMzUrTZEcaJw4N38vRFbB4Zof86RUtj6vtPLo4vBpxRw89LpA8HYoVTKebVAfNuDGVzjeg8A9rBE1kxs6WoCC2j",
  "key29": "2KcnULbjCeBd2tHQAK3hK9f6f9shDmC1jpj4RVBbbanPMhXr2s4K3ChKEQmGN9xmmCj7SFebnKzpQW7ues4yppNS",
  "key30": "4uhNadU4AWgsKkiJH1TaEupHimXnfk1oomJVKqv1nSnq1SaeCt22Nr9XJndZyGX9jZJ2shZARQwHbNfeSJTaX3ke",
  "key31": "3qKFWBXN9UsvDHA2pLQPvjhp3aoqidmKyVZzycxmTKyiDBAMuWeTJSU1B8b99UtfWRgRdoEHb8SrkdBPmZo1dy36",
  "key32": "4t8w3BsMv3jApH939LM1WGo8GBfT4dDjSz7A1ZZqkVKjBfetxgwHA8Jo2X2DPSMZMCq5sTK3yg5A4JFcUr9GvarN",
  "key33": "3fecsCsMZQdr5SoGHpCwA7wfUx9HvuhW1ntfnFJxHskTm6YbDiXaNUH2daTKhi51jjPaMyi1czCf6sXHSdaPy8NF",
  "key34": "5GwiLtKpVAoHvPDDhh7QqGm2FqGxoxNvjh5fSzhuTkE6WTtKZ2ujdHKYBro2YvthAaKhJAsEwyDgFZ5mxe1yRkE8",
  "key35": "2niySjUhVoacRmHj3nkzbQpJmzhxMg5pY7TBNyw98vbyGTHy2rahQgo2NyHyAgyu98BuQ2o7ExNoarYcDsLy6uVL",
  "key36": "8UGsRjDdSFQoDenbmj6KCVWCKDksdghTrNkxCY8869zV5KEq28eGRfXieRJnN1GvwVVazUHrFsWz5DMPy2jxh6T",
  "key37": "4mbFEucnxJiwC2LQgfT7nX8hJTspD4iGUM3hwTHNGEZ3wAWKeufF1xiXomKEBHvsgVEM5Su7SBZhG5HVnPdQtdYY",
  "key38": "3H1hfZgXHUxix44m68p8aQVHDcrVfznUaUENecaFbfN53Dx9iCHbXeFqn9NAtkG8bfy6vNmY9DjdSSFwHgSk5f1J",
  "key39": "US3CsiUKh8QgroqumKBXmTWrL2JNQJLmAkyihzuf9QKTy1Xbeu2UGsSPnQxrwwVCG6RcjGYSyMgx6QsfNe7JbKx"
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
