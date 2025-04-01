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
    "21Rke8arZSDjvBhpReC1Spd5FWiAdWRLbyTiqcQkuGVA4HDZ321DF8tGRm8A2WYwgCP1MpECnsNpGAuBrJEKGDGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YmvSjzrQm6CAXDFxkKxvaakfo5r8TffbFAVPpT2kT5HGKdgd9y93W8KCE5xgdwS1AGNoZsmnjsdNyX4J9PBJxvm",
  "key1": "34u3gBVKqyV3kz4tENKJEYe93V793YUK7wzDGSno7dRGCo82xTZJ48KUqBTZKsySZUWfktKCCrwM1tyHD59hfZb3",
  "key2": "4Lx87SYtZpvdx6YsvHzR7xUXFy61GyCZMuSghiS8YdvGswDsSFWVdkRSm6athN7WLkGFy9EMWm3SAJfeN4q765NS",
  "key3": "2UoeDVecg5a6PRmGVUuFLrfyqqXYY13e6U43QEPwYLXSswMJ5usxHV1GrpRb29UqvNq2BqzkdKsDaa9GPV9Sa8hX",
  "key4": "4fKR7rpmvo6QoSSAg5K1jCJEqcbPihVzDepgpbqxohymk28WrrtB67DGNhXT4tiyfw77xFqqZomeBHJujmgGaPrF",
  "key5": "5Ha9UvdRCK15MVyTpcqRyUaXpntNKroTonJpJ79w5ajGDsbJKgNyfPMUGebjyxPGfT2uKT12TngAA6dgsWhZgBJG",
  "key6": "3TSv6Lq4vS2WxdwXgjVxsiS2ZXMWJUQ1N8DFysCX775PmATvs7FsU85dVBgHgKj6yFWCSLYjy6SMurp3RNTZkW9N",
  "key7": "PZtWRSPdjLdzrQtrTWpTKPZ5sN6U6GpVB1mrMeNT1vJB6vYWcB4AgLgbRbpeUHjTiS5CQs96Qng1RB3vqayviX6",
  "key8": "2BUVzTmtW36QAjHVwFqugQnmt7vwN1yXLySStkDr4JymDyRasmgaHHagxu1DHCRowrRt4HrG4TzwZAGWDcWHSBET",
  "key9": "5BUuoQNL5FNcE9qEhCorPNfS1isQvvq9qrRpNeHzhMqxBR2SQy311p4BjtUMvMUshxmzmnuxd4wANXw5tPifLokK",
  "key10": "62u2j9G1Tb6jRo66GQ6Vbd3msk69FFz8fV2iLEsGi7NmP6TvDHQx7gTbjSPoqqbXtz75Cz3n5tsnVZw1UBKBqrxt",
  "key11": "4BxaHTXmNY58DHtWjkARGcMrTdWxdXAc6zMb9R5E5ov4gDLpCh38CXGtUi6jMwNFE3rvyfpXEEEFpjuupfdudDSR",
  "key12": "4rXowq73K35UzmXfJoWTcEHnPDex2GaBWrtcVwEAuLFisPbggmqW7zAJN8ubndywXcov5TQX8MBgcC3R5ASVVLyR",
  "key13": "2NVh5GQvsBbXCuif4Pc6uj9CsU4TcgbEJqKJnvk2rUeSj8gw8G1RtM5fURgaGoNJPyti7JmxRZ5GSJYmqKKPpcr2",
  "key14": "2khsNfWGZr1zFvAV4UcTQhBweQBBxnJjFswhdAzmPfcd5iUkp3cSmVnXeFYXk8CPBuDqwYtuQ8sXqVqtyb77oCYY",
  "key15": "3P8Lo6ERkebZEGTshAXQthJ6ys9HsLaBBpVDW121n9AMLkXWZoUQbYhBdgHXmVKZtSp2Fk4jepmVqRF7xAmZB7kv",
  "key16": "3FLuHcW4CdUfnL3dFMjBQnysLN7phMEUxRefHQrtVoNrtu5f5hK93PdBhCi6WFxr2hPw7pjXeoVgM5Sbm4JPX4yD",
  "key17": "4rsHKoEKWphoz128RfkSCoYZvM7u5tkUvbYLE4MawXbwvBojpMKoWqMJLAVbbkQ2Cjn5s9YUvJsQ4qZ6s1jTNfyQ",
  "key18": "61NKBQGgrmCEMsg96HfDGWQNEv6fqyacgv12jBQMvBfj1trWo4mHmkEYRi7hixUCdryWVLvX5sUtpekThn7aLXeF",
  "key19": "iBpGPS4r3ELYzAU7V6LWqg6vKjgHqb6LaEpngdZy3AwrgXtETbRTQcdqFJrqAHr3CbBsNR1hVzj13Jum9ehZtAd",
  "key20": "34zvv2femJv6xrZs3nw5sZLAW967fWSefmL44H9kHQxnJ7E6c5wcn35RyLYy5ggQm7TRE1W6E8TYexSBRNdHb3b3",
  "key21": "5fsm88TFEv8H5Njav7EtGapgsCN5u6zqYGzF57TQaJ8h6FFoBsavEHPh3UnqK4hbLS4hdBfKHbAQWsf2xVqsu2kH",
  "key22": "4GJc96emwS6KAEH76ywZTL5URHdjykLrELsYdCrBnoNrfJJfoSwidGoAZtJi1rCXZGWxGCMmRiyBcyshveWKHPA8",
  "key23": "3gAjZtgrRiAg4n3zguTu93jKWx9s2udgMb17Ubcgn13h48TiKPUUd2exp1qSJPvC3GDdmsspQVji9U4eG9VY7iPq",
  "key24": "65zS2j1xrMb6tyMHD97h9Z3d9cbCVFRjpZmYiH1aC5RSR5eABVJKPvFzLPCQ3xbBLG6NbGRd4Vhk1mcmx6UHHxAW",
  "key25": "39T5q4z3NgCUvk57fnynp9KdRiyU7LidaK5gfjK8NRo7Sg5dLPxejVLUuQSmXzcYno7SiGu4eVLjt9WWHxtKnDzV",
  "key26": "SuDQJvAX2j2MMhm3B5XKX1bUDyUqzDurTeaS5m6cLxYrWUfrVLsPRgABX6JZPG7vLNQmZHoQEq92seUYDsPm2V1",
  "key27": "3EVwvCJJRJtg4QmifmvKkJMSQ6r1Q2WeFTJ2vKCJ59R2R5arYvkwfgFHf4obRzWvqRnUpzsmNDLHpPnqCe8V3EWz",
  "key28": "3bC8baz4UA7pHsSbscxxW9xbkYSgaHWpXM4VQWxgS8s5NfkjzpKxnDsYkYiDu6aY1kGXSmj1nusy6w9depXjiYGF",
  "key29": "4TkinCwpcK37Qzo6n2f66kMU49pt1BM2bHeGQUrRmAET8v83uDkoJrusHs6hAHxXtCpfheymP8eTu7udiW2Hnrr2",
  "key30": "ZAXyVSbgHx7FUK9oRQsGUxpceNMoWSfho7H4codfZbHb6hkqhgwEfqhaym9ZzVSi7W6JgU1VXK8ZDHjnsCramxu"
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
