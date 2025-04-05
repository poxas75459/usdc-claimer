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
    "4AjpqRNmFpjfG58PFwfvrLpAnS15qTea9vUvLPPrULHRBFA7R3gzdivDHXtVwo9hTPchuTxyTfXSMj4v3ZS6CJck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8h8FiTRHcyQzN7RY8HUcqUW5U8EWJDjKxjfcNiRpw59KdJ7gmwfA1ocxbcjHx3RKrj67T9FU8ZiVTiTXwp4dK6",
  "key1": "4hsujatSYcF8wYrvxEnFGKim4K7NE82CJn3LE2D2L7HsVAcTPz44d9UJttjbBTVWF7uLgKcAJFtdEqoEAt9mrqhb",
  "key2": "2LFHL7RZwNKVrdmvDZcb9piBaF8r7v1kdtDhKKLjw25WJWA6Ec8EJRQReTFVGDVMvh9bHWPoLupgGGTGQFFFbgi1",
  "key3": "3kUcuREmC4rdXvJ9iGDGfppmGkVsnKeU2FmzvzzoGvWt66Ht9r1BWySjLU1WLPBLkXUmjP4P286ELCoNmjbLmyDq",
  "key4": "L8Yp3KyXAdoNDghfRAWuFa9Y8mYBxcaMM6ZxVS6k8ekfjRx4mh6WhmbytDRrAahzuyY8mr3C4vHGFPraowS1Ej6",
  "key5": "41nZyxumzXNSsKHDiLpaG7tnpPqgjxLAav9nWn9MLNwJQtsepboX84z82XSBmDFy6UCvSNRTkr1FAF3WddcnNUXK",
  "key6": "44cLURi26r42C22qo3djri8ARn7pfTgNqnFN1mkXSShGrczDqt3KRphpKSz2x6HWPa4Jzj2MJSa5zF4B565GNZkY",
  "key7": "LjzDJPQrXfsHTWPgLu38Hv6jv7ZXQXQg4sYh6prGfWh3rJQZ5iwxWCQMkJBozGamDXof2kaG8o3RRcqyViepgEV",
  "key8": "2w3gXev5J4rTEV2w9VzWKMsgsW2t2AueUxWJHFfE9znYsP7vyg2BG2Z6XQkiCKH4VP2KCHRUY4Gk8hHrTz4MD5dh",
  "key9": "42XzcDCH6tSpEXLnzHTniAB119sPXuP5p4hMPT66FTN3fjWp6FtWhA1zfgoc17Gpt3WjqnTagv5vGKakwKrLud2d",
  "key10": "4xm7ZFBjJibYm1HhbTdH1aSsttJfNSB9Yw9pbm63Q4X8PQwrH2JkxMxQbWEFh7KaMRJnDb9b15tVhqntKtuLXDbT",
  "key11": "5NeZJUjiWFXfR5dn8zM78R3ZB54x7w3i6czfkxu6jbNMVjGo4kt7Ve7GCpwDESGPmfWYT3k7U1nFZBq2croGw3un",
  "key12": "3aoDJuLTB2iFcNpLjgEFbLdebqvfJyBScnhkjK91w2Ue9N2eR79bYjeJ6U3pjmdQbHVbyxnY3i2VkVGhJemdU9Az",
  "key13": "3HzQAYW6pe3xGNRVjGs845jNmNXTwndMMPNiVZsDwRTJznqohDknQJCMt6mYLSyXVGL8iFNRdzGwtFFErSy2aZUQ",
  "key14": "65EBTxzD276cNYAaTdXamAXcmGjyqCKvogu1uvgMSUVhJrqfan1P4X97h3BT7W7T3mqqujDVcjCapBms2mEzUx2V",
  "key15": "4rRJqsUHjb2pc288nX1MYMbKZkdbDY7SmqSathHFqoULr1eGUkFhDJmuP29wmzL9gmeXfVNNB6YHeyFuUKyH8yX",
  "key16": "4yi3oqTTvXi2R8yPN4uXJhYhUZV3yKDeYWYBzPyd838Adsf2iUBk2saEAiEVsepNVB5J9o5r9x5m7YpVZkBcnqcK",
  "key17": "4r7p4Q277XnLMhNXUZhgoLC7p1GpoSQBTjwEYF4FhbogcNznvyzyz1YkyXujBmiRyWjXDnotQY1KfJDGQk9aM6DL",
  "key18": "zZzm388vQeq4SoZDN8VykoPF7hybRYyjBU6pThCrXLpLTyEModx7YyCTkEcaS54rYgAAsU6jbSkgk7frV6ooKGq",
  "key19": "4e2Baf4oV1DWoWGCn7scB2ZCN3bczK8ffVguKa1keXpTQXTRDMnG6Cbns5XQwt2sHGDTxr1iFgsdTBQdjP8vskCu",
  "key20": "2DtzvsNWjNb3z9hxxgvFbWaYjYpjh1d6i8pfD2UipLv9qJD4SnmNSi7wv3sUZZLxDfuSViKuU9yDdhwuwXvRAaFm",
  "key21": "55ShQbeMMp3CY3TGx4zYyzRPga7D97KcvVzyBqRCsBGsde5NrasWhhVa5TS5Xi6XE4MxjjyeagMGf9VMdVTagVhH",
  "key22": "2zcWoMgfr8tvVdMWH4Zo6A3fLc1ieqaVZiQwogTM6LKw5pnCmtRXtZr8WRYJydmRgUr6KMaMYafNh3n4GbRU3dAJ",
  "key23": "2CBx8EpKHNikFUjPzk7BVBiig4tz13BwMCUYQZV4uRzRd3XFL42n5Tzeo2P6tmk3rHKky7oE41diFnWEnRnzob9J",
  "key24": "36BrbEnUsuzszgrQLsjJQdrTJ7sBMZ8rSFa7r7rHj49Z2pMjqGwejAfzBDwkdo6JUi814zWBFQtoCbLK4euN2gV8",
  "key25": "4zkeQak3PZUjpqhy8oRTVTELhcHq2SQfk45NtQRseVKuhGBLJZkW3jEWbU1hiwzoQSQsvxJ9nGjmvZeKyVB9rGC6"
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
