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
    "5UFEeNqFcwfi6xzZLzVvApXrTiaVi3oAmuV1K59NNhj8FaYvssHE3y351xDfieEbBDySuqJMGcZukp4RC6Dik8Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EeTR7N2LxrhSdnqs95mkSFxwnYKcdFnJNkpFiHSP46W5gJUSourrpLspHZsby6yKSRJqAgos7u884Q1j6W4CwJ7",
  "key1": "42vwfAUAjJXZkfSGwQsLj229xFzQirhZpF7Ec3ngzSVG6CWGJhTZ22Mxnoc4GtzsYLK5LYT3BfVwc6buGXrdPgAx",
  "key2": "2HFRaSA54XuRc1oPdtXKofrKyn8rkaGKTEK2XBBfczGDaVxiR8eteYt7QWVgpv1buJ8TKah1yxYzsVSnJuaUAbdy",
  "key3": "AN3eGhz2j1Cu9ChaCZaMrx1MXjoiwHg5Wqv9oiC6FitYumMWwVkmJi8HS2mxax2VRxD1bH9F84Xe9ASJ1uJ35ZB",
  "key4": "MQqK1RdiR97siHNoLAZuSByATC3nwxmyv1B2vqV7faG2mRmYVj9vdSHDLGFcrbNrztGabk2TRL1YiHDbSXnY18s",
  "key5": "n5ta2cY6KbAabW5NXuSL2PXYK4a8kW1Zmg2TrRtPSjDgo4CXMB9J5X9FmgTcvEYnUu1HW5AGee3u1xu4ZN1iFcz",
  "key6": "2oW2Ti4zSc1cXmu45JshhkthQ35k8AzoXM8F4C2D5Htj2jLnayHciyB4PCWk1U8iVSpmdT2u6VxJnfCQ6em1NTmT",
  "key7": "3XeXydcqGm5ntVjiGMktdyUPr7YDtoDgLTgpa1o2NkVmWaFWiXfpUFvHtqMtEK8hj7jF64XLZGcRtWvyJsPkc6sE",
  "key8": "SBD6HMw29AqDrt64ewgXx2MBboSZFWx5yos4fvo7SVUZQ2XcG8sCrti5KqrArm4QrqjFUzp7fq43kDfgYwu4wXh",
  "key9": "364zjEDJt4MzEnsEuxCzsjpwbkadHLMqpd4WPMmqbYAKg9ebNfDQPavuBnKjjXqvDCDQWYrVzPQUa1bMTdW6RzLj",
  "key10": "3ED6dgysQptrkLvwAf8TLeS9u7Z5nkH92KzCDHa4XzPLVvkGsk2Xen2HUC91RdSfg5SMQdeJEssETYfRjMWrpiv3",
  "key11": "2emLYak8e3KkGDdzwvtEkA2N7DG2aRksgay6qK5h9srZA76fP3SHW8DhUcPJcb3fPPcKaBm88DK1aCLRMdoxXzKL",
  "key12": "5xj2WxerYqUiF8fsgsqFq9yk4UwBNt5y1DnUGA2Y1fFfBgH5zXQ5T33tB9dCwWAfeRDAtLs3MvCm3kwwX73jCApb",
  "key13": "5au37vD6iR7oAYDA6Jh7YJzfsb9ruQ6Tw9EpabYH5kdpEqjdidhn1aLKEFs7kMgEMNsB89T4Kf6HFKbxijhZMG8u",
  "key14": "2uGJ3q8BqsmdeSJ8L4Wko1gL7XRT5NfEH1SKfWThnN5v1DwpGgcm3JVaM6tmGoYba4jdueufyVdgMJBf5Uxd3B88",
  "key15": "38uTEtZmzdQRdDCJohWaCuW5WFxEnWqu8dECt4JY8caEUi2nHRCYBCcuM4MBDcY9qac77r1ZR58mhRhSrjJgq4Hd",
  "key16": "2obESbcq37uZQMqwA2MCbHh6kTj5NeghMuT9DHAEBzZg43zL5pmuKuUCwe81rpxZkQPpuRWAcqWSj2iC3PctZnsf",
  "key17": "2wZkrGyXpoX31QAeTj4PsKAHPxeFbYTwrLPo817HURyYeLfBDS5tNS4ai18RNXJZ1ydH3uq65tmkGyDkkxeRYDkt",
  "key18": "5cuo5rESn9XKDjCNtch4ug8nwkksXfwpspyRh9vxWMVJv9QhjUTJeBuVNN4H83f6vNHp7vkVwozN7xVvcdwf7WS7",
  "key19": "3GR5UBMuYP1e4kprri9iFi5w9xChh98EKc8rycFg5pHuFmNS7ZXhDY6kw2kBqo4W2ACmvBpCLvM9Bj7bazmy724J",
  "key20": "3MYkwfF586ZnYTZMyf7v9JSkHkJ3es8W6W5nnisU4AAjKgoTfUsvjJNvMW4GR2uCrVh7fVJvEeyEagucArqb3uNp",
  "key21": "51XPzCpR4Mvi4KT5rKLoTBb9yNtnVXPXbK2T7frUbDGU5MzTpeZAs6R5Se2dQELWhWNzLTQtiU9Pb7M96WsNH9p2",
  "key22": "42UmCWMvy7vQsJwHpuHRhuoAeXCm4wuAmreXgaT3JoqeJeCPkBXDb2n6hqc9Nuxmg2ETLJAsdW8QSaV1Cah4MPj5",
  "key23": "2cgDTe5qKMFMK6Q5hr9PvVdLBqfftQAWEyCXcfEMJkXVk28FEVVF9jgHgUuYXUz9A55mLqsXbL7sWeEQRFnnDtG",
  "key24": "Rk6X87tST9vrV613RmppPTEjyXt7ibqLu2y2vvJdvwfdxPaTm34KMmaDv9UuujvELT6tfHMVVyfho2UybGPYqAv"
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
