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
    "5vvZoJpmPvGQuf5V8iXYqhPHBC7Tpbmkvk2ZHFX4iDDcFgEwBsTXAD8g5opwrB6AC5Rs7NwJpud5sU76NnwwFsNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLuwtFg22uMQPJ8y79XyJ23pDNPjjvtaiZ2rJM9sLHfW1UV5EXv63gfye51SdFx2jQXPfRyg68CuP92U1fTo7G3",
  "key1": "3Vma7tBbPDjUbNmU5kQ3AsD5R7UCf5fDkVo8rMgE2WRJQtLDpxuK1wksWtiZx9y8wDiJCreyLepfEtUhQNYAJ7ek",
  "key2": "31A3t2rwHvoCn38QySgbiouKzMSUEnJHQzRBXqMgCqF5gpfNhvdJfGZLByZU9Au6Z5rfH1FQCawa6MU56Wauq3B",
  "key3": "38W6AuuFrnY8fEaKKiQ5eTzvv2Nn2eczFQiUytCgm6gLSTSnDviAZrSYJMekjPNwDJYpfWd6bXwxakNoJoyK8j1b",
  "key4": "5ZWRA27wpHp61wTgyrcfQCuNNAdvR32ut1UBvZYDYfVP1c7tLEMJTuue2ieyvyoH893qjxZcDLq6viBN99W1zeHH",
  "key5": "3Lv1RX3bLJJLqLzAsARdVuDUiwbm6HGGUqy4qy2XfVTnbaGdbecUCv3jPqiKSBNtefvNZ1tQy941zcVfhRvdG5LZ",
  "key6": "4VBETYtpLeKiVaD9u6kz4SWVLqkvWpH8SRHfH9bqaTMmU8gkMmCQEy2594LtcQu8vZ4JuT7RqPXwYhd3sc5VNw43",
  "key7": "46KEMbUBBrQL5AypERwYSdR1sbgzJetj4TdYtkTe7xT571w7mg6XvTPVRnQXxGgovcqpDeZbnCXnChgQXKmsJyzZ",
  "key8": "4km4xUR4pdSqFKniVLdPUnCjCpsWCjMjrjBYP4CwekKRsiSpg3cUBce8WTet8g2uasb4TpfQ9PYf3c3XfQw5h52v",
  "key9": "32yyHvSx7V8dcrVTfxUQVPQzRVxFHDZgUDaTCMv8ZCNYvMxKfu6HnW6TMLePUBWm9iVuzHhfK18fWeiZbr6fzhRZ",
  "key10": "2CWGxLDVMZfZVAocXHXi6M5Vax9W7MbaRGZsCnHPhqpAmtXxpW9NSXQnbWyhDqYvBGBAdKp2cfwGDeaoCDoJwCzf",
  "key11": "2Mayt95gL7eSezECFuTtY5eA9XtkYxaViD97f8Qn1iK3zXfh5yCGQZqtabkh9xDRrLSnWLjzNHzKM6UKqgnaFWEe",
  "key12": "3aA9nCJmY4pvenTj7WMW6yrQDg2ZX1vTZ7AVtTrHafM7VxWmpsiZLxxDpSxcUT7WR7fPt6aiqNwUkFt5FozD7Gmu",
  "key13": "4TkKuW4qSXk6Lb6x6m51TMVQnR4yoQbQ4oUQoSLt4UYT98w9P9CdYudK2cuc41FqDtL6bUUFs5DL4UhwcpvTxxMR",
  "key14": "tLxNfQXPeScmMyorVjhuCk37F2y1EhtCBBAXuHc7u4kTaMxv3mFhYvp3XVStthVRK4ZUUxXnzrSFJd9UhABfcHL",
  "key15": "2YtDHMJX6zHW8mhQmowwjDo9vmGN8wgXDZJezepFbvjAQvSDCMwwSCfzX5giyo3mbuzWQmauK5FY6XJj1JtBfb7T",
  "key16": "4NMv29UMNEVnDkWsBWp4NEuPGCzb3wEQqFkqioMZLRDjjLUQVUTtNxyy2cHRydhexicS9gxasBtLqJHpLtqNLVh4",
  "key17": "5UHwS92vAS5FwYt8KpWnbExiuz5twnFbv9v6NojGwKD2kHXT3hyecsisqrQJSbpgwL1Zt5uP99rAG5JYu6nxdzLd",
  "key18": "3tiqPJDHzzwLpgFKpSbXUduvpqze7GqJDAPCGNgSnQgGLSrgQgDKTtsSe4XraucXJgGzjgssDPGZc4LigTzftod4",
  "key19": "3h4PPP7iP1VGxGSoJfPxRxPYdt6pXqbZS6Z6cWF3RiAbEv53w7X56kqhKpNyNxYLJ6sbYxsSrSgn2zhN1soSxEPn",
  "key20": "4JsTC1qp6XkLmt6ugERk2A6mWx2HzFrqRmRGTfKpT96T7UCv9UYShzZc6gcTxwMUfxL5BPLRiAxwELmUcxDU6e8g",
  "key21": "ry1Mgzj3267jDNCNEHGrLQDAAz7hnufTnn4B7a2syvGRRBYB3xAfos1GSXS3AvNEDYfkoEh841xy7JFYxSydMGP",
  "key22": "4PpkmkTkeU6P1Fgc5J5rwLyMD4sVzXowKbDCuXSBjdrbHnazxozxFwCQ992nUGmfHRBx692eLHs763ZP9VyVEBdd",
  "key23": "2sTVvUUQw7LZhKYprvywASDfPFmY4cCPDWxmyEpJ8LsqrCXfQprDPSBHigNSK2SaE8RdmYiVduFhCVVVAK98Cdcb",
  "key24": "59bSpuevxSmyyv6p6i9FJjknPZT1uxdy53JaD6NQZXaQ1wnxyXmv9oYok6BBtPE13KS5Anv8v8ftxDdyjSR8eiGa",
  "key25": "uzk9DWY3Bo5yyD8t7qnyQYdDw6SDkRLf7CsCLj7MMnwW5VAnqTBSFokQkFZjVRxvKRLQ5sNmAx6Eyj1GcPtrsfb",
  "key26": "3VzLHvMXmmDJzuA1Z8uKJVBrioo8AcoKRzbLLRNtY8R2w7uBq1hAVCp4Zd3bx4aa7UAZhagL39hC7MNsiqXHeq5R",
  "key27": "gxcewYSRY85cjtyHKcysTX5ZigxCLjN7GKy2RjeCpibT36aUbVuLnKuyXSMkibvefPHi4AyXswmCDzjNjCzMNB8",
  "key28": "63b5VWg715xPUWDbPWWcE33WizkxYsBJbrqTycKXo2zvdkcoknhP7tzoeUUzTGE94Wa7dQmdbunXM9FWM6KmoYwJ",
  "key29": "4Y1C25QKfd6rGYxoi8UbxRspxW51sM2pRdUpePEf1n3q2JcYEZmaCGw8zjrMWxzfb7hAStoYe44Kz9nwnJb14ABT",
  "key30": "42QwramP7ECXWLcCtuaBxP4bVGMp9krPAoYUDWk67ywwU9F2jhBs2XjTNUiGK3mJJHHDtPxU2hx1UhbYgKhZf1iR",
  "key31": "24D5x49CF5rJ8FGWvbNWXuyemqLccZL2Ao2rC54nQhWmYCyfXtcKiE9bVGGpxoHxy1RSu3xk1yiufg27hE2GwWAT"
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
