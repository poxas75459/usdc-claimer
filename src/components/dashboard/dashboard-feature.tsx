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
    "mhpPzBdH9BvxsvvvSiAgCLmbEnyWrTMfNik3eeevPf3U9gETUatwE72vMSEAxrkuXcKr2za136BSqs43QtZkGuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Y5hDSJ4QJQUXxgeUFpvE9WXkZp86fX78QWtkWz1HzAZ92SAQoRyNUGLadVTs2wNXudNoJrQ8DSpzvqboNhuKVJ",
  "key1": "u7XfN5NdwfdD5fhUtHskyNKodMhgNhVM7tyi7BBXNH5ajk6U6ydhz2fmwn3UwPk94Y6ZEBJNawALtCNFjCyAa3F",
  "key2": "3VqX9xJQLCC8E5qrLMH3ymcozfXmx1o12yCGAUZ8HJUw8i2XKwnETqkT7RPxbsDZMGaQ5VdHZjKsZTe5JU1PaL2A",
  "key3": "2Wen34FCAD2SHpDUtkbDtei9yVrYX8A41i9KGpVxHgqKYzRoT3tUR7SZ53bseWo9ApQ19AD6sUw5ayxf3zwUnQgy",
  "key4": "2QTx7FyRbB2P8r82N1tJBXM5NgoTiU9aDgPHQRm1Ua8ESYPSyHc6pyGMJS2r7LeR1LdYE1Q4fV3847B6QGKzDWu4",
  "key5": "2oaSwTmBJGsf5ngMvCTFjdyioJLmYUsK9iKv7b3pXr8BgbckWLmS9LnUrEk2pFj2rX5aSL1TmFdsWcdknD7izCk8",
  "key6": "JJRVEesXxA9H8ddi4Ncrm8vB6pUiyGaf6tYZ2XvhCBaRCdTPK4uA6wCRVMbzuc7QLiowKVVqeHw1oq8DNTPsHHs",
  "key7": "7gnbaU6DeDXecjy6cREAwUnhZVwuZsRrMXzdKERUdkTKF2F7dpkm4TX1FHiJd75yWcDiKPYcFvLccsS81hSQSzm",
  "key8": "2A9kpZe4TJfqJJXiB8XiQS4SprYBAzXQ8P5rQnzxPNkbNNqjMRwsjvEp3SZ1AU33ucuMJW7yRwjzg4yA79KdbzYB",
  "key9": "4bGC3dhDQaSBtw532H7PLEg4aybEyqt98xksfCzY3a4J2oRv6rxPT6Hys5umUaLbBWAhQ3pDJXL2vR1s2mRmQKRP",
  "key10": "2EBpFQHsi5b8vyrN9BoKXNY38mbXPXGRPjsWaiK7jq6VoFs2T7LHmYf1mHNVW2e8JUxuhTGLNnZkiVhaFJsVZqHz",
  "key11": "E8hokmHBb78iJQ2w2cW5u3ZTgofmLo2iX1qPjtqqbjytDomHSoHFP7Nyn4PGaspGV3GZxGNPu1ZoJwHzkaj7Dnh",
  "key12": "21jWENsdKaZzA6H6HHQzQ1HYPdQym3wpAzBstdi5iRpYcb8A3fj554s3pYyHbgF2vxLUNNkZdGtWgmUrREMaN2fv",
  "key13": "2BcC4UQKgmZbVHEqtqtGRT46EgtPUUHricSjHHnmSqob29i4oRU3DdVf5BFmomPyP5NsyZnX4u4dVYa2JZWogzhc",
  "key14": "aXK4EcTdzSE7Dy7XmesMGQdM4mR37tUpxaNv7AwgCnWz1pvUDFHXGCs5PTTKqzj3GeNVfMjCwVHJzKWixc7FpcX",
  "key15": "5qWb5qd4LxvMu5H1Yu5qnirfsWiHXzFknYhysERvR7CmXCF1bSXK8mFV1ztRoos6pFQW71htNfsC3uFP2N1R5KrS",
  "key16": "5XLzSTAyzw7mCJ1JN4Q1ejpqjHxULsvYyVF6zgh7f8DNRMGXdXaZq6chb4Zq37mqLDpnS9AXmpDuk39sHHTeuc68",
  "key17": "57cQqAxVfPZkYYH4oxkoyBbcDcyrJdf64mZRCApC1Nk8xLvdXG7Duknr2naunJpfwkN74wD4nxrxwR5CcDbwNsCG",
  "key18": "soYLB6weJFwULfU9Ap6wccEigXMxcbLSr8jgUwDHyLExCGRyLU6u6yGr22oi6MJtPaRpTZreufjU3VHRsbBGq7e",
  "key19": "5bjDiVnhtDGtu8Zh8vYoSW3fbFSUodh7yEv5Qcqs9idRqLudh4nHfiGp3x7v1F15yUqjseHqvRT2RpnAHWkr9UVV",
  "key20": "tGPTqqLEA9TjTPQanToe6M35Amfs9cuR7A3hJJfQjcxzkMJBhSbk7cZoS51gnLToJJQ9CiahqKydkvZnpnxRm7h",
  "key21": "4dPvmtdh71gZ51bdi8ReQuXLvh483Ad9LhAZX8T3PTnKw2L4N2VX7W8coH9unYVwo35122UtEa8Mk7nCJDqbfSsN",
  "key22": "5G2861PHdbwppwh8rjTJyZAPeyJWRfeqEMSyajQq41bMPer9G2dVuziJUM7yvCMnGAH2mkSRbX4WPsiLFvjdjfDE",
  "key23": "kHsHQE4suvQryfkCj7N4UvdogPAEzyWLrAF4D12oJx1ecH7cypHPH4qMsMuubSFzVNCeXiBCNXSMevqN5ufZuv4",
  "key24": "J5HxHkjWmWXT9Ct6zEeLsNdRbJKQYXhUS51JCaX4Eg9R3XaS6ueMaaHWceDnDBtRHaCzmhJrn5NCekzkijTy9JP",
  "key25": "gXoFwbEyWgcrrCgHz8Ay7TKxG9MomPwEs7pCoUB2JGhVAMPcKDa1xmrcQgLB6E7DebBmpNWVtZjFWFijJXbwPbR"
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
