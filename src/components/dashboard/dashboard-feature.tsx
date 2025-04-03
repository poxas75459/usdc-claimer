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
    "3R677jszi3Mu2SdNm1J53j8kbJezLeBPmpfwvMU1BcTB98X5eXduqA9uocrWp6RkNRX5nhQDdtxAc57CPeeAy9dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aXG1u67fHCeaA4RTgSpkwFMPaAbJfBLXhiY1EQeLSMT7Ebf9DeJFST3e1SYLEufnmroXp3MEjGSZ9nEibR8SPW7",
  "key1": "47FmAJiXGjNaByUi3gDNo5rCpBWHm2Hc6QsXGr2YuEB1Qzk9iE4jUTnonKdTU2xBvrKdEGtCvUgr3Qycf4W4FCdZ",
  "key2": "qBs8bma6k42SbqnHP89ygMnBuzJsgqW5pvcvkhXLhpwCtqxS9g9y1ejkhdY5tAfhtEG9wriskXd6SMFJEBCChfj",
  "key3": "AEm3u3RMjykEfAe7Zv3Borw3ecY3nmyEWVQ4mwojFrSxKemnnax2LenUbVbaxvo6ye5keoCcSEZ4PnPdeqw2ogS",
  "key4": "Uw7Q4RLEDy52rVkSQiTdE34sfNsfW1K7XPYA6XbLkVTdW5VKWxFAbNJUpbetL1w3DdGRTr4MrDG7hkYRU7jBdbj",
  "key5": "4pecLKWu3f59Yp36zzoUyKY25nJS4nkkhomgcmhg9RaTsdy9Nu13c8BZ3fgSehntT4uKqNvgS7zLJNZTHsPPvn16",
  "key6": "4NgRytFmMzmW5Q5UCxP36yzQJqEmEfEFc9jNxrJ4ybUzRJFLepV1frCMJBHyfdUPhJxXFAxbmH1RjsNshsQfaUTV",
  "key7": "5bfdFQWQtoVsiqhatxhHg7yLMvb3PUsJerJ9n3jToMjmrZ6BcScB3hVi7fLQSpq4zRKaWKe41uJY7um6Xaq8SuRK",
  "key8": "N5V75fjUWpLorYaofshkmT9tCMozHrKdp6akznEgbvymNirfaqnsxpKjDsGXpgdnmdTDnuLxd7ih7YQL28hryM3",
  "key9": "2831Hyn31FrHWF4PX9QMq4e9p6tLAQW6e5tMxq14xw9AFNPoTEZXZYbG8mgrSq4dWLzxpNAEKbFPD2uKvG5tH9BT",
  "key10": "UG7L3UHAK8KQhxUMkVETq5JjYuqmjQPtKJ6QkUtL6G5qn7WHnxPpzsc4PWh6XRfV4ozR767EBzEneG93bDsgScp",
  "key11": "EaZkpscMnBovvZCWRnuYyMuvVhjUtREc3oTGtwCywD91oHFZTuZUEv3xaug5qfWS9T24bBwni4R6JKdgCFyoQKC",
  "key12": "5YFVGaBY56pgjBATAmy535pWkgdAQ2RMkSrsVQ9fAhkToi12gjPkWH3HsASgy3kvkGzLuRQRUufJQJKBQkHB1BQy",
  "key13": "3WPwushYqwwG7QoFFCD77fyhE1DHkvnzBHkN8m5px6pPnE9AECyHoFPt7c9zo2pj9Yq5uGqCTFYGLxySuAwisamp",
  "key14": "667qJt8LMfUfW97259G4s8uNk9QUV3ZSMUNDkchEPhxXdWNjSqmHg5aqR5rAkefvVS8T387EYAX1Pz6J5Vgs4g7H",
  "key15": "4anUVkSzgjbsAXihrhaJT3nVbXGY87nmy4WP3dJawK8Cw8cT9P8MnfAAN3aRNFNrZD6fTvh4oKJ9rcTpQt6oe67a",
  "key16": "2py8pvCwNb6EGE6FNNWGXGLr8xwpaXbAEoUkW9WwR4fw1iDa96QKM8DhJ4jbZVwQK6WBp1dwLEBuj2o5dRuHvqH8",
  "key17": "gdNagaQvBxnVdz4vEUW1k9fG7XkK5fVZg9vwQfopxPDf2fQsjYFgNxFAXdGG2qHGXkASVtHRgDu2SFAfwG74Q3S",
  "key18": "5XEorBLn2NoXkzgw46woPgjGSgKTAjbyJoinhBHjaPyTGGCkPq6G6yH8vupufrPuqtxDuBpMN7R2MPvSL1dYWjca",
  "key19": "2ufqPLqGZ2Pp8WXxHBxUHkC6hoSXcnsrue9yMXZoNLueDWTQRyTNG7hwuJjxD6aGKzfX8dyqM3RLVncMUqh8HueE",
  "key20": "5BYZnTHh7ohdSdRAwJjU1vE3JZmtuW8fHD6s1ZPCCbcB5d5afKsTfdF69V6S2ScUmpttvDVycBcQY3FGMpcZjs8B",
  "key21": "3zoCrRKFrSzTn9gVYZeYi8Az8RTaDAet7WXynqtr1tSLR6ZuicRTEDKRzDRPueCfmKywc9aP3W9nt7FTnryAAeFU",
  "key22": "gwsJURTwU48qRffhBL6qkWMBD2TtiqnfmWuNifZhNycvfXTCQtdvspp6D4QseXPM9AM4ADp2s3yAUQ2AgZFjJtu",
  "key23": "5126B11A95tPYRdqEsbBLoZwEknQKwZ85r9TFK6gX46qm1rg3TLPKnAYmnaKFoTqjtMenLzgS9ceRKaVhrebXjTK",
  "key24": "49KyyjBTMBJvCZyh2mS1Svn5HsuJxBvRE3wUWj42x4Ui9L2U3aEyYxucHN41cBYZbY6AAbbQSiHZb13uDKdpmaG2",
  "key25": "tsFZUhoH4aLuq41vwWgQkUfjS7Rjnuhp9acBBrhJ7LErrBS63YdRVu3A4i2eHk9zAcv7rDgnFubZPVp31dxb5hD"
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
