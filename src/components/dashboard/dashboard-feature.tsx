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
    "Hu9aWxFsugzBqvZj1nFv72qAEDKqKpwoKVoMfyLYLvHywZx3gjqoV13V9VBXVceGBaDn9UpC4VHYysDfFfVTm4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MH3ikXQP3LFmRjY8p1ZQfkX2Cx5AFZv8c9buTE1ZkzR9CxVMyS7dKyNxwTKRtJAsHvP7MDpws2oqh6hNjEDCrhN",
  "key1": "27RvTtVTEe8vRo39UwoKVbPg82Gf9GN6TN95XRz9Z9LoJjNHyHRu2BYivnuewiA6rGdrDaXsthGmxQXKPcbLdSpV",
  "key2": "5BduaRtRzR8ZW1apUEfXSMeuGYpJQBWBvm2q4baQcdvk94L6RymM6dSfqJ3XQifCR2gnLYPZQCrEpAqGEUWqHVr6",
  "key3": "29q9CHCgVfa3Vqk7sRLZiBUxhDuptspt75Uxp9JPnasFo226tjWWrv47bH5D78QzejfN18vtS8f1H2qMyfSHz5re",
  "key4": "4iYu7VtCwHr9JoeceBzSA8QY6diiaMB5cqwU9ddvvyopyuiGP6hKUbAmEzBDqvYthWDteeXiUoxzpdFZSgPUE5d8",
  "key5": "2QRxAsoTuo9A2BA2bVNtEVV5VWvkU4wo8JjibeSZcsEV2ab563jzsXw3sjaBuNMZ2MpvYpyYpCHEwTvMh3vE3BnX",
  "key6": "4sareASg2uQf7wYtv1ZATGeJ35P4fbPoaqA3UWYePXcbNegSNNYUVc9uMoU3MDT3Z2F47vfGj3S4QmE4EZCp4PhJ",
  "key7": "65evhR9nDjQohdJThQWfsUL4iKhp4gM8Xxvch3b3i1KbTwa1vLBNjCCTn3S977yGihWnVNNbeEJg55augVzynMRi",
  "key8": "4whH4kxxkfhdejpi43FegNik3f6r76vtXKWCvRswtAMZqp1PqD3HATYfT915neEDTwujyqiQ6zmJgDofxn7T2WLY",
  "key9": "4QpHU5HrkGou4FE5UKAEcNLQp9GyYBFzWrX1VQkBWWvU1aLBRxVUTjNWcJZGSTF4KaLn8DeQP3EmFuxUGY6hD6rM",
  "key10": "5vgCYA9KYqMnoAbvHm7oX3QH3m9U8zMk7N3N9NE7RtLeffoRUAiErJRfh2vSVjpSmadwgZpBjN1YKnGiRTsRUhvw",
  "key11": "5zXbDdc8wDDoShBt7WwBPAjSMagqw9maDbT4FHuzwWRcj9skzE1M4odfwDbJWhhroXM1jR37BbjcPgAhZsaGdqEr",
  "key12": "2huhHsCPbFiZrAhoZ593hp5ZYMHVdS9HP1GPaaZ2skviiZ4ZNHtkNqSLAzyAppsMaq3RzJtDwSn2fm8cn1967mxn",
  "key13": "cQjLdbp6RxiSvdz223ZDCPLQexQiD5UMrCKJ4oDrLNx5yMx8kri2HPbRV4vSXZz4EKfDHYu6AzF4W3nu3hkY9ei",
  "key14": "3reGSnKqEGwXc8s7V6e9qQZKR2CaWY2Y1mG82fnpV3hcz63ZzE5wvYXEgnBEoweUXSwWXn3W1e7RYxPBnD3paENX",
  "key15": "5mFxo7SiHzRmn6iAfbqDZyjwi2f8JiySiqkm7RhnjVPcn8bwp1ESdwaDXxDE3ixRbTJPbR6PTaj5LBCDCzST1BG",
  "key16": "CTp285ZYnE9WMJAmJCQJRaLxJEJdoSu7ZZK1Trn1fFwAHxEQhPXooUA2ZNtLXVJSYwPt34Hgt2A4JyRphqQk4VY",
  "key17": "3qWHyC4tQMHsJgpKw4jio5fsgdL4FDk9iPQ1UGaPVPXxL26kDP4j1p9H4QLLAyu43LkEBme4KF18eXUXxdok5Yg8",
  "key18": "3rBj6qYwtQojXw5P1TBEssNTKa3F4eooBXopY6w4fU4ThPFrapUkR2evaVwday47y5UckjJzFU3AdK7Nc4KSBapf",
  "key19": "ZwafiZ6X3sFDRbdeLN62QkbBPz5bLLVP2g3frRVkLaKxiWJ5UjHjUF7J7c4ZEeS6yp3qaHaBoHCwxPNafwVwMGz",
  "key20": "2YVp1JeQi5s729f1qWEbvTMChmfqzkyMoi8VqAEA1ci7ibkP1KaFPdbv1UgvddkAgmSZoYhsDgtcR6d8PugVVUTe",
  "key21": "4bFQi4azDLX8eFPxQRRfmp8NmmW7xpHD8P1SELDrn6XH43hS1qYtU8fEnNNLcvAyf633czDvdFRvzmN8gnxESXbu",
  "key22": "3uBA7q76qmpZGg937ufjDp28Mjc3V8wtoMurayuUmQHoWes5ydaWjhhrHqV8aFS7xFR2gjdjF4SPWvGLCTjXkGAc",
  "key23": "ToNXEM8ux2tq5zH7GAKwNpsL96V3FxPhbTp4HjQNaAtMyrGdpTA7RUD1BEVfv2DtE2umeRVomMqZjjg1pNKHnNV",
  "key24": "5XLcoxJBJDah4xgWTZP65pmb9TWA95zqQFCditBLZxmKQ6EjfkcV8cjZtz5AfM2AC9XKTg4joDV1brvGPuqGg91Y",
  "key25": "4dYWL8KGLxEER2QjsRR9yq136P9QvLXU1LV7tAKZBLyX3XQ12KsWHb9DnnFZ8ZmMzk4ofFc89PQdVTExCCExqC9",
  "key26": "63niFFtJuDSHhiUXPAkhmKChAsFDKEPZM6VyUdpkFhFEsYwXsZkoLZNc9V96dfHMDgoabyZKsu34HDsmJgwLwmfM",
  "key27": "3pd8HV9p77azmcQkhqocMiK7XvNX3HJBK3VtdN7xcP6SQ6eQQfEECQqrMrSEaGJKD2QzTh5rQkiwmjdvaZHV5mw6",
  "key28": "4s8KwYy3mafSDnfMphLmPJR68eeBiiK2ygtyMXPFFTpmvsg2qLa8StAi8ovFUheGC2yq64gJ5HdUpBuv3dAZ2Uum",
  "key29": "64ufKvPbWJFyJYicCFvLFctZhe5K5r6D72xNWfk5t3S2aw2NCFyKB6QeoS8ejgicvaNswMDEZinYHN3rw49CU5CK",
  "key30": "41BptvBUW4yawuw5ZM2uyD9tn6qsmkwBjAJtHFQ9U8LpdT9MKYty1E9nt8Vqsb8K8JWnXXSAMt3eSFMB6DH8WKAg",
  "key31": "2XAeBi5orpjbX8zVmQZn2ZsajHwwNwz82gB9gKfsftPaVJ4YBdR4CwUhaUdCFGBgYQSt5WuJYRBV5Chs81PB4WWP",
  "key32": "2T6aBnv6hWvvS7CNKjraea87zEsA3M9u1YcADFfBT2gwmdgdq7N4gwLXBk5u2DWWnfaSxb8YfD1VReKSh3aSUZB2"
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
