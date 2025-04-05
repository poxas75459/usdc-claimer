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
    "2nfTY4rsrXHJfSjcnsuyxKn8jaKRsezmSXtHFeaYy3Ku49VyywBevwbEbyyX6XnNE3hJ3Q4n2tkEi2E7jwdZLg2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Q9qzXhLwNZgqenGM2YV59BbPCuXBwPyZ7WNcix7iCcLM5LDDCRxFk6nHdBL6ys9eJhY5PUedQZz5xzC73LR5o9",
  "key1": "5WjiuVrPW3MaXBW3iFHZKw6aJJgJXRd7bPiPWGF7CXwKtzGNkhquf8Vpdsksau8mwAL1GwLRb5L6qEVwTsXq5mvt",
  "key2": "41zRMsPuSRJQV8Jc54nFrKZf9Fv1hkc96HtD28n3AsMD3kwLYUzMuNr8LajkoP7gZ9B2KP6iAivfV2wHAuMuPGDK",
  "key3": "3rUtDhmUG1bZJujuijKdoYztWgdhNnKfLLTwVe3aGkKZNJbyeK3NKN1V6mHXWpkZM4NLpkhYyvAsZccTRRoNUmxF",
  "key4": "wyQAhFS2rAJDf1Knbip1sYovPDgvHmyoUJB9R1rBsA9MuBQigCF4gF2M5F38iKWnggu4Th8aG2cq2qjzisf2c2D",
  "key5": "3ga4hSpmScaA4CEj6EyjjXkxyQF2c9dJBTJggmiakarTrT5ru3jUrVj2SezgCimGDTTg5qzQ9BSN55eYogNUUXEq",
  "key6": "2tYzw1x53ZcL3KWJdG5qwwPt8zdmBptY2myh7urMgmdG18RsJd4p6vZDHN9TgdweZxmsRj3hb9irPizVjyLhorTA",
  "key7": "5h8gP5rjptrdr5d3vn9qP3FsKzTaRthemMQg3BpuB2rnaQ5nnhwteKcm7KRBjDQ2NMeV58yJajbY5KA7C76xq7B4",
  "key8": "4PC1FAJYnJifZ8edcZyLtC33E1AR3vmDPj6Zui69tKXYVFuDGETe3U43ufuXAAPoRSEqRBCkCEjxKg9T8Me8nLEp",
  "key9": "2BxDHxAAeRFkUrey8Y1YWaMsf3E17oSFKxj6mdQ8ixpoCYoxeUn3sFLy5en4gcnfyXSUFj9SGdtu8haWGGrRBtPr",
  "key10": "37wcwY1w9BFyzxY2ANEmk7DNHPVdMEQpT2hhMmSwfv5HrckRMSkYK81MEv5iRC8zDudq8TU9LsgPzhfjmWuo6RpG",
  "key11": "36u7DeRFDCo618FENeWuMsmdskEhFM5VKRHiFpedBXP51n2aQNzh2qn4aAH845BJ3LDPECxtpF5jsxqrx9Na1hjw",
  "key12": "3LDa3TVsjiVqA7RfDQLZTt7gh1CBK47CpFNpzabDtn5ZarzsQ5jbp5nfQVXXEouYpRNLq2bKKft7FGN1C1MaD56j",
  "key13": "5d8KLBYneG9eKX4AGX5h1SfTzd9255kJ76BYEWsbHEYszx6xoZGfS5epunA6AbJ8PdSgJoxME6w7tyAAFeL1yE5z",
  "key14": "4P3PDwSo9Cu9yvyr9j2LARGEdXNCqMWnrP23w1yPzcdC72mRfTmZrNc9ZPJNnhC3JjpXzAKUax7Hkf3zhisudhLc",
  "key15": "3iu1DHzV6aRMVXHWYtAqzouggZP3bagfZzyWB9hTFqj9nqBGsL8C9gd2yj5uf5RAuk2qdZEi9PqWJ1FvEVm34dis",
  "key16": "4hmqo2ouSeiq82uLBzMs6HHXEP7zWxnWCXBaeK65yhTf7FRXQcik1aHck3yqqMa32csZBJFUPeBhPjka5Lq8pDKU",
  "key17": "3jVa8rQNzsPJkxHjb8XusyqA3CD1jMuXrtrteEkyjDDsCvc1uDBbwV5EUC9qaHj38gJsLbEvVYELFfQXD3WahhRK",
  "key18": "3jxjHY7af82TiwaiPpZNuSCNvHFojenF6EdSt7McuqBMS2VVHUXB63DR3ae9fYpBW7R2X4Vggck39y3FY7vGLNoQ",
  "key19": "4oPn7HVs6ErqKH1NsuQHNfttjDrQzLLUcUX11GiNz3dZBPVnVCTcRB6mDF7uqevZgRTeKXFWHBVqh8bnwL4qyzJE",
  "key20": "2irJsFQ1CGc1hJfdE261xzruyij6SNocormYfFThDV2jhjoy1SzKxSiUvrsW3T1W4ARfYBq5n2ari5GgVPK8FMzk",
  "key21": "4rcsupHYSAsTuVwAJ7jySX2TfcVc3SJMFWzby3MakzhoBrk52rANUqb6vVkSx4nXWMYpqTfarvwhTzgg1KLLo8gw",
  "key22": "3T7jA1UToewuhGcqyKGJkXG7AzC54R1mfv8dWFEVcR813jjaqY1YTFpNpN6JSibmVNgsMjp97TyxRXeYXBQyspjV",
  "key23": "3iRpTEzybYfivw1YWpZjKPJ8SRLoab4Vx5tgrEcZfP5xRzTihUUrNzebqyVmxvBs6MbYYexjSig2fNXnVa8SiVxW",
  "key24": "4cPW2vMyVNo6yX8fkwTi3UYEnA4Ui8fo6J5Mka3ZJNPC17hz2gu1FCNuRR47ZAgbCi8EDabEZD365YRuambDhukK",
  "key25": "5Pwo3rnkmVZE3YxEmtAteYvsdqgLN5d5xjGweuDBgN8BGeYZBMhbwrZLgeGH5bXjZmgUTVyxkpRbwYj4mQLp3JyN",
  "key26": "2Js4WTwS6Fow89mbhy85xhuZYxRAeGGT4jCcKgAb8GmE5X6DDU78H4CyJueXJPVeLV11iGWoAjk5VVhFic734oWR",
  "key27": "4Rd7GtAcM23KJzXFikYCRbcwX2Y47UTascFzaWZMr1q8MjcPUu3btYpuuEWZxVLeKXcq9D8vspPAmqxGsmexxGfF",
  "key28": "2p29xnVTifUwtt72K8HD7kMwQJzhLokURWkdYmj6h1nAZK22wtubjFDUzmN37y7m9Ms4EncwmCdcdPcVQ5XiN19F",
  "key29": "36oJUna6cp9XkSUu4pmYNeEKYRHbmT7EwFY1B5QagfgpRP8WRUR1nZ89kX3Lj1dYiLQghJRudy6qX9WJAKTF7iD1",
  "key30": "CXUyWRSvcaYuVmnBeNmas3XJE8qs9Wzi7w5jyZrCAUkoY9Gp5aUoEHR4Ht5pMg86o79Ww7EqSF6YkbcH6uE5ca7",
  "key31": "4K5i7Y3cFPQQfDbi2DeKPfY9gpsLKHYDAQXEvmPYMSK7NX4s8xAgoVtkX9nPeoDsDdHq8wxfuKyVAnFZzqNH5JKC",
  "key32": "2SBzuBF7ptPQA21XPu47VnZZ9xgWhdxE6fSuHcoYJpV6d4nVuNihzXKFZh9J21FiY3WxTSACqgLgp6YxN12o3Am9",
  "key33": "619YUuwTvkuUqp4agNE6QwN8XC8SE4pN1S1KHYrqgFiAauac9qFnCGG8ps9QH3v7tew2r8CQhsiWmu7WuMN3QG24",
  "key34": "37XsgCB5mtvG7GFzCkEqU6BY5eugKiFUfanYxhmfn634WautH4JuAG4j8QaP1m8NEktnD8bxKBUys78z8dmdhb7P",
  "key35": "2Ak1G7GFPHjRkx9KfGR5bESSchWD6az6ooX3hU8jFtE68uFP1mo3u5AeegRDirhqZu6VEfsxqq5N3aaopuGvmX4y",
  "key36": "5pbX3tMpPMBKduoi1umPhSGt8kxDpJDMnF4gX6oJZZYwLQuzWxDUWoMCxLDkApyrGhhMSSvkzX1QqWz4g7tepqKX",
  "key37": "3HYFXV4b3dt2tRRwSodxGtWHntrPMi5mRt4MrQXnAFixh9TELVQybprArJMzgodBeo7BDpkhLCn7bU5QHAMNpo2y",
  "key38": "228EiZe3RR8MSz4zjqZSfUHLBNo8W3Y7smjicgi5pZeaB5Uw8d7LUMEaXsozZwW6ejXBoAe6zxZiGf8JT9fwYHRp",
  "key39": "4sKm2jStCY7QqVsgMXgM5qFAnmGQP18MDmDSB7oFrrT9qETz1te5GmQL75pQutUf6ZSJ4waB8CCY5PdkVncN31kn",
  "key40": "4tZgZ9nsNdDURurzeUYaAwifNKxg4wT1z452t5PSQnzYG3BL6dg2pYkq7Jaor4bPMnjzfuqqNkBqn2y1bHyXhUQj",
  "key41": "B6mRMqcR8htSU2eBdbZ137uBLZFzpAZxvdHT9X4zFpvfo7k6gZRRTD8LwZco4epU4r71pYknyVVn6VtfehNjRe4",
  "key42": "uhBgQcrLass327SRvFcYAaD4VgascEQMB8ciWQupXvEwG4Yu9YnWmRDAMkAfX3iyZj6D8EcWGtNMdyu14nsom1W"
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
