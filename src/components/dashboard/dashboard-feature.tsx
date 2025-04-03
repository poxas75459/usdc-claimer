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
    "4TKENHHPyZEek1fvoT7YiSENxBoat36XJtb9yanbDdAwWejQfHkdaKR1EKUy6o1HeY2RE2FYeKv64JbZLscibeVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWHbQDWTYmm7oGy1e3x5pjoJZ9fMcduVyNqWkjptYwEBG8tzGoxiBiBmZNyB6F4rJrdAC12htrrADsc27BEFCuG",
  "key1": "YQBUSWVYFukgUPHfFQuz8eXFvvWeg3qFLhjqaHYphPm7HjmsiEnysdSMZkzxJ7Nv4Q9p97YN42h973RZqu8btXM",
  "key2": "3ncnA6zEFUL4V495mPKwb5A11uXWEXRAUCjTQDEUm2koyZgQDmarzWFdsbGxLv1g4R2KhKuUDfnd2edqVWSAUALf",
  "key3": "5jpD2dPRZTyScqv4dN36Q9SvrUC9R94nbrZv4gkKXN6YFVBX5p6RBfonjMPVZersxiVQEkeXxN5RrsrXDbiMXp41",
  "key4": "4fFG3izpHp34z9fqhV3eHomgA2MuknyFBuZoFACSp8JLTLuWrVbfufhp56tnBV8avncELQhWMwhxdFi11JpPzajL",
  "key5": "5kabD7puepL22ciB6xEa8NKYeqHTqkUabtUrCFga35med4HLq4TmA39E3HBB6SLReoY4BB38PwFxUZZySRCHrc4y",
  "key6": "LsiuuXYw3zFaQLNbcPMcaQtjNbWCi7sLnBuCd7vPTKLGEFmg78qDmrGAWtpDURtKW47KZrZGDFX4kS2pGtnVR5T",
  "key7": "5ZHkP1SGQcqG9aPYecqc7siqpWsJ9EpYx2YNgdy1WxZH4ArH2RA2SLLZ1xwbSePA6HKWvoXHuUw1SL8SYxgHbfSE",
  "key8": "66ueHHx1hRrT7qTzf3qQ919vVPeUAvu9dzUEhHGxXFTeoUfwHvqAPBu7eeYwVr1SNay5uJQ5qmeA3dnhgMvgxkF1",
  "key9": "4bTTLWcn4Zdw1zF4w8mUhNowC8AYa7qDxZcnQ1oPKwX2RhMFd6eZQ6FwEDjTFugHmA7T8dxPrPG7gUvSioqyBfPP",
  "key10": "Gx5df84fLNWhcu1q33kprFiNNfRwacfw294ax5AD8jg6PkTUErKnkfdKJ3UYzahXtZ5L7DRWS8b5sGj26fh3twP",
  "key11": "5E8cJeyXBaSxpWdpwQog4hBSgDdmebbPdxbPzj6xG24Jm4anWAKCWhuQsffF5qe1WKBJ7zeFdEkSKdjM7yGYkrQs",
  "key12": "5WJiJZdxnDmp5PqV16mpDMVEkcCNdmMnq94CnpydwNMVCF2KcF8JYXDa1f1zHM5WsvxmqqPzwAhz3sDVnYd9kz8C",
  "key13": "4sA897CasVwRP2N8MPpsJ6CpAV4jTg7q5sKzwCMaSBxmJc1dJzzdWWy65hUoFRMVP2Hj8bsi2K7qJyz8b7aXLFKL",
  "key14": "2zbYntPkXPcMi3VTgh3zJgmzcioHFCogunQyPU1d73qWoTBQgcfGyyfPRbG8QaDH4UZoGiG6wF6zwbmXouWq1VqR",
  "key15": "3m2aFRUmdbpcMkeCka8jszS3Gbmkqj6x48wupxEavp73tFMmvWkr47Xwic9ArTuCXLFkootnvqQQXp58BtgNPvSE",
  "key16": "oJuCfx7dTvHsng937zVYzSsLpBCnAVdpSVViahkgdHVoG7gC76tpVmD6mjKuGnRgTJhUAopFXAE2koZbJ1joZDt",
  "key17": "44Qp3obmZHMnYX7o6vY1peceP3JWpov6jW7vpuHRG99x1ETdH4ydjLqvYhJGL8ZQpNeFrM7LfmR2P4oaByWy9t7o",
  "key18": "58xeuVZ1wJNe7ygsbemrkXA8sLyDvH3M7ookNYvdYnyySYf3t798QJKccvrtqimPH2g6wVvLwsg6ron8dw2mNLra",
  "key19": "5MFsrXvAYxRme27M1oB22785uLiQcUca63q44cAy7DMeRHtn6iNdjtxRoSus6iTAdJTNvkmQGgdnmsJch4fv1YMx",
  "key20": "4VwQC3KVwYQ4r8qzrTKkRBJMyjbkuEyUBXfpYtujVrYHhxqw79SQbCWpyG2o7rDbih8cwUmFBDvk2kE89Kzn5Eg1",
  "key21": "z7cmH2uitEGon23Ww1XfbQi69tPpLFUAk3pzaRieQgqTPKqFHzT45xJP6QN5eu8o7P4Tt8Cy8UE7X9g3naSf9yT",
  "key22": "HDmEGxAALSUpzPuT4NHFGKD4ABHzcDanwMAJEXsFmbo2U7tiA3FvLt4XH61cDJXrUjw7afRZXkuxNcVZfq1rKXi",
  "key23": "5AsfbXYEq9JXQL8ejkQY9iw58p7oNfMJJpEFqQxRaB6hSkqor3fjTzbKNX5W7PordKvmmodJaRXRu5hKyvmbK59v",
  "key24": "4QyH3EycbQMuFsMEUUdiZsfhmUGC4iMiNJwynHoAGaLjq9kD7Ujs43cXSyLNCFeWb5Qv8oZC5u3ZZHxTQsgXGpTP",
  "key25": "3rgcLV9i5oua1jTKRRuQ8Px1GKERPKLUaKCStEV79pY9Vb6ggnzgoymTh6iETFAeraJCxH3Tsw7N5i3z2SLUeabB",
  "key26": "27boAW6NVVKHbkCDqsSP3YZTYXWPYTNfcMDKuVktMZNxKq7ynpnLkE41mKFzw46jAZnf9U5Fp9Q9LTPSd2K6Vxom",
  "key27": "bgRK3P8zkAMJuaUete2879QT8h2AbHwhbZ7ec8fjCNBjuyt1aPksDHnaUVHVcEMgdh6Nr1Pn81spKY5KxvmiMmF",
  "key28": "2ZpsgkXwvfEVs93JEn58AMaefEjRmUsmWXDcSbinbHB8Hc7DckWJvEF1k3vnVCuM36T4wVPkZAngJJWFJwjXSSQA",
  "key29": "4ssQnZDw1AkACuVzJgicQFKGd5YDfQRZqkdfKG5wXHcKpHXugoodeovcGRFnPTX4khvuWhGvwH8uprHygSmF8yE",
  "key30": "42GVetq4hSnXspBxDmLtJBY6ew5mzCwwoJcGX5wua9JaszNuMozEKxDRmSswGWXVxxVLWcUuaWiJn3n4PcgLgXKM",
  "key31": "4N51GCvfeGpjkEBuuuUh1atbpxSJaCnFJxRF4CFTfPaLbob4iCScoyfRNJEsWYJK4m2Erdshx75VEiMkb58evtHK",
  "key32": "5fWKqJPbohHNAFxJDSgtKNBTZ8Fwi4WwLELtQMVBnfAshUNdNiYAsVv93xqwDin8fwjdG1Zd4xoKnBnNFMU8czse",
  "key33": "LT5Jb5eFdxvShG29KyB3pSQ94oJUiQ5B4T3KsswfMZSKRZeX25krBRG5kGocCPL3gbSyHNn1mRnjENLXGvC4Fqe",
  "key34": "5qgNQ31HRiBbB9SufAbuWSDey7xqyU4d1dwHVgJMh7YJ2cP12dPL9Zi5wuv8b6w1Ve3tLY194FzdUFRgmMUY6UZx",
  "key35": "5mzJpnMVETfMpA92Pq6MxUJzB1MAhuDut8XzSHVi49vQVqJTH3h87eU6tKuRej58ce3k9NVmpJ4wBK3rVeLmDWRc",
  "key36": "upvYnNqHtUnYwzQ7rZ4cBLBwq5kqNKx1bUyLXs9V7KpeKfpPQvmmXY9Br8zPPfR35WAdFjhBcfLdwsfETJ8cH7C",
  "key37": "KV6kGUK3QsE8dB1tPuXmHbjdjBptXsNWhAJ5q48kasQwpvDapVcu5JWLaFfCMHqU4VDbEhsf4rGQFgsKgpaRgwZ",
  "key38": "4Caz9k9Ltm5WebHQfLGwxXLnqBVqhpcYJrb5EEEJ1Rz58KhU1bsztGuUUoLMssUjXsdS6eB9rXz3YedfYnHzoWNq",
  "key39": "5hWbXr6zTd4yuDgo5vc8xq8JeLZyHXusWLsLZ6eQ4d2qUQHqyeq78QqQRUEhnfQMAbRowZK6Dvo9nAQ8XL12ztBE",
  "key40": "2gF8Gs4aNtsSMp6zPdr5D2LSchzpnBXZB976mFhYB2dHX2ayFbU6AVeCg2J5A4sqc893vgnazc81RRFnAewYNqjn"
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
