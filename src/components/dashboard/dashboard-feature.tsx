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
    "4k3oB2GTNsxqhqPtSp2T18gyL4BhvqZqWgmpq1c9zeGvCsm47AThdVzjTzwBiod4YmFpBSet94aDfMTc578PpeW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qWnmBsq9ZvJeFbcKTgEJXYXQ5haxFCMyjB81of7ZDQCqM2LkCn5HEgotwbRq2tsvXzA9BmjGqWjA8exxeCKQGq",
  "key1": "2jxNS98xFQrxZi9PTj7VTf65frr9jUrm6Pxefbdh54NCGygxUZKrz3cn2JtgYhoowaFjrkMuV1oF4gZV7QHt5r8a",
  "key2": "3wcfcByK4UahuZ5oqbntmaBNANdDC7yvjqpmVQ7tn1K44NdCd23Qssen2aMP22a3XToXGo4evGvmL8sVE4BXzeiB",
  "key3": "5i3kkVP1guNS4oCx6mUUuiJsFf8cA5eNrzFMqwApyMstwyZREBK4y989d8osWXxCR4HFcLB8R8qvxzPX8cRDSchi",
  "key4": "61iiLbjq2a4LGkxYbxrxkqVC8oEa1Eq1HjAbNW8F3Z5wCKbN3sqmaJmmrHhZ7i9TkFKSQr5KuP3qYXtwaPZDXJwJ",
  "key5": "5uTuwdNBJoGB4DbJp58XGbPnbLsEkzQaE54Egpq7JM1XnZHgF7tpdkWoDqjq2eWHJZd1gVyu4zyHCyNbYzxEdv7c",
  "key6": "3oiGhW1hrXEXBoz2VeergGczWgRX8mbd71qrVqk1phWcnAtof1qpw9sp7QbrZCJopD2akE7g8CQ6x5V3PE5fxrCZ",
  "key7": "2uyx3EfGNbs26zcUUKDrH57a7jFZZkqqRtRVCDJayrE2g7N31EXkksYRC4v2NEhfopkeh3PPMFByFyjZunxEJmrU",
  "key8": "5QmmB8coza1rJH5LZeJ7TQiH3pR8RXGyZBmqBXBkBRcgdmhXD4HDfvKyyXT849NSTJNX9RqjUM9wjWUCZb57SJ6R",
  "key9": "3JKgGbZXx2U9gR215BgsuNq9hZJXVH7MyiJjLhFw9GzdzkgieDZsN1zBrWZfoKoRsCTiyKAQcvNw4yjRrPqmmx2e",
  "key10": "4TqoZNJEZPPMZK1E1ypDagpoAR2RhSsA1ySfFQyaYTG26dvXodUfNkk51uDsqehFNuXLuyPpocFnxp4DwA5R9hxE",
  "key11": "3BZQSHbzXCsdTDA37eVptA9EzLNqzQFzJWARLvCffyWrcCM24uwDqZo4KCNzeowZGnwiotpFdcKcdguTMikTTcX2",
  "key12": "651u5k8UPDi4CQ4Roe6eVM2XJYq32Fq6yu9Mqk6e4XpLPbrKrHnPfz7TvFvE8YhrrTfKj2xiYvprLaZtHxypGini",
  "key13": "47YR6bYKCSRN1DpYq2JhfCzC3SBYssCSPrebPWnMigBN4DPeo2PmQKLrNA2GAckXaPYH6aeYH5ciEi4hi4S83aaE",
  "key14": "GHNJ5sF7fiZxHLZLZQaLiFQWMZGShdRUiqCk3munF4S2UdxnRwJscQ3SjQzxFtwuSaWXJGekT8wR2gEayiVuVEH",
  "key15": "2Jaz2LYBF6KkXTnjC9sejZ5mbqCn7PNLpYiAaqvyBnq3zrGJmv8fH5e2VBCRRKuGe2uKi5no1ht1QKsXjHqXHZ23",
  "key16": "21R8pwmWxNCBQiBwNTmrKR6E89A29nyHigSKzFaLe2fmRGaStKpkdUyhxJqghofDBEMhcYVuahpiUTdrPFpmKTJd",
  "key17": "3gXA2ux5JR2aWysHGe1nhxX1p2oRx7WvLDrSLSf4hR3ADThRn2NAmaNa8ZzW8Yjmqx9vBi2jnroUvHcbiV7PELgg",
  "key18": "3SJWoNTrHb3doSjQVpaVXtQVtcE5oM6dNDQ9xG6peLmqiWeyw2fKkoyXXTnKtWN6NXRreh1kh3xCiLygULjobFge",
  "key19": "2ZFJPqfrEiAGV2segXysbHi93KCxQoDs7js36fyb7Zr7etdWnrSE1ftEZ3nBQBcYHSriptGqKHm137Nk9sDmph4P",
  "key20": "49nEeZohcY1nPpMfzkF6aQxGCKiF3UA1tCSigbRN5w67SvktDDNV3R9DhwDDhdLwnZnbAqSHB2B2gP6mLsRJpStU",
  "key21": "3SA55y5fdNtuXPccqE2TomFuRa5ZKkYuEeqYuH9yJK95GXcLDsUvNzqbeDkYPb28ghXTEL3HyQXKkGab3yfKZQ8j",
  "key22": "fgbdDdzACiUbSosv8tmtT2TDhRVMmLeaeGcuREConcmXF5Wu2pBR1LKjPdWgv7wowyevgAQ64dUPkxF2qB3sGVZ",
  "key23": "5yCuFhb3vVdP7RjQN1WqH1NAXchuX3iGdSZkXobqDR5cKgSfs72sHft6172NFC7wQ96mqp9R67gpgWoLf7NAH5qF",
  "key24": "5X8VZXtW1n5qXNJyiKY6LpSpnvgkuAGFDhwWuCcUiv9KfDa1roJVamJtMZ4WaAr8EXwPUDCgE9pGsK7exw68EgTn",
  "key25": "2ZgtVXGdiucv45n9fGF2e6tmZ4Zn1MtR7GrXo9faeiKr9iK8hpo23JKGVtrfMLZDU9vTw6WwAhTTDy9RxpFpRQxv",
  "key26": "51vxBLDwZhF1nky9rGrpb1298Zd5myjncB9injEeE6GgyguAtYycN9nmmXj4Kzemdyy4d1Vq1Qa5xYeast5evQCN",
  "key27": "4tuqsc1yD5HQzeinmoWfBvzskd59xqiwCDPAncYyuLAmQcApY77aS7YvzgMecKG3FEdvPU29w4azxJJMNK41mT4T",
  "key28": "2Ysy7jaDmKdjpEssEGAy9wmfd9ffnyfn1SrMu1ZgV7GMN7KFcz9o7TPEikbQPgYGnNTQyXJx77JkzmVUyVuVnmM",
  "key29": "3rhoQaSWFcHJHxi8ZQeu96Vqz5qT5gwaRkUaFoiU8AyhzoL1ttehmATij79jUHPActpE8QoHs9bdSbqUwW6t4B9g",
  "key30": "5xZmdAoJiX1NY3EW1K1SvNXvkoCQ7KeVjoHdXPvyiPCY68hRcpUTiWmNkanamt7pwsXU8i1WjM4ac1JJ28me4mtg",
  "key31": "3NtVASQZ9rkDVwm8JUGFXamrtzv9tdbDD5buhBbxXoVFsZXWhjaVugT11ESKgxVCdeKNNnFFkEa3yiiyNDfoDh3z",
  "key32": "4pk7Vuv7YWAdPeEmTvX4c1rr468Z2U8A7LDceLscixUdfAz5iY2oCD292qo9xCTHp42nUHF7uwkLSjmrtG2VZb3B"
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
