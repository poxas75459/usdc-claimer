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
    "4Fgn9Bv5w338f9KZcGsrik7rGYLA21JgBUufYuvNQEPm1G8enzvfiq6TKJtkmBDzNZneuV4dsMn4Exsj9ytmeQD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59m8Kp5u8StryhRJ7JcU7mra1Mqc2PrJjncPyakF4BFfByGGMMFZ9eSnMSPtzhmkg9if8RDaR9sLsmsHB1X73poD",
  "key1": "S7nRNi4PRhwbMTme13WUtGFYLGbn439T9TZrVcnKpDDQDTgw9U1DT3q9y981UWpKsySmYe8VgaCz1MbamhgDV1y",
  "key2": "2SJRMcJsymrTaC6chyTWsJYkdckNTJqZQQ3sJngXjvuKf91JWA6fviix5eKvLwdCp1RQiuAijTZJExfHo4aHfnHH",
  "key3": "2JKGBPHmUpdqxCyaUYPY5UFS9Avy5CUUpfKEmeBrxaVVuLNaHuSriRvdaykqnb7rCSXXAp8TfiwYQMH1KwEebRZL",
  "key4": "2u8gtCEzivBSGgZiVAsAvs7A2zwbiGD1Rh8C9DmYjc2tW29tkYWBnjtWrMGRHKD8JTjcYeGYgUYVJP9fKd9TDDZd",
  "key5": "2z8Nx6mRQnfMr22W3BCahCUwbuE6SaKHCq7YtqGj2Xqq6TJYoqTfwTLDNJWAqr9BEoXZnkfybAJhwTJ7bGbswAJY",
  "key6": "3pTi1QKYJkkAGuYrZLUZKmPyihee5Cpe2VwvLoPKZK6grcgWbPRqTJHXnFLRSScbVSdMgRKoJZrgkPwMk2QZwyJX",
  "key7": "4sb4AuFSXF9rYjv5y5ZdBPoa87iiXVyFf3nEFiQLtN5TVhGJ9BG9Jkj5rdATkFcwJW8yN1xNXawAQJxAABxbkAVr",
  "key8": "2jReKXmhHkCqydfkHemZY8QjQwNiPy9p5n1j6NhP5CJKCu5PDPDMuNr67RkHJ8eM7JDHUkJKQonRvPnmWmvGoLbF",
  "key9": "3Qvof42CEoQGGaNos76Mn2QSBNEAXxRjKYChz9aPt8kysE3AHKLzXSnK6bvMwt3KjneB1g7R1X75puvscdkKznYd",
  "key10": "4GGzfDip2hVoQNu9gfqJskQPZe6sCeugjtiL4h8ev2xQGdzAo4nFGDMNMNKkwQKocKmFEwsrW65MeXW3gQEhNyTt",
  "key11": "XSPnsFtDc3aPnyJ3CNPDsgmNNmb54gi1axQ5XqJJyttD8RKXvP1KUtuJDdkPPwXdbU2Voocb7z1FYLopbxHpEtS",
  "key12": "wDMUtjoMcc566RxJ6iXwJNbcVzTwrSj3uVySJ51pnuBSTVGXd6adf4c3t5Vh59YKxyFtQb57wqPAYuZpWeWCKKR",
  "key13": "477s2ag3hxqjfpfuzgybQBPqKxmkYgTcMnqvA5aqFA1AaKeP3qtx1khExFVBteRJDdNENC5tSRUpojiXAmc9aFYG",
  "key14": "3NdVqTQ2ZR3pQMSFBzTyvX2NAovjjNE4chkqvHAaHzbyawQ27Xz1DnfRgpmnpzvLkfc3DE4M7byfNiacEZwExG6C",
  "key15": "5JGDac7RgYtYsCXuWmSH4ZHiksHrSzM5My1ycX1yYx8eY5TbmCvZzSY6NRGjipwot29McH4ZAfiGwhjzLd8SDj8x",
  "key16": "38C8BRuNjAoTFNYrka9xhNPyAtYoSqijw1pJ2unZtwuUgKCwMBcgHsqA9E131aaEKVhpfR5jYZUzdx1tsX15NNRn",
  "key17": "4Bmon5d1FNz12d8J82idfBvzr9Ua3arGKXSURn4PW3uNUjtn8dBUF5E9VjfzvL4MPyCNTQrsBQa3HmXt83Dbmxyt",
  "key18": "5CN7nLx6kSoAYTiojmj8aYhBkMU27CAPzX3ZaXyacGdvbZRyD8ipj6kyUWY2FosfK2NLQcyuCAoRXoJdrdwACAhq",
  "key19": "3JYxASpT9CDuzK33twTzVLCJizySZtz71ordQk1gHjz6Nz4bygCqEEFmCMaMYTWZfgj2UJD626tiAbupv8y8BF3x",
  "key20": "3rsB8YDBeMkDUzUfA2NuhiN7CxgyT4kow6E2utjAvibZVBLQi9Lok5dk6hkrT4HK9baDHnRMsJh5gVm4Vdb4NoC9",
  "key21": "5TotaXDZDDH11SHPvh97FQE4dQj3FcHYDzzNqF7mQCisNNWdrgDBuUix5wSUaGirQwf6PT16VGpgJipSGCfBsaYS",
  "key22": "4fPbsjtMELvvDZcUpXpgkDndVZsazqeuKc8uFwP2EgR6CfhfM9yrYKUNcY3v2T72swE7RahYGoaSDgqgXivnBdi4",
  "key23": "2JoLU851wNfXb6NbGX32VbFaSvdQCbXdmUvT4SfZDJCa5pro8qxTKU2xYjCBdJ2BxHfQs8e9iTtreeUd3j3AhUgX",
  "key24": "3RyZfsyH5zmxDEJDWdg5jZZ1yEuLZ5WSXHaWR81owUeWTa2rE7Wfezi1P8tUSxBmN7TPm8PnWgi8WGwYSr46rpeL",
  "key25": "3mXjG5ot3dD2CJ3pQu27JmjZasUmixB1vcymcqDY7n4uj4mG3q2QMDe9LnTQmVUTkvv7GfWxfwN1qTd2YEmVC3W2",
  "key26": "5VfZjRH5MoCTxgb1C7p2kceTASg1GapGypQQTh6G2zZb5o2hriEhvnsSVqcJ2JZQgeB5xLe1hDN4KpvSHUbExArU",
  "key27": "2Xr7Gby8qNgWWNCZrMKEwDwsKd7bS7mA8FYemBrVcUwgoCRWdRS4Q8a2hQHuMCmDNwtBGBg47nUm224WhDR43tuC"
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
