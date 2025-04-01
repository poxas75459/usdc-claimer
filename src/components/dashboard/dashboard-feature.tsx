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
    "4ye5dLAhBqqLXCEK1nyauwLUXcH4G2qC4c2XvWftuavr6Q9LdKtDf2KU7opNydFufHnQeg5xjmJ2kcPw7XxX5MP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XAPc8wwP5F2KeTSpDdPWxsTQcd2bYQaSNLFT2wg9uCz4qmE2PTCfVbFQwrs6RWCEwbCfrEUsAFisukUnTekifvz",
  "key1": "58AmPUdiYLYKT5jLVbUQG3kr9h3FakSiyikkqMnBjaBXHtzGwfqNzrUfQJyTxnYYfq8ZALUStHBADYVuAWVkQREH",
  "key2": "3HJELH5qfqKjPV5vRb1Uu83FRqGdySLaQKgyhvXR3iM5j5PvnkMMVvBHzeBLSccon5tidLdB12pY33URHm2Lwy8b",
  "key3": "4nyq2GqLcWV8Sx3XXV1LupWXwd9BrWneXFiew4m7qqYWCSLj46wXoLbJasJCV29T99rn9fhNvJvpiSYhGjzXhWPo",
  "key4": "2kf4Lx8q9AtSrQbqhasCvz2SnAJmw6bwbT2ekKsvSrFL3tSPz4acBeu1iNZW3VrtRxMf2W3qiBFJbAtyrfLKjKu5",
  "key5": "4GL41BmreSDzLsVyLB37zXWUK1FvYk8XQXZutyd1khrWbnZn72bUL5A8ZM9WvV8dveVGobNyFvEVG7gqKsvZQZKn",
  "key6": "CPEPz3f2TPWwer6RjaUfkbujSJwJJUyyCoWTRrPxHaVAooTapL8vjncHeqhEPbH2e7oGGB7trUyJ9cxvbFh6HiK",
  "key7": "2Voyg5B2KMRdWU867o31NRettorMEA5onZTpim2ciptBNLyfMq1dtk1zJupDJg9T79ZrhaBd7iwwqwJ4VSkBQWsg",
  "key8": "53zE6AMzT389yN3StNZKffCbaV4Fz9dFrqqzyBtx3Gbiouf6VMUsGSdczRiN9oJEQtcRvXmtDABAZTLgNrGXJMEe",
  "key9": "28a5q3c6ARErNBmK7P3mmA4ikQKfwLfaSckdrrBJRakoAVuQ42i74KX9FkeaujNCVmzX1EgWXZ5A6KsqVkT24nwa",
  "key10": "3afXF9LeLqzYLMe3HUJ6wDMe3Pa8LjVtdNJEy9oWqRvdeUrN3ysDwBXE87rFpqzn5q1Erx2tAAeYcLJZydugLJNX",
  "key11": "5JKieZkmC5wuurATZr6WLApBNTGEm9tC2nV3siJ4JG6hd6TTJ7ernR4dpcCaKrUAHg8hAuzBeuFPrQERwES5ABD5",
  "key12": "2cKKbiKgpnCQ4P4te4Kx5tQmPzb2kmmQJL4ddKGNPgHnMEVKAsaXxs6kG8PNQuDUyiPfrmwCjvFoUHE2CmVzxhij",
  "key13": "5bXb9UwpcjpT74TSEcVvkgaroUTJ1yv2Yw9BgFDEcgGGngCssUx7e87eqNAPg3BL2sY57wriSoykvrX5ToSXycNd",
  "key14": "RK6p7kimW87JsDNsZtBBeV1MN49m3mBMY7UMF1P8rGx5aWtqSjvmeRRJxgevWbPPjNe2YvrVrn6dZHR2LskG2Jp",
  "key15": "4grPf8Bzx7VdFVfHMWXKxWBQnPkeGVD82vn7kyhWcR7LmdndYxaPsu3HYm1eGuHS8frfrgQkt7XoJ8QtRFioeCot",
  "key16": "37sD9gHkiPXLiJHALu4b7cbEuEzUsaEu7UrfkGERvQLuHM8FgPNtWnWV96MXbtAhdUvCrr1dnARSsUKCPbrHvoiA",
  "key17": "4hhwE7Hc5XnXxwfkESpYAtaDAQn4w3Smz1dkRzD9NNS3EscpPpe8zFJuBuzaER8AdMSDpE56yyLZHPLfio7ARaBZ",
  "key18": "5tDbvecxLwMbyTSF4rSQNB5jyBQczBWz3b4kByM5SHMaFkeDn83dGjZWyxsDnY9Yr3HR1o9mkuYaiPLWTLqbG5z1",
  "key19": "4qpKt181RMXLzZhnJfNjaDXRQPzxEmsxqQe8yEbiAvcKr62BjQF5C9s6xGSwgbQLgTp7Lu5sV4S9ftiiom46r3MQ",
  "key20": "62nb5FAjNLwzwrCfEVy6f7ofVYc23e92xKcCVe3FuF6zWSaCPZKW9bzDoFhyMUUXotGfEfr6HK5H1AZcD1c8VkmX",
  "key21": "5vaGXa7aGj6fmdgjrtwDDX3p7vxhZBFi8aB3HPgmpKQmeaJaDZoQ5QQmcZ6PsyaWZ2AStxhPozM5pL7TWMMAVs2r",
  "key22": "2jHdfZMZfrXPXaDVzcZstvdXv3wg3qzovQkyVqhxcNgtDSW6qkv3Utq7KpMSAoYfgwmvaugVmr8rVa6U9KDUfofS",
  "key23": "4oAH76sA2yah3VDNpB43GZB59iXNAikP43hcFPgik3ACSzkjqReLDRsQ1obdfZGw7y5JefKSYsK1fknFiSj9vRqF",
  "key24": "4oxasxfqUj2KMb5VaGY495XTuspd7P5dkMui3h9mZfGmhNf4JPQT1FUm4xf426fQTPjehiJkpWZqB6qvFMKhnwxU",
  "key25": "2SCv95M5XKUUgTbUZWydKuf9kpx1cJeVVoGt7CBe8EE1q8uqdQkcioB6exvgY5ZeRkJhgzAnAx1ZeKayRZNoPezw",
  "key26": "3h4f1uzYKFgqZKhsgago4nqGKygjuYaVuGnHt7Qz2qBUQZudq5EP6SnLY9cn5Q54g6QSRK9Ze15ARviNSok79z3Y"
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
