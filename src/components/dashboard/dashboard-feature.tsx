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
    "3otoMTf4Go4R65mzeeSkuJWSkK5Ku3vnUA637Ja88Jfxt48JrV5y4uLhQQ52Gr6dWMtYpN8v1N2QRDKMbdjgM959"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5Vs7hrSUPk9MCVUQSuY6pLGNx1auFEraHoNeCyEQpMxWDHd9Ct2AnZ9U5Z9XuDYzY6J5Yq1eGF9nKnuJQfDkJH",
  "key1": "46BbUDoMApAYVaWfEESF82p5cHm5GWczwc2Qm1f3rwmrU6awQo92WSXiPQPadmctF8PmdwZAUEsKyCgVdDUh1Hv",
  "key2": "45UUk1KNH6xJh6tZcnjFwjXuMMj1AyGsBUfeZoKzEgU5NXFhrqqQJBzij65HruiQnpN5eo5M4YUiu6fubzxRe4iY",
  "key3": "3fy6DqejREia7N2kDDS6tAFpgp5fetMa5xsXzXNQaPVPdczqs7eduRQynbymeXM7dxaAuRfxopuUC5jXMrvGeQKv",
  "key4": "S6vGn2xWCyW9NiGryMHWUX4EHhJs2of6eAoMrcnXUxYjZjeHs8KhZPpAfSPGju1TuH3Zd8zcDrLXpasJSEDWmDB",
  "key5": "5ri4t1NvUSmkZ3vujnLeobZ1zwhZhzvqgYPg6AQMpnGn4XAp8cNg59avW4RpLSQTi89o37aQNj6ZcdWdr1bU41ML",
  "key6": "519hK8aQYYKfG7fCpT1jBdenGtk71RWWPVLTXPaEq5UywFSZv49wSQrbL6fyPvjqjUDQTcEv6WcfJyt9G51EefbJ",
  "key7": "hUjc8CxBJbEC6cUnRwcaz5qUMtvKkmwxJxeB784R25fK1SMvTyixWjii1r7xUnCpjkTt3Hx4gBnXb2Z5ZkhQTsr",
  "key8": "3jpTkCcUAtJP2oYGpmxsU8nfJttmLJZmCzS9vxURYAhRxdc3rpaFABhhAQWH5Xmycjcwgnp9Edh8actMcxLAAS3N",
  "key9": "3nv5a8CaKyMoeYimaUXkmAFgWFqntzh6hY1CdNrNQdBverGz7R2dyTFc1QLEesHsPUMZiJ5Y54Co4fcnWLn2qrKz",
  "key10": "46bCVXJzBY2u9t8vs5EqmwGRz6W3RLnnTYQyyw9daBafd16mFzZB4vwzPSK4Qs2BmQXXaWoKH2u2brTsjMKstMxE",
  "key11": "4L8ce8uQz7YNMKtQgUBQDbKEXR7Gq3k9Re2ncWQZKVaNMBMXhXHpNzPJSNB7CgFMEfAkucXqcUfFhDW8wAgrECdo",
  "key12": "3Lx67ohgafBuNSEpcdEbR3Pb5iARYdLsg7T8hxZonVwM7K8SEnVBCpRUwjSLgSkGurZpChoq4Q3ksv9wxWzhH1ps",
  "key13": "3DJLR7keaLFYqK2jcP1Mdi45EdesHfB5pAPaQtK5xdHTw5XVdwfPFZnr8Shh7yYETXqtt1NHHtRirQHo8ttLB1Te",
  "key14": "bfLgFZ76Bdsp8Eai76t4V3ziruro8fHJc7eFwn2oekE4HaP6Ls3pwFNbsnVz3HpMCKgtgrE8UpwYsUcAc1X6RXi",
  "key15": "2hAhkJVYUTN5yWBZfcLzS9rNrrh9YekBHaWEM7zvcZtWhxtMYbVHJgZ7zjcNVtbzD2RFYa3SuarJdgigwYhwbHyW",
  "key16": "fevYZLgTPjtmUKtWU6ZRrDdCfBJFTtoFbuDn1EjHvFLQEfm8X5seagJZPk4ysNbESyswwBXEpNc2Yf1sQXFVZJK",
  "key17": "5ZD5XubqmK48jesnLAUUbyUdad5o4Pea8EmcAyiUp29jhGQh6GDqK7mof1Ang551A65UJiWrCBWQwwMWD8VxH6UD",
  "key18": "5rJf6ZWnUQiACmztv8Pxqt58XR2b1d3MuZNJU24qf8cH2jyBWWeMuz7RoMkdRQBscMDScSGT5jKrF22dJN14K4qd",
  "key19": "5wWx1MGKcgPdMSWPDeUYduuqkwtHv67MSGPb3kyPW24obfvHW7UM4L3QjMUZEV2uDUtQQ1DW8YUKSoHDe9Mqu8Sy",
  "key20": "QxwiMV1HbkTYs36VVHSUCj8KEcCeQwRxcNNbeQPP6EYgULMAEtjmNRFwx3QSWZFdxtXUDVkA8qEtPTZePLU8Hd3",
  "key21": "5Y5wv5rBftLyxfaoERvVFPUXBhsSgxxV6ASCh9qkCBiiuPmG57NwYbyB4VkVHxVfFXEm1guzxbuQZKQpyzuhC9EA",
  "key22": "67pXaRMByX7WW1ih9dx9jh768F6SZX2wEKsK5RrriKcVxzvnwuXqtNTTpdV79o1SSBfE6cJ5gGxVvHXZyPFGThD2",
  "key23": "47CFHRUG7EaaR4aicqpNWpqak9xEENGXhQ3qusRxxt2TYWn44Zcg47ofkwtgvDQX2D3u3TtD2zjYfMajU3ayq6RP",
  "key24": "353cq9C68Fgf4JvidgR3rrLgyXYnWBnM2BMaVR9hZjCgCfLRT49tPdDV5KiFHXN5bRh8uYu42gjkww12WuHvxN76",
  "key25": "2TvH125hCXrww6dV9uc9xgNz6F5iKaB7VY3cF3qeQWaVwKfNB73jd54bEtU3RTctGwziNUgHcCr7r6S4pcrwRDVB",
  "key26": "3r19estwaf4QFcVJnacj6Jd956prqwuSz5DdBufQnHHmtsXpbEkn9LmoTLimCMNvkbFNTM3BWaA8qJ9sWpPSmZ8k"
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
