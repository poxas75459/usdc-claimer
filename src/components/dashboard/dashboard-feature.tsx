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
    "5r1c6YfYwYZz5ddLiwMfNGWvnzdf1nL4sFBJHgyaBKYY4onv7z12KaJp5hbeAFE3GMpFK2SpU6rcLwAwDRFhvkwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "daSryNfSzP13hsZzahuDEzodHE65uY94vMKcRY7CScpk3kkqctz3hG7T5vbGUkJPe7vXR19VYVxe8cmjA92sCWR",
  "key1": "3QhmJeEAojcitiLfmyap13XjjrDUa6BVSD5SUYvJfR3CPaCossnnNPDYJviiittCwZQXfs3ZmocmpB5B4vR4FMWk",
  "key2": "3yukkj7d3aDvb1oSj19iZHEWaByH4vr8TXgAhaa9B8MrEggTrPLjVrRannnVmBaYgD3YzeYHEGfig5HQBCMF4nRN",
  "key3": "5Vz9Zg5VJzgCsVn7gn9MKDdbJXJ45UFnzGkFPesKhFKttzqwi3UKhqzkgXL6NzCfgsbz2xnXAVmhtffGNtH1Tpvd",
  "key4": "43N8qRgoMyf1xwp35s4LozYpMTkzPxNcfsVxLig7ek8sQAwaKPAUsB7KukhEJuTkTezCTSTny9Ln3yHn9DsiG3U5",
  "key5": "2DU8iX2stiRE2ZiTMVehyymhFA7ArSEpwMCU7b9zoojidezoDdq7atQ3mcjnSjeNZ9xF5BVW76EhFq8qsyKkiKJr",
  "key6": "3ZBassZXeVTN99ocWjc18nodQEdGEMnPhd7eLrVT5Vk81zCbNbLMEJxEdWgRpaGeHHh3SWX27isZuWzncn7ksMQs",
  "key7": "4bndAq714Ea6uqxPfxAtoYmW83zvBvhq75nfAQA7j1wCed4TzEebfVZsfj6KpfaRhh3uxSzriQ2iQyqfWvbvEHYU",
  "key8": "35p1chBXXtdeu9SLQ3o47yvTD18Cx4htsTn7SLxBn7eGNWeSb2p69QZV7yEc9TYVu7Z9HXDYVwR59BdXdfxcBStm",
  "key9": "4kmZjtuJvzozefDY97pjYofTeMQ3FY2usgKae4LwpwZLRmqtV5eNHoZPBZE8kELtkjejdKTwVJr5Hx3xsCRGcM28",
  "key10": "5uCwTBiELhHAN88issiAMeD2Nj6xAjcPDXaiqzJg711RaHeT6uuSPnpP6g3ZdsWZ5R6fGkhzhGXse2RMGfukn3N3",
  "key11": "GN5WJmUaShYucThJP3bQmDb29qtssPAzoFWpWBwCVRjw6EPv6Awc79jA9ATzLHFmEesiRXi3Ps6ERvBu6a1JTDR",
  "key12": "3YvcyArz1LFABy4srJtoDRAJTUNjW1eqHRkXd8tvVJ3jQJ9RQNEPXdEnV7ET4TxAtGmoYeHC9bq1uYqb4FGxQa5T",
  "key13": "vWDQdewsCZxDfcfP24rm19GTz6cGofZdLDHbycc8VR742BSVuoUzXy7ax3qDTGzjgMZDr9mEr87pmXgVs8ehrK8",
  "key14": "GMpV6b6FYfk4kF8HoA41Xmug4J5PdoNbdfd4aaNTzYVhuZZR3Qxuggzyzq6CRg2spVv1Hzp4MEskR5iYkiuCTwy",
  "key15": "5ehdrT8ZxtSk5ciSXqaM437YrAJbMTkqK61Tm5VZAufXbLnLbnzgi9twr1P6kEeQCqEMDeMTzHdGwc7BkYNeDKi",
  "key16": "xChStsQY8ZntJ8xKcF3qLr3XXVEquo7fLxHrQe3ayVu5wk9hbdkAJbS1bPZTgdY2wmoAmkbt37JkPA9xMuMkdes",
  "key17": "3d6m71GkrdaQ9k5YPCn1yaTTLYhsgpi2N6A2pDBXWviceiExgXtv6xjKnxFfnHhyMKAmGMJRHs7sSMtpC44R21Xq",
  "key18": "Jitm29rBFvJwDzMZYmkSxMG16uD2fZxWRivn9t8QeNvsTcxu4ErbMFCduhxu6oAt26gWR3LcqgV1oWsgsJ6b328",
  "key19": "3hKhwjnzZwe8367VxjFUdXeMWp6KqYzhG5h4tXsDvLpKQFicz9TyzxkpmcEW1pa1ph3pQD86yX8YJzUxZwro6Sf7",
  "key20": "2JrdN4dmA7rNzuNNT3n2QmorBXF4Ss2oUAqobrUancQzSBMqe7q1BBYPExF75HLp34PLhghwgKddngn98e7zU38N",
  "key21": "BaY2HWVTGJvM9tiwdWV7HXw8wQuBp2VF9HcVki2Auhit6g7zcTwJ6Eimov9AsaZGZ6WvJoevBcDVuuzxpo2MFhe",
  "key22": "MRfwcgGEeg3tQgPD5oagrbHpctGGqK6gF7FvCQcLJNqbuUmzZ4kgcMQvhx776j9qFr4E94sxrbHG31iNV74QWi5",
  "key23": "4vzxCEWtxfKbMwJ3uMSgJh8N6Far45SsNgf6h5dfcP52vs7X8wYq1Jv2EFRK8nfrDBgMNa65kmrK8MD1fCaGwViu",
  "key24": "3o3qv8ApfeYbCHC48ctjsWZgKu69AzafeZ2PGYbEnHe7vD7hakr97nbki8Xka3LUAiQptU8KdZrKvLgozaQaHuNL",
  "key25": "4pJ1M2ggcBMwxa6qXxJBd4bfrkJe3Uk1Y7HF6dFGwAfYvcGDadT2PuFKXTQ8wjWE3qKPPZJirmVxKgGMf8qgAWaW",
  "key26": "4n7x76E5yYLj4Ez6G63RFw5HPM7EE5r2XG33wfgueBDgXxCbXaZbQwN1KtcALbe2Bb7CkXPhap9XmgAKQK7quVrZ"
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
