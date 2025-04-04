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
    "5VpsLnhjRyDQmtnxGYwVku4JNs5Y4z54xMqs6cnYf3srwqp8xqKFtJYMXbuTSXsgAR2xSAUVLgeXjiUpUbzUJJid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "emGtsq5zb7zxcwvpDKX3uJS3JhBxosUbq5tLiJivdwgJcc4JKL2aNAsHrTVbEBsxftLV8JoBeVvhh5Sw4K9Fnct",
  "key1": "3uMMbNnw8jzecdnMCG11x8wnQY1RBFKjeNizV9V5MiW7xKHguU8HavwWr81BBGrkXNAsS6wzXbU82GQTjM8fwLts",
  "key2": "jAyUeobsMbPisvWJB3iH9TmKRr8TQWTwpgqM4UnWgBxuMdvyGk419pAAG12nAQifLDyNCxQyVvEwE6TxU59Nrfp",
  "key3": "4SufdXqMrMSuL2spUNKZeMFdgA83zj67STT9Ejt9FdqP2qZbK4tLZX5PkzMFBWeEhffkbhbsTYoGEL4zZsfHv1c1",
  "key4": "2rEhMxnTG4bbUJe7YpRUTawFonMauKxTx8Vd6HPnMCBCB3FaPih2EC5ny19UtJz8AAGrREVNeajSnTvyHuUgFU3w",
  "key5": "3DNgATNRPHAMGN84cfevGpALnKCw3f4ucKpX3RktTX8cg6X6WH1PTwGiegNHP7M3n9swo7BBC6w42AgnwprdhuS8",
  "key6": "2xbGp5uWEkPQrEEhus1wCEbgL8u7NXxHmzzAy7RHVr2JE2KL4MX6QTtuqt3pv9Hu8k2MgZSgBug9zkkf5qZGojGN",
  "key7": "4W73xFrEfqZ3SFzPUJARNXmCZ3q4gjUFYaDuHLTCCjk1epBxMk8PFyaPLyESA1fx44snoVRmuY757yEtSqdYxCsD",
  "key8": "5tUkkLNivm5C2ugk8zW6DDp7qqWLZnYoQwCC5vu9tEJ7cfkCuLGBkGQAfPUo67sjznALDikC7eSoza4Kc1B1T3r3",
  "key9": "2Aasjod7NWc9ELDJEaAfcd4EAFSiAe9ft1WZYNQLRxixShHQKceZdj9YmVRdU7BfSZ3CuGRqA7KPPfdLNQa7LtBQ",
  "key10": "55JFpfSQiV7GLxwgWx5HcYnbZCuSwaMJV9q96oJoa3mNHHKaSFjbF9g5UfGE88jvZouH5bfKdLqV2jT6dCtfE8hd",
  "key11": "25XsPXV2aHpPfbasSw4rQ2v4nUYfCUTYvq2RwPYien8fDBmAKoGiNFdUzuCYwrugzJ5MnRZ6Ek8n7q9NitbQZtEw",
  "key12": "38QJqfgJa3qsAB4cFBv4PVRh2VDSWxKBHhEmXgGBr84bExb5hN3rfTtNdskftK3UurP6Mo87cq1qUVAgiocE6U58",
  "key13": "4DVYeAJL7EUcWNuBUxgMjt7Jbt2BMcKESMLmnKDhEy9BQHnsbhWurjgmrpqVb1vbkzLLQduyZiCQgeAnym6UN8JV",
  "key14": "5NSArEtGxQ3KQ6gbHYrRzMcRH7AibHwhWYPgqo95zdE96ZStRxu24P6ECQ4nNyzAhsTMEjaRwkBLGEwgjDyoUyym",
  "key15": "2MQx9SpAYg58whqGWhztreSYXYCcDSHMt37w7Vj7vSXX3VNVwNDrr2nzPkR69oTvWHy8wJtEMxexGJomn7j25Mn1",
  "key16": "24cL4soNeYv9W9F2TnfbuzpkM3JWEwd7v6kVoe2iKEcEuZWPiHEEhzyiVmqKWZjJLBhfCVaubuGJbG9LJuPwKacA",
  "key17": "27ojhmCuGyrvchn6m57BLQfrhMprksxrEzxYvUbZWgicbwthzS3gXkCiPWA2HGP7AzdkyEMeMChTc3zY1JVdh5GG",
  "key18": "3X2M4Vet1G2CUVpdhk4ap1H4ut2ax1L3SVpfSBN2B6w9YDSLb1Qf8R3uWstBwkAcMFYzGvUiuPqnj6ynnQh9RL6K",
  "key19": "2fSoF1zQ4i2BkJwAPyowAjG6VGqmUNaYXfSAaM1SMgBqKdeEyEaYXMd24sEPVz9y5AbMjwgrzbU73BcvukQpm2Te",
  "key20": "3ngvnUHNSdwtr3pmKuTvqBocZTWFhPmpkmJXEuQx1fiWTcDSJWmW7FPx26MoZkmtyaBuk2gFQvjM5CLg8EPsKwJk",
  "key21": "4ZHuytzQrhBCV8s9P4LpYjFp4Pj9eEyw2pfMky7EU44JMshw9qso11ZociRTrtDiZr1wRiLMB2USC2pG1LiJkGEh",
  "key22": "2duu1CUCAk3ki1zmwDJ11FK8ZXqCwiTNQWtjYGLdGEho419Le1q89qiZKkkoXdDeNxHLGyZkSQMPM3LaSEhBspET",
  "key23": "4ae4z2eXa7ofM3MA1PDwnx8i53dZmL5cLHw1xtUu8K8P4sqaiai2SyZdurqTDGK5nbnH6emZzQ2wWDqsMRTXrDvN",
  "key24": "cmEbvFFM3RPB6cqrpSPKF46biUdtcy8V524G1cS2jzSGfTWDf9mgQtkeaBBYZdHGX1FTirTj1tAEvMFtXUgKjb5",
  "key25": "2akBUZMbs1iWToJ981pAW7XAuwQvwEqM3qCkynd5ciGHDnNdEMgf6dpUzfVGBgfAG1VRLZhcpo3NwnEWPEPnw3mG",
  "key26": "33jiwoPff3zSa7M4QcbYxp4rnAjkudXJUKQtp4WDHdKnPdiLpZeKLUY4kt6YWF2hPzqhqtxq5Q6twtYRt2MhkLYj",
  "key27": "4WBVs8mmP3zSbNKdu1PDSbqC4uYQFAyZLDsmvL3bQ957UZsozyLmzAYrD6tHXLpF5gGeyoMWM6Fsme7CaMzYJtaY",
  "key28": "2qqAsDRmagZA9XGTccHBz44DiVPdNVTbY32f8AZqSsjKq2WECVCXX7BTtdT9c6VAVEF6bvewnzRX64KGQ57cS61G",
  "key29": "4WBDdcTP15eLNUVceMS1HwjQksuzRZXnFEW2L5B2cyDrS8G5XpnKLQ4v5F3aJrEBhTtUkZn3mLpEnK1cNvNQjXsH",
  "key30": "5ZCxVhhVDvaiBTyeAfWc7mgd8ishr2gHxz2bhiZ5v6qpzemZNFgZB5wYxcBf1CDu7Uvw2fTVL3CsoZkcCM15rjsi",
  "key31": "n7yqbeAxHrVPCe2xiwgp8Am4He4ZV6SMCvXuS5isrNTaMFE8wN8rji7DFQRhoZUSie6uNBbaUhzXWZxSsECpHdM",
  "key32": "3eMAF3KgWksAK2ngGx4rTMq5UGWXqZSZzjGxkoSnew8GqZd4HZCpoHbADNw6eTaQ3unU2zvK35SaQy3SsmEUDATd",
  "key33": "4v2Gvnx1gXU2b7BKc51FWPRvL8K7eHm3oVCEqdrBZ9ApsSWQmm5bpejqxx7y9VAa6zyZMYyZ2Thu1BWP4z5o7byd",
  "key34": "2sxepwDqi8rQxPGpzc6V3puA4DwiEKdE5bw6jiKYVnLkNTfvYMCyFKw48Sc34NL5FcLeys9uyu6oiRLfvtNzbqks",
  "key35": "3VJtjcZGMuMUFnA6ZDsG9yzSN679HTDsbBNCmzbUbNKTi1axUiNa4Vns1cyCitcnNvu48fXEo8dKAEZwpkoHPMXF"
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
