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
    "53WmrNkFsoAb1SUxEBvTptUDmEg8r8kbAfijV33j5MfgkgVNyfxVyXQSjB1bbYtHu7vzFZSE9sEbNQLd7kCdH58V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ld5AmPmPtcZNFoS7ti1zVe29askkky7VH8zQZgcLUN3eCZhuju6KNcJcNWzvENvDSron5cvgybBFdPyckCtonQ3",
  "key1": "bh22zm3fcgKFCAWq5et2NqT3cMXw7EmMYamN5UwCn3eYShLqrZkzXGFcwctSXKzpBP2RzK5xdN2DFMWHPszWw1d",
  "key2": "21brxgVNzGdbaSq3hyVUPmrh1bJrCVKA2ZHwgah8cKVhe26wKd2pdimNCsJm6gYkXooA8ytAebw3TCD7HmyVGZnn",
  "key3": "2e4vPZvWzL5tUYQ6vnxgmou8NNzqbQaeKRyvFvVLWDzP4nkkCgoZjYVHRZh1vqD7UrPF38kMy4CJjSrjWe7VCngU",
  "key4": "2Rqj8x45pSeKXVbtuDZAiJpjyoEy7fqVk5rjtahykF2ymgG9tzz3e4GTvFWM3kMXM8zhe4QD5Lg2xsDHRRm3eyZ3",
  "key5": "4UeBE2yaUJbNkMmEGoSSKUiYn8EMve1ywfcwQjrC3gbvRSuQ3cHgxBfnVy5kYeVA85fe5Vom2UxzkYkrp5Ks1ygq",
  "key6": "DjU8sowSuoeejXvvkx2EPJZrp21AJcu1Xsi1Q3oUSheoCdKCS7eBHTX8p2Qz2xvpD9zokSdGjqdyWnCp28MJtE2",
  "key7": "fKJiXcAMFShJhaj7gz9NPz3ydSKLnZs9DDXMsKYSUWNfLWkgtECjoDN2qb44eJcdeaQhs45jw7tf1Z6zxRfDc6H",
  "key8": "DS78sR9YywcmHm7L8MhLu287NeGesJELFt9gp2iAaJiDEY334uAJC5JTqcE1DHrj46Ls8ihX7Bd9MDieRWyRoVn",
  "key9": "4ZpPYaYLB8RhrTFJvVjUTSAxoq4dGXkM2PZQP6zKD2id5WV1a6xWFLRVw39GKWm8bwTHGPmKV5qKwu1DHfv9QoAq",
  "key10": "VwNpEKU634aj3rCxHQCrVJR3YYA5P6CZyQZWwmK32jNuiqbPo8TiUpxhUzMmGY81P2cDSycLV7UN2TsNH7koNtx",
  "key11": "2uAn1F3JT2MqfiHCf1Uy5fJWFWQZYmswSmEcAipqznkDtmA4wDevpBcNuAP6Zr7FPvJqAhMMvHhH8DiBRTmomtJR",
  "key12": "2u9e8tnicygJ556wKCwcv8gzLuEJyG8w8DT4uUJ44aEfWN5mLc9GL4hLRUU81JMTYZp71EJEzcMQkLmzjNRXSmCa",
  "key13": "5s7R6jiVmnGZP97KpmxxWns2taeLJK2N2vJRW42533WKTbnGzbg2tofYKBanfavD1NakFFeYMNrQUt7mLwg6igpm",
  "key14": "XkTTa5n3vc8URGnu2qnxFGA2VXokFzDYtpw9fpJKy5w9TjDgajjqnxRWDoiZue6W3S7s7PQFS3Uw3iycHkc4R4R",
  "key15": "37YeV2BVkZZi5Fj1hmrvAtaCFv7XKEcf8DSjkQ6vUYgPDAiLKs9D4yccQ6Z4upr76jkZSmJzhzq3dB3wWdBuZ9Q9",
  "key16": "2bfNMPy16JTrC3ydac45bTPgFABF25UJukLGAwT7zPbxzkab67J4L9BF7ZwpWRnsPzPUvkfF1z5WcAhWcytnVgG9",
  "key17": "4EkYRQrv4a74qKmMrenSVjLxs43LoKsBCDvubFpoq4fWhLv1vwMEAHeFNeutkZXacixNW67V8qr7fBWEhwZ2qpSJ",
  "key18": "4446dj1R62oFdgBVm7Zm94htMBvytM8NS8fppr5eAgeyQnyhRGdZjqDP4V9Q7HQ7DnzVm9fvMqmwaZVbt4anNTmi",
  "key19": "5xhDNX7p8J4caR88mqPzYX2zKyx6tFMrawSbngdQFoihsWMWxQiZ51aMW3mSB6Y74FZzoMLSbHt2pd1mCLWUhfJ1",
  "key20": "3s72B5sLED64oRUoRpHUADJuZNdYgCz5kyLsrmPH2JxZ7VMfUfogr2vkzeT6nrDZ9Ns1gEPVgGywVEBhXWbuBFg2",
  "key21": "ZBKjNeQuhP5JGCNsLYNLRpP73VhwJjghn2XAMcRzPSLudKds9rYDWZXNY43ZDZHE5rN2HyqGVdrLb5obHeMLjFr",
  "key22": "3NqL7UgbiiTEYVHGsnGYSoTLewMyet6Ph5hB1GsbMFiYAP4ejK7ThE4aPvjYDfrVeubE36SkhCqW6okhBNVRsPPW",
  "key23": "2cRir667op5N5b8PUfczF7HKx4fJYQf2z2RKRJvNbVxuns5Z5B9ah9w4swc1h8Q3jx9hVspMptdjZq8vYAdKveTm",
  "key24": "49BEfqKALwW1EhowqcZx4kFoiRVDF2N19468Yn4aUDr6g7a5uRCMgE6abhhUfBgb7818gPsLSnqDHFuqYPSr4MU9",
  "key25": "4LHywyfNHj7dnFJHSdR93zEM4GvpMBPhZxcBRdWgVFS1kGRgLrgL1UC9yPVLhWxBRjs6ncKKrW1xLJWWrrruVAa8",
  "key26": "3tn2pPXVr9ry2dhNsG6T2xd3ZN1VWmjyPXvLfxw5CDZ3NqpJU5UpNjYMAHDeMoRDtiwZgxHep1pMPKLhm9kTWv2Z",
  "key27": "3qnHwwfWtHr2JYFETqTDWE2GAERKtH3dKzqyiVsrb9ofhjpoHKGnudbujkRBLnBiZjwAmMY5ob7hptY6p67wLsHx"
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
