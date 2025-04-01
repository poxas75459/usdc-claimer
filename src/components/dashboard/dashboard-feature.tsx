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
    "2VachUBANn4mAPsr3pQyzLZwtFA41oSeFRzm1N57zXjbKJNyNenVifsf5WC1fdGGBr2wUcEGU5Gcgk5JCnjbZaXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuCAvHhViF85PqRapDdwSbJCNePXonQrychP5y5WD2xyHgjER6w8vEF68kgZgdHbi741MLSnBBhvW6Kyygs76J8",
  "key1": "3tJgScUHF5AwKpWpFnVu4Fh3C8frc6PkszeikqVwpzmiDGXvoUALcpNxTm5EJyCXaAxi9TspH82XZMDFcTeqdJWK",
  "key2": "9L9gBaeqfcZQN5Z7tihwxAe3KGjZSutfRjaEFnkKfeWSZG5B1cgSdzbSpSkUgu4HJ8d5fwzAvgi9vs7RUM7yYqF",
  "key3": "5fWLGkZUS7XFwbANGGWzQdxFLut1qM9UqwoEfaX33MRUMizc2qmofVLHTmVDSuKtQWEHdSBkwX8Gsohpr3KRvWQ6",
  "key4": "3qW3cUPoYVcFUYAkwNzVFeVovAdH4UEDs8EP86xqSQafcqb9uPJQF1SzeEa6y9CtETqewHwRb8LocHyDkTeA4pKk",
  "key5": "2YH82eXbPF2swXYAZ8qzQCe6FciX1mGw9dKJrGZXH8wRaRpee6LGoRV9bee2PMoXzwfqGXz4GYTCma1ig1VLb4yU",
  "key6": "KmjswpjUBCSugBQXRTTrBFNjFWYRvanqAructJq5Nc6oXq3CcjPjECPvXd2nDzUHV7KEm6JVLfd9EwWnpFuGrwi",
  "key7": "2oBb3qxCcDvbW6wBLP6sw6PsUCX2AJo35GdkoBFE6LXfsysdnXGfXoUAYqd6gSUgBJyWbJT321YM5n9eCD8zZ3e3",
  "key8": "tvUCmVobr7XLA1VuUZ6cfDyMeVxMBG3cFAmgyEvkz4cy7eBuyoJgkcCRWMhcVQTVHcgHs9HWffg8uJAzWvWBUND",
  "key9": "3tM6fMGcAtL9H5AmS5qB496vJ6YwMRE4CD8PXowC5Ean6e7LM3THWoX9JgtoSxgKsif2DY5eDgNVEWpXbVd5zgF4",
  "key10": "3aN2CuDpPEQzQYshzbfdb9oLj7NizaP1njLiS2aCi1TgF8oCnX4P9ZKxZR1DpKz1uXvHLT7RpAHLQrKKyMfdsGuv",
  "key11": "4ebR4AMwUQ1T7B1BN4FLmzGeQZGn7HfUbQddERcpyPKuoKmFN4URXDytve6E9E8Pq4oSvg7oZfEGVvmowS7HamBX",
  "key12": "5zcrmHXy7VpQvWJBMteRiV6zt8YxPengKK7x4SaefkakAUnz8FP6m4jW8xVhyk89oU6eQanq6Kfu7FX1SGKBUbh8",
  "key13": "54To7kdK4vLu2zFhUfFGq9on8cRhcrJ8kbtKMsHG12uVwU8fMj3wdz64w94jznqCP4jdMZViPMqQuTMb2bi3bLmB",
  "key14": "5qwk7BawJEAaUeDZqYjHUfunCcbM1Y722Ucn1D37rfpmpxPbQCXrqD5jpLRtco1cL787eLXvJxayWZ7PLBfGZSgh",
  "key15": "3RvJdbdzvK1bT8QTZpMRT4569d1wy7GUjW85YKCzcZ5wU7P8n4SsufnaPMxUPJmdR24GnjKmUrzRpFwAh6EuJzpo",
  "key16": "xbr7cveTAM1fHKL3qmTbfMhnywtKk1PcEzR2JFpDNhktbk57Gz2LLrfV7gKoEPZbmJtRrAH5AAUDLH8aVcwqWbu",
  "key17": "5VCDF2G2JLbouaVwEPFWNvE5a5Dy4Z3U827LjppmuCF6hcdcWcGoaztgguCX1sqjuE9JyxQRRGt9ZEW6FL1YkdE3",
  "key18": "3f6LiKRwqY6KGPvZd1sE9zCQqfQR6mRS1JBaJnhhzigxnj1LTJNpX2jGKjgVp7va4CJS9vSYkKm5yFGL6MpsgkW2",
  "key19": "4s5JsdHhMShhcSDvY13t2hpwoQF7Rmxf15V3iaNX6rvcypbHKSKx5amr3ic84E2uLTYqhKNJgis46kfFwVa2fVU3",
  "key20": "4vGxeX3YvX3jj1Gczmn5LevadniYZJyc5QUCWYGijGWoBXfv9naRwwfCoJaejMaG9cbgQC1ccLASuGGJgCeaysuQ",
  "key21": "5rBLmamqetmb388FHSQN5tqcXxfqAF7ME27EgcYd4tmzN4hmN3xG68mEZcJix43PjZFyQgmfDwXPPKBbjbrhAk6G",
  "key22": "4TF9sdqxdrwyotboziTQRxRMAP6Bjgf1VYioeBWTt6SYiXVCjvGvj61EssY28BeRTfTSbPY5xyA1PyvjZUB1zzSf",
  "key23": "41sfNiPAsDw6GEvcefcaup4Spdh2eGiKnD7cGwaMWLYMjM2sjVcT6eTEMz4RN99vW4eWxysXsvJXLrrMGRnGTpDe",
  "key24": "D1Fu5ghehtbnT1ktZib4XZigf3dfxWQBqzpXeFZThtHUqQW2fB488NQ1Xwk1buM59xZ2FBxh32Woqz4wRRe125S",
  "key25": "2dRXS38fFB62iuP28bV5M8Vnr1Ev1BozxqBvaEFNbP1oPZZrtdhkRfTvo6DmxQL3rE31jgjAMJDB2CDN5kXhWkTJ"
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
