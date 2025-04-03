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
    "57dQtvme1wwg37rMCPyeij7NBk73rvKxrRs8zHvYtiRDFC5YBp9EQPHxY22NxiJeXZ4dmK8hKX3SoctvjLW5vQpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrmBnTu29JpSyzLzsXY82XAH71iddQphGgjVx7YsQt5Kx6rx89469PU7NPJimFgBuy5ks8gNKFTpENAnV5gRbBm",
  "key1": "61hzmjXfCD8ev8VW5d3NMSFrTPYG65cYVHrhsM5uYe7812afgvjoUqY4n5Z7gyvA3VYja4iBzhyDBeNf6mGx7Q37",
  "key2": "3WrxxaBTpsM5bPv3KVx4v64qun55yh5tk8G4wftUEBsgLxmymMvB8q4p38qCBFkqiW7L2JCuUpxxQLCTVuQAEVFW",
  "key3": "5aNUGqoxKM5v3L5YNdsB6viSw7edAsjyqF3ZEYUQBiRGYAcw5SEBjgjkKWnjS9JqkEb9JHtQuj5Yjg9NPLLouxgk",
  "key4": "41xZHNv9un3ACzGD3C7kWpL5ZoCNEYpBUzA5CUvMJUjEruTg747pHEP6gfz7bDXZUEzm7FwQwTW9ymssxSMZjKZd",
  "key5": "cxL3QVvPUKQtkmu2bxdrJBA8G2H4MaJbZRZBNHEwptVv8QhBhKsv19ZTY4Be62Gc1vdj9DR8khoHghbQPFpZ9gS",
  "key6": "5faRgA4hvo7iQEKPCrS6Kd2Jp5xcN8azYjaYyrFkJ9wYVAQLFZDgFgqVQVTcS61mrVed6kEEo7Jh9fCPZiPBW18H",
  "key7": "2GaaxDJt1javyjy4FugT39jwwGN8d4seK93dT5v1Ak2whhzem6oBPB7gwFyUesFNDMLNB6F5iEhZZxaPiiPMSqRn",
  "key8": "3ftznauboes95jcfUeMERrGXH81B88P7R3U3vwK1YF1oWCeyggoyaRHQcjdhqCoNp6XKopftWjcWp1EG4kZ3Qvgf",
  "key9": "3yrK9CmqK9HrWaobpHpQbaWNqZyRQGDL82RrRVfj7MiV5a6cpwX5byppr4GUCEkm2hwnQU7VqZa2t7u2W8MHh3nn",
  "key10": "2DYPf5VfLAWnoJYTrPJxLKyzCGBkppAp6hYH4VWd59nuFNLFFwdT3FaSc3CY8MYizej8oe5roiTnAWDFromwzWdF",
  "key11": "rf2LPMhq8DR6yDW8hqyXmnBTZLTT16qZ3uGdMnmE3nrUh3pgriBsFzf4fq6KY41YfgxKgfkeJRkQp1LbRCmEV22",
  "key12": "4qmAKzb4tRQmAdmxw3BPY7UDGWh9mETkZrTnxrvdmPHp6GNZaZR9RktfTqzj7TWEpcw8eQRnMvvcxQL2TzzkV1b4",
  "key13": "5CYyi1jKZtY1eJNCC2siPGTpb8k73VfiQedM9ZZucVoZXito5VUXuAMyK7mPxsu9TZxsX4zpaP5fsCU3crdyEtvK",
  "key14": "5yWfqGiaqKefu2mqn6Ys7BXPDL9ePwjShQveNUFQ2Rd3BDZRoixvqkiEJZiyzx3VNzJNCtpaLY9g5RR7VzxhLTaX",
  "key15": "2fvdFsXSx7FhnHFM3qmLtaeGeLwMQEGgfAvnA5p5uNZ97Ad7Magap42NGYZrGsVuc52D1UfYFL1mawk8topQQpHQ",
  "key16": "64KhP8DbPuiD7m6GGgR1ajEUYUWa7tPR9gdRCfmR6gQLrbAiVKqu79TJRsjBdgtZm2MUyNAhu2aL47N5rNUFHDMQ",
  "key17": "65SvEU3kjfLSPSjNx4s8Rx6BTgNwHsqDzP7eyiUorkrxVjEJmvJJqUmVdi2tJDcDj5FuqxD7xb9X8XN2ZQjXWmCW",
  "key18": "WHCxe68Q8e2NLvVsxmEZBxmh3or21Qwndctn1ZPpChGMPyvfwy62uxQAMjZPmarHM6QYxNwfr1X3cGQ1Uyx5xd6",
  "key19": "5DXGwuVULxTA3ksXArpC7KFGpGee1zXCvDpRhXZG5GRH3sQsfGCYC733DZdHW9fKkDJtdbyyb4i3yC72aHP8MP6Q",
  "key20": "5rQxB8bDtVLMvEHWbAzAs19JYy4XQ7HhJnQAiQM51UFspMW1AEWYg6GoYD65owm2nkccDBknTS9fZiRugh1fR2JH",
  "key21": "3x6MaJMe1QY4sCMHzkXkxUqLHAUGueDNVk6o4meSchBSTvH83RSmbs4PYwnbR8a6i6gzZY3Tvig8rzjr81mPBwdg",
  "key22": "38xurUHeYKgma6qr6uofQfeB331jXofUBFmMsYLRnceMekv5ZMasvC7wtdq6UX2tYN5xe81hsejtdsn6QupXWTRy",
  "key23": "42k6WFjbngnZorm7v93AMbEAVqiEF4SrLFs2GxA5zNKs4Yz5gSiRGwkkcLEZXweBRJTDjECZtkvWnnPtafjtyX5S",
  "key24": "653Tds9Kyr2V8rt3m4qb7ABK7yJemhhFdgbHCX37G4zrPtkom9XZ2syvdUeKZD4iQRXCpWwDQiNM8vkVayP4k4fq",
  "key25": "42njAX7kaPa5B6aRhPgJpRN6r5EXVDpoFLSSiqboaD9xBKoWbm74TQw5NUF1dVsGzDYTscXY7pa7HLnPdmq9FLf7",
  "key26": "37SUpECvNLYaa5qxqe3kf2b67cMb3C17ErwkgxX3CBL76is8WDet4aHVrDcHaiB8G7xzDEBX4DuPkejceU2o5NH5",
  "key27": "4mt1K9A2Ro7NunD5i3b8QdYc3cbQK8pvWzKSp4FR7M6x7uqX2BKtLqd4kc7AqFktJwPBxGTMoaEUvsyKPNm2nMox",
  "key28": "2UoHC9DAM6DSghsznYSy4RntDXuMFbB6ZqrUkiUooWhNmh3i7rKgDPxJnmhEwDBPTA91RkHVdiN35otiQgsmB3iR",
  "key29": "5yQNdxyuGEPeoM8qLasBS3b9Gp4movLrtukUVfH9tXiwCHjH2dUSf9gUHimzhdU2T38hzSZed5475cm5DwUygYuN",
  "key30": "ceMafuUQ8nfYm8PCKea3UYcjwgrjcDoMgwHKrTpfXnmFxTFYMtB5wq2hiic9sQRtyWHDdcnaHfV86gr3jGF5QNE",
  "key31": "3xu2sBECnbW4XBkqnrCUTfepKryTYVyvYALKLoQ961BYKxfHgsQLT4qatWv4u2HAiDyWsL5vBdUhYf4wCLsNCfVw",
  "key32": "wUfdKVumQydj7LR3Kq2VQGDu6hZiprEyxS15EKy8KaKoZ4RRwTwbo3pbUEvUHT6STFe2TkRfyovw46cU3rjvDLD",
  "key33": "3ERxboZTewcd6RxodJYRgx4dkPYrkMpHwAYXBDjHo9ZvjNaFjKhCp9UWTRFzA5kd7ymKKxbY74ZhG7Efb15n9xeb",
  "key34": "25p4UYRsiijCpBVVzpFfyfR1EnHw41TxDAsB7TNBmGswGgTWyEDu4rT6c7YD8hKSFqwWo8McPKxQE554G85PK87m",
  "key35": "3Wh7SnJfwrMdr5mwxvzHjNEEE8vq8eAAS5k83hNxxRNefrsAWfLGjukZCuJN6n3KgWbNY6gSHAF4iZjs6YcmEwTx"
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
