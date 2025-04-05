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
    "3rLRnJakQoiypKDvYL3hc8HSW6YBWBXsHpt6pZebymYXLoyugBYT2EjPAPfiXrMeeGz5tgtv4cwy84Qq9Wp4DjZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p79c4T6pPL9xFAuWZZPYU7VQcVvEXvWX9fZJoFoV3DUX2XNeUumGJpAmE8RVff71FvcWJnJBLDvaFtEo99sjGf4",
  "key1": "4SXMM9Jh9PoapTUFfr58qP32Xj9doqNS8RH2rZBYzLJp7QWY25ihrTXfkp6M8EGjPveHLAF6drCV7VyXo5EMxQfN",
  "key2": "5HVChRAGiUn2Qr4u7zk2agTrsaNmLweUkxTWyGcSNG2Rz2JZVoKgeW9shfRwsbyibSkjVMhvB9kqhEk3gnXYDNUs",
  "key3": "4iXAaBrha2TeKZGttn5stmHSunypn5JArp4s5nD7HiZ6SqhpCJeYb4oF6N4L5UaP2Y1rfSsfstKtXNUnBFuCkCCa",
  "key4": "2yWNPGZRFSatcF9ZbsmHi9ApLSf1KoSoBHSG3SNkHD5nS7DSqbHBfvpJcwLnosLPtroEzMxGJy9ufEjVXraxUnuj",
  "key5": "3LMMBiBooHQMR7X5oHaxuGCfMWoFvxk7pZCjE8qdUfHJXvxV8KLeT2iyQY2272w84A6TsVE5Fsp9G25rWV8KMekm",
  "key6": "2SERkas81Zt7whft8WzsZQhPAiSDQo2WTXByVWRjKEMAQhi4ZFxKhXDSiy2eAM6PM2bPY84B7Rnm4miCUSv5MdCw",
  "key7": "3VP7TohW4sroQru8TUySq4YERZs4V7KfUZ7jqVpJK1ePeoms9JeDczc3inDy1YpPxXQ3kz2KnLGdTNGj6kZVduLD",
  "key8": "bVAx1d6AzomSfQcAfywzUJpVh6nUt84GLquCq3XFm1D7EK1BGSTAtDKNzL9jcbUYks82YfnkMNyxnProemqqn6r",
  "key9": "2BUpJat3VyhYvRgQTDsFEKhv2bHtVV96k7tahyj9y9rX5hdhqCU7ctFATRirZX3ComgvKZGFxoAQXvXYQQfgu2vN",
  "key10": "3dAx7NRvZ5oaU6bphNZmR1sK5BuSkQ2ePAzCrLgftkomeQGEmndjmZpgDznx4RMeyi7Y27KxSZmH8nXf7uJCUoE7",
  "key11": "4hsEkt6PobtM16MNi25PgShug2rNCdhQrchhnp79YwJTUZWbr9jjA54Ad8V6zT8QPorgqz7CG4tDHfNwXs77PGvS",
  "key12": "3rdTkfQRWTgAupjwiDbbKPRitSKPX7yCbfkK6JNhEXCBSJiqdT3j1Ryi4PTgpBpPFLZr3jHi7gk7tTr6f6j61AQi",
  "key13": "4svtb5yVLfonAPtX93qink96YJxShiAPizyoK7xbU5gUbX6rZa8UwYCSWWcv4jxMEPbfFSrFUuRt1dsxtPDyuLer",
  "key14": "3b37SxStCragwt4EZJaY3ajsFFp6pZbWRU9WYA5woPLjqzQPSMCTZ5fZemwxuRdVADWn3UjpkPoMo2aLyT2Ve2j5",
  "key15": "2nBXuDCgMTYihyPmghC3TojordMuNEDYv2mHNNPnPz6S2g9XDEu8CGM1hXPw4yqMCMf2YdnzN5qxK16FVZpVALom",
  "key16": "4YasnHg7DGoDe1cVmZFUXhhbhiCJmu35ZHE8j9N4J4HGWqaecJt5FzCsEgZHYUHERLV5521iAWJPAdR9J6oja4xh",
  "key17": "4PsPdzK4utUWMwZoDbffxbQ2pYgcsMGe2YRAa6YxnqsBkjK85ygrQs1YF2KU1zqUXBc1nLC7uKT1Qj3bQ7JY8oJ5",
  "key18": "BkyzT6NWdHnkDpZvBAc47VjFE1L912s4Q9t3iKTFWcFxkDjcQJtb8kyaQvGqEgo9Hk1nzd4fnPC8jAPD1sH8QCc",
  "key19": "MkPPUhnhgUtFQZwFbTjGbD5MYrQoFUWKxcQG5eyto2UUxqg4DxU3E6J1j2iHXommVyZgKbd4rd95GB6YnbJbe2p",
  "key20": "4DvX6dak6zpz2JJ5fyZozBMhMFKGWU1CNPr6BUacHHKF9r7fSZn6jvtmrHtS5JGK5sLBhMsTibND7Nf1XCb7YKKK",
  "key21": "fDguzk2F38kezBMHtt5aQW1s48VJ22JRqKLmvHbU7TjQb48K3EXRweNVYwZvUrVQXLuhCppjtcYAgV2EwFvN5vb",
  "key22": "ke5McT1QCnmPTXS5gugdWJQU9rmLcC4TNzA77L4ocMJrzQPvPfmKLGkd1aPegTyXzi8y4CT8ehhQSKBt5SAsWeN",
  "key23": "DogPhn7PF13v7Ha9EQ4TQfSXg8QvoDaSpFnWMD25jGCgyPzUCNoLGdVZ3vF6UaeWGq7uYdrwxoPnTbF7Uwc6puP",
  "key24": "aZG6W6qH2WqSCz4Ch7d419tQigkpQspAZavSXHqyCWSDgA7bMAQYu878n4hqxNw6RAANqMvvqAGLgpovK4ZqEJz",
  "key25": "odafpvRiijuAXjxLRE6P6eyuUn9pkWVyeHE9BXJppSGaQHT4ahPbuTtNV1Ey6xWMCtLBmU5JpZzVVmnBpmHtmdh",
  "key26": "2rawuMqGQpq98ZQWAVepW2vaFLbwMo8KbgqFDcY6onn6terxsZY8p4Ffk5eQBsSsEpwQZPxvD4pmNr7f8C1NCnRT",
  "key27": "X5Sy4qLtMbFXY649onYd54yGy1B1S3hzXoL3NZWz5Y43VwPuHWumSBFtRF2Kg4E5Lp7coTdZhaxWoUt3cpidV4U"
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
