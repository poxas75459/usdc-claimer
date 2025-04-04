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
    "E9gRQmuAd8ns56GfdMjzpdoXMrWR3Kpoo7UCJAnc6WPzg9feseotQbJC2LTF9qFKGLkmhE2hnfRMQpB1Kd491T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474eZmiQQjhZqpasCjKxw1SxxBuf2959hQv8n7k66kPgkeqqEADyVePF8ZnvbN8t9VZXtZnGK4T66hzhN8hNetaR",
  "key1": "4MV273u4kdYbeNDcZn9R5Y97gPWCKUQgBKymyjbiX15gS6jCz5iFoWZnEnhJbmZgSbAwkv7bEi2YvRszHtN3cKqL",
  "key2": "4rJ5VUf48uX9xbhiidc6koRw75QaPgCWfpAkwh6L739ZzbMWbVFYVFrJevNaaz2zai7MWazmkN9YwKFTgnhusPmw",
  "key3": "2dNSfFt87wnL7cLCkDsFW8imSr5gt1JS4chScVQCAPnxSkKqqR4QmSWQaBRvkKAugatUT2tUYEqd6nfAvCYwrvkX",
  "key4": "jwug4Ek5NdMbRNbifnw6tCA4sDdNHtDeizKvNKbcCwwXiJavR1xN8zESgJN7X6YJcZtbD6DwqaEPmyc745Y1mKR",
  "key5": "3HxD1JyLj77QkepMHLfe8gpwHGdSFeMx8SKL9Zs1NStjKwtskaM5pNh1yexJHEuxxnmiefv9uvHji2gjGfDwdY6K",
  "key6": "CtCnB1xVPUg7PMkhZcnJGb36BqGANZXWSDAZe93v8tBj7UU1uZpc5cCJugs9PASH7qGtWqKJW9Xyha1Crwi8uD2",
  "key7": "2QNbXkjbjUkAtKUiaHuwLiKivWYN47JUnBxNPxcoKWCbPsAiFz7Ck7g2J8Pwmn34rU5LGMrqWkBYSdd8ravCfzyn",
  "key8": "4mp8noLn9Zk1bxiGELvjUnwD5VK1pSVgYwFejcta9TThadfbTfrcBgq7tjtkbvLaxUKhDjX67PnuZwudsrps6zCr",
  "key9": "4kum65xSCMwHfgqBxMXxYPxBwXsezVRVoaASBNuavHQP6x5CwyJ2EryE2U8Ft7J38RJuEPiMzqb92xL3HxzHabAM",
  "key10": "JgGRKK2Ywvdm3KZzMKxMA79zwzCQPqYAB5JgJRiQB3GLky6xyfn26LMcsJUBBMABfYb8Zn7df9RErBKwa9Gf45y",
  "key11": "4sPXWp1RrgcerD7oq5kCj7rKtceZwNG5YYUPq14sgm2pXBps8KdouXohsJBC8R47yLm7ir3wnju1mHcMvAx7Etqt",
  "key12": "3vZhWUgab6vnaFWeJDtwSPX15P1Bb13FcVCkNUPuhQFdseTN2Bm5MTv9Rrxijfrf6ygzuPVxjDDmEYZt1hUaLxxo",
  "key13": "2j7s2GpNmEGZSDu9srXuikXbawx3bz4mVXAyMA74qWtkVzpQc3BUq82ss4Dy55R6qCQAscU8eRx2bPiF7JyrNCvz",
  "key14": "2k8mZJaNzMigZYnvPfZHN19Cit22GLDLJZbZyVpKCc4UYCsqefXbABmmjP36RespJmK8Ab9qMWWAC3wC4a2we8nb",
  "key15": "3bKu21XPLko4wXERZcaps4td3h3ZwSgjoQpBPh4ac6px3bCLNfh6VcK8KskozPeLuCCpsD7y1SNmfEVwk33Y1HAi",
  "key16": "5vwZGo52DS3MaRkZ4NYVjvy75gsuQPeYN6BqhgDtkeKt8qGGfRRnTzp5warF7zrVreSGu2zm6vTH4rH5Buso4NgQ",
  "key17": "39dzCV96bWMV4h657MtTZXHMcBkBfCzyJGskQY49ZRJR9xZc2tggFFQMABLSyBPKPrVCJE66dSiwBGx7y49i3ngq",
  "key18": "4q97MW8R19Tbq6y6Tuhqj5djQkwZgdw27VUatwmnzHiKxFn6H3PXFhr1xNrQK3sao3EFo7YeJeg3mC5ZpAbGCWof",
  "key19": "5cgJPtLahbhqd7wazPMXJnLRAvN3Egw3VZvvaAQJGbWhREf5x247Fb18TMB3uNRX5Tq4MiZWP76Jw7fNVjvUbtx5",
  "key20": "NYcFeUAeDciHa11GaNfPP1Xv9CGGX1tWi1RCirKeVjpDcABPdGaRMvbgttEgkjL6zCNzvfnxopKcJxzFFy1dUDo",
  "key21": "AyZKyu2135SeqLbgrRuEMpQa8FHEuUs2oCbeT1E6atvhYRxaTGydrDT9Lx5uw1MF6NCNuVEbcjvh3kNJiGVBWnC",
  "key22": "2ytWfST5Qh6T3FQJGjV7H75CPdoB6Vjj7sfuK6jryq99bKB1mgUM8KujyyWUziVFRWhovGFEbTMUP9vTEcvybMSc",
  "key23": "51dmSPHd2pzmnRnYJs6U3Ps8c2A9HuQC5qDGNZ6TVoBHPApB5KJS1CuSrg5wtDrsSp8qN2KZXX3eM5mjnBUmQPLK",
  "key24": "5Z2gXz4JFUt6gazKbhNLNYpuZBhE2RWqxdxRqg1ownrAztsLZUY1RWZKfFnCusHRfzySHoaJ3qr8XMK4454igHye",
  "key25": "67ALc4Pjf74zequfD5rLL3JSLhcQik43GWVkPqZsTZkzy4Ca3otyVZU42FYtpoMkubokX6BeUhifQr2cxeC1yEuT",
  "key26": "XPvbfomoD2fo3Q4Z46cERQysQYSaX36ebAo3DxnEV1zyYaJFPnB6JYoc1LA9ZYGaGQKWqBMQCMTvSiWcYSqStB3"
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
