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
    "4c9bd7V2WwCWHDQAwqo4a13vh1ZQb3oJMmFpwZ1bYUjVAfZu6UrSkcK4VHbqnQ599527F278ghK51ZSUVLC4XGfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mX9K9YuVTbq5HVij3KiQRZuT1uFZoiaEZzfSNaYWxSFQ9Se85dr6zcWDEufXV6x9rPt673VKc8KnrUZ3bYwo4yC",
  "key1": "4niXyunBZypVvEQFf88i5KigYhJ4tfUEVFccYZ8SJxNLKf1hppiiFZQRq4CohQSJCpTmsYtLtGf3z2VbR41iKV7h",
  "key2": "61CAi4Sp4m5mzCaLLeevNx3ez7bhGLKk1jjBDKRbnZ6q4ZvhLoEsLLo6p6PTVTzvL4C5Y2GAngMxewq12zLyRnHg",
  "key3": "4GVzLvSgW69X2AVtun2UUgkYcVqg3ZKCe9awfwb9PKiQ4KX94P7hf9ogNKCNFVt58SaDbgDjo8yBu6xqngV69QKP",
  "key4": "5pdfJyBzKLsQ6ZYpvjvedRbcXbucGPFnwnpzWymcrniiQfvWygZxxGcxZMetKdr7BjmNj7ntb6WzNtwA2oBxRApp",
  "key5": "4EixbKUNEbgA8DN72Qb2dM9bSrLorJ8aF9WxyrHmM9MwJcHhxEycgfC1K2iHkYh6kEm1aYMeWkY9HpVZ3i9GbajQ",
  "key6": "4LAXFrwH1pfcK8EkpuBx24T5BnE3QeoS2Z96RaF4E4XLAm31NYa3PU1KkhurbN85T9Yn2nVT21k6yfnb6D8JQCia",
  "key7": "4vJAUgEtBP322UPwaGuiKS1PJ3pgn3RdFGoM3m2XAFYR46yPJ7B1RSwPwN4bRAd8mpq4sJ3CU5sKcmiRDdAs6gLA",
  "key8": "5EmhCxZoKV9nAv9MgkXgmFsrpTFL31SPQH3378ohVqZn9Qtp2dcu959L1Ytbxv8DNsLYMRWkWV1uPrpNDxWQCL7j",
  "key9": "5ve8ZninscptLsDjyT9ZKZKBGQE2LgGuc422YwjVoriKzY3tUtCsMHCguqKLGPQA5g4GhtYBT7KymgrP7rVHw5sC",
  "key10": "3JupZR2Xjbwy3SCbshKTHfLWdXgiz6h6sZF3ZrrDATgPdUiYHqCqfiBneQKVUNaEq3mBpGnhWGPczFbxLdHk8chc",
  "key11": "DB1VSifkfmTF2wnJUXZXyzvNdU6GB6mESWbfXgDrFNq4CrCm6jiJD5TAEzgw55sH6tYRZwKcffMQa7XcPTubYB3",
  "key12": "4uiRaycoLW3EYjKrooi35JpW3rjxFFSStywDauUkB7RhDkLMZcLfkkBnWqRgecUSx6xq3DDkoonHW2NwGZN6KvgN",
  "key13": "5NM7CwEDNrW71RgxNpQ4yxYrgie9ekWdU7xU1xtVrHdiTvLcWuFFZQpsvmZ3pqC9NMZHETdQJpwgoD3knF481FPf",
  "key14": "4FSgXudnbEsFxDj9goadYsCosvEYdZqP9bXw75EDckC5EH5odrjW56QmBGiZAmN71aRgaH6zbV8apKxouRTKFyET",
  "key15": "S1C8q5yufUvHVhYC7gMrNg6U7poc8iZf1a7h8d1NtPy2zJKaX7zHQeAye9CvLJsb9uZBHYQhHt2gwTUGPZcxaKP",
  "key16": "4c5GAmSgETJK5h5GLVx5VddZ4ZqekaK95S2c2Tt6Cg3konQEsunZbLWrYz5vsMU82SgX8qmWFaW7i5B3inm9D5kL",
  "key17": "K6d9XnLzaH8wG5nn7PtDhWHdTjooChV32FLSt88RBEpkptr7GBfbJkjiNdPA5nApN4XNUnQ9wCRT98kaBtXMkt4",
  "key18": "5HWYtei9YxT94iYuNbquQakNvpwNZp4rj67RxdoMmKuQvdi6MU4cj5pEKG4tvPuuTymZkgbERQsgSAP7wCLDh4L8",
  "key19": "2eAGkRiZpYzwzR7cJU7wNtAaHPnNENXh4gx4ZP1QAB4seJYN7GcEnb3ZMvu2TqGEbrvSWadqjrFEGTbiMSK6wA2d",
  "key20": "48wLMYga2P5Yminh5mDgDiAj3BgUMRWoSBWuskoY8pZdz7B3UJD7gsmauJ7xwNpiJtMEJqZBU8cGCeUHhemJv58j",
  "key21": "Akt5NArjT3zMPAs4rTymKFNKMLx1VfnBB1JLFpDGuiZi7xDedQxc6pw7WM7tR4FicLcNF4bfxBuUgm2BQ9xoAvf",
  "key22": "3HrTiqZmA5Vjd4G93rnL9P445QTVD8ZsVRfx5j8ZtnTf7wLY9PrLvjNr81ifFFxBQcEfjgo3Cx7Y3dt5X47pNgkd",
  "key23": "4oFqaz6yGptkX9JfCiGAQfdcVFAY1XSi5whBCmBiPWdco8frD3pG2cKcUc5BKJxRDAVAAKbtfD4gx9X6p4iMDUGp",
  "key24": "3ZfPeQW82Cq11ytsgiSPBVPEHCMSJBYwyBP54bbY1XUAADMVvthEEnKFeXDtpEFNqsYbUGC6yvDWHkzX6uwP8bws",
  "key25": "3nWsZVkEDZr17GTQ9hxesFtXzt6c9xNNQnwopZQTQ9DFiuMXGqLfZD5HLgTYkgoLycnWJ316f8yoh1R7sp4uvC6W",
  "key26": "3P5Aw5CJhm37D4sAjGsyLJ6QK37iJkiX6E8Edy2C3A6baGrCCEATqf7p5JECLNQgFBdRNVobEVC9FNd9LwMpqFHh",
  "key27": "5JXJ5eGmyUYVyBkVeePibXXJ58v5AjQZSAR6sekUWcu2fhM21bT1Y8T94ErZrWhKHv7HzcBq2WhSw3LxjfmgjZuJ",
  "key28": "rATL4TJ86Fh3VgvCRtizDH5JQq5dBfWYnpX9cTCLQiyCfVnxR6EcvVogCAfUFnhPfwPSqqRFqoTTmdtLVDjGxji",
  "key29": "5dosoWruccZeSUhKq74YuxxhsEFjVG7igKLRTFbBCmUGFKg1anBNC28LZu95T4jDLQ4ZUwqbTi6AowTxefGzB8QJ",
  "key30": "2PkNjnBA6B7UyrcX3m4vGWLpK6ZKMZ1uJBzezYizKy4EfaiQMdMqYE6qzQ29ZvAdLKuf3GwVhN3huo123rJ6faTn",
  "key31": "3cucd1MS1r1zaeDz1gBQ2RRYrre2Z53Hyq75hcQcJmAVxpwB976UYuMPWqNso6JQyqayBfwGFwyHvPywcgs8nwpu",
  "key32": "4fbUT3A71avj3J9hpXEyK7QiFbckgcjEGCoz35JsqyaytSNknbYV6H6jr8J6epk8mT5LKhxXNUzGC9vtXvKd2rVq",
  "key33": "yM65JcPbFYqcNyX3qjYppbqYHHF7pYs91NQJqg5k2cKecfjkkNQLc69L3th5M98uQnqAKd5LhvwDFhmexJJMfgc",
  "key34": "yNUvJmj8pAzGvgBusm7oTRbwEzvAE5ZffWMY6BRaxm3S9W3S1ch1Q6C9Lnvp1Btq1foiGLB3JSRp8sQUSUCN1uQ",
  "key35": "2QB63vaKCtJHAch5UDd2zgXtaEpVi8y8nVWxUgTPYXxXSYbR8aTVi3oY6W4akmYcMVK5JmJfcUurPtN3xTcfyYtJ",
  "key36": "5eKtLJv3k5ihppMzxND5cL5Xaijqsqu3boveM9MfNLxNzJjsrW7Jz9o4CgqzxdwdQHVX5YA6a4Gpg9sJ3zZczoDV",
  "key37": "5hws56n3hcYE89VeBmaeJYPR2PpBzuxPpMmRy6wEQZ61xAahQ1uvSLxj1TiQ14nj4RMnmtBGHXvXaX1YNc4BbSN3",
  "key38": "5j6ZUi7B7AyLqFgnz4uJNTvdmgo3m1jbSdf7UrKx3UwFNvLoXmqiovseraVxCPJ6rm7f2ZXUZvCBDX3mD2BHD2TG"
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
