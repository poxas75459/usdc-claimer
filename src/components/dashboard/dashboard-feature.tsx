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
    "5YMpsPNGzg6uS3Htu9S8pToPGk197G7opoei9a8YC4fMAAStgZUcfLrARofumiix3fWJYxXrvKoUYxPgWCChM3Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6tA624zrJqhNMEWczBL4Gejes5pMYKjo1hN9eciC252SvKLBh8wDnFbvNUiSqNp3yjcLmrzaWgRZt7ZNwbrdLS",
  "key1": "3cJr8BK9CoFFzmLxhPsJ7kwyNF6D6fHYTUPpes6cYwMfvrY4wk4UcNqTGpSaT1ZVLoKSRsJNkJvoK4wgp2CmCum2",
  "key2": "dGxSkSjQX4von8JBnQFmvP79jm5DG7nGaFLgd42XjHpNKAa5A1A2hRV2RkLnyRNSxddqwPdoxv69CJTdM1Q6yzk",
  "key3": "38dNFEEJjdzzBW5WepXgTuhx7zxdLP7iEaHsZm6utTRUXjXU5BTy7ti88b8b1pTbo728gZTcVi9C8P6jsSuaFHah",
  "key4": "46vrMEvWT61vN7B8Eoo4DbXiGYko1H2Q4tpEV16o5vP75Azn9dkz4VYgGCUDgwGvYRAF7CGYWx9giAVt92EcVcoh",
  "key5": "LJHPP1kZxzapk555kiA32yveQbqbniwW29abSkRDjiUsfDvJ8PmwsCDAvxPfcC8TQThHvQhgrZVsDmnoB98xDuM",
  "key6": "f3CB91hSoFecfHf2Jmgf2hPqZ7a6Q97sDKXap4jDLoEGbXJThCoMgZJuHqDv8v3DHCs7nGkcZHGCyZFmVuRuMWA",
  "key7": "2P7GA2zjdxYCbZ279N33qCbEVwfCHTdEUWdSm9A2bfZXpS3UtikWf2wk5t4QACrQD1dapMu2vq7sevaapZGDmeUJ",
  "key8": "2sQCDhcy3bh8frnRSz7YfymBRtg1oueyoMy2pjXoJXaXnamuRuEeJeHkJ3Vr7TiHHtHmtjsWhjwk7MKCG9X4c2gF",
  "key9": "2VeqteBRSeY6n1JA8XB7GHAtBMNarvT5fLYbauzwKY8b8mjJBTYxZyGE5p16Fp1evDNzoBbqwz7QW1jpTo31mFrC",
  "key10": "5MkVgEXzd2g3GHXwjeq5okQRQnrXXpvRtJHBpp6aZFQjiAbxZKoFoyxEDFXFPp3JDwu7wPavHs294HuyQBbVuCEk",
  "key11": "nCCxXJ8vHFGmhwqvavdsqBqDELppyB7YyVKsqJ8zJzz5kX1sdFzRyvv977mUKhbvgqn4CvESfsGP1e8C1nZDmsU",
  "key12": "5WBZXohPHpAtKwH4d3HT2o12W4XuiakQrzmRWpm6htrMiePpjcyvMpa895PdV5XpYSrWQy6pHgquTd5NVitjWPzY",
  "key13": "xKxhXKHcvkYaziNvZNGRVNmk3GX8L1M4npx6Q4BTtHixX9rx99449icKJ4ykdKkZXLVszM2FSytcAMQYrzYZFU4",
  "key14": "2wUEhYrJzmWSyZsPZ4SWdBGvMo63oknRMCfhamq3RTi8nQxUgc4w6UqMJ9VTGDyWK8w8rNNMgJrRKjdHEKP3VQow",
  "key15": "3zruQyoDvTFugqP7yRGhTAScLkeSxHyZ7sqxH5MY2fjBEdkww4d7QoNYedWfwvw1wUjZiQKoJmooG1LdDi9CXf3i",
  "key16": "5DZwweVCZGNA1hSXazEhjD6ZzST54yJnGpqMRYZRztSL1pcDuDnpBfFUvv3HzmDV21rpdcK1aE8HMwzoAxmoaZN3",
  "key17": "js1LTRFhj5pgqTRRCZ9as6UCQZLqEEnfQ1M1rqyG3qeQZGEaRpRL7NjiFVhXbtxVSZubQpMjxPuFFmmfdrXg5Az",
  "key18": "kuEwPMm2VNQHdNZehYYUJ2DMTV1cT1bZiQN9UakaJ16zoZVW1QVAPUZ4c8FCMemZ5AeyEE8XD81fm4K5wt4zK9D",
  "key19": "5bkNgYsz8b23pkBKCFjYSCJ1aMVtXDZT7d9MjzD1WqBuFDSCTP46wtSB9xnDtfADaZEUqAMzZLjm7XYPsi4Lgttu",
  "key20": "5eoBVsCMpwKpon2xDrAXExMGyETJLZKPQvD932H31RVDNfndHPyWf9vAK4fD6W7cVe5S1VYJPk7uF16HHFdyMhBA",
  "key21": "4rkPHzpvB6BTrqZihovzLDWrGKfvN6YJ3p7kgFa8uAh5X5313AWxaEMpB1JNi3XVLxjfiARam66thQZcTFcaZFQL",
  "key22": "5cVHAxHbEL1yHWVphWPorKQDFgJijdcrbRAx4L6wTVpXdrYCHce1g3py2T9wP9AAvSdyS3ZK7AVRVnzujjzCVWfg",
  "key23": "2rZkaiYdi1PjuA6tYo2oyHsPPbT23YnjQmfSvtGU5iyEPPBdt9iVwyiiv5qDaVXs5XNJocieWyVSbLHHmdMaSyuA",
  "key24": "3XcBtm7xr4WooddK1zdDWwZV1LuegbrtnkNgmePN75CTN9fDPgAmCDhHabxFnJuQCLZVUnFK1orNqDGVwK4cYHG8",
  "key25": "6dPsqciEuytTwwBbhtbWbMLtpRAKiMS3Mwt87Sw6CBTRCqJdMV3F7zcQF7tXbtJ1DVvK3ersLruMQV5GXeCTQNw"
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
