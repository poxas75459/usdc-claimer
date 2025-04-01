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
    "5oEhNLKMFESTM5HZcqXKPcSHR74P44atCrCTbocVwe942Mz4xzyPUAuJ3uGBJyemuuqKGhvERMvgPSPSdsi8n81L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXVNRJj38Zva2ssgsRUUVUA9awSbbs5tm2TvM893otJ4JM1vcS9dLWRa3PfoySghwSfgeKJsxvbaqAw3RaxHgcY",
  "key1": "2LsB5HCoMo8TeS6djHXnjBZFdpxBMNrg8Q3AFm2T57nLe5B6U5DRQyD6ovWz7gWaPmmHaVYXa89HUafPtww4B38S",
  "key2": "66vAXc3pfNgExiUreqJRPdN217NqMiMva4XXp3zWNg5YRmC5R2qnBVv4915J5srwJM47MUJRLWzKuWLtURDhgunE",
  "key3": "4k1KkSixdnQiBHRvXZXpiQrpnB2XLuK4eg4D8xwVYSrwrhoGNYMtnrxMF3SGNEDG64tH2XmSeBG5fZVzXoTqRg3T",
  "key4": "45za7jGxXkap3e6aTkD2sJGTi2t9gX2aBaU1F41oc7sraTTD9zvGQCSWV19sCR1fLNFRAZudpwZMnTH1FXzzRnV2",
  "key5": "2bhV7g42Wn9FGFiqTGCMZZiCQ8yHcRxGUKrHfRCfQCFLzUPFcH4GFZ3SHDuZpKPb9DgL7tCQWNyFLiDDowKNpTjK",
  "key6": "3cNQkWNx9R36M2G9cc1KU4CywwScc7Rxn46cRj5tXqhaygCujE75jufBVSPLQ13Esj5Y68yKjYhp95qVDYmBmTxW",
  "key7": "5wS3QZZTHfPu1XdMwmERFv1Yq4x4f9ChXCKoB1nUVAdrnU5uY6cEV2oqnT3yVeDxhw3997GUgg4F3h5F5TrMoyBo",
  "key8": "FDb6svimE5WG2PybRNEMvGvfADxkSuxQQEnCnRCZhgUyrv5TpQJxv6qRPdFJ5kD7RohCqobgmG2eFxMNebkqoQA",
  "key9": "39R7bvYwbVjQiSq4PBNedENBTJyaCFUEzig1sr8bmx3VncVsBdCVztgt3dLnTGLYrNDcz3B82Y4UURqzfm9nf7kx",
  "key10": "4Ps4fy2W6FwEmZyQ9g4ijXf4hU7t4E8gwaWS1WjX4VQSWAdHu83sGihjZy1SGzsUJbVCDsT2THzAmxzLrzoZFohN",
  "key11": "3Ng2CnpBqJKczri65e7tcmUsPE7tm89e3vpZ9awfPhDw1Fdp8Cx4q7LLCED1CBjigzJLe6wuMYFqq8BcW1EvUMhR",
  "key12": "4zSW6nP3FwDdPNpyE8WKUYxb9L8uXqXtQAMFZKmE1rC66r5DgYpc6sP2LA8N9wRh79DGRg2YHccJqPszCvNMjN9e",
  "key13": "YpA5vP7qbY3CE8UwryAcM7upcwtbNXgYhrULT7HjZ32LiQYBionincKWMQ7RWWppEEGWS2YopioS8SK8GdMSubH",
  "key14": "5etikG5k5Z9FLABgUACSLKxcUWZY8AYmVCr8VSJbCDa9k5hT24UefAkwrLk3nwUuwVuJdVNkpPrAN33UCmFWfkMG",
  "key15": "2ZwiNzgs1Jh7m7MTEha699kvj6f46YHPFwQsqUzVC73Tc8MXFrJaKS8KPaadnteacVgYdHvBKNNWWk1moG9RsjQQ",
  "key16": "3eJGmLcqouAnJ1rag1UiZmAC8e3hTm9a6MNQLYHB5KRYh7NATiB6yd3Sdbuipv4DwaDxVRjeyhrs9ye2REZKzFo7",
  "key17": "4kJ8phrGT9zjPdv5LujV4U7TJrJKzkzkYhB1kqDNeL9WFvRrKcs2aVmphEEwWuMcod6jfXSJcMGWdhNSzAt9RnGi",
  "key18": "4Q5wNWwVfvuDz3nFV2xWfWhCxXLgADHbU1jtNXY4B4mxDCSzhBfYhHBCuWp2xx8EK3pNoFUWk9nBdm7PdZc2EjnH",
  "key19": "2HM5GuBy2unHrLnzZ2xS7zvwQZgqtqQvjxYk4Zf7fCSzDG9uE7jj5RgkkLPue2t8jDa5T5RRsndHCv8bNRnECkw5",
  "key20": "4ZqU1mB7jJJjWb3XUCZUQSQTFXUmusvzCAY1GZY6bYmswPEmNj5jB4UGD4U6CDBxfJZuBRY4xqg29iUv1JJ8gS5m",
  "key21": "3G2T9Z63pZTaafMeW2htUrPXfYwUPZ33Awh5KdvdjJrMMrSLmJMmKUJSqdgp7D8mK3v86L3FFPG3K3CdFNxBdcH3",
  "key22": "5syY5uSAepRnKpJb3sUggJ8A4fAjgS93gqYJRszCagXF7HwEEUvvcECZJhpJqPZx1boMeJuzKf7dYr4Ayx79TbMB",
  "key23": "qEVXTo9dDeLESQat2ff1326zqoGHNTPq5VuSbUE1XPAsEYXVoGJjwVLXdJR2ZKpzKpZXm2sKQdfzRmmvVsvo6W9",
  "key24": "5drS1kphqgq6gNoZ5AbexuifyEBwsskdN45ieukPBUQEVseKuoGj5titS85HhsnBjfvgSykfwXfqLh1HL1UztJ5E",
  "key25": "36zorP6SWfBKVgWB9gwDn153BFgjH9KEEwQE75KZLdfXHXGr4HE3HytDgc6V9BU3u47CSeHmzgysfL6i3mb36BiW",
  "key26": "3FUtZ3RqBVt9E28R1xqNDqXXJHP64LeF5ugYXEUsTEhxvyxkKoPXG6MABENSrG7BiU6NtsxRboFX4tXFqo6JVNkB",
  "key27": "TK1nmYkMgZfZSYQhvNbMcrbZva8292Yg8U3JS4mP72x4HgzYma1qGX6dqSjwTbm7WMuooRKZ18nYxFxdXgdmtus",
  "key28": "3QefGr6PxWkbCdhPMjHCEoe9SPGjt2Zkz13dHpxmV12aVpq8skvwJMmBzETzSGwn8H1x1pdM7TWBHKRGm1CzbwHt",
  "key29": "2WRKcU6s9dVQTQmDqrezNuP3msMr1oeAoaNhnWjWjbzea3vV4PvMbKEdg8DG4uKaRbbVvhBYTUYaNe8bgoF7hQok",
  "key30": "2Ezzh19DZxe1XYGqbM4j8k8vVgTKtQGYZFHQrmVr6b8iDZ8HwHkLmmtyQym3BwfzSZwi5CRX1M4QCoxBqVB5PWeL",
  "key31": "5F9MFuS8BdNWawEGF3DbCmJraQ3osbc9LVMvc6Vs3m1mPurqvKAXNy4yJY3eyU5kCaaojxoCwwBFvRbL8WPrE3jb"
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
