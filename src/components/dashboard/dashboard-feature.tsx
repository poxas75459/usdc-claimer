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
    "4Wop1puaCsF4tYwuahb58AajZC8j2hRziMan9f1stbLsHGUpA5rSoRCto3RRCmop8SWyE3rGxwdVGDwJxeYU3ALv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKvrh4LStndUXjXFUksDykhQ49s7JQT7CBSTmGuMCjB4LP7H3SbLyTg1jBu3ASPqrm65VKauGVxj56Xtyjij812",
  "key1": "4bowdRQWJE62bwXH7UtJrEnYGwSJRWd4EbiuYAwSZ4DjFqnPSftown1DMEh98p28iCv2qK5kpFuG55dtdd2DYMqS",
  "key2": "4xAKbLPGciQJss5ZRgNwYdxvVt5RLqseLnwa72kiFiaN291WCxZaHXkKqo7obV859H1QothicuU8CTWfaDAun8bX",
  "key3": "3d5eUiwwQXScQPEX1678sFNfYCThbafRJT6YGtgeLJRNPrYBf3TYDHaG9UFVfuq8SwpgNs1uvMVSkoxDcSbhcZZz",
  "key4": "4tavd3jXKWrbvjbjWgFg1qR7Lce7oUCNJcPTw94qGnBHr2k8WPNMdgjQxuCczw4D3zZEotj4ruTEkfusW3sws7af",
  "key5": "59ycj8PVYjQ6qWNBk3PZQsF9iLtMLk2zNW9AJh1LA55pLLsP9Wtyu2qtiGshnpesTfVaBTSRF11JxwU6Lg1xj3Kq",
  "key6": "sj4bgShrLXdQ9LY63izGmZxFNzV38kzHKKZx48h6TkxC5ie1MvQSir1SspG2Y742X2LcoShz3rFMtJmg77HVxEB",
  "key7": "2RrKeFdMAQCNaNrQZ5qfnrsNek6kWhX7z97CPJJYi6tShuvHJ1MWnHZFe6ZPrysiHLeLNcmd5RBhqBbnStryAfHh",
  "key8": "3ZxepFiy8yjDLYyBdsiTzj7LJvnWhurGT9xr1X7Kj2JXH5pgQGhFQKNGQzm4Wr7sSbKYamxK8Wi1aEySAVxWmZnY",
  "key9": "5gxDCGNTq4ATqJVXMDaSLoEqU5dvxaHPqDxP8wbGXA92DZRDWgZAz6jcJQZEQbL4YS5ftrdx88zppREtgBk8cSVe",
  "key10": "4atASYNk7Ks9k4887qv2or7ZM8iPNveo5Z1qvnRTBDn4pR3HvWmcxwxbfvuTjC7MfTjH3Xrw6Ev81smXCcaZne4s",
  "key11": "5kVH3wS4SvzPLVhojktoa8BHbVoFmNZaAXXceGsuzezDP4zdTmrKiTh3KuKXtKSSXTwB6WuPfbLYgcc5u9uabybY",
  "key12": "3tSWKMnKLakkQ6o4bDQPf51TAz48sW5zTuj373BBELGmMpi2Kt4SRcC86uRtpsKTHJcSKo3p723rVSvrfkDJ3RZz",
  "key13": "zporgfPcCUxTaLbMjGKGaCD7YnCqj553nuc7jwosg5MVnjqAdk5mASvUnAG73mH1NnXQr7hqQZhzmvozBfumDZf",
  "key14": "29oYFZZjHGXaDNk1ZpxixDj4ubGLspvnet1p7Tp26sYpCnqpsbAwfVZN2xTYW3C6WWjM2CsjFCnyAShCXehZ41SG",
  "key15": "3bwqkjRKGFue3PDFR8jBjz7p2bp7nEx6a4ejMY4n3w9Cw55QjEpJbtxRutCDZhpQbz2yyR2ooXSmAXB46ci8Zdmg",
  "key16": "51h72eRDFyVa7xmsZAAoNQrBVkQGkYYBMAPn7c3MC26oxkmhrrkBqNguE7vvDETTZJBnCedAKrrnD68rJRfo7erC",
  "key17": "4jVP23Eu6MhyS8XEeDFBSEs3yigpAkdrd8dpVGrLteA1uSvqEoTvBVzS9fikzVUEdh7HM7a1BN4dDKXonbrnCCDo",
  "key18": "59GJePVGosVZ4D3y5cVEoKgL5KQLFd8UuqiQKcrZEEcw93PLhCww3VaQZnr11f6TR9Sj77oCNwjXg4e1YqgZKJBY",
  "key19": "2wECFBTtFPymXzvaP3doqaSKtFhzLkYefQb4JwT8wuARPYTWDjgin6qbnVNffzBz8GiRyx1atVd939uXA64RRX9E",
  "key20": "3BM6EgKvCutGgqTFbsM8S4mvX5wgXN43wxjaBdi12JGYzBwSF3d1soVt7HzBqv5Ef4RQMHqtT172MMeH3E8BisBD",
  "key21": "X72mvGRjcSxG1afLuWdeTHbQPWv9dimMrpJc775eENhrWNYVTgrwoTskuTaK5fumZ7fji2nq5MJUzEj7Vby2nLU",
  "key22": "3ZnoSMU4fxLrVGKAoYeGr4cmCMxLj1J7R8BY6qgrqYAsskgC8iHocYtFz924saoh6gGEU4Gip14nckergsxVVcFB",
  "key23": "es4cnqm3hw42aPQfaSkmPMr5oVRRDEqYX2AtbAruAuYL8gp5bgwz1g4cKpZhKLLhXvyR3phBpFBtsWCvSS9EsZB",
  "key24": "2mDJGu4CBCW39b1AUtobocodfGGAFx1FLAyq6b1CWnus6thEZxjTKmQT6nXHF2ZN9mTHWs69SGBqipQZYLyLSNKc",
  "key25": "aJkjfpEUWxNPk359TJ1rd4KXxaKRLmztudktMwApmCqp8X7x76rEvMVxvxsNb8oLZ7vbqsRBczhZWuVfQdp2igj",
  "key26": "56wqekmYF9s6GyiDLsFUKRtRUkXjjJgJLpPf9WjggcdfZZMPjyj8DWqBBK2jN8Zsk1G7BXsDBLRw8Hqghx5k61ig",
  "key27": "3HJsJCGPjkqRrytM2P9AB78r4sCegeybap6H1TbTZ1PhjC6mUHAfPgAyEgKugQrWf28vgxf9NDtpDW7EpbnYuDJt",
  "key28": "2dmxCLmzitrZBSTKTC7EnjES8kFCNNqhaoFPnBFRziCWxZMvrGujVxSfRdarzrNFLuyPKuWPq3SCTuRb9T9iZZ1Z",
  "key29": "4bHETxmhhRNFhg2gvTzbhC8oWuh7ojDJBiLAMuBGnZj6vr3ik54iwqnipustu4Tpu5iFErrkUoLnagiJamfSj7dk"
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
