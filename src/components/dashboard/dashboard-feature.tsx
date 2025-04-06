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
    "4WumyvqcUmUhACnNqNhNMxc2C9dKScd8ter3d4iGEguRWFQBHP5PCwyvTaetZcXdmRn8vtUDcQztXcgV5cx73ks8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RpB3cdtH5keDcc5ksSTB1HXo6agJN6PdJnqy4cgcorYNKgeMRPVRMp2UfiyzuPPAzLBbN1LGfCWUfZUqEi4RrLk",
  "key1": "4QHMsvnDHhZd5ZwaGQSwaKyuw7HyJW2prbVRXPD7C9YpdGEyzAGdRUBxGJ9veP4WsQUkXgQVRp9KgLtX4BsPzS5u",
  "key2": "3Z8qmoCAB9ijxFpK6Ze3mNP3cPr7PGxUkDJ91bcqFVBZDLVELNDQhmSaQQ9wCjS5iH2jLqboVztFgJ687x2qoXae",
  "key3": "65wcpgr55RKXke9SHAawSFK1Bt9kkoDK77obHtbiHCj82hoGYVHWThJZfq4xHkR7y24s1B1NZ6bzL7BTunGhHNZm",
  "key4": "5eLSTFY8g9G91u6Go8g9Ku62GjnT6RJqzBy5YvsAy5tLgA5DQ4s7amvXF3iburqQ5eFagDJQ15hSTe17Qiww9YYu",
  "key5": "4AHNQUy3X2g8RxsW7FovTk6NQPLW3k3gzkUWQ224u6rkzSBn5s3jaSF6jG17CUjAhPvEo9gAinUTbUWAJSRYQV95",
  "key6": "24bBRokktWxMp8uuB9rwsYzbz81zwMdkA5JnYuwtE1eLB31a9AeduBhEtnWS176qNH1qLQ1uAjyohpSV3VnHjpsD",
  "key7": "4Q7sbaxbM91KQ3PkmoHZXbFVuzYYW9Uvx6gBWEKjrzgTonfzRLz5N8wBjhi128H2hyDnUJgkyRu8xtAf3CeWa6ps",
  "key8": "Ny96sUqe6v8v8pwvZh3MbSXhs3deHfBr6LQVsgS2Yp3uZR9xbAgSyZmAcu3Rso3YEMAxVA6LtdZyejCruBxwwZX",
  "key9": "4M6yWvtiNC1AKWUn8tY1gkBEtMqkE5fUvqseeRv8YZd3ak8kSkucExhgAjtesn4x3v7fgsPS6oBpisWHjzS7Wb2V",
  "key10": "4qcXDELtCimVfGUV8JJmkQgqQHqnFdN7waSgRPPhJyoHVfTBzeg1q8ZjQBrfp812phMUhsQiW28owpHt2ERCcsEy",
  "key11": "2WFdxS3pV6GEcz4ScDEL7ryjgXYtxZim3jrhgrMMuoagdcZWMiMEg4uHYA39C3rDN1mfNEM98Ty5P88p4uWavCig",
  "key12": "FDxNA2FQhQSCuaqTdX6YgjbVFsA14SppQC34czGLmuoJzEgYeGbkemqpzCdC521WF9noepWeB2Zj6aqiYt2VAT1",
  "key13": "5SRRpWtwY4AF541F61ADgPju33osQqiMCViAhHpVXUyAuRDjfiG3echQy3yVtYNG5LTYRU79reVgfpm1Ufgrw9k8",
  "key14": "4bru9GPA4Zpd6uyNXP9ftFbcooz2vJQWf4C1zpHUsYHJuTH7gYFd8sCc6gVm88zJaeVWPDpuK2tAJtSTsCpgRWmo",
  "key15": "3CKbwW8AqVs2RFcKwzYi9E2amUkDaqGjFuT1qkuYGw242Pw55sMrxS3mhn4RtwHTrdof3FyFa8ngJjcJbdSfk5LP",
  "key16": "9dRHNc2b4yLukffDgpzFptZzxSYzXbzFKb32swphGkS1Cf7sFhLjptMhF3CeN5WqDJBGNasxdVA1cVhFqRtqXpH",
  "key17": "vaq3nDKczmoKX634nUEfEBnsPR8BWwMuVBpeiMxhriCKC7oDBHuW6kqXYztjKGG1cweGBnyvHrAYprjzJtqVf6p",
  "key18": "5jg9PWHcRjNM8J2JwFW7mkyEo8Y263xEEbEtgMzuB9aEKvPKL4c24MoxhoV7Rd1QSoJzuMtczXY52ePz5q7nYi9c",
  "key19": "4TZM9JmqVDmANvVudJPHoM68baR76ukrWLA2JS3hpBbeeJFcpC5a9HtcDHPdhh6PT9uFdUaHyRfhUs7EjXuqw1qY",
  "key20": "uTtm6RYdCFDcmEAeQb1S24CZ3CfmKJfxu4Wxh5yChVthQB9p9sBq1NoKoTk4FB7yzvUrPGrwrrrW75BuGm7LAmq",
  "key21": "4up993qRq1yqyb2EpavWcxkL8ZQwLZGTH5nsHzH6aUQFcohyumKCxJzpvNw4PBoLLKntrFTy27wVK63MAp1RX2BF",
  "key22": "4aPdfLzK8DNJhmz6S7VWdZM1bH7zjBJqgmDwW1T43zQZ9Rn6BhqemP1r31NnzvJ6SXjZbtGBUsHMPsWKo2dKXsdZ",
  "key23": "qaJUxoHCCWwVjXv6XhK6MzSkaCtR6aYyRPnDBQFrN94HmHXLyD4hA8Wqkq8VcmJAjxckkAcMEvUwos4x2HCPUK3",
  "key24": "3y9A6NXvdrbvJYpYuoRMJx3tYUCeNoHukrM3tWZVNZqPxSzdW2DJCJtM27ebxXa224oww8R8VRq2pdAbKTAUCCfs",
  "key25": "3HDX7NjM7r4isdU52ou6jXSdsZBPXp9PDwnKNSqqU5U8hayysyzR2zqpi7y53dSXECKmctMJqaiUNQKPEE58GZDn",
  "key26": "577cjBy6XTKSsjorzbkE6Ya5oojgv8qULwc6yFEN5tkcJz3fA6UsXtAhSzsNW63Aj74ESxrDSXBTckQM15Yko8oQ",
  "key27": "2PcvJMHAjcBVUDLFLgmXpcB1h8jdtbYqvtPKDWRCu2BRdCjhEwjUhDoexc8jsaea1MUawR3wjSDWw1eiNHv2haoZ",
  "key28": "2XFJgb7PhgeD59uWaVvtqxa9vR2znFZTGaewDuEQZhoabEBJP4hSPTuWhb7xuvDqtQMvES7zwpzYduYNqw8zWqpZ",
  "key29": "3BdBA42TYoAXTXUDKEzoFgXL57vYWhsx319pH3E3svYPuBTpYkVqzBHY3rTjQB8TC4hxmjEfWmjooKivDVT2v5ox"
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
