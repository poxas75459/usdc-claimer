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
    "2RHoyC2swBc48VzesYVxUfB46dxdg1nQLAhQD1PJUQgDK35dPbXYSk4K9kSd1EtKgNCp52z2um3S2dgzgue6rymY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uVXuefDUrASsYKrC8UUfmUGo1nEHTsxe4nGAttawZTorWUbBfFXwXGqs8JDo5ueinUzEuid8qDLd4CWPPn5vWF6",
  "key1": "2wsAf5RmbCEt4Ljk3h7ixs9BZYxm4hUcGGtGovfy2VUyVsXoXf5Sgz1Zn4bY2msNyVuvk6cd1zUmtd4PT5o1arpt",
  "key2": "3C4ntrqNa2TmGYu4xLu9dTNmRrfR4JqXVgyiaZas7meAH7XcAmRr1Mbv2bQUq9iJFkHww9SSaD8ebiGgHdF3w7cP",
  "key3": "4p25YEBFnLBVyKzJPSJjcTiLbRpCH7P8tnGRxkggjXU2nKGARxA7ULm8v65seCFEn5Gv8BB3Gy6iJ7YRD4yQ2mP6",
  "key4": "49MYTSatUKfGAr3MhwAStqeBMhLKixNL3Bn9GLhuXdVHCTEhKZZBzBE2nndyy3mZ7MHpuhyojLYupgHSmpvbSz7D",
  "key5": "2RJLtGFrbod3vJH3aoL9hY6ENk55syY6gjxicqZ5Si87F35PtU6RVorHXCCR9MD5RB8jvBCnGecZSjPKbVA9HTJ",
  "key6": "586EMEUzQbuuu2Txp7d7rpb6MSHh5rTc5EPcPJ9Hsnx8v5rfvejrogPGV1ADFNCojFWyyvQbxVZdubdcpSGoLsVY",
  "key7": "5bsFp3LHAYwA6gSE5HZRDqKLfQBt9srnKcRGUfpwFo3dvKQHABnJFHSYBLqmUDN1BBYxDnHkswNcZMH82gFxDCyU",
  "key8": "3wk84ik94PxC8q8ntywH2HHkx4WMESxpKmGKMdiMHwdp7KEmNUinPbrM26cESorcVgEZvjJpBq5Fs1DeU6J2zN3",
  "key9": "Vd27fHfGF3RExh4Bq77T6PWJziyBqEPKCXHM91DUShAWdVSi3LBa4UwSJiwcsciEHpLTHTEiyTPsmQ4xjgFNNsk",
  "key10": "3uvivxBTD9DUHkRimqjLXwToCZowTCNG6MD3qndW375fNWurUKGebJ7NQnVWbDWHeCtv7Sk2Qkb1CWWGd8jGKnzX",
  "key11": "5cEfsXWw4YW3ckxwfmVtRSveoiZfrB9UgHc6JJi1cA87tvn2XFfGKUticYbkvcPgtjstqdfiXHsGuDmvgtaSH9xQ",
  "key12": "3J2r45ZHP1zdruCfm2X3fTEwkWXhMm6NC7BxBH34fTosZv3w8BfzrPswpiYGYBxNs2hABCF6tU6DoJ5Ha24hJcnE",
  "key13": "4EChpZ9RFHkgeJZpNpD4nR42BGZ18T7bczGom8kurycsZEAAxmNe3EM8KgyZXrrJpuiQRgDmvch7wpiEEFJ5PD1n",
  "key14": "4wZMT127mS3YdywWSNFQKn6Uxhd2iuGsxTrS492np7X67ma7w7wEwW5ih75F3a6bGNqgb88ja83v7kb221g1qAtx",
  "key15": "5yxz8bRmi9NLUMETfBphv5htCUnyULffsM29Uzy6dkZEf5vYzzDTQqi6nrCbSMrj6QS3xCY4H2ExB3v2wSVNyFjW",
  "key16": "2eSxGh4EhmpCGVVTYZAkVweUpAfMkWTujVEuKVCPDYRqCi3UwkMZX73nPTSv8Q6Z5J6U1RZvQFNqwxT17EgMRSLi",
  "key17": "4jMzKmvD7euz1Pxnv47w89o7ASG6FSixDyHBK3XHpGgPwpcvnCPXsP5qaNVwfjvdgFuXqV4L39aCAqYd4gG4spcg",
  "key18": "5ivqYVc1NjpahvcQQR37aFhUM3cUvrUybZ8do81CfHycsk9wQ6Gi4iZVDBnteNsVAzCRunjSYGCo3QnKSgrzBWvh",
  "key19": "3rTUyHAPEMMNw1U1dNBaVF19px9pF1Ma4YDPuaFa9w89mMvdb4AZXqFPqjNhCkj3Q1Koxor8m8yuVPp4PDu66A76",
  "key20": "b5QYQoMbxbpsjZsGEoXkh9iZswn6xwDZpttFb9un1kmWTkSsosbfePy12GjBjruKfPL6fRKM3SKfo5Sg5ecff26",
  "key21": "4mcka28C9LwEDoeLwcQ4B5tCCsQuvND7or6TChsC9a2S8veMfHjXmbeougR7YqKinURje2XVUQWR7YqvU8PT2p7x",
  "key22": "5pXJuySLKuoXzvxHjsn6q6a4dTmaGSxhg741xwtq7hy81wK5vdzg7hMYsVY1v5pRLqTeP8Pg9FWLm8beXUhreFdK",
  "key23": "jadmsxUo16pi4wFEnxbHrQqT19zZPHZzN2ky6BfSQbTZZyb7aoi9aXS5mjvK5mZctE4596Uz2QS5nFyUS6VJGn5",
  "key24": "pCbybG4QQC2EAvcnJGMKkhb6VS5d6atEBaK5mUyuqtGEMYdkXAJW57xRc5EmXkCkbYzxViP8PrwAbHZvXt2Gbqs",
  "key25": "Xb2CfMGcfSErxGy8HfKp2YHixxZZwzXJbvWFMDkMftTduXKjA4qUd8dQfGpsBqTEP9BwiBWjVpco3u4G3kLMfki",
  "key26": "5qWTVCQZSb3EjFmT6zYxAHsLEB1CF5E72Nz8AhM1i4CFMCLwcfpHUDVfAMVc542ewo1PmWofs6QbDPFFPbuJHmZP",
  "key27": "4aYJxSqc116H7TLh47zN8KyJNYSKNNyiPWpKgpY8GCNmk2TtP6ZmjHGKEVZoT2Xp4UxwpSSVcFLLbZRu7jCXgrHf",
  "key28": "5DKuHEyLpR2XiUtwpQuFGTDs2S3WwfERtUACTMcUDTKk4nKqPYtrPZvgGHLB4XQ3w2dQm8mX7gCaFBNX9E829RaG",
  "key29": "3o8Ugz9mNuNGpSuXSzaqUrAy6wwkNqARHYbFZCj4zUZffQ33eS4m25qZK9WEzhMCiNvJYMz1dSu97LJEGKmWtvk8",
  "key30": "4fwsDhPDpxreo8rsF18HZ5LR2LenU3Gffm5GPiX5VkrXbPuZc67MH5vgFU4dSPw1qKrzyJBTCvjLCZ53ENTMHnLj"
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
