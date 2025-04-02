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
    "4GDDaVZe84PdRw7CEqe1orTSHKcTptXcsjqSz79mXSED6aEzCeDYAq2J6Hbrri162Gf1L9obfhkBjogQpSrhZ4vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxNziPH1Bw9YfZUTqQw5AQdXSFTBBfYXKiWXWodvdcY18PVV1qtqDqy6p2itELjgUbgiawPGAc5czBuGadbvcMR",
  "key1": "263mEThKFJW2ytCCMFTYYKgFdUXZ8bMk8FzR1oXJwTvm92gy1AqWeC4qdiJGsoqEf7DziQuMunLELi1E46cV1RpH",
  "key2": "41reXBM7BHtjjm2kwCMCLZf7eYp3Xmoen4VqrNEZjANkjCwZL64v3hgeddcJWTL1dHyxM8VDvwu2EbTyuFaUiuo",
  "key3": "5mfBeTLcnhdKV2vvGdhqkx8E6pe2DPgixcKzDALCD6Jy19RueWAXTsQm9hHE6f5dNavGJCLJYev1SeRbdJdEuutF",
  "key4": "2J6fXb3mv4aFCjVrqF9Ej448QSwdCSbxMtqbjpnzXcU9TDnid9dPeMqWabbiSwbsqHHgL8qwwC7RaYEpJjDQPQ3t",
  "key5": "3gQpoojaL5K7kRJbb9K9NYeC7YE5UNkidxEY57Aat5KBi9NQFU4vrRuvtuye4SddYNpbGEdaMvNWy915XKeKkeks",
  "key6": "3DudTXticqidxg8C5QhNhLuMJTf5ohcK9QXX5HUAh7EbjrgrwrouAEbBvb4Lj6Lh4yeENAnzZvuhfFvQZNpJt7cX",
  "key7": "5BS58EJ3k1KrcJMV7YBE343GCMN9Exi5JHtKiYPaWHDWt2VywDFswfXx5m8Zpsk5mznaztta6T6dNhmqgPBN2z5X",
  "key8": "4evvni1ySJ7SherfAyFBvQCLBHVzS1zoRrdxUcY61XxEPwKJsW7FeHzrm49HgRhVcXwFcmg1idourxz6r7rMdWof",
  "key9": "47bRUVEgCx2gEQQkMoef2VPZxYPM7vXNB4L6vuF5jFcWMYyfzFRVv15o8eeA26xDx78LR6JFBegg55MwWzrnwdjY",
  "key10": "5Vu7eNoXbZe9xExA4d7xJo34Bk1Rktx8GnjMG1WmqBjXJrizbZgz5GWfQBX85Xbc9rPhpMsZTNW79d8fdBSify8g",
  "key11": "5jUom4xbSHvkiN8DmFpZ6Z5mC5SDLE3R9rBcCAhiTdrmbf8ywPm14kf7iHUu1UPkyv6b5T5vfxMG98o8eDCry8dj",
  "key12": "efYTEdcLV21Fqk1X9ch45BU5ec7FtZJv4AfT9WVKNwZmBD56cAcZDg5Gz4PtKYRDZX7MwKNddxb7uWUGWZDAv8m",
  "key13": "5hQbtBEmzjjstjg7tWeqhpmFP2hoA2rLgabHvZPYSSeBYFp6ypoYqrcF97RXFxfCrpyQwphaey2uG8kXwzSckwG9",
  "key14": "4TQ9kbanxzMaeVizmRF3Sis8VA9qCYL85FMQMa8bDdf2MoTorN4T3G6NLZGMPW8Xb9FC8nZzghcP5y9A4yNz3kc2",
  "key15": "MVWzczjGhMSZL8KT4uWgVivP4utXz5BnU6jrVqiBPZ8kCi4ZFpAwB3sVHmRBCiRw682qYmKGpnDTf95vLEirJHa",
  "key16": "2VPPWeUMG4WCmcw6Wxf7gNUYbc2kqqx8Fn7bBpju342VaQ8tp5dLr39bn7jh6LnWX3dKLdw2oCvXa6unM2yBJknk",
  "key17": "4Qd1uUpLoQsLUxN9heRHtF5DcsYADNnzcwUXssf7XNQceKaUsmn8aRan8DrziumjdBkXHMPsoXmuu1RtCTbv62d1",
  "key18": "2JpzoUZoF8b5hqgKPseW9nkcvYDyrSF9YTNEEsaKFv4w2gQyRetZ5saZJd3XzDo2xQe88YzKVdbSBfqEKicoRUqt",
  "key19": "317y8iUZPN2oZfBrRbyXquoxxAQ2jXQbFdxM2YUebi3Ws57oUSUVFUQ4av3yUsMcniQyTQ2Lke9RJkqLoGqgjVq7",
  "key20": "38dhsdtwWgmG95oDvfHbykpvmPLvZssLStWjDxPeeM4zS4p5tafAMkQY4b5fkf9b9Nk9FMH7oKbSEk9zUH9ut59v",
  "key21": "4Rd4BqBmeeYygMk4qhFMQkLkvmD6stvECR75UVLy11THjq3UR4GphfiKNHVjfJNiGLxeftd5U4rb9L4PPbPBZtSC",
  "key22": "4H2XyoHGZbe2YDGreB3HKHZci7yX13FVk4TGdczY2YeZGYa5VaX5SJy7nejQYK2ZK8ERxJesamnupyBRVdkHFe2E",
  "key23": "4S4EkVTgMJ3C6YKZwEFukHvNQiok8E4YxYpdzhRykW2KbXwMQcGWSBRowApnnp9xDFe8iB245pusrZ6WrAW4So9V",
  "key24": "rR6kDeo8avUPbr7Fmw3AjoQJUPkuSWsepqhzGLpLXJEnE2MaS73eMKm2QYK4hbqMLa4Ag5EoqYj9s5GcUNvxkKN",
  "key25": "2eJuZCLHXxLNdz6MXJASADptg9xGDX1MAY5Bi26YEes1ZrbEhcA28bV5ASJrXjoqLQkQdDNJ6e7MpRK26z2isV44",
  "key26": "KbwbnkK3biDiWcwmWwBfhNiT9nJQpFd1cpirq3RyH1xCJmWuX8FDvX9rRC9Lo77G2gUg1LfWgL6VRePBNcNYK6g"
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
