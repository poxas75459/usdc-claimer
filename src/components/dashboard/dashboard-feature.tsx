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
    "5bJi1PEsNUZS4pT5SBBkegXHskJuP2aug8n9G6tu7Pecxf9c9Lbjh1xDvsSC6WA1pZZEDSL3dZwepnzGzuvJZDzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFjLUqdAK8Q6Z3NhMYQ1yM2zQoFdXmqN2Gdnfe6bQSAM8EpatE743ohQ3ZCcZYZEDGmLJZhYYTCYmmJXQxSQXZY",
  "key1": "2p8cZV4jqS3cLE9ZiuKeBdHKCshuWoF9b1wDXoz5WBd98nC87J5mmC9wBmb5cXGSKo45PpgN7sTYRFHWFkpZBndE",
  "key2": "2z1UyVDQZTn5EEGhyyEdLajqb25PFJYa4MxmTmsFiwTSkkUx8cs1w7WxEChmLRZHxP74MyUN81NHKx7H4PoM33AW",
  "key3": "57XpYSrP7QykApqA1YzHyASRtdTWTRYJHbrhsixvbd2Zhbah7PsqpNHfhQSTNXsGXw6itBWekQGBfCCNZhP8eUHe",
  "key4": "3xqg7kCgicKgjSzmkavrBMSMphqipQehGtCcCo8sHaepVUpt5GRVfHts6Uo1g2z7kjotjeJSQ7FRYgePM8hXXNum",
  "key5": "2MZcbuXze9CPuiYNXo1cGkyhx3WUx88sBChGJeBdwLJnsnNCuhe2o9FMqmXqX5ABrUXPsEK4d7QHpugVr8H28aFS",
  "key6": "3XVf5mQXC99VwzVDwC1qRFuK4wCHzeiRzDKqBWnYzuYPy7Pu1MhiH1GQ4qbwdTPTrY8GDexCztQqZywcfRkGTTpK",
  "key7": "2ror98mJ1sxqdLyZ727cabp2VZw5on9F8pmjkGFoQ1g4sLAo9JeAZTuJG2syia8Q78UynLjw2PNiLsHyi5exDrgJ",
  "key8": "2RRJiMR5S53cuC36m6RUZmytaRUiryr87S261d197Awvk5ZehvKPMKLFodoHF4yhtnkWPhaPhiWqAfqxpARF4Er7",
  "key9": "3uopwkR8m4M2eELFXUxc3S4p41N3TnF36ZWFffAXiHmTrz5Q4izGzPzmLhstP9vkMi6mMmAT1GhP3WjeadUtMHYX",
  "key10": "4PNiugmq6ZSbgPBxev7vGZKBern8hxjazG29BCZ5GjBrMYyT5G4A8ZKs1zHSQ2iyAHorQUE9Xw1CWZPrrarj23Vj",
  "key11": "39jvBjCFJtH7Si4RFNkLGi3Pgau3A5GmgGvyBK9Cedag6dzwiqW1r3swLj3AVTxmbANw8RUEmJwEYNCumoZQ4dAZ",
  "key12": "4zhfqZfpk6JvSwzhaXgtjxUZmNXqFLp1uKwdrNiyeF1MLYfavZ65283jwDTBycNCyrcX39noipRBsAbjpSMf95Bt",
  "key13": "D3B3bW7vLcySeWaEVTq4mSadWU9KM1wUyvBpwKJEmug52eYAbcWXWCHeWJw4BGuVx9HjM3VXWnjByjLKbE4jwtG",
  "key14": "5M47ereMWerwEG6GuDk5PfsEr6erBY2H9A9vnqoXy7Aw9EZRvrJk96eEP5MH4n9jLYagrbuiYPC7rk9BvY6Y6ptw",
  "key15": "2tT7LXY2fGi9sEr1ebx5x7H18HyN5ibmEXDAMZwbYuDsLEsLDyoR1cjHoJiaTddFzfSUWbiioMTgas99iVcbTCBK",
  "key16": "5nMqwmG8skyvhZurQtix5nXK5Uo2D3PPzyDi4pCywx6UuxX3fEmMa8YCYH2XobEXeLqfNdT433pSayQF5ATejNWf",
  "key17": "3TB62rw42ic9yBA1ohSVFvofegGSToJNbgEEyP3govnmbCdfCcMTTANZhfUdrXehwnhyZHPkxgLpJxRtgqnG4KSn",
  "key18": "4MeMVWNv5SAPbiWGmkXFZ4VhqRZw9PZCGftSDHJUhn7jPfuPcb5bwBTaNyCwYPsJNhvyn7FHqgG9FXPdwau3fWd6",
  "key19": "61foFXzFnD28cKqktVcrN1J4vS2sjN6dfx4d5RJBaabsSzTTEx3YeYRJXDTM8T8stRWK5V7w9wA17nTiWgrc4apc",
  "key20": "wY3yxJi4dQnUdcVoFizGVbNX3sVZGTnP9pq8hhM1kE8XXqp5y18iBgKkEX96X9SXYfaFfsDyFjDnrhy56Vj4Dcs",
  "key21": "34VRLwTKzTF7zsmGDV4fPLiBmec9B5tfCxVP4Vb7uBNVRt6Ba8i652otWh5AbsxAv49CQBqkiA2tRg3VZXXrcFj9",
  "key22": "3pxmLBcexKmFLVi4LhiCpEbmFqno41bHNR2fEMVX1TvwzkWcTTaAgxL1E8TnkHcKtNZZgf1ajyy6MY1bpa9j3HaQ",
  "key23": "3m2V255VVxcs3cvq1RqxqByU7wFzcxdZEKxATFyHcqNsadrniJ2LAGntf7HrwRdQvvfGmkroYUBk4X8ZrUmJiGtH",
  "key24": "33DMi6cnv5fF1CgJU3syQG7fmZcjn1F4mScYt2EAp2C5wJKGHxo9pA6rvCoZumy41PCb8eZKjruNP6tWkj8xQyqP",
  "key25": "2gMmDxzss59DrWTtqGjqL7R2vpXdciKPd4Br2y4YxK3dbsL1nzQdkV7KJkujp42hhgijAEbn38k2tmdA8jw8SJ6B"
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
