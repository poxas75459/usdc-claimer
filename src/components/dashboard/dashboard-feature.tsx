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
    "4hW9EjWpoKgDeAVk1LDKmzQkQKcnfNVfqao2pRLfJXgdx3q45KCCSvisyGNLxix9cPVeFYJHRVA1jz6pMywF2FFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2santRsumMFjnvRxxNCEe6CsMh9mp2CVN1QHf1SqVf9LxS3AyPUqPKyXUExyCGVcMnBvoEd5r31dowZKb5oKZpiq",
  "key1": "4UUA4MGMFe1yCmHbzkDwgSPxoHfyRPbTNYUPb33ZLdDxNrEbJvDhkZMrmcQKRshVjiDJDhCocrrQn6SR4CtMbTY5",
  "key2": "2x6WwmXeX6kgTMu4DJxgK4kN9Lefzxw7JuHa1onXsTPqVD5nJfV5FnUrHUqmWhR1AzJ8TwWnoSD3XCVH4o2k3Skz",
  "key3": "3BV7tgefhRyqMhgqGDxqhzDQoLTy1bb3KSFnTFdRmEc6n31Q8iVeKtDwsfyd3FgyDJ8yXmKc2R8ajR5pURaWfJnT",
  "key4": "4xqvKRtHjHCVz5J7QGxvxwN4oQNkRoZWbAWXQX6YtKw3sLNeN9Fqb7VUxNNb8x6WKfhydu1TQnqVYn3t6BLgjkVu",
  "key5": "mUjDyRdE41YPmoRnR2dYpxqYp81PjmtvBjBtJa5iRWfdACAhcETWcorZyCeUyPsaiuhSTAVGdzoKEBR7kkUBZz2",
  "key6": "xSLGTNMUUVJGYwmxaoBcZBnw24MH922n4mACUsRasbp6AYpLMHVf835BYGa8aCiSEErLkS71mPZgkozGQP2QouW",
  "key7": "5Nm3Hcf6BMHHxabMezRek3N1pJbZuiU5LdnLFfCDMMf252Hr53BSYhKvf22knerabGNV1sPL6NLSAu9jBxWzos1m",
  "key8": "XdP64hqXiH26n1XRZ1T9T2aK56cmK911DksPdSYU2HJXSBXpZWJeTwxVg3PjQhiVGEfyNHdsKoB1MLUdV1e2ssB",
  "key9": "4QbMRgquiVv6QMxdUVN5wPj5Rcf73DJPEY5fLBLthNHnjdSqjuEDorrFp2uxxAgP6XrnD4j6Ntrw74VjBeuurdoM",
  "key10": "6ZfdBBgBqWraQEuWRiph4WLoQXHXf9zKUL8tc6Vm9HS2DUAHpc2Wi1C4RjpRcaxgeZE3M8Dweti67RV8btrQ7Vu",
  "key11": "5U2yttW62wjLrV8fxJgwx9559Fsd2E3z1UJ9x4kk4Q5zY89y1Kk1rALN2EsQTmtMDhsvgWgWAXqUKwckVEdL68Z8",
  "key12": "mgBf55zuevzosoburwSRF9EiTXXnQkN99toRY9LW7vQXnVk7jbAHrSfFHrgQVa64fNkpGu1HiModmtkpKcUXEw9",
  "key13": "2APtjxTxVRuPC7N8TQy6aEWFVeuDZ7gL1Az7y8wnkD9BHgyRVbjZEYbfS2xWM6gLfWBT9NfiHT8B91Hmv6RGymEH",
  "key14": "5LSQDxp5NbHoaAEx924PP6PgYgAZGQkpKDVMC6X74BG31yQ4mMzNk1FVVvXuXeVfDxPFH38tvfB8VLQM9vHqCVBG",
  "key15": "sExQSDvLrYqAzrN3ewwNTDAwjmtTb2XD8h6cjVd7zVGfU6kJDFXSAMhYPY8ZFwj78QNbLRfkXQkTW1gwvAmcMZa",
  "key16": "3vof5fKfE146YVNkSUwiCfqLLAErSifwbahcnXrr4YKxhX88SjZYEsARHQWbLbNuWZiXDy5WAEbAQ1JgBvhuxt78",
  "key17": "54PXhSH1UgFpYLzfhr8FbroRdnuP4eG1RTbyqAxLp9VoGmE13kfxfyAjHE4tw5NcorMbVvTQjBEPLYFPHnVCxAqA",
  "key18": "2ovh9ShY7bm21XBJHSH5qp7oYvrzijVD2HFcbqMccXCK4Hjp36w8N8CWrfuPcYXrtR98NcxxMtSp2YnRw1nTqCpD",
  "key19": "3pcq5BEAPyy73j17ofbk7261f2iSgEGgKGhMdvhprEuGD9dkLyjPK1avdcJiVe6CtuiLnLg44jmd4Lhkoq9hcYr4",
  "key20": "GLL1oiW96PsVwn7uqmitwBxPr7ikca81uuUhPjMLqbsUnTdtYjnj8mnSNzqVwa3EzxvzhkRSb4q8We6X2TYbSZL",
  "key21": "3sefHAbeNWdZ3ddZKtw9fpwM9FJp5E2W7rSCbkbvAF8JJpUTnjpfoRqcMuWM781hNJMFzd8eXq2XLnp6bTfe9jKs",
  "key22": "3w4t6SYQ1cryBf2G4jKcqh4jE2fu6CtGJabF6gTKB54Dxpw5xKy1wK9ESYyqRcLGjirssUhSevXes1VWnhKAGg7z",
  "key23": "3xLBEpm97DXfY5XYCy2JNJwr9TKokftQW1gm4iQmB7f3r7aHZbV1VnkC3keUPRQehKsiXyGsr7c7w9HUiuznTLkb",
  "key24": "4Dpk25FAEtd4TpzpRYnaGkkZXn21hURWZA54XCb5MEJA1LTg3qDgwcLXnsJq5DGnGA9NnxhXaQRrRqqvXvziMBqY",
  "key25": "b8CYgmPMcJwkPJjKpCa2V12fseEywx1ZZjeuY2t6CLLh3aSgsuU74QjzBaUiwN1nBg945fwQwftdeGXbfJyRPMv",
  "key26": "4EWFW9a9Jdyrysd6sieNTzatrNzkpfLeG6isdkzJJD2HhbwSUw3NdhPSXb48wVCSou8tuD9aVbJTtkH2hqePkpkH",
  "key27": "3PHMp7LURn59QsR8gEZiF58BcsfWkhu7Lbu9ttdZEPGC32dKrdxju6WuPJ1B8ZCVyczJpFVX1QVMuxHTFkcyKyPX",
  "key28": "inTWVboEvhdztCLPmXGioBN4hY8hEaK42zu5bzAxsBSHb9Vbm36RA6KvEcKaMBj2c3xHRZdpDmt4MUvqNH5LUW1",
  "key29": "kfZjH2JtKM31MQmZfYjuUdxd8ZRG73RbX1hg3b6XJUDQ3fGhsTg5ePxhqoLDSVhR54bvE6iJKm1KfdYCGddKFb2",
  "key30": "4vXdVbEZzHUjyk24NC6CV3VXh7Q1Zs6d89PyhNvo6H3kzvtbzzK2ukp5P3VBii4454ji2TcR1vyrvPzHnmS9C2wj",
  "key31": "3piHsvb1yVjjaJLxWNgjWZdB4XVv61CEotfueCzSDZtRYtW11SPowFTz6fhRwNnsYsY9eckZJ9Mv9qESqAdPHuyg",
  "key32": "3i33nfmweLXG3QH1A9vLnjbeXUSVYCjFeU5jVzu3pZQ5oymemv4hZWuVyAWtUy64JyJuHxFSRWaWL5pamN3JpPYY",
  "key33": "Sy88RHMDmVALnkUwk2iBdHyYi299MS6uiQSy8fnLNBENivpRPKZrG71UD7TX7stjVRArepwBoUGfhodAzZWVWKA",
  "key34": "5QycMm7KNNAm9qkrAnBoFsfFvxWbf1MVBaqWhGDBd8pAKYkk1oxFZDA35Jn4xR9g1xhRJXn3dAQm7LLtvNHqdd8e",
  "key35": "5YRsvffPvkEtj5ve5j7VN8oV9Zm6xf2o5BHUjTWd7ycn6qtvCECdLupVpUQGbGk4Mdam98ZVo5svRAumBP5mmvNq",
  "key36": "2S3ehmdsytr8sFsYHN189zTeWkgcSnNHbEaeFohrUVAeLQgLqt2CFoeTqa1iphVW2fdFgwNugtJ8grAEJZ3kcau2",
  "key37": "2y6QpvN2pe7MfXvXNJBKXQ54TQ6q18mB9HEKqbRmfup5u3drReZeBZtshgxZyuUNeVu9tMnABWGijWjJpTCixCpT",
  "key38": "4gd8dee1GsiQ5YTXvK4vtfAYiKxHJLSWNnLF4qQ2sYEEn97qBPPzu8jtEWBg1cxpj1xzgtYScD9oCCATXXj3V8jb",
  "key39": "251Yxo23d1Yb3sQGeMnjVR8BEoHjNKWNpDLjbfuu6gYzL5ZkTQioy8nxwLHEk2RjmMZqDmJBmhP5oohzuBjyr4pY",
  "key40": "4C87CkLrzGV3YSjfUSjjTJJDd8fEFMps3iaTew89Wotpdz7mCUpcPMy5pFncK6SX1a5G2sN17uqwQq1LPmXXFcLN",
  "key41": "3gjaszYEhDAeBZhVCb4dkc5CeTkjfxff7oiGLdiwUWdXwDRFGKM69RvTrxtLtTZM5TsuuYFJZYSEQfTALof9eC2v",
  "key42": "5dkPmCLMs8uPmvu6SixA4fTa5fBFQ2uhJEsdURbgHDTh3eSismbFokGcnrNvHeKB3tMX7g1VfHtbrceHnaMt7ohE",
  "key43": "5CKDVFhNbwpzGTJRjfsqaZo84sGv6z4NsQ4xRizoR7eBC8wi4FLgiGv57KpyzCU4EskUZuJE12qPzDV4NimRLKBL",
  "key44": "2HQZKzQ2iBnWKTUTaLdXTJdy9MbPFoao6CvMbc3A5WEoVSF1biNQJJ2cV6xXCfND2nqvWiCJS4rW93YLVr4HXzKH",
  "key45": "3peHR9gPEtepkYqXoJ6PtfSDb8yv8yg7Znwb4fhckWHmRdxfesvmKiwJiJgnqunAK44MoEq7kw2MDUeoG7rC4qY4",
  "key46": "4fSxBrdV3M1XvetEWXaoSuUtgPRjFeVFr24iunBnf7jUQR6A5uP9rmh2hDqp1dpnxhJV2GnEuyMU5ZX5BQUevJjZ"
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
