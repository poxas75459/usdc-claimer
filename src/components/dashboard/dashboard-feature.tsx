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
    "51AhB7SHkuGXMVTfYGZppCsptrHDdeCRm1dGBVAGkyZQVDVQqfQGvacWQ2XFEnZLr98Gc5xtWGvGXVmBtqTnP2Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5VKivz7gvUhLuWVmhyngEWPSdhLTeu6d4jfTb5rZepjBZ3aQb4id73dRGHokbFBi1yHNoBKKGTygqfT7XACPJK",
  "key1": "4xsnuBspGymq2suhbXALdg1WGCnm4SwyCwoV4oAqzGiS9bxnHtAiR4Mx3HsckdYJ8HPy5pHymehyJZuBCZNtuoJy",
  "key2": "2aUmeBe5koCp9Xg22G4ijhdEPfsGampjQTMfhkQmCuvsKHx6spF9mRPC5y4b2nhcAqnNi9AA72hgm5wAY7rkMXyp",
  "key3": "2fGqcU2XDGymwng5bbWcCBPPfn7e95cXicwFBd9rUqcUdsqzb3FaoPPLdEAMRa4gXU5SRNLYWsDQztZ7A7krb1Mt",
  "key4": "fBYAPEnGj83ptR52vCkB4Hy6ha2RVVCVySX1Rw6ivEcn14cij9oQzHkv5m5dkHYVaDo8Ju1Rhct5rcCXQofhj6C",
  "key5": "4UxH7t5Y19gWUhSddFoAwrwBfVfuVUFQ9LReFUEVYbiaFtPwCNdFa7Ed4omcStCc4aCnxWgigNm6rGTtfEevWQfv",
  "key6": "3JLoUYgu26ieUMS2vgZ7rCzuU7hrfencpikCPoDXREamBXQbVJvPVbBF2Y4XkVPsYusmECxRyRSQQWzXiLbipMWE",
  "key7": "2zreXV9Ld8U12xbcgNNytfG1NxdVESP7mauudnR4tvzYCXkiM5SNZ9vmD4cZyQQyKu8oRNuvLxnsqyNZZfehMZfw",
  "key8": "4yC2w2ToeyLCwXwJ49eAhXedV986NPDWGz38rDt2wskSkqUdVxfj5zZ1sMnWLuWyuHTbmh2BvqcLeSMbwdjFYomU",
  "key9": "uggqWh4EK3if79YQN8U6JB2kvdoq5wYNQoXX2QqvLFbGX8YeWsWKEE3mPpFuTSKaHjAamd17Nb75hARFCf9Cpj8",
  "key10": "27bNuZkQ24rxWBvyym8cGY4ecrpUED2am3BS6WyZ3YqRwWYvBpL5CDT3hTCALBvqYUXiFEjSgFQQJsybjNqtRufP",
  "key11": "5fM1gKKFFucSGfeeGEwDyS4yHgH8xTFfK26mwzs2bMkoRHr8cyyhTgH2NMfd2Sp6DZgaZnWjtstxR3rLsrnadSF",
  "key12": "25wsznLLe1MzWXUic5PkpC5jkejk9ex991JBTT5qEF8ZLgm96BZvtShSf6kkbRmZJbK8gA6Ep6678gwjGyXJESvv",
  "key13": "4CqY2Xao6f55SYbqquXrJN42Qx5z513un6b64Pt81dZYh9GM95ST7Jo2GSppL3rMb4F9EUZSeeCqaHnbGa6jjeKa",
  "key14": "4QaQyazqiWRRDQ14vGPbHw7aHkmipSqqwd9FRHYNFjUun5GVUVz8RrbGcXvqAgjnUc1NA4jWF4xpw1Ej1iEP8b6w",
  "key15": "mTX3URsUktmiLfMkWEk5S485oRfzNfdHAxMTTHhxaDVNdpt2bW1Zm3oNXhHGkppKzoEMscpV4vnDM1BwGB3Gbtv",
  "key16": "5JD5tBsBaB56xCZB9T13u15v71WpRG2wLYRALH2hceLWPQGotafh7Xxvwj9KkrK5FmSjQ4jjJ2FSGd94u1eA3LaA",
  "key17": "zv6M6tAiPeczMnw2UfCtP5CkNB4pjssT6M9f2GZ3azKFzri76GnEWisLoaXwD6ZeshzER8L4jcWFXVs48bnUkoC",
  "key18": "57fxVm44knBkGtzDwq7pZDY6ExERtewb4CiTxLYYtPBcVeckCSCpuVqpU3ZLpjqSPmZBR39rQutP2AuH6QVBrABz",
  "key19": "5cMNMQjMgRd3SyH7pSXTb9v9NbHiqfwQ9GpW78AuYbtPFZDu5gQ2aB2py1ndjd9Ws5XBKNnNZUiDbZJEYRRxafRS",
  "key20": "5vZkVnfGa6ENAxWcG2kWGNNDQZDoYKFnC2hehXz8KZL7L86XWGKgDX6Cj2TN5hmRsBXAefncBjg7ukjJBWDS916y",
  "key21": "4pJHmR57uyXYX7ZNHP4FJNrGFqnwumgx3kh9Y8qf5QwNQjEe4naEcWQrPqQh8GUgpbaRzNoiH5h5D7SetbRuUU6h",
  "key22": "6fLXi7p2KVYd1kJEmXdvLB3f7eBU32M1FjEyB1phu12eqhEnmsRN9ynZhFEGoe8Br2TuGmWbb1quwddQMpYtSUn",
  "key23": "5o4VgGt9w2agkEr9T3EJLxjRkAXT93K6VyU4kZ4B6PMKmMidGQt1YfqF15YA5BpGmr5iMEgvAm1mVEnFe5D8gSCw",
  "key24": "4FUiGQqnJ45YtJNCCvaafKBoDjJs1zhRkaVbnhNJtCUBTsziLWLXffYoWSqzDvWHsvBBjqrhry83N46EJSRBWqvp",
  "key25": "4DaBeupnXN2xBUmibirvsAUqzj78AzL5nmTPX2BmPqjk7Y69Buw6NdnqcGy9XStBrFoAV1pJubLbFyp7SmZx1ksW",
  "key26": "5f6Dkzkg1UaQuQ3xLUZszk8GBLNf6znRHf41V4KCSehv7zxksbFEfw3VHRfHsS7nRLgxbdR6zRsRkPfFCNTJqB5Q",
  "key27": "2tRsZcE1CQsgLvF8hHENiqWYTitqn6TtzLL4fHQtt1svh5ZfWSrnDLtzTNW1MkZxdCnN5RDgw7mp4wRaofjUH8Cw",
  "key28": "5ZWr3cvHzPr3A8FneNsqnXbKjZo4Fgi31TQe9Pwis2X7PhdyfD9rJ6Q8gcHf2qqWpkNfPfH4PEBQ63hCYCVCanNV",
  "key29": "2ivGGhNamqfDmo9qq9914S8irqcvCEaa4iVnGpV4h6ooz3gPbrJxthFWadconwXLiVCSF6KuQUYGzXXmYwPVS23k",
  "key30": "3QTezK4Y2VQjEv5irSYomwj4tn7Sx7rRwk3bkNpi4AZDmVBUofZH12z8HtjW6K6WwAWtcxb6beuP7dUWttDThbQe",
  "key31": "5T71NyakM59YKmomM2ZKBZhdXCVDU1GsaG6NDq5Ex9PNJXpuWDuLawu3buBZhe8KKm4R8z4nYoE7BFm4eLc1HjwM",
  "key32": "5yhJLGLPxXnK9Rt1vzzCQCAteuALd2dGeSftnvCEjWedQxE1wTQhUANSDCnxPBvmnATkQ8f5CaTRMB5LPp2zvkMK",
  "key33": "5VVijxs26jjZ2A9KNxgdQ3trhyR6wjrs5JhpRUZfr4WUszPapb1ThKhL3cVuQKf9J4Wic3J6oBrfzeahrrcXqfHp",
  "key34": "4kULbMz9WcrbpArxJy3dc8R9RAFqeCucQ9G7py8DzSCEw6WecX5Vfc2phuZixXZjvX5AuqmQWpV198pZuoHDiGFK",
  "key35": "3YngaZFFTVpCPXcpGnK3fVAbotadp6tXfx4C7pYqYzv3MLnmpVz5b1XoASE6BejmmiWQcNhYxFmbDFas5XXY7Mub"
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
