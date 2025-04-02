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
    "gbHNMygegbomfaasWdiGUJ74t7HBQ1kUfhpWQcSk8VDs1mEkHJw7HNx7ztLMWsqmgZXNmTuYYdj3o2QtvV822qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4JKPwgsXrukRnWCbmwssRF1WPdMw8Qo6ibZQmTB9BVmcV4vC4tdgCAUEkdCXCDo1FDir7LbxS1yBT73wVzz3cr",
  "key1": "279c6cfCDvp4YxWxbyhG4vHEj1r3DLTkLoxiSpZZtEVQiy5USYt7A3WJL37E2D9KDegN1YzMsx5ENuZwLjFfwriw",
  "key2": "FrJycxsA9k9Au9wQChBbdbwRz4b1ZxtMf7mQH4zmcyZj8F9Z4oY944hL2axyzRRPdNNqPGMZW3tan8Br7fRt3zk",
  "key3": "3Lc8rh1hNN8Mt9QTTn7g1wPugWFqZzJqgWKdJkUCx4WUSuJoLBhhbPQzdpL5KxyhtZMsTVujxLEZ4c9cU9Mt1bNg",
  "key4": "3K9pb5X7vVbz6eKmep8erQkahVacVCnSEFimbPnTxmpfv5VVXfpZDMDzPAT4srmeQu7N4Tnr9apLWpGgXoFFPtda",
  "key5": "UUiHUUhXBDJ1WfBAwhoQ7WLoUjDkPyyqSQPT7dgPKfdQauzqDffELpA6ZB3iJGhv343b1xeyRTGF83S8ZJGgRuH",
  "key6": "5YZSdWU3dMqFSnox98G1GyygniQrNCkUzJmnBBnKZoJdFWoPH7ScFnRge9zVHKqQgcNoDzjvr5woWSuvFC4YLa2p",
  "key7": "Dhro8RJAjzEpVAKWyfGKmuXbisPvCNEKQh2zXKp5oduztHaDhPCrLdvzG5rYgNhvuG1Kpqzh2pUZUFXynNmvs2Z",
  "key8": "m4GsxF35khrdGB64TcMHouswvKTbMZZi2zTtErSZbkTSE8edDCT9Ehis2wuHdkLVNNbGvEKs7vqDdWi93jy2GE2",
  "key9": "b4Ze5S769BphJSdDt2rQb5QuxFeas74TdoZeHFCipgqtTAGPbCepQF1BzvwiD3PRdN6qzaaYzRaJg3jBH3YJ3nF",
  "key10": "4P6tdYTSqkW8g3cz4YW61j6aLy58acF3UH731o9YH55G9RQ3iW1mcy6gaMnkh2wyULzumqz9hRRiLFC3E2JCAzKz",
  "key11": "aDgei7EVoV23vy46UfAEUWXvntQRfUmE4b8MRs2xnhRHhqtvYqYBtcrdjeNut61mxe89dY4Jue8bczp6g1zzVd6",
  "key12": "2KJYsZvZuP1R7hG4HtV97Hehc5ubymKYfWH3yNHcUJUu8n9GqAvNT2TQCCo2ovgyL4p4hxueFPbUXghUt8y2D7Ug",
  "key13": "4jEdWvABm6G7KuySEw6CJcpV4zKShryYjZJFfaD63ff2id25bknhws9DhtXBYaF8eKhnuYQaKq2T3eNU2q3e5BDR",
  "key14": "65rqUSKZxC9bZLnwFdYjRkBQz2B4DDka7xdTWrE6ezf6a9wuR2DjcXLQ6J88Bbruggqf5DVDGJhLQ5iu6yyzVurU",
  "key15": "5oUY3zsktUsRJGjJsTnHFabtdVVnoXRzVz3oii4THkeGqpBoTq1Wgn9Q5P9GWjYYnZTZ4rNKtsojrZ9x36mX1yNk",
  "key16": "4D46b1BfvhW61FrkSukgw882dXXopp1WvWYcsyzTD8p2v2oA3L5zD2dpk7R1S8dnUsnURxBfq3WP9A4kKaS5iz9M",
  "key17": "5uBJ9VfqUMPh3WJcw5Wb1gFL5HcfsRUPJUhaUWRVhBJ19VMp8jFcVwYrUgjSqvXTUwN7EaUrAdXsjxDB5C6KTuTx",
  "key18": "GC7z9nGtBYwh3sioVnuWR8kdPP9qqdKckLTSTmGyfFMpLMFCVBpfahsY7edkSuJ6sQwnAQuEfuwWMmJkPTPzWXT",
  "key19": "SqUL82vngnKgytBmqvk5G2rw5ANgZbEn6iQBWPRFvTsuVDrkTwgjbK6HRi4QUnPzWsa7wTg7WtEQvXm7GYQ5PKL",
  "key20": "26Tu7QcupAtipVdJc9tvnma3PdWi1cTvADLNjNWssDxEZcRZfXCbqoo9DJFcx6A8s2y1EHWQJM5WL3bDLC2vtp1y",
  "key21": "4zGbDG2J2TF1JM2YonxJFzsUVB2tWtsYN1DFvFC2bAzQsWqSiPYD8QMecnBSRaefEsJspqFr8h7ibC3aXf77Kmk1",
  "key22": "5Z8XeGRwdSMCzGQYuawRh1e322eDtgB82e8WpikoSRgsH7WxDYd7uWt55wmNtcVKEieNVivd7XPzxBFkQsjmKD26",
  "key23": "dpbH7qgwb4Re3P9pce5VgA9BdB5qcWjbY36PirSVNm5CKGFxCXXfBxng31Hku3it6xjMHqgXMhTG461fEHmeaX6",
  "key24": "DkXP4MKsxECZRWQi4ToR9ugnc2U2LrifKUtkXTgyE2FnHfkfs4L7MXqAUpCV14i5ycgEvmgrbku984i9y9Bbdrd"
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
