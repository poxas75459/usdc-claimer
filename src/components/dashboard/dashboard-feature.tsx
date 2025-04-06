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
    "57z13VpzkLXgM113FcReJZML1MLXYS58uf1kCeKaYGcPzv7DCFYYV1gSqsPBtcdzmMX2pzP2GjQFyFJg7DACBQti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYUWa2LzKVrd5L2Yvd99PFYsUmuyzuE74hVBbEEqgRZfpPJf9jV6P2LfdQPqqGdaBy4Hd4NRAVbBE6XmLPq1TYc",
  "key1": "54zw69c7YigT9UPMmjofXnwABERbRB6i5rnUiaWzGedfppsbAswp3BJTs9gAg325xdDxLUQfCXZhyNNydzEBc892",
  "key2": "TvCJMBw61Sb3S8FX1iTmqJomTuqWaRp6jazDbuxfQwWruvLAxYia7WKzr1hRuJnWCcEHeJK1fkTmeaEMpULPTxd",
  "key3": "2DyeVHNaKecPA4qxkjVHDbj8GjRvGwyjb8ZuW4HrVG7JJii51edcRPfCYsFHome5kKobBFZxC4Ra4CFh8JT3HEPK",
  "key4": "5Q1fwbUQPjd7fdAQtpWJ2epbwJqxZy8z8cnfyzAfipHp5BdYDHhEaXKdFAc44kZb5bi2H2npVmzzwjWcL7YvdFNp",
  "key5": "hp3eT8u9Qx5MAdhW94o13hPE7rwxo4Bzui74ibZYYfjwRDUK1kiqgdLVrMk9FouC8XkovPLon6aqCk7EwpKS94d",
  "key6": "xHWCetZiANtHjDQ249B5eW4C17vXDKYL8W5SFarSaA5CVHkwr7NobY6W1b3CKnkHpWX8zaapGAJtXzik4np9Nr5",
  "key7": "2oURofvoZiDHk6sdDD7gbftoSZtsQ4S97qTBQaSD9KHSmjiFVFNSFmzhNgxjnAoaDfVAycGJJVRkK3stpudAkL46",
  "key8": "3Qn2R8hZSpDvESAkGwLNjV1AE112GUBNXzNnb7M1nTRvika3rHi8TC9NHcxeW5DfMmWJWz5VnkgtYyCdbZ1UNM2D",
  "key9": "5ry1ygDm9TSBQnK3vRNJHb1x7NjyvfZEgnBk1fwRZv59QbKseC6BajLZxGhBowNgfLDUgft4UjiRDDm8fqkdoWsU",
  "key10": "Ft7oKeyFBS1LZxDoFoEcB6vAH2WbNVEikMXnE6s7Z2wSrb2orrFVLTrMDJyeydGEjaFYpe8xP8eHk78NiF41vJV",
  "key11": "2FgvzzfUftiDfrPPtKQUy3nu4cKiqT9UYLm8UwwpqHMvLvxeRSinQGaWcBhZCK5AFyWFNEvdL6NkKBgVcbku7qg5",
  "key12": "2TV2j1axrBLBXqgiZicJyRUywnRXfyGAarD63Q7UeNaasepj7H9JSX1H1R9vU62Q1S2exFQ49vgAE8JVDJUDQEZv",
  "key13": "5qRZNG5gsfGjU1UcL5P96GF72wPH2nipk89ZJ6JcbFMZvMn5i2TRAaLDem3AN2J27xxrptpX7XatZeFDu5RZp4fZ",
  "key14": "2FEgfwgPTUymgFiH5yYsftUoAtYXCJvmiP9SwYscLPdZ4BVaeuiTzUGQ2565cHtnDvga1hsXaR3tDBbbCNNEb8CX",
  "key15": "41NLHWgwwtEFmeru7ZGH2z2gJcUoaru7bWejYNrBYu6p9tgEbxLLJjwSd3Djn9jPBg5L8EmAVAPqAxZgciGyH46S",
  "key16": "3pRuRMFSsQBkoZVDtJhduWqGmb9k8JRMt9JiuG4WNRGuWCKBq3SUuKFzh5HJw8d81kvL4sNyA2GJVkoj2ePfubkn",
  "key17": "3Wq1D1dx2UwJSEWYCq1q98m3XLG5kt95siv6fwULu6ZPxN8kVe6fSuDWMJHS6pY3uz988RBoRVBqoL1FkVXrsoFv",
  "key18": "5kn4MBRXcFHM7ThP8BKv7U2oDH2BX5YnmLBTVV7bi8LCCrbG9BSqeWHcjeCsGdAmJatqdEqarYtW3dGhdgbZhWd1",
  "key19": "3bnCMS1aoXWtZTz3tehXxdKHiv7uGwkSG8emozZFwuKowgJbQP3Cwxws8xxDuKzRMi8E2CPFVWx3iTnbMNU7gaDK",
  "key20": "4A3xsdCpQNutXoPhPiKDa5nudhyKD5ZCBMf96sRQY9io3BmXZM9grWByDxBoTLjuUSX83zmCb39EN3ryyX82U81v",
  "key21": "5ruG9PVLuLVhAdCYn4UfrrfDuvYkNWdksxXdKREeDKP6gE9PUmdCk1siakivokwhsfHEFEmtVShYBxoQFitn5Rof",
  "key22": "58fyAPmX8pWAqaVj8X9f69h2EdeVRpgHNwpaxWHgozjs16ob2KLujhV4NUfbVKYfHVTu7B8NVDqtjbp8fcKA9q2G",
  "key23": "3ifu53ki8X3anmPLAYF29abv7WyvLMwotVJFpitMF6zVQmL3FpuSE9fThmMYDBfVdn6wKBywdinuhWAauvGAf9DV",
  "key24": "3H9rNTZh3ywdd5tjURqNJ6jhRAwn6ExCvT48f6aerHzH9ENXqnqRuVJErkwjJPsbiucxQdoUGrqCrpmbh8VfNLnF",
  "key25": "5aLTGJV2yvzm1G4ju8m7fgSia2jtZ9b4YVqiSq4YYCsRmXcFxhuWmNFZ75poNmyCKyBHqk4YorxndcjZ6L43uVCq",
  "key26": "3TrfcBhC7EgpXuNETUUNLNKbmpd5cv4azVzv5RHPnm78rNstNwFf8ypkbsRy1c7z3n8zzhZYzoDbaGJUFkR4Ct1b",
  "key27": "5JJ9eFzA4RRFVxgTTgWwFfw3nQEvNWjZdaeDFft8Wwcq91HT49nmZ53KobKeA8yPWCoiwp474bTG52KpSAFeGvie",
  "key28": "eggFkwGcE3JudFXArTXTqACa4LeA9PX5DPUz9e2Wn2DSggoRcUrZi5aN8W9soG4UsM64GveGe9TkoCQo9ybnfY7",
  "key29": "2vwtjW4hRHG7WUEcDLNQZ81k47HURaxBbWyKaENEkCqBYp3kH8RsWmECkgjofCn374ft1UR84RkPzNfuHXYfCcMk",
  "key30": "4DPoQ2yd3BLWYVLpWXbnPLThan4WWeZ8Nj8pGYjoEoZYyKwysnzd4UBm6u6hmtK4oD8ibF36X5JuNqtMeHVP7Qg3",
  "key31": "J2S4www9XM1LgzkG3bgyp7mLLBsL29LbmnBZZHfcw17hs6ZHgiJr94bTCuSspfVFAwtkTh5KSpoNVLn1H3RDaGG",
  "key32": "4gMBc4JZtoqtqyfNX71FFM7YCnLxR9x78VUDndnSaVc6KPRqDJaA9JBb2JgRBHCHzh6QYfv5mGZZbnXYMSNY2tJ7",
  "key33": "34gXaNR9qHdxCz8axiYR7A7oKSt7o9UsV7QJNZJ2jY5FHDTixpHdwzhuWKPxzdbE5fVqV8DGvrigka6GEyczUFmq",
  "key34": "4ZBAzsPnAsC7M6jwihPPnb1gW1UkCMjANpRxEDj75hNSF6XYWf2k6CB4NGd62DxRn36TGWpDnWTBSuNmuBoM2uZr",
  "key35": "4Jve3FT3ZzAfNrkBSvyZjGXbxzTKhcu18Y73umH66FXHt5xpUQDrpJ7czis8JtQv2dunCucpiPx9WfPr2ABjg5kv",
  "key36": "3xNLhrCLKEGDmp9M2sMRhXCTbkqft7C3BdiXyUHg1ULJxc2uTJ6RpRhUquCYYJ5xiz8Vmn5Uf3pLTLhqXM49Mqpa",
  "key37": "rw2pfsgnrcT5o7zNPi352uERSGDLQPthzUZ5V36oCsPDzgxymSyy1vJXk9wxqPrAGhHCw5Wcq3SGkLgpr76tyae",
  "key38": "5S4rapM9yuc5zKLitENV1pkbMrDZmMngqYxyDcUWeQ8ekjKtn8pGyrCZC2KNrMvDMQeXWgtnvio6jkrWntjQx9sw"
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
