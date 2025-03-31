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
    "3gR5NbC4CEqE71TQew9r3L8MifJAWcRuWawnJnSCNzJkMgoAgqCouEQ6FYwXUqTZBn6mARG9cy4QYY9o95LAtgfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7mZMQQ4jJtaUJSASFMtod8chWUbwTmsPLe3GqQJSLyW73dSNCFhwz7UCgPdBWgLQywGzEyP6pqaGZPSDR1e5JQ",
  "key1": "52ue2sCxeX1fPZNisUE1j7zvi9gWUzbq91wkjycZUxJx1NKhb569FWV9rmcQRQ9M4pr6NQkHkBB2xhHmWGQLK9sj",
  "key2": "T5TA6xHJQFs9LJZTg62Ai7HfwGUm9w5a2Ek9YJe4932bTWn65tnzYAxGTGeFda8vGPD5py8WQUnNeBCVMW1iveP",
  "key3": "F3dmxNNHW5Zi7JjcTGZBxesPv8yHuzKjSMiLvHcXGtZkQX6HZpcFAaA6wDqXRWDqR8rc6Qt5WdSFa4UNFTxFvL5",
  "key4": "2MFF1NZR3YAACqhJuT29vrDjZZpjBMMC8Smaz1esAw7hq1yV5rV6YRZKXm42586YYkdwSb7i48PGsEnNyadTx1uJ",
  "key5": "2pGC8DpfQf1gVmYarqxXgGEvLWvHabsXstavwkMJLusbQS5iRob5hhM3WBJcsv5YGttPJ6wKtPmUMkKYvdA3W768",
  "key6": "Ahi8XwCC4EvCPN1rRCKkmhwFdbsF9W3AaZe8K2Q6xRZT3xgygRfNQyqun6kpZ47kwsq4rtNrqeHB95mnU6AsRaZ",
  "key7": "4BDfHNNmk1Wi5CbJPuVtmbtwjqApZSWEdjXqG9poRQGJBo3JVkvtzdf4P5aPKdkjM3DvWS5tjHJbKUNERLJoQ6CE",
  "key8": "5TZLmLMyNbVKmTgavnR7qqq17pSjFQ2DozGXc5Ug7EL9ZsEbpHqFj9e626qBgZLfK3iJLjqSF7NHURt9Ld2rw7L6",
  "key9": "5YAw8PtTJAYTQ2QgQFi7M9GXNCF8oFo35HG3ZmTGqWp8gR92mDtRALvbM6fGbt7ceoWYNDXPHbkZQDAtrfYKhSt7",
  "key10": "52S5snsePZA9r7nHEcUFp6cNBRvNF9PvU4P7zuHTsPHuicTJkTPvTpNoPeYPqkGtBgthaAA2A9u9tVwz1HnjQkYo",
  "key11": "3DfdofchWvcV49DsuAtztZZ4FFgYdupnJpCAc14eqjmEGGUfC97s8gSkJyvTgoopscjGNRuVzw2BhAMfsfVGgQwG",
  "key12": "aXj2Hj5UbDhLzRFHrkNxPcC7KPHr2DQ2ZS4zkgLbUo3eZseteCvzrN9z57wnWSv759fTu3bcX29RP9JR3jacY7R",
  "key13": "2QHukiz57JpRUGNyDLNxZkXxSiTHBjoF3ryyMWdUuBLfPuU47QLS9vxJnjzenb3kRHK3zW7tWarMw1M8qg2XtUB5",
  "key14": "3rRTbhUHdn1oKBKTHTWHAwXqh1mUcoNASq2nSqThtJC5uaEP6XUJTG6eYC47vjKQhr8B3Zws1ckbHF5i6tgghkKF",
  "key15": "3fjCwMLAd3yaya7EWR6w3b6YuWsBdR9DRURvquAtuBLvPhr9xQK7FAzQnMQpLW5iEFn5v7EoM1MrQ3TxjfaFrfSK",
  "key16": "218e5XjGhUvBsgP4Vkknkfj43FLzV3Y6jwFVCeLWCTr91rzuR4DKeKpoyjdnnfbSy3JeHReWEE82APx21oDkMVNV",
  "key17": "5smxojDrtATxhttFHhLLKpyjjP2rvpmLPMzN6rE3f2gkuzAGb7vgrQC1oJL37KhhWhiYnAAiEUyDJWZiMnzAWo5n",
  "key18": "2XCxW5Jyps3oy5HjHLBVru5mzCZjEXLC63GXJpHzGnM6ySPKxNLRKUmdbr1ffTSbMXQKAQ4QerH8Y76EF1hjDiES",
  "key19": "2qmTCELQ22j6yGbMfonCqSReUeb4kAkqgfonu7ZdJjRuSNd1GoNxo8tPpzW1tb7hp5Pruc1CiXe4c6Gi8FFKaCXx",
  "key20": "zC3txCRv3mK8EiJAnzNGk3hd9UWQTSuud5Jt7S6fo2jkBFBV7qpTekf4zCjFym2pNBmxEKsJZtQJzrCfFmw7S82",
  "key21": "MWS2mF5ScShA11bvT615DmzXVmQjmM3qy1muG28UT33rCK3mdG9SbMvY91Z5pS4o4n6r5iy1RPoq31L98zpqacm",
  "key22": "4rME6SRj6zK4N5MoksTBNrbs2EuZ5VqLN9jDHE9MkpvbCxuJvVw6kcGRvdivF32ch2KcXaRjdULXasabaZAjRKFr",
  "key23": "4HJqwsEBW8g5Hc2ojtK2mLvBUbFtmetY9DVnTE36z7MeNrpTkbuBpeRjeNvY6VoQJ1wddMJVyD9At9t7vWcmeUK3",
  "key24": "5tiaGvdzPnyrgskwgRtY29LW245e3Ax4cBttAefUZq1tZKUSTvpJRVvNhRTz2Xa4nLMZABgwAMJRtECDRwgj7KWC",
  "key25": "45RqY6Ed3Kp56s7LqtcfoBSg5G1pe11xRDqRgSNQBGX2xsKomwpqhQFh1A6dRXermt9ZpSpYcv8cv4ccM6ziBSLL",
  "key26": "WRfQTN3bTLuR6TpgW8BbF9vaYMzbzyofYHpNpM4g18AJkV5Cwku4NBAtND2VSjMpBR1noXeKXxUXozQMuhNTUkx",
  "key27": "36MkB87cmwmJuG7nhKJjVuD4wZLoFEfnyK18SvNHMLRc23jbx5WmDhSkHrHPHzSg6bfPZc6GJoyj8DjTCXZo35SN",
  "key28": "4NLhYGcj4H62YVFpVvmfXAJ52njsYJzGQm59ucxSswzEqCywt9UVks7EGRNmRFnhGRFbuxFg4dMZhdF6crzJottM",
  "key29": "43zetP6mQtqNdANyZWwa9RDFa3GXV3KGiADiTGDEpgCZhKKKcH9Cw1VwqVBKQZ7NQZBYZkCu52z9sQ8dYRs9uZHj",
  "key30": "3qPpfB8kXHsa9dZrhA1Ad9qWWRt4muAbvnDFhnQ8iTBkbna7qLXBQ4q2Umhj132PPjBSPxfiGFpGBB1WSXEvjSLQ",
  "key31": "ZfpXxvKhddspdDDfttpeTBv32HeUX4toMXYPAZXi3TiwCNYtDjq9A4v7WSoWbNCTKzZKPQEXtNLbQobwc96ppSn",
  "key32": "wfHrXBPbEEjtASRajmLxmEkYXipt1TagmJL6ZHUwSeqSeLJtdPpJCS7UQaYkEfDnh4ephXCgJ7TRqGbSAc4ExD4",
  "key33": "2DJxoyW7zZ6nQbGbz2vsvCYVnKarzrmEwbAb6Y17GhsFJnEnYYtsemGiXac5GxypRzTJV7shK1RJByFX2i2EN8uB",
  "key34": "2hkSmD7i4jmCsad8DthkBtdEmcb89JhDjceHRD3Ed4KJTdwaModZFyBWQkG2Ae1ieRSSmHWmnLZKDDHChj7wjaRF",
  "key35": "5zjBbDNupw2EjCNMQ85bVnBwPtFJ62YGkGMA5ch76rquBeY1sREJC5KMPnNh5xQFKzctehuBCa4xazdmJhMVPPiF",
  "key36": "3MEfjcHz5n4ZdUNPvzUtoPMSH1WwGU6Qw5RaF6r4xePcdWdGjCVUNs3fWG1S9B4iCg1N5DQyfCHUotNXkQEFR6Cy",
  "key37": "33H9xmiY9wcQiR5NwUXVrd1bZyMnQs9quBJfXcgdXtqJNpcSEicqp3bgwhRGMszCbCJAMcz19R77BLAfx9dDkWYJ",
  "key38": "5jg5uk9MD9PpLTiytQBF76CqTybaZv3YmcwiEK4kQ8eEWtSCnu5PuogxEgXNZzfrA6ec5SiEhYcWtZdobZMdPryB",
  "key39": "4ofFTZra8UyEbQSGx6pvEavw5RaQL8ZejN51dpoXPGo5hFXD1TTYG1CPgWstqogsN6ncoKnaung8C9vvC8Ro6oUp"
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
