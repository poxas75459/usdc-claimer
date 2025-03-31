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
    "3FK7NHAGWTxFf1LnbhmC3qvfq8q4vnSme9w5upDucn3fTYBNhPvFNPG25aHypugHogBhaiP75TV7RTx7aYEgdSbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UGQDb6jxsxrH4zt4PWkLnytJZHvpbm4LVJFCScvySuRgC7djJpYTkuL68WQeS3jJbQrfTGSv6sjdWBpaWc9SgMK",
  "key1": "5pMTc6W6LjvbKX2BRVi8EEoQmtypTB385GaiK6mNgMPW5RgpLbYTvJjw12e5xSjK6A7bTc7DoMN1MXHSyP9rWUQ1",
  "key2": "4uUG7URunnMreNR51RHV1pjCTsUpxeic4v7EXzQNJZECzEQwmeyFacSueBe8BmvEpaaZfSR5zqoTgvLK4o47SEfm",
  "key3": "228U8h7fAsTgHzRJyDnogy46bk4635YTjMuHsGm4pxuFty9qVyJ6q8LciN4w6JvwbAx6SZ83djGugQZp1guUfhuY",
  "key4": "NfQSfNJs7z8Tr8umZQQjj2CPHTGxVC7fu3qqse6wMTBsimo1zpLJi2gQigho9KWv3KY19J8wGPsRcWiGtWUFuwt",
  "key5": "4YAMWCB6pknEDbDJF3SH9VVX4dkjJQqwrDDcNU3BJdDk1iQqLW76yMofPNK7ta2zmtw1xAv3SV41cVdYL3PLS2DL",
  "key6": "ckBSbLPNQduVYa5iumFHExka9xVEcWZRFexe4yRmh2rHxAYYL4XWaXnHzEvqLQQrsdVADUHRK7zgfksZNUXLL4q",
  "key7": "5jJ3UJxE1BbTR7tvVrEjtkzRvomzXeZwdFCBgR4fWD9nf9fgNkXtQoW41keuHVH1Mrqt99b2tR8ZXR4oysBwHetw",
  "key8": "49N7fXXerfkF8HGhj9PRzasTX6yxivZ5nWEiKhRndosm35B4nTTPJuBEbX8W7wMXo4rSFXTPUULZ7q7GyMQfQGQ5",
  "key9": "4C598a1DeYtQZmVWVABPoM8e9A4UgrEdz4dgobb1ar87svTwDxH2XnbydsS3mzw7VqaEfrN2kPRwarokgVRm8wAt",
  "key10": "3u3cegEY6e9YYKv9zXpZjKBEJe5jdxWv5vKRVpRZARDNN1AqWZu8CTMgv3vGCtqwXMhG9YVQpUQ7kxVSk2PDcUG5",
  "key11": "3WDBYk3Lk6D8ZWugvwG7Dz7aYwSct3V9c8W8S2qUccWiJhbTRECrSL4Ycd5PjwLz1dm3WzNBQrUZSWPgZdDj9r15",
  "key12": "5zg67zxDK4ZubRbMuhkjhxn9mYX5nk5PDGDPKnTnv85cbUsavwZ6Jhz7fhTu1B4ERfpRbad3TB13QWjoro8S3qQu",
  "key13": "2gqiiqFw589jrXufCbgTbu5dnZWbCJzyfuBa9qBbkAxHDkuncC48VvaC11KeHudnN5BrdsNSbdLEfeEthC1SoiHB",
  "key14": "5FFsN4bXPJfNp41ceExsoaJYaoRML1KfgbW7Be7FJoYACwGCzkc69Kx3P2fEtUqyRugMPthZiPMBeGkUBciZKJW3",
  "key15": "24wUjKyrRtgc2D12qP5kHcztFhbLFtdnG4eqkyNSFHSKCj61EmQfJ3a1ZhQFUFiCMMP8qWSYyTboNHmBzV2qFkb9",
  "key16": "NYyRoJ9iPCrMYM9iDugALbSd7ZVAjgerY6bPtazt6P5Xua4TDr6tV163tQtdqzUzjjaCXPnDPVC5atAdNPnVQr2",
  "key17": "2vMzHTUMjUuqStNtELnkmHSuz1Qt82jqg4sunFwE5tk4bxcpGXT12oHDeXZ48Ub73AYPnPrns6x2rWsofn2xrzu9",
  "key18": "3c8B8C2fy6i4GTnPcRFF8wvRkMxuEPZnDtLJgEcdonS65hk5jQFJoFy5usyhLm1XuEGTyS7i7qRmjwiVToPxv7y2",
  "key19": "fTeVtqke5JnieJhyLay2mGFkB14hJ87JEpax2xczg1mFpG7m7mCWaFzEZbe4vCAgrREFFj3FPe4NQXrVbaBhUJY",
  "key20": "4GevMFAJ1AHJdNNBRfzcn95Rg2pJACBZHerBpKmAn4ogFceHBV3hr149D32WvHwkW6MTEHDUNwDw3QzgPUsJuaJg",
  "key21": "2GHUjQKf81m7rEncFJJx7jvG1sQgY3V9em57mh52dXVfjuMcHfpqzEKyNddejgYfv121esp8mzeDrer2B8XQFS3e",
  "key22": "45FDqksqaiPVReK28t64qmQuQNBkYTV2fdXK2cbuCihwiz3jGAAhfwoo2op26oLLgKhF2djKwy6hdrVb4k3RVRi4",
  "key23": "uC6PC5a17JCtzHckYTFMup3khCpM7n9ezKBiXgqPEYj6gbXVxKXFBdh9wFsUWVYc4ZPnkPU9kovWmP1z3nkUvdo",
  "key24": "5oxMcvZ6Am5UHmDL7A6AJwLiXtqtynrTwsPuUR6jNcHHhMakN8L1WGSzLJ46gzxMyd89GtLNNfgJA484sHdzL76P",
  "key25": "47pBaA8d6FyqxHDpRNXVLyc33pVa9F1B96bdijjaZmWjAz6RQ7suCmyER194JpJA7eVFHPcvKSqXFhWL4ufBamj9",
  "key26": "3Qdt2coJyhTDdV3czUtTWDiEVEsT8JHzb1ujGW9zZZ7gVvkik6w8QUrbALrTLCffLe7B1uFqbtJi6Cj6vYhMC49E"
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
