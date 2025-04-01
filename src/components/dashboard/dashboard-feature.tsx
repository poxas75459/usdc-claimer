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
    "2NEWejhScEQAn2RcncemwsiaWMcurvsj55bU3fRknP8i6McZEq2Mq9HQPcLD6hFNKGdFDghumB7JE4aJysLVn6p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61NpHmWay4Pu43JRM86yCo5xbP5b8959BxDEJf8Ysm1YQSVDmXnNURBCY4ZXJZYjUYw3otGNtoEh1WWRnULCXcNu",
  "key1": "46Rf4XYEcwskpspS9NN7aT3K2hrgh4DahdY9UyVAsdpwFwbESphU8FuF2AQqgHpi5awTrtxEYr4pmbiFdiuMVy43",
  "key2": "5PZVcf889LUdn1upVvyW4rG9wW9StoQvJrskmpjLSZU4CsxwAfWfAensoHxNFAYKJDsp1u2xyU7VZqcBpWciurKK",
  "key3": "5RKyBTvssahndbNrfgpq59HsouqUtyuQHhgFjgc5b3RfTXafMZ7ofMt8qcnh7tF3km1SK8HXM78t4zMLwDqV2g9E",
  "key4": "4VfJLRdSA9smfCrKuttc7LpGUUHy3v2yJXKqHnphjasbPQACiiBW7rJScZWaxPjHvk9jcZqHVJAiF1YacqziQnxh",
  "key5": "zF1wyePJuzod67tjHyCe3bjmnGTSr8u9dWvc7LoxZwJya8BatcciKxnhH3JEj2DVNNmk1CYShZGWnNzfNWmCjew",
  "key6": "4SZFaS8gpQXNYBQ8ypDqVWGxf7p3qVu2psbbrGxidRnD7rHoyAuz6YgkdCgDmhMGmzf6Skps6c6ChMorWmUpLJRi",
  "key7": "21QgWqgcp5w8wnFguk3ko8u5Wz2GiBwRb6FJJYkJE85yX33gcHTsKFt2N6yppdGzTsHit6ooVkC1mo8vC15HypD1",
  "key8": "3X22FefTcKQXbpVJfKw5yW2ViDS36CJUBemWSY4keo5NPrTrso2hPX9mX6k8narfT87HoAeAHz44pA5cjYeGJhft",
  "key9": "4z3rUwCEnox3Eux4vdvyNjtW9aPhUvEkedGmhZTs48AENGxYTkmjjCEMei46Q3vaRNPCuXhtioV8fqBo89bfJ9Pw",
  "key10": "2f1M2MjXSA8AXCoPL1jcsri78MhR99fn4oVbsKnw4aBpg1mHAztqQ6kwv2cgcsPMNHfk29t8JFM4XPX9QSvdVLg6",
  "key11": "3RFJANpnwDZBRY9tF5eUb9XY7sLQi4EfDZcDA8F5orVt7m3SpaQg87AYC8xBny5ssTuRDm452eKJvF8ji9frL9hc",
  "key12": "2d39rr5xyUBPUAkirKuKFzZsHbfzBMqskEzpS2zzwif1jrDZvp9sW5uNU9cUE1CNtYmCaEGYc6VpKTKGrCVsUmp8",
  "key13": "5Sj8rhstncPpUTypQ5oTbza4iGtkrGDEVhqNS5gtxphArCiCciy1hPHCkkK3CKboqiKjmyhhtnXVyACc4QruKpoY",
  "key14": "5wm5hee8QsFUY1DqhNBi8oLU1uU9wifwxuWTU6hc1rLG5kQKLgNnWeCDGVJ2pEzvm1Ts6XSw5vYFA7XcqVxGmZ2U",
  "key15": "3tvBA9ayL5v4Y4fK8SsADrBUWp4gUkmU4e38B64acq2EwfeFJUDdWPHPUXVaWd7vbQZY7N3T4wScdGQnhE9N8gJ6",
  "key16": "545cieCQqKwCoCLHWVFpQRH8epdxMiinjPQjeh54SAzm8DF95oAY6a6AUM3ujH2S88upiESFAbBmZGWoNVTE1smT",
  "key17": "2D471VpkeULJrDaRee3EsBK3ikk4G7L8C8CBJBRi7a3X2zUimgPGvWrHZwtEXVU3474bqtCfQDHxLcVqJKn59Ci9",
  "key18": "81LT4euTxyPTPz5vvdKaXpG84NZwWsy65NYK4NJgnps4mgeKc3YVgaBMYAxXGRnEUxabG34F1UjV3DPoqS26aPX",
  "key19": "5XFWkRQKXKEZEjGZqU1yawSGJBtM5oZFPJnLUD2MYJqoUV7eTCM3KQXWmF53VRgTiqWrxXqBsf7L8XqhrJVHZ6s8",
  "key20": "36CiTv7RYodtXi4seXV3yYyYP8imsSLdrevboiJiXwgUqBmi9qhJCuhQY1L9H4RUctJ3wpTEsKLXhPCdcmmQwhxo",
  "key21": "27v84otLsH7bFRVYoWe53m5bn78tjPCRtvYHHhbcuN5HewcLiQtmMgZjdLYt5nsXuK5qQh5erjD1bSvWYAQC4V39",
  "key22": "4vpA9nXywWkQ86TnTrAs28FXTJy38xvHFX2TwhNZzX3tCCYgosHUeUxtT8iGCnqLSh7WkS1kDYVDD1DUSrbrRE6A",
  "key23": "3hFAPTAZPx89R2LvgLJqQ8nBgfyycDwaCH7dAoHonQnRk6mURRVBSGGwfHnfCSoZnRSNGMF5vEtmDEHtUuULAZsj",
  "key24": "3qiujYUHW4bXdff3KSviAW4zeySqzeA85WUNCwe7dAgnubFBzbY16ScoJyE9NsWu8rp3oGZgGoo9fbaXqWnHD2j6"
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
