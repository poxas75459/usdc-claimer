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
    "5qydD48wFhDK5mFNRioKryy1NbYxATWXGGKHtVavRweZi66FHzUrTsc6heKi6GusXiofiwQLCckVZ3CLcXkad33o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67SwTbEe3XbCgfvCoKyA2Qo4JgxgCTrafMFGe4au1FbLUtWWaeXyYVoxdqwRe8AwCUctwJ14obwdJAkWVd9xoC2u",
  "key1": "YDPRVAhvjWQShu3ecZ4edXE9sNZsWXVoGF3W68zgpaWz8Vp7crDYJaRaTFNt2EXyXA4hNcA5GATrspWNQCBU3hY",
  "key2": "xT63rijJ6USgS1tQQKeDcYLPQ7M9ocSYmTXCJAGi2X5eixekYpPQxE8SFXqqKxnSFvy2UXUwg6tyu2qvYdfi8rR",
  "key3": "5B4sKGff55ZXerqscJKrHTvp2pXNERFkaJ9FxAAHCSrZ6rNGGxyeLnfaY8kPdTFfQeDR1RXRAbPEPPw6RDx8hiE1",
  "key4": "3FqYrxrtg9m4mpQoYJsLuFtCbNRsPAD6z5TqJ4QSjKJLmH9YTBsi97RV6VYdKRCzg87vyJtJhq4B6Ym7ex1AVBFm",
  "key5": "46bN7JA67sZjYVJH1asaPMMtbgrRMxqbD1twyYX6nv6JL4qs8DL8gfqiEGLLMrJG4JLotwEQM741JGvf4oqrezd6",
  "key6": "3PWXVSHE1yabQaf7APCWuWgGzw3qrtRfLPEpoWw9jf1uoNrhzaQW9RQQgEViYzHe3YheZT8R5MyUyPF4X638D4tK",
  "key7": "3N2cDBs8nSkFM4LfoEi2XAobbYwuaroXPL7oBHf9cLWsDEYx26NUnvzKTV6KiQ4jdQXMix572KQ23q29v4A6ZZge",
  "key8": "38EwGDbg8hPR3ABDHvg42Wu2ieDTgDoPcAxFrqCydcBEER7khygp6Cxty8oTr6gAbtcWgrvtnuXNTUaxaFPkXh5m",
  "key9": "4B6nDubkNV4fz52C9fNxJyGsSRfNFoRnsMhT7Xh4WKDUtVWzr5d2CZcb9AMtNqkTSA776ybBDYgB4v3oiV816Kmn",
  "key10": "2uHDSJq3HHXccAdkuQb1oWdEHw8UupgsnqAqpSvYZsfLAHUd2VemamgEb2SqUTRxay7fsbYapx7g9wX6TSfxyvmi",
  "key11": "416ggW7YDgNiBxweadkZpkgfvRaMQwTsqyRGmqw2K8H5XdpE1Benn4bconhMZv6sfB3BYU9N8V3VJgxeWhW2LqV1",
  "key12": "Q5hcuvAGJejDdPUbeS1qtHsFLSNRW5qWcMdUr2Je6YceVTBTihtwFwt3eGfhZn2UqNuB28oCYpHg8xNTBmmr8dE",
  "key13": "123TyqrnQKosreBNaiR5ZhYS6bBT1tJwQdpNPYEPJ5NAfnzLNeXpWhbw4DxC8se6LcgGBeAjxGqHV7y3RBhfyWJr",
  "key14": "4H2rQt2HxKCGJ3LdeCHYhBeqFVeqYBwTTKpULbfHxjDNqEsXu5wTUjVKztmA6mskTH6reFTpcUKDyuAzFNEfWyAi",
  "key15": "3R3uE6eVd5myeRip7Re9NtUoZTRqZwFivXmYMUffbUERKzcY3HYDfodqgaBHkTvyi2zwAxzuQuPnss4i93vNxb4v",
  "key16": "2DW6qroHaGibTbhtLfoach1VemnS5Jknbqc7pxa1ThkNTvkkNGVWTdF25ddFZeHAcmaSur993S8uiFtGeMZuSthb",
  "key17": "2XdsPnAvjrWCPCRtvSubZ8oQRFWFzQo42sofDWG5jVwH636PUWBZhrDrFyJoq7WxHuyyUZ8KjTWs7mFrFbc1QEMD",
  "key18": "2etp6v73cJqYmzKjCayM2m6jw8ZbpiVobye9QEbzx6uxfMS4Gs43ouRL564MMpEKNW1TbDVdXCkfpGkxc4VXjCS4",
  "key19": "49GNXWp7amsMpFzoa2m8QokRKVrQk7hQPQZsw4XyoQ8dRFAh3z6MAHB95ShxwUQM7v3jvF25NWYcndtKYHANCt5M",
  "key20": "5Y1Gb3GQ2FMKvNuE7ZM1xfHgGZkSUT5YpGpnJqvGsDm5RV4zVorJrz9rH9aj1VrX7J3tVFCBxWAzfhwP47EoECiY",
  "key21": "43F2yTziM2BPS19rQnbsEy2LdQEpTAD4MYDhHyCiyZJaXRKGWRuc2bN4TnMHYgCU99C719zMs6Ty77fLy9xP1BqT",
  "key22": "3NKU2M8NoE5kcHLBt4nWPkuQQXGPD3p18QjurVb8pQVmswiZxqfFTbLb13gHjqcSjhpyLNqHsASkPurcdHCJwZZB",
  "key23": "2mkfU9oZXpAUWk5TvMzeHiNgWLDrNSTKPbJkNxAWzqtDeGiA2vcLNtHjD1dJqAsiZoLN23P1LmiL3vembvRmGbkd",
  "key24": "5rt6EnBvDPHxmvgickyFhwxBkYgKf6FbKPPiNof6RDKmvCAbDNvLnt5Ei2HXxzQ6pknv6EFFcEhhbmt4m82zxwtb",
  "key25": "3i3efYWon8xsNCRuXTWnKajsHKmhuRAPMEYHo7j4Ag8oZxPLnBJQTof9hnqpYSFG4vJk1cN1URnGVi1fwErLGimK",
  "key26": "5Yfadr8GSr8e38ogzh4txrVbGN7BEUuMGzwWwcESCCQ5jRxywFVJ8bQENBB1dH4vWuUsXHQfDGKYZz3hwUfTUv2g",
  "key27": "t1ggWGzzSwasMStTuLEd3Tev244Y65XcnpMngzfYhjWgL6HUD5yzpvwA8A2rAJfsYjyReekzLrZzxaXQHvn1koQ",
  "key28": "5AneSvstNMLXdLXef9fKqwntqnRNp9rvZvRu9UArHv2BRqdxBb5HEcgJ6kZiK8gUDPrS6XYPr4TXv43exJpsk4DF",
  "key29": "2YVMNH6fMPCKzuPU9vcikHKdbitTgRuWXZ5aYAEYBnbkVZSprXHx5ooXiaA591KXVK5EN7KpzTJvrWPAG8T2sfKM",
  "key30": "25nQw1Yft3ftYKRBXJXTzYvbGxrZukQp6ZwLAperv7BJTfKqAry59hJ1MEHJ9hiHPjN9BpuNk7SEtsHwqzwtdwmV"
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
