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
    "8RMbYp2zhLs32ZVazee4pYwTFMym9D8LhukUHMiy7cVz67nQACMYZFBqtppc4re6Z7FJCi9HmFfPwUH8HgCLU2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJq63iZPzovRKk5ZB2gv4sTpqPncrbH97dLNy42MvWxHBqjpyAKxpC5YzTjq5knS8LMagjHH8DtEPs5hXjMsAmK",
  "key1": "C2NJTcoWzdvAqhk8yE3HmZnqe6wKNyoeGZcMrjSfDxNhYHyCdYFtpF5NhA9D8QdksPybwB4UDp9mFGMt4Y2LCZA",
  "key2": "5Hnq7BqazjANA4czp2XAknqE8nSfTPwo7LKRvvKj5AaZnZMtyQzxJwxzjCZqt9dEvHZFti5A9simPhDR2AsnU1gG",
  "key3": "5v5RTBtRveUvtaSb7gC5Ega1W8Hzk8h3VpA22saf1vGR9oPQmU43bcs3F1NHBJZHE3oJVAvTnXFMs5YBCsMzRmUH",
  "key4": "3cYugLPrgXdvViyi5R3FSE1jLj7KDa4QCRMZvkAxJ2hvVgh9vpRRQMW4KBQYT5gpB97TkNBRnsRBAHVMctUa3eXz",
  "key5": "5JZrm1Gt9zpN6CEDhhNxiL4JY6c7prTFfePeizS66SpZi9knCAmvARj7XKXVrF3pTCKD35zRNTEk4xdhhjJxNTc3",
  "key6": "3WGXJrb1bbtU9XhfwZP4JPCHe8rs9cab9ppGRdphHAs8Ei9GAEfQFS9oakky2D48Vus5Wm1aeTCHFD9CfvBohsmh",
  "key7": "5o5mQy2CxbWAqwuZs16Bc3XFjnq8rPpiVugJ4MmV8rysJgGpVWdYYb9UUUXahm4i8PK1KGYKxppMY5d1mV8bXNyt",
  "key8": "3kThPB7JDwY7a2xvhMMwduHqsotZhPRkXhoskzA5HQ88yXXpc4HLciM81RfpXwqnXqvE4mHzBSvmotXWYhkiZhB9",
  "key9": "3VSgur4YqcurcEsC6mc9XCSne7jhgi1RjtChxMef2e6Ts7DsUf4nkWXizH4fnCGVq82kNc7ufaQGFYSVkDPt4iUP",
  "key10": "5KpWkSgvt5ojmLeC8wWbNkVcFYeqnuUFsAzhuF4zvmTtnRZfqzCpMxxBebjmNYkRBVMmrjpyroNNMKQR76aodjRJ",
  "key11": "2FhrMNc6D6DUQXqjgS7dBMJHTWFDAvBev5SVUg1qkYZn8T6NicP2XtZMPcxjDheF9dnrV5knUbsDyxYDhVTyq2Ld",
  "key12": "eqKDo8qCvigkaAnLqPF4KqoevMK8x1oB4rR3JHDkuuwrL9N38rfb1M3JR6ZAgBmF7tpf61KxYnjE7JHNxWUJrJJ",
  "key13": "HDEQWDLrH6YuNK5sekWrdMMtwxYviRQRNEiifN3KcTTzs4yxCCaYJFWoHENqVnw4aX3wGLUKaxX6wZ2bUXLU2tC",
  "key14": "5XewcYTNyxBLvLaK7mXXGy1UimQ5yq5gRq3nkgEoTSrgA6obD9t1dEpfgS2RfF7tFRTVvHLwHDnL6RVFvdEGpGZJ",
  "key15": "kyvekJrwxHPJUwxiGEUrQ72xL6XCXKNDxdypGmvJR4KM4uXLgh9Kh6d1H8RMQetykbZSBzLgR9NWeUDiPdsL4bJ",
  "key16": "3FJ5HMZWiPCahgr5ZmcWKpfKvk21g8DpR8ksX51kdmquQY7WbmHLwbUPHCJr1SBDe4crbMvKkVE7oLCU7iik4Yuw",
  "key17": "4uuREvBWPfWDeroEzRepgwwqn4QpA3sVzJju9CWEuhU9X4jKsJJRK6BrzAxUvmE9dqWMUkHStDizb5w3FjSG256L",
  "key18": "4r4y7kga81sBEGXx8MoiVuGHbUj1K3SdxG4ozxmpnRZSXh85U4hn6Ddz9P2byYtkKgFZ8yBmdwUPj3zqrBwdAGDg",
  "key19": "2mHiTuvhx4NRn8gouDWrSMWmTUbbp3Add7Yf9rQpJcoHHoKqXWtutYarxVNJMX3sUqjrpJuh5Dvm4RPPFWLcCUfx",
  "key20": "5xdHQYWCGeJcHksgPLCGAfFb8VwedArTpE1HTV5sqzuN5JDoQPDSappyy5WtXGUPT3M5LE6MmDLtoPvJM5hETHxk",
  "key21": "29Nm3RFRrf7aJ486wiNby99FMeRat68teMfL7w5kXw5aiPaifaQv82uo1hqYzXFb2EwmrUqB4hwnG9ELQSHpiv1k",
  "key22": "2QsUboCJbWiYyCuEHPp8ASMbhhKSLTWXsqwvbLDwgcdDVBuShr9gm5m6QBVybJ9NhKg1Dtyi6xWaPk9aBM44rgoK",
  "key23": "2hiWELc6vn6HmJ5iHjZ2PmHckn1GXKzrCm6gEZQGnCDWUTj4k8TqygVaysPzEvbn4SkGKumVwKmmNybZUvy9gqya",
  "key24": "46eC8aSMwgym2YNrx6zYuUXryDj1UK8Mg8VXHWKyQ78QdpFa3yuCyUQrt7sDws86THqsFQv35VrTy4Z4jNqvZSnc",
  "key25": "5XzYCvviQSTAzA6AcS5rux9WJwDUWAcu4Sw3AhnB1W4wVRJbd7TvKn9KH3ePiC2GdELSiGLB1jvEYPxKVLtfxj4u",
  "key26": "2b6a2D53b39Du7VpaMHiueQ7a5WaHwRCXo1C22SjhnzyfKc5RoRfqwvqwno4NWULKakzBvMQj9vtWPBnuseVUgh9",
  "key27": "4STZkkLAGkw4S8vgdgHyzop1xGgPWtHS8VMtz6YCVcWRrvFnDpDuq35dYTBXKAgAXi3xUU76u52QZ5XBGuVuZMHc"
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
