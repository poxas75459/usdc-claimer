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
    "ouKPZKE7dzxv645prh4Vthnx5CL3VRfvibpVBPdkRTEFeK4FritjmQdRk5uVdMW4FCKukr81JSjYv5BNyMLYZ7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oKGWcsVQdPbWNGmcCdefEeyW39BvVj6pTWk82xJiNFBLTg7q37AJhG3CUeLVxgWbdYDECjY2czHfpTstwZZTJNy",
  "key1": "4QH2dtgbUuthsr4ETPmn4eCqQnXEYMyrgUTP8LxAsSEV2JgNaAzSwomRo9eam7WZsCK23NApR2hoDwig84m4Gm1u",
  "key2": "5cfHYeqXTBEVUgYumK25wesN8G4VvypMCZDbquuSLJ3ZbsF7CsW42abLjZosBd3Pvc4tQWSUABJrGUAiSkxV942m",
  "key3": "eb3qZyoF9DHErEfLwmGbsSiNjhkgxEXvs82gyhr17TFzZXobaJp8pfxpbAWVU1Dpobgq1GcGsCpaydfA1J93hRv",
  "key4": "3YH6uiYXZKGgyZ8KrSGtQADF1bEPEmgp8EzxMthJmnYedve69qavHswN4hFLefB2eeUqQT2ZPG5s9jkSVLtnDHGV",
  "key5": "2rHYHPufgvfRbbJfFQt5aDHfhKxucUpsRddZZ7hXJm5Feh67YQTCzRCmNPHJtjhyj8iooPE7y59eyegmSUhqAdpH",
  "key6": "2coP3M1KkLQgStiZf2hQMCGMdY3h7KSs6gmAcgcSfZ7pFSkpCpm1whkZt3UcZhqDsifmeuoebuaAwQbHwKNA4rQF",
  "key7": "2yonKcgBJa7XivCGNG2xJCCbAVVMfDScWp7vvSdaPr25hX6RijhGQeFcKGMPcvvYwUiBNFtqp4JJcGKFErv8jLVR",
  "key8": "2GmrgS297rsJu5oYiitWDtMUq7Xs8uQLmbyC83SWFbCTnmhAE2z9zvB9vupVVmfq8yESJ5StbZUUazg27BkZcA9q",
  "key9": "1xvvSHDxDEPFz5rJpthx3UYxzAbWVsvtEqfGesdVKe38WvANa6cK484dE2MmY1TuCeU9nhPHBKNQpTGorvD8Cux",
  "key10": "5owwNJpxsoW1kwLufCuB5CZUAtYaoxpiacXhhyBgVi7yXiSh7AShYNsSrFBWSw15oTdTj8hT8RgQK58pBishSjRE",
  "key11": "2R965AyL6CgmLwc67B7Lo4ugrHXjqrmAXKZAPferufrtonj94MXtRz7dmpxiy9r1TPeGPQo8ZvXyd6FFnzYEpxVA",
  "key12": "Rt7AiC2GPkVghmQHr8dBaSnmpMvszugziRUWcevauiEmd8QzPMe8kP5LY3aqxaDZpRFf7imfCyfTb9q6p3MYvQW",
  "key13": "5LxgT1SAnNxrd7r3H4Sj4KYVQ9ph6HVAFZt9XmVerQMPPVjTiCtrxncvuvoNStdPrM56WwxJsrRUmWsh3s4rZ7Tu",
  "key14": "5wC1sfJE2Bcgr8W7WzX6pfT9tso6TdMEsb3YTtD2BBhQwJEKWC9gbbc4X43TQvTTw7uqBv6UHA95ijppqQKqBhfu",
  "key15": "2SDym8YPtQpAbC4xMHEH3QAGvtaHTc46EJr3FzJNVjTZmeSj9sG8x7Da51h322NkmJ6ErFDvmPF4Wg3b9aaFXiF3",
  "key16": "4zdjWaBdHqg9tpYdZtgpgR2HT1R4jqrBht5uncEL69E6c9ow3woDqi61fSzdgRSF9z5Rg5kPAfHcR9ZUvjSTMwzx",
  "key17": "3iYLqQMzTA7WoTEDhcByb8KfG9h1UyPxnSAk4oEo12k43BCX5byQ8ErQ2NHxh91zz2qvgUiCR14tfrJq68rTCcZh",
  "key18": "3yVhSUbFUmjyLJdVHteAn9iCoYpMeHCvNocsAKE9ojZKizDhsuiaQNY8uNVrVRbH4j4ENFpTdZwLoqevJGKSVpdY",
  "key19": "5CL7wiXs879yskfkeE6AQuEbNUfMRNyfoc1LMm5f23UGbB5VZ2XbNeM2GkNVUtKCVUqiPrX3EJTc9AAfqSzz2xjp",
  "key20": "GvsBAhkB4dGt6VVyS5ZvD86XXeJkN1KJnrVfZLsYx1E6mEQentLCp1wXdATJZBo8sSq5wErvXZpxjN8Y3ZYZYwZ",
  "key21": "39unngM9mSAetj4ZPqqmsH2ZvhQ7jmWoGB9co81NbTUfCggKf32u1URpy6CNygQp9akWNa2dchm2MQGjEroUAZ6G",
  "key22": "2r39kMQGiMdNV8bD5JtcqpEvS9CFKbZh1CckoncZFqRGvptZBRSZs28c96rEcpbtxiumoJEp8rLdCY2ajtLdG3iU",
  "key23": "5kUiC6AN3U9n99S7v9RkP7wfzRr2XnTVaSRi3TdYchkrpzUQauL5ccCnVMxZyJv8BExJAcRyCEiSqBsUoNzKt9ZR",
  "key24": "66c2ZQvoKqUups75jDuNHjrgEYRWMKSvaciqu2LNRNDvVZd6RHiufazLfpR7WvVP2xuHsU3m1KNH8GWFWughz8Rg",
  "key25": "pgbhkTaTTxbxfVBqVtyh5KpbPPAf47XcvEMQ8xwp9qRtiDkGagQCpDiRxXLsTuN5PYiLBqVCj5txU24gvCyGwQ4",
  "key26": "2Jp6JqPVxn1hj7QmpyDe1suhb7sEjT3ncGdcFSbyuQYNGoo28HXsPyntkyLU45jcuawkjGJdbCMLM7EcQRET5tme",
  "key27": "48qaGRvtT8QnC9vkYJV9cdPiwzs2JwVCSsk2ry51VdaWtwdf7B5ezGTKZ47pCWNGbnvQcrS1unt3s93QM4q8a73p",
  "key28": "2FAemirWpuXBqzUVtxU1kZs3nyvmjGKiRmBBKFnGjPGvykogspCtsaen1PRMVAH76UrAKL7WwmXYHK6k9Zj8V2ur",
  "key29": "5cDdoBSmRXE9jSNBJRp9C2uPquz5uFpHdzZYPZ8SJxeb7LkXvBqe4KVvYoLQMJuipM21BC6xkKb84YgDS19WVUet",
  "key30": "4ZRUcSQN8yGaM5xMXQtbj83cpNJZawaGaYaAYt1i6Akxr1UWoFbW8kCBhtos1pzznkQz8zK8jLiK6E9xqgFR1nnJ",
  "key31": "2eguM5Cdm6amoLCkyDXRe4AG2oLWsggA5j1f7Ppvk4e1hEB2UjXJbCSscw4k3GNfgiqGkozFawzeYmQVMd4UoZP",
  "key32": "5iugzXAt87cyds28VAVZDS72ZG19Gn3zFv8hkcgZBFj8gwpA5Xm1XBk1vf4Lw6ARZGMS5BwkgCsctEzVyAX6tQtM",
  "key33": "3asojfon5zJ9UbqZWY9akESQVQJNKfxwzNFwb1z9bWw6LnYvEEnhHgffjUU8twBPGLj6n5oBeMwHrAuPGGrXPkxN"
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
