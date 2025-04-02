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
    "3ktXeD4vXvsTV1yAf3sTFHX7Fonbt8MFqddRjeYWybC7wML1uNMGLEKgsHz7XJY8MuQPbkuNAFoad4eWnbfTnpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8ak5WeaS5uirnH5tKdGarvPpKhy49k4bNrR23uqdRWJR73SY2BWkSGgtJmFRGAPQ4Mnht5qhEspgD3fBqLHBb3",
  "key1": "3bsEyoDAqf1C4eaMuQy6FapUDmXNP9GtVNRwpNstHabVTPhcfgCVnxFf39VZREkr4jHc86p1LZszNS7yPogajSfe",
  "key2": "YZtKUZAzG9yDuxQf9jbisGfURkkYYdHsfvq4gz3tcFxKLjCrwPwiRToCeWAGoz2hymMbHLBMXBmEoBZ5T1fqDMN",
  "key3": "649WjVTQFkwF2ZELP6ixrJ94RwZDTu84Y5fgy2NiG5VSWn7e17zJvpLZ7zhJxwnjaeCZwEesvu8x8rKLgjWUThhP",
  "key4": "3wfaj3hzvrCaFZukgjNyPbWt2dCxScVDn8KZYZJfZTf6MgjDfVgpv1wwqupEPkCW7wXVq4K4mRpMTupdY6kWo3kU",
  "key5": "4Yo8E38mrbouZq9rKbujTfbzjteGAe8JcjsqHAgQESjvjAZCKtCHfBV4ZH2KacoHPgyVA2rz15S3aWBZFppjtcBH",
  "key6": "PzudHGPPv5KjY1r4Vq5fzSWvT4dNG88ZKBEKcaLvjWBgjLHc9ddkTw1ZRygCmyfxDZ8cCUG9qzyufy321EnFnCz",
  "key7": "3eHw9siig7f8byvUJsca6AQfYSL6HA7skXK7KRpgQkenmkkTGvNfvodowxujQTttmC9zQK1V1xaUk2fW4yCyfjZq",
  "key8": "4AUFtLM3RN7zBnuhKnx82699guPT8EPNujuhLzf6NbuHNYRPxzHJjPreJhnYiJGb8Mjgone7aD1QizMUFo8VQDst",
  "key9": "24cCPrrjQ9PNtZsFn1ZW8U5RRFjrRFd3seDvNpCqVX9jhSbty5XHaHE2JqtFDwp7pEQwuhPBxUpGhCurQeMuXmeG",
  "key10": "Au2jmBeYN36KYySnXS4jomUSdzyC1A5MwshKjeWVPDJMsGaz1jeXAquAvqMaQ9jMrVQThGL6mLBoRpW94kMHhyE",
  "key11": "XTj9CKY7HdqWu1etxLfZaQoTWmg99TKbhSK7vi1cTy1dae2Bp4Lm5GXccrcac7g42zzFL3MqAvKwyiUETAHZZJ4",
  "key12": "4sNfKtxGbQr2XioyJd2WkYJPzFUiaEqHm5c76mQittUjAXuZnHRRVxuK4rmU27iQwhxZBLQTJQLotFGApZa5c2me",
  "key13": "54LMVvBnj2TQFwuEXbsCGrdxjjznLxJS8csg1ATLqYx5kRkE34tpK2rXuJTYZ4RxgZHwP7sZUqqG8ey4L6zvCdUC",
  "key14": "65H4jCXyPFceDM8UH2CWJZKfLmcwU4TqMaTqBYzASxVhfXw1krJ1DNDS4meLRoRks6rQ6EfDPqMaBcmYXsejzXMr",
  "key15": "UsTES4SpWYZ8NA7anZer1aQNGiXMhdDiBVeNNhwdaFijJh3dWjT8iG2hmy7kT9qegiSfjajRp96VuKDsjY388eo",
  "key16": "5Ycm6s2NfydMsE8moxNMNyPCGTqxfxZ3ZvWMhQgG2TDZHDHuWqrhMKxjxAne6Yje9CvUtCnE19k66ioFYHwyyRNb",
  "key17": "3myQX9ZfXe6nFTBxmqdeCXGnJhxZHvYemLwXyicpfiTTXEfXjjCwmfnbvMkBCEWEibm27VJHFUBkrwHmGeXZoi4E",
  "key18": "zy5vhZZfMYSBRwyYC77RkPdQZ9XUMdQvKBTdPC6z4fUjr5HWmd7pSJUzLDXXcHJ2ddeZwkAsNnwjQv1FspWh7Rk",
  "key19": "5syiEwTGhyFhZ4KL2dmF57DNseZTwP98DiVZmNVwB4yMgzKA1VP4iSffsHLeu1qKs9Whcyz1wgudrkDUTsnbnZ5o",
  "key20": "4QxoCNqXkTt7py35NcxHJMTSEfA1bnbvTRyA1Wqtr9JFU8ftZoSF1pQqRWxB1EyJBofgmdzdebBrULDMZ8mYzkN5",
  "key21": "2VyJsxHEtzT91k1kx6AMn77qGxCr4ZdhEaSuneCMUSELUHxvaNYeXoCpxTF9vc8YhppBPbXqgK3czoF1ib8RubLm",
  "key22": "5qBpiiUgDUP7igi3sCPLG9Zq4VFCoogK4R8Mg8WcuLNWj837vMF41teRPUHKMMyDpS1dJFUuC77jysCGGhL63csg",
  "key23": "NtQPVfu3HNZatJXQjDrCQsBVWyFoAVmCq5mgATVdK8suNd2SoFWYds8c3Pt2eZDJAujRco7FqhCgqrmiu7XgRj1",
  "key24": "edotRRB1e8W59xdc5dhUZavag7cssDsFsLDtRfh6m4wDU7srhPXvvyTe7VyahGFfh7MJeVy7FzCuwQL1U81t9oM",
  "key25": "dhm6Admkv6gViowy7yL7gnU6dwzt4a8FoTDPfqZFDfDBCvq7845dEi55AAXVPRTuS571iFWY9zMyZ44XhGSRP17",
  "key26": "3p76fb8c4ivNkqZnP8eSTctFo28Nharr6f2p6g8DTWQcr7CcSdp8EmZE1UmHpBrHS6RHttisjWsEuMwXrjvm3wfe",
  "key27": "4EtnLLwppHvQen9g5oaFkgXsogwa1FR1bw7LsFMq798UV93DaUuRWUHdBMuEDbgbAZi1YjxiaXUvH7qJUKrF6mC6",
  "key28": "5fZgx33KNk3rJcWiQhYURcU4VynDFBDdDtSjbdh2iHgt6XqZpk49pGmz4rCmbi5ZoDFhQ1STfCrB7CNNfuTUFZ26",
  "key29": "oQge6v89mXS5S4Z7755NW1RyXSRrwDP8p2ovBbt3LS4smcUma1jGcN9xg8esKbnPkmXMZbJK7NsTYJTdMqvY6iL",
  "key30": "4cPt2W889iHMXJf4yLPNnXJzBejUpBK3ZriRk8dQFiidNUJ8o88FoyNAyR73yEv7Q84bimFbVRQNA333KJYt2f8N",
  "key31": "4UhpankPC73Sx4wDUNKzRH4sJjVqAgAvRMygsfQf5n5DQmgNKZnZ6Hpq69C7vKXS8JTjgSimqvcUoR5hUJZhrY3L",
  "key32": "22oD6CUP1ewyB9g7o1Zp5yVcVyZuQf4PHLLzh1SK6mTkgWAiXAwsn4vykvZ5n7xzSqjv9ksnq8N8xAMX2WoQQL4U",
  "key33": "5cybJAnmzdB8Peb9obbCBt2pSdmAvMmBzeqRLyDbJBYJpJwR7m8nVfWBrvhkpR1zsdeg9gXrRNx1s7Xgt9Y3DRd4",
  "key34": "2zvCYpdpxTfX8NP8RWxVxFiD6XG49B1iLv3XoEm5WAssNDxubwUe1pLzUj1yfd2Q1gSSBiPSDSq9aUQi742arLdF",
  "key35": "2cTAZbPVFYv9pMgSYHmGBob31UgFMSg47GzaHikPpg5DMLGRYPoRYdJMJjcHRMAnw4hpavzHZubbVZNrg1yECzSE",
  "key36": "4ej2bjhDFkQ4Cd6ZVoAEk4RYHSPiodUYHnQBNavchU4Fg2Sg1uj3kTVB1XzPMVch5n1YYUxjmSs2429Mc2QtVwM1",
  "key37": "NzyStp838EQ8rVfNoJU5RrJP4NXJd5rfGFgan451isgMjhtydrLZZec9ATqZZ83qk3dEz6JcvKUYxToBAZDynUP",
  "key38": "2BFSjH1Brsg1VV1MTwc9tKACYPB4vEQGp574sY2rSwpR7Muzsj2gYzRa3sho5PyUQJZcXeDcmuCGHFYkDZQ7678u",
  "key39": "4s7rRGcVs2mLGowHgv92Ad8FgJM5XDypnPT5WwwcUh7FHH7GTdMEX3gwagYA2eCkHDR5j3uSU4UDFtSxAR29BNKw",
  "key40": "4Gvjtg2n8BAotAxcqKULbwhRuYb3rchGyK7ygEZGtPjffmx6WmAR1sCZTjBJonz7fFNP8dHgxKrnLrqrDLsxM8Re",
  "key41": "337JmrC2aJqncAdLif7ySJtfJiySvb2WkHVWoSNxis3XhGrmXN22jDm5mchxxndwXYPK3e4PzHPT3xfRp4zBzGAX",
  "key42": "5y1M129QHDUNNYHde1TYxqvyKkHTPBY8EGNkW2bW5B5vkJJAYNq5sSXLT7sGS943yWi5rznKhEWHccJrFswWmi7Q",
  "key43": "5FRbmHJgVU3V1gCFqJWGCyQYwi77nXGm8PEod6sDNeENSAF1R97bgmpPvCaoMB4skweCoZfmkihPs2CmmrFp9FTs",
  "key44": "3j8J4AMcq8vSTJzAmiqc4E6StEhL8K1P3JKTuSny6e92zy3Hfouge2VknKZ3T9pTSpYvDQ6zQFeL6Yd3msWtPjzC",
  "key45": "5Xf7jbS77XthJ3RuS6Bv9K4Zv22KGDT2GugUARNrnoK27cjYrDporsvQLc1yU3owqPN37gevVScV75zTDwxu9vPE"
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
