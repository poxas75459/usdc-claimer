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
    "42Lbz5pxBrhXwyR1TPXJr21srpUr4jjLfdF8C4rg87A2PBZaWF1ZfkZVU2rVXZNC5TiszfCRvveiuEZ29yBhAjyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uK9X5TY8CFHu1AsPYxVoaBN2tpCbk2gX27Ntte7jggfDZhyD7hdgrJ6z1uLZNnZkice3LJPqeZ7Hfr5oA6dDiB8",
  "key1": "5ffMxq7oKtudTRSBLv7ZwCjALKr5p1sT7v1YtqP3rnErRxMkFb734NToa4NZx58BAZxrtsc99nsTNV7AL14kUFzz",
  "key2": "bHKmNzztMKqHB4V4hD9yFe3WuPBBBtvSpaQ1KnR5n1h8Wf92pJfu1yZukFm64ak4FfcfYR69TukH5wEDBwykPmt",
  "key3": "5SkNkxLBL9QDcv3Q89AS24QvRrJyUHfWd8AZTsekFP8fR7DppbYfQcutEEW5AEFBywvXP2Gob8fcbg8RNqdrA3yk",
  "key4": "23eP5TdmqSvkUpLsxiSB2z1oKHkivm5vaB5sANMqAQebuMGF1bDNbAtVDnY58jFMAKwqRimU5yF8N9niB1nSsUBv",
  "key5": "5Lh9G26gF3jR3xEHymYANdvP21DDN87akyYSKnnvMrxp7rxPff57oPtXmUzjQhXubiUES59wGzVVNUnPDbo9hi4x",
  "key6": "4fGWfc6a1T7rM7RWUuP1fXxscqhaX1ugf7qKPZrJt8zA3GcrhA12GGH2Pj1A14RRzWXpRZFeaau3B4Q9UvKSdnnb",
  "key7": "65jEY9LXcU39FGp3M9uuxYUbqRaM1yx9WpWJCnKkE7u21dj1zUHAZUoJygy5572MwMVEgdPCcPx7FaZxE7DvVAdZ",
  "key8": "34ErrjzDm2CHABjsThq6KKGdua4tBiArQW5JGzmxEdn1EEdssfoJtRriX7KjncwiwY488SBwFGEHdwUSgtdwmpTx",
  "key9": "4kxcmkVxWCzoJnNTkPfSDJz3qTFr8bYwN4CvB6WcskPJEBNenVgw7kVp6BcnkeYyCpuvWtPtpMZXjGY4V3kGijrN",
  "key10": "5kBgNr1xnmFxw8BWjkb1fUrZDdAAkr4KYofkfxQC1Tw48QoDvYS6EjHg71no3Gi5sjeMQyY5ZhYhPvwCpR7tvzSR",
  "key11": "29qxnCES16mXZj6HXRo92emryo9auewzyCVsRsUQz3GuqR3ZnqAnBDbHSyRdAXRhWajfuudhJyB3wEYx6LAFAKWK",
  "key12": "2y8dAVsKsUUf7ukwWem3JaDLAd4adZwkwvJNoat9obAq7vR3rPSwAnarxroe55E1UnJHv2kt3fAJHdnv6UENcSE",
  "key13": "54S8uxGrj2AvZz9mfxYn6czNNDofG6ampdeHhdheX7hpwBY6ppXxMYdqA1UFCTsRBZNsKbbkbC678dqicU7r391c",
  "key14": "5tKS5rkiVKH5npH56h3PgBPA1fGQ9rgJHDGEAZzJmjhynsRECus3faxpPVG6gUKMEtnVd1QwRm2XZ9dx2WHkCqKE",
  "key15": "w5vFeYbo3RsPNCtyzJrB8dMVoLwUT1uDxxXjb3LjPHRSdyUEtUC6ze3dYp9D9chiuMDLaV38pXahH4Np2r2nBc8",
  "key16": "61SC6r4FueRV7d58HZ3vGkLiA7BtLkLXMDKTiHBTsfNgDL1GUzT69TvMwL1VG3RaD3sG21o87UeCEraBQPA8Fg7D",
  "key17": "2pbdzsXmioiBhgZiMDYMqpkBCsDGiiq8VV1fnMQQQMimPXBr6FbVrq4eqiEgv4yJaDgVGbeHMjQAPz4WuhdE84mv",
  "key18": "3WsxQwWXLxo5h98oBhTUdUecPFJVbKydz9e5JZPHa7G8aJ4L63giXaG3pWkc72M7RwYVn2cE83L5VjGpQD2oCrKk",
  "key19": "3GA3K8kkY9PXyYWtLR7UpyAJtg9vXV5VE9MncFcFWPbeDzRy5rJUcyRzXCGtkLACUWsph1cUs3g5QJEgp7jzYA1H",
  "key20": "5gh5ExxW6q6ZLcaiJEpyQMDj9DHr67zxaYzrfLkkLA58nBfi9Udkdj34ZcWdw6ftRdLL6QBNudHX5WLLxS9wtKZ6",
  "key21": "s36i1gwyBbHWuyem1JLZdjn26MT5sMNHuHoMtZfvGHCYe9PUbGkcMy54qTLJQnKs16FmXA1WxgzHeAq5jZzTz2g",
  "key22": "5ZKGQ87jQTVhc85gNWNzt5d5n4JVVwiZZ24H3nH53Wpt86iqMcLy5sSQkdHkQBvcjHsDvjXQFoHsjREjuTssR3Dq",
  "key23": "DG1UqVfj1JNq2Bda8ZqHzmBe5qC8NJtfZ4fb8ArXQu3MWhYnj91Pru9ebgtHVKWz9URFaewgNtZ2X6wnpBziyZg",
  "key24": "3LwheUX25bv5ewJMpjtNropRLT7pWx8J4TVW8m6q6e5u5wUZazUi59uQA4EQBMLzsvy5KrNow3t1ytQdtydTdUXM",
  "key25": "36fA9Qik9KWUnZB9U8YzhmCMmsM3rqd4c51HxoWUfkFPF9p2w8TPG6MNEKxcYq1eJw6oLqmPozpzPbRaJ2C1LV8M",
  "key26": "35uD7XKDbvZcvJgbRce28P5jx5k56MTZS7Ky8piCLFUPJqWArMWqu2UmjCFV4uByoZRjKt3BZSnUMPBdHYdmraqE",
  "key27": "4uwf56FacpGiWzRXq3p6T1w2TJkhLbavFoxNk8d81mhxeWdrpAjxJyU3tbgut3dKHCdEH1RxVU51GRVyLY6CCTje",
  "key28": "3eyNBUufBsFTBwbrCg3Ldytssd6VVg97HhyCkpng2XJz5qe3nsnYz8mZ5HNMytziG83KS9X2SjZczMUKoXx4D3Mn"
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
