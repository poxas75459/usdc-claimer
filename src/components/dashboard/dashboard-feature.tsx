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
    "2vYdjQB3DimmJd61RgQrDFapvKuyM7VwomzK5rtR952nYSdhA8UyUq9jShSSMFoAGCbMxwoSBtM6BGmG9obULfZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49cvggPgWGZ5B1GTNvwmvqXcNRL4M7hREm3cFCxVZPhNY2ovXHgySEmsAQ5EEhMAkjkMuQSTeAfXUrdDXBTvceGr",
  "key1": "3L7EhNQRKzF3z9LxacX8ACHk2iUFL1aQi275cgtUjrUgDDVSWaeA4Wk9W96T395iKyQCKPR8J38gYn6JLDRnE5R2",
  "key2": "57abrc1Lt7KdmDTASzaaBfz4KrCTrm7DZw17vdXP1wkbXDZCrk6XPtApZWdFL1ZDLx14VBxMY8SFrvc1yuBRCbUh",
  "key3": "5i2Zj9An1jWd3BhRwVvqZAoBa7NTYFyid1qLXUwhg4iKaTwwpW9iSzMWyv3jp1ByXCVNJRWNNYPdMtGRrhE8qAyN",
  "key4": "58ZLacYjbxDGtPiF2TuJ5c9fgkqkieMSbztKCfGZRfJPBy89rt4QidFN6mb3skK2NqS9hiGay2zwT23eE5QyAyT6",
  "key5": "27wE5UTvm9PZvAjdFtqwkmA2gKJLke648VecAfP5qL2CHxFDseU6BMPzzTvifevsL2Sw71pBybnqajzD3XCwdUbP",
  "key6": "5XjN4sq5UTrGyviDxoAL14wiNDoWwoicwXUqT27FwgRqiz2rabRAkEsA19EFYDwENSfuCXheR9gdFKV1a8jhMgi3",
  "key7": "2kQhiVtCbzsggWXAwzLURYBdv4UN61sZQUXsLS68wxuqH9WQv7mtF4nVbWLskZrMpwFDzYWSRKxdY5JSiruyZyMr",
  "key8": "5JYsxtCA2rU8fxWfSRD8CzdfU5jUt3S6jxKi6zoEeP7Kffm32E3kLtQYY1www2we2es2NKZKhNfqQmjT73bCGgbp",
  "key9": "L5FYhuD3ovfYNrgSzmYp5xvMdXruY3X9VEHxJrSiuXbwhVySgH9PcHHdYqVv5fi7NyXQ6nFozNHqE3rbXN7MBCQ",
  "key10": "5heodxgtA6JS1kAkBYELD6iaTVCpevhUB3DuSxCAdbQzkZkBWk68iikoF8YQ95RMonxXrN3dgo5E5SU8bqku3EAY",
  "key11": "2jdrsopn9Y2Kk9vFX2sdiMLyJFYwdswFGmfzuk8Yt2HSwkVURLP6aggjsESu5QM3mE6Xp4NK4aWZXGB2o8zuBqz",
  "key12": "5LZkadXFDMikbzKXX9eE2q3Q3dyeF7guuFmyKbEmx9LoEfqZTXAWCyxrXbZSqXQyKJ92CFe8JJKV9LKPJXa5xRU",
  "key13": "5GvKpv6CRyUZnzcsje12yZ7enhXbne6tzdgBNJQYFqcH7HujfXsZMYkqJSLSPGs9Zf3Qw3K1gF2FoaEePkZnwYBn",
  "key14": "5LZsagEcCF5tm2zrBYKCQYCDS72pVhiaHEgvXMrNMswF8LMXBJyUaBBDM62LP4tZB2P8Vw5KtrJvKhmp5djiEN4i",
  "key15": "BFcbzATr6433Ex96aFLz4ew1adZQm6bctBNbLC9ezTCfm2VBu6XWksjq6tAK2aayrcFoTy1XyrbU22AkKUF2JoY",
  "key16": "2XEvXxUAQYHw6mwMHf8BNvn4Q5ADxM5jwoC3rGmjr6P88nJ39rSTxch2mT6aNSYF8KyQgy8tNBCK3PCJfnR7sdrf",
  "key17": "247UoTeeSA2vXxJ2ZUGyitMS9pCRwAHeuX8girZHqZZku8bBPenS9kh5EHQRixG6KkSqMUzCjyTge2xuDFFJhsuL",
  "key18": "5ApDTwQif1EqAwVFGpxoNcLXmCnf3LLPqtXpSonBFVMTJuuDTNMwJ7J7SKWT7d2Z6g6FBtzxaVGTwKLpwDFF92fH",
  "key19": "5RAs8eUUKYgDHUx9CRH9hxDbcxiVAaw4hjFEq7hyEMTbxnzqYMfbFy6a26UsrWbgAsW3DDbP3WSXC12KXbhcHf7R",
  "key20": "6bTahdLtUwsebpNXYjw1yiZ8Uu4S59vtBGqT4oLk6o2p4zDBbwezqwcCXZFwjEu39F448QsmPRqAjD51UxeMPwa",
  "key21": "2b8TUaguMwn4b6Zq6CwLCNusbZ85CmZuCK2jd8y9fG14CMQ1uqAaRc8mVAtxFMkFXAeaC7a6KL8BeUbkZ1r2k1SG",
  "key22": "2SPUK6MbGQjg2PHxTWa7okz8sXzsNP97fuxxyc6HqYf6NEpWyir13L9wywfX426grKUouLhNbPA6pGeBsNiKdMTu",
  "key23": "GptkhXQr8MJmvTppKNTP7WFQ4Ynaf2B9Y97BxU37UdJEtbh8xsZ8nuZukVjQB7bVQK34xukseFNUYAf7XbpvcEi",
  "key24": "au3nrNYsWti5ZjMCWLFacNYCEfw4AMzdEQ7LyNFGPMCSv3dkMUmEwHXxJsXzdBx1CudMyXDoQSGrKkdNbUiX7ri",
  "key25": "4PZYnpK58UQftdnLMNhNUS3wbhhiv4J4MBY8wa4fmnqU3kDi5GWhr4zDx4GPfskJT2dwn54QH2gfa4irny5FhfHW",
  "key26": "4Kb6V4E2wdMgX52cGm1pb6vEvmif1WLCzwMq6UXfPVBAc8pNMBk5uQtJtU4QQi88vFT85dbbH1n3XLcVfei2XtGy",
  "key27": "niUWojtKX9ZLXK1QZnmK1gSjm54Y2cAoHuRirJZr7z5NR2UFdLgxrhEwKdoHmnXGYsWmBC28KMgP43EUu6nVtj1",
  "key28": "3C1rBnEDXZ79J4qanTtZh3ZL7XCQYLCyXyhLhrfAwTH8R4RVa53mnxH7FVEheFaqpo23d1o6anXUyVhy2Rgxdg4K",
  "key29": "3dZWgQn7p4rggK9wapQsPuv2XzTpJCxRvzktNG5gxB5PEqzQfLhsx5wihCvPST6FiU58FmUUS2vUJdhHYxbhdM69",
  "key30": "3zoaZQfiWa3bNvXqW9c6oPYS4WVF8Kn62oSzyVNBQ55un88RDoMJh8zVUS7Us75Xrt9u2qvGSBh5tXTmC2UZ3JfB",
  "key31": "4X9BE5k7YGS3ES3AeswYLtSZsZrio6na5MEJF6fpaD3KqDnCDbum2t2kUcKBhxV9171NwQB2QP7ocjjbmdA42wTC",
  "key32": "3jqdRbYTXmYJy7VwMjSaCd9DaxsJWv8y2XsceGndYiVPb47WTQzb7A7mLUsveNn92F3YXAJ8GjzDQVf2ggB4WKQE",
  "key33": "4ydNSDvW61aM9DVQ14YDmQRcYsm1Lu4wKUKXY28PZr5kfX2Syb9rNjgsUcDJyD6RcdqcvjYmbFZxqY3wyy3VuwGW",
  "key34": "3XHq2xJAwG7YM9c6g3qXcHzupExWjpjxVYfjZUL5kQh6Dpe75LGTUQVpEVX3NUmVytmAtu7sMQ4CHY9r14fnnt1L",
  "key35": "5e9m36ev1bsEG81xc73uwpGkDqYcstRFc8f1qHdYMpzeWyTAZ17gjq3NkhSPgTaRwzpqUL7LRgD2PriHeLciLQA1"
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
