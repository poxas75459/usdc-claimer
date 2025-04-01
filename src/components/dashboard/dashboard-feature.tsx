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
    "55D3Czo1cqfXRroECcAYd3vXzC1SuKqX3B97sv3Rpo1sk4dKXoYC1Eb4uKBu8t45V4KxDzMSX4jf11aAUTYZHoar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WiH9mPoVAL12u8K9ShCLYeDBaG2uW8Tmvfu1V8hrt3FesaaUBvNhdKZGjNt9AMHgXLoFTVDMSmqoUfWGEa18ufP",
  "key1": "2xdx9ejZkV4GtTXyuag12fwUfqGHPmwFncTBf5ZWTYnu5pBU7w9VRane3xgh58ZrVq95oxNNsuDpmG18atzL64G8",
  "key2": "3HKFFUYTdJt5mWFhNPTjXxeDLVUT9X4R8pdrSNjpGuAvaii9Mmp8qK1jDBbhgQVCgSwDekrFHbkn1TBVE9RLANLa",
  "key3": "2DXDVD4A5JEutpfx4s7kLuazD26g7QxDeMZDEkmz8zLy3ipVXciQuRGCkuET6dnSDZUrzZvCY7NgkSahMbXafrep",
  "key4": "3AXtUe18wcMdqeMxNNC6jBBBsL6XDoDvveT4Ky6S4h1udoHorhCcmZ4zMny3TivAXK6exN9vw6KvcR52AhKPBL4u",
  "key5": "58gTnkZxmJYVbUFG8J76SUp8gQEHDKjArcUXA36Kayhik8aEaNKXLWV4c1GMfRSyqNSCKndGPKkvKLcjDV977Qmp",
  "key6": "3NgDsRZLP2UiNQ1TNueKWsCKRPGn5PeFEPVTxS1WEW2WQXrFvMgiQeAA9F3myn6cep8X86p1iGPkwVGSC95R4xu2",
  "key7": "5f4rWwBE5VsoJeAsiK21rPajzBciTnxXCADUbrb7QiNw189kEfQHJGccfjdrkmT7eCPVbfm68gvVCusenF3jDzEC",
  "key8": "TPWuuTxFC2NBvPqv8LNG9TnEJCASFtcdR3QUi6ztio8Tnq3yduB8TxRk5gSU2MChyX18FCPpSPH7i5DpTrX4LYc",
  "key9": "2VbqSNd6qfoP5xJtUDTbevGWtkhcCUGXj6swNqmAGYNUctKAcWCU7My2qPKVF6EpooRqXrHbp7zMfwQdHhY8XHYg",
  "key10": "gboNdZBUw5Qt4GvVqsySETGAJrshH9hfp5BNfKfAsboL5XPyJZwRpvwXtdEDn7j6bw1VqvJujG9Yu6hsoHS3YTh",
  "key11": "4aNT7v1eVTV23gmETUAjnu19Co9PuBt7Tz2qG97J3tecQd95eZenA6Ebuw9osyHwRM1aJFRNvdxVbGavm28tB92Q",
  "key12": "4wvLTVyHNgqwNNhAQH8sUHGxng1FiAcXAAa9sEDfdvdQcSFA6qcdPGRqejcrh497ZREZpHuGNRdkhCniuc9SykQg",
  "key13": "4QGSf7T2q9WYDB4Sj3mpcugRCB6kZt7DCX5Ki1KFNyuJxmDaQ7K9kVukwc1s2Fs2jZKcgUBbfu8z78ftQ2hudatG",
  "key14": "4JHrXauUh1T9NutX46KCXCC21rFj3TPdURUZ4BLk6EsQrhUe7Re7HkUiVLVxXShcysUBwYhnQ4BfRZFrJjRE1vdx",
  "key15": "3WDeTMjLXH89ML8sUMyBzhWgrui6fNSZJRXjDyq9oThn8uihfMjku4eTYnKrYmbJ6LLWSKtnYLL34kwH8nvNhT32",
  "key16": "4KtZkbpmD7feGARMbsgTn3nqkncvxhPjnVxdK2hYFtQuhAzq25ooEmENP4sFWNcAkzGHV2cymp4scnGLGkUkLkQW",
  "key17": "PzTKczFPT5vUhzfwBKfUaBh6q2Pe3RpqGrcDTJkz4oX8nyH9N1MvmHiktVXwH3sZeQdF4Y26cBLFEPVx7pVKJty",
  "key18": "4yr3K9b7Uf2LBzCFsqhPMqawV3X2qoCaxgL5Tc3jsysXUCRSNnpUR4TovGBSoHyJeoD5BKUsVyaQT3ZWzfWpDHkq",
  "key19": "4n6Z3SF6X5zX9zzP3nggu1gZcBGaFoYrvRngpnetH4iopSvKy2WD911gZNFTFHgEUf8cxkacewCXrKX2G5fNRHvP",
  "key20": "HES2JofhXUiSk9HUpKRPeCensXZ57B9VtWZ7jCi31sAS9TS9UB6dW7XtzjKFq9fN6TZsdgpt52kv5uRUTahTZsc",
  "key21": "3GSC6Lx7Z29G9CvfRrDe23CZFZeymoGn5qZipGPPyqYsMpTT9d8axWR3GpJLowWnaFVhRKsx5Dmwj38gK1nr96XB",
  "key22": "4tMA5GwAHxNv5kJhreQYNPfkctVDbdJ9iedeGPmGtn4DstZQMu6P74AmKZhcP7WQm9vArUUt1oP1ds6zw7aijuh9",
  "key23": "2P6cSNMit8hCAJ5P57vk8w5Rj59UScDgkyp5ssy9HkosfHjocY8c2oZwyQBGnaQ1SH6TpShgHpEEACkSEz9rjmb1",
  "key24": "3DRhFQVHFX2942YzcYcE7UwjPcxz2Q12FiXtmZQik5dMNzKEaMXGj6t8WibeDPzAX9ac4VYtoV99q3TiFhLBUMPm",
  "key25": "3hf6e5VbGGUtufqkKDAVTyrK6bZBmQF4Ncx6jBbanVHtnCMPsKH22CC9VZ4aTfNCwuD2pKyN9LK8BWwi3y837hca",
  "key26": "t5mC1RJXMobUx8hn3jNPVQYBe7JCUWynARQUtd5UmzdiagxBoqUyx4EUYpMmRA6m7kr9nryyySAgkqr8baD8tRF",
  "key27": "2gHzxwJySxpgyU6AUiVPCt49J4S3LmkQbdt6om5YguMH6DZzXLtXPY53emAA6vycrKETtJHusWVtuvhrYTE4YFqQ",
  "key28": "4WLcBFYen34XvMojqbAQ3LMqFJNZKajAy9hX9qGPW46trvsZXvhP9QFSf15c5Ua7TQm7NCug2rZpVwkVR6TjbwLg",
  "key29": "4ZvZrrsoHWo3ZzoGzjskxDZZWUcxTGNhrCVLdgf55jUatsQVgduwAHecnAgYmZqKUdpyrc7g876WX5EAspF7SAi2",
  "key30": "3ijbwTbgxyg49aLTbuCesWcYnPrL2cVxjeMBq7rG9ZVXiuZgGS4fgyECyGHtrGWjmHjwu74zYLqW5kbpDUvanRSN",
  "key31": "3kzJZ6AEKdZSqYkLhYBw4Tyf1qsXiJwZJwp8dqCeFjKsX9uBztAhmLEawMEi686mFVuFhMbBiMs7C2oPSHJ6dHBx",
  "key32": "4i72LoRmVvzWhHHr4yoQVNZTy5zXKjfv3kaJvAPJiE2XfkEP246GWUvRH2gi8M82EHr8uuw15bvwwCnBcHRixKLb",
  "key33": "2jjTPBS1RX9SP1hpqqhj3L4raXpeh29KowHXHyVsLQWo2eaeMhrDAVMtHJMG9SWGK8sHUeSGiFmLkf99dgLkcyuA"
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
