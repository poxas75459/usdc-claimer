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
    "4i6wRKAmngtmcAgx5fYHaZKZ13aazNqVkGR3LbY2cn4SqUErnMcTWJjbSpuyZtfYb5DsZWL4YH7LQ94abU1di5gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F41RYnBcBBjR5ephtiV3hCCHcgM1DLYNhLcqKBznv8pFUpMy3PfAWLgNZYMhUUmjeuD2JMhk9fPBuDEf639vKDo",
  "key1": "5gHXgDYH7thZvPG9Wz2cPjsVGpkcgn6zDXxEdRcMAFUwLcdCxUoSAMPfRQvcn2Rqt47QDW3Cub1eoEs1VZhED8fs",
  "key2": "2osdHq6Q1WjuWPejsPQTUFciar1S97G1qjHBpaL5MsFLP6BfwJPDacVj97i18FfG29ikW68XPuL8mAtbMyPofUUF",
  "key3": "KzFS15eobrFpcxQTAz8zhKPxCt3DmaHa8PtjkQKJAbxUeGaALN11iQpEZGJPnxC28wu6MJSbRnjWxi1LqrqtRfE",
  "key4": "3LVRjWMEe1nBJUy9SB4PTVA1ezEtJRZ8AYgBuwW67ci7tShs2Yn347EkbEcV7e6XSRWLBcpbAuVseYpemQ8i9BpT",
  "key5": "dSCmqMGydTdAbmdCTLvgfu8tKWn7BamoErdsYKjEuDMVME9WYxueo3991G9QiAZ6PMtLhbb3sEDwoVutvzpETdZ",
  "key6": "3d4CnjLRQJ1PnXQB2A5r8zYFYgDzWY9wWthEw2qud3bPHkHAPuLF8sbMknLhWbhbh2iACGWV5aBCdfoyPDUeqzAo",
  "key7": "3BDSEaWTbjpnbYevXibGG84wDKmQgxkKnHxNXwFVZHyVZdNEka3LqCKNjKJjepijisu1z2UbcNQ8GZGFE19W6nPX",
  "key8": "5dfiHtwhLR4v7c5vpaLTcB5xavFrykBMRQJhHF8uksvF8eKFwuVdaFyhkD5V4zy6MSYbQgQVarYx62v4NQZNzzLq",
  "key9": "5wbsjh9S2MnJDpjrUTiZeoViekWMdvixKUQDLnXHSKbRdsRjXNVxjp6sR93X75eCqEKAoe4fTsuhnc19ztTMaxSd",
  "key10": "aHbD4gbWTc1JYc87nTTNTbS7N6aTjKKA9YqMzMXr4vMuVz2zrDDX5w686op2quGq45KD5ky748ZJ4mqaPQiqWGc",
  "key11": "qUxd8Dp1Fd23RS2rjYoQZY9wgxz6YwGQWKjcciJpwFhKpwZ2pEzj5TBycsZdWx4MmKj3xHowoLVNLGAYdhUJyPx",
  "key12": "4JLknm9HbQfFPstPt5arVadoDa1i7aqrhnTnhawzaoK13bvEyNYFGpx27QaK74Kr2qmFQPaFYeNJSb23r4HTpVHE",
  "key13": "63rrAz3qqCP9uSPLLeKmpCrzfXQSPUGuaCG5nZDiyjQp6GSQfiTbqajmDWmcFu94gJWmMtkv5Mm6KiXDQzXAYEB8",
  "key14": "5vKmbCVB2hjRdApFQFnRAC8aSRLzGPdLPwkDtisoMd5WFiTieFSp3MAfEhPvSd9pXs1vT5zc8EusTKkGCkHCDx6A",
  "key15": "3orbnLGgMvR7ZCYzmVrqPt4WZADdSrUCKydQfrR6YpNPXrdUHNqmrPu7HsfSvFTPUt6qMG3M6Mws8uw7GZu1SW5a",
  "key16": "8nP9uSgeDZAc3RBGK4pgERfRQoAgSSnzXXSCVMEKJipehYQ5ukVvGLoEJxbPP6oCxPW7Ue6MneBxPoCkB6vaEec",
  "key17": "3gJ8Mt1wGCVHSG5EiKs3szPLMx7zY1ZmQN7ewN9K6Ut9YeEbuwscp84NNv8toSUG8wA9g2Hpfath6kqn99jzjaqZ",
  "key18": "5kNjNpgCAoTXjndVkrfMhZUWoyXsRXEXHd4mUpepu3Fx3ykBGhwRTXD9M9cQx6RQuMMLRLAYuU1imZMXVfFugd2K",
  "key19": "5JDRu3XMfzZPbHCNGucmWBtNnqKzZcqdSb8kMnLRP6QMRpaStyqUzWmni4NWowpFWSWxsG2ZfJkoow8A4HXUFRKE",
  "key20": "2n6DN4r4R1JNzzSU6dJTT7p1KwDGH44vGUzjT1c9EbiCUAMoiLnbR2jcxDZu79dhadZRLfBxU6ooDZvMwfYa5e5X",
  "key21": "2r93jzUEu6yA2EbqiZCzox8vi5k5hahxbaiL5cbZUvLErdmLVFNV5XqZ79MTXmHmm3xUL2SbbNApWSxGjSCbe34D",
  "key22": "3MQA3NcsGmAAGDwTgRnzRt5itnBqvMhtQJ4P4DLXPQaHs4hiQw9S5gHgKn4e9W8NGq6bvmnpUiB1SPMx7XvkUwGr",
  "key23": "f81BB1qPYkRqnRHdepErhQuTVRNNQAgHN712VcgLAue5heDM4k2sSq8SR1A3hy38ZFeoXFdiicetEaHVQ9mK1ss",
  "key24": "2JhzXa5uQDXKPLzeuRDVLrsPXgiYYV4YWc46PjKyUXfJgfs8CxTPTveiKxm13du41VEzS5x4qqJDyuDnui9Nhu4s",
  "key25": "3jcZ48KaEsSge24uqJEPF54dn54nCcmmXMAkxhcV7QbXjQCBdEn4rSBxzcgvV9kwy4xfWwoXVMUidRdtDT4nGSDc",
  "key26": "3ipajhbWGgzAXnDD3Hy8cYZP7rv4S9gLmMJAGqfad6hXdjkTG2rYMrA76ezZYXPNs4MmQiZwhEeVaSWJPMgzmFUB",
  "key27": "2GVksSxq7JweUs1ddEdiqd3dNk3qJN74hi59oe7un39Vb6DQGdAMmXK9mkoRC7bQhHHi25BxvLg4LkuQrrvyiivi",
  "key28": "3Jq5bEMCaVQoEnnepVSNuxCyA3o8t2UMDjXSqN436hSkmDFD3tnh6Ezg9UMqFHDcaUFHDSFgtUWjLC3Jr18wuFqv",
  "key29": "2mF7QCCKbNUb2mJVPPprc2Ms6DuWoQ4YRywJry43CNJUGfX5nGTEPtiw7Emv779kp6HCzooEdzfbzA7Uqm7pZn57",
  "key30": "41psNvMQFKPCpg6omKwSmhk93xNfTeq1GtMPaKY9Tz2EHWJdHEJ8GQBHGnYcUYuoKfPep99hjaKps1V8Vubi8AiN",
  "key31": "4ikUQ9nvmPNQQ4VCb2h8RtsQ4FdZM91QwnSyBtY93VToQR29VNUWRj3i6R9gmvfe7kFgecpdHVMPNoECV78ZLZxq",
  "key32": "5Vct5ZgfzwxJ6JGXX5513YvWxDbZ3FFyR5XAEoiZ9twDBNS9R1bFq68RU9GCns5mPHzSqYqmtUvr4MNht9rPQCs1",
  "key33": "5Riyfjh7ucKNackxXcV22azG7N7CEnDBu91iEyP1ULFMC7EM6ec7icw9KyGHotrYokRkw4Msvj1y99tg4KeojKb2",
  "key34": "4RuoLgJX6WAyu3gnFuXWDQfhznKgXur8c2M6DNo4Jz2U8Vwq2HnGTC5TBLpBqmdgDzQNHHap6nuDcYafpXMw3Qti",
  "key35": "4KRmQEeHW7qGyu45vj1KYgSPubeyJDcFNXXLL8qeUdfoAA2hYFuXsZpfTPq9eVd1LiPAPVYrWgAkHJbfj6ngyugE",
  "key36": "3SbGwZJha2imjywmhC5AcZLRiSeP9m3qHXxwbGiA5nKuW2C4bFp3GVa5QSPHxVfH51eDoAwonWeXBhSApc1FGYZh",
  "key37": "5NqLP1hBJnZCUUZSXCipGBu8NgVBaL2EoPMNAZPfcgaH2kTayC5BqPiuWkANMJp28BvvV5FkvKo2BVd9JbKSN6mw",
  "key38": "2uVntoUUBq4twN9611iVLgwk5eH23EdfWBPhugPPmDquqRAWNHhPLPkgwhDutPuDVtfcP9HQiF2wbXJxSRNi6jVr",
  "key39": "5DGfDsEuXVqWtb3YZZYQLPCXapjVJRUEhpvXiXUw1U1GZy1EbMsLtmwHuzg8nmxh7FL5w8xcDxJJj6YHUc7SqMDD",
  "key40": "589kuqxysftjErdqFYuMfUMnMPiyug2Tgh5natpHZgyv4GcmzWKpQj8gGhYvTtHMMdKXGcs6uFGkYuVCkk2GdPoH",
  "key41": "2WKUmxo2EEa5nrf7FHyYndxGmKjTRuKGcoVkJyXzBs7kBcgqCW55emhWHCGMUPf6RyLSpcMezByMbijCx6X3EUkf",
  "key42": "2aXsJKSj6QPmyzGpUEg3V6RjeNA1mpFbhs34QStLQhHw8PAoJR2YDhBZWAJ8BwXQK43T8QgRvvejMdm1Ag6ZP9nE",
  "key43": "JE3eszYeq1PZQU3Kui4C8rAmnPwh7Rus9PL9QtLCSTZJ5JMWhSLS8WiZxZfYDg3VNsG3gyJKKkwdtADgTW8EDMm",
  "key44": "5djbQPVjXhGiDeHLVpnri77fbaafg5b2ZWXmFPHZzXx6mo4zVVSh4uTEGBNoAa5Xz3nSW9KEyugKfeDqXxRfX2KT"
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
