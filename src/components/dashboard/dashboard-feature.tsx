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
    "4KMVR3oyPmWdZZTvzhtgqNBrJXRFJc67ZKzbPNvqFxi3my5f57TTMsUUtRjjuMtoofy8ErstbCiUCE9jK3XCEDuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1AoTdRAaVoWXWuEeuXgphwffqeYjxC4q4jKYhV1fgZfvmh44Lem1tWCpKp3cV11BVoDauNVLwfENifUosCBskr",
  "key1": "2HBTzLk1f1hejN3JBJN5Csm27J3w4r2LCWYhdSq9cueiGWfeAF3fn5Zs3fvSfVvn2VGrE3XtYwAGrnLoxBtRtoVj",
  "key2": "244sJy4Afnbtj2EgpDo7Xno24jeqEnHAntNZdX3qFjoN1R6yMFxAddqPYpD3odkrBLQ1nGLkRaLxQ5dKKPRJXVUq",
  "key3": "QMcxoFf3iod1wWumtvbJXD23YpiM6VCBd1rdD1TpsX9YDaHkW63YwNWvygpaCUhkGV7Daw3vMhLnSskkE9TdEVe",
  "key4": "3Cytv74WEnaqb9MkaCg2BsKrsdusBJeADNt7DtxzjqS7N8aHzjzfSmxFJr2G8aLaiapvW7gwcekic9kmrbL98uWv",
  "key5": "4z4M6eib5bbSMdz4cRd43wMNJ7t1xxWvN3S5jk74R87nqd2eCnAxDSxm6ZZ1fcVA8jVjCZ3qADDr9UD5KSmm3bEz",
  "key6": "3GqzRZ2z2zAutTqaKzhwSejVL8RX4Kh3EnVwstr6C4Vp2GBaDf9Sq93jrGHWS44K8v2pS3kmE1xSJKDpZBUY5eTy",
  "key7": "2CVzmFBVDtueB1K8xTK7EYN43cLA8MKdkz58EJvQTW5cCGi29VeVEMhsLnMYDSavRMvzdDGNqAaPt2TsTNFNAqN4",
  "key8": "2Cte6ap72BDQyoMLYf6xQHnF9hba8nZGMgNXXB685d5pkYr8mdrzKbHAWeEnqwKb833uST9qUepy7VYy9cXEPk97",
  "key9": "4BCFy3bmdfcacfpZUJtLx8BYqYBpFg1g3kug1rfGj1DcTfzgmX3EbBBHaN1SdWQwQBRcYfLMbHSMEVPuNYGA5TsW",
  "key10": "AZfNisDMBwT8DnUWzBViRu9m1okE3tngcoYd9YjyGjNU5Li5mCqPynYUanbtYvoaaeiiKuE6siQjst797dKkAzi",
  "key11": "5BhqoaMi5vHU1s4bHog8vrnEaRKjkx8qFAvmTh9pfwN2DGBTs515wEMezPfTyRiJuhsQgUTyuazW6QrkZ1yCzBT2",
  "key12": "3EsWxtnyErszBotdN398rtdm1sxqXZLhVoATPdQVrdUmnUrcKBeZa2CApnQXwcpDYy6YPxbx4j2RNRj2HrMfpdye",
  "key13": "oevekwRgabywy85SsfTLQwVMBtXVacRmuBVULnvFcaL5Zzu76J7oR4P9DYKfwjRLY67sPMXEr9xsppF66gqdJr1",
  "key14": "FGw7BdEm6i8s2y867xFapZ1s7o1ExDKxkAgfWCF9K31ENWRo5UsUqZCdCrdpEMvWZ5S13HmjWbzoJ5ZvDBGD1zT",
  "key15": "3fuJxXCPeZRaiw7b54UVc1nz5HHYzdhYUQ9vmq1UH8UbxPse5uJshqjmq7mKHtjWHPZFFeNVTcVUKmKz33ZgZmnU",
  "key16": "pCcYpoSUqMZANEQGdb9BFLnPjCN88SZXxGHyNGtCy2EeDxwodqctTjqaNZNQSoZaMoLpGLUVoXpz8XAxVLkwCMB",
  "key17": "tZBe3rTbmJ4K23G1QJN53Bc3rjte4iGJq8gbTVwxJEP1JRNutsDydQC5Ci9cC1ippdWRwBuGk2EdEmTYJt3zDWj",
  "key18": "6LDZsu6PobGn7TSEPNVyaLSbTZANHsiSdq9T77vv7DYMfD86oNSNRBcCGEzMr9iMj111JXv3zWM8PmhPJHPijxg",
  "key19": "JFGWXGsA8pCzmkxEyGpKsKSWQwqT4odGe2WFZiptrm8iR7MKYCDCW6VxTV4eaWR6yjmYt1vapgoZsP36CzASGRE",
  "key20": "4FV9jrUrQaTReuiheXU9oHvfYagVK5QZQGaFN6ZJU59vasJH4i656is3wFfjubcP6iNWzvMP7WVQ7ByJ2sAYj6AZ",
  "key21": "65CU8RQDP5z543SPYv6p3SsJprQYJRbBxWSjBWuTnBbRbKnxVAQGbRttP7m4tfZ9MW2uQ3ExGYptfTZPz7HfvxcS",
  "key22": "2aE5hmW1xGAESYVtvc2nuAUJaSaTx4GyC8pfo3JJ2y5NNbdN5TqErWJMcRZfriM4kq3v1DN8hSeZBfNABiLposDM",
  "key23": "55FfdVTGz1jWhPxjCUAyPMN9nFAsnueSZDBKfAFTf5ZHbboKNpvQzYX9vxqEphCfpLqFnEWEVkXzkSr32y587Ntg",
  "key24": "63FvofnHsr5TREE1zCVLG1XPVAvLXyVGfGN8bWbaGfUBvjvYiuniMhXTSZXNdxcHqwEnwPJkxuBPt9MKvKTTwKNq",
  "key25": "4NCBDg7A6JSfKdV1254k28PuSMgH7v8AKGxniHJsKQHBqTx9X7tQJ63YoWPoZzQXzgSdiYC9HUC3wWcg4wWbCQ3N",
  "key26": "5AqEMhywSQdhWoomHsTHgxUfppN6ax89GhcxiuKv7TvUWy6dpuwmEriG9GuwEkyrTvrtEzSd1SeFyffHf3WJRNEs",
  "key27": "4K2mhR8hwRsJxfDYAiZNizu3hmxiZxzyHVrStQ67WxN9aLL8otDSAKXuXCMjGmJcxzY7nhQphRsWNjaEev21iHkx",
  "key28": "4QWYYNpyaYkJLRTnjjg7LLuXq2qvcwVKqrfGxSnuPHadK5aikQypHbABb9PGBssCvC7R785M9RvPQWUp2PD928P8",
  "key29": "2k37dLX9xHsQiMZc9cExp1jxXH8mW8hUTNVmkXbkBtaPBjNCxkEEAW8k2cTdGq73QfM5Go2F7iiKirJi5PBG1HRS",
  "key30": "578zuEoCKNK2Z9YcRABSn2dUYEvtZq3YyDv4U2zv6TF8HtSXTG8okgNHVKkJuQnANAGsJmFaZt6wwXZTgQ8HSGFv",
  "key31": "5g1BPdXnNBtQZZKXkGh57B8rddUDrirbtbyR9XRUakqfHRpM9wqMSCo2KhskxfWsk7BHzWMWe1w8mhdo8ZcDf87P",
  "key32": "sYXVw1zX67eBT2VfpQSHhgs1Pgav8fkQUY5D5kdRQ3ULWgR5avf8HywRbHse74A3Nyh6tjTVVNc1hY89NoZEd6p",
  "key33": "4hgBeng5Y2831v9p5QkGmq97NEe2H7n4moKVoEdR6mQQSyXEQLoPYeadynEckDv53uXcoDtPqxkTba9dSXEJqwAJ",
  "key34": "2Am8XvUvBLMdpkmTXmULr5F9eZ3tfBxqoXSnLgco4PpWLRi4MtKNSWffw1ZohRPyFiuxsgSiqEs9Cbf9bmHicPgg",
  "key35": "3w6dBonL3zintq4eih9nuffRoHt8ZLZG3d61NMA5QezRsYDorTenSudMatJrUeeJNZr6fLHH8CnUgyeZivPtjSHW",
  "key36": "3eJFx91mYnK1zT41wUV5de4gKstuoaDV5sjVgWVLNDXB1mhMe8Rt3uD93pnhKhCfMRH5bckTy8ViamWfKzZ5TnE",
  "key37": "45Y868F1CyJ6w3iu76tu7zec9qM753u5niU5Ydyf1d1ztVAkmvC2a9shjoukkcHjqJ9vJNo1ch1MhFb4XjxUB8Zh",
  "key38": "41fa4fb1Xg9rzNxY2YUTZrQ5Kj8rKpuRGfrWzwJkGuEsDfUZnPziCvmpYB5DqDK9ZYkiUmJKgiZZao2T4yxqamZ1",
  "key39": "34pfEAHyKVJrQN9a4xA8F9x9MK8T5h4Mkysu7CeCiheYRkqbTbTFSvqdurzwoBf6rdxUmFZopzscLrCB7WQCPjb2",
  "key40": "4HCwnkjKKcvkbedjQZUHfyJcaBg48DSCxJRVSLTZeeog8DrSLW6ioojkhz2mGrxftdicxvDhpxG8yYYLNwdoonqC",
  "key41": "4SmXwNPNy1zQRuxHYwKwqC9hxikQMM8t4iUWYF8UjEGFXNGGuAfGN9bj3LAKo2Prf6pEoxgQrQmvSSYS6tK2DLPT",
  "key42": "4MyaCJcymx3LjCZbRntem3x61gKZsvtCFLs9Q5DLrpfnstP9Qt9FVJhQ8EfR4wK2XGnkok1fE7i4Eg9EwZXaZaT8"
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
