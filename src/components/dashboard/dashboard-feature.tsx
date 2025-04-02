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
    "4NqzgJwPqicBYfGNt4fCvpS4NEQKdZUPaHekBmesPmiK4KkZys8Bg6aTC3Pab8xRxtLTFrF1GzDUTXDyrGAnJzcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MWkY5Jdqo6wDLh2UPk5h6f7ofSc1XEa2EwvQKGvDe2tk8VjG4hrYhX4R7AywkpTqNauezneFyPW3VDuxVqpGEko",
  "key1": "5PmGGBfN3XP99vxPY6Vs5DbyJxufBhvnFio6HUDjbaoSvJT1YgM9sJbPYy1G4vvNjjirqESuENmU8VZuDA2Drpgr",
  "key2": "HTjyZpd5jaErJnkP1yjiwffiJ4cjJT75i8iEShxDh9S9C2D9kf2VTFAxhh8VRthFAKU761WGAUwf427GLFFJXbM",
  "key3": "55NAEdEqxsDSGwSg4jeaxtb1utoekgmtvHqPxXNrDqupE5Mxq3beFk1Di8vTRfmYAy3PdqsMPrBcZpRGYCj9r4B7",
  "key4": "5SovT29nYPSjDGy7ERiKJFkoYkNcKNerbNREDuWTH9mapGJurptSasjLGFo8tbtFJ6kg4Yj53nzZZcxxLp521xMb",
  "key5": "3rTGV5BHuEBe9SPAGrNiM9am3K5QXqtZ3SP8d1Gm8X25Dt16D2UAfFvuVqmierHJc3PdPz1mNtwqnFu6o95CPgmW",
  "key6": "4C7JhAVZxrcR97XpejhQzy6QJPPmv9mRSYmBD9LGuEWQrESecP1kutXRXvBVQCgsnEUiuBPQrppDS3PngW5t9WSG",
  "key7": "5BUyVqbWRdmBGwFi9nT75hELKyZ7KR5KPngK1zGR8YAjYy8JgY4TJYYzxkT8xMLUnJ9dNQPoXESUeccimLuhJvUT",
  "key8": "5VePzUHeZSrAr25Kzf7jBJbRPZeJ9ZW2QT6yB3UNkaeYTTZtUa1upiVcFnMEfwtdK7wjmWmsruSf2V8wzkv8CAY2",
  "key9": "3t2ysD8ZT3pxEw1Kc886Nbk9mjq1swZp8hBAV5uw2zDc73xrBhHeTxmjpAdzvwBDFXhFVbm3tv1n3J7XvxFn4Bw3",
  "key10": "4Ehj1rFm2mhXLTk1KaKiCHuGR2v5sWTcyVFcZHtbqgRdc3Sc7XXQD3ePPsMVU1phNgXBogWaQdPZgj6Zufui3rP9",
  "key11": "5eoSyMD9sqvqugBJA4VhimPdmXmWx7iNqya7Qr1Z2ujYWKpNHvQkA8qU8TQ1y3hmXCJwHgixoxnNFHAYnRhoWt62",
  "key12": "33KeSJ9XoqSTKDE4sv18qofXboC9Wx4Zd5PMrT7NAWF7gi2nhFduXLn6JdFdSR5xsY31CQmcWSrJRYjzXNw8EYYh",
  "key13": "5CYKDm1fMmGMpECqCSwrSXQK8npfP9JCcR3gD6xF3fLcqY1ckSFuwMgCoqxWtEk3F14sqq6CYAjTtFv1XGhpjxZV",
  "key14": "RWnL9Lh8TfS22SMhdEvzCvQGmLEgdFgvV59NCr7ZPh9rwwGcy6MsGhfSrmgSJWGBWeGBCt5AKVW7ZKuBEtonvz7",
  "key15": "5q42kj7bGN5jLrwtB1aPFqLZUyXk8KhvsTQsBuaFNgqPrCRS5wyKY97fYggxEna2JHX6yXh2b3aL4AhN73H2NUT9",
  "key16": "2A4La34MYzcBzAZA6jYfgAABNqwu9Ymu9xanGctBKWt4j4ox3hxwHqxfbx7duKTHz8FVU9CQqJdkNMKQoDN9fDoj",
  "key17": "5KwHLcgNUqUoMSgKL5bezCKV8XidkGpohNNMJYqY1cYckjEFQBMMugFdFBSpWCFsS7WAnDwWyRd2cuL8mok3tuLh",
  "key18": "1e71bJnBMqSfYvayqebFygVu3fXH1tTUeo3dmFkuF1w6eGQtMjMwgSKbBtgJeprtahHrYezz5tq57geUvKHxLvC",
  "key19": "5DwveGpy6Xw2btB9tqp36Hv2MUUk18Y6KZYdNe8piC6vcJbZBKFK9eWEF7UDc4QgWVedpg2GbvBb6EATFyQxwszh",
  "key20": "2rW9CZzvf8pXoR6ZAHgDoiF2YekBoTTKHEvhSgf2YnrjYiLPGqZJXAU5ZnL3mA2BLz6EeMe5nsrDFGMKyw9Jj3wh",
  "key21": "22C2VmhwmftaAWs6e4xagy522caFHieaxfWYc82ueJybmJTXCyDx6AX5riRKUn3E3VGkJfpGdrWH6rPURzYSczQ3",
  "key22": "3qixKvcxBYAqyRdrVqoR9Bf9MdKtmhcdNJaxsBFNHanitN9zUyqyNkTvyXidydpVusaMDPJorhRZi7YBKFhLMsJF",
  "key23": "bafFcXXjw1Ewk8T87KkysztNw13zfKhDvsSHtYEQCqjksDjTsyzkWYij7Vhgac99GDUtTWUC3VmSjpTSUQKdA4y",
  "key24": "2H1WzeQmfT8HvKTHyzbqBz8XncCUXGLBZ8CVMbbb5dn4GsgrGAGg4pKbPLQ9AY9dscW375oj9vLWMwKz2zypcZZk",
  "key25": "3FmomMARC3h2wuE4PnLX18bXy5ACYHMLAPNGn7Lk4UPUwfGDpYYWkDcN7wBwvrzxsezsDrF1qvypgDasf4yQqdov",
  "key26": "5ed1pf2YiTxCMtutf37dQ68o8KWHxTwzhnTKirA6eJjAA6jWJhF8JZHoE17mGH5QiUeiLQYNCq4FNn1Asn5X1ZV7",
  "key27": "5npBy66d29Hqs2R2eyBbZRBFKr3i3axMbtQWa2R4XEnm9NuvJ385ALNtX7QJxtNxbgMpF1cEuxEh91gKfxEdV4tc"
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
