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
    "DLNuZf2JZJiHqoNXrW6b4Ade6EQW39aGxPtUE7b2aMCAeEgGt8GdBhZekn87Z1GVQMtGbbgkGpyndtSRVMoaPJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NR81yczu8ki1y5DZ8X5Uyop25oGs6PipwPSepo5n2HuHXigCqoENnBCHDEVu8Nk9A6gFpKG7SM7qFvKKwMa4Skd",
  "key1": "3WzVdPAg2ViWpbKGubUTzwNAaX7tDbj78rHqmE56me7L3xMmKDVrbtuSsLdzpX1kkgpz9r4JYL4W2gBeFQo5oGfM",
  "key2": "4Pi743hUehirXX8yUMas2CQFYdR25wsHuyD7jRG6d45PJ4x1WPWQiFJE46m4M7VNcZLbMm9XtQiALEUJkDJNaLnP",
  "key3": "5TZsUpmvb5EecFTRuANHVuzLkvrQdXW8an7dMhvo4FsSN6aoTVuYaQsphcBBCZ6viPWsh2m6S6mDKrK1knn7hALm",
  "key4": "3BauJ9yakxdxbcAhZAsWzQD64zvXZb6DvikXFB89QAzBNLr2vBGrYaorVW7fac6uEpqWSaivykTW2NTZeyCm6QXj",
  "key5": "34j1eDDsHmRDFzaqEzZUJtdgcGFw6AuiMMv2hUyUV62Ms2F3d3u7nLyWtj1TsC33bwMBkNHvErLE2zABWmyHBJNb",
  "key6": "47kyVSUngmKJ2UthLMccgYFMV24EGJmQ637hk16r5b6bqEMk4XV1RmvqjvpHaJaX8t1AcR2qRVuAPeeUw87kCHKq",
  "key7": "4nwpSoqkae1ymGxPYV6rBaYYHFfWzmCeDhugsyqeiQskd489VCESNUQGL5C71Uq3qVJj4hkFZCWPnV8zK4L4zyyQ",
  "key8": "5urDCbn5C4kvLsKGHkqy5LioyZkJgbNhXscDjWxqDiWXEkjfEUXbEw2vg6AJhXiqDw1Pt2u42uAGndjcmoKxHWRk",
  "key9": "A9AFA4vof1H9ABrrFhY4amoSNpZYdfRUJgdDt4Ky4QqYhWVocKtg7fE3LD7j6ZjaDSv1suUbDFMJoEDxjMwqw8o",
  "key10": "9sWAdU5SCXwMtkPBPnjUoj1mq4G8rVZEYM32yVtRke7QZxMdrycSPGCvfQnuqkVed55SaNWVds9Ka743SAFtKGi",
  "key11": "5gxiiZ7Tz3FJ9aoSk1rmPhwfDNnAAjskXnPVELVqLEN8A9U9kd7EdBFrj6BYnNxFPKZAHZA9T7kgNFmRmJBsJsWG",
  "key12": "2AdPqNan4NHZj6WTF3VNmv4uyDSo8gnaR1KzMz8xz283g5ztrg686ePKkzomS2VxsY5PTucMP6xJcM49PSZbo1w7",
  "key13": "3hsximhUEKAu6kFxw1vPvPNhLz7WWzBj1vnQGuKam9KxQsTUHsvoYkzM9uKfV3mXi3VS6KPqFqd9H3NiP7ALUTPj",
  "key14": "3MqxEQ75A5UgEkSGxxUe7WQE4Rhh57bc3WpX3DAvyEZASTtQiwtf7ZLhA6irdY6xT8yAB5VDwawL5fWQfUHTbvUn",
  "key15": "3hJm1ZxpPrhB2UVcbp4xgf1dnwpsgDXyF8GEvBCW2mdPCpciWPhMzHtbnajDUeKT7C56pksYzZrsJcKw9gejtVto",
  "key16": "4VwP4Gv2NXN47CicSrRQEbhEVJF89gpLBSXkhQgLsbKfnRJNMTxCewjDYcR2yoHG92Fmy4Z3zVtQfeBXNUYRiXs3",
  "key17": "3TsHzyspPbkACXLG4cGad1GiqgBKWHB83cnMCRuGTyfETBq1u6mPBkeoEoJkJtyNKayNQrrW4gaiVXweWWr1uTdq",
  "key18": "2wCFe3dNhyMsw339NV6XzY7ohiuZnjY3vk1BYNb76MGi6isQBTBDyepDnzgekbeLyZSbRSLKLzjvQgXe25AgT2iR",
  "key19": "2XGhcpYHgaJuVtDCM8PjU2c9C3c4t6w7k4tD19ivCxus8e2pdZmou3Y6f2m4JQ5zdVqqeSgWmyLGXSHo2JAY3Uko",
  "key20": "ySfNHTKzit6V3U15pmePzo6LyxPnEiXmzkkXXKv8D1h7Gu5b8kSMWM8Z31n2qZTQcsLdKrcoz1yhJmeoeey7isH",
  "key21": "2igafLLEQj6QLEsAN2BrseuA9a3VFtHjN7CSL7zsYduqfQXFkL96KSCt3CQSN6s8iV9Jyf49Wnf2AX7WmfFvREoQ",
  "key22": "4E8rxfpwNBouEFKi3NathPeuNRCb8GjXVe6LBMLJq4SzdXdsHqfpwAVb3ZJWUUydUT8hRvhMtwusPmrN7VXud7SZ",
  "key23": "cyAF3VnE9vD8kxRnw7B6fJqvC3FPwMPSeRqzF8ZcsAwdd2bcRxdtUEKmy9eihatKiSfqdhHQKrxE9HvKjrmr6qa",
  "key24": "De9mLXZjvPiJj1Vh8d4etzUdzjXftEG8drPhMFHxuEfZkMaVeGKCTcbREDrrwPZHjuupH2BeE2uTVja2tjn9Yw6",
  "key25": "5eBv8hcJhobda1et2qiUjUxNjRYrAARnka613QqiAE6eq2d4JxTpNazsoBEjECsRTWRARRPXHSWT8tLGXqa8ZVFi",
  "key26": "3eg7MJAW4eacTKqw7W7EpNWbVTw714yNRfKF8MhePaQvQQohdZrdj51LhyD77shLa7Cu14vkSdPtGbLkLdYYNLko",
  "key27": "DsHbgDsKQk5xrNcwhjhg1fLpNtLKBixoK4vStmEGJMMVnhxkLbPgnn4XXFMnrcwq3MZqNNCSSNevYyTeqf8HBpD",
  "key28": "3q9dYX3KxZzwzXqy64jm7ENJ6cBQ34Ac72a5yNdomrLxJAUUmW32dG7PqMPYJbUz8haLEWD52kEv9wyroX35o2YD",
  "key29": "27knsStWY3BYmL2F314FrxipQcJyAVpBgJN1RMswAxppL92YjwgYSSnYwegiSCwTkgpLV4TRrDi1nQdsTkz9bDWM",
  "key30": "2kQAzDX92R4XsoRiieSJwK6nAXPzEKDRRgi8PwuZBYfB7z6USDZr2onh2DVnEDCSDgw7AeRzWpysx5GmkguqtoXk",
  "key31": "yA3qrgjgJVxw1SDMQ8ifmjUyFfotQXt5wWcFsxoKLxLz5fV4GkEGTKzK3ySfT4N7hVA5Mv8hvFqs8hAbym4Rmtu",
  "key32": "3QxirQ6rFhwP2KENmgn1Wx7eoFAnNvi6T8kHnTjhmeJrGecLGBzCWHc1mQjAuigNS931UFPYS4eKbr4kUMXWn8u8",
  "key33": "3U5B8oZFC4bukAaLB8GzETCfxLmywcnLZGgTAsJFbjqhLCkNzmkVQT7rsLkiGyNaWFcJdD9eQR3HWqHPiWjfTg3D"
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
