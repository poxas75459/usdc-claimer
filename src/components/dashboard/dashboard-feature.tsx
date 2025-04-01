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
    "25H1K31Kr7BebzbAdzYVRvves8uAGtQ5Ytpz5dd2X63n6GEUB17B9MepMQh9dYAY4cDmVR7ALBx1XY6kM8xxYYsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22HFsH5QTsB8c8Tvudf5UjhUCdbDCBog1tPyQjTbskAhrmGxtnCVXZTBKHYv4QTLPmnfuPECgdHuicJKKuZmVin3",
  "key1": "53VgMgXef813Ptmis1oYqpAv1a4jmjZLLBWa7H4j3oZBBzD82nQ8BB5vjhjuAxy8Q1wWKYNYfWQuEE9B24Yo55V7",
  "key2": "A4Xw1ANi1CZTdMEGGudFWzkDkZUrxbPNY6us8Qv3L3QaR2b2Yn63hMT7PLStWyVqsSNNethNqGpRFWFBBnFj1bS",
  "key3": "gZbUZuoRLHzHr7pDJDJYiVWs2pYpduEBzrzfkTjZRs2X2rm42N6ifQUZLiG5zmi6zEjpihVDmwgMsR61ZsgxKd6",
  "key4": "5k5oCRiHnrjTJ8XBWDZVHUd6ZbKGiCKAa7HWQDfM1H233QQReBSz9w3neHAXFWRG6BiYxcT4ay1YTN8FRYqT9Y1z",
  "key5": "2LqKWwfU1GhsUbFStoatyZEyaM6NwBtBcLg8BWtGG6nPT2uDc9CtpjVGLhCc697JLidkBaqsucRXUsw1tfzNMCDb",
  "key6": "5apXjGgcCDhKo38rBCSLCCjPTCWBknQMHPnCkGtwnvj7zd2UthP1h6WR91HbjZSeSf9aQGGWJUBhVZTwijKsdVZF",
  "key7": "3j7efhDoU9cZT9wpJ5L1Vh2zNyK32VdxVvf4YHPBupwE23fp2Cd9ASK6VKS7TznnpzcXCHgCU9hp5ZwGhZXTsYcn",
  "key8": "NqNPVontWvjc2sPi2co8jV3zSJQXhFrARJhYswnb97uJMsXPFqSoZrGuzsMJMJsz77By44ffQrtMRi9L4BhbnTd",
  "key9": "4zPCrEF4EnQUeESQCsE6YZXCuPSfB5r4qhiJ13nohynurnjrfMHYWYp5r8GQMqJo6w3PP25s5tzzboD91JBTEx6T",
  "key10": "ZSQ1KprvY79oNBeBgDzpsY9JfiarbrGiyKbxYsCPMMiAP1fPeeHetNRyk6rVWb9Szu99XPubF1UqsTCnWSqnnBH",
  "key11": "5JNJw3hQ9g8Gyk6kM1sKxHFG17swqGcwG5bR9DBq72NbyQufcrXiFF3TbNQogPyKXRLPCjEC2tTe6yU5aBVdbTrK",
  "key12": "28oZGeDcx1zqLQsPvyckgKHy3zihMFxoMkuf2PMqUDHhGfhR8xeAUvzhBtinuU9c1g8FeEjM93ULdmFoDrVLCEff",
  "key13": "z5L1D7z8SYY4V3ig2pjfnYYoLkmRRHgjdbqdrVagnxJoAF14x5zubZZy4i268L7SEaiWVh86zcTkLU797ZkfTam",
  "key14": "27TMF8Z7otg8eMwtKdjZLvU4Rdzoc5ANXBzbNfKmoezmVwUq2hcBDhhf4VYef8XDJ36jaYA5bTuThsSN97fhVrQ4",
  "key15": "37F62y6bX6Jy8tXCYJHeTqQFqKNH4uYHftai6K49nYmcwfD7W9eBU2YMVTLq8HSBXfuPbnZBuqE1YtRXGzWtJ13K",
  "key16": "2LVAPvk1dim8Gv2bpq3rcDqTxT76KHZuroVXxCowqZpBULsek8gFWaYMN9XtWYfpHzcpwixA82vQRpoE8SSxDfkQ",
  "key17": "3TQP8wyacd6RifAEYxn7S1R74cbrn7czxLTGUCoJ1dBPeQQqjzDXu9JESUbQAe12CRz29V5VJGm3cLhA8NgBTAH8",
  "key18": "5cAtarjSjvAV5N7c1VBoGzf9CunJuSSqfpgysDLB6aUBD2LzLZQA1TgHuFHBT8tDUwrtjYpfsKwG6NV5rXkke1TH",
  "key19": "4iYvT7eJ2SQMjVWp2UEWQR9t15Budk4BmfAqD9THALih5DZxEbdNusYLtyJra6ir5Z5EPyQ8yvXpQmYE4uxS2xYz",
  "key20": "3WtFqRw5gFk16Ru2T9pqQtdSpniEDmrUriEMo2dH6uMi2zGofDPbL1UA44FaUoVz8JuZyyLL85yqYRUgnmeqiYbk",
  "key21": "59arbZ742FEcq2tBeJpdhCGNCzrZbP1cvV22XrYFkhKfN2UJnh9JVdU19fpN6WD7KBjVNSe4KWaUqbLaiBpm7vgH",
  "key22": "41AbNrJzk8LmezCFYWBcKFA2xpoKoHWxZ1eugsTm57Y2exzsDQsdrbLpu5dTaTaRnusoF4xU1Rst8RGVuEsCLE6u",
  "key23": "44yNM5cYtD33LcfMFFJATw2ijgJQZWtmuubKUU6v37j9d4SuxHjKRrXzbuCUyjWM9yjxk6iTBqud4boAFnCnZP68",
  "key24": "63eBoYroCmg7SHrUi5XhfQHwyJAWZiaKzUDannLaFTzJje58Qn7Via3X1UAn3kKM2jzKFX5CFv7Qgn9SwiBhjjHf",
  "key25": "2a8f8oDFivQVNUVDG11uMkJN67drtwXtxBJVyoKaHDqSNVE3sN4U3oLM5wGs9BZLZomBwY97Lz6aqWbHPyRLuXuC",
  "key26": "58KXRPbqPR5hLgkFYmrryrQradZqXtaho7mHB2CuMdSkBPjrGtKAMCjxRG1ec1tjVF5FRh4u66Yx5KCjdSBHwF8c",
  "key27": "3umtQDzcS5bcBvypy2FzhuRkvd3sDE8AQkjvXkpSksajCUsEuk7Z9PaLoa4KxCHTiTvC6ujp6Ytz7Qmmc6Hu3yEH",
  "key28": "2PqXvu61Bjd1L4W8JWsfbJ8uyn83rYrJxSTDUTud5YY5Bd7ToS9U6Zgonj6HEnrFRRZD9LQfGM8FZVuonPq3CSjq",
  "key29": "24TqZmvtkVH4oiPPga1tfzo2yX9Bh52eWuKACmbDzCCrgXfoj7DWu8tTUV6MSV3Ujg4Rz4PrYrSXLG1QFPsRsTYM",
  "key30": "hXY6ad2vPKkDgsPNHzTLSDe2YzH8cp1RCcYoKnUTJnNf3vQwVcrurans2HHQAcAzF49jgusednen4gbSSKWRPd8",
  "key31": "2RtiBd1VA8c6V7ngNBykLc35TN1wnpzY54mpwZ8xJpaDbNf6g7dMGtf1xMNf3NsTM5XXFvU2wULLoj7Hkgi98v4n",
  "key32": "P3zUvZzXErMHJceroXUWmfQZ123wDSbc6cWVp26FmC4hyR2a6wWgyh1sE3cnC32dTY39fGe6GmRfm8Zkxt4NAzR",
  "key33": "2V8bdSL8V1oQP6EimK3JhN1gTqkpA8pECpJs6wJGN4uxhsc63MEZNfcwBT7LhRrGWjC7B3umw8fAYDUtUDhxmqKb",
  "key34": "5KuBhjoLfoqkoLkFSW5YM9icizXCg1K43ifEN32LbNA7FsNvpntQRXGPSafx458YxhEwR3dL8TS918xkPEMwciV7",
  "key35": "35Z1CK5nAVssSmkuT2ksuGh1tV9hruupP94RJhZZiCF6b4PvHd3zW6GsjNFTQRnKcvw2s3Nty2eVTpqdhC8tHVRz",
  "key36": "5wxrYCJnXVxmQ4vEFCidaWJCU4v9mN3MHHJfVNTHgWs9mM666rvzSo7ZcNAiNC3GVxFBhWYFBKqXgeM4Wtf8Vidc",
  "key37": "2Qbk1aD7D2FTr3CsUqGqypT5nS7WweeVVjaJZKcn3gMmo9ohyBaouXcNDLJr5J9qDtqn4VcRAKJhbZD3mvVk3LW",
  "key38": "577MTNC4PJmm9CwoMKjjEu921kHyMNdg6eDce3xEDM93G7etwoYZnduAS3U5uB2D9VTVxvvYjYcfdg2dmsf3ZjRW",
  "key39": "3tbLTMAp29DN5bpXwLL9HUkx1wyh3nnzVefEnRTeM3vtXdpd25kmv6SR97BbBSKUhDQJGAWDaYMjCDvvsakJ6daX",
  "key40": "4xGo8oPXxdXoLupWdRkGQfrfSEZt4BLf4tetzL9ehYb2rsm1ViH8owiSEU8TkhTtg84jRbAg1jG7r53MwHg4GoVX",
  "key41": "27GDQFvRX8wH5LLiWh6F5Uotq4mjgZX2xXDDLd9pSp7f61S1LbcGB34pknE1ifsfciWYFCpAqBxk72p3FtVKxF4h",
  "key42": "4TcMV6G15RVk4uuWmGUU9nZfH976rxo2rv4SNNSc9a6dQ598i4Fha6cje1U5tSwSoCJ7LKAAS8fUGPxoYRokPeVU",
  "key43": "65Afy12Lsf1sg1uv5C6Bn3qZcKAoKySEaySXxg2fuVS2pQwBPu8wtbZSKekJurqUdb8pxnfrjPHAqgTAFZ3ziXgr"
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
