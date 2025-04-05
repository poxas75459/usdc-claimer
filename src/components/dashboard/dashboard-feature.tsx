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
    "5Kn7yMr5TJmCEpaN9hJut93KDp5aGrrkGr8m9BDk3QmZTcYTPAoViyGP3H78veykvXE5kvfKBbBjYNH5TG4Xcd8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phMZNCG8NcAmDNFkAP9g6VpSvEHsw8R3cW5qyBFea1wWLT9fz7WRxVWif6X6Vm2fh9ZYPfJtJDxsmehEPauvJw7",
  "key1": "rrh79Y11wQuczMWyAr9jLM328eGjtYCe8vsoSMenzqsX9CPi3fAEFeAb7pPZxfPLXXo3JayQPde2S2qizb6YuJA",
  "key2": "4vYspLqqhKWffVZZPH6NdyTP2YZpbsMifiHzLELFKGz3BPfkBHrWXdRzkHdEDAQX7vMRPgziy4wwJqGR9JhsNnhj",
  "key3": "56dhx9a6TeBasvPfmgdABs8mu2H67KEy8go6gNSTdYE1YPSq1DJFWuJrWy4U8MFNCfT4wPNeP1uR692oH5GSy3Pz",
  "key4": "4BMDwCUnDfa72upDD6GVV1Tf2EExcuRvJ7mq9zqhpp9Fk5TWGbvxkB78Xon2AGsqGfqmAVPDsaL1WNSsMxoGSdhj",
  "key5": "oWmB6iqRg7hyjqMJA8SrSYgV945MyCjANh7HmnxCfTtgs8WDYuCvPXNcT6hiH9m5FjdCN6tK2FZ9671Eka5pmEh",
  "key6": "36G7Q4DEMdhb87T5go6oEjduiAnGhthudaNoyAT6TfxqgGhH6nRJY2c5WLBeq2H1mUt1euxTp57xTDCrSMBajwxF",
  "key7": "hWkfqjC7ruKjh67FSgXL2BBWXWBFbMkAZYydVKQ7CFx3DW58vVoNKKFx37vovfcqv16KTWkpw8A8fY6wmhMnqmi",
  "key8": "3eP93myX1q4irpV5T7VviRSstQEjCafPPVMBV5AMdvtPNQh8ws9ddJypvbfzjpXCt3G73ASNFKWQMyNHbaf5gden",
  "key9": "2oZNuFSJX8TMvik31Azec4y9mjmM6W83rRmtLP7aAP14vRsCDGuCzazemKs7dkazWRfwRN7dSX5HMN6WUrdj2A8o",
  "key10": "4GqtRDojG2ZBoefPXvfL3Fp9uk6ofdHRowPxvR9ZC6opePxFecaBwndh9JzdyrjkUn371HFJughqJSHiMKTaMGfq",
  "key11": "32KVyv29ptDqZqChyKho5mE7N71dgQ71sxBKCDJ1pcvRgZbxDF7G3gT8PYAzQvop6azm9yxzFdVTd44ZhkteGuU9",
  "key12": "3UtuVLFn4MQefGkKgUUFBBhCFLbV1syYxxz2dbAMmqaZBZaGTupxqEeUvuhEV2zXNSJRcBqJu6rx2jJ5dWd4Sppa",
  "key13": "ip17UadcFt4hP8r6efqjvWqMEuYJ7CLDsVGJzstFwjQozRryh4QohPWwNKrTKjsX3eTuxpqr3wQfcXuqv485yEi",
  "key14": "2NMJvVgqgcXibx4JSQeMhjwcWJsw8rco1SPWQsRUbpnvZMMRKpZVpbTU56QCfcYkctHFFZD3WzwZnZQcQtz6EdZx",
  "key15": "46T3skmBbZLePbEfE3jvFnGSCx5RxscPogJXgTGZ966P5n8YAvovczRnVKxad428aajSmAwgYYnHFptrVppC6ok9",
  "key16": "mDeH4pM416CKu6N14oQQP1dkxPiEpqZsfxnURpjjCxSAwXdpgyVBAee1xpKC29nSH3Hg26S4jBpPFjk3PgTQv1U",
  "key17": "3jtaCWfC3WTi9CJR9EKZyPqmvKwmp8jzoQCEtNKfG6fAQGQZ3LbpfppqSJKzK6Tv3zTQxU5RkAqheLxArVhtTq61",
  "key18": "5Wpo2MsQnG2Z4psGCgfzaBc4ye9XbaEoJKFohuk3THFNvDS1kFdZvpa95LfvKzQcE6Nypzy8fUStBGpxD4sLE66k",
  "key19": "4njTXAWyxx5kUhKymuSjU76TxJ7LhDj9pXbkLmcedidFf5uM3zTCsceh8w6cLzwTqWdX6atx6pUeJnMecYbLusg7",
  "key20": "u6VeZxDoCX4LfGBbiaXWMwaBQDAgvfsdQfGQ3RkxnuZhPK6SHBWRW9Jv9gixfHzYmh1277bxVwfudVgnj74TEwg",
  "key21": "4k3FvyogtnXAD2pvx2gtQnP6Xc8o51zQLoYfZdbcutz5RgJcxvxQpSQHVUygzis1kaopSasVTBcpdaxCgWjDxyyt",
  "key22": "Wjo3T2hRrMBBL17hupvbd7DkXjdWRARbjQVabUhk14VNqBp1dgDM99b3NVa8ffEHfwS6Ja9gcTyMtZJSoi2ybVq",
  "key23": "5xmCzhikX1eAtAz2edDs9wbfkj9qYyEBhq8ELEDa1oadWRQTCXYt1kRxZgH5aiZrJEc4CFB9dfLPV6Fh2UBefLNH",
  "key24": "u5JTQvbh1tLAULrNtFSrtX29KffNmP7zB1PbgjFjBrTrxBDtJw6RHFbGMNCWwvGPkvQgUrP3mNduDajkgjSki69",
  "key25": "5gXNenVMjNoPinnPNVE2aSu5js1vs4La3T2EzqXNpjEHt26AHFonpzPwMMcW5w1w2LwJbjnYyqxKucKTgynX2T9p",
  "key26": "3YfYzQrD4HeYfGGvmX74PuXZppuTvgMgDEowF1ub42MdvvZUMmV7mSAJCT63prw6NqGtQt3iUCXzXUo5s4JnXPaz",
  "key27": "4yBf7SwQfJNHReN9ag9BzUCLa8KM9gGomPbg3vbBfLb5WT8qzbKtDR3WZTt18tYbstLK6zVKzAFam1wSQDeSBDdV",
  "key28": "2RcLHBwTSdJnnyeHNqU1fFWXLStckDP54uqexH47AEZp7bAmthZXZjKNHGkVKcGEjjTmStQLF1cNKnpBfQKqx6Md",
  "key29": "2d2bmmQeNj7Fs7RcQi81Cc54CGsEv2D3T6qTB3WUmEFbt5aUAC7xxak4e86YaEH1pxUx3jQ4syixmj7KYjoXFhiU",
  "key30": "3CewDQfboEmPJAA76Md3NL3G3nofo7ibptrxFkQ4pp1sk4ntTSsZCLce4ESdxh4YyJ5ihXEtsw6voCbEGphebGQC",
  "key31": "39arQLuaQ1wfAzzLBo54VuSjyAeNVk9NSEKbGQktktApSGUmk4dcyxCjtdZqKBXobEu7xywVH6PTPf87qwrRB9QX",
  "key32": "4j4SsxGktJTiiSsQuZEUFEDM25SfBrNJkqRHy63giN9qMqCZeWqghFDC9A2rfVXwZqg35GHhG94FnoUtJH2meHqh",
  "key33": "2T6kCu6chLhfMQxjEJhgfQhsjU3p4y9FMe8o5FE8FK9pfhLbteRSDnP6vMP74Hg87rJerxnF21uFFF2oTz9pd6yJ",
  "key34": "5BNswPRs8AU4LMUGdgw5xZoS5v97edWYnbvKXtNqHJQE2AxeU4oQKh4W4p11WaYkzePvebdGPzCDhwKqZkfVUeBQ",
  "key35": "5CQ4f4gqx1mDMW9NpSs5PZQGywknJP17ahWPQ796c1pFiTZ5VzkVHf81mGFMjeQf4C9udtTPMihmTcA1XEpLgmte",
  "key36": "3Bbx34GMHNdBEHnvPv2xj6otFTwHNBVNqtA4CTTBt5mkRYf7BA51pPt3aXMFEX4czDCVcCQuiZJahnAtUdEWq2FT",
  "key37": "4HoX5q5ktkywoFjPhmwNkHr4vNadoBF3ZKaduweKgJdSUNdrt6yqtBFYC29nAMjg7CvRxa7CjGKfJ7wzJcLh7wum",
  "key38": "4kyQmaHxPAqj9eTnqpiqgCwHZYNZx1MsJzXX1NkWuqNCFZwbVD5Kt85iWqcSrgtrAKoPw1Jnzi99dCS6kjkKRd4Y",
  "key39": "5tDS7o4svE8QupnxhN93HVtSAcif4ZDoruvtkWdv8qDnix8M3vPJRT9Gi6h5tJV9Bqy2F2xG6PpviW169fjJrbrK",
  "key40": "5ZHbpRce6kahGka5czna5bxsqtfNRrpphFPHzHAnGF8zjgaEzXg7EvWpHM3k2ZbWehR8SXcPuPas8RLmkhjZSkrA"
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
