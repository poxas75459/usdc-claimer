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
    "2gZ7RVFdQrQYAotJNEiDKbNZTLZSJbYZvHgQnuFg3bhYuTmkyC8tj5QfLZPkDDPa9BNnbPW6itKfvC84YqpEWXCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXb3yQg76nhM6WHYhi6BXtpzXh8nZkW6tKhDed4YW7eMrP1SwhikbLkogPdkkEY1tJS6rGSMK4yNHSyd6omQbcr",
  "key1": "5LoC9tBnvYkcJx8tAJYqXzfSvyQEHsziHnutHu82vcCVNtJTiTAsi6Twh39QyTWqugJmevtMbMd6cqJ1bkMQwBYG",
  "key2": "5p5hvzYiSQDrzy2H5YpyKQgWXNm4vqtJg6RctCBvDg9ahPqoRbEdfYxXTP2TDcs5SbnjMwnCP67QbiygNmjy4Z5i",
  "key3": "3LMxz7Gf1bHnsEDruJMdM2p39zHYgfgfYahvdx8AtSoWSdQPpCfiMnBXRoBEEQVLJdkxc37nj1EHHnimvzhXPfBo",
  "key4": "43edq7ECdDsY7zsW2YmmXWLs1atxLKQcW7zosdD7HoTptmxgn3Tk4GDRiwCkK77h61HnEkyzd5iJ7KXpn7XRCM17",
  "key5": "66BhyEuUv3wmeVDa48e4gbuW7Nwfin9z2GaoziARzQapwKaeAbCxh79M5HMVV3tfnXFqeyKCfzti7AaDyuKfvYu3",
  "key6": "4LNpVSLwmPZnSGf8CBc4MqR13yDNS4qhGqf6eSht3zKournynboKquURtAqMJpwXahPisRzTXf1vqMgKQqbf1aoi",
  "key7": "3g94MykZsqnek8EACfx43mDyv4zzQtuDit6X4HATFLDj3AgLrtDsanzJ4VYXKRB9WrmXysEjWavXeuyN72AeQChs",
  "key8": "4BnpibgZv1fsqdswDwZBbCCyJrnSGVHFyfRnpj1q4iR3ge4wAw7HSfBYWaFcqmjDAFk3Zy73ko61KD4SPsDpYmJR",
  "key9": "Nb8L2saiUhP9A1h46Li3q7wSShbGCuwLiNhNAiR9J489SfUryW7EmRNJKJFcsvT6zCfHEQd6nwxrMUidG3h7Jz4",
  "key10": "42KbmhsApKH3x8W4MDNxpbTcCKU9Wmq4szc83iHcnCmHVe3gFhXrP6duWoPM3zxDQrQzLQvVbcVuGJ2gDyfxER3W",
  "key11": "3HHWQnn71nftQNHVY29u5tkop1B9wYYz7QggSDraGbP95GFkfEPkHWot8Kpe9DfgYGfEA5QnhBSX4YsV5Sg6WL1g",
  "key12": "4xaUFtg8dwcSxWkBawBzXK4EFowud2UiyW2Y5Kt1a3V22FF2okKYDJ11WauswQCVHjAtffN97d5PefiCL8A2Pxkq",
  "key13": "64TjvZwwDQe5j4rFTJTiewNy7PL7ETLmFNHsbr7DpaWf8vDbfcFWEtzK7SNdhrEx3dGC3rxf7x2krUZto1TqetQM",
  "key14": "y489tpzxQCxwFQRtajsSE4BxfpBQwue76DXsShnNRYoTcGzCCZySo5EoxonMPXsPTW2W2HaUUqmjT9Cf6rNh6dz",
  "key15": "4SvRk8DjZHnL6nExXmUEdNunW2fxCVfaMqLjzssAA3ZcSkZxHTYWonDJtqMjWqBhZGTRNHvyshGTrvNYy5mQFpM2",
  "key16": "Csy3pmZSdX3KrL9TEqX5cNWFgFtG95WabwFg9eQ5ExkLse75md6zeEEWY71T5AB2KRPsa1BMBjUwwDy18XstEPa",
  "key17": "2k7Yoadcm5yQ1S1WWNz6VzsKZCro3EHaf3H3iBPYEY7U61eGZPRMiy4SAkKvGjUr2TndP5ToJDDr1E7bSyzaCwzm",
  "key18": "2HLDcGL6Ff8oDfdR1DyBX95ACwd8cJMG36D2r3q8XDkyxEiXS4mJxjSXZGyv22Jq1WwmJeJ6858G6gWLKNpT3LgB",
  "key19": "61Ce28ubaY3LboWxR57xn94zFeMvRhgt7uk28yKJWrA8tf6boGsLxH6vm8EZcGHQTE6oq8donQ1unUUHcpVXW9kn",
  "key20": "5NPxVo1SKX19NVJBAVEY1fCS5vwxWxm3B2zNmw9WyM64FezP2dqdv4b1nGAASxPM5jwgs4yMXrfUYoj4PHiMF9dU",
  "key21": "27JZxWSNGxft1ZzcjGnSv9jVuHMVHbgCFNFwnLyA9jkyiu444hp9tKAc3MTRaxgv5HD1Wqr5Aq5pUpa236WaWs4F",
  "key22": "4ubnmKdXHTVGJhP2SdNxQjqEXDDzMrKk1oE8DwsF4RFj5LYGjZJ1YrNh37whiT8SvASVcxBtZhn1DvmXvYEzHjdT",
  "key23": "3FrYZuZFaWShyRaepwLj7VThKcjshYw3awZrN8dNNm6qwsv5o2hHzLeiAGPTw2NyLa1v6htBBgi7MhrH12kpwRq8",
  "key24": "3uDVqr5tep99VSGGvz5JoQfhQMVkyEWK56UDpJ89aGP9x4BaWFKvxbsjBbKD114ufhokLtaxPcfJc7FsVQQC2SxG",
  "key25": "2KezcZLYH1wuaxzETeAzj13YVr77jpnB4jy3JkiWmDP3AyFaAJ1vyUJ7TDi9cDQXQmMfChYtRBenhty2K7DwFXzm"
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
