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
    "2KginqiF8aySiAYEHhSLtDMipcPM7VPjjSsjdpGJ3f9UcWavdXmks5GyJZ2BfUyg3djhya1kTv7nqsNgNsrDsmGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFWBWXERaD7TbbnpD3eotVUEaX2CukdbPAAG8PG1RztfYdngbAcQ7fPic2UfXJVWSkAoLuiXm3fGAx4ry63naxX",
  "key1": "4sktPupKrQ3sEqbKAJzFerGsixJk2wme59JV2QXNmuMUe5qzA8o37JFydqCutzuDZgYhoufkuVAWumhe84wj6Qe7",
  "key2": "zkcfbZHBVKKJoD4kbBqksr3MKew3y9KeQuYwLdKbrV9ZSY31NVB4ymf4Fi7rT8jDgbwxjdAUqwSY4UDasxfx5sL",
  "key3": "57YMqw8ZAAyVaa6mFhvCH1a67V685RVJcAkyai41uHhvkB7ETC9s1FyNcHCgHVUBEnJsC4gomvmWtxnvdHS79ZSj",
  "key4": "3MW4DoFxhWutqkrC6fwaE2rsWf6uTZ633mtUxBPQj4nj6emyjvpXATeG3JCuvUEcF1zLSbYbqVJNbQ5ZfcUFjSf3",
  "key5": "3c2sVnpCpjXv63tH1UVB36iXxC8Dzf6X5Ccg6TL1HmqcKFVrbdRjBL3AA3c1dJuaQ4P87gFRzAD17wnXhsLByyMF",
  "key6": "3Ro1jjpiZwyjygit3BJGB2RMHGF8unC9kw8zm9PagAUVyBUyxs2NX4Hgj6rbG4boU1HciG8yVZWopV9LjEFoNPKo",
  "key7": "4aVJWVCdApXDCN27PZHAjTQJrab9DApfr6dLVgcsBWXmFfkop44c5YQ3QdJ53LHzvWZwWqnDduZyAQCKBf32xjcp",
  "key8": "2SBWrzmrCjkqvFWadKoYfv6i16GXhTxLRbv8Qvg2goVXmbMnyGtjCTvGAvqqi4G4ZetWah5sPG4mdU9VaUAo3m16",
  "key9": "tYhqbr77gDJsgJtkkBA1BCMytktiVbjq6KjVGaJf4fhH83dSfLdWYYFS2T1nU7CTd9CSYDfcFXo18Yb7LaGt5nL",
  "key10": "4MbbC58rPU3xAnk4TLKAtvF4GTX3xnKQuEpwH73gHsGq61z56YgNA8sAHZnd3zv2gp7GtYYjsAo5omcunC8tdNAL",
  "key11": "5ooQWtmxpoTcM9FmXEM8RcvN5kp71Uh9DozUGf4huBA5U1MocFiR5uJb2BDu1fcxY2E3yWqbfKoxuBqwMVaMtq5D",
  "key12": "Kcc3ysbCcxyWdkfxjvPjbjAeJoMsV8LXj4d8vgrPk4p5FXBYscq2ZCh83uW7WbhjS8YxHU7s1JQpPNpTUdeYqsf",
  "key13": "2yNg7RLCt2Av71MJhRAyhftyssSwMNcqbGKZG3K7bpXtxaPsstEecmHgrgTTBjCaUU9wJme3AQWJRmEoRfJie7NT",
  "key14": "3omGMyYLg2mTeCw9hsUx1WeYN6J4rRcdP7e2W1QRzRdwBAQgC9ZazJfPzmLTVhQpUsoNFrTEFU75NrxbEpFHog5n",
  "key15": "2ipSCfMaw2SuS3caNM7KLiZvdViYejVBH7rt1vcm5H1KnY2weRMSU5vLcS5M9ywk9PQVXW3bwAssRpoTzkDVhWab",
  "key16": "2ECmB7qQFcxxUDNJc43VnULjCUN8jgh8p8ZRAsJst4jp5X8Hk5dNuzAr6Xbc4oWPx464YXG58vuaXeCUbk5PuPe5",
  "key17": "5KnHdpdUHtVGkE6D1qsVtdqGruEugp5v7hBmK8wM2MzH43sg1QdEgLdta5FmMp1y6pspQ2bivv5ZE8JHTHYeygbq",
  "key18": "3NkesmFfeXBs1Lc4BVFFZrjFah3GW6kR571VdzcFFrS2Z9zRhmdQKsM1xFsP17DUsfXj18hxs9prz1juxUVzt4yC",
  "key19": "5m1RrnXDYhHFH8RhixWuitrvvaB83MGTZHJD3Two7gvNPWofJBoTTBGQw6GkmEZBzGGxvL7WTvFEu4jep5CrLYiA",
  "key20": "4mnRmdVzNN6Ye4Ejj5jhGVm313wHSd2gwdewd1YC4BUDRGFfE5ZkwkUrB6w5S5SC6NrfVuH6B5Ygq7dAxMb58gdw",
  "key21": "2rYUHoshcCWwFh2Jw8E8KFRurLnmae9RaM6WmMs669KbcqSDBVaAEJv6YTCAkENx1sYtBgMj47Nh1k3MSB5s6EgN",
  "key22": "2WnwLhERJztPzWbfeNSDirrx7umiezDtAXcBLJZgRx7dBdCS6mcswEN8z1LTFLoBB6bfuFsPvSTmsAtsYbaXbZ8x",
  "key23": "3aN9BZRrLoaKg8PWjW746WmdyqL82tMAjxEmdr6JCSMVodfMp6cjVrGH3wiB9iGQTqumUTGP3NGbn8mB7zRFukGJ",
  "key24": "28B2w6dHwHQz4W21gR6ANKucnemXRkdcmgWLHyHyVtR85Ty2vUNKMJpKSzJM3vAq2fi2iW7MRziWmLbkMwK4rmdQ",
  "key25": "4P6h3kbsFNmje3anLj3A6LBSLBGd9m5H6PbS2em7sqayAGEaAzdeFypMRE6QoPgyH5ixR5kV6Ed6zfDXE3dDG9v",
  "key26": "5tBFPZyTqo5VCepXHUa5yPtSyLNrezEqzVPXdbp9xEQc7ftQh3y7pc8RiFFQH81fhEmQf1GfC5QfBMUTTiJZ9CN2",
  "key27": "3k24P4NLyEyxzkfGrp3pvwPUDbjwP9PHaBDYUKhYCSAJb1jgdgJP28Qqhpw4bpQwfDkSw76U2D1geXFgWujyJutM",
  "key28": "3pAi8cjPKNQygXeoZdqM238E7Znj67DgSxc71syHjYRQimz2mn8jZHSfSt23imkzUn9vR5vEzRRT9yZdbafRyNwn",
  "key29": "35W71QhquurCg48vF2rvRhguNEQr73sKiPeUDiRjGAiZ3xJJJyp91qb7J3xADayTsCznHUR8qwPV2s9q1KmgoocU"
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
