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
    "2MfCxB5ui7oTTzNBrc7rzyp1yhMukm1Smuena6ofGJEfRhmEueixVpotS2fAHtRAXXFUYsGDfeNi3GUkZDEWw5Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFvxCQGg5bdLWEeeQCrsV4ZxkLTmwriiwXf6pp5L5aHnyBDJVcAsAGKPB9BmXbpsqAVoss6f4um21HfxJSyHkSo",
  "key1": "aDpJQKVYaaqFCF7ud6a1XtrWpxQC3KbqHb2khmGzMvbCXT3aFGCMJEpSKHu8L8N7opcFQJv8eTxJGsbArteBiA4",
  "key2": "oGcbR6iYgubHfWJvQqPXrQhfpYVygk31PJYdPBuieAokP7oQWcE7fKVKHD4BnwaPMc9sgSBFGpxuenY8maEczEz",
  "key3": "NYV63hf5D7YWNRdvQSjKHBwadGrDc868ujxVNc8EdtxTCKxcQsmcz6NLEiLBMuqkJnbZ8kweojFZLFoFDNdsSuy",
  "key4": "3bicNzwLDZeKzdSrz8YdD6Sumy1mb2eUt73pPjSvCvA8DfKLQtMW58V21GzDXJqtwowxEGd2Ft7qMUgrpvhXF5UH",
  "key5": "ZFdpNSjyd2G5H59aRW7qxKJ3SgZrQ5v8G5nm7es5qJZuZdugdKTNHcF6GS666TRfxR2mgjMfHDuErtDagyqJSPg",
  "key6": "24Bzh4Ggrh2FMHkeuwM3NUmA4AZzEpMTRnfFSs5ZidB1QEZwjJGuAvjWy4wQYPfyCnkudQbJk71AtD2xZyo9JMfm",
  "key7": "5ppUkUMd9Acvoyd7pYTfPiKfTutC22CNNxtZKzk7JTTEr73kVAwmAYLESYYVK5W44UxNrY5VsEXQ3BCnBd6CUL47",
  "key8": "4j3mjq1i7hSRw6BsrvGv6AJwgiKceMGtyWP3JAbbSUJsBkBEFFaSaDAjaDAgM7gHTeW9hWW5m7Z5oCYfyNT649De",
  "key9": "63JEAA91eHdhB2f5aiYPbkWj1ptFCK7EwPjdbYn4YAjtJ8SMSWQF2cHWXybkEkJFi5oAZkoJtGWd7j7E5vvWWuo5",
  "key10": "57HwUrCq4Bcro7jBdnwM4C9WTQd5EHaz8jYfUCYbANAvuNTrquNvU4BFhbUydgGBjcKhNaHGsgDoM5MZ4Hu3drqB",
  "key11": "3Pu8BHgC5Gty1LQLZQo78g9vggtb5mxmDnfFNvLjvfSbNbejY47pHxLiV6dnoBfB6HHFboDUMcj5qAjdq3H4MvTT",
  "key12": "3WqdXPvqy5vm93qAuqTFwmU7fkqGkZMnenf2ZZZ92A6JvaG7GqbAMVhcYsGrEgwS3rAP8nRSnCR1sUDExifpjP9E",
  "key13": "2QJvzL84ZkTFW8zqcLRbuyirX7ktkJbS49Jey9SUoUtwZAxB8h3KM3crdLpDysScSXFcVUJzVXq55eWKaVpBGqZz",
  "key14": "5vpomUAFAeD6M9NsT7Y75ggfs3YjHsxyNc5hFRprT5V5UzmUVefyd7BKLzkRuejXSkM9Uqs3tWwrcWVnBkmRPW59",
  "key15": "3YmCE9T7yyjzxjFii5Zdzfc7dEa64bR7zTyii48FQLui3BK6qrX3tkjY5KNopHv1C7c47oDALBuqieLMFZDGpFmc",
  "key16": "DT4TdW6my9RLwGUH5LiSRdoAqZAA9eZG2uA1h2WLb5kw3sLjYd1t89TZzovYmm7wSQtK2ZJpHM6K6TeyFTHECHj",
  "key17": "zbrgZmcjyFxQEwo7SN5A5dWQUU9sRqKwte3GmW6qWYaDw5zpeeb3jQAPtkWc5XpXGTK4y7Wa4E1V8Q3cowHwiJV",
  "key18": "2qP1cRo6dRBdyJdzC7iwcd4eW5nMEqv4JJjC1vuXLER66LT1m8wYQ6V78r7uR3oVRjMP4dfNFnuR4k7DFpHYrU81",
  "key19": "iJNMe28HDQV4kpCa4cpuimYXj7DFX2XzRqieZVpwrT7ZUvcEN97X85Myj4gkkEnwwT83TkRz8g2naKxFzDZt6Dr",
  "key20": "3mnrDLg3QqsB5EEKVevfoWJTLN8EaBP6AMthQ4VgJ7hwXvzML4G1U9qunyJi9MNu4NaBaFJ8F9eFZ1AuiqvxJv2a",
  "key21": "5wqix6sJBbHEdEaSBokvwZhAfjm8uDuKeamZNWpshUezDfkdfxDwAwjUM1CyTrvMwW24V7xw9EpXmysadDgNoTuz",
  "key22": "3cGqT1pmWonEUei7EE14sSNE9ZxUDCnjxcsppe2haLgf6689E7xckh8hPUCYEs7L3LCG1ZYVXeVscGNMRNF9QBF5",
  "key23": "4C5c4rB9PBi7uWUUpnq4MBiFpPMEzVgxD24tQrF5N6gBNmdh5VuTDKPGm3f6A7bJch2a6V5Z9v7rmFcpCnKueD3M",
  "key24": "5gMCdqwqpT7FmMG2MWfi6v7oj6rSvJxg4oxxjUTCinN7Fvv7fmj2jD7if6Wj3TqETPEx7fAgKH8cSQTwEBhQXh39"
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
