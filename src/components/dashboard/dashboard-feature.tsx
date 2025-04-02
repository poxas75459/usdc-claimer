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
    "26ppCmawWVgQTH8PBV9SXiVY9f8gkkWJ7fAJ1p3m1h9PqPKRK5wKqLZ5N4hnMDJjNgdN9PKrb7PY2pRZvNaByvHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422Mw5jM7av78SwkYtZ9AKgYkvRRQEx8Jsmvgapn3y5XigBjv3HmNR3XoKmgsBG5yGeRG7gDKSAbmCVGbwT2dvn7",
  "key1": "2Ur8JPLDRXvBGJwGyzdrok6ZWe4rwduyyFfzpMQshqmRtiCE6cGLtrdGBwzqsAcZbrxY4VmDQN4tLefBn6vkKABt",
  "key2": "49mXA4niTYwCQwKzuUHyqy8HmuVRKzHFWREz9RJhS5BaYxBJH3ZTFYTBTrDphLHgYe1JLGhx6CWwqqLvXRNvKTkp",
  "key3": "3qLx9WqbSgWgkiGnKh8nJ7MQmRAEY8LMVZBWgq81vAAbD9vq45TvftkWHknvBAgr1YqRqA8hrx2czn4CK2YWUERw",
  "key4": "3FuyW1q9oQT6hKkhb5QB5RsXPGcTALhGocoDnyGntaiYgkH8JggYGsXseXaq9pusaMPLxs8QKiqMKhLA4D3mhD7f",
  "key5": "4JQm44wLgmAvrSc481YSZNdJ89hUCWWPWeQrAazVdENWMTSZSabAFb6kRBbrdB3dMMW59uc3hFHRfsrNazmvmC6w",
  "key6": "5neUm36jLemy5XasbcaijaqXVCjGffJMxW4TqFjf6p8fTL8z7hgQvBNKtRzujZagx8hs9oyt8R8MUs47FAag7mKR",
  "key7": "2ZcbRFCNcc7u6oBrawoH3NwoaAYayJjRdbBimFeamdu6h2Mx1KWufZLFbnDQcyJP1jTj4MqcMbJE3kRirifGqX4h",
  "key8": "2zDoM6Bfus74ySHvdigsXks8D7dN6tjreA7HrrHcYme9SZhTgRK9DCf2G1fM1aRt3DMofKx3oTTeGm7aGPgbyjWQ",
  "key9": "3NW8UWqinhisYiU6EcuUfj6CPMLQPtBw3bnjf5jgKbeqfWbKuGbkbLCcC2TeFLydNSFFGexuq44huSUZYhimFLL",
  "key10": "24DXzMcZyZ75FvNznGXGiUjXD66BzQjXsuBAThrZX8RfyCMPHRBRvrL9J5fyhr2gyZ6Nvd8HuCG5haRVgZ2nkuUc",
  "key11": "2GvMnNkgpwBYUL8oHzthFXXA9kZmXKZBePS1vgdfwfFeJWLZaQoTFWNjCVXdAUrRZLauYccQdh89jF2J9LmhGqAb",
  "key12": "52D8xZTmUt9skK6BpATf5mMitLJYyXxMHtBnTsAqmJfqREAyziJQASq9kcEPX4GBDrSnytMAjiczJkZRDcA1FVoy",
  "key13": "2kpcif1Gusr1gCXL6LiqUAbxUU1nEuJ8urRmtwJsbqUcuMVsNZrf5Gu95eT3wGMoQpv2YaJkDACm2TRGiNqGQwLm",
  "key14": "5pDeijKaw8poK8k4eVcdMJ41ge7mahSYrA2Gsj87dvd2UgHpxVdwCX91ndGWwZciTgF3pT971S8kUW7uDRSKxxQP",
  "key15": "3mYcZcLMM2BtWGcUuzKKLTabRZAKgCJbchz5hdHoKF2hMuY635ydsxbZGEvTTpHGgCWdDX18ogr57za9Z8Zbgpm1",
  "key16": "4cmn2XEA5qMz321HzDFokUFQutWKE3NsAhu8PHJSPje8Wb3Ma6jmhWykP9GMZhi5TSHW6uCAPaR8XThGkPFPjUML",
  "key17": "62d7Nz2prw7ykJ22YFZUocEQEPbLxPewhYm4pRxgexAHq8MF3ag78ofugm5mat5xiTb6KeJGR7NZmrw7vocyjfEx",
  "key18": "RtGuQoyUH3JGxWm7eFWGhmBGwor7sQVYgvWaTuKiZLQ6dCKk7r8CaaHoCCiWdZ8ihCp48Qze1EmPEWK2DBQums2",
  "key19": "4v5eHMorejbSfF4Eh3STVAVKxUhC8D7mG6RwvdmwwjkEUczhJMLrWyCZVQCtHy8dHnVBbvCnkUfMUTkyLnucJz9r",
  "key20": "4dxS5d2sDuCA2WRwmJariJRXAGUz352tQ1wnvmzDCQH11rMCbnWvyCpJLjJzMwPwFpYj2R6bj83s37jbBa9jbdDe",
  "key21": "5fe8LFS9enNYb1GHYSgz53uwvN7pMqwR1B5wm8jkwWmfzjuJ6y6LNS8NfGi14o7pbYeqLkNr6RuuAFnTETThsoxM",
  "key22": "3cYEQofeU1VjCsz5podrPu5swKke3YCECfzPSuw3re1ft49fbdT9fYCv4oRy8cuLv8ohjwPawd7xWjKnZPQrsKiA",
  "key23": "5jZDmu8zpKBWqbGjKBoT9VJUc41BKfwGr5TBx367qNx9Sd8Y6AwGdaHFXwvAYoWy2mX92LP9AcqGc2gQmiC8Rrmm",
  "key24": "oqeXYCeWCUEgBx3N7bk8VnWDi2p2HrTqs1QPVysShvK3FeHpoRnqGwuSCdaHeDF9BsocG1gZ2Zf9o1RaqTCYd51",
  "key25": "4rmAH5axa1kUDP7HRrcVz2t2QzgSupWn4i9rnTi2TAMM8owGP8FCZTqQC1NSdcmKcc5U2j5pgAHq8YUBhi3WpH9i",
  "key26": "4gjq5RTQdjG9d33yhVxJ4E4Dfj6jUNqvTvLSRQzNmAKyt6u17BAqMjbLQhTXPKuiN2JscHSmX53rGSTc9gr9Ch5x",
  "key27": "5m47BuemPRGZFBbJHLAZ3Vhw32uuto19kGzAWaMVgVHhXEjLpiA8gWstwocXUJDGJ4fZxNBuTQiMHRULeG499zCr",
  "key28": "2m8ePTLNqYTNccjQzjD2pZW7VdxQ6u59K6G5YFfepKfazMaJAgH6ksVxNveLNJ39WGVmaHDztwGKxhMU8XVsRTAe",
  "key29": "oEkCDhcvs6cNWA5mDxFhWN619ifEWnqzSMEX2mrKFWnLBzQYwXmX2HHhMffv1LjZatfAa7X56izQ6y8gaGLnk2v",
  "key30": "2zE2yHYJsJ34xFy618JeJkHJiMFASvtRfHVdUznfCrsnb19aUgaWN5r9f8HTKJuBVfNEd5qt1PJZBtYGL3ssuEiX",
  "key31": "5UNzrdxdDGyQUidXrEtntx1x56ivbySnYUsxeo59wxShi5Z5UiDt3EE1ag56nTvoKZQd96nmDxNZEg6zExwYeyoB",
  "key32": "4uZmpTJ8RzLPkuHefFRhr9uE3MEARLuRxy5RqF5UZoYNxB2Y2fqr2q3Z2bHiaykG2oDgfuDeRPWTAdXhhgg1CYio",
  "key33": "42GffdTencjYufuJTUFffBRfMhUFsPq5yycpg5vPHgyEBXPpk72DovW5yHcimiXCnJCgaCSb7PXwipyca7vaAzku",
  "key34": "4ygA9xkPJ8Z3xCkWkAgF6Z8WJVnDnpYtNShT4LVaP8RrNbbEHJMhfzjh55ucyC3RKZzModjmxkkCsTmQTxCHLfFj",
  "key35": "Z1FkrHygmkCWNZ2Nb3zT5rDxVM7EJxgjfkV6M2YN6EF7Nhqnd4vpX3oowF2m4y6Qf56gRXN28F733z853YWhBRZ",
  "key36": "5y3sJkeBGKh43Mh17LhNjTxiJRNC75CJeWLdUAwvP8Yu7U7mjQSPubxu3LAgx9kcQiYrAA3KTvv4ooDcacfwyRTb",
  "key37": "58N98rf8rKCSyUJTSurcvmi2Yjv7PaPr79XkcfP1k6gaQTywSZai2siNaYBdFj9s6aJBuDsbDmvd3aSo56kzFWmJ",
  "key38": "4CMZMxLLsGiV87cVPEDCi1jhboPQBExYQLhbF8F6AG1oFf55S1ijncDno9eYzmb9pMNDp4rnKbekAbx8HxGkjtu9"
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
