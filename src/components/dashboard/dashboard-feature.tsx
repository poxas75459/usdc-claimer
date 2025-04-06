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
    "2JAaN4LjodpjNJJqoKMLqJSBnocn5f8xfWfvBAkxgLPJ4uCChgq7fibM5F4qmSYw7PTKdimubuzKCZAFZ1s6fMxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7vtpWPHCnVfwmx38gw87YcPtQxGosqx8EK58Zn1mXFntHehRfFUdDaXECgoY7tkDCaFferk2QYreG4QVrv4Mq84",
  "key1": "vT8ZoJZHE326L37BhgbD38NLggUeX73LEewRt4br2jb9nt5SDHUGFLLQCjS4BqeARud2eXMogWPRCcauLkQSskJ",
  "key2": "4ctL9zQvU19iSKrCwmVryLe3K1XKvE5PQN9scNaQarizJUE9Wz8J9eHoxmoGvt6KeE482nSEbL1mZw24AZ5maEUv",
  "key3": "2odxDxBvpybTN4kLHZhE1SV9tzp4iYqN6rTt35MrCWrWzKwvdBRGrRjitujrwKGpgz4y4aeqj8DRJkGLAHsBvfsj",
  "key4": "3X4cM3iDvtPi9ZCmYY7JXioDo1hQoDLFAuByChZQgeFYRuayFXG645udkadnaU6qTGzPoHjZ2kWtNg2SUfmsNpxB",
  "key5": "Z111qKfj56zT1R1k2ULsn6bU1hpRuha1MkTHog43ndrkYDmNqZ4Pso18kr8q8D7gHGeHDzANtoUeHoHQJp61K5J",
  "key6": "3o8um6bp3RAmchELtTPdcPmth1mpGiQYnzAztjhV3X57epZraaxLv8gwJf8VQTkXjLyti1wQAsZvMMpaQNChTgPQ",
  "key7": "2bPWbJFswUK8Ub9c9ztybUPBkxftR8BuHKEHNdCrPvNkBKHrxqqf6RakZJhMwWix1Z9rrS21s1vTyvtLypiVt3ck",
  "key8": "4DUJP2vikU69TxVGEZnbBJRnumfFFtyLc7JP6yerUhQf2kGCk979dL9xgeiANy8oBvjif7eaDhAtWezAK2sw7ReK",
  "key9": "2wEpgmxhihMLnGd52N6Z9NBwCwVo3mmZTkn7vcynqKwqCB7U52gST8kwLFJSRBKGVTnbDyrfraECBtMpZtb9FTM",
  "key10": "32FbykfyPo4yGbE6i1NfVkdeCAZnfNdK5pdWmvBMeDZvdHazSNo3GrUAnsDphzXaNgwK79zAboDgyoVWVe8NDZPa",
  "key11": "3CzpsjrZj3aTsoWpQdLhkB8Eh86VD6s1YiBRWcRfpNMKf4VPfhrZ3kUkX8Pg94B99CGDuU82RbMj8VVvBPd6SKEL",
  "key12": "2ZNzN7PzaoanWHpogXFg9rxi6UTquD3R5wAk3g3EjSVff9TKpeFwsodecJQ2wvA19bJc1q2Ej5XJz66ZgkbkZ8tC",
  "key13": "2w8fqhRVwp3J6qu1jYNCLMaRJEVHM5VeX26kFjzjaoUwpWLjpcSBqVnCfxRkERKh2jUir4DukTDnwo3eug44PHbX",
  "key14": "3UsZF63fG7QgBqDq6Y6HNxdXpFgViT6peo1HhYg8f2REAmcDHVEgh9CRdt9VRuvX5w1PrrTTedYEzk26ipPG3DZf",
  "key15": "66xPge8R65wW9DXLkfjMzAKU3vnYQUmA1G95hmSDKHP53CADevkwafcpZRYpPd5CjhKoAw616EsXsnT8DiqTs6bM",
  "key16": "67jYGVc3K4uiPo2QuiuSiKKZA4La9cuS3AAM7ZsfMyZ4fFkdxAdGv6aJc7HyZvKEPH3YmnPzhkngPnhjrFn5Nfv7",
  "key17": "3WKFnTzXetjyTZ3CCVAjqmkbFeaTtsQWd9zDCVejD8MzW4TM5imufwehwfm2vfdVZc3iqBWYuZ6whTSA8bAf9QB8",
  "key18": "9jFnWhadhhq9uA83ksTgUueBhdA65684wymJ8wz1cEEcLqrbKmc9wPjmtSwdLTJ7k94dc4kCp5LZdC2bxn3ZFad",
  "key19": "35Kwt63XKzqBuGHNJVURavqNqSdSybHodeUzkGeeYiRbA6BoxZufpqxieXXmG3jCaVXVfY4Qfs1wEQxFNzMGG92u",
  "key20": "3YYvcDw6HkR9FjoRbSwmH69LGnuGrBBknDzMc1cZLbZX8QBAtJtKB47VPzBD7JThhtN1aKW3MN7fwB7k5EWTFpQ3",
  "key21": "vPsK2yrM1pDuCFtoWzppBYXrJergwrMe9reTCSfnyPVC8jQtR7sbN2t3r1kictu8bC4wu2W6E3yNyct7X5Z2Ucm",
  "key22": "59RYqdKUR2NQZnxRAeSaDuTTHVUajiSa1vV1ZnHwgASy8MtCSgXq1T7rV8tVvgtSifW6tZ3bCJRy3iH2L3KbdCGF",
  "key23": "3aZTzozc71TYuMhY3jju29QALWM3ETda88UQWSuhzzSurYpbkdA2sNrGnTPgj2ncK5TzyHYkDU3c1ucjPKuwsVPg",
  "key24": "2WRydM8bkgkyWaEQkYtQHqCqXhJHvHhfRA3ocgSpYM8Dbfjpoz6QLGamcGgNGanxiVhru6Eh98Pwaw6zZnbLV3gq"
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
