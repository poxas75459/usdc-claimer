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
    "ebDSq7Y2MRSfZXXHgU73TdbNiURVSB337aMZFhk2jo3UaiZNDPpKWfp1NZPeY8ySzd2PFAwGB2RuzTnikj19LmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCqG7Jq7DBpZS39Na4wGPVVA7svhqzEu4sHM8UyUTLCDVmd7du6xmGAAujTKp13i7ZrMtoznkYVg2KDWMepRKp1",
  "key1": "4M7aKKeq2A1X3RBk5ZDZuKtpHFj1dj6WLrme18K7PC2AekjTGGVmtMHpk7fDcf8UdCKcsLn98VbfknBvbxPyQtFR",
  "key2": "rDkMSKTGALrbEhSa5BKQgFvW9dS6Lku12TnQcMKbKqtL9VWCssp9Ya3M4wwDsoj2Lujrxwm4g5niS9Z5FG98YxS",
  "key3": "4m4RN8MNoZeD9Dzv4pRyuLopcd7g2nYyQnLY2UuKDofnw23SAwMQ9HYJMUSwxKzSz29inB77xhjJzJZC4UxAsCU5",
  "key4": "3M4dSfUdw2eXNinxTQ3iNu8pGGuP4wMSATem29a3YKqzGpNN1a8SJJs1ef45Z9edmnXQD9cy7fhj7R24h36D36xJ",
  "key5": "329iDnjYWqAeVY1iFeRsy1uhVJjKFUnPfCzbxRZLqBCVYHnprZY5u9GpGdT4mB5v5gcCypcPp47wWVJVuRArUorz",
  "key6": "4DnFMtKXEhtWgM724d7joKh9TARfwS2ZbijjSNzTZtu6sCQhxeuieVLFhwCb5rTZ2Z2yzJ1wXrCKurYJAZaAPAh8",
  "key7": "3WMdVc6ppQhjutbptfD3FpEwjPhhSJCmVzSoU4T6BjtuAwMQ2h1psuesj7VUZb3g7dvpgeTRbq9tWEBgY4LSvB9v",
  "key8": "2ydS3UA7eDbmK23F5RJ57vg6XjoxcGAXkYLkdcY2UtncxWmU2MhBZDZpwqwYEiizh9Djmcq2bhVffSuYDTzxhcAs",
  "key9": "T2Dh1y8UxbyJFaHm8nKJfzU9mkaCJUnWNMV6hsCqEmCm3KMyuWc2Qt5qwDghC2nrPpF6jrVwzavk6VMLb8vRt1z",
  "key10": "31kux6rzRT3Rwk7URZAy81nG188ZmzS4wLJtiP3MGKvrRYEsy7DW7jbCPxhnz76EGKQMekRm8CXEnwuMRjy5KxSL",
  "key11": "ip3hfK1QM61GNKp47EMkJsTwHVPuBHmoHgzacf3qpDx9dEf2xgiGvzupdpE4EYRCdSWtfopSsaBFpPVvzLFoWhr",
  "key12": "3TNv3vNYFbk2ZRwmobFe1aZGT5D5Mk2Ns9VzHBRoKLu27HoBJKvzzVrdhW2repoqGiKDJBKCpuEgPg3j3jToeEXw",
  "key13": "5RdfigfTswHB1i4VZr9P5qT4BqRmNoaovdEFSp8QQCr6zs4Yi71UD2jiWacF9TED7B78HAgrbbPTS5keeLLw6MqX",
  "key14": "3eWVvob3ugPhYZdZpsxvgvkQ6vMmRkzPtKDENciPoJgQLtbJXsGY2N9dmQ7cX8cxPNZaoRvKDAkmGKFRmX4o8ZWH",
  "key15": "4HFHDNnf5Hb31GjDjQ92rmyQP3BDB1zcoibfMNt8FNwaF3sUfautUoT6tJ8j2549J7da6koU5wNki3c17bfZW4h7",
  "key16": "5b99ixKJtRfAkKYwpG5pu2kUq8S3epjpJmDGJjx4gYECcF1a61fGA1CjYsVK7jxQraZZFEEvvf78BvjcLTzAspgp",
  "key17": "pLdnpWsrhkaNUJSdRsexhbVigVs14KMmwmtzWKfM37XNLPmMX99i2zPYt2bSgsk5LVjmxtzpqMdmxLunL2LpAWJ",
  "key18": "67exnR8go55fhEsD98HZ8zT3VXD3VMG7564gnZz9KNLo5E13r6rpBeiL3YuvZsuDuHEaBu1Ad5ZS9WKDoCCAz4Vy",
  "key19": "DGoq1Hdv6pvkusmWsKerzy2tZkqtHzGGJdBxStYXmDGnVdBzFATjG1kbUGR9Swr5ULeXv5Uq9bMK7ofEURGKvkS",
  "key20": "5iEkGjnTLQ47e4S16mPvK7pM1hx12ciC1VzLsR8sT3WFfV4HjDV9LZEHzzJXmspxhVWmEP4QHqh9uk55rZyJt7ND",
  "key21": "287f3Q6V7CE24D8BDvr6K2XcWz6uTtJb7SFu4mwLL43cUZeQsVDmLaz8Wej6dX76Jzm9Ck1WBFp7krWcq8dscovM",
  "key22": "5VNj4Cj9NYhPnsw69ob6ejS881jTFFhLN51ZyNtWBsLjAtJgp62hwBNw9Dzs7FzrBUafxHE9DLArt5X2URaFYqz",
  "key23": "3RmkfEKrHNQFzgBgMg3CRVxvjiYW1Eq1tFR26cMDRhjsCJ3WTDpNY1Ji5nah8jnxJJ3saUg66KtPbJwfQHUhT4Vf",
  "key24": "3s4assJ8oVt3iozZkaUhCTrG5zJrtUegFX8QspQ51hq31EiRUkDJqSwrgRwzaBkWzy4oB3DFq2L5nz8fRwZqXszL",
  "key25": "5KwszG8qXZNeCNdS3eFYaa8NpAfBAdiKHhwBJhpnKSZbHmui7XbEaU9zA8vSLFhEeJQZQKfLkrAou9WibLxDdxeN",
  "key26": "VQBkcDuuAkRLkrmEkPeRoWvzJQYECDUaVjb7kYYMkBdgBZpe2rSqoa34SHUp46qvhGXuJjn6aX5uoRNdf2ZKQAM",
  "key27": "5mLjdZBjEct3MiCWrC9CbnobvtrFV2LgHPbQBm53MXmQa98oApzNvpis9qFLLn8jbUAGXdpiZa4DTUPEqkwh2EB1",
  "key28": "55HtVkraBYBHeDpYnLXQRVUEziXinvP7QNR6xYpSpPGeFE5CPAC6ZCiKxrKccTgfBvUgExpmhp5BxMsGeMzWZeFb",
  "key29": "fwisJMxPSJAR1uQNiZ8DstY2ucwcwT6axsEUR9Z7BX1whZ1mTuGt7ATia8VRNhRQDsA8LE4eyp36z3BMxM7ATYA",
  "key30": "5YnjJ7Hz8ue4XtDDXq9YmbzpAjj3iAx2mCitZf1uhT2kAzscinmBoWhKgEWf7dDAVqHGGLZFpRnqLt69rvECx8iQ",
  "key31": "21LihQpT9danE3ZEjT8R43W7RmVU4SwMU32y4kd3PmpnmiiZ9DNt7RSZ8Wtk2nH8Kdycd7MbRvpfqqjdRAzf3J74",
  "key32": "43j8MUvnDyoANzTn8T8isrM4zdit6rg17PtbhCeLNsgcr84acBgifdDyeYY4CUSAUGukxnVMVgr9ghnVmvJUGAgp",
  "key33": "2coM967bNvU1w1Xpcvkj7GVsrtEMDREjw1YxhPcRgkTGNpQjMRoW3vAHdUcXcXvMUyxv2Rd5yqZbjV33DLeiD5iF",
  "key34": "2r4inmZt3iWQjXFpQh8upn1Tuk9CySMTZzb2bnLrJoRZprC4TBViwCKSgaU5bh2AepxVhfccvJK954N94Ft5PPo",
  "key35": "wtkJxrHtw9tVdBn7n7jm1qpMNCmBBBLBX3ER6xyBjHYCjDUwYaGLThMu3epZXJAcEehExQoApzAfZcNwjwA2g8j",
  "key36": "zVhGsmFpCgXZ9Mw7PgPJDbgTi4AowaYKQZgWqATnQ2uoLvRxRYvsigjUZEzwBM2ggx3gecGfPDUBTa42fknno4v",
  "key37": "2MKHkWUC6xEMzfhi6mECeTZBWhkCspd1rnvCMQmj1jvX8FFGuWejsB1iUHemsuxSaEYwYbDsXAAmLrfKBui6zcuF",
  "key38": "2C3cdW5xkWNhnWaGqgNmruVE8n2z8AQeS1hSoyFeQRyqXVd3doNJBc2pWuMvuJ8SbzoG6qcKe69ZrjGXqx44x7fe",
  "key39": "4634eurRCtU3bG6SQb16DuPhgiVzs3rwYFzGSGNR9QikWBwyGgSbSC9fVTF3fBNhRENZL31cMi2D1VpYqaPbsbD4"
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
