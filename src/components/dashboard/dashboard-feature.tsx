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
    "3VnN4rUxZYMbLNNABZpQDGmunbkWEFuQ3D4ahYH3TioWVHZWhYxN3oPxfjrcAicuNkYGcvxGcxHzWHHPxfWimMag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35oG2fBNeTJvfiSyoer3vrBnb4dRwFgHnPCTNZyBfAt9qVYBdgufhVmuSLZYxZn8v2mPJHuus4Z8LSHbnUoAZsQo",
  "key1": "1bVYbyz8Dr2uNwVZtEKfBNLoLrffG9pPQpEDprA3JS9TAA983bFk9gCs1qq2SMmQceyHMh9Vhbw3w5kTNZpHBwK",
  "key2": "4KdYbaqmqhhRTqBvM8qBUJHZgvXNyVGKGXgsGL2DC55tNxAJaCn4oUmFgsTA4WDT69HTYQT2YDeN3KbHebAhX6sA",
  "key3": "3wvPz54H9BqDcdtb3kd3GqCM3P1hw4guoNsEuz9yVbnf3KNENQC4cMVxMVHLCT7giw92CQMhP9syZn2QbUg9Mpmv",
  "key4": "4eeFZzeaqa9KNeRaCZtnkNcagoTNGDUttHCb8ZoHDd6sg1gB7FDsGZkBtCfrtFrJAFJs4DuxRMJYr3by4d9DvpYq",
  "key5": "5Y8FJrn26jogPBpy8s1FeBqraxeiXzn6hiw68byD9LbZoiSgoj3Cthj1HKiT6rdxwMBPdMiEq6e5h9funJTp1tLE",
  "key6": "2uaAnZDxNYGqxZttYRPug54VD3nUD5dcvQh4eHWuSBdsvjNukpkDh8eJFXy1FkNH91mCz1FD1asuGK3khrJdFoY8",
  "key7": "Kwao38K9ZQvkhayUfEAj3o1X7kS5gB2vJLiz9uQRY1CvRaNPPECs9s3z71b7XrLZXVTAyawJh7JPvRoYNhbwhzj",
  "key8": "2CJMTsaHbPe89xTg467cDwYxnVeLvTkHFgjuLzcLnWkw791FBMkFDwF5F87MJAz9nyLwRUWFyasMZPwBQHWinpKq",
  "key9": "4kFM3S4QBRHXRXhSuVn7bBBoKJmUZMmCdahR2xqtsFZmmEjipxh772MEci6YgTBJAux8Rt3B2D7gesb349onaErm",
  "key10": "5CjpyXcEZjREreD7ApuyP8Lt3REVZFoYNF7WwZUFA5YaaTSw4igUKai4z7aihvLBLn5bJG58XDM9VyWTG48DRfwV",
  "key11": "He4fA2k5WZcqNzsTSFjQYt2qY7JyrVkosEeG2mR8KSbUprqHY22btvpFW7jNj6UotEMPw8miYQD3dJ9PBLnxo3r",
  "key12": "2pwJaiZjNWgdwurCbRa1eh5SgGrcMDQFrXqmQUwVXB12U1wzWPJSwnJ9D1FvZ5p8dchaRymRh3cH47wjJyTCFA2r",
  "key13": "rKA5666K49YXnYVJorvUuVCAKaAWMHCkDExuFMhhjAhcQbMaYp895Jy1QxCe8ENUFzMncNfa37Ki2i5c5ted15P",
  "key14": "2wHTHjesy7xiAM4mWTKvoiHwFcp6WCPjwvGMHfNFU74MkfKzm43vScvLdbKyrxC62rWozLe1KATgU9QCm3RBL98u",
  "key15": "4kTSgdwM1Yz64exPfPtDmTCoh34dEzN6yxSAmegBXwsGLdsDakLMFwnc8QdQqLZnTivLinPc8qXqF6gGAJLH9Xyt",
  "key16": "4WHMqSgsFPqYzs5pvHEqephCyHuVfyk8ZC2HdBXBrqKjGCeZvhcweqxRyaXEia2nE2KErLBH99zgGGDssgWcEYfE",
  "key17": "3dFfN3oyDZvhBNKzQRvn7EBkVt2C6w4ZhcKrrGak7m7uHxKwcBjXStSVPCuiJEzuzHVXmNrvb7Rs2gJ2pMzyssXX",
  "key18": "sgQ316vr9jrNoHFzo36Bb9Md5UPmCM9kC1gBUEm5kUreoKHxjeNkZT1vreBhwPYsz8rjbzvWZX3ZkXXqNUDCyci",
  "key19": "3AAwwo28zmS6Vw63iarMBN3Ppe4dfbdV2DYpvpRN2fsgJoDF4pwb9446wN3pwvkizcRKmoqpqRPZm7h2inuj7vHz",
  "key20": "2rB49HLQWnR8zP1o29F2duU4SbT9T82iyCq2Vx2RwxAyfgwbB7LNdQ7oCC7TQ1uAx5CWZh9BrmtH6q9J75evvfCR",
  "key21": "2TsdEsYRtjGNH1JoCztDUsQyzJ8srK7JBNTCQ5fdw1Wwp8NVsDBNCepbV1PhyPUpWQUFsX6YSfWhcvBgUdYnMxHE",
  "key22": "5xLdzFg3qsDUZRkjL8sRd7aHsLmqvakfTAMmN3jRDDbhi8aoTzCbB6kXNzBfKwPeZeTs2giACoWzuF7tuNBXfb21",
  "key23": "23F9jeiQLfHRiKTGQf5rBtbc3Fgk3TJnbRmNopBSrCJ9eEbixUMw77mYvyFoKwmqye7wgjChignhicLjLXGwyz2F",
  "key24": "7e9wL49dEhfbxXUn3MJrV272JufHN5gC2BQPwiAGCQq7Wnc9E1xsjAyucC9GMvZAeb6d7B8ZXu9uS5BAZvYJvgd",
  "key25": "5DmjY5t3Ax9iEAWZ93tA8NdNEJTLpVJoXSAGs7aEZKuU8ECW4WJTCbn8N5rvW6x3Lwzk5EYJFCdEY5X4GG3NMid4",
  "key26": "36vH8kF9BYWFeeZJT1pcBmufWox5KsdAybDVxfvQRc8JaMr583rA1EjYXLe85d8ZURfMkNaiVbfwQiswAVBGMYMs",
  "key27": "22Y6uvYo3nGhxsuAiAyfhV1zBqaCahR4f8vKJKoAbrHAd5LhB59233fKsU64yZqF6WgLyxVWP89zeaNbQThdEfo5",
  "key28": "67VnTzvz7kgxwWLxiNM96i4gYu4tC9ETXEVrBJEUgbWjRUkig3Er346gEenhWmeaUHVAyGaJXJ2Xo7nU5dWcEneQ",
  "key29": "4NMKeWfGJyHhZyd4FUyzQVJkfwvCW93mahy4YD8iiPP1SVpph5yGcNq7MYb9gWdLw6v4pq8HSpYjbQzUyz3vefLR",
  "key30": "2AEjePa517rap56wgXEurtbJmxaDexGogoTth1fdG89Wiw5e7qypPNsAu8K71cMd4GsnGjEKdQmhzFJNgme7Cmxt",
  "key31": "xGPHyouuRzHnwSXnjYEyE3vu19muTZm15PoXc92uyDrWG7tuR1WcEML9WNpbzSfwYntW5mpRLWENXY2EnvMk6pC",
  "key32": "2ByYjfCqLkPc1k9aJSyzk6x7cpLfHKHQJkXGZoZjvU8gG1UhqUjKokzitd1KNf2WQKNhGK8DFmQ2dV7gdAPD9V2J",
  "key33": "3sqNXKx7MKixtgtKVND4yWdVYfW21Xb83btqDoAiQgXHPmWTLYczeRndjV2HpyDC4BavkqaHNahMbSMu4V9ZTqk9",
  "key34": "GuLVcg5ozttbFXUvTYoeBi7xLURu327K2jaDWeXn3TZdT46h81RmEuBaz3z2Ao7NXMLFBnfE7wDR4MRtsGzAefd",
  "key35": "37gLt3deCBHvZ2L4MDrcoX2eKjd3ciRntbmRJLbEf7iRK8dwjiS4vNChTpxi6PX9h7xFx4abeRYCtg6FRcC9V97R",
  "key36": "3fReEmNEp1LBgdZtccHxTgndkP978YmwwL7g5BTCcxBHqso7ievQdcDEhHpSUaRVqxRKu9rwB2f9jWUwVYFArUPb",
  "key37": "4fYFikXsXQwJP9jH5YV2RBSs8fBGp4JfAUWA7C6m1VhHvQPg9zkuwvz5Sjz4qxkkeyry9nBxRZbjT8sEurQHWjzc",
  "key38": "ycbwTfgFkntFUaVr19iQqDFCfa4PobpKa2pdnWUpdsda3utpGZFi2h2sbnCRAChUUtsei6HpRxhm2xgVyQKJe3X",
  "key39": "2rS7gsKvXYGGhmuMtVQhDPG3pXZnkA82hajQvfS8qorkssEB27QBPztUQFgsti3Jkqn7cEFkFKS7mgPqaa6mHxhW",
  "key40": "U4oqWxAvNczrd63PpUFuGMXogdv4hfbbZ91touXLTJkYcQ2A9fepfDbVANaDPToq3kB586EwgS7j8V7hnC6EJuW",
  "key41": "23Nt43T4riDSFNSMhCCUU8HHVUMJpWxJNbR5g9qyx4U1F9xASGDNdTqhTrY17xzkfYhszUz32yQpNmQsCwtzXYLx",
  "key42": "5AB1YE6RkQe1yWXpfjAfW5fhWpwYUV3kyxrTxGA7iASbvgGsu1RqpekDUadNqpaNXG726SQztgsuZq4L8XR3atLB",
  "key43": "3QbDygfe5mbhUEzQgnEWcqxQxxBB2186FCutUHTdQudzQERPToteUnyn3WM9d3cntofNjuVg5TsKiDRHAQTYdZzS",
  "key44": "23on1aTmPEYATPP2FDkesej5ZydEsRD5Jthr7VEYdyXkgGFw2TvQdBJB9uPaGNexEj6hxhygcBAsVPRDBTfSMm1G",
  "key45": "5A4ywoEUH2QUoPYBDmf163HiWUzBdjpZRqrvnVN3q7rzDHEt39Md94u7GtVJd3Wrih5GXLyPe2whBJERjwGo172t",
  "key46": "BN9QXdnGdqzGPDr1CGU8fiYqoJK9W4ovJGqoRsvLyrCD9VnWvwZWpDhZf5vm5NaoFoXvYMvZ2dLDSkKAgFmagER"
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
