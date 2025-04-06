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
    "yWUz2V92Pv7U5R4rixCLPv6MgQXKWgww1Kis3sd1jg86tHTaWUfePgPyPiS6vLLU1jFHZXdSNHLmfbDmDfd6Hx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVNqkN47ydGg54kuFPpPs1cKteqiVzXoGBSRt45oq3M8UQDd2qLGVPqovUhNhNTzBfUKb5cvEXdDZh6RLTdZQPW",
  "key1": "5Q9cRQcHc4s9DfNxFZ7Vc5Y8xF3tTrbWd641uhsGwYaSoCxTws8PZ4qfXc7Pxb92ccmBR8x8sKKnvHSrQBN4DAYr",
  "key2": "aCRYhyMfyqHERiGpgi4PVpM6kAVRDKsLuaTydxJeMK4xmpiHYtvrTry8Jr26idhynuMfjwmUPyde51GwNSfmA9f",
  "key3": "5aZDiedQ8v5LBdaURs59EvtUE7syRUWnKCGqdDW9HmTZ27EGwfVMgBoFuPmBa6tgQ3eawrKyfE6VS37cdY3rJB2V",
  "key4": "5yfzafDBG4URjZK3rrBJLriy91y5itifPMK3QtYnANz9DXsqEZ6inaApGtXvZHj9R54Nm1YxDJr7Mbrftmpv37w2",
  "key5": "3BTe8cYWyrTh9C7CXeXgNTNrrJ4x3KXMPNCkixiY6v3pKEfJvUzi1RbaQYbuZf3SxK8ppmS9SQbYsBUfT9T23T2M",
  "key6": "3aWx55hfujhvUgzR4wAr3AQ8TZXJQob1Kb74CLvZYuV2PmZUbKp6ZSjE7gqWEKGL3w5HGfVgUNHvubJdNxSo9i6g",
  "key7": "27iZcuXb5mDHNFsBuMMw6u4XPaPzMQqZDtcHjRmk8jPqMTcshtWHmfoHJ1qZrbUrBXbnyeBp9hSfL6dgFuhLuoVE",
  "key8": "2iMS79WMXDiHxsLjHrkkHEkJd91PgpKbA36WvXSpyphccFP92Y1zbY5jPDMJ7V1sRwtrbx8yaJsj3TQCAJye9on2",
  "key9": "QUeSdEdEhhQXsu5xdADYfKx5MnRcgAdcXcwKHc29pwFiAPfDCFbZVAbUg614ANxdHkZNJ9nUSDzTgAaxE77MeVs",
  "key10": "4KdjhGjcD9SuZx1nAGU52h26k11NVUZFetD3DfhERTmqrjfyHEZkKtZZ17XLj7BAdjpr5nmegzXwPZgMGrHfgbq4",
  "key11": "2Ub8riKxAMAdH1jpVdZZWQxUX7Zyn2j1tMusMo8D2CeTgP3sP8Ws1apFwhSTjfJHcjHLu2ePMrgbp9AE6K7jgGgq",
  "key12": "3aMhMcAgGxDbDtFGffzZfUSkWLdoEJm9RJt43mNU2BM1RUvqGs6YgmNFvNRTTgv7Fvb5YnoySriipXfGGbFKoqrZ",
  "key13": "4gKzGUTKuFxN7K6MBFvUQB2fbg3LYDnvsAufcEXZRJ2okYg1nTrxABXEyFSLsiJWiwB1AfdQxg3DtZDygFqFVfvn",
  "key14": "3XPr7LcvtBi6fm2U2NF1RqnmwVsVxnySNTjM9s5frFgpi4hSLm6N4E1x3w38GtoN2fc9npMxuNdEDTDtz6N4EtcL",
  "key15": "63ftiRcVHkh5ncAyEBs3nUHYCUuJtm5kYweFvcsW4oVG4USsy78sPZXNe2RLcGRaDA7Lnj3EjKDFWkHoLGhPjaRh",
  "key16": "4UM4ZLtLoGDfonvD4dFhE6GDE8N2rMz8Jt6MUcyzotcvPJpiNgy3ziieZhEB3FQee8uKZDuxBE7WvLHPyWqiUGsn",
  "key17": "5YVwd5bmTpuVqP33VdmhWXGNo192Q9SBXybhcn4LsbhXNSu27i9ZF3ZVhcBb8PB6wgpc8zXm38KVV7aaxtYrFQKi",
  "key18": "3NFzsjpVxSVBauRaTniNMwpERo9ntYdqzoAQiSwt6W7NG9PsE7wM4gDkbfmMhAbpPk9TMQZyBgFL28Rc5Yq7DcK9",
  "key19": "4QLX77DpM2uE6REivjuMSWWz9MtCyYy23PjYAkDY3qKQw3JjgqFiyZy2GtuTxjQd6ShkMNjvYxo9KsLqaUCq6wVW",
  "key20": "3FZRTKq9UqjXPSP4P9DYpojtZPPjMLgzaKXdXCh4Ub8Y9j8Qyyy13QB2w5Sa6Pj9eMWRLNZHhRV1P9Z8B9UyDpkW",
  "key21": "412xPP1ArHHET5ZVstWgrjg5gXqykpJyoUcTm71TAvyWnXUNxUDQpogy1ewEEzmsvw5fKEnwZkaPdroTznpjxBoz",
  "key22": "3DXdowTfajjyaTZMhdJBRY2VtxSsZ4kLnG9Myx8HcxQMZzog3WsGna31zx3VCMXL3EVouWTVkFKb753qnJdxrekW",
  "key23": "2aaxkBRhZPqfaSSyj5vPiBNCFxcefSxeDND9UqCTgkCw6ec5Mj6ZaQsrnRguLZPVuwJXoNmpfoFQDsH6QisfwKa3",
  "key24": "5mXqDPMKW58eJEGpTkVnV1KCFCVzhNTpQz2zjfasvaEQLdCjvoht7xE6kE9ugBGhyPANXTZMF88aQKTAvX2JHPdn",
  "key25": "5hvxLGPXxMQgQyukwYiQt37RWpaS5ZNfNUBL4531jUud2ufN59SKtUD4qo7xsssiQhBYw3ioFXTdvdiaSJAt4ASi",
  "key26": "4X5t5pNdLu3J3QVqbptZJihmux3L677Zsakep8oS9tg4mGojJFXmSn8KyicbcvHSnPipaPN8Q1i5GZaekyjS69At",
  "key27": "5YhPjbSMhr4Fi6vK2ib4XiJqu4KXUN2ByjBhsKindYV9kb9G8keKJGx8aj5iXTkhTdE2yWxxnEKuypKj7Gc2NRaU",
  "key28": "gs4emL7UdHuZWiXHWL2aAbg1dTtb3GHXqvDLScSFxqdMocbztKRvwK2tSDtCZBbW5DeHYe3t842Sdh6aob1JQYy",
  "key29": "5bKtYTJ9PzWGNNXghiKg13nXV4Bu7VDjsm8HgYRp7QxpX5dGDzBbhoxEdrd93vqspmUqWeGzc9Kd6a6grUgRrT9E"
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
