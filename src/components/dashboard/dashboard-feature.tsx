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
    "29ybaHtudSBDvDCEH54Yj8CZb2GHJSLE2Sjk9B55umnsrnoq49LU4TYbGjTQ64m4qrpRNAixfPPpRQAGXiQt9ChQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTRStVTYWT3CkKwhgAxxMB7aq9tLM4ncKAKKHranSkRTXWEaf5p7QbD3mQE4wppdosqgqwTjW6LB1fwCRRRCQLA",
  "key1": "4EmvKBajVvJP5ko1WbJZGq9MiyTMMVnVTbCaPnxp7AbeY35sUiw2pMMHHegwFCaCMyZuqMeQU4gsuVxyRoR34Gud",
  "key2": "3NfPXVpYpdSYHM4F2HNSDNyTVnhQA7fA5YNbkda2iJsYJtDNhVMqTY8e79TxRkEt4CJZEiQEkVrnnHPqtkUYQjW3",
  "key3": "EPju7VViCPmTL3ifVE4HqxbwKPFXvWD1UbGjsTJj7s1zaF7DdfcUVFXe4Ci1Vvq1ZRaQHjHQJR96eLhUz5TnG82",
  "key4": "3Tez6Ai97Aea9AbCtED3ZPPnzwLQxiKnoecXjLX7i7NgNSyseb5BQEqbsNj1cFD2H2SvcNq9bKem6srzTjFxQjoP",
  "key5": "ML1F5DBz8NWFaGxQXiwLtSofkJLKht9rjMe3DD82AFwDJjUDhRuzxQsDxoZ48QTAoNQ88miEq1pc9FMfB2q7gqy",
  "key6": "3ZfbzTCyjpsoVVr86PusMxk1xxuw8UCXyZABdvDcng8dVzd9XfKiWHWoAHX8oAKJneaemnXHYuKvUYRGSLa9JboD",
  "key7": "zWCuHgc61PUvYA9siy6i5JJiQekVfe7kVQPpHExFsRpjY47tYbFTAbGmgiRsZrS9a8yBmirwuoXmU8kWMVF9G63",
  "key8": "57C1sydUi1zUJCkUaJ3KKUKiVSbwhRLSA8cS8hUEp25TpPHKE4skrQS33v1ujz7uiKzcCDYcvi99a8C9b8PgTjcG",
  "key9": "23RkitR6U9rNZdXdHaZNHGBCcgTRSGnfb6JuFs9yNsv8iwenWRenwmDiQJA5xqVWaBHp67ZMqtRuymkN8qMxHbNw",
  "key10": "4GgcuVHJuEJdMFdJmaQpc5Buy59LrsTtpKow3si4nfgkVthzUaNaqU1RANM1JuHtffyGuxJQ7nz9rLLxuf9JecqF",
  "key11": "2LCjdnnPZ7F6cmYSWfAhP8KrRr1FZLzgd2UKHLrADFTsYJuLTAZdyEHV3tGbcZRC8P6EDjtgfGxU3aMhN54SLdhy",
  "key12": "3DBHWHkfWQtwwq2MFds45yRj5wDUCwzaWtSdpxVA5KyGhAeoEw2jf6crnxFDwhkubKRm9MCjruD3vRuu1ydNTuNx",
  "key13": "5iAiUt5eCDxdtWMjRoXSYc96MaJy1232Tef6axZLRxuQobKos2nPde5EbwfHscWK6h4h2zTZkswNiCkmZYXVMLEY",
  "key14": "62hxWkb3ovboopvXzm7W2VgZw2MZEZcuLNNovKs1AQZqHmjh9JaRX4vh3TL81CXrKPukUMnGFX3fvEQgWDWYgre5",
  "key15": "5tYDLmdpwntNqdMxRmtZgJZnMTeBS35eFWbaQMG6bLPmHLmNyJJk5cVLRsM92NoVq4akxPjzkinJN9PrQQZgLSb",
  "key16": "48wys5SFonypaq7SJmRmv8TofuAm4W4UTzswjw6VGQT8JDnTMuai9ECLuaRW7r4gUDKrPwCtFfBaAVs4gjmTuAVy",
  "key17": "48sBo3R4TMUbMiJLVyL4zgmoLfvGB9zYWM2DEmkoC31QpXRJ9YwpzMsmRddFteU3zza7Swvh6tS2nJcM4Po96URg",
  "key18": "64pV2sVwfQfsS7sJLL9YFzoWkBwueXmH97Yeg8GyDoZDjUCvYm8u6iM7Ez687uDD7o2f227xqU6JhGR9CqByKChq",
  "key19": "2KvUUJHfVfknZRfS6sFZgWk78Xr5TSxmcrm1kjECfg5mP8CbwQNoqqgHnZHAqpnqVZCtYNWu32gCeStqxpFBGomU",
  "key20": "2xhr1vY6wbBjmBV76MiNBZmi1WQN6FJsXXnpqKGmVYZY45qd42EddwGHKhUwnm6FGJoydYqMzpyZ6jR6dmN4xsUv",
  "key21": "2FSAdAJN4BveZYeGYjrfDrsqGDz9oSPXhPALyRNBdzQioQo5mReDC8o21yEdKCb2YrAxQM5mRdkTSSyAWxjckyxT",
  "key22": "2jzYvKztrjmu2ZkU59W9owdZCmuvGyGh3pnXRumR2xp7jJBXBoAHYqNW49zyGMCZrW9qZakPXu15jtDxutUG4FRf",
  "key23": "2y35nPV9tRmEwQGu5A1L7wP8U2bP2Moog6aPHnUq4Lk4LQZMNc7aoe73p9CuUC9T4S32wn4H7KdwCadpsXBBzesv",
  "key24": "3gjp7NNrcWtEapAo5yAkETU9yZRf3QsyLAnhTUv4qdR9mPS3xsTNrGvezbG7NvpWSjfcUa2FVW3CJ2dt3a6ELDJT",
  "key25": "4Tpwyv6pWrCS8gZdCMB9f3tVZVHUZaDBSG7HrpK1XRxz42SRKCzUxfk8bc1SgMhCFN4hkP2asB3mW32AtNJiAJsV",
  "key26": "UWK1KmbKhYNJaWAJdPoFr1enbVQUBsCkQDxQo6Rh756fDkoXH19GYd8WVasm3XUMt2zk11k2vhJdJyaqimnUCH2",
  "key27": "rmK1tfWZVjDKwfXgaCPtrkeFmWkKU75xDapmJdC6TDGfPLUAPCVQH9t6YkZbRG9rYHmXtcdbGAikEeNPHbsGHAK",
  "key28": "UoxEyuFTRhDqgzvjiaqeFf8b7SvbZpYPqrK5L4g4LBAQXMgRUnwsbeRgxhpfvKzNDBXoSz1dw4mhFutC5ejw8AY",
  "key29": "59qSN4Cau8sdhTuTMsuJe8eiP9297MWHDRYDMaoak3DtfnC9po9xAiLh53mDC1LomBEEKV3mUM5q2BAKvMLm5tan",
  "key30": "7o2Q9yjAiqFEQKFXsFaE34wRomj2EKhKXE6DwPi9eZ3DjwMqEtzTVEEpASmUHouwToNSUN7nh5xSsMsBtfErFzb"
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
