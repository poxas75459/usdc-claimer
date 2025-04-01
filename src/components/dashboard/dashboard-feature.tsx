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
    "3daUxL45umiWQJoFiFwk1iVBsMjagpdkz3wXPCYJ3mEwsCJoT3rNKcEQP6YaDy31DvH7GPAALGq4yfMzFzsRMhtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q674HAq4KkxPTdThW6E9urSpq45ftu9oKGWBKFTfqbrZhUAWQ3eK4SmKpCvYD2NCTLpBSywCTqWxR29Dnz1ez42",
  "key1": "E6KRvsuDjGWcacd5cypjTL3maD2v1XrzwQhuszLnLjXL6K8exbnBQotxz2uN5GEKEGyBQnT4bEgA4hB5UgnrZVV",
  "key2": "5KAJYFd99uv4fcsKcaj3fnUCEYCWWQCbmDXBouwvxnj3kzZMzAmQuHXYVFXFxnLcAcL1ZQL95SWyf8u1mmcvNjie",
  "key3": "2TvKwceRSb88kMQqjyhaBDRAmuS9Pm5pYJxfDJXXV8crbbQMe1gRP2Q1tDxBXQKd9KVLmmGdBna3bQR5bXeSGsPv",
  "key4": "5zQycwc9o8pMsBBTVSi1cbXuKbxRoozNz1vynxd8YSEijmeZ4RXZKmZg3JPMX9vjK6uuKwyAt2DXXtSn3612ruR3",
  "key5": "366DFG9E1x81RNgwHMssMjq1nioJXE1mZqMKxsL81ssuiCsD4mAHDNzo6vBnT9vSqodAhjVPPNqHFkkaUsATMP7y",
  "key6": "5YRX485dh1LEKG4SNQTLuwfGr6ynrVuhWossg7U6SqWsjDg3HGvqs6MjaufaF6GwKKLLCyQXt5TgYz6EzMzHYLaZ",
  "key7": "33Sx1P8KFdTCPFmMaitPaooBFva3nRpXUDTfcg7yowMYapobiFWfz6acnnjBkFd2EkFXQr9xXATgV4Kfbd729doP",
  "key8": "4nWqAyiYLacbJFrmHMHGhhQ4J3W8EBdoXd9M87eXR1geUY3ajW1fmoDz27cUANuEFVyFz4EvX7DQgLDdsBULjSQg",
  "key9": "2sQNrqraJMsN9twGV9kDNFpS75XDDB3GXeG7agZDEVHFBKTj8y8GLoroBqmjpRvJioLXJpNLVitYAWsCaSr9gPGK",
  "key10": "3UuXTkDKgvjSFWr9Pyv8ZJ8k8vWi6nMx9yJ3WEKNCoHhr1oFxDNFfjJXV59tuJwXm2CmBquJWjVVqc5x6KwEmd2A",
  "key11": "fFV6QDBSnkohi4GcwVQ2JeGHsR6WT4TiQYHdWc7Tt2rEPPBEcyn6A3DEHKFV4rwqaMx36dvfEZK5s1Q8Dn4sSG4",
  "key12": "2V7q3mJQb79QgdsdgqHtYdtCcJinKQ6dSUMTHcWzcSuZNZM2uKTbn2KyLSZJBMT2ERMZWNb7usvjhp3MUjibSHb",
  "key13": "4X2eVAfzzHiiDZnZVJNWobucmFh2ZNbN8rPw3MAPBJdtkogEXFySSztcVBEo1WMunAAXB65cpNhfemLnELK2mYaC",
  "key14": "hpgMjZEpoLqPGKvPNvGuarwFdwdEgnwLzRjB965Qyc4eJnBq8SGcCycKWHTAru7Ab2cHBzqSWdJ4FdvApeEA3Q3",
  "key15": "2apNTHNUJYBMu23PAyGwsqEB83xnVUpqpv18nL4dsDSCu4AWk7jxJyAaPdLatydLANSeAGkwfwy5xsqffMyYDJuK",
  "key16": "26cTk6F6ZAN5yoSRGiT9LCvS4wsMC8wXMv542aiawPPQwcDtXURnY7784ZQvvXbyiLoWg3KM5zboumiJemDgeVPJ",
  "key17": "3sG2wLSSN7yt6AeWs7MK1eqjpEC376c9T4p962PyYKYYoNP6LHduNZGqnLbuQN29H4BTqgWJ4EFYexmj21QFzTdu",
  "key18": "59j5CwdpAKgfbEna2ifreSEa8UMK8KwPzq4zbWM3RWY3UfGQgPcU2iYY8d8NgaY2RbbiuLtqsGftqDoj7baVb27r",
  "key19": "2arVSDKXmTwpEU3fPofHBBYvBUH6L7735qnVbikYsWrYoRDw6hXQGdjQzGUzJkuSGz62S5e6hkXWzEaTCQxsq9P",
  "key20": "36B9QaX932TP7dTaJGRJEiN1VM3jZ5xuzDEzDGrJxYDWATLjSUuHtRuLVAnqfMwejg5N7bQbddtYdJVHM7mGg8U7",
  "key21": "CmeYhbNiZYj3jF3mPyn9mgnV29tBh9JtKWq7RKTHBfKu83tveHrYNDVrGFhqiXTBcQuznGrKkw8fCZewZPW5gz8",
  "key22": "5r74Ur1qsWSMvUxvM1B1QjrUKLAbFsfewvgyYPJy5dbPXvgQPJz2NR1XdPkXW4jN2i3Sv3p9UerwWWJuFTMsn7Xf",
  "key23": "2NPSKhBC8e4zoHw7hhvGE9y9Nxuioj14gebETivFouYyrwFo4ezDKFz2xE5UHJmm91zkMwXi1cYvXFqE5ZC9un27",
  "key24": "jkyntYNXPDECiFskTWES9t2TrWCrWVZV2CowNxuMEufQzrfTouvfN2o3WfaNqv2sPHKbmrCKQKoDmT1oAGgrr35",
  "key25": "5psrkjmUDdZbSsTnYf6GtmNnqQpadAeWYJYmRxBFGLPFHsxBKvgAHLGnqE7RvzVj9MCWdrvV87o25xdFuMWtNEdy",
  "key26": "2Z2pGx14kAEQoC83ejtn9oK4pXdUj6d8VwzBKk8QohRuHWPYWPLPYh2q2qZ9KtXvCHLyh4zBV2rZAZrbj9hrp2h2",
  "key27": "4SDFv2QG4pTcUQGNaGdTQx23Sr2Z6kktk4A3cDWdPDN6joq3wz2vAgoqkfHBqhTFaP6c8GRVi7gnZgS238HBLQQB",
  "key28": "583HumpAo6MkVNdqkEAMheyZYoN1eKWKA9AHx9JATmL7BGLJpUmmkGkZYy96wCXABuwpeFJQBPdymUiKr7FmeGxK"
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
