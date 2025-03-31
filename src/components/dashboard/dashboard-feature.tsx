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
    "KPFKdsuizqREKPJ61AS1egieoo75zb9mDHqcMxGHVnssRYYUTVnjntkXJ2F8HyEVAD9f1SEAgPWiFK9p7pDDXAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haP75P4FHBb9GRAFchxkEJP1DLuNvPT3fpuNm3kZ5Z9rJ7TxEj13KqfDjC6JjdrHtXNfDfwDU8txyjRjm4L2w1v",
  "key1": "3rvPWR9d67HPk7Lh8vB9jDd7tb8XKiendzoHhFwoZqwXc85PperGmoZjPHdwLyUCqCicWZyNkS5eCsRUtK8nwhMu",
  "key2": "4JxcynktV3MBL92kXRpicqTVtzcCBNJhJ9hHubGtSDdEtdqepoj7SAppG5ZqLKoYpY9Bc4ST6SCjzypJ4bxzVXVz",
  "key3": "Mn8Yw6yRfR3nuZ3sXjD1JS3G2Gmtm5CDvCSt1D1L86fxBH7S6jXGm4t5vpdX4d5CFQ9bgy52pqcNAjAhKZnFXYc",
  "key4": "qy16BoDAJNKwcdrcT8vsaNBJkzrPrwWfaf3TPrK1gDqQLk4W4pnrMaZosDyKPeJS6Fw1eHQcFmBrqbtUrHpFrHE",
  "key5": "59FyJC2qNGWjZgtWd8wNFTwwA7vU3b4LDwvCu2mrpzccV4FFFhAjasz7BgTQD8UP1Y6CuGhjbkoaPt4KBMhbm4MM",
  "key6": "3q4PNoqvc89UQiwXYSmxdqzdy4UNLuiLuV6fzjb2co1Dykk9njmSPS3bEc184uDZcq2PRPVcAJ3rTAwcbFPC75vy",
  "key7": "4PNS6D9jvJvpsod2yW417ymitvyu9jQucRE9FgypSUJTLqaczUgELHv99vLgq81hkQkAZqaq8w4x5GY4Czf7uaR8",
  "key8": "5YnxcBFuFAtpLtmdvd5uTV4Jhv42cwTTCpVBjpQBsJymnXMmGPcWH4rMAsU9rhKNZy9F2s2M5BcD2c8g4n75W3H5",
  "key9": "2pqZG8SR4r7bX4PzKgHbkxk9wMXHZFsC2ny4vkxCUMFnwB6AoQGGPDEa7fv48Bqf5JKxF7mxgodXKuwumFrAgjHG",
  "key10": "46r2o3cxXtbziBpVv4yeir6aot1weV2GPhZeh4qQiX8G3oK544T2Z7FtexQCXQnWNb7C5hjF5HbkS6oLFL9RdbX8",
  "key11": "4NBRkjqmpy1tBT8pKqLc2JXk6dXuiWnpTJNb69jdw5PCPj1YG9g5segJxrmarAvVScaPT8cYoE6o13idAofKC9xB",
  "key12": "5FacdcyTB3MDPMLkE5FcBu4cWPC3fKYz5MT4Rbx4tpjprHg58xgMuuwEUq9buBPC6Ld4kbb5qdVMTxUCQK5dPU71",
  "key13": "59coBb8rcHFwGbiVxWq2KBj4EoaXcRGuwY84uCFSp7JJ7GTiHkoBSU76cM6x5j5qviFKW18XvTWp1j8YwnBzJkaD",
  "key14": "4y2kNTquKCKzzhVsA6ZpPtysbnohWemC7rHLbrRKS9VmWxDvnT1DVyetpFDs2uki2uAVa3wDu6XjxFGWBgZjKBsB",
  "key15": "26cLzmaCvwthTMp9wSyRR4844kbFKMQer6pBJk7keBq6ZQVoVzp5ZcWpbP6QQg9mkCpTwWw8raszch8qRGgU59gM",
  "key16": "Fb2PNLPEhgkFuxqdrbGY4hkK9juUFafUQ4BndzFvbva2ML9gghhfCS41d1UySdbpQKkeiTBVTdNu1p16NB8S1jc",
  "key17": "2kC4o6YXK3TKopGw188Xk4RbM6fgbKdri3JodjStn6y3qyU7sbdGufuoqKg4EUwxgfaBhfmGkkg87TyDJZ1fopVG",
  "key18": "HcjJ8EZUXJu6X4k17XkatoCE8BJaat2RBDCMA6SeKkx6opye5MfEbNHa2jmTH1TvJDN92VDeWsEmwdAPc4TnPPV",
  "key19": "pHPCbNi8CFAg1Jb7fMZ8NbfiEyYwcVopBfmyHcjHApS965UFhCFXkriR6ooBoZ5A3D8HwJWsTi7z8bZHGnjpGGS",
  "key20": "4Zsu3UMDhWC5SkyLSGk8DCKgrTCknkAxTDJXntbq16XnGfJRSN6AW6fdmc55G736ZCuuK19Zn6Kk37PaqENhLezP",
  "key21": "2aUxjPWjfwYLjerDF4cXzem9t3yp59UZ9oKW27PSfcYSnPo2auHmf5KEvEkDMGvnjxzDUmbpZjBbkdVB22NdVZQW",
  "key22": "52EEbFizg3Jwf7NdNG44RS8qttoaC8zmGQZrMFXSaVCwZwrRXC6ZeopTbouSeBVBJb5SGQzd3VCZVf4E9jeVGU1i",
  "key23": "zu7YCcRD46vRk9Vbxb4ToB62toyN41eXdP5b1Jk9YajxV5RMhJYoDbzTFp5TrHMyLbbv5riToNGJe5GrPkarbTU",
  "key24": "2mjCgqhdaUxvUi56UKDW3AjL8kvRKbwAZ23zsQrAMDUbunDiuFwyqFVNvfcQCsgt3t9jTy3BBYPARv9mm9zydEaU",
  "key25": "3DUDRJwthvFgQjUrvLezu7PRFKut8vnevBjsgB5QQsrEXJVuze7BkHXAMQGxSDDPAJXx7288tU7BggF2AN4sZboz",
  "key26": "mjjiAd6JwHupPYyu5Kyy25h51ZnfJwTa19twzQLUvhTNPQxWmNMsJA6Lt7mPG9GQoHjLkYg4LiK9GZrBmNbQiBQ",
  "key27": "4nWZ5kgCVbeUvBDQcr9uZesF1idw18NmD3Q7meBX8JuCVoRbMAtBWK5rktLx7zUWMenkRkASphhs66LJB77Abtqd",
  "key28": "3f8QmaQsmQCuRbiC6zvejRcH3rKEawXUd61671dVhaNJLxDtbBVs3j3zm3C8TsHEBAeFZYqGCVP6yUfRQMry317H",
  "key29": "5d9a8GdJH9mKDvpupmPTyMWDqbgo2TocGgsiJyNEJXAHYy6AdhoGS6LWcX16KTAmx1sRW83868Q9P5hV2CYFojmj",
  "key30": "2eqyxvvH5xSi3aFGx9MftGQTjSxaB5B5LbUqDAi51pbDiRyD7b2kTfhyXsYJtr82xXHyR2weQnRnxQ2CvWXHGHGQ",
  "key31": "s7X1J5cFDt9yhVDEVL48gkeVnMniowG1GcHiYCr84yYWDZPDkwPuGwRCGhADK4h8riaUCj3HuqBifnDACXt12mh",
  "key32": "3T8iFc6tXhtdH383uPZAaRBVLP9vQyrebzavdmZYgtksHyCkahFmypPmziT5aYTey4rcbdyyuPgrcmQSQiActYhs",
  "key33": "4xNmTXVHLGnYoYW3BtQS34fZa6CjB7E7SBuV9XuaB8kmeJHfQqMXp2dUZtiDUy5TNGKMoQjfJ25eDseGhfTNzkcb",
  "key34": "5d8dR7UAumf5YK3iXDDJC4NrSnvafqfrnDgCmGddtSjQtaCV4PQXsNfaG6V96X8qNnnYpuXCKVec2yPKjGLxPz97",
  "key35": "21esDCZDSu8r4P7wooKr65agZQjcv6RWEGMt1r9fRh11SjibG5sidW96Dkt5T5wyNMoCHbRTQoRV922ropMDJQjV",
  "key36": "5hiWUTQktv912zeExawfJ7A9Fq1ZXakdDbKnpJd412X9tzLBUbNJSf9nyVpNHApJnmZNHkttKH5hmyiiLYrWrVaj",
  "key37": "2ozhztqU9oxaq2eBvNWJxk7MEFBteZxmAVWf9626JTrtDQ8z1u4KjjhJUUbeJoVHzHHgooMtKBY8M6fRHSXNK7Mr",
  "key38": "x97Dy7eUU8USuPWi34Hrey4U3gEvRqUNMe2s23ejs4QGjXhFtJbGSkwA4FaiNh73VeKDXSN5WPyWTeHzgE4YDng",
  "key39": "afJmrHaBQVvq94wNAK54q2zEpsUPPr1yKKs5Zw4ibCA1wLcjXrXJsBPrYeQyGi8AHLBHwH2VTdg7b3hWs46q5E3",
  "key40": "ahotCVQHrFBjajoBJEE871hyVoh61RQ189uZc46hxYnBET8idFwoKfqgf8TkYFgt2PSkBJFAqSxNH4owbCVPYAR"
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
