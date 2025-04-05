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
    "Xuhv9q9EDzGy1Bb6frZW7eX1Kf6vR32Kws67W4L9rxdvVdmMhUyAJS9satv7mpQV1armDkkS8VmNazU3sCT4jk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tF9RBeHkVeFDqu9VYaH5JuDARxv5jVuXsJZJenwxpB7qEYJFqYLGNNae1guNbgKQaZRFHhmwE1CkB9W58QMi1Sm",
  "key1": "5ejoF3UB3YtULq8u71cWLpLcX3jzDHC8Nejer4oaehVM8UAsh4G7mqwYkcrnqwXLeqQK617TzaqHQWbMAiSN1TT3",
  "key2": "2KrzepX7WkoVurUjYmJEPcJLMK8FTWCTY4jxc1JYALLJsJpTtgkQ6DG5BWLLvi6sdFTUUVpdWvyepziQvWwa87Lj",
  "key3": "5NaFD69YxfLpZGxg5r5A6s2Jk6CwSkqq8JYHWejHcravwsuaaJRzVQ6Pzz59h8kG52nQfu3fiBFmmx2zbnEZ5HuM",
  "key4": "59xrAdw9is1ZELjtv8Ag7WoEHKduUJegk8RVP5yf7h1ErPQRTXCLtiKBjPVLw3qDDYuAri31q3VAKHeETVHMqQ6b",
  "key5": "NJfBxRLi5cnHpGiSTirF7Jvzk8f8qmhaJdWDZZuxEC7W2coPXaP6LfSfzUvtbor52r9bT86NH9ztquVGyvLTSv5",
  "key6": "3FYfNgvVa7Jr4Fb4x9C6efFxhdGrMepDc2F6Wck8VGbwZDGTF5FkbQjoYrFeJMXtjVGEgo37CLKUrUa1kbc9Ci76",
  "key7": "1rnAjM7jZeEFb1aKSgVjc9ki2pExFxiKSCceVeKhgwSNnX7Em9nAg5kzvpSrRvZphNVjpFQXtdJLTgANZCF8bgA",
  "key8": "4JyHgv6Wh8isT5fGLPHX2Fqiq8M2uZwPyWxuUeePfc5GjHGA7kUkrFFJVnFuvo9cQGDd4Z6CXcWkn1ijvhHspaJA",
  "key9": "3Ed7NJWrcLaVjx6w3cAQ2CDiyDvuuqAyGLLihDzKJ9qDowYDMYqYsV3f4MLfhzPyUibTKYrp5VDNSnNNKnwJhgsw",
  "key10": "4eMGAHUJ6ogHb7suEzGnJ9oJ5Kkev3JHbAewG17GxdqgFKGk4FpCGddjCLKMZSR375oYfBqPAU6YUwcSmSe9Mo7z",
  "key11": "2aumw8HroxTxYH7y9tyKmJnspuesYy4TzSGemWH6GEdnuGaL5o2S6s6kjgMuuZ1WJi1wzxXgdczQnbctESMPmWhE",
  "key12": "JeabwvHCxLJmKtKZvetZDnogzTaQEYSzrK6Ze4hcS1K2cbP2kfmaZXgse9vRcj1GMckGeiZPAZi1SP3RsMa3yNj",
  "key13": "1i9gNheLy32hnxzypHWftybfb2Br3gSLSknz56Xx1uee7isFS2wiXF9AeTpo3DL8vBhykSnFLxDWpq4wGGd7xCa",
  "key14": "EMqYm9Y2ZgpbX9TBNnwtnhNesBSimfeP3uKZChjCMLzYMkq7K5GyWkG2dMds64oBNjkg67nj2gk6AJXyZVeXEPi",
  "key15": "3jiyZRzdSCWEm8rJSUsB5gU6Cftgp6GRxB5V4YCcQSzurXisikip5gBQRUGaKg93fcbhHj7Qm32C2QoHx1cJEE2X",
  "key16": "5y9fKca82a1SrTg7sNdELYvXZCC7A6ufdaBAduCwQqwfnfF3umNAv4d6EzEzzoi6pAhs5tbzTRbhNaoyd5Lm8MsN",
  "key17": "4jKdaJ2WsntKm1ieT2c8UHjxXBG6TqRUJwe9Mbqs3iosG58nnzUxAC7vfKuSKLLckG3T3giHnRXkLX5gzXZFGCbt",
  "key18": "2s5y5B7HqiKiZp5828DXSa5TvqvauHZoXy7qXTwXupxpjGxyFDCzoV6DiLvm51rLvoTCgjCRbWWX1QYwd4yqnDR9",
  "key19": "ZXVgv4p3efeWfBkGcJwCk5RzMWEqHRhgc4T7AkBi1rekPo5rCLznebFbBcpY3ss2EVmJYqKC42W1bBCQKkwERXK",
  "key20": "4xALe8vC9Mqyw1mgrTxiUsWP1LSfG8hYGe8tXAYjH8KpAPHb5tJZ8aTaaiTFEzsttaWnTueG6iZDW8ChZwcrRpXr",
  "key21": "3nnZ1bXCJ6D3hn4Bp44mqxQEFNB4cW6HP2oUDUSAge7uvUvJhWbSpRwT4f8gf9KsBURFXZsCcN1GwH8ELVP8K4SZ",
  "key22": "5W5rYuQUQrPWQLg3kA6JgNd8tt1SX93vdsLbiJzPWpV77cQyYbiahbs4vG5qckc7Tyz2BwKsuqC7HLzPAiuJRTgu",
  "key23": "55vAXycwvRPY93dDpRniyNr4M4QkiwJYqYqhSnGFYDgBh3tFwmCqfroMR6PrHkvwLhSqF247bdXjpPFgAJiCuVk2",
  "key24": "dNtCQfde88QHfZRTuCgmSwAy2puPKJZKWu78azhkgzYHkQzPqFrmeYZycuBrHJi7xdRbrAnNZcz7N6KeUyGW9Vv",
  "key25": "55uRmFp55pty55ZWqNqwAyaaXtsnN3AehXdeUNyxyi2ZG5DmqpAxVLgjDxY9gJu8DTeyu1H1QTeAoKavvZeDinBe",
  "key26": "4yaz3WXuUFHbxrqj8xrbihp5xpymfmBxzEm5bxC1FfkUyrfsYUAJnYcADUSVtx8zndzLEB9M7Nv7Ary5xkW7wzSj",
  "key27": "sdVXgUdMS2hPV38zEVMzYvFk6o1cxxADpRDPywp3w9xaiDXfb4J43BTAwfgvbHo66p7W7VpNK1hpwC495PXcWz5",
  "key28": "QnKWcr1QQfPBFMYMS8Z1TNwcwpBxEPzEjyDX4LYfXUtGv1mtxouZq3APwdRcbZwtDi2EnwyrALB2iBefvj4LpAk",
  "key29": "4z8iT6ESwAVsN8CKwREbAwWsUJzhTY7GfarZcock4oyxK6tx5B3XRyENDH194Da3XJVu8Z2ySCSHj44pUFnYDTP9",
  "key30": "4xwN1DgeRQFvaXhsrriv8sShFfTx9TL4krw4YtGAhAcGpbAJTnhVS3QFvzBnr9B7if9wQwUWoBbhNVLfMNxJrjbx",
  "key31": "4oiNphHiiq3bLKfwYyhVNkCroeX1G1YHjadDgiELz5kaPhbMtt81K7tgSnoKcGYhTV5eFT5sppVsjFBPFwHcm7DG",
  "key32": "55AktHBGiXenWFb9pJ6LikXZspsUQsZYjupQyAY1Z1H267MYw9efPevCaRrSDif3hTbsN22Buj5Ss33N8t9vVoSr"
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
