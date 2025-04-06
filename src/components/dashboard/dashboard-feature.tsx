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
    "W6yajwTr3RQvxYcNksJYNLxqY8ce2LMW6EYrp6XVKeS37rvbYW6rBtUDF1MmpAxH6DgA7eLWTLT6YpkojZcg6zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67fa7bqHAN5UiPMxHYbH86RD5Rb2ZFTxoWBpqPMSAQLqubRs1TX7ihq4voSVxDSCX5VuFzYUP18rg7U5ZATPVfbb",
  "key1": "5p5jveQqLr9bsczbdVdc54gtNe2n8R2FBBashrsJT5Eu1jXXgexAFgteeRBtJ89ZqsR5G6THQfbnn3SeyPTLbYT1",
  "key2": "31hDqMBAarD8c9C9M6Vf7ZxtVvTdoQZQ2T83zsz7TwHnkWc6R5VVoe9X2MbnCDWdrYaNbYwzGRa6BsBNpzEvgkEz",
  "key3": "gnMJVa4w23RYXLTACBhoAtERQgmHG8Q8waFDiiN6g2XVXWfaJGAWDadTzKNwE2GF4QKdRvKFevPeFtxewxTQ1Ur",
  "key4": "4vCiapgsD7vv7mHtPnLCZou4NfopB2ASuAstZGM2tmD5qxig8Jce4kBvLRYptmK9YNkcfWXHWD5jjHrsB8KbYHhg",
  "key5": "4DuKUR9S6z6koAM46pstwzvo7pDRW9cRKqhRyLBmSbkJzhhUqHp6intKN8qzPWVPt1FqTMdDEx5kFgwhKnY9xmYU",
  "key6": "4uEP2hAxroRnx8LNWBxJ5LEGkDg9LyL9VSsuJxWdWD3qAs7hrNn5KkeVqRxEcewDfTqTxbZsTy46UEDFtisrnkGx",
  "key7": "Bk3eyc6ceiZDMy48FWcLGTc4siQFsb2yJ3EHgb7HjGfLSi4d6tihUs4NrRQwM7Dmb4fKahwHFADw7yCJ5dgXMGi",
  "key8": "3vqL53XmXjSBLPabcTUhMKYhcvRqTFLbXbp1R5EgFgfdDEcpUSAGoapLxDfmUrrVkaEHruCX3qdZECvZ5DLtmE8H",
  "key9": "4DduuNA7jr3QDzkwm7C3U4G8zj4CtNvmsLmNjHpg333hZGgY7Z5mJ7zpQ4TGhTc5rwf8vwniHrQ549KNPiqoGZ6G",
  "key10": "GBkSWovmWGwZYU3mDqKpqoFcmn376UiHeXcvSmHc7RxhtoCW7iitwbvPTSdRAcP88jmiNZEKSV91ax7cjPumX34",
  "key11": "eVGUB2zn1qni2udpPmRTr4kjqYjuLNWbEEXAq87jpU4S41gLPp4Vxrz2YvYX9664TmRbKHoXDwh3SbVbQtFoTJM",
  "key12": "5nfTseEPqKKsjTjnRi9foR9uAQrix5cGWVcr3pKq11xMpEEXd42zCbMq1ytSiqWokqenzCxN45iAkH23QwHZFyHf",
  "key13": "3iBotBsXHREJpD1awTUGBfnwmydPnQCyNFLYwARScNKALacokPThpRxi5WBPjigGbYz1fGb7c5df99M1cRqXXVo5",
  "key14": "2rkgsFYEjHpjgfMy29bp4GH3DAzXv7XZ7UKDoTHFEJXQvSayLsCHtiuf53jgTPF89B2c1NnbwBmTCWAZM4ondd1K",
  "key15": "5HNTHn4moGMA79GYxvCaaPY4cz7bdwDTr348DpxhYdVjEHaUDh3LxDghX4sK9mbAZeDtMeVfbhdpcjpPBKXuBodR",
  "key16": "4PKy67uQicr6AtPUTB8qdj5zUmvd7Nk7uHAQnap99zK1JmLgygiL9QbQR5DC4LyDemWBbjnCqv8xchWQbdG6HEQL",
  "key17": "2iaK93JU9Z3oiRkZr83vLsfeyu3tygVrRmanx3XsBMh4q2h59nQ2qZhX924hLJ6RvvxYf9ArwtQbvJz1jDF2oZQ2",
  "key18": "49fnwbaJq23M2YkNqKJdLWvAXktKUqSi2nWbbgYXpBhcUEiYfb2AHx6ACuonR7W4z3GuD8AfATYCbME8Tei7v2aS",
  "key19": "Dy1a2UK9zNAtqhkjakfWmFgSSoFrx1Suj6icsFF8y3KCvzigm3VXFPf43ou2EjPjBvfDmdhEJDkMUuX9vyvhT7w",
  "key20": "87BUTfZXhsR96tX8nJyGvEfFYDz4sW444hnQUpEA466E6Xmyz6wzLxnL3eKi9cH4iwGQimUrsaX2D62LeTeMNaa",
  "key21": "2uwhMtgE7r4QQ7gMuJVsGWtQBxo1TeHt8MKhsSgfHAtSCS5htFZZbVVfPC5swpCFYeMKSk6tUsBHjW9w6iqFpats",
  "key22": "5LMGsdwqGq9PrFSmAX2XRDnZA41uKzK95XAgibhjHqmsCPVVssAJNfFxBqGbPQVjbpMmC8eR4GAY39xhAhXRs22S",
  "key23": "3G1RpxfGqiyPhyDra2DfVHi5Jweh12LJbZVZq4MmDgtMiUCXKaki5twi4gFcqUbEp4RKBm1HEK2hwAZRefM6mvkg",
  "key24": "38iPMbQYzNPCFrpWW5kvm7TxJov99KUguDAMXnvMrczmPF6nKf8R4e4kf3hd8DD5UncgxVPEatThpmrveAekwCDS",
  "key25": "62UYG9k86wG4Qhrx2aKbhnizTN4UYVu5s5XaDaSpLiTsoUAvAsnCJyWRq9E7wJuCyyejt58YfUeM49TJFR2oz43g",
  "key26": "4D4CuDuimuYTQPhzFa6v47nw85ywWE8LETNBHKKrgfCUD48LKm8n1i1rg5rzkLxS2n44N4KDXStqHZ5uf3b5ZvWk",
  "key27": "2GLRXwueYcen1rhEKAYqjmynp1pgWrsC9ATE6QinPoEB7pYNZ5qDniX4CypyWsncdoxYEdnDoxEbgz8oDfVNQFbe",
  "key28": "4A3aMMU1rBgmWAG82zBBiJxXt9TmFkXNxBsEmabjNSqiMg3CrossepTUYa5UFEw1L5XMYJGKuF6syrV2eXKi3kC3",
  "key29": "2mXqq99FeL3LwtVZ4wVNAcEnb73nbQDXgZwnYSoAXSzZZwYMCSaYpJ7Ziv9h5YgKLkVaEEiF7sdp7dEiKK8seaKi",
  "key30": "22skFmuFpQqdjV6Ph5JUTPZ97BaRSbnPL9vhwN6AUWqkrtvATQnuj1VfhDeW2adXJ43FjPtDN5vRprTAGdVnneLF",
  "key31": "3xSubhQoq1EVhBAsyakcqojkxtNsojeuDWMrmoufjLmsu6hufEPMLzJU5eFxUGGZC7Zvg4u7FaoV81abxVF6GDBb",
  "key32": "5dQGufdLLNBrKBFeCh6PrMSm5yZh1PMvnsHKmn7SsERT6WA1x4nuxiJJH36hmdhA5MBJusGxQgMLQiZi68DqoaSE",
  "key33": "2tMugGwDSXK6Nx8rKQsUpHtxmpbDL1gM3y8FtSoWMMtAHuv4rqpRn2V8GgBCwpVNN7JnfNGfxfVdFm3coQesb9hc",
  "key34": "AXxweUTaUnVw8h6NkGh1QLruDjN6st7D7coavz53RpAXCpzfSe3DztPE9PKHogcHWEWYM5FLAPNiyPLj5LsUA2k",
  "key35": "2DvPyM9zrvGMbZjxdDtJGQruGVx5Spa92MgcZTmMjqqwdCaz3qQDf5dKNjnbzK6A8Pt1i32sLtySBqyfh1fUxt95",
  "key36": "5jsCg8YV9QMb8Ba5AzBtYqMfj3o45HCjKj1BXiHo3uHwTyEQaiyN4dtFUbTxfETpNyESChbpN2d4ZnDeWxabYWs3",
  "key37": "5gmRT8hpeYCeA3BoLBK3UwzEEygeAvTibKn4MFVT3K2De4VYoizGNc7Bc8eCM6xUGYhij3jqn5taNgC5RnFbJ4Mn",
  "key38": "2bEP3ahiUTQyQq4jTcdjz88th5a1PS3c8cJxNTLc5Y6npwFWiDPZJdtoTKyRbXfTJnYtZ3Da7frL5ysDkwex82tD",
  "key39": "gjM5YiYV7ohuKkvNuQGpYK7SLVKDYJMDiPhjPpMjb9TgDzfDKMvZX86cr6dZgd6WKFJG2RaxsBhmL3bjdtLY9wo",
  "key40": "2QM2Q96uWRHzCLsRntZ6iZj4UEbpTiKu2N7JyeD6GadrS1CKypujRrAHxb4KS64ZzeAY4XiHhxaca8p6QX3YMXNe",
  "key41": "31i9J87czo5nuT8oYyuZYyLWxSD2o4Yv3d92XnLF9QELhccWErhBa536Bqc1xjmc7orqET9qqhUVMBDaS8CbGxnQ",
  "key42": "5AJ23EfYQEToDswN3XFhFCBFnRRxMLYYc8eP2dThQd2hoRRJwWRZYcQrGYxRnhRh6ZXbd3dPcejFaXvMcduXvunh"
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
