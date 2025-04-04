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
    "DFpdTrJm9ZE2b8qVrH6psS5QqRtcaf5aaRd3FHRtJz69Tkk1jsMMAR48gcfbPbjfDHvLALj5JMQdU25Aze9pAzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61zHibTXTPujr9SnYDsHXitR1heXMtMaqCeEGbgGoqtWiAA3rmLnevcywNWmjpL3nSHsBYKXPhscEhyXm9FwRhwE",
  "key1": "5LT62HpnUGKRyjgRZ5zsCAkAq5VQPEg2N6CRU8BQdnDaRWFMS6645uVjhfFbpAXj3L2F1NTXBSS2Uq7FRrxEUmq6",
  "key2": "way3n5FiFyH6QuNDzTQQwnvbzDvZ5DQNYWTYLAw7tpRuNjV1npjSJqBKitzbY7u8hxQBRw8Ai1DotiD7vkjAuNw",
  "key3": "4qpw2eVNtcnNdXvqcR8k8DK4We4UngELq2drtd2FUxn8RxTqfmMAxZafYyjiamS5vkHaEG512Tni65CESY8weK2N",
  "key4": "5ZBCt2g9YRurfmHLriNfaE5g7o4FpjZnsQGi8vDHvSHww7uwcQjvEmTeeYe2zsGNhcBYQVyCRVfhMe1kj5v3KPDg",
  "key5": "5Q5kZUjNQrWYgLYRdnCbqj1nLZnjqbX39fpnMGJzzCQdJPtazdfAzSRJUNcajBNrfbeVgMf3SAjdZ1cofJvfEsPp",
  "key6": "4NFCWqhcdWEHz4DsLANR2mB3rrfzosXpwMRoV67azEjqTVu3wvAwAfbNdonQXzXmX8HmrN1BThx9YD1Yotzjuw3Z",
  "key7": "45zHGgoKZFnQYyCGKtnBeCFPUCNN756KXyZ9tmcKqJ5CJixG2Pwu2hZhYG3dEukNJvR1jTZumXtGpfzfmB8AyBsS",
  "key8": "3o6xkmtZDa32Hdz7JxMZZ4cDGwedQHnJp8yvwS56MEYe8Y2qvF6fFf1vfN9BxyAcMQ5Sersioo1t1GAjWjCZSKss",
  "key9": "3EDy6gdUE3HbnWgvGZKVfj3f1x4tVtKiuZywNaE9BBEZhdANkgZypjswzAULajuX2DGuj7kVkjdH7M6UpumEJR4J",
  "key10": "3ichwkesD5tgk6ceLBxQyA66PQd2H6ahWYSzicrzkMLruXLWY8GF2fxywBCMdoSuheFot1B8pN1NMjecryLsYmRc",
  "key11": "24dbiqC2HDfZAEtqK3FUJKvNeharkJ7WEVg1mGeApVeBdGyKnpsaSDCgiReGvHB1SbMpT6xgi7YsdepDdtKHg6hp",
  "key12": "2sE2eu4yf8AwWLEPDnU8ayS4Mar5icRw5kSjVrCF5ZopNcxioFeMHCe9Y3vVhDqk13fWK6uPC3DAd3wUvoYiAqyY",
  "key13": "2bqASMWR3fbvnyVYNofXuFvdbbUfAy5ynAwXhvwDM2kbTDt6Pb5JnyDNZ8t6nFLvJfHQRL5Vy7DC8Cw4Yy5Tz78p",
  "key14": "5G2x5hm59arYEQHDVZWKUjmv3PdV9vqABTLT7BvXr3S5WHoUgnpaFFSzEFCsq4bCuE2GPn2fQU45nTNFq8fNMC2Y",
  "key15": "Jj7BanNzKCpWs4ar1VQcpBZTXDnmY8xGpVtbPaVoD4MhhZK4vH8CPRhG26zQX3xCrgfmdAAA285GKQwQZngPw1r",
  "key16": "56EKAh4WpJMFCL5Webuxuy4XEHkxYY46rDmfxsSmwpVhsu5ym8GJvBfigqqDLA7jF7MvxXve6rNM9au8HAcmZyac",
  "key17": "5frZDWtRP487DFoSFBVhCLsS7coGuyVWNyWbZthmBUHg3NwqTUnYH489VpoY4PCGM9xJ7NdhiVYTCSXYyKacsx4v",
  "key18": "2yMHX1d7LCpmKUu8ADtpM35cnSf5QN1m2wYAjKpvmmimv5JPfUCUM6dkHpiVWshAHdqF9g8ZpYSHTvPmd7aS9kCX",
  "key19": "3yifFLS3WsqgVsafyC431BoU8Bun7gyXhbvqc7sx7dTPzMzU2TYcbqQHiMnmAEc2xQFWNVanpbCfpv7hfkwkLFBu",
  "key20": "564USmwMXEfJwMY18JGaqRhA2wrUeuhaQ9VGnEfqy5zuMcKiqGJQZi3VWPcom5i24jQCqdrYWykuK7WVfzAC7Ah9",
  "key21": "4ouBgFUkKM9kjwYZ1mbCoe2gjsrogbo9XWBbAh46ixD1Y9nUrRsbmrWTHscQbQhbMP5oqQ4WaB8LXxgwpAxxRhwP",
  "key22": "rXE9SjfJNJ77rVFaHBRpoiDzMWk2umTzU7yUecdZF8iGbz3uqnvsPvPQtBpGVtLXZofzBuPYAcjSdxz2pdC57qA",
  "key23": "2dmfduX7jSiUN7dqxsKqnQ1nrZ4Etdh1ByzNrQLw5qacD6hMcuYxpwvz9L8PvrrQQhzqC1JcjnQDtTaShaSsb4wo",
  "key24": "2im6b2trMHUhv8t6yPFiuppqFRTe1MrBJ7X41xXeJyvApXmMJZt7cNdERGvecG2NSbwnTZdehjc83Pg7WzumbrnG",
  "key25": "4csus1jbBuqx9uxVuZQGYNQMrpjEn4jjJM8fXDUTGX9giweV751AAPRFJDUwDtbPuZqemvv8HNKnx1CqKMTvFPEa",
  "key26": "4JzeCZ5ZtM7ff38vYpgujfk3zVrc9cGq4hpMP21xnjib4qevA9W31ToZR182hVaDYNupw3gp9phLJMsAnivPUfjJ",
  "key27": "8hcZrLBJcnWSicUmV6GUXUYxFwco3T8uWRKupYwdEWtwPENvzJNtSi98jJ4AEBnk5fFqHhgi89wvfUZuCCYfn28",
  "key28": "4TMJgbmAKuah1kdR41DQPtQrgtnLzyEx85DGaevmY8Gz79RkffU23qAzNPrnmvW61uw9SBjJn6sX8c8i38ugHaNY",
  "key29": "5Em4A3ryEjCXaSTsW5CEjiFyXDQmKEneStGWjurMpd5NZFLEdRCc5sT8kxesCZyWdKDmM92jLUAfqdSLmrcGQhgx",
  "key30": "4gAu6m3uek9HJKYeEMdomU21GBKGf27BHKTWx3oahrx6ax1F1Evfh8toMx9weqRAavwtFhMk1sjq48cUMTJkBszB",
  "key31": "2GbAyGakkUwyDtveA2Npyaz5EGJ82Has58VdDqT2fYGFNrCjZw8usZigRgT7ZnGp5YqA4MVWzvsC4UtJrs5qYcVx",
  "key32": "37BcXoQ8VT9sJtHTA5GG2rzU9GGBWWfmAR65ycrB2pjnR2KxW9ZYXan2RdiNgCRDA4Jz7rGVKxgdRsAA1ngBapyr",
  "key33": "5EU6MP4w1TudkD8KviWupSoAx2mkCym6CrPuaU7ooPktm3kcszCL8xB4hRXvW5mquNyTAXvVcFqKQE4pnjPA9y45",
  "key34": "3GEXE6BHDUjfVJZSHQhETibF7Xh3QBwL6PCM6wp9KFxEUKVuZPTe7RKk7C32ShMJto29B5Gnh96R3uqPVbvjcFV3",
  "key35": "5qya2zaLk3WA8xvLiohmP7AvTjY3svf8wbPsaXkz8VcwMJWbZMdnf3EGdBozoY1NErmoTjYCLpJQAHFvSUjvK9cr",
  "key36": "3QJhniVSdKsbG7cuvS3MeV5rj1R2hhiamXYHUVbMmNUbgHPWi48MJNHqE9FfXiapn7zgm6Uib78MEgbPhF4q8suc",
  "key37": "2CmwyNG7t4t7xz1aexpw3xa4zTAziFDmh6KyjNztAGrXeaxK9HA4ymf6vNyqbu5DKKXXpGNwu3CjzTgzxpCA685s",
  "key38": "3f1v7qbkcZdsUcxKeqmXSaviFUaRoQLFpexo3zLubxX5ANf8bfuPPDhxXVzKc5A8MZCoyaBZMfzHhLaAasTE3Q1W",
  "key39": "3pmzDz6geJ9FTT3H8EdxLbZGcwfpTkn9udbYVueaLpZT3r6ExtT5UZ9HCdxiqErSavv1Yi6TN8H2g1FsRqLFp5Qo"
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
