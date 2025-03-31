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
    "41WoZuSSSpKuQR39k8VgUrpukD3nL6Mx4J55uZWyQ6Ekz94jmw6CnTHnDv4HS3cmHzfArLPc9zJ6TgwANDVcQdMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5WqQAKvazsFC7xWYZiTghWpjA5jE4ACejwf1HiEsowuEsjFzXGgFxwqwWgESxBigYZEeaVtT8gFN1uogXB5JgE",
  "key1": "2eWgtFguUQqcbaYjbVbJqkdQUwDUZnsREWuxyTBM16tGH6qvtNXrLcCF2WsoRS11CqdTjn4sakCXDpVGXSoPY7Ys",
  "key2": "5Zd4oo3FQ6ic9R6pd1CMcTFVRxE66HW2wtqDcTwe4JyfbrcYPDZAgVwWZFDCiZTzBKkPP2KGXPQvq3eYPXSTH2hP",
  "key3": "5fbiVGVfQU8twmNueTzpcD39u14ATVej9FtsXRwx7ELc22YMVerfaRWXjWAj65FoKdRX1ksSxKFXvtgzqfHhLjz8",
  "key4": "3Xufxuzh9Cm11chC2GYyKUYEQjSdfyucZFnCZZ6TrfEX1Y9LPBDAejS1woKcBtbr2EhBN9XEjE5bB2KTdnohRbB3",
  "key5": "3Cy1yA33CBKfy6dyeKtUyXCUnMDZFzvhNRRb9h3wBu5UBE3QDk5XgYLzQbALEQgbMFFTeZL53LgP28iDiAh1imij",
  "key6": "3vQjfkwjDvPEuZYyg6NKiK4xYbcqziZEV1uXpsLNAmBDGoce24JesywsD7zJVuKKMTaDjw5qwhVSw1gw89t5KB47",
  "key7": "AeTAbYc8FiVYSXXfJWWjf2mwF5RaYfwtsf4QJCWnsz99WWpkmpA2VmAbxo9Bx7xvC1sgSogAmUwpjrW82eubBYa",
  "key8": "4gRMuYPgNH62KfvhPK7eC9VXXnJxe46gcfRqexhRYmhPj8cWh2RtkdWV8HewDGGmT6GExjyV8C9qn1PqupUyYoDK",
  "key9": "45GJyPeHUQzrRR73ETtQmhnk4Fi3aNtA5QYQds9Z41xE1HwtUQmrVKxAjMsJd1wxHh98zATu9oDZxDZ8WffHMfAA",
  "key10": "HHXJe4U448RaXcZfUJKabuzwvHe1bCi5RVQeDY1fiaiNmzHWsh4RE5R1UweTxRHUJFMxSDuD1Gs594c8S9DPi33",
  "key11": "3dCLZUVfgbqubgv5zJNuanRFzRDaaEFNDoznp4HctQytqMgWyF1b3eHyNJb47ZoNzfNystzW1rnU9xrkQYTTZnMQ",
  "key12": "LncKiF9yer9U7jEpDc7D4gEvRKKtM7FZ11pxF5fthhCjBFMyTm4Qw5qNgqEfJKAYsWb9umTTUQqWXSfVZZUchLE",
  "key13": "4kzFVXn9RsAGNRBQqWrAiBxhysc9RE82Q4UrvvJbjhBEHTRDEnqD7ZY7amsmLFQYFJbA9TqcYsgcvo1yPp8r3yRf",
  "key14": "7oqa5eiMfchVsrDUwFoHgYAo32RoQXwJjFNksvCUiRHQGfHnoLUnnCd5KQZ7FCaZRLeS29UuAoPH5aCdtb5KhH4",
  "key15": "hFHJye6LYXdDUw6RFGUoePc3vFeabPg4ei8TC7ojucj3nYyVxhAcrptGSaBfANMUsLs6ZdSTpKuWs6nVNxoPWrt",
  "key16": "ThN4x4K1dbmaYRjxRjS4gQu7B37CTtNTMXmiAUgwan1KXCaLvoKj1SytGbfMsryAupEi8LPnoERR5spy7wqRuch",
  "key17": "2AGQvk9rzmpV22ahzYjyG5WbnW25dSGN5694JbTwFFDXL7gKDLVxC8vFD17iayrJtjbmnGeorfH49C4qmY7iLBM6",
  "key18": "3h7J7MWr6fvSzLSaAs92z8CHJ2n4t5hUAWEFk3xcWyRkxNFGx6FV2XerUugRJRZhEvs1Ez5MeDo9oM415anSFXdu",
  "key19": "5wj3ypLjwxcPJtyk3LNBLanhFokNRYFjQWQbUsYa65fsoNLjinsjokWLfkdRf5Zdyq9YAh6ziGyeVrLKyaMQLNKU",
  "key20": "5pktCcDorkEHJJbekrnQv5KG3NgLZMkH83qRcrCdxNJEkb8oRcSS8TyNJCgZhLStk486EraRb4ogzT9otcVz5zbz",
  "key21": "39Ba9kBuFRfZzzJ2E3n3m9Ensuh6ubvcthPrDQymb4qsEubfgUnsFCHCeyYfvmEvXfxaKyrqDnqGwvKXe5Nx3acC",
  "key22": "5pUWpbvpBb83yKZ2pwkgfjGgv9j3dhDszJEw5qo3tkNYMR43HQiPFv2dC1yxZG67BUKenyzceXXd2oqsDiUdRaAd",
  "key23": "2hV8vf59P6nCBLqLLPfFsWjv2UPuKMPu71PsWkeaXGMT9rqVEXvxaQNmvKm1tNuttqKU5mZo3s4u6YDCDZYCz1KD",
  "key24": "4SyCEzm5K7jithhAdMThL7Qxcdb27wyRS7hxa1927rFyBuRGpfS3tzgbYSeRfVpzi3uF4JyQKReWua6eC531WuYf",
  "key25": "5SRbtRHXYrEnoGnKqowyQUjMB4MMyALwURgZqmDdyUqWurT2i5ApWqTnLVMxJTxWNXV81bidqLFPBK28cbJPndQC",
  "key26": "3cgDZmayfaAdL2X5BaU4p7xgksTC1VckUX4Qo9HXzgg1DwW6q5HFj6iQ8V6xjwZs4FHBrVoxQRdzG9pr267yP2tD",
  "key27": "5vHCN8mtbEwnq9VEHDric3GTG57JM9DkEDmB3R9udRgiTEjpodRmB957xq1Pe5cE89bewX1AdfuinXiYeyLFfXxV",
  "key28": "2xCfbcJ3VcEqhaifwgVstf8vXhxTQknP4AnCQeDcKKAw75uQoF4N4FM4FiaFS2BcYS5ktTNNGKVDFdJx3SdEwHTX",
  "key29": "2zPVe9iL8aAqGD7YZTpouadhrCrrLpTkMBi4hwP5xwTgkJGmZtA6bpyjwHZsiUdcBWrb5FML6GVDfGou7xiqKK1V",
  "key30": "4y586YcM3KjDUd3j23EF1VyuoKGTNztwkgWnYNBytvS1aiU1qotoLwZhu9QXAEzfVNzbQkTN2sXuNpk8YeACNDko",
  "key31": "3AbMaHbmNRsjNWS8A4kSCHuRszYnWEirLdA1U5SHfsKBy7dVGQchfGzVD3VbrBx4jxb4jQcD3pdZURso5Fz5xQoj",
  "key32": "2GoapovTGUjXU3sCJaH7ngufmyuoqNdajEQxdLaVtgjEgVXM6Nf1kSmiqdWsXiuzN4GzqhXSRLQmViDRpq2nUQCW",
  "key33": "3CQKJUsDWKuwRyDCTErfQ5L4wRtDFf4eqsPaH3iTTqm7UtPC2QTLtJXa34U9Qo6CRTz7ipT4tdSKGGbH6kFANBUn",
  "key34": "2HfrJ2de3x9KaS5DGQ5TERVvZAuoTQGGgsbUe9UTyYExBYYDbFQJ5bsEe1CXZt2NB2qC56oSmTBzx8Eg35VSf8Vo",
  "key35": "4LpUntcmVhocUJZXv1V3S6zgGNoqPzhCTxshSaoqtkXRRjpe24cbHUj5qoi7Cjiz7wMCo31ZD6f5rYXS9atssbyZ",
  "key36": "3H68JcHyrUvkxUVhzrEmAP29WMWMn8ynYoWppREigbCsRDEhr7upRZDEN3zwGm8HccJRF1VTPLn2ADuXVYCZVC2G",
  "key37": "2KXibSCEP7DB73rRRA9yLrsbU8GiRKPqMiUUux8iYAC3CkmekfHrTbEoxH8uKmfN4HvvMxf4ii9aEPTdnjJVLuQQ"
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
