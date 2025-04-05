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
    "3xS3BjRAS1Aodgn2gXpKmeeqfmwH7B7gdPryD4UnkAMdXdnEmYyhLYuGN6nyqHdkFvUxXAFwh5GSGGuqm3Ucemh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcWBPYBuGfm2yfj95drktmbnYwFbDmbLBpa9eskFx8Rp27k5ojdypJxmmbkQPs1RVwsBR2bMvDvGMR4Dtv6Ui6A",
  "key1": "4RpQxrCeWbjSF3pP58dhhivmbacDNRroZE7ozLytHstUeKRiatezQAjice2q8X5EewSdtNuRuEogiwoVcSHUh4XG",
  "key2": "22VFrHwLS33GZtmHYsdwfN3awQxnyryA1jrw9t8nau7nQtCz9PV4UXw8UyTQRKMqjpYRU8T2ohpTgKi1S3ouyeUX",
  "key3": "2t1c4MYyKSYn8bnABBActWQeSaaMZtgdsVe23JsW9h2efoCc2VSJhPc92ff725S4gvg9HHbqGQrwMRxd37g7qvAN",
  "key4": "5bcaui66Ho9724vt6gegk8TqnqMtVNCW6TkVMxyr6qS2r1qRXrmcy9KbdXWwwiWgLF2jQ6bC7Rbe6seC5XR6Yi3d",
  "key5": "4q4Rvck56SumeDFNkbcEbs1DRDZ54GRkuc6dhEJAzdAt8ozVv3i7Sq81k9regh5HznrjtpnHRBBGoq6rxDCMeMqg",
  "key6": "4oJec6qSFvkG2ArNZrHHgQ5JuNF2YpEybiePssAhcqoPtNTm8yahXrJ8fV4prWe2KH9yiNmnbsuKZkZkbJceD88E",
  "key7": "5Bha2M62ryCxDVpmatAdnEXA6wnheTio5wJQCfS4eaE5rxB15H5qpMNpb9G5YXgpzT6qLNyHrABqNC9ejZxL5hLa",
  "key8": "ZuVaoohPc6dsfBW31yGUv9Hcz1QuPN8rWi27WikDQSdsBbWCgoRzgJoMpu8VXKwbuBhzWpmrVXTCsXyCFjCWEx3",
  "key9": "xWgrc984vtJJSAd1NB9xZXwsCQhfyyPk2euMSt6h1bVT57p15D1Pips6sUYz4fd22HYVq9Uhqn6hJ2qLovETxBd",
  "key10": "o6GpxJDFvx278m8Vcy7xk8q3HKzLX9q4MyuVDQYtWBmoAiHVvdttJ7oQe7bujgU3gCBKoEmys9JkxJyBkaw84Lz",
  "key11": "47kepptm5si5Qikhsgu4XyGwcD8JCAT8J3XxAK4pCQKM8wRBiFu5JdaudnxAuehR9L2TXd2xYut5nZnXRA6RPCEB",
  "key12": "22pFQb6sbELh5w6khAvt5NPaXW5Ct9DZu1QcrBRfGBrCCZTwtCgiuuKzehbMWDKDto9MDBi1dbzP1cYzPRe6fSFp",
  "key13": "oiE7sb7SnNu8hbxfG9j89piVptzxjbbhcETxaS4uXnyLrm8Roaygwk9yYfseip1dQwxNpvoX8wwLXs7jbKZQc9w",
  "key14": "5Zv3y8CywU79RTv3BBtbU5m4D2ndXxzWZxuTY36CpXPHJBo4sEWNDrjAv6qAhYX9CeSq1VcoX6XJsNimGDvQCtdk",
  "key15": "31yAAs9qSzPqEttFeaq91jmybAZnBBLWCZVxu3Bv4paxqsA4ctygRhRjn9RWLy7GJEVACG3NS8nDSmHEoATZRW9Z",
  "key16": "2E6LEeDpChzYqUKJVXLZbfCdFcEerRtmpfTsJyTLQGQpV29uqcPqKNh7RZXh8uoUj4udbM69jhfnCbKWncytzpAc",
  "key17": "28VxqFLpfLZPHezjpJMgfP5e8P7YensMXF1xbLVuMnqzCQVZJo1AG3v9G67Hu3EjLSmmFGSZWvKDQ876iqHeAxxK",
  "key18": "cD77umcstYcPWXhXaEpCJ5kczTPvFAPJGDUWt4jJtXXStT5beD8SYwXDcMwWz3onA4oniBcz887so8E2DK5wWGH",
  "key19": "jW1Uetqrgne4saytND5yhg7EWunxBo8BBnjQsbGXVX1T4EbNSd8z3n3bAApUaPPjausNFczum7oESHpPNGm2wZS",
  "key20": "41epDhRjtFGNXq9Nb9PWKzKBYU6PyRSir5Gc3MMYcfwBv1YLfuEEJdsKz1h41t4v1ohnvcziDgTHjQhfcFK9gNpk",
  "key21": "2fsUBbP69Ys5QHBka82QfdX5cojYhX9QhCaTY4GGEVvgcEupLqXoYc91141frPha929Be92n5vp6fcrbRDBHai4N",
  "key22": "2DVRoy8Q97yvszXMy5hc66h7mB1K5HkMV3uRTEiXzkhSupi8uC8f2sULz1mmAwPg63M9WmPpJUwF19RLe5FteufQ",
  "key23": "W5tmEJMBtkTghyevoxG6xo9N3gcXXAMEyQ1hDytqgUW7ydWHE9tTFdsFz71aHApAxPmQFsiAM9stt3UeaUb7LZ8",
  "key24": "tfj8NC44kj4DesW1CUaqMoaMmyZnSYGMADHpYVkWAJurW9BMnLJmW8F3EmvTZgFtCVFeAoVdKpQeMNuEHMKpfFJ",
  "key25": "5tn9CCbt8CeNmbWJignB7jiDGXaTEM67JFYGfbGVdFPjroi1L83D9F5rWcCsnYfnnVnwe825tmeZogJx2n7SyKcz",
  "key26": "4fRLSZ4Rde7HHsiYtU1KiZyPYSvmfgKL31gTLBDNSuEAMFJZmLHvHAKMB9TAYoKedC2miMwpk8fYFXd2czaaqoGW",
  "key27": "2Kh9Ebd9EbSdkyBXdsCaEcVVAWU8sjRWrZKrTxQ9Zx6gnN2AaDk7CDPyr4gwtBn59doFRa5D9MD7qFSVQTD39DQV",
  "key28": "47XNw7i3NeazGcDQaLnaz3e3CPibvhYCEKv5sq3sdVY3nfDkKBFeQnUuJjKEe6ozMescXGiTRr4dtTS4nK1EFNtk",
  "key29": "3c8SEUYXxZJKaWjTa4ddkzfoXFqCd3LoyrcXV7cYLZVyYFRfecFNXkLf6cPTSyRZHNaChSm6uqnxvCLiWTRgV3L3",
  "key30": "2Duv9yk2mtPtvVpFEzpfVL9aNC62GpHR5BydjGm7hJCFL8duhmwbEAdDeihTpwBv3bGNSFYRNwJHREq4sdvuedde",
  "key31": "3b2aEhuAqfmegU4MDX2tjqxDHawfC6MAEv1JCWXpTeyg7xHARenBhUimBH2GgD3jue2fiT7tDA8iUUMgbq6YgVxa",
  "key32": "tTy6ykrW6RfQAVvHpmKU51m4TYPykWe6oCKiwyQMJGyUvP2EXbmLekF75uKe4xQ9gVSEWdmKoUzADPTVgYpGKJR",
  "key33": "pyV7bchYhb1jZurmuVCAQfM9hxmA2pcjR43g4VVGUmpEAHgAiEMbiph7NUkQ6Pow9Z2NkKzbev9mvmSZLxtnt5A",
  "key34": "4QHqxEbjjYZmZpqVxKpbAoFT1EtB2whEHVMxnWo7DnE9ihGmsSdcDRoorWDw3ivLr43C9AmA1ZjAesdvBcbYtihF",
  "key35": "5kXsZ71KqrWWZJaaZRUsSUAXqwQtbWJS6PSzPX9TF7JB67ivi1uSjtwWcLn8beUbQFYw55511rX3Yq3DACX9q4zC",
  "key36": "4gSdYLTt9ivjv8gHkUtnr4wtZFJZB77EzjpkPCnxrzBqL2BqrfaftGaDN4k5NRbMKReB7RwFMmBXzX8Ua7MEe5k7"
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
