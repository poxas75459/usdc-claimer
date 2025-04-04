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
    "29y6UiSEQ9MS2DKaoBXgt9EZVugunvWBi9KyhtCrQNC9fGdDaBG2zgr4Dm3bLvfZFpy9xHVNsdx1STrxTc8iYmrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQeS4KqHwJSyPELRMGC2cJqmkYG2WiUr6UAANva1LKiKZxu6CtEpn1DGXS12RJ8T5vdWq7KgLUyk71pKqEmWgFq",
  "key1": "2CFnzwPSsS3Y31LvcMoAFLyoCVtdbXDAXxYyEoPTHGK3CQdaq2BANDxyAaGQ363i2UrMuUAKFbLXTPP5FK52P2M6",
  "key2": "3nsd8q2jVBAiL6FY3gUGwZ5hLzJrdxJyNhKRZizTM7Py6VYuEsWZSKNos9Xb2NS74T4Hbj423EDZ92vp3aVe5UCC",
  "key3": "H38AN7A8rT3SYv1TVqo2YQxy3Jmz4V8EhFHguuCXMr2UBzbNJ5ojEwSymcq5tSMpqCNpTUCAZJncbgBJMHCZ5de",
  "key4": "2fZYtWUTpXSyxd9g142VJLZCjR1WbX7gUrW1VCTTf5U17pNKWc34qQMPShXWjQjbkQCoZjDrQhHqdct9zouqsPCy",
  "key5": "5jbSw4XZMcJx49dRB1U8ytuQGaGmEtCasPdabMrMg9LjZPi5tBB7qzmviA6DnRXaeEZEHnqb6k96oQn3HZLr79Zq",
  "key6": "3xDnLhmYf7TwajfQKcMYMc43vUv2GEufeABC9YdeQ6SgGN2nKTERgdSkLGqeEa8Ja7zwEwo5aCBFSPHhN2S1vSzZ",
  "key7": "53nK58g6N3mrRUSnqtNUF8g3RfpzVPRvpyFJXmf7ePotxnYMLgSye22J7rLxGcy9S7tvD8JuonG5p3YqeDBrRyFb",
  "key8": "5wACQhirp1QEFRjJTfvrZ9DDNKF4DcCEzSfh84ipsbq1bYrUYZAj5eXZes1gQpXCHvEfSxFhu5EEa5WDTCMaqNMh",
  "key9": "2rU1WLedNq3QqSuBAoTA6aYj6KymzLPetZLYLpKhhpg3ZSRoCyFSSWJqiRzB8wWYU3fGUyYsxWob266GuwhgWNUh",
  "key10": "4bmv1rz4s7nVpiYrPfUBVPjqNqtT3svFmtxLAVvtbBKtS9a5f3b3jHgNchNDc3mqanXvV4cdKAJFa9BprPyQKFsc",
  "key11": "2aQ6fvRyXiANtUFeTjwfvBtEP72vCiS3JrvTKnH1mAV6oLzwqcCcdkZdogT26criUnfnGAAAmxY7Ar9a3TQe6pun",
  "key12": "2wFEmQqnzx1tgKNuWb67pKQddvSXaKn8ixbu8NQspBce1moQVauCx2DWhNDhsb9S3foE1qCZYhwcSY6jZipEBDWC",
  "key13": "4Jp2STA8SWCANJUzp3gFzfqktrpoLPUdMBMoQpnQg2HSGAHe1inuSX4Stc9ABws8MiYGgYK33MtjKk8ECj1CECcE",
  "key14": "5kBKXaWAFu1i12dAfaBZD3koNyrtMRkVuyy5e5kqfofnJgtaG4NKqXe93tEGWkJhQETP7hXStTCZgKhnpnAm33PG",
  "key15": "4zSgjj4QGzxZYWvB5LxLD3ycCjhRiicELaQVVy2nYfWjQFcwQPjQEHXBhE3MfNxeYXUn3jAqXVUmKhFaxQPqHA62",
  "key16": "3aT55BWfBJMm8PVmyj1DKfkGYac3ivdMNX1s2ZYgG6kA7bskLowhWhgjsiHwDgBjYuNgxxQWtyf2d1R1BQxX3phW",
  "key17": "3HKUbQQbHDAZcsSMCrqxDmxaVPWUB1EnqxsVKf85CimUzepHsKZc6pyziX3a21LSqTMefZsK37GneqqcXv1oB1u1",
  "key18": "4U2261dAFa2c9bDXU8kN57h7BXbezamJyd6RHptMYJ29aihrY6V9x7xJKQAfeyUKJAi4nCBbHgHTZmttr2rRCv2J",
  "key19": "2n8DxdNGRsg6CyyegLhuKmY8UMFJfk3fqAQBg7ZARQkEZoe7P1WvRNfPCKPLSpKsTu6eZVEYLn2PS7T6PJeJeohQ",
  "key20": "4FFKFHezoyriHD26b57kSXun7FTwLrBN8ijtqLzt5GMCDnqF9GXbXzWCrfFAcPDxpu1JSeBEMafdeTuKE5Njv1JB",
  "key21": "2BHNQXGd4pJMTQw3okGEWqnWGoVrfdnWxiiKhmuwT3UA3QR1X5TSuxNzCKqAjDFW1GGfJUDDRGEAXhF1uHkYa73s",
  "key22": "2D4pDrvkfyVEBjwL46z5njDW9Yz55TcwGFwZcuq4Sr8CDTfsmFujHNncqaCu5hdY36C9UX75XwCqDL54V3uSTaTf",
  "key23": "2G73AuZhGntyyGhfPinQWc1hctrYb1isekXJag9UMSVAg8uTmmExa8rEefQAu7iMBvtQgdtwfY1pstGxTiMiSJ6i",
  "key24": "47nYDTHTASRN5cA6tPGvbgMX55oVfSmNRs6fkjcpXzBdKQNWtNTFdsP8reiwMY8WR1xsVrTuH8cFSxdpiaKLBopC",
  "key25": "4N3W3k4FtkY9R91hS692zhMoCLoUFQfrZzQi4f6YZxMkFMKHdNftCXjdUdg3gRT31po4HhfZ2nXkRPgGcfJj8xcx",
  "key26": "4btiNDvPUTGvsBrXtekMtX66SHNxFpkLesyFMDMHyrSSrr7P1ME4BwSrey8GtmgHVTLzGtqFrrkK5EkHDmtbJmXj",
  "key27": "3n7sCmh6mtn6FgjjaPgtuYZdCdfqEmEFMLTPaYDMn5ZP6SGjPELieWBBm3p8H6SzHyoHDhMVfT2zKkzBtnB9STqr",
  "key28": "3zjiwrn46BNPTyea82m7joDWjSmJzFPNbSxZ5UWJrzcEowYRMaqeaBARqVrhixKeLK7EDrhjZALtQaqmPTMjayA8",
  "key29": "4mLxFVhKjm23wWZKpFdj6PPHZ6KyNLHboH9a9yeiUEEKeu8E2XdE1nbZHVi8kEo5tow2Eo28U4ZvKkQR5LkXDGvz",
  "key30": "2EZKMC8qqpDN3Fr6ekSi8ZbqQ5cFFicT9rsBwARDAAExER4ma9C6G7YahNoQf7mkgKnVfN6qUSPRffbLeDnRShHw",
  "key31": "4CqEMBtGk3imAGx9nApmYMKeFtGot6nRXfRYJLR1JtD84mEjZemMd1GPh9M69A45naaaiP3j8M7t9xM2WypMfHxz",
  "key32": "3D9WLwSbRRnwE82YXV2B8XfCNi651sAyWmyQMqHRqjMaqqGtEUzHfkyJe2x2r4JuXhGCMCiAJXvwy9cLvZ2Uxp9j",
  "key33": "2G3s3ov5VZPktjqvYHAyhytkEZavHo9F6Lex2QxWNmMqURbacmZteu9GtCBD7juVAqerERGzeLXPaksgMo4bDLsB"
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
