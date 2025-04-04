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
    "3rxBPnjjVb5X4f4PYR7nt5gbjD5mTJEeSaKJ4jbH7ni8rvJWqdWP4GLKYQ5cPZnw13YooV3xeSPbT4g9PbbCCAjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5peFG1jP8zS82a8b6iMg9g9DiYTDXF8g4d18yUhziQqBNG1Dz8cNQe2ABAvLNxThHfq1zB8yJZKdqwCneiRr5jsL",
  "key1": "59ok85vtkwoNVxTyWGsCQcK6G67aPryskcPQy6Rfog9ttnLsMnDKjWGPLaXbuvQEt3GqUkLDP8htT1n2JxCSiNDW",
  "key2": "4yenaoNc6foBgbhtjmjh6Th24765LNQMRwnSbdhkMjUZZVxdKyrm7VLBJ8KqEpETDvoV2K9fJ344RWAiqRqH3b9s",
  "key3": "HM4gLzKKvbGbMFAWj6nAMCCCPThFhopYdxo4aDVARSmWabHxjVhZYJsb6ZpvqaxMdJVjLbSQtjgzpWbtk3HLJgw",
  "key4": "2MNroir2SBgWii1h64dRquJxZAxNQg2XF3MeU1u9cqSK6WxMWKsgnC5yAT6dNEPcPJdCD8uGDc7XHMSU8Gs72ijD",
  "key5": "5xAFM5kwcXLM2zwbCbt8mVrLXzXwPsd3sMwNt2UYKfuJUKGv8WHVrfH6z1DjUhY8K55xLdjtdLyZtF86XKyuJE8j",
  "key6": "57pMpnnpJcFSoFBaFvsLi6VU9MXbdDzo89L3JsKPqEuDSSwwqLyoUYL1ZuXukiwWq1vNifjHATgANufE457bAxrb",
  "key7": "2d2y5KUgSUeWZEdwSHrYfQofHCTXbvZpiXFA6s8bK757ZoUxb9sXjc4STeNfVkDitH9KQGNuPqRfyVucGs1Xg1DT",
  "key8": "3MeRN5uMzKRJCXDuL8eMPNo9LV9KfKFup3x26BXDS5ozNugCzUCCTmxPbDCUAw3ZrM1kCmiax1uZRrkusB5dsg7a",
  "key9": "5KnZTyNRxxiZQd6Aw4SjXAmiuaUn3DxbW6v2j6Z6PLaBQYJsgPtFqWvmbULbEA7XFR17uun1UxipSCaw2jWioiG2",
  "key10": "4KNKnLd6AummMnxXHQ6F6DP7L82GXGi9rUHwRjqixfDWdAu8Yu4jbedtsvdTTvepqyGdTXcRtYD6AwFYKLUJCTMd",
  "key11": "3LibsxyxBvNhTTf7rDtDMP6rEvjwHCFuAKKFJEYxd3bsJq1v3rdvPYS1Mco4Ru2Sbqu6BcTne6jcJebkmDBMAYFr",
  "key12": "4pgRmaw9iChCjm3Yc8bwTatAJQ53bF5ZExez6y9SwMGQxkG4Z7JoMode2RnUUv5wmRimubwPKkU3paoLFmME5BDS",
  "key13": "5LDfxGhrYq74uR6HzEWeoUvPFicoxmEtJeLvRBP7QbNWm9V2pRJiPs7hc4xVF5yYLnjoQuQQfFj86pHrfwczMnpF",
  "key14": "66bpqjDcaUipmn2DS29aZSN2GgCCUcdTDdPqsJppSTohRhWdP8e5TN6p2uYN2iXAuKjYZZ8VVrXtsGCWbGF68R29",
  "key15": "24ZSeAbvdfhuhHhf8bbMej4pfPYJ7biH7YRRdZTfBswi1Ckwksz5GhNFmyhJTi6wSTasFJsbzmWhsyu5Vhf8xcai",
  "key16": "5j73dKFcw7Z8X6CdGLdmuPUWXd8JNeJtQfdJXUspPqyJEtfUvK7dgKZKEmmThVarqW2gYdyNNPoqdQZarevxKcwo",
  "key17": "3asfYp1PaEehLyYroP6Wwk1wwxE6W27G9xrqjVd3y1xseAWmMBkauYd5pS8xVvi8jgiSg1JDALKnHQwTg8cjnepN",
  "key18": "3V5GMee1fzsiwpDjE32nWUkwKS7cLwPaW3qayQZMtqro6PmMXSxhyBVJUZi6vPaehYjGquXCEgP916b2WvoBrFWv",
  "key19": "5zqGHPqwknurJo9MWitBriBbMBSnfkKmZnPBgDW4FQ15HjV3Nv9K9cuftKZyv1xZ6ytwyHVReGpFMjC2YL5YgpX1",
  "key20": "2jSvyTtJ2RJf7zSuGiod7f3c3Ce2RYx3efx5uYnU3Zz3zSTEj4uXgHvsqcQxQi5CBfURyPiW6dJCpmkzvepawjnT",
  "key21": "GMCYzBziMTBmEbbqp2Cbzb1CGJMbCipibbw5KEshNWvAkmnRUMqqLgyARuscrSRcVdRisLwexbbQhFkBJrTLDrc",
  "key22": "2K3XuLLRyHaTT21aumSQMmaiPbSHzSwFdWG5ZcebwnFD5emRVcC856g3KkNuAMicaziVuBbfRZ4Va4vQybVJv7zk",
  "key23": "3fNLimXWQxDUEjyYLWHJNDM89NwXcFYumD96QYtNAPC4CFYCdtcfzQYcLPzawpRmFYqfTUuq66VJkH8H6k2gbT4",
  "key24": "2wixbyub3STMiaZqPzUATGJNjwD4t7DXDCPfUkXjDKGzZHqsxbmvt4dZQPyH5gPsNNLwY3H7745X9qHAJAxvobGw",
  "key25": "vTTXGnYvEV6yEHDiPhtx3MSBGkhKFT3YLRnFC2HREHJ9BVtWyPz5WijHp8s3aLtVKyShnW9biDgVeRJPJYdr6WY",
  "key26": "fd6WM5UpmxwxKTg7f155HJyMWMFZNzgq92ZmtAFcqWQsrQp1utjJzWmMDfq3EyXaLqUNcWWUhb5jGt4wdmzP3A7",
  "key27": "3HMVEGwj52CLqYrD9WQNCK7mBMuEDoBFUnqAibcECW6JrU4cD6hZgDT14eiHzcHiqG66EVvQTazvBZX1vC6W17ay",
  "key28": "jbtLGFmV3bhQKAxPkf3W6kuDoCkP6sp3L1LzZtFgpm6fw2Nyw5qY92RmeR55bwC5M7UK1HcRwS2aJi2shCdVViK",
  "key29": "4AxxG8nLA6ww9a3AAfRgYC9KMjMhCeJMqK1qSjN1vLik7GbmxduC6QVUziQEc7x6CrsRA2KKCdJvadE4u8ggmi7j",
  "key30": "Y7xbyKYtbEX3VU8NMZpJAYCtbZFKaPkAg3srRFLYMS21ThcyZgQ9e79mvBQ6T3Kbvt9runN3KR25QN3LM6cv96r",
  "key31": "5kRtFyXbKG1scJcYrWd4HZJaZ5m82MMZDAGvswyMAqZcrEbbEGbMkC1ZGcDGYh8odEfZAGcVQzoAh9aJ99NWfQ4Z",
  "key32": "DkA75GdDECe2QNzhRY1Ptoww5ZHWig8cijLwzd9DqQd86d8ViDkoNMRwLZ31ejG1gp4kaPYKNzc6gquUNvRd8X5",
  "key33": "3PsQVPVc6niu9dDJHAKwCWSEwuN6Dna8Vyr4shvagYxH7F3w1KVG13H1fWU5gZDb6YW7jSwiur5oazyC4PFuZTP8",
  "key34": "TqvzWrFS91RNQFgkAuAp9oJ2WsxRYToBqBjoqBDA8PjY38mXexs5NGKA6YRJSwFscbN5TuhpQPNDzzgUXqLYPKj",
  "key35": "5xXu28aJaRsZKKnNAGLecntKB2GCyrK1SYH3tESFLFzKsmJ3AKHv53AdaEUoKTURecsTWGSkQNFxs3Bpn4fiVUox",
  "key36": "4fpBfX3vYXskAmtNZZbk9A3Ty1PqL6PjupxkFBXspyh1neq8enDa6mbNoBfp2FmiXCkpA8q916p2dW2zPf5QKo5b",
  "key37": "4zig6EXZJ1vgBhZATT3B3wVNqZLQsjUdA7GimFLSA9UkvndJTsQiosujP4WTGNpvuVdYNtaUvqQFgoyzVtYatAi6",
  "key38": "3VcCU45thRV5xcS8x5hfYiXgnm9AsXF2UES9U7m4o5pv3JhhPSouX5YMPx6PtgcynGZQ2xXC7C7PevE6tB45xAGw",
  "key39": "33Xbqv5JBUFF96CFQNRD5XtDfoPQL2i7agMPytN1QWDvumyN6juWiFG8voxuT7y9aP18agRuvG2JFHEhpfmRtuC",
  "key40": "58ejjxVWcSzaLE5XZW9WK7jtHwMKxFfhsSUrXjDALUzWx9ZdPLrTbh4pirkhHbUacanBqKyuazVd18snoZwkXDaq",
  "key41": "4MPngy7Z1b3LDobie8aKU84cNiK82qYWYVfzUFBbNNrzHMDio16bnffqXFMd2rHHNzpj3pxK243PrnoQZ4N9Dmbd",
  "key42": "5od3YQTvZYHs9En8U5ySMCXd4Vtfpa5w8YFaQK86GUkjW7wYscdpnxJ3YAjRGbpAJVMLvXUeCX8g2XyA49HJEimV",
  "key43": "2RFzJKFE4j9DdKXGpe4JpwMekLBUenCXWhBcYt67oz5ZgacvFbz5wdi8ztNGzh5hExDAP7fSqRjRkFcLPfwNeUCf",
  "key44": "48KVaSxwxF7sLYpTADC9LeBrkwYopMnq6BLp2iyybY8JXzPP7dUmi12peA3MSjNpocPFM1JfW9DCjA3nHQ92xEWp",
  "key45": "3j3DocQbB5eTMnzAh7UwhVZ9Xbn6nK74afWGR6HCqKkxfsMwBZ8g9ayegWsqLJaBWiyEt5zRsR67HyWD5yXjKFaA"
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
