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
    "4ZoWjHtL6YCrs9X6EjizUhYKuYrCPCy7qcGgJHxzErHtsDHZSpXAJVgCyTpK4u5RxhAb8ED65GZ15rKp8TYBsBep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdCW12TpD5udtVPDAgTk1R1dHndGy4W6UVS3A1xJtzCkmvEWetVaNaEC94aumEKtFy4TLoJZ8Ve68vvNU1HyVY1",
  "key1": "4vbLxShYNwB7EBu8wRGWq5khrStuR3LosvAMYuwt3ewMuBNSPqmsm9NFSAaamkmsVtnXKfK2PXZMBst8rzwTN4nE",
  "key2": "5Mm5Z7p9nj3WqbF1v9889ZHAZQStQRbeeebng13BgxnimUSfEciQiFh3jiXi521kRaYjECVdWGoPbg1EEPoV1J1D",
  "key3": "2pKr7pgYB6gnEGVK5WQbLbRd2D22LjXaEgWFWTmDJRNiqJDih9AsygGDvVDVwfpQP8MT66KrBP9kszxWcpeKSptn",
  "key4": "GSatQLGpKfDVMfgKEryHDrv1T27fFJRDax5XiYvrzhXCQkT22vUzPJ7oEWgd6D57ZheoRsYa6AgWyKTyJTpq7io",
  "key5": "5Nq982vhX4E5vehdxfhQc9m8sbCMEx33Um19et5N8LnmJAhQLMMcKPgSaZGQLSa1UGQuhrwDgJvSNBco1qzcKN8d",
  "key6": "2Rk87sUBLyp6nudVRGex6Y2QUFpBBD6ue9ucSuFr21BvPJyagR3i2HGdQve7jArghw9ph99BhDBJgsbRyX4qXVow",
  "key7": "4edw5MgbiRjFZpMFUSZJBd6dTH3PWcbg9EjbG2GY18FhtW98DhofDmdARYrhNY82TeEgxtWH6etiABq9kq88Jka8",
  "key8": "LGXvvK7gC94Z2uyAYXBYo1rn6N8NcymMTnpeUMv2fqT7PjNTC1ctc76wNQ5pjRT1uGykTedD7k5KxJ1JPKVp33H",
  "key9": "5HG9MCRXn2kQwG9fw2g94G37CvLSuqzf8Tdwccscy2sB2QutxfsSgnbVBu3gDy6jWDYys6h8BQG5GddCpd6d2Hvt",
  "key10": "33TfmDw7ZSoALeToQqQRGctRfJetGVJTCnmGkggN6QG1jPNa7yKzR9bc532fidRCvDoH9zLFe5SPWRJ78X92FgiL",
  "key11": "NdiSsFYSHrDDX6e9XsUYpQR1dLnH9eSUzq1KFrXzuFzqr7z7eUz4sKwbz7wBFQv9N7upd9Yo5TYtf7bnY5BxXZg",
  "key12": "3cAMRcmfdgDjoqZ9PpGCDzY9S5oJNHv2EraRprCW7wwn7ghRW7hV7Ty1qZkjyo4bnvtPtuK2QZqBUtEK6DGbxtnb",
  "key13": "1Dp1aLvfh33zx7yWFcCohnyGskjWnW9ocR8vsnEYQH7d1TzH9ZsX9rJ5PQ8aaMd2HYssTTwNgLNHRxK3ydEiumW",
  "key14": "5TLLWFtjZrNH8FjRtY58jE5miGnwHTvYTXKXj9unRfiaNwZGr8Rwpbt21f542RW2U237sxYmVoVb9jJcpctCXnbA",
  "key15": "2NTRxacoRVMyyFzoiHjE7orFraro4cUzW7HHTudKc2anjW4ExmnsaajqhhAaa8qx3zud3jfNUgkVGEyr8XBBMc86",
  "key16": "5wT27MLTXYVs1iFSgYFuXAB1WSS8sFgKoi3qFmJGmMsM6BJi3dVRjtF3fZS82q6jh2tX8qcbmFuCnhEut74GPqKv",
  "key17": "4wvzjF5cDedtimM72RFNgU7CuRKQnxDHfvRfCasZ1nh7WFiaJWWK9webcKRDSDy6nobFZxFubfvhuWW2nDePsSCW",
  "key18": "VB424NLkhszPZaa6kMySSwSE3qNr2b1WAs1sqWK3oPia9NzRyPRVj37vLKVL4VR59EHNJ4ytTfLAwpKH5o92R5z",
  "key19": "5yg4jmsMwBE17BCzr5KfYotqcyBCJ8Xunh5mYhKczM9uT4vXkQAfhKcurvFJPMuFbM342XLC7wLDeJGUbtMMa19K",
  "key20": "5AxYnPc9sbjJorUov6otNmpKhD8YBQumdLN9gA34DysTv2ojZdrd724hTQQVDsdGoBjHHyWwU2ybQveYbRTb2AdQ",
  "key21": "4b3bfa3Qa9g11qujeVmtQAN1VtCFesou2UJLZ33sXr5S4U5tEsY2A7rXTiyG8HamUdX1UcMgW1SgHBkpdisHwwtX",
  "key22": "3KcL1CaryZ2dctSoEjcD94GiFoenCd7mACwtHqhnVUJUPCFFP8DZZ7Q5KNTtoLfJirieP7ky6Q27WWe9BmqtXwJR",
  "key23": "5qwoSVWnCXY8CKBr3YJ89qzk9eba1Yq6LJrsUuCFLBTsHnUy2ihErRD9UkgAgTMvVVGKyxvfsPi4V3A7LD9YCscg",
  "key24": "5EmAYRNMbaJeX7T5TGKhrgJHRge1g278XmV7rUoncog4iAn8oMpR3CLTXJTED76dk6iHt6jCk2V1wbFRogWtcp6R",
  "key25": "5zPkRsME6tLX3x5jR642xRRs5aQrqg8KtPJVFTXZeqy6Hnw2boFud8x6feZLQEmZcFGSWN5X1rJhKaL94uySrBzP",
  "key26": "2PAFB1AAbTJZVXQQbGzqGd99K8RcAmM4m9QaEb5W9xx6GF3KvtEjhmdaq4CuGrAhVSH4vgKAwmd8XSavfhCqEoVH",
  "key27": "SppCVQgxVpEkof5E3PsWTDZAiuiR9f3Ni71k8hayVxdHjv1WuG1EF9a1uNyeNYAoZ1LNCZ3ufjEuorDfcsFVNXX",
  "key28": "7WPaK425WLM6tKJ8xtecNeC76Q6MMQ4ZTDffgokpUoK3UZrY7zHFqHzALzEZ8Lic1oudaKuMEF6DGuFoRQ2YK4j",
  "key29": "44X5UxtNy1TbgrnWZpsYELTv8QyzpLVC6tiyuH7SoJx3FvKEHoRP2JoQrmfyhSH7kHgSW32PhXsYu6GxeqHKJogf",
  "key30": "3BSLBz4tW8KQ89MrQ3Vg6e9z9FzPeV3jjbkwcsviEyTnGriYTcb2b82QLgG4opX3b2FxGxpszSXtNbxEtpC9QzZK",
  "key31": "4BPwKiCHuNCkZR12uVk5BZTguXbzLr7QnojFk88x33kDqahXhEVy73zdafTsZhvmGXNLacCcntfDUwt7ZsQ3rVco",
  "key32": "3s6vYaXqixdu8z3CErukQmHmCunpKnEz8WBZt2PpxiRycsGTR5SE5CViMYR2jdiwPbd9xxSEWw2dBYCSUSJxWYwX",
  "key33": "Hey3HqzgSrStataBJWarCZ1ic7facRbeMvBCHpQK85T6Geia4updhBfxig6vQroFT2upBQ2aZTAa9y46ngknbU7",
  "key34": "5bm42QShhQbeANi5wbWGqs6gmJELcswvcgXXiQ6UUQY6vCjoQMw6sNTWbzeHst7rY21VtAtWMz1fkbHvfsWnMw7V"
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
