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
    "2JMGKZVN11ecXj4Goksp8VUWncLLKHtNjzWuaZbYihjgaJmLMPfYA9Lkyw9xRwi6YAmhRud7npvY4RxUtqnsKu8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YupztGXqHpbkbc4QHDYBH9JPixiwDQqFxWYjr1J5w8yV9MD8bPorfwaD8V9reYGuKfQfd2PT1VJ5LyZnTepvuvT",
  "key1": "5a9pSeVD6V3YhK5EXi1U5TvccBmuoLHzepVLAEANkX43dSA7VoYaigFJGFxnNnJGsXLq1F4efHGUg88z9b1wVr6Z",
  "key2": "2iMbcAFMuJiYpEi6z8LYogTaYPt2UuJY1trjZtWDGZM1yLn2UHETYDUMHwnCR6YPNEAzbv6m7TrEfFKvK7trq8c9",
  "key3": "4tCGuzkSmoUxXkbsUqHXKmRgceEdN2DQiSrKqaMYBDHqK22hf2J5d43nvbLgivJVGS9BGduYYYwSg6SfQP5Fb3PJ",
  "key4": "74tnZrNTD4WvussyUgLHF8pfTqTd5Hx1imz1CaagEPexKQtoiGU2fAUdmwJNFasjHZDxRsfPnBXf2BcpHCPbUGu",
  "key5": "3BaRjuNNA8cqXCKNfsLE2ZfneB83CFGcEeaD3sMh63ccemp167ncvj5FV9rnBWJLydeNXk6DBMt4tB7baHYDZb1C",
  "key6": "3vvNXp5JHg9Lyy72XqpkNYuVBZWZRUxkh8MtddWV8g1kymmPVT9j4aogdBfU2yfsvgX71D9rAPt6HRY7bZK1ued2",
  "key7": "GG8CWLBq7iPFY6v7iEPPsq4FgXkRNKBDSVUFhAREt7QDcmJh3gDaPzRh7EPfeuaUqFL9GdCN5zrp1ex7eKfbRrh",
  "key8": "89KsAi2wUbLytowb19otW1kfWfq9sWKsURA2c2zNFuDn9sXdi4Gx4Cm1UAZ6ZkY1hzKcYdeXg6j8CwUtSUGBdqF",
  "key9": "3iXjbit2KnKpADR3uxTmtwHfoKRQb33unCn5EdvJwQ4MJ2MA72T2zfzPVyXyLW1inU9HpiNGi9xZgStoXRG1gfec",
  "key10": "66X3osfzk7ViUqLuzWawyDooRkgsYtyzbvFcNpCj5BdeCTFpK2UpZTunxfMDJN8H2imTEKWnKkKciDKxNtsfQSAD",
  "key11": "kQ4rHcidzbmpeMYuP8DaP2gHKQ2QnmPoqU848BXw2TLHRmv7exL9Fon9SsdocohXmL6u3wFmKRiv2mSQdrNpTAV",
  "key12": "43PcH4XwXXZPKDSXiGn4kWtPorxg8427h17bnp4fTvKq6p8Nrf4jkRZevT4nZvFFgAFnMrc27bE76hkUgzm6Qwc2",
  "key13": "33CbYMBXz8rh3ivyUYWmNWKopfurzgM2oXDcQ36guymuhF8ZBz7geuzn1rpP4gWSArq1qQATQfGKwHcJyKDpCrMp",
  "key14": "49AFRMX44YbH2ghRfhvuAnctNc4ck6aJG3Wzk955suXK7pWESYsMxT11Rx58U5mNbXmhSvvF86kZQDG5T9rU5RsV",
  "key15": "HxooQeErXw7qd7DHaxchN6QGFTAWA4ycQ6Y3uejHYcbNDJuYXjrCqRtxAjznALz4w51u7nANgatUdGbThARbRWx",
  "key16": "xHww9qbJDXGUJUfnZC9E7ceKk5uSF7bGU2hG1ATp9eN4t1cBc67aQdX2eBrrdAX6PFohPximyFTXFEwFmLzt6KU",
  "key17": "5ASQhh7hBknCrM6RBvhZV4yuT87hQ7YQChi4MfCoS4xadiqwDwGX6P8HkCvSP5qxjHCNFdR44n3ksMbAozQr7rBs",
  "key18": "3NfAapUZ159JHpU4cEF6br5xzBZX2mMrw45xEVrTFGgyPv8Z8JsgaL5zK67iGnkXFnBiux6RY8onjWtda9yyvYkW",
  "key19": "5KchZsoLKsDSWtevdt54h3T8uY3TbKEpYj3JLNcpc8dvAcpHgZUUX498ajNuyvNQFG3KMnQRRsPmggwwuZ43hT44",
  "key20": "3efmiDh56g5x6R4ZhqYBTcAqW2mMYA6MTi14MbTtEEjn9fxV1DETjitPeCWZQCjStNbmaPoupHTjKuxCAKyrzjqa",
  "key21": "38s5svFJXjkRwRH2FBjnFLQLw7Bnrcw7ZBZ6s6mtAKkrr54S6t5vcpcrXcKipKiYqsE2ZRX7wpprpFm49t8vVayo",
  "key22": "58n4GQ78iVwukec6gRjpj5LyHc8e8gH49ZWRWdpruarvTY4YfjhpjJPYBoFSsWXLgnBDSCHKZJrNrEyGxYjKq5Nv",
  "key23": "2YCBKS7by6FQCWmBUJw1CDFdHJZp1FZhkTp7nEf2GkaG43cxK6MMVSdG1C8wa75vLqiteVQt1esFdeVPQsMgVzV8",
  "key24": "6epsbxP45ghpHsrf2wKJ8E5rGv91w1nknPSiNkS1mvT2TpgdxxtQRLmWhmrJVPDK4M7v9Dvgp5vxnarxJNJBZdH"
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
