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
    "2kpBx9RVpqpqWNWHiSGbch5uFYNVeNzmePiVHaBbWCSmfbr42Em43WKXfybgipwXg21fgZQw1rUW4Tg1u6wTo5X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VawpEoTE3TLyFUPToZJupTiLm2RdNuz1ArxGSRUd8B5BPXpgzAABvXLi8bv5pdAFDZQziFYGZiiyWWytNzx64Xw",
  "key1": "51F7SZTx3woWgniGZNwUoyZEkwiTr7jUsnkRqbNwZXEYUGgatrdrcQP4UsbrVBjqRJtDkLEhPaqCaSQkNj1ZGJKr",
  "key2": "EzZiS89dKQDGM38R4hMMoCxyTUtVGAG9myjJBL6r3AA7caBaeamf6Uh1bnxAWSKyJAbrSTN4gtPhvGfBYYYgW2d",
  "key3": "qC5nsehL5gqhUZhi3xaTdLFiFgw54piJtLnn1rJwHN2GZE9h7GtHwiM2J4puN9UdWKrxpDFuRKrY7T5qv9sfvzi",
  "key4": "3UckkueXEH8SaXAPbbreh68bEQfEuyML1gYUiK2XTMKBuMJsP8UEGfmkQqyXVxoGRYanoCzDNP1Y1jx3VMfz841V",
  "key5": "Tj8XLdDLoxMzEaNDGpCs9qf4P75qtSEj1xFJkHbDDXcG7kqiLqS5M4WR4PCJtuqXeTW2rF81cyFMYn2CMdPzxYX",
  "key6": "21foctzVkB8TV6HA1Ry2hBtuJhb8i7CAU3hkJvLAC5GYVG4ndENowakdbgKAdCFvc17121NUQa3yBTiu587YMWmG",
  "key7": "3GswCzVK3TuW3df67sJU23WsqtwGS6qEr9oEwkon6bnQ18qRFb45K7oTx1XnwyLu2XVLvKdZPko3BkPPQu62mLqu",
  "key8": "62VM176robZVqZCvUpuWMR3ac7VpnBJfiPTpQ7JryLmcfSahmZsqB8awXkw4usqfKJKhB6f7VhqptbbHyETXzJxb",
  "key9": "4XhpcTZcZJ5VQ8ogHJeYFrCcdEyoXZFoox2Q6j2pFSGDCYmtm5nXvV3n5VH32JipDx6VAqm1WnYrPRyKVC9ty2TP",
  "key10": "nyNm7vUGxwPTVw8u5z78gy4w4ZTdEKUr7FSF3cZv3u6f5miRXNDC3HNZMkmc1tK8rVfKLMCV2N6Xc29g6NCB9gD",
  "key11": "55UMLNo1gr6qeEtkF8N9NkTwRUvw4DLxwtETZGpoY78YkXXR3ip1zevyJHS72BNebriKr1E76q7xhyZjeUeyQsJn",
  "key12": "BuXNdouPxQefEcSdRHDaXpnUhCVRHL8YMkbdMDFLpCEXq6deRn33MNCNnKUgk8WKLrbxzRQy9z3S5gjMaYeGh9n",
  "key13": "4zh6qpKqgkMfVtDeC5gfm2rQc1jjwe8cVd2HnWxp2BUJDinyC26RMJUNGrEbcLxGZWPY598z6VGddGbvBvPphS1v",
  "key14": "4Ev29UeM9ygEPTfRfJKRtv5ZDrFHLQCqvCUMAeSJCDsk7K488VrKGvacAMfqkaBVHUAEBykKQC4NZ3bmsn4obAY6",
  "key15": "5AUUMN7cF7QHKVS9VokuLsMAcba3LsLY8dEis76y9vr5PqVqpkh3fjbjk6GVdSyNxPoovxoxVHmvSMqdqGLvRxRS",
  "key16": "3WpVumCjDjk9NkWFLG4SyeRHksUpsey1BU4bxVVoLbaQop37Kkx8tPK3J9cuTxSmmfcwebAQtCfA54RwLrSD5SrD",
  "key17": "5KXFobNN5WKzJsoEesDA2soP5FxnaGZYoZeQ7kGBBKR1PPqxqhVEe1giNTfSdbzpfwDjmFrsmq8PiSRtk3x3k8X6",
  "key18": "3eEN3k7nTnvn8bBmeka4SfCVjt7CmgjpriTvXPMtUGsf927ku6tsFy2RDPRiyTZUzhVZUmLzjxSCdXv1HbWX1P93",
  "key19": "2LsvzhxjTkPtkC6cgQAnjRW1w35cWoXi8jDHkQBevWZW5mmVsu4hL5j942DMoJaxi6AT3V1ss2LF87SxsE9LYiN8",
  "key20": "484DTG6szDnUFtGV77ZJiuRgXn7mLq3zCq4iU1spcucgnS4vb3r8ZJxrMn5bdAjGWzccR1qVwBHCKE8Z5ChatMNm",
  "key21": "zmR3AH2Ch8Tx31vf2FSwxKbjt7nFkviH2KTUFUXj5b3jopNrDQsYwyQPAJw82xu4HTZDU3TDQcDpqqGFHe2X55L",
  "key22": "5p8FAmnVZFnMfTWhyB9QZCjCZ1zEbZBMsLJzgLg7ruc5GGS7Xq9h8u7Tng3iWVUxv5rH2yacVe2jUMpFCwU3EtaH",
  "key23": "4p7ULhRC18p4HpBhk1TMBBsu4C7fUc9zcoZFG4DV6qMmxqfT3HcjEUMt32enxspZf6JzVAS2r3wyfYvidFqWKPNj",
  "key24": "3zKABcppauNtQKBZ8yXtkp81ymHHL5kUQeEz6ZTDFfJBbHa9Vv66DRXDkZMrUTW4hk2UPEbZhVwGpEbE6b68so6o",
  "key25": "3gmvKQhckS1qd65s84j6DEkrX98fXaB6kNrz4xBteJebjs1iUX4kBpKC2hyv2xDhGiHLGbGUnrZiZkpXPVRv2SU9",
  "key26": "631uu1baPabowRjBB7iLShGWzJWLsbLzGeG9dEgdxk3y6xELaYVz4AyqJJnFDCCACVGgsUsdaCQaRDcWpYzwDUQq",
  "key27": "3F5huJCcPChZBBxudog7bE3DMUj1hNoKxwZRDs9bN3kFCHLhqFHSvGDvk6ooZnF6hNPcELdL2ivVQyjcu3RbuvcU",
  "key28": "3jXjFXsAV6sRtnw7dFML44vfimTVTecVG5gYUtk6tyKwyyKMxfhz4h3p6zrSYnh2RH6oPvL34fVyBheta6mp5wKK",
  "key29": "4iZbWMDFgs2CDR6uQKo5o6msxxS8rgyAHT8ViWvCru2bwRC7NWnJRXKt65yL3YUXzjLZz1UP7oa9ezus8Y3wVTgB",
  "key30": "3ePhi5LnaCeGu2CYxMenP7TfcGuYVUrNsFuqZX7QMYhHCHfx6XNdEqwuVqKE7ZtEnaZd97kLQLoWvR4vpsNk9ac1"
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
