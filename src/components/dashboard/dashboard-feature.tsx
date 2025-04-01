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
    "2aTbfqpYFvZwYKRzmzSNJjGNCcYua8sMkbV8FJxxfJ5PQE9GZVK75TCz1FEdH86VVw9hYySfQrNjccXoaWkW2LGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyPpPMVEWjh53pdxsvYpmZaEbHZvWMpjFmmVADUHhVrrqTbWBCAPaRdyoA4TgDFmmyRWXAr61Ccwo2oDogHb4jF",
  "key1": "DwXdcuxVSDkzqMD9UNin1dcgeq8piZeXix4Bq2Ni8zV99Mk8ANsx6gN6EuzBLuUy7RwNPXWbkEAp56iDASvtXJj",
  "key2": "35nTBEYi5j3aDnguRKuQ31FwYbAn1WViQghvQ1jJG1nFtbH2cQKYyHhEjWYxRrLhjnG1WvHDLqgyiY1c4z4X4dVP",
  "key3": "5sL1kax1AFqE8GcQxY4Nm9QNpB5f8tmZwaqeonzh2uQe8YRGywyRjXuyAjmtsS1vXEuKCfQTSsnSWSyDeqWJ24Hw",
  "key4": "5FWmwkqGh2NMvSCnaPdXphYBz7srB2kxLVSCDR8CTUwKzKzEEG3iATysjuktj99Ho1Uhy7TDEcDJD4aurTk4M3a",
  "key5": "242XpWG3pkM5175ceN99DfRZrhhJmaahshFkJtArFr8s9DuhT6NGcWaENJaKT4PeRdfVfgvD9ogvATEYJoGqXjCw",
  "key6": "4PnMdkdmJdBPk1MzSfaDM71jpjFq32bkPkPA5TQoBT5mhw3gWp3sTKZBVfn3vsUSbqmjqmCqUoT8LwFS4fFz3zR2",
  "key7": "31RCQKMrQ9MgbkT5RJCL9NhX9z4iHrSnwxUekue9EtJ2TX3nmUBGrB21udFQRNvjRdQo8Ks694Y6abRniNNxAAmE",
  "key8": "32z6JuzCZvGCYVRRYFpgrkvqoDK5WeEafms4sm3c93JqFyPepLQrnSnnPisLbHcNir2DB2F44Gj9vx3eLHmGGm5d",
  "key9": "24iCXU11JWtRvwZr7raoxgyp5czk11JpGoJgoNMS4MzHKqusd6i1Mj3e5y53C8x3gpqrrJgavBjcurNcpHC3qCjG",
  "key10": "5eibNfb36qjeFAhhkKRkTDoEiwXM9ThVABnauTk66VSg1EzLDAPxqMmWjedisj77jPiGeiXKhwMVooK5sPeWUAF1",
  "key11": "5o3PuGKq5cFB1msnxdbxoXGoV7P84pP1ehkz5CxzknB4dYz4sYJAma4ByNvaEtmVVWzLy1AUZFZQkUzjtayhjgHm",
  "key12": "3GEXvShdWbqZ6XmDQ9tcmXjfV9BBHrRWVRS6yNEE6CsT3kaUY28kWCmdtWMd97ibMmNG3ew8LHRxTiVQ8CW3JSCS",
  "key13": "5a2Luh9aWdRUrPYMGrUo1GfTNGDKJZWJfMXCyxosUXQuL5VxvBaLsVdmiV95DknXg9NgdWZ3o3h8vQoxonC5AP7s",
  "key14": "5bEw7b8cmsHKmqu3LkeEfe52u9Pm7TbWc8tLpNS2BARx6UqgB3fM6912Egppqnu3yfHW4UzPRquhcQWtM9e77BGh",
  "key15": "bRkyy1siJ5ZxSx7iHqWHHfj9EUXsHovSy4KX71FpE7swmYbofQxJEKLcyr5rYhg2yLdxkASToN8ai15gEomawkW",
  "key16": "4madDY48qAQpS4uD1XDDpbvHk6qczzybqjJmNpJqhPaNTpHKXBz2cEtG6XfMXwM66WEVn53cwgcQUfr7GfmWjCcA",
  "key17": "xQg6q1HqB7j4mQNMKJ6cR1CBrGZfMaeWC9o3TLmk3vuksfuVriSvNkVvRNTgb6tQcGAxXpcSpTKtwGHm3zzXuvT",
  "key18": "5vmSY5X2jDfx4jWmZHgeuQYbvcK2FcResZX652MFPJ7tcEE46qg4CwdjbsqYXoM7nWL87NuAQ1WFvMUPnCFxv7eW",
  "key19": "5Kt4LqEHoiFMjiBLx2xjKpTh9vcCaU4iVNRd5ba2vEMgKWiBnQW7cdBHuwBqsJZ6qW59WNkhu9ZgBEVwd3APcnzV",
  "key20": "61m4BuBNBpVygQ5qUE35yUvtnctxQWd2HzmehpU7byJcdAnXd3yvjeAWXKZ1pVeXYCsQ5PRVNvrFrJPi2jKs7g8n",
  "key21": "4WrVD54Cn7KMU4LbHWsm9M5oMYsgHDAggsiAQsvqD92eb9Nyjr3TCbPfFrKifi3mfGbx7F5J7fNd4K8JyedvDGpc",
  "key22": "4xDLTcCP8NJmdyVwLKmnWrM6UoPwgvppokndsYKeyrzfHs3NW42bVaLx8MS5pmKonWcmYn64GzeGCm8UEyj9zA61",
  "key23": "2tVJcXA8wtu5cqd61iu3oQjUky851Q5eqVBtp3B9yS4mQ1HrKAZ873GyjdKGznreqnzbRtZvC5xiWjiNBg6QqooF",
  "key24": "5DVfgF7eKEWwPzYQavuoLW1y5qaHYoCp15XJG3fEx3Yc69Ct3YxQEpMkexube9kMc2oYbRFdtrZCFRbeMKFxML78",
  "key25": "2xnatwjPzdRJ16XYoEWf1yn6xvtqR9Wyg2e4Qcuj6zKPsMpjt3CsiqrvmMZhW68u42kc4FETTX8tmWGdTjJpCFfh",
  "key26": "63BWuwd1MmHhPzNqSHobtWevvPxW6s4foGGgnCGZrVVnqfVxARNcPBNhWk1PZ481PwaMpKm3FZ2JpTqyjc8EApTY",
  "key27": "2Brp7RLW2SxigDmF3YHKVoa3aW8NHqeMYv9kp6er16joPaFNc6LfUbBcWgVA8GqNAj1jcu6oQAdU3ppGbrNn382L",
  "key28": "22TVUmxLNTqVXjm2hkqVLLExWfFDUomEe1vfeiCRXvi4mMD1vao5QAGZAXSbDvuMmnPjeF3BH8Qyy5Kiok3RLV5b"
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
