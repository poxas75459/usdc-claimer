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
    "3Bej9hJSGR9H1QStm1gmBpxDzjtkH4KeF7uFAkTXAkPMwdfheDvHNo5ANU5aUBm4RS112ac9ER4ed8qHvy1GDmsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EqUzthHTQiuq3GDWQrap45Ct18GVSpT8ZKMtWx99RLCWH6iYwvo8QRzXUrjfytb8r62fQvXvsz45kccaEM5G2ME",
  "key1": "3QftEwvwLGfrQyxU7BnvKL8h36BSYBi1WTpRhv17bSiygLGA4U8qwFwQMdsEEHLvfEiKvcF4fo6BfKmjB43DyidW",
  "key2": "YSGYmCDCbuyNL5aE8vt1uAeDXGe9kPeGegVHZHUajKvfSDb4ZXxpeP8coCQS4j8LNXsTrstqypmp7MHXVfduqMS",
  "key3": "3TfUP7BhtMhJWzh27QkgxqUFoKFx4ssYCeSHzJ2Vfrm8Esi18Ajo8nUS19YTU5AMumfKrhbJ6cU4Z1TGdJKKdmpQ",
  "key4": "5yPPVYk3BnogCpTBiSvfgSMza4RWYeXqgta7eYowoNzYNZzKQcL8z2t3VjgptiBHja2ijX9oUPgsL5G39CR1nqVk",
  "key5": "FtbFqCwR3jDyxdZRL2BJ51P1RkEak7QzKEwCCNJsCDaUyf64KAdQDmdodgyMdz8uVYMskQsVAMhbQ23auYgRZGD",
  "key6": "2zFSknTQqjfp8RR9Lzs1KiBUoBjboqMchx2awvdF58C5CRwhc7Sh33PXcA9AQE44vZzCWzuHYRGuoVPoa5HqhKpq",
  "key7": "5ww4WMNHwaRyJ1ommDDVPtzpkRLxKp6t2RjrF9vtznX6myXMxzj5vpHMNpyomSGhLFvm1iqD3xX7BaKQ5fcnVRv1",
  "key8": "3rRQnw8xPDDYek8KGk5BoKXA2i8XD2cWhAUAosi2im2EVp7KN2XCfQzq4y6hmqZpFnDoXBrHzZUYRbMj5aboEpZN",
  "key9": "Q2CYvJu2zw1fdzvMivkjG1R2L1V97KD7qXJywTWEdMHsB35dnPsXGCVpqZcFKNvhGzDVCQVWfRbM4DR7Ed34hZA",
  "key10": "2oFLBuzKhbo6DHaQJhFz15Ab29qDPDdNyhjoh8zZFABy6HwVny8i5qpfBXP8Rat8wCZGBrsmDyocVBBbTScRv5gT",
  "key11": "GtUbohwcsBH6Y9TPd5TESvNeeaJHBtvWCHxmf6wwn5arfUov7hPS7Ta27EkMhGca83V5oitsdvwWfmthgLhTzwT",
  "key12": "3zs7FDPUdtCsHXNkjiWa394erumGENgBpypRewcmD21gimU1sprm1g3zJkk8jjga8WYVNskCai2yVJ2VRhhKTbNg",
  "key13": "3EQX9YpNFtnJSgnbwnNhLDkB5c62xnjDHAXWCpp77EPostk2w6mTJZtgCt9ynmZScFgo29Knc5vzhyyaoR9KQw9T",
  "key14": "p67GGdHCVJcRPXh9uTZwPJN9SoUGW6oZit5kkphqv3FakRzRq1GEnLH5HXg1biwGieR6vX8oS1upzQed4woXY7g",
  "key15": "2iwZsbMuVzrx894u4rpuCLPjDSsWmbY5x7VTJ6eSJ7EnVeHkeqdNVbweHPaLtnyezWeUefPe2WUmpdKXjwR8VvsQ",
  "key16": "3igyvWonkC5auwoeYTV1ixG1hKbvkVoCRxeYVq77wMMmTSf9jkzwWPA5Y8WFYKNxCiKHqQDD1e9CX9suewkgqv2f",
  "key17": "4M8GwdEUKfiqJSbEavrpfVY3QiQCYCzg2fbEchPLCyQthwCrKnAwtUgXDudgr3nT19LH4uzwcNtYS4WGWmHJuYhC",
  "key18": "21kzWqXsXv3uXikXDZ5FVLohzdqg8UUUcNcwYiUVz9vohgzc1daSVSE5BMXGP3iaCsmMTEJReDU9U9Sic7XHbc6c",
  "key19": "4BYhvHLsH4kcAqzNy6xcTKxF4GWwYqSGqeGxotNTNGMCNcnko6g9fxisXZJLgHZiKBVdmChfgMRtsLwTpfXTeriG",
  "key20": "3Ny5oRdH436J9BZ1ftQcVk9upDuccqFGCqABJN5qf47p7FNboqBKqSPk2t4HSbdVbEGF5juCH7gGdz4moKpeGxfE",
  "key21": "5LuqQhK9Jo1ScAWW4xZ8xV6eWX7nHsuhQAE2iGfoxUWhsHkDCDNHGGCMG6b5xvCbDZLLmhjavqceTMqJa6gYmyLd",
  "key22": "2TARF6NkUXgS9FVGZXGtPrPVhmDsTkXTZ8CXK4nnDhJW57a9LQvFScoiStBGiohELb445eL4wL7tjTBG4nY6rg7C",
  "key23": "5rSn13VNiwWo1cqvK7Zg8C38YBvN2MmNfQXQHDdh54JbqUcpQ2kG8kRfYQVS66VYbvKCg3Fp5CrJ5gJB34FfxESi",
  "key24": "PXsmpdaMeHiGSzyL3MffPo9iRc8ogL5ibeGbvQTCyTWrzKPAd8xDYe8qnW1oimcGikYK7NkaeUgqH1PSpuJSbB4",
  "key25": "M9XHFBftRjPLH37bukdSBDyRWNit2Z9sHwtvvjEwR1h1ECGtFCG8JGpTjxiXNVdmQKuiQubt7EKzHAvjtfEPZwi",
  "key26": "2GLrAHbP4cUsKMSDeXzbfaZTQhvfXxYWhWhN5FSuckPguNnKVsL4HiymixCQiyinWz2DjtjgccUWb7H4HyakTqo4",
  "key27": "5ZLgC9uHThPrAcA4fKh19L1zRUkTxuaBjNdxwWj76sLHkjLqqNwSJoT7aadgUNRNJWYPV1JyutURCNV6MTbzjnmE",
  "key28": "4zwGxyk7wGz5J1HYMdDUbsixF4PmKUJDUpP9cqneckeqrLb1pCbAQ7iiBR4cTefCC6pmFFZGy5nASYWbmfJDGHmg",
  "key29": "AAJuz8CbYuxoruwgG9Qn63p2PgnsdNtKzdz7GaKvX3giAhVjfeQ4RfJXidpgn5nFyT2AFGmiJjYK3TVxg7vXzzF",
  "key30": "5B7x5HP9VsmreQEavwL8TQqYDevcEtAeumY5d9HYHZDMrnme3i2cvM7RawoEDda1bAsQyqFbh6iM3wPVJgUMs7mk",
  "key31": "61aPuYEU8wmsn9bXFQDMTMeKhjvEq9HpAPpiWUnKKqGzbWnJpdk5imrnuKpAxKa5mCihVrjBt7QJ23ScLjuqDdvB",
  "key32": "4KoFKd5ahQeZ4HCL3sr2QxF7ww3Bkn6sNGQGjY4cNHzdPtbTETkdxtA3UdTVd36Loibkjgz4a1xs1aXukES8TzJu",
  "key33": "5wMWBUtauaovzN4hZK7sPt7R7TefQRQv14L6xBYDAaXqchEaXgjm7XVxMmJYE6fZeUXfJoXeaC9DGYmuoq5e7rTk",
  "key34": "3NBARZDX1LCXR94H52nF9YhXxVugLZHyV3DdyuDgSLaUpwNEGZfBb9eVBpFfmssYfVowuKsU535qG3PNnZEDwm69",
  "key35": "2J3pp62TPptGCB7NzVp4okqepJ7BbTJUwBBfPeiNnaYsCFN6UWn3KwnbwTq4tMdakgGjrdGnyGmU5UJNtQZejFk8",
  "key36": "4HA3Tk6nrb9rVa9wY4t3Akr6H5E9HTG2pAnSPmZuH1GNmwVbZuF196xc6Vmf6SqtSpRHHxXDUgT4WazrVnc2Kmea"
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
