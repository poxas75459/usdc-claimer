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
    "3VCGYQixmWzPhm4CArWxhtPxcX8AksZG4uQPe2VQnw2dYNWGPHdB4gKLjenq92vwLDvm15jsLwxrZtCFK6mWzPuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLtxV8jcZ5zA9bWUuk1TbUeHPWoPZxiK79PdPfjxSbMdV41KM1qRG6MukAtpGazs9vTFHNXjmRAD89ZGd6rfFnk",
  "key1": "5jkgedoFdBaVxtzwkoPiTCyesq9znk2Y9atT8FPVoHtnBr9Uq4qQ7Fz4fBb9bqHT8rtDeajLzJfvz8KjW414h3rP",
  "key2": "4PsYwpZ227ZPZUtE84mMMjiXonHj1FEhGZU5PQi6Evip8GsjrKCMSQSHTSuRU5Ly3F3SNf2rEj4bJ2KZEEtfWaux",
  "key3": "5NMKF5wmaLwrNcn5UmswmCe2H9GJQy2EFhTksRVa6QodTQeksFnswPr5gtUXqmh9bvrRhRViEZjk6mZT1azkj1P3",
  "key4": "2YNywVJwEtFB52Uq1TQ1hV2pmbUGmQD7JcuLXC7L74n8Bod5r4sGbU7P7s6N988fPFMSGTquucoQ3hhJqETB3frw",
  "key5": "2Vywf6oPior4cnhYmZypB6boSPJPsSytdPPPz557Yqn2d9CRm1vt8FG3PYmn1mBJxtx8dwtZhEmc5UC5noFPzns4",
  "key6": "25wFi5mCJeHy3Q8zD8x2mTn6L8uAzNNq3LWqy8WRZZ89VCcYESkJ5ThEcTP9mnu4njJ2FtWL26MnVQASmvNReMPB",
  "key7": "4M8z3nfBMvWzJSWFf8gvTPDiW6kKXVsWfYWTfpBJBiyUvNoTez632HdzVERQXx9cRNbFJKBijx6bcRbDfCaXGDCi",
  "key8": "57micbVLTqLrGyvECnCNqjxQGTe7z17XsC29nZaQWHFQpRrLckk7wfMDTf1CQS5a7dg4F9cvi1Y7hMTrcyAjrQTA",
  "key9": "4UUcCWrg1LneRnG2kQp5xwpvbeRBUYUazwTBQM67LW5aC4z6fcwkNwwCLrKAfW9CXncQWEDt47HezUChHh8X189z",
  "key10": "5JKQqWJgLQUvAXZihAtgScdS62417UXENHr27Y6Wi9ApAX2MEKMwrypubGqtF3pXmHbcwheg5nJc4K8XBCMytxQ2",
  "key11": "369itdr4V685uUb3jvM49JUaz41GTR9xzLNfVZve7YAuK7KLfEtSg3fEW47pw3r4Z6eEV6xAieqFocuZ7uQrcVmv",
  "key12": "3ey7wmMuvce4vRb7b6tuT7Vuwkom71vmJstgBkQCLoCQEdU3vTDBjG3dwjTG4C4qChMrGWBymmEwT8W84Hs2bYq1",
  "key13": "2aurLZzeBhJYZWw93BdiZBei8C1fXn6NVqsesu9AdiXW1jWkCgSfhu1Cv6tiP2HkkzmkqGdW4SP89iubTLeKAD2K",
  "key14": "tDd2hkrDN439dYMHPN1KpPWFsTyMKPocTboetksrR4AdtNRD1PfCN9kDBpFjxK3haikNMe6F97rmRb2QMyMkjb1",
  "key15": "29aiJQWqHD3YM8A62i13zhadUe29AgYdontjK1PgfFAHt8s6ds4z7Aq3dvTCvnQT5tgds1rErFuX1CZfBnBMaLay",
  "key16": "4nqgnFtC8xqvfy7fzsmsm8gjgVVKP59FR1jn1nrkZXZvr4CyojfCS59DTo6bwNtSDNd1mbUhTaedLfQi1SfNtqrV",
  "key17": "5VBWC5Ep4e5wsZ1aMyVot92jrmMEWKh1wi7FxLQEtdEEiL5eASfQ3be8T1E9Bvn7DXDXz7jRQB52f8KTr7Rjiu6Y",
  "key18": "26j9MwZysEs96mKctFWtuqeikU2JRYobUsZXpu1Lq871muVXcJAzRJmttUwoa12istrWXJjW2J52jnqneninQ6uo",
  "key19": "4QKPVS2RBjnM8EXF7WVYuDGzYQvfwfW93VHQh1sEJRQNPzwkPoZFjgRvxLri5PLD1owrQcT2sfUHxE82xrvLpqP9",
  "key20": "5u1p1HfBAYHk4C3RSZgd77vqHSkQ9XqtNqZGMaHtHe4GeiFKtcAPyr5fMcvBwt89E6Lxintc6tpBzeAAfWWc6nbH",
  "key21": "5fw9uFzQoxU53UXHZaMCQLszg2pNstrqmBVhdj597R7NBPtQdcXWM7t9ZatYYuQUCvHQvk6U3ouAYiJuzenuwoCh",
  "key22": "2AapyKRRWXrLxUB5ZrM8z3NRhVC23nJe6pD73gqgYCxMxiPgxc7vRUDLrfWBZ5QGdKMtXPsxMMVCXRLQnbReyHQv",
  "key23": "ym6DDJrp1AkL1ynKYe3Pi6zdbLbAjDCGBtsLBVJiWv21gGGC8C9hLcSF3Z1eUZBQztxt1jMMGaWtop7RVWyGiZF",
  "key24": "5N4AYy7E9wecG8NNCLusxwJBwBFhhXqH1SyFgc6XNeDioAscFp7BVwSXHvD1jpAwY56eYcHK3k7mSq5V4Ciaz1wn",
  "key25": "43D31npbd8NwpnwQk22Sv8R2EE2FipdWXTpfZ7N85fkEvLiQMmoz8FrSLy6odtWw59PzF44TpnimE6VKuUS9oJEn",
  "key26": "5JcqLe8Ag8xFQBj6FvPjjkihMB6uFjbetFfN6v1NieQ2HHrEvinecat4Eg73xJwt9vaP2V2EExEGR8g84LRJKbtx",
  "key27": "3Wi4UhMw2YiJqpMBUcr9QPAkr455PSGSAr6DS1Z459YsSVsuMfNwvksAd8hWy4kPJ5r1wL6eGXTeW43SG7wvGcnn",
  "key28": "5p6FYJi9vZtHCw63gJnaRpokforf5zGB1zthopZNRVTxukjNq9XcwzShdpdmAuN6MjzGvXhjV7YqvHXNGKP22v18",
  "key29": "2dcXKwU3cvRPVgRRtfANVzKGuAmbw87gxmujH7NfkdhrGLnREqkMAaWHuabT4W1o8Ckt9WiZ455KwsVtkFrZ8o6f"
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
