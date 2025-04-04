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
    "YToTizUXe9bg6a8tKc7oe4VEyLVTZYz9w7Tsc7DvFVj9NmhB7RwbLGViJWU9ddJZgmkUj4mgHX9ZH8jLSAaNsDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AAsUXtUnfu5q3KnZweyEsSkK742L2aK3qPHMe2ZZRhrESbWP29MBK5FA1MJt6ir3cm3r9Z2SHWDeXucXJXLXV1p",
  "key1": "5bDWjfQEjnCPEtcqLE9qVuu78Vmxt3pZjK9zd3uxqoWKyxc7FfBZTfYVHdE6WiyHMhpSiCdVxM5Smn2s7XnT7mAX",
  "key2": "5W2nJdNUMAza6Evn8JcaMws31aAjnZTuRcs9adNJrs4DUgCCf8bYKCPudQC3Grq92LTfhxA2rSbXNXBKKSkMR53D",
  "key3": "3y9ZtL2k2Se7cXBtHJCuMR3LHZs72jmEbs2hpu84QouACQZFgxbnN7Sx1wHQPAcSYRajkEsE1jbm6dVY3nmdwAs2",
  "key4": "2dKpVeUFUNVn3xNbEkjuMtjVQzTuV1UbZWffsnFBiiWLjLMMXPVYN4RjomjFR38rnDiizFYQPXdvRnNj1pydYHZ9",
  "key5": "4ZJdXbHHoBqt2THuarrCL8eQGr38t7zAVGCeicXd3Z7txt1dktWWfbs4a6MXTAqs57bMKoLKipUjSHuc7bC1cMUA",
  "key6": "FjspWnfUf77GJar5ACKrkXUEh5TxftcEwygCrQSsL6oCZ5Jtxc8tc9h23b4uxfHuJvmZsap6oWMzBLJKeSv8wre",
  "key7": "3nVdyDSn8xj3aDcrgFsbad9s95huxjKXbWqg2JRTPY5QyedUCyd3S8vDas1hmKFrf7BfbANUexToqVswxLhJWxXQ",
  "key8": "2vVKX7xRNXiJ6UnZQyhtMVWjTLvzpQ5gDYdruZUmRpDwyadfzmjEwe6smEYVPXhdE1TNsjMtzzS1bF9tfTa5S5pL",
  "key9": "3v6VyEXVfgx2kXwp6Wio4WRWC9hzq6Z3MCsPTytyaDHNg372c3b6UGbQNwZhAmYsKFPXDVSKtBz3AdZG4Kombb1A",
  "key10": "5X9i8ncug163QsYwmGoJfYM2qNrLnsZv8aPVr8GtbJC6fTEkoPKurJqoYW2noFUcjm5kVk9k2FSqPWM45awJpD7r",
  "key11": "2BYZWbY8iWhCuhr7vrUXDXeQoQ6M3pAzpJAHuqqtC4ZGSEDhkVPyyp1hoEkbsUXbXkPqaSXHRBGvZtbsBXySU8qH",
  "key12": "3kj3jSRgXaXqeRZWwrSAamn5km9qGMdQ2Lw8norAs45zEhdoBzNdix1kgg8WmCvguJSZHoepHs3Mqc1tqZ5myFDH",
  "key13": "5u2PBEtEzCPTnq6mjpG2vtbvNfVVNvuyNYmy48Xb3iC4maGepsrCW3jPrrUDiq5eB5pSjpvAiGeDrZykfUbrB1Ao",
  "key14": "2KE1XYomBcdivFAWp79VmzEne9i8Weu8cB8rKf4sd7NPBVHtiYjyoDiH16ji5kCS8KNcB9iqMGdTf3TTzStS9Cey",
  "key15": "4ioQiXNkeXCHkRxJAaDVVXRU3uHGr3iZTUwPW3QfnG6ji9oEZEVgoYnRKC8PtZXT5Fqitdqjb6orSWfLgQk5P8Cf",
  "key16": "3prpD68naQ4nAp7EmZg5QdpUWdycnqMGnqxnBmgAFST5wZo11UZTuSE6wRJ7EXmGXpjXsfiuuW5rrB8LjebScfiG",
  "key17": "2JKxk4xwzgLBTbL8Jpp8KsFoLReFvxc9hcLjKPLEhMin2MoYMXBwXj1kjyRVTRucD6izDx1j3Nm5bSETivQU36G",
  "key18": "3FhAmkbCGC2bHqLth9o7ps24uYGKf4DkheaV7FvKCBW1tcN5UVo4pH6qgiEeYi5P8jTUcqCfSAaTeiUNDn2jrK8d",
  "key19": "2EuKMkSUvjdnbmFTY4s78upAccAjVr4SaesVhGaARjKn7z7B2kgKucM7db7UZND1hnDu5Y8R5G4LaxvhcoSM56ms",
  "key20": "qDzUrD7wzcYRkZnVH3myanuzPmMeyDb6ae4kAuEmafeWVBruC7NaWWtFuLadxQCPesz7RJAcyDuivxxc5NM3t21",
  "key21": "2cQ5bGWMbfJgycdR1yG2VUtvtd183B7Fy8hwmrW6HLiEGUVGPSA6mzbWxpAWsYm9YyJewGMSkwMByryZVyCWctW8",
  "key22": "Vy45urKkkrpzuN3JhfaSU8ig9NDXq4tjeiNqTL3nJtNAVkKwMD1jLorKXQ6baxJy2UkeUqunSGJxZgZjawddFv5",
  "key23": "VR9x3bMq2BZe3dEXS3wYLtPnPGQ8awZmA1vZ4eo8bGoHhzFnrXAPaZmuNvRxGt9KkUPnt8VVuvV7Q81MHCj8yHD",
  "key24": "2HmgGUnhNs1psJkF3EFB46dmhGrC8cM3RXnd1EdJCkRQcGudN9sWonriLtWMmrtR68SzetqyrJFQCT8MsftqE1tp",
  "key25": "326qiTMoWvduAD5kR9ZqLfEpL7V1qo1hauK7Mo4oDY5ip3gEGJawByfV4ttYcbJ3cYPgL5ino2xszTfuKYXzaVk8",
  "key26": "4dEVQhN4VVYKsHc3KNXvPBUkZfowzL6MFjHSnnWVj8GiP9VDr7pwm25iUd8ff9zPKDDPME2c68c3NMiwRnJXRc69",
  "key27": "4XCEz7ZogsSHwRoB6prVGynYXHZDe2ZNGiPQjX56VZi7Nt96vToqyq6Xp9CyS6T2B6PLfG2uW4PMhZGUsKZsixLC",
  "key28": "4EREBahwnLrm1huGV7TjYuAcgcKVdGMXd6ZChnQUYL2vuaUV8tBfuFa5CAPL6M6ptHU3pi3nK4vz8EwAfiSa5KDS",
  "key29": "3YpMQASMGpzFEhTsQXeQRRyjQrxshWcexrJj8nnpa6SDphiku3zX6pbAzNwxyCygc3XHhkDHHwXupr2vUDwv4eRf",
  "key30": "2PuKbEZXVj3bbpdcWVoBLBTkUQbf9JD3ttMi8vDCNpvDJ6TaMmBxTF2LiRDK75MNDAF65icnnZcCF4fwxHsRas2r",
  "key31": "5njKNbUMdWDDB8k2eRRFPQhqmAVM66N9VRQXTW49drFCKeEgxXLejzxxENKskgyAs7upKAmWuwWGa17wNWkW48xr",
  "key32": "5F19dSAQ3wmMGjJ3ijz8hBYE3boQENBLH2q8egE6a3p6nfFJ2kAp4YvuxiR7gakPd9iQg9GmvSv2pCMgEFGySyq1",
  "key33": "4HZNa6BYkKbTQXX5t3pZjGYaG2zs74rmWnEnwUHe86XoKVhbRMmoramfnbXYFNo1mUkxMnX9zocoqQkr2BaVwfeM",
  "key34": "3vk3SdkZ8EQuWtnPpsur8KmjWLg74cLcvLvj7nVimCFHLDCotAb4ZgaRtr65qL6igDi8bKAQeKvoABUaVGuE76oo",
  "key35": "3q3usB3SBCoh6FKw8RkrhUPz91gRbMJbSq7WNgDLdYuntNsrHuYwAFsG42zy3DRWn2FLiB2vmaoxrqcMzH6uH9tG",
  "key36": "4w2EwgMkfTK1T9GQiyD7vXv8jCLDMnNt4n4EkRu42pHD9WXRkapcLe1SggNsGRLGjWjjhgBVttsKVj1CZwH2JUa6",
  "key37": "3xEhNk8tKb5bEvSbTeshJXqvK7p4EkS5TEBoKJMMiZRdyVYCnXiALSqBjH9KKbmzWFCXDVYaoW8ffHXZ6sth6989",
  "key38": "3gKJ2WFXp2pEV55fshv3THoiFRiom983pEsYeShCmBRaVPoT9PACWKF7BG6ayRZTMBwGzQ32USD5v2M4BFAioxMk",
  "key39": "4DGMFPYvHpKYhDEpd2RYho2jw26BdMohWfeiBj6HzfxWUGJrSspFwtLcBr1a3TwopGKZoM9ZAkps2XWEgnHQXGQr",
  "key40": "4kvHt1U3Fs7dDW5nuRu46LjFad47c4gb8FNZv1Ldr1Na8Dy8B1S7n6rdANXZ1xTxnNerxmdmv3orgsLBiQuZi5o7"
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
