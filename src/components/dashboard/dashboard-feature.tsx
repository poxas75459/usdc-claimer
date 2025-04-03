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
    "5uL9veJ7f1MWgfE98wizg26GsMJePW32nmNmb5kFaH5CP8snxWUgW8KnQVaQVkcSJHTZKwrWA23jRfZUFYaLgzAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4haKZYNFue1wpD4pN7wgPyqF8PqA9mqcUFQ7otEPR8di8gaXcML67RxEDt2pv5jvD9pDFPwBYznbEbnFoAubsXCS",
  "key1": "5sydHd3TzFcDiZCuvmwvfpW3nBdU8VQdu4t9Rwgny6J4HiEgN72sv3mFSfGM9tTBkcABpZmMQwPqdnSkUgsSSRyR",
  "key2": "36H23Peb3CNw7QRCC6NCTsUkxM4paASEBZJS8zQEGBxWHuWertnVoQ8cWw6MrMh5iXCW4f9Ta4gK6U5h2yJ5dU4x",
  "key3": "pnstWUeRVQqjfjYiPTUZr6qq247ijJgumc3dM1Z5XXyAKHESC4QU79ur3EEgdr58g19PQRVMvndht123j4VvUDo",
  "key4": "UnJFyuEKiHCWkq9RDQ8VmzmbpZKLmNRbH9EzfwjsSivmk7abL5FbsEMenhJbSUW4uzj8yhNwYxbUThRXM1jsKAR",
  "key5": "3pmCWznYttKXfXLTLehduipdZwjzdA99tzZTa5eZZeKXQTLicnMdLmPMJL2kA4EhVkQerEXhdPQheEXEGtTeTsEV",
  "key6": "3m3jNLHJHy61vyh3qt5QGczuj8nLKuPmHC3HXbheBNp6NfkwkTe4njBgLqWhtsUDmVn5Yn3vKCbRrAWhEKSizNBF",
  "key7": "5QJxaiYhLDJyCor5xTdavFKv44CvpQxHWptHNy8MWxo3niojXVu7YDvQAshZJJXXAxmSyVeVNqJrbpCnUHPumFFe",
  "key8": "516CAMUW2jKTXJrbEH5qZV4NPx37XMDPhTLtTzogzWjBW6fo3FECVpS5jnLyhXMNgJmXWkEDChTEyMMxXmbdXWYC",
  "key9": "3EBNUJBJf7w8Nq2acXKHSQAoj98yxph4CmZTK2YVU58urrGkAF8R8djfrzVEwvGgnkPNPwfPuEuAPdoUQq1umDKR",
  "key10": "25YFaxoj7DAW6EGZ3Z2T8m6jCMBPS5f1QJLQJTCV5eFLPAHR8ByjeXsJjPLzPQnxkRsLPWi2xgATj41RKpvgks5a",
  "key11": "3AVyGF3pfyWvn1wNz8LzNB2ak3mKTH7XjQiJVEgBgrNDo9Qsg4Zsfr47ishcDh9zANNSP3VqsRVuks2bghDsX6LR",
  "key12": "jkq9hf8mGz5MmC7SPFieH5tAkQ8zoepoceNDhKV2nfPrap1LGn9KknKx9MYDgsE39FHD6zzjAgLbL1GHiyQq5yF",
  "key13": "5195NZCTR6Fk9zkxXrvKJC8jSvnakHBE6gdc4QvbQRWTh9HMTkj6odUGJ42bpt2NfVq4RoZmKe8gteDhVUvXFCjy",
  "key14": "5wiKV1WDznUFH1huW7NvQKJhVSf6NbsG88raCR2acMqTPv7nsvBnVcyrZopDRsryMV7nYTpgTmX8rWVu7iwgVCuV",
  "key15": "2qxPuZ3K8v8WUzNpDK64FKXmyS8XZCdyhGKHQV6KPfra4nQF49rZDjEM8rYhQ6UvyMAKZtLtXKu1dVNxQjLMCATx",
  "key16": "317C9YFoxquzrF9RpKDF8oxyCDfX86cVZdtNTFxvY2Rzs516tnLzzwS7TmQtStjJnbZAhDKRgjajPcL9mtVj8vhT",
  "key17": "5AZuCKoHFPQURzN25UwnBeQpT3LUrjwdcEQHkqD5Q9iwyTvs1a9FgaAZv1rUwVwE69PKMQ1SBenZmtha2WcYBm3d",
  "key18": "zjdtigjPdjibwDfCJjwnDeKUXdt8wB3gVPaLtR1cs2NWs1EAqYoBscq8pRyDnTmgespvV8CCSyg9db3N69ru1Aj",
  "key19": "4abG9GPcaaJMwy1nHqxoxtms7EnNrrMknCLQuuvcoPKiQqi5AVkVHTDRm2G1bcw7R58d38s7o7qotTXSsus8eHdx",
  "key20": "3GLz5n6TpSrszrtoGrY6ySyZggDKXBwJmpmktzNjtsGJCrsqCkeq8fmrDSEgWcy8aUDCiHVK9auw33yb9Jwvfat4",
  "key21": "5JyJVFR8ycmRLnotaeKCpcbcrSLcUUbWsLxmjZGacwjVRnGqBNHbeEmReRZCLiQKp4rB2jmQqG5wSacK2vzee7ec",
  "key22": "2ySLb2AcywMunC91fPQjsAMnY9B4GHqJizjewf321Gvte7pXTsYE9rFzuJ3HxrDSZGv31gPmniAhazx1ph4AJenn",
  "key23": "35uQRgd2jx3hmdwvNxfttbj3mkabgjVguCpxbaXpQxb4EigDzsoaEsFknGZzijzLrwh5Kju6nC2RZuYmpmAKcebd",
  "key24": "5BP9HZzS1GhXDd2eKT8WeRxsPNKH3GtxPc95J8DuLim9Zd49XqeMcoiHmR7JPAHG1aZj6cA6hZLD1xRvQGmz6ojM",
  "key25": "5a2ahL7gSHZYg2kNwHnYb8cicygrL2KUPdLBCwL3h9dEWeaPckCffM2cfAZjoPLkzkgpSkLZdF5X4pxbn52nNQvs",
  "key26": "4HVqnccgY6CHr8eXHT2FYNbHzzEGMSzBxc1hnVFnWYkk36HJM9rPkoWVUtfT5rmXcGj5qBeh6wQMFVvdPBfiPWti",
  "key27": "3eHEgPXCD8Q7V32jxT1wDQFeQxq3XVpHMRuQU8LGDydmApxqanF8CppiuEWXgjNmQd7xaPq1h4jPjryPWR3LzWyL",
  "key28": "Z1xit6zwseTALfHd1M5m8LxqPYGYLqsoiKy7c4CyPPqq36nckmwc6mdzvTsxYsLmdea9xt9AvpirZvw7L2i3ddf",
  "key29": "5t5diSe1YRpPkiK7qjWEpxazTVuigc7fR8AffpB4BvsA9nvgsaeitu1LdpG2seVUGhsaxy1oqYEHUJnVUYGsF177",
  "key30": "5aM4RB66fkx5STR8DbDtJ27UoK7urPKLSZRhYncPAuGbjrkW3a4Y3ZjTnrgH7QDHmV4RPDdJwFtTi7m6re7xRmXZ",
  "key31": "tXnss5nNLycqLMmqLvZopmQo6GZeDoBnXdc2MtTjd3yzXNy222FV44eRexeBp7mEe2FGG62L4gzyBopL2V2citw",
  "key32": "4h8jJ1VskejLDstGPcBh5sCmiTQfNQswXRxvBqbtnRQWNVagBcbWbPXeXtLRn9Td7mmBQQrNjTrey566pNbnhRxL",
  "key33": "3Drqefm3RF16z46yRn1VfGtpPMsg9FYcQmfPwDA4tfVnK6wbmYPyJ3HXBr1DA6E6gfHrk1jUGi2E82XBG7HAqdj9",
  "key34": "ennWvi7KafxoThSRyHf57EygRetUF4cTBxg3nE396WTpCR8nvPmm5qjq7S5LKJgZZDmNA87c7G34FVBTJcfg5x3",
  "key35": "3n2gSThF59JaJGCjNxPKeNcuK7wjNMKxVxwvF1MwwsCvZFCYC2eqg88wEwwpR6xtJ3Fvq5aqdH7yzEnTv7uKvQj1",
  "key36": "2nKhQK4rD5bnavbkTTjaUKjxgw4ihBZjXzECFsEUTuMZFcwLKaRAY2JphCSRKuTA25d9UNSkJQH5CydsTDuR3joY",
  "key37": "5d27T4Uxygf4DjqUJLQ5gUrcon8RTpy3zvVT5JTGnXrBoCaLA7E6Tj9nMyKhnUhtUC23sS6qpzom1mJRJqbJPJDh",
  "key38": "prDxomTxYSNC53YSso3cGjR4hz1YmFUvpq4URXow5miXcG6B3CZwm63osFAeZhmTRR8T7gJTvrUFW3zyQGRZd4E",
  "key39": "22wwbbfofu41Jj51rzY5VeEqy58ibmLrZoVUBPjMCkkPKBTFrkuP5Hyz4kPNCX8qBUoEwF2FCW8UMZUHyxRN9Kdr"
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
