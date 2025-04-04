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
    "3YCL84meYwNULcEuxUHGCSkGtFciUmseYnf8aMg1YekDZmEFavcyKCZLXWngeE95Nzdtb9G6SHXkvmyqGwuqZyGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47VT1DdioApSEs8QBMNpi1KVa3QJcw5s33maG5ggqR1wiTf83GFqYMkKH3JrTSFNiv4Hzu7ZDF59iNmdzrTdFAWj",
  "key1": "26MVV1Xt2xbD8mF1dkmonUdGnewHyLynKrS2s8gDBkjYSbLLXvM8KPxJkhqoTDS5fYF1SeFLxNakTgyW2cWBpuSg",
  "key2": "ZFxCF1F4uWmVjQ4BUUkZsEfmU95CDZ7sAdb3BKWWNNLYvrEgKGAJhXCRCfu75zQrVos8qGApTxcX9MzEF5B3Gbh",
  "key3": "3z7DrzAzVmekRvyigW5eDHQzcuEWhTMPABZqPBeZTgG86uVyWSB6wgU3NQrBdveKcNN7HP4CLZjXmpSgcYaDSMHP",
  "key4": "44MJ2U2snhx5Yqm522Nd5vuCN149sG2gouLgH7wL8u4f7YZ1MUbxnMLgi2YvwmMNLxTyVj2zHJqboB78M8nX8mts",
  "key5": "PvibMuhY6Sj1y1AhwXCLz2QrfqpWdEjbZ4jvsD1bX3iXMx6BHnZdiHtyLpHj9vf6QGZSCnm8EeSpnRZ3VdQxbko",
  "key6": "2yJRxcXE9Ziwo8VbSVfeTgmvhoWaNq5Tg98HdnPVpn3p7Lqd3VPUQG6rtQnHSNuzAJzTnoUtuoJThcXNsiqibopw",
  "key7": "4N16qGRuxhTgG7dVDStZiYFMg4t6G12GdCqzWjNKjXAD23CVZmA3FP2TK7edHDZ8VCc9Urs8t9D79LXtR8ADE78J",
  "key8": "4C5woberVqZwpzc7Jfju6wvK3foCxsh5XpiLyb4LGJKfKwtb8rg1T5rraozXDrcUCxSpSmTyydcuZbXYrWuUADWE",
  "key9": "5S2ai3NogSdGRnifZALFa67ouB2rAgcv5gYfyQCViWYc6c9FFdGs7KiPPh78i4dyBEQtkNGRmz3rHoLd2yzYTZ97",
  "key10": "5TigccwyJU27k4n6s4sp8vNyR8xjumjuX6iTr67nSeEtvDHQxp8WCoQDGXAeyb9prjLsv1mDc8bFoposmnaADFok",
  "key11": "5xfgpr8ZfDso2NRYfhf5j88A12rPFSkkXDDWK27dNHZ8bEZSiagABtcxwYbT9da4AgvmXsN2mxH2yxUAmw4Zo9CP",
  "key12": "zG6ujNktf2YkCQV9mYLWY7nMHZHUn5bbf4qiYJK72Juvx3xZHwYsrF2Frcm4t97PG1jeStT2CifbvRevwRbwuYf",
  "key13": "5s5KG7SzgGBDToM5iFgj8Vt1US6bvxMc3fHgFhCsSFpmTpoUJ86vMVZUhkjDf6KjsgvXsWi7Ac3knubt2q9Sz2gn",
  "key14": "3aUCGdc5cSrfUMUBVSut5n6NAPPsS61Faov1kiXa5n5ccYEPbwRD7aUcJWVHvaDkLYx6ymzTJVXjo92q5xCkmzXb",
  "key15": "4aEP5uB5fKEPhxLWCSoKFavXQbrSCMqwpLv6qwhu8nrPRmiJM33kaME3MjaRrKR7S546AztcwBfn1noxYipDgbty",
  "key16": "4e14insry9bYfyxxnaAhPioSdyvRq4voNhoyCRSqcsfAqx5qv6gkDBVywzxeqtwbuyFun9VvMv9PUHREvVFmqw8L",
  "key17": "4YcXg4gz6YYeJDSs2r1CCR3tgG75W7Tjh1icvwevueZmrSwn9b4wNXKFa4ubfMuJV3GMTpLLJQw9GLQ2NWh7J2vN",
  "key18": "3defPTiWGDu3459gwKs6vYUCY1N4AL2Cm9E5DbA37HTa6k1kf8idiNgCADwXTUydJnGjbkdANLw6JYDRYfH5EKFS",
  "key19": "63mtq5nXf5y8ez5w9fnCxLQfE1Jm35S4VsprqT1SB5pHJTHt3MAqkK3CauAXfzYx8SNrSQqWpfdN3z1Mds3RhUHU",
  "key20": "5yrj6yM77iYNpvUBE5gDLhEBEiHu2fLHiHjLPMLWhRz4AwVBzRvGGav6BnENshAHWY1mttVW2gRGuEsje1A11Tvv",
  "key21": "2QWoK63uMxfEzvUyWvLJqzMa3Tn3oBDmKpADET1CYfrpm79PqY5tKNNEBK22mCsc5CuvKDJSKNyhKW9GTryJJ7QN",
  "key22": "4vjZgyecMZLu7CVPuXLLZSv9Cra8TKvDYAGK3JhW5CxHKx7ff3AUrBgQyVGYHxhzxWboTvvLkY5z3UTnBWsnVh9",
  "key23": "3u2ueacTWJsddYyiVP4xJrp6dwvMgcPCzY8MEQMGB9ArCiWn3KLdGry58hAPLxRN9pYtezUE1JX5vyFrDXXURsAC",
  "key24": "56Cc2Fr5dJQMXRbgwkinmBUFzDZXZrrnhiwdQtgvjKB6kSQggYNXcFLJ9GJKmraYZN66NfK6w3gfgi3fvcoy7QQE"
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
