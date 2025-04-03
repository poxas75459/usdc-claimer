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
    "dgSmFk7joFwffpFPMzVFqQ1bL4U1fBba3BuZkyac7hoWAY4J53ukgbDUUx39g54ys5pg64AbEoQjHchAehAFwWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52J1R7Tsf9bFWMQA4JWi1RyDmHB9syobbYhZ8eXBeQMooNPn6Tst5fQ8qukCUXiBeB1K5kRn1yAgXtk9D1ZhkZmW",
  "key1": "xTfguG2gBNzvaDopJoHSgb9wh4euYqaiCF83VPGxf1oT1zimNQ2wNXqcVp9w4RrftqZJpeFwWQD1yQbCm86ce9q",
  "key2": "bvMTZdh7B4dGif874PkYfkjGnt1Hw4Hhed751fLSqskqTW1uyS5b6YgCgeQPC2oGtwxaa53ocAFbNwFAhMN8BrM",
  "key3": "A6T7uJ8hGTf1hJMeWHqh1Wd7Yv9YM3iHEoPcxpwfytTakBvXsFc49mkN5GNojxNmeEGm4aDFKNFPmNZuMjqCxuW",
  "key4": "Bekz5LhxJTF6bG9UTFwy9epdyBgWiQNp9ungmpP9yBSdAnz5YTKh3xNw2isWGaEyHap18XuXJqj5Ubh7asZdxni",
  "key5": "3y26X1PBrmAQsTBLi6JAycsGxYeojZNgcRRfFjL1NoZdpjf7E9bnWjkuyTW9buSsSUPZaJw2sQJdvn1YHjnoxRMZ",
  "key6": "39mVmBXgoTGb9rqqzff3ptENmQrahBPVN1JksiHSbcKWU7ecaCQw2KgwfvAMLtCUvYjhdauyZ9XtCeeD5z1sJPTc",
  "key7": "5o3AyCcZV8MwEKhQu5XhQ1bRidz7iof4AXdiscVJSu1XcgHahzkTKAQz8HWNQJSB9EwYqA7BkrxwXHMrNE3EzJ6A",
  "key8": "5UxZaA6U5VXcGum9xbbSN24bQGcKY7Vv8GyZxDv5TT5KmuxKRTjnxEniw16ndCbH4383eaPiQJ89iTDurfFG7etL",
  "key9": "VxkdM6yiC3NLm1B1FXgAwcaN22rosn2SYKF9dMxqaYuCE2tNAvXsP8cdszG8PmTbv9YNN3n9gGPtPE5FSMDL8nz",
  "key10": "2c2BEAiNNjo7VwELhX86TsSQpCqgKPo1MzTdLjCKe7eDoaUa8X9rUKdimwkijZDEGaLtLfW2nA99pNj4BqnaBfjp",
  "key11": "5qQQ9kwAXFw9BQprDZBoo8TzviEsyaPcbH5BVvJsLFipszXxmQKQiXp44H8DQsMax8qTFv42Bd5kmBx8v6VGre5N",
  "key12": "57rEdFb3WKamR9HErfMNMWtRFeKQTVtCTtKSq5pGHAouLFzpGUUQ8qBSvT9tjgnaYGph2wKTMFtrMdXrUt8NWqo5",
  "key13": "2ECRv7xi6XCUsyB1N76WYU3YzHiA9uiFPRbjXdUAUuYzkUTKv2DgKg5w8eN6orhxxxuKJwSxsC4pJmkkpGp1L6Qp",
  "key14": "4H6tpTZ1PggaMBsRVuMby2KuHgUj1wEfqcnPDyWjSzD6PnjZFKSBFLPDme9cPex7pd2TFRgcjBypRat4YdBx8747",
  "key15": "4sKKL3UXPc76d9isdnnnt44pju4oDLm3JN3kjedoTn2cghHh5A1MfERLZDp3TVoMbDuUtiqpBehELozPUXYAHvTh",
  "key16": "5imquvuYxRtGXB1BeoPPePWVAXwa6uXdEDMqgJ2BB9UcR3iTA6h3obWJevYjXNFkgWRNBY7UbeLE2sojGqrvbFzL",
  "key17": "2ug6bTMzN1EKgHzc3MWkTu6YnJtFS2DxDbWVxhYQX3tJ1d3DrJo9dhcTi5EhrKGYLnP2SKvTznM6h4bNLUgUmsDk",
  "key18": "3QXdQ81A1BQ31qo7BdDPcb7D3qXtPYJXJX9SwRXJh4emZXn6bdmBEYzyBGXhzHrqFwHd7ArSid2wUbLsTijQn2RU",
  "key19": "4kQF4TDGiKHgqdjWfgDxBMB3JVA1Y4q7GaiAMbhPKRfjgjMvQBSSVxUVRh1R6Y35yyRwBqgGgFHKYG3ywSPKZuZ2",
  "key20": "5EZseqxMWRWMHEKMcuoxZXMXB2JxWBuWhQi2bL9j9Yj8f4PLJLVt1fZW6tVSUDS8zjxLVnccCjZLrstPrYdTGrWP",
  "key21": "3rYcwab5sB5ifrj9LioCnqa3e8UpV2kVMVEtDVoE2ZGz3dZY3BnfgKZ25EmQiRQLKxH5woR2VjdHok6JX8tDAr4q",
  "key22": "77UyVBgcMMu7s6Yrbai12VNYUHxJoT2dUXc65166jmaGVjHQoU398z5hfXpi3v7fPNnAnutakuH4ykdC9DMERsM",
  "key23": "5g4ZC3tGtbzq7AT7fuP9qRqTexw7BEQNx3tATMBdqKoVD5WVJdyeAPiy35T7FGZwwTMAW6iZNQNNLG8XTkCUPB9N",
  "key24": "53EgoaQfGpJgcN9M5iRUBe2v4dLfpkBdHiH65QDTGP1p3EB6shk9vTTaELEMAZ3ZXVC78ijbCobKgmeBuCe5FXak",
  "key25": "2CRmyw319r2fGmbMfhXzEgGAsNdgUe9MU7VGoDgfZch7k1YqjsSLXG59YpAQ1unpaPM994Nr8ZZL2ihTLPx6x8GV",
  "key26": "3VjjBTHTnuLAAJHvTZm58i7GyW6fyTgmds1LU8GkLAHCQnShduEQx9kGhPsB2KEsUvk42nSHf8zTbY8vRcLJNy6G",
  "key27": "4CfVATH2LBRMMLThciJSghMEfZNXyPjb9d9GhDyYCRcwwdRNorLjaq3A5U1fhSXBfPVdiAN5MbgRZdpt6ESRgArK",
  "key28": "5E7zNRidAiCC2JgtsWNSKjiHj8XVM55hb2Po5qNiApvxQZChxpmZSRDVHiSyGLU54C9W3VgL1ugYRqz31ehe4Gmh",
  "key29": "57pAyUccpmBLn4kj1q8LBCb41B9mhfWoXcBZN1x3VfYg7tsLMs3thNSFmJ5TPrHAG4LjrhCtej82sYGAWRWcin9U",
  "key30": "2rb3RNPm4vkJrV5qNid2Jrh2KZtB5cY2LPVNRFSP8TDtkUnDLhD8pXcLC5igpnokRuQLpvfwjJhoRpHZKhCKubog",
  "key31": "3D9q5L1auPfVU692LMqmRekEvkDKTDqEzoBnrjYWZNc15vWCrGoecNMzSuTgcQtmFXR8x5S95A3V9KHgvEMUyP8k",
  "key32": "5zVBPBZGmcVHxtNnYnnztsnqFWveHLYgfKJYEYMC2wQ5HkpMq3vDPY3f2oBeHVZnnKzcKgwoJYipFXecgUKV4aSe",
  "key33": "2LmvAMKXZwaSzjF8rYXkBvz1b4Awv9FFSeBbUDgYP2zhsjtZy5vDQjdJEK7yRb9nQpvJCCQhpkjLqWkPAY2TbqCg",
  "key34": "2YquwqUgPCpXsLyD1NuPoAdwJybgZTG5DmpaWzvjagKNUfKweV5ZKVvE65knmPxBrmLixvnCBJNkEZ9WB2iqYh1f",
  "key35": "2HNfJiwfwZLZKAR8XoCnd21H7YPNKyVwXSUWAzxXAi4Wp35vA5WzFYVn71gA3aphWtoa9vogtcYHftwVGbDoo1dN",
  "key36": "57z8rVx187bzHrbLh4ULr8knfKSc4tTGLMeSAyunp1BiSLTzjzFMSnMVsvrZTxxe6SPmmFQeqwAekCvBs2SwWkfk",
  "key37": "3obZSTzd1mcKr15uxZgv26pa7zf3rhPofj7FoyJM43ARcGv1X3DV7mQqN4AhRpSpUB21qyEV1Cm4spF8oC9ssVRf",
  "key38": "4TiBDxbdYqyXmmDn3nKLMiKyqEmrbpHQkYNA7DNKkKR5rsjd7TFv369qZJgEC29JSk5d2QZ81Ct72MAYL14BnvDk",
  "key39": "n8uY39GBNLAc5CJu2FDLwU4QwqprJewdq72on3RRCbopaE4UWYhzERWyfD1QybEmLQLbPdRN3UQJdmNAqsa3soZ",
  "key40": "4PegKrEZKCE1zN1bVarWJC1YtaFXkdco5dZpuzt9J1FQvhieNpkr8d22wUWTJy4k5quYc91tU9Y5UND1KWkJdgc2",
  "key41": "Y9nwqibTvHQgqe8w3mutRHJtK5gtDLHVo7evvpruXYNpswfwrsneBTojX4CMdNPnVh2zb7GoBN54Z3oQusxy6qZ",
  "key42": "4qqMRM8waKrXv8F9oJFWgpmnxo2kBNEeZ9g3PBgVFqhAzsNx7K89wa7ZsSXVCjg221QCZhtoY7EjXVf7RWEPm3UY",
  "key43": "4iLagk1YtBkLQBmgWNVUUVN67MQCsWGafM5jAV3yjntnyHZ1NyKLZP5J2DP1EkEUR31jrwSLsj9j5nBAZytB6UaU",
  "key44": "4X6tjHPkZjiHGsrZkrtXo3NmGKvTVYPoSaD1tJBETPdk8XrmuHsgJieTkbqLbGgVkH62PT8kMoTWvH1PqDQqDYdk",
  "key45": "vYkT9JerwZf7YUxt6i3XoUdmNZqrrwFSXhDeP5CK5XDvY6BUtU3eSuUQN3eSGG4APALJayrCLq6P2NT9ZHCBQVF",
  "key46": "2UMYvJUg8DunRZUTej4qt2YLenq8VqjH1airZrFBxoGCNRZw6y5ViwsXC8trySpnGdMzgBtKmBhdtSAeNV4iQ9CV",
  "key47": "5Ua2gxmkQ7MCqDNc2MpEpg4M761qbqUVehvG7gk9sf5d7uEXqjcW9ppSha5ZJyJ4s1BjAKifxkgKfkZU5rZ5izdd"
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
