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
    "4QRkLXzdMH4tnwj75RPnHGyMuZoB8LQeFofZvYkztoph2r7JLpKwfdFK9m5kXAQDy4aCi1uZ1QR5574mvss7AE4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QxuM5r3npYEyUwcpSV6xHAekATDuMNLixoAuutZvXEboKra3bq1XTufaf3pYotEawXqNxBs9ZBygsu9F6MdnELB",
  "key1": "5Dfgqiagqbzb7HUnyK52nqYNrywQLANcocXWa9XtCcajczHVS5CNY5tpHq3W4cjafFYLY2JWwqkmRyG7LTvuc3EG",
  "key2": "HmX471XK4e41NLGefJqQ86nmNFJ2hrDjxQMXSgxaKZEw8GBrBdBzUwnZLaY1crJXPEuBkX5yUcs22UCpoMruFvj",
  "key3": "3JuhyULUNYkGw1TDnNb2XcUtHsGpvMZGVdQhs7vvvk4MCShNjKLUvYW3M1KaEMUFxAySo2AGTdCH817CwHWEtTzg",
  "key4": "ThtqZXUjrnT9QETZeheQYGwhc24LzjPDFanEyjzJZo3FRtkXMSLVaY4SnwJBb36CFtNwpd97Tak7usVoc1AZoWg",
  "key5": "4wVmmNURPfhFdA1AoiGJBgK559WCzvsdaMF4qgmCLLPeezDzJ6hkxnTKvZHpBrBfwfi1ooU4mLqGzaVnxK4PSpZ9",
  "key6": "5HNLxL7wXM7TnfNZY8g2bRRxGyh2zfK1QzhQWRJTa1qfEz7FG2UGgkiX4A6wRHE9LxXVsJpuSKHgiiZjEAZX3ayR",
  "key7": "58wscdcBXB2cYYz7EVrxw3ro6NWGu4GWK2gHZbSHX9mjuAbMBarCfaeawJpKHeK9fNQ1DP4tfHz2V6ZFfhYNCgLp",
  "key8": "3jiTcXYeS6tpeKPhjoH1HN6nRnasJugRphZs43co8KURQdSwt4YjA4psrt9KseiSkgVAFdyWjx7ss9QmbQCFd6Rb",
  "key9": "2kzQbRfN6uNXXWoVz6MrWcVwNDjZMoQU5kW6WETguVv8RWYNFVFwg3Txz9BAYKcvDHj8ek9gB2cjr9CnAJLZmiNM",
  "key10": "XSMo7h4jxMy4sUUbAnMoig8NhTDB8oTQNQVdEj8YZfvsBrBMCVULGxaHxqeUJK36HBzEtv91Q3t9vZMmjLanFkd",
  "key11": "5iygiiZqj1VpBbVcwPwUpL2AJCN7R14cM9fSsnGcyVzJ9SKkga4NGwJPQv7RUdspHsJHpv291odmEDnYwJLJHuj8",
  "key12": "5YaiweprAUUSnUkugF1UMzdCjfs9ZioEadsGjy3cg1ZMsyqNdXtZjMjqj1UQgb78J8ysRboQ2efRQRmpBQqvBaMT",
  "key13": "5wUwJGB3J274NPkBrsRpxCReH6DWa7y4C9c83MAGGmBFp3TdfoVXcR4mJJfnV98gvSTcBBEAeESe6NEzqaByoin5",
  "key14": "3GmEhGcTyKUuwopoxRPLPKAV6dHhgFEXourg5BoFY624NdTgLZTffQDUpupcMveRxK99z4UcAwzWNdiKvR1ABVoj",
  "key15": "4ezTpT3AZeeXmd1M7UEriDbVZdX82jq9dJYqR6YCcxTfgbucRRMvzyWhoQbzrwbf1Uwu1sXQuVMZYrkRdSQTL2m3",
  "key16": "64uZuZUUL7NyJNULvCBJgcxQmyJDA9PKt85MYM9VgejX3HpFtxL1BhKeo6nqh5vQbDZHKuLDdadFJ52D6GvLrXm6",
  "key17": "343xsoKmQKvvHFdYf1wyUZEe9znRX4LtdWjAD54btvEaJZ7MUtvrRwVvZ8QaEJiLRjac5H7QJSDFCX4mDejhrgr4",
  "key18": "3D4gGFF9DEDuqmxeLt8PyAWpP2Z4QH2Du4L5Nz884oHbVLPPr1r7edrghSDv7UyDyLPGiU96U4eUXdLuwKHQMvuB",
  "key19": "LrKr46AHgvowKDjjMGZ3oHvbR7TuD7kmCoHkvMSokcvgE8hPCLHs8fMaJg5fFpCv39AZsSE9YsJ3fLDqfYYFwWy",
  "key20": "2LPuMKzvecZjXa8XNXcDzhgmSYSCEWBAkiHCPMGDobFiQhRC9V2vjqsCyB2EqLs9PgFi53Nsci6o3L2vvZJMxxuU",
  "key21": "23fKdab4N4SojXh3TCjcaBeXdLr3851UdRKKJa5htFFTH2t4dHTMyYKXRX6mwNRHUrVSAsEBMYyonPVJWeFQSoTz",
  "key22": "5Xpfv6knqpq2dAFuqNibmZ1C55UiyLHxRrgUDpbxkEDwWdVUpWsSjeCNBux2snWpTeouVtd9xFDd4q3F8aQH16BX",
  "key23": "3jw8AteuM4q6tCY194MHzn4JfDBqsqzPVSxbWYk9JYDwPinUW7PPZDsFbSdtWchyvCL7SM6N2JHok1mb3higEzrG",
  "key24": "5KEtoBFAPTED5YRAHPGpiV2n6KcgHNdBYo23wLZBYdmhUxcbTnzct5n67iUxk5oXcpm9HBAeABKFqpT5adqMgBtj",
  "key25": "2JcgR4YLdV3ztH5vthfGX3jrsRNDRkRT9NNkDvw6T64hy6kzBF5p63k3nRfg9DRMqAEfdKgTn4ZXNBTfxKQZJGWk",
  "key26": "4tekq6Xbs8TWnX4iNJdqmWe2qpHxFHveBf6ykubeX1f4aGZHYoh5AtjEMbpQhF9D3UrQnDTUMzTquWLwHG3UADkP",
  "key27": "217qhGqS2qtBJ3FQTzWQxvKkagSqvz5oVGQoLVF2GyUAae4AngiqM35MPG3u8PBkyJRae3ZK8rFL1H2r8hqv4wwN",
  "key28": "4iLTSQ85imrWwWPhTxM1KshFrk7f84KjNqqvUQ6XtGoXvSyFEDpvp4MHj5EiBE4495ottZQcLyi13BnrJE6gkMtq",
  "key29": "ctyWaFu5K74xmiDW1ydgN1X1MznhEQLikcd8veX7CKCptPR6xotmfDd49AQKmZ69x1Z3MV9JAFzwZWmnvicRmyW"
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
