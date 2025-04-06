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
    "3oGd6Ck3NPYJEazx4yAMWFjkCqmQC6Fp8EbXDijtXPAuv8enjeQKBXyFmfN4KbRWg4usiChW4ocHZ8FvmYRfvzke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8TDLPAqPfCXzPkjHdH9RZ8iUr8VUe3ywaRJ3bnnRQRw8GCFapRrq2SLrFgyvSA7uDziSfa8GbQNvQUDv6KjKFW",
  "key1": "5sAjjRYmndJ84YmEjUDytw4zwaCUZ8jfE7jeFPaTy17TrMdgL81Y85KpHyUQ7nmzdm5r6UTiEeVA8gG7qEaNobiq",
  "key2": "4rfuinMEzEuzYkShws44pfj313ahQ512TTbbvWnen33GwQacA8F7gwS9Qe5g6MgXQDuVPBpqef8BHF8k7rFs4Rs5",
  "key3": "51zD93Eoddo4YSrp9zx5F6Nq2ystruAZtSMas9nCS9tuxkWPDAgw1SFMrsAsZRhbpz5oNYHb7hyuFic2j7xKkNiF",
  "key4": "4eD3FLW1sVT9iGjNGmktzfEZnHBQqf8Xx92TSDjUo1pdHkLWNPqzb6iAfL1EkWiLate9uxBvRSQhauXqypwouixU",
  "key5": "2WvaqnMzvESyAfXpNHBqi2mwXnThM3yjrZTxNECAVyW5X3boMpKv6xdenGoWNZQ94UQUMdrMjM9fnjkZx4fAQm13",
  "key6": "3GDgzq6fKYc1ygdarUqeJHRskh2DmFYCeD985VtW68YNPPEkdUEUQDjfhxd8jMGBZZM5QfNZ2pD8N596tgBL8pYp",
  "key7": "4EqWsLkCwTtkzka2grVV8ZVb9Hmf1Wm5vbLVkRhtEAnBGotAoPWkkiBwBv1N4mzKgeN5z1P9G15oQnCpnjHk94Y4",
  "key8": "4yKB9ambWJwLKYxh9DZTAAJx9VkPf5AQAcByuGpoR39ygvth5F265GAUNns9WkgNgj3MZFDYhRcXLmHJeTkPzdA8",
  "key9": "2BDdRpudExvXispi6PfVy9B8U4TTbT5nGcjEXkYbbY9Y66JSFAP3rvmF6Tm8D8S6p7hPhnebwQiniG2eAUjGagPc",
  "key10": "4fHUh5zjtpbp472E5xoGPt3x24dyt2tz7hvTwqp3VkHiYDLahS9AuDEkD2kKVzwwMxYsrKBC94fMczLwD2mUsnJc",
  "key11": "4NJzgF54t5P1Xd9ts3xbquucbFKoiFdzKbavEQbH8BgSv8m8Pkt2Nb9zx7XJHDidF4QJHq3pbhxoNSzMZV5V2LDo",
  "key12": "3VhSLWTorA75w5aSxQuftwdgW55NTkQK1Q8gE61nZBRy1HUwFyKBSpEDtmcnKZxkFmUXGVu19v8VwEwrBu7YhFBU",
  "key13": "2SsZFsCP8u2HyqqSUYTKkNZgLvzsnktJ4qppbtinD7QiMa1miPGFiGV3Sizq1NNa9ogdcjM9P2SiiBf5XjmmEGKv",
  "key14": "WraTqHhxDxUjKafLxdSJzNfWkA7PGwrs2F61Z2fGWY4AeNujM7pYwrQiegZBXAuMpsijYJKUtPZTmwvpyLW7Aa1",
  "key15": "66XKbscPd1FVQFe3QEEZ9LgrensgA3WgJSftgSPwHSQFXxBEjrVQfXcYXNdP9Ja2kxLLTQ6uZCTFdmAcDueFVsR5",
  "key16": "5rDFYCi5SGNm61fviMzceD8w1omGyMDoiZt3jgQJpuiHLaWrH9Ne4DW77kNvw7AP4PKFRm8KVfjHSkN4bWuKp1uA",
  "key17": "4yqZnBZbQbUeNQTUZFsh53VgbL4Kxx8HZR6ZExVw2p9JYHEZnav1WegEEY4viiZACZuYxZ1nw1upqXzpZD9qipF6",
  "key18": "4P5ZMfnEobdN3yDcBq243qm4XtLox6Je8HWdwVifeibHH17q6s5WJ1R2nyMGsDKNrspaR8qAyFDrjoHDc36qwTic",
  "key19": "4RooocBhuxTQXQxa8RxBWWnfC72cKUkdKNcKeDMDKqVSciLbUg44t6emtHTkCPaLWxNF42dWabbhA5wRnu6EWBAh",
  "key20": "tqu1Ws9eaTvTLSyRwsTA3s8m6EidRRA8VfazGwcf9kRSjYkSgghJCDNJeNqx8rQ3KeyV6pzmg1B2sRFBMQ2vjt4",
  "key21": "5N8nG8rmfLmkSdDR5rRaqjNVbqL5Vt8AsVbkxJAg6wDcrHA2YRSafKEVJmi2kH8um7VVTDPGBnqAGVWiu6TfBoaD",
  "key22": "4S3vExJVwbgbjAFBUfo8FrBK3jDaKsDamktCYMYQ6WzAQELDAhGjJEXvhwuoyz8ZVdGEndsWYcks2TPDgWnFbW87",
  "key23": "4zo1do9Me2svy2bHEUxeuRfhMLNpRmfEiRxBwrohRUW9qNNDVAiEXvu5uCyBcX3ydJpW6gTcGLeXqYERaK59td9W",
  "key24": "4RJjs3yHD8oLcCihTLHATBwEn3Ds8coxwQcoXYtbLuSuZ1vxvSFMHDqBGLu3N7pf23YFoAvMyMUoH6D5SB1BaRtV",
  "key25": "TuPdVPsiaKwPBSN1TwgAizw9B3VaDaT7uF4tG3kd2pQgkXAqpuh9sT2q55VvdhB6e9qz8nZYbgo5vDbRVwTnT6K",
  "key26": "2Hagy94466aYSeuoLB79DjM8Es7kUhAggHRykEmSKXSttsQTWMLvKwVhe1ChXYDbHe2iygfgE4Koscq4iRBT7WVt"
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
