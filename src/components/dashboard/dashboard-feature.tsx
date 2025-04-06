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
    "1KX4rxeXJhsGfRFi16pk32XBhEyKJXVBErEZPRwbYUJfajZtjvHBHkmMmQyY3SSzfYBiKYxEUsNAmaKfPsPcoui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbWakodu3jakMmfDgyz1Npm4skvDn3wd3QAeB3oQZDfx9rxNq3P2PvXTuTqSn5HGTMivefAb2wryof67G9AZM6",
  "key1": "2mTSCzYNyWQqi2BJ3NZYv5gXXnkmjQTtnDYNrAra1QEJ3m1egKUUdbuWzgctQ16KERZWXXN54phAfsaVWk7WuRc6",
  "key2": "5uGBpXhD7fMFS3Yc8MxCGc8MbgHYff7W32aBASHQv5XdcFeKcC9i9s5KwTf8nW2ZsYCDiFtibD2uhzYV5o2t9Drj",
  "key3": "cApTWkJwFqh2hCzvvdDq6FMWYRmSb1FjgFY4c93tAQFaKvte5QWiWZVvCEzSsve1Sz9s494ohwRfLYDGLUwfFgX",
  "key4": "zUweTBmjbwjq4CNmEY9sZ9ycPN3bHZfmcELZtznkRC9JaL77MnCtiR2CpZQ4ULNkfvbagGb9Wm3jWeNQcPzXK7h",
  "key5": "4p59ui7mRsYJyBnpgcrWnGa1wJ1QTw1gutfd1yfwzohM7MufY12vbvybqE6myg16aVypQWrGkusE2WENqFj5tzxf",
  "key6": "2ZnSKTCuxd2D58NH6KVKkhoVNnn8fb7SWqrjRqS3XWJFJwtNGstv1g2qoy96CH4ywqtvyDzwiJPAYHjjZLZELRh7",
  "key7": "pCCM4jUe9LjGBsWrqaiqVYPWnsRieFcfzw3iJWLWsUQDwVpgD7gqWxYJrkmmLrFerNtiD4KQRNHYR4dfU6Uv1L4",
  "key8": "2bff8k3UPLZ2QdHHkbZN2uVwmgZyqWhrKA779vy6FDih464ZbrtZYUyNisJHgjoqUECVWQ7rG4z3KF7McbYgRt8A",
  "key9": "biG8yfXrHmKxhdzKEQqb25ZG2uZukUQUEgHjg9Uc2QV2QjnochMEYhBwgShp33qYv5miTkK35eDN4GPRAXXfyWH",
  "key10": "4sHC1HmhpGTFGsTNffHesN49XuXtcEiQSN3mB6Wv54AAC4pgVBA2tCq62FKkLBPWekyk5xvC2souUM6e5t5av9iS",
  "key11": "2w2Ar4vhTbkUnGAzSskV7DCUGWqqmJ8mvEQBFckjsrt5jQ1LuQceXczjfm2v8Ji5MARL61pEDKutktBEcPPKm6bZ",
  "key12": "5sYwGTqYHNciThTEoZ4g8aRFVzvgMuDJf35hs4CDVExcNzJNNV5zAzQTzznMff1s88tqwT1n8Fb4zm6ByNboZESo",
  "key13": "2qFZCSpFEgw4mzsCh5JEPqkfGgCYWviqqhKscqkWKxGp9QgHDde7z5kMZFtZfG5PA52rMgAfigQSKvQGwdQ76jyQ",
  "key14": "2wbhhvP6X9heLW1j1znEfyGPZTfcQKGXYkbJVWobmwqxZ2DEyVNAkHbvvgDVd4wd2YjauGpkiH2KDwdvpNscpJsp",
  "key15": "5WGNFCuCwpdjgEY9bkgGcQkzR6XqQE34YDr17dfKWgHNm4WSJVYR8HG7UsSAeRvQriEeEDndSViqrp1GMYhNJN5R",
  "key16": "EdujQJDHYCjKYmCHRYLK6L2BPQU2MSXHcrioUsM1LX6a7uspW5vD8WKRxdbTZNh6iMmt5H2RFqKvc6GPmrNTqL6",
  "key17": "R2MT1tz61dxBvXippsc9sZUFNcwk7maGs61jAMwHNkdbxbr2qUU3yqTAxXGyAQjBbJVMnTQ4CHEE6eAYxKYPTiE",
  "key18": "hfPmjYjBF3wTVTvnLQv6Kw5V7T8wx317i8KR5efxDF61NF7DGLJmcGVZqzeaJyEr6iDYiHiaz25VLyMBsvUCsuA",
  "key19": "jdLa9ataSGytquUU1C7Unga7d2w75WBbTdvBxy6ZHEVTmnvh6GHAeUNXsDuUDuMriitjW1uFDSb2keuJjyQw9ZC",
  "key20": "39sQrB88iHvPJhsXAttUpWQEbMt3L5w6iJdCyH9U6uKKKiSxMNdNGHsChejNbtna1c7rK5MRwZgxsEoUcUmYsVJ3",
  "key21": "31NTB3LXnsWyEenfi6T133iQ33A9crm5SdJ9vKyMLwGF7CqmB9wdQCpaZDkXewWEAFutsHLN6QAFE2EFFEoEpj75",
  "key22": "27iYW7oTF4DRzTs9FLy3848ahvyBfzd2L3zjxb6uafR6eqVEsRtiCV5KwqBwVmyaWvJWaa4WybWY2JWEQgEu2EMh",
  "key23": "4vfiSwckC3EFimW1hq4H6rRksd2j7dqWQMwFZLnkaGBvBomHP2BzDHKstkF18ssNNSEf9DirUTwcdaTDq8h473ne",
  "key24": "2B17H1iv2j6g7WGvsqYQBBxHKGtYEf7P1NFcSqMs7CympunpQ6tibuhf5vZe7cPtj8HxuRsMfEbGBsBq21Y8ek1D",
  "key25": "5uoGLLLLm2UDeZ8NnN4yUz1ccfQhSxP5WGXtaSNxT2Cv9bUddaaq5goT7d2cSBZDKrho6wSfbrCXN7dqcVtV7g1t",
  "key26": "3hDAh8WfRtn29b55y3ZxC7UjVqykeYMbkvSJRncausRzFQBExUBhMrY24RZ5C8AMPgJ9unpTcrXViHN7GgzkVsxK",
  "key27": "5wmDVWgJxvUQZ8AZ57RX4U9Zn9fP6K2qoGT17eo4AUjNLssZ5AGXkoVCXRXnhtW8EY6vTFb55GiJbsGXgbu1YFRU",
  "key28": "4PLdJgrkBN7XfJDvG7T7o2zPmczJTmKSX6izNYoV2d23TH47dVwosmp5wKzRkGs2dEstxFrdnB1mR1Bqf8ahcbN1",
  "key29": "47QrFhJAHmWFTBeWtv6dwoFAL9JQ4ceoc5nSb2ZMJSuYJ9UrS77K263Ddz8uQcN748HSTxBEvXX7vb5WmMJ3LsUy",
  "key30": "vmdJQTCXk7ar8E1bK4hELwGT5RMMbzcCQ84rbrLoEMnikE4adPGY2YUuLGhHPjM5BxFChohmA9PU36nNeV8fCV6"
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
