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
    "3ED5YebzSjpaeqbrjjSxWe9tVgAGcfK3Jd2bSCKvs3PB7y6jHFC6JtXnxVEX1sWF28gRLewqSaW97zS49YHHeXmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5kbwoWJzr32kDyDAH1Y5kvT7H27M6hnJPhsJjVvY2HBuoYoQtwYjpgZT5VTFLB1q8xLZEZBYXVT4QC9remeri7",
  "key1": "3AsAMsi1cnW4JDwvEfdfpuyGFTUGRXJixfBzUGeNKB648duLag9At271XKYzX8wZ4BzcQxGv3NPzMb3pC66AzfQ5",
  "key2": "AyRmjzCTMAgQYnKG797m5e2MncM8ueDb7u6rjUmr2gsNph3hT9drdAL3cCRoqNTA8VCeED5fewQgCAVLwLUmnuf",
  "key3": "27ukJBJjMWHLCViwz4vKuNrgm5zgvDuVq7wjdRjk5sc1voNfZgixyFpgR6Zo3qKT3n8QvSDaLbHghWwyrYPF2WbP",
  "key4": "5VZKVsKe6NvRXZ1StNNbMFmPABwKrcWzm37AFVg8NFP4oFd92F4rNTiyxGWbyvxqNiN9SXBBg6mFwPeTxi6h3gXi",
  "key5": "2xRaTgYsUCToA6gYpxRGHY9mHbd5PybBx9kGNEwzMB39ZaFHL2mHo9TLwDvYytetneVBwUarsB8SVeH56cPASxrx",
  "key6": "4HPKw5AHFihiwECRPMjPkGDsVaEW7yNZDrsWnSj1iySTJPcqaHaHGfdRJa4GL2Wsz2Mfr7Qt8Yg3dvz9wDiBUDCD",
  "key7": "3dghZPPntdKSfvipGjAkQ9xHPy4nU4d6GuAa5nfSZvGSz6WrTttadWGQ7ZEeioG99t464mJQ74H2N4DYKRAAGTuR",
  "key8": "3MPkkf1iHHSBq9sY2vND1hN6FVTKhDTqandyaVtWq7rXwcjy4yYtxRqxX4rnxjz4uZk22fduNFKYUGvcsqhDYWcc",
  "key9": "72SbdjgeaiuFkBspiKocUsuKZJM3HEcqeoVhMtHvcoKifbvYNmdhZb1P1YxX6qapc5cW7C28FBxNxBfcn6PEmde",
  "key10": "3NrxTCfS7xiLrMTBN6462VJ6WW4qvmro6YCUzWk7H1dWPAziHHE16dRLUx8xbBKpa37CQyTuoFDJYDjJqEGwiSTV",
  "key11": "4HxahtpTpnkXAS3MD173uoapVWN7bLFz21s54MvRwm42fhpfMQ6SfnaeFq15FnoKXbNzbEXja1vQH1gsdDBnpLdU",
  "key12": "2qYUcv7xAttqy19UkAzMfK4zHGnZ8nVHxYMASmaQ7YasLS2M28TkHPwtR77HLM1Hz2tYHwHcTDfyRZ6pVujeKAjf",
  "key13": "4NKYLgKxcwo6eFUAg6d7gvYjg1bVQeNzKSddTMXq7AADGQ8fuDhwHX948NogJfaFn8PJhTyPu8L5pCAdqx4FX1DW",
  "key14": "GwjdD9SKZjbQ7RYE11y6XRubmZcpDpc768qximWQDJsMp9cGMcX2X7Mo363ddEEFQHCgueLputEtPYRexhBo3qU",
  "key15": "642xeA8XUdybg4wvZEjanM3xUTGQ7YpBGHT57TqX7s5aphE5JrL5T5E9MjwpSmDm6wh5HAARDc7Rty2GHdKmQRkN",
  "key16": "2uHM1cGPyLz4YAVFQkFRBEC7DzxjHb9WJULC6EnjezvEyp38U4wyb14b9H8cnjHqZrihk93CwstprPwJgtQ35wng",
  "key17": "3dd9DyXtTt1b1JoUyqosm82XsTjVZSZnRRG33pBADV8HUxcFYuiuc1s8pBSthSQSoDQxawVVCKD1oH81xKSbVVZN",
  "key18": "32MByDk64aJJzSfLsM5CeskRQCpbWEgv8YNqqUr6SqQ7CsmQL6RwRMqaGZva4GvZ7RZexXpg39ud181J7m9GErKz",
  "key19": "416SiZ6DBXeaYjpXSexuqGucKuxe3GkQiF9AS3S5sRBrcXEwEQt7fjscEf8oP8K9nwhFSgNTkGR7LSeQTFXTr3HN",
  "key20": "56Hra8ykRXzjL56RHGHfMvpKfpQm3GHiMM6iak5MVVzeFQhu9hFQhf9XQhuWoh22tuzofaSCHfYvUhhs9rKp8cui",
  "key21": "gDwMqXYoDXwcB4J5BWpeJvUGfySL2qYRgYjagihuMBeCmvpLJJMAczVcRRzzqrUVteTfW5J4Wd86V8vLgpp17As",
  "key22": "4FdQd5ttKppwkGd1KuDedYVxbC5wZqcuAKn4kSsiPRjoVMJ8kq5ihT6xEGwiSDSwAUU1KcRVxLtjm6yh5LVMbAKv",
  "key23": "uFF1LbQYKJpZMdw6sciLDc4T4WPQc3yoCkyU627Fud1upgLDaV8YuyhvFtHKcK6rRFVLjMqYFJ8wBNGvKqqXR1o",
  "key24": "2iYMAL9AMF95zAg9XNG8iHbgcMuaX5T9m9c6XBv9pf4SK5chF2qCbxUx72j9ouaGafEtKkekMRrKX5uAhmb1LXY5",
  "key25": "5JF3asnBTmoJFbCKHC3HmNtGih5x88yv1c15yhY7qAbTRhQK31a2gg4UbuXBKjkQEhqNVSJaB4H3j2EmyKumPNP5",
  "key26": "46aAntQkBWrNdwqt1GVgeE5dp6baze9YSNx24tTBcQuMEypgSfuxBhSkBm96d9SqajvsMPC5vqYsuEeGe5mF3Rrg",
  "key27": "4qoTbq1iGW9SjuoxiKErnLtQkfpxECm29nP9riTEvyS6eqqFohe6iwV1QpnM29GzP7B7DFWa9yap532qrp8bKCv3",
  "key28": "4YY3eRMiH1U6oTYzQreBi3ucjRbXBMtkUXLDF8PqtseKDK6WgCVk8uNEz68aaGM4MnRVgKN85J7JN3sGZhVKWjSC",
  "key29": "2vwpmsT4Pkci3DMWXyFBCoNayAVQnernkdTd4BcvidXr8WTKEtACvxaGin2S87v2qcwhvYu8UShuoHqFVTna1ZGn",
  "key30": "2TVSHbnX5PmZrz4HTpoWXQaeNyhmujsVpPUqBwarjZAWtw1Sqo4asvxEw1GXVxBHFoTTUCDXn4QR9XAprw4Ssywt"
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
