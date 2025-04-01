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
    "4ZDt4nJsmrQeeVsrLpELJnGJX9yctakAbDSMech7EaFCP7gmecQBtAbL6HwG9KWNLmjysr9iXVX8WLMemvS7Ac81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNZXSKeh1GJQi6wmih3ZEdwC9gvUNaBWvFEhysRAvxbwtSgnoJyekbEMgQENJhCMJX7azNjfnX4o5hB49NC7b32",
  "key1": "3d2MsKwDXr2zF89zuHxtWAzoULY7BZZ5LL31NRVmjxwjSRCaz4hyFkPT2pP3CSs2466Ww5zqYwb87qXeDYb5T3Kg",
  "key2": "4DYTPzfZmWnrxMY7GFsubNKHgCEXDfen1egS5jAPeUkhWGVnHcfyuxMNityXefkTLF2SKonaTvkYmpioHaMwkDS9",
  "key3": "4ZyQ7XvVC6Wvjxxs1fsm1oNMYe9FdEF8ytgRzW93K2mmExeuVRxxzQCMBSsv7P45VQ17yEiwtcHit1S51BBeXtEo",
  "key4": "2uwxWX6bL25wfaSpXE24aAc2UhmUSedckQRHtGoFJ782evaNkrdfq3JgEPGHPLbCXFKPJeoE2H2a63bFNswoYFpq",
  "key5": "4ebzpv9KGLQtvKvSSNRcYtazs98dAKdzAoQVHf3NHWZBxW5oYmiaZ9wojcbsk4WmFgE2obYkxq1URUjp85gZY28N",
  "key6": "SUgmbD3zJVjop3R9iffJUqDAbqE2cMaHHJNoKsJMT2ZeZr8z8rfw1YFJqUAehWaVR8qBteLNsSbCFosxTQMvMzd",
  "key7": "4svpn23zEBqXR3MAZkq5nre1EBgiFE9isWbX2Zx12zRfwXwMNXmt1oqjuWxDVxqHUaj4pVqwVr8CJDJSDBGJEj9j",
  "key8": "2CobSNB9PgCHS9G4BbQ5sF8xHRGZUFqN9yxXFQPFnDXHSMiWGdQXrEXeDRuUyo1mwTb85KpJxWykTW9UgJP4xZ8D",
  "key9": "41ZSSvoX9CXsCSP4nVnkRCvVHaUtAjQYPauavewaqD3drDGQw3zh8o37kstvhCcKpDzgvayUy2JsAb7Gn2kVCeYS",
  "key10": "43SYfsuNSc8pXsHp5RBvdqq8ypKbFcJRGa2wdkjj6gziiVeMcPoZL6pwjBMiFirkYLod98cYXvLYWz151hatV8Xq",
  "key11": "3ivhBuj8Uz55x9zTZpKc68YX1XajRJKH3SDWqcXsFSLG6dx8arK2u6cLbTmZrGgrhXbtndqQxwQfNc51LPiWup8t",
  "key12": "4QPs7d4NVTPBrKAteN7TGKShBb1G2ysd9rTogTY9LiYsZcybeyvz8GnZdYKnh4BUbegmc22GBE7NyQiGP9BK2d7m",
  "key13": "3WfYgfP2fESk19WzqgboPrKv8x6HsgdqUsCKQXN3HPtnvvN3RSA26ELdxiQryruhWfwmNrw2yCJKVn9QK1ngKygf",
  "key14": "3fh3TUELSPAKCWvCDNnsmLFwdmZhSmEZqjPZpUfVW8JSNx95SkhAJDwhnEwcPP8hZh7fHdrpYPb82a94UKSWc6v2",
  "key15": "Bnd5wTAuyGAcnDnCaRLZsoNktTQ3QBekWeyQZRDRq1YhmFQ3MJP8oSkc4BGu8LF37sUE5sBT9FzcAx5FcWhDcwx",
  "key16": "3YdN4KLnqPmDFVs1hzTVSCaMskTNjaFGLW4An3L4U1E6geVi5zSRUfpNhxh9emxgvfkcoysqgVTndaxuKibfrKAw",
  "key17": "3mhEeFkCrjTdvyAaUtFJArZeTBf4V6U2TKjNWUbB3YG15CxQVv8FtM4fBRoE688T79Beqxt4rTD9csfunXzemcnk",
  "key18": "2pCS1jbEmU1FjkiT9UEuvhHYL1u5cbSixbHMp5Pg3SuUgm72qkHWBFzV5ZbfRqVsFKtnVErXs8mS7w7uAZtprZ35",
  "key19": "3C7DkB6s3Cqrb6c8BWE6XJZSw639bDx8mUKEkzevt4JcQtbmFsq6XptkZxo5rUMWc45Jwk7JsyffNJ1Fpa6egPqJ",
  "key20": "gFC8uy9ntGTwAR2xJtC4RNKem7NMeKP5gZre5ciMBazuKgem2FoVjd1S2GNHkNixbhZDwPrh6shvznWWwDymDEv",
  "key21": "3G5MuEX2JpXGro1PvuB1Xw7XfmSP1iN4MPb5ApaWxPo2gGBXP3jHy849f9KeimoxzCc6j2d7wZ7DXGpJEQQNMa6T",
  "key22": "2oDysy2Mo4kpHxj972RrTX6S7jqRhH99evfnV4vED95D7qgXaM5KqnrkXDEn92JzFJ9sYAUYFxeZrM8VHch42JuU",
  "key23": "4Mo922EjBdRh3ick5mVp5mESNTx1GUgZ3Gsdb4WV1dGdLGd7aUJBkhNCXLNNigL43KtGXXTW2rqMv1teGPpJbQS6",
  "key24": "uU97qx69xzhKxZeKeUHTE9pLdDqLpspfYwRR6z8ybnCN5HLCwBaUJSeG1YSaXBPsdMxpEYNeBpyjBH594mjnEbi",
  "key25": "5VJuANJQYmoH7NeoztFsd7edivF1Je6CBJDAw6WsbCk4pRWsHFbD9quzEbo4xdK5R8RPtjBZrKad8J8nNZzFBtfa",
  "key26": "3mVTCX2sHezQyTRJVB3mgy8hLanhSiBQvELFNWmiYMHruenLJKjdREFKhjJNiWdXPtV65Dv9WTSbRc3Lbf3FtTPF",
  "key27": "6232t3Zt6MmT95dNzGvo6P7jiVLwQeRLZrpEty6SMXhkGUmrz7ZWheBDrFkkdZXEDnNbUc2gRVuHwftZY6UMX4kt",
  "key28": "5waZrpYcduHYwEbXnjfghpTvbcsi7o3WkW3iymh2YCYqPEnU4fN8sVrhNhsgxpNQMDfdfTM58vx5qBYHwFqVAPt6",
  "key29": "CuvRVdnruVhhxAz6TZsK29y7My2sg2wCwortz69ejDcyvnN5eT3mhR7ArctvosR6eG1aVqXJZyi4vAYad1UwbWe"
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
