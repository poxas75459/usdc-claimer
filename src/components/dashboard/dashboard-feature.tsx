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
    "4bQqtTS2fSMMJRueBPEFPp4xifUkQVH4r3zb9wpmhFjZbua3CoMJ7gRrw2PuiK1iA7SaCYKpEiKNaco7r3C3P5hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xAzWgjPENnfthqh8GCzwwPaTfAwhty6tXcaZggSD5aWZ6f5sYVkYKYR14hKxkfgSG5Fu44YZRByEAYpNVjcH62L",
  "key1": "5PXxuZAom4TZdgdqquiSPXtBumjzu3EREA7Fg2e6gVV3T7yAHAothZcjPpQbeafsyXJ26RBDdd7USejPvQbES4yY",
  "key2": "Q7Feoh1XiS7NH4NYjJafwdCEbJEiTAZXGDZyUQXU7Tv2xB4YDp2MjcFJ9BbJgQzR7KsH7SdLpTqbNZ3hRAXy4tg",
  "key3": "23SxLJn14P5TtNrM2XEKBVMdETECKpYk3UoRa5Zv273zimATxmTNnqLZUb2R5VLrcUY2KVcPu18EriAkQy1jjEjb",
  "key4": "jpZJj9RUPBhwDN5UHsdz1B7sR4ec2Lry7bFQ1pHwjVCiaSiFsy7d6dkghbxAzsckxE5u3WzwLhfPULGnY6pHoU3",
  "key5": "3QrqqnpsTsKm2bJBwzk8jM57SXGhauqwGHgJMWBoEW942KxxnqVddFijkQGzZo9iF7xxVmgPLYSQ3ZVTkwKcfheu",
  "key6": "4r1DcSLUpzimayDJdsc5z1a1sUHNuRwMAUj9VucVLzkQ6UrajthAbZhrvHw44CW2sH55rA9drn3dpSpJaYrXsmoj",
  "key7": "2RTNFsjh3WLjm4PrFEv8k8YTgQ6koFpRTDdeP7V4vu7MGrZ7XmG7MJXEXdRY8Xpogv3okQmrMnvTUGUZzNLR3Jn4",
  "key8": "4PQ2fi6heQZTWLuE4fPcAZ8gGJbKKeG2gkNc8UPctMWET6G6DhU5hYwGfXGTx5qfP19HPK12X6DuohTQVzzSPhhP",
  "key9": "2iC92YXJ7qhivT31Mik7nSWrDmtoZyn284DHxq9vsvTiUfFtLGgAb3tSHqRn8fSbXazyebx54BFKUVY87ECTgbQt",
  "key10": "527aNnmBp6xq1JjCsmaRSaTE1oMVJYV2GAEuHMVatSfk15ZJnfbuejz6333QdtrnNi8XeceuN5y64RakqtJGP9N8",
  "key11": "2U9QYguKS8cwbahhxvKsSHaxAV8yyi8ZyhNii8dFB9q5CSA3gn3XsoPQxkLqsr63mHAU4jYLjvFmy6PYSYPC33TT",
  "key12": "ZfRcTGmYmk4Co1qL8ZW49WnjTYCSzrACKCoKPGWctSyNYua7nw72V7j57pvPLKsvv1DQjru59DyeWdhTkiMwWWk",
  "key13": "jMhCPFE1pwZAuMqaxXLd7k5RXWNSP9nSxXy6FRWnwFhLYYmYVB2rviajecSLHiT8JpX7D92VWF2o9YE2Xv4CEEC",
  "key14": "2Dc246UTvSEcy95bXSvNaqbivgXLm9CDUrwaAKSArbX9QxT8hkgMHtcPRho92WT1S1LBdJ7DqRYLztv2HtEpr4xV",
  "key15": "5KmXcB9kRpgTm1AYEBRzMmDwH33QfotnHGHyEGPvufm26AiJXGzshmxTR6i2KvMvAXdKCjmb64hYAVqazuq7JNVE",
  "key16": "3Q3du9keKVF57Q3huMPRb5SxDSExU6pECeTRWzzWraWBdWzCE1boMHsLX2pCVuDPoH5E5Gk4tjCDgc1njj8wyZEv",
  "key17": "54gTF4P63yuELJBEF8c5zFcbSfecGAzEm2xbRzPydgZXFA1oMzxEPuVzKV8Wk7XcJbyKXQqDspTRDzRAG4NpP3pF",
  "key18": "uRygRuWNXYjb52dBGQo7WwHndWH7aeWbHRZA79rq5W8q1XZp7FUhWvqSxorEFDEjJGQ1dffX5tEPRGLwUb7qPcM",
  "key19": "5sucSJmuvAhpCDjwWdiQA3RBFs3F9t1sGZEuwJ1o9FDpudzMn8aW5oGVuidRapMfrqMNevkMwfLrrJqG3TqhjaYn",
  "key20": "Vy7Hmcu5CjoCQ6oMz1o1UYKQEBaHrZVVT27cc1ZrKfHnZxGCNcBodYebS1Xo8D5LEoG8yD94YxrffNzgCgFQ2GC",
  "key21": "38RLm7LTrpEu9rbdUFDYYmrpc3vVTmBNBAehtwmNC1f3rCWLCCtksgwNp2N5QkXssY6H83bMUbgpmNS16e2qzMoW",
  "key22": "Dqbj2xrsQuKjttEyTcaPsbhXk1cMfewr5mvHwaMrGgkvjR9vNZoDQdg6sAW8hNJ2jg1L1R4Ruw1AVriuwAETcGV",
  "key23": "5naFGANnBcumPHQ3cW82T6dJAi58RdLe2MK4MPyRvU6TUg45LYDWWAVHX8nnURAao6zQRsZB6MCgxo53zkDCX55o",
  "key24": "5E5yfcZpAM12QPyu4kZXjHRHxfJqvN9MnjYvk7rg5UW1qKT2WGBy7ZjMk6VJTJcwG7X1ZJwDEEBiUZ76sQcSLBPs",
  "key25": "5TjjxMY9T9D9msJWCcTnzr5b99DpsVbsj6ZXmLNNVjiw4VVuAS71W73JVSaUvuiZSBpPYUnN5De8W1cRWu31KrYL",
  "key26": "4cCaRURLg8msEDi2NcNiBzxr1qiewYJ8RhA5qRgvvrmKcE23jJtsZehsvRoMVF7aZ9yDfKeGU1FeUggTFYsoREss",
  "key27": "3nues5rmcUm5zzG3sDaTiCgV3ogpisKeATbYGVTqLBfHWNNTyF8meE9qrCKvwnoYcte69AQPqXvZbqyqQwZwGn3N",
  "key28": "47WXRNTqsioUsw36RYqB34Yyyvv1TTm7K2BLcYZ56NLNUT5JABBEMmh4DdB8ViqiUJsUcFXp6oYQSWV5QPcsSp3B",
  "key29": "5cq8imej6gD24srWAVqiXBYuNxVVgX4pwbaHg6afmTFzGGXJfckQSLfDHYmyW28i5zNHP7mwUoa3hx2a9U6zdnPg",
  "key30": "2YdSCJNBvURYyKYdJ8UJuBSgD9b2oGUmfND2vpYaPVNKVU8YVHYbJRFrCB9B6Cehy19e45XHH8uvjmoR6pkuKaLd",
  "key31": "QeE7Vqm1AE2xKTQsorYyaZ4byHXUqb5qTHym3UjgHyVWnUo7CVqaCAjSZExVtBbRJjssG3fuJwdp8f7AGP5kpu2",
  "key32": "4RKYHb7hPR457BoEJRCRTjVV2vnrSxD6UF6QD4AdhtCD1hDXQ51kPDGTHb4kvXAguhBdzufb4HQpe67xYHTR2qF6",
  "key33": "5rAhziDQTQLGSHHqJSdtCu1jaSCeuJ6LwA8uDzK7i7MvLSzEn6d5k3HhQpyWvyoaiN24qjRVTUgTgbYQ6YcpCsib",
  "key34": "4jdai2kEPo6HkyKPwi88SAXmAhk8LjKx81juix36cy38794crdSikwfobDMUj3UXXUTNCVcbquzs8YSc88WF8Jed",
  "key35": "1xMzMfyvshePVX26iJTVA5NSCFS5urDZiYJNCysvD3ucEnzJrV612bY6xzVYRg2rQAkpLZdxPc4pUGUeZs5KUNG",
  "key36": "241zVcaZ6Cjqh32VtCMXw9zaQo82SfLKB5uxEinSQjSbkMuWNrob793GhAvBmmMQexvLupomwTBWfgxX6VDkhaYm",
  "key37": "3YbbLZLBiHftoBDsVobsSS8gVGtfApBrLynf1Toj2nBFRwHgRE3p2Wg4pT4gyNcoC8CUXPriJmbf25RYjEHUm2SU",
  "key38": "2hnMP4kixKmQQ1wSZMT9oc1DcYMX39qLmmrwAN9eFDMnC57pW3ANBiej9xLqMug4PrURdCu3T1rcSFx8XDBwdBBJ",
  "key39": "2ykEwsWbd877cwi8CTyqiebEcWaefxeXncQimJdMBtNsv3sgshL7YPurQky9uS8EaMbruLFzKXFDeiAXpBnWTsCb",
  "key40": "3ieFCwgVAArb2F6qEhtQvYaUNewvTg7AJ7ri4V7avRAvFTTL5yq4Zd73tPZ68oKysEteJxW5JJoxZn2KndCoR88U",
  "key41": "MB6P2kkTwAs61GucaCQfyZVK9MoWy4gXDxDeDN2QUf3mgqsonvMMVk2nWA6fHFh2Zo38qLs41psA9N22PEoUGpe",
  "key42": "n96rM4eEvCRMZo5PGaxwjPygGizbQUWchNGFN9wXhp1gymsk6i7qYW8xo6rNLzsDXWSvWoTJAMBpSUp1ohdEgTd",
  "key43": "65UNbZYiyNSEHcJux9nUqgFfxpYJtzb9RTHg8jsjpsZBubJqHbeLz52GC2bMbzPAFxVbnvVoRjDdZey6Xp8ZczrL",
  "key44": "4VW9WUadBbRHkbapYUdynm8trj7tmvUwF272jpwaU6rsLdDN4AVJ3s8uV6x47qKGVNb13XsL5joyvNTuAkWvoGGG",
  "key45": "5Zmdzm1VJmFSRc1rrbaCyaDdAuBmnSVvpEs8wC1w57PeyvnZwRkYp5rt1axRv1xiKdiUANHEzZdTCpXSPyEFoSVL",
  "key46": "hSwsGbDm7fVQYsEwRTKEKAeof235RxUBp5DYfFtnEdNpVqNfnKHy1NJTUTwci5wNXgTM1bGUpAke4rNx7DtfzFv",
  "key47": "48fNmgYKkFEb54sgi2cv6pVFGK8fyZAtBPPQHhrfDP5eAtNjDHXgq5Md2coGc4puCFKBR81PjF4fz1FgUpFCBFNY",
  "key48": "4E3hvFmCJepUAWPUNzkif7kVjn1oNqRVSYjCkEeHX8g7TuB6S9HhjTjRbYMiiJQJknddsXewLbiDB7e8tNXKC8bf"
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
