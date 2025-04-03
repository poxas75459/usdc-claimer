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
    "3WYNR5PAooyM3MCcgGkUpk2j7jPpxU8yCVzcdjQphcmqGY8C8JHfujkSbjTRcixuM4HWwPVYsGo325ewkyFpZRUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mC9BgnLHMeViXetvxAQ8e6r137sM5nf3MfM7rpnCfEL9S8LNmz8q5ojWHCp6beocZeFEWuUHmmnjLwx4qG8JMZN",
  "key1": "5Qt3Jw6nGQCEbNnPgR418Jk9rdVpZgR9NVdDqvZ98nuPCwsasSvhSvjB4XfGDWvBBKKXkrPTmnAmaNooNPZp1RGf",
  "key2": "4oVTYi1MwpMSZDwtu2H9nBZ7Vqqgz77B6GFgVha8tm1w242EoLAsBBnYraoZaZsoQ985mBZevMxbQ1gnb9Hu6tot",
  "key3": "4ymnz93AJzurmBGeFpvnJoYXFfTcMmkbrZvih7AzjjweNTGmQHNY9XxTr4uYZLha45wVfLZj3UXHNpZ5nfhzn6zN",
  "key4": "595hiTCw7QMMAHyYuEQvfFGcUeWdeu1tPnLm1CeZTBFh8XYzZTPf1vJypoHSD8VBhS6a4QcuE8vL5cKN8tE4XgvL",
  "key5": "5HCSPxRRpHqL7QTk8s7yoaQouoWJXzCwLdw71kHppWWGyD1pDZGKfU5LQmWP9u2cZXCRjURo8DBvRznuXP3PzCkX",
  "key6": "5BjcZDkWCoGK843fesvMx3AYHsrK8xQFVu4YLnFp1i747rgCWZR9LhgYbY6qSpBq7v9CKze5iKxbrdiVsefny384",
  "key7": "28BNmyhV7z7MWAqy9HLVHEX3g4F6vP9bHA9h2CEBUhLzd1CRr6NSZ1MUo9uP2thDTjLrEkesLEfEgLwnes4FFf7Q",
  "key8": "4s7TLB4xED53sDJyCCMZh2Bfg5snb3sCLsJWUrMPasqZiT2qmzdekDJku6Qeo7P2UhUwW5WQoY36Dz9RJg8Lx7zy",
  "key9": "2TjBPxp2x1YoYwsF76rB32kxhGWgwqZ5s51ZcbzYNrGZvqtoeDYQ22tSiVKeje4YHfDkRsACx87Mp7MLKDP9KZLf",
  "key10": "3smERRwb1iSh5UxdagdA9bhWEmVcBtjyRgm3V5XrdgAinD7mW3D85s3npxXw6Ktzk19Rxccpr8Q2tmmTddii3SaB",
  "key11": "4H6s1XztPRgiGaftQKU8cBziHPFE7nsoxPcQMVDt1L9qF5iSPHEfYqDTUKVeSvfMQnmLEQMeqdaHhzbEMGgabUm3",
  "key12": "2gDPsH9CQNgbuktpySUPBHpsvS6aNHPNJkJ2NrCQzfiwqVXJ6b6gnLjmXL8B3TatA5wXU2KCwzs5byhZaCKGPU71",
  "key13": "64TMXCxefL9KwkWeeC9VSoem5BJQrCCer7dFBx1rNXHpKUY8WrXooC8aytue3pqoHKgTijmtsP2ZHtDQtAwparFa",
  "key14": "3oFJVoCbx7TQ8hQYMRr8XgM3Gj2YXSnP2L9xRKxQCyEWmurdKeNhGhvsvxzCdSyceMRwSu5KpvSduMjZzBmuqLWo",
  "key15": "4gushxYVCye9iGbtLrqQwZbzBBwUyYUeiVxMzwbsfhc9dJnWxnpnfMaKyQ8Thg1XMfMY64k173GdhBUSVr8MFR2g",
  "key16": "2pwoujAvxutRnU5yR1TAgzy77v6gyGVuauqvoxnpfskcyAP6Zt6wwvopUDBXYtHK2X6X5tnD9bJXF8fTiYTdJo99",
  "key17": "4nStFdDdbWbWvAwRSwMoR4FXP4XhZs58RtCrHhxLgW4G3p4YxgQTcfADRVoCeR8eomqBsovsLsMyVVPXDa6Ygu9n",
  "key18": "4se26Sri9amAXvfiSjhJ8qvRYCmkqQG6j2GGvdhn39rnKk3TXJdDqU8DLCxaKYG4vxNN4a8WCkD4rTGDgdcHwzgN",
  "key19": "5pNf94E7q4LzgZYpPtF4ncYDtV2RadS4XXpXuY9o3zk1hMpm2M4paAGwVdowzJ5s1Y1sPk4cMqC1xrvoNV5sGdBh",
  "key20": "3RorVv6vAL7tJ2R4XAwSp4t9QuUmKzYDQQB9mkJpbbstJ9viTS8LNPUqA2VAAtAUzFaPtaTPGzarNwej9QTof9Sf",
  "key21": "2geb1EKqDe4v9D7eKkfzG1hcvzsnVsYoYmuoKwQ4yoeNPhMxGHQwXQijStsCJUGyeQ2Kvtkf8KzpwFAjDqcePYFw",
  "key22": "3FM4Uqd2YsRdSBA8exyvd3bmrxXpcwNBNNr6H6b7qk8n2uFQvVg27dhLEL5oJWcoGyy7s1XVycLgyd6hV7VbdHDh",
  "key23": "4zkcjPLBS1PGo5mbmwtsTnhVh7Q6W8VuJdTjCMeXWoZTjbBujCfnq5w35GA44HpoZvfhw4dSxRnzS1BxNp8V3yu7",
  "key24": "ukkgoFvL3Q9ATwM5J1E5wwHcVhS6tKWkUHXxRbYYYbMDe9xW28EbG4pu8hNyzEopWKVkym6HfSebor4jwpfWBhL",
  "key25": "3ic5QAjfLawHQo9DgUMBH5TuCRVyBCVLLSfcMzM71kRfDBY9CWgKDDcsTjz7114gMKDjKe5c2KtULjvFLQAPx9wi",
  "key26": "KSW8u42hvWGjeLno6Hb4pdffUACmt97QPiaZnQyzGnB5yTPZq8vi2L4A6kNbGAcfAd3QheZc86uprBBs4RaXrF7"
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
