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
    "31ctghaM72fpCQNXgaLMTfsmA4K1EecR7S1ecfjuZ9mGCdMp6WXsEYMLi6GyYcYTPGCXdqSK6FDdAsDLf4YyBHA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dr7ikAcQohdcUfUAi2DcysjQYpnWBZh6XcsziRYwczwAgv1FxzzwadZEEGFiGRDvWbbHjtXBfykK5wdEsvutP7J",
  "key1": "3SwyTczpMy9vqhu4JaNjuSkSNy4aHv9ZqCw593pUvzr8UgZm1HoVnpVTDZqkafdsne95Khcwj1nbnkeBWjMeyimk",
  "key2": "2QBq8hRr5mCSThpzoGnqRDcpDMTNsbys2XSt5S7165upAxaghhJ6emNZCMgURwDktAhrnrNBMtzuqML5PAEMAoKE",
  "key3": "5dAMxLTKmpLGMLAeMMuWPY4cX2dSHQvSeW1MDDJAFkfp2Nbf8GavJxWdvrLNGzraoCG717cCDkX1a93fdSCSnawL",
  "key4": "4V6oVoY8WJZj79fJK15HA4bhXZHf3Xtyjth67gMMJRoojaY6oM2CTtuy1W9rQEDJCKZVAxriGs1mWRh1xAaaK2zQ",
  "key5": "5cg68GNNQX9aKxYhHwUAvgPVCYW6heAoubR3XRrAuL7PNsYJLWEVca2ZWh8XgsZ23r6BYLCQYWu4Vp23hCMQRciS",
  "key6": "ofrXoXhrbmCv1sZswhFWs6aGWSLSSVfZATb1ZThpQMDL9ycnsKwimT8qBQtcxn8idtXewQG811RMEmuHbfqB1ou",
  "key7": "25icpBiR5XppdGinPDtVARGu6sBdxh71jDAvGjjbEk51rpyYxCjBMWsqWMFLsp2svTaMnwBHmbCiL8fT5vL6ktjf",
  "key8": "vkHc2pgTW7m9MVLxQV4gFcJNBs8DHFw6XEYu9fXGJ6P2ZYsqGnBsUBr7RReZaCzrQYvspS93nXknZkoYVBUPmE5",
  "key9": "FpJb7WAVv1tCw8zbrjhtBiFKAbBUJvxFwWsQ6tDqiVe75TemMqipyXZ6w8b4x4z9cuxywEDkLLFMKWyvBY4MdP9",
  "key10": "5ALh5xL9CQ4uTP9WQmqStuoUUMVomgm29RPZLcc9sDJXPPWJW47K2QHbxrzheArEZX565PNz4Sj2zvikFSW9RDJg",
  "key11": "EKKamtwwmupwuWizyemfVDipHp3H7LyksktumV9m5NZ3JxdL9dCVPzN8CSRQsQrtBrzhEoJ7Ei4qz9TU5JdVSx3",
  "key12": "3bemHdFiGPLDhWn6G6NBu89pzDHddZQC281kP5Gdi1mKAZHtLuZiBFWEe32XkeLkwB66dMpSdtjnREyWaorUhD2S",
  "key13": "4ARrnyi9uenEDuF7VUo98E7GQBBt8jucy2CdAEQEgr9uWu71HxRKptNq7p4D6oktRAX2Fzj1pSKQYJ8EUm7h7jEw",
  "key14": "4xuiBjjR2NtotDLbd7Yis19sg2E4eTdUrN5Pp7AC7xEY97PVCyybKSGEV2dcWBKjXmbJhTtrc1P7HiwVp71x8MXq",
  "key15": "5ewpCA6vQW3zweoqRnYcvPFQ6WJR9JdMvXGXLnHNNXCD212u64qiNfjnLt5CNvj7xAc5BNNDSeL32SsgjLeH8cKa",
  "key16": "WqSwb7dGSSxYkVHTyBFC3vYaCX19goHz8PKKTnS5FrnLa7CgZ5KZAecSbJni1uHTEKxdojnvVmBN5RUCjzEjVe2",
  "key17": "jEZ95GbVaZ29y2B3RxWRhMZRBvTEKhgr6D8BCMKLsiXqpVgbnLdPjZoXgf3A2vnaxXT38d5fxEfbfYRjRzBBbgw",
  "key18": "3sGred6qUpWxkLygDwWFBeDTejjiDtzcXTgMmKfrphbhZLhLNKTKEKLzgNMSC3g6qhAvtuQmYxyunBn7CEtfTAL7",
  "key19": "3KcFqPbfRdVs1UTnxHeozzjnXVpB5dPQvEV5vjCNYG1okADWoGeYYey9MGYFPrCJxvB2yh81VvvSQFiM6zTbe6sD",
  "key20": "673wjmLMC1Bwu7pnJFG2ty7jCvaBBe1F3kro14Cwz2dhwttQsdoGwbCgWMkaRiy3J6AmNx7TNDBhtY2q3w879qrk",
  "key21": "3Lw6CnuapiG7ReRPgHuhkWJXAJ4fQCFuAs2UMfUWw4MnSPo2HEYYdJBUTgaEHa498P7ta697Lw1AbKY4sZreLnhs",
  "key22": "64L2UZa3gdwGT17pikz52yBVEUTHNh5P2UZsJndfb3khkBtiBfmqKqE5Dd5kdrgeNE27uZSz1EUv8HU2KZrwzsLk",
  "key23": "3o9MTWNJtnAT46Pnx1JJPpPTVxqBK21mQdMdu2SF95oA8vb2Hz4jEwKz4Fk1ykTkXyr8toJB79H1DNMS7shnDnyM",
  "key24": "qSPVDNgzswb8GoUC8Y68LfQsRqje7Qdjs6Yz6G5PJUorpWhZ7yFkubfhXQteowcSmAk5jgHp6hqozBYXUkGiWtJ",
  "key25": "4YjARh5bZNd551UiRtGC6HVfDWG7yPuSa857ZR3d9MaQZkZSuLz16Au7H9VhPwaUZkTgvxxsKjG9vST11fb3Svia",
  "key26": "25TMDYVZpPF9AHHAEay36o8LX9MzHD6fkmFXQbSW2SbNgLmTCidepUMKBPkXueaBw1VnVaEqpuU2h3yZmqh6rXRQ",
  "key27": "sH97kfjYk69Rv6QFEQiaLYp9k7xgK5iCAT5fEzr46pZmjtZmAniheCcCBXyn29hhMWN2PP1srVDfbfJMjGyStxE",
  "key28": "4YfWrUofCSwGFSAkDq8CXXSkwC218FJ2Bh7swM5jfEpuK76yoosxENMTWzyH3sHLiYzQUraHZhZTNUEdR1AeH7k1",
  "key29": "3ut3YipaSMJ2r2JcE677uXZruTszJUbW9jDTx8QWbMtLPVMaAB42yJxxXkCnQaNc2ypAKBZbK3A1vXsYLB3ztZFx",
  "key30": "5gRRGFTPi6LqMgLsQNFBj1BiBDkGmTQxgjdCRh3TDiF34zQx3UFJwXmCnsH8XEiZKgVc8LG1SZFgDMKcKsJMyacy",
  "key31": "3LD5nB7mMuzWerMGT6giFNGfaA559tzhyZcc1cSf2uT5nvod8wmsocAhipBd2t29jDfncMHfJzEarmyQxSC4V7eN",
  "key32": "HacCacF1E2D3JcT5ZYUZ7y9Ln2uEt6tEu3zWicL9618FGZzHWcRN7qr5XXXs47QH6tyPJTEhFddto7MwZ6t1TYa",
  "key33": "3FnZnvR7MqFhEbHBBByNS7bCsf8Ltv9S5cMM8FCwuTUjPLGTwZ3eJknaarizX3ZkWYTPuQv3FszvkiTrx8RWaxpn",
  "key34": "35wK7CnYaTKvL1BzKqHC2CgczeFupmyZKMGupEr6eAUhpNS723CYDiXoYgZ54SVLsypdxigQorv9fPV2wSsxK1MG",
  "key35": "bwJRNU4L1WopmcDBqzUUQEA4aYNYiraUiVHvpGxGqfj8VnyRdqiPT5wPV9HG4dpwW83Xv9E7Bg61unMi5FFRk5B",
  "key36": "5Rk975kKM9UrLuZqHPF1vKy9RNNe6QAiqK4XjGdecG5skMMngwxc5KX1jdJQhndaLLV5CiDdbffeomx2hvNvBTKy",
  "key37": "64pPoCzxnJ1kjJeEP2ZYFapjbEcR1vE8nRfmgETQEqzYN7mWfxAb7hBXvzGf1fZ37rJTVwJzdfRMoTioBjgxRvA1",
  "key38": "4ff8EizpQugeJgpSTvZmX27tzxtdTV3itkgrrEjjznzKS356xDau4noiY3mB4oympqoGn5tzhjGMNb5svDwWPHFb",
  "key39": "3HSf1FkHRxM7mSTERxr7wctiQJNVvWChW2GxCyM8qS36C9Z5tB2hmdugvDb9KApLgxuE1HQR7pFZCkn7kVKAGW9t",
  "key40": "Cq5HmmKj88DUnVgb8AkkdzK2dNVdmqBQcQypnTz4sMS1XknEergLv5RTcbd2XiuLXTy32M7fKFoAYWcAuCJnxkd"
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
