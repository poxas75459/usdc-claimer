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
    "fgakUcThLEHWDrCtrafksuMrsWbT68tASytf8riBkzRMXciog56q4uxbt29LC5qzfqvr7bDNPTE1QeLctNB9CRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PSWnwTZJxAcQxdboDsEhr2Mb7AzejiyyUPQPfCVLtTq3GTTvkhPSV4R9KJNUgvCbfi1tDPx1dBw5aXz9Ubx6vcQ",
  "key1": "5cgfWfLPrTg75ZR6Vxu7tieruefnp25tq1DoWK5iQJ8ih4H5uBftsf9oiaauWu9Wy2TQnBATuwMekWhZhrfC7TJN",
  "key2": "2HjoeVAA84dwzF1wokChNZuzppcdJZHVHUfRuZcKJa6qtbReyztMdunvBoANfPJ1qNACS2eK6afkjWHCHPpvEGBg",
  "key3": "3wcJyGi4Ujztb4ocWEyubp9s2whL9UskGw3ExjzUD2mvuxr2APGCfXeL5CzwJvxXbUzLgp9QwyHdpFt11JukmWt9",
  "key4": "EPuYDtAe1TJzVJv9eiKo5VutCc6oq6mXNKHpuWQc9M2QwdqAyMwa1uAnc5CPWL6EQBHUv1qyyU29MiZE2KURWNh",
  "key5": "4mHhcqYQHNWdApQycWRx3H2seaDzN8LXxAN7iLZyV5ALz1vE8pJNZPV3SjgBExUAbDb7KcCVL73qA2zTiX4NMJzD",
  "key6": "49u7LA15G8EAKbXtDp3kf1FWdVfxfUQcpMheeFc6TQnWiS9Q45WnyrHdWwsjsbACzaaST11jpMKhnBnqZH3rvmGB",
  "key7": "3JMppaCP4f3qhrcynZQ2t3DVXXXCDD9Dzemei1bdc6b7wHpKiLPXLk9W1hyHDa3wSptgtZ7adrf1ZwEC9Ene2HSp",
  "key8": "5PiFb5gk8KRn4nSDUxsS2N5mXDWX9D52mJA4coJMN2XmnVcxdem6LdxsKYydhi33TxiGCv9CMFgmhCNHayeAJty8",
  "key9": "2PC1REEGYuCbLXNVnLYqYdqBEeApissf34BzuGN9Y2PG49JeuaWodoGaXAboUV6KQx81SwuTdqt3Lk3UpSa2Qg1",
  "key10": "2WfhDTmaZL5BDsHWGEVhGXVm2CpTREVCkD5gEoNZ4Vwnh1CVYjoWva7DLcD8CvUqts3hQm9yLzi3YRxe2qAYu7SV",
  "key11": "58nqZboXYa89Mb8a4fGDGZsue7AU9bPK5nocN47yB9wQfLKWKghZkARyHgb7yLoaYzZ5ERQtT5p1SFW8ipDrS59U",
  "key12": "TSupSvCEXHMaLHYt8CQMB77ZctuRUkqePtSMnGmz11sp3LTyGyQpksPrbG264o8kShxcpBAFDPMtuFWmEXDYHLW",
  "key13": "45wDm8cQ1ZoEHqKSCSKgNMCyqwgiLCG5hmgBxQkrABcQykVGJdEKKP1Mo9KZQZ8yV8KzYJrsHMYvs3rxEvpnTyWs",
  "key14": "5kTyfykmxdQ1699e9ua9mxXzR69KJvET17uX9MuE8Crutxzf83EsHY9Lhj9w8LRDvRMNnt2EEkskJF5WfSGmXdEg",
  "key15": "292bMa8a7YfPmXoFF4FCNev4MnaRYSm7xnDd7zUMx6zvFkAhMKrPcGrA53nHLDTyc43tycWsK6pEcgTT37yRNDJg",
  "key16": "3nUroq9vz5f6UucFEE3eC7YdT9G7FPG4QPZjFTqAGxrCLjMXvFkkWgWK9yURNCDimBgqBLS9RkVir9fcApgXYAC5",
  "key17": "juRWHUNpkuxkphBgmJU8HgH9bqPeq5WWqfnfsuRDGm1whz6Q6PmBg7vE79SdYiiWbiJHRDoxsdW4xVZuuW99uZA",
  "key18": "4hUiLVK7gTyM9R5KE7LfB33NSs8mZ6949Lvhv4jnBYKVLYoVicnwjcG2CRLZYBkSaHEr2rv9fPStbMCS7T69fAgq",
  "key19": "5CkqSu7SrDuwEyTfabHnjU4DP2MY9XKCoXTDH92PBvbA7mvZw1nErFVSkDm6Q2fHsCMMjKiGeKvvx6qjTrahWpRG",
  "key20": "JSu88mmNwVA2fCfjqy2AkVbJSQxQKydN3Qr4DHztstNHMtetQw8YrqXq78F2pDiHt5KTiYYTW4tVhpcxF9Db6ZN",
  "key21": "3wcC8TRE3THneCaNLss9qUda1waqXnqwHAUUtNR3mnfqrTcMCYx4D2XswMFuY3HwxvKGqxQqDpEUb9MQPNKkGMF4",
  "key22": "3MbpS5unjjtpUb1JeY79kQfcuNsSSe8cKEUdU8uMrXreHJBFS31iLwVYHUoA7mgRnaoQthExgYw8Fqw3p9kGFXFE",
  "key23": "4aoD51sXM4XxoEGRD7WVgNXigBM7VqLhjMMrqYsKMhLP2gRVcctLFRQRj5TKfWx8PYo994KSjo7BkQwLHD9wsfoF",
  "key24": "3QDx1LvnheV5o1vEScwe4swSNZ9jGYqjwhY3dvwKeEtT8Ws3gU8r7w6xnnS9vEFdtsFUtGeg8jkuK2DhUu1AjGmx",
  "key25": "3ow9NPWXRR2miqzcKzn54izYRbrWdUdDFXikgftvBTMTjkjd5oHqhBHXAW8UuBUQH9VaGKqPBeophPWgQ3Puveiv",
  "key26": "2yDwDs8NuC8j2khx66LYd1pjTP9rYKq5sEXV74QwCp3vAxQSmMozffrVKiSSLtRmHuDUvrKdpLMmCsRQSfuaSkhq",
  "key27": "3mwqcyGJgZrfVyPkH15D3Tp7qDQDgkFi2trLjfLfbUm9g54dMjtE44wEVCSd89PdwYPjLBTvwatWBtrNPsHvATfk",
  "key28": "4tgvR5guHWa3uzXz8Xj7hbe5bik3nXWPGov4TNZpPbNTmSFp8GiwjQTT7yfyRPsX3Xa33tZhSwUxKrmsKfTsVAPR",
  "key29": "5Ji9JkutbhJjJfiGVuFs1SQwVnncuSSJx4CjYefDuUfhHXnthLLQ3AJzfkPsH1Eew5gNTocWsQDonwZfKZ2eNbeP"
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
