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
    "5KiG7PLvGLaZCAqvWpwfCUHvhLSxbNwibiJqn8dZqgnkt4eyh8iXn4sf1RRaeypoaFtz51mWqpozPopBGoQWLm6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfFnZXAy97MwMkp2UXqJryovdAj8aTWxYcwFiNYzYRJtCpDNuNWATMgNuZAk6x2joJCCzWrpVWPVotrJjWUw2z8",
  "key1": "2XeRWrdg1JNLYN7N7xMdxpqeEWY9kf512Y4d2BBMrgRkN38fhGhg2Y9FKNJ4AtRpYv7crvXM6AbvtMB7La3WFuNS",
  "key2": "2qQysfPtHewdiYob19fgHL77LmaoHRU6wk1QdR1AFDu593pPgJHZRYtfCoWWzm8XMFVzwPLNcqNAtGrLL9ECqEMW",
  "key3": "5shH5Fjt81nRF6yHbN5iGrbesas4C81t2c99LctRNG1HT2JupMXSMHQWhEVuTTzDGxmcczZZgyyjJAsWoP361F9S",
  "key4": "2JvYajXBCStzzR8y8Aaqos5xXTqXEA4uAhkGtwVeuQJSQXFD5RyK3cQz9T2LP4Ravz26te4LGm1Z9eqn6Y8DVrGg",
  "key5": "53dPTKB3uTkf1TQR8BVRWJ88yTvwr2We19YwbHP3o3DFxNooDaoK12EMcKuvtsZWz6j4DU2ZLgbNS2vr8HhBtqe9",
  "key6": "5Gv5yRLg2iGfP6QAHdjULhJRSEfgAyDB4KWmryk7VBcgEGQvEGCNr1FzxcMj7wLTqFGUkXcsD3EB1Kk9zf5KrvD9",
  "key7": "3hGakWYqkfgjMnS4baBHEhRpRJTJwB4vxNMQi9Ri7GEuFs4pY9ECDbcoVQbCw12inWG2FuPe9XCcM4CdaSxAiF5x",
  "key8": "mMMeMV28CfmMGeCgQkPSwwdR63xD6QomGCQh6zURZQKPTvx3cjUpGqJb5Qfj1w732P4W75haSZHHd9gmvMUw55j",
  "key9": "42jy3AYvGnknk9fcdWvGUbZKFSBcbrvwoirF8cYwecXDUEtjiXKZ32LLPMUBmoR5CvybeMRW3997goJbddQwWwFN",
  "key10": "2UoipMiABPAzfdMQERs29ytgShLhzY94M6U9jh42uFKh6kLqywQAPnLueJPE2ueT1JcnXXJprVXnMJ4NWzYfs7ZJ",
  "key11": "121MZXbmk3RPqBzP1261qwSvngZJ5PAKytLdpyGfbetJNNqLyjtJQSxtwSfdvxA3veDYkF873nk4hfwsjXkkrgdp",
  "key12": "2ggDekUHDrtxRBRK6qKThj4uczG8KD3hNttjch5YQyozeRNQrKVNbmBC2wDW2UXnNPkzp46GZsxFKgBMj1u8pBb7",
  "key13": "HxosZGtZ797QzBTBhzW64iL7SySMfGQStXdfCXeV1YQWmRjbNkMsvobzjR7LjV7TR2D5E3M35kvSzegSt3GGHux",
  "key14": "4SocNWvQimQXhdetxmbZBX2m3kSGKgEMapL9Wc8WehQ4SrzMrZvVvZA6XHn2PbYHHWBoPRMDBu16fYWyQBCKpAmF",
  "key15": "kovp7SSrAvg5UKw5uYkW5DVxwE2JCb41jJ1YkfTUL2RuB1Qbo5RBGiwRB6FLYoZ5MWyxx11oMjp6LjtUmeH96XZ",
  "key16": "3HCWFbcH2DCnkkXbXVMZX5rMqtvggvqsT1ZvAE7LhRsscb3jZECZvEj94X9nw265x9pU7oGMMAi6o5LknQsVdcid",
  "key17": "GZKTVQMTaeRDhNfXN6bk42qe7rjeTopQrTKSfr9Fx481SjQZq7kt5hhJVZkkVLi1HM88Bv5KtYMtJZq5eCy38pD",
  "key18": "2JiCzEgNrnMPtsFZc5PQKA2DzFtLe6ciUXJQAKx9hD4fBFMU8SyJABSh7sUFd7cVGMBaLquVmN9T9S6rxJMwkrCe",
  "key19": "4WfWnecB5Z3EP37cmjHxWCfKmsbeNwZjdSSagyG1xQaoiWns6pGJJWUSodpTfMHP2pHtQPm9wdbGdvvFTt8UfZvA",
  "key20": "2r9QKGKscg2PcPStdeejgUfqa6E2EcHVSma9ftrpLkyeWHFRw2Qaqau9K5AACnzkcipTHUAiaEgUhLYBR6rjfF5D",
  "key21": "2HEpv4XnihCEw85vTGz72DWy4C4vLtAewSLPTBCpmkpT5RU92E8nBQPYuSbuWmb7W24yWHgU7H6nTzyyrf1vMuCY",
  "key22": "4zpYW9zmpWxuQFbKAGdWAgjqSpUBUcXZ76jWqahSAdvavNiM7jNBn8ELy5G3sW9VtdnMuZaYotw5dM2s8WAXJEne",
  "key23": "yD2wXZy22bCFXhgD55zJfEj7PaAKJzAz6wbedduQP3KyYuYzWeMuMnuyt9ADnGf6H26BziubQkgJ3LwhabTowpi",
  "key24": "3dxcJSF3CZqiP5WgNT2TZc8aJEhzctVy6YNQHZez6cj4uFafJfNdMxzkjfFS7cpcRKu67fFbQaX3xv6QhYP1qq3D",
  "key25": "3pouSAHctczuZcQsL7D8Ck3WCR2dLwB6EVoVk2ReADArY3fdtLHQGsDgu6UQZya2msmxZwgRsTzqx9Ft34Wb4Qec",
  "key26": "44Jp2nzAn9Q3VrLcVXcL9yBkX5kivbSzLMmm4wjEnTj3vFpMaiQbx1gSVMZc8cGCae8JLfcGGec8QeoKqWfSGFsk",
  "key27": "ScLV3XuEh8qgJdo5arQeaEsyASmhgPffREEAA9JkCVkx123tSyPtZ7b396rPtBBQi2CgW2bJ8SDqXATvwALuAgq",
  "key28": "5aaAc6AqfygpH17J6FrqRLHBWTxsRUdQ2nPvzm2qdpSMV3MjHhwRmdVavvor47fDKyCh8iUB4mFYjpr5hvVKLWcb",
  "key29": "9VVfSQp76NQ1Mo69ki3E3k11cQ9xokEWqF6JHAFCo5nBdMibBZ8TSekt12gQvPbWrU9uxWyzKWtgsLXUByCb51m",
  "key30": "37hvdUP3Jibn7eFe9JbitaBJy22q4wLwWSqZL8h5AArnRAxkCKaUoVgx2AW5U5ASbNTMPAPCKW8WU4TNQ9o8zYDs",
  "key31": "2Zrosd7KBW1g4KZqAibSFos5Xp49HBL4Fi2BWmqmdb4Gz7NLL7HNjtJ5z88fUuRTkY5YxB6N6ai76jjrfNVSPqFz",
  "key32": "5tEX1kqQ6uaHtpfjQvCMAHooh7hNx5YAUoLkHEG8Y1WQpH8FfwJx4kUbxV8kH1bYVn39ewtFAn74vx4TMvSeTVqB",
  "key33": "66zdedGGPN2qS2Nepwvpei8RKmgf9fp66hTCargLkfuqrDiz96MQrxA1aXdaurYx9khwtUbEiX7rtNr9FoGWe4Hm",
  "key34": "4RZD4va8F5H1FRX9SxrjWFBhiVhHQY3GvcxyXUEDyZLr8NfyHwt2KexNoMHu8X6wQoiXt3e8qCrEks8xFzj6YidH"
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
