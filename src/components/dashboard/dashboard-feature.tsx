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
    "44xCeSra5ybMif369U54UYByHpq46X5JdDgYgLt9E7ZoHDrKqe9bs9Twwiu2VMrTtF4rqTWqw3TdyazistBcU6E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BG6NE9qyey7yNSeydYAWgyeyo6Du8VvzpRkvxChrsahNKabcehpPpe76WyG9rvf32JewgbfEwZidaBY1m3P1V8",
  "key1": "4kUWJF8doZp7nZZbAGE51taDU39dw3ecHktcVVgZPodxvAJp4HgU1PR4a2cYoatG576RWxiag6RFZNQks2wu21MT",
  "key2": "3N2fzRFrKw7tzesu28EsVJgH7CViVHJYZtzmWv6S3EA5CqrTLJLCvkXzsbfqGgbXxGfMMUgxbMs59BBtdAcGeqao",
  "key3": "2pSicDWtGL4ZBgPS7tpBhVejNmVoiXWHEpLA7zRceDFbWqCNimdM7AvJHLtevxEujvuiCKBJx3KsdwWD6UbCU6TA",
  "key4": "3fCrZw8Sdecncm63sXnkLSef5VX1HMkoGUMXE4EAkZa7vut8YgaUEGHJXuu91bEn2EWnn2pdmWeUTGyv1rhkJfsJ",
  "key5": "5FWDJztbjV32cmrifH1Z2tBNNF3St9gEREopuDaQyEnyxn9aTZ7fCgtcXDq1oLh552X1W9fNLi433VU1oyrqKut4",
  "key6": "2Qm3kq9dR3uhbbbDVJHPXbQ21NCwbwWrEhZRw6kD5sSD2SiKqE3ua8i9ywmkmFdYGRHqpPA48US5dhhNiY6YmPjB",
  "key7": "DMcmb1VXLZsDwHWq58unQrMbHgPgvmv6qHFcZjHD4rSAa222UNQdPrtzdLPXwcFV5butGWNLSjx4oMQiPxx4DpD",
  "key8": "3nVDEFwv4WPf2ZbV6mDCyjsRjwwH1heyzWwTAaDWLNWR44GdAbJDJuLnhh5JhqFDtUavuErBeybJcJirhcU2VhAq",
  "key9": "2RsMUyHaGWRqMrpwC1KACiUyw4tMoxbsbrYj1ys9h7SCqBzFxG6pxKpRNmxvL2UjimooAWtTAyEiR91RA6Q19LBD",
  "key10": "JRXiQCbSopDXASj6iJvZ1quR8qzwmm8wFdNarypm9VSuHARJDQCk87XhDKwJ5zsFxD5Hd7L9kkkgnBDY7o8thex",
  "key11": "4ouMep9aMMEtGqRVyXjzDhJDrBZ9543LMxPKwdmUAPD2Lpp4S748h7iFBUR3docmm7TXcqg8NtysgxxFciXFGGGG",
  "key12": "4ajWviprJtot6WkJiLaZcib3UFDmBUYw68D9qfw3QPPkWHFUMTEDLn7zSt7r1XTDH7TZrj2TMRyR7CpZAS9sVVrd",
  "key13": "57jD3g4u3gMiWJeCZHuqZXpLoLYfGi4YuBTuoq17PWSs24sJhSg7uStPAycTFkr2BfcAVPDxCEsmSPgVCXF5cSA2",
  "key14": "LHQCbaPQzGqYBE5DwkptCKV4paVBuUwXcAoKUK7fS78KqCqNerHdUY1fMc93djHrcD17Vi5CnFFDe7KX4fTttj4",
  "key15": "3yZB4RbH9LBZms42VqGhre5XoFkMfgy5Mo3QdCuepMYGtyepK8y3EwN3rWduFR1AhEVfcdWx4Pc9Ud71SqTXoBbd",
  "key16": "3GwLQX7o7GEEV9fUhEsuSc73D8nFH9R4DtYDg5VS3QB4BcC2mSUtnAEX3xTCXuQS43KcobgRZkDnFm15AWmLCGyb",
  "key17": "38f9LZwKcUfhQXtGs8UdWPvJc57jwB1e399nRr8mg9hM5hZFc6SrLqVMZVzvpJMXcCiifTDRdXq9rQbDcfpUVrAY",
  "key18": "4rZZrbpSz7591jEzjgwZY4sLfpkCv86cdLXJKJcyuyZMmfDKBe9PziTrwoihrw2HJXjUz7gXZp9dPxzdAgxaPGDx",
  "key19": "5Ubz8ysrYUEmMZcCZLvmYv7egGPidWpLcTWMJ1dtAAgvUHz6QWMgAis7Dosi1WnZSFn3ZnboGTfHB4rR7TSwfe21",
  "key20": "aV8YFTJsn9f6dxJ7UQHJEk7mJCrLsW23Xrha4dshuD1EiqtbZiJoW1aFqrVCCzZ4rwD56De41kHiZTPxWngKgww",
  "key21": "56nLV1QUh5ft38jmbwq5Bm3MrLxA1J2TTifS5LtDnGCboLbn4hX21D8vxoonTjHhQnc8EPhcnGCsZMhcBFHP23Ea",
  "key22": "ngT8wSicaimvufSQvUyvEGeocRcw3DdGBbE5QvLhhEKpM5n1nkMu4QiunX8TeiC8xdu6uovfchorRndRt3aEDBY",
  "key23": "5u826BAtAniJ8dk2Gn2mJYn3VfD4Y9dsURK9HxGCfC2rTPgokizXFuweQw6dFoLHSuXAdqYiJzMEyBuovwmnBBbD",
  "key24": "EDajnAzAmSfh3Z93t4aF7JRGLCorKemkwmKLS8hLH8QjL8yPsHXPVzx4sLvtPcHhsJNqHbopjUUGwtiJDuvhDDx",
  "key25": "3ia1Yewdr4ytCytBxwZ9NhsDv2gcKdZb3sQNJHxaNXSJXdBdU2UwSerAmniNAhYhRpL7e5x5UbqtzoQyvWJRhCte",
  "key26": "2jfXtwLzbKauCbcj4pufFGGnqcVeutGcokrP9KN7NTs2Sw5AU6AaZWCdSwKXxy7R38cRytBduV8aX66oTPvbfMF6"
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
