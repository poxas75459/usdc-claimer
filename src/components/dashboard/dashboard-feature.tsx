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
    "4c8YEYMa692g4PBo14Yrx3TnbX5KBdCC4we35iGC97wH91vEeSPEFb93pPUD8i6JZX3LcmU1nPmT6R1REJVCG27i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JydTksxnnUCGmWUMwNGsDn4zc8YKE1p8X1RjXAgAGXvpUo4se9UVgQyWtbwVWMtBzneCNAjKgK38gHg6DQJPLHk",
  "key1": "9wRCHZ4Rg8UWdywm4uFSMB5Yv7CrMLhFrYT985WGdiB2ukLem6vYCBRGvqPWsE54K24hPm9edgqQwDMHMUPXxBV",
  "key2": "2ReyogfK2Aqah3fo63D3iLnkVyCxkT5Sn3za1AN7ZoNAgvunkCmoZGvDguBSGbjP843KThkPR4dxXGpoeCT8Uwo9",
  "key3": "2oEjvY2dVGTrcsDtreABuVEW2f97Rj4jQxAPWC6dJyTsyswwwJdX2hYWnqK1uX2L216iDdnnHn6sCdTfUfb3pxR5",
  "key4": "5iaKsgN63qSeSRmLhKxG6rGTypASzSYztkMsM5SWij2WSfwnorpaU6ocDbyuz7B8DC9LqKywRLAcyUCuQLiwhXGe",
  "key5": "5eC1SJduTHyjQbMUdXJtAwSkuwpBvNkwadySrFpDXB4jhnZMdhFvB626tMZ19bx5LABEjYu31QjHYgGAzVo4TsYr",
  "key6": "3ePitg82BZAM2n7wUwvhpefGaZR5iBtcFjEmbbhKDKY88zg12N2WBn2T5P6kZTcaofqwY9BF1hLHrKssUy1nwk4X",
  "key7": "4Z5zMV4JcWNLHxGxijfsYsWecnB3bWZZKjM4wna97dSsiviESifE95GMWUm8p1NFc5wEkvNVtWDzuPzBDZ1zqXci",
  "key8": "49Yx8dXgzwRJkznuMmuWqinprPpAx9gbks5gLw4fPGT7GiXZxTbomHMMVQchSvY1gYch6FUC6AaEbpnAJU1yHKCt",
  "key9": "5JWZbffvabAj2NT3Dd7hHpXrAjj3UdFxzWpJJsG5VhitccyaFgxPBAPX7FzGwZuuPAdTvBGhZaVpUnRiZWggj6Vr",
  "key10": "3TZ42kRMxmZ9nfngVyAFnXuPyDVbSKfDk8EzmYPL2L7D9Z1GJCcBoHe4QrWNtszzxtBuqJn2eSo8h2y9ZZ49zxxS",
  "key11": "5TzW5etdWVqjAiHHA8qp4t6ft57rXeQ8tcjn5XGYYrZra65kDkA63HREJGHwfpDGRdGRNpiPwtQALsvkWu9Y5yVW",
  "key12": "5d9UkYHi2PbmtC1gYJQeDDD4jHrq26e3vtriqTGQMM3Lw5ingsS4ViBDpPDEMG9WtA6ZqeBcNyToa1jwjStu4jnU",
  "key13": "4cabDCcLcyPBJ5Hpv4vbnSxve3pwBNQ7SSsRf8yz93w3EdXMYnv4x1mF7qR4ETvKqBBZ8xMnhHxkuFEeYXiqTbnR",
  "key14": "5aqBDGR89GQFKJgSsB9xDodcoZckYv3sXJAgZMo9wzsznuBCy5pNYjHmTqEu8kcrTch9yNpP4urANiA5MhWb3ySF",
  "key15": "PvpbfVoCgxnfJtBwNK2b8GaEaeUqzLxpmZWPYUxiP2JLb2p1dMQXQBN6XsyZNRG7pDDjCbdyyXiaCKmzLH3DXYv",
  "key16": "3GhwhZLmBVBQhP88A9ihLi2K6QYFNkJh5UegVTcLLHNRjAheFm6YkyNfi5Gx6uATfbBvHDKedzGZ7ww3axRGWMmd",
  "key17": "5We1TFfYpjHWJmXqwRKBJ5JSSnDPqKVnq4KHXyUBBpSLrKrFZFDkTCFMthVcb4wcMt1eY96dV5aWegn3k25PGMzt",
  "key18": "2MHKVGAKDXsdDft6DSKYCdCYsu7BPfggdDURvpipiL1jkocagvE4iAtb7gNYXBCJx9dNRZRdnwMwoGSyBM7u9c9S",
  "key19": "JcY5oGFiF1Hr8QcoBDsxHo7pFpwEZoy2yYRMkq31qPvK4XWi6iTRsjcaZNGY4fXYeivXPiz6rHVSfwZVRaa84vk",
  "key20": "5QzTq1wLHJ2CqEcotMZuanEfastK5kk7zEkUrhAdLnvNyrgN68fdbcDqSNWkCgE5dp6dhWxXmUbAfCBpqcCYcRCp",
  "key21": "3gj9cFMczFryzqNnJ2fGMQYKc2mEubj3V7s6daVFMcJgLCiDcZ4XTH1RGzVEK4jyUp1grEfKcPoszZYEUMUsSwzY",
  "key22": "3cFEvV7HvdxbwxsYU8H1x45KXXNBsmc1DrgHgnQt7YYty95cZApVcBtoBeg6r7ojbEU7eknjpXVTbcuHdkkkJxQ9",
  "key23": "2WVfx6L3hRQa5FQXfV1irpswqsZEpzzRq91SUvqBRn3aSgYGgvYfB8L12Sir68Vdc8SEpt6oprXXLPTYkRiJ8EH1",
  "key24": "56kVYdtnXuZDVjTw3beyeTFSBzi3hjrC4NVZWtKcpJkUgD6RWJEk3VLXNDfBUzP1iJXDaJi25g5nNei1Dhpw9dZs",
  "key25": "8X6Uj1b9aTpQfXJ3mJiH5dBHmtrR68cvkXd4g7TJVZ5Ffj9KDrC3SHXgwfCEBExV7ThwWP8MsvzREPxiheHhoHH"
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
