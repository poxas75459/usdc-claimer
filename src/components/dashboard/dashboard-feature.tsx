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
    "5uQfS72ADMU6zA7d3WA23GMfMmZfKok2Jj9X22L2w2oZGcx6jZC1mTV4hPLt7xN8hRhjhVEfEmXQuafuJ7sVn4r9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fPhQbnHupRFwtVaqUrojddXxctTYpMtdQhFzP9eyTPKToesfAyoPkojVQLdZRB7JNG2GmPyjwn2XPLfnkYUVtY",
  "key1": "5kVz8V2TEGM4MDok9UNhLszAKarLFYRBuXmWp3Tm7UJfvasrMXXDGaLt9UmMfj1SvD6zxmopXVVNTANpxx6sTHYq",
  "key2": "3c33NnsD2uB5WGahULPsrAcsYUYQ4EHjvBLr3Et1gh97TCpXurQTmmZX5mRWqeeBQgbfYYJFYWh48hoUtQYHtR56",
  "key3": "2baMX21eYdseX89VTwy4riGQpRwEUZ6MPGN1XjfVBoYEYspYGbdfwN2ufg4YRxSAVPpSdTY4t1h5LnLms2J3Vqau",
  "key4": "2Pxs4GWjUjf3KZQ7qYigs3Y3Tkhr2SQsifSbCmdYViFMyuwyn1x6md3o7syNcQktz7FjCJvHqs2Le1ELwyGnr2Wc",
  "key5": "2hk4kbsfD7Xo4aNLDgrkg9rx4yC1wHGByysKPDzLSS7CMrUxqNam9ivkNx8yPGaqh8XtjghzqK5VJiAXvpiDgRn2",
  "key6": "3wHJBttiYtQ7qrrZRip1k2hrwTgY2RSAkPQCpMKWo16LbgTxcjzuG7miyzxt7nZnKjzXGwmUkpYdv2yaZ8BQNuou",
  "key7": "3AVVCTVLsL935KVFywxR9Gky7yK8TKHCGJGUS8d8dY7CrYbasAD58ZJEeF9Gz6WWtHjezu7qrkqEWLAnPg7jWWBr",
  "key8": "2bkoWM52AZisQEZW7Yio4gKtn2bbVr6HXzLZC6qNGfgZ5eGdYHEnPrpMmHQFuYg1GVoAwTJp6cs6pSZTCpFtj6sV",
  "key9": "3pKK5pfohpnHhvKoFnjXThwEmskZVQvj8PiGCgKfyhUMUcBmubiu2eCAMYeMfVrzuHAUsGq5SamRwo49rRNpLcij",
  "key10": "2W7zjWBsNchwrWf38VvvZDxtNHEV36jG5UVeH8AZg8E6JaRWD9ogV5e6DkRWMkWmcop7hs4S4CBmS3T93KgfRAr2",
  "key11": "Jg2G8BJ4SnsYqS4KPbkeBk16pc8eA7BUQA6FQTonKKskLNdRwxf7XKeiaGkwGSmrPfUnTSj4ndWYfTiK39hsFBD",
  "key12": "YJzXRvrf51fp4RHRbhbJshcQ6bZRReXVPLVaJFPmnkSNGhYonst6vGMMMVaKqz3dRcyUnrSEbRuizPqm5i7t8Td",
  "key13": "2DvTcmBgtpN82gc89kCfzNaNwgghMFMhtCoGK3NXuR4Ek6tnJoVa6tZq6t7S3odoJVRczX4HL3gzJTLgABE5wPxT",
  "key14": "4nq61qQrsBb9mk5HYLikN5RQiPXzqmLrM4VfeSZx9JjnH5zidEhP9LHCoZWcoNGfuGwQNmgy1g8RnroF4kvgh7ui",
  "key15": "4EsUa7oL5UtUpYgYAajQfYTV83nPRz6nuXHQk5eidtqM5duYoZtpRCGmgbmUAuQir4kcWirr6wZSaXdoTwwQ6hCn",
  "key16": "5Vwhx6RJL248QJVBnRSFdaA8AdckLpztPCFzayjYsDNa83x4PnSt119qHLEBM9SSJvMuxz3yUTAXCtKKLaB4mDxt",
  "key17": "5J4yS4YJmTBJkt4SdUajRCaVsUEFqvv6Au2ApbhbpFGXRe4CE2Cfb39zLfdyAtDyWNeX5PJjoQSsZd6BPu4aSN88",
  "key18": "5KnS5b6grnySUm7pFYG3UrGh1oSsw2gvY8z13g2He8yAHsXjr3p2rRRmF46wv2Rume6ebwsmzfTRjBxr9MgBBg8z",
  "key19": "hqZyxeq5C1nJnm43DCiKShJcdTqgAa9AYro6rsfjVn2WiBH2mj1suBfZLxRpWCJZ9EFxpLdeXfv5its3NRL9EA5",
  "key20": "2Z1m8Ju7DBdoiew8N7PKQU9y2dJMFvALX4F1YnMxZFdfAUwGW8krUy4vLcq6WLL2rQhzN7o6VYvwfi1W3RzyERai",
  "key21": "4zs7kHutrgTT8sDSv4qoXhQykG9yLGJv7GnvKLpgdppnxWPNuNwC4b89cqyfVTjH7xQ35kyDiUP4Nx94hq8rCeDo",
  "key22": "EsK7P8accqxTDfi2kd2i69bWxmJHgTisGkctN4isqV7HJX4KpHG2VnCaPXRYAyFqtjZq9DTCptdENvWR3S8CbK7",
  "key23": "3w1wVaNEcWTJ7qFSbycvTK5rtFGKvQ7jzYssNgDyy8GWTW316TbYBpYBxEqyQ3C2ytALQueBusRsAstap694rhBc",
  "key24": "2YUhZUwtVgkqskwQXZukaZE6thbpyRUESQYHPEEGgq72wSzLYqMVPEKbBNrHwaijuUPNWNaje6DpE5D39urfdwPw",
  "key25": "6ay9hERYnuLsp8Auc9o7j5g49ioPVKq9LKU9cyyvUbgMbouefmNWCUDn6FbSLjK6HKF5JnwBsRAMYHHyEa9evPa",
  "key26": "5S2iY5T6Cc5yTVDfzUVxi6yGWSAChti8KarjM4TuDkf7JGeDMVP4bjYJ8bPB7ovUn9L1XaCN5asC2oTiTZtEanyt",
  "key27": "35FtRmwaX24eub48ShuhEnHoPF6fY5Zr6HVkLvcbEM7hffgLUoZQ5RyE4ohTRcozvNm3nsXn7BLy6PrCqBHt5zWe"
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
