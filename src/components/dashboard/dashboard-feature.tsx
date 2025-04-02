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
    "4S73ZzFYTjPA12C2noFGE5LXqKf8NGW2AgQCEHnQ4wcg1JzDGefjzbdsQjkWLHGpwXbKMvpycrP9JP2tyNXDEtyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U29Ar2Cq8RhPpk3Sidw1B2MGpPyZsz9AL6UfDretmmhyCxHAvyekQLz77m5mMjGUVDeQGwjiQS4HqEYfSERU2uj",
  "key1": "4Z9vXmLnHXdppAQpM3Mr8ydqFHB23cWtNbCqUgRY3UmeiwTNwubueYs79uVpoJaD9TSc4MPCtgtDuU2JKELKwaxh",
  "key2": "5htrymtBZhXVAZyjjM4D4iu4SFuVAXmMnaA68h51sMireeGVUYwSPzibcVY29A1EHz8tXpc1qWdPQRHTHgha98qY",
  "key3": "5oXi66phB5iXW4PSZHmvi5A8agz1UZLzSBa9J6keCuS3HttUPGLPuwA3eYerhmtgivyTBfAW22FyNqxWt26wgsBN",
  "key4": "zLRybjXmAGVvErseQWfbqA1fxJ5nQRgrGDQY9qHzrQeZSHzZqqipapBe1beUxqFP8R4syR64tZTZpQKrX23ZBa9",
  "key5": "57YVpRQQucudtUXnHUGoPWkyUSn7nnyGNR3pCsDQCPCjs5WLM9uDrELLr1aEicVSCn1tmF3x9MUYDet8iVUkCb1a",
  "key6": "5jzhddtrACiL1hggmAcWZWNUQwffU8ak9Jmz8YvjuWzdKpwGZk1Az4NXcQurWKTCD6Z9qJn9tVjhiFxYaXPmQomr",
  "key7": "53hmuwWnL5btvQqa9fwzhoFvUXdpuAJ6y2kp5fwByfdCMd7a58GfzjE7r19zDVAY1p5jL5Rd1TLxDVCqbDymhHoa",
  "key8": "2Hq9mSnTp1C1ax37qSUtoNCfoUA3VPhETmyU8hMiJDk7jaENtyEZiKfYKP213QTvZtow3421sUNvoyaMSjBKXyTK",
  "key9": "2yT8y5cjSxuaePhrDgPULHbeccPBp77aDsT7kNCA7T6NT9UDkRXw6qqPhc2FS2ekxZkMSK8ySWwZryGHfZ8BQGiZ",
  "key10": "4XCPftY6S8Qp1PHsfBqXAG124QmjnFUVup8ZbhbErFZ7AqgBGi6M2Jyag5NWZk1BstnN52bpAcnpJv1cx3Abo8sy",
  "key11": "4NXxUiPV3vL52vJ9HcYR2ddPEGT2xoUbJMQExavkfBkuvuQGHkVkW7T4auXF1f4sCuWeRVhtyBr7NzFt9WR3jCe5",
  "key12": "kKqERifjcA6mq2aPVuBH7nxLbGypiQ5BfSUXkQ3EV3KxVdmC9iQPPCtdDtKt1LRTwQExSsLS3Hpw9H4ou1uRLV4",
  "key13": "54zQmg13Buq4FXKELb86t2d8jdrHudBawqgwQnTiXAZjd1JZNSFijRUnAYTw3T1n53JANrwi61HEEqYYXv8YnbM8",
  "key14": "4F8H6py1g3DJEErW4jfM9RuKWSAUzu6sqXsHEJiknYcmYkQmEtVG3z1HenPhS6TEx2JfYZVqioX9V7Jf4f1nKBNf",
  "key15": "2oxqrXELCSBsoEEZDaCj3oP46XAwwn2ZKcw4kX7LF19puySSBnQNRfqHU3bs4xBbzHGvihWYGdsmpEeTxriuw5kD",
  "key16": "5wUMG462rsyAQqJg7zy2aF1qCCdPmza4DrmNzo3b47KAXUsfPPQut8xG5bqZNQpsxX1NuWgxYrKoUFED3DYYH9GE",
  "key17": "DXXAPswKBib8Rxe76SJjc5w144wfVJUcAisisEqxNczTpQ66CvGuT6D9GzFbP4EBvAT8sd7VGHqwxcGxrB9AHqG",
  "key18": "27h2XZBvL6GSooTeEFB3jzSWNmcqKrfGk5agn4EvnMp9VWmEJDmS7yjmS5miTTHxUiY2che8FFDkqEpQBnKnqYKQ",
  "key19": "Ltoum1g9MhNqyqc697UVKdRJrgpvLaqGD2r8bicRqmBppEBkE1SsqNt1cXht4WVGknCX3pjdKpGzAsuYJSsZHsV",
  "key20": "3Lyt5Ax6WJw3tUFqvfvkESzqEKWcZWzpYHDBiD8iNFVGLUkNqvospMkFhthQuEXobHZPXuNvQhTSp3WBzCu1oVWh",
  "key21": "2PocaKi9eTSksrjNnQ1XQUVpNpsMY9gjUw2pkmopozs2tLgRJKer3oq9H4eWtVuDJ67NrxAzWuj9JzKLb95gYtaE",
  "key22": "5W6NUKw416YHFs9tLyJkwqW1Wy4HqrK846sWySLa79Ks86TXRsVoTtW7KrQ5S57MopCH78GcxRkbN6DqjaWPQFU1",
  "key23": "2iePdxmUHHT6Gbnhj64P9KevqtMmqEUZb6tDTp1xgchoqpKX7sjVwbrt3Cwgo7B6scqv7rkXTQ3wwygQ4nMZKpdA",
  "key24": "5hLm9GqfWh7aK9M7hUpmJAPHdHdUAtTv88izhp3kBew4AoxQwuHPoCHpqrjveEpxJsGXzeTKvy18E9NGCMXePzJb",
  "key25": "4obr95qU8E4VmeWGS9Rqewb3bFTuqJVe1JZi9qjsi7C847VgXVpuSEwn44QLCA4rRwjEhGEcQddQmyFBHW18Uzg8",
  "key26": "2LPsDmHB4LAbm3GrnGHUyQX2V7XbppeKt5vPTk8dgLbjGev4xBCmL2Ucfc6Zd8jKHvo6FWdJ66cur6Xh244omBpc"
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
