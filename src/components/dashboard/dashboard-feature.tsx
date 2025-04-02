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
    "HNgpxfxGEqSc1EiwquopCHJLVRk3Xiz82112yjZBALkCwCGWMfufoQ7aqX2zeaXgEb1BnBaq7e4TvBu8YSkncrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMMQvGt5GKgz1rZpr6h83eiRYwmvyrGCzwdNvJDXVGP91SGu7tcvQMecuLZUGHYSY18x2eiMYS8BM38ysF1912Q",
  "key1": "67nEM6jqkCXyLbRqRxR7PHicmYk9B71PCPKaobELZVtCxVZrvwuHFnDjnHowcCtNSyDU9dPRDpbnw6LYJWXQYTDx",
  "key2": "2LpHnHnoLecqceF7qm63FqLDsWuy16vjnS8Mg5ik5mYnCpHSPYrKPqENiyuBJ2u8H5WGsKa2wntTt43ED6J6tcb6",
  "key3": "5ApM5sgLyNUkmqNqHeBsJyoMPLEt1TKX8rY5KUzmd5FeRaRdicbw9kqgTknxzXhQvKm1jniMaWkhjmBWXXGZHqCz",
  "key4": "67VYhXGDuzGtog7XFiwqVKQqvPcRn1M7fHo1T3moL8oYtypUWX35BkVH3EJzBua5wu8wSpvMoyvaeNBssjXhdJ1q",
  "key5": "4Xj4nLygspc6XnL9tkhHmr3sKoX4Z29i4Yn4823JgBG6d1byYpVEVkABrkW4z7ZhAgd9ZNmCGWgqjeyzC8oLbbTN",
  "key6": "g7PMLUCe8xSRPMQjyCSCWjhm4argtQ1YJ5hNcFsLYTwyvGqzV3YZkA9HBjv3no2i9MXuwWcfCvLdfuZFm9fTiWB",
  "key7": "3KUtJiVXzwjvkJLoCBCMPJDdCUtRE3Moa5Sad8JFqoFEpeeNYYDgHoTPuTmW1D3h45aUoSmiD7zhwZiQ8XKUYE3G",
  "key8": "Jko3SFWNjxoXmVd98V92skcdMjc4ke7m2PfQCnks7GCF6ZnUvVHWKeKPejzRf4yht2LzGjGaK3r9MbqMs96Rn34",
  "key9": "52E3yYQZHL3A2TCbFqcjv7btpkwPphBvvMLhFLFTA4crLoMSTXkAW4QZthjWUQPu9BJocxi5adLh4xst47AuGVsS",
  "key10": "3UKh1bpJW3MnmQueEdKKREkcZYTbeGKe9hYH8E2nPqvkjwDeYxtGPRwnrq2wMjdF6ij9hTnh7HLNYLJLFTd3qPmC",
  "key11": "65qWd2vEb1Bpj985dDkaixGKYNnX27Umrzd2FdcRNrDzmwsrzXBGsZV6YXbPCdEbAJv2NBK8LxHWKGMftadmSYzA",
  "key12": "2zH1HcAyq5Ln18nRP5bQ2b5FzYu9XCWUPdSY4SWf6xfmQzeVjYP3Vx7s7ZNiB8dqtykzsNT4RsHr2rEoz4tkgfSS",
  "key13": "2yBcdX4CizU982kHnQqZvDZm38RcFked3UNA1LQfHo2dsY8cyDSDx8NrZyUjrp4Z8Yn814rgPC3sggBBKyJ6JjCU",
  "key14": "xp4nSWwDEPkehifDD2DS3f1V8Lku86uAMSZFSds8kngXLdMyibGXcAySCnWcUtUJWMPDVtkwfkFtDjXEsfET1f7",
  "key15": "4v6FP4j7pg89iUXhV7bHPscKj5eBGmYcANMdLqcc5pYp4dyAhNtjdry59QWZjY8DHWgkRhR91Psqgh8WWMBCjJxv",
  "key16": "562acFfHw5pHCmwyG5JSh1sM6duL4H95J1FRcg7WGSc7kzWWUBY3MgKxVbHYpAVTp6xVPExdF23pYQCqLZTCcTn7",
  "key17": "3ZsHBjSUN6A2MnyHwgnXF7Jzhpoukb5WFrAKjZhTvRZL8UNJsEu2TMoxNEw8S8uCqEziGPtfZQe7e55BSRf9VVJL",
  "key18": "3fHbnamDF8GbjKGpGRkc6iNLyoJNsQTb1UZKcukC8pXvvcyTXZnib4mDtZ7r6U4kdEcJFy6VuMmtJnc2Nx1j5uJy",
  "key19": "2MKQ7GFRRrBHCfPGo3ycUgBMTuzw9BgS3LMkEFtubxx6rDMPqUpnkLuApDY5ggg9LTg7yUk994LM3fFbkH1Zu5YJ",
  "key20": "5nYBj8QDHWrXHkNhNXY6dr9vB7gyK6Jp4aY522ZG8Z8XXuynBMBmgPV8oS6HXqBmsFkLPsfQxkRtJW3axDaEFg61",
  "key21": "24WhboNd8fXHf1wfPeHtbX2qA5id4RqAHXTVK4g2pBQUh679N5Nch84CvWNnkLZDTu3sJBqiuvdabK8fhVub1Bd5",
  "key22": "5K7kLV8RLrcYgmGzJo5bDXKCvajauLjpdvtS4ZpfTwBixKmzKkZZTDYWLvsnYvyzvdXMpeZWdZ5SiHZ7dxUzaxEb",
  "key23": "6Axu8pmzcz1X2ZJVAdnZv9bbPWcceKbYGJGpysZta2SrLrLdyD2fr8YuS7WfEipUVRGWrvoFaw4ZPKhw3yvWjoe",
  "key24": "2nZj94YRgyPyzypzTsnaS9jr4A8sS8dGiq3MjW4L94kEiYvW6E8QMiMZRZj1QymRXp5E2fKNoF59QzqRWWKyAHDT",
  "key25": "QBo22HhnJQ39zqS97JA2yqjfsC9r9bGHPuSjfaVXjUGjdqfhdQoGeBCSYWuyQufwEmDhtunHsWG3zCXd35JFV62",
  "key26": "kBjChhJvqynbNvneZySfNPqzNgQayxaRhfFFcL1mQJED2ERnK5P3HBnvhRLvqmFahJ4VufTc8Tvzgw5D65tRVWM",
  "key27": "2wBoHpQt8Btyr2LR97gZVDM3EE57YBSFnv71JeYoNsc66KgmoguMK6QFUP15dK1JgYBjP3anpcsQTNv6odkbgVhi",
  "key28": "2UVDAMFGT6ZBr5w8Boraxhg6BkqN6FDYgajDPBjNTPR5GpYYQFjd6p45gKFrBTHzJiPL3tvMz7jd4RExK25fXPAD",
  "key29": "3CYH7EGG5PCk3UqzTvruCaYtTeRUebvokoHy9JexSasLDrkjXbL76vLeBg2p1YeHcbgmevw2XXggpWyeNYtqCYks",
  "key30": "4YidKt7kDkFECoz6jKRFxbF6r4X25btRJNaBDq8FAVpvAYHGQYpLCkMT48W1uCo54Ps43bT3RmrXfhTNYFc2ZKBD",
  "key31": "5zV9KNtuNWCWzgxY34jovajXBSKCtJeB6YhJ2LAKKZ6ApiMtCb4otqZR6rRZ4549AjeB8bR4u3BswQHgSF5FhvmC",
  "key32": "ctA6cgZrSfZnFwcDykKQjVojuhPgQQPwVxABH84GwL269sd9QbnuGqwb18Fn88wxsSPBC6nivoEDm9LkCWm9LJW",
  "key33": "2MR7zmtjiusMSH7K8PUC4uSpWSAMTaHTEDocz9bHLfP3DhvCmXEEbsKC5uyzsK4MEkrrk5WuLYao2YDR4SM8NXPE",
  "key34": "4Pz3CB6SXpfAcPmQqoxKvotzGLJX4EFqazntrcjrNUQcp28w7KNfRSdcRNKYi7Afegpg8tA67Axrn4QUfvWtwSWw",
  "key35": "5e62zk13Gj6hBWz9Rn3iUW3DXdJ57gfrmwYmYZHJeXfoF7ctVGLGDKAEBpjVX5YBGYTQv1qZx2UBu5eq7BX8CojS",
  "key36": "4H33gKNHx1rjdamQNGzuU1ZA4vjMWHsDvYPR8fH2apF6QRt2n9En5tXjcQ5T43p3PVbgckE4rWRDYvUWUvEaYEfH"
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
