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
    "4hRV1Hj8JHm974qVJxXmZ1WAZGzuiyE7L5jdkmMZDJwPNAFid1cSxNhFZigQ9ktucofjwWcpUcCHKtLRin7K1pb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b18X48TqJNTvDsAw7pnmvNvqeoNDAQ7YzzS523XRwmU9spvQqLEeYBkaUDSgNUaGrUFvsr8RBQhZgLK91SnfUhg",
  "key1": "32r7KkWA62kxLS7x8tKTfXg7bZCzqo8JtEYYwCKX539hwMPsV9bdpzjFCGRNK5SuxL5amacJ3tirfxxeVP3tomCx",
  "key2": "2dz1djTNCbWKFbnnRdpFhaVYHnWVdNEbHPn8NhVoTbwREon2Aw37c8GqEyNk1B35JDQboM8W82Ud6Vba5rMVVsr1",
  "key3": "2FQ7b5ENjXLbWnYDw6QU8sbhfRKT1KZasUsFJuyXD8YNYFyNXiZLpipktcwQDrzYkn5z1gvE5uMXfUmj8owyehrH",
  "key4": "2ERBL7S4hx7byotMZESWHHhtQpkNupTXU9eL5NCy3z8H83urbx7RFRWKmbdZkWtnWkY26LYjqRqW1iGxKYhX7g4e",
  "key5": "4ZmtPejQhkPfXvYiPjJvrb4UP1Ey8tnWaA4nECmbtjvWJB6DBt1Bu1jyCLpHwzyYUVjuL2ah1CfPGK3dLushTy3f",
  "key6": "3zduC22DrRZVPF5jJzCDuiKzCtzqVLoAnta66chgKRWLNzG2J4vKXvpbet5VaPJ8sXGEUwARdtKb2sPCau88L3iD",
  "key7": "3Joj5FcHNXzWbST62JaxpBSHQoHUa8yDrEKhMdXjYhkgikUPRkvNPSnr2o2GVTpdRkiSutnCYDeuS3pRED8nQfvr",
  "key8": "5dR4jxvquKhNthP568dCGLiwnJtpFgkLGipb3f4n6xxchLJTN3ybF6ssGMDx46dE7XQfNBxxB3qNaVVDrsRAB13U",
  "key9": "3FChNGnmGBZkRYwkCStCadT2ZDYAQzetkgZB8CLPgi2K4znjq7UvioCWyitStw5xtZvcpN8ntT9fsGz27VcHpBHi",
  "key10": "4KVQYSyVTVZZTdB89K6ctkPnHEdKnCerK7UbvUG5Y7Bt5VsxpBCuayTh1e6qqmXQZL7yJYoAsSNWGWQTQ8V9Gz8Q",
  "key11": "3vxNwmbKty8R5PipJZhTZmfAETDHjqyEyEywaVCS5x6YEaQ4BEZr4mpbYn1ZPcfhbTBVcn8zJS1nzcuRVmbkzwJp",
  "key12": "3VoEjVjC4q7nZ3AdCQwd1vrRA3rUFvPpULSR2HiM3DGVjYCxw2eXhtpt38fYjYonjPUDHjbDWQHkwcQeYgYYqRLH",
  "key13": "JXvrukDDjsRAFaosFZrZCYBA22WWeCuZSVURrZG2Jx2g4vKdb1DpsxU4oDcSByYVzPkN7WGcdERNuE9joM89qzi",
  "key14": "4sHgFVKJmTzKXXC9zzLjja6uXCQyeJp6uYyWXJ8R6PmVWF2JzEkwxueRZvBA2UHaiE4EWDaha33eAd7mdiREVjzf",
  "key15": "4R5BrBVHYPyDz7QS8PuiDABzLpYejLS61gCiFgG7E8bRjzoUu8xFhm54Nv7PwX2NfMPKuMpfMU75eqVyBo1VZwEF",
  "key16": "31WubYuL5jkukEuuwrwgER2am981XpqVuAm9nhUxRfxGbGVBTXwYAQbLBWUKax3e9LHa2rrmjcX3MK5XPUvmwf6t",
  "key17": "25eEVeorsVmRFZHzkibKwvuGRSm3T67padPaJCt77Qp81LnsXwjbg26fLbBoqRW2X3MQpWorysWZ4mfAQNNuLBKe",
  "key18": "matz1EScsY4cGdMGCRNsm3LTZXh4DFyLbDMnDSZqt6AxxeUjmSutHqJaHyzLofgfdmhT14XwRckceLwGU1ZSJTC",
  "key19": "2MLqm5szwVKoc328VaWBqRM5u65bFKL9JqXMzbCePay9V4CbdpbftBmXkd4RK67gYkzqJV6G23NgF4KWuwe2sxvi",
  "key20": "5XXw9WxkWVAuMWoNr6Pr1VWQmX9bpSo7gm7tHHvFXTvFndqxAF9JqqiCVUyu4SUEQcrftH1EbBXs4H7YZPWXFpzy",
  "key21": "35PK1NfTh8PXDYJjVZE4dSsnd9KKz5uaZuUotv9zqJnjWjfB4VrkrE2KeXUz9qSTV2ACNzTqSHnLiLvLte85LJSF",
  "key22": "5f6SvNm3kKFr8LmHN6H2Cp55ciCR5suruSxP3Xz9DzGRWgxf2vFXqSq1fr9dpv6hPDpBDM9sEhsQUYfp3mFE2uFX",
  "key23": "3n3e78GQ6XkxvubV2qanjpNz7XpmR39ZY9FfqNFsPwKXiHYZ8cVkJGa3HinKHZgWy13hpXFY8s8b1fzPPcrxioFN",
  "key24": "54MfnVdiRk8kdcBZHtNQMaGYxCUWyg2dS6QcSe2tcZdtsD8FpyucDdd3YfmxuQAJrVGWq8KVKV2MVudscQ6Rt3YH",
  "key25": "268gtM8sitEW4KBj1h7YFEuZ4owwPkr9uPBiFn25xseCKKhwh5o12L244HfGmrUiQ4VMVgv69SiHF9CYzwqUqo3y",
  "key26": "5sMBp7Z48BcqanbYhcJjKeiW8XLMDRijUTzrpNJm8eiMQheZRuK5JcWZ4dou2xEo12LyDvZYypYg6fPFeeU15LRR",
  "key27": "2iZaqntxALXbqh5yhEYC4cbB7v6mK6VAyS6k3xQCC74Gq223eUifWcMX7qhVXbK1bLj1SpGUWwiWSbQuk11fH6co",
  "key28": "4cF39rcMgmNwrmvXYaL2tyvNJ6Yc7zsqR2vS9mJRShXxEyj8JZEiJLgpXGJEm2hm7cYvDrGkoPth3Zm2oJzYrEYq"
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
