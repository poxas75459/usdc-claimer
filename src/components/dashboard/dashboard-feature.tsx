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
    "5pFVZDgnwrExCzt26rQ1BSanRu7zUDQ3yV4Qe21iAgSzCRNhtkh5A9nJVLNUBmF3mesUFdWTWLKQsFfmeAoykC6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Epgxg99LUsccPDEVj9dqXpMzPLA6AN8DRXEQdXXp8eCenhhqq26PoWcYqbPQym3FpfvEXZrSAf5Ps59gEKaaYz",
  "key1": "263CwzwDuJAUsvKRTxZCvxZQ9YFcuLkcNV4F2oZFnn6FhBiWkuqAhBVYvpcMoZrYNHWXfQBaqUxp9g7C7CXdFncL",
  "key2": "TSdE1gB8nFqHqgu3KUpizRNsKqC46PKvGeTXMYQbuSYVsF2g5ajqdsYnvEQdocKA5VrDKTxZbYzrSfwsqzhgjto",
  "key3": "4iiLnZopkMCJCQe52pontQpT5ZqckuXnZXX5yoPpYQX7J1U1riPdwAJDxrQFmc4wm2PnwdssF8nvTDvrvbZbWG4D",
  "key4": "5BhkivuUetpq5ijb1H2EMMjLBWohDEFQz8bQrHihz7CEyPrTixxvAZ55NdptMxLfkXAfgyNuhkn5qSndKSjCVpy3",
  "key5": "3MRwpzU4sFGpyN4GyRBJdYjkABRie49VG6AeazZ3LE6o6cVzqG8x9KMqFErLeiMVTWDns3tLgnwzLcCrD8iWmTmk",
  "key6": "3Jfz44axypfcGQ2mRXVR4drnhVmD2jS1tWWrrHGFz1QEybqptRoqvCZieTS5zes83FAwfiZGsP8dGLnMZV1L7Uxn",
  "key7": "5w6gfTSRcBpHMM6EUVUcnHbXnLLv2doPuXrQjRJ46DudzP4xndf7tmcU1Gh5xHQfcNBDJX51H3FuYYQN3CAe94uA",
  "key8": "3zfo57Cz8FoAEvHWYb9u3qDyd4HtVg7fhcMTxSN8mS99iNpFyrUUwAtbc5vWjeVV7tMkGMF9HFumUF4YF7jBMdir",
  "key9": "2EfQXozsmBEwhcok5JXbWLbVRuHR336ABxQt2Bjd6isaHHgUQUepYoRYWjhQrwY1cR5KqX7QsYZct3qiAouSa9XT",
  "key10": "qyy7j5vvyZDx1H8wiTFTMjg2GbrzEDpMNfUcS6vF7GiyXBxDXzRhx9jkJ1ZsLgTDSrd7g5nWjsQp7Byh2pJiD3y",
  "key11": "5ZonSjDz5LDecXtivfBdWXxUjG8AuZtDrEQ6ezAF8rSoetLmJ4EE4wF9VFbWWTmwbX4KAvDSyvsrqQAvecejxB6Q",
  "key12": "3p2ZkbTmjrziSFAv2E7TFy958cyPi7S9EJMZVTZiJpwQJUHry48exq8SYFpQSpkJPfnRS1GREspU2nZuoCHa17t8",
  "key13": "4iuMZZcSSAXxjgjicYPcrLWnGnJ15vfM3Cy9zevbBWj1SZv7z726ofyZVTcG5cKgCbE2asCPyRdMwboQbBXr4v9v",
  "key14": "399STAjTQNmb2J3TGG13zAcXLuPuHPYxE1vt36TogoMHeWkGiAuBHcsQm4PXNpSvGi35wbQ45YvMpmXR5Cr57y1J",
  "key15": "3o2PxkHGYEJ7Qs3jpSQKhiDnQ8w9ygzCbvhrGhM1qnKBe5UMqG9Ein3c5qdy8rzawQeLNdYEQQaXVkoy9pX2PNnX",
  "key16": "d7hke2TysZrB4871LVTsMsMP16LybbNzW6GPrXxmatE9ewnppDPfGCwwNutXhyjvhnNJZR3K577VuwjN524obna",
  "key17": "2ELMonecpeu9wFTGbNczshvu4ofdvrMeXxjexcRGah8ukDwfyhARyJZw2kE49jyuQ86U3mjdVuwvV8DXUn1LNRyt",
  "key18": "EKnLWXYAfq5RHfCFbVKwUyA9yz4pHbKHTkkVK5t7EfeddPSCwhNGqWBQd35UFoc11VaeT2YdTyYfkSFuVJnDuT8",
  "key19": "4uPKbtyyMYhsJ42naAAHUWj6GbSFmi8yABEp7ePEVVtyYfako49FN5BeU1cgKnStabVxt3mMjYXBpoZmW751zgfc",
  "key20": "2gZwNbW3FQhZAQXsHoqLVKZN7EwFcsy3EmDmqyqyxpRdcm4UyPE1C7NsXD7n68Xn2ak17oRRVpubFZcpYQiLBeiV",
  "key21": "3pkkABC2n8Eu6Jps6ArY4pG2DL5xbBK4JurjAutZQ3pmQ3T2uwcpe2GTM56N1jY9y3VtLfnr9GsjuyRqgPuFrsHe",
  "key22": "25DSmojmNuWyXAoydLc4YdNLzfvgCqURzakYKNBVsxjvGnkPeTCXyQodNTFp64sj75y3sZjkADpiu7EJDEQSNNZf",
  "key23": "2nA9qHvJ3owxcHKy4HNZUDYo4q4Nfi9CKdJk3bXqjB87Ug1dfEMBsT4P6Aw3DnKXii4YeN3ydSWBgzRLrFvmiVoP",
  "key24": "5YobNJb5YvaCjLnBY9n8uf1LwjwKeEv1qFC69vGgcRgVkPQpC2DWYNKV3rpjy5a4FxN7rTTCLbfXpfU3WPAQiUsV",
  "key25": "2BJMsQaxHPSJbUF9dsj4JPrN4zNogV81HGL2ZEeZiLfUN72zK8CB9CP5teVGBxkRjfCpefK68bp3WxAhW5bvQe1o",
  "key26": "BX3S9MWHPtMysJ8CDUT335YHhNFqG37UNAk6AVRKkaZ3WAYc9iKdKqA38P3SvhzYgYaaaAE81im44fa9wxLQUCf",
  "key27": "5j96uH3evFozdHMg8cqJqa3RgXAJKMwvXaaHs63RHojiujG3YZ1vbN58xuJiLzWb7dKUdjCL5xLzZiT75V4DYWxM",
  "key28": "3tEBmFLiwguSqgeR97K1LygQ3bTmNC8GLF1xFgxvPYgGUEX24uKAFop99iqj4zyqCs9crAkkMhDMydasKpcvCSWc",
  "key29": "2tB8SXeRAZZvS3mKbqgXQusrcFmhYqgZMWWTXC7nSuwDuFVxycpphNjkiQST9j9VxL6JebAHvWBL417C2HXVsFfN",
  "key30": "3U39vKDUg2QhN2UQARoRAJmSETeGLLXmp7WzUerdF6sJZ5nodJe6AXEeW5BQeNLTCMSE3yFcWiztECqjeJY3t72D",
  "key31": "2JyG8VDFp9pLesJDkgmb9qR1ziTZC188tYtqQKnNJ1RsVkANfsjfRMuBbw3rfzT7JeiJEdeQbE78ZnqTAuffmjLF",
  "key32": "3zYcPVxAWTg7jJ3HBUB22KUeJF92Azikrwiqcgke9q2e2mPbVMZGJwfXW1HgovWPWcPb6nsT9LGErUkFLgC1o8QA",
  "key33": "5KVDFYXsCEKH9z5QpSvnzh652hPrhEF4N3rc1ErYHBE6h6QM8e5hDCb86uLxkVCfEwPdNxNo5FoxXM32x7NkNhsR",
  "key34": "2nxxqAJtik5JVTvAe7xQYPJvaxhzPiLnNovNULjZbMpw6txXpbwUNfnpMetJu6kZepqB4cwhZCCxEgto6zhKtmVT",
  "key35": "2szG5xi3FfhUimgDba6HWntvWvdssEwRQCcf8pvL5uSFPzwB7X3tj1F9jse6wu3bzEEhmL5LZaka5yXHpvBaUjpp",
  "key36": "39BdurMNyx9uUsUy7TAwy8sGK5Hd8B5rqTNtJinr2DFEbiMUn4eL51WHmYAaXFMEkaEWeLpkjP1kxjfDnR6ZbhPZ",
  "key37": "2FGmax5YerU5E5cBXJ657JNZWSxjbcQJ59X1oRAd1JEToxxDdzmikfaGT9hwi4tmHNghboqQJaUbqiT3Y2tdu1s2",
  "key38": "5opjjAidFCncWZv1v2DnHgVULYRPQAaR7yK3GuysBSsKXrCTzWkxYv89f8wFVarE6KdFxEz4SPxMqhZ5dEg4FNKJ",
  "key39": "3PstP1FYW8AqsG1K9mJ8cCurP6H1UEcG2owQijbhP2CXpUzbpVV5ivUqL7GSvAQG5cBFYnkNNcp8xHCPhRRsyjbW",
  "key40": "2sMHXXoSaEqAQD5Uf6gCeq7RC2NfX9rcE4ioYnyqMZUTgCYWZyxKDariufFuRLrpteiBWasgg6RVZ7AVxW991B6y",
  "key41": "4KruWoLvLLXRqfMb9CDRE1q2eCprcSxWNDx7FWkAVHP98o4h9RSA95iXvJLueE8jKLYzzacZc74mXtp1Bs45ZS9T",
  "key42": "5cJWCZVqka5fSAoLZYxyx4rjR9fL1LRGHpebs38o6437xTJ69e52iN8JFUTafPFTv985fP13bPSh4iiE9z8iQ2p5",
  "key43": "5AjyaT8pvUUG8GwXQrxEP4RibGmnSgwKqNEmVDwGHC8MJ1HzdZtdDD1yoVvhD3HKNiSddS3o8qTyQ5rEv1s5S7BW",
  "key44": "S3H1chqvdUJcGxkdygvn7w6WR7DyDXqmaomXw2h3wsafoM5tTd1ntuYGUSQZipgHKhPCiPcAo6pRUYre79YSwC1"
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
