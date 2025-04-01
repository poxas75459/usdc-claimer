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
    "3TPiFHRcqaSWt3QsFP35UxFAkHLwPXtasVQ7QfPPnZzdVPke5AYDqKsbWEGpLyR2RqQDACKr73P3Hv72zgZfd6VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r1RsByXkrV77M913n4AGj7iGzoeFYv7FBhUfMKXhVrjgvNjN7UZn5z2D2ML7gXmGam2g5caQrV1qPKZ2ByjbgRa",
  "key1": "MF2xpGVJQd9yohMfBFWxT3jC9nSosM8mW7f7qKh53KJWnTyqZ73PgmgqSFBX2i5EHsMgf1RAHNbsT7VRx8qNm8z",
  "key2": "Lm6SedUszRZwuPZmaWtdWpLkDZMiiQjb4y25uYLeozqrk9ZZCrUaeN3cjMDkGb8R6rxYnkviM7CMQ8NpzewaVeE",
  "key3": "4nZU7r2HtXiRnY7QZpoC3tHPootW1mT7wbnoK1foxgNbYMcmkW1qbrdz8BGynLZDy4FeJZqPQv6Qv3kPbvurEE8x",
  "key4": "66aScNtikYAf9hCFu3wiUUMGpMkFg23ejDLFWvj9zD9zSq5rps96RLqAuBeWWheZ4SDCdefEsbus4H9THjbFQqKj",
  "key5": "2Hs2qEBz5GGDdCwQ6heEm4Q588xmwpVkbuSj5VQhuAffvnuuPcjA6TZUPuEeubFRuW1QhDw9SNGV8pgJ4Vc8oAdq",
  "key6": "4a8jA8JM5VVvEk1YE7CiLexATnyarhyWjgqk7mwiZmePopqxa96nUBFjLEnjZ9NnxfBeKtj6fPF2jEvz357jGKyT",
  "key7": "5gSwPduSum3HQhEAQWvhzBZEdijkPhG79zcggq3HpRSZWyc1MFxGcdySWuNoXSbqGpB1wNo6c7Swte3hEDrQKzWu",
  "key8": "3SjahE6gn4WE1qAb2uacdJJ2YADNMgTue3hpYzewG68Wo3aTqD5kZugSDqjW9ko2grcLsVjMY8WFRBzKahBqpwfN",
  "key9": "5oTJqSZhRth61prs4iEi3TjeetwrNd2Uj8xtUGwPUs8x2JV7tDs5TQykv7328hE7BBYfYiCUN5ytCKRcPTxhn2CD",
  "key10": "4cf3ubAkH87dg5wh1NQmVzptY2HRhPjA3E4oYJfvhzHs9z5n7TYWMwjC6Kgf3C2eYopv2Rim2wP2MDCQX4nUC5G8",
  "key11": "q5xY1ZwYyWQc7mNem4E15aEefLsiSaxFbeoDmH4qyiTe4oCoCa6XshTEdwKZSfNAXwEtPKqDomW9gNHKBGzrVYP",
  "key12": "ZWBAwAKYX9xpsyqpSGr1PCvSBYyAunRi8i4iHNuCZpJWkrrK1yyFaohqueW9GqAcYPntvetFbeozyxwZw5pNuaR",
  "key13": "4PY8PaRQ1sB36fc5BpTC733k4phgTXT8Fc9QEymx3ycLFkn87sGoENGa86pXL1uVDc9BV5WUWeMBD6rkff3pmHqh",
  "key14": "2UNHx4uuEoz1tiMbomsxLquojKCZxFQGZEfM3e4s6rDjq5CE5PaTzFzj1rGfPLF8hbxHrtEuS5Vh8iYCRofYRqJQ",
  "key15": "KkPumJCt3zvLJgzRgwHiZYGLFhaSTNzixTtDcQ3q8A5nuFqREZXibgg9gjWQxJxJVTyoSVGACFiqWuacd4rYykb",
  "key16": "4TEYfgPGvfJ6X3WpeaFk9WmX42GtbgGe7oLU7qWfDt4T5F5KyQAjwyrKYdPusktrVVuvxgpCstgcbFhGP9rGmS7j",
  "key17": "ZkgGMG1mhqQ1TrRNuCaMKZyiSmZcgyb4d3mDo2tGC6KbRSNh6HuMupZLsiKmKhrnKv2naoWXVjCUsJSroujYAfg",
  "key18": "5JzjYxq2aCTqyFJinsD9uHpuawVWmGzy4tbgxDx33GSSXH6yLakmHjVLNbn8zktBFsBKzx46EM2ui5orexQFvj1V",
  "key19": "DJMM2mMir23HULuoVNKgwJArpBvcMPnoK9t4XzWem8o856LHnECFAua1K6sminfAZ4M1nDHRT7Gbz45YuSq4BAZ",
  "key20": "4MqnfC3kEmDb7C7SfFSBfYucyziviTrpxF8XdoXZY7bRfrfWpkim8Z1AJkoPcERmKCrhhNDixnrTBLpT9gXvBkFZ",
  "key21": "5iB62NAmMKPJhmZhuvybm1wskeE5X6bQrxSPYTnYyaiYpzSXQwquNbVhLomWZy3c54STzeau19H6DMzrBjtUyMnC",
  "key22": "2Yi2KQ6v2SyYHCaR1BPmx8K3mtc6EotGUhGw1DqWU1msTzZA2f51oDPnnBbKzMAnniyYGcumufpNsVACdhUwxzqJ",
  "key23": "4JXjvwDFdRF3XooPyrPKKEkUtgaJBEFxwx4r4JNzQqxs22GmHJkioaPpsomSodJbLVoHWBfCEBgAb2Zw4ZJ6BXp3",
  "key24": "3zmUcr6b2YJ94PSkadgzJot9kPx3Ag5FUjDRCV9n4MrTEeUb3Kc3Av58aU6exBDfEHTAGrpGm2z4jNqVhG7XLPTN",
  "key25": "5Dfd7Sx35KKrwewuJbJti2xwjAGEJZQSyPYZ4Z5pkcMnaL6qp67ckBbNAjdvKyL1t2bi9FXA9HEJsj69g2DAjAyi",
  "key26": "f3XCaDzeYEWtUfjsuaDWDPpnNBAkNX9skKnDP3GgDfDTYZJPQCvAtGNmho2a3u7qth354mcfZeZ3SNX37s7hE5P",
  "key27": "38duPhBCvhYzp3T7RhzBTQkasAR3vqF8k9aEBtSainRYSesXtxzXysTzqLBHxm8j5BWMquVshRUpFCVfuvhDGEQi",
  "key28": "5PbUPKomN3TDVrdkEiX9DSPkfigDDDNZBuHU3mdJYUeit8t9eqDuWqbd949voTqeGgfbK37F9wHkgDSiahkgUT3j",
  "key29": "8BFjrNR6ZjY8qzR43eTgpBqcZ1ZzMj1M5zSBuwiLYHW1jmrAZS65zhea3SPL4AzoT8xjoD9CRwZ7tUuhvvtegZs",
  "key30": "2zKsEkNyjdZjUb9LcQsDakN8YGtevvxCgwoyAz2R6Dauv6LffKh6qMLysdJMYqQ7CHuCcP5pFGUbiTU5V9EDQRNn",
  "key31": "vWQdhExNxJTn2NV7tjuDCTk7mUeL9FdTEKTxaVwcAC6kMHkKETSsUV9XPWM4Ls6aZ9BWNKaEMH9HRrQPSYAszXg",
  "key32": "7X2hWzh3R94F6btM9fdqsp8Ltm6Qf9QmaDTaA4hNPjPG7UpvWrv9haBGTmtNtovT4R55PVv9vwwEAFcp5SwUMqv",
  "key33": "48V2C9PY5K6EoPK8X1JvXr2oAcGWz9qdDN9fQphKyMcxtECDu7VsV1PwRR8G4fx5xNqXpoBZ9dKktqZYHC5Xw4sA",
  "key34": "BLUARKsEShEB9LcTqR6EGJ3mg6rYyBDtBGCcQWaSy2UPbUvGM9qQEGJ5G2CcYmBFU6SVZAMuYSr8mKioRzaqVu5"
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
