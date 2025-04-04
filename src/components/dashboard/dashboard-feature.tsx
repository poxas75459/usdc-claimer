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
    "5xcfKAEnAucgsCahssfqvyxwmyfFYR9DPRG8RU3jAVGGGpTrgFwRNQg6HfYHEtovBvkxoXZa6i5obCP6usVhSKJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZjkbPuZY9pWrudfDJimmgd4M3wWG1KJM2Sci6saptXB5Rwn4hYKFHLH4Jf2dZGRy4icc7QiNX6jhzHHMo38g2D2",
  "key1": "5xipHFg9hf4Pdba47K6gm7D4BtCDiSxYiM4HS9wjMUpKFwgqfUiqegtG14SzyuQGzAJ93WHjscLHuQe2b2kADQaF",
  "key2": "k7j97ZsT5iih2FMX4ZMohGrkZrozD7mF4vd4zHczwqXujS5g7He88dmAkKRqiPAFz5UPtq2oganERGuhf1dBRWP",
  "key3": "3SJ4HYDXoLjsahpau93CaPg3ZgM4TiwWv15ft5FLeKCqBGEE17STrim1KJECJZNUY8xTDmDxFd4D5LyYYZhARntA",
  "key4": "3is49vwEPwcgRUMopkPjsbvdRLxBoVTE225XDDH7wdaHbdfuKirvWXaLJQWojrxgDRikesrkPRRJwFoGtnxNZPrm",
  "key5": "4QypJU5ZJ3A73KHTi7R2AjeSUdDUi4ZuyMecrDtc6KEXyBtNG3rDWNkYGM3om44gco9fSAzGDLnZXYkhsPuwU9dT",
  "key6": "2dqkcmbPgDJPsPPx2kdgoVSHHwccbhCEsthLNyPHmgNkf6aac32285J4T4EcjuKSYB6yNiPEx4tQGKhXRiVzaU7Q",
  "key7": "4rem7u9MAsjvHtQ74pob4vkpASUztXhJAjBy3eS4wvtc23N7ANWSHNiX4SXyEH7y8uhDMQnXxrkpDi92iQLqboQ",
  "key8": "5VwukquxVjmtJztHuw7NGYfD1ix9pvxc3NtgYxJt2a2pS1bp2tQv2etGiVbQmFFY7H4NYXnRFvUsuumbcDYVWiiE",
  "key9": "yvC2YLuKBXGnQcNYokD35JKJkgRQzGw6AB4rWiTRUyHEYanZZRHRnz4tcuQogmhrNEPYj17UzQKRRNZdRnTUkWL",
  "key10": "55wRGarL6Ayzn5zNQExuhXRwr5ivX7Wy5GKnbPS5EmY55vZRBTbBeLMapj5gnvkLFKbWdnKu8T8JLKPxgxsNJmZU",
  "key11": "4urqx4Q9FtLMA3TByqUS4GVYMSFiRuwthGW8VadVJYFZPftBhmVj5Mw8hueN7hPjchynqponkW8Anii7BeeQvE9m",
  "key12": "4Q96YMAsyfyeTmwgnPjzyHpJaGsuL253U6G1qvZZZyWufu1puxaq94g2LFz1XM2DHpcAsUHZxQC2hZTXcpnSy9Kr",
  "key13": "3FYs4mjCLNQnnhqPcoMA9eBHWBgbSZ314MosXpjKj6senWHuBGkReq7DWgcmMEBaparEZXAcpKxXGJxDR7yyyLPv",
  "key14": "25Nx91kEKdEZNP8EPnFbBr6G9xfWv1LfVth2og9zaG65Lr9nfsLTkWHnrBXNQjrAH9BdbAEy6xS9YGYc8PaphK3x",
  "key15": "5QP9ip2ejRYJHdESdZB5An7DJzmh9hxHFG9x7mbYaq4e25ZZrGfdP7Cp2ouSEg64FiPy9TzpqiezgHnxUpRFLd6M",
  "key16": "3x3YNw2YPZDsuwd5X1sxGuV6Gg7m1ykMc3ea5qiiKr6Hswx9orbLvz5BuLBwMrvUD1QnyuJ45ue63fyatxP4zxd6",
  "key17": "dkqo1b5Lstq2epQvwAJ6u8VgW5i4jQbZgBMie4h3EdRSPvoAfR1NXQBsZrbASCofTrowjYdrmq4LdcjTsgNbT8y",
  "key18": "3S1PhFqbmYhzNmxdQxBg3ocYdeVi28ujh6GWiYMbq5pJnykLwvFM6di7c1ddpNQhiFAAsTyQbizsSaF424aMU8pn",
  "key19": "2q3uZow3kdA5RT3PsuDtUVWL5aJXKxEeZ2BXFb6iLgjNiQrWXfZnLv9a1VZN6A8txPA8BXicZ24i9H8AoTLv2PnD",
  "key20": "6T1pS5BjNrYN8zUCykjXkJxbzQSuYger7vvTkzM8E9d4dn11oXfY9RYSrGSnfw9qY4vP9PNnWiH2dYzJ9t1rkaz",
  "key21": "rTZgsPq6PCQKvvP3HLHuYfvMsm3juEo4zG4mtEVsdgVpjob38ZRmEkKmcF4CfnFNpmBTjpkYUzD88aoWuep3gTi",
  "key22": "3YLeyDFWAEJyNAvsziCh6qvfjjxV45TFn8cML8LL9ik3Ei99xsZ9dEHY3b3c2BcX9VBxJcLtYdNvjpYEY4MisWrf",
  "key23": "4nV3LohyXesiZevMehbUbGiy7bRsFqX3pnfQEkUdJW8J2TWLa4VG3qqxyRMZX2A2N5DFqrGeyphLokcsXqUV1bqL",
  "key24": "51avU435nVcRrn9wAVQDMCxX4o5ddsR7QRjL5Q8vKy9VtjWMkWoyeBuqnkuFT6AjtqweYbYmrBr2LGXD5GpYcpaP"
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
