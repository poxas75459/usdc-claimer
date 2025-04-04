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
    "2SUR5U5hPcjEcdPkyjJpqT8pz6VjFyZFkChfxvUnYRWsng1pgmB6Ec376M4M2ZRA3vtZbaDX3VjoYXjR7QmjG3jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s65HRjRkdUL6Afj2LRVqaNbSf4KsKkn6ej861YJuBFTsiLwX38DeVPMssCSSQTfhYbzqNssiSUacYzTjdcV7FHq",
  "key1": "2pVAbNfQEVcF9D7DjjbNspqxfWSmbuyp9cVgcAqmtg1vjZynpRipihDD24cLmPkySLRK3QxNFDucS9Xf1XwczLoV",
  "key2": "61qEAg3jAEjSSeCUrGSD7HHvZytFD5AwAHAh8yHZE6isNLRH6c92Aa2ub5EXJHFd9EnNpwgLGaWKWV8S4i4iR31h",
  "key3": "3xxSiVy6KovCFtq581CefnoL1uTqVzTuQ2gLum5rUXLrsE6tttTS5pDbri5eMCybCUsgwh2d2YdQzTApFpfj2hpB",
  "key4": "3taHkhvUQqgmVSDT9QnniJYcQDnLQv5YCJPQMKeyxkifqYZBriqpxiRxi2n8nj6WiUS7ErUaB2zcp21JPyG11G3X",
  "key5": "2gFfQX2oK8iEtwJpZwKov2cpUzbr5MzZz8wKaNtX2LEFhNECutoq3aakH8L2abrcp1tXzhcWNcNecRFqASmQEgR1",
  "key6": "5aiexZcYMmL3SBVH4DS4RBxnTLkT6FguvnHsjo2RxDEmgXK6YuFsZC6vkMNhRB948RxRwFpRdCrwrGR4ZsPnQ2sx",
  "key7": "3h4FP9AeCxeBNiHhTozp3MsjgwRJgH8haRrrbz3SsidbsNUxoi7yCY4WY3BYaC7TmQZS8E7B1DroMMSZ3cafXQS9",
  "key8": "27pQcenc1vBAbodWRwCmNVrPLRJo4MfGVXQQ87nXAkxJEkQQM39FpCb29NAeeeKvt8CdiWNUka6Dh7ymj6HLu5vm",
  "key9": "2V7J6ybiBwFGHWnRebZdD2cQ9gyqZ7NPWoQc9xC3HcYgpw2KcnWuRTzjqRuAKaJSU16T53tGkzhCyZfFL2vC6ddW",
  "key10": "H39AotJ3Z3SwnkGZmetFURk4VAcTGKL8md5m78PSewATzAxSUZbF8Vb5ZHvHrBoNUBemDHtzFTt9gDtyRVRLpE7",
  "key11": "3gd6Mwe9SPQ9kKJEoLw4TjhNC1ctikUBNet8myNarXekcKbSSyuPioGagYRw8mXTSafQpsAeF5a8q76iiQ8nmGni",
  "key12": "3U8UE87X8y6WSEW3DDw7CrJchrzxpAyTPfWjT81sYLjhUnQLh3668fK4H6hAd18HXhRcMxJQwpj4KHCdmU5x5AG5",
  "key13": "4KBPJBK2rZX2YMe3UWaDTBi8VAC4mPo2SRiCpxsQ4MPiT7pVgTgCj1cqw2CNcVJvCCr6tRokzWv6KJjhJwUy2FSN",
  "key14": "5d28MjKVeix42kBEh6FqKXGxcpiYh2YDBRbtQUB7RFmr3ChNYzdgmN9x6x2Yh9m3svnR7BXSV5wi6CizoaJC7FB",
  "key15": "2AKeDM26JxcHpRxntvjsEZtHbUTpUWZMjVx1Hk8XybehfdwgtrvtkJeJxxuQ3iZ65ArufsSV6PbwsmD8mxFxKyFY",
  "key16": "2ZVhnEhzaEwn7ZeHiECDBHaC3CmRTGdZTtu1VL7MLXEsvgDfAxCsyCrsJYZ8b4AtwM8rbiePTqbS7jjqE9LffB9B",
  "key17": "uEhqWqP8i6AYL8LARCySaCQtHxb5yrKZt5RnjxpHJ4UVQQkiTbm5EwedkJhPDSc1E33ivATLoh4oF3U48YPUnP9",
  "key18": "3pwCJPd2ziMHkeMGHvjwqW8VwSSWLzVHuqVUTd7mHufe4Qv9cT4vEMNAkgYFdkpBtdjFA1D99RMn4vEkVehhX3Pb",
  "key19": "3dGsz3RURevpWadu59TrLxb6n1pJS3KhTvEqZPLZ39bQWDX1Rz9A7gqvUgxZc4jzSAZUhUhiKFU6p4VhPTnJSRAq",
  "key20": "2Z7JyKTtjJwckTRuLufDvzpkf5uLDwjcbQEaiJemYp2nxe71pZkVSL4Z8MvciF4Dhc9pssJk7aks15fgj8YwTw2",
  "key21": "2HbJLYLDovrLTW2EVtmku9w6WGwgsAUKqT9cspuAxmW13eCYZRtVVrsNPm38jw4BCVJGTHTkMijiF9AqXKTgoTDD",
  "key22": "8499JbgP85XyeBojR3oeDWYpqu4zsfuwiHUud8aHLVDc2DQKRnnz7ms4maqFMvrGkMynE2azVx7uD3Z6Yr4sxEa",
  "key23": "3pYP7xvamhejhbZ3EPh6vRU6WrdGzwdhf2AAr3ME8wJkw1NZWRoD2hk5wKF3PrcxG1xsRsRrZi5eC1b8iwy7oXaT",
  "key24": "wxMhxEc4ZBaMDsafP92XbehGdmQv7wMKgg1WAbznjR4V7GzFpaz1Br6WT1FpPhsj8QfC2TafCCQSsxGvu6UMtAj",
  "key25": "2BG6JxrwM6qr2c7oBtLZpKqoJTRuGVyB12s75QHtqhQZcnp8qj9fBoLKg6CVGbv6rajp1xDob9zi6HD4Bu6WhtjJ",
  "key26": "9YtUA2TzSwzNp7LLHMVpiXpNoLBPiSikknP8UMsSfgztRxVtv4BUofr82zciVRstodD85XjentBnoCCusQtMXbj",
  "key27": "5Ufh6nWjegEHJ6qxYjCpEaLqCF9VDBREvypT45dzjmAyez9DMMtVBAppJ2cxDKgA3N6Bf9Xs5g3V4iRADtfUzSmo",
  "key28": "2XETF248pB9dUpAMunw5Unh8nQuhqqTwPhXzszD7XQiJwVp2j2eaNu7EDaj4HcvDfHsBy1Q1zu3xck7GV9zgSzxL",
  "key29": "tLxqBh7UF1Eacwdz1SdK2vzqt64voVHArgHVjmptqBHeM7nAKAkLUUQFeSUSrDvtwBA1TUJ7k46qXu2JaYx4ACJ"
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
