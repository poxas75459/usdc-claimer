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
    "exyHkUxX5B2E8xUbxCTLovmtW3mj3499WAdUDDEXiwXTsuKvH26a5FWZqgo92zjqzu85kiNEueRT2n6cqKt9hyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uWjxYNN28VSSDHhZ56JerWMjW9mbdQmyPU72TAKBAEWkEMVJ2bKn9ZTLYTzj4c7dDPCrYeWdpNoCCT7deMWwxAt",
  "key1": "4oiLRxsaoE3ztdUBUS369MuhZDEu4GiYgWq5tuUp8WpVEE3K9a1PrmAW5zEduNkte7DpZh2MzamNNYQDXbRmUoFq",
  "key2": "2vvPuWPxSv67FkWCYuGhJMjNBvvPbjvQgNch5Muube3sxEwXq4tLMKh3ZeAn1dYkuFP3ng8ZcQqGTX18qBcKanVb",
  "key3": "3ZRgcpCywHyfjPxLByZHLjecYj6xNCYTSgfp8cnD2dvawym5JLkkXVa8PuXqLTFfLUKf1cnsNPooNfmQTJ8KTzDw",
  "key4": "5kVLBvnt4LzRpdGg3wGwyYSi6XBhBerkpdGDH1tccRD4cYHnuAet5e7Gpb1mk8oQDfjecsmvSXtUCGQj5CP6rGrQ",
  "key5": "SxNBcDrB3kYWVQwY6Dy77Vs1ab4tDabR55L76uMqioqKKxWvgRsnC1qdtCSGD36se1zE5zDPyFQfAHGYwpWGdFT",
  "key6": "2p7e42mhH74veXCtMCYvCJjB7yHxRkFys5TvHakTgZqgUqZqKbrbfcnFcCW4MgNDY9dWjoxYariXWZcDBDsAi2tt",
  "key7": "3dXSGPjD3zFS9BfhKGQqa1cNxofFXzXWLvPnSanLF8X2FrLN9tG1QKKM2jyJEqgiY8j9qB2N5yDWw8d9hw3oskvw",
  "key8": "58GzhcPfgiCHcix2kG4rbNbfoQmy1bpZE19RBbweNZmjMABJeJXVLV5aH6hwmAxYrTM88M8KPrs9hYLqrUmP2Ck4",
  "key9": "2wHji6ffMBo9A4Kir6qbL8aGfTD3tfGDSMBd8ApvDSgfP9bZMy6wK3h1HDwbSzxUvXjBpAgLykQB9VhbSsQ192N8",
  "key10": "2odersZQXvCYMYH2G4D3KuaZk3M2pz6ktsT7CzJxro7TPE5ZAYRDxqN7eSgwKcCaobm1cbsDChAoMZTR2zacKxYL",
  "key11": "Nr33WXQHJ5nr4tWWSfRgL7NYAb1z1NN95SPhtqhBQ5canrUoKZgFJzCsxeNj4EJJH2j6oZcUrC174HGAcfgWKkt",
  "key12": "4D9gsNWtQpFDdafxvSQ9gcNHrUjHeuDPu2gn83FVd2jC7dZtQbrTYSCR1ndq5EN5zejh58QqYDgK4Rjimbj64N97",
  "key13": "3q9jxgKHXUJz26uveeDdzcKwjcVMweAtz9a97ZaV7aUuaafCjCNmrmCqYB6qHyGmixU5odY3VRsq43xQbsuiMoKW",
  "key14": "2piQMrtczKx6qhsxyTMRJPL9fnz1pRwhuvKRFx6ipoBPS1ubPuJ26XGRCXMgmUJwkyu9xXz972Do8WqMWnbL4g5A",
  "key15": "4V7gX5gM2vRivyMrWie6NKdd6UQkfDyBmiU3PTpmJVWWaMfGR9JRbqhjttp1qfDdLpUk9o5U67m6yxkzPYc5RybH",
  "key16": "5yvVMLx3ANUgSxttqgwmGhxvg6FsZghLceRnBnwXH9KiSWVqRmCrHr9ePjz2vqXFMzArv2XLn5MnHQebubFFF5hE",
  "key17": "5sUvv9YHGcqzmbuqiLcEb8rQCHuMHTWwCMER6E32PA5m2YSaKfFsnra9jom3kEGGUgc7LveWgpmxmFgDhgqhob2K",
  "key18": "2C8xVStst5ZAZ9Q7V2wZUpBcFg4BpefEJRq7raPFuKuGyGuAdpFw7GrnVEaWdbwHLHgxTr8XAVRb8XUsEKF2BzYB",
  "key19": "2kWn7bcxq2e7GnWpwwxHATx94mnBUEDTGx69hvRYAo6iXVkVDzvx7QRku7XqFDQvygMdgkVFPqrTvK4XhkNtEz49",
  "key20": "4J1VMjeJGoMKJcpw4Esk4k8qQDoMrPgXBebQu1bYiLixTW1zkgjpEZSjgPTmor9NXeLWtNnnyrFAzxWsySK23jM1",
  "key21": "2WV6uLsN3fFc1gUERezSTdreaYdc6kWaaMF7kifbqTSFZ2qrmRVYob13o2aYCShkcCRq3kDohM2ncXMTbKBBBTC4",
  "key22": "h3zWjQvWkKMb9gcinbW7wWXV9a2MVBK7MyHxt7DeKTMSrZtezBYuvYvmchFUFJ7221XqU5Sk6Ruu93AurxbRLjf",
  "key23": "93gvNgDBUxXsHehA5TnVrGL3zvStvKZF9xeNrwVdV1eGx6KtnMY3mvNyYLZkvE7f1EeS2F4nQBxMDCGCh2SdWk1",
  "key24": "SBja2CjBHCVQ4WHPpjNhZ7XdXdu6qQKvL8RYWCCFaYX5kN7cXQP5TVL7hRs4RPunPa6WM4QTnpTb7qnH88J1Psb",
  "key25": "oKKpone8mZskyoaAktTMQ2AytfxNPPgNUD9T9ioGrpPHQ9SvDJS2eHdVPXNYsb8DX86z3hcieVeu7JMsAp9Qy56",
  "key26": "5oGGhY49wKmu26Bcw8BBfcMCaAhcDMP2sRPFW6DVWukuPL8S2YB8feZYXZVpTM5MdAHSLLaJQ5a5rms2TMggPNTf",
  "key27": "2PAX6Fzdhm6NVcA4B2KGCFEH1bsgdhvjoSz8utp8tGYcjB2TxxiAizAaRyDUzXom8ytpM4Bzjzqsd5MqzrSQaZMK",
  "key28": "3bG19rugGgqsCiWBGq799F6sTAGnpwbt9jx7gNDj49s6sCdnv6rNGjJGbE4w6fEaMsy1si3XMTo73X2hVio9FqXu",
  "key29": "aWDsvATehipAPy1jF8j5mcXmcEWhPSdktX1SPi1NouuWgbxQZ9TD11kJRJ3os9gQwj2MR2Vuq1koGXtstoqXT8K",
  "key30": "5aoCgcNCmjzL8KS8YX9Ypxb3XFz8FmxJ9zKvp6jvdnLPK93xS5fyYJ4mqFVuHvueuioi7VJBvBy8VWqBPNj4UvKq"
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
