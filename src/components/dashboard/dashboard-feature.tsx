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
    "5HN1ytQmYuB6dzuGnnQ2qgYuaoojSh2hCWkW54FhCLtDStsKTr7cuHrTMGJBzYjx3s8zzmEvoEP9M4ERbym4yiNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QecJUSKBiQPTqWrb8w2qbqXfZcydpN1uxkHGJupTHznWFLSjkbveg9rpe7tbKssP6xmruHyXhoGWLi469MEAd6y",
  "key1": "4yZwfepApFmihaDvLbdcVd6SmDxKBohjQVqe8FPN4Heq1PjPegznGBg6VNT6E2MPRMNh4sksykAgqf3v2jkjHJ7F",
  "key2": "5kzckhKujT8DJe4zn5GFNodcVmdnVobkwQjjNAajgua8BPc1taZvtnXZsrimMU94x2oVsrp6fVoYMFXRTy7z8tdf",
  "key3": "465SCZfzbjECxur1vvSeYhtL15Sfj649LnJWG34KTjKb7FVVP26QtappN1nz4yYvMqj2HLdVSsAHXrQMnPcQbXxU",
  "key4": "2LE4rg2Tkp8JxgxBQmA1iLUNyg2mLWqAfCxUNE36UwkFbCaFzKqq5wNwqvL48dJzXEJcgeDPFbTa6aFXa6kdJua6",
  "key5": "3ta6ch97P2PrFXbADjdmaq1vbUFurXBjNkSHZNXk6DHWdhp7sPZMk3jv5JrmiiSj2e7gKgardX3rr9YicED2Qd5f",
  "key6": "3Nm2qpdrKTVvFybUtM6MaLDpZotKpPLwwhdT6hXm6EisRrGBfKAQ76a5wHd14SVzjiRzX2LqZ2jDvfxFZfz5YrMJ",
  "key7": "5iwxWMNtqGZZrex33AFtk1rbhjfgg3cB8wUzYf9mytgjVHWCgrNi3BP2ZQeWMUo3U9YNjPaUsmVD71Yi8TJEDDGh",
  "key8": "5QT5gsxhAv9i9LDBroMjfpcWeXjDLJdCH25pnDfTqruXUH1e8BzZrJDJ3qdsdkV3MS8nBEdKMdYGP1BMT8bMnvJi",
  "key9": "2WcLtXpZooeZ4YsKCAFDiStTvVE3WWer9xMSPFY1TBueUs6mgNSMuE1Gd4Z6eZcMmrayMhoQWKZDKhkYvJ1PocRU",
  "key10": "66yX2AMwPGxVWvPHyDbuCJykXMGU7rDZG6uLj9CoNJ6QtkBitsDji1zaHrH3QgQpz2YKPHRSqKrNVhQxmaxSmpZ9",
  "key11": "2B6sx4JHZhqzV7EM4YUCsunFe2MKSAmi5brp8uix4zZSKj8nfaSadXJRWLkce28qNSLJ7sm2ddEhZLqNULJaug1e",
  "key12": "3oURv2jDNoUojhWxc826CNwbkgYpnki4Yf2Su9aUqVAni3cZNwvhSRLegPudPh694bYPsSy6LBSXw3NpJEExPeJD",
  "key13": "WXXmqxeQv86cJ3h9t59uGKS5zdknzcswa8dJoqUfvEX3MDkqhY5EoypCFKhUXvMd3aoeN2ioJGs6h8yzEfq4m2Q",
  "key14": "3LLfqpTkUpWDSxmeNSuFpoPj7eFYrv7pkcY6i18dGpYEK1epPV62ypnRZCsHq8ya2vACcgpxWBjDm7RTsCFHBnFe",
  "key15": "4hajeu14cUyP2Zj81r9tUmFv75sLo4qfcyPZ9mrUutPMtmPadHUhv93GZcpSUKGE4WJ4qzB95ue7V6bj34PbN5VL",
  "key16": "3cTWwJUXS7ASVEME1umjM5SPcD1ybsu3xpymGX8nigVsQHy7ntQU226x3Gga2Kbw3Lmyb6qmh3JVjHptuAHhjBi3",
  "key17": "51mdw2Zm9ZCr7BMaW6Wf9KBXRn9MGW34iRdMxuyfzhoTVY6QecSkY7tftZPrTUzNLGwo1bCAYvGc8mNyDRGjz6Ti",
  "key18": "5EqUp4kN28A1jwHmiE5DotPT9rsHe5TUehoesU9iS1PeCwpDWXEsFhTs1ASjvU9F5Ztw4pTAgYMs2BEVEbK79bme",
  "key19": "5xesAQsisrt4xqfW4ikUUW9ctGkF4bFrBRXzcN5KkVN1xWERKRFgSvz2Czb37ytUnvDNfdcmXZyCoSywdEqfpFRF",
  "key20": "5djgNp6X8QejeoqrZeQfgkGp5rbQErp92gCjtYwE4GWtvkcd9aniEnqCwtkwNG3HHAucHC7dqErLi1J5q1wmeuG3",
  "key21": "3YVXhNeCJuvtGF4VCNadLE6yrFYKT9TUFNEJkDVXuD3HM5qWqrT6npV113FVYM2tjaMENmNApfx8LDHGb6vK3YNt",
  "key22": "g3tgQHcKPDBp864wivhotw5u4yW1KGudPM1WfsjjVBV3DVGjpwmr8w3upeyDo35n6w9BTJwc5RtjpqXBThbM1uJ",
  "key23": "5bM5wDxTjjurQaVfU4Yzd6ZAAsYsjtJoPF96qJRWVSu3ZV5MM4Xgy9yhBceujnHVQRvxm7YHVHZR7Pe3gdBMEADT",
  "key24": "4rkVcEZyqNipayudp4BCpL3pACzm3scKBaLb6MjkUwkU7QFX1Nh7J3zxJqh2FvUPmbkMuoCjVLJG3nrPkz6c6nMP",
  "key25": "4vr4wUTD4uNbCZja81YGD4YzLzLdqGoAGqgpTEtXkHKxQ1LMhkMAZiBJuZVNAoJ6GiKXSv6TrRaXYFriMAHN3oyn",
  "key26": "3FNA9zyBcYt8pV6hJfc8NRPZiZT6QtojC1SyXSKexCrHMgGycA2Kgty5qReycRc6V3AuMi8W8xjCyzejAJQvku89",
  "key27": "3PWHpJami5k4XKTNvMZU1znVw5MG7BgGUoeQZWrpdG6noWKhX26DciXT1ry73qJZ7m2xkxoydu8qgjDKk9btmhiR",
  "key28": "5ttGvXkBxb7FZz5KVL6gfNyVccgJhu7682UzosDs8JehnMTyAnM5o3YGuZ5ZriVeECfr95tucU4kswsvqiPRktub",
  "key29": "4qxDX4xrwD2Vfmc15vBitANEpsK9Aw5N1mSjmMZXnohzEiNRWvC8BPEU3ytfKVhRMdjTdNNiFrxTp2oLNkadj1Z2",
  "key30": "2rXHkDjepJp6mweyHPbXD4de4DAf7XDTami6Jskv9XWScP4E3QvxoKw3QRcKiYSEXzBKthyA1C916rQ8g6kJYHhz",
  "key31": "22CVniiGSqbPXbGGXxTU1FDPfaTW2R1nzMESfVZFwU2AZhP5j5p8kUcQBoY1jN7nRRTADXuxEvEYNW85kpDEneM2",
  "key32": "YgqCgT46LVDE7jv2U7yeJyrh82nLpiaGXijVyuP8zmEbk6SHAptRCX6Dx8jCuXcZRbZqqb5oLr5fxBtVZNp1Hyq",
  "key33": "2468Q1AGKixN3NTpfUZ5jPKRU4Vz8NGYgVD9EvHKaXZMKL7sBkS5rNDe2G6wKS9nmSTmQthTATDfgJHs7Tuk4wNC",
  "key34": "3tMcmU8opCs3SpHcVz89W1vch8NUZXnAmsecb6eYHhSsDiyvXDwxdt3BNVqT7Y71dwQ5AbxJLb7mB7c4gcuprtfC"
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
