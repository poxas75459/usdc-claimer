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
    "2UjHRwMqvf3WuXNfXid4hyAwcHLMf6jB865iZtxKxPEtsbFmcoVZQhuU67q66bDC2snE7ii32i7HP26Q9FMdWTb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fw2gqF4E1hSkFnWuCFKQaGp6ebB1p1DRS54FdhbgSuUKazGpWFhBnJn6sMJcRap2YsStveeFQ2ocUc4ZmZUDXum",
  "key1": "qzirjGWCR6eHfjGiSJqE2cA4c3n6Em6Covnx7wVaqqMixz3Yva2fURDWnxkNi99bMMErSjQzz7yM1ynDPwNiAwt",
  "key2": "4V7fniYVNMqKrMdorvwm7siyp4daCAPWeowwgZwdVecCdsqNRhpDwkcWMUSw9AWUa6DFX1rCNBFtP1m4ApVeZcvb",
  "key3": "EPoEvsFaLnoQPYZuDVKRRdr7nMgN8Y9ApdcrCvpHgpXx1LGGyguQjR5KNL3xChKKM1SioUEZ7eyrxx9xRSMR5Z3",
  "key4": "4gz9doXnatfnrZx6wpiUyArrJx2jNcDW87foGjf9Y3Lg63fL6yhDkZTCairEMM7xCdCiAFidNJ92xMKXAXGkZm6m",
  "key5": "4UhtH3jYasnqajAT7CcfciHXBWMy46M4SgwSSN3KicJXQ9hrdwt76MkRUsqpSd2dKC3zxKTJthCH9szFsNziPycY",
  "key6": "2gyggsVK7wh71jaXSZkQys6pBgf6NmswzvBNH1ehkBx9XZDBdjV5ZzrgErkoKRBv7WAMZwreshGdanzXa4HDrHLS",
  "key7": "xGGpw9TNqo19Wb5FET4Po5eqp1GK6u6qVszct2QuVk2TRnXDrp8nYLYjaefxhSf3HmR18YDcMB2QA9DNWrS42PA",
  "key8": "2CgaYTmGqvsLHYuAwvWaJL68C1WSquDp4KWWpFJBEvJMuTHUQ1fVatcy6DJmuJcYAgjDZ5FBdekdtPRUmLeQ2Gup",
  "key9": "vF1pYCxP25cef1Jfd7pgyxXGFNzbHcwy9gPsC7tCN7kAqC9SQrfeD4hv7qBZHTt3dbH64X9o4JNwrc4zxA4X63J",
  "key10": "2LmCkDgL9HnpWu7jV8Xbt3xHBVb1WxuJAaav5BWrSwxfJjKgMkYTWox8LRa2Hvr4y8W6GDPJr9LyUg67GokLF6zW",
  "key11": "hkCkHBL5DQW29yWpiBDgEgyd4fRvCjdarRHXeyHKkuu2eP4GuRaVFjLHUN4xipNKmfee7NR3oNpYYxdE1HyXKJC",
  "key12": "5XGjG6bjw6JLBEnCYGFy5zm6uv4YP9emZUNVnh7WrdeXMVydRbHxGNG6tta7RCp9wp9stnfcazQSfDBkN8Fy74VP",
  "key13": "RfZzfLgbHRtjedSng78wakyosEa4W7vKBMQxjsdgtoefQkUzmehXCQJaaTprcUMA36NwwY9ZTopUScwpFtpqBGo",
  "key14": "2gsbMJDUPNgAPSvMia7JfJBBWVRQ8CafwLh1Mcc2aRkhcS1sottvBNLuc392zbG51rBZTtE3ddYNtr3epHyYqvuC",
  "key15": "KrHJZPM5Y1sTVxNZ5bJid9WVuMJfzr7fey1s55sqpY4kkjdqwg7TZJ3PDjLa5k81T8Y96M3hRrAe54C8sxwaCcL",
  "key16": "2yKXQwqo6XTbwHscF3sNk2DFTy9XJZrqK3UgRFfcokuo5uHnQ7Y3PHGdjHJGL97Lo1vt9oNNiT5kJ5kpc1Q9JoL8",
  "key17": "5fnHrq5HtbnMHXYbvdB2UVaxgn1dg8VaUGy2sUxFkXRbtU92bdrGMeEEhmrJy8zYzu6i3FH24ShTQSYfiJNa2GVu",
  "key18": "45zx1J9CqNpyNsyxcqv93nHTubY6qiQrJvvxgP9kmDQkgFCzDC2qLoiYG2CaNTje3KSZN6JvKSN6D9PEdkiCayrv",
  "key19": "zg254eauLyRvL3ftsqEpGfLuyZkKomrjGhSDEabvqmJVuQbmPv6F4FF3fWJSLuJrDqAH6C3uNcaLzGWB1qXamY9",
  "key20": "5qfLumSGW5sGi1By34yXRbsh5nXPUAfUkAXchaHQ1y6RfQLwmT1JdKJ7ZKU7ZELZhddjZ1ZPJCxwR7bkToa7SgaF",
  "key21": "2pfn3Cu7DoVybeqjed9sNFxHnhoWe2ERJ3HHb7BFQJsRvh74YRtERznZ1C8R6jpG5ZEGApXB5ophTAa8ANKh5gkQ",
  "key22": "2xTi8eXi7ngGbfB5qJmHRUXW6y3WkXDXFWZX9Sw7pYkWf1bYjGvHDATv7JLYxJJL8WXBETi9ufZpqCzG8vxSG5Cv",
  "key23": "4J6CNqDt2bM3QRzSyFFQu2QwN98A3G9sJE4LZwk3tiZRVmrt7a5Aw6pCHn63kqF85Xiy6qPoRQonfzME25mVt4Kw",
  "key24": "2kZwYEtyrRryXEgMeGYa21Qdb3RDwhgy6ehZ2nt6bTid7FLqHriEXmZwRZfckAbmA8NuWFqCayJ1BdrBrvz7MxCu",
  "key25": "2ZNMj4zDNwootiqGM8pW3yibaxqym7snvRguAdy8DT9LSN7g7NJUzVeuqQUUN1FTUTC5LFhVLk66GsDzYnHg8RZG",
  "key26": "3ayd3AnCyPHSRfukJxv2MWjVchC6bjoozCZZzabbogth4BRiokYGecPTwuMJeo5EwxLz5gbzCg7TTQwZ9UhE338e",
  "key27": "2V42wNTVgRYT9ZdzgZkK7rVA1tn9Fh4Kkky4SkiLRxmf7NWFEs8w6uuwuBKCKuN2jBu69XUaY5F4RDqkiGhtnNei",
  "key28": "3DvLxWo2k3YX5AanTFA5YUpwLmMHwojBih4ZH9pdm7F3FyCWRYkgFApT1kfXea7d2pbA8vXw5W3UfW4F7ENee5mM",
  "key29": "3JTj2pfLDCM87sE7bAyTbNB5eFN3hyte692rcGoCy5KkyVPbZc8GpqAWdPjG2FaRDn5jUHs1p3jbHk5JaU5uVSj1",
  "key30": "ZDZMBgqVEoZH8AirbMuTbFpNZMhN6uDKWUzRAohP89agBhsG2VRnGquAiJe9SPKDzWUKDF9MdQyWLkukRi41AAL",
  "key31": "P2s6gm7JNoLneQzMw8FtegTot8HXBtDrsykuovdgA4QWtpkcETMuYSMhRQT8MaHtsv4hKtxgA7kYeXBBav14Qo7"
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
