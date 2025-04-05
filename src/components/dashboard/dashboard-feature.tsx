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
    "2krTyNeDX4Eh363ea5N2RsWL3GwyhBHA5ud48DD3n9jhfAzga2oakRhP3cdHpKknrz2XW7LxiqSAtyZGswyjycSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3baw3PzogS3ZLU2ocN48ap1KvtjK3yRjgqf7paCLRq18hybQ5H9vbWp9FrXXiiQuhctfsTw3k2EbHTdeYiP1RU5f",
  "key1": "3PxEw4yXUPdsGmwdyAXiCu11N4QNLrXFq1Ec299Qy5Y3U5DiFoBuNxXhdbuHhn9Bi5YQeX7hXnn5BMB1ippGWkco",
  "key2": "5oe43emQ3cJpqJNGbWsGNuDm8Z3hDKAhVgR2ZxfFgpAdPDUB1UQZqPf88jcPzhKvBHNU54yL8kJPeSEkD7xapRbY",
  "key3": "23e4Lw6q1N5U2oV8vaEqUGW6ZQGRx72apSp9LWrghNGnpCZnpCFMMuAtV8h9jHx7Zpden2vT5EM2PGHcagU6d3PC",
  "key4": "3oC6a3QJ55hzdDt9S4fidVZewWw4HvEu25tnk7PY79SLmoAZTTaPkmgbRjMhn4o3rqCk5UPUtqERV665J5hNtNPZ",
  "key5": "3GDigW2wmNBo1Fvp1E1u8mtDAjTSmC2h5HrLsC6JdGHQhCou5K9iER7AgZY6GPzSskbLdTp5AC4AHrRPBCqsmQVa",
  "key6": "5XFgjAWwq7zGEpystTceXVy3ZmkHQkvyzDsJveQSDmLw525PsMqe9PA6CEuPH4xvP6KHmGdGaDjBkj2NJxdcxGjZ",
  "key7": "2xTRgb729aRrCRtqNL9uKnFdh76MLP2KtFpwRNr5utGMvoYCq7H4TjmHYxPewW3kMN9RLgi33XwnbqUvLSqwHHwL",
  "key8": "2SpXpRYvbwPeL3MLVdmMztQwgF16oUft82GNpkoGAYaR2UNsuqEynSENnLfdpDYzaz3LzGq2xVS9bmwLxg5CxGYK",
  "key9": "4VuZuRwVaP2YSJExfdfJj2UtJhBsvoTn3JXpb1U29uVBTiACQb2Re26SkArqn95PSvLvVRprDphqw8eRFwbvtKiH",
  "key10": "33DuJNQNSC6iGgvtqYgkPVqku9CxqFDRJN6qEqLLoeSit6csBH7CC1Gk9CrnQ5ym6u4USd3cqcRsbPmxYnpcnt7L",
  "key11": "2LJj9QF3ces3A2x5ENZsAiP3xy8VmBmSRpU8X9su9L8fqtkLunxW3EQ47Q3bwnzjtHzpirdHTWB1oSPQpAVQnyKX",
  "key12": "2Cyq34aNt5JayfWe4kea8vAtbppn6UCxwdJE1wiAw63herfioNJs37WdHeTaUhDVFeVtdVPHKWVJZjZ18NpKjYQg",
  "key13": "49twfARoxsEnvDjNscLqfQzJvBQBAFGWpmBzNeM8s773xAcoRLLRgHWooS42HZezKK2oRo9ztY9RcmPVdjW93PdM",
  "key14": "2WYLnCySD5imiQ89ZCc9ruuyLDwPFTsmkfbf7J7uVse5dttxWqDNFT1jf6EEgs3uFmRBoeyv4dkCMFm39GZW8bre",
  "key15": "12fnQUWYPQYGhTatQwjnyZvDBRJwZsgAu3jGH75PWJmhHSJNp4r7gBAtHVSLW2o6ipH3YSzWGGgcPYhsZ4MedxA",
  "key16": "sBK4QdMToLbqmmkDXKcLr3s8CbNMCXZsnp2MwkJr3s518nwGJ1MWQMmjLMyvUdvP6X5Zwf2DYdPXijcVqBewjEJ",
  "key17": "3CD5oSMLfc1EHQ5Ke5WpX4VKCWtfDQHQCXQB9phDKL9sefeyEM21BdDKREWBsYuPtKhQcvDi8iZt77QnppR67xoo",
  "key18": "4bQtmixtzuRkRfDa1C3wSQ5j8y2vRriR8ceg3dpybqJUWBGEWeDjqGNT11CCu2vmNrdHBkyE43AxVC1oX3Yj8rFk",
  "key19": "48AoJYy8GnXGUDbrhf3VTpZLjyDHXPvdy1D55e8yDWr82pLBjtJwM1codzoLWrWHb5fND9X4TSbaD7vFAm2P5Yzg",
  "key20": "3xML2XMxhmV3cXnWF9DmGzYjjnDkiZov1HU358nXGvL4sL9TrRF7VMcJqaDhMpXh4cobP5WCBGARVu5e9HA2Aq6",
  "key21": "25Nfiv5JpUC5TgLwgTuQj11SAcZouPXCvbNYDz3D5Z2zvsocWekFH9nbHXDvJNwn2H8Qd6EDnrb7qfRg69aB2v5K",
  "key22": "2VqjhFNDngvWapyvBPiEgEYHBHPtPmaJa53SiHDzpbEEAaFfmJqN2hugWyDDKQoCMqwrkfK1cJb4ncEkNjr9w8Q",
  "key23": "5XPMCEKrUQgnj9TMpGVvP29tFS8ZVJqRZEhjKSxAKBq6niUSDtERVubED7CjJX5FFust6NycA58tqSCQ4inTH8wF",
  "key24": "3yysNoML8jnN5xbmn2cpH2uqkMnCuWsWRNndwPorGU5PMuYepSME3gDna1b5LQZbpHKMgnA82ZmXAY1AXUaLa9Gh",
  "key25": "5iLi7cE6RWGQjGQCUrPNZzvuBZTE2Euvk4htjaYY1muiJeqoNmxBeBczcqh7sEdagN6cXrpubogWsACnHyLEP6Mk"
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
