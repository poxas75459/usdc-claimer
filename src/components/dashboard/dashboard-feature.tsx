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
    "AwrUCqVzKF9Jqj1xjeRqV2SV3FguimX2E7v6CeF8EMQXMT3v1vCYffAmicVYkREiasAEog8CDHSwHeJ7e5AWxdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AykxpiQ9FwTaa1QmJfPui1gLeJQAJcXsxDPxQbxw8sqLhwgr7ZodZFQtaDTXR7fEK9TkQrxyUwocCapBc8HvGKc",
  "key1": "2drzy56FdeCewR2VTHBBUDKta3yvBfKA232tyaBnA2w4sLPoQLXV8vKt9ckEYC5UHxHBMUoEx7JqCyFsgKeNbpdd",
  "key2": "4Uav7QvbqNVzQSPXGVyGDwSdWKfYDXLyAg8T6e7MezWuEPWE2s8LfLE9XN8zoUYBCKo5Ze5jweESrL8DHhRW63Yw",
  "key3": "3RAMZKSMj1r8GS8FY9eaUa8deVFjywxcmunmMb5HR8tcbySjeNmM72aLYytPyz7FQfSeZdihx91hhvDCeCpWUoCs",
  "key4": "ftHFJqUexSK4ohthR8UuPQXNXivTQvGqsmcUaJjaXcyUH6E8PFureHUxFpqUSyQfZZwQjYcMazc7EBXizo7QHXe",
  "key5": "5E2viSr1v2aTKAhEk8qsYEC8HvDZUxuyJCA6Q87F2jMQBwq2EWbPcrP16F47xLwFsNnssS3DJoN6iLwbqu1yT22q",
  "key6": "4BCTMmxZBwvgSkGAPg5AoZzFzRQ5QseAoaf7snyL3hwLDQBU8ejFoNAa3wVR6wS3H1jL4UntZMtDyHdt3afv2rBw",
  "key7": "4is2Ws515wH219p8NyfwBx3ke4wzTrpsh7exGJMKGoSBV3sbm229p1MUmTz5W7iKmPMw3bHPvLEnrNE63PcomGW8",
  "key8": "3tskrXo6FVruipaJyNqP4kAi6x7qKookQSnCjd7EMpMd8pCU5pz19NMh5hABVGTM7wWZA7R7wxr2GXi5QNeGFSN9",
  "key9": "5BcNFYDScKuF7UjGDVfaHodm611mSWrMJVhsc6BQFsv27CDxQexETHZ1bmhEYnrhiyVLP49BYKtQWPSfiMW1zkFM",
  "key10": "5bwsqxeYJv4YxKAkxYAK8n4oYi94MbcVB9Hru5pGxn9Zh7TvpD1Rn9NfVHEbwxrDs67utiMF9egwytYWP1RBbswB",
  "key11": "5abB5M57WCbs8yh6twDhS1qhYZoZXaciPo2d7Dxcxm8kLapvoJjFXE6mSipybHka3fpoEhS76uSXJbXMFkQboZBy",
  "key12": "52w7nkS1iUkbTUTgHwJvYvCXDgF2eApd1qGTG3rmem9NaA6vN8aSFGiLvWT5u5uuzxa7uEA6qRYkQVW6Jm1HQ2Rm",
  "key13": "3PhdUgsJS7uZZptV5ibuUX4iPJGcxMdc92tWHs9oiP3s36giLCq7aznHUoZchRneB7cuApELpmpyaMqvh678jNXb",
  "key14": "4XRE1gnCYF8JZbM65RH8svSk4M1VHeLKxVdiykuAZwVHQNgjV8TnxtP5PzKwjoxd25qgrnjBQ7D87CpFrN8S2DU",
  "key15": "FyENZC4iZJZatQti8pDT9QfTSSBoabK76MWsU9to8gWYDxCpQwMHkHGBALdcGQhqivhhof1aKw4saQxVy14GM1M",
  "key16": "2KT5Lhvr7bcpJb1Y9hruzDfTT8oYzUmiZyXBBJ8dmncz59xZUpV6u14Ed73BCS4BZv55j85MzKTsV9qu7yx5j83j",
  "key17": "3kHWpbQUiyo5vavEe3joRqJ2wS7A7ig93jdJfRxvtRikqLwMNT9B21ks2kz7f6cEwMdJLv2YLYLwP7MQ6vRE1fE7",
  "key18": "MhBsAmoxtszrdjZe2owdwXX62iD6qqDvSuuH96DJbvwpt1MTkqBa9zeKLFGXzoGCQ1jYBHHxzKAcSVC7PR7WRDx",
  "key19": "4uhgCKaWsXvZf7fLEDRt4nX2EcVs9y4HCcvxX3soXFd78EpX3Cnmscr5DJFRraUCNGR8pb6fdWQmQ6aES96RkcTS",
  "key20": "37J129FpWjzGTyt4ee7ooqiofpZcvscuoS7SXGyjBByn8JjRwetvodCTvmQZmFwaDxQAXydcCoyfytjv3CGXLj4V",
  "key21": "3MjagCcc7TKMEy5Yib7tjcYcFC6SZeYiuWpMex4zsngu7sH6HccWF1VBZrxRPiohhEpdxfiLMJJHQTA7eNQVsvki",
  "key22": "3QdWyoD8mQoVfJn1U8kNz2Vj7EhDYqQb382BCsjFSwhjcW8SJ6bwSoyL8qJHQBB7msHiMAvriWoRTx8evHfJqkG",
  "key23": "8rZYe7B9YcCLCDmD2aCtA2EE3EDJND3yWsh59MWDXoorjCYvRCaZ3jT5cBP1cyApCVDbHSHoTD5E7S7wk9dh7ED",
  "key24": "43jXd1xn4JeCxebrFCRNNREHLdfCgyXgD6c4PkzBexghW6Hhk2uz6ZY5viAJat9iSdthquaHdTRcJB2sbjy2dGrr",
  "key25": "3dQMzneP92JrzjmPeRucM95KBfwDquzM6ZjsLwgWU6apVA1fd9p5wxPCHJADUwbUFQRRCv2oGhqvoCmAG4hAuT2Q",
  "key26": "2ZgvpdAPcaXstx8Sqb56ewbc4Rog2BSqRbWKXe6Pi3zaCswXPBrQQA7vqr8hnDBR9hErQXdpHBgWb9EX7fZhkAsc",
  "key27": "5gpmD2rGWidnmhXtpxLZBMwYJpMo2o55DoigxVi9hUH6iv4KDh4aFpavdUrGxhNaNpUUiPSF4PCnPxZKzn7fP1Bt",
  "key28": "3fesgpbaHhNEvFBgx6xTJG1kAZvLpaqoJg8sPWS6ij2k8FKxQhAxJcXkA6zuhfUxaS9AtsTBQr6y2PozjdrxLGTy"
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
