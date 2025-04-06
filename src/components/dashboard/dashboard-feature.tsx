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
    "5F56QNREJkJq3anKFqS1gUuBFHPeNLvorZ3iQKgQ1j3aLNUhjj8XfcR4TiUJkTqATthT94uebQJTNS3aVQpNcqN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mh3vi7qvFtSUzhhzTui95dsHuTyfPFEqTy7s734XqrVZqq7pwTx1pjBrvh5neUoeBMBV4mcga3vW3t9BXHxSD7j",
  "key1": "5wMjD3mTPy4x8gqG2LR8tuTEQewfd6cfvQm84VasgRXBr6naVuRgdU9quzE9B41tefdK5w6s23v2rkmSpxzNSPh5",
  "key2": "2TUWMhaU38JjMzJRFrPtTnEsts3Lz2pqfuUezVLwryRFFKtZ43BowV7qFuAuzDsuqfqkJx7gcffwe6gFiVbZEUjt",
  "key3": "LwfdXKcUhZsS3nQDPBEiSHzmejMwXu7iwiZDMMshNdf6UvPF6fr7q7Z4wXd1ui5F3TMRZDgYszq5fbxWFmsk5M8",
  "key4": "5WFGkDD3BmbYpXsFcDfzcvqaCGQEvhE5twzWZxawoodgaWo2SXFdepBJewJzZPCBGaf7Wi41Quj3XF6eR3PnyBUR",
  "key5": "4rbXhygtE49PWutCCwEfGLduvH4nrACsfxJ3ceFX4es8jyuqt99zWT1VZfaVStwURijpjPMb2LKJKEJMSbRwEsi6",
  "key6": "2C8fBeXJ367RdeDsEoEN3eW9bu91XGMLBmkat8CB2H5M9rCN7thZ8jJjJxpTcVchNaADvVaBCKqYha3o64ey2j73",
  "key7": "26THL1UZybWMYedcS6jQ6rVfWj9fiy32CSVvBsRiuYJShqYtfThh5uNpnVoP55ew1pGBbhdHJMXFVApmMeA24XSh",
  "key8": "4d4AmXec3Ei68tktnhxbzNtNEekKtEvJQ38cKRfAFYeH8fuPw1KfCFmv43N7s8vnWsDcKV1DyYNBm3XUGF4jx9Ak",
  "key9": "77byVrSaYt4pUaqfCcUkUjUZzkCWKMXFMHWVbLRb7wundRm1jaif9LCZDRoLqv9UjvcUE51s9GY1BMLtmhTFtNT",
  "key10": "3QoUyaBfj3VYuknTdi3f85ykQtGgC5Cwzj5bxxdrX1mGWyjjMwAq3GinGxkuuApszhnAZGbS92osbucccUm6mYpE",
  "key11": "3ibX8onGWsjz8Th9CiT9uGD1CPPXVVTPr3K9YUKm4wbiCpQ11ThyefXFApc3L8GmruvZUSdgxuFLaV6jxA9udcn7",
  "key12": "4m5cgrgnnPBvVowfNFPy948qmrK3p8a8hHNQXNV34ZXx92nXz98wKFsvRLnspHHgW7uJMvJeNCXG9xLPcP27DPtY",
  "key13": "21cmWd1K1Jf1vKtbEakBJ7EwQ6qoXT1AnWTqkzv5Px9jocxrgRJ4YWm7q2BtAtibkRqvMkGtwzWMGLCEgPyRFey3",
  "key14": "61WDvPgY1N6e7oz3U6RTMycAt2PDmHijF2Yws1rmNd5d1LTrSVj5RfGjBmRWzV7JeV23fqeudrpo76hVJK7CMrkp",
  "key15": "3KckFLyHCoVZ5P4aJDXAXVwbmFqMHXuasAkBE8KguYohjPBTfme3adi1NHvyTP8BBLhyBgjq73BYyMmRBQSDGeLY",
  "key16": "3w3VvEmVLX141o4MqNromwfH5bdcPzzJvVc5imWggUBc866cdf8DhtnboyV5XVQPT9X42efRR49bHs6QJ7E571PT",
  "key17": "3N9eRb1bAEpHLSnFkkFgyT5Exy1i5ETQGJMwZ9TNxjXbSSiAEUjoMY2qgmhPF34LNJbX4oresoL5y9BAApSbd4fd",
  "key18": "5ypFfcik2jGGWsv5vKAi9aMtpgkn6kErKjkBDSRJ2iJaksMemXtPyRHwBeeFy8V998yhXZexZP1oUHFgjs4DnVdq",
  "key19": "5Wd7NMucqVj7HBaZU5q8LAC9dMuUYnaS685HGZCadPTvjvu62b5h2tQpbwNkPT1zJgyqVfNqfm7u4T1tmLCGCiWX",
  "key20": "3NSbVCxqtdvyKPjhrySTVUBoYMrk1wM6TtrMXz8TB61nvED5WbgTtWW9ibj6Dao7z8yYgVWSkEvqKJPXpnAHyJXP",
  "key21": "CrDxFoRuB2EmKy6KHicV6wcnf2LQVc7jFsgZa837BpeaxTvBhLrgJA19gwK2234Vpqshve143qCsTT7kVdAvKK4",
  "key22": "4dkKjsEVSc46y5KCkkfhs7N6Abu5ro6DbpnLyLnem12B3Xddrs9G1J1oZbYDjCSehj14DPeNeAxtYCNfEDREmhYx",
  "key23": "qEbXtBTm1LStbhCQTPSW1Huh1KYHgJEa2afPrxA4eKRKcfYNMBpQHTRrBN5Az54jEBwLHAi3QzvHMn4ZsGRzTDC",
  "key24": "42V8ZUfuRtf2PyWkdrpMeC19HL8wm1wyvnDeFCCJbTMSuu3ksZLcnTfZ45MpWgCdoR17sfMpQaoiofz8WnpzvseE",
  "key25": "3quUtfUps3R1YgoSYBEwZ228zLySzFe1huYAodrMAGCKMBinoU4agUGi3cqAodTea6gQpJpvxoRsQkhD9FQm5uZ6",
  "key26": "47PYtbGvL9zeSA1GNxFjajY8PJaRMMvaKJxGG1MqbCyprqvjbaouW4foRqnmEPBJUcwHZaFgmStczuNvUwi3QxB1",
  "key27": "3sHVV1j32yA36ATHurPU8Y7p94mbUbMo4HvJWDNU6RFRuukDgLqvPjFZmDKfJpZNMqL1cZdK7u2ZRGnKwr6FbvwS"
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
