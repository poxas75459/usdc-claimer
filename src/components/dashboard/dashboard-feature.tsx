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
    "WaGdbBm5XDCsLDq4gpozm7nYBSmLMmpjqS4huDbErwyGVZFAQ9xfHjfkfsruaWbea9XZz3BxQwDaZENxKEp8yCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfb9q7vH5jQiMBaHd27RxzZKyFiErw11Y7SnWKuREJpFU26rsfSBaa3LEsBP2s6JFVSgi3mTF3pdVvbKoyTXSG",
  "key1": "2TBV8yReXHkeBemnfSP71Wx4ijYWVBBdHXJNzgN6EzMc5AjKrts78zV8kvb6NRrUZZRunXpf9tzP9CPggAXgzy7x",
  "key2": "5x8pG17WR9FwGxwXj8wSw9DgvatUtVPvNvuKngScEwJ1Stnp7uZUKbgKcTjTpcKBeQydgS9Dy4LXkiBvqDh1SHPs",
  "key3": "5FnvdXJnaW4H9hEWMoxE4JvGAYLpLqcFXbgTxs74hYHG1hqnZgBy6s3KoTgQ2thpxxJfqEW7X1mqD7sEHvpcjVjx",
  "key4": "4zT8XnHy67QssZNrtEUWzrXzqFg9N5URpuuSxgXKknetkJAU5RtbFAXBieZ5mUtqTH55uwpnoca2Vnb1u4WqHe2W",
  "key5": "34qLsCDRMYZ4SFEFpWKo6Yc9WyMdntCcAq88iTPPB4eTCcr9ruAkB2i84WfhqHMeYztNppjm2BS7KprW3YmTbith",
  "key6": "5cPJwSUTtf87WRqMp4dVVK155Yyp7iVy6qC7yonyJnAdnXGooLtyPbhRC7myugjowgP5pmEJiAT6TjJJsTcKtTju",
  "key7": "bWsAATWqT5o79fyii4ZqKbJnQ4X5sfBVvMbiLzmh5ij31ag1Yujozb16fXRB139YwfkQUneVnpcXDLtSnmnri9n",
  "key8": "5dwGyy1Bc11DXNcqCWJAoSacxtYZ4dAjoB5ZmxKPhrAr9KfMJuMcfPULZjiYzRdWEPoZ1Mo2AgrZF7RKDjkaJEjZ",
  "key9": "2snSsYAaid5ZRDhW1o6TXL7q49qYCdPgPA59kEF3PUL6pSYqsfTcU2PzrCjaqUyxbcTpokKfjxpcFnFUkc9WaNWP",
  "key10": "3GK4wNL2svodB5Kqgaq1vQjEWZRhyR8z8u3Dx6Fz7nTffyjEpBb1YjHwXgNNk5suvo7kmz2TEW6DmmJCarbkmKz3",
  "key11": "5x3nuL7X7cokgqhdLZaARHzHHTTFmiN1XGhtJstpb4WyUozZY5hDG3cegkYzJ7YekiXJuPeXWFNuVnF1WzbLLEtp",
  "key12": "36m89RocHZVUhw9xggLqCgje8p9pSvcsbbsKBh9a2Nj1hM6ybBN8pV3V1bHpaKdUUyKPTo1Ukx2V6GoNuVsfi7jr",
  "key13": "4AucmPpDjZ3iNdf45DQ7kz9wpVSAaV5ue7Ct1RuD7VWgy3MW9NgAm8QuDruom7rkoqiJu4hdDLBcRb7yX8YLZi7D",
  "key14": "2uV9P63n2eF68Wsd2T9Xcr9GD1wymg3PTx5pCvTU85Jr99kxJiVpwGUGoQwCsHHLufisicmLm1zboY9FE9sE6tk8",
  "key15": "5nxduQDyoTJaNZ6NQQpqYMKHJGNvxd5JZ1uacwoHbqbPMvccK72e8vNUMwLQDE5NrAnHuN3PyXGQaF2vD5B4gKG2",
  "key16": "3t9UvAdgV1DTZUyTSPSTGTFcFVh32A8YdYPcsu2PvUE2SzVASMiARiYeNUFwbzUpoymAfKTAMJpNnTo2bM9phz8p",
  "key17": "35U6EZJGVWENxEZCYgknEkZgSKW7LXGptKTD1Jr2K6aFw4qYm5fu1XkvphVkBTXxzK6exCAzPiLMP3HpW4XPAm5r",
  "key18": "2DvABmxysoPU1Vj9jji7C7txz5AjTNxg6JQHhWuRwwXbJJyAdPcfoiGF5p1mVpzZSikVjaEm2Nc3UeRmht2q17L2",
  "key19": "4euSuNrSMnxczfagFqHMeGGPWiAmfcfqRZGTbTrMnP86ZA3SBhyFn7gghtUpHg9W4vHeZ3D3keDqGxWnbXFc7wct",
  "key20": "5x5uudyueXr1yEPdqrAzQKgEKacET8f6LiiDRvTGS3HmKV3THkFQrgCnsFraSuTWZwhwiEUQqxu6577oAf8knQKj",
  "key21": "2Z7HoJZiCEmRMaTKyoMnjCUMWrEQJQ6XjYLbffKJyX2ncE9AqhKnVJpQ6hunkvmxECuGmPbpdWrfK9EJmYLHL2vB",
  "key22": "21pu4S1VwVfQmR4ib1aazGXdcTnr7vRVtqrBPGzEkufzv28T6Ee4LW4JtPjW1FUEUvKbVEsfYSExQYv3A3CRQemh",
  "key23": "4fH2zXH4bWUxVKQDJb6hkrAEg9ceNVNoedoaJ8siz9C5Lisucdf4ssjkp2a1FiugWujcxZaQdQsssks2gD6QQ6UP",
  "key24": "2V9VNsFspzmj4bSBnhtLNWeySTM1BRVTnWHYiAKRFxU94yfNBM3NEGi34TWRMgpywH4jJDgUHbARFCDu4zesFtju",
  "key25": "3rAqrXE7UCR1Q6dSZnwjsSNLdmJyKrjiGugms8UnMFNF2rqt8Gzozn2q6zTyebuCMLbCT64r4kC54nPzSeJFd1R2",
  "key26": "4HnXxjwqRuXPcFN35YfWZeqAh4J8V3rDMAReUoFeSPLebwy6ZNyG7xpWkkJ3iNopVQK3nB2tgMM6AkpCWCAK65Ej",
  "key27": "4nrx6TXb1mpy6CqspiHKVex5q1BEkzVqGYkemz9MQZiW6P2w67CH98yLu8434XaG849sRxz7Z4GCuR9oB4xmvEMw",
  "key28": "xLx8NaT9ngdL9qdMUwJ3aKY3iAmXLpKQ9oEWntvgAZ2EoxcNLKEBqoG9tkvA3V5t2iUqqJTYuBfNyqEXPvjJVb9",
  "key29": "4DSmWSP5cTBLHPNNAzLnoJB49z3G4C84NMnCTz5N51LrfvfBjJoWggCCyxEDJaFzVyyjmdTXrjF22gUgFTqx8h15",
  "key30": "2gB1vtj2SEErvSAgqhDcdnmJTj1FCZnCW73c64Mh3BsuU8bvQ3dgDAc6zPCCFHE49MXw6bvdTXPQgabb9T7jAUHX",
  "key31": "FE1c7myvLRDwXEAYNyf6ip5VgtcejDo7AkjbJquCVcV3rLLGjGyGHRuuGH9zubqWfQVNryKMvfjLP2cbjowihQy",
  "key32": "26Zd2iRJ5uQLEdhPWdCirV1smJ6JGR5ruKuRUwazcaAamHTvr5nX67k1DwWsADfAUpic8d8xwWubeQapE2rKC73a",
  "key33": "28hMXSQ32JVov2idSpawea4G54CxKgeyteDZ2T8TCW68jCNfTArjpKfEMoC4Kdmr7GFLR4n9NsqynPtarEXMKHSy",
  "key34": "2bpTmo6bfcSh8thWGxiZzhxyqQA7HgSe4d4BkP6MnWakfbqVNf2FcR7CmyvibZBQ9qx5wCiNnmWzXZfArQUoBqRZ",
  "key35": "5pLGTqiZhQeEhkg5KJycKByNaa16sqzozRUXH4f8jay1AwZRcjfXSZAtta329repKuVF9dkJrAGhwc3RU2oDB5y2",
  "key36": "5cgniTkdLuyjXwk1g69YEUprd8cbKSCXsAWHs2GTc8AYY1YhVT44AFwQ4nxXaST7X9i1znDraCaMFy4ecRTtmQ1R",
  "key37": "XggyjS1kJt68ZY1aBVL8aRhcntmxYnaVw3KsPjLtmTgCePniL642azKqqchSnAFdGDTTcwpyzxorDYo1R2wpuNr",
  "key38": "2qwtLmLiUnhX9b832ToUoZ287ADPw7oWvXzTASUj6qQpHAqxWbDoMH7jXq8vWE57xCD1VRtB8tTYi4bFu8U1WMdq",
  "key39": "5pvaz4Whpy3m4aTEQVSUPfJiSbq3Mv9wueH11nCaZVM3jBV7ZgXMn2ZqRTNK3n2S9oWC1sjJQVKdvM6ZZDRGD51n",
  "key40": "2PJLyVKgjJvrUonrykPiQxaQbJxpr2ZXiFLeh1K2ghHhbuNdyEgnooUKp1ZKGjTMjNqCAa21avCYRCMWCfQMVSyY",
  "key41": "uBXbb5yCFSv6pF4eULJECX8oyaoDYyrRB3QBaS8BWJH9NGH94foCrJh7Yz7j55mX1s53hZAH3UvSfXE88RjXwQY",
  "key42": "49Dnqi5tsGh9CC85QV56j24BBRR7EhNPFmSx1cZ2sPQ4KEkzuuxenLAafgzdFF97LwcAfkSXLfPH3Y7d2ikPeogB",
  "key43": "5FyKSN6bR39D18Tw5bpggWmCBi4niVjPQomQJQeULJX8aqW4avaduFvDnqfrzL4TfwbgqzPfyBAoACFGxSghjNNm",
  "key44": "CTQCyo7MTTmhkCZfJDj99p2k3VGLk2QAZQoWdtwVqmiJdNgoK1maA88jbCSQ8nYDrPmjxyacXfDDRhdCXugKZCc",
  "key45": "3b3tE4BYaF6snqATrdydmcatwWEBSK8bV9bga7oVY7A7s9ZxFfGNKzDaVpvmRmqSjfaba95UBM6veBY4xcQmxaNj",
  "key46": "4eX2KiabvMX8xPmpL68fpS4sj9xza2QFXN6goUVsri3xypcxHr2hVwUXonZcRzCbbXeGfkxxRqpXEspweURSDws6"
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
