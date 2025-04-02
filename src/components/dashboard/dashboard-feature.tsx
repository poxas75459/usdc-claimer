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
    "J1yifa2AMCNWLDrwA75xzv6VaQJoyRNqGzTpTBJvtKwSyQd8G1ywhL4UTaERQnMYpA78q9GtqzKvsPk9M5ayVnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9zukCUCok8dHces1xvYMUnbVeCegXvGUuf1PjPqwem3JSfMBMVgucBvKXGfw7VZGD2mRozkZrVhWtjobVPuAne",
  "key1": "2t2sZoMs21dbiMKDMSHT26UauxoRFUeKSiNVG71HaoCv53Tn4HvQviwBo9oXvYBDLpQh7ZZvAP2TV6ghSXywBqjt",
  "key2": "v7kRgisYVxtWbAjQyMiErRoyYGfY1UPe2GEyNEFp2gmdvWfSVKUEcFub6n3KNCnUfYfDDNsuutEUhb5knFbgHFR",
  "key3": "4MVFSrnZeg3tYAedwne49KXttp9PQ5tmYKM5pEkbQc5hoRBqB5hW35UHfQ3qrnZoFuH8LiHK3riSsHR6iP9kiPxQ",
  "key4": "ErifwhxWUsXj1Vi2EtPcmxqQvXAcjVbR243G6vBD1ZxcreJZQW8D436YLkVXx1LmKT4c3Agd7LG4w14iGnWre2M",
  "key5": "39GzQUQzHgyMgcVLpJ9Fuf6GRdQxijFBjtf4npc4SZQBvmHRAVEodM9K2gyBH5TkrtqWqS4byYSAAM78Tx7Rqava",
  "key6": "5xSMwYgctVCgs6D39zWHMNm8mfoawa3xPJFpQFC9fbF6T5J5XbWnxLT8V9mVZ75fWMLqK9GWQJ1vRT6zWrfDYAyE",
  "key7": "5aFMVXpr7enbxGU44ix5o5ZN5kq7FLZdWqNp2kwsEQZiaCD6fQ1Kch8FqTkgHAgUiQxp9con5t12xcGaabVY1mBR",
  "key8": "LR8VFsD8w5GApaMuYVnRVqfdUHqvPeCymFop4bbggg2xWxLhPhyGWhCKLRX5yBdbH1A9RVyZ2AWPGDYDofQ4s8G",
  "key9": "2w5eF6BLfjYLSg4C52FF2USUyosF4LgCcZZ4pXrkthDGgCWqZCZHaiNvY3c7revYewfY5X1aDCFasCExvfnHSubM",
  "key10": "5edBchZmZtBuiYVki2AkooyfhWzHQbC3u58DeAuiprfrg8Ey8onYQr7qdGnXLRTpqePZZH67mU24tyTPzppcVC6L",
  "key11": "3278ETs5sf665Km5pDftWcMbJ1ei7aBzjrUoiA82XvCWvzkqoD7Z8No4KWiRn5eiPfD3nDSLXDoaPE846XprsC46",
  "key12": "4TA3dEQ2K4wma6D3thZsg7LNE9nuiQeX3HjLz9Rq4SaSamCdVN7p1iVRHTf6jLU5BCVHEsEamuXdQUgAfkYF7obC",
  "key13": "32JWNKQ4BJSyUQEJyuFUjq2o329S3fVTLsvvorREnFEiMeY44WYGRUb1XkBFjnU3JKyUJQswfVkhE7yZsCyBAboN",
  "key14": "5FW9p85y4fDAiMVcdskYBEhW8uGqPMMZ7ZBvpf5qsgqucTkSUwoqvbBuqK86FNZvMHDbry8LamYys7SArU2KaNNa",
  "key15": "4cwu9uSbBmHQxPUW3yLhqjLhccwqPKCXHE7NJHhTPXsRvnKGh7SfzKd3ADktCmKjGcdsEznjVr6VaF2bndnkddVT",
  "key16": "3jzqhtJWAx73YyiEFxaHV4MAjkQ7xKR8juiRpww8tVEo5pnRw9hGLBrPYRk6bqHuyTRQGwGJmfCxXPJxTTVmEbZ1",
  "key17": "48w2Ln8RmJkAs1UjMhpmQ4ExXHhTbDxXqJrwRyMik3p5URKUYyhcRcvf4zYJwp7q4qrjhoqMqTkkxrWxA8Qfz81v",
  "key18": "59rPXWkrnHYCgRJnsK8iiyW3K5CAGdTCZsTBWoA59TP6apyNVahrJ8JjbeWmJZL5LQUxstFReKEdHL8zwhpdxdCu",
  "key19": "61djdKBoA3wPZEy9oFwBSmWnwyhDJEnD1Tb6c9VWoWNudgyeewVABuDq64LoHpzsJCn3EhPQgexjuHzeG5Dhr5bK",
  "key20": "58n4eSzdMWDfPS21fZkopF8A3puUJwkW2hS2sy8oZU3hc2se6jt7fxaGPaw4YyCTXsC3aL3z6WeNeyqgX12aKiWA",
  "key21": "2nMHLYiGqQrVphhZJQTtQaAXnw2v96xHLi4Sv5L3VCtycH5EWRoLyTZJWL9MG7ig8nYpJLmQf6UTgivgguzHbJ15",
  "key22": "2hcz54YPJrQbS1FHkQjad93dTJxC6ahn1gvEbBEpeHQv23NNussz22Sq3MkuXgXLQcoFwxpTJtdY6P1a8FJTDoP1",
  "key23": "4fuTMYcinCQ5xHCLqe6ggwd7wBnRyzpLM4iGgd5G2wNbuF18eeyXjkrj3QayAyXFsQKnHSuuwjJc5xhp8bzCimBW",
  "key24": "4T9mgyw6erkBYuvLcmdTEuKHtnE8dy7YQR76oiypGrvwZoZp7akpMGFpGtdHptr7eZeVaF7dwEDHZzgkcgAWuPuq",
  "key25": "5D2uBc11PPT3caNtJepxJjTZoR1GdSK7gkp6peGSUPnN2KjkyJ9UvJ8JwudPzZMALqcqFjR75v2V9FXcPEAPdBww",
  "key26": "62p5JubLP4tyvUfkqTyDUzZWrKnsJkfTwDqBuProoPRujZvKCQY7pfWieAgrXz28MygLooi3KNmNKvQxPiigEdVb",
  "key27": "UXpTTHTNrbt36TJsAikrjSRtCiCU7nyBxK7cKYX915Xt5oALEGtx1wXuBrs7VMKR7vSAeZJKMsvMzDm6L4tAFyg",
  "key28": "2uUuGpBCLc94Yf3pnD8QZbZbJwrMakJp4kWhTwdXHnasqeF56E7jVEF6mEbFox2MNV5Wsv46SgBvVHVXSKZS8VDn",
  "key29": "2ogBqNFz9db5PqqSw6R7oZb6EJ3GyGYib2V5UfsStyykiYRxGULtsmhZz9tc1JWVtyom5GRP6EdgMkCVsxePddsx",
  "key30": "53BuAzfj3JwN9ut5Fkwn7ju3bJEH6MvRx3aD2kMG2s4svSHLKSZVC34fxJ2DffVQBLmkkkx7uXyc9YL8M34FDm3Y",
  "key31": "4djfZoAuHgU7TKDBjzj7XcrbmfvRtsu8GD5FhPi6gfKuEuNFqj26iKnyN7QuFm9EMaQ9wKADPCgLDXy2RWYHbr2z",
  "key32": "4AFVQqzYLjrprfuPyX4wiyZohPmLxqhFw9JHPomUxRD2h9btPQxrS61bLWXf6okx61UjQ9pLPCafvyT5YwrjmJ7h",
  "key33": "598d1RVZomsE1hCoHcuhT7wumPEsu3PZxNqaGVySRM3ntoNJt3M5cz1Z3piKYR61taYsoiVdG97Mwh3kWai7p4Cn",
  "key34": "F1w9ArAY6yhXcAWScrnYqWXDPeVAtroEf7iMAHP2P9Ejc4obpjFeh5V3MpPQK9XQFosqJQD79adE7hyoDuFEo2q",
  "key35": "5LnbpBECf6u8CyEa96fTyJdnQr3EtZaHwG6eaYLiAbtMGjcK2qz7E7kyUMLgxapjWuyUsVGZMAR3gjoaraZ3DPum",
  "key36": "55bfEbB98utiUQUyye568SjPS6VTW5vmLojdRXfsSxypcEW4JoznGQkcurWboXZJ6gEpKwdx4RyXemRruAv2vCbQ",
  "key37": "4Wy2UBpH8DXxXCBYQbgGWKwa5aDuTFXN5sAkFEQWHsTJu1Fz9mVDgpetL39YAqePSzHw8y5grZcnEUv6Hj9o5RVt",
  "key38": "4rP8jmuTUmPWhmuf2tXCraDy3mjNoLC3o1MPZrDCRfVKRwKyo7bqrDR4ffVbT6iKXxK9ULBd9vKcSijBsDLanr4F",
  "key39": "5WwdYLdRmK2ayTT2eYh6VSDyGPwibLAo6x4HUMnDXWeiUvFMnPapBUzqTYW8VNKiKAawcLgFYmwcFeY25aiU7AeN"
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
