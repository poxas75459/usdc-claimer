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
    "5mrCEPVB8QXDZECrUoxr1peZhtcxis63CCQyHX9Cbo5YT5JizeHaCVhQXWrCTJFqsNpPfmYT9edLPVKE7fuLTiDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJ4P2p44fLFtuxZYpDtLtbcTSGLDFrLRfdvce9LdXrcFrodMTUmjCFNG2zr2Kou8qmTJ1QZUJcMdhYg3MSRpBNj",
  "key1": "4kZLaZNQMxrGTfWQdA3oKiUoygbZXF6g8Fa9Eb58h4AHgo115JZPFHc3bHJz4R6oPfXV9kS5GaSTsWFbHZoofBns",
  "key2": "ToWXV3kRqBudmoH4KgpJ5RFzEMGx2bpz3BZPy2qAxP3uq5MVSWhj3Pk9KW2nZuU5k5F2n5dWRypY7K11AMLZGi6",
  "key3": "3duWPxfGcsGj1DKUkggGmAwpS9MYhFdJbvZ3SUVnqreFfhRRFWqrTbuEnvmotKUxv1uBgk7XJQX8pB33zaKzGEza",
  "key4": "2t6eiHhUpgfxjzdsfqzkyiPxkmh8x2SY1WKJiw4oipfX5952TcPomJnn6bByq5wArsrHRTiHfozwygmY7cGoYNN",
  "key5": "4mjyBW5b7E2FzraBw6UAYjrq3MzUkEXTf8ZovJXPFdaYvmbZF2oT1ST6tqAqyc48tnxKwYpWKx2fEaWLrth64WKv",
  "key6": "3kB4hm9JMCJw58QP5AKAkc2JYtn6MthU4evWUTdrvX6KvwF3eSREcWanuFoeCMgJcYLLiK38RixhA3A8xUSvcLYQ",
  "key7": "9gsPhDXoW51a6MThPZxS2bjSojqrCX7KiBNQjjbKVuDyPCkfH52fW5Wdx3sAT5UT37qbtDN2szQiq5GH32uQVDn",
  "key8": "28URDEA4o7Hgf17FdheFDxtrWpjcV6vDjqwMQa8unXqkG3gDCTaRgKLGxChvq8K14jT8PuoFhksscqV9GbQEfAXf",
  "key9": "2ADqA7JDySLfqQzWsUnCsD6o5R8yusdCn9nVMGZSAp2Qrki4g25jyWrcf4hqaYeSb4fkcXS1ieduccGzwqc3KQqP",
  "key10": "3jczzdPfXGRX3DnndyJVukECoELwetFGRiPo4P8ttrCwMTZQyN5eZAjiVGBnFx6o15sqmdw1goMdwAXbn1LjH5Wj",
  "key11": "2coZfAXBXu1RrAmcRE96pkwnh5Uj9PYP1oqhvuPYGyv5s2Nz2trwK5dgoKeyAabFjs62Zp2DtWPUf1HUoqyf8D1C",
  "key12": "4yrHZ634CZXysZ6W8rvXxN2qobGnwKmsyiLFARpUWC1uZ2V3CBjhacvRbn8htnrmMhvQeJAK3vpyD8HjNXR9Zd2B",
  "key13": "4aZXaqGntNv9Kc5Esn7BecqF1sBDfX4EwjaCSvnkLa54u9JuxPCUHMBy1AjSDcHEAKkqWu4qhh7Asmcc8BMRHaiF",
  "key14": "3ApjAycRyjFBhR1BDWH1SiVUTEkgMHTCCpQksqBVUuGmo3wQhVZ3VG2mmq6yGz7dLcBApmN1Er6fE4Yn6ApfgoWE",
  "key15": "2QoFePxnWhh16FGciim9cS7RfXgSpKGRbJLf3sTgzy1xZXfQ9trPLfXTipR1Ev8kK4m2CA7YFoc8NPR7RhySdc17",
  "key16": "5VAXGF7PQRGofRegsG4RFimCF57oRxmUD6wTbGdaPsYLk6KxdUXJ6DqApRduSL2ZXVUNMxLY8cxDcfQ4JxQ4EN5K",
  "key17": "4qiHsLuULmSvCZc1KbpwuGerUdY8hEV6maeRZXiat12r6MERz7VCJZQsNcB6wmTegP59JAQracuxEJVCP2NMYVPP",
  "key18": "3Bsma2J5BqA6xwpaixu7M4jZ7gaAPoGRFDNL1kU9Hj9WW7kuf5EkY7giJjKXsMsBxwdP1hhgwZY6gNmxu2uPmNBt",
  "key19": "2HPvMZQA9bDJgCfhNHgDVvCWGewDjGzbQGJR3U13VbWkYCu4r8QbZcECdMwCKNWMF9j4jfLbCyYEZuG7BrmSrFgS",
  "key20": "4iRk69aD14vgb7Ls7ACDfNAen8SH6WFpWzL9pLGrYvZdL7xvRet4C75d7qK6Vs7Y1b4FNaQaZBmWP76FD6GWdcMt",
  "key21": "5Vc5e27X3asuvpNCHo2Ktb4oBz99wK4kS8qiGav1VDhZi8jM9y2y8Gv6TrxQPDc3Px4N7qNrckKgZUMx3jRVqrhx",
  "key22": "3iq6jGnpMg8F4yEgZFq9eUQrurPiAUY2LixjnLEAVgfiET7HULmWpMQ1pkURZ62EvADLvQtmk8ich7JetFTSu3KX",
  "key23": "2H2yPevtKGDZmYM5tkK1cpb5mKqkeRApGWtQzCnHFQ3p1bnqkNQmh3yXofvuzeNRZmedJd7z7ysMRsaX5sX8m7oy",
  "key24": "3yo6V6RdpMrarNt7WgJVoZr87aeH3Ako9NiyWzwGGVTJ73zywHsYKRWCyv928cGCo5sJiK7cwVHWQfMcBLQkH1Bq"
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
