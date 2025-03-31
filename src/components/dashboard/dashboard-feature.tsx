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
    "5BsbvQcwyGMHYCuzUVTqTU12nSZwdJeHFnnrPjXyX5KerkD6D7XiwAygst7uf6bGmHYgHwNpdtPXMtp9B7LCqCxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGLej916tw5e26Y1eCFNLK7eAyiqFsiQmGS5MpBFffiFY14yPTzKufBrmmTeWyEGEsvz2gtJrDhvgBRQNJEXXr1",
  "key1": "2DqztDA2tkYtpRjF4SgSUJdrSX8iCJHhmeKDzSiJ3UvDG4Xrw9gSkGChNg2f3zVpTRFQRteStXZiRsntq8W7LX3j",
  "key2": "3sLFSGD1SCRK3uzPx2p7ycpyFinXRNmAGC6AShpaT8yU5kLQgv3xa2V7EAdYxYgPHTpEv6Rmane74VroPibKXDfd",
  "key3": "hj6QRo3ijRP4jN3h3CYdg5TBPmtVwoJndkrJ4yZSD2YEyjkQG4cuNGtdkho3jPgTAALgS4arKTySxmFLSTvLXPj",
  "key4": "2br9T4KVLVetQj7tjrvWQhCcZA5gwp6BwMpBdbgmdXc1kPvMJUFRV3RFjYSi3w1bR2fi3yTbdjr2yaUMzPLBxbcJ",
  "key5": "29w71sEnwpS5GTDnGmBYxXRiNcN5p9E4WC7NdkBY5831mjji9fLuHLDGANV5ygbZAvQWbq4rEZv14VNJPm2yUqka",
  "key6": "3xCS3v8F32qpFLaFuHcAP81NKGtm1i6tejiEDLCdCH2MnLSdTDD83NPoQP4PFnGEJDdEpPhvaDiV5VChAeaxH5uA",
  "key7": "5hWpB3PR4BYDKBUrL4oNKTUaHZDaSusiBuHpG6EK4d9KMb3QmWShVfZCtDc2QPJ7Q3fdbDUkekq5GuRNZFA5drD",
  "key8": "uj8ks8Caf1NqtnpS9bq6s1VgXBoht4Xdc4XnyTNATGA5kp8TcdkiYwuikViarTuHzyCwXA5ZzLU7bhsrmJxyTF9",
  "key9": "4HE4g3CVSEd1bYePMn2SsW7fny2HMpVTP2rvV5SXehTK3PHVsZbJPi89mGBF8caUKT6P4xoSn792qcYtsL9mVHiP",
  "key10": "2UEghzZ3PHGj9bihStzGLMujpgbecxEfRucHAsfECTrwX2CfpEyKnxuVWAbRbm3TL7ZAs7Y3vGh9yQmXAUCsoWT9",
  "key11": "2PkLwNNyMcs3yTwxLtYgrwbfnemm3nk31F4yoHuXdJzbpmYaYoMprEdTXkSrpbYfYtzDouHpbzaHkZocYLPjcYiF",
  "key12": "utnRhhNSwFWzm9WKKdQMMaJK9QbKugCWkm34w6UxYSFvdCgeCaFL2Af924d9KtDwDsHzwban8MAnczgQxSfjpAe",
  "key13": "2Zog8KTtm358BnAsD2gy5UJjiAQ3pA5LoFRgZmH5d6ApT1xEUX4WARq6m5YLF7yHngYDhgJQJNytACCdDQBgD3rn",
  "key14": "3bnrRZbsSz8fqCyN665C5QSo4qryorETujs4HYha6tMZ6AEn9VFUyUnHnhMAThkvcn9oifK7E4dhXdEKpCcDe5RQ",
  "key15": "347mTxJghK5VAfZ7fAgZ7ggbPF1sVAVpWXHXra5SEGoJPqEUpEnq5hdBaziDFFBegFuR86t2qLJode2wRzpJsSsz",
  "key16": "ytKXQK38TukBLmbjfZJ31JYisV1DNTSmL85AtdRv7MwDnmWcXModkgJ4azFyDp3Fj8Y31Smsem1Sw7wf2xi1m7M",
  "key17": "4p99FujjKE4udvpUPq3X73RbWSr1HKRMr99bEVhbxL1CCuk3HJja2DShe6AdDMRendZFN4NLtrXHhbsyaS9bMA2e",
  "key18": "52s19DHsrhdfTUXr3X85ZemALsbmp3fZTzzEiGKWhboAtEjDtbkEfgXPCKhpJoA3PXB96M6URHBUZccp8PkTPfqx",
  "key19": "2ns5xddMVw5WAJYNEECQMnknYput1zCGdFknPJAeeFrxKvfWSepKvbD7DErLioxRxZtZpfE8dmnzPTfSQUy4gzZ1",
  "key20": "2d3PwZAB4AAt3XjpPhbmhSZRcyGJT7fhqTLXFTy47F3PYPScBofR7oAS5gZCGUbXksmpf5WRuCLAxZEs1ir1qWua",
  "key21": "2C91Nc4H2DmJpeTx4fQzJX2aCK16MFgh9yZHx6omJcbBuUK5iXPMqSQYqx14tXqYMYjRKpfLzWGZCYxJzhr1kVLt",
  "key22": "3B1p7g7WMyK3rnGc9J8KTtu1US93F87BaBS8r4UmyeyGpgwj1LXeCSYsmYqLTobf4c8TppxaKtzAqBCFU5mTXT6h",
  "key23": "4i2HFcJkTMpZHASkokjRe61g9bDxAquG1NZadrM6mML3m6n9TBLhAiMANfhsKbaTBALHCoBofiNYN4W3oebiDZ89",
  "key24": "4wcx9GT7Y94Toy4DQXbCFQV32kciZ7C1bu6KoRH75uWT8F2EJyiWpYp3wJMX9ns5VjCziXEZ7G8LyQ7R4Q466XyB",
  "key25": "4FDcYZhDqksEFz2sVrac1fuUdnWFASVJfXYepqhfTNKhkxw9YnaE5HMauGsY5BggbpZHEfYt5gBpNFqsAyW9iasG",
  "key26": "4UsZVfyggoFgRv1CrScucsF3ni4bgvnjajCoQPrXjMgjyoZG8AypsbZdZjMGGuEg4QWTAN976CXSyivMLffLmnwM",
  "key27": "27ayj2QaZPN1Qmb62MhfHPJ6hMbcnVqeWHhBqoft2DkU7RJaG1ibVe5HsLfmaqWxZGfEjKc7QkdmKAsDtV7MP1nT",
  "key28": "48kj6FCBeiewi9gktJQfemDZ94FDpjFB6f1RvqBPFVbQta562PapyURh8tjw6RvTtjmLFU1EqhY4fDh8g8CGsDay",
  "key29": "58gY4pS32cZJPSc8wH6JmXnvwXE4ujnZCF5KeFp1nHeoEz5QakUxhfETf9S7FbmXibpSpLdeX3rYmsE6we6uggUE"
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
