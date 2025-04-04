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
    "5p2DbnLApLe3ezxbYxTh6RocKXmBZcedMLYumnURdEi4rsbrUb8MrqMNCZBM1sjaohPvyYt4gPFE3eaT6y1q95Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67WCB86k1U6YSZPZ4sYaYYPNyJMBBGywRWi7YzK4e1oRBfGzvS3JmDxJ2aJVaV1LqbiGDBo5yeMjb1wTdMJgMxYb",
  "key1": "5Hz3zom9k5N5xFjT9vSD7LfvfnTQr66iwgTBZSxuuSHbhE9U8vN2DN2hvdf4RGfmvnvVZf4XaLD7nefuFQx6maqx",
  "key2": "3QbpP4Hc1qSLbQCEUgN9b8L92Xo82HSsW4MqihQ5BPpqC4TT6e2TkimHsscukx13hWAQMtuBT1YqMiXsKMTLZXwc",
  "key3": "2gMkHy7PKS8hyCZcLKanYowJJuSDUkgphMrhEEJzecxGV3cgTrkaEm6mjnB3tkBrFKDSG1MeyHwNMMaWcH971Njv",
  "key4": "2owBbtxT2p3svwXTCjzQXPd1xfx7ihV3Zux7NegyvjfXm9J2PfyTYJBjrXZuXpjKrS6GpjvK21szM2kGV7NnG6YJ",
  "key5": "3tazHGP5BG1NpPSw99yPY3w5dCfFCCcHutgZVCn14dM55XruyTxScEiEvtX5sd9oPUfeQeSBtCD2wCjyPfiqXVNQ",
  "key6": "3pFrWbtwub6DkueQPftCxpkySzts1dXRHPdonNFVFob6PdMc64JBGBKBzhBxkpSedFfDHcu8iVw3bQBtumgAe3Dj",
  "key7": "5PceZVTHHYERCM73gqVczbAnzBczzwyNxc4kSEZNXpgQ36orYVpkn72HcGHMxnd7aeBUZrVFdPjEsSgcrHNKKqRP",
  "key8": "2RhsDCHEDYotnutKy1ueonc1f5T9bQGudboQnevkxApX5gLBqP894gUgx4cwgBVjwmr28F5hSx7XHfwrbWC7Xv1g",
  "key9": "5BXYCAEWza27Nqm6QyBK2tBHyvVChF1imhqyvLgCVoasf4dLKLsXgFv6ShwACD4kPjm7pkWsA4cuZJCjsphJo6bA",
  "key10": "5EfsAkL6kuL8v7hqKwcqN5sVtqRnJuEmGBQgvBb1jdaW2mYmUUKLNikaUEMZSvePk27aN4Xb2N1YPgQxnhC9kfLn",
  "key11": "49p5LEtzmcDvy3vL842Yfjs6LRUuDDQfM4f995eoCnSTM8mPZasaV9PE9DyvCNjRBS1HWzZLEun8UP3iw7AcYuo2",
  "key12": "67WRCmEzP6gqWYWgRRDcc83MqracPajA2LxcP3uDTVzLR311xFY1ZQsV9Sv1HZzvmXqB2Zec8KtaJ2FGgXMYiAKo",
  "key13": "EJJuDJQ8T2mT7ZJJhLW7mwjBpKmBctGhvBmCS3YsLCCBxrYXagE9VWXDDLM5hzsY6iTqYM5Xn3FAiia6dMYPpCB",
  "key14": "2tNkezGfp5dTTie1nhmJyrpEMN8j3FTEQxTmtqXEEYVM75d9F9kn6jAanWHEoPeV8wMu5wrQM1KeNStJFRZbqgnK",
  "key15": "qFzSEUMfqbe957beUJNHVxk5eU5HUYuHTEwXRBh4BtqKxtKaKLd4PhDYZzM9n5uD9beRpE8mLZhoauegANdwVCE",
  "key16": "2er8vScRyZsv7g3FN34CyHZU46NXgTnTtL3SoU6zD9s3nu2wmF2zEzuqpPnptQVKphLwwwTUHunZ1QpYdmTRFhAp",
  "key17": "2BqkCTPiEMyuCzqLVgqVarW6mM6S7cgspBJYdjdQQ7ccdRBhJCYSfYeHSWnANigWAUiw3AZhg3G8sGcHDxw1eyg4",
  "key18": "22MjDQKgttwF5TCdpdLxKkfLVnuq5SKjyX6cvR6uRqG6Nu8zARCJEoKMoDF7KsCBi9e9dRCopKQe7CgMeUiwfcV7",
  "key19": "4dhWmwzgXqoEH1p3itBqvnWK5Md2YgPKihkViwE3hFt5eoRGTRrN3QeyFmfVojwESWfjmcDWFSyA9zxzL3nbmYeZ",
  "key20": "Hf8htQA6ENvDa6unHUtVYigatcAvHA7d3ev8so5x5qGuF8i6fHJ47uNLHuN8Sr3j2ZddjZsSaVwQieSh3DbkYZP",
  "key21": "5BAp3Xufq98eiiaGUcUknPpo5AEWc2h3RfNiurnAeTG6nq6T72BZCygRGdGM4AGumgu47GxExdzdqimdbTFhULeV",
  "key22": "5ZV7jCWBJLvsXcjH6rBfMRtUzHWBGUyAtoyDt42vi3QVN9v4T77xmrQduPdAkQ1kEM7rLAjrcFXD8vAve8uxguMr",
  "key23": "2fbhcHwuvzGiFS1YW1sgjvMeVmCnZjiSwHE6HTTj2DzF7XifYJekCar3iDvtMW3Pc2inNQxMFnqtHUETGESeYeLA",
  "key24": "5EeWeqDJeBHLfhzY4cbeZocbx9VvkwrtwXKJ53b2tfADypH7upLHh6TRruh3sCkoiWcQrvtG8tTXC6tMDFqj5Tze",
  "key25": "RxyZi5Dv9KwtgZTKPaRrUMahFSXwsXPUuKySLdMvnDMuuJCCbd1dCZegpFCLnRNzr7hJTMWedCYyVnE3KRmCH1T",
  "key26": "5Tvmza3pxUJsWsMcks6daP3Ze3etnSiYWjbFP3DVxSufufe5BqUy2vrGbsHrEpMQQagD2LtB3wXf87bnWv1K6inj",
  "key27": "nXYyPRAzU7byAUPvYygvzKzDoQLnmAkRCRKYrTCaKCyt3G6e4CnrZyvEMUHHo6FcTMvNtHLHM2iqqx7Nuac5p1y",
  "key28": "4veviL6sCcrovchkUeLVpn8oi4vj2zD4p6to4Kz5vfzagYYaxZLao8dUb1z37fHAostYGNDLDZM3irYxA5cbVa5G",
  "key29": "3s29siAbgWjLN91Mp4JQmCWaX1ouJZUehQFUHHuWaxz7WdTyZiLGQAqzc2pyeXw54H5mVtvxjB25HpbaH27iWSxy"
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
