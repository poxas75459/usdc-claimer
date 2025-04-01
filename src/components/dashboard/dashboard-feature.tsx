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
    "Nw3nCAXkqUE9fYLesHtS4XQ5ifys5BRUUHUhF9YDGMq2Zz6jsQe46zsAuMLTCXZHxR6AVBag6mha4XAeM9k1JUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "royrNgnqAY6E1FY4a4hcEaf9dG5v95nkwXtjTuMUM3Cj3Qq2qnsuTn8U3fJNJ5o3dZx7WUvzyDRRA5wrhHzpTv3",
  "key1": "2wPs6x7KeTZvFMWc6yFXfMz4tLJwUp9DncjHdqcv5QZBRUPAkeZiqwpbiP8BzdXZsPd6a3uHTvjzdoeyuKxHjZjQ",
  "key2": "5Ppk7xMN4Kz8UX72EUytVGiZNUxhiQAnHp4tU6Xbh9hgeeFZ3r1YhstqS6bYfJMh2QtLn7xZ7mrc1F5xnjwiC9Ev",
  "key3": "2EomsPFTZyjWLsiu4HMzWyeirb7TSe4355oAr2rQM98uQLQAmVJt2YMg5Gxa3uc8gdfmK5wS5pZLnm9dx8LAxaBD",
  "key4": "dHtrDCujQpzHVpWMvds9EM1iGixv5NGN3Uz7dqQv8bh3E1LRtfJ12TN2UZRnvBnaFMFP81zp2RpdAuXuHmPFm2g",
  "key5": "61cuwATxki2Ax2zeAU2RS9xUK69nSqWbpDZ5ccrQCB19krEw1Z3RKS1bQzDLXHN9mXQ4dWYpzDUCDiHGbdU4JFdt",
  "key6": "45UtYwXxxT7iuwEXWpdH9jFToaqEmtP75H9qw3tbdr46XFcn9bwLowVb6aPhEJNFh4vgpiC5mqBPNEZ9AhrR81n1",
  "key7": "3tTUEdhE1M4H2Y9nQNuHqUdHrQqWUPs79A4Rsx23Rfd9C7SZQptnUJf4wpvr3o3ucFWXkjP7S4wEo5JhZhX2PqAV",
  "key8": "4MqEyZyFVxk9XfSXs3uxGTpKkmj6pUnpQ48DuHb892tmNGRHxVtoKVBmjQkVr61RudfKE3WqrtemUQcR3NnmmWWq",
  "key9": "67BghtkjyzZ4XZc9LSUFETiPorHjhhq5AGfDdR1g7PumZupr14mqLkWTmVwYqbYA3LTqhXHC2J9atUtQTckgW6G",
  "key10": "3U74PACUv9YvK517QyEuogU1sqY75XbYGy5HDH48Kzb1Hyuk3Yma8VybGcJrP5JCQehaBEYR76W2zP9vG8mNCtxW",
  "key11": "3Co1EzoP5Q6DoXmSe4EbypnBrvJVCu7xaBgMpyLyDCHM2D4fMiKjDLdi6hSoFjydxeXLnAWpF22H7JSPmMMKc8Li",
  "key12": "2M3B7sL63MNuUiWEGmigdXv44XF4Cdp9m7qjHo5FTTTpUQHRBk9bpziwDK9jB25Vx9jHqUBPcQ4SF7A8pSyqw36k",
  "key13": "4XvYqjCZxm4WpW1CLbrMdwnpVsCpvvmqYDFZ9PhH2WcB2ijiHr3qQB37EFsHWT3FK1nBBoQ65hcNng7qNyCB7PPc",
  "key14": "Ef6jkB5T5KQdFXqQ3My1FXuXGX391HyVA6P1ErGGCJqzgciLmxLMs73FT3osG43riotPmV7Q7yFuJCvkRsxQX6K",
  "key15": "3Zb1p1yKdGVQj5M2zbEt72fE2mDwGvdghMEBmHqxRntcDGyN1Bb4ZdPqGhrmbBTAmP4LM5MmeKZSs9Ha8p5mK7sP",
  "key16": "VjvssHm8sR3iCeKCgUTvemcHduV2uAGnB4JDhSLSUjPbuZL1Fws1GK6PpPAmSY5N8X7kcHDvCWtSZYjgPrSWzdB",
  "key17": "2LdNUXxMvdztNbWrxgErrmXYq7aGfPp9bmmMk8As5xo3YLRdD5cuG9JGz7atZyLVzp5BMA3CRjqnNKVMti6nhqJn",
  "key18": "2P6ubFsC93d2YU6P8xwPW7MqxxbWzU8H7PYMh3y3NfeGH4FSqf7JfkfSpPMHToUHLegPbaUwUAqPs3SRmg8cQ8Qn",
  "key19": "w7SkL3bmb87ss9nVoZwFSUv6G1X1nYXnL3dn72XvvdZgaMzHwKpnkS6jMqcm6jx9N6SBXhCmPQCfg778VBMzN2r",
  "key20": "2ptLXB2L1bdhxeYyTvNgThbWuBjfZTukvHcUJxAnACxe2eLJLE8Uwt5ZfunTt22LuQ5qwDQ43NUQskt7zrkBJxGb",
  "key21": "4ubBMyQ6B1iHkoWpneXYCQ9bHuWUFsczfSiyP4Eo8y69Nj76FTE2rVj47sEfC4uGAmCzgjx6gD3z88ctznEobgcN",
  "key22": "5xGUpVd1R3t7xHZFqGCLapjboENMN31G758PzXwzNHDnajjaXP44pUNhUaKMcxpy8hTdyZZ6ekoYNeBksKb4SMbS",
  "key23": "36DuzPz2KPM44ALKwTp3VMW8UiETBMsGxtSLxYzKmY2yieTSjVSUyhuic8ThJRpD3ZDjSCPGoK55mm994CNzeU4J",
  "key24": "2n8eXg5QQcSsnz7aSyW3dg1KmcqxcBkM6tz3MyTHi6o7CX8bVj5Ub1ESqYhCCHn8x8WNTkM8RRSktSrjDstGpKoQ",
  "key25": "jJghUzSWrX5NzCrnAJR2brJLJkHh1JmL5ysPnTUfYSEjybe7dccn5nR8L91xvjYBe1cjHWZF2FezbPXoGZwzRaT",
  "key26": "32R6g8WLFuF46yKztyiFKZWYXRXpgMSeipgmWGYyZHmFsrFHgsdQ3JfDJcKGsW2RDrtkmfWETZjK2gobnPnt1P17",
  "key27": "2BZZxmGFPGbXSytEzKyH26Df9yY8WU5djm1XN42A9ZBW9uVUFM4KZketu481X2XLDJMdiuR1F6Dm5Diz1suYiWFC",
  "key28": "PJuBgJj8QbxQSc9vp3kVtgkeyeZGChNincP8nqhb97xN8gkx8KQ1YLi8AshNB5oamBCbVqr8TVFgbTiGdH8YgPd"
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
