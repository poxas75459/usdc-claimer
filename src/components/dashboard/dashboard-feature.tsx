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
    "54XCx26C2eyoxRxieiUfNhjjF3H1HkAjMuP5EF6FnDXwiPq51HGFcRrMVvyZd89UYQqU6BNXHmDLBZh8magZu4vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rygJtF1eK7DhEW2jSt2D1RSNKnHHoELZiE4pkX8VKApzzbcswE3BfbMUajwNxU9yWvgVfFRPQokRE6E7LQoA5W",
  "key1": "UvFZPxydhgMFygSnF4X335gktsD61Xc7o4Us8LwRdTAZErZ1FVRUyJH8YXd3JGjgpgVj9LNF5htqPUiBW1vbYaw",
  "key2": "2HT7tw68Qs6sujbvrBKvmWwv3hpcaYH83YLUVGyQhSw2EqqMihCjMxUgvUPFrEw7PdWngFzQTHriEfPFH5qFcuqX",
  "key3": "quaPKCEouH2yYoRdhsAPtat5XfaPDMUcnyq6TNqNzb3xLDgGvUqUwtrYv5ZbpphusekcBxc7M3ehCimbo1KT4Kd",
  "key4": "2hVZ2oofyUaU9yCySsjp8seS43urWX3aiYBUXbGVBLsMo9KEbpuBknYHZmVekhgGQfpDsMjNAN4LdxHcynDzJme",
  "key5": "4SG76xSNZnW2mUxjfjZMJrX6hqNhKKCggiVrf9cgKMcjSP46i92vvLamuJPyb35iTgESBujJx5svMcDUAtufes2D",
  "key6": "3wdhZKFNuo8xUBcF9KfGRqT7YXHZn6VpB2SVo82QHUQFi6zydiDaWLWE4zFFK5dsGhdZfMQKYi5NqmKeX6WLmv3H",
  "key7": "24pSqbKpEXAEJa4zkMkkvXYQHNNzkGywYvYFYoHg8VEDQYZtFhfapp8tw5AE8DkjPcYCbvJaPWBVDAWsi6hpEtTU",
  "key8": "Ny1hoxjHfRLaafBUuKwRqdDP7NwVC9MtPUVvfkZhScQk1HZJUqp2wYvLmBFqbUszhJtymXhxEEbes7FyoeU4jLT",
  "key9": "2ecyAneEYPtde7cW6df2kLo3hVRSo1JLFFwD1DLgbHjGLkTjwfojhsnpx4zWyj2fQowk6DxdaUHmZU4sV4ALfRNy",
  "key10": "2oeA9EP6uUAwVQEgSyqGogojFkoE375ELNyuYvZ1xADQtcAU8SPZ7eCfhiQv54SLp2HyMd4tY4dfcMtvcYTnm7fo",
  "key11": "2vKboBDCvUAUM7BXiyj8nG8DbZVz618svKQZcoZnf6xve8yt4w1vpGNCusS9FL4LCNVLPpSPHY6FiyM3B9kGPzPj",
  "key12": "eZuCLEct8aCwNktsq8XGxRdD4GCTNcBpYTShcjzRqXrE2RjDcWXEsHMpfDRAg37gnhnSxomEGwwRxb1cS3duraf",
  "key13": "5Xfonu3gvjjFvxSQqRuUZZUQaiPwVvHvoNqn9ujP1sZ6sZwGLhqqxpszvC8SK3w9nvJKhmospqgpbDWvmkTaHKXB",
  "key14": "bvwVuj671DvYmzJ9TrPSm9b3Ue91twducswu9aURaGPnmtyNEafmZK74aRTsvFwKYNqnJhbwmwM7tgDjLckn7mJ",
  "key15": "4VeGifYF3sUKG9FZDcGxSajqeWNFobXDVtfYkUR7apfbap3PWvryiNZsfebTn8aeffLGSyRSBQ2wYSpDgFUGB9iW",
  "key16": "5htP85xPrZrzZ4Tr5Ve7MT1zsRfPJaxVSt7Xn5mXgb8Ht6nyYJGmGkFUgpmLpyfcd4we53YuRvEyNzHzu82hkFeL",
  "key17": "5Ck6oYFVLhYGWmtHW6RUrMnQZL7RR1N23nC6DREcPNC4815MN3538qhsAjY8SY4vYFRxxJanGxkwdHJ3WnVWG6Jb",
  "key18": "5AEgaFQk4NGMRYgw3GNM5keKDAmDJkKJvJEp8mczNptjrZGdhwxUF3s1wNEPRRyE6LS94uFw4JhzPXLAHoCFvwbj",
  "key19": "iRWZ3Kmwzz7az6VcYTzLEGZkuPgzS9rcbwuSk5h6u4QuzkvRfJjb8bbDshPVxHRoUoTkm3L2VxM9dUuBp5Mezbi",
  "key20": "2mEAPcLCWmDxcptWdroVKWRTtqr1dLePU8sYDWrocBHqVn394hjJ5c4XuoBztePAotG6d2mZpza62RQZL91sVZiJ",
  "key21": "3BrvMbpgzw1q96MMGoyNoKEn5uCNDckxje25ubah3g52LkRDGfTQMCZaJKdUJXLQeaJSckfxi9tbE2Yh133J16zV",
  "key22": "bPgKqCYNLUbnKtjppSHx2c5dwguJpNo79mhPZPBUGDNGk8bgvFbYENkgfjsotQ8mfUGhYQdrheF898AaQc7eTxb",
  "key23": "4sVgvEjdqhE3rLjZUn4XfxKSmRPw9L94K2DbcpFRuri1HUDefQeFiEZgooszSmatUquY7e18BgmdMYWZ59ybPod",
  "key24": "yLRQovHuFYJ83Jf2apvx9z463tkyUpjh7e6Emgwa4nzqH7FyQiQeoAwChE8iPeNZta6Vw53zxf5GxofSM5y2Hqr",
  "key25": "JrHr8VDqXa2CXv5gspcbSLhAw2UHCCsN4Zi4NnpUWjoZofEMsvfLktkNK5nCmAcmTwEErARZjueMfgC36rQkmwt",
  "key26": "5KYcShQu5bMMQybpmgj24sGgYsU1xTHk8gATgFwK1tmGom68L8grU9QGH5CmpZZajapGV8jiQD8ZAy82d1VggiF",
  "key27": "26VEAGk6dvMqZKXeWMSAkY3BSb9XCV4u8ythSKF7TahqfDbb55vQ9vU6DHXzo1tPDHPPeBoN5jdrdAetkCLhzDS5",
  "key28": "345XWWcmp8jBbuWRnDhvRfWpRwsEoW1vDyZEkurWabEn1wKMB1XpP34RTvuuTfMwscR8HGrr3ckcbNeRbR8ypEyM",
  "key29": "5N3A3q58KsKLaKdVPnRBpzEY8a4MK4LTyFzsUnJzZZojEQc2mw25ToeEgzcwodVokVWM5u3xjUisLijwygN59Jt7",
  "key30": "TViMJddQDzG1Yjfzg5RhtqFCNXuwGrmoSec7XkPh8qyenreimkLubW7iJ3miaTPbcAbWZQPkANZE2VYJhBmJAdC",
  "key31": "58C2M2UwEzkfZsAVcpfWzdQZjd9f5P2uyhyXfyZu84x61bjsRYrPjEfAVMY24JgM2KKWKBc2Ndyq8VWfXZAtC6GY",
  "key32": "3L6LDMHNJDscCaRygNXU3gGzLT5Cssh81PuC3ZwnzGq5j6zhs9tBnZS1isHMPfFMiyMsBLKYgqoGDBZwm9DXmpmU",
  "key33": "5TNhVwmWTBZN3FDgyfwx1QR1fmbJhPtoKccCig9ZiZrYmp6rXFVaZ8AQbRSxCb3kVoaRronRVGEJqzRHf6gpYtm9",
  "key34": "4qZF7JsGAZSSJ7HJ81y3DbVJsNW2BmHEjmowqC6L4HJv6da1yDNVQoUjF4zB1ERDtAjXE7X9WSsxNaCfoSjviUW7",
  "key35": "529jL9yLKvXKxsLxhZWkmvZUMmteGkUv8DJoJXUgRAH9qvuFMwspgpb43Kgq2M1B8gR9g7AhQg1XoEDUNG1bKopS",
  "key36": "5ENcdnpCoBiuCCLT7RmJGBQm7wWMgv2UySxmRB66Kv6Ta4AvceXeoWpzxMMh3oCiRFv8AhqZ3W6jhCriqgwiwVj3",
  "key37": "51947HH8sg5ym1t3UaZ2opEiM1RVbwnqei9y1sz5cTd2cUscRtwqYwY9QLDdFinS3x4w6oEtZRehDK44o5vi3W5M",
  "key38": "2pJ6cNubE7omZDcyBXET3VTuimEWGBGePVRdvwzumisYcGVpKSgXubfWYHhNYBfnTzuRnEEejfTT5oqgUMTETV6N",
  "key39": "5iAFK4wcPm6AXK6DJ4SFdGTTJtkEzpiTaPwQ4F8gEphzWoDN5qtfoe6s4E38ikrqdTChnE9Kh3Trogo828n6hysa",
  "key40": "5gr31W5kqxbrEwoedz6qYnqvgDtHFH4B2DkAqEaJZLH2AEScSufQibDEPHbbDbVCrXiA3DBiKorCiqaibmixVh5w",
  "key41": "2G2RsQjEtwbdFJ7pmikFAHqeW77ohYfDA7mdhxfoPiap7xYBsiuRpacuoDhyP6FqArffjs9dbtnGfCgcMZKfbDzG"
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
