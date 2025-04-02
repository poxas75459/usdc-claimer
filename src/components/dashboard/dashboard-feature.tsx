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
    "4UEwievkRA8K5X2WxgVHfGnTfy7VADxx8wAmwuv5nP52FiB7nMYeabT6ZCwHfBECdFXN9Cqx2e8bAKoXk4cFNF18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nR5Z3qVpEZHoBDcaQT4TFFDPbe3aHjmxBaDuDfTGuSM5NrH2BKokK177Dch6MQZRGwPPNDAEAjXReEDtWkSPgs",
  "key1": "4ujrwso7LqQJFqG5qZRMNt4eUES94YmaQSdEs2Np4roDwnsDq2k6Q1CKa9Nmbf6dREif8gwxae7Hp5AixJYGVouz",
  "key2": "4tc6XU2ETaGFnZybN3KUWwJDmTmJ1H4NTUqysK4LabJ6PKaQe6Zi9ujZPG59ji7HNXfwAdNcX8PAxG23MZS9uCos",
  "key3": "3CqbWHwxAgV9hQ2boTLp4pGKj4d6WuycjgNdpD5KmZgkQ3pZpEDuAg2TktMJ9pqWUtwrHxb2WrAgzvrs2MDnQFpf",
  "key4": "2c595vHWYBNmXbKu4vG3y21s98jxn7fhidGQYwBTYh6crBGh3rwb73bNoSCMbNsoJRoPxBuAUPLvuEzbFtbHm2Gk",
  "key5": "4yYLiaSVAVrewSWg2gqE4DEjwKQGAxj4ndXk6dMEHfHkZtLE2dCtkJS5GQxYZZnv8JPMGsVeuxwiZXga7He3Egq8",
  "key6": "2YLWcSLC8r4tsCKMDFkCtSNWt3LzeTFpqhAKZCyqcEra29SPPj1cSjbrqKv5CGbs9cqmaDq8peRxREkLuMHMe25M",
  "key7": "2TXGUWXfippyVRnfkBoHDnxtYHjQFQnXeydm4tSG5EGcTh1FgFHeJMgFmkpuVXs38dJ6pLDPgdxuAEkuLzNYQYrN",
  "key8": "33XGNFdqH92cUTupN9UvcjXKc3gVHzFcCpYrP47EdSWZ6RRsU2KsQHpw24dknh8L2W5a1MkNSEdA3qEwK7K4eEXf",
  "key9": "2SVrzKoR55xh6VmKi9tBaniEbiKpor2Ujv5TSw9C6Hgm8sZ92gQ2Bb9mYSz13EWyCbbVdseqkv1oPS2H6mUDYAE1",
  "key10": "3o2edyujtbJhMPn3GJ5R2yWznQwA29zp9XTe7x7z5hdo7oKzjnLquARJki9xqdRvUyVPxUKB1ex35oox1SwedizP",
  "key11": "53Xv7VnovdgFMxJ7YCEtYpYXUrJ77ETixNCfeua9kb35V55aMprXQ62xjcuvkurtapzqFWnc4QuDHMAqKDnY2AYu",
  "key12": "35CkzJ1jJWpatHc1eyKmHziPC7nCeCqfc7hsDmxSSRzBdmK3C7UfQJ1Lz2KYXGdXe4kJCF2bL1KU5adha6THPVsR",
  "key13": "58cwkoRQqmdjsohq2TqDoRpS5ZwnZpUYu1oH9VYncerqHnu9rjeejEmeJmMtPpSuCynT7AAJfZrG6PHHCQpQ57is",
  "key14": "3T7YKnAwbvvdUaKUSc46WThWraSbfPFQQrHB8YeqqeVjp5Mnq5waJ8bxyCtx7vMtyuyc19SySs2wt1az4sntLsmU",
  "key15": "3Bg9g2fBJUVy1Gr4BWWCyTs6XTuDERsKzbU5ji84m5enPtRHYXsE1BxUGZc3x2RpFnhSdAcK1rPxWR1A7TF4hTUV",
  "key16": "2PFx2is8EUagka2UHfqDMRqVrZYAWGnKbP11Bv9wmCHxdjf7zPJ9zkeAuXyNFZzKNzMcpDm56q5CjSjJZgukkgvh",
  "key17": "4xVdu21juxgvoLSgqfNXmEmD86raNzKJvChFFfkSC7RCm3Ld1p1GmZVGYetZPvYTz8RLQBNo9GNs9gHgNRJWgCF8",
  "key18": "52Rbow7WHsxxiixcYwfzf9K7u94nWQPjBZjPyYiJjJHf6sfRhHanLimGJZgdL4fykK4xLc2k63GxKtYQSxACwmgA",
  "key19": "3ZVePWnCMZLzM1nQuQ7CvE43XybXyWJZPDzFPU5B5Snni1HKZNAczDXFTZEo8tbE4GFs7RQNPnUkMvhQr82gEjna",
  "key20": "49LCuKbjNBWGqKDGgJsE6pDerNJgcBUjdyHTnDbMkf1b3jQ1bggt41PSEevwSu8e7aGuPHgWGyitoK2y7bHC6qXU",
  "key21": "2dHreV9CAUWxHs4cMaktiAtCikCwM2DcGBxeHYj9oLbp4bxuEZRizeKyLNUnf39qpRPtfWws72bLHi4vER7PmXSN",
  "key22": "qQMwNYh1H95Egyrp6JPshoDRAgF721X4qmv469rHUR4dRuhjisxtq9tiJUGamrLuryJeFVAvHvrbBaeJ2YZcKjK",
  "key23": "4gwJsF7wJopUtSJHX2caQC1aAybqPsKt8hPhtcZ4jJsMZXVPMeRHj6W5pbi8ybKJb3iwCeoDNE9V1CxFP3ExMW8P",
  "key24": "5gC4SdcyoNeJKpe1xnDCGdKhbJqN7wUWXeJCRDfFkozummd4iZH9jcJ9TmPfJqBnoo5b44iuxjaE7Y9ivK5SEfKq",
  "key25": "28L1E6Zdsz5shhJDydMN8BEj9tPJYQAGvwPQqavk1HU3gLLAsq2wttEbaxax2YK87cTGbgm5vexvqmVj1dSQe4c5",
  "key26": "5Hh5Y92vQ4JJXXcfi6qjiCaC1aUvYs6PaskbF8XTdZ3koBvyyPK1iN8K1EBa55wpyBE6UrFCnJ8YkedQuuRCePWk",
  "key27": "67phY5y2kG5A6H27VY3z5GmYE86KoM5aGfiS3fAvyBfWe71nJ3pZbrzFqRmdQ9bjiRHeNJgphKtnwGBACWT7odcy",
  "key28": "iiZJ5YuEZv4wF8VGdA5woBzW1bH94EL22vdirUTZw4fAPooeJDQKbPacKuzvqgST7qHnwENjgjMxohC9NTPKEA8",
  "key29": "E57sVNc7n7BuXc7pgpTCCMhv8UV2VTWkJeBJWVNYteupxQVk9DXKejguBFTmedR8AzWx7TX1xpyVLnMDBoyZqJM",
  "key30": "5v9M3GegR5taZTz7AJCnhqz7gQZQNMiKQi6wPpVRD7vRzhmeyuLQL5KXh5M8TJ4UFByJMbPSYA8RMFoiLtkcm7i5",
  "key31": "3oq4igCaQa3xB8NEEFyfieNyQJjyqpyH8jtmG8h2rpZApnLZBCXTgeBZLhMbWrBatGBuu54YChbzBS8kuFwE5yRL",
  "key32": "5wgnRNdZLU6eoehWpfxYxKyActPsVDEjsqKHytu8UF9JZDL2avK9WsZSgoJiUBQcRQJ88SmRmDLuP8maKf1qjdhu",
  "key33": "3SVXp1UEui8pL8gLxsheCBwgTqVo6hc7n9unibHk7WM5x1BkTAgrNZSNobd1eQ6QdxsSBXxLpADXN2BuAErPnbZa",
  "key34": "4c8mCpqwduUDshXG9ps5K9icNeheqRRQycc7tbQkX9MzQ2grq4h6AVrbmbV2ujP7koZKLaDoqRkxoN6MLNuW7kMP",
  "key35": "4zByQ1B5tJbnQ48aBnHpRgfHipWSqQyq9PjqmNMs7Zwj1SQLkbTMq4oyqLqEpYQdEs2c4ryQ3oBqMVxfZfAwSunD",
  "key36": "D4Qwee9bNyS6N8biqancFr72AhT6Xkn4afg71HPfqToMSqTwrda7SNVV1ostvwZAMj8izRA5gsMh9kGCph5Zz4y",
  "key37": "3DRTN7nYhbV25DjRRrtHR9eoPiRbZmdZcJbyEATGhedK2Q55E23fSxMbumCa5gjRwAQ1app9KA415qVTTMkD3GVK",
  "key38": "5DP1wVmHbg4akPHmM2rucs1Zu1hnpBeZgmynWJ6XRzWSUnaHgrDhRpAbLkygvWFobxg8YZN1byveRa7Ah2jxinSU",
  "key39": "5VG8FHSEaFLfu43jfB1MKqy4vQsvkqd8LHAmKz6pGnoiXAhoB7urkGVk2bMijUVFTKHhEkTST27rkc8kL72bjCpi",
  "key40": "3HsZDTt8BAeoJRcbALFJseSCZ9EtzbUMtKMLybPKxrPN3PXmRxpbAtNPtW2b27e8rjz43dahBLz1Bh6fL4z17BZt",
  "key41": "7Lv1NFvQbQhuuwtjEd8jQiWAMTMDYi1YAftFaswUnJi4UrUTcZ3cBGMX8GdyruceKHjY3TAaqPj7VogjA8EdecX",
  "key42": "65fmkf8uFvevbc6xMJSJfUrpbCJyi5MW3NuWZnJAoXSQ8nmbQ8gDZeuYXDqZqtoYvAgkqt4oqJGSJMWTdH4oMHVE"
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
