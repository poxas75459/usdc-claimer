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
    "2C5REHv5DX7qnrYtdFn1h1MqHGXDd15tmnrYBPripLNa8pTk7fNBEnfWAeBSow1coezcdRhTDT7CVAwXT1fEZkzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GLh8SqituQJvZjGQPSX52arCtWME5nBeEfVvoepSQNDbnYJmpAUXgLADhFF741e8894inMvRd4dzoXZB5hosRNq",
  "key1": "4aYoXdK1LZ8Y9LG4Dg5CQW67JH3oZrZbaJvLebWWG2JBswTWdxC9ZLvz3cKqkm8x4MQR2DAX5Bf2V6dsFi5bjzaA",
  "key2": "2vji6cYwp3WVmfYqQ7sTYkjLVBFqfL561ZgSkSKRP8tU1ZwBKiRFZ6xk81TXpeNseYZo59HJnVaM8tU6srfjTXaB",
  "key3": "3k5fxUu1MYKUxBvrsYHogmF4uJ1pNYAcTgXZFfmhmcNUYAgHMHqawdnirF6javQcaoRLVQc6JMniBnmrGHvUXua9",
  "key4": "5pUBFcGPffcyBJ8rsrYVcaUUi6aCLCdPnRx1BbDQdYzZ7RLocy8jFBMZGSK2tNV2ZS5mLAnmxtUfFJmpx1Fr3vyt",
  "key5": "5SfjqRWtefUkbuxprMRcGQKf4bvuPAhuzEN6JRPi3DJeatEUqmsuAqFCe9BMTiXeZzzRRKFRTGdQc5KECSV19xu8",
  "key6": "4qHrsecdox6oS7E4HpUWvqk2sPreSJemLYe567dcF4fYXYai3ABKXeWroEC5V9VWjZNNxBPq3kc6S7QL7RyqzuqC",
  "key7": "2SnEezNq2NMVKB7ye2DSWKSCJcRB2eYbXzeSC31FWgsXfbG3W3oEvSquUzwquazU8SRgFnycsXMLTpa2pZBMJRPf",
  "key8": "5XGunQuRJSHUzjoGmbpvvoqpHCWbnfd1fcfMqqJAT3cwRYexjZSWyCHaBrYPQyXM7jzcTvpukrZPFZk8RGEP84no",
  "key9": "MyoBVaTXLXPG6YEzBTMmsptfdgQUD17iTRMikvr1shgJ5C9jaV7DiJd15afhNbKqbYu1XwG4YWDG4LQRWoGqtEa",
  "key10": "4t4RyjVhMdckYh7GzYHFZnYzrjwKT7cDbFTQCh16S8aYYySSnRZftYwFuqxfT3cwgbtM5bLkkE47VB72UFxGN6VA",
  "key11": "414WSyBxjARCYY6DLLjPwFmGCUiKFYygvZfFCFh7a3i2HNEEKFwHHhRmZnsXWtjBftezaVmCRJndePKyXXncx7m6",
  "key12": "3pKzq13eqGBzTtoUnCRXaHPtLEqU4J2XPL5nJJ4iEZWQGp8J97fA4ti53QmHGXWufvL3sJk67Jf5QJNvebh6Q6pn",
  "key13": "53jUqySDGKW4dnvZc7WMdn6oQk2dATkuRa2f5ktRnq4fwusDAgEi4YcChFks9bb8U9qL3p2EFTxyxMyYeaAUgnQH",
  "key14": "4Ccscb8K8aWV7x6AsizMkPP8MD5R82kZBdrbXjiuG8QP8DETTYsL4T7sMHwkMDqRLo6L85vY1Mks9FNqw6uUpiua",
  "key15": "4D3yxugJ5BwG4TtSu53P4gtQPnEGAMiAj6hAJwSR4Phd5n72uxhK8FsPgyJGPfK7hymaJBPVTJw3A3fHDDrpVdEs",
  "key16": "3aHM66F2EUmzwPi1z7NWMJPFmRobK54WxQ2VgXH8eMVJj5gntP1pCxEjkSqDTkk7ajxopiQFkHQzCYzW8zZzfHoR",
  "key17": "4qtEVQWp1SwQD3oSh2k7GfogZakCzW4xMpWLgvoXo791ggndX9XkeGomjaSH5VHjfgpBbHk3dCJvPgt2BatXVrfJ",
  "key18": "2syQsvx4oU6MUkUDWiAKH9tQUMS7w4io3NHDgBBqFyjBmxXWMESgKePB4QmuLwHBe7kJyVrbBHfQ5bjxHWGpNuBY",
  "key19": "67edY9p7pW1zJq8eeaz1gzjqSnB5JiYUdYfyNUP4wEeudv8MDNSW9uBVD7oRYSdFsfQVd96AzrcPbw4DHWBXZqFH",
  "key20": "4hNUAzJSmhTAGcUSTEBBMMzH2xuvDjLx1s2gbVGtiNTwBVPdCyaCC2sbYK4B3iGzFcwebpSobbcePtZd54F3m5Lr",
  "key21": "1DrTw5EBZsZEwAxGGBn49WdypJPDpCds7Ew4R1GaaWTEV7tpaHzK61Bv3dRJcq4CqJ8kbNpBvQYuC1st1G4dS8g",
  "key22": "tJ5qx9VMhktqekckRtBjG4HtZ8wu7Y9X9qDGGYfsVBJfbh8RFnBx6D8gEBFuwAZDgSVWAUYrmdP3vfqdJepdad2",
  "key23": "2Dtec8qwSeTXjYFvMsT3tSfTh17CJKHBQ37oLMcyfq6QCvXFzWjUvV36nv6MYZVkm4Sd35st9u8Nirb8VWYNHk7e",
  "key24": "gdnWmKbkcMZ121bQLA2gSpQh5Rg6hShzgh6kKpd9KatHdkkLKu9bxugMwVEmbZotp5csBV5EoNEZiSk26tZhoUj",
  "key25": "4fB1r5c7kBimeuhN8c3YbPxigKTdwKvcGqMq81x5PkNf58XuQmhN6fTZKUgTQxg7DZd5Mm7ofhakJXZTbqLcgmC5",
  "key26": "TE7B4t49uv2eVxULq2j5ckt8S5i1aZGWwTnbYkXfMUr4LS9gSwFrXBBLiCcBsru8CHdRYdGW8KMUdMvwNjErJTj",
  "key27": "4JnWCKWoShDaqhLq7LJuNAfaRWKhFCneKMv8yorebniWutiEMD9uF1M7BayHTKdzrAPuqo3pETfMVE6DGr2kMxCB",
  "key28": "3WbtFTLHugvriA82XwnNiyk6gBdqdb16tmfUj2JAx18Tv88fMrtiCpbtSxHMbmtmAEEtG2riXfuEBYqpHx4dGZaL",
  "key29": "5Hjf2jhNJYSk4PR6bmtk3QQYpLvhFm3Tv9UvguKjRfEX3gT7aN8Yb7756hDiiBs61L9ZKwarBCs5FoYRbNTdR4MM",
  "key30": "2hLh7tjXd4ARZXedoZEnsd6L8cgpK4F82WsdBvWSmD5oguS1bDnamyMeH73pJ6YCmRHqgAbfjMEY5777G4sokywA",
  "key31": "4Et5UY5ptDuHsLQyPxJKaCk6oFt2mcDz71hdhukxiTN4QL9n6UgrDZT6yRDoTW93k5raRCkmmsN8gRbUuv4agyZL",
  "key32": "5t2Ep8zHEgwJJ4vfmExbmq3ian2NXeo8gVHb4h8Z6McfdbCsM4Bvhoy8djWwE7usaC1UqaQivef4rLvDnbkEPbE1",
  "key33": "2hhX92qhphyuyF47qqav8EAt4zibynZfUswqVH3wA8i4mgTxXtPqcRFm9d5JqVjqFM7S4eLSMFB61K1Y3mgA54hT",
  "key34": "2YmFJjsf7pKkEg92BDr3Fa9dRbwMATp8Sx94PYtSbCvZGDFyt5kGFVQj84j6PVtRt41VxNX9kcAnrjeYezR2yu3j",
  "key35": "Pd6SPuk7i89UPmAN4T57vezMibNfqnfcB17oB83tuRNmwYtC4q8KEVmjHQqZdRhfZ5jA9Rd6KbLPYutTDHbLbZb",
  "key36": "4sSb4kJivnySUQQbK9D28ojjWjdwhKagox8W6SM9kYWZwbCJputPU1qspXyzGPY7EYfYCrkdfmiyVtv13igniUrm",
  "key37": "31gp6rP78xANJ4QaKHnLPq84k9Q2yk4LdweKrhBDZVGS1uyUeGj3s748vounUfeFNnyeajMi9djTUFGuvV4qRTM8",
  "key38": "4uR7T6KBGRdbyFMGsvmdanSKeyse1QgaX5fJEVr26RBqkjEnmKGKQ578qBLiYVei8kbSoABTCxARzCp8kh3UDx7a",
  "key39": "4XxEd4cfBA8pPsvSQx7YYeKXmceBt1RtedWowTmjLXVgM6c7bBbLMvmcL4jf1ezsMzMBJrBUV7GoNn5g1SRjxzZt",
  "key40": "3dpca72isJxQq35EibUQAVFy5vGw1or596UULfaeu9ArkQLfJtMXdkBexXJyuzouaNUbZYZM5m8e2jJHruMj9TCt",
  "key41": "3LtFWg1UzsaXRi7Lcoh5o9WUF5151bVEoLpnvW7n5HN65m6H5jMDWqZaLWKnSRCejgBLrA8rQjdNksr7CdtMT8d8",
  "key42": "5EMH2DwYFyDWcQBX56zFiA95jrKZcVTdiyoU2G94R3LCWjP6Nku7wHz9MJaj2WYvvm9ZN1ZPkEm66sPEzxRv7oHA",
  "key43": "2k8yUcZF5gvTy2V3BX5b2qaN6xHt86iBHnq2FrLA1tp7UGMJ3J8cxpR1587vpCigbENfsryGDqY3sYME86X6q39v",
  "key44": "26jd3Qh6qdbTWd3fTTwFgc8eEvKFe44okV93bx3AQ5xKrb87k7H4Qy8bZhBv3aJxsLpAJH5n6Jgm1u9x3BJxstN2",
  "key45": "48yA35aeR6N8HBQwSmiZeZpR9MZt7gXgmGfMoJP127Qpz5X9qdVDTWyg3LiKgtexDRBqDAZUrFBq8ceNMV1R6M1N",
  "key46": "2ZjVjrh8zEk3tGSh6X8HiJahzGjJAvFCvVfzbiVd83kKpecmNF6rG7PB3Y5vgMnkGkjjE39wnDSJvVy5Xsur2Vgd"
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
