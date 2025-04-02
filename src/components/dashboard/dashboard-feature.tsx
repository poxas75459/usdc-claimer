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
    "4aPWHWKYDfwQxoYxKq56nwCCsZkqTRxAZ9qbAgb3bAk7vHb4XERC6j63vxKCAGQytZEJmvBUY7qEFNNrF7TzgCPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6LhFt2LN1de3oXf3Sg8h32o8Tms11poyEiNWaycr1Lm9KM7pfiLjdZVFuyfwixfCA52TQk52zfesMEjSE7hQnb",
  "key1": "2hgJMonmTHhdGtKstxrFu4EN4wPS9Eqsc9F8m4UxisWkeYUN7SkqnZgknzQiG6dB73BBGAztTqVjBe5onq5ULTdM",
  "key2": "2DWvLcop62gy86iynf4jtKZ87mKYcNSqFova47rdcEkiFJos94GcyMCqUaH4jBDKAtrcjTwrt2kjwkESebpfQsFV",
  "key3": "5KE5wFK8avsAvJGHjg2BjUYxcvzP34bVz4n3McCmNQSNZE1gWKLXpDgLsw6mVqJyH6JcDmKM6KFKuN9NyFiHRY6t",
  "key4": "5BRbpKwh8ue536yEGNcrt93azYF4UztDXEusZNv6LaQUYVwuKqdQwDkpxq2cMVuYcHcXGQm1M9LmmTRWM1QVvKhn",
  "key5": "un3Gpw8G12ymASeEg3vEewprswFbscb2mZDWVsmptnbaj1cxtEcYs8HG3LToiCbpzwd2J2HhCgDTSDWw892pygB",
  "key6": "3kR1KCL24Nv6GXhBpDUbjiHFoXbcQZ1dEbG4hWoSBELkyEoqUKx9BGAA8XTm8Stan8K9dZRbzv52jg1jYupXska5",
  "key7": "67j8wRaVXMYT1Hw3LokPXFUwnPKWa4NCzS3yqA6hVj2myWiHgfz8PVYxoMHW5eV3ai6Gt5B6W6GwEPtExuDkvs3c",
  "key8": "31HpPwRLawYjWt6asdh4RrGnhH9bjassyB8SZVTCVwaQfp6Pjm4XKH7vYLXaNBxto4wGLyZz4oU5oRsDPovfEpcB",
  "key9": "5YRshUpAdKeQkwML2MsNTLXrdQr8wahBQLDq2FBHpDUMc4XyNSHg9PcFSJ7mRzL9yjcU7QGHXT4mNQPpLAYa9Tjv",
  "key10": "3XJa9Jksw7UCgrSQx9x4GSZhzvmsb34oRTRUdGBpxFPkaZ7sj2vYh1Ghuz7uPRCuKKNdxNKBVTAyopExXb94D5H5",
  "key11": "2VQ5aFgmgsXyohrKgdj2L91cyP7j5rwADQnS2j6SaVhtoQqdCZCwKp8fJXJGiS2UiTchcVxcoD9Mev9NW92SVSzZ",
  "key12": "5wbm2ets23fweAmAcu86pb6y9ckusiq8UTZ2BhshKyEGpvb9YtJuYeBdsWSQDfs3hvjP9jsVnGpvhWXVB7N2cBbd",
  "key13": "5NmGRHirBdSHEmhdhGEucjc2JcT53KGpaUq8VSLcHMzo3Fmkx8ovijkMTmNwFuqmnqS82S18m2QMexUtPUDan3i9",
  "key14": "5zVKygXgU5yEJir2soxFqfvcJH7GESaShb8sMKqp5htJVmVyGZefoCsBfVAE8BTHQML7RZzPcc69aH7xhM68wgip",
  "key15": "3QxJ7Z3SpzUgfgGN5fr2ezDAQ9mHKBVq8gR1yZ5gctkKaU395a5vACZMjReGsyX5XzH4d5wxp4zB4Dmit1pSUQqY",
  "key16": "3Jtbd93teuWYKSsUQnUfNwWzx5ZT7h3YARyQ63vejHZKK4vdqfX9SxwbrwBqfmFs5ozRJ8nnSjeCzrybvXR6LRKM",
  "key17": "2XCok4oGqQFz2oP5ndZhaGy3Ma3TYToppwSNeJw9wJeBQFiitm1xkbARqPAYvq39ndrxoNTL9yKmUUs49Kica1Kx",
  "key18": "5UcQ3WW2vEbgPdMDax1VT8Y4SAJ3SUUAbUfni6yQjYUm1DPfjcyJLYFEoCEXaxCk9GFGbXcNVqz6yLMq1wQYr3ok",
  "key19": "3zE9W4AXoaAts7fBJGGwCXDVAC7mxiBPQJq9BaAdsXbsZDUhY3zVjYyVu46PBAe5BvUKVUUCGUWs2b8ZnHCMm4vu",
  "key20": "3q4ZitF4pXnMcSBBoBxz5ny7XS2C4qJQFjkxAUoGuAGJiWAgV2jfQYz9pYEMFBJmwwp5KGZGHpUBcZa9NJYJ1EMp",
  "key21": "3t4GCA78crGbhV99UaXhW68x8nfFa9sVeTGfKLsxTzue7egNHN1mbmnsmqCWiPSVQRcWxGhz2QCZYAwCU9jCC5Gy",
  "key22": "4sWjmqmqRdLFJu8xycpMds7vCtCvxTfZ4zt8bp14WYQPf2e4H2of5edZbcRs5VXHmYvSLKhXJwnc8hcHXkKszGsh",
  "key23": "2j2doUg18ZyPvSfxDXnPKF2sjCPP2ECeFraw5Yo8t2FXXvG7mzfcTGJGb2YuSVdHjKRS1UDkpP1UPeXWbab9Pd6H",
  "key24": "4VHmewS3wmQ4Ep2ovJv2udqEQn5k7LJqPdEo9zT1Lbyi4vnYySV6aQZYpCKVShtAjorNHMRH4mrv8y5RoVZqq6r2",
  "key25": "31eUZ759HkDsdpZKRpSHX4fPBPLNw2GyB37azm5Ao9UhF4pNbYZfjy5KUw1o2G1gR47J6MceUXFjn4H5cRcx5ASa",
  "key26": "5AYbpnvhATomK9xepXHn1kTL9kpEQeEmK45RTYCvDpbkUVzp1jGNcAYkk8E26RJoJyw7XJ4PZJUmqagq81bc5NgY",
  "key27": "4mjwbareLrpGV5VnhGnTgij6WZzHp38FoX3cQ9pZ7YN3ZzfXzn4WhMCNCQoSyvn6oeybBsQKocEUCj2n86xDxaed",
  "key28": "4fagU5nGtZVJ3s6AbSNveKN8FevD5k71VcM7A14CCjaznERwPkPRyEuAmLFtCGBUuBszbfR99XCEwr89982UTZ7w",
  "key29": "3CLUbDyxdN8ug4Yj4vpJNRc6GKebxnDzcs7qBKy5yDEBgWXjgkoVFrVjH1oBzPWRKWs2ZX8pXzHHSs7gvCP6pdj9",
  "key30": "5WjKk9vzFQzi6okT1b76kXbLH9gjreu92vrW77VbbUB1mBUWoWySLbRKoaT57YCrnhPAJxkNAwWWtXzjE5WHshdP",
  "key31": "WdUwub7VnpwvhEZsUHgrjFHtFg5qXJf2Pr25QWGfjF42CHfsp8d6z729ncSBPZvmBYNH6LagLHUyDoLBKAX6q6S",
  "key32": "4zz7uYicDzxqtz1Td13PBh5wevxVA3YGacLQTbMHSs1HdNoKAq2mMvvWH4nMufUqbNDyK2rP7yYa7Az7TJdfHztc",
  "key33": "4675D7uweYWdR9T89wnu7nWMb3y3BnXuHupQ394QZhnPY5vyjUXPEfvAGcShRf6G4yt8jf8BtVsXPyoYDmUpjBox",
  "key34": "4TzbSoLaUcmfHqU3CRauXdDgKcfo8Ze3M9xjmQVdcrDzyo11Zo44rABCnd2iiLWoAU7TWZUMhMLscLnbGpUUxQo1",
  "key35": "5soVts5JiZ2vp3K3Ds3yoTdHwtBBLvvjZXLg9jkNcuFcHKFbCfWZ7WQkKnoUM7fE1B9wfSsZZNNnBNQrqv6ZPtc7",
  "key36": "pL3Z9nLM2NTf7HGXGBq3wevuXTiZUD7BNGYJE4CsN8J1z2SjKXsbYGXPHN7Tuv4pahBB4qsPbe5RxN6WyE9v2Yc",
  "key37": "3WKiUM482h92Qeuab1Az3opoBwkEUnWSFFndrfsrwm2Bqqq2aytZdqg49bWhq8Ua1GcAgEngwPQy1tnvsM9ACe5W",
  "key38": "44fubb5uYAnFsLb1MXcDou9DDBfgMAeW6rhLswQEXicX8uiRDFz3dzRW5YS2sePCnzszKbW9P6gt2SQsYEG1szYP",
  "key39": "59CqkbosJtRa1a2BZHyqgHV7oS8i4SdGxJ6UHh3e65RDBzeKkVBjMrM3MGfrBWCByTBBBaeCvJUHF9iRPqJczaDp",
  "key40": "3FKaWD2CA1xo7svinaqhYLfMi4yPjtXKdoArPN8jkRJHrZKbaJCBKVPEpQPDGSzDCJ6tx37yj3G4x22yCAYjdsec"
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
