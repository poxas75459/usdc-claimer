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
    "4mzkoyFwNQYEutEMnGhZRvf2VKLtBv42drKozVYaEFJRC28VGBadRDMMdqxFhq2kibGVmFrLWUNFBPscF8Gmc2nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wg3fyVWyBugdHsBSCG16iy4AYtdBPLby1L2TKzR64pbKMi3NARAu7qnkSJpQBnFMmLhE2RrbFjhXra9u9mPBeeL",
  "key1": "3fJK3rm8ssc7PheK5y7BMC277g4eF9TmXmBE6DWAMLnxrXjcVaUiS3CwmcGi99ctxpcq3xXp2fDrRgeFLqeVLc8n",
  "key2": "3jMen1puUnHzcTpEAYVh1iZNEWudNiVofw2aqMMsL7LY8c4fJQmKGByH7Be9nKKtjwnf8vs3Z1BsTjS8Qew7Afpk",
  "key3": "49Hhj1sE8ndF95xa3N3PK8S29UBhTjsqfayUQWGRqz4yeRQdPJ664v7AVmqSWiVn15LcAFih58V6GxRCrsLfU6sy",
  "key4": "3iB8tfkNTHtFzjCEQg7M5U2wn2C4Czg7JbSuNHt7FiJ5JymVEsALhU5abk8iP7tJTaJc2jop8ykt76EqVEt4ssX7",
  "key5": "57SgUtPqWSWYaAoVzRQjtfSdQGTU1GwCVscnnhdAWgacEExrU4ekTsuFKsNjuwutTV7KiJV5enMC951TCMJFczfx",
  "key6": "wxSrES99qBjqN2UWaFzYsVZgLTjB9fse7FkrX1kiGQMaap7HLLV5rHxtpAr7WrV6buZjoAfc8fmoSTYQ8yyR7b1",
  "key7": "2f6ut1oppxfjCGXvf7MoTUxSfJZtjX5SCgbsNU16ymYSg8PCDhaK3FRWsP9c74H7yjvdaiPRfRg9okYWa4eE9iWo",
  "key8": "5c8JwNaKbNDHL3NDeTDD3G8irtEuPC2YbqCRTNULoVe4ryyCVxD8Me19V7ireYU2a3B2rA7etuMbsDDN4qvCjfzG",
  "key9": "5NJvQ7nNwpDT3ZdyJBgqHptUQFnb8jDuT7Snk8YMVuc8k1wz7sbuwsvDcbDjvo3vMkqhUr8ZndCxXqNTsYPiSaBH",
  "key10": "3EYW1Szau5G6M9rgVN9yLMEzV4V75qfueCaRGU5wGtrfye2pMvvhoiXF4p8xXPawAAtoNWLWQSJB3okpUuoSpMYr",
  "key11": "4fGEbHak6V246AFET6cz35Lx3P3derGxrotqSfQNhHHjXuLPjrdxwceK6h14fhLUj7d8vDnx9w5Jdn6RZ1TXwfyV",
  "key12": "4UHSoTa1LW5cjtSGWQcUcRYbkvwy7WSYWK9G9kUQTiCDf4hDzyVwt3ooB5P3hhovqXhh5ygK3hG5pbs3SgAyzYzK",
  "key13": "4H9nYEpsmshsRJBeEU6Ccef3eqpKtQ74NJjDsPLERr4K6zK3r8xrfVBdypLBodri2KvfZWFGGQgHSdYLCCCFs4Yr",
  "key14": "3KJMTqsXsNom1AWBbtWKW1M3PJwHDytrtgktKokXLr5bnwaRQeHCq3iQWonvqkokZDYGyvkUsv4D6k5vr6eKn837",
  "key15": "5mftUa4UMEspfwPFMLVqVazyKWfe8PgR1htHxAncYSr3NdWxJ6fpK3vZUSnXDi3gPCN5C93s696DLTci7uvEYToD",
  "key16": "5q4CEFGec89Pce4jrjrHq8zuQ5Nr8KDDYZoFPCkBma4rihiCH5V8twmFxGnywqUT3in63ABqGvD448ucNhaQBjA7",
  "key17": "49AHwgNqpa5U5scMGC4TSEniqmb98fm3n9E3FNeUqkdctpABRtHt2ZcgtzdWQbeE7fFYERbuXdyKXSjZx81BSUgp",
  "key18": "5CPw5RpQW3MzMnCMQjt7gsYxqvNEEx4We95sRNYBgASDMDhvCbBYCVaDShNv1rAf3GiZbzZBnPnKsKTRLddtoaKa",
  "key19": "2vaGs19yGwFUdLMeapLGqU8ctFZYTXqLBB7TpFQWquPxhY7jdhHZMuSfwq5zLXPAJc3PNCQ8wHGSLtHVYA297AVJ",
  "key20": "4bKzA2LxitoMRH4nFe3JZu4HPBDFkJjTwALkGg7zpKmoskQJh1G4MufMTQrUJyyTPXFDNTagw4cS7vadriKmjNeT",
  "key21": "63utSXaxPDgPPb8bBup9E29qoFANGfD4s8uRMG2Kzk51Mp119nS9JtqEJWBpgqPa4twnQM4djfFMMY8JcHAZPQQX",
  "key22": "5wGfHT5HyihrnLTB9R7vmthdwLkPNWdiqpPvcd2D3uuuufVtwQ5ofkhkiBHZ4Qycc54VfMcGgbazSUiVo9uuGyXU",
  "key23": "dnvWUkNSHn9diymZXzsXPvBNkznCQZGJwcvrMwPofvku1iK5qPXegRcnqVpfoG7xmWrRohAJHxEWW5o8Kup7CBL",
  "key24": "3AhL3eSM3ZiCrGR9CyxYHVSjq2dfkRPssEYGoZUzccc8DiqoTwLpX9J5zkJhBdvQZYuWGXRL7qynyZcHYRRR3tNA",
  "key25": "3gg3sf9iqsGoKU7b823X3fM9AdeEktMDAqYX5NMTZmBxgZbd91BrTbftr2jGj39Hm9cusUVUErCunfd3i1CJMX8G",
  "key26": "3o6PYKpj6XqGgYPWiS6duw25JRyqajXWNECMkSQg22WsKCB4yPsqbyHHfB5aXHREJLJM9iKeG89oqiDnj3YbUXS9",
  "key27": "2zzi2Cwp9aJL7Fqq4mkWRSowGqyFg8V4CkJaUdRn8DGMKzoxWv4JP4LHu8JGpP4XpqWR9sjcxjGZjKSjDSFjJJw4",
  "key28": "5KbL9UTGWsWXgpDJ8rwa4dirKjHSePSz423vj5BEd3zZ8o5JVhBFWkF2SopVdzU5q2tpJGNiKLrYMRgsYE3VaCfV",
  "key29": "5u1ixmDDv5Anuh2ofEdfveYbwUjNrWTeuUH5HaFZshsdw6qbaHSJ8fXUyJdAEfRGL8c8CRsM7nrJeiRDrteJMaax",
  "key30": "3X4V27ca6sGJSSa9zdb6KtJCQ7mTPdi66KJgDd3WjAF9zsy1yap9p9iWhpimyCJmjYq4tEYKtq8pFCrnRK2fcfPs",
  "key31": "3LzbUtxpP6LcZgqEBLTL1eP1dztMTzV2hbLLtFGbtTQu5rU3Fqy17goLHpdubKgfLoVcL9bdKk2FhiyQytxkcUBK",
  "key32": "2YCCcFpSgLfnQZKbxQydYSsvmJu7VyehSgu2foErDejgVe5vcL7YYAQsVcAe3uTnLVJ247j5SRbX428fV8uhoVFU",
  "key33": "At9mKyEDXV1wKuYqgDWFizaVMpUeSEyFycdeo88ZVGXiTx6D6Yg3hLuCjhtLRZ1iWb5d67WBGcxExvmsPgo1pAm",
  "key34": "EZSCQjKNYvULcH9EqyucR3k75dFp1CuoCmqBG58DJwMMQzMSb9jHsrYeUnXKF3aHyLQFMWGTX4tnhpH3ngkbWPy",
  "key35": "shnTEr71ezPVvhhUjChSn6hB349bySCFaDvQ1yreHEkQeVZ7w63YnA4FH9ztriVG1yzcosF2FK2FyzhxtpiUkTT",
  "key36": "56qypCCKz6guYUjsAYgucwR7JYXkN7MEf4aSYJDidHifVKRVtuwT2FmdjTQZssKGLaJDFZKJzC25NXhj7GQL4mpp",
  "key37": "4PWJazdF5L3a4Z6uVBx4rikjboH8DFLjJkWXR14r9AoXEt1mN4Re7wTwzaedGFxfBDHBSFAViUMGghhDcbThVP4a",
  "key38": "3ueS2Ji23iPkejX2qPkVbAxr7Ak6g7N8ciRT4ZJwBiDkp13N2maWqTzBgWqfXjoLD5UZgctDKmu8Q74uJ6MxPMbo",
  "key39": "2dHBZgh4REYujCgqboj4nqjhW2M3rf2eGh8HK7cSBYj84Su8h2EJ1gMS58Eno6UPbRJ7W2vcdoVJ5QW2GFs6GNKe"
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
