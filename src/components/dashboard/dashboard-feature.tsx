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
    "58sbGLYKMDfsNYCVd9NMs9hqB1exFXsPE1c9CRn7hECvrvpy4JB8DhtF4s7CLuWhE2K9FrGscNESXtLHXKzo3k5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtbFje4MdYZVJNgCDBMgMis9c5dNXQuCXGnm3BvF2jCsES4Rp2vCW8exkoduHpsz5jWG2ZS56tXDSS3KwQ9JSVw",
  "key1": "5S278frc3v1Y1hZkKPTqVbbdXoggNutZ6QcgcEsZoenG7AdcdsGyvYg5AsR9TikRbkj8vMnh9dgLyJwYkx5fLGHd",
  "key2": "3F42ZhLA7sqNSbmcG7vgMdfJ1vyRLLXvksXV4N8HZ3LF1W1JL9p7V8r7M4DZABrwSqamgCxjPEM62sz9PUTwkfQ",
  "key3": "pEdEPVPkBhGRzoNSfhLqXUZetTq5rKfqimArZFTPnaheoUfov6PahAejjok44V4CT5XEiTBfB618oCjiAqo7qDH",
  "key4": "3c3aEbEiMjLyihQnRHJRJBURLpSgLdcVTVMVchJs3WHcJyNYzPahfRoYnsAfL5SKZMR6SoWkEvnqDL7yzk5N2nKx",
  "key5": "22fzFmgTi3PJvkX9js55o6mmBBss2aa75Cq5w9EkxXnh6TTSMxPCjyLYtGw6BdMVVtBqLb6DJL3wTmcHTNJBKu7C",
  "key6": "53nQsznWYr2Er1rgN18Sdtjsb5ZhyJpErzZpQHpxvCjxWp4iYccdZe5BLHszBobTwnpD2mpjc4ebxRoTkFPV2wH1",
  "key7": "4GHS5J2e4VrHYk3ye345WRubUqiZfaHbjg9eUTKdYA2SRUmziFVLENDtX3kfzQSvV8e6kuKrLLR3DeHeNc7Am7N",
  "key8": "5zLMmrvFjw36qTWPCoovVMi5Zoip2tZDi88PCkqhaZpYa8Mz5f5XmrxVwgPfq8p5XrZr6aj9Zu1Yxa4bZpiy6Jup",
  "key9": "3siuSaKTtv5EDfK6KbrYwNhxuv2qPbxbBj9QiUohFT9f5jA63Djq2DUZbpCxAFUGcrpdxqUEhLn69cqev3GNudGH",
  "key10": "mKtxwGE4VZdJL7uC3o71tNzskjcya6XrpmTescq4PbpkfPNwQJJRySGhwxg57XysNMbw6xycAPn9ryxhZvDSbFd",
  "key11": "3nE8n5FG1f9wnkXsRYXsg1QauYee18Vr8kFCkgL6NyjqYvBSiJRBHhbEwPq197fNz1mgWmd6LvERGVXktW4etgtg",
  "key12": "3K8TVRAAr9vRAwKsoDvFvRWsupJjhb1KjtUgYPDuZtXcgA7wQsyrmFeha3cTM28TXP3LnzETjzUKrLfVYDemtBgV",
  "key13": "5K493DoMQFL2irXVg5dTZVLUQHpoutD12pEYRR5nwSawo9aK4MLhH1hjMQfFhAwoqHw1JRNAchbCkf7kzxSpG6US",
  "key14": "V2QwkZvbSfw5zQGxHhymhYDUJzgT8CRXWqwGWPzQ7cfYUUdDLfe5KEFqpgULzTNW7vCivgxPUgJMocpyAJnTSZ5",
  "key15": "3F142i6JSpasqTCxBYYmUEyUgV5B4V99R4uqTKkHWErP9pCeyodkYHBpkcYb5Yt91S2k7CFAqWNHYDthWTG28roD",
  "key16": "sy5K5Whm9Dxn4WJrd7a6AieGmE7Bp5Ewz1pD88fy2eyNGj3bcbsUE6LgcgHiret57EqMLcBbBGrZNbqFYdfjYLZ",
  "key17": "62Rh1X5L2785tjMEpVch3Bo756wP2saVra6DyUbaykz9837eWrNYGe6bNhsBeAuqwtoKkyt8KGZT4G363BnxhW4P",
  "key18": "5MEHxHsya3hkc1yEQeskLT3hmjukWPc7d8q76JWv8smL1VJgsx22KRE2i2onpmjoUwAqdsk9wEBPQsUJ8PhwvQtg",
  "key19": "2SF3RznrDP1LUNnv6NHmGQSWREXCars8QpMHxDN6bpZ6bvnEYaAkC9u3hRYj4uJ6nnnUULQG3vK8DRjmXuGGye2t",
  "key20": "5xtziRT2XrjBVKoqMeCuVBMPQdDUthN5eGcE3n4vuZyu1tHgCxAvjV83USKZznjDw1J6ZAcfBKcrxo77K88UyDVy",
  "key21": "5NUdtVtC7nrRZpoMdEV5chcEWP9zMDPBFwVx98EQuCbU1SkG6a3jAzgHn1aV9sK5Q72eFiRLqMy5RRcKe9C1qppG",
  "key22": "5MrKfkXybeoU5JA4fuGqBdLcWBR9fP7CRCeojHbSBcmMPhKk47RpPQebGAo8GGt5S9qhX417x8UCBsB1Hr68zybS",
  "key23": "67irFobFLemdN9opmYeo9K6zSUYUmZaobADun8KvXczsgQRjyLNRzgpcQsAZnLgqGj9hQcFJqfWT3XibuoHxfH7w",
  "key24": "3pbUaBps1XQE3xCDNPJ9fvi6pM9xh91gfmKRsrK6KEHSeyhgVtCkGWUALfVjf4g4YmobWQFQgA8yTq7VP6hcTgo",
  "key25": "4igEvfGBTYbHQ89jKrhKZY2DU9EZC3wnHFwHrhq5xCsq9qnKB9Emck4ReUyuEi7vcYFuqW29c2F2Ws5DXN8gBMxr",
  "key26": "2hwHckzuKTbWUHJoT54dLBRAmL3dE6tW15W5aWCpkqBepG49XJhKToR4maRwnpoQw5KUgmQed5ZuAiwBc7zkgyf",
  "key27": "4KUA9F3RWt1WrnZC1AXoR7E4aUBDkWCuBHuRzLWQ4MFpZan7Wh6cNNZivkMtsaQ8DLXVoyz7VALGYk3aT8MwQE37",
  "key28": "2f3UQA1NJdmCt3sTvxacZHn94GiN2wqMBi842RY8WBqAaiRNv4BXW92t8j1xHp8Wq55yAKALTCqorswD8AdDfX26",
  "key29": "4AqSQkjUFGC95C58SimuEAj8HKYQJqJnvBHeypLdvUtSzjLtrDHDcWqZ27uo3Spwi2pdHpY5Sjdwrvx5YA8xd35L",
  "key30": "5Tz5tzJpwpemvemTsmxkp24iTAQMnszTCBM99Z5tWwtuF6beBskfNGZup8hgAcXrUoxAFuT75MYhndU2ZbwAoSq5",
  "key31": "QAaWMicwji1h27RiiMCrjZp6EoRksBAHX3J1fGMoDyEQA5QW3Vn1i5tiuXN7qKgr9sPjUhi9Lbcx4T1mM4NfpSb",
  "key32": "61U1CTpckuoiN7ssvi1Nb9JFgG48tmcmV9xamoAAmzevrRrxJkb5SFKsggSRwN8aw3aeScq2Spz3twyA8YSvucDA",
  "key33": "4qNYVgEPVezDFd8JaTEEW3Bko3cvvWNsuXLEQ7p7fdtN4yfbnWgBh2WTYGkCf8fwQ5j8JGr6M8jduKoAyFmi2aGN",
  "key34": "3MrWgqUXNCTRpYRHPcn9WEefh6Fpn73Kh3xM4aX7JNVnMTZG8goecjUTHJmndsRe8Xx1uq2aLjVn7ueHhVqp64mG",
  "key35": "4v56qBMJaBDgudwi4VEYytnJzUDxYGbZQcT26HGRHaD43QDWH31Z4zCcPdZvFuA6cpJAYDxKHZfUsmuS78KPj1So",
  "key36": "niwYwYsdKKgviGaaWW381aMXdNrEc3UgzSpDpXPgUr53wWtY8xpzoY9GqpYVLhUasrUp3e1ZJtuvBs5vWk2ynWo",
  "key37": "2nPdquZ75m4SfHiHqWUKh7iT7aHKi4iG4oXZzeiKW74gR2fGg197wRwib4vvfkyWt8nzuDS7vTsk1e5AHZveBxgc",
  "key38": "2omq3UtStCWE9F6QohGYfkkWpJEufC6nRcdfkGKMZ9bgeKQy4v34xi6n4e4BmLDK1q9zPYXa7iA88asQi6e54jdK",
  "key39": "5NQpPTeKiEsrvDxBpg7MVqZ4CU9ZfQMvTkiHTjYN1iq2dhR6ZN5imgv5iT8Kz8vSkHBMHKjtuxrZrxZBQygztorX",
  "key40": "2x2f5y142iF8WdkxHLLR8xQ8PzZQY3p4Hz2mE3asJnci6Vx4ptvPzh8PztURu9LgfMfr9YAeGLEVr5pAAbpr3swm",
  "key41": "3cfPfEZftU8ypebSN2BjZByjLpqtDNv7jQ53TFDGmAzDXrj9AfQzqvdQ6xZ4r5ujKqCEFWoTft6Z78mzvQfD73ve",
  "key42": "668gd62rUjq9cWTFR3ohEqwZuZk5upEtEVgosmqpegvujkpdnzUGcMLkCr5HEaSs7aXhXbpRjj5k1EYtpv1RCtiX"
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
