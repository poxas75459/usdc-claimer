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
    "niytLbtSLebzsbT7iSrpBGKHHnMSuwq5gdKex16w4ZKTqkZps3zrW4HjQs3fSafVgaTEF2WBoE7bMpCh1cZgEt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52q9ehgooMcaZz5NHJv6QGv8CErUzMu2jLi5P3frAmdRqGH9muR186vXP13JmJsgYeeGJWY9ryFo9Q71ATci4qSc",
  "key1": "eEwHtjuuUnjoA76x8gSWbuedYvzkTGebMUFhBHbY84wiEg7K2VLFTRp9k81jMD9anm16yic7wHwZuPgjQHmDxV5",
  "key2": "3CWWdeZmUd9fpPF8PAxJYocupxu5HpGtC5681npsRKy5Zb5XsGp4u18sQN8jNaa6xhrYc7xdRGdymFdzUCptKjha",
  "key3": "3hDZCzdSQU3s86Vcf2KnhfJjc7wrUuGqcYA6j1hLatMS3ohZgNEzRswewJQGYTzVVqbdhqXgNtrJ5AW2NGoRmtie",
  "key4": "4mzYPu7MZyRe77tjGHJBAzLobYWkvt6vLXA498ehq9PRc4Nbjcd1tP76DmdSiQdEZTPH4Vbycjh6dadsme3xQkTK",
  "key5": "2fxPcuhneCXPtccUFGg7EoV3R9V6WhmHnFHJC4zVc4Y81yzCfWeYei8Ako1NWKHt5uK9X1JNdkYnPFAy51G2FEdc",
  "key6": "1ecdVtGSASKCoZQjxr2mKMkFeAJ9qqry7nEPMftMSDKjZ4UfnaBzrzbsogavvJkc17MsGfgLLQKMKRhYVCP18LW",
  "key7": "4PEU752pjMjvpCrFyjRZFFcdmADkqAMcPP5MT2hjUdpSjBZZNhGRokHMTp4XNLCw3gSjomwj5TYeuykqvuS8h12e",
  "key8": "2FaFbMv8sBXZWZ1B6rdT5VW2RvDbZof3vZJvkWg5cHhBn71N5npMyD9y4DvckWYHBz3NPXwT66wSe7sVpFiLh9pD",
  "key9": "5FyipWNecAXg9WT8fWZpRqjmqDpZFvodiw7Divp3LyrjkpxqxGGEFHBYKkctzk6KTtcRXdoQDWXkRt7w6eqRF1v3",
  "key10": "Jr9jNNM9QgnS89UEamRvwtWJZC6bQtibNFbe7LjfQMMijaPGD7KVpPJXsoeav4mY8t3iZAS8tvoEnAHyiwSvqBB",
  "key11": "3CT9gaTKhibWaNTMx7jAUCH7YN69Um9nb6zfJuRXNJW2vTfbgD5Y4riPbF8NvVRwWJMR2zTMLou18RFu5m6QNzKE",
  "key12": "3pqsCNUcnC5xrjY7kxZvnaxjZa54mTSP4jf1Q64yDBfWNJkw88Vc2VWJZzWVGAvwSzdgRAyxmyMis7oxbMxbStoS",
  "key13": "2xH4fuRceynwV6YKSgeohBJvQ2Jf6XUEGaxVZnkX6HL5kLqUYCcrFojL6YmCJ5PKHzKbKeQHLnrNeXU3bxenyjbB",
  "key14": "5KUFQ5DRtkBtrsJAV4fZqKevcwHyGzXhm7ed5bjWMcWFF41fRKhUEUsYqRw1KRi9Jfo1ZdjHj8nJKYVPMpPYeMBE",
  "key15": "4z5zFsbZuTeD6DjqGEHqpUpuL5okEe7hqAM124kXxxkKNcXUs4mFQCCnifLzrANcWL79Wxz3hXooAMywCin4meBN",
  "key16": "33FrRNuxCo3TggL4BnoUzsoEtwVBE4KumED9r5ztATEHpqAwE6vsoGR3gDSH9hs4fwtcmcT6XSHmm9r5KxQBHfy3",
  "key17": "49pP78Y5s2zFdfVqApppdGCtqaMbFxnGhZiFxQZAZWYaBJ2UFw259WnUyiQhcLMKtFgnpDoLdzyWuWMXUcxUhoJR",
  "key18": "4x8sRsHgHLBmHetg8oegzhWExdzPfCWyRp4DWRnsfZYLPmz6WaKb8Z7rzaXWSjVgccFxy3PfEniFoG2bzKYLsizn",
  "key19": "2YjynfVF6zaUsejeVbBpvMc3GbeqVZr8hFtuChGUaYC7e7hVz9TAKwDGCrF8vmaTwXturXbMG7CFcTHSwTgn7YDA",
  "key20": "5iVytJZbuVoAhBLy89Gh8cogJZAF927Mjr2HwVSdaVyYmMZnvQfRWmM1i9cJniaxDfkYFVYnKvj5xoX4odfB6DdR",
  "key21": "3arNqLEJtgvqjucthq5ZoWm5LHSRMdW3eWXkhENj4UQaxZGPTvUEqG2JVFxw7zyUpidYRao45aZcwpJNEvTnCU6Z",
  "key22": "3zhBeqWnVHg4sSMtzymNkhKkWU9VQu9pQvWBcrDQwp8DWuSgBbRtN3HDDGtk1uHj85wCc6yRS8T1tGsSMmfxwsb9",
  "key23": "LFoMDRZcYVtqruaM9Zixkr4WqEVHe3o4U8PFvRkX1LqDsFEBWtV2fueFpGPqn7MEJVpER1PrSNqcYV1bwAs6gK8",
  "key24": "2Hj4XyvuCu9GtM1fxc1m5pZEoRGCv9CVJbS6Q9SgsZHhT5ANnTBv3zAsKhjPQSNTgEfDJ9ZoviuJww24mFLJXb8s",
  "key25": "4UHnPUkfCxr29ZxUgsrvWYFhJLqsaVJyvhHBUVDXvDc8qVF6fqA5nuu4DgqsgMBCa9rvDW1spVHoYNRR3sn3b5JW",
  "key26": "5GV7N1na4N5tVYmnz4PD3yWASSRkwAvhrgeccnazNMumi4e32JcoPoEqrYmpik4b6Sw6PV7pUQsfro27RffpMECn",
  "key27": "4AKe91qAGhZbk7HNFEfJ7hAaZGMywatQziXYMMPRQYodf9eTuNdCMfJC7EQ3BUkg9oWV81Fzz4gCkVxeZvuWEwU",
  "key28": "3GLWNyggXwRtUkDQHsqxLqLir4jJG4HuUbhi7nNcdH8GLtbAj1tXZN9zaKJWJp6shfHE6W6PKLZfffiXpKe5dhZt",
  "key29": "2FhRwzyBpYcxPj441ZmEmSThmSrs5qRo69X1M9sKNjKoWj5RPbQLey4sfAStgufRmRpZZo2dZRAoe1NHtEbwR4Cn",
  "key30": "35QAsg6Ni6nhvMKPCHxA2LPjy9XzEEMmBC8LESzcXzrqcDyx9HsWKYSEKHwRvaXq9cujeDtWU1LiNYiFVVPFasMA",
  "key31": "5hEXnnvY6QbXjdCrf2qGqRbNYSf3DfhyBGA48HxYhY3KTx6cvPBxiw9GkGyjbbD3RKRhLYfUerQZexiY5Ks4VEod",
  "key32": "3jTCasQdRE2dJtsBNpVe6SQ6FFkoU4sd1sd5igM6CUSWjxvxBQjGzK7bpa69KPNWsRRchgmWk4vqUxUmEGHS48rL",
  "key33": "4BW2fcXwv8dR9HRvCdtwpCURQzdhyygdDacoNYPQSawrczzVsBGhjBF9oR9X956rxHHxM8X36e8wTgC4LbLHgSbz",
  "key34": "2gd9fVqk5t92ynn3uxqeuDnF1dSAXgWmZjY5XajFfNuvKFtjwkvoAJ2SGJXZBqvL5whfpjaj61DC13NumDV9q9fY",
  "key35": "5JcPtVtMobwmxENvS6RvxABDUYgR215u5ciiS5S9HKdV7eykxVXErbADW6CdZKZ2r4Z1pgHv3EKmhZ76t2sHnbKU",
  "key36": "3H4xBbggTfBjzVJF7Q8TRCAcqvk4faKtnS9gvEqHtYPJtamCNEWSsN369GVRn9sY9w4LSB7JBUMqTRQNUvbi3vx7",
  "key37": "4s8HEjNUb4QxgSA1rqvVfKP9NaAiWkTxStYMg8j3mFhs8DVzHVBaWXk2EvTWGD6QyyKHk2NxrWeYBrWYsJq8raPe",
  "key38": "5q9yBkVxeKYGRXfiVdMy43BS5iK6242XHDTSz1HRgfk3WPb9qgx8ucWFnYpMv6wo1FPpP9zvvGgY4mnba7iX9VCz",
  "key39": "617oedMtRF9NUDkDdZzn3NvWBjJWDm5f51a1sNwUNWg448m8CmaaqRrhYEUjkHiRLAsX5iXmGMMd6ieD23ZW6g5B",
  "key40": "4eT9tPdp62a8izaRQq5cbsU73mHznyhAWDNzbWT5U1tfXGMELR882RfVCWfE9zxSLnrbqxcc6WJZ1DKD71Gc5Hpi",
  "key41": "hLWZKDd4HuCdFioxxCf5xUfGY9AcxQWu5MM7zLY9hBJzg5qFiAp8KuQas5BopQF9h7BqV4WQEnNxve1prCFrDeh",
  "key42": "4F2nxsscJnJC1UBf4SwxmCrJKSFpxZY6ZTbMUqnX1xzR7LSK7K8HqJW7a5QGVbDfE2PeZmj4aBL9qugdhNqiytKt",
  "key43": "5k7CTQaZ4JAQU1KKH9B6xKGCL3kDqEDPyLqAEP3iWN9S9nKEjpySK3rzWEPXqkhbp7iYJxPb5zjtTLJNjt3fKryX"
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
