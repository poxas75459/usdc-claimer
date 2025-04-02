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
    "4EKaWd3urKS8Z1qSqQVqpZf47qA2NFP9FNJkmNfQEZvC5BeZ62P163o4A8aFp5S6pLn7bK5reX5CHVY2rNBrHk3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MG8gG7NEV4DcY1EMrP23kWByYZMB891LhmKHQi76ZhTDeDFngLvc3nayXN6EWQkW5LDKttQPZFXFPSMjmN3PWjQ",
  "key1": "QqmHxhhpj2rFp4vghF7hBp2stg13BVPr2Xkzo8izJXhQh8K3LU7eAdVB6zbp4yBqfTdx5SNoFfwXg1ASqmHrypm",
  "key2": "59RHt2gF68SmocguLunvJAF9LiweojsV7jYQRS7ZHPmyADkVcgHkPRrc31x8W998eDQHQKkYEEz4hDcFPkD9Ao1w",
  "key3": "2SHN2URcDNWfsDHg8vNPxU3Kn7UTHm5LEeEcG5X5rvzcZ9amUocPFcbueUcyxALScq56UUJJamycTgpKFvRnpPQa",
  "key4": "ZA8L2a22JCVVXjrZiPSN2yfi7gYPPAHRxmwBWUt2jtDmsutQuJVjpn6rmtq8CyJsyCDb8qxCVPbybK6h4E3zecb",
  "key5": "5GF2YVRURG5EKyifYLqvEjp8tc5hRzX9W4nFcZ1W8t69Zh48B7z4CJDKKQNE3Qh3ssTtcJtz7XGBkkR3SgLER9jc",
  "key6": "r6ZhCLTtWFMedXtX2Nrf1jZiqd2wHAWjq8SaeUHDhd6hmi6MWpYeYe1HfFKWpZZqsspxZEvhWWkXgG8RRY8eGP9",
  "key7": "5iA6R8EimEm9Ne1MMx1B4Gc3bY8ZbpW7XfPiZPxThZvFA9ED89N4apu5pnkjPJh3PS2YazLxBNKkVDGGbPkdSpbs",
  "key8": "4GG3BRb9YbHizsySGXtPxvqvNd2dTzS86CaNY4Q7nTgu16TkwN2FVN66LnucozAFT1ubaL1CjrgCWMr34DLgexF4",
  "key9": "3P32bWZvix4qTa2kn3HUQHoRA4PziQinHekLoWoNXfzudgTxPcaxfaP6QsEXnCdPL7M7XDPbGy1snpuJnVG79XGr",
  "key10": "56XFt3o7UarhLrK5RKMZVqxA9bR6TmD2WGygiSgNNhCa18xzxDYwT97ds6HzQ5mKYCzrYVAvYbeTkLmZeHxnADp9",
  "key11": "6EUzmEmBeaDdpsQcb6HdePa3kDUq8qjgjbryzLDoNbLNYqBNMEYp98YJJNQQiY4LxM4drstYgku3H6aMiUEsfnu",
  "key12": "2tZz9qs86d5PFbrnZXYy4XZ3o7Afev3q5ha7JuYpCvQGmoBiqWaQ1Eiv6XgRKYAh2Cpij4N1B4Gx4eh9LJUSLgJ6",
  "key13": "AfhvxJHq3bsRx2w5YDGwQjQRN6dmchSE1Luf2UujZ9Q5yuDWojJSCNfz3aZquLRp7tRx2BotmQRKqqdDsK5kndH",
  "key14": "56yW4Lg4qkKmnkLnxF3kLTiFnrzZY8RKVC6jMfH2gsaAbdfjhuiHPuCEVVshx6eLUSwFrYTfjcLr5RshwxH5KvRA",
  "key15": "4dpjAZBXmop54Nt4jTnWBVa3Giq7T9iUbZps6e1YDY5eTxqUJu464kXnQYPgdsuvnFf3Cv6aaVNZHKqQwQ751zLk",
  "key16": "4FDDUon3EopnGsDGX6jvA1sKohonfxpU3eLHzFJAjurLpeTAsMEz9DAa44qcHzmK8nyRu6criZTJ3wTiixKn4tFy",
  "key17": "3SAF2MD9kSQ1ThUPQJoKPpDkaAPWQxy2yVPWz2545UaGKBspGWGpBttfhEWA46raRFavxgqTPCSEtfMt4QCF4WMk",
  "key18": "23HZncdwDFu83GroKRKts4CTnU5ds6j4GC9YaATdqPsKLtNGutZR7buQd6YvRX4KjJyqudHjBDbw42z7uei7SUWT",
  "key19": "5v87Ps2tEXML5saCoeiist9Cz8BEQo5dLmiuTrPNnTHbMUMoBBrfwDHBtTMApdtQgHJYz6YAP7Pp9c6cmsvxMtUB",
  "key20": "5qsEq2cxxkB9ZZ9x7KQKd1AUHujxLiC6zRKzSWNLTndrneMucpzWJPp4zLY54agzR64KVqUrvBoF3hGxFPSBz4Rc",
  "key21": "3APVsPFJLUt2GKH9AdKxDEA7PBQC5LfCdnE6FJEzJriFkNUkEdBsrKyCYWLeWM9M3TQ7UVteTvhMkTK1YaLWWj8W",
  "key22": "2HMVn6wYA32QfDTGd7VsEzvNZUzFeB2FW7u4v17V8MayQmkaAHXNcLuadCTx17trMePSPiNU8GzQ6xkPYSciDxXb",
  "key23": "2mVyqgHVSBLg3nCghHbVnTaNYQ8dJa3PjnAwxYTDWGnvME9wuVt7n8MSs2EtzXx9UmYHMJuScZDaVYV4HJJ965X6",
  "key24": "wB3BYht4EPdrxJaKqUW7HjJf36B3TVhTKfodV3zaF8kdjK14qnGpsNfE5GniMDWqAyT79Hf8MCYRiGzqyTtkn7b",
  "key25": "3RST3BDnWWevSmGc2YCHAEsxKhEMcUSpz16gDkEc9K2iBzCeLDMD3NnWo1myCQEc4m1uVWcqyEBTHEWsg7U3UAWz",
  "key26": "4HMSpc9tWqJ9TkriqRexrRvF7WLk8HhoLMvy4StdJLYaoe8c6BkvWcDovjqKZRYJsEFzeZPUSsvbWs6irwPHnzHj",
  "key27": "j1rvuc9uPQyvtZktGcmYR1MrsbZqPbd3s9KCrx8SJ8xiDPKrKn5MhUR27jMi81U2aX7R4L4i34iyZydaUFePeHm",
  "key28": "26UFev199vMJBksNV2T97HHWxJ1raT8vnR57upabxsJhe7AGmnSLgo4Fm9Au2aRB22Rky38wbGuVXyocDGHmfEmk",
  "key29": "4FT1qRmpKrAFqLs4439SfLnRsZSPz6KhqfDBBx6Homk6ZkqMhzzbxDTUbaskSZPqbUGDLM1b94N28wRk4QWz2PKC",
  "key30": "5XhpYy8iijwmLWqYctYKVKmDsXzGJFCRqQx4dGL8EUEdgTdigJpyhHEukSHkEvuY8GuGKVLRU24qumBMsGqNZfbh"
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
