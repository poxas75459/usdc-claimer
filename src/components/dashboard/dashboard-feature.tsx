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
    "3sEFciekeFuRizrXFswQWD9KcJGfMC1VZZGPxPZ467NuxL24TeupQoeqkxhU4EpzrCSgrmjJbREGgcioxr8aMWM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sDi134qvNwQ92YcLEp2u8Brd8N8z4nu5w8fTgcmkRTuxGsHVD1FtckeSHqPxaiE5yeXjjcMusyaeQZbxXWEAZtN",
  "key1": "2tV66JJSaz6YiXGeYnAVWMANTKbZJVgwnYfocRp4zYY75CHJCAjSsufLoQtSGvvYxH4g2dfGRgn5hSF6Nt39rNob",
  "key2": "4r1XwwM72YUQkTdUxM1SmYybqwpEmigFPRnySmFq2GV2i2j39YvT6R7KhsE9nhz8ZsfVgFxdzBvDfimjoJJtpSC4",
  "key3": "2h35TCrLkAzYLdnXrFhALUufwdKbTZYWytrQnatnxMM8p5LKHsoNE5snT9BjGKCBrGNJkDycR2EXb4o1u9t2V8FT",
  "key4": "hoX2dEBMQSDhHRdVciLq8fSugNQieYgSrTzMW8GeNGdm1NPSqKxgr7UN45aN1caX5Xd1Zjui4yaTrXaAjyMRH9s",
  "key5": "3T5xiqYvNPf1fC7SKawzHkZicHaYjTv2YC11Xy44Va6MKcwKu9JFfo8G7sHKoXJm4Pn6C4aK5481nykXgECHc626",
  "key6": "4MJF5ezWLVKT6fRyuMUyjQbAhxtKcyL7QmaEBRVHUjRoDp5RXbPXFom6ZfTfj6TWG2Rqkxn9u13NZWRcg2EHexrP",
  "key7": "Y7p628XU4JJHBhUg3oZZ4MPsGHNowDupZbCkGsGKeKJwaD4fZPxuw4RiAtV2MxPfZQhtb8DmAC5f7W7AtsGkzL9",
  "key8": "4sVvj1D8EgQDxSFKQ8AzqupNAzpeseCH79scpaLMaQC27tLdEimPQfgpF1kLKLjhqjsBiDuDg7ajgracmec3BDJ1",
  "key9": "5TthnbmSwrcysUTSBJkpVw6z1GFtW4ANfTxkLLue7LWEmKmDimGnTrXa88BibhV1x9zoJTXqixiNveS5gdR2QJT9",
  "key10": "9gkohNM6nMkq3EDuBZqWheQDYV4TnuoQ8r5r9GNUhM1QVyuuzUGYxT1Z8AeaYNW1397bGWxFSD3sxHshwEqCGwg",
  "key11": "38Zsdjg8KhUGG3pqDHUQMEDKspCQcZYktLTGm8KBnNHR8HQsZmJMsmkp8v8t58kijDsr2idhhLxBfoEXZFjtFt5K",
  "key12": "5gZzqVcUvwrHVnXtvKkiPPW3qzUaWBJdwLcjkUHqy5xM6fYEh7f7GYf5BeniSnmcAkFRhyQDkyRs1y4tFwWU5n5Q",
  "key13": "39kFm5wDaFqh1TTSh4PDzmeP4vfczygLPbDiL33uq5Zb6p3LQtnrtumkEWsht829kh18P6jvsvsDjns7SYZjcd9U",
  "key14": "5rvXpRageW5Upkckq9LfwWkR2ikHtXJWkEWnbpgLtCqV19L9u7LwY8CgY9RFWFXff6mxuqy94SbSCWRSYzU8PHag",
  "key15": "2UePRSbdkxpCYmncf6TX17VGnfn4R9bYeazV2R3qYzhFDyj4Qi95XuD36NYR7vWZu7PFVQk5gS7NUQfqK1bC7zU9",
  "key16": "43hb8ZgXew1FDh7jZuPopXBdTuAKUfq4xUtq92WwzcNURNAE9swpskxigayERwwE9o7iPcP2N1rmQLPXy6UPLJ8P",
  "key17": "2WRoyZi4bQ9JyTgeHpn1vMF8bWorebS2w8iUGM6uua9s1WSxb4Q7qFcv1iobUDt9ZjJtttVDueDuUXkB7DsyAyhf",
  "key18": "2u2Pq2EeQPhn8kweXgQ9StCsJn64HUkCEe9wASvnajC4Dq2bFaCzBKxsoe9wLaAQgLbhoTcKYfGJ4KqCo6zPagq2",
  "key19": "34jV7nPBNcFUGKEqLMmemfQmqQDzzu3Rt8DtT7vMZqnG3jZwUhEGgzf3LhfU6y6AmTrTU7RhE9Du7o52yHxxgGQk",
  "key20": "4XZjm6oRDSrx7KEHpcS9ov4nkTw7aHdij7MHBvhhkYKGeXFDy3MDAazUoHwtPNZWfmYQHxKGe2RLHguvVzVz9LnU",
  "key21": "3UrCL62C3uRZcVG8Lf4TzbrLRUveSh8DJ4RW42irPwKHykvjiAfPsF6Evh5pNkqrtBG5G2BqWKhpszsZWFNUAkN6",
  "key22": "2s9rixqmPufZJPJqR5afqyA57qNAXBM4sEK7AH3R382srLuUEWF1WmakSFeLzniV19Qunzq6sNEanNRruKo6KuUg",
  "key23": "3GjYMrmK4nXBWz99u2GtUn5nrqTVX7xAye7BdUi9HtoXra4azFZp2ZGpXRjH9otcirxbResyqLZjjTAMXg2xsABk",
  "key24": "3BcZVEVRZRUXnQS8WmXBhSCsXCciaDpETuWW6HXnvdM9uGRt9gAqZMr1gh7XCBhbhaeZjKeNjiT15WpHLjnrDXCo",
  "key25": "Q4gsBEVaCJL4yepY447MWiiHcMud5qyVLM1gosuRLq6CtfcDLdY1dFWavv2BojQ1ymr9u8RVAmGkvstwAHraNUD",
  "key26": "3WS67pdEvWc6Xf2KctMWe1jYS1QQDj5bMCpFU4N3CfXRXZLJYbPUoMKYrJq1pAoJMZs9HDHTETCwcKLtTFcQKh39",
  "key27": "43GCLF2e6L3b3ZMauYzHwWC54d8mQByD8zeLQFzkMET1knAXim5oLC1ogG3BaGLeDW452c1BcdsNpVmJ9ZZ5J3mU",
  "key28": "2NvKz6RH7683MgnZDSU4kYBq3wZFEfZWFVjyZj2VMoKktJgY96KUMWKswi5nPk3JXQxVdtxqqaeYYfCrxHGZtdnX",
  "key29": "2VvNM1b9hGpCdnPWkZ8xAX7VmJPpw7Yt53Z3dTDHg5jKE6LHsH5RHatueKhAJ2HGVgouTYtVrjJ2q7QSpGXwjB1N",
  "key30": "5xasdNKGyGXCWZV6qZSUhRZF7vJf9NxZCKrqhj1BP5MCoj4LZsCh2uoLB4RDgXqoqBbAPza9D9FgH7DfFuu1qzVk",
  "key31": "4khwdixaJss8evnYrX6FuRdXsum7Gc4VkyttRvgUqyEgSJ15snbvf9V52qPLJLf2y6aKziHgr8MbTaxarrAvFyMr",
  "key32": "2K3rWAJKhKm1Yj9VQ7VYmmFiFkagiNbuJyrQN7Cyx99t8dZRLSJKvJKaGovmFtj2gK3mFTgCKVz26n8H7bm7LxBd",
  "key33": "4XcU6kSMmcLKxjSwEMeyL5k6XLxTTvexUmG8EccEnvB64Eg1KntVo35Gm7CXm2x3NAfthYXUV3F7GRibuZdXqPMY",
  "key34": "4FBthGBZK8WvBeJvAjxKaNc2aqfbV9Jjuiyk69E4TCa3SgVpseaQqR6iPEmxo47Bhso89cw6Xbkk3vhm2jPnwn1L",
  "key35": "5nwfSsPeZKKh6NUCezpKLDaZjfL5kPzngcb27WSYikp4aqNE7XiJ8iuz9Aaic6xzwjwmkYEHtxQAyojAntxFfZP",
  "key36": "2iah4w1kvaQAszg3QWwzBvK5MxXXjHbqKJzeChhBy7dQeXvg5wnSekKsiLEb9AyYYXfnUA4AzCC7VgQ7UjdNBEcV",
  "key37": "3Fj6kKVcLJPQhT19m5yc9V3Rvc9QGqVQ5NfKTyVn3AnwVf6zcojk3ARpkUKyRuvqqqwzxvzeoBoajrfGPjKhw2CZ",
  "key38": "5YEfeyineU8866EB3izCHyvREwMjjELBS7PeAHCBfNh2zfrdKBkNjRMQzA4sUWU4HYkE8VVCeCc13fB5nZXzKWzQ",
  "key39": "3gpEwqgetxf1m8JvZvT1BV7GLE5ca1RpETMUUXRGqgJNk7iqrxpaZM6QEYp6f4PeWYy6yRBLP5TahMsJh6ZkHvrq",
  "key40": "5vfTPNDSQtVgfgFTiYrXQq8c4xqq5VScVbLgfh74khivdVwH6hqLDYn4EYweaXEULMyBxWT5CNDb6xFWeerK5sun",
  "key41": "5sEZAp5DqpDym5m6PuAXmSBW5bDY8fjkd6SLpcuukELg5BH1XobPoiL2oLSbRk5f5ivuqq6jXcCkrTychtJq1uJw",
  "key42": "4jHS2KWS8gajYAzf5kSPodACEtTnjSM2icTbwA4AgZeB8Ye15qurCHsQn7Dcz7ckuDHxaG6dy3VKuv56GsZRabrv",
  "key43": "vQycRY6JnrretuSW4FcuT8PBkwt8fmvNUSvQMBSbcaB4YZmaVm8zdefJ1DwE7nvo2qYPpbKBCUz275eMtS9Vjzu",
  "key44": "2ZT8Kit9bhCLToqPZYS6aFVbBWGoB9VsD4QyVP4uxpYnTRgjcdmRACwNg8ZpGtZuEJHeJXHnNMvwbABakkDKeJWH",
  "key45": "21TwoSKVRfYqjPc9s2SMZuo9TihTuVoTSJYEPJeVHJs7BLgWwv6vRkBeeEUdqHvjZu4Vy9gYARqkPLms69gB2R8H",
  "key46": "39UbLGTQ23t8otpBJ5iKQS26p3k6KMFt368iv7K1CZaojuw8PLszm2LCLvbGDTjf7Z7kwEyFTwx1LUeF3p9iiPMR",
  "key47": "4KCoQKKbhs3szvCavsPJCTGuZd33QCbAvg2Qv8wHmfJCQLAyMmhXq8uaYswtqFFhQrZWineH8mgbjNwsL7jmsWw9"
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
