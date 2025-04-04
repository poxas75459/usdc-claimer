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
    "3JBhqqbQxe34pwaPDscvW7utm5yiTFNyUkPCCM8ft5qch3NUXuG9Y9aixGJ7eXaPz9XZtm1HJkCXEjasVNB3W9SK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xtPoDHdRJU5DNzQVLGN6XmgEPkpp13f8zPnk2Z3qEFncZp1n1aDG6xZzGXkZ1uifS7KRoJLHMDXGYCwMGrhq8YY",
  "key1": "3QiarxjZv196NEJWagFmvMHG1hp4xonRD6b1d6bioM17LGG1dchRqMYhqs8y81X3tDKzbQopKjbVt526fCwZDFzJ",
  "key2": "2MfKmS45SrTjsRHbRV5tEYgjtgHypKoKDNrA8Z9DpFR9fePi5q6wbZhAJCbKUQeYbK9upaVwLBaPZobGqj6tPZTh",
  "key3": "P4oyhXpxgYpwRJK9iL5rmvf7ZHxaqQJ8kmwV2K1oMJTiWXmmrRtqXLsinnyPRxTMgRmTkSsLzURgYXoLVLxnZ5W",
  "key4": "5e43RiCp6VwvNH1xXUwXH4dzXHJLVXrkMpZq45QcU91mU2x9DA7wMGRrCfAv1wDcsfCGQ47KM4RsnsjU7pG1xjiX",
  "key5": "22zuXqhUTptBF7kDGhvUGEcsSQpWFJjEtbHGzDtgzUdh4VbVeMzf8nrZturAFQYTLtVEYWtCrNoozs5nNVCzdYHU",
  "key6": "5qdMbwYiFSqAfU46Qvz6wFCmfi4f4w4go6ScPu451HpeKEb75exHsxNvuASG6megdrFRqvEm6gSjQvvERxSQWQZM",
  "key7": "5zNi61XcFLFevQWyb31BJTrop1HLbuf7q75DSd3V16d4XwCgaNEoz8JSQSeNaHDrrQWK76PxegW1QnqPcpjMDAyf",
  "key8": "2dP29LVT7RuYgH5kXzUQZvoKkfuGfPNcxcRYxWggdxdmmzZjdwY1a6wavs9sVWwVLoGSzU1Lzd4bL5x8kjZuy4YP",
  "key9": "645XNcsR1xTpCUksuvSszZfETJf1D76hRVJTaYzVrRV6xYy915Dp2EVQ5RRRn5BZzPrLYqtiigrQEpny9Q1ht1Mg",
  "key10": "3cKR3YP1X5qdsRjz4jJkEQztpQU2GzSE2kDWdxy5PikKMzeTJNYQbaV6EgtikeQBXLLEMtJSukEA4L2Px7a27oiM",
  "key11": "2omKDKfwhMPnNonvuDdDvJSRUbeswAHnxp8yHHyuARwDBDAFPNFrqrPRUXYdZQuH4s88xc7HZR6JWHoqv3G4cJrK",
  "key12": "5nHD8EQBBDGmW9P3qTfvc8u6BzHKvtm9KDGj6LbkC3pQ4QUGvXSDT5hqecKgdBWMoryaZfVxwAowyEQSipG6sgGn",
  "key13": "4kTF2Zh48k9FwEhtecprz6HWhbwQ8Z4tJe7vttCtWPMT2GN54Hr4UaJ49spmbccrLJLkoWiTWoGBCDLkuLDUQMPC",
  "key14": "4oN4FuUYGYHJabZu5WgZtEdRzfdoZs2srqGwD5T9EtmrSBf2GRR18Ga2pJMcLp12Ts1mioq1YWrYJC3yeDSYyxV7",
  "key15": "3WGZ3SgVnXsVQL8XAV4L9xKpvC1zZSdkxDBrMzbu3zCu6KY4kD9H2m5u9mBAAAHNwEG9iPVJVSujPizqFgkqwoA6",
  "key16": "1gp8TYeKqWo1PGUEpKAmkhuGWHbyNLmiraCwzbL1s58WuapLtN3ZCaXqiBvGd5Yvoq8ts5ttWQGwhewvJQpijir",
  "key17": "53YK1Lg9zxhkHn6phAJ9dwk9V5iKpTW5nVa2LAKCfZ22zqWX6z1jsgjfdsSZQauRG8VS6UyxcsYKviLwT8vtagkz",
  "key18": "439GG2L1bD3aNfisB9mpp3GAquwGisJb5SX2eBAEW6bSW2LWb8Sk4cgUfPi8UFEMhnvx4d6JNhKzhPyHVufBmBa2",
  "key19": "EUJzCPgkf48g2bLZcsCW3iQeSRvy3y9sKxTFkHiX1NkwLW6z6Mn2FJz1Zbd359C364G4Ed6ZxgAxzWFJ6i8PafZ",
  "key20": "3dUrGDCKFLT5b7NvqsaESVDVdXFezziNMeZLQvD5qQ65j1vmPHJeo1yrv715jPD9gddQ4MrRKYhEeTgejnY5cg8x",
  "key21": "2W4RvhhjT5yUCZ8dnJK7WAcSsT3Xbxzt1AHyCjaY6Abt9M7quwxgcz7Nd1SE4Xf9ocrnrnHqVKkgoKMKZ9FYwdWM",
  "key22": "4rTwCjBw3oZBWUYfVmJR3TEXrxugdSXew168neFP1H1LNh6oyEpEGuifV5BBdLngYXwJjmdk36DupinieLpaRoZc",
  "key23": "4HDnJivTwA6VGwAMm4tDe8ZaUvppBaxr1Spj9zRdRFgsX85euu5az6rchuxhfkW7dk1mpagTc91gidufC7YAuVX8",
  "key24": "3CZCDr9gk8mvSk3PGvorFMrVGzrWaTHZyyVttA4Htk1aTfxBMM2uBpMVYRwNjAvAB7Y3eaztxc94wZMxqYBXGdr7",
  "key25": "3uamkgtuZZeu14MvjR6S4KDTAJq5YdQCDxkbDiuEoJfGJDEzLoEFxMypmsGNyainUoPVb3Q7DG2tThuZ2gtLCXsj",
  "key26": "5oLKQeoRDCEiJ4L5K6ziDAYuM23rmTAyp3S8ctCgvyA5c7gU4sbJ2JDVzGuudBc4eZykXydoDwQBuSE8UJBTvtAv",
  "key27": "2sdqVSRX6atsCwBQbpfdKjBjxeSAHmBK6JSiGbqsWPKbEwTkAtWP5HKWgm3v1awqJ2uN2hMHkMdg9VXkDM5pPefL"
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
