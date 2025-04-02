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
    "5CK3Qs71pySNaHLm9zJphVPdetjJVsUfdZe5M3FXmpZGfK9Yp1iaGDG6UNTEnU9qEie7ozxBaYcLMR2FbX3cvZg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vsxUNwP26j59tvuC1TMBtCg2LJc3EWSSD283FtNfiierD6AKNq7D5XXPThJgVQMTzVd1H768xNwzo5Q6LwM3tZe",
  "key1": "2XASBLs8yujGXUnYkA4dX9z2Mww4bfCrFGaTYfsyrmftdc2aTngKT7Dmduajt1PgtTHgYBNUfwkhY9AciA7ub41z",
  "key2": "bNdro5xuKYrFwtPT342V9kW47Jz8n82W2HyQk69EjrHgqJjQDYwNaZqgVJspMoAaAdsagjyQHMcgNdLmhgPwuR7",
  "key3": "22QASpNYWQw8NTDpZ2wU8s21LbRWA6k5QLE9xNEU619VZYL7CV59BySNS6EwkWvVTz2N5jfdP9iNuMoAWzTJtbiN",
  "key4": "2fykqGcdEmK7MHtwFrNCPmSUuDNdBdYM6W5wMrES6U1VKcirsY8EhgRDAsRd9dmMDo8MrFP9C9xSduDhH3W933uD",
  "key5": "4XKF88PstJy8qQskWQ44mqkvRQtM4bbDv9iaswpdW12aUdwtdDxxYnfYMFTmcpvrjDVeWWyxjuJwq8PzeGzGmDP",
  "key6": "4KYQBPmLV5hFavrZDKSutoNVgyjy7LchQoByPnpXHHvVaz64iZFfnVfN9yns6aSJcUE654oczRzHmbnNdKu2mDdF",
  "key7": "jnmNhKQ2FnoavoaQeJG9QKDZwnpmiiXjTKuSnLS6p8fLgjR3uKTE3Sgu8q85ghLk2jL7SvNh841JEM6mJdMYCqP",
  "key8": "CDNVMiyg9xwrpSxH5fKW5J7kzTXBFLAwNyG64gp9EXCSvxvb3KWt9dnvJhn1yqidiu8tBRjHonCLoeYEL3GzCmz",
  "key9": "5w9HoKoMgHkj77ACRbxLzN8TjsQmS2vA1GjouAUaE47HNJeWwbMXZUWU4uEbHkDEZh6BHhBe6CKgRDxgJ5KeNMLn",
  "key10": "4XZz6xSgfbjB7rpsmW1LoE8D1tn67n1jDyqGm9KPVaE9U4Vw5wSvZmnfjAt7wrdSf2SzHEF5VFcgAoQ4G939xor",
  "key11": "2aUdi23dDMLFfeJz58wyT92ndtJZiGcxqAT6eoW62Cw5MRhZGPHJNwJPEBbTnA35Q8VYAeoS2yBKBDr6mXc7kYFn",
  "key12": "iqN6xj9qd6CqBupGYfLYMppuR39qqDSPJiHvrBHRd5696KKyen5VzK5FgtjbT6fPjoaYsv3VefVQB738FnhEkYA",
  "key13": "eVdMmt8o528cHgtkEuQqRnZqFgio6gQMru9YfTo54H7GzNJhBSCPAsQUfCwWH3uKcv7sKXyYVNuvcq9uLbeLgAz",
  "key14": "4bpJjPoWqqokcaun21NnsCYxXwy3FKyTPgDcinxvYf7uxahwaHomWEsWRy5mMpN6cKff9wkxktw4UfQNP9LspSn",
  "key15": "3EAASGgWv2yiHfWeKPBGyG6sppPQLTRfkSbGJgJey5yQiuUtjPrx2PYDRscRFpWXEEWZcQjo6L9uXTMTVnUrwcTh",
  "key16": "gbXGHeycWhDDo8RgPi5rx3Lm9uzmEqx1Xs2Mmxiroxwy5negoScJdNFk8jPPsu6v32rrTCbCaVTyrycj4MgntQG",
  "key17": "2FVjQATBwWZV9yXNN41AMAUu8mhYCWJsj9wchk5uexAoCtV4u2rqrKsLvst7BuWiiuMwKvMmehfSTb3rZeDqoMjs",
  "key18": "39QL2PJ7c7m5CE8pPMTYEn2iXz3VcyfR3FKobNTjzYkJbbPwP2nQxHMS8LETMsbdWCKGtoXrRnh3SSwTb2Yi9S2S",
  "key19": "iX6NHbxtt4tKsX92xK1J6qNFUaaqu3sKF2TRgPs4F8NNuZF9qparsyUVMe8SiwKB4gw38dTuwwVEVwLjSYZFne5",
  "key20": "4X4XfRgdnRKUTKUPh8ypYtGQ7W4DLRxnKP9sBnwjzJaKnvQiLu98eRbyC9f6Km68ZsFdqMhVGSdtP2dmq17bF3rP",
  "key21": "CF7iRp8f3Zm1FDwTX8MPoZ62UNHtwZPgtPrDYqBrz51FAUesMUSx4vK1Cc9oP5oKqoA6BkJEzox5TiebU6oiYkJ",
  "key22": "3LghGFxLyoNY56c1X1quUMhX8D32qVCox3ZiR1RL1L9arpjkFNTFkCe5wYAv82mQwvWrZ35DKkaXfCA1MRqMQoto",
  "key23": "2gm4AHBbcsC18gj1MfJGAE369o8q3TKWLHyq9VhLxofJwyNo2rcPG3PLbHwDPtmPwc59fPoQGvnLwer8zZZh4sES",
  "key24": "55Sg2LP8U87iKBhFGSqtPTxyt6iKrqdcHpDk8jMvTFadfTZzHkWFBsE4SRdruEjW5TbPNtAWEksZ4SFBcNLRD18P",
  "key25": "38u7fSoetWqBBtdk7sSCyM6BtCdpZDFf7xxxXLcBuv3oW9yEutLzHvyzSfYc4DwVHVqYnvLfRR3TZmwvXvT58877",
  "key26": "3NJCoEL8LCSzpkv3MLhQxAMdjm8Xo7LiiidPb9SWhFBL8ji6pmjGzodCvmccsiVJTUAbr3YYi6MZJsVuVtBdpMwH",
  "key27": "22qQ71vcy6VTrGx7csuiP6j3ixaXNbHE4Zi3JmFvSPe1Bxp6YXFdZaXg5jwTp6kAuNpm6f7jAmTCkW1W5nPQbDZd",
  "key28": "3nywrRG1PpF6qpSpTmxrp72CTnENguqdajsSnUxmfJADeco7y2k5iDZ2m375WgEK4sEevFfeAysGEeAnsGibdbdS",
  "key29": "D8vsJnHri7D6J2xsnm8qd6oot9U1SRHPN827huy1kFCLPV2ZUj98LZukAqfY59StNQJ1cGX9F9uFKyRvSfuDJGt",
  "key30": "5aQY2fudbcS46J3QdmVoqdmWyb2ZiuZvNimUrjTh7ZAhPZmVp5aJhoNrghzQodi3AAu6hjsFzmyHTK2XXmjQMxsu",
  "key31": "2fNJGXDsuuG7GJXzL3fBWWSkXWNyoo67wCbQKVcEAtNNTZG9rpYtJXvPetAh4YEiJpeNvgSuNfyp3zAusZonVtNS",
  "key32": "4JiBYvnFTTy8nBZxjdejp6uEyCZg9gHJ6xT4rLyts2hwRS88WfjK5EcP8b2gMW8FS1zetkMfJnFqR6wKvAS5xgXq",
  "key33": "2uWSeEXQgcJTyoQ2fXX12nTvFTXQgaLfovD88aSh7Ki3rPDyCg9eUDyDCesoBJfx53ggH2KDceHWG8QmczuPWBvi"
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
