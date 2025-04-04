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
    "3wxuPqfEY4myPJqiJbiQjD3iwus2cuoVAUWqUQVvG2PSgoxLgE6gFfvQMGF5maRuHMBgAZcc5BkssnYAQzDi122n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJhKZ4o3UCUko4Kd15HeQbMFrHZwGvtugkjovSBfMnURtMmG662YcS4eZHbkxXy31xLuDtZDJMdUiWZbC4MrJMu",
  "key1": "Jr7FoSYP1N4qgX4gFvWA3h2sj2bEYi76wC6WRB7yGcR4GYL2AYdMb95R6m3F71vq2pECmZftY4bVFn1ckJYPm9u",
  "key2": "SJwsUHFQQxPUbnECRh1XSGwaYNBQPMurjYwkX4Cd4m7wosrLuKN7ncNHhrZK6SH2NgrAB7qKCerEKSMUJpcVvUB",
  "key3": "9wbkWa35PuWHZha7deHdV32PBH2bRWskPvLq3RU42bHkfv58VUb3YQzxQ9HmDtSxoKji3fbcu1vubSoqNKVDDZs",
  "key4": "46x8rqPr5qam1A4SeF888ucCJNuj1vq1BVKdAZRQAS1ez5UxKhoaZ2dr5b9o9VvoUAsnJQRr877hHz2XeVG2UVSq",
  "key5": "4TeruRp6bRNWKZ7ajSq3eZTVc81SWMLMVr3GrAcdmkmXSqxc15fJFEv6Vh5cEJbYvKQrA8KMcqiJceFgdcApmgbX",
  "key6": "67p8ia7fRYMFk3nJJzxcvbuTU4dqeKpyuviyx1jfn1Tnz76mA9ah9pj9s6GPJzmHV71fxWGEc1ubfbB3M2y3nak8",
  "key7": "CkRu9tE3B3xYuLnSHPF7jmaRiRAhciXGkF5hPBKkUAqpV5LpuywLyCka3usiQUUabXh37KaBryqrxj9crTBoiJ8",
  "key8": "44kcCWRzkze7toDaBTYzE4C5Fu3cFfw5WhjGwRdmgrLu6CMi3qA953UmccHxgYDrwytzZAmq3RsXEbwzrd1cZMrW",
  "key9": "5HWnLXinjHFouzLUDTntdYP9ueJK8eTU6mCXqHwYFXHArbwJRYD76Gk5aXPZZ2mfEon2UqGKrvnpTFK2FxvACaKB",
  "key10": "3XVMi3KWtca2AEbV7AbLfuVVpuzYwiWw13GrBxB2YUywsM4rbHYYRyjGA8uwTYFtbvvJRT13cw9DmfzLSHLmJqRm",
  "key11": "5QSiW8Y3sML1H3fCVSNDwgZ8f2inRAHURYYeS2jCFmEy5rGwTcusNHD16E4JFi2PTXbXQcE3gmPqABeVQKCZAWZa",
  "key12": "epFXLZtctmS1RJ9JLft1XC15TCTMGgG673J6yV9DfKrJa6XsqUSvYfgbQfvkZuBF1vgN7RcA6iAJQA2WuvDSogP",
  "key13": "571XU3ZHCwLNB13vWrHxbmpPjPCdFZAtE4ySCf142fgbNbZGjib1AvuExiZrBYWfuGdYi5oxSE7zWkkfmXK9dUpB",
  "key14": "59rSP41EPxcTo5aGhCwXhDc5qtwG6wvq5duYjStycZb1j7VC6VUWoJZj9NpQrMFifziD3Le6RwN3Cf6UMY3N9JsS",
  "key15": "DZeAxRBGXxUctiqdtffjHpSSSmUEtRx6xvPbMisGoWW2necJuYydwXu5Q6poVsSMEeobFuR4cDCjtrUEr6bNeWn",
  "key16": "34pYyGtJjEZddRfMJ29MQihcvHMbuCBRQ7LVXjpt1sNNTYiev1bieffUEy1totDTpCUtExwDxhepbXiexcEiTAoP",
  "key17": "2LEMTXc6sYe7rYPSsnYqGLRC9kCsWTjoHbrN4fhXRLNoCFAP3Ywj7o6e7C2Sqdzhv11H6icsGLwhv5gB251buH38",
  "key18": "5yhmY2uWGBZTjZ6TUzpRfo1Y8L542SeaabGRqixqBtshsm1ShoD5oXnfKsu46aEqf1LaaTWP3NiTEW9GmGuZ61My",
  "key19": "2nwMRo7CLj5k96SgMLuySrySmTGqaWQKASV39Wo7N1swN9fEJReZVndNgjVzEiMcUp9ggriy3CsapeDv8ByYBMzd",
  "key20": "5oT857xuMGV424PPMoDw4mUYvRSk65b2iXPegLWuQ5mQsB4VAVD2mjXWnjDtVjrLohUadE9atPjWAoibSWWspyTx",
  "key21": "5rsnmY7hEH4zAWyw9kTeBzrHr65R4RvV1TLfLxPFBhGhiskTDWmBDaS4Ac8Jx6nz4XPr1kdgR3e6p7PQL29o2Xha",
  "key22": "2BoueepX2YEsF6n3a4PQdoXidW1agkwTDoxqPVFNP592vJHEebGGmtXvjQ7o2M9MWYj7rAPfhzWSg81ARb9y81y5",
  "key23": "49925caFC3K6kG8C8ksqEPtK1yFQYKYnUkKA7sotVyQkBkXM2yqvDBLsf52AUuwUxstWFGtUGjQWMwWV3UpkyHKx",
  "key24": "2eFP6hKs14CDr3CzDb8oEHCB6vmCgeoyLvT1r29XLSbmt4ijn21TCnuCNJbSSWf2hHntbZL4tTb6jzjQ4Hu3cWvn",
  "key25": "28rSQo42G1ckPWHikHcUJaGp2hVn2Wca9bZKnn1BN7QoYrkRTGju9GwAeynU8nd8uN89yTav1McwCSUiLJbetGZd",
  "key26": "4KucPmwkRAK24v7TJ75NeXEw9tXSSkTxW67NZDT4NNEQaaXv7PBQPyerSH1KGfMW6vV5sUqXKww1855LKAkjic66"
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
