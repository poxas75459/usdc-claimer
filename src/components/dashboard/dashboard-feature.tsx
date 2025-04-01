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
    "2ykb22x8FhiqMi2XF3H2xcsVTAzgu1egxpoMfFNk9oMJFsEVkKt25zeDJEU7LDisXVduARVCPPqvBjvsRHhqg4Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4raLYveEABBzz5EEMvGrQjk4zjTPvr7AvCDbin47aQYiwa8CrvgEaK5hYnk4oHcGCCsrTTRyV8tiTmqtPBva7Jub",
  "key1": "JqpQYqXcFqvpmTNzNMsQW7pzh7hcAyE8B7yRa2sHGSSKha6RLwmtoJxR49V1bK15ERj7qEtbQD3iwr85VyF873Q",
  "key2": "abtrqZoFTmzfE4vP1qYZJM4kA58nqLdYJ4uT92VdyFYN1wXnXtaoEcMzz3sSc1LfSXribaXFHSdsZh2TVG3sd81",
  "key3": "2T63nLMHrVwRq1cXh92GeNwt8LP62bYnU2ZEarRMMxA1upPB3RYLHBtNxxt89jtYPyhVVrLmULA3JaMvDYwnx9oi",
  "key4": "3v99Mtnk6u6KgXBVu49wYRcCCdb1RDuYxpbe6DzVjm5YriwuPBhjnfJvYRfbcn6K4aw5WGKg6Lp5Di3AhALA4on3",
  "key5": "2dwsd4m9EZadrzRjBDYzcP6L3MvgTrkeLUydvh5yrFhTCuYG1b1fhCRGCvD6RtTYBjLNNniMqYLaJxyv6qPrVYcB",
  "key6": "3VhVWG49Bg81TiYeJJYkX4Xa5MLD7jcqPNfxmJVVbnTR5TnQ7KJvvSXbMJU4Lfw4j9vQ5ATnFbEwkjKpMjqfZY9J",
  "key7": "3vhzV4GgoKWFta9rKYZWD55rjeVjdAnGSrtQUJqKiFp2G1yZTy3YUr17tLcQBe7rVhUnMKaWeejhia9noSQGLYzs",
  "key8": "3QoWU8iZgzi6dzfjfG842eHzj3FrS2SKu3BCstoxr4bGyjDFk13W6nnfJxhoSnoFQrapJkRjxaLK69m7KBKK6M3H",
  "key9": "4RE2vH6ZWnS5gt2fDrJHnhkuzPiwVgjdbFxfuGeeotisRzQBhy4ZigJLNTNAyVpHujgF3Vuwh5Q3VzXbrj7ZFyGM",
  "key10": "2gKVMguVp3VqHT3edKhcpBL6qA5MwCwMWx5t1UedEQsJ929PFddYojNco7w68hdkqQqDvegBMhQMq5vRUwviypm7",
  "key11": "21BH7AFQX1FcUGsDD3xeJjpBMyfd2VoFxCQ7itob7WVMbUjakY1cLkj9kqcpH3T3HQ31vb2FRfN2rFjpYpQFPB7F",
  "key12": "3n2Pwxbgss6iM1RkKeNTKVueRiVfCDsX8recz7Wx5oWXmHBb6wAM5QpFUUupVs4U5p7gWUAXYSkC1MMwQMXYUpU2",
  "key13": "1tTC7t7pKWe8TxEtsxNX8bk7pnHVNwtVxJQ9Ga2MYCDZZ9Hvr9oEqypriRUN8q3YnfkF4VS3jwvkA5vXbaR2JLX",
  "key14": "gYnMraRd14PftshAET4msb7GC7iLuCu5ThdTWwp3HoxYMwP6YRYSqQ5vXBVp8DLNc7gWNr3tk84peWudLoW4qEs",
  "key15": "4GHYYNY4oPLPFohV3jZ4ULSZpgbDfiTfPSEryHberNnLRmomBkmNghafkgC9zUFHLBaUFEXZ9jvE7moQ6KpgpW7R",
  "key16": "4ia7A9XqjqbLNN3LtwHncLxQ4EVRNHcT67pWRAY7u2VzuGcr6QW8AfEWSWEnzSJhZeVWBcwPCznyNcehkXGePriD",
  "key17": "4sB4Cq9Gp81GBdnYwPzTmZuHMRwAbC3eQiUrgBg2GGQCiqJbJtjtR165TwD68KpJaPQBvfBSeW5msFicH4YWq7CN",
  "key18": "SY7BKdFjCef9F3gwukefPS47Z1489Vpy1yUck9w3hNyUB1NUTxTyDVu8TFPsKtfupWPhoEfgv8PfqhH3Xy2P1bF",
  "key19": "5DZg3tp62j2G16XemPKqNzGRw2aR9TtSGFEcoELRLYnGKukhfFKGwhsRJUmwqoxgdUtjXU3vksjYjwtcrQaxXq1n",
  "key20": "5wwXA6M55EVBE6badjBHerhY57MdZiWTeU5fpXzXvPuXtYk299JYoj48FcJo74x7Lo2BsTQpjEiUP5dr9rTngX1r",
  "key21": "2yvtithsrtdYgT4MHWYpGwzS7k9bLpa5di7PNViWnVF2hyQmmb7CTapcgUxyM4Sc5x3XDFQ8WJ4tzFqfvDRuCxeJ",
  "key22": "5VpK9JNs4Ft7LoHEXr8tEnaehiKiNctEduNnPC5K9VRJbPBaBxyqYTsLYSZdBbuWJcW4qq3YFLGviCtwuYZStd9F",
  "key23": "iomVTkHkWUaWTTdT9iohJ4dUb27U1zvDesbjVyuBfPTt2tQ8AH1rYtYCqdiymzxC2C3Q3hNmzJMCv8TwxBbKXNN",
  "key24": "2co2FmcK2Mi9KwdnkrEgtFLnS6nKiYA96P9BompTTEcLYZCfW31Pd3cQMpWMS41exuGvupAW4wGp4t39ZqTpJTQD",
  "key25": "59GPPaeAtbW4wruL6QBKiRAs1smWEUoRarRQhgMTAtLCFqV7yLgW6HMqPZvySdKhhNRLgaoHvn2GNf3GQ6d5RAcu"
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
