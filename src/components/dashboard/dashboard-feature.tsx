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
    "HEQAnMfxV2M7mkmzK2xiU2CyUZqhZZpWikhjSVAnwUq64v53w4dH324zx3etMkKErXoaqE9hs7Qf1ooEobYWQqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7vtVo4EnQQr4yqcnTb1mhdoUTPV5gLnNc2ZZLSnSJTUj2msr1ZwG1vC5Y4XBC6kKLFrMJtkxruFm3QVBg9i7QG",
  "key1": "2bRiuw4EBm8s5ftX9d3HwGgcxCwnpDA6rHt4Sz3i8DGiwUxXaSiBySfDqTWj8aRoiboxtJofkYy2Q7Dh9nUQKGS1",
  "key2": "2XhX4cfE9Y8nZKpq1v4JKwFb5nLV1s9GELWg1AmTXLR5qbYyoW72yNtWYVYTUXjausxMa9fSJ2e3CPgiMrHcGugo",
  "key3": "dYfv5R2Hos7o2zVinTJQnuqKCJZD324ggakRsF8AjaCQTxm6eygPtwUSVyaiG9LcDCXbxS9yFR16x9uXzYQddRp",
  "key4": "iGUs7ns7uTkrNpGrL8pfWqtMgT37yE6mn3z4wL13F2HoTMhAWCSSK9GRSabNipcSGTPBc6ypch2erM2z9HU9tcV",
  "key5": "2vQcvUk3YoTacYxGu26ShBh2GTD9gzy75eqZRW4VvAWJqchbfn3bvBDqNHxoyVXLBuqNyWpknpk9NYKhJ4j72FQ",
  "key6": "4jAg6v6zXz74VJWLJFYkDMofZiYbm4TFQDp2c29EouLP35nYLVJDPQiq64BytFX7tLAG733RLCeYQY81jNY2J3vC",
  "key7": "dABAQfSS2oazhtGBv3667A6uC1mXKoZic8ykSG37i3psyf9tvuKfAvUN293wQpiQEQDgCn4e8SdVRXLyJbAor1q",
  "key8": "5m8QyEeErAE6iGBEnBv5Q2rqJFjwHUkLj6vinJynSaAinjU4ESBQFP7esr3Q7XSrcEDaWm97etFMKLDs6JaTCCWK",
  "key9": "2Xq5gBqp7Wah1GMQZS3xTuNWWgUZSBNMPgtqQvw38LuH3uQkKKrtcpfzrQfXUSx57Afsg59XyEF9YQCMihwvFysS",
  "key10": "3RuKks2okTzsBmPCoNPczhH2d7DrgVDEC8XXD2QGfqPLjyJuuiwCmUV6KTvEeoMvsNMYY7rgyHMugUxkf6R81cVQ",
  "key11": "3iyQnToCs1ctMAbQaq1Dd6bs31Pd9aZi8QqfiRF857787DYr1WQjMxYawMRuqXFnYxe531j6TJ9JD3vEqW5jjcCq",
  "key12": "CfzQR95mt9in4Gsk2tKLwzzpzs27b3CFUnVeUWhHkQJGBDUsqF9HGWE2Vau5ZkHwWmvmaS5KFe95LKBapibfKwg",
  "key13": "WZgEJ6fz3J62KY3GVERAAsPpTPi76w61bRxsdnRmpGL9nqJgEphw1qndoY1TAi2Uyyg8Cp2CeRANn3CFKEwdWa1",
  "key14": "2ZETXkuuuFSsAr51TFTvaTQXpoDhy4ZHEKJNUkX4swVvvpHvPhVvZgJoZB2vWCkBTiyVtofK3EUwcHEPaKvkXQ7Z",
  "key15": "3tfm8mfo5BDW1nXpBnpAfdPYErRnJppyAiSV7Gk2y3dyx3NtyuaH31VUwDQse3NUBvT9kJFF5kxhTGGcMhc5hrxG",
  "key16": "KbP8xftcUq6baDGXaSQMFeLpbgoHdeYEQL7DafjRpJUxF7BUKLcmC6B5F6rrF2Y3oWtWEKGRfhJFjfFcRzUpb1d",
  "key17": "5fp2YudwZvPT8KfeWe4d2HgiupHbQyUCSrJoUo2k7XPnfXUeTB8vkFzh7NcGPEQLDyJvqEyeG954xduQiDxxu5sY",
  "key18": "4pLYLRYsHbA7i54SRotd3jezi2jmQxv64QjVRhpQA6BFSgPCsaNJH9mm2v5cdiYExKqxDPs9HEtsupxdLMYZwEHn",
  "key19": "2fyQn1gLRsf3XRpCMqmWuX7jrbFWXvxNpBYG2z8U7mprwVp6kV75eQYvNU8X1aG9SaPYUPbcZ9JMbN4oxhRa6XnG",
  "key20": "5XTJdbQVwELAJYq7BrE7oM91VcostszkRDgd8XcCr3LyNvzKwVTcCJ2NGtjsWZnsmHkMyEQwtukZBWaEfDadQCaF",
  "key21": "4S8Fp1EY9kyCjUrVUmHpkLsv8XNZ1z2rhmS8yHdjNLGinpjG629xQTRkAVyS9mL6ruRrutVo3PzfZfyQ3XxLEdmD",
  "key22": "32WxMuNVJFwreREBDxRrukWi8RzL44jfYYs2z2qGSjeQLbWotMFzzDueN6QJs99N9uZt15VxfDeRxg89UeG5tGx1",
  "key23": "4H7XRqtmVS7J8ipR5NHuYLNwNTQUASRQCKMrMaM4ymnyXdrU5CX1T7ePJokZx8wcMJgB6aij4VGoyfspAyLTkZaL",
  "key24": "2wPhzwbR3XfVeLVUrHJMrCeBUxy4QJZsR8c8bgxJHJwY78PB6sCVRwfCLQiLzCGbJSUbp44kc2JitTdbpvJNKnFD",
  "key25": "33MwebC1uWfY1qZzu9JgKbr3si94cNxh7XMsrRXAFXvPD7tAWYCpiT4ZsnXYxYQkz7ci4kmxUzXXzh9msjNg3Mc5"
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
