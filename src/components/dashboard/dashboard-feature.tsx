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
    "5UY2kfpECHS4rfRwYNfYs9Yxhmg16zFswaykq99rNcTiGqkKhNtg4SXK8KEM19AhwzzsFhbtdQ5WQEJdT2XcBTj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52HxsqLfWvXKQS9Kxm3GfFMVHrzRxgB2Cz6WoEQkYWMRKY2wtHTJBG3bxkwND9JsssfYRcGXBQDRjiJ7MA4jr8ep",
  "key1": "3dpYvcW68TEKsEFt57Lhfr3Rdth41RPBLdyscb6a9Cpi3tuhiYP3rDatnauohzYukEpk1LGhrYNoTATUP36FgMnQ",
  "key2": "3uhjbtHz27hd7QRS2UkNmDNpLsvdGA8gAuGefn5Jjfh6QrdjpPh32aJe91j5hQVcVwKgYtfS1Zd98HMV4d4iW1WM",
  "key3": "49yWiGTXTBFdcAZVBdUNrhxpZm4EPCv9gWxKsAiCMnioQE96TxYFGUHSnmtayPFAJPuQUowKWSwbgs5rZL1xgGWX",
  "key4": "5drrBRCgcVgNmwc8sZvEZXQYXfH9qAMXJsbCaYM6NMTc4TtoZyMWQiX9UBFphPDMsSfbLtSoJb4wHoY5qZ36umd9",
  "key5": "5b526n7sgt645fx5WKYBXWjJcePpxYkDMna8EpkCFJbxKtQ66SyGs8UCNhYdooxsJN6jx3kCNwVQnjTM8jcPs7jp",
  "key6": "4zVb6X7c3TAwZksxpeYu17bFHbaszTt78myk3SJjuWi3JBhhaUXuS3qbXmQt7Vakh1PnNxhjUGVCpHPY1GLXqrot",
  "key7": "3B5q9qbK6fBztQDAvXaXhHDgJyTML1PoZddUfaXBC8GYkcXgTHgBB5t9CzyJMH4REfk4WFjw82Xvxxnofx1UmLwP",
  "key8": "3N5jsPsPBtauxrkcq74XX7VEZErQGoy6gE4piQmq4voDPzVKZaxHXxpFXCganu39EUcrRB2tG2V963R9uAFEGU5t",
  "key9": "eg1xpHWSuPDDNyYYGhPQZFcbqH8Wbj3vD1PLLrrCWUm1kHqFPAkMXtJs5A2j1U1fLtH9Fv9UP8e7fX41SBRqSEW",
  "key10": "43u7H7FaWjZqJHkHwtho47fxZ6CmbJpyiR2L1ah3j7PTRgVNSwkmERRuVkUNvL3Y8sfkJDyLH2Knr18ahWUFuqUM",
  "key11": "8mfwnpvbopQCv7oPNT6v6WMaBhuZwXqymNrge8WwuknZ7ZX9hbnWqE8hEfboU4EakfoqpjQ5iMLJAddnPCKK2bw",
  "key12": "HpW7hY4RtJ1NojjRJnbWmaRjtFxC8x64xCTo1KgdiRTwaW3vu7djE3TmFo7t5NT6GQtgTgVuXkWVbtnex2TGzow",
  "key13": "5q6CueR2QxLVsWfY2PbbvBD34DYcxAb4oaGXN51JqBqP3HJ2bzCT3s7zbZppGDLKxwna7SdiHXGhvy6JYWJCQoZf",
  "key14": "Dbjp1ABoPuxVHwy8dXM8hEd7mXguCoBTdz8L65Q7LrqE7Ni6ydvKowJb9yREEJ76rVSX4585ASYtxJWyN9txyMs",
  "key15": "2AR8muDMd69b2xHRGsBDEBC2a6NGi5JKYm5gjdWQBJmrsRxZzG4Gphc92T9yTJTRqjYuoZJrvkxj8FxExz2xsvzH",
  "key16": "4frk241Cr7YGDYzb9bJyMKYGJJuQrpgdz4uqqC6Eyk3Jrvs25CUn49jjRBjc1ywpJ9tn7SZcoAbnbYvWJPFEVUQX",
  "key17": "3YtjbP9tr3U99Dn5at6SwaK2SBJFecgYmAVbCZq5VYP2rBBvLSsa3RjdiVAYdmnfApZvqr4qxhRhE5b6HWX13B3x",
  "key18": "4ifjXnu2dn13AAyXquiytEbfCTLRMcd8iMkqZN78PrKaCyXuvYvJT4PPYTUZA6BXoHeYjucJ7Q1f6LJePLbEfrV5",
  "key19": "hQzHwXrdQbzipYUTo3oYDowi5Wkn2HTNcXbwHnNFA5WTxkasvkHgC42iSe28yX6XVKc8DGxnzuRrxrBBegb9NnR",
  "key20": "4zhWDarxtPiJFsT9wcgq29HMimApNLV5Hpkn1asYUMcJwzq6nfs7VBL2jLTSM4rKtPpwyhgTkXmw35XHc2Dq76wi",
  "key21": "26sXsfZ7rmwdznVaZYp5uXaehSPVjAqCySy9FMtqnoNwAnSwCybYFbysfTqGJw758UJu1VAc4sLA5V6c9HA59zYq",
  "key22": "GFMTbdXba4trZgatA577wGGYwtFCUeMeLNutZWen1CXCqsFiqNkH4sWQok8Ao39uQgTnos3EdvWqvqZmgjob1Qj",
  "key23": "3UKcyJYxp9hBgM8tc5ggW9fnh1cRUwcaC3ZwoGioMgH4ZNCjQSzfswSa81yVvTMxtPr7ehbPiWQvghR6GQvmE8aL",
  "key24": "4ZX3XoEf43gPEREDefBh1bRgtVVPnCcAU47mBtDh5Z78F5zbbK7xr1F2DAgBQ5gPHKJ461y6pP1nzSefa6Hq11oK"
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
