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
    "3NfhJzxQ2LhBvUJbqxT4Wv6uMZCQK2ANLfpETcwAJUY9oHcL4zLmZw1K3SJNdQiyg9Z4tuYCGkh1rwpdYYbqrRLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNNWemDy7t1UXLDwD3NEQw536eyg5naMncuGncHUN7DsdePSxkCH5CPRGKU8yEcuBjnYMuLHHxvSyCDe5VzyvxC",
  "key1": "3zNF45Tx2Qyv1ug6G578WojnCL3mf44GV1KtmEqtLuKNrRftw3yuhrfxtyczpDLPwEUR75MqW6gpXbqkKLJfyaCt",
  "key2": "2uoz7S2c1MNYvFrZzPbRyvjuGWjFDzGNU5MWXvDhrSDx7XNMdr2tPsjH6ygkCSAjJmMJ5oW94dV3skFy9UgjHTBV",
  "key3": "2ALvtGY5qjEma3wQiuHcwoGHaBLJ3AM5uUJzDcTXEta9vpkvccTGRqyTuxJr5my8GLrLwEsesABR8ZyeSCfzVqkZ",
  "key4": "5sZTzkTBh55FUXbPDgHAXbsu8LABWKd5oKmF2ZpqNgWWH3hQfBhTZWECmwxJNoQFtGYPnBFgo4xUbF9CbGrkY4XN",
  "key5": "Z6FiS1nL8FPDjP4M7GcR8PMLD5a3MicziUvA2YxrMLyjsm3Sj4aj3GGkQzBqwDDQSKgwAptuCQnaGDTwt23cSsc",
  "key6": "5Ju8HpMkePwfnYUe4SzpogRJzFrwzY9fGKirvRhw4QfUabYbRx6XAuKYQRmjX7ecA9wkNV5jhUSZT7V4g6Deh2yU",
  "key7": "z6qZBcJJ2JpBoXp4MpYya5mqwSUxPTGPvpzJS4PN6zYWpmb7jJsErRKUpynTJPwzjdYsJfXZyot29Qfqeose6rZ",
  "key8": "2Tjn9dATtYRPbQzYdoeyUyqT47VqifenpFp7bv1JzcAiR42sMhTfpYT49mcrr7SZS8LrToB5gBjSQJCZt8LuPSFB",
  "key9": "5EdmmP48ntz4TQ3NRGei87hScRXakTQZe4deVbrFzRYC9FauMouKuMZRCSJSHAaT13DRB1AozBAtKNDQFc6J82gm",
  "key10": "3HaKFa9LePTiD4zvzz5se2J9yyY7XUh4Pn1Ak59qH5AN712RZxENQ17rdU9bvW1dziMYQqd7WY5cwxfjcnAowd1G",
  "key11": "5Txndi5swqYYVaHbfcTAkkiTZuP9zwzh8uBQS9kc8MQmpG6Ktmi1vvg848TUr8AK42kdD82EEuezp6MESizPme4d",
  "key12": "21aDH26B5GdgqKL6fUu7craSQbQBeNF2DMVXp1PUFWdULZpxDkPxsHKJrNfqTaSR6SkZWtKMHf9Jtfpqj59jdBeQ",
  "key13": "2Z8BnoKAVLsBHwnTxPnyHm1Bqi1Uyys6n8vbQSnzUnWSQ62pr8Kis3qRumwS1qJ8ReqjwG3xdQFc3cbMvA6zo2ho",
  "key14": "524QDdPgdMbGNsR6ZTcmPSYzEytfJ4a7xBjTyDnCY3HYrV13ekFHNgfHv8xpyFU58ftGXqzhnhAqQTeDYvL9V99Q",
  "key15": "55BBW9huT473aUUdcbHzovwh1xZwM4ttafBNyXyAudwnkVTHDvk4dYDwCs9dPkhn6AGajLbnQrbdSFx62PAgigUz",
  "key16": "3CgFKWbjm9DbgpGB5cSg6HGFPjdWR1HXkY5nMqLa8x7iUQMYLBnehy1jd1uZtCQ6UrrfeuAkEpyc1w6hLP8ejsGj",
  "key17": "66LyZW8Y9egNxfKdHrovQtxCU8hykKwR1wsjYzH19LRjbUFiJ17aBqzjeX4BT3QXbbBgvzP3aseFQoyvWr3kQXDs",
  "key18": "2Unoq2JLiqcJDPvsTiWe7VbXCVMMBL9aruNXtABsbXs5oWn3HERXuwu7EvaAftk4Ybvf8r5jg58d8JTyXHcR1EB3",
  "key19": "mzresYy3kiGLsvgm7KcELpQ2aHS1Z1bvidKPfCEw5nDZUsCXbBLY3QsdFf1RwqKY1wCKf9ytCE99J4eW1TwRo2v",
  "key20": "3ZpFdmmoCZiGU3xQK1SSaiMiH4j2heFFbEYFRGdxGq2PAXGN1PkwaNdh6C1FrFXAH8HNXupLTGuNYigAgDhVvDoJ",
  "key21": "3dArvtPh61V9828XhCC4FXvwWxtx2yceD6gStvYsCj7ET3nt9x1qX46uAig358mCqBtdDVFsFTS5kZLWSTHXnVQx",
  "key22": "4F4Jjpg8qcqsKnCbKoBFyyB3GXh1Ar17J71AbCbnATJnVutt34uGhrMCZBrVfNB9oxJc33yrCmWUp9FbgUD2qWyn",
  "key23": "3jRVKGX8SfXSU7eyZNYqKhm55ZwbavXoCLNEZxTp6gpifjdyKqJgSWQsHXvrrVo5CxFnFti5YDF43KPnVdhzwU8C",
  "key24": "28YATdV7m23mRYifawFMrzaM23jnuMp9mfLjyyfrkXVUdmFtCE9XcwP8bwo6dh2QKxCiMdzC4s5wArppMr4LzwpS",
  "key25": "2mUYUmTXtNVmsF3JH49vT9xn9Uc4cB3WcKaCXMR5HUQCt2bbWVwKro58diStjuk2Eg9szuHs6SbzFPJ1LzB5njKY",
  "key26": "2dQehGM5H6V368oatwdJQzPDTT6NxFH5WZMvQSCUSNqwNQEoAvUndHTbKT2R6NCKG4Ffj7qd7VXes1T8D4YRYZUX",
  "key27": "TU2VbLQQe3SYXNexhEp2vzfb5ozhfmWVNEb434DCQWZkkDRPRB4iDuiccW1PYWqvQNaMJpvzTobCzeRbwtkwcbc",
  "key28": "442FuJwcGwGKkMn6tAKP6dqGBDA2nUvea43EgYQny84K9L2pP83pzjhe2z81LMuTRF6YTcnKxEPy3A9jMaQxKB3j",
  "key29": "3djjrAJMkjoJAGc466qCkq7tMeBuux3UBxmitWFprYSLtnaoGeXhntxWP2tokxgFPG144ai5ofdB9ettyy7Eb6Pa",
  "key30": "HVNAVqMPh2wxTRmg4QZPTWDGUEHCmxJjVwVHfZpb4M79wJbNJDZVGtwLREyf9gSo36fvZHpczHrbsccPGvyokYR",
  "key31": "4rLG1V6HQCvmcu77gvndgMavE31M3tZ7gxpxaMB3oU1FyeKsB9NsQ4vd6TAPSBWkoduKFdcq4F1Zr5oFsLcbPsSz",
  "key32": "3hPULRZCrCxFMYnCDffDQB8vNTEtX6i9tbyjRxBtmGhrjhGumuo9xNGaSqvxtgi8EqZnHRJwQhsTYHXXUVAboXw5",
  "key33": "2kcQ5ydfchNjiTpGs8nLf2TmdA7R4RsMCZjCNjfmH6jEqm3tAhrKEQqyXudNBN1NZjbxbyayz9NNMpiWbKu2E4uq",
  "key34": "nK7NG6ACoBoVx5EsVjJ9vBQ7361cDHZwQFfDkKa1VvzfX2Mnu2m7ggcgqmQRFTTnzkWn6D5gufmkxcf9dTtLYL3",
  "key35": "3b31qfjpDU3pLaxXCN7xkdDxQ766hsgrE633XhNd3ThN3BX2q4NVx6M8JZw3akk1H9PrdP9nFSbbY5sCsSrGdGWT"
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
