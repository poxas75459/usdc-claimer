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
    "3dsNiqR2FuWrJe9fUUsZdkGYV9Ur98VcQ9BArBeZv6SsNxfjck3tMk8pCv36miNgjhKvtrhpb3ZyEwrkYYYrHozL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22bbCY2WqS4r7WWt6v2V1KVBnjUuhyQM52Q6vy59Ff5UBUzmc57BTqYPxCsbM1p6RajHcs8WGVNPyhnLuAgBJghF",
  "key1": "pQ3Chquu94xCAUqsHE3bhxfnrtqt6ozKpmNKYHckVPMArb2pChCd6W43Apf5pv9QbqLATZPkpNeH3EWqnCaSQsR",
  "key2": "4aKVWBt1K2r1VPxiNDLvQJwyD1kaZ4HxvfEeJsY5BEp3tkF8MH5rLfhy7zA9Qc5eWiXCc5bxh3k1fTwYuNMzFHp7",
  "key3": "5GSZdpmqxBCn7SkVgKPGKWdUNQAAT4hTLZcmLijpAdQ8oCPHXbPMMc3bcDBUzoT556XNyNHxbwNxeabLApTYfvhG",
  "key4": "5Q6wr9BDwXQHG8dNcmFCMAJHBCj3Vwto2Y42ftMJ9u6VgqkaFYVVJdtjF6VHUJpb45GBNLhkB81iTh9LGRpaSRiN",
  "key5": "2aHgFBEacUJZ3qY8Bt2Hue3DEs68FAe5kYYK6NADaZsSa79FDy1cC6pLST7N7pMmxAJoVBF9vbBEhf7DFDqLwTHN",
  "key6": "3fHT6zdUP5qmN5zW14xo51YDQzisMw26pHpZuFQLfNNcAtRdhiarLM1rx8h9Xq4oud2SRxnkvey9YNawUGZeMuaZ",
  "key7": "4THQ8JC26jtbznhaQqrqWLkTjKBZRNns258r7Khg7P8Y3U2rewsFCbqFP7RDaV1fwriAQsdVW3vrLiNtv3ojMB24",
  "key8": "3DHQBWHWLUcia569XwkS2HrDBDCtEjQ7g1amXbYkqLUBCsuKLWmud4mxe6MBYFF36Aj2EymdaWk7kkfBvZFwK6mx",
  "key9": "3pULxGCGy1F7Ey2bYTEfA6eb5MBfTh1bcEbwYSfQCVz3mk34HMWandy2Jz9KsmmxmxKyKc1ENTEXZwCgkcPfENSs",
  "key10": "d9F5Rm3PS9YaEGxAYePjTZRQ7GD58vxAMWZeYnkUsT6xzGn98NqK9CTWnU5psBb3kRGzRNZmcGDeGJH3byVmi4V",
  "key11": "3jz2rvzSw5ubZ5rikDdR6kgf7rNL7hzREKksJtSD4Yx45rPNsJFKjHjZyRrPxwb1HiBYsZAokhXnJKxmzafSDRq9",
  "key12": "2dcrD3fv28vDRnLQYsWdvyhRETAYaa62YSYCrUq2uGj5v1FiZaRx7DAPKoHSFMx4LXqW1wr8MNLY8NMepC84r8gF",
  "key13": "2jm2SUTjubRgU2LPjtF3QfR4wnAMreb5RKLSrn1YnFzHnZkCj4XQU3i7w85XDqTvRzNwtLJ7AfSboyEUD1BwVKnZ",
  "key14": "5QVoknJ3E6oGYnsuaQCBvuWA1XEWNZ422GECtwCV24gyrsKdeweCg2fKs3YGKA67FJRbH9HKyvaWyBJ9ieeG6Kp5",
  "key15": "31k5eZ1zqxeHbAV5oaPQYPhzecsCmUY67sSm3gHFk6auVwdyDrP7VnyBmQeEhPhVgEE6UhdWGEhinSwPpwyxmwi3",
  "key16": "2vt2PRPA2UgTMoU45qPb2zCytF7wFD2VceZSh5M3vmBQfaMevzFpCZDxHNeKi9bZ49JknLSQiKPWKpfCHprY6M6M",
  "key17": "3zdfNp4VcPuvV2PtLuRonGsmXwefHzsJbWhCwDJfYyTP4hj7KWjeYhsXWAXvTyuE7jprHsNpMSkquYBknfP9FEmW",
  "key18": "38pZeduXqZHWbzvr5e9Qzxms5e7isia2LmT3589XvJP2dtvHHbzz1uM5DKvzgyzDNZvesFD1foyYpvg1cg34BR4N",
  "key19": "4QnuZuCTeBY3ZdbCsZ8A2Vt776GCnAewcrJMtecYevqZwYkGRyj6E1AstjNYRX7McAPGMkaZGEifMuAia6gaPY9V",
  "key20": "667jRZvTjkJ32ShzryAtBvhKwiBKqTMgUNJ7Ej31z6MweJwCcKECCsLKiRmbdr4K3nPqE4eD2ApWRSbtC3nnu7k8",
  "key21": "2xZiNSckcYA941EnYMJk2X5QwqFMJ3UsUP7fDm1zZXeXGCoxjt352uM7JFM5SUatCyRBCoKLjWCLbR2qk9sYm4RH",
  "key22": "5i9Rek2oVVqVJ49P2cxmsDfobSzF6FfeN3BMvojh2JLRbShQmZ711ohZWivkNL6r8vJgbFKArWt18xR9iZazdDGq",
  "key23": "2Yfw1BMNRgYDh9fB9VYcitgXCG9UYjyNtv6y1XyGsbGfCMkxTBWWy94vJMoyyPRLqwZ691SVA6R5h3n2KZfw7VPv",
  "key24": "UA6gBMtAfQr5KAzUHDU7B9cyJPMooFmtxb7X51mZarTrXGRfToMoCC8misp1CPusvvsDySJkmhhuPkNjj4rjxTT",
  "key25": "5WacHX1JdBaseZCnBrP715jW7z7ScLFmwfrLUrJoLnCpjLTMNt6eeKNgGyyhqsEG8EfawADgmFgqTn9N11K8z7J8",
  "key26": "3BmXgDXd8fr5rAF4rHHhWnotgJjf9Lj8P79CrvJFgas6uVJ8RSXrL3Q884fiT3KqjT3hVxDob1hBErpJ7EscpAad",
  "key27": "3jAiDvZFtzUmrvMcLjd2SPJgnsHxRPws9NZ4v4uHAL5AmicBEPvPdGyiANvDfxrwTp2AqTUhdfMDcM343SBF2puC",
  "key28": "51xrRRhGT7ot6YPMUdZ7JVTmN6w9kEiRTx9YrQYTKvPVzJCJ69v6TezS13AvNWfkMTkfb28RyeusjMxAmydUYSFk",
  "key29": "YsavDMyuqgnVmg1DqXHBfDfNpQ5Y2cn2H9w3mXozikp9co58zTgEhF2sHuvfQEgwYz1JVUe1VinY39hqoeco9o5",
  "key30": "5mUqJtVe5w15R2giWgj1Zc1p7HuHnbJvDxmaU7jFbkJxLzkQxPRqaYSESt3QwbRuRTg6kRnEkProwADh45U3dXKB",
  "key31": "3sYuGqDs8VzQqNAjkujQt4hbCii4KDsddQYgArMfzE9gk84B9MgJHsWNYEMxMKGpGMEYjmYyoAXYJ4fYdzkz2R1C",
  "key32": "2EDiQoccsV6Hj19S9d8NY1UH3hM8ogxAtjmdTzKjYKbUbCbHpA3TYBQTJN8XmWhj9FMJVG4dugXpYu3CQUminiT5",
  "key33": "46rLioCCrqTfpwJ8UDtAFGwhipK9Y9R9JAFC5YqheB2iqVc8EhJNHBFtUA7FHvL8RvgdAcf7nwmq2hEu3ZVN2PBV"
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
