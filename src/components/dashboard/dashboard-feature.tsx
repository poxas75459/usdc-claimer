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
    "2cRtiwAKRx55fjzQ9nKcWbeHpG8DTVaYUmJsxWoCXQaeTWjeRMLMvPtV1H1xwqD1f1voBzE6NaAH7uavfHoqh5qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KZLo9usHWLjJRMCqkfkS4guUHr9z6GgccBhuDRn2jTDwU8DYevrdzV6SEPC2uCvZrLbCH1ZiaXeV1WbJEJAnc9",
  "key1": "29f32HmbmsgkhX5HYdxS5gqtQ9M74GrmhPkxmz61ZUM4a3G7LS9L9PYw9DhC7XLP9hsDSQaMGVWK8HWD7tRs6wV7",
  "key2": "2enmnSGVZbxsuyjGzbk5G7vNoNwZPoUkhPkedkxWQ6M3nFrogVArmNeVWMcFUDzt7zrToih1XKuE8UWSeoqHd5QW",
  "key3": "Wq2rktmxnjpdBa98jT1aubahw4LPaBG3dd65mNAhJZ7GZg72U6mofNFuAy5tyPAacbgSsoYKd9oEfzFRFeNxj9u",
  "key4": "5tQRKiF57CgL8UGVtgjJsdpMKbzK1iqBGUeSsFVdv2wASjSobuHg7ctQkvYzqjrB3rLAHGtW4Jbm93bQcSoAMFX2",
  "key5": "5jaWyNe1eWQ1gpWGLKuPyihzPJLXtF24TN1NMkFyCHaUKdDsmqDe228GfzkQTJUFGtMVs9NmW8YikdwZPGuGNL29",
  "key6": "3qYTd3YQ4EfVPK831FBRX6fWWk5ZDn65w5MAgh1wDVr58mn1oq3rJ6BxaAeTuvsWVdxthPiP7qxstz5SXinrc1B1",
  "key7": "2EnfB1M91ttqWZNXjja91aHU98ian5ztdG61GFasQwST5PGjjboxW7VFKp3GFCcvRic6P91V7r5FxVvNA2ZMTgfU",
  "key8": "4N2HkgMqYrvRYAW3TSK2od6YtZ5U9u6dqJYu7sjUSEKarfn8kTHVXBuaFByL9Ap2WQLQtqes9YAT5PBFAi6jANzk",
  "key9": "fDoTno4FEGGLuBP3satLGCQLc8ZcAGyphwgbs63qVrD9BewiC7NwyAH8tHPUk97nrwzmqJjjUarT82Ft7Mip4gg",
  "key10": "3faLS6vzCoCCwHoPMuXaA2oVS1NBKsYrHGAWVz4kNJeHKKrn91qPVQZ5hM1FZNQvCVCGsWJnU61uxjAuDCixmvSx",
  "key11": "32k7suhbgVGo4GEEFv4ouHPmPv58nhZmcNf66nhJWLXuu931Ad8nuTKanZ6VyAaZtdmxsg4Ntz3BPNhYVcPBNrAd",
  "key12": "67mQhyv8AZgnheN2QMpBStkURCHULKJtwjZybzA4zP6BABD2V9reYEhYsZqojXhMacxEnFUmipAq1vPF7ibpm3Lj",
  "key13": "59HGnAfS1eo8vE7jCFpBm9oKCbFc427f4BvpLiGgyF8weHCGg59wPbkXQ5zppzqMrReh4LCkw7qyrVPQwBwpSY6B",
  "key14": "2YxYT2VcF9kMLVSVMTrvyxiisXNJfK7i2pXW3FXhkt7tsRW54RypLRnVKy2YpWKTDUT2rNEPkkHohWvMmwaFTcD8",
  "key15": "4Dg8xZVWCQp2hjoq9xYyDB65Cd9amMHvH7gqrYqtV4uRH6bZNJDTe5fwfrQrjPTnMKTqUKWVQwrVQJoCPK5bm9fB",
  "key16": "5BwkaGHjTmLttrXsjJefzXDKM2L6M92Jw6oXfMRP3Dxb1KYqczbM1oeCpvw1Y4YS3Zxu4SvBg3uCvBgq7SXPm5tC",
  "key17": "2LEZgB97wwGjGveQzcmEZaPEDaioQJXyQutHJH6ERQxc9Epvnc7jEJpPLhfXbSD1pbmpteaCeL22MxKc1WQhdMQM",
  "key18": "42Kpuo6BX1ZuraktQu8Ajjcvmbs515BTMyL5nk1F6fsbKidiwvWtA5vbxneU89KKbszMhyhNkm74fTBoxLVu6cGn",
  "key19": "58KjdHszdJrZr2GSGD4NoFgqEkzBVs2ZvHVnXbZ9m92UFxgT4BXMXyXaPSxaEecHez8VvhsxrY7ZdaQGeHwUEVLi",
  "key20": "bijxxkXCSJB2yfJ9rM1RJVhFVLwUzPrw1CPY8LzrJEpWFfcsM2gyJCCvBgDVRTB9VP1tUTRrthw5fQQHBdysz2z",
  "key21": "Cw5nQSJecgrs4FbxTB1yqg5wY7fyZ1JZCB9K8Ui88jeB1yXFWUU6dZyTjgyXdtDvwz9pyf2qYYwW244HwFPVdwd",
  "key22": "4uH3LRu1EEGi2F6LS6DJNae51gQw2kc6NnZTnyNN11rJt2hHZe3Su6rPMzqQDy3i3sgetGtM6bXtv9mckmGqktsU",
  "key23": "mBnxvWSnXyaYdbE43KZr35ezFgHg4ZwdJG9mgX5FWWyKYneUXJHR6oLnEs1wADeh6142Yp8LypvHQSVxqenPGia",
  "key24": "4MycjDRasRmx9Wcka1JgDKvRj1kLaWPrG3xZ6NV4ampqxJSLDZXtjy18NeeDzo8uRtEt4FVpzxcWopn61cUYCSo1"
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
